# Sampling profile

Collected 1,400 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Compiler         | 44.0% |     616 |
| Native           | 39.6% |     555 |
| Ours             | 10.6% |     149 |
| Standard library |  5.0% |      70 |
| JIT              |  0.7% |      10 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
├── … 912 samples (65.1%) Thread::call_run at libjvm.dylib
│   ├── 841 samples (60.1%) JavaThread::thread_main_inner
│   │   └── 840 samples (60.0%) CompileBroker::compiler_thread_loop
│   │       ├── 820 samples (58.6%) CompileBroker::invoke_compiler_on_method
│   │       │   ├── 563 samples (40.2%) C2Compiler::compile_method
│   │       │   │   └── 561 samples (40.1%) Compile::Compile
│   │       │   │       └── 561 samples (40.1%) 9 more callees, led by (20.1%) Compile::Code_Gen
│   │       │   ├── … 244 samples (17.4%) Compilation::compile_method at libjvm.dylib
│   │       │   │   ├── 223 samples (15.9%) Compilation::compile_java_method
│   │       │   │   │   ├── 80 samples (5.7%) Compilation::build_hir
│   │       │   │   │   │   ├── … 64 samples (4.6%) GraphBuilder::GraphBuilder at libjvm.dylib
│   │       │   │   │   │   │   ├── 57 samples (4.1%) GraphBuilder::iterate_all_blocks
│   │       │   │   │   │   │   │   └── … 57 samples (4.1%) GraphBuilder::iterate_bytecodes_for_block at libjvm.dylib
│   │       │   │   │   │   │   │       ├── 37 samples (2.6%) GraphBuilder::invoke
│   │       │   │   │   │   │   │       │   ├── 16 samples (1.1%) ciBytecodeStream::get_method
│   │       │   │   │   │   │   │       │   │   └── 10 samples (0.7%) ciObjectFactory::get_metadata
│   │       │   │   │   │   │   │       │   │       └── … 2 samples (0.1%, self 2.4% globally) SymbolTable::do_lookup at libjvm.dylib
│   │       │   │   │   │   │   │       │   └── 20 samples (1.4%) 4 more callees, led by (1.1%) GraphBuilder::try_inline
│   │       │   │   │   │   │   │       └── 17 samples (1.2%) 7 more callees, led by (0.6%) GraphBuilder::access_field
│   │       │   │   │   │   │   └── 4 samples (0.3%) BlockListBuilder::BlockListBuilder
│   │       │   │   │   │   └── 15 samples (1.1%) 7 more callees, led by (0.4%) GlobalValueNumbering::GlobalValueNumbering
│   │       │   │   │   └── 143 samples (10.2%) 5 more callees, led by (6.9%) Compilation::emit_lir
│   │       │   │   └── 21 samples (1.5%) ciEnv::register_method …
│   │       │   └── 12 samples (0.9%) 5 more callees, led by (0.3%) ciEnv::get_method_from_handle
│   │       └── … 16 samples (1.1%, self 1.7% globally) __psynch_cvwait at libsystem_kernel.dylib
│   └── 71 samples (5.1%) 4 more callees, led by (4.5%) WorkerThread::run
├── 404 samples (28.9%) main(String[]) at org.jetbrains.kotlin.preloading.Preloader
│   └── 404 samples (28.9%) run(String[])
│       ├── … 324 samples (23.1%) exec(PrintStream, Services, MessageRenderer, String[]) at org.jetbrains.kotlin.cli.common.CLICompiler
│       │   └── 320 samples (22.9%) exec(MessageCollector, Services, CommonCompilerArguments)
│       │       ├── … 306 samples (21.9%) invoke(PhaseConfig, PhaserState, LoggingContext, Object) at org.jetbrains.kotlin.config.phaser.NamedCompilerPhase
│       │       │   └── 306 samples (21.9%) 4 more callees, led by (19.9%) phaseBody(LoggingContext, Object) at org.jetbrains.kotlin.cli.pipeline.PipelinePhase
│       │       └── 9 samples (0.6%) <clinit>() at org.jetbrains.kotlin.cli.common.ArgumentsKt …
│       └── … 68 samples (4.9%) read(byte[], int, int) at java.util.zip.ZipInputStream
│           └── 66 samples (4.7%) read(byte[], int, int) at java.util.zip.InflaterInputStream
│               └── … 58 samples (4.1%) Java_java_util_zip_Inflater_inflateBytesBytes at libzip.dylib
│                   ├── 40 samples (2.9%) inflate_fast
│                   └── 18 samples (1.3%) 2 more callees, led by (1.1%) inflate
└── 77 samples (5.5%) run() at java.lang.Thread
    └── 77 samples (5.5%) runWith(Object, Runnable) …
```

## Hottest functions

### Self samples

Functions with the most samples collected within the function body, excluding callees.

|    % | Samples | Function                                                                                                                                                 | Location                   |
| ---: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| 3.0% |      42 | `inflate_fast`                                                                                                                                           | `libzip.dylib`             |
| 2.4% |      33 | `SymbolTable::do_lookup`                                                                                                                                 | `libjvm.dylib`             |
| 1.9% |      26 | `InstanceKlass::find_method_index`                                                                                                                       | `libjvm.dylib`             |
| 1.7% |      24 | `__psynch_mutexwait`                                                                                                                                     | `libsystem_kernel.dylib`   |
| 1.7% |      24 | `__psynch_cvwait`                                                                                                                                        | `libsystem_kernel.dylib`   |
| 1.4% |      19 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `libjvm.dylib`             |
| 1.3% |      18 | `tlv_get_addr`                                                                                                                                           | `libdyld.dylib`            |
| 1.1% |      15 | `IndexSetIterator::advance_and_next`                                                                                                                     | `libjvm.dylib`             |
| 0.9% |      13 | `PhaseChaitin::build_ifg_physical`                                                                                                                       | `libjvm.dylib`             |
| 0.9% |      12 | `PhaseChaitin::Split`                                                                                                                                    | `libjvm.dylib`             |
| 0.9% |      12 | `IntervalWalker::walk_to`                                                                                                                                | `libjvm.dylib`             |
| 0.8% |      11 | `_platform_memset`                                                                                                                                       | `libsystem_platform.dylib` |
| 0.8% |      11 | `PhaseChaitin::gather_lrg_masks`                                                                                                                         | `libjvm.dylib`             |
| 0.8% |      11 | `PhaseIdealLoop::build_loop_early`                                                                                                                       | `libjvm.dylib`             |
| 0.8% |      11 | `PhaseLive::add_liveout`                                                                                                                                 | `libjvm.dylib`             |
| 0.7% |      10 | `inflate_table`                                                                                                                                          | `libzip.dylib`             |
| 0.7% |      10 | `Matcher::xform`                                                                                                                                         | `libjvm.dylib`             |
| 0.7% |      10 | `PhaseIdealLoop::build_loop_late`                                                                                                                        | `libjvm.dylib`             |
| 0.7% |      10 | `PhaseAggressiveCoalesce::insert_copies`                                                                                                                 | `libjvm.dylib`             |
| 0.6% |       9 | `pthread_jit_write_protect_np`                                                                                                                           | `libsystem_pthread.dylib`  |

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Compiler

|    % | Samples | Function                                    | Location       |
| ---: | ------: | ------------------------------------------- | -------------- |
| 1.1% |      15 | `IndexSetIterator::advance_and_next`        | `libjvm.dylib` |
| 0.9% |      13 | `PhaseChaitin::build_ifg_physical`          | `libjvm.dylib` |
| 0.9% |      12 | `PhaseChaitin::Split`                       | `libjvm.dylib` |
| 0.9% |      12 | `IntervalWalker::walk_to`                   | `libjvm.dylib` |
| 0.8% |      11 | `PhaseChaitin::gather_lrg_masks`            | `libjvm.dylib` |
| 0.8% |      11 | `PhaseIdealLoop::build_loop_early`          | `libjvm.dylib` |
| 0.8% |      11 | `PhaseLive::add_liveout`                    | `libjvm.dylib` |
| 0.7% |      10 | `Matcher::xform`                            | `libjvm.dylib` |
| 0.7% |      10 | `PhaseIdealLoop::build_loop_late`           | `libjvm.dylib` |
| 0.7% |      10 | `PhaseAggressiveCoalesce::insert_copies`    | `libjvm.dylib` |
| 0.6% |       9 | `PhaseChaitin::elide_copy`                  | `libjvm.dylib` |
| 0.6% |       9 | `LinearScan::assign_reg_num`                | `libjvm.dylib` |
| 0.6% |       8 | `Matcher::match_tree`                       | `libjvm.dylib` |
| 0.6% |       8 | `ciObjectFactory::get_metadata`             | `libjvm.dylib` |
| 0.5% |       7 | `PhaseIdealLoop::build_loop_late_post_work` | `libjvm.dylib` |
| 0.5% |       7 | `Node::is_CFG`                              | `libjvm.dylib` |
| 0.5% |       7 | `PhaseIFG::effective_degree`                | `libjvm.dylib` |
| 0.5% |       7 | `Compile::identify_useful_nodes`            | `libjvm.dylib` |
| 0.5% |       7 | `PhaseIdealLoop::Dominators`                | `libjvm.dylib` |
| 0.5% |       7 | `LIR_OpVisitState::visit`                   | `libjvm.dylib` |

##### Native

|    % | Samples | Function                                                                                                                                                 | Location                   |
| ---: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| 3.0% |      42 | `inflate_fast`                                                                                                                                           | `libzip.dylib`             |
| 2.4% |      33 | `SymbolTable::do_lookup`                                                                                                                                 | `libjvm.dylib`             |
| 1.9% |      26 | `InstanceKlass::find_method_index`                                                                                                                       | `libjvm.dylib`             |
| 1.7% |      24 | `__psynch_mutexwait`                                                                                                                                     | `libsystem_kernel.dylib`   |
| 1.7% |      24 | `__psynch_cvwait`                                                                                                                                        | `libsystem_kernel.dylib`   |
| 1.4% |      19 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `libjvm.dylib`             |
| 1.3% |      18 | `tlv_get_addr`                                                                                                                                           | `libdyld.dylib`            |
| 0.8% |      11 | `_platform_memset`                                                                                                                                       | `libsystem_platform.dylib` |
| 0.7% |      10 | `inflate_table`                                                                                                                                          | `libzip.dylib`             |
| 0.6% |       9 | `pthread_jit_write_protect_np`                                                                                                                           | `libsystem_pthread.dylib`  |
| 0.6% |       8 | `G1ParScanThreadState::do_copy_to_survivor_space`                                                                                                        | `libjvm.dylib`             |
| 0.6% |       8 | `sys_icache_invalidate`                                                                                                                                  | `libsystem_platform.dylib` |
| 0.5% |       7 | `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>`                             | `libjvm.dylib`             |
| 0.5% |       7 | `_platform_memmove`                                                                                                                                      | `libsystem_platform.dylib` |
| 0.5% |       7 | `Arena::contains`                                                                                                                                        | `libjvm.dylib`             |
| 0.4% |       6 | `inflate`                                                                                                                                                | `libzip.dylib`             |
| 0.4% |       6 | `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>`                                                           | `libjvm.dylib`             |
| 0.4% |       6 | `Dictionary::find`                                                                                                                                       | `libjvm.dylib`             |
| 0.4% |       6 | `bsearch`                                                                                                                                                | `libsystem_c.dylib`        |
| 0.4% |       5 | `fwd_copy_again`                                                                                                                                         | `libjvm.dylib`             |

##### Ours

|    % | Samples | Function                                                                                                                                                                  | Location                                                                              |
| ---: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| 0.1% |       2 | `execute(AbstractInsnNode, Interpreter)`                                                                                                                                  | `org.jetbrains.org.objectweb.asm.tree.analysis.Frame`                                 |
| 0.1% |       2 | `transformResult(FirTransformer, Object)`                                                                                                                                 | `org.jetbrains.kotlin.fir.expressions.impl.FirReturnExpressionImpl`                   |
| 0.1% |       1 | `accept(IrVisitor, Object)`                                                                                                                                               | `org.jetbrains.kotlin.ir.expressions.IrBlockBody`                                     |
| 0.1% |       1 | `setMaxStackDelta(int)`                                                                                                                                                   | `org.jetbrains.kotlin.codegen.inline.MaxStackFrameSizeAndLocalsCalculator$BasicBlock` |
| 0.1% |       1 | `startsWith(Name)`                                                                                                                                                        | `org.jetbrains.kotlin.name.FqNameUnsafe`                                              |
| 0.1% |       1 | `getAttributes()`                                                                                                                                                         | `org.jetbrains.kotlin.fir.declarations.impl.FirRegularClassImpl`                      |
| 0.1% |       1 | `mapToCallableMethod(IrCall, IrFunction)`                                                                                                                                 | `org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper`                      |
| 0.1% |       1 | `writeFormalTypeParameters(List, JvmSignatureWriter)`                                                                                                                     | `org.jetbrains.kotlin.backend.jvm.mapping.IrTypeMapper`                               |
| 0.1% |       1 | `isInlineClassType(IrType)`                                                                                                                                               | `org.jetbrains.kotlin.backend.jvm.ir.JvmIrTypeUtilsKt`                                |
| 0.1% |       1 | `<init>(Disposable, CoreApplicationEnvironment)`                                                                                                                          | `com.intellij.core.CoreProjectEnvironment`                                            |
| 0.1% |       1 | `newInstance(OutputStream, int)`                                                                                                                                          | `org.jetbrains.kotlin.protobuf.CodedOutputStream`                                     |
| 0.1% |       1 | `singularToFieldSetType(Object)`                                                                                                                                          | `org.jetbrains.kotlin.protobuf.GeneratedMessageLite$GeneratedExtension`               |
| 0.1% |       1 | `advance()`                                                                                                                                                               | `org.jetbrains.kotlin.lexer._JetLexer`                                                |
| 0.1% |       1 | `getChildrenAsArray(LighterASTNode)`                                                                                                                                      | `org.jetbrains.kotlin.fir.lightTree.converter.AbstractLightTreeRawFirBuilder`         |
| 0.1% |       1 | `<init>(ConeKotlinType, List, List, List, FirExpression, FirExpression, FirExpression, KtSourceElement, List, FirArgumentList, FirNamedReference, FirFunctionCallOrigin)` | `org.jetbrains.kotlin.fir.expressions.impl.FirFunctionCallImpl`                       |
| 0.1% |       1 | `expect(KtToken)`                                                                                                                                                         | `org.jetbrains.kotlin.parsing.AbstractKotlinParsing`                                  |
| 0.1% |       1 | `readSourceFileWithMapping(InputStreamReader)`                                                                                                                            | `org.jetbrains.kotlin.KtSourceFileLinesMappingKt`                                     |
| 0.1% |       1 | `getTokenType()`                                                                                                                                                          | `com.intellij.lang.impl.PsiBuilderImpl$SingleLexemeNode`                              |
| 0.1% |       1 | `contains(Object)`                                                                                                                                                        | `com.google.common.collect.RegularImmutableSet`                                       |
| 0.1% |       1 | `prepareLightTree()`                                                                                                                                                      | `com.intellij.lang.impl.PsiBuilderImpl`                                               |

##### Standard library

|    % | Samples | Function                                                                                               | Location                                                                                                                     |
| ---: | ------: | ------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------- |
| 0.2% |       3 | `hasNext()`                                                                                            | `java.util.ArrayList$Itr`                                                                                                    |
| 0.1% |       2 | `read(byte[], int, int)`                                                                               | `java.util.zip.InflaterInputStream`                                                                                          |
| 0.1% |       2 | `sanitizeStackTrace(Throwable)`                                                                        | `kotlin.jvm.internal.Intrinsics`                                                                                             |
| 0.1% |       2 | `checkNotNullParameter(Object, String)`                                                                | `kotlin.jvm.internal.Intrinsics`                                                                                             |
| 0.1% |       2 | `getNode(Object)`                                                                                      | `java.util.HashMap`                                                                                                          |
| 0.1% |       1 | `getExactSizeIfKnown()`                                                                                | `java.util.Spliterator`                                                                                                      |
| 0.1% |       1 | `<init>(int)`                                                                                          | `java.lang.AbstractStringBuilder`                                                                                            |
| 0.1% |       1 | `joinTo(Iterable, Appendable, CharSequence, CharSequence, CharSequence, int, CharSequence, Function1)` | `kotlin.collections.CollectionsKt___CollectionsKt`                                                                           |
| 0.1% |       1 | `read(byte[], int, int)`                                                                               | `java.io.BufferedInputStream`                                                                                                |
| 0.1% |       1 | `read(byte[], int, int)`                                                                               | `java.util.zip.ZipInputStream`                                                                                               |
| 0.1% |       1 | `inflate(byte[], int, int)`                                                                            | `java.util.zip.Inflater`                                                                                                     |
| 0.1% |       1 | `ensureOpen()`                                                                                         | `java.io.BufferedInputStream`                                                                                                |
| 0.1% |       1 | `resize()`                                                                                             | `java.util.HashMap`                                                                                                          |
| 0.1% |       1 | `SH(byte[], int)`                                                                                      | `java.util.zip.ZipUtils`                                                                                                     |
| 0.1% |       1 | `equals(MethodType)`                                                                                   | `java.lang.invoke.MethodType`                                                                                                |
| 0.1% |       1 | `read(byte[], int, int)`                                                                               | `java.io.ByteArrayInputStream`                                                                                               |
| 0.1% |       1 | `position(int)`                                                                                        | `java.nio.Buffer`                                                                                                            |
| 0.1% |       1 | `stringsToBytes(String[])`                                                                             | `kotlin.reflect.jvm.internal.impl.metadata.jvm.deserialization.UtfEncodingKt`                                                |
| 0.1% |       1 | `<init>(DeserializedMemberScope, List, List, List)`                                                    | `kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedMemberScope$OptimizedImplementation` |
| 0.1% |       1 | `hasSetterContract()`                                                                                  | `kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Property`                                                                |

#### Lines

Lines with the largest contribution to each function's self samples.

##### `hasNext()` (`java.util.ArrayList$Itr`)

|      % | Samples | Location                       |
| -----: | ------: | ------------------------------ |
| 100.0% |       3 | `java.util.ArrayList$Itr:1044` |

##### `execute(AbstractInsnNode, Interpreter)` (`org.jetbrains.org.objectweb.asm.tree.analysis.Frame`)

|     % | Samples | Location                                                  |
| ----: | ------: | --------------------------------------------------------- |
| 50.0% |       1 | `org.jetbrains.org.objectweb.asm.tree.analysis.Frame:556` |
| 50.0% |       1 | `org.jetbrains.org.objectweb.asm.tree.analysis.Frame:298` |

##### `transformResult(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.impl.FirReturnExpressionImpl`)

|      % | Samples | Location                                                               |
| -----: | ------: | ---------------------------------------------------------------------- |
| 100.0% |       2 | `org.jetbrains.kotlin.fir.expressions.impl.FirReturnExpressionImpl:55` |

##### `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`)

|     % | Samples | Location                                |
| ----: | ------: | --------------------------------------- |
| 50.0% |       1 | `java.util.zip.InflaterInputStream:177` |
| 50.0% |       1 | `java.util.zip.InflaterInputStream:169` |

##### `sanitizeStackTrace(Throwable)` (`kotlin.jvm.internal.Intrinsics`)

|      % | Samples | Location                             |
| -----: | ------: | ------------------------------------ |
| 100.0% |       2 | `kotlin.jvm.internal.Intrinsics:253` |

##### `checkNotNullParameter(Object, String)` (`kotlin.jvm.internal.Intrinsics`)

|      % | Samples | Location                             |
| -----: | ------: | ------------------------------------ |
| 100.0% |       2 | `kotlin.jvm.internal.Intrinsics:130` |

##### `getNode(Object)` (`java.util.HashMap`)

|     % | Samples | Location                |
| ----: | ------: | ----------------------- |
| 50.0% |       1 | `java.util.HashMap:577` |
| 50.0% |       1 | `java.util.HashMap:581` |

##### `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`)

|      % | Samples | Location                                             |
| -----: | ------: | ---------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.ir.expressions.IrBlockBody:20` |

##### `setMaxStackDelta(int)` (`org.jetbrains.kotlin.codegen.inline.MaxStackFrameSizeAndLocalsCalculator$BasicBlock`)

|      % | Samples | Location                                                                                  |
| -----: | ------: | ----------------------------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.codegen.inline.MaxStackFrameSizeAndLocalsCalculator$BasicBlock:209` |

##### `startsWith(Name)` (`org.jetbrains.kotlin.name.FqNameUnsafe`)

|      % | Samples | Location                                     |
| -----: | ------: | -------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.name.FqNameUnsafe:142` |

##### `getAttributes()` (`org.jetbrains.kotlin.fir.declarations.impl.FirRegularClassImpl`)

|      % | Samples | Location                                                            |
| -----: | ------: | ------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.declarations.impl.FirRegularClassImpl:37` |

##### `mapToCallableMethod(IrCall, IrFunction)` (`org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper`)

|      % | Samples | Location                                                             |
| -----: | ------: | -------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper:379` |

##### `writeFormalTypeParameters(List, JvmSignatureWriter)` (`org.jetbrains.kotlin.backend.jvm.mapping.IrTypeMapper`)

|      % | Samples | Location                                                    |
| -----: | ------: | ----------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.backend.jvm.mapping.IrTypeMapper:130` |

##### `isInlineClassType(IrType)` (`org.jetbrains.kotlin.backend.jvm.ir.JvmIrTypeUtilsKt`)

|      % | Samples | Location                                                  |
| -----: | ------: | --------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.backend.jvm.ir.JvmIrTypeUtilsKt:56` |

##### `<init>(Disposable, CoreApplicationEnvironment)` (`com.intellij.core.CoreProjectEnvironment`)

|      % | Samples | Location                                      |
| -----: | ------: | --------------------------------------------- |
| 100.0% |       1 | `com.intellij.core.CoreProjectEnvironment:42` |

##### `newInstance(OutputStream, int)` (`org.jetbrains.kotlin.protobuf.CodedOutputStream`)

|      % | Samples | Location                                              |
| -----: | ------: | ----------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.protobuf.CodedOutputStream:106` |

##### `singularToFieldSetType(Object)` (`org.jetbrains.kotlin.protobuf.GeneratedMessageLite$GeneratedExtension`)

|      % | Samples | Location                                                                    |
| -----: | ------: | --------------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.protobuf.GeneratedMessageLite$GeneratedExtension:885` |

##### `advance()` (`org.jetbrains.kotlin.lexer._JetLexer`)

|      % | Samples | Location                                   |
| -----: | ------: | ------------------------------------------ |
| 100.0% |       1 | `org.jetbrains.kotlin.lexer._JetLexer:975` |

##### `getChildrenAsArray(LighterASTNode)` (`org.jetbrains.kotlin.fir.lightTree.converter.AbstractLightTreeRawFirBuilder`)

|      % | Samples | Location                                                                          |
| -----: | ------: | --------------------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.lightTree.converter.AbstractLightTreeRawFirBuilder:154` |

##### `<init>(ConeKotlinType, List, List, List, FirExpression, FirExpression, FirExpression, KtSourceElement, List, FirArgumentList, FirNamedReference, FirFunctionCallOrigin)` (`org.jetbrains.kotlin.fir.expressions.impl.FirFunctionCallImpl`)

|      % | Samples | Location                                                           |
| -----: | ------: | ------------------------------------------------------------------ |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.expressions.impl.FirFunctionCallImpl:27` |

##### `expect(KtToken)` (`org.jetbrains.kotlin.parsing.AbstractKotlinParsing`)

|      % | Samples | Location                                                |
| -----: | ------: | ------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.parsing.AbstractKotlinParsing:97` |

##### `readSourceFileWithMapping(InputStreamReader)` (`org.jetbrains.kotlin.KtSourceFileLinesMappingKt`)

|      % | Samples | Location                                              |
| -----: | ------: | ----------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.KtSourceFileLinesMappingKt:103` |

##### `getTokenType()` (`com.intellij.lang.impl.PsiBuilderImpl$SingleLexemeNode`)

|      % | Samples | Location                                                     |
| -----: | ------: | ------------------------------------------------------------ |
| 100.0% |       1 | `com.intellij.lang.impl.PsiBuilderImpl$SingleLexemeNode:589` |

##### `contains(Object)` (`com.google.common.collect.RegularImmutableSet`)

|      % | Samples | Location                                           |
| -----: | ------: | -------------------------------------------------- |
| 100.0% |       1 | `com.google.common.collect.RegularImmutableSet:61` |

##### `prepareLightTree()` (`com.intellij.lang.impl.PsiBuilderImpl`)

|      % | Samples | Location                                     |
| -----: | ------: | -------------------------------------------- |
| 100.0% |       1 | `com.intellij.lang.impl.PsiBuilderImpl:1123` |

##### `getExactSizeIfKnown()` (`java.util.Spliterator`)

|      % | Samples | Location                    |
| -----: | ------: | --------------------------- |
| 100.0% |       1 | `java.util.Spliterator:414` |

##### `<init>(int)` (`java.lang.AbstractStringBuilder`)

|      % | Samples | Location                             |
| -----: | ------: | ------------------------------------ |
| 100.0% |       1 | `java.lang.AbstractStringBuilder:99` |

##### `joinTo(Iterable, Appendable, CharSequence, CharSequence, CharSequence, int, CharSequence, Function1)` (`kotlin.collections.CollectionsKt___CollectionsKt`)

|      % | Samples | Location                                                |
| -----: | ------: | ------------------------------------------------------- |
| 100.0% |       1 | `kotlin.collections.CollectionsKt___CollectionsKt:3800` |

##### `read(byte[], int, int)` (`java.io.BufferedInputStream`)

|      % | Samples | Location                          |
| -----: | ------: | --------------------------------- |
| 100.0% |       1 | `java.io.BufferedInputStream:396` |

##### `read(byte[], int, int)` (`java.util.zip.ZipInputStream`)

|      % | Samples | Location                           |
| -----: | ------: | ---------------------------------- |
| 100.0% |       1 | `java.util.zip.ZipInputStream:416` |

##### `inflate(byte[], int, int)` (`java.util.zip.Inflater`)

|      % | Samples | Location                     |
| -----: | ------: | ---------------------------- |
| 100.0% |       1 | `java.util.zip.Inflater:366` |

##### `ensureOpen()` (`java.io.BufferedInputStream`)

|      % | Samples | Location                          |
| -----: | ------: | --------------------------------- |
| 100.0% |       1 | `java.io.BufferedInputStream:205` |

##### `resize()` (`java.util.HashMap`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |       1 | `java.util.HashMap:713` |

##### `SH(byte[], int)` (`java.util.zip.ZipUtils`)

|      % | Samples | Location                     |
| -----: | ------: | ---------------------------- |
| 100.0% |       1 | `java.util.zip.ZipUtils:207` |

##### `equals(MethodType)` (`java.lang.invoke.MethodType`)

|      % | Samples | Location                          |
| -----: | ------: | --------------------------------- |
| 100.0% |       1 | `java.lang.invoke.MethodType:907` |

##### `read(byte[], int, int)` (`java.io.ByteArrayInputStream`)

|      % | Samples | Location                           |
| -----: | ------: | ---------------------------------- |
| 100.0% |       1 | `java.io.ByteArrayInputStream:188` |

##### `position(int)` (`java.nio.Buffer`)

|      % | Samples | Location              |
| -----: | ------: | --------------------- |
| 100.0% |       1 | `java.nio.Buffer:326` |

##### `stringsToBytes(String[])` (`kotlin.reflect.jvm.internal.impl.metadata.jvm.deserialization.UtfEncodingKt`)

|      % | Samples | Location                                                                         |
| -----: | ------: | -------------------------------------------------------------------------------- |
| 100.0% |       1 | `kotlin.reflect.jvm.internal.impl.metadata.jvm.deserialization.UtfEncodingKt:65` |

##### `<init>(DeserializedMemberScope, List, List, List)` (`kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedMemberScope$OptimizedImplementation`)

|      % | Samples | Location                                                                                                                         |
| -----: | ------: | -------------------------------------------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedMemberScope$OptimizedImplementation:530` |

##### `hasSetterContract()` (`kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Property`)

|      % | Samples | Location                                                            |
| -----: | ------: | ------------------------------------------------------------------- |
| 100.0% |       1 | `kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Property:20812` |

#### Callers

Callers with the largest contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `inflate_fast` (`libzip.dylib`)

|      % | Samples | Caller                                          | Location       |
| -----: | ------: | ----------------------------------------------- | -------------- |
| 100.0% |      42 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `libzip.dylib` |

##### `SymbolTable::do_lookup` (`libjvm.dylib`)

|     % | Samples | Caller                                         | Location       |
| ----: | ------: | ---------------------------------------------- | -------------- |
| 63.6% |      21 | `SymbolTable::lookup_only`                     | `libjvm.dylib` |
| 18.2% |       6 | `ClassFileParser::parse_constant_pool_entries` | `libjvm.dylib` |
| 18.2% |       6 | `SymbolTable::new_symbol`                      | `libjvm.dylib` |

##### `InstanceKlass::find_method_index` (`libjvm.dylib`)

|     % | Samples | Caller                                  | Location       |
| ----: | ------: | --------------------------------------- | -------------- |
| 88.5% |      23 | `InstanceKlass::uncached_lookup_method` | `libjvm.dylib` |
|  7.7% |       2 | `InstanceKlass::find_method`            | `libjvm.dylib` |
|  3.8% |       1 | `InstanceKlass::find_local_method`      | `libjvm.dylib` |

##### `__psynch_mutexwait` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                              | Location                  |
| -----: | ------: | ----------------------------------- | ------------------------- |
| 100.0% |      24 | `_pthread_mutex_firstfit_lock_slow` | `libsystem_pthread.dylib` |

##### `__psynch_cvwait` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                  | Location       |
| ----: | ------: | ----------------------- | -------------- |
| 79.2% |      19 | `PlatformMonitor::wait` | `libjvm.dylib` |
| 12.5% |       3 | `Parker::park`          | `libjvm.dylib` |
|  8.3% |       2 | `PlatformEvent::park`   | `libjvm.dylib` |

##### `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` (`libjvm.dylib`)

|     % | Samples | Caller                                             | Location       |
| ----: | ------: | -------------------------------------------------- | -------------- |
| 78.9% |      15 | `DebugInformationRecorder::describe_scope`         | `libjvm.dylib` |
| 21.1% |       4 | `DebugInformationRecorder::serialize_scope_values` | `libjvm.dylib` |

##### `tlv_get_addr` (`libdyld.dylib`)

|     % | Samples | Caller                                         | Location       |
| ----: | ------: | ---------------------------------------------- | -------------- |
| 11.1% |       2 | `BlockListBuilder::BlockListBuilder`           | `libjvm.dylib` |
|  5.6% |       1 | `CodeCache::mark_dependents_on`                | `libjvm.dylib` |
|  5.6% |       1 | `JvmtiEnv::GetClassMethods`                    | `libjvm.dylib` |
|  5.6% |       1 | `ClassFileParser::parse_constant_pool_entries` | `libjvm.dylib` |
|  5.6% |       1 | `SymbolTable::lookup_only`                     | `libjvm.dylib` |

##### `IndexSetIterator::advance_and_next` (`libjvm.dylib`)

|     % | Samples | Caller                                                             | Location       |
| ----: | ------: | ------------------------------------------------------------------ | -------------- |
| 26.7% |       4 | `PhaseLive::add_liveout`                                           | `libjvm.dylib` |
| 13.3% |       2 | `PhaseIFG::remove_node`                                            | `libjvm.dylib` |
| 13.3% |       2 | `PhaseChaitin::Select`                                             | `libjvm.dylib` |
| 13.3% |       2 | `PhaseChaitin::remove_bound_register_from_interfering_live_ranges` | `libjvm.dylib` |
| 13.3% |       2 | `PhaseChaitin::build_ifg_physical`                                 | `libjvm.dylib` |

##### `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      13 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseChaitin::Split` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      12 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `IntervalWalker::walk_to` (`libjvm.dylib`)

|     % | Samples | Caller                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 66.7% |       8 | `IntervalWalker::walk_to`        | `libjvm.dylib` |
| 16.7% |       2 | `LinearScan::allocate_registers` | `libjvm.dylib` |
| 16.7% |       2 | `LinearScan::compute_oop_map`    | `libjvm.dylib` |

##### `_platform_memset` (`libsystem_platform.dylib`)

|     % | Samples | Caller                                   | Location       |
| ----: | ------: | ---------------------------------------- | -------------- |
| 18.2% |       2 | `Compilation::build_hir`                 | `libjvm.dylib` |
| 18.2% |       2 | `LinearScan::compute_local_live_sets`    | `libjvm.dylib` |
|  9.1% |       1 | `ConstMethod::allocate`                  | `libjvm.dylib` |
|  9.1% |       1 | `ConstantPool::allocate`                 | `libjvm.dylib` |
|  9.1% |       1 | `InstanceKlass::allocate_instance_klass` | `libjvm.dylib` |

##### `PhaseChaitin::gather_lrg_masks` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      11 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_early` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |      11 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseLive::add_liveout` (`libjvm.dylib`)

|     % | Samples | Caller                            | Location       |
| ----: | ------: | --------------------------------- | -------------- |
| 81.8% |       9 | `PhaseLive::compute`              | `libjvm.dylib` |
| 18.2% |       2 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `inflate_table` (`libzip.dylib`)

|      % | Samples | Caller    | Location       |
| -----: | ------: | --------- | -------------- |
| 100.0% |      10 | `inflate` | `libzip.dylib` |

##### `Matcher::xform` (`libjvm.dylib`)

|      % | Samples | Caller           | Location       |
| -----: | ------: | ---------------- | -------------- |
| 100.0% |      10 | `Matcher::match` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |      10 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseAggressiveCoalesce::insert_copies` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      10 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `pthread_jit_write_protect_np` (`libsystem_pthread.dylib`)

|     % | Samples | Caller                                     | Location           |
| ----: | ------: | ------------------------------------------ | ------------------ |
| 22.2% |       2 | `jni_ReleasePrimitiveArrayCritical`        | `libjvm.dylib`     |
| 11.1% |       1 | `InterpreterRuntime::resolve_from_cache`   | `libjvm.dylib`     |
| 11.1% |       1 | `InterpreterRuntime::ldc`                  | `libjvm.dylib`     |
| 11.1% |       1 | `arraycopy(Object, int, Object, int, int)` | `java.lang.System` |
| 11.1% |       1 | `Unsafe_AllocateInstance`                  | `libjvm.dylib`     |

##### `PhaseChaitin::elide_copy` (`libjvm.dylib`)

|     % | Samples | Caller                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 88.9% |       8 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |
| 11.1% |       1 | `PhaseChaitin::Register_Allocate`          | `libjvm.dylib` |

##### `LinearScan::assign_reg_num` (`libjvm.dylib`)

|      % | Samples | Caller                       | Location       |
| -----: | ------: | ---------------------------- | -------------- |
| 100.0% |       9 | `LinearScan::do_linear_scan` | `libjvm.dylib` |

##### `Matcher::match_tree` (`libjvm.dylib`)

|     % | Samples | Caller           | Location       |
| ----: | ------: | ---------------- | -------------- |
| 87.5% |       7 | `Matcher::xform` | `libjvm.dylib` |
| 12.5% |       1 | `Matcher::match` | `libjvm.dylib` |

##### `ciObjectFactory::get_metadata` (`libjvm.dylib`)

|     % | Samples | Caller                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 37.5% |       3 | `ciEnv::get_klass_by_name_impl`  | `libjvm.dylib` |
| 25.0% |       2 | `ciEnv::get_klass_by_index_impl` | `libjvm.dylib` |
| 25.0% |       2 | `ciMethod::ensure_method_data`   | `libjvm.dylib` |
| 12.5% |       1 | `ciField::initialize_from`       | `libjvm.dylib` |

##### `G1ParScanThreadState::do_copy_to_survivor_space` (`libjvm.dylib`)

|      % | Samples | Caller                                          | Location       |
| -----: | ------: | ----------------------------------------------- | -------------- |
| 100.0% |       8 | `G1ParScanThreadState::trim_queue_to_threshold` | `libjvm.dylib` |

##### `sys_icache_invalidate` (`libsystem_platform.dylib`)

|     % | Samples | Caller                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 50.0% |       4 | `nmethod::nmethod`              | `libjvm.dylib` |
| 25.0% |       2 | `CodeBuffer::copy_code_to`      | `libjvm.dylib` |
| 12.5% |       1 | `nmethod::oops_do_process_weak` | `libjvm.dylib` |
| 12.5% |       1 | `ICStub::finalize`              | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late_post_work` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       7 | `PhaseIdealLoop::build_loop_late` | `libjvm.dylib` |

##### `Node::is_CFG` (`libjvm.dylib`)

|     % | Samples | Caller                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 57.1% |       4 | `PhaseIdealLoop::build_and_optimize`   | `libjvm.dylib` |
| 28.6% |       2 | `PhaseIdealLoop::Dominators`           | `libjvm.dylib` |
| 14.3% |       1 | `RegionNode::is_unreachable_from_root` | `libjvm.dylib` |

##### `PhaseIFG::effective_degree` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |       7 | `PhaseIFG::Compute_Effective_Degree` | `libjvm.dylib` |

##### `Compile::identify_useful_nodes` (`libjvm.dylib`)

|     % | Samples | Caller                                        | Location       |
| ----: | ------: | --------------------------------------------- | -------------- |
| 71.4% |       5 | `PhaseRemoveUseless::PhaseRemoveUseless`      | `libjvm.dylib` |
| 28.6% |       2 | `Matcher::specialize_generic_vector_operands` | `libjvm.dylib` |

##### `PhaseIdealLoop::Dominators` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |       7 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `LIR_OpVisitState::visit` (`libjvm.dylib`)

|     % | Samples | Caller                        | Location       |
| ----: | ------: | ----------------------------- | -------------- |
| 57.1% |       4 | `LinearScan::assign_reg_num`  | `libjvm.dylib` |
| 28.6% |       2 | `LinearScan::build_intervals` | `libjvm.dylib` |
| 14.3% |       1 | `LinearScan::do_linear_scan`  | `libjvm.dylib` |

##### `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>` (`libjvm.dylib`)

|     % | Samples | Caller                                            | Location       |
| ----: | ------: | ------------------------------------------------- | -------------- |
| 71.4% |       5 | `G1ParScanThreadState::do_copy_to_survivor_space` | `libjvm.dylib` |
| 14.3% |       1 | `G1ParScanThreadState::copy_to_survivor_space`    | `libjvm.dylib` |
| 14.3% |       1 | `G1ParScanThreadState::trim_queue_to_threshold`   | `libjvm.dylib` |

##### `_platform_memmove` (`libsystem_platform.dylib`)

|     % | Samples | Caller                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 14.3% |       1 | `SymbolTable::do_add_if_needed` | `libjvm.dylib` |
| 14.3% |       1 | `PhaseOutput::Output`           | `libjvm.dylib` |
| 14.3% |       1 | `vframe::java_sender`           | `libjvm.dylib` |
| 14.3% |       1 | `Node::add_prec`                | `libjvm.dylib` |
| 14.3% |       1 | `Node::clone`                   | `libjvm.dylib` |

##### `Arena::contains` (`libjvm.dylib`)

|      % | Samples | Caller           | Location       |
| -----: | ------: | ---------------- | -------------- |
| 100.0% |       7 | `Matcher::xform` | `libjvm.dylib` |

##### `inflate` (`libzip.dylib`)

|      % | Samples | Caller                                          | Location       |
| -----: | ------: | ----------------------------------------------- | -------------- |
| 100.0% |       6 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `libzip.dylib` |

##### `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` (`libjvm.dylib`)

|      % | Samples | Caller                                         | Location       |
| -----: | ------: | ---------------------------------------------- | -------------- |
| 100.0% |       6 | `void G1CMTask::process_grey_task_entry<true>` | `libjvm.dylib` |

##### `Dictionary::find` (`libjvm.dylib`)

|     % | Samples | Caller                                                       | Location       |
| ----: | ------: | ------------------------------------------------------------ | -------------- |
| 66.7% |       4 | `SystemDictionary::find_constrained_instance_or_array_klass` | `libjvm.dylib` |
| 16.7% |       1 | `SystemDictionary::resolve_instance_class_or_null`           | `libjvm.dylib` |
| 16.7% |       1 | `ConstantPool::klass_at_if_loaded`                           | `libjvm.dylib` |

##### `bsearch` (`libsystem_c.dylib`)

|     % | Samples | Caller                                           | Location       |
| ----: | ------: | ------------------------------------------------ | -------------- |
| 83.3% |       5 | `encoding_for_logical_immediate`                 | `libjvm.dylib` |
| 16.7% |       1 | `Assembler::operand_valid_for_logical_immediate` | `libjvm.dylib` |

##### `fwd_copy_again` (`libjvm.dylib`)

|     % | Samples | Caller                                          | Location       |
| ----: | ------: | ----------------------------------------------- | -------------- |
| 80.0% |       4 | `G1ParScanThreadState::trim_queue_to_threshold` | `libjvm.dylib` |
| 20.0% |       1 | `CodeBuffer::copy_code_to`                      | `libjvm.dylib` |

##### `hasNext()` (`java.util.ArrayList$Itr`)

|     % | Samples | Caller                                                                                   | Location                                                                        |
| ----: | ------: | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| 33.3% |       1 | `convertCallExpression(LighterASTNode)`                                                  | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirExpressionBuilder` |
| 33.3% |       1 | `checkImpl(CheckerSink, ResolutionContext, ConeResolutionAtom, Candidate, ImplicitKind)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.CheckShadowedImplicits`          |
| 33.3% |       1 | `compareTo(MavenComparableVersion$Item)`                                                 | `org.jetbrains.kotlin.config.MavenComparableVersion$ListItem`                   |

##### `execute(AbstractInsnNode, Interpreter)` (`org.jetbrains.org.objectweb.asm.tree.analysis.Frame`)

|     % | Samples | Caller                                                           | Location                                                                                          |
| ----: | ------: | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 50.0% |       1 | `analyzeInstruction(AbstractInsnNode, int, Frame, Frame, Frame)` | `org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer`                                   |
| 50.0% |       1 | `execute(AbstractInsnNode, Interpreter)`                         | `org.jetbrains.kotlin.codegen.coroutines.UninitializedStoresProcessor$UninitializedNewValueFrame` |

##### `transformResult(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.impl.FirReturnExpressionImpl`)

|      % | Samples | Caller                                      | Location                                                            |
| -----: | ------: | ------------------------------------------- | ------------------------------------------------------------------- |
| 100.0% |       2 | `transformChildren(FirTransformer, Object)` | `org.jetbrains.kotlin.fir.expressions.impl.FirReturnExpressionImpl` |

##### `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`)

|      % | Samples | Caller                   | Location                       |
| -----: | ------: | ------------------------ | ------------------------------ |
| 100.0% |       2 | `read(byte[], int, int)` | `java.util.zip.ZipInputStream` |

##### `sanitizeStackTrace(Throwable)` (`kotlin.jvm.internal.Intrinsics`)

|      % | Samples | Caller                            | Location                         |
| -----: | ------: | --------------------------------- | -------------------------------- |
| 100.0% |       2 | `throwParameterIsNullNPE(String)` | `kotlin.jvm.internal.Intrinsics` |

##### `checkNotNullParameter(Object, String)` (`kotlin.jvm.internal.Intrinsics`)

|     % | Samples | Caller                                                     | Location                                           |
| ----: | ------: | ---------------------------------------------------------- | -------------------------------------------------- |
| 50.0% |       1 | `toRegularClassSymbol(ConeClassLikeLookupTag, FirSession)` | `org.jetbrains.kotlin.fir.resolve.ToSymbolUtilsKt` |
| 50.0% |       1 | `accept(IrVisitor, Object)`                                | `org.jetbrains.kotlin.ir.expressions.IrBranch`     |

##### `getNode(Object)` (`java.util.HashMap`)

|      % | Samples | Caller        | Location            |
| -----: | ------: | ------------- | ------------------- |
| 100.0% |       2 | `get(Object)` | `java.util.HashMap` |

##### `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`)

|      % | Samples | Caller                              | Location                                          |
| -----: | ------: | ----------------------------------- | ------------------------------------------------- |
| 100.0% |       1 | `acceptChildren(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.declarations.IrFunction` |

##### `setMaxStackDelta(int)` (`org.jetbrains.kotlin.codegen.inline.MaxStackFrameSizeAndLocalsCalculator$BasicBlock`)

|      % | Samples | Caller                   | Location                                                                   |
| -----: | ------: | ------------------------ | -------------------------------------------------------------------------- |
| 100.0% |       1 | `increaseStackSize(int)` | `org.jetbrains.kotlin.codegen.inline.MaxStackFrameSizeAndLocalsCalculator` |

##### `startsWith(Name)` (`org.jetbrains.kotlin.name.FqNameUnsafe`)

|      % | Samples | Caller             | Location                           |
| -----: | ------: | ------------------ | ---------------------------------- |
| 100.0% |       1 | `startsWith(Name)` | `org.jetbrains.kotlin.name.FqName` |

##### `getAttributes()` (`org.jetbrains.kotlin.fir.declarations.impl.FirRegularClassImpl`)

|      % | Samples | Caller                                | Location                                                                                   |
| -----: | ------: | ------------------------------------- | ------------------------------------------------------------------------------------------ |
| 100.0% |       1 | `getValue(FirDeclaration, KProperty)` | `org.jetbrains.kotlin.fir.declarations.FirDeclarationDataRegistry$DeclarationDataAccessor` |

##### `mapToCallableMethod(IrCall, IrFunction)` (`org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper`)

|      % | Samples | Caller                         | Location                                                     |
| -----: | ------: | ------------------------------ | ------------------------------------------------------------ |
| 100.0% |       1 | `visitCall(IrCall, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `writeFormalTypeParameters(List, JvmSignatureWriter)` (`org.jetbrains.kotlin.backend.jvm.mapping.IrTypeMapper`)

|      % | Samples | Caller                                                | Location                                                         |
| -----: | ------: | ----------------------------------------------------- | ---------------------------------------------------------------- |
| 100.0% |       1 | `mapSignature(IrFunction, boolean, boolean, boolean)` | `org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper` |

##### `isInlineClassType(IrType)` (`org.jetbrains.kotlin.backend.jvm.ir.JvmIrTypeUtilsKt`)

|      % | Samples | Caller                                       | Location                                                     |
| -----: | ------: | -------------------------------------------- | ------------------------------------------------------------ |
| 100.0% |       1 | `generateNonNullAssertion(IrValueParameter)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `<init>(Disposable, CoreApplicationEnvironment)` (`com.intellij.core.CoreProjectEnvironment`)

|      % | Samples | Caller                                           | Location                                       |
| -----: | ------: | ------------------------------------------------ | ---------------------------------------------- |
| 100.0% |       1 | `<init>(Disposable, CoreApplicationEnvironment)` | `com.intellij.core.JavaCoreProjectEnvironment` |

##### `newInstance(OutputStream, int)` (`org.jetbrains.kotlin.protobuf.CodedOutputStream`)

|      % | Samples | Caller                                            | Location                                      |
| -----: | ------: | ------------------------------------------------- | --------------------------------------------- |
| 100.0% |       1 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Type` |

##### `singularToFieldSetType(Object)` (`org.jetbrains.kotlin.protobuf.GeneratedMessageLite$GeneratedExtension`)

|      % | Samples | Caller                                                                                                      | Location                                             |
| -----: | ------: | ----------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| 100.0% |       1 | `parseUnknownField(FieldSet, MessageLite, CodedInputStream, CodedOutputStream, ExtensionRegistryLite, int)` | `org.jetbrains.kotlin.protobuf.GeneratedMessageLite` |

##### `advance()` (`org.jetbrains.kotlin.lexer._JetLexer`)

|      % | Samples | Caller          | Location                         |
| -----: | ------: | --------------- | -------------------------------- |
| 100.0% |       1 | `locateToken()` | `com.intellij.lexer.FlexAdapter` |

##### `getChildrenAsArray(LighterASTNode)` (`org.jetbrains.kotlin.fir.lightTree.converter.AbstractLightTreeRawFirBuilder`)

|      % | Samples | Caller                                  | Location                                                                        |
| -----: | ------: | --------------------------------------- | ------------------------------------------------------------------------------- |
| 100.0% |       1 | `convertValueArguments(LighterASTNode)` | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirExpressionBuilder` |

##### `<init>(ConeKotlinType, List, List, List, FirExpression, FirExpression, FirExpression, KtSourceElement, List, FirArgumentList, FirNamedReference, FirFunctionCallOrigin)` (`org.jetbrains.kotlin.fir.expressions.impl.FirFunctionCallImpl`)

|      % | Samples | Caller                                                                                                                                                                                              | Location                                                        |
| -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| 100.0% |       1 | `<init>(ConeKotlinType, List, List, List, FirExpression, FirExpression, FirExpression, KtSourceElement, List, FirArgumentList, FirNamedReference, FirFunctionCallOrigin, DefaultConstructorMarker)` | `org.jetbrains.kotlin.fir.expressions.impl.FirFunctionCallImpl` |

##### `expect(KtToken)` (`org.jetbrains.kotlin.parsing.AbstractKotlinParsing`)

|      % | Samples | Caller                              | Location                                             |
| -----: | ------: | ----------------------------------- | ---------------------------------------------------- |
| 100.0% |       1 | `expect(KtToken, String, TokenSet)` | `org.jetbrains.kotlin.parsing.AbstractKotlinParsing` |

##### `readSourceFileWithMapping(InputStreamReader)` (`org.jetbrains.kotlin.KtSourceFileLinesMappingKt`)

|      % | Samples | Caller                                                                        | Location                                       |
| -----: | ------: | ----------------------------------------------------------------------------- | ---------------------------------------------- |
| 100.0% |       1 | `buildFirViaLightTree(FirSession, Collection, DiagnosticReporter, Function2)` | `org.jetbrains.kotlin.fir.pipeline.FirUtilsKt` |

##### `getTokenType()` (`com.intellij.lang.impl.PsiBuilderImpl$SingleLexemeNode`)

|      % | Samples | Caller                                           | Location                                                                         |
| -----: | ------: | ------------------------------------------------ | -------------------------------------------------------------------------------- |
| 100.0% |       1 | `consume(ModifierList, LighterASTNode, boolean)` | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirDeclarationBuilder` |

##### `contains(Object)` (`com.google.common.collect.RegularImmutableSet`)

|      % | Samples | Caller                       | Location                                           |
| -----: | ------: | ---------------------------- | -------------------------------------------------- |
| 100.0% |       1 | `contains(Iterable, Object)` | `kotlin.collections.CollectionsKt___CollectionsKt` |

##### `prepareLightTree()` (`com.intellij.lang.impl.PsiBuilderImpl`)

|      % | Samples | Caller           | Location                                |
| -----: | ------: | ---------------- | --------------------------------------- |
| 100.0% |       1 | `getLightTree()` | `com.intellij.lang.impl.PsiBuilderImpl` |

##### `getExactSizeIfKnown()` (`java.util.Spliterator`)

|      % | Samples | Caller                        | Location                            |
| -----: | ------: | ----------------------------- | ----------------------------------- |
| 100.0% |       1 | `copyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |

##### `<init>(int)` (`java.lang.AbstractStringBuilder`)

|      % | Samples | Caller     | Location                  |
| -----: | ------: | ---------- | ------------------------- |
| 100.0% |       1 | `<init>()` | `java.lang.StringBuilder` |

##### `joinTo(Iterable, Appendable, CharSequence, CharSequence, CharSequence, int, CharSequence, Function1)` (`kotlin.collections.CollectionsKt___CollectionsKt`)

|      % | Samples | Caller                                                                                           | Location                                           |
| -----: | ------: | ------------------------------------------------------------------------------------------------ | -------------------------------------------------- |
| 100.0% |       1 | `joinToString(Iterable, CharSequence, CharSequence, CharSequence, int, CharSequence, Function1)` | `kotlin.collections.CollectionsKt___CollectionsKt` |

##### `read(byte[], int, int)` (`java.io.BufferedInputStream`)

|      % | Samples | Caller                   | Location                    |
| -----: | ------: | ------------------------ | --------------------------- |
| 100.0% |       1 | `read(byte[], int, int)` | `java.io.FilterInputStream` |

##### `read(byte[], int, int)` (`java.util.zip.ZipInputStream`)

|      % | Samples | Caller         | Location                    |
| -----: | ------: | -------------- | --------------------------- |
| 100.0% |       1 | `read(byte[])` | `java.io.FilterInputStream` |

##### `inflate(byte[], int, int)` (`java.util.zip.Inflater`)

|      % | Samples | Caller                   | Location                            |
| -----: | ------: | ------------------------ | ----------------------------------- |
| 100.0% |       1 | `read(byte[], int, int)` | `java.util.zip.InflaterInputStream` |

##### `ensureOpen()` (`java.io.BufferedInputStream`)

|      % | Samples | Caller                       | Location                      |
| -----: | ------: | ---------------------------- | ----------------------------- |
| 100.0% |       1 | `implRead(byte[], int, int)` | `java.io.BufferedInputStream` |

##### `resize()` (`java.util.HashMap`)

|      % | Samples | Caller                                          | Location            |
| -----: | ------: | ----------------------------------------------- | ------------------- |
| 100.0% |       1 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `SH(byte[], int)` (`java.util.zip.ZipUtils`)

|      % | Samples | Caller            | Location                 |
| -----: | ------: | ----------------- | ------------------------ |
| 100.0% |       1 | `LG(byte[], int)` | `java.util.zip.ZipUtils` |

##### `equals(MethodType)` (`java.lang.invoke.MethodType`)

|      % | Samples | Caller           | Location                      |
| -----: | ------: | ---------------- | ----------------------------- |
| 100.0% |       1 | `equals(Object)` | `java.lang.invoke.MethodType` |

##### `read(byte[], int, int)` (`java.io.ByteArrayInputStream`)

|      % | Samples | Caller         | Location              |
| -----: | ------: | -------------- | --------------------- |
| 100.0% |       1 | `read(byte[])` | `java.io.InputStream` |

##### `position(int)` (`java.nio.Buffer`)

|      % | Samples | Caller          | Location              |
| -----: | ------: | --------------- | --------------------- |
| 100.0% |       1 | `position(int)` | `java.nio.ByteBuffer` |

##### `stringsToBytes(String[])` (`kotlin.reflect.jvm.internal.impl.metadata.jvm.deserialization.UtfEncodingKt`)

|      % | Samples | Caller                  | Location                                                                    |
| -----: | ------: | ----------------------- | --------------------------------------------------------------------------- |
| 100.0% |       1 | `decodeBytes(String[])` | `kotlin.reflect.jvm.internal.impl.metadata.jvm.deserialization.BitEncoding` |

##### `<init>(DeserializedMemberScope, List, List, List)` (`kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedMemberScope$OptimizedImplementation`)

|      % | Samples | Caller                                   | Location                                                                                             |
| -----: | ------: | ---------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `createImplementation(List, List, List)` | `kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedMemberScope` |

##### `hasSetterContract()` (`kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Property`)

|      % | Samples | Caller            | Location                                                      |
| -----: | ------: | ----------------- | ------------------------------------------------------------- |
| 100.0% |       1 | `isInitialized()` | `kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Property` |

### Total samples

Functions with the most samples collected within the function and its callees.

|     % | Samples | Function                                         | Location                                                |
| ----: | ------: | ------------------------------------------------ | ------------------------------------------------------- |
| 65.2% |     913 | `_pthread_start`                                 | `libsystem_pthread.dylib`                               |
| 65.2% |     913 | `thread_start`                                   | `libsystem_pthread.dylib`                               |
| 65.1% |     912 | `Thread::call_run`                               | `libjvm.dylib`                                          |
| 65.1% |     912 | `thread_native_entry`                            | `libjvm.dylib`                                          |
| 60.1% |     841 | `JavaThread::thread_main_inner`                  | `libjvm.dylib`                                          |
| 60.0% |     840 | `CompileBroker::compiler_thread_loop`            | `libjvm.dylib`                                          |
| 58.6% |     820 | `CompileBroker::invoke_compiler_on_method`       | `libjvm.dylib`                                          |
| 40.2% |     563 | `C2Compiler::compile_method`                     | `libjvm.dylib`                                          |
| 40.1% |     561 | `Compile::Compile`                               | `libjvm.dylib`                                          |
| 28.9% |     404 | `run(String[])`                                  | `org.jetbrains.kotlin.preloading.Preloader`             |
| 28.9% |     404 | `main(String[])`                                 | `org.jetbrains.kotlin.preloading.Preloader`             |
| 23.6% |     330 | `invoke(Object, Object[])`                       | `java.lang.reflect.Method`                              |
| 23.5% |     329 | `main(String[])`                                 | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`  |
| 23.5% |     329 | `main(String[])`                                 | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 23.5% |     329 | `invokeStatic(Object, Object)`                   | `java.lang.invoke.LambdaForm$DMH.0x0000009001008400`    |
| 23.5% |     329 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000009001009800`     |
| 23.5% |     329 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                      |
| 23.5% |     329 | `invokeImpl(Object, Object[])`                   | `jdk.internal.reflect.DirectMethodHandleAccessor`       |
| 23.5% |     329 | `invoke(Object, Object[])`                       | `jdk.internal.reflect.DirectMethodHandleAccessor`       |
| 23.4% |     328 | `doMain(CLICompiler, String[])`                  | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Compiler

|     % | Samples | Function                                    | Location       |
| ----: | ------: | ------------------------------------------- | -------------- |
| 60.0% |     840 | `CompileBroker::compiler_thread_loop`       | `libjvm.dylib` |
| 58.6% |     820 | `CompileBroker::invoke_compiler_on_method`  | `libjvm.dylib` |
| 40.2% |     563 | `C2Compiler::compile_method`                | `libjvm.dylib` |
| 40.1% |     561 | `Compile::Compile`                          | `libjvm.dylib` |
| 20.1% |     282 | `Compile::Code_Gen`                         | `libjvm.dylib` |
| 17.4% |     244 | `Compilation::compile_method`               | `libjvm.dylib` |
| 17.4% |     244 | `Compilation::Compilation`                  | `libjvm.dylib` |
| 15.9% |     223 | `Compilation::compile_java_method`          | `libjvm.dylib` |
| 14.9% |     208 | `Compile::Optimize`                         | `libjvm.dylib` |
| 11.1% |     155 | `PhaseChaitin::Register_Allocate`           | `libjvm.dylib` |
|  9.0% |     126 | `PhaseIdealLoop::optimize`                  | `libjvm.dylib` |
|  7.9% |     111 | `PhaseIdealLoop::PhaseIdealLoop`            | `libjvm.dylib` |
|  7.9% |     110 | `PhaseIdealLoop::build_and_optimize`        | `libjvm.dylib` |
|  6.9% |      97 | `Compilation::emit_lir`                     | `libjvm.dylib` |
|  6.1% |      85 | `LinearScan::do_linear_scan`                | `libjvm.dylib` |
|  5.7% |      80 | `Compilation::build_hir`                    | `libjvm.dylib` |
|  4.6% |      64 | `GraphBuilder::GraphBuilder`                | `libjvm.dylib` |
|  4.1% |      57 | `GraphBuilder::iterate_bytecodes_for_block` | `libjvm.dylib` |
|  4.1% |      57 | `GraphBuilder::iterate_all_blocks`          | `libjvm.dylib` |
|  3.9% |      54 | `Compile::optimize_loops`                   | `libjvm.dylib` |

##### Native

|     % | Samples | Function                                        | Location                  |
| ----: | ------: | ----------------------------------------------- | ------------------------- |
| 65.2% |     913 | `_pthread_start`                                | `libsystem_pthread.dylib` |
| 65.2% |     913 | `thread_start`                                  | `libsystem_pthread.dylib` |
| 65.1% |     912 | `Thread::call_run`                              | `libjvm.dylib`            |
| 65.1% |     912 | `thread_native_entry`                           | `libjvm.dylib`            |
| 60.1% |     841 | `JavaThread::thread_main_inner`                 | `libjvm.dylib`            |
| 17.5% |     245 | `Compiler::compile_method`                      | `libjvm.dylib`            |
|  4.7% |      66 | `SystemDictionary::resolve_class_from_stream`   | `libjvm.dylib`            |
|  4.7% |      66 | `jvm_define_class_common`                       | `libjvm.dylib`            |
|  4.7% |      66 | `JVM_DefineClassWithSource`                     | `libjvm.dylib`            |
|  4.7% |      66 | `Java_java_lang_ClassLoader_defineClass1`       | `libjava.dylib`           |
|  4.6% |      65 | `IRScope::IRScope`                              | `libjvm.dylib`            |
|  4.6% |      65 | `IR::IR`                                        | `libjvm.dylib`            |
|  4.5% |      63 | `WorkerThread::run`                             | `libjvm.dylib`            |
|  4.4% |      62 | `KlassFactory::create_from_stream`              | `libjvm.dylib`            |
|  4.3% |      60 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `libzip.dylib`            |
|  4.1% |      57 | `ClassFileParser::ClassFileParser`              | `libjvm.dylib`            |
|  3.9% |      55 | `ClassFileParser::parse_stream`                 | `libjvm.dylib`            |
|  3.7% |      52 | `Parse::do_one_block`                           | `libjvm.dylib`            |
|  3.7% |      52 | `Parse::do_all_blocks`                          | `libjvm.dylib`            |
|  3.7% |      52 | `Parse::Parse`                                  | `libjvm.dylib`            |

##### Ours

|     % | Samples | Function                                                                                                                                      | Location                                                    |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| 28.9% |     404 | `run(String[])`                                                                                                                               | `org.jetbrains.kotlin.preloading.Preloader`                 |
| 28.9% |     404 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.preloading.Preloader`                 |
| 23.5% |     329 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`      |
| 23.5% |     329 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                |
| 23.4% |     328 | `doMain(CLICompiler, String[])`                                                                                                               | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`     |
| 23.4% |     327 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)`                                            | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`     |
| 23.3% |     326 | `exec(PrintStream, Services, MessageRenderer, String[])`                                                                                      | `org.jetbrains.kotlin.cli.common.CLICompiler`               |
| 23.3% |     326 | `exec(PrintStream, MessageRenderer, String[])`                                                                                                | `org.jetbrains.kotlin.cli.common.CLICompiler`               |
| 23.3% |     326 | `doMainNoExit(CLICompiler, String[], MessageRenderer)`                                                                                        | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`     |
| 22.9% |     320 | `exec(MessageCollector, Services, CommonCompilerArguments)`                                                                                   | `org.jetbrains.kotlin.cli.common.CLICompiler`               |
| 22.2% |     311 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)`                                                                         | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                |
| 22.2% |     311 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)`                                                                        | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                |
| 22.2% |     311 | `execImpl(MessageCollector, Services, CommonCompilerArguments)`                                                                               | `org.jetbrains.kotlin.cli.common.CLICompiler`               |
| 22.1% |     310 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)`                                           | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`     |
| 22.1% |     310 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`     |
| 22.1% |     310 | `execute(CommonCompilerArguments, Services, MessageCollector)`                                                                                | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`     |
| 22.0% |     308 | `runPhasedPipeline(ArgumentsPipelineArtifact)`                                                                                                | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`     |
| 21.9% |     306 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)`                                                                                    | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`     |
| 21.9% |     306 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)`                                                                                    | `org.jetbrains.kotlin.backend.common.phaser.CompositePhase` |
| 21.9% |     306 | `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)`                                                                          | `org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`        |

##### Standard library

|     % | Samples | Function                                                                        | Location                                             |
| ----: | ------: | ------------------------------------------------------------------------------- | ---------------------------------------------------- |
| 23.6% |     330 | `invoke(Object, Object[])`                                                      | `java.lang.reflect.Method`                           |
| 23.5% |     329 | `invokeStatic(Object, Object)`                                                  | `java.lang.invoke.LambdaForm$DMH.0x0000009001008400` |
| 23.5% |     329 | `invoke(Object, Object, Object)`                                                | `java.lang.invoke.LambdaForm$MH.0x0000009001009800`  |
| 23.5% |     329 | `invokeExact_MT(Object, Object, Object, Object)`                                | `java.lang.invoke.Invokers$Holder`                   |
| 23.5% |     329 | `invokeImpl(Object, Object[])`                                                  | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
| 23.5% |     329 | `invoke(Object, Object[])`                                                      | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|  5.5% |      77 | `runWorker(ThreadPoolExecutor$Worker)`                                          | `java.util.concurrent.ThreadPoolExecutor`            |
|  5.5% |      77 | `run()`                                                                         | `java.util.concurrent.ThreadPoolExecutor$Worker`     |
|  5.5% |      77 | `runWith(Object, Runnable)`                                                     | `java.lang.Thread`                                   |
|  5.5% |      77 | `run()`                                                                         | `java.lang.Thread`                                   |
|  5.3% |      74 | `run()`                                                                         | `java.util.concurrent.CompletableFuture$AsyncRun`    |
|  5.2% |      73 | `loadClass(String, boolean)`                                                    | `java.lang.ClassLoader`                              |
|  5.0% |      70 | `defineClass(String, byte[], int, int, ProtectionDomain)`                       | `java.lang.ClassLoader`                              |
|  4.9% |      68 | `defineClass(String, byte[], int, int)`                                         | `java.lang.ClassLoader`                              |
|  4.9% |      68 | `read(byte[], int, int)`                                                        | `java.util.zip.ZipInputStream`                       |
|  4.9% |      68 | `read(byte[])`                                                                  | `java.io.FilterInputStream`                          |
|  4.8% |      67 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`                              |
|  4.7% |      66 | `read(byte[], int, int)`                                                        | `java.util.zip.InflaterInputStream`                  |
|  4.4% |      61 | `inflate(byte[], int, int)`                                                     | `java.util.zip.Inflater`                             |
|  4.3% |      60 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)`                   | `java.util.zip.Inflater`                             |

#### Callers

Callers with the largest contribution to each function's total samples. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `_pthread_start` (`libsystem_pthread.dylib`)

|      % | Samples | Caller         | Location                  |
| -----: | ------: | -------------- | ------------------------- |
| 100.0% |     913 | `thread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|      % | Samples | Caller                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |     912 | `thread_native_entry` | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % | Samples | Caller           | Location                  |
| -----: | ------: | ---------------- | ------------------------- |
| 100.0% |     912 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |     841 | `Thread::call_run` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|      % | Samples | Caller                          | Location       |
| -----: | ------: | ------------------------------- | -------------- |
| 100.0% |     840 | `JavaThread::thread_main_inner` | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|      % | Samples | Caller                                | Location       |
| -----: | ------: | ------------------------------------- | -------------- |
| 100.0% |     820 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |     563 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|      % | Samples | Caller                       | Location       |
| -----: | ------: | ---------------------------- | -------------- |
| 100.0% |     561 | `C2Compiler::compile_method` | `libjvm.dylib` |

##### `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

|      % | Samples | Caller           | Location                                    |
| -----: | ------: | ---------------- | ------------------------------------------- |
| 100.0% |     404 | `main(String[])` | `org.jetbrains.kotlin.preloading.Preloader` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

|     % | Samples | Caller                                                                            | Location                                                                |
| ----: | ------: | --------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| 99.7% |     329 | `run(String[])`                                                                   | `org.jetbrains.kotlin.preloading.Preloader`                             |
|  0.6% |       2 | `getEnumConstantsShared()`                                                        | `java.lang.Class`                                                       |
|  0.3% |       1 | `parsePreprocessedCommandLineArguments(List, CommonToolArguments, Lazy, boolean)` | `org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt` |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`)

|      % | Samples | Caller           | Location                                     |
| -----: | ------: | ---------------- | -------------------------------------------- |
| 100.0% |     329 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % | Samples | Caller                         | Location                                             |
| -----: | ------: | ------------------------------ | ---------------------------------------------------- |
| 100.0% |     329 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000009001008400` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000009001008400`)

|      % | Samples | Caller                           | Location                                            |
| -----: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% |     329 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000009001009800` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000009001009800`)

|      % | Samples | Caller                                           | Location                           |
| -----: | ------: | ------------------------------------------------ | ---------------------------------- |
| 100.0% |     329 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Caller                         | Location                                          |
| -----: | ------: | ------------------------------ | ------------------------------------------------- |
| 100.0% |     329 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % | Samples | Caller                     | Location                                          |
| -----: | ------: | -------------------------- | ------------------------------------------------- |
| 100.0% |     329 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % | Samples | Caller                     | Location                   |
| -----: | ------: | -------------------------- | -------------------------- |
| 100.0% |     329 | `invoke(Object, Object[])` | `java.lang.reflect.Method` |

##### `doMain(CLICompiler, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % | Samples | Caller           | Location                                               |
| -----: | ------: | ---------------- | ------------------------------------------------------ |
| 100.0% |     328 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion` |

##### `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % | Samples | Caller                          | Location                                                |
| -----: | ------: | ------------------------------- | ------------------------------------------------------- |
| 100.0% |     327 | `doMain(CLICompiler, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `exec(PrintStream, Services, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Caller                                         | Location                                      |
| -----: | ------: | ---------------------------------------------- | --------------------------------------------- |
| 100.0% |     326 | `exec(PrintStream, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `exec(PrintStream, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Caller                                                 | Location                                                |
| -----: | ------: | ------------------------------------------------------ | ------------------------------------------------------- |
| 100.0% |     326 | `doMainNoExit(CLICompiler, String[], MessageRenderer)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % | Samples | Caller                                                                                             | Location                                                |
| -----: | ------: | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |     326 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `exec(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Caller                                                   | Location                                      |
| -----: | ------: | -------------------------------------------------------- | --------------------------------------------- |
| 100.0% |     320 | `exec(PrintStream, Services, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % | Samples | Caller                                                                 | Location                                     |
| -----: | ------: | ---------------------------------------------------------------------- | -------------------------------------------- |
| 100.0% |     311 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % | Samples | Caller                                                          | Location                                      |
| -----: | ------: | --------------------------------------------------------------- | --------------------------------------------- |
| 100.0% |     311 | `execImpl(MessageCollector, Services, CommonCompilerArguments)` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Caller                                                      | Location                                      |
| -----: | ------: | ----------------------------------------------------------- | --------------------------------------------- |
| 100.0% |     311 | `exec(MessageCollector, Services, CommonCompilerArguments)` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Caller                                                                                                                                        | Location                                                |
| -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |     310 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Caller                                                         | Location                                                |
| -----: | ------: | -------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |     310 | `execute(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `execute(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Caller                                                                | Location                                     |
| -----: | ------: | --------------------------------------------------------------------- | -------------------------------------------- |
| 100.0% |     310 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Caller                                                                                              | Location                                                |
| -----: | ------: | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |     308 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`)

|      % | Samples | Caller                                                                | Location                                                          |
| -----: | ------: | --------------------------------------------------------------------- | ----------------------------------------------------------------- |
| 100.0% |     306 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)`            | `org.jetbrains.kotlin.backend.common.phaser.CompositePhase`       |
|   6.2% |      19 | `invoke(PhaseConfig, PhaserState, LoweringContext, IrModuleFragment)` | `org.jetbrains.kotlin.backend.common.phaser.PerformByIrFilePhase` |
|   2.6% |       8 | `runPhase(NamedCompilerPhase, Object, boolean)`                       | `org.jetbrains.kotlin.backend.common.phaser.PhaseEngine`          |

##### `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.backend.common.phaser.CompositePhase`)

|      % | Samples | Caller                                                               | Location                                             |
| -----: | ------: | -------------------------------------------------------------------- | ---------------------------------------------------- |
| 100.0% |     306 | `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)` | `org.jetbrains.kotlin.config.phaser.CompilerPhaseKt` |

##### `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`)

|      % | Samples | Caller                                         | Location                                                |
| -----: | ------: | ---------------------------------------------- | ------------------------------------------------------- |
| 100.0% |     306 | `runPhasedPipeline(ArgumentsPipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |     282 | `Compile::Compile` | `libjvm.dylib` |

##### `Compiler::compile_method` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |     245 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `Compilation::compile_method` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |     244 | `Compilation::Compilation` | `libjvm.dylib` |

##### `Compilation::Compilation` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |     244 | `Compiler::compile_method` | `libjvm.dylib` |

##### `Compilation::compile_java_method` (`libjvm.dylib`)

|      % | Samples | Caller                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |     223 | `Compilation::compile_method` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |     208 | `Compile::Compile` | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|      % | Samples | Caller              | Location       |
| -----: | ------: | ------------------- | -------------- |
| 100.0% |     155 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % | Samples | Caller                    | Location       |
| ----: | ------: | ------------------------- | -------------- |
| 57.1% |      72 | `Compile::Optimize`       | `libjvm.dylib` |
| 42.9% |      54 | `Compile::optimize_loops` | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |     111 | `PhaseIdealLoop::optimize` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|      % | Samples | Caller                           | Location       |
| -----: | ------: | -------------------------------- | -------------- |
| 100.0% |     110 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |

##### `Compilation::emit_lir` (`libjvm.dylib`)

|      % | Samples | Caller                             | Location       |
| -----: | ------: | ---------------------------------- | -------------- |
| 100.0% |      97 | `Compilation::compile_java_method` | `libjvm.dylib` |

##### `LinearScan::do_linear_scan` (`libjvm.dylib`)

|      % | Samples | Caller                  | Location       |
| -----: | ------: | ----------------------- | -------------- |
| 100.0% |      85 | `Compilation::emit_lir` | `libjvm.dylib` |

##### `Compilation::build_hir` (`libjvm.dylib`)

|      % | Samples | Caller                             | Location       |
| -----: | ------: | ---------------------------------- | -------------- |
| 100.0% |      80 | `Compilation::compile_java_method` | `libjvm.dylib` |

##### `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`)

|      % | Samples | Caller  | Location                                         |
| -----: | ------: | ------- | ------------------------------------------------ |
| 100.0% |      77 | `run()` | `java.util.concurrent.ThreadPoolExecutor$Worker` |

##### `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`)

|      % | Samples | Caller                      | Location           |
| -----: | ------: | --------------------------- | ------------------ |
| 100.0% |      77 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `runWith(Object, Runnable)` (`java.lang.Thread`)

|      % | Samples | Caller  | Location           |
| -----: | ------: | ------- | ------------------ |
| 100.0% |      77 | `run()` | `java.lang.Thread` |

##### `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`)

|      % | Samples | Caller                                 | Location                                  |
| -----: | ------: | -------------------------------------- | ----------------------------------------- |
| 100.0% |      74 | `runWorker(ThreadPoolExecutor$Worker)` | `java.util.concurrent.ThreadPoolExecutor` |

##### `loadClass(String, boolean)` (`java.lang.ClassLoader`)

|     % | Samples | Caller                       | Location                                                 |
| ----: | ------: | ---------------------------- | -------------------------------------------------------- |
| 95.9% |      70 | `loadClass(String, boolean)` | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |
|  4.1% |       3 | `loadClass(String)`          | `java.lang.ClassLoader`                                  |

##### `defineClass(String, byte[], int, int, ProtectionDomain)` (`java.lang.ClassLoader`)

|     % | Samples | Caller                                              | Location                          |
| ----: | ------: | --------------------------------------------------- | --------------------------------- |
| 97.1% |      68 | `defineClass(String, byte[], int, int)`             | `java.lang.ClassLoader`           |
|  2.9% |       2 | `defineClass(String, byte[], int, int, CodeSource)` | `java.security.SecureClassLoader` |

##### `defineClass(String, byte[], int, int)` (`java.lang.ClassLoader`)

|      % | Samples | Caller              | Location                                                 |
| -----: | ------: | ------------------- | -------------------------------------------------------- |
| 100.0% |      68 | `findClass(String)` | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |

##### `read(byte[], int, int)` (`java.util.zip.ZipInputStream`)

|      % | Samples | Caller         | Location                    |
| -----: | ------: | -------------- | --------------------------- |
| 100.0% |      68 | `read(byte[])` | `java.io.FilterInputStream` |

##### `read(byte[])` (`java.io.FilterInputStream`)

|      % | Samples | Caller                                                  | Location                                               |
| -----: | ------: | ------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% |      68 | `loadAllClassesFromJars(Collection, int, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` (`java.lang.ClassLoader`)

|      % | Samples | Caller                                                    | Location                |
| -----: | ------: | --------------------------------------------------------- | ----------------------- |
| 100.0% |      67 | `defineClass(String, byte[], int, int, ProtectionDomain)` | `java.lang.ClassLoader` |

##### `SystemDictionary::resolve_class_from_stream` (`libjvm.dylib`)

|      % | Samples | Caller                    | Location       |
| -----: | ------: | ------------------------- | -------------- |
| 100.0% |      66 | `jvm_define_class_common` | `libjvm.dylib` |

##### `jvm_define_class_common` (`libjvm.dylib`)

|      % | Samples | Caller                      | Location       |
| -----: | ------: | --------------------------- | -------------- |
| 100.0% |      66 | `JVM_DefineClassWithSource` | `libjvm.dylib` |

##### `JVM_DefineClassWithSource` (`libjvm.dylib`)

|      % | Samples | Caller                                    | Location        |
| -----: | ------: | ----------------------------------------- | --------------- |
| 100.0% |      66 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib` |

##### `Java_java_lang_ClassLoader_defineClass1` (`libjava.dylib`)

|      % | Samples | Caller                                                                          | Location                |
| -----: | ------: | ------------------------------------------------------------------------------- | ----------------------- |
| 100.0% |      66 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader` |

##### `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`)

|      % | Samples | Caller                   | Location                       |
| -----: | ------: | ------------------------ | ------------------------------ |
| 100.0% |      66 | `read(byte[], int, int)` | `java.util.zip.ZipInputStream` |

##### `IRScope::IRScope` (`libjvm.dylib`)

|      % | Samples | Caller   | Location       |
| -----: | ------: | -------- | -------------- |
| 100.0% |      65 | `IR::IR` | `libjvm.dylib` |

##### `IR::IR` (`libjvm.dylib`)

|      % | Samples | Caller                   | Location       |
| -----: | ------: | ------------------------ | -------------- |
| 100.0% |      65 | `Compilation::build_hir` | `libjvm.dylib` |

##### `GraphBuilder::GraphBuilder` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |      64 | `IRScope::IRScope` | `libjvm.dylib` |

##### `WorkerThread::run` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |      63 | `Thread::call_run` | `libjvm.dylib` |

##### `KlassFactory::create_from_stream` (`libjvm.dylib`)

|     % | Samples | Caller                                               | Location       |
| ----: | ------: | ---------------------------------------------------- | -------------- |
| 96.8% |      60 | `SystemDictionary::resolve_class_from_stream`        | `libjvm.dylib` |
|  1.6% |       1 | `ClassLoader::load_class`                            | `libjvm.dylib` |
|  1.6% |       1 | `SystemDictionary::resolve_hidden_class_from_stream` | `libjvm.dylib` |

##### `inflate(byte[], int, int)` (`java.util.zip.Inflater`)

|     % | Samples | Caller                   | Location                            |
| ----: | ------: | ------------------------ | ----------------------------------- |
| 96.7% |      59 | `read(byte[], int, int)` | `java.util.zip.InflaterInputStream` |
|  3.3% |       2 | `inflate(byte[])`        | `java.util.zip.Inflater`            |

##### `Java_java_util_zip_Inflater_inflateBytesBytes` (`libzip.dylib`)

|      % | Samples | Caller                                                        | Location                 |
| -----: | ------: | ------------------------------------------------------------- | ------------------------ |
| 100.0% |      60 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` | `java.util.zip.Inflater` |

##### `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`)

|      % | Samples | Caller                      | Location                 |
| -----: | ------: | --------------------------- | ------------------------ |
| 100.0% |      60 | `inflate(byte[], int, int)` | `java.util.zip.Inflater` |

##### `GraphBuilder::iterate_bytecodes_for_block` (`libjvm.dylib`)

|      % | Samples | Caller                             | Location       |
| -----: | ------: | ---------------------------------- | -------------- |
| 100.0% |      57 | `GraphBuilder::iterate_all_blocks` | `libjvm.dylib` |
|   1.8% |       1 | `GraphBuilder::try_inline_full`    | `libjvm.dylib` |

##### `GraphBuilder::iterate_all_blocks` (`libjvm.dylib`)

|      % | Samples | Caller                          | Location       |
| -----: | ------: | ------------------------------- | -------------- |
| 100.0% |      57 | `GraphBuilder::GraphBuilder`    | `libjvm.dylib` |
|  64.9% |      37 | `GraphBuilder::try_inline_full` | `libjvm.dylib` |

##### `ClassFileParser::ClassFileParser` (`libjvm.dylib`)

|      % | Samples | Caller                             | Location       |
| -----: | ------: | ---------------------------------- | -------------- |
| 100.0% |      57 | `KlassFactory::create_from_stream` | `libjvm.dylib` |

##### `ClassFileParser::parse_stream` (`libjvm.dylib`)

|      % | Samples | Caller                             | Location       |
| -----: | ------: | ---------------------------------- | -------------- |
| 100.0% |      55 | `ClassFileParser::ClassFileParser` | `libjvm.dylib` |

##### `Compile::optimize_loops` (`libjvm.dylib`)

|      % | Samples | Caller              | Location       |
| -----: | ------: | ------------------- | -------------- |
| 100.0% |      54 | `Compile::Optimize` | `libjvm.dylib` |

##### `Parse::do_one_block` (`libjvm.dylib`)

|      % | Samples | Caller                 | Location       |
| -----: | ------: | ---------------------- | -------------- |
| 100.0% |      52 | `Parse::do_all_blocks` | `libjvm.dylib` |

##### `Parse::do_all_blocks` (`libjvm.dylib`)

|      % | Samples | Caller         | Location       |
| -----: | ------: | -------------- | -------------- |
| 100.0% |      52 | `Parse::Parse` | `libjvm.dylib` |

##### `Parse::Parse` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |      52 | `ParseGenerator::generate` | `libjvm.dylib` |

#### Callees

Callees with the largest contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `_pthread_start` (`libsystem_pthread.dylib`)

|     % | Samples | Callee                | Location       |
| ----: | ------: | --------------------- | -------------- |
| 99.9% |     912 | `thread_native_entry` | `libjvm.dylib` |
|  0.1% |       1 | `ThreadJavaMain`      | `libjli.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

|      % | Samples | Callee           | Location                  |
| -----: | ------: | ---------------- | ------------------------- |
| 100.0% |     913 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 92.2% |     841 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
|  6.9% |      63 | `WorkerThread::run`             | `libjvm.dylib` |
|  0.5% |       5 | `VMThread::run`                 | `libjvm.dylib` |
|  0.2% |       2 | `ConcurrentGCThread::run`       | `libjvm.dylib` |
|  0.1% |       1 | `WatcherThread::run`            | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % | Samples | Callee             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |     912 | `Thread::call_run` | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|     % | Samples | Callee                                | Location       |
| ----: | ------: | ------------------------------------- | -------------- |
| 99.9% |     840 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |
|  0.1% |       1 | `ServiceThread::service_thread_entry` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|     % | Samples | Callee                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 97.6% |     820 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |
|  2.3% |      19 | `CompileQueue::get`                        | `libjvm.dylib` |
|  0.1% |       1 | `CompileTask::check_break_at_flags`        | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 68.7% |     563 | `C2Compiler::compile_method`    | `libjvm.dylib` |
| 29.9% |     245 | `Compiler::compile_method`      | `libjvm.dylib` |
|  0.5% |       4 | `ciEnv::get_method_from_handle` | `libjvm.dylib` |
|  0.4% |       3 | `ciEnv::~ciEnv`                 | `libjvm.dylib` |
|  0.2% |       2 | `ciEnv::ciEnv`                  | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|     % | Samples | Callee              | Location       |
| ----: | ------: | ------------------- | -------------- |
| 99.6% |     561 | `Compile::Compile`  | `libjvm.dylib` |
|  0.4% |       2 | `Compile::~Compile` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|     % | Samples | Callee                                   | Location       |
| ----: | ------: | ---------------------------------------- | -------------- |
| 50.3% |     282 | `Compile::Code_Gen`                      | `libjvm.dylib` |
| 37.1% |     208 | `Compile::Optimize`                      | `libjvm.dylib` |
|  8.9% |      50 | `ParseGenerator::generate`               | `libjvm.dylib` |
|  2.1% |      12 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |
|  0.9% |       5 | `CallGenerator::for_inline`              | `libjvm.dylib` |

##### `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

|     % | Samples | Callee                                                                       | Location                                               |
| ----: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------------ |
| 81.4% |     329 | `invoke(Object, Object[])`                                                   | `java.lang.reflect.Method`                             |
| 18.3% |      74 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |
|  0.2% |       1 | `stream()`                                                                   | `java.util.Collection`                                 |

##### `main(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

|      % | Samples | Callee          | Location                                    |
| -----: | ------: | --------------- | ------------------------------------------- |
| 100.0% |     404 | `run(String[])` | `org.jetbrains.kotlin.preloading.Preloader` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

|     % | Samples | Callee                     | Location                                          |
| ----: | ------: | -------------------------- | ------------------------------------------------- |
| 99.7% |     329 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |
|  0.9% |       3 | `acquireMethodAccessor()`  | `java.lang.reflect.Method`                        |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`)

|     % | Samples | Callee                          | Location                                                |
| ----: | ------: | ------------------------------- | ------------------------------------------------------- |
| 99.7% |     328 | `doMain(CLICompiler, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
|  0.3% |       1 | `<init>()`                      | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % | Samples | Callee           | Location                                               |
| -----: | ------: | ---------------- | ------------------------------------------------------ |
| 100.0% |     329 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000009001008400`)

|      % | Samples | Callee           | Location                                     |
| -----: | ------: | ---------------- | -------------------------------------------- |
| 100.0% |     329 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000009001009800`)

|      % | Samples | Callee                         | Location                                             |
| -----: | ------: | ------------------------------ | ---------------------------------------------------- |
| 100.0% |     329 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000009001008400` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Callee                           | Location                                            |
| -----: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% |     329 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000009001009800` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % | Samples | Callee                                           | Location                           |
| -----: | ------: | ------------------------------------------------ | ---------------------------------- |
| 100.0% |     329 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % | Samples | Callee                         | Location                                          |
| -----: | ------: | ------------------------------ | ------------------------------------------------- |
| 100.0% |     329 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `doMain(CLICompiler, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|     % | Samples | Callee                                                                                             | Location                                                |
| ----: | ------: | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 99.7% |     327 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
|  0.3% |       1 | `setupIdeaStandaloneExecution()`                                                                   | `org.jetbrains.kotlin.cli.jvm.compiler.CompatKt`        |

##### `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|     % | Samples | Callee                                                 | Location                                                |
| ----: | ------: | ------------------------------------------------------ | ------------------------------------------------------- |
| 99.7% |     326 | `doMainNoExit(CLICompiler, String[], MessageRenderer)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
|  0.3% |       1 | `defaultMessageRenderer()`                             | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `exec(PrintStream, Services, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|     % | Samples | Callee                                                                               | Location                                                                |
| ----: | ------: | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------- |
| 98.2% |     320 | `exec(MessageCollector, Services, CommonCompilerArguments)`                          | `org.jetbrains.kotlin.cli.common.CLICompiler`                           |
|  1.5% |       5 | `parseCommandLineArguments$default(List, CommonToolArguments, boolean, int, Object)` | `org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt` |
|  0.3% |       1 | `loadClass(String)`                                                                  | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader`                |

##### `exec(PrintStream, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Callee                                                   | Location                                      |
| -----: | ------: | -------------------------------------------------------- | --------------------------------------------- |
| 100.0% |     326 | `exec(PrintStream, Services, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % | Samples | Callee                                         | Location                                      |
| -----: | ------: | ---------------------------------------------- | --------------------------------------------- |
| 100.0% |     326 | `exec(PrintStream, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `exec(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|     % | Samples | Callee                                                          | Location                                      |
| ----: | ------: | --------------------------------------------------------------- | --------------------------------------------- |
| 97.2% |     311 | `execImpl(MessageCollector, Services, CommonCompilerArguments)` | `org.jetbrains.kotlin.cli.common.CLICompiler` |
|  2.8% |       9 | `<clinit>()`                                                    | `org.jetbrains.kotlin.cli.common.ArgumentsKt` |

##### `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|     % | Samples | Callee                                                         | Location                                                |
| ----: | ------: | -------------------------------------------------------------- | ------------------------------------------------------- |
| 99.7% |     310 | `execute(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
|  0.3% |       1 | `getDefaultPerformanceManager()`                               | `org.jetbrains.kotlin.cli.common.CLICompiler`           |

##### `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % | Samples | Callee                                                                | Location                                     |
| -----: | ------: | --------------------------------------------------------------------- | -------------------------------------------- |
| 100.0% |     311 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Callee                                                                 | Location                                     |
| -----: | ------: | ---------------------------------------------------------------------- | -------------------------------------------- |
| 100.0% |     311 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|     % | Samples | Callee                                         | Location                                                            |
| ----: | ------: | ---------------------------------------------- | ------------------------------------------------------------------- |
| 99.4% |     308 | `runPhasedPipeline(ArgumentsPipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`             |
|  0.3% |       1 | `loadClass(String)`                            | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader`            |
|  0.3% |       1 | `flush()`                                      | `org.jetbrains.kotlin.cli.common.messages.GroupingMessageCollector` |

##### `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Callee                                                                                              | Location                                                |
| -----: | ------: | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |     310 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `execute(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Callee                                                                                                                                        | Location                                                |
| -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |     310 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|     % | Samples | Callee                                                                          | Location                                                                    |
| ----: | ------: | ------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| 99.4% |     306 | `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)`            | `org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`                        |
|  0.6% |       2 | `reportToMessageCollector(BaseDiagnosticsCollector, MessageCollector, boolean)` | `org.jetbrains.kotlin.cli.common.fir.FirDiagnosticsCompilerResultsReporter` |

##### `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`)

|     % | Samples | Callee                                                               | Location                                                         |
| ----: | ------: | -------------------------------------------------------------------- | ---------------------------------------------------------------- |
| 99.7% |     305 | `phaseBody(LoggingContext, Object)`                                  | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`                |
|  6.2% |      19 | `phaseBody(LoggingContext, Object)`                                  | `org.jetbrains.kotlin.backend.common.phaser.FileLoweringPhase`   |
|  2.6% |       8 | `phaseBody(LoggingContext, Object)`                                  | `org.jetbrains.kotlin.backend.common.phaser.ModuleLoweringPhase` |
|  0.3% |       1 | `runAfter(PhaseConfig, PhaserState, LoggingContext, Object, Object)` | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`          |

##### `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.backend.common.phaser.CompositePhase`)

|      % | Samples | Callee                                                     | Location                                                |
| -----: | ------: | ---------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |     306 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase` |

##### `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`)

|      % | Samples | Callee                                                     | Location                                                    |
| -----: | ------: | ---------------------------------------------------------- | ----------------------------------------------------------- |
| 100.0% |     306 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` | `org.jetbrains.kotlin.backend.common.phaser.CompositePhase` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|     % | Samples | Callee                               | Location       |
| ----: | ------: | ------------------------------------ | -------------- |
| 55.0% |     155 | `PhaseChaitin::Register_Allocate`    | `libjvm.dylib` |
| 18.4% |      52 | `Matcher::match`                     | `libjvm.dylib` |
| 13.8% |      39 | `PhaseOutput::Output`                | `libjvm.dylib` |
|  9.6% |      27 | `PhaseCFG::do_global_code_motion`    | `libjvm.dylib` |
|  1.1% |       3 | `PhaseBlockLayout::PhaseBlockLayout` | `libjvm.dylib` |

##### `Compiler::compile_method` (`libjvm.dylib`)

|     % | Samples | Callee                     | Location       |
| ----: | ------: | -------------------------- | -------------- |
| 99.6% |     244 | `Compilation::Compilation` | `libjvm.dylib` |
|  0.4% |       1 | `Chunk::next_chop`         | `libjvm.dylib` |

##### `Compilation::compile_method` (`libjvm.dylib`)

|     % | Samples | Callee                             | Location       |
| ----: | ------: | ---------------------------------- | -------------- |
| 91.4% |     223 | `Compilation::compile_java_method` | `libjvm.dylib` |
|  8.6% |      21 | `ciEnv::register_method`           | `libjvm.dylib` |

##### `Compilation::Compilation` (`libjvm.dylib`)

|      % | Samples | Callee                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |     244 | `Compilation::compile_method` | `libjvm.dylib` |

##### `Compilation::compile_java_method` (`libjvm.dylib`)

|     % | Samples | Callee                         | Location       |
| ----: | ------: | ------------------------------ | -------------- |
| 43.5% |      97 | `Compilation::emit_lir`        | `libjvm.dylib` |
| 35.9% |      80 | `Compilation::build_hir`       | `libjvm.dylib` |
| 19.3% |      43 | `Compilation::emit_code_body`  | `libjvm.dylib` |
|  0.4% |       1 | `LIR_Assembler::LIR_Assembler` | `libjvm.dylib` |
|  0.4% |       1 | `ciMethod::ensure_method_data` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|     % | Samples | Callee                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 34.6% |      72 | `PhaseIdealLoop::optimize`             | `libjvm.dylib` |
| 26.0% |      54 | `Compile::optimize_loops`              | `libjvm.dylib` |
| 12.0% |      25 | `PhaseIterGVN::optimize`               | `libjvm.dylib` |
|  9.1% |      19 | `PhaseCCP::PhaseCCP`                   | `libjvm.dylib` |
|  5.3% |      11 | `PhaseMacroExpand::expand_macro_nodes` | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|     % | Samples | Callee                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 16.1% |      25 | `PhaseChaitin::build_ifg_physical`         | `libjvm.dylib` |
| 12.3% |      19 | `PhaseLive::compute`                       | `libjvm.dylib` |
| 11.0% |      17 | `PhaseChaitin::Split`                      | `libjvm.dylib` |
| 10.3% |      16 | `PhaseChaitin::gather_lrg_masks`           | `libjvm.dylib` |
|  9.7% |      15 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % | Samples | Callee                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 88.1% |     111 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |
| 11.1% |      14 | `PhaseIterGVN::optimize`         | `libjvm.dylib` |
|  0.8% |       1 | `Chunk::next_chop`               | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|     % | Samples | Callee                               | Location                   |
| ----: | ------: | ------------------------------------ | -------------------------- |
| 99.1% |     110 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib`             |
|  0.9% |       1 | `_platform_memset`                   | `libsystem_platform.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|     % | Samples | Callee                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 30.0% |      33 | `PhaseIdealLoop::build_loop_late`      | `libjvm.dylib` |
| 14.5% |      16 | `PhaseIdealLoop::split_if_with_blocks` | `libjvm.dylib` |
| 13.6% |      15 | `PhaseIdealLoop::build_loop_early`     | `libjvm.dylib` |
| 11.8% |      13 | `PhaseIdealLoop::Dominators`           | `libjvm.dylib` |
|  7.3% |       8 | `PhaseIdealLoop::build_loop_tree`      | `libjvm.dylib` |

##### `Compilation::emit_lir` (`libjvm.dylib`)

|     % | Samples | Callee                       | Location       |
| ----: | ------: | ---------------------------- | -------------- |
| 87.6% |      85 | `LinearScan::do_linear_scan` | `libjvm.dylib` |
| 12.4% |      12 | `BlockList::iterate_forward` | `libjvm.dylib` |

##### `LinearScan::do_linear_scan` (`libjvm.dylib`)

|     % | Samples | Callee                                | Location       |
| ----: | ------: | ------------------------------------- | -------------- |
| 35.3% |      30 | `LinearScan::allocate_registers`      | `libjvm.dylib` |
| 27.1% |      23 | `LinearScan::assign_reg_num`          | `libjvm.dylib` |
| 10.6% |       9 | `LinearScan::build_intervals`         | `libjvm.dylib` |
|  5.9% |       5 | `LinearScan::eliminate_spill_moves`   | `libjvm.dylib` |
|  5.9% |       5 | `LinearScan::compute_local_live_sets` | `libjvm.dylib` |

##### `Compilation::build_hir` (`libjvm.dylib`)

|     % | Samples | Callee                                       | Location                   |
| ----: | ------: | -------------------------------------------- | -------------------------- |
| 81.3% |      65 | `IR::IR`                                     | `libjvm.dylib`             |
|  6.3% |       5 | `GlobalValueNumbering::GlobalValueNumbering` | `libjvm.dylib`             |
|  3.8% |       3 | `IR::compute_use_counts`                     | `libjvm.dylib`             |
|  2.5% |       2 | `_platform_memset`                           | `libsystem_platform.dylib` |
|  2.5% |       2 | `IR::eliminate_null_checks`                  | `libjvm.dylib`             |

##### `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`)

|     % | Samples | Callee      | Location                                          |
| ----: | ------: | ----------- | ------------------------------------------------- |
| 96.1% |      74 | `run()`     | `java.util.concurrent.CompletableFuture$AsyncRun` |
|  3.9% |       3 | `getTask()` | `java.util.concurrent.ThreadPoolExecutor`         |

##### `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`)

|      % | Samples | Callee                                 | Location                                  |
| -----: | ------: | -------------------------------------- | ----------------------------------------- |
| 100.0% |      77 | `runWorker(ThreadPoolExecutor$Worker)` | `java.util.concurrent.ThreadPoolExecutor` |

##### `runWith(Object, Runnable)` (`java.lang.Thread`)

|      % | Samples | Callee  | Location                                         |
| -----: | ------: | ------- | ------------------------------------------------ |
| 100.0% |      77 | `run()` | `java.util.concurrent.ThreadPoolExecutor$Worker` |

##### `run()` (`java.lang.Thread`)

|      % | Samples | Callee                      | Location           |
| -----: | ------: | --------------------------- | ------------------ |
| 100.0% |      77 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`)

|      % | Samples | Callee  | Location                                                                          |
| -----: | ------: | ------- | --------------------------------------------------------------------------------- |
| 100.0% |      74 | `run()` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000900188f020` |

##### `loadClass(String, boolean)` (`java.lang.ClassLoader`)

|     % | Samples | Callee                             | Location                                                 |
| ----: | ------: | ---------------------------------- | -------------------------------------------------------- |
| 93.2% |      68 | `findClass(String)`                | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |
|  4.1% |       3 | `findClass(String)`                | `java.net.URLClassLoader`                                |
|  2.7% |       2 | `findBootstrapClassOrNull(String)` | `java.lang.ClassLoader`                                  |

##### `defineClass(String, byte[], int, int, ProtectionDomain)` (`java.lang.ClassLoader`)

|     % | Samples | Callee                                                                          | Location                |
| ----: | ------: | ------------------------------------------------------------------------------- | ----------------------- |
| 95.7% |      67 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader` |
|  4.3% |       3 | `postDefineClass(Class, ProtectionDomain)`                                      | `java.lang.ClassLoader` |

##### `defineClass(String, byte[], int, int)` (`java.lang.ClassLoader`)

|      % | Samples | Callee                                                    | Location                |
| -----: | ------: | --------------------------------------------------------- | ----------------------- |
| 100.0% |      68 | `defineClass(String, byte[], int, int, ProtectionDomain)` | `java.lang.ClassLoader` |

##### `read(byte[], int, int)` (`java.util.zip.ZipInputStream`)

|     % | Samples | Callee                     | Location                            |
| ----: | ------: | -------------------------- | ----------------------------------- |
| 97.1% |      66 | `read(byte[], int, int)`   | `java.util.zip.InflaterInputStream` |
|  1.5% |       1 | `update(byte[], int, int)` | `java.util.zip.CRC32`               |

##### `read(byte[])` (`java.io.FilterInputStream`)

|      % | Samples | Callee                   | Location                       |
| -----: | ------: | ------------------------ | ------------------------------ |
| 100.0% |      68 | `read(byte[], int, int)` | `java.util.zip.ZipInputStream` |

##### `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` (`java.lang.ClassLoader`)

|     % | Samples | Callee                                    | Location                                                 |
| ----: | ------: | ----------------------------------------- | -------------------------------------------------------- |
| 98.5% |      66 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib`                                          |
| 14.9% |      10 | `loadClass(String)`                       | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |

##### `SystemDictionary::resolve_class_from_stream` (`libjvm.dylib`)

|     % | Samples | Callee                                    | Location       |
| ----: | ------: | ----------------------------------------- | -------------- |
| 90.9% |      60 | `KlassFactory::create_from_stream`        | `libjvm.dylib` |
|  9.1% |       6 | `SystemDictionary::define_instance_class` | `libjvm.dylib` |

##### `jvm_define_class_common` (`libjvm.dylib`)

|      % | Samples | Callee                                        | Location       |
| -----: | ------: | --------------------------------------------- | -------------- |
| 100.0% |      66 | `SystemDictionary::resolve_class_from_stream` | `libjvm.dylib` |

##### `JVM_DefineClassWithSource` (`libjvm.dylib`)

|      % | Samples | Callee                    | Location       |
| -----: | ------: | ------------------------- | -------------- |
| 100.0% |      66 | `jvm_define_class_common` | `libjvm.dylib` |

##### `Java_java_lang_ClassLoader_defineClass1` (`libjava.dylib`)

|      % | Samples | Callee                      | Location       |
| -----: | ------: | --------------------------- | -------------- |
| 100.0% |      66 | `JVM_DefineClassWithSource` | `libjvm.dylib` |

##### `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`)

|     % | Samples | Callee                      | Location                            |
| ----: | ------: | --------------------------- | ----------------------------------- |
| 89.4% |      59 | `inflate(byte[], int, int)` | `java.util.zip.Inflater`            |
|  7.6% |       5 | `fill()`                    | `java.util.zip.InflaterInputStream` |

##### `IRScope::IRScope` (`libjvm.dylib`)

|     % | Samples | Callee                         | Location       |
| ----: | ------: | ------------------------------ | -------------- |
| 98.5% |      64 | `GraphBuilder::GraphBuilder`   | `libjvm.dylib` |
|  1.5% |       1 | `GraphBuilder::state_at_entry` | `libjvm.dylib` |

##### `IR::IR` (`libjvm.dylib`)

|      % | Samples | Callee             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |      65 | `IRScope::IRScope` | `libjvm.dylib` |

##### `GraphBuilder::GraphBuilder` (`libjvm.dylib`)

|     % | Samples | Callee                               | Location       |
| ----: | ------: | ------------------------------------ | -------------- |
| 89.1% |      57 | `GraphBuilder::iterate_all_blocks`   | `libjvm.dylib` |
|  6.3% |       4 | `BlockListBuilder::BlockListBuilder` | `libjvm.dylib` |
|  3.1% |       2 | `GraphBuilder::setup_start_block`    | `libjvm.dylib` |
|  1.6% |       1 | `ValueMap::ValueMap`                 | `libjvm.dylib` |

##### `WorkerThread::run` (`libjvm.dylib`)

|     % | Samples | Callee                            | Location                 |
| ----: | ------: | --------------------------------- | ------------------------ |
| 55.6% |      35 | `G1EvacuateRegionsBaseTask::work` | `libjvm.dylib`           |
| 19.0% |      12 | `G1RebuildRSAndScrubTask::work`   | `libjvm.dylib`           |
| 15.9% |      10 | `G1CMConcurrentMarkingTask::work` | `libjvm.dylib`           |
|  3.2% |       2 | `semaphore_wait_trap`             | `libsystem_kernel.dylib` |
|  3.2% |       2 | `HeapRegionManager::par_iterate`  | `libjvm.dylib`           |

##### `KlassFactory::create_from_stream` (`libjvm.dylib`)

|     % | Samples | Callee                                   | Location       |
| ----: | ------: | ---------------------------------------- | -------------- |
| 91.9% |      57 | `ClassFileParser::ClassFileParser`       | `libjvm.dylib` |
|  8.1% |       5 | `ClassFileParser::create_instance_klass` | `libjvm.dylib` |

##### `inflate(byte[], int, int)` (`java.util.zip.Inflater`)

|     % | Samples | Callee                                                        | Location                 |
| ----: | ------: | ------------------------------------------------------------- | ------------------------ |
| 98.4% |      60 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` | `java.util.zip.Inflater` |

##### `Java_java_util_zip_Inflater_inflateBytesBytes` (`libzip.dylib`)

|     % | Samples | Callee                              | Location       |
| ----: | ------: | ----------------------------------- | -------------- |
| 70.0% |      42 | `inflate_fast`                      | `libzip.dylib` |
| 26.7% |      16 | `inflate`                           | `libzip.dylib` |
|  3.3% |       2 | `jni_ReleasePrimitiveArrayCritical` | `libjvm.dylib` |

##### `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`)

|      % | Samples | Callee                                          | Location       |
| -----: | ------: | ----------------------------------------------- | -------------- |
| 100.0% |      60 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `libzip.dylib` |

##### `GraphBuilder::iterate_bytecodes_for_block` (`libjvm.dylib`)

|     % | Samples | Callee                        | Location       |
| ----: | ------: | ----------------------------- | -------------- |
| 89.5% |      51 | `GraphBuilder::invoke`        | `libjvm.dylib` |
| 15.8% |       9 | `GraphBuilder::access_field`  | `libjvm.dylib` |
|  3.5% |       2 | `GraphBuilder::check_cast`    | `libjvm.dylib` |
|  3.5% |       2 | `GraphBuilder::method_return` | `libjvm.dylib` |
|  1.8% |       1 | `BlockBegin::set_end`         | `libjvm.dylib` |

##### `GraphBuilder::iterate_all_blocks` (`libjvm.dylib`)

|      % | Samples | Callee                                      | Location       |
| -----: | ------: | ------------------------------------------- | -------------- |
| 100.0% |      57 | `GraphBuilder::iterate_bytecodes_for_block` | `libjvm.dylib` |

##### `ClassFileParser::ClassFileParser` (`libjvm.dylib`)

|     % | Samples | Callee                                        | Location       |
| ----: | ------: | --------------------------------------------- | -------------- |
| 96.5% |      55 | `ClassFileParser::parse_stream`               | `libjvm.dylib` |
|  3.5% |       2 | `ClassFileParser::post_process_parsed_stream` | `libjvm.dylib` |

##### `ClassFileParser::parse_stream` (`libjvm.dylib`)

|     % | Samples | Callee                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 81.8% |      45 | `ClassFileParser::parse_constant_pool` | `libjvm.dylib` |
| 16.4% |       9 | `ClassFileParser::parse_methods`       | `libjvm.dylib` |
|  1.8% |       1 | `ConstantPool::allocate`               | `libjvm.dylib` |

##### `Compile::optimize_loops` (`libjvm.dylib`)

|      % | Samples | Callee                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |      54 | `PhaseIdealLoop::optimize` | `libjvm.dylib` |

##### `Parse::do_one_block` (`libjvm.dylib`)

|     % | Samples | Callee                   | Location       |
| ----: | ------: | ------------------------ | -------------- |
| 90.4% |      47 | `Parse::do_call`         | `libjvm.dylib` |
| 13.5% |       7 | `Parse::do_field_access` | `libjvm.dylib` |
|  9.6% |       5 | `Parse::do_one_bytecode` | `libjvm.dylib` |
|  5.8% |       3 | `Parse::do_if`           | `libjvm.dylib` |
|  1.9% |       1 | `Parse::return_current`  | `libjvm.dylib` |

##### `Parse::do_all_blocks` (`libjvm.dylib`)

|      % | Samples | Callee                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |      52 | `Parse::do_one_block` | `libjvm.dylib` |

##### `Parse::Parse` (`libjvm.dylib`)

|      % | Samples | Callee                    | Location       |
| -----: | ------: | ------------------------- | -------------- |
| 100.0% |      52 | `Parse::do_all_blocks`    | `libjvm.dylib` |
|   9.6% |       5 | `Parse::do_exits`         | `libjvm.dylib` |
|   5.8% |       3 | `Parse::build_exits`      | `libjvm.dylib` |
|   1.9% |       1 | `ciMethod::method_data`   | `libjvm.dylib` |
|   1.9% |       1 | `GraphKit::set_map_clone` | `libjvm.dylib` |

## Hottest call stacks

Call stacks with the most samples collected in their leaf frame.

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ---: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2.6% |      37 | `inflate_fast` (`libzip.dylib`) ← `Java_java_util_zip_Inflater_inflateBytesBytes` ← `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`) ← `inflate(byte[], int, int)` ← `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`) ← `read(byte[], int, int)` (`java.util.zip.ZipInputStream`) ← `read(byte[])` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`              |
| 1.1% |      16 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait` ← `CompileQueue::get` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                   |
| 0.9% |      13 | `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                    |
| 0.9% |      12 | `PhaseChaitin::Split` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                 |
| 0.8% |      11 | `PhaseChaitin::gather_lrg_masks` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                      |
| 0.7% |      10 | `inflate_table` (`libzip.dylib`) ← `inflate` ← `Java_java_util_zip_Inflater_inflateBytesBytes` ← `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`) ← `inflate(byte[], int, int)` ← `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`) ← `read(byte[], int, int)` (`java.util.zip.ZipInputStream`) ← `read(byte[])` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])` |
| 0.7% |      10 | `PhaseAggressiveCoalesce::insert_copies` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                              |
| 0.7% |      10 | `Matcher::xform` (`libjvm.dylib`) ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                       |
| 0.6% |       9 | `PhaseLive::add_liveout` (`libjvm.dylib`) ← `PhaseLive::compute` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                       |
| 0.6% |       9 | `LinearScan::assign_reg_num` (`libjvm.dylib`) ← `LinearScan::do_linear_scan` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                |
| 0.6% |       8 | `PhaseIdealLoop::build_loop_late` (`libjvm.dylib`) ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                  |
| 0.6% |       8 | `PhaseChaitin::elide_copy` (`libjvm.dylib`) ← `PhaseChaitin::post_allocate_copy_removal` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                               |
| 0.5% |       7 | `Matcher::match_tree` (`libjvm.dylib`) ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                               |
| 0.5% |       7 | `PhaseIFG::effective_degree` (`libjvm.dylib`) ← `PhaseIFG::Compute_Effective_Degree` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                   |
| 0.5% |       7 | `Arena::contains` (`libjvm.dylib`) ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                   |
| 0.5% |       7 | `IntervalWalker::walk_to` (`libjvm.dylib`) ← `IntervalWalker::walk_to` ← `LinearScan::allocate_registers` ← `LinearScan::do_linear_scan` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                    |
| 0.4% |       6 | `inflate` (`libzip.dylib`) ← `Java_java_util_zip_Inflater_inflateBytesBytes` ← `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`) ← `inflate(byte[], int, int)` ← `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`) ← `read(byte[], int, int)` (`java.util.zip.ZipInputStream`) ← `read(byte[])` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                   |
| 0.4% |       6 | `PhaseIdealLoop::build_loop_early` (`libjvm.dylib`) ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                     |
| 0.4% |       6 | `PhaseLive::compute` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                  |
| 0.4% |       6 | `PhaseChaitin::post_allocate_copy_removal` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                            |

# Allocated heap profile

Allocated 705 MiB over 1,403 samples (514 KiB per sample).

| Category         |     % |    Size | Samples |
| ---------------- | ----: | ------: | ------: |
| Standard library | 76.8% | 541 MiB |   1,076 |
| Ours             | 23.2% | 164 MiB |     327 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
├── 644 MiB (91.4%) main(String[]) at org.jetbrains.kotlin.preloading.Preloader
│   └── 644 MiB (91.4%) run(String[])
│       ├── 364 MiB (51.6%) preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler) at org.jetbrains.kotlin.preloading.ClassPreloadingUtils
│       │   └── … 364 MiB (51.6%) loadAllClassesFromJars(Collection, int, ClassHandler) at org.jetbrains.kotlin.preloading.ClassPreloadingUtils
│       │       ├── 176 MiB (25.0%) <init>(int) at java.io.ByteArrayOutputStream
│       │       ├── 172 MiB (24.4%) toByteArray() at java.io.ByteArrayOutputStream
│       │       │   └── 172 MiB (24.4%, self 19.5%, self 20.5% globally) copyOf(byte[], int) at java.util.Arrays
│       │       │       └── 34.5 MiB (4.9%) clone() at java.lang.Object
│       │       ├── 11.5 MiB (1.6%) getNextEntry() at java.util.zip.ZipInputStream
│       │       │   └── 11.5 MiB (1.6%) readLOC()
│       │       │       ├── … 5.5 MiB (0.8%, self 2.2% globally) copyOfRangeByte(byte[], int, int) at java.util.Arrays
│       │       │       └── 4 MiB (0.6%) createZipEntry(String)
│       │       └── … 512 KiB (0.1%, self 1.1% globally) resize() at java.util.HashMap
│       └── … 279 MiB (39.6%) main(String[]) at org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion
│           ├── … 274 MiB (38.9%) exec(PrintStream, Services, MessageRenderer, String[]) at org.jetbrains.kotlin.cli.common.CLICompiler
│           │   ├── 270 MiB (38.3%) exec(MessageCollector, Services, CommonCompilerArguments)
│           │   │   ├── … 261 MiB (37.1%) invoke(PhaseConfig, PhaserState, LoggingContext, Object) at org.jetbrains.kotlin.config.phaser.NamedCompilerPhase
│           │   │   │   ├── 245 MiB (34.7%) phaseBody(LoggingContext, Object) at org.jetbrains.kotlin.cli.pipeline.PipelinePhase
│           │   │   │   │   └── 245 MiB (34.7%) phaseBody(PipelineContext, PipelineArtifact)
│           │   │   │   │       ├── 216 MiB (30.7%) executePhase(PipelineArtifact) at org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase
│           │   │   │   │       │   └── 216 MiB (30.7%) executePhase(ConfigurationPipelineArtifact)
│           │   │   │   │       │       ├── 171 MiB (24.2%) resolveAndCheckFir(FirSession, List, BaseDiagnosticsCollector) at org.jetbrains.kotlin.fir.pipeline.FirUtilsKt
│           │   │   │   │       │       │   ├── 152 MiB (21.5%) runResolution(FirSession, List) at org.jetbrains.kotlin.fir.pipeline.AnalyseKt
│           │   │   │   │       │       │   │   └── 152 MiB (21.5%) process(List) at org.jetbrains.kotlin.fir.resolve.transformers.FirTotalResolveProcessor
│           │   │   │   │       │       │   │       ├── 113 MiB (16.0%) processFile(FirFile) at org.jetbrains.kotlin.fir.resolve.transformers.FirTransformerBasedResolveProcessor …
│           │   │   │   │       │       │   │       └── … 35.7 MiB (5.1%) getValue(Object, Object) at org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache
│           │   │   │   │       │       │   │           └── … 34.7 MiB (4.9%) computePackagePartInfo(FqName, String) at org.jetbrains.kotlin.fir.java.deserialization.JvmClassFileBasedSymbolProvider
│           │   │   │   │       │       │   │               ├── … 29 MiB (4.1%) readMessage(Parser, ExtensionRegistryLite) at org.jetbrains.kotlin.protobuf.CodedInputStream
│           │   │   │   │       │       │   │               │   ├── … 11.5 MiB (1.6%, self 0.6%) parsePartialFrom(CodedInputStream, ExtensionRegistryLite) at org.jetbrains.kotlin.metadata.ProtoBuf$Type$1
│           │   │   │   │       │       │   │               │   │   └── … 3.5 MiB (0.5%, self 2.7% globally) <init>(int) at org.jetbrains.kotlin.protobuf.ByteString$Output
│           │   │   │   │       │       │   │               │   └── 17.5 MiB (2.5%) 7 more callees, led by (0.8%) parsePartialFrom(CodedInputStream, ExtensionRegistryLite) at org.jetbrains.kotlin.metadata.ProtoBuf$Function$1
│           │   │   │   │       │       │   │               └── 5.19 MiB (0.7%) findKotlinClassOrContent(ClassId, MetadataVersion) at org.jetbrains.kotlin.load.kotlin.VirtualFileFinder …
│           │   │   │   │       │       │   └── 19 MiB (2.7%) runCheckers(FirSession, ScopeSession, Collection, BaseDiagnosticsCollector, MppCheckerKind) at org.jetbrains.kotlin.fir.pipeline.AnalyseKt …
│           │   │   │   │       │       └── 45.5 MiB (6.5%) 6 more callees, led by (2.4%) createEnvironmentAndSources(CompilerConfiguration, Disposable, String)
│           │   │   │   │       └── 28.5 MiB (4.0%) 3 more callees, led by (2.9%) executePhase(PipelineArtifact) at org.jetbrains.kotlin.cli.pipeline.jvm.JvmFir2IrPipelinePhase
│           │   │   │   └── 16.5 MiB (2.3%) 5 more callees, led by (1.8%) phaseBody(LoggingContext, Object) at org.jetbrains.kotlin.backend.common.phaser.FileLoweringPhase
│           │   │   └── 6.5 MiB (0.9%) <clinit>() at org.jetbrains.kotlin.cli.common.ArgumentsKt …
│           │   └── … 512 KiB (0.1%, self 0.6% globally) enlarge(int) at jdk.internal.org.objectweb.asm.ByteVector
│           └── … 4.21 MiB (0.6%) initCEN(int, ZipCoder) at java.util.zip.ZipFile$Source
└── 60.5 MiB (8.6%) run() at java.lang.Thread …
```

## Hottest functions

### Self size

Functions with the most bytes allocated within the function body, excluding callees.

|     % |     Size | Samples | Function                                                    | Location                                              |
| ----: | -------: | ------: | ----------------------------------------------------------- | ----------------------------------------------------- |
| 25.0% |  176 MiB |     352 | `<init>(int)`                                               | `java.io.ByteArrayOutputStream`                       |
| 20.5% |  145 MiB |     289 | `copyOf(byte[], int)`                                       | `java.util.Arrays`                                    |
|  5.0% | 35.5 MiB |      71 | `clone()`                                                   | `java.lang.Object`                                    |
|  2.7% |   19 MiB |      38 | `<init>(int)`                                               | `org.jetbrains.kotlin.protobuf.ByteString$Output`     |
|  2.2% | 15.5 MiB |      31 | `copyOfRangeByte(byte[], int, int)`                         | `java.util.Arrays`                                    |
|  1.8% | 12.5 MiB |      25 | `iterator()`                                                | `java.util.ArrayList`                                 |
|  1.2% |  8.5 MiB |      17 | `<init>(int, int)`                                          | `org.jetbrains.org.objectweb.asm.tree.analysis.Frame` |
|  1.1% |  7.5 MiB |      15 | `resize()`                                                  | `java.util.HashMap`                                   |
|  1.0% |    7 MiB |      14 | `grow(int)`                                                 | `java.util.ArrayList`                                 |
|  0.9% |  6.5 MiB |      13 | `newOutput()`                                               | `org.jetbrains.kotlin.protobuf.ByteString`            |
|  0.9% |    6 MiB |      12 | `copyOfRange(byte[], int, int)`                             | `java.util.Arrays`                                    |
|  0.9% |    6 MiB |      12 | `<init>(int, float, boolean)`                               | `java.util.HashSet`                                   |
|  0.8% |  5.5 MiB |      11 | `newString(byte[], int, int)`                               | `java.lang.StringLatin1`                              |
|  0.8% |  5.5 MiB |      11 | `newNode(int, Object, Object, HashMap$Node)`                | `java.util.LinkedHashMap`                             |
|  0.7% | 5.21 MiB |       5 | `initCEN(int, ZipCoder)`                                    | `java.util.zip.ZipFile$Source`                        |
|  0.7% |    5 MiB |      10 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$1`       |
|  0.6% |  4.5 MiB |       9 | `enlarge(int)`                                              | `jdk.internal.org.objectweb.asm.ByteVector`           |
|  0.6% |  4.5 MiB |       9 | `allocateUninitializedArray(Class, int)`                    | `jdk.internal.misc.Unsafe`                            |
|  0.6% |  4.5 MiB |       9 | `<init>(int)`                                               | `kotlin.collections.builders.MapBuilder`              |
|  0.6% |    4 MiB |       8 | `createZipEntry(String)`                                    | `java.util.zip.ZipInputStream`                        |

#### Categories

Categories accounting for at least 1.0% of self size.

##### Standard library

|     % |     Size | Samples | Function                                     | Location                                     |
| ----: | -------: | ------: | -------------------------------------------- | -------------------------------------------- |
| 25.0% |  176 MiB |     352 | `<init>(int)`                                | `java.io.ByteArrayOutputStream`              |
| 20.5% |  145 MiB |     289 | `copyOf(byte[], int)`                        | `java.util.Arrays`                           |
|  5.0% | 35.5 MiB |      71 | `clone()`                                    | `java.lang.Object`                           |
|  2.2% | 15.5 MiB |      31 | `copyOfRangeByte(byte[], int, int)`          | `java.util.Arrays`                           |
|  1.8% | 12.5 MiB |      25 | `iterator()`                                 | `java.util.ArrayList`                        |
|  1.1% |  7.5 MiB |      15 | `resize()`                                   | `java.util.HashMap`                          |
|  1.0% |    7 MiB |      14 | `grow(int)`                                  | `java.util.ArrayList`                        |
|  0.9% |    6 MiB |      12 | `copyOfRange(byte[], int, int)`              | `java.util.Arrays`                           |
|  0.9% |    6 MiB |      12 | `<init>(int, float, boolean)`                | `java.util.HashSet`                          |
|  0.8% |  5.5 MiB |      11 | `newString(byte[], int, int)`                | `java.lang.StringLatin1`                     |
|  0.8% |  5.5 MiB |      11 | `newNode(int, Object, Object, HashMap$Node)` | `java.util.LinkedHashMap`                    |
|  0.7% | 5.21 MiB |       5 | `initCEN(int, ZipCoder)`                     | `java.util.zip.ZipFile$Source`               |
|  0.6% |  4.5 MiB |       9 | `enlarge(int)`                               | `jdk.internal.org.objectweb.asm.ByteVector`  |
|  0.6% |  4.5 MiB |       9 | `allocateUninitializedArray(Class, int)`     | `jdk.internal.misc.Unsafe`                   |
|  0.6% |  4.5 MiB |       9 | `<init>(int)`                                | `kotlin.collections.builders.MapBuilder`     |
|  0.6% |    4 MiB |       8 | `createZipEntry(String)`                     | `java.util.zip.ZipInputStream`               |
|  0.6% |    4 MiB |       8 | `<init>(ClassWriter)`                        | `jdk.internal.org.objectweb.asm.SymbolTable` |
|  0.6% |    4 MiB |       8 | `copyOf(Object[], int, Class)`               | `java.util.Arrays`                           |
|  0.6% |    4 MiB |       8 | `<init>(int)`                                | `java.lang.AbstractStringBuilder`            |
|  0.5% |  3.5 MiB |       7 | `toString()`                                 | `java.lang.StringBuilder`                    |

##### Ours

|    % |     Size | Samples | Function                                                                              | Location                                                                                           |
| ---: | -------: | ------: | ------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| 2.7% |   19 MiB |      38 | `<init>(int)`                                                                         | `org.jetbrains.kotlin.protobuf.ByteString$Output`                                                  |
| 1.2% |  8.5 MiB |      17 | `<init>(int, int)`                                                                    | `org.jetbrains.org.objectweb.asm.tree.analysis.Frame`                                              |
| 0.9% |  6.5 MiB |      13 | `newOutput()`                                                                         | `org.jetbrains.kotlin.protobuf.ByteString`                                                         |
| 0.7% |    5 MiB |      10 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)`                           | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$1`                                                    |
| 0.5% |  3.5 MiB |       7 | `<init>()`                                                                            | `org.jetbrains.kotlin.resolve.calls.inference.model.MutableConstraintStorage`                      |
| 0.4% |    3 MiB |       6 | `loadAllClassesFromJars(Collection, int, ClassHandler)`                               | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`                                             |
| 0.4% |    3 MiB |       6 | `newInstance(OutputStream, int)`                                                      | `org.jetbrains.kotlin.protobuf.CodedOutputStream`                                                  |
| 0.4% |    3 MiB |       6 | `<init>(InputStream)`                                                                 | `org.jetbrains.kotlin.protobuf.CodedInputStream`                                                   |
| 0.4% |  2.5 MiB |       5 | `newFieldMap(int)`                                                                    | `org.jetbrains.kotlin.protobuf.SmallSortedMap`                                                     |
| 0.4% |  2.5 MiB |       5 | `simplifyTrivialInstructions(MethodNode)`                                             | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer` |
| 0.3% |    2 MiB |       4 | `accept(ClassVisitor, Attribute[], int)`                                              | `org.jetbrains.org.objectweb.asm.ClassReader`                                                      |
| 0.3% |    2 MiB |       4 | `visitVarInsn(int, int)`                                                              | `org.jetbrains.org.objectweb.asm.tree.MethodNode`                                                  |
| 0.3% |    2 MiB |       4 | `_init_$lambda$0(int, int)`                                                           | `org.jetbrains.kotlin.codegen.optimization.common.FastMethodAnalyzer`                              |
| 0.3% |    2 MiB |       4 | `<init>(String, MethodNode, Interpreter, boolean, boolean, boolean, Function2)`       | `org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer`                                    |
| 0.3% |    2 MiB |       4 | `getTypeInternal(String, int, int)`                                                   | `org.jetbrains.org.objectweb.asm.Type`                                                             |
| 0.2% | 1.69 MiB |       3 | `contentsToByteArray$lambda$0(ZipEntryDescription, LargeDynamicMappedBuffer$Mapping)` | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt`                                  |
| 0.2% |  1.5 MiB |       3 | `getBytes(int, int)`                                                                  | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.LargeDynamicMappedBuffer$Mapping`                     |
| 0.2% |  1.5 MiB |       3 | `readUtf(int, int, char[])`                                                           | `org.jetbrains.org.objectweb.asm.ClassReader`                                                      |
| 0.2% |  1.5 MiB |       3 | `<init>(String)`                                                                      | `org.jetbrains.kotlin.name.FqName`                                                                 |
| 0.2% |  1.5 MiB |       3 | `newFieldSet()`                                                                       | `org.jetbrains.kotlin.protobuf.FieldSet`                                                           |

#### Lines

Lines with the largest contribution to each function's self size.

##### `<init>(int)` (`java.io.ByteArrayOutputStream`)

|      % |    Size | Samples | Location                           |
| -----: | ------: | ------: | ---------------------------------- |
| 100.0% | 176 MiB |     352 | `java.io.ByteArrayOutputStream:81` |

##### `copyOf(byte[], int)` (`java.util.Arrays`)

|     % |    Size | Samples | Location                |
| ----: | ------: | ------: | ----------------------- |
| 94.8% | 137 MiB |     274 | `java.util.Arrays:3539` |
|  5.2% | 7.5 MiB |      15 | `java.util.Arrays:3541` |

##### `<init>(int)` (`org.jetbrains.kotlin.protobuf.ByteString$Output`)

|     % |     Size | Samples | Location                                              |
| ----: | -------: | ------: | ----------------------------------------------------- |
| 86.8% | 16.5 MiB |      33 | `org.jetbrains.kotlin.protobuf.ByteString$Output:789` |
| 13.2% |  2.5 MiB |       5 | `org.jetbrains.kotlin.protobuf.ByteString$Output:788` |

##### `copyOfRangeByte(byte[], int, int)` (`java.util.Arrays`)

|      % |     Size | Samples | Location                |
| -----: | -------: | ------: | ----------------------- |
| 100.0% | 15.5 MiB |      31 | `java.util.Arrays:3863` |

##### `iterator()` (`java.util.ArrayList`)

|      % |     Size | Samples | Location                   |
| -----: | -------: | ------: | -------------------------- |
| 100.0% | 12.5 MiB |      25 | `java.util.ArrayList:1029` |

##### `<init>(int, int)` (`org.jetbrains.org.objectweb.asm.tree.analysis.Frame`)

|      % |    Size | Samples | Location                                                 |
| -----: | ------: | ------: | -------------------------------------------------------- |
| 100.0% | 8.5 MiB |      17 | `org.jetbrains.org.objectweb.asm.tree.analysis.Frame:96` |

##### `resize()` (`java.util.HashMap`)

|      % |    Size | Samples | Location                |
| -----: | ------: | ------: | ----------------------- |
| 100.0% | 7.5 MiB |      15 | `java.util.HashMap:710` |

##### `grow(int)` (`java.util.ArrayList`)

|      % |  Size | Samples | Location                  |
| -----: | ----: | ------: | ------------------------- |
| 100.0% | 7 MiB |      14 | `java.util.ArrayList:239` |

##### `newOutput()` (`org.jetbrains.kotlin.protobuf.ByteString`)

|      % |    Size | Samples | Location                                       |
| -----: | ------: | ------: | ---------------------------------------------- |
| 100.0% | 6.5 MiB |      13 | `org.jetbrains.kotlin.protobuf.ByteString:751` |

##### `copyOfRange(byte[], int, int)` (`java.util.Arrays`)

|      % |  Size | Samples | Location                |
| -----: | ----: | ------: | ----------------------- |
| 100.0% | 6 MiB |      12 | `java.util.Arrays:3856` |

##### `<init>(int, float, boolean)` (`java.util.HashSet`)

|      % |  Size | Samples | Location                |
| -----: | ----: | ------: | ----------------------- |
| 100.0% | 6 MiB |      12 | `java.util.HashSet:171` |

##### `newString(byte[], int, int)` (`java.lang.StringLatin1`)

|      % |    Size | Samples | Location                     |
| -----: | ------: | ------: | ---------------------------- |
| 100.0% | 5.5 MiB |      11 | `java.lang.StringLatin1:750` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.LinkedHashMap`)

|      % |    Size | Samples | Location                      |
| -----: | ------: | ------: | ----------------------------- |
| 100.0% | 5.5 MiB |      11 | `java.util.LinkedHashMap:281` |

##### `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

|      % |     Size | Samples | Location                            |
| -----: | -------: | ------: | ----------------------------------- |
| 100.0% | 5.21 MiB |       5 | `java.util.zip.ZipFile$Source:1733` |

##### `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type$1`)

|      % |  Size | Samples | Location                                             |
| -----: | ----: | ------: | ---------------------------------------------------- |
| 100.0% | 5 MiB |      10 | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$1:5079` |

##### `enlarge(int)` (`jdk.internal.org.objectweb.asm.ByteVector`)

|      % |    Size | Samples | Location                                        |
| -----: | ------: | ------: | ----------------------------------------------- |
| 100.0% | 4.5 MiB |       9 | `jdk.internal.org.objectweb.asm.ByteVector:401` |

##### `allocateUninitializedArray(Class, int)` (`jdk.internal.misc.Unsafe`)

|      % |    Size | Samples | Location                        |
| -----: | ------: | ------: | ------------------------------- |
| 100.0% | 4.5 MiB |       9 | `jdk.internal.misc.Unsafe:1380` |

##### `<init>(int)` (`kotlin.collections.builders.MapBuilder`)

|     % |    Size | Samples | Location                                    |
| ----: | ------: | ------: | ------------------------------------------- |
| 66.7% |   3 MiB |       6 | `kotlin.collections.builders.MapBuilder:60` |
| 33.3% | 1.5 MiB |       3 | `kotlin.collections.builders.MapBuilder:59` |

##### `createZipEntry(String)` (`java.util.zip.ZipInputStream`)

|      % |  Size | Samples | Location                           |
| -----: | ----: | ------: | ---------------------------------- |
| 100.0% | 4 MiB |       8 | `java.util.zip.ZipInputStream:555` |

##### `<init>(ClassWriter)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

|      % |  Size | Samples | Location                                         |
| -----: | ----: | ------: | ------------------------------------------------ |
| 100.0% | 4 MiB |       8 | `jdk.internal.org.objectweb.asm.SymbolTable:156` |

##### `copyOf(Object[], int, Class)` (`java.util.Arrays`)

|      % |  Size | Samples | Location                |
| -----: | ----: | ------: | ----------------------- |
| 100.0% | 4 MiB |       8 | `java.util.Arrays:3513` |

##### `<init>(int)` (`java.lang.AbstractStringBuilder`)

|      % |  Size | Samples | Location                              |
| -----: | ----: | ------: | ------------------------------------- |
| 100.0% | 4 MiB |       8 | `java.lang.AbstractStringBuilder:101` |

##### `toString()` (`java.lang.StringBuilder`)

|      % |    Size | Samples | Location                      |
| -----: | ------: | ------: | ----------------------------- |
| 100.0% | 3.5 MiB |       7 | `java.lang.StringBuilder:475` |

##### `<init>()` (`org.jetbrains.kotlin.resolve.calls.inference.model.MutableConstraintStorage`)

|     % |    Size | Samples | Location                                                                          |
| ----: | ------: | ------: | --------------------------------------------------------------------------------- |
| 42.9% | 1.5 MiB |       3 | `org.jetbrains.kotlin.resolve.calls.inference.model.MutableConstraintStorage:332` |
| 28.6% |   1 MiB |       2 | `org.jetbrains.kotlin.resolve.calls.inference.model.MutableConstraintStorage:317` |
| 14.3% | 512 KiB |       1 | `org.jetbrains.kotlin.resolve.calls.inference.model.MutableConstraintStorage:319` |
| 14.3% | 512 KiB |       1 | `org.jetbrains.kotlin.resolve.calls.inference.model.MutableConstraintStorage:316` |

##### `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`)

|     % |  Size | Samples | Location                                                   |
| ----: | ----: | ------: | ---------------------------------------------------------- |
| 66.7% | 2 MiB |       4 | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils:151` |
| 33.3% | 1 MiB |       2 | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils:139` |

##### `newInstance(OutputStream, int)` (`org.jetbrains.kotlin.protobuf.CodedOutputStream`)

|      % |  Size | Samples | Location                                              |
| -----: | ----: | ------: | ----------------------------------------------------- |
| 100.0% | 3 MiB |       6 | `org.jetbrains.kotlin.protobuf.CodedOutputStream:106` |

##### `<init>(InputStream)` (`org.jetbrains.kotlin.protobuf.CodedInputStream`)

|      % |  Size | Samples | Location                                             |
| -----: | ----: | ------: | ---------------------------------------------------- |
| 100.0% | 3 MiB |       6 | `org.jetbrains.kotlin.protobuf.CodedInputStream:911` |

##### `newFieldMap(int)` (`org.jetbrains.kotlin.protobuf.SmallSortedMap`)

|      % |    Size | Samples | Location                                           |
| -----: | ------: | ------: | -------------------------------------------------- |
| 100.0% | 2.5 MiB |       5 | `org.jetbrains.kotlin.protobuf.SmallSortedMap:100` |

##### `simplifyTrivialInstructions(MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer`)

|     % |    Size | Samples | Location                                                                                              |
| ----: | ------: | ------: | ----------------------------------------------------------------------------------------------------- |
| 60.0% | 1.5 MiB |       3 | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer:49` |
| 20.0% | 512 KiB |       1 | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer:50` |
| 20.0% | 512 KiB |       1 | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer:57` |

##### `accept(ClassVisitor, Attribute[], int)` (`org.jetbrains.org.objectweb.asm.ClassReader`)

|     % |    Size | Samples | Location                                          |
| ----: | ------: | ------: | ------------------------------------------------- |
| 75.0% | 1.5 MiB |       3 | `org.jetbrains.org.objectweb.asm.ClassReader:458` |
| 25.0% | 512 KiB |       1 | `org.jetbrains.org.objectweb.asm.ClassReader:545` |

##### `visitVarInsn(int, int)` (`org.jetbrains.org.objectweb.asm.tree.MethodNode`)

|      % |  Size | Samples | Location                                              |
| -----: | ----: | ------: | ----------------------------------------------------- |
| 100.0% | 2 MiB |       4 | `org.jetbrains.org.objectweb.asm.tree.MethodNode:351` |

##### `_init_$lambda$0(int, int)` (`org.jetbrains.kotlin.codegen.optimization.common.FastMethodAnalyzer`)

|      % |  Size | Samples | Location                                                                 |
| -----: | ----: | ------: | ------------------------------------------------------------------------ |
| 100.0% | 2 MiB |       4 | `org.jetbrains.kotlin.codegen.optimization.common.FastMethodAnalyzer:47` |

##### `<init>(String, MethodNode, Interpreter, boolean, boolean, boolean, Function2)` (`org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer`)

|     % |  Size | Samples | Location                                                           |
| ----: | ----: | ------: | ------------------------------------------------------------------ |
| 50.0% | 1 MiB |       2 | `org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer:35` |
| 50.0% | 1 MiB |       2 | `org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer:28` |

##### `getTypeInternal(String, int, int)` (`org.jetbrains.org.objectweb.asm.Type`)

|      % |  Size | Samples | Location                                   |
| -----: | ----: | ------: | ------------------------------------------ |
| 100.0% | 2 MiB |       4 | `org.jetbrains.org.objectweb.asm.Type:425` |

##### `contentsToByteArray$lambda$0(ZipEntryDescription, LargeDynamicMappedBuffer$Mapping)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt`)

|      % |     Size | Samples | Location                                                             |
| -----: | -------: | ------: | -------------------------------------------------------------------- |
| 100.0% | 1.69 MiB |       3 | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt:51` |

##### `getBytes(int, int)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.LargeDynamicMappedBuffer$Mapping`)

|      % |    Size | Samples | Location                                                                          |
| -----: | ------: | ------: | --------------------------------------------------------------------------------- |
| 100.0% | 1.5 MiB |       3 | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.LargeDynamicMappedBuffer$Mapping:84` |

##### `readUtf(int, int, char[])` (`org.jetbrains.org.objectweb.asm.ClassReader`)

|      % |    Size | Samples | Location                                           |
| -----: | ------: | ------: | -------------------------------------------------- |
| 100.0% | 1.5 MiB |       3 | `org.jetbrains.org.objectweb.asm.ClassReader:3886` |

##### `<init>(String)` (`org.jetbrains.kotlin.name.FqName`)

|      % |    Size | Samples | Location                              |
| -----: | ------: | ------: | ------------------------------------- |
| 100.0% | 1.5 MiB |       3 | `org.jetbrains.kotlin.name.FqName:37` |

##### `newFieldSet()` (`org.jetbrains.kotlin.protobuf.FieldSet`)

|      % |    Size | Samples | Location                                    |
| -----: | ------: | ------: | ------------------------------------------- |
| 100.0% | 1.5 MiB |       3 | `org.jetbrains.kotlin.protobuf.FieldSet:92` |

#### Callers

Callers with the largest contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `<init>(int)` (`java.io.ByteArrayOutputStream`)

|      % |    Size | Samples | Caller                                                  | Location                                               |
| -----: | ------: | ------: | ------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% | 176 MiB |     352 | `loadAllClassesFromJars(Collection, int, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `copyOf(byte[], int)` (`java.util.Arrays`)

|     % |    Size | Samples | Caller                        | Location                          |
| ----: | ------: | ------: | ----------------------------- | --------------------------------- |
| 94.8% | 137 MiB |     274 | `toByteArray()`               | `java.io.ByteArrayOutputStream`   |
|  3.1% | 4.5 MiB |       9 | `ensureCapacityInternal(int)` | `java.lang.AbstractStringBuilder` |
|  2.1% |   3 MiB |       6 | `getBytes()`                  | `jdk.internal.loader.Resource`    |

##### `clone()` (`java.lang.Object`)

|     % |     Size | Samples | Caller                          | Location                      |
| ----: | -------: | ------: | ------------------------------- | ----------------------------- |
| 97.2% | 34.5 MiB |      69 | `copyOf(byte[], int)`           | `java.util.Arrays`            |
|  1.4% |  512 KiB |       1 | `copyOfRange(byte[], int, int)` | `java.util.Arrays`            |
|  1.4% |  512 KiB |       1 | `clone()`                       | `java.lang.invoke.MemberName` |

##### `<init>(int)` (`org.jetbrains.kotlin.protobuf.ByteString$Output`)

|      % |   Size | Samples | Caller        | Location                                   |
| -----: | -----: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 19 MiB |      38 | `newOutput()` | `org.jetbrains.kotlin.protobuf.ByteString` |

##### `copyOfRangeByte(byte[], int, int)` (`java.util.Arrays`)

|      % |     Size | Samples | Caller                          | Location           |
| -----: | -------: | ------: | ------------------------------- | ------------------ |
| 100.0% | 15.5 MiB |      31 | `copyOfRange(byte[], int, int)` | `java.util.Arrays` |

##### `iterator()` (`java.util.ArrayList`)

|     % |    Size | Samples | Caller                                                 | Location                                                                                            |
| ----: | ------: | ------: | ------------------------------------------------------ | --------------------------------------------------------------------------------------------------- |
| 24.0% |   3 MiB |       6 | `acceptChildren(IrVisitor, Object)`                    | `org.jetbrains.kotlin.ir.declarations.IrFunction`                                                   |
| 12.0% | 1.5 MiB |       3 | `iterator-impl(List)`                                  | `org.jetbrains.kotlin.fir.MutableOrEmptyList`                                                       |
|  4.0% | 512 KiB |       1 | `computeRelatedToAllOutputTypes()`                     | `org.jetbrains.kotlin.resolve.calls.inference.components.TypeVariableDependencyInformationProvider` |
|  4.0% | 512 KiB |       1 | `findPostponedArgumentWithRevisableExpectedType(List)` | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintSystemCompletionContext`         |
|  4.0% | 512 KiB |       1 | `putAll(Map, Iterable)`                                | `kotlin.collections.MapsKt__MapsKt`                                                                 |

##### `<init>(int, int)` (`org.jetbrains.org.objectweb.asm.tree.analysis.Frame`)

|     % |    Size | Samples | Caller                                           | Location                                                                                          |
| ----: | ------: | ------: | ------------------------------------------------ | ------------------------------------------------------------------------------------------------- |
| 41.2% | 3.5 MiB |       7 | `<init>(FixStackAnalyzer, int, int)`             | `org.jetbrains.kotlin.codegen.optimization.fixStack.FixStackAnalyzer$FixStackFrame`               |
| 23.5% |   2 MiB |       4 | `_init_$lambda$0(int, int)`                      | `org.jetbrains.kotlin.codegen.optimization.common.FastMethodAnalyzer`                             |
| 11.8% |   1 MiB |       2 | `<init>(UninitializedStoresProcessor, int, int)` | `org.jetbrains.kotlin.codegen.coroutines.UninitializedStoresProcessor$UninitializedNewValueFrame` |
| 11.8% |   1 MiB |       2 | `preprocessNodeBeforeInline$lambda$0(int, int)`  | `org.jetbrains.kotlin.codegen.inline.MethodInliner`                                               |
| 11.8% |   1 MiB |       2 | `<init>(int, int)`                               | `org.jetbrains.kotlin.codegen.optimization.boxing.BoxingFrame`                                    |

##### `resize()` (`java.util.HashMap`)

|      % |    Size | Samples | Caller                                          | Location            |
| -----: | ------: | ------: | ----------------------------------------------- | ------------------- |
| 100.0% | 7.5 MiB |      15 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `grow(int)` (`java.util.ArrayList`)

|      % |  Size | Samples | Caller   | Location              |
| -----: | ----: | ------: | -------- | --------------------- |
| 100.0% | 7 MiB |      14 | `grow()` | `java.util.ArrayList` |

##### `newOutput()` (`org.jetbrains.kotlin.protobuf.ByteString`)

|     % |    Size | Samples | Caller                                            | Location                                                                  |
| ----: | ------: | ------: | ------------------------------------------------- | ------------------------------------------------------------------------- |
| 53.8% | 3.5 MiB |       7 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Type`                             |
| 15.4% |   1 MiB |       2 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Annotation`                       |
|  7.7% | 512 KiB |       1 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$Argument`                    |
|  7.7% | 512 KiB |       1 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$QualifiedNameTable$QualifiedName` |
|  7.7% | 512 KiB |       1 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$ValueParameter`                   |

##### `copyOfRange(byte[], int, int)` (`java.util.Arrays`)

|     % |  Size | Samples | Caller                                | Location           |
| ----: | ----: | ------: | ------------------------------------- | ------------------ |
| 83.3% | 5 MiB |      10 | `<init>(AbstractStringBuilder, Void)` | `java.lang.String` |
| 16.7% | 1 MiB |       2 | `<init>(Charset, byte[], int, int)`   | `java.lang.String` |

##### `<init>(int, float, boolean)` (`java.util.HashSet`)

|     % |    Size | Samples | Caller        | Location                  |
| ----: | ------: | ------: | ------------- | ------------------------- |
| 91.7% | 5.5 MiB |      11 | `<init>()`    | `java.util.LinkedHashSet` |
|  8.3% | 512 KiB |       1 | `<init>(int)` | `java.util.LinkedHashSet` |

##### `newString(byte[], int, int)` (`java.lang.StringLatin1`)

|     % |    Size | Samples | Caller                | Location                          |
| ----: | ------: | ------: | --------------------- | --------------------------------- |
| 81.8% | 4.5 MiB |       9 | `substring(int, int)` | `java.lang.String`                |
| 18.2% |   1 MiB |       2 | `substring(int, int)` | `java.lang.AbstractStringBuilder` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.LinkedHashMap`)

|      % |    Size | Samples | Caller                                          | Location            |
| -----: | ------: | ------: | ----------------------------------------------- | ------------------- |
| 100.0% | 5.5 MiB |      11 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

|      % |     Size | Samples | Caller                                          | Location                       |
| -----: | -------: | ------: | ----------------------------------------------- | ------------------------------ |
| 100.0% | 5.21 MiB |       5 | `<init>(ZipFile$Source$Key, boolean, ZipCoder)` | `java.util.zip.ZipFile$Source` |

##### `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type$1`)

|      % |  Size | Samples | Caller                                                      | Location                                        |
| -----: | ----: | ------: | ----------------------------------------------------------- | ----------------------------------------------- |
| 100.0% | 5 MiB |      10 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$1` |

##### `enlarge(int)` (`jdk.internal.org.objectweb.asm.ByteVector`)

|     % |    Size | Samples | Caller                  | Location                                    |
| ----: | ------: | ------: | ----------------------- | ------------------------------------------- |
| 66.7% |   3 MiB |       6 | `putUTF8(String)`       | `jdk.internal.org.objectweb.asm.ByteVector` |
| 11.1% | 512 KiB |       1 | `put12(int, int)`       | `jdk.internal.org.objectweb.asm.ByteVector` |
| 11.1% | 512 KiB |       1 | `put122(int, int, int)` | `jdk.internal.org.objectweb.asm.ByteVector` |
| 11.1% | 512 KiB |       1 | `putByte(int)`          | `jdk.internal.org.objectweb.asm.ByteVector` |

##### `allocateUninitializedArray(Class, int)` (`jdk.internal.misc.Unsafe`)

|      % |    Size | Samples | Caller           | Location                       |
| -----: | ------: | ------: | ---------------- | ------------------------------ |
| 100.0% | 4.5 MiB |       9 | `newArray(long)` | `java.lang.StringConcatHelper` |

##### `<init>(int)` (`kotlin.collections.builders.MapBuilder`)

|      % |    Size | Samples | Caller     | Location                                 |
| -----: | ------: | ------: | ---------- | ---------------------------------------- |
| 100.0% | 4.5 MiB |       9 | `<init>()` | `kotlin.collections.builders.MapBuilder` |

##### `createZipEntry(String)` (`java.util.zip.ZipInputStream`)

|      % |  Size | Samples | Caller      | Location                       |
| -----: | ----: | ------: | ----------- | ------------------------------ |
| 100.0% | 4 MiB |       8 | `readLOC()` | `java.util.zip.ZipInputStream` |

##### `<init>(ClassWriter)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

|      % |  Size | Samples | Caller                     | Location                                     |
| -----: | ----: | ------: | -------------------------- | -------------------------------------------- |
| 100.0% | 4 MiB |       8 | `<init>(ClassReader, int)` | `jdk.internal.org.objectweb.asm.ClassWriter` |

##### `copyOf(Object[], int, Class)` (`java.util.Arrays`)

|     % |    Size | Samples | Caller                                       | Location                                             |
| ----: | ------: | ------: | -------------------------------------------- | ---------------------------------------------------- |
| 75.0% |   3 MiB |       6 | `copyOf(Object[], int)`                      | `java.util.Arrays`                                   |
| 12.5% | 512 KiB |       1 | `<init>(LambdaForm$NamedFunction, Object[])` | `java.lang.invoke.LambdaForm$Name`                   |
| 12.5% | 512 KiB |       1 | `copyToArrayOfAny(Object[], boolean)`        | `kotlin.collections.CollectionsKt__CollectionsJVMKt` |

##### `<init>(int)` (`java.lang.AbstractStringBuilder`)

|     % |  Size | Samples | Caller        | Location                  |
| ----: | ----: | ------: | ------------- | ------------------------- |
| 50.0% | 2 MiB |       4 | `<init>(int)` | `java.lang.StringBuilder` |
| 50.0% | 2 MiB |       4 | `<init>()`    | `java.lang.StringBuilder` |

##### `toString()` (`java.lang.StringBuilder`)

|     % |    Size | Samples | Caller                                 | Location                                                                    |
| ----: | ------: | ------: | -------------------------------------- | --------------------------------------------------------------------------- |
| 14.3% | 512 KiB |       1 | `internalNameByClassId(ClassId)`       | `org.jetbrains.kotlin.resolve.jvm.JvmClassName`                             |
| 14.3% | 512 KiB |       1 | `descriptorString()`                   | `java.lang.Class`                                                           |
| 14.3% | 512 KiB |       1 | `resolve(Path)`                        | `jdk.internal.jrtfs.JrtPath`                                                |
| 14.3% | 512 KiB |       1 | `capitalizeFirstWord(String, boolean)` | `org.jetbrains.kotlin.util.capitalizeDecapitalize.CapitalizeDecapitalizeKt` |
| 14.3% | 512 KiB |       1 | `toLowerCaseAsciiOnly(String)`         | `org.jetbrains.kotlin.util.capitalizeDecapitalize.CapitalizeDecapitalizeKt` |

##### `<init>()` (`org.jetbrains.kotlin.resolve.calls.inference.model.MutableConstraintStorage`)

|      % |    Size | Samples | Caller                                                                                                | Location                                                                     |
| -----: | ------: | ------: | ----------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| 100.0% | 3.5 MiB |       7 | `<init>(ConstraintInjector, TypeSystemInferenceExtensionContext, LanguageVersionSettings, Function2)` | `org.jetbrains.kotlin.resolve.calls.inference.model.NewConstraintSystemImpl` |

##### `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`)

|      % |  Size | Samples | Caller                                                                       | Location                                               |
| -----: | ----: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% | 3 MiB |       6 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `newInstance(OutputStream, int)` (`org.jetbrains.kotlin.protobuf.CodedOutputStream`)

|     % |    Size | Samples | Caller                                            | Location                                                |
| ----: | ------: | ------: | ------------------------------------------------- | ------------------------------------------------------- |
| 50.0% | 1.5 MiB |       3 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Type`           |
| 16.7% | 512 KiB |       1 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$Argument`  |
| 16.7% | 512 KiB |       1 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Annotation`     |
| 16.7% | 512 KiB |       1 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$ValueParameter` |

##### `<init>(InputStream)` (`org.jetbrains.kotlin.protobuf.CodedInputStream`)

|      % |  Size | Samples | Caller                     | Location                                         |
| -----: | ----: | ------: | -------------------------- | ------------------------------------------------ |
| 100.0% | 3 MiB |       6 | `newInstance(InputStream)` | `org.jetbrains.kotlin.protobuf.CodedInputStream` |

##### `newFieldMap(int)` (`org.jetbrains.kotlin.protobuf.SmallSortedMap`)

|      % |    Size | Samples | Caller     | Location                                 |
| -----: | ------: | ------: | ---------- | ---------------------------------------- |
| 100.0% | 2.5 MiB |       5 | `<init>()` | `org.jetbrains.kotlin.protobuf.FieldSet` |

##### `simplifyTrivialInstructions(MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer`)

|      % |    Size | Samples | Caller                          | Location                                                                                           |
| -----: | ------: | ------: | ------------------------------- | -------------------------------------------------------------------------------------------------- |
| 100.0% | 2.5 MiB |       5 | `transform(String, MethodNode)` | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer` |

##### `accept(ClassVisitor, Attribute[], int)` (`org.jetbrains.org.objectweb.asm.ClassReader`)

|      % |  Size | Samples | Caller                      | Location                                      |
| -----: | ----: | ------: | --------------------------- | --------------------------------------------- |
| 100.0% | 2 MiB |       4 | `accept(ClassVisitor, int)` | `org.jetbrains.org.objectweb.asm.ClassReader` |

##### `visitVarInsn(int, int)` (`org.jetbrains.org.objectweb.asm.tree.MethodNode`)

|     % |    Size | Samples | Caller                                  | Location                                                     |
| ----: | ------: | ------: | --------------------------------------- | ------------------------------------------------------------ |
| 25.0% | 512 KiB |       1 | `load(int, Type)`                       | `org.jetbrains.org.objectweb.asm.commons.InstructionAdapter` |
| 25.0% | 512 KiB |       1 | `accept(MethodVisitor)`                 | `org.jetbrains.org.objectweb.asm.tree.VarInsnNode`           |
| 25.0% | 512 KiB |       1 | `readCode(MethodVisitor, Context, int)` | `org.jetbrains.org.objectweb.asm.ClassReader`                |
| 25.0% | 512 KiB |       1 | `visitVarInsn(int, int)`                | `org.jetbrains.org.objectweb.asm.MethodVisitor`              |

##### `_init_$lambda$0(int, int)` (`org.jetbrains.kotlin.codegen.optimization.common.FastMethodAnalyzer`)

|      % |  Size | Samples | Caller                   | Location                                                                                         |
| -----: | ----: | ------: | ------------------------ | ------------------------------------------------------------------------------------------------ |
| 100.0% | 2 MiB |       4 | `invoke(Object, Object)` | `org.jetbrains.kotlin.codegen.optimization.common.FastMethodAnalyzer$$Lambda.0x00000090018de330` |

##### `<init>(String, MethodNode, Interpreter, boolean, boolean, boolean, Function2)` (`org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer`)

|     % |    Size | Samples | Caller                                                        | Location                                                               |
| ----: | ------: | ------: | ------------------------------------------------------------- | ---------------------------------------------------------------------- |
| 75.0% | 1.5 MiB |       3 | `<init>(String, MethodNode, Interpreter, boolean, Function2)` | `org.jetbrains.kotlin.codegen.optimization.common.FastMethodAnalyzer`  |
| 25.0% | 512 KiB |       1 | `<init>(String, MethodNode, Interpreter, Function2)`          | `org.jetbrains.kotlin.codegen.optimization.fixStack.FastStackAnalyzer` |

##### `getTypeInternal(String, int, int)` (`org.jetbrains.org.objectweb.asm.Type`)

|      % |  Size | Samples | Caller                     | Location                               |
| -----: | ----: | ------: | -------------------------- | -------------------------------------- |
| 100.0% | 2 MiB |       4 | `getArgumentTypes(String)` | `org.jetbrains.org.objectweb.asm.Type` |

##### `contentsToByteArray$lambda$0(ZipEntryDescription, LargeDynamicMappedBuffer$Mapping)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt`)

|      % |     Size | Samples | Caller           | Location                                                                                     |
| -----: | -------: | ------: | ---------------- | -------------------------------------------------------------------------------------------- |
| 100.0% | 1.69 MiB |       3 | `invoke(Object)` | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt$$Lambda.0x0000009001396f88` |

##### `getBytes(int, int)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.LargeDynamicMappedBuffer$Mapping`)

|     % |    Size | Samples | Caller                                                                                      | Location                                                          |
| ----: | ------: | ------: | ------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| 66.7% |   1 MiB |       2 | `contentsToByteArray$lambda$0(ZipEntryDescription, LargeDynamicMappedBuffer$Mapping)`       | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt` |
| 33.3% | 512 KiB |       1 | `parseCentralDirectory$lambda$0(Ref$LongRef, List, long, LargeDynamicMappedBuffer$Mapping)` | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt` |

##### `readUtf(int, int, char[])` (`org.jetbrains.org.objectweb.asm.ClassReader`)

|      % |    Size | Samples | Caller                 | Location                                      |
| -----: | ------: | ------: | ---------------------- | --------------------------------------------- |
| 100.0% | 1.5 MiB |       3 | `readUtf(int, char[])` | `org.jetbrains.org.objectweb.asm.ClassReader` |

##### `<init>(String)` (`org.jetbrains.kotlin.name.FqName`)

|     % |    Size | Samples | Caller                                          | Location                                                                                 |
| ----: | ------: | ------: | ----------------------------------------------- | ---------------------------------------------------------------------------------------- |
| 66.7% |   1 MiB |       2 | `getFqNameWhenAvailable(IrDeclarationWithName)` | `org.jetbrains.kotlin.ir.util.IrUtilsKt`                                                 |
| 33.3% | 512 KiB |       1 | `visitExport(String, int, String[])`            | `org.jetbrains.kotlin.resolve.jvm.modules.JavaModuleInfo$Companion$read$1$visitModule$1` |

##### `newFieldSet()` (`org.jetbrains.kotlin.protobuf.FieldSet`)

|      % |    Size | Samples | Caller     | Location                                                               |
| -----: | ------: | ------: | ---------- | ---------------------------------------------------------------------- |
| 100.0% | 1.5 MiB |       3 | `<init>()` | `org.jetbrains.kotlin.protobuf.GeneratedMessageLite$ExtendableMessage` |

### Total size

Functions with the most bytes allocated within the function and its callees.

|     % |    Size | Samples | Function                                                                                            | Location                                                |
| ----: | ------: | ------: | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 91.4% | 644 MiB |   1,282 | `run(String[])`                                                                                     | `org.jetbrains.kotlin.preloading.Preloader`             |
| 91.4% | 644 MiB |   1,282 | `main(String[])`                                                                                    | `org.jetbrains.kotlin.preloading.Preloader`             |
| 51.6% | 364 MiB |     727 | `loadAllClassesFromJars(Collection, int, ClassHandler)`                                             | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`  |
| 51.6% | 364 MiB |     727 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)`                        | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`  |
| 39.8% | 280 MiB |     555 | `main(String[])`                                                                                    | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`  |
| 39.8% | 280 MiB |     555 | `main(String[])`                                                                                    | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 39.8% | 280 MiB |     555 | `invokeStatic(Object, Object)`                                                                      | `java.lang.invoke.LambdaForm$DMH.0x0000009001008400`    |
| 39.8% | 280 MiB |     555 | `invoke(Object, Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x0000009001009800`     |
| 39.8% | 280 MiB |     555 | `invokeExact_MT(Object, Object, Object, Object)`                                                    | `java.lang.invoke.Invokers$Holder`                      |
| 39.8% | 280 MiB |     555 | `invokeImpl(Object, Object[])`                                                                      | `jdk.internal.reflect.DirectMethodHandleAccessor`       |
| 39.8% | 280 MiB |     555 | `invoke(Object, Object[])`                                                                          | `jdk.internal.reflect.DirectMethodHandleAccessor`       |
| 39.8% | 280 MiB |     555 | `invoke(Object, Object[])`                                                                          | `java.lang.reflect.Method`                              |
| 39.2% | 276 MiB |     552 | `doMain(CLICompiler, String[])`                                                                     | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 39.1% | 276 MiB |     551 | `exec(PrintStream, Services, MessageRenderer, String[])`                                            | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 39.1% | 276 MiB |     551 | `exec(PrintStream, MessageRenderer, String[])`                                                      | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 39.1% | 276 MiB |     551 | `doMainNoExit(CLICompiler, String[], MessageRenderer)`                                              | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 39.1% | 276 MiB |     551 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)`  | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 38.3% | 270 MiB |     540 | `exec(MessageCollector, Services, CommonCompilerArguments)`                                         | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 37.4% | 264 MiB |     527 | `runPhasedPipeline(ArgumentsPipelineArtifact)`                                                      | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 37.4% | 264 MiB |     527 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

#### Categories

Categories accounting for at least 1.0% of self size.

##### Standard library

|     % |     Size | Samples | Function                                                                         | Location                                              |
| ----: | -------: | ------: | -------------------------------------------------------------------------------- | ----------------------------------------------------- |
| 39.8% |  280 MiB |     555 | `invokeStatic(Object, Object)`                                                   | `java.lang.invoke.LambdaForm$DMH.0x0000009001008400`  |
| 39.8% |  280 MiB |     555 | `invoke(Object, Object, Object)`                                                 | `java.lang.invoke.LambdaForm$MH.0x0000009001009800`   |
| 39.8% |  280 MiB |     555 | `invokeExact_MT(Object, Object, Object, Object)`                                 | `java.lang.invoke.Invokers$Holder`                    |
| 39.8% |  280 MiB |     555 | `invokeImpl(Object, Object[])`                                                   | `jdk.internal.reflect.DirectMethodHandleAccessor`     |
| 39.8% |  280 MiB |     555 | `invoke(Object, Object[])`                                                       | `jdk.internal.reflect.DirectMethodHandleAccessor`     |
| 39.8% |  280 MiB |     555 | `invoke(Object, Object[])`                                                       | `java.lang.reflect.Method`                            |
| 25.4% |  179 MiB |     358 | `copyOf(byte[], int)`                                                            | `java.util.Arrays`                                    |
| 25.0% |  176 MiB |     352 | `<init>(int)`                                                                    | `java.io.ByteArrayOutputStream`                       |
| 24.4% |  172 MiB |     343 | `toByteArray()`                                                                  | `java.io.ByteArrayOutputStream`                       |
|  8.6% | 60.5 MiB |     121 | `runWorker(ThreadPoolExecutor$Worker)`                                           | `java.util.concurrent.ThreadPoolExecutor`             |
|  8.6% | 60.5 MiB |     121 | `run()`                                                                          | `java.util.concurrent.ThreadPoolExecutor$Worker`      |
|  8.6% | 60.5 MiB |     121 | `runWith(Object, Runnable)`                                                      | `java.lang.Thread`                                    |
|  8.6% | 60.5 MiB |     121 | `run()`                                                                          | `java.lang.Thread`                                    |
|  8.6% | 60.5 MiB |     121 | `resumeWith(Object)`                                                             | `kotlin.coroutines.jvm.internal.BaseContinuationImpl` |
|  8.4% | 59.5 MiB |     119 | `run()`                                                                          | `java.util.concurrent.CompletableFuture$AsyncRun`     |
|  5.0% | 35.5 MiB |      71 | `clone()`                                                                        | `java.lang.Object`                                    |
|  3.7% |   26 MiB |      52 | `getValue()`                                                                     | `kotlin.SafePublicationLazyImpl`                      |
|  3.3% |   23 MiB |      46 | `linkCallSiteImpl(Class, MethodHandle, String, MethodType, Object, Object[])`    | `java.lang.invoke.MethodHandleNatives`                |
|  3.3% |   23 MiB |      46 | `linkCallSite(Object, Object, Object, Object, Object, Object[])`                 | `java.lang.invoke.MethodHandleNatives`                |
|  3.2% | 22.5 MiB |      45 | `invokeExact_MT(Object, Object, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                    |

##### Ours

|     % |    Size | Samples | Function                                                                                                                                      | Location                                                |
| ----: | ------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 91.4% | 644 MiB |   1,282 | `run(String[])`                                                                                                                               | `org.jetbrains.kotlin.preloading.Preloader`             |
| 91.4% | 644 MiB |   1,282 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.preloading.Preloader`             |
| 51.6% | 364 MiB |     727 | `loadAllClassesFromJars(Collection, int, ClassHandler)`                                                                                       | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`  |
| 51.6% | 364 MiB |     727 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)`                                                                  | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`  |
| 39.8% | 280 MiB |     555 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`  |
| 39.8% | 280 MiB |     555 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 39.2% | 276 MiB |     552 | `doMain(CLICompiler, String[])`                                                                                                               | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 39.1% | 276 MiB |     551 | `exec(PrintStream, Services, MessageRenderer, String[])`                                                                                      | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 39.1% | 276 MiB |     551 | `exec(PrintStream, MessageRenderer, String[])`                                                                                                | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 39.1% | 276 MiB |     551 | `doMainNoExit(CLICompiler, String[], MessageRenderer)`                                                                                        | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 39.1% | 276 MiB |     551 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)`                                            | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 38.3% | 270 MiB |     540 | `exec(MessageCollector, Services, CommonCompilerArguments)`                                                                                   | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 37.4% | 264 MiB |     527 | `runPhasedPipeline(ArgumentsPipelineArtifact)`                                                                                                | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 37.4% | 264 MiB |     527 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)`                                           | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 37.4% | 264 MiB |     527 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 37.4% | 264 MiB |     527 | `execute(CommonCompilerArguments, Services, MessageCollector)`                                                                                | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 37.4% | 264 MiB |     527 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)`                                                                         | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 37.4% | 264 MiB |     527 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)`                                                                        | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 37.4% | 264 MiB |     527 | `execImpl(MessageCollector, Services, CommonCompilerArguments)`                                                                               | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 37.1% | 261 MiB |     522 | `phaseBody(PipelineContext, PipelineArtifact)`                                                                                                | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`       |

#### Callers

Callers with the largest contribution to each function's total size. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

|      % |    Size | Samples | Caller           | Location                                    |
| -----: | ------: | ------: | ---------------- | ------------------------------------------- |
| 100.0% | 644 MiB |   1,282 | `main(String[])` | `org.jetbrains.kotlin.preloading.Preloader` |

##### `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`)

|      % |    Size | Samples | Caller                                                                       | Location                                               |
| -----: | ------: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% | 364 MiB |     727 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`)

|      % |     Size | Samples | Caller                                                                       | Location                                               |
| -----: | -------: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% |  364 MiB |     727 | `run(String[])`                                                              | `org.jetbrains.kotlin.preloading.Preloader`            |
|  11.3% | 41.2 MiB |      82 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`)

|      % |    Size | Samples | Caller           | Location                                     |
| -----: | ------: | ------: | ---------------- | -------------------------------------------- |
| 100.0% | 280 MiB |     555 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % |    Size | Samples | Caller                         | Location                                             |
| -----: | ------: | ------: | ------------------------------ | ---------------------------------------------------- |
| 100.0% | 280 MiB |     555 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000009001008400` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000009001008400`)

|      % |    Size | Samples | Caller                           | Location                                            |
| -----: | ------: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% | 280 MiB |     555 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000009001009800` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000009001009800`)

|      % |    Size | Samples | Caller                                           | Location                           |
| -----: | ------: | ------: | ------------------------------------------------ | ---------------------------------- |
| 100.0% | 280 MiB |     555 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % |    Size | Samples | Caller                         | Location                                          |
| -----: | ------: | ------: | ------------------------------ | ------------------------------------------------- |
| 100.0% | 280 MiB |     555 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % |    Size | Samples | Caller                     | Location                                          |
| -----: | ------: | ------: | -------------------------- | ------------------------------------------------- |
| 100.0% | 280 MiB |     555 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % |    Size | Samples | Caller                     | Location                   |
| -----: | ------: | ------: | -------------------------- | -------------------------- |
| 100.0% | 280 MiB |     555 | `invoke(Object, Object[])` | `java.lang.reflect.Method` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

|      % |    Size | Samples | Caller                                                                            | Location                                                                |
| -----: | ------: | ------: | --------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| 100.0% | 280 MiB |     555 | `run(String[])`                                                                   | `org.jetbrains.kotlin.preloading.Preloader`                             |
|   0.4% |   1 MiB |       2 | `parsePreprocessedCommandLineArguments(List, CommonToolArguments, Lazy, boolean)` | `org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt` |
|   0.2% | 512 KiB |       1 | `getEnumConstantsShared()`                                                        | `java.lang.Class`                                                       |

##### `doMain(CLICompiler, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % |    Size | Samples | Caller           | Location                                               |
| -----: | ------: | ------: | ---------------- | ------------------------------------------------------ |
| 100.0% | 276 MiB |     552 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion` |

##### `exec(PrintStream, Services, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % |    Size | Samples | Caller                                         | Location                                      |
| -----: | ------: | ------: | ---------------------------------------------- | --------------------------------------------- |
| 100.0% | 276 MiB |     551 | `exec(PrintStream, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `exec(PrintStream, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % |    Size | Samples | Caller                                                 | Location                                                |
| -----: | ------: | ------: | ------------------------------------------------------ | ------------------------------------------------------- |
| 100.0% | 276 MiB |     551 | `doMainNoExit(CLICompiler, String[], MessageRenderer)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % |    Size | Samples | Caller                                                                                             | Location                                                |
| -----: | ------: | ------: | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% | 276 MiB |     551 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % |    Size | Samples | Caller                          | Location                                                |
| -----: | ------: | ------: | ------------------------------- | ------------------------------------------------------- |
| 100.0% | 276 MiB |     551 | `doMain(CLICompiler, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `exec(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % |    Size | Samples | Caller                                                   | Location                                      |
| -----: | ------: | ------: | -------------------------------------------------------- | --------------------------------------------- |
| 100.0% | 270 MiB |     540 | `exec(PrintStream, Services, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % |    Size | Samples | Caller                                                                                              | Location                                                |
| -----: | ------: | ------: | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% | 264 MiB |     527 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % |    Size | Samples | Caller                                                                                                                                        | Location                                                |
| -----: | ------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% | 264 MiB |     527 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % |    Size | Samples | Caller                                                         | Location                                                |
| -----: | ------: | ------: | -------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% | 264 MiB |     527 | `execute(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `execute(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % |    Size | Samples | Caller                                                                | Location                                     |
| -----: | ------: | ------: | --------------------------------------------------------------------- | -------------------------------------------- |
| 100.0% | 264 MiB |     527 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % |    Size | Samples | Caller                                                                 | Location                                     |
| -----: | ------: | ------: | ---------------------------------------------------------------------- | -------------------------------------------- |
| 100.0% | 264 MiB |     527 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % |    Size | Samples | Caller                                                          | Location                                      |
| -----: | ------: | ------: | --------------------------------------------------------------- | --------------------------------------------- |
| 100.0% | 264 MiB |     527 | `execImpl(MessageCollector, Services, CommonCompilerArguments)` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % |    Size | Samples | Caller                                                      | Location                                      |
| -----: | ------: | ------: | ----------------------------------------------------------- | --------------------------------------------- |
| 100.0% | 264 MiB |     527 | `exec(MessageCollector, Services, CommonCompilerArguments)` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

|      % |    Size | Samples | Caller                              | Location                                          |
| -----: | ------: | ------: | ----------------------------------- | ------------------------------------------------- |
| 100.0% | 261 MiB |     522 | `phaseBody(LoggingContext, Object)` | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase` |

##### `copyOf(byte[], int)` (`java.util.Arrays`)

|     % |    Size | Samples | Caller                        | Location                          |
| ----: | ------: | ------: | ----------------------------- | --------------------------------- |
| 95.8% | 172 MiB |     343 | `toByteArray()`               | `java.io.ByteArrayOutputStream`   |
|  2.5% | 4.5 MiB |       9 | `ensureCapacityInternal(int)` | `java.lang.AbstractStringBuilder` |
|  1.7% |   3 MiB |       6 | `getBytes()`                  | `jdk.internal.loader.Resource`    |

##### `<init>(int)` (`java.io.ByteArrayOutputStream`)

|      % |    Size | Samples | Caller                                                  | Location                                               |
| -----: | ------: | ------: | ------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% | 176 MiB |     352 | `loadAllClassesFromJars(Collection, int, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `toByteArray()` (`java.io.ByteArrayOutputStream`)

|      % |    Size | Samples | Caller                                                  | Location                                               |
| -----: | ------: | ------: | ------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% | 172 MiB |     343 | `loadAllClassesFromJars(Collection, int, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`)

|      % |     Size | Samples | Caller  | Location                                         |
| -----: | -------: | ------: | ------- | ------------------------------------------------ |
| 100.0% | 60.5 MiB |     121 | `run()` | `java.util.concurrent.ThreadPoolExecutor$Worker` |

##### `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`)

|      % |     Size | Samples | Caller                      | Location           |
| -----: | -------: | ------: | --------------------------- | ------------------ |
| 100.0% | 60.5 MiB |     121 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `runWith(Object, Runnable)` (`java.lang.Thread`)

|      % |     Size | Samples | Caller  | Location           |
| -----: | -------: | ------: | ------- | ------------------ |
| 100.0% | 60.5 MiB |     121 | `run()` | `java.lang.Thread` |

##### `resumeWith(Object)` (`kotlin.coroutines.jvm.internal.BaseContinuationImpl`)

|     % |     Size | Samples | Caller                                                             | Location                                                              |
| ----: | -------: | ------: | ------------------------------------------------------------------ | --------------------------------------------------------------------- |
| 95.0% | 57.5 MiB |     115 | `resumeTask(TowerResolveManager$SuspendedResolverTask)`            | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager`    |
| 33.9% | 20.5 MiB |      41 | `processCandidate(Candidate, ResolutionContext, boolean, boolean)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner` |

##### `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`)

|      % |     Size | Samples | Caller                                 | Location                                  |
| -----: | -------: | ------: | -------------------------------------- | ----------------------------------------- |
| 100.0% | 59.5 MiB |     119 | `runWorker(ThreadPoolExecutor$Worker)` | `java.util.concurrent.ThreadPoolExecutor` |

##### `clone()` (`java.lang.Object`)

|     % |     Size | Samples | Caller                          | Location                      |
| ----: | -------: | ------: | ------------------------------- | ----------------------------- |
| 97.2% | 34.5 MiB |      69 | `copyOf(byte[], int)`           | `java.util.Arrays`            |
|  1.4% |  512 KiB |       1 | `copyOfRange(byte[], int, int)` | `java.util.Arrays`            |
|  1.4% |  512 KiB |       1 | `clone()`                       | `java.lang.invoke.MemberName` |

##### `getValue()` (`kotlin.SafePublicationLazyImpl`)

|     % |    Size | Samples | Caller                     | Location                                                                        |
| ----: | ------: | ------: | -------------------------- | ------------------------------------------------------------------------------- |
| 57.7% |  15 MiB |      30 | `getAnnotationInfo()`      | `org.jetbrains.kotlin.fir.java.deserialization.JvmBinaryAnnotationDeserializer` |
| 25.0% | 6.5 MiB |      13 | `getJavaField()`           | `kotlin.reflect.jvm.internal.DescriptorKProperty`                               |
|  7.7% |   2 MiB |       4 | `getImplicitScope()`       | `org.jetbrains.kotlin.fir.resolve.calls.ImplicitReceiverValue`                  |
|  7.7% |   2 MiB |       4 | `getCallableNamesCached()` | `org.jetbrains.kotlin.fir.scopes.impl.AbstractFirUseSiteMemberScope`            |
|  5.8% | 1.5 MiB |       3 | `getDeclarations()`        | `org.jetbrains.kotlin.fir.java.FirLazyJavaDeclarationList`                      |

##### `linkCallSiteImpl(Class, MethodHandle, String, MethodType, Object, Object[])` (`java.lang.invoke.MethodHandleNatives`)

|      % |   Size | Samples | Caller                                                           | Location                               |
| -----: | -----: | ------: | ---------------------------------------------------------------- | -------------------------------------- |
| 100.0% | 23 MiB |      46 | `linkCallSite(Object, Object, Object, Object, Object, Object[])` | `java.lang.invoke.MethodHandleNatives` |

##### `linkCallSite(Object, Object, Object, Object, Object, Object[])` (`java.lang.invoke.MethodHandleNatives`)

|     % |    Size | Samples | Caller                                                                            | Location                                                                     |
| ----: | ------: | ------: | --------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| 10.9% | 2.5 MiB |       5 | `<clinit>()`                                                                      | `org.jetbrains.kotlin.load.java.typeEnhancement.PredefinedEnhancementInfoKt` |
|  4.3% |   1 MiB |       2 | `rangesDelimitedBy$StringsKt__StringsKt(CharSequence, char[], int, boolean, int)` | `kotlin.text.StringsKt__StringsKt`                                           |
|  4.3% |   1 MiB |       2 | `<init>()`                                                                        | `org.jetbrains.kotlin.fir.analysis.checkers.expression.ExpressionCheckers`   |
|  4.3% |   1 MiB |       2 | `createFunctionClass(int, boolean)`                                               | `org.jetbrains.kotlin.backend.jvm.JvmSymbols`                                |
|  4.3% |   1 MiB |       2 | `<clinit>()`                                                                      | `org.jetbrains.kotlin.fir.analysis.diagnostics.FirDiagnosticRenderers`       |

##### `invokeExact_MT(Object, Object, Object, Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % |     Size | Samples | Caller                                                       | Location                                  |
| -----: | -------: | ------: | ------------------------------------------------------------ | ----------------------------------------- |
| 100.0% | 22.5 MiB |      45 | `invoke(Class, MethodHandle, String, Object, Object, Class)` | `java.lang.invoke.BootstrapMethodInvoker` |

#### Callees

Callees with the largest contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

|     % |    Size | Samples | Callee                                                                       | Location                                               |
| ----: | ------: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------------ |
| 56.5% | 364 MiB |     727 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |
| 43.5% | 280 MiB |     555 | `invoke(Object, Object[])`                                                   | `java.lang.reflect.Method`                             |

##### `main(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

|      % |    Size | Samples | Callee          | Location                                    |
| -----: | ------: | ------: | --------------- | ------------------------------------------- |
| 100.0% | 644 MiB |   1,282 | `run(String[])` | `org.jetbrains.kotlin.preloading.Preloader` |

##### `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`)

|     % |     Size | Samples | Callee                | Location                        |
| ----: | -------: | ------: | --------------------- | ------------------------------- |
| 48.4% |  176 MiB |     352 | `<init>(int)`         | `java.io.ByteArrayOutputStream` |
| 47.2% |  172 MiB |     343 | `toByteArray()`       | `java.io.ByteArrayOutputStream` |
|  3.2% | 11.5 MiB |      23 | `getNextEntry()`      | `java.util.zip.ZipInputStream`  |
|  0.4% |  1.5 MiB |       3 | `put(Object, Object)` | `java.util.HashMap`             |

##### `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`)

|      % |     Size | Samples | Callee                                                                       | Location                                               |
| -----: | -------: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% |  364 MiB |     727 | `loadAllClassesFromJars(Collection, int, ClassHandler)`                      | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |
|  11.3% | 41.2 MiB |      82 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`)

|     % |     Size | Samples | Callee                          | Location                                                |
| ----: | -------: | ------: | ------------------------------- | ------------------------------------------------------- |
| 98.5% |  276 MiB |     552 | `doMain(CLICompiler, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
|  1.5% | 4.21 MiB |       3 | `<init>()`                      | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % |    Size | Samples | Callee           | Location                                               |
| -----: | ------: | ------: | ---------------- | ------------------------------------------------------ |
| 100.0% | 280 MiB |     555 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000009001008400`)

|      % |    Size | Samples | Callee           | Location                                     |
| -----: | ------: | ------: | ---------------- | -------------------------------------------- |
| 100.0% | 280 MiB |     555 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000009001009800`)

|      % |    Size | Samples | Callee                         | Location                                             |
| -----: | ------: | ------: | ------------------------------ | ---------------------------------------------------- |
| 100.0% | 280 MiB |     555 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000009001008400` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % |    Size | Samples | Callee                           | Location                                            |
| -----: | ------: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% | 280 MiB |     555 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000009001009800` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % |    Size | Samples | Callee                                           | Location                           |
| -----: | ------: | ------: | ------------------------------------------------ | ---------------------------------- |
| 100.0% | 280 MiB |     555 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % |    Size | Samples | Callee                         | Location                                          |
| -----: | ------: | ------: | ------------------------------ | ------------------------------------------------- |
| 100.0% | 280 MiB |     555 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

|      % |    Size | Samples | Callee                     | Location                                          |
| -----: | ------: | ------: | -------------------------- | ------------------------------------------------- |
| 100.0% | 280 MiB |     555 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |
|   0.5% | 1.5 MiB |       3 | `acquireMethodAccessor()`  | `java.lang.reflect.Method`                        |

##### `doMain(CLICompiler, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|     % |    Size | Samples | Callee                                                                                             | Location                                                   |
| ----: | ------: | ------: | -------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| 99.8% | 276 MiB |     551 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`    |
|  0.2% | 512 KiB |       1 | `<clinit>()`                                                                                       | `org.jetbrains.kotlin.cli.common.CompilerSystemProperties` |

##### `exec(PrintStream, Services, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|     % |    Size | Samples | Callee                                                                               | Location                                                                |
| ----: | ------: | ------: | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------- |
| 98.0% | 270 MiB |     540 | `exec(MessageCollector, Services, CommonCompilerArguments)`                          | `org.jetbrains.kotlin.cli.common.CLICompiler`                           |
|  1.8% |   5 MiB |      10 | `parseCommandLineArguments$default(List, CommonToolArguments, boolean, int, Object)` | `org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt` |
|  0.2% | 512 KiB |       1 | `createArguments()`                                                                  | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                            |

##### `exec(PrintStream, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % |    Size | Samples | Callee                                                   | Location                                      |
| -----: | ------: | ------: | -------------------------------------------------------- | --------------------------------------------- |
| 100.0% | 276 MiB |     551 | `exec(PrintStream, Services, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % |    Size | Samples | Callee                                         | Location                                      |
| -----: | ------: | ------: | ---------------------------------------------- | --------------------------------------------- |
| 100.0% | 276 MiB |     551 | `exec(PrintStream, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % |    Size | Samples | Callee                                                 | Location                                                |
| -----: | ------: | ------: | ------------------------------------------------------ | ------------------------------------------------------- |
| 100.0% | 276 MiB |     551 | `doMainNoExit(CLICompiler, String[], MessageRenderer)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `exec(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|     % |    Size | Samples | Callee                                                          | Location                                      |
| ----: | ------: | ------: | --------------------------------------------------------------- | --------------------------------------------- |
| 97.6% | 264 MiB |     527 | `execImpl(MessageCollector, Services, CommonCompilerArguments)` | `org.jetbrains.kotlin.cli.common.CLICompiler` |
|  2.4% | 6.5 MiB |      13 | `<clinit>()`                                                    | `org.jetbrains.kotlin.cli.common.ArgumentsKt` |

##### `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|     % |    Size | Samples | Callee                                                                          | Location                                                                    |
| ----: | ------: | ------: | ------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| 99.1% | 261 MiB |     522 | `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)`            | `org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`                        |
|  0.9% | 2.5 MiB |       5 | `reportToMessageCollector(BaseDiagnosticsCollector, MessageCollector, boolean)` | `org.jetbrains.kotlin.cli.common.fir.FirDiagnosticsCompilerResultsReporter` |

##### `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % |    Size | Samples | Callee                                         | Location                                                |
| -----: | ------: | ------: | ---------------------------------------------- | ------------------------------------------------------- |
| 100.0% | 264 MiB |     527 | `runPhasedPipeline(ArgumentsPipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % |    Size | Samples | Callee                                                                                              | Location                                                |
| -----: | ------: | ------: | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% | 264 MiB |     527 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `execute(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % |    Size | Samples | Callee                                                                                                                                        | Location                                                |
| -----: | ------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% | 264 MiB |     527 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % |    Size | Samples | Callee                                                         | Location                                                |
| -----: | ------: | ------: | -------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% | 264 MiB |     527 | `execute(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % |    Size | Samples | Callee                                                                | Location                                     |
| -----: | ------: | ------: | --------------------------------------------------------------------- | -------------------------------------------- |
| 100.0% | 264 MiB |     527 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % |    Size | Samples | Callee                                                                 | Location                                     |
| -----: | ------: | ------: | ---------------------------------------------------------------------- | -------------------------------------------- |
| 100.0% | 264 MiB |     527 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

|     % |     Size | Samples | Callee                           | Location                                                              |
| ----: | -------: | ------: | -------------------------------- | --------------------------------------------------------------------- |
| 82.8% |  216 MiB |     432 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`      |
|  9.0% | 23.5 MiB |      47 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`       |
|  7.8% | 20.5 MiB |      41 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFir2IrPipelinePhase`        |
|  0.4% |    1 MiB |       2 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmConfigurationPipelinePhase` |

##### `copyOf(byte[], int)` (`java.util.Arrays`)

|     % |     Size | Samples | Callee    | Location           |
| ----: | -------: | ------: | --------- | ------------------ |
| 19.3% | 34.5 MiB |      69 | `clone()` | `java.lang.Object` |

##### `toByteArray()` (`java.io.ByteArrayOutputStream`)

|      % |    Size | Samples | Callee                | Location           |
| -----: | ------: | ------: | --------------------- | ------------------ |
| 100.0% | 172 MiB |     343 | `copyOf(byte[], int)` | `java.util.Arrays` |

##### `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`)

|     % |     Size | Samples | Callee      | Location                                          |
| ----: | -------: | ------: | ----------- | ------------------------------------------------- |
| 98.3% | 59.5 MiB |     119 | `run()`     | `java.util.concurrent.CompletableFuture$AsyncRun` |
|  1.7% |    1 MiB |       2 | `getTask()` | `java.util.concurrent.ThreadPoolExecutor`         |

##### `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`)

|      % |     Size | Samples | Callee                                 | Location                                  |
| -----: | -------: | ------: | -------------------------------------- | ----------------------------------------- |
| 100.0% | 60.5 MiB |     121 | `runWorker(ThreadPoolExecutor$Worker)` | `java.util.concurrent.ThreadPoolExecutor` |

##### `runWith(Object, Runnable)` (`java.lang.Thread`)

|      % |     Size | Samples | Callee  | Location                                         |
| -----: | -------: | ------: | ------- | ------------------------------------------------ |
| 100.0% | 60.5 MiB |     121 | `run()` | `java.util.concurrent.ThreadPoolExecutor$Worker` |

##### `run()` (`java.lang.Thread`)

|      % |     Size | Samples | Callee                      | Location           |
| -----: | -------: | ------: | --------------------------- | ------------------ |
| 100.0% | 60.5 MiB |     121 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `resumeWith(Object)` (`kotlin.coroutines.jvm.internal.BaseContinuationImpl`)

|     % |     Size | Samples | Callee                  | Location                                                                                                      |
| ----: | -------: | ------: | ----------------------- | ------------------------------------------------------------------------------------------------------------- |
| 73.6% | 44.5 MiB |      89 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask$processLevel$6`                         |
| 33.9% | 20.5 MiB |      41 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner$processCandidate$1`                      |
|  9.1% |  5.5 MiB |      11 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver$enqueueResolutionTasks$2`                      |
|  4.1% |  2.5 MiB |       5 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirInvokeResolveTowerExtension$enqueueResolverTasksForInvoke$3` |
|  4.1% |  2.5 MiB |       5 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver$enqueueResolutionTasks$4`                      |

##### `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`)

|      % |     Size | Samples | Callee  | Location                                                                          |
| -----: | -------: | ------: | ------- | --------------------------------------------------------------------------------- |
| 100.0% | 59.5 MiB |     119 | `run()` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000900188f020` |

##### `getValue()` (`kotlin.SafePublicationLazyImpl`)

|     % |    Size | Samples | Callee     | Location                                                                                                   |
| ----: | ------: | ------: | ---------- | ---------------------------------------------------------------------------------------------------------- |
| 57.7% |  15 MiB |      30 | `invoke()` | `org.jetbrains.kotlin.fir.java.deserialization.JvmBinaryAnnotationDeserializer$$Lambda.0x00000090015dc9b0` |
| 25.0% | 6.5 MiB |      13 | `invoke()` | `kotlin.reflect.jvm.internal.DescriptorKProperty$$Lambda$0`                                                |
|  7.7% |   2 MiB |       4 | `invoke()` | `org.jetbrains.kotlin.fir.resolve.calls.ImplicitReceiverValue$$Lambda.0x000000900165b428`                  |
|  7.7% |   2 MiB |       4 | `invoke()` | `org.jetbrains.kotlin.fir.scopes.impl.AbstractFirUseSiteMemberScope$$Lambda.0x0000009001634bc0`            |
|  5.8% | 1.5 MiB |       3 | `invoke()` | `org.jetbrains.kotlin.fir.java.FirLazyJavaDeclarationList$$Lambda.0x0000009001614508`                      |

##### `linkCallSiteImpl(Class, MethodHandle, String, MethodType, Object, Object[])` (`java.lang.invoke.MethodHandleNatives`)

|     % |     Size | Samples | Callee                                                      | Location                    |
| ----: | -------: | ------: | ----------------------------------------------------------- | --------------------------- |
| 97.8% | 22.5 MiB |      45 | `makeSite(MethodHandle, String, MethodType, Object, Class)` | `java.lang.invoke.CallSite` |
|  2.2% |  512 KiB |       1 | `linkToTargetMethod(MethodType)`                            | `java.lang.invoke.Invokers` |

##### `linkCallSite(Object, Object, Object, Object, Object, Object[])` (`java.lang.invoke.MethodHandleNatives`)

|      % |   Size | Samples | Callee                                                                        | Location                               |
| -----: | -----: | ------: | ----------------------------------------------------------------------------- | -------------------------------------- |
| 100.0% | 23 MiB |      46 | `linkCallSiteImpl(Class, MethodHandle, String, MethodType, Object, Object[])` | `java.lang.invoke.MethodHandleNatives` |

##### `invokeExact_MT(Object, Object, Object, Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|     % |    Size | Samples | Callee                                                                 | Location                                             |
| ----: | ------: | ------: | ---------------------------------------------------------------------- | ---------------------------------------------------- |
| 88.9% |  20 MiB |      40 | `invokeStatic(Object, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000009001234000` |
|  8.9% |   2 MiB |       4 | `invokeStatic(Object, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |
|  2.2% | 512 KiB |       1 | `checkCustomized(MethodHandle)`                                        | `java.lang.invoke.Invokers`                          |

## Hottest call stacks

Call stacks with the most bytes allocated in their leaf frame.

|     % |     Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ----: | -------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 22.5% |  158 MiB |     317 | `<init>(int)` (`java.io.ByteArrayOutputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 19.2% |  135 MiB |     271 | `copyOf(byte[], int)` (`java.util.Arrays`) ← `toByteArray()` (`java.io.ByteArrayOutputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  2.6% | 18.5 MiB |      37 | `clone()` (`java.lang.Object`) ← `copyOf(byte[], int)` (`java.util.Arrays`) ← `toByteArray()` (`java.io.ByteArrayOutputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  2.5% | 17.5 MiB |      35 | `<init>(int)` (`java.io.ByteArrayOutputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  2.3% |   16 MiB |      32 | `clone()` (`java.lang.Object`) ← `copyOf(byte[], int)` (`java.util.Arrays`) ← `toByteArray()` (`java.io.ByteArrayOutputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  0.8% |  5.5 MiB |      11 | `copyOfRangeByte(byte[], int, int)` (`java.util.Arrays`) ← `copyOfRange(byte[], int, int)` ← `newStringUTF8NoRepl(byte[], int, int, boolean)` (`java.lang.String`) ← `newStringUTF8NoRepl(byte[], int, int)` (`java.lang.System$2`) ← `toString(byte[], int, int)` (`java.util.zip.ZipCoder$UTF8ZipCoder`) ← `toStringUTF8(byte[], int)` (`java.util.zip.ZipCoder`) ← `readLOC()` (`java.util.zip.ZipInputStream`) ← `getNextEntry()` ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  0.6% | 4.21 MiB |       3 | `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`) ← `<init>(ZipFile$Source$Key, boolean, ZipCoder)` ← `get(File, boolean, ZipCoder)` ← `<init>(ZipFile, ZipCoder, File, int)` (`java.util.zip.ZipFile$CleanableResource`) ← `<init>(File, int, Charset)` (`java.util.zip.ZipFile`) ← `<init>(File, int)` ← `<init>(File, boolean, int, Runtime$Version)` (`java.util.jar.JarFile`) ← `getJarFile(URL)` (`jdk.internal.loader.URLClassPath$JarLoader`) ← `run()` (`jdk.internal.loader.URLClassPath$JarLoader$1`) ← `run()` ← `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` (`java.security.AccessController`) ← `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` ← `ensureOpen()` (`jdk.internal.loader.URLClassPath$JarLoader`) ← `<init>(URL, URLStreamHandler, HashMap, AccessControlContext)` ← `run()` (`jdk.internal.loader.URLClassPath$3`) ← `run()` ← `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` (`java.security.AccessController`) ← `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` ← `getLoader(URL)` (`jdk.internal.loader.URLClassPath`) ← `getLoader(int)` ← `findResource(String, boolean)` ← `run()` (`java.net.URLClassLoader$2`) ← `run()` ← `executePrivileged(PrivilegedAction, AccessControlContext, Class)` (`java.security.AccessController`) ← `doPrivileged(PrivilegedAction, AccessControlContext)` ← `findResource(String)` (`java.net.URLClassLoader`) ← `getResource(String)` (`java.lang.ClassLoader`) ← `getResource(String)` (`org.jetbrains.kotlin.preloading.MemoryBasedClassLoader`) ← `<init>()` (`org.jetbrains.kotlin.cli.common.CLICompiler`) ← `<init>()` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`) ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000009001008400`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000009001009800`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  0.4% |    3 MiB |       6 | `createZipEntry(String)` (`java.util.zip.ZipInputStream`) ← `readLOC()` ← `getNextEntry()` ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  0.4% |  2.5 MiB |       5 | `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  0.3% |    2 MiB |       4 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `readMessage(Parser, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.CodedInputStream`) ← `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type$Argument`) ← `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type$Argument$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `readMessage(Parser, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.CodedInputStream`) ← `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type`) ← `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `readMessage(Parser, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.CodedInputStream`) ← `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Function`) ← `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Function$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `readMessage(Parser, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.CodedInputStream`) ← `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Package`) ← `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Package$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `parsePartialFrom(InputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.AbstractParser`) ← `parseFrom(InputStream, ExtensionRegistryLite)` ← `parseFrom(InputStream, ExtensionRegistryLite)` ← `parseFrom(InputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Package`) ← `readPackageDataFrom(byte[], String[])` (`org.jetbrains.kotlin.metadata.jvm.deserialization.JvmProtoBufUtil`) ← `readPackageDataFrom(String[], String[])` ← `computePackagePartInfo(FqName, String)` (`org.jetbrains.kotlin.fir.java.deserialization.JvmClassFileBasedSymbolProvider`) ← `computePackagePartsInfos(FqName)` ← `tryComputePackagePartInfos(FqName)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider`) ← `access$tryComputePackagePartInfos(AbstractFirDeserializedSymbolProvider, FqName)` ← `invoke(Object, Void)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider$special$$inlined$createCache$2`) ← `invoke(Object, Object)` ← `getValue(Object, Object)` (`org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache`) ← `getPackageParts(FqName)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider`) ← `access$getPackageParts(AbstractFirDeserializedSymbolProvider, FqName)` ← `computeTopLevelCallableNames(FqName)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider$symbolNamesProvider$1`) ← `invoke(Object, Void)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider$topLevelCallableNamesByPackage_delegate$lambda$0$$inlined$createCache$1`) ← `invoke(Object, Object)` ← `getValue(Object, Object)` (`org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache`) ← `getTopLevelCallableNamesInPackage(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider`) ← `computeTopLevelCallableNames(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCompositeCachedSymbolNamesProvider`) ← `computeTopLevelCallableNames(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider$symbolNamesProvider$1`) ← `invoke(Object, Void)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider$topLevelCallableNamesByPackage_delegate$lambda$0$$inlined$createCache$1`) ← `invoke(Object, Object)` ← `getValue(Object, Object)` (`org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache`) ← `getTopLevelCallableNamesInPackage(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider`) ← `mayHaveTopLevelCallable(FqName, Name)` (`org.jetbrains.kotlin.fir.resolve.providers.FirSymbolNamesProvider`) ← `getTopLevelPropertySymbolsTo(List, FqName, Name)` (`org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider`) ← `getTopLevelPropertySymbols(FqName, Name)` (`org.jetbrains.kotlin.fir.resolve.providers.FirSymbolProvider`) ← `processPropertiesByName(Name, Function1)` (`org.jetbrains.kotlin.fir.scopes.impl.FirSingleLevelDefaultStarImportingScope`) ← `invoke(FirScope, Name, Function1)` (`org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope$processPropertiesByName$1`) ← `invoke(Object, Object, Object)` ← `processSymbolsByName(Name, Function3, Function1)` (`org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope`) ← `processPropertiesByName(Name, Function1)` ← `getProperties(FirScope, Name)` (`org.jetbrains.kotlin.fir.scopes.FirScopeKt`) ← `resolveFromImportScope(FirQualifiedAccessExpression)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer$FirEnumAnnotationArgumentsTransformer`) ← `resolveQualifiedAccessAndSelectCandidate(FirQualifiedAccessExpression, boolean, boolean, FirElement, ResolutionMode)` ← `resolveQualifiedAccessAndSelectCandidate(FirQualifiedAccessExpression, boolean, boolean, FirElement, ResolutionMode)` ← `transformQualifiedAccessExpression(FirQualifiedAccessExpression, ResolutionMode, boolean, boolean, boolean)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`) ← `transformQualifiedAccessExpression(FirQualifiedAccessExpression, ResolutionMode)` ← `transformPropertyAccessExpression(FirPropertyAccessExpression, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`) ← `transformPropertyAccessExpression(FirPropertyAccessExpression, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.FirPropertyAccessExpression`) ← `transformInplace(List, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `transformArguments(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.impl.FirArgumentListImpl`) ← `transformChildren(FirTransformer, Object)` ← `transformChildren(FirTransformer, Object)` ← `transformElement(FirElement, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`) ← `transformElement(FirElement, Object)` ← `transformArgumentList(FirArgumentList, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformer`) ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.FirArgumentList`) ← `transformChildren(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.impl.FirAnnotationCallImpl`) ← `transformChildren(FirTransformer, Object)` ← `transformAnnotation(FirAnnotation, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer$FirEnumAnnotationArgumentsTransformer`) ← `transformAnnotation(FirAnnotation, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`) ← `transformAnnotationCall(FirAnnotationCall, FirUserTypeRef)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer`) ← `transformAnnotationCall(FirAnnotationCall, Void)` ← `transformAnnotationCall(FirAnnotationCall, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.FirAnnotationCall`) ← `transformInplace(List, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `transformInplace-aLnlfrU(List, FirTransformer, Object)` ← `transformAnnotations(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.impl.FirRegularClassImpl`) ← `transformAnnotations(FirTransformer, Object)` ← `transformAnnotationContainer(FirAnnotationContainer, Void)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer`) ← `transformDeclaration(FirDeclaration, Void)` ← `transformRegularClass(FirRegularClass, Void)` ← `transformRegularClass(FirRegularClass, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.FirRegularClass`) ← `transformInplace(List, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `transformDeclarations(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.impl.FirFileImpl`) ← `transformDeclarations(FirTransformer, Object)` ← `invoke()` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer$transformFile$$inlined$resolveFile$1`) ← `invoke()` ← `withFileAndFileScopes(FirFile, Function0)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer`) ← `transformFile(FirFile, Void)` ← `transformFile(FirFile, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.FirFile`) ← `resolveAnnotations(FirFile)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirCompilerRequiredAnnotationsResolveTransformer`) ← `transformFile(FirFile, Void)` ← `transformFile(FirFile, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.FirFile`) ← `transformSingle(FirElement, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `process(Collection)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.FirCompilerRequiredAnnotationsResolveProcessor`) ← `process(List)` (`org.jetbrains.kotlin.fir.resolve.transformers.FirTotalResolveProcessor`) ← `runResolution(FirSession, List)` (`org.jetbrains.kotlin.fir.pipeline.AnalyseKt`) ← `resolveAndCheckFir(FirSession, List, BaseDiagnosticsCollector)` (`org.jetbrains.kotlin.fir.pipeline.FirUtilsKt`) ← `executePhase(ConfigurationPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`) ← `executePhase(PipelineArtifact)` ← `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`) ← `phaseBody(LoggingContext, Object)` ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`) ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.backend.common.phaser.CompositePhase`) ← `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`) ← `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`) ← `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` ← `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` ← `execute(CommonCompilerArguments, Services, MessageCollector)` ← `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` ← `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`) ← `exec(MessageCollector, Services, CommonCompilerArguments)` ← `exec(PrintStream, Services, MessageRenderer, String[])` ← `exec(PrintStream, MessageRenderer, String[])` ← `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`) ← `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` ← `doMain(CLICompiler, String[])` ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`) ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000009001008400`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000009001009800`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])` |
|  0.3% |    2 MiB |       4 | `<init>(int)` (`org.jetbrains.kotlin.protobuf.ByteString$Output`) ← `newOutput()` (`org.jetbrains.kotlin.protobuf.ByteString`) ← `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Annotation`) ← `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Annotation$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `readMessage(Parser, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.CodedInputStream`) ← `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Function`) ← `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Function$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `readMessage(Parser, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.CodedInputStream`) ← `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Package`) ← `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Package$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `parsePartialFrom(InputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.AbstractParser`) ← `parseFrom(InputStream, ExtensionRegistryLite)` ← `parseFrom(InputStream, ExtensionRegistryLite)` ← `parseFrom(InputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Package`) ← `readPackageDataFrom(byte[], String[])` (`org.jetbrains.kotlin.metadata.jvm.deserialization.JvmProtoBufUtil`) ← `readPackageDataFrom(String[], String[])` ← `computePackagePartInfo(FqName, String)` (`org.jetbrains.kotlin.fir.java.deserialization.JvmClassFileBasedSymbolProvider`) ← `computePackagePartsInfos(FqName)` ← `tryComputePackagePartInfos(FqName)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider`) ← `access$tryComputePackagePartInfos(AbstractFirDeserializedSymbolProvider, FqName)` ← `invoke(Object, Void)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider$special$$inlined$createCache$2`) ← `invoke(Object, Object)` ← `getValue(Object, Object)` (`org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache`) ← `getPackageParts(FqName)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider`) ← `access$getPackageParts(AbstractFirDeserializedSymbolProvider, FqName)` ← `computeTopLevelCallableNames(FqName)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider$symbolNamesProvider$1`) ← `invoke(Object, Void)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider$topLevelCallableNamesByPackage_delegate$lambda$0$$inlined$createCache$1`) ← `invoke(Object, Object)` ← `getValue(Object, Object)` (`org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache`) ← `getTopLevelCallableNamesInPackage(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider`) ← `computeTopLevelCallableNames(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCompositeCachedSymbolNamesProvider`) ← `computeTopLevelCallableNames(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider$symbolNamesProvider$1`) ← `invoke(Object, Void)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider$topLevelCallableNamesByPackage_delegate$lambda$0$$inlined$createCache$1`) ← `invoke(Object, Object)` ← `getValue(Object, Object)` (`org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache`) ← `getTopLevelCallableNamesInPackage(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider`) ← `mayHaveTopLevelCallable(FqName, Name)` (`org.jetbrains.kotlin.fir.resolve.providers.FirSymbolNamesProvider`) ← `getTopLevelPropertySymbolsTo(List, FqName, Name)` (`org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider`) ← `getTopLevelPropertySymbols(FqName, Name)` (`org.jetbrains.kotlin.fir.resolve.providers.FirSymbolProvider`) ← `processPropertiesByName(Name, Function1)` (`org.jetbrains.kotlin.fir.scopes.impl.FirSingleLevelDefaultStarImportingScope`) ← `invoke(FirScope, Name, Function1)` (`org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope$processPropertiesByName$1`) ← `invoke(Object, Object, Object)` ← `processSymbolsByName(Name, Function3, Function1)` (`org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope`) ← `processPropertiesByName(Name, Function1)` ← `getProperties(FirScope, Name)` (`org.jetbrains.kotlin.fir.scopes.FirScopeKt`) ← `resolveFromImportScope(FirQualifiedAccessExpression)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer$FirEnumAnnotationArgumentsTransformer`) ← `resolveQualifiedAccessAndSelectCandidate(FirQualifiedAccessExpression, boolean, boolean, FirElement, ResolutionMode)` ← `resolveQualifiedAccessAndSelectCandidate(FirQualifiedAccessExpression, boolean, boolean, FirElement, ResolutionMode)` ← `transformQualifiedAccessExpression(FirQualifiedAccessExpression, ResolutionMode, boolean, boolean, boolean)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`) ← `transformQualifiedAccessExpression(FirQualifiedAccessExpression, ResolutionMode)` ← `transformPropertyAccessExpression(FirPropertyAccessExpression, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`) ← `transformPropertyAccessExpression(FirPropertyAccessExpression, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.FirPropertyAccessExpression`) ← `transformInplace(List, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `transformArguments(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.impl.FirArgumentListImpl`) ← `transformChildren(FirTransformer, Object)` ← `transformChildren(FirTransformer, Object)` ← `transformElement(FirElement, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`) ← `transformElement(FirElement, Object)` ← `transformArgumentList(FirArgumentList, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformer`) ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.FirArgumentList`) ← `transformChildren(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.impl.FirAnnotationCallImpl`) ← `transformChildren(FirTransformer, Object)` ← `transformAnnotation(FirAnnotation, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer$FirEnumAnnotationArgumentsTransformer`) ← `transformAnnotation(FirAnnotation, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`) ← `transformAnnotationCall(FirAnnotationCall, FirUserTypeRef)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer`) ← `transformAnnotationCall(FirAnnotationCall, Void)` ← `transformAnnotationCall(FirAnnotationCall, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.FirAnnotationCall`) ← `transformInplace(List, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `transformInplace-aLnlfrU(List, FirTransformer, Object)` ← `transformAnnotations(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.impl.FirRegularClassImpl`) ← `transformAnnotations(FirTransformer, Object)` ← `transformAnnotationContainer(FirAnnotationContainer, Void)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer`) ← `transformDeclaration(FirDeclaration, Void)` ← `transformRegularClass(FirRegularClass, Void)` ← `transformRegularClass(FirRegularClass, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.FirRegularClass`) ← `transformInplace(List, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `transformDeclarations(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.impl.FirFileImpl`) ← `transformDeclarations(FirTransformer, Object)` ← `invoke()` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer$transformFile$$inlined$resolveFile$1`) ← `invoke()` ← `withFileAndFileScopes(FirFile, Function0)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer`) ← `transformFile(FirFile, Void)` ← `transformFile(FirFile, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.FirFile`) ← `resolveAnnotations(FirFile)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirCompilerRequiredAnnotationsResolveTransformer`) ← `transformFile(FirFile, Void)` ← `transformFile(FirFile, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.FirFile`) ← `transformSingle(FirElement, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `process(Collection)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.FirCompilerRequiredAnnotationsResolveProcessor`) ← `process(List)` (`org.jetbrains.kotlin.fir.resolve.transformers.FirTotalResolveProcessor`) ← `runResolution(FirSession, List)` (`org.jetbrains.kotlin.fir.pipeline.AnalyseKt`) ← `resolveAndCheckFir(FirSession, List, BaseDiagnosticsCollector)` (`org.jetbrains.kotlin.fir.pipeline.FirUtilsKt`) ← `executePhase(ConfigurationPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`) ← `executePhase(PipelineArtifact)` ← `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`) ← `phaseBody(LoggingContext, Object)` ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`) ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.backend.common.phaser.CompositePhase`) ← `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`) ← `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`) ← `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` ← `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` ← `execute(CommonCompilerArguments, Services, MessageCollector)` ← `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` ← `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`) ← `exec(MessageCollector, Services, CommonCompilerArguments)` ← `exec(PrintStream, Services, MessageRenderer, String[])` ← `exec(PrintStream, MessageRenderer, String[])` ← `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`) ← `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` ← `doMain(CLICompiler, String[])` ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`) ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000009001008400`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000009001009800`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  0.3% |    2 MiB |       4 | `simplifyTrivialInstructions(MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer`) ← `transform(String, MethodNode)` ← `transform(String, MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.transformer.CompositeMethodTransformer`) ← `performTransformations(MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`) ← `visitEnd()` (`org.jetbrains.kotlin.codegen.TransformationMethodVisitor`) ← `visitEnd()` (`org.jetbrains.org.objectweb.asm.MethodVisitor`) ← `accept(MethodVisitor)` (`org.jetbrains.org.objectweb.asm.tree.MethodNode`) ← `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000900188f020`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`) ← `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`) ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  0.2% | 1.69 MiB |       3 | `copyOf(byte[], int)` (`java.util.Arrays`) ← `toByteArray()` (`java.io.ByteArrayOutputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  0.2% |  1.5 MiB |       3 | `getBufIfOpen(boolean)` (`java.io.BufferedInputStream`) ← `getBufIfOpen()` ← `fill()` ← `read1(byte[], int, int)` ← `implRead(byte[], int, int)` ← `read(byte[], int, int)` ← `read(byte[], int, int)` (`java.io.FilterInputStream`) ← `read(byte[], int, int)` (`java.io.PushbackInputStream`) ← `readFully(byte[], int, int)` (`java.util.zip.ZipInputStream`) ← `readLOC()` ← `getNextEntry()` ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  0.2% |  1.5 MiB |       3 | `<init>(int)` (`org.jetbrains.kotlin.protobuf.ByteString$Output`) ← `newOutput()` (`org.jetbrains.kotlin.protobuf.ByteString`) ← `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type`) ← `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `readMessage(Parser, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.CodedInputStream`) ← `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$TypeTable`) ← `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$TypeTable$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `readMessage(Parser, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.CodedInputStream`) ← `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Class`) ← `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Class$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `readMessage(Parser, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.CodedInputStream`) ← `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$PackageFragment`) ← `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$PackageFragment$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `parsePartialFrom(InputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.AbstractParser`) ← `parseFrom(InputStream, ExtensionRegistryLite)` ← `parseFrom(InputStream, ExtensionRegistryLite)` ← `parseFrom(InputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$PackageFragment`) ← `createFromStream(InputStream)` (`org.jetbrains.kotlin.fir.resolve.providers.impl.BinaryVersionAndPackageFragment$Companion`) ← `<init>(InputStream)` (`org.jetbrains.kotlin.fir.resolve.providers.impl.AbstractFirBuiltinSymbolProvider$BuiltInsPackageFragment`) ← `<clinit>()` (`org.jetbrains.kotlin.fir.resolve.providers.impl.FirFallbackBuiltinSymbolProvider`) ← `initializeBuiltinsProvider(FirSession, FirModuleData, FirKotlinScopeProvider, KotlinClassFinder)` (`org.jetbrains.kotlin.fir.session.FirJvmSessionFactory`) ← `createLibrarySession$lambda$0(FirJvmSessionFactory$Context, ModuleDataProvider, LanguageVersionSettings, FirSession, FirKotlinScopeProvider)` ← `invoke(Object, Object)` (`org.jetbrains.kotlin.fir.session.FirJvmSessionFactory$$Lambda.0x0000009001479798`) ← `createLibrarySession(Object, FirSession, ModuleDataProvider, LanguageVersionSettings, List, boolean, Function2)` (`org.jetbrains.kotlin.fir.session.FirAbstractSessionFactory`) ← `createLibrarySession(FirSession, ModuleDataProvider, List, LanguageVersionSettings, FirJvmSessionFactory$Context)` (`org.jetbrains.kotlin.fir.session.FirJvmSessionFactory`) ← `prepareJvmSessions$lambda$2(DependencyListForCliModule, List, CompilerConfiguration, FirJvmSessionFactory$Context, FirSession)` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`) ← `invoke(Object)` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase$$Lambda.0x0000009001424330`) ← `prepareSessions(List, CompilerConfiguration, Name, TargetPlatform, boolean, DependencyListForCliModule, List, Function1, Function1, Function2, Function0, Function0, Function1, FirSessionProducer, Function4)` (`org.jetbrains.kotlin.cli.common.SessionConstructionUtils`) ← `prepareSessions$default(SessionConstructionUtils, List, CompilerConfiguration, Name, TargetPlatform, boolean, DependencyListForCliModule, List, Function1, Function1, Function2, Function0, Function0, Function1, FirSessionProducer, Function4, int, Object)` ← `prepareJvmSessions(List, Name, CompilerConfiguration, VfsBasedProjectEnvironment, AbstractProjectFileSearchScope, DependencyListForCliModule, Function1, Function1, Function2, Function1)` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`) ← `executePhase(ConfigurationPipelineArtifact)` ← `executePhase(PipelineArtifact)` ← `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`) ← `phaseBody(LoggingContext, Object)` ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`) ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.backend.common.phaser.CompositePhase`) ← `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`) ← `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`) ← `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` ← `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` ← `execute(CommonCompilerArguments, Services, MessageCollector)` ← `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` ← `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`) ← `exec(MessageCollector, Services, CommonCompilerArguments)` ← `exec(PrintStream, Services, MessageRenderer, String[])` ← `exec(PrintStream, MessageRenderer, String[])` ← `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`) ← `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` ← `doMain(CLICompiler, String[])` ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`) ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000009001008400`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000009001009800`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  0.2% |  1.5 MiB |       3 | `<init>(int)` (`org.jetbrains.kotlin.protobuf.ByteString$Output`) ← `newOutput()` (`org.jetbrains.kotlin.protobuf.ByteString`) ← `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type`) ← `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `readMessage(Parser, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.CodedInputStream`) ← `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Function`) ← `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Function$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `readMessage(Parser, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.CodedInputStream`) ← `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Package`) ← `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Package$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `parsePartialFrom(InputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.AbstractParser`) ← `parseFrom(InputStream, ExtensionRegistryLite)` ← `parseFrom(InputStream, ExtensionRegistryLite)` ← `parseFrom(InputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Package`) ← `readPackageDataFrom(byte[], String[])` (`org.jetbrains.kotlin.metadata.jvm.deserialization.JvmProtoBufUtil`) ← `readPackageDataFrom(String[], String[])` ← `computePackagePartInfo(FqName, String)` (`org.jetbrains.kotlin.fir.java.deserialization.JvmClassFileBasedSymbolProvider`) ← `computePackagePartsInfos(FqName)` ← `tryComputePackagePartInfos(FqName)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider`) ← `access$tryComputePackagePartInfos(AbstractFirDeserializedSymbolProvider, FqName)` ← `invoke(Object, Void)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider$special$$inlined$createCache$2`) ← `invoke(Object, Object)` ← `getValue(Object, Object)` (`org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache`) ← `getPackageParts(FqName)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider`) ← `access$getPackageParts(AbstractFirDeserializedSymbolProvider, FqName)` ← `computeTopLevelCallableNames(FqName)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider$symbolNamesProvider$1`) ← `invoke(Object, Void)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider$topLevelCallableNamesByPackage_delegate$lambda$0$$inlined$createCache$1`) ← `invoke(Object, Object)` ← `getValue(Object, Object)` (`org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache`) ← `getTopLevelCallableNamesInPackage(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider`) ← `computeTopLevelCallableNames(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCompositeCachedSymbolNamesProvider`) ← `computeTopLevelCallableNames(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider$symbolNamesProvider$1`) ← `invoke(Object, Void)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider$topLevelCallableNamesByPackage_delegate$lambda$0$$inlined$createCache$1`) ← `invoke(Object, Object)` ← `getValue(Object, Object)` (`org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache`) ← `getTopLevelCallableNamesInPackage(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider`) ← `mayHaveTopLevelCallable(FqName, Name)` (`org.jetbrains.kotlin.fir.resolve.providers.FirSymbolNamesProvider`) ← `getTopLevelPropertySymbolsTo(List, FqName, Name)` (`org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider`) ← `getTopLevelPropertySymbols(FqName, Name)` (`org.jetbrains.kotlin.fir.resolve.providers.FirSymbolProvider`) ← `processPropertiesByName(Name, Function1)` (`org.jetbrains.kotlin.fir.scopes.impl.FirSingleLevelDefaultStarImportingScope`) ← `invoke(FirScope, Name, Function1)` (`org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope$processPropertiesByName$1`) ← `invoke(Object, Object, Object)` ← `processSymbolsByName(Name, Function3, Function1)` (`org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope`) ← `processPropertiesByName(Name, Function1)` ← `getProperties(FirScope, Name)` (`org.jetbrains.kotlin.fir.scopes.FirScopeKt`) ← `resolveFromImportScope(FirQualifiedAccessExpression)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer$FirEnumAnnotationArgumentsTransformer`) ← `resolveQualifiedAccessAndSelectCandidate(FirQualifiedAccessExpression, boolean, boolean, FirElement, ResolutionMode)` ← `resolveQualifiedAccessAndSelectCandidate(FirQualifiedAccessExpression, boolean, boolean, FirElement, ResolutionMode)` ← `transformQualifiedAccessExpression(FirQualifiedAccessExpression, ResolutionMode, boolean, boolean, boolean)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`) ← `transformQualifiedAccessExpression(FirQualifiedAccessExpression, ResolutionMode)` ← `transformPropertyAccessExpression(FirPropertyAccessExpression, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`) ← `transformPropertyAccessExpression(FirPropertyAccessExpression, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.FirPropertyAccessExpression`) ← `transformInplace(List, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `transformArguments(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.impl.FirArgumentListImpl`) ← `transformChildren(FirTransformer, Object)` ← `transformChildren(FirTransformer, Object)` ← `transformElement(FirElement, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`) ← `transformElement(FirElement, Object)` ← `transformArgumentList(FirArgumentList, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformer`) ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.FirArgumentList`) ← `transformChildren(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.impl.FirAnnotationCallImpl`) ← `transformChildren(FirTransformer, Object)` ← `transformAnnotation(FirAnnotation, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer$FirEnumAnnotationArgumentsTransformer`) ← `transformAnnotation(FirAnnotation, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`) ← `transformAnnotationCall(FirAnnotationCall, FirUserTypeRef)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer`) ← `transformAnnotationCall(FirAnnotationCall, Void)` ← `transformAnnotationCall(FirAnnotationCall, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.FirAnnotationCall`) ← `transformInplace(List, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `transformInplace-aLnlfrU(List, FirTransformer, Object)` ← `transformAnnotations(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.impl.FirRegularClassImpl`) ← `transformAnnotations(FirTransformer, Object)` ← `transformAnnotationContainer(FirAnnotationContainer, Void)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer`) ← `transformDeclaration(FirDeclaration, Void)` ← `transformRegularClass(FirRegularClass, Void)` ← `transformRegularClass(FirRegularClass, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.FirRegularClass`) ← `transformInplace(List, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `transformDeclarations(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.impl.FirFileImpl`) ← `transformDeclarations(FirTransformer, Object)` ← `invoke()` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer$transformFile$$inlined$resolveFile$1`) ← `invoke()` ← `withFileAndFileScopes(FirFile, Function0)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer`) ← `transformFile(FirFile, Void)` ← `transformFile(FirFile, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.FirFile`) ← `resolveAnnotations(FirFile)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirCompilerRequiredAnnotationsResolveTransformer`) ← `transformFile(FirFile, Void)` ← `transformFile(FirFile, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.FirFile`) ← `transformSingle(FirElement, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `process(Collection)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.FirCompilerRequiredAnnotationsResolveProcessor`) ← `process(List)` (`org.jetbrains.kotlin.fir.resolve.transformers.FirTotalResolveProcessor`) ← `runResolution(FirSession, List)` (`org.jetbrains.kotlin.fir.pipeline.AnalyseKt`) ← `resolveAndCheckFir(FirSession, List, BaseDiagnosticsCollector)` (`org.jetbrains.kotlin.fir.pipeline.FirUtilsKt`) ← `executePhase(ConfigurationPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`) ← `executePhase(PipelineArtifact)` ← `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`) ← `phaseBody(LoggingContext, Object)` ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`) ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.backend.common.phaser.CompositePhase`) ← `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`) ← `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`) ← `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` ← `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` ← `execute(CommonCompilerArguments, Services, MessageCollector)` ← `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` ← `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`) ← `exec(MessageCollector, Services, CommonCompilerArguments)` ← `exec(PrintStream, Services, MessageRenderer, String[])` ← `exec(PrintStream, MessageRenderer, String[])` ← `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`) ← `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` ← `doMain(CLICompiler, String[])` ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`) ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000009001008400`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000009001009800`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  0.2% |  1.5 MiB |       3 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `readMessage(Parser, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.CodedInputStream`) ← `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$ValueParameter`) ← `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$ValueParameter$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `readMessage(Parser, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.CodedInputStream`) ← `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Function`) ← `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Function$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `readMessage(Parser, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.CodedInputStream`) ← `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Package`) ← `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Package$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `parsePartialFrom(InputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.AbstractParser`) ← `parseFrom(InputStream, ExtensionRegistryLite)` ← `parseFrom(InputStream, ExtensionRegistryLite)` ← `parseFrom(InputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Package`) ← `readPackageDataFrom(byte[], String[])` (`org.jetbrains.kotlin.metadata.jvm.deserialization.JvmProtoBufUtil`) ← `readPackageDataFrom(String[], String[])` ← `computePackagePartInfo(FqName, String)` (`org.jetbrains.kotlin.fir.java.deserialization.JvmClassFileBasedSymbolProvider`) ← `computePackagePartsInfos(FqName)` ← `tryComputePackagePartInfos(FqName)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider`) ← `access$tryComputePackagePartInfos(AbstractFirDeserializedSymbolProvider, FqName)` ← `invoke(Object, Void)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider$special$$inlined$createCache$2`) ← `invoke(Object, Object)` ← `getValue(Object, Object)` (`org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache`) ← `getPackageParts(FqName)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider`) ← `access$getPackageParts(AbstractFirDeserializedSymbolProvider, FqName)` ← `computeTopLevelCallableNames(FqName)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider$symbolNamesProvider$1`) ← `invoke(Object, Void)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider$topLevelCallableNamesByPackage_delegate$lambda$0$$inlined$createCache$1`) ← `invoke(Object, Object)` ← `getValue(Object, Object)` (`org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache`) ← `getTopLevelCallableNamesInPackage(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider`) ← `computeTopLevelCallableNames(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCompositeCachedSymbolNamesProvider`) ← `computeTopLevelCallableNames(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider$symbolNamesProvider$1`) ← `invoke(Object, Void)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider$topLevelCallableNamesByPackage_delegate$lambda$0$$inlined$createCache$1`) ← `invoke(Object, Object)` ← `getValue(Object, Object)` (`org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache`) ← `getTopLevelCallableNamesInPackage(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider`) ← `mayHaveTopLevelCallable(FqName, Name)` (`org.jetbrains.kotlin.fir.resolve.providers.FirSymbolNamesProvider`) ← `getTopLevelPropertySymbolsTo(List, FqName, Name)` (`org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider`) ← `getTopLevelPropertySymbols(FqName, Name)` (`org.jetbrains.kotlin.fir.resolve.providers.FirSymbolProvider`) ← `processPropertiesByName(Name, Function1)` (`org.jetbrains.kotlin.fir.scopes.impl.FirSingleLevelDefaultStarImportingScope`) ← `invoke(FirScope, Name, Function1)` (`org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope$processPropertiesByName$1`) ← `invoke(Object, Object, Object)` ← `processSymbolsByName(Name, Function3, Function1)` (`org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope`) ← `processPropertiesByName(Name, Function1)` ← `getProperties(FirScope, Name)` (`org.jetbrains.kotlin.fir.scopes.FirScopeKt`) ← `resolveFromImportScope(FirQualifiedAccessExpression)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer$FirEnumAnnotationArgumentsTransformer`) ← `resolveQualifiedAccessAndSelectCandidate(FirQualifiedAccessExpression, boolean, boolean, FirElement, ResolutionMode)` ← `resolveQualifiedAccessAndSelectCandidate(FirQualifiedAccessExpression, boolean, boolean, FirElement, ResolutionMode)` ← `transformQualifiedAccessExpression(FirQualifiedAccessExpression, ResolutionMode, boolean, boolean, boolean)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`) ← `transformQualifiedAccessExpression(FirQualifiedAccessExpression, ResolutionMode)` ← `transformPropertyAccessExpression(FirPropertyAccessExpression, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`) ← `transformPropertyAccessExpression(FirPropertyAccessExpression, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.FirPropertyAccessExpression`) ← `transformInplace(List, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `transformArguments(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.impl.FirArgumentListImpl`) ← `transformChildren(FirTransformer, Object)` ← `transformChildren(FirTransformer, Object)` ← `transformElement(FirElement, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`) ← `transformElement(FirElement, Object)` ← `transformArgumentList(FirArgumentList, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformer`) ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.FirArgumentList`) ← `transformChildren(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.impl.FirAnnotationCallImpl`) ← `transformChildren(FirTransformer, Object)` ← `transformAnnotation(FirAnnotation, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer$FirEnumAnnotationArgumentsTransformer`) ← `transformAnnotation(FirAnnotation, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`) ← `transformAnnotationCall(FirAnnotationCall, FirUserTypeRef)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer`) ← `transformAnnotationCall(FirAnnotationCall, Void)` ← `transformAnnotationCall(FirAnnotationCall, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.FirAnnotationCall`) ← `transformInplace(List, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `transformInplace-aLnlfrU(List, FirTransformer, Object)` ← `transformAnnotations(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.impl.FirRegularClassImpl`) ← `transformAnnotations(FirTransformer, Object)` ← `transformAnnotationContainer(FirAnnotationContainer, Void)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer`) ← `transformDeclaration(FirDeclaration, Void)` ← `transformRegularClass(FirRegularClass, Void)` ← `transformRegularClass(FirRegularClass, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.FirRegularClass`) ← `transformInplace(List, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `transformDeclarations(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.impl.FirFileImpl`) ← `transformDeclarations(FirTransformer, Object)` ← `invoke()` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer$transformFile$$inlined$resolveFile$1`) ← `invoke()` ← `withFileAndFileScopes(FirFile, Function0)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer`) ← `transformFile(FirFile, Void)` ← `transformFile(FirFile, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.FirFile`) ← `resolveAnnotations(FirFile)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirCompilerRequiredAnnotationsResolveTransformer`) ← `transformFile(FirFile, Void)` ← `transformFile(FirFile, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.FirFile`) ← `transformSingle(FirElement, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `process(Collection)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.FirCompilerRequiredAnnotationsResolveProcessor`) ← `process(List)` (`org.jetbrains.kotlin.fir.resolve.transformers.FirTotalResolveProcessor`) ← `runResolution(FirSession, List)` (`org.jetbrains.kotlin.fir.pipeline.AnalyseKt`) ← `resolveAndCheckFir(FirSession, List, BaseDiagnosticsCollector)` (`org.jetbrains.kotlin.fir.pipeline.FirUtilsKt`) ← `executePhase(ConfigurationPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`) ← `executePhase(PipelineArtifact)` ← `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`) ← `phaseBody(LoggingContext, Object)` ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`) ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.backend.common.phaser.CompositePhase`) ← `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`) ← `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`) ← `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` ← `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` ← `execute(CommonCompilerArguments, Services, MessageCollector)` ← `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` ← `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`) ← `exec(MessageCollector, Services, CommonCompilerArguments)` ← `exec(PrintStream, Services, MessageRenderer, String[])` ← `exec(PrintStream, MessageRenderer, String[])` ← `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`) ← `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` ← `doMain(CLICompiler, String[])` ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`) ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000009001008400`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000009001009800`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  0.2% |  1.5 MiB |       3 | `<init>(int, int)` (`org.jetbrains.org.objectweb.asm.tree.analysis.Frame`) ← `_init_$lambda$0(int, int)` (`org.jetbrains.kotlin.codegen.optimization.common.FastMethodAnalyzer`) ← `invoke(Object, Object)` (`org.jetbrains.kotlin.codegen.optimization.common.FastMethodAnalyzer$$Lambda.0x00000090018de330`) ← `fullMergeControlFlowEdge(int, Frame, boolean)` (`org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer`) ← `mergeControlFlowEdge(int, Frame, boolean)` ← `processControlFlowEdge(Frame, AbstractInsnNode, int, boolean)` ← `processControlFlowEdge$default(FastAnalyzer, Frame, AbstractInsnNode, int, boolean, int, Object)` ← `visitOpInsn(AbstractInsnNode, Frame, int)` ← `visitMeaningfulInstruction(AbstractInsnNode, int, int, Frame, int)` ← `analyzeInstruction(AbstractInsnNode, int, Frame, Frame, Frame)` ← `analyzeMainLoop()` ← `analyze()` ← `transform(String, MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.RedundantCheckCastEliminationMethodTransformer`) ← `transform(String, MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.transformer.CompositeMethodTransformer`) ← `performTransformations(MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`) ← `visitEnd()` (`org.jetbrains.kotlin.codegen.TransformationMethodVisitor`) ← `visitEnd()` (`org.jetbrains.org.objectweb.asm.MethodVisitor`) ← `accept(MethodVisitor)` (`org.jetbrains.org.objectweb.asm.tree.MethodNode`) ← `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000900188f020`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`) ← `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`) ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  0.2% | 1.19 MiB |       2 | `contentsToByteArray$lambda$0(ZipEntryDescription, LargeDynamicMappedBuffer$Mapping)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt`) ← `invoke(Object)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt$$Lambda.0x0000009001396f88`) ← `withMappedRange(long, long, Function1)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.LargeDynamicMappedBuffer`) ← `withMappedRangeFrom(long, Function1)` ← `contentsToByteArray(LargeDynamicMappedBuffer, ZipEntryDescription)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt`) ← `contentsToByteArray(ZipEntryDescription)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.FastJarHandler`) ← `contentsToByteArray()` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.FastJarVirtualFile`) ← `contentsToByteArray(boolean)` (`com.intellij.openapi.vfs.VirtualFile`) ← `create$lambda$0(VirtualFile, byte[], MetadataVersion)` (`org.jetbrains.kotlin.load.kotlin.VirtualFileKotlinClass$Factory`) ← `invoke()` (`org.jetbrains.kotlin.load.kotlin.VirtualFileKotlinClass$Factory$$Lambda.0x00000090015cdab0`) ← `measureSideTime$org_jetbrains_kotlin_compiler_common(PhaseSideType, Function0)` (`org.jetbrains.kotlin.util.PerformanceManager`) ← `tryMeasureSideTime(PerformanceManager, PhaseSideType, Function0)` (`org.jetbrains.kotlin.util.PerformanceManagerKt`) ← `create$org_jetbrains_kotlin_frontend_common_jvm(VirtualFile, MetadataVersion, byte[], PerformanceManager)` (`org.jetbrains.kotlin.load.kotlin.VirtualFileKotlinClass$Factory`) ← `getKotlinBinaryClassOrClassFileContent$lambda$0(VirtualFile, MetadataVersion, byte[], PerformanceManager)` (`org.jetbrains.kotlin.load.kotlin.KotlinBinaryClassCache$Companion`) ← `compute()` (`org.jetbrains.kotlin.load.kotlin.KotlinBinaryClassCache$Companion$$Lambda.0x00000090015cc038`) ← `runReadAction(Computable)` (`com.intellij.mock.MockApplication`) ← `getKotlinBinaryClassOrClassFileContent(VirtualFile, MetadataVersion, byte[], PerformanceManager)` (`org.jetbrains.kotlin.load.kotlin.KotlinBinaryClassCache$Companion`) ← `getKotlinBinaryClassOrClassFileContent$default(KotlinBinaryClassCache$Companion, VirtualFile, MetadataVersion, byte[], PerformanceManager, int, Object)` ← `findKotlinClassOrContent(ClassId, MetadataVersion)` (`org.jetbrains.kotlin.load.kotlin.VirtualFileFinder`) ← `computePackagePartInfo(FqName, String)` (`org.jetbrains.kotlin.fir.java.deserialization.JvmClassFileBasedSymbolProvider`) ← `computePackagePartsInfos(FqName)` ← `tryComputePackagePartInfos(FqName)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider`) ← `access$tryComputePackagePartInfos(AbstractFirDeserializedSymbolProvider, FqName)` ← `invoke(Object, Void)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider$special$$inlined$createCache$2`) ← `invoke(Object, Object)` ← `getValue(Object, Object)` (`org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache`) ← `getPackageParts(FqName)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider`) ← `access$getPackageParts(AbstractFirDeserializedSymbolProvider, FqName)` ← `computeTopLevelCallableNames(FqName)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider$symbolNamesProvider$1`) ← `invoke(Object, Void)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider$topLevelCallableNamesByPackage_delegate$lambda$0$$inlined$createCache$1`) ← `invoke(Object, Object)` ← `getValue(Object, Object)` (`org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache`) ← `getTopLevelCallableNamesInPackage(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider`) ← `computeTopLevelCallableNames(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCompositeCachedSymbolNamesProvider`) ← `computeTopLevelCallableNames(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider$symbolNamesProvider$1`) ← `invoke(Object, Void)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider$topLevelCallableNamesByPackage_delegate$lambda$0$$inlined$createCache$1`) ← `invoke(Object, Object)` ← `getValue(Object, Object)` (`org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache`) ← `getTopLevelCallableNamesInPackage(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider`) ← `mayHaveTopLevelCallable(FqName, Name)` (`org.jetbrains.kotlin.fir.resolve.providers.FirSymbolNamesProvider`) ← `getTopLevelPropertySymbolsTo(List, FqName, Name)` (`org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider`) ← `getTopLevelPropertySymbols(FqName, Name)` (`org.jetbrains.kotlin.fir.resolve.providers.FirSymbolProvider`) ← `processPropertiesByName(Name, Function1)` (`org.jetbrains.kotlin.fir.scopes.impl.FirSingleLevelDefaultStarImportingScope`) ← `invoke(FirScope, Name, Function1)` (`org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope$processPropertiesByName$1`) ← `invoke(Object, Object, Object)` ← `processSymbolsByName(Name, Function3, Function1)` (`org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope`) ← `processPropertiesByName(Name, Function1)` ← `getProperties(FirScope, Name)` (`org.jetbrains.kotlin.fir.scopes.FirScopeKt`) ← `resolveFromImportScope(FirQualifiedAccessExpression)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer$FirEnumAnnotationArgumentsTransformer`) ← `resolveQualifiedAccessAndSelectCandidate(FirQualifiedAccessExpression, boolean, boolean, FirElement, ResolutionMode)` ← `resolveQualifiedAccessAndSelectCandidate(FirQualifiedAccessExpression, boolean, boolean, FirElement, ResolutionMode)` ← `transformQualifiedAccessExpression(FirQualifiedAccessExpression, ResolutionMode, boolean, boolean, boolean)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`) ← `transformQualifiedAccessExpression(FirQualifiedAccessExpression, ResolutionMode)` ← `transformPropertyAccessExpression(FirPropertyAccessExpression, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`) ← `transformPropertyAccessExpression(FirPropertyAccessExpression, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.FirPropertyAccessExpression`) ← `transformInplace(List, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `transformArguments(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.impl.FirArgumentListImpl`) ← `transformChildren(FirTransformer, Object)` ← `transformChildren(FirTransformer, Object)` ← `transformElement(FirElement, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`) ← `transformElement(FirElement, Object)` ← `transformArgumentList(FirArgumentList, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformer`) ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.FirArgumentList`) ← `transformChildren(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.impl.FirAnnotationCallImpl`) ← `transformChildren(FirTransformer, Object)` ← `transformAnnotation(FirAnnotation, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer$FirEnumAnnotationArgumentsTransformer`) ← `transformAnnotation(FirAnnotation, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`) ← `transformAnnotationCall(FirAnnotationCall, FirUserTypeRef)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer`) ← `transformAnnotationCall(FirAnnotationCall, Void)` ← `transformAnnotationCall(FirAnnotationCall, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.FirAnnotationCall`) ← `transformInplace(List, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `transformInplace-aLnlfrU(List, FirTransformer, Object)` ← `transformAnnotations(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.impl.FirRegularClassImpl`) ← `transformAnnotations(FirTransformer, Object)` ← `transformAnnotationContainer(FirAnnotationContainer, Void)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer`) ← `transformDeclaration(FirDeclaration, Void)` ← `transformRegularClass(FirRegularClass, Void)` ← `transformRegularClass(FirRegularClass, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.FirRegularClass`) ← `transformInplace(List, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `transformDeclarations(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.impl.FirFileImpl`) ← `transformDeclarations(FirTransformer, Object)` ← `invoke()` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer$transformFile$$inlined$resolveFile$1`) ← `invoke()` ← `withFileAndFileScopes(FirFile, Function0)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer`) ← `transformFile(FirFile, Void)` ← `transformFile(FirFile, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.FirFile`) ← `resolveAnnotations(FirFile)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirCompilerRequiredAnnotationsResolveTransformer`) ← `transformFile(FirFile, Void)` ← `transformFile(FirFile, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.FirFile`) ← `transformSingle(FirElement, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `process(Collection)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.FirCompilerRequiredAnnotationsResolveProcessor`) ← `process(List)` (`org.jetbrains.kotlin.fir.resolve.transformers.FirTotalResolveProcessor`) ← `runResolution(FirSession, List)` (`org.jetbrains.kotlin.fir.pipeline.AnalyseKt`) ← `resolveAndCheckFir(FirSession, List, BaseDiagnosticsCollector)` (`org.jetbrains.kotlin.fir.pipeline.FirUtilsKt`) ← `executePhase(ConfigurationPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`) ← `executePhase(PipelineArtifact)` ← `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`) ← `phaseBody(LoggingContext, Object)` ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`) ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.backend.common.phaser.CompositePhase`) ← `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`) ← `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`) ← `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` ← `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` ← `execute(CommonCompilerArguments, Services, MessageCollector)` ← `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` ← `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`) ← `exec(MessageCollector, Services, CommonCompilerArguments)` ← `exec(PrintStream, Services, MessageRenderer, String[])` ← `exec(PrintStream, MessageRenderer, String[])` ← `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`) ← `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` ← `doMain(CLICompiler, String[])` ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`) ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000009001008400`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000009001009800`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                                                                                 |
|  0.1% |    1 MiB |       2 | `addConstantUtf8(String)` (`org.jetbrains.org.objectweb.asm.SymbolTable`) ← `visitLocalVariable(String, String, String, Label, Label, int)` (`org.jetbrains.org.objectweb.asm.MethodWriter`) ← `visitLocalVariable(String, String, String, Label, Label, int)` (`org.jetbrains.org.objectweb.asm.MethodVisitor`) ← `accept(MethodVisitor)` (`org.jetbrains.org.objectweb.asm.tree.LocalVariableNode`) ← `accept(MethodVisitor)` (`org.jetbrains.org.objectweb.asm.tree.MethodNode`) ← `visitEnd()` (`org.jetbrains.kotlin.codegen.TransformationMethodVisitor`) ← `visitEnd()` (`org.jetbrains.org.objectweb.asm.MethodVisitor`) ← `accept(MethodVisitor)` (`org.jetbrains.org.objectweb.asm.tree.MethodNode`) ← `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000900188f020`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`) ← `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`) ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

# Lock contention profile

Blocked 1.51s over 908 contentions (1.7ms per contention).

| Category         |     % |  Time | Contentions |
| ---------------- | ----: | ----: | ----------: |
| Ours             | 99.8% | 1.50s |         891 |
| Standard library |  0.2% | 3.7ms |          17 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
└── … 1.50s (99.6%, self 0.8%) generateFile(JvmBackendContext, IrFile, List, boolean) at org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory
    ├── 1.42s (94.4%) generate() at org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen
    │   ├── 1.40s (93.0%) generateMethod(IrFunction, SourceMapper)
    │   │   ├── 1.32s (87.8%, self 76.0%) generateMethodNode(IrFunction)
    │   │   │   └── … 178.5ms (11.8%, self 3.4%) doGenerate(ReifiedTypeParametersUsages) at org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen
    │   │   │       ├── … 82.5ms (5.5%) visitReturn(IrReturn, BlockInfo) at org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen
    │   │   │       │   ├── … 43.1ms (2.8%) visitCall(IrCall, BlockInfo) at org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen
    │   │   │       │   │   ├── … 19.7ms (1.3%) doInline(MethodVisitor, LocalVarRemapper, boolean, Map, int) at org.jetbrains.kotlin.codegen.inline.MethodInliner
    │   │   │       │   │   │   ├── 12.5ms (0.8%) markPlacesForInlineAndRemoveInlinable(MethodNode, Map, int)
    │   │   │       │   │   │   │   └── … 3.1ms (0.2%) objectValue(Type) at org.jetbrains.kotlin.codegen.optimization.fixStack.FixStackInterpreter
    │   │   │       │   │   │   └── 5.5ms (0.4%) doInline(MethodNode)
    │   │   │       │   │   ├── 9.6ms (0.6%) getOrCreateCallGenerator(IrFunctionAccessExpression, BlockInfo, JvmMethodSignature)
    │   │   │       │   │   │   └── 2.7ms (0.2%) <init>(TypeSystemCommonBackendContext, Map, boolean, Function2) at org.jetbrains.kotlin.codegen.inline.TypeParameterMappings
    │   │   │       │   │   └── 7.0ms (0.5%) visitCall$handleParameter(IrCallGenerator, ExpressionCodegen, BlockInfo, IrValueParameter, IrExpression, Type)
    │   │   │       │   │       └── 7.0ms (0.5%) genValueAndPut(IrValueParameter, IrExpression, Type, ExpressionCodegen, BlockInfo) at org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen
    │   │   │       │   └── … 31.9ms (2.1%) visitCall(IrCall, BlockInfo) at org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen
    │   │   │       │       ├── … 17.1ms (1.1%) doInline(MethodVisitor, LocalVarRemapper, boolean, Map, int) at org.jetbrains.kotlin.codegen.inline.MethodInliner
    │   │   │       │       │   └── 12.2ms (0.8%) markPlacesForInlineAndRemoveInlinable(MethodNode, Map, int)
    │   │   │       │       │       ├── 6.8ms (0.4%) preprocessNodeBeforeInline(MethodNode, Map)
    │   │   │       │       │       │   └── … 3.2ms (0.2%) copyOperation(AbstractInsnNode, TemporaryValsAnalyzer$StoredValue) at org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryValsAnalyzer$StoreTrackingInterpreter
    │   │   │       │       │       └── … 2.7ms (0.2%) analyzeMethodNodeWithInterpreter$lambda$0(int, int) at org.jetbrains.kotlin.codegen.inline.MethodInlinerUtilKt
    │   │   │       │       └── … 2.4ms (0.2%) <clinit>() at org.jetbrains.kotlin.codegen.inline.LambdaInfo
    │   │   │       ├── … 3.9ms (0.3%) <init>() at org.jetbrains.kotlin.codegen.FrameMapBase
    │   │   │       ├── 3.1ms (0.2%) generateParameterAnnotations(IrFunction, MethodVisitor, JvmMethodSignature, ClassCodegen, boolean)
    │   │   │       ├── 3.0ms (0.2%) toIrBasedDescriptor(IrFunction) at org.jetbrains.kotlin.ir.descriptors.IrBasedDescriptorsKt
    │   │   │       │   └── 2.9ms (0.2%) toIrBasedDescriptor(IrSimpleFunction)
    │   │   │       └── 26.5ms (1.8%) 10 more callees, led by (0.5%) calculateMethodFlags(IrFunction)
    │   │   ├── … 26.7ms (1.8%) transform(String, MethodNode) at org.jetbrains.kotlin.codegen.optimization.transformer.CompositeMethodTransformer
    │   │   │   ├── … 5.1ms (0.3%) newValue(Type) at org.jetbrains.org.objectweb.asm.tree.analysis.SourceInterpreter
    │   │   │   └── 19.2ms (1.3%) 10 more callees, led by (0.3%) transform(String, MethodNode) at org.jetbrains.kotlin.codegen.optimization.nullCheck.RedundantNullCheckMethodTransformer
    │   │   ├── … 23.1ms (1.5%, self 0.9%) makeFirMetadataSerializerForIrClass(FirSession, JvmBackendContext, IrClass, JvmSerializationBindings, Fir2IrComponents, MetadataSerializer, Set) at org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt
    │   │   │   └── 8.1ms (0.5%) makeElementSerializer(MetadataSource, FirSession, ScopeSession, FirJvmSerializerExtension, AbstractTypeApproximator, MetadataSerializer, LanguageVersionSettings)
    │   │   └── … 13.7ms (0.9%, self 0.8%) <init>(MethodVisitor, boolean, GenerationState, int, String, String, String, String[]) at org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor
    │   └── 21.9ms (1.4%) 5 more callees, led by (1.3%) generateAnnotations()
    └── … 65.6ms (4.3%, self 0.9%) <init>(IrClass, JvmBackendContext, IrFunction, List) at org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen
        ├── 32.6ms (2.2%) newVisitor(JvmDeclarationOrigin, Type, List) at org.jetbrains.kotlin.codegen.ClassFileFactory
        │   └── … 26.9ms (1.8%, self 1.3%) newClassBuilder(JvmDeclarationOrigin) at org.jetbrains.kotlin.codegen.ClassBuilderFactories$1
        │       └── … 7.3ms (0.5%) <init>(ClassReader, int) at org.jetbrains.org.objectweb.asm.ClassWriter
        ├── 10.5ms (0.7%) getSourceMapper(JvmBackendContext, IrClass) at org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt
        └── 5.1ms (0.3%) mapClassSignature(IrTypeMapper, IrClass, Type, boolean) at org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt
```

## Hottest functions

### Self time

Functions with the most time blocked within the function body, excluding callees.

#### Categories

Categories accounting for at least 1.0% of self time.

##### Ours

|     % |   Time | Contentions | Function                                                                                                                                                            | Location                                                              |
| ----: | -----: | ----------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| 76.0% |  1.14s |          91 | `generateMethodNode(IrFunction)`                                                                                                                                    | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`               |
|  3.4% | 51.4ms |          45 | `doGenerate(ReifiedTypeParametersUsages)`                                                                                                                           | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`            |
|  1.3% | 19.6ms |          14 | `newClassBuilder(JvmDeclarationOrigin)`                                                                                                                             | `org.jetbrains.kotlin.codegen.ClassBuilderFactories$1`                |
|  0.9% | 13.7ms |          40 | `<init>(IrClass, JvmBackendContext, IrFunction, List)`                                                                                                              | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`               |
|  0.9% | 13.3ms |          10 | `makeFirMetadataSerializerForIrClass(FirSession, JvmBackendContext, IrClass, JvmSerializationBindings, Fir2IrComponents, MetadataSerializer, Set)`                  | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`        |
|  0.8% | 12.8ms |          21 | `generateFile(JvmBackendContext, IrFile, List, boolean)`                                                                                                            | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`                |
|  0.8% | 12.1ms |          12 | `<init>(MethodVisitor, boolean, GenerationState, int, String, String, String, String[])`                                                                            | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor` |
|  0.6% |  9.4ms |          26 | `getOrCreateCallGenerator(IrFunctionAccessExpression, BlockInfo, JvmMethodSignature)`                                                                               | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`          |
|  0.5% |  8.0ms |          15 | `genValueAndPut(IrValueParameter, IrExpression, Type, ExpressionCodegen, BlockInfo)`                                                                                | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`            |
|  0.5% |  7.0ms |          12 | `doInline(MethodNode)`                                                                                                                                              | `org.jetbrains.kotlin.codegen.inline.MethodInliner`                   |
|  0.4% |  6.2ms |          16 | `getSourceMapper(JvmBackendContext, IrClass)`                                                                                                                       | `org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt`           |
|  0.4% |  6.0ms |           5 | `makeElementSerializer(MetadataSource, FirSession, ScopeSession, FirJvmSerializerExtension, AbstractTypeApproximator, MetadataSerializer, LanguageVersionSettings)` | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`        |
|  0.4% |  5.9ms |          18 | `<init>(ClassReader, int)`                                                                                                                                          | `org.jetbrains.org.objectweb.asm.ClassWriter`                         |
|  0.3% |  5.1ms |           1 | `newValue(Type)`                                                                                                                                                    | `org.jetbrains.org.objectweb.asm.tree.analysis.SourceInterpreter`     |
|  0.3% |  4.1ms |           2 | `analyzeMethodNodeWithInterpreter$lambda$0(int, int)`                                                                                                               | `org.jetbrains.kotlin.codegen.inline.MethodInlinerUtilKt`             |
|  0.3% |  3.9ms |           8 | `<init>()`                                                                                                                                                          | `org.jetbrains.kotlin.codegen.FrameMapBase`                           |
|  0.3% |  3.9ms |           6 | `preprocessNodeBeforeInline(MethodNode, Map)`                                                                                                                       | `org.jetbrains.kotlin.codegen.inline.MethodInliner`                   |
|  0.2% |  3.7ms |           4 | `markPlacesForInlineAndRemoveInlinable(MethodNode, Map, int)`                                                                                                       | `org.jetbrains.kotlin.codegen.inline.MethodInliner`                   |
|  0.2% |  3.7ms |           9 | `newVisitor(JvmDeclarationOrigin, Type, List)`                                                                                                                      | `org.jetbrains.kotlin.codegen.ClassFileFactory`                       |
|  0.2% |  3.3ms |           6 | `<init>(TypeSystemCommonBackendContext, Map, boolean, Function2)`                                                                                                   | `org.jetbrains.kotlin.codegen.inline.TypeParameterMappings`           |

#### Lines

Lines with the largest contribution to each function's self time.

##### `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|     % |  Time | Contentions | Location                                                    |
| ----: | ----: | ----------: | ----------------------------------------------------------- |
| 99.5% | 1.14s |          70 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:427` |
|  0.3% | 3.7ms |          11 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:422` |
|  0.2% | 1.8ms |           9 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:416` |
| <0.1% | 0.3ms |           1 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:428` |

##### `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

|     % |   Time | Contentions | Location                                                       |
| ----: | -----: | ----------: | -------------------------------------------------------------- |
| 52.3% | 26.9ms |          13 | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen:68`  |
| 18.6% |  9.6ms |           8 | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen:134` |
| 10.7% |  5.5ms |           6 | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen:133` |
| 10.1% |  5.2ms |           5 | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen:76`  |
|  4.2% |  2.2ms |           6 | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen:103` |

##### `newClassBuilder(JvmDeclarationOrigin)` (`org.jetbrains.kotlin.codegen.ClassBuilderFactories$1`)

|      % |   Time | Contentions | Location                                                  |
| -----: | -----: | ----------: | --------------------------------------------------------- |
| 100.0% | 19.6ms |          14 | `org.jetbrains.kotlin.codegen.ClassBuilderFactories$1:70` |

##### `<init>(IrClass, JvmBackendContext, IrFunction, List)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|     % |  Time | Contentions | Location                                                    |
| ----: | ----: | ----------: | ----------------------------------------------------------- |
| 26.3% | 3.6ms |           9 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:84`  |
| 23.1% | 3.2ms |           5 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:112` |
| 15.5% | 2.1ms |           5 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:78`  |
| 11.0% | 1.5ms |           3 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:107` |
|  9.8% | 1.3ms |           4 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:89`  |

##### `makeFirMetadataSerializerForIrClass(FirSession, JvmBackendContext, IrClass, JvmSerializationBindings, Fir2IrComponents, MetadataSerializer, Set)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`)

|     % |  Time | Contentions | Location                                                          |
| ----: | ----: | ----------: | ----------------------------------------------------------------- |
| 63.6% | 8.4ms |           2 | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt:50` |
| 18.1% | 2.4ms |           3 | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt:54` |
| 16.8% | 2.2ms |           2 | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt:61` |
|  1.5% | 0.2ms |           3 | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt:63` |

##### `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)

|     % |   Time | Contentions | Location                                                   |
| ----: | -----: | ----------: | ---------------------------------------------------------- |
| 97.7% | 12.5ms |          18 | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory:465` |
|  2.3% |  0.3ms |           3 | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory:459` |

##### `<init>(MethodVisitor, boolean, GenerationState, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`)

|     % |  Time | Contentions | Location                                                                 |
| ----: | ----: | ----------: | ------------------------------------------------------------------------ |
| 36.0% | 4.3ms |           3 | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor:59` |
| 21.1% | 2.6ms |           1 | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor:60` |
| 14.1% | 1.7ms |           1 | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor:57` |
| 10.6% | 1.3ms |           1 | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor:53` |
|  9.2% | 1.1ms |           2 | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor:46` |

##### `getOrCreateCallGenerator(IrFunctionAccessExpression, BlockInfo, JvmMethodSignature)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|     % |  Time | Contentions | Location                                                          |
| ----: | ----: | ----------: | ----------------------------------------------------------------- |
| 34.0% | 3.2ms |           7 | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen:1581` |
| 28.4% | 2.7ms |           5 | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen:1569` |
| 10.3% | 1.0ms |           5 | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen:1548` |
|  9.0% | 0.8ms |           4 | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen:1572` |
|  8.7% | 0.8ms |           3 | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen:1568` |

##### `genValueAndPut(IrValueParameter, IrExpression, Type, ExpressionCodegen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`)

|     % |  Time | Contentions | Location                                                       |
| ----: | ----: | ----------: | -------------------------------------------------------------- |
| 46.5% | 3.7ms |           4 | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen:192` |
| 29.9% | 2.4ms |           3 | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen:152` |
| 12.7% | 1.0ms |           4 | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen:178` |
| 10.8% | 0.9ms |           3 | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen:149` |
| <0.1% | 3.3µs |           1 | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen:118` |

##### `doInline(MethodNode)` (`org.jetbrains.kotlin.codegen.inline.MethodInliner`)

|     % |  Time | Contentions | Location                                                |
| ----: | ----: | ----------: | ------------------------------------------------------- |
| 73.3% | 5.1ms |           4 | `org.jetbrains.kotlin.codegen.inline.MethodInliner:154` |
| 18.0% | 1.3ms |           4 | `org.jetbrains.kotlin.codegen.inline.MethodInliner:159` |
|  5.5% | 0.4ms |           2 | `org.jetbrains.kotlin.codegen.inline.MethodInliner:156` |
|  3.2% | 0.2ms |           2 | `org.jetbrains.kotlin.codegen.inline.MethodInliner:153` |

##### `getSourceMapper(JvmBackendContext, IrClass)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt`)

|     % |  Time | Contentions | Location                                                       |
| ----: | ----: | ----------: | -------------------------------------------------------------- |
| 62.0% | 3.9ms |           9 | `org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt:76` |
| 33.6% | 2.1ms |           6 | `org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt:90` |
|  4.4% | 0.3ms |           1 | `org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt:89` |

##### `makeElementSerializer(MetadataSource, FirSession, ScopeSession, FirJvmSerializerExtension, AbstractTypeApproximator, MetadataSerializer, LanguageVersionSettings)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`)

|     % |  Time | Contentions | Location                                                           |
| ----: | ----: | ----------: | ------------------------------------------------------------------ |
| 51.1% | 3.1ms |           2 | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt:190` |
| 48.9% | 3.0ms |           3 | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt:198` |

##### `<init>(ClassReader, int)` (`org.jetbrains.org.objectweb.asm.ClassWriter`)

|      % |  Time | Contentions | Location                                          |
| -----: | ----: | ----------: | ------------------------------------------------- |
| 100.0% | 5.9ms |          18 | `org.jetbrains.org.objectweb.asm.ClassWriter:266` |

##### `newValue(Type)` (`org.jetbrains.org.objectweb.asm.tree.analysis.SourceInterpreter`)

|      % |  Time | Contentions | Location                                                             |
| -----: | ----: | ----------: | -------------------------------------------------------------------- |
| 100.0% | 5.1ms |           1 | `org.jetbrains.org.objectweb.asm.tree.analysis.SourceInterpreter:75` |

##### `analyzeMethodNodeWithInterpreter$lambda$0(int, int)` (`org.jetbrains.kotlin.codegen.inline.MethodInlinerUtilKt`)

|      % |  Time | Contentions | Location                                                      |
| -----: | ----: | ----------: | ------------------------------------------------------------- |
| 100.0% | 4.1ms |           2 | `org.jetbrains.kotlin.codegen.inline.MethodInlinerUtilKt:104` |

##### `<init>()` (`org.jetbrains.kotlin.codegen.FrameMapBase`)

|      % |  Time | Contentions | Location                                       |
| -----: | ----: | ----------: | ---------------------------------------------- |
| 100.0% | 3.9ms |           8 | `org.jetbrains.kotlin.codegen.FrameMapBase:26` |

##### `preprocessNodeBeforeInline(MethodNode, Map)` (`org.jetbrains.kotlin.codegen.inline.MethodInliner`)

|     % |  Time | Contentions | Location                                                |
| ----: | ----: | ----------: | ------------------------------------------------------- |
| 73.5% | 2.9ms |           2 | `org.jetbrains.kotlin.codegen.inline.MethodInliner:801` |
| 21.3% | 0.8ms |           3 | `org.jetbrains.kotlin.codegen.inline.MethodInliner:798` |
|  5.3% | 0.2ms |           1 | `org.jetbrains.kotlin.codegen.inline.MethodInliner:793` |

##### `markPlacesForInlineAndRemoveInlinable(MethodNode, Map, int)` (`org.jetbrains.kotlin.codegen.inline.MethodInliner`)

|     % |   Time | Contentions | Location                                                |
| ----: | -----: | ----------: | ------------------------------------------------------- |
| 56.8% |  2.1ms |           1 | `org.jetbrains.kotlin.codegen.inline.MethodInliner:612` |
| 30.9% |  1.2ms |           1 | `org.jetbrains.kotlin.codegen.inline.MethodInliner:697` |
| 11.0% |  0.4ms |           1 | `org.jetbrains.kotlin.codegen.inline.MethodInliner:762` |
|  1.3% | 47.4µs |           1 | `org.jetbrains.kotlin.codegen.inline.MethodInliner:640` |

##### `newVisitor(JvmDeclarationOrigin, Type, List)` (`org.jetbrains.kotlin.codegen.ClassFileFactory`)

|      % |  Time | Contentions | Location                                           |
| -----: | ----: | ----------: | -------------------------------------------------- |
| 100.0% | 3.7ms |           9 | `org.jetbrains.kotlin.codegen.ClassFileFactory:47` |

##### `<init>(TypeSystemCommonBackendContext, Map, boolean, Function2)` (`org.jetbrains.kotlin.codegen.inline.TypeParameterMappings`)

|     % |  Time | Contentions | Location                                                        |
| ----: | ----: | ----------: | --------------------------------------------------------------- |
| 79.4% | 2.6ms |           4 | `org.jetbrains.kotlin.codegen.inline.TypeParameterMappings:448` |
| 20.6% | 0.7ms |           2 | `org.jetbrains.kotlin.codegen.inline.TypeParameterMappings:450` |

#### Callers

Callers with the largest contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|     % |   Time | Contentions | Caller                                      | Location                                                             |
| ----: | -----: | ----------: | ------------------------------------------- | -------------------------------------------------------------------- |
| 93.0% |  1.06s |          89 | `generateMethod(IrFunction, SourceMapper)`  | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`              |
|  7.0% | 79.9ms |           2 | `compileInlineFunction(JvmMethodSignature)` | `org.jetbrains.kotlin.backend.jvm.codegen.IrSourceCompilerForInline` |

##### `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

|      % |   Time | Contentions | Caller                                  | Location                                                   |
| -----: | -----: | ----------: | --------------------------------------- | ---------------------------------------------------------- |
| 100.0% | 51.4ms |          45 | `generate(ReifiedTypeParametersUsages)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `newClassBuilder(JvmDeclarationOrigin)` (`org.jetbrains.kotlin.codegen.ClassBuilderFactories$1`)

|      % |   Time | Contentions | Caller                                  | Location                                                                    |
| -----: | -----: | ----------: | --------------------------------------- | --------------------------------------------------------------------------- |
| 100.0% | 19.6ms |          14 | `newClassBuilder(JvmDeclarationOrigin)` | `org.jetbrains.kotlin.codegen.optimization.OptimizationClassBuilderFactory` |

##### `<init>(IrClass, JvmBackendContext, IrFunction, List)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|      % |   Time | Contentions | Caller                                                                           | Location                                                |
| -----: | -----: | ----------: | -------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% | 13.7ms |          40 | `<init>(IrClass, JvmBackendContext, IrFunction, List, DefaultConstructorMarker)` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |

##### `makeFirMetadataSerializerForIrClass(FirSession, JvmBackendContext, IrClass, JvmSerializationBindings, Fir2IrComponents, MetadataSerializer, Set)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`)

|      % |   Time | Contentions | Caller                                                                                             | Location                                                      |
| -----: | -----: | ----------: | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| 100.0% | 13.3ms |          10 | `createSerializer(JvmBackendContext, IrClass, Type, JvmSerializationBindings, MetadataSerializer)` | `org.jetbrains.kotlin.fir.backend.jvm.FirJvmBackendExtension` |

##### `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)

|      % |   Time | Contentions | Caller                                                                                                            | Location                                               |
| -----: | -----: | ----------: | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% | 12.8ms |          21 | `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory` |

##### `<init>(MethodVisitor, boolean, GenerationState, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`)

|      % |   Time | Contentions | Caller                                                                   | Location                                                             |
| -----: | -----: | ----------: | ------------------------------------------------------------------------ | -------------------------------------------------------------------- |
| 100.0% | 12.1ms |          12 | `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` | `org.jetbrains.kotlin.codegen.optimization.OptimizationClassBuilder` |

##### `getOrCreateCallGenerator(IrFunctionAccessExpression, BlockInfo, JvmMethodSignature)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|      % |  Time | Contentions | Caller                         | Location                                                     |
| -----: | ----: | ----------: | ------------------------------ | ------------------------------------------------------------ |
| 100.0% | 9.4ms |          26 | `visitCall(IrCall, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `genValueAndPut(IrValueParameter, IrExpression, Type, ExpressionCodegen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`)

|      % |  Time | Contentions | Caller                                                                                                           | Location                                                     |
| -----: | ----: | ----------: | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 100.0% | 8.0ms |          15 | `visitCall$handleParameter(IrCallGenerator, ExpressionCodegen, BlockInfo, IrValueParameter, IrExpression, Type)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `doInline(MethodNode)` (`org.jetbrains.kotlin.codegen.inline.MethodInliner`)

|      % |  Time | Contentions | Caller                                                         | Location                                            |
| -----: | ----: | ----------: | -------------------------------------------------------------- | --------------------------------------------------- |
| 100.0% | 7.0ms |          12 | `doInline(MethodVisitor, LocalVarRemapper, boolean, Map, int)` | `org.jetbrains.kotlin.codegen.inline.MethodInliner` |

##### `getSourceMapper(JvmBackendContext, IrClass)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt`)

|      % |  Time | Contentions | Caller                                                 | Location                                                |
| -----: | ----: | ----------: | ------------------------------------------------------ | ------------------------------------------------------- |
| 100.0% | 6.2ms |          16 | `<init>(IrClass, JvmBackendContext, IrFunction, List)` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |

##### `makeElementSerializer(MetadataSource, FirSession, ScopeSession, FirJvmSerializerExtension, AbstractTypeApproximator, MetadataSerializer, LanguageVersionSettings)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`)

|      % |  Time | Contentions | Caller                                                                                                                                             | Location                                                       |
| -----: | ----: | ----------: | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| 100.0% | 6.0ms |           5 | `makeFirMetadataSerializerForIrClass(FirSession, JvmBackendContext, IrClass, JvmSerializationBindings, Fir2IrComponents, MetadataSerializer, Set)` | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt` |

##### `<init>(ClassReader, int)` (`org.jetbrains.org.objectweb.asm.ClassWriter`)

|      % |  Time | Contentions | Caller        | Location                                      |
| -----: | ----: | ----------: | ------------- | --------------------------------------------- |
| 100.0% | 5.9ms |          18 | `<init>(int)` | `org.jetbrains.org.objectweb.asm.ClassWriter` |

##### `newValue(Type)` (`org.jetbrains.org.objectweb.asm.tree.analysis.SourceInterpreter`)

|      % |  Time | Contentions | Caller           | Location                                                          |
| -----: | ----: | ----------: | ---------------- | ----------------------------------------------------------------- |
| 100.0% | 5.1ms |           1 | `newValue(Type)` | `org.jetbrains.org.objectweb.asm.tree.analysis.SourceInterpreter` |

##### `analyzeMethodNodeWithInterpreter$lambda$0(int, int)` (`org.jetbrains.kotlin.codegen.inline.MethodInlinerUtilKt`)

|      % |  Time | Contentions | Caller                   | Location                                                                             |
| -----: | ----: | ----------: | ------------------------ | ------------------------------------------------------------------------------------ |
| 100.0% | 4.1ms |           2 | `invoke(Object, Object)` | `org.jetbrains.kotlin.codegen.inline.MethodInlinerUtilKt$$Lambda.0x00000090018e7350` |

##### `<init>()` (`org.jetbrains.kotlin.codegen.FrameMapBase`)

|      % |  Time | Contentions | Caller     | Location                                              |
| -----: | ----: | ----------: | ---------- | ----------------------------------------------------- |
| 100.0% | 3.9ms |           8 | `<init>()` | `org.jetbrains.kotlin.backend.jvm.codegen.IrFrameMap` |

##### `preprocessNodeBeforeInline(MethodNode, Map)` (`org.jetbrains.kotlin.codegen.inline.MethodInliner`)

|      % |  Time | Contentions | Caller                                                        | Location                                            |
| -----: | ----: | ----------: | ------------------------------------------------------------- | --------------------------------------------------- |
| 100.0% | 3.9ms |           6 | `markPlacesForInlineAndRemoveInlinable(MethodNode, Map, int)` | `org.jetbrains.kotlin.codegen.inline.MethodInliner` |

##### `markPlacesForInlineAndRemoveInlinable(MethodNode, Map, int)` (`org.jetbrains.kotlin.codegen.inline.MethodInliner`)

|      % |  Time | Contentions | Caller                                                         | Location                                            |
| -----: | ----: | ----------: | -------------------------------------------------------------- | --------------------------------------------------- |
| 100.0% | 3.7ms |           4 | `doInline(MethodVisitor, LocalVarRemapper, boolean, Map, int)` | `org.jetbrains.kotlin.codegen.inline.MethodInliner` |

##### `newVisitor(JvmDeclarationOrigin, Type, List)` (`org.jetbrains.kotlin.codegen.ClassFileFactory`)

|      % |  Time | Contentions | Caller                                                 | Location                                                |
| -----: | ----: | ----------: | ------------------------------------------------------ | ------------------------------------------------------- |
| 100.0% | 3.7ms |           9 | `<init>(IrClass, JvmBackendContext, IrFunction, List)` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |

##### `<init>(TypeSystemCommonBackendContext, Map, boolean, Function2)` (`org.jetbrains.kotlin.codegen.inline.TypeParameterMappings`)

|      % |  Time | Contentions | Caller                                                                                | Location                                                     |
| -----: | ----: | ----------: | ------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 100.0% | 3.3ms |           6 | `getOrCreateCallGenerator(IrFunctionAccessExpression, BlockInfo, JvmMethodSignature)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

### Total time

Functions with the most time blocked within the function and its callees.

|      % |    Time | Contentions | Function                                                                                                          | Location                                                                          |
| -----: | ------: | ----------: | ----------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| 100.0% |   1.51s |         908 | `runWorker(ThreadPoolExecutor$Worker)`                                                                            | `java.util.concurrent.ThreadPoolExecutor`                                         |
| 100.0% |   1.51s |         908 | `run()`                                                                                                           | `java.util.concurrent.ThreadPoolExecutor$Worker`                                  |
| 100.0% |   1.51s |         908 | `runWith(Object, Runnable)`                                                                                       | `java.lang.Thread`                                                                |
| 100.0% |   1.51s |         908 | `run()`                                                                                                           | `java.lang.Thread`                                                                |
|  99.8% |   1.50s |         899 | `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`                            |
|  99.8% |   1.50s |         899 | `run()`                                                                                                           | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000900188f020` |
|  99.8% |   1.50s |         899 | `run()`                                                                                                           | `java.util.concurrent.CompletableFuture$AsyncRun`                                 |
|  99.6% |   1.50s |         870 | `generateFile(JvmBackendContext, IrFile, List, boolean)`                                                          | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`                            |
|  94.4% |   1.42s |         671 | `generate()`                                                                                                      | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                           |
|  93.0% |   1.40s |         615 | `generateMethod(IrFunction, SourceMapper)`                                                                        | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                           |
|  87.8% |   1.32s |         476 | `generateMethodNode(IrFunction)`                                                                                  | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                           |
|  17.1% | 258.4ms |         387 | `doGenerate(ReifiedTypeParametersUsages)`                                                                         | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`                        |
|  17.1% | 258.4ms |         387 | `generate(ReifiedTypeParametersUsages)`                                                                           | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`                        |
|  17.1% | 258.4ms |         387 | `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)`                                     | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`                        |
|  11.1% | 168.5ms |         204 | `generate()`                                                                                                      | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
|  11.0% | 166.4ms |         187 | `visitStatementContainer(IrStatementContainer, BlockInfo)`                                                        | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
|  11.0% | 166.4ms |         187 | `visitBlockBody(IrBlockBody, BlockInfo)`                                                                          | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
|  11.0% | 166.4ms |         187 | `visitBlockBody(IrBlockBody, Object)`                                                                             | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
|  11.0% | 166.4ms |         187 | `accept(IrVisitor, Object)`                                                                                       | `org.jetbrains.kotlin.ir.expressions.IrBlockBody`                                 |
|  10.8% | 163.9ms |         176 | `visitReturn(IrReturn, BlockInfo)`                                                                                | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Ours

|     % |    Time | Contentions | Function                                                                                                          | Location                                                                          |
| ----: | ------: | ----------: | ----------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| 99.8% |   1.50s |         899 | `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`                            |
| 99.8% |   1.50s |         899 | `run()`                                                                                                           | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000900188f020` |
| 99.6% |   1.50s |         870 | `generateFile(JvmBackendContext, IrFile, List, boolean)`                                                          | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`                            |
| 94.4% |   1.42s |         671 | `generate()`                                                                                                      | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                           |
| 93.0% |   1.40s |         615 | `generateMethod(IrFunction, SourceMapper)`                                                                        | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                           |
| 87.8% |   1.32s |         476 | `generateMethodNode(IrFunction)`                                                                                  | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                           |
| 17.1% | 258.4ms |         387 | `doGenerate(ReifiedTypeParametersUsages)`                                                                         | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`                        |
| 17.1% | 258.4ms |         387 | `generate(ReifiedTypeParametersUsages)`                                                                           | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`                        |
| 17.1% | 258.4ms |         387 | `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)`                                     | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`                        |
| 11.1% | 168.5ms |         204 | `generate()`                                                                                                      | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
| 11.0% | 166.4ms |         187 | `visitStatementContainer(IrStatementContainer, BlockInfo)`                                                        | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
| 11.0% | 166.4ms |         187 | `visitBlockBody(IrBlockBody, BlockInfo)`                                                                          | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
| 11.0% | 166.4ms |         187 | `visitBlockBody(IrBlockBody, Object)`                                                                             | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
| 11.0% | 166.4ms |         187 | `accept(IrVisitor, Object)`                                                                                       | `org.jetbrains.kotlin.ir.expressions.IrBlockBody`                                 |
| 10.8% | 163.9ms |         176 | `visitReturn(IrReturn, BlockInfo)`                                                                                | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
| 10.8% | 163.9ms |         176 | `visitReturn(IrReturn, Object)`                                                                                   | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
| 10.8% | 163.9ms |         176 | `accept(IrVisitor, Object)`                                                                                       | `org.jetbrains.kotlin.ir.expressions.IrReturn`                                    |
| 10.4% | 156.9ms |         155 | `visitCall(IrCall, BlockInfo)`                                                                                    | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
| 10.4% | 156.9ms |         155 | `visitCall(IrCall, Object)`                                                                                       | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
| 10.4% | 156.9ms |         155 | `accept(IrVisitor, Object)`                                                                                       | `org.jetbrains.kotlin.ir.expressions.IrCall`                                      |

#### Callers

Callers with the largest contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`)

|      % |  Time | Contentions | Caller  | Location                                         |
| -----: | ----: | ----------: | ------- | ------------------------------------------------ |
| 100.0% | 1.51s |         908 | `run()` | `java.util.concurrent.ThreadPoolExecutor$Worker` |

##### `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`)

|      % |  Time | Contentions | Caller                      | Location           |
| -----: | ----: | ----------: | --------------------------- | ------------------ |
| 100.0% | 1.51s |         908 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `runWith(Object, Runnable)` (`java.lang.Thread`)

|      % |  Time | Contentions | Caller  | Location           |
| -----: | ----: | ----------: | ------- | ------------------ |
| 100.0% | 1.51s |         908 | `run()` | `java.lang.Thread` |

##### `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)

|      % |  Time | Contentions | Caller  | Location                                                                          |
| -----: | ----: | ----------: | ------- | --------------------------------------------------------------------------------- |
| 100.0% | 1.50s |         899 | `run()` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000900188f020` |

##### `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000900188f020`)

|      % |  Time | Contentions | Caller  | Location                                          |
| -----: | ----: | ----------: | ------- | ------------------------------------------------- |
| 100.0% | 1.50s |         899 | `run()` | `java.util.concurrent.CompletableFuture$AsyncRun` |

##### `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`)

|      % |  Time | Contentions | Caller                                 | Location                                  |
| -----: | ----: | ----------: | -------------------------------------- | ----------------------------------------- |
| 100.0% | 1.50s |         899 | `runWorker(ThreadPoolExecutor$Worker)` | `java.util.concurrent.ThreadPoolExecutor` |

##### `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)

|      % |  Time | Contentions | Caller                                                                                                            | Location                                               |
| -----: | ----: | ----------: | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% | 1.50s |         870 | `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory` |

##### `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|      % |  Time | Contentions | Caller                                                   | Location                                               |
| -----: | ----: | ----------: | -------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% | 1.42s |         671 | `generateFile(JvmBackendContext, IrFile, List, boolean)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory` |

##### `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|      % |  Time | Contentions | Caller       | Location                                                |
| -----: | ----: | ----------: | ------------ | ------------------------------------------------------- |
| 100.0% | 1.40s |         615 | `generate()` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |

##### `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|      % |   Time | Contentions | Caller                                      | Location                                                             |
| -----: | -----: | ----------: | ------------------------------------------- | -------------------------------------------------------------------- |
| 100.0% |  1.32s |         476 | `generateMethod(IrFunction, SourceMapper)`  | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`              |
|   6.0% | 79.9ms |           2 | `compileInlineFunction(JvmMethodSignature)` | `org.jetbrains.kotlin.backend.jvm.codegen.IrSourceCompilerForInline` |

##### `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

|      % |    Time | Contentions | Caller                                  | Location                                                   |
| -----: | ------: | ----------: | --------------------------------------- | ---------------------------------------------------------- |
| 100.0% | 258.4ms |         387 | `generate(ReifiedTypeParametersUsages)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `generate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

|      % |    Time | Contentions | Caller                                                                        | Location                                                   |
| -----: | ------: | ----------: | ----------------------------------------------------------------------------- | ---------------------------------------------------------- |
| 100.0% | 258.4ms |         387 | `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

|      % |    Time | Contentions | Caller                           | Location                                                |
| -----: | ------: | ----------: | -------------------------------- | ------------------------------------------------------- |
| 100.0% | 258.4ms |         387 | `generateMethodNode(IrFunction)` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |

##### `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|      % |    Time | Contentions | Caller                                    | Location                                                   |
| -----: | ------: | ----------: | ----------------------------------------- | ---------------------------------------------------------- |
| 100.0% | 168.5ms |         204 | `doGenerate(ReifiedTypeParametersUsages)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|      % |    Time | Contentions | Caller                                                       | Location                                                     |
| -----: | ------: | ----------: | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 100.0% | 166.4ms |         187 | `visitBlockBody(IrBlockBody, BlockInfo)`                     | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |
|   1.2% |   2.0ms |          10 | `visitContainerExpression(IrContainerExpression, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitBlockBody(IrBlockBody, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|      % |    Time | Contentions | Caller                                | Location                                                     |
| -----: | ------: | ----------: | ------------------------------------- | ------------------------------------------------------------ |
| 100.0% | 166.4ms |         187 | `visitBlockBody(IrBlockBody, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitBlockBody(IrBlockBody, Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|      % |    Time | Contentions | Caller                      | Location                                          |
| -----: | ------: | ----------: | --------------------------- | ------------------------------------------------- |
| 100.0% | 166.4ms |         187 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrBlockBody` |

##### `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`)

|      % |    Time | Contentions | Caller       | Location                                                     |
| -----: | ------: | ----------: | ------------ | ------------------------------------------------------------ |
| 100.0% | 166.4ms |         187 | `generate()` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|      % |    Time | Contentions | Caller                          | Location                                                     |
| -----: | ------: | ----------: | ------------------------------- | ------------------------------------------------------------ |
| 100.0% | 163.9ms |         176 | `visitReturn(IrReturn, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitReturn(IrReturn, Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|      % |    Time | Contentions | Caller                      | Location                                       |
| -----: | ------: | ----------: | --------------------------- | ---------------------------------------------- |
| 100.0% | 163.9ms |         176 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrReturn` |

##### `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`)

|      % |    Time | Contentions | Caller                                                     | Location                                                     |
| -----: | ------: | ----------: | ---------------------------------------------------------- | ------------------------------------------------------------ |
| 100.0% | 163.9ms |         176 | `visitStatementContainer(IrStatementContainer, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitCall(IrCall, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|      % |    Time | Contentions | Caller                      | Location                                                     |
| -----: | ------: | ----------: | --------------------------- | ------------------------------------------------------------ |
| 100.0% | 156.9ms |         155 | `visitCall(IrCall, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitCall(IrCall, Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|      % |    Time | Contentions | Caller                      | Location                                     |
| -----: | ------: | ----------: | --------------------------- | -------------------------------------------- |
| 100.0% | 156.9ms |         155 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrCall` |

##### `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`)

|     % |    Time | Contentions | Caller                                                     | Location                                                     |
| ----: | ------: | ----------: | ---------------------------------------------------------- | ------------------------------------------------------------ |
| 78.4% | 123.0ms |          91 | `visitWhen(IrWhen, BlockInfo)`                             | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |
| 21.3% |  33.4ms |          62 | `visitReturn(IrReturn, BlockInfo)`                         | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |
|  0.2% |   0.4ms |           1 | `visitTypeOperator(IrTypeOperatorCall, BlockInfo)`         | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |
| <0.1% |   0.1ms |           1 | `visitStatementContainer(IrStatementContainer, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

#### Callees

Callees with the largest contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`)

|     % |  Time | Contentions | Callee      | Location                                          |
| ----: | ----: | ----------: | ----------- | ------------------------------------------------- |
| 99.8% | 1.50s |         899 | `run()`     | `java.util.concurrent.CompletableFuture$AsyncRun` |
|  0.2% | 3.2ms |           9 | `getTask()` | `java.util.concurrent.ThreadPoolExecutor`         |

##### `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`)

|      % |  Time | Contentions | Callee                                 | Location                                  |
| -----: | ----: | ----------: | -------------------------------------- | ----------------------------------------- |
| 100.0% | 1.51s |         908 | `runWorker(ThreadPoolExecutor$Worker)` | `java.util.concurrent.ThreadPoolExecutor` |

##### `runWith(Object, Runnable)` (`java.lang.Thread`)

|      % |  Time | Contentions | Callee  | Location                                         |
| -----: | ----: | ----------: | ------- | ------------------------------------------------ |
| 100.0% | 1.51s |         908 | `run()` | `java.util.concurrent.ThreadPoolExecutor$Worker` |

##### `run()` (`java.lang.Thread`)

|      % |  Time | Contentions | Callee                      | Location           |
| -----: | ----: | ----------: | --------------------------- | ------------------ |
| 100.0% | 1.51s |         908 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)

|     % |  Time | Contentions | Callee                                                   | Location                                               |
| ----: | ----: | ----------: | -------------------------------------------------------- | ------------------------------------------------------ |
| 99.8% | 1.50s |         870 | `generateFile(JvmBackendContext, IrFile, List, boolean)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory` |
|  0.2% | 3.1ms |          29 | `getUnitStats()`                                         | `org.jetbrains.kotlin.util.PerformanceManager`         |

##### `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000900188f020`)

|      % |  Time | Contentions | Callee                                                                                                            | Location                                               |
| -----: | ----: | ----------: | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% | 1.50s |         899 | `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory` |

##### `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`)

|      % |  Time | Contentions | Callee  | Location                                                                          |
| -----: | ----: | ----------: | ------- | --------------------------------------------------------------------------------- |
| 100.0% | 1.50s |         899 | `run()` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000900188f020` |

##### `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)

|     % |   Time | Contentions | Callee                                                                                                   | Location                                                          |
| ----: | -----: | ----------: | -------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| 94.8% |  1.42s |         671 | `generate()`                                                                                             | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`           |
|  4.4% | 65.6ms |         178 | `getOrCreate$default(ClassCodegen$Companion, IrClass, JvmBackendContext, List, IrFunction, int, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$Companion` |

##### `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|     % |   Time | Contentions | Callee                                      | Location                                                |
| ----: | -----: | ----------: | ------------------------------------------- | ------------------------------------------------------- |
| 98.5% |  1.40s |         615 | `generateMethod(IrFunction, SourceMapper)`  | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |
|  1.4% | 19.6ms |          46 | `generateAnnotations()`                     | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |
|  0.1% |  0.8ms |           2 | `generateField(IrField)`                    | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |
|  0.1% |  0.7ms |           1 | `visitSMAP(SourceMapper, boolean, boolean)` | `org.jetbrains.kotlin.codegen.DelegatingClassBuilder`   |
| <0.1% |  0.4ms |           1 | `generateInnerAndOuterClasses()`            | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |

##### `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|     % |   Time | Contentions | Callee                                                                   | Location                                                   |
| ----: | -----: | ----------: | ------------------------------------------------------------------------ | ---------------------------------------------------------- |
| 94.4% |  1.32s |         476 | `generateMethodNode(IrFunction)`                                         | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`    |
|  2.2% | 31.2ms |          72 | `accept(MethodVisitor)`                                                  | `org.jetbrains.org.objectweb.asm.tree.MethodNode`          |
|  1.6% | 23.1ms |          25 | `getMetadataSerializer()`                                                | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`    |
|  1.3% | 17.7ms |          22 | `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` | `org.jetbrains.kotlin.codegen.DelegatingClassBuilder`      |
|  0.2% |  3.0ms |           4 | `preprocessSuspendMarkers(MethodNode, boolean, boolean)`                 | `org.jetbrains.kotlin.codegen.inline.InlineCodegenUtilsKt` |

##### `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|     % |    Time | Contentions | Callee                                                                        | Location                                                   |
| ----: | ------: | ----------: | ----------------------------------------------------------------------------- | ---------------------------------------------------------- |
| 19.5% | 258.4ms |         387 | `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

|     % |    Time | Contentions | Callee                                    | Location                                                         |
| ----: | ------: | ----------: | ----------------------------------------- | ---------------------------------------------------------------- |
| 65.2% | 168.5ms |         204 | `generate()`                              | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`     |
|  3.2% |   8.3ms |          28 | `calculateMethodFlags(IrFunction)`        | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`       |
|  2.8% |   7.2ms |          33 | `mapSignatureWithGeneric(IrFunction)`     | `org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper` |
|  2.3% |   5.9ms |          11 | `createFrameMapWithReceivers(IrFunction)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`       |
|  1.3% |   3.4ms |          19 | `wrapWithMaxLocalCalc(MethodNode)`        | `org.jetbrains.kotlin.codegen.inline.InlineCodegenUtilsKt`       |

##### `generate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

|      % |    Time | Contentions | Callee                                    | Location                                                   |
| -----: | ------: | ----------: | ----------------------------------------- | ---------------------------------------------------------- |
| 100.0% | 258.4ms |         387 | `doGenerate(ReifiedTypeParametersUsages)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

|      % |    Time | Contentions | Callee                                  | Location                                                   |
| -----: | ------: | ----------: | --------------------------------------- | ---------------------------------------------------------- |
| 100.0% | 258.4ms |         387 | `generate(ReifiedTypeParametersUsages)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|     % |    Time | Contentions | Callee                                             | Location                                                     |
| ----: | ------: | ----------: | -------------------------------------------------- | ------------------------------------------------------------ |
| 98.7% | 166.4ms |         187 | `accept(IrVisitor, Object)`                        | `org.jetbrains.kotlin.ir.expressions.IrBlockBody`            |
|  0.4% |   0.7ms |           5 | `generateNonNullAssertions()`                      | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |
|  0.3% |   0.6ms |           6 | `markNewLabel()`                                   | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |
|  0.1% |   0.1ms |           1 | `writeParameterInLocalVariableTable(Label, Label)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|     % |    Time | Contentions | Callee                            | Location                                                   |
| ----: | ------: | ----------: | --------------------------------- | ---------------------------------------------------------- |
| 98.5% | 163.9ms |         176 | `accept(IrVisitor, Object)`       | `org.jetbrains.kotlin.ir.expressions.IrReturn`             |
|  0.9% |   1.6ms |           7 | `accept(IrVisitor, Object)`       | `org.jetbrains.kotlin.ir.expressions.IrTypeOperatorCall`   |
|  0.3% |   0.6ms |           1 | `accept(IrVisitor, Object)`       | `org.jetbrains.kotlin.ir.declarations.IrVariable`          |
|  0.3% |   0.4ms |           3 | `getUnitValue(ExpressionCodegen)` | `org.jetbrains.kotlin.backend.jvm.codegen.PromisedValueKt` |
|  0.2% |   0.4ms |           2 | `accept(IrVisitor, Object)`       | `org.jetbrains.kotlin.ir.expressions.IrWhileLoop`          |

##### `visitBlockBody(IrBlockBody, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|      % |    Time | Contentions | Callee                                                     | Location                                                     |
| -----: | ------: | ----------: | ---------------------------------------------------------- | ------------------------------------------------------------ |
| 100.0% | 166.4ms |         187 | `visitStatementContainer(IrStatementContainer, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitBlockBody(IrBlockBody, Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|      % |    Time | Contentions | Callee                                   | Location                                                     |
| -----: | ------: | ----------: | ---------------------------------------- | ------------------------------------------------------------ |
| 100.0% | 166.4ms |         187 | `visitBlockBody(IrBlockBody, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`)

|      % |    Time | Contentions | Callee                                | Location                                                     |
| -----: | ------: | ----------: | ------------------------------------- | ------------------------------------------------------------ |
| 100.0% | 166.4ms |         187 | `visitBlockBody(IrBlockBody, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|     % |    Time | Contentions | Callee                      | Location                                                 |
| ----: | ------: | ----------: | --------------------------- | -------------------------------------------------------- |
| 78.6% | 128.8ms |         109 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrWhen`             |
| 20.4% |  33.4ms |          62 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrCall`             |
|  1.1% |   1.8ms |           5 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrTypeOperatorCall` |

##### `visitReturn(IrReturn, Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|      % |    Time | Contentions | Callee                             | Location                                                     |
| -----: | ------: | ----------: | ---------------------------------- | ------------------------------------------------------------ |
| 100.0% | 163.9ms |         176 | `visitReturn(IrReturn, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`)

|      % |    Time | Contentions | Callee                          | Location                                                     |
| -----: | ------: | ----------: | ------------------------------- | ------------------------------------------------------------ |
| 100.0% | 163.9ms |         176 | `visitReturn(IrReturn, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitCall(IrCall, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|     % |    Time | Contentions | Callee                                                                                                           | Location                                                         |
| ----: | ------: | ----------: | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| 81.0% | 127.1ms |          85 | `genCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)`                              | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCallGenerator` |
|  9.0% |  14.1ms |          27 | `visitCall$handleParameter(IrCallGenerator, ExpressionCodegen, BlockInfo, IrValueParameter, IrExpression, Type)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`     |
|  8.7% |  13.7ms |          36 | `getOrCreateCallGenerator(IrFunctionAccessExpression, BlockInfo, JvmMethodSignature)`                            | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`     |
|  0.9% |   1.4ms |           4 | `mapToCallableMethod(IrCall, IrFunction)`                                                                        | `org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper` |
|  0.2% |   0.4ms |           1 | `invoke(IrFunctionAccessExpression, ExpressionCodegen, BlockInfo)`                                               | `org.jetbrains.kotlin.backend.jvm.intrinsics.UnsafeCoerce`       |

##### `visitCall(IrCall, Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|      % |    Time | Contentions | Callee                         | Location                                                     |
| -----: | ------: | ----------: | ------------------------------ | ------------------------------------------------------------ |
| 100.0% | 156.9ms |         155 | `visitCall(IrCall, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`)

|      % |    Time | Contentions | Callee                      | Location                                                     |
| -----: | ------: | ----------: | --------------------------- | ------------------------------------------------------------ |
| 100.0% | 156.9ms |         155 | `visitCall(IrCall, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

## Hottest call stacks

Call stacks with the most time blocked in their leaf frame.

Common call stack: `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000900188f020`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`) ← `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`) ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`

|     % |   Time | Contentions | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ----: | -----: | ----------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 70.7% |  1.06s |          89 | `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  5.3% | 79.9ms |           2 | `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `compileInlineFunction(JvmMethodSignature)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrSourceCompilerForInline`) ← `genInlineCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`) ← `genCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCallGenerator`) ← `visitCall(IrCall, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitCall(IrCall, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`) ← `visitWhen(IrWhen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitWhen(IrWhen, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrWhen`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  3.4% | 51.4ms |          45 | `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  1.3% | 19.6ms |          14 | `newClassBuilder(JvmDeclarationOrigin)` (`org.jetbrains.kotlin.codegen.ClassBuilderFactories$1`) ← `newClassBuilder(JvmDeclarationOrigin)` (`org.jetbrains.kotlin.codegen.optimization.OptimizationClassBuilderFactory`) ← `newClassBuilder(JvmDeclarationOrigin)` ← `newClassBuilder(JvmDeclarationOrigin)` (`org.jetbrains.kotlin.codegen.ClassNameCollectionClassBuilderFactory`) ← `newClassBuilder(JvmDeclarationOrigin)` ← `newVisitor(JvmDeclarationOrigin, Type, List)` (`org.jetbrains.kotlin.codegen.ClassFileFactory`) ← `<init>(IrClass, JvmBackendContext, IrFunction, List)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `<init>(IrClass, JvmBackendContext, IrFunction, List, DefaultConstructorMarker)` ← `getOrCreate(IrClass, JvmBackendContext, List, IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$Companion`) ← `getOrCreate$default(ClassCodegen$Companion, IrClass, JvmBackendContext, List, IrFunction, int, Object)` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  0.9% | 13.7ms |          40 | `<init>(IrClass, JvmBackendContext, IrFunction, List)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `<init>(IrClass, JvmBackendContext, IrFunction, List, DefaultConstructorMarker)` ← `getOrCreate(IrClass, JvmBackendContext, List, IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$Companion`) ← `getOrCreate$default(ClassCodegen$Companion, IrClass, JvmBackendContext, List, IrFunction, int, Object)` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  0.9% | 13.3ms |          10 | `makeFirMetadataSerializerForIrClass(FirSession, JvmBackendContext, IrClass, JvmSerializationBindings, Fir2IrComponents, MetadataSerializer, Set)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`) ← `createSerializer(JvmBackendContext, IrClass, Type, JvmSerializationBindings, MetadataSerializer)` (`org.jetbrains.kotlin.fir.backend.jvm.FirJvmBackendExtension`) ← `metadataSerializer_delegate$lambda$0(ClassCodegen)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `invoke()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$$Lambda.0x00000090018962e0`) ← `getValue()` (`kotlin.SynchronizedLazyImpl`) ← `getMetadataSerializer()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  0.8% | 12.8ms |          21 | `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  0.8% | 12.1ms |          12 | `<init>(MethodVisitor, boolean, GenerationState, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`) ← `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.optimization.OptimizationClassBuilder`) ← `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.DelegatingClassBuilder`) ← `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  0.4% |  6.2ms |          16 | `getSourceMapper(JvmBackendContext, IrClass)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt`) ← `<init>(IrClass, JvmBackendContext, IrFunction, List)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `<init>(IrClass, JvmBackendContext, IrFunction, List, DefaultConstructorMarker)` ← `getOrCreate(IrClass, JvmBackendContext, List, IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$Companion`) ← `getOrCreate$default(ClassCodegen$Companion, IrClass, JvmBackendContext, List, IrFunction, int, Object)` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  0.4% |  6.0ms |          17 | `getOrCreateCallGenerator(IrFunctionAccessExpression, BlockInfo, JvmMethodSignature)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitCall(IrCall, BlockInfo)` ← `visitCall(IrCall, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`) ← `visitWhen(IrWhen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitWhen(IrWhen, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrWhen`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  0.4% |  6.0ms |           5 | `makeElementSerializer(MetadataSource, FirSession, ScopeSession, FirJvmSerializerExtension, AbstractTypeApproximator, MetadataSerializer, LanguageVersionSettings)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`) ← `makeFirMetadataSerializerForIrClass(FirSession, JvmBackendContext, IrClass, JvmSerializationBindings, Fir2IrComponents, MetadataSerializer, Set)` ← `createSerializer(JvmBackendContext, IrClass, Type, JvmSerializationBindings, MetadataSerializer)` (`org.jetbrains.kotlin.fir.backend.jvm.FirJvmBackendExtension`) ← `metadataSerializer_delegate$lambda$0(ClassCodegen)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `invoke()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$$Lambda.0x00000090018962e0`) ← `getValue()` (`kotlin.SynchronizedLazyImpl`) ← `getMetadataSerializer()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  0.4% |  5.9ms |          18 | `<init>(ClassReader, int)` (`org.jetbrains.org.objectweb.asm.ClassWriter`) ← `<init>(int)` ← `<init>()` (`org.jetbrains.kotlin.codegen.ClassBuilderFactories$BinaryClassWriter`) ← `newClassBuilder(JvmDeclarationOrigin)` (`org.jetbrains.kotlin.codegen.ClassBuilderFactories$1`) ← `newClassBuilder(JvmDeclarationOrigin)` (`org.jetbrains.kotlin.codegen.optimization.OptimizationClassBuilderFactory`) ← `newClassBuilder(JvmDeclarationOrigin)` ← `newClassBuilder(JvmDeclarationOrigin)` (`org.jetbrains.kotlin.codegen.ClassNameCollectionClassBuilderFactory`) ← `newClassBuilder(JvmDeclarationOrigin)` ← `newVisitor(JvmDeclarationOrigin, Type, List)` (`org.jetbrains.kotlin.codegen.ClassFileFactory`) ← `<init>(IrClass, JvmBackendContext, IrFunction, List)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `<init>(IrClass, JvmBackendContext, IrFunction, List, DefaultConstructorMarker)` ← `getOrCreate(IrClass, JvmBackendContext, List, IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$Companion`) ← `getOrCreate$default(ClassCodegen$Companion, IrClass, JvmBackendContext, List, IrFunction, int, Object)` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  0.4% |  5.9ms |          10 | `genValueAndPut(IrValueParameter, IrExpression, Type, ExpressionCodegen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`) ← `visitCall$handleParameter(IrCallGenerator, ExpressionCodegen, BlockInfo, IrValueParameter, IrExpression, Type)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitCall(IrCall, BlockInfo)` ← `visitCall(IrCall, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`) ← `visitWhen(IrWhen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitWhen(IrWhen, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrWhen`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  0.3% |  5.1ms |           1 | `newValue(Type)` (`org.jetbrains.org.objectweb.asm.tree.analysis.SourceInterpreter`) ← `newValue(Type)` ← `newReturnTypeValue(Type)` (`org.jetbrains.org.objectweb.asm.tree.analysis.Interpreter`) ← `initLocals(Frame)` (`org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer`) ← `analyzeMainLoop()` ← `analyze()` ← `transform()` (`org.jetbrains.kotlin.codegen.optimization.boxing.PopBackwardPropagationTransformer$Transformer`) ← `transform(String, MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.boxing.PopBackwardPropagationTransformer`) ← `transform(String, MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.transformer.CompositeMethodTransformer`) ← `performTransformations(MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`) ← `visitEnd()` (`org.jetbrains.kotlin.codegen.TransformationMethodVisitor`) ← `visitEnd()` (`org.jetbrains.org.objectweb.asm.MethodVisitor`) ← `accept(MethodVisitor)` (`org.jetbrains.org.objectweb.asm.tree.MethodNode`) ← `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  0.3% |  4.2ms |           6 | `doInline(MethodNode)` (`org.jetbrains.kotlin.codegen.inline.MethodInliner`) ← `doInline(MethodVisitor, LocalVarRemapper, boolean, Map, int)` ← `doInline(MethodVisitor, LocalVarRemapper, boolean, Map)` ← `inlineCall(SMAPAndMethodNode, boolean, IrFunctionAccessExpression)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`) ← `genInlineCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` ← `genCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCallGenerator`) ← `visitCall(IrCall, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitCall(IrCall, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`) ← `visitWhen(IrWhen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitWhen(IrWhen, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrWhen`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  0.3% |  3.9ms |           8 | `<init>()` (`org.jetbrains.kotlin.codegen.FrameMapBase`) ← `<init>()` (`org.jetbrains.kotlin.backend.jvm.codegen.IrFrameMap`) ← `createFrameMapWithReceivers(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  0.2% |  3.7ms |           9 | `newVisitor(JvmDeclarationOrigin, Type, List)` (`org.jetbrains.kotlin.codegen.ClassFileFactory`) ← `<init>(IrClass, JvmBackendContext, IrFunction, List)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `<init>(IrClass, JvmBackendContext, IrFunction, List, DefaultConstructorMarker)` ← `getOrCreate(IrClass, JvmBackendContext, List, IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$Companion`) ← `getOrCreate$default(ClassCodegen$Companion, IrClass, JvmBackendContext, List, IrFunction, int, Object)` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  0.2% |  3.4ms |           5 | `preprocessNodeBeforeInline(MethodNode, Map)` (`org.jetbrains.kotlin.codegen.inline.MethodInliner`) ← `markPlacesForInlineAndRemoveInlinable(MethodNode, Map, int)` ← `doInline(MethodVisitor, LocalVarRemapper, boolean, Map, int)` ← `doInline(MethodVisitor, LocalVarRemapper, boolean, Map)` ← `inlineCall(SMAPAndMethodNode, boolean, IrFunctionAccessExpression)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`) ← `genInlineCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` ← `genCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCallGenerator`) ← `visitCall(IrCall, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitCall(IrCall, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`) ← `visitWhen(IrWhen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitWhen(IrWhen, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrWhen`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  0.2% |  3.4ms |           9 | `getOrCreateCallGenerator(IrFunctionAccessExpression, BlockInfo, JvmMethodSignature)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitCall(IrCall, BlockInfo)` ← `visitCall(IrCall, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  0.2% |  3.2ms |           1 | `copyOperation(AbstractInsnNode, TemporaryValsAnalyzer$StoredValue)` (`org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryValsAnalyzer$StoreTrackingInterpreter`) ← `copyOperation(AbstractInsnNode, Value)` ← `execute(AbstractInsnNode, Interpreter)` (`org.jetbrains.kotlin.codegen.optimization.temporaryVals.StoreLoadFrame`) ← `analyzeInstruction(AbstractInsnNode, int, Frame, Frame, Frame)` (`org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer`) ← `analyzeMainLoop()` ← `analyze()` ← `analyze(String, MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryValsAnalyzer`) ← `transform(String, MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer`) ← `preprocessNodeBeforeInline(MethodNode, Map)` (`org.jetbrains.kotlin.codegen.inline.MethodInliner`) ← `markPlacesForInlineAndRemoveInlinable(MethodNode, Map, int)` ← `doInline(MethodVisitor, LocalVarRemapper, boolean, Map, int)` ← `doInline(MethodVisitor, LocalVarRemapper, boolean, Map)` ← `inlineCall(SMAPAndMethodNode, boolean, IrFunctionAccessExpression)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`) ← `genInlineCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` ← `genCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCallGenerator`) ← `visitCall(IrCall, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitCall(IrCall, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) |

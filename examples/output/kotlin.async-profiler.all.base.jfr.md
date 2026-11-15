# Sampling profile

Collected 1,300 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Compiler         | 43.0% |     559 |
| Native           | 38.9% |     506 |
| Ours             | 11.6% |     151 |
| Standard library |  5.7% |      74 |
| JIT              |  0.8% |      10 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
├── … 831 samples (63.9%) Thread::call_run at libjvm.dylib
│   ├── 769 samples (59.2%) JavaThread::thread_main_inner
│   │   └── 768 samples (59.1%) CompileBroker::compiler_thread_loop
│   │       ├── 756 samples (58.2%) CompileBroker::invoke_compiler_on_method
│   │       │   ├── 512 samples (39.4%) C2Compiler::compile_method
│   │       │   │   └── 510 samples (39.2%) Compile::Compile
│   │       │   │       ├── … 1 sample (0.1%, self 1.2% globally) InstanceKlass::find_method_index at libjvm.dylib
│   │       │   │       └── 509 samples (39.2%) 4 more callees, led by (20.7%) Compile::Code_Gen
│   │       │   ├── … 234 samples (18.0%) Compilation::compile_method at libjvm.dylib
│   │       │   │   ├── 213 samples (16.4%) Compilation::compile_java_method
│   │       │   │   │   ├── 78 samples (6.0%) Compilation::build_hir
│   │       │   │   │   │   ├── … 51 samples (3.9%) GraphBuilder::iterate_all_blocks at libjvm.dylib
│   │       │   │   │   │   │   └── … 49 samples (3.8%) GraphBuilder::iterate_bytecodes_for_block at libjvm.dylib
│   │       │   │   │   │   │       ├── 31 samples (2.4%) GraphBuilder::invoke
│   │       │   │   │   │   │       │   ├── … 8 samples (0.6%) ciSignature::ciSignature at libjvm.dylib
│   │       │   │   │   │   │       │   │   └── … 2 samples (0.2%, self 2.3% globally) SymbolTable::do_lookup at libjvm.dylib
│   │       │   │   │   │   │       │   └── 18 samples (1.4%) 2 more callees, led by (1.3%) GraphBuilder::try_inline
│   │       │   │   │   │   │       └── 14 samples (1.1%) 8 more callees, led by (0.5%) GraphBuilder::access_field
│   │       │   │   │   │   └── 21 samples (1.6%) 4 more callees, led by (0.7%) IR::eliminate_null_checks
│   │       │   │   │   └── 135 samples (10.4%) 3 more callees, led by (7.1%) Compilation::emit_lir
│   │       │   │   └── 21 samples (1.6%) 2 more callees, led by (1.5%) ciEnv::register_method
│   │       │   └── 10 samples (0.8%) 5 more callees, led by (0.2%) ciEnv::ciEnv
│   │       └── … 12 samples (0.9%) PlatformMonitor::wait at libjvm.dylib
│   │           ├── 9 samples (0.7%) __psynch_cvwait at libsystem_kernel.dylib
│   │           └── … 3 samples (0.2%, self 1.4% globally) __psynch_mutexwait at libsystem_kernel.dylib
│   └── 62 samples (4.8%) 2 more callees, led by (4.2%) WorkerThread::run
├── 392 samples (30.2%) main(String[]) at org.jetbrains.kotlin.preloading.Preloader
│   └── 392 samples (30.2%) run(String[])
│       ├── … 311 samples (23.9%) exec(PrintStream, Services, MessageRenderer, String[]) at org.jetbrains.kotlin.cli.common.CLICompiler
│       │   └── 307 samples (23.6%) exec(MessageCollector, Services, CommonCompilerArguments)
│       │       ├── … 292 samples (22.5%) invoke(PhaseConfig, PhaserState, LoggingContext, Object) at org.jetbrains.kotlin.config.phaser.NamedCompilerPhase
│       │       │   └── 292 samples (22.5%) 4 more callees, led by (20.6%) phaseBody(LoggingContext, Object) at org.jetbrains.kotlin.cli.pipeline.PipelinePhase
│       │       └── 10 samples (0.8%) <clinit>() at org.jetbrains.kotlin.cli.common.ArgumentsKt …
│       └── 74 samples (5.7%) preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler) at org.jetbrains.kotlin.preloading.ClassPreloadingUtils
│           └── … 74 samples (5.7%) loadAllClassesFromJars(Collection, int, ClassHandler) at org.jetbrains.kotlin.preloading.ClassPreloadingUtils
│               ├── … 61 samples (4.7%) Java_java_util_zip_Inflater_inflateBytesBytes at libzip.dylib
│               │   ├── 50 samples (3.8%) inflate_fast
│               │   └── 11 samples (0.8%, self 0.7%) inflate
│               └── 4 samples (0.3%) toByteArray() at java.io.ByteArrayOutputStream
└── 77 samples (5.9%) 4 more root frames, led by (5.2%) run() at java.lang.Thread
```

## Hottest functions

### Self samples

Functions with the most samples collected within the function body, excluding callees.

|    % | Samples | Function                                                                                                                                                 | Location                   |
| ---: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| 3.9% |      51 | `inflate_fast`                                                                                                                                           | `libzip.dylib`             |
| 2.3% |      30 | `SymbolTable::do_lookup`                                                                                                                                 | `libjvm.dylib`             |
| 1.5% |      20 | `tlv_get_addr`                                                                                                                                           | `libdyld.dylib`            |
| 1.4% |      18 | `__psynch_mutexwait`                                                                                                                                     | `libsystem_kernel.dylib`   |
| 1.2% |      15 | `PhaseChaitin::Split`                                                                                                                                    | `libjvm.dylib`             |
| 1.2% |      15 | `PhaseChaitin::build_ifg_physical`                                                                                                                       | `libjvm.dylib`             |
| 1.2% |      15 | `InstanceKlass::find_method_index`                                                                                                                       | `libjvm.dylib`             |
| 1.1% |      14 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `libjvm.dylib`             |
| 1.0% |      13 | `IndexSetIterator::advance_and_next`                                                                                                                     | `libjvm.dylib`             |
| 0.9% |      12 | `__psynch_cvwait`                                                                                                                                        | `libsystem_kernel.dylib`   |
| 0.8% |      11 | `ciObjectFactory::get_metadata`                                                                                                                          | `libjvm.dylib`             |
| 0.8% |      11 | `_platform_memset`                                                                                                                                       | `libsystem_platform.dylib` |
| 0.7% |       9 | `fwd_copy_again`                                                                                                                                         | `libjvm.dylib`             |
| 0.7% |       9 | `PhaseChaitin::gather_lrg_masks`                                                                                                                         | `libjvm.dylib`             |
| 0.7% |       9 | `PhaseChaitin::elide_copy`                                                                                                                               | `libjvm.dylib`             |
| 0.7% |       9 | `IntervalWalker::walk_to`                                                                                                                                | `libjvm.dylib`             |
| 0.7% |       9 | `sys_icache_invalidate`                                                                                                                                  | `libsystem_platform.dylib` |
| 0.7% |       9 | `inflate`                                                                                                                                                | `libzip.dylib`             |
| 0.6% |       8 | `PhaseIdealLoop::build_loop_late`                                                                                                                        | `libjvm.dylib`             |
| 0.6% |       8 | `Arena::contains`                                                                                                                                        | `libjvm.dylib`             |

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Compiler

|    % | Samples | Function                                             | Location       |
| ---: | ------: | ---------------------------------------------------- | -------------- |
| 1.2% |      15 | `PhaseChaitin::Split`                                | `libjvm.dylib` |
| 1.2% |      15 | `PhaseChaitin::build_ifg_physical`                   | `libjvm.dylib` |
| 1.0% |      13 | `IndexSetIterator::advance_and_next`                 | `libjvm.dylib` |
| 0.8% |      11 | `ciObjectFactory::get_metadata`                      | `libjvm.dylib` |
| 0.7% |       9 | `PhaseChaitin::gather_lrg_masks`                     | `libjvm.dylib` |
| 0.7% |       9 | `PhaseChaitin::elide_copy`                           | `libjvm.dylib` |
| 0.7% |       9 | `IntervalWalker::walk_to`                            | `libjvm.dylib` |
| 0.6% |       8 | `PhaseIdealLoop::build_loop_late`                    | `libjvm.dylib` |
| 0.6% |       8 | `Node_Backward_Iterator::next`                       | `libjvm.dylib` |
| 0.5% |       7 | `PhaseIdealLoop::Dominators`                         | `libjvm.dylib` |
| 0.5% |       7 | `LIR_OpVisitState::visit`                            | `libjvm.dylib` |
| 0.5% |       6 | `PhaseAggressiveCoalesce::insert_copies`             | `libjvm.dylib` |
| 0.5% |       6 | `PhaseIdealLoop::split_if_with_blocks`               | `libjvm.dylib` |
| 0.5% |       6 | `Node::dominates`                                    | `libjvm.dylib` |
| 0.5% |       6 | `PhaseIdealLoop::build_loop_late_post_work`          | `libjvm.dylib` |
| 0.5% |       6 | `LinearScanWalker::free_collect_inactive_fixed`      | `libjvm.dylib` |
| 0.5% |       6 | `LinearScanWalker::split_before_usage`               | `libjvm.dylib` |
| 0.5% |       6 | `PhaseIdealLoop::dom_lca_for_get_late_ctrl_internal` | `libjvm.dylib` |
| 0.5% |       6 | `Node::is_CFG`                                       | `libjvm.dylib` |
| 0.4% |       5 | `PhaseIdealLoop::build_loop_early`                   | `libjvm.dylib` |

##### Native

|    % | Samples | Function                                                                                                                                                 | Location                   |
| ---: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| 3.9% |      51 | `inflate_fast`                                                                                                                                           | `libzip.dylib`             |
| 2.3% |      30 | `SymbolTable::do_lookup`                                                                                                                                 | `libjvm.dylib`             |
| 1.5% |      20 | `tlv_get_addr`                                                                                                                                           | `libdyld.dylib`            |
| 1.4% |      18 | `__psynch_mutexwait`                                                                                                                                     | `libsystem_kernel.dylib`   |
| 1.2% |      15 | `InstanceKlass::find_method_index`                                                                                                                       | `libjvm.dylib`             |
| 1.1% |      14 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `libjvm.dylib`             |
| 0.9% |      12 | `__psynch_cvwait`                                                                                                                                        | `libsystem_kernel.dylib`   |
| 0.8% |      11 | `_platform_memset`                                                                                                                                       | `libsystem_platform.dylib` |
| 0.7% |       9 | `fwd_copy_again`                                                                                                                                         | `libjvm.dylib`             |
| 0.7% |       9 | `sys_icache_invalidate`                                                                                                                                  | `libsystem_platform.dylib` |
| 0.7% |       9 | `inflate`                                                                                                                                                | `libzip.dylib`             |
| 0.6% |       8 | `Arena::contains`                                                                                                                                        | `libjvm.dylib`             |
| 0.6% |       8 | `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>`                                                           | `libjvm.dylib`             |
| 0.5% |       7 | `pthread_jit_write_protect_np`                                                                                                                           | `libsystem_pthread.dylib`  |
| 0.5% |       7 | `_platform_memmove`                                                                                                                                      | `libsystem_platform.dylib` |
| 0.5% |       6 | `bsearch`                                                                                                                                                | `libsystem_c.dylib`        |
| 0.5% |       6 | `resource_allocate_bytes`                                                                                                                                | `libjvm.dylib`             |
| 0.5% |       6 | `__psynch_cvbroad`                                                                                                                                       | `libsystem_kernel.dylib`   |
| 0.4% |       5 | `_platform_memcmp`                                                                                                                                       | `libsystem_platform.dylib` |
| 0.4% |       5 | `ClassFileParser::skip_over_field_signature`                                                                                                             | `libjvm.dylib`             |

##### Ours

|    % | Samples | Function                                                                    | Location                                                                                           |
| ---: | ------: | --------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| 0.2% |       2 | `visitMaxs(int, int)`                                                       | `org.jetbrains.org.objectweb.asm.MethodVisitor`                                                    |
| 0.2% |       2 | `balanceWhiteSpaces()`                                                      | `com.intellij.lang.impl.PsiBuilderImpl`                                                            |
| 0.2% |       2 | `runResolverForNoReceiver(CallInfo, boolean, Continuation)`                 | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolveTask`                                 |
| 0.1% |       1 | `findClass(String)`                                                         | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader`                                           |
| 0.1% |       1 | `insertBefore(AbstractInsnNode, AbstractInsnNode)`                          | `org.jetbrains.org.objectweb.asm.tree.InsnList`                                                    |
| 0.1% |       1 | `functionTypeKind$default(ConeRigidType, FirSession, boolean, int, Object)` | `org.jetbrains.kotlin.fir.types.FunctionalTypeUtilsKt`                                             |
| 0.1% |       1 | `<init>(ClassCodegen)`                                                      | `org.jetbrains.kotlin.backend.jvm.codegen.AnnotationCodegen`                                       |
| 0.1% |       1 | `accept(MethodVisitor)`                                                     | `org.jetbrains.org.objectweb.asm.tree.VarInsnNode`                                                 |
| 0.1% |       1 | `transform(String, MethodNode)`                                             | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer` |
| 0.1% |       1 | `analyze()`                                                                 | `org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer`                                    |
| 0.1% |       1 | `build()`                                                                   | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$Builder`                                              |
| 0.1% |       1 | `isReturnOpcode(int)`                                                       | `org.jetbrains.kotlin.codegen.inline.InlineCodegenUtilsKt`                                         |
| 0.1% |       1 | `<init>(IrDeclaration)`                                                     | `org.jetbrains.kotlin.ir.descriptors.IrBasedDeclarationDescriptor`                                 |
| 0.1% |       1 | `executeInvokeInsn(AbstractInsnNode, String, Interpreter)`                  | `org.jetbrains.org.objectweb.asm.tree.analysis.Frame`                                              |
| 0.1% |       1 | `suspendFunctionOriginal(IrFunction)`                                       | `org.jetbrains.kotlin.backend.jvm.ir.JvmIrUtilsKt`                                                 |
| 0.1% |       1 | `push(SymbolTable, String)`                                                 | `org.jetbrains.org.objectweb.asm.Frame`                                                            |
| 0.1% |       1 | `getActualStack(AbstractInsnNode)`                                          | `org.jetbrains.kotlin.codegen.optimization.fixStack.FixStackAnalyzer`                              |
| 0.1% |       1 | `readStringish(int, char[])`                                                | `org.jetbrains.org.objectweb.asm.ClassReader`                                                      |
| 0.1% |       1 | `visitMethodInsn(int, String, String, String, boolean)`                     | `org.jetbrains.org.objectweb.asm.commons.MethodRemapper`                                           |
| 0.1% |       1 | `loadAllClassesFromJars(Collection, int, ClassHandler)`                     | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`                                             |

##### Standard library

|    % | Samples | Function                                                   | Location                                                                          |
| ---: | ------: | ---------------------------------------------------------- | --------------------------------------------------------------------------------- |
| 0.3% |       4 | `sanitizeStackTrace(Throwable)`                            | `kotlin.jvm.internal.Intrinsics`                                                  |
| 0.2% |       3 | `checkNotNullParameter(Object, String)`                    | `kotlin.jvm.internal.Intrinsics`                                                  |
| 0.2% |       2 | `reverse(Object[])`                                        | `kotlin.collections.ArraysKt___ArraysKt`                                          |
| 0.2% |       2 | `inflate(byte[], int, int)`                                | `java.util.zip.Inflater`                                                          |
| 0.1% |       1 | `charAt(int)`                                              | `java.lang.String`                                                                |
| 0.1% |       1 | `readFully(byte[], int, int)`                              | `java.util.zip.ZipInputStream`                                                    |
| 0.1% |       1 | `resize()`                                                 | `java.util.HashMap`                                                               |
| 0.1% |       1 | `revealDirect(MethodHandle)`                               | `java.lang.invoke.MethodHandles$Lookup`                                           |
| 0.1% |       1 | `putExceptionTable(Handler, ByteVector)`                   | `jdk.internal.org.objectweb.asm.Handler`                                          |
| 0.1% |       1 | `generateInnerClass()`                                     | `java.lang.invoke.InnerClassLambdaMetafactory`                                    |
| 0.1% |       1 | `toList(Object[])`                                         | `kotlin.collections.ArraysKt___ArraysKt`                                          |
| 0.1% |       1 | `makePreparedFieldLambdaForm(byte, boolean, int)`          | `java.lang.invoke.DirectMethodHandle`                                             |
| 0.1% |       1 | `typeConstructor(ProtoBuf$Type)`                           | `kotlin.reflect.jvm.internal.impl.serialization.deserialization.TypeDeserializer` |
| 0.1% |       1 | `isInitialized()`                                          | `kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Function`                     |
| 0.1% |       1 | `<init>(int, float, int)`                                  | `java.util.concurrent.ConcurrentHashMap`                                          |
| 0.1% |       1 | `vectorizedMismatch(Object, long, Object, long, int, int)` | `jdk.internal.util.ArraysSupport`                                                 |
| 0.1% |       1 | `ordinal()`                                                | `java.lang.Enum`                                                                  |
| 0.1% |       1 | `<init>()`                                                 | `java.util.concurrent.locks.ReentrantLock$NonfairSync`                            |
| 0.1% |       1 | `findClass(String)`                                        | `java.net.URLClassLoader`                                                         |
| 0.1% |       1 | `loadClassOrNull(String, boolean)`                         | `jdk.internal.loader.BuiltinClassLoader`                                          |

#### Lines

Lines with the largest contribution to each function's self samples.

##### `sanitizeStackTrace(Throwable)` (`kotlin.jvm.internal.Intrinsics`)

|      % | Samples | Location                             |
| -----: | ------: | ------------------------------------ |
| 100.0% |       4 | `kotlin.jvm.internal.Intrinsics:253` |

##### `checkNotNullParameter(Object, String)` (`kotlin.jvm.internal.Intrinsics`)

|      % | Samples | Location                             |
| -----: | ------: | ------------------------------------ |
| 100.0% |       3 | `kotlin.jvm.internal.Intrinsics:130` |

##### `visitMaxs(int, int)` (`org.jetbrains.org.objectweb.asm.MethodVisitor`)

|      % | Samples | Location                                            |
| -----: | ------: | --------------------------------------------------- |
| 100.0% |       2 | `org.jetbrains.org.objectweb.asm.MethodVisitor:786` |

##### `balanceWhiteSpaces()` (`com.intellij.lang.impl.PsiBuilderImpl`)

|     % | Samples | Location                                     |
| ----: | ------: | -------------------------------------------- |
| 50.0% |       1 | `com.intellij.lang.impl.PsiBuilderImpl:1210` |
| 50.0% |       1 | `com.intellij.lang.impl.PsiBuilderImpl:1183` |

##### `runResolverForNoReceiver(CallInfo, boolean, Continuation)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolveTask`)

|     % | Samples | Location                                                               |
| ----: | ------: | ---------------------------------------------------------------------- |
| 50.0% |       1 | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolveTask:415` |
| 50.0% |       1 | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolveTask:396` |

##### `reverse(Object[])` (`kotlin.collections.ArraysKt___ArraysKt`)

|      % | Samples | Location                                      |
| -----: | ------: | --------------------------------------------- |
| 100.0% |       2 | `kotlin.collections.ArraysKt___ArraysKt:6612` |

##### `inflate(byte[], int, int)` (`java.util.zip.Inflater`)

|      % | Samples | Location                     |
| -----: | ------: | ---------------------------- |
| 100.0% |       2 | `java.util.zip.Inflater:366` |

##### `findClass(String)` (`org.jetbrains.kotlin.preloading.MemoryBasedClassLoader`)

|      % | Samples | Location                                                     |
| -----: | ------: | ------------------------------------------------------------ |
| 100.0% |       1 | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader:103` |

##### `insertBefore(AbstractInsnNode, AbstractInsnNode)` (`org.jetbrains.org.objectweb.asm.tree.InsnList`)

|      % | Samples | Location                                            |
| -----: | ------: | --------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.org.objectweb.asm.tree.InsnList:364` |

##### `functionTypeKind$default(ConeRigidType, FirSession, boolean, int, Object)` (`org.jetbrains.kotlin.fir.types.FunctionalTypeUtilsKt`)

|      % | Samples | Location                                                  |
| -----: | ------: | --------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.types.FunctionalTypeUtilsKt:46` |

##### `<init>(ClassCodegen)` (`org.jetbrains.kotlin.backend.jvm.codegen.AnnotationCodegen`)

|      % | Samples | Location                                                        |
| -----: | ------: | --------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.backend.jvm.codegen.AnnotationCodegen:54` |

##### `accept(MethodVisitor)` (`org.jetbrains.org.objectweb.asm.tree.VarInsnNode`)

|      % | Samples | Location                                              |
| -----: | ------: | ----------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.org.objectweb.asm.tree.VarInsnNode:74` |

##### `transform(String, MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer`)

|      % | Samples | Location                                                                                              |
| -----: | ------: | ----------------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer:37` |

##### `analyze()` (`org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer`)

|      % | Samples | Location                                                           |
| -----: | ------: | ------------------------------------------------------------------ |
| 100.0% |       1 | `org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer:53` |

##### `build()` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type$Builder`)

|      % | Samples | Location                                                   |
| -----: | ------: | ---------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$Builder:6406` |

##### `isReturnOpcode(int)` (`org.jetbrains.kotlin.codegen.inline.InlineCodegenUtilsKt`)

|      % | Samples | Location                                                       |
| -----: | ------: | -------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.codegen.inline.InlineCodegenUtilsKt:204` |

##### `<init>(IrDeclaration)` (`org.jetbrains.kotlin.ir.descriptors.IrBasedDeclarationDescriptor`)

|      % | Samples | Location                                                              |
| -----: | ------: | --------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.ir.descriptors.IrBasedDeclarationDescriptor:46` |

##### `executeInvokeInsn(AbstractInsnNode, String, Interpreter)` (`org.jetbrains.org.objectweb.asm.tree.analysis.Frame`)

|      % | Samples | Location                                                  |
| -----: | ------: | --------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.org.objectweb.asm.tree.analysis.Frame:681` |

##### `suspendFunctionOriginal(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.ir.JvmIrUtilsKt`)

|      % | Samples | Location                                               |
| -----: | ------: | ------------------------------------------------------ |
| 100.0% |       1 | `org.jetbrains.kotlin.backend.jvm.ir.JvmIrUtilsKt:343` |

##### `push(SymbolTable, String)` (`org.jetbrains.org.objectweb.asm.Frame`)

|      % | Samples | Location                                    |
| -----: | ------: | ------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.org.objectweb.asm.Frame:561` |

##### `getActualStack(AbstractInsnNode)` (`org.jetbrains.kotlin.codegen.optimization.fixStack.FixStackAnalyzer`)

|      % | Samples | Location                                                                 |
| -----: | ------: | ------------------------------------------------------------------------ |
| 100.0% |       1 | `org.jetbrains.kotlin.codegen.optimization.fixStack.FixStackAnalyzer:67` |

##### `readStringish(int, char[])` (`org.jetbrains.org.objectweb.asm.ClassReader`)

|      % | Samples | Location                                           |
| -----: | ------: | -------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.org.objectweb.asm.ClassReader:3905` |

##### `visitMethodInsn(int, String, String, String, boolean)` (`org.jetbrains.org.objectweb.asm.commons.MethodRemapper`)

|      % | Samples | Location                                                     |
| -----: | ------: | ------------------------------------------------------------ |
| 100.0% |       1 | `org.jetbrains.org.objectweb.asm.commons.MethodRemapper:167` |

##### `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`)

|      % | Samples | Location                                                   |
| -----: | ------: | ---------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils:142` |

##### `charAt(int)` (`java.lang.String`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |       1 | `java.lang.String:1543` |

##### `readFully(byte[], int, int)` (`java.util.zip.ZipInputStream`)

|      % | Samples | Location                           |
| -----: | ------: | ---------------------------------- |
| 100.0% |       1 | `java.util.zip.ZipInputStream:635` |

##### `resize()` (`java.util.HashMap`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |       1 | `java.util.HashMap:713` |

##### `revealDirect(MethodHandle)` (`java.lang.invoke.MethodHandles$Lookup`)

|      % | Samples | Location                                     |
| -----: | ------: | -------------------------------------------- |
| 100.0% |       1 | `java.lang.invoke.MethodHandles$Lookup:3733` |

##### `putExceptionTable(Handler, ByteVector)` (`jdk.internal.org.objectweb.asm.Handler`)

|      % | Samples | Location                                     |
| -----: | ------: | -------------------------------------------- |
| 100.0% |       1 | `jdk.internal.org.objectweb.asm.Handler:219` |

##### `generateInnerClass()` (`java.lang.invoke.InnerClassLambdaMetafactory`)

|      % | Samples | Location                                           |
| -----: | ------: | -------------------------------------------------- |
| 100.0% |       1 | `java.lang.invoke.InnerClassLambdaMetafactory:314` |

##### `toList(Object[])` (`kotlin.collections.ArraysKt___ArraysKt`)

|      % | Samples | Location                                       |
| -----: | ------: | ---------------------------------------------- |
| 100.0% |       1 | `kotlin.collections.ArraysKt___ArraysKt:11319` |

##### `makePreparedFieldLambdaForm(byte, boolean, int)` (`java.lang.invoke.DirectMethodHandle`)

|      % | Samples | Location                                  |
| -----: | ------: | ----------------------------------------- |
| 100.0% |       1 | `java.lang.invoke.DirectMethodHandle:797` |

##### `typeConstructor(ProtoBuf$Type)` (`kotlin.reflect.jvm.internal.impl.serialization.deserialization.TypeDeserializer`)

|      % | Samples | Location                                                                              |
| -----: | ------: | ------------------------------------------------------------------------------------- |
| 100.0% |       1 | `kotlin.reflect.jvm.internal.impl.serialization.deserialization.TypeDeserializer:157` |

##### `isInitialized()` (`kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Function`)

|      % | Samples | Location                                                            |
| -----: | ------: | ------------------------------------------------------------------- |
| 100.0% |       1 | `kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Function:17318` |

##### `<init>(int, float, int)` (`java.util.concurrent.ConcurrentHashMap`)

|      % | Samples | Location                                     |
| -----: | ------: | -------------------------------------------- |
| 100.0% |       1 | `java.util.concurrent.ConcurrentHashMap:893` |

##### `vectorizedMismatch(Object, long, Object, long, int, int)` (`jdk.internal.util.ArraysSupport`)

|      % | Samples | Location                              |
| -----: | ------: | ------------------------------------- |
| 100.0% |       1 | `jdk.internal.util.ArraysSupport:126` |

##### `ordinal()` (`java.lang.Enum`)

|      % | Samples | Location             |
| -----: | ------: | -------------------- |
| 100.0% |       1 | `java.lang.Enum:128` |

##### `<init>()` (`java.util.concurrent.locks.ReentrantLock$NonfairSync`)

|      % | Samples | Location                                                   |
| -----: | ------: | ---------------------------------------------------------- |
| 100.0% |       1 | `java.util.concurrent.locks.ReentrantLock$NonfairSync:220` |

##### `findClass(String)` (`java.net.URLClassLoader`)

|      % | Samples | Location                      |
| -----: | ------: | ----------------------------- |
| 100.0% |       1 | `java.net.URLClassLoader:420` |

##### `loadClassOrNull(String, boolean)` (`jdk.internal.loader.BuiltinClassLoader`)

|      % | Samples | Location                                     |
| -----: | ------: | -------------------------------------------- |
| 100.0% |       1 | `jdk.internal.loader.BuiltinClassLoader:680` |

#### Callers

Callers with the largest contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `inflate_fast` (`libzip.dylib`)

|      % | Samples | Caller                                          | Location       |
| -----: | ------: | ----------------------------------------------- | -------------- |
| 100.0% |      51 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `libzip.dylib` |

##### `SymbolTable::do_lookup` (`libjvm.dylib`)

|     % | Samples | Caller                                         | Location       |
| ----: | ------: | ---------------------------------------------- | -------------- |
| 63.3% |      19 | `SymbolTable::lookup_only`                     | `libjvm.dylib` |
| 20.0% |       6 | `ClassFileParser::parse_constant_pool_entries` | `libjvm.dylib` |
| 16.7% |       5 | `SymbolTable::new_symbol`                      | `libjvm.dylib` |

##### `tlv_get_addr` (`libdyld.dylib`)

|     % | Samples | Caller                                           | Location       |
| ----: | ------: | ------------------------------------------------ | -------------- |
| 10.0% |       2 | `PhaseChaitin::build_ifg_physical`               | `libjvm.dylib` |
|  5.0% |       1 | `PhaseChaitin::stretch_base_pointer_live_ranges` | `libjvm.dylib` |
|  5.0% |       1 | `ciKlass::is_subtype_of`                         | `libjvm.dylib` |
|  5.0% |       1 | `BlockListBuilder::make_block_at`                | `libjvm.dylib` |
|  5.0% |       1 | `LinearScan::compute_debug_info_for_scope`       | `libjvm.dylib` |

##### `__psynch_mutexwait` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                              | Location                  |
| -----: | ------: | ----------------------------------- | ------------------------- |
| 100.0% |      18 | `_pthread_mutex_firstfit_lock_slow` | `libsystem_pthread.dylib` |

##### `PhaseChaitin::Split` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      15 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      15 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `InstanceKlass::find_method_index` (`libjvm.dylib`)

|     % | Samples | Caller                                  | Location       |
| ----: | ------: | --------------------------------------- | -------------- |
| 93.3% |      14 | `InstanceKlass::uncached_lookup_method` | `libjvm.dylib` |
|  6.7% |       1 | `InstanceKlass::find_method`            | `libjvm.dylib` |

##### `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` (`libjvm.dylib`)

|     % | Samples | Caller                                             | Location       |
| ----: | ------: | -------------------------------------------------- | -------------- |
| 71.4% |      10 | `DebugInformationRecorder::describe_scope`         | `libjvm.dylib` |
| 28.6% |       4 | `DebugInformationRecorder::serialize_scope_values` | `libjvm.dylib` |

##### `IndexSetIterator::advance_and_next` (`libjvm.dylib`)

|     % | Samples | Caller                             | Location       |
| ----: | ------: | ---------------------------------- | -------------- |
| 23.1% |       3 | `PhaseIFG::re_insert`              | `libjvm.dylib` |
| 23.1% |       3 | `PhaseChaitin::build_ifg_physical` | `libjvm.dylib` |
| 15.4% |       2 | `PhaseLive::add_liveout`           | `libjvm.dylib` |
| 15.4% |       2 | `PhaseChaitin::Select`             | `libjvm.dylib` |
|  7.7% |       1 | `PhaseIFG::SquareUp`               | `libjvm.dylib` |

##### `__psynch_cvwait` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                  | Location       |
| ----: | ------: | ----------------------- | -------------- |
| 91.7% |      11 | `PlatformMonitor::wait` | `libjvm.dylib` |
|  8.3% |       1 | `PlatformEvent::park`   | `libjvm.dylib` |

##### `ciObjectFactory::get_metadata` (`libjvm.dylib`)

|     % | Samples | Caller                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 27.3% |       3 | `ciBytecodeStream::get_method`   | `libjvm.dylib` |
| 18.2% |       2 | `ciMethod::ensure_method_data`   | `libjvm.dylib` |
|  9.1% |       1 | `ciEnv::get_klass_by_index_impl` | `libjvm.dylib` |
|  9.1% |       1 | `ciObject::klass`                | `libjvm.dylib` |
|  9.1% |       1 | `ciObjArrayKlass::make`          | `libjvm.dylib` |

##### `_platform_memset` (`libsystem_platform.dylib`)

|     % | Samples | Caller                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 18.2% |       2 | `LinearScan::compute_debug_info_for_scope` | `libjvm.dylib` |
|  9.1% |       1 | `MethodLiveness::compute_liveness`         | `libjvm.dylib` |
|  9.1% |       1 | `MethodData::allocate`                     | `libjvm.dylib` |
|  9.1% |       1 | `CompileBroker::update_compile_perf_data`  | `libjvm.dylib` |
|  9.1% |       1 | `Matcher::xform`                           | `libjvm.dylib` |

##### `fwd_copy_again` (`libjvm.dylib`)

|     % | Samples | Caller                                          | Location       |
| ----: | ------: | ----------------------------------------------- | -------------- |
| 77.8% |       7 | `G1ParScanThreadState::trim_queue_to_threshold` | `libjvm.dylib` |
| 11.1% |       1 | `nmethod::nmethod`                              | `libjvm.dylib` |
| 11.1% |       1 | `CodeBuffer::copy_code_to`                      | `libjvm.dylib` |

##### `PhaseChaitin::gather_lrg_masks` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       9 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseChaitin::elide_copy` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |       9 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |

##### `IntervalWalker::walk_to` (`libjvm.dylib`)

|     % | Samples | Caller                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 77.8% |       7 | `IntervalWalker::walk_to`        | `libjvm.dylib` |
| 11.1% |       1 | `LinearScan::compute_oop_map`    | `libjvm.dylib` |
| 11.1% |       1 | `LinearScan::allocate_registers` | `libjvm.dylib` |

##### `sys_icache_invalidate` (`libsystem_platform.dylib`)

|     % | Samples | Caller                                      | Location       |
| ----: | ------: | ------------------------------------------- | -------------- |
| 33.3% |       3 | `nmethod::nmethod`                          | `libjvm.dylib` |
| 33.3% |       3 | `ICStub::finalize`                          | `libjvm.dylib` |
| 22.2% |       2 | `InlineCacheBuffer::create_transition_stub` | `libjvm.dylib` |
| 11.1% |       1 | `CodeBuffer::copy_code_to`                  | `libjvm.dylib` |

##### `inflate` (`libzip.dylib`)

|      % | Samples | Caller                                          | Location       |
| -----: | ------: | ----------------------------------------------- | -------------- |
| 100.0% |       9 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `libzip.dylib` |

##### `PhaseIdealLoop::build_loop_late` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |       8 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Arena::contains` (`libjvm.dylib`)

|      % | Samples | Caller           | Location       |
| -----: | ------: | ---------------- | -------------- |
| 100.0% |       8 | `Matcher::xform` | `libjvm.dylib` |

##### `Node_Backward_Iterator::next` (`libjvm.dylib`)

|     % | Samples | Caller                         | Location       |
| ----: | ------: | ------------------------------ | -------------- |
| 50.0% |       4 | `PhaseCFG::global_code_motion` | `libjvm.dylib` |
| 50.0% |       4 | `PhaseCFG::schedule_late`      | `libjvm.dylib` |

##### `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` (`libjvm.dylib`)

|      % | Samples | Caller                                         | Location       |
| -----: | ------: | ---------------------------------------------- | -------------- |
| 100.0% |       8 | `void G1CMTask::process_grey_task_entry<true>` | `libjvm.dylib` |

##### `PhaseIdealLoop::Dominators` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |       7 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `LIR_OpVisitState::visit` (`libjvm.dylib`)

|     % | Samples | Caller                                | Location       |
| ----: | ------: | ------------------------------------- | -------------- |
| 42.9% |       3 | `LinearScan::assign_reg_num`          | `libjvm.dylib` |
| 42.9% |       3 | `LinearScan::build_intervals`         | `libjvm.dylib` |
| 14.3% |       1 | `LinearScan::compute_local_live_sets` | `libjvm.dylib` |

##### `pthread_jit_write_protect_np` (`libsystem_pthread.dylib`)

|     % | Samples | Caller                                      | Location                                |
| ----: | ------: | ------------------------------------------- | --------------------------------------- |
| 28.6% |       2 | `JVM_Clone`                                 | `libjvm.dylib`                          |
| 14.3% |       1 | `merge(SymbolTable, Frame, int)`            | `org.jetbrains.org.objectweb.asm.Frame` |
| 14.3% |       1 | `InterpreterRuntime::newarray`              | `libjvm.dylib`                          |
| 14.3% |       1 | `InterpreterRuntime::build_method_counters` | `libjvm.dylib`                          |
| 14.3% |       1 | `InterpreterRuntime::anewarray`             | `libjvm.dylib`                          |

##### `_platform_memmove` (`libsystem_platform.dylib`)

|     % | Samples | Caller                                    | Location        |
| ----: | ------: | ----------------------------------------- | --------------- |
| 42.9% |       3 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib` |
| 28.6% |       2 | `PhaseOutput::Output`                     | `libjvm.dylib`  |
| 14.3% |       1 | `Node::add_req_batch`                     | `libjvm.dylib`  |
| 14.3% |       1 | `inflate`                                 | `libzip.dylib`  |

##### `PhaseAggressiveCoalesce::insert_copies` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       6 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseIdealLoop::split_if_with_blocks` (`libjvm.dylib`)

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

##### `LinearScanWalker::free_collect_inactive_fixed` (`libjvm.dylib`)

|      % | Samples | Caller                             | Location       |
| -----: | ------: | ---------------------------------- | -------------- |
| 100.0% |       6 | `LinearScanWalker::alloc_free_reg` | `libjvm.dylib` |

##### `LinearScanWalker::split_before_usage` (`libjvm.dylib`)

|     % | Samples | Caller                                       | Location       |
| ----: | ------: | -------------------------------------------- | -------------- |
| 66.7% |       4 | `LinearScanWalker::split_and_spill_interval` | `libjvm.dylib` |
| 33.3% |       2 | `LinearScanWalker::alloc_free_reg`           | `libjvm.dylib` |

##### `PhaseIdealLoop::dom_lca_for_get_late_ctrl_internal` (`libjvm.dylib`)

|     % | Samples | Caller                                      | Location       |
| ----: | ------: | ------------------------------------------- | -------------- |
| 83.3% |       5 | `PhaseIdealLoop::compute_lca_of_uses`       | `libjvm.dylib` |
| 16.7% |       1 | `PhaseIdealLoop::build_loop_late_post_work` | `libjvm.dylib` |

##### `Node::is_CFG` (`libjvm.dylib`)

|     % | Samples | Caller                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 33.3% |       2 | `PhaseIdealLoop::build_and_optimize`   | `libjvm.dylib` |
| 16.7% |       1 | `Node::unique_ctrl_out_or_null`        | `libjvm.dylib` |
| 16.7% |       1 | `PhaseIdealLoop::build_loop_tree_impl` | `libjvm.dylib` |
| 16.7% |       1 | `NTarjan::DFS`                         | `libjvm.dylib` |
| 16.7% |       1 | `PhaseIdealLoop::Dominators`           | `libjvm.dylib` |

##### `bsearch` (`libsystem_c.dylib`)

|      % | Samples | Caller                           | Location       |
| -----: | ------: | -------------------------------- | -------------- |
| 100.0% |       6 | `encoding_for_logical_immediate` | `libjvm.dylib` |

##### `resource_allocate_bytes` (`libjvm.dylib`)

|     % | Samples | Caller                               | Location       |
| ----: | ------: | ------------------------------------ | -------------- |
| 16.7% |       1 | `DataLayout::data_in`                | `libjvm.dylib` |
| 16.7% |       1 | `ResourceBitMap::ResourceBitMap`     | `libjvm.dylib` |
| 16.7% |       1 | `BlockBegin::BlockBegin`             | `libjvm.dylib` |
| 16.7% |       1 | `LinearScanWalker::LinearScanWalker` | `libjvm.dylib` |
| 16.7% |       1 | `LinearScan::do_linear_scan`         | `libjvm.dylib` |

##### `__psynch_cvbroad` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                               | Location       |
| ----: | ------: | ------------------------------------ | -------------- |
| 83.3% |       5 | `CompileBroker::create_compile_task` | `libjvm.dylib` |
| 16.7% |       1 | `VMThread::wait_until_executed`      | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_early` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |       5 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `_platform_memcmp` (`libsystem_platform.dylib`)

|     % | Samples | Caller                                             | Location       |
| ----: | ------: | -------------------------------------------------- | -------------- |
| 40.0% |       2 | `DebugInformationRecorder::serialize_scope_values` | `libjvm.dylib` |
| 40.0% |       2 | `SymbolTable::new_symbols`                         | `libjvm.dylib` |
| 20.0% |       1 | `DebugInformationRecorder::describe_scope`         | `libjvm.dylib` |

##### `ClassFileParser::skip_over_field_signature` (`libjvm.dylib`)

|      % | Samples | Caller                                           | Location       |
| -----: | ------: | ------------------------------------------------ | -------------- |
| 100.0% |       5 | `ClassFileParser::verify_legal_method_signature` | `libjvm.dylib` |

##### `sanitizeStackTrace(Throwable)` (`kotlin.jvm.internal.Intrinsics`)

|     % | Samples | Caller                               | Location                         |
| ----: | ------: | ------------------------------------ | -------------------------------- |
| 75.0% |       3 | `throwParameterIsNullNPE(String)`    | `kotlin.jvm.internal.Intrinsics` |
| 25.0% |       1 | `throwUninitializedProperty(String)` | `kotlin.jvm.internal.Intrinsics` |

##### `checkNotNullParameter(Object, String)` (`kotlin.jvm.internal.Intrinsics`)

|     % | Samples | Caller                                                       | Location                                            |
| ----: | ------: | ------------------------------------------------------------ | --------------------------------------------------- |
| 33.3% |       1 | `withCombinedAttributesFrom(ConeKotlinType, ConeKotlinType)` | `org.jetbrains.kotlin.fir.resolve.LookupTagUtilsKt` |
| 33.3% |       1 | `isRaw(ConeKotlinType)`                                      | `org.jetbrains.kotlin.fir.types.TypeUtilsKt`        |
| 33.3% |       1 | `getGeneratedContextParameterName(FirValueParameter)`        | `org.jetbrains.kotlin.fir.ClassMembersKt`           |

##### `visitMaxs(int, int)` (`org.jetbrains.org.objectweb.asm.MethodVisitor`)

|     % | Samples | Caller                | Location                                                       |
| ----: | ------: | --------------------- | -------------------------------------------------------------- |
| 50.0% |       1 | `visitMaxs(int, int)` | `org.jetbrains.org.objectweb.asm.commons.LocalVariablesSorter` |
| 50.0% |       1 | `visitMaxs(int, int)` | `org.jetbrains.kotlin.codegen.inline.InlineAdapter`            |

##### `balanceWhiteSpaces()` (`com.intellij.lang.impl.PsiBuilderImpl`)

|      % | Samples | Caller               | Location                                |
| -----: | ------: | -------------------- | --------------------------------------- |
| 100.0% |       2 | `prepareLightTree()` | `com.intellij.lang.impl.PsiBuilderImpl` |

##### `runResolverForNoReceiver(CallInfo, boolean, Continuation)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolveTask`)

|     % | Samples | Caller                                                                                                | Location                                                                                      |
| ----: | ------: | ----------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| 50.0% |       1 | `runResolverForNoReceiver$default(FirTowerResolveTask, CallInfo, boolean, Continuation, int, Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolveTask`                            |
| 50.0% |       1 | `invokeSuspend(Object)`                                                                               | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolveTask$runResolverForNoReceiver$1` |

##### `reverse(Object[])` (`kotlin.collections.ArraysKt___ArraysKt`)

|      % | Samples | Caller                          | Location                                                                   |
| -----: | ------: | ------------------------------- | -------------------------------------------------------------------------- |
| 100.0% |       2 | `transform(String, MethodNode)` | `org.jetbrains.kotlin.codegen.optimization.RedundantGotoMethodTransformer` |

##### `inflate(byte[], int, int)` (`java.util.zip.Inflater`)

|      % | Samples | Caller                   | Location                            |
| -----: | ------: | ------------------------ | ----------------------------------- |
| 100.0% |       2 | `read(byte[], int, int)` | `java.util.zip.InflaterInputStream` |

##### `findClass(String)` (`org.jetbrains.kotlin.preloading.MemoryBasedClassLoader`)

|      % | Samples | Caller                       | Location                |
| -----: | ------: | ---------------------------- | ----------------------- |
| 100.0% |       1 | `loadClass(String, boolean)` | `java.lang.ClassLoader` |

##### `insertBefore(AbstractInsnNode, AbstractInsnNode)` (`org.jetbrains.org.objectweb.asm.tree.InsnList`)

|      % | Samples | Caller                          | Location                                                                   |
| -----: | ------: | ------------------------------- | -------------------------------------------------------------------------- |
| 100.0% |       1 | `transform(String, MethodNode)` | `org.jetbrains.kotlin.codegen.optimization.RedundantGotoMethodTransformer` |

##### `functionTypeKind$default(ConeRigidType, FirSession, boolean, int, Object)` (`org.jetbrains.kotlin.fir.types.FunctionalTypeUtilsKt`)

|      % | Samples | Caller                                                                                 | Location                                                      |
| -----: | ------: | -------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| 100.0% |       1 | `typeOrTypealiasProto(ConeKotlinType, boolean, FirTypeRef, boolean, boolean, boolean)` | `org.jetbrains.kotlin.fir.serialization.FirElementSerializer` |

##### `<init>(ClassCodegen)` (`org.jetbrains.kotlin.backend.jvm.codegen.AnnotationCodegen`)

|      % | Samples | Caller                                | Location                                                                                  |
| -----: | ------: | ------------------------------------- | ----------------------------------------------------------------------------------------- |
| 100.0% |       1 | `<init>(MethodVisitor, ClassCodegen)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen$doGenerate$annotationCodegen$1` |

##### `accept(MethodVisitor)` (`org.jetbrains.org.objectweb.asm.tree.VarInsnNode`)

|      % | Samples | Caller                  | Location                                        |
| -----: | ------: | ----------------------- | ----------------------------------------------- |
| 100.0% |       1 | `accept(MethodVisitor)` | `org.jetbrains.org.objectweb.asm.tree.InsnList` |

##### `transform(String, MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer`)

|      % | Samples | Caller                          | Location                                                                           |
| -----: | ------: | ------------------------------- | ---------------------------------------------------------------------------------- |
| 100.0% |       1 | `transform(String, MethodNode)` | `org.jetbrains.kotlin.codegen.optimization.transformer.CompositeMethodTransformer` |

##### `analyze()` (`org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer`)

|      % | Samples | Caller                                     | Location                                                                  |
| -----: | ------: | ------------------------------------------ | ------------------------------------------------------------------------- |
| 100.0% |       1 | `analyze(String, MethodNode, Interpreter)` | `org.jetbrains.kotlin.codegen.optimization.transformer.MethodTransformer` |

##### `build()` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type$Builder`)

|      % | Samples | Caller                           | Location                                                       |
| -----: | ------: | -------------------------------- | -------------------------------------------------------------- |
| 100.0% |       1 | `setType(ProtoBuf$Type$Builder)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$Argument$Builder` |

##### `isReturnOpcode(int)` (`org.jetbrains.kotlin.codegen.inline.InlineCodegenUtilsKt`)

|      % | Samples | Caller                                   | Location                                                      |
| -----: | ------: | ---------------------------------------- | ------------------------------------------------------------- |
| 100.0% |       1 | `processReturns(MethodNode, Map, Label)` | `org.jetbrains.kotlin.codegen.inline.MethodInliner$Companion` |

##### `<init>(IrDeclaration)` (`org.jetbrains.kotlin.ir.descriptors.IrBasedDeclarationDescriptor`)

|      % | Samples | Caller            | Location                                                     |
| -----: | ------: | ----------------- | ------------------------------------------------------------ |
| 100.0% |       1 | `<init>(IrClass)` | `org.jetbrains.kotlin.ir.descriptors.IrBasedClassDescriptor` |

##### `executeInvokeInsn(AbstractInsnNode, String, Interpreter)` (`org.jetbrains.org.objectweb.asm.tree.analysis.Frame`)

|      % | Samples | Caller                                   | Location                                              |
| -----: | ------: | ---------------------------------------- | ----------------------------------------------------- |
| 100.0% |       1 | `execute(AbstractInsnNode, Interpreter)` | `org.jetbrains.org.objectweb.asm.tree.analysis.Frame` |

##### `suspendFunctionOriginal(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.ir.JvmIrUtilsKt`)

|      % | Samples | Caller                                    | Location                                                   |
| -----: | ------: | ----------------------------------------- | ---------------------------------------------------------- |
| 100.0% |       1 | `doGenerate(ReifiedTypeParametersUsages)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `push(SymbolTable, String)` (`org.jetbrains.org.objectweb.asm.Frame`)

|      % | Samples | Caller                                   | Location                                |
| -----: | ------: | ---------------------------------------- | --------------------------------------- |
| 100.0% |       1 | `execute(int, int, Symbol, SymbolTable)` | `org.jetbrains.org.objectweb.asm.Frame` |

##### `getActualStack(AbstractInsnNode)` (`org.jetbrains.kotlin.codegen.optimization.fixStack.FixStackAnalyzer`)

|      % | Samples | Caller                                                                                                        | Location                                                                       |
| -----: | ------: | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| 100.0% |       1 | `transformAfterInlineCallMarker(MethodNode, List, FixStackAnalyzer, AbstractInsnNode, LocalVariablesManager)` | `org.jetbrains.kotlin.codegen.optimization.fixStack.FixStackMethodTransformer` |

##### `readStringish(int, char[])` (`org.jetbrains.org.objectweb.asm.ClassReader`)

|      % | Samples | Caller                   | Location                                      |
| -----: | ------: | ------------------------ | --------------------------------------------- |
| 100.0% |       1 | `readClass(int, char[])` | `org.jetbrains.org.objectweb.asm.ClassReader` |

##### `visitMethodInsn(int, String, String, String, boolean)` (`org.jetbrains.org.objectweb.asm.commons.MethodRemapper`)

|      % | Samples | Caller                                          | Location                                                     |
| -----: | ------: | ----------------------------------------------- | ------------------------------------------------------------ |
| 100.0% |       1 | `invokestatic(String, String, String, boolean)` | `org.jetbrains.org.objectweb.asm.commons.InstructionAdapter` |

##### `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`)

|      % | Samples | Caller                                                                       | Location                                               |
| -----: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% |       1 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `charAt(int)` (`java.lang.String`)

|      % | Samples | Caller      | Location                                                       |
| -----: | ------: | ----------- | -------------------------------------------------------------- |
| 100.0% |       1 | `advance()` | `org.jetbrains.kotlin.codegen.inline.SMAPParser$SMAPTokenizer` |

##### `readFully(byte[], int, int)` (`java.util.zip.ZipInputStream`)

|      % | Samples | Caller      | Location                       |
| -----: | ------: | ----------- | ------------------------------ |
| 100.0% |       1 | `readLOC()` | `java.util.zip.ZipInputStream` |

##### `resize()` (`java.util.HashMap`)

|      % | Samples | Caller                                          | Location            |
| -----: | ------: | ----------------------------------------------- | ------------------- |
| 100.0% |       1 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `revealDirect(MethodHandle)` (`java.lang.invoke.MethodHandles$Lookup`)

|      % | Samples | Caller                                                                                                                   | Location                                               |
| -----: | ------: | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------ |
| 100.0% |       1 | `<init>(MethodHandles$Lookup, MethodType, String, MethodType, MethodHandle, MethodType, boolean, Class[], MethodType[])` | `java.lang.invoke.AbstractValidatingLambdaMetafactory` |

##### `putExceptionTable(Handler, ByteVector)` (`jdk.internal.org.objectweb.asm.Handler`)

|      % | Samples | Caller                      | Location                                      |
| -----: | ------: | --------------------------- | --------------------------------------------- |
| 100.0% |       1 | `putMethodInfo(ByteVector)` | `jdk.internal.org.objectweb.asm.MethodWriter` |

##### `generateInnerClass()` (`java.lang.invoke.InnerClassLambdaMetafactory`)

|      % | Samples | Caller             | Location                                       |
| -----: | ------: | ------------------ | ---------------------------------------------- |
| 100.0% |       1 | `spinInnerClass()` | `java.lang.invoke.InnerClassLambdaMetafactory` |

##### `toList(Object[])` (`kotlin.collections.ArraysKt___ArraysKt`)

|      % | Samples | Caller                    | Location                                                                |
| -----: | ------: | ------------------------- | ----------------------------------------------------------------------- |
| 100.0% |       1 | `getArgumentsInfo(Class)` | `org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt` |

##### `makePreparedFieldLambdaForm(byte, boolean, int)` (`java.lang.invoke.DirectMethodHandle`)

|      % | Samples | Caller                                          | Location                              |
| -----: | ------: | ----------------------------------------------- | ------------------------------------- |
| 100.0% |       1 | `preparedFieldLambdaForm(byte, boolean, Class)` | `java.lang.invoke.DirectMethodHandle` |

##### `typeConstructor(ProtoBuf$Type)` (`kotlin.reflect.jvm.internal.impl.serialization.deserialization.TypeDeserializer`)

|      % | Samples | Caller                               | Location                                                                          |
| -----: | ------: | ------------------------------------ | --------------------------------------------------------------------------------- |
| 100.0% |       1 | `simpleType(ProtoBuf$Type, boolean)` | `kotlin.reflect.jvm.internal.impl.serialization.deserialization.TypeDeserializer` |

##### `isInitialized()` (`kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Function`)

|      % | Samples | Caller            | Location                                                   |
| -----: | ------: | ----------------- | ---------------------------------------------------------- |
| 100.0% |       1 | `isInitialized()` | `kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Class` |

##### `<init>(int, float, int)` (`java.util.concurrent.ConcurrentHashMap`)

|      % | Samples | Caller                      | Location                                                           |
| -----: | ------: | --------------------------- | ------------------------------------------------------------------ |
| 100.0% |       1 | `createConcurrentHashMap()` | `kotlin.reflect.jvm.internal.impl.storage.LockBasedStorageManager` |

##### `vectorizedMismatch(Object, long, Object, long, int, int)` (`jdk.internal.util.ArraysSupport`)

|      % | Samples | Caller                                    | Location                          |
| -----: | ------: | ----------------------------------------- | --------------------------------- |
| 100.0% |       1 | `mismatch(byte[], int, byte[], int, int)` | `jdk.internal.util.ArraysSupport` |

##### `ordinal()` (`java.lang.Enum`)

|      % | Samples | Caller            | Location                         |
| -----: | ------: | ----------------- | -------------------------------- |
| 100.0% |       1 | `identity(Class)` | `java.lang.invoke.MethodHandles` |

##### `<init>()` (`java.util.concurrent.locks.ReentrantLock$NonfairSync`)

|      % | Samples | Caller     | Location                                   |
| -----: | ------: | ---------- | ------------------------------------------ |
| 100.0% |       1 | `<init>()` | `java.util.concurrent.locks.ReentrantLock` |

##### `findClass(String)` (`java.net.URLClassLoader`)

|      % | Samples | Caller                       | Location                |
| -----: | ------: | ---------------------------- | ----------------------- |
| 100.0% |       1 | `loadClass(String, boolean)` | `java.lang.ClassLoader` |

##### `loadClassOrNull(String, boolean)` (`jdk.internal.loader.BuiltinClassLoader`)

|      % | Samples | Caller                       | Location                                 |
| -----: | ------: | ---------------------------- | ---------------------------------------- |
| 100.0% |       1 | `loadClass(String, boolean)` | `jdk.internal.loader.BuiltinClassLoader` |

### Total samples

Functions with the most samples collected within the function and its callees.

|     % | Samples | Function                                                                                           | Location                                                |
| ----: | ------: | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 63.9% |     831 | `Thread::call_run`                                                                                 | `libjvm.dylib`                                          |
| 63.9% |     831 | `thread_native_entry`                                                                              | `libjvm.dylib`                                          |
| 63.9% |     831 | `_pthread_start`                                                                                   | `libsystem_pthread.dylib`                               |
| 63.9% |     831 | `thread_start`                                                                                     | `libsystem_pthread.dylib`                               |
| 59.2% |     769 | `JavaThread::thread_main_inner`                                                                    | `libjvm.dylib`                                          |
| 59.1% |     768 | `CompileBroker::compiler_thread_loop`                                                              | `libjvm.dylib`                                          |
| 58.2% |     756 | `CompileBroker::invoke_compiler_on_method`                                                         | `libjvm.dylib`                                          |
| 39.4% |     512 | `C2Compiler::compile_method`                                                                       | `libjvm.dylib`                                          |
| 39.2% |     510 | `Compile::Compile`                                                                                 | `libjvm.dylib`                                          |
| 30.2% |     392 | `run(String[])`                                                                                    | `org.jetbrains.kotlin.preloading.Preloader`             |
| 30.2% |     392 | `main(String[])`                                                                                   | `org.jetbrains.kotlin.preloading.Preloader`             |
| 24.4% |     317 | `main(String[])`                                                                                   | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`  |
| 24.4% |     317 | `main(String[])`                                                                                   | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 24.4% |     317 | `invokeStatic(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$DMH.0x0000008001008400`    |
| 24.4% |     317 | `invoke(Object, Object, Object)`                                                                   | `java.lang.invoke.LambdaForm$MH.0x0000008001009800`     |
| 24.4% |     317 | `invokeExact_MT(Object, Object, Object, Object)`                                                   | `java.lang.invoke.Invokers$Holder`                      |
| 24.4% |     317 | `invokeImpl(Object, Object[])`                                                                     | `jdk.internal.reflect.DirectMethodHandleAccessor`       |
| 24.4% |     317 | `invoke(Object, Object[])`                                                                         | `jdk.internal.reflect.DirectMethodHandleAccessor`       |
| 24.4% |     317 | `invoke(Object, Object[])`                                                                         | `java.lang.reflect.Method`                              |
| 24.2% |     315 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Compiler

|     % | Samples | Function                                    | Location       |
| ----: | ------: | ------------------------------------------- | -------------- |
| 59.1% |     768 | `CompileBroker::compiler_thread_loop`       | `libjvm.dylib` |
| 58.2% |     756 | `CompileBroker::invoke_compiler_on_method`  | `libjvm.dylib` |
| 39.4% |     512 | `C2Compiler::compile_method`                | `libjvm.dylib` |
| 39.2% |     510 | `Compile::Compile`                          | `libjvm.dylib` |
| 20.7% |     269 | `Compile::Code_Gen`                         | `libjvm.dylib` |
| 18.0% |     234 | `Compilation::compile_method`               | `libjvm.dylib` |
| 18.0% |     234 | `Compilation::Compilation`                  | `libjvm.dylib` |
| 16.4% |     213 | `Compilation::compile_java_method`          | `libjvm.dylib` |
| 13.1% |     170 | `Compile::Optimize`                         | `libjvm.dylib` |
| 11.0% |     143 | `PhaseChaitin::Register_Allocate`           | `libjvm.dylib` |
|  7.9% |     103 | `PhaseIdealLoop::optimize`                  | `libjvm.dylib` |
|  7.4% |      96 | `PhaseIdealLoop::build_and_optimize`        | `libjvm.dylib` |
|  7.4% |      96 | `PhaseIdealLoop::PhaseIdealLoop`            | `libjvm.dylib` |
|  7.1% |      92 | `Compilation::emit_lir`                     | `libjvm.dylib` |
|  6.0% |      78 | `Compilation::build_hir`                    | `libjvm.dylib` |
|  5.8% |      75 | `LinearScan::do_linear_scan`                | `libjvm.dylib` |
|  4.3% |      56 | `GraphBuilder::GraphBuilder`                | `libjvm.dylib` |
|  3.9% |      51 | `GraphBuilder::iterate_all_blocks`          | `libjvm.dylib` |
|  3.8% |      50 | `Matcher::match`                            | `libjvm.dylib` |
|  3.8% |      50 | `GraphBuilder::iterate_bytecodes_for_block` | `libjvm.dylib` |

##### Native

|     % | Samples | Function                                        | Location                  |
| ----: | ------: | ----------------------------------------------- | ------------------------- |
| 63.9% |     831 | `Thread::call_run`                              | `libjvm.dylib`            |
| 63.9% |     831 | `thread_native_entry`                           | `libjvm.dylib`            |
| 63.9% |     831 | `_pthread_start`                                | `libsystem_pthread.dylib` |
| 63.9% |     831 | `thread_start`                                  | `libsystem_pthread.dylib` |
| 59.2% |     769 | `JavaThread::thread_main_inner`                 | `libjvm.dylib`            |
| 18.0% |     234 | `Compiler::compile_method`                      | `libjvm.dylib`            |
|  5.1% |      66 | `Java_java_lang_ClassLoader_defineClass1`       | `libjava.dylib`           |
|  5.1% |      66 | `Parse::Parse`                                  | `libjvm.dylib`            |
|  5.1% |      66 | `ParseGenerator::generate`                      | `libjvm.dylib`            |
|  5.0% |      65 | `Parse::do_one_block`                           | `libjvm.dylib`            |
|  5.0% |      65 | `Parse::do_all_blocks`                          | `libjvm.dylib`            |
|  4.8% |      63 | `SystemDictionary::resolve_class_from_stream`   | `libjvm.dylib`            |
|  4.8% |      63 | `jvm_define_class_common`                       | `libjvm.dylib`            |
|  4.8% |      63 | `JVM_DefineClassWithSource`                     | `libjvm.dylib`            |
|  4.8% |      63 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `libzip.dylib`            |
|  4.8% |      62 | `KlassFactory::create_from_stream`              | `libjvm.dylib`            |
|  4.5% |      59 | `ClassFileParser::ClassFileParser`              | `libjvm.dylib`            |
|  4.4% |      57 | `IR::IR`                                        | `libjvm.dylib`            |
|  4.3% |      56 | `Parse::do_call`                                | `libjvm.dylib`            |
|  4.3% |      56 | `IRScope::IRScope`                              | `libjvm.dylib`            |

##### Ours

|     % | Samples | Function                                                                                                                                      | Location                                                |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 30.2% |     392 | `run(String[])`                                                                                                                               | `org.jetbrains.kotlin.preloading.Preloader`             |
| 30.2% |     392 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.preloading.Preloader`             |
| 24.4% |     317 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`  |
| 24.4% |     317 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 24.2% |     315 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)`                                            | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 24.2% |     315 | `doMain(CLICompiler, String[])`                                                                                                               | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 24.2% |     314 | `exec(PrintStream, Services, MessageRenderer, String[])`                                                                                      | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 24.2% |     314 | `exec(PrintStream, MessageRenderer, String[])`                                                                                                | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 24.2% |     314 | `doMainNoExit(CLICompiler, String[], MessageRenderer)`                                                                                        | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 23.7% |     308 | `exec(MessageCollector, Services, CommonCompilerArguments)`                                                                                   | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 22.9% |     298 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)`                                                                         | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 22.9% |     298 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)`                                                                        | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 22.9% |     298 | `execImpl(MessageCollector, Services, CommonCompilerArguments)`                                                                               | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 22.8% |     297 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)`                                           | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 22.8% |     297 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 22.8% |     297 | `execute(CommonCompilerArguments, Services, MessageCollector)`                                                                                | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 22.8% |     296 | `runPhasedPipeline(ArgumentsPipelineArtifact)`                                                                                                | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 22.5% |     293 | `phaseBody(PipelineContext, PipelineArtifact)`                                                                                                | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`       |
| 22.5% |     293 | `phaseBody(LoggingContext, Object)`                                                                                                           | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`       |
| 22.5% |     293 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)`                                                                                    | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase` |

##### Standard library

|     % | Samples | Function                                                                        | Location                                             |
| ----: | ------: | ------------------------------------------------------------------------------- | ---------------------------------------------------- |
| 24.4% |     317 | `invokeStatic(Object, Object)`                                                  | `java.lang.invoke.LambdaForm$DMH.0x0000008001008400` |
| 24.4% |     317 | `invoke(Object, Object, Object)`                                                | `java.lang.invoke.LambdaForm$MH.0x0000008001009800`  |
| 24.4% |     317 | `invokeExact_MT(Object, Object, Object, Object)`                                | `java.lang.invoke.Invokers$Holder`                   |
| 24.4% |     317 | `invokeImpl(Object, Object[])`                                                  | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
| 24.4% |     317 | `invoke(Object, Object[])`                                                      | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
| 24.4% |     317 | `invoke(Object, Object[])`                                                      | `java.lang.reflect.Method`                           |
|  5.8% |      75 | `loadClass(String, boolean)`                                                    | `java.lang.ClassLoader`                              |
|  5.3% |      69 | `defineClass(String, byte[], int, int, ProtectionDomain)`                       | `java.lang.ClassLoader`                              |
|  5.2% |      68 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`                              |
|  5.2% |      68 | `defineClass(String, byte[], int, int)`                                         | `java.lang.ClassLoader`                              |
|  5.2% |      68 | `run()`                                                                         | `java.util.concurrent.CompletableFuture$AsyncRun`    |
|  5.2% |      68 | `runWorker(ThreadPoolExecutor$Worker)`                                          | `java.util.concurrent.ThreadPoolExecutor`            |
|  5.2% |      68 | `run()`                                                                         | `java.util.concurrent.ThreadPoolExecutor$Worker`     |
|  5.2% |      68 | `runWith(Object, Runnable)`                                                     | `java.lang.Thread`                                   |
|  5.2% |      68 | `run()`                                                                         | `java.lang.Thread`                                   |
|  5.1% |      66 | `inflate(byte[], int, int)`                                                     | `java.util.zip.Inflater`                             |
|  5.1% |      66 | `read(byte[], int, int)`                                                        | `java.util.zip.ZipInputStream`                       |
|  5.1% |      66 | `read(byte[])`                                                                  | `java.io.FilterInputStream`                          |
|  5.0% |      65 | `read(byte[], int, int)`                                                        | `java.util.zip.InflaterInputStream`                  |
|  4.9% |      64 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)`                   | `java.util.zip.Inflater`                             |

#### Callers

Callers with the largest contribution to each function's total samples. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `Thread::call_run` (`libjvm.dylib`)

|      % | Samples | Caller                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |     831 | `thread_native_entry` | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % | Samples | Caller           | Location                  |
| -----: | ------: | ---------------- | ------------------------- |
| 100.0% |     831 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `_pthread_start` (`libsystem_pthread.dylib`)

|      % | Samples | Caller         | Location                  |
| -----: | ------: | -------------- | ------------------------- |
| 100.0% |     831 | `thread_start` | `libsystem_pthread.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |     769 | `Thread::call_run` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|      % | Samples | Caller                          | Location       |
| -----: | ------: | ------------------------------- | -------------- |
| 100.0% |     768 | `JavaThread::thread_main_inner` | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|      % | Samples | Caller                                | Location       |
| -----: | ------: | ------------------------------------- | -------------- |
| 100.0% |     756 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |     512 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|      % | Samples | Caller                       | Location       |
| -----: | ------: | ---------------------------- | -------------- |
| 100.0% |     510 | `C2Compiler::compile_method` | `libjvm.dylib` |

##### `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

|      % | Samples | Caller           | Location                                    |
| -----: | ------: | ---------------- | ------------------------------------------- |
| 100.0% |     392 | `main(String[])` | `org.jetbrains.kotlin.preloading.Preloader` |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`)

|      % | Samples | Caller           | Location                                     |
| -----: | ------: | ---------------- | -------------------------------------------- |
| 100.0% |     317 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % | Samples | Caller                         | Location                                             |
| -----: | ------: | ------------------------------ | ---------------------------------------------------- |
| 100.0% |     317 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000008001008400` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000008001008400`)

|      % | Samples | Caller                           | Location                                            |
| -----: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% |     317 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000008001009800` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000008001009800`)

|      % | Samples | Caller                                           | Location                           |
| -----: | ------: | ------------------------------------------------ | ---------------------------------- |
| 100.0% |     317 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Caller                         | Location                                          |
| -----: | ------: | ------------------------------ | ------------------------------------------------- |
| 100.0% |     317 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % | Samples | Caller                     | Location                                          |
| -----: | ------: | -------------------------- | ------------------------------------------------- |
| 100.0% |     317 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % | Samples | Caller                     | Location                   |
| -----: | ------: | -------------------------- | -------------------------- |
| 100.0% |     317 | `invoke(Object, Object[])` | `java.lang.reflect.Method` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

|      % | Samples | Caller                                                                            | Location                                                                |
| -----: | ------: | --------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| 100.0% |     317 | `run(String[])`                                                                   | `org.jetbrains.kotlin.preloading.Preloader`                             |
|   0.3% |       1 | `getEnumConstantsShared()`                                                        | `java.lang.Class`                                                       |
|   0.3% |       1 | `parsePreprocessedCommandLineArguments(List, CommonToolArguments, Lazy, boolean)` | `org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt` |
|   0.3% |       1 | `rtVersion()`                                                                     | `com.intellij.util.lang.JavaVersion`                                    |

##### `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % | Samples | Caller                          | Location                                                |
| -----: | ------: | ------------------------------- | ------------------------------------------------------- |
| 100.0% |     315 | `doMain(CLICompiler, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `doMain(CLICompiler, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % | Samples | Caller           | Location                                               |
| -----: | ------: | ---------------- | ------------------------------------------------------ |
| 100.0% |     315 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion` |

##### `exec(PrintStream, Services, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Caller                                         | Location                                      |
| -----: | ------: | ---------------------------------------------- | --------------------------------------------- |
| 100.0% |     314 | `exec(PrintStream, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `exec(PrintStream, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Caller                                                 | Location                                                |
| -----: | ------: | ------------------------------------------------------ | ------------------------------------------------------- |
| 100.0% |     314 | `doMainNoExit(CLICompiler, String[], MessageRenderer)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % | Samples | Caller                                                                                             | Location                                                |
| -----: | ------: | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |     314 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `exec(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Caller                                                   | Location                                      |
| -----: | ------: | -------------------------------------------------------- | --------------------------------------------- |
| 100.0% |     308 | `exec(PrintStream, Services, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % | Samples | Caller                                                                 | Location                                     |
| -----: | ------: | ---------------------------------------------------------------------- | -------------------------------------------- |
| 100.0% |     298 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % | Samples | Caller                                                          | Location                                      |
| -----: | ------: | --------------------------------------------------------------- | --------------------------------------------- |
| 100.0% |     298 | `execImpl(MessageCollector, Services, CommonCompilerArguments)` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Caller                                                      | Location                                      |
| -----: | ------: | ----------------------------------------------------------- | --------------------------------------------- |
| 100.0% |     298 | `exec(MessageCollector, Services, CommonCompilerArguments)` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Caller                                                                                                                                        | Location                                                |
| -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |     297 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Caller                                                         | Location                                                |
| -----: | ------: | -------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |     297 | `execute(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `execute(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Caller                                                                | Location                                     |
| -----: | ------: | --------------------------------------------------------------------- | -------------------------------------------- |
| 100.0% |     297 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Caller                                                                                              | Location                                                |
| -----: | ------: | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |     296 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

|      % | Samples | Caller                              | Location                                          |
| -----: | ------: | ----------------------------------- | ------------------------------------------------- |
| 100.0% |     293 | `phaseBody(LoggingContext, Object)` | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase` |

##### `phaseBody(LoggingContext, Object)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

|      % | Samples | Caller                                                     | Location                                                |
| -----: | ------: | ---------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |     293 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase` |

##### `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`)

|      % | Samples | Caller                                                                | Location                                                          |
| -----: | ------: | --------------------------------------------------------------------- | ----------------------------------------------------------------- |
| 100.0% |     293 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)`            | `org.jetbrains.kotlin.backend.common.phaser.CompositePhase`       |
|   6.1% |      18 | `invoke(PhaseConfig, PhaserState, LoweringContext, IrModuleFragment)` | `org.jetbrains.kotlin.backend.common.phaser.PerformByIrFilePhase` |
|   2.0% |       6 | `runPhase(NamedCompilerPhase, Object, boolean)`                       | `org.jetbrains.kotlin.backend.common.phaser.PhaseEngine`          |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |     269 | `Compile::Compile` | `libjvm.dylib` |

##### `Compilation::compile_method` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |     234 | `Compilation::Compilation` | `libjvm.dylib` |

##### `Compilation::Compilation` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |     234 | `Compiler::compile_method` | `libjvm.dylib` |

##### `Compiler::compile_method` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |     234 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `Compilation::compile_java_method` (`libjvm.dylib`)

|      % | Samples | Caller                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |     213 | `Compilation::compile_method` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |     170 | `Compile::Compile` | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|      % | Samples | Caller              | Location       |
| -----: | ------: | ------------------- | -------------- |
| 100.0% |     143 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % | Samples | Caller                    | Location       |
| ----: | ------: | ------------------------- | -------------- |
| 60.2% |      62 | `Compile::Optimize`       | `libjvm.dylib` |
| 39.8% |      41 | `Compile::optimize_loops` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|      % | Samples | Caller                           | Location       |
| -----: | ------: | -------------------------------- | -------------- |
| 100.0% |      96 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |      96 | `PhaseIdealLoop::optimize` | `libjvm.dylib` |

##### `Compilation::emit_lir` (`libjvm.dylib`)

|      % | Samples | Caller                             | Location       |
| -----: | ------: | ---------------------------------- | -------------- |
| 100.0% |      92 | `Compilation::compile_java_method` | `libjvm.dylib` |

##### `Compilation::build_hir` (`libjvm.dylib`)

|      % | Samples | Caller                             | Location       |
| -----: | ------: | ---------------------------------- | -------------- |
| 100.0% |      78 | `Compilation::compile_java_method` | `libjvm.dylib` |

##### `LinearScan::do_linear_scan` (`libjvm.dylib`)

|      % | Samples | Caller                  | Location       |
| -----: | ------: | ----------------------- | -------------- |
| 100.0% |      75 | `Compilation::emit_lir` | `libjvm.dylib` |

##### `loadClass(String, boolean)` (`java.lang.ClassLoader`)

|     % | Samples | Caller                       | Location                                                 |
| ----: | ------: | ---------------------------- | -------------------------------------------------------- |
| 97.3% |      73 | `loadClass(String, boolean)` | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |
|  2.7% |       2 | `loadClass(String)`          | `java.lang.ClassLoader`                                  |

##### `defineClass(String, byte[], int, int, ProtectionDomain)` (`java.lang.ClassLoader`)

|     % | Samples | Caller                                              | Location                          |
| ----: | ------: | --------------------------------------------------- | --------------------------------- |
| 98.6% |      68 | `defineClass(String, byte[], int, int)`             | `java.lang.ClassLoader`           |
|  1.4% |       1 | `defineClass(String, byte[], int, int, CodeSource)` | `java.security.SecureClassLoader` |

##### `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` (`java.lang.ClassLoader`)

|      % | Samples | Caller                                                    | Location                |
| -----: | ------: | --------------------------------------------------------- | ----------------------- |
| 100.0% |      68 | `defineClass(String, byte[], int, int, ProtectionDomain)` | `java.lang.ClassLoader` |

##### `defineClass(String, byte[], int, int)` (`java.lang.ClassLoader`)

|      % | Samples | Caller              | Location                                                 |
| -----: | ------: | ------------------- | -------------------------------------------------------- |
| 100.0% |      68 | `findClass(String)` | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |

##### `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`)

|      % | Samples | Caller                                 | Location                                  |
| -----: | ------: | -------------------------------------- | ----------------------------------------- |
| 100.0% |      68 | `runWorker(ThreadPoolExecutor$Worker)` | `java.util.concurrent.ThreadPoolExecutor` |

##### `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`)

|      % | Samples | Caller  | Location                                         |
| -----: | ------: | ------- | ------------------------------------------------ |
| 100.0% |      68 | `run()` | `java.util.concurrent.ThreadPoolExecutor$Worker` |

##### `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`)

|      % | Samples | Caller                      | Location           |
| -----: | ------: | --------------------------- | ------------------ |
| 100.0% |      68 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `runWith(Object, Runnable)` (`java.lang.Thread`)

|      % | Samples | Caller  | Location           |
| -----: | ------: | ------- | ------------------ |
| 100.0% |      68 | `run()` | `java.lang.Thread` |

##### `Java_java_lang_ClassLoader_defineClass1` (`libjava.dylib`)

|      % | Samples | Caller                                                                          | Location                |
| -----: | ------: | ------------------------------------------------------------------------------- | ----------------------- |
| 100.0% |      66 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader` |

##### `Parse::Parse` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |      66 | `ParseGenerator::generate` | `libjvm.dylib` |

##### `ParseGenerator::generate` (`libjvm.dylib`)

|      % | Samples | Caller                             | Location       |
| -----: | ------: | ---------------------------------- | -------------- |
| 100.0% |      66 | `Compile::Compile`                 | `libjvm.dylib` |
|  57.6% |      38 | `PredictedCallGenerator::generate` | `libjvm.dylib` |
|  45.5% |      30 | `Parse::do_call`                   | `libjvm.dylib` |

##### `inflate(byte[], int, int)` (`java.util.zip.Inflater`)

|     % | Samples | Caller                   | Location                            |
| ----: | ------: | ------------------------ | ----------------------------------- |
| 98.5% |      65 | `read(byte[], int, int)` | `java.util.zip.InflaterInputStream` |
|  1.5% |       1 | `inflate(byte[])`        | `java.util.zip.Inflater`            |

##### `read(byte[], int, int)` (`java.util.zip.ZipInputStream`)

|      % | Samples | Caller         | Location                    |
| -----: | ------: | -------------- | --------------------------- |
| 100.0% |      66 | `read(byte[])` | `java.io.FilterInputStream` |

##### `read(byte[])` (`java.io.FilterInputStream`)

|      % | Samples | Caller                                                  | Location                                               |
| -----: | ------: | ------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% |      66 | `loadAllClassesFromJars(Collection, int, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `Parse::do_one_block` (`libjvm.dylib`)

|      % | Samples | Caller                 | Location       |
| -----: | ------: | ---------------------- | -------------- |
| 100.0% |      65 | `Parse::do_all_blocks` | `libjvm.dylib` |

##### `Parse::do_all_blocks` (`libjvm.dylib`)

|      % | Samples | Caller         | Location       |
| -----: | ------: | -------------- | -------------- |
| 100.0% |      65 | `Parse::Parse` | `libjvm.dylib` |

##### `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`)

|     % | Samples | Caller                   | Location                       |
| ----: | ------: | ------------------------ | ------------------------------ |
| 98.5% |      64 | `read(byte[], int, int)` | `java.util.zip.ZipInputStream` |
|  1.5% |       1 | `getBytes()`             | `jdk.internal.loader.Resource` |

##### `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`)

|      % | Samples | Caller                      | Location                 |
| -----: | ------: | --------------------------- | ------------------------ |
| 100.0% |      64 | `inflate(byte[], int, int)` | `java.util.zip.Inflater` |

##### `SystemDictionary::resolve_class_from_stream` (`libjvm.dylib`)

|      % | Samples | Caller                    | Location       |
| -----: | ------: | ------------------------- | -------------- |
| 100.0% |      63 | `jvm_define_class_common` | `libjvm.dylib` |

##### `jvm_define_class_common` (`libjvm.dylib`)

|      % | Samples | Caller                      | Location       |
| -----: | ------: | --------------------------- | -------------- |
| 100.0% |      63 | `JVM_DefineClassWithSource` | `libjvm.dylib` |

##### `JVM_DefineClassWithSource` (`libjvm.dylib`)

|      % | Samples | Caller                                    | Location        |
| -----: | ------: | ----------------------------------------- | --------------- |
| 100.0% |      63 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib` |

##### `Java_java_util_zip_Inflater_inflateBytesBytes` (`libzip.dylib`)

|      % | Samples | Caller                                                        | Location                 |
| -----: | ------: | ------------------------------------------------------------- | ------------------------ |
| 100.0% |      63 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` | `java.util.zip.Inflater` |

##### `KlassFactory::create_from_stream` (`libjvm.dylib`)

|     % | Samples | Caller                                               | Location       |
| ----: | ------: | ---------------------------------------------------- | -------------- |
| 93.5% |      58 | `SystemDictionary::resolve_class_from_stream`        | `libjvm.dylib` |
|  4.8% |       3 | `SystemDictionary::resolve_hidden_class_from_stream` | `libjvm.dylib` |
|  1.6% |       1 | `ClassLoader::load_class`                            | `libjvm.dylib` |

##### `ClassFileParser::ClassFileParser` (`libjvm.dylib`)

|      % | Samples | Caller                             | Location       |
| -----: | ------: | ---------------------------------- | -------------- |
| 100.0% |      59 | `KlassFactory::create_from_stream` | `libjvm.dylib` |

##### `IR::IR` (`libjvm.dylib`)

|      % | Samples | Caller                   | Location       |
| -----: | ------: | ------------------------ | -------------- |
| 100.0% |      57 | `Compilation::build_hir` | `libjvm.dylib` |

##### `GraphBuilder::GraphBuilder` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |      56 | `IRScope::IRScope` | `libjvm.dylib` |

##### `Parse::do_call` (`libjvm.dylib`)

|      % | Samples | Caller                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |      56 | `Parse::do_one_block` | `libjvm.dylib` |

##### `IRScope::IRScope` (`libjvm.dylib`)

|      % | Samples | Caller   | Location       |
| -----: | ------: | -------- | -------------- |
| 100.0% |      56 | `IR::IR` | `libjvm.dylib` |

##### `GraphBuilder::iterate_all_blocks` (`libjvm.dylib`)

|      % | Samples | Caller                          | Location       |
| -----: | ------: | ------------------------------- | -------------- |
| 100.0% |      51 | `GraphBuilder::GraphBuilder`    | `libjvm.dylib` |
|  60.8% |      31 | `GraphBuilder::try_inline_full` | `libjvm.dylib` |

##### `Matcher::match` (`libjvm.dylib`)

|      % | Samples | Caller              | Location       |
| -----: | ------: | ------------------- | -------------- |
| 100.0% |      50 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `GraphBuilder::iterate_bytecodes_for_block` (`libjvm.dylib`)

|      % | Samples | Caller                             | Location       |
| -----: | ------: | ---------------------------------- | -------------- |
| 100.0% |      50 | `GraphBuilder::iterate_all_blocks` | `libjvm.dylib` |

#### Callees

Callees with the largest contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `Thread::call_run` (`libjvm.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 92.5% |     769 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
|  6.5% |      54 | `WorkerThread::run`             | `libjvm.dylib` |
|  1.0% |       8 | `VMThread::run`                 | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % | Samples | Callee             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |     831 | `Thread::call_run` | `libjvm.dylib` |

##### `_pthread_start` (`libsystem_pthread.dylib`)

|      % | Samples | Callee                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |     831 | `thread_native_entry` | `libjvm.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

|      % | Samples | Callee           | Location                  |
| -----: | ------: | ---------------- | ------------------------- |
| 100.0% |     831 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|     % | Samples | Callee                                                   | Location       |
| ----: | ------: | -------------------------------------------------------- | -------------- |
| 99.9% |     768 | `CompileBroker::compiler_thread_loop`                    | `libjvm.dylib` |
|  0.1% |       1 | `MonitorDeflationThread::monitor_deflation_thread_entry` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|     % | Samples | Callee                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 98.4% |     756 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |
|  1.6% |      12 | `CompileQueue::get`                        | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|     % | Samples | Callee                                    | Location       |
| ----: | ------: | ----------------------------------------- | -------------- |
| 67.7% |     512 | `C2Compiler::compile_method`              | `libjvm.dylib` |
| 31.0% |     234 | `Compiler::compile_method`                | `libjvm.dylib` |
|  0.4% |       3 | `ciEnv::ciEnv`                            | `libjvm.dylib` |
|  0.3% |       2 | `CompileBroker::collect_statistics`       | `libjvm.dylib` |
|  0.3% |       2 | `CompileBroker::update_compile_perf_data` | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|     % | Samples | Callee              | Location       |
| ----: | ------: | ------------------- | -------------- |
| 99.6% |     510 | `Compile::Compile`  | `libjvm.dylib` |
|  0.4% |       2 | `Compile::~Compile` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|     % | Samples | Callee                                   | Location       |
| ----: | ------: | ---------------------------------------- | -------------- |
| 52.7% |     269 | `Compile::Code_Gen`                      | `libjvm.dylib` |
| 33.3% |     170 | `Compile::Optimize`                      | `libjvm.dylib` |
| 12.9% |      66 | `ParseGenerator::generate`               | `libjvm.dylib` |
|  0.8% |       4 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |
|  0.2% |       1 | `CallGenerator::for_inline`              | `libjvm.dylib` |

##### `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

|     % | Samples | Callee                                                                       | Location                                                 |
| ----: | ------: | ---------------------------------------------------------------------------- | -------------------------------------------------------- |
| 80.9% |     317 | `invoke(Object, Object[])`                                                   | `java.lang.reflect.Method`                               |
| 18.9% |      74 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`   |
|  0.3% |       1 | `loadClass(String)`                                                          | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |

##### `main(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

|      % | Samples | Callee          | Location                                    |
| -----: | ------: | --------------- | ------------------------------------------- |
| 100.0% |     392 | `run(String[])` | `org.jetbrains.kotlin.preloading.Preloader` |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`)

|     % | Samples | Callee                          | Location                                                |
| ----: | ------: | ------------------------------- | ------------------------------------------------------- |
| 99.4% |     315 | `doMain(CLICompiler, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
|  0.6% |       2 | `<init>()`                      | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % | Samples | Callee           | Location                                               |
| -----: | ------: | ---------------- | ------------------------------------------------------ |
| 100.0% |     317 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000008001008400`)

|      % | Samples | Callee           | Location                                     |
| -----: | ------: | ---------------- | -------------------------------------------- |
| 100.0% |     317 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000008001009800`)

|      % | Samples | Callee                         | Location                                             |
| -----: | ------: | ------------------------------ | ---------------------------------------------------- |
| 100.0% |     317 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000008001008400` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Callee                           | Location                                            |
| -----: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% |     317 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000008001009800` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % | Samples | Callee                                           | Location                           |
| -----: | ------: | ------------------------------------------------ | ---------------------------------- |
| 100.0% |     317 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % | Samples | Callee                         | Location                                          |
| -----: | ------: | ------------------------------ | ------------------------------------------------- |
| 100.0% |     317 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

|      % | Samples | Callee                     | Location                                          |
| -----: | ------: | -------------------------- | ------------------------------------------------- |
| 100.0% |     317 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |
|   0.6% |       2 | `acquireMethodAccessor()`  | `java.lang.reflect.Method`                        |
|   0.3% |       1 | `isCallerSensitive()`      | `java.lang.reflect.Method`                        |

##### `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|     % | Samples | Callee                                                 | Location                                                |
| ----: | ------: | ------------------------------------------------------ | ------------------------------------------------------- |
| 99.7% |     314 | `doMainNoExit(CLICompiler, String[], MessageRenderer)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
|  0.3% |       1 | `defaultMessageRenderer()`                             | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `doMain(CLICompiler, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % | Samples | Callee                                                                                             | Location                                                |
| -----: | ------: | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |     315 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `exec(PrintStream, Services, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|     % | Samples | Callee                                                                               | Location                                                                |
| ----: | ------: | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------- |
| 98.1% |     308 | `exec(MessageCollector, Services, CommonCompilerArguments)`                          | `org.jetbrains.kotlin.cli.common.CLICompiler`                           |
|  1.6% |       5 | `parseCommandLineArguments$default(List, CommonToolArguments, boolean, int, Object)` | `org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt` |
|  0.3% |       1 | `loadClass(String)`                                                                  | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader`                |

##### `exec(PrintStream, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Callee                                                   | Location                                      |
| -----: | ------: | -------------------------------------------------------- | --------------------------------------------- |
| 100.0% |     314 | `exec(PrintStream, Services, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % | Samples | Callee                                         | Location                                      |
| -----: | ------: | ---------------------------------------------- | --------------------------------------------- |
| 100.0% |     314 | `exec(PrintStream, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `exec(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|     % | Samples | Callee                                                          | Location                                      |
| ----: | ------: | --------------------------------------------------------------- | --------------------------------------------- |
| 96.8% |     298 | `execImpl(MessageCollector, Services, CommonCompilerArguments)` | `org.jetbrains.kotlin.cli.common.CLICompiler` |
|  3.2% |      10 | `<clinit>()`                                                    | `org.jetbrains.kotlin.cli.common.ArgumentsKt` |

##### `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|     % | Samples | Callee                                                         | Location                                                |
| ----: | ------: | -------------------------------------------------------------- | ------------------------------------------------------- |
| 99.7% |     297 | `execute(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
|  0.3% |       1 | `getDefaultPerformanceManager()`                               | `org.jetbrains.kotlin.cli.common.CLICompiler`           |

##### `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % | Samples | Callee                                                                | Location                                     |
| -----: | ------: | --------------------------------------------------------------------- | -------------------------------------------- |
| 100.0% |     298 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Callee                                                                 | Location                                     |
| -----: | ------: | ---------------------------------------------------------------------- | -------------------------------------------- |
| 100.0% |     298 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|     % | Samples | Callee                                                                                                | Location                                                      |
| ----: | ------: | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| 99.7% |     296 | `runPhasedPipeline(ArgumentsPipelineArtifact)`                                                        | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`       |
|  0.3% |       1 | `<init>(CommonCompilerArguments, Services, Disposable, GroupingMessageCollector, PerformanceManager)` | `org.jetbrains.kotlin.cli.pipeline.ArgumentsPipelineArtifact` |

##### `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Callee                                                                                              | Location                                                |
| -----: | ------: | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |     297 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `execute(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Callee                                                                                                                                        | Location                                                |
| -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |     297 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|     % | Samples | Callee                                                                          | Location                                                                    |
| ----: | ------: | ------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| 99.0% |     293 | `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)`            | `org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`                        |
|  1.0% |       3 | `reportToMessageCollector(BaseDiagnosticsCollector, MessageCollector, boolean)` | `org.jetbrains.kotlin.cli.common.fir.FirDiagnosticsCompilerResultsReporter` |

##### `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

|     % | Samples | Callee                           | Location                                                              |
| ----: | ------: | -------------------------------- | --------------------------------------------------------------------- |
| 78.8% |     231 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`      |
|  9.9% |      29 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFir2IrPipelinePhase`        |
|  9.9% |      29 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`       |
|  1.4% |       4 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmConfigurationPipelinePhase` |

##### `phaseBody(LoggingContext, Object)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

|      % | Samples | Callee                                         | Location                                          |
| -----: | ------: | ---------------------------------------------- | ------------------------------------------------- |
| 100.0% |     293 | `phaseBody(PipelineContext, PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase` |

##### `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`)

|      % | Samples | Callee                              | Location                                                         |
| -----: | ------: | ----------------------------------- | ---------------------------------------------------------------- |
| 100.0% |     293 | `phaseBody(LoggingContext, Object)` | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`                |
|   5.8% |      17 | `phaseBody(LoggingContext, Object)` | `org.jetbrains.kotlin.backend.common.phaser.FileLoweringPhase`   |
|   2.0% |       6 | `phaseBody(LoggingContext, Object)` | `org.jetbrains.kotlin.backend.common.phaser.ModuleLoweringPhase` |
|   0.3% |       1 | `containsAll(Collection)`           | `java.util.AbstractCollection`                                   |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|     % | Samples | Callee                            | Location       |
| ----: | ------: | --------------------------------- | -------------- |
| 53.2% |     143 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
| 18.6% |      50 | `Matcher::match`                  | `libjvm.dylib` |
| 13.4% |      36 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |
| 11.2% |      30 | `PhaseOutput::Output`             | `libjvm.dylib` |
|  2.2% |       6 | `PhaseOutput::install_code`       | `libjvm.dylib` |

##### `Compilation::compile_method` (`libjvm.dylib`)

|     % | Samples | Callee                             | Location       |
| ----: | ------: | ---------------------------------- | -------------- |
| 91.0% |     213 | `Compilation::compile_java_method` | `libjvm.dylib` |
|  8.5% |      20 | `ciEnv::register_method`           | `libjvm.dylib` |
|  0.4% |       1 | `Dependencies::assert_common_1`    | `libjvm.dylib` |

##### `Compilation::Compilation` (`libjvm.dylib`)

|      % | Samples | Callee                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |     234 | `Compilation::compile_method` | `libjvm.dylib` |

##### `Compiler::compile_method` (`libjvm.dylib`)

|      % | Samples | Callee                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |     234 | `Compilation::Compilation` | `libjvm.dylib` |

##### `Compilation::compile_java_method` (`libjvm.dylib`)

|     % | Samples | Callee                         | Location       |
| ----: | ------: | ------------------------------ | -------------- |
| 43.2% |      92 | `Compilation::emit_lir`        | `libjvm.dylib` |
| 36.6% |      78 | `Compilation::build_hir`       | `libjvm.dylib` |
| 19.2% |      41 | `Compilation::emit_code_body`  | `libjvm.dylib` |
|  0.9% |       2 | `ciMethod::ensure_method_data` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|     % | Samples | Callee                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 36.5% |      62 | `PhaseIdealLoop::optimize`             | `libjvm.dylib` |
| 24.1% |      41 | `Compile::optimize_loops`              | `libjvm.dylib` |
| 14.1% |      24 | `PhaseIterGVN::optimize`               | `libjvm.dylib` |
|  7.1% |      12 | `PhaseCCP::PhaseCCP`                   | `libjvm.dylib` |
|  5.9% |      10 | `PhaseMacroExpand::expand_macro_nodes` | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|     % | Samples | Callee                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 20.3% |      29 | `PhaseChaitin::build_ifg_physical`         | `libjvm.dylib` |
| 18.2% |      26 | `PhaseChaitin::Split`                      | `libjvm.dylib` |
| 10.5% |      15 | `PhaseChaitin::gather_lrg_masks`           | `libjvm.dylib` |
|  9.1% |      13 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |
|  7.7% |      11 | `PhaseLive::compute`                       | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % | Samples | Callee                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 93.2% |      96 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |
|  6.8% |       7 | `PhaseIterGVN::optimize`         | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|     % | Samples | Callee                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 39.6% |      38 | `PhaseIdealLoop::build_loop_late`      | `libjvm.dylib` |
| 14.6% |      14 | `PhaseIdealLoop::Dominators`           | `libjvm.dylib` |
| 13.5% |      13 | `PhaseIdealLoop::split_if_with_blocks` | `libjvm.dylib` |
|  8.3% |       8 | `PhaseIdealLoop::build_loop_early`     | `libjvm.dylib` |
|  7.3% |       7 | `PhaseIdealLoop::build_loop_tree`      | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % | Samples | Callee                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |      96 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Compilation::emit_lir` (`libjvm.dylib`)

|     % | Samples | Callee                       | Location       |
| ----: | ------: | ---------------------------- | -------------- |
| 81.5% |      75 | `LinearScan::do_linear_scan` | `libjvm.dylib` |
| 18.5% |      17 | `BlockList::iterate_forward` | `libjvm.dylib` |

##### `Compilation::build_hir` (`libjvm.dylib`)

|     % | Samples | Callee                                       | Location       |
| ----: | ------: | -------------------------------------------- | -------------- |
| 73.1% |      57 | `IR::IR`                                     | `libjvm.dylib` |
| 11.5% |       9 | `IR::eliminate_null_checks`                  | `libjvm.dylib` |
| 11.5% |       9 | `GlobalValueNumbering::GlobalValueNumbering` | `libjvm.dylib` |
|  2.6% |       2 | `IR::compute_code`                           | `libjvm.dylib` |
|  1.3% |       1 | `IR::split_critical_edges`                   | `libjvm.dylib` |

##### `LinearScan::do_linear_scan` (`libjvm.dylib`)

|     % | Samples | Callee                                | Location       |
| ----: | ------: | ------------------------------------- | -------------- |
| 40.0% |      30 | `LinearScan::allocate_registers`      | `libjvm.dylib` |
| 22.7% |      17 | `LinearScan::assign_reg_num`          | `libjvm.dylib` |
| 18.7% |      14 | `LinearScan::build_intervals`         | `libjvm.dylib` |
|  5.3% |       4 | `LinearScan::compute_local_live_sets` | `libjvm.dylib` |
|  2.7% |       2 | `LinearScan::resolve_data_flow`       | `libjvm.dylib` |

##### `loadClass(String, boolean)` (`java.lang.ClassLoader`)

|     % | Samples | Callee                             | Location                                                 |
| ----: | ------: | ---------------------------------- | -------------------------------------------------------- |
| 93.3% |      70 | `findClass(String)`                | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |
|  4.0% |       3 | `findBootstrapClassOrNull(String)` | `java.lang.ClassLoader`                                  |
|  2.7% |       2 | `findLoadedClass(String)`          | `java.lang.ClassLoader`                                  |
|  1.3% |       1 | `findClass(String)`                | `java.net.URLClassLoader`                                |
|  1.3% |       1 | `loadClass(String, boolean)`       | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |

##### `defineClass(String, byte[], int, int, ProtectionDomain)` (`java.lang.ClassLoader`)

|     % | Samples | Callee                                                                          | Location                |
| ----: | ------: | ------------------------------------------------------------------------------- | ----------------------- |
| 98.6% |      68 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader` |
|  1.4% |       1 | `preDefineClass(String, ProtectionDomain)`                                      | `java.lang.ClassLoader` |

##### `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` (`java.lang.ClassLoader`)

|     % | Samples | Callee                                    | Location                                                 |
| ----: | ------: | ----------------------------------------- | -------------------------------------------------------- |
| 97.1% |      66 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib`                                          |
| 26.5% |      18 | `loadClass(String)`                       | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |

##### `defineClass(String, byte[], int, int)` (`java.lang.ClassLoader`)

|      % | Samples | Callee                                                    | Location                |
| -----: | ------: | --------------------------------------------------------- | ----------------------- |
| 100.0% |      68 | `defineClass(String, byte[], int, int, ProtectionDomain)` | `java.lang.ClassLoader` |

##### `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`)

|      % | Samples | Callee  | Location                                                                          |
| -----: | ------: | ------- | --------------------------------------------------------------------------------- |
| 100.0% |      68 | `run()` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000800188f020` |

##### `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`)

|      % | Samples | Callee  | Location                                          |
| -----: | ------: | ------- | ------------------------------------------------- |
| 100.0% |      68 | `run()` | `java.util.concurrent.CompletableFuture$AsyncRun` |

##### `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`)

|      % | Samples | Callee                                 | Location                                  |
| -----: | ------: | -------------------------------------- | ----------------------------------------- |
| 100.0% |      68 | `runWorker(ThreadPoolExecutor$Worker)` | `java.util.concurrent.ThreadPoolExecutor` |

##### `runWith(Object, Runnable)` (`java.lang.Thread`)

|      % | Samples | Callee  | Location                                         |
| -----: | ------: | ------- | ------------------------------------------------ |
| 100.0% |      68 | `run()` | `java.util.concurrent.ThreadPoolExecutor$Worker` |

##### `run()` (`java.lang.Thread`)

|      % | Samples | Callee                      | Location           |
| -----: | ------: | --------------------------- | ------------------ |
| 100.0% |      68 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `Java_java_lang_ClassLoader_defineClass1` (`libjava.dylib`)

|     % | Samples | Callee                      | Location                   |
| ----: | ------: | --------------------------- | -------------------------- |
| 95.5% |      63 | `JVM_DefineClassWithSource` | `libjvm.dylib`             |
|  4.5% |       3 | `_platform_memmove`         | `libsystem_platform.dylib` |

##### `Parse::Parse` (`libjvm.dylib`)

|     % | Samples | Callee                    | Location       |
| ----: | ------: | ------------------------- | -------------- |
| 98.5% |      65 | `Parse::do_all_blocks`    | `libjvm.dylib` |
|  3.0% |       2 | `Parse::do_exits`         | `libjvm.dylib` |
|  1.5% |       1 | `GraphKit::set_map_clone` | `libjvm.dylib` |

##### `ParseGenerator::generate` (`libjvm.dylib`)

|      % | Samples | Callee         | Location       |
| -----: | ------: | -------------- | -------------- |
| 100.0% |      66 | `Parse::Parse` | `libjvm.dylib` |

##### `inflate(byte[], int, int)` (`java.util.zip.Inflater`)

|     % | Samples | Callee                                                        | Location                 |
| ----: | ------: | ------------------------------------------------------------- | ------------------------ |
| 97.0% |      64 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` | `java.util.zip.Inflater` |

##### `read(byte[], int, int)` (`java.util.zip.ZipInputStream`)

|     % | Samples | Callee                     | Location                            |
| ----: | ------: | -------------------------- | ----------------------------------- |
| 97.0% |      64 | `read(byte[], int, int)`   | `java.util.zip.InflaterInputStream` |
|  3.0% |       2 | `update(byte[], int, int)` | `java.util.zip.CRC32`               |

##### `read(byte[])` (`java.io.FilterInputStream`)

|      % | Samples | Callee                   | Location                       |
| -----: | ------: | ------------------------ | ------------------------------ |
| 100.0% |      66 | `read(byte[], int, int)` | `java.util.zip.ZipInputStream` |

##### `Parse::do_one_block` (`libjvm.dylib`)

|     % | Samples | Callee                   | Location       |
| ----: | ------: | ------------------------ | -------------- |
| 86.2% |      56 | `Parse::do_call`         | `libjvm.dylib` |
| 23.1% |      15 | `Parse::do_field_access` | `libjvm.dylib` |
|  7.7% |       5 | `Parse::do_one_bytecode` | `libjvm.dylib` |
|  6.2% |       4 | `Parse::do_if`           | `libjvm.dylib` |
|  4.6% |       3 | `Parse::do_new`          | `libjvm.dylib` |

##### `Parse::do_all_blocks` (`libjvm.dylib`)

|      % | Samples | Callee                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |      65 | `Parse::do_one_block` | `libjvm.dylib` |

##### `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`)

|      % | Samples | Callee                      | Location                 |
| -----: | ------: | --------------------------- | ------------------------ |
| 100.0% |      65 | `inflate(byte[], int, int)` | `java.util.zip.Inflater` |

##### `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`)

|     % | Samples | Callee                                           | Location       |
| ----: | ------: | ------------------------------------------------ | -------------- |
| 98.4% |      63 | `Java_java_util_zip_Inflater_inflateBytesBytes`  | `libzip.dylib` |
|  1.6% |       1 | `InterpreterRuntime::frequency_counter_overflow` | `libjvm.dylib` |

##### `SystemDictionary::resolve_class_from_stream` (`libjvm.dylib`)

|     % | Samples | Callee                                    | Location       |
| ----: | ------: | ----------------------------------------- | -------------- |
| 92.1% |      58 | `KlassFactory::create_from_stream`        | `libjvm.dylib` |
|  7.9% |       5 | `SystemDictionary::define_instance_class` | `libjvm.dylib` |

##### `jvm_define_class_common` (`libjvm.dylib`)

|      % | Samples | Callee                                        | Location       |
| -----: | ------: | --------------------------------------------- | -------------- |
| 100.0% |      63 | `SystemDictionary::resolve_class_from_stream` | `libjvm.dylib` |

##### `JVM_DefineClassWithSource` (`libjvm.dylib`)

|      % | Samples | Callee                    | Location       |
| -----: | ------: | ------------------------- | -------------- |
| 100.0% |      63 | `jvm_define_class_common` | `libjvm.dylib` |

##### `Java_java_util_zip_Inflater_inflateBytesBytes` (`libzip.dylib`)

|     % | Samples | Callee         | Location       |
| ----: | ------: | -------------- | -------------- |
| 81.0% |      51 | `inflate_fast` | `libzip.dylib` |
| 19.0% |      12 | `inflate`      | `libzip.dylib` |

##### `KlassFactory::create_from_stream` (`libjvm.dylib`)

|     % | Samples | Callee                                      | Location       |
| ----: | ------: | ------------------------------------------- | -------------- |
| 95.2% |      59 | `ClassFileParser::ClassFileParser`          | `libjvm.dylib` |
|  3.2% |       2 | `ClassFileParser::create_instance_klass`    | `libjvm.dylib` |
|  1.6% |       1 | `ClassFileParser::mangle_hidden_class_name` | `libjvm.dylib` |

##### `ClassFileParser::ClassFileParser` (`libjvm.dylib`)

|     % | Samples | Callee                                        | Location       |
| ----: | ------: | --------------------------------------------- | -------------- |
| 93.2% |      55 | `ClassFileParser::parse_stream`               | `libjvm.dylib` |
|  6.8% |       4 | `ClassFileParser::post_process_parsed_stream` | `libjvm.dylib` |

##### `IR::IR` (`libjvm.dylib`)

|     % | Samples | Callee             | Location       |
| ----: | ------: | ------------------ | -------------- |
| 98.2% |      56 | `IRScope::IRScope` | `libjvm.dylib` |

##### `GraphBuilder::GraphBuilder` (`libjvm.dylib`)

|     % | Samples | Callee                               | Location       |
| ----: | ------: | ------------------------------------ | -------------- |
| 91.1% |      51 | `GraphBuilder::iterate_all_blocks`   | `libjvm.dylib` |
|  7.1% |       4 | `BlockListBuilder::BlockListBuilder` | `libjvm.dylib` |
|  1.8% |       1 | `BlockBegin::iterate_preorder`       | `libjvm.dylib` |

##### `Parse::do_call` (`libjvm.dylib`)

|     % | Samples | Callee                             | Location       |
| ----: | ------: | ---------------------------------- | -------------- |
| 69.6% |      39 | `PredictedCallGenerator::generate` | `libjvm.dylib` |
| 53.6% |      30 | `ParseGenerator::generate`         | `libjvm.dylib` |
| 19.6% |      11 | `Compile::call_generator`          | `libjvm.dylib` |
|  5.4% |       3 | `ciBytecodeStream::get_method`     | `libjvm.dylib` |
|  5.4% |       3 | `DirectCallGenerator::generate`    | `libjvm.dylib` |

##### `IRScope::IRScope` (`libjvm.dylib`)

|      % | Samples | Callee                       | Location       |
| -----: | ------: | ---------------------------- | -------------- |
| 100.0% |      56 | `GraphBuilder::GraphBuilder` | `libjvm.dylib` |

##### `GraphBuilder::iterate_all_blocks` (`libjvm.dylib`)

|     % | Samples | Callee                                      | Location        |
| ----: | ------: | ------------------------------------------- | --------------- |
| 98.0% |      50 | `GraphBuilder::iterate_bytecodes_for_block` | `libjvm.dylib`  |
|  2.0% |       1 | `ValueStack::ValueStack`                    | `libjvm.dylib`  |
|  2.0% |       1 | `tlv_get_addr`                              | `libdyld.dylib` |

##### `Matcher::match` (`libjvm.dylib`)

|     % | Samples | Callee                                        | Location       |
| ----: | ------: | --------------------------------------------- | -------------- |
| 76.0% |      38 | `Matcher::xform`                              | `libjvm.dylib` |
| 10.0% |       5 | `Matcher::specialize_generic_vector_operands` | `libjvm.dylib` |
|  6.0% |       3 | `Matcher::find_shared`                        | `libjvm.dylib` |
|  2.0% |       1 | `ConINode::Opcode`                            | `libjvm.dylib` |
|  2.0% |       1 | `CallNode::match`                             | `libjvm.dylib` |

##### `GraphBuilder::iterate_bytecodes_for_block` (`libjvm.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 90.0% |      45 | `GraphBuilder::invoke`          | `libjvm.dylib` |
| 12.0% |       6 | `GraphBuilder::access_field`    | `libjvm.dylib` |
|  4.0% |       2 | `GraphBuilder::store_indexed`   | `libjvm.dylib` |
|  2.0% |       1 | `GraphBuilder::new_instance`    | `libjvm.dylib` |
|  2.0% |       1 | `ciInstanceKlass::is_interface` | `libjvm.dylib` |

## Hottest call stacks

Call stacks with the most samples collected in their leaf frame.

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ---: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 3.4% |      44 | `inflate_fast` (`libzip.dylib`) ← `Java_java_util_zip_Inflater_inflateBytesBytes` ← `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`) ← `inflate(byte[], int, int)` ← `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`) ← `read(byte[], int, int)` (`java.util.zip.ZipInputStream`) ← `read(byte[])` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                                                |
| 1.2% |      15 | `PhaseChaitin::Split` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                   |
| 1.2% |      15 | `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                      |
| 0.7% |       9 | `PhaseChaitin::elide_copy` (`libjvm.dylib`) ← `PhaseChaitin::post_allocate_copy_removal` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                 |
| 0.7% |       9 | `PhaseChaitin::gather_lrg_masks` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                        |
| 0.7% |       9 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait` ← `CompileQueue::get` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 0.7% |       9 | `inflate` (`libzip.dylib`) ← `Java_java_util_zip_Inflater_inflateBytesBytes` ← `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`) ← `inflate(byte[], int, int)` ← `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`) ← `read(byte[], int, int)` (`java.util.zip.ZipInputStream`) ← `read(byte[])` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                                                     |
| 0.6% |       8 | `Arena::contains` (`libjvm.dylib`) ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                     |
| 0.5% |       7 | `IntervalWalker::walk_to` (`libjvm.dylib`) ← `IntervalWalker::walk_to` ← `LinearScan::allocate_registers` ← `LinearScan::do_linear_scan` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                      |
| 0.5% |       6 | `PhaseAggressiveCoalesce::insert_copies` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                |
| 0.5% |       6 | `LinearScanWalker::free_collect_inactive_fixed` (`libjvm.dylib`) ← `LinearScanWalker::alloc_free_reg` ← `LinearScanWalker::activate_current` ← `IntervalWalker::walk_to` ← `LinearScan::allocate_registers` ← `LinearScan::do_linear_scan` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                    |
| 0.5% |       6 | `inflate_fast` (`libzip.dylib`) ← `Java_java_util_zip_Inflater_inflateBytesBytes` ← `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`) ← `inflate(byte[], int, int)` ← `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`) ← `read(byte[], int, int)` (`java.util.zip.ZipInputStream`) ← `read(byte[])` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])` |
| 0.4% |       5 | `PhaseIdealLoop::build_loop_late` (`libjvm.dylib`) ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                    |
| 0.4% |       5 | `PhaseIdealLoop::build_loop_late_post_work` (`libjvm.dylib`) ← `PhaseIdealLoop::build_loop_late` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                      |
| 0.4% |       5 | `LinearScan::build_intervals` (`libjvm.dylib`) ← `LinearScan::do_linear_scan` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                 |
| 0.4% |       5 | `PhaseIdealLoop::Dominators` (`libjvm.dylib`) ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                         |
| 0.3% |       4 | `fwd_copy_again` (`libjvm.dylib`) ← `G1ParScanThreadState::trim_queue_to_threshold` ← `G1ParScanThreadState::steal_and_trim_queue` ← `G1ParEvacuateFollowersClosure::do_void` ← `G1EvacuateRegionsTask::evacuate_live_objects` ← `G1EvacuateRegionsBaseTask::work` ← `WorkerThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                      |
| 0.3% |       4 | `Matcher::xform` (`libjvm.dylib`) ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                         |
| 0.3% |       4 | `PhaseLive::add_liveout` (`libjvm.dylib`) ← `PhaseLive::compute` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                         |
| 0.3% |       4 | `PhaseIdealLoop::split_if_with_blocks` (`libjvm.dylib`) ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                   |

# Allocated heap profile

Allocated 670 MiB over 1,334 samples (514 KiB per sample).

| Category         |     % |    Size | Samples |
| ---------------- | ----: | ------: | ------: |
| Standard library | 77.3% | 518 MiB |   1,030 |
| Ours             | 22.7% | 152 MiB |     304 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
├── 615 MiB (91.8%) main(String[]) at org.jetbrains.kotlin.preloading.Preloader
│   └── 615 MiB (91.8%) run(String[])
│       ├── 364 MiB (54.3%) preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler) at org.jetbrains.kotlin.preloading.ClassPreloadingUtils
│       │   └── … 364 MiB (54.3%, self 0.5%) loadAllClassesFromJars(Collection, int, ClassHandler) at org.jetbrains.kotlin.preloading.ClassPreloadingUtils
│       │       ├── 181 MiB (27.1%) toByteArray() at java.io.ByteArrayOutputStream
│       │       │   └── 181 MiB (27.1%, self 20.2%, self 21.3% globally) copyOf(byte[], int) at java.util.Arrays
│       │       │       └── 46 MiB (6.9%) clone() at java.lang.Object
│       │       ├── 166 MiB (24.8%) <init>(int) at java.io.ByteArrayOutputStream
│       │       └── 10 MiB (1.5%) getNextEntry() at java.util.zip.ZipInputStream
│       │           └── 10 MiB (1.5%) readLOC()
│       │               ├── … 5 MiB (0.7%, self 2.9% globally) copyOfRangeByte(byte[], int, int) at java.util.Arrays
│       │               └── 3.5 MiB (0.5%) createZipEntry(String)
│       └── … 250 MiB (37.4%) main(String[]) at org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion
│           ├── … 246 MiB (36.7%) exec(PrintStream, Services, MessageRenderer, String[]) at org.jetbrains.kotlin.cli.common.CLICompiler
│           │   ├── 242 MiB (36.2%) exec(MessageCollector, Services, CommonCompilerArguments)
│           │   │   ├── … 238 MiB (35.6%) runPhasedPipeline(ArgumentsPipelineArtifact) at org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline
│           │   │   │   ├── … 233 MiB (34.9%) invoke(PhaseConfig, PhaserState, LoggingContext, Object) at org.jetbrains.kotlin.config.phaser.NamedCompilerPhase
│           │   │   │   │   ├── 222 MiB (33.2%) phaseBody(LoggingContext, Object) at org.jetbrains.kotlin.cli.pipeline.PipelinePhase
│           │   │   │   │   │   └── 222 MiB (33.2%) phaseBody(PipelineContext, PipelineArtifact)
│           │   │   │   │   │       ├── 195 MiB (29.2%) executePhase(PipelineArtifact) at org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase
│           │   │   │   │   │       │   └── 195 MiB (29.2%) executePhase(ConfigurationPipelineArtifact)
│           │   │   │   │   │       │       ├── 10.5 MiB (1.6%) buildFirViaLightTree(FirSession, Collection, DiagnosticReporter, Function2) at org.jetbrains.kotlin.fir.pipeline.FirUtilsKt
│           │   │   │   │   │       │       │   └── 10.5 MiB (1.6%) buildFirFile(CharSequence, KtSourceFile, KtSourceFileLinesMapping) at org.jetbrains.kotlin.fir.lightTree.LightTree2Fir
│           │   │   │   │   │       │       │       ├── 5.5 MiB (0.8%) buildLightTree(CharSequence, KtSourceFile, KotlinLightParser$LightTreeParsingErrorListener) at org.jetbrains.kotlin.parsing.KotlinLightParser …
│           │   │   │   │   │       │       │       └── … 5 MiB (0.7%) convertFunctionDeclaration(LighterASTNode) at org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirDeclarationBuilder
│           │   │   │   │   │       │       │           ├── … 512 KiB (0.1%, self 0.8% globally) newNode(int, Object, Object, HashMap$Node) at java.util.LinkedHashMap
│           │   │   │   │   │       │       │           └── 4.5 MiB (0.7%) 2 more callees, led by (0.5%) convertFunctionBody(LighterASTNode, LighterASTNode, boolean)
│           │   │   │   │   │       │       └── 185 MiB (27.6%) 5 more callees, led by (22.2%) resolveAndCheckFir(FirSession, List, BaseDiagnosticsCollector) at org.jetbrains.kotlin.fir.pipeline.FirUtilsKt
│           │   │   │   │   │       └── 27 MiB (4.0%) 4 more callees, led by (2.6%) executePhase(PipelineArtifact) at org.jetbrains.kotlin.cli.pipeline.jvm.JvmFir2IrPipelinePhase
│           │   │   │   │   └── 11 MiB (1.6%) 3 more callees, led by (1.1%) phaseBody(LoggingContext, Object) at org.jetbrains.kotlin.backend.common.phaser.FileLoweringPhase
│           │   │   │   └── 5 MiB (0.7%) reportToMessageCollector(BaseDiagnosticsCollector, MessageCollector, boolean) at org.jetbrains.kotlin.cli.common.fir.FirDiagnosticsCompilerResultsReporter …
│           │   │   └── 3.5 MiB (0.5%) <clinit>() at org.jetbrains.kotlin.cli.common.ArgumentsKt …
│           │   └── … 512 KiB (0.1%) <init>(ClassWriter) at jdk.internal.org.objectweb.asm.SymbolTable
│           └── … 3.71 MiB (0.6%) initCEN(int, ZipCoder) at java.util.zip.ZipFile$Source
└── … 53.5 MiB (8.0%) generate() at org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen
    └── 51 MiB (7.6%) generateMethod(IrFunction, SourceMapper)
        ├── … 22 MiB (3.3%) doGenerate(ReifiedTypeParametersUsages) at org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen
        │   ├── … 512 KiB (0.1%, self 1.9% globally) iterator() at java.util.ArrayList
        │   └── 20.5 MiB (3.1%) 4 more callees, led by (2.8%) generate() at org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen
        └── 28 MiB (4.2%) 5 more callees, led by (3.6%) accept(MethodVisitor) at org.jetbrains.org.objectweb.asm.tree.MethodNode
```

## Hottest functions

### Self size

Functions with the most bytes allocated within the function body, excluding callees.

|     % |     Size | Samples | Function                                                                        | Location                                              |
| ----: | -------: | ------: | ------------------------------------------------------------------------------- | ----------------------------------------------------- |
| 24.8% |  166 MiB |     332 | `<init>(int)`                                                                   | `java.io.ByteArrayOutputStream`                       |
| 21.3% |  142 MiB |     285 | `copyOf(byte[], int)`                                                           | `java.util.Arrays`                                    |
|  6.9% |   46 MiB |      92 | `clone()`                                                                       | `java.lang.Object`                                    |
|  2.9% | 19.5 MiB |      39 | `copyOfRangeByte(byte[], int, int)`                                             | `java.util.Arrays`                                    |
|  2.8% |   19 MiB |      38 | `<init>(int)`                                                                   | `org.jetbrains.kotlin.protobuf.ByteString$Output`     |
|  1.9% | 12.5 MiB |      25 | `iterator()`                                                                    | `java.util.ArrayList`                                 |
|  1.2% |    8 MiB |      16 | `grow(int)`                                                                     | `java.util.ArrayList`                                 |
|  1.0% |  6.5 MiB |      13 | `box-impl(List)`                                                                | `org.jetbrains.kotlin.fir.MutableOrEmptyList`         |
|  0.8% |  5.5 MiB |      11 | `newInstance(OutputStream, int)`                                                | `org.jetbrains.kotlin.protobuf.CodedOutputStream`     |
|  0.8% |  5.5 MiB |      11 | `newNode(int, Object, Object, HashMap$Node)`                                    | `java.util.LinkedHashMap`                             |
|  0.7% |    5 MiB |      10 | `<init>(int)`                                                                   | `java.lang.AbstractStringBuilder`                     |
|  0.7% |  4.5 MiB |       9 | `<init>(int, int)`                                                              | `org.jetbrains.org.objectweb.asm.tree.analysis.Frame` |
|  0.6% |    4 MiB |       8 | `<init>(int)`                                                                   | `java.util.ArrayList`                                 |
|  0.6% |    4 MiB |       8 | `resize()`                                                                      | `java.util.HashMap`                                   |
|  0.6% |    4 MiB |       8 | `newString(byte[], int, int)`                                                   | `java.lang.StringLatin1`                              |
|  0.6% |    4 MiB |       8 | `newOutput()`                                                                   | `org.jetbrains.kotlin.protobuf.ByteString`            |
|  0.6% |    4 MiB |       8 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)`                     | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$1`       |
|  0.6% | 3.71 MiB |       2 | `initCEN(int, ZipCoder)`                                                        | `java.util.zip.ZipFile$Source`                        |
|  0.5% |  3.5 MiB |       7 | `getTypeInternal(String, int, int)`                                             | `org.jetbrains.org.objectweb.asm.Type`                |
|  0.5% |  3.5 MiB |       7 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`                               |

#### Categories

Categories accounting for at least 1.0% of self size.

##### Standard library

|     % |     Size | Samples | Function                                                                        | Location                                    |
| ----: | -------: | ------: | ------------------------------------------------------------------------------- | ------------------------------------------- |
| 24.8% |  166 MiB |     332 | `<init>(int)`                                                                   | `java.io.ByteArrayOutputStream`             |
| 21.3% |  142 MiB |     285 | `copyOf(byte[], int)`                                                           | `java.util.Arrays`                          |
|  6.9% |   46 MiB |      92 | `clone()`                                                                       | `java.lang.Object`                          |
|  2.9% | 19.5 MiB |      39 | `copyOfRangeByte(byte[], int, int)`                                             | `java.util.Arrays`                          |
|  1.9% | 12.5 MiB |      25 | `iterator()`                                                                    | `java.util.ArrayList`                       |
|  1.2% |    8 MiB |      16 | `grow(int)`                                                                     | `java.util.ArrayList`                       |
|  0.8% |  5.5 MiB |      11 | `newNode(int, Object, Object, HashMap$Node)`                                    | `java.util.LinkedHashMap`                   |
|  0.7% |    5 MiB |      10 | `<init>(int)`                                                                   | `java.lang.AbstractStringBuilder`           |
|  0.6% |    4 MiB |       8 | `<init>(int)`                                                                   | `java.util.ArrayList`                       |
|  0.6% |    4 MiB |       8 | `resize()`                                                                      | `java.util.HashMap`                         |
|  0.6% |    4 MiB |       8 | `newString(byte[], int, int)`                                                   | `java.lang.StringLatin1`                    |
|  0.6% | 3.71 MiB |       2 | `initCEN(int, ZipCoder)`                                                        | `java.util.zip.ZipFile$Source`              |
|  0.5% |  3.5 MiB |       7 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`                     |
|  0.5% |  3.5 MiB |       7 | `newNode(int, Object, Object, HashMap$Node)`                                    | `java.util.HashMap`                         |
|  0.5% |  3.5 MiB |       7 | `createZipEntry(String)`                                                        | `java.util.zip.ZipInputStream`              |
|  0.5% |  3.5 MiB |       7 | `allocateUninitializedArray(Class, int)`                                        | `jdk.internal.misc.Unsafe`                  |
|  0.5% |  3.5 MiB |       7 | `allocateInstance(Class)`                                                       | `jdk.internal.misc.Unsafe`                  |
|  0.4% |    3 MiB |       6 | `to(Object, Object)`                                                            | `kotlin.TuplesKt`                           |
|  0.4% |    3 MiB |       6 | `toString()`                                                                    | `java.lang.StringBuilder`                   |
|  0.4% |    3 MiB |       6 | `enlarge(int)`                                                                  | `jdk.internal.org.objectweb.asm.ByteVector` |

##### Ours

|    % |    Size | Samples | Function                                                                              | Location                                                                                           |
| ---: | ------: | ------: | ------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| 2.8% |  19 MiB |      38 | `<init>(int)`                                                                         | `org.jetbrains.kotlin.protobuf.ByteString$Output`                                                  |
| 1.0% | 6.5 MiB |      13 | `box-impl(List)`                                                                      | `org.jetbrains.kotlin.fir.MutableOrEmptyList`                                                      |
| 0.8% | 5.5 MiB |      11 | `newInstance(OutputStream, int)`                                                      | `org.jetbrains.kotlin.protobuf.CodedOutputStream`                                                  |
| 0.7% | 4.5 MiB |       9 | `<init>(int, int)`                                                                    | `org.jetbrains.org.objectweb.asm.tree.analysis.Frame`                                              |
| 0.6% |   4 MiB |       8 | `newOutput()`                                                                         | `org.jetbrains.kotlin.protobuf.ByteString`                                                         |
| 0.6% |   4 MiB |       8 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)`                           | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$1`                                                    |
| 0.5% | 3.5 MiB |       7 | `getTypeInternal(String, int, int)`                                                   | `org.jetbrains.org.objectweb.asm.Type`                                                             |
| 0.5% | 3.5 MiB |       7 | `loadAllClassesFromJars(Collection, int, ClassHandler)`                               | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`                                             |
| 0.5% | 3.5 MiB |       7 | `<init>(InputStream)`                                                                 | `org.jetbrains.kotlin.protobuf.CodedInputStream`                                                   |
| 0.4% | 2.5 MiB |       5 | `contentsToByteArray$lambda$0(ZipEntryDescription, LargeDynamicMappedBuffer$Mapping)` | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt`                                  |
| 0.4% | 2.5 MiB |       5 | `readUtf(int, int, char[])`                                                           | `org.jetbrains.org.objectweb.asm.ClassReader`                                                      |
| 0.4% | 2.5 MiB |       5 | `visitVarInsn(int, int)`                                                              | `org.jetbrains.org.objectweb.asm.tree.MethodNode`                                                  |
| 0.4% | 2.5 MiB |       5 | `<init>()`                                                                            | `org.jetbrains.kotlin.resolve.calls.inference.model.MutableConstraintStorage`                      |
| 0.3% |   2 MiB |       4 | `<init>(String, MethodNode, Interpreter, boolean, boolean, boolean, Function2)`       | `org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer`                                    |
| 0.3% |   2 MiB |       4 | `<init>(byte[], int, boolean)`                                                        | `org.jetbrains.org.objectweb.asm.ClassReader`                                                      |
| 0.3% |   2 MiB |       4 | `readBootstrapMethodsAttribute(int)`                                                  | `org.jetbrains.org.objectweb.asm.ClassReader`                                                      |
| 0.3% |   2 MiB |       4 | `newTypeCheckerState(TypeSystemContext, boolean, boolean, boolean)`                   | `org.jetbrains.kotlin.fir.types.ConeInferenceContext`                                              |
| 0.2% | 1.5 MiB |       3 | `accept(ClassVisitor, Attribute[], int)`                                              | `org.jetbrains.org.objectweb.asm.ClassReader`                                                      |
| 0.2% | 1.5 MiB |       3 | `simplifyTrivialInstructions(MethodNode)`                                             | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer` |
| 0.2% | 1.5 MiB |       3 | `create()`                                                                            | `com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure$2`                                          |

#### Lines

Lines with the largest contribution to each function's self size.

##### `<init>(int)` (`java.io.ByteArrayOutputStream`)

|      % |    Size | Samples | Location                           |
| -----: | ------: | ------: | ---------------------------------- |
| 100.0% | 166 MiB |     332 | `java.io.ByteArrayOutputStream:81` |

##### `copyOf(byte[], int)` (`java.util.Arrays`)

|     % |    Size | Samples | Location                |
| ----: | ------: | ------: | ----------------------- |
| 95.1% | 135 MiB |     271 | `java.util.Arrays:3539` |
|  4.9% |   7 MiB |      14 | `java.util.Arrays:3541` |

##### `copyOfRangeByte(byte[], int, int)` (`java.util.Arrays`)

|      % |     Size | Samples | Location                |
| -----: | -------: | ------: | ----------------------- |
| 100.0% | 19.5 MiB |      39 | `java.util.Arrays:3863` |

##### `<init>(int)` (`org.jetbrains.kotlin.protobuf.ByteString$Output`)

|     % |   Size | Samples | Location                                              |
| ----: | -----: | ------: | ----------------------------------------------------- |
| 89.5% | 17 MiB |      34 | `org.jetbrains.kotlin.protobuf.ByteString$Output:789` |
| 10.5% |  2 MiB |       4 | `org.jetbrains.kotlin.protobuf.ByteString$Output:788` |

##### `iterator()` (`java.util.ArrayList`)

|      % |     Size | Samples | Location                   |
| -----: | -------: | ------: | -------------------------- |
| 100.0% | 12.5 MiB |      25 | `java.util.ArrayList:1029` |

##### `grow(int)` (`java.util.ArrayList`)

|      % |  Size | Samples | Location                  |
| -----: | ----: | ------: | ------------------------- |
| 100.0% | 8 MiB |      16 | `java.util.ArrayList:239` |

##### `newInstance(OutputStream, int)` (`org.jetbrains.kotlin.protobuf.CodedOutputStream`)

|      % |    Size | Samples | Location                                              |
| -----: | ------: | ------: | ----------------------------------------------------- |
| 100.0% | 5.5 MiB |      11 | `org.jetbrains.kotlin.protobuf.CodedOutputStream:106` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.LinkedHashMap`)

|      % |    Size | Samples | Location                      |
| -----: | ------: | ------: | ----------------------------- |
| 100.0% | 5.5 MiB |      11 | `java.util.LinkedHashMap:281` |

##### `<init>(int)` (`java.lang.AbstractStringBuilder`)

|      % |  Size | Samples | Location                              |
| -----: | ----: | ------: | ------------------------------------- |
| 100.0% | 5 MiB |      10 | `java.lang.AbstractStringBuilder:101` |

##### `<init>(int, int)` (`org.jetbrains.org.objectweb.asm.tree.analysis.Frame`)

|      % |    Size | Samples | Location                                                 |
| -----: | ------: | ------: | -------------------------------------------------------- |
| 100.0% | 4.5 MiB |       9 | `org.jetbrains.org.objectweb.asm.tree.analysis.Frame:96` |

##### `<init>(int)` (`java.util.ArrayList`)

|      % |  Size | Samples | Location                  |
| -----: | ----: | ------: | ------------------------- |
| 100.0% | 4 MiB |       8 | `java.util.ArrayList:156` |

##### `resize()` (`java.util.HashMap`)

|      % |  Size | Samples | Location                |
| -----: | ----: | ------: | ----------------------- |
| 100.0% | 4 MiB |       8 | `java.util.HashMap:710` |

##### `newString(byte[], int, int)` (`java.lang.StringLatin1`)

|      % |  Size | Samples | Location                     |
| -----: | ----: | ------: | ---------------------------- |
| 100.0% | 4 MiB |       8 | `java.lang.StringLatin1:750` |

##### `newOutput()` (`org.jetbrains.kotlin.protobuf.ByteString`)

|      % |  Size | Samples | Location                                       |
| -----: | ----: | ------: | ---------------------------------------------- |
| 100.0% | 4 MiB |       8 | `org.jetbrains.kotlin.protobuf.ByteString:751` |

##### `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type$1`)

|      % |  Size | Samples | Location                                             |
| -----: | ----: | ------: | ---------------------------------------------------- |
| 100.0% | 4 MiB |       8 | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$1:5079` |

##### `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

|     % |     Size | Samples | Location                            |
| ----: | -------: | ------: | ----------------------------------- |
| 86.5% | 3.21 MiB |       1 | `java.util.zip.ZipFile$Source:1733` |
| 13.5% |  512 KiB |       1 | `java.util.zip.ZipFile$Source:1749` |

##### `getTypeInternal(String, int, int)` (`org.jetbrains.org.objectweb.asm.Type`)

|      % |    Size | Samples | Location                                   |
| -----: | ------: | ------: | ------------------------------------------ |
| 100.0% | 3.5 MiB |       7 | `org.jetbrains.org.objectweb.asm.Type:425` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`)

|      % |    Size | Samples | Location                 |
| -----: | ------: | ------: | ------------------------ |
| 100.0% | 3.5 MiB |       7 | `java.util.HashMap:1909` |

##### `createZipEntry(String)` (`java.util.zip.ZipInputStream`)

|      % |    Size | Samples | Location                           |
| -----: | ------: | ------: | ---------------------------------- |
| 100.0% | 3.5 MiB |       7 | `java.util.zip.ZipInputStream:555` |

##### `allocateUninitializedArray(Class, int)` (`jdk.internal.misc.Unsafe`)

|      % |    Size | Samples | Location                        |
| -----: | ------: | ------: | ------------------------------- |
| 100.0% | 3.5 MiB |       7 | `jdk.internal.misc.Unsafe:1380` |

##### `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`)

|     % |    Size | Samples | Location                                                   |
| ----: | ------: | ------: | ---------------------------------------------------------- |
| 57.1% |   2 MiB |       4 | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils:139` |
| 42.9% | 1.5 MiB |       3 | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils:151` |

##### `<init>(InputStream)` (`org.jetbrains.kotlin.protobuf.CodedInputStream`)

|      % |    Size | Samples | Location                                             |
| -----: | ------: | ------: | ---------------------------------------------------- |
| 100.0% | 3.5 MiB |       7 | `org.jetbrains.kotlin.protobuf.CodedInputStream:911` |

##### `to(Object, Object)` (`kotlin.TuplesKt`)

|      % |  Size | Samples | Location             |
| -----: | ----: | ------: | -------------------- |
| 100.0% | 3 MiB |       6 | `kotlin.TuplesKt:44` |

##### `toString()` (`java.lang.StringBuilder`)

|      % |  Size | Samples | Location                      |
| -----: | ----: | ------: | ----------------------------- |
| 100.0% | 3 MiB |       6 | `java.lang.StringBuilder:475` |

##### `enlarge(int)` (`jdk.internal.org.objectweb.asm.ByteVector`)

|      % |  Size | Samples | Location                                        |
| -----: | ----: | ------: | ----------------------------------------------- |
| 100.0% | 3 MiB |       6 | `jdk.internal.org.objectweb.asm.ByteVector:401` |

##### `contentsToByteArray$lambda$0(ZipEntryDescription, LargeDynamicMappedBuffer$Mapping)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt`)

|      % |    Size | Samples | Location                                                             |
| -----: | ------: | ------: | -------------------------------------------------------------------- |
| 100.0% | 2.5 MiB |       5 | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt:51` |

##### `readUtf(int, int, char[])` (`org.jetbrains.org.objectweb.asm.ClassReader`)

|      % |    Size | Samples | Location                                           |
| -----: | ------: | ------: | -------------------------------------------------- |
| 100.0% | 2.5 MiB |       5 | `org.jetbrains.org.objectweb.asm.ClassReader:3886` |

##### `visitVarInsn(int, int)` (`org.jetbrains.org.objectweb.asm.tree.MethodNode`)

|      % |    Size | Samples | Location                                              |
| -----: | ------: | ------: | ----------------------------------------------------- |
| 100.0% | 2.5 MiB |       5 | `org.jetbrains.org.objectweb.asm.tree.MethodNode:351` |

##### `<init>()` (`org.jetbrains.kotlin.resolve.calls.inference.model.MutableConstraintStorage`)

|     % |    Size | Samples | Location                                                                          |
| ----: | ------: | ------: | --------------------------------------------------------------------------------- |
| 20.0% | 512 KiB |       1 | `org.jetbrains.kotlin.resolve.calls.inference.model.MutableConstraintStorage:317` |
| 20.0% | 512 KiB |       1 | `org.jetbrains.kotlin.resolve.calls.inference.model.MutableConstraintStorage:316` |
| 20.0% | 512 KiB |       1 | `org.jetbrains.kotlin.resolve.calls.inference.model.MutableConstraintStorage:327` |
| 20.0% | 512 KiB |       1 | `org.jetbrains.kotlin.resolve.calls.inference.model.MutableConstraintStorage:334` |
| 20.0% | 512 KiB |       1 | `org.jetbrains.kotlin.resolve.calls.inference.model.MutableConstraintStorage:332` |

##### `<init>(String, MethodNode, Interpreter, boolean, boolean, boolean, Function2)` (`org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer`)

|     % |    Size | Samples | Location                                                           |
| ----: | ------: | ------: | ------------------------------------------------------------------ |
| 50.0% |   1 MiB |       2 | `org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer:35` |
| 25.0% | 512 KiB |       1 | `org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer:28` |
| 25.0% | 512 KiB |       1 | `org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer:30` |

##### `<init>(byte[], int, boolean)` (`org.jetbrains.org.objectweb.asm.ClassReader`)

|     % |  Size | Samples | Location                                          |
| ----: | ----: | ------: | ------------------------------------------------- |
| 50.0% | 1 MiB |       2 | `org.jetbrains.org.objectweb.asm.ClassReader:214` |
| 50.0% | 1 MiB |       2 | `org.jetbrains.org.objectweb.asm.ClassReader:215` |

##### `readBootstrapMethodsAttribute(int)` (`org.jetbrains.org.objectweb.asm.ClassReader`)

|      % |  Size | Samples | Location                                           |
| -----: | ----: | ------: | -------------------------------------------------- |
| 100.0% | 2 MiB |       4 | `org.jetbrains.org.objectweb.asm.ClassReader:3624` |

##### `newTypeCheckerState(TypeSystemContext, boolean, boolean, boolean)` (`org.jetbrains.kotlin.fir.types.ConeInferenceContext`)

|      % |  Size | Samples | Location                                                  |
| -----: | ----: | ------: | --------------------------------------------------------- |
| 100.0% | 2 MiB |       4 | `org.jetbrains.kotlin.fir.types.ConeInferenceContext:169` |

##### `accept(ClassVisitor, Attribute[], int)` (`org.jetbrains.org.objectweb.asm.ClassReader`)

|      % |    Size | Samples | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 1.5 MiB |       3 | `org.jetbrains.org.objectweb.asm.ClassReader:458` |

##### `simplifyTrivialInstructions(MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer`)

|     % |    Size | Samples | Location                                                                                              |
| ----: | ------: | ------: | ----------------------------------------------------------------------------------------------------- |
| 33.3% | 512 KiB |       1 | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer:58` |
| 33.3% | 512 KiB |       1 | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer:48` |
| 33.3% | 512 KiB |       1 | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer:57` |

##### `create()` (`com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure$2`)

|      % |    Size | Samples | Location                                                       |
| -----: | ------: | ------: | -------------------------------------------------------------- |
| 100.0% | 1.5 MiB |       3 | `com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure$2:1568` |

#### Callers

Callers with the largest contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `<init>(int)` (`java.io.ByteArrayOutputStream`)

|      % |    Size | Samples | Caller                                                  | Location                                               |
| -----: | ------: | ------: | ------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% | 166 MiB |     332 | `loadAllClassesFromJars(Collection, int, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `copyOf(byte[], int)` (`java.util.Arrays`)

|     % |    Size | Samples | Caller                        | Location                          |
| ----: | ------: | ------: | ----------------------------- | --------------------------------- |
| 95.1% | 135 MiB |     271 | `toByteArray()`               | `java.io.ByteArrayOutputStream`   |
|  3.9% | 5.5 MiB |      11 | `ensureCapacityInternal(int)` | `java.lang.AbstractStringBuilder` |
|  1.1% | 1.5 MiB |       3 | `getBytes()`                  | `jdk.internal.loader.Resource`    |

##### `clone()` (`java.lang.Object`)

|      % |   Size | Samples | Caller                | Location           |
| -----: | -----: | ------: | --------------------- | ------------------ |
| 100.0% | 46 MiB |      92 | `copyOf(byte[], int)` | `java.util.Arrays` |

##### `copyOfRangeByte(byte[], int, int)` (`java.util.Arrays`)

|      % |     Size | Samples | Caller                          | Location           |
| -----: | -------: | ------: | ------------------------------- | ------------------ |
| 100.0% | 19.5 MiB |      39 | `copyOfRange(byte[], int, int)` | `java.util.Arrays` |

##### `<init>(int)` (`org.jetbrains.kotlin.protobuf.ByteString$Output`)

|      % |   Size | Samples | Caller        | Location                                   |
| -----: | -----: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 19 MiB |      38 | `newOutput()` | `org.jetbrains.kotlin.protobuf.ByteString` |

##### `iterator()` (`java.util.ArrayList`)

|    % |    Size | Samples | Caller                                         | Location                                                   |
| ---: | ------: | ------: | ---------------------------------------------- | ---------------------------------------------------------- |
| 8.0% |   1 MiB |       2 | `acceptChildren(IrVisitor, Object)`            | `org.jetbrains.kotlin.ir.expressions.IrWhen`               |
| 4.0% | 512 KiB |       1 | `getAnnotation(IrAnnotationContainer, FqName)` | `org.jetbrains.kotlin.ir.util.IrUtilsKt`                   |
| 4.0% | 512 KiB |       1 | `get(Object)`                                  | `org.jetbrains.kotlin.utils.SmartIdentityTable`            |
| 4.0% | 512 KiB |       1 | `zip(Iterable, Iterable)`                      | `kotlin.collections.CollectionsKt___CollectionsKt`         |
| 4.0% | 512 KiB |       1 | `enterCallArguments(FirStatement, List)`       | `org.jetbrains.kotlin.fir.resolve.dfa.FirDataFlowAnalyzer` |

##### `grow(int)` (`java.util.ArrayList`)

|      % |  Size | Samples | Caller   | Location              |
| -----: | ----: | ------: | -------- | --------------------- |
| 100.0% | 8 MiB |      16 | `grow()` | `java.util.ArrayList` |

##### `box-impl(List)` (`org.jetbrains.kotlin.fir.MutableOrEmptyList`)

|     % |    Size | Samples | Caller                               | Location                                                                    |
| ----: | ------: | ------: | ------------------------------------ | --------------------------------------------------------------------------- |
| 30.8% |   2 MiB |       4 | `acceptChildren(FirVisitor, Object)` | `org.jetbrains.kotlin.fir.expressions.impl.FirPropertyAccessExpressionImpl` |
| 15.4% |   1 MiB |       2 | `getAnnotations()`                   | `org.jetbrains.kotlin.fir.types.impl.FirResolvedTypeRefImpl`                |
|  7.7% | 512 KiB |       1 | `getAnnotations()`                   | `org.jetbrains.kotlin.fir.declarations.impl.FirRegularClassImpl`            |
|  7.7% | 512 KiB |       1 | `getAnnotations()`                   | `org.jetbrains.kotlin.fir.expressions.impl.FirFunctionCallImpl`             |
|  7.7% | 512 KiB |       1 | `getTypeArguments()`                 | `org.jetbrains.kotlin.fir.expressions.impl.FirFunctionCallImpl`             |

##### `newInstance(OutputStream, int)` (`org.jetbrains.kotlin.protobuf.CodedOutputStream`)

|     % |    Size | Samples | Caller                                            | Location                                                           |
| ----: | ------: | ------: | ------------------------------------------------- | ------------------------------------------------------------------ |
| 36.4% |   2 MiB |       4 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Annotation$Argument$Value` |
| 18.2% |   1 MiB |       2 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$ValueParameter`            |
| 18.2% |   1 MiB |       2 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Type`                      |
|  9.1% | 512 KiB |       1 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Function`                  |
|  9.1% | 512 KiB |       1 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$TypeParameter`             |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.LinkedHashMap`)

|      % |    Size | Samples | Caller                                          | Location            |
| -----: | ------: | ------: | ----------------------------------------------- | ------------------- |
| 100.0% | 5.5 MiB |      11 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `<init>(int)` (`java.lang.AbstractStringBuilder`)

|     % |    Size | Samples | Caller        | Location                  |
| ----: | ------: | ------: | ------------- | ------------------------- |
| 70.0% | 3.5 MiB |       7 | `<init>()`    | `java.lang.StringBuilder` |
| 30.0% | 1.5 MiB |       3 | `<init>(int)` | `java.lang.StringBuilder` |

##### `<init>(int, int)` (`org.jetbrains.org.objectweb.asm.tree.analysis.Frame`)

|     % |    Size | Samples | Caller                               | Location                                                                            |
| ----: | ------: | ------: | ------------------------------------ | ----------------------------------------------------------------------------------- |
| 66.7% |   3 MiB |       6 | `_init_$lambda$0(int, int)`          | `org.jetbrains.kotlin.codegen.optimization.common.FastMethodAnalyzer`               |
| 22.2% |   1 MiB |       2 | `<init>(int, int)`                   | `org.jetbrains.kotlin.codegen.optimization.boxing.BoxingFrame`                      |
| 11.1% | 512 KiB |       1 | `<init>(FixStackAnalyzer, int, int)` | `org.jetbrains.kotlin.codegen.optimization.fixStack.FixStackAnalyzer$FixStackFrame` |

##### `<init>(int)` (`java.util.ArrayList`)

|     % |    Size | Samples | Caller                                                                                                                                                                                          | Location                                                    |
| ----: | ------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| 25.0% |   1 MiB |       2 | `take(Iterable, int)`                                                                                                                                                                           | `kotlin.collections.CollectionsKt___CollectionsKt`          |
| 12.5% | 512 KiB |       1 | `<init>(MethodVisitor, int, String, String, String, String[], int)`                                                                                                                             | `org.jetbrains.kotlin.codegen.TransformationMethodVisitor`  |
| 12.5% | 512 KiB |       1 | `ensureEntryArrayMutable()`                                                                                                                                                                     | `org.jetbrains.kotlin.protobuf.SmallSortedMap`              |
| 12.5% | 512 KiB |       1 | `computeChildren()`                                                                                                                                                                             | `org.jetbrains.kotlin.cli.jvm.modules.CoreJrtVirtualFile`   |
| 12.5% | 512 KiB |       1 | `<init>(FirElement, CallKind, Name, FirExpression, FirArgumentList, boolean, List, FirSession, FirFile, List, Candidate, ResolutionMode, FirFunctionCallOrigin, ImplicitInvokeMode, Candidate)` | `org.jetbrains.kotlin.fir.resolve.calls.candidate.CallInfo` |

##### `resize()` (`java.util.HashMap`)

|      % |  Size | Samples | Caller                                          | Location            |
| -----: | ----: | ------: | ----------------------------------------------- | ------------------- |
| 100.0% | 4 MiB |       8 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `newString(byte[], int, int)` (`java.lang.StringLatin1`)

|     % |    Size | Samples | Caller                | Location                          |
| ----: | ------: | ------: | --------------------- | --------------------------------- |
| 87.5% | 3.5 MiB |       7 | `substring(int, int)` | `java.lang.String`                |
| 12.5% | 512 KiB |       1 | `substring(int, int)` | `java.lang.AbstractStringBuilder` |

##### `newOutput()` (`org.jetbrains.kotlin.protobuf.ByteString`)

|     % |    Size | Samples | Caller                                            | Location                                                                  |
| ----: | ------: | ------: | ------------------------------------------------- | ------------------------------------------------------------------------- |
| 37.5% | 1.5 MiB |       3 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$Argument`                    |
| 25.0% |   1 MiB |       2 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Function`                         |
| 12.5% | 512 KiB |       1 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$QualifiedNameTable$QualifiedName` |
| 12.5% | 512 KiB |       1 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Annotation$Argument$Value`        |
| 12.5% | 512 KiB |       1 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Annotation`                       |

##### `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type$1`)

|      % |  Size | Samples | Caller                                                      | Location                                        |
| -----: | ----: | ------: | ----------------------------------------------------------- | ----------------------------------------------- |
| 100.0% | 4 MiB |       8 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$1` |

##### `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

|      % |     Size | Samples | Caller                                          | Location                       |
| -----: | -------: | ------: | ----------------------------------------------- | ------------------------------ |
| 100.0% | 3.71 MiB |       2 | `<init>(ZipFile$Source$Key, boolean, ZipCoder)` | `java.util.zip.ZipFile$Source` |

##### `getTypeInternal(String, int, int)` (`org.jetbrains.org.objectweb.asm.Type`)

|     % |    Size | Samples | Caller                     | Location                               |
| ----: | ------: | ------: | -------------------------- | -------------------------------------- |
| 57.1% |   2 MiB |       4 | `getReturnType(String)`    | `org.jetbrains.org.objectweb.asm.Type` |
| 28.6% |   1 MiB |       2 | `getType(String)`          | `org.jetbrains.org.objectweb.asm.Type` |
| 14.3% | 512 KiB |       1 | `getArgumentTypes(String)` | `org.jetbrains.org.objectweb.asm.Type` |

##### `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` (`java.lang.ClassLoader`)

|      % |    Size | Samples | Caller                                                    | Location                |
| -----: | ------: | ------: | --------------------------------------------------------- | ----------------------- |
| 100.0% | 3.5 MiB |       7 | `defineClass(String, byte[], int, int, ProtectionDomain)` | `java.lang.ClassLoader` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`)

|      % |    Size | Samples | Caller                                          | Location            |
| -----: | ------: | ------: | ----------------------------------------------- | ------------------- |
| 100.0% | 3.5 MiB |       7 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `createZipEntry(String)` (`java.util.zip.ZipInputStream`)

|      % |    Size | Samples | Caller      | Location                       |
| -----: | ------: | ------: | ----------- | ------------------------------ |
| 100.0% | 3.5 MiB |       7 | `readLOC()` | `java.util.zip.ZipInputStream` |

##### `allocateUninitializedArray(Class, int)` (`jdk.internal.misc.Unsafe`)

|      % |    Size | Samples | Caller           | Location                       |
| -----: | ------: | ------: | ---------------- | ------------------------------ |
| 100.0% | 3.5 MiB |       7 | `newArray(long)` | `java.lang.StringConcatHelper` |

##### `allocateInstance(Class)` (`jdk.internal.misc.Unsafe`)

|      % |    Size | Samples | Caller                     | Location                              |
| -----: | ------: | ------: | -------------------------- | ------------------------------------- |
| 100.0% | 3.5 MiB |       7 | `allocateInstance(Object)` | `java.lang.invoke.DirectMethodHandle` |

##### `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`)

|      % |    Size | Samples | Caller                                                                       | Location                                               |
| -----: | ------: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% | 3.5 MiB |       7 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `<init>(InputStream)` (`org.jetbrains.kotlin.protobuf.CodedInputStream`)

|      % |    Size | Samples | Caller                     | Location                                         |
| -----: | ------: | ------: | -------------------------- | ------------------------------------------------ |
| 100.0% | 3.5 MiB |       7 | `newInstance(InputStream)` | `org.jetbrains.kotlin.protobuf.CodedInputStream` |

##### `to(Object, Object)` (`kotlin.TuplesKt`)

|     % |    Size | Samples | Caller                                                                                                                              | Location                                                                                |
| ----: | ------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| 16.7% | 512 KiB |       1 | `addSuccessor(MaxStackFrameSizeAndLocalsCalculator$BasicBlock, Label)`                                                              | `org.jetbrains.kotlin.codegen.inline.MaxStackFrameSizeAndLocalsCalculator`              |
| 16.7% | 512 KiB |       1 | `zip(Iterable, Iterable)`                                                                                                           | `kotlin.collections.CollectionsKt___CollectionsKt`                                      |
| 16.7% | 512 KiB |       1 | `fakeElement(KtSourceElement, KtFakeSourceElementKind, KtSourceElementOffsetStrategy)`                                              | `org.jetbrains.kotlin.KtSourceElementKt`                                                |
| 16.7% | 512 KiB |       1 | `createToFreshVariableSubstitutorAndAddInitialConstraints(ResolutionContext, FirTypeParameterRefsOwner, ConstraintSystemOperation)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.CreateFreshTypeVariableSubstitutorStage` |
| 16.7% | 512 KiB |       1 | `checkRepeatedAnnotationsInProperty(CheckerContext, DiagnosticReporter, FirProperty)`                                               | `org.jetbrains.kotlin.fir.analysis.checkers.declaration.FirAnnotationChecker`           |

##### `toString()` (`java.lang.StringBuilder`)

|     % |    Size | Samples | Caller                                                                                           | Location                                                                    |
| ----: | ------: | ------: | ------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------- |
| 33.3% |   1 MiB |       2 | `internalNameByClassId(ClassId)`                                                                 | `org.jetbrains.kotlin.resolve.jvm.JvmClassName`                             |
| 16.7% | 512 KiB |       1 | `toUpperCaseAsciiOnly(String)`                                                                   | `org.jetbrains.kotlin.util.capitalizeDecapitalize.CapitalizeDecapitalizeKt` |
| 16.7% | 512 KiB |       1 | `joinToString(Iterable, CharSequence, CharSequence, CharSequence, int, CharSequence, Function1)` | `kotlin.collections.CollectionsKt___CollectionsKt`                          |
| 16.7% | 512 KiB |       1 | `getFqNameWhenAvailable(IrDeclarationWithName)`                                                  | `org.jetbrains.kotlin.ir.util.IrUtilsKt`                                    |
| 16.7% | 512 KiB |       1 | `child(Name)`                                                                                    | `org.jetbrains.kotlin.name.FqNameUnsafe`                                    |

##### `enlarge(int)` (`jdk.internal.org.objectweb.asm.ByteVector`)

|      % |  Size | Samples | Caller            | Location                                    |
| -----: | ----: | ------: | ----------------- | ------------------------------------------- |
| 100.0% | 3 MiB |       6 | `putUTF8(String)` | `jdk.internal.org.objectweb.asm.ByteVector` |

##### `contentsToByteArray$lambda$0(ZipEntryDescription, LargeDynamicMappedBuffer$Mapping)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt`)

|      % |    Size | Samples | Caller           | Location                                                                                     |
| -----: | ------: | ------: | ---------------- | -------------------------------------------------------------------------------------------- |
| 100.0% | 2.5 MiB |       5 | `invoke(Object)` | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt$$Lambda.0x0000008001396f88` |

##### `readUtf(int, int, char[])` (`org.jetbrains.org.objectweb.asm.ClassReader`)

|      % |    Size | Samples | Caller                 | Location                                      |
| -----: | ------: | ------: | ---------------------- | --------------------------------------------- |
| 100.0% | 2.5 MiB |       5 | `readUtf(int, char[])` | `org.jetbrains.org.objectweb.asm.ClassReader` |

##### `visitVarInsn(int, int)` (`org.jetbrains.org.objectweb.asm.tree.MethodNode`)

|      % |    Size | Samples | Caller                   | Location                                        |
| -----: | ------: | ------: | ------------------------ | ----------------------------------------------- |
| 100.0% | 2.5 MiB |       5 | `visitVarInsn(int, int)` | `org.jetbrains.org.objectweb.asm.MethodVisitor` |

##### `<init>()` (`org.jetbrains.kotlin.resolve.calls.inference.model.MutableConstraintStorage`)

|      % |    Size | Samples | Caller                                                                                                | Location                                                                     |
| -----: | ------: | ------: | ----------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| 100.0% | 2.5 MiB |       5 | `<init>(ConstraintInjector, TypeSystemInferenceExtensionContext, LanguageVersionSettings, Function2)` | `org.jetbrains.kotlin.resolve.calls.inference.model.NewConstraintSystemImpl` |

##### `<init>(String, MethodNode, Interpreter, boolean, boolean, boolean, Function2)` (`org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer`)

|     % |  Size | Samples | Caller                                                        | Location                                                               |
| ----: | ----: | ------: | ------------------------------------------------------------- | ---------------------------------------------------------------------- |
| 50.0% | 1 MiB |       2 | `<init>(String, MethodNode, Interpreter, Function2)`          | `org.jetbrains.kotlin.codegen.optimization.fixStack.FastStackAnalyzer` |
| 50.0% | 1 MiB |       2 | `<init>(String, MethodNode, Interpreter, boolean, Function2)` | `org.jetbrains.kotlin.codegen.optimization.common.FastMethodAnalyzer`  |

##### `<init>(byte[], int, boolean)` (`org.jetbrains.org.objectweb.asm.ClassReader`)

|      % |  Size | Samples | Caller                     | Location                                      |
| -----: | ----: | ------: | -------------------------- | --------------------------------------------- |
| 100.0% | 2 MiB |       4 | `<init>(byte[], int, int)` | `org.jetbrains.org.objectweb.asm.ClassReader` |

##### `readBootstrapMethodsAttribute(int)` (`org.jetbrains.org.objectweb.asm.ClassReader`)

|      % |  Size | Samples | Caller                         | Location                                      |
| -----: | ----: | ------: | ------------------------------ | --------------------------------------------- |
| 100.0% | 2 MiB |       4 | `<init>(byte[], int, boolean)` | `org.jetbrains.org.objectweb.asm.ClassReader` |

##### `newTypeCheckerState(TypeSystemContext, boolean, boolean, boolean)` (`org.jetbrains.kotlin.fir.types.ConeInferenceContext`)

|      % |  Size | Samples | Caller                                           | Location                                                      |
| -----: | ----: | ------: | ------------------------------------------------ | ------------------------------------------------------------- |
| 100.0% | 2 MiB |       4 | `newTypeCheckerState(boolean, boolean, boolean)` | `org.jetbrains.kotlin.types.model.TypeCheckerProviderContext` |

##### `accept(ClassVisitor, Attribute[], int)` (`org.jetbrains.org.objectweb.asm.ClassReader`)

|      % |    Size | Samples | Caller                      | Location                                      |
| -----: | ------: | ------: | --------------------------- | --------------------------------------------- |
| 100.0% | 1.5 MiB |       3 | `accept(ClassVisitor, int)` | `org.jetbrains.org.objectweb.asm.ClassReader` |

##### `simplifyTrivialInstructions(MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer`)

|      % |    Size | Samples | Caller                          | Location                                                                                           |
| -----: | ------: | ------: | ------------------------------- | -------------------------------------------------------------------------------------------------- |
| 100.0% | 1.5 MiB |       3 | `transform(String, MethodNode)` | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer` |

##### `create()` (`com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure$2`)

|      % |    Size | Samples | Caller     | Location                                                  |
| -----: | ------: | ------: | ---------- | --------------------------------------------------------- |
| 100.0% | 1.5 MiB |       3 | `create()` | `com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure$2` |

### Total size

Functions with the most bytes allocated within the function and its callees.

|     % |    Size | Samples | Function                                                                                           | Location                                                |
| ----: | ------: | ------: | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 91.8% | 615 MiB |   1,224 | `run(String[])`                                                                                    | `org.jetbrains.kotlin.preloading.Preloader`             |
| 91.8% | 615 MiB |   1,224 | `main(String[])`                                                                                   | `org.jetbrains.kotlin.preloading.Preloader`             |
| 54.3% | 364 MiB |     727 | `loadAllClassesFromJars(Collection, int, ClassHandler)`                                            | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`  |
| 54.3% | 364 MiB |     727 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)`                       | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`  |
| 37.5% | 251 MiB |     497 | `main(String[])`                                                                                   | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`  |
| 37.5% | 251 MiB |     497 | `main(String[])`                                                                                   | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 37.5% | 251 MiB |     497 | `invokeStatic(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$DMH.0x0000008001008400`    |
| 37.5% | 251 MiB |     497 | `invoke(Object, Object, Object)`                                                                   | `java.lang.invoke.LambdaForm$MH.0x0000008001009800`     |
| 37.5% | 251 MiB |     497 | `invokeExact_MT(Object, Object, Object, Object)`                                                   | `java.lang.invoke.Invokers$Holder`                      |
| 37.5% | 251 MiB |     497 | `invokeImpl(Object, Object[])`                                                                     | `jdk.internal.reflect.DirectMethodHandleAccessor`       |
| 37.5% | 251 MiB |     497 | `invoke(Object, Object[])`                                                                         | `jdk.internal.reflect.DirectMethodHandleAccessor`       |
| 37.5% | 251 MiB |     497 | `invoke(Object, Object[])`                                                                         | `java.lang.reflect.Method`                              |
| 36.9% | 247 MiB |     495 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 36.9% | 247 MiB |     495 | `doMain(CLICompiler, String[])`                                                                    | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 36.9% | 247 MiB |     494 | `exec(PrintStream, Services, MessageRenderer, String[])`                                           | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 36.9% | 247 MiB |     494 | `exec(PrintStream, MessageRenderer, String[])`                                                     | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 36.9% | 247 MiB |     494 | `doMainNoExit(CLICompiler, String[], MessageRenderer)`                                             | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 36.3% | 243 MiB |     486 | `exec(MessageCollector, Services, CommonCompilerArguments)`                                        | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 35.7% | 239 MiB |     478 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)`                              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 35.7% | 239 MiB |     478 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)`                             | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |

#### Categories

Categories accounting for at least 1.0% of self size.

##### Standard library

|     % |     Size | Samples | Function                                         | Location                                              |
| ----: | -------: | ------: | ------------------------------------------------ | ----------------------------------------------------- |
| 37.5% |  251 MiB |     497 | `invokeStatic(Object, Object)`                   | `java.lang.invoke.LambdaForm$DMH.0x0000008001008400`  |
| 37.5% |  251 MiB |     497 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000008001009800`   |
| 37.5% |  251 MiB |     497 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                    |
| 37.5% |  251 MiB |     497 | `invokeImpl(Object, Object[])`                   | `jdk.internal.reflect.DirectMethodHandleAccessor`     |
| 37.5% |  251 MiB |     497 | `invoke(Object, Object[])`                       | `jdk.internal.reflect.DirectMethodHandleAccessor`     |
| 37.5% |  251 MiB |     497 | `invoke(Object, Object[])`                       | `java.lang.reflect.Method`                            |
| 28.1% |  188 MiB |     377 | `copyOf(byte[], int)`                            | `java.util.Arrays`                                    |
| 27.1% |  181 MiB |     363 | `toByteArray()`                                  | `java.io.ByteArrayOutputStream`                       |
| 24.8% |  166 MiB |     332 | `<init>(int)`                                    | `java.io.ByteArrayOutputStream`                       |
|  8.2% |   55 MiB |     110 | `runWith(Object, Runnable)`                      | `java.lang.Thread`                                    |
|  8.2% |   55 MiB |     110 | `run()`                                          | `java.lang.Thread`                                    |
|  8.1% | 54.5 MiB |     109 | `run()`                                          | `java.util.concurrent.CompletableFuture$AsyncRun`     |
|  8.1% | 54.5 MiB |     109 | `runWorker(ThreadPoolExecutor$Worker)`           | `java.util.concurrent.ThreadPoolExecutor`             |
|  8.1% | 54.5 MiB |     109 | `run()`                                          | `java.util.concurrent.ThreadPoolExecutor$Worker`      |
|  6.9% |   46 MiB |      92 | `clone()`                                        | `java.lang.Object`                                    |
|  6.6% |   44 MiB |      88 | `resumeWith(Object)`                             | `kotlin.coroutines.jvm.internal.BaseContinuationImpl` |
|  3.2% | 21.5 MiB |      43 | `getValue()`                                     | `kotlin.SynchronizedLazyImpl`                         |
|  3.1% |   21 MiB |      42 | `copyOfRange(byte[], int, int)`                  | `java.util.Arrays`                                    |
|  2.9% | 19.5 MiB |      39 | `copyOfRangeByte(byte[], int, int)`              | `java.util.Arrays`                                    |
|  2.1% |   14 MiB |      28 | `loadClass(String, boolean)`                     | `java.lang.ClassLoader`                               |

##### Ours

|     % |    Size | Samples | Function                                                                                                                                      | Location                                                |
| ----: | ------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 91.8% | 615 MiB |   1,224 | `run(String[])`                                                                                                                               | `org.jetbrains.kotlin.preloading.Preloader`             |
| 91.8% | 615 MiB |   1,224 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.preloading.Preloader`             |
| 54.3% | 364 MiB |     727 | `loadAllClassesFromJars(Collection, int, ClassHandler)`                                                                                       | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`  |
| 54.3% | 364 MiB |     727 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)`                                                                  | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`  |
| 37.5% | 251 MiB |     497 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`  |
| 37.5% | 251 MiB |     497 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 36.9% | 247 MiB |     495 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)`                                            | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 36.9% | 247 MiB |     495 | `doMain(CLICompiler, String[])`                                                                                                               | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 36.9% | 247 MiB |     494 | `exec(PrintStream, Services, MessageRenderer, String[])`                                                                                      | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 36.9% | 247 MiB |     494 | `exec(PrintStream, MessageRenderer, String[])`                                                                                                | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 36.9% | 247 MiB |     494 | `doMainNoExit(CLICompiler, String[], MessageRenderer)`                                                                                        | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 36.3% | 243 MiB |     486 | `exec(MessageCollector, Services, CommonCompilerArguments)`                                                                                   | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 35.7% | 239 MiB |     478 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)`                                                                         | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 35.7% | 239 MiB |     478 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)`                                                                        | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 35.7% | 239 MiB |     478 | `execImpl(MessageCollector, Services, CommonCompilerArguments)`                                                                               | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 35.6% | 238 MiB |     477 | `runPhasedPipeline(ArgumentsPipelineArtifact)`                                                                                                | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 35.6% | 238 MiB |     477 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)`                                           | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 35.6% | 238 MiB |     477 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 35.6% | 238 MiB |     477 | `execute(CommonCompilerArguments, Services, MessageCollector)`                                                                                | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 34.9% | 233 MiB |     467 | `phaseBody(PipelineContext, PipelineArtifact)`                                                                                                | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`       |

#### Callers

Callers with the largest contribution to each function's total size. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

|      % |    Size | Samples | Caller           | Location                                    |
| -----: | ------: | ------: | ---------------- | ------------------------------------------- |
| 100.0% | 615 MiB |   1,224 | `main(String[])` | `org.jetbrains.kotlin.preloading.Preloader` |

##### `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`)

|      % |    Size | Samples | Caller                                                                       | Location                                               |
| -----: | ------: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% | 364 MiB |     727 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`)

|      % |     Size | Samples | Caller                                                                       | Location                                               |
| -----: | -------: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% |  364 MiB |     727 | `run(String[])`                                                              | `org.jetbrains.kotlin.preloading.Preloader`            |
|   8.9% | 32.2 MiB |      64 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`)

|      % |    Size | Samples | Caller           | Location                                     |
| -----: | ------: | ------: | ---------------- | -------------------------------------------- |
| 100.0% | 251 MiB |     497 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % |    Size | Samples | Caller                         | Location                                             |
| -----: | ------: | ------: | ------------------------------ | ---------------------------------------------------- |
| 100.0% | 251 MiB |     497 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000008001008400` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000008001008400`)

|      % |    Size | Samples | Caller                           | Location                                            |
| -----: | ------: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% | 251 MiB |     497 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000008001009800` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000008001009800`)

|      % |    Size | Samples | Caller                                           | Location                           |
| -----: | ------: | ------: | ------------------------------------------------ | ---------------------------------- |
| 100.0% | 251 MiB |     497 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % |    Size | Samples | Caller                         | Location                                          |
| -----: | ------: | ------: | ------------------------------ | ------------------------------------------------- |
| 100.0% | 251 MiB |     497 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % |    Size | Samples | Caller                     | Location                                          |
| -----: | ------: | ------: | -------------------------- | ------------------------------------------------- |
| 100.0% | 251 MiB |     497 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % |    Size | Samples | Caller                     | Location                   |
| -----: | ------: | ------: | -------------------------- | -------------------------- |
| 100.0% | 251 MiB |     497 | `invoke(Object, Object[])` | `java.lang.reflect.Method` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

|      % |    Size | Samples | Caller                                                                            | Location                                                                                  |
| -----: | ------: | ------: | --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| 100.0% | 251 MiB |     497 | `run(String[])`                                                                   | `org.jetbrains.kotlin.preloading.Preloader`                                               |
|   0.2% | 512 KiB |       1 | `parsePreprocessedCommandLineArguments(List, CommonToolArguments, Lazy, boolean)` | `org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt`                   |
|   0.2% | 512 KiB |       1 | `loadGetRecordComponents(Class)`                                                  | `kotlin.reflect.jvm.internal.impl.descriptors.runtime.structure.Java16SealedRecordLoader` |

##### `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % |    Size | Samples | Caller                          | Location                                                |
| -----: | ------: | ------: | ------------------------------- | ------------------------------------------------------- |
| 100.0% | 247 MiB |     495 | `doMain(CLICompiler, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `doMain(CLICompiler, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % |    Size | Samples | Caller           | Location                                               |
| -----: | ------: | ------: | ---------------- | ------------------------------------------------------ |
| 100.0% | 247 MiB |     495 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion` |

##### `exec(PrintStream, Services, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % |    Size | Samples | Caller                                         | Location                                      |
| -----: | ------: | ------: | ---------------------------------------------- | --------------------------------------------- |
| 100.0% | 247 MiB |     494 | `exec(PrintStream, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `exec(PrintStream, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % |    Size | Samples | Caller                                                 | Location                                                |
| -----: | ------: | ------: | ------------------------------------------------------ | ------------------------------------------------------- |
| 100.0% | 247 MiB |     494 | `doMainNoExit(CLICompiler, String[], MessageRenderer)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % |    Size | Samples | Caller                                                                                             | Location                                                |
| -----: | ------: | ------: | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% | 247 MiB |     494 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `exec(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % |    Size | Samples | Caller                                                   | Location                                      |
| -----: | ------: | ------: | -------------------------------------------------------- | --------------------------------------------- |
| 100.0% | 243 MiB |     486 | `exec(PrintStream, Services, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % |    Size | Samples | Caller                                                                 | Location                                     |
| -----: | ------: | ------: | ---------------------------------------------------------------------- | -------------------------------------------- |
| 100.0% | 239 MiB |     478 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % |    Size | Samples | Caller                                                          | Location                                      |
| -----: | ------: | ------: | --------------------------------------------------------------- | --------------------------------------------- |
| 100.0% | 239 MiB |     478 | `execImpl(MessageCollector, Services, CommonCompilerArguments)` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % |    Size | Samples | Caller                                                      | Location                                      |
| -----: | ------: | ------: | ----------------------------------------------------------- | --------------------------------------------- |
| 100.0% | 239 MiB |     478 | `exec(MessageCollector, Services, CommonCompilerArguments)` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % |    Size | Samples | Caller                                                                                              | Location                                                |
| -----: | ------: | ------: | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% | 238 MiB |     477 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % |    Size | Samples | Caller                                                                                                                                        | Location                                                |
| -----: | ------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% | 238 MiB |     477 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % |    Size | Samples | Caller                                                         | Location                                                |
| -----: | ------: | ------: | -------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% | 238 MiB |     477 | `execute(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `execute(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % |    Size | Samples | Caller                                                                | Location                                     |
| -----: | ------: | ------: | --------------------------------------------------------------------- | -------------------------------------------- |
| 100.0% | 238 MiB |     477 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

|      % |    Size | Samples | Caller                              | Location                                          |
| -----: | ------: | ------: | ----------------------------------- | ------------------------------------------------- |
| 100.0% | 233 MiB |     467 | `phaseBody(LoggingContext, Object)` | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase` |

##### `copyOf(byte[], int)` (`java.util.Arrays`)

|     % |    Size | Samples | Caller                        | Location                          |
| ----: | ------: | ------: | ----------------------------- | --------------------------------- |
| 96.3% | 181 MiB |     363 | `toByteArray()`               | `java.io.ByteArrayOutputStream`   |
|  2.9% | 5.5 MiB |      11 | `ensureCapacityInternal(int)` | `java.lang.AbstractStringBuilder` |
|  0.8% | 1.5 MiB |       3 | `getBytes()`                  | `jdk.internal.loader.Resource`    |

##### `toByteArray()` (`java.io.ByteArrayOutputStream`)

|      % |    Size | Samples | Caller                                                  | Location                                               |
| -----: | ------: | ------: | ------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% | 181 MiB |     363 | `loadAllClassesFromJars(Collection, int, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `<init>(int)` (`java.io.ByteArrayOutputStream`)

|      % |    Size | Samples | Caller                                                  | Location                                               |
| -----: | ------: | ------: | ------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% | 166 MiB |     332 | `loadAllClassesFromJars(Collection, int, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `runWith(Object, Runnable)` (`java.lang.Thread`)

|      % |   Size | Samples | Caller  | Location           |
| -----: | -----: | ------: | ------- | ------------------ |
| 100.0% | 55 MiB |     110 | `run()` | `java.lang.Thread` |

##### `run()` (`java.lang.Thread`)

|    % |    Size | Samples | Caller  | Location                            |
| ---: | ------: | ------: | ------- | ----------------------------------- |
| 0.9% | 512 KiB |       1 | `run()` | `jdk.internal.misc.InnocuousThread` |

##### `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`)

|      % |     Size | Samples | Caller                                 | Location                                  |
| -----: | -------: | ------: | -------------------------------------- | ----------------------------------------- |
| 100.0% | 54.5 MiB |     109 | `runWorker(ThreadPoolExecutor$Worker)` | `java.util.concurrent.ThreadPoolExecutor` |

##### `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`)

|      % |     Size | Samples | Caller  | Location                                         |
| -----: | -------: | ------: | ------- | ------------------------------------------------ |
| 100.0% | 54.5 MiB |     109 | `run()` | `java.util.concurrent.ThreadPoolExecutor$Worker` |

##### `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`)

|      % |     Size | Samples | Caller                      | Location           |
| -----: | -------: | ------: | --------------------------- | ------------------ |
| 100.0% | 54.5 MiB |     109 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `clone()` (`java.lang.Object`)

|      % |   Size | Samples | Caller                | Location           |
| -----: | -----: | ------: | --------------------- | ------------------ |
| 100.0% | 46 MiB |      92 | `copyOf(byte[], int)` | `java.util.Arrays` |

##### `resumeWith(Object)` (`kotlin.coroutines.jvm.internal.BaseContinuationImpl`)

|     % |     Size | Samples | Caller                                                             | Location                                                              |
| ----: | -------: | ------: | ------------------------------------------------------------------ | --------------------------------------------------------------------- |
| 92.0% | 40.5 MiB |      81 | `resumeTask(TowerResolveManager$SuspendedResolverTask)`            | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager`    |
| 39.8% | 17.5 MiB |      35 | `processCandidate(Candidate, ResolutionContext, boolean, boolean)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner` |

##### `getValue()` (`kotlin.SynchronizedLazyImpl`)

|     % |  Size | Samples | Caller                           | Location                                                                 |
| ----: | ----: | ------: | -------------------------------- | ------------------------------------------------------------------------ |
| 37.2% | 8 MiB |      16 | `getMyChildren()`                | `org.jetbrains.kotlin.cli.jvm.modules.CoreJrtVirtualFile`                |
| 23.3% | 5 MiB |      10 | `getMAP()`                       | `org.jetbrains.kotlin.fir.analysis.diagnostics.FirErrorsDefaultMessages` |
| 14.0% | 3 MiB |       6 | `getInstance()`                  | `org.jetbrains.kotlin.builtins.DefaultBuiltIns$Companion`                |
|  9.3% | 2 MiB |       4 | `getSuperTypeRefs()`             | `org.jetbrains.kotlin.fir.java.declarations.FirJavaClass`                |
|  4.7% | 1 MiB |       2 | `getTopLevelFunctionNameIndex()` | `org.jetbrains.kotlin.fir.deserialization.PackagePartsCacheData`         |

##### `copyOfRange(byte[], int, int)` (`java.util.Arrays`)

|     % |    Size | Samples | Caller                                           | Location                 |
| ----: | ------: | ------: | ------------------------------------------------ | ------------------------ |
| 28.6% |   6 MiB |      12 | `<init>(AbstractStringBuilder, Void)`            | `java.lang.String`       |
| 26.2% | 5.5 MiB |      11 | `newString(byte[], int, int)`                    | `java.lang.StringLatin1` |
| 23.8% |   5 MiB |      10 | `newStringUTF8NoRepl(byte[], int, int, boolean)` | `java.lang.String`       |
| 21.4% | 4.5 MiB |       9 | `<init>(Charset, byte[], int, int)`              | `java.lang.String`       |

##### `copyOfRangeByte(byte[], int, int)` (`java.util.Arrays`)

|      % |     Size | Samples | Caller                          | Location           |
| -----: | -------: | ------: | ------------------------------- | ------------------ |
| 100.0% | 19.5 MiB |      39 | `copyOfRange(byte[], int, int)` | `java.util.Arrays` |

##### `loadClass(String, boolean)` (`java.lang.ClassLoader`)

|     % |     Size | Samples | Caller                       | Location                                                 |
| ----: | -------: | ------: | ---------------------------- | -------------------------------------------------------- |
| 75.0% | 10.5 MiB |      21 | `loadClass(String, boolean)` | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |
| 28.6% |    4 MiB |       8 | `loadClass(String)`          | `java.lang.ClassLoader`                                  |

#### Callees

Callees with the largest contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

|     % |    Size | Samples | Callee                                                                       | Location                                               |
| ----: | ------: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------------ |
| 59.1% | 364 MiB |     727 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |
| 40.9% | 251 MiB |     497 | `invoke(Object, Object[])`                                                   | `java.lang.reflect.Method`                             |

##### `main(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

|      % |    Size | Samples | Callee          | Location                                    |
| -----: | ------: | ------: | --------------- | ------------------------------------------- |
| 100.0% | 615 MiB |   1,224 | `run(String[])` | `org.jetbrains.kotlin.preloading.Preloader` |

##### `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`)

|     % |    Size | Samples | Callee                | Location                        |
| ----: | ------: | ------: | --------------------- | ------------------------------- |
| 49.9% | 181 MiB |     363 | `toByteArray()`       | `java.io.ByteArrayOutputStream` |
| 45.7% | 166 MiB |     332 | `<init>(int)`         | `java.io.ByteArrayOutputStream` |
|  2.7% |  10 MiB |      20 | `getNextEntry()`      | `java.util.zip.ZipInputStream`  |
|  0.7% | 2.5 MiB |       5 | `put(Object, Object)` | `java.util.HashMap`             |

##### `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`)

|      % |     Size | Samples | Callee                                                                       | Location                                               |
| -----: | -------: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% |  364 MiB |     727 | `loadAllClassesFromJars(Collection, int, ClassHandler)`                      | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |
|   8.9% | 32.2 MiB |      64 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`)

|     % |     Size | Samples | Callee                          | Location                                                |
| ----: | -------: | ------: | ------------------------------- | ------------------------------------------------------- |
| 98.5% |  247 MiB |     495 | `doMain(CLICompiler, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
|  1.5% | 3.71 MiB |       2 | `<init>()`                      | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % |    Size | Samples | Callee           | Location                                               |
| -----: | ------: | ------: | ---------------- | ------------------------------------------------------ |
| 100.0% | 251 MiB |     497 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000008001008400`)

|      % |    Size | Samples | Callee           | Location                                     |
| -----: | ------: | ------: | ---------------- | -------------------------------------------- |
| 100.0% | 251 MiB |     497 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000008001009800`)

|      % |    Size | Samples | Callee                         | Location                                             |
| -----: | ------: | ------: | ------------------------------ | ---------------------------------------------------- |
| 100.0% | 251 MiB |     497 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000008001008400` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % |    Size | Samples | Callee                           | Location                                            |
| -----: | ------: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% | 251 MiB |     497 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000008001009800` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % |    Size | Samples | Callee                                           | Location                           |
| -----: | ------: | ------: | ------------------------------------------------ | ---------------------------------- |
| 100.0% | 251 MiB |     497 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % |    Size | Samples | Callee                         | Location                                          |
| -----: | ------: | ------: | ------------------------------ | ------------------------------------------------- |
| 100.0% | 251 MiB |     497 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

|      % |    Size | Samples | Callee                     | Location                                          |
| -----: | ------: | ------: | -------------------------- | ------------------------------------------------- |
| 100.0% | 251 MiB |     497 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |
|   0.4% |   1 MiB |       2 | `acquireMethodAccessor()`  | `java.lang.reflect.Method`                        |

##### `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|     % |    Size | Samples | Callee                                                 | Location                                                |
| ----: | ------: | ------: | ------------------------------------------------------ | ------------------------------------------------------- |
| 99.8% | 247 MiB |     494 | `doMainNoExit(CLICompiler, String[], MessageRenderer)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
|  0.2% | 512 KiB |       1 | `defaultMessageRenderer()`                             | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `doMain(CLICompiler, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % |    Size | Samples | Callee                                                                                             | Location                                                |
| -----: | ------: | ------: | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% | 247 MiB |     495 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `exec(PrintStream, Services, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|     % |    Size | Samples | Callee                                                                               | Location                                                                |
| ----: | ------: | ------: | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------- |
| 98.4% | 243 MiB |     486 | `exec(MessageCollector, Services, CommonCompilerArguments)`                          | `org.jetbrains.kotlin.cli.common.CLICompiler`                           |
|  1.6% |   4 MiB |       8 | `parseCommandLineArguments$default(List, CommonToolArguments, boolean, int, Object)` | `org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt` |

##### `exec(PrintStream, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % |    Size | Samples | Callee                                                   | Location                                      |
| -----: | ------: | ------: | -------------------------------------------------------- | --------------------------------------------- |
| 100.0% | 247 MiB |     494 | `exec(PrintStream, Services, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % |    Size | Samples | Callee                                         | Location                                      |
| -----: | ------: | ------: | ---------------------------------------------- | --------------------------------------------- |
| 100.0% | 247 MiB |     494 | `exec(PrintStream, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `exec(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|     % |    Size | Samples | Callee                                                          | Location                                      |
| ----: | ------: | ------: | --------------------------------------------------------------- | --------------------------------------------- |
| 98.4% | 239 MiB |     478 | `execImpl(MessageCollector, Services, CommonCompilerArguments)` | `org.jetbrains.kotlin.cli.common.CLICompiler` |
|  1.6% |   4 MiB |       8 | `<clinit>()`                                                    | `org.jetbrains.kotlin.cli.common.ArgumentsKt` |

##### `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|     % |    Size | Samples | Callee                                                         | Location                                                |
| ----: | ------: | ------: | -------------------------------------------------------------- | ------------------------------------------------------- |
| 99.8% | 238 MiB |     477 | `execute(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
|  0.2% | 512 KiB |       1 | `getDefaultPerformanceManager()`                               | `org.jetbrains.kotlin.cli.common.CLICompiler`           |

##### `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % |    Size | Samples | Callee                                                                | Location                                     |
| -----: | ------: | ------: | --------------------------------------------------------------------- | -------------------------------------------- |
| 100.0% | 239 MiB |     478 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % |    Size | Samples | Callee                                                                 | Location                                     |
| -----: | ------: | ------: | ---------------------------------------------------------------------- | -------------------------------------------- |
| 100.0% | 239 MiB |     478 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|     % |    Size | Samples | Callee                                                                          | Location                                                                    |
| ----: | ------: | ------: | ------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| 97.9% | 233 MiB |     467 | `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)`            | `org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`                        |
|  2.1% |   5 MiB |      10 | `reportToMessageCollector(BaseDiagnosticsCollector, MessageCollector, boolean)` | `org.jetbrains.kotlin.cli.common.fir.FirDiagnosticsCompilerResultsReporter` |

##### `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % |    Size | Samples | Callee                                         | Location                                                |
| -----: | ------: | ------: | ---------------------------------------------- | ------------------------------------------------------- |
| 100.0% | 238 MiB |     477 | `runPhasedPipeline(ArgumentsPipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % |    Size | Samples | Callee                                                                                              | Location                                                |
| -----: | ------: | ------: | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% | 238 MiB |     477 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `execute(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % |    Size | Samples | Callee                                                                                                                                        | Location                                                |
| -----: | ------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% | 238 MiB |     477 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

|     % |     Size | Samples | Callee                           | Location                                                              |
| ----: | -------: | ------: | -------------------------------- | --------------------------------------------------------------------- |
| 83.7% |  195 MiB |     391 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`      |
|  7.5% | 17.5 MiB |      35 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFir2IrPipelinePhase`        |
|  7.3% |   17 MiB |      34 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`       |
|  0.9% |    2 MiB |       4 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmConfigurationPipelinePhase` |
|  0.6% |  1.5 MiB |       3 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmWriteOutputsPhase`          |

##### `copyOf(byte[], int)` (`java.util.Arrays`)

|     % |   Size | Samples | Callee    | Location           |
| ----: | -----: | ------: | --------- | ------------------ |
| 24.4% | 46 MiB |      92 | `clone()` | `java.lang.Object` |

##### `toByteArray()` (`java.io.ByteArrayOutputStream`)

|      % |    Size | Samples | Callee                | Location           |
| -----: | ------: | ------: | --------------------- | ------------------ |
| 100.0% | 181 MiB |     363 | `copyOf(byte[], int)` | `java.util.Arrays` |

##### `runWith(Object, Runnable)` (`java.lang.Thread`)

|     % |     Size | Samples | Callee  | Location                                         |
| ----: | -------: | ------: | ------- | ------------------------------------------------ |
| 99.1% | 54.5 MiB |     109 | `run()` | `java.util.concurrent.ThreadPoolExecutor$Worker` |
|  0.9% |  512 KiB |       1 | `run()` | `jdk.internal.ref.CleanerImpl`                   |

##### `run()` (`java.lang.Thread`)

|      % |   Size | Samples | Callee                      | Location           |
| -----: | -----: | ------: | --------------------------- | ------------------ |
| 100.0% | 55 MiB |     110 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`)

|      % |     Size | Samples | Callee  | Location                                                                          |
| -----: | -------: | ------: | ------- | --------------------------------------------------------------------------------- |
| 100.0% | 54.5 MiB |     109 | `run()` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000800188f020` |

##### `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`)

|      % |     Size | Samples | Callee  | Location                                          |
| -----: | -------: | ------: | ------- | ------------------------------------------------- |
| 100.0% | 54.5 MiB |     109 | `run()` | `java.util.concurrent.CompletableFuture$AsyncRun` |

##### `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`)

|      % |     Size | Samples | Callee                                 | Location                                  |
| -----: | -------: | ------: | -------------------------------------- | ----------------------------------------- |
| 100.0% | 54.5 MiB |     109 | `runWorker(ThreadPoolExecutor$Worker)` | `java.util.concurrent.ThreadPoolExecutor` |

##### `resumeWith(Object)` (`kotlin.coroutines.jvm.internal.BaseContinuationImpl`)

|     % |     Size | Samples | Callee                  | Location                                                                                                      |
| ----: | -------: | ------: | ----------------------- | ------------------------------------------------------------------------------------------------------------- |
| 77.3% |   34 MiB |      68 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask$processLevel$6`                         |
| 39.8% | 17.5 MiB |      35 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner$processCandidate$1`                      |
|  6.8% |    3 MiB |       6 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver$enqueueResolutionTasks$2`                      |
|  4.5% |    2 MiB |       4 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver$enqueueResolutionTasks$4`                      |
|  2.3% |    1 MiB |       2 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirInvokeResolveTowerExtension$enqueueResolverTasksForInvoke$3` |

##### `getValue()` (`kotlin.SynchronizedLazyImpl`)

|     % |  Size | Samples | Callee     | Location                                                                                         |
| ----: | ----: | ------: | ---------- | ------------------------------------------------------------------------------------------------ |
| 37.2% | 8 MiB |      16 | `invoke()` | `org.jetbrains.kotlin.cli.jvm.modules.CoreJrtVirtualFile$$Lambda.0x0000008001388ad0`             |
| 23.3% | 5 MiB |      10 | `invoke()` | `org.jetbrains.kotlin.diagnostics.KtDiagnosticFactoryToRendererMapKt$$Lambda.0x0000008001144360` |
| 14.0% | 3 MiB |       6 | `invoke()` | `org.jetbrains.kotlin.builtins.DefaultBuiltIns$$Lambda.0x0000008001758000`                       |
|  9.3% | 2 MiB |       4 | `invoke()` | `org.jetbrains.kotlin.fir.java.declarations.FirJavaClass$$Lambda.0x0000008001614db0`             |
|  4.7% | 1 MiB |       2 | `invoke()` | `org.jetbrains.kotlin.fir.deserialization.PackagePartsCacheData$$Lambda.0x00000080015de5d8`      |

##### `copyOfRange(byte[], int, int)` (`java.util.Arrays`)

|     % |     Size | Samples | Callee                              | Location           |
| ----: | -------: | ------: | ----------------------------------- | ------------------ |
| 92.9% | 19.5 MiB |      39 | `copyOfRangeByte(byte[], int, int)` | `java.util.Arrays` |

##### `loadClass(String, boolean)` (`java.lang.ClassLoader`)

|     % |     Size | Samples | Callee                       | Location                                                 |
| ----: | -------: | ------: | ---------------------------- | -------------------------------------------------------- |
| 75.0% | 10.5 MiB |      21 | `findClass(String)`          | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |
| 25.0% |  3.5 MiB |       7 | `findClass(String)`          | `java.net.URLClassLoader`                                |
|  3.6% |  512 KiB |       1 | `loadClass(String, boolean)` | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |

## Hottest call stacks

Call stacks with the most bytes allocated in their leaf frame.

|     % |     Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ----: | -------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 22.2% |  148 MiB |     297 | `<init>(int)` (`java.io.ByteArrayOutputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 20.2% |  135 MiB |     271 | `copyOf(byte[], int)` (`java.util.Arrays`) ← `toByteArray()` (`java.io.ByteArrayOutputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  5.0% | 33.5 MiB |      67 | `clone()` (`java.lang.Object`) ← `copyOf(byte[], int)` (`java.util.Arrays`) ← `toByteArray()` (`java.io.ByteArrayOutputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  2.6% | 17.7 MiB |      35 | `<init>(int)` (`java.io.ByteArrayOutputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  1.9% | 12.5 MiB |      25 | `clone()` (`java.lang.Object`) ← `copyOf(byte[], int)` (`java.util.Arrays`) ← `toByteArray()` (`java.io.ByteArrayOutputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  0.7% |  4.5 MiB |       9 | `copyOfRangeByte(byte[], int, int)` (`java.util.Arrays`) ← `copyOfRange(byte[], int, int)` ← `newStringUTF8NoRepl(byte[], int, int, boolean)` (`java.lang.String`) ← `newStringUTF8NoRepl(byte[], int, int)` (`java.lang.System$2`) ← `toString(byte[], int, int)` (`java.util.zip.ZipCoder$UTF8ZipCoder`) ← `toStringUTF8(byte[], int)` (`java.util.zip.ZipCoder`) ← `readLOC()` (`java.util.zip.ZipInputStream`) ← `getNextEntry()` ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  0.6% | 3.71 MiB |       2 | `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`) ← `<init>(ZipFile$Source$Key, boolean, ZipCoder)` ← `get(File, boolean, ZipCoder)` ← `<init>(ZipFile, ZipCoder, File, int)` (`java.util.zip.ZipFile$CleanableResource`) ← `<init>(File, int, Charset)` (`java.util.zip.ZipFile`) ← `<init>(File, int)` ← `<init>(File, boolean, int, Runtime$Version)` (`java.util.jar.JarFile`) ← `getJarFile(URL)` (`jdk.internal.loader.URLClassPath$JarLoader`) ← `run()` (`jdk.internal.loader.URLClassPath$JarLoader$1`) ← `run()` ← `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` (`java.security.AccessController`) ← `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` ← `ensureOpen()` (`jdk.internal.loader.URLClassPath$JarLoader`) ← `<init>(URL, URLStreamHandler, HashMap, AccessControlContext)` ← `run()` (`jdk.internal.loader.URLClassPath$3`) ← `run()` ← `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` (`java.security.AccessController`) ← `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` ← `getLoader(URL)` (`jdk.internal.loader.URLClassPath`) ← `getLoader(int)` ← `findResource(String, boolean)` ← `run()` (`java.net.URLClassLoader$2`) ← `run()` ← `executePrivileged(PrivilegedAction, AccessControlContext, Class)` (`java.security.AccessController`) ← `doPrivileged(PrivilegedAction, AccessControlContext)` ← `findResource(String)` (`java.net.URLClassLoader`) ← `getResource(String)` (`java.lang.ClassLoader`) ← `getResource(String)` (`org.jetbrains.kotlin.preloading.MemoryBasedClassLoader`) ← `<init>()` (`org.jetbrains.kotlin.cli.common.CLICompiler`) ← `<init>()` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`) ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000008001008400`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000008001009800`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  0.5% |  3.5 MiB |       7 | `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  0.4% |    3 MiB |       6 | `createZipEntry(String)` (`java.util.zip.ZipInputStream`) ← `readLOC()` ← `getNextEntry()` ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  0.3% |    2 MiB |       4 | `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`) ← `putVal(int, Object, Object, boolean, boolean)` ← `put(Object, Object)` ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  0.2% |  1.5 MiB |       3 | `visitVarInsn(int, int)` (`org.jetbrains.org.objectweb.asm.tree.MethodNode`) ← `visitVarInsn(int, int)` (`org.jetbrains.org.objectweb.asm.MethodVisitor`) ← `visitVarInsn(int, int)` (`org.jetbrains.kotlin.codegen.inline.MaxLocalsCalculator`) ← `visitVarInsn(int, int)` (`org.jetbrains.kotlin.codegen.inline.MaxStackFrameSizeAndLocalsCalculator`) ← `visitVarInsn(int, int)` (`org.jetbrains.org.objectweb.asm.MethodVisitor`) ← `visitVarInsn(int, int)` ← `accept(MethodVisitor)` (`org.jetbrains.org.objectweb.asm.tree.VarInsnNode`) ← `accept(MethodVisitor)` (`org.jetbrains.org.objectweb.asm.tree.InsnList`) ← `accept(MethodVisitor)` (`org.jetbrains.org.objectweb.asm.tree.MethodNode`) ← `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000800188f020`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`) ← `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`) ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  0.2% |  1.5 MiB |       3 | `<init>(int)` (`org.jetbrains.kotlin.protobuf.ByteString$Output`) ← `newOutput()` (`org.jetbrains.kotlin.protobuf.ByteString`) ← `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type`) ← `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `readMessage(Parser, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.CodedInputStream`) ← `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Function`) ← `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Function$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `readMessage(Parser, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.CodedInputStream`) ← `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Package`) ← `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Package$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `parsePartialFrom(InputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.AbstractParser`) ← `parseFrom(InputStream, ExtensionRegistryLite)` ← `parseFrom(InputStream, ExtensionRegistryLite)` ← `parseFrom(InputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Package`) ← `readPackageDataFrom(byte[], String[])` (`org.jetbrains.kotlin.metadata.jvm.deserialization.JvmProtoBufUtil`) ← `readPackageDataFrom(String[], String[])` ← `computePackagePartInfo(FqName, String)` (`org.jetbrains.kotlin.fir.java.deserialization.JvmClassFileBasedSymbolProvider`) ← `computePackagePartsInfos(FqName)` ← `tryComputePackagePartInfos(FqName)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider`) ← `access$tryComputePackagePartInfos(AbstractFirDeserializedSymbolProvider, FqName)` ← `invoke(Object, Void)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider$special$$inlined$createCache$2`) ← `invoke(Object, Object)` ← `getValue(Object, Object)` (`org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache`) ← `getPackageParts(FqName)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider`) ← `access$getPackageParts(AbstractFirDeserializedSymbolProvider, FqName)` ← `computeTopLevelCallableNames(FqName)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider$symbolNamesProvider$1`) ← `invoke(Object, Void)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider$topLevelCallableNamesByPackage_delegate$lambda$0$$inlined$createCache$1`) ← `invoke(Object, Object)` ← `getValue(Object, Object)` (`org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache`) ← `getTopLevelCallableNamesInPackage(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider`) ← `computeTopLevelCallableNames(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCompositeCachedSymbolNamesProvider`) ← `computeTopLevelCallableNames(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider$symbolNamesProvider$1`) ← `invoke(Object, Void)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider$topLevelCallableNamesByPackage_delegate$lambda$0$$inlined$createCache$1`) ← `invoke(Object, Object)` ← `getValue(Object, Object)` (`org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache`) ← `getTopLevelCallableNamesInPackage(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider`) ← `mayHaveTopLevelCallable(FqName, Name)` (`org.jetbrains.kotlin.fir.resolve.providers.FirSymbolNamesProvider`) ← `getTopLevelPropertySymbolsTo(List, FqName, Name)` (`org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider`) ← `getTopLevelPropertySymbols(FqName, Name)` (`org.jetbrains.kotlin.fir.resolve.providers.FirSymbolProvider`) ← `processPropertiesByName(Name, Function1)` (`org.jetbrains.kotlin.fir.scopes.impl.FirSingleLevelDefaultStarImportingScope`) ← `invoke(FirScope, Name, Function1)` (`org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope$processPropertiesByName$1`) ← `invoke(Object, Object, Object)` ← `processSymbolsByName(Name, Function3, Function1)` (`org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope`) ← `processPropertiesByName(Name, Function1)` ← `getProperties(FirScope, Name)` (`org.jetbrains.kotlin.fir.scopes.FirScopeKt`) ← `resolveFromImportScope(FirQualifiedAccessExpression)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer$FirEnumAnnotationArgumentsTransformer`) ← `resolveQualifiedAccessAndSelectCandidate(FirQualifiedAccessExpression, boolean, boolean, FirElement, ResolutionMode)` ← `resolveQualifiedAccessAndSelectCandidate(FirQualifiedAccessExpression, boolean, boolean, FirElement, ResolutionMode)` ← `transformQualifiedAccessExpression(FirQualifiedAccessExpression, ResolutionMode, boolean, boolean, boolean)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`) ← `transformQualifiedAccessExpression(FirQualifiedAccessExpression, ResolutionMode)` ← `transformPropertyAccessExpression(FirPropertyAccessExpression, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`) ← `transformPropertyAccessExpression(FirPropertyAccessExpression, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.FirPropertyAccessExpression`) ← `transformInplace(List, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `transformArguments(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.impl.FirArgumentListImpl`) ← `transformChildren(FirTransformer, Object)` ← `transformChildren(FirTransformer, Object)` ← `transformElement(FirElement, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`) ← `transformElement(FirElement, Object)` ← `transformArgumentList(FirArgumentList, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformer`) ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.FirArgumentList`) ← `transformChildren(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.impl.FirAnnotationCallImpl`) ← `transformChildren(FirTransformer, Object)` ← `transformAnnotation(FirAnnotation, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer$FirEnumAnnotationArgumentsTransformer`) ← `transformAnnotation(FirAnnotation, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`) ← `transformAnnotationCall(FirAnnotationCall, FirUserTypeRef)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer`) ← `transformAnnotationCall(FirAnnotationCall, Void)` ← `transformAnnotationCall(FirAnnotationCall, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.FirAnnotationCall`) ← `transformInplace(List, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `transformInplace-aLnlfrU(List, FirTransformer, Object)` ← `transformAnnotations(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.impl.FirRegularClassImpl`) ← `transformAnnotations(FirTransformer, Object)` ← `transformAnnotationContainer(FirAnnotationContainer, Void)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer`) ← `transformDeclaration(FirDeclaration, Void)` ← `transformRegularClass(FirRegularClass, Void)` ← `transformRegularClass(FirRegularClass, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.FirRegularClass`) ← `transformInplace(List, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `transformDeclarations(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.impl.FirFileImpl`) ← `transformDeclarations(FirTransformer, Object)` ← `invoke()` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer$transformFile$$inlined$resolveFile$1`) ← `invoke()` ← `withFileAndFileScopes(FirFile, Function0)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer`) ← `transformFile(FirFile, Void)` ← `transformFile(FirFile, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.FirFile`) ← `resolveAnnotations(FirFile)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirCompilerRequiredAnnotationsResolveTransformer`) ← `transformFile(FirFile, Void)` ← `transformFile(FirFile, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.FirFile`) ← `transformSingle(FirElement, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `process(Collection)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.FirCompilerRequiredAnnotationsResolveProcessor`) ← `process(List)` (`org.jetbrains.kotlin.fir.resolve.transformers.FirTotalResolveProcessor`) ← `runResolution(FirSession, List)` (`org.jetbrains.kotlin.fir.pipeline.AnalyseKt`) ← `resolveAndCheckFir(FirSession, List, BaseDiagnosticsCollector)` (`org.jetbrains.kotlin.fir.pipeline.FirUtilsKt`) ← `executePhase(ConfigurationPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`) ← `executePhase(PipelineArtifact)` ← `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`) ← `phaseBody(LoggingContext, Object)` ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`) ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.backend.common.phaser.CompositePhase`) ← `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`) ← `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`) ← `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` ← `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` ← `execute(CommonCompilerArguments, Services, MessageCollector)` ← `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` ← `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`) ← `exec(MessageCollector, Services, CommonCompilerArguments)` ← `exec(PrintStream, Services, MessageRenderer, String[])` ← `exec(PrintStream, MessageRenderer, String[])` ← `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`) ← `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` ← `doMain(CLICompiler, String[])` ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`) ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000008001008400`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000008001009800`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  0.2% |  1.5 MiB |       3 | `<init>(int)` (`org.jetbrains.kotlin.protobuf.ByteString$Output`) ← `newOutput()` (`org.jetbrains.kotlin.protobuf.ByteString`) ← `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type$Argument`) ← `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type$Argument$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `readMessage(Parser, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.CodedInputStream`) ← `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type`) ← `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `readMessage(Parser, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.CodedInputStream`) ← `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Function`) ← `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Function$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `readMessage(Parser, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.CodedInputStream`) ← `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Package`) ← `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Package$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `parsePartialFrom(InputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.AbstractParser`) ← `parseFrom(InputStream, ExtensionRegistryLite)` ← `parseFrom(InputStream, ExtensionRegistryLite)` ← `parseFrom(InputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Package`) ← `readPackageDataFrom(byte[], String[])` (`org.jetbrains.kotlin.metadata.jvm.deserialization.JvmProtoBufUtil`) ← `readPackageDataFrom(String[], String[])` ← `computePackagePartInfo(FqName, String)` (`org.jetbrains.kotlin.fir.java.deserialization.JvmClassFileBasedSymbolProvider`) ← `computePackagePartsInfos(FqName)` ← `tryComputePackagePartInfos(FqName)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider`) ← `access$tryComputePackagePartInfos(AbstractFirDeserializedSymbolProvider, FqName)` ← `invoke(Object, Void)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider$special$$inlined$createCache$2`) ← `invoke(Object, Object)` ← `getValue(Object, Object)` (`org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache`) ← `getPackageParts(FqName)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider`) ← `access$getPackageParts(AbstractFirDeserializedSymbolProvider, FqName)` ← `computeTopLevelCallableNames(FqName)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider$symbolNamesProvider$1`) ← `invoke(Object, Void)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider$topLevelCallableNamesByPackage_delegate$lambda$0$$inlined$createCache$1`) ← `invoke(Object, Object)` ← `getValue(Object, Object)` (`org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache`) ← `getTopLevelCallableNamesInPackage(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider`) ← `computeTopLevelCallableNames(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCompositeCachedSymbolNamesProvider`) ← `computeTopLevelCallableNames(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider$symbolNamesProvider$1`) ← `invoke(Object, Void)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider$topLevelCallableNamesByPackage_delegate$lambda$0$$inlined$createCache$1`) ← `invoke(Object, Object)` ← `getValue(Object, Object)` (`org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache`) ← `getTopLevelCallableNamesInPackage(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider`) ← `mayHaveTopLevelCallable(FqName, Name)` (`org.jetbrains.kotlin.fir.resolve.providers.FirSymbolNamesProvider`) ← `getTopLevelPropertySymbolsTo(List, FqName, Name)` (`org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider`) ← `getTopLevelPropertySymbols(FqName, Name)` (`org.jetbrains.kotlin.fir.resolve.providers.FirSymbolProvider`) ← `processPropertiesByName(Name, Function1)` (`org.jetbrains.kotlin.fir.scopes.impl.FirSingleLevelDefaultStarImportingScope`) ← `invoke(FirScope, Name, Function1)` (`org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope$processPropertiesByName$1`) ← `invoke(Object, Object, Object)` ← `processSymbolsByName(Name, Function3, Function1)` (`org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope`) ← `processPropertiesByName(Name, Function1)` ← `getProperties(FirScope, Name)` (`org.jetbrains.kotlin.fir.scopes.FirScopeKt`) ← `resolveFromImportScope(FirQualifiedAccessExpression)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer$FirEnumAnnotationArgumentsTransformer`) ← `resolveQualifiedAccessAndSelectCandidate(FirQualifiedAccessExpression, boolean, boolean, FirElement, ResolutionMode)` ← `resolveQualifiedAccessAndSelectCandidate(FirQualifiedAccessExpression, boolean, boolean, FirElement, ResolutionMode)` ← `transformQualifiedAccessExpression(FirQualifiedAccessExpression, ResolutionMode, boolean, boolean, boolean)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`) ← `transformQualifiedAccessExpression(FirQualifiedAccessExpression, ResolutionMode)` ← `transformPropertyAccessExpression(FirPropertyAccessExpression, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`) ← `transformPropertyAccessExpression(FirPropertyAccessExpression, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.FirPropertyAccessExpression`) ← `transformInplace(List, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `transformArguments(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.impl.FirArgumentListImpl`) ← `transformChildren(FirTransformer, Object)` ← `transformChildren(FirTransformer, Object)` ← `transformElement(FirElement, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`) ← `transformElement(FirElement, Object)` ← `transformArgumentList(FirArgumentList, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformer`) ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.FirArgumentList`) ← `transformChildren(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.impl.FirAnnotationCallImpl`) ← `transformChildren(FirTransformer, Object)` ← `transformAnnotation(FirAnnotation, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer$FirEnumAnnotationArgumentsTransformer`) ← `transformAnnotation(FirAnnotation, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`) ← `transformAnnotationCall(FirAnnotationCall, FirUserTypeRef)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer`) ← `transformAnnotationCall(FirAnnotationCall, Void)` ← `transformAnnotationCall(FirAnnotationCall, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.FirAnnotationCall`) ← `transformInplace(List, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `transformInplace-aLnlfrU(List, FirTransformer, Object)` ← `transformAnnotations(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.impl.FirRegularClassImpl`) ← `transformAnnotations(FirTransformer, Object)` ← `transformAnnotationContainer(FirAnnotationContainer, Void)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer`) ← `transformDeclaration(FirDeclaration, Void)` ← `transformRegularClass(FirRegularClass, Void)` ← `transformRegularClass(FirRegularClass, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.FirRegularClass`) ← `transformInplace(List, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `transformDeclarations(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.impl.FirFileImpl`) ← `transformDeclarations(FirTransformer, Object)` ← `invoke()` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer$transformFile$$inlined$resolveFile$1`) ← `invoke()` ← `withFileAndFileScopes(FirFile, Function0)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer`) ← `transformFile(FirFile, Void)` ← `transformFile(FirFile, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.FirFile`) ← `resolveAnnotations(FirFile)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirCompilerRequiredAnnotationsResolveTransformer`) ← `transformFile(FirFile, Void)` ← `transformFile(FirFile, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.FirFile`) ← `transformSingle(FirElement, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `process(Collection)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.FirCompilerRequiredAnnotationsResolveProcessor`) ← `process(List)` (`org.jetbrains.kotlin.fir.resolve.transformers.FirTotalResolveProcessor`) ← `runResolution(FirSession, List)` (`org.jetbrains.kotlin.fir.pipeline.AnalyseKt`) ← `resolveAndCheckFir(FirSession, List, BaseDiagnosticsCollector)` (`org.jetbrains.kotlin.fir.pipeline.FirUtilsKt`) ← `executePhase(ConfigurationPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`) ← `executePhase(PipelineArtifact)` ← `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`) ← `phaseBody(LoggingContext, Object)` ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`) ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.backend.common.phaser.CompositePhase`) ← `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`) ← `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`) ← `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` ← `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` ← `execute(CommonCompilerArguments, Services, MessageCollector)` ← `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` ← `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`) ← `exec(MessageCollector, Services, CommonCompilerArguments)` ← `exec(PrintStream, Services, MessageRenderer, String[])` ← `exec(PrintStream, MessageRenderer, String[])` ← `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`) ← `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` ← `doMain(CLICompiler, String[])` ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`) ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000008001008400`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000008001009800`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  0.2% |  1.5 MiB |       3 | `<init>(int)` (`org.jetbrains.kotlin.protobuf.ByteString$Output`) ← `newOutput()` (`org.jetbrains.kotlin.protobuf.ByteString`) ← `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$ValueParameter`) ← `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$ValueParameter$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `readMessage(Parser, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.CodedInputStream`) ← `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Function`) ← `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Function$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `readMessage(Parser, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.CodedInputStream`) ← `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Package`) ← `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Package$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `parsePartialFrom(InputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.AbstractParser`) ← `parseFrom(InputStream, ExtensionRegistryLite)` ← `parseFrom(InputStream, ExtensionRegistryLite)` ← `parseFrom(InputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Package`) ← `readPackageDataFrom(byte[], String[])` (`org.jetbrains.kotlin.metadata.jvm.deserialization.JvmProtoBufUtil`) ← `readPackageDataFrom(String[], String[])` ← `computePackagePartInfo(FqName, String)` (`org.jetbrains.kotlin.fir.java.deserialization.JvmClassFileBasedSymbolProvider`) ← `computePackagePartsInfos(FqName)` ← `tryComputePackagePartInfos(FqName)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider`) ← `access$tryComputePackagePartInfos(AbstractFirDeserializedSymbolProvider, FqName)` ← `invoke(Object, Void)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider$special$$inlined$createCache$2`) ← `invoke(Object, Object)` ← `getValue(Object, Object)` (`org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache`) ← `getPackageParts(FqName)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider`) ← `access$getPackageParts(AbstractFirDeserializedSymbolProvider, FqName)` ← `computeTopLevelCallableNames(FqName)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider$symbolNamesProvider$1`) ← `invoke(Object, Void)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider$topLevelCallableNamesByPackage_delegate$lambda$0$$inlined$createCache$1`) ← `invoke(Object, Object)` ← `getValue(Object, Object)` (`org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache`) ← `getTopLevelCallableNamesInPackage(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider`) ← `computeTopLevelCallableNames(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCompositeCachedSymbolNamesProvider`) ← `computeTopLevelCallableNames(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider$symbolNamesProvider$1`) ← `invoke(Object, Void)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider$topLevelCallableNamesByPackage_delegate$lambda$0$$inlined$createCache$1`) ← `invoke(Object, Object)` ← `getValue(Object, Object)` (`org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache`) ← `getTopLevelCallableNamesInPackage(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider`) ← `mayHaveTopLevelCallable(FqName, Name)` (`org.jetbrains.kotlin.fir.resolve.providers.FirSymbolNamesProvider`) ← `getTopLevelPropertySymbolsTo(List, FqName, Name)` (`org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider`) ← `getTopLevelPropertySymbols(FqName, Name)` (`org.jetbrains.kotlin.fir.resolve.providers.FirSymbolProvider`) ← `processPropertiesByName(Name, Function1)` (`org.jetbrains.kotlin.fir.scopes.impl.FirSingleLevelDefaultStarImportingScope`) ← `invoke(FirScope, Name, Function1)` (`org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope$processPropertiesByName$1`) ← `invoke(Object, Object, Object)` ← `processSymbolsByName(Name, Function3, Function1)` (`org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope`) ← `processPropertiesByName(Name, Function1)` ← `getProperties(FirScope, Name)` (`org.jetbrains.kotlin.fir.scopes.FirScopeKt`) ← `resolveFromImportScope(FirQualifiedAccessExpression)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer$FirEnumAnnotationArgumentsTransformer`) ← `resolveQualifiedAccessAndSelectCandidate(FirQualifiedAccessExpression, boolean, boolean, FirElement, ResolutionMode)` ← `resolveQualifiedAccessAndSelectCandidate(FirQualifiedAccessExpression, boolean, boolean, FirElement, ResolutionMode)` ← `transformQualifiedAccessExpression(FirQualifiedAccessExpression, ResolutionMode, boolean, boolean, boolean)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`) ← `transformQualifiedAccessExpression(FirQualifiedAccessExpression, ResolutionMode)` ← `transformPropertyAccessExpression(FirPropertyAccessExpression, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`) ← `transformPropertyAccessExpression(FirPropertyAccessExpression, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.FirPropertyAccessExpression`) ← `transformInplace(List, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `transformArguments(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.impl.FirArgumentListImpl`) ← `transformChildren(FirTransformer, Object)` ← `transformChildren(FirTransformer, Object)` ← `transformElement(FirElement, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`) ← `transformElement(FirElement, Object)` ← `transformArgumentList(FirArgumentList, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformer`) ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.FirArgumentList`) ← `transformChildren(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.impl.FirAnnotationCallImpl`) ← `transformChildren(FirTransformer, Object)` ← `transformAnnotation(FirAnnotation, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer$FirEnumAnnotationArgumentsTransformer`) ← `transformAnnotation(FirAnnotation, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`) ← `transformAnnotationCall(FirAnnotationCall, FirUserTypeRef)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer`) ← `transformAnnotationCall(FirAnnotationCall, Void)` ← `transformAnnotationCall(FirAnnotationCall, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.FirAnnotationCall`) ← `transformInplace(List, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `transformInplace-aLnlfrU(List, FirTransformer, Object)` ← `transformAnnotations(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.impl.FirRegularClassImpl`) ← `transformAnnotations(FirTransformer, Object)` ← `transformAnnotationContainer(FirAnnotationContainer, Void)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer`) ← `transformDeclaration(FirDeclaration, Void)` ← `transformRegularClass(FirRegularClass, Void)` ← `transformRegularClass(FirRegularClass, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.FirRegularClass`) ← `transformInplace(List, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `transformDeclarations(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.impl.FirFileImpl`) ← `transformDeclarations(FirTransformer, Object)` ← `invoke()` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer$transformFile$$inlined$resolveFile$1`) ← `invoke()` ← `withFileAndFileScopes(FirFile, Function0)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer`) ← `transformFile(FirFile, Void)` ← `transformFile(FirFile, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.FirFile`) ← `resolveAnnotations(FirFile)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirCompilerRequiredAnnotationsResolveTransformer`) ← `transformFile(FirFile, Void)` ← `transformFile(FirFile, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.FirFile`) ← `transformSingle(FirElement, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `process(Collection)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.FirCompilerRequiredAnnotationsResolveProcessor`) ← `process(List)` (`org.jetbrains.kotlin.fir.resolve.transformers.FirTotalResolveProcessor`) ← `runResolution(FirSession, List)` (`org.jetbrains.kotlin.fir.pipeline.AnalyseKt`) ← `resolveAndCheckFir(FirSession, List, BaseDiagnosticsCollector)` (`org.jetbrains.kotlin.fir.pipeline.FirUtilsKt`) ← `executePhase(ConfigurationPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`) ← `executePhase(PipelineArtifact)` ← `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`) ← `phaseBody(LoggingContext, Object)` ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`) ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.backend.common.phaser.CompositePhase`) ← `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`) ← `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`) ← `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` ← `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` ← `execute(CommonCompilerArguments, Services, MessageCollector)` ← `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` ← `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`) ← `exec(MessageCollector, Services, CommonCompilerArguments)` ← `exec(PrintStream, Services, MessageRenderer, String[])` ← `exec(PrintStream, MessageRenderer, String[])` ← `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`) ← `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` ← `doMain(CLICompiler, String[])` ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`) ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000008001008400`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000008001009800`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  0.2% |  1.5 MiB |       3 | `contentsToByteArray$lambda$0(ZipEntryDescription, LargeDynamicMappedBuffer$Mapping)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt`) ← `invoke(Object)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt$$Lambda.0x0000008001396f88`) ← `withMappedRange(long, long, Function1)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.LargeDynamicMappedBuffer`) ← `withMappedRangeFrom(long, Function1)` ← `contentsToByteArray(LargeDynamicMappedBuffer, ZipEntryDescription)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt`) ← `contentsToByteArray(ZipEntryDescription)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.FastJarHandler`) ← `contentsToByteArray()` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.FastJarVirtualFile`) ← `contentsToByteArray(boolean)` (`com.intellij.openapi.vfs.VirtualFile`) ← `create$lambda$0(VirtualFile, byte[], MetadataVersion)` (`org.jetbrains.kotlin.load.kotlin.VirtualFileKotlinClass$Factory`) ← `invoke()` (`org.jetbrains.kotlin.load.kotlin.VirtualFileKotlinClass$Factory$$Lambda.0x00000080015cdab0`) ← `measureSideTime$org_jetbrains_kotlin_compiler_common(PhaseSideType, Function0)` (`org.jetbrains.kotlin.util.PerformanceManager`) ← `tryMeasureSideTime(PerformanceManager, PhaseSideType, Function0)` (`org.jetbrains.kotlin.util.PerformanceManagerKt`) ← `create$org_jetbrains_kotlin_frontend_common_jvm(VirtualFile, MetadataVersion, byte[], PerformanceManager)` (`org.jetbrains.kotlin.load.kotlin.VirtualFileKotlinClass$Factory`) ← `getKotlinBinaryClassOrClassFileContent$lambda$0(VirtualFile, MetadataVersion, byte[], PerformanceManager)` (`org.jetbrains.kotlin.load.kotlin.KotlinBinaryClassCache$Companion`) ← `compute()` (`org.jetbrains.kotlin.load.kotlin.KotlinBinaryClassCache$Companion$$Lambda.0x00000080015cc038`) ← `runReadAction(Computable)` (`com.intellij.mock.MockApplication`) ← `getKotlinBinaryClassOrClassFileContent(VirtualFile, MetadataVersion, byte[], PerformanceManager)` (`org.jetbrains.kotlin.load.kotlin.KotlinBinaryClassCache$Companion`) ← `getKotlinBinaryClassOrClassFileContent$default(KotlinBinaryClassCache$Companion, VirtualFile, MetadataVersion, byte[], PerformanceManager, int, Object)` ← `findKotlinClassOrContent(ClassId, MetadataVersion)` (`org.jetbrains.kotlin.load.kotlin.VirtualFileFinder`) ← `computePackagePartInfo(FqName, String)` (`org.jetbrains.kotlin.fir.java.deserialization.JvmClassFileBasedSymbolProvider`) ← `computePackagePartsInfos(FqName)` ← `tryComputePackagePartInfos(FqName)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider`) ← `access$tryComputePackagePartInfos(AbstractFirDeserializedSymbolProvider, FqName)` ← `invoke(Object, Void)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider$special$$inlined$createCache$2`) ← `invoke(Object, Object)` ← `getValue(Object, Object)` (`org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache`) ← `getPackageParts(FqName)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider`) ← `access$getPackageParts(AbstractFirDeserializedSymbolProvider, FqName)` ← `computeTopLevelCallableNames(FqName)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider$symbolNamesProvider$1`) ← `invoke(Object, Void)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider$topLevelCallableNamesByPackage_delegate$lambda$0$$inlined$createCache$1`) ← `invoke(Object, Object)` ← `getValue(Object, Object)` (`org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache`) ← `getTopLevelCallableNamesInPackage(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider`) ← `computeTopLevelCallableNames(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCompositeCachedSymbolNamesProvider`) ← `computeTopLevelCallableNames(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider$symbolNamesProvider$1`) ← `invoke(Object, Void)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider$topLevelCallableNamesByPackage_delegate$lambda$0$$inlined$createCache$1`) ← `invoke(Object, Object)` ← `getValue(Object, Object)` (`org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache`) ← `getTopLevelCallableNamesInPackage(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider`) ← `mayHaveTopLevelCallable(FqName, Name)` (`org.jetbrains.kotlin.fir.resolve.providers.FirSymbolNamesProvider`) ← `getTopLevelPropertySymbolsTo(List, FqName, Name)` (`org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider`) ← `getTopLevelPropertySymbols(FqName, Name)` (`org.jetbrains.kotlin.fir.resolve.providers.FirSymbolProvider`) ← `processPropertiesByName(Name, Function1)` (`org.jetbrains.kotlin.fir.scopes.impl.FirSingleLevelDefaultStarImportingScope`) ← `invoke(FirScope, Name, Function1)` (`org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope$processPropertiesByName$1`) ← `invoke(Object, Object, Object)` ← `processSymbolsByName(Name, Function3, Function1)` (`org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope`) ← `processPropertiesByName(Name, Function1)` ← `getProperties(FirScope, Name)` (`org.jetbrains.kotlin.fir.scopes.FirScopeKt`) ← `resolveFromImportScope(FirQualifiedAccessExpression)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer$FirEnumAnnotationArgumentsTransformer`) ← `resolveQualifiedAccessAndSelectCandidate(FirQualifiedAccessExpression, boolean, boolean, FirElement, ResolutionMode)` ← `resolveQualifiedAccessAndSelectCandidate(FirQualifiedAccessExpression, boolean, boolean, FirElement, ResolutionMode)` ← `transformQualifiedAccessExpression(FirQualifiedAccessExpression, ResolutionMode, boolean, boolean, boolean)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`) ← `transformQualifiedAccessExpression(FirQualifiedAccessExpression, ResolutionMode)` ← `transformPropertyAccessExpression(FirPropertyAccessExpression, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`) ← `transformPropertyAccessExpression(FirPropertyAccessExpression, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.FirPropertyAccessExpression`) ← `transformInplace(List, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `transformArguments(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.impl.FirArgumentListImpl`) ← `transformChildren(FirTransformer, Object)` ← `transformChildren(FirTransformer, Object)` ← `transformElement(FirElement, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`) ← `transformElement(FirElement, Object)` ← `transformArgumentList(FirArgumentList, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformer`) ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.FirArgumentList`) ← `transformChildren(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.impl.FirAnnotationCallImpl`) ← `transformChildren(FirTransformer, Object)` ← `transformAnnotation(FirAnnotation, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer$FirEnumAnnotationArgumentsTransformer`) ← `transformAnnotation(FirAnnotation, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`) ← `transformAnnotationCall(FirAnnotationCall, FirUserTypeRef)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer`) ← `transformAnnotationCall(FirAnnotationCall, Void)` ← `transformAnnotationCall(FirAnnotationCall, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.FirAnnotationCall`) ← `transformInplace(List, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `transformInplace-aLnlfrU(List, FirTransformer, Object)` ← `transformAnnotations(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.impl.FirRegularClassImpl`) ← `transformAnnotations(FirTransformer, Object)` ← `transformAnnotationContainer(FirAnnotationContainer, Void)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer`) ← `transformDeclaration(FirDeclaration, Void)` ← `transformRegularClass(FirRegularClass, Void)` ← `transformRegularClass(FirRegularClass, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.FirRegularClass`) ← `transformInplace(List, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `transformDeclarations(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.impl.FirFileImpl`) ← `transformDeclarations(FirTransformer, Object)` ← `invoke()` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer$transformFile$$inlined$resolveFile$1`) ← `invoke()` ← `withFileAndFileScopes(FirFile, Function0)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer`) ← `transformFile(FirFile, Void)` ← `transformFile(FirFile, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.FirFile`) ← `resolveAnnotations(FirFile)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirCompilerRequiredAnnotationsResolveTransformer`) ← `transformFile(FirFile, Void)` ← `transformFile(FirFile, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.FirFile`) ← `transformSingle(FirElement, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `process(Collection)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.FirCompilerRequiredAnnotationsResolveProcessor`) ← `process(List)` (`org.jetbrains.kotlin.fir.resolve.transformers.FirTotalResolveProcessor`) ← `runResolution(FirSession, List)` (`org.jetbrains.kotlin.fir.pipeline.AnalyseKt`) ← `resolveAndCheckFir(FirSession, List, BaseDiagnosticsCollector)` (`org.jetbrains.kotlin.fir.pipeline.FirUtilsKt`) ← `executePhase(ConfigurationPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`) ← `executePhase(PipelineArtifact)` ← `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`) ← `phaseBody(LoggingContext, Object)` ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`) ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.backend.common.phaser.CompositePhase`) ← `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`) ← `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`) ← `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` ← `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` ← `execute(CommonCompilerArguments, Services, MessageCollector)` ← `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` ← `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`) ← `exec(MessageCollector, Services, CommonCompilerArguments)` ← `exec(PrintStream, Services, MessageRenderer, String[])` ← `exec(PrintStream, MessageRenderer, String[])` ← `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`) ← `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` ← `doMain(CLICompiler, String[])` ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`) ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000008001008400`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000008001009800`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  0.2% |  1.5 MiB |       3 | `newInstance(OutputStream, int)` (`org.jetbrains.kotlin.protobuf.CodedOutputStream`) ← `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Annotation$Argument$Value`) ← `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Annotation$Argument$Value$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `readMessage(Parser, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.CodedInputStream`) ← `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Annotation$Argument`) ← `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Annotation$Argument$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `readMessage(Parser, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.CodedInputStream`) ← `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Annotation`) ← `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Annotation$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `readMessage(Parser, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.CodedInputStream`) ← `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Function`) ← `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Function$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `readMessage(Parser, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.CodedInputStream`) ← `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Package`) ← `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Package$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `parsePartialFrom(InputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.AbstractParser`) ← `parseFrom(InputStream, ExtensionRegistryLite)` ← `parseFrom(InputStream, ExtensionRegistryLite)` ← `parseFrom(InputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Package`) ← `readPackageDataFrom(byte[], String[])` (`org.jetbrains.kotlin.metadata.jvm.deserialization.JvmProtoBufUtil`) ← `readPackageDataFrom(String[], String[])` ← `computePackagePartInfo(FqName, String)` (`org.jetbrains.kotlin.fir.java.deserialization.JvmClassFileBasedSymbolProvider`) ← `computePackagePartsInfos(FqName)` ← `tryComputePackagePartInfos(FqName)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider`) ← `access$tryComputePackagePartInfos(AbstractFirDeserializedSymbolProvider, FqName)` ← `invoke(Object, Void)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider$special$$inlined$createCache$2`) ← `invoke(Object, Object)` ← `getValue(Object, Object)` (`org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache`) ← `getPackageParts(FqName)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider`) ← `access$getPackageParts(AbstractFirDeserializedSymbolProvider, FqName)` ← `computeTopLevelCallableNames(FqName)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider$symbolNamesProvider$1`) ← `invoke(Object, Void)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider$topLevelCallableNamesByPackage_delegate$lambda$0$$inlined$createCache$1`) ← `invoke(Object, Object)` ← `getValue(Object, Object)` (`org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache`) ← `getTopLevelCallableNamesInPackage(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider`) ← `computeTopLevelCallableNames(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCompositeCachedSymbolNamesProvider`) ← `computeTopLevelCallableNames(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider$symbolNamesProvider$1`) ← `invoke(Object, Void)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider$topLevelCallableNamesByPackage_delegate$lambda$0$$inlined$createCache$1`) ← `invoke(Object, Object)` ← `getValue(Object, Object)` (`org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache`) ← `getTopLevelCallableNamesInPackage(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider`) ← `mayHaveTopLevelCallable(FqName, Name)` (`org.jetbrains.kotlin.fir.resolve.providers.FirSymbolNamesProvider`) ← `getTopLevelPropertySymbolsTo(List, FqName, Name)` (`org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider`) ← `getTopLevelPropertySymbols(FqName, Name)` (`org.jetbrains.kotlin.fir.resolve.providers.FirSymbolProvider`) ← `processPropertiesByName(Name, Function1)` (`org.jetbrains.kotlin.fir.scopes.impl.FirSingleLevelDefaultStarImportingScope`) ← `invoke(FirScope, Name, Function1)` (`org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope$processPropertiesByName$1`) ← `invoke(Object, Object, Object)` ← `processSymbolsByName(Name, Function3, Function1)` (`org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope`) ← `processPropertiesByName(Name, Function1)` ← `getProperties(FirScope, Name)` (`org.jetbrains.kotlin.fir.scopes.FirScopeKt`) ← `resolveFromImportScope(FirQualifiedAccessExpression)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer$FirEnumAnnotationArgumentsTransformer`) ← `resolveQualifiedAccessAndSelectCandidate(FirQualifiedAccessExpression, boolean, boolean, FirElement, ResolutionMode)` ← `resolveQualifiedAccessAndSelectCandidate(FirQualifiedAccessExpression, boolean, boolean, FirElement, ResolutionMode)` ← `transformQualifiedAccessExpression(FirQualifiedAccessExpression, ResolutionMode, boolean, boolean, boolean)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`) ← `transformQualifiedAccessExpression(FirQualifiedAccessExpression, ResolutionMode)` ← `transformPropertyAccessExpression(FirPropertyAccessExpression, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`) ← `transformPropertyAccessExpression(FirPropertyAccessExpression, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.FirPropertyAccessExpression`) ← `transformInplace(List, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `transformArguments(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.impl.FirArgumentListImpl`) ← `transformChildren(FirTransformer, Object)` ← `transformChildren(FirTransformer, Object)` ← `transformElement(FirElement, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`) ← `transformElement(FirElement, Object)` ← `transformArgumentList(FirArgumentList, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformer`) ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.FirArgumentList`) ← `transformChildren(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.impl.FirAnnotationCallImpl`) ← `transformChildren(FirTransformer, Object)` ← `transformAnnotation(FirAnnotation, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer$FirEnumAnnotationArgumentsTransformer`) ← `transformAnnotation(FirAnnotation, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`) ← `transformAnnotationCall(FirAnnotationCall, FirUserTypeRef)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer`) ← `transformAnnotationCall(FirAnnotationCall, Void)` ← `transformAnnotationCall(FirAnnotationCall, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.FirAnnotationCall`) ← `transformInplace(List, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `transformInplace-aLnlfrU(List, FirTransformer, Object)` ← `transformAnnotations(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.impl.FirRegularClassImpl`) ← `transformAnnotations(FirTransformer, Object)` ← `transformAnnotationContainer(FirAnnotationContainer, Void)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer`) ← `transformDeclaration(FirDeclaration, Void)` ← `transformRegularClass(FirRegularClass, Void)` ← `transformRegularClass(FirRegularClass, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.FirRegularClass`) ← `transformInplace(List, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `transformDeclarations(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.impl.FirFileImpl`) ← `transformDeclarations(FirTransformer, Object)` ← `invoke()` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer$transformFile$$inlined$resolveFile$1`) ← `invoke()` ← `withFileAndFileScopes(FirFile, Function0)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer`) ← `transformFile(FirFile, Void)` ← `transformFile(FirFile, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.FirFile`) ← `resolveAnnotations(FirFile)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirCompilerRequiredAnnotationsResolveTransformer`) ← `transformFile(FirFile, Void)` ← `transformFile(FirFile, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.FirFile`) ← `transformSingle(FirElement, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `process(Collection)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.FirCompilerRequiredAnnotationsResolveProcessor`) ← `process(List)` (`org.jetbrains.kotlin.fir.resolve.transformers.FirTotalResolveProcessor`) ← `runResolution(FirSession, List)` (`org.jetbrains.kotlin.fir.pipeline.AnalyseKt`) ← `resolveAndCheckFir(FirSession, List, BaseDiagnosticsCollector)` (`org.jetbrains.kotlin.fir.pipeline.FirUtilsKt`) ← `executePhase(ConfigurationPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`) ← `executePhase(PipelineArtifact)` ← `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`) ← `phaseBody(LoggingContext, Object)` ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`) ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.backend.common.phaser.CompositePhase`) ← `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`) ← `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`) ← `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` ← `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` ← `execute(CommonCompilerArguments, Services, MessageCollector)` ← `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` ← `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`) ← `exec(MessageCollector, Services, CommonCompilerArguments)` ← `exec(PrintStream, Services, MessageRenderer, String[])` ← `exec(PrintStream, MessageRenderer, String[])` ← `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`) ← `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` ← `doMain(CLICompiler, String[])` ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`) ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000008001008400`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000008001009800`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])` |
|  0.1% |    1 MiB |       2 | `<init>(int, int)` (`org.jetbrains.org.objectweb.asm.tree.analysis.Frame`) ← `_init_$lambda$0(int, int)` (`org.jetbrains.kotlin.codegen.optimization.common.FastMethodAnalyzer`) ← `invoke(Object, Object)` (`org.jetbrains.kotlin.codegen.optimization.common.FastMethodAnalyzer$$Lambda.0x00000080018e2000`) ← `fullMergeControlFlowEdge(int, Frame, boolean)` (`org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer`) ← `mergeControlFlowEdge(int, Frame, boolean)` ← `processControlFlowEdge(Frame, AbstractInsnNode, int, boolean)` ← `processControlFlowEdge$default(FastAnalyzer, Frame, AbstractInsnNode, int, boolean, int, Object)` ← `visitOpInsn(AbstractInsnNode, Frame, int)` ← `visitMeaningfulInstruction(AbstractInsnNode, int, int, Frame, int)` ← `analyzeInstruction(AbstractInsnNode, int, Frame, Frame, Frame)` ← `analyzeMainLoop()` ← `analyze()` ← `transform()` (`org.jetbrains.kotlin.codegen.optimization.boxing.PopBackwardPropagationTransformer$Transformer`) ← `transform(String, MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.boxing.PopBackwardPropagationTransformer`) ← `transform(String, MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.transformer.CompositeMethodTransformer`) ← `performTransformations(MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`) ← `visitEnd()` (`org.jetbrains.kotlin.codegen.TransformationMethodVisitor`) ← `visitEnd()` (`org.jetbrains.org.objectweb.asm.MethodVisitor`) ← `accept(MethodVisitor)` (`org.jetbrains.org.objectweb.asm.tree.MethodNode`) ← `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000800188f020`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`) ← `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`) ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  0.1% |    1 MiB |       2 | `simplifyTrivialInstructions(MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer`) ← `transform(String, MethodNode)` ← `transform(String, MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.transformer.CompositeMethodTransformer`) ← `performTransformations(MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`) ← `visitEnd()` (`org.jetbrains.kotlin.codegen.TransformationMethodVisitor`) ← `visitEnd()` (`org.jetbrains.org.objectweb.asm.MethodVisitor`) ← `accept(MethodVisitor)` (`org.jetbrains.org.objectweb.asm.tree.MethodNode`) ← `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000800188f020`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`) ← `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`) ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  0.1% |    1 MiB |       2 | `parseCentralDirectory$lambda$0(Ref$LongRef, List, long, LargeDynamicMappedBuffer$Mapping)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt`) ← `invoke(Object)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt$$Lambda.0x0000008001396448`) ← `withMappedRange(long, long, Function1)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.LargeDynamicMappedBuffer`) ← `withMappedRangeFrom(long, Function1)` ← `parseCentralDirectory(LargeDynamicMappedBuffer)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt`) ← `<init>(FastJarFileSystem, String)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.FastJarHandler`) ← `myHandlers$lambda$0(FastJarFileSystem, String)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.FastJarFileSystem`) ← `invoke(Object)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.FastJarFileSystem$$Lambda.0x000000800135f108`) ← `myHandlers$lambda$1(Function1, Object)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.FastJarFileSystem`) ← `fun(Object)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.FastJarFileSystem$$Lambda.0x000000800135f340`) ← `create(Object)` (`com.intellij.util.containers.ConcurrentFactoryMap$2`) ← `get(Object)` (`com.intellij.util.containers.ConcurrentFactoryMap`) ← `findFileByPath(String)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.FastJarFileSystem`) ← `findJarRoot(VirtualFileSystem, File)` (`org.jetbrains.kotlin.cli.jvm.compiler.legacy.pipeline.JvmCompilerPipelineKt`) ← `contentRootToVirtualFile(JvmContentRootBase, VirtualFileSystem, VirtualFileSystem, CompilerConfiguration)` ← `createProjectEnvironment$lambda$0(CoreLocalFileSystem, KotlinCoreEnvironment$ProjectEnvironment, CompilerConfiguration, JvmContentRootBase)` ← `invoke(Object)` (`org.jetbrains.kotlin.cli.jvm.compiler.legacy.pipeline.JvmCompilerPipelineKt$$Lambda.0x000000800138a098`) ← `convertClasspathRoots(List)` (`org.jetbrains.kotlin.cli.jvm.compiler.ClasspathRootsResolver`) ← `createProjectEnvironment(CompilerConfiguration, Disposable, EnvironmentConfigFiles)` (`org.jetbrains.kotlin.cli.jvm.compiler.legacy.pipeline.JvmCompilerPipelineKt`) ← `createEnvironmentAndSources(CompilerConfiguration, Disposable, String)` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`) ← `executePhase(ConfigurationPipelineArtifact)` ← `executePhase(PipelineArtifact)` ← `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`) ← `phaseBody(LoggingContext, Object)` ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`) ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.backend.common.phaser.CompositePhase`) ← `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`) ← `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`) ← `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` ← `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` ← `execute(CommonCompilerArguments, Services, MessageCollector)` ← `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` ← `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`) ← `exec(MessageCollector, Services, CommonCompilerArguments)` ← `exec(PrintStream, Services, MessageRenderer, String[])` ← `exec(PrintStream, MessageRenderer, String[])` ← `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`) ← `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` ← `doMain(CLICompiler, String[])` ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`) ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000008001008400`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000008001009800`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  0.1% |    1 MiB |       2 | `<init>(int)` (`org.jetbrains.kotlin.protobuf.ByteString$Output`) ← `newOutput()` (`org.jetbrains.kotlin.protobuf.ByteString`) ← `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type`) ← `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `readMessage(Parser, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.CodedInputStream`) ← `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$TypeTable`) ← `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$TypeTable$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `readMessage(Parser, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.CodedInputStream`) ← `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Class`) ← `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Class$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `readMessage(Parser, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.CodedInputStream`) ← `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$PackageFragment`) ← `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$PackageFragment$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `parsePartialFrom(InputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.AbstractParser`) ← `parseFrom(InputStream, ExtensionRegistryLite)` ← `parseFrom(InputStream, ExtensionRegistryLite)` ← `parseFrom(InputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$PackageFragment`) ← `createFromStream(InputStream)` (`org.jetbrains.kotlin.fir.resolve.providers.impl.BinaryVersionAndPackageFragment$Companion`) ← `<init>(InputStream)` (`org.jetbrains.kotlin.fir.resolve.providers.impl.AbstractFirBuiltinSymbolProvider$BuiltInsPackageFragment`) ← `<clinit>()` (`org.jetbrains.kotlin.fir.resolve.providers.impl.FirFallbackBuiltinSymbolProvider`) ← `initializeBuiltinsProvider(FirSession, FirModuleData, FirKotlinScopeProvider, KotlinClassFinder)` (`org.jetbrains.kotlin.fir.session.FirJvmSessionFactory`) ← `createLibrarySession$lambda$0(FirJvmSessionFactory$Context, ModuleDataProvider, LanguageVersionSettings, FirSession, FirKotlinScopeProvider)` ← `invoke(Object, Object)` (`org.jetbrains.kotlin.fir.session.FirJvmSessionFactory$$Lambda.0x0000008001479798`) ← `createLibrarySession(Object, FirSession, ModuleDataProvider, LanguageVersionSettings, List, boolean, Function2)` (`org.jetbrains.kotlin.fir.session.FirAbstractSessionFactory`) ← `createLibrarySession(FirSession, ModuleDataProvider, List, LanguageVersionSettings, FirJvmSessionFactory$Context)` (`org.jetbrains.kotlin.fir.session.FirJvmSessionFactory`) ← `prepareJvmSessions$lambda$2(DependencyListForCliModule, List, CompilerConfiguration, FirJvmSessionFactory$Context, FirSession)` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`) ← `invoke(Object)` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase$$Lambda.0x0000008001424330`) ← `prepareSessions(List, CompilerConfiguration, Name, TargetPlatform, boolean, DependencyListForCliModule, List, Function1, Function1, Function2, Function0, Function0, Function1, FirSessionProducer, Function4)` (`org.jetbrains.kotlin.cli.common.SessionConstructionUtils`) ← `prepareSessions$default(SessionConstructionUtils, List, CompilerConfiguration, Name, TargetPlatform, boolean, DependencyListForCliModule, List, Function1, Function1, Function2, Function0, Function0, Function1, FirSessionProducer, Function4, int, Object)` ← `prepareJvmSessions(List, Name, CompilerConfiguration, VfsBasedProjectEnvironment, AbstractProjectFileSearchScope, DependencyListForCliModule, Function1, Function1, Function2, Function1)` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`) ← `executePhase(ConfigurationPipelineArtifact)` ← `executePhase(PipelineArtifact)` ← `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`) ← `phaseBody(LoggingContext, Object)` ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`) ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.backend.common.phaser.CompositePhase`) ← `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`) ← `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`) ← `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` ← `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` ← `execute(CommonCompilerArguments, Services, MessageCollector)` ← `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` ← `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`) ← `exec(MessageCollector, Services, CommonCompilerArguments)` ← `exec(PrintStream, Services, MessageRenderer, String[])` ← `exec(PrintStream, MessageRenderer, String[])` ← `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`) ← `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` ← `doMain(CLICompiler, String[])` ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`) ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000008001008400`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000008001009800`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

# Lock contention profile

Blocked 1.35s over 1,259 contentions (1.1ms per contention).

| Category         |     % |  Time | Contentions |
| ---------------- | ----: | ----: | ----------: |
| Ours             | 99.9% | 1.35s |       1,241 |
| Standard library |  0.1% | 1.1ms |          18 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
└── … 1.35s (99.7%, self 0.6%) generateFile(JvmBackendContext, IrFile, List, boolean) at org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory
    ├── 1.28s (95.0%) generate() at org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen
    │   ├── 1.26s (93.2%) generateMethod(IrFunction, SourceMapper)
    │   │   ├── 1.11s (82.4%, self 69.3%) generateMethodNode(IrFunction)
    │   │   │   └── … 177.8ms (13.1%, self 3.4%) doGenerate(ReifiedTypeParametersUsages) at org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen
    │   │   │       ├── … 81.5ms (6.0%) visitStatementContainer(IrStatementContainer, BlockInfo) at org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen
    │   │   │       │   ├── … 69.3ms (5.1%) visitReturn(IrReturn, BlockInfo) at org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen
    │   │   │       │   │   ├── … 36.1ms (2.7%) visitCall(IrCall, BlockInfo) at org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen
    │   │   │       │   │   │   ├── 8.1ms (0.6%) getOrCreateCallGenerator(IrFunctionAccessExpression, BlockInfo, JvmMethodSignature)
    │   │   │       │   │   │   └── 28.0ms (2.1%) 4 more callees, led by (1.7%) genCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean) at org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCallGenerator
    │   │   │       │   │   └── … 27.8ms (2.1%) visitCall(IrCall, BlockInfo) at org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen
    │   │   │       │   │       ├── … 11.8ms (0.9%) doInline(MethodVisitor, LocalVarRemapper, boolean, Map, int) at org.jetbrains.kotlin.codegen.inline.MethodInliner
    │   │   │       │   │       │   └── 6.6ms (0.5%) doInline(MethodNode)
    │   │   │       │   │       └── 5.2ms (0.4%) getOrCreateCallGenerator(IrFunctionAccessExpression, BlockInfo, JvmMethodSignature)
    │   │   │       │   └── 4.3ms (0.3%) getUnitValue(ExpressionCodegen) at org.jetbrains.kotlin.backend.jvm.codegen.PromisedValueKt
    │   │   │       ├── 7.0ms (0.5%) <init>(int, int, String, String, String, String[]) at org.jetbrains.org.objectweb.asm.tree.MethodNode
    │   │   │       ├── … 6.4ms (0.5%) <init>() at org.jetbrains.kotlin.codegen.FrameMapBase
    │   │   │       └── 28.4ms (2.1%) 13 more callees, led by (0.6%) mapSignatureWithGeneric(IrFunction) at org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper
    │   │   ├── … 42.6ms (3.1%) transform(String, MethodNode) at org.jetbrains.kotlin.codegen.optimization.transformer.CompositeMethodTransformer
    │   │   │   ├── … 4.2ms (0.3%) rewriteLabelInstructions() at org.jetbrains.kotlin.codegen.optimization.LabelNormalizationMethodTransformer$TransformerForMethod
    │   │   │   └── 34.9ms (2.6%) 9 more callees, led by (0.5%) transform(String, MethodNode) at org.jetbrains.kotlin.codegen.optimization.nullCheck.RedundantNullCheckMethodTransformer
    │   │   ├── 40.8ms (3.0%) newMethod(JvmDeclarationOrigin, int, String, String, String, String[]) at org.jetbrains.kotlin.codegen.DelegatingClassBuilder
    │   │   │   ├── 34.4ms (2.5%) newMethod(JvmDeclarationOrigin, int, String, String, String, String[]) at org.jetbrains.kotlin.codegen.optimization.OptimizationClassBuilder
    │   │   │   │   └── 32.6ms (2.4%, self 1.9%) <init>(MethodVisitor, boolean, GenerationState, int, String, String, String, String[]) at org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor
    │   │   │   │       └── 5.6ms (0.4%) <init>() at org.jetbrains.kotlin.codegen.optimization.FixStackWithLabelNormalizationMethodTransformer
    │   │   │   └── … 6.4ms (0.5%) newMethod(JvmDeclarationOrigin, int, String, String, String, String[]) at org.jetbrains.kotlin.codegen.AbstractClassBuilder
    │   │   │       └── 6.4ms (0.5%) visitMethod(int, String, String, String, String[]) at org.jetbrains.org.objectweb.asm.ClassWriter
    │   │   ├── … 33.0ms (2.4%, self 1.3%) makeFirMetadataSerializerForIrClass(FirSession, JvmBackendContext, IrClass, JvmSerializationBindings, Fir2IrComponents, MetadataSerializer, Set) at org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt
    │   │   │   ├── 7.9ms (0.6%) <init>(FirSession, JvmSerializationBindings, GenerationState, List, AbstractTypeApproximator, Fir2IrComponents, FirElementAwareStringTable) at org.jetbrains.kotlin.fir.backend.jvm.FirJvmSerializerExtension
    │   │   │   │   └── 6.0ms (0.4%) <init>(FirSession, JvmSerializationBindings, List, ScopeSession, JvmSerializationBindings, boolean, String, ClassBuilderMode, boolean, boolean, BinaryVersion, JvmDefaultMode, FirElementAwareStringTable, FirAdditionalMetadataProvider)
    │   │   │   └── 7.3ms (0.5%) makeElementSerializer(MetadataSource, FirSession, ScopeSession, FirJvmSerializerExtension, AbstractTypeApproximator, MetadataSerializer, LanguageVersionSettings)
    │   │   ├── 8.9ms (0.7%) <init>(SourceMapper, SMAP, MethodVisitor) at org.jetbrains.kotlin.codegen.inline.SourceMapCopyingMethodVisitor
    │   │   ├── … 4.7ms (0.3%) put(WritableSlice, Object, Object) at org.jetbrains.kotlin.util.slicedMap.SlicedMapImpl
    │   │   └── 4.6ms (0.3%) preprocessSuspendMarkers(MethodNode, boolean, boolean) at org.jetbrains.kotlin.codegen.inline.InlineCodegenUtilsKt
    │   └── 24.3ms (1.8%) 5 more callees, led by (1.7%) generateAnnotations()
    └── … 55.3ms (4.1%, self 0.8%) <init>(IrClass, JvmBackendContext, IrFunction, List) at org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen
        ├── … 22.4ms (1.7%, self 1.1%) newClassBuilder(JvmDeclarationOrigin) at org.jetbrains.kotlin.codegen.ClassBuilderFactories$1
        │   └── … 7.3ms (0.5%) <init>(ClassReader, int) at org.jetbrains.org.objectweb.asm.ClassWriter
        ├── 7.4ms (0.5%) getSourceMapper(JvmBackendContext, IrClass) at org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt
        └── 7.3ms (0.5%) mapClassSignature(IrTypeMapper, IrClass, Type, boolean) at org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt
```

## Hottest functions

### Self time

Functions with the most time blocked within the function body, excluding callees.

#### Categories

Categories accounting for at least 1.0% of self time.

##### Ours

|     % |    Time | Contentions | Function                                                                                                                                                                                                                                    | Location                                                                                             |
| ----: | ------: | ----------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| 69.3% | 937.0ms |          95 | `generateMethodNode(IrFunction)`                                                                                                                                                                                                            | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                                              |
|  3.4% |  46.4ms |          57 | `doGenerate(ReifiedTypeParametersUsages)`                                                                                                                                                                                                   | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`                                           |
|  1.9% |  26.2ms |          43 | `<init>(MethodVisitor, boolean, GenerationState, int, String, String, String, String[])`                                                                                                                                                    | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`                                |
|  1.3% |  17.9ms |          31 | `makeFirMetadataSerializerForIrClass(FirSession, JvmBackendContext, IrClass, JvmSerializationBindings, Fir2IrComponents, MetadataSerializer, Set)`                                                                                          | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`                                       |
|  1.1% |  15.1ms |          30 | `newClassBuilder(JvmDeclarationOrigin)`                                                                                                                                                                                                     | `org.jetbrains.kotlin.codegen.ClassBuilderFactories$1`                                               |
|  0.8% |  11.5ms |          63 | `<init>(IrClass, JvmBackendContext, IrFunction, List)`                                                                                                                                                                                      | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                                              |
|  0.8% |  10.2ms |          18 | `getOrCreateCallGenerator(IrFunctionAccessExpression, BlockInfo, JvmMethodSignature)`                                                                                                                                                       | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                                         |
|  0.6% |   8.6ms |          22 | `generateFile(JvmBackendContext, IrFile, List, boolean)`                                                                                                                                                                                    | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`                                               |
|  0.5% |   7.0ms |          16 | `<init>(int, int, String, String, String, String[])`                                                                                                                                                                                        | `org.jetbrains.org.objectweb.asm.tree.MethodNode`                                                    |
|  0.5% |   6.4ms |          25 | `<init>()`                                                                                                                                                                                                                                  | `org.jetbrains.kotlin.codegen.FrameMapBase`                                                          |
|  0.5% |   6.3ms |          16 | `doInline(MethodNode)`                                                                                                                                                                                                                      | `org.jetbrains.kotlin.codegen.inline.MethodInliner`                                                  |
|  0.5% |   6.2ms |          18 | `<init>(ClassReader, int)`                                                                                                                                                                                                                  | `org.jetbrains.org.objectweb.asm.ClassWriter`                                                        |
|  0.5% |   6.1ms |           2 | `<init>(SourceMapper, SMAP, MethodVisitor)`                                                                                                                                                                                                 | `org.jetbrains.kotlin.codegen.inline.SourceMapCopyingMethodVisitor`                                  |
|  0.4% |   5.6ms |           7 | `<init>()`                                                                                                                                                                                                                                  | `org.jetbrains.kotlin.codegen.optimization.FixStackWithLabelNormalizationMethodTransformer`          |
|  0.4% |   5.0ms |           4 | `<init>(FirSession, JvmSerializationBindings, List, ScopeSession, JvmSerializationBindings, boolean, String, ClassBuilderMode, boolean, boolean, BinaryVersion, JvmDefaultMode, FirElementAwareStringTable, FirAdditionalMetadataProvider)` | `org.jetbrains.kotlin.fir.backend.jvm.FirJvmSerializerExtension`                                     |
|  0.4% |   5.0ms |           4 | `visitMethod(int, String, String, String, String[])`                                                                                                                                                                                        | `org.jetbrains.org.objectweb.asm.ClassWriter`                                                        |
|  0.3% |   4.7ms |          43 | `mapClassSignature(IrTypeMapper, IrClass, Type, boolean)`                                                                                                                                                                                   | `org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt`                                          |
|  0.3% |   4.3ms |           2 | `getUnitValue(ExpressionCodegen)`                                                                                                                                                                                                           | `org.jetbrains.kotlin.backend.jvm.codegen.PromisedValueKt`                                           |
|  0.3% |   4.3ms |           6 | `makeElementSerializer(MetadataSource, FirSession, ScopeSession, FirJvmSerializerExtension, AbstractTypeApproximator, MetadataSerializer, LanguageVersionSettings)`                                                                         | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`                                       |
|  0.3% |   4.2ms |           4 | `rewriteLabelInstructions()`                                                                                                                                                                                                                | `org.jetbrains.kotlin.codegen.optimization.LabelNormalizationMethodTransformer$TransformerForMethod` |

#### Lines

Lines with the largest contribution to each function's self time.

##### `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|     % |    Time | Contentions | Location                                                    |
| ----: | ------: | ----------: | ----------------------------------------------------------- |
| 99.4% | 931.7ms |          74 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:427` |
|  0.4% |   3.3ms |          11 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:422` |
|  0.2% |   1.8ms |           9 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:416` |
| <0.1% |   0.2ms |           1 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:428` |

##### `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

|     % |   Time | Contentions | Location                                                       |
| ----: | -----: | ----------: | -------------------------------------------------------------- |
| 41.4% | 19.2ms |          14 | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen:68`  |
| 22.7% | 10.5ms |          11 | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen:134` |
| 17.2% |  8.0ms |           9 | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen:133` |
|  7.0% |  3.3ms |           8 | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen:76`  |
|  4.9% |  2.3ms |           6 | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen:84`  |

##### `<init>(MethodVisitor, boolean, GenerationState, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`)

|     % |  Time | Contentions | Location                                                                 |
| ----: | ----: | ----------: | ------------------------------------------------------------------------ |
| 25.3% | 6.6ms |           2 | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor:64` |
| 16.1% | 4.2ms |           4 | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor:53` |
| 12.2% | 3.2ms |           8 | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor:47` |
|  9.3% | 2.4ms |           4 | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor:58` |
|  7.1% | 1.9ms |           3 | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor:59` |

##### `makeFirMetadataSerializerForIrClass(FirSession, JvmBackendContext, IrClass, JvmSerializationBindings, Fir2IrComponents, MetadataSerializer, Set)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`)

|     % |  Time | Contentions | Location                                                          |
| ----: | ----: | ----------: | ----------------------------------------------------------------- |
| 43.5% | 7.8ms |           7 | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt:50` |
| 25.6% | 4.6ms |          10 | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt:54` |
| 19.4% | 3.5ms |          13 | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt:61` |
| 11.5% | 2.1ms |           1 | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt:63` |

##### `newClassBuilder(JvmDeclarationOrigin)` (`org.jetbrains.kotlin.codegen.ClassBuilderFactories$1`)

|      % |   Time | Contentions | Location                                                  |
| -----: | -----: | ----------: | --------------------------------------------------------- |
| 100.0% | 15.1ms |          30 | `org.jetbrains.kotlin.codegen.ClassBuilderFactories$1:70` |

##### `<init>(IrClass, JvmBackendContext, IrFunction, List)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|     % |  Time | Contentions | Location                                                    |
| ----: | ----: | ----------: | ----------------------------------------------------------- |
| 37.3% | 4.3ms |          18 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:84`  |
| 17.2% | 2.0ms |           5 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:107` |
| 12.0% | 1.4ms |           7 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:89`  |
| 11.6% | 1.3ms |          10 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:110` |
|  9.4% | 1.1ms |          14 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:109` |

##### `getOrCreateCallGenerator(IrFunctionAccessExpression, BlockInfo, JvmMethodSignature)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|     % |  Time | Contentions | Location                                                          |
| ----: | ----: | ----------: | ----------------------------------------------------------------- |
| 33.7% | 3.4ms |           2 | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen:1572` |
| 24.9% | 2.5ms |           4 | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen:1548` |
| 11.8% | 1.2ms |           1 | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen:1568` |
| 10.7% | 1.1ms |           3 | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen:1581` |
| 10.4% | 1.1ms |           4 | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen:1570` |

##### `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)

|     % |  Time | Contentions | Location                                                   |
| ----: | ----: | ----------: | ---------------------------------------------------------- |
| 94.8% | 8.2ms |          18 | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory:465` |
|  5.2% | 0.4ms |           4 | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory:459` |

##### `<init>(int, int, String, String, String, String[])` (`org.jetbrains.org.objectweb.asm.tree.MethodNode`)

|     % |  Time | Contentions | Location                                              |
| ----: | ----: | ----------: | ----------------------------------------------------- |
| 59.4% | 4.1ms |          10 | `org.jetbrains.org.objectweb.asm.tree.MethodNode:225` |
| 40.6% | 2.8ms |           6 | `org.jetbrains.org.objectweb.asm.tree.MethodNode:230` |

##### `<init>()` (`org.jetbrains.kotlin.codegen.FrameMapBase`)

|      % |  Time | Contentions | Location                                       |
| -----: | ----: | ----------: | ---------------------------------------------- |
| 100.0% | 6.4ms |          25 | `org.jetbrains.kotlin.codegen.FrameMapBase:26` |

##### `doInline(MethodNode)` (`org.jetbrains.kotlin.codegen.inline.MethodInliner`)

|     % |  Time | Contentions | Location                                                |
| ----: | ----: | ----------: | ------------------------------------------------------- |
| 55.3% | 3.5ms |           6 | `org.jetbrains.kotlin.codegen.inline.MethodInliner:154` |
| 26.6% | 1.7ms |           2 | `org.jetbrains.kotlin.codegen.inline.MethodInliner:153` |
|  9.8% | 0.6ms |           4 | `org.jetbrains.kotlin.codegen.inline.MethodInliner:159` |
|  5.9% | 0.4ms |           3 | `org.jetbrains.kotlin.codegen.inline.MethodInliner:156` |
|  2.4% | 0.2ms |           1 | `org.jetbrains.kotlin.codegen.inline.MethodInliner:433` |

##### `<init>(ClassReader, int)` (`org.jetbrains.org.objectweb.asm.ClassWriter`)

|      % |  Time | Contentions | Location                                          |
| -----: | ----: | ----------: | ------------------------------------------------- |
| 100.0% | 6.2ms |          18 | `org.jetbrains.org.objectweb.asm.ClassWriter:266` |

##### `<init>(SourceMapper, SMAP, MethodVisitor)` (`org.jetbrains.kotlin.codegen.inline.SourceMapCopyingMethodVisitor`)

|      % |  Time | Contentions | Location                                                               |
| -----: | ----: | ----------: | ---------------------------------------------------------------------- |
| 100.0% | 6.1ms |           2 | `org.jetbrains.kotlin.codegen.inline.SourceMapCopyingMethodVisitor:84` |

##### `<init>()` (`org.jetbrains.kotlin.codegen.optimization.FixStackWithLabelNormalizationMethodTransformer`)

|     % |  Time | Contentions | Location                                                                                       |
| ----: | ----: | ----------: | ---------------------------------------------------------------------------------------------- |
| 96.2% | 5.4ms |           5 | `org.jetbrains.kotlin.codegen.optimization.FixStackWithLabelNormalizationMethodTransformer:24` |
|  3.8% | 0.2ms |           2 | `org.jetbrains.kotlin.codegen.optimization.FixStackWithLabelNormalizationMethodTransformer:23` |

##### `<init>(FirSession, JvmSerializationBindings, List, ScopeSession, JvmSerializationBindings, boolean, String, ClassBuilderMode, boolean, boolean, BinaryVersion, JvmDefaultMode, FirElementAwareStringTable, FirAdditionalMetadataProvider)` (`org.jetbrains.kotlin.fir.backend.jvm.FirJvmSerializerExtension`)

|      % |  Time | Contentions | Location                                                            |
| -----: | ----: | ----------: | ------------------------------------------------------------------- |
| 100.0% | 5.0ms |           4 | `org.jetbrains.kotlin.fir.backend.jvm.FirJvmSerializerExtension:63` |

##### `visitMethod(int, String, String, String, String[])` (`org.jetbrains.org.objectweb.asm.ClassWriter`)

|      % |  Time | Contentions | Location                                          |
| -----: | ----: | ----------: | ------------------------------------------------- |
| 100.0% | 5.0ms |           4 | `org.jetbrains.org.objectweb.asm.ClassWriter:469` |

##### `mapClassSignature(IrTypeMapper, IrClass, Type, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt`)

|     % |  Time | Contentions | Location                                                        |
| ----: | ----: | ----------: | --------------------------------------------------------------- |
| 77.0% | 3.6ms |          35 | `org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt:225` |
| 23.0% | 1.1ms |           8 | `org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt:267` |

##### `getUnitValue(ExpressionCodegen)` (`org.jetbrains.kotlin.backend.jvm.codegen.PromisedValueKt`)

|      % |  Time | Contentions | Location                                                       |
| -----: | ----: | ----------: | -------------------------------------------------------------- |
| 100.0% | 4.3ms |           2 | `org.jetbrains.kotlin.backend.jvm.codegen.PromisedValueKt:186` |

##### `makeElementSerializer(MetadataSource, FirSession, ScopeSession, FirJvmSerializerExtension, AbstractTypeApproximator, MetadataSerializer, LanguageVersionSettings)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`)

|     % |  Time | Contentions | Location                                                           |
| ----: | ----: | ----------: | ------------------------------------------------------------------ |
| 82.7% | 3.6ms |           5 | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt:198` |
| 17.3% | 0.7ms |           1 | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt:190` |

##### `rewriteLabelInstructions()` (`org.jetbrains.kotlin.codegen.optimization.LabelNormalizationMethodTransformer$TransformerForMethod`)

|      % |  Time | Contentions | Location                                                                                                |
| -----: | ----: | ----------: | ------------------------------------------------------------------------------------------------------- |
| 100.0% | 4.2ms |           4 | `org.jetbrains.kotlin.codegen.optimization.LabelNormalizationMethodTransformer$TransformerForMethod:53` |

#### Callers

Callers with the largest contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|     % |    Time | Contentions | Caller                                      | Location                                                             |
| ----: | ------: | ----------: | ------------------------------------------- | -------------------------------------------------------------------- |
| 89.3% | 836.9ms |          93 | `generateMethod(IrFunction, SourceMapper)`  | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`              |
| 10.7% | 100.1ms |           2 | `compileInlineFunction(JvmMethodSignature)` | `org.jetbrains.kotlin.backend.jvm.codegen.IrSourceCompilerForInline` |

##### `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

|      % |   Time | Contentions | Caller                                  | Location                                                   |
| -----: | -----: | ----------: | --------------------------------------- | ---------------------------------------------------------- |
| 100.0% | 46.4ms |          57 | `generate(ReifiedTypeParametersUsages)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `<init>(MethodVisitor, boolean, GenerationState, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`)

|      % |   Time | Contentions | Caller                                                                   | Location                                                             |
| -----: | -----: | ----------: | ------------------------------------------------------------------------ | -------------------------------------------------------------------- |
| 100.0% | 26.2ms |          43 | `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` | `org.jetbrains.kotlin.codegen.optimization.OptimizationClassBuilder` |

##### `makeFirMetadataSerializerForIrClass(FirSession, JvmBackendContext, IrClass, JvmSerializationBindings, Fir2IrComponents, MetadataSerializer, Set)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`)

|      % |   Time | Contentions | Caller                                                                                             | Location                                                      |
| -----: | -----: | ----------: | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| 100.0% | 17.9ms |          31 | `createSerializer(JvmBackendContext, IrClass, Type, JvmSerializationBindings, MetadataSerializer)` | `org.jetbrains.kotlin.fir.backend.jvm.FirJvmBackendExtension` |

##### `newClassBuilder(JvmDeclarationOrigin)` (`org.jetbrains.kotlin.codegen.ClassBuilderFactories$1`)

|      % |   Time | Contentions | Caller                                  | Location                                                                    |
| -----: | -----: | ----------: | --------------------------------------- | --------------------------------------------------------------------------- |
| 100.0% | 15.1ms |          30 | `newClassBuilder(JvmDeclarationOrigin)` | `org.jetbrains.kotlin.codegen.optimization.OptimizationClassBuilderFactory` |

##### `<init>(IrClass, JvmBackendContext, IrFunction, List)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|      % |   Time | Contentions | Caller                                                                           | Location                                                |
| -----: | -----: | ----------: | -------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% | 11.5ms |          63 | `<init>(IrClass, JvmBackendContext, IrFunction, List, DefaultConstructorMarker)` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |

##### `getOrCreateCallGenerator(IrFunctionAccessExpression, BlockInfo, JvmMethodSignature)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|      % |   Time | Contentions | Caller                         | Location                                                     |
| -----: | -----: | ----------: | ------------------------------ | ------------------------------------------------------------ |
| 100.0% | 10.2ms |          18 | `visitCall(IrCall, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)

|      % |  Time | Contentions | Caller                                                                                                            | Location                                               |
| -----: | ----: | ----------: | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% | 8.6ms |          22 | `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory` |

##### `<init>(int, int, String, String, String, String[])` (`org.jetbrains.org.objectweb.asm.tree.MethodNode`)

|      % |  Time | Contentions | Caller                                    | Location                                                   |
| -----: | ----: | ----------: | ----------------------------------------- | ---------------------------------------------------------- |
| 100.0% | 7.0ms |          16 | `doGenerate(ReifiedTypeParametersUsages)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `<init>()` (`org.jetbrains.kotlin.codegen.FrameMapBase`)

|      % |  Time | Contentions | Caller     | Location                                              |
| -----: | ----: | ----------: | ---------- | ----------------------------------------------------- |
| 100.0% | 6.4ms |          25 | `<init>()` | `org.jetbrains.kotlin.backend.jvm.codegen.IrFrameMap` |

##### `doInline(MethodNode)` (`org.jetbrains.kotlin.codegen.inline.MethodInliner`)

|      % |  Time | Contentions | Caller                                                         | Location                                            |
| -----: | ----: | ----------: | -------------------------------------------------------------- | --------------------------------------------------- |
| 100.0% | 6.3ms |          16 | `doInline(MethodVisitor, LocalVarRemapper, boolean, Map, int)` | `org.jetbrains.kotlin.codegen.inline.MethodInliner` |

##### `<init>(ClassReader, int)` (`org.jetbrains.org.objectweb.asm.ClassWriter`)

|      % |  Time | Contentions | Caller        | Location                                      |
| -----: | ----: | ----------: | ------------- | --------------------------------------------- |
| 100.0% | 6.2ms |          18 | `<init>(int)` | `org.jetbrains.org.objectweb.asm.ClassWriter` |

##### `<init>(SourceMapper, SMAP, MethodVisitor)` (`org.jetbrains.kotlin.codegen.inline.SourceMapCopyingMethodVisitor`)

|      % |  Time | Contentions | Caller                                     | Location                                                |
| -----: | ----: | ----------: | ------------------------------------------ | ------------------------------------------------------- |
| 100.0% | 6.1ms |           2 | `generateMethod(IrFunction, SourceMapper)` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |

##### `<init>()` (`org.jetbrains.kotlin.codegen.optimization.FixStackWithLabelNormalizationMethodTransformer`)

|      % |  Time | Contentions | Caller                                                                                   | Location                                                              |
| -----: | ----: | ----------: | ---------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| 100.0% | 5.6ms |           7 | `<init>(MethodVisitor, boolean, GenerationState, int, String, String, String, String[])` | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor` |

##### `<init>(FirSession, JvmSerializationBindings, List, ScopeSession, JvmSerializationBindings, boolean, String, ClassBuilderMode, boolean, boolean, BinaryVersion, JvmDefaultMode, FirElementAwareStringTable, FirAdditionalMetadataProvider)` (`org.jetbrains.kotlin.fir.backend.jvm.FirJvmSerializerExtension`)

|      % |  Time | Contentions | Caller                                                                                                                                        | Location                                                         |
| -----: | ----: | ----------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| 100.0% | 5.0ms |           4 | `<init>(FirSession, JvmSerializationBindings, GenerationState, List, AbstractTypeApproximator, Fir2IrComponents, FirElementAwareStringTable)` | `org.jetbrains.kotlin.fir.backend.jvm.FirJvmSerializerExtension` |

##### `visitMethod(int, String, String, String, String[])` (`org.jetbrains.org.objectweb.asm.ClassWriter`)

|      % |  Time | Contentions | Caller                                                                   | Location                                            |
| -----: | ----: | ----------: | ------------------------------------------------------------------------ | --------------------------------------------------- |
| 100.0% | 5.0ms |           4 | `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` | `org.jetbrains.kotlin.codegen.AbstractClassBuilder` |

##### `mapClassSignature(IrTypeMapper, IrClass, Type, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt`)

|      % |  Time | Contentions | Caller                                                 | Location                                                |
| -----: | ----: | ----------: | ------------------------------------------------------ | ------------------------------------------------------- |
| 100.0% | 4.7ms |          43 | `<init>(IrClass, JvmBackendContext, IrFunction, List)` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |

##### `getUnitValue(ExpressionCodegen)` (`org.jetbrains.kotlin.backend.jvm.codegen.PromisedValueKt`)

|      % |  Time | Contentions | Caller                                                     | Location                                                     |
| -----: | ----: | ----------: | ---------------------------------------------------------- | ------------------------------------------------------------ |
| 100.0% | 4.3ms |           2 | `visitStatementContainer(IrStatementContainer, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `makeElementSerializer(MetadataSource, FirSession, ScopeSession, FirJvmSerializerExtension, AbstractTypeApproximator, MetadataSerializer, LanguageVersionSettings)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`)

|      % |  Time | Contentions | Caller                                                                                                                                             | Location                                                       |
| -----: | ----: | ----------: | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| 100.0% | 4.3ms |           6 | `makeFirMetadataSerializerForIrClass(FirSession, JvmBackendContext, IrClass, JvmSerializationBindings, Fir2IrComponents, MetadataSerializer, Set)` | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt` |

##### `rewriteLabelInstructions()` (`org.jetbrains.kotlin.codegen.optimization.LabelNormalizationMethodTransformer$TransformerForMethod`)

|      % |  Time | Contentions | Caller        | Location                                                                                             |
| -----: | ----: | ----------: | ------------- | ---------------------------------------------------------------------------------------------------- |
| 100.0% | 4.2ms |           4 | `transform()` | `org.jetbrains.kotlin.codegen.optimization.LabelNormalizationMethodTransformer$TransformerForMethod` |

### Total time

Functions with the most time blocked within the function and its callees.

|      % |    Time | Contentions | Function                                                                                                          | Location                                                                          |
| -----: | ------: | ----------: | ----------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| 100.0% |   1.35s |       1,259 | `runWorker(ThreadPoolExecutor$Worker)`                                                                            | `java.util.concurrent.ThreadPoolExecutor`                                         |
| 100.0% |   1.35s |       1,259 | `run()`                                                                                                           | `java.util.concurrent.ThreadPoolExecutor$Worker`                                  |
| 100.0% |   1.35s |       1,259 | `runWith(Object, Runnable)`                                                                                       | `java.lang.Thread`                                                                |
| 100.0% |   1.35s |       1,259 | `run()`                                                                                                           | `java.lang.Thread`                                                                |
| 100.0% |   1.35s |       1,254 | `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`                            |
| 100.0% |   1.35s |       1,254 | `run()`                                                                                                           | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000800188f020` |
| 100.0% |   1.35s |       1,254 | `run()`                                                                                                           | `java.util.concurrent.CompletableFuture$AsyncRun`                                 |
|  99.7% |   1.35s |       1,224 | `generateFile(JvmBackendContext, IrFile, List, boolean)`                                                          | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`                            |
|  95.0% |   1.28s |         869 | `generate()`                                                                                                      | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                           |
|  93.2% |   1.26s |         791 | `generateMethod(IrFunction, SourceMapper)`                                                                        | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                           |
|  82.4% |   1.11s |         507 | `generateMethodNode(IrFunction)`                                                                                  | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                           |
|  20.6% | 278.0ms |         414 | `doGenerate(ReifiedTypeParametersUsages)`                                                                         | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`                        |
|  20.6% | 278.0ms |         414 | `generate(ReifiedTypeParametersUsages)`                                                                           | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`                        |
|  20.6% | 278.0ms |         414 | `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)`                                     | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`                        |
|  13.9% | 187.6ms |         188 | `generate()`                                                                                                      | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
|  13.4% | 181.6ms |         171 | `visitStatementContainer(IrStatementContainer, BlockInfo)`                                                        | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
|  13.4% | 181.6ms |         171 | `visitBlockBody(IrBlockBody, BlockInfo)`                                                                          | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
|  13.4% | 181.6ms |         171 | `visitBlockBody(IrBlockBody, Object)`                                                                             | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
|  13.4% | 181.6ms |         171 | `accept(IrVisitor, Object)`                                                                                       | `org.jetbrains.kotlin.ir.expressions.IrBlockBody`                                 |
|  12.8% | 172.5ms |         164 | `visitReturn(IrReturn, BlockInfo)`                                                                                | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Ours

|      % |    Time | Contentions | Function                                                                                                          | Location                                                                          |
| -----: | ------: | ----------: | ----------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| 100.0% |   1.35s |       1,254 | `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`                            |
| 100.0% |   1.35s |       1,254 | `run()`                                                                                                           | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000800188f020` |
|  99.7% |   1.35s |       1,224 | `generateFile(JvmBackendContext, IrFile, List, boolean)`                                                          | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`                            |
|  95.0% |   1.28s |         869 | `generate()`                                                                                                      | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                           |
|  93.2% |   1.26s |         791 | `generateMethod(IrFunction, SourceMapper)`                                                                        | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                           |
|  82.4% |   1.11s |         507 | `generateMethodNode(IrFunction)`                                                                                  | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                           |
|  20.6% | 278.0ms |         414 | `doGenerate(ReifiedTypeParametersUsages)`                                                                         | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`                        |
|  20.6% | 278.0ms |         414 | `generate(ReifiedTypeParametersUsages)`                                                                           | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`                        |
|  20.6% | 278.0ms |         414 | `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)`                                     | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`                        |
|  13.9% | 187.6ms |         188 | `generate()`                                                                                                      | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
|  13.4% | 181.6ms |         171 | `visitStatementContainer(IrStatementContainer, BlockInfo)`                                                        | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
|  13.4% | 181.6ms |         171 | `visitBlockBody(IrBlockBody, BlockInfo)`                                                                          | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
|  13.4% | 181.6ms |         171 | `visitBlockBody(IrBlockBody, Object)`                                                                             | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
|  13.4% | 181.6ms |         171 | `accept(IrVisitor, Object)`                                                                                       | `org.jetbrains.kotlin.ir.expressions.IrBlockBody`                                 |
|  12.8% | 172.5ms |         164 | `visitReturn(IrReturn, BlockInfo)`                                                                                | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
|  12.8% | 172.5ms |         164 | `visitReturn(IrReturn, Object)`                                                                                   | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
|  12.8% | 172.5ms |         164 | `accept(IrVisitor, Object)`                                                                                       | `org.jetbrains.kotlin.ir.expressions.IrReturn`                                    |
|  12.4% | 167.8ms |         153 | `visitCall(IrCall, BlockInfo)`                                                                                    | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
|  12.4% | 167.8ms |         153 | `visitCall(IrCall, Object)`                                                                                       | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
|  12.4% | 167.8ms |         153 | `accept(IrVisitor, Object)`                                                                                       | `org.jetbrains.kotlin.ir.expressions.IrCall`                                      |

#### Callers

Callers with the largest contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`)

|      % |  Time | Contentions | Caller  | Location                                         |
| -----: | ----: | ----------: | ------- | ------------------------------------------------ |
| 100.0% | 1.35s |       1,259 | `run()` | `java.util.concurrent.ThreadPoolExecutor$Worker` |

##### `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`)

|      % |  Time | Contentions | Caller                      | Location           |
| -----: | ----: | ----------: | --------------------------- | ------------------ |
| 100.0% | 1.35s |       1,259 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `runWith(Object, Runnable)` (`java.lang.Thread`)

|      % |  Time | Contentions | Caller  | Location           |
| -----: | ----: | ----------: | ------- | ------------------ |
| 100.0% | 1.35s |       1,259 | `run()` | `java.lang.Thread` |

##### `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)

|      % |  Time | Contentions | Caller  | Location                                                                          |
| -----: | ----: | ----------: | ------- | --------------------------------------------------------------------------------- |
| 100.0% | 1.35s |       1,254 | `run()` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000800188f020` |

##### `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000800188f020`)

|      % |  Time | Contentions | Caller  | Location                                          |
| -----: | ----: | ----------: | ------- | ------------------------------------------------- |
| 100.0% | 1.35s |       1,254 | `run()` | `java.util.concurrent.CompletableFuture$AsyncRun` |

##### `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`)

|      % |  Time | Contentions | Caller                                 | Location                                  |
| -----: | ----: | ----------: | -------------------------------------- | ----------------------------------------- |
| 100.0% | 1.35s |       1,254 | `runWorker(ThreadPoolExecutor$Worker)` | `java.util.concurrent.ThreadPoolExecutor` |

##### `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)

|      % |  Time | Contentions | Caller                                                                                                            | Location                                               |
| -----: | ----: | ----------: | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% | 1.35s |       1,224 | `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory` |

##### `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|      % |  Time | Contentions | Caller                                                   | Location                                               |
| -----: | ----: | ----------: | -------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% | 1.28s |         869 | `generateFile(JvmBackendContext, IrFile, List, boolean)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory` |

##### `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|      % |  Time | Contentions | Caller       | Location                                                |
| -----: | ----: | ----------: | ------------ | ------------------------------------------------------- |
| 100.0% | 1.26s |         791 | `generate()` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |

##### `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|      % |    Time | Contentions | Caller                                      | Location                                                             |
| -----: | ------: | ----------: | ------------------------------------------- | -------------------------------------------------------------------- |
| 100.0% |   1.11s |         507 | `generateMethod(IrFunction, SourceMapper)`  | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`              |
|   9.0% | 100.1ms |           2 | `compileInlineFunction(JvmMethodSignature)` | `org.jetbrains.kotlin.backend.jvm.codegen.IrSourceCompilerForInline` |

##### `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

|      % |    Time | Contentions | Caller                                  | Location                                                   |
| -----: | ------: | ----------: | --------------------------------------- | ---------------------------------------------------------- |
| 100.0% | 278.0ms |         414 | `generate(ReifiedTypeParametersUsages)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `generate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

|      % |    Time | Contentions | Caller                                                                        | Location                                                   |
| -----: | ------: | ----------: | ----------------------------------------------------------------------------- | ---------------------------------------------------------- |
| 100.0% | 278.0ms |         414 | `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

|      % |    Time | Contentions | Caller                           | Location                                                |
| -----: | ------: | ----------: | -------------------------------- | ------------------------------------------------------- |
| 100.0% | 278.0ms |         414 | `generateMethodNode(IrFunction)` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |

##### `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|      % |    Time | Contentions | Caller                                    | Location                                                   |
| -----: | ------: | ----------: | ----------------------------------------- | ---------------------------------------------------------- |
| 100.0% | 187.6ms |         188 | `doGenerate(ReifiedTypeParametersUsages)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|      % |    Time | Contentions | Caller                                                       | Location                                                     |
| -----: | ------: | ----------: | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 100.0% | 181.6ms |         171 | `visitBlockBody(IrBlockBody, BlockInfo)`                     | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |
|   1.7% |   3.2ms |          12 | `visitContainerExpression(IrContainerExpression, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitBlockBody(IrBlockBody, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|      % |    Time | Contentions | Caller                                | Location                                                     |
| -----: | ------: | ----------: | ------------------------------------- | ------------------------------------------------------------ |
| 100.0% | 181.6ms |         171 | `visitBlockBody(IrBlockBody, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitBlockBody(IrBlockBody, Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|      % |    Time | Contentions | Caller                      | Location                                          |
| -----: | ------: | ----------: | --------------------------- | ------------------------------------------------- |
| 100.0% | 181.6ms |         171 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrBlockBody` |

##### `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`)

|      % |    Time | Contentions | Caller       | Location                                                     |
| -----: | ------: | ----------: | ------------ | ------------------------------------------------------------ |
| 100.0% | 181.6ms |         171 | `generate()` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|      % |    Time | Contentions | Caller                          | Location                                                     |
| -----: | ------: | ----------: | ------------------------------- | ------------------------------------------------------------ |
| 100.0% | 172.5ms |         164 | `visitReturn(IrReturn, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitReturn(IrReturn, Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|      % |    Time | Contentions | Caller                      | Location                                       |
| -----: | ------: | ----------: | --------------------------- | ---------------------------------------------- |
| 100.0% | 172.5ms |         164 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrReturn` |

##### `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`)

|      % |    Time | Contentions | Caller                                                     | Location                                                     |
| -----: | ------: | ----------: | ---------------------------------------------------------- | ------------------------------------------------------------ |
| 100.0% | 172.5ms |         164 | `visitStatementContainer(IrStatementContainer, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitCall(IrCall, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|      % |    Time | Contentions | Caller                      | Location                                                     |
| -----: | ------: | ----------: | --------------------------- | ------------------------------------------------------------ |
| 100.0% | 167.8ms |         153 | `visitCall(IrCall, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitCall(IrCall, Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|      % |    Time | Contentions | Caller                      | Location                                     |
| -----: | ------: | ----------: | --------------------------- | -------------------------------------------- |
| 100.0% | 167.8ms |         153 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrCall` |

##### `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`)

|     % |    Time | Contentions | Caller                                                     | Location                                                     |
| ----: | ------: | ----------: | ---------------------------------------------------------- | ------------------------------------------------------------ |
| 82.7% | 138.8ms |          82 | `visitWhen(IrWhen, BlockInfo)`                             | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |
| 17.0% |  28.5ms |          69 | `visitReturn(IrReturn, BlockInfo)`                         | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |
|  0.3% |   0.5ms |           2 | `visitStatementContainer(IrStatementContainer, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

#### Callees

Callees with the largest contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`)

|      % |  Time | Contentions | Callee      | Location                                          |
| -----: | ----: | ----------: | ----------- | ------------------------------------------------- |
| 100.0% | 1.35s |       1,254 | `run()`     | `java.util.concurrent.CompletableFuture$AsyncRun` |
|  <0.1% | 0.5ms |           5 | `getTask()` | `java.util.concurrent.ThreadPoolExecutor`         |

##### `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`)

|      % |  Time | Contentions | Callee                                 | Location                                  |
| -----: | ----: | ----------: | -------------------------------------- | ----------------------------------------- |
| 100.0% | 1.35s |       1,259 | `runWorker(ThreadPoolExecutor$Worker)` | `java.util.concurrent.ThreadPoolExecutor` |

##### `runWith(Object, Runnable)` (`java.lang.Thread`)

|      % |  Time | Contentions | Callee  | Location                                         |
| -----: | ----: | ----------: | ------- | ------------------------------------------------ |
| 100.0% | 1.35s |       1,259 | `run()` | `java.util.concurrent.ThreadPoolExecutor$Worker` |

##### `run()` (`java.lang.Thread`)

|      % |  Time | Contentions | Callee                      | Location           |
| -----: | ----: | ----------: | --------------------------- | ------------------ |
| 100.0% | 1.35s |       1,259 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)

|     % |  Time | Contentions | Callee                                                   | Location                                               |
| ----: | ----: | ----------: | -------------------------------------------------------- | ------------------------------------------------------ |
| 99.8% | 1.35s |       1,224 | `generateFile(JvmBackendContext, IrFile, List, boolean)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory` |
|  0.2% | 3.0ms |          30 | `getUnitStats()`                                         | `org.jetbrains.kotlin.util.PerformanceManager`         |

##### `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000800188f020`)

|      % |  Time | Contentions | Callee                                                                                                            | Location                                               |
| -----: | ----: | ----------: | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% | 1.35s |       1,254 | `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory` |

##### `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`)

|      % |  Time | Contentions | Callee  | Location                                                                          |
| -----: | ----: | ----------: | ------- | --------------------------------------------------------------------------------- |
| 100.0% | 1.35s |       1,254 | `run()` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000800188f020` |

##### `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)

|     % |   Time | Contentions | Callee                                                                                                   | Location                                                          |
| ----: | -----: | ----------: | -------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| 95.3% |  1.28s |         869 | `generate()`                                                                                             | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`           |
|  4.1% | 55.3ms |         333 | `getOrCreate$default(ClassCodegen$Companion, IrClass, JvmBackendContext, List, IrFunction, int, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$Companion` |

##### `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|     % |   Time | Contentions | Callee                                                  | Location                                                |
| ----: | -----: | ----------: | ------------------------------------------------------- | ------------------------------------------------------- |
| 98.1% |  1.26s |         791 | `generateMethod(IrFunction, SourceMapper)`              | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |
|  1.8% | 23.2ms |          69 | `generateAnnotations()`                                 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |
| <0.1% |  0.6ms |           1 | `generateField(IrField)`                                | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |
| <0.1% |  0.5ms |           4 | `generateInnerAndOuterClasses()`                        | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |
| <0.1% |  0.1ms |           3 | `shouldSkipCodeGenerationAccordingToGenerationFilter()` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |

##### `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|     % |   Time | Contentions | Callee                                                                   | Location                                                            |
| ----: | -----: | ----------: | ------------------------------------------------------------------------ | ------------------------------------------------------------------- |
| 88.4% |  1.11s |         507 | `generateMethodNode(IrFunction)`                                         | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`             |
|  3.8% | 48.2ms |         129 | `accept(MethodVisitor)`                                                  | `org.jetbrains.org.objectweb.asm.tree.MethodNode`                   |
|  3.2% | 40.8ms |          62 | `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` | `org.jetbrains.kotlin.codegen.DelegatingClassBuilder`               |
|  2.9% | 36.4ms |          63 | `getMetadataSerializer()`                                                | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`             |
|  0.7% |  8.9ms |          17 | `<init>(SourceMapper, SMAP, MethodVisitor)`                              | `org.jetbrains.kotlin.codegen.inline.SourceMapCopyingMethodVisitor` |

##### `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|     % |    Time | Contentions | Callee                                                                        | Location                                                   |
| ----: | ------: | ----------: | ----------------------------------------------------------------------------- | ---------------------------------------------------------- |
| 24.9% | 278.0ms |         414 | `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

|     % |    Time | Contentions | Callee                                               | Location                                                         |
| ----: | ------: | ----------: | ---------------------------------------------------- | ---------------------------------------------------------------- |
| 67.5% | 187.6ms |         188 | `generate()`                                         | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`     |
|  3.1% |   8.5ms |          35 | `createFrameMapWithReceivers(IrFunction)`            | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`       |
|  2.9% |   8.1ms |          29 | `mapSignatureWithGeneric(IrFunction)`                | `org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper` |
|  2.5% |   7.0ms |          16 | `<init>(int, int, String, String, String, String[])` | `org.jetbrains.org.objectweb.asm.tree.MethodNode`                |
|  2.4% |   6.7ms |          19 | `calculateMethodFlags(IrFunction)`                   | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`       |

##### `generate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

|      % |    Time | Contentions | Callee                                    | Location                                                   |
| -----: | ------: | ----------: | ----------------------------------------- | ---------------------------------------------------------- |
| 100.0% | 278.0ms |         414 | `doGenerate(ReifiedTypeParametersUsages)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

|      % |    Time | Contentions | Callee                                  | Location                                                   |
| -----: | ------: | ----------: | --------------------------------------- | ---------------------------------------------------------- |
| 100.0% | 278.0ms |         414 | `generate(ReifiedTypeParametersUsages)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|     % |    Time | Contentions | Callee                                             | Location                                                     |
| ----: | ------: | ----------: | -------------------------------------------------- | ------------------------------------------------------------ |
| 96.8% | 181.6ms |         171 | `accept(IrVisitor, Object)`                        | `org.jetbrains.kotlin.ir.expressions.IrBlockBody`            |
|  1.4% |   2.6ms |           6 | `generateNonNullAssertions()`                      | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |
|  0.6% |   1.1ms |           1 | `writeParameterInLocalVariableTable(Label, Label)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |
|  0.5% |   1.0ms |           1 | `writeLocalVariablesInTable(BlockInfo, Label)`     | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |
|  0.2% |   0.4ms |           3 | `markNewLabel()`                                   | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|     % |    Time | Contentions | Callee                            | Location                                                   |
| ----: | ------: | ----------: | --------------------------------- | ---------------------------------------------------------- |
| 95.0% | 172.5ms |         164 | `accept(IrVisitor, Object)`       | `org.jetbrains.kotlin.ir.expressions.IrReturn`             |
|  2.4% |   4.3ms |           2 | `getUnitValue(ExpressionCodegen)` | `org.jetbrains.kotlin.backend.jvm.codegen.PromisedValueKt` |
|  1.9% |   3.4ms |           5 | `accept(IrVisitor, Object)`       | `org.jetbrains.kotlin.ir.expressions.IrWhen`               |
|  0.9% |   1.6ms |           1 | `accept(IrVisitor, Object)`       | `org.jetbrains.kotlin.ir.declarations.IrVariable`          |
|  0.4% |   0.7ms |           6 | `accept(IrVisitor, Object)`       | `org.jetbrains.kotlin.ir.expressions.IrTypeOperatorCall`   |

##### `visitBlockBody(IrBlockBody, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|      % |    Time | Contentions | Callee                                                     | Location                                                     |
| -----: | ------: | ----------: | ---------------------------------------------------------- | ------------------------------------------------------------ |
| 100.0% | 181.6ms |         171 | `visitStatementContainer(IrStatementContainer, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitBlockBody(IrBlockBody, Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|      % |    Time | Contentions | Callee                                   | Location                                                     |
| -----: | ------: | ----------: | ---------------------------------------- | ------------------------------------------------------------ |
| 100.0% | 181.6ms |         171 | `visitBlockBody(IrBlockBody, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`)

|      % |    Time | Contentions | Callee                                | Location                                                     |
| -----: | ------: | ----------: | ------------------------------------- | ------------------------------------------------------------ |
| 100.0% | 181.6ms |         171 | `visitBlockBody(IrBlockBody, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|     % |    Time | Contentions | Callee                      | Location                                                 |
| ----: | ------: | ----------: | --------------------------- | -------------------------------------------------------- |
| 80.7% | 139.3ms |          82 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrWhen`             |
| 16.5% |  28.5ms |          69 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrCall`             |
|  1.1% |   1.8ms |           3 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrBlock`            |
|  0.9% |   1.5ms |           7 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrTry`              |
|  0.8% |   1.4ms |           3 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrTypeOperatorCall` |

##### `visitReturn(IrReturn, Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|      % |    Time | Contentions | Callee                             | Location                                                     |
| -----: | ------: | ----------: | ---------------------------------- | ------------------------------------------------------------ |
| 100.0% | 172.5ms |         164 | `visitReturn(IrReturn, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`)

|      % |    Time | Contentions | Callee                          | Location                                                     |
| -----: | ------: | ----------: | ------------------------------- | ------------------------------------------------------------ |
| 100.0% | 172.5ms |         164 | `visitReturn(IrReturn, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitCall(IrCall, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|     % |    Time | Contentions | Callee                                                                                                           | Location                                                         |
| ----: | ------: | ----------: | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| 82.4% | 138.3ms |          86 | `genCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)`                              | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCallGenerator` |
|  8.3% |  14.0ms |          27 | `getOrCreateCallGenerator(IrFunctionAccessExpression, BlockInfo, JvmMethodSignature)`                            | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`     |
|  6.5% |  10.9ms |          29 | `visitCall$handleParameter(IrCallGenerator, ExpressionCodegen, BlockInfo, IrValueParameter, IrExpression, Type)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`     |
|  2.3% |   3.9ms |           7 | `mapToCallableMethod(IrCall, IrFunction)`                                                                        | `org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper` |
|  0.3% |   0.4ms |           1 | `getSuspensionPointKind(IrFunctionAccessExpression)`                                                             | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`     |

##### `visitCall(IrCall, Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|      % |    Time | Contentions | Callee                         | Location                                                     |
| -----: | ------: | ----------: | ------------------------------ | ------------------------------------------------------------ |
| 100.0% | 167.8ms |         153 | `visitCall(IrCall, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`)

|      % |    Time | Contentions | Callee                      | Location                                                     |
| -----: | ------: | ----------: | --------------------------- | ------------------------------------------------------------ |
| 100.0% | 167.8ms |         153 | `visitCall(IrCall, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

## Hottest call stacks

Call stacks with the most time blocked in their leaf frame.

Common call stack: `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000800188f020`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`) ← `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`) ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`

|     % |    Time | Contentions | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ----: | ------: | ----------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 61.9% | 836.9ms |          93 | `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  7.4% | 100.1ms |           2 | `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `compileInlineFunction(JvmMethodSignature)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrSourceCompilerForInline`) ← `genInlineCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`) ← `genCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCallGenerator`) ← `visitCall(IrCall, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitCall(IrCall, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`) ← `visitWhen(IrWhen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitWhen(IrWhen, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrWhen`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) |
|  3.4% |  46.4ms |          57 | `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  1.9% |  26.2ms |          43 | `<init>(MethodVisitor, boolean, GenerationState, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`) ← `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.optimization.OptimizationClassBuilder`) ← `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.DelegatingClassBuilder`) ← `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  1.3% |  17.9ms |          31 | `makeFirMetadataSerializerForIrClass(FirSession, JvmBackendContext, IrClass, JvmSerializationBindings, Fir2IrComponents, MetadataSerializer, Set)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`) ← `createSerializer(JvmBackendContext, IrClass, Type, JvmSerializationBindings, MetadataSerializer)` (`org.jetbrains.kotlin.fir.backend.jvm.FirJvmBackendExtension`) ← `metadataSerializer_delegate$lambda$0(ClassCodegen)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `invoke()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$$Lambda.0x00000080018962e0`) ← `getValue()` (`kotlin.SynchronizedLazyImpl`) ← `getMetadataSerializer()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  1.1% |  15.1ms |          30 | `newClassBuilder(JvmDeclarationOrigin)` (`org.jetbrains.kotlin.codegen.ClassBuilderFactories$1`) ← `newClassBuilder(JvmDeclarationOrigin)` (`org.jetbrains.kotlin.codegen.optimization.OptimizationClassBuilderFactory`) ← `newClassBuilder(JvmDeclarationOrigin)` ← `newClassBuilder(JvmDeclarationOrigin)` (`org.jetbrains.kotlin.codegen.ClassNameCollectionClassBuilderFactory`) ← `newClassBuilder(JvmDeclarationOrigin)` ← `newVisitor(JvmDeclarationOrigin, Type, List)` (`org.jetbrains.kotlin.codegen.ClassFileFactory`) ← `<init>(IrClass, JvmBackendContext, IrFunction, List)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `<init>(IrClass, JvmBackendContext, IrFunction, List, DefaultConstructorMarker)` ← `getOrCreate(IrClass, JvmBackendContext, List, IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$Companion`) ← `getOrCreate$default(ClassCodegen$Companion, IrClass, JvmBackendContext, List, IrFunction, int, Object)` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  0.8% |  11.5ms |          63 | `<init>(IrClass, JvmBackendContext, IrFunction, List)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `<init>(IrClass, JvmBackendContext, IrFunction, List, DefaultConstructorMarker)` ← `getOrCreate(IrClass, JvmBackendContext, List, IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$Companion`) ← `getOrCreate$default(ClassCodegen$Companion, IrClass, JvmBackendContext, List, IrFunction, int, Object)` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  0.6% |   8.6ms |          22 | `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  0.5% |   7.0ms |          16 | `<init>(int, int, String, String, String, String[])` (`org.jetbrains.org.objectweb.asm.tree.MethodNode`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  0.5% |   6.4ms |          25 | `<init>()` (`org.jetbrains.kotlin.codegen.FrameMapBase`) ← `<init>()` (`org.jetbrains.kotlin.backend.jvm.codegen.IrFrameMap`) ← `createFrameMapWithReceivers(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  0.5% |   6.2ms |          18 | `<init>(ClassReader, int)` (`org.jetbrains.org.objectweb.asm.ClassWriter`) ← `<init>(int)` ← `<init>()` (`org.jetbrains.kotlin.codegen.ClassBuilderFactories$BinaryClassWriter`) ← `newClassBuilder(JvmDeclarationOrigin)` (`org.jetbrains.kotlin.codegen.ClassBuilderFactories$1`) ← `newClassBuilder(JvmDeclarationOrigin)` (`org.jetbrains.kotlin.codegen.optimization.OptimizationClassBuilderFactory`) ← `newClassBuilder(JvmDeclarationOrigin)` ← `newClassBuilder(JvmDeclarationOrigin)` (`org.jetbrains.kotlin.codegen.ClassNameCollectionClassBuilderFactory`) ← `newClassBuilder(JvmDeclarationOrigin)` ← `newVisitor(JvmDeclarationOrigin, Type, List)` (`org.jetbrains.kotlin.codegen.ClassFileFactory`) ← `<init>(IrClass, JvmBackendContext, IrFunction, List)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `<init>(IrClass, JvmBackendContext, IrFunction, List, DefaultConstructorMarker)` ← `getOrCreate(IrClass, JvmBackendContext, List, IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$Companion`) ← `getOrCreate$default(ClassCodegen$Companion, IrClass, JvmBackendContext, List, IrFunction, int, Object)` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  0.5% |   6.1ms |           2 | `<init>(SourceMapper, SMAP, MethodVisitor)` (`org.jetbrains.kotlin.codegen.inline.SourceMapCopyingMethodVisitor`) ← `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  0.4% |   5.6ms |           7 | `<init>()` (`org.jetbrains.kotlin.codegen.optimization.FixStackWithLabelNormalizationMethodTransformer`) ← `<init>(MethodVisitor, boolean, GenerationState, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`) ← `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.optimization.OptimizationClassBuilder`) ← `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.DelegatingClassBuilder`) ← `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  0.4% |   5.5ms |          10 | `getOrCreateCallGenerator(IrFunctionAccessExpression, BlockInfo, JvmMethodSignature)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitCall(IrCall, BlockInfo)` ← `visitCall(IrCall, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`) ← `visitWhen(IrWhen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitWhen(IrWhen, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrWhen`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  0.4% |   5.0ms |           4 | `<init>(FirSession, JvmSerializationBindings, List, ScopeSession, JvmSerializationBindings, boolean, String, ClassBuilderMode, boolean, boolean, BinaryVersion, JvmDefaultMode, FirElementAwareStringTable, FirAdditionalMetadataProvider)` (`org.jetbrains.kotlin.fir.backend.jvm.FirJvmSerializerExtension`) ← `<init>(FirSession, JvmSerializationBindings, GenerationState, List, AbstractTypeApproximator, Fir2IrComponents, FirElementAwareStringTable)` ← `makeFirMetadataSerializerForIrClass(FirSession, JvmBackendContext, IrClass, JvmSerializationBindings, Fir2IrComponents, MetadataSerializer, Set)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`) ← `createSerializer(JvmBackendContext, IrClass, Type, JvmSerializationBindings, MetadataSerializer)` (`org.jetbrains.kotlin.fir.backend.jvm.FirJvmBackendExtension`) ← `metadataSerializer_delegate$lambda$0(ClassCodegen)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `invoke()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$$Lambda.0x00000080018962e0`) ← `getValue()` (`kotlin.SynchronizedLazyImpl`) ← `getMetadataSerializer()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  0.4% |   5.0ms |           4 | `visitMethod(int, String, String, String, String[])` (`org.jetbrains.org.objectweb.asm.ClassWriter`) ← `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.AbstractClassBuilder`) ← `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.DelegatingClassBuilder`) ← `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.optimization.OptimizationClassBuilder`) ← `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.DelegatingClassBuilder`) ← `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  0.3% |   4.7ms |          43 | `mapClassSignature(IrTypeMapper, IrClass, Type, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt`) ← `<init>(IrClass, JvmBackendContext, IrFunction, List)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `<init>(IrClass, JvmBackendContext, IrFunction, List, DefaultConstructorMarker)` ← `getOrCreate(IrClass, JvmBackendContext, List, IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$Companion`) ← `getOrCreate$default(ClassCodegen$Companion, IrClass, JvmBackendContext, List, IrFunction, int, Object)` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  0.3% |   4.3ms |           2 | `getUnitValue(ExpressionCodegen)` (`org.jetbrains.kotlin.backend.jvm.codegen.PromisedValueKt`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  0.3% |   4.3ms |           6 | `makeElementSerializer(MetadataSource, FirSession, ScopeSession, FirJvmSerializerExtension, AbstractTypeApproximator, MetadataSerializer, LanguageVersionSettings)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`) ← `makeFirMetadataSerializerForIrClass(FirSession, JvmBackendContext, IrClass, JvmSerializationBindings, Fir2IrComponents, MetadataSerializer, Set)` ← `createSerializer(JvmBackendContext, IrClass, Type, JvmSerializationBindings, MetadataSerializer)` (`org.jetbrains.kotlin.fir.backend.jvm.FirJvmBackendExtension`) ← `metadataSerializer_delegate$lambda$0(ClassCodegen)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `invoke()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$$Lambda.0x00000080018962e0`) ← `getValue()` (`kotlin.SynchronizedLazyImpl`) ← `getMetadataSerializer()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  0.3% |   4.2ms |           4 | `rewriteLabelInstructions()` (`org.jetbrains.kotlin.codegen.optimization.LabelNormalizationMethodTransformer$TransformerForMethod`) ← `transform()` ← `transform(String, MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.LabelNormalizationMethodTransformer`) ← `transform(String, MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.transformer.CompositeMethodTransformer`) ← `transform(String, MethodNode)` ← `performTransformations(MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`) ← `visitEnd()` (`org.jetbrains.kotlin.codegen.TransformationMethodVisitor`) ← `visitEnd()` (`org.jetbrains.org.objectweb.asm.MethodVisitor`) ← `accept(MethodVisitor)` (`org.jetbrains.org.objectweb.asm.tree.MethodNode`) ← `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |

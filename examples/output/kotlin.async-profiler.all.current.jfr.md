# Sampling profile

Collected 1,353 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Compiler         | 44.2% |     598 |
| Native           | 38.7% |     524 |
| Ours             | 11.5% |     155 |
| Standard library |  4.5% |      61 |
| JIT              |  1.1% |      15 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
├── … 873 samples (64.5%) Thread::call_run at libjvm.dylib
│   ├── 802 samples (59.3%) JavaThread::thread_main_inner
│   │   └── 802 samples (59.3%) CompileBroker::compiler_thread_loop
│   │       ├── 787 samples (58.2%) CompileBroker::invoke_compiler_on_method
│   │       │   ├── 540 samples (39.9%) C2Compiler::compile_method
│   │       │   │   └── 539 samples (39.8%) Compile::Compile
│   │       │   │       ├── 249 samples (18.4%) Compile::Code_Gen
│   │       │   │       │   ├── 140 samples (10.3%) PhaseChaitin::Register_Allocate
│   │       │   │       │   │   ├── 24 samples (1.8%, self 1.4%) PhaseChaitin::build_ifg_physical
│   │       │   │       │   │   ├── … 4 samples (0.3%, self 1.3% globally) IndexSetIterator::advance_and_next at libjvm.dylib
│   │       │   │       │   │   └── 108 samples (8.0%) 23 more callees, led by (1.6%) PhaseLive::compute
│   │       │   │       │   └── 109 samples (8.1%) 5 more callees, led by (2.9%) Matcher::match
│   │       │   │       └── 290 samples (21.4%) 8 more callees, led by (16.0%) Compile::Optimize
│   │       │   ├── … 234 samples (17.3%) Compilation::compile_method at libjvm.dylib
│   │       │   │   ├── 220 samples (16.3%) Compilation::compile_java_method
│   │       │   │   │   ├── 79 samples (5.8%) Compilation::build_hir
│   │       │   │   │   │   ├── … 48 samples (3.5%) GraphBuilder::iterate_bytecodes_for_block at libjvm.dylib
│   │       │   │   │   │   │   ├── 2 samples (0.1%, self 1.4% globally) tlv_get_addr at libdyld.dylib
│   │       │   │   │   │   │   └── 46 samples (3.4%) 7 more callees, led by (2.4%) GraphBuilder::invoke
│   │       │   │   │   │   └── 26 samples (1.9%) 6 more callees, led by (0.8%) GlobalValueNumbering::GlobalValueNumbering
│   │       │   │   │   └── 141 samples (10.4%) 3 more callees, led by (7.1%) Compilation::emit_lir
│   │       │   │   └── 14 samples (1.0%) 2 more callees, led by (1.0%) ciEnv::register_method
│   │       │   └── 6 samples (0.4%) ciEnv::get_method_from_handle
│   │       └── … 10 samples (0.7%) __psynch_cvwait at libsystem_kernel.dylib
│   ├── 61 samples (4.5%) WorkerThread::run
│   │   ├── … 3 samples (0.2%, self 1.7% globally) __psynch_mutexwait at libsystem_kernel.dylib
│   │   └── 55 samples (4.1%) 5 more callees, led by (1.5%) G1RebuildRSAndScrubTask::work
│   └── 10 samples (0.7%) 2 more callees, led by (0.7%) VMThread::run
├── 404 samples (29.9%) main(String[]) at org.jetbrains.kotlin.preloading.Preloader
│   └── 404 samples (29.9%) run(String[])
│       ├── … 321 samples (23.7%) exec(PrintStream, Services, MessageRenderer, String[]) at org.jetbrains.kotlin.cli.common.CLICompiler
│       │   └── 316 samples (23.4%) exec(MessageCollector, Services, CommonCompilerArguments)
│       │       ├── … 301 samples (22.2%) invoke(PhaseConfig, PhaserState, LoggingContext, Object) at org.jetbrains.kotlin.config.phaser.NamedCompilerPhase
│       │       │   └── 301 samples (22.2%) 4 more callees, led by (20.5%) phaseBody(LoggingContext, Object) at org.jetbrains.kotlin.cli.pipeline.PipelinePhase
│       │       └── 10 samples (0.7%) <clinit>() at org.jetbrains.kotlin.cli.common.ArgumentsKt …
│       └── … 72 samples (5.3%) read(byte[], int, int) at java.util.zip.ZipInputStream
│           └── … 68 samples (5.0%) Java_java_util_zip_Inflater_inflateBytesBytes at libzip.dylib
│               ├── 50 samples (3.7%) inflate_fast
│               └── 16 samples (1.2%, self 0.8%) inflate
└── 75 samples (5.5%) 4 more root frames, led by (5.2%) run() at java.lang.Thread
```

## Hottest functions

### Self samples

Functions with the most samples collected within the function body, excluding callees.

|    % | Samples | Function                                                                                                                                                 | Location                   |
| ---: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| 3.8% |      51 | `inflate_fast`                                                                                                                                           | `libzip.dylib`             |
| 1.7% |      23 | `__psynch_mutexwait`                                                                                                                                     | `libsystem_kernel.dylib`   |
| 1.4% |      19 | `PhaseChaitin::build_ifg_physical`                                                                                                                       | `libjvm.dylib`             |
| 1.4% |      19 | `tlv_get_addr`                                                                                                                                           | `libdyld.dylib`            |
| 1.3% |      17 | `IndexSetIterator::advance_and_next`                                                                                                                     | `libjvm.dylib`             |
| 1.2% |      16 | `__psynch_cvwait`                                                                                                                                        | `libsystem_kernel.dylib`   |
| 1.1% |      15 | `InstanceKlass::find_method_index`                                                                                                                       | `libjvm.dylib`             |
| 1.1% |      15 | `PhaseChaitin::Split`                                                                                                                                    | `libjvm.dylib`             |
| 1.0% |      13 | `SymbolTable::do_lookup`                                                                                                                                 | `libjvm.dylib`             |
| 1.0% |      13 | `inflate`                                                                                                                                                | `libzip.dylib`             |
| 1.0% |      13 | `PhaseChaitin::elide_copy`                                                                                                                               | `libjvm.dylib`             |
| 1.0% |      13 | `Compile::identify_useful_nodes`                                                                                                                         | `libjvm.dylib`             |
| 1.0% |      13 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `libjvm.dylib`             |
| 0.8% |      11 | `_platform_memset`                                                                                                                                       | `libsystem_platform.dylib` |
| 0.7% |       9 | `PhaseIdealLoop::build_loop_early`                                                                                                                       | `libjvm.dylib`             |
| 0.6% |       8 | `pthread_jit_write_protect_np`                                                                                                                           | `libsystem_pthread.dylib`  |
| 0.6% |       8 | `PhaseLive::compute`                                                                                                                                     | `libjvm.dylib`             |
| 0.6% |       8 | `Unique_Node_List::remove`                                                                                                                               | `libjvm.dylib`             |
| 0.6% |       8 | `LinearScanWalker::free_collect_inactive_fixed`                                                                                                          | `libjvm.dylib`             |
| 0.5% |       7 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>`                                                   | `libjvm.dylib`             |

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Compiler

|    % | Samples | Function                                        | Location       |
| ---: | ------: | ----------------------------------------------- | -------------- |
| 1.4% |      19 | `PhaseChaitin::build_ifg_physical`              | `libjvm.dylib` |
| 1.3% |      17 | `IndexSetIterator::advance_and_next`            | `libjvm.dylib` |
| 1.1% |      15 | `PhaseChaitin::Split`                           | `libjvm.dylib` |
| 1.0% |      13 | `PhaseChaitin::elide_copy`                      | `libjvm.dylib` |
| 1.0% |      13 | `Compile::identify_useful_nodes`                | `libjvm.dylib` |
| 0.7% |       9 | `PhaseIdealLoop::build_loop_early`              | `libjvm.dylib` |
| 0.6% |       8 | `PhaseLive::compute`                            | `libjvm.dylib` |
| 0.6% |       8 | `Unique_Node_List::remove`                      | `libjvm.dylib` |
| 0.6% |       8 | `LinearScanWalker::free_collect_inactive_fixed` | `libjvm.dylib` |
| 0.5% |       7 | `PhaseChaitin::post_allocate_copy_removal`      | `libjvm.dylib` |
| 0.5% |       7 | `Matcher::xform`                                | `libjvm.dylib` |
| 0.5% |       7 | `PhaseIdealLoop::Dominators`                    | `libjvm.dylib` |
| 0.5% |       7 | `PhaseIterGVN::add_users_to_worklist`           | `libjvm.dylib` |
| 0.5% |       7 | `ciObjectFactory::get_metadata`                 | `libjvm.dylib` |
| 0.5% |       7 | `PhaseLive::add_liveout`                        | `libjvm.dylib` |
| 0.5% |       7 | `LinearScanWalker::alloc_free_reg`              | `libjvm.dylib` |
| 0.5% |       7 | `LIR_OpVisitState::visit`                       | `libjvm.dylib` |
| 0.4% |       6 | `RelocIterator::set_limits`                     | `libjvm.dylib` |
| 0.4% |       6 | `PhaseIdealLoop::build_loop_late`               | `libjvm.dylib` |
| 0.4% |       6 | `MultiNode::is_CFG`                             | `libjvm.dylib` |

##### Native

|    % | Samples | Function                                                                                                                                                 | Location                   |
| ---: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| 3.8% |      51 | `inflate_fast`                                                                                                                                           | `libzip.dylib`             |
| 1.7% |      23 | `__psynch_mutexwait`                                                                                                                                     | `libsystem_kernel.dylib`   |
| 1.4% |      19 | `tlv_get_addr`                                                                                                                                           | `libdyld.dylib`            |
| 1.2% |      16 | `__psynch_cvwait`                                                                                                                                        | `libsystem_kernel.dylib`   |
| 1.1% |      15 | `InstanceKlass::find_method_index`                                                                                                                       | `libjvm.dylib`             |
| 1.0% |      13 | `SymbolTable::do_lookup`                                                                                                                                 | `libjvm.dylib`             |
| 1.0% |      13 | `inflate`                                                                                                                                                | `libzip.dylib`             |
| 1.0% |      13 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `libjvm.dylib`             |
| 0.8% |      11 | `_platform_memset`                                                                                                                                       | `libsystem_platform.dylib` |
| 0.6% |       8 | `pthread_jit_write_protect_np`                                                                                                                           | `libsystem_pthread.dylib`  |
| 0.5% |       7 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>`                                                   | `libjvm.dylib`             |
| 0.5% |       7 | `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>`                                                           | `libjvm.dylib`             |
| 0.5% |       7 | `UTF8::is_legal_utf8`                                                                                                                                    | `libjvm.dylib`             |
| 0.5% |       7 | `Dictionary::find`                                                                                                                                       | `libjvm.dylib`             |
| 0.4% |       6 | `swtch_pri`                                                                                                                                              | `libsystem_kernel.dylib`   |
| 0.4% |       6 | `vmSymbols::find_sid`                                                                                                                                    | `libjvm.dylib`             |
| 0.4% |       5 | `sys_icache_invalidate`                                                                                                                                  | `libsystem_platform.dylib` |
| 0.4% |       5 | `inflate_table`                                                                                                                                          | `libzip.dylib`             |
| 0.4% |       5 | `Rewriter::scan_method`                                                                                                                                  | `libjvm.dylib`             |
| 0.4% |       5 | `SymbolTable::lookup_shared`                                                                                                                             | `libjvm.dylib`             |

##### Ours

|    % | Samples | Function                                                                                        | Location                                                                              |
| ---: | ------: | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| 0.1% |       2 | `visitVarInsn(int, int)`                                                                        | `org.jetbrains.org.objectweb.asm.commons.InstructionAdapter`                          |
| 0.1% |       2 | `customComputeIfAbsent(ConcurrentHashMap, String, Function1)`                                   | `org.jetbrains.kotlin.fir.util.ConeTypeRegistry`                                      |
| 0.1% |       2 | `invokeSuspend(Object)`                                                                         | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask$processLevel$6` |
| 0.1% |       2 | `runResolverForNoReceiver(CallInfo, boolean, Continuation)`                                     | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolveTask`                    |
| 0.1% |       2 | `tryToSetSourceForImplicitReceiver$tryToSetSourceForImplicitReceiver(FirExpression, Candidate)` | `org.jetbrains.kotlin.fir.resolve.calls.candidate.Candidate`                          |
| 0.1% |       1 | `getDifferentNameForJvmBuiltinFunction(IrSimpleFunction)`                                       | `org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper`                      |
| 0.1% |       1 | `merge(SourceValue, SourceValue)`                                                               | `org.jetbrains.org.objectweb.asm.tree.analysis.SourceInterpreter`                     |
| 0.1% |       1 | `writeGenericArguments(JvmSignatureWriter, PossiblyInnerIrType, TypeMappingMode)`               | `org.jetbrains.kotlin.backend.jvm.mapping.IrTypeMapper`                               |
| 0.1% |       1 | `removeClosureAssertions(MethodNode)`                                                           | `org.jetbrains.kotlin.codegen.inline.MethodInliner$Companion`                         |
| 0.1% |       1 | `mapUnderlyingType(Function1)`                                                                  | `org.jetbrains.kotlin.descriptors.ValueClassRepresentation`                           |
| 0.1% |       1 | `isBigArityFunction(IrClass, List)`                                                             | `org.jetbrains.kotlin.backend.jvm.mapping.IrTypeMapper`                               |
| 0.1% |       1 | `getPrimitiveOrUnsignedType(IrType, Map, Map)`                                                  | `org.jetbrains.kotlin.ir.types.IrTypePredicatesKt`                                    |
| 0.1% |       1 | `removeAll(boolean)`                                                                            | `org.jetbrains.org.objectweb.asm.tree.InsnList`                                       |
| 0.1% |       1 | `resetLabels()`                                                                                 | `org.jetbrains.org.objectweb.asm.tree.InsnList`                                       |
| 0.1% |       1 | `buildPartial()`                                                                                | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$Builder`                                 |
| 0.1% |       1 | `typeOrTypealiasProto(ConeKotlinType, boolean, FirTypeRef, boolean, boolean, boolean)`          | `org.jetbrains.kotlin.fir.serialization.FirElementSerializer`                         |
| 0.1% |       1 | `functionProto(FirFunction)`                                                                    | `org.jetbrains.kotlin.fir.serialization.FirElementSerializer`                         |
| 0.1% |       1 | `parseMethodOrNull(MethodNode)`                                                                 | `org.jetbrains.kotlin.codegen.inline.InplaceArgumentsMethodTransformer`               |
| 0.1% |       1 | `visitLdcInsn(Object)`                                                                          | `org.jetbrains.org.objectweb.asm.commons.InstructionAdapter`                          |
| 0.1% |       1 | `get(ReadOnlySlice, Object)`                                                                    | `org.jetbrains.kotlin.util.slicedMap.SlicedMapImpl`                                   |

##### Standard library

|    % | Samples | Function                                                                                | Location                                               |
| ---: | ------: | --------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| 0.3% |       4 | `checkNotNullParameter(Object, String)`                                                 | `kotlin.jvm.internal.Intrinsics`                       |
| 0.2% |       3 | `resize()`                                                                              | `java.util.HashMap`                                    |
| 0.1% |       2 | `areEqual(Object, Object)`                                                              | `kotlin.jvm.internal.Intrinsics`                       |
| 0.1% |       2 | `equals(Object)`                                                                        | `java.lang.String`                                     |
| 0.1% |       2 | `equals(Object)`                                                                        | `java.lang.Object`                                     |
| 0.1% |       1 | `accept(Object)`                                                                        | `java.util.stream.ReferencePipeline$2$1`               |
| 0.1% |       1 | `values()`                                                                              | `java.util.HashMap`                                    |
| 0.1% |       1 | `visitMethodInsn(int, String, String, String, boolean)`                                 | `jdk.internal.org.objectweb.asm.MethodWriter`          |
| 0.1% |       1 | `inflate(byte[], int, int)`                                                             | `java.util.zip.Inflater`                               |
| 0.1% |       1 | `readFully(byte[], int, int)`                                                           | `java.util.zip.ZipInputStream`                         |
| 0.1% |       1 | `closeEntry()`                                                                          | `java.util.zip.ZipInputStream`                         |
| 0.1% |       1 | `putVal(int, Object, Object, boolean, boolean)`                                         | `java.util.HashMap`                                    |
| 0.1% |       1 | `nextNode()`                                                                            | `java.util.HashMap$HashIterator`                       |
| 0.1% |       1 | `putAbstractTypes(int, int)`                                                            | `jdk.internal.org.objectweb.asm.MethodWriter`          |
| 0.1% |       1 | `visitMaxs(int, int)`                                                                   | `jdk.internal.org.objectweb.asm.MethodWriter`          |
| 0.1% |       1 | `indexOf(byte[], int, byte[], int, int)`                                                | `java.lang.StringLatin1`                               |
| 0.1% |       1 | `plus(Set, Iterable)`                                                                   | `kotlin.collections.SetsKt___SetsKt`                   |
| 0.1% |       1 | `lastIndexOf(byte[], int, int)`                                                         | `java.lang.StringLatin1`                               |
| 0.1% |       1 | `makeHiddenClassDefiner(MethodHandles$Lookup$ClassFile, Set, boolean, ClassFileDumper)` | `java.lang.invoke.MethodHandles$Lookup`                |
| 0.1% |       1 | `checkDescriptor(MethodType)`                                                           | `java.lang.invoke.AbstractValidatingLambdaMetafactory` |

##### JIT

|    % | Samples | Function                      | Location    |
| ---: | ------: | ----------------------------- | ----------- |
| 0.4% |       6 | `I2C/C2I adapters(0xb)`       | `<unknown>` |
| 0.3% |       4 | `I2C/C2I adapters(0xbb)`      | `<unknown>` |
| 0.1% |       1 | `itable stub`                 | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xbbaaaab)` | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xbbb)`     | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xaa)`      | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xbbaab)`   | `<unknown>` |

#### Lines

Lines with the largest contribution to each function's self samples.

##### `checkNotNullParameter(Object, String)` (`kotlin.jvm.internal.Intrinsics`)

|      % | Samples | Location                             |
| -----: | ------: | ------------------------------------ |
| 100.0% |       4 | `kotlin.jvm.internal.Intrinsics:130` |

##### `resize()` (`java.util.HashMap`)

|     % | Samples | Location                |
| ----: | ------: | ----------------------- |
| 33.3% |       1 | `java.util.HashMap:726` |
| 33.3% |       1 | `java.util.HashMap:711` |
| 33.3% |       1 | `java.util.HashMap:689` |

##### `visitVarInsn(int, int)` (`org.jetbrains.org.objectweb.asm.commons.InstructionAdapter`)

|      % | Samples | Location                                                         |
| -----: | ------: | ---------------------------------------------------------------- |
| 100.0% |       2 | `org.jetbrains.org.objectweb.asm.commons.InstructionAdapter:428` |

##### `customComputeIfAbsent(ConcurrentHashMap, String, Function1)` (`org.jetbrains.kotlin.fir.util.ConeTypeRegistry`)

|      % | Samples | Location                                            |
| -----: | ------: | --------------------------------------------------- |
| 100.0% |       2 | `org.jetbrains.kotlin.fir.util.ConeTypeRegistry:16` |

##### `runResolverForNoReceiver(CallInfo, boolean, Continuation)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolveTask`)

|     % | Samples | Location                                                               |
| ----: | ------: | ---------------------------------------------------------------------- |
| 50.0% |       1 | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolveTask:714` |
| 50.0% |       1 | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolveTask:730` |

##### `tryToSetSourceForImplicitReceiver$tryToSetSourceForImplicitReceiver(FirExpression, Candidate)` (`org.jetbrains.kotlin.fir.resolve.calls.candidate.Candidate`)

|     % | Samples | Location                                                         |
| ----: | ------: | ---------------------------------------------------------------- |
| 50.0% |       1 | `org.jetbrains.kotlin.fir.resolve.calls.candidate.Candidate:351` |
| 50.0% |       1 | `org.jetbrains.kotlin.fir.resolve.calls.candidate.Candidate:358` |

##### `areEqual(Object, Object)` (`kotlin.jvm.internal.Intrinsics`)

|      % | Samples | Location                             |
| -----: | ------: | ------------------------------------ |
| 100.0% |       2 | `kotlin.jvm.internal.Intrinsics:169` |

##### `equals(Object)` (`java.lang.String`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |       2 | `java.lang.String:1852` |

##### `equals(Object)` (`java.lang.Object`)

|      % | Samples | Location               |
| -----: | ------: | ---------------------- |
| 100.0% |       2 | `java.lang.Object:164` |

##### `getDifferentNameForJvmBuiltinFunction(IrSimpleFunction)` (`org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper`)

|      % | Samples | Location                                                             |
| -----: | ------: | -------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper:457` |

##### `merge(SourceValue, SourceValue)` (`org.jetbrains.org.objectweb.asm.tree.analysis.SourceInterpreter`)

|      % | Samples | Location                                                              |
| -----: | ------: | --------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.org.objectweb.asm.tree.analysis.SourceInterpreter:195` |

##### `writeGenericArguments(JvmSignatureWriter, PossiblyInnerIrType, TypeMappingMode)` (`org.jetbrains.kotlin.backend.jvm.mapping.IrTypeMapper`)

|      % | Samples | Location                                                    |
| -----: | ------: | ----------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.backend.jvm.mapping.IrTypeMapper:216` |

##### `removeClosureAssertions(MethodNode)` (`org.jetbrains.kotlin.codegen.inline.MethodInliner$Companion`)

|      % | Samples | Location                                                           |
| -----: | ------: | ------------------------------------------------------------------ |
| 100.0% |       1 | `org.jetbrains.kotlin.codegen.inline.MethodInliner$Companion:1115` |

##### `mapUnderlyingType(Function1)` (`org.jetbrains.kotlin.descriptors.ValueClassRepresentation`)

|      % | Samples | Location                                                       |
| -----: | ------: | -------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.descriptors.ValueClassRepresentation:21` |

##### `isBigArityFunction(IrClass, List)` (`org.jetbrains.kotlin.backend.jvm.mapping.IrTypeMapper`)

|      % | Samples | Location                                                    |
| -----: | ------: | ----------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.backend.jvm.mapping.IrTypeMapper:228` |

##### `getPrimitiveOrUnsignedType(IrType, Map, Map)` (`org.jetbrains.kotlin.ir.types.IrTypePredicatesKt`)

|      % | Samples | Location                                               |
| -----: | ------: | ------------------------------------------------------ |
| 100.0% |       1 | `org.jetbrains.kotlin.ir.types.IrTypePredicatesKt:152` |

##### `removeAll(boolean)` (`org.jetbrains.org.objectweb.asm.tree.InsnList`)

|      % | Samples | Location                                            |
| -----: | ------: | --------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.org.objectweb.asm.tree.InsnList:444` |

##### `resetLabels()` (`org.jetbrains.org.objectweb.asm.tree.InsnList`)

|      % | Samples | Location                                            |
| -----: | ------: | --------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.org.objectweb.asm.tree.InsnList:471` |

##### `buildPartial()` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type$Builder`)

|      % | Samples | Location                                                   |
| -----: | ------: | ---------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$Builder:6453` |

##### `typeOrTypealiasProto(ConeKotlinType, boolean, FirTypeRef, boolean, boolean, boolean)` (`org.jetbrains.kotlin.fir.serialization.FirElementSerializer`)

|      % | Samples | Location                                                           |
| -----: | ------: | ------------------------------------------------------------------ |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.serialization.FirElementSerializer:1086` |

##### `functionProto(FirFunction)` (`org.jetbrains.kotlin.fir.serialization.FirElementSerializer`)

|      % | Samples | Location                                                          |
| -----: | ------: | ----------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.serialization.FirElementSerializer:711` |

##### `parseMethodOrNull(MethodNode)` (`org.jetbrains.kotlin.codegen.inline.InplaceArgumentsMethodTransformer`)

|      % | Samples | Location                                                                   |
| -----: | ------: | -------------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.codegen.inline.InplaceArgumentsMethodTransformer:79` |

##### `visitLdcInsn(Object)` (`org.jetbrains.org.objectweb.asm.commons.InstructionAdapter`)

|      % | Samples | Location                                                         |
| -----: | ------: | ---------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.org.objectweb.asm.commons.InstructionAdapter:619` |

##### `get(ReadOnlySlice, Object)` (`org.jetbrains.kotlin.util.slicedMap.SlicedMapImpl`)

|      % | Samples | Location                                               |
| -----: | ------: | ------------------------------------------------------ |
| 100.0% |       1 | `org.jetbrains.kotlin.util.slicedMap.SlicedMapImpl:91` |

##### `accept(Object)` (`java.util.stream.ReferencePipeline$2$1`)

|      % | Samples | Location                                     |
| -----: | ------: | -------------------------------------------- |
| 100.0% |       1 | `java.util.stream.ReferencePipeline$2$1:178` |

##### `values()` (`java.util.HashMap`)

|      % | Samples | Location                 |
| -----: | ------: | ------------------------ |
| 100.0% |       1 | `java.util.HashMap:1040` |

##### `visitMethodInsn(int, String, String, String, boolean)` (`jdk.internal.org.objectweb.asm.MethodWriter`)

|      % | Samples | Location                                           |
| -----: | ------: | -------------------------------------------------- |
| 100.0% |       1 | `jdk.internal.org.objectweb.asm.MethodWriter:1066` |

##### `inflate(byte[], int, int)` (`java.util.zip.Inflater`)

|      % | Samples | Location                     |
| -----: | ------: | ---------------------------- |
| 100.0% |       1 | `java.util.zip.Inflater:366` |

##### `readFully(byte[], int, int)` (`java.util.zip.ZipInputStream`)

|      % | Samples | Location                           |
| -----: | ------: | ---------------------------------- |
| 100.0% |       1 | `java.util.zip.ZipInputStream:635` |

##### `closeEntry()` (`java.util.zip.ZipInputStream`)

|      % | Samples | Location                           |
| -----: | ------: | ---------------------------------- |
| 100.0% |       1 | `java.util.zip.ZipInputStream:171` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |       1 | `java.util.HashMap:636` |

##### `nextNode()` (`java.util.HashMap$HashIterator`)

|      % | Samples | Location                              |
| -----: | ------: | ------------------------------------- |
| 100.0% |       1 | `java.util.HashMap$HashIterator:1609` |

##### `putAbstractTypes(int, int)` (`jdk.internal.org.objectweb.asm.MethodWriter`)

|      % | Samples | Location                                           |
| -----: | ------: | -------------------------------------------------- |
| 100.0% |       1 | `jdk.internal.org.objectweb.asm.MethodWriter:1992` |

##### `visitMaxs(int, int)` (`jdk.internal.org.objectweb.asm.MethodWriter`)

|      % | Samples | Location                                           |
| -----: | ------: | -------------------------------------------------- |
| 100.0% |       1 | `jdk.internal.org.objectweb.asm.MethodWriter:1580` |

##### `indexOf(byte[], int, byte[], int, int)` (`java.lang.StringLatin1`)

|      % | Samples | Location                     |
| -----: | ------: | ---------------------------- |
| 100.0% |       1 | `java.lang.StringLatin1:235` |

##### `plus(Set, Iterable)` (`kotlin.collections.SetsKt___SetsKt`)

|      % | Samples | Location                                 |
| -----: | ------: | ---------------------------------------- |
| 100.0% |       1 | `kotlin.collections.SetsKt___SetsKt:112` |

##### `lastIndexOf(byte[], int, int)` (`java.lang.StringLatin1`)

|      % | Samples | Location                     |
| -----: | ------: | ---------------------------- |
| 100.0% |       1 | `java.lang.StringLatin1:288` |

##### `makeHiddenClassDefiner(MethodHandles$Lookup$ClassFile, Set, boolean, ClassFileDumper)` (`java.lang.invoke.MethodHandles$Lookup`)

|      % | Samples | Location                                     |
| -----: | ------: | -------------------------------------------- |
| 100.0% |       1 | `java.lang.invoke.MethodHandles$Lookup:2450` |

##### `checkDescriptor(MethodType)` (`java.lang.invoke.AbstractValidatingLambdaMetafactory`)

|      % | Samples | Location                                                   |
| -----: | ------: | ---------------------------------------------------------- |
| 100.0% |       1 | `java.lang.invoke.AbstractValidatingLambdaMetafactory:333` |

#### Callers

Callers with the largest contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `inflate_fast` (`libzip.dylib`)

|      % | Samples | Caller                                          | Location       |
| -----: | ------: | ----------------------------------------------- | -------------- |
| 100.0% |      51 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `libzip.dylib` |

##### `__psynch_mutexwait` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                              | Location                  |
| -----: | ------: | ----------------------------------- | ------------------------- |
| 100.0% |      23 | `_pthread_mutex_firstfit_lock_slow` | `libsystem_pthread.dylib` |

##### `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      19 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `tlv_get_addr` (`libdyld.dylib`)

|     % | Samples | Caller                                      | Location       |
| ----: | ------: | ------------------------------------------- | -------------- |
| 10.5% |       2 | `TypeAryPtr::add_offset`                    | `libjvm.dylib` |
| 10.5% |       2 | `TypeInstPtr::make`                         | `libjvm.dylib` |
| 10.5% |       2 | `GraphBuilder::iterate_bytecodes_for_block` | `libjvm.dylib` |
|  5.3% |       1 | `PhaseLive::compute`                        | `libjvm.dylib` |
|  5.3% |       1 | `State::MachOperGenerator`                  | `libjvm.dylib` |

##### `IndexSetIterator::advance_and_next` (`libjvm.dylib`)

|     % | Samples | Caller                       | Location       |
| ----: | ------: | ---------------------------- | -------------- |
| 23.5% |       4 | `PhaseIFG::re_insert`        | `libjvm.dylib` |
| 17.6% |       3 | `PhaseLive::add_liveout`     | `libjvm.dylib` |
| 11.8% |       2 | `PhaseChaitin::Select`       | `libjvm.dylib` |
| 11.8% |       2 | `PhaseIFG::effective_degree` | `libjvm.dylib` |
| 11.8% |       2 | `PhaseIFG::SquareUp`         | `libjvm.dylib` |

##### `__psynch_cvwait` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                  | Location       |
| ----: | ------: | ----------------------- | -------------- |
| 81.3% |      13 | `PlatformMonitor::wait` | `libjvm.dylib` |
| 12.5% |       2 | `PlatformEvent::park`   | `libjvm.dylib` |
|  6.3% |       1 | `Parker::park`          | `libjvm.dylib` |

##### `InstanceKlass::find_method_index` (`libjvm.dylib`)

|     % | Samples | Caller                                  | Location       |
| ----: | ------: | --------------------------------------- | -------------- |
| 80.0% |      12 | `InstanceKlass::uncached_lookup_method` | `libjvm.dylib` |
| 13.3% |       2 | `InstanceKlass::find_method`            | `libjvm.dylib` |
|  6.7% |       1 | `InstanceKlass::find_local_method`      | `libjvm.dylib` |

##### `PhaseChaitin::Split` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      15 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `SymbolTable::do_lookup` (`libjvm.dylib`)

|     % | Samples | Caller                                         | Location       |
| ----: | ------: | ---------------------------------------------- | -------------- |
| 69.2% |       9 | `SymbolTable::lookup_only`                     | `libjvm.dylib` |
| 15.4% |       2 | `ClassFileParser::parse_constant_pool_entries` | `libjvm.dylib` |
| 15.4% |       2 | `SymbolTable::new_symbol`                      | `libjvm.dylib` |

##### `inflate` (`libzip.dylib`)

|      % | Samples | Caller                                          | Location       |
| -----: | ------: | ----------------------------------------------- | -------------- |
| 100.0% |      13 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `libzip.dylib` |

##### `PhaseChaitin::elide_copy` (`libjvm.dylib`)

|     % | Samples | Caller                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 92.3% |      12 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |
|  7.7% |       1 | `PhaseChaitin::Register_Allocate`          | `libjvm.dylib` |

##### `Compile::identify_useful_nodes` (`libjvm.dylib`)

|     % | Samples | Caller                                        | Location       |
| ----: | ------: | --------------------------------------------- | -------------- |
| 84.6% |      11 | `PhaseRemoveUseless::PhaseRemoveUseless`      | `libjvm.dylib` |
| 15.4% |       2 | `Matcher::specialize_generic_vector_operands` | `libjvm.dylib` |

##### `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` (`libjvm.dylib`)

|     % | Samples | Caller                                             | Location       |
| ----: | ------: | -------------------------------------------------- | -------------- |
| 69.2% |       9 | `DebugInformationRecorder::describe_scope`         | `libjvm.dylib` |
| 23.1% |       3 | `DebugInformationRecorder::serialize_scope_values` | `libjvm.dylib` |
|  7.7% |       1 | `LIR_Assembler::record_non_safepoint_debug_info`   | `libjvm.dylib` |

##### `_platform_memset` (`libsystem_platform.dylib`)

|    % | Samples | Caller                                   | Location       |
| ---: | ------: | ---------------------------------------- | -------------- |
| 9.1% |       1 | `ConstantPool::allocate`                 | `libjvm.dylib` |
| 9.1% |       1 | `MemAllocator::allocate`                 | `libjvm.dylib` |
| 9.1% |       1 | `Node::remove_dead_region`               | `libjvm.dylib` |
| 9.1% |       1 | `MethodLiveness::compute_liveness`       | `libjvm.dylib` |
| 9.1% |       1 | `ConnectionGraph::add_java_object_edges` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_early` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |       9 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `pthread_jit_write_protect_np` (`libsystem_pthread.dylib`)

|     % | Samples | Caller                                      | Location       |
| ----: | ------: | ------------------------------------------- | -------------- |
| 25.0% |       2 | `InterpreterRuntime::build_method_counters` | `libjvm.dylib` |
| 25.0% |       2 | `jni_GetPrimitiveArrayCritical`             | `libjvm.dylib` |
| 25.0% |       2 | `Unsafe_AllocateInstance`                   | `libjvm.dylib` |
| 12.5% |       1 | `JVM_IsArrayClass`                          | `libjvm.dylib` |
| 12.5% |       1 | `InterpreterRuntime::anewarray`             | `libjvm.dylib` |

##### `PhaseLive::compute` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       8 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `Unique_Node_List::remove` (`libjvm.dylib`)

|     % | Samples | Caller                                    | Location       |
| ----: | ------: | ----------------------------------------- | -------------- |
| 87.5% |       7 | `PhaseIterGVN::remove_globally_dead_node` | `libjvm.dylib` |
| 12.5% |       1 | `Node::remove_dead_region`                | `libjvm.dylib` |

##### `LinearScanWalker::free_collect_inactive_fixed` (`libjvm.dylib`)

|      % | Samples | Caller                             | Location       |
| -----: | ------: | ---------------------------------- | -------------- |
| 100.0% |       8 | `LinearScanWalker::alloc_free_reg` | `libjvm.dylib` |

##### `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` (`libjvm.dylib`)

|     % | Samples | Caller                                                                            | Location       |
| ----: | ------: | --------------------------------------------------------------------------------- | -------------- |
| 85.7% |       6 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object`          | `libjvm.dylib` |
| 14.3% |       1 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_to_pb` | `libjvm.dylib` |

##### `PhaseChaitin::post_allocate_copy_removal` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       7 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `Matcher::xform` (`libjvm.dylib`)

|      % | Samples | Caller           | Location       |
| -----: | ------: | ---------------- | -------------- |
| 100.0% |       7 | `Matcher::match` | `libjvm.dylib` |

##### `PhaseIdealLoop::Dominators` (`libjvm.dylib`)

|     % | Samples | Caller                               | Location       |
| ----: | ------: | ------------------------------------ | -------------- |
| 85.7% |       6 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |
| 14.3% |       1 | `PhaseIdealLoop::PhaseIdealLoop`     | `libjvm.dylib` |

##### `PhaseIterGVN::add_users_to_worklist` (`libjvm.dylib`)

|     % | Samples | Caller                        | Location       |
| ----: | ------: | ----------------------------- | -------------- |
| 71.4% |       5 | `PhaseIterGVN::transform_old` | `libjvm.dylib` |
| 14.3% |       1 | `Node::set_req_X`             | `libjvm.dylib` |
| 14.3% |       1 | `RegionNode::Ideal`           | `libjvm.dylib` |

##### `ciObjectFactory::get_metadata` (`libjvm.dylib`)

|     % | Samples | Caller                                           | Location       |
| ----: | ------: | ------------------------------------------------ | -------------- |
| 28.6% |       2 | `ciBytecodeStream::get_method`                   | `libjvm.dylib` |
| 28.6% |       2 | `ciEnv::get_klass_by_name_impl`                  | `libjvm.dylib` |
| 14.3% |       1 | `ciInstanceKlass::compute_transitive_interfaces` | `libjvm.dylib` |
| 14.3% |       1 | `ciMethod::ensure_method_data`                   | `libjvm.dylib` |
| 14.3% |       1 | `ciObjectFactory::get`                           | `libjvm.dylib` |

##### `PhaseLive::add_liveout` (`libjvm.dylib`)

|      % | Samples | Caller               | Location       |
| -----: | ------: | -------------------- | -------------- |
| 100.0% |       7 | `PhaseLive::compute` | `libjvm.dylib` |

##### `LinearScanWalker::alloc_free_reg` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |       7 | `LinearScanWalker::activate_current` | `libjvm.dylib` |

##### `LIR_OpVisitState::visit` (`libjvm.dylib`)

|     % | Samples | Caller                                | Location       |
| ----: | ------: | ------------------------------------- | -------------- |
| 42.9% |       3 | `LinearScan::compute_local_live_sets` | `libjvm.dylib` |
| 28.6% |       2 | `LinearScan::assign_reg_num`          | `libjvm.dylib` |
| 14.3% |       1 | `LinearScan::build_intervals`         | `libjvm.dylib` |
| 14.3% |       1 | `LinearScan::do_linear_scan`          | `libjvm.dylib` |

##### `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` (`libjvm.dylib`)

|      % | Samples | Caller                                         | Location       |
| -----: | ------: | ---------------------------------------------- | -------------- |
| 100.0% |       7 | `void G1CMTask::process_grey_task_entry<true>` | `libjvm.dylib` |

##### `UTF8::is_legal_utf8` (`libjvm.dylib`)

|      % | Samples | Caller                                         | Location       |
| -----: | ------: | ---------------------------------------------- | -------------- |
| 100.0% |       7 | `ClassFileParser::parse_constant_pool_entries` | `libjvm.dylib` |

##### `Dictionary::find` (`libjvm.dylib`)

|     % | Samples | Caller                                                       | Location       |
| ----: | ------: | ------------------------------------------------------------ | -------------- |
| 85.7% |       6 | `SystemDictionary::find_constrained_instance_or_array_klass` | `libjvm.dylib` |
| 14.3% |       1 | `SystemDictionary::resolve_instance_class_or_null`           | `libjvm.dylib` |

##### `RelocIterator::set_limits` (`libjvm.dylib`)

|     % | Samples | Caller                                           | Location       |
| ----: | ------: | ------------------------------------------------ | -------------- |
| 33.3% |       2 | `NativeMovConstReg::set_data`                    | `libjvm.dylib` |
| 33.3% |       2 | `CompiledIC::CompiledIC`                         | `libjvm.dylib` |
| 16.7% |       1 | `trampoline_stub_Relocation::get_trampoline_for` | `libjvm.dylib` |
| 16.7% |       1 | `CompiledMethod::attached_method`                | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |       6 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `MultiNode::is_CFG` (`libjvm.dylib`)

|     % | Samples | Caller                                        | Location       |
| ----: | ------: | --------------------------------------------- | -------------- |
| 50.0% |       3 | `PhaseIdealLoop::build_and_optimize`          | `libjvm.dylib` |
| 16.7% |       1 | `PhaseIdealLoop::Dominators`                  | `libjvm.dylib` |
| 16.7% |       1 | `PhaseIdealLoop::build_loop_late_post_work`   | `libjvm.dylib` |
| 16.7% |       1 | `PhaseIdealLoop::get_late_ctrl_with_anti_dep` | `libjvm.dylib` |

##### `swtch_pri` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                                                                                                                                                                                                                                                                                                                                           | Location       |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------- |
| 66.7% |       4 | `bool ConcurrentHashTable<G1CodeRootSetHashTableConfig, (MEMFLAGS)5>::internal_insert_get<G1CodeRootSetHashTable::HashTableLookUp, bool ConcurrentHashTable<G1CodeRootSetHashTableConfig, (MEMFLAGS)5>::insert<G1CodeRootSetHashTable::HashTableLookUp>(Thread*, G1CodeRootSetHashTable::HashTableLookUp&, nmethod* const&, bool*, bool*)::NOP>` | `libjvm.dylib` |
| 16.7% |       1 | `CompileBroker::make_thread`                                                                                                                                                                                                                                                                                                                     | `libjvm.dylib` |
| 16.7% |       1 | `GlobalCounter::write_synchronize`                                                                                                                                                                                                                                                                                                               | `libjvm.dylib` |

##### `vmSymbols::find_sid` (`libjvm.dylib`)

|      % | Samples | Caller                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |       6 | `ciObjectFactory::get_symbol` | `libjvm.dylib` |

##### `I2C/C2I adapters(0xb)` (`<unknown>`)

|     % | Samples | Caller                                                                                                                | Location                                                                          |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| 16.7% |       1 | `<init>(int, Set)`                                                                                                    | `org.jetbrains.org.objectweb.asm.tree.analysis.SourceValue`                       |
| 16.7% |       1 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)`                                          | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`                            |
| 16.7% |       1 | `resolveVariableAccessAndSelectCandidate(FirQualifiedAccessExpression, boolean, boolean, FirElement, ResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`                          |
| 16.7% |       1 | `isWrappedIntegerOperator(FirBasedSymbol)`                                                                            | `org.jetbrains.kotlin.fir.scopes.impl.FirIntegerConstantOperatorScopeKt`          |
| 16.7% |       1 | `visitProperty(FirProperty, Void)`                                                                                    | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor` |

##### `sys_icache_invalidate` (`libsystem_platform.dylib`)

|     % | Samples | Caller                                       | Location       |
| ----: | ------: | -------------------------------------------- | -------------- |
| 20.0% |       1 | `ICStub::finalize`                           | `libjvm.dylib` |
| 20.0% |       1 | `I2C/C2I adapters(0xbb)`                     | `<unknown>`    |
| 20.0% |       1 | `CompiledIC::set_to_monomorphic`             | `libjvm.dylib` |
| 20.0% |       1 | `SharedRuntime::resolve_sub_helper_internal` | `libjvm.dylib` |
| 20.0% |       1 | `nmethod::nmethod`                           | `libjvm.dylib` |

##### `inflate_table` (`libzip.dylib`)

|      % | Samples | Caller    | Location       |
| -----: | ------: | --------- | -------------- |
| 100.0% |       5 | `inflate` | `libzip.dylib` |

##### `Rewriter::scan_method` (`libjvm.dylib`)

|      % | Samples | Caller                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |       5 | `Rewriter::rewrite_bytecodes` | `libjvm.dylib` |

##### `SymbolTable::lookup_shared` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |       5 | `SymbolTable::lookup_only` | `libjvm.dylib` |

##### `checkNotNullParameter(Object, String)` (`kotlin.jvm.internal.Intrinsics`)

|     % | Samples | Caller                                                                                                | Location                                                                               |
| ----: | ------: | ----------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| 25.0% |       1 | `<init>(IrClassifierSymbol, SimpleTypeNullability)`                                                   | `org.jetbrains.kotlin.ir.types.impl.IrSimpleTypeOnlyClassifierImpl`                    |
| 25.0% |       1 | `<init>(CandidateFactory, CandidateCollector)`                                                        | `org.jetbrains.kotlin.fir.resolve.calls.tower.CandidateFactoriesAndCollectors`         |
| 25.0% |       1 | `<init>(ConstraintInjector, TypeSystemInferenceExtensionContext, LanguageVersionSettings, Function2)` | `org.jetbrains.kotlin.resolve.calls.inference.model.NewConstraintSystemImpl`           |
| 25.0% |       1 | `forEachClassLikeType(ConeKotlinType, Function1)`                                                     | `org.jetbrains.kotlin.fir.analysis.checkers.expression.FirMissingDependencyClassProxy` |

##### `I2C/C2I adapters(0xbb)` (`<unknown>`)

|     % | Samples | Caller                                                           | Location                                                                         |
| ----: | ------: | ---------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| 25.0% |       1 | `convertQualifiedExpression(LighterASTNode)`                     | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirExpressionBuilder`  |
| 25.0% |       1 | `push(Object)`                                                   | `java.util.ArrayDeque`                                                           |
| 25.0% |       1 | `typeDepth(TypeSystemCommonSuperTypesContext, KotlinTypeMarker)` | `org.jetbrains.kotlin.types.model.TypeSystemCommonSuperTypesContextContextualKt` |

##### `resize()` (`java.util.HashMap`)

|      % | Samples | Caller                                          | Location            |
| -----: | ------: | ----------------------------------------------- | ------------------- |
| 100.0% |       3 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `visitVarInsn(int, int)` (`org.jetbrains.org.objectweb.asm.commons.InstructionAdapter`)

|     % | Samples | Caller                                                             | Location                                               |
| ----: | ------: | ------------------------------------------------------------------ | ------------------------------------------------------ |
| 50.0% |       1 | `visitVarInsn(int, int, InstructionAdapter, KotlinTypeMapperBase)` | `org.jetbrains.kotlin.codegen.inline.LocalVarRemapper` |
| 50.0% |       1 | `accept(MethodVisitor)`                                            | `org.jetbrains.org.objectweb.asm.tree.VarInsnNode`     |

##### `customComputeIfAbsent(ConcurrentHashMap, String, Function1)` (`org.jetbrains.kotlin.fir.util.ConeTypeRegistry`)

|      % | Samples | Caller          | Location                                 |
| -----: | ------: | --------------- | ---------------------------------------- |
| 100.0% |       2 | `getId(String)` | `org.jetbrains.kotlin.util.TypeRegistry` |

##### `invokeSuspend(Object)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask$processLevel$6`)

|      % | Samples | Caller               | Location                                              |
| -----: | ------: | -------------------- | ----------------------------------------------------- |
| 100.0% |       2 | `resumeWith(Object)` | `kotlin.coroutines.jvm.internal.BaseContinuationImpl` |

##### `runResolverForNoReceiver(CallInfo, boolean, Continuation)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolveTask`)

|      % | Samples | Caller                                                                                                | Location                                                           |
| -----: | ------: | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| 100.0% |       2 | `runResolverForNoReceiver$default(FirTowerResolveTask, CallInfo, boolean, Continuation, int, Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolveTask` |

##### `tryToSetSourceForImplicitReceiver$tryToSetSourceForImplicitReceiver(FirExpression, Candidate)` (`org.jetbrains.kotlin.fir.resolve.calls.candidate.Candidate`)

|      % | Samples | Caller                                                  | Location                                                     |
| -----: | ------: | ------------------------------------------------------- | ------------------------------------------------------------ |
| 100.0% |       2 | `tryToSetSourceForImplicitReceiver(ConeResolutionAtom)` | `org.jetbrains.kotlin.fir.resolve.calls.candidate.Candidate` |

##### `areEqual(Object, Object)` (`kotlin.jvm.internal.Intrinsics`)

|     % | Samples | Caller                                                       | Location                                                                                               |
| ----: | ------: | ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| 50.0% |       1 | `shouldGenerateAnnotationsOnValueParameters()`               | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`                                             |
| 50.0% |       1 | `check(CheckerContext, DiagnosticReporter, FirFunctionCall)` | `org.jetbrains.kotlin.fir.analysis.jvm.checkers.expression.FirJavaGenericVarianceViolationTypeChecker` |

##### `equals(Object)` (`java.lang.String`)

|     % | Samples | Caller                     | Location                                     |
| ----: | ------: | -------------------------- | -------------------------------------------- |
| 50.0% |       1 | `addConstantUtf8(String)`  | `jdk.internal.org.objectweb.asm.SymbolTable` |
| 50.0% |       1 | `areEqual(Object, Object)` | `kotlin.jvm.internal.Intrinsics`             |

##### `equals(Object)` (`java.lang.Object`)

|      % | Samples | Caller                     | Location                         |
| -----: | ------: | -------------------------- | -------------------------------- |
| 100.0% |       2 | `areEqual(Object, Object)` | `kotlin.jvm.internal.Intrinsics` |

##### `getDifferentNameForJvmBuiltinFunction(IrSimpleFunction)` (`org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper`)

|      % | Samples | Caller                                        | Location                                                         |
| -----: | ------: | --------------------------------------------- | ---------------------------------------------------------------- |
| 100.0% |       1 | `getJvmMethodNameIfSpecial(IrSimpleFunction)` | `org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper` |

##### `merge(SourceValue, SourceValue)` (`org.jetbrains.org.objectweb.asm.tree.analysis.SourceInterpreter`)

|      % | Samples | Caller                | Location                                                          |
| -----: | ------: | --------------------- | ----------------------------------------------------------------- |
| 100.0% |       1 | `merge(Value, Value)` | `org.jetbrains.org.objectweb.asm.tree.analysis.SourceInterpreter` |

##### `writeGenericArguments(JvmSignatureWriter, PossiblyInnerIrType, TypeMappingMode)` (`org.jetbrains.kotlin.backend.jvm.mapping.IrTypeMapper`)

|      % | Samples | Caller                                                                          | Location                                                |
| -----: | ------: | ------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |       1 | `writeGenericType(JvmSignatureWriter, KotlinTypeMarker, Type, TypeMappingMode)` | `org.jetbrains.kotlin.backend.jvm.mapping.IrTypeMapper` |

##### `removeClosureAssertions(MethodNode)` (`org.jetbrains.kotlin.codegen.inline.MethodInliner$Companion`)

|      % | Samples | Caller                                                                | Location                                                      |
| -----: | ------: | --------------------------------------------------------------------- | ------------------------------------------------------------- |
| 100.0% |       1 | `access$removeClosureAssertions(MethodInliner$Companion, MethodNode)` | `org.jetbrains.kotlin.codegen.inline.MethodInliner$Companion` |

##### `mapUnderlyingType(Function1)` (`org.jetbrains.kotlin.descriptors.ValueClassRepresentation`)

|      % | Samples | Caller                          | Location                                                     |
| -----: | ------: | ------------------------------- | ------------------------------------------------------------ |
| 100.0% |       1 | `getValueClassRepresentation()` | `org.jetbrains.kotlin.ir.descriptors.IrBasedClassDescriptor` |

##### `isBigArityFunction(IrClass, List)` (`org.jetbrains.kotlin.backend.jvm.mapping.IrTypeMapper`)

|      % | Samples | Caller                                                                            | Location                                                |
| -----: | ------: | --------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |       1 | `writeGenericArguments(JvmSignatureWriter, PossiblyInnerIrType, TypeMappingMode)` | `org.jetbrains.kotlin.backend.jvm.mapping.IrTypeMapper` |

##### `getPrimitiveOrUnsignedType(IrType, Map, Map)` (`org.jetbrains.kotlin.ir.types.IrTypePredicatesKt`)

|      % | Samples | Caller                     | Location                                           |
| -----: | ------: | -------------------------- | -------------------------------------------------- |
| 100.0% |       1 | `getPrimitiveType(IrType)` | `org.jetbrains.kotlin.ir.types.IrTypePredicatesKt` |

##### `removeAll(boolean)` (`org.jetbrains.org.objectweb.asm.tree.InsnList`)

|      % | Samples | Caller                               | Location                                        |
| -----: | ------: | ------------------------------------ | ----------------------------------------------- |
| 100.0% |       1 | `insert(AbstractInsnNode, InsnList)` | `org.jetbrains.org.objectweb.asm.tree.InsnList` |

##### `resetLabels()` (`org.jetbrains.org.objectweb.asm.tree.InsnList`)

|      % | Samples | Caller                  | Location                                          |
| -----: | ------: | ----------------------- | ------------------------------------------------- |
| 100.0% |       1 | `accept(MethodVisitor)` | `org.jetbrains.org.objectweb.asm.tree.MethodNode` |

##### `buildPartial()` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type$Builder`)

|      % | Samples | Caller    | Location                                              |
| -----: | ------: | --------- | ----------------------------------------------------- |
| 100.0% |       1 | `build()` | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$Builder` |

##### `typeOrTypealiasProto(ConeKotlinType, boolean, FirTypeRef, boolean, boolean, boolean)` (`org.jetbrains.kotlin.fir.serialization.FirElementSerializer`)

|      % | Samples | Caller                                                                                                                            | Location                                                      |
| -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| 100.0% |       1 | `typeOrTypealiasProto$default(FirElementSerializer, ConeKotlinType, boolean, FirTypeRef, boolean, boolean, boolean, int, Object)` | `org.jetbrains.kotlin.fir.serialization.FirElementSerializer` |

##### `functionProto(FirFunction)` (`org.jetbrains.kotlin.fir.serialization.FirElementSerializer`)

|      % | Samples | Caller                                                                          | Location                                                      |
| -----: | ------: | ------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| 100.0% |       1 | `addDeclarationProto(ProtoBuf$Package$Builder, FirDeclaration, Set, Function1)` | `org.jetbrains.kotlin.fir.serialization.FirElementSerializer` |

##### `parseMethodOrNull(MethodNode)` (`org.jetbrains.kotlin.codegen.inline.InplaceArgumentsMethodTransformer`)

|      % | Samples | Caller                          | Location                                                                |
| -----: | ------: | ------------------------------- | ----------------------------------------------------------------------- |
| 100.0% |       1 | `transform(String, MethodNode)` | `org.jetbrains.kotlin.codegen.inline.InplaceArgumentsMethodTransformer` |

##### `visitLdcInsn(Object)` (`org.jetbrains.org.objectweb.asm.commons.InstructionAdapter`)

|      % | Samples | Caller                  | Location                                           |
| -----: | ------: | ----------------------- | -------------------------------------------------- |
| 100.0% |       1 | `accept(MethodVisitor)` | `org.jetbrains.org.objectweb.asm.tree.LdcInsnNode` |

##### `get(ReadOnlySlice, Object)` (`org.jetbrains.kotlin.util.slicedMap.SlicedMapImpl`)

|      % | Samples | Caller                                                            | Location                                                              |
| -----: | ------: | ----------------------------------------------------------------- | --------------------------------------------------------------------- |
| 100.0% |       1 | `get(JvmSerializationBindings$SerializationMappingSlice, Object)` | `org.jetbrains.kotlin.codegen.serialization.JvmSerializationBindings` |

##### `accept(Object)` (`java.util.stream.ReferencePipeline$2$1`)

|      % | Samples | Caller                       | Location                             |
| -----: | ------: | ---------------------------- | ------------------------------------ |
| 100.0% |       1 | `forEachRemaining(Consumer)` | `java.util.HashMap$ValueSpliterator` |

##### `values()` (`java.util.HashMap`)

|      % | Samples | Caller                               | Location                                                                   |
| -----: | ------: | ------------------------------------ | -------------------------------------------------------------------------- |
| 100.0% |       1 | `getFirstUnusedLocalVariableIndex()` | `org.jetbrains.kotlin.codegen.optimization.fixStack.LocalVariablesManager` |

##### `visitMethodInsn(int, String, String, String, boolean)` (`jdk.internal.org.objectweb.asm.MethodWriter`)

|      % | Samples | Caller                  | Location                                       |
| -----: | ------: | ----------------------- | ---------------------------------------------- |
| 100.0% |       1 | `generateConstructor()` | `java.lang.invoke.InnerClassLambdaMetafactory` |

##### `inflate(byte[], int, int)` (`java.util.zip.Inflater`)

|      % | Samples | Caller                   | Location                            |
| -----: | ------: | ------------------------ | ----------------------------------- |
| 100.0% |       1 | `read(byte[], int, int)` | `java.util.zip.InflaterInputStream` |

##### `readFully(byte[], int, int)` (`java.util.zip.ZipInputStream`)

|      % | Samples | Caller      | Location                       |
| -----: | ------: | ----------- | ------------------------------ |
| 100.0% |       1 | `readLOC()` | `java.util.zip.ZipInputStream` |

##### `closeEntry()` (`java.util.zip.ZipInputStream`)

|      % | Samples | Caller           | Location                       |
| -----: | ------: | ---------------- | ------------------------------ |
| 100.0% |       1 | `getNextEntry()` | `java.util.zip.ZipInputStream` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

|      % | Samples | Caller                | Location            |
| -----: | ------: | --------------------- | ------------------- |
| 100.0% |       1 | `put(Object, Object)` | `java.util.HashMap` |

##### `nextNode()` (`java.util.HashMap$HashIterator`)

|      % | Samples | Caller   | Location                          |
| -----: | ------: | -------- | --------------------------------- |
| 100.0% |       1 | `next()` | `java.util.HashMap$ValueIterator` |

##### `putAbstractTypes(int, int)` (`jdk.internal.org.objectweb.asm.MethodWriter`)

|      % | Samples | Caller       | Location                                      |
| -----: | ------: | ------------ | --------------------------------------------- |
| 100.0% |       1 | `putFrame()` | `jdk.internal.org.objectweb.asm.MethodWriter` |

##### `visitMaxs(int, int)` (`jdk.internal.org.objectweb.asm.MethodWriter`)

|      % | Samples | Caller                  | Location                                       |
| -----: | ------: | ----------------------- | ---------------------------------------------- |
| 100.0% |       1 | `generateConstructor()` | `java.lang.invoke.InnerClassLambdaMetafactory` |

##### `indexOf(byte[], int, byte[], int, int)` (`java.lang.StringLatin1`)

|      % | Samples | Caller                                    | Location           |
| -----: | ------: | ----------------------------------------- | ------------------ |
| 100.0% |       1 | `indexOf(byte[], byte, int, String, int)` | `java.lang.String` |

##### `plus(Set, Iterable)` (`kotlin.collections.SetsKt___SetsKt`)

|      % | Samples | Caller       | Location                                                              |
| -----: | ------: | ------------ | --------------------------------------------------------------------- |
| 100.0% |       1 | `<clinit>()` | `kotlin.reflect.jvm.internal.impl.builtins.jvm.JvmBuiltInsSignatures` |

##### `lastIndexOf(byte[], int, int)` (`java.lang.StringLatin1`)

|      % | Samples | Caller                  | Location           |
| -----: | ------: | ----------------------- | ------------------ |
| 100.0% |       1 | `lastIndexOf(int, int)` | `java.lang.String` |

##### `makeHiddenClassDefiner(MethodHandles$Lookup$ClassFile, Set, boolean, ClassFileDumper)` (`java.lang.invoke.MethodHandles$Lookup`)

|      % | Samples | Caller                                                         | Location                                |
| -----: | ------: | -------------------------------------------------------------- | --------------------------------------- |
| 100.0% |       1 | `makeHiddenClassDefiner(String, byte[], Set, ClassFileDumper)` | `java.lang.invoke.MethodHandles$Lookup` |

##### `checkDescriptor(MethodType)` (`java.lang.invoke.AbstractValidatingLambdaMetafactory`)

|      % | Samples | Caller                      | Location                                               |
| -----: | ------: | --------------------------- | ------------------------------------------------------ |
| 100.0% |       1 | `validateMetafactoryArgs()` | `java.lang.invoke.AbstractValidatingLambdaMetafactory` |

##### `itable stub` (`<unknown>`)

|      % | Samples | Caller               | Location                                         |
| -----: | ------: | -------------------- | ------------------------------------------------ |
| 100.0% |       1 | `getFunctionCount()` | `org.jetbrains.kotlin.metadata.ProtoBuf$Package` |

##### `I2C/C2I adapters(0xbbaaaab)` (`<unknown>`)

|      % | Samples | Caller                                               | Location                                                                |
| -----: | ------: | ---------------------------------------------------- | ----------------------------------------------------------------------- |
| 100.0% |       1 | `replaceEntryWithNode(Object[], int, int, TrieNode)` | `kotlinx.collections.immutable.implementations.immutableMap.TrieNodeKt` |

##### `I2C/C2I adapters(0xbbb)` (`<unknown>`)

|      % | Samples | Caller                       | Location                                                 |
| -----: | ------: | ---------------------------- | -------------------------------------------------------- |
| 100.0% |       1 | `accept(FirVisitor, Object)` | `org.jetbrains.kotlin.fir.expressions.FirWhenExpression` |

##### `I2C/C2I adapters(0xaa)` (`<unknown>`)

|      % | Samples | Caller                         | Location                            |
| -----: | ------: | ------------------------------ | ----------------------------------- |
| 100.0% |       1 | `closedTableSize(int, double)` | `com.google.common.collect.Hashing` |

##### `I2C/C2I adapters(0xbbaab)` (`<unknown>`)

|      % | Samples | Caller                                 | Location                                |
| -----: | ------: | -------------------------------------- | --------------------------------------- |
| 100.0% |       1 | `isFakeLocalVariableForInline(String)` | `org.jetbrains.kotlin.load.java.JvmAbi` |

### Total samples

Functions with the most samples collected within the function and its callees.

|     % | Samples | Function                                         | Location                                                |
| ----: | ------: | ------------------------------------------------ | ------------------------------------------------------- |
| 64.6% |     874 | `_pthread_start`                                 | `libsystem_pthread.dylib`                               |
| 64.6% |     874 | `thread_start`                                   | `libsystem_pthread.dylib`                               |
| 64.5% |     873 | `Thread::call_run`                               | `libjvm.dylib`                                          |
| 64.5% |     873 | `thread_native_entry`                            | `libjvm.dylib`                                          |
| 59.3% |     802 | `CompileBroker::compiler_thread_loop`            | `libjvm.dylib`                                          |
| 59.3% |     802 | `JavaThread::thread_main_inner`                  | `libjvm.dylib`                                          |
| 58.2% |     787 | `CompileBroker::invoke_compiler_on_method`       | `libjvm.dylib`                                          |
| 39.9% |     540 | `C2Compiler::compile_method`                     | `libjvm.dylib`                                          |
| 39.8% |     539 | `Compile::Compile`                               | `libjvm.dylib`                                          |
| 29.9% |     404 | `run(String[])`                                  | `org.jetbrains.kotlin.preloading.Preloader`             |
| 29.9% |     404 | `main(String[])`                                 | `org.jetbrains.kotlin.preloading.Preloader`             |
| 24.1% |     326 | `invoke(Object, Object[])`                       | `java.lang.reflect.Method`                              |
| 24.0% |     325 | `main(String[])`                                 | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`  |
| 24.0% |     325 | `main(String[])`                                 | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 24.0% |     325 | `invokeStatic(Object, Object)`                   | `java.lang.invoke.LambdaForm$DMH.0x000000f001008400`    |
| 24.0% |     325 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000f001009800`     |
| 24.0% |     325 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                      |
| 24.0% |     325 | `invokeImpl(Object, Object[])`                   | `jdk.internal.reflect.DirectMethodHandleAccessor`       |
| 24.0% |     325 | `invoke(Object, Object[])`                       | `jdk.internal.reflect.DirectMethodHandleAccessor`       |
| 23.9% |     324 | `doMain(CLICompiler, String[])`                  | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Compiler

|     % | Samples | Function                                   | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 59.3% |     802 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib` |
| 58.2% |     787 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |
| 39.9% |     540 | `C2Compiler::compile_method`               | `libjvm.dylib` |
| 39.8% |     539 | `Compile::Compile`                         | `libjvm.dylib` |
| 18.4% |     249 | `Compile::Code_Gen`                        | `libjvm.dylib` |
| 17.3% |     234 | `Compilation::compile_method`              | `libjvm.dylib` |
| 17.3% |     234 | `Compilation::Compilation`                 | `libjvm.dylib` |
| 16.3% |     220 | `Compilation::compile_java_method`         | `libjvm.dylib` |
| 16.0% |     216 | `Compile::Optimize`                        | `libjvm.dylib` |
| 10.3% |     140 | `PhaseChaitin::Register_Allocate`          | `libjvm.dylib` |
|  8.2% |     111 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib` |
|  7.2% |      98 | `PhaseIdealLoop::PhaseIdealLoop`           | `libjvm.dylib` |
|  7.2% |      97 | `PhaseIdealLoop::build_and_optimize`       | `libjvm.dylib` |
|  7.1% |      96 | `Compilation::emit_lir`                    | `libjvm.dylib` |
|  5.9% |      80 | `LinearScan::do_linear_scan`               | `libjvm.dylib` |
|  5.8% |      79 | `Compilation::build_hir`                   | `libjvm.dylib` |
|  4.6% |      62 | `PhaseIterGVN::optimize`                   | `libjvm.dylib` |
|  4.4% |      59 | `PhaseIterGVN::transform_old`              | `libjvm.dylib` |
|  4.0% |      54 | `Compile::optimize_loops`                  | `libjvm.dylib` |
|  3.9% |      53 | `GraphBuilder::GraphBuilder`               | `libjvm.dylib` |

##### Native

|     % | Samples | Function                                        | Location                  |
| ----: | ------: | ----------------------------------------------- | ------------------------- |
| 64.6% |     874 | `_pthread_start`                                | `libsystem_pthread.dylib` |
| 64.6% |     874 | `thread_start`                                  | `libsystem_pthread.dylib` |
| 64.5% |     873 | `Thread::call_run`                              | `libjvm.dylib`            |
| 64.5% |     873 | `thread_native_entry`                           | `libjvm.dylib`            |
| 59.3% |     802 | `JavaThread::thread_main_inner`                 | `libjvm.dylib`            |
| 17.4% |     235 | `Compiler::compile_method`                      | `libjvm.dylib`            |
|  5.2% |      71 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `libzip.dylib`            |
|  4.6% |      62 | `KlassFactory::create_from_stream`              | `libjvm.dylib`            |
|  4.5% |      61 | `WorkerThread::run`                             | `libjvm.dylib`            |
|  4.5% |      61 | `SystemDictionary::resolve_class_from_stream`   | `libjvm.dylib`            |
|  4.4% |      60 | `jvm_define_class_common`                       | `libjvm.dylib`            |
|  4.4% |      60 | `JVM_DefineClassWithSource`                     | `libjvm.dylib`            |
|  4.4% |      60 | `Java_java_lang_ClassLoader_defineClass1`       | `libjava.dylib`           |
|  4.1% |      56 | `Parse::Parse`                                  | `libjvm.dylib`            |
|  4.1% |      56 | `ParseGenerator::generate`                      | `libjvm.dylib`            |
|  4.0% |      54 | `ClassFileParser::ClassFileParser`              | `libjvm.dylib`            |
|  3.9% |      53 | `IRScope::IRScope`                              | `libjvm.dylib`            |
|  3.9% |      53 | `IR::IR`                                        | `libjvm.dylib`            |
|  3.8% |      52 | `Parse::do_one_block`                           | `libjvm.dylib`            |
|  3.8% |      52 | `Parse::do_all_blocks`                          | `libjvm.dylib`            |

##### Ours

|     % | Samples | Function                                                                                                                                      | Location                                                |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 29.9% |     404 | `run(String[])`                                                                                                                               | `org.jetbrains.kotlin.preloading.Preloader`             |
| 29.9% |     404 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.preloading.Preloader`             |
| 24.0% |     325 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`  |
| 24.0% |     325 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 23.9% |     324 | `doMain(CLICompiler, String[])`                                                                                                               | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 23.9% |     323 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)`                                            | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 23.8% |     322 | `exec(PrintStream, Services, MessageRenderer, String[])`                                                                                      | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 23.8% |     322 | `exec(PrintStream, MessageRenderer, String[])`                                                                                                | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 23.8% |     322 | `doMainNoExit(CLICompiler, String[], MessageRenderer)`                                                                                        | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 23.4% |     317 | `exec(MessageCollector, Services, CommonCompilerArguments)`                                                                                   | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 22.7% |     307 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)`                                                                         | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 22.7% |     307 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)`                                                                        | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 22.7% |     307 | `execImpl(MessageCollector, Services, CommonCompilerArguments)`                                                                               | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 22.6% |     306 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)`                                           | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 22.6% |     306 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 22.6% |     306 | `execute(CommonCompilerArguments, Services, MessageCollector)`                                                                                | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 22.5% |     304 | `runPhasedPipeline(ArgumentsPipelineArtifact)`                                                                                                | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 22.3% |     302 | `phaseBody(PipelineContext, PipelineArtifact)`                                                                                                | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`       |
| 22.3% |     302 | `phaseBody(LoggingContext, Object)`                                                                                                           | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`       |
| 22.3% |     302 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)`                                                                                    | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase` |

##### Standard library

|     % | Samples | Function                                                                        | Location                                             |
| ----: | ------: | ------------------------------------------------------------------------------- | ---------------------------------------------------- |
| 24.1% |     326 | `invoke(Object, Object[])`                                                      | `java.lang.reflect.Method`                           |
| 24.0% |     325 | `invokeStatic(Object, Object)`                                                  | `java.lang.invoke.LambdaForm$DMH.0x000000f001008400` |
| 24.0% |     325 | `invoke(Object, Object, Object)`                                                | `java.lang.invoke.LambdaForm$MH.0x000000f001009800`  |
| 24.0% |     325 | `invokeExact_MT(Object, Object, Object, Object)`                                | `java.lang.invoke.Invokers$Holder`                   |
| 24.0% |     325 | `invokeImpl(Object, Object[])`                                                  | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
| 24.0% |     325 | `invoke(Object, Object[])`                                                      | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|  5.3% |      72 | `inflate(byte[], int, int)`                                                     | `java.util.zip.Inflater`                             |
|  5.3% |      72 | `read(byte[], int, int)`                                                        | `java.util.zip.ZipInputStream`                       |
|  5.3% |      72 | `read(byte[])`                                                                  | `java.io.FilterInputStream`                          |
|  5.2% |      71 | `runWorker(ThreadPoolExecutor$Worker)`                                          | `java.util.concurrent.ThreadPoolExecutor`            |
|  5.2% |      71 | `run()`                                                                         | `java.util.concurrent.ThreadPoolExecutor$Worker`     |
|  5.2% |      71 | `runWith(Object, Runnable)`                                                     | `java.lang.Thread`                                   |
|  5.2% |      71 | `run()`                                                                         | `java.lang.Thread`                                   |
|  5.2% |      71 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)`                   | `java.util.zip.Inflater`                             |
|  5.2% |      70 | `run()`                                                                         | `java.util.concurrent.CompletableFuture$AsyncRun`    |
|  5.2% |      70 | `read(byte[], int, int)`                                                        | `java.util.zip.InflaterInputStream`                  |
|  4.7% |      63 | `loadClass(String, boolean)`                                                    | `java.lang.ClassLoader`                              |
|  4.6% |      62 | `defineClass(String, byte[], int, int, ProtectionDomain)`                       | `java.lang.ClassLoader`                              |
|  4.4% |      60 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`                              |
|  4.4% |      60 | `defineClass(String, byte[], int, int)`                                         | `java.lang.ClassLoader`                              |

##### JIT

|    % | Samples | Function                      | Location    |
| ---: | ------: | ----------------------------- | ----------- |
| 0.5% |       7 | `I2C/C2I adapters(0xb)`       | `<unknown>` |
| 0.4% |       5 | `I2C/C2I adapters(0xbb)`      | `<unknown>` |
| 0.1% |       1 | `itable stub`                 | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xbbaaaab)` | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xbbb)`     | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xaa)`      | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xbbaab)`   | `<unknown>` |

#### Callers

Callers with the largest contribution to each function's total samples. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `_pthread_start` (`libsystem_pthread.dylib`)

|      % | Samples | Caller         | Location                  |
| -----: | ------: | -------------- | ------------------------- |
| 100.0% |     874 | `thread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|      % | Samples | Caller                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |     873 | `thread_native_entry` | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % | Samples | Caller           | Location                  |
| -----: | ------: | ---------------- | ------------------------- |
| 100.0% |     873 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|      % | Samples | Caller                          | Location       |
| -----: | ------: | ------------------------------- | -------------- |
| 100.0% |     802 | `JavaThread::thread_main_inner` | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |     802 | `Thread::call_run` | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|      % | Samples | Caller                                | Location       |
| -----: | ------: | ------------------------------------- | -------------- |
| 100.0% |     787 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |     540 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|      % | Samples | Caller                       | Location       |
| -----: | ------: | ---------------------------- | -------------- |
| 100.0% |     539 | `C2Compiler::compile_method` | `libjvm.dylib` |

##### `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

|      % | Samples | Caller           | Location                                    |
| -----: | ------: | ---------------- | ------------------------------------------- |
| 100.0% |     404 | `main(String[])` | `org.jetbrains.kotlin.preloading.Preloader` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

|     % | Samples | Caller                     | Location                                    |
| ----: | ------: | -------------------------- | ------------------------------------------- |
| 99.7% |     325 | `run(String[])`            | `org.jetbrains.kotlin.preloading.Preloader` |
|  0.3% |       1 | `getEnumConstantsShared()` | `java.lang.Class`                           |
|  0.3% |       1 | `rtVersion()`              | `com.intellij.util.lang.JavaVersion`        |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`)

|      % | Samples | Caller           | Location                                     |
| -----: | ------: | ---------------- | -------------------------------------------- |
| 100.0% |     325 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % | Samples | Caller                         | Location                                             |
| -----: | ------: | ------------------------------ | ---------------------------------------------------- |
| 100.0% |     325 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000f001008400` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000f001008400`)

|      % | Samples | Caller                           | Location                                            |
| -----: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% |     325 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f001009800` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f001009800`)

|      % | Samples | Caller                                           | Location                           |
| -----: | ------: | ------------------------------------------------ | ---------------------------------- |
| 100.0% |     325 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Caller                         | Location                                          |
| -----: | ------: | ------------------------------ | ------------------------------------------------- |
| 100.0% |     325 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % | Samples | Caller                     | Location                                          |
| -----: | ------: | -------------------------- | ------------------------------------------------- |
| 100.0% |     325 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % | Samples | Caller                     | Location                   |
| -----: | ------: | -------------------------- | -------------------------- |
| 100.0% |     325 | `invoke(Object, Object[])` | `java.lang.reflect.Method` |

##### `doMain(CLICompiler, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % | Samples | Caller           | Location                                               |
| -----: | ------: | ---------------- | ------------------------------------------------------ |
| 100.0% |     324 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion` |

##### `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % | Samples | Caller                          | Location                                                |
| -----: | ------: | ------------------------------- | ------------------------------------------------------- |
| 100.0% |     323 | `doMain(CLICompiler, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `exec(PrintStream, Services, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Caller                                         | Location                                      |
| -----: | ------: | ---------------------------------------------- | --------------------------------------------- |
| 100.0% |     322 | `exec(PrintStream, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `exec(PrintStream, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Caller                                                 | Location                                                |
| -----: | ------: | ------------------------------------------------------ | ------------------------------------------------------- |
| 100.0% |     322 | `doMainNoExit(CLICompiler, String[], MessageRenderer)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % | Samples | Caller                                                                                             | Location                                                |
| -----: | ------: | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |     322 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `exec(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Caller                                                   | Location                                      |
| -----: | ------: | -------------------------------------------------------- | --------------------------------------------- |
| 100.0% |     317 | `exec(PrintStream, Services, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % | Samples | Caller                                                                 | Location                                     |
| -----: | ------: | ---------------------------------------------------------------------- | -------------------------------------------- |
| 100.0% |     307 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % | Samples | Caller                                                          | Location                                      |
| -----: | ------: | --------------------------------------------------------------- | --------------------------------------------- |
| 100.0% |     307 | `execImpl(MessageCollector, Services, CommonCompilerArguments)` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Caller                                                      | Location                                      |
| -----: | ------: | ----------------------------------------------------------- | --------------------------------------------- |
| 100.0% |     307 | `exec(MessageCollector, Services, CommonCompilerArguments)` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Caller                                                                                                                                        | Location                                                |
| -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |     306 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Caller                                                         | Location                                                |
| -----: | ------: | -------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |     306 | `execute(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `execute(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Caller                                                                | Location                                     |
| -----: | ------: | --------------------------------------------------------------------- | -------------------------------------------- |
| 100.0% |     306 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Caller                                                                                              | Location                                                |
| -----: | ------: | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |     304 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

|      % | Samples | Caller                              | Location                                          |
| -----: | ------: | ----------------------------------- | ------------------------------------------------- |
| 100.0% |     302 | `phaseBody(LoggingContext, Object)` | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase` |

##### `phaseBody(LoggingContext, Object)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

|      % | Samples | Caller                                                     | Location                                                |
| -----: | ------: | ---------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |     302 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase` |

##### `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`)

|      % | Samples | Caller                                                                | Location                                                          |
| -----: | ------: | --------------------------------------------------------------------- | ----------------------------------------------------------------- |
| 100.0% |     302 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)`            | `org.jetbrains.kotlin.backend.common.phaser.CompositePhase`       |
|   6.0% |      18 | `invoke(PhaseConfig, PhaserState, LoweringContext, IrModuleFragment)` | `org.jetbrains.kotlin.backend.common.phaser.PerformByIrFilePhase` |
|   2.0% |       6 | `runPhase(NamedCompilerPhase, Object, boolean)`                       | `org.jetbrains.kotlin.backend.common.phaser.PhaseEngine`          |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |     249 | `Compile::Compile` | `libjvm.dylib` |

##### `Compiler::compile_method` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |     235 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `Compilation::compile_method` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |     234 | `Compilation::Compilation` | `libjvm.dylib` |

##### `Compilation::Compilation` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |     234 | `Compiler::compile_method` | `libjvm.dylib` |

##### `Compilation::compile_java_method` (`libjvm.dylib`)

|      % | Samples | Caller                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |     220 | `Compilation::compile_method` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |     216 | `Compile::Compile` | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|      % | Samples | Caller              | Location       |
| -----: | ------: | ------------------- | -------------- |
| 100.0% |     140 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % | Samples | Caller                    | Location       |
| ----: | ------: | ------------------------- | -------------- |
| 51.4% |      57 | `Compile::Optimize`       | `libjvm.dylib` |
| 48.6% |      54 | `Compile::optimize_loops` | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |      98 | `PhaseIdealLoop::optimize` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|      % | Samples | Caller                           | Location       |
| -----: | ------: | -------------------------------- | -------------- |
| 100.0% |      97 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |

##### `Compilation::emit_lir` (`libjvm.dylib`)

|      % | Samples | Caller                             | Location       |
| -----: | ------: | ---------------------------------- | -------------- |
| 100.0% |      96 | `Compilation::compile_java_method` | `libjvm.dylib` |

##### `LinearScan::do_linear_scan` (`libjvm.dylib`)

|      % | Samples | Caller                  | Location       |
| -----: | ------: | ----------------------- | -------------- |
| 100.0% |      80 | `Compilation::emit_lir` | `libjvm.dylib` |

##### `Compilation::build_hir` (`libjvm.dylib`)

|      % | Samples | Caller                             | Location       |
| -----: | ------: | ---------------------------------- | -------------- |
| 100.0% |      79 | `Compilation::compile_java_method` | `libjvm.dylib` |

##### `inflate(byte[], int, int)` (`java.util.zip.Inflater`)

|     % | Samples | Caller                   | Location                            |
| ----: | ------: | ------------------------ | ----------------------------------- |
| 95.8% |      69 | `read(byte[], int, int)` | `java.util.zip.InflaterInputStream` |
|  4.2% |       3 | `inflate(byte[])`        | `java.util.zip.Inflater`            |

##### `read(byte[], int, int)` (`java.util.zip.ZipInputStream`)

|      % | Samples | Caller         | Location                    |
| -----: | ------: | -------------- | --------------------------- |
| 100.0% |      72 | `read(byte[])` | `java.io.FilterInputStream` |

##### `read(byte[])` (`java.io.FilterInputStream`)

|      % | Samples | Caller                                                  | Location                                               |
| -----: | ------: | ------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% |      72 | `loadAllClassesFromJars(Collection, int, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `Java_java_util_zip_Inflater_inflateBytesBytes` (`libzip.dylib`)

|      % | Samples | Caller                                                        | Location                 |
| -----: | ------: | ------------------------------------------------------------- | ------------------------ |
| 100.0% |      71 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` | `java.util.zip.Inflater` |

##### `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`)

|      % | Samples | Caller  | Location                                         |
| -----: | ------: | ------- | ------------------------------------------------ |
| 100.0% |      71 | `run()` | `java.util.concurrent.ThreadPoolExecutor$Worker` |

##### `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`)

|      % | Samples | Caller                      | Location           |
| -----: | ------: | --------------------------- | ------------------ |
| 100.0% |      71 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `runWith(Object, Runnable)` (`java.lang.Thread`)

|      % | Samples | Caller  | Location           |
| -----: | ------: | ------- | ------------------ |
| 100.0% |      71 | `run()` | `java.lang.Thread` |

##### `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`)

|      % | Samples | Caller                      | Location                 |
| -----: | ------: | --------------------------- | ------------------------ |
| 100.0% |      71 | `inflate(byte[], int, int)` | `java.util.zip.Inflater` |

##### `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`)

|      % | Samples | Caller                                 | Location                                  |
| -----: | ------: | -------------------------------------- | ----------------------------------------- |
| 100.0% |      70 | `runWorker(ThreadPoolExecutor$Worker)` | `java.util.concurrent.ThreadPoolExecutor` |

##### `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`)

|      % | Samples | Caller                   | Location                       |
| -----: | ------: | ------------------------ | ------------------------------ |
| 100.0% |      70 | `read(byte[], int, int)` | `java.util.zip.ZipInputStream` |

##### `loadClass(String, boolean)` (`java.lang.ClassLoader`)

|     % | Samples | Caller                       | Location                                                 |
| ----: | ------: | ---------------------------- | -------------------------------------------------------- |
| 96.8% |      61 | `loadClass(String, boolean)` | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |
|  3.2% |       2 | `loadClass(String)`          | `java.lang.ClassLoader`                                  |

##### `PhaseIterGVN::optimize` (`libjvm.dylib`)

|     % | Samples | Caller                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 66.1% |      41 | `Compile::Optimize`                    | `libjvm.dylib` |
| 17.7% |      11 | `PhaseIdealLoop::optimize`             | `libjvm.dylib` |
| 14.5% |       9 | `PhaseMacroExpand::expand_macro_nodes` | `libjvm.dylib` |
|  1.6% |       1 | `Compile::remove_speculative_types`    | `libjvm.dylib` |

##### `KlassFactory::create_from_stream` (`libjvm.dylib`)

|     % | Samples | Caller                                               | Location       |
| ----: | ------: | ---------------------------------------------------- | -------------- |
| 95.2% |      59 | `SystemDictionary::resolve_class_from_stream`        | `libjvm.dylib` |
|  4.8% |       3 | `SystemDictionary::resolve_hidden_class_from_stream` | `libjvm.dylib` |

##### `defineClass(String, byte[], int, int, ProtectionDomain)` (`java.lang.ClassLoader`)

|     % | Samples | Caller                                              | Location                          |
| ----: | ------: | --------------------------------------------------- | --------------------------------- |
| 96.8% |      60 | `defineClass(String, byte[], int, int)`             | `java.lang.ClassLoader`           |
|  3.2% |       2 | `defineClass(String, byte[], int, int, CodeSource)` | `java.security.SecureClassLoader` |

##### `WorkerThread::run` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |      61 | `Thread::call_run` | `libjvm.dylib` |

##### `SystemDictionary::resolve_class_from_stream` (`libjvm.dylib`)

|     % | Samples | Caller                    | Location       |
| ----: | ------: | ------------------------- | -------------- |
| 98.4% |      60 | `jvm_define_class_common` | `libjvm.dylib` |
|  1.6% |       1 | `jni_DefineClass`         | `libjvm.dylib` |

##### `jvm_define_class_common` (`libjvm.dylib`)

|      % | Samples | Caller                      | Location       |
| -----: | ------: | --------------------------- | -------------- |
| 100.0% |      60 | `JVM_DefineClassWithSource` | `libjvm.dylib` |

##### `JVM_DefineClassWithSource` (`libjvm.dylib`)

|      % | Samples | Caller                                    | Location        |
| -----: | ------: | ----------------------------------------- | --------------- |
| 100.0% |      60 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib` |

##### `Java_java_lang_ClassLoader_defineClass1` (`libjava.dylib`)

|      % | Samples | Caller                                                                          | Location                |
| -----: | ------: | ------------------------------------------------------------------------------- | ----------------------- |
| 100.0% |      60 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader` |

##### `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` (`java.lang.ClassLoader`)

|      % | Samples | Caller                                                    | Location                |
| -----: | ------: | --------------------------------------------------------- | ----------------------- |
| 100.0% |      60 | `defineClass(String, byte[], int, int, ProtectionDomain)` | `java.lang.ClassLoader` |

##### `defineClass(String, byte[], int, int)` (`java.lang.ClassLoader`)

|      % | Samples | Caller              | Location                                                 |
| -----: | ------: | ------------------- | -------------------------------------------------------- |
| 100.0% |      60 | `findClass(String)` | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |

##### `PhaseIterGVN::transform_old` (`libjvm.dylib`)

|      % | Samples | Caller                   | Location       |
| -----: | ------: | ------------------------ | -------------- |
| 100.0% |      59 | `PhaseIterGVN::optimize` | `libjvm.dylib` |
|   1.7% |       1 | `IfNode::Ideal_common`   | `libjvm.dylib` |

##### `Parse::Parse` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |      56 | `ParseGenerator::generate` | `libjvm.dylib` |

##### `ParseGenerator::generate` (`libjvm.dylib`)

|      % | Samples | Caller                             | Location       |
| -----: | ------: | ---------------------------------- | -------------- |
| 100.0% |      56 | `Compile::Compile`                 | `libjvm.dylib` |
|  60.7% |      34 | `PredictedCallGenerator::generate` | `libjvm.dylib` |
|  48.2% |      27 | `Parse::do_call`                   | `libjvm.dylib` |

##### `Compile::optimize_loops` (`libjvm.dylib`)

|      % | Samples | Caller              | Location       |
| -----: | ------: | ------------------- | -------------- |
| 100.0% |      54 | `Compile::Optimize` | `libjvm.dylib` |

##### `ClassFileParser::ClassFileParser` (`libjvm.dylib`)

|      % | Samples | Caller                             | Location       |
| -----: | ------: | ---------------------------------- | -------------- |
| 100.0% |      54 | `KlassFactory::create_from_stream` | `libjvm.dylib` |

##### `GraphBuilder::GraphBuilder` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |      53 | `IRScope::IRScope` | `libjvm.dylib` |

##### `IRScope::IRScope` (`libjvm.dylib`)

|      % | Samples | Caller   | Location       |
| -----: | ------: | -------- | -------------- |
| 100.0% |      53 | `IR::IR` | `libjvm.dylib` |

##### `IR::IR` (`libjvm.dylib`)

|      % | Samples | Caller                   | Location       |
| -----: | ------: | ------------------------ | -------------- |
| 100.0% |      53 | `Compilation::build_hir` | `libjvm.dylib` |

##### `Parse::do_one_block` (`libjvm.dylib`)

|      % | Samples | Caller                 | Location       |
| -----: | ------: | ---------------------- | -------------- |
| 100.0% |      52 | `Parse::do_all_blocks` | `libjvm.dylib` |

##### `Parse::do_all_blocks` (`libjvm.dylib`)

|      % | Samples | Caller         | Location       |
| -----: | ------: | -------------- | -------------- |
| 100.0% |      52 | `Parse::Parse` | `libjvm.dylib` |

##### `I2C/C2I adapters(0xb)` (`<unknown>`)

|     % | Samples | Caller                                                                                                                | Location                                                                 |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| 14.3% |       1 | `<init>(int, Set)`                                                                                                    | `org.jetbrains.org.objectweb.asm.tree.analysis.SourceValue`              |
| 14.3% |       1 | `execute(int, int, Symbol, SymbolTable)`                                                                              | `org.jetbrains.org.objectweb.asm.Frame`                                  |
| 14.3% |       1 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)`                                          | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`                   |
| 14.3% |       1 | `resolveVariableAccessAndSelectCandidate(FirQualifiedAccessExpression, boolean, boolean, FirElement, ResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`                 |
| 14.3% |       1 | `isWrappedIntegerOperator(FirBasedSymbol)`                                                                            | `org.jetbrains.kotlin.fir.scopes.impl.FirIntegerConstantOperatorScopeKt` |

##### `I2C/C2I adapters(0xbb)` (`<unknown>`)

|     % | Samples | Caller                                                                                                | Location                                                                         |
| ----: | ------: | ----------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| 20.0% |       1 | `convertQualifiedExpression(LighterASTNode)`                                                          | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirExpressionBuilder`  |
| 20.0% |       1 | `doParseModifierListBody(Consumer, TokenSet, KotlinParsing$AnnotationParsingMode, TokenSet, boolean)` | `org.jetbrains.kotlin.parsing.KotlinParsing`                                     |
| 20.0% |       1 | `push(Object)`                                                                                        | `java.util.ArrayDeque`                                                           |
| 20.0% |       1 | `typeDepth(TypeSystemCommonSuperTypesContext, KotlinTypeMarker)`                                      | `org.jetbrains.kotlin.types.model.TypeSystemCommonSuperTypesContextContextualKt` |

##### `itable stub` (`<unknown>`)

|      % | Samples | Caller               | Location                                         |
| -----: | ------: | -------------------- | ------------------------------------------------ |
| 100.0% |       1 | `getFunctionCount()` | `org.jetbrains.kotlin.metadata.ProtoBuf$Package` |

##### `I2C/C2I adapters(0xbbaaaab)` (`<unknown>`)

|      % | Samples | Caller                                               | Location                                                                |
| -----: | ------: | ---------------------------------------------------- | ----------------------------------------------------------------------- |
| 100.0% |       1 | `replaceEntryWithNode(Object[], int, int, TrieNode)` | `kotlinx.collections.immutable.implementations.immutableMap.TrieNodeKt` |

##### `I2C/C2I adapters(0xbbb)` (`<unknown>`)

|      % | Samples | Caller                       | Location                                                 |
| -----: | ------: | ---------------------------- | -------------------------------------------------------- |
| 100.0% |       1 | `accept(FirVisitor, Object)` | `org.jetbrains.kotlin.fir.expressions.FirWhenExpression` |

##### `I2C/C2I adapters(0xaa)` (`<unknown>`)

|      % | Samples | Caller                         | Location                            |
| -----: | ------: | ------------------------------ | ----------------------------------- |
| 100.0% |       1 | `closedTableSize(int, double)` | `com.google.common.collect.Hashing` |

##### `I2C/C2I adapters(0xbbaab)` (`<unknown>`)

|      % | Samples | Caller                                 | Location                                |
| -----: | ------: | -------------------------------------- | --------------------------------------- |
| 100.0% |       1 | `isFakeLocalVariableForInline(String)` | `org.jetbrains.kotlin.load.java.JvmAbi` |

#### Callees

Callees with the largest contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `_pthread_start` (`libsystem_pthread.dylib`)

|     % | Samples | Callee                | Location       |
| ----: | ------: | --------------------- | -------------- |
| 99.9% |     873 | `thread_native_entry` | `libjvm.dylib` |
|  0.1% |       1 | `ThreadJavaMain`      | `libjli.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

|      % | Samples | Callee           | Location                  |
| -----: | ------: | ---------------- | ------------------------- |
| 100.0% |     874 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 91.9% |     802 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
|  7.0% |      61 | `WorkerThread::run`             | `libjvm.dylib` |
|  1.0% |       9 | `VMThread::run`                 | `libjvm.dylib` |
|  0.1% |       1 | `WatcherThread::run`            | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % | Samples | Callee             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |     873 | `Thread::call_run` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|     % | Samples | Callee                                         | Location       |
| ----: | ------: | ---------------------------------------------- | -------------- |
| 98.1% |     787 | `CompileBroker::invoke_compiler_on_method`     | `libjvm.dylib` |
|  1.7% |      14 | `CompileQueue::get`                            | `libjvm.dylib` |
|  0.1% |       1 | `CompileBroker::possibly_add_compiler_threads` | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|      % | Samples | Callee                                | Location       |
| -----: | ------: | ------------------------------------- | -------------- |
| 100.0% |     802 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|     % | Samples | Callee                                    | Location       |
| ----: | ------: | ----------------------------------------- | -------------- |
| 68.6% |     540 | `C2Compiler::compile_method`              | `libjvm.dylib` |
| 29.9% |     235 | `Compiler::compile_method`                | `libjvm.dylib` |
|  0.8% |       6 | `ciEnv::get_method_from_handle`           | `libjvm.dylib` |
|  0.4% |       3 | `CompilationLog::log_compile`             | `libjvm.dylib` |
|  0.1% |       1 | `CompileBroker::update_compile_perf_data` | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|     % | Samples | Callee              | Location       |
| ----: | ------: | ------------------- | -------------- |
| 99.8% |     539 | `Compile::Compile`  | `libjvm.dylib` |
|  0.2% |       1 | `Compile::~Compile` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|     % | Samples | Callee                                   | Location       |
| ----: | ------: | ---------------------------------------- | -------------- |
| 46.2% |     249 | `Compile::Code_Gen`                      | `libjvm.dylib` |
| 40.1% |     216 | `Compile::Optimize`                      | `libjvm.dylib` |
| 10.4% |      56 | `ParseGenerator::generate`               | `libjvm.dylib` |
|  2.4% |      13 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |
|  0.2% |       1 | `Chunk::next_chop`                       | `libjvm.dylib` |

##### `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

|     % | Samples | Callee                                                                       | Location                                               |
| ----: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------------ |
| 80.4% |     325 | `invoke(Object, Object[])`                                                   | `java.lang.reflect.Method`                             |
| 19.3% |      78 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |
|  0.2% |       1 | `stream()`                                                                   | `java.util.Collection`                                 |

##### `main(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

|      % | Samples | Callee          | Location                                    |
| -----: | ------: | --------------- | ------------------------------------------- |
| 100.0% |     404 | `run(String[])` | `org.jetbrains.kotlin.preloading.Preloader` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

|     % | Samples | Callee                     | Location                                          |
| ----: | ------: | -------------------------- | ------------------------------------------------- |
| 99.7% |     325 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |
|  0.3% |       1 | `acquireMethodAccessor()`  | `java.lang.reflect.Method`                        |
|  0.3% |       1 | `isCallerSensitive()`      | `java.lang.reflect.Method`                        |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`)

|     % | Samples | Callee                          | Location                                                |
| ----: | ------: | ------------------------------- | ------------------------------------------------------- |
| 99.7% |     324 | `doMain(CLICompiler, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
|  0.3% |       1 | `<init>()`                      | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % | Samples | Callee           | Location                                               |
| -----: | ------: | ---------------- | ------------------------------------------------------ |
| 100.0% |     325 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000f001008400`)

|      % | Samples | Callee           | Location                                     |
| -----: | ------: | ---------------- | -------------------------------------------- |
| 100.0% |     325 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f001009800`)

|      % | Samples | Callee                         | Location                                             |
| -----: | ------: | ------------------------------ | ---------------------------------------------------- |
| 100.0% |     325 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000f001008400` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Callee                           | Location                                            |
| -----: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% |     325 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f001009800` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % | Samples | Callee                                           | Location                           |
| -----: | ------: | ------------------------------------------------ | ---------------------------------- |
| 100.0% |     325 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % | Samples | Callee                         | Location                                          |
| -----: | ------: | ------------------------------ | ------------------------------------------------- |
| 100.0% |     325 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `doMain(CLICompiler, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|     % | Samples | Callee                                                                                             | Location                                                   |
| ----: | ------: | -------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| 99.7% |     323 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`    |
|  0.3% |       1 | `getValue()`                                                                                       | `org.jetbrains.kotlin.cli.common.CompilerSystemProperties` |

##### `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|     % | Samples | Callee                                                 | Location                                                |
| ----: | ------: | ------------------------------------------------------ | ------------------------------------------------------- |
| 99.7% |     322 | `doMainNoExit(CLICompiler, String[], MessageRenderer)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
|  0.3% |       1 | `defaultMessageRenderer()`                             | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `exec(PrintStream, Services, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|     % | Samples | Callee                                                                               | Location                                                                |
| ----: | ------: | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------- |
| 98.4% |     317 | `exec(MessageCollector, Services, CommonCompilerArguments)`                          | `org.jetbrains.kotlin.cli.common.CLICompiler`                           |
|  1.6% |       5 | `parseCommandLineArguments$default(List, CommonToolArguments, boolean, int, Object)` | `org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt` |

##### `exec(PrintStream, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Callee                                                   | Location                                      |
| -----: | ------: | -------------------------------------------------------- | --------------------------------------------- |
| 100.0% |     322 | `exec(PrintStream, Services, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % | Samples | Callee                                         | Location                                      |
| -----: | ------: | ---------------------------------------------- | --------------------------------------------- |
| 100.0% |     322 | `exec(PrintStream, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `exec(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|     % | Samples | Callee                                                          | Location                                      |
| ----: | ------: | --------------------------------------------------------------- | --------------------------------------------- |
| 96.8% |     307 | `execImpl(MessageCollector, Services, CommonCompilerArguments)` | `org.jetbrains.kotlin.cli.common.CLICompiler` |
|  3.2% |      10 | `<clinit>()`                                                    | `org.jetbrains.kotlin.cli.common.ArgumentsKt` |

##### `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|     % | Samples | Callee                                                         | Location                                                |
| ----: | ------: | -------------------------------------------------------------- | ------------------------------------------------------- |
| 99.7% |     306 | `execute(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
|  0.3% |       1 | `getDefaultPerformanceManager()`                               | `org.jetbrains.kotlin.cli.common.CLICompiler`           |

##### `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % | Samples | Callee                                                                | Location                                     |
| -----: | ------: | --------------------------------------------------------------------- | -------------------------------------------- |
| 100.0% |     307 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Callee                                                                 | Location                                     |
| -----: | ------: | ---------------------------------------------------------------------- | -------------------------------------------- |
| 100.0% |     307 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|     % | Samples | Callee                                         | Location                                                 |
| ----: | ------: | ---------------------------------------------- | -------------------------------------------------------- |
| 99.3% |     304 | `runPhasedPipeline(ArgumentsPipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`  |
|  0.3% |       1 | `loadClass(String)`                            | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |
|  0.3% |       1 | `disposeRootInWriteAction(Disposable)`         | `org.jetbrains.kotlin.cli.common.UtilsKt`                |

##### `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Callee                                                                                              | Location                                                |
| -----: | ------: | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |     306 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `execute(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Callee                                                                                                                                        | Location                                                |
| -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |     306 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|     % | Samples | Callee                                                                          | Location                                                                    |
| ----: | ------: | ------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| 99.3% |     302 | `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)`            | `org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`                        |
|  0.7% |       2 | `reportToMessageCollector(BaseDiagnosticsCollector, MessageCollector, boolean)` | `org.jetbrains.kotlin.cli.common.fir.FirDiagnosticsCompilerResultsReporter` |

##### `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

|     % | Samples | Callee                           | Location                                                              |
| ----: | ------: | -------------------------------- | --------------------------------------------------------------------- |
| 78.1% |     236 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`      |
| 10.3% |      31 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`       |
|  9.6% |      29 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFir2IrPipelinePhase`        |
|  1.7% |       5 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmConfigurationPipelinePhase` |
|  0.3% |       1 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmWriteOutputsPhase`          |

##### `phaseBody(LoggingContext, Object)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

|      % | Samples | Callee                                         | Location                                          |
| -----: | ------: | ---------------------------------------------- | ------------------------------------------------- |
| 100.0% |     302 | `phaseBody(PipelineContext, PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase` |

##### `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`)

|      % | Samples | Callee                              | Location                                                         |
| -----: | ------: | ----------------------------------- | ---------------------------------------------------------------- |
| 100.0% |     302 | `phaseBody(LoggingContext, Object)` | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`                |
|   5.6% |      17 | `phaseBody(LoggingContext, Object)` | `org.jetbrains.kotlin.backend.common.phaser.FileLoweringPhase`   |
|   2.0% |       6 | `phaseBody(LoggingContext, Object)` | `org.jetbrains.kotlin.backend.common.phaser.ModuleLoweringPhase` |
|   0.3% |       1 | `isVerbose(NamedCompilerPhase)`     | `org.jetbrains.kotlin.config.phaser.PhaseConfig`                 |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|     % | Samples | Callee                            | Location       |
| ----: | ------: | --------------------------------- | -------------- |
| 56.2% |     140 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
| 15.7% |      39 | `Matcher::match`                  | `libjvm.dylib` |
| 13.7% |      34 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |
| 13.3% |      33 | `PhaseOutput::Output`             | `libjvm.dylib` |
|  0.8% |       2 | `PhaseOutput::install_code`       | `libjvm.dylib` |

##### `Compiler::compile_method` (`libjvm.dylib`)

|     % | Samples | Callee                     | Location       |
| ----: | ------: | -------------------------- | -------------- |
| 99.6% |     234 | `Compilation::Compilation` | `libjvm.dylib` |
|  0.4% |       1 | `Chunk::next_chop`         | `libjvm.dylib` |

##### `Compilation::compile_method` (`libjvm.dylib`)

|     % | Samples | Callee                             | Location       |
| ----: | ------: | ---------------------------------- | -------------- |
| 94.0% |     220 | `Compilation::compile_java_method` | `libjvm.dylib` |
|  5.6% |      13 | `ciEnv::register_method`           | `libjvm.dylib` |
|  0.4% |       1 | `Dependencies::assert_common_1`    | `libjvm.dylib` |

##### `Compilation::Compilation` (`libjvm.dylib`)

|      % | Samples | Callee                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |     234 | `Compilation::compile_method` | `libjvm.dylib` |

##### `Compilation::compile_java_method` (`libjvm.dylib`)

|     % | Samples | Callee                         | Location       |
| ----: | ------: | ------------------------------ | -------------- |
| 43.6% |      96 | `Compilation::emit_lir`        | `libjvm.dylib` |
| 35.9% |      79 | `Compilation::build_hir`       | `libjvm.dylib` |
| 19.5% |      43 | `Compilation::emit_code_body`  | `libjvm.dylib` |
|  0.9% |       2 | `ciMethod::ensure_method_data` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|     % | Samples | Callee                         | Location       |
| ----: | ------: | ------------------------------ | -------------- |
| 26.4% |      57 | `PhaseIdealLoop::optimize`     | `libjvm.dylib` |
| 25.0% |      54 | `Compile::optimize_loops`      | `libjvm.dylib` |
| 19.0% |      41 | `PhaseIterGVN::optimize`       | `libjvm.dylib` |
|  8.8% |      19 | `PhaseCCP::PhaseCCP`           | `libjvm.dylib` |
|  5.6% |      12 | `ConnectionGraph::do_analysis` | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|     % | Samples | Callee                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 17.1% |      24 | `PhaseChaitin::build_ifg_physical`         | `libjvm.dylib` |
| 15.0% |      21 | `PhaseLive::compute`                       | `libjvm.dylib` |
| 14.3% |      20 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |
| 12.9% |      18 | `PhaseChaitin::Split`                      | `libjvm.dylib` |
|  5.7% |       8 | `PhaseChaitin::gather_lrg_masks`           | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % | Samples | Callee                           | Location                   |
| ----: | ------: | -------------------------------- | -------------------------- |
| 88.3% |      98 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib`             |
|  9.9% |      11 | `PhaseIterGVN::optimize`         | `libjvm.dylib`             |
|  0.9% |       1 | `_platform_memset`               | `libsystem_platform.dylib` |
|  0.9% |       1 | `Chunk::next_chop`               | `libjvm.dylib`             |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|     % | Samples | Callee                               | Location       |
| ----: | ------: | ------------------------------------ | -------------- |
| 99.0% |      97 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |
|  1.0% |       1 | `PhaseIdealLoop::Dominators`         | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|     % | Samples | Callee                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 29.9% |      29 | `PhaseIdealLoop::build_loop_late`      | `libjvm.dylib` |
| 18.6% |      18 | `PhaseIdealLoop::split_if_with_blocks` | `libjvm.dylib` |
| 13.4% |      13 | `PhaseIdealLoop::build_loop_early`     | `libjvm.dylib` |
| 11.3% |      11 | `PhaseIdealLoop::Dominators`           | `libjvm.dylib` |
|  4.1% |       4 | `PhaseIdealLoop::build_loop_tree`      | `libjvm.dylib` |

##### `Compilation::emit_lir` (`libjvm.dylib`)

|     % | Samples | Callee                       | Location       |
| ----: | ------: | ---------------------------- | -------------- |
| 83.3% |      80 | `LinearScan::do_linear_scan` | `libjvm.dylib` |
| 16.7% |      16 | `BlockList::iterate_forward` | `libjvm.dylib` |

##### `LinearScan::do_linear_scan` (`libjvm.dylib`)

|     % | Samples | Callee                                | Location       |
| ----: | ------: | ------------------------------------- | -------------- |
| 37.5% |      30 | `LinearScan::allocate_registers`      | `libjvm.dylib` |
| 23.8% |      19 | `LinearScan::assign_reg_num`          | `libjvm.dylib` |
| 12.5% |      10 | `LinearScan::build_intervals`         | `libjvm.dylib` |
| 10.0% |       8 | `LinearScan::compute_local_live_sets` | `libjvm.dylib` |
|  2.5% |       2 | `EdgeMoveOptimizer::optimize`         | `libjvm.dylib` |

##### `Compilation::build_hir` (`libjvm.dylib`)

|     % | Samples | Callee                                       | Location       |
| ----: | ------: | -------------------------------------------- | -------------- |
| 67.1% |      53 | `IR::IR`                                     | `libjvm.dylib` |
| 13.9% |      11 | `GlobalValueNumbering::GlobalValueNumbering` | `libjvm.dylib` |
|  8.9% |       7 | `IR::eliminate_null_checks`                  | `libjvm.dylib` |
|  5.1% |       4 | `IR::compute_use_counts`                     | `libjvm.dylib` |
|  2.5% |       2 | `IR::compute_code`                           | `libjvm.dylib` |

##### `inflate(byte[], int, int)` (`java.util.zip.Inflater`)

|     % | Samples | Callee                                                        | Location                 |
| ----: | ------: | ------------------------------------------------------------- | ------------------------ |
| 98.6% |      71 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` | `java.util.zip.Inflater` |

##### `read(byte[], int, int)` (`java.util.zip.ZipInputStream`)

|     % | Samples | Callee                     | Location                            |
| ----: | ------: | -------------------------- | ----------------------------------- |
| 97.2% |      70 | `read(byte[], int, int)`   | `java.util.zip.InflaterInputStream` |
|  2.8% |       2 | `update(byte[], int, int)` | `java.util.zip.CRC32`               |

##### `read(byte[])` (`java.io.FilterInputStream`)

|      % | Samples | Callee                   | Location                       |
| -----: | ------: | ------------------------ | ------------------------------ |
| 100.0% |      72 | `read(byte[], int, int)` | `java.util.zip.ZipInputStream` |

##### `Java_java_util_zip_Inflater_inflateBytesBytes` (`libzip.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 71.8% |      51 | `inflate_fast`                  | `libzip.dylib` |
| 25.4% |      18 | `inflate`                       | `libzip.dylib` |
|  2.8% |       2 | `jni_GetPrimitiveArrayCritical` | `libjvm.dylib` |

##### `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`)

|     % | Samples | Callee      | Location                                          |
| ----: | ------: | ----------- | ------------------------------------------------- |
| 98.6% |      70 | `run()`     | `java.util.concurrent.CompletableFuture$AsyncRun` |
|  1.4% |       1 | `getTask()` | `java.util.concurrent.ThreadPoolExecutor`         |

##### `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`)

|      % | Samples | Callee                                 | Location                                  |
| -----: | ------: | -------------------------------------- | ----------------------------------------- |
| 100.0% |      71 | `runWorker(ThreadPoolExecutor$Worker)` | `java.util.concurrent.ThreadPoolExecutor` |

##### `runWith(Object, Runnable)` (`java.lang.Thread`)

|      % | Samples | Callee  | Location                                         |
| -----: | ------: | ------- | ------------------------------------------------ |
| 100.0% |      71 | `run()` | `java.util.concurrent.ThreadPoolExecutor$Worker` |

##### `run()` (`java.lang.Thread`)

|      % | Samples | Callee                      | Location           |
| -----: | ------: | --------------------------- | ------------------ |
| 100.0% |      71 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`)

|      % | Samples | Callee                                          | Location       |
| -----: | ------: | ----------------------------------------------- | -------------- |
| 100.0% |      71 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `libzip.dylib` |

##### `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`)

|      % | Samples | Callee  | Location                                                                          |
| -----: | ------: | ------- | --------------------------------------------------------------------------------- |
| 100.0% |      70 | `run()` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000f0018923a0` |

##### `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`)

|     % | Samples | Callee                      | Location                            |
| ----: | ------: | --------------------------- | ----------------------------------- |
| 98.6% |      69 | `inflate(byte[], int, int)` | `java.util.zip.Inflater`            |
|  1.4% |       1 | `fill()`                    | `java.util.zip.InflaterInputStream` |

##### `loadClass(String, boolean)` (`java.lang.ClassLoader`)

|     % | Samples | Callee                    | Location                                                 |
| ----: | ------: | ------------------------- | -------------------------------------------------------- |
| 95.2% |      60 | `findClass(String)`       | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |
|  3.2% |       2 | `findClass(String)`       | `java.net.URLClassLoader`                                |
|  1.6% |       1 | `findLoadedClass(String)` | `java.lang.ClassLoader`                                  |

##### `PhaseIterGVN::optimize` (`libjvm.dylib`)

|     % | Samples | Callee                        | Location       |
| ----: | ------: | ----------------------------- | -------------- |
| 95.2% |      59 | `PhaseIterGVN::transform_old` | `libjvm.dylib` |
|  3.2% |       2 | `LoadNode::hash`              | `libjvm.dylib` |
|  1.6% |       1 | `PhiNode::Identity`           | `libjvm.dylib` |

##### `KlassFactory::create_from_stream` (`libjvm.dylib`)

|     % | Samples | Callee                                   | Location       |
| ----: | ------: | ---------------------------------------- | -------------- |
| 87.1% |      54 | `ClassFileParser::ClassFileParser`       | `libjvm.dylib` |
| 11.3% |       7 | `ClassFileParser::create_instance_klass` | `libjvm.dylib` |

##### `defineClass(String, byte[], int, int, ProtectionDomain)` (`java.lang.ClassLoader`)

|     % | Samples | Callee                                                                          | Location                |
| ----: | ------: | ------------------------------------------------------------------------------- | ----------------------- |
| 96.8% |      60 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader` |
|  3.2% |       2 | `postDefineClass(Class, ProtectionDomain)`                                      | `java.lang.ClassLoader` |

##### `WorkerThread::run` (`libjvm.dylib`)

|     % | Samples | Callee                            | Location                 |
| ----: | ------: | --------------------------------- | ------------------------ |
| 32.8% |      20 | `G1RebuildRSAndScrubTask::work`   | `libjvm.dylib`           |
| 31.1% |      19 | `G1EvacuateRegionsBaseTask::work` | `libjvm.dylib`           |
| 23.0% |      14 | `G1CMConcurrentMarkingTask::work` | `libjvm.dylib`           |
|  9.8% |       6 | `G1ParallelCleaningTask::work`    | `libjvm.dylib`           |
|  1.6% |       1 | `semaphore_wait_trap`             | `libsystem_kernel.dylib` |

##### `SystemDictionary::resolve_class_from_stream` (`libjvm.dylib`)

|     % | Samples | Callee                                    | Location       |
| ----: | ------: | ----------------------------------------- | -------------- |
| 96.7% |      59 | `KlassFactory::create_from_stream`        | `libjvm.dylib` |
|  3.3% |       2 | `SystemDictionary::define_instance_class` | `libjvm.dylib` |

##### `jvm_define_class_common` (`libjvm.dylib`)

|      % | Samples | Callee                                        | Location       |
| -----: | ------: | --------------------------------------------- | -------------- |
| 100.0% |      60 | `SystemDictionary::resolve_class_from_stream` | `libjvm.dylib` |

##### `JVM_DefineClassWithSource` (`libjvm.dylib`)

|      % | Samples | Callee                    | Location       |
| -----: | ------: | ------------------------- | -------------- |
| 100.0% |      60 | `jvm_define_class_common` | `libjvm.dylib` |

##### `Java_java_lang_ClassLoader_defineClass1` (`libjava.dylib`)

|      % | Samples | Callee                      | Location       |
| -----: | ------: | --------------------------- | -------------- |
| 100.0% |      60 | `JVM_DefineClassWithSource` | `libjvm.dylib` |

##### `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` (`java.lang.ClassLoader`)

|      % | Samples | Callee                                    | Location                                                 |
| -----: | ------: | ----------------------------------------- | -------------------------------------------------------- |
| 100.0% |      60 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib`                                          |
|  16.7% |      10 | `loadClass(String)`                       | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |

##### `defineClass(String, byte[], int, int)` (`java.lang.ClassLoader`)

|      % | Samples | Callee                                                    | Location                |
| -----: | ------: | --------------------------------------------------------- | ----------------------- |
| 100.0% |      60 | `defineClass(String, byte[], int, int, ProtectionDomain)` | `java.lang.ClassLoader` |

##### `PhaseIterGVN::transform_old` (`libjvm.dylib`)

|     % | Samples | Callee                                | Location       |
| ----: | ------: | ------------------------------------- | -------------- |
| 16.9% |      10 | `IfNode::Ideal`                       | `libjvm.dylib` |
| 13.6% |       8 | `PhaseIterGVN::subsume_node`          | `libjvm.dylib` |
| 11.9% |       7 | `RegionNode::Ideal`                   | `libjvm.dylib` |
|  8.5% |       5 | `NodeHash::hash_find_insert`          | `libjvm.dylib` |
|  8.5% |       5 | `PhaseIterGVN::add_users_to_worklist` | `libjvm.dylib` |

##### `Parse::Parse` (`libjvm.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 92.9% |      52 | `Parse::do_all_blocks`          | `libjvm.dylib` |
|  7.1% |       4 | `Parse::build_exits`            | `libjvm.dylib` |
|  1.8% |       1 | `GraphKit::set_map_clone`       | `libjvm.dylib` |
|  1.8% |       1 | `ciMethod::method_data`         | `libjvm.dylib` |
|  1.8% |       1 | `Dependencies::assert_common_1` | `libjvm.dylib` |

##### `ParseGenerator::generate` (`libjvm.dylib`)

|      % | Samples | Callee         | Location       |
| -----: | ------: | -------------- | -------------- |
| 100.0% |      56 | `Parse::Parse` | `libjvm.dylib` |

##### `Compile::optimize_loops` (`libjvm.dylib`)

|      % | Samples | Callee                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |      54 | `PhaseIdealLoop::optimize` | `libjvm.dylib` |

##### `ClassFileParser::ClassFileParser` (`libjvm.dylib`)

|     % | Samples | Callee                                        | Location       |
| ----: | ------: | --------------------------------------------- | -------------- |
| 88.9% |      48 | `ClassFileParser::parse_stream`               | `libjvm.dylib` |
| 11.1% |       6 | `ClassFileParser::post_process_parsed_stream` | `libjvm.dylib` |

##### `GraphBuilder::GraphBuilder` (`libjvm.dylib`)

|     % | Samples | Callee                               | Location       |
| ----: | ------: | ------------------------------------ | -------------- |
| 94.3% |      50 | `GraphBuilder::iterate_all_blocks`   | `libjvm.dylib` |
|  5.7% |       3 | `BlockListBuilder::BlockListBuilder` | `libjvm.dylib` |

##### `IRScope::IRScope` (`libjvm.dylib`)

|      % | Samples | Callee                       | Location       |
| -----: | ------: | ---------------------------- | -------------- |
| 100.0% |      53 | `GraphBuilder::GraphBuilder` | `libjvm.dylib` |

##### `IR::IR` (`libjvm.dylib`)

|      % | Samples | Callee             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |      53 | `IRScope::IRScope` | `libjvm.dylib` |

##### `Parse::do_one_block` (`libjvm.dylib`)

|     % | Samples | Callee                      | Location       |
| ----: | ------: | --------------------------- | -------------- |
| 90.4% |      47 | `Parse::do_call`            | `libjvm.dylib` |
| 13.5% |       7 | `Parse::do_field_access`    | `libjvm.dylib` |
|  3.8% |       2 | `Parse::do_one_bytecode`    | `libjvm.dylib` |
|  1.9% |       1 | `GraphKit::access_store_at` | `libjvm.dylib` |
|  1.9% |       1 | `Node::disconnect_inputs`   | `libjvm.dylib` |

##### `Parse::do_all_blocks` (`libjvm.dylib`)

|      % | Samples | Callee                          | Location       |
| -----: | ------: | ------------------------------- | -------------- |
| 100.0% |      52 | `Parse::do_one_block`           | `libjvm.dylib` |
|   1.9% |       1 | `Parse::ensure_phis_everywhere` | `libjvm.dylib` |
|   1.9% |       1 | `Parse::merge_common`           | `libjvm.dylib` |

##### `I2C/C2I adapters(0xb)` (`<unknown>`)

|     % | Samples | Callee                                  | Location       |
| ----: | ------: | --------------------------------------- | -------------- |
| 14.3% |       1 | `SharedRuntime::fixup_callers_callsite` | `libjvm.dylib` |

##### `I2C/C2I adapters(0xbb)` (`<unknown>`)

|     % | Samples | Callee                  | Location                   |
| ----: | ------: | ----------------------- | -------------------------- |
| 20.0% |       1 | `sys_icache_invalidate` | `libsystem_platform.dylib` |

## Hottest call stacks

Call stacks with the most samples collected in their leaf frame.

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ---: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 3.3% |      44 | `inflate_fast` (`libzip.dylib`) ← `Java_java_util_zip_Inflater_inflateBytesBytes` ← `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`) ← `inflate(byte[], int, int)` ← `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`) ← `read(byte[], int, int)` (`java.util.zip.ZipInputStream`) ← `read(byte[])` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                                                |
| 1.4% |      19 | `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                      |
| 1.1% |      15 | `PhaseChaitin::Split` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                   |
| 0.9% |      12 | `PhaseChaitin::elide_copy` (`libjvm.dylib`) ← `PhaseChaitin::post_allocate_copy_removal` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                 |
| 0.7% |      10 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait` ← `CompileQueue::get` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 0.7% |      10 | `Compile::identify_useful_nodes` (`libjvm.dylib`) ← `PhaseRemoveUseless::PhaseRemoveUseless` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                       |
| 0.7% |       9 | `inflate` (`libzip.dylib`) ← `Java_java_util_zip_Inflater_inflateBytesBytes` ← `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`) ← `inflate(byte[], int, int)` ← `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`) ← `read(byte[], int, int)` (`java.util.zip.ZipInputStream`) ← `read(byte[])` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                                                     |
| 0.6% |       8 | `PhaseLive::compute` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                    |
| 0.6% |       8 | `LinearScanWalker::free_collect_inactive_fixed` (`libjvm.dylib`) ← `LinearScanWalker::alloc_free_reg` ← `LinearScanWalker::activate_current` ← `IntervalWalker::walk_to` ← `LinearScan::allocate_registers` ← `LinearScan::do_linear_scan` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                    |
| 0.5% |       7 | `Matcher::xform` (`libjvm.dylib`) ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                         |
| 0.5% |       7 | `PhaseChaitin::post_allocate_copy_removal` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                              |
| 0.5% |       7 | `PhaseLive::add_liveout` (`libjvm.dylib`) ← `PhaseLive::compute` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                         |
| 0.5% |       7 | `LinearScanWalker::alloc_free_reg` (`libjvm.dylib`) ← `LinearScanWalker::activate_current` ← `IntervalWalker::walk_to` ← `LinearScan::allocate_registers` ← `LinearScan::do_linear_scan` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                      |
| 0.4% |       6 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` (`libjvm.dylib`) ← `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object` ← `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_to_pb` ← `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_region` ← `HeapRegionManager::par_iterate` ← `G1RebuildRSAndScrubTask::work` ← `WorkerThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                        |
| 0.4% |       6 | `inflate_fast` (`libzip.dylib`) ← `Java_java_util_zip_Inflater_inflateBytesBytes` ← `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`) ← `inflate(byte[], int, int)` ← `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`) ← `read(byte[], int, int)` (`java.util.zip.ZipInputStream`) ← `read(byte[])` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])` |
| 0.4% |       5 | `inflate_table` (`libzip.dylib`) ← `inflate` ← `Java_java_util_zip_Inflater_inflateBytesBytes` ← `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`) ← `inflate(byte[], int, int)` ← `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`) ← `read(byte[], int, int)` (`java.util.zip.ZipInputStream`) ← `read(byte[])` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                                   |
| 0.4% |       5 | `PhaseAggressiveCoalesce::insert_copies` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                |
| 0.4% |       5 | `PhaseIdealLoop::build_loop_early` (`libjvm.dylib`) ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                   |
| 0.4% |       5 | `PhaseOutput::BuildOopMaps` (`libjvm.dylib`) ← `PhaseOutput::Output` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                         |
| 0.4% |       5 | `PhaseIdealLoop::Dominators` (`libjvm.dylib`) ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                             |

# Allocated heap profile

Allocated 678 MiB over 1,349 samples (514 KiB per sample).

| Category         |     % |    Size | Samples |
| ---------------- | ----: | ------: | ------: |
| Standard library | 77.2% | 523 MiB |   1,040 |
| Ours             | 22.8% | 154 MiB |     309 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
├── 618 MiB (91.2%) main(String[]) at org.jetbrains.kotlin.preloading.Preloader
│   └── 618 MiB (91.2%) run(String[])
│       ├── 354 MiB (52.2%) preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler) at org.jetbrains.kotlin.preloading.ClassPreloadingUtils
│       │   └── … 354 MiB (52.2%) loadAllClassesFromJars(Collection, int, ClassHandler) at org.jetbrains.kotlin.preloading.ClassPreloadingUtils
│       │       ├── 182 MiB (26.8%) <init>(int) at java.io.ByteArrayOutputStream
│       │       ├── 164 MiB (24.2%) toByteArray() at java.io.ByteArrayOutputStream
│       │       │   └── 164 MiB (24.2%, self 19.0%, self 20.5% globally) copyOf(byte[], int) at java.util.Arrays
│       │       │       └── 35.5 MiB (5.2%) clone() at java.lang.Object
│       │       └── … 4 MiB (0.6%, self 3.0% globally) copyOfRangeByte(byte[], int, int) at java.util.Arrays
│       └── … 264 MiB (38.9%) main(String[]) at org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion
│           ├── … 259 MiB (38.2%) exec(MessageCollector, Services, CommonCompilerArguments) at org.jetbrains.kotlin.cli.common.CLICompiler
│           │   └── … 256 MiB (37.8%) invoke(PhaseConfig, PhaserState, LoggingContext, Object) at org.jetbrains.kotlin.config.phaser.NamedCompilerPhase
│           │       ├── 243 MiB (35.9%) phaseBody(LoggingContext, Object) at org.jetbrains.kotlin.cli.pipeline.PipelinePhase
│           │       │   └── 243 MiB (35.9%) phaseBody(PipelineContext, PipelineArtifact)
│           │       │       ├── 217 MiB (32.1%) executePhase(PipelineArtifact) at org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase
│           │       │       │   └── 217 MiB (32.1%) executePhase(ConfigurationPipelineArtifact)
│           │       │       │       ├── 171 MiB (25.2%) resolveAndCheckFir(FirSession, List, BaseDiagnosticsCollector) at org.jetbrains.kotlin.fir.pipeline.FirUtilsKt
│           │       │       │       │   ├── 153 MiB (22.6%) runResolution(FirSession, List) at org.jetbrains.kotlin.fir.pipeline.AnalyseKt
│           │       │       │       │   │   └── 153 MiB (22.6%) process(List) at org.jetbrains.kotlin.fir.resolve.transformers.FirTotalResolveProcessor
│           │       │       │       │   │       ├── 117 MiB (17.3%) processFile(FirFile) at org.jetbrains.kotlin.fir.resolve.transformers.FirTransformerBasedResolveProcessor …
│           │       │       │       │   │       └── … 35.5 MiB (5.2%) transformInplace(List, FirTransformer, Object) at org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt
│           │       │       │       │   │           ├── … 29 MiB (4.3%) computePackagePartInfo(FqName, String) at org.jetbrains.kotlin.fir.java.deserialization.JvmClassFileBasedSymbolProvider
│           │       │       │       │   │           │   ├── … 22 MiB (3.2%) readMessage(Parser, ExtensionRegistryLite) at org.jetbrains.kotlin.protobuf.CodedInputStream
│           │       │       │       │   │           │   │   ├── … 11 MiB (1.6%) parsePartialFrom(CodedInputStream, ExtensionRegistryLite) at org.jetbrains.kotlin.metadata.ProtoBuf$Type$1
│           │       │       │       │   │           │   │   │   └── … 8.5 MiB (1.3%) <init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1) at org.jetbrains.kotlin.metadata.ProtoBuf$Type
│           │       │       │       │   │           │   │   │       └── 8.5 MiB (1.3%) <init>(CodedInputStream, ExtensionRegistryLite)
│           │       │       │       │   │           │   │   │           ├── 5.5 MiB (0.8%, self 0.7% globally) newOutput() at org.jetbrains.kotlin.protobuf.ByteString
│           │       │       │       │   │           │   │   │           │   └── 4.5 MiB (0.7%, self 2.3% globally) <init>(int) at org.jetbrains.kotlin.protobuf.ByteString$Output
│           │       │       │       │   │           │   │   │           └── … 1 MiB (0.1%, self 1.1% globally) grow(int) at java.util.ArrayList
│           │       │       │       │   │           │   │   ├── … 1 MiB (0.1%) <init>(int) at java.util.ArrayList
│           │       │       │       │   │           │   │   └── 8.5 MiB (1.3%) 6 more callees, led by (0.4%) parsePartialFrom(CodedInputStream, ExtensionRegistryLite) at org.jetbrains.kotlin.metadata.ProtoBuf$Annotation$Argument$1
│           │       │       │       │   │           │   └── 5.5 MiB (0.8%) 2 more callees, led by (0.7%) findKotlinClassOrContent(ClassId, MetadataVersion) at org.jetbrains.kotlin.load.kotlin.VirtualFileFinder
│           │       │       │       │   │           └── 6 MiB (0.9%) 3 more callees, led by (0.7%) transform(FirTransformer, Object) at org.jetbrains.kotlin.fir.expressions.FirAnnotationCall
│           │       │       │       │   └── 18 MiB (2.7%) runCheckers(FirSession, ScopeSession, Collection, BaseDiagnosticsCollector, MppCheckerKind) at org.jetbrains.kotlin.fir.pipeline.AnalyseKt …
│           │       │       │       └── 46.5 MiB (6.9%) 6 more callees, led by (2.4%) prepareJvmSessions(List, Name, CompilerConfiguration, VfsBasedProjectEnvironment, AbstractProjectFileSearchScope, DependencyListForCliModule, Function1, Function1, Function2, Function1)
│           │       │       └── 26 MiB (3.8%) 3 more callees, led by (2.7%) executePhase(PipelineArtifact) at org.jetbrains.kotlin.cli.pipeline.jvm.JvmFir2IrPipelinePhase
│           │       └── 12.5 MiB (1.8%) 5 more callees, led by (1.4%) phaseBody(LoggingContext, Object) at org.jetbrains.kotlin.backend.common.phaser.FileLoweringPhase
│           └── … 3.21 MiB (0.5%) initCEN(int, ZipCoder) at java.util.zip.ZipFile$Source
└── 59.5 MiB (8.8%) run() at java.lang.Thread
    └── 59.5 MiB (8.8%) runWith(Object, Runnable) …
```

## Hottest functions

### Self size

Functions with the most bytes allocated within the function body, excluding callees.

|     % |     Size | Samples | Function                                                    | Location                                                                      |
| ----: | -------: | ------: | ----------------------------------------------------------- | ----------------------------------------------------------------------------- |
| 26.8% |  182 MiB |     363 | `<init>(int)`                                               | `java.io.ByteArrayOutputStream`                                               |
| 20.5% |  139 MiB |     277 | `copyOf(byte[], int)`                                       | `java.util.Arrays`                                                            |
|  5.4% | 36.5 MiB |      73 | `clone()`                                                   | `java.lang.Object`                                                            |
|  3.0% |   20 MiB |      40 | `copyOfRangeByte(byte[], int, int)`                         | `java.util.Arrays`                                                            |
|  2.3% | 15.5 MiB |      31 | `<init>(int)`                                               | `org.jetbrains.kotlin.protobuf.ByteString$Output`                             |
|  2.1% | 14.5 MiB |      29 | `iterator()`                                                | `java.util.ArrayList`                                                         |
|  1.1% |  7.5 MiB |      15 | `grow(int)`                                                 | `java.util.ArrayList`                                                         |
|  1.1% |  7.5 MiB |      15 | `<init>(int, float, boolean)`                               | `java.util.HashSet`                                                           |
|  1.0% |  6.5 MiB |      13 | `<init>(int, int)`                                          | `org.jetbrains.org.objectweb.asm.tree.analysis.Frame`                         |
|  0.8% |  5.5 MiB |      11 | `newNode(int, Object, Object, HashMap$Node)`                | `java.util.LinkedHashMap`                                                     |
|  0.7% |    5 MiB |      10 | `resize()`                                                  | `java.util.HashMap`                                                           |
|  0.7% |    5 MiB |      10 | `newOutput()`                                               | `org.jetbrains.kotlin.protobuf.ByteString`                                    |
|  0.7% |  4.5 MiB |       9 | `allocateUninitializedArray(Class, int)`                    | `jdk.internal.misc.Unsafe`                                                    |
|  0.7% |  4.5 MiB |       9 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$1`                               |
|  0.6% |    4 MiB |       8 | `toString()`                                                | `java.lang.StringBuilder`                                                     |
|  0.6% |    4 MiB |       8 | `newString(byte[], int, int)`                               | `java.lang.StringLatin1`                                                      |
|  0.6% |    4 MiB |       8 | `enlarge(int)`                                              | `jdk.internal.org.objectweb.asm.ByteVector`                                   |
|  0.6% |    4 MiB |       8 | `newInstance(OutputStream, int)`                            | `org.jetbrains.kotlin.protobuf.CodedOutputStream`                             |
|  0.6% |    4 MiB |       8 | `<init>()`                                                  | `org.jetbrains.kotlin.resolve.calls.inference.model.MutableConstraintStorage` |
|  0.6% |    4 MiB |       8 | `<init>(int)`                                               | `kotlin.collections.builders.MapBuilder`                                      |

#### Categories

Categories accounting for at least 1.0% of self size.

##### Standard library

|     % |     Size | Samples | Function                                     | Location                                    |
| ----: | -------: | ------: | -------------------------------------------- | ------------------------------------------- |
| 26.8% |  182 MiB |     363 | `<init>(int)`                                | `java.io.ByteArrayOutputStream`             |
| 20.5% |  139 MiB |     277 | `copyOf(byte[], int)`                        | `java.util.Arrays`                          |
|  5.4% | 36.5 MiB |      73 | `clone()`                                    | `java.lang.Object`                          |
|  3.0% |   20 MiB |      40 | `copyOfRangeByte(byte[], int, int)`          | `java.util.Arrays`                          |
|  2.1% | 14.5 MiB |      29 | `iterator()`                                 | `java.util.ArrayList`                       |
|  1.1% |  7.5 MiB |      15 | `grow(int)`                                  | `java.util.ArrayList`                       |
|  1.1% |  7.5 MiB |      15 | `<init>(int, float, boolean)`                | `java.util.HashSet`                         |
|  0.8% |  5.5 MiB |      11 | `newNode(int, Object, Object, HashMap$Node)` | `java.util.LinkedHashMap`                   |
|  0.7% |    5 MiB |      10 | `resize()`                                   | `java.util.HashMap`                         |
|  0.7% |  4.5 MiB |       9 | `allocateUninitializedArray(Class, int)`     | `jdk.internal.misc.Unsafe`                  |
|  0.6% |    4 MiB |       8 | `toString()`                                 | `java.lang.StringBuilder`                   |
|  0.6% |    4 MiB |       8 | `newString(byte[], int, int)`                | `java.lang.StringLatin1`                    |
|  0.6% |    4 MiB |       8 | `enlarge(int)`                               | `jdk.internal.org.objectweb.asm.ByteVector` |
|  0.6% |    4 MiB |       8 | `<init>(int)`                                | `kotlin.collections.builders.MapBuilder`    |
|  0.5% |  3.5 MiB |       7 | `copyOf(Object[], int)`                      | `java.util.Arrays`                          |
|  0.5% | 3.21 MiB |       1 | `initCEN(int, ZipCoder)`                     | `java.util.zip.ZipFile$Source`              |
|  0.4% |    3 MiB |       6 | `allocateInstance(Class)`                    | `jdk.internal.misc.Unsafe`                  |
|  0.4% |    3 MiB |       6 | `iterator()`                                 | `java.util.LinkedHashMap$LinkedEntrySet`    |
|  0.4% |  2.5 MiB |       5 | `<init>(int)`                                | `java.util.ArrayList`                       |
|  0.4% |  2.5 MiB |       5 | `copyOfRange(byte[], int, int)`              | `java.util.Arrays`                          |

##### Ours

|    % |     Size | Samples | Function                                                                              | Location                                                                                           |
| ---: | -------: | ------: | ------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| 2.3% | 15.5 MiB |      31 | `<init>(int)`                                                                         | `org.jetbrains.kotlin.protobuf.ByteString$Output`                                                  |
| 1.0% |  6.5 MiB |      13 | `<init>(int, int)`                                                                    | `org.jetbrains.org.objectweb.asm.tree.analysis.Frame`                                              |
| 0.7% |    5 MiB |      10 | `newOutput()`                                                                         | `org.jetbrains.kotlin.protobuf.ByteString`                                                         |
| 0.7% |  4.5 MiB |       9 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)`                           | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$1`                                                    |
| 0.6% |    4 MiB |       8 | `newInstance(OutputStream, int)`                                                      | `org.jetbrains.kotlin.protobuf.CodedOutputStream`                                                  |
| 0.6% |    4 MiB |       8 | `<init>()`                                                                            | `org.jetbrains.kotlin.resolve.calls.inference.model.MutableConstraintStorage`                      |
| 0.5% |  3.5 MiB |       7 | `simplifyTrivialInstructions(MethodNode)`                                             | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer` |
| 0.5% |  3.5 MiB |       7 | `box-impl(List)`                                                                      | `org.jetbrains.kotlin.fir.MutableOrEmptyList`                                                      |
| 0.4% |  2.5 MiB |       5 | `toArray()`                                                                           | `org.jetbrains.org.objectweb.asm.tree.InsnList`                                                    |
| 0.4% |  2.5 MiB |       5 | `create()`                                                                            | `com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure$2`                                          |
| 0.4% |  2.5 MiB |       5 | `contentsToByteArray$lambda$0(ZipEntryDescription, LargeDynamicMappedBuffer$Mapping)` | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt`                                  |
| 0.3% |    2 MiB |       4 | `_init_$lambda$0(int, int)`                                                           | `org.jetbrains.kotlin.codegen.optimization.common.FastMethodAnalyzer`                              |
| 0.3% |    2 MiB |       4 | `getObjectType(String)`                                                               | `org.jetbrains.org.objectweb.asm.Type`                                                             |
| 0.3% |    2 MiB |       4 | `getLabelNode(Label)`                                                                 | `org.jetbrains.org.objectweb.asm.tree.MethodNode`                                                  |
| 0.3% |    2 MiB |       4 | `readUtf(int, int, char[])`                                                           | `org.jetbrains.org.objectweb.asm.ClassReader`                                                      |
| 0.3% |    2 MiB |       4 | `kindOf(TowerGroupKind)`                                                              | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerGroup`                                          |
| 0.3% |    2 MiB |       4 | `<init>()`                                                                            | `org.jetbrains.kotlin.types.AbstractTypeApproximator$Cache`                                        |
| 0.2% |  1.5 MiB |       3 | `visitLineNumber(int, Label)`                                                         | `org.jetbrains.org.objectweb.asm.tree.MethodNode`                                                  |
| 0.2% |  1.5 MiB |       3 | `enlarge(int)`                                                                        | `org.jetbrains.org.objectweb.asm.ByteVector`                                                       |
| 0.2% |  1.5 MiB |       3 | `<init>(String)`                                                                      | `org.jetbrains.kotlin.name.FqName`                                                                 |

#### Lines

Lines with the largest contribution to each function's self size.

##### `<init>(int)` (`java.io.ByteArrayOutputStream`)

|      % |    Size | Samples | Location                           |
| -----: | ------: | ------: | ---------------------------------- |
| 100.0% | 182 MiB |     363 | `java.io.ByteArrayOutputStream:81` |

##### `copyOf(byte[], int)` (`java.util.Arrays`)

|     % |    Size | Samples | Location                |
| ----: | ------: | ------: | ----------------------- |
| 92.8% | 129 MiB |     257 | `java.util.Arrays:3539` |
|  7.2% |  10 MiB |      20 | `java.util.Arrays:3541` |

##### `copyOfRangeByte(byte[], int, int)` (`java.util.Arrays`)

|      % |   Size | Samples | Location                |
| -----: | -----: | ------: | ----------------------- |
| 100.0% | 20 MiB |      40 | `java.util.Arrays:3863` |

##### `<init>(int)` (`org.jetbrains.kotlin.protobuf.ByteString$Output`)

|     % |     Size | Samples | Location                                              |
| ----: | -------: | ------: | ----------------------------------------------------- |
| 87.1% | 13.5 MiB |      27 | `org.jetbrains.kotlin.protobuf.ByteString$Output:789` |
| 12.9% |    2 MiB |       4 | `org.jetbrains.kotlin.protobuf.ByteString$Output:788` |

##### `iterator()` (`java.util.ArrayList`)

|      % |     Size | Samples | Location                   |
| -----: | -------: | ------: | -------------------------- |
| 100.0% | 14.5 MiB |      29 | `java.util.ArrayList:1029` |

##### `grow(int)` (`java.util.ArrayList`)

|      % |    Size | Samples | Location                  |
| -----: | ------: | ------: | ------------------------- |
| 100.0% | 7.5 MiB |      15 | `java.util.ArrayList:239` |

##### `<init>(int, float, boolean)` (`java.util.HashSet`)

|      % |    Size | Samples | Location                |
| -----: | ------: | ------: | ----------------------- |
| 100.0% | 7.5 MiB |      15 | `java.util.HashSet:171` |

##### `<init>(int, int)` (`org.jetbrains.org.objectweb.asm.tree.analysis.Frame`)

|      % |    Size | Samples | Location                                                 |
| -----: | ------: | ------: | -------------------------------------------------------- |
| 100.0% | 6.5 MiB |      13 | `org.jetbrains.org.objectweb.asm.tree.analysis.Frame:96` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.LinkedHashMap`)

|      % |    Size | Samples | Location                      |
| -----: | ------: | ------: | ----------------------------- |
| 100.0% | 5.5 MiB |      11 | `java.util.LinkedHashMap:281` |

##### `resize()` (`java.util.HashMap`)

|      % |  Size | Samples | Location                |
| -----: | ----: | ------: | ----------------------- |
| 100.0% | 5 MiB |      10 | `java.util.HashMap:710` |

##### `newOutput()` (`org.jetbrains.kotlin.protobuf.ByteString`)

|      % |  Size | Samples | Location                                       |
| -----: | ----: | ------: | ---------------------------------------------- |
| 100.0% | 5 MiB |      10 | `org.jetbrains.kotlin.protobuf.ByteString:751` |

##### `allocateUninitializedArray(Class, int)` (`jdk.internal.misc.Unsafe`)

|      % |    Size | Samples | Location                        |
| -----: | ------: | ------: | ------------------------------- |
| 100.0% | 4.5 MiB |       9 | `jdk.internal.misc.Unsafe:1380` |

##### `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type$1`)

|      % |    Size | Samples | Location                                             |
| -----: | ------: | ------: | ---------------------------------------------------- |
| 100.0% | 4.5 MiB |       9 | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$1:5079` |

##### `toString()` (`java.lang.StringBuilder`)

|      % |  Size | Samples | Location                      |
| -----: | ----: | ------: | ----------------------------- |
| 100.0% | 4 MiB |       8 | `java.lang.StringBuilder:475` |

##### `newString(byte[], int, int)` (`java.lang.StringLatin1`)

|      % |  Size | Samples | Location                     |
| -----: | ----: | ------: | ---------------------------- |
| 100.0% | 4 MiB |       8 | `java.lang.StringLatin1:750` |

##### `enlarge(int)` (`jdk.internal.org.objectweb.asm.ByteVector`)

|      % |  Size | Samples | Location                                        |
| -----: | ----: | ------: | ----------------------------------------------- |
| 100.0% | 4 MiB |       8 | `jdk.internal.org.objectweb.asm.ByteVector:401` |

##### `newInstance(OutputStream, int)` (`org.jetbrains.kotlin.protobuf.CodedOutputStream`)

|      % |  Size | Samples | Location                                              |
| -----: | ----: | ------: | ----------------------------------------------------- |
| 100.0% | 4 MiB |       8 | `org.jetbrains.kotlin.protobuf.CodedOutputStream:106` |

##### `<init>()` (`org.jetbrains.kotlin.resolve.calls.inference.model.MutableConstraintStorage`)

|     % |    Size | Samples | Location                                                                          |
| ----: | ------: | ------: | --------------------------------------------------------------------------------- |
| 37.5% | 1.5 MiB |       3 | `org.jetbrains.kotlin.resolve.calls.inference.model.MutableConstraintStorage:327` |
| 25.0% |   1 MiB |       2 | `org.jetbrains.kotlin.resolve.calls.inference.model.MutableConstraintStorage:332` |
| 12.5% | 512 KiB |       1 | `org.jetbrains.kotlin.resolve.calls.inference.model.MutableConstraintStorage:340` |
| 12.5% | 512 KiB |       1 | `org.jetbrains.kotlin.resolve.calls.inference.model.MutableConstraintStorage:330` |
| 12.5% | 512 KiB |       1 | `org.jetbrains.kotlin.resolve.calls.inference.model.MutableConstraintStorage:334` |

##### `<init>(int)` (`kotlin.collections.builders.MapBuilder`)

|     % |  Size | Samples | Location                                    |
| ----: | ----: | ------: | ------------------------------------------- |
| 75.0% | 3 MiB |       6 | `kotlin.collections.builders.MapBuilder:60` |
| 25.0% | 1 MiB |       2 | `kotlin.collections.builders.MapBuilder:59` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|      % |    Size | Samples | Location                |
| -----: | ------: | ------: | ----------------------- |
| 100.0% | 3.5 MiB |       7 | `java.util.Arrays:3482` |

##### `simplifyTrivialInstructions(MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer`)

|     % |    Size | Samples | Location                                                                                              |
| ----: | ------: | ------: | ----------------------------------------------------------------------------------------------------- |
| 28.6% |   1 MiB |       2 | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer:48` |
| 28.6% |   1 MiB |       2 | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer:50` |
| 14.3% | 512 KiB |       1 | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer:58` |
| 14.3% | 512 KiB |       1 | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer:57` |
| 14.3% | 512 KiB |       1 | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer:49` |

##### `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

|      % |     Size | Samples | Location                            |
| -----: | -------: | ------: | ----------------------------------- |
| 100.0% | 3.21 MiB |       1 | `java.util.zip.ZipFile$Source:1733` |

##### `iterator()` (`java.util.LinkedHashMap$LinkedEntrySet`)

|      % |  Size | Samples | Location                                     |
| -----: | ----: | ------: | -------------------------------------------- |
| 100.0% | 3 MiB |       6 | `java.util.LinkedHashMap$LinkedEntrySet:914` |

##### `<init>(int)` (`java.util.ArrayList`)

|      % |    Size | Samples | Location                  |
| -----: | ------: | ------: | ------------------------- |
| 100.0% | 2.5 MiB |       5 | `java.util.ArrayList:156` |

##### `copyOfRange(byte[], int, int)` (`java.util.Arrays`)

|      % |    Size | Samples | Location                |
| -----: | ------: | ------: | ----------------------- |
| 100.0% | 2.5 MiB |       5 | `java.util.Arrays:3856` |

##### `toArray()` (`org.jetbrains.org.objectweb.asm.tree.InsnList`)

|      % |    Size | Samples | Location                                            |
| -----: | ------: | ------: | --------------------------------------------------- |
| 100.0% | 2.5 MiB |       5 | `org.jetbrains.org.objectweb.asm.tree.InsnList:178` |

##### `create()` (`com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure$2`)

|      % |    Size | Samples | Location                                                       |
| -----: | ------: | ------: | -------------------------------------------------------------- |
| 100.0% | 2.5 MiB |       5 | `com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure$2:1568` |

##### `contentsToByteArray$lambda$0(ZipEntryDescription, LargeDynamicMappedBuffer$Mapping)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt`)

|     % |    Size | Samples | Location                                                             |
| ----: | ------: | ------: | -------------------------------------------------------------------- |
| 80.0% |   2 MiB |       4 | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt:51` |
| 20.0% | 512 KiB |       1 | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt:45` |

##### `_init_$lambda$0(int, int)` (`org.jetbrains.kotlin.codegen.optimization.common.FastMethodAnalyzer`)

|      % |  Size | Samples | Location                                                                 |
| -----: | ----: | ------: | ------------------------------------------------------------------------ |
| 100.0% | 2 MiB |       4 | `org.jetbrains.kotlin.codegen.optimization.common.FastMethodAnalyzer:47` |

##### `getObjectType(String)` (`org.jetbrains.org.objectweb.asm.Type`)

|      % |  Size | Samples | Location                                   |
| -----: | ----: | ------: | ------------------------------------------ |
| 100.0% | 2 MiB |       4 | `org.jetbrains.org.objectweb.asm.Type:252` |

##### `getLabelNode(Label)` (`org.jetbrains.org.objectweb.asm.tree.MethodNode`)

|      % |  Size | Samples | Location                                              |
| -----: | ----: | ------: | ----------------------------------------------------- |
| 100.0% | 2 MiB |       4 | `org.jetbrains.org.objectweb.asm.tree.MethodNode:534` |

##### `readUtf(int, int, char[])` (`org.jetbrains.org.objectweb.asm.ClassReader`)

|      % |  Size | Samples | Location                                           |
| -----: | ----: | ------: | -------------------------------------------------- |
| 100.0% | 2 MiB |       4 | `org.jetbrains.org.objectweb.asm.ClassReader:3886` |

##### `kindOf(TowerGroupKind)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.TowerGroup`)

|      % |  Size | Samples | Location                                                      |
| -----: | ----: | ------: | ------------------------------------------------------------- |
| 100.0% | 2 MiB |       4 | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerGroup:193` |

##### `<init>()` (`org.jetbrains.kotlin.types.AbstractTypeApproximator$Cache`)

|     % |    Size | Samples | Location                                                       |
| ----: | ------: | ------: | -------------------------------------------------------------- |
| 75.0% | 1.5 MiB |       3 | `org.jetbrains.kotlin.types.AbstractTypeApproximator$Cache:54` |
| 25.0% | 512 KiB |       1 | `org.jetbrains.kotlin.types.AbstractTypeApproximator$Cache:55` |

##### `visitLineNumber(int, Label)` (`org.jetbrains.org.objectweb.asm.tree.MethodNode`)

|      % |    Size | Samples | Location                                              |
| -----: | ------: | ------: | ----------------------------------------------------- |
| 100.0% | 1.5 MiB |       3 | `org.jetbrains.org.objectweb.asm.tree.MethodNode:510` |

##### `enlarge(int)` (`org.jetbrains.org.objectweb.asm.ByteVector`)

|      % |    Size | Samples | Location                                         |
| -----: | ------: | ------: | ------------------------------------------------ |
| 100.0% | 1.5 MiB |       3 | `org.jetbrains.org.objectweb.asm.ByteVector:369` |

##### `<init>(String)` (`org.jetbrains.kotlin.name.FqName`)

|      % |    Size | Samples | Location                              |
| -----: | ------: | ------: | ------------------------------------- |
| 100.0% | 1.5 MiB |       3 | `org.jetbrains.kotlin.name.FqName:37` |

#### Callers

Callers with the largest contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `<init>(int)` (`java.io.ByteArrayOutputStream`)

|      % |    Size | Samples | Caller                                                  | Location                                               |
| -----: | ------: | ------: | ------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% | 182 MiB |     363 | `loadAllClassesFromJars(Collection, int, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `copyOf(byte[], int)` (`java.util.Arrays`)

|     % |    Size | Samples | Caller                        | Location                          |
| ----: | ------: | ------: | ----------------------------- | --------------------------------- |
| 92.8% | 129 MiB |     257 | `toByteArray()`               | `java.io.ByteArrayOutputStream`   |
|  6.1% | 8.5 MiB |      17 | `ensureCapacityInternal(int)` | `java.lang.AbstractStringBuilder` |
|  1.1% | 1.5 MiB |       3 | `getBytes()`                  | `jdk.internal.loader.Resource`    |

##### `clone()` (`java.lang.Object`)

|     % |     Size | Samples | Caller                          | Location           |
| ----: | -------: | ------: | ------------------------------- | ------------------ |
| 97.3% | 35.5 MiB |      71 | `copyOf(byte[], int)`           | `java.util.Arrays` |
|  2.7% |    1 MiB |       2 | `copyOfRange(byte[], int, int)` | `java.util.Arrays` |

##### `copyOfRangeByte(byte[], int, int)` (`java.util.Arrays`)

|      % |   Size | Samples | Caller                          | Location           |
| -----: | -----: | ------: | ------------------------------- | ------------------ |
| 100.0% | 20 MiB |      40 | `copyOfRange(byte[], int, int)` | `java.util.Arrays` |

##### `<init>(int)` (`org.jetbrains.kotlin.protobuf.ByteString$Output`)

|      % |     Size | Samples | Caller        | Location                                   |
| -----: | -------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 15.5 MiB |      31 | `newOutput()` | `org.jetbrains.kotlin.protobuf.ByteString` |

##### `iterator()` (`java.util.ArrayList`)

|     % |    Size | Samples | Caller                                                                                           | Location                                                                      |
| ----: | ------: | ------: | ------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------- |
| 10.3% | 1.5 MiB |       3 | `iterator-impl(List)`                                                                            | `org.jetbrains.kotlin.fir.MutableOrEmptyList`                                 |
|  6.9% |   1 MiB |       2 | `getDependentTypeParameters$lambda$0(NewConstraintSystemImpl, TypeConstructorMarker, Map$Entry)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.CollectTypeVariableUsagesInfo` |
|  6.9% |   1 MiB |       2 | `zip(Iterable, Iterable)`                                                                        | `kotlin.collections.CollectionsKt___CollectionsKt`                            |
|  3.4% | 512 KiB |       1 | `serializeTypeAnnotations(List, ProtoBuf$Type$Builder)`                                          | `org.jetbrains.kotlin.fir.backend.jvm.FirJvmSerializerExtension`              |
|  3.4% | 512 KiB |       1 | `visitClassTypeSignature(ClassTypeSignature)`                                                    | `sun.reflect.generics.visitor.Reifier`                                        |

##### `grow(int)` (`java.util.ArrayList`)

|     % |    Size | Samples | Caller               | Location              |
| ----: | ------: | ------: | -------------------- | --------------------- |
| 93.3% |   7 MiB |      14 | `grow()`             | `java.util.ArrayList` |
|  6.7% | 512 KiB |       1 | `addAll(Collection)` | `java.util.ArrayList` |

##### `<init>(int, float, boolean)` (`java.util.HashSet`)

|     % |    Size | Samples | Caller        | Location                  |
| ----: | ------: | ------: | ------------- | ------------------------- |
| 80.0% |   6 MiB |      12 | `<init>()`    | `java.util.LinkedHashSet` |
| 20.0% | 1.5 MiB |       3 | `<init>(int)` | `java.util.LinkedHashSet` |

##### `<init>(int, int)` (`org.jetbrains.org.objectweb.asm.tree.analysis.Frame`)

|     % |    Size | Samples | Caller                                          | Location                                                                                                   |
| ----: | ------: | ------: | ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| 46.2% |   3 MiB |       6 | `_init_$lambda$0(int, int)`                     | `org.jetbrains.kotlin.codegen.optimization.common.FastMethodAnalyzer`                                      |
| 23.1% | 1.5 MiB |       3 | `<init>(FixStackAnalyzer, int, int)`            | `org.jetbrains.kotlin.codegen.optimization.fixStack.FixStackAnalyzer$FixStackFrame`                        |
|  7.7% | 512 KiB |       1 | `<init>(int, int)`                              | `org.jetbrains.kotlin.codegen.optimization.boxing.BoxingFrame`                                             |
|  7.7% | 512 KiB |       1 | `<init>(int, int)`                              | `org.jetbrains.kotlin.codegen.inline.MethodInlinerUtilKt$analyzeMethodNodeWithInterpreter$BasicValueFrame` |
|  7.7% | 512 KiB |       1 | `preprocessNodeBeforeInline$lambda$0(int, int)` | `org.jetbrains.kotlin.codegen.inline.MethodInliner`                                                        |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.LinkedHashMap`)

|      % |    Size | Samples | Caller                                          | Location            |
| -----: | ------: | ------: | ----------------------------------------------- | ------------------- |
| 100.0% | 5.5 MiB |      11 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `resize()` (`java.util.HashMap`)

|      % |  Size | Samples | Caller                                          | Location            |
| -----: | ----: | ------: | ----------------------------------------------- | ------------------- |
| 100.0% | 5 MiB |      10 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `newOutput()` (`org.jetbrains.kotlin.protobuf.ByteString`)

|     % |    Size | Samples | Caller                                            | Location                                                                |
| ----: | ------: | ------: | ------------------------------------------------- | ----------------------------------------------------------------------- |
| 50.0% | 2.5 MiB |       5 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Type`                           |
| 10.0% | 512 KiB |       1 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Annotation$Argument$Value`      |
| 10.0% | 512 KiB |       1 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Annotation$Argument`            |
| 10.0% | 512 KiB |       1 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.jvm.JvmProtoBuf$StringTableTypes$Record` |
| 10.0% | 512 KiB |       1 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$Argument`                  |

##### `allocateUninitializedArray(Class, int)` (`jdk.internal.misc.Unsafe`)

|      % |    Size | Samples | Caller           | Location                       |
| -----: | ------: | ------: | ---------------- | ------------------------------ |
| 100.0% | 4.5 MiB |       9 | `newArray(long)` | `java.lang.StringConcatHelper` |

##### `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type$1`)

|      % |    Size | Samples | Caller                                                      | Location                                        |
| -----: | ------: | ------: | ----------------------------------------------------------- | ----------------------------------------------- |
| 100.0% | 4.5 MiB |       9 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$1` |

##### `toString()` (`java.lang.StringBuilder`)

|     % |    Size | Samples | Caller                                                       | Location                                                     |
| ----: | ------: | ------: | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 25.0% |   1 MiB |       2 | `unparseMethod(Class, Class[])`                              | `sun.invoke.util.BytecodeDescriptor`                         |
| 12.5% | 512 KiB |       1 | `getDescriptor()`                                            | `org.jetbrains.org.objectweb.asm.Type`                       |
| 12.5% | 512 KiB |       1 | `asString()`                                                 | `org.jetbrains.kotlin.name.ClassId`                          |
| 12.5% | 512 KiB |       1 | `fromMethodSignatureAndParameterIndex(MemberSignature, int)` | `org.jetbrains.kotlin.load.kotlin.MemberSignature$Companion` |
| 12.5% | 512 KiB |       1 | `asSingleFqName()`                                           | `org.jetbrains.kotlin.name.ClassId`                          |

##### `newString(byte[], int, int)` (`java.lang.StringLatin1`)

|      % |  Size | Samples | Caller                | Location           |
| -----: | ----: | ------: | --------------------- | ------------------ |
| 100.0% | 4 MiB |       8 | `substring(int, int)` | `java.lang.String` |

##### `enlarge(int)` (`jdk.internal.org.objectweb.asm.ByteVector`)

|     % |    Size | Samples | Caller                  | Location                                    |
| ----: | ------: | ------: | ----------------------- | ------------------------------------------- |
| 87.5% | 3.5 MiB |       7 | `putUTF8(String)`       | `jdk.internal.org.objectweb.asm.ByteVector` |
| 12.5% | 512 KiB |       1 | `put122(int, int, int)` | `jdk.internal.org.objectweb.asm.ByteVector` |

##### `newInstance(OutputStream, int)` (`org.jetbrains.kotlin.protobuf.CodedOutputStream`)

|     % |    Size | Samples | Caller                                            | Location                                                           |
| ----: | ------: | ------: | ------------------------------------------------- | ------------------------------------------------------------------ |
| 37.5% | 1.5 MiB |       3 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Type`                      |
| 25.0% |   1 MiB |       2 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Annotation$Argument$Value` |
| 25.0% |   1 MiB |       2 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$Argument`             |
| 12.5% | 512 KiB |       1 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Annotation`                |

##### `<init>()` (`org.jetbrains.kotlin.resolve.calls.inference.model.MutableConstraintStorage`)

|      % |  Size | Samples | Caller                                                                                                | Location                                                                     |
| -----: | ----: | ------: | ----------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| 100.0% | 4 MiB |       8 | `<init>(ConstraintInjector, TypeSystemInferenceExtensionContext, LanguageVersionSettings, Function2)` | `org.jetbrains.kotlin.resolve.calls.inference.model.NewConstraintSystemImpl` |

##### `<init>(int)` (`kotlin.collections.builders.MapBuilder`)

|      % |  Size | Samples | Caller     | Location                                 |
| -----: | ----: | ------: | ---------- | ---------------------------------------- |
| 100.0% | 4 MiB |       8 | `<init>()` | `kotlin.collections.builders.MapBuilder` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|     % |    Size | Samples | Caller      | Location              |
| ----: | ------: | ------: | ----------- | --------------------- |
| 57.1% |   2 MiB |       4 | `toArray()` | `java.util.ArrayList` |
| 42.9% | 1.5 MiB |       3 | `grow(int)` | `java.util.ArrayList` |

##### `simplifyTrivialInstructions(MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer`)

|      % |    Size | Samples | Caller                          | Location                                                                                           |
| -----: | ------: | ------: | ------------------------------- | -------------------------------------------------------------------------------------------------- |
| 100.0% | 3.5 MiB |       7 | `transform(String, MethodNode)` | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer` |

##### `box-impl(List)` (`org.jetbrains.kotlin.fir.MutableOrEmptyList`)

|     % |    Size | Samples | Caller                               | Location                                                                    |
| ----: | ------: | ------: | ------------------------------------ | --------------------------------------------------------------------------- |
| 28.6% |   1 MiB |       2 | `getAnnotations()`                   | `org.jetbrains.kotlin.fir.declarations.impl.FirValueParameterImpl`          |
| 28.6% |   1 MiB |       2 | `getTypeArguments()`                 | `org.jetbrains.kotlin.fir.expressions.impl.FirPropertyAccessExpressionImpl` |
| 14.3% | 512 KiB |       1 | `getNonFatalDiagnostics()`           | `org.jetbrains.kotlin.fir.expressions.impl.FirPropertyAccessExpressionImpl` |
| 14.3% | 512 KiB |       1 | `getAnnotations()`                   | `org.jetbrains.kotlin.fir.declarations.impl.FirRegularClassImpl`            |
| 14.3% | 512 KiB |       1 | `acceptChildren(FirVisitor, Object)` | `org.jetbrains.kotlin.fir.expressions.impl.FirFunctionCallImpl`             |

##### `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

|      % |     Size | Samples | Caller                                          | Location                       |
| -----: | -------: | ------: | ----------------------------------------------- | ------------------------------ |
| 100.0% | 3.21 MiB |       1 | `<init>(ZipFile$Source$Key, boolean, ZipCoder)` | `java.util.zip.ZipFile$Source` |

##### `allocateInstance(Class)` (`jdk.internal.misc.Unsafe`)

|      % |  Size | Samples | Caller                     | Location                              |
| -----: | ----: | ------: | -------------------------- | ------------------------------------- |
| 100.0% | 3 MiB |       6 | `allocateInstance(Object)` | `java.lang.invoke.DirectMethodHandle` |

##### `iterator()` (`java.util.LinkedHashMap$LinkedEntrySet`)

|     % |    Size | Samples | Caller                                                         | Location                                                                                  |
| ----: | ------: | ------: | -------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| 33.3% |   1 MiB |       2 | `putMapEntries(Map, boolean)`                                  | `java.util.HashMap`                                                                       |
| 16.7% | 512 KiB |       1 | `doAddOtherSystem(ConstraintStorage, boolean)`                 | `org.jetbrains.kotlin.resolve.calls.inference.model.NewConstraintSystemImpl`              |
| 16.7% | 512 KiB |       1 | `filterArgumentMapping()`                                      | `org.jetbrains.kotlin.fir.expressions.impl.FirResolvedArgumentListImpl`                   |
| 16.7% | 512 KiB |       1 | `createArgumentsMapping(Candidate, boolean)`                   | `org.jetbrains.kotlin.fir.resolve.transformers.FirCallCompletionResultsWriterTransformer` |
| 16.7% | 512 KiB |       1 | `transformFunctionCall(FirFunctionCall, ExpectedArgumentType)` | `org.jetbrains.kotlin.fir.resolve.transformers.FirCallCompletionResultsWriterTransformer` |

##### `<init>(int)` (`java.util.ArrayList`)

|     % |    Size | Samples | Caller                                 | Location                                           |
| ----: | ------: | ------: | -------------------------------------- | -------------------------------------------------- |
| 60.0% | 1.5 MiB |       3 | `ensureEntryArrayMutable()`            | `org.jetbrains.kotlin.protobuf.SmallSortedMap`     |
| 20.0% | 512 KiB |       1 | `zip(Iterable, Iterable)`              | `kotlin.collections.CollectionsKt___CollectionsKt` |
| 20.0% | 512 KiB |       1 | `getNonDispatchParameters(IrFunction)` | `org.jetbrains.kotlin.ir.util.IrUtilsKt`           |

##### `copyOfRange(byte[], int, int)` (`java.util.Arrays`)

|     % |    Size | Samples | Caller                                | Location           |
| ----: | ------: | ------: | ------------------------------------- | ------------------ |
| 80.0% |   2 MiB |       4 | `<init>(AbstractStringBuilder, Void)` | `java.lang.String` |
| 20.0% | 512 KiB |       1 | `<init>(Charset, byte[], int, int)`   | `java.lang.String` |

##### `toArray()` (`org.jetbrains.org.objectweb.asm.tree.InsnList`)

|     % |    Size | Samples | Caller                                    | Location                                                                                           |
| ----: | ------: | ------: | ----------------------------------------- | -------------------------------------------------------------------------------------------------- |
| 40.0% |   1 MiB |       2 | `simplifyTrivialInstructions(MethodNode)` | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer` |
| 20.0% | 512 KiB |       1 | `transform(String, MethodNode)`           | `org.jetbrains.kotlin.codegen.optimization.DeadCodeEliminationMethodTransformer`                   |
| 20.0% | 512 KiB |       1 | `transform(String, MethodNode)`           | `org.jetbrains.kotlin.codegen.optimization.ApiVersionCallsPreprocessingMethodTransformer`          |
| 20.0% | 512 KiB |       1 | `analyze(String, MethodNode)`             | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryValsAnalyzer`                    |

##### `create()` (`com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure$2`)

|      % |    Size | Samples | Caller     | Location                                                  |
| -----: | ------: | ------: | ---------- | --------------------------------------------------------- |
| 100.0% | 2.5 MiB |       5 | `create()` | `com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure$2` |

##### `contentsToByteArray$lambda$0(ZipEntryDescription, LargeDynamicMappedBuffer$Mapping)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt`)

|      % |    Size | Samples | Caller           | Location                                                                                     |
| -----: | ------: | ------: | ---------------- | -------------------------------------------------------------------------------------------- |
| 100.0% | 2.5 MiB |       5 | `invoke(Object)` | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt$$Lambda.0x000000f001396f88` |

##### `_init_$lambda$0(int, int)` (`org.jetbrains.kotlin.codegen.optimization.common.FastMethodAnalyzer`)

|      % |  Size | Samples | Caller                   | Location                                                                                         |
| -----: | ----: | ------: | ------------------------ | ------------------------------------------------------------------------------------------------ |
| 100.0% | 2 MiB |       4 | `invoke(Object, Object)` | `org.jetbrains.kotlin.codegen.optimization.common.FastMethodAnalyzer$$Lambda.0x000000f0018e4700` |

##### `getObjectType(String)` (`org.jetbrains.org.objectweb.asm.Type`)

|     % |    Size | Samples | Caller                     | Location                                                |
| ----: | ------: | ------: | -------------------------- | ------------------------------------------------------- |
| 75.0% | 1.5 MiB |       3 | `createObjectType(String)` | `org.jetbrains.kotlin.codegen.signature.AsmTypeFactory` |
| 25.0% | 512 KiB |       1 | `mapType(Type)`            | `org.jetbrains.org.objectweb.asm.commons.Remapper`      |

##### `getLabelNode(Label)` (`org.jetbrains.org.objectweb.asm.tree.MethodNode`)

|     % |    Size | Samples | Caller                      | Location                                          |
| ----: | ------: | ------: | --------------------------- | ------------------------------------------------- |
| 75.0% | 1.5 MiB |       3 | `visitLabel(Label)`         | `org.jetbrains.org.objectweb.asm.tree.MethodNode` |
| 25.0% | 512 KiB |       1 | `visitJumpInsn(int, Label)` | `org.jetbrains.org.objectweb.asm.tree.MethodNode` |

##### `readUtf(int, int, char[])` (`org.jetbrains.org.objectweb.asm.ClassReader`)

|      % |  Size | Samples | Caller                 | Location                                      |
| -----: | ----: | ------: | ---------------------- | --------------------------------------------- |
| 100.0% | 2 MiB |       4 | `readUtf(int, char[])` | `org.jetbrains.org.objectweb.asm.ClassReader` |

##### `kindOf(TowerGroupKind)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.TowerGroup`)

|     % |    Size | Samples | Caller          | Location                                                  |
| ----: | ------: | ------: | --------------- | --------------------------------------------------------- |
| 50.0% |   1 MiB |       2 | `getMember()`   | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerGroup` |
| 25.0% | 512 KiB |       1 | `Implicit(int)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerGroup` |
| 25.0% | 512 KiB |       1 | `NonLocal(int)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerGroup` |

##### `<init>()` (`org.jetbrains.kotlin.types.AbstractTypeApproximator$Cache`)

|      % |  Size | Samples | Caller                                                                         | Location                                              |
| -----: | ----: | ------: | ------------------------------------------------------------------------------ | ----------------------------------------------------- |
| 100.0% | 2 MiB |       4 | `approximateToSuperType(KotlinTypeMarker, TypeApproximatorConfiguration, Map)` | `org.jetbrains.kotlin.types.AbstractTypeApproximator` |

##### `visitLineNumber(int, Label)` (`org.jetbrains.org.objectweb.asm.tree.MethodNode`)

|      % |    Size | Samples | Caller                        | Location                                        |
| -----: | ------: | ------: | ----------------------------- | ----------------------------------------------- |
| 100.0% | 1.5 MiB |       3 | `visitLineNumber(int, Label)` | `org.jetbrains.org.objectweb.asm.MethodVisitor` |

##### `enlarge(int)` (`org.jetbrains.org.objectweb.asm.ByteVector`)

|     % |    Size | Samples | Caller            | Location                                     |
| ----: | ------: | ------: | ----------------- | -------------------------------------------- |
| 33.3% | 512 KiB |       1 | `putByte(int)`    | `org.jetbrains.org.objectweb.asm.ByteVector` |
| 33.3% | 512 KiB |       1 | `putUTF8(String)` | `org.jetbrains.org.objectweb.asm.ByteVector` |
| 33.3% | 512 KiB |       1 | `putShort(int)`   | `org.jetbrains.org.objectweb.asm.ByteVector` |

##### `<init>(String)` (`org.jetbrains.kotlin.name.FqName`)

|     % |    Size | Samples | Caller                                                                     | Location                                                |
| ----: | ------: | ------: | -------------------------------------------------------------------------- | ------------------------------------------------------- |
| 33.3% | 512 KiB |       1 | `getFqNameWhenAvailable(IrDeclarationWithName)`                            | `org.jetbrains.kotlin.ir.util.IrUtilsKt`                |
| 33.3% | 512 KiB |       1 | `resolveNameByInternalName(String, FileBasedKotlinClass$InnerClassesInfo)` | `org.jetbrains.kotlin.load.kotlin.FileBasedKotlinClass` |
| 33.3% | 512 KiB |       1 | `fromString(String, boolean)`                                              | `org.jetbrains.kotlin.name.ClassId$Companion`           |

### Total size

Functions with the most bytes allocated within the function and its callees.

|     % |    Size | Samples | Function                                                                                            | Location                                                |
| ----: | ------: | ------: | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 91.2% | 618 MiB |   1,230 | `run(String[])`                                                                                     | `org.jetbrains.kotlin.preloading.Preloader`             |
| 91.2% | 618 MiB |   1,230 | `main(String[])`                                                                                    | `org.jetbrains.kotlin.preloading.Preloader`             |
| 52.2% | 354 MiB |     707 | `loadAllClassesFromJars(Collection, int, ClassHandler)`                                             | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`  |
| 52.2% | 354 MiB |     707 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)`                        | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`  |
| 39.0% | 264 MiB |     523 | `main(String[])`                                                                                    | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`  |
| 39.0% | 264 MiB |     523 | `main(String[])`                                                                                    | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 39.0% | 264 MiB |     523 | `invokeStatic(Object, Object)`                                                                      | `java.lang.invoke.LambdaForm$DMH.0x000000f001008400`    |
| 39.0% | 264 MiB |     523 | `invoke(Object, Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000f001009800`     |
| 39.0% | 264 MiB |     523 | `invokeExact_MT(Object, Object, Object, Object)`                                                    | `java.lang.invoke.Invokers$Holder`                      |
| 39.0% | 264 MiB |     523 | `invokeImpl(Object, Object[])`                                                                      | `jdk.internal.reflect.DirectMethodHandleAccessor`       |
| 39.0% | 264 MiB |     523 | `invoke(Object, Object[])`                                                                          | `jdk.internal.reflect.DirectMethodHandleAccessor`       |
| 39.0% | 264 MiB |     523 | `invoke(Object, Object[])`                                                                          | `java.lang.reflect.Method`                              |
| 38.5% | 261 MiB |     522 | `exec(PrintStream, Services, MessageRenderer, String[])`                                            | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 38.5% | 261 MiB |     522 | `exec(PrintStream, MessageRenderer, String[])`                                                      | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 38.5% | 261 MiB |     522 | `doMainNoExit(CLICompiler, String[], MessageRenderer)`                                              | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 38.5% | 261 MiB |     522 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)`  | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 38.5% | 261 MiB |     522 | `doMain(CLICompiler, String[])`                                                                     | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 38.3% | 259 MiB |     519 | `exec(MessageCollector, Services, CommonCompilerArguments)`                                         | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 37.9% | 257 MiB |     514 | `runPhasedPipeline(ArgumentsPipelineArtifact)`                                                      | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 37.9% | 257 MiB |     514 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

#### Categories

Categories accounting for at least 1.0% of self size.

##### Standard library

|     % |     Size | Samples | Function                                                                      | Location                                              |
| ----: | -------: | ------: | ----------------------------------------------------------------------------- | ----------------------------------------------------- |
| 39.0% |  264 MiB |     523 | `invokeStatic(Object, Object)`                                                | `java.lang.invoke.LambdaForm$DMH.0x000000f001008400`  |
| 39.0% |  264 MiB |     523 | `invoke(Object, Object, Object)`                                              | `java.lang.invoke.LambdaForm$MH.0x000000f001009800`   |
| 39.0% |  264 MiB |     523 | `invokeExact_MT(Object, Object, Object, Object)`                              | `java.lang.invoke.Invokers$Holder`                    |
| 39.0% |  264 MiB |     523 | `invokeImpl(Object, Object[])`                                                | `jdk.internal.reflect.DirectMethodHandleAccessor`     |
| 39.0% |  264 MiB |     523 | `invoke(Object, Object[])`                                                    | `jdk.internal.reflect.DirectMethodHandleAccessor`     |
| 39.0% |  264 MiB |     523 | `invoke(Object, Object[])`                                                    | `java.lang.reflect.Method`                            |
| 26.8% |  182 MiB |     363 | `<init>(int)`                                                                 | `java.io.ByteArrayOutputStream`                       |
| 25.7% |  174 MiB |     348 | `copyOf(byte[], int)`                                                         | `java.util.Arrays`                                    |
| 24.2% |  164 MiB |     328 | `toByteArray()`                                                               | `java.io.ByteArrayOutputStream`                       |
|  8.8% | 59.5 MiB |     119 | `run()`                                                                       | `java.util.concurrent.CompletableFuture$AsyncRun`     |
|  8.8% | 59.5 MiB |     119 | `runWorker(ThreadPoolExecutor$Worker)`                                        | `java.util.concurrent.ThreadPoolExecutor`             |
|  8.8% | 59.5 MiB |     119 | `run()`                                                                       | `java.util.concurrent.ThreadPoolExecutor$Worker`      |
|  8.8% | 59.5 MiB |     119 | `runWith(Object, Runnable)`                                                   | `java.lang.Thread`                                    |
|  8.8% | 59.5 MiB |     119 | `run()`                                                                       | `java.lang.Thread`                                    |
|  8.5% | 57.5 MiB |     115 | `resumeWith(Object)`                                                          | `kotlin.coroutines.jvm.internal.BaseContinuationImpl` |
|  5.4% | 36.5 MiB |      73 | `clone()`                                                                     | `java.lang.Object`                                    |
|  3.5% | 23.5 MiB |      47 | `copyOfRange(byte[], int, int)`                                               | `java.util.Arrays`                                    |
|  3.2% | 21.5 MiB |      43 | `getValue()`                                                                  | `kotlin.SafePublicationLazyImpl`                      |
|  3.0% |   20 MiB |      40 | `copyOfRangeByte(byte[], int, int)`                                           | `java.util.Arrays`                                    |
|  2.9% | 19.5 MiB |      39 | `linkCallSiteImpl(Class, MethodHandle, String, MethodType, Object, Object[])` | `java.lang.invoke.MethodHandleNatives`                |

##### Ours

|     % |    Size | Samples | Function                                                                                                                                      | Location                                                |
| ----: | ------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 91.2% | 618 MiB |   1,230 | `run(String[])`                                                                                                                               | `org.jetbrains.kotlin.preloading.Preloader`             |
| 91.2% | 618 MiB |   1,230 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.preloading.Preloader`             |
| 52.2% | 354 MiB |     707 | `loadAllClassesFromJars(Collection, int, ClassHandler)`                                                                                       | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`  |
| 52.2% | 354 MiB |     707 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)`                                                                  | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`  |
| 39.0% | 264 MiB |     523 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`  |
| 39.0% | 264 MiB |     523 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 38.5% | 261 MiB |     522 | `exec(PrintStream, Services, MessageRenderer, String[])`                                                                                      | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 38.5% | 261 MiB |     522 | `exec(PrintStream, MessageRenderer, String[])`                                                                                                | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 38.5% | 261 MiB |     522 | `doMainNoExit(CLICompiler, String[], MessageRenderer)`                                                                                        | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 38.5% | 261 MiB |     522 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)`                                            | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 38.5% | 261 MiB |     522 | `doMain(CLICompiler, String[])`                                                                                                               | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 38.3% | 259 MiB |     519 | `exec(MessageCollector, Services, CommonCompilerArguments)`                                                                                   | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 37.9% | 257 MiB |     514 | `runPhasedPipeline(ArgumentsPipelineArtifact)`                                                                                                | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 37.9% | 257 MiB |     514 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)`                                           | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 37.9% | 257 MiB |     514 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 37.9% | 257 MiB |     514 | `execute(CommonCompilerArguments, Services, MessageCollector)`                                                                                | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 37.9% | 257 MiB |     514 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)`                                                                         | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 37.9% | 257 MiB |     514 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)`                                                                        | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 37.9% | 257 MiB |     514 | `execImpl(MessageCollector, Services, CommonCompilerArguments)`                                                                               | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 37.8% | 256 MiB |     512 | `phaseBody(PipelineContext, PipelineArtifact)`                                                                                                | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`       |

#### Callers

Callers with the largest contribution to each function's total size. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

|      % |    Size | Samples | Caller           | Location                                    |
| -----: | ------: | ------: | ---------------- | ------------------------------------------- |
| 100.0% | 618 MiB |   1,230 | `main(String[])` | `org.jetbrains.kotlin.preloading.Preloader` |

##### `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`)

|      % |    Size | Samples | Caller                                                                       | Location                                               |
| -----: | ------: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% | 354 MiB |     707 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`)

|      % |     Size | Samples | Caller                                                                       | Location                                               |
| -----: | -------: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% |  354 MiB |     707 | `run(String[])`                                                              | `org.jetbrains.kotlin.preloading.Preloader`            |
|   9.4% | 33.4 MiB |      66 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`)

|      % |    Size | Samples | Caller           | Location                                     |
| -----: | ------: | ------: | ---------------- | -------------------------------------------- |
| 100.0% | 264 MiB |     523 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % |    Size | Samples | Caller                         | Location                                             |
| -----: | ------: | ------: | ------------------------------ | ---------------------------------------------------- |
| 100.0% | 264 MiB |     523 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000f001008400` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000f001008400`)

|      % |    Size | Samples | Caller                           | Location                                            |
| -----: | ------: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% | 264 MiB |     523 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f001009800` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f001009800`)

|      % |    Size | Samples | Caller                                           | Location                           |
| -----: | ------: | ------: | ------------------------------------------------ | ---------------------------------- |
| 100.0% | 264 MiB |     523 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % |    Size | Samples | Caller                         | Location                                          |
| -----: | ------: | ------: | ------------------------------ | ------------------------------------------------- |
| 100.0% | 264 MiB |     523 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % |    Size | Samples | Caller                     | Location                                          |
| -----: | ------: | ------: | -------------------------- | ------------------------------------------------- |
| 100.0% | 264 MiB |     523 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % |    Size | Samples | Caller                     | Location                   |
| -----: | ------: | ------: | -------------------------- | -------------------------- |
| 100.0% | 264 MiB |     523 | `invoke(Object, Object[])` | `java.lang.reflect.Method` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

|      % |    Size | Samples | Caller                           | Location                                                                                  |
| -----: | ------: | ------: | -------------------------------- | ----------------------------------------------------------------------------------------- |
| 100.0% | 264 MiB |     523 | `run(String[])`                  | `org.jetbrains.kotlin.preloading.Preloader`                                               |
|   0.2% | 512 KiB |       1 | `loadGetRecordComponents(Class)` | `kotlin.reflect.jvm.internal.impl.descriptors.runtime.structure.Java16SealedRecordLoader` |

##### `exec(PrintStream, Services, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % |    Size | Samples | Caller                                         | Location                                      |
| -----: | ------: | ------: | ---------------------------------------------- | --------------------------------------------- |
| 100.0% | 261 MiB |     522 | `exec(PrintStream, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `exec(PrintStream, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % |    Size | Samples | Caller                                                 | Location                                                |
| -----: | ------: | ------: | ------------------------------------------------------ | ------------------------------------------------------- |
| 100.0% | 261 MiB |     522 | `doMainNoExit(CLICompiler, String[], MessageRenderer)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % |    Size | Samples | Caller                                                                                             | Location                                                |
| -----: | ------: | ------: | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% | 261 MiB |     522 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % |    Size | Samples | Caller                          | Location                                                |
| -----: | ------: | ------: | ------------------------------- | ------------------------------------------------------- |
| 100.0% | 261 MiB |     522 | `doMain(CLICompiler, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `doMain(CLICompiler, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % |    Size | Samples | Caller           | Location                                               |
| -----: | ------: | ------: | ---------------- | ------------------------------------------------------ |
| 100.0% | 261 MiB |     522 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion` |

##### `exec(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % |    Size | Samples | Caller                                                   | Location                                      |
| -----: | ------: | ------: | -------------------------------------------------------- | --------------------------------------------- |
| 100.0% | 259 MiB |     519 | `exec(PrintStream, Services, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % |    Size | Samples | Caller                                                                                              | Location                                                |
| -----: | ------: | ------: | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% | 257 MiB |     514 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % |    Size | Samples | Caller                                                                                                                                        | Location                                                |
| -----: | ------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% | 257 MiB |     514 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % |    Size | Samples | Caller                                                         | Location                                                |
| -----: | ------: | ------: | -------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% | 257 MiB |     514 | `execute(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `execute(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % |    Size | Samples | Caller                                                                | Location                                     |
| -----: | ------: | ------: | --------------------------------------------------------------------- | -------------------------------------------- |
| 100.0% | 257 MiB |     514 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % |    Size | Samples | Caller                                                                 | Location                                     |
| -----: | ------: | ------: | ---------------------------------------------------------------------- | -------------------------------------------- |
| 100.0% | 257 MiB |     514 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % |    Size | Samples | Caller                                                          | Location                                      |
| -----: | ------: | ------: | --------------------------------------------------------------- | --------------------------------------------- |
| 100.0% | 257 MiB |     514 | `execImpl(MessageCollector, Services, CommonCompilerArguments)` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % |    Size | Samples | Caller                                                      | Location                                      |
| -----: | ------: | ------: | ----------------------------------------------------------- | --------------------------------------------- |
| 100.0% | 257 MiB |     514 | `exec(MessageCollector, Services, CommonCompilerArguments)` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

|      % |    Size | Samples | Caller                              | Location                                          |
| -----: | ------: | ------: | ----------------------------------- | ------------------------------------------------- |
| 100.0% | 256 MiB |     512 | `phaseBody(LoggingContext, Object)` | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase` |

##### `<init>(int)` (`java.io.ByteArrayOutputStream`)

|      % |    Size | Samples | Caller                                                  | Location                                               |
| -----: | ------: | ------: | ------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% | 182 MiB |     363 | `loadAllClassesFromJars(Collection, int, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `copyOf(byte[], int)` (`java.util.Arrays`)

|     % |    Size | Samples | Caller                        | Location                          |
| ----: | ------: | ------: | ----------------------------- | --------------------------------- |
| 94.3% | 164 MiB |     328 | `toByteArray()`               | `java.io.ByteArrayOutputStream`   |
|  4.9% | 8.5 MiB |      17 | `ensureCapacityInternal(int)` | `java.lang.AbstractStringBuilder` |
|  0.9% | 1.5 MiB |       3 | `getBytes()`                  | `jdk.internal.loader.Resource`    |

##### `toByteArray()` (`java.io.ByteArrayOutputStream`)

|      % |    Size | Samples | Caller                                                  | Location                                               |
| -----: | ------: | ------: | ------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% | 164 MiB |     328 | `loadAllClassesFromJars(Collection, int, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`)

|      % |     Size | Samples | Caller                                 | Location                                  |
| -----: | -------: | ------: | -------------------------------------- | ----------------------------------------- |
| 100.0% | 59.5 MiB |     119 | `runWorker(ThreadPoolExecutor$Worker)` | `java.util.concurrent.ThreadPoolExecutor` |

##### `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`)

|      % |     Size | Samples | Caller  | Location                                         |
| -----: | -------: | ------: | ------- | ------------------------------------------------ |
| 100.0% | 59.5 MiB |     119 | `run()` | `java.util.concurrent.ThreadPoolExecutor$Worker` |

##### `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`)

|      % |     Size | Samples | Caller                      | Location           |
| -----: | -------: | ------: | --------------------------- | ------------------ |
| 100.0% | 59.5 MiB |     119 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `runWith(Object, Runnable)` (`java.lang.Thread`)

|      % |     Size | Samples | Caller  | Location           |
| -----: | -------: | ------: | ------- | ------------------ |
| 100.0% | 59.5 MiB |     119 | `run()` | `java.lang.Thread` |

##### `resumeWith(Object)` (`kotlin.coroutines.jvm.internal.BaseContinuationImpl`)

|     % |     Size | Samples | Caller                                                             | Location                                                              |
| ----: | -------: | ------: | ------------------------------------------------------------------ | --------------------------------------------------------------------- |
| 96.5% | 55.5 MiB |     111 | `resumeTask(TowerResolveManager$SuspendedResolverTask)`            | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager`    |
| 32.2% | 18.5 MiB |      37 | `processCandidate(Candidate, ResolutionContext, boolean, boolean)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner` |

##### `clone()` (`java.lang.Object`)

|     % |     Size | Samples | Caller                          | Location           |
| ----: | -------: | ------: | ------------------------------- | ------------------ |
| 97.3% | 35.5 MiB |      71 | `copyOf(byte[], int)`           | `java.util.Arrays` |
|  2.7% |    1 MiB |       2 | `copyOfRange(byte[], int, int)` | `java.util.Arrays` |

##### `copyOfRange(byte[], int, int)` (`java.util.Arrays`)

|     % |    Size | Samples | Caller                                           | Location                 |
| ----: | ------: | ------: | ------------------------------------------------ | ------------------------ |
| 40.4% | 9.5 MiB |      19 | `newString(byte[], int, int)`                    | `java.lang.StringLatin1` |
| 25.5% |   6 MiB |      12 | `<init>(AbstractStringBuilder, Void)`            | `java.lang.String`       |
| 17.0% |   4 MiB |       8 | `<init>(Charset, byte[], int, int)`              | `java.lang.String`       |
| 17.0% |   4 MiB |       8 | `newStringUTF8NoRepl(byte[], int, int, boolean)` | `java.lang.String`       |

##### `getValue()` (`kotlin.SafePublicationLazyImpl`)

|     % |    Size | Samples | Caller                     | Location                                                                        |
| ----: | ------: | ------: | -------------------------- | ------------------------------------------------------------------------------- |
| 74.4% |  16 MiB |      32 | `getAnnotationInfo()`      | `org.jetbrains.kotlin.fir.java.deserialization.JvmBinaryAnnotationDeserializer` |
| 11.6% | 2.5 MiB |       5 | `getJavaField()`           | `kotlin.reflect.jvm.internal.DescriptorKProperty`                               |
|  9.3% |   2 MiB |       4 | `getDeclarations()`        | `org.jetbrains.kotlin.fir.java.FirLazyJavaDeclarationList`                      |
|  9.3% |   2 MiB |       4 | `getCallablesIndex()`      | `org.jetbrains.kotlin.fir.scopes.impl.FirClassDeclaredMemberScopeImpl`          |
|  9.3% |   2 MiB |       4 | `getCallableNamesCached()` | `org.jetbrains.kotlin.fir.scopes.impl.AbstractFirUseSiteMemberScope`            |

##### `copyOfRangeByte(byte[], int, int)` (`java.util.Arrays`)

|      % |   Size | Samples | Caller                          | Location           |
| -----: | -----: | ------: | ------------------------------- | ------------------ |
| 100.0% | 20 MiB |      40 | `copyOfRange(byte[], int, int)` | `java.util.Arrays` |

##### `linkCallSiteImpl(Class, MethodHandle, String, MethodType, Object, Object[])` (`java.lang.invoke.MethodHandleNatives`)

|      % |     Size | Samples | Caller                                                           | Location                               |
| -----: | -------: | ------: | ---------------------------------------------------------------- | -------------------------------------- |
| 100.0% | 19.5 MiB |      39 | `linkCallSite(Object, Object, Object, Object, Object, Object[])` | `java.lang.invoke.MethodHandleNatives` |

#### Callees

Callees with the largest contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

|     % |    Size | Samples | Callee                                                                       | Location                                               |
| ----: | ------: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------------ |
| 57.3% | 354 MiB |     707 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |
| 42.7% | 264 MiB |     523 | `invoke(Object, Object[])`                                                   | `java.lang.reflect.Method`                             |

##### `main(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

|      % |    Size | Samples | Callee          | Location                                    |
| -----: | ------: | ------: | --------------- | ------------------------------------------- |
| 100.0% | 618 MiB |   1,230 | `run(String[])` | `org.jetbrains.kotlin.preloading.Preloader` |

##### `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`)

|     % |    Size | Samples | Callee                | Location                        |
| ----: | ------: | ------: | --------------------- | ------------------------------- |
| 51.3% | 182 MiB |     363 | `<init>(int)`         | `java.io.ByteArrayOutputStream` |
| 46.4% | 164 MiB |     328 | `toByteArray()`       | `java.io.ByteArrayOutputStream` |
|  2.0% |   7 MiB |      14 | `getNextEntry()`      | `java.util.zip.ZipInputStream`  |
|  0.1% | 512 KiB |       1 | `put(Object, Object)` | `java.util.HashMap`             |

##### `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`)

|      % |     Size | Samples | Callee                                                                       | Location                                               |
| -----: | -------: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% |  354 MiB |     707 | `loadAllClassesFromJars(Collection, int, ClassHandler)`                      | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |
|   9.4% | 33.4 MiB |      66 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`)

|     % |     Size | Samples | Callee                          | Location                                                |
| ----: | -------: | ------: | ------------------------------- | ------------------------------------------------------- |
| 98.8% |  261 MiB |     522 | `doMain(CLICompiler, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
|  1.2% | 3.21 MiB |       1 | `<init>()`                      | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % |    Size | Samples | Callee           | Location                                               |
| -----: | ------: | ------: | ---------------- | ------------------------------------------------------ |
| 100.0% | 264 MiB |     523 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000f001008400`)

|      % |    Size | Samples | Callee           | Location                                     |
| -----: | ------: | ------: | ---------------- | -------------------------------------------- |
| 100.0% | 264 MiB |     523 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f001009800`)

|      % |    Size | Samples | Callee                         | Location                                             |
| -----: | ------: | ------: | ------------------------------ | ---------------------------------------------------- |
| 100.0% | 264 MiB |     523 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000f001008400` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % |    Size | Samples | Callee                           | Location                                            |
| -----: | ------: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% | 264 MiB |     523 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f001009800` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % |    Size | Samples | Callee                                           | Location                           |
| -----: | ------: | ------: | ------------------------------------------------ | ---------------------------------- |
| 100.0% | 264 MiB |     523 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % |    Size | Samples | Callee                         | Location                                          |
| -----: | ------: | ------: | ------------------------------ | ------------------------------------------------- |
| 100.0% | 264 MiB |     523 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

|      % |    Size | Samples | Callee                     | Location                                          |
| -----: | ------: | ------: | -------------------------- | ------------------------------------------------- |
| 100.0% | 264 MiB |     523 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |
|   0.2% | 512 KiB |       1 | `acquireMethodAccessor()`  | `java.lang.reflect.Method`                        |

##### `exec(PrintStream, Services, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|     % |    Size | Samples | Callee                                                                               | Location                                                                |
| ----: | ------: | ------: | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------- |
| 99.4% | 259 MiB |     519 | `exec(MessageCollector, Services, CommonCompilerArguments)`                          | `org.jetbrains.kotlin.cli.common.CLICompiler`                           |
|  0.6% | 1.5 MiB |       3 | `parseCommandLineArguments$default(List, CommonToolArguments, boolean, int, Object)` | `org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt` |

##### `exec(PrintStream, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % |    Size | Samples | Callee                                                   | Location                                      |
| -----: | ------: | ------: | -------------------------------------------------------- | --------------------------------------------- |
| 100.0% | 261 MiB |     522 | `exec(PrintStream, Services, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % |    Size | Samples | Callee                                         | Location                                      |
| -----: | ------: | ------: | ---------------------------------------------- | --------------------------------------------- |
| 100.0% | 261 MiB |     522 | `exec(PrintStream, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % |    Size | Samples | Callee                                                 | Location                                                |
| -----: | ------: | ------: | ------------------------------------------------------ | ------------------------------------------------------- |
| 100.0% | 261 MiB |     522 | `doMainNoExit(CLICompiler, String[], MessageRenderer)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `doMain(CLICompiler, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % |    Size | Samples | Callee                                                                                             | Location                                                |
| -----: | ------: | ------: | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% | 261 MiB |     522 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `exec(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|     % |    Size | Samples | Callee                                                          | Location                                      |
| ----: | ------: | ------: | --------------------------------------------------------------- | --------------------------------------------- |
| 99.0% | 257 MiB |     514 | `execImpl(MessageCollector, Services, CommonCompilerArguments)` | `org.jetbrains.kotlin.cli.common.CLICompiler` |
|  1.0% | 2.5 MiB |       5 | `<clinit>()`                                                    | `org.jetbrains.kotlin.cli.common.ArgumentsKt` |

##### `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|     % |    Size | Samples | Callee                                                                          | Location                                                                    |
| ----: | ------: | ------: | ------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| 99.6% | 256 MiB |     512 | `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)`            | `org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`                        |
|  0.4% |   1 MiB |       2 | `reportToMessageCollector(BaseDiagnosticsCollector, MessageCollector, boolean)` | `org.jetbrains.kotlin.cli.common.fir.FirDiagnosticsCompilerResultsReporter` |

##### `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % |    Size | Samples | Callee                                         | Location                                                |
| -----: | ------: | ------: | ---------------------------------------------- | ------------------------------------------------------- |
| 100.0% | 257 MiB |     514 | `runPhasedPipeline(ArgumentsPipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % |    Size | Samples | Callee                                                                                              | Location                                                |
| -----: | ------: | ------: | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% | 257 MiB |     514 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `execute(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % |    Size | Samples | Callee                                                                                                                                        | Location                                                |
| -----: | ------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% | 257 MiB |     514 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % |    Size | Samples | Callee                                                         | Location                                                |
| -----: | ------: | ------: | -------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% | 257 MiB |     514 | `execute(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % |    Size | Samples | Callee                                                                | Location                                     |
| -----: | ------: | ------: | --------------------------------------------------------------------- | -------------------------------------------- |
| 100.0% | 257 MiB |     514 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % |    Size | Samples | Callee                                                                 | Location                                     |
| -----: | ------: | ------: | ---------------------------------------------------------------------- | -------------------------------------------- |
| 100.0% | 257 MiB |     514 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

|     % |     Size | Samples | Callee                           | Location                                                              |
| ----: | -------: | ------: | -------------------------------- | --------------------------------------------------------------------- |
| 85.0% |  217 MiB |     435 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`      |
|  7.4% |   19 MiB |      38 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`       |
|  7.2% | 18.5 MiB |      37 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFir2IrPipelinePhase`        |
|  0.4% |    1 MiB |       2 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmConfigurationPipelinePhase` |

##### `copyOf(byte[], int)` (`java.util.Arrays`)

|     % |     Size | Samples | Callee    | Location           |
| ----: | -------: | ------: | --------- | ------------------ |
| 20.4% | 35.5 MiB |      71 | `clone()` | `java.lang.Object` |

##### `toByteArray()` (`java.io.ByteArrayOutputStream`)

|      % |    Size | Samples | Callee                | Location           |
| -----: | ------: | ------: | --------------------- | ------------------ |
| 100.0% | 164 MiB |     328 | `copyOf(byte[], int)` | `java.util.Arrays` |

##### `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`)

|      % |     Size | Samples | Callee  | Location                                                                          |
| -----: | -------: | ------: | ------- | --------------------------------------------------------------------------------- |
| 100.0% | 59.5 MiB |     119 | `run()` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000f0018923a0` |

##### `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`)

|      % |     Size | Samples | Callee  | Location                                          |
| -----: | -------: | ------: | ------- | ------------------------------------------------- |
| 100.0% | 59.5 MiB |     119 | `run()` | `java.util.concurrent.CompletableFuture$AsyncRun` |

##### `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`)

|      % |     Size | Samples | Callee                                 | Location                                  |
| -----: | -------: | ------: | -------------------------------------- | ----------------------------------------- |
| 100.0% | 59.5 MiB |     119 | `runWorker(ThreadPoolExecutor$Worker)` | `java.util.concurrent.ThreadPoolExecutor` |

##### `runWith(Object, Runnable)` (`java.lang.Thread`)

|      % |     Size | Samples | Callee  | Location                                         |
| -----: | -------: | ------: | ------- | ------------------------------------------------ |
| 100.0% | 59.5 MiB |     119 | `run()` | `java.util.concurrent.ThreadPoolExecutor$Worker` |

##### `run()` (`java.lang.Thread`)

|      % |     Size | Samples | Callee                      | Location           |
| -----: | -------: | ------: | --------------------------- | ------------------ |
| 100.0% | 59.5 MiB |     119 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `resumeWith(Object)` (`kotlin.coroutines.jvm.internal.BaseContinuationImpl`)

|     % |     Size | Samples | Callee                  | Location                                                                                                      |
| ----: | -------: | ------: | ----------------------- | ------------------------------------------------------------------------------------------------------------- |
| 80.9% | 46.5 MiB |      93 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask$processLevel$6`                         |
| 32.2% | 18.5 MiB |      37 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner$processCandidate$1`                      |
|  8.7% |    5 MiB |      10 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver$enqueueResolutionTasks$2`                      |
|  3.5% |    2 MiB |       4 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver$enqueueResolutionTasks$1`                      |
|  3.5% |    2 MiB |       4 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirInvokeResolveTowerExtension$enqueueResolverTasksForInvoke$3` |

##### `copyOfRange(byte[], int, int)` (`java.util.Arrays`)

|     % |   Size | Samples | Callee                              | Location           |
| ----: | -----: | ------: | ----------------------------------- | ------------------ |
| 85.1% | 20 MiB |      40 | `copyOfRangeByte(byte[], int, int)` | `java.util.Arrays` |
|  4.3% |  1 MiB |       2 | `clone()`                           | `java.lang.Object` |

##### `getValue()` (`kotlin.SafePublicationLazyImpl`)

|     % |    Size | Samples | Callee     | Location                                                                                                   |
| ----: | ------: | ------: | ---------- | ---------------------------------------------------------------------------------------------------------- |
| 74.4% |  16 MiB |      32 | `invoke()` | `org.jetbrains.kotlin.fir.java.deserialization.JvmBinaryAnnotationDeserializer$$Lambda.0x000000f0015dc9b0` |
| 11.6% | 2.5 MiB |       5 | `invoke()` | `kotlin.reflect.jvm.internal.DescriptorKProperty$$Lambda$0`                                                |
|  9.3% |   2 MiB |       4 | `invoke()` | `org.jetbrains.kotlin.fir.java.FirLazyJavaDeclarationList$$Lambda.0x000000f001614508`                      |
|  9.3% |   2 MiB |       4 | `invoke()` | `org.jetbrains.kotlin.fir.scopes.impl.FirClassDeclaredMemberScopeImpl$$Lambda.0x000000f00162ce28`          |
|  9.3% |   2 MiB |       4 | `invoke()` | `org.jetbrains.kotlin.fir.scopes.impl.AbstractFirUseSiteMemberScope$$Lambda.0x000000f001634bc0`            |

##### `linkCallSiteImpl(Class, MethodHandle, String, MethodType, Object, Object[])` (`java.lang.invoke.MethodHandleNatives`)

|     % |    Size | Samples | Callee                                                      | Location                    |
| ----: | ------: | ------: | ----------------------------------------------------------- | --------------------------- |
| 97.4% |  19 MiB |      38 | `makeSite(MethodHandle, String, MethodType, Object, Class)` | `java.lang.invoke.CallSite` |
|  2.6% | 512 KiB |       1 | `linkToTargetMethod(MethodType)`                            | `java.lang.invoke.Invokers` |

## Hottest call stacks

Call stacks with the most bytes allocated in their leaf frame.

|     % |     Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ----: | -------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 24.4% |  165 MiB |     331 | `<init>(int)` (`java.io.ByteArrayOutputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 18.7% |  126 MiB |     253 | `copyOf(byte[], int)` (`java.util.Arrays`) ← `toByteArray()` (`java.io.ByteArrayOutputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  3.2% | 21.5 MiB |      43 | `clone()` (`java.lang.Object`) ← `copyOf(byte[], int)` (`java.util.Arrays`) ← `toByteArray()` (`java.io.ByteArrayOutputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  2.4% | 16.2 MiB |      32 | `<init>(int)` (`java.io.ByteArrayOutputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  2.1% |   14 MiB |      28 | `clone()` (`java.lang.Object`) ← `copyOf(byte[], int)` (`java.util.Arrays`) ← `toByteArray()` (`java.io.ByteArrayOutputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  0.6% |    4 MiB |       8 | `copyOfRangeByte(byte[], int, int)` (`java.util.Arrays`) ← `copyOfRange(byte[], int, int)` ← `newStringUTF8NoRepl(byte[], int, int, boolean)` (`java.lang.String`) ← `newStringUTF8NoRepl(byte[], int, int)` (`java.lang.System$2`) ← `toString(byte[], int, int)` (`java.util.zip.ZipCoder$UTF8ZipCoder`) ← `toStringUTF8(byte[], int)` (`java.util.zip.ZipCoder`) ← `readLOC()` (`java.util.zip.ZipInputStream`) ← `getNextEntry()` ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  0.5% | 3.21 MiB |       1 | `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`) ← `<init>(ZipFile$Source$Key, boolean, ZipCoder)` ← `get(File, boolean, ZipCoder)` ← `<init>(ZipFile, ZipCoder, File, int)` (`java.util.zip.ZipFile$CleanableResource`) ← `<init>(File, int, Charset)` (`java.util.zip.ZipFile`) ← `<init>(File, int)` ← `<init>(File, boolean, int, Runtime$Version)` (`java.util.jar.JarFile`) ← `getJarFile(URL)` (`jdk.internal.loader.URLClassPath$JarLoader`) ← `run()` (`jdk.internal.loader.URLClassPath$JarLoader$1`) ← `run()` ← `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` (`java.security.AccessController`) ← `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` ← `ensureOpen()` (`jdk.internal.loader.URLClassPath$JarLoader`) ← `<init>(URL, URLStreamHandler, HashMap, AccessControlContext)` ← `run()` (`jdk.internal.loader.URLClassPath$3`) ← `run()` ← `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` (`java.security.AccessController`) ← `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` ← `getLoader(URL)` (`jdk.internal.loader.URLClassPath`) ← `getLoader(int)` ← `findResource(String, boolean)` ← `run()` (`java.net.URLClassLoader$2`) ← `run()` ← `executePrivileged(PrivilegedAction, AccessControlContext, Class)` (`java.security.AccessController`) ← `doPrivileged(PrivilegedAction, AccessControlContext)` ← `findResource(String)` (`java.net.URLClassLoader`) ← `getResource(String)` (`java.lang.ClassLoader`) ← `getResource(String)` (`org.jetbrains.kotlin.preloading.MemoryBasedClassLoader`) ← `<init>()` (`org.jetbrains.kotlin.cli.common.CLICompiler`) ← `<init>()` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`) ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000f001008400`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f001009800`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  0.4% |  2.5 MiB |       5 | `simplifyTrivialInstructions(MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer`) ← `transform(String, MethodNode)` ← `transform(String, MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.transformer.CompositeMethodTransformer`) ← `performTransformations(MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`) ← `visitEnd()` (`org.jetbrains.kotlin.codegen.TransformationMethodVisitor`) ← `visitEnd()` (`org.jetbrains.org.objectweb.asm.MethodVisitor`) ← `accept(MethodVisitor)` (`org.jetbrains.org.objectweb.asm.tree.MethodNode`) ← `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000f0018923a0`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`) ← `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`) ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  0.3% | 2.19 MiB |       4 | `copyOf(byte[], int)` (`java.util.Arrays`) ← `toByteArray()` (`java.io.ByteArrayOutputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  0.3% |    2 MiB |       4 | `<init>(int, int)` (`org.jetbrains.org.objectweb.asm.tree.analysis.Frame`) ← `_init_$lambda$0(int, int)` (`org.jetbrains.kotlin.codegen.optimization.common.FastMethodAnalyzer`) ← `invoke(Object, Object)` (`org.jetbrains.kotlin.codegen.optimization.common.FastMethodAnalyzer$$Lambda.0x000000f0018e4700`) ← `fullMergeControlFlowEdge(int, Frame, boolean)` (`org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer`) ← `mergeControlFlowEdge(int, Frame, boolean)` ← `processControlFlowEdge(Frame, AbstractInsnNode, int, boolean)` ← `processControlFlowEdge$default(FastAnalyzer, Frame, AbstractInsnNode, int, boolean, int, Object)` ← `visitOpInsn(AbstractInsnNode, Frame, int)` ← `visitMeaningfulInstruction(AbstractInsnNode, int, int, Frame, int)` ← `analyzeInstruction(AbstractInsnNode, int, Frame, Frame, Frame)` ← `analyzeMainLoop()` ← `analyze()` ← `analyze(String, MethodNode, Interpreter)` (`org.jetbrains.kotlin.codegen.optimization.transformer.MethodTransformer`) ← `collectRewriteActions()` (`org.jetbrains.kotlin.codegen.optimization.ConstantConditionEliminationMethodTransformer$ConstantConditionsOptimization`) ← `run()` ← `transform(String, MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.ConstantConditionEliminationMethodTransformer`) ← `transform(String, MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.transformer.CompositeMethodTransformer`) ← `performTransformations(MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`) ← `visitEnd()` (`org.jetbrains.kotlin.codegen.TransformationMethodVisitor`) ← `visitEnd()` (`org.jetbrains.org.objectweb.asm.MethodVisitor`) ← `accept(MethodVisitor)` (`org.jetbrains.org.objectweb.asm.tree.MethodNode`) ← `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000f0018923a0`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`) ← `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`) ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  0.3% |    2 MiB |       4 | `createZipEntry(String)` (`java.util.zip.ZipInputStream`) ← `readLOC()` ← `getNextEntry()` ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  0.3% |    2 MiB |       4 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `readMessage(Parser, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.CodedInputStream`) ← `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type$Argument`) ← `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type$Argument$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `readMessage(Parser, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.CodedInputStream`) ← `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type`) ← `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `readMessage(Parser, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.CodedInputStream`) ← `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$ValueParameter`) ← `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$ValueParameter$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `readMessage(Parser, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.CodedInputStream`) ← `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Function`) ← `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Function$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `readMessage(Parser, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.CodedInputStream`) ← `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Package`) ← `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Package$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `parsePartialFrom(InputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.AbstractParser`) ← `parseFrom(InputStream, ExtensionRegistryLite)` ← `parseFrom(InputStream, ExtensionRegistryLite)` ← `parseFrom(InputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Package`) ← `readPackageDataFrom(byte[], String[])` (`org.jetbrains.kotlin.metadata.jvm.deserialization.JvmProtoBufUtil`) ← `readPackageDataFrom(String[], String[])` ← `computePackagePartInfo(FqName, String)` (`org.jetbrains.kotlin.fir.java.deserialization.JvmClassFileBasedSymbolProvider`) ← `computePackagePartsInfos(FqName)` ← `tryComputePackagePartInfos(FqName)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider`) ← `access$tryComputePackagePartInfos(AbstractFirDeserializedSymbolProvider, FqName)` ← `invoke(Object, Void)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider$special$$inlined$createCache$2`) ← `invoke(Object, Object)` ← `getValue(Object, Object)` (`org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache`) ← `getPackageParts(FqName)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider`) ← `access$getPackageParts(AbstractFirDeserializedSymbolProvider, FqName)` ← `computeTopLevelCallableNames(FqName)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider$symbolNamesProvider$1`) ← `invoke(Object, Void)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider$topLevelCallableNamesByPackage_delegate$lambda$0$$inlined$createCache$1`) ← `invoke(Object, Object)` ← `getValue(Object, Object)` (`org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache`) ← `getTopLevelCallableNamesInPackage(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider`) ← `computeTopLevelCallableNames(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCompositeCachedSymbolNamesProvider`) ← `computeTopLevelCallableNames(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider$symbolNamesProvider$1`) ← `invoke(Object, Void)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider$topLevelCallableNamesByPackage_delegate$lambda$0$$inlined$createCache$1`) ← `invoke(Object, Object)` ← `getValue(Object, Object)` (`org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache`) ← `getTopLevelCallableNamesInPackage(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider`) ← `mayHaveTopLevelCallable(FqName, Name)` (`org.jetbrains.kotlin.fir.resolve.providers.FirSymbolNamesProvider`) ← `getTopLevelPropertySymbolsTo(List, FqName, Name)` (`org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider`) ← `getTopLevelPropertySymbols(FqName, Name)` (`org.jetbrains.kotlin.fir.resolve.providers.FirSymbolProvider`) ← `processPropertiesByName(Name, Function1)` (`org.jetbrains.kotlin.fir.scopes.impl.FirSingleLevelDefaultStarImportingScope`) ← `invoke(FirScope, Name, Function1)` (`org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope$processPropertiesByName$1`) ← `invoke(Object, Object, Object)` ← `processSymbolsByName(Name, Function3, Function1)` (`org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope`) ← `processPropertiesByName(Name, Function1)` ← `getProperties(FirScope, Name)` (`org.jetbrains.kotlin.fir.scopes.FirScopeKt`) ← `resolveFromImportScope(FirQualifiedAccessExpression)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer$FirEnumAnnotationArgumentsTransformer`) ← `resolveQualifiedAccessAndSelectCandidate(FirQualifiedAccessExpression, boolean, boolean, FirElement, ResolutionMode)` ← `resolveQualifiedAccessAndSelectCandidate(FirQualifiedAccessExpression, boolean, boolean, FirElement, ResolutionMode)` ← `transformQualifiedAccessExpression(FirQualifiedAccessExpression, ResolutionMode, boolean, boolean, boolean)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`) ← `transformQualifiedAccessExpression(FirQualifiedAccessExpression, ResolutionMode)` ← `transformPropertyAccessExpression(FirPropertyAccessExpression, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`) ← `transformPropertyAccessExpression(FirPropertyAccessExpression, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.FirPropertyAccessExpression`) ← `transformInplace(List, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `transformArguments(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.impl.FirArgumentListImpl`) ← `transformChildren(FirTransformer, Object)` ← `transformChildren(FirTransformer, Object)` ← `transformElement(FirElement, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`) ← `transformElement(FirElement, Object)` ← `transformArgumentList(FirArgumentList, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformer`) ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.FirArgumentList`) ← `transformChildren(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.impl.FirAnnotationCallImpl`) ← `transformChildren(FirTransformer, Object)` ← `transformAnnotation(FirAnnotation, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer$FirEnumAnnotationArgumentsTransformer`) ← `transformAnnotation(FirAnnotation, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`) ← `transformAnnotationCall(FirAnnotationCall, FirUserTypeRef)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer`) ← `transformAnnotationCall(FirAnnotationCall, Void)` ← `transformAnnotationCall(FirAnnotationCall, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.FirAnnotationCall`) ← `transformInplace(List, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `transformInplace-aLnlfrU(List, FirTransformer, Object)` ← `transformAnnotations(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.impl.FirRegularClassImpl`) ← `transformAnnotations(FirTransformer, Object)` ← `transformAnnotationContainer(FirAnnotationContainer, Void)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer`) ← `transformDeclaration(FirDeclaration, Void)` ← `transformRegularClass(FirRegularClass, Void)` ← `transformRegularClass(FirRegularClass, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.FirRegularClass`) ← `transformInplace(List, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `transformDeclarations(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.impl.FirFileImpl`) ← `transformDeclarations(FirTransformer, Object)` ← `invoke()` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer$transformFile$$inlined$resolveFile$1`) ← `invoke()` ← `withFileAndFileScopes(FirFile, Function0)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer`) ← `transformFile(FirFile, Void)` ← `transformFile(FirFile, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.FirFile`) ← `resolveAnnotations(FirFile)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirCompilerRequiredAnnotationsResolveTransformer`) ← `transformFile(FirFile, Void)` ← `transformFile(FirFile, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.FirFile`) ← `transformSingle(FirElement, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `process(Collection)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.FirCompilerRequiredAnnotationsResolveProcessor`) ← `process(List)` (`org.jetbrains.kotlin.fir.resolve.transformers.FirTotalResolveProcessor`) ← `runResolution(FirSession, List)` (`org.jetbrains.kotlin.fir.pipeline.AnalyseKt`) ← `resolveAndCheckFir(FirSession, List, BaseDiagnosticsCollector)` (`org.jetbrains.kotlin.fir.pipeline.FirUtilsKt`) ← `executePhase(ConfigurationPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`) ← `executePhase(PipelineArtifact)` ← `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`) ← `phaseBody(LoggingContext, Object)` ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`) ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.backend.common.phaser.CompositePhase`) ← `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`) ← `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`) ← `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` ← `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` ← `execute(CommonCompilerArguments, Services, MessageCollector)` ← `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` ← `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`) ← `exec(MessageCollector, Services, CommonCompilerArguments)` ← `exec(PrintStream, Services, MessageRenderer, String[])` ← `exec(PrintStream, MessageRenderer, String[])` ← `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`) ← `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` ← `doMain(CLICompiler, String[])` ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`) ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000f001008400`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f001009800`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])` |
|  0.3% |    2 MiB |       4 | `<init>(int)` (`org.jetbrains.kotlin.protobuf.ByteString$Output`) ← `newOutput()` (`org.jetbrains.kotlin.protobuf.ByteString`) ← `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Annotation$Argument`) ← `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Annotation$Argument$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `readMessage(Parser, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.CodedInputStream`) ← `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Annotation`) ← `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Annotation$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `readMessage(Parser, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.CodedInputStream`) ← `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Function`) ← `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Function$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `readMessage(Parser, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.CodedInputStream`) ← `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Package`) ← `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Package$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `parsePartialFrom(InputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.AbstractParser`) ← `parseFrom(InputStream, ExtensionRegistryLite)` ← `parseFrom(InputStream, ExtensionRegistryLite)` ← `parseFrom(InputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Package`) ← `readPackageDataFrom(byte[], String[])` (`org.jetbrains.kotlin.metadata.jvm.deserialization.JvmProtoBufUtil`) ← `readPackageDataFrom(String[], String[])` ← `computePackagePartInfo(FqName, String)` (`org.jetbrains.kotlin.fir.java.deserialization.JvmClassFileBasedSymbolProvider`) ← `computePackagePartsInfos(FqName)` ← `tryComputePackagePartInfos(FqName)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider`) ← `access$tryComputePackagePartInfos(AbstractFirDeserializedSymbolProvider, FqName)` ← `invoke(Object, Void)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider$special$$inlined$createCache$2`) ← `invoke(Object, Object)` ← `getValue(Object, Object)` (`org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache`) ← `getPackageParts(FqName)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider`) ← `access$getPackageParts(AbstractFirDeserializedSymbolProvider, FqName)` ← `computeTopLevelCallableNames(FqName)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider$symbolNamesProvider$1`) ← `invoke(Object, Void)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider$topLevelCallableNamesByPackage_delegate$lambda$0$$inlined$createCache$1`) ← `invoke(Object, Object)` ← `getValue(Object, Object)` (`org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache`) ← `getTopLevelCallableNamesInPackage(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider`) ← `computeTopLevelCallableNames(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCompositeCachedSymbolNamesProvider`) ← `computeTopLevelCallableNames(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider$symbolNamesProvider$1`) ← `invoke(Object, Void)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider$topLevelCallableNamesByPackage_delegate$lambda$0$$inlined$createCache$1`) ← `invoke(Object, Object)` ← `getValue(Object, Object)` (`org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache`) ← `getTopLevelCallableNamesInPackage(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider`) ← `mayHaveTopLevelCallable(FqName, Name)` (`org.jetbrains.kotlin.fir.resolve.providers.FirSymbolNamesProvider`) ← `getTopLevelPropertySymbolsTo(List, FqName, Name)` (`org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider`) ← `getTopLevelPropertySymbols(FqName, Name)` (`org.jetbrains.kotlin.fir.resolve.providers.FirSymbolProvider`) ← `processPropertiesByName(Name, Function1)` (`org.jetbrains.kotlin.fir.scopes.impl.FirSingleLevelDefaultStarImportingScope`) ← `invoke(FirScope, Name, Function1)` (`org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope$processPropertiesByName$1`) ← `invoke(Object, Object, Object)` ← `processSymbolsByName(Name, Function3, Function1)` (`org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope`) ← `processPropertiesByName(Name, Function1)` ← `getProperties(FirScope, Name)` (`org.jetbrains.kotlin.fir.scopes.FirScopeKt`) ← `resolveFromImportScope(FirQualifiedAccessExpression)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer$FirEnumAnnotationArgumentsTransformer`) ← `resolveQualifiedAccessAndSelectCandidate(FirQualifiedAccessExpression, boolean, boolean, FirElement, ResolutionMode)` ← `resolveQualifiedAccessAndSelectCandidate(FirQualifiedAccessExpression, boolean, boolean, FirElement, ResolutionMode)` ← `transformQualifiedAccessExpression(FirQualifiedAccessExpression, ResolutionMode, boolean, boolean, boolean)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`) ← `transformQualifiedAccessExpression(FirQualifiedAccessExpression, ResolutionMode)` ← `transformPropertyAccessExpression(FirPropertyAccessExpression, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`) ← `transformPropertyAccessExpression(FirPropertyAccessExpression, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.FirPropertyAccessExpression`) ← `transformInplace(List, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `transformArguments(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.impl.FirArgumentListImpl`) ← `transformChildren(FirTransformer, Object)` ← `transformChildren(FirTransformer, Object)` ← `transformElement(FirElement, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`) ← `transformElement(FirElement, Object)` ← `transformArgumentList(FirArgumentList, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformer`) ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.FirArgumentList`) ← `transformChildren(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.impl.FirAnnotationCallImpl`) ← `transformChildren(FirTransformer, Object)` ← `transformAnnotation(FirAnnotation, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer$FirEnumAnnotationArgumentsTransformer`) ← `transformAnnotation(FirAnnotation, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`) ← `transformAnnotationCall(FirAnnotationCall, FirUserTypeRef)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer`) ← `transformAnnotationCall(FirAnnotationCall, Void)` ← `transformAnnotationCall(FirAnnotationCall, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.FirAnnotationCall`) ← `transformInplace(List, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `transformInplace-aLnlfrU(List, FirTransformer, Object)` ← `transformAnnotations(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.impl.FirRegularClassImpl`) ← `transformAnnotations(FirTransformer, Object)` ← `transformAnnotationContainer(FirAnnotationContainer, Void)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer`) ← `transformDeclaration(FirDeclaration, Void)` ← `transformRegularClass(FirRegularClass, Void)` ← `transformRegularClass(FirRegularClass, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.FirRegularClass`) ← `transformInplace(List, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `transformDeclarations(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.impl.FirFileImpl`) ← `transformDeclarations(FirTransformer, Object)` ← `invoke()` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer$transformFile$$inlined$resolveFile$1`) ← `invoke()` ← `withFileAndFileScopes(FirFile, Function0)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer`) ← `transformFile(FirFile, Void)` ← `transformFile(FirFile, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.FirFile`) ← `resolveAnnotations(FirFile)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirCompilerRequiredAnnotationsResolveTransformer`) ← `transformFile(FirFile, Void)` ← `transformFile(FirFile, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.FirFile`) ← `transformSingle(FirElement, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `process(Collection)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.FirCompilerRequiredAnnotationsResolveProcessor`) ← `process(List)` (`org.jetbrains.kotlin.fir.resolve.transformers.FirTotalResolveProcessor`) ← `runResolution(FirSession, List)` (`org.jetbrains.kotlin.fir.pipeline.AnalyseKt`) ← `resolveAndCheckFir(FirSession, List, BaseDiagnosticsCollector)` (`org.jetbrains.kotlin.fir.pipeline.FirUtilsKt`) ← `executePhase(ConfigurationPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`) ← `executePhase(PipelineArtifact)` ← `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`) ← `phaseBody(LoggingContext, Object)` ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`) ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.backend.common.phaser.CompositePhase`) ← `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`) ← `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`) ← `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` ← `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` ← `execute(CommonCompilerArguments, Services, MessageCollector)` ← `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` ← `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`) ← `exec(MessageCollector, Services, CommonCompilerArguments)` ← `exec(PrintStream, Services, MessageRenderer, String[])` ← `exec(PrintStream, MessageRenderer, String[])` ← `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`) ← `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` ← `doMain(CLICompiler, String[])` ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`) ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000f001008400`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f001009800`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  0.2% |  1.5 MiB |       3 | `copyOf(byte[], int)` (`java.util.Arrays`) ← `ensureCapacityInternal(int)` (`java.lang.AbstractStringBuilder`) ← `append(char)` ← `append(char)` (`java.lang.StringBuilder`) ← `readSourceFileWithMapping(InputStreamReader)` (`org.jetbrains.kotlin.KtSourceFileLinesMappingKt`) ← `buildFirViaLightTree(FirSession, Collection, DiagnosticReporter, Function2)` (`org.jetbrains.kotlin.fir.pipeline.FirUtilsKt`) ← `executePhase(ConfigurationPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`) ← `executePhase(PipelineArtifact)` ← `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`) ← `phaseBody(LoggingContext, Object)` ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`) ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.backend.common.phaser.CompositePhase`) ← `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`) ← `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`) ← `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` ← `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` ← `execute(CommonCompilerArguments, Services, MessageCollector)` ← `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` ← `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`) ← `exec(MessageCollector, Services, CommonCompilerArguments)` ← `exec(PrintStream, Services, MessageRenderer, String[])` ← `exec(PrintStream, MessageRenderer, String[])` ← `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`) ← `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` ← `doMain(CLICompiler, String[])` ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`) ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000f001008400`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f001009800`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  0.2% |  1.5 MiB |       3 | `<init>(int)` (`org.jetbrains.kotlin.protobuf.ByteString$Output`) ← `newOutput()` (`org.jetbrains.kotlin.protobuf.ByteString`) ← `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type`) ← `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `readMessage(Parser, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.CodedInputStream`) ← `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Function`) ← `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Function$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `readMessage(Parser, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.CodedInputStream`) ← `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Package`) ← `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Package$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `parsePartialFrom(InputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.AbstractParser`) ← `parseFrom(InputStream, ExtensionRegistryLite)` ← `parseFrom(InputStream, ExtensionRegistryLite)` ← `parseFrom(InputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Package`) ← `readPackageDataFrom(byte[], String[])` (`org.jetbrains.kotlin.metadata.jvm.deserialization.JvmProtoBufUtil`) ← `readPackageDataFrom(String[], String[])` ← `computePackagePartInfo(FqName, String)` (`org.jetbrains.kotlin.fir.java.deserialization.JvmClassFileBasedSymbolProvider`) ← `computePackagePartsInfos(FqName)` ← `tryComputePackagePartInfos(FqName)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider`) ← `access$tryComputePackagePartInfos(AbstractFirDeserializedSymbolProvider, FqName)` ← `invoke(Object, Void)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider$special$$inlined$createCache$2`) ← `invoke(Object, Object)` ← `getValue(Object, Object)` (`org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache`) ← `getPackageParts(FqName)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider`) ← `access$getPackageParts(AbstractFirDeserializedSymbolProvider, FqName)` ← `computeTopLevelCallableNames(FqName)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider$symbolNamesProvider$1`) ← `invoke(Object, Void)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider$topLevelCallableNamesByPackage_delegate$lambda$0$$inlined$createCache$1`) ← `invoke(Object, Object)` ← `getValue(Object, Object)` (`org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache`) ← `getTopLevelCallableNamesInPackage(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider`) ← `computeTopLevelCallableNames(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCompositeCachedSymbolNamesProvider`) ← `computeTopLevelCallableNames(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider$symbolNamesProvider$1`) ← `invoke(Object, Void)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider$topLevelCallableNamesByPackage_delegate$lambda$0$$inlined$createCache$1`) ← `invoke(Object, Object)` ← `getValue(Object, Object)` (`org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache`) ← `getTopLevelCallableNamesInPackage(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider`) ← `mayHaveTopLevelCallable(FqName, Name)` (`org.jetbrains.kotlin.fir.resolve.providers.FirSymbolNamesProvider`) ← `getTopLevelPropertySymbolsTo(List, FqName, Name)` (`org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider`) ← `getTopLevelPropertySymbols(FqName, Name)` (`org.jetbrains.kotlin.fir.resolve.providers.FirSymbolProvider`) ← `processPropertiesByName(Name, Function1)` (`org.jetbrains.kotlin.fir.scopes.impl.FirSingleLevelDefaultStarImportingScope`) ← `invoke(FirScope, Name, Function1)` (`org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope$processPropertiesByName$1`) ← `invoke(Object, Object, Object)` ← `processSymbolsByName(Name, Function3, Function1)` (`org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope`) ← `processPropertiesByName(Name, Function1)` ← `getProperties(FirScope, Name)` (`org.jetbrains.kotlin.fir.scopes.FirScopeKt`) ← `resolveFromImportScope(FirQualifiedAccessExpression)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer$FirEnumAnnotationArgumentsTransformer`) ← `resolveQualifiedAccessAndSelectCandidate(FirQualifiedAccessExpression, boolean, boolean, FirElement, ResolutionMode)` ← `resolveQualifiedAccessAndSelectCandidate(FirQualifiedAccessExpression, boolean, boolean, FirElement, ResolutionMode)` ← `transformQualifiedAccessExpression(FirQualifiedAccessExpression, ResolutionMode, boolean, boolean, boolean)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`) ← `transformQualifiedAccessExpression(FirQualifiedAccessExpression, ResolutionMode)` ← `transformPropertyAccessExpression(FirPropertyAccessExpression, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`) ← `transformPropertyAccessExpression(FirPropertyAccessExpression, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.FirPropertyAccessExpression`) ← `transformInplace(List, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `transformArguments(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.impl.FirArgumentListImpl`) ← `transformChildren(FirTransformer, Object)` ← `transformChildren(FirTransformer, Object)` ← `transformElement(FirElement, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`) ← `transformElement(FirElement, Object)` ← `transformArgumentList(FirArgumentList, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformer`) ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.FirArgumentList`) ← `transformChildren(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.impl.FirAnnotationCallImpl`) ← `transformChildren(FirTransformer, Object)` ← `transformAnnotation(FirAnnotation, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer$FirEnumAnnotationArgumentsTransformer`) ← `transformAnnotation(FirAnnotation, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`) ← `transformAnnotationCall(FirAnnotationCall, FirUserTypeRef)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer`) ← `transformAnnotationCall(FirAnnotationCall, Void)` ← `transformAnnotationCall(FirAnnotationCall, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.FirAnnotationCall`) ← `transformInplace(List, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `transformInplace-aLnlfrU(List, FirTransformer, Object)` ← `transformAnnotations(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.impl.FirRegularClassImpl`) ← `transformAnnotations(FirTransformer, Object)` ← `transformAnnotationContainer(FirAnnotationContainer, Void)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer`) ← `transformDeclaration(FirDeclaration, Void)` ← `transformRegularClass(FirRegularClass, Void)` ← `transformRegularClass(FirRegularClass, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.FirRegularClass`) ← `transformInplace(List, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `transformDeclarations(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.impl.FirFileImpl`) ← `transformDeclarations(FirTransformer, Object)` ← `invoke()` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer$transformFile$$inlined$resolveFile$1`) ← `invoke()` ← `withFileAndFileScopes(FirFile, Function0)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer`) ← `transformFile(FirFile, Void)` ← `transformFile(FirFile, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.FirFile`) ← `resolveAnnotations(FirFile)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirCompilerRequiredAnnotationsResolveTransformer`) ← `transformFile(FirFile, Void)` ← `transformFile(FirFile, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.FirFile`) ← `transformSingle(FirElement, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `process(Collection)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.FirCompilerRequiredAnnotationsResolveProcessor`) ← `process(List)` (`org.jetbrains.kotlin.fir.resolve.transformers.FirTotalResolveProcessor`) ← `runResolution(FirSession, List)` (`org.jetbrains.kotlin.fir.pipeline.AnalyseKt`) ← `resolveAndCheckFir(FirSession, List, BaseDiagnosticsCollector)` (`org.jetbrains.kotlin.fir.pipeline.FirUtilsKt`) ← `executePhase(ConfigurationPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`) ← `executePhase(PipelineArtifact)` ← `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`) ← `phaseBody(LoggingContext, Object)` ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`) ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.backend.common.phaser.CompositePhase`) ← `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`) ← `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`) ← `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` ← `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` ← `execute(CommonCompilerArguments, Services, MessageCollector)` ← `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` ← `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`) ← `exec(MessageCollector, Services, CommonCompilerArguments)` ← `exec(PrintStream, Services, MessageRenderer, String[])` ← `exec(PrintStream, MessageRenderer, String[])` ← `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`) ← `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` ← `doMain(CLICompiler, String[])` ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`) ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000f001008400`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f001009800`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  0.1% |    1 MiB |       2 | `getBufIfOpen(boolean)` (`java.io.BufferedInputStream`) ← `getBufIfOpen()` ← `fill()` ← `read1(byte[], int, int)` ← `implRead(byte[], int, int)` ← `read(byte[], int, int)` ← `read(byte[], int, int)` (`java.io.FilterInputStream`) ← `read(byte[], int, int)` (`java.io.PushbackInputStream`) ← `readFully(byte[], int, int)` (`java.util.zip.ZipInputStream`) ← `readLOC()` ← `getNextEntry()` ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  0.1% |    1 MiB |       2 | `toArray()` (`org.jetbrains.org.objectweb.asm.tree.InsnList`) ← `simplifyTrivialInstructions(MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer`) ← `transform(String, MethodNode)` ← `transform(String, MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.transformer.CompositeMethodTransformer`) ← `performTransformations(MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`) ← `visitEnd()` (`org.jetbrains.kotlin.codegen.TransformationMethodVisitor`) ← `visitEnd()` (`org.jetbrains.org.objectweb.asm.MethodVisitor`) ← `accept(MethodVisitor)` (`org.jetbrains.org.objectweb.asm.tree.MethodNode`) ← `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000f0018923a0`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`) ← `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`) ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  0.1% |    1 MiB |       2 | `<init>(int, int)` (`org.jetbrains.org.objectweb.asm.tree.analysis.Frame`) ← `_init_$lambda$0(int, int)` (`org.jetbrains.kotlin.codegen.optimization.common.FastMethodAnalyzer`) ← `invoke(Object, Object)` (`org.jetbrains.kotlin.codegen.optimization.common.FastMethodAnalyzer$$Lambda.0x000000f0018e4700`) ← `fullMergeControlFlowEdge(int, Frame, boolean)` (`org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer`) ← `mergeControlFlowEdge(int, Frame, boolean)` ← `processControlFlowEdge(Frame, AbstractInsnNode, int, boolean)` ← `processControlFlowEdge$default(FastAnalyzer, Frame, AbstractInsnNode, int, boolean, int, Object)` ← `visitOpInsn(AbstractInsnNode, Frame, int)` ← `visitMeaningfulInstruction(AbstractInsnNode, int, int, Frame, int)` ← `analyzeInstruction(AbstractInsnNode, int, Frame, Frame, Frame)` ← `analyzeMainLoop()` ← `analyze()` ← `transform()` (`org.jetbrains.kotlin.codegen.optimization.boxing.PopBackwardPropagationTransformer$Transformer`) ← `transform(String, MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.boxing.PopBackwardPropagationTransformer`) ← `transform(String, MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.transformer.CompositeMethodTransformer`) ← `performTransformations(MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`) ← `visitEnd()` (`org.jetbrains.kotlin.codegen.TransformationMethodVisitor`) ← `visitEnd()` (`org.jetbrains.org.objectweb.asm.MethodVisitor`) ← `accept(MethodVisitor)` (`org.jetbrains.org.objectweb.asm.tree.MethodNode`) ← `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000f0018923a0`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`) ← `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`) ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  0.1% |    1 MiB |       2 | `_init_$lambda$0(int, int)` (`org.jetbrains.kotlin.codegen.optimization.common.FastMethodAnalyzer`) ← `invoke(Object, Object)` (`org.jetbrains.kotlin.codegen.optimization.common.FastMethodAnalyzer$$Lambda.0x000000f0018e4700`) ← `fullMergeControlFlowEdge(int, Frame, boolean)` (`org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer`) ← `mergeControlFlowEdge(int, Frame, boolean)` ← `processControlFlowEdge(Frame, AbstractInsnNode, int, boolean)` ← `processControlFlowEdge$default(FastAnalyzer, Frame, AbstractInsnNode, int, boolean, int, Object)` ← `visitOpInsn(AbstractInsnNode, Frame, int)` ← `visitMeaningfulInstruction(AbstractInsnNode, int, int, Frame, int)` ← `analyzeInstruction(AbstractInsnNode, int, Frame, Frame, Frame)` ← `analyzeMainLoop()` ← `analyze()` ← `analyze(String, MethodNode, Interpreter)` (`org.jetbrains.kotlin.codegen.optimization.transformer.MethodTransformer`) ← `analyzeNullabilities()` (`org.jetbrains.kotlin.codegen.optimization.nullCheck.RedundantNullCheckMethodTransformer$TransformerPass`) ← `run()` ← `transform(String, MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.nullCheck.RedundantNullCheckMethodTransformer`) ← `transform(String, MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.transformer.CompositeMethodTransformer`) ← `performTransformations(MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`) ← `visitEnd()` (`org.jetbrains.kotlin.codegen.TransformationMethodVisitor`) ← `visitEnd()` (`org.jetbrains.org.objectweb.asm.MethodVisitor`) ← `accept(MethodVisitor)` (`org.jetbrains.org.objectweb.asm.tree.MethodNode`) ← `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000f0018923a0`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`) ← `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`) ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  0.1% |    1 MiB |       2 | `_init_$lambda$0(int, int)` (`org.jetbrains.kotlin.codegen.optimization.common.FastMethodAnalyzer`) ← `invoke(Object, Object)` (`org.jetbrains.kotlin.codegen.optimization.common.FastMethodAnalyzer$$Lambda.0x000000f0018e4700`) ← `fullMergeControlFlowEdge(int, Frame, boolean)` (`org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer`) ← `mergeControlFlowEdge(int, Frame, boolean)` ← `processControlFlowEdge(Frame, AbstractInsnNode, int, boolean)` ← `processControlFlowEdge$default(FastAnalyzer, Frame, AbstractInsnNode, int, boolean, int, Object)` ← `visitOpInsn(AbstractInsnNode, Frame, int)` ← `visitMeaningfulInstruction(AbstractInsnNode, int, int, Frame, int)` ← `analyzeInstruction(AbstractInsnNode, int, Frame, Frame, Frame)` ← `analyzeMainLoop()` ← `analyze()` ← `analyze(String, MethodNode, Interpreter)` (`org.jetbrains.kotlin.codegen.optimization.transformer.MethodTransformer`) ← `collectRewriteActions()` (`org.jetbrains.kotlin.codegen.optimization.ConstantConditionEliminationMethodTransformer$ConstantConditionsOptimization`) ← `run()` ← `transform(String, MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.ConstantConditionEliminationMethodTransformer`) ← `transform(String, MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.transformer.CompositeMethodTransformer`) ← `performTransformations(MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`) ← `visitEnd()` (`org.jetbrains.kotlin.codegen.TransformationMethodVisitor`) ← `visitEnd()` (`org.jetbrains.org.objectweb.asm.MethodVisitor`) ← `accept(MethodVisitor)` (`org.jetbrains.org.objectweb.asm.tree.MethodNode`) ← `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000f0018923a0`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`) ← `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`) ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

# Lock contention profile

Blocked 1.26s over 1,454 contentions (870.2µs per contention).

| Category         |     % |  Time | Contentions |
| ---------------- | ----: | ----: | ----------: |
| Ours             | 99.3% | 1.25s |       1,421 |
| Standard library |  0.7% | 8.9ms |          33 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
└── … 1.26s (100.0%) runWorker(ThreadPoolExecutor$Worker) at java.util.concurrent.ThreadPoolExecutor
    ├── … 1.25s (99.2%, self 0.7%) generateFile(JvmBackendContext, IrFile, List, boolean) at org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory
    │   ├── 1.19s (94.3%) generate() at org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen
    │   │   ├── 1.16s (92.4%) generateMethod(IrFunction, SourceMapper)
    │   │   │   ├── 1.06s (83.8%, self 73.4%) generateMethodNode(IrFunction)
    │   │   │   │   └── … 131.2ms (10.4%, self 2.9%) doGenerate(ReifiedTypeParametersUsages) at org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen
    │   │   │   │       ├── … 61.6ms (4.9%) visitStatementContainer(IrStatementContainer, BlockInfo) at org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen
    │   │   │   │       │   ├── … 54.7ms (4.3%) visitReturn(IrReturn, BlockInfo) at org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen
    │   │   │   │       │   │   ├── … 28.6ms (2.3%) visitCall(IrCall, BlockInfo) at org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen
    │   │   │   │       │   │   │   ├── 21.2ms (1.7%) genCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean) at org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCallGenerator
    │   │   │   │       │   │   │   │   └── 20.3ms (1.6%) genInlineCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean) at org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen
    │   │   │   │       │   │   │   │       ├── 14.1ms (1.1%) inlineCall(SMAPAndMethodNode, boolean, IrFunctionAccessExpression)
    │   │   │   │       │   │   │   │       │   └── 10.0ms (0.8%) doInline(MethodVisitor, LocalVarRemapper, boolean, Map) at org.jetbrains.kotlin.codegen.inline.MethodInliner
    │   │   │   │       │   │   │   │       │       └── 10.0ms (0.8%) doInline(MethodVisitor, LocalVarRemapper, boolean, Map, int)
    │   │   │   │       │   │   │   │       │           └── 3.0ms (0.2%) doInline(MethodNode)
    │   │   │   │       │   │   │   │       └── … 2.7ms (0.2%) isBuiltInSuspendCoroutineUninterceptedOrReturn(FunctionDescriptor) at org.jetbrains.kotlin.codegen.inline.InlineIntrinsicsKt
    │   │   │   │       │   │   │   └── 5.3ms (0.4%) getOrCreateCallGenerator(IrFunctionAccessExpression, BlockInfo, JvmMethodSignature)
    │   │   │   │       │   │   └── 23.0ms (1.8%) 3 more callees, led by (1.5%) accept(IrVisitor, Object) at org.jetbrains.kotlin.ir.expressions.IrCall
    │   │   │   │       │   └── … 1.2ms (0.1%) getValue(Object, KProperty) at org.jetbrains.kotlin.fir.backend.MappedLazyVar
    │   │   │   │       ├── … 5.0ms (0.4%) <init>() at org.jetbrains.kotlin.codegen.FrameMapBase
    │   │   │   │       ├── 4.2ms (0.3%) getThrownExceptions(IrFunction)
    │   │   │   │       └── 21.2ms (1.7%) 12 more callees, led by (0.5%) calculateMethodFlags(IrFunction)
    │   │   │   ├── … 32.8ms (2.6%) performTransformations(MethodNode) at org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor
    │   │   │   │   └── 31.7ms (2.5%) transform(String, MethodNode) at org.jetbrains.kotlin.codegen.optimization.transformer.CompositeMethodTransformer
    │   │   │   │       └── 31.7ms (2.5%) 10 more callees, led by (0.5%) transform(String, MethodNode) at org.jetbrains.kotlin.codegen.optimization.boxing.PopBackwardPropagationTransformer
    │   │   │   ├── … 29.2ms (2.3%, self 1.3%) makeFirMetadataSerializerForIrClass(FirSession, JvmBackendContext, IrClass, JvmSerializationBindings, Fir2IrComponents, MetadataSerializer, Set) at org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt
    │   │   │   │   └── 10.5ms (0.8%, self 0.6%) makeElementSerializer(MetadataSource, FirSession, ScopeSession, FirJvmSerializerExtension, AbstractTypeApproximator, MetadataSerializer, LanguageVersionSettings)
    │   │   │   ├── 27.1ms (2.1%) newMethod(JvmDeclarationOrigin, int, String, String, String, String[]) at org.jetbrains.kotlin.codegen.DelegatingClassBuilder
    │   │   │   │   ├── 20.4ms (1.6%) newMethod(JvmDeclarationOrigin, int, String, String, String, String[]) at org.jetbrains.kotlin.codegen.optimization.OptimizationClassBuilder
    │   │   │   │   │   └── 19.3ms (1.5%, self 1.4%) <init>(MethodVisitor, boolean, GenerationState, int, String, String, String, String[]) at org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor
    │   │   │   │   └── … 6.7ms (0.5%) newMethod(JvmDeclarationOrigin, int, String, String, String, String[]) at org.jetbrains.kotlin.codegen.AbstractClassBuilder
    │   │   │   │       └── 6.7ms (0.5%) visitMethod(int, String, String, String, String[]) at org.jetbrains.org.objectweb.asm.ClassWriter
    │   │   │   └── … 6.3ms (0.5%) <init>(SourceMapper, SMAP, SourcePosition) at org.jetbrains.kotlin.codegen.inline.SourceMapCopier
    │   │   └── 24.1ms (1.9%) 6 more callees, led by (1.8%) generateAnnotations()
    │   └── … 53.5ms (4.2%, self 0.9%) <init>(IrClass, JvmBackendContext, IrFunction, List) at org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen
    │       ├── … 21.8ms (1.7%, self 1.2%) newClassBuilder(JvmDeclarationOrigin) at org.jetbrains.kotlin.codegen.ClassBuilderFactories$1
    │       │   └── … 7.2ms (0.6%) <init>(ClassReader, int) at org.jetbrains.org.objectweb.asm.ClassWriter
    │       ├── 7.4ms (0.6%) getSourceMapper(JvmBackendContext, IrClass) at org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt
    │       └── 6.5ms (0.5%) mapClassSignature(IrTypeMapper, IrClass, Type, boolean) at org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt
    └── … 7.6ms (0.6%) park(boolean, long) at jdk.internal.misc.Unsafe
```

## Hottest functions

### Self time

Functions with the most time blocked within the function body, excluding callees.

|     % |    Time | Contentions | Function                                                                                                                                                            | Location                                                                |
| ----: | ------: | ----------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| 73.4% | 928.9ms |          92 | `generateMethodNode(IrFunction)`                                                                                                                                    | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                 |
|  2.9% |  36.1ms |          59 | `doGenerate(ReifiedTypeParametersUsages)`                                                                                                                           | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`              |
|  1.4% |  17.3ms |          42 | `<init>(MethodVisitor, boolean, GenerationState, int, String, String, String, String[])`                                                                            | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`   |
|  1.3% |  16.0ms |          38 | `makeFirMetadataSerializerForIrClass(FirSession, JvmBackendContext, IrClass, JvmSerializationBindings, Fir2IrComponents, MetadataSerializer, Set)`                  | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`          |
|  1.2% |  14.6ms |          31 | `newClassBuilder(JvmDeclarationOrigin)`                                                                                                                             | `org.jetbrains.kotlin.codegen.ClassBuilderFactories$1`                  |
|  0.9% |  11.1ms |          70 | `<init>(IrClass, JvmBackendContext, IrFunction, List)`                                                                                                              | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                 |
|  0.7% |   8.9ms |          21 | `generateFile(JvmBackendContext, IrFile, List, boolean)`                                                                                                            | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`                  |
|  0.6% |   8.1ms |           9 | `makeElementSerializer(MetadataSource, FirSession, ScopeSession, FirJvmSerializerExtension, AbstractTypeApproximator, MetadataSerializer, LanguageVersionSettings)` | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`          |
|  0.6% |   7.6ms |           8 | `park(boolean, long)`                                                                                                                                               | `jdk.internal.misc.Unsafe`                                              |
|  0.6% |   7.5ms |          21 | `getOrCreateCallGenerator(IrFunctionAccessExpression, BlockInfo, JvmMethodSignature)`                                                                               | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`            |
|  0.5% |   6.3ms |           8 | `<init>(SourceMapper, SMAP, SourcePosition)`                                                                                                                        | `org.jetbrains.kotlin.codegen.inline.SourceMapCopier`                   |
|  0.5% |   6.1ms |          18 | `<init>(ClassReader, int)`                                                                                                                                          | `org.jetbrains.org.objectweb.asm.ClassWriter`                           |
|  0.4% |   5.4ms |           6 | `visitMethod(int, String, String, String, String[])`                                                                                                                | `org.jetbrains.org.objectweb.asm.ClassWriter`                           |
|  0.4% |   5.0ms |          18 | `<init>()`                                                                                                                                                          | `org.jetbrains.kotlin.codegen.FrameMapBase`                             |
|  0.3% |   4.3ms |          11 | `inlineCall(SMAPAndMethodNode, boolean, IrFunctionAccessExpression)`                                                                                                | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`              |
|  0.3% |   4.2ms |          12 | `doInline(MethodNode)`                                                                                                                                              | `org.jetbrains.kotlin.codegen.inline.MethodInliner`                     |
|  0.3% |   4.2ms |           6 | `getThrownExceptions(IrFunction)`                                                                                                                                   | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`              |
|  0.3% |   4.1ms |          36 | `mapClassSignature(IrTypeMapper, IrClass, Type, boolean)`                                                                                                           | `org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt`             |
|  0.3% |   3.7ms |           4 | `isBuiltInSuspendCoroutineUninterceptedOrReturn(FunctionDescriptor)`                                                                                                | `org.jetbrains.kotlin.codegen.inline.InlineIntrinsicsKt`                |
|  0.3% |   3.6ms |           9 | `parseMethodOrNull(MethodNode)`                                                                                                                                     | `org.jetbrains.kotlin.codegen.inline.InplaceArgumentsMethodTransformer` |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Ours

|     % |    Time | Contentions | Function                                                                                                                                                            | Location                                                                                         |
| ----: | ------: | ----------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 73.4% | 928.9ms |          92 | `generateMethodNode(IrFunction)`                                                                                                                                    | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                                          |
|  2.9% |  36.1ms |          59 | `doGenerate(ReifiedTypeParametersUsages)`                                                                                                                           | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`                                       |
|  1.4% |  17.3ms |          42 | `<init>(MethodVisitor, boolean, GenerationState, int, String, String, String, String[])`                                                                            | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`                            |
|  1.3% |  16.0ms |          38 | `makeFirMetadataSerializerForIrClass(FirSession, JvmBackendContext, IrClass, JvmSerializationBindings, Fir2IrComponents, MetadataSerializer, Set)`                  | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`                                   |
|  1.2% |  14.6ms |          31 | `newClassBuilder(JvmDeclarationOrigin)`                                                                                                                             | `org.jetbrains.kotlin.codegen.ClassBuilderFactories$1`                                           |
|  0.9% |  11.1ms |          70 | `<init>(IrClass, JvmBackendContext, IrFunction, List)`                                                                                                              | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                                          |
|  0.7% |   8.9ms |          21 | `generateFile(JvmBackendContext, IrFile, List, boolean)`                                                                                                            | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`                                           |
|  0.6% |   8.1ms |           9 | `makeElementSerializer(MetadataSource, FirSession, ScopeSession, FirJvmSerializerExtension, AbstractTypeApproximator, MetadataSerializer, LanguageVersionSettings)` | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`                                   |
|  0.6% |   7.5ms |          21 | `getOrCreateCallGenerator(IrFunctionAccessExpression, BlockInfo, JvmMethodSignature)`                                                                               | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                                     |
|  0.5% |   6.3ms |           8 | `<init>(SourceMapper, SMAP, SourcePosition)`                                                                                                                        | `org.jetbrains.kotlin.codegen.inline.SourceMapCopier`                                            |
|  0.5% |   6.1ms |          18 | `<init>(ClassReader, int)`                                                                                                                                          | `org.jetbrains.org.objectweb.asm.ClassWriter`                                                    |
|  0.4% |   5.4ms |           6 | `visitMethod(int, String, String, String, String[])`                                                                                                                | `org.jetbrains.org.objectweb.asm.ClassWriter`                                                    |
|  0.4% |   5.0ms |          18 | `<init>()`                                                                                                                                                          | `org.jetbrains.kotlin.codegen.FrameMapBase`                                                      |
|  0.3% |   4.3ms |          11 | `inlineCall(SMAPAndMethodNode, boolean, IrFunctionAccessExpression)`                                                                                                | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`                                       |
|  0.3% |   4.2ms |          12 | `doInline(MethodNode)`                                                                                                                                              | `org.jetbrains.kotlin.codegen.inline.MethodInliner`                                              |
|  0.3% |   4.2ms |           6 | `getThrownExceptions(IrFunction)`                                                                                                                                   | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`                                       |
|  0.3% |   4.1ms |          36 | `mapClassSignature(IrTypeMapper, IrClass, Type, boolean)`                                                                                                           | `org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt`                                      |
|  0.3% |   3.7ms |           4 | `isBuiltInSuspendCoroutineUninterceptedOrReturn(FunctionDescriptor)`                                                                                                | `org.jetbrains.kotlin.codegen.inline.InlineIntrinsicsKt`                                         |
|  0.3% |   3.6ms |           9 | `parseMethodOrNull(MethodNode)`                                                                                                                                     | `org.jetbrains.kotlin.codegen.inline.InplaceArgumentsMethodTransformer`                          |
|  0.3% |   3.2ms |           8 | `transform()`                                                                                                                                                       | `org.jetbrains.kotlin.codegen.optimization.boxing.PopBackwardPropagationTransformer$Transformer` |

#### Lines

Lines with the largest contribution to each function's self time.

##### `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|     % |    Time | Contentions | Location                                                    |
| ----: | ------: | ----------: | ----------------------------------------------------------- |
| 99.5% | 924.7ms |          71 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:427` |
|  0.3% |   2.6ms |          11 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:422` |
|  0.2% |   1.4ms |           9 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:416` |
| <0.1% |   0.2ms |           1 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:428` |

##### `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

|     % |   Time | Contentions | Location                                                       |
| ----: | -----: | ----------: | -------------------------------------------------------------- |
| 40.0% | 14.4ms |          12 | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen:68`  |
| 26.5% |  9.6ms |          11 | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen:134` |
| 11.0% |  4.0ms |          10 | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen:76`  |
|  6.7% |  2.4ms |          10 | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen:133` |
|  5.2% |  1.9ms |           8 | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen:84`  |

##### `<init>(MethodVisitor, boolean, GenerationState, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`)

|     % |  Time | Contentions | Location                                                                 |
| ----: | ----: | ----------: | ------------------------------------------------------------------------ |
| 16.1% | 2.8ms |           1 | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor:65` |
| 13.9% | 2.4ms |           6 | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor:46` |
| 10.3% | 1.8ms |           3 | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor:47` |
|  9.3% | 1.6ms |           7 | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor:58` |
|  9.2% | 1.6ms |           3 | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor:56` |

##### `makeFirMetadataSerializerForIrClass(FirSession, JvmBackendContext, IrClass, JvmSerializationBindings, Fir2IrComponents, MetadataSerializer, Set)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`)

|     % |  Time | Contentions | Location                                                          |
| ----: | ----: | ----------: | ----------------------------------------------------------------- |
| 41.1% | 6.6ms |           7 | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt:50` |
| 24.6% | 3.9ms |          12 | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt:54` |
| 19.7% | 3.2ms |          10 | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt:61` |
| 14.7% | 2.4ms |           9 | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt:63` |

##### `newClassBuilder(JvmDeclarationOrigin)` (`org.jetbrains.kotlin.codegen.ClassBuilderFactories$1`)

|      % |   Time | Contentions | Location                                                  |
| -----: | -----: | ----------: | --------------------------------------------------------- |
| 100.0% | 14.6ms |          31 | `org.jetbrains.kotlin.codegen.ClassBuilderFactories$1:70` |

##### `<init>(IrClass, JvmBackendContext, IrFunction, List)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|     % |  Time | Contentions | Location                                                    |
| ----: | ----: | ----------: | ----------------------------------------------------------- |
| 34.3% | 3.8ms |          18 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:84`  |
| 25.2% | 2.8ms |           7 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:107` |
| 12.1% | 1.3ms |          15 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:109` |
| 10.0% | 1.1ms |          10 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:110` |
|  7.5% | 0.8ms |           8 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:89`  |

##### `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)

|     % |  Time | Contentions | Location                                                   |
| ----: | ----: | ----------: | ---------------------------------------------------------- |
| 97.6% | 8.7ms |          18 | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory:465` |
|  2.4% | 0.2ms |           3 | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory:459` |

##### `makeElementSerializer(MetadataSource, FirSession, ScopeSession, FirJvmSerializerExtension, AbstractTypeApproximator, MetadataSerializer, LanguageVersionSettings)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`)

|     % |  Time | Contentions | Location                                                           |
| ----: | ----: | ----------: | ------------------------------------------------------------------ |
| 75.0% | 6.0ms |           7 | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt:198` |
| 25.0% | 2.0ms |           2 | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt:190` |

##### `getOrCreateCallGenerator(IrFunctionAccessExpression, BlockInfo, JvmMethodSignature)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|     % |  Time | Contentions | Location                                                          |
| ----: | ----: | ----------: | ----------------------------------------------------------------- |
| 36.7% | 2.7ms |           7 | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen:1581` |
| 23.0% | 1.7ms |           4 | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen:1548` |
| 14.4% | 1.1ms |           2 | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen:1570` |
| 10.0% | 0.7ms |           3 | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen:1572` |
|  9.9% | 0.7ms |           4 | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen:1569` |

##### `<init>(SourceMapper, SMAP, SourcePosition)` (`org.jetbrains.kotlin.codegen.inline.SourceMapCopier`)

|      % |  Time | Contentions | Location                                                 |
| -----: | ----: | ----------: | -------------------------------------------------------- |
| 100.0% | 6.3ms |           8 | `org.jetbrains.kotlin.codegen.inline.SourceMapCopier:65` |

##### `<init>(ClassReader, int)` (`org.jetbrains.org.objectweb.asm.ClassWriter`)

|      % |  Time | Contentions | Location                                          |
| -----: | ----: | ----------: | ------------------------------------------------- |
| 100.0% | 6.1ms |          18 | `org.jetbrains.org.objectweb.asm.ClassWriter:266` |

##### `visitMethod(int, String, String, String, String[])` (`org.jetbrains.org.objectweb.asm.ClassWriter`)

|      % |  Time | Contentions | Location                                          |
| -----: | ----: | ----------: | ------------------------------------------------- |
| 100.0% | 5.4ms |           6 | `org.jetbrains.org.objectweb.asm.ClassWriter:469` |

##### `<init>()` (`org.jetbrains.kotlin.codegen.FrameMapBase`)

|      % |  Time | Contentions | Location                                       |
| -----: | ----: | ----------: | ---------------------------------------------- |
| 100.0% | 5.0ms |          18 | `org.jetbrains.kotlin.codegen.FrameMapBase:26` |

##### `inlineCall(SMAPAndMethodNode, boolean, IrFunctionAccessExpression)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`)

|     % |  Time | Contentions | Location                                                       |
| ----: | ----: | ----------: | -------------------------------------------------------------- |
| 50.4% | 2.2ms |           1 | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen:319` |
| 22.7% | 1.0ms |           3 | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen:331` |
| 16.9% | 0.7ms |           3 | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen:341` |
|  8.7% | 0.4ms |           2 | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen:330` |
|  1.3% | 0.1ms |           2 | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen:376` |

##### `doInline(MethodNode)` (`org.jetbrains.kotlin.codegen.inline.MethodInliner`)

|     % |  Time | Contentions | Location                                                |
| ----: | ----: | ----------: | ------------------------------------------------------- |
| 52.7% | 2.2ms |           6 | `org.jetbrains.kotlin.codegen.inline.MethodInliner:154` |
| 20.7% | 0.9ms |           1 | `org.jetbrains.kotlin.codegen.inline.MethodInliner:156` |
| 14.5% | 0.6ms |           1 | `org.jetbrains.kotlin.codegen.inline.MethodInliner:153` |
| 12.1% | 0.5ms |           4 | `org.jetbrains.kotlin.codegen.inline.MethodInliner:159` |

##### `getThrownExceptions(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

|      % |  Time | Contentions | Location                                                       |
| -----: | ----: | ----------: | -------------------------------------------------------------- |
| 100.0% | 4.2ms |           6 | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen:272` |

##### `mapClassSignature(IrTypeMapper, IrClass, Type, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt`)

|     % |  Time | Contentions | Location                                                        |
| ----: | ----: | ----------: | --------------------------------------------------------------- |
| 85.2% | 3.5ms |          28 | `org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt:225` |
| 14.8% | 0.6ms |           8 | `org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt:267` |

##### `isBuiltInSuspendCoroutineUninterceptedOrReturn(FunctionDescriptor)` (`org.jetbrains.kotlin.codegen.inline.InlineIntrinsicsKt`)

|      % |  Time | Contentions | Location                                                    |
| -----: | ----: | ----------: | ----------------------------------------------------------- |
| 100.0% | 3.7ms |           4 | `org.jetbrains.kotlin.codegen.inline.InlineIntrinsicsKt:19` |

##### `parseMethodOrNull(MethodNode)` (`org.jetbrains.kotlin.codegen.inline.InplaceArgumentsMethodTransformer`)

|     % |  Time | Contentions | Location                                                                   |
| ----: | ----: | ----------: | -------------------------------------------------------------------------- |
| 79.3% | 2.9ms |           5 | `org.jetbrains.kotlin.codegen.inline.InplaceArgumentsMethodTransformer:88` |
| 20.7% | 0.7ms |           4 | `org.jetbrains.kotlin.codegen.inline.InplaceArgumentsMethodTransformer:79` |

##### `transform()` (`org.jetbrains.kotlin.codegen.optimization.boxing.PopBackwardPropagationTransformer$Transformer`)

|      % |  Time | Contentions | Location                                                                                            |
| -----: | ----: | ----------: | --------------------------------------------------------------------------------------------------- |
| 100.0% | 3.2ms |           8 | `org.jetbrains.kotlin.codegen.optimization.boxing.PopBackwardPropagationTransformer$Transformer:58` |

#### Callers

Callers with the largest contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|     % |    Time | Contentions | Caller                                      | Location                                                             |
| ----: | ------: | ----------: | ------------------------------------------- | -------------------------------------------------------------------- |
| 91.8% | 853.2ms |          90 | `generateMethod(IrFunction, SourceMapper)`  | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`              |
|  8.2% |  75.8ms |           2 | `compileInlineFunction(JvmMethodSignature)` | `org.jetbrains.kotlin.backend.jvm.codegen.IrSourceCompilerForInline` |

##### `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

|      % |   Time | Contentions | Caller                                  | Location                                                   |
| -----: | -----: | ----------: | --------------------------------------- | ---------------------------------------------------------- |
| 100.0% | 36.1ms |          59 | `generate(ReifiedTypeParametersUsages)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `<init>(MethodVisitor, boolean, GenerationState, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`)

|      % |   Time | Contentions | Caller                                                                   | Location                                                             |
| -----: | -----: | ----------: | ------------------------------------------------------------------------ | -------------------------------------------------------------------- |
| 100.0% | 17.3ms |          42 | `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` | `org.jetbrains.kotlin.codegen.optimization.OptimizationClassBuilder` |

##### `makeFirMetadataSerializerForIrClass(FirSession, JvmBackendContext, IrClass, JvmSerializationBindings, Fir2IrComponents, MetadataSerializer, Set)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`)

|      % |   Time | Contentions | Caller                                                                                             | Location                                                      |
| -----: | -----: | ----------: | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| 100.0% | 16.0ms |          38 | `createSerializer(JvmBackendContext, IrClass, Type, JvmSerializationBindings, MetadataSerializer)` | `org.jetbrains.kotlin.fir.backend.jvm.FirJvmBackendExtension` |

##### `newClassBuilder(JvmDeclarationOrigin)` (`org.jetbrains.kotlin.codegen.ClassBuilderFactories$1`)

|      % |   Time | Contentions | Caller                                  | Location                                                                    |
| -----: | -----: | ----------: | --------------------------------------- | --------------------------------------------------------------------------- |
| 100.0% | 14.6ms |          31 | `newClassBuilder(JvmDeclarationOrigin)` | `org.jetbrains.kotlin.codegen.optimization.OptimizationClassBuilderFactory` |

##### `<init>(IrClass, JvmBackendContext, IrFunction, List)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|      % |   Time | Contentions | Caller                                                                           | Location                                                |
| -----: | -----: | ----------: | -------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% | 11.1ms |          70 | `<init>(IrClass, JvmBackendContext, IrFunction, List, DefaultConstructorMarker)` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |

##### `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)

|      % |  Time | Contentions | Caller                                                                                                            | Location                                               |
| -----: | ----: | ----------: | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% | 8.9ms |          21 | `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory` |

##### `makeElementSerializer(MetadataSource, FirSession, ScopeSession, FirJvmSerializerExtension, AbstractTypeApproximator, MetadataSerializer, LanguageVersionSettings)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`)

|      % |  Time | Contentions | Caller                                                                                                                                             | Location                                                       |
| -----: | ----: | ----------: | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| 100.0% | 8.1ms |           9 | `makeFirMetadataSerializerForIrClass(FirSession, JvmBackendContext, IrClass, JvmSerializationBindings, Fir2IrComponents, MetadataSerializer, Set)` | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt` |

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

|      % |  Time | Contentions | Caller         | Location                                 |
| -----: | ----: | ----------: | -------------- | ---------------------------------------- |
| 100.0% | 7.6ms |           8 | `park(Object)` | `java.util.concurrent.locks.LockSupport` |

##### `getOrCreateCallGenerator(IrFunctionAccessExpression, BlockInfo, JvmMethodSignature)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|      % |  Time | Contentions | Caller                         | Location                                                     |
| -----: | ----: | ----------: | ------------------------------ | ------------------------------------------------------------ |
| 100.0% | 7.5ms |          21 | `visitCall(IrCall, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `<init>(SourceMapper, SMAP, SourcePosition)` (`org.jetbrains.kotlin.codegen.inline.SourceMapCopier`)

|      % |  Time | Contentions | Caller                                                                      | Location                                              |
| -----: | ----: | ----------: | --------------------------------------------------------------------------- | ----------------------------------------------------- |
| 100.0% | 6.3ms |           8 | `<init>(SourceMapper, SMAP, SourcePosition, int, DefaultConstructorMarker)` | `org.jetbrains.kotlin.codegen.inline.SourceMapCopier` |

##### `<init>(ClassReader, int)` (`org.jetbrains.org.objectweb.asm.ClassWriter`)

|      % |  Time | Contentions | Caller        | Location                                      |
| -----: | ----: | ----------: | ------------- | --------------------------------------------- |
| 100.0% | 6.1ms |          18 | `<init>(int)` | `org.jetbrains.org.objectweb.asm.ClassWriter` |

##### `visitMethod(int, String, String, String, String[])` (`org.jetbrains.org.objectweb.asm.ClassWriter`)

|      % |  Time | Contentions | Caller                                                                   | Location                                            |
| -----: | ----: | ----------: | ------------------------------------------------------------------------ | --------------------------------------------------- |
| 100.0% | 5.4ms |           6 | `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` | `org.jetbrains.kotlin.codegen.AbstractClassBuilder` |

##### `<init>()` (`org.jetbrains.kotlin.codegen.FrameMapBase`)

|      % |  Time | Contentions | Caller     | Location                                              |
| -----: | ----: | ----------: | ---------- | ----------------------------------------------------- |
| 100.0% | 5.0ms |          18 | `<init>()` | `org.jetbrains.kotlin.backend.jvm.codegen.IrFrameMap` |

##### `inlineCall(SMAPAndMethodNode, boolean, IrFunctionAccessExpression)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`)

|      % |  Time | Contentions | Caller                                                                                    | Location                                                   |
| -----: | ----: | ----------: | ----------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| 100.0% | 4.3ms |          11 | `genInlineCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen` |

##### `doInline(MethodNode)` (`org.jetbrains.kotlin.codegen.inline.MethodInliner`)

|      % |  Time | Contentions | Caller                                                         | Location                                            |
| -----: | ----: | ----------: | -------------------------------------------------------------- | --------------------------------------------------- |
| 100.0% | 4.2ms |          12 | `doInline(MethodVisitor, LocalVarRemapper, boolean, Map, int)` | `org.jetbrains.kotlin.codegen.inline.MethodInliner` |

##### `getThrownExceptions(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

|      % |  Time | Contentions | Caller                                    | Location                                                   |
| -----: | ----: | ----------: | ----------------------------------------- | ---------------------------------------------------------- |
| 100.0% | 4.2ms |           6 | `doGenerate(ReifiedTypeParametersUsages)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `mapClassSignature(IrTypeMapper, IrClass, Type, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt`)

|      % |  Time | Contentions | Caller                                                 | Location                                                |
| -----: | ----: | ----------: | ------------------------------------------------------ | ------------------------------------------------------- |
| 100.0% | 4.1ms |          36 | `<init>(IrClass, JvmBackendContext, IrFunction, List)` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |

##### `isBuiltInSuspendCoroutineUninterceptedOrReturn(FunctionDescriptor)` (`org.jetbrains.kotlin.codegen.inline.InlineIntrinsicsKt`)

|      % |  Time | Contentions | Caller                                             | Location                                                 |
| -----: | ----: | ----------: | -------------------------------------------------- | -------------------------------------------------------- |
| 100.0% | 3.7ms |           4 | `generateInlineIntrinsicForIr(FunctionDescriptor)` | `org.jetbrains.kotlin.codegen.inline.InlineIntrinsicsKt` |

##### `parseMethodOrNull(MethodNode)` (`org.jetbrains.kotlin.codegen.inline.InplaceArgumentsMethodTransformer`)

|      % |  Time | Contentions | Caller                          | Location                                                                |
| -----: | ----: | ----------: | ------------------------------- | ----------------------------------------------------------------------- |
| 100.0% | 3.6ms |           9 | `transform(String, MethodNode)` | `org.jetbrains.kotlin.codegen.inline.InplaceArgumentsMethodTransformer` |

##### `transform()` (`org.jetbrains.kotlin.codegen.optimization.boxing.PopBackwardPropagationTransformer$Transformer`)

|      % |  Time | Contentions | Caller                          | Location                                                                             |
| -----: | ----: | ----------: | ------------------------------- | ------------------------------------------------------------------------------------ |
| 100.0% | 3.2ms |           8 | `transform(String, MethodNode)` | `org.jetbrains.kotlin.codegen.optimization.boxing.PopBackwardPropagationTransformer` |

### Total time

Functions with the most time blocked within the function and its callees.

|      % |    Time | Contentions | Function                                                                                                          | Location                                                                          |
| -----: | ------: | ----------: | ----------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| 100.0% |   1.26s |       1,453 | `runWorker(ThreadPoolExecutor$Worker)`                                                                            | `java.util.concurrent.ThreadPoolExecutor`                                         |
| 100.0% |   1.26s |       1,453 | `run()`                                                                                                           | `java.util.concurrent.ThreadPoolExecutor$Worker`                                  |
| 100.0% |   1.26s |       1,453 | `runWith(Object, Runnable)`                                                                                       | `java.lang.Thread`                                                                |
| 100.0% |   1.26s |       1,453 | `run()`                                                                                                           | `java.lang.Thread`                                                                |
|  99.4% |   1.25s |       1,444 | `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`                            |
|  99.4% |   1.25s |       1,444 | `run()`                                                                                                           | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000f0018923a0` |
|  99.4% |   1.25s |       1,444 | `run()`                                                                                                           | `java.util.concurrent.CompletableFuture$AsyncRun`                                 |
|  99.2% |   1.25s |       1,411 | `generateFile(JvmBackendContext, IrFile, List, boolean)`                                                          | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`                            |
|  94.3% |   1.19s |       1,027 | `generate()`                                                                                                      | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                           |
|  92.4% |   1.16s |         939 | `generateMethod(IrFunction, SourceMapper)`                                                                        | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                           |
|  83.8% |   1.06s |         596 | `generateMethodNode(IrFunction)`                                                                                  | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                           |
|  16.4% | 207.0ms |         506 | `doGenerate(ReifiedTypeParametersUsages)`                                                                         | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`                        |
|  16.4% | 207.0ms |         506 | `generate(ReifiedTypeParametersUsages)`                                                                           | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`                        |
|  16.4% | 207.0ms |         506 | `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)`                                     | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`                        |
|  11.0% | 139.7ms |         228 | `generate()`                                                                                                      | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
|  10.9% | 137.3ms |         201 | `visitStatementContainer(IrStatementContainer, BlockInfo)`                                                        | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
|  10.9% | 137.3ms |         201 | `visitBlockBody(IrBlockBody, BlockInfo)`                                                                          | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
|  10.9% | 137.3ms |         201 | `visitBlockBody(IrBlockBody, Object)`                                                                             | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
|  10.9% | 137.3ms |         201 | `accept(IrVisitor, Object)`                                                                                       | `org.jetbrains.kotlin.ir.expressions.IrBlockBody`                                 |
|  10.4% | 132.2ms |         190 | `visitReturn(IrReturn, BlockInfo)`                                                                                | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Ours

|     % |    Time | Contentions | Function                                                                                                          | Location                                                                          |
| ----: | ------: | ----------: | ----------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| 99.4% |   1.25s |       1,444 | `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`                            |
| 99.4% |   1.25s |       1,444 | `run()`                                                                                                           | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000f0018923a0` |
| 99.2% |   1.25s |       1,411 | `generateFile(JvmBackendContext, IrFile, List, boolean)`                                                          | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`                            |
| 94.3% |   1.19s |       1,027 | `generate()`                                                                                                      | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                           |
| 92.4% |   1.16s |         939 | `generateMethod(IrFunction, SourceMapper)`                                                                        | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                           |
| 83.8% |   1.06s |         596 | `generateMethodNode(IrFunction)`                                                                                  | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                           |
| 16.4% | 207.0ms |         506 | `doGenerate(ReifiedTypeParametersUsages)`                                                                         | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`                        |
| 16.4% | 207.0ms |         506 | `generate(ReifiedTypeParametersUsages)`                                                                           | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`                        |
| 16.4% | 207.0ms |         506 | `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)`                                     | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`                        |
| 11.0% | 139.7ms |         228 | `generate()`                                                                                                      | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
| 10.9% | 137.3ms |         201 | `visitStatementContainer(IrStatementContainer, BlockInfo)`                                                        | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
| 10.9% | 137.3ms |         201 | `visitBlockBody(IrBlockBody, BlockInfo)`                                                                          | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
| 10.9% | 137.3ms |         201 | `visitBlockBody(IrBlockBody, Object)`                                                                             | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
| 10.9% | 137.3ms |         201 | `accept(IrVisitor, Object)`                                                                                       | `org.jetbrains.kotlin.ir.expressions.IrBlockBody`                                 |
| 10.4% | 132.2ms |         190 | `visitReturn(IrReturn, BlockInfo)`                                                                                | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
| 10.4% | 132.2ms |         190 | `visitReturn(IrReturn, Object)`                                                                                   | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
| 10.4% | 132.2ms |         190 | `accept(IrVisitor, Object)`                                                                                       | `org.jetbrains.kotlin.ir.expressions.IrReturn`                                    |
| 10.1% | 127.4ms |         169 | `visitCall(IrCall, BlockInfo)`                                                                                    | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
| 10.1% | 127.4ms |         169 | `visitCall(IrCall, Object)`                                                                                       | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
| 10.1% | 127.4ms |         169 | `accept(IrVisitor, Object)`                                                                                       | `org.jetbrains.kotlin.ir.expressions.IrCall`                                      |

#### Callers

Callers with the largest contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`)

|      % |  Time | Contentions | Caller  | Location                                         |
| -----: | ----: | ----------: | ------- | ------------------------------------------------ |
| 100.0% | 1.26s |       1,453 | `run()` | `java.util.concurrent.ThreadPoolExecutor$Worker` |

##### `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`)

|      % |  Time | Contentions | Caller                      | Location           |
| -----: | ----: | ----------: | --------------------------- | ------------------ |
| 100.0% | 1.26s |       1,453 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `runWith(Object, Runnable)` (`java.lang.Thread`)

|      % |  Time | Contentions | Caller  | Location           |
| -----: | ----: | ----------: | ------- | ------------------ |
| 100.0% | 1.26s |       1,453 | `run()` | `java.lang.Thread` |

##### `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)

|      % |  Time | Contentions | Caller  | Location                                                                          |
| -----: | ----: | ----------: | ------- | --------------------------------------------------------------------------------- |
| 100.0% | 1.25s |       1,444 | `run()` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000f0018923a0` |

##### `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000f0018923a0`)

|      % |  Time | Contentions | Caller  | Location                                          |
| -----: | ----: | ----------: | ------- | ------------------------------------------------- |
| 100.0% | 1.25s |       1,444 | `run()` | `java.util.concurrent.CompletableFuture$AsyncRun` |

##### `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`)

|      % |  Time | Contentions | Caller                                 | Location                                  |
| -----: | ----: | ----------: | -------------------------------------- | ----------------------------------------- |
| 100.0% | 1.25s |       1,444 | `runWorker(ThreadPoolExecutor$Worker)` | `java.util.concurrent.ThreadPoolExecutor` |

##### `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)

|      % |  Time | Contentions | Caller                                                                                                            | Location                                               |
| -----: | ----: | ----------: | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% | 1.25s |       1,411 | `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory` |

##### `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|      % |  Time | Contentions | Caller                                                   | Location                                               |
| -----: | ----: | ----------: | -------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% | 1.19s |       1,027 | `generateFile(JvmBackendContext, IrFile, List, boolean)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory` |

##### `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|      % |  Time | Contentions | Caller       | Location                                                |
| -----: | ----: | ----------: | ------------ | ------------------------------------------------------- |
| 100.0% | 1.16s |         939 | `generate()` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |

##### `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|      % |   Time | Contentions | Caller                                      | Location                                                             |
| -----: | -----: | ----------: | ------------------------------------------- | -------------------------------------------------------------------- |
| 100.0% |  1.06s |         596 | `generateMethod(IrFunction, SourceMapper)`  | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`              |
|   7.1% | 75.8ms |           2 | `compileInlineFunction(JvmMethodSignature)` | `org.jetbrains.kotlin.backend.jvm.codegen.IrSourceCompilerForInline` |

##### `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

|      % |    Time | Contentions | Caller                                  | Location                                                   |
| -----: | ------: | ----------: | --------------------------------------- | ---------------------------------------------------------- |
| 100.0% | 207.0ms |         506 | `generate(ReifiedTypeParametersUsages)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `generate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

|      % |    Time | Contentions | Caller                                                                        | Location                                                   |
| -----: | ------: | ----------: | ----------------------------------------------------------------------------- | ---------------------------------------------------------- |
| 100.0% | 207.0ms |         506 | `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

|      % |    Time | Contentions | Caller                           | Location                                                |
| -----: | ------: | ----------: | -------------------------------- | ------------------------------------------------------- |
| 100.0% | 207.0ms |         506 | `generateMethodNode(IrFunction)` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |

##### `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|      % |    Time | Contentions | Caller                                    | Location                                                   |
| -----: | ------: | ----------: | ----------------------------------------- | ---------------------------------------------------------- |
| 100.0% | 139.7ms |         228 | `doGenerate(ReifiedTypeParametersUsages)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|      % |    Time | Contentions | Caller                                                       | Location                                                     |
| -----: | ------: | ----------: | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 100.0% | 137.3ms |         201 | `visitBlockBody(IrBlockBody, BlockInfo)`                     | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |
|   2.2% |   3.0ms |          11 | `visitContainerExpression(IrContainerExpression, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitBlockBody(IrBlockBody, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|      % |    Time | Contentions | Caller                                | Location                                                     |
| -----: | ------: | ----------: | ------------------------------------- | ------------------------------------------------------------ |
| 100.0% | 137.3ms |         201 | `visitBlockBody(IrBlockBody, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitBlockBody(IrBlockBody, Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|      % |    Time | Contentions | Caller                      | Location                                          |
| -----: | ------: | ----------: | --------------------------- | ------------------------------------------------- |
| 100.0% | 137.3ms |         201 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrBlockBody` |

##### `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`)

|      % |    Time | Contentions | Caller       | Location                                                     |
| -----: | ------: | ----------: | ------------ | ------------------------------------------------------------ |
| 100.0% | 137.3ms |         201 | `generate()` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|      % |    Time | Contentions | Caller                          | Location                                                     |
| -----: | ------: | ----------: | ------------------------------- | ------------------------------------------------------------ |
| 100.0% | 132.2ms |         190 | `visitReturn(IrReturn, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitReturn(IrReturn, Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|      % |    Time | Contentions | Caller                      | Location                                       |
| -----: | ------: | ----------: | --------------------------- | ---------------------------------------------- |
| 100.0% | 132.2ms |         190 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrReturn` |

##### `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`)

|      % |    Time | Contentions | Caller                                                     | Location                                                     |
| -----: | ------: | ----------: | ---------------------------------------------------------- | ------------------------------------------------------------ |
| 100.0% | 132.2ms |         190 | `visitStatementContainer(IrStatementContainer, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitCall(IrCall, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|      % |    Time | Contentions | Caller                      | Location                                                     |
| -----: | ------: | ----------: | --------------------------- | ------------------------------------------------------------ |
| 100.0% | 127.4ms |         169 | `visitCall(IrCall, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitCall(IrCall, Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|      % |    Time | Contentions | Caller                      | Location                                     |
| -----: | ------: | ----------: | --------------------------- | -------------------------------------------- |
| 100.0% | 127.4ms |         169 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrCall` |

##### `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`)

|     % |    Time | Contentions | Caller                                                     | Location                                                     |
| ----: | ------: | ----------: | ---------------------------------------------------------- | ------------------------------------------------------------ |
| 82.0% | 104.4ms |          89 | `visitWhen(IrWhen, BlockInfo)`                             | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |
| 15.5% |  19.7ms |          73 | `visitReturn(IrReturn, BlockInfo)`                         | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |
|  2.0% |   2.5ms |           6 | `visitStatementContainer(IrStatementContainer, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |
|  0.6% |   0.7ms |           1 | `visitTypeOperator(IrTypeOperatorCall, BlockInfo)`         | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

#### Callees

Callees with the largest contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`)

|     % |  Time | Contentions | Callee                                                  | Location                                          |
| ----: | ----: | ----------: | ------------------------------------------------------- | ------------------------------------------------- |
| 99.4% | 1.25s |       1,444 | `run()`                                                 | `java.util.concurrent.CompletableFuture$AsyncRun` |
|  0.6% | 7.6ms |           8 | `getTask()`                                             | `java.util.concurrent.ThreadPoolExecutor`         |
| <0.1% | 0.1ms |           1 | `processWorkerExit(ThreadPoolExecutor$Worker, boolean)` | `java.util.concurrent.ThreadPoolExecutor`         |

##### `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`)

|      % |  Time | Contentions | Callee                                 | Location                                  |
| -----: | ----: | ----------: | -------------------------------------- | ----------------------------------------- |
| 100.0% | 1.26s |       1,453 | `runWorker(ThreadPoolExecutor$Worker)` | `java.util.concurrent.ThreadPoolExecutor` |

##### `runWith(Object, Runnable)` (`java.lang.Thread`)

|      % |  Time | Contentions | Callee  | Location                                         |
| -----: | ----: | ----------: | ------- | ------------------------------------------------ |
| 100.0% | 1.26s |       1,453 | `run()` | `java.util.concurrent.ThreadPoolExecutor$Worker` |

##### `run()` (`java.lang.Thread`)

|      % |  Time | Contentions | Callee                      | Location           |
| -----: | ----: | ----------: | --------------------------- | ------------------ |
| 100.0% | 1.26s |       1,453 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)

|     % |  Time | Contentions | Callee                                                   | Location                                               |
| ----: | ----: | ----------: | -------------------------------------------------------- | ------------------------------------------------------ |
| 99.8% | 1.25s |       1,411 | `generateFile(JvmBackendContext, IrFile, List, boolean)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory` |
|  0.2% | 2.5ms |          33 | `getUnitStats()`                                         | `org.jetbrains.kotlin.util.PerformanceManager`         |

##### `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000f0018923a0`)

|      % |  Time | Contentions | Callee                                                                                                            | Location                                               |
| -----: | ----: | ----------: | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% | 1.25s |       1,444 | `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory` |

##### `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`)

|      % |  Time | Contentions | Callee  | Location                                                                          |
| -----: | ----: | ----------: | ------- | --------------------------------------------------------------------------------- |
| 100.0% | 1.25s |       1,444 | `run()` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000f0018923a0` |

##### `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)

|     % |   Time | Contentions | Callee                                                                                                   | Location                                                          |
| ----: | -----: | ----------: | -------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| 95.0% |  1.19s |       1,027 | `generate()`                                                                                             | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`           |
|  4.3% | 53.5ms |         363 | `getOrCreate$default(ClassCodegen$Companion, IrClass, JvmBackendContext, List, IrFunction, int, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$Companion` |

##### `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|     % |   Time | Contentions | Callee                                                  | Location                                                |
| ----: | -----: | ----------: | ------------------------------------------------------- | ------------------------------------------------------- |
| 98.0% |  1.16s |         939 | `generateMethod(IrFunction, SourceMapper)`              | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |
|  1.9% | 23.1ms |          75 | `generateAnnotations()`                                 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |
| <0.1% |  0.4ms |           9 | `shouldSkipCodeGenerationAccordingToGenerationFilter()` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |
| <0.1% |  0.2ms |           1 | `generateField(IrField)`                                | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |
| <0.1% |  0.2ms |           1 | `visitSMAP(SourceMapper, boolean, boolean)`             | `org.jetbrains.kotlin.codegen.DelegatingClassBuilder`   |

##### `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|     % |   Time | Contentions | Callee                                                                   | Location                                                            |
| ----: | -----: | ----------: | ------------------------------------------------------------------------ | ------------------------------------------------------------------- |
| 90.7% |  1.06s |         596 | `generateMethodNode(IrFunction)`                                         | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`             |
|  3.3% | 38.9ms |         167 | `accept(MethodVisitor)`                                                  | `org.jetbrains.org.objectweb.asm.tree.MethodNode`                   |
|  2.5% | 29.2ms |          79 | `getMetadataSerializer()`                                                | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`             |
|  2.3% | 27.1ms |          65 | `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` | `org.jetbrains.kotlin.codegen.DelegatingClassBuilder`               |
|  0.6% |  6.5ms |          10 | `<init>(SourceMapper, SMAP, MethodVisitor)`                              | `org.jetbrains.kotlin.codegen.inline.SourceMapCopyingMethodVisitor` |

##### `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|     % |    Time | Contentions | Callee                                                                        | Location                                                   |
| ----: | ------: | ----------: | ----------------------------------------------------------------------------- | ---------------------------------------------------------- |
| 19.5% | 207.0ms |         506 | `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

|     % |    Time | Contentions | Callee                                    | Location                                                         |
| ----: | ------: | ----------: | ----------------------------------------- | ---------------------------------------------------------------- |
| 67.5% | 139.7ms |         228 | `generate()`                              | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`     |
|  3.0% |   6.2ms |          37 | `calculateMethodFlags(IrFunction)`        | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`       |
|  2.8% |   5.8ms |          25 | `createFrameMapWithReceivers(IrFunction)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`       |
|  2.3% |   4.7ms |          48 | `mapSignatureWithGeneric(IrFunction)`     | `org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper` |
|  2.0% |   4.2ms |           6 | `getThrownExceptions(IrFunction)`         | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`       |

##### `generate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

|      % |    Time | Contentions | Callee                                    | Location                                                   |
| -----: | ------: | ----------: | ----------------------------------------- | ---------------------------------------------------------- |
| 100.0% | 207.0ms |         506 | `doGenerate(ReifiedTypeParametersUsages)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

|      % |    Time | Contentions | Callee                                  | Location                                                   |
| -----: | ------: | ----------: | --------------------------------------- | ---------------------------------------------------------- |
| 100.0% | 207.0ms |         506 | `generate(ReifiedTypeParametersUsages)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|     % |    Time | Contentions | Callee                                             | Location                                                     |
| ----: | ------: | ----------: | -------------------------------------------------- | ------------------------------------------------------------ |
| 98.3% | 137.3ms |         201 | `accept(IrVisitor, Object)`                        | `org.jetbrains.kotlin.ir.expressions.IrBlockBody`            |
|  0.6% |   0.8ms |          10 | `generateNonNullAssertions()`                      | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |
|  0.4% |   0.5ms |           6 | `markNewLabel()`                                   | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |
|  0.4% |   0.5ms |           2 | `writeParameterInLocalVariableTable(Label, Label)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|     % |    Time | Contentions | Callee                            | Location                                                   |
| ----: | ------: | ----------: | --------------------------------- | ---------------------------------------------------------- |
| 96.2% | 132.2ms |         190 | `accept(IrVisitor, Object)`       | `org.jetbrains.kotlin.ir.expressions.IrReturn`             |
|  1.8% |   2.5ms |           6 | `accept(IrVisitor, Object)`       | `org.jetbrains.kotlin.ir.expressions.IrCall`               |
|  1.4% |   2.0ms |           3 | `getUnitValue(ExpressionCodegen)` | `org.jetbrains.kotlin.backend.jvm.codegen.PromisedValueKt` |
|  0.9% |   1.3ms |           2 | `accept(IrVisitor, Object)`       | `org.jetbrains.kotlin.ir.expressions.IrWhileLoop`          |
|  0.9% |   1.3ms |           2 | `accept(IrVisitor, Object)`       | `org.jetbrains.kotlin.ir.expressions.IrBlock`              |

##### `visitBlockBody(IrBlockBody, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|      % |    Time | Contentions | Callee                                                     | Location                                                     |
| -----: | ------: | ----------: | ---------------------------------------------------------- | ------------------------------------------------------------ |
| 100.0% | 137.3ms |         201 | `visitStatementContainer(IrStatementContainer, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitBlockBody(IrBlockBody, Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|      % |    Time | Contentions | Callee                                   | Location                                                     |
| -----: | ------: | ----------: | ---------------------------------------- | ------------------------------------------------------------ |
| 100.0% | 137.3ms |         201 | `visitBlockBody(IrBlockBody, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`)

|      % |    Time | Contentions | Callee                                | Location                                                     |
| -----: | ------: | ----------: | ------------------------------------- | ------------------------------------------------------------ |
| 100.0% | 137.3ms |         201 | `visitBlockBody(IrBlockBody, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|     % |    Time | Contentions | Callee                      | Location                                                 |
| ----: | ------: | ----------: | --------------------------- | -------------------------------------------------------- |
| 81.4% | 107.5ms |         101 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrWhen`             |
| 14.9% |  19.7ms |          73 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrCall`             |
|  2.4% |   3.2ms |          10 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrTry`              |
|  1.3% |   1.7ms |           5 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrTypeOperatorCall` |
| <0.1% |   0.1ms |           1 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrBlock`            |

##### `visitReturn(IrReturn, Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|      % |    Time | Contentions | Callee                             | Location                                                     |
| -----: | ------: | ----------: | ---------------------------------- | ------------------------------------------------------------ |
| 100.0% | 132.2ms |         190 | `visitReturn(IrReturn, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`)

|      % |    Time | Contentions | Callee                          | Location                                                     |
| -----: | ------: | ----------: | ------------------------------- | ------------------------------------------------------------ |
| 100.0% | 132.2ms |         190 | `visitReturn(IrReturn, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitCall(IrCall, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|     % |    Time | Contentions | Callee                                                                                                           | Location                                                         |
| ----: | ------: | ----------: | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| 86.4% | 110.0ms |         105 | `genCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)`                              | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCallGenerator` |
|  7.3% |   9.3ms |          31 | `getOrCreateCallGenerator(IrFunctionAccessExpression, BlockInfo, JvmMethodSignature)`                            | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`     |
|  2.5% |   3.2ms |           5 | `mapToCallableMethod(IrCall, IrFunction)`                                                                        | `org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper` |
|  2.1% |   2.7ms |          22 | `visitCall$handleParameter(IrCallGenerator, ExpressionCodegen, BlockInfo, IrValueParameter, IrExpression, Type)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`     |
|  0.9% |   1.1ms |           2 | `getSuspensionPointKind(IrFunctionAccessExpression)`                                                             | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`     |

##### `visitCall(IrCall, Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|      % |    Time | Contentions | Callee                         | Location                                                     |
| -----: | ------: | ----------: | ------------------------------ | ------------------------------------------------------------ |
| 100.0% | 127.4ms |         169 | `visitCall(IrCall, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`)

|      % |    Time | Contentions | Callee                      | Location                                                     |
| -----: | ------: | ----------: | --------------------------- | ------------------------------------------------------------ |
| 100.0% | 127.4ms |         169 | `visitCall(IrCall, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

## Hottest call stacks

Call stacks with the most time blocked in their leaf frame.

Common call stack: `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`) ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`

|     % |    Time | Contentions | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ----: | ------: | ----------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 67.4% | 853.2ms |          90 | `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000f0018923a0`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  6.0% |  75.8ms |           2 | `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `compileInlineFunction(JvmMethodSignature)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrSourceCompilerForInline`) ← `genInlineCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`) ← `genCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCallGenerator`) ← `visitCall(IrCall, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitCall(IrCall, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`) ← `visitWhen(IrWhen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitWhen(IrWhen, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrWhen`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000f0018923a0`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`) |
|  2.9% |  36.1ms |          59 | `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000f0018923a0`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  1.4% |  17.3ms |          42 | `<init>(MethodVisitor, boolean, GenerationState, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`) ← `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.optimization.OptimizationClassBuilder`) ← `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.DelegatingClassBuilder`) ← `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000f0018923a0`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  1.3% |  16.0ms |          38 | `makeFirMetadataSerializerForIrClass(FirSession, JvmBackendContext, IrClass, JvmSerializationBindings, Fir2IrComponents, MetadataSerializer, Set)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`) ← `createSerializer(JvmBackendContext, IrClass, Type, JvmSerializationBindings, MetadataSerializer)` (`org.jetbrains.kotlin.fir.backend.jvm.FirJvmBackendExtension`) ← `metadataSerializer_delegate$lambda$0(ClassCodegen)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `invoke()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$$Lambda.0x000000f001897840`) ← `getValue()` (`kotlin.SynchronizedLazyImpl`) ← `getMetadataSerializer()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000f0018923a0`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  1.2% |  14.6ms |          31 | `newClassBuilder(JvmDeclarationOrigin)` (`org.jetbrains.kotlin.codegen.ClassBuilderFactories$1`) ← `newClassBuilder(JvmDeclarationOrigin)` (`org.jetbrains.kotlin.codegen.optimization.OptimizationClassBuilderFactory`) ← `newClassBuilder(JvmDeclarationOrigin)` ← `newClassBuilder(JvmDeclarationOrigin)` (`org.jetbrains.kotlin.codegen.ClassNameCollectionClassBuilderFactory`) ← `newClassBuilder(JvmDeclarationOrigin)` ← `newVisitor(JvmDeclarationOrigin, Type, List)` (`org.jetbrains.kotlin.codegen.ClassFileFactory`) ← `<init>(IrClass, JvmBackendContext, IrFunction, List)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `<init>(IrClass, JvmBackendContext, IrFunction, List, DefaultConstructorMarker)` ← `getOrCreate(IrClass, JvmBackendContext, List, IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$Companion`) ← `getOrCreate$default(ClassCodegen$Companion, IrClass, JvmBackendContext, List, IrFunction, int, Object)` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000f0018923a0`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  0.9% |  11.1ms |          70 | `<init>(IrClass, JvmBackendContext, IrFunction, List)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `<init>(IrClass, JvmBackendContext, IrFunction, List, DefaultConstructorMarker)` ← `getOrCreate(IrClass, JvmBackendContext, List, IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$Companion`) ← `getOrCreate$default(ClassCodegen$Companion, IrClass, JvmBackendContext, List, IrFunction, int, Object)` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000f0018923a0`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  0.7% |   8.9ms |          21 | `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000f0018923a0`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  0.6% |   8.1ms |           9 | `makeElementSerializer(MetadataSource, FirSession, ScopeSession, FirJvmSerializerExtension, AbstractTypeApproximator, MetadataSerializer, LanguageVersionSettings)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`) ← `makeFirMetadataSerializerForIrClass(FirSession, JvmBackendContext, IrClass, JvmSerializationBindings, Fir2IrComponents, MetadataSerializer, Set)` ← `createSerializer(JvmBackendContext, IrClass, Type, JvmSerializationBindings, MetadataSerializer)` (`org.jetbrains.kotlin.fir.backend.jvm.FirJvmBackendExtension`) ← `metadataSerializer_delegate$lambda$0(ClassCodegen)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `invoke()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$$Lambda.0x000000f001897840`) ← `getValue()` (`kotlin.SynchronizedLazyImpl`) ← `getMetadataSerializer()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000f0018923a0`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  0.6% |   7.6ms |           4 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park(Object)` (`java.util.concurrent.locks.LockSupport`) ← `acquire(AbstractQueuedSynchronizer$Node, int, boolean, boolean, boolean, long)` (`java.util.concurrent.locks.AbstractQueuedSynchronizer`) ← `reacquire(AbstractQueuedSynchronizer$Node, int)` ← `await()` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`) ← `take()` (`java.util.concurrent.LinkedBlockingQueue`) ← `getTask()` (`java.util.concurrent.ThreadPoolExecutor`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  0.5% |   6.3ms |           8 | `<init>(SourceMapper, SMAP, SourcePosition)` (`org.jetbrains.kotlin.codegen.inline.SourceMapCopier`) ← `<init>(SourceMapper, SMAP, SourcePosition, int, DefaultConstructorMarker)` ← `<init>(SourceMapper, SMAP, MethodVisitor)` (`org.jetbrains.kotlin.codegen.inline.SourceMapCopyingMethodVisitor`) ← `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000f0018923a0`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  0.5% |   6.1ms |          18 | `<init>(ClassReader, int)` (`org.jetbrains.org.objectweb.asm.ClassWriter`) ← `<init>(int)` ← `<init>()` (`org.jetbrains.kotlin.codegen.ClassBuilderFactories$BinaryClassWriter`) ← `newClassBuilder(JvmDeclarationOrigin)` (`org.jetbrains.kotlin.codegen.ClassBuilderFactories$1`) ← `newClassBuilder(JvmDeclarationOrigin)` (`org.jetbrains.kotlin.codegen.optimization.OptimizationClassBuilderFactory`) ← `newClassBuilder(JvmDeclarationOrigin)` ← `newClassBuilder(JvmDeclarationOrigin)` (`org.jetbrains.kotlin.codegen.ClassNameCollectionClassBuilderFactory`) ← `newClassBuilder(JvmDeclarationOrigin)` ← `newVisitor(JvmDeclarationOrigin, Type, List)` (`org.jetbrains.kotlin.codegen.ClassFileFactory`) ← `<init>(IrClass, JvmBackendContext, IrFunction, List)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `<init>(IrClass, JvmBackendContext, IrFunction, List, DefaultConstructorMarker)` ← `getOrCreate(IrClass, JvmBackendContext, List, IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$Companion`) ← `getOrCreate$default(ClassCodegen$Companion, IrClass, JvmBackendContext, List, IrFunction, int, Object)` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000f0018923a0`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  0.4% |   5.4ms |           6 | `visitMethod(int, String, String, String, String[])` (`org.jetbrains.org.objectweb.asm.ClassWriter`) ← `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.AbstractClassBuilder`) ← `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.DelegatingClassBuilder`) ← `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.optimization.OptimizationClassBuilder`) ← `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.DelegatingClassBuilder`) ← `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000f0018923a0`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  0.4% |   5.0ms |          18 | `<init>()` (`org.jetbrains.kotlin.codegen.FrameMapBase`) ← `<init>()` (`org.jetbrains.kotlin.backend.jvm.codegen.IrFrameMap`) ← `createFrameMapWithReceivers(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000f0018923a0`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  0.3% |   4.2ms |           6 | `getThrownExceptions(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000f0018923a0`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  0.3% |   4.1ms |          36 | `mapClassSignature(IrTypeMapper, IrClass, Type, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt`) ← `<init>(IrClass, JvmBackendContext, IrFunction, List)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `<init>(IrClass, JvmBackendContext, IrFunction, List, DefaultConstructorMarker)` ← `getOrCreate(IrClass, JvmBackendContext, List, IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$Companion`) ← `getOrCreate$default(ClassCodegen$Companion, IrClass, JvmBackendContext, List, IrFunction, int, Object)` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000f0018923a0`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  0.3% |   3.9ms |          13 | `getOrCreateCallGenerator(IrFunctionAccessExpression, BlockInfo, JvmMethodSignature)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitCall(IrCall, BlockInfo)` ← `visitCall(IrCall, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`) ← `visitWhen(IrWhen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitWhen(IrWhen, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrWhen`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000f0018923a0`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`)                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  0.3% |   3.6ms |           9 | `parseMethodOrNull(MethodNode)` (`org.jetbrains.kotlin.codegen.inline.InplaceArgumentsMethodTransformer`) ← `transform(String, MethodNode)` ← `transform(String, MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.transformer.CompositeMethodTransformer`) ← `performTransformations(MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`) ← `visitEnd()` (`org.jetbrains.kotlin.codegen.TransformationMethodVisitor`) ← `visitEnd()` (`org.jetbrains.org.objectweb.asm.MethodVisitor`) ← `accept(MethodVisitor)` (`org.jetbrains.org.objectweb.asm.tree.MethodNode`) ← `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000f0018923a0`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  0.3% |   3.4ms |           7 | `getOrCreateCallGenerator(IrFunctionAccessExpression, BlockInfo, JvmMethodSignature)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitCall(IrCall, BlockInfo)` ← `visitCall(IrCall, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000f0018923a0`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  0.3% |   3.3ms |           6 | `inlineCall(SMAPAndMethodNode, boolean, IrFunctionAccessExpression)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`) ← `genInlineCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` ← `genCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCallGenerator`) ← `visitCall(IrCall, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitCall(IrCall, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`) ← `visitWhen(IrWhen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitWhen(IrWhen, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrWhen`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000f0018923a0`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`)                                                                                                                                            |

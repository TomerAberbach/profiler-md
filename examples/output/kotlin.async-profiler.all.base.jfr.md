# Sampling profile

Collected 1,506 samples.

| Category          |     % | Samples |
| ----------------- | ----: | ------: |
| Native            | 44.7% |     673 |
| Compiler          | 40.6% |     611 |
| Ours              |  9.4% |     142 |
| Standard library  |  4.1% |      62 |
| JIT               |  1.1% |      17 |
| Garbage collector |  0.1% |       1 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
├── … 1,018 samples (67.6%) Thread::call_run at libjvm.dylib
│   ├── 957 samples (63.5%) JavaThread::thread_main_inner
│   │   └── 956 samples (63.5%) CompileBroker::compiler_thread_loop
│   │       ├── 875 samples (58.1%) CompileBroker::invoke_compiler_on_method
│   │       │   ├── 595 samples (39.5%) C2Compiler::compile_method
│   │       │   │   └── 592 samples (39.3%) Compile::Compile
│   │       │   │       ├── 310 samples (20.6%) Compile::Code_Gen
│   │       │   │       │   ├── 164 samples (10.9%) PhaseChaitin::Register_Allocate
│   │       │   │       │   │   ├── 32 samples (2.1%, self 0.9%) PhaseChaitin::build_ifg_physical
│   │       │   │       │   │   │   └── 18 samples (1.2%) 14 more callees, led by (0.3%) PhaseChaitin::remove_bound_register_from_interfering_live_ranges
│   │       │   │       │   │   ├── 24 samples (1.6%, self 0.6%) PhaseLive::compute
│   │       │   │       │   │   │   ├── 11 samples (0.7%) PhaseLive::add_liveout
│   │       │   │       │   │   │   └── 2 samples (0.1%, self 1.7% globally) tlv_get_addr at libdyld.dylib
│   │       │   │       │   │   ├── 24 samples (1.6%, self 1.0%) PhaseChaitin::Split
│   │       │   │       │   │   │   └── 3 samples (0.2%) PhaseChaitin::split_DEF
│   │       │   │       │   │   └── 84 samples (5.6%) 22 more callees, led by (1.1%) PhaseChaitin::gather_lrg_masks
│   │       │   │       │   └── 146 samples (9.7%) 8 more callees, led by (3.3%) Matcher::match
│   │       │   │       ├── … 1 sample (0.1%, self 1.3% globally) SymbolTable::do_lookup at libjvm.dylib
│   │       │   │       └── 276 samples (18.3%) 5 more callees, led by (13.4%) Compile::Optimize
│   │       │   └── 280 samples (18.6%) 6 more callees, led by (17.9%) Compiler::compile_method
│   │       └── … 78 samples (5.2%) PlatformMonitor::wait at libjvm.dylib
│   │           ├── 67 samples (4.4%) __psynch_cvwait at libsystem_kernel.dylib
│   │           └── … 11 samples (0.7%, self 5.3% globally) __psynch_mutexwait at libsystem_kernel.dylib
│   └── 55 samples (3.7%) WorkerThread::run
│       ├── 22 samples (1.5%) G1EvacuateRegionsBaseTask::work
│       │   ├── … 4 samples (0.3%, self 0.9% globally) fwd_copy_again at libjvm.dylib
│       │   └── 13 samples (0.9%) 2 more callees, led by (0.8%) G1EvacuateRegionsTask::scan_roots
│       └── 33 samples (2.2%) 4 more callees, led by (1.0%) G1RebuildRSAndScrubTask::work
├── 478 samples (31.7%) main(String[]) at org.jetbrains.kotlin.preloading.Preloader
│   └── 478 samples (31.7%) run(String[])
│       ├── … 395 samples (26.2%) exec(PrintStream, Services, MessageRenderer, String[]) at org.jetbrains.kotlin.cli.common.CLICompiler
│       │   └── 391 samples (26.0%) exec(MessageCollector, Services, CommonCompilerArguments)
│       │       ├── … 379 samples (25.2%) invoke(PhaseConfig, PhaserState, LoggingContext, Object) at org.jetbrains.kotlin.config.phaser.NamedCompilerPhase
│       │       │   └── 379 samples (25.2%) 4 more callees, led by (23.4%) phaseBody(LoggingContext, Object) at org.jetbrains.kotlin.cli.pipeline.PipelinePhase
│       │       └── 8 samples (0.5%) <clinit>() at org.jetbrains.kotlin.cli.common.ArgumentsKt …
│       └── … 69 samples (4.6%) read(byte[], int, int) at java.util.zip.ZipInputStream
│           └── … 63 samples (4.2%) Java_java_util_zip_Inflater_inflateBytesBytes at libzip.dylib
│               ├── 50 samples (3.3%) inflate_fast
│               └── 8 samples (0.5%) inflate
└── 7 samples (0.5%) break_stack_range
```

## Hottest functions

### Self samples

Functions with the most samples collected within the function body, excluding callees.

|    % | Samples | Function                                                                                                                                                 | Location                   |
| ---: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| 5.3% |      80 | `__psynch_mutexwait`                                                                                                                                     | `libsystem_kernel.dylib`   |
| 4.7% |      71 | `__psynch_cvwait`                                                                                                                                        | `libsystem_kernel.dylib`   |
| 3.3% |      50 | `inflate_fast`                                                                                                                                           | `libzip.dylib`             |
| 1.7% |      25 | `tlv_get_addr`                                                                                                                                           | `libdyld.dylib`            |
| 1.3% |      19 | `SymbolTable::do_lookup`                                                                                                                                 | `libjvm.dylib`             |
| 1.0% |      15 | `PhaseChaitin::Split`                                                                                                                                    | `libjvm.dylib`             |
| 1.0% |      15 | `InstanceKlass::find_method_index`                                                                                                                       | `libjvm.dylib`             |
| 0.9% |      14 | `PhaseChaitin::build_ifg_physical`                                                                                                                       | `libjvm.dylib`             |
| 0.9% |      13 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `libjvm.dylib`             |
| 0.9% |      13 | `fwd_copy_again`                                                                                                                                         | `libjvm.dylib`             |
| 0.8% |      12 | `IndexSetIterator::advance_and_next`                                                                                                                     | `libjvm.dylib`             |
| 0.7% |      10 | `IntervalWalker::walk_to`                                                                                                                                | `libjvm.dylib`             |
| 0.6% |       9 | `PhaseChaitin::gather_lrg_masks`                                                                                                                         | `libjvm.dylib`             |
| 0.6% |       9 | `ciObjectFactory::get_metadata`                                                                                                                          | `libjvm.dylib`             |
| 0.6% |       9 | `PhaseIdealLoop::build_loop_late`                                                                                                                        | `libjvm.dylib`             |
| 0.6% |       9 | `PhaseAggressiveCoalesce::insert_copies`                                                                                                                 | `libjvm.dylib`             |
| 0.6% |       9 | `PhaseChaitin::elide_copy`                                                                                                                               | `libjvm.dylib`             |
| 0.6% |       9 | `PhaseLive::compute`                                                                                                                                     | `libjvm.dylib`             |
| 0.6% |       9 | `_platform_memmove`                                                                                                                                      | `libsystem_platform.dylib` |
| 0.6% |       9 | `pthread_jit_write_protect_np`                                                                                                                           | `libsystem_pthread.dylib`  |

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Native

|    % | Samples | Function                                                                                                                                                 | Location                   |
| ---: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| 5.3% |      80 | `__psynch_mutexwait`                                                                                                                                     | `libsystem_kernel.dylib`   |
| 4.7% |      71 | `__psynch_cvwait`                                                                                                                                        | `libsystem_kernel.dylib`   |
| 3.3% |      50 | `inflate_fast`                                                                                                                                           | `libzip.dylib`             |
| 1.7% |      25 | `tlv_get_addr`                                                                                                                                           | `libdyld.dylib`            |
| 1.3% |      19 | `SymbolTable::do_lookup`                                                                                                                                 | `libjvm.dylib`             |
| 1.0% |      15 | `InstanceKlass::find_method_index`                                                                                                                       | `libjvm.dylib`             |
| 0.9% |      13 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `libjvm.dylib`             |
| 0.9% |      13 | `fwd_copy_again`                                                                                                                                         | `libjvm.dylib`             |
| 0.6% |       9 | `_platform_memmove`                                                                                                                                      | `libsystem_platform.dylib` |
| 0.6% |       9 | `pthread_jit_write_protect_np`                                                                                                                           | `libsystem_pthread.dylib`  |
| 0.5% |       8 | `sys_icache_invalidate`                                                                                                                                  | `libsystem_platform.dylib` |
| 0.5% |       8 | `SymbolTable::lookup_shared`                                                                                                                             | `libjvm.dylib`             |
| 0.5% |       7 | `Dictionary::find`                                                                                                                                       | `libjvm.dylib`             |
| 0.4% |       6 | `bsearch`                                                                                                                                                | `libsystem_c.dylib`        |
| 0.4% |       6 | `trampoline_stub_Relocation::get_trampoline_for`                                                                                                         | `libjvm.dylib`             |
| 0.4% |       6 | `_platform_memset`                                                                                                                                       | `libsystem_platform.dylib` |
| 0.4% |       6 | `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>`                                                           | `libjvm.dylib`             |
| 0.3% |       5 | `Arena::contains`                                                                                                                                        | `libjvm.dylib`             |
| 0.3% |       5 | `inflate`                                                                                                                                                | `libzip.dylib`             |
| 0.3% |       5 | `inflate_table`                                                                                                                                          | `libzip.dylib`             |

##### Compiler

|    % | Samples | Function                                        | Location       |
| ---: | ------: | ----------------------------------------------- | -------------- |
| 1.0% |      15 | `PhaseChaitin::Split`                           | `libjvm.dylib` |
| 0.9% |      14 | `PhaseChaitin::build_ifg_physical`              | `libjvm.dylib` |
| 0.8% |      12 | `IndexSetIterator::advance_and_next`            | `libjvm.dylib` |
| 0.7% |      10 | `IntervalWalker::walk_to`                       | `libjvm.dylib` |
| 0.6% |       9 | `PhaseChaitin::gather_lrg_masks`                | `libjvm.dylib` |
| 0.6% |       9 | `ciObjectFactory::get_metadata`                 | `libjvm.dylib` |
| 0.6% |       9 | `PhaseIdealLoop::build_loop_late`               | `libjvm.dylib` |
| 0.6% |       9 | `PhaseAggressiveCoalesce::insert_copies`        | `libjvm.dylib` |
| 0.6% |       9 | `PhaseChaitin::elide_copy`                      | `libjvm.dylib` |
| 0.6% |       9 | `PhaseLive::compute`                            | `libjvm.dylib` |
| 0.5% |       7 | `PhaseIdealLoop::build_loop_early`              | `libjvm.dylib` |
| 0.5% |       7 | `Matcher::xform`                                | `libjvm.dylib` |
| 0.5% |       7 | `Type::cmp`                                     | `libjvm.dylib` |
| 0.5% |       7 | `PhaseIdealLoop::Dominators`                    | `libjvm.dylib` |
| 0.5% |       7 | `Node::dominates`                               | `libjvm.dylib` |
| 0.5% |       7 | `LinearScan::build_intervals`                   | `libjvm.dylib` |
| 0.5% |       7 | `LinearScan::compute_local_live_sets`           | `libjvm.dylib` |
| 0.4% |       6 | `RelocIterator::set_limits`                     | `libjvm.dylib` |
| 0.4% |       6 | `LinearScanWalker::free_collect_inactive_fixed` | `libjvm.dylib` |
| 0.4% |       6 | `LinearScanWalker::alloc_free_reg`              | `libjvm.dylib` |

##### Ours

|    % | Samples | Function                                                                                                            | Location                                                                                      |
| ---: | ------: | ------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| 0.1% |       2 | `transform(String, MethodNode)`                                                                                     | `org.jetbrains.kotlin.codegen.optimization.transformer.CompositeMethodTransformer`            |
| 0.1% |       1 | `accept(ClassVisitor, Attribute[], int)`                                                                            | `org.jetbrains.org.objectweb.asm.ClassReader`                                                 |
| 0.1% |       1 | `loadModuleMapping(ModuleMapping$Companion, byte[], String, DeserializationConfiguration, Function1)`               | `org.jetbrains.kotlin.load.kotlin.ModuleMappingUtilKt`                                        |
| 0.1% |       1 | `isInitialized()`                                                                                                   | `org.jetbrains.kotlin.metadata.ProtoBuf$ValueParameter`                                       |
| 0.1% |       1 | `add(int, int)`                                                                                                     | `it.unimi.dsi.fastutil.ints.IntArrayList`                                                     |
| 0.1% |       1 | `advance()`                                                                                                         | `org.jetbrains.kotlin.lexer._JetLexer`                                                        |
| 0.1% |       1 | `insertLeaf(IElementType, PsiBuilderImpl, int, int, boolean, PsiBuilderImpl$StartMarker)`                           | `com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure`                                       |
| 0.1% |       1 | `eof()`                                                                                                             | `org.jetbrains.kotlin.parsing.AbstractKotlinParsing`                                          |
| 0.1% |       1 | `<init>()`                                                                                                          | `org.jetbrains.kotlin.fir.expressions.builder.FirReturnExpressionBuilder`                     |
| 0.1% |       1 | `balanceWhiteSpaces()`                                                                                              | `com.intellij.lang.impl.PsiBuilderImpl`                                                       |
| 0.1% |       1 | `<init>(byte[], int, boolean)`                                                                                      | `org.jetbrains.org.objectweb.asm.ClassReader`                                                 |
| 0.1% |       1 | `resolveUserType(FirUserTypeRef, FirTypeCandidateCollector$TypeResolutionResult, boolean, FirDeclaration, boolean)` | `org.jetbrains.kotlin.fir.resolve.providers.impl.FirTypeResolverImpl`                         |
| 0.1% |       1 | `measureSideTime$org_jetbrains_kotlin_compiler_common(PhaseSideType, Function0)`                                    | `org.jetbrains.kotlin.util.PerformanceManager`                                                |
| 0.1% |       1 | `invoke(Object, Object, Object)`                                                                                    | `org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope$processPropertiesByName$1` |
| 0.1% |       1 | `<init>(SmallSortedMap, Comparable, Object)`                                                                        | `org.jetbrains.kotlin.protobuf.SmallSortedMap$Entry`                                          |
| 0.1% |       1 | `extractDeprecationAnnotationInfoPerUseSite(List, boolean, FirSession, List)`                                       | `org.jetbrains.kotlin.fir.declarations.DeprecationUtilsKt`                                    |
| 0.1% |       1 | `accept(FirVisitor, Object)`                                                                                        | `org.jetbrains.kotlin.fir.declarations.FirFile`                                               |
| 0.1% |       1 | `transform(FirTransformer, Object)`                                                                                 | `org.jetbrains.kotlin.fir.types.FirTypeProjectionWithVariance`                                |
| 0.1% |       1 | `transform(FirTransformer, Object)`                                                                                 | `org.jetbrains.kotlin.fir.types.FirResolvedTypeRef`                                           |
| 0.1% |       1 | `lowerBoundIfFlexible(ConeKotlinType)`                                                                              | `org.jetbrains.kotlin.fir.types.ConeTypeUtilsKt`                                              |

##### Standard library

|    % | Samples | Function                                                               | Location                                                   |
| ---: | ------: | ---------------------------------------------------------------------- | ---------------------------------------------------------- |
| 0.3% |       4 | `checkNotNullParameter(Object, String)`                                | `kotlin.jvm.internal.Intrinsics`                           |
| 0.2% |       3 | `equals(Object)`                                                       | `java.lang.String`                                         |
| 0.2% |       3 | `sanitizeStackTrace(Throwable)`                                        | `kotlin.jvm.internal.Intrinsics`                           |
| 0.1% |       2 | `putVal(int, Object, Object, boolean, boolean)`                        | `java.util.HashMap`                                        |
| 0.1% |       2 | `substring(int)`                                                       | `java.lang.String`                                         |
| 0.1% |       2 | `isLatin1()`                                                           | `java.lang.String`                                         |
| 0.1% |       2 | `add(Object)`                                                          | `java.util.ArrayList`                                      |
| 0.1% |       2 | `addKey$kotlin_stdlib(Object)`                                         | `kotlin.collections.builders.MapBuilder`                   |
| 0.1% |       2 | `ensureCapacityInternal(int)`                                          | `java.lang.AbstractStringBuilder`                          |
| 0.1% |       1 | `read(byte[], int, int)`                                               | `java.util.zip.ZipInputStream`                             |
| 0.1% |       1 | `resize()`                                                             | `java.util.HashMap`                                        |
| 0.1% |       1 | `hash(int, String, String)`                                            | `jdk.internal.org.objectweb.asm.SymbolTable`               |
| 0.1% |       1 | `put(Comparable, Object)`                                              | `kotlin.reflect.jvm.internal.impl.protobuf.SmallSortedMap` |
| 0.1% |       1 | `substring(int, int)`                                                  | `java.lang.String`                                         |
| 0.1% |       1 | `protectionDomain(Class)`                                              | `java.lang.System$2`                                       |
| 0.1% |       1 | `invoke(Class, MethodHandle, String, Object, Object, Class)`           | `java.lang.invoke.BootstrapMethodInvoker`                  |
| 0.1% |       1 | `invokeStatic(Object, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000008801230000`       |
| 0.1% |       1 | `<init>(URL, String, URLStreamHandler)`                                | `java.net.URL`                                             |
| 0.1% |       1 | `rangeCheck(int, int, int)`                                            | `java.util.Arrays`                                         |
| 0.1% |       1 | `<init>(String)`                                                       | `java.util.jar.JarEntry`                                   |

##### JIT

|    % | Samples | Function                          | Location    |
| ---: | ------: | --------------------------------- | ----------- |
| 0.4% |       6 | `I2C/C2I adapters(0xb)`           | `<unknown>` |
| 0.2% |       3 | `I2C/C2I adapters(0xbb)`          | `<unknown>` |
| 0.2% |       3 | `itable stub`                     | `<unknown>` |
| 0.1% |       1 | `zero_blocks`                     | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xbab)`         | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xba)`          | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xbbbbabaabab)` | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xbbbbb)`       | `<unknown>` |

#### Lines

Lines with the largest contribution to each function's self samples.

##### `checkNotNullParameter(Object, String)` (`kotlin.jvm.internal.Intrinsics`)

|      % | Samples | Location                             |
| -----: | ------: | ------------------------------------ |
| 100.0% |       4 | `kotlin.jvm.internal.Intrinsics:130` |

##### `equals(Object)` (`java.lang.String`)

|     % | Samples | Location                |
| ----: | ------: | ----------------------- |
| 66.7% |       2 | `java.lang.String:1852` |
| 33.3% |       1 | `java.lang.String:1850` |

##### `sanitizeStackTrace(Throwable)` (`kotlin.jvm.internal.Intrinsics`)

|      % | Samples | Location                             |
| -----: | ------: | ------------------------------------ |
| 100.0% |       3 | `kotlin.jvm.internal.Intrinsics:253` |

##### `transform(String, MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.transformer.CompositeMethodTransformer`)

|     % | Samples | Location                                                                              |
| ----: | ------: | ------------------------------------------------------------------------------------- |
| 50.0% |       1 | `org.jetbrains.kotlin.codegen.optimization.transformer.CompositeMethodTransformer:25` |
| 50.0% |       1 | `org.jetbrains.kotlin.codegen.optimization.transformer.CompositeMethodTransformer:28` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

|     % | Samples | Location                |
| ----: | ------: | ----------------------- |
| 50.0% |       1 | `java.util.HashMap:637` |
| 50.0% |       1 | `java.util.HashMap:636` |

##### `substring(int)` (`java.lang.String`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |       2 | `java.lang.String:2796` |

##### `isLatin1()` (`java.lang.String`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |       2 | `java.lang.String:4811` |

##### `add(Object)` (`java.util.ArrayList`)

|      % | Samples | Location                  |
| -----: | ------: | ------------------------- |
| 100.0% |       2 | `java.util.ArrayList:495` |

##### `addKey$kotlin_stdlib(Object)` (`kotlin.collections.builders.MapBuilder`)

|     % | Samples | Location                                     |
| ----: | ------: | -------------------------------------------- |
| 50.0% |       1 | `kotlin.collections.builders.MapBuilder:328` |
| 50.0% |       1 | `kotlin.collections.builders.MapBuilder:327` |

##### `ensureCapacityInternal(int)` (`java.lang.AbstractStringBuilder`)

|     % | Samples | Location                              |
| ----: | ------: | ------------------------------------- |
| 50.0% |       1 | `java.lang.AbstractStringBuilder:240` |
| 50.0% |       1 | `java.lang.AbstractStringBuilder:243` |

##### `accept(ClassVisitor, Attribute[], int)` (`org.jetbrains.org.objectweb.asm.ClassReader`)

|      % | Samples | Location                                          |
| -----: | ------: | ------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.org.objectweb.asm.ClassReader:699` |

##### `loadModuleMapping(ModuleMapping$Companion, byte[], String, DeserializationConfiguration, Function1)` (`org.jetbrains.kotlin.load.kotlin.ModuleMappingUtilKt`)

|      % | Samples | Location                                                  |
| -----: | ------: | --------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.load.kotlin.ModuleMappingUtilKt:18` |

##### `isInitialized()` (`org.jetbrains.kotlin.metadata.ProtoBuf$ValueParameter`)

|      % | Samples | Location                                                      |
| -----: | ------: | ------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.metadata.ProtoBuf$ValueParameter:24194` |

##### `add(int, int)` (`it.unimi.dsi.fastutil.ints.IntArrayList`)

|      % | Samples | Location                                      |
| -----: | ------: | --------------------------------------------- |
| 100.0% |       1 | `it.unimi.dsi.fastutil.ints.IntArrayList:323` |

##### `advance()` (`org.jetbrains.kotlin.lexer._JetLexer`)

|      % | Samples | Location                                    |
| -----: | ------: | ------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.lexer._JetLexer:1009` |

##### `insertLeaf(IElementType, PsiBuilderImpl, int, int, boolean, PsiBuilderImpl$StartMarker)` (`com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure`)

|      % | Samples | Location                                                     |
| -----: | ------: | ------------------------------------------------------------ |
| 100.0% |       1 | `com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure:1709` |

##### `eof()` (`org.jetbrains.kotlin.parsing.AbstractKotlinParsing`)

|      % | Samples | Location                                                 |
| -----: | ------: | -------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.parsing.AbstractKotlinParsing:142` |

##### `<init>()` (`org.jetbrains.kotlin.fir.expressions.builder.FirReturnExpressionBuilder`)

|      % | Samples | Location                                                                     |
| -----: | ------: | ---------------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.expressions.builder.FirReturnExpressionBuilder:26` |

##### `balanceWhiteSpaces()` (`com.intellij.lang.impl.PsiBuilderImpl`)

|      % | Samples | Location                                     |
| -----: | ------: | -------------------------------------------- |
| 100.0% |       1 | `com.intellij.lang.impl.PsiBuilderImpl:1212` |

##### `<init>(byte[], int, boolean)` (`org.jetbrains.org.objectweb.asm.ClassReader`)

|      % | Samples | Location                                          |
| -----: | ------: | ------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.org.objectweb.asm.ClassReader:263` |

##### `resolveUserType(FirUserTypeRef, FirTypeCandidateCollector$TypeResolutionResult, boolean, FirDeclaration, boolean)` (`org.jetbrains.kotlin.fir.resolve.providers.impl.FirTypeResolverImpl`)

|      % | Samples | Location                                                                  |
| -----: | ------: | ------------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.resolve.providers.impl.FirTypeResolverImpl:248` |

##### `measureSideTime$org_jetbrains_kotlin_compiler_common(PhaseSideType, Function0)` (`org.jetbrains.kotlin.util.PerformanceManager`)

|      % | Samples | Location                                           |
| -----: | ------: | -------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.util.PerformanceManager:341` |

##### `invoke(Object, Object, Object)` (`org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope$processPropertiesByName$1`)

|      % | Samples | Location                                                                                         |
| -----: | ------: | ------------------------------------------------------------------------------------------------ |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope$processPropertiesByName$1:71` |

##### `<init>(SmallSortedMap, Comparable, Object)` (`org.jetbrains.kotlin.protobuf.SmallSortedMap$Entry`)

|      % | Samples | Location                                                 |
| -----: | ------: | -------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.protobuf.SmallSortedMap$Entry:410` |

##### `extractDeprecationAnnotationInfoPerUseSite(List, boolean, FirSession, List)` (`org.jetbrains.kotlin.fir.declarations.DeprecationUtilsKt`)

|      % | Samples | Location                                                       |
| -----: | ------: | -------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.declarations.DeprecationUtilsKt:544` |

##### `accept(FirVisitor, Object)` (`org.jetbrains.kotlin.fir.declarations.FirFile`)

|      % | Samples | Location                                           |
| -----: | ------: | -------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.declarations.FirFile:43` |

##### `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.types.FirTypeProjectionWithVariance`)

|      % | Samples | Location                                                          |
| -----: | ------: | ----------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.types.FirTypeProjectionWithVariance:30` |

##### `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.types.FirResolvedTypeRef`)

|      % | Samples | Location                                               |
| -----: | ------: | ------------------------------------------------------ |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.types.FirResolvedTypeRef:35` |

##### `lowerBoundIfFlexible(ConeKotlinType)` (`org.jetbrains.kotlin.fir.types.ConeTypeUtilsKt`)

|      % | Samples | Location                                             |
| -----: | ------: | ---------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.types.ConeTypeUtilsKt:134` |

##### `read(byte[], int, int)` (`java.util.zip.ZipInputStream`)

|      % | Samples | Location                           |
| -----: | ------: | ---------------------------------- |
| 100.0% |       1 | `java.util.zip.ZipInputStream:416` |

##### `resize()` (`java.util.HashMap`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |       1 | `java.util.HashMap:713` |

##### `hash(int, String, String)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

|      % | Samples | Location                                          |
| -----: | ------: | ------------------------------------------------- |
| 100.0% |       1 | `jdk.internal.org.objectweb.asm.SymbolTable:1281` |

##### `put(Comparable, Object)` (`kotlin.reflect.jvm.internal.impl.protobuf.SmallSortedMap`)

|      % | Samples | Location                                                       |
| -----: | ------: | -------------------------------------------------------------- |
| 100.0% |       1 | `kotlin.reflect.jvm.internal.impl.protobuf.SmallSortedMap:256` |

##### `substring(int, int)` (`java.lang.String`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |       1 | `java.lang.String:2828` |

##### `protectionDomain(Class)` (`java.lang.System$2`)

|      % | Samples | Location                  |
| -----: | ------: | ------------------------- |
| 100.0% |       1 | `java.lang.System$2:2519` |

##### `invoke(Class, MethodHandle, String, Object, Object, Class)` (`java.lang.invoke.BootstrapMethodInvoker`)

|      % | Samples | Location                                      |
| -----: | ------: | --------------------------------------------- |
| 100.0% |       1 | `java.lang.invoke.BootstrapMethodInvoker:132` |

##### `<init>(URL, String, URLStreamHandler)` (`java.net.URL`)

|      % | Samples | Location           |
| -----: | ------: | ------------------ |
| 100.0% |       1 | `java.net.URL:723` |

##### `rangeCheck(int, int, int)` (`java.util.Arrays`)

|      % | Samples | Location               |
| -----: | ------: | ---------------------- |
| 100.0% |       1 | `java.util.Arrays:718` |

##### `<init>(String)` (`java.util.jar.JarEntry`)

|      % | Samples | Location                    |
| -----: | ------: | --------------------------- |
| 100.0% |       1 | `java.util.jar.JarEntry:53` |

#### Callers

Callers with the largest contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `__psynch_mutexwait` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                              | Location                  |
| -----: | ------: | ----------------------------------- | ------------------------- |
| 100.0% |      80 | `_pthread_mutex_firstfit_lock_slow` | `libsystem_pthread.dylib` |

##### `__psynch_cvwait` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                  | Location       |
| -----: | ------: | ----------------------- | -------------- |
| 100.0% |      71 | `PlatformMonitor::wait` | `libjvm.dylib` |

##### `inflate_fast` (`libzip.dylib`)

|      % | Samples | Caller                                          | Location       |
| -----: | ------: | ----------------------------------------------- | -------------- |
| 100.0% |      50 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `libzip.dylib` |

##### `tlv_get_addr` (`libdyld.dylib`)

|    % | Samples | Caller                                      | Location       |
| ---: | ------: | ------------------------------------------- | -------------- |
| 8.0% |       2 | `PhaseLive::compute`                        | `libjvm.dylib` |
| 8.0% |       2 | `PhaseLive::add_liveout`                    | `libjvm.dylib` |
| 8.0% |       2 | `PhaseChaitin::gather_lrg_masks`            | `libjvm.dylib` |
| 8.0% |       2 | `GraphBuilder::iterate_bytecodes_for_block` | `libjvm.dylib` |
| 4.0% |       1 | `TypeAryPtr::xmeet_helper`                  | `libjvm.dylib` |

##### `SymbolTable::do_lookup` (`libjvm.dylib`)

|     % | Samples | Caller                                         | Location       |
| ----: | ------: | ---------------------------------------------- | -------------- |
| 57.9% |      11 | `SymbolTable::lookup_only`                     | `libjvm.dylib` |
| 21.1% |       4 | `SymbolTable::new_symbol`                      | `libjvm.dylib` |
| 21.1% |       4 | `ClassFileParser::parse_constant_pool_entries` | `libjvm.dylib` |

##### `PhaseChaitin::Split` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      15 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `InstanceKlass::find_method_index` (`libjvm.dylib`)

|     % | Samples | Caller                                  | Location       |
| ----: | ------: | --------------------------------------- | -------------- |
| 86.7% |      13 | `InstanceKlass::uncached_lookup_method` | `libjvm.dylib` |
|  6.7% |       1 | `InstanceKlass::find_method`            | `libjvm.dylib` |
|  6.7% |       1 | `FindMethodsByErasedSig::visit`         | `libjvm.dylib` |

##### `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      14 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` (`libjvm.dylib`)

|     % | Samples | Caller                                             | Location       |
| ----: | ------: | -------------------------------------------------- | -------------- |
| 84.6% |      11 | `DebugInformationRecorder::describe_scope`         | `libjvm.dylib` |
|  7.7% |       1 | `DebugInformationRecorder::serialize_scope_values` | `libjvm.dylib` |
|  7.7% |       1 | `LIR_Assembler::record_non_safepoint_debug_info`   | `libjvm.dylib` |

##### `fwd_copy_again` (`libjvm.dylib`)

|     % | Samples | Caller                                          | Location       |
| ----: | ------: | ----------------------------------------------- | -------------- |
| 69.2% |       9 | `G1ParScanThreadState::trim_queue_to_threshold` | `libjvm.dylib` |
| 15.4% |       2 | `CodeBuffer::copy_code_to`                      | `libjvm.dylib` |
| 15.4% |       2 | `ciMethod::ensure_method_data`                  | `libjvm.dylib` |

##### `IndexSetIterator::advance_and_next` (`libjvm.dylib`)

|     % | Samples | Caller                             | Location       |
| ----: | ------: | ---------------------------------- | -------------- |
| 16.7% |       2 | `PhaseLive::add_liveout`           | `libjvm.dylib` |
| 16.7% |       2 | `PhaseIFG::SquareUp`               | `libjvm.dylib` |
| 16.7% |       2 | `PhaseChaitin::Simplify`           | `libjvm.dylib` |
| 16.7% |       2 | `PhaseIFG::re_insert`              | `libjvm.dylib` |
| 16.7% |       2 | `PhaseChaitin::build_ifg_physical` | `libjvm.dylib` |

##### `IntervalWalker::walk_to` (`libjvm.dylib`)

|     % | Samples | Caller                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 80.0% |       8 | `IntervalWalker::walk_to`        | `libjvm.dylib` |
| 10.0% |       1 | `LinearScan::allocate_registers` | `libjvm.dylib` |
| 10.0% |       1 | `LinearScan::compute_oop_map`    | `libjvm.dylib` |

##### `PhaseChaitin::gather_lrg_masks` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       9 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `ciObjectFactory::get_metadata` (`libjvm.dylib`)

|     % | Samples | Caller                                             | Location       |
| ----: | ------: | -------------------------------------------------- | -------------- |
| 22.2% |       2 | `ciEnv::get_klass_by_index_impl`                   | `libjvm.dylib` |
| 22.2% |       2 | `ciBytecodeStream::get_method`                     | `libjvm.dylib` |
| 11.1% |       1 | `ciReceiverTypeData::translate_receiver_data_from` | `libjvm.dylib` |
| 11.1% |       1 | `ciObjectFactory::get`                             | `libjvm.dylib` |
| 11.1% |       1 | `ciMethod::resolve_invoke`                         | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |       9 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseAggressiveCoalesce::insert_copies` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       9 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseChaitin::elide_copy` (`libjvm.dylib`)

|     % | Samples | Caller                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 88.9% |       8 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |
| 11.1% |       1 | `PhaseChaitin::Register_Allocate`          | `libjvm.dylib` |

##### `PhaseLive::compute` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       9 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `_platform_memmove` (`libsystem_platform.dylib`)

|     % | Samples | Caller                                    | Location        |
| ----: | ------: | ----------------------------------------- | --------------- |
| 22.2% |       2 | `Node_Array::grow`                        | `libjvm.dylib`  |
| 22.2% |       2 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib` |
| 11.1% |       1 | `ClassFileParser::parse_methods`          | `libjvm.dylib`  |
| 11.1% |       1 | `nmethod::nmethod`                        | `libjvm.dylib`  |
| 11.1% |       1 | `ImmutableOopMapBuilder::build`           | `libjvm.dylib`  |

##### `pthread_jit_write_protect_np` (`libsystem_pthread.dylib`)

|     % | Samples | Caller                                           | Location       |
| ----: | ------: | ------------------------------------------------ | -------------- |
| 33.3% |       3 | `jni_ReleasePrimitiveArrayCritical`              | `libjvm.dylib` |
| 11.1% |       1 | `jni_GetPrimitiveArrayCritical`                  | `libjvm.dylib` |
| 11.1% |       1 | `InterpreterRuntime::resolve_ldc`                | `libjvm.dylib` |
| 11.1% |       1 | `InterpreterRuntime::frequency_counter_overflow` | `libjvm.dylib` |
| 11.1% |       1 | `JVM_IsPrimitiveClass`                           | `libjvm.dylib` |

##### `sys_icache_invalidate` (`libsystem_platform.dylib`)

|     % | Samples | Caller                                         | Location       |
| ----: | ------: | ---------------------------------------------- | -------------- |
| 25.0% |       2 | `ciEnv::register_method`                       | `libjvm.dylib` |
| 25.0% |       2 | `AdapterBlob::create`                          | `libjvm.dylib` |
| 25.0% |       2 | `nmethod::nmethod`                             | `libjvm.dylib` |
| 12.5% |       1 | `CompiledIC::set_to_monomorphic`               | `libjvm.dylib` |
| 12.5% |       1 | `CompiledDirectStaticCall::set_to_interpreted` | `libjvm.dylib` |

##### `SymbolTable::lookup_shared` (`libjvm.dylib`)

|     % | Samples | Caller                                         | Location       |
| ----: | ------: | ---------------------------------------------- | -------------- |
| 75.0% |       6 | `SymbolTable::lookup_only`                     | `libjvm.dylib` |
| 12.5% |       1 | `ClassFileParser::parse_constant_pool_entries` | `libjvm.dylib` |
| 12.5% |       1 | `SymbolTable::new_symbol`                      | `libjvm.dylib` |

##### `Dictionary::find` (`libjvm.dylib`)

|     % | Samples | Caller                                                       | Location       |
| ----: | ------: | ------------------------------------------------------------ | -------------- |
| 71.4% |       5 | `SystemDictionary::resolve_instance_class_or_null`           | `libjvm.dylib` |
| 28.6% |       2 | `SystemDictionary::find_constrained_instance_or_array_klass` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_early` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |       7 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Matcher::xform` (`libjvm.dylib`)

|      % | Samples | Caller           | Location       |
| -----: | ------: | ---------------- | -------------- |
| 100.0% |       7 | `Matcher::match` | `libjvm.dylib` |

##### `Type::cmp` (`libjvm.dylib`)

|      % | Samples | Caller         | Location       |
| -----: | ------: | -------------- | -------------- |
| 100.0% |       7 | `Dict::Insert` | `libjvm.dylib` |

##### `PhaseIdealLoop::Dominators` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |       7 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Node::dominates` (`libjvm.dylib`)

|      % | Samples | Caller                           | Location       |
| -----: | ------: | -------------------------------- | -------------- |
| 100.0% |       7 | `MemNode::all_controls_dominate` | `libjvm.dylib` |

##### `LinearScan::build_intervals` (`libjvm.dylib`)

|      % | Samples | Caller                       | Location       |
| -----: | ------: | ---------------------------- | -------------- |
| 100.0% |       7 | `LinearScan::do_linear_scan` | `libjvm.dylib` |

##### `LinearScan::compute_local_live_sets` (`libjvm.dylib`)

|      % | Samples | Caller                       | Location       |
| -----: | ------: | ---------------------------- | -------------- |
| 100.0% |       7 | `LinearScan::do_linear_scan` | `libjvm.dylib` |

##### `bsearch` (`libsystem_c.dylib`)

|      % | Samples | Caller                           | Location       |
| -----: | ------: | -------------------------------- | -------------- |
| 100.0% |       6 | `encoding_for_logical_immediate` | `libjvm.dylib` |

##### `trampoline_stub_Relocation::get_trampoline_for` (`libjvm.dylib`)

|     % | Samples | Caller                                    | Location       |
| ----: | ------: | ----------------------------------------- | -------------- |
| 83.3% |       5 | `NativeCall::set_destination_mt_safe`     | `libjvm.dylib` |
| 16.7% |       1 | `CompiledIC::internal_set_ic_destination` | `libjvm.dylib` |

##### `_platform_memset` (`libsystem_platform.dylib`)

|     % | Samples | Caller                             | Location       |
| ----: | ------: | ---------------------------------- | -------------- |
| 16.7% |       1 | `ClassVerifier::verify_method`     | `libjvm.dylib` |
| 16.7% |       1 | `MethodData::allocate`             | `libjvm.dylib` |
| 16.7% |       1 | `LinearScan::do_linear_scan`       | `libjvm.dylib` |
| 16.7% |       1 | `Optimizer::eliminate_null_checks` | `libjvm.dylib` |
| 16.7% |       1 | `Compile::identify_useful_nodes`   | `libjvm.dylib` |

##### `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` (`libjvm.dylib`)

|      % | Samples | Caller                                         | Location       |
| -----: | ------: | ---------------------------------------------- | -------------- |
| 100.0% |       6 | `void G1CMTask::process_grey_task_entry<true>` | `libjvm.dylib` |

##### `RelocIterator::set_limits` (`libjvm.dylib`)

|     % | Samples | Caller                                           | Location       |
| ----: | ------: | ------------------------------------------------ | -------------- |
| 33.3% |       2 | `CompiledIC::CompiledIC`                         | `libjvm.dylib` |
| 33.3% |       2 | `NativeMovConstReg::set_data`                    | `libjvm.dylib` |
| 16.7% |       1 | `CompiledMethod::attached_method`                | `libjvm.dylib` |
| 16.7% |       1 | `trampoline_stub_Relocation::get_trampoline_for` | `libjvm.dylib` |

##### `LinearScanWalker::free_collect_inactive_fixed` (`libjvm.dylib`)

|      % | Samples | Caller                             | Location       |
| -----: | ------: | ---------------------------------- | -------------- |
| 100.0% |       6 | `LinearScanWalker::alloc_free_reg` | `libjvm.dylib` |

##### `LinearScanWalker::alloc_free_reg` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |       6 | `LinearScanWalker::activate_current` | `libjvm.dylib` |

##### `I2C/C2I adapters(0xb)` (`<unknown>`)

|     % | Samples | Caller                                                                      | Location                                                                  |
| ----: | ------: | --------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| 16.7% |       1 | `hasField(FieldSet$FieldDescriptorLite)`                                    | `org.jetbrains.kotlin.protobuf.FieldSet`                                  |
| 16.7% |       1 | `parametersCount(TypeConstructorMarker)`                                    | `org.jetbrains.kotlin.fir.types.ConeTypeContext`                          |
| 16.7% |       1 | `processDefaultsAndRunChecks()`                                             | `org.jetbrains.kotlin.fir.resolve.calls.stages.FirCallArgumentsProcessor` |
| 16.7% |       1 | `access$resolvedAnnotationClassIds(FirAnnotationContainer, FirBasedSymbol)` | `org.jetbrains.kotlin.fir.symbols.FirBasedSymbolKt`                       |
| 16.7% |       1 | `getName()`                                                                 | `org.jetbrains.kotlin.fir.symbols.impl.FirVariableSymbol`                 |

##### `Arena::contains` (`libjvm.dylib`)

|     % | Samples | Caller           | Location       |
| ----: | ------: | ---------------- | -------------- |
| 80.0% |       4 | `Matcher::xform` | `libjvm.dylib` |
| 20.0% |       1 | `Matcher::match` | `libjvm.dylib` |

##### `inflate` (`libzip.dylib`)

|      % | Samples | Caller                                          | Location       |
| -----: | ------: | ----------------------------------------------- | -------------- |
| 100.0% |       5 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `libzip.dylib` |

##### `inflate_table` (`libzip.dylib`)

|      % | Samples | Caller    | Location       |
| -----: | ------: | --------- | -------------- |
| 100.0% |       5 | `inflate` | `libzip.dylib` |

##### `checkNotNullParameter(Object, String)` (`kotlin.jvm.internal.Intrinsics`)

|     % | Samples | Caller                                                | Location                                                                                                           |
| ----: | ------: | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| 25.0% |       1 | `isMyTypeVariable(RigidTypeMarker)`                   | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector$TypeCheckerStateForConstraintInjector` |
| 25.0% |       1 | `lazyResolveToPhase(FirBasedSymbol, FirResolvePhase)` | `org.jetbrains.kotlin.fir.symbols.FirLazyDeclarationResolverKt`                                                    |
| 25.0% |       1 | `substitutorByMap(Map, FirSession, boolean)`          | `org.jetbrains.kotlin.fir.resolve.substitution.ConeSubstitutorByMapKt`                                             |
| 25.0% |       1 | `<init>(IrSymbol)`                                    | `org.jetbrains.kotlin.ir.builders.Scope`                                                                           |

##### `equals(Object)` (`java.lang.String`)

|     % | Samples | Caller                                   | Location                                      |
| ----: | ------: | ---------------------------------------- | --------------------------------------------- |
| 33.3% |       1 | `addType(String)`                        | `jdk.internal.org.objectweb.asm.SymbolTable`  |
| 33.3% |       1 | `readMethod(ClassVisitor, Context, int)` | `org.jetbrains.org.objectweb.asm.ClassReader` |
| 33.3% |       1 | `equals(Object)`                         | `org.jetbrains.kotlin.name.Name`              |

##### `sanitizeStackTrace(Throwable)` (`kotlin.jvm.internal.Intrinsics`)

|      % | Samples | Caller                            | Location                         |
| -----: | ------: | --------------------------------- | -------------------------------- |
| 100.0% |       3 | `throwParameterIsNullNPE(String)` | `kotlin.jvm.internal.Intrinsics` |

##### `I2C/C2I adapters(0xbb)` (`<unknown>`)

|     % | Samples | Caller                                                                                     | Location                                                                                                           |
| ----: | ------: | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| 33.3% |       1 | `addConstraint(TypeConstructorMarker, KotlinTypeMarker, ConstraintKind, boolean, boolean)` | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector$TypeCheckerStateForConstraintInjector` |
| 33.3% |       1 | `getBySymbol(FirBasedSymbol)`                                                              | `org.jetbrains.kotlin.fir.resolve.ImplicitValueStorage`                                                            |
| 33.3% |       1 | `addCallOrAssignment(FirStatement)`                                                        | `org.jetbrains.kotlin.fir.analysis.checkers.context.MutableCheckerContext`                                         |

##### `itable stub` (`<unknown>`)

|     % | Samples | Caller                                                              | Location                                                         |
| ----: | ------: | ------------------------------------------------------------------- | ---------------------------------------------------------------- |
| 33.3% |       1 | `toList(Iterable)`                                                  | `kotlin.collections.CollectionsKt___CollectionsKt`               |
| 33.3% |       1 | `lastOrNull(List)`                                                  | `kotlin.collections.CollectionsKt___CollectionsKt`               |
| 33.3% |       1 | `isStubTypeForBuilderInference(TypeSystemContext, RigidTypeMarker)` | `org.jetbrains.kotlin.types.model.TypeSystemContextContextualKt` |

##### `transform(String, MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.transformer.CompositeMethodTransformer`)

|      % | Samples | Caller                               | Location                                                              |
| -----: | ------: | ------------------------------------ | --------------------------------------------------------------------- |
| 100.0% |       2 | `performTransformations(MethodNode)` | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

|      % | Samples | Caller                | Location            |
| -----: | ------: | --------------------- | ------------------- |
| 100.0% |       2 | `put(Object, Object)` | `java.util.HashMap` |

##### `substring(int)` (`java.lang.String`)

|     % | Samples | Caller                 | Location                                                        |
| ----: | ------: | ---------------------- | --------------------------------------------------------------- |
| 50.0% |       1 | `dropMarker(String[])` | `org.jetbrains.kotlin.metadata.jvm.deserialization.BitEncoding` |
| 50.0% |       1 | `getExtension(String)` | `com.intellij.openapi.util.io.FileUtilRt`                       |

##### `isLatin1()` (`java.lang.String`)

|      % | Samples | Caller        | Location           |
| -----: | ------: | ------------- | ------------------ |
| 100.0% |       2 | `charAt(int)` | `java.lang.String` |

##### `add(Object)` (`java.util.ArrayList`)

|     % | Samples | Caller                                                                                     | Location                                                                         |
| ----: | ------: | ------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------- |
| 50.0% |       1 | `convertPropertyDeclaration(LighterASTNode, ClassWrapper)`                                 | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirDeclarationBuilder` |
| 50.0% |       1 | `toIrType(ConeKotlinType, ConversionTypeOrigin, List, boolean, boolean, boolean, boolean)` | `org.jetbrains.kotlin.fir.backend.Fir2IrTypeConverter`                           |

##### `addKey$kotlin_stdlib(Object)` (`kotlin.collections.builders.MapBuilder`)

|      % | Samples | Caller                | Location                                 |
| -----: | ------: | --------------------- | ---------------------------------------- |
| 100.0% |       2 | `put(Object, Object)` | `kotlin.collections.builders.MapBuilder` |

##### `ensureCapacityInternal(int)` (`java.lang.AbstractStringBuilder`)

|      % | Samples | Caller         | Location                          |
| -----: | ------: | -------------- | --------------------------------- |
| 100.0% |       2 | `append(char)` | `java.lang.AbstractStringBuilder` |

##### `accept(ClassVisitor, Attribute[], int)` (`org.jetbrains.org.objectweb.asm.ClassReader`)

|      % | Samples | Caller                      | Location                                      |
| -----: | ------: | --------------------------- | --------------------------------------------- |
| 100.0% |       1 | `accept(ClassVisitor, int)` | `org.jetbrains.org.objectweb.asm.ClassReader` |

##### `loadModuleMapping(ModuleMapping$Companion, byte[], String, DeserializationConfiguration, Function1)` (`org.jetbrains.kotlin.load.kotlin.ModuleMappingUtilKt`)

|      % | Samples | Caller                                                                                                            | Location                                                         |
| -----: | ------: | ----------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| 100.0% |       1 | `tryLoadModuleMapping(Function0, String, String, JvmCompilerDeserializationConfiguration, CompilerConfiguration)` | `org.jetbrains.kotlin.cli.jvm.compiler.JvmPackagePartProviderKt` |

##### `isInitialized()` (`org.jetbrains.kotlin.metadata.ProtoBuf$ValueParameter`)

|      % | Samples | Caller            | Location                                          |
| -----: | ------: | ----------------- | ------------------------------------------------- |
| 100.0% |       1 | `isInitialized()` | `org.jetbrains.kotlin.metadata.ProtoBuf$Function` |

##### `add(int, int)` (`it.unimi.dsi.fastutil.ints.IntArrayList`)

|      % | Samples | Caller                                                                        | Location                                  |
| -----: | ------: | ----------------------------------------------------------------------------- | ----------------------------------------- |
| 100.0% |       1 | `addBefore(PsiBuilderImpl$ProductionMarker, PsiBuilderImpl$ProductionMarker)` | `com.intellij.lang.impl.MarkerProduction` |

##### `advance()` (`org.jetbrains.kotlin.lexer._JetLexer`)

|      % | Samples | Caller          | Location                         |
| -----: | ------: | --------------- | -------------------------------- |
| 100.0% |       1 | `locateToken()` | `com.intellij.lexer.FlexAdapter` |

##### `insertLeaf(IElementType, PsiBuilderImpl, int, int, boolean, PsiBuilderImpl$StartMarker)` (`com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure`)

|      % | Samples | Caller                                                               | Location                                                |
| -----: | ------: | -------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |       1 | `insertLeaves(int, int, PsiBuilderImpl, PsiBuilderImpl$StartMarker)` | `com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure` |

##### `eof()` (`org.jetbrains.kotlin.parsing.AbstractKotlinParsing`)

|      % | Samples | Caller  | Location                                             |
| -----: | ------: | ------- | ---------------------------------------------------- |
| 100.0% |       1 | `eol()` | `org.jetbrains.kotlin.parsing.AbstractKotlinParsing` |

##### `<init>()` (`org.jetbrains.kotlin.fir.expressions.builder.FirReturnExpressionBuilder`)

|      % | Samples | Caller                                                      | Location                                                 |
| -----: | ------: | ----------------------------------------------------------- | -------------------------------------------------------- |
| 100.0% |       1 | `toReturn(FirExpression, KtSourceElement, String, boolean)` | `org.jetbrains.kotlin.fir.builder.AbstractRawFirBuilder` |

##### `balanceWhiteSpaces()` (`com.intellij.lang.impl.PsiBuilderImpl`)

|      % | Samples | Caller               | Location                                |
| -----: | ------: | -------------------- | --------------------------------------- |
| 100.0% |       1 | `prepareLightTree()` | `com.intellij.lang.impl.PsiBuilderImpl` |

##### `<init>(byte[], int, boolean)` (`org.jetbrains.org.objectweb.asm.ClassReader`)

|      % | Samples | Caller                     | Location                                      |
| -----: | ------: | -------------------------- | --------------------------------------------- |
| 100.0% |       1 | `<init>(byte[], int, int)` | `org.jetbrains.org.objectweb.asm.ClassReader` |

##### `resolveUserType(FirUserTypeRef, FirTypeCandidateCollector$TypeResolutionResult, boolean, FirDeclaration, boolean)` (`org.jetbrains.kotlin.fir.resolve.providers.impl.FirTypeResolverImpl`)

|      % | Samples | Caller                                                                                                        | Location                                                              |
| -----: | ------: | ------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| 100.0% |       1 | `resolveType(FirTypeRef, TypeResolutionConfiguration, boolean, boolean, boolean, SupertypeSupplier, boolean)` | `org.jetbrains.kotlin.fir.resolve.providers.impl.FirTypeResolverImpl` |

##### `measureSideTime$org_jetbrains_kotlin_compiler_common(PhaseSideType, Function0)` (`org.jetbrains.kotlin.util.PerformanceManager`)

|      % | Samples | Caller                                                             | Location                                         |
| -----: | ------: | ------------------------------------------------------------------ | ------------------------------------------------ |
| 100.0% |       1 | `tryMeasureSideTime(PerformanceManager, PhaseSideType, Function0)` | `org.jetbrains.kotlin.util.PerformanceManagerKt` |

##### `invoke(Object, Object, Object)` (`org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope$processPropertiesByName$1`)

|      % | Samples | Caller                                             | Location                                                            |
| -----: | ------: | -------------------------------------------------- | ------------------------------------------------------------------- |
| 100.0% |       1 | `processSymbolsByName(Name, Function3, Function1)` | `org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope` |

##### `<init>(SmallSortedMap, Comparable, Object)` (`org.jetbrains.kotlin.protobuf.SmallSortedMap$Entry`)

|      % | Samples | Caller                    | Location                                       |
| -----: | ------: | ------------------------- | ---------------------------------------------- |
| 100.0% |       1 | `put(Comparable, Object)` | `org.jetbrains.kotlin.protobuf.SmallSortedMap` |

##### `extractDeprecationAnnotationInfoPerUseSite(List, boolean, FirSession, List)` (`org.jetbrains.kotlin.fir.declarations.DeprecationUtilsKt`)

|      % | Samples | Caller                                                                    | Location                                                   |
| -----: | ------: | ------------------------------------------------------------------------- | ---------------------------------------------------------- |
| 100.0% |       1 | `getDeprecationsProviderFromAnnotations(List, FirSession, boolean, List)` | `org.jetbrains.kotlin.fir.declarations.DeprecationUtilsKt` |

##### `accept(FirVisitor, Object)` (`org.jetbrains.kotlin.fir.declarations.FirFile`)

|      % | Samples | Caller                     | Location                                                                                |
| -----: | ------: | -------------------------- | --------------------------------------------------------------------------------------- |
| 100.0% |       1 | `checkElement(FirElement)` | `org.jetbrains.kotlin.fir.analysis.collectors.CheckerRunningDiagnosticCollectorVisitor` |

##### `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.types.FirTypeProjectionWithVariance`)

|      % | Samples | Caller                                           | Location                                                 |
| -----: | ------: | ------------------------------------------------ | -------------------------------------------------------- |
| 100.0% |       1 | `transformInplace(List, FirTransformer, Object)` | `org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt` |

##### `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.types.FirResolvedTypeRef`)

|      % | Samples | Caller                                           | Location                                                 |
| -----: | ------: | ------------------------------------------------ | -------------------------------------------------------- |
| 100.0% |       1 | `transformInplace(List, FirTransformer, Object)` | `org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt` |

##### `lowerBoundIfFlexible(ConeKotlinType)` (`org.jetbrains.kotlin.fir.types.ConeTypeUtilsKt`)

|      % | Samples | Caller                                             | Location                                           |
| -----: | ------: | -------------------------------------------------- | -------------------------------------------------- |
| 100.0% |       1 | `toRegularClassSymbol(ConeKotlinType, FirSession)` | `org.jetbrains.kotlin.fir.resolve.ToSymbolUtilsKt` |

##### `read(byte[], int, int)` (`java.util.zip.ZipInputStream`)

|      % | Samples | Caller         | Location                    |
| -----: | ------: | -------------- | --------------------------- |
| 100.0% |       1 | `read(byte[])` | `java.io.FilterInputStream` |

##### `resize()` (`java.util.HashMap`)

|      % | Samples | Caller                                          | Location            |
| -----: | ------: | ----------------------------------------------- | ------------------- |
| 100.0% |       1 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `hash(int, String, String)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

|      % | Samples | Caller                                   | Location                                     |
| -----: | ------: | ---------------------------------------- | -------------------------------------------- |
| 100.0% |       1 | `addConstantNameAndType(String, String)` | `jdk.internal.org.objectweb.asm.SymbolTable` |

##### `put(Comparable, Object)` (`kotlin.reflect.jvm.internal.impl.protobuf.SmallSortedMap`)

|      % | Samples | Caller                                                   | Location                                             |
| -----: | ------: | -------------------------------------------------------- | ---------------------------------------------------- |
| 100.0% |       1 | `addRepeatedField(FieldSet$FieldDescriptorLite, Object)` | `kotlin.reflect.jvm.internal.impl.protobuf.FieldSet` |

##### `substring(int, int)` (`java.lang.String`)

|      % | Samples | Caller           | Location           |
| -----: | ------: | ---------------- | ------------------ |
| 100.0% |       1 | `substring(int)` | `java.lang.String` |

##### `protectionDomain(Class)` (`java.lang.System$2`)

|      % | Samples | Caller                          | Location                                |
| -----: | ------: | ------------------------------- | --------------------------------------- |
| 100.0% |       1 | `lookupClassProtectionDomain()` | `java.lang.invoke.MethodHandles$Lookup` |

##### `invoke(Class, MethodHandle, String, Object, Object, Class)` (`java.lang.invoke.BootstrapMethodInvoker`)

|      % | Samples | Caller                                                      | Location                    |
| -----: | ------: | ----------------------------------------------------------- | --------------------------- |
| 100.0% |       1 | `makeSite(MethodHandle, String, MethodType, Object, Class)` | `java.lang.invoke.CallSite` |

##### `invokeStatic(Object, Object, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000008801230000`)

|      % | Samples | Caller                                                                           | Location                           |
| -----: | ------: | -------------------------------------------------------------------------------- | ---------------------------------- |
| 100.0% |       1 | `invokeExact_MT(Object, Object, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `<init>(URL, String, URLStreamHandler)` (`java.net.URL`)

|      % | Samples | Caller                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |       1 | `<init>(URL, String)` | `java.net.URL` |

##### `rangeCheck(int, int, int)` (`java.util.Arrays`)

|      % | Samples | Caller                                         | Location           |
| -----: | ------: | ---------------------------------------------- | ------------------ |
| 100.0% |       1 | `mismatch(byte[], int, int, byte[], int, int)` | `java.util.Arrays` |

##### `<init>(String)` (`java.util.jar.JarEntry`)

|      % | Samples | Caller                    | Location                             |
| -----: | ------: | ------------------------- | ------------------------------------ |
| 100.0% |       1 | `<init>(JarFile, String)` | `java.util.jar.JarFile$JarFileEntry` |

##### `zero_blocks` (`<unknown>`)

|      % | Samples | Caller        | Location                        |
| -----: | ------: | ------------- | ------------------------------- |
| 100.0% |       1 | `<init>(int)` | `java.io.ByteArrayOutputStream` |

##### `I2C/C2I adapters(0xbab)` (`<unknown>`)

|      % | Samples | Caller                                                                                   | Location                                |
| -----: | ------: | ---------------------------------------------------------------------------------------- | --------------------------------------- |
| 100.0% |       1 | `getDirectMethodCommon(byte, Class, MemberName, boolean, boolean, MethodHandles$Lookup)` | `java.lang.invoke.MethodHandles$Lookup` |

##### `I2C/C2I adapters(0xba)` (`<unknown>`)

|      % | Samples | Caller               | Location                                           |
| -----: | ------: | -------------------- | -------------------------------------------------- |
| 100.0% |       1 | `singleOrNull(List)` | `kotlin.collections.CollectionsKt___CollectionsKt` |

##### `I2C/C2I adapters(0xbbbbabaabab)` (`<unknown>`)

|      % | Samples | Caller                                                                          | Location                                                                                      |
| -----: | ------: | ------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `simplifyLowerConstraint(KotlinTypeMarker, KotlinTypeMarker, boolean, boolean)` | `org.jetbrains.kotlin.resolve.calls.inference.components.TypeCheckerStateForConstraintSystem` |

##### `I2C/C2I adapters(0xbbbbb)` (`<unknown>`)

|      % | Samples | Caller                                                                             | Location                                                   |
| -----: | ------: | ---------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| 100.0% |       1 | `unsubstitutedScope(FirClass, FirSession, ScopeSession, boolean, FirResolvePhase)` | `org.jetbrains.kotlin.fir.scopes.FirKotlinScopeProviderKt` |

### Total samples

Functions with the most samples collected within the function and its callees.

|     % | Samples | Function                                                                                           | Location                                                |
| ----: | ------: | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 67.6% |   1,018 | `Thread::call_run`                                                                                 | `libjvm.dylib`                                          |
| 67.6% |   1,018 | `thread_native_entry`                                                                              | `libjvm.dylib`                                          |
| 67.6% |   1,018 | `_pthread_start`                                                                                   | `libsystem_pthread.dylib`                               |
| 67.6% |   1,018 | `thread_start`                                                                                     | `libsystem_pthread.dylib`                               |
| 63.5% |     957 | `JavaThread::thread_main_inner`                                                                    | `libjvm.dylib`                                          |
| 63.5% |     956 | `CompileBroker::compiler_thread_loop`                                                              | `libjvm.dylib`                                          |
| 58.1% |     875 | `CompileBroker::invoke_compiler_on_method`                                                         | `libjvm.dylib`                                          |
| 39.5% |     595 | `C2Compiler::compile_method`                                                                       | `libjvm.dylib`                                          |
| 39.3% |     592 | `Compile::Compile`                                                                                 | `libjvm.dylib`                                          |
| 31.7% |     478 | `run(String[])`                                                                                    | `org.jetbrains.kotlin.preloading.Preloader`             |
| 31.7% |     478 | `main(String[])`                                                                                   | `org.jetbrains.kotlin.preloading.Preloader`             |
| 26.6% |     401 | `main(String[])`                                                                                   | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`  |
| 26.6% |     401 | `main(String[])`                                                                                   | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 26.6% |     401 | `invokeStatic(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$DMH.0x0000008801008000`    |
| 26.6% |     401 | `invoke(Object, Object, Object)`                                                                   | `java.lang.invoke.LambdaForm$MH.0x0000008801009400`     |
| 26.6% |     401 | `invokeExact_MT(Object, Object, Object, Object)`                                                   | `java.lang.invoke.Invokers$Holder`                      |
| 26.6% |     401 | `invokeImpl(Object, Object[])`                                                                     | `jdk.internal.reflect.DirectMethodHandleAccessor`       |
| 26.6% |     401 | `invoke(Object, Object[])`                                                                         | `jdk.internal.reflect.DirectMethodHandleAccessor`       |
| 26.6% |     401 | `invoke(Object, Object[])`                                                                         | `java.lang.reflect.Method`                              |
| 26.6% |     400 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Native

|     % | Samples | Function                                        | Location                  |
| ----: | ------: | ----------------------------------------------- | ------------------------- |
| 67.6% |   1,018 | `Thread::call_run`                              | `libjvm.dylib`            |
| 67.6% |   1,018 | `thread_native_entry`                           | `libjvm.dylib`            |
| 67.6% |   1,018 | `_pthread_start`                                | `libsystem_pthread.dylib` |
| 67.6% |   1,018 | `thread_start`                                  | `libsystem_pthread.dylib` |
| 63.5% |     957 | `JavaThread::thread_main_inner`                 | `libjvm.dylib`            |
| 17.9% |     269 | `Compiler::compile_method`                      | `libjvm.dylib`            |
|  6.4% |      97 | `IRScope::IRScope`                              | `libjvm.dylib`            |
|  6.4% |      97 | `IR::IR`                                        | `libjvm.dylib`            |
|  5.5% |      83 | `PlatformMonitor::wait`                         | `libjvm.dylib`            |
|  5.3% |      80 | `Monitor::wait`                                 | `libjvm.dylib`            |
|  5.3% |      80 | `__psynch_mutexwait`                            | `libsystem_kernel.dylib`  |
|  5.3% |      80 | `_pthread_mutex_firstfit_lock_slow`             | `libsystem_pthread.dylib` |
|  4.7% |      71 | `__psynch_cvwait`                               | `libsystem_kernel.dylib`  |
|  4.4% |      67 | `Parse::do_all_blocks`                          | `libjvm.dylib`            |
|  4.4% |      67 | `Parse::Parse`                                  | `libjvm.dylib`            |
|  4.4% |      67 | `ParseGenerator::generate`                      | `libjvm.dylib`            |
|  4.4% |      66 | `Parse::do_one_block`                           | `libjvm.dylib`            |
|  4.3% |      65 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `libzip.dylib`            |
|  4.2% |      64 | `Java_java_lang_ClassLoader_defineClass1`       | `libjava.dylib`           |
|  4.2% |      63 | `Parse::do_call`                                | `libjvm.dylib`            |

##### Compiler

|     % | Samples | Function                                    | Location       |
| ----: | ------: | ------------------------------------------- | -------------- |
| 63.5% |     956 | `CompileBroker::compiler_thread_loop`       | `libjvm.dylib` |
| 58.1% |     875 | `CompileBroker::invoke_compiler_on_method`  | `libjvm.dylib` |
| 39.5% |     595 | `C2Compiler::compile_method`                | `libjvm.dylib` |
| 39.3% |     592 | `Compile::Compile`                          | `libjvm.dylib` |
| 20.6% |     310 | `Compile::Code_Gen`                         | `libjvm.dylib` |
| 17.9% |     269 | `Compilation::Compilation`                  | `libjvm.dylib` |
| 17.8% |     268 | `Compilation::compile_method`               | `libjvm.dylib` |
| 16.4% |     247 | `Compilation::compile_java_method`          | `libjvm.dylib` |
| 13.4% |     202 | `Compile::Optimize`                         | `libjvm.dylib` |
| 10.9% |     164 | `PhaseChaitin::Register_Allocate`           | `libjvm.dylib` |
|  8.1% |     122 | `Compilation::build_hir`                    | `libjvm.dylib` |
|  6.8% |     103 | `PhaseIdealLoop::optimize`                  | `libjvm.dylib` |
|  6.4% |      97 | `GraphBuilder::GraphBuilder`                | `libjvm.dylib` |
|  6.0% |      91 | `Compilation::emit_lir`                     | `libjvm.dylib` |
|  5.8% |      88 | `GraphBuilder::iterate_all_blocks`          | `libjvm.dylib` |
|  5.7% |      86 | `GraphBuilder::iterate_bytecodes_for_block` | `libjvm.dylib` |
|  5.5% |      83 | `PhaseIdealLoop::build_and_optimize`        | `libjvm.dylib` |
|  5.5% |      83 | `PhaseIdealLoop::PhaseIdealLoop`            | `libjvm.dylib` |
|  5.4% |      81 | `CompileQueue::get`                         | `libjvm.dylib` |
|  5.2% |      78 | `GraphBuilder::invoke`                      | `libjvm.dylib` |

##### Ours

|     % | Samples | Function                                                                                                                                      | Location                                                |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 31.7% |     478 | `run(String[])`                                                                                                                               | `org.jetbrains.kotlin.preloading.Preloader`             |
| 31.7% |     478 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.preloading.Preloader`             |
| 26.6% |     401 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`  |
| 26.6% |     401 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 26.6% |     400 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)`                                            | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 26.6% |     400 | `doMain(CLICompiler, String[])`                                                                                                               | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 26.5% |     399 | `exec(PrintStream, Services, MessageRenderer, String[])`                                                                                      | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 26.5% |     399 | `exec(PrintStream, MessageRenderer, String[])`                                                                                                | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 26.5% |     399 | `doMainNoExit(CLICompiler, String[], MessageRenderer)`                                                                                        | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 26.2% |     394 | `exec(MessageCollector, Services, CommonCompilerArguments)`                                                                                   | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 25.5% |     384 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)`                                                                         | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 25.5% |     384 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)`                                                                        | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 25.5% |     384 | `execImpl(MessageCollector, Services, CommonCompilerArguments)`                                                                               | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 25.4% |     383 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)`                                           | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 25.4% |     383 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 25.4% |     383 | `execute(CommonCompilerArguments, Services, MessageCollector)`                                                                                | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 25.4% |     382 | `runPhasedPipeline(ArgumentsPipelineArtifact)`                                                                                                | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 25.2% |     380 | `phaseBody(PipelineContext, PipelineArtifact)`                                                                                                | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`       |
| 25.2% |     380 | `phaseBody(LoggingContext, Object)`                                                                                                           | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`       |
| 25.2% |     380 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)`                                                                                    | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase` |

##### Standard library

|     % | Samples | Function                                                                        | Location                                              |
| ----: | ------: | ------------------------------------------------------------------------------- | ----------------------------------------------------- |
| 26.6% |     401 | `invokeStatic(Object, Object)`                                                  | `java.lang.invoke.LambdaForm$DMH.0x0000008801008000`  |
| 26.6% |     401 | `invoke(Object, Object, Object)`                                                | `java.lang.invoke.LambdaForm$MH.0x0000008801009400`   |
| 26.6% |     401 | `invokeExact_MT(Object, Object, Object, Object)`                                | `java.lang.invoke.Invokers$Holder`                    |
| 26.6% |     401 | `invokeImpl(Object, Object[])`                                                  | `jdk.internal.reflect.DirectMethodHandleAccessor`     |
| 26.6% |     401 | `invoke(Object, Object[])`                                                      | `jdk.internal.reflect.DirectMethodHandleAccessor`     |
| 26.6% |     401 | `invoke(Object, Object[])`                                                      | `java.lang.reflect.Method`                            |
|  4.6% |      70 | `loadClass(String, boolean)`                                                    | `java.lang.ClassLoader`                               |
|  4.6% |      69 | `read(byte[], int, int)`                                                        | `java.util.zip.ZipInputStream`                        |
|  4.6% |      69 | `read(byte[])`                                                                  | `java.io.FilterInputStream`                           |
|  4.3% |      65 | `read(byte[], int, int)`                                                        | `java.util.zip.InflaterInputStream`                   |
|  4.3% |      65 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)`                   | `java.util.zip.Inflater`                              |
|  4.3% |      65 | `inflate(byte[], int, int)`                                                     | `java.util.zip.Inflater`                              |
|  4.3% |      65 | `defineClass(String, byte[], int, int, ProtectionDomain)`                       | `java.lang.ClassLoader`                               |
|  4.3% |      65 | `defineClass(String, byte[], int, int)`                                         | `java.lang.ClassLoader`                               |
|  4.2% |      64 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`                               |
|  4.0% |      60 | `resumeWith(Object)`                                                            | `kotlin.coroutines.jvm.internal.BaseContinuationImpl` |
|  1.1% |      16 | `getValue()`                                                                    | `kotlin.SynchronizedLazyImpl`                         |
|  1.1% |      16 | `getValue()`                                                                    | `kotlin.UnsafeLazyImpl`                               |
|  1.0% |      15 | `getValue()`                                                                    | `kotlin.SafePublicationLazyImpl`                      |
|  1.0% |      15 | `invoke(Class, MethodHandle, String, Object, Object, Class)`                    | `java.lang.invoke.BootstrapMethodInvoker`             |

##### JIT

|    % | Samples | Function                          | Location    |
| ---: | ------: | --------------------------------- | ----------- |
| 0.4% |       6 | `I2C/C2I adapters(0xb)`           | `<unknown>` |
| 0.2% |       3 | `I2C/C2I adapters(0xbb)`          | `<unknown>` |
| 0.2% |       3 | `itable stub`                     | `<unknown>` |
| 0.1% |       1 | `zero_blocks`                     | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xbab)`         | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xba)`          | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xbbbbabaabab)` | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xbbbbb)`       | `<unknown>` |

#### Callers

Callers with the largest contribution to each function's total samples. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `Thread::call_run` (`libjvm.dylib`)

|      % | Samples | Caller                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |   1,018 | `thread_native_entry` | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % | Samples | Caller           | Location                  |
| -----: | ------: | ---------------- | ------------------------- |
| 100.0% |   1,018 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `_pthread_start` (`libsystem_pthread.dylib`)

|      % | Samples | Caller         | Location                  |
| -----: | ------: | -------------- | ------------------------- |
| 100.0% |   1,018 | `thread_start` | `libsystem_pthread.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |     957 | `Thread::call_run` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|      % | Samples | Caller                          | Location       |
| -----: | ------: | ------------------------------- | -------------- |
| 100.0% |     956 | `JavaThread::thread_main_inner` | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|      % | Samples | Caller                                | Location       |
| -----: | ------: | ------------------------------------- | -------------- |
| 100.0% |     875 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |     595 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|      % | Samples | Caller                       | Location       |
| -----: | ------: | ---------------------------- | -------------- |
| 100.0% |     592 | `C2Compiler::compile_method` | `libjvm.dylib` |

##### `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

|      % | Samples | Caller           | Location                                    |
| -----: | ------: | ---------------- | ------------------------------------------- |
| 100.0% |     478 | `main(String[])` | `org.jetbrains.kotlin.preloading.Preloader` |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`)

|      % | Samples | Caller           | Location                                     |
| -----: | ------: | ---------------- | -------------------------------------------- |
| 100.0% |     401 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % | Samples | Caller                         | Location                                             |
| -----: | ------: | ------------------------------ | ---------------------------------------------------- |
| 100.0% |     401 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000008801008000` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000008801008000`)

|      % | Samples | Caller                           | Location                                            |
| -----: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% |     401 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000008801009400` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000008801009400`)

|      % | Samples | Caller                                           | Location                           |
| -----: | ------: | ------------------------------------------------ | ---------------------------------- |
| 100.0% |     401 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Caller                         | Location                                          |
| -----: | ------: | ------------------------------ | ------------------------------------------------- |
| 100.0% |     401 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % | Samples | Caller                     | Location                                          |
| -----: | ------: | -------------------------- | ------------------------------------------------- |
| 100.0% |     401 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % | Samples | Caller                     | Location                   |
| -----: | ------: | -------------------------- | -------------------------- |
| 100.0% |     401 | `invoke(Object, Object[])` | `java.lang.reflect.Method` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

|      % | Samples | Caller                                                                                          | Location                                                                                  |
| -----: | ------: | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| 100.0% |     401 | `run(String[])`                                                                                 | `org.jetbrains.kotlin.preloading.Preloader`                                               |
|   0.2% |       1 | `parsePreprocessedCommandLineArguments(List, CommonToolArguments, Lazy, boolean)`               | `org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt`                   |
|   0.2% |       1 | `processAnnotationArguments(KotlinJvmBinaryClass$AnnotationArgumentVisitor, Annotation, Class)` | `kotlin.reflect.jvm.internal.impl.descriptors.runtime.components.ReflectClassStructure`   |
|   0.2% |       1 | `loadGetRecordComponents(Class)`                                                                | `kotlin.reflect.jvm.internal.impl.descriptors.runtime.structure.Java16SealedRecordLoader` |
|   0.2% |       1 | `getEnumConstantsShared()`                                                                      | `java.lang.Class`                                                                         |

##### `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % | Samples | Caller                          | Location                                                |
| -----: | ------: | ------------------------------- | ------------------------------------------------------- |
| 100.0% |     400 | `doMain(CLICompiler, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `doMain(CLICompiler, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % | Samples | Caller           | Location                                               |
| -----: | ------: | ---------------- | ------------------------------------------------------ |
| 100.0% |     400 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion` |

##### `exec(PrintStream, Services, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Caller                                         | Location                                      |
| -----: | ------: | ---------------------------------------------- | --------------------------------------------- |
| 100.0% |     399 | `exec(PrintStream, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `exec(PrintStream, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Caller                                                 | Location                                                |
| -----: | ------: | ------------------------------------------------------ | ------------------------------------------------------- |
| 100.0% |     399 | `doMainNoExit(CLICompiler, String[], MessageRenderer)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % | Samples | Caller                                                                                             | Location                                                |
| -----: | ------: | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |     399 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `exec(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Caller                                                   | Location                                      |
| -----: | ------: | -------------------------------------------------------- | --------------------------------------------- |
| 100.0% |     394 | `exec(PrintStream, Services, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % | Samples | Caller                                                                 | Location                                     |
| -----: | ------: | ---------------------------------------------------------------------- | -------------------------------------------- |
| 100.0% |     384 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % | Samples | Caller                                                          | Location                                      |
| -----: | ------: | --------------------------------------------------------------- | --------------------------------------------- |
| 100.0% |     384 | `execImpl(MessageCollector, Services, CommonCompilerArguments)` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Caller                                                      | Location                                      |
| -----: | ------: | ----------------------------------------------------------- | --------------------------------------------- |
| 100.0% |     384 | `exec(MessageCollector, Services, CommonCompilerArguments)` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Caller                                                                                                                                        | Location                                                |
| -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |     383 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Caller                                                         | Location                                                |
| -----: | ------: | -------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |     383 | `execute(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `execute(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Caller                                                                | Location                                     |
| -----: | ------: | --------------------------------------------------------------------- | -------------------------------------------- |
| 100.0% |     383 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Caller                                                                                              | Location                                                |
| -----: | ------: | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |     382 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

|      % | Samples | Caller                              | Location                                          |
| -----: | ------: | ----------------------------------- | ------------------------------------------------- |
| 100.0% |     380 | `phaseBody(LoggingContext, Object)` | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase` |

##### `phaseBody(LoggingContext, Object)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

|      % | Samples | Caller                                                     | Location                                                |
| -----: | ------: | ---------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |     380 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase` |

##### `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`)

|      % | Samples | Caller                                                                | Location                                                          |
| -----: | ------: | --------------------------------------------------------------------- | ----------------------------------------------------------------- |
| 100.0% |     380 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)`            | `org.jetbrains.kotlin.backend.common.phaser.CompositePhase`       |
|   5.5% |      21 | `invoke(PhaseConfig, PhaserState, LoweringContext, IrModuleFragment)` | `org.jetbrains.kotlin.backend.common.phaser.PerformByIrFilePhase` |
|   1.6% |       6 | `runPhase(NamedCompilerPhase, Object, boolean)`                       | `org.jetbrains.kotlin.backend.common.phaser.PhaseEngine`          |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |     310 | `Compile::Compile` | `libjvm.dylib` |

##### `Compiler::compile_method` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |     269 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `Compilation::Compilation` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |     269 | `Compiler::compile_method` | `libjvm.dylib` |

##### `Compilation::compile_method` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |     268 | `Compilation::Compilation` | `libjvm.dylib` |

##### `Compilation::compile_java_method` (`libjvm.dylib`)

|      % | Samples | Caller                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |     247 | `Compilation::compile_method` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |     202 | `Compile::Compile` | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|      % | Samples | Caller              | Location       |
| -----: | ------: | ------------------- | -------------- |
| 100.0% |     164 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `Compilation::build_hir` (`libjvm.dylib`)

|      % | Samples | Caller                             | Location       |
| -----: | ------: | ---------------------------------- | -------------- |
| 100.0% |     122 | `Compilation::compile_java_method` | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % | Samples | Caller                    | Location       |
| ----: | ------: | ------------------------- | -------------- |
| 59.2% |      61 | `Compile::Optimize`       | `libjvm.dylib` |
| 40.8% |      42 | `Compile::optimize_loops` | `libjvm.dylib` |

##### `IRScope::IRScope` (`libjvm.dylib`)

|      % | Samples | Caller   | Location       |
| -----: | ------: | -------- | -------------- |
| 100.0% |      97 | `IR::IR` | `libjvm.dylib` |

##### `IR::IR` (`libjvm.dylib`)

|      % | Samples | Caller                   | Location       |
| -----: | ------: | ------------------------ | -------------- |
| 100.0% |      97 | `Compilation::build_hir` | `libjvm.dylib` |

##### `GraphBuilder::GraphBuilder` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |      97 | `IRScope::IRScope` | `libjvm.dylib` |

##### `Compilation::emit_lir` (`libjvm.dylib`)

|      % | Samples | Caller                             | Location       |
| -----: | ------: | ---------------------------------- | -------------- |
| 100.0% |      91 | `Compilation::compile_java_method` | `libjvm.dylib` |

##### `GraphBuilder::iterate_all_blocks` (`libjvm.dylib`)

|      % | Samples | Caller                          | Location       |
| -----: | ------: | ------------------------------- | -------------- |
| 100.0% |      88 | `GraphBuilder::GraphBuilder`    | `libjvm.dylib` |
|  48.9% |      43 | `GraphBuilder::try_inline_full` | `libjvm.dylib` |

##### `GraphBuilder::iterate_bytecodes_for_block` (`libjvm.dylib`)

|      % | Samples | Caller                             | Location       |
| -----: | ------: | ---------------------------------- | -------------- |
| 100.0% |      86 | `GraphBuilder::iterate_all_blocks` | `libjvm.dylib` |

##### `PlatformMonitor::wait` (`libjvm.dylib`)

|     % | Samples | Caller                                  | Location       |
| ----: | ------: | --------------------------------------- | -------------- |
| 96.4% |      80 | `Monitor::wait`                         | `libjvm.dylib` |
|  3.6% |       3 | `Monitor::wait_without_safepoint_check` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|      % | Samples | Caller                           | Location       |
| -----: | ------: | -------------------------------- | -------------- |
| 100.0% |      83 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |      83 | `PhaseIdealLoop::optimize` | `libjvm.dylib` |

##### `CompileQueue::get` (`libjvm.dylib`)

|      % | Samples | Caller                                | Location       |
| -----: | ------: | ------------------------------------- | -------------- |
| 100.0% |      81 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `Monitor::wait` (`libjvm.dylib`)

|     % | Samples | Caller                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 97.5% |      78 | `CompileQueue::get`             | `libjvm.dylib` |
|  2.5% |       2 | `VMThread::wait_until_executed` | `libjvm.dylib` |

##### `__psynch_mutexwait` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                              | Location                  |
| -----: | ------: | ----------------------------------- | ------------------------- |
| 100.0% |      80 | `_pthread_mutex_firstfit_lock_slow` | `libsystem_pthread.dylib` |

##### `_pthread_mutex_firstfit_lock_slow` (`libsystem_pthread.dylib`)

|     % | Samples | Caller                                | Location                  |
| ----: | ------: | ------------------------------------- | ------------------------- |
| 42.5% |      34 | `ThreadCritical::ThreadCritical`      | `libjvm.dylib`            |
| 32.5% |      26 | `Mutex::lock`                         | `libjvm.dylib`            |
| 13.8% |      11 | `_pthread_cond_wait`                  | `libsystem_pthread.dylib` |
| 11.3% |       9 | `Mutex::lock_without_safepoint_check` | `libjvm.dylib`            |

##### `GraphBuilder::invoke` (`libjvm.dylib`)

|      % | Samples | Caller                                      | Location       |
| -----: | ------: | ------------------------------------------- | -------------- |
| 100.0% |      78 | `GraphBuilder::iterate_bytecodes_for_block` | `libjvm.dylib` |

##### `__psynch_cvwait` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                  | Location       |
| -----: | ------: | ----------------------- | -------------- |
| 100.0% |      71 | `PlatformMonitor::wait` | `libjvm.dylib` |

##### `loadClass(String, boolean)` (`java.lang.ClassLoader`)

|     % | Samples | Caller                       | Location                                                 |
| ----: | ------: | ---------------------------- | -------------------------------------------------------- |
| 97.1% |      68 | `loadClass(String, boolean)` | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |
|  2.9% |       2 | `loadClass(String)`          | `java.lang.ClassLoader`                                  |

##### `read(byte[], int, int)` (`java.util.zip.ZipInputStream`)

|      % | Samples | Caller         | Location                    |
| -----: | ------: | -------------- | --------------------------- |
| 100.0% |      69 | `read(byte[])` | `java.io.FilterInputStream` |

##### `read(byte[])` (`java.io.FilterInputStream`)

|      % | Samples | Caller                                                  | Location                                               |
| -----: | ------: | ------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% |      69 | `loadAllClassesFromJars(Collection, int, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `Parse::do_all_blocks` (`libjvm.dylib`)

|      % | Samples | Caller         | Location       |
| -----: | ------: | -------------- | -------------- |
| 100.0% |      67 | `Parse::Parse` | `libjvm.dylib` |

##### `Parse::Parse` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |      67 | `ParseGenerator::generate` | `libjvm.dylib` |

##### `ParseGenerator::generate` (`libjvm.dylib`)

|     % | Samples | Caller                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 98.5% |      66 | `Compile::Compile`                     | `libjvm.dylib` |
| 61.2% |      41 | `Parse::do_call`                       | `libjvm.dylib` |
| 52.2% |      35 | `PredictedCallGenerator::generate`     | `libjvm.dylib` |
|  1.5% |       1 | `CallGenerator::do_late_inline_helper` | `libjvm.dylib` |

##### `Parse::do_one_block` (`libjvm.dylib`)

|      % | Samples | Caller                 | Location       |
| -----: | ------: | ---------------------- | -------------- |
| 100.0% |      66 | `Parse::do_all_blocks` | `libjvm.dylib` |

##### `Java_java_util_zip_Inflater_inflateBytesBytes` (`libzip.dylib`)

|      % | Samples | Caller                                                        | Location                 |
| -----: | ------: | ------------------------------------------------------------- | ------------------------ |
| 100.0% |      65 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` | `java.util.zip.Inflater` |

##### `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`)

|      % | Samples | Caller                   | Location                       |
| -----: | ------: | ------------------------ | ------------------------------ |
| 100.0% |      65 | `read(byte[], int, int)` | `java.util.zip.ZipInputStream` |

##### `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`)

|      % | Samples | Caller                      | Location                 |
| -----: | ------: | --------------------------- | ------------------------ |
| 100.0% |      65 | `inflate(byte[], int, int)` | `java.util.zip.Inflater` |

##### `inflate(byte[], int, int)` (`java.util.zip.Inflater`)

|     % | Samples | Caller                   | Location                            |
| ----: | ------: | ------------------------ | ----------------------------------- |
| 96.9% |      63 | `read(byte[], int, int)` | `java.util.zip.InflaterInputStream` |
|  3.1% |       2 | `inflate(byte[])`        | `java.util.zip.Inflater`            |

##### `defineClass(String, byte[], int, int, ProtectionDomain)` (`java.lang.ClassLoader`)

|      % | Samples | Caller                                  | Location                |
| -----: | ------: | --------------------------------------- | ----------------------- |
| 100.0% |      65 | `defineClass(String, byte[], int, int)` | `java.lang.ClassLoader` |

##### `defineClass(String, byte[], int, int)` (`java.lang.ClassLoader`)

|      % | Samples | Caller              | Location                                                 |
| -----: | ------: | ------------------- | -------------------------------------------------------- |
| 100.0% |      65 | `findClass(String)` | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |

##### `Java_java_lang_ClassLoader_defineClass1` (`libjava.dylib`)

|      % | Samples | Caller                                                                          | Location                |
| -----: | ------: | ------------------------------------------------------------------------------- | ----------------------- |
| 100.0% |      64 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader` |

##### `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` (`java.lang.ClassLoader`)

|      % | Samples | Caller                                                    | Location                |
| -----: | ------: | --------------------------------------------------------- | ----------------------- |
| 100.0% |      64 | `defineClass(String, byte[], int, int, ProtectionDomain)` | `java.lang.ClassLoader` |

##### `Parse::do_call` (`libjvm.dylib`)

|      % | Samples | Caller                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |      63 | `Parse::do_one_block` | `libjvm.dylib` |

##### `resumeWith(Object)` (`kotlin.coroutines.jvm.internal.BaseContinuationImpl`)

|     % | Samples | Caller                                                             | Location                                                              |
| ----: | ------: | ------------------------------------------------------------------ | --------------------------------------------------------------------- |
| 95.0% |      57 | `resumeTask(TowerResolveManager$SuspendedResolverTask)`            | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager`    |
| 53.3% |      32 | `processCandidate(Candidate, ResolutionContext, boolean, boolean)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner` |
|  1.7% |       1 | `run()`                                                            | `kotlinx.coroutines.DispatchedTask`                                   |

##### `getValue()` (`kotlin.SynchronizedLazyImpl`)

|     % | Samples | Caller                           | Location                                                     |
| ----: | ------: | -------------------------------- | ------------------------------------------------------------ |
| 25.0% |       4 | `getSuperTypeRefs()`             | `org.jetbrains.kotlin.fir.java.declarations.FirJavaClass`    |
| 18.8% |       3 | `getInstance()`                  | `org.jetbrains.kotlin.builtins.DefaultBuiltIns$Companion`    |
| 12.5% |       2 | `get_defaultType()`              | `org.jetbrains.kotlin.ir.descriptors.IrBasedClassDescriptor` |
|  6.3% |       1 | `getDefaultPerformanceManager()` | `org.jetbrains.kotlin.cli.common.CLICompiler`                |
|  6.3% |       1 | `getPathUtilJar()`               | `org.jetbrains.kotlin.utils.PathUtil`                        |

##### `getValue()` (`kotlin.UnsafeLazyImpl`)

|     % | Samples | Caller                                                       | Location                                                                           |
| ----: | ------: | ------------------------------------------------------------ | ---------------------------------------------------------------------------------- |
| 81.3% |      13 | `resolveVariableAccessAndSelectCandidateImpl$lambda$1(Lazy)` | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`                           |
|  6.3% |       1 | `getClassifierResolverResult()`                              | `org.jetbrains.kotlin.load.java.structure.impl.classFiles.PlainJavaClassifierType` |
|  6.3% |       1 | `getReversedFilteredLocalScopes()`                           | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerDataElementsForName`            |
|  6.3% |       1 | `substituteArguments$lambda$1(Lazy)`                         | `org.jetbrains.kotlin.fir.resolve.substitution.AbstractConeSubstitutor`            |

##### `getValue()` (`kotlin.SafePublicationLazyImpl`)

|     % | Samples | Caller                | Location                                                                        |
| ----: | ------: | --------------------- | ------------------------------------------------------------------------------- |
| 66.7% |      10 | `getJavaField()`      | `kotlin.reflect.jvm.internal.DescriptorKProperty`                               |
| 33.3% |       5 | `getAnnotationInfo()` | `org.jetbrains.kotlin.fir.java.deserialization.JvmBinaryAnnotationDeserializer` |
|  6.7% |       1 | `getDescriptor()`     | `kotlin.reflect.jvm.internal.KClassImpl`                                        |

##### `invoke(Class, MethodHandle, String, Object, Object, Class)` (`java.lang.invoke.BootstrapMethodInvoker`)

|      % | Samples | Caller                                                      | Location                    |
| -----: | ------: | ----------------------------------------------------------- | --------------------------- |
| 100.0% |      15 | `makeSite(MethodHandle, String, MethodType, Object, Class)` | `java.lang.invoke.CallSite` |

##### `I2C/C2I adapters(0xb)` (`<unknown>`)

|     % | Samples | Caller                                                                      | Location                                                                  |
| ----: | ------: | --------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| 16.7% |       1 | `hasField(FieldSet$FieldDescriptorLite)`                                    | `org.jetbrains.kotlin.protobuf.FieldSet`                                  |
| 16.7% |       1 | `parametersCount(TypeConstructorMarker)`                                    | `org.jetbrains.kotlin.fir.types.ConeTypeContext`                          |
| 16.7% |       1 | `processDefaultsAndRunChecks()`                                             | `org.jetbrains.kotlin.fir.resolve.calls.stages.FirCallArgumentsProcessor` |
| 16.7% |       1 | `access$resolvedAnnotationClassIds(FirAnnotationContainer, FirBasedSymbol)` | `org.jetbrains.kotlin.fir.symbols.FirBasedSymbolKt`                       |
| 16.7% |       1 | `getName()`                                                                 | `org.jetbrains.kotlin.fir.symbols.impl.FirVariableSymbol`                 |

##### `I2C/C2I adapters(0xbb)` (`<unknown>`)

|     % | Samples | Caller                                                                                     | Location                                                                                                           |
| ----: | ------: | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| 33.3% |       1 | `addConstraint(TypeConstructorMarker, KotlinTypeMarker, ConstraintKind, boolean, boolean)` | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector$TypeCheckerStateForConstraintInjector` |
| 33.3% |       1 | `getBySymbol(FirBasedSymbol)`                                                              | `org.jetbrains.kotlin.fir.resolve.ImplicitValueStorage`                                                            |
| 33.3% |       1 | `addCallOrAssignment(FirStatement)`                                                        | `org.jetbrains.kotlin.fir.analysis.checkers.context.MutableCheckerContext`                                         |

##### `itable stub` (`<unknown>`)

|     % | Samples | Caller                                                              | Location                                                         |
| ----: | ------: | ------------------------------------------------------------------- | ---------------------------------------------------------------- |
| 33.3% |       1 | `toList(Iterable)`                                                  | `kotlin.collections.CollectionsKt___CollectionsKt`               |
| 33.3% |       1 | `lastOrNull(List)`                                                  | `kotlin.collections.CollectionsKt___CollectionsKt`               |
| 33.3% |       1 | `isStubTypeForBuilderInference(TypeSystemContext, RigidTypeMarker)` | `org.jetbrains.kotlin.types.model.TypeSystemContextContextualKt` |

##### `zero_blocks` (`<unknown>`)

|      % | Samples | Caller        | Location                        |
| -----: | ------: | ------------- | ------------------------------- |
| 100.0% |       1 | `<init>(int)` | `java.io.ByteArrayOutputStream` |

##### `I2C/C2I adapters(0xbab)` (`<unknown>`)

|      % | Samples | Caller                                                                                   | Location                                |
| -----: | ------: | ---------------------------------------------------------------------------------------- | --------------------------------------- |
| 100.0% |       1 | `getDirectMethodCommon(byte, Class, MemberName, boolean, boolean, MethodHandles$Lookup)` | `java.lang.invoke.MethodHandles$Lookup` |

##### `I2C/C2I adapters(0xba)` (`<unknown>`)

|      % | Samples | Caller               | Location                                           |
| -----: | ------: | -------------------- | -------------------------------------------------- |
| 100.0% |       1 | `singleOrNull(List)` | `kotlin.collections.CollectionsKt___CollectionsKt` |

##### `I2C/C2I adapters(0xbbbbabaabab)` (`<unknown>`)

|      % | Samples | Caller                                                                          | Location                                                                                      |
| -----: | ------: | ------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `simplifyLowerConstraint(KotlinTypeMarker, KotlinTypeMarker, boolean, boolean)` | `org.jetbrains.kotlin.resolve.calls.inference.components.TypeCheckerStateForConstraintSystem` |

##### `I2C/C2I adapters(0xbbbbb)` (`<unknown>`)

|      % | Samples | Caller                                                                             | Location                                                   |
| -----: | ------: | ---------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| 100.0% |       1 | `unsubstitutedScope(FirClass, FirSession, ScopeSession, boolean, FirResolvePhase)` | `org.jetbrains.kotlin.fir.scopes.FirKotlinScopeProviderKt` |

#### Callees

Callees with the largest contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `Thread::call_run` (`libjvm.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 94.0% |     957 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
|  5.4% |      55 | `WorkerThread::run`             | `libjvm.dylib` |
|  0.4% |       4 | `VMThread::run`                 | `libjvm.dylib` |
|  0.2% |       2 | `ConcurrentGCThread::run`       | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % | Samples | Callee             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |   1,018 | `Thread::call_run` | `libjvm.dylib` |

##### `_pthread_start` (`libsystem_pthread.dylib`)

|      % | Samples | Callee                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |   1,018 | `thread_native_entry` | `libjvm.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

|      % | Samples | Callee           | Location                  |
| -----: | ------: | ---------------- | ------------------------- |
| 100.0% |   1,018 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|     % | Samples | Callee                                | Location       |
| ----: | ------: | ------------------------------------- | -------------- |
| 99.9% |     956 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |
|  0.1% |       1 | `ServiceThread::service_thread_entry` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|     % | Samples | Callee                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 91.5% |     875 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |
|  8.5% |      81 | `CompileQueue::get`                        | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 68.0% |     595 | `C2Compiler::compile_method`    | `libjvm.dylib` |
| 30.7% |     269 | `Compiler::compile_method`      | `libjvm.dylib` |
|  0.5% |       4 | `ciEnv::get_method_from_handle` | `libjvm.dylib` |
|  0.3% |       3 | `ciEnv::ciEnv`                  | `libjvm.dylib` |
|  0.2% |       2 | `ciEnv::~ciEnv`                 | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|     % | Samples | Callee                        | Location       |
| ----: | ------: | ----------------------------- | -------------- |
| 99.5% |     592 | `Compile::Compile`            | `libjvm.dylib` |
|  0.3% |       2 | `Compile::~Compile`           | `libjvm.dylib` |
|  0.2% |       1 | `stringStream::~stringStream` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|     % | Samples | Callee                                   | Location       |
| ----: | ------: | ---------------------------------------- | -------------- |
| 52.4% |     310 | `Compile::Code_Gen`                      | `libjvm.dylib` |
| 34.1% |     202 | `Compile::Optimize`                      | `libjvm.dylib` |
| 11.1% |      66 | `ParseGenerator::generate`               | `libjvm.dylib` |
|  1.0% |       6 | `CallGenerator::for_inline`              | `libjvm.dylib` |
|  1.0% |       6 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |

##### `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

|     % | Samples | Callee                                                                       | Location                                               |
| ----: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------------ |
| 83.9% |     401 | `invoke(Object, Object[])`                                                   | `java.lang.reflect.Method`                             |
| 15.9% |      76 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |
|  0.2% |       1 | `<init>(Runnable)`                                                           | `java.lang.Thread`                                     |

##### `main(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

|      % | Samples | Callee          | Location                                    |
| -----: | ------: | --------------- | ------------------------------------------- |
| 100.0% |     478 | `run(String[])` | `org.jetbrains.kotlin.preloading.Preloader` |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`)

|     % | Samples | Callee                          | Location                                                |
| ----: | ------: | ------------------------------- | ------------------------------------------------------- |
| 99.8% |     400 | `doMain(CLICompiler, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
|  0.2% |       1 | `<init>()`                      | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % | Samples | Callee           | Location                                               |
| -----: | ------: | ---------------- | ------------------------------------------------------ |
| 100.0% |     401 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000008801008000`)

|      % | Samples | Callee           | Location                                     |
| -----: | ------: | ---------------- | -------------------------------------------- |
| 100.0% |     401 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000008801009400`)

|      % | Samples | Callee                         | Location                                             |
| -----: | ------: | ------------------------------ | ---------------------------------------------------- |
| 100.0% |     401 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000008801008000` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Callee                           | Location                                            |
| -----: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% |     401 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000008801009400` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % | Samples | Callee                                           | Location                           |
| -----: | ------: | ------------------------------------------------ | ---------------------------------- |
| 100.0% |     401 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % | Samples | Callee                         | Location                                          |
| -----: | ------: | ------------------------------ | ------------------------------------------------- |
| 100.0% |     401 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

|      % | Samples | Callee                     | Location                                          |
| -----: | ------: | -------------------------- | ------------------------------------------------- |
| 100.0% |     401 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |
|   1.0% |       4 | `acquireMethodAccessor()`  | `java.lang.reflect.Method`                        |

##### `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|     % | Samples | Callee                                                 | Location                                                |
| ----: | ------: | ------------------------------------------------------ | ------------------------------------------------------- |
| 99.8% |     399 | `doMainNoExit(CLICompiler, String[], MessageRenderer)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
|  0.3% |       1 | `defaultMessageRenderer()`                             | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `doMain(CLICompiler, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % | Samples | Callee                                                                                             | Location                                                |
| -----: | ------: | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |     400 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `exec(PrintStream, Services, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|     % | Samples | Callee                                                                               | Location                                                                |
| ----: | ------: | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------- |
| 98.7% |     394 | `exec(MessageCollector, Services, CommonCompilerArguments)`                          | `org.jetbrains.kotlin.cli.common.CLICompiler`                           |
|  1.3% |       5 | `parseCommandLineArguments$default(List, CommonToolArguments, boolean, int, Object)` | `org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt` |

##### `exec(PrintStream, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Callee                                                   | Location                                      |
| -----: | ------: | -------------------------------------------------------- | --------------------------------------------- |
| 100.0% |     399 | `exec(PrintStream, Services, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % | Samples | Callee                                         | Location                                      |
| -----: | ------: | ---------------------------------------------- | --------------------------------------------- |
| 100.0% |     399 | `exec(PrintStream, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `exec(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|     % | Samples | Callee                                                          | Location                                      |
| ----: | ------: | --------------------------------------------------------------- | --------------------------------------------- |
| 97.5% |     384 | `execImpl(MessageCollector, Services, CommonCompilerArguments)` | `org.jetbrains.kotlin.cli.common.CLICompiler` |
|  2.5% |      10 | `<clinit>()`                                                    | `org.jetbrains.kotlin.cli.common.ArgumentsKt` |

##### `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|     % | Samples | Callee                                                         | Location                                                |
| ----: | ------: | -------------------------------------------------------------- | ------------------------------------------------------- |
| 99.7% |     383 | `execute(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
|  0.3% |       1 | `getDefaultPerformanceManager()`                               | `org.jetbrains.kotlin.cli.common.CLICompiler`           |

##### `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % | Samples | Callee                                                                | Location                                     |
| -----: | ------: | --------------------------------------------------------------------- | -------------------------------------------- |
| 100.0% |     384 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Callee                                                                 | Location                                     |
| -----: | ------: | ---------------------------------------------------------------------- | -------------------------------------------- |
| 100.0% |     384 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|     % | Samples | Callee                                                                                                | Location                                                      |
| ----: | ------: | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| 99.7% |     382 | `runPhasedPipeline(ArgumentsPipelineArtifact)`                                                        | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`       |
|  0.3% |       1 | `<init>(CommonCompilerArguments, Services, Disposable, GroupingMessageCollector, PerformanceManager)` | `org.jetbrains.kotlin.cli.pipeline.ArgumentsPipelineArtifact` |

##### `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Callee                                                                                              | Location                                                |
| -----: | ------: | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |     383 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `execute(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Callee                                                                                                                                        | Location                                                |
| -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |     383 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|     % | Samples | Callee                                                                          | Location                                                                    |
| ----: | ------: | ------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| 99.5% |     380 | `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)`            | `org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`                        |
|  0.5% |       2 | `reportToMessageCollector(BaseDiagnosticsCollector, MessageCollector, boolean)` | `org.jetbrains.kotlin.cli.common.fir.FirDiagnosticsCompilerResultsReporter` |

##### `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

|     % | Samples | Callee                           | Location                                                              |
| ----: | ------: | -------------------------------- | --------------------------------------------------------------------- |
| 66.6% |     253 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`      |
| 25.0% |      95 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`       |
|  7.4% |      28 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFir2IrPipelinePhase`        |
|  1.1% |       4 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmConfigurationPipelinePhase` |

##### `phaseBody(LoggingContext, Object)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

|      % | Samples | Callee                                         | Location                                          |
| -----: | ------: | ---------------------------------------------- | ------------------------------------------------- |
| 100.0% |     380 | `phaseBody(PipelineContext, PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase` |

##### `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`)

|      % | Samples | Callee                                                               | Location                                                         |
| -----: | ------: | -------------------------------------------------------------------- | ---------------------------------------------------------------- |
| 100.0% |     380 | `phaseBody(LoggingContext, Object)`                                  | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`                |
|   5.0% |      19 | `phaseBody(LoggingContext, Object)`                                  | `org.jetbrains.kotlin.backend.common.phaser.FileLoweringPhase`   |
|   1.6% |       6 | `phaseBody(LoggingContext, Object)`                                  | `org.jetbrains.kotlin.backend.common.phaser.ModuleLoweringPhase` |
|   0.5% |       2 | `runAfter(PhaseConfig, PhaserState, LoggingContext, Object, Object)` | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`          |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|     % | Samples | Callee                            | Location       |
| ----: | ------: | --------------------------------- | -------------- |
| 52.9% |     164 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
| 16.1% |      50 | `Matcher::match`                  | `libjvm.dylib` |
| 15.5% |      48 | `PhaseOutput::Output`             | `libjvm.dylib` |
| 10.3% |      32 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |
|  2.9% |       9 | `PhaseOutput::install_code`       | `libjvm.dylib` |

##### `Compiler::compile_method` (`libjvm.dylib`)

|      % | Samples | Callee                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |     269 | `Compilation::Compilation` | `libjvm.dylib` |

##### `Compilation::Compilation` (`libjvm.dylib`)

|     % | Samples | Callee                        | Location       |
| ----: | ------: | ----------------------------- | -------------- |
| 99.6% |     268 | `Compilation::compile_method` | `libjvm.dylib` |
|  0.4% |       1 | `OopMapSet::OopMapSet`        | `libjvm.dylib` |

##### `Compilation::compile_method` (`libjvm.dylib`)

|     % | Samples | Callee                                               | Location       |
| ----: | ------: | ---------------------------------------------------- | -------------- |
| 92.2% |     247 | `Compilation::compile_java_method`                   | `libjvm.dylib` |
|  7.1% |      19 | `ciEnv::register_method`                             | `libjvm.dylib` |
|  0.4% |       1 | `Dependencies::assert_common_1`                      | `libjvm.dylib` |
|  0.4% |       1 | `DebugInformationRecorder::DebugInformationRecorder` | `libjvm.dylib` |

##### `Compilation::compile_java_method` (`libjvm.dylib`)

|     % | Samples | Callee                        | Location       |
| ----: | ------: | ----------------------------- | -------------- |
| 49.4% |     122 | `Compilation::build_hir`      | `libjvm.dylib` |
| 36.8% |      91 | `Compilation::emit_lir`       | `libjvm.dylib` |
| 13.8% |      34 | `Compilation::emit_code_body` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|     % | Samples | Callee                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 30.2% |      61 | `PhaseIdealLoop::optimize`             | `libjvm.dylib` |
| 20.8% |      42 | `Compile::optimize_loops`              | `libjvm.dylib` |
| 16.3% |      33 | `PhaseIterGVN::optimize`               | `libjvm.dylib` |
|  6.9% |      14 | `PhaseCCP::PhaseCCP`                   | `libjvm.dylib` |
|  6.4% |      13 | `PhaseMacroExpand::expand_macro_nodes` | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|     % | Samples | Callee                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 19.5% |      32 | `PhaseChaitin::build_ifg_physical`         | `libjvm.dylib` |
| 14.6% |      24 | `PhaseLive::compute`                       | `libjvm.dylib` |
| 14.6% |      24 | `PhaseChaitin::Split`                      | `libjvm.dylib` |
| 10.4% |      17 | `PhaseChaitin::gather_lrg_masks`           | `libjvm.dylib` |
|  7.3% |      12 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |

##### `Compilation::build_hir` (`libjvm.dylib`)

|     % | Samples | Callee                                       | Location       |
| ----: | ------: | -------------------------------------------- | -------------- |
| 79.5% |      97 | `IR::IR`                                     | `libjvm.dylib` |
|  8.2% |      10 | `GlobalValueNumbering::GlobalValueNumbering` | `libjvm.dylib` |
|  5.7% |       7 | `IR::compute_use_counts`                     | `libjvm.dylib` |
|  4.9% |       6 | `IR::eliminate_null_checks`                  | `libjvm.dylib` |
|  0.8% |       1 | `IR::split_critical_edges`                   | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % | Samples | Callee                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 80.6% |      83 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |
| 17.5% |      18 | `PhaseIterGVN::optimize`         | `libjvm.dylib` |
|  1.9% |       2 | `Chunk::next_chop`               | `libjvm.dylib` |

##### `IRScope::IRScope` (`libjvm.dylib`)

|      % | Samples | Callee                       | Location       |
| -----: | ------: | ---------------------------- | -------------- |
| 100.0% |      97 | `GraphBuilder::GraphBuilder` | `libjvm.dylib` |

##### `IR::IR` (`libjvm.dylib`)

|      % | Samples | Callee             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |      97 | `IRScope::IRScope` | `libjvm.dylib` |

##### `GraphBuilder::GraphBuilder` (`libjvm.dylib`)

|     % | Samples | Callee                               | Location       |
| ----: | ------: | ------------------------------------ | -------------- |
| 90.7% |      88 | `GraphBuilder::iterate_all_blocks`   | `libjvm.dylib` |
|  4.1% |       4 | `BlockListBuilder::BlockListBuilder` | `libjvm.dylib` |
|  3.1% |       3 | `BlockBegin::iterate_preorder`       | `libjvm.dylib` |
|  2.1% |       2 | `GraphBuilder::setup_start_block`    | `libjvm.dylib` |

##### `Compilation::emit_lir` (`libjvm.dylib`)

|     % | Samples | Callee                           | Location                   |
| ----: | ------: | -------------------------------- | -------------------------- |
| 75.8% |      69 | `LinearScan::do_linear_scan`     | `libjvm.dylib`             |
| 22.0% |      20 | `BlockList::iterate_forward`     | `libjvm.dylib`             |
|  1.1% |       1 | `_platform_bzero`                | `libsystem_platform.dylib` |
|  1.1% |       1 | `LinearScan::allocate_registers` | `libjvm.dylib`             |

##### `GraphBuilder::iterate_all_blocks` (`libjvm.dylib`)

|     % | Samples | Callee                                      | Location       |
| ----: | ------: | ------------------------------------------- | -------------- |
| 97.7% |      86 | `GraphBuilder::iterate_bytecodes_for_block` | `libjvm.dylib` |
|  1.1% |       1 | `GraphBuilder::setup_osr_entry_block`       | `libjvm.dylib` |
|  1.1% |       1 | `Instruction::as_BlockEnd`                  | `libjvm.dylib` |
|  1.1% |       1 | `ValueStack::ValueStack`                    | `libjvm.dylib` |

##### `GraphBuilder::iterate_bytecodes_for_block` (`libjvm.dylib`)

|     % | Samples | Callee                        | Location        |
| ----: | ------: | ----------------------------- | --------------- |
| 90.7% |      78 | `GraphBuilder::invoke`        | `libjvm.dylib`  |
|  8.1% |       7 | `GraphBuilder::access_field`  | `libjvm.dylib`  |
|  3.5% |       3 | `BlockBegin::try_merge`       | `libjvm.dylib`  |
|  2.3% |       2 | `tlv_get_addr`                | `libdyld.dylib` |
|  2.3% |       2 | `GraphBuilder::load_constant` | `libjvm.dylib`  |

##### `PlatformMonitor::wait` (`libjvm.dylib`)

|     % | Samples | Callee               | Location                  |
| ----: | ------: | -------------------- | ------------------------- |
| 85.5% |      71 | `__psynch_cvwait`    | `libsystem_kernel.dylib`  |
| 14.5% |      12 | `_pthread_cond_wait` | `libsystem_pthread.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|     % | Samples | Callee                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 38.6% |      32 | `PhaseIdealLoop::build_loop_late`      | `libjvm.dylib` |
| 14.5% |      12 | `PhaseIdealLoop::build_loop_early`     | `libjvm.dylib` |
| 13.3% |      11 | `PhaseIdealLoop::Dominators`           | `libjvm.dylib` |
| 12.0% |      10 | `PhaseIdealLoop::split_if_with_blocks` | `libjvm.dylib` |
|  3.6% |       3 | `IdealLoopTree::iteration_split`       | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % | Samples | Callee                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |      83 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `CompileQueue::get` (`libjvm.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 96.3% |      78 | `Monitor::wait`                 | `libjvm.dylib` |
|  2.5% |       2 | `Mutex::lock`                   | `libjvm.dylib` |
|  1.2% |       1 | `TimeStamp::ticks_since_update` | `libjvm.dylib` |

##### `Monitor::wait` (`libjvm.dylib`)

|      % | Samples | Callee                  | Location       |
| -----: | ------: | ----------------------- | -------------- |
| 100.0% |      80 | `PlatformMonitor::wait` | `libjvm.dylib` |

##### `_pthread_mutex_firstfit_lock_slow` (`libsystem_pthread.dylib`)

|      % | Samples | Callee               | Location                 |
| -----: | ------: | -------------------- | ------------------------ |
| 100.0% |      80 | `__psynch_mutexwait` | `libsystem_kernel.dylib` |

##### `GraphBuilder::invoke` (`libjvm.dylib`)

|     % | Samples | Callee                                         | Location       |
| ----: | ------: | ---------------------------------------------- | -------------- |
| 67.9% |      53 | `GraphBuilder::try_inline`                     | `libjvm.dylib` |
| 34.6% |      27 | `ciBytecodeStream::get_method`                 | `libjvm.dylib` |
|  5.1% |       4 | `GraphBuilder::append_with_bci`                | `libjvm.dylib` |
|  2.6% |       2 | `ciMethod::find_monomorphic_target`            | `libjvm.dylib` |
|  2.6% |       2 | `ciBytecodeStream::get_declared_method_holder` | `libjvm.dylib` |

##### `loadClass(String, boolean)` (`java.lang.ClassLoader`)

|     % | Samples | Callee                             | Location                                                 |
| ----: | ------: | ---------------------------------- | -------------------------------------------------------- |
| 94.3% |      66 | `findClass(String)`                | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |
|  2.9% |       2 | `findClass(String)`                | `java.net.URLClassLoader`                                |
|  2.9% |       2 | `findBootstrapClassOrNull(String)` | `java.lang.ClassLoader`                                  |

##### `read(byte[], int, int)` (`java.util.zip.ZipInputStream`)

|     % | Samples | Callee                     | Location                            |
| ----: | ------: | -------------------------- | ----------------------------------- |
| 94.2% |      65 | `read(byte[], int, int)`   | `java.util.zip.InflaterInputStream` |
|  4.3% |       3 | `update(byte[], int, int)` | `java.util.zip.CRC32`               |

##### `read(byte[])` (`java.io.FilterInputStream`)

|      % | Samples | Callee                   | Location                       |
| -----: | ------: | ------------------------ | ------------------------------ |
| 100.0% |      69 | `read(byte[], int, int)` | `java.util.zip.ZipInputStream` |

##### `Parse::do_all_blocks` (`libjvm.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 98.5% |      66 | `Parse::do_one_block`           | `libjvm.dylib` |
|  1.5% |       1 | `Parse::ensure_phis_everywhere` | `libjvm.dylib` |

##### `Parse::Parse` (`libjvm.dylib`)

|      % | Samples | Callee                 | Location        |
| -----: | ------: | ---------------------- | --------------- |
| 100.0% |      67 | `Parse::do_all_blocks` | `libjvm.dylib`  |
|   4.5% |       3 | `Parse::do_exits`      | `libjvm.dylib`  |
|   1.5% |       1 | `Parse::build_exits`   | `libjvm.dylib`  |
|   1.5% |       1 | `tlv_get_addr`         | `libdyld.dylib` |

##### `ParseGenerator::generate` (`libjvm.dylib`)

|      % | Samples | Callee         | Location       |
| -----: | ------: | -------------- | -------------- |
| 100.0% |      67 | `Parse::Parse` | `libjvm.dylib` |

##### `Parse::do_one_block` (`libjvm.dylib`)

|     % | Samples | Callee                   | Location       |
| ----: | ------: | ------------------------ | -------------- |
| 95.5% |      63 | `Parse::do_call`         | `libjvm.dylib` |
| 16.7% |      11 | `Parse::do_one_bytecode` | `libjvm.dylib` |
| 10.6% |       7 | `Parse::do_field_access` | `libjvm.dylib` |
|  6.1% |       4 | `Parse::do_checkcast`    | `libjvm.dylib` |
|  3.0% |       2 | `Parse::do_instanceof`   | `libjvm.dylib` |

##### `Java_java_util_zip_Inflater_inflateBytesBytes` (`libzip.dylib`)

|     % | Samples | Callee                              | Location       |
| ----: | ------: | ----------------------------------- | -------------- |
| 76.9% |      50 | `inflate_fast`                      | `libzip.dylib` |
| 15.4% |      10 | `inflate`                           | `libzip.dylib` |
|  4.6% |       3 | `jni_ReleasePrimitiveArrayCritical` | `libjvm.dylib` |
|  3.1% |       2 | `jni_GetPrimitiveArrayCritical`     | `libjvm.dylib` |

##### `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`)

|     % | Samples | Callee                      | Location                            |
| ----: | ------: | --------------------------- | ----------------------------------- |
| 96.9% |      63 | `inflate(byte[], int, int)` | `java.util.zip.Inflater`            |
|  3.1% |       2 | `fill()`                    | `java.util.zip.InflaterInputStream` |

##### `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`)

|      % | Samples | Callee                                          | Location       |
| -----: | ------: | ----------------------------------------------- | -------------- |
| 100.0% |      65 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `libzip.dylib` |

##### `inflate(byte[], int, int)` (`java.util.zip.Inflater`)

|      % | Samples | Callee                                                        | Location                 |
| -----: | ------: | ------------------------------------------------------------- | ------------------------ |
| 100.0% |      65 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` | `java.util.zip.Inflater` |

##### `defineClass(String, byte[], int, int, ProtectionDomain)` (`java.lang.ClassLoader`)

|     % | Samples | Callee                                                                          | Location                |
| ----: | ------: | ------------------------------------------------------------------------------- | ----------------------- |
| 98.5% |      64 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader` |
|  1.5% |       1 | `postDefineClass(Class, ProtectionDomain)`                                      | `java.lang.ClassLoader` |

##### `defineClass(String, byte[], int, int)` (`java.lang.ClassLoader`)

|      % | Samples | Callee                                                    | Location                |
| -----: | ------: | --------------------------------------------------------- | ----------------------- |
| 100.0% |      65 | `defineClass(String, byte[], int, int, ProtectionDomain)` | `java.lang.ClassLoader` |

##### `Java_java_lang_ClassLoader_defineClass1` (`libjava.dylib`)

|     % | Samples | Callee                      | Location                   |
| ----: | ------: | --------------------------- | -------------------------- |
| 95.3% |      61 | `JVM_DefineClassWithSource` | `libjvm.dylib`             |
|  3.1% |       2 | `_platform_memmove`         | `libsystem_platform.dylib` |
|  1.6% |       1 | `jni_GetByteArrayRegion`    | `libjvm.dylib`             |

##### `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` (`java.lang.ClassLoader`)

|      % | Samples | Callee                                    | Location                                                 |
| -----: | ------: | ----------------------------------------- | -------------------------------------------------------- |
| 100.0% |      64 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib`                                          |
|  17.2% |      11 | `loadClass(String)`                       | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |

##### `Parse::do_call` (`libjvm.dylib`)

|     % | Samples | Callee                                                | Location       |
| ----: | ------: | ----------------------------------------------------- | -------------- |
| 65.1% |      41 | `ParseGenerator::generate`                            | `libjvm.dylib` |
| 58.7% |      37 | `PredictedCallGenerator::generate`                    | `libjvm.dylib` |
| 25.4% |      16 | `Compile::call_generator`                             | `libjvm.dylib` |
|  9.5% |       6 | `GraphKit::record_profiled_arguments_for_speculation` | `libjvm.dylib` |
|  3.2% |       2 | `LibraryIntrinsic::generate`                          | `libjvm.dylib` |

##### `resumeWith(Object)` (`kotlin.coroutines.jvm.internal.BaseContinuationImpl`)

|     % | Samples | Callee                  | Location                                                                                 |
| ----: | ------: | ----------------------- | ---------------------------------------------------------------------------------------- |
| 66.7% |      40 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask$processLevel$6`    |
| 53.3% |      32 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner$processCandidate$1` |
| 20.0% |      12 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver$enqueueResolutionTasks$2` |
|  3.3% |       2 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver$enqueueResolutionTasks$1` |
|  3.3% |       2 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver$enqueueResolutionTasks$4` |

##### `getValue()` (`kotlin.SynchronizedLazyImpl`)

|     % | Samples | Callee     | Location                                                                                |
| ----: | ------: | ---------- | --------------------------------------------------------------------------------------- |
| 25.0% |       4 | `invoke()` | `org.jetbrains.kotlin.fir.java.declarations.FirJavaClass$$Lambda.0x000000880160f940`    |
| 18.8% |       3 | `invoke()` | `org.jetbrains.kotlin.builtins.DefaultBuiltIns$$Lambda.0x0000008801755fe8`              |
| 12.5% |       2 | `invoke()` | `org.jetbrains.kotlin.ir.descriptors.IrBasedClassDescriptor$$Lambda.0x0000008801817910` |
|  6.3% |       1 | `invoke()` | `org.jetbrains.kotlin.cli.common.CLICompiler$$Lambda.0x000000880100a000`                |
|  6.3% |       1 | `invoke()` | `org.jetbrains.kotlin.utils.PathUtil$$Lambda.0x0000008801153c40`                        |

##### `getValue()` (`kotlin.UnsafeLazyImpl`)

|     % | Samples | Callee              | Location                                                                                                         |
| ----: | ------: | ------------------- | ---------------------------------------------------------------------------------------------------------------- |
| 81.3% |      13 | `invoke()`          | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver$$Lambda.0x00000088016828a0`                              |
|  6.3% |       1 | `invoke()`          | `org.jetbrains.kotlin.load.java.structure.impl.classFiles.BinaryClassSignatureParser$$Lambda.0x0000008801635bc8` |
|  6.3% |       1 | `invoke()`          | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerDataElementsForName$$Lambda.0x000000880165fce0`               |
|  6.3% |       1 | `wrong_method_stub` | `<unknown>`                                                                                                      |

##### `getValue()` (`kotlin.SafePublicationLazyImpl`)

|     % | Samples | Callee     | Location                                                                                                   |
| ----: | ------: | ---------- | ---------------------------------------------------------------------------------------------------------- |
| 66.7% |      10 | `invoke()` | `kotlin.reflect.jvm.internal.DescriptorKProperty$$Lambda$0`                                                |
| 33.3% |       5 | `invoke()` | `org.jetbrains.kotlin.fir.java.deserialization.JvmBinaryAnnotationDeserializer$$Lambda.0x00000088015d7710` |
|  6.7% |       1 | `invoke()` | `kotlin.reflect.jvm.internal.KClassImpl$$Lambda$0`                                                         |

##### `invoke(Class, MethodHandle, String, Object, Object, Class)` (`java.lang.invoke.BootstrapMethodInvoker`)

|     % | Samples | Callee                                                                           | Location                           |
| ----: | ------: | -------------------------------------------------------------------------------- | ---------------------------------- |
| 93.3% |      14 | `invokeExact_MT(Object, Object, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

## Hottest call stacks

Call stacks with the most samples collected in their leaf frame.

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ---: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 4.4% |      67 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait` ← `CompileQueue::get` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 3.0% |      45 | `inflate_fast` (`libzip.dylib`) ← `Java_java_util_zip_Inflater_inflateBytesBytes` ← `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`) ← `inflate(byte[], int, int)` ← `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`) ← `read(byte[], int, int)` (`java.util.zip.ZipInputStream`) ← `read(byte[])` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                                                |
| 1.0% |      15 | `PhaseChaitin::Split` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                   |
| 0.9% |      14 | `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                      |
| 0.7% |      11 | `__psynch_mutexwait` (`libsystem_kernel.dylib`) ← `_pthread_mutex_firstfit_lock_slow` (`libsystem_pthread.dylib`) ← `_pthread_cond_wait` ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait` ← `CompileQueue::get` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                         |
| 0.6% |       9 | `PhaseChaitin::gather_lrg_masks` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                        |
| 0.6% |       9 | `PhaseAggressiveCoalesce::insert_copies` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                |
| 0.6% |       9 | `PhaseLive::compute` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                    |
| 0.5% |       8 | `PhaseChaitin::elide_copy` (`libjvm.dylib`) ← `PhaseChaitin::post_allocate_copy_removal` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                 |
| 0.5% |       7 | `PhaseIdealLoop::build_loop_late` (`libjvm.dylib`) ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                    |
| 0.5% |       7 | `Matcher::xform` (`libjvm.dylib`) ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                         |
| 0.5% |       7 | `LinearScan::build_intervals` (`libjvm.dylib`) ← `LinearScan::do_linear_scan` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                 |
| 0.5% |       7 | `LinearScan::compute_local_live_sets` (`libjvm.dylib`) ← `LinearScan::do_linear_scan` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                         |
| 0.4% |       6 | `IntervalWalker::walk_to` (`libjvm.dylib`) ← `IntervalWalker::walk_to` ← `LinearScan::allocate_registers` ← `LinearScan::do_linear_scan` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                      |
| 0.4% |       6 | `LinearScanWalker::free_collect_inactive_fixed` (`libjvm.dylib`) ← `LinearScanWalker::alloc_free_reg` ← `LinearScanWalker::activate_current` ← `IntervalWalker::walk_to` ← `LinearScan::allocate_registers` ← `LinearScan::do_linear_scan` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                    |
| 0.4% |       6 | `LinearScanWalker::alloc_free_reg` (`libjvm.dylib`) ← `LinearScanWalker::activate_current` ← `IntervalWalker::walk_to` ← `LinearScan::allocate_registers` ← `LinearScan::do_linear_scan` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                      |
| 0.3% |       5 | `PhaseIFG::SquareUp` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                    |
| 0.3% |       5 | `PhaseOutput::BuildOopMaps` (`libjvm.dylib`) ← `PhaseOutput::Output` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                         |
| 0.3% |       5 | `inflate_table` (`libzip.dylib`) ← `inflate` ← `Java_java_util_zip_Inflater_inflateBytesBytes` ← `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`) ← `inflate(byte[], int, int)` ← `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`) ← `read(byte[], int, int)` (`java.util.zip.ZipInputStream`) ← `read(byte[])` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                                   |
| 0.3% |       5 | `inflate_fast` (`libzip.dylib`) ← `Java_java_util_zip_Inflater_inflateBytesBytes` ← `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`) ← `inflate(byte[], int, int)` ← `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`) ← `read(byte[], int, int)` (`java.util.zip.ZipInputStream`) ← `read(byte[])` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])` |

# Allocated heap profile

Allocated 659 MiB over 1,312 samples (514 KiB per sample).

| Category         |     % |    Size | Samples |
| ---------------- | ----: | ------: | ------: |
| Standard library | 77.6% | 511 MiB |   1,017 |
| Ours             | 22.4% | 147 MiB |     295 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
└── 657 MiB (99.8%) main(String[]) at org.jetbrains.kotlin.preloading.Preloader
    └── 657 MiB (99.8%) run(String[])
        ├── 360 MiB (54.7%) preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler) at org.jetbrains.kotlin.preloading.ClassPreloadingUtils
        │   └── … 360 MiB (54.7%) loadAllClassesFromJars(Collection, int, ClassHandler) at org.jetbrains.kotlin.preloading.ClassPreloadingUtils
        │       ├── 177 MiB (26.9%) <init>(int) at java.io.ByteArrayOutputStream
        │       ├── 168 MiB (25.4%) toByteArray() at java.io.ByteArrayOutputStream
        │       │   └── 168 MiB (25.4%, self 18.1%, self 19.3% globally) copyOf(byte[], int) at java.util.Arrays
        │       │       └── 48.5 MiB (7.4%) clone() at java.lang.Object
        │       └── 11.5 MiB (1.7%) getNextEntry() at java.util.zip.ZipInputStream
        │           └── 11.5 MiB (1.7%) readLOC()
        │               ├── … 4.5 MiB (0.7%, self 1.8% globally) copyOfRangeByte(byte[], int, int) at java.util.Arrays
        │               └── 3.5 MiB (0.5%) createZipEntry(String)
        └── … 296 MiB (45.0%) main(String[]) at org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion
            ├── … 291 MiB (44.2%) exec(MessageCollector, Services, CommonCompilerArguments) at org.jetbrains.kotlin.cli.common.CLICompiler
            │   └── … 286 MiB (43.4%) invoke(PhaseConfig, PhaserState, LoggingContext, Object) at org.jetbrains.kotlin.config.phaser.NamedCompilerPhase
            │       ├── 273 MiB (41.4%) phaseBody(LoggingContext, Object) at org.jetbrains.kotlin.cli.pipeline.PipelinePhase
            │       │   └── 273 MiB (41.4%) phaseBody(PipelineContext, PipelineArtifact)
            │       │       ├── 205 MiB (31.1%) executePhase(PipelineArtifact) at org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase
            │       │       │   └── 205 MiB (31.1%) executePhase(ConfigurationPipelineArtifact)
            │       │       │       ├── 171 MiB (26.0%) resolveAndCheckFir(FirSession, List, BaseDiagnosticsCollector) at org.jetbrains.kotlin.fir.pipeline.FirUtilsKt
            │       │       │       │   ├── 145 MiB (22.0%) runResolution(FirSession, List) at org.jetbrains.kotlin.fir.pipeline.AnalyseKt
            │       │       │       │   │   └── 145 MiB (22.0%) process(List) at org.jetbrains.kotlin.fir.resolve.transformers.FirTotalResolveProcessor
            │       │       │       │   │       ├── 107 MiB (16.3%) processFile(FirFile) at org.jetbrains.kotlin.fir.resolve.transformers.FirTransformerBasedResolveProcessor
            │       │       │       │   │       │   └── 107 MiB (16.3%) transform(FirTransformer, Object) at org.jetbrains.kotlin.fir.declarations.FirFile
            │       │       │       │   │       │       ├── … 512 KiB (0.1%, self 3.0% globally) iterator() at java.util.ArrayList
            │       │       │       │   │       │       └── 104 MiB (15.8%) 3 more callees, led by (14.5%) transformFile(FirFile, Object) at org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher
            │       │       │       │   │       └── … 34.5 MiB (5.2%) getValue(Object, Object) at org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache
            │       │       │       │   │           └── … 30 MiB (4.6%) readPackageDataFrom(String[], String[]) at org.jetbrains.kotlin.metadata.jvm.deserialization.JvmProtoBufUtil
            │       │       │       │   │               └── … 28.5 MiB (4.3%) readMessage(Parser, ExtensionRegistryLite) at org.jetbrains.kotlin.protobuf.CodedInputStream
            │       │       │       │   │                   ├── … 7.5 MiB (1.1%) <init>(CodedInputStream, ExtensionRegistryLite) at org.jetbrains.kotlin.metadata.ProtoBuf$Type
            │       │       │       │   │                   │   ├── 4 MiB (0.6%) newOutput() at org.jetbrains.kotlin.protobuf.ByteString
            │       │       │       │   │                   │   │   └── 4 MiB (0.6%, self 2.5% globally) <init>(int) at org.jetbrains.kotlin.protobuf.ByteString$Output
            │       │       │       │   │                   │   └── 1 MiB (0.2%) newInstance(OutputStream, int) at org.jetbrains.kotlin.protobuf.CodedOutputStream
            │       │       │       │   │                   └── 18 MiB (2.7%) 7 more callees, led by (0.7%) parsePartialFrom(CodedInputStream, ExtensionRegistryLite) at org.jetbrains.kotlin.metadata.ProtoBuf$Function$1
            │       │       │       │   └── 26 MiB (3.9%) runCheckers(FirSession, ScopeSession, Collection, BaseDiagnosticsCollector, MppCheckerKind) at org.jetbrains.kotlin.fir.pipeline.AnalyseKt …
            │       │       │       └── 34 MiB (5.2%) 6 more callees, led by (1.5%) createEnvironmentAndSources(CompilerConfiguration, Disposable, String)
            │       │       └── 68 MiB (10.3%) 4 more callees, led by (7.7%) executePhase(PipelineArtifact) at org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase
            │       └── … 12 MiB (1.8%) phaseBody(LoggingContext, Object) at org.jetbrains.kotlin.backend.common.phaser.FileLoweringPhase
            │           └── 12 MiB (1.8%) phaseBody(LoweringContext, IrFile) …
            └── … 4.21 MiB (0.6%) initCEN(int, ZipCoder) at java.util.zip.ZipFile$Source
```

## Hottest functions

### Self size

Functions with the most bytes allocated within the function body, excluding callees.

|     % |     Size | Samples | Function                                                    | Location                                                                      |
| ----: | -------: | ------: | ----------------------------------------------------------- | ----------------------------------------------------------------------------- |
| 26.9% |  177 MiB |     355 | `<init>(int)`                                               | `java.io.ByteArrayOutputStream`                                               |
| 19.3% |  127 MiB |     254 | `copyOf(byte[], int)`                                       | `java.util.Arrays`                                                            |
|  7.4% |   49 MiB |      98 | `clone()`                                                   | `java.lang.Object`                                                            |
|  3.0% |   20 MiB |      40 | `iterator()`                                                | `java.util.ArrayList`                                                         |
|  2.5% | 16.5 MiB |      33 | `<init>(int)`                                               | `org.jetbrains.kotlin.protobuf.ByteString$Output`                             |
|  1.8% |   12 MiB |      24 | `copyOfRangeByte(byte[], int, int)`                         | `java.util.Arrays`                                                            |
|  1.3% |  8.5 MiB |      17 | `grow(int)`                                                 | `java.util.ArrayList`                                                         |
|  0.9% |    6 MiB |      12 | `resize()`                                                  | `java.util.HashMap`                                                           |
|  0.9% |    6 MiB |      12 | `<init>(int, int)`                                          | `org.jetbrains.org.objectweb.asm.tree.analysis.Frame`                         |
|  0.8% |  5.5 MiB |      11 | `newNode(int, Object, Object, HashMap$Node)`                | `java.util.LinkedHashMap`                                                     |
|  0.7% |  4.5 MiB |       9 | `copyOf(Object[], int)`                                     | `java.util.Arrays`                                                            |
|  0.7% |  4.5 MiB |       9 | `allocateInstance(Object)`                                  | `java.lang.invoke.DirectMethodHandle`                                         |
|  0.6% | 4.21 MiB |       3 | `initCEN(int, ZipCoder)`                                    | `java.util.zip.ZipFile$Source`                                                |
|  0.6% |    4 MiB |       8 | `newString(byte[], int, int)`                               | `java.lang.StringLatin1`                                                      |
|  0.6% |    4 MiB |       8 | `allocateUninitializedArray(Class, int)`                    | `jdk.internal.misc.Unsafe`                                                    |
|  0.6% |    4 MiB |       8 | `<init>(int)`                                               | `java.lang.AbstractStringBuilder`                                             |
|  0.6% |    4 MiB |       8 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$1`                               |
|  0.6% |    4 MiB |       8 | `<init>()`                                                  | `org.jetbrains.kotlin.resolve.calls.inference.model.MutableConstraintStorage` |
|  0.6% |    4 MiB |       8 | `<init>(int, float, boolean)`                               | `java.util.HashSet`                                                           |
|  0.5% |  3.5 MiB |       7 | `createZipEntry(String)`                                    | `java.util.zip.ZipInputStream`                                                |

#### Categories

Categories accounting for at least 1.0% of self size.

##### Standard library

|     % |     Size | Samples | Function                                                                        | Location                                    |
| ----: | -------: | ------: | ------------------------------------------------------------------------------- | ------------------------------------------- |
| 26.9% |  177 MiB |     355 | `<init>(int)`                                                                   | `java.io.ByteArrayOutputStream`             |
| 19.3% |  127 MiB |     254 | `copyOf(byte[], int)`                                                           | `java.util.Arrays`                          |
|  7.4% |   49 MiB |      98 | `clone()`                                                                       | `java.lang.Object`                          |
|  3.0% |   20 MiB |      40 | `iterator()`                                                                    | `java.util.ArrayList`                       |
|  1.8% |   12 MiB |      24 | `copyOfRangeByte(byte[], int, int)`                                             | `java.util.Arrays`                          |
|  1.3% |  8.5 MiB |      17 | `grow(int)`                                                                     | `java.util.ArrayList`                       |
|  0.9% |    6 MiB |      12 | `resize()`                                                                      | `java.util.HashMap`                         |
|  0.8% |  5.5 MiB |      11 | `newNode(int, Object, Object, HashMap$Node)`                                    | `java.util.LinkedHashMap`                   |
|  0.7% |  4.5 MiB |       9 | `copyOf(Object[], int)`                                                         | `java.util.Arrays`                          |
|  0.7% |  4.5 MiB |       9 | `allocateInstance(Object)`                                                      | `java.lang.invoke.DirectMethodHandle`       |
|  0.6% | 4.21 MiB |       3 | `initCEN(int, ZipCoder)`                                                        | `java.util.zip.ZipFile$Source`              |
|  0.6% |    4 MiB |       8 | `newString(byte[], int, int)`                                                   | `java.lang.StringLatin1`                    |
|  0.6% |    4 MiB |       8 | `allocateUninitializedArray(Class, int)`                                        | `jdk.internal.misc.Unsafe`                  |
|  0.6% |    4 MiB |       8 | `<init>(int)`                                                                   | `java.lang.AbstractStringBuilder`           |
|  0.6% |    4 MiB |       8 | `<init>(int, float, boolean)`                                                   | `java.util.HashSet`                         |
|  0.5% |  3.5 MiB |       7 | `createZipEntry(String)`                                                        | `java.util.zip.ZipInputStream`              |
|  0.5% |  3.5 MiB |       7 | `<init>(int)`                                                                   | `kotlin.collections.builders.MapBuilder`    |
|  0.5% |    3 MiB |       6 | `arrayOfUninitializedElements(int)`                                             | `kotlin.collections.builders.ListBuilderKt` |
|  0.4% |  2.5 MiB |       5 | `copyOfRange(byte[], int, int)`                                                 | `java.util.Arrays`                          |
|  0.4% |  2.5 MiB |       5 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`                     |

##### Ours

|    % |     Size | Samples | Function                                                                                                    | Location                                                                                           |
| ---: | -------: | ------: | ----------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| 2.5% | 16.5 MiB |      33 | `<init>(int)`                                                                                               | `org.jetbrains.kotlin.protobuf.ByteString$Output`                                                  |
| 0.9% |    6 MiB |      12 | `<init>(int, int)`                                                                                          | `org.jetbrains.org.objectweb.asm.tree.analysis.Frame`                                              |
| 0.6% |    4 MiB |       8 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)`                                                 | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$1`                                                    |
| 0.6% |    4 MiB |       8 | `<init>()`                                                                                                  | `org.jetbrains.kotlin.resolve.calls.inference.model.MutableConstraintStorage`                      |
| 0.5% |    3 MiB |       6 | `loadAllClassesFromJars(Collection, int, ClassHandler)`                                                     | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`                                             |
| 0.5% |    3 MiB |       6 | `contentsToByteArray$lambda$0(ZipEntryDescription, LargeDynamicMappedBuffer$Mapping)`                       | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt`                                  |
| 0.5% |    3 MiB |       6 | `newInstance(OutputStream, int)`                                                                            | `org.jetbrains.kotlin.protobuf.CodedOutputStream`                                                  |
| 0.4% |  2.5 MiB |       5 | `toString()`                                                                                                | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ByteArrayCharSequence`                                |
| 0.4% |  2.5 MiB |       5 | `newOutput()`                                                                                               | `org.jetbrains.kotlin.protobuf.ByteString`                                                         |
| 0.4% |  2.5 MiB |       5 | `simplifyTrivialInstructions(MethodNode)`                                                                   | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer` |
| 0.3% |    2 MiB |       4 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)`                                                 | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$Argument$1`                                           |
| 0.3% |    2 MiB |       4 | `newFieldSet()`                                                                                             | `org.jetbrains.kotlin.protobuf.FieldSet`                                                           |
| 0.3% |    2 MiB |       4 | `newFieldMap(int)`                                                                                          | `org.jetbrains.kotlin.protobuf.SmallSortedMap`                                                     |
| 0.3% |    2 MiB |       4 | `handleLevel(CandidateCollector, CandidateFactory, CallInfo, ExplicitReceiverKind, TowerGroup, TowerLevel)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerLevelHandler`                                   |
| 0.3% |    2 MiB |       4 | `box-impl(List)`                                                                                            | `org.jetbrains.kotlin.fir.MutableOrEmptyList`                                                      |
| 0.2% |  1.5 MiB |       3 | `getBytes(int, int)`                                                                                        | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.LargeDynamicMappedBuffer$Mapping`                     |
| 0.2% |  1.5 MiB |       3 | `readUtf(int, int, char[])`                                                                                 | `org.jetbrains.org.objectweb.asm.ClassReader`                                                      |
| 0.2% |  1.5 MiB |       3 | `<init>()`                                                                                                  | `org.jetbrains.kotlin.types.AbstractTypeApproximator$Cache`                                        |
| 0.2% |  1.5 MiB |       3 | `analyzer$lambda$0(FixStackAnalyzer, int, int)`                                                             | `org.jetbrains.kotlin.codegen.optimization.fixStack.FixStackAnalyzer`                              |
| 0.2% |  1.5 MiB |       3 | `simplifyKnownSafeCallPatterns(TemporaryVariablesEliminationTransformer$ControlFlowGraph)`                  | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer` |

#### Lines

Lines with the largest contribution to each function's self size.

##### `<init>(int)` (`java.io.ByteArrayOutputStream`)

|      % |    Size | Samples | Location                           |
| -----: | ------: | ------: | ---------------------------------- |
| 100.0% | 177 MiB |     355 | `java.io.ByteArrayOutputStream:81` |

##### `copyOf(byte[], int)` (`java.util.Arrays`)

|     % |    Size | Samples | Location                |
| ----: | ------: | ------: | ----------------------- |
| 93.7% | 119 MiB |     238 | `java.util.Arrays:3539` |
|  6.3% |   8 MiB |      16 | `java.util.Arrays:3541` |

##### `iterator()` (`java.util.ArrayList`)

|      % |   Size | Samples | Location                   |
| -----: | -----: | ------: | -------------------------- |
| 100.0% | 20 MiB |      40 | `java.util.ArrayList:1029` |

##### `<init>(int)` (`org.jetbrains.kotlin.protobuf.ByteString$Output`)

|     % |    Size | Samples | Location                                              |
| ----: | ------: | ------: | ----------------------------------------------------- |
| 90.9% |  15 MiB |      30 | `org.jetbrains.kotlin.protobuf.ByteString$Output:789` |
|  9.1% | 1.5 MiB |       3 | `org.jetbrains.kotlin.protobuf.ByteString$Output:788` |

##### `copyOfRangeByte(byte[], int, int)` (`java.util.Arrays`)

|      % |   Size | Samples | Location                |
| -----: | -----: | ------: | ----------------------- |
| 100.0% | 12 MiB |      24 | `java.util.Arrays:3863` |

##### `grow(int)` (`java.util.ArrayList`)

|      % |    Size | Samples | Location                  |
| -----: | ------: | ------: | ------------------------- |
| 100.0% | 8.5 MiB |      17 | `java.util.ArrayList:239` |

##### `resize()` (`java.util.HashMap`)

|      % |  Size | Samples | Location                |
| -----: | ----: | ------: | ----------------------- |
| 100.0% | 6 MiB |      12 | `java.util.HashMap:710` |

##### `<init>(int, int)` (`org.jetbrains.org.objectweb.asm.tree.analysis.Frame`)

|      % |  Size | Samples | Location                                                 |
| -----: | ----: | ------: | -------------------------------------------------------- |
| 100.0% | 6 MiB |      12 | `org.jetbrains.org.objectweb.asm.tree.analysis.Frame:96` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.LinkedHashMap`)

|      % |    Size | Samples | Location                      |
| -----: | ------: | ------: | ----------------------------- |
| 100.0% | 5.5 MiB |      11 | `java.util.LinkedHashMap:281` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|      % |    Size | Samples | Location                |
| -----: | ------: | ------: | ----------------------- |
| 100.0% | 4.5 MiB |       9 | `java.util.Arrays:3482` |

##### `allocateInstance(Object)` (`java.lang.invoke.DirectMethodHandle`)

|      % |    Size | Samples | Location                                  |
| -----: | ------: | ------: | ----------------------------------------- |
| 100.0% | 4.5 MiB |       9 | `java.lang.invoke.DirectMethodHandle:501` |

##### `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

|     % |     Size | Samples | Location                            |
| ----: | -------: | ------: | ----------------------------------- |
| 88.1% | 3.71 MiB |       2 | `java.util.zip.ZipFile$Source:1733` |
| 11.9% |  512 KiB |       1 | `java.util.zip.ZipFile$Source:1744` |

##### `newString(byte[], int, int)` (`java.lang.StringLatin1`)

|      % |  Size | Samples | Location                     |
| -----: | ----: | ------: | ---------------------------- |
| 100.0% | 4 MiB |       8 | `java.lang.StringLatin1:750` |

##### `allocateUninitializedArray(Class, int)` (`jdk.internal.misc.Unsafe`)

|      % |  Size | Samples | Location                        |
| -----: | ----: | ------: | ------------------------------- |
| 100.0% | 4 MiB |       8 | `jdk.internal.misc.Unsafe:1380` |

##### `<init>(int)` (`java.lang.AbstractStringBuilder`)

|      % |  Size | Samples | Location                              |
| -----: | ----: | ------: | ------------------------------------- |
| 100.0% | 4 MiB |       8 | `java.lang.AbstractStringBuilder:101` |

##### `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type$1`)

|      % |  Size | Samples | Location                                             |
| -----: | ----: | ------: | ---------------------------------------------------- |
| 100.0% | 4 MiB |       8 | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$1:5079` |

##### `<init>()` (`org.jetbrains.kotlin.resolve.calls.inference.model.MutableConstraintStorage`)

|     % |    Size | Samples | Location                                                                          |
| ----: | ------: | ------: | --------------------------------------------------------------------------------- |
| 25.0% |   1 MiB |       2 | `org.jetbrains.kotlin.resolve.calls.inference.model.MutableConstraintStorage:317` |
| 12.5% | 512 KiB |       1 | `org.jetbrains.kotlin.resolve.calls.inference.model.MutableConstraintStorage:334` |
| 12.5% | 512 KiB |       1 | `org.jetbrains.kotlin.resolve.calls.inference.model.MutableConstraintStorage:332` |
| 12.5% | 512 KiB |       1 | `org.jetbrains.kotlin.resolve.calls.inference.model.MutableConstraintStorage:316` |
| 12.5% | 512 KiB |       1 | `org.jetbrains.kotlin.resolve.calls.inference.model.MutableConstraintStorage:327` |

##### `<init>(int, float, boolean)` (`java.util.HashSet`)

|      % |  Size | Samples | Location                |
| -----: | ----: | ------: | ----------------------- |
| 100.0% | 4 MiB |       8 | `java.util.HashSet:171` |

##### `createZipEntry(String)` (`java.util.zip.ZipInputStream`)

|      % |    Size | Samples | Location                           |
| -----: | ------: | ------: | ---------------------------------- |
| 100.0% | 3.5 MiB |       7 | `java.util.zip.ZipInputStream:555` |

##### `<init>(int)` (`kotlin.collections.builders.MapBuilder`)

|     % |    Size | Samples | Location                                    |
| ----: | ------: | ------: | ------------------------------------------- |
| 57.1% |   2 MiB |       4 | `kotlin.collections.builders.MapBuilder:60` |
| 42.9% | 1.5 MiB |       3 | `kotlin.collections.builders.MapBuilder:59` |

##### `arrayOfUninitializedElements(int)` (`kotlin.collections.builders.ListBuilderKt`)

|      % |  Size | Samples | Location                                        |
| -----: | ----: | ------: | ----------------------------------------------- |
| 100.0% | 3 MiB |       6 | `kotlin.collections.builders.ListBuilderKt:624` |

##### `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`)

|     % |    Size | Samples | Location                                                   |
| ----: | ------: | ------: | ---------------------------------------------------------- |
| 50.0% | 1.5 MiB |       3 | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils:139` |
| 50.0% | 1.5 MiB |       3 | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils:151` |

##### `contentsToByteArray$lambda$0(ZipEntryDescription, LargeDynamicMappedBuffer$Mapping)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt`)

|      % |  Size | Samples | Location                                                             |
| -----: | ----: | ------: | -------------------------------------------------------------------- |
| 100.0% | 3 MiB |       6 | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt:51` |

##### `newInstance(OutputStream, int)` (`org.jetbrains.kotlin.protobuf.CodedOutputStream`)

|      % |  Size | Samples | Location                                              |
| -----: | ----: | ------: | ----------------------------------------------------- |
| 100.0% | 3 MiB |       6 | `org.jetbrains.kotlin.protobuf.CodedOutputStream:106` |

##### `copyOfRange(byte[], int, int)` (`java.util.Arrays`)

|      % |    Size | Samples | Location                |
| -----: | ------: | ------: | ----------------------- |
| 100.0% | 2.5 MiB |       5 | `java.util.Arrays:3856` |

##### `toString()` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ByteArrayCharSequence`)

|     % |    Size | Samples | Location                                                               |
| ----: | ------: | ------: | ---------------------------------------------------------------------- |
| 60.0% | 1.5 MiB |       3 | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ByteArrayCharSequence:31` |
| 40.0% |   1 MiB |       2 | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ByteArrayCharSequence:37` |

##### `newOutput()` (`org.jetbrains.kotlin.protobuf.ByteString`)

|      % |    Size | Samples | Location                                       |
| -----: | ------: | ------: | ---------------------------------------------- |
| 100.0% | 2.5 MiB |       5 | `org.jetbrains.kotlin.protobuf.ByteString:751` |

##### `simplifyTrivialInstructions(MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer`)

|     % |    Size | Samples | Location                                                                                              |
| ----: | ------: | ------: | ----------------------------------------------------------------------------------------------------- |
| 40.0% |   1 MiB |       2 | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer:57` |
| 40.0% |   1 MiB |       2 | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer:48` |
| 20.0% | 512 KiB |       1 | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer:49` |

##### `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type$Argument$1`)

|      % |  Size | Samples | Location                                                      |
| -----: | ----: | ------: | ------------------------------------------------------------- |
| 100.0% | 2 MiB |       4 | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$Argument$1:5231` |

##### `newFieldSet()` (`org.jetbrains.kotlin.protobuf.FieldSet`)

|      % |  Size | Samples | Location                                    |
| -----: | ----: | ------: | ------------------------------------------- |
| 100.0% | 2 MiB |       4 | `org.jetbrains.kotlin.protobuf.FieldSet:92` |

##### `newFieldMap(int)` (`org.jetbrains.kotlin.protobuf.SmallSortedMap`)

|      % |  Size | Samples | Location                                           |
| -----: | ----: | ------: | -------------------------------------------------- |
| 100.0% | 2 MiB |       4 | `org.jetbrains.kotlin.protobuf.SmallSortedMap:100` |

##### `handleLevel(CandidateCollector, CandidateFactory, CallInfo, ExplicitReceiverKind, TowerGroup, TowerLevel)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.TowerLevelHandler`)

|      % |  Size | Samples | Location                                                            |
| -----: | ----: | ------: | ------------------------------------------------------------------- |
| 100.0% | 2 MiB |       4 | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerLevelHandler:40` |

##### `getBytes(int, int)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.LargeDynamicMappedBuffer$Mapping`)

|      % |    Size | Samples | Location                                                                          |
| -----: | ------: | ------: | --------------------------------------------------------------------------------- |
| 100.0% | 1.5 MiB |       3 | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.LargeDynamicMappedBuffer$Mapping:84` |

##### `readUtf(int, int, char[])` (`org.jetbrains.org.objectweb.asm.ClassReader`)

|      % |    Size | Samples | Location                                           |
| -----: | ------: | ------: | -------------------------------------------------- |
| 100.0% | 1.5 MiB |       3 | `org.jetbrains.org.objectweb.asm.ClassReader:3886` |

##### `<init>()` (`org.jetbrains.kotlin.types.AbstractTypeApproximator$Cache`)

|     % |    Size | Samples | Location                                                       |
| ----: | ------: | ------: | -------------------------------------------------------------- |
| 33.3% | 512 KiB |       1 | `org.jetbrains.kotlin.types.AbstractTypeApproximator$Cache:55` |
| 33.3% | 512 KiB |       1 | `org.jetbrains.kotlin.types.AbstractTypeApproximator$Cache:54` |
| 33.3% | 512 KiB |       1 | `org.jetbrains.kotlin.types.AbstractTypeApproximator$Cache:65` |

##### `analyzer$lambda$0(FixStackAnalyzer, int, int)` (`org.jetbrains.kotlin.codegen.optimization.fixStack.FixStackAnalyzer`)

|      % |    Size | Samples | Location                                                                 |
| -----: | ------: | ------: | ------------------------------------------------------------------------ |
| 100.0% | 1.5 MiB |       3 | `org.jetbrains.kotlin.codegen.optimization.fixStack.FixStackAnalyzer:46` |

##### `simplifyKnownSafeCallPatterns(TemporaryVariablesEliminationTransformer$ControlFlowGraph)` (`org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer`)

|     % |    Size | Samples | Location                                                                                               |
| ----: | ------: | ------: | ------------------------------------------------------------------------------------------------------ |
| 66.7% |   1 MiB |       2 | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer:433` |
| 33.3% | 512 KiB |       1 | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer:323` |

#### Callers

Callers with the largest contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `<init>(int)` (`java.io.ByteArrayOutputStream`)

|      % |    Size | Samples | Caller                                                  | Location                                               |
| -----: | ------: | ------: | ------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% | 177 MiB |     355 | `loadAllClassesFromJars(Collection, int, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `copyOf(byte[], int)` (`java.util.Arrays`)

|     % |    Size | Samples | Caller                        | Location                          |
| ----: | ------: | ------: | ----------------------------- | --------------------------------- |
| 93.7% | 119 MiB |     238 | `toByteArray()`               | `java.io.ByteArrayOutputStream`   |
|  5.9% | 7.5 MiB |      15 | `ensureCapacityInternal(int)` | `java.lang.AbstractStringBuilder` |
|  0.4% | 512 KiB |       1 | `getBytes()`                  | `jdk.internal.loader.Resource`    |

##### `clone()` (`java.lang.Object`)

|     % |     Size | Samples | Caller                | Location                      |
| ----: | -------: | ------: | --------------------- | ----------------------------- |
| 99.0% | 48.5 MiB |      97 | `copyOf(byte[], int)` | `java.util.Arrays`            |
|  1.0% |  512 KiB |       1 | `clone()`             | `java.lang.invoke.MemberName` |

##### `iterator()` (`java.util.ArrayList`)

|     % |    Size | Samples | Caller                                                                        | Location                                                                                            |
| ----: | ------: | ------: | ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| 10.0% |   2 MiB |       4 | `iterator-impl(List)`                                                         | `org.jetbrains.kotlin.fir.MutableOrEmptyList`                                                       |
|  7.5% | 1.5 MiB |       3 | `acceptChildren(IrVisitor, Object)`                                           | `org.jetbrains.kotlin.ir.declarations.IrFunction`                                                   |
|  5.0% |   1 MiB |       2 | `extractDeprecationAnnotationInfoPerUseSite(List, boolean, FirSession, List)` | `org.jetbrains.kotlin.fir.declarations.DeprecationUtilsKt`                                          |
|  5.0% |   1 MiB |       2 | `acceptChildren(FirVisitor, Object)`                                          | `org.jetbrains.kotlin.fir.declarations.impl.FirAnonymousFunctionImpl`                               |
|  5.0% |   1 MiB |       2 | `computeRelatedToCollectionLiteral()`                                         | `org.jetbrains.kotlin.resolve.calls.inference.components.TypeVariableDependencyInformationProvider` |

##### `<init>(int)` (`org.jetbrains.kotlin.protobuf.ByteString$Output`)

|      % |     Size | Samples | Caller        | Location                                   |
| -----: | -------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 16.5 MiB |      33 | `newOutput()` | `org.jetbrains.kotlin.protobuf.ByteString` |

##### `copyOfRangeByte(byte[], int, int)` (`java.util.Arrays`)

|      % |   Size | Samples | Caller                          | Location           |
| -----: | -----: | ------: | ------------------------------- | ------------------ |
| 100.0% | 12 MiB |      24 | `copyOfRange(byte[], int, int)` | `java.util.Arrays` |

##### `grow(int)` (`java.util.ArrayList`)

|      % |    Size | Samples | Caller   | Location              |
| -----: | ------: | ------: | -------- | --------------------- |
| 100.0% | 8.5 MiB |      17 | `grow()` | `java.util.ArrayList` |

##### `resize()` (`java.util.HashMap`)

|      % |  Size | Samples | Caller                                          | Location            |
| -----: | ----: | ------: | ----------------------------------------------- | ------------------- |
| 100.0% | 6 MiB |      12 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `<init>(int, int)` (`org.jetbrains.org.objectweb.asm.tree.analysis.Frame`)

|     % |    Size | Samples | Caller                                           | Location                                                                                                   |
| ----: | ------: | ------: | ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------- |
| 33.3% |   2 MiB |       4 | `_init_$lambda$0(int, int)`                      | `org.jetbrains.kotlin.codegen.optimization.common.FastMethodAnalyzer`                                      |
| 33.3% |   2 MiB |       4 | `<init>(FixStackAnalyzer, int, int)`             | `org.jetbrains.kotlin.codegen.optimization.fixStack.FixStackAnalyzer$FixStackFrame`                        |
|  8.3% | 512 KiB |       1 | `<init>(UninitializedStoresProcessor, int, int)` | `org.jetbrains.kotlin.codegen.coroutines.UninitializedStoresProcessor$UninitializedNewValueFrame`          |
|  8.3% | 512 KiB |       1 | `<init>(int, int)`                               | `org.jetbrains.kotlin.codegen.inline.MethodInlinerUtilKt$analyzeMethodNodeWithInterpreter$BasicValueFrame` |
|  8.3% | 512 KiB |       1 | `preprocessNodeBeforeInline$lambda$0(int, int)`  | `org.jetbrains.kotlin.codegen.inline.MethodInliner`                                                        |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.LinkedHashMap`)

|      % |    Size | Samples | Caller                                          | Location            |
| -----: | ------: | ------: | ----------------------------------------------- | ------------------- |
| 100.0% | 5.5 MiB |      11 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|     % |    Size | Samples | Caller               | Location                                                                            |
| ----: | ------: | ------: | -------------------- | ----------------------------------------------------------------------------------- |
| 55.6% | 2.5 MiB |       5 | `toArray()`          | `java.util.ArrayList`                                                               |
| 22.2% |   1 MiB |       2 | `ensureCapacity()`   | `com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure`                             |
| 11.1% | 512 KiB |       1 | `addAll(Collection)` | `kotlinx.collections.immutable.implementations.immutableList.SmallPersistentVector` |
| 11.1% | 512 KiB |       1 | `grow(int)`          | `java.util.ArrayList`                                                               |

##### `allocateInstance(Object)` (`java.lang.invoke.DirectMethodHandle`)

|     % |    Size | Samples | Caller                                                                  | Location                                             |
| ----: | ------: | ------: | ----------------------------------------------------------------------- | ---------------------------------------------------- |
| 55.6% | 2.5 MiB |       5 | `newInvokeSpecial(Object, Object)`                                      | `java.lang.invoke.DirectMethodHandle$Holder`         |
| 33.3% | 1.5 MiB |       3 | `newInvokeSpecial(Object, Object, Object)`                              | `java.lang.invoke.DirectMethodHandle$Holder`         |
| 11.1% | 512 KiB |       1 | `newInvokeSpecial(Object, Object, Object, Object, int, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000008801680c00` |

##### `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

|      % |     Size | Samples | Caller                                          | Location                       |
| -----: | -------: | ------: | ----------------------------------------------- | ------------------------------ |
| 100.0% | 4.21 MiB |       3 | `<init>(ZipFile$Source$Key, boolean, ZipCoder)` | `java.util.zip.ZipFile$Source` |

##### `newString(byte[], int, int)` (`java.lang.StringLatin1`)

|      % |  Size | Samples | Caller                | Location           |
| -----: | ----: | ------: | --------------------- | ------------------ |
| 100.0% | 4 MiB |       8 | `substring(int, int)` | `java.lang.String` |

##### `allocateUninitializedArray(Class, int)` (`jdk.internal.misc.Unsafe`)

|      % |  Size | Samples | Caller           | Location                       |
| -----: | ----: | ------: | ---------------- | ------------------------------ |
| 100.0% | 4 MiB |       8 | `newArray(long)` | `java.lang.StringConcatHelper` |

##### `<init>(int)` (`java.lang.AbstractStringBuilder`)

|     % |  Size | Samples | Caller        | Location                  |
| ----: | ----: | ------: | ------------- | ------------------------- |
| 50.0% | 2 MiB |       4 | `<init>(int)` | `java.lang.StringBuilder` |
| 50.0% | 2 MiB |       4 | `<init>()`    | `java.lang.StringBuilder` |

##### `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type$1`)

|      % |  Size | Samples | Caller                                                      | Location                                        |
| -----: | ----: | ------: | ----------------------------------------------------------- | ----------------------------------------------- |
| 100.0% | 4 MiB |       8 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$1` |

##### `<init>()` (`org.jetbrains.kotlin.resolve.calls.inference.model.MutableConstraintStorage`)

|      % |  Size | Samples | Caller                                                                                                | Location                                                                     |
| -----: | ----: | ------: | ----------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| 100.0% | 4 MiB |       8 | `<init>(ConstraintInjector, TypeSystemInferenceExtensionContext, LanguageVersionSettings, Function2)` | `org.jetbrains.kotlin.resolve.calls.inference.model.NewConstraintSystemImpl` |

##### `<init>(int, float, boolean)` (`java.util.HashSet`)

|     % |    Size | Samples | Caller        | Location                  |
| ----: | ------: | ------: | ------------- | ------------------------- |
| 87.5% | 3.5 MiB |       7 | `<init>()`    | `java.util.LinkedHashSet` |
| 12.5% | 512 KiB |       1 | `<init>(int)` | `java.util.LinkedHashSet` |

##### `createZipEntry(String)` (`java.util.zip.ZipInputStream`)

|      % |    Size | Samples | Caller      | Location                       |
| -----: | ------: | ------: | ----------- | ------------------------------ |
| 100.0% | 3.5 MiB |       7 | `readLOC()` | `java.util.zip.ZipInputStream` |

##### `<init>(int)` (`kotlin.collections.builders.MapBuilder`)

|      % |    Size | Samples | Caller     | Location                                 |
| -----: | ------: | ------: | ---------- | ---------------------------------------- |
| 100.0% | 3.5 MiB |       7 | `<init>()` | `kotlin.collections.builders.MapBuilder` |

##### `arrayOfUninitializedElements(int)` (`kotlin.collections.builders.ListBuilderKt`)

|     % |    Size | Samples | Caller                  | Location                                  |
| ----: | ------: | ------: | ----------------------- | ----------------------------------------- |
| 50.0% | 1.5 MiB |       3 | `<init>(int)`           | `kotlin.collections.builders.MapBuilder`  |
| 33.3% |   1 MiB |       2 | `<init>(int)`           | `kotlin.collections.builders.ListBuilder` |
| 16.7% | 512 KiB |       1 | `allocateValuesArray()` | `kotlin.collections.builders.MapBuilder`  |

##### `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`)

|      % |  Size | Samples | Caller                                                                       | Location                                               |
| -----: | ----: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% | 3 MiB |       6 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `contentsToByteArray$lambda$0(ZipEntryDescription, LargeDynamicMappedBuffer$Mapping)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt`)

|      % |  Size | Samples | Caller           | Location                                                                                     |
| -----: | ----: | ------: | ---------------- | -------------------------------------------------------------------------------------------- |
| 100.0% | 3 MiB |       6 | `invoke(Object)` | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt$$Lambda.0x0000008801396428` |

##### `newInstance(OutputStream, int)` (`org.jetbrains.kotlin.protobuf.CodedOutputStream`)

|     % |    Size | Samples | Caller                                            | Location                                                     |
| ----: | ------: | ------: | ------------------------------------------------- | ------------------------------------------------------------ |
| 33.3% |   1 MiB |       2 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Type`                |
| 33.3% |   1 MiB |       2 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$Argument`       |
| 16.7% | 512 KiB |       1 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$ValueParameter`      |
| 16.7% | 512 KiB |       1 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Annotation$Argument` |

##### `copyOfRange(byte[], int, int)` (`java.util.Arrays`)

|     % |    Size | Samples | Caller                                | Location           |
| ----: | ------: | ------: | ------------------------------------- | ------------------ |
| 60.0% | 1.5 MiB |       3 | `<init>(AbstractStringBuilder, Void)` | `java.lang.String` |
| 40.0% |   1 MiB |       2 | `<init>(Charset, byte[], int, int)`   | `java.lang.String` |

##### `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` (`java.lang.ClassLoader`)

|      % |    Size | Samples | Caller                                                    | Location                |
| -----: | ------: | ------: | --------------------------------------------------------- | ----------------------- |
| 100.0% | 2.5 MiB |       5 | `defineClass(String, byte[], int, int, ProtectionDomain)` | `java.lang.ClassLoader` |

##### `toString()` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ByteArrayCharSequence`)

|      % |    Size | Samples | Caller                                    | Location                                                     |
| -----: | ------: | ------: | ----------------------------------------- | ------------------------------------------------------------ |
| 100.0% | 2.5 MiB |       5 | `getOrCreateDirectory(CharSequence, Map)` | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.FastJarHandler` |

##### `newOutput()` (`org.jetbrains.kotlin.protobuf.ByteString`)

|     % |    Size | Samples | Caller                                            | Location                                                                |
| ----: | ------: | ------: | ------------------------------------------------- | ----------------------------------------------------------------------- |
| 20.0% | 512 KiB |       1 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Type`                           |
| 20.0% | 512 KiB |       1 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$ValueParameter`                 |
| 20.0% | 512 KiB |       1 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$TypeParameter`                  |
| 20.0% | 512 KiB |       1 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Annotation`                     |
| 20.0% | 512 KiB |       1 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.jvm.JvmProtoBuf$StringTableTypes$Record` |

##### `simplifyTrivialInstructions(MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer`)

|      % |    Size | Samples | Caller                          | Location                                                                                           |
| -----: | ------: | ------: | ------------------------------- | -------------------------------------------------------------------------------------------------- |
| 100.0% | 2.5 MiB |       5 | `transform(String, MethodNode)` | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer` |

##### `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type$Argument$1`)

|      % |  Size | Samples | Caller                                                      | Location                                                 |
| -----: | ----: | ------: | ----------------------------------------------------------- | -------------------------------------------------------- |
| 100.0% | 2 MiB |       4 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$Argument$1` |

##### `newFieldSet()` (`org.jetbrains.kotlin.protobuf.FieldSet`)

|      % |  Size | Samples | Caller     | Location                                                               |
| -----: | ----: | ------: | ---------- | ---------------------------------------------------------------------- |
| 100.0% | 2 MiB |       4 | `<init>()` | `org.jetbrains.kotlin.protobuf.GeneratedMessageLite$ExtendableMessage` |

##### `newFieldMap(int)` (`org.jetbrains.kotlin.protobuf.SmallSortedMap`)

|      % |  Size | Samples | Caller     | Location                                 |
| -----: | ----: | ------: | ---------- | ---------------------------------------- |
| 100.0% | 2 MiB |       4 | `<init>()` | `org.jetbrains.kotlin.protobuf.FieldSet` |

##### `handleLevel(CandidateCollector, CandidateFactory, CallInfo, ExplicitReceiverKind, TowerGroup, TowerLevel)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.TowerLevelHandler`)

|      % |  Size | Samples | Caller                                                                               | Location                                                               |
| -----: | ----: | ------: | ------------------------------------------------------------------------------------ | ---------------------------------------------------------------------- |
| 100.0% | 2 MiB |       4 | `processLevel(TowerLevel, CallInfo, TowerGroup, ExplicitReceiverKind, Continuation)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask` |

##### `box-impl(List)` (`org.jetbrains.kotlin.fir.MutableOrEmptyList`)

|     % |    Size | Samples | Caller                               | Location                                                           |
| ----: | ------: | ------: | ------------------------------------ | ------------------------------------------------------------------ |
| 25.0% | 512 KiB |       1 | `getContextParameters()`             | `org.jetbrains.kotlin.fir.declarations.impl.FirNamedFunctionImpl`  |
| 25.0% | 512 KiB |       1 | `acceptChildren(FirVisitor, Object)` | `org.jetbrains.kotlin.fir.types.impl.FirResolvedTypeRefImpl`       |
| 25.0% | 512 KiB |       1 | `getBounds()`                        | `org.jetbrains.kotlin.fir.declarations.impl.FirTypeParameterImpl`  |
| 25.0% | 512 KiB |       1 | `getContextParameters()`             | `org.jetbrains.kotlin.fir.declarations.impl.FirPrimaryConstructor` |

##### `getBytes(int, int)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.LargeDynamicMappedBuffer$Mapping`)

|      % |    Size | Samples | Caller                                                                                | Location                                                          |
| -----: | ------: | ------: | ------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| 100.0% | 1.5 MiB |       3 | `contentsToByteArray$lambda$0(ZipEntryDescription, LargeDynamicMappedBuffer$Mapping)` | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt` |

##### `readUtf(int, int, char[])` (`org.jetbrains.org.objectweb.asm.ClassReader`)

|      % |    Size | Samples | Caller                 | Location                                      |
| -----: | ------: | ------: | ---------------------- | --------------------------------------------- |
| 100.0% | 1.5 MiB |       3 | `readUtf(int, char[])` | `org.jetbrains.org.objectweb.asm.ClassReader` |

##### `<init>()` (`org.jetbrains.kotlin.types.AbstractTypeApproximator$Cache`)

|      % |    Size | Samples | Caller                                                                         | Location                                              |
| -----: | ------: | ------: | ------------------------------------------------------------------------------ | ----------------------------------------------------- |
| 100.0% | 1.5 MiB |       3 | `approximateToSuperType(KotlinTypeMarker, TypeApproximatorConfiguration, Map)` | `org.jetbrains.kotlin.types.AbstractTypeApproximator` |

##### `analyzer$lambda$0(FixStackAnalyzer, int, int)` (`org.jetbrains.kotlin.codegen.optimization.fixStack.FixStackAnalyzer`)

|      % |    Size | Samples | Caller                   | Location                                                                                         |
| -----: | ------: | ------: | ------------------------ | ------------------------------------------------------------------------------------------------ |
| 100.0% | 1.5 MiB |       3 | `invoke(Object, Object)` | `org.jetbrains.kotlin.codegen.optimization.fixStack.FixStackAnalyzer$$Lambda.0x00000088018ee940` |

##### `simplifyKnownSafeCallPatterns(TemporaryVariablesEliminationTransformer$ControlFlowGraph)` (`org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer`)

|      % |    Size | Samples | Caller                          | Location                                                                                           |
| -----: | ------: | ------: | ------------------------------- | -------------------------------------------------------------------------------------------------- |
| 100.0% | 1.5 MiB |       3 | `transform(String, MethodNode)` | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer` |

### Total size

Functions with the most bytes allocated within the function and its callees.

|     % |    Size | Samples | Function                                                                                           | Location                                                |
| ----: | ------: | ------: | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 99.8% | 657 MiB |   1,309 | `run(String[])`                                                                                    | `org.jetbrains.kotlin.preloading.Preloader`             |
| 99.8% | 657 MiB |   1,309 | `main(String[])`                                                                                   | `org.jetbrains.kotlin.preloading.Preloader`             |
| 54.7% | 360 MiB |     720 | `loadAllClassesFromJars(Collection, int, ClassHandler)`                                            | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`  |
| 54.7% | 360 MiB |     720 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)`                       | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`  |
| 45.1% | 297 MiB |     589 | `main(String[])`                                                                                   | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`  |
| 45.1% | 297 MiB |     589 | `main(String[])`                                                                                   | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 45.1% | 297 MiB |     589 | `invokeStatic(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$DMH.0x0000008801008000`    |
| 45.1% | 297 MiB |     589 | `invoke(Object, Object, Object)`                                                                   | `java.lang.invoke.LambdaForm$MH.0x0000008801009400`     |
| 45.1% | 297 MiB |     589 | `invokeExact_MT(Object, Object, Object, Object)`                                                   | `java.lang.invoke.Invokers$Holder`                      |
| 45.1% | 297 MiB |     589 | `invokeImpl(Object, Object[])`                                                                     | `jdk.internal.reflect.DirectMethodHandleAccessor`       |
| 45.1% | 297 MiB |     589 | `invoke(Object, Object[])`                                                                         | `jdk.internal.reflect.DirectMethodHandleAccessor`       |
| 45.1% | 297 MiB |     589 | `invoke(Object, Object[])`                                                                         | `java.lang.reflect.Method`                              |
| 44.5% | 293 MiB |     586 | `exec(PrintStream, Services, MessageRenderer, String[])`                                           | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 44.5% | 293 MiB |     586 | `exec(PrintStream, MessageRenderer, String[])`                                                     | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 44.5% | 293 MiB |     586 | `doMainNoExit(CLICompiler, String[], MessageRenderer)`                                             | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 44.5% | 293 MiB |     586 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 44.5% | 293 MiB |     586 | `doMain(CLICompiler, String[])`                                                                    | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 44.4% | 292 MiB |     585 | `exec(MessageCollector, Services, CommonCompilerArguments)`                                        | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 43.8% | 288 MiB |     577 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)`                              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 43.8% | 288 MiB |     577 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)`                             | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |

#### Categories

Categories accounting for at least 1.0% of self size.

##### Standard library

|     % |     Size | Samples | Function                                                                                      | Location                                              |
| ----: | -------: | ------: | --------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| 45.1% |  297 MiB |     589 | `invokeStatic(Object, Object)`                                                                | `java.lang.invoke.LambdaForm$DMH.0x0000008801008000`  |
| 45.1% |  297 MiB |     589 | `invoke(Object, Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x0000008801009400`   |
| 45.1% |  297 MiB |     589 | `invokeExact_MT(Object, Object, Object, Object)`                                              | `java.lang.invoke.Invokers$Holder`                    |
| 45.1% |  297 MiB |     589 | `invokeImpl(Object, Object[])`                                                                | `jdk.internal.reflect.DirectMethodHandleAccessor`     |
| 45.1% |  297 MiB |     589 | `invoke(Object, Object[])`                                                                    | `jdk.internal.reflect.DirectMethodHandleAccessor`     |
| 45.1% |  297 MiB |     589 | `invoke(Object, Object[])`                                                                    | `java.lang.reflect.Method`                            |
| 26.9% |  177 MiB |     355 | `<init>(int)`                                                                                 | `java.io.ByteArrayOutputStream`                       |
| 26.7% |  176 MiB |     351 | `copyOf(byte[], int)`                                                                         | `java.util.Arrays`                                    |
| 25.4% |  168 MiB |     335 | `toByteArray()`                                                                               | `java.io.ByteArrayOutputStream`                       |
|  8.6% | 56.5 MiB |     113 | `resumeWith(Object)`                                                                          | `kotlin.coroutines.jvm.internal.BaseContinuationImpl` |
|  7.4% |   49 MiB |      98 | `clone()`                                                                                     | `java.lang.Object`                                    |
|  3.2% |   21 MiB |      42 | `getValue()`                                                                                  | `kotlin.SafePublicationLazyImpl`                      |
|  3.0% |   20 MiB |      40 | `iterator()`                                                                                  | `java.util.ArrayList`                                 |
|  2.9% |   19 MiB |      38 | `getValue()`                                                                                  | `kotlin.SynchronizedLazyImpl`                         |
|  2.3% |   15 MiB |      30 | `linkCallSiteImpl(Class, MethodHandle, String, MethodType, Object, Object[])`                 | `java.lang.invoke.MethodHandleNatives`                |
|  2.3% |   15 MiB |      30 | `linkCallSite(Object, Object, Object, Object, Object, Object[])`                              | `java.lang.invoke.MethodHandleNatives`                |
|  2.2% | 14.5 MiB |      29 | `copyOfRange(byte[], int, int)`                                                               | `java.util.Arrays`                                    |
|  2.1% |   14 MiB |      28 | `metafactory(MethodHandles$Lookup, String, MethodType, MethodType, MethodHandle, MethodType)` | `java.lang.invoke.LambdaMetafactory`                  |
|  2.1% |   14 MiB |      28 | `invokeExact_MT(Object, Object, Object, Object, Object, Object, Object, Object)`              | `java.lang.invoke.Invokers$Holder`                    |
|  2.1% |   14 MiB |      28 | `invoke(Class, MethodHandle, String, Object, Object, Class)`                                  | `java.lang.invoke.BootstrapMethodInvoker`             |

##### Ours

|     % |    Size | Samples | Function                                                                                                                                      | Location                                                |
| ----: | ------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 99.8% | 657 MiB |   1,309 | `run(String[])`                                                                                                                               | `org.jetbrains.kotlin.preloading.Preloader`             |
| 99.8% | 657 MiB |   1,309 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.preloading.Preloader`             |
| 54.7% | 360 MiB |     720 | `loadAllClassesFromJars(Collection, int, ClassHandler)`                                                                                       | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`  |
| 54.7% | 360 MiB |     720 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)`                                                                  | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`  |
| 45.1% | 297 MiB |     589 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`  |
| 45.1% | 297 MiB |     589 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 44.5% | 293 MiB |     586 | `exec(PrintStream, Services, MessageRenderer, String[])`                                                                                      | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 44.5% | 293 MiB |     586 | `exec(PrintStream, MessageRenderer, String[])`                                                                                                | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 44.5% | 293 MiB |     586 | `doMainNoExit(CLICompiler, String[], MessageRenderer)`                                                                                        | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 44.5% | 293 MiB |     586 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)`                                            | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 44.5% | 293 MiB |     586 | `doMain(CLICompiler, String[])`                                                                                                               | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 44.4% | 292 MiB |     585 | `exec(MessageCollector, Services, CommonCompilerArguments)`                                                                                   | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 43.8% | 288 MiB |     577 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)`                                                                         | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 43.8% | 288 MiB |     577 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)`                                                                        | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 43.8% | 288 MiB |     577 | `execImpl(MessageCollector, Services, CommonCompilerArguments)`                                                                               | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 43.7% | 288 MiB |     576 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)`                                           | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 43.7% | 288 MiB |     576 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 43.7% | 288 MiB |     576 | `execute(CommonCompilerArguments, Services, MessageCollector)`                                                                                | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 43.6% | 287 MiB |     575 | `runPhasedPipeline(ArgumentsPipelineArtifact)`                                                                                                | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 43.4% | 286 MiB |     572 | `phaseBody(PipelineContext, PipelineArtifact)`                                                                                                | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`       |

#### Callers

Callers with the largest contribution to each function's total size. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

|      % |    Size | Samples | Caller           | Location                                    |
| -----: | ------: | ------: | ---------------- | ------------------------------------------- |
| 100.0% | 657 MiB |   1,309 | `main(String[])` | `org.jetbrains.kotlin.preloading.Preloader` |

##### `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`)

|      % |    Size | Samples | Caller                                                                       | Location                                               |
| -----: | ------: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% | 360 MiB |     720 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`)

|      % |     Size | Samples | Caller                                                                       | Location                                               |
| -----: | -------: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% |  360 MiB |     720 | `run(String[])`                                                              | `org.jetbrains.kotlin.preloading.Preloader`            |
|  11.7% | 42.2 MiB |      84 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`)

|      % |    Size | Samples | Caller           | Location                                     |
| -----: | ------: | ------: | ---------------- | -------------------------------------------- |
| 100.0% | 297 MiB |     589 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % |    Size | Samples | Caller                         | Location                                             |
| -----: | ------: | ------: | ------------------------------ | ---------------------------------------------------- |
| 100.0% | 297 MiB |     589 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000008801008000` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000008801008000`)

|      % |    Size | Samples | Caller                           | Location                                            |
| -----: | ------: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% | 297 MiB |     589 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000008801009400` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000008801009400`)

|      % |    Size | Samples | Caller                                           | Location                           |
| -----: | ------: | ------: | ------------------------------------------------ | ---------------------------------- |
| 100.0% | 297 MiB |     589 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % |    Size | Samples | Caller                         | Location                                          |
| -----: | ------: | ------: | ------------------------------ | ------------------------------------------------- |
| 100.0% | 297 MiB |     589 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % |    Size | Samples | Caller                     | Location                                          |
| -----: | ------: | ------: | -------------------------- | ------------------------------------------------- |
| 100.0% | 297 MiB |     589 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % |    Size | Samples | Caller                     | Location                   |
| -----: | ------: | ------: | -------------------------- | -------------------------- |
| 100.0% | 297 MiB |     589 | `invoke(Object, Object[])` | `java.lang.reflect.Method` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

|      % |    Size | Samples | Caller                           | Location                                                                                  |
| -----: | ------: | ------: | -------------------------------- | ----------------------------------------------------------------------------------------- |
| 100.0% | 297 MiB |     589 | `run(String[])`                  | `org.jetbrains.kotlin.preloading.Preloader`                                               |
|   0.3% |   1 MiB |       2 | `loadGetRecordComponents(Class)` | `kotlin.reflect.jvm.internal.impl.descriptors.runtime.structure.Java16SealedRecordLoader` |

##### `exec(PrintStream, Services, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % |    Size | Samples | Caller                                         | Location                                      |
| -----: | ------: | ------: | ---------------------------------------------- | --------------------------------------------- |
| 100.0% | 293 MiB |     586 | `exec(PrintStream, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `exec(PrintStream, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % |    Size | Samples | Caller                                                 | Location                                                |
| -----: | ------: | ------: | ------------------------------------------------------ | ------------------------------------------------------- |
| 100.0% | 293 MiB |     586 | `doMainNoExit(CLICompiler, String[], MessageRenderer)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % |    Size | Samples | Caller                                                                                             | Location                                                |
| -----: | ------: | ------: | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% | 293 MiB |     586 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % |    Size | Samples | Caller                          | Location                                                |
| -----: | ------: | ------: | ------------------------------- | ------------------------------------------------------- |
| 100.0% | 293 MiB |     586 | `doMain(CLICompiler, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `doMain(CLICompiler, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % |    Size | Samples | Caller           | Location                                               |
| -----: | ------: | ------: | ---------------- | ------------------------------------------------------ |
| 100.0% | 293 MiB |     586 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion` |

##### `exec(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % |    Size | Samples | Caller                                                   | Location                                      |
| -----: | ------: | ------: | -------------------------------------------------------- | --------------------------------------------- |
| 100.0% | 292 MiB |     585 | `exec(PrintStream, Services, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % |    Size | Samples | Caller                                                                 | Location                                     |
| -----: | ------: | ------: | ---------------------------------------------------------------------- | -------------------------------------------- |
| 100.0% | 288 MiB |     577 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % |    Size | Samples | Caller                                                          | Location                                      |
| -----: | ------: | ------: | --------------------------------------------------------------- | --------------------------------------------- |
| 100.0% | 288 MiB |     577 | `execImpl(MessageCollector, Services, CommonCompilerArguments)` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % |    Size | Samples | Caller                                                      | Location                                      |
| -----: | ------: | ------: | ----------------------------------------------------------- | --------------------------------------------- |
| 100.0% | 288 MiB |     577 | `exec(MessageCollector, Services, CommonCompilerArguments)` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % |    Size | Samples | Caller                                                                                                                                        | Location                                                |
| -----: | ------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% | 288 MiB |     576 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % |    Size | Samples | Caller                                                         | Location                                                |
| -----: | ------: | ------: | -------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% | 288 MiB |     576 | `execute(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `execute(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % |    Size | Samples | Caller                                                                | Location                                     |
| -----: | ------: | ------: | --------------------------------------------------------------------- | -------------------------------------------- |
| 100.0% | 288 MiB |     576 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % |    Size | Samples | Caller                                                                                              | Location                                                |
| -----: | ------: | ------: | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% | 287 MiB |     575 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

|      % |    Size | Samples | Caller                              | Location                                          |
| -----: | ------: | ------: | ----------------------------------- | ------------------------------------------------- |
| 100.0% | 286 MiB |     572 | `phaseBody(LoggingContext, Object)` | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase` |

##### `<init>(int)` (`java.io.ByteArrayOutputStream`)

|      % |    Size | Samples | Caller                                                  | Location                                               |
| -----: | ------: | ------: | ------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% | 177 MiB |     355 | `loadAllClassesFromJars(Collection, int, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `copyOf(byte[], int)` (`java.util.Arrays`)

|     % |    Size | Samples | Caller                        | Location                          |
| ----: | ------: | ------: | ----------------------------- | --------------------------------- |
| 95.4% | 168 MiB |     335 | `toByteArray()`               | `java.io.ByteArrayOutputStream`   |
|  4.3% | 7.5 MiB |      15 | `ensureCapacityInternal(int)` | `java.lang.AbstractStringBuilder` |
|  0.3% | 512 KiB |       1 | `getBytes()`                  | `jdk.internal.loader.Resource`    |

##### `toByteArray()` (`java.io.ByteArrayOutputStream`)

|      % |    Size | Samples | Caller                                                  | Location                                               |
| -----: | ------: | ------: | ------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% | 168 MiB |     335 | `loadAllClassesFromJars(Collection, int, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `resumeWith(Object)` (`kotlin.coroutines.jvm.internal.BaseContinuationImpl`)

|     % |     Size | Samples | Caller                                                             | Location                                                              |
| ----: | -------: | ------: | ------------------------------------------------------------------ | --------------------------------------------------------------------- |
| 93.8% |   53 MiB |     106 | `resumeTask(TowerResolveManager$SuspendedResolverTask)`            | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager`    |
| 34.5% | 19.5 MiB |      39 | `processCandidate(Candidate, ResolutionContext, boolean, boolean)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner` |
|  0.9% |  512 KiB |       1 | `run()`                                                            | `kotlinx.coroutines.DispatchedTask`                                   |
|  0.9% |  512 KiB |       1 | `hasNext()`                                                        | `kotlin.sequences.SequenceBuilderIterator`                            |

##### `clone()` (`java.lang.Object`)

|     % |     Size | Samples | Caller                | Location                      |
| ----: | -------: | ------: | --------------------- | ----------------------------- |
| 99.0% | 48.5 MiB |      97 | `copyOf(byte[], int)` | `java.util.Arrays`            |
|  1.0% |  512 KiB |       1 | `clone()`             | `java.lang.invoke.MemberName` |

##### `getValue()` (`kotlin.SafePublicationLazyImpl`)

|     % |     Size | Samples | Caller                     | Location                                                                        |
| ----: | -------: | ------: | -------------------------- | ------------------------------------------------------------------------------- |
| 64.3% | 13.5 MiB |      27 | `getAnnotationInfo()`      | `org.jetbrains.kotlin.fir.java.deserialization.JvmBinaryAnnotationDeserializer` |
| 19.0% |    4 MiB |       8 | `getJavaField()`           | `kotlin.reflect.jvm.internal.DescriptorKProperty`                               |
| 11.9% |  2.5 MiB |       5 | `getDeclarations()`        | `org.jetbrains.kotlin.fir.java.FirLazyJavaDeclarationList`                      |
| 11.9% |  2.5 MiB |       5 | `getCallablesIndex()`      | `org.jetbrains.kotlin.fir.scopes.impl.FirClassDeclaredMemberScopeImpl`          |
| 11.9% |  2.5 MiB |       5 | `getCallableNamesCached()` | `org.jetbrains.kotlin.fir.scopes.impl.AbstractFirUseSiteMemberScope`            |

##### `iterator()` (`java.util.ArrayList`)

|     % |    Size | Samples | Caller                                                                        | Location                                                                                            |
| ----: | ------: | ------: | ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| 10.0% |   2 MiB |       4 | `iterator-impl(List)`                                                         | `org.jetbrains.kotlin.fir.MutableOrEmptyList`                                                       |
|  7.5% | 1.5 MiB |       3 | `acceptChildren(IrVisitor, Object)`                                           | `org.jetbrains.kotlin.ir.declarations.IrFunction`                                                   |
|  5.0% |   1 MiB |       2 | `extractDeprecationAnnotationInfoPerUseSite(List, boolean, FirSession, List)` | `org.jetbrains.kotlin.fir.declarations.DeprecationUtilsKt`                                          |
|  5.0% |   1 MiB |       2 | `acceptChildren(FirVisitor, Object)`                                          | `org.jetbrains.kotlin.fir.declarations.impl.FirAnonymousFunctionImpl`                               |
|  5.0% |   1 MiB |       2 | `computeRelatedToCollectionLiteral()`                                         | `org.jetbrains.kotlin.resolve.calls.inference.components.TypeVariableDependencyInformationProvider` |

##### `getValue()` (`kotlin.SynchronizedLazyImpl`)

|     % |    Size | Samples | Caller                           | Location                                                         |
| ----: | ------: | ------: | -------------------------------- | ---------------------------------------------------------------- |
| 34.2% | 6.5 MiB |      13 | `getMyChildren()`                | `org.jetbrains.kotlin.cli.jvm.modules.CoreJrtVirtualFile`        |
| 15.8% |   3 MiB |       6 | `getSuperTypeRefs()`             | `org.jetbrains.kotlin.fir.java.declarations.FirJavaClass`        |
| 15.8% |   3 MiB |       6 | `getInstance()`                  | `org.jetbrains.kotlin.builtins.DefaultBuiltIns$Companion`        |
|  7.9% | 1.5 MiB |       3 | `getTopLevelFunctionNameIndex()` | `org.jetbrains.kotlin.fir.deserialization.PackagePartsCacheData` |
|  7.9% | 1.5 MiB |       3 | `get_defaultType()`              | `org.jetbrains.kotlin.ir.descriptors.IrBasedClassDescriptor`     |

##### `linkCallSiteImpl(Class, MethodHandle, String, MethodType, Object, Object[])` (`java.lang.invoke.MethodHandleNatives`)

|      % |   Size | Samples | Caller                                                           | Location                               |
| -----: | -----: | ------: | ---------------------------------------------------------------- | -------------------------------------- |
| 100.0% | 15 MiB |      30 | `linkCallSite(Object, Object, Object, Object, Object, Object[])` | `java.lang.invoke.MethodHandleNatives` |

##### `linkCallSite(Object, Object, Object, Object, Object, Object[])` (`java.lang.invoke.MethodHandleNatives`)

|    % |    Size | Samples | Caller                                                                  | Location                                                                             |
| ---: | ------: | ------: | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| 6.7% |   1 MiB |       2 | `<clinit>()`                                                            | `org.jetbrains.kotlin.load.java.typeEnhancement.PredefinedEnhancementInfoKt`         |
| 3.3% | 512 KiB |       1 | `generateSequence(Function0)`                                           | `kotlin.sequences.SequencesKt__SequencesKt`                                          |
| 3.3% | 512 KiB |       1 | `toList()`                                                              | `java.util.stream.Collectors`                                                        |
| 3.3% | 512 KiB |       1 | `<init>()`                                                              | `org.jetbrains.kotlin.scripting.definitions.ScriptDefinition$FromConfigurationsBase` |
| 3.3% | 512 KiB |       1 | `parseCentralDirectoryRecordsNumberAndOffset(LargeDynamicMappedBuffer)` | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt`                    |

##### `copyOfRange(byte[], int, int)` (`java.util.Arrays`)

|     % |    Size | Samples | Caller                                           | Location                 |
| ----: | ------: | ------: | ------------------------------------------------ | ------------------------ |
| 31.0% | 4.5 MiB |       9 | `newStringUTF8NoRepl(byte[], int, int, boolean)` | `java.lang.String`       |
| 31.0% | 4.5 MiB |       9 | `<init>(AbstractStringBuilder, Void)`            | `java.lang.String`       |
| 27.6% |   4 MiB |       8 | `newString(byte[], int, int)`                    | `java.lang.StringLatin1` |
| 10.3% | 1.5 MiB |       3 | `<init>(Charset, byte[], int, int)`              | `java.lang.String`       |

##### `metafactory(MethodHandles$Lookup, String, MethodType, MethodType, MethodHandle, MethodType)` (`java.lang.invoke.LambdaMetafactory`)

|     % |   Size | Samples | Caller                                                                 | Location                                             |
| ----: | -----: | ------: | ---------------------------------------------------------------------- | ---------------------------------------------------- |
| 92.9% | 13 MiB |      26 | `invokeStatic(Object, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000008801230000` |
|  7.1% |  1 MiB |       2 | `invokeStatic(Object, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### `invokeExact_MT(Object, Object, Object, Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % |   Size | Samples | Caller                                                       | Location                                  |
| -----: | -----: | ------: | ------------------------------------------------------------ | ----------------------------------------- |
| 100.0% | 14 MiB |      28 | `invoke(Class, MethodHandle, String, Object, Object, Class)` | `java.lang.invoke.BootstrapMethodInvoker` |

##### `invoke(Class, MethodHandle, String, Object, Object, Class)` (`java.lang.invoke.BootstrapMethodInvoker`)

|      % |   Size | Samples | Caller                                                      | Location                    |
| -----: | -----: | ------: | ----------------------------------------------------------- | --------------------------- |
| 100.0% | 14 MiB |      28 | `makeSite(MethodHandle, String, MethodType, Object, Class)` | `java.lang.invoke.CallSite` |

#### Callees

Callees with the largest contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

|     % |    Size | Samples | Callee                                                                       | Location                                               |
| ----: | ------: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------------ |
| 54.8% | 360 MiB |     720 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |
| 45.2% | 297 MiB |     589 | `invoke(Object, Object[])`                                                   | `java.lang.reflect.Method`                             |

##### `main(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

|      % |    Size | Samples | Callee          | Location                                    |
| -----: | ------: | ------: | --------------- | ------------------------------------------- |
| 100.0% | 657 MiB |   1,309 | `run(String[])` | `org.jetbrains.kotlin.preloading.Preloader` |

##### `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`)

|     % |     Size | Samples | Callee                | Location                        |
| ----: | -------: | ------: | --------------------- | ------------------------------- |
| 49.3% |  177 MiB |     355 | `<init>(int)`         | `java.io.ByteArrayOutputStream` |
| 46.6% |  168 MiB |     335 | `toByteArray()`       | `java.io.ByteArrayOutputStream` |
|  3.2% | 11.5 MiB |      23 | `getNextEntry()`      | `java.util.zip.ZipInputStream`  |
|  0.1% |  512 KiB |       1 | `put(Object, Object)` | `java.util.HashMap`             |

##### `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`)

|      % |     Size | Samples | Callee                                                                       | Location                                               |
| -----: | -------: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% |  360 MiB |     720 | `loadAllClassesFromJars(Collection, int, ClassHandler)`                      | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |
|  11.7% | 42.2 MiB |      84 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`)

|     % |     Size | Samples | Callee                          | Location                                                |
| ----: | -------: | ------: | ------------------------------- | ------------------------------------------------------- |
| 98.6% |  293 MiB |     586 | `doMain(CLICompiler, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
|  1.4% | 4.21 MiB |       3 | `<init>()`                      | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % |    Size | Samples | Callee           | Location                                               |
| -----: | ------: | ------: | ---------------- | ------------------------------------------------------ |
| 100.0% | 297 MiB |     589 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000008801008000`)

|      % |    Size | Samples | Callee           | Location                                     |
| -----: | ------: | ------: | ---------------- | -------------------------------------------- |
| 100.0% | 297 MiB |     589 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000008801009400`)

|      % |    Size | Samples | Callee                         | Location                                             |
| -----: | ------: | ------: | ------------------------------ | ---------------------------------------------------- |
| 100.0% | 297 MiB |     589 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000008801008000` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % |    Size | Samples | Callee                           | Location                                            |
| -----: | ------: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% | 297 MiB |     589 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000008801009400` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % |    Size | Samples | Callee                                           | Location                           |
| -----: | ------: | ------: | ------------------------------------------------ | ---------------------------------- |
| 100.0% | 297 MiB |     589 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % |    Size | Samples | Callee                         | Location                                          |
| -----: | ------: | ------: | ------------------------------ | ------------------------------------------------- |
| 100.0% | 297 MiB |     589 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

|      % |    Size | Samples | Callee                            | Location                                          |
| -----: | ------: | ------: | --------------------------------- | ------------------------------------------------- |
| 100.0% | 297 MiB |     589 | `invoke(Object, Object[])`        | `jdk.internal.reflect.DirectMethodHandleAccessor` |
|   0.2% | 512 KiB |       1 | `acquireMethodAccessor()`         | `java.lang.reflect.Method`                        |
|   0.2% | 512 KiB |       1 | `invoke(Object, Object[], Class)` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `exec(PrintStream, Services, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|     % |    Size | Samples | Callee                                                                               | Location                                                                |
| ----: | ------: | ------: | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------- |
| 99.8% | 292 MiB |     585 | `exec(MessageCollector, Services, CommonCompilerArguments)`                          | `org.jetbrains.kotlin.cli.common.CLICompiler`                           |
|  0.2% | 512 KiB |       1 | `parseCommandLineArguments$default(List, CommonToolArguments, boolean, int, Object)` | `org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt` |

##### `exec(PrintStream, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % |    Size | Samples | Callee                                                   | Location                                      |
| -----: | ------: | ------: | -------------------------------------------------------- | --------------------------------------------- |
| 100.0% | 293 MiB |     586 | `exec(PrintStream, Services, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % |    Size | Samples | Callee                                         | Location                                      |
| -----: | ------: | ------: | ---------------------------------------------- | --------------------------------------------- |
| 100.0% | 293 MiB |     586 | `exec(PrintStream, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % |    Size | Samples | Callee                                                 | Location                                                |
| -----: | ------: | ------: | ------------------------------------------------------ | ------------------------------------------------------- |
| 100.0% | 293 MiB |     586 | `doMainNoExit(CLICompiler, String[], MessageRenderer)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `doMain(CLICompiler, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % |    Size | Samples | Callee                                                                                             | Location                                                |
| -----: | ------: | ------: | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% | 293 MiB |     586 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `exec(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|     % |    Size | Samples | Callee                                                          | Location                                      |
| ----: | ------: | ------: | --------------------------------------------------------------- | --------------------------------------------- |
| 98.6% | 288 MiB |     577 | `execImpl(MessageCollector, Services, CommonCompilerArguments)` | `org.jetbrains.kotlin.cli.common.CLICompiler` |
|  1.4% |   4 MiB |       8 | `<clinit>()`                                                    | `org.jetbrains.kotlin.cli.common.ArgumentsKt` |

##### `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|     % |    Size | Samples | Callee                                                         | Location                                                |
| ----: | ------: | ------: | -------------------------------------------------------------- | ------------------------------------------------------- |
| 99.8% | 288 MiB |     576 | `execute(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
|  0.2% | 512 KiB |       1 | `getDefaultPerformanceManager()`                               | `org.jetbrains.kotlin.cli.common.CLICompiler`           |

##### `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % |    Size | Samples | Callee                                                                | Location                                     |
| -----: | ------: | ------: | --------------------------------------------------------------------- | -------------------------------------------- |
| 100.0% | 288 MiB |     577 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % |    Size | Samples | Callee                                                                 | Location                                     |
| -----: | ------: | ------: | ---------------------------------------------------------------------- | -------------------------------------------- |
| 100.0% | 288 MiB |     577 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|     % |    Size | Samples | Callee                                         | Location                                                |
| ----: | ------: | ------: | ---------------------------------------------- | ------------------------------------------------------- |
| 99.8% | 287 MiB |     575 | `runPhasedPipeline(ArgumentsPipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
|  0.2% | 512 KiB |       1 | `<clinit>()`                                   | `com.intellij.openapi.util.Disposer`                    |

##### `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % |    Size | Samples | Callee                                                                                              | Location                                                |
| -----: | ------: | ------: | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% | 288 MiB |     576 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `execute(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % |    Size | Samples | Callee                                                                                                                                        | Location                                                |
| -----: | ------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% | 288 MiB |     576 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|     % |    Size | Samples | Callee                                                                          | Location                                                                    |
| ----: | ------: | ------: | ------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| 99.5% | 286 MiB |     572 | `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)`            | `org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`                        |
|  0.5% | 1.5 MiB |       3 | `reportToMessageCollector(BaseDiagnosticsCollector, MessageCollector, boolean)` | `org.jetbrains.kotlin.cli.common.fir.FirDiagnosticsCompilerResultsReporter` |

##### `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

|     % |     Size | Samples | Callee                           | Location                                                              |
| ----: | -------: | ------: | -------------------------------- | --------------------------------------------------------------------- |
| 71.7% |  205 MiB |     410 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`      |
| 22.2% | 63.5 MiB |     127 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`       |
|  5.8% | 16.5 MiB |      33 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFir2IrPipelinePhase`        |
|  0.2% |  512 KiB |       1 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmConfigurationPipelinePhase` |
|  0.2% |  512 KiB |       1 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmWriteOutputsPhase`          |

##### `copyOf(byte[], int)` (`java.util.Arrays`)

|     % |     Size | Samples | Callee    | Location           |
| ----: | -------: | ------: | --------- | ------------------ |
| 27.6% | 48.5 MiB |      97 | `clone()` | `java.lang.Object` |

##### `toByteArray()` (`java.io.ByteArrayOutputStream`)

|      % |    Size | Samples | Callee                | Location           |
| -----: | ------: | ------: | --------------------- | ------------------ |
| 100.0% | 168 MiB |     335 | `copyOf(byte[], int)` | `java.util.Arrays` |

##### `resumeWith(Object)` (`kotlin.coroutines.jvm.internal.BaseContinuationImpl`)

|     % |     Size | Samples | Callee                  | Location                                                                                                      |
| ----: | -------: | ------: | ----------------------- | ------------------------------------------------------------------------------------------------------------- |
| 77.0% | 43.5 MiB |      87 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask$processLevel$6`                         |
| 34.5% | 19.5 MiB |      39 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner$processCandidate$1`                      |
|  9.7% |  5.5 MiB |      11 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver$enqueueResolutionTasks$2`                      |
|  3.5% |    2 MiB |       4 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirInvokeResolveTowerExtension$enqueueResolverTasksForInvoke$3` |
|  2.7% |  1.5 MiB |       3 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver$enqueueResolutionTasks$1`                      |

##### `getValue()` (`kotlin.SafePublicationLazyImpl`)

|     % |     Size | Samples | Callee     | Location                                                                                                   |
| ----: | -------: | ------: | ---------- | ---------------------------------------------------------------------------------------------------------- |
| 64.3% | 13.5 MiB |      27 | `invoke()` | `org.jetbrains.kotlin.fir.java.deserialization.JvmBinaryAnnotationDeserializer$$Lambda.0x00000088015d7710` |
| 19.0% |    4 MiB |       8 | `invoke()` | `kotlin.reflect.jvm.internal.DescriptorKProperty$$Lambda$0`                                                |
| 11.9% |  2.5 MiB |       5 | `invoke()` | `org.jetbrains.kotlin.fir.java.FirLazyJavaDeclarationList$$Lambda.0x000000880160f098`                      |
| 11.9% |  2.5 MiB |       5 | `invoke()` | `org.jetbrains.kotlin.fir.scopes.impl.FirClassDeclaredMemberScopeImpl$$Lambda.0x0000008801627d80`          |
| 11.9% |  2.5 MiB |       5 | `invoke()` | `org.jetbrains.kotlin.fir.scopes.impl.AbstractFirUseSiteMemberScope$$Lambda.0x000000880162f710`            |

##### `getValue()` (`kotlin.SynchronizedLazyImpl`)

|     % |    Size | Samples | Callee     | Location                                                                                    |
| ----: | ------: | ------: | ---------- | ------------------------------------------------------------------------------------------- |
| 34.2% | 6.5 MiB |      13 | `invoke()` | `org.jetbrains.kotlin.cli.jvm.modules.CoreJrtVirtualFile$$Lambda.0x0000008801390000`        |
| 15.8% |   3 MiB |       6 | `invoke()` | `org.jetbrains.kotlin.fir.java.declarations.FirJavaClass$$Lambda.0x000000880160f940`        |
| 15.8% |   3 MiB |       6 | `invoke()` | `org.jetbrains.kotlin.builtins.DefaultBuiltIns$$Lambda.0x0000008801755fe8`                  |
|  7.9% | 1.5 MiB |       3 | `invoke()` | `org.jetbrains.kotlin.fir.deserialization.PackagePartsCacheData$$Lambda.0x00000088015d9388` |
|  7.9% | 1.5 MiB |       3 | `invoke()` | `org.jetbrains.kotlin.ir.descriptors.IrBasedClassDescriptor$$Lambda.0x0000008801817910`     |

##### `linkCallSiteImpl(Class, MethodHandle, String, MethodType, Object, Object[])` (`java.lang.invoke.MethodHandleNatives`)

|     % |   Size | Samples | Callee                                                      | Location                    |
| ----: | -----: | ------: | ----------------------------------------------------------- | --------------------------- |
| 93.3% | 14 MiB |      28 | `makeSite(MethodHandle, String, MethodType, Object, Class)` | `java.lang.invoke.CallSite` |
|  6.7% |  1 MiB |       2 | `linkToTargetMethod(MethodType)`                            | `java.lang.invoke.Invokers` |

##### `linkCallSite(Object, Object, Object, Object, Object, Object[])` (`java.lang.invoke.MethodHandleNatives`)

|      % |   Size | Samples | Callee                                                                        | Location                               |
| -----: | -----: | ------: | ----------------------------------------------------------------------------- | -------------------------------------- |
| 100.0% | 15 MiB |      30 | `linkCallSiteImpl(Class, MethodHandle, String, MethodType, Object, Object[])` | `java.lang.invoke.MethodHandleNatives` |

##### `copyOfRange(byte[], int, int)` (`java.util.Arrays`)

|     % |   Size | Samples | Callee                              | Location           |
| ----: | -----: | ------: | ----------------------------------- | ------------------ |
| 82.8% | 12 MiB |      24 | `copyOfRangeByte(byte[], int, int)` | `java.util.Arrays` |

##### `metafactory(MethodHandles$Lookup, String, MethodType, MethodType, MethodHandle, MethodType)` (`java.lang.invoke.LambdaMetafactory`)

|     % |     Size | Samples | Callee                                                                                                                   | Location                                       |
| ----: | -------: | ------: | ------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------- |
| 75.0% | 10.5 MiB |      21 | `buildCallSite()`                                                                                                        | `java.lang.invoke.InnerClassLambdaMetafactory` |
| 21.4% |    3 MiB |       6 | `<init>(MethodHandles$Lookup, MethodType, String, MethodType, MethodHandle, MethodType, boolean, Class[], MethodType[])` | `java.lang.invoke.InnerClassLambdaMetafactory` |

##### `invokeExact_MT(Object, Object, Object, Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|     % |   Size | Samples | Callee                                                                 | Location                                             |
| ----: | -----: | ------: | ---------------------------------------------------------------------- | ---------------------------------------------------- |
| 92.9% | 13 MiB |      26 | `invokeStatic(Object, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000008801230000` |
|  7.1% |  1 MiB |       2 | `invokeStatic(Object, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### `invoke(Class, MethodHandle, String, Object, Object, Class)` (`java.lang.invoke.BootstrapMethodInvoker`)

|      % |   Size | Samples | Callee                                                                           | Location                           |
| -----: | -----: | ------: | -------------------------------------------------------------------------------- | ---------------------------------- |
| 100.0% | 14 MiB |      28 | `invokeExact_MT(Object, Object, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

## Hottest call stacks

Call stacks with the most bytes allocated in their leaf frame.

Common call stack: `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`

|     % |     Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ----: | -------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 24.0% |  158 MiB |     316 | `<init>(int)` (`java.io.ByteArrayOutputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 17.6% |  116 MiB |     232 | `copyOf(byte[], int)` (`java.util.Arrays`) ← `toByteArray()` (`java.io.ByteArrayOutputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  4.9% | 32.5 MiB |      65 | `clone()` (`java.lang.Object`) ← `copyOf(byte[], int)` (`java.util.Arrays`) ← `toByteArray()` (`java.io.ByteArrayOutputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  3.0% | 19.5 MiB |      39 | `<init>(int)` (`java.io.ByteArrayOutputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  2.4% |   16 MiB |      32 | `clone()` (`java.lang.Object`) ← `copyOf(byte[], int)` (`java.util.Arrays`) ← `toByteArray()` (`java.io.ByteArrayOutputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  0.6% | 4.21 MiB |       3 | `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`) ← `<init>(ZipFile$Source$Key, boolean, ZipCoder)` ← `get(File, boolean, ZipCoder)` ← `<init>(ZipFile, ZipCoder, File, int)` (`java.util.zip.ZipFile$CleanableResource`) ← `<init>(File, int, Charset)` (`java.util.zip.ZipFile`) ← `<init>(File, int)` ← `<init>(File, boolean, int, Runtime$Version)` (`java.util.jar.JarFile`) ← `getJarFile(URL)` (`jdk.internal.loader.URLClassPath$JarLoader`) ← `run()` (`jdk.internal.loader.URLClassPath$JarLoader$1`) ← `run()` ← `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` (`java.security.AccessController`) ← `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` ← `ensureOpen()` (`jdk.internal.loader.URLClassPath$JarLoader`) ← `<init>(URL, URLStreamHandler, HashMap, AccessControlContext)` ← `run()` (`jdk.internal.loader.URLClassPath$3`) ← `run()` ← `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` (`java.security.AccessController`) ← `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` ← `getLoader(URL)` (`jdk.internal.loader.URLClassPath`) ← `getLoader(int)` ← `findResource(String, boolean)` ← `run()` (`java.net.URLClassLoader$2`) ← `run()` ← `executePrivileged(PrivilegedAction, AccessControlContext, Class)` (`java.security.AccessController`) ← `doPrivileged(PrivilegedAction, AccessControlContext)` ← `findResource(String)` (`java.net.URLClassLoader`) ← `getResource(String)` (`java.lang.ClassLoader`) ← `getResource(String)` (`org.jetbrains.kotlin.preloading.MemoryBasedClassLoader`) ← `<init>()` (`org.jetbrains.kotlin.cli.common.CLICompiler`) ← `<init>()` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`) ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000008801008000`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000008801009400`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  0.6% |    4 MiB |       8 | `copyOfRangeByte(byte[], int, int)` (`java.util.Arrays`) ← `copyOfRange(byte[], int, int)` ← `newStringUTF8NoRepl(byte[], int, int, boolean)` (`java.lang.String`) ← `newStringUTF8NoRepl(byte[], int, int)` (`java.lang.System$2`) ← `toString(byte[], int, int)` (`java.util.zip.ZipCoder$UTF8ZipCoder`) ← `toStringUTF8(byte[], int)` (`java.util.zip.ZipCoder`) ← `readLOC()` (`java.util.zip.ZipInputStream`) ← `getNextEntry()` ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  0.5% | 3.19 MiB |       6 | `copyOf(byte[], int)` (`java.util.Arrays`) ← `toByteArray()` (`java.io.ByteArrayOutputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  0.5% |    3 MiB |       6 | `createZipEntry(String)` (`java.util.zip.ZipInputStream`) ← `readLOC()` ← `getNextEntry()` ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  0.4% |  2.5 MiB |       5 | `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  0.4% |  2.5 MiB |       5 | `simplifyTrivialInstructions(MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer`) ← `transform(String, MethodNode)` ← `transform(String, MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.transformer.CompositeMethodTransformer`) ← `performTransformations(MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`) ← `visitEnd()` (`org.jetbrains.kotlin.codegen.TransformationMethodVisitor`) ← `visitEnd()` (`org.jetbrains.org.objectweb.asm.MethodVisitor`) ← `accept(MethodVisitor)` (`org.jetbrains.org.objectweb.asm.tree.MethodNode`) ← `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen(JvmIrCodegenFactory$CodegenInput)` ← `runCodegen$org_jetbrains_kotlin_cli_jvm(JvmIrCodegenFactory$CodegenInput, GenerationState, JvmIrCodegenFactory, BaseDiagnosticsCollector, CompilerConfiguration, boolean)` (`org.jetbrains.kotlin.cli.jvm.compiler.KotlinToJVMBytecodeCompiler`) ← `executePhase(JvmFir2IrPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`) ← `executePhase(PipelineArtifact)` ← `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`) ← `phaseBody(LoggingContext, Object)` ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`) ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.backend.common.phaser.CompositePhase`) ← `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`) ← `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`) ← `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` ← `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` ← `execute(CommonCompilerArguments, Services, MessageCollector)` ← `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` ← `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`) ← `exec(MessageCollector, Services, CommonCompilerArguments)` ← `exec(PrintStream, Services, MessageRenderer, String[])` ← `exec(PrintStream, MessageRenderer, String[])` ← `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`) ← `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` ← `doMain(CLICompiler, String[])` ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`) ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000008801008000`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000008801009400`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  0.3% |    2 MiB |       4 | `toString()` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ByteArrayCharSequence`) ← `getOrCreateDirectory(CharSequence, Map)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.FastJarHandler`) ← `createFile(ZipEntryDescription, Map)` ← `<init>(FastJarFileSystem, String)` ← `myHandlers$lambda$0(FastJarFileSystem, String)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.FastJarFileSystem`) ← `invoke(Object)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.FastJarFileSystem$$Lambda.0x000000880135bd38`) ← `myHandlers$lambda$1(Function1, Object)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.FastJarFileSystem`) ← `fun(Object)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.FastJarFileSystem$$Lambda.0x000000880135bf70`) ← `create(Object)` (`com.intellij.util.containers.ConcurrentFactoryMap$2`) ← `get(Object)` (`com.intellij.util.containers.ConcurrentFactoryMap`) ← `findFileByPath(String)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.FastJarFileSystem`) ← `findJarRoot(VirtualFileSystem, File)` (`org.jetbrains.kotlin.cli.jvm.compiler.legacy.pipeline.JvmCompilerPipelineKt`) ← `contentRootToVirtualFile(JvmContentRootBase, VirtualFileSystem, VirtualFileSystem, CompilerConfiguration)` ← `createProjectEnvironment$lambda$0(CoreLocalFileSystem, KotlinCoreEnvironment$ProjectEnvironment, CompilerConfiguration, JvmContentRootBase)` ← `invoke(Object)` (`org.jetbrains.kotlin.cli.jvm.compiler.legacy.pipeline.JvmCompilerPipelineKt$$Lambda.0x00000088013915c8`) ← `convertClasspathRoots(List)` (`org.jetbrains.kotlin.cli.jvm.compiler.ClasspathRootsResolver`) ← `createProjectEnvironment(CompilerConfiguration, Disposable, EnvironmentConfigFiles)` (`org.jetbrains.kotlin.cli.jvm.compiler.legacy.pipeline.JvmCompilerPipelineKt`) ← `createEnvironmentAndSources(CompilerConfiguration, Disposable, String)` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`) ← `executePhase(ConfigurationPipelineArtifact)` ← `executePhase(PipelineArtifact)` ← `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`) ← `phaseBody(LoggingContext, Object)` ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`) ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.backend.common.phaser.CompositePhase`) ← `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`) ← `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`) ← `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` ← `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` ← `execute(CommonCompilerArguments, Services, MessageCollector)` ← `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` ← `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`) ← `exec(MessageCollector, Services, CommonCompilerArguments)` ← `exec(PrintStream, Services, MessageRenderer, String[])` ← `exec(PrintStream, MessageRenderer, String[])` ← `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`) ← `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` ← `doMain(CLICompiler, String[])` ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`) ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000008801008000`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000008801009400`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  0.3% |    2 MiB |       4 | `<init>(int)` (`org.jetbrains.kotlin.protobuf.ByteString$Output`) ← `newOutput()` (`org.jetbrains.kotlin.protobuf.ByteString`) ← `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type`) ← `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `readMessage(Parser, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.CodedInputStream`) ← `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Function`) ← `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Function$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `readMessage(Parser, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.CodedInputStream`) ← `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Package`) ← `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Package$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `parsePartialFrom(InputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.AbstractParser`) ← `parseFrom(InputStream, ExtensionRegistryLite)` ← `parseFrom(InputStream, ExtensionRegistryLite)` ← `parseFrom(InputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Package`) ← `readPackageDataFrom(byte[], String[])` (`org.jetbrains.kotlin.metadata.jvm.deserialization.JvmProtoBufUtil`) ← `readPackageDataFrom(String[], String[])` ← `computePackagePartInfo(FqName, String)` (`org.jetbrains.kotlin.fir.java.deserialization.JvmClassFileBasedSymbolProvider`) ← `computePackagePartsInfos(FqName)` ← `tryComputePackagePartInfos(FqName)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider`) ← `access$tryComputePackagePartInfos(AbstractFirDeserializedSymbolProvider, FqName)` ← `invoke(Object, Void)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider$special$$inlined$createCache$2`) ← `invoke(Object, Object)` ← `getValue(Object, Object)` (`org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache`) ← `getPackageParts(FqName)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider`) ← `access$getPackageParts(AbstractFirDeserializedSymbolProvider, FqName)` ← `computeTopLevelCallableNames(FqName)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider$symbolNamesProvider$1`) ← `invoke(Object, Void)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider$topLevelCallableNamesByPackage_delegate$lambda$0$$inlined$createCache$1`) ← `invoke(Object, Object)` ← `getValue(Object, Object)` (`org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache`) ← `getTopLevelCallableNamesInPackage(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider`) ← `computeTopLevelCallableNames(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCompositeCachedSymbolNamesProvider`) ← `computeTopLevelCallableNames(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider$symbolNamesProvider$1`) ← `invoke(Object, Void)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider$topLevelCallableNamesByPackage_delegate$lambda$0$$inlined$createCache$1`) ← `invoke(Object, Object)` ← `getValue(Object, Object)` (`org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache`) ← `getTopLevelCallableNamesInPackage(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider`) ← `mayHaveTopLevelCallable(FqName, Name)` (`org.jetbrains.kotlin.fir.resolve.providers.FirSymbolNamesProvider`) ← `getTopLevelPropertySymbolsTo(List, FqName, Name)` (`org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider`) ← `getTopLevelPropertySymbols(FqName, Name)` (`org.jetbrains.kotlin.fir.resolve.providers.FirSymbolProvider`) ← `processPropertiesByName(Name, Function1)` (`org.jetbrains.kotlin.fir.scopes.impl.FirSingleLevelDefaultStarImportingScope`) ← `invoke(FirScope, Name, Function1)` (`org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope$processPropertiesByName$1`) ← `invoke(Object, Object, Object)` ← `processSymbolsByName(Name, Function3, Function1)` (`org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope`) ← `processPropertiesByName(Name, Function1)` ← `getProperties(FirScope, Name)` (`org.jetbrains.kotlin.fir.scopes.FirScopeKt`) ← `resolveFromImportScope(FirQualifiedAccessExpression)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer$FirEnumAnnotationArgumentsTransformer`) ← `resolveQualifiedAccessAndSelectCandidate(FirQualifiedAccessExpression, boolean, boolean, FirElement, ResolutionMode)` ← `resolveQualifiedAccessAndSelectCandidate(FirQualifiedAccessExpression, boolean, boolean, FirElement, ResolutionMode)` ← `transformQualifiedAccessExpression(FirQualifiedAccessExpression, ResolutionMode, boolean, boolean, boolean)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`) ← `transformQualifiedAccessExpression(FirQualifiedAccessExpression, ResolutionMode)` ← `transformPropertyAccessExpression(FirPropertyAccessExpression, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`) ← `transformPropertyAccessExpression(FirPropertyAccessExpression, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.FirPropertyAccessExpression`) ← `transformInplace(List, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `transformArguments(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.impl.FirArgumentListImpl`) ← `transformChildren(FirTransformer, Object)` ← `transformChildren(FirTransformer, Object)` ← `transformElement(FirElement, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`) ← `transformElement(FirElement, Object)` ← `transformArgumentList(FirArgumentList, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformer`) ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.FirArgumentList`) ← `transformChildren(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.impl.FirAnnotationCallImpl`) ← `transformChildren(FirTransformer, Object)` ← `transformAnnotation(FirAnnotation, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer$FirEnumAnnotationArgumentsTransformer`) ← `transformAnnotation(FirAnnotation, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`) ← `transformAnnotationCall(FirAnnotationCall, FirUserTypeRef)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer`) ← `transformAnnotationCall(FirAnnotationCall, Void)` ← `transformAnnotationCall(FirAnnotationCall, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.FirAnnotationCall`) ← `transformInplace(List, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `transformInplace-aLnlfrU(List, FirTransformer, Object)` ← `transformAnnotations(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.impl.FirRegularClassImpl`) ← `transformAnnotations(FirTransformer, Object)` ← `transformAnnotationContainer(FirAnnotationContainer, Void)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer`) ← `transformDeclaration(FirDeclaration, Void)` ← `transformRegularClass(FirRegularClass, Void)` ← `transformRegularClass(FirRegularClass, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.FirRegularClass`) ← `transformInplace(List, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `transformDeclarations(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.impl.FirFileImpl`) ← `transformDeclarations(FirTransformer, Object)` ← `invoke()` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer$transformFile$$inlined$resolveFile$1`) ← `invoke()` ← `withFileAndFileScopes(FirFile, Function0)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer`) ← `transformFile(FirFile, Void)` ← `transformFile(FirFile, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.FirFile`) ← `resolveAnnotations(FirFile)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirCompilerRequiredAnnotationsResolveTransformer`) ← `transformFile(FirFile, Void)` ← `transformFile(FirFile, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.FirFile`) ← `transformSingle(FirElement, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `process(Collection)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.FirCompilerRequiredAnnotationsResolveProcessor`) ← `process(List)` (`org.jetbrains.kotlin.fir.resolve.transformers.FirTotalResolveProcessor`) ← `runResolution(FirSession, List)` (`org.jetbrains.kotlin.fir.pipeline.AnalyseKt`) ← `resolveAndCheckFir(FirSession, List, BaseDiagnosticsCollector)` (`org.jetbrains.kotlin.fir.pipeline.FirUtilsKt`) ← `executePhase(ConfigurationPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`) ← `executePhase(PipelineArtifact)` ← `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`) ← `phaseBody(LoggingContext, Object)` ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`) ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.backend.common.phaser.CompositePhase`) ← `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`) ← `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`) ← `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` ← `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` ← `execute(CommonCompilerArguments, Services, MessageCollector)` ← `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` ← `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`) ← `exec(MessageCollector, Services, CommonCompilerArguments)` ← `exec(PrintStream, Services, MessageRenderer, String[])` ← `exec(PrintStream, MessageRenderer, String[])` ← `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`) ← `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` ← `doMain(CLICompiler, String[])` ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`) ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000008801008000`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000008801009400`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  0.3% |    2 MiB |       4 | `copyOf(byte[], int)` (`java.util.Arrays`) ← `ensureCapacityInternal(int)` (`java.lang.AbstractStringBuilder`) ← `append(char)` ← `append(char)` (`java.lang.StringBuilder`) ← `fromMethodSignatureAndParameterIndex(MemberSignature, int)` (`org.jetbrains.kotlin.load.kotlin.MemberSignature$Companion`) ← `visitParameterAnnotation(int, ClassId, SourceElement)` (`org.jetbrains.kotlin.fir.java.deserialization.JvmBinaryAnnotationDeserializerKt$loadMemberAnnotations$1$AnnotationVisitorForMethod`) ← `visitParameterAnnotation(int, String, boolean)` (`org.jetbrains.kotlin.load.kotlin.FileBasedKotlinClass$4$2`) ← `readParameterAnnotations(MethodVisitor, Context, int, boolean)` (`org.jetbrains.org.objectweb.asm.ClassReader`) ← `readMethod(ClassVisitor, Context, int)` ← `accept(ClassVisitor, Attribute[], int)` ← `accept(ClassVisitor, int)` ← `visitMembers(KotlinJvmBinaryClass$MemberVisitor, byte[])` (`org.jetbrains.kotlin.load.kotlin.FileBasedKotlinClass`) ← `loadMemberAnnotations(FirSession, KotlinJvmBinaryClass, byte[], KotlinClassFinder)` (`org.jetbrains.kotlin.fir.java.deserialization.JvmBinaryAnnotationDeserializerKt`) ← `access$loadMemberAnnotations(FirSession, KotlinJvmBinaryClass, byte[], KotlinClassFinder)` ← `annotationInfo_delegate$lambda$0(JvmBinaryAnnotationDeserializer, KotlinClassFinder)` (`org.jetbrains.kotlin.fir.java.deserialization.JvmBinaryAnnotationDeserializer`) ← `invoke()` (`org.jetbrains.kotlin.fir.java.deserialization.JvmBinaryAnnotationDeserializer$$Lambda.0x00000088015d7710`) ← `getValue()` (`kotlin.SafePublicationLazyImpl`) ← `getAnnotationInfo()` (`org.jetbrains.kotlin.fir.java.deserialization.JvmBinaryAnnotationDeserializer`) ← `findJvmBinaryClassAndLoadMemberAnnotations(MemberSignature, boolean)` ← `findJvmBinaryClassAndLoadMemberAnnotations$default(JvmBinaryAnnotationDeserializer, MemberSignature, boolean, int, Object)` ← `loadExtensionReceiverParameterAnnotations(DeserializedContainerSource, MessageLite, NameResolver, TypeTable, AnnotationDeserializer$CallableKind)` ← `loadFunction(ProtoBuf$Function, ProtoBuf$Class, FirClassSymbol, FirDeclarationOrigin)` (`org.jetbrains.kotlin.fir.deserialization.FirMemberDeserializer`) ← `loadFunction$default(FirMemberDeserializer, ProtoBuf$Function, ProtoBuf$Class, FirClassSymbol, FirDeclarationOrigin, int, Object)` ← `loadFunctionsByCallableId(CallableId)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider`) ← `access$loadFunctionsByCallableId(AbstractFirDeserializedSymbolProvider, CallableId)` ← `invoke(Object, Void)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider$special$$inlined$createCache$3`) ← `invoke(Object, Object)` ← `getValue(Object, Object)` (`org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache`) ← `getCallables(FirCache, CallableId)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider`) ← `getTopLevelFunctionSymbolsTo(List, FqName, Name)` ← `computeTopLevelFunctions(CallableId)` (`org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider`) ← `access$computeTopLevelFunctions(FirCachingCompositeSymbolProvider, CallableId)` ← `invoke(Object, Void)` (`org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider$special$$inlined$createCache$3`) ← `invoke(Object, Object)` ← `getValue(Object, Object)` (`org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache`) ← `getTopLevelFunctionSymbolsTo(List, FqName, Name)` (`org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider`) ← `getTopLevelFunctionSymbols(FqName, Name)` (`org.jetbrains.kotlin.fir.resolve.providers.FirSymbolProvider`) ← `processFunctionsByName(Name, Function1)` (`org.jetbrains.kotlin.fir.scopes.impl.FirSingleLevelDefaultStarImportingScope`) ← `invoke(FirScope, Name, Function1)` (`org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope$processFunctionsByName$1`) ← `invoke(Object, Object, Object)` ← `processSymbolsByName(Name, Function3, Function1)` (`org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope`) ← `processFunctionsByName(Name, Function1)` ← `processFunctionsAndConstructorsByName(FirScope, CallInfo, BodyResolveComponents, ConstructorFilter, Function1)` (`org.jetbrains.kotlin.fir.resolve.calls.ConstructorProcessingKt`) ← `processFunctionsByName(CallInfo, TowerLevelProcessor)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel`) ← `handleLevel(CandidateCollector, CandidateFactory, CallInfo, ExplicitReceiverKind, TowerGroup, TowerLevel)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.TowerLevelHandler`) ← `processLevel(TowerLevel, CallInfo, TowerGroup, ExplicitReceiverKind, Continuation)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask`) ← `access$processLevel(FirBaseTowerResolveTask, TowerLevel, CallInfo, TowerGroup, ExplicitReceiverKind, Continuation)` ← `invokeSuspend(Object)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask$processLevel$6`) ← `resumeWith(Object)` (`kotlin.coroutines.jvm.internal.BaseContinuationImpl`) ← `resumeTask(TowerResolveManager$SuspendedResolverTask)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager`) ← `runTasks()` ← `runResolver(CallInfo, ResolutionContext, CandidateCollector, TowerResolveManager, CandidateFactory)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver`) ← `runResolver(CallInfo, ResolutionContext, CandidateCollector, CandidateFactory)` ← `runResolver$default(FirTowerResolver, CallInfo, ResolutionContext, CandidateCollector, CandidateFactory, int, Object)` ← `collectCandidates(FirQualifiedAccessExpression, Name, CallKind, boolean, FirFunctionCallOrigin, List, ResolutionContext, CandidateCollector, FirElement, ResolutionMode, CollectionLiteralOuterCandidateContext)` (`org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`) ← `collectCandidates$default(FirCallResolver, FirQualifiedAccessExpression, Name, CallKind, boolean, FirFunctionCallOrigin, List, ResolutionContext, CandidateCollector, FirElement, ResolutionMode, CollectionLiteralOuterCandidateContext, int, Object)` ← `resolveCallAndSelectCandidate(FirFunctionCall, ResolutionMode, CollectionLiteralOuterCandidateContext)` ← `resolveCallAndSelectCandidate$default(FirCallResolver, FirFunctionCall, ResolutionMode, CollectionLiteralOuterCandidateContext, int, Object)` ← `transformFunctionCallInternal$org_jetbrains_kotlin_resolve(FirFunctionCall, ResolutionMode, FirExpressionsResolveTransformer$CallResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`) ← `transformFunctionCall(FirFunctionCall, ResolutionMode)` ← `transformFunctionCall(FirFunctionCall, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`) ← `transformFunctionCall(FirFunctionCall, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.FirFunctionCall`) ← `transformResult(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.impl.FirReturnExpressionImpl`) ← `transformChildren(FirTransformer, Object)` ← `transformChildren(FirTransformer, Object)` ← `transformExpression(FirExpression, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`) ← `transformExpression(FirExpression, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`) ← `transformJump(FirJump, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirControlFlowStatementsResolveTransformer`) ← `transformReturnExpression(FirReturnExpression, ResolutionMode)` ← `transformReturnExpression(FirReturnExpression, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`) ← `transformReturnExpression(FirReturnExpression, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.FirReturnExpression`) ← `transformStatementsIndexed(FirBlock, FirTransformer, Function1)` (`org.jetbrains.kotlin.fir.expressions.FirExpressionUtilKt`) ← `transformBlockInCurrentScope$org_jetbrains_kotlin_resolve(FirBlock, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`) ← `transformBlock(FirBlock, ResolutionMode)` ← `transformBlock(FirBlock, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`) ← `transformBlock(FirBlock, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.FirBlock`) ← `transformElement(FirElement, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirPartialBodyResolveTransformer`) ← `transformElement(FirElement, Object)` ← `transformBlock(FirBlock, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformer`) ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.FirBlock`) ← `transformBody(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.impl.FirNamedFunctionImpl`) ← `transformBody(FirTransformer, Object)` ← `transformFunctionContent(FirFunction, ResolutionMode, boolean)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer`) ← `transformFunctionWithGivenSignature(FirFunction, boolean)` ← `access$transformFunctionWithGivenSignature(FirDeclarationsResolveTransformer, FirFunction, boolean)` ← `transformNamedFunction$lambda$0$0$0(FirDeclarationsResolveTransformer, FirNamedFunction, boolean)` ← `invoke()` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x00000088016b47e0`) ← `withParameters(FirCallableDeclaration, SessionAndScopeSessionHolder, Function0)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.BodyResolveContext`) ← `forFunctionBody(FirFunction, SessionAndScopeSessionHolder, Function0)` ← `transformNamedFunction(FirNamedFunction, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer`) ← `transformNamedFunction(FirNamedFunction, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`) ← `transformNamedFunction(FirNamedFunction, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.FirNamedFunction`) ← `transformInplace(List, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `transformDeclarations(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.impl.FirFileImpl`) ← `transformChildren(FirTransformer, Object)` ← `transformChildren(FirTransformer, Object)` ← `transformElement(FirElement, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`) ← `transformDeclarationContent(FirDeclaration, ResolutionMode)` ← `transformDeclarationContent(FirDeclaration, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer`) ← `doTransformFile$lambda$0(FirDeclarationsResolveTransformer, FirFile, ResolutionMode)` ← `invoke()` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x00000088016540f0`) ← `withFile(FirFile, Function0)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer`) ← `doTransformFile(FirFile, ResolutionMode)` ← `transformFile(FirFile, ResolutionMode)` ← `transformFile(FirFile, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`) ← `transformFile(FirFile, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.FirFile`) ← `transformFile(FirFile, Object)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirBodyResolveTransformerAdapter`) ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.FirFile`) ← `processFile(FirFile)` (`org.jetbrains.kotlin.fir.resolve.transformers.FirTransformerBasedResolveProcessor`) ← `process(List)` (`org.jetbrains.kotlin.fir.resolve.transformers.FirTotalResolveProcessor`) ← `runResolution(FirSession, List)` (`org.jetbrains.kotlin.fir.pipeline.AnalyseKt`) ← `resolveAndCheckFir(FirSession, List, BaseDiagnosticsCollector)` (`org.jetbrains.kotlin.fir.pipeline.FirUtilsKt`) ← `executePhase(ConfigurationPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`) ← `executePhase(PipelineArtifact)` ← `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`) ← `phaseBody(LoggingContext, Object)` ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`) ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.backend.common.phaser.CompositePhase`) ← `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`) ← `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`) ← `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` ← `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` ← `execute(CommonCompilerArguments, Services, MessageCollector)` ← `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` ← `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`) ← `exec(MessageCollector, Services, CommonCompilerArguments)` ← `exec(PrintStream, Services, MessageRenderer, String[])` ← `exec(PrintStream, MessageRenderer, String[])` ← `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`) ← `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` ← `doMain(CLICompiler, String[])` ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`) ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000008801008000`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000008801009400`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) |
|  0.2% |  1.5 MiB |       3 | `getBufIfOpen(boolean)` (`java.io.BufferedInputStream`) ← `getBufIfOpen()` ← `fill()` ← `read1(byte[], int, int)` ← `implRead(byte[], int, int)` ← `read(byte[], int, int)` ← `read(byte[], int, int)` (`java.io.FilterInputStream`) ← `read(byte[], int, int)` (`java.io.PushbackInputStream`) ← `readFully(byte[], int, int)` (`java.util.zip.ZipInputStream`) ← `readLOC()` ← `getNextEntry()` ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  0.2% |  1.5 MiB |       3 | `<init>(int)` (`org.jetbrains.kotlin.protobuf.ByteString$Output`) ← `newOutput()` (`org.jetbrains.kotlin.protobuf.ByteString`) ← `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type`) ← `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `readMessage(Parser, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.CodedInputStream`) ← `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$TypeTable`) ← `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$TypeTable$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `readMessage(Parser, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.CodedInputStream`) ← `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Class`) ← `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Class$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `readMessage(Parser, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.CodedInputStream`) ← `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$PackageFragment`) ← `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$PackageFragment$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `parsePartialFrom(InputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.AbstractParser`) ← `parseFrom(InputStream, ExtensionRegistryLite)` ← `parseFrom(InputStream, ExtensionRegistryLite)` ← `parseFrom(InputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$PackageFragment`) ← `createFromStream(InputStream)` (`org.jetbrains.kotlin.fir.resolve.providers.impl.BinaryVersionAndPackageFragment$Companion`) ← `<init>(InputStream)` (`org.jetbrains.kotlin.fir.resolve.providers.impl.AbstractFirBuiltinSymbolProvider$BuiltInsPackageFragment`) ← `<init>(FirSession, FirModuleData, FirKotlinScopeProvider, Function1)` (`org.jetbrains.kotlin.fir.java.deserialization.FirJvmClasspathBuiltinSymbolProvider`) ← `<init>(FirSession, FirFallbackBuiltinSymbolProvider, Function1)` (`org.jetbrains.kotlin.fir.java.deserialization.FirJvmBuiltinsSymbolProvider`) ← `initializeBuiltinsProvider(FirSession, FirModuleData, FirKotlinScopeProvider, KotlinClassFinder)` (`org.jetbrains.kotlin.fir.session.FirJvmSessionFactory`) ← `createLibrarySession$lambda$0(FirJvmSessionFactory$Context, ModuleDataProvider, LanguageVersionSettings, FirSession, FirKotlinScopeProvider)` ← `invoke(Object, Object)` (`org.jetbrains.kotlin.fir.session.FirJvmSessionFactory$$Lambda.0x0000008801478518`) ← `createLibrarySession(Object, FirSession, ModuleDataProvider, LanguageVersionSettings, List, boolean, Function2)` (`org.jetbrains.kotlin.fir.session.FirAbstractSessionFactory`) ← `createLibrarySession(FirSession, ModuleDataProvider, List, LanguageVersionSettings, FirJvmSessionFactory$Context)` (`org.jetbrains.kotlin.fir.session.FirJvmSessionFactory`) ← `prepareJvmSessions$lambda$2(DependencyListForCliModule, List, CompilerConfiguration, FirJvmSessionFactory$Context, FirSession)` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`) ← `invoke(Object)` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase$$Lambda.0x000000880141eed0`) ← `prepareSessions(List, CompilerConfiguration, Name, TargetPlatform, boolean, DependencyListForCliModule, List, Function1, Function1, Function2, Function0, Function0, Function1, FirSessionProducer, Function4)` (`org.jetbrains.kotlin.cli.common.SessionConstructionUtils`) ← `prepareSessions$default(SessionConstructionUtils, List, CompilerConfiguration, Name, TargetPlatform, boolean, DependencyListForCliModule, List, Function1, Function1, Function2, Function0, Function0, Function1, FirSessionProducer, Function4, int, Object)` ← `prepareJvmSessions(List, Name, CompilerConfiguration, VfsBasedProjectEnvironment, AbstractProjectFileSearchScope, DependencyListForCliModule, Function1, Function1, Function2, Function1)` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`) ← `executePhase(ConfigurationPipelineArtifact)` ← `executePhase(PipelineArtifact)` ← `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`) ← `phaseBody(LoggingContext, Object)` ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`) ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.backend.common.phaser.CompositePhase`) ← `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`) ← `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`) ← `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` ← `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` ← `execute(CommonCompilerArguments, Services, MessageCollector)` ← `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` ← `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`) ← `exec(MessageCollector, Services, CommonCompilerArguments)` ← `exec(PrintStream, Services, MessageRenderer, String[])` ← `exec(PrintStream, MessageRenderer, String[])` ← `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`) ← `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` ← `doMain(CLICompiler, String[])` ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`) ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000008801008000`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000008801009400`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  0.2% |  1.5 MiB |       3 | `<init>(int)` (`org.jetbrains.kotlin.protobuf.ByteString$Output`) ← `newOutput()` (`org.jetbrains.kotlin.protobuf.ByteString`) ← `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$ValueParameter`) ← `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$ValueParameter$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `readMessage(Parser, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.CodedInputStream`) ← `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Function`) ← `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Function$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `readMessage(Parser, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.CodedInputStream`) ← `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Package`) ← `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Package$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `parsePartialFrom(InputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.AbstractParser`) ← `parseFrom(InputStream, ExtensionRegistryLite)` ← `parseFrom(InputStream, ExtensionRegistryLite)` ← `parseFrom(InputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Package`) ← `readPackageDataFrom(byte[], String[])` (`org.jetbrains.kotlin.metadata.jvm.deserialization.JvmProtoBufUtil`) ← `readPackageDataFrom(String[], String[])` ← `computePackagePartInfo(FqName, String)` (`org.jetbrains.kotlin.fir.java.deserialization.JvmClassFileBasedSymbolProvider`) ← `computePackagePartsInfos(FqName)` ← `tryComputePackagePartInfos(FqName)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider`) ← `access$tryComputePackagePartInfos(AbstractFirDeserializedSymbolProvider, FqName)` ← `invoke(Object, Void)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider$special$$inlined$createCache$2`) ← `invoke(Object, Object)` ← `getValue(Object, Object)` (`org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache`) ← `getPackageParts(FqName)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider`) ← `access$getPackageParts(AbstractFirDeserializedSymbolProvider, FqName)` ← `computeTopLevelCallableNames(FqName)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider$symbolNamesProvider$1`) ← `invoke(Object, Void)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider$topLevelCallableNamesByPackage_delegate$lambda$0$$inlined$createCache$1`) ← `invoke(Object, Object)` ← `getValue(Object, Object)` (`org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache`) ← `getTopLevelCallableNamesInPackage(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider`) ← `computeTopLevelCallableNames(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCompositeCachedSymbolNamesProvider`) ← `computeTopLevelCallableNames(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider$symbolNamesProvider$1`) ← `invoke(Object, Void)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider$topLevelCallableNamesByPackage_delegate$lambda$0$$inlined$createCache$1`) ← `invoke(Object, Object)` ← `getValue(Object, Object)` (`org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache`) ← `getTopLevelCallableNamesInPackage(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider`) ← `mayHaveTopLevelCallable(FqName, Name)` (`org.jetbrains.kotlin.fir.resolve.providers.FirSymbolNamesProvider`) ← `getTopLevelPropertySymbolsTo(List, FqName, Name)` (`org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider`) ← `getTopLevelPropertySymbols(FqName, Name)` (`org.jetbrains.kotlin.fir.resolve.providers.FirSymbolProvider`) ← `processPropertiesByName(Name, Function1)` (`org.jetbrains.kotlin.fir.scopes.impl.FirSingleLevelDefaultStarImportingScope`) ← `invoke(FirScope, Name, Function1)` (`org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope$processPropertiesByName$1`) ← `invoke(Object, Object, Object)` ← `processSymbolsByName(Name, Function3, Function1)` (`org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope`) ← `processPropertiesByName(Name, Function1)` ← `getProperties(FirScope, Name)` (`org.jetbrains.kotlin.fir.scopes.FirScopeKt`) ← `resolveFromImportScope(FirQualifiedAccessExpression)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer$FirEnumAnnotationArgumentsTransformer`) ← `resolveQualifiedAccessAndSelectCandidate(FirQualifiedAccessExpression, boolean, boolean, FirElement, ResolutionMode)` ← `resolveQualifiedAccessAndSelectCandidate(FirQualifiedAccessExpression, boolean, boolean, FirElement, ResolutionMode)` ← `transformQualifiedAccessExpression(FirQualifiedAccessExpression, ResolutionMode, boolean, boolean, boolean)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`) ← `transformQualifiedAccessExpression(FirQualifiedAccessExpression, ResolutionMode)` ← `transformPropertyAccessExpression(FirPropertyAccessExpression, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`) ← `transformPropertyAccessExpression(FirPropertyAccessExpression, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.FirPropertyAccessExpression`) ← `transformInplace(List, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `transformArguments(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.impl.FirArgumentListImpl`) ← `transformChildren(FirTransformer, Object)` ← `transformChildren(FirTransformer, Object)` ← `transformElement(FirElement, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`) ← `transformElement(FirElement, Object)` ← `transformArgumentList(FirArgumentList, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformer`) ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.FirArgumentList`) ← `transformChildren(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.impl.FirAnnotationCallImpl`) ← `transformChildren(FirTransformer, Object)` ← `transformAnnotation(FirAnnotation, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer$FirEnumAnnotationArgumentsTransformer`) ← `transformAnnotation(FirAnnotation, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`) ← `transformAnnotationCall(FirAnnotationCall, FirUserTypeRef)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer`) ← `transformAnnotationCall(FirAnnotationCall, Void)` ← `transformAnnotationCall(FirAnnotationCall, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.FirAnnotationCall`) ← `transformInplace(List, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `transformInplace-aLnlfrU(List, FirTransformer, Object)` ← `transformAnnotations(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.impl.FirRegularClassImpl`) ← `transformAnnotations(FirTransformer, Object)` ← `transformAnnotationContainer(FirAnnotationContainer, Void)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer`) ← `transformDeclaration(FirDeclaration, Void)` ← `transformRegularClass(FirRegularClass, Void)` ← `transformRegularClass(FirRegularClass, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.FirRegularClass`) ← `transformInplace(List, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `transformDeclarations(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.impl.FirFileImpl`) ← `transformDeclarations(FirTransformer, Object)` ← `invoke()` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer$transformFile$$inlined$resolveFile$1`) ← `invoke()` ← `withFileAndFileScopes(FirFile, Function0)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer`) ← `transformFile(FirFile, Void)` ← `transformFile(FirFile, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.FirFile`) ← `resolveAnnotations(FirFile)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirCompilerRequiredAnnotationsResolveTransformer`) ← `transformFile(FirFile, Void)` ← `transformFile(FirFile, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.FirFile`) ← `transformSingle(FirElement, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `process(Collection)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.FirCompilerRequiredAnnotationsResolveProcessor`) ← `process(List)` (`org.jetbrains.kotlin.fir.resolve.transformers.FirTotalResolveProcessor`) ← `runResolution(FirSession, List)` (`org.jetbrains.kotlin.fir.pipeline.AnalyseKt`) ← `resolveAndCheckFir(FirSession, List, BaseDiagnosticsCollector)` (`org.jetbrains.kotlin.fir.pipeline.FirUtilsKt`) ← `executePhase(ConfigurationPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`) ← `executePhase(PipelineArtifact)` ← `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`) ← `phaseBody(LoggingContext, Object)` ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`) ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.backend.common.phaser.CompositePhase`) ← `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`) ← `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`) ← `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` ← `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` ← `execute(CommonCompilerArguments, Services, MessageCollector)` ← `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` ← `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`) ← `exec(MessageCollector, Services, CommonCompilerArguments)` ← `exec(PrintStream, Services, MessageRenderer, String[])` ← `exec(PrintStream, MessageRenderer, String[])` ← `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`) ← `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` ← `doMain(CLICompiler, String[])` ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`) ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000008801008000`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000008801009400`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  0.2% |  1.5 MiB |       3 | `grow(int)` (`java.util.ArrayList`) ← `grow()` ← `add(Object, Object[], int)` ← `add(Object)` ← `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Function`) ← `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Function$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `readMessage(Parser, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.CodedInputStream`) ← `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Package`) ← `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Package$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `parsePartialFrom(InputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.AbstractParser`) ← `parseFrom(InputStream, ExtensionRegistryLite)` ← `parseFrom(InputStream, ExtensionRegistryLite)` ← `parseFrom(InputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Package`) ← `readPackageDataFrom(byte[], String[])` (`org.jetbrains.kotlin.metadata.jvm.deserialization.JvmProtoBufUtil`) ← `readPackageDataFrom(String[], String[])` ← `computePackagePartInfo(FqName, String)` (`org.jetbrains.kotlin.fir.java.deserialization.JvmClassFileBasedSymbolProvider`) ← `computePackagePartsInfos(FqName)` ← `tryComputePackagePartInfos(FqName)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider`) ← `access$tryComputePackagePartInfos(AbstractFirDeserializedSymbolProvider, FqName)` ← `invoke(Object, Void)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider$special$$inlined$createCache$2`) ← `invoke(Object, Object)` ← `getValue(Object, Object)` (`org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache`) ← `getPackageParts(FqName)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider`) ← `access$getPackageParts(AbstractFirDeserializedSymbolProvider, FqName)` ← `computeTopLevelCallableNames(FqName)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider$symbolNamesProvider$1`) ← `invoke(Object, Void)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider$topLevelCallableNamesByPackage_delegate$lambda$0$$inlined$createCache$1`) ← `invoke(Object, Object)` ← `getValue(Object, Object)` (`org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache`) ← `getTopLevelCallableNamesInPackage(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider`) ← `computeTopLevelCallableNames(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCompositeCachedSymbolNamesProvider`) ← `computeTopLevelCallableNames(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider$symbolNamesProvider$1`) ← `invoke(Object, Void)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider$topLevelCallableNamesByPackage_delegate$lambda$0$$inlined$createCache$1`) ← `invoke(Object, Object)` ← `getValue(Object, Object)` (`org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache`) ← `getTopLevelCallableNamesInPackage(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider`) ← `mayHaveTopLevelCallable(FqName, Name)` (`org.jetbrains.kotlin.fir.resolve.providers.FirSymbolNamesProvider`) ← `getTopLevelPropertySymbolsTo(List, FqName, Name)` (`org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider`) ← `getTopLevelPropertySymbols(FqName, Name)` (`org.jetbrains.kotlin.fir.resolve.providers.FirSymbolProvider`) ← `processPropertiesByName(Name, Function1)` (`org.jetbrains.kotlin.fir.scopes.impl.FirSingleLevelDefaultStarImportingScope`) ← `invoke(FirScope, Name, Function1)` (`org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope$processPropertiesByName$1`) ← `invoke(Object, Object, Object)` ← `processSymbolsByName(Name, Function3, Function1)` (`org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope`) ← `processPropertiesByName(Name, Function1)` ← `getProperties(FirScope, Name)` (`org.jetbrains.kotlin.fir.scopes.FirScopeKt`) ← `resolveFromImportScope(FirQualifiedAccessExpression)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer$FirEnumAnnotationArgumentsTransformer`) ← `resolveQualifiedAccessAndSelectCandidate(FirQualifiedAccessExpression, boolean, boolean, FirElement, ResolutionMode)` ← `resolveQualifiedAccessAndSelectCandidate(FirQualifiedAccessExpression, boolean, boolean, FirElement, ResolutionMode)` ← `transformQualifiedAccessExpression(FirQualifiedAccessExpression, ResolutionMode, boolean, boolean, boolean)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`) ← `transformQualifiedAccessExpression(FirQualifiedAccessExpression, ResolutionMode)` ← `transformPropertyAccessExpression(FirPropertyAccessExpression, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`) ← `transformPropertyAccessExpression(FirPropertyAccessExpression, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.FirPropertyAccessExpression`) ← `transformInplace(List, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `transformArguments(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.impl.FirArgumentListImpl`) ← `transformChildren(FirTransformer, Object)` ← `transformChildren(FirTransformer, Object)` ← `transformElement(FirElement, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`) ← `transformElement(FirElement, Object)` ← `transformArgumentList(FirArgumentList, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformer`) ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.FirArgumentList`) ← `transformChildren(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.impl.FirAnnotationCallImpl`) ← `transformChildren(FirTransformer, Object)` ← `transformAnnotation(FirAnnotation, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer$FirEnumAnnotationArgumentsTransformer`) ← `transformAnnotation(FirAnnotation, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`) ← `transformAnnotationCall(FirAnnotationCall, FirUserTypeRef)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer`) ← `transformAnnotationCall(FirAnnotationCall, Void)` ← `transformAnnotationCall(FirAnnotationCall, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.FirAnnotationCall`) ← `transformInplace(List, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `transformInplace-aLnlfrU(List, FirTransformer, Object)` ← `transformAnnotations(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.impl.FirRegularClassImpl`) ← `transformAnnotations(FirTransformer, Object)` ← `transformAnnotationContainer(FirAnnotationContainer, Void)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer`) ← `transformDeclaration(FirDeclaration, Void)` ← `transformRegularClass(FirRegularClass, Void)` ← `transformRegularClass(FirRegularClass, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.FirRegularClass`) ← `transformInplace(List, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `transformDeclarations(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.impl.FirFileImpl`) ← `transformDeclarations(FirTransformer, Object)` ← `invoke()` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer$transformFile$$inlined$resolveFile$1`) ← `invoke()` ← `withFileAndFileScopes(FirFile, Function0)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer`) ← `transformFile(FirFile, Void)` ← `transformFile(FirFile, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.FirFile`) ← `resolveAnnotations(FirFile)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirCompilerRequiredAnnotationsResolveTransformer`) ← `transformFile(FirFile, Void)` ← `transformFile(FirFile, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.FirFile`) ← `transformSingle(FirElement, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `process(Collection)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.FirCompilerRequiredAnnotationsResolveProcessor`) ← `process(List)` (`org.jetbrains.kotlin.fir.resolve.transformers.FirTotalResolveProcessor`) ← `runResolution(FirSession, List)` (`org.jetbrains.kotlin.fir.pipeline.AnalyseKt`) ← `resolveAndCheckFir(FirSession, List, BaseDiagnosticsCollector)` (`org.jetbrains.kotlin.fir.pipeline.FirUtilsKt`) ← `executePhase(ConfigurationPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`) ← `executePhase(PipelineArtifact)` ← `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`) ← `phaseBody(LoggingContext, Object)` ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`) ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.backend.common.phaser.CompositePhase`) ← `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`) ← `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`) ← `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` ← `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` ← `execute(CommonCompilerArguments, Services, MessageCollector)` ← `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` ← `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`) ← `exec(MessageCollector, Services, CommonCompilerArguments)` ← `exec(PrintStream, Services, MessageRenderer, String[])` ← `exec(PrintStream, MessageRenderer, String[])` ← `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`) ← `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` ← `doMain(CLICompiler, String[])` ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`) ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000008801008000`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000008801009400`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  0.2% |  1.5 MiB |       3 | `contentsToByteArray$lambda$0(ZipEntryDescription, LargeDynamicMappedBuffer$Mapping)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt`) ← `invoke(Object)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt$$Lambda.0x0000008801396428`) ← `withMappedRange(long, long, Function1)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.LargeDynamicMappedBuffer`) ← `withMappedRangeFrom(long, Function1)` ← `contentsToByteArray(LargeDynamicMappedBuffer, ZipEntryDescription)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt`) ← `contentsToByteArray(ZipEntryDescription)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.FastJarHandler`) ← `contentsToByteArray()` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.FastJarVirtualFile`) ← `contentsToByteArray(boolean)` (`com.intellij.openapi.vfs.VirtualFile`) ← `create$lambda$0(VirtualFile, byte[], MetadataVersion)` (`org.jetbrains.kotlin.load.kotlin.VirtualFileKotlinClass$Factory`) ← `invoke()` (`org.jetbrains.kotlin.load.kotlin.VirtualFileKotlinClass$Factory$$Lambda.0x00000088015c88c8`) ← `measureSideTime$org_jetbrains_kotlin_compiler_common(PhaseSideType, Function0)` (`org.jetbrains.kotlin.util.PerformanceManager`) ← `tryMeasureSideTime(PerformanceManager, PhaseSideType, Function0)` (`org.jetbrains.kotlin.util.PerformanceManagerKt`) ← `create$org_jetbrains_kotlin_frontend_common_jvm(VirtualFile, MetadataVersion, byte[], PerformanceManager)` (`org.jetbrains.kotlin.load.kotlin.VirtualFileKotlinClass$Factory`) ← `getKotlinBinaryClassOrClassFileContent$lambda$0(VirtualFile, MetadataVersion, byte[], PerformanceManager)` (`org.jetbrains.kotlin.load.kotlin.KotlinBinaryClassCache$Companion`) ← `compute()` (`org.jetbrains.kotlin.load.kotlin.KotlinBinaryClassCache$Companion$$Lambda.0x00000088015c6c78`) ← `runReadAction(Computable)` (`com.intellij.mock.MockApplication`) ← `getKotlinBinaryClassOrClassFileContent(VirtualFile, MetadataVersion, byte[], PerformanceManager)` (`org.jetbrains.kotlin.load.kotlin.KotlinBinaryClassCache$Companion`) ← `getKotlinBinaryClassOrClassFileContent$default(KotlinBinaryClassCache$Companion, VirtualFile, MetadataVersion, byte[], PerformanceManager, int, Object)` ← `findKotlinClassOrContent(ClassId, MetadataVersion)` (`org.jetbrains.kotlin.load.kotlin.VirtualFileFinder`) ← `computePackagePartInfo(FqName, String)` (`org.jetbrains.kotlin.fir.java.deserialization.JvmClassFileBasedSymbolProvider`) ← `computePackagePartsInfos(FqName)` ← `tryComputePackagePartInfos(FqName)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider`) ← `access$tryComputePackagePartInfos(AbstractFirDeserializedSymbolProvider, FqName)` ← `invoke(Object, Void)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider$special$$inlined$createCache$2`) ← `invoke(Object, Object)` ← `getValue(Object, Object)` (`org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache`) ← `getPackageParts(FqName)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider`) ← `access$getPackageParts(AbstractFirDeserializedSymbolProvider, FqName)` ← `invoke(Object, Void)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider$special$$inlined$createCache$1`) ← `invoke(Object, Object)` ← `getValue(Object, Object)` (`org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache`) ← `computeTopLevelClassifierNames(FqName)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider$symbolNamesProvider$1`) ← `invoke(Object, Void)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider$topLevelClassifierNamesByPackage_delegate$lambda$0$$inlined$createCache$1`) ← `invoke(Object, Object)` ← `getValue(Object, Object)` (`org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache`) ← `getTopLevelClassifierNamesInPackageSkippingPackageCheck(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider`) ← `getTopLevelClassifierNamesInPackage(FqName)` ← `computeTopLevelClassifierNames(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCompositeCachedSymbolNamesProvider`) ← `computeTopLevelClassifierNames(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider$symbolNamesProvider$1`) ← `invoke(Object, Void)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider$topLevelClassifierNamesByPackage_delegate$lambda$0$$inlined$createCache$1`) ← `invoke(Object, Object)` ← `getValue(Object, Object)` (`org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache`) ← `getTopLevelClassifierNamesInPackageSkippingPackageCheck(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider`) ← `getTopLevelClassifierNamesInPackage(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider$symbolNamesProvider$1`) ← `mayHaveTopLevelClassifier(ClassId)` (`org.jetbrains.kotlin.fir.resolve.providers.FirSymbolNamesProvider`) ← `getClassLikeSymbolByClassId(ClassId)` (`org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider`) ← `isWholeReflectionApiAvailable(CheckerContext)` (`org.jetbrains.kotlin.fir.analysis.jvm.checkers.expression.FirJvmReflectionApiCallChecker`) ← `check(CheckerContext, DiagnosticReporter, FirStatement)` (`org.jetbrains.kotlin.fir.analysis.checkers.expression.AbstractFirReflectionApiCallChecker`) ← `visitBlock(FirBlock, CheckerContext)` (`org.jetbrains.kotlin.fir.analysis.checkers.expression.ExpressionCheckersDiagnosticComponent`) ← `visitBlock(FirBlock, Object)` ← `accept(FirVisitor, Object)` (`org.jetbrains.kotlin.fir.expressions.FirBlock`) ← `checkElement(FirElement)` (`org.jetbrains.kotlin.fir.analysis.collectors.CheckerRunningDiagnosticCollectorVisitor`) ← `visitAnnotationContainer(FirAnnotationContainer, Void)` (`org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor`) ← `visitAnnotationContainer(FirAnnotationContainer, Object)` ← `visitStatement(FirStatement, Object)` (`org.jetbrains.kotlin.fir.visitors.FirDefaultVisitor`) ← `visitExpression(FirExpression, Object)` ← `visitBlock(FirBlock, Void)` (`org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor`) ← `visitBlock(FirBlock, Object)` ← `accept(FirVisitor, Object)` (`org.jetbrains.kotlin.fir.expressions.FirBlock`) ← `acceptChildren(FirVisitor, Object)` (`org.jetbrains.kotlin.fir.declarations.impl.FirNamedFunctionImpl`) ← `visitNestedElements(FirElement)` (`org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor`) ← `visitNamedFunction(FirNamedFunction, Void)` ← `visitNamedFunction(FirNamedFunction, Object)` ← `accept(FirVisitor, Object)` (`org.jetbrains.kotlin.fir.declarations.FirNamedFunction`) ← `acceptChildren(FirVisitor, Object)` (`org.jetbrains.kotlin.fir.declarations.impl.FirFileImpl`) ← `visitNestedElements(FirElement)` (`org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor`) ← `visitFile(FirFile, Void)` ← `visitFile(FirFile, Object)` ← `accept(FirVisitor, Object)` (`org.jetbrains.kotlin.fir.declarations.FirFile`) ← `collectDiagnostics(FirDeclaration, PendingDiagnosticReporter)` (`org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollector`) ← `runCheckers(FirSession, ScopeSession, Collection, BaseDiagnosticsCollector, MppCheckerKind)` (`org.jetbrains.kotlin.fir.pipeline.AnalyseKt`) ← `resolveAndCheckFir(FirSession, List, BaseDiagnosticsCollector)` (`org.jetbrains.kotlin.fir.pipeline.FirUtilsKt`) ← `executePhase(ConfigurationPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`) ← `executePhase(PipelineArtifact)` ← `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`) ← `phaseBody(LoggingContext, Object)` ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`) ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.backend.common.phaser.CompositePhase`) ← `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`) ← `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`) ← `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` ← `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` ← `execute(CommonCompilerArguments, Services, MessageCollector)` ← `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` ← `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`) ← `exec(MessageCollector, Services, CommonCompilerArguments)` ← `exec(PrintStream, Services, MessageRenderer, String[])` ← `exec(PrintStream, MessageRenderer, String[])` ← `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`) ← `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` ← `doMain(CLICompiler, String[])` ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`) ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000008801008000`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000008801009400`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  0.2% |    1 MiB |       2 | `newStringUTF8NoRepl(byte[], int, int, boolean)` (`java.lang.String`) ← `newStringUTF8NoRepl(byte[], int, int)` (`java.lang.System$2`) ← `toString(byte[], int, int)` (`java.util.zip.ZipCoder$UTF8ZipCoder`) ← `toStringUTF8(byte[], int)` (`java.util.zip.ZipCoder`) ← `readLOC()` (`java.util.zip.ZipInputStream`) ← `getNextEntry()` ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

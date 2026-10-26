# Sampling profile

Collected 1,305 samples.

| Category          |     % | Samples |
| ----------------- | ----: | ------: |
| Compiler          | 45.7% |     597 |
| Native            | 38.7% |     505 |
| Ours              |  9.6% |     125 |
| Standard library  |  4.4% |      58 |
| JIT               |  1.5% |      19 |
| Garbage collector |  0.1% |       1 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
├── … 867 samples (66.4%) Thread::call_run
│   ├── 812 samples (62.2%) JavaThread::thread_main_inner
│   │   └── 812 samples (62.2%) CompileBroker::compiler_thread_loop
│   │       ├── 799 samples (61.2%) CompileBroker::invoke_compiler_on_method
│   │       │   ├── 558 samples (42.8%) C2Compiler::compile_method
│   │       │   │   └── 556 samples (42.6%) Compile::Compile
│   │       │   │       ├── 280 samples (21.5%) Compile::Code_Gen
│   │       │   │       │   ├── 154 samples (11.8%) PhaseChaitin::Register_Allocate
│   │       │   │       │   │   ├── 27 samples (2.1%, self 1.3%) PhaseChaitin::Split
│   │       │   │       │   │   │   └── 4 samples (0.3%) Node::rematerialize
│   │       │   │       │   │   ├── 22 samples (1.7%, self 0.8%) PhaseChaitin::build_ifg_physical
│   │       │   │       │   │   │   ├── 3 samples (0.2%, self 2.2% globally) tlv_get_addr
│   │       │   │       │   │   │   └── 2 samples (0.2%) MachNode::rematerialize
│   │       │   │       │   │   ├── 20 samples (1.5%, self 1.1%) PhaseChaitin::gather_lrg_masks
│   │       │   │       │   │   └── 83 samples (6.4%) 19 more callees, led by (1.7%) PhaseChaitin::post_allocate_copy_removal
│   │       │   │       │   └── 126 samples (9.7%) 4 more callees, led by (4.2%) Matcher::match
│   │       │   │       └── 276 samples (21.1%) 9 more callees, led by (15.7%) Compile::Optimize
│   │       │   └── 241 samples (18.5%) 6 more callees, led by (17.7%) Compiler::compile_method
│   │       └── … 9 samples (0.7%) __psynch_cvwait
│   └── 55 samples (4.2%) 3 more callees, led by (4.0%) WorkerThread::run
├── 423 samples (32.4%) main at org.jetbrains.kotlin.preloading.Preloader
│   └── 423 samples (32.4%) run
│       ├── … 347 samples (26.6%) invokeExact_MT at java.lang.invoke.Invokers$Holder
│       │   ├── … 338 samples (25.9%) exec at org.jetbrains.kotlin.cli.common.CLICompiler
│       │   │   ├── … 321 samples (24.6%) invoke at org.jetbrains.kotlin.config.phaser.NamedCompilerPhase
│       │   │   │   ├── 300 samples (23.0%) phaseBody at org.jetbrains.kotlin.cli.pipeline.PipelinePhase
│       │   │   │   │   ├── … 25 samples (1.9%) executePhase at org.jetbrains.kotlin.cli.pipeline.jvm.JvmFir2IrPipelinePhase
│       │   │   │   │   │   └── … 24 samples (1.8%) convertToIrAndActualizeForJvm-_I1IR-w at org.jetbrains.kotlin.cli.jvm.compiler.legacy.pipeline.JvmCompilerPipelineKt
│       │   │   │   │   │       ├── 22 samples (1.7%) convertToIrAndActualize-MT2kVtw$default at org.jetbrains.kotlin.fir.pipeline.ConvertToIrKt …
│       │   │   │   │   │       └── … 1 sample (0.1%, self 1.7% globally) SymbolTable::do_lookup
│       │   │   │   │   └── 275 samples (21.1%) 5 more callees, led by (16.6%) executePhase at org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase
│       │   │   │   └── 21 samples (1.6%) 3 more callees, led by (1.2%) phaseBody at org.jetbrains.kotlin.backend.common.phaser.FileLoweringPhase
│       │   │   └── 13 samples (1.0%) 3 more callees, led by (0.6%) <clinit> at org.jetbrains.kotlin.cli.common.ArgumentsKt
│       │   └── … 4 samples (0.3%) invokeStatic at java.lang.invoke.LambdaForm$DMH.0x0000007001234000
│       └── … 68 samples (5.2%) read at java.util.zip.InflaterInputStream
│           └── … 66 samples (5.1%) Java_java_util_zip_Inflater_inflateBytesBytes
│               ├── 46 samples (3.5%) inflate_fast
│               └── 16 samples (1.2%) inflate
│                   └── 9 samples (0.7%) inflate_table
└── 14 samples (1.1%) 3 more root frames, led by (0.8%) [break_stack_range]
```

## Hottest functions

### Self samples

Functions with the most samples collected within the function body, excluding callees.

|    % | Samples | Function                                                                                                                                                 | Location    |
| ---: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 3.6% |      47 | `inflate_fast`                                                                                                                                           | `<unknown>` |
| 2.2% |      29 | `tlv_get_addr`                                                                                                                                           | `<unknown>` |
| 1.7% |      22 | `SymbolTable::do_lookup`                                                                                                                                 | `<unknown>` |
| 1.3% |      17 | `PhaseChaitin::Split`                                                                                                                                    | `<unknown>` |
| 1.1% |      15 | `PhaseChaitin::gather_lrg_masks`                                                                                                                         | `<unknown>` |
| 1.1% |      14 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `<unknown>` |
| 1.0% |      13 | `pthread_jit_write_protect_np`                                                                                                                           | `<unknown>` |
| 1.0% |      13 | `__psynch_mutexwait`                                                                                                                                     | `<unknown>` |
| 0.9% |      12 | `__psynch_cvwait`                                                                                                                                        | `<unknown>` |
| 0.8% |      11 | `PhaseChaitin::build_ifg_physical`                                                                                                                       | `<unknown>` |
| 0.8% |      11 | `IndexSetIterator::advance_and_next`                                                                                                                     | `<unknown>` |
| 0.8% |      11 | `PhaseIdealLoop::build_loop_early`                                                                                                                       | `<unknown>` |
| 0.8% |      10 | `PhaseChaitin::elide_copy`                                                                                                                               | `<unknown>` |
| 0.8% |      10 | `InstanceKlass::find_method_index`                                                                                                                       | `<unknown>` |
| 0.8% |      10 | `PhaseIdealLoop::Dominators`                                                                                                                             | `<unknown>` |
| 0.8% |      10 | `inflate_table`                                                                                                                                          | `<unknown>` |
| 0.7% |       9 | `Arena::contains`                                                                                                                                        | `<unknown>` |
| 0.6% |       8 | `PhaseChaitin::post_allocate_copy_removal`                                                                                                               | `<unknown>` |
| 0.6% |       8 | `PhaseIdealLoop::build_loop_late_post_work`                                                                                                              | `<unknown>` |
| 0.6% |       8 | `PhaseLive::compute`                                                                                                                                     | `<unknown>` |

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Compiler

|    % | Samples | Function                                    | Location    |
| ---: | ------: | ------------------------------------------- | ----------- |
| 1.3% |      17 | `PhaseChaitin::Split`                       | `<unknown>` |
| 1.1% |      15 | `PhaseChaitin::gather_lrg_masks`            | `<unknown>` |
| 0.8% |      11 | `PhaseChaitin::build_ifg_physical`          | `<unknown>` |
| 0.8% |      11 | `IndexSetIterator::advance_and_next`        | `<unknown>` |
| 0.8% |      11 | `PhaseIdealLoop::build_loop_early`          | `<unknown>` |
| 0.8% |      10 | `PhaseChaitin::elide_copy`                  | `<unknown>` |
| 0.8% |      10 | `PhaseIdealLoop::Dominators`                | `<unknown>` |
| 0.6% |       8 | `PhaseChaitin::post_allocate_copy_removal`  | `<unknown>` |
| 0.6% |       8 | `PhaseIdealLoop::build_loop_late_post_work` | `<unknown>` |
| 0.6% |       8 | `PhaseLive::compute`                        | `<unknown>` |
| 0.5% |       7 | `ciObjectFactory::get_metadata`             | `<unknown>` |
| 0.5% |       7 | `PhaseIdealLoop::build_loop_tree`           | `<unknown>` |
| 0.5% |       7 | `IntervalWalker::walk_to`                   | `<unknown>` |
| 0.5% |       7 | `PhaseIdealLoop::build_loop_late`           | `<unknown>` |
| 0.5% |       7 | `Matcher::find_shared`                      | `<unknown>` |
| 0.5% |       7 | `Matcher::match_tree`                       | `<unknown>` |
| 0.5% |       7 | `Node_Backward_Iterator::next`              | `<unknown>` |
| 0.5% |       6 | `DebugInformationRecorder::describe_scope`  | `<unknown>` |
| 0.5% |       6 | `PhaseCFG::partial_latency_of_defs`         | `<unknown>` |
| 0.5% |       6 | `Node::dominates`                           | `<unknown>` |

##### Native

|    % | Samples | Function                                                                                                                                                 | Location    |
| ---: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 3.6% |      47 | `inflate_fast`                                                                                                                                           | `<unknown>` |
| 2.2% |      29 | `tlv_get_addr`                                                                                                                                           | `<unknown>` |
| 1.7% |      22 | `SymbolTable::do_lookup`                                                                                                                                 | `<unknown>` |
| 1.1% |      14 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `<unknown>` |
| 1.0% |      13 | `pthread_jit_write_protect_np`                                                                                                                           | `<unknown>` |
| 1.0% |      13 | `__psynch_mutexwait`                                                                                                                                     | `<unknown>` |
| 0.9% |      12 | `__psynch_cvwait`                                                                                                                                        | `<unknown>` |
| 0.8% |      10 | `InstanceKlass::find_method_index`                                                                                                                       | `<unknown>` |
| 0.8% |      10 | `inflate_table`                                                                                                                                          | `<unknown>` |
| 0.7% |       9 | `Arena::contains`                                                                                                                                        | `<unknown>` |
| 0.6% |       8 | `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>`                                                           | `<unknown>` |
| 0.5% |       7 | `_platform_memset`                                                                                                                                       | `<unknown>` |
| 0.5% |       7 | `sys_icache_invalidate`                                                                                                                                  | `<unknown>` |
| 0.5% |       7 | `bsearch`                                                                                                                                                | `<unknown>` |
| 0.5% |       6 | `inflate`                                                                                                                                                | `<unknown>` |
| 0.4% |       5 | `vmSymbols::find_sid`                                                                                                                                    | `<unknown>` |
| 0.4% |       5 | `posix_madvise`                                                                                                                                          | `<unknown>` |
| 0.4% |       5 | `G1ParScanThreadState::do_copy_to_survivor_space`                                                                                                        | `<unknown>` |
| 0.4% |       5 | `_platform_memmove`                                                                                                                                      | `<unknown>` |
| 0.3% |       4 | `fwd_copy_again`                                                                                                                                         | `<unknown>` |

##### Ours

|    % | Samples | Function                                            | Location                                                                                            |
| ---: | ------: | --------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| 0.2% |       2 | `processCandidatesWithGivenImplicitReceiverAsValue` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolveTask`                                  |
| 0.2% |       2 | `shouldWeSkipConstraint`                            | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector`                        |
| 0.1% |       1 | `transformValueParameter`                           | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer`      |
| 0.1% |       1 | `applyResultsOfAnalyzedLambdaToCandidateSystem`     | `org.jetbrains.kotlin.fir.resolve.inference.PostponedArgumentsAnalyzer`                             |
| 0.1% |       1 | `convertCallExpression`                             | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirExpressionBuilder`                     |
| 0.1% |       1 | `loadAllClassesFromJars`                            | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`                                              |
| 0.1% |       1 | `simplifyConstraintForPossibleIntersectionSubType`  | `org.jetbrains.kotlin.resolve.calls.inference.components.TypeCheckerStateForConstraintSystem`       |
| 0.1% |       1 | `consumeCandidate`                                  | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerLevelProcessor`                                  |
| 0.1% |       1 | `processFunctionsByName`                            | `org.jetbrains.kotlin.fir.scopes.impl.FirSingleLevelDefaultStarImportingScope`                      |
| 0.1% |       1 | `getModuleData`                                     | `org.jetbrains.kotlin.fir.symbols.FirBasedSymbol`                                                   |
| 0.1% |       1 | `acceptChildren`                                    | `org.jetbrains.kotlin.ir.declarations.IrFunction`                                                   |
| 0.1% |       1 | `transformChildren`                                 | `org.jetbrains.kotlin.ir.declarations.IrFunction`                                                   |
| 0.1% |       1 | `getVariance`                                       | `org.jetbrains.kotlin.resolve.calls.inference.model.NewConstraintSystemImpl`                        |
| 0.1% |       1 | `accept`                                            | `org.jetbrains.kotlin.ir.expressions.IrGetValue`                                                    |
| 0.1% |       1 | `<init>`                                            | `org.jetbrains.kotlin.resolve.calls.inference.components.TypeVariableDependencyInformationProvider` |
| 0.1% |       1 | `getReadiness`                                      | `org.jetbrains.kotlin.resolve.calls.inference.components.VariableReadinessCalculator`               |
| 0.1% |       1 | `functionProto`                                     | `org.jetbrains.kotlin.fir.serialization.FirElementSerializer`                                       |
| 0.1% |       1 | `balanceWhiteSpaces`                                | `com.intellij.lang.impl.PsiBuilderImpl`                                                             |
| 0.1% |       1 | `check`                                             | `org.jetbrains.kotlin.fir.analysis.checkers.type.FirArrayOfNothingTypeChecker`                      |
| 0.1% |       1 | `exitAnonymousFunction`                             | `org.jetbrains.kotlin.fir.resolve.dfa.cfg.ControlFlowGraphBuilder`                                  |

##### Standard library

|    % | Samples | Function                | Location                                                 |
| ---: | ------: | ----------------------- | -------------------------------------------------------- |
| 0.5% |       6 | `checkNotNullParameter` | `kotlin.jvm.internal.Intrinsics`                         |
| 0.3% |       4 | `sanitizeStackTrace`    | `kotlin.jvm.internal.Intrinsics`                         |
| 0.2% |       2 | `hasNext`               | `kotlin.collections.ReversedListReadOnly$listIterator$1` |
| 0.1% |       1 | `toString`              | `java.util.StringJoiner`                                 |
| 0.1% |       1 | `invokeBasic`           | `java.lang.invoke.MethodHandle`                          |
| 0.1% |       1 | `linkToTargetMethod`    | `java.lang.invoke.Invokers$Holder`                       |
| 0.1% |       1 | `inflateBytesBytes`     | `java.util.zip.Inflater`                                 |
| 0.1% |       1 | `replace`               | `java.lang.StringLatin1`                                 |
| 0.1% |       1 | `singleOrNull`          | `kotlin.collections.CollectionsKt___CollectionsKt`       |
| 0.1% |       1 | `getString`             | `jdk.internal.jimage.BasicImageReader`                   |
| 0.1% |       1 | `computeAllFrames`      | `jdk.internal.org.objectweb.asm.MethodWriter`            |
| 0.1% |       1 | `preparedLambdaForm`    | `java.lang.invoke.DirectMethodHandle`                    |
| 0.1% |       1 | `copyOf`                | `java.util.Arrays`                                       |
| 0.1% |       1 | `valueOf`               | `java.lang.Integer`                                      |
| 0.1% |       1 | `isInitialized`         | `kotlin.reflect.jvm.internal.impl.protobuf.FieldSet`     |
| 0.1% |       1 | `equals`                | `java.lang.Object`                                       |
| 0.1% |       1 | `areEqual`              | `kotlin.jvm.internal.Intrinsics`                         |
| 0.1% |       1 | `throwOnFailure`        | `kotlin.ResultKt`                                        |
| 0.1% |       1 | `toString`              | `java.lang.Long`                                         |
| 0.1% |       1 | `siftUpComparable`      | `java.util.PriorityQueue`                                |

##### JIT

|    % | Samples | Function                     | Location    |
| ---: | ------: | ---------------------------- | ----------- |
| 0.5% |       7 | `I2C/C2I adapters(0xb)`      | `<unknown>` |
| 0.4% |       5 | `I2C/C2I adapters(0xbb)`     | `<unknown>` |
| 0.2% |       3 | `itable stub`                | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xbbbbab)` | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xbbb)`    | `<unknown>` |
| 0.1% |       1 | `vtable stub`                | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xba)`     | `<unknown>` |

#### Callers

Callers with the largest contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `inflate_fast` (`<unknown>`)

|      % | Samples | Caller                                          | Location    |
| -----: | ------: | ----------------------------------------------- | ----------- |
| 100.0% |      47 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `<unknown>` |

##### `tlv_get_addr` (`<unknown>`)

|     % | Samples | Caller                               | Location    |
| ----: | ------: | ------------------------------------ | ----------- |
| 10.3% |       3 | `PhaseChaitin::build_ifg_physical`   | `<unknown>` |
|  6.9% |       2 | `TypeInstPtr::add_offset`            | `<unknown>` |
|  6.9% |       2 | `PhaseLive::compute`                 | `<unknown>` |
|  3.4% |       1 | `LinearScanWalker::LinearScanWalker` | `<unknown>` |
|  3.4% |       1 | `MethodHandles::resolve_MemberName`  | `<unknown>` |

##### `SymbolTable::do_lookup` (`<unknown>`)

|     % | Samples | Caller                                         | Location    |
| ----: | ------: | ---------------------------------------------- | ----------- |
| 77.3% |      17 | `SymbolTable::lookup_only`                     | `<unknown>` |
| 13.6% |       3 | `SymbolTable::new_symbol`                      | `<unknown>` |
|  9.1% |       2 | `ClassFileParser::parse_constant_pool_entries` | `<unknown>` |

##### `PhaseChaitin::Split` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |      17 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `PhaseChaitin::gather_lrg_masks` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |      15 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` (`<unknown>`)

|     % | Samples | Caller                                             | Location    |
| ----: | ------: | -------------------------------------------------- | ----------- |
| 57.1% |       8 | `DebugInformationRecorder::describe_scope`         | `<unknown>` |
| 42.9% |       6 | `DebugInformationRecorder::serialize_scope_values` | `<unknown>` |

##### `pthread_jit_write_protect_np` (`<unknown>`)

|     % | Samples | Caller                                           | Location    |
| ----: | ------: | ------------------------------------------------ | ----------- |
| 15.4% |       2 | `JVM_IHashCode`                                  | `<unknown>` |
| 15.4% |       2 | `InterpreterRuntime::frequency_counter_overflow` | `<unknown>` |
|  7.7% |       1 | `InterpreterRuntime::anewarray`                  | `<unknown>` |
|  7.7% |       1 | `InterpreterRuntime::resolve_from_cache`         | `<unknown>` |
|  7.7% |       1 | `JVM_IsArrayClass`                               | `<unknown>` |

##### `__psynch_mutexwait` (`<unknown>`)

|      % | Samples | Caller                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |      13 | `_pthread_mutex_firstfit_lock_slow` | `<unknown>` |

##### `__psynch_cvwait` (`<unknown>`)

|      % | Samples | Caller                  | Location    |
| -----: | ------: | ----------------------- | ----------- |
| 100.0% |      12 | `PlatformMonitor::wait` | `<unknown>` |

##### `PhaseChaitin::build_ifg_physical` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |      11 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `IndexSetIterator::advance_and_next` (`<unknown>`)

|     % | Samples | Caller                             | Location    |
| ----: | ------: | ---------------------------------- | ----------- |
| 27.3% |       3 | `PhaseIFG::SquareUp`               | `<unknown>` |
| 18.2% |       2 | `PhaseLive::add_liveout`           | `<unknown>` |
| 18.2% |       2 | `PhaseChaitin::build_ifg_physical` | `<unknown>` |
| 18.2% |       2 | `PhaseIFG::effective_degree`       | `<unknown>` |
|  9.1% |       1 | `PhaseChaitin::Simplify`           | `<unknown>` |

##### `PhaseIdealLoop::build_loop_early` (`<unknown>`)

|      % | Samples | Caller                               | Location    |
| -----: | ------: | ------------------------------------ | ----------- |
| 100.0% |      11 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |

##### `PhaseChaitin::elide_copy` (`<unknown>`)

|      % | Samples | Caller                                     | Location    |
| -----: | ------: | ------------------------------------------ | ----------- |
| 100.0% |      10 | `PhaseChaitin::post_allocate_copy_removal` | `<unknown>` |

##### `InstanceKlass::find_method_index` (`<unknown>`)

|     % | Samples | Caller                                  | Location    |
| ----: | ------: | --------------------------------------- | ----------- |
| 80.0% |       8 | `InstanceKlass::uncached_lookup_method` | `<unknown>` |
| 20.0% |       2 | `InstanceKlass::find_method`            | `<unknown>` |

##### `PhaseIdealLoop::Dominators` (`<unknown>`)

|      % | Samples | Caller                               | Location    |
| -----: | ------: | ------------------------------------ | ----------- |
| 100.0% |      10 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |

##### `inflate_table` (`<unknown>`)

|      % | Samples | Caller    | Location    |
| -----: | ------: | --------- | ----------- |
| 100.0% |      10 | `inflate` | `<unknown>` |

##### `Arena::contains` (`<unknown>`)

|      % | Samples | Caller           | Location    |
| -----: | ------: | ---------------- | ----------- |
| 100.0% |       9 | `Matcher::xform` | `<unknown>` |

##### `PhaseChaitin::post_allocate_copy_removal` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |       8 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `PhaseIdealLoop::build_loop_late_post_work` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |       8 | `PhaseIdealLoop::build_loop_late` | `<unknown>` |

##### `PhaseLive::compute` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |       8 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` (`<unknown>`)

|      % | Samples | Caller                                         | Location    |
| -----: | ------: | ---------------------------------------------- | ----------- |
| 100.0% |       8 | `void G1CMTask::process_grey_task_entry<true>` | `<unknown>` |

##### `ciObjectFactory::get_metadata` (`<unknown>`)

|     % | Samples | Caller                                             | Location    |
| ----: | ------: | -------------------------------------------------- | ----------- |
| 28.6% |       2 | `ciBytecodeStream::get_method`                     | `<unknown>` |
| 28.6% |       2 | `ciEnv::get_klass_by_name_impl`                    | `<unknown>` |
| 28.6% |       2 | `ciEnv::get_klass_by_index_impl`                   | `<unknown>` |
| 14.3% |       1 | `ciReceiverTypeData::translate_receiver_data_from` | `<unknown>` |

##### `PhaseIdealLoop::build_loop_tree` (`<unknown>`)

|      % | Samples | Caller                               | Location    |
| -----: | ------: | ------------------------------------ | ----------- |
| 100.0% |       7 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |

##### `IntervalWalker::walk_to` (`<unknown>`)

|     % | Samples | Caller                           | Location    |
| ----: | ------: | -------------------------------- | ----------- |
| 71.4% |       5 | `IntervalWalker::walk_to`        | `<unknown>` |
| 14.3% |       1 | `LinearScan::allocate_registers` | `<unknown>` |
| 14.3% |       1 | `LinearScan::compute_oop_map`    | `<unknown>` |

##### `PhaseIdealLoop::build_loop_late` (`<unknown>`)

|      % | Samples | Caller                               | Location    |
| -----: | ------: | ------------------------------------ | ----------- |
| 100.0% |       7 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |

##### `Matcher::find_shared` (`<unknown>`)

|      % | Samples | Caller           | Location    |
| -----: | ------: | ---------------- | ----------- |
| 100.0% |       7 | `Matcher::match` | `<unknown>` |

##### `Matcher::match_tree` (`<unknown>`)

|     % | Samples | Caller                | Location    |
| ----: | ------: | --------------------- | ----------- |
| 85.7% |       6 | `Matcher::xform`      | `<unknown>` |
| 14.3% |       1 | `Matcher::match_sfpt` | `<unknown>` |

##### `Node_Backward_Iterator::next` (`<unknown>`)

|     % | Samples | Caller                         | Location    |
| ----: | ------: | ------------------------------ | ----------- |
| 57.1% |       4 | `PhaseCFG::schedule_late`      | `<unknown>` |
| 42.9% |       3 | `PhaseCFG::global_code_motion` | `<unknown>` |

##### `_platform_memset` (`<unknown>`)

|     % | Samples | Caller                                          | Location    |
| ----: | ------: | ----------------------------------------------- | ----------- |
| 28.6% |       2 | `ConstMethod::allocate`                         | `<unknown>` |
| 14.3% |       1 | `PhaseChaitin::Register_Allocate`               | `<unknown>` |
| 14.3% |       1 | `ConstantPool::allocate`                        | `<unknown>` |
| 14.3% |       1 | `MemAllocator::allocate`                        | `<unknown>` |
| 14.3% |       1 | `G1ParScanThreadState::trim_queue_to_threshold` | `<unknown>` |

##### `sys_icache_invalidate` (`<unknown>`)

|     % | Samples | Caller                                       | Location    |
| ----: | ------: | -------------------------------------------- | ----------- |
| 28.6% |       2 | `nmethod::nmethod`                           | `<unknown>` |
| 14.3% |       1 | `ciEnv::register_method`                     | `<unknown>` |
| 14.3% |       1 | `CodeBuffer::copy_code_to`                   | `<unknown>` |
| 14.3% |       1 | `CompiledIC::set_to_megamorphic`             | `<unknown>` |
| 14.3% |       1 | `SharedRuntime::resolve_sub_helper_internal` | `<unknown>` |

##### `bsearch` (`<unknown>`)

|      % | Samples | Caller                           | Location    |
| -----: | ------: | -------------------------------- | ----------- |
| 100.0% |       7 | `encoding_for_logical_immediate` | `<unknown>` |

##### `I2C/C2I adapters(0xb)` (`<unknown>`)

|     % | Samples | Caller                    | Location                                                                      |
| ----: | ------: | ------------------------- | ----------------------------------------------------------------------------- |
| 14.3% |       1 | `<init>`                  | `org.jetbrains.kotlin.resolve.constants.AnnotationValue`                      |
| 14.3% |       1 | `isPrimitiveType`         | `org.jetbrains.kotlin.backend.jvm.mapping.IrTypeCheckerContextForTypeMapping` |
| 14.3% |       1 | `isInvokeSuspendOfLambda` | `org.jetbrains.kotlin.backend.jvm.ir.JvmIrCoroutineUtilsKt`                   |
| 14.3% |       1 | `getFileOrNull`           | `org.jetbrains.kotlin.ir.util.IrUtilsKt`                                      |
| 14.3% |       1 | `resolveUserTypeToSymbol` | `org.jetbrains.kotlin.fir.resolve.providers.impl.FirTypeResolverImpl`         |

##### `DebugInformationRecorder::describe_scope` (`<unknown>`)

|     % | Samples | Caller                                           | Location    |
| ----: | ------: | ------------------------------------------------ | ----------- |
| 83.3% |       5 | `LIR_Assembler::record_non_safepoint_debug_info` | `<unknown>` |
| 16.7% |       1 | `IRScopeDebugInfo::record_debug_info`            | `<unknown>` |

##### `PhaseCFG::partial_latency_of_defs` (`<unknown>`)

|      % | Samples | Caller                         | Location    |
| -----: | ------: | ------------------------------ | ----------- |
| 100.0% |       6 | `PhaseCFG::global_code_motion` | `<unknown>` |

##### `Node::dominates` (`<unknown>`)

|      % | Samples | Caller                           | Location    |
| -----: | ------: | -------------------------------- | ----------- |
| 100.0% |       6 | `MemNode::all_controls_dominate` | `<unknown>` |

##### `inflate` (`<unknown>`)

|      % | Samples | Caller                                          | Location    |
| -----: | ------: | ----------------------------------------------- | ----------- |
| 100.0% |       6 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `<unknown>` |

##### `checkNotNullParameter` (`kotlin.jvm.internal.Intrinsics`)

|     % | Samples | Caller             | Location                                                                                 |
| ----: | ------: | ------------------ | ---------------------------------------------------------------------------------------- |
| 16.7% |       1 | `reduceCandidates` | `org.jetbrains.kotlin.fir.resolve.calls.overloads.FirOverloadByLambdaReturnTypeResolver` |
| 16.7% |       1 | `outerClassSymbol` | `org.jetbrains.kotlin.fir.analysis.checkers.FirHelpersKt`                                |
| 16.7% |       1 | `argumentsCount`   | `org.jetbrains.kotlin.types.model.TypeSystemContextContextualKt`                         |
| 16.7% |       1 | `<init>`           | `org.jetbrains.kotlin.fir.resolve.providers.impl.FirTypeCandidateCollector`              |
| 16.7% |       1 | `filterNotNullTo`  | `kotlin.collections.ArraysKt___ArraysKt`                                                 |

##### `vmSymbols::find_sid` (`<unknown>`)

|      % | Samples | Caller                        | Location    |
| -----: | ------: | ----------------------------- | ----------- |
| 100.0% |       5 | `ciObjectFactory::get_symbol` | `<unknown>` |

##### `posix_madvise` (`<unknown>`)

|      % | Samples | Caller        | Location    |
| -----: | ------: | ------------- | ----------- |
| 100.0% |       5 | `free_medium` | `<unknown>` |

##### `G1ParScanThreadState::do_copy_to_survivor_space` (`<unknown>`)

|      % | Samples | Caller                                          | Location    |
| -----: | ------: | ----------------------------------------------- | ----------- |
| 100.0% |       5 | `G1ParScanThreadState::trim_queue_to_threshold` | `<unknown>` |

##### `_platform_memmove` (`<unknown>`)

|     % | Samples | Caller                          | Location    |
| ----: | ------: | ------------------------------- | ----------- |
| 20.0% |       1 | `ImmutableOopMapBuilder::build` | `<unknown>` |
| 20.0% |       1 | `nmethod::nmethod`              | `<unknown>` |
| 20.0% |       1 | `Node::add_req`                 | `<unknown>` |
| 20.0% |       1 | `inflate`                       | `<unknown>` |
| 20.0% |       1 | `Type::Initialize`              | `<unknown>` |

##### `I2C/C2I adapters(0xbb)` (`<unknown>`)

|     % | Samples | Caller                    | Location                                                                                  |
| ----: | ------: | ------------------------- | ----------------------------------------------------------------------------------------- |
| 20.0% |       1 | `parseMethodDescription`  | `org.jetbrains.kotlin.load.java.structure.impl.classFiles.BinaryJavaMethodBase$Companion` |
| 20.0% |       1 | `isInplaceCallEndMarker`  | `org.jetbrains.kotlin.codegen.inline.InlineArgumentsInPlaceKt`                            |
| 20.0% |       1 | `data$lambda$0`           | `kotlin.reflect.jvm.internal.KClassImpl`                                                  |
| 20.0% |       1 | `childContext$default`    | `org.jetbrains.kotlin.fir.deserialization.FirDeserializationContext`                      |
| 20.0% |       1 | `buildSmartCastStatement` | `org.jetbrains.kotlin.fir.resolve.dfa.FirDataFlowAnalyzer`                                |

##### `fwd_copy_again` (`<unknown>`)

|     % | Samples | Caller                                          | Location    |
| ----: | ------: | ----------------------------------------------- | ----------- |
| 75.0% |       3 | `G1ParScanThreadState::trim_queue_to_threshold` | `<unknown>` |
| 25.0% |       1 | `CodeBuffer::copy_code_to`                      | `<unknown>` |

##### `sanitizeStackTrace` (`kotlin.jvm.internal.Intrinsics`)

|      % | Samples | Caller                    | Location                         |
| -----: | ------: | ------------------------- | -------------------------------- |
| 100.0% |       4 | `throwParameterIsNullNPE` | `kotlin.jvm.internal.Intrinsics` |

##### `itable stub` (`<unknown>`)

|     % | Samples | Caller                  | Location                                                                               |
| ----: | ------: | ----------------------- | -------------------------------------------------------------------------------------- |
| 33.3% |       1 | `isDeprecatedInJavaDoc` | `org.jetbrains.kotlin.load.java.structure.impl.classFiles.BinaryJavaModifierListOwner` |
| 33.3% |       1 | `addAll`                | `java.util.AbstractCollection`                                                         |
| 33.3% |       1 | `lookahead`             | `org.jetbrains.kotlin.parsing.AbstractKotlinParsing`                                   |

##### `processCandidatesWithGivenImplicitReceiverAsValue` (`org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolveTask`)

|     % | Samples | Caller                                                     | Location                                                           |
| ----: | ------: | ---------------------------------------------------------- | ------------------------------------------------------------------ |
| 50.0% |       1 | `access$processCandidatesWithGivenImplicitReceiverAsValue` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolveTask` |
| 50.0% |       1 | `runResolverForNoReceiver`                                 | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolveTask` |

##### `shouldWeSkipConstraint` (`org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector`)

|      % | Samples | Caller                    | Location                                                                     |
| -----: | ------: | ------------------------- | ---------------------------------------------------------------------------- |
| 100.0% |       2 | `processGivenConstraints` | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector` |

##### `hasNext` (`kotlin.collections.ReversedListReadOnly$listIterator$1`)

|     % | Samples | Caller                                              | Location                                                           |
| ----: | ------: | --------------------------------------------------- | ------------------------------------------------------------------ |
| 50.0% |       1 | `processCandidatesWithGivenImplicitReceiverAsValue` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolveTask` |
| 50.0% |       1 | `toArray`                                           | `kotlin.jvm.internal.CollectionToArray`                            |

##### `transformValueParameter` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer`)

|      % | Samples | Caller                    | Location                                                                                       |
| -----: | ------: | ------------------------- | ---------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `transformValueParameter` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer` |

##### `applyResultsOfAnalyzedLambdaToCandidateSystem` (`org.jetbrains.kotlin.fir.resolve.inference.PostponedArgumentsAnalyzer`)

|      % | Samples | Caller          | Location                                                                |
| -----: | ------: | --------------- | ----------------------------------------------------------------------- |
| 100.0% |       1 | `analyzeLambda` | `org.jetbrains.kotlin.fir.resolve.inference.PostponedArgumentsAnalyzer` |

##### `convertCallExpression` (`org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirExpressionBuilder`)

|      % | Samples | Caller              | Location                                                                        |
| -----: | ------: | ------------------- | ------------------------------------------------------------------------------- |
| 100.0% |       1 | `getAsFirStatement` | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirExpressionBuilder` |

##### `loadAllClassesFromJars` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`)

|      % | Samples | Caller           | Location                                               |
| -----: | ------: | ---------------- | ------------------------------------------------------ |
| 100.0% |       1 | `preloadClasses` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `simplifyConstraintForPossibleIntersectionSubType` (`org.jetbrains.kotlin.resolve.calls.inference.components.TypeCheckerStateForConstraintSystem`)

|      % | Samples | Caller                         | Location                                                                                      |
| -----: | ------: | ------------------------------ | --------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `internalAddSubtypeConstraint` | `org.jetbrains.kotlin.resolve.calls.inference.components.TypeCheckerStateForConstraintSystem` |

##### `consumeCandidate` (`org.jetbrains.kotlin.fir.resolve.calls.tower.TowerLevelProcessor`)

|      % | Samples | Caller                     | Location                                                           |
| -----: | ------: | -------------------------- | ------------------------------------------------------------------ |
| 100.0% |       1 | `consumeCandidate$default` | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerLevelProcessor` |

##### `processFunctionsByName` (`org.jetbrains.kotlin.fir.scopes.impl.FirSingleLevelDefaultStarImportingScope`)

|      % | Samples | Caller   | Location                                                                                     |
| -----: | ------: | -------- | -------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `invoke` | `org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope$processFunctionsByName$1` |

##### `getModuleData` (`org.jetbrains.kotlin.fir.symbols.FirBasedSymbol`)

|      % | Samples | Caller                                                                       | Location                                                  |
| -----: | ------: | ---------------------------------------------------------------------------- | --------------------------------------------------------- |
| 100.0% |       1 | `currentDeclarationDeprecationsAreDefinitelyEmpty$org_jetbrains_kotlin_tree` | `org.jetbrains.kotlin.fir.symbols.impl.FirCallableSymbol` |

##### `acceptChildren` (`org.jetbrains.kotlin.ir.declarations.IrFunction`)

|      % | Samples | Caller         | Location                                                       |
| -----: | ------: | -------------- | -------------------------------------------------------------- |
| 100.0% |       1 | `visitElement` | `org.jetbrains.kotlin.backend.jvm.ir.IrInlineReferenceLocator` |

##### `transformChildren` (`org.jetbrains.kotlin.ir.declarations.IrFunction`)

|      % | Samples | Caller             | Location                                                    |
| -----: | ------: | ------------------ | ----------------------------------------------------------- |
| 100.0% |       1 | `visitDeclaration` | `org.jetbrains.kotlin.ir.visitors.IrElementTransformerVoid` |

##### `getVariance` (`org.jetbrains.kotlin.resolve.calls.inference.model.NewConstraintSystemImpl`)

|      % | Samples | Caller        | Location                                                         |
| -----: | ------: | ------------- | ---------------------------------------------------------------- |
| 100.0% |       1 | `getVariance` | `org.jetbrains.kotlin.types.model.TypeSystemContextContextualKt` |

##### `accept` (`org.jetbrains.kotlin.ir.expressions.IrGetValue`)

|      % | Samples | Caller           | Location                                                       |
| -----: | ------: | ---------------- | -------------------------------------------------------------- |
| 100.0% |       1 | `acceptChildren` | `org.jetbrains.kotlin.ir.expressions.IrMemberAccessExpression` |

##### `<init>` (`org.jetbrains.kotlin.resolve.calls.inference.components.TypeVariableDependencyInformationProvider`)

|      % | Samples | Caller                        | Location                                                                         |
| -----: | ------: | ----------------------------- | -------------------------------------------------------------------------------- |
| 100.0% |       1 | `findTypeVariableForFixation` | `org.jetbrains.kotlin.resolve.calls.inference.components.VariableFixationFinder` |

##### `getReadiness` (`org.jetbrains.kotlin.resolve.calls.inference.components.VariableReadinessCalculator`)

|      % | Samples | Caller                       | Location                                                                              |
| -----: | ------: | ---------------------------- | ------------------------------------------------------------------------------------- |
| 100.0% |       1 | `prepareVariableForFixation` | `org.jetbrains.kotlin.resolve.calls.inference.components.VariableReadinessCalculator` |

##### `functionProto` (`org.jetbrains.kotlin.fir.serialization.FirElementSerializer`)

|      % | Samples | Caller                | Location                                                      |
| -----: | ------: | --------------------- | ------------------------------------------------------------- |
| 100.0% |       1 | `addDeclarationProto` | `org.jetbrains.kotlin.fir.serialization.FirElementSerializer` |

##### `balanceWhiteSpaces` (`com.intellij.lang.impl.PsiBuilderImpl`)

|      % | Samples | Caller             | Location                                |
| -----: | ------: | ------------------ | --------------------------------------- |
| 100.0% |       1 | `prepareLightTree` | `com.intellij.lang.impl.PsiBuilderImpl` |

##### `check` (`org.jetbrains.kotlin.fir.analysis.checkers.type.FirArrayOfNothingTypeChecker`)

|      % | Samples | Caller  | Location                                                                       |
| -----: | ------: | ------- | ------------------------------------------------------------------------------ |
| 100.0% |       1 | `check` | `org.jetbrains.kotlin.fir.analysis.checkers.type.FirArrayOfNothingTypeChecker` |

##### `exitAnonymousFunction` (`org.jetbrains.kotlin.fir.resolve.dfa.cfg.ControlFlowGraphBuilder`)

|      % | Samples | Caller         | Location                                                   |
| -----: | ------: | -------------- | ---------------------------------------------------------- |
| 100.0% |       1 | `exitFunction` | `org.jetbrains.kotlin.fir.resolve.dfa.FirDataFlowAnalyzer` |

##### `toString` (`java.util.StringJoiner`)

|      % | Samples | Caller             | Location                   |
| -----: | ------: | ------------------ | -------------------------- |
| 100.0% |       1 | `toShortSignature` | `java.lang.reflect.Method` |

##### `invokeBasic` (`java.lang.invoke.MethodHandle`)

|      % | Samples | Caller             | Location                                     |
| -----: | ------: | ------------------ | -------------------------------------------- |
| 100.0% |       1 | `newInvokeSpecial` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `linkToTargetMethod` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Caller                   | Location                                              |
| -----: | ------: | ------------------------ | ----------------------------------------------------- |
| 100.0% |       1 | `approximateToSuperType` | `org.jetbrains.kotlin.types.AbstractTypeApproximator` |

##### `inflateBytesBytes` (`java.util.zip.Inflater`)

|      % | Samples | Caller    | Location                 |
| -----: | ------: | --------- | ------------------------ |
| 100.0% |       1 | `inflate` | `java.util.zip.Inflater` |

##### `replace` (`java.lang.StringLatin1`)

|      % | Samples | Caller    | Location           |
| -----: | ------: | --------- | ------------------ |
| 100.0% |       1 | `replace` | `java.lang.String` |

##### `singleOrNull` (`kotlin.collections.CollectionsKt___CollectionsKt`)

|      % | Samples | Caller            | Location                                                          |
| -----: | ------: | ----------------- | ----------------------------------------------------------------- |
| 100.0% |       1 | `commonSuperType` | `org.jetbrains.kotlin.resolve.calls.NewCommonSuperTypeCalculator` |

##### `getString` (`jdk.internal.jimage.BasicImageReader`)

|      % | Samples | Caller | Location                                 |
| -----: | ------: | ------ | ---------------------------------------- |
| 100.0% |       1 | `get`  | `jdk.internal.jimage.ImageStringsReader` |

##### `computeAllFrames` (`jdk.internal.org.objectweb.asm.MethodWriter`)

|      % | Samples | Caller      | Location                                      |
| -----: | ------: | ----------- | --------------------------------------------- |
| 100.0% |       1 | `visitMaxs` | `jdk.internal.org.objectweb.asm.MethodWriter` |

##### `preparedLambdaForm` (`java.lang.invoke.DirectMethodHandle`)

|      % | Samples | Caller               | Location                              |
| -----: | ------: | -------------------- | ------------------------------------- |
| 100.0% |       1 | `preparedLambdaForm` | `java.lang.invoke.DirectMethodHandle` |

##### `copyOf` (`java.util.Arrays`)

|      % | Samples | Caller   | Location           |
| -----: | ------: | -------- | ------------------ |
| 100.0% |       1 | `copyOf` | `java.util.Arrays` |

##### `valueOf` (`java.lang.Integer`)

|      % | Samples | Caller                      | Location                                          |
| -----: | ------: | --------------------------- | ------------------------------------------------- |
| 100.0% |       1 | `readSourceFileWithMapping` | `org.jetbrains.kotlin.KtSourceFileLinesMappingKt` |

##### `isInitialized` (`kotlin.reflect.jvm.internal.impl.protobuf.FieldSet`)

|      % | Samples | Caller                     | Location                                                                           |
| -----: | ------: | -------------------------- | ---------------------------------------------------------------------------------- |
| 100.0% |       1 | `extensionsAreInitialized` | `kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite$ExtendableMessage` |

##### `equals` (`java.lang.Object`)

|      % | Samples | Caller     | Location                         |
| -----: | ------: | ---------- | -------------------------------- |
| 100.0% |       1 | `areEqual` | `kotlin.jvm.internal.Intrinsics` |

##### `areEqual` (`kotlin.jvm.internal.Intrinsics`)

|      % | Samples | Caller                                       | Location                                                   |
| -----: | ------: | -------------------------------------------- | ---------------------------------------------------------- |
| 100.0% |       1 | `shouldGenerateAnnotationsOnValueParameters` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `throwOnFailure` (`kotlin.ResultKt`)

|      % | Samples | Caller  | Location                                                        |
| -----: | ------: | ------- | --------------------------------------------------------------- |
| 100.0% |       1 | `check` | `org.jetbrains.kotlin.fir.resolve.calls.stages.CheckVisibility` |

##### `toString` (`java.lang.Long`)

|      % | Samples | Caller     | Location         |
| -----: | ------: | ---------- | ---------------- |
| 100.0% |       1 | `toString` | `java.lang.Long` |

##### `siftUpComparable` (`java.util.PriorityQueue`)

|      % | Samples | Caller   | Location                  |
| -----: | ------: | -------- | ------------------------- |
| 100.0% |       1 | `siftUp` | `java.util.PriorityQueue` |

##### `I2C/C2I adapters(0xbbbbab)` (`<unknown>`)

|      % | Samples | Caller                                                      | Location                                                                                      |
| -----: | ------: | ----------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `transformBlockInCurrentScope$org_jetbrains_kotlin_resolve` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer` |

##### `I2C/C2I adapters(0xbbb)` (`<unknown>`)

|      % | Samples | Caller         | Location                                                                        |
| -----: | ------: | -------------- | ------------------------------------------------------------------------------- |
| 100.0% |       1 | `visitElement` | `org.jetbrains.kotlin.backend.jvm.lower.RecordEnclosingMethodsLowering$lower$1` |

##### `vtable stub` (`<unknown>`)

|      % | Samples | Caller   | Location            |
| -----: | ------: | -------- | ------------------- |
| 100.0% |       1 | `putVal` | `java.util.HashMap` |

##### `I2C/C2I adapters(0xba)` (`<unknown>`)

|      % | Samples | Caller         | Location                                          |
| -----: | ------: | -------------- | ------------------------------------------------- |
| 100.0% |       1 | `visitVarInsn` | `org.jetbrains.org.objectweb.asm.tree.MethodNode` |

### Total samples

Functions with the most samples collected within the function and its callees.

|     % | Samples | Function                                   | Location                                                |
| ----: | ------: | ------------------------------------------ | ------------------------------------------------------- |
| 66.5% |     868 | `_pthread_start`                           | `<unknown>`                                             |
| 66.5% |     868 | `thread_start`                             | `<unknown>`                                             |
| 66.4% |     867 | `Thread::call_run`                         | `<unknown>`                                             |
| 66.4% |     867 | `thread_native_entry`                      | `<unknown>`                                             |
| 62.2% |     812 | `CompileBroker::compiler_thread_loop`      | `<unknown>`                                             |
| 62.2% |     812 | `JavaThread::thread_main_inner`            | `<unknown>`                                             |
| 61.2% |     799 | `CompileBroker::invoke_compiler_on_method` | `<unknown>`                                             |
| 42.8% |     558 | `C2Compiler::compile_method`               | `<unknown>`                                             |
| 42.6% |     556 | `Compile::Compile`                         | `<unknown>`                                             |
| 32.4% |     423 | `run`                                      | `org.jetbrains.kotlin.preloading.Preloader`             |
| 32.4% |     423 | `main`                                     | `org.jetbrains.kotlin.preloading.Preloader`             |
| 26.7% |     348 | `main`                                     | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`  |
| 26.7% |     348 | `main`                                     | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 26.7% |     348 | `invokeStatic`                             | `java.lang.invoke.LambdaForm$DMH.0x0000007001008400`    |
| 26.7% |     348 | `invoke`                                   | `java.lang.invoke.LambdaForm$MH.0x0000007001009800`     |
| 26.7% |     348 | `invokeExact_MT`                           | `java.lang.invoke.Invokers$Holder`                      |
| 26.7% |     348 | `invokeImpl`                               | `jdk.internal.reflect.DirectMethodHandleAccessor`       |
| 26.7% |     348 | `invoke`                                   | `jdk.internal.reflect.DirectMethodHandleAccessor`       |
| 26.7% |     348 | `invoke`                                   | `java.lang.reflect.Method`                              |
| 26.6% |     347 | `doMainNoExit$default`                     | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Compiler

|     % | Samples | Function                                   | Location    |
| ----: | ------: | ------------------------------------------ | ----------- |
| 62.2% |     812 | `CompileBroker::compiler_thread_loop`      | `<unknown>` |
| 61.2% |     799 | `CompileBroker::invoke_compiler_on_method` | `<unknown>` |
| 42.8% |     558 | `C2Compiler::compile_method`               | `<unknown>` |
| 42.6% |     556 | `Compile::Compile`                         | `<unknown>` |
| 21.5% |     280 | `Compile::Code_Gen`                        | `<unknown>` |
| 17.6% |     230 | `Compilation::compile_method`              | `<unknown>` |
| 17.6% |     230 | `Compilation::Compilation`                 | `<unknown>` |
| 15.7% |     205 | `Compile::Optimize`                        | `<unknown>` |
| 15.6% |     204 | `Compilation::compile_java_method`         | `<unknown>` |
| 11.8% |     154 | `PhaseChaitin::Register_Allocate`          | `<unknown>` |
|  9.3% |     121 | `PhaseIdealLoop::optimize`                 | `<unknown>` |
|  8.0% |     105 | `PhaseIdealLoop::build_and_optimize`       | `<unknown>` |
|  8.0% |     105 | `PhaseIdealLoop::PhaseIdealLoop`           | `<unknown>` |
|  6.4% |      84 | `Compilation::emit_lir`                    | `<unknown>` |
|  6.1% |      79 | `Compilation::build_hir`                   | `<unknown>` |
|  5.7% |      74 | `LinearScan::do_linear_scan`               | `<unknown>` |
|  4.8% |      62 | `Compile::optimize_loops`                  | `<unknown>` |
|  4.5% |      59 | `PhaseIterGVN::optimize`                   | `<unknown>` |
|  4.4% |      57 | `GraphBuilder::GraphBuilder`               | `<unknown>` |
|  4.2% |      55 | `GraphBuilder::iterate_all_blocks`         | `<unknown>` |

##### Native

|     % | Samples | Function                                        | Location    |
| ----: | ------: | ----------------------------------------------- | ----------- |
| 66.5% |     868 | `_pthread_start`                                | `<unknown>` |
| 66.5% |     868 | `thread_start`                                  | `<unknown>` |
| 66.4% |     867 | `Thread::call_run`                              | `<unknown>` |
| 66.4% |     867 | `thread_native_entry`                           | `<unknown>` |
| 62.2% |     812 | `JavaThread::thread_main_inner`                 | `<unknown>` |
| 17.7% |     231 | `Compiler::compile_method`                      | `<unknown>` |
|  5.2% |      68 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `<unknown>` |
|  4.4% |      58 | `SystemDictionary::resolve_class_from_stream`   | `<unknown>` |
|  4.4% |      58 | `jvm_define_class_common`                       | `<unknown>` |
|  4.4% |      58 | `JVM_DefineClassWithSource`                     | `<unknown>` |
|  4.4% |      58 | `Java_java_lang_ClassLoader_defineClass1`       | `<unknown>` |
|  4.4% |      57 | `KlassFactory::create_from_stream`              | `<unknown>` |
|  4.4% |      57 | `IRScope::IRScope`                              | `<unknown>` |
|  4.4% |      57 | `IR::IR`                                        | `<unknown>` |
|  4.4% |      57 | `Parse::Parse`                                  | `<unknown>` |
|  4.4% |      57 | `ParseGenerator::generate`                      | `<unknown>` |
|  4.1% |      54 | `Parse::do_one_block`                           | `<unknown>` |
|  4.1% |      54 | `Parse::do_all_blocks`                          | `<unknown>` |
|  4.1% |      53 | `ClassFileParser::ClassFileParser`              | `<unknown>` |
|  4.0% |      52 | `WorkerThread::run`                             | `<unknown>` |

##### Ours

|     % | Samples | Function                                   | Location                                                         |
| ----: | ------: | ------------------------------------------ | ---------------------------------------------------------------- |
| 32.4% |     423 | `run`                                      | `org.jetbrains.kotlin.preloading.Preloader`                      |
| 32.4% |     423 | `main`                                     | `org.jetbrains.kotlin.preloading.Preloader`                      |
| 26.7% |     348 | `main`                                     | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`           |
| 26.7% |     348 | `main`                                     | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                     |
| 26.6% |     347 | `doMainNoExit$default`                     | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`          |
| 26.6% |     347 | `doMain`                                   | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`          |
| 26.5% |     346 | `exec`                                     | `org.jetbrains.kotlin.cli.common.CLICompiler`                    |
| 26.5% |     346 | `doMainNoExit`                             | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`          |
| 25.4% |     332 | `doExecutePhased`                          | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                     |
| 25.4% |     332 | `execImpl`                                 | `org.jetbrains.kotlin.cli.common.CLICompiler`                    |
| 25.4% |     331 | `executeAndReturnPipeLineArtifact`         | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`          |
| 25.4% |     331 | `executeAndReturnPipeLineArtifact$default` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`          |
| 25.4% |     331 | `execute`                                  | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`          |
| 25.2% |     329 | `runPhasedPipeline`                        | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`          |
| 25.1% |     328 | `phaseBody`                                | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`                |
| 25.1% |     328 | `invoke`                                   | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`          |
| 25.1% |     328 | `invoke`                                   | `org.jetbrains.kotlin.backend.common.phaser.CompositePhase`      |
| 25.1% |     328 | `invokeToplevel`                           | `org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`             |
| 16.9% |     220 | `executePhase`                             | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase` |
| 12.2% |     159 | `resolveAndCheckFir`                       | `org.jetbrains.kotlin.fir.pipeline.FirUtilsKt`                   |

##### Standard library

|     % | Samples | Function                | Location                                              |
| ----: | ------: | ----------------------- | ----------------------------------------------------- |
| 26.7% |     348 | `invokeStatic`          | `java.lang.invoke.LambdaForm$DMH.0x0000007001008400`  |
| 26.7% |     348 | `invoke`                | `java.lang.invoke.LambdaForm$MH.0x0000007001009800`   |
| 26.7% |     348 | `invokeExact_MT`        | `java.lang.invoke.Invokers$Holder`                    |
| 26.7% |     348 | `invokeImpl`            | `jdk.internal.reflect.DirectMethodHandleAccessor`     |
| 26.7% |     348 | `invoke`                | `jdk.internal.reflect.DirectMethodHandleAccessor`     |
| 26.7% |     348 | `invoke`                | `java.lang.reflect.Method`                            |
|  5.4% |      70 | `read`                  | `java.util.zip.InflaterInputStream`                   |
|  5.3% |      69 | `inflateBytesBytes`     | `java.util.zip.Inflater`                              |
|  5.3% |      69 | `inflate`               | `java.util.zip.Inflater`                              |
|  5.3% |      69 | `read`                  | `java.util.zip.ZipInputStream`                        |
|  5.3% |      69 | `read`                  | `java.io.FilterInputStream`                           |
|  4.8% |      62 | `loadClass`             | `java.lang.ClassLoader`                               |
|  4.5% |      59 | `defineClass1`          | `java.lang.ClassLoader`                               |
|  4.5% |      59 | `defineClass`           | `java.lang.ClassLoader`                               |
|  3.9% |      51 | `resumeWith`            | `kotlin.coroutines.jvm.internal.BaseContinuationImpl` |
|  1.1% |      15 | `getValue`              | `kotlin.SynchronizedLazyImpl`                         |
|  1.1% |      15 | `getValue`              | `kotlin.SafePublicationLazyImpl`                      |
|  0.8% |      11 | `getValue`              | `kotlin.UnsafeLazyImpl`                               |
|  0.8% |      10 | `checkNotNullParameter` | `kotlin.jvm.internal.Intrinsics`                      |
|  0.6% |       8 | `linkCallSite`          | `java.lang.invoke.MethodHandleNatives`                |

##### JIT

|    % | Samples | Function                     | Location    |
| ---: | ------: | ---------------------------- | ----------- |
| 0.5% |       7 | `I2C/C2I adapters(0xbb)`     | `<unknown>` |
| 0.5% |       7 | `I2C/C2I adapters(0xb)`      | `<unknown>` |
| 0.2% |       3 | `itable stub`                | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xbbbbab)` | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xbbb)`    | `<unknown>` |
| 0.1% |       1 | `vtable stub`                | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xba)`     | `<unknown>` |

#### Callers

Callers with the largest contribution to each function's total samples. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `_pthread_start` (`<unknown>`)

|      % | Samples | Caller         | Location    |
| -----: | ------: | -------------- | ----------- |
| 100.0% |     868 | `thread_start` | `<unknown>` |

##### `Thread::call_run` (`<unknown>`)

|      % | Samples | Caller                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |     867 | `thread_native_entry` | `<unknown>` |

##### `thread_native_entry` (`<unknown>`)

|      % | Samples | Caller           | Location    |
| -----: | ------: | ---------------- | ----------- |
| 100.0% |     867 | `_pthread_start` | `<unknown>` |

##### `CompileBroker::compiler_thread_loop` (`<unknown>`)

|      % | Samples | Caller                          | Location    |
| -----: | ------: | ------------------------------- | ----------- |
| 100.0% |     812 | `JavaThread::thread_main_inner` | `<unknown>` |

##### `JavaThread::thread_main_inner` (`<unknown>`)

|      % | Samples | Caller             | Location    |
| -----: | ------: | ------------------ | ----------- |
| 100.0% |     812 | `Thread::call_run` | `<unknown>` |

##### `CompileBroker::invoke_compiler_on_method` (`<unknown>`)

|      % | Samples | Caller                                | Location    |
| -----: | ------: | ------------------------------------- | ----------- |
| 100.0% |     799 | `CompileBroker::compiler_thread_loop` | `<unknown>` |

##### `C2Compiler::compile_method` (`<unknown>`)

|      % | Samples | Caller                                     | Location    |
| -----: | ------: | ------------------------------------------ | ----------- |
| 100.0% |     558 | `CompileBroker::invoke_compiler_on_method` | `<unknown>` |

##### `Compile::Compile` (`<unknown>`)

|      % | Samples | Caller                       | Location    |
| -----: | ------: | ---------------------------- | ----------- |
| 100.0% |     556 | `C2Compiler::compile_method` | `<unknown>` |

##### `run` (`org.jetbrains.kotlin.preloading.Preloader`)

|      % | Samples | Caller | Location                                    |
| -----: | ------: | ------ | ------------------------------------------- |
| 100.0% |     423 | `main` | `org.jetbrains.kotlin.preloading.Preloader` |

##### `main` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`)

|      % | Samples | Caller | Location                                     |
| -----: | ------: | ------ | -------------------------------------------- |
| 100.0% |     348 | `main` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `main` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % | Samples | Caller         | Location                                             |
| -----: | ------: | -------------- | ---------------------------------------------------- |
| 100.0% |     348 | `invokeStatic` | `java.lang.invoke.LambdaForm$DMH.0x0000007001008400` |

##### `invokeStatic` (`java.lang.invoke.LambdaForm$DMH.0x0000007001008400`)

|      % | Samples | Caller   | Location                                            |
| -----: | ------: | -------- | --------------------------------------------------- |
| 100.0% |     348 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x0000007001009800` |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x0000007001009800`)

|      % | Samples | Caller           | Location                           |
| -----: | ------: | ---------------- | ---------------------------------- |
| 100.0% |     348 | `invokeExact_MT` | `java.lang.invoke.Invokers$Holder` |

##### `invokeExact_MT` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Caller       | Location                                          |
| -----: | ------: | ------------ | ------------------------------------------------- |
| 100.0% |     348 | `invokeImpl` | `jdk.internal.reflect.DirectMethodHandleAccessor` |
|   2.0% |       7 | `invoke`     | `java.lang.invoke.BootstrapMethodInvoker`         |

##### `invokeImpl` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % | Samples | Caller   | Location                                          |
| -----: | ------: | -------- | ------------------------------------------------- |
| 100.0% |     348 | `invoke` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % | Samples | Caller   | Location                   |
| -----: | ------: | -------- | -------------------------- |
| 100.0% |     348 | `invoke` | `java.lang.reflect.Method` |

##### `invoke` (`java.lang.reflect.Method`)

|      % | Samples | Caller                                  | Location                                                                |
| -----: | ------: | --------------------------------------- | ----------------------------------------------------------------------- |
| 100.0% |     348 | `run`                                   | `org.jetbrains.kotlin.preloading.Preloader`                             |
|   0.3% |       1 | `parsePreprocessedCommandLineArguments` | `org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt` |

##### `doMainNoExit$default` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % | Samples | Caller   | Location                                                |
| -----: | ------: | -------- | ------------------------------------------------------- |
| 100.0% |     347 | `doMain` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `doMain` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % | Samples | Caller | Location                                               |
| -----: | ------: | ------ | ------------------------------------------------------ |
| 100.0% |     347 | `main` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion` |

##### `exec` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Caller         | Location                                                |
| -----: | ------: | -------------- | ------------------------------------------------------- |
| 100.0% |     346 | `exec`         | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 100.0% |     346 | `doMainNoExit` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `doMainNoExit` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % | Samples | Caller                 | Location                                                |
| -----: | ------: | ---------------------- | ------------------------------------------------------- |
| 100.0% |     346 | `doMainNoExit$default` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `doExecutePhased` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % | Samples | Caller            | Location                                      |
| -----: | ------: | ----------------- | --------------------------------------------- |
| 100.0% |     332 | `doExecutePhased` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`  |
| 100.0% |     332 | `execImpl`        | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `execImpl` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Caller | Location                                      |
| -----: | ------: | ------ | --------------------------------------------- |
| 100.0% |     332 | `exec` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `executeAndReturnPipeLineArtifact` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Caller                                     | Location                                                |
| -----: | ------: | ------------------------------------------ | ------------------------------------------------------- |
| 100.0% |     331 | `executeAndReturnPipeLineArtifact$default` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `executeAndReturnPipeLineArtifact$default` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Caller    | Location                                                |
| -----: | ------: | --------- | ------------------------------------------------------- |
| 100.0% |     331 | `execute` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `execute` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Caller            | Location                                     |
| -----: | ------: | ----------------- | -------------------------------------------- |
| 100.0% |     331 | `doExecutePhased` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `runPhasedPipeline` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Caller                             | Location                                                |
| -----: | ------: | ---------------------------------- | ------------------------------------------------------- |
| 100.0% |     329 | `executeAndReturnPipeLineArtifact` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `phaseBody` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

|      % | Samples | Caller      | Location                                                |
| -----: | ------: | ----------- | ------------------------------------------------------- |
| 100.0% |     328 | `phaseBody` | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`       |
| 100.0% |     328 | `invoke`    | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase` |

##### `invoke` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`)

|      % | Samples | Caller     | Location                                                          |
| -----: | ------: | ---------- | ----------------------------------------------------------------- |
| 100.0% |     328 | `invoke`   | `org.jetbrains.kotlin.backend.common.phaser.CompositePhase`       |
|   5.2% |      17 | `invoke`   | `org.jetbrains.kotlin.backend.common.phaser.PerformByIrFilePhase` |
|   1.2% |       4 | `runPhase` | `org.jetbrains.kotlin.backend.common.phaser.PhaseEngine`          |

##### `invoke` (`org.jetbrains.kotlin.backend.common.phaser.CompositePhase`)

|      % | Samples | Caller           | Location                                             |
| -----: | ------: | ---------------- | ---------------------------------------------------- |
| 100.0% |     328 | `invokeToplevel` | `org.jetbrains.kotlin.config.phaser.CompilerPhaseKt` |

##### `invokeToplevel` (`org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`)

|      % | Samples | Caller              | Location                                                |
| -----: | ------: | ------------------- | ------------------------------------------------------- |
| 100.0% |     328 | `runPhasedPipeline` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `Compile::Code_Gen` (`<unknown>`)

|      % | Samples | Caller             | Location    |
| -----: | ------: | ------------------ | ----------- |
| 100.0% |     280 | `Compile::Compile` | `<unknown>` |

##### `Compiler::compile_method` (`<unknown>`)

|      % | Samples | Caller                                     | Location    |
| -----: | ------: | ------------------------------------------ | ----------- |
| 100.0% |     231 | `CompileBroker::invoke_compiler_on_method` | `<unknown>` |

##### `Compilation::compile_method` (`<unknown>`)

|      % | Samples | Caller                     | Location    |
| -----: | ------: | -------------------------- | ----------- |
| 100.0% |     230 | `Compilation::Compilation` | `<unknown>` |

##### `Compilation::Compilation` (`<unknown>`)

|      % | Samples | Caller                     | Location    |
| -----: | ------: | -------------------------- | ----------- |
| 100.0% |     230 | `Compiler::compile_method` | `<unknown>` |

##### `executePhase` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`)

|      % | Samples | Caller         | Location                                                         |
| -----: | ------: | -------------- | ---------------------------------------------------------------- |
| 100.0% |     220 | `executePhase` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase` |
| 100.0% |     220 | `phaseBody`    | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`                |

##### `Compile::Optimize` (`<unknown>`)

|      % | Samples | Caller             | Location    |
| -----: | ------: | ------------------ | ----------- |
| 100.0% |     205 | `Compile::Compile` | `<unknown>` |

##### `Compilation::compile_java_method` (`<unknown>`)

|      % | Samples | Caller                        | Location    |
| -----: | ------: | ----------------------------- | ----------- |
| 100.0% |     204 | `Compilation::compile_method` | `<unknown>` |

##### `resolveAndCheckFir` (`org.jetbrains.kotlin.fir.pipeline.FirUtilsKt`)

|      % | Samples | Caller         | Location                                                         |
| -----: | ------: | -------------- | ---------------------------------------------------------------- |
| 100.0% |     159 | `executePhase` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase` |

##### `PhaseChaitin::Register_Allocate` (`<unknown>`)

|      % | Samples | Caller              | Location    |
| -----: | ------: | ------------------- | ----------- |
| 100.0% |     154 | `Compile::Code_Gen` | `<unknown>` |

##### `PhaseIdealLoop::optimize` (`<unknown>`)

|     % | Samples | Caller                    | Location    |
| ----: | ------: | ------------------------- | ----------- |
| 51.2% |      62 | `Compile::optimize_loops` | `<unknown>` |
| 48.8% |      59 | `Compile::Optimize`       | `<unknown>` |

##### `PhaseIdealLoop::build_and_optimize` (`<unknown>`)

|      % | Samples | Caller                           | Location    |
| -----: | ------: | -------------------------------- | ----------- |
| 100.0% |     105 | `PhaseIdealLoop::PhaseIdealLoop` | `<unknown>` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`<unknown>`)

|      % | Samples | Caller                     | Location    |
| -----: | ------: | -------------------------- | ----------- |
| 100.0% |     105 | `PhaseIdealLoop::optimize` | `<unknown>` |

##### `Compilation::emit_lir` (`<unknown>`)

|      % | Samples | Caller                             | Location    |
| -----: | ------: | ---------------------------------- | ----------- |
| 100.0% |      84 | `Compilation::compile_java_method` | `<unknown>` |

##### `Compilation::build_hir` (`<unknown>`)

|      % | Samples | Caller                             | Location    |
| -----: | ------: | ---------------------------------- | ----------- |
| 100.0% |      79 | `Compilation::compile_java_method` | `<unknown>` |

##### `LinearScan::do_linear_scan` (`<unknown>`)

|      % | Samples | Caller                  | Location    |
| -----: | ------: | ----------------------- | ----------- |
| 100.0% |      74 | `Compilation::emit_lir` | `<unknown>` |

##### `read` (`java.util.zip.InflaterInputStream`)

|     % | Samples | Caller     | Location                       |
| ----: | ------: | ---------- | ------------------------------ |
| 98.6% |      69 | `read`     | `java.util.zip.ZipInputStream` |
|  1.4% |       1 | `getBytes` | `jdk.internal.loader.Resource` |

##### `inflateBytesBytes` (`java.util.zip.Inflater`)

|      % | Samples | Caller    | Location                 |
| -----: | ------: | --------- | ------------------------ |
| 100.0% |      69 | `inflate` | `java.util.zip.Inflater` |

##### `inflate` (`java.util.zip.Inflater`)

|     % | Samples | Caller                         | Location                                                          |
| ----: | ------: | ------------------------------ | ----------------------------------------------------------------- |
| 98.6% |      68 | `read`                         | `java.util.zip.InflaterInputStream`                               |
|  1.4% |       1 | `inflate`                      | `java.util.zip.Inflater`                                          |
|  1.4% |       1 | `contentsToByteArray$lambda$0` | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt` |

##### `read` (`java.util.zip.ZipInputStream`)

|      % | Samples | Caller | Location                    |
| -----: | ------: | ------ | --------------------------- |
| 100.0% |      69 | `read` | `java.io.FilterInputStream` |

##### `read` (`java.io.FilterInputStream`)

|      % | Samples | Caller                   | Location                                               |
| -----: | ------: | ------------------------ | ------------------------------------------------------ |
| 100.0% |      69 | `loadAllClassesFromJars` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |
|   1.4% |       1 | `read`                   | `java.io.PushbackInputStream`                          |

##### `Java_java_util_zip_Inflater_inflateBytesBytes` (`<unknown>`)

|      % | Samples | Caller              | Location                 |
| -----: | ------: | ------------------- | ------------------------ |
| 100.0% |      68 | `inflateBytesBytes` | `java.util.zip.Inflater` |

##### `Compile::optimize_loops` (`<unknown>`)

|      % | Samples | Caller              | Location    |
| -----: | ------: | ------------------- | ----------- |
| 100.0% |      62 | `Compile::Optimize` | `<unknown>` |

##### `loadClass` (`java.lang.ClassLoader`)

|     % | Samples | Caller            | Location                                                                                      |
| ----: | ------: | ----------------- | --------------------------------------------------------------------------------------------- |
| 98.4% |      61 | `loadClass`       | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader`                                      |
|  1.6% |       1 | `loadClass`       | `java.lang.ClassLoader`                                                                       |
|  1.6% |       1 | `_init_$lambda$0` | `org.jetbrains.kotlin.scripting.definitions.ScriptCompilationConfigurationFromLegacyTemplate` |

##### `PhaseIterGVN::optimize` (`<unknown>`)

|     % | Samples | Caller                                     | Location    |
| ----: | ------: | ------------------------------------------ | ----------- |
| 62.7% |      37 | `Compile::Optimize`                        | `<unknown>` |
| 25.4% |      15 | `PhaseIdealLoop::optimize`                 | `<unknown>` |
|  6.8% |       4 | `PhaseMacroExpand::expand_macro_nodes`     | `<unknown>` |
|  3.4% |       2 | `Compile::process_for_post_loop_opts_igvn` | `<unknown>` |
|  1.7% |       1 | `Compile::inline_incrementally_cleanup`    | `<unknown>` |

##### `defineClass1` (`java.lang.ClassLoader`)

|      % | Samples | Caller        | Location                |
| -----: | ------: | ------------- | ----------------------- |
| 100.0% |      59 | `defineClass` | `java.lang.ClassLoader` |

##### `defineClass` (`java.lang.ClassLoader`)

|      % | Samples | Caller        | Location                                                 |
| -----: | ------: | ------------- | -------------------------------------------------------- |
| 100.0% |      59 | `defineClass` | `java.lang.ClassLoader`                                  |
| 100.0% |      59 | `findClass`   | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |

##### `SystemDictionary::resolve_class_from_stream` (`<unknown>`)

|      % | Samples | Caller                    | Location    |
| -----: | ------: | ------------------------- | ----------- |
| 100.0% |      58 | `jvm_define_class_common` | `<unknown>` |

##### `jvm_define_class_common` (`<unknown>`)

|      % | Samples | Caller                      | Location    |
| -----: | ------: | --------------------------- | ----------- |
| 100.0% |      58 | `JVM_DefineClassWithSource` | `<unknown>` |

##### `JVM_DefineClassWithSource` (`<unknown>`)

|      % | Samples | Caller                                    | Location    |
| -----: | ------: | ----------------------------------------- | ----------- |
| 100.0% |      58 | `Java_java_lang_ClassLoader_defineClass1` | `<unknown>` |

##### `Java_java_lang_ClassLoader_defineClass1` (`<unknown>`)

|      % | Samples | Caller         | Location                |
| -----: | ------: | -------------- | ----------------------- |
| 100.0% |      58 | `defineClass1` | `java.lang.ClassLoader` |

##### `GraphBuilder::GraphBuilder` (`<unknown>`)

|      % | Samples | Caller             | Location    |
| -----: | ------: | ------------------ | ----------- |
| 100.0% |      57 | `IRScope::IRScope` | `<unknown>` |

##### `KlassFactory::create_from_stream` (`<unknown>`)

|     % | Samples | Caller                                               | Location    |
| ----: | ------: | ---------------------------------------------------- | ----------- |
| 98.2% |      56 | `SystemDictionary::resolve_class_from_stream`        | `<unknown>` |
|  1.8% |       1 | `SystemDictionary::resolve_hidden_class_from_stream` | `<unknown>` |

##### `IRScope::IRScope` (`<unknown>`)

|      % | Samples | Caller   | Location    |
| -----: | ------: | -------- | ----------- |
| 100.0% |      57 | `IR::IR` | `<unknown>` |

##### `IR::IR` (`<unknown>`)

|      % | Samples | Caller                   | Location    |
| -----: | ------: | ------------------------ | ----------- |
| 100.0% |      57 | `Compilation::build_hir` | `<unknown>` |

##### `Parse::Parse` (`<unknown>`)

|      % | Samples | Caller                     | Location    |
| -----: | ------: | -------------------------- | ----------- |
| 100.0% |      57 | `ParseGenerator::generate` | `<unknown>` |

##### `ParseGenerator::generate` (`<unknown>`)

|      % | Samples | Caller                             | Location    |
| -----: | ------: | ---------------------------------- | ----------- |
| 100.0% |      57 | `Compile::Compile`                 | `<unknown>` |
|  52.6% |      30 | `PredictedCallGenerator::generate` | `<unknown>` |
|  47.4% |      27 | `Parse::do_call`                   | `<unknown>` |

##### `GraphBuilder::iterate_all_blocks` (`<unknown>`)

|      % | Samples | Caller                          | Location    |
| -----: | ------: | ------------------------------- | ----------- |
| 100.0% |      55 | `GraphBuilder::GraphBuilder`    | `<unknown>` |
|  54.5% |      30 | `GraphBuilder::try_inline_full` | `<unknown>` |

##### `Parse::do_one_block` (`<unknown>`)

|      % | Samples | Caller                 | Location    |
| -----: | ------: | ---------------------- | ----------- |
| 100.0% |      54 | `Parse::do_all_blocks` | `<unknown>` |

##### `Parse::do_all_blocks` (`<unknown>`)

|      % | Samples | Caller         | Location    |
| -----: | ------: | -------------- | ----------- |
| 100.0% |      54 | `Parse::Parse` | `<unknown>` |

##### `ClassFileParser::ClassFileParser` (`<unknown>`)

|      % | Samples | Caller                             | Location    |
| -----: | ------: | ---------------------------------- | ----------- |
| 100.0% |      53 | `KlassFactory::create_from_stream` | `<unknown>` |

##### `WorkerThread::run` (`<unknown>`)

|      % | Samples | Caller             | Location    |
| -----: | ------: | ------------------ | ----------- |
| 100.0% |      52 | `Thread::call_run` | `<unknown>` |

##### `resumeWith` (`kotlin.coroutines.jvm.internal.BaseContinuationImpl`)

|     % | Samples | Caller                  | Location                                                              |
| ----: | ------: | ----------------------- | --------------------------------------------------------------------- |
| 90.2% |      46 | `resumeTask`            | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager`    |
| 47.1% |      24 | `processCandidate`      | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner` |
|  2.0% |       1 | `run`                   | `kotlinx.coroutines.DispatchedTask`                                   |
|  2.0% |       1 | `resumeCancellableWith` | `kotlinx.coroutines.internal.DispatchedContinuationKt`                |

##### `getValue` (`kotlin.SynchronizedLazyImpl`)

|     % | Samples | Caller                                                                  | Location                                                                   |
| ----: | ------: | ----------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| 13.3% |       2 | `getInstance`                                                           | `org.jetbrains.kotlin.builtins.DefaultBuiltIns$Companion`                  |
| 13.3% |       2 | `getMyChildren`                                                         | `org.jetbrains.kotlin.cli.jvm.modules.CoreJrtVirtualFile`                  |
| 13.3% |       2 | `getAnnotations`                                                        | `org.jetbrains.kotlin.ir.descriptors.IrBasedDeclarationDescriptor`         |
| 13.3% |       2 | `getSuperTypeRefs`                                                      | `org.jetbrains.kotlin.fir.java.declarations.FirJavaClass`                  |
|  6.7% |       1 | `getAllBooleanOperatorExpressionCheckers$org_jetbrains_kotlin_checkers` | `org.jetbrains.kotlin.fir.analysis.checkers.expression.ExpressionCheckers` |

##### `getValue` (`kotlin.SafePublicationLazyImpl`)

|     % | Samples | Caller              | Location                                                                        |
| ----: | ------: | ------------------- | ------------------------------------------------------------------------------- |
| 53.3% |       8 | `getJavaField`      | `kotlin.reflect.jvm.internal.DescriptorKProperty`                               |
| 20.0% |       3 | `getCallablesIndex` | `org.jetbrains.kotlin.fir.scopes.impl.FirClassDeclaredMemberScopeImpl`          |
| 13.3% |       2 | `getAnnotationInfo` | `org.jetbrains.kotlin.fir.java.deserialization.JvmBinaryAnnotationDeserializer` |
| 13.3% |       2 | `getDeclarations`   | `org.jetbrains.kotlin.fir.java.FirLazyJavaDeclarationList`                      |
|  6.7% |       1 | `getFirAnnotations` | `org.jetbrains.kotlin.fir.java.enhancement.FirLazyJavaAnnotationList`           |

##### `getValue` (`kotlin.UnsafeLazyImpl`)

|     % | Samples | Caller                                                 | Location                                                                                                                        |
| ----: | ------: | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| 72.7% |       8 | `resolveVariableAccessAndSelectCandidateImpl$lambda$1` | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`                                                                        |
| 18.2% |       2 | `getClassifierResolverResult`                          | `org.jetbrains.kotlin.load.java.structure.impl.classFiles.PlainJavaClassifierType`                                              |
| 18.2% |       2 | `getReversedFilteredLocalScopes`                       | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerDataElementsForName`                                                         |
|  9.1% |       1 | `getSyntheticCallGenerator`                            | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformer$BodyResolveTransformerComponents` |

##### `checkNotNullParameter` (`kotlin.jvm.internal.Intrinsics`)

|     % | Samples | Caller             | Location                                                                                                                 |
| ----: | ------: | ------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| 10.0% |       1 | `typeConstructor`  | `org.jetbrains.kotlin.types.model.TypeSystemContextContextualKt`                                                         |
| 10.0% |       1 | `reduceCandidates` | `org.jetbrains.kotlin.fir.resolve.calls.overloads.FirOverloadByLambdaReturnTypeResolver`                                 |
| 10.0% |       1 | `outerClassSymbol` | `org.jetbrains.kotlin.fir.analysis.checkers.FirHelpersKt`                                                                |
| 10.0% |       1 | `check`            | `org.jetbrains.kotlin.fir.analysis.checkers.expression.FirMissingDependencySupertypeInQualifiedAccessExpressionsChecker` |
| 10.0% |       1 | `isError`          | `org.jetbrains.kotlin.fir.references.FirReferenceUtilsKt`                                                                |

##### `linkCallSite` (`java.lang.invoke.MethodHandleNatives`)

|     % | Samples | Caller                   | Location                                                            |
| ----: | ------: | ------------------------ | ------------------------------------------------------------------- |
| 12.5% |       1 | `<init>`                 | `com.intellij.psi.stubs.StubElementRegistryServiceImpl`             |
| 12.5% |       1 | `processSymbolsByName`   | `org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope` |
| 12.5% |       1 | `loadPluginsLegacyStyle` | `org.jetbrains.kotlin.cli.jvm.plugins.PluginCliParser`              |
| 12.5% |       1 | `<clinit>`               | `org.jetbrains.kotlin.cli.jvm.modules.CoreJrtFileSystem`            |
| 12.5% |       1 | `computeProperties`      | `org.jetbrains.kotlin.fir.java.scopes.JavaClassStaticUseSiteScope`  |

##### `I2C/C2I adapters(0xbb)` (`<unknown>`)

|     % | Samples | Caller                    | Location                                                                                  |
| ----: | ------: | ------------------------- | ----------------------------------------------------------------------------------------- |
| 14.3% |       1 | `parseMethodDescription`  | `org.jetbrains.kotlin.load.java.structure.impl.classFiles.BinaryJavaMethodBase$Companion` |
| 14.3% |       1 | `isInplaceCallEndMarker`  | `org.jetbrains.kotlin.codegen.inline.InlineArgumentsInPlaceKt`                            |
| 14.3% |       1 | `addType`                 | `jdk.internal.org.objectweb.asm.SymbolTable`                                              |
| 14.3% |       1 | `containingNonLocalClass` | `org.jetbrains.kotlin.fir.FirVisibilityCheckerKt`                                         |
| 14.3% |       1 | `data$lambda$0`           | `kotlin.reflect.jvm.internal.KClassImpl`                                                  |

##### `I2C/C2I adapters(0xb)` (`<unknown>`)

|     % | Samples | Caller                    | Location                                                                      |
| ----: | ------: | ------------------------- | ----------------------------------------------------------------------------- |
| 14.3% |       1 | `<init>`                  | `org.jetbrains.kotlin.resolve.constants.AnnotationValue`                      |
| 14.3% |       1 | `isPrimitiveType`         | `org.jetbrains.kotlin.backend.jvm.mapping.IrTypeCheckerContextForTypeMapping` |
| 14.3% |       1 | `isInvokeSuspendOfLambda` | `org.jetbrains.kotlin.backend.jvm.ir.JvmIrCoroutineUtilsKt`                   |
| 14.3% |       1 | `getFileOrNull`           | `org.jetbrains.kotlin.ir.util.IrUtilsKt`                                      |
| 14.3% |       1 | `resolveUserTypeToSymbol` | `org.jetbrains.kotlin.fir.resolve.providers.impl.FirTypeResolverImpl`         |

##### `itable stub` (`<unknown>`)

|     % | Samples | Caller                  | Location                                                                               |
| ----: | ------: | ----------------------- | -------------------------------------------------------------------------------------- |
| 33.3% |       1 | `isDeprecatedInJavaDoc` | `org.jetbrains.kotlin.load.java.structure.impl.classFiles.BinaryJavaModifierListOwner` |
| 33.3% |       1 | `addAll`                | `java.util.AbstractCollection`                                                         |
| 33.3% |       1 | `lookahead`             | `org.jetbrains.kotlin.parsing.AbstractKotlinParsing`                                   |

##### `I2C/C2I adapters(0xbbbbab)` (`<unknown>`)

|      % | Samples | Caller                                                      | Location                                                                                      |
| -----: | ------: | ----------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `transformBlockInCurrentScope$org_jetbrains_kotlin_resolve` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer` |

##### `I2C/C2I adapters(0xbbb)` (`<unknown>`)

|      % | Samples | Caller         | Location                                                                        |
| -----: | ------: | -------------- | ------------------------------------------------------------------------------- |
| 100.0% |       1 | `visitElement` | `org.jetbrains.kotlin.backend.jvm.lower.RecordEnclosingMethodsLowering$lower$1` |

##### `vtable stub` (`<unknown>`)

|      % | Samples | Caller   | Location            |
| -----: | ------: | -------- | ------------------- |
| 100.0% |       1 | `putVal` | `java.util.HashMap` |

##### `I2C/C2I adapters(0xba)` (`<unknown>`)

|      % | Samples | Caller         | Location                                          |
| -----: | ------: | -------------- | ------------------------------------------------- |
| 100.0% |       1 | `visitVarInsn` | `org.jetbrains.org.objectweb.asm.tree.MethodNode` |

#### Callees

Callees with the largest contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `_pthread_start` (`<unknown>`)

|     % | Samples | Callee                | Location    |
| ----: | ------: | --------------------- | ----------- |
| 99.9% |     867 | `thread_native_entry` | `<unknown>` |
|  0.1% |       1 | `ThreadJavaMain`      | `<unknown>` |

##### `thread_start` (`<unknown>`)

|      % | Samples | Callee           | Location    |
| -----: | ------: | ---------------- | ----------- |
| 100.0% |     868 | `_pthread_start` | `<unknown>` |

##### `Thread::call_run` (`<unknown>`)

|     % | Samples | Callee                          | Location    |
| ----: | ------: | ------------------------------- | ----------- |
| 93.7% |     812 | `JavaThread::thread_main_inner` | `<unknown>` |
|  6.0% |      52 | `WorkerThread::run`             | `<unknown>` |
|  0.2% |       2 | `WatcherThread::run`            | `<unknown>` |
|  0.1% |       1 | `ConcurrentGCThread::run`       | `<unknown>` |

##### `thread_native_entry` (`<unknown>`)

|      % | Samples | Callee             | Location    |
| -----: | ------: | ------------------ | ----------- |
| 100.0% |     867 | `Thread::call_run` | `<unknown>` |

##### `CompileBroker::compiler_thread_loop` (`<unknown>`)

|     % | Samples | Callee                                     | Location    |
| ----: | ------: | ------------------------------------------ | ----------- |
| 98.4% |     799 | `CompileBroker::invoke_compiler_on_method` | `<unknown>` |
|  1.6% |      13 | `CompileQueue::get`                        | `<unknown>` |

##### `JavaThread::thread_main_inner` (`<unknown>`)

|      % | Samples | Callee                                | Location    |
| -----: | ------: | ------------------------------------- | ----------- |
| 100.0% |     812 | `CompileBroker::compiler_thread_loop` | `<unknown>` |

##### `CompileBroker::invoke_compiler_on_method` (`<unknown>`)

|     % | Samples | Callee                          | Location    |
| ----: | ------: | ------------------------------- | ----------- |
| 69.8% |     558 | `C2Compiler::compile_method`    | `<unknown>` |
| 28.9% |     231 | `Compiler::compile_method`      | `<unknown>` |
|  0.4% |       3 | `CompilationLog::log_compile`   | `<unknown>` |
|  0.4% |       3 | `ciEnv::ciEnv`                  | `<unknown>` |
|  0.3% |       2 | `ciEnv::get_method_from_handle` | `<unknown>` |

##### `C2Compiler::compile_method` (`<unknown>`)

|     % | Samples | Callee             | Location    |
| ----: | ------: | ------------------ | ----------- |
| 99.6% |     556 | `Compile::Compile` | `<unknown>` |
|  0.4% |       2 | `Chunk::next_chop` | `<unknown>` |

##### `Compile::Compile` (`<unknown>`)

|     % | Samples | Callee                                   | Location    |
| ----: | ------: | ---------------------------------------- | ----------- |
| 50.4% |     280 | `Compile::Code_Gen`                      | `<unknown>` |
| 36.9% |     205 | `Compile::Optimize`                      | `<unknown>` |
| 10.3% |      57 | `ParseGenerator::generate`               | `<unknown>` |
|  1.4% |       8 | `PhaseRemoveUseless::PhaseRemoveUseless` | `<unknown>` |
|  0.2% |       1 | `Arena::Arena`                           | `<unknown>` |

##### `run` (`org.jetbrains.kotlin.preloading.Preloader`)

|     % | Samples | Callee           | Location                                               |
| ----: | ------: | ---------------- | ------------------------------------------------------ |
| 82.3% |     348 | `invoke`         | `java.lang.reflect.Method`                             |
| 17.5% |      74 | `preloadClasses` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |
|  0.2% |       1 | `joining`        | `java.util.stream.Collectors`                          |

##### `main` (`org.jetbrains.kotlin.preloading.Preloader`)

|      % | Samples | Callee | Location                                    |
| -----: | ------: | ------ | ------------------------------------------- |
| 100.0% |     423 | `run`  | `org.jetbrains.kotlin.preloading.Preloader` |

##### `main` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`)

|     % | Samples | Callee   | Location                                                |
| ----: | ------: | -------- | ------------------------------------------------------- |
| 99.7% |     347 | `doMain` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
|  0.3% |       1 | `<init>` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |

##### `main` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % | Samples | Callee | Location                                               |
| -----: | ------: | ------ | ------------------------------------------------------ |
| 100.0% |     348 | `main` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion` |

##### `invokeStatic` (`java.lang.invoke.LambdaForm$DMH.0x0000007001008400`)

|      % | Samples | Callee | Location                                     |
| -----: | ------: | ------ | -------------------------------------------- |
| 100.0% |     348 | `main` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x0000007001009800`)

|      % | Samples | Callee         | Location                                             |
| -----: | ------: | -------------- | ---------------------------------------------------- |
| 100.0% |     348 | `invokeStatic` | `java.lang.invoke.LambdaForm$DMH.0x0000007001008400` |

##### `invokeExact_MT` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Callee         | Location                                             |
| -----: | ------: | -------------- | ---------------------------------------------------- |
| 100.0% |     348 | `invoke`       | `java.lang.invoke.LambdaForm$MH.0x0000007001009800`  |
|   1.1% |       4 | `invokeStatic` | `java.lang.invoke.LambdaForm$DMH.0x0000007001234000` |
|   0.9% |       3 | `invokeStatic` | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### `invokeImpl` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % | Samples | Callee           | Location                           |
| -----: | ------: | ---------------- | ---------------------------------- |
| 100.0% |     348 | `invokeExact_MT` | `java.lang.invoke.Invokers$Holder` |

##### `invoke` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % | Samples | Callee       | Location                                          |
| -----: | ------: | ------------ | ------------------------------------------------- |
| 100.0% |     348 | `invokeImpl` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke` (`java.lang.reflect.Method`)

|      % | Samples | Callee                  | Location                                          |
| -----: | ------: | ----------------------- | ------------------------------------------------- |
| 100.0% |     348 | `invoke`                | `jdk.internal.reflect.DirectMethodHandleAccessor` |
|   0.3% |       1 | `acquireMethodAccessor` | `java.lang.reflect.Method`                        |

##### `doMainNoExit$default` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|     % | Samples | Callee                   | Location                                                |
| ----: | ------: | ------------------------ | ------------------------------------------------------- |
| 99.7% |     346 | `doMainNoExit`           | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
|  0.3% |       1 | `defaultMessageRenderer` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `doMain` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % | Samples | Callee                 | Location                                                |
| -----: | ------: | ---------------------- | ------------------------------------------------------- |
| 100.0% |     347 | `doMainNoExit$default` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `exec` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Callee                              | Location                                                                |
| -----: | ------: | ----------------------------------- | ----------------------------------------------------------------------- |
| 100.0% |     346 | `exec`                              | `org.jetbrains.kotlin.cli.common.CLICompiler`                           |
|  96.0% |     332 | `execImpl`                          | `org.jetbrains.kotlin.cli.common.CLICompiler`                           |
|   2.3% |       8 | `<clinit>`                          | `org.jetbrains.kotlin.cli.common.ArgumentsKt`                           |
|   1.4% |       5 | `parseCommandLineArguments$default` | `org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt` |
|   0.3% |       1 | `loadClass`                         | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader`                |

##### `doMainNoExit` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % | Samples | Callee | Location                                      |
| -----: | ------: | ------ | --------------------------------------------- |
| 100.0% |     346 | `exec` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `doExecutePhased` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % | Samples | Callee                         | Location                                                |
| -----: | ------: | ------------------------------ | ------------------------------------------------------- |
| 100.0% |     332 | `doExecutePhased`              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
|  99.7% |     331 | `execute`                      | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
|   0.3% |       1 | `getDefaultPerformanceManager` | `org.jetbrains.kotlin.cli.common.CLICompiler`           |

##### `execImpl` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Callee            | Location                                     |
| -----: | ------: | ----------------- | -------------------------------------------- |
| 100.0% |     332 | `doExecutePhased` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `executeAndReturnPipeLineArtifact` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|     % | Samples | Callee                     | Location                                                |
| ----: | ------: | -------------------------- | ------------------------------------------------------- |
| 99.4% |     329 | `runPhasedPipeline`        | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
|  0.3% |       1 | `disposeRootInWriteAction` | `org.jetbrains.kotlin.cli.common.UtilsKt`               |
|  0.3% |       1 | `<clinit>`                 | `com.intellij.openapi.util.Disposer`                    |

##### `executeAndReturnPipeLineArtifact$default` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Callee                             | Location                                                |
| -----: | ------: | ---------------------------------- | ------------------------------------------------------- |
| 100.0% |     331 | `executeAndReturnPipeLineArtifact` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `execute` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Callee                                     | Location                                                |
| -----: | ------: | ------------------------------------------ | ------------------------------------------------------- |
| 100.0% |     331 | `executeAndReturnPipeLineArtifact$default` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `runPhasedPipeline` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|     % | Samples | Callee                     | Location                                                                    |
| ----: | ------: | -------------------------- | --------------------------------------------------------------------------- |
| 99.7% |     328 | `invokeToplevel`           | `org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`                        |
|  0.3% |       1 | `reportToMessageCollector` | `org.jetbrains.kotlin.cli.common.fir.FirDiagnosticsCompilerResultsReporter` |

##### `phaseBody` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

|      % | Samples | Callee         | Location                                                              |
| -----: | ------: | -------------- | --------------------------------------------------------------------- |
| 100.0% |     328 | `phaseBody`    | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`                     |
|  67.1% |     220 | `executePhase` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`      |
|  23.2% |      76 | `executePhase` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`       |
|   7.9% |      26 | `executePhase` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFir2IrPipelinePhase`        |
|   1.2% |       4 | `executePhase` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmConfigurationPipelinePhase` |

##### `invoke` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`)

|      % | Samples | Callee          | Location                                                         |
| -----: | ------: | --------------- | ---------------------------------------------------------------- |
| 100.0% |     328 | `phaseBody`     | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`                |
|   4.9% |      16 | `phaseBody`     | `org.jetbrains.kotlin.backend.common.phaser.FileLoweringPhase`   |
|   1.2% |       4 | `phaseBody`     | `org.jetbrains.kotlin.backend.common.phaser.ModuleLoweringPhase` |
|   0.3% |       1 | `setPhaseCount` | `org.jetbrains.kotlin.config.phaser.PhaserState`                 |

##### `invoke` (`org.jetbrains.kotlin.backend.common.phaser.CompositePhase`)

|      % | Samples | Callee   | Location                                                |
| -----: | ------: | -------- | ------------------------------------------------------- |
| 100.0% |     328 | `invoke` | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase` |

##### `invokeToplevel` (`org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`)

|      % | Samples | Callee   | Location                                                    |
| -----: | ------: | -------- | ----------------------------------------------------------- |
| 100.0% |     328 | `invoke` | `org.jetbrains.kotlin.backend.common.phaser.CompositePhase` |

##### `Compile::Code_Gen` (`<unknown>`)

|     % | Samples | Callee                            | Location    |
| ----: | ------: | --------------------------------- | ----------- |
| 55.0% |     154 | `PhaseChaitin::Register_Allocate` | `<unknown>` |
| 19.6% |      55 | `Matcher::match`                  | `<unknown>` |
| 12.1% |      34 | `PhaseCFG::do_global_code_motion` | `<unknown>` |
| 11.8% |      33 | `PhaseOutput::Output`             | `<unknown>` |
|  1.4% |       4 | `PhaseOutput::install_code`       | `<unknown>` |

##### `Compiler::compile_method` (`<unknown>`)

|     % | Samples | Callee                     | Location    |
| ----: | ------: | -------------------------- | ----------- |
| 99.6% |     230 | `Compilation::Compilation` | `<unknown>` |
|  0.4% |       1 | `Chunk::next_chop`         | `<unknown>` |

##### `Compilation::compile_method` (`<unknown>`)

|     % | Samples | Callee                             | Location    |
| ----: | ------: | ---------------------------------- | ----------- |
| 88.7% |     204 | `Compilation::compile_java_method` | `<unknown>` |
| 10.4% |      24 | `ciEnv::register_method`           | `<unknown>` |
|  0.4% |       1 | `Dependencies::assert_common_1`    | `<unknown>` |
|  0.4% |       1 | `tlv_get_addr`                     | `<unknown>` |

##### `Compilation::Compilation` (`<unknown>`)

|      % | Samples | Callee                        | Location    |
| -----: | ------: | ----------------------------- | ----------- |
| 100.0% |     230 | `Compilation::compile_method` | `<unknown>` |

##### `executePhase` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`)

|      % | Samples | Callee                        | Location                                                         |
| -----: | ------: | ----------------------------- | ---------------------------------------------------------------- |
| 100.0% |     220 | `executePhase`                | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase` |
|  72.3% |     159 | `resolveAndCheckFir`          | `org.jetbrains.kotlin.fir.pipeline.FirUtilsKt`                   |
|  10.5% |      23 | `createEnvironmentAndSources` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase` |
|   7.7% |      17 | `prepareJvmSessions`          | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase` |
|   7.3% |      16 | `buildFirViaLightTree`        | `org.jetbrains.kotlin.fir.pipeline.FirUtilsKt`                   |

##### `Compile::Optimize` (`<unknown>`)

|     % | Samples | Callee                         | Location    |
| ----: | ------: | ------------------------------ | ----------- |
| 30.2% |      62 | `Compile::optimize_loops`      | `<unknown>` |
| 28.8% |      59 | `PhaseIdealLoop::optimize`     | `<unknown>` |
| 18.0% |      37 | `PhaseIterGVN::optimize`       | `<unknown>` |
|  5.9% |      12 | `ConnectionGraph::do_analysis` | `<unknown>` |
|  4.4% |       9 | `PhaseCCP::PhaseCCP`           | `<unknown>` |

##### `Compilation::compile_java_method` (`<unknown>`)

|     % | Samples | Callee                         | Location    |
| ----: | ------: | ------------------------------ | ----------- |
| 41.2% |      84 | `Compilation::emit_lir`        | `<unknown>` |
| 38.7% |      79 | `Compilation::build_hir`       | `<unknown>` |
| 18.6% |      38 | `Compilation::emit_code_body`  | `<unknown>` |
|  1.0% |       2 | `ciMethod::ensure_method_data` | `<unknown>` |
|  0.5% |       1 | `FrameMap::FrameMap`           | `<unknown>` |

##### `resolveAndCheckFir` (`org.jetbrains.kotlin.fir.pipeline.FirUtilsKt`)

|     % | Samples | Callee          | Location                                      |
| ----: | ------: | --------------- | --------------------------------------------- |
| 76.7% |     122 | `runResolution` | `org.jetbrains.kotlin.fir.pipeline.AnalyseKt` |
| 23.3% |      37 | `runCheckers`   | `org.jetbrains.kotlin.fir.pipeline.AnalyseKt` |

##### `PhaseChaitin::Register_Allocate` (`<unknown>`)

|     % | Samples | Callee                                     | Location    |
| ----: | ------: | ------------------------------------------ | ----------- |
| 17.5% |      27 | `PhaseChaitin::Split`                      | `<unknown>` |
| 14.3% |      22 | `PhaseChaitin::post_allocate_copy_removal` | `<unknown>` |
| 14.3% |      22 | `PhaseChaitin::build_ifg_physical`         | `<unknown>` |
| 13.0% |      20 | `PhaseChaitin::gather_lrg_masks`           | `<unknown>` |
| 12.3% |      19 | `PhaseLive::compute`                       | `<unknown>` |

##### `PhaseIdealLoop::optimize` (`<unknown>`)

|     % | Samples | Callee                           | Location    |
| ----: | ------: | -------------------------------- | ----------- |
| 86.8% |     105 | `PhaseIdealLoop::PhaseIdealLoop` | `<unknown>` |
| 12.4% |      15 | `PhaseIterGVN::optimize`         | `<unknown>` |
|  0.8% |       1 | `Chunk::next_chop`               | `<unknown>` |

##### `PhaseIdealLoop::build_and_optimize` (`<unknown>`)

|     % | Samples | Callee                                 | Location    |
| ----: | ------: | -------------------------------------- | ----------- |
| 30.5% |      32 | `PhaseIdealLoop::build_loop_late`      | `<unknown>` |
| 17.1% |      18 | `PhaseIdealLoop::split_if_with_blocks` | `<unknown>` |
| 14.3% |      15 | `PhaseIdealLoop::build_loop_early`     | `<unknown>` |
| 14.3% |      15 | `PhaseIdealLoop::Dominators`           | `<unknown>` |
| 10.5% |      11 | `PhaseIdealLoop::build_loop_tree`      | `<unknown>` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`<unknown>`)

|      % | Samples | Callee                               | Location    |
| -----: | ------: | ------------------------------------ | ----------- |
| 100.0% |     105 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |

##### `Compilation::emit_lir` (`<unknown>`)

|     % | Samples | Callee                           | Location    |
| ----: | ------: | -------------------------------- | ----------- |
| 88.1% |      74 | `LinearScan::do_linear_scan`     | `<unknown>` |
|  8.3% |       7 | `BlockList::iterate_forward`     | `<unknown>` |
|  1.2% |       1 | `LinearScan::assign_reg_num`     | `<unknown>` |
|  1.2% |       1 | `ControlFlowOptimizer::optimize` | `<unknown>` |
|  1.2% |       1 | `LIRGenerator::LIRGenerator`     | `<unknown>` |

##### `Compilation::build_hir` (`<unknown>`)

|     % | Samples | Callee                                       | Location    |
| ----: | ------: | -------------------------------------------- | ----------- |
| 72.2% |      57 | `IR::IR`                                     | `<unknown>` |
| 15.2% |      12 | `GlobalValueNumbering::GlobalValueNumbering` | `<unknown>` |
|  6.3% |       5 | `IR::eliminate_null_checks`                  | `<unknown>` |
|  2.5% |       2 | `IR::compute_use_counts`                     | `<unknown>` |
|  1.3% |       1 | `Goto::visit`                                | `<unknown>` |

##### `LinearScan::do_linear_scan` (`<unknown>`)

|     % | Samples | Callee                                | Location    |
| ----: | ------: | ------------------------------------- | ----------- |
| 33.8% |      25 | `LinearScan::allocate_registers`      | `<unknown>` |
| 18.9% |      14 | `LinearScan::assign_reg_num`          | `<unknown>` |
| 13.5% |      10 | `LinearScan::build_intervals`         | `<unknown>` |
|  8.1% |       6 | `LinearScan::compute_local_live_sets` | `<unknown>` |
|  5.4% |       4 | `LinearScan::eliminate_spill_moves`   | `<unknown>` |

##### `read` (`java.util.zip.InflaterInputStream`)

|     % | Samples | Callee       | Location                            |
| ----: | ------: | ------------ | ----------------------------------- |
| 97.1% |      68 | `inflate`    | `java.util.zip.Inflater`            |
|  1.4% |       1 | `fill`       | `java.util.zip.InflaterInputStream` |
|  1.4% |       1 | `needsInput` | `java.util.zip.Inflater`            |

##### `inflateBytesBytes` (`java.util.zip.Inflater`)

|     % | Samples | Callee                                          | Location    |
| ----: | ------: | ----------------------------------------------- | ----------- |
| 98.6% |      68 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `<unknown>` |

##### `inflate` (`java.util.zip.Inflater`)

|      % | Samples | Callee              | Location                 |
| -----: | ------: | ------------------- | ------------------------ |
| 100.0% |      69 | `inflateBytesBytes` | `java.util.zip.Inflater` |
|   1.4% |       1 | `inflate`           | `java.util.zip.Inflater` |

##### `read` (`java.util.zip.ZipInputStream`)

|      % | Samples | Callee | Location                            |
| -----: | ------: | ------ | ----------------------------------- |
| 100.0% |      69 | `read` | `java.util.zip.InflaterInputStream` |

##### `read` (`java.io.FilterInputStream`)

|      % | Samples | Callee | Location                       |
| -----: | ------: | ------ | ------------------------------ |
| 100.0% |      69 | `read` | `java.util.zip.ZipInputStream` |
|   1.4% |       1 | `read` | `java.io.BufferedInputStream`  |

##### `Java_java_util_zip_Inflater_inflateBytesBytes` (`<unknown>`)

|     % | Samples | Callee                              | Location    |
| ----: | ------: | ----------------------------------- | ----------- |
| 69.1% |      47 | `inflate_fast`                      | `<unknown>` |
| 25.0% |      17 | `inflate`                           | `<unknown>` |
|  4.4% |       3 | `jni_GetPrimitiveArrayCritical`     | `<unknown>` |
|  1.5% |       1 | `jni_ReleasePrimitiveArrayCritical` | `<unknown>` |

##### `Compile::optimize_loops` (`<unknown>`)

|      % | Samples | Callee                     | Location    |
| -----: | ------: | -------------------------- | ----------- |
| 100.0% |      62 | `PhaseIdealLoop::optimize` | `<unknown>` |

##### `loadClass` (`java.lang.ClassLoader`)

|     % | Samples | Callee                     | Location                                                 |
| ----: | ------: | -------------------------- | -------------------------------------------------------- |
| 95.2% |      59 | `findClass`                | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |
|  3.2% |       2 | `findBootstrapClassOrNull` | `java.lang.ClassLoader`                                  |
|  1.6% |       1 | `findClass`                | `java.net.URLClassLoader`                                |
|  1.6% |       1 | `loadClass`                | `java.lang.ClassLoader`                                  |

##### `PhaseIterGVN::optimize` (`<unknown>`)

|     % | Samples | Callee                                    | Location    |
| ----: | ------: | ----------------------------------------- | ----------- |
| 84.7% |      50 | `PhaseIterGVN::transform_old`             | `<unknown>` |
|  5.1% |       3 | `RegionNode::hash`                        | `<unknown>` |
|  1.7% |       1 | `PhaseIterGVN::remove_globally_dead_node` | `<unknown>` |
|  1.7% |       1 | `AddPNode::Value`                         | `<unknown>` |
|  1.7% |       1 | `IfProjNode::Identity`                    | `<unknown>` |

##### `defineClass1` (`java.lang.ClassLoader`)

|     % | Samples | Callee                                    | Location                                                 |
| ----: | ------: | ----------------------------------------- | -------------------------------------------------------- |
| 98.3% |      58 | `Java_java_lang_ClassLoader_defineClass1` | `<unknown>`                                              |
| 22.0% |      13 | `loadClass`                               | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |

##### `defineClass` (`java.lang.ClassLoader`)

|      % | Samples | Callee            | Location                |
| -----: | ------: | ----------------- | ----------------------- |
| 100.0% |      59 | `defineClass1`    | `java.lang.ClassLoader` |
| 100.0% |      59 | `defineClass`     | `java.lang.ClassLoader` |
|   1.7% |       1 | `postDefineClass` | `java.lang.ClassLoader` |

##### `SystemDictionary::resolve_class_from_stream` (`<unknown>`)

|     % | Samples | Callee                                       | Location    |
| ----: | ------: | -------------------------------------------- | ----------- |
| 96.6% |      56 | `KlassFactory::create_from_stream`           | `<unknown>` |
|  1.7% |       1 | `SystemDictionary::define_instance_class`    | `<unknown>` |
|  1.7% |       1 | `SystemDictionaryShared::lookup_from_stream` | `<unknown>` |

##### `jvm_define_class_common` (`<unknown>`)

|      % | Samples | Callee                                        | Location    |
| -----: | ------: | --------------------------------------------- | ----------- |
| 100.0% |      58 | `SystemDictionary::resolve_class_from_stream` | `<unknown>` |

##### `JVM_DefineClassWithSource` (`<unknown>`)

|      % | Samples | Callee                    | Location    |
| -----: | ------: | ------------------------- | ----------- |
| 100.0% |      58 | `jvm_define_class_common` | `<unknown>` |

##### `Java_java_lang_ClassLoader_defineClass1` (`<unknown>`)

|      % | Samples | Callee                      | Location    |
| -----: | ------: | --------------------------- | ----------- |
| 100.0% |      58 | `JVM_DefineClassWithSource` | `<unknown>` |

##### `GraphBuilder::GraphBuilder` (`<unknown>`)

|     % | Samples | Callee                               | Location    |
| ----: | ------: | ------------------------------------ | ----------- |
| 96.5% |      55 | `GraphBuilder::iterate_all_blocks`   | `<unknown>` |
|  1.8% |       1 | `BlockListBuilder::BlockListBuilder` | `<unknown>` |
|  1.8% |       1 | `BlockBegin::iterate_preorder`       | `<unknown>` |

##### `KlassFactory::create_from_stream` (`<unknown>`)

|     % | Samples | Callee                                   | Location    |
| ----: | ------: | ---------------------------------------- | ----------- |
| 93.0% |      53 | `ClassFileParser::ClassFileParser`       | `<unknown>` |
|  7.0% |       4 | `ClassFileParser::create_instance_klass` | `<unknown>` |

##### `IRScope::IRScope` (`<unknown>`)

|      % | Samples | Callee                       | Location    |
| -----: | ------: | ---------------------------- | ----------- |
| 100.0% |      57 | `GraphBuilder::GraphBuilder` | `<unknown>` |

##### `IR::IR` (`<unknown>`)

|      % | Samples | Callee             | Location    |
| -----: | ------: | ------------------ | ----------- |
| 100.0% |      57 | `IRScope::IRScope` | `<unknown>` |

##### `Parse::Parse` (`<unknown>`)

|     % | Samples | Callee                    | Location    |
| ----: | ------: | ------------------------- | ----------- |
| 94.7% |      54 | `Parse::do_all_blocks`    | `<unknown>` |
|  7.0% |       4 | `Parse::build_exits`      | `<unknown>` |
|  1.8% |       1 | `ciMethod::method_data`   | `<unknown>` |
|  1.8% |       1 | `GraphKit::reset_memory`  | `<unknown>` |
|  1.8% |       1 | `GraphKit::set_map_clone` | `<unknown>` |

##### `ParseGenerator::generate` (`<unknown>`)

|      % | Samples | Callee         | Location    |
| -----: | ------: | -------------- | ----------- |
| 100.0% |      57 | `Parse::Parse` | `<unknown>` |

##### `GraphBuilder::iterate_all_blocks` (`<unknown>`)

|     % | Samples | Callee                                      | Location    |
| ----: | ------: | ------------------------------------------- | ----------- |
| 98.2% |      54 | `GraphBuilder::iterate_bytecodes_for_block` | `<unknown>` |
|  1.8% |       1 | `ValueStack::ValueStack`                    | `<unknown>` |

##### `Parse::do_one_block` (`<unknown>`)

|     % | Samples | Callee                   | Location    |
| ----: | ------: | ------------------------ | ----------- |
| 88.9% |      48 | `Parse::do_call`         | `<unknown>` |
| 18.5% |      10 | `Parse::do_field_access` | `<unknown>` |
|  7.4% |       4 | `Parse::do_checkcast`    | `<unknown>` |
|  5.6% |       3 | `Parse::do_one_bytecode` | `<unknown>` |
|  3.7% |       2 | `Parse::return_current`  | `<unknown>` |

##### `Parse::do_all_blocks` (`<unknown>`)

|      % | Samples | Callee                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |      54 | `Parse::do_one_block` | `<unknown>` |
|   1.9% |       1 | `Parse::merge_common` | `<unknown>` |

##### `ClassFileParser::ClassFileParser` (`<unknown>`)

|     % | Samples | Callee                                        | Location    |
| ----: | ------: | --------------------------------------------- | ----------- |
| 96.2% |      51 | `ClassFileParser::parse_stream`               | `<unknown>` |
|  3.8% |       2 | `ClassFileParser::post_process_parsed_stream` | `<unknown>` |

##### `WorkerThread::run` (`<unknown>`)

|     % | Samples | Callee                            | Location    |
| ----: | ------: | --------------------------------- | ----------- |
| 34.6% |      18 | `G1RebuildRSAndScrubTask::work`   | `<unknown>` |
| 30.8% |      16 | `G1CMConcurrentMarkingTask::work` | `<unknown>` |
| 28.8% |      15 | `G1EvacuateRegionsBaseTask::work` | `<unknown>` |
|  5.8% |       3 | `semaphore_wait_trap`             | `<unknown>` |

##### `resumeWith` (`kotlin.coroutines.jvm.internal.BaseContinuationImpl`)

|     % | Samples | Callee          | Location                                                                                                               |
| ----: | ------: | --------------- | ---------------------------------------------------------------------------------------------------------------------- |
| 66.7% |      34 | `invokeSuspend` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask$processLevel$6`                                  |
| 47.1% |      24 | `invokeSuspend` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner$processCandidate$1`                               |
| 13.7% |       7 | `invokeSuspend` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver$enqueueResolutionTasks$2`                               |
|  5.9% |       3 | `invokeSuspend` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolveTask$processCandidatesWithGivenImplicitReceiverAsValue$1` |
|  5.9% |       3 | `invokeSuspend` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver$enqueueResolutionTasks$1`                               |

##### `getValue` (`kotlin.SynchronizedLazyImpl`)

|     % | Samples | Callee   | Location                                                                                              |
| ----: | ------: | -------- | ----------------------------------------------------------------------------------------------------- |
| 13.3% |       2 | `invoke` | `org.jetbrains.kotlin.builtins.DefaultBuiltIns$$Lambda.0x0000007001758000`                            |
| 13.3% |       2 | `invoke` | `org.jetbrains.kotlin.cli.jvm.modules.CoreJrtVirtualFile$$Lambda.0x0000007001388ad0`                  |
| 13.3% |       2 | `invoke` | `org.jetbrains.kotlin.ir.descriptors.IrBasedDeclarationDescriptor$annotations$2`                      |
| 13.3% |       2 | `invoke` | `org.jetbrains.kotlin.fir.java.declarations.FirJavaClass$$Lambda.0x0000007001614db0`                  |
|  6.7% |       1 | `invoke` | `org.jetbrains.kotlin.fir.analysis.checkers.expression.ExpressionCheckers$$Lambda.0x0000007001490b18` |

##### `getValue` (`kotlin.SafePublicationLazyImpl`)

|     % | Samples | Callee   | Location                                                                                                   |
| ----: | ------: | -------- | ---------------------------------------------------------------------------------------------------------- |
| 53.3% |       8 | `invoke` | `kotlin.reflect.jvm.internal.DescriptorKProperty$$Lambda$0`                                                |
| 20.0% |       3 | `invoke` | `org.jetbrains.kotlin.fir.scopes.impl.FirClassDeclaredMemberScopeImpl$$Lambda.0x000000700162ce28`          |
| 13.3% |       2 | `invoke` | `org.jetbrains.kotlin.fir.java.deserialization.JvmBinaryAnnotationDeserializer$$Lambda.0x00000070015dc9b0` |
| 13.3% |       2 | `invoke` | `org.jetbrains.kotlin.fir.java.FirLazyJavaDeclarationList$$Lambda.0x0000007001614508`                      |
|  6.7% |       1 | `invoke` | `org.jetbrains.kotlin.fir.java.enhancement.FirLazyJavaAnnotationList$$Lambda.0x00000070016133f8`           |

##### `getValue` (`kotlin.UnsafeLazyImpl`)

|     % | Samples | Callee   | Location                                                                                                                                                   |
| ----: | ------: | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 72.7% |       8 | `invoke` | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver$$Lambda.0x000000700168dcf8`                                                                        |
| 18.2% |       2 | `invoke` | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerDataElementsForName$$Lambda.0x0000007001667c98`                                                         |
|  9.1% |       1 | `invoke` | `org.jetbrains.kotlin.load.java.structure.impl.classFiles.BinaryClassSignatureParser$$Lambda.0x0000007001610928`                                           |
|  9.1% |       1 | `invoke` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformer$BodyResolveTransformerComponents$$Lambda.0x000000700159b4c0` |
|  9.1% |       1 | `invoke` | `org.jetbrains.kotlin.load.java.structure.impl.classFiles.BinaryJavaClass$$Lambda.0x000000700160b3f8`                                                      |

##### `checkNotNullParameter` (`kotlin.jvm.internal.Intrinsics`)

|     % | Samples | Callee                    | Location                         |
| ----: | ------: | ------------------------- | -------------------------------- |
| 40.0% |       4 | `throwParameterIsNullNPE` | `kotlin.jvm.internal.Intrinsics` |

##### `linkCallSite` (`java.lang.invoke.MethodHandleNatives`)

|     % | Samples | Callee             | Location                               |
| ----: | ------: | ------------------ | -------------------------------------- |
| 87.5% |       7 | `linkCallSiteImpl` | `java.lang.invoke.MethodHandleNatives` |
| 12.5% |       1 | `intern`           | `java.lang.String`                     |

##### `I2C/C2I adapters(0xbb)` (`<unknown>`)

|     % | Samples | Callee                                  | Location    |
| ----: | ------: | --------------------------------------- | ----------- |
| 28.6% |       2 | `SharedRuntime::fixup_callers_callsite` | `<unknown>` |

## Hottest call stacks

Call stacks with the most samples collected in their leaf frame.

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ---: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 3.3% |      43 | `inflate_fast` ← `Java_java_util_zip_Inflater_inflateBytesBytes` ← `inflateBytesBytes` (`java.util.zip.Inflater`) ← `inflate` ← `read` (`java.util.zip.InflaterInputStream`) ← `read` (`java.util.zip.ZipInputStream`) ← `read` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses` ← `run` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main`              |
| 1.3% |      17 | `PhaseChaitin::Split` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                      |
| 1.1% |      15 | `PhaseChaitin::gather_lrg_masks` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                           |
| 0.8% |      11 | `PhaseChaitin::build_ifg_physical` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                         |
| 0.8% |      10 | `PhaseChaitin::elide_copy` ← `PhaseChaitin::post_allocate_copy_removal` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                    |
| 0.7% |       9 | `__psynch_cvwait` ← `PlatformMonitor::wait` ← `Monitor::wait` ← `CompileQueue::get` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                   |
| 0.7% |       9 | `Arena::contains` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                        |
| 0.6% |       8 | `PhaseChaitin::post_allocate_copy_removal` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                 |
| 0.6% |       8 | `PhaseLive::compute` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                       |
| 0.5% |       7 | `Matcher::find_shared` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                      |
| 0.5% |       6 | `inflate` ← `Java_java_util_zip_Inflater_inflateBytesBytes` ← `inflateBytesBytes` (`java.util.zip.Inflater`) ← `inflate` ← `read` (`java.util.zip.InflaterInputStream`) ← `read` (`java.util.zip.ZipInputStream`) ← `read` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses` ← `run` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main`                   |
| 0.5% |       6 | `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                            |
| 0.5% |       6 | `PhaseIdealLoop::build_loop_early` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                      |
| 0.5% |       6 | `inflate_table` ← `inflate` ← `Java_java_util_zip_Inflater_inflateBytesBytes` ← `inflateBytesBytes` (`java.util.zip.Inflater`) ← `inflate` ← `read` (`java.util.zip.InflaterInputStream`) ← `read` (`java.util.zip.ZipInputStream`) ← `read` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses` ← `run` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main` |
| 0.5% |       6 | `PhaseCFG::partial_latency_of_defs` ← `PhaseCFG::global_code_motion` ← `PhaseCFG::do_global_code_motion` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                       |
| 0.5% |       6 | `Matcher::match_tree` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                    |
| 0.4% |       5 | `PhaseIdealLoop::build_loop_late` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                       |
| 0.4% |       5 | `PhaseIFG::effective_degree` ← `PhaseIFG::Compute_Effective_Degree` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                        |
| 0.4% |       5 | `PhaseIdealLoop::Dominators` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                            |
| 0.4% |       5 | `PhaseLive::add_liveout` ← `PhaseLive::compute` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                            |

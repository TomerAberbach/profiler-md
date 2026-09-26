# Sampling profile

Collected 1,319 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Compiler         | 47.7% |     629 |
| Native           | 36.8% |     486 |
| Ours             | 10.4% |     137 |
| Standard library |  3.9% |      51 |
| JIT              |  1.1% |      15 |
| Unknown          |  0.1% |       1 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|    % | Samples | Function                                                                                                                                                 | Location    |
| ---: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 3.6% |      47 | `inflate_fast`                                                                                                                                           | `<unknown>` |
| 1.9% |      25 | `SymbolTable::do_lookup`                                                                                                                                 | `<unknown>` |
| 1.4% |      18 | `PhaseChaitin::Split`                                                                                                                                    | `<unknown>` |
| 1.3% |      17 | `IndexSetIterator::advance_and_next`                                                                                                                     | `<unknown>` |
| 1.1% |      15 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `<unknown>` |
| 1.1% |      14 | `tlv_get_addr`                                                                                                                                           | `<unknown>` |
| 1.0% |      13 | `IntervalWalker::walk_to`                                                                                                                                | `<unknown>` |
| 0.9% |      12 | `PhaseChaitin::gather_lrg_masks`                                                                                                                         | `<unknown>` |
| 0.9% |      12 | `__psynch_cvwait`                                                                                                                                        | `<unknown>` |
| 0.8% |      11 | `__psynch_mutexwait`                                                                                                                                     | `<unknown>` |
| 0.8% |      11 | `PhaseIdealLoop::Dominators`                                                                                                                             | `<unknown>` |
| 0.8% |      11 | `PhaseChaitin::build_ifg_physical`                                                                                                                       | `<unknown>` |
| 0.8% |      11 | `PhaseIdealLoop::build_loop_late`                                                                                                                        | `<unknown>` |
| 0.8% |      11 | `LinearScanWalker::alloc_free_reg`                                                                                                                       | `<unknown>` |
| 0.8% |      10 | `ciObjectFactory::get_metadata`                                                                                                                          | `<unknown>` |
| 0.8% |      10 | `Node::dominates`                                                                                                                                        | `<unknown>` |
| 0.8% |      10 | `_platform_memset`                                                                                                                                       | `<unknown>` |
| 0.8% |      10 | `sys_icache_invalidate`                                                                                                                                  | `<unknown>` |
| 0.8% |      10 | `fwd_copy_again`                                                                                                                                         | `<unknown>` |
| 0.7% |       9 | `InstanceKlass::find_method_index`                                                                                                                       | `<unknown>` |

#### Categories

##### Compiler

|    % | Samples | Function                                        | Location    |
| ---: | ------: | ----------------------------------------------- | ----------- |
| 1.4% |      18 | `PhaseChaitin::Split`                           | `<unknown>` |
| 1.3% |      17 | `IndexSetIterator::advance_and_next`            | `<unknown>` |
| 1.0% |      13 | `IntervalWalker::walk_to`                       | `<unknown>` |
| 0.9% |      12 | `PhaseChaitin::gather_lrg_masks`                | `<unknown>` |
| 0.8% |      11 | `PhaseIdealLoop::Dominators`                    | `<unknown>` |
| 0.8% |      11 | `PhaseChaitin::build_ifg_physical`              | `<unknown>` |
| 0.8% |      11 | `PhaseIdealLoop::build_loop_late`               | `<unknown>` |
| 0.8% |      11 | `LinearScanWalker::alloc_free_reg`              | `<unknown>` |
| 0.8% |      10 | `ciObjectFactory::get_metadata`                 | `<unknown>` |
| 0.8% |      10 | `Node::dominates`                               | `<unknown>` |
| 0.7% |       9 | `PhaseIdealLoop::build_loop_late_post_work`     | `<unknown>` |
| 0.7% |       9 | `PhaseChaitin::post_allocate_copy_removal`      | `<unknown>` |
| 0.6% |       8 | `PhaseIdealLoop::build_loop_early`              | `<unknown>` |
| 0.6% |       8 | `PhaseChaitin::elide_copy`                      | `<unknown>` |
| 0.6% |       8 | `Compile::identify_useful_nodes`                | `<unknown>` |
| 0.5% |       7 | `Type::cmp`                                     | `<unknown>` |
| 0.5% |       7 | `PhaseLive::compute`                            | `<unknown>` |
| 0.5% |       7 | `PhaseAggressiveCoalesce::insert_copies`        | `<unknown>` |
| 0.5% |       7 | `LinearScanWalker::free_collect_inactive_fixed` | `<unknown>` |
| 0.5% |       6 | `MultiNode::is_CFG`                             | `<unknown>` |

##### Native

|    % | Samples | Function                                                                                                                                                 | Location    |
| ---: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 3.6% |      47 | `inflate_fast`                                                                                                                                           | `<unknown>` |
| 1.9% |      25 | `SymbolTable::do_lookup`                                                                                                                                 | `<unknown>` |
| 1.1% |      15 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `<unknown>` |
| 1.1% |      14 | `tlv_get_addr`                                                                                                                                           | `<unknown>` |
| 0.9% |      12 | `__psynch_cvwait`                                                                                                                                        | `<unknown>` |
| 0.8% |      11 | `__psynch_mutexwait`                                                                                                                                     | `<unknown>` |
| 0.8% |      10 | `_platform_memset`                                                                                                                                       | `<unknown>` |
| 0.8% |      10 | `sys_icache_invalidate`                                                                                                                                  | `<unknown>` |
| 0.8% |      10 | `fwd_copy_again`                                                                                                                                         | `<unknown>` |
| 0.7% |       9 | `InstanceKlass::find_method_index`                                                                                                                       | `<unknown>` |
| 0.7% |       9 | `pthread_jit_write_protect_np`                                                                                                                           | `<unknown>` |
| 0.7% |       9 | `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>`                             | `<unknown>` |
| 0.6% |       8 | `inflate`                                                                                                                                                | `<unknown>` |
| 0.5% |       7 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>`                                                   | `<unknown>` |
| 0.5% |       7 | `G1ParScanThreadState::do_copy_to_survivor_space`                                                                                                        | `<unknown>` |
| 0.5% |       7 | `Arena::contains`                                                                                                                                        | `<unknown>` |
| 0.5% |       6 | `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>`                                                           | `<unknown>` |
| 0.5% |       6 | `G1ParScanThreadState::trim_queue_to_threshold`                                                                                                          | `<unknown>` |
| 0.5% |       6 | `inflate_table`                                                                                                                                          | `<unknown>` |
| 0.5% |       6 | `vmSymbols::find_sid`                                                                                                                                    | `<unknown>` |

##### Ours

|    % | Samples | Function                                                     | Location                                                                                                 |
| ---: | ------: | ------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------- |
| 0.2% |       2 | `transformFunctionCallInternal$org_jetbrains_kotlin_resolve` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`            |
| 0.2% |       2 | `readMethod`                                                 | `org.jetbrains.org.objectweb.asm.ClassReader`                                                            |
| 0.2% |       2 | `processCandidatesWithGivenImplicitReceiverAsValue`          | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolveTask`                                       |
| 0.2% |       2 | `resolvePlainArgumentType`                                   | `org.jetbrains.kotlin.fir.resolve.calls.stages.ArgumentCheckingProcessor`                                |
| 0.2% |       2 | `isArrayType`                                                | `org.jetbrains.kotlin.fir.types.ConeBuiltinTypeUtilsKt`                                                  |
| 0.1% |       1 | `getHasResolvedType`                                         | `org.jetbrains.kotlin.fir.types.FirTypeUtilsKt`                                                          |
| 0.1% |       1 | `transformBlock`                                             | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |
| 0.1% |       1 | `getFOR_LOOP_ITERATOR`                                       | `org.jetbrains.kotlin.ir.declarations.IrDeclarationOrigin$Companion`                                     |
| 0.1% |       1 | `iterator`                                                   | `org.jetbrains.kotlin.utils.SmartSet`                                                                    |
| 0.1% |       1 | `acceptChildren`                                             | `org.jetbrains.kotlin.ir.declarations.IrFunction`                                                        |
| 0.1% |       1 | `visitElement`                                               | `org.jetbrains.kotlin.backend.jvm.lower.RecordEnclosingMethodsLowering$lower$1`                          |
| 0.1% |       1 | `resolveUserTypeToSymbol$lambda$2`                           | `org.jetbrains.kotlin.fir.resolve.providers.impl.FirTypeResolverImpl`                                    |
| 0.1% |       1 | `resolveType`                                                | `org.jetbrains.kotlin.fir.resolve.transformers.FirSpecificTypeResolverTransformer`                       |
| 0.1% |       1 | `getTypeParameters`                                          | `org.jetbrains.kotlin.fir.declarations.impl.FirNamedFunctionImpl`                                        |
| 0.1% |       1 | `resolveCallAndSelectCandidate$default`                      | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`                                                 |
| 0.1% |       1 | `toIrWhenBranch`                                             | `org.jetbrains.kotlin.fir.backend.Fir2IrVisitor`                                                         |
| 0.1% |       1 | `convertToIrCall$default`                                    | `org.jetbrains.kotlin.fir.backend.generators.CallAndReferenceGenerator`                                  |
| 0.1% |       1 | `makeKotlinType`                                             | `org.jetbrains.kotlin.ir.descriptors.IrBasedDescriptorsKt`                                               |
| 0.1% |       1 | `<init>`                                                     | `org.jetbrains.kotlin.utils.SmartSet`                                                                    |
| 0.1% |       1 | `loadProperty`                                               | `org.jetbrains.kotlin.fir.deserialization.FirMemberDeserializer`                                         |

##### Standard library

|    % | Samples | Function                      | Location                                                 |
| ---: | ------: | ----------------------------- | -------------------------------------------------------- |
| 0.4% |       5 | `checkNotNullParameter`       | `kotlin.jvm.internal.Intrinsics`                         |
| 0.2% |       2 | `checkIndex`                  | `java.lang.String`                                       |
| 0.2% |       2 | `sanitizeStackTrace`          | `kotlin.jvm.internal.Intrinsics`                         |
| 0.2% |       2 | `putVal`                      | `java.util.HashMap`                                      |
| 0.1% |       1 | `invokeExact_MT`              | `java.lang.invoke.Invokers$Holder`                       |
| 0.1% |       1 | `checkAndAddEntry`            | `java.util.zip.ZipFile$Source`                           |
| 0.1% |       1 | `resumeWith`                  | `kotlin.coroutines.jvm.internal.BaseContinuationImpl`    |
| 0.1% |       1 | `getValue`                    | `kotlin.UnsafeLazyImpl`                                  |
| 0.1% |       1 | `lastIndexOf$default`         | `kotlin.text.StringsKt__StringsKt`                       |
| 0.1% |       1 | `copyOf`                      | `java.util.Arrays`                                       |
| 0.1% |       1 | `linkToTargetMethod`          | `java.lang.invoke.Invokers$Holder`                       |
| 0.1% |       1 | `addElementType`              | `java.lang.reflect.Proxy$ProxyBuilder`                   |
| 0.1% |       1 | `allocateUninitializedArray0` | `jdk.internal.misc.Unsafe`                               |
| 0.1% |       1 | `transfer`                    | `java.util.concurrent.ConcurrentHashMap`                 |
| 0.1% |       1 | `removeLast`                  | `kotlin.collections.CollectionsKt__MutableCollectionsKt` |
| 0.1% |       1 | `<init>`                      | `java.lang.AbstractStringBuilder`                        |
| 0.1% |       1 | `asReversed`                  | `kotlin.collections.CollectionsKt__ReversedViewsKt`      |
| 0.1% |       1 | `equals`                      | `java.util.Objects`                                      |
| 0.1% |       1 | `throwParameterIsNullNPE`     | `kotlin.jvm.internal.Intrinsics`                         |
| 0.1% |       1 | `clinit`                      | `java.lang.invoke.InvokerBytecodeGenerator`              |

##### JIT

|    % | Samples | Function                  | Location    |
| ---: | ------: | ------------------------- | ----------- |
| 0.5% |       6 | `I2C/C2I adapters(0xb)`   | `<unknown>` |
| 0.2% |       3 | `itable stub`             | `<unknown>` |
| 0.2% |       2 | `zero_blocks`             | `<unknown>` |
| 0.2% |       2 | `I2C/C2I adapters(0xbbb)` | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xbab)` | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xbb)`  | `<unknown>` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `inflate_fast` (`<unknown>`)

|      % | Samples | Caller                                          | Location    |
| -----: | ------: | ----------------------------------------------- | ----------- |
| 100.0% |      47 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `<unknown>` |

##### `SymbolTable::do_lookup` (`<unknown>`)

|     % | Samples | Caller                                         | Location    |
| ----: | ------: | ---------------------------------------------- | ----------- |
| 60.0% |      15 | `SymbolTable::lookup_only`                     | `<unknown>` |
| 20.0% |       5 | `ClassFileParser::parse_constant_pool_entries` | `<unknown>` |
| 20.0% |       5 | `SymbolTable::new_symbol`                      | `<unknown>` |

##### `PhaseChaitin::Split` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |      18 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `IndexSetIterator::advance_and_next` (`<unknown>`)

|     % | Samples | Caller                             | Location    |
| ----: | ------: | ---------------------------------- | ----------- |
| 17.6% |       3 | `PhaseChaitin::Simplify`           | `<unknown>` |
| 11.8% |       2 | `PhaseIFG::SquareUp`               | `<unknown>` |
| 11.8% |       2 | `PhaseIFG::re_insert`              | `<unknown>` |
| 11.8% |       2 | `PhaseChaitin::build_ifg_physical` | `<unknown>` |
| 11.8% |       2 | `PhaseIFG::remove_node`            | `<unknown>` |

##### `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` (`<unknown>`)

|     % | Samples | Caller                                             | Location    |
| ----: | ------: | -------------------------------------------------- | ----------- |
| 80.0% |      12 | `DebugInformationRecorder::describe_scope`         | `<unknown>` |
| 20.0% |       3 | `DebugInformationRecorder::serialize_scope_values` | `<unknown>` |

##### `tlv_get_addr` (`<unknown>`)

|    % | Samples | Caller                                 | Location    |
| ---: | ------: | -------------------------------------- | ----------- |
| 7.1% |       1 | `PhaseChaitin::Register_Allocate`      | `<unknown>` |
| 7.1% |       1 | `LinearScan::do_linear_scan`           | `<unknown>` |
| 7.1% |       1 | `LinearScan::resolve_data_flow`        | `<unknown>` |
| 7.1% |       1 | `PhaseChaitin::build_ifg_physical`     | `<unknown>` |
| 7.1% |       1 | `LIR_Assembler::emit_typecheck_helper` | `<unknown>` |

##### `IntervalWalker::walk_to` (`<unknown>`)

|     % | Samples | Caller                           | Location    |
| ----: | ------: | -------------------------------- | ----------- |
| 69.2% |       9 | `IntervalWalker::walk_to`        | `<unknown>` |
| 15.4% |       2 | `LinearScan::allocate_registers` | `<unknown>` |
| 15.4% |       2 | `LinearScan::compute_oop_map`    | `<unknown>` |

##### `PhaseChaitin::gather_lrg_masks` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |      12 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `__psynch_cvwait` (`<unknown>`)

|      % | Samples | Caller                  | Location    |
| -----: | ------: | ----------------------- | ----------- |
| 100.0% |      12 | `PlatformMonitor::wait` | `<unknown>` |

##### `__psynch_mutexwait` (`<unknown>`)

|      % | Samples | Caller                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |      11 | `_pthread_mutex_firstfit_lock_slow` | `<unknown>` |

##### `PhaseIdealLoop::Dominators` (`<unknown>`)

|      % | Samples | Caller                               | Location    |
| -----: | ------: | ------------------------------------ | ----------- |
| 100.0% |      11 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |

##### `PhaseChaitin::build_ifg_physical` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |      11 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `PhaseIdealLoop::build_loop_late` (`<unknown>`)

|      % | Samples | Caller                               | Location    |
| -----: | ------: | ------------------------------------ | ----------- |
| 100.0% |      11 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |

##### `LinearScanWalker::alloc_free_reg` (`<unknown>`)

|      % | Samples | Caller                               | Location    |
| -----: | ------: | ------------------------------------ | ----------- |
| 100.0% |      11 | `LinearScanWalker::activate_current` | `<unknown>` |

##### `ciObjectFactory::get_metadata` (`<unknown>`)

|     % | Samples | Caller                                           | Location    |
| ----: | ------: | ------------------------------------------------ | ----------- |
| 50.0% |       5 | `ciEnv::get_klass_by_name_impl`                  | `<unknown>` |
| 10.0% |       1 | `ciBytecodeStream::get_method`                   | `<unknown>` |
| 10.0% |       1 | `ciEnv::get_klass_by_index_impl`                 | `<unknown>` |
| 10.0% |       1 | `ciInstanceKlass::compute_transitive_interfaces` | `<unknown>` |
| 10.0% |       1 | `ciObjectFactory::create_new_metadata`           | `<unknown>` |

##### `Node::dominates` (`<unknown>`)

|      % | Samples | Caller                           | Location    |
| -----: | ------: | -------------------------------- | ----------- |
| 100.0% |      10 | `MemNode::all_controls_dominate` | `<unknown>` |

##### `_platform_memset` (`<unknown>`)

|     % | Samples | Caller                             | Location    |
| ----: | ------: | ---------------------------------- | ----------- |
| 10.0% |       1 | `Compile::Compile`                 | `<unknown>` |
| 10.0% |       1 | `PhaseChaitin::Register_Allocate`  | `<unknown>` |
| 10.0% |       1 | `MethodLiveness::compute_liveness` | `<unknown>` |
| 10.0% |       1 | `NTarjan::DFS`                     | `<unknown>` |
| 10.0% |       1 | `MergeMemNode::MergeMemNode`       | `<unknown>` |

##### `sys_icache_invalidate` (`<unknown>`)

|     % | Samples | Caller                                      | Location    |
| ----: | ------: | ------------------------------------------- | ----------- |
| 30.0% |       3 | `ICStub::finalize`                          | `<unknown>` |
| 20.0% |       2 | `InlineCacheBuffer::create_transition_stub` | `<unknown>` |
| 10.0% |       1 | `CompiledIC::set_to_monomorphic`            | `<unknown>` |
| 10.0% |       1 | `CompiledIC::set_to_megamorphic`            | `<unknown>` |
| 10.0% |       1 | `nmethod::oops_do_process_weak`             | `<unknown>` |

##### `fwd_copy_again` (`<unknown>`)

|     % | Samples | Caller                                          | Location    |
| ----: | ------: | ----------------------------------------------- | ----------- |
| 80.0% |       8 | `G1ParScanThreadState::trim_queue_to_threshold` | `<unknown>` |
| 10.0% |       1 | `CodeBuffer::copy_code_to`                      | `<unknown>` |
| 10.0% |       1 | `ciMethod::ensure_method_data`                  | `<unknown>` |

##### `InstanceKlass::find_method_index` (`<unknown>`)

|     % | Samples | Caller                                  | Location    |
| ----: | ------: | --------------------------------------- | ----------- |
| 88.9% |       8 | `InstanceKlass::uncached_lookup_method` | `<unknown>` |
| 11.1% |       1 | `LinkResolver::resolve_method`          | `<unknown>` |

##### `PhaseIdealLoop::build_loop_late_post_work` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |       9 | `PhaseIdealLoop::build_loop_late` | `<unknown>` |

##### `PhaseChaitin::post_allocate_copy_removal` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |       9 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `pthread_jit_write_protect_np` (`<unknown>`)

|     % | Samples | Caller                                      | Location                |
| ----: | ------: | ------------------------------------------- | ----------------------- |
| 22.2% |       2 | `Unsafe_AllocateInstance`                   | `<unknown>`             |
| 11.1% |       1 | `compress`                                  | `java.lang.StringUTF16` |
| 11.1% |       1 | `JVM_FindLoadedClass`                       | `<unknown>`             |
| 11.1% |       1 | `InterpreterRuntime::build_method_counters` | `<unknown>`             |
| 11.1% |       1 | `InterpreterRuntime::resolve_ldc`           | `<unknown>`             |

##### `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>` (`<unknown>`)

|     % | Samples | Caller                                            | Location    |
| ----: | ------: | ------------------------------------------------- | ----------- |
| 88.9% |       8 | `G1ParScanThreadState::do_copy_to_survivor_space` | `<unknown>` |
| 11.1% |       1 | `G1ParScanThreadState::trim_queue_to_threshold`   | `<unknown>` |

##### `PhaseIdealLoop::build_loop_early` (`<unknown>`)

|      % | Samples | Caller                               | Location    |
| -----: | ------: | ------------------------------------ | ----------- |
| 100.0% |       8 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |

##### `PhaseChaitin::elide_copy` (`<unknown>`)

|      % | Samples | Caller                                     | Location    |
| -----: | ------: | ------------------------------------------ | ----------- |
| 100.0% |       8 | `PhaseChaitin::post_allocate_copy_removal` | `<unknown>` |

##### `Compile::identify_useful_nodes` (`<unknown>`)

|     % | Samples | Caller                                        | Location    |
| ----: | ------: | --------------------------------------------- | ----------- |
| 62.5% |       5 | `Matcher::specialize_generic_vector_operands` | `<unknown>` |
| 37.5% |       3 | `PhaseRemoveUseless::PhaseRemoveUseless`      | `<unknown>` |

##### `inflate` (`<unknown>`)

|      % | Samples | Caller                                          | Location    |
| -----: | ------: | ----------------------------------------------- | ----------- |
| 100.0% |       8 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `<unknown>` |

##### `Type::cmp` (`<unknown>`)

|      % | Samples | Caller         | Location    |
| -----: | ------: | -------------- | ----------- |
| 100.0% |       7 | `Dict::Insert` | `<unknown>` |

##### `PhaseLive::compute` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |       7 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `PhaseAggressiveCoalesce::insert_copies` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |       7 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `LinearScanWalker::free_collect_inactive_fixed` (`<unknown>`)

|      % | Samples | Caller                             | Location    |
| -----: | ------: | ---------------------------------- | ----------- |
| 100.0% |       7 | `LinearScanWalker::alloc_free_reg` | `<unknown>` |

##### `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` (`<unknown>`)

|      % | Samples | Caller                                                                   | Location    |
| -----: | ------: | ------------------------------------------------------------------------ | ----------- |
| 100.0% |       7 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object` | `<unknown>` |

##### `G1ParScanThreadState::do_copy_to_survivor_space` (`<unknown>`)

|      % | Samples | Caller                                          | Location    |
| -----: | ------: | ----------------------------------------------- | ----------- |
| 100.0% |       7 | `G1ParScanThreadState::trim_queue_to_threshold` | `<unknown>` |

##### `Arena::contains` (`<unknown>`)

|      % | Samples | Caller           | Location    |
| -----: | ------: | ---------------- | ----------- |
| 100.0% |       7 | `Matcher::xform` | `<unknown>` |

##### `MultiNode::is_CFG` (`<unknown>`)

|     % | Samples | Caller                                      | Location    |
| ----: | ------: | ------------------------------------------- | ----------- |
| 33.3% |       2 | `PhaseIdealLoop::build_and_optimize`        | `<unknown>` |
| 16.7% |       1 | `Node::unique_ctrl_out_or_null`             | `<unknown>` |
| 16.7% |       1 | `PhaseIdealLoop::build_loop_late_post_work` | `<unknown>` |
| 16.7% |       1 | `ProjNode::is_uncommon_trap_proj`           | `<unknown>` |
| 16.7% |       1 | `PhaseIdealLoop::Dominators`                | `<unknown>` |

##### `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` (`<unknown>`)

|      % | Samples | Caller                                         | Location    |
| -----: | ------: | ---------------------------------------------- | ----------- |
| 100.0% |       6 | `void G1CMTask::process_grey_task_entry<true>` | `<unknown>` |

##### `G1ParScanThreadState::trim_queue_to_threshold` (`<unknown>`)

|     % | Samples | Caller                                       | Location    |
| ----: | ------: | -------------------------------------------- | ----------- |
| 66.7% |       4 | `G1ParScanThreadState::steal_and_trim_queue` | `<unknown>` |
| 33.3% |       2 | `G1ScanHRForRegionClosure::scan_memregion`   | `<unknown>` |

##### `inflate_table` (`<unknown>`)

|      % | Samples | Caller    | Location    |
| -----: | ------: | --------- | ----------- |
| 100.0% |       6 | `inflate` | `<unknown>` |

##### `vmSymbols::find_sid` (`<unknown>`)

|     % | Samples | Caller                                  | Location    |
| ----: | ------: | --------------------------------------- | ----------- |
| 83.3% |       5 | `ciObjectFactory::get_symbol`           | `<unknown>` |
| 16.7% |       1 | `AnnotationCollector::annotation_index` | `<unknown>` |

##### `I2C/C2I adapters(0xb)` (`<unknown>`)

|     % | Samples | Caller                           | Location                                                                                                       |
| ----: | ------: | -------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| 16.7% |       1 | `generateClassFile`              | `java.lang.reflect.ProxyGenerator`                                                                             |
| 16.7% |       1 | `checkOptions`                   | `jdk.internal.jrtfs.JrtFileSystem`                                                                             |
| 16.7% |       1 | `isArrayTypeOrNullableArrayType` | `org.jetbrains.kotlin.fir.types.ConeBuiltinTypeUtilsKt`                                                        |
| 16.7% |       1 | `visitArray`                     | `org.jetbrains.kotlin.load.kotlin.header.ReadKotlinClassHeaderAnnotationVisitor$KotlinMetadataArgumentVisitor` |
| 16.7% |       1 | `generate`                       | `java.lang.invoke.InnerClassLambdaMetafactory$ForwardingMethodGenerator`                                       |

##### `checkNotNullParameter` (`kotlin.jvm.internal.Intrinsics`)

|     % | Samples | Caller                                   | Location                                                                         |
| ----: | ------: | ---------------------------------------- | -------------------------------------------------------------------------------- |
| 20.0% |       1 | `getOriginalForSubstitutionOverrideAttr` | `org.jetbrains.kotlin.fir.ClassMembersKt`                                        |
| 20.0% |       1 | `<init>`                                 | `org.jetbrains.kotlin.cli.jvm.index.JvmDependenciesIndexImpl$ClassSearchRequest` |
| 20.0% |       1 | `hasNoInferAnnotation`                   | `org.jetbrains.kotlin.resolve.calls.inference.model.NewConstraintSystemImpl`     |
| 20.0% |       1 | `isIntersection`                         | `org.jetbrains.kotlin.resolve.calls.inference.model.NewConstraintSystemImpl`     |
| 20.0% |       1 | `isClassType`                            | `org.jetbrains.kotlin.types.model.TypeSystemContextContextualKt`                 |

##### `itable stub` (`<unknown>`)

|     % | Samples | Caller                    | Location                                                |
| ----: | ------: | ------------------------- | ------------------------------------------------------- |
| 33.3% |       1 | `collectionSizeOrDefault` | `kotlin.collections.CollectionsKt__IterablesKt`         |
| 33.3% |       1 | `runIsPossibleSubtype`    | `org.jetbrains.kotlin.types.AbstractNullabilityChecker` |
| 33.3% |       1 | `getExtension`            | `com.intellij.openapi.util.io.FileUtilRt`               |

##### `transformFunctionCallInternal$org_jetbrains_kotlin_resolve` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`)

|      % | Samples | Caller                  | Location                                                                                      |
| -----: | ------: | ----------------------- | --------------------------------------------------------------------------------------------- |
| 100.0% |       2 | `transformFunctionCall` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer` |

##### `readMethod` (`org.jetbrains.org.objectweb.asm.ClassReader`)

|      % | Samples | Caller   | Location                                      |
| -----: | ------: | -------- | --------------------------------------------- |
| 100.0% |       2 | `accept` | `org.jetbrains.org.objectweb.asm.ClassReader` |

##### `processCandidatesWithGivenImplicitReceiverAsValue` (`org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolveTask`)

|     % | Samples | Caller                                                     | Location                                                           |
| ----: | ------: | ---------------------------------------------------------- | ------------------------------------------------------------------ |
| 50.0% |       1 | `runResolverForNoReceiver`                                 | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolveTask` |
| 50.0% |       1 | `access$processCandidatesWithGivenImplicitReceiverAsValue` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolveTask` |

##### `resolvePlainArgumentType` (`org.jetbrains.kotlin.fir.resolve.calls.stages.ArgumentCheckingProcessor`)

|     % | Samples | Caller                             | Location                                                                  |
| ----: | ------: | ---------------------------------- | ------------------------------------------------------------------------- |
| 50.0% |       1 | `resolvePlainArgumentType$default` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ArgumentCheckingProcessor` |
| 50.0% |       1 | `resolveExtensionReceiver`         | `org.jetbrains.kotlin.fir.resolve.calls.stages.CheckExtensionReceiver`    |

##### `isArrayType` (`org.jetbrains.kotlin.fir.types.ConeBuiltinTypeUtilsKt`)

|      % | Samples | Caller                           | Location                                                |
| -----: | ------: | -------------------------------- | ------------------------------------------------------- |
| 100.0% |       2 | `isArrayTypeOrNullableArrayType` | `org.jetbrains.kotlin.fir.types.ConeBuiltinTypeUtilsKt` |

##### `checkIndex` (`java.lang.String`)

|      % | Samples | Caller   | Location                 |
| -----: | ------: | -------- | ------------------------ |
| 100.0% |       2 | `charAt` | `java.lang.StringLatin1` |

##### `sanitizeStackTrace` (`kotlin.jvm.internal.Intrinsics`)

|      % | Samples | Caller                    | Location                         |
| -----: | ------: | ------------------------- | -------------------------------- |
| 100.0% |       2 | `throwParameterIsNullNPE` | `kotlin.jvm.internal.Intrinsics` |

##### `putVal` (`java.util.HashMap`)

|      % | Samples | Caller | Location            |
| -----: | ------: | ------ | ------------------- |
| 100.0% |       2 | `put`  | `java.util.HashMap` |

##### `zero_blocks` (`<unknown>`)

|      % | Samples | Caller   | Location                        |
| -----: | ------: | -------- | ------------------------------- |
| 100.0% |       2 | `<init>` | `java.io.ByteArrayOutputStream` |

##### `I2C/C2I adapters(0xbbb)` (`<unknown>`)

|     % | Samples | Caller                             | Location                                                                      |
| ----: | ------: | ---------------------------------- | ----------------------------------------------------------------------------- |
| 50.0% |       1 | `visitFunctionCall`                | `org.jetbrains.kotlin.fir.visitors.FirVisitorVoid`                            |
| 50.0% |       1 | `enqueueResolveTasksForNoReceiver` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirInvokeResolveTowerExtension` |

##### `getHasResolvedType` (`org.jetbrains.kotlin.fir.types.FirTypeUtilsKt`)

|      % | Samples | Caller                                                | Location                                                                                      |
| -----: | ------: | ----------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `transformQualifiedAccessExpression$alsoRecordLookup` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer` |

##### `transformBlock` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`)

|      % | Samples | Caller      | Location                                        |
| -----: | ------: | ----------- | ----------------------------------------------- |
| 100.0% |       1 | `transform` | `org.jetbrains.kotlin.fir.expressions.FirBlock` |

##### `getFOR_LOOP_ITERATOR` (`org.jetbrains.kotlin.ir.declarations.IrDeclarationOrigin$Companion`)

|      % | Samples | Caller           | Location                                                     |
| -----: | ------: | ---------------- | ------------------------------------------------------------ |
| 100.0% |       1 | `isVisibleInLVT` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `iterator` (`org.jetbrains.kotlin.utils.SmartSet`)

|      % | Samples | Caller   | Location                       |
| -----: | ------: | -------- | ------------------------------ |
| 100.0% |       1 | `addAll` | `java.util.AbstractCollection` |

##### `acceptChildren` (`org.jetbrains.kotlin.ir.declarations.IrFunction`)

|      % | Samples | Caller               | Location                                        |
| -----: | ------: | -------------------- | ----------------------------------------------- |
| 100.0% |       1 | `acceptChildrenVoid` | `org.jetbrains.kotlin.ir.visitors.IrVisitorsKt` |

##### `visitElement` (`org.jetbrains.kotlin.backend.jvm.lower.RecordEnclosingMethodsLowering$lower$1`)

|      % | Samples | Caller         | Location                                                                        |
| -----: | ------: | -------------- | ------------------------------------------------------------------------------- |
| 100.0% |       1 | `visitElement` | `org.jetbrains.kotlin.backend.jvm.lower.RecordEnclosingMethodsLowering$lower$1` |

##### `resolveUserTypeToSymbol$lambda$2` (`org.jetbrains.kotlin.fir.resolve.providers.impl.FirTypeResolverImpl`)

|      % | Samples | Caller   | Location                                                                                         |
| -----: | ------: | -------- | ------------------------------------------------------------------------------------------------ |
| 100.0% |       1 | `invoke` | `org.jetbrains.kotlin.fir.resolve.providers.impl.FirTypeResolverImpl$$Lambda.0x000000d8015c5258` |

##### `resolveType` (`org.jetbrains.kotlin.fir.resolve.transformers.FirSpecificTypeResolverTransformer`)

|      % | Samples | Caller             | Location                                                                           |
| -----: | ------: | ------------------ | ---------------------------------------------------------------------------------- |
| 100.0% |       1 | `transformTypeRef` | `org.jetbrains.kotlin.fir.resolve.transformers.FirSpecificTypeResolverTransformer` |

##### `getTypeParameters` (`org.jetbrains.kotlin.fir.declarations.impl.FirNamedFunctionImpl`)

|      % | Samples | Caller  | Location                                                                                |
| -----: | ------: | ------- | --------------------------------------------------------------------------------------- |
| 100.0% |       1 | `check` | `org.jetbrains.kotlin.fir.resolve.calls.stages.CreateFreshTypeVariableSubstitutorStage` |

##### `resolveCallAndSelectCandidate$default` (`org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`)

|      % | Samples | Caller                                                       | Location                                                                                      |
| -----: | ------: | ------------------------------------------------------------ | --------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `transformFunctionCallInternal$org_jetbrains_kotlin_resolve` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer` |

##### `toIrWhenBranch` (`org.jetbrains.kotlin.fir.backend.Fir2IrVisitor`)

|      % | Samples | Caller                  | Location                                         |
| -----: | ------: | ----------------------- | ------------------------------------------------ |
| 100.0% |       1 | `convertWhenBranchesTo` | `org.jetbrains.kotlin.fir.backend.Fir2IrVisitor` |

##### `convertToIrCall$default` (`org.jetbrains.kotlin.fir.backend.generators.CallAndReferenceGenerator`)

|      % | Samples | Caller                                                      | Location                                         |
| -----: | ------: | ----------------------------------------------------------- | ------------------------------------------------ |
| 100.0% |       1 | `convertToIrReceiverExpression$org_jetbrains_kotlin_fir2ir` | `org.jetbrains.kotlin.fir.backend.Fir2IrVisitor` |

##### `makeKotlinType` (`org.jetbrains.kotlin.ir.descriptors.IrBasedDescriptorsKt`)

|      % | Samples | Caller                | Location                                                   |
| -----: | ------: | --------------------- | ---------------------------------------------------------- |
| 100.0% |       1 | `toIrBasedKotlinType` | `org.jetbrains.kotlin.ir.descriptors.IrBasedDescriptorsKt` |

##### `<init>` (`org.jetbrains.kotlin.utils.SmartSet`)

|      % | Samples | Caller   | Location                                        |
| -----: | ------: | -------- | ----------------------------------------------- |
| 100.0% |       1 | `create` | `org.jetbrains.kotlin.utils.SmartSet$Companion` |

##### `loadProperty` (`org.jetbrains.kotlin.fir.deserialization.FirMemberDeserializer`)

|      % | Samples | Caller                     | Location                                                          |
| -----: | ------: | -------------------------- | ----------------------------------------------------------------- |
| 100.0% |       1 | `deserializeClassToSymbol` | `org.jetbrains.kotlin.fir.deserialization.ClassDeserializationKt` |

##### `invokeExact_MT` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Caller   | Location                                  |
| -----: | ------: | -------- | ----------------------------------------- |
| 100.0% |       1 | `invoke` | `java.lang.invoke.BootstrapMethodInvoker` |

##### `checkAndAddEntry` (`java.util.zip.ZipFile$Source`)

|      % | Samples | Caller    | Location                       |
| -----: | ------: | --------- | ------------------------------ |
| 100.0% |       1 | `initCEN` | `java.util.zip.ZipFile$Source` |

##### `resumeWith` (`kotlin.coroutines.jvm.internal.BaseContinuationImpl`)

|      % | Samples | Caller       | Location                                                           |
| -----: | ------: | ------------ | ------------------------------------------------------------------ |
| 100.0% |       1 | `resumeTask` | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager` |

##### `getValue` (`kotlin.UnsafeLazyImpl`)

|      % | Samples | Caller      | Location                                                     |
| -----: | ------: | ----------- | ------------------------------------------------------------ |
| 100.0% |       1 | `getSystem` | `org.jetbrains.kotlin.fir.resolve.calls.candidate.Candidate` |

##### `lastIndexOf$default` (`kotlin.text.StringsKt__StringsKt`)

|      % | Samples | Caller               | Location                           |
| -----: | ------: | -------------------- | ---------------------------------- |
| 100.0% |       1 | `substringAfterLast` | `kotlin.text.StringsKt__StringsKt` |

##### `copyOf` (`java.util.Arrays`)

|      % | Samples | Caller                   | Location                          |
| -----: | ------: | ------------------------ | --------------------------------- |
| 100.0% |       1 | `ensureCapacityInternal` | `java.lang.AbstractStringBuilder` |

##### `linkToTargetMethod` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Caller                   | Location                                             |
| -----: | ------: | ------------------------ | ---------------------------------------------------- |
| 100.0% |       1 | `processFunctionsByName` | `org.jetbrains.kotlin.fir.scopes.jvm.JvmMappedScope` |

##### `addElementType` (`java.lang.reflect.Proxy$ProxyBuilder`)

|      % | Samples | Caller            | Location                               |
| -----: | ------: | ----------------- | -------------------------------------- |
| 100.0% |       1 | `referencedTypes` | `java.lang.reflect.Proxy$ProxyBuilder` |

##### `allocateUninitializedArray0` (`jdk.internal.misc.Unsafe`)

|      % | Samples | Caller                       | Location                   |
| -----: | ------: | ---------------------------- | -------------------------- |
| 100.0% |       1 | `allocateUninitializedArray` | `jdk.internal.misc.Unsafe` |

##### `transfer` (`java.util.concurrent.ConcurrentHashMap`)

|      % | Samples | Caller     | Location                                 |
| -----: | ------: | ---------- | ---------------------------------------- |
| 100.0% |       1 | `addCount` | `java.util.concurrent.ConcurrentHashMap` |

##### `removeLast` (`kotlin.collections.CollectionsKt__MutableCollectionsKt`)

|      % | Samples | Caller                 | Location                                                                   |
| -----: | ------: | ---------------------- | -------------------------------------------------------------------------- |
| 100.0% |       1 | `dropCallOrAssignment` | `org.jetbrains.kotlin.fir.analysis.checkers.context.MutableCheckerContext` |

##### `<init>` (`java.lang.AbstractStringBuilder`)

|      % | Samples | Caller   | Location                  |
| -----: | ------: | -------- | ------------------------- |
| 100.0% |       1 | `<init>` | `java.lang.StringBuilder` |

##### `asReversed` (`kotlin.collections.CollectionsKt__ReversedViewsKt`)

|      % | Samples | Caller                    | Location                                                                         |
| -----: | ------: | ------------------------- | -------------------------------------------------------------------------------- |
| 100.0% |       1 | `isCallTheFirstStatement` | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirDeclarationBuilder` |

##### `equals` (`java.util.Objects`)

|      % | Samples | Caller   | Location                               |
| -----: | ------: | -------- | -------------------------------------- |
| 100.0% |       1 | `equals` | `jdk.internal.util.StrongReferenceKey` |

##### `throwParameterIsNullNPE` (`kotlin.jvm.internal.Intrinsics`)

|      % | Samples | Caller                  | Location                         |
| -----: | ------: | ----------------------- | -------------------------------- |
| 100.0% |       1 | `checkNotNullParameter` | `kotlin.jvm.internal.Intrinsics` |

##### `clinit` (`java.lang.invoke.InvokerBytecodeGenerator`)

|      % | Samples | Caller                        | Location                                    |
| -----: | ------: | ----------------------------- | ------------------------------------------- |
| 100.0% |       1 | `generateCustomizedCodeBytes` | `java.lang.invoke.InvokerBytecodeGenerator` |

##### `I2C/C2I adapters(0xbab)` (`<unknown>`)

|      % | Samples | Caller | Location                         |
| -----: | ------: | ------ | -------------------------------- |
| 100.0% |       1 | `run`  | `sun.invoke.util.VerifyAccess$1` |

##### `I2C/C2I adapters(0xbb)` (`<unknown>`)

|      % | Samples | Caller                   | Location                                                                           |
| -----: | ------: | ------------------------ | ---------------------------------------------------------------------------------- |
| 100.0% |       1 | `toDeprecationsProvider` | `org.jetbrains.kotlin.fir.declarations.DeprecationAnnotationInfoPerUseSiteStorage` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                                   | Location                                                |
| ----: | ------: | ------------------------------------------ | ------------------------------------------------------- |
| 67.6% |     892 | `_pthread_start`                           | `<unknown>`                                             |
| 67.6% |     892 | `thread_start`                             | `<unknown>`                                             |
| 67.6% |     891 | `Thread::call_run`                         | `<unknown>`                                             |
| 67.6% |     891 | `thread_native_entry`                      | `<unknown>`                                             |
| 61.3% |     809 | `CompileBroker::compiler_thread_loop`      | `<unknown>`                                             |
| 61.3% |     809 | `JavaThread::thread_main_inner`            | `<unknown>`                                             |
| 60.6% |     799 | `CompileBroker::invoke_compiler_on_method` | `<unknown>`                                             |
| 42.5% |     561 | `Compile::Compile`                         | `<unknown>`                                             |
| 42.5% |     561 | `C2Compiler::compile_method`               | `<unknown>`                                             |
| 31.8% |     420 | `run`                                      | `org.jetbrains.kotlin.preloading.Preloader`             |
| 31.8% |     420 | `main`                                     | `org.jetbrains.kotlin.preloading.Preloader`             |
| 26.4% |     348 | `main`                                     | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`  |
| 26.4% |     348 | `main`                                     | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 26.4% |     348 | `invokeStatic`                             | `java.lang.invoke.LambdaForm$DMH.0x000000d801008000`    |
| 26.4% |     348 | `invoke`                                   | `java.lang.invoke.LambdaForm$MH.0x000000d801009400`     |
| 26.4% |     348 | `invokeExact_MT`                           | `java.lang.invoke.Invokers$Holder`                      |
| 26.4% |     348 | `invokeImpl`                               | `jdk.internal.reflect.DirectMethodHandleAccessor`       |
| 26.4% |     348 | `invoke`                                   | `jdk.internal.reflect.DirectMethodHandleAccessor`       |
| 26.4% |     348 | `invoke`                                   | `java.lang.reflect.Method`                              |
| 26.3% |     347 | `doMain`                                   | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

#### Categories

##### Compiler

|     % | Samples | Function                                   | Location    |
| ----: | ------: | ------------------------------------------ | ----------- |
| 61.3% |     809 | `CompileBroker::compiler_thread_loop`      | `<unknown>` |
| 60.6% |     799 | `CompileBroker::invoke_compiler_on_method` | `<unknown>` |
| 42.5% |     561 | `Compile::Compile`                         | `<unknown>` |
| 42.5% |     561 | `C2Compiler::compile_method`               | `<unknown>` |
| 21.6% |     285 | `Compile::Code_Gen`                        | `<unknown>` |
| 17.6% |     232 | `Compilation::compile_method`              | `<unknown>` |
| 17.6% |     232 | `Compilation::Compilation`                 | `<unknown>` |
| 16.3% |     215 | `Compile::Optimize`                        | `<unknown>` |
| 16.2% |     214 | `Compilation::compile_java_method`         | `<unknown>` |
| 11.8% |     156 | `PhaseChaitin::Register_Allocate`          | `<unknown>` |
| 10.0% |     132 | `PhaseIdealLoop::optimize`                 | `<unknown>` |
|  9.0% |     119 | `PhaseIdealLoop::build_and_optimize`       | `<unknown>` |
|  9.0% |     119 | `PhaseIdealLoop::PhaseIdealLoop`           | `<unknown>` |
|  7.1% |      93 | `Compilation::emit_lir`                    | `<unknown>` |
|  6.1% |      81 | `LinearScan::do_linear_scan`               | `<unknown>` |
|  5.5% |      72 | `Compilation::build_hir`                   | `<unknown>` |
|  4.5% |      60 | `Compile::optimize_loops`                  | `<unknown>` |
|  4.0% |      53 | `PhaseIterGVN::optimize`                   | `<unknown>` |
|  3.9% |      52 | `GraphBuilder::GraphBuilder`               | `<unknown>` |
|  3.8% |      50 | `PhaseIterGVN::transform_old`              | `<unknown>` |

##### Native

|     % | Samples | Function                                        | Location    |
| ----: | ------: | ----------------------------------------------- | ----------- |
| 67.6% |     892 | `_pthread_start`                                | `<unknown>` |
| 67.6% |     892 | `thread_start`                                  | `<unknown>` |
| 67.6% |     891 | `Thread::call_run`                              | `<unknown>` |
| 67.6% |     891 | `thread_native_entry`                           | `<unknown>` |
| 61.3% |     809 | `JavaThread::thread_main_inner`                 | `<unknown>` |
| 17.6% |     232 | `Compiler::compile_method`                      | `<unknown>` |
|  5.4% |      71 | `WorkerThread::run`                             | `<unknown>` |
|  4.8% |      63 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `<unknown>` |
|  4.4% |      58 | `KlassFactory::create_from_stream`              | `<unknown>` |
|  4.4% |      58 | `Java_java_lang_ClassLoader_defineClass1`       | `<unknown>` |
|  4.3% |      57 | `Parse::Parse`                                  | `<unknown>` |
|  4.3% |      57 | `ParseGenerator::generate`                      | `<unknown>` |
|  4.3% |      57 | `Parse::do_one_block`                           | `<unknown>` |
|  4.3% |      57 | `Parse::do_all_blocks`                          | `<unknown>` |
|  4.3% |      57 | `SystemDictionary::resolve_class_from_stream`   | `<unknown>` |
|  4.3% |      57 | `jvm_define_class_common`                       | `<unknown>` |
|  4.3% |      57 | `JVM_DefineClassWithSource`                     | `<unknown>` |
|  4.1% |      54 | `Parse::do_call`                                | `<unknown>` |
|  3.9% |      52 | `IRScope::IRScope`                              | `<unknown>` |
|  3.9% |      52 | `IR::IR`                                        | `<unknown>` |

##### Ours

|     % | Samples | Function                                   | Location                                                         |
| ----: | ------: | ------------------------------------------ | ---------------------------------------------------------------- |
| 31.8% |     420 | `run`                                      | `org.jetbrains.kotlin.preloading.Preloader`                      |
| 31.8% |     420 | `main`                                     | `org.jetbrains.kotlin.preloading.Preloader`                      |
| 26.4% |     348 | `main`                                     | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`           |
| 26.4% |     348 | `main`                                     | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                     |
| 26.3% |     347 | `doMain`                                   | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`          |
| 26.2% |     346 | `exec`                                     | `org.jetbrains.kotlin.cli.common.CLICompiler`                    |
| 26.2% |     346 | `doMainNoExit`                             | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`          |
| 26.2% |     346 | `doMainNoExit$default`                     | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`          |
| 25.2% |     333 | `doExecutePhased`                          | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                     |
| 25.2% |     333 | `execImpl`                                 | `org.jetbrains.kotlin.cli.common.CLICompiler`                    |
| 25.2% |     332 | `runPhasedPipeline`                        | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`          |
| 25.2% |     332 | `executeAndReturnPipeLineArtifact`         | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`          |
| 25.2% |     332 | `executeAndReturnPipeLineArtifact$default` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`          |
| 25.2% |     332 | `execute`                                  | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`          |
| 24.9% |     329 | `phaseBody`                                | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`                |
| 24.9% |     329 | `invoke`                                   | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`          |
| 24.9% |     329 | `invoke`                                   | `org.jetbrains.kotlin.backend.common.phaser.CompositePhase`      |
| 24.9% |     329 | `invokeToplevel`                           | `org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`             |
| 16.6% |     219 | `executePhase`                             | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase` |
| 12.1% |     160 | `resolveAndCheckFir`                       | `org.jetbrains.kotlin.fir.pipeline.FirUtilsKt`                   |

##### Standard library

|     % | Samples | Function            | Location                                              |
| ----: | ------: | ------------------- | ----------------------------------------------------- |
| 26.4% |     348 | `invokeStatic`      | `java.lang.invoke.LambdaForm$DMH.0x000000d801008000`  |
| 26.4% |     348 | `invoke`            | `java.lang.invoke.LambdaForm$MH.0x000000d801009400`   |
| 26.4% |     348 | `invokeExact_MT`    | `java.lang.invoke.Invokers$Holder`                    |
| 26.4% |     348 | `invokeImpl`        | `jdk.internal.reflect.DirectMethodHandleAccessor`     |
| 26.4% |     348 | `invoke`            | `jdk.internal.reflect.DirectMethodHandleAccessor`     |
| 26.4% |     348 | `invoke`            | `java.lang.reflect.Method`                            |
|  5.1% |      67 | `loadClass`         | `java.lang.ClassLoader`                               |
|  5.0% |      66 | `read`              | `java.io.FilterInputStream`                           |
|  4.9% |      65 | `read`              | `java.util.zip.ZipInputStream`                        |
|  4.9% |      64 | `inflate`           | `java.util.zip.Inflater`                              |
|  4.8% |      63 | `inflateBytesBytes` | `java.util.zip.Inflater`                              |
|  4.8% |      63 | `read`              | `java.util.zip.InflaterInputStream`                   |
|  4.6% |      61 | `defineClass`       | `java.lang.ClassLoader`                               |
|  4.5% |      60 | `defineClass1`      | `java.lang.ClassLoader`                               |
|  4.2% |      56 | `resumeWith`        | `kotlin.coroutines.jvm.internal.BaseContinuationImpl` |
|  1.1% |      15 | `getValue`          | `kotlin.UnsafeLazyImpl`                               |
|  0.9% |      12 | `getValue`          | `kotlin.SafePublicationLazyImpl`                      |
|  0.8% |      10 | `getValue`          | `kotlin.SynchronizedLazyImpl`                         |
|  0.6% |       8 | `linkCallSiteImpl`  | `java.lang.invoke.MethodHandleNatives`                |
|  0.6% |       8 | `linkCallSite`      | `java.lang.invoke.MethodHandleNatives`                |

##### JIT

|    % | Samples | Function                  | Location    |
| ---: | ------: | ------------------------- | ----------- |
| 0.5% |       6 | `I2C/C2I adapters(0xb)`   | `<unknown>` |
| 0.2% |       3 | `itable stub`             | `<unknown>` |
| 0.2% |       2 | `zero_blocks`             | `<unknown>` |
| 0.2% |       2 | `I2C/C2I adapters(0xbbb)` | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xbab)` | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xbb)`  | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `_pthread_start` (`<unknown>`)

|     % | Samples | Callee                | Location    |
| ----: | ------: | --------------------- | ----------- |
| 99.9% |     891 | `thread_native_entry` | `<unknown>` |
|  0.1% |       1 | `ThreadJavaMain`      | `<unknown>` |

##### `thread_start` (`<unknown>`)

|      % | Samples | Callee           | Location    |
| -----: | ------: | ---------------- | ----------- |
| 100.0% |     892 | `_pthread_start` | `<unknown>` |

##### `Thread::call_run` (`<unknown>`)

|     % | Samples | Callee                          | Location    |
| ----: | ------: | ------------------------------- | ----------- |
| 90.8% |     809 | `JavaThread::thread_main_inner` | `<unknown>` |
|  8.0% |      71 | `WorkerThread::run`             | `<unknown>` |
|  0.7% |       6 | `VMThread::run`                 | `<unknown>` |
|  0.3% |       3 | `WatcherThread::run`            | `<unknown>` |
|  0.2% |       2 | `ConcurrentGCThread::run`       | `<unknown>` |

##### `thread_native_entry` (`<unknown>`)

|      % | Samples | Callee             | Location    |
| -----: | ------: | ------------------ | ----------- |
| 100.0% |     891 | `Thread::call_run` | `<unknown>` |

##### `CompileBroker::compiler_thread_loop` (`<unknown>`)

|     % | Samples | Callee                                     | Location    |
| ----: | ------: | ------------------------------------------ | ----------- |
| 98.8% |     799 | `CompileBroker::invoke_compiler_on_method` | `<unknown>` |
|  1.2% |      10 | `CompileQueue::get`                        | `<unknown>` |

##### `JavaThread::thread_main_inner` (`<unknown>`)

|      % | Samples | Callee                                | Location    |
| -----: | ------: | ------------------------------------- | ----------- |
| 100.0% |     809 | `CompileBroker::compiler_thread_loop` | `<unknown>` |

##### `CompileBroker::invoke_compiler_on_method` (`<unknown>`)

|     % | Samples | Callee                          | Location    |
| ----: | ------: | ------------------------------- | ----------- |
| 70.2% |     561 | `C2Compiler::compile_method`    | `<unknown>` |
| 29.0% |     232 | `Compiler::compile_method`      | `<unknown>` |
|  0.5% |       4 | `ciEnv::get_method_from_handle` | `<unknown>` |
|  0.3% |       2 | `ciEnv::ciEnv`                  | `<unknown>` |

##### `Compile::Compile` (`<unknown>`)

|     % | Samples | Callee                                   | Location    |
| ----: | ------: | ---------------------------------------- | ----------- |
| 50.8% |     285 | `Compile::Code_Gen`                      | `<unknown>` |
| 38.3% |     215 | `Compile::Optimize`                      | `<unknown>` |
|  9.8% |      55 | `ParseGenerator::generate`               | `<unknown>` |
|  0.4% |       2 | `Compile::inline_string_calls`           | `<unknown>` |
|  0.4% |       2 | `PhaseRemoveUseless::PhaseRemoveUseless` | `<unknown>` |

##### `C2Compiler::compile_method` (`<unknown>`)

|      % | Samples | Callee             | Location    |
| -----: | ------: | ------------------ | ----------- |
| 100.0% |     561 | `Compile::Compile` | `<unknown>` |

##### `run` (`org.jetbrains.kotlin.preloading.Preloader`)

|     % | Samples | Callee           | Location                                               |
| ----: | ------: | ---------------- | ------------------------------------------------------ |
| 82.9% |     348 | `invoke`         | `java.lang.reflect.Method`                             |
| 16.9% |      71 | `preloadClasses` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |
|  0.2% |       1 | `getMethod`      | `java.lang.Class`                                      |

##### `main` (`org.jetbrains.kotlin.preloading.Preloader`)

|      % | Samples | Callee | Location                                    |
| -----: | ------: | ------ | ------------------------------------------- |
| 100.0% |     420 | `run`  | `org.jetbrains.kotlin.preloading.Preloader` |

##### `main` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`)

|     % | Samples | Callee   | Location                                                |
| ----: | ------: | -------- | ------------------------------------------------------- |
| 99.7% |     347 | `doMain` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
|  0.3% |       1 | `<init>` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |

##### `main` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % | Samples | Callee | Location                                               |
| -----: | ------: | ------ | ------------------------------------------------------ |
| 100.0% |     348 | `main` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion` |

##### `invokeStatic` (`java.lang.invoke.LambdaForm$DMH.0x000000d801008000`)

|      % | Samples | Callee | Location                                     |
| -----: | ------: | ------ | -------------------------------------------- |
| 100.0% |     348 | `main` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x000000d801009400`)

|      % | Samples | Callee         | Location                                             |
| -----: | ------: | -------------- | ---------------------------------------------------- |
| 100.0% |     348 | `invokeStatic` | `java.lang.invoke.LambdaForm$DMH.0x000000d801008000` |

##### `invokeExact_MT` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Callee         | Location                                             |
| -----: | ------: | -------------- | ---------------------------------------------------- |
| 100.0% |     348 | `invoke`       | `java.lang.invoke.LambdaForm$MH.0x000000d801009400`  |
|   1.4% |       5 | `invokeStatic` | `java.lang.invoke.LambdaForm$DMH.0x000000d801230000` |
|   0.3% |       1 | `invokeStatic` | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### `invokeImpl` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % | Samples | Callee           | Location                           |
| -----: | ------: | ---------------- | ---------------------------------- |
| 100.0% |     348 | `invokeExact_MT` | `java.lang.invoke.Invokers$Holder` |

##### `invoke` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % | Samples | Callee       | Location                                          |
| -----: | ------: | ------------ | ------------------------------------------------- |
| 100.0% |     348 | `invokeImpl` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke` (`java.lang.reflect.Method`)

|      % | Samples | Callee   | Location                                          |
| -----: | ------: | -------- | ------------------------------------------------- |
| 100.0% |     348 | `invoke` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `doMain` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|     % | Samples | Callee                         | Location                                                |
| ----: | ------: | ------------------------------ | ------------------------------------------------------- |
| 99.7% |     346 | `doMainNoExit$default`         | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
|  0.3% |       1 | `setupIdeaStandaloneExecution` | `org.jetbrains.kotlin.cli.jvm.compiler.CompatKt`        |

##### `exec` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Callee                              | Location                                                                |
| -----: | ------: | ----------------------------------- | ----------------------------------------------------------------------- |
| 100.0% |     346 | `exec`                              | `org.jetbrains.kotlin.cli.common.CLICompiler`                           |
|  96.2% |     333 | `execImpl`                          | `org.jetbrains.kotlin.cli.common.CLICompiler`                           |
|   2.3% |       8 | `<clinit>`                          | `org.jetbrains.kotlin.cli.common.ArgumentsKt`                           |
|   1.4% |       5 | `parseCommandLineArguments$default` | `org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt` |

##### `doMainNoExit` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % | Samples | Callee | Location                                      |
| -----: | ------: | ------ | --------------------------------------------- |
| 100.0% |     346 | `exec` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `doMainNoExit$default` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % | Samples | Callee         | Location                                                |
| -----: | ------: | -------------- | ------------------------------------------------------- |
| 100.0% |     346 | `doMainNoExit` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `doExecutePhased` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % | Samples | Callee                         | Location                                                |
| -----: | ------: | ------------------------------ | ------------------------------------------------------- |
| 100.0% |     333 | `doExecutePhased`              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
|  99.7% |     332 | `execute`                      | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
|   0.3% |       1 | `getDefaultPerformanceManager` | `org.jetbrains.kotlin.cli.common.CLICompiler`           |

##### `execImpl` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Callee            | Location                                     |
| -----: | ------: | ----------------- | -------------------------------------------- |
| 100.0% |     333 | `doExecutePhased` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `runPhasedPipeline` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|     % | Samples | Callee                     | Location                                                                    |
| ----: | ------: | -------------------------- | --------------------------------------------------------------------------- |
| 99.1% |     329 | `invokeToplevel`           | `org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`                        |
|  0.6% |       2 | `reportToMessageCollector` | `org.jetbrains.kotlin.cli.common.fir.FirDiagnosticsCompilerResultsReporter` |
|  0.3% |       1 | `createCompoundPhase`      | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmCliPipeline`                      |

##### `executeAndReturnPipeLineArtifact` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Callee              | Location                                                |
| -----: | ------: | ------------------- | ------------------------------------------------------- |
| 100.0% |     332 | `runPhasedPipeline` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `executeAndReturnPipeLineArtifact$default` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Callee                             | Location                                                |
| -----: | ------: | ---------------------------------- | ------------------------------------------------------- |
| 100.0% |     332 | `executeAndReturnPipeLineArtifact` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `execute` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Callee                                     | Location                                                |
| -----: | ------: | ------------------------------------------ | ------------------------------------------------------- |
| 100.0% |     332 | `executeAndReturnPipeLineArtifact$default` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `phaseBody` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

|      % | Samples | Callee         | Location                                                              |
| -----: | ------: | -------------- | --------------------------------------------------------------------- |
| 100.0% |     329 | `phaseBody`    | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`                     |
|  66.6% |     219 | `executePhase` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`      |
|  23.4% |      77 | `executePhase` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`       |
|   9.1% |      30 | `executePhase` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFir2IrPipelinePhase`        |
|   0.9% |       3 | `executePhase` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmConfigurationPipelinePhase` |

##### `invoke` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`)

|      % | Samples | Callee      | Location                                                         |
| -----: | ------: | ----------- | ---------------------------------------------------------------- |
| 100.0% |     329 | `phaseBody` | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`                |
|   5.5% |      18 | `phaseBody` | `org.jetbrains.kotlin.backend.common.phaser.FileLoweringPhase`   |
|   1.2% |       4 | `phaseBody` | `org.jetbrains.kotlin.backend.common.phaser.ModuleLoweringPhase` |

##### `invoke` (`org.jetbrains.kotlin.backend.common.phaser.CompositePhase`)

|      % | Samples | Callee   | Location                                                |
| -----: | ------: | -------- | ------------------------------------------------------- |
| 100.0% |     329 | `invoke` | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase` |

##### `invokeToplevel` (`org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`)

|      % | Samples | Callee   | Location                                                    |
| -----: | ------: | -------- | ----------------------------------------------------------- |
| 100.0% |     329 | `invoke` | `org.jetbrains.kotlin.backend.common.phaser.CompositePhase` |

##### `Compile::Code_Gen` (`<unknown>`)

|     % | Samples | Callee                            | Location    |
| ----: | ------: | --------------------------------- | ----------- |
| 54.7% |     156 | `PhaseChaitin::Register_Allocate` | `<unknown>` |
| 14.7% |      42 | `Matcher::match`                  | `<unknown>` |
| 14.0% |      40 | `PhaseOutput::Output`             | `<unknown>` |
| 13.7% |      39 | `PhaseCFG::do_global_code_motion` | `<unknown>` |
|  1.4% |       4 | `PhaseOutput::install_code`       | `<unknown>` |

##### `Compilation::compile_method` (`<unknown>`)

|     % | Samples | Callee                             | Location    |
| ----: | ------: | ---------------------------------- | ----------- |
| 92.2% |     214 | `Compilation::compile_java_method` | `<unknown>` |
|  6.9% |      16 | `ciEnv::register_method`           | `<unknown>` |
|  0.9% |       2 | `Dependencies::assert_common_1`    | `<unknown>` |

##### `Compilation::Compilation` (`<unknown>`)

|      % | Samples | Callee                        | Location    |
| -----: | ------: | ----------------------------- | ----------- |
| 100.0% |     232 | `Compilation::compile_method` | `<unknown>` |

##### `Compiler::compile_method` (`<unknown>`)

|      % | Samples | Callee                     | Location    |
| -----: | ------: | -------------------------- | ----------- |
| 100.0% |     232 | `Compilation::Compilation` | `<unknown>` |

##### `executePhase` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`)

|      % | Samples | Callee                        | Location                                                         |
| -----: | ------: | ----------------------------- | ---------------------------------------------------------------- |
| 100.0% |     219 | `executePhase`                | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase` |
|  73.1% |     160 | `resolveAndCheckFir`          | `org.jetbrains.kotlin.fir.pipeline.FirUtilsKt`                   |
|  10.0% |      22 | `createEnvironmentAndSources` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase` |
|   7.3% |      16 | `buildFirViaLightTree`        | `org.jetbrains.kotlin.fir.pipeline.FirUtilsKt`                   |
|   6.8% |      15 | `prepareJvmSessions`          | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase` |

##### `Compile::Optimize` (`<unknown>`)

|     % | Samples | Callee                                 | Location    |
| ----: | ------: | -------------------------------------- | ----------- |
| 33.5% |      72 | `PhaseIdealLoop::optimize`             | `<unknown>` |
| 27.9% |      60 | `Compile::optimize_loops`              | `<unknown>` |
| 13.5% |      29 | `PhaseIterGVN::optimize`               | `<unknown>` |
|  5.6% |      12 | `PhaseMacroExpand::expand_macro_nodes` | `<unknown>` |
|  5.1% |      11 | `PhaseCCP::PhaseCCP`                   | `<unknown>` |

##### `Compilation::compile_java_method` (`<unknown>`)

|     % | Samples | Callee                         | Location    |
| ----: | ------: | ------------------------------ | ----------- |
| 43.5% |      93 | `Compilation::emit_lir`        | `<unknown>` |
| 33.6% |      72 | `Compilation::build_hir`       | `<unknown>` |
| 22.4% |      48 | `Compilation::emit_code_body`  | `<unknown>` |
|  0.5% |       1 | `ciMethod::ensure_method_data` | `<unknown>` |

##### `resolveAndCheckFir` (`org.jetbrains.kotlin.fir.pipeline.FirUtilsKt`)

|     % | Samples | Callee          | Location                                      |
| ----: | ------: | --------------- | --------------------------------------------- |
| 76.9% |     123 | `runResolution` | `org.jetbrains.kotlin.fir.pipeline.AnalyseKt` |
| 23.1% |      37 | `runCheckers`   | `org.jetbrains.kotlin.fir.pipeline.AnalyseKt` |

##### `PhaseChaitin::Register_Allocate` (`<unknown>`)

|     % | Samples | Callee                                     | Location    |
| ----: | ------: | ------------------------------------------ | ----------- |
| 18.6% |      29 | `PhaseChaitin::Split`                      | `<unknown>` |
| 15.4% |      24 | `PhaseChaitin::build_ifg_physical`         | `<unknown>` |
| 12.2% |      19 | `PhaseChaitin::post_allocate_copy_removal` | `<unknown>` |
|  9.0% |      14 | `PhaseChaitin::gather_lrg_masks`           | `<unknown>` |
|  7.7% |      12 | `PhaseLive::compute`                       | `<unknown>` |

##### `PhaseIdealLoop::optimize` (`<unknown>`)

|     % | Samples | Callee                           | Location    |
| ----: | ------: | -------------------------------- | ----------- |
| 90.2% |     119 | `PhaseIdealLoop::PhaseIdealLoop` | `<unknown>` |
|  9.8% |      13 | `PhaseIterGVN::optimize`         | `<unknown>` |

##### `PhaseIdealLoop::build_and_optimize` (`<unknown>`)

|     % | Samples | Callee                                 | Location    |
| ----: | ------: | -------------------------------------- | ----------- |
| 32.8% |      39 | `PhaseIdealLoop::build_loop_late`      | `<unknown>` |
| 17.6% |      21 | `PhaseIdealLoop::split_if_with_blocks` | `<unknown>` |
| 13.4% |      16 | `PhaseIdealLoop::Dominators`           | `<unknown>` |
|  9.2% |      11 | `PhaseIdealLoop::build_loop_early`     | `<unknown>` |
|  6.7% |       8 | `PhaseIdealLoop::build_loop_tree`      | `<unknown>` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`<unknown>`)

|      % | Samples | Callee                               | Location    |
| -----: | ------: | ------------------------------------ | ----------- |
| 100.0% |     119 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |

##### `Compilation::emit_lir` (`<unknown>`)

|     % | Samples | Callee                           | Location    |
| ----: | ------: | -------------------------------- | ----------- |
| 87.1% |      81 | `LinearScan::do_linear_scan`     | `<unknown>` |
| 10.8% |      10 | `BlockList::iterate_forward`     | `<unknown>` |
|  1.1% |       1 | `LinearScan::resolve_data_flow`  | `<unknown>` |
|  1.1% |       1 | `ControlFlowOptimizer::optimize` | `<unknown>` |

##### `LinearScan::do_linear_scan` (`<unknown>`)

|     % | Samples | Callee                                | Location    |
| ----: | ------: | ------------------------------------- | ----------- |
| 45.7% |      37 | `LinearScan::allocate_registers`      | `<unknown>` |
| 19.8% |      16 | `LinearScan::assign_reg_num`          | `<unknown>` |
|  9.9% |       8 | `LinearScan::compute_local_live_sets` | `<unknown>` |
|  9.9% |       8 | `LinearScan::build_intervals`         | `<unknown>` |
|  2.5% |       2 | `LinearScan::resolve_data_flow`       | `<unknown>` |

##### `Compilation::build_hir` (`<unknown>`)

|     % | Samples | Callee                                       | Location    |
| ----: | ------: | -------------------------------------------- | ----------- |
| 72.2% |      52 | `IR::IR`                                     | `<unknown>` |
|  9.7% |       7 | `GlobalValueNumbering::GlobalValueNumbering` | `<unknown>` |
|  5.6% |       4 | `IR::eliminate_null_checks`                  | `<unknown>` |
|  5.6% |       4 | `IR::compute_use_counts`                     | `<unknown>` |
|  2.8% |       2 | `IR::compute_code`                           | `<unknown>` |

##### `WorkerThread::run` (`<unknown>`)

|     % | Samples | Callee                            | Location    |
| ----: | ------: | --------------------------------- | ----------- |
| 54.9% |      39 | `G1EvacuateRegionsBaseTask::work` | `<unknown>` |
| 28.2% |      20 | `G1RebuildRSAndScrubTask::work`   | `<unknown>` |
| 16.9% |      12 | `G1CMConcurrentMarkingTask::work` | `<unknown>` |

##### `loadClass` (`java.lang.ClassLoader`)

|     % | Samples | Callee                     | Location                                                 |
| ----: | ------: | -------------------------- | -------------------------------------------------------- |
| 91.0% |      61 | `findClass`                | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |
|  4.5% |       3 | `findBootstrapClassOrNull` | `java.lang.ClassLoader`                                  |
|  3.0% |       2 | `findClass`                | `java.net.URLClassLoader`                                |
|  3.0% |       2 | `loadClass`                | `java.lang.ClassLoader`                                  |
|  1.5% |       1 | `findLoadedClass`          | `java.lang.ClassLoader`                                  |

##### `read` (`java.io.FilterInputStream`)

|     % | Samples | Callee | Location                       |
| ----: | ------: | ------ | ------------------------------ |
| 98.5% |      65 | `read` | `java.util.zip.ZipInputStream` |
|  3.0% |       2 | `read` | `java.io.BufferedInputStream`  |

##### `read` (`java.util.zip.ZipInputStream`)

|     % | Samples | Callee   | Location                            |
| ----: | ------: | -------- | ----------------------------------- |
| 95.4% |      62 | `read`   | `java.util.zip.InflaterInputStream` |
|  4.6% |       3 | `update` | `java.util.zip.CRC32`               |

##### `inflate` (`java.util.zip.Inflater`)

|     % | Samples | Callee                            | Location                 |
| ----: | ------: | --------------------------------- | ------------------------ |
| 98.4% |      63 | `inflateBytesBytes`               | `java.util.zip.Inflater` |
|  3.1% |       2 | `inflate`                         | `java.util.zip.Inflater` |
|  1.6% |       1 | `monitorexit_nofpu Runtime1 stub` | `<unknown>`              |

##### `Java_java_util_zip_Inflater_inflateBytesBytes` (`<unknown>`)

|     % | Samples | Callee                              | Location    |
| ----: | ------: | ----------------------------------- | ----------- |
| 74.6% |      47 | `inflate_fast`                      | `<unknown>` |
| 22.2% |      14 | `inflate`                           | `<unknown>` |
|  1.6% |       1 | `jni_GetPrimitiveArrayCritical`     | `<unknown>` |
|  1.6% |       1 | `jni_ReleasePrimitiveArrayCritical` | `<unknown>` |

##### `inflateBytesBytes` (`java.util.zip.Inflater`)

|      % | Samples | Callee                                          | Location    |
| -----: | ------: | ----------------------------------------------- | ----------- |
| 100.0% |      63 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `<unknown>` |

##### `read` (`java.util.zip.InflaterInputStream`)

|     % | Samples | Callee    | Location                            |
| ----: | ------: | --------- | ----------------------------------- |
| 98.4% |      62 | `inflate` | `java.util.zip.Inflater`            |
|  1.6% |       1 | `fill`    | `java.util.zip.InflaterInputStream` |

##### `defineClass` (`java.lang.ClassLoader`)

|     % | Samples | Callee            | Location                |
| ----: | ------: | ----------------- | ----------------------- |
| 98.4% |      60 | `defineClass1`    | `java.lang.ClassLoader` |
| 96.7% |      59 | `defineClass`     | `java.lang.ClassLoader` |
|  1.6% |       1 | `postDefineClass` | `java.lang.ClassLoader` |

##### `Compile::optimize_loops` (`<unknown>`)

|      % | Samples | Callee                     | Location    |
| -----: | ------: | -------------------------- | ----------- |
| 100.0% |      60 | `PhaseIdealLoop::optimize` | `<unknown>` |

##### `defineClass1` (`java.lang.ClassLoader`)

|     % | Samples | Callee                                    | Location                                                 |
| ----: | ------: | ----------------------------------------- | -------------------------------------------------------- |
| 96.7% |      58 | `Java_java_lang_ClassLoader_defineClass1` | `<unknown>`                                              |
| 16.7% |      10 | `loadClass`                               | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |
|  3.3% |       2 | `loadClass`                               | `java.lang.ClassLoader`                                  |

##### `KlassFactory::create_from_stream` (`<unknown>`)

|     % | Samples | Callee                                   | Location    |
| ----: | ------: | ---------------------------------------- | ----------- |
| 84.5% |      49 | `ClassFileParser::ClassFileParser`       | `<unknown>` |
| 15.5% |       9 | `ClassFileParser::create_instance_klass` | `<unknown>` |

##### `Java_java_lang_ClassLoader_defineClass1` (`<unknown>`)

|     % | Samples | Callee                      | Location    |
| ----: | ------: | --------------------------- | ----------- |
| 98.3% |      57 | `JVM_DefineClassWithSource` | `<unknown>` |
|  1.7% |       1 | `_platform_memmove`         | `<unknown>` |

##### `Parse::Parse` (`<unknown>`)

|      % | Samples | Callee                    | Location    |
| -----: | ------: | ------------------------- | ----------- |
| 100.0% |      57 | `Parse::do_all_blocks`    | `<unknown>` |
|   7.0% |       4 | `Parse::do_exits`         | `<unknown>` |
|   3.5% |       2 | `Parse::build_exits`      | `<unknown>` |
|   1.8% |       1 | `Parse::create_entry_map` | `<unknown>` |

##### `ParseGenerator::generate` (`<unknown>`)

|      % | Samples | Callee         | Location    |
| -----: | ------: | -------------- | ----------- |
| 100.0% |      57 | `Parse::Parse` | `<unknown>` |

##### `Parse::do_one_block` (`<unknown>`)

|     % | Samples | Callee                   | Location    |
| ----: | ------: | ------------------------ | ----------- |
| 94.7% |      54 | `Parse::do_call`         | `<unknown>` |
| 28.1% |      16 | `Parse::do_field_access` | `<unknown>` |
|  3.5% |       2 | `Parse::return_current`  | `<unknown>` |
|  3.5% |       2 | `Parse::do_one_bytecode` | `<unknown>` |
|  3.5% |       2 | `Parse::do_checkcast`    | `<unknown>` |

##### `Parse::do_all_blocks` (`<unknown>`)

|      % | Samples | Callee                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |      57 | `Parse::do_one_block` | `<unknown>` |

##### `SystemDictionary::resolve_class_from_stream` (`<unknown>`)

|     % | Samples | Callee                                    | Location    |
| ----: | ------: | ----------------------------------------- | ----------- |
| 96.5% |      55 | `KlassFactory::create_from_stream`        | `<unknown>` |
|  3.5% |       2 | `SystemDictionary::define_instance_class` | `<unknown>` |

##### `jvm_define_class_common` (`<unknown>`)

|      % | Samples | Callee                                        | Location    |
| -----: | ------: | --------------------------------------------- | ----------- |
| 100.0% |      57 | `SystemDictionary::resolve_class_from_stream` | `<unknown>` |

##### `JVM_DefineClassWithSource` (`<unknown>`)

|      % | Samples | Callee                    | Location    |
| -----: | ------: | ------------------------- | ----------- |
| 100.0% |      57 | `jvm_define_class_common` | `<unknown>` |

##### `resumeWith` (`kotlin.coroutines.jvm.internal.BaseContinuationImpl`)

|     % | Samples | Callee          | Location                                                                                                      |
| ----: | ------: | --------------- | ------------------------------------------------------------------------------------------------------------- |
| 64.3% |      36 | `invokeSuspend` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask$processLevel$6`                         |
| 51.8% |      29 | `invokeSuspend` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner$processCandidate$1`                      |
| 14.3% |       8 | `invokeSuspend` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver$enqueueResolutionTasks$2`                      |
|  5.4% |       3 | `invokeSuspend` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver$enqueueResolutionTasks$4`                      |
|  3.6% |       2 | `invokeSuspend` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirInvokeResolveTowerExtension$enqueueResolverTasksForInvoke$3` |

##### `Parse::do_call` (`<unknown>`)

|     % | Samples | Callee                                                | Location    |
| ----: | ------: | ----------------------------------------------------- | ----------- |
| 79.6% |      43 | `PredictedCallGenerator::generate`                    | `<unknown>` |
| 61.1% |      33 | `ParseGenerator::generate`                            | `<unknown>` |
| 14.8% |       8 | `Compile::call_generator`                             | `<unknown>` |
|  7.4% |       4 | `GraphKit::record_profiled_arguments_for_speculation` | `<unknown>` |
|  5.6% |       3 | `LibraryIntrinsic::generate`                          | `<unknown>` |

##### `PhaseIterGVN::optimize` (`<unknown>`)

|     % | Samples | Callee                                    | Location    |
| ----: | ------: | ----------------------------------------- | ----------- |
| 94.3% |      50 | `PhaseIterGVN::transform_old`             | `<unknown>` |
|  1.9% |       1 | `PhiNode::Value`                          | `<unknown>` |
|  1.9% |       1 | `PhaseIterGVN::remove_globally_dead_node` | `<unknown>` |
|  1.9% |       1 | `PhiNode::hash`                           | `<unknown>` |

##### `GraphBuilder::GraphBuilder` (`<unknown>`)

|     % | Samples | Callee                               | Location    |
| ----: | ------: | ------------------------------------ | ----------- |
| 88.5% |      46 | `GraphBuilder::iterate_all_blocks`   | `<unknown>` |
|  5.8% |       3 | `BlockBegin::iterate_preorder`       | `<unknown>` |
|  1.9% |       1 | `BlockListBuilder::BlockListBuilder` | `<unknown>` |

##### `IRScope::IRScope` (`<unknown>`)

|      % | Samples | Callee                       | Location    |
| -----: | ------: | ---------------------------- | ----------- |
| 100.0% |      52 | `GraphBuilder::GraphBuilder` | `<unknown>` |

##### `IR::IR` (`<unknown>`)

|      % | Samples | Callee             | Location    |
| -----: | ------: | ------------------ | ----------- |
| 100.0% |      52 | `IRScope::IRScope` | `<unknown>` |

##### `PhaseIterGVN::transform_old` (`<unknown>`)

|     % | Samples | Callee                       | Location    |
| ----: | ------: | ---------------------------- | ----------- |
| 14.0% |       7 | `StoreNode::Ideal`           | `<unknown>` |
| 10.0% |       5 | `NodeHash::hash_find_insert` | `<unknown>` |
| 10.0% |       5 | `IfNode::Ideal`              | `<unknown>` |
|  8.0% |       4 | `PhaseIterGVN::subsume_node` | `<unknown>` |
|  6.0% |       3 | `RegionNode::Ideal`          | `<unknown>` |

##### `getValue` (`kotlin.UnsafeLazyImpl`)

|     % | Samples | Callee   | Location                                                                                              |
| ----: | ------: | -------- | ----------------------------------------------------------------------------------------------------- |
| 66.7% |      10 | `invoke` | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver$$Lambda.0x000000d8016828a0`                   |
|  6.7% |       1 | `invoke` | `org.jetbrains.kotlin.fir.resolve.calls.candidate.Candidate$$Lambda.0x000000d801670000`               |
|  6.7% |       1 | `invoke` | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerDataElementsForName$$Lambda.0x000000d80165fce0`    |
|  6.7% |       1 | `invoke` | `org.jetbrains.kotlin.types.AbstractTypeApproximator$$Lambda.0x000000d80169b7d0`                      |
|  6.7% |       1 | `invoke` | `org.jetbrains.kotlin.load.java.structure.impl.classFiles.BinaryJavaClass$$Lambda.0x000000d8016089c8` |

##### `getValue` (`kotlin.SafePublicationLazyImpl`)

|     % | Samples | Callee   | Location                                                                                                     |
| ----: | ------: | -------- | ------------------------------------------------------------------------------------------------------------ |
| 58.3% |       7 | `invoke` | `kotlin.reflect.jvm.internal.DescriptorKProperty$$Lambda$0`                                                  |
| 25.0% |       3 | `invoke` | `org.jetbrains.kotlin.fir.java.deserialization.JvmBinaryAnnotationDeserializer$$Lambda.0x000000d8015d74a0`   |
|  8.3% |       1 | `invoke` | `org.jetbrains.kotlin.fir.java.deserialization.OptionalAnnotationClassesProvider$$Lambda.0x000000d801476790` |
|  8.3% |       1 | `invoke` | `org.jetbrains.kotlin.fir.resolve.calls.ImplicitReceiverValue$$Lambda.0x000000d801655c20`                    |

##### `getValue` (`kotlin.SynchronizedLazyImpl`)

|     % | Samples | Callee   | Location                                                                                         |
| ----: | ------: | -------- | ------------------------------------------------------------------------------------------------ |
| 20.0% |       2 | `invoke` | `org.jetbrains.kotlin.builtins.DefaultBuiltIns$$Lambda.0x000000d801755fe8`                       |
| 10.0% |       1 | `invoke` | `org.jetbrains.kotlin.cli.common.CLICompiler$$Lambda.0x000000d80100a000`                         |
| 10.0% |       1 | `invoke` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000d801820000`                |
| 10.0% |       1 | `invoke` | `org.jetbrains.kotlin.diagnostics.KtDiagnosticFactoryToRendererMapKt$$Lambda.0x000000d801141e48` |
| 10.0% |       1 | `invoke` | `org.jetbrains.kotlin.ir.descriptors.IrBasedDeclarationDescriptor$annotations$2`                 |

##### `linkCallSiteImpl` (`java.lang.invoke.MethodHandleNatives`)

|     % | Samples | Callee               | Location                    |
| ----: | ------: | -------------------- | --------------------------- |
| 87.5% |       7 | `makeSite`           | `java.lang.invoke.CallSite` |
| 12.5% |       1 | `linkToTargetMethod` | `java.lang.invoke.Invokers` |

##### `linkCallSite` (`java.lang.invoke.MethodHandleNatives`)

|      % | Samples | Callee             | Location                               |
| -----: | ------: | ------------------ | -------------------------------------- |
| 100.0% |       8 | `linkCallSiteImpl` | `java.lang.invoke.MethodHandleNatives` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ---: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 3.2% |      42 | `inflate_fast` ← `Java_java_util_zip_Inflater_inflateBytesBytes` ← `inflateBytesBytes` (`java.util.zip.Inflater`) ← `inflate` ← `read` (`java.util.zip.InflaterInputStream`) ← `read` (`java.util.zip.ZipInputStream`) ← `read` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses` ← `run` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main`                                                                                                                                                         |
| 1.4% |      18 | `PhaseChaitin::Split` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                 |
| 0.9% |      12 | `PhaseChaitin::gather_lrg_masks` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                      |
| 0.8% |      11 | `LinearScanWalker::alloc_free_reg` ← `LinearScanWalker::activate_current` ← `IntervalWalker::walk_to` ← `LinearScan::allocate_registers` ← `LinearScan::do_linear_scan` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                    |
| 0.8% |      11 | `PhaseChaitin::build_ifg_physical` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                    |
| 0.7% |       9 | `PhaseChaitin::post_allocate_copy_removal` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                            |
| 0.6% |       8 | `IntervalWalker::walk_to` ← `IntervalWalker::walk_to` ← `LinearScan::allocate_registers` ← `LinearScan::do_linear_scan` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                    |
| 0.6% |       8 | `__psynch_cvwait` ← `PlatformMonitor::wait` ← `Monitor::wait` ← `CompileQueue::get` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                              |
| 0.6% |       8 | `PhaseChaitin::elide_copy` ← `PhaseChaitin::post_allocate_copy_removal` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                               |
| 0.5% |       7 | `Arena::contains` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                   |
| 0.5% |       7 | `PhaseLive::compute` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                  |
| 0.5% |       7 | `PhaseAggressiveCoalesce::insert_copies` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                              |
| 0.5% |       7 | `LinearScanWalker::free_collect_inactive_fixed` ← `LinearScanWalker::alloc_free_reg` ← `LinearScanWalker::activate_current` ← `IntervalWalker::walk_to` ← `LinearScan::allocate_registers` ← `LinearScan::do_linear_scan` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`  |
| 0.5% |       6 | `PhaseIdealLoop::build_loop_late_post_work` ← `PhaseIdealLoop::build_loop_late` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                        |
| 0.5% |       6 | `fwd_copy_again` ← `G1ParScanThreadState::trim_queue_to_threshold` ← `G1ScanHRForRegionClosure::scan_memregion` ← `void G1ScanHRForRegionClosure::ChunkScanner::on_dirty_cards<G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)>` ← `G1ScanHRForRegionClosure::scan_heap_roots` ← `G1ScanHRForRegionClosure::do_heap_region` ← `G1RemSet::scan_heap_roots` ← `G1EvacuateRegionsTask::scan_roots` ← `G1EvacuateRegionsBaseTask::work` ← `WorkerThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start` |
| 0.5% |       6 | `PhaseIdealLoop::build_loop_late` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                  |
| 0.5% |       6 | `PhaseIdealLoop::Dominators` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                           |
| 0.4% |       5 | `inflate` ← `Java_java_util_zip_Inflater_inflateBytesBytes` ← `inflateBytesBytes` (`java.util.zip.Inflater`) ← `inflate` ← `read` (`java.util.zip.InflaterInputStream`) ← `read` (`java.util.zip.ZipInputStream`) ← `read` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses` ← `run` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main`                                                                                                                                                              |
| 0.4% |       5 | `PhaseIdealLoop::build_loop_early` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                 |
| 0.4% |       5 | `PhaseIdealLoop::Dominators` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                       |

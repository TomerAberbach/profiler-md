# Sampling profile

Collected 1,356 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Compiler         | 45.6% |     618 |
| Native           | 38.2% |     518 |
| Ours             | 10.4% |     141 |
| Standard library |  4.6% |      62 |
| JIT              |  1.2% |      16 |
| Unknown          |  0.1% |       1 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|    % | Samples | Function                                                                                                                                                 | Location    |
| ---: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 3.7% |      50 | `inflate_fast`                                                                                                                                           | `<unknown>` |
| 1.8% |      24 | `__psynch_mutexwait`                                                                                                                                     | `<unknown>` |
| 1.6% |      22 | `IndexSetIterator::advance_and_next`                                                                                                                     | `<unknown>` |
| 1.4% |      19 | `SymbolTable::do_lookup`                                                                                                                                 | `<unknown>` |
| 1.3% |      18 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `<unknown>` |
| 1.3% |      18 | `tlv_get_addr`                                                                                                                                           | `<unknown>` |
| 1.3% |      17 | `PhaseChaitin::Split`                                                                                                                                    | `<unknown>` |
| 1.0% |      14 | `pthread_jit_write_protect_np`                                                                                                                           | `<unknown>` |
| 1.0% |      13 | `ciObjectFactory::get_metadata`                                                                                                                          | `<unknown>` |
| 1.0% |      13 | `InstanceKlass::find_method_index`                                                                                                                       | `<unknown>` |
| 0.9% |      12 | `_platform_memset`                                                                                                                                       | `<unknown>` |
| 0.8% |      11 | `G1ParScanThreadState::do_copy_to_survivor_space`                                                                                                        | `<unknown>` |
| 0.7% |      10 | `__psynch_cvwait`                                                                                                                                        | `<unknown>` |
| 0.7% |      10 | `PhaseChaitin::build_ifg_physical`                                                                                                                       | `<unknown>` |
| 0.7% |      10 | `LinearScanWalker::free_collect_inactive_fixed`                                                                                                          | `<unknown>` |
| 0.7% |       9 | `Matcher::xform`                                                                                                                                         | `<unknown>` |
| 0.7% |       9 | `PhaseLive::add_liveout`                                                                                                                                 | `<unknown>` |
| 0.6% |       8 | `PhaseIdealLoop::build_loop_late`                                                                                                                        | `<unknown>` |
| 0.6% |       8 | `IntervalWalker::walk_to`                                                                                                                                | `<unknown>` |
| 0.6% |       8 | `bsearch`                                                                                                                                                | `<unknown>` |

#### Categories

##### Compiler

|    % | Samples | Function                                        | Location    |
| ---: | ------: | ----------------------------------------------- | ----------- |
| 1.6% |      22 | `IndexSetIterator::advance_and_next`            | `<unknown>` |
| 1.3% |      17 | `PhaseChaitin::Split`                           | `<unknown>` |
| 1.0% |      13 | `ciObjectFactory::get_metadata`                 | `<unknown>` |
| 0.7% |      10 | `PhaseChaitin::build_ifg_physical`              | `<unknown>` |
| 0.7% |      10 | `LinearScanWalker::free_collect_inactive_fixed` | `<unknown>` |
| 0.7% |       9 | `Matcher::xform`                                | `<unknown>` |
| 0.7% |       9 | `PhaseLive::add_liveout`                        | `<unknown>` |
| 0.6% |       8 | `PhaseIdealLoop::build_loop_late`               | `<unknown>` |
| 0.6% |       8 | `IntervalWalker::walk_to`                       | `<unknown>` |
| 0.6% |       8 | `LinearScanWalker::alloc_free_reg`              | `<unknown>` |
| 0.6% |       8 | `PhaseChaitin::elide_copy`                      | `<unknown>` |
| 0.5% |       7 | `Node::dominates`                               | `<unknown>` |
| 0.5% |       7 | `PhaseIdealLoop::build_loop_early`              | `<unknown>` |
| 0.4% |       6 | `PhaseIdealLoop::build_loop_late_post_work`     | `<unknown>` |
| 0.4% |       6 | `PhaseChaitin::gather_lrg_masks`                | `<unknown>` |
| 0.4% |       6 | `LinearScanWalker::split_before_usage`          | `<unknown>` |
| 0.4% |       6 | `PhaseOutput::BuildOopMaps`                     | `<unknown>` |
| 0.4% |       6 | `ValueStack::values_do`                         | `<unknown>` |
| 0.4% |       6 | `PhaseLive::compute`                            | `<unknown>` |
| 0.4% |       5 | `PhaseIterGVN::transform_old`                   | `<unknown>` |

##### Native

|    % | Samples | Function                                                                                                                                                 | Location    |
| ---: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 3.7% |      50 | `inflate_fast`                                                                                                                                           | `<unknown>` |
| 1.8% |      24 | `__psynch_mutexwait`                                                                                                                                     | `<unknown>` |
| 1.4% |      19 | `SymbolTable::do_lookup`                                                                                                                                 | `<unknown>` |
| 1.3% |      18 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `<unknown>` |
| 1.3% |      18 | `tlv_get_addr`                                                                                                                                           | `<unknown>` |
| 1.0% |      14 | `pthread_jit_write_protect_np`                                                                                                                           | `<unknown>` |
| 1.0% |      13 | `InstanceKlass::find_method_index`                                                                                                                       | `<unknown>` |
| 0.9% |      12 | `_platform_memset`                                                                                                                                       | `<unknown>` |
| 0.8% |      11 | `G1ParScanThreadState::do_copy_to_survivor_space`                                                                                                        | `<unknown>` |
| 0.7% |      10 | `__psynch_cvwait`                                                                                                                                        | `<unknown>` |
| 0.6% |       8 | `bsearch`                                                                                                                                                | `<unknown>` |
| 0.6% |       8 | `inflate`                                                                                                                                                | `<unknown>` |
| 0.5% |       7 | `_platform_memmove`                                                                                                                                      | `<unknown>` |
| 0.5% |       7 | `__psynch_mutexdrop`                                                                                                                                     | `<unknown>` |
| 0.4% |       6 | `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>`                                                           | `<unknown>` |
| 0.4% |       6 | `fwd_copy_again`                                                                                                                                         | `<unknown>` |
| 0.4% |       5 | `SymbolTable::new_symbol`                                                                                                                                | `<unknown>` |
| 0.4% |       5 | `UTF8::is_legal_utf8`                                                                                                                                    | `<unknown>` |
| 0.4% |       5 | `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>`                             | `<unknown>` |
| 0.3% |       4 | `_platform_memcmp`                                                                                                                                       | `<unknown>` |

##### Ours

|    % | Samples | Function                                                     | Location                                                                                                    |
| ---: | ------: | ------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------- |
| 0.1% |       2 | `balanceWhiteSpaces`                                         | `com.intellij.lang.impl.PsiBuilderImpl`                                                                     |
| 0.1% |       2 | `readUTF8`                                                   | `org.jetbrains.org.objectweb.asm.ClassReader`                                                               |
| 0.1% |       2 | `readSourceFileWithMapping`                                  | `org.jetbrains.kotlin.KtSourceFileLinesMappingKt`                                                           |
| 0.1% |       1 | `check`                                                      | `org.jetbrains.kotlin.fir.analysis.jvm.checkers.expression.FirJvmModuleAccessibilityQualifiedAccessChecker` |
| 0.1% |       1 | `visitPropertyAccessExpression`                              | `org.jetbrains.kotlin.fir.analysis.checkers.expression.ExpressionCheckersDiagnosticComponent`               |
| 0.1% |       1 | `accept`                                                     | `org.jetbrains.kotlin.fir.expressions.FirPropertyAccessExpression`                                          |
| 0.1% |       1 | `acceptChildren`                                             | `org.jetbrains.kotlin.fir.declarations.impl.FirNamedFunctionImpl`                                           |
| 0.1% |       1 | `completeCall`                                               | `org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter`                                               |
| 0.1% |       1 | `runTasks`                                                   | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager`                                          |
| 0.1% |       1 | `transformFunctionCallInternal$org_jetbrains_kotlin_resolve` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`               |
| 0.1% |       1 | `visitElement`                                               | `org.jetbrains.kotlin.fir.analysis.checkers.type.TypeCheckersDiagnosticComponent`                           |
| 0.1% |       1 | `safeSubstitute`                                             | `org.jetbrains.kotlin.resolve.calls.inference.model.NewConstraintSystemImpl`                                |
| 0.1% |       1 | `getBRIDGE_SPECIAL`                                          | `org.jetbrains.kotlin.ir.declarations.IrDeclarationOrigin$Companion`                                        |
| 0.1% |       1 | `canComputeKnownClassNamesInPackage`                         | `org.jetbrains.kotlin.resolve.jvm.KotlinJavaPsiFacade`                                                      |
| 0.1% |       1 | `<init>`                                                     | `org.jetbrains.kotlin.fir.expressions.FirExpression`                                                        |
| 0.1% |       1 | `buildResolvedQualifierForClass`                             | `org.jetbrains.kotlin.fir.resolve.ResolveUtilsKt`                                                           |
| 0.1% |       1 | `enterCallArguments`                                         | `org.jetbrains.kotlin.fir.resolve.dfa.cfg.ControlFlowGraphBuilder`                                          |
| 0.1% |       1 | `processFunctionsByName`                                     | `org.jetbrains.kotlin.fir.scopes.impl.FirAbstractSimpleImportingScope`                                      |
| 0.1% |       1 | `visitCall`                                                  | `org.jetbrains.kotlin.backend.jvm.lower.JvmOptimizationLowering$Transformer`                                |
| 0.1% |       1 | `accept`                                                     | `org.jetbrains.kotlin.ir.expressions.IrBlockBody`                                                           |

##### Standard library

|    % | Samples | Function                | Location                                           |
| ---: | ------: | ----------------------- | -------------------------------------------------- |
| 0.4% |       5 | `sanitizeStackTrace`    | `kotlin.jvm.internal.Intrinsics`                   |
| 0.3% |       4 | `checkNotNullParameter` | `kotlin.jvm.internal.Intrinsics`                   |
| 0.1% |       2 | `iterator`              | `java.util.ArrayList`                              |
| 0.1% |       2 | `getNode`               | `java.util.HashMap`                                |
| 0.1% |       2 | `allocateInstance`      | `jdk.internal.misc.Unsafe`                         |
| 0.1% |       1 | `indexOf`               | `java.util.ArrayList`                              |
| 0.1% |       1 | `hasNext`               | `java.util.LinkedHashMap$LinkedHashIterator`       |
| 0.1% |       1 | `resolve`               | `java.lang.invoke.MemberName$Factory`              |
| 0.1% |       1 | `<init>`                | `jdk.internal.org.objectweb.asm.SymbolTable$Entry` |
| 0.1% |       1 | `<init>`                | `java.util.LinkedHashMap`                          |
| 0.1% |       1 | `hashCode`              | `java.lang.Object`                                 |
| 0.1% |       1 | `hash`                  | `java.util.HashMap`                                |
| 0.1% |       1 | `toByteArray`           | `jdk.internal.org.objectweb.asm.ClassWriter`       |
| 0.1% |       1 | `makePairwiseConvert`   | `java.lang.invoke.MethodHandleImpl`                |
| 0.1% |       1 | `substring`             | `java.lang.String`                                 |
| 0.1% |       1 | `getLocationIndex`      | `jdk.internal.jimage.BasicImageReader`             |
| 0.1% |       1 | `checkFromIndexSize`    | `jdk.internal.util.Preconditions`                  |
| 0.1% |       1 | `iterator`              | `kotlin.collections.builders.ListBuilder`          |
| 0.1% |       1 | `subList`               | `java.util.ArrayList`                              |
| 0.1% |       1 | `getFullName`           | `jdk.internal.jimage.ImageLocation`                |

##### JIT

|    % | Samples | Function                   | Location    |
| ---: | ------: | -------------------------- | ----------- |
| 0.4% |       5 | `I2C/C2I adapters(0xb)`    | `<unknown>` |
| 0.2% |       3 | `I2C/C2I adapters(0xbb)`   | `<unknown>` |
| 0.1% |       2 | `zero_blocks`              | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xbbb)`  | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xbbab)` | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xaa)`   | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xbbbb)` | `<unknown>` |
| 0.1% |       1 | `itable stub`              | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0x)`     | `<unknown>` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `inflate_fast` (`<unknown>`)

|      % | Samples | Caller                                          | Location    |
| -----: | ------: | ----------------------------------------------- | ----------- |
| 100.0% |      50 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `<unknown>` |

##### `__psynch_mutexwait` (`<unknown>`)

|      % | Samples | Caller                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |      24 | `_pthread_mutex_firstfit_lock_slow` | `<unknown>` |

##### `IndexSetIterator::advance_and_next` (`<unknown>`)

|     % | Samples | Caller                                                             | Location    |
| ----: | ------: | ------------------------------------------------------------------ | ----------- |
| 27.3% |       6 | `PhaseChaitin::build_ifg_physical`                                 | `<unknown>` |
|  9.1% |       2 | `PhaseIFG::effective_degree`                                       | `<unknown>` |
|  9.1% |       2 | `PhaseChaitin::remove_bound_register_from_interfering_live_ranges` | `<unknown>` |
|  9.1% |       2 | `PhaseIFG::remove_node`                                            | `<unknown>` |
|  9.1% |       2 | `PhaseLive::add_liveout`                                           | `<unknown>` |

##### `SymbolTable::do_lookup` (`<unknown>`)

|     % | Samples | Caller                                         | Location    |
| ----: | ------: | ---------------------------------------------- | ----------- |
| 84.2% |      16 | `SymbolTable::lookup_only`                     | `<unknown>` |
| 10.5% |       2 | `SymbolTable::new_symbol`                      | `<unknown>` |
|  5.3% |       1 | `ClassFileParser::parse_constant_pool_entries` | `<unknown>` |

##### `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` (`<unknown>`)

|     % | Samples | Caller                                             | Location    |
| ----: | ------: | -------------------------------------------------- | ----------- |
| 77.8% |      14 | `DebugInformationRecorder::describe_scope`         | `<unknown>` |
| 22.2% |       4 | `DebugInformationRecorder::serialize_scope_values` | `<unknown>` |

##### `tlv_get_addr` (`<unknown>`)

|     % | Samples | Caller                           | Location    |
| ----: | ------: | -------------------------------- | ----------- |
| 11.1% |       2 | `ciEnv::get_klass_by_index_impl` | `<unknown>` |
| 11.1% |       2 | `GraphBuilder::invoke`           | `<unknown>` |
|  5.6% |       1 | `Matcher::xform`                 | `<unknown>` |
|  5.6% |       1 | `LinearScan::build_intervals`    | `<unknown>` |
|  5.6% |       1 | `DataLayout::data_in`            | `<unknown>` |

##### `PhaseChaitin::Split` (`<unknown>`)

|     % | Samples | Caller                            | Location    |
| ----: | ------: | --------------------------------- | ----------- |
| 94.1% |      16 | `PhaseChaitin::Register_Allocate` | `<unknown>` |
|  5.9% |       1 | `Compile::Code_Gen`               | `<unknown>` |

##### `pthread_jit_write_protect_np` (`<unknown>`)

|     % | Samples | Caller                              | Location    |
| ----: | ------: | ----------------------------------- | ----------- |
| 14.3% |       2 | `JVM_IHashCode`                     | `<unknown>` |
| 14.3% |       2 | `jni_GetPrimitiveArrayCritical`     | `<unknown>` |
| 14.3% |       2 | `jni_ReleasePrimitiveArrayCritical` | `<unknown>` |
| 14.3% |       2 | `Unsafe_AllocateInstance`           | `<unknown>` |
|  7.1% |       1 | `JVM_GetCallerClass`                | `<unknown>` |

##### `ciObjectFactory::get_metadata` (`<unknown>`)

|     % | Samples | Caller                                         | Location    |
| ----: | ------: | ---------------------------------------------- | ----------- |
| 30.8% |       4 | `ciBytecodeStream::get_method`                 | `<unknown>` |
| 23.1% |       3 | `ciEnv::get_klass_by_index_impl`               | `<unknown>` |
| 15.4% |       2 | `ciObjectFactory::create_new_metadata`         | `<unknown>` |
|  7.7% |       1 | `ciMethod::method_data`                        | `<unknown>` |
|  7.7% |       1 | `ciBytecodeStream::get_declared_method_holder` | `<unknown>` |

##### `InstanceKlass::find_method_index` (`<unknown>`)

|     % | Samples | Caller                                   | Location    |
| ----: | ------: | ---------------------------------------- | ----------- |
| 61.5% |       8 | `InstanceKlass::uncached_lookup_method`  | `<unknown>` |
| 15.4% |       2 | `InstanceKlass::find_method`             | `<unknown>` |
| 15.4% |       2 | `InstanceKlass::find_local_method`       | `<unknown>` |
|  7.7% |       1 | `LinkResolver::resolve_interface_method` | `<unknown>` |

##### `_platform_memset` (`<unknown>`)

|     % | Samples | Caller                              | Location    |
| ----: | ------: | ----------------------------------- | ----------- |
| 16.7% |       2 | `Matcher::Label_Root`               | `<unknown>` |
|  8.3% |       1 | `ConstantPool::allocate`            | `<unknown>` |
|  8.3% |       1 | `Annotations::allocate`             | `<unknown>` |
|  8.3% |       1 | `CheckCastPPNode::CheckCastPPNode`  | `<unknown>` |
|  8.3% |       1 | `Compile::remove_speculative_types` | `<unknown>` |

##### `G1ParScanThreadState::do_copy_to_survivor_space` (`<unknown>`)

|     % | Samples | Caller                                                              | Location    |
| ----: | ------: | ------------------------------------------------------------------- | ----------- |
| 81.8% |       9 | `G1ParScanThreadState::trim_queue_to_threshold`                     | `<unknown>` |
|  9.1% |       1 | `void G1ParCopyClosure<(G1Barrier)1, false>::do_oop_work<oopDesc*>` | `<unknown>` |
|  9.1% |       1 | `G1ParScanThreadState::steal_and_trim_queue`                        | `<unknown>` |

##### `__psynch_cvwait` (`<unknown>`)

|      % | Samples | Caller                  | Location    |
| -----: | ------: | ----------------------- | ----------- |
| 100.0% |      10 | `PlatformMonitor::wait` | `<unknown>` |

##### `PhaseChaitin::build_ifg_physical` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |      10 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `LinearScanWalker::free_collect_inactive_fixed` (`<unknown>`)

|      % | Samples | Caller                             | Location    |
| -----: | ------: | ---------------------------------- | ----------- |
| 100.0% |      10 | `LinearScanWalker::alloc_free_reg` | `<unknown>` |

##### `Matcher::xform` (`<unknown>`)

|      % | Samples | Caller           | Location    |
| -----: | ------: | ---------------- | ----------- |
| 100.0% |       9 | `Matcher::match` | `<unknown>` |

##### `PhaseLive::add_liveout` (`<unknown>`)

|     % | Samples | Caller                            | Location    |
| ----: | ------: | --------------------------------- | ----------- |
| 88.9% |       8 | `PhaseLive::compute`              | `<unknown>` |
| 11.1% |       1 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `PhaseIdealLoop::build_loop_late` (`<unknown>`)

|      % | Samples | Caller                               | Location    |
| -----: | ------: | ------------------------------------ | ----------- |
| 100.0% |       8 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |

##### `IntervalWalker::walk_to` (`<unknown>`)

|     % | Samples | Caller                           | Location    |
| ----: | ------: | -------------------------------- | ----------- |
| 87.5% |       7 | `IntervalWalker::walk_to`        | `<unknown>` |
| 12.5% |       1 | `LinearScan::allocate_registers` | `<unknown>` |

##### `bsearch` (`<unknown>`)

|     % | Samples | Caller                                           | Location    |
| ----: | ------: | ------------------------------------------------ | ----------- |
| 87.5% |       7 | `encoding_for_logical_immediate`                 | `<unknown>` |
| 12.5% |       1 | `Assembler::operand_valid_for_logical_immediate` | `<unknown>` |

##### `LinearScanWalker::alloc_free_reg` (`<unknown>`)

|      % | Samples | Caller                               | Location    |
| -----: | ------: | ------------------------------------ | ----------- |
| 100.0% |       8 | `LinearScanWalker::activate_current` | `<unknown>` |

##### `PhaseChaitin::elide_copy` (`<unknown>`)

|      % | Samples | Caller                                     | Location    |
| -----: | ------: | ------------------------------------------ | ----------- |
| 100.0% |       8 | `PhaseChaitin::post_allocate_copy_removal` | `<unknown>` |

##### `inflate` (`<unknown>`)

|      % | Samples | Caller                                          | Location    |
| -----: | ------: | ----------------------------------------------- | ----------- |
| 100.0% |       8 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `<unknown>` |

##### `Node::dominates` (`<unknown>`)

|      % | Samples | Caller                           | Location    |
| -----: | ------: | -------------------------------- | ----------- |
| 100.0% |       7 | `MemNode::all_controls_dominate` | `<unknown>` |

##### `PhaseIdealLoop::build_loop_early` (`<unknown>`)

|      % | Samples | Caller                               | Location    |
| -----: | ------: | ------------------------------------ | ----------- |
| 100.0% |       7 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |

##### `_platform_memmove` (`<unknown>`)

|     % | Samples | Caller                                                                                                                                                                                                                                                   | Location    |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 14.3% |       1 | `nmethod::nmethod`                                                                                                                                                                                                                                       | `<unknown>` |
| 14.3% |       1 | `Node::out_grow`                                                                                                                                                                                                                                         | `<unknown>` |
| 14.3% |       1 | `nmethod::new_nmethod`                                                                                                                                                                                                                                   | `<unknown>` |
| 14.3% |       1 | `Node_Array::grow`                                                                                                                                                                                                                                       | `<unknown>` |
| 14.3% |       1 | `bool ConcurrentHashTable<SymbolTableConfig, (MEMFLAGS)11>::internal_insert_get<SymbolTableLookup, bool ConcurrentHashTable<SymbolTableConfig, (MEMFLAGS)11>::insert<SymbolTableLookup>(Thread*, SymbolTableLookup&, Symbol const&, bool*, bool*)::NOP>` | `<unknown>` |

##### `__psynch_mutexdrop` (`<unknown>`)

|      % | Samples | Caller                                | Location    |
| -----: | ------: | ------------------------------------- | ----------- |
| 100.0% |       7 | `_pthread_mutex_firstfit_unlock_slow` | `<unknown>` |

##### `PhaseIdealLoop::build_loop_late_post_work` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |       6 | `PhaseIdealLoop::build_loop_late` | `<unknown>` |

##### `PhaseChaitin::gather_lrg_masks` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |       6 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `LinearScanWalker::split_before_usage` (`<unknown>`)

|     % | Samples | Caller                                       | Location    |
| ----: | ------: | -------------------------------------------- | ----------- |
| 66.7% |       4 | `LinearScanWalker::split_and_spill_interval` | `<unknown>` |
| 33.3% |       2 | `LinearScanWalker::alloc_free_reg`           | `<unknown>` |

##### `PhaseOutput::BuildOopMaps` (`<unknown>`)

|      % | Samples | Caller                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |       6 | `PhaseOutput::Output` | `<unknown>` |

##### `ValueStack::values_do` (`<unknown>`)

|     % | Samples | Caller                           | Location    |
| ----: | ------: | -------------------------------- | ----------- |
| 50.0% |       3 | `SubstitutionResolver::block_do` | `<unknown>` |
| 50.0% |       3 | `BlockBegin::state_values_do`    | `<unknown>` |

##### `PhaseLive::compute` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |       6 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` (`<unknown>`)

|     % | Samples | Caller                                         | Location    |
| ----: | ------: | ---------------------------------------------- | ----------- |
| 50.0% |       3 | `void G1CMTask::process_grey_task_entry<true>` | `<unknown>` |
| 33.3% |       2 | `G1CMTask::drain_local_queue`                  | `<unknown>` |
| 16.7% |       1 | `G1CMBitMap::iterate`                          | `<unknown>` |

##### `fwd_copy_again` (`<unknown>`)

|     % | Samples | Caller                                          | Location    |
| ----: | ------: | ----------------------------------------------- | ----------- |
| 50.0% |       3 | `G1ParScanThreadState::trim_queue_to_threshold` | `<unknown>` |
| 33.3% |       2 | `CodeBuffer::copy_code_to`                      | `<unknown>` |
| 16.7% |       1 | `ciMethod::ensure_method_data`                  | `<unknown>` |

##### `PhaseIterGVN::transform_old` (`<unknown>`)

|     % | Samples | Caller                                 | Location    |
| ----: | ------: | -------------------------------------- | ----------- |
| 80.0% |       4 | `PhaseIterGVN::optimize`               | `<unknown>` |
| 20.0% |       1 | `PhaseMacroExpand::expand_macro_nodes` | `<unknown>` |

##### `SymbolTable::new_symbol` (`<unknown>`)

|     % | Samples | Caller                                  | Location    |
| ----: | ------: | --------------------------------------- | ----------- |
| 80.0% |       4 | `SignatureStream::find_symbol`          | `<unknown>` |
| 20.0% |       1 | `MethodFamily::generate_method_message` | `<unknown>` |

##### `UTF8::is_legal_utf8` (`<unknown>`)

|      % | Samples | Caller                                         | Location    |
| -----: | ------: | ---------------------------------------------- | ----------- |
| 100.0% |       5 | `ClassFileParser::parse_constant_pool_entries` | `<unknown>` |

##### `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>` (`<unknown>`)

|      % | Samples | Caller                                            | Location    |
| -----: | ------: | ------------------------------------------------- | ----------- |
| 100.0% |       5 | `G1ParScanThreadState::do_copy_to_survivor_space` | `<unknown>` |

##### `sanitizeStackTrace` (`kotlin.jvm.internal.Intrinsics`)

|      % | Samples | Caller                    | Location                         |
| -----: | ------: | ------------------------- | -------------------------------- |
| 100.0% |       5 | `throwParameterIsNullNPE` | `kotlin.jvm.internal.Intrinsics` |

##### `I2C/C2I adapters(0xb)` (`<unknown>`)

|     % | Samples | Caller                     | Location                                                                      |
| ----: | ------: | -------------------------- | ----------------------------------------------------------------------------- |
| 20.0% |       1 | `substring`                | `java.lang.String`                                                            |
| 20.0% |       1 | `buildBaseSystem`          | `org.jetbrains.kotlin.fir.resolve.calls.candidate.CandidateFactory$Companion` |
| 20.0% |       1 | `getContainingClassSymbol` | `org.jetbrains.kotlin.fir.resolve.ContainingClassUtilsKt`                     |
| 20.0% |       1 | `<init>`                   | `org.jetbrains.kotlin.fir.types.ConeCapturedType`                             |
| 20.0% |       1 | `newInvokeSpecial`         | `java.lang.invoke.LambdaForm$DMH.0x000000e00168c800`                          |

##### `_platform_memcmp` (`<unknown>`)

|     % | Samples | Caller                                     | Location    |
| ----: | ------: | ------------------------------------------ | ----------- |
| 50.0% |       2 | `SymbolTable::lookup_only`                 | `<unknown>` |
| 25.0% |       1 | `SymbolTable::new_symbols`                 | `<unknown>` |
| 25.0% |       1 | `DebugInformationRecorder::describe_scope` | `<unknown>` |

##### `checkNotNullParameter` (`kotlin.jvm.internal.Intrinsics`)

|     % | Samples | Caller               | Location                                                       |
| ----: | ------: | -------------------- | -------------------------------------------------------------- |
| 25.0% |       1 | `<init>`             | `org.jetbrains.kotlin.fir.deserialization.FirTypeDeserializer` |
| 25.0% |       1 | `getAbbreviatedType` | `org.jetbrains.kotlin.fir.types.AbbreviatedTypeAttributeKt`    |
| 25.0% |       1 | `getResolved`        | `org.jetbrains.kotlin.fir.references.FirReferenceUtilsKt`      |
| 25.0% |       1 | `allOverridden`      | `org.jetbrains.kotlin.ir.util.IrUtilsKt`                       |

##### `I2C/C2I adapters(0xbb)` (`<unknown>`)

|     % | Samples | Caller                                                | Location                                                                                      |
| ----: | ------: | ----------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| 33.3% |       1 | `transformBlock`                                      | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer` |
| 33.3% |       1 | `isFinalClassOrEnumEntryOrAnnotationClassConstructor` | `org.jetbrains.kotlin.ir.types.IrTypeSystemContext`                                           |
| 33.3% |       1 | `processClassifiersByNameWithSubstitution`            | `org.jetbrains.kotlin.fir.scopes.impl.FirPackageMemberScope`                                  |

##### `balanceWhiteSpaces` (`com.intellij.lang.impl.PsiBuilderImpl`)

|      % | Samples | Caller             | Location                                |
| -----: | ------: | ------------------ | --------------------------------------- |
| 100.0% |       2 | `prepareLightTree` | `com.intellij.lang.impl.PsiBuilderImpl` |

##### `readUTF8` (`org.jetbrains.org.objectweb.asm.ClassReader`)

|     % | Samples | Caller                     | Location                                      |
| ----: | ------: | -------------------------- | --------------------------------------------- |
| 50.0% |       1 | `readParameterAnnotations` | `org.jetbrains.org.objectweb.asm.ClassReader` |
| 50.0% |       1 | `readStringish`            | `org.jetbrains.org.objectweb.asm.ClassReader` |

##### `readSourceFileWithMapping` (`org.jetbrains.kotlin.KtSourceFileLinesMappingKt`)

|      % | Samples | Caller                 | Location                                       |
| -----: | ------: | ---------------------- | ---------------------------------------------- |
| 100.0% |       2 | `buildFirViaLightTree` | `org.jetbrains.kotlin.fir.pipeline.FirUtilsKt` |

##### `iterator` (`java.util.ArrayList`)

|     % | Samples | Caller   | Location                                                                                                      |
| ----: | ------: | -------- | ------------------------------------------------------------------------------------------------------------- |
| 50.0% |       1 | `putAll` | `kotlin.collections.MapsKt__MapsKt`                                                                           |
| 50.0% |       1 | `check`  | `org.jetbrains.kotlin.fir.analysis.checkers.expression.FirUpperBoundViolatedQualifiedAccessExpressionChecker` |

##### `getNode` (`java.util.HashMap`)

|      % | Samples | Caller | Location            |
| -----: | ------: | ------ | ------------------- |
| 100.0% |       2 | `get`  | `java.util.HashMap` |

##### `allocateInstance` (`jdk.internal.misc.Unsafe`)

|      % | Samples | Caller             | Location                              |
| -----: | ------: | ------------------ | ------------------------------------- |
| 100.0% |       2 | `allocateInstance` | `java.lang.invoke.DirectMethodHandle` |

##### `zero_blocks` (`<unknown>`)

|     % | Samples | Caller        | Location                                                        |
| ----: | ------: | ------------- | --------------------------------------------------------------- |
| 50.0% |       1 | `newInstance` | `java.lang.reflect.Array`                                       |
| 50.0% |       1 | `<init>`      | `org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer` |

##### `check` (`org.jetbrains.kotlin.fir.analysis.jvm.checkers.expression.FirJvmModuleAccessibilityQualifiedAccessChecker`)

|      % | Samples | Caller                          | Location                                                                                      |
| -----: | ------: | ------------------------------- | --------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `visitPropertyAccessExpression` | `org.jetbrains.kotlin.fir.analysis.checkers.expression.ExpressionCheckersDiagnosticComponent` |

##### `visitPropertyAccessExpression` (`org.jetbrains.kotlin.fir.analysis.checkers.expression.ExpressionCheckersDiagnosticComponent`)

|      % | Samples | Caller                          | Location                                                                                      |
| -----: | ------: | ------------------------------- | --------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `visitPropertyAccessExpression` | `org.jetbrains.kotlin.fir.analysis.checkers.expression.ExpressionCheckersDiagnosticComponent` |

##### `accept` (`org.jetbrains.kotlin.fir.expressions.FirPropertyAccessExpression`)

|      % | Samples | Caller         | Location                                                                                |
| -----: | ------: | -------------- | --------------------------------------------------------------------------------------- |
| 100.0% |       1 | `checkElement` | `org.jetbrains.kotlin.fir.analysis.collectors.CheckerRunningDiagnosticCollectorVisitor` |

##### `acceptChildren` (`org.jetbrains.kotlin.fir.declarations.impl.FirNamedFunctionImpl`)

|      % | Samples | Caller    | Location                                                                                         |
| -----: | ------: | --------- | ------------------------------------------------------------------------------------------------ |
| 100.0% |       1 | `analyze` | `org.jetbrains.kotlin.fir.analysis.collectors.components.ControlFlowAnalysisDiagnosticComponent` |

##### `completeCall` (`org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter`)

|      % | Samples | Caller                 | Location                                                      |
| -----: | ------: | ---------------------- | ------------------------------------------------------------- |
| 100.0% |       1 | `completeCall$default` | `org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter` |

##### `runTasks` (`org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager`)

|      % | Samples | Caller        | Location                                                        |
| -----: | ------: | ------------- | --------------------------------------------------------------- |
| 100.0% |       1 | `runResolver` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver` |

##### `transformFunctionCallInternal$org_jetbrains_kotlin_resolve` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`)

|      % | Samples | Caller                  | Location                                                                                      |
| -----: | ------: | ----------------------- | --------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `transformFunctionCall` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer` |

##### `visitElement` (`org.jetbrains.kotlin.fir.analysis.checkers.type.TypeCheckersDiagnosticComponent`)

|      % | Samples | Caller                        | Location                                       |
| -----: | ------: | ----------------------------- | ---------------------------------------------- |
| 100.0% |       1 | `visitThisReceiverExpression` | `org.jetbrains.kotlin.fir.visitors.FirVisitor` |

##### `safeSubstitute` (`org.jetbrains.kotlin.resolve.calls.inference.model.NewConstraintSystemImpl`)

|      % | Samples | Caller           | Location                                                                                                           |
| -----: | ------: | ---------------- | ------------------------------------------------------------------------------------------------------------------ |
| 100.0% |       1 | `safeSubstitute` | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector$TypeCheckerStateForConstraintInjector` |

##### `getBRIDGE_SPECIAL` (`org.jetbrains.kotlin.ir.declarations.IrDeclarationOrigin$Companion`)

|      % | Samples | Caller     | Location                                           |
| -----: | ------: | ---------- | -------------------------------------------------- |
| 100.0% |       1 | `isBridge` | `org.jetbrains.kotlin.backend.jvm.ir.JvmIrUtilsKt` |

##### `canComputeKnownClassNamesInPackage` (`org.jetbrains.kotlin.resolve.jvm.KotlinJavaPsiFacade`)

|      % | Samples | Caller                               | Location                                             |
| -----: | ------: | ------------------------------------ | ---------------------------------------------------- |
| 100.0% |       1 | `canComputeKnownClassNamesInPackage` | `org.jetbrains.kotlin.load.java.JavaClassFinderImpl` |

##### `<init>` (`org.jetbrains.kotlin.fir.expressions.FirExpression`)

|      % | Samples | Caller   | Location                                                    |
| -----: | ------: | -------- | ----------------------------------------------------------- |
| 100.0% |       1 | `<init>` | `org.jetbrains.kotlin.fir.expressions.FirResolvedQualifier` |

##### `buildResolvedQualifierForClass` (`org.jetbrains.kotlin.fir.resolve.ResolveUtilsKt`)

|      % | Samples | Caller                         | Location                                                     |
| -----: | ------: | ------------------------------ | ------------------------------------------------------------ |
| 100.0% |       1 | `buildResolvedQualifierResult` | `org.jetbrains.kotlin.fir.resolve.QualifiedNameResolutionKt` |

##### `enterCallArguments` (`org.jetbrains.kotlin.fir.resolve.dfa.cfg.ControlFlowGraphBuilder`)

|      % | Samples | Caller               | Location                                                   |
| -----: | ------: | -------------------- | ---------------------------------------------------------- |
| 100.0% |       1 | `enterCallArguments` | `org.jetbrains.kotlin.fir.resolve.dfa.FirDataFlowAnalyzer` |

##### `processFunctionsByName` (`org.jetbrains.kotlin.fir.scopes.impl.FirAbstractSimpleImportingScope`)

|      % | Samples | Caller                                  | Location                                                         |
| -----: | ------: | --------------------------------------- | ---------------------------------------------------------------- |
| 100.0% |       1 | `processFunctionsAndConstructorsByName` | `org.jetbrains.kotlin.fir.resolve.calls.ConstructorProcessingKt` |

##### `visitCall` (`org.jetbrains.kotlin.backend.jvm.lower.JvmOptimizationLowering$Transformer`)

|      % | Samples | Caller      | Location                                                                     |
| -----: | ------: | ----------- | ---------------------------------------------------------------------------- |
| 100.0% |       1 | `visitCall` | `org.jetbrains.kotlin.backend.jvm.lower.JvmOptimizationLowering$Transformer` |

##### `accept` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`)

|      % | Samples | Caller           | Location                                          |
| -----: | ------: | ---------------- | ------------------------------------------------- |
| 100.0% |       1 | `acceptChildren` | `org.jetbrains.kotlin.ir.declarations.IrFunction` |

##### `indexOf` (`java.util.ArrayList`)

|      % | Samples | Caller     | Location              |
| -----: | ------: | ---------- | --------------------- |
| 100.0% |       1 | `contains` | `java.util.ArrayList` |

##### `hasNext` (`java.util.LinkedHashMap$LinkedHashIterator`)

|      % | Samples | Caller                   | Location                                                                                  |
| -----: | ------: | ------------------------ | ----------------------------------------------------------------------------------------- |
| 100.0% |       1 | `createArgumentsMapping` | `org.jetbrains.kotlin.fir.resolve.transformers.FirCallCompletionResultsWriterTransformer` |

##### `resolve` (`java.lang.invoke.MemberName$Factory`)

|      % | Samples | Caller          | Location                              |
| -----: | ------: | --------------- | ------------------------------------- |
| 100.0% |       1 | `resolveOrFail` | `java.lang.invoke.MemberName$Factory` |

##### `<init>` (`jdk.internal.org.objectweb.asm.SymbolTable$Entry`)

|      % | Samples | Caller                       | Location                                     |
| -----: | ------: | ---------------------------- | -------------------------------------------- |
| 100.0% |       1 | `addConstantMemberReference` | `jdk.internal.org.objectweb.asm.SymbolTable` |

##### `<init>` (`java.util.LinkedHashMap`)

|      % | Samples | Caller             | Location                                                   |
| -----: | ------: | ------------------ | ---------------------------------------------------------- |
| 100.0% |       1 | `orderedArguments` | `org.jetbrains.kotlin.fir.resolve.dfa.FirDataFlowAnalyzer` |

##### `hashCode` (`java.lang.Object`)

|      % | Samples | Caller | Location                |
| -----: | ------: | ------ | ----------------------- |
| 100.0% |       1 | `hash` | `java.util.WeakHashMap` |

##### `hash` (`java.util.HashMap`)

|      % | Samples | Caller | Location            |
| -----: | ------: | ------ | ------------------- |
| 100.0% |       1 | `put`  | `java.util.HashMap` |

##### `toByteArray` (`jdk.internal.org.objectweb.asm.ClassWriter`)

|      % | Samples | Caller        | Location                                    |
| -----: | ------: | ------------- | ------------------------------------------- |
| 100.0% |       1 | `toByteArray` | `java.lang.invoke.InvokerBytecodeGenerator` |

##### `makePairwiseConvert` (`java.lang.invoke.MethodHandleImpl`)

|      % | Samples | Caller                | Location                            |
| -----: | ------: | --------------------- | ----------------------------------- |
| 100.0% |       1 | `makePairwiseConvert` | `java.lang.invoke.MethodHandleImpl` |

##### `substring` (`java.lang.String`)

|      % | Samples | Caller           | Location          |
| -----: | ------: | ---------------- | ----------------- |
| 100.0% |       1 | `getPackageName` | `java.lang.Class` |

##### `getLocationIndex` (`jdk.internal.jimage.BasicImageReader`)

|      % | Samples | Caller           | Location                               |
| -----: | ------: | ---------------- | -------------------------------------- |
| 100.0% |       1 | `verifyLocation` | `jdk.internal.jimage.BasicImageReader` |

##### `checkFromIndexSize` (`jdk.internal.util.Preconditions`)

|      % | Samples | Caller               | Location            |
| -----: | ------: | -------------------- | ------------------- |
| 100.0% |       1 | `checkFromIndexSize` | `java.util.Objects` |

##### `iterator` (`kotlin.collections.builders.ListBuilder`)

|      % | Samples | Caller                     | Location                                                           |
| -----: | ------: | -------------------------- | ------------------------------------------------------------------ |
| 100.0% |       1 | `runResolverForNoReceiver` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolveTask` |

##### `subList` (`java.util.ArrayList`)

|      % | Samples | Caller                             | Location                                                              |
| -----: | ------: | ---------------------------------- | --------------------------------------------------------------------- |
| 100.0% |       1 | `resolveUserTypeToSymbol$lambda$1` | `org.jetbrains.kotlin.fir.resolve.providers.impl.FirTypeResolverImpl` |

##### `getFullName` (`jdk.internal.jimage.ImageLocation`)

|      % | Samples | Caller        | Location                            |
| -----: | ------: | ------------- | ----------------------------------- |
| 100.0% |       1 | `getFullName` | `jdk.internal.jimage.ImageLocation` |

##### `I2C/C2I adapters(0xbbab)` (`<unknown>`)

|      % | Samples | Caller   | Location                                                        |
| -----: | ------: | -------- | --------------------------------------------------------------- |
| 100.0% |       1 | `<init>` | `org.jetbrains.kotlin.fir.resolve.dfa.cfg.FunctionCallExitNode` |

##### `I2C/C2I adapters(0xaa)` (`<unknown>`)

|      % | Samples | Caller        | Location                                                |
| -----: | ------: | ------------- | ------------------------------------------------------- |
| 100.0% |       1 | `getChildren` | `com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure` |

##### `I2C/C2I adapters(0xbbbb)` (`<unknown>`)

|      % | Samples | Caller                             | Location                                                            |
| -----: | ------: | ---------------------------------- | ------------------------------------------------------------------- |
| 100.0% |       1 | `processPropertiesByName$lambda$0` | `org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel` |

##### `itable stub` (`<unknown>`)

|      % | Samples | Caller     | Location                                        |
| -----: | ------: | ---------- | ----------------------------------------------- |
| 100.0% |       1 | `calcNext` | `kotlin.sequences.FilteringSequence$iterator$1` |

##### `I2C/C2I adapters(0x)` (`<unknown>`)

|      % | Samples | Caller                     | Location                                                   |
| -----: | ------: | -------------------------- | ---------------------------------------------------------- |
| 100.0% |       1 | `unwrapAndFlattenArgument` | `org.jetbrains.kotlin.fir.expressions.FirExpressionUtilKt` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                                   | Location                                                |
| ----: | ------: | ------------------------------------------ | ------------------------------------------------------- |
| 67.3% |     913 | `_pthread_start`                           | `<unknown>`                                             |
| 67.3% |     913 | `thread_start`                             | `<unknown>`                                             |
| 67.3% |     912 | `Thread::call_run`                         | `<unknown>`                                             |
| 67.3% |     912 | `thread_native_entry`                      | `<unknown>`                                             |
| 62.0% |     841 | `CompileBroker::compiler_thread_loop`      | `<unknown>`                                             |
| 62.0% |     841 | `JavaThread::thread_main_inner`            | `<unknown>`                                             |
| 61.3% |     831 | `CompileBroker::invoke_compiler_on_method` | `<unknown>`                                             |
| 42.1% |     571 | `C2Compiler::compile_method`               | `<unknown>`                                             |
| 42.0% |     570 | `Compile::Compile`                         | `<unknown>`                                             |
| 32.2% |     436 | `run`                                      | `org.jetbrains.kotlin.preloading.Preloader`             |
| 32.2% |     436 | `main`                                     | `org.jetbrains.kotlin.preloading.Preloader`             |
| 26.8% |     364 | `invokeExact_MT`                           | `java.lang.invoke.Invokers$Holder`                      |
| 26.8% |     363 | `main`                                     | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`  |
| 26.8% |     363 | `main`                                     | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 26.8% |     363 | `invokeStatic`                             | `java.lang.invoke.LambdaForm$DMH.0x000000e001008000`    |
| 26.8% |     363 | `invoke`                                   | `java.lang.invoke.LambdaForm$MH.0x000000e001009400`     |
| 26.8% |     363 | `invokeImpl`                               | `jdk.internal.reflect.DirectMethodHandleAccessor`       |
| 26.8% |     363 | `invoke`                                   | `jdk.internal.reflect.DirectMethodHandleAccessor`       |
| 26.8% |     363 | `invoke`                                   | `java.lang.reflect.Method`                              |
| 26.7% |     362 | `doMain`                                   | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

#### Categories

##### Compiler

|     % | Samples | Function                                    | Location    |
| ----: | ------: | ------------------------------------------- | ----------- |
| 62.0% |     841 | `CompileBroker::compiler_thread_loop`       | `<unknown>` |
| 61.3% |     831 | `CompileBroker::invoke_compiler_on_method`  | `<unknown>` |
| 42.1% |     571 | `C2Compiler::compile_method`                | `<unknown>` |
| 42.0% |     570 | `Compile::Compile`                          | `<unknown>` |
| 21.1% |     286 | `Compile::Code_Gen`                         | `<unknown>` |
| 18.7% |     253 | `Compilation::Compilation`                  | `<unknown>` |
| 18.6% |     252 | `Compilation::compile_method`               | `<unknown>` |
| 16.6% |     225 | `Compilation::compile_java_method`          | `<unknown>` |
| 14.7% |     200 | `Compile::Optimize`                         | `<unknown>` |
| 11.2% |     152 | `PhaseChaitin::Register_Allocate`           | `<unknown>` |
|  7.7% |     104 | `PhaseIdealLoop::optimize`                  | `<unknown>` |
|  6.7% |      91 | `Compilation::emit_lir`                     | `<unknown>` |
|  6.6% |      89 | `PhaseIdealLoop::PhaseIdealLoop`            | `<unknown>` |
|  6.5% |      88 | `PhaseIdealLoop::build_and_optimize`        | `<unknown>` |
|  6.2% |      84 | `Compilation::build_hir`                    | `<unknown>` |
|  5.6% |      76 | `LinearScan::do_linear_scan`                | `<unknown>` |
|  4.7% |      64 | `PhaseIterGVN::optimize`                    | `<unknown>` |
|  4.5% |      61 | `GraphBuilder::GraphBuilder`                | `<unknown>` |
|  4.4% |      60 | `PhaseIterGVN::transform_old`               | `<unknown>` |
|  4.2% |      57 | `GraphBuilder::iterate_bytecodes_for_block` | `<unknown>` |

##### Native

|     % | Samples | Function                                        | Location    |
| ----: | ------: | ----------------------------------------------- | ----------- |
| 67.3% |     913 | `_pthread_start`                                | `<unknown>` |
| 67.3% |     913 | `thread_start`                                  | `<unknown>` |
| 67.3% |     912 | `Thread::call_run`                              | `<unknown>` |
| 67.3% |     912 | `thread_native_entry`                           | `<unknown>` |
| 62.0% |     841 | `JavaThread::thread_main_inner`                 | `<unknown>` |
| 18.7% |     253 | `Compiler::compile_method`                      | `<unknown>` |
|  5.3% |      72 | `Parse::Parse`                                  | `<unknown>` |
|  5.3% |      72 | `ParseGenerator::generate`                      | `<unknown>` |
|  5.2% |      70 | `Parse::do_one_block`                           | `<unknown>` |
|  5.2% |      70 | `Parse::do_all_blocks`                          | `<unknown>` |
|  4.8% |      65 | `WorkerThread::run`                             | `<unknown>` |
|  4.7% |      64 | `SystemDictionary::resolve_class_from_stream`   | `<unknown>` |
|  4.7% |      64 | `jvm_define_class_common`                       | `<unknown>` |
|  4.7% |      64 | `JVM_DefineClassWithSource`                     | `<unknown>` |
|  4.7% |      64 | `Java_java_lang_ClassLoader_defineClass1`       | `<unknown>` |
|  4.7% |      64 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `<unknown>` |
|  4.5% |      61 | `IRScope::IRScope`                              | `<unknown>` |
|  4.5% |      61 | `IR::IR`                                        | `<unknown>` |
|  4.4% |      59 | `KlassFactory::create_from_stream`              | `<unknown>` |
|  4.3% |      58 | `Parse::do_call`                                | `<unknown>` |

##### Ours

|     % | Samples | Function                                   | Location                                                         |
| ----: | ------: | ------------------------------------------ | ---------------------------------------------------------------- |
| 32.2% |     436 | `run`                                      | `org.jetbrains.kotlin.preloading.Preloader`                      |
| 32.2% |     436 | `main`                                     | `org.jetbrains.kotlin.preloading.Preloader`                      |
| 26.8% |     363 | `main`                                     | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`           |
| 26.8% |     363 | `main`                                     | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                     |
| 26.7% |     362 | `doMain`                                   | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`          |
| 26.6% |     361 | `doMainNoExit$default`                     | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`          |
| 26.5% |     360 | `exec`                                     | `org.jetbrains.kotlin.cli.common.CLICompiler`                    |
| 26.5% |     360 | `doMainNoExit`                             | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`          |
| 25.4% |     345 | `doExecutePhased`                          | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                     |
| 25.4% |     345 | `execImpl`                                 | `org.jetbrains.kotlin.cli.common.CLICompiler`                    |
| 25.4% |     344 | `executeAndReturnPipeLineArtifact`         | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`          |
| 25.4% |     344 | `executeAndReturnPipeLineArtifact$default` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`          |
| 25.4% |     344 | `execute`                                  | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`          |
| 25.3% |     343 | `runPhasedPipeline`                        | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`          |
| 25.1% |     341 | `phaseBody`                                | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`                |
| 25.1% |     341 | `invoke`                                   | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`          |
| 25.1% |     341 | `invoke`                                   | `org.jetbrains.kotlin.backend.common.phaser.CompositePhase`      |
| 25.1% |     341 | `invokeToplevel`                           | `org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`             |
| 17.3% |     234 | `executePhase`                             | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase` |
| 12.2% |     165 | `resolveAndCheckFir`                       | `org.jetbrains.kotlin.fir.pipeline.FirUtilsKt`                   |

##### Standard library

|     % | Samples | Function            | Location                                              |
| ----: | ------: | ------------------- | ----------------------------------------------------- |
| 26.8% |     364 | `invokeExact_MT`    | `java.lang.invoke.Invokers$Holder`                    |
| 26.8% |     363 | `invokeStatic`      | `java.lang.invoke.LambdaForm$DMH.0x000000e001008000`  |
| 26.8% |     363 | `invoke`            | `java.lang.invoke.LambdaForm$MH.0x000000e001009400`   |
| 26.8% |     363 | `invokeImpl`        | `jdk.internal.reflect.DirectMethodHandleAccessor`     |
| 26.8% |     363 | `invoke`            | `jdk.internal.reflect.DirectMethodHandleAccessor`     |
| 26.8% |     363 | `invoke`            | `java.lang.reflect.Method`                            |
|  5.1% |      69 | `loadClass`         | `java.lang.ClassLoader`                               |
|  4.8% |      65 | `defineClass`       | `java.lang.ClassLoader`                               |
|  4.8% |      65 | `read`              | `java.util.zip.InflaterInputStream`                   |
|  4.7% |      64 | `defineClass1`      | `java.lang.ClassLoader`                               |
|  4.7% |      64 | `inflateBytesBytes` | `java.util.zip.Inflater`                              |
|  4.7% |      64 | `inflate`           | `java.util.zip.Inflater`                              |
|  4.7% |      64 | `read`              | `java.util.zip.ZipInputStream`                        |
|  4.7% |      64 | `read`              | `java.io.FilterInputStream`                           |
|  3.2% |      44 | `resumeWith`        | `kotlin.coroutines.jvm.internal.BaseContinuationImpl` |
|  1.4% |      19 | `getValue`          | `kotlin.SynchronizedLazyImpl`                         |
|  1.1% |      15 | `getValue`          | `kotlin.UnsafeLazyImpl`                               |
|  1.0% |      13 | `getValue`          | `kotlin.SafePublicationLazyImpl`                      |
|  0.8% |      11 | `doPrivileged`      | `java.security.AccessController`                      |
|  0.8% |      11 | `buildCallSite`     | `java.lang.invoke.InnerClassLambdaMetafactory`        |

##### JIT

|    % | Samples | Function                   | Location    |
| ---: | ------: | -------------------------- | ----------- |
| 0.4% |       5 | `I2C/C2I adapters(0xb)`    | `<unknown>` |
| 0.2% |       3 | `I2C/C2I adapters(0xbb)`   | `<unknown>` |
| 0.1% |       2 | `zero_blocks`              | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xbbb)`  | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xbbab)` | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xaa)`   | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xbbbb)` | `<unknown>` |
| 0.1% |       1 | `itable stub`              | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0x)`     | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `_pthread_start` (`<unknown>`)

|     % | Samples | Callee                | Location    |
| ----: | ------: | --------------------- | ----------- |
| 99.9% |     912 | `thread_native_entry` | `<unknown>` |
|  0.1% |       1 | `ThreadJavaMain`      | `<unknown>` |

##### `thread_start` (`<unknown>`)

|      % | Samples | Callee           | Location    |
| -----: | ------: | ---------------- | ----------- |
| 100.0% |     913 | `_pthread_start` | `<unknown>` |

##### `Thread::call_run` (`<unknown>`)

|     % | Samples | Callee                          | Location    |
| ----: | ------: | ------------------------------- | ----------- |
| 92.2% |     841 | `JavaThread::thread_main_inner` | `<unknown>` |
|  7.1% |      65 | `WorkerThread::run`             | `<unknown>` |
|  0.2% |       2 | `VMThread::run`                 | `<unknown>` |
|  0.2% |       2 | `ConcurrentGCThread::run`       | `<unknown>` |
|  0.2% |       2 | `WatcherThread::run`            | `<unknown>` |

##### `thread_native_entry` (`<unknown>`)

|      % | Samples | Callee             | Location    |
| -----: | ------: | ------------------ | ----------- |
| 100.0% |     912 | `Thread::call_run` | `<unknown>` |

##### `CompileBroker::compiler_thread_loop` (`<unknown>`)

|     % | Samples | Callee                                     | Location    |
| ----: | ------: | ------------------------------------------ | ----------- |
| 98.8% |     831 | `CompileBroker::invoke_compiler_on_method` | `<unknown>` |
|  1.1% |       9 | `CompileQueue::get`                        | `<unknown>` |
|  0.1% |       1 | `CompileTaskWrapper::~CompileTaskWrapper`  | `<unknown>` |

##### `JavaThread::thread_main_inner` (`<unknown>`)

|      % | Samples | Callee                                | Location    |
| -----: | ------: | ------------------------------------- | ----------- |
| 100.0% |     841 | `CompileBroker::compiler_thread_loop` | `<unknown>` |

##### `CompileBroker::invoke_compiler_on_method` (`<unknown>`)

|     % | Samples | Callee                              | Location    |
| ----: | ------: | ----------------------------------- | ----------- |
| 68.7% |     571 | `C2Compiler::compile_method`        | `<unknown>` |
| 30.4% |     253 | `Compiler::compile_method`          | `<unknown>` |
|  0.4% |       3 | `CompilationLog::log_compile`       | `<unknown>` |
|  0.2% |       2 | `ciEnv::ciEnv`                      | `<unknown>` |
|  0.1% |       1 | `CompileBroker::collect_statistics` | `<unknown>` |

##### `C2Compiler::compile_method` (`<unknown>`)

|     % | Samples | Callee              | Location    |
| ----: | ------: | ------------------- | ----------- |
| 99.8% |     570 | `Compile::Compile`  | `<unknown>` |
|  0.2% |       1 | `Compile::~Compile` | `<unknown>` |

##### `Compile::Compile` (`<unknown>`)

|     % | Samples | Callee                                   | Location    |
| ----: | ------: | ---------------------------------------- | ----------- |
| 50.2% |     286 | `Compile::Code_Gen`                      | `<unknown>` |
| 35.1% |     200 | `Compile::Optimize`                      | `<unknown>` |
| 12.6% |      72 | `ParseGenerator::generate`               | `<unknown>` |
|  1.1% |       6 | `PhaseRemoveUseless::PhaseRemoveUseless` | `<unknown>` |
|  0.4% |       2 | `CallGenerator::for_osr`                 | `<unknown>` |

##### `run` (`org.jetbrains.kotlin.preloading.Preloader`)

|     % | Samples | Callee           | Location                                               |
| ----: | ------: | ---------------- | ------------------------------------------------------ |
| 83.3% |     363 | `invoke`         | `java.lang.reflect.Method`                             |
| 16.5% |      72 | `preloadClasses` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |
|  0.2% |       1 | `joining`        | `java.util.stream.Collectors`                          |

##### `main` (`org.jetbrains.kotlin.preloading.Preloader`)

|      % | Samples | Callee | Location                                    |
| -----: | ------: | ------ | ------------------------------------------- |
| 100.0% |     436 | `run`  | `org.jetbrains.kotlin.preloading.Preloader` |

##### `invokeExact_MT` (`java.lang.invoke.Invokers$Holder`)

|     % | Samples | Callee             | Location                                             |
| ----: | ------: | ------------------ | ---------------------------------------------------- |
| 99.7% |     363 | `invoke`           | `java.lang.invoke.LambdaForm$MH.0x000000e001009400`  |
|  2.2% |       8 | `invokeStatic`     | `java.lang.invoke.LambdaForm$DMH.0x000000e001230000` |
|  0.8% |       3 | `invokeStatic`     | `java.lang.invoke.DirectMethodHandle$Holder`         |
|  0.3% |       1 | `newInvokeSpecial` | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### `main` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`)

|     % | Samples | Callee   | Location                                                |
| ----: | ------: | -------- | ------------------------------------------------------- |
| 99.7% |     362 | `doMain` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
|  0.3% |       1 | `<init>` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |

##### `main` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % | Samples | Callee | Location                                               |
| -----: | ------: | ------ | ------------------------------------------------------ |
| 100.0% |     363 | `main` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion` |

##### `invokeStatic` (`java.lang.invoke.LambdaForm$DMH.0x000000e001008000`)

|      % | Samples | Callee | Location                                     |
| -----: | ------: | ------ | -------------------------------------------- |
| 100.0% |     363 | `main` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x000000e001009400`)

|      % | Samples | Callee         | Location                                             |
| -----: | ------: | -------------- | ---------------------------------------------------- |
| 100.0% |     363 | `invokeStatic` | `java.lang.invoke.LambdaForm$DMH.0x000000e001008000` |

##### `invokeImpl` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % | Samples | Callee           | Location                           |
| -----: | ------: | ---------------- | ---------------------------------- |
| 100.0% |     363 | `invokeExact_MT` | `java.lang.invoke.Invokers$Holder` |

##### `invoke` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % | Samples | Callee       | Location                                          |
| -----: | ------: | ------------ | ------------------------------------------------- |
| 100.0% |     363 | `invokeImpl` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke` (`java.lang.reflect.Method`)

|      % | Samples | Callee                  | Location                                          |
| -----: | ------: | ----------------------- | ------------------------------------------------- |
| 100.0% |     363 | `invoke`                | `jdk.internal.reflect.DirectMethodHandleAccessor` |
|   0.8% |       3 | `acquireMethodAccessor` | `java.lang.reflect.Method`                        |

##### `doMain` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|     % | Samples | Callee                         | Location                                                |
| ----: | ------: | ------------------------------ | ------------------------------------------------------- |
| 99.7% |     361 | `doMainNoExit$default`         | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
|  0.3% |       1 | `setupIdeaStandaloneExecution` | `org.jetbrains.kotlin.cli.jvm.compiler.CompatKt`        |

##### `doMainNoExit$default` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|     % | Samples | Callee                   | Location                                                |
| ----: | ------: | ------------------------ | ------------------------------------------------------- |
| 99.7% |     360 | `doMainNoExit`           | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
|  0.3% |       1 | `defaultMessageRenderer` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `exec` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Callee                                   | Location                                                                |
| -----: | ------: | ---------------------------------------- | ----------------------------------------------------------------------- |
| 100.0% |     360 | `exec`                                   | `org.jetbrains.kotlin.cli.common.CLICompiler`                           |
|  95.8% |     345 | `execImpl`                               | `org.jetbrains.kotlin.cli.common.CLICompiler`                           |
|   2.5% |       9 | `<clinit>`                               | `org.jetbrains.kotlin.cli.common.ArgumentsKt`                           |
|   1.4% |       5 | `parseCommandLineArguments$default`      | `org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt` |
|   0.3% |       1 | `InterpreterRuntime::resolve_from_cache` | `<unknown>`                                                             |

##### `doMainNoExit` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % | Samples | Callee | Location                                      |
| -----: | ------: | ------ | --------------------------------------------- |
| 100.0% |     360 | `exec` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `doExecutePhased` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % | Samples | Callee                         | Location                                                |
| -----: | ------: | ------------------------------ | ------------------------------------------------------- |
| 100.0% |     345 | `doExecutePhased`              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
|  99.7% |     344 | `execute`                      | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
|   0.3% |       1 | `getDefaultPerformanceManager` | `org.jetbrains.kotlin.cli.common.CLICompiler`           |

##### `execImpl` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Callee            | Location                                     |
| -----: | ------: | ----------------- | -------------------------------------------- |
| 100.0% |     345 | `doExecutePhased` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `executeAndReturnPipeLineArtifact` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|     % | Samples | Callee              | Location                                                      |
| ----: | ------: | ------------------- | ------------------------------------------------------------- |
| 99.7% |     343 | `runPhasedPipeline` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`       |
|  0.3% |       1 | `<init>`            | `org.jetbrains.kotlin.cli.pipeline.ArgumentsPipelineArtifact` |

##### `executeAndReturnPipeLineArtifact$default` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Callee                             | Location                                                |
| -----: | ------: | ---------------------------------- | ------------------------------------------------------- |
| 100.0% |     344 | `executeAndReturnPipeLineArtifact` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `execute` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Callee                                     | Location                                                |
| -----: | ------: | ------------------------------------------ | ------------------------------------------------------- |
| 100.0% |     344 | `executeAndReturnPipeLineArtifact$default` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `runPhasedPipeline` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|     % | Samples | Callee                     | Location                                                                    |
| ----: | ------: | -------------------------- | --------------------------------------------------------------------------- |
| 99.4% |     341 | `invokeToplevel`           | `org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`                        |
|  0.6% |       2 | `reportToMessageCollector` | `org.jetbrains.kotlin.cli.common.fir.FirDiagnosticsCompilerResultsReporter` |

##### `phaseBody` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

|      % | Samples | Callee         | Location                                                              |
| -----: | ------: | -------------- | --------------------------------------------------------------------- |
| 100.0% |     341 | `phaseBody`    | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`                     |
|  68.6% |     234 | `executePhase` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`      |
|  22.6% |      77 | `executePhase` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`       |
|   7.6% |      26 | `executePhase` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFir2IrPipelinePhase`        |
|   1.2% |       4 | `executePhase` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmConfigurationPipelinePhase` |

##### `invoke` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`)

|      % | Samples | Callee      | Location                                                         |
| -----: | ------: | ----------- | ---------------------------------------------------------------- |
| 100.0% |     341 | `phaseBody` | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`                |
|   5.6% |      19 | `phaseBody` | `org.jetbrains.kotlin.backend.common.phaser.FileLoweringPhase`   |
|   1.2% |       4 | `phaseBody` | `org.jetbrains.kotlin.backend.common.phaser.ModuleLoweringPhase` |

##### `invoke` (`org.jetbrains.kotlin.backend.common.phaser.CompositePhase`)

|      % | Samples | Callee   | Location                                                |
| -----: | ------: | -------- | ------------------------------------------------------- |
| 100.0% |     341 | `invoke` | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase` |

##### `invokeToplevel` (`org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`)

|      % | Samples | Callee   | Location                                                    |
| -----: | ------: | -------- | ----------------------------------------------------------- |
| 100.0% |     341 | `invoke` | `org.jetbrains.kotlin.backend.common.phaser.CompositePhase` |

##### `Compile::Code_Gen` (`<unknown>`)

|     % | Samples | Callee                            | Location    |
| ----: | ------: | --------------------------------- | ----------- |
| 53.1% |     152 | `PhaseChaitin::Register_Allocate` | `<unknown>` |
| 19.9% |      57 | `Matcher::match`                  | `<unknown>` |
| 12.2% |      35 | `PhaseOutput::Output`             | `<unknown>` |
| 10.1% |      29 | `PhaseCFG::do_global_code_motion` | `<unknown>` |
|  1.7% |       5 | `PhaseOutput::install_code`       | `<unknown>` |

##### `Compilation::Compilation` (`<unknown>`)

|     % | Samples | Callee                        | Location    |
| ----: | ------: | ----------------------------- | ----------- |
| 99.6% |     252 | `Compilation::compile_method` | `<unknown>` |
|  0.4% |       1 | `ciEnv::comp_level`           | `<unknown>` |

##### `Compiler::compile_method` (`<unknown>`)

|      % | Samples | Callee                     | Location    |
| -----: | ------: | -------------------------- | ----------- |
| 100.0% |     253 | `Compilation::Compilation` | `<unknown>` |

##### `Compilation::compile_method` (`<unknown>`)

|     % | Samples | Callee                                               | Location    |
| ----: | ------: | ---------------------------------------------------- | ----------- |
| 89.3% |     225 | `Compilation::compile_java_method`                   | `<unknown>` |
|  9.5% |      24 | `ciEnv::register_method`                             | `<unknown>` |
|  0.8% |       2 | `Dependencies::assert_common_1`                      | `<unknown>` |
|  0.4% |       1 | `DebugInformationRecorder::DebugInformationRecorder` | `<unknown>` |

##### `executePhase` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`)

|      % | Samples | Callee                        | Location                                                         |
| -----: | ------: | ----------------------------- | ---------------------------------------------------------------- |
| 100.0% |     234 | `executePhase`                | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase` |
|  70.5% |     165 | `resolveAndCheckFir`          | `org.jetbrains.kotlin.fir.pipeline.FirUtilsKt`                   |
|  10.3% |      24 | `createEnvironmentAndSources` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase` |
|   8.5% |      20 | `prepareJvmSessions`          | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase` |
|   7.7% |      18 | `buildFirViaLightTree`        | `org.jetbrains.kotlin.fir.pipeline.FirUtilsKt`                   |

##### `Compilation::compile_java_method` (`<unknown>`)

|     % | Samples | Callee                         | Location    |
| ----: | ------: | ------------------------------ | ----------- |
| 40.4% |      91 | `Compilation::emit_lir`        | `<unknown>` |
| 37.3% |      84 | `Compilation::build_hir`       | `<unknown>` |
| 20.9% |      47 | `Compilation::emit_code_body`  | `<unknown>` |
|  0.9% |       2 | `ciMethod::ensure_method_data` | `<unknown>` |
|  0.4% |       1 | `LinearScan::do_linear_scan`   | `<unknown>` |

##### `Compile::Optimize` (`<unknown>`)

|     % | Samples | Callee                                 | Location    |
| ----: | ------: | -------------------------------------- | ----------- |
| 29.5% |      59 | `PhaseIdealLoop::optimize`             | `<unknown>` |
| 22.5% |      45 | `Compile::optimize_loops`              | `<unknown>` |
| 19.0% |      38 | `PhaseIterGVN::optimize`               | `<unknown>` |
|  8.0% |      16 | `PhaseCCP::PhaseCCP`                   | `<unknown>` |
|  6.0% |      12 | `PhaseMacroExpand::expand_macro_nodes` | `<unknown>` |

##### `resolveAndCheckFir` (`org.jetbrains.kotlin.fir.pipeline.FirUtilsKt`)

|     % | Samples | Callee          | Location                                      |
| ----: | ------: | --------------- | --------------------------------------------- |
| 77.0% |     127 | `runResolution` | `org.jetbrains.kotlin.fir.pipeline.AnalyseKt` |
| 23.0% |      38 | `runCheckers`   | `org.jetbrains.kotlin.fir.pipeline.AnalyseKt` |

##### `PhaseChaitin::Register_Allocate` (`<unknown>`)

|     % | Samples | Callee                                     | Location    |
| ----: | ------: | ------------------------------------------ | ----------- |
| 19.7% |      30 | `PhaseChaitin::Split`                      | `<unknown>` |
| 17.8% |      27 | `PhaseChaitin::build_ifg_physical`         | `<unknown>` |
| 11.2% |      17 | `PhaseLive::compute`                       | `<unknown>` |
|  9.2% |      14 | `PhaseChaitin::gather_lrg_masks`           | `<unknown>` |
|  7.9% |      12 | `PhaseChaitin::post_allocate_copy_removal` | `<unknown>` |

##### `PhaseIdealLoop::optimize` (`<unknown>`)

|     % | Samples | Callee                           | Location    |
| ----: | ------: | -------------------------------- | ----------- |
| 85.6% |      89 | `PhaseIdealLoop::PhaseIdealLoop` | `<unknown>` |
| 13.5% |      14 | `PhaseIterGVN::optimize`         | `<unknown>` |
|  1.0% |       1 | `Chunk::next_chop`               | `<unknown>` |

##### `Compilation::emit_lir` (`<unknown>`)

|     % | Samples | Callee                       | Location    |
| ----: | ------: | ---------------------------- | ----------- |
| 82.4% |      75 | `LinearScan::do_linear_scan` | `<unknown>` |
| 16.5% |      15 | `BlockList::iterate_forward` | `<unknown>` |
|  1.1% |       1 | `Base::as_Base`              | `<unknown>` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`<unknown>`)

|     % | Samples | Callee                               | Location    |
| ----: | ------: | ------------------------------------ | ----------- |
| 98.9% |      88 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |
|  1.1% |       1 | `_platform_bzero`                    | `<unknown>` |

##### `PhaseIdealLoop::build_and_optimize` (`<unknown>`)

|     % | Samples | Callee                                 | Location    |
| ----: | ------: | -------------------------------------- | ----------- |
| 31.8% |      28 | `PhaseIdealLoop::build_loop_late`      | `<unknown>` |
| 26.1% |      23 | `PhaseIdealLoop::split_if_with_blocks` | `<unknown>` |
| 12.5% |      11 | `PhaseIdealLoop::build_loop_early`     | `<unknown>` |
|  6.8% |       6 | `PhaseIdealLoop::Dominators`           | `<unknown>` |
|  6.8% |       6 | `PhaseIdealLoop::build_loop_tree`      | `<unknown>` |

##### `Compilation::build_hir` (`<unknown>`)

|     % | Samples | Callee                                       | Location    |
| ----: | ------: | -------------------------------------------- | ----------- |
| 72.6% |      61 | `IR::IR`                                     | `<unknown>` |
| 14.3% |      12 | `GlobalValueNumbering::GlobalValueNumbering` | `<unknown>` |
|  6.0% |       5 | `IR::eliminate_null_checks`                  | `<unknown>` |
|  2.4% |       2 | `IR::compute_code`                           | `<unknown>` |
|  1.2% |       1 | `IR::compute_use_counts`                     | `<unknown>` |

##### `LinearScan::do_linear_scan` (`<unknown>`)

|     % | Samples | Callee                                | Location    |
| ----: | ------: | ------------------------------------- | ----------- |
| 46.1% |      35 | `LinearScan::allocate_registers`      | `<unknown>` |
| 15.8% |      12 | `LinearScan::assign_reg_num`          | `<unknown>` |
|  7.9% |       6 | `LinearScan::build_intervals`         | `<unknown>` |
|  7.9% |       6 | `LinearScan::compute_local_live_sets` | `<unknown>` |
|  6.6% |       5 | `LinearScan::eliminate_spill_moves`   | `<unknown>` |

##### `Parse::Parse` (`<unknown>`)

|     % | Samples | Callee                          | Location    |
| ----: | ------: | ------------------------------- | ----------- |
| 97.2% |      70 | `Parse::do_all_blocks`          | `<unknown>` |
|  2.8% |       2 | `ciMethod::method_data`         | `<unknown>` |
|  2.8% |       2 | `Dependencies::assert_common_1` | `<unknown>` |
|  1.4% |       1 | `Parse::create_entry_map`       | `<unknown>` |
|  1.4% |       1 | `Parse::do_exits`               | `<unknown>` |

##### `ParseGenerator::generate` (`<unknown>`)

|      % | Samples | Callee         | Location    |
| -----: | ------: | -------------- | ----------- |
| 100.0% |      72 | `Parse::Parse` | `<unknown>` |

##### `Parse::do_one_block` (`<unknown>`)

|     % | Samples | Callee                   | Location    |
| ----: | ------: | ------------------------ | ----------- |
| 82.9% |      58 | `Parse::do_call`         | `<unknown>` |
| 17.1% |      12 | `Parse::do_field_access` | `<unknown>` |
| 10.0% |       7 | `Parse::do_one_bytecode` | `<unknown>` |
|  4.3% |       3 | `Parse::do_if`           | `<unknown>` |
|  2.9% |       2 | `Parse::do_instanceof`   | `<unknown>` |

##### `Parse::do_all_blocks` (`<unknown>`)

|      % | Samples | Callee                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |      70 | `Parse::do_one_block` | `<unknown>` |
|   1.4% |       1 | `Parse::merge_common` | `<unknown>` |

##### `loadClass` (`java.lang.ClassLoader`)

|     % | Samples | Callee      | Location                                                 |
| ----: | ------: | ----------- | -------------------------------------------------------- |
| 92.8% |      64 | `findClass` | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |
|  5.8% |       4 | `findClass` | `java.net.URLClassLoader`                                |
|  5.8% |       4 | `loadClass` | `java.lang.ClassLoader`                                  |
|  1.4% |       1 | `loadClass` | `jdk.internal.jrtfs.JrtFileSystemProvider$JrtFsLoader`   |

##### `WorkerThread::run` (`<unknown>`)

|     % | Samples | Callee                            | Location    |
| ----: | ------: | --------------------------------- | ----------- |
| 53.8% |      35 | `G1EvacuateRegionsBaseTask::work` | `<unknown>` |
| 21.5% |      14 | `G1CMConcurrentMarkingTask::work` | `<unknown>` |
| 18.5% |      12 | `G1RebuildRSAndScrubTask::work`   | `<unknown>` |
|  3.1% |       2 | `G1CMRootRegionScanTask::work`    | `<unknown>` |
|  1.5% |       1 | `semaphore_wait_trap`             | `<unknown>` |

##### `defineClass` (`java.lang.ClassLoader`)

|     % | Samples | Callee           | Location                |
| ----: | ------: | ---------------- | ----------------------- |
| 98.5% |      64 | `defineClass1`   | `java.lang.ClassLoader` |
| 98.5% |      64 | `defineClass`    | `java.lang.ClassLoader` |
|  1.5% |       1 | `preDefineClass` | `java.lang.ClassLoader` |

##### `read` (`java.util.zip.InflaterInputStream`)

|     % | Samples | Callee    | Location                                           |
| ----: | ------: | --------- | -------------------------------------------------- |
| 96.9% |      63 | `inflate` | `java.util.zip.Inflater`                           |
|  3.1% |       2 | `fill`    | `java.util.zip.ZipFile$ZipFileInflaterInputStream` |

##### `PhaseIterGVN::optimize` (`<unknown>`)

|     % | Samples | Callee                        | Location    |
| ----: | ------: | ----------------------------- | ----------- |
| 92.2% |      59 | `PhaseIterGVN::transform_old` | `<unknown>` |
|  1.6% |       1 | `ProjNode::hash`              | `<unknown>` |
|  1.6% |       1 | `CastIINode::Value`           | `<unknown>` |
|  1.6% |       1 | `LoadNode::Identity`          | `<unknown>` |

##### `SystemDictionary::resolve_class_from_stream` (`<unknown>`)

|     % | Samples | Callee                                    | Location    |
| ----: | ------: | ----------------------------------------- | ----------- |
| 92.2% |      59 | `KlassFactory::create_from_stream`        | `<unknown>` |
|  7.8% |       5 | `SystemDictionary::define_instance_class` | `<unknown>` |

##### `jvm_define_class_common` (`<unknown>`)

|      % | Samples | Callee                                        | Location    |
| -----: | ------: | --------------------------------------------- | ----------- |
| 100.0% |      64 | `SystemDictionary::resolve_class_from_stream` | `<unknown>` |

##### `JVM_DefineClassWithSource` (`<unknown>`)

|      % | Samples | Callee                    | Location    |
| -----: | ------: | ------------------------- | ----------- |
| 100.0% |      64 | `jvm_define_class_common` | `<unknown>` |

##### `Java_java_lang_ClassLoader_defineClass1` (`<unknown>`)

|      % | Samples | Callee                      | Location    |
| -----: | ------: | --------------------------- | ----------- |
| 100.0% |      64 | `JVM_DefineClassWithSource` | `<unknown>` |

##### `Java_java_util_zip_Inflater_inflateBytesBytes` (`<unknown>`)

|     % | Samples | Callee                              | Location    |
| ----: | ------: | ----------------------------------- | ----------- |
| 78.1% |      50 | `inflate_fast`                      | `<unknown>` |
| 14.1% |       9 | `inflate`                           | `<unknown>` |
|  4.7% |       3 | `jni_ReleasePrimitiveArrayCritical` | `<unknown>` |
|  3.1% |       2 | `jni_GetPrimitiveArrayCritical`     | `<unknown>` |

##### `defineClass1` (`java.lang.ClassLoader`)

|      % | Samples | Callee                                    | Location                                                 |
| -----: | ------: | ----------------------------------------- | -------------------------------------------------------- |
| 100.0% |      64 | `Java_java_lang_ClassLoader_defineClass1` | `<unknown>`                                              |
|  17.2% |      11 | `loadClass`                               | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |

##### `inflateBytesBytes` (`java.util.zip.Inflater`)

|      % | Samples | Callee                                          | Location    |
| -----: | ------: | ----------------------------------------------- | ----------- |
| 100.0% |      64 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `<unknown>` |

##### `inflate` (`java.util.zip.Inflater`)

|      % | Samples | Callee              | Location                 |
| -----: | ------: | ------------------- | ------------------------ |
| 100.0% |      64 | `inflateBytesBytes` | `java.util.zip.Inflater` |
|   1.6% |       1 | `inflate`           | `java.util.zip.Inflater` |

##### `read` (`java.util.zip.ZipInputStream`)

|     % | Samples | Callee               | Location                            |
| ----: | ------: | -------------------- | ----------------------------------- |
| 96.9% |      62 | `read`               | `java.util.zip.InflaterInputStream` |
|  1.6% |       1 | `update`             | `java.util.zip.CRC32`               |
|  1.6% |       1 | `checkFromIndexSize` | `java.util.Objects`                 |

##### `read` (`java.io.FilterInputStream`)

|      % | Samples | Callee | Location                       |
| -----: | ------: | ------ | ------------------------------ |
| 100.0% |      64 | `read` | `java.util.zip.ZipInputStream` |

##### `GraphBuilder::GraphBuilder` (`<unknown>`)

|     % | Samples | Callee                               | Location    |
| ----: | ------: | ------------------------------------ | ----------- |
| 93.4% |      57 | `GraphBuilder::iterate_all_blocks`   | `<unknown>` |
|  3.3% |       2 | `BlockBegin::iterate_preorder`       | `<unknown>` |
|  3.3% |       2 | `BlockListBuilder::BlockListBuilder` | `<unknown>` |

##### `IRScope::IRScope` (`<unknown>`)

|      % | Samples | Callee                       | Location    |
| -----: | ------: | ---------------------------- | ----------- |
| 100.0% |      61 | `GraphBuilder::GraphBuilder` | `<unknown>` |

##### `IR::IR` (`<unknown>`)

|      % | Samples | Callee             | Location    |
| -----: | ------: | ------------------ | ----------- |
| 100.0% |      61 | `IRScope::IRScope` | `<unknown>` |

##### `PhaseIterGVN::transform_old` (`<unknown>`)

|     % | Samples | Callee                       | Location    |
| ----: | ------: | ---------------------------- | ----------- |
| 13.3% |       8 | `PhiNode::Ideal`             | `<unknown>` |
| 11.7% |       7 | `IfNode::Ideal`              | `<unknown>` |
| 10.0% |       6 | `RegionNode::Ideal`          | `<unknown>` |
|  6.7% |       4 | `StoreNode::Ideal`           | `<unknown>` |
|  5.0% |       3 | `PhaseIterGVN::subsume_node` | `<unknown>` |

##### `KlassFactory::create_from_stream` (`<unknown>`)

|     % | Samples | Callee                                   | Location    |
| ----: | ------: | ---------------------------------------- | ----------- |
| 89.8% |      53 | `ClassFileParser::ClassFileParser`       | `<unknown>` |
| 10.2% |       6 | `ClassFileParser::create_instance_klass` | `<unknown>` |

##### `Parse::do_call` (`<unknown>`)

|     % | Samples | Callee                                                | Location    |
| ----: | ------: | ----------------------------------------------------- | ----------- |
| 63.8% |      37 | `PredictedCallGenerator::generate`                    | `<unknown>` |
| 60.3% |      35 | `ParseGenerator::generate`                            | `<unknown>` |
| 19.0% |      11 | `Compile::call_generator`                             | `<unknown>` |
|  5.2% |       3 | `GraphKit::kill_dead_locals`                          | `<unknown>` |
|  5.2% |       3 | `GraphKit::record_profiled_arguments_for_speculation` | `<unknown>` |

##### `GraphBuilder::iterate_bytecodes_for_block` (`<unknown>`)

|     % | Samples | Callee                        | Location    |
| ----: | ------: | ----------------------------- | ----------- |
| 86.0% |      49 | `GraphBuilder::invoke`        | `<unknown>` |
| 12.3% |       7 | `GraphBuilder::access_field`  | `<unknown>` |
|  5.3% |       3 | `GraphBuilder::check_cast`    | `<unknown>` |
|  1.8% |       1 | `StoreField::StoreField`      | `<unknown>` |
|  1.8% |       1 | `GraphBuilder::method_return` | `<unknown>` |

##### `resumeWith` (`kotlin.coroutines.jvm.internal.BaseContinuationImpl`)

|     % | Samples | Callee               | Location                                                                                                      |
| ----: | ------: | -------------------- | ------------------------------------------------------------------------------------------------------------- |
| 68.2% |      30 | `invokeSuspend`      | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask$processLevel$6`                         |
| 36.4% |      16 | `invokeSuspend`      | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner$processCandidate$1`                      |
| 15.9% |       7 | `invokeSuspend`      | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver$enqueueResolutionTasks$2`                      |
|  4.5% |       2 | `invokeSuspend`      | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirInvokeResolveTowerExtension$enqueueResolverTasksForInvoke$3` |
|  2.3% |       1 | `releaseIntercepted` | `kotlin.coroutines.jvm.internal.ContinuationImpl`                                                             |

##### `getValue` (`kotlin.SynchronizedLazyImpl`)

|     % | Samples | Callee   | Location                                                                                |
| ----: | ------: | -------- | --------------------------------------------------------------------------------------- |
| 21.1% |       4 | `invoke` | `org.jetbrains.kotlin.fir.java.declarations.FirJavaClass$$Lambda.0x000000e00160f940`    |
| 21.1% |       4 | `invoke` | `org.jetbrains.kotlin.cli.jvm.modules.CoreJrtVirtualFile$$Lambda.0x000000e00137ba80`    |
| 10.5% |       2 | `invoke` | `org.jetbrains.kotlin.ir.descriptors.IrBasedClassDescriptor$$Lambda.0x000000e0018158d0` |
| 10.5% |       2 | `invoke` | `org.jetbrains.kotlin.ir.descriptors.IrBasedClassDescriptor$$Lambda.0x000000e0018153a0` |
| 10.5% |       2 | `invoke` | `org.jetbrains.kotlin.ir.descriptors.IrBasedDeclarationDescriptor$annotations$2`        |

##### `getValue` (`kotlin.UnsafeLazyImpl`)

|     % | Samples | Callee   | Location                                                                                                                                                   |
| ----: | ------: | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 80.0% |      12 | `invoke` | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver$$Lambda.0x000000e001688d28`                                                                        |
|  6.7% |       1 | `invoke` | `org.jetbrains.kotlin.fir.java.enhancement.FirSignatureEnhancement$$Lambda.0x000000e001611fa8`                                                             |
|  6.7% |       1 | `invoke` | `org.jetbrains.kotlin.load.java.structure.impl.classFiles.BinaryClassSignatureParser$$Lambda.0x000000e00160b4b8`                                           |
|  6.7% |       1 | `invoke` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformer$BodyResolveTransformerComponents$$Lambda.0x000000e001596378` |

##### `getValue` (`kotlin.SafePublicationLazyImpl`)

|     % | Samples | Callee   | Location                                                                                                   |
| ----: | ------: | -------- | ---------------------------------------------------------------------------------------------------------- |
| 69.2% |       9 | `invoke` | `kotlin.reflect.jvm.internal.DescriptorKProperty$$Lambda$0`                                                |
|  7.7% |       1 | `invoke` | `org.jetbrains.kotlin.fir.java.FirLazyJavaDeclarationList$$Lambda.0x000000e00160f098`                      |
|  7.7% |       1 | `invoke` | `org.jetbrains.kotlin.fir.scopes.impl.FirClassDeclaredMemberScopeImpl$$Lambda.0x000000e001627d80`          |
|  7.7% |       1 | `invoke` | `org.jetbrains.kotlin.fir.java.declarations.FirJavaClass$$Lambda.0x000000e00160fdb0`                       |
|  7.7% |       1 | `invoke` | `org.jetbrains.kotlin.fir.java.deserialization.JvmBinaryAnnotationDeserializer$$Lambda.0x000000e0015d74a0` |

##### `doPrivileged` (`java.security.AccessController`)

|     % | Samples | Callee              | Location                          |
| ----: | ------: | ------------------- | --------------------------------- |
| 90.9% |      10 | `executePrivileged` | `java.security.AccessController`  |
|  9.1% |       1 | `getCallerClass`    | `jdk.internal.reflect.Reflection` |
|  9.1% |       1 | `doPrivileged`      | `java.security.AccessController`  |

##### `buildCallSite` (`java.lang.invoke.InnerClassLambdaMetafactory`)

|     % | Samples | Callee            | Location                                       |
| ----: | ------: | ----------------- | ---------------------------------------------- |
| 63.6% |       7 | `spinInnerClass`  | `java.lang.invoke.InnerClassLambdaMetafactory` |
| 18.2% |       2 | `asType`          | `java.lang.invoke.MethodHandle`                |
| 18.2% |       2 | `findConstructor` | `java.lang.invoke.MethodHandles$Lookup`        |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ---: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 3.5% |      47 | `inflate_fast` ← `Java_java_util_zip_Inflater_inflateBytesBytes` ← `inflateBytesBytes` (`java.util.zip.Inflater`) ← `inflate` ← `read` (`java.util.zip.InflaterInputStream`) ← `read` (`java.util.zip.ZipInputStream`) ← `read` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses` ← `run` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main`                                                                                                                                                         |
| 1.2% |      16 | `PhaseChaitin::Split` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                 |
| 0.7% |      10 | `PhaseChaitin::build_ifg_physical` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                    |
| 0.7% |      10 | `LinearScanWalker::free_collect_inactive_fixed` ← `LinearScanWalker::alloc_free_reg` ← `LinearScanWalker::activate_current` ← `IntervalWalker::walk_to` ← `LinearScan::allocate_registers` ← `LinearScan::do_linear_scan` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`  |
| 0.7% |       9 | `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                       |
| 0.6% |       8 | `LinearScanWalker::alloc_free_reg` ← `LinearScanWalker::activate_current` ← `IntervalWalker::walk_to` ← `LinearScan::allocate_registers` ← `LinearScan::do_linear_scan` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                    |
| 0.6% |       8 | `PhaseChaitin::elide_copy` ← `PhaseChaitin::post_allocate_copy_removal` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                               |
| 0.6% |       8 | `PhaseLive::add_liveout` ← `PhaseLive::compute` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                       |
| 0.5% |       7 | `__psynch_cvwait` ← `PlatformMonitor::wait` ← `Monitor::wait` ← `CompileQueue::get` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                              |
| 0.4% |       6 | `PhaseOutput::BuildOopMaps` ← `PhaseOutput::Output` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                       |
| 0.4% |       6 | `IndexSetIterator::advance_and_next` ← `PhaseChaitin::build_ifg_physical` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                             |
| 0.4% |       6 | `PhaseLive::compute` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                  |
| 0.4% |       6 | `PhaseChaitin::gather_lrg_masks` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                      |
| 0.4% |       5 | `inflate` ← `Java_java_util_zip_Inflater_inflateBytesBytes` ← `inflateBytesBytes` (`java.util.zip.Inflater`) ← `inflate` ← `read` (`java.util.zip.InflaterInputStream`) ← `read` (`java.util.zip.ZipInputStream`) ← `read` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses` ← `run` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main`                                                                                                                                                              |
| 0.4% |       5 | `PhaseIdealLoop::build_loop_late` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                  |
| 0.4% |       5 | `IntervalWalker::walk_to` ← `IntervalWalker::walk_to` ← `LinearScan::compute_oop_map` ← `LinearScan::compute_oop_map` ← `LinearScan::assign_reg_num` ← `LinearScan::do_linear_scan` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                        |
| 0.4% |       5 | `LinearScan::eliminate_spill_moves` ← `LinearScan::do_linear_scan` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                         |
| 0.4% |       5 | `PhaseCFG::schedule_early` ← `PhaseCFG::global_code_motion` ← `PhaseCFG::do_global_code_motion` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                           |
| 0.3% |       4 | `LinearScanWalker::split_before_usage` ← `LinearScanWalker::split_and_spill_interval` ← `LinearScanWalker::activate_current` ← `IntervalWalker::walk_to` ← `LinearScan::allocate_registers` ← `LinearScan::do_linear_scan` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start` |
| 0.3% |       4 | `Matcher::find_shared` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                 |

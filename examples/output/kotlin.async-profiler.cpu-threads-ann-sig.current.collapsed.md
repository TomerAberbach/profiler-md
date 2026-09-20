# Sampling profile

Collected 1,335 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Compiler         | 46.5% |     621 |
| Native           | 38.3% |     511 |
| Ours             |  9.5% |     127 |
| Standard library |  4.6% |      61 |
| JIT              |  1.1% |      15 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|    % | Samples | Function                                                                                                                                                                    | Location    |
| ---: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 3.8% |      51 | `inflate_fast`                                                                                                                                                              | `<unknown>` |
| 2.0% |      27 | `SymbolTable::do_lookup(char const*, int, unsigned long)`                                                                                                                   | `<unknown>` |
| 1.7% |      23 | `InstanceKlass::find_method_index(Array<Method*> const*, Symbol const*, Symbol const*, Klass::OverpassLookupMode, Klass::StaticLookupMode, Klass::PrivateLookupMode)`       | `<unknown>` |
| 1.7% |      23 | `tlv_get_addr`                                                                                                                                                              | `<unknown>` |
| 1.6% |      22 | `PhaseChaitin::Split(unsigned int, ResourceArea*)`                                                                                                                          | `<unknown>` |
| 1.2% |      16 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>(DIR_Chunk* const&)` | `<unknown>` |
| 1.1% |      15 | `__psynch_cvwait`                                                                                                                                                           | `<unknown>` |
| 1.0% |      14 | `IndexSetIterator::advance_and_next()`                                                                                                                                      | `<unknown>` |
| 1.0% |      14 | `PhaseChaitin::build_ifg_physical(ResourceArea*)`                                                                                                                           | `<unknown>` |
| 0.9% |      12 | `__psynch_mutexwait`                                                                                                                                                        | `<unknown>` |
| 0.8% |      11 | `PhaseChaitin::elide_copy(Node*, int, Block*, Node_List*, Node_List*, bool)`                                                                                                | `<unknown>` |
| 0.8% |      11 | `pthread_jit_write_protect_np`                                                                                                                                              | `<unknown>` |
| 0.7% |      10 | `PhaseIdealLoop::build_loop_early(VectorSet&, Node_List&, Node_Stack&)`                                                                                                     | `<unknown>` |
| 0.7% |       9 | `PhaseChaitin::gather_lrg_masks(bool)`                                                                                                                                      | `<unknown>` |
| 0.7% |       9 | `Matcher::xform(Node*, int)`                                                                                                                                                | `<unknown>` |
| 0.7% |       9 | `sys_icache_invalidate`                                                                                                                                                     | `<unknown>` |
| 0.7% |       9 | `_platform_memset`                                                                                                                                                          | `<unknown>` |
| 0.6% |       8 | `PhaseIterGVN::add_users_to_worklist(Node*)`                                                                                                                                | `<unknown>` |
| 0.6% |       8 | `LIR_OpVisitState::visit(LIR_Op*)`                                                                                                                                          | `<unknown>` |
| 0.5% |       7 | `PhaseChaitin::Select()`                                                                                                                                                    | `<unknown>` |

#### Categories

##### Compiler

|    % | Samples | Function                                                                     | Location    |
| ---: | ------: | ---------------------------------------------------------------------------- | ----------- |
| 1.6% |      22 | `PhaseChaitin::Split(unsigned int, ResourceArea*)`                           | `<unknown>` |
| 1.0% |      14 | `IndexSetIterator::advance_and_next()`                                       | `<unknown>` |
| 1.0% |      14 | `PhaseChaitin::build_ifg_physical(ResourceArea*)`                            | `<unknown>` |
| 0.8% |      11 | `PhaseChaitin::elide_copy(Node*, int, Block*, Node_List*, Node_List*, bool)` | `<unknown>` |
| 0.7% |      10 | `PhaseIdealLoop::build_loop_early(VectorSet&, Node_List&, Node_Stack&)`      | `<unknown>` |
| 0.7% |       9 | `PhaseChaitin::gather_lrg_masks(bool)`                                       | `<unknown>` |
| 0.7% |       9 | `Matcher::xform(Node*, int)`                                                 | `<unknown>` |
| 0.6% |       8 | `PhaseIterGVN::add_users_to_worklist(Node*)`                                 | `<unknown>` |
| 0.6% |       8 | `LIR_OpVisitState::visit(LIR_Op*)`                                           | `<unknown>` |
| 0.5% |       7 | `PhaseChaitin::Select()`                                                     | `<unknown>` |
| 0.5% |       7 | `PhaseIdealLoop::build_loop_late_post_work(Node*, bool)`                     | `<unknown>` |
| 0.5% |       7 | `RelocIterator::set_limits(unsigned char*, unsigned char*)`                  | `<unknown>` |
| 0.5% |       7 | `MachNode::rematerialize() const`                                            | `<unknown>` |
| 0.5% |       7 | `LinearScanWalker::alloc_free_reg(Interval*)`                                | `<unknown>` |
| 0.5% |       7 | `LinearScanWalker::free_collect_inactive_fixed(Interval*)`                   | `<unknown>` |
| 0.4% |       6 | `ciObjectFactory::get_metadata(Metadata*)`                                   | `<unknown>` |
| 0.4% |       6 | `GraphBuilder::iterate_bytecodes_for_block(int)`                             | `<unknown>` |
| 0.4% |       6 | `Matcher::match_tree(Node const*)`                                           | `<unknown>` |
| 0.4% |       6 | `LinearScan::assign_reg_num(GrowableArray<LIR_Op*>*, IntervalWalker*)`       | `<unknown>` |
| 0.4% |       6 | `PhaseCFG::partial_latency_of_defs(Node*)`                                   | `<unknown>` |

##### Native

|    % | Samples | Function                                                                                                                                                                    | Location    |
| ---: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 3.8% |      51 | `inflate_fast`                                                                                                                                                              | `<unknown>` |
| 2.0% |      27 | `SymbolTable::do_lookup(char const*, int, unsigned long)`                                                                                                                   | `<unknown>` |
| 1.7% |      23 | `InstanceKlass::find_method_index(Array<Method*> const*, Symbol const*, Symbol const*, Klass::OverpassLookupMode, Klass::StaticLookupMode, Klass::PrivateLookupMode)`       | `<unknown>` |
| 1.7% |      23 | `tlv_get_addr`                                                                                                                                                              | `<unknown>` |
| 1.2% |      16 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>(DIR_Chunk* const&)` | `<unknown>` |
| 1.1% |      15 | `__psynch_cvwait`                                                                                                                                                           | `<unknown>` |
| 0.9% |      12 | `__psynch_mutexwait`                                                                                                                                                        | `<unknown>` |
| 0.8% |      11 | `pthread_jit_write_protect_np`                                                                                                                                              | `<unknown>` |
| 0.7% |       9 | `sys_icache_invalidate`                                                                                                                                                     | `<unknown>` |
| 0.7% |       9 | `_platform_memset`                                                                                                                                                          | `<unknown>` |
| 0.5% |       7 | `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>(G1CMOopClosure*, oopDesc*, Klass*)`                                           | `<unknown>` |
| 0.5% |       7 | `inflate_table`                                                                                                                                                             | `<unknown>` |
| 0.4% |       6 | `G1ParScanThreadState::do_copy_to_survivor_space(G1HeapRegionAttr, oopDesc*, markWord)`                                                                                     | `<unknown>` |
| 0.4% |       6 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>(G1RebuildRemSetClosure*, oopDesc*, Klass*)`                           | `<unknown>` |
| 0.4% |       6 | `UTF8::is_legal_utf8(unsigned char const*, int, bool)`                                                                                                                      | `<unknown>` |
| 0.4% |       6 | `fwd_copy_again`                                                                                                                                                            | `<unknown>` |
| 0.4% |       5 | `Arena::contains(void const*) const`                                                                                                                                        | `<unknown>` |
| 0.4% |       5 | `resource_allocate_bytes(unsigned long, AllocFailStrategy::AllocFailEnum)`                                                                                                  | `<unknown>` |
| 0.4% |       5 | `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>(G1ScanEvacuatedObjClosure*, oopDesc*, Klass*)`  | `<unknown>` |
| 0.4% |       5 | `updateBytesCRC32`                                                                                                                                                          | `<unknown>` |

##### Ours

|    % | Samples | Function                                                                                                                                                     | Location                                                                      |
| ---: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------- |
| 0.1% |       2 | `resolveVariableAccessAndSelectCandidateImpl(FirQualifiedAccessExpression, boolean, ResolutionMode, boolean, FirElement, Function1)`                         | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`                      |
| 0.1% |       2 | `fullyExpandedTypeWithSource(ConeClassLikeType, FirTypeRef, FirSession)`                                                                                     | `org.jetbrains.kotlin.fir.analysis.checkers.FirUpperBoundViolatedHelpersKt`   |
| 0.1% |       1 | `visitEnd()`                                                                                                                                                 | `org.jetbrains.org.objectweb.asm.util.CheckSignatureAdapter`                  |
| 0.1% |       1 | `newTypeCheckerState$default(TypeCheckerProviderContext, boolean, boolean, boolean, int, Object)`                                                            | `org.jetbrains.kotlin.types.model.TypeCheckerProviderContext`                 |
| 0.1% |       1 | `getExpectedReceiverType(Candidate)`                                                                                                                         | `org.jetbrains.kotlin.fir.resolve.calls.stages.CheckExtensionReceiver`        |
| 0.1% |       1 | `processCandidate(Candidate, ResolutionContext, boolean, boolean)`                                                                                           | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner`         |
| 0.1% |       1 | `getFileTypeByFile(VirtualFile)`                                                                                                                             | `com.intellij.core.CoreFileTypeRegistry`                                      |
| 0.1% |       1 | `getChildren(LighterASTNode, Ref)`                                                                                                                           | `com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure`                       |
| 0.1% |       1 | `reportErrors(LighterASTNode, FlyweightCapableTreeStructure, KotlinLightParser$LightTreeParsingErrorListener, Ref)`                                          | `org.jetbrains.kotlin.parsing.KotlinLightParser`                              |
| 0.1% |       1 | `setSource(KtSourceElement)`                                                                                                                                 | `org.jetbrains.kotlin.fir.declarations.builder.FirPropertyAccessorBuilder`    |
| 0.1% |       1 | `processCandidatesWithGivenImplicitReceiverAsValue(ImplicitReceiverValue, CallInfo, TowerGroup, Set, Set, Set, boolean, Continuation)`                       | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolveTask`            |
| 0.1% |       1 | `getHasExplicitReturnType(FirCallableSymbol)`                                                                                                                | `org.jetbrains.kotlin.fir.analysis.checkers.declaration.DeclarationUtilsKt`   |
| 0.1% |       1 | `visitDeclarationReference(IrDeclarationReference)`                                                                                                          | `org.jetbrains.kotlin.ir.visitors.IrElementTransformerVoid`                   |
| 0.1% |       1 | `transform(IrTransformer, Object)`                                                                                                                           | `org.jetbrains.kotlin.ir.expressions.IrExpression`                            |
| 0.1% |       1 | `shouldBeFlexible(TypeVariableMarker)`                                                                                                                       | `org.jetbrains.kotlin.fir.resolve.inference.ConeConstraintSystemUtilContext`  |
| 0.1% |       1 | `isContainedInInvariantOrContravariantPositionsWithDependencies(NewConstraintSystemImpl, FirSession, ConeTypeParameterBasedTypeVariable, FirCallableSymbol)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.CollectTypeVariableUsagesInfo` |
| 0.1% |       1 | `visitSimpleFunction(IrSimpleFunction)`                                                                                                                      | `org.jetbrains.kotlin.ir.visitors.IrElementTransformerVoid`                   |
| 0.1% |       1 | `analyzeInstruction(AbstractInsnNode, int, Frame, Frame, Frame)`                                                                                             | `org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer`               |
| 0.1% |       1 | `getContainingDeclaration(FirClassLikeSymbol, FirSession)`                                                                                                   | `org.jetbrains.kotlin.fir.resolve.DeclarationUtilsKt`                         |
| 0.1% |       1 | `isIteratorMethodCall(AbstractInsnNode)`                                                                                                                     | `org.jetbrains.kotlin.codegen.optimization.boxing.BoxingInterpreterKt`        |

##### Standard library

|    % | Samples | Function                                         | Location                                               |
| ---: | ------: | ------------------------------------------------ | ------------------------------------------------------ |
| 0.4% |       5 | `checkNotNullParameter(Object, String)`          | `kotlin.jvm.internal.Intrinsics`                       |
| 0.3% |       4 | `areEqual(Object, Object)`                       | `kotlin.jvm.internal.Intrinsics`                       |
| 0.3% |       4 | `sanitizeStackTrace(Throwable)`                  | `kotlin.jvm.internal.Intrinsics`                       |
| 0.1% |       1 | `findBootstrapClass(String)`                     | `java.lang.ClassLoader`                                |
| 0.1% |       1 | `boxingDescriptor(Wrapper)`                      | `java.lang.invoke.TypeConvertingMethodAdapter`         |
| 0.1% |       1 | `get(Object)`                                    | `jdk.internal.util.ReferencedKeyMap`                   |
| 0.1% |       1 | `hasNext()`                                      | `jdk.internal.jrtfs.JrtDirectoryStream$1`              |
| 0.1% |       1 | `<init>(String, String, LambdaForm, MethodType)` | `java.lang.invoke.InvokerBytecodeGenerator`            |
| 0.1% |       1 | `add(Object)`                                    | `java.util.HashSet`                                    |
| 0.1% |       1 | `get(Object)`                                    | `java.util.HashMap`                                    |
| 0.1% |       1 | `initialTryLock()`                               | `java.util.concurrent.locks.ReentrantLock$NonfairSync` |
| 0.1% |       1 | `equals(Object)`                                 | `java.lang.Object`                                     |
| 0.1% |       1 | `referencedTypes(ClassLoader, List)`             | `java.lang.reflect.Proxy$ProxyBuilder`                 |
| 0.1% |       1 | `put11(int, int)`                                | `jdk.internal.org.objectweb.asm.ByteVector`            |
| 0.1% |       1 | `defineClass(String, Resource)`                  | `java.net.URLClassLoader`                              |
| 0.1% |       1 | `<init>()`                                       | `java.util.HashMap`                                    |
| 0.1% |       1 | `getSecurityManager()`                           | `java.lang.System`                                     |
| 0.1% |       1 | `getNode(Object)`                                | `java.util.HashMap`                                    |
| 0.1% |       1 | `newInvokeSpecial(Object, Object)`               | `java.lang.invoke.DirectMethodHandle$Holder`           |
| 0.1% |       1 | `append(char)`                                   | `java.lang.StringBuilder`                              |

##### JIT

|    % | Samples | Function                   | Location    |
| ---: | ------: | -------------------------- | ----------- |
| 0.4% |       5 | `I2C/C2I adapters(0xb)`    | `<unknown>` |
| 0.3% |       4 | `I2C/C2I adapters(0xbb)`   | `<unknown>` |
| 0.2% |       3 | `itable stub`              | `<unknown>` |
| 0.1% |       1 | `zero_blocks`              | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xbbbb)` | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xbbb)`  | `<unknown>` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `inflate_fast` (`<unknown>`)

|      % | Samples | Caller                                          | Location    |
| -----: | ------: | ----------------------------------------------- | ----------- |
| 100.0% |      51 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `<unknown>` |

##### `SymbolTable::do_lookup(char const*, int, unsigned long)` (`<unknown>`)

|     % | Samples | Caller                                                                                                  | Location    |
| ----: | ------: | ------------------------------------------------------------------------------------------------------- | ----------- |
| 74.1% |      20 | `SymbolTable::lookup_only(char const*, int, unsigned int&)`                                             | `<unknown>` |
| 18.5% |       5 | `ClassFileParser::parse_constant_pool_entries(ClassFileStream const*, ConstantPool*, int, JavaThread*)` | `<unknown>` |
|  3.7% |       1 | `SymbolTable::new_symbol(char const*, int)`                                                             | `<unknown>` |
|  3.7% |       1 | `SymbolTable::new_symbol(Symbol const*, int, int)`                                                      | `<unknown>` |

##### `InstanceKlass::find_method_index(Array<Method*> const*, Symbol const*, Symbol const*, Klass::OverpassLookupMode, Klass::StaticLookupMode, Klass::PrivateLookupMode)` (`<unknown>`)

|     % | Samples | Caller                                                                                                                                                                | Location    |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 82.6% |      19 | `InstanceKlass::uncached_lookup_method(Symbol const*, Symbol const*, Klass::OverpassLookupMode, Klass::PrivateLookupMode) const`                                      | `<unknown>` |
| 13.0% |       3 | `InstanceKlass::find_method(Symbol const*, Symbol const*) const`                                                                                                      | `<unknown>` |
|  4.3% |       1 | `InstanceKlass::find_local_method(Array<Method*> const*, Symbol const*, Symbol const*, Klass::OverpassLookupMode, Klass::StaticLookupMode, Klass::PrivateLookupMode)` | `<unknown>` |

##### `tlv_get_addr` (`<unknown>`)

|    % | Samples | Caller                                                    | Location    |
| ---: | ------: | --------------------------------------------------------- | ----------- |
| 8.7% |       2 | `PhaseLive::compute(unsigned int)`                        | `<unknown>` |
| 8.7% |       2 | `ResourceBitMap::ResourceBitMap(unsigned long, bool)`     | `<unknown>` |
| 8.7% |       2 | `PhaseCFG::hoist_to_cheaper_block(Block*, Block*, Node*)` | `<unknown>` |
| 4.3% |       1 | `EncodePNode::Value(PhaseGVN*) const`                     | `<unknown>` |
| 4.3% |       1 | `ciTypeFlow::flow_types()`                                | `<unknown>` |

##### `PhaseChaitin::Split(unsigned int, ResourceArea*)` (`<unknown>`)

|      % | Samples | Caller                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |      22 | `PhaseChaitin::Register_Allocate()` | `<unknown>` |

##### `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>(DIR_Chunk* const&)` (`<unknown>`)

|     % | Samples | Caller                                                                                                                                                          | Location    |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 75.0% |      12 | `DebugInformationRecorder::describe_scope(int, methodHandle const&, ciMethod*, int, bool, bool, bool, bool, bool, bool, DebugToken*, DebugToken*, DebugToken*)` | `<unknown>` |
| 25.0% |       4 | `DebugInformationRecorder::serialize_scope_values(GrowableArray<ScopeValue*>*)`                                                                                 | `<unknown>` |

##### `__psynch_cvwait` (`<unknown>`)

|      % | Samples | Caller                                      | Location    |
| -----: | ------: | ------------------------------------------- | ----------- |
| 100.0% |      15 | `PlatformMonitor::wait(unsigned long long)` | `<unknown>` |

##### `IndexSetIterator::advance_and_next()` (`<unknown>`)

|     % | Samples | Caller                                                               | Location    |
| ----: | ------: | -------------------------------------------------------------------- | ----------- |
| 28.6% |       4 | `PhaseChaitin::build_ifg_physical(ResourceArea*)`                    | `<unknown>` |
| 21.4% |       3 | `PhaseIFG::re_insert(unsigned int)`                                  | `<unknown>` |
| 21.4% |       3 | `PhaseIFG::effective_degree(unsigned int) const`                     | `<unknown>` |
| 14.3% |       2 | `PhaseIFG::SquareUp()`                                               | `<unknown>` |
|  7.1% |       1 | `PhaseLive::add_liveout(Block_List&, Block*, IndexSet*, VectorSet&)` | `<unknown>` |

##### `PhaseChaitin::build_ifg_physical(ResourceArea*)` (`<unknown>`)

|      % | Samples | Caller                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |      14 | `PhaseChaitin::Register_Allocate()` | `<unknown>` |

##### `__psynch_mutexwait` (`<unknown>`)

|      % | Samples | Caller                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |      12 | `_pthread_mutex_firstfit_lock_slow` | `<unknown>` |

##### `PhaseChaitin::elide_copy(Node*, int, Block*, Node_List*, Node_List*, bool)` (`<unknown>`)

|      % | Samples | Caller                                       | Location    |
| -----: | ------: | -------------------------------------------- | ----------- |
| 100.0% |      11 | `PhaseChaitin::post_allocate_copy_removal()` | `<unknown>` |

##### `pthread_jit_write_protect_np` (`<unknown>`)

|     % | Samples | Caller                                                      | Location                                                                                           |
| ----: | ------: | ----------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| 27.3% |       3 | `jni_GetPrimitiveArrayCritical`                             | `<unknown>`                                                                                        |
| 18.2% |       2 | `JVM_IHashCode`                                             | `<unknown>`                                                                                        |
|  9.1% |       1 | `InterpreterRuntime::newarray(JavaThread*, BasicType, int)` | `<unknown>`                                                                                        |
|  9.1% |       1 | `simplifyTrivialInstructions(MethodNode)`                   | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer` |
|  9.1% |       1 | `getControlFlowAnalyserCheckers()`                          | `org.jetbrains.kotlin.fir.analysis.checkers.CommonDeclarationCheckers`                             |

##### `PhaseIdealLoop::build_loop_early(VectorSet&, Node_List&, Node_Stack&)` (`<unknown>`)

|      % | Samples | Caller                                 | Location    |
| -----: | ------: | -------------------------------------- | ----------- |
| 100.0% |      10 | `PhaseIdealLoop::build_and_optimize()` | `<unknown>` |

##### `PhaseChaitin::gather_lrg_masks(bool)` (`<unknown>`)

|      % | Samples | Caller                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |       9 | `PhaseChaitin::Register_Allocate()` | `<unknown>` |

##### `Matcher::xform(Node*, int)` (`<unknown>`)

|      % | Samples | Caller             | Location    |
| -----: | ------: | ------------------ | ----------- |
| 100.0% |       9 | `Matcher::match()` | `<unknown>` |

##### `sys_icache_invalidate` (`<unknown>`)

|     % | Samples | Caller                                                                                                                                                                                                                                                            | Location    |
| ----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 22.2% |       2 | `nmethod::oops_do_process_weak(nmethod::OopsDoProcessor*)`                                                                                                                                                                                                        | `<unknown>` |
| 22.2% |       2 | `nmethod::nmethod(Method*, CompilerType, int, int, int, CodeOffsets*, int, DebugInformationRecorder*, Dependencies*, CodeBuffer*, int, OopMapSet*, ExceptionHandlerTable*, ImplicitExceptionTable*, AbstractCompiler*, CompLevel, char*, int, JVMCINMethodData*)` | `<unknown>` |
| 22.2% |       2 | `CompiledIC::set_to_monomorphic(CompiledICInfo&)`                                                                                                                                                                                                                 | `<unknown>` |
| 11.1% |       1 | `CompiledDirectStaticCall::set_to_interpreted(methodHandle const&, unsigned char*)`                                                                                                                                                                               | `<unknown>` |
| 11.1% |       1 | `ICStub::finalize()`                                                                                                                                                                                                                                              | `<unknown>` |

##### `_platform_memset` (`<unknown>`)

|     % | Samples | Caller                                                     | Location    |
| ----: | ------: | ---------------------------------------------------------- | ----------- |
| 11.1% |       1 | `PhiNode::make(Node*, Node*, Type const*, TypePtr const*)` | `<unknown>` |
| 11.1% |       1 | `LinearScan::compute_local_live_sets()`                    | `<unknown>` |
| 11.1% |       1 | `ArenaBitMap::ArenaBitMap(Arena*, unsigned long, bool)`    | `<unknown>` |
| 11.1% |       1 | `BlockBegin::try_merge(ValueStack*, bool)`                 | `<unknown>` |
| 11.1% |       1 | `PhaseChaitin::Register_Allocate()`                        | `<unknown>` |

##### `PhaseIterGVN::add_users_to_worklist(Node*)` (`<unknown>`)

|     % | Samples | Caller                                                | Location    |
| ----: | ------: | ----------------------------------------------------- | ----------- |
| 37.5% |       3 | `PhaseIterGVN::transform_old(Node*)`                  | `<unknown>` |
| 37.5% |       3 | `PhaseIterGVN::PhaseIterGVN(PhaseGVN*)`               | `<unknown>` |
| 12.5% |       1 | `RegionNode::Ideal(PhaseGVN*, bool)`                  | `<unknown>` |
| 12.5% |       1 | `Node::set_req_X(unsigned int, Node*, PhaseIterGVN*)` | `<unknown>` |

##### `LIR_OpVisitState::visit(LIR_Op*)` (`<unknown>`)

|     % | Samples | Caller                                                                 | Location    |
| ----: | ------: | ---------------------------------------------------------------------- | ----------- |
| 50.0% |       4 | `LinearScan::build_intervals()`                                        | `<unknown>` |
| 25.0% |       2 | `LinearScan::compute_local_live_sets()`                                | `<unknown>` |
| 25.0% |       2 | `LinearScan::assign_reg_num(GrowableArray<LIR_Op*>*, IntervalWalker*)` | `<unknown>` |

##### `PhaseChaitin::Select()` (`<unknown>`)

|      % | Samples | Caller                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |       7 | `PhaseChaitin::Register_Allocate()` | `<unknown>` |

##### `PhaseIdealLoop::build_loop_late_post_work(Node*, bool)` (`<unknown>`)

|     % | Samples | Caller                                                                 | Location    |
| ----: | ------: | ---------------------------------------------------------------------- | ----------- |
| 85.7% |       6 | `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)` | `<unknown>` |
| 14.3% |       1 | `PhaseIdealLoop::build_and_optimize()`                                 | `<unknown>` |

##### `RelocIterator::set_limits(unsigned char*, unsigned char*)` (`<unknown>`)

|     % | Samples | Caller                                                                     | Location    |
| ----: | ------: | -------------------------------------------------------------------------- | ----------- |
| 71.4% |       5 | `trampoline_stub_Relocation::get_trampoline_for(unsigned char*, nmethod*)` | `<unknown>` |
| 14.3% |       1 | `CompiledIC::CompiledIC(CompiledMethod*, NativeCall*)`                     | `<unknown>` |
| 14.3% |       1 | `NativeMovConstReg::set_data(long)`                                        | `<unknown>` |

##### `MachNode::rematerialize() const` (`<unknown>`)

|     % | Samples | Caller                                             | Location    |
| ----: | ------: | -------------------------------------------------- | ----------- |
| 71.4% |       5 | `PhaseChaitin::Split(unsigned int, ResourceArea*)` | `<unknown>` |
| 28.6% |       2 | `PhaseChaitin::build_ifg_physical(ResourceArea*)`  | `<unknown>` |

##### `LinearScanWalker::alloc_free_reg(Interval*)` (`<unknown>`)

|      % | Samples | Caller                                 | Location    |
| -----: | ------: | -------------------------------------- | ----------- |
| 100.0% |       7 | `LinearScanWalker::activate_current()` | `<unknown>` |

##### `LinearScanWalker::free_collect_inactive_fixed(Interval*)` (`<unknown>`)

|      % | Samples | Caller                                        | Location    |
| -----: | ------: | --------------------------------------------- | ----------- |
| 100.0% |       7 | `LinearScanWalker::alloc_free_reg(Interval*)` | `<unknown>` |

##### `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>(G1CMOopClosure*, oopDesc*, Klass*)` (`<unknown>`)

|     % | Samples | Caller                                                           | Location    |
| ----: | ------: | ---------------------------------------------------------------- | ----------- |
| 85.7% |       6 | `void G1CMTask::process_grey_task_entry<true>(G1TaskQueueEntry)` | `<unknown>` |
| 14.3% |       1 | `G1CMTask::drain_local_queue(bool)`                              | `<unknown>` |

##### `inflate_table` (`<unknown>`)

|      % | Samples | Caller    | Location    |
| -----: | ------: | --------- | ----------- |
| 100.0% |       7 | `inflate` | `<unknown>` |

##### `ciObjectFactory::get_metadata(Metadata*)` (`<unknown>`)

|     % | Samples | Caller                                                                 | Location    |
| ----: | ------: | ---------------------------------------------------------------------- | ----------- |
| 33.3% |       2 | `ciObjectFactory::get(oopDesc*)`                                       | `<unknown>` |
| 16.7% |       1 | `ciBytecodeStream::get_method(bool&, ciSignature**)`                   | `<unknown>` |
| 16.7% |       1 | `ciReceiverTypeData::translate_receiver_data_from(ProfileData const*)` | `<unknown>` |
| 16.7% |       1 | `ciObjectFactory::create_new_metadata(Metadata*)`                      | `<unknown>` |
| 16.7% |       1 | `ciMethod::resolve_invoke(ciKlass*, ciKlass*, bool, bool)`             | `<unknown>` |

##### `GraphBuilder::iterate_bytecodes_for_block(int)` (`<unknown>`)

|      % | Samples | Caller                                   | Location    |
| -----: | ------: | ---------------------------------------- | ----------- |
| 100.0% |       6 | `GraphBuilder::iterate_all_blocks(bool)` | `<unknown>` |

##### `Matcher::match_tree(Node const*)` (`<unknown>`)

|      % | Samples | Caller                       | Location    |
| -----: | ------: | ---------------------------- | ----------- |
| 100.0% |       6 | `Matcher::xform(Node*, int)` | `<unknown>` |

##### `LinearScan::assign_reg_num(GrowableArray<LIR_Op*>*, IntervalWalker*)` (`<unknown>`)

|      % | Samples | Caller                         | Location    |
| -----: | ------: | ------------------------------ | ----------- |
| 100.0% |       6 | `LinearScan::do_linear_scan()` | `<unknown>` |

##### `PhaseCFG::partial_latency_of_defs(Node*)` (`<unknown>`)

|      % | Samples | Caller                           | Location    |
| -----: | ------: | -------------------------------- | ----------- |
| 100.0% |       6 | `PhaseCFG::global_code_motion()` | `<unknown>` |

##### `G1ParScanThreadState::do_copy_to_survivor_space(G1HeapRegionAttr, oopDesc*, markWord)` (`<unknown>`)

|     % | Samples | Caller                                                                         | Location    |
| ----: | ------: | ------------------------------------------------------------------------------ | ----------- |
| 83.3% |       5 | `G1ParScanThreadState::trim_queue_to_threshold(unsigned int)`                  | `<unknown>` |
| 16.7% |       1 | `void G1ParCopyClosure<(G1Barrier)0, false>::do_oop_work<oopDesc*>(oopDesc**)` | `<unknown>` |

##### `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>(G1RebuildRemSetClosure*, oopDesc*, Klass*)` (`<unknown>`)

|     % | Samples | Caller                                                                                                          | Location    |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------- | ----------- |
| 83.3% |       5 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object(HeapRegion*, HeapWordImpl**)`           | `<unknown>` |
| 16.7% |       1 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_region(HeapRegion*, HeapWordImpl**)` | `<unknown>` |

##### `UTF8::is_legal_utf8(unsigned char const*, int, bool)` (`<unknown>`)

|      % | Samples | Caller                                                                                                  | Location    |
| -----: | ------: | ------------------------------------------------------------------------------------------------------- | ----------- |
| 100.0% |       6 | `ClassFileParser::parse_constant_pool_entries(ClassFileStream const*, ConstantPool*, int, JavaThread*)` | `<unknown>` |

##### `fwd_copy_again` (`<unknown>`)

|     % | Samples | Caller                                                        | Location    |
| ----: | ------: | ------------------------------------------------------------- | ----------- |
| 66.7% |       4 | `G1ParScanThreadState::trim_queue_to_threshold(unsigned int)` | `<unknown>` |
| 33.3% |       2 | `CodeBuffer::copy_code_to(CodeBlob*)`                         | `<unknown>` |

##### `Arena::contains(void const*) const` (`<unknown>`)

|      % | Samples | Caller                       | Location    |
| -----: | ------: | ---------------------------- | ----------- |
| 100.0% |       5 | `Matcher::xform(Node*, int)` | `<unknown>` |

##### `resource_allocate_bytes(unsigned long, AllocFailStrategy::AllocFailEnum)` (`<unknown>`)

|     % | Samples | Caller                                                                                                                                                                               | Location    |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- |
| 20.0% |       1 | `CodeBuffer::finalize_oop_references(methodHandle const&)`                                                                                                                           | `<unknown>` |
| 20.0% |       1 | `XHandlers::XHandlers(ciMethod*)`                                                                                                                                                    | `<unknown>` |
| 20.0% |       1 | `ClassFileParser::copy_localvariable_table(ConstMethod const*, int, unsigned short*, void const**, int, unsigned short*, void const**, JavaThread*)`                                 | `<unknown>` |
| 20.0% |       1 | `LinearScanWalker::LinearScanWalker(LinearScan*, Interval*, Interval*)`                                                                                                              | `<unknown>` |
| 20.0% |       1 | `ClassVerifier::verify_invoke_instructions(RawBytecodeStream*, unsigned int, StackMapFrame*, bool, bool*, VerificationType, constantPoolHandle const&, StackMapTable*, JavaThread*)` | `<unknown>` |

##### `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>(G1ScanEvacuatedObjClosure*, oopDesc*, Klass*)` (`<unknown>`)

|     % | Samples | Caller                                                                                  | Location    |
| ----: | ------: | --------------------------------------------------------------------------------------- | ----------- |
| 80.0% |       4 | `G1ParScanThreadState::do_copy_to_survivor_space(G1HeapRegionAttr, oopDesc*, markWord)` | `<unknown>` |
| 20.0% |       1 | `G1ParScanThreadState::trim_queue_to_threshold(unsigned int)`                           | `<unknown>` |

##### `updateBytesCRC32` (`<unknown>`)

|      % | Samples | Caller                               | Location              |
| -----: | ------: | ------------------------------------ | --------------------- |
| 100.0% |       5 | `updateBytes(int, byte[], int, int)` | `java.util.zip.CRC32` |

##### `checkNotNullParameter(Object, String)` (`kotlin.jvm.internal.Intrinsics`)

|     % | Samples | Caller                                               | Location                                                                                          |
| ----: | ------: | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 20.0% |       1 | `<init>(int, int, Object[], MutabilityOwnership)`    | `kotlinx.collections.immutable.implementations.immutableMap.TrieNode`                             |
| 20.0% |       1 | `invoke(TowerGroup)`                                 | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager$1`                              |
| 20.0% |       1 | `visitMethod(int, String, String, String, String[])` | `org.jetbrains.kotlin.codegen.inline.InlineCodegenUtilsKt$getMethodNode$$inlined$getMethodNode$1` |
| 20.0% |       1 | `areEqual(IrClassifierSymbol, IrClassifierSymbol)`   | `org.jetbrains.kotlin.ir.symbols.FqNameEqualityChecker`                                           |
| 20.0% |       1 | `getFirProvider(FirSession)`                         | `org.jetbrains.kotlin.fir.resolve.providers.FirProviderKt`                                        |

##### `I2C/C2I adapters(0xb)` (`<unknown>`)

|     % | Samples | Caller                                                                                                                        | Location                                                                                       |
| ----: | ------: | ----------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| 20.0% |       1 | `joinFlow(Collection, Collection, boolean)`                                                                                   | `org.jetbrains.kotlin.fir.resolve.dfa.LogicSystem`                                             |
| 20.0% |       1 | `findFirstVariableForFixation(ConstraintSystemCompletionContext, List, List, ConstraintSystemCompletionMode, ConeKotlinType)` | `org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter`                         |
| 20.0% |       1 | `<init>(FirSession, PendingDiagnosticReporter)`                                                                               | `org.jetbrains.kotlin.fir.analysis.collectors.components.AbstractDiagnosticCollectorComponent` |
| 20.0% |       1 | `reversePositionIndex$CollectionsKt__ReversedViewsKt(List, int)`                                                              | `kotlin.collections.CollectionsKt__ReversedViewsKt`                                            |
| 20.0% |       1 | `isValidIdentifier(String)`                                                                                                   | `org.jetbrains.kotlin.name.Name`                                                               |

##### `areEqual(Object, Object)` (`kotlin.jvm.internal.Intrinsics`)

|     % | Samples | Caller                                                                               | Location                                                                         |
| ----: | ------: | ------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------- |
| 25.0% |       1 | `getValue(Object, Object)`                                                           | `org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache`                           |
| 25.0% |       1 | `hiddenStatusOfCall(FirCallableSymbol, boolean, boolean)`                            | `org.jetbrains.kotlin.fir.declarations.DeprecationUtilsKt`                       |
| 25.0% |       1 | `withNullability(ConeKotlinType, boolean, ConeTypeContext, ConeAttributes, boolean)` | `org.jetbrains.kotlin.fir.types.TypeUtilsKt`                                     |
| 25.0% |       1 | `convertType(LighterASTNode)`                                                        | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirDeclarationBuilder` |

##### `sanitizeStackTrace(Throwable)` (`kotlin.jvm.internal.Intrinsics`)

|      % | Samples | Caller                            | Location                         |
| -----: | ------: | --------------------------------- | -------------------------------- |
| 100.0% |       4 | `throwParameterIsNullNPE(String)` | `kotlin.jvm.internal.Intrinsics` |

##### `I2C/C2I adapters(0xbb)` (`<unknown>`)

|     % | Samples | Caller                                                                                                                                                                                                                                                               | Location                                                                                                           |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| 25.0% |       1 | `addPossibleNewConstraint(TypeVariableMarker, Constraint)`                                                                                                                                                                                                           | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector$TypeCheckerStateForConstraintInjector` |
| 25.0% |       1 | `closeTransaction()`                                                                                                                                                                                                                                                 | `org.jetbrains.kotlin.resolve.calls.inference.model.NewConstraintSystemImpl$TransactionState`                      |
| 25.0% |       1 | `<init>(FirSession, ScopeSession, ConeSubstitutor, ReturnTypeCalculator, ConeTypeApproximator, FirDataFlowAnalyzer, IntegerLiteralAndOperatorApproximationTransformer, FirSamResolver, BodyResolveContext, FirCallCompletionResultsWriterTransformer$Mode, boolean)` | `org.jetbrains.kotlin.fir.resolve.transformers.FirCallCompletionResultsWriterTransformer`                          |
| 25.0% |       1 | `preprocessNodeBeforeInline(MethodNode, Map)`                                                                                                                                                                                                                        | `org.jetbrains.kotlin.codegen.inline.MethodInliner`                                                                |

##### `itable stub` (`<unknown>`)

|     % | Samples | Caller                                                                                      | Location                                                         |
| ----: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| 33.3% |       1 | `lowerBoundIfFlexible(TypeSystemContext, KotlinTypeMarker)`                                 | `org.jetbrains.kotlin.types.model.TypeSystemContextContextualKt` |
| 33.3% |       1 | `unwrapStubTypeVariableConstructor(TypeSystemContext, TypeConstructorMarker)`               | `org.jetbrains.kotlin.types.model.TypeSystemContextContextualKt` |
| 33.3% |       1 | `hasNotNullSupertype(TypeCheckerState, RigidTypeMarker, TypeCheckerState$SupertypesPolicy)` | `org.jetbrains.kotlin.types.AbstractNullabilityChecker`          |

##### `resolveVariableAccessAndSelectCandidateImpl(FirQualifiedAccessExpression, boolean, ResolutionMode, boolean, FirElement, Function1)` (`org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`)

|      % | Samples | Caller                                                                                                                | Location                                                 |
| -----: | ------: | --------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| 100.0% |       2 | `resolveVariableAccessAndSelectCandidate(FirQualifiedAccessExpression, boolean, boolean, FirElement, ResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver` |

##### `fullyExpandedTypeWithSource(ConeClassLikeType, FirTypeRef, FirSession)` (`org.jetbrains.kotlin.fir.analysis.checkers.FirUpperBoundViolatedHelpersKt`)

|      % | Samples | Caller                                                                                                                                   | Location                                                                    |
| -----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| 100.0% |       2 | `checkUpperBoundViolated(CheckerContext, DiagnosticReporter, FirTypeRef, ConeClassLikeType, boolean, KtSourceElement, boolean, boolean)` | `org.jetbrains.kotlin.fir.analysis.checkers.FirUpperBoundViolatedHelpersKt` |

##### `visitEnd()` (`org.jetbrains.org.objectweb.asm.util.CheckSignatureAdapter`)

|      % | Samples | Caller            | Location                                                     |
| -----: | ------: | ----------------- | ------------------------------------------------------------ |
| 100.0% |       1 | `writeClassEnd()` | `org.jetbrains.kotlin.codegen.signature.BothSignatureWriter` |

##### `newTypeCheckerState$default(TypeCheckerProviderContext, boolean, boolean, boolean, int, Object)` (`org.jetbrains.kotlin.types.model.TypeCheckerProviderContext`)

|      % | Samples | Caller                                                                   | Location                                                          |
| -----: | ------: | ------------------------------------------------------------------------ | ----------------------------------------------------------------- |
| 100.0% |       1 | `commonSuperType(TypeSystemCommonSuperTypesContext, List, int, boolean)` | `org.jetbrains.kotlin.resolve.calls.NewCommonSuperTypeCalculator` |

##### `getExpectedReceiverType(Candidate)` (`org.jetbrains.kotlin.fir.resolve.calls.stages.CheckExtensionReceiver`)

|      % | Samples | Caller                                                           | Location                                                               |
| -----: | ------: | ---------------------------------------------------------------- | ---------------------------------------------------------------------- |
| 100.0% |       1 | `check(CheckerSink, ResolutionContext, Candidate, Continuation)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.CheckExtensionReceiver` |

##### `processCandidate(Candidate, ResolutionContext, boolean, boolean)` (`org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner`)

|      % | Samples | Caller                                                                                                         | Location                                                              |
| -----: | ------: | -------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| 100.0% |       1 | `processCandidate$default(ResolutionStageRunner, Candidate, ResolutionContext, boolean, boolean, int, Object)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner` |

##### `getFileTypeByFile(VirtualFile)` (`com.intellij.core.CoreFileTypeRegistry`)

|      % | Samples | Caller          | Location                               |
| -----: | ------: | --------------- | -------------------------------------- |
| 100.0% |       1 | `getFileType()` | `com.intellij.openapi.vfs.VirtualFile` |

##### `getChildren(LighterASTNode, Ref)` (`com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure`)

|      % | Samples | Caller                     | Location                                                |
| -----: | ------: | -------------------------- | ------------------------------------------------------- |
| 100.0% |       1 | `getChildren(Object, Ref)` | `com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure` |

##### `reportErrors(LighterASTNode, FlyweightCapableTreeStructure, KotlinLightParser$LightTreeParsingErrorListener, Ref)` (`org.jetbrains.kotlin.parsing.KotlinLightParser`)

|      % | Samples | Caller                                                                                                              | Location                                         |
| -----: | ------: | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| 100.0% |       1 | `reportErrors(LighterASTNode, FlyweightCapableTreeStructure, KotlinLightParser$LightTreeParsingErrorListener, Ref)` | `org.jetbrains.kotlin.parsing.KotlinLightParser` |

##### `setSource(KtSourceElement)` (`org.jetbrains.kotlin.fir.declarations.builder.FirPropertyAccessorBuilder`)

|      % | Samples | Caller                                                                                                                                                                                                 | Location                                                        |
| -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------- |
| 100.0% |       1 | `buildCopy(FirPropertyAccessor, FirModuleData, FirDeclarationOrigin, FirTypeRef, FirPropertySymbol, ConeSimpleKotlinType, ConeClassLikeLookupTag, FirProperty, KtSourceElement, Visibility, Modality)` | `org.jetbrains.kotlin.fir.scopes.impl.FirFakeOverrideGenerator` |

##### `processCandidatesWithGivenImplicitReceiverAsValue(ImplicitReceiverValue, CallInfo, TowerGroup, Set, Set, Set, boolean, Continuation)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolveTask`)

|      % | Samples | Caller                                                      | Location                                                           |
| -----: | ------: | ----------------------------------------------------------- | ------------------------------------------------------------------ |
| 100.0% |       1 | `runResolverForNoReceiver(CallInfo, boolean, Continuation)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolveTask` |

##### `getHasExplicitReturnType(FirCallableSymbol)` (`org.jetbrains.kotlin.fir.analysis.checkers.declaration.DeclarationUtilsKt`)

|      % | Samples | Caller                                                      | Location                                                                                  |
| -----: | ------: | ----------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| 100.0% |       1 | `check(CheckerContext, DiagnosticReporter, FirDeclaration)` | `org.jetbrains.kotlin.fir.analysis.checkers.declaration.FirAmbiguousAnonymousTypeChecker` |

##### `visitDeclarationReference(IrDeclarationReference)` (`org.jetbrains.kotlin.ir.visitors.IrElementTransformerVoid`)

|      % | Samples | Caller                                        | Location                                                    |
| -----: | ------: | --------------------------------------------- | ----------------------------------------------------------- |
| 100.0% |       1 | `visitMemberAccess(IrMemberAccessExpression)` | `org.jetbrains.kotlin.ir.visitors.IrElementTransformerVoid` |

##### `transform(IrTransformer, Object)` (`org.jetbrains.kotlin.ir.expressions.IrExpression`)

|      % | Samples | Caller                                          | Location                                   |
| -----: | ------: | ----------------------------------------------- | ------------------------------------------ |
| 100.0% |       1 | `transformInPlace(List, IrTransformer, Object)` | `org.jetbrains.kotlin.ir.util.TransformKt` |

##### `shouldBeFlexible(TypeVariableMarker)` (`org.jetbrains.kotlin.fir.resolve.inference.ConeConstraintSystemUtilContext`)

|      % | Samples | Caller                                                                               | Location                                                                         |
| -----: | ------: | ------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------- |
| 100.0% |       1 | `directWithVariable(ConstraintIncorporator$Context, TypeVariableMarker, Constraint)` | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintIncorporator` |

##### `isContainedInInvariantOrContravariantPositionsWithDependencies(NewConstraintSystemImpl, FirSession, ConeTypeParameterBasedTypeVariable, FirCallableSymbol)` (`org.jetbrains.kotlin.fir.resolve.calls.stages.CollectTypeVariableUsagesInfo`)

|      % | Samples | Caller                                                           | Location                                                                      |
| -----: | ------: | ---------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| 100.0% |       1 | `check(CheckerSink, ResolutionContext, Candidate, Continuation)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.CollectTypeVariableUsagesInfo` |

##### `visitSimpleFunction(IrSimpleFunction)` (`org.jetbrains.kotlin.ir.visitors.IrElementTransformerVoid`)

|      % | Samples | Caller                                        | Location                                                    |
| -----: | ------: | --------------------------------------------- | ----------------------------------------------------------- |
| 100.0% |       1 | `visitSimpleFunction(IrSimpleFunction, Void)` | `org.jetbrains.kotlin.ir.visitors.IrElementTransformerVoid` |

##### `analyzeInstruction(AbstractInsnNode, int, Frame, Frame, Frame)` (`org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer`)

|      % | Samples | Caller              | Location                                                        |
| -----: | ------: | ------------------- | --------------------------------------------------------------- |
| 100.0% |       1 | `analyzeMainLoop()` | `org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer` |

##### `getContainingDeclaration(FirClassLikeSymbol, FirSession)` (`org.jetbrains.kotlin.fir.resolve.DeclarationUtilsKt`)

|      % | Samples | Caller                                                          | Location                                              |
| -----: | ------: | --------------------------------------------------------------- | ----------------------------------------------------- |
| 100.0% |       1 | `getContainingDeclaration(FirClassLikeDeclaration, FirSession)` | `org.jetbrains.kotlin.fir.resolve.DeclarationUtilsKt` |

##### `isIteratorMethodCall(AbstractInsnNode)` (`org.jetbrains.kotlin.codegen.optimization.boxing.BoxingInterpreterKt`)

|      % | Samples | Caller                                  | Location                                                             |
| -----: | ------: | --------------------------------------- | -------------------------------------------------------------------- |
| 100.0% |       1 | `naryOperation(AbstractInsnNode, List)` | `org.jetbrains.kotlin.codegen.optimization.boxing.BoxingInterpreter` |

##### `findBootstrapClass(String)` (`java.lang.ClassLoader`)

|      % | Samples | Caller                             | Location                |
| -----: | ------: | ---------------------------------- | ----------------------- |
| 100.0% |       1 | `findBootstrapClassOrNull(String)` | `java.lang.ClassLoader` |

##### `boxingDescriptor(Wrapper)` (`java.lang.invoke.TypeConvertingMethodAdapter`)

|      % | Samples | Caller         | Location                                       |
| -----: | ------: | -------------- | ---------------------------------------------- |
| 100.0% |       1 | `box(Wrapper)` | `java.lang.invoke.TypeConvertingMethodAdapter` |

##### `get(Object)` (`jdk.internal.util.ReferencedKeyMap`)

|      % | Samples | Caller        | Location                             |
| -----: | ------: | ------------- | ------------------------------------ |
| 100.0% |       1 | `get(Object)` | `jdk.internal.util.ReferencedKeySet` |

##### `hasNext()` (`jdk.internal.jrtfs.JrtDirectoryStream$1`)

|      % | Samples | Caller                               | Location                                           |
| -----: | ------: | ------------------------------------ | -------------------------------------------------- |
| 100.0% |       1 | `toCollection(Iterable, Collection)` | `kotlin.collections.CollectionsKt___CollectionsKt` |

##### `<init>(String, String, LambdaForm, MethodType)` (`java.lang.invoke.InvokerBytecodeGenerator`)

|      % | Samples | Caller                                   | Location                                    |
| -----: | ------: | ---------------------------------------- | ------------------------------------------- |
| 100.0% |       1 | `<init>(String, LambdaForm, MethodType)` | `java.lang.invoke.InvokerBytecodeGenerator` |

##### `add(Object)` (`java.util.HashSet`)

|      % | Samples | Caller                               | Location                                 |
| -----: | ------: | ------------------------------------ | ---------------------------------------- |
| 100.0% |       1 | `toCollection(Object[], Collection)` | `kotlin.collections.ArraysKt___ArraysKt` |

##### `get(Object)` (`java.util.HashMap`)

|      % | Samples | Caller              | Location                                                 |
| -----: | ------: | ------------------- | -------------------------------------------------------- |
| 100.0% |       1 | `findClass(String)` | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |

##### `initialTryLock()` (`java.util.concurrent.locks.ReentrantLock$NonfairSync`)

|      % | Samples | Caller   | Location                                        |
| -----: | ------: | -------- | ----------------------------------------------- |
| 100.0% |       1 | `lock()` | `java.util.concurrent.locks.ReentrantLock$Sync` |

##### `equals(Object)` (`java.lang.Object`)

|      % | Samples | Caller                     | Location                         |
| -----: | ------: | -------------------------- | -------------------------------- |
| 100.0% |       1 | `areEqual(Object, Object)` | `kotlin.jvm.internal.Intrinsics` |

##### `referencedTypes(ClassLoader, List)` (`java.lang.reflect.Proxy$ProxyBuilder`)

|      % | Samples | Caller                      | Location                               |
| -----: | ------: | --------------------------- | -------------------------------------- |
| 100.0% |       1 | `<init>(ClassLoader, List)` | `java.lang.reflect.Proxy$ProxyBuilder` |

##### `put11(int, int)` (`jdk.internal.org.objectweb.asm.ByteVector`)

|      % | Samples | Caller                                                  | Location                                      |
| -----: | ------: | ------------------------------------------------------- | --------------------------------------------- |
| 100.0% |       1 | `visitMethodInsn(int, String, String, String, boolean)` | `jdk.internal.org.objectweb.asm.MethodWriter` |

##### `defineClass(String, Resource)` (`java.net.URLClassLoader`)

|      % | Samples | Caller  | Location                    |
| -----: | ------: | ------- | --------------------------- |
| 100.0% |       1 | `run()` | `java.net.URLClassLoader$1` |

##### `<init>()` (`java.util.HashMap`)

|      % | Samples | Caller        | Location                  |
| -----: | ------: | ------------- | ------------------------- |
| 100.0% |       1 | `<init>(Map)` | `java.util.LinkedHashMap` |

##### `getSecurityManager()` (`java.lang.System`)

|      % | Samples | Caller             | Location          |
| -----: | ------: | ------------------ | ----------------- |
| 100.0% |       1 | `getClassLoader()` | `java.lang.Class` |

##### `getNode(Object)` (`java.util.HashMap`)

|      % | Samples | Caller        | Location                  |
| -----: | ------: | ------------- | ------------------------- |
| 100.0% |       1 | `get(Object)` | `java.util.LinkedHashMap` |

##### `newInvokeSpecial(Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|      % | Samples | Caller                               | Location                           |
| -----: | ------: | ------------------------------------ | ---------------------------------- |
| 100.0% |       1 | `linkToTargetMethod(Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `append(char)` (`java.lang.StringBuilder`)

|      % | Samples | Caller                                         | Location                                          |
| -----: | ------: | ---------------------------------------------- | ------------------------------------------------- |
| 100.0% |       1 | `readSourceFileWithMapping(InputStreamReader)` | `org.jetbrains.kotlin.KtSourceFileLinesMappingKt` |

##### `zero_blocks` (`<unknown>`)

|      % | Samples | Caller        | Location                        |
| -----: | ------: | ------------- | ------------------------------- |
| 100.0% |       1 | `<init>(int)` | `java.io.ByteArrayOutputStream` |

##### `I2C/C2I adapters(0xbbbb)` (`<unknown>`)

|      % | Samples | Caller                                                                                  | Location                                  |
| -----: | ------: | --------------------------------------------------------------------------------------- | ----------------------------------------- |
| 100.0% |       1 | `setContainingClassForStaticMemberAttr(FirCallableDeclaration, ConeClassLikeLookupTag)` | `org.jetbrains.kotlin.fir.ClassMembersKt` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                                                                                           | Location                                                |
| ----: | ------: | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 67.4% |     900 | `_pthread_start`                                                                                   | `<unknown>`                                             |
| 67.4% |     900 | `thread_start`                                                                                     | `<unknown>`                                             |
| 67.3% |     899 | `Thread::call_run()`                                                                               | `<unknown>`                                             |
| 67.3% |     899 | `thread_native_entry(Thread*)`                                                                     | `<unknown>`                                             |
| 62.5% |     835 | `JavaThread::thread_main_inner()`                                                                  | `<unknown>`                                             |
| 62.4% |     833 | `CompileBroker::compiler_thread_loop()`                                                            | `<unknown>`                                             |
| 60.9% |     813 | `CompileBroker::invoke_compiler_on_method(CompileTask*)`                                           | `<unknown>`                                             |
| 42.5% |     568 | `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)`                                 | `<unknown>`                                             |
| 42.5% |     568 | `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)`                          | `<unknown>`                                             |
| 31.9% |     426 | `run(String[])`                                                                                    | `org.jetbrains.kotlin.preloading.Preloader`             |
| 31.9% |     426 | `main(String[])`                                                                                   | `org.jetbrains.kotlin.preloading.Preloader`             |
| 26.3% |     351 | `main(String[])`                                                                                   | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`  |
| 26.3% |     351 | `main(String[])`                                                                                   | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 26.3% |     351 | `invokeStatic(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$DMH.0x0000007001008000`    |
| 26.3% |     351 | `invoke(Object, Object, Object)`                                                                   | `java.lang.invoke.LambdaForm$MH.0x0000007001009400`     |
| 26.3% |     351 | `invokeExact_MT(Object, Object, Object, Object)`                                                   | `java.lang.invoke.Invokers$Holder`                      |
| 26.3% |     351 | `invokeImpl(Object, Object[])`                                                                     | `jdk.internal.reflect.DirectMethodHandleAccessor`       |
| 26.3% |     351 | `invoke(Object, Object[])`                                                                         | `jdk.internal.reflect.DirectMethodHandleAccessor`       |
| 26.3% |     351 | `invoke(Object, Object[])`                                                                         | `java.lang.reflect.Method`                              |
| 26.2% |     350 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

#### Categories

##### Compiler

|     % | Samples | Function                                                                                                | Location    |
| ----: | ------: | ------------------------------------------------------------------------------------------------------- | ----------- |
| 62.4% |     833 | `CompileBroker::compiler_thread_loop()`                                                                 | `<unknown>` |
| 60.9% |     813 | `CompileBroker::invoke_compiler_on_method(CompileTask*)`                                                | `<unknown>` |
| 42.5% |     568 | `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)`                                      | `<unknown>` |
| 42.5% |     568 | `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)`                               | `<unknown>` |
| 21.8% |     291 | `Compile::Code_Gen()`                                                                                   | `<unknown>` |
| 17.5% |     234 | `Compilation::compile_method()`                                                                         | `<unknown>` |
| 17.5% |     234 | `Compilation::Compilation(AbstractCompiler*, ciEnv*, ciMethod*, int, BufferBlob*, bool, DirectiveSet*)` | `<unknown>` |
| 16.0% |     214 | `Compilation::compile_java_method()`                                                                    | `<unknown>` |
| 14.7% |     196 | `Compile::Optimize()`                                                                                   | `<unknown>` |
| 12.1% |     162 | `PhaseChaitin::Register_Allocate()`                                                                     | `<unknown>` |
|  7.1% |      95 | `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)`                                                 | `<unknown>` |
|  6.7% |      89 | `Compilation::emit_lir()`                                                                               | `<unknown>` |
|  6.5% |      87 | `PhaseIdealLoop::build_and_optimize()`                                                                  | `<unknown>` |
|  6.5% |      87 | `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)`                                           | `<unknown>` |
|  5.8% |      77 | `Compilation::build_hir()`                                                                              | `<unknown>` |
|  5.7% |      76 | `LinearScan::do_linear_scan()`                                                                          | `<unknown>` |
|  4.3% |      57 | `GraphBuilder::GraphBuilder(Compilation*, IRScope*)`                                                    | `<unknown>` |
|  4.2% |      56 | `PhaseIterGVN::optimize()`                                                                              | `<unknown>` |
|  4.0% |      53 | `Matcher::match()`                                                                                      | `<unknown>` |
|  3.9% |      52 | `GraphBuilder::iterate_all_blocks(bool)`                                                                | `<unknown>` |

##### Native

|     % | Samples | Function                                                                                                                                       | Location    |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 67.4% |     900 | `_pthread_start`                                                                                                                               | `<unknown>` |
| 67.4% |     900 | `thread_start`                                                                                                                                 | `<unknown>` |
| 67.3% |     899 | `Thread::call_run()`                                                                                                                           | `<unknown>` |
| 67.3% |     899 | `thread_native_entry(Thread*)`                                                                                                                 | `<unknown>` |
| 62.5% |     835 | `JavaThread::thread_main_inner()`                                                                                                              | `<unknown>` |
| 17.6% |     235 | `Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)`                                                                        | `<unknown>` |
| 11.2% |     150 | `[tid=40195]`                                                                                                                                  | `<unknown>` |
|  5.2% |      69 | `Parse::Parse(JVMState*, ciMethod*, float)`                                                                                                    | `<unknown>` |
|  5.2% |      69 | `ParseGenerator::generate(JVMState*)`                                                                                                          | `<unknown>` |
|  5.1% |      68 | `Parse::do_all_blocks()`                                                                                                                       | `<unknown>` |
|  5.0% |      67 | `Parse::do_one_block()`                                                                                                                        | `<unknown>` |
|  4.7% |      63 | `Java_java_util_zip_Inflater_inflateBytesBytes`                                                                                                | `<unknown>` |
|  4.6% |      62 | `KlassFactory::create_from_stream(ClassFileStream*, Symbol*, ClassLoaderData*, ClassLoadInfo const&, JavaThread*)`                             | `<unknown>` |
|  4.6% |      61 | `Parse::do_call()`                                                                                                                             | `<unknown>` |
|  4.3% |      58 | `ClassFileParser::ClassFileParser(ClassFileStream*, Symbol*, ClassLoaderData*, ClassLoadInfo const*, ClassFileParser::Publicity, JavaThread*)` | `<unknown>` |
|  4.3% |      58 | `WorkerThread::run()`                                                                                                                          | `<unknown>` |
|  4.3% |      57 | `IRScope::IRScope(Compilation*, IRScope*, int, ciMethod*, int, bool)`                                                                          | `<unknown>` |
|  4.3% |      57 | `IR::IR(Compilation*, ciMethod*, int)`                                                                                                         | `<unknown>` |
|  4.3% |      57 | `SystemDictionary::resolve_class_from_stream(ClassFileStream*, Symbol*, Handle, ClassLoadInfo const&, JavaThread*)`                            | `<unknown>` |
|  4.3% |      57 | `jvm_define_class_common(char const*, _jobject*, signed char const*, int, _jobject*, char const*, JavaThread*)`                                | `<unknown>` |

##### Ours

|     % | Samples | Function                                                                                                                                      | Location                                                |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 31.9% |     426 | `run(String[])`                                                                                                                               | `org.jetbrains.kotlin.preloading.Preloader`             |
| 31.9% |     426 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.preloading.Preloader`             |
| 26.3% |     351 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`  |
| 26.3% |     351 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 26.2% |     350 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)`                                            | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 26.2% |     350 | `doMain(CLICompiler, String[])`                                                                                                               | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 26.1% |     349 | `exec(PrintStream, Services, MessageRenderer, String[])`                                                                                      | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 26.1% |     349 | `exec(PrintStream, MessageRenderer, String[])`                                                                                                | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 26.1% |     349 | `doMainNoExit(CLICompiler, String[], MessageRenderer)`                                                                                        | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 25.6% |     342 | `exec(MessageCollector, Services, CommonCompilerArguments)`                                                                                   | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 25.0% |     334 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)`                                                                         | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 25.0% |     334 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)`                                                                        | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 25.0% |     334 | `execImpl(MessageCollector, Services, CommonCompilerArguments)`                                                                               | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 24.9% |     333 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)`                                           | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 24.9% |     333 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 24.9% |     333 | `execute(CommonCompilerArguments, Services, MessageCollector)`                                                                                | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 24.9% |     332 | `runPhasedPipeline(ArgumentsPipelineArtifact)`                                                                                                | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 24.7% |     330 | `phaseBody(PipelineContext, PipelineArtifact)`                                                                                                | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`       |
| 24.7% |     330 | `phaseBody(LoggingContext, Object)`                                                                                                           | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`       |
| 24.7% |     330 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)`                                                                                    | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase` |

##### Standard library

|     % | Samples | Function                                                                                      | Location                                              |
| ----: | ------: | --------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| 26.3% |     351 | `invokeStatic(Object, Object)`                                                                | `java.lang.invoke.LambdaForm$DMH.0x0000007001008000`  |
| 26.3% |     351 | `invoke(Object, Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x0000007001009400`   |
| 26.3% |     351 | `invokeExact_MT(Object, Object, Object, Object)`                                              | `java.lang.invoke.Invokers$Holder`                    |
| 26.3% |     351 | `invokeImpl(Object, Object[])`                                                                | `jdk.internal.reflect.DirectMethodHandleAccessor`     |
| 26.3% |     351 | `invoke(Object, Object[])`                                                                    | `jdk.internal.reflect.DirectMethodHandleAccessor`     |
| 26.3% |     351 | `invoke(Object, Object[])`                                                                    | `java.lang.reflect.Method`                            |
|  5.2% |      69 | `loadClass(String, boolean)`                                                                  | `java.lang.ClassLoader`                               |
|  5.2% |      69 | `read(byte[], int, int)`                                                                      | `java.util.zip.ZipInputStream`                        |
|  5.1% |      68 | `read(byte[])`                                                                                | `java.io.FilterInputStream`                           |
|  4.8% |      64 | `read(byte[], int, int)`                                                                      | `java.util.zip.InflaterInputStream`                   |
|  4.8% |      64 | `inflate(byte[], int, int)`                                                                   | `java.util.zip.Inflater`                              |
|  4.7% |      63 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)`                                 | `java.util.zip.Inflater`                              |
|  4.6% |      62 | `defineClass(String, byte[], int, int, ProtectionDomain)`                                     | `java.lang.ClassLoader`                               |
|  4.6% |      61 | `defineClass(String, byte[], int, int)`                                                       | `java.lang.ClassLoader`                               |
|  4.4% |      59 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)`               | `java.lang.ClassLoader`                               |
|  3.5% |      47 | `resumeWith(Object)`                                                                          | `kotlin.coroutines.jvm.internal.BaseContinuationImpl` |
|  1.2% |      16 | `getValue()`                                                                                  | `kotlin.UnsafeLazyImpl`                               |
|  1.2% |      16 | `getValue()`                                                                                  | `kotlin.SafePublicationLazyImpl`                      |
|  1.0% |      13 | `getValue()`                                                                                  | `kotlin.SynchronizedLazyImpl`                         |
|  0.7% |       9 | `metafactory(MethodHandles$Lookup, String, MethodType, MethodType, MethodHandle, MethodType)` | `java.lang.invoke.LambdaMetafactory`                  |

##### JIT

|    % | Samples | Function                    | Location    |
| ---: | ------: | --------------------------- | ----------- |
| 0.4% |       6 | `I2C/C2I adapters(0xb)`     | `<unknown>` |
| 0.3% |       4 | `I2C/C2I adapters(0xbb)`    | `<unknown>` |
| 0.2% |       3 | `itable stub`               | `<unknown>` |
| 0.1% |       1 | `zero_blocks`               | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xbbbb)`  | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xbbb)`   | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xbbbbb)` | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `_pthread_start` (`<unknown>`)

|     % | Samples | Callee                         | Location    |
| ----: | ------: | ------------------------------ | ----------- |
| 99.9% |     899 | `thread_native_entry(Thread*)` | `<unknown>` |
|  0.1% |       1 | `ThreadJavaMain`               | `<unknown>` |

##### `thread_start` (`<unknown>`)

|      % | Samples | Callee           | Location    |
| -----: | ------: | ---------------- | ----------- |
| 100.0% |     900 | `_pthread_start` | `<unknown>` |

##### `Thread::call_run()` (`<unknown>`)

|     % | Samples | Callee                            | Location    |
| ----: | ------: | --------------------------------- | ----------- |
| 92.9% |     835 | `JavaThread::thread_main_inner()` | `<unknown>` |
|  6.5% |      58 | `WorkerThread::run()`             | `<unknown>` |
|  0.4% |       4 | `VMThread::run()`                 | `<unknown>` |
|  0.1% |       1 | `WatcherThread::run()`            | `<unknown>` |
|  0.1% |       1 | `ConcurrentGCThread::run()`       | `<unknown>` |

##### `thread_native_entry(Thread*)` (`<unknown>`)

|      % | Samples | Callee               | Location    |
| -----: | ------: | -------------------- | ----------- |
| 100.0% |     899 | `Thread::call_run()` | `<unknown>` |

##### `JavaThread::thread_main_inner()` (`<unknown>`)

|     % | Samples | Callee                                                          | Location    |
| ----: | ------: | --------------------------------------------------------------- | ----------- |
| 99.8% |     833 | `CompileBroker::compiler_thread_loop()`                         | `<unknown>` |
|  0.2% |       2 | `ServiceThread::service_thread_entry(JavaThread*, JavaThread*)` | `<unknown>` |

##### `CompileBroker::compiler_thread_loop()` (`<unknown>`)

|     % | Samples | Callee                                                   | Location    |
| ----: | ------: | -------------------------------------------------------- | ----------- |
| 97.6% |     813 | `CompileBroker::invoke_compiler_on_method(CompileTask*)` | `<unknown>` |
|  2.2% |      18 | `CompileQueue::get(CompilerThread*)`                     | `<unknown>` |
|  0.1% |       1 | `ciEnv::ciEnv(CompileTask*)`                             | `<unknown>` |
|  0.1% |       1 | `HandleMark::~HandleMark()`                              | `<unknown>` |

##### `CompileBroker::invoke_compiler_on_method(CompileTask*)` (`<unknown>`)

|     % | Samples | Callee                                                                    | Location    |
| ----: | ------: | ------------------------------------------------------------------------- | ----------- |
| 69.9% |     568 | `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` | `<unknown>` |
| 28.9% |     235 | `Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)`   | `<unknown>` |
|  0.5% |       4 | `CompilationLog::log_compile(JavaThread*, CompileTask*)`                  | `<unknown>` |
|  0.5% |       4 | `ciEnv::get_method_from_handle(Method*)`                                  | `<unknown>` |
|  0.1% |       1 | `ciEnv::~ciEnv()`                                                         | `<unknown>` |

##### `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` (`<unknown>`)

|     % | Samples | Callee                                                                                     | Location    |
| ----: | ------: | ------------------------------------------------------------------------------------------ | ----------- |
| 51.2% |     291 | `Compile::Code_Gen()`                                                                      | `<unknown>` |
| 34.5% |     196 | `Compile::Optimize()`                                                                      | `<unknown>` |
| 12.0% |      68 | `ParseGenerator::generate(JVMState*)`                                                      | `<unknown>` |
|  1.2% |       7 | `PhaseRemoveUseless::PhaseRemoveUseless(PhaseGVN*, Unique_Node_List&, Phase::PhaseNumber)` | `<unknown>` |
|  0.4% |       2 | `TypeFunc::make(ciMethod*)`                                                                | `<unknown>` |

##### `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` (`<unknown>`)

|      % | Samples | Callee                                                             | Location    |
| -----: | ------: | ------------------------------------------------------------------ | ----------- |
| 100.0% |     568 | `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` | `<unknown>` |

##### `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

|     % | Samples | Callee                                                                       | Location                                               |
| ----: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------------ |
| 82.4% |     351 | `invoke(Object, Object[])`                                                   | `java.lang.reflect.Method`                             |
| 17.4% |      74 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |
|  0.2% |       1 | `joining(CharSequence)`                                                      | `java.util.stream.Collectors`                          |

##### `main(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

|      % | Samples | Callee          | Location                                    |
| -----: | ------: | --------------- | ------------------------------------------- |
| 100.0% |     426 | `run(String[])` | `org.jetbrains.kotlin.preloading.Preloader` |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`)

|     % | Samples | Callee                          | Location                                                |
| ----: | ------: | ------------------------------- | ------------------------------------------------------- |
| 99.7% |     350 | `doMain(CLICompiler, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
|  0.3% |       1 | `<init>()`                      | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % | Samples | Callee           | Location                                               |
| -----: | ------: | ---------------- | ------------------------------------------------------ |
| 100.0% |     351 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001008000`)

|      % | Samples | Callee           | Location                                     |
| -----: | ------: | ---------------- | -------------------------------------------- |
| 100.0% |     351 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001009400`)

|      % | Samples | Callee                         | Location                                             |
| -----: | ------: | ------------------------------ | ---------------------------------------------------- |
| 100.0% |     351 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001008000` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Callee                           | Location                                            |
| -----: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% |     351 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001009400` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % | Samples | Callee                                           | Location                           |
| -----: | ------: | ------------------------------------------------ | ---------------------------------- |
| 100.0% |     351 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % | Samples | Callee                         | Location                                          |
| -----: | ------: | ------------------------------ | ------------------------------------------------- |
| 100.0% |     351 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

|      % | Samples | Callee                     | Location                                          |
| -----: | ------: | -------------------------- | ------------------------------------------------- |
| 100.0% |     351 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |
|   0.3% |       1 | `acquireMethodAccessor()`  | `java.lang.reflect.Method`                        |

##### `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|     % | Samples | Callee                                                 | Location                                                |
| ----: | ------: | ------------------------------------------------------ | ------------------------------------------------------- |
| 99.7% |     349 | `doMainNoExit(CLICompiler, String[], MessageRenderer)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
|  0.3% |       1 | `defaultMessageRenderer()`                             | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `doMain(CLICompiler, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % | Samples | Callee                                                                                             | Location                                                |
| -----: | ------: | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |     350 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `exec(PrintStream, Services, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|     % | Samples | Callee                                                                               | Location                                                                |
| ----: | ------: | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------- |
| 98.0% |     342 | `exec(MessageCollector, Services, CommonCompilerArguments)`                          | `org.jetbrains.kotlin.cli.common.CLICompiler`                           |
|  1.7% |       6 | `parseCommandLineArguments$default(List, CommonToolArguments, boolean, int, Object)` | `org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt` |
|  0.3% |       1 | `createArguments()`                                                                  | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                            |

##### `exec(PrintStream, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Callee                                                   | Location                                      |
| -----: | ------: | -------------------------------------------------------- | --------------------------------------------- |
| 100.0% |     349 | `exec(PrintStream, Services, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % | Samples | Callee                                         | Location                                      |
| -----: | ------: | ---------------------------------------------- | --------------------------------------------- |
| 100.0% |     349 | `exec(PrintStream, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `exec(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|     % | Samples | Callee                                                          | Location                                      |
| ----: | ------: | --------------------------------------------------------------- | --------------------------------------------- |
| 97.7% |     334 | `execImpl(MessageCollector, Services, CommonCompilerArguments)` | `org.jetbrains.kotlin.cli.common.CLICompiler` |
|  2.3% |       8 | `<clinit>()`                                                    | `org.jetbrains.kotlin.cli.common.ArgumentsKt` |

##### `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|     % | Samples | Callee                                                         | Location                                                |
| ----: | ------: | -------------------------------------------------------------- | ------------------------------------------------------- |
| 99.7% |     333 | `execute(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
|  0.3% |       1 | `getDefaultPerformanceManager()`                               | `org.jetbrains.kotlin.cli.common.CLICompiler`           |

##### `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % | Samples | Callee                                                                | Location                                     |
| -----: | ------: | --------------------------------------------------------------------- | -------------------------------------------- |
| 100.0% |     334 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Callee                                                                 | Location                                     |
| -----: | ------: | ---------------------------------------------------------------------- | -------------------------------------------- |
| 100.0% |     334 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|     % | Samples | Callee                                         | Location                                                            |
| ----: | ------: | ---------------------------------------------- | ------------------------------------------------------------------- |
| 99.7% |     332 | `runPhasedPipeline(ArgumentsPipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`             |
|  0.3% |       1 | `<init>(MessageCollector, boolean, boolean)`   | `org.jetbrains.kotlin.cli.common.messages.GroupingMessageCollector` |

##### `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Callee                                                                                              | Location                                                |
| -----: | ------: | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |     333 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `execute(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Callee                                                                                                                                        | Location                                                |
| -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |     333 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|     % | Samples | Callee                                                                          | Location                                                                    |
| ----: | ------: | ------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| 99.4% |     330 | `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)`            | `org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`                        |
|  0.6% |       2 | `reportToMessageCollector(BaseDiagnosticsCollector, MessageCollector, boolean)` | `org.jetbrains.kotlin.cli.common.fir.FirDiagnosticsCompilerResultsReporter` |

##### `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

|     % | Samples | Callee                           | Location                                                              |
| ----: | ------: | -------------------------------- | --------------------------------------------------------------------- |
| 66.1% |     218 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`      |
| 23.9% |      79 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`       |
|  8.8% |      29 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFir2IrPipelinePhase`        |
|  1.2% |       4 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmConfigurationPipelinePhase` |

##### `phaseBody(LoggingContext, Object)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

|      % | Samples | Callee                                         | Location                                          |
| -----: | ------: | ---------------------------------------------- | ------------------------------------------------- |
| 100.0% |     330 | `phaseBody(PipelineContext, PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase` |

##### `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`)

|      % | Samples | Callee                              | Location                                                         |
| -----: | ------: | ----------------------------------- | ---------------------------------------------------------------- |
| 100.0% |     330 | `phaseBody(LoggingContext, Object)` | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`                |
|   5.8% |      19 | `phaseBody(LoggingContext, Object)` | `org.jetbrains.kotlin.backend.common.phaser.FileLoweringPhase`   |
|   1.2% |       4 | `phaseBody(LoggingContext, Object)` | `org.jetbrains.kotlin.backend.common.phaser.ModuleLoweringPhase` |

##### `Compile::Code_Gen()` (`<unknown>`)

|     % | Samples | Callee                                                                               | Location    |
| ----: | ------: | ------------------------------------------------------------------------------------ | ----------- |
| 55.7% |     162 | `PhaseChaitin::Register_Allocate()`                                                  | `<unknown>` |
| 18.2% |      53 | `Matcher::match()`                                                                   | `<unknown>` |
| 12.7% |      37 | `PhaseCFG::do_global_code_motion()`                                                  | `<unknown>` |
| 11.0% |      32 | `PhaseOutput::Output()`                                                              | `<unknown>` |
|  1.4% |       4 | `PhaseOutput::install_code(ciMethod*, int, AbstractCompiler*, bool, bool, RTMState)` | `<unknown>` |

##### `Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` (`<unknown>`)

|     % | Samples | Callee                                                                                                  | Location    |
| ----: | ------: | ------------------------------------------------------------------------------------------------------- | ----------- |
| 99.6% |     234 | `Compilation::Compilation(AbstractCompiler*, ciEnv*, ciMethod*, int, BufferBlob*, bool, DirectiveSet*)` | `<unknown>` |
|  0.4% |       1 | `Chunk::next_chop()`                                                                                    | `<unknown>` |

##### `Compilation::compile_method()` (`<unknown>`)

|     % | Samples | Callee                                                                                                                                                                                         | Location    |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 91.5% |     214 | `Compilation::compile_java_method()`                                                                                                                                                           | `<unknown>` |
|  7.7% |      18 | `ciEnv::register_method(ciMethod*, int, CodeOffsets*, int, CodeBuffer*, int, OopMapSet*, ExceptionHandlerTable*, ImplicitExceptionTable*, AbstractCompiler*, bool, bool, bool, int, RTMState)` | `<unknown>` |
|  0.4% |       1 | `Arena::grow(unsigned long, AllocFailStrategy::AllocFailEnum)`                                                                                                                                 | `<unknown>` |
|  0.4% |       1 | `ciBaseObject::ident()`                                                                                                                                                                        | `<unknown>` |

##### `Compilation::Compilation(AbstractCompiler*, ciEnv*, ciMethod*, int, BufferBlob*, bool, DirectiveSet*)` (`<unknown>`)

|      % | Samples | Callee                          | Location    |
| -----: | ------: | ------------------------------- | ----------- |
| 100.0% |     234 | `Compilation::compile_method()` | `<unknown>` |

##### `Compilation::compile_java_method()` (`<unknown>`)

|     % | Samples | Callee                           | Location    |
| ----: | ------: | -------------------------------- | ----------- |
| 41.6% |      89 | `Compilation::emit_lir()`        | `<unknown>` |
| 36.0% |      77 | `Compilation::build_hir()`       | `<unknown>` |
| 21.0% |      45 | `Compilation::emit_code_body()`  | `<unknown>` |
|  1.4% |       3 | `ciMethod::ensure_method_data()` | `<unknown>` |

##### `Compile::Optimize()` (`<unknown>`)

|     % | Samples | Callee                                                  | Location    |
| ----: | ------: | ------------------------------------------------------- | ----------- |
| 25.5% |      50 | `Compile::optimize_loops(PhaseIterGVN&, LoopOptsMode)`  | `<unknown>` |
| 23.0% |      45 | `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` | `<unknown>` |
| 15.3% |      30 | `PhaseIterGVN::optimize()`                              | `<unknown>` |
| 10.2% |      20 | `PhaseCCP::PhaseCCP(PhaseIterGVN*)`                     | `<unknown>` |
|  8.2% |      16 | `PhaseMacroExpand::expand_macro_nodes()`                | `<unknown>` |

##### `PhaseChaitin::Register_Allocate()` (`<unknown>`)

|     % | Samples | Callee                                             | Location    |
| ----: | ------: | -------------------------------------------------- | ----------- |
| 21.6% |      35 | `PhaseChaitin::Split(unsigned int, ResourceArea*)` | `<unknown>` |
| 14.8% |      24 | `PhaseChaitin::build_ifg_physical(ResourceArea*)`  | `<unknown>` |
|  9.9% |      16 | `PhaseChaitin::gather_lrg_masks(bool)`             | `<unknown>` |
|  9.9% |      16 | `PhaseChaitin::post_allocate_copy_removal()`       | `<unknown>` |
|  8.6% |      14 | `PhaseLive::compute(unsigned int)`                 | `<unknown>` |

##### `[tid=40195]` (`<unknown>`)

|      % | Samples | Callee         | Location    |
| -----: | ------: | -------------- | ----------- |
| 100.0% |     150 | `thread_start` | `<unknown>` |

##### `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` (`<unknown>`)

|     % | Samples | Callee                                                        | Location    |
| ----: | ------: | ------------------------------------------------------------- | ----------- |
| 91.6% |      87 | `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` | `<unknown>` |
|  8.4% |       8 | `PhaseIterGVN::optimize()`                                    | `<unknown>` |

##### `Compilation::emit_lir()` (`<unknown>`)

|     % | Samples | Callee                                      | Location    |
| ----: | ------: | ------------------------------------------- | ----------- |
| 85.4% |      76 | `LinearScan::do_linear_scan()`              | `<unknown>` |
| 14.6% |      13 | `BlockList::iterate_forward(BlockClosure*)` | `<unknown>` |

##### `PhaseIdealLoop::build_and_optimize()` (`<unknown>`)

|     % | Samples | Callee                                                                  | Location    |
| ----: | ------: | ----------------------------------------------------------------------- | ----------- |
| 27.6% |      24 | `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)`  | `<unknown>` |
| 19.5% |      17 | `PhaseIdealLoop::split_if_with_blocks(VectorSet&, Node_Stack&)`         | `<unknown>` |
| 17.2% |      15 | `PhaseIdealLoop::build_loop_early(VectorSet&, Node_List&, Node_Stack&)` | `<unknown>` |
| 10.3% |       9 | `PhaseIdealLoop::Dominators()`                                          | `<unknown>` |
|  6.9% |       6 | `PhaseIdealLoop::build_loop_tree()`                                     | `<unknown>` |

##### `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` (`<unknown>`)

|      % | Samples | Callee                                 | Location    |
| -----: | ------: | -------------------------------------- | ----------- |
| 100.0% |      87 | `PhaseIdealLoop::build_and_optimize()` | `<unknown>` |

##### `Compilation::build_hir()` (`<unknown>`)

|     % | Samples | Callee                                            | Location    |
| ----: | ------: | ------------------------------------------------- | ----------- |
| 74.0% |      57 | `IR::IR(Compilation*, ciMethod*, int)`            | `<unknown>` |
|  9.1% |       7 | `IR::compute_use_counts()`                        | `<unknown>` |
|  5.2% |       4 | `GlobalValueNumbering::GlobalValueNumbering(IR*)` | `<unknown>` |
|  5.2% |       4 | `IR::eliminate_null_checks()`                     | `<unknown>` |
|  2.6% |       2 | `IR::split_critical_edges()`                      | `<unknown>` |

##### `LinearScan::do_linear_scan()` (`<unknown>`)

|     % | Samples | Callee                                                                 | Location    |
| ----: | ------: | ---------------------------------------------------------------------- | ----------- |
| 34.2% |      26 | `LinearScan::allocate_registers()`                                     | `<unknown>` |
| 21.1% |      16 | `LinearScan::assign_reg_num(GrowableArray<LIR_Op*>*, IntervalWalker*)` | `<unknown>` |
| 17.1% |      13 | `LinearScan::build_intervals()`                                        | `<unknown>` |
| 11.8% |       9 | `LinearScan::compute_local_live_sets()`                                | `<unknown>` |
|  3.9% |       3 | `LinearScan::eliminate_spill_moves()`                                  | `<unknown>` |

##### `Parse::Parse(JVMState*, ciMethod*, float)` (`<unknown>`)

|     % | Samples | Callee                      | Location    |
| ----: | ------: | --------------------------- | ----------- |
| 98.6% |      68 | `Parse::do_all_blocks()`    | `<unknown>` |
|  2.9% |       2 | `Parse::create_entry_map()` | `<unknown>` |
|  2.9% |       2 | `Parse::init_blocks()`      | `<unknown>` |
|  1.4% |       1 | `ciMethod::method_data()`   | `<unknown>` |
|  1.4% |       1 | `Parse::do_exits()`         | `<unknown>` |

##### `ParseGenerator::generate(JVMState*)` (`<unknown>`)

|      % | Samples | Callee                                      | Location    |
| -----: | ------: | ------------------------------------------- | ----------- |
| 100.0% |      69 | `Parse::Parse(JVMState*, ciMethod*, float)` | `<unknown>` |

##### `loadClass(String, boolean)` (`java.lang.ClassLoader`)

|     % | Samples | Callee                             | Location                                                 |
| ----: | ------: | ---------------------------------- | -------------------------------------------------------- |
| 89.9% |      62 | `findClass(String)`                | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |
|  8.7% |       6 | `findBootstrapClassOrNull(String)` | `java.lang.ClassLoader`                                  |
|  1.4% |       1 | `findClass(String)`                | `java.net.URLClassLoader`                                |
|  1.4% |       1 | `mach_absolute_time`               | `<unknown>`                                              |

##### `read(byte[], int, int)` (`java.util.zip.ZipInputStream`)

|     % | Samples | Callee                     | Location                            |
| ----: | ------: | -------------------------- | ----------------------------------- |
| 92.8% |      64 | `read(byte[], int, int)`   | `java.util.zip.InflaterInputStream` |
|  7.2% |       5 | `update(byte[], int, int)` | `java.util.zip.CRC32`               |

##### `Parse::do_all_blocks()` (`<unknown>`)

|     % | Samples | Callee                                    | Location    |
| ----: | ------: | ----------------------------------------- | ----------- |
| 98.5% |      67 | `Parse::do_one_block()`                   | `<unknown>` |
|  2.9% |       2 | `Parse::merge_common(Parse::Block*, int)` | `<unknown>` |

##### `read(byte[])` (`java.io.FilterInputStream`)

|      % | Samples | Callee                   | Location                       |
| -----: | ------: | ------------------------ | ------------------------------ |
| 100.0% |      68 | `read(byte[], int, int)` | `java.util.zip.ZipInputStream` |

##### `Parse::do_one_block()` (`<unknown>`)

|     % | Samples | Callee                                | Location    |
| ----: | ------: | ------------------------------------- | ----------- |
| 91.0% |      61 | `Parse::do_call()`                    | `<unknown>` |
| 16.4% |      11 | `Parse::do_field_access(bool, bool)`  | `<unknown>` |
| 13.4% |       9 | `Parse::do_one_bytecode()`            | `<unknown>` |
|  4.5% |       3 | `Parse::do_if(BoolTest::mask, Node*)` | `<unknown>` |
|  4.5% |       3 | `Parse::array_load(BasicType)`        | `<unknown>` |

##### `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`)

|     % | Samples | Callee                      | Location                            |
| ----: | ------: | --------------------------- | ----------------------------------- |
| 98.4% |      63 | `inflate(byte[], int, int)` | `java.util.zip.Inflater`            |
|  1.6% |       1 | `fill()`                    | `java.util.zip.InflaterInputStream` |

##### `inflate(byte[], int, int)` (`java.util.zip.Inflater`)

|     % | Samples | Callee                                                        | Location                 |
| ----: | ------: | ------------------------------------------------------------- | ------------------------ |
| 98.4% |      63 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` | `java.util.zip.Inflater` |
|  1.6% |       1 | `monitorexit_nofpu Runtime1 stub`                             | `<unknown>`              |

##### `Java_java_util_zip_Inflater_inflateBytesBytes` (`<unknown>`)

|     % | Samples | Callee                          | Location    |
| ----: | ------: | ------------------------------- | ----------- |
| 81.0% |      51 | `inflate_fast`                  | `<unknown>` |
| 14.3% |       9 | `inflate`                       | `<unknown>` |
|  4.8% |       3 | `jni_GetPrimitiveArrayCritical` | `<unknown>` |

##### `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`)

|      % | Samples | Callee                                          | Location    |
| -----: | ------: | ----------------------------------------------- | ----------- |
| 100.0% |      63 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `<unknown>` |

##### `KlassFactory::create_from_stream(ClassFileStream*, Symbol*, ClassLoaderData*, ClassLoadInfo const&, JavaThread*)` (`<unknown>`)

|     % | Samples | Callee                                                                                                                                         | Location    |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 93.5% |      58 | `ClassFileParser::ClassFileParser(ClassFileStream*, Symbol*, ClassLoaderData*, ClassLoadInfo const*, ClassFileParser::Publicity, JavaThread*)` | `<unknown>` |
|  6.5% |       4 | `ClassFileParser::create_instance_klass(bool, ClassInstanceInfo const&, JavaThread*)`                                                          | `<unknown>` |

##### `defineClass(String, byte[], int, int, ProtectionDomain)` (`java.lang.ClassLoader`)

|     % | Samples | Callee                                                                          | Location                |
| ----: | ------: | ------------------------------------------------------------------------------- | ----------------------- |
| 95.2% |      59 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader` |
|  3.2% |       2 | `postDefineClass(Class, ProtectionDomain)`                                      | `java.lang.ClassLoader` |
|  1.6% |       1 | `preDefineClass(String, ProtectionDomain)`                                      | `java.lang.ClassLoader` |

##### `Parse::do_call()` (`<unknown>`)

|     % | Samples | Callee                                                                                  | Location    |
| ----: | ------: | --------------------------------------------------------------------------------------- | ----------- |
| 65.6% |      40 | `PredictedCallGenerator::generate(JVMState*)`                                           | `<unknown>` |
| 59.0% |      36 | `ParseGenerator::generate(JVMState*)`                                                   | `<unknown>` |
| 23.0% |      14 | `Compile::call_generator(ciMethod*, int, bool, JVMState*, bool, float, ciKlass*, bool)` | `<unknown>` |
|  3.3% |       2 | `LibraryIntrinsic::generate(JVMState*)`                                                 | `<unknown>` |
|  3.3% |       2 | `ciBytecodeStream::get_method(bool&, ciSignature**)`                                    | `<unknown>` |

##### `defineClass(String, byte[], int, int)` (`java.lang.ClassLoader`)

|      % | Samples | Callee                                                    | Location                |
| -----: | ------: | --------------------------------------------------------- | ----------------------- |
| 100.0% |      61 | `defineClass(String, byte[], int, int, ProtectionDomain)` | `java.lang.ClassLoader` |

##### `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` (`java.lang.ClassLoader`)

|     % | Samples | Callee                                    | Location                                                 |
| ----: | ------: | ----------------------------------------- | -------------------------------------------------------- |
| 96.6% |      57 | `Java_java_lang_ClassLoader_defineClass1` | `<unknown>`                                              |
| 23.7% |      14 | `loadClass(String)`                       | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |

##### `ClassFileParser::ClassFileParser(ClassFileStream*, Symbol*, ClassLoaderData*, ClassLoadInfo const*, ClassFileParser::Publicity, JavaThread*)` (`<unknown>`)

|     % | Samples | Callee                                                                                            | Location    |
| ----: | ------: | ------------------------------------------------------------------------------------------------- | ----------- |
| 91.4% |      53 | `ClassFileParser::parse_stream(ClassFileStream const*, JavaThread*)`                              | `<unknown>` |
|  8.6% |       5 | `ClassFileParser::post_process_parsed_stream(ClassFileStream const*, ConstantPool*, JavaThread*)` | `<unknown>` |

##### `WorkerThread::run()` (`<unknown>`)

|     % | Samples | Callee                                          | Location    |
| ----: | ------: | ----------------------------------------------- | ----------- |
| 32.8% |      19 | `G1EvacuateRegionsBaseTask::work(unsigned int)` | `<unknown>` |
| 27.6% |      16 | `G1CMConcurrentMarkingTask::work(unsigned int)` | `<unknown>` |
| 24.1% |      14 | `G1RebuildRSAndScrubTask::work(unsigned int)`   | `<unknown>` |
|  5.2% |       3 | `semaphore_wait_trap`                           | `<unknown>` |
|  3.4% |       2 | `G1CMRootRegionScanTask::work(unsigned int)`    | `<unknown>` |

##### `GraphBuilder::GraphBuilder(Compilation*, IRScope*)` (`<unknown>`)

|     % | Samples | Callee                                                            | Location    |
| ----: | ------: | ----------------------------------------------------------------- | ----------- |
| 91.2% |      52 | `GraphBuilder::iterate_all_blocks(bool)`                          | `<unknown>` |
|  5.3% |       3 | `BlockBegin::iterate_preorder(BlockClosure*)`                     | `<unknown>` |
|  3.5% |       2 | `BlockListBuilder::BlockListBuilder(Compilation*, IRScope*, int)` | `<unknown>` |

##### `IRScope::IRScope(Compilation*, IRScope*, int, ciMethod*, int, bool)` (`<unknown>`)

|      % | Samples | Callee                                               | Location    |
| -----: | ------: | ---------------------------------------------------- | ----------- |
| 100.0% |      57 | `GraphBuilder::GraphBuilder(Compilation*, IRScope*)` | `<unknown>` |
|   1.8% |       1 | `XHandlers::XHandlers(ciMethod*)`                    | `<unknown>` |

##### `IR::IR(Compilation*, ciMethod*, int)` (`<unknown>`)

|      % | Samples | Callee                                                                | Location    |
| -----: | ------: | --------------------------------------------------------------------- | ----------- |
| 100.0% |      57 | `IRScope::IRScope(Compilation*, IRScope*, int, ciMethod*, int, bool)` | `<unknown>` |

##### `SystemDictionary::resolve_class_from_stream(ClassFileStream*, Symbol*, Handle, ClassLoadInfo const&, JavaThread*)` (`<unknown>`)

|     % | Samples | Callee                                                                                                             | Location    |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------ | ----------- |
| 96.5% |      55 | `KlassFactory::create_from_stream(ClassFileStream*, Symbol*, ClassLoaderData*, ClassLoadInfo const&, JavaThread*)` | `<unknown>` |
|  1.8% |       1 | `SystemDictionary::find_or_define_helper(Symbol*, Handle, InstanceKlass*, JavaThread*)`                            | `<unknown>` |
|  1.8% |       1 | `SystemDictionary::define_instance_class(InstanceKlass*, Handle, JavaThread*)`                                     | `<unknown>` |

##### `jvm_define_class_common(char const*, _jobject*, signed char const*, int, _jobject*, char const*, JavaThread*)` (`<unknown>`)

|      % | Samples | Callee                                                                                                              | Location    |
| -----: | ------: | ------------------------------------------------------------------------------------------------------------------- | ----------- |
| 100.0% |      57 | `SystemDictionary::resolve_class_from_stream(ClassFileStream*, Symbol*, Handle, ClassLoadInfo const&, JavaThread*)` | `<unknown>` |

##### `PhaseIterGVN::optimize()` (`<unknown>`)

|     % | Samples | Callee                               | Location    |
| ----: | ------: | ------------------------------------ | ----------- |
| 89.3% |      50 | `PhaseIterGVN::transform_old(Node*)` | `<unknown>` |
|  1.8% |       1 | `Node::Identity(PhaseGVN*)`          | `<unknown>` |
|  1.8% |       1 | `TypeInt::singleton() const`         | `<unknown>` |
|  1.8% |       1 | `BoolNode::hash() const`             | `<unknown>` |

##### `Matcher::match()` (`<unknown>`)

|     % | Samples | Callee                                                 | Location    |
| ----: | ------: | ------------------------------------------------------ | ----------- |
| 75.5% |      40 | `Matcher::xform(Node*, int)`                           | `<unknown>` |
|  9.4% |       5 | `Matcher::find_shared(Node*)`                          | `<unknown>` |
|  1.9% |       1 | `CatchNode::Opcode() const`                            | `<unknown>` |
|  1.9% |       1 | `Matcher::find_shared_post_visit(Node*, unsigned int)` | `<unknown>` |
|  1.9% |       1 | `ConNode::Opcode() const`                              | `<unknown>` |

##### `GraphBuilder::iterate_all_blocks(bool)` (`<unknown>`)

|     % | Samples | Callee                                           | Location    |
| ----: | ------: | ------------------------------------------------ | ----------- |
| 98.1% |      51 | `GraphBuilder::iterate_bytecodes_for_block(int)` | `<unknown>` |
|  1.9% |       1 | `_platform_memset`                               | `<unknown>` |

##### `resumeWith(Object)` (`kotlin.coroutines.jvm.internal.BaseContinuationImpl`)

|     % | Samples | Callee                  | Location                                                                                                      |
| ----: | ------: | ----------------------- | ------------------------------------------------------------------------------------------------------------- |
| 63.8% |      30 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask$processLevel$6`                         |
| 48.9% |      23 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner$processCandidate$1`                      |
| 14.9% |       7 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver$enqueueResolutionTasks$2`                      |
|  6.4% |       3 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver$enqueueResolutionTasks$1`                      |
|  4.3% |       2 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirInvokeResolveTowerExtension$enqueueResolverTasksForInvoke$3` |

##### `getValue()` (`kotlin.UnsafeLazyImpl`)

|     % | Samples | Callee     | Location                                                                                                                                                   |
| ----: | ------: | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 68.8% |      11 | `invoke()` | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver$$Lambda.0x00000070016828a0`                                                                        |
| 12.5% |       2 | `invoke()` | `org.jetbrains.kotlin.load.java.structure.impl.classFiles.BinaryClassSignatureParser$$Lambda.0x000000700160b4b8`                                           |
|  6.3% |       1 | `invoke()` | `org.jetbrains.kotlin.types.AbstractTypeApproximator$$Lambda.0x00000070016c3130`                                                                           |
|  6.3% |       1 | `invoke()` | `org.jetbrains.kotlin.types.AbstractTypeApproximator$$Lambda.0x000000700169b7d0`                                                                           |
|  6.3% |       1 | `invoke()` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformer$BodyResolveTransformerComponents$$Lambda.0x0000007001596e60` |

##### `getValue()` (`kotlin.SafePublicationLazyImpl`)

|     % | Samples | Callee     | Location                                                                                          |
| ----: | ------: | ---------- | ------------------------------------------------------------------------------------------------- |
| 50.0% |       8 | `invoke()` | `kotlin.reflect.jvm.internal.DescriptorKProperty$$Lambda$0`                                       |
| 25.0% |       4 | `invoke()` | `org.jetbrains.kotlin.fir.scopes.impl.FirClassDeclaredMemberScopeImpl$$Lambda.0x0000007001627d80` |
| 18.8% |       3 | `invoke()` | `org.jetbrains.kotlin.fir.java.FirLazyJavaDeclarationList$$Lambda.0x000000700160f098`             |
| 12.5% |       2 | `invoke()` | `org.jetbrains.kotlin.fir.scopes.impl.AbstractFirUseSiteMemberScope$$Lambda.0x000000700162f710`   |
|  6.3% |       1 | `invoke()` | `org.jetbrains.kotlin.fir.resolve.calls.ImplicitReceiverValue$$Lambda.0x00000070016d0238`         |

##### `getValue()` (`kotlin.SynchronizedLazyImpl`)

|     % | Samples | Callee     | Location                                                                             |
| ----: | ------: | ---------- | ------------------------------------------------------------------------------------ |
| 23.1% |       3 | `invoke()` | `org.jetbrains.kotlin.builtins.DefaultBuiltIns$$Lambda.0x0000007001755fe8`           |
| 15.4% |       2 | `invoke()` | `org.jetbrains.kotlin.cli.jvm.modules.CoreJrtVirtualFile$$Lambda.0x0000007001390000` |
| 15.4% |       2 | `invoke()` | `org.jetbrains.kotlin.fir.scopes.jvm.JvmMappedScope$$Lambda.0x000000700163b1a0`      |
|  7.7% |       1 | `invoke()` | `org.jetbrains.kotlin.fir.backend.Fir2IrTypeConverter$$Lambda.0x0000007001786a30`    |
|  7.7% |       1 | `invoke()` | `org.jetbrains.kotlin.fir.java.declarations.FirJavaClass$$Lambda.0x000000700160f940` |

##### `metafactory(MethodHandles$Lookup, String, MethodType, MethodType, MethodHandle, MethodType)` (`java.lang.invoke.LambdaMetafactory`)

|     % | Samples | Callee                                                                                                                   | Location                                       |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------- |
| 77.8% |       7 | `buildCallSite()`                                                                                                        | `java.lang.invoke.InnerClassLambdaMetafactory` |
| 22.2% |       2 | `<init>(MethodHandles$Lookup, MethodType, String, MethodType, MethodHandle, MethodType, boolean, Class[], MethodType[])` | `java.lang.invoke.InnerClassLambdaMetafactory` |

##### `I2C/C2I adapters(0xb)` (`<unknown>`)

|     % | Samples | Callee                                                           | Location    |
| ----: | ------: | ---------------------------------------------------------------- | ----------- |
| 16.7% |       1 | `SharedRuntime::fixup_callers_callsite(Method*, unsigned char*)` | `<unknown>` |

##### `I2C/C2I adapters(0xbbbbb)` (`<unknown>`)

|      % | Samples | Callee                                                           | Location    |
| -----: | ------: | ---------------------------------------------------------------- | ----------- |
| 100.0% |       1 | `SharedRuntime::fixup_callers_callsite(Method*, unsigned char*)` | `<unknown>` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ---: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 3.4% |      46 | `inflate_fast` ← `Java_java_util_zip_Inflater_inflateBytesBytes` ← `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`) ← `inflate(byte[], int, int)` ← `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`) ← `read(byte[], int, int)` (`java.util.zip.ZipInputStream`) ← `read(byte[])` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 1.3% |      17 | `PhaseChaitin::Split(unsigned int, ResourceArea*)` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 0.8% |      11 | `__psynch_cvwait` ← `PlatformMonitor::wait(unsigned long long)` ← `Monitor::wait(unsigned long long)` ← `CompileQueue::get(CompilerThread*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 0.7% |       9 | `PhaseChaitin::gather_lrg_masks(bool)` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 0.6% |       8 | `PhaseChaitin::elide_copy(Node*, int, Block*, Node_List*, Node_List*, bool)` ← `PhaseChaitin::post_allocate_copy_removal()` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.6% |       8 | `PhaseChaitin::build_ifg_physical(ResourceArea*)` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 0.5% |       7 | `inflate_table` ← `inflate` ← `Java_java_util_zip_Inflater_inflateBytesBytes` ← `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`) ← `inflate(byte[], int, int)` ← `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`) ← `read(byte[], int, int)` (`java.util.zip.ZipInputStream`) ← `read(byte[])` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 0.5% |       7 | `LinearScanWalker::alloc_free_reg(Interval*)` ← `LinearScanWalker::activate_current()` ← `IntervalWalker::walk_to(int)` ← `LinearScan::allocate_registers()` ← `LinearScan::do_linear_scan()` ← `Compilation::emit_lir()` ← `Compilation::compile_java_method()` ← `Compilation::compile_method()` ← `Compilation::Compilation(AbstractCompiler*, ciEnv*, ciMethod*, int, BufferBlob*, bool, DirectiveSet*)` ← `Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 0.5% |       7 | `LinearScanWalker::free_collect_inactive_fixed(Interval*)` ← `LinearScanWalker::alloc_free_reg(Interval*)` ← `LinearScanWalker::activate_current()` ← `IntervalWalker::walk_to(int)` ← `LinearScan::allocate_registers()` ← `LinearScan::do_linear_scan()` ← `Compilation::emit_lir()` ← `Compilation::compile_java_method()` ← `Compilation::compile_method()` ← `Compilation::Compilation(AbstractCompiler*, ciEnv*, ciMethod*, int, BufferBlob*, bool, DirectiveSet*)` ← `Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 0.4% |       6 | `PhaseChaitin::Select()` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 0.4% |       6 | `PhaseChaitin::build_ifg_physical(ResourceArea*)` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start` ← `[tid=40195]`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 0.4% |       6 | `LinearScan::assign_reg_num(GrowableArray<LIR_Op*>*, IntervalWalker*)` ← `LinearScan::do_linear_scan()` ← `Compilation::emit_lir()` ← `Compilation::compile_java_method()` ← `Compilation::compile_method()` ← `Compilation::Compilation(AbstractCompiler*, ciEnv*, ciMethod*, int, BufferBlob*, bool, DirectiveSet*)` ← `Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 0.4% |       6 | `Matcher::match_tree(Node const*)` ← `Matcher::xform(Node*, int)` ← `Matcher::match()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.4% |       6 | `PhaseIdealLoop::build_loop_early(VectorSet&, Node_List&, Node_Stack&)` ← `PhaseIdealLoop::build_and_optimize()` ← `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` ← `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` ← `Compile::Optimize()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 0.4% |       5 | `PhaseChaitin::build_ifg_virtual()` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 0.4% |       5 | `MachNode::rematerialize() const` ← `PhaseChaitin::Split(unsigned int, ResourceArea*)` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 0.4% |       5 | `Matcher::xform(Node*, int)` ← `Matcher::match()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start` ← `[tid=40195]`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.4% |       5 | `updateBytesCRC32` ← `updateBytes(int, byte[], int, int)` (`java.util.zip.CRC32`) ← `update(byte[], int, int)` ← `read(byte[], int, int)` (`java.util.zip.ZipInputStream`) ← `read(byte[])` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 0.4% |       5 | `LinearScan::build_intervals()` ← `LinearScan::do_linear_scan()` ← `Compilation::emit_lir()` ← `Compilation::compile_java_method()` ← `Compilation::compile_method()` ← `Compilation::Compilation(AbstractCompiler*, ciEnv*, ciMethod*, int, BufferBlob*, bool, DirectiveSet*)` ← `Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 0.4% |       5 | `OopMapSort::sort()` ← `ImmutableOopMap::ImmutableOopMap(OopMap const*)` ← `ImmutableOopMapBuilder::build()` ← `ImmutableOopMapSet::build_from(OopMapSet const*)` ← `CodeBlob::CodeBlob(char const*, CompilerType, CodeBlobLayout const&, CodeBuffer*, int, int, OopMapSet*, bool, bool)` ← `CompiledMethod::CompiledMethod(Method*, char const*, CompilerType, int, int, CodeBuffer*, int, int, OopMapSet*, bool, bool)` ← `nmethod::nmethod(Method*, CompilerType, int, int, int, CodeOffsets*, int, DebugInformationRecorder*, Dependencies*, CodeBuffer*, int, OopMapSet*, ExceptionHandlerTable*, ImplicitExceptionTable*, AbstractCompiler*, CompLevel, char*, int, JVMCINMethodData*)` ← `nmethod::new_nmethod(methodHandle const&, int, int, CodeOffsets*, int, DebugInformationRecorder*, Dependencies*, CodeBuffer*, int, OopMapSet*, ExceptionHandlerTable*, ImplicitExceptionTable*, AbstractCompiler*, CompLevel, char*, int, JVMCINMethodData*)` ← `ciEnv::register_method(ciMethod*, int, CodeOffsets*, int, CodeBuffer*, int, OopMapSet*, ExceptionHandlerTable*, ImplicitExceptionTable*, AbstractCompiler*, bool, bool, bool, int, RTMState)` ← `Compilation::compile_method()` ← `Compilation::Compilation(AbstractCompiler*, ciEnv*, ciMethod*, int, BufferBlob*, bool, DirectiveSet*)` ← `Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start` |

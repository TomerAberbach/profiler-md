# Sampling profile

Collected 1,276 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Compiler         | 45.1% |     576 |
| Native           | 38.9% |     497 |
| Ours             | 10.1% |     129 |
| Standard library |  4.9% |      63 |
| JIT              |  0.8% |      10 |
| Unknown          |  0.1% |       1 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|    % | Samples | Function                                                                                                                                                                    | Location    |
| ---: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 3.3% |      42 | `inflate_fast`                                                                                                                                                              | `<unknown>` |
| 1.7% |      22 | `tlv_get_addr`                                                                                                                                                              | `<unknown>` |
| 1.4% |      18 | `SymbolTable::do_lookup(char const*, int, unsigned long)`                                                                                                                   | `<unknown>` |
| 1.3% |      16 | `PhaseChaitin::Split(unsigned int, ResourceArea*)`                                                                                                                          | `<unknown>` |
| 1.2% |      15 | `PhaseChaitin::build_ifg_physical(ResourceArea*)`                                                                                                                           | `<unknown>` |
| 1.1% |      14 | `InstanceKlass::find_method_index(Array<Method*> const*, Symbol const*, Symbol const*, Klass::OverpassLookupMode, Klass::StaticLookupMode, Klass::PrivateLookupMode)`       | `<unknown>` |
| 1.1% |      14 | `PhaseChaitin::elide_copy(Node*, int, Block*, Node_List*, Node_List*, bool)`                                                                                                | `<unknown>` |
| 0.9% |      12 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>(DIR_Chunk* const&)` | `<unknown>` |
| 0.9% |      11 | `_platform_memset`                                                                                                                                                          | `<unknown>` |
| 0.8% |      10 | `pthread_jit_write_protect_np`                                                                                                                                              | `<unknown>` |
| 0.8% |      10 | `ciObjectFactory::get_metadata(Metadata*)`                                                                                                                                  | `<unknown>` |
| 0.8% |      10 | `PhaseAggressiveCoalesce::insert_copies(Matcher&)`                                                                                                                          | `<unknown>` |
| 0.8% |      10 | `__psynch_mutexwait`                                                                                                                                                        | `<unknown>` |
| 0.8% |      10 | `IndexSetIterator::advance_and_next()`                                                                                                                                      | `<unknown>` |
| 0.7% |       9 | `PhaseIdealLoop::build_loop_early(VectorSet&, Node_List&, Node_Stack&)`                                                                                                     | `<unknown>` |
| 0.7% |       9 | `G1ParScanThreadState::do_copy_to_survivor_space(G1HeapRegionAttr, oopDesc*, markWord)`                                                                                     | `<unknown>` |
| 0.7% |       9 | `PhaseLive::compute(unsigned int)`                                                                                                                                          | `<unknown>` |
| 0.6% |       8 | `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)`                                                                                                      | `<unknown>` |
| 0.6% |       8 | `inflate_table`                                                                                                                                                             | `<unknown>` |
| 0.6% |       8 | `inflate`                                                                                                                                                                   | `<unknown>` |

#### Categories

##### Compiler

|    % | Samples | Function                                                                     | Location    |
| ---: | ------: | ---------------------------------------------------------------------------- | ----------- |
| 1.3% |      16 | `PhaseChaitin::Split(unsigned int, ResourceArea*)`                           | `<unknown>` |
| 1.2% |      15 | `PhaseChaitin::build_ifg_physical(ResourceArea*)`                            | `<unknown>` |
| 1.1% |      14 | `PhaseChaitin::elide_copy(Node*, int, Block*, Node_List*, Node_List*, bool)` | `<unknown>` |
| 0.8% |      10 | `ciObjectFactory::get_metadata(Metadata*)`                                   | `<unknown>` |
| 0.8% |      10 | `PhaseAggressiveCoalesce::insert_copies(Matcher&)`                           | `<unknown>` |
| 0.8% |      10 | `IndexSetIterator::advance_and_next()`                                       | `<unknown>` |
| 0.7% |       9 | `PhaseIdealLoop::build_loop_early(VectorSet&, Node_List&, Node_Stack&)`      | `<unknown>` |
| 0.7% |       9 | `PhaseLive::compute(unsigned int)`                                           | `<unknown>` |
| 0.6% |       8 | `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)`       | `<unknown>` |
| 0.5% |       7 | `PhaseChaitin::gather_lrg_masks(bool)`                                       | `<unknown>` |
| 0.5% |       7 | `PhaseChaitin::post_allocate_copy_removal()`                                 | `<unknown>` |
| 0.5% |       7 | `LinearScanWalker::free_collect_inactive_fixed(Interval*)`                   | `<unknown>` |
| 0.5% |       7 | `Type::cmp(Type const*, Type const*)`                                        | `<unknown>` |
| 0.5% |       7 | `IntervalWalker::walk_to(IntervalState, int)`                                | `<unknown>` |
| 0.5% |       6 | `LinearScan::assign_reg_num(GrowableArray<LIR_Op*>*, IntervalWalker*)`       | `<unknown>` |
| 0.5% |       6 | `LIR_OpVisitState::visit(LIR_Op*)`                                           | `<unknown>` |
| 0.4% |       5 | `LinearScanWalker::alloc_free_reg(Interval*)`                                | `<unknown>` |
| 0.4% |       5 | `PhaseIdealLoop::build_loop_tree()`                                          | `<unknown>` |
| 0.4% |       5 | `ValueStack::values_do(ValueVisitor*)`                                       | `<unknown>` |
| 0.4% |       5 | `PhaseIFG::effective_degree(unsigned int) const`                             | `<unknown>` |

##### Native

|    % | Samples | Function                                                                                                                                                                    | Location    |
| ---: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 3.3% |      42 | `inflate_fast`                                                                                                                                                              | `<unknown>` |
| 1.7% |      22 | `tlv_get_addr`                                                                                                                                                              | `<unknown>` |
| 1.4% |      18 | `SymbolTable::do_lookup(char const*, int, unsigned long)`                                                                                                                   | `<unknown>` |
| 1.1% |      14 | `InstanceKlass::find_method_index(Array<Method*> const*, Symbol const*, Symbol const*, Klass::OverpassLookupMode, Klass::StaticLookupMode, Klass::PrivateLookupMode)`       | `<unknown>` |
| 0.9% |      12 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>(DIR_Chunk* const&)` | `<unknown>` |
| 0.9% |      11 | `_platform_memset`                                                                                                                                                          | `<unknown>` |
| 0.8% |      10 | `pthread_jit_write_protect_np`                                                                                                                                              | `<unknown>` |
| 0.8% |      10 | `__psynch_mutexwait`                                                                                                                                                        | `<unknown>` |
| 0.7% |       9 | `G1ParScanThreadState::do_copy_to_survivor_space(G1HeapRegionAttr, oopDesc*, markWord)`                                                                                     | `<unknown>` |
| 0.6% |       8 | `inflate_table`                                                                                                                                                             | `<unknown>` |
| 0.6% |       8 | `inflate`                                                                                                                                                                   | `<unknown>` |
| 0.6% |       8 | `G1CardSet::add_to_howl(void*, unsigned int, unsigned int, bool)`                                                                                                           | `<unknown>` |
| 0.5% |       7 | `SymbolTable::lookup_only(char const*, int, unsigned int&)`                                                                                                                 | `<unknown>` |
| 0.5% |       7 | `sys_icache_invalidate`                                                                                                                                                     | `<unknown>` |
| 0.5% |       7 | `__psynch_cvwait`                                                                                                                                                           | `<unknown>` |
| 0.5% |       7 | `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>(G1CMOopClosure*, oopDesc*, Klass*)`                                           | `<unknown>` |
| 0.5% |       6 | `fwd_copy_again`                                                                                                                                                            | `<unknown>` |
| 0.5% |       6 | `_platform_memmove`                                                                                                                                                         | `<unknown>` |
| 0.5% |       6 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>(G1RebuildRemSetClosure*, oopDesc*, Klass*)`                           | `<unknown>` |
| 0.5% |       6 | `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>(G1ScanEvacuatedObjClosure*, oopDesc*, Klass*)`  | `<unknown>` |

##### Ours

|    % | Samples | Function                                                                                                                                                                                                                                                                                                                                                              | Location                                                                                                       |
| ---: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| 0.2% |       2 | `transform(String, MethodNode)`                                                                                                                                                                                                                                                                                                                                       | `org.jetbrains.kotlin.codegen.optimization.ApiVersionCallsPreprocessingMethodTransformer`                      |
| 0.2% |       2 | `hashCode()`                                                                                                                                                                                                                                                                                                                                                          | `org.jetbrains.kotlin.fir.symbols.impl.ConeClassLikeLookupTagImpl`                                             |
| 0.1% |       1 | `sortAdaptableInstructionsForBoxedValues(MethodNode, RedundantBoxedValuesCollection)`                                                                                                                                                                                                                                                                                 | `org.jetbrains.kotlin.codegen.optimization.boxing.RedundantBoxingMethodTransformer`                            |
| 0.1% |       1 | `transformInplace(List, FirTransformer, Object)`                                                                                                                                                                                                                                                                                                                      | `org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`                                                       |
| 0.1% |       1 | `transform(FirTransformer, Object)`                                                                                                                                                                                                                                                                                                                                   | `org.jetbrains.kotlin.fir.declarations.FirFile`                                                                |
| 0.1% |       1 | `<init>(KtSourceElement, FirResolvePhase, FirModuleData, FirDeclarationOrigin, FirDeclarationAttributes, FirDeclarationStatus, FirTypeRef, DeprecationsProvider, ConeSimpleKotlinType, List, FirBlock, FirContractDescription, FirPropertyAccessorSymbol, FirPropertySymbol, boolean, List)`                                                                          | `org.jetbrains.kotlin.fir.declarations.impl.FirPropertyAccessorImpl`                                           |
| 0.1% |       1 | `getSymbol()`                                                                                                                                                                                                                                                                                                                                                         | `org.jetbrains.kotlin.fir.declarations.builder.FirReceiverParameterBuilder`                                    |
| 0.1% |       1 | `convertQualifiedExpression(LighterASTNode)`                                                                                                                                                                                                                                                                                                                          | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirExpressionBuilder`                                |
| 0.1% |       1 | `unwrapElement(FirExpression)`                                                                                                                                                                                                                                                                                                                                        | `org.jetbrains.kotlin.fir.resolve.dfa.VariableStorage`                                                         |
| 0.1% |       1 | `get(FirExpression, boolean, Function1, Function1)`                                                                                                                                                                                                                                                                                                                   | `org.jetbrains.kotlin.fir.resolve.dfa.VariableStorage`                                                         |
| 0.1% |       1 | `isInsidePrivateClass(FirBasedSymbol)`                                                                                                                                                                                                                                                                                                                                | `org.jetbrains.kotlin.fir.analysis.checkers.declaration.FirInlineDeclarationChecker$InlineFunctionBodyContext` |
| 0.1% |       1 | `visitWithCallOrAssignment(FirStatement)`                                                                                                                                                                                                                                                                                                                             | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor`                              |
| 0.1% |       1 | `visitCall(IrCall, BlockInfo)`                                                                                                                                                                                                                                                                                                                                        | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                                                   |
| 0.1% |       1 | `visitReturn(IrReturn, BlockInfo)`                                                                                                                                                                                                                                                                                                                                    | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                                                   |
| 0.1% |       1 | `accept(IrVisitor, Object)`                                                                                                                                                                                                                                                                                                                                           | `org.jetbrains.kotlin.ir.expressions.IrReturn`                                                                 |
| 0.1% |       1 | `toSymbol(ConeClassLikeLookupTag, FirSession)`                                                                                                                                                                                                                                                                                                                        | `org.jetbrains.kotlin.fir.resolve.ToSymbolUtilsKt`                                                             |
| 0.1% |       1 | `<init>(KtSourceElement, FirResolvePhase, FirModuleData, FirDeclarationOrigin, FirDeclarationAttributes, FirDeclarationStatus, boolean, FirTypeRef, FirReceiverParameter, DeprecationsProvider, DeserializedContainerSource, ConeSimpleKotlinType, List, List, FirBlock, FirContractDescription, Name, FirNamedFunctionSymbol, List, List)`                           | `org.jetbrains.kotlin.fir.declarations.impl.FirNamedFunctionImpl`                                              |
| 0.1% |       1 | `<init>(KtSourceElement, FirResolvePhase, FirModuleData, FirDeclarationOrigin, FirDeclarationAttributes, FirDeclarationStatus, boolean, FirTypeRef, FirReceiverParameter, DeprecationsProvider, DeserializedContainerSource, ConeSimpleKotlinType, List, List, FirBlock, FirContractDescription, Name, FirNamedFunctionSymbol, List, List, DefaultConstructorMarker)` | `org.jetbrains.kotlin.fir.declarations.impl.FirNamedFunctionImpl`                                              |
| 0.1% |       1 | `isProperTypeForFixation(ResultTypeResolver$Context, KotlinTypeMarker)`                                                                                                                                                                                                                                                                                               | `org.jetbrains.kotlin.resolve.calls.inference.components.ResultTypeResolver`                                   |
| 0.1% |       1 | `isSubtypeOfForSingleClassifierType(TypeCheckerState, TypeSystemContext, RigidTypeMarker, RigidTypeMarker)`                                                                                                                                                                                                                                                           | `org.jetbrains.kotlin.types.AbstractTypeChecker`                                                               |

##### Standard library

|    % | Samples | Function                                                         | Location                                                                                                |
| ---: | ------: | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| 0.4% |       5 | `checkNotNullParameter(Object, String)`                          | `kotlin.jvm.internal.Intrinsics`                                                                        |
| 0.3% |       4 | `sanitizeStackTrace(Throwable)`                                  | `kotlin.jvm.internal.Intrinsics`                                                                        |
| 0.2% |       2 | `equals(Object)`                                                 | `java.lang.String`                                                                                      |
| 0.2% |       2 | `generateConstructor()`                                          | `java.lang.invoke.InnerClassLambdaMetafactory`                                                          |
| 0.2% |       2 | `insertEntryAtIndex(Object[], int, Object, Object)`              | `kotlinx.collections.immutable.implementations.immutableMap.TrieNodeKt`                                 |
| 0.1% |       1 | `hash(Object)`                                                   | `java.util.HashMap`                                                                                     |
| 0.1% |       1 | `hasNext()`                                                      | `java.util.ArrayList$Itr`                                                                               |
| 0.1% |       1 | `put(ByteVector, int, boolean)`                                  | `jdk.internal.org.objectweb.asm.Label`                                                                  |
| 0.1% |       1 | `isEmpty()`                                                      | `kotlin.collections.AbstractCollection`                                                                 |
| 0.1% |       1 | `makeDirectories(String)`                                        | `jdk.internal.jimage.ImageReader$SharedImageReader`                                                     |
| 0.1% |       1 | `makeIdentity(Class)`                                            | `java.lang.invoke.MethodHandles`                                                                        |
| 0.1% |       1 | `newChannel(InputStream)`                                        | `java.nio.channels.Channels`                                                                            |
| 0.1% |       1 | `get(int)`                                                       | `java.util.ArrayList`                                                                                   |
| 0.1% |       1 | `grow(int)`                                                      | `java.util.ArrayList`                                                                                   |
| 0.1% |       1 | `<init>()`                                                       | `jdk.internal.org.objectweb.asm.ByteVector`                                                             |
| 0.1% |       1 | `getArgumentTypes(String)`                                       | `jdk.internal.org.objectweb.asm.Type`                                                                   |
| 0.1% |       1 | `iterator()`                                                     | `java.util.ArrayList`                                                                                   |
| 0.1% |       1 | `reversePositionIndex$CollectionsKt__ReversedViewsKt(List, int)` | `kotlin.collections.CollectionsKt__ReversedViewsKt`                                                     |
| 0.1% |       1 | `next()`                                                         | `kotlinx.collections.immutable.implementations.persistentOrderedMap.PersistentOrderedMapValuesIterator` |
| 0.1% |       1 | `asSequence(Iterable)`                                           | `kotlin.collections.CollectionsKt___CollectionsKt`                                                      |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `inflate_fast` (`<unknown>`)

|      % | Samples | Caller                                          | Location    |
| -----: | ------: | ----------------------------------------------- | ----------- |
| 100.0% |      42 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `<unknown>` |

##### `tlv_get_addr` (`<unknown>`)

|    % | Samples | Caller                                                                                                  | Location    |
| ---: | ------: | ------------------------------------------------------------------------------------------------------- | ----------- |
| 9.1% |       2 | `LinearScanWalker::LinearScanWalker(LinearScan*, Interval*, Interval*)`                                 | `<unknown>` |
| 4.5% |       1 | `PhaseChaitin::gather_lrg_masks(bool)`                                                                  | `<unknown>` |
| 4.5% |       1 | `ClassFileParser::parse_constant_pool_entries(ClassFileStream const*, ConstantPool*, int, JavaThread*)` | `<unknown>` |
| 4.5% |       1 | `Node::set_req_X(unsigned int, Node*, PhaseIterGVN*)`                                                   | `<unknown>` |
| 4.5% |       1 | `ciObjectFactory::get_metadata(Metadata*)`                                                              | `<unknown>` |

##### `SymbolTable::do_lookup(char const*, int, unsigned long)` (`<unknown>`)

|     % | Samples | Caller                                                                                                  | Location    |
| ----: | ------: | ------------------------------------------------------------------------------------------------------- | ----------- |
| 66.7% |      12 | `SymbolTable::lookup_only(char const*, int, unsigned int&)`                                             | `<unknown>` |
| 22.2% |       4 | `SymbolTable::new_symbol(char const*, int)`                                                             | `<unknown>` |
| 11.1% |       2 | `ClassFileParser::parse_constant_pool_entries(ClassFileStream const*, ConstantPool*, int, JavaThread*)` | `<unknown>` |

##### `PhaseChaitin::Split(unsigned int, ResourceArea*)` (`<unknown>`)

|      % | Samples | Caller                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |      16 | `PhaseChaitin::Register_Allocate()` | `<unknown>` |

##### `PhaseChaitin::build_ifg_physical(ResourceArea*)` (`<unknown>`)

|      % | Samples | Caller                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |      15 | `PhaseChaitin::Register_Allocate()` | `<unknown>` |

##### `InstanceKlass::find_method_index(Array<Method*> const*, Symbol const*, Symbol const*, Klass::OverpassLookupMode, Klass::StaticLookupMode, Klass::PrivateLookupMode)` (`<unknown>`)

|     % | Samples | Caller                                                                                                                                               | Location    |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 78.6% |      11 | `InstanceKlass::uncached_lookup_method(Symbol const*, Symbol const*, Klass::OverpassLookupMode, Klass::PrivateLookupMode) const`                     | `<unknown>` |
|  7.1% |       1 | `InstanceKlass::find_local_method(Symbol const*, Symbol const*, Klass::OverpassLookupMode, Klass::StaticLookupMode, Klass::PrivateLookupMode) const` | `<unknown>` |
|  7.1% |       1 | `InstanceKlass::find_method(Symbol const*, Symbol const*) const`                                                                                     | `<unknown>` |
|  7.1% |       1 | `InstanceKlass::find_method(Array<Method*> const*, Symbol const*, Symbol const*)`                                                                    | `<unknown>` |

##### `PhaseChaitin::elide_copy(Node*, int, Block*, Node_List*, Node_List*, bool)` (`<unknown>`)

|      % | Samples | Caller                                       | Location    |
| -----: | ------: | -------------------------------------------- | ----------- |
| 100.0% |      14 | `PhaseChaitin::post_allocate_copy_removal()` | `<unknown>` |

##### `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>(DIR_Chunk* const&)` (`<unknown>`)

|     % | Samples | Caller                                                                                                                                                          | Location    |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 66.7% |       8 | `DebugInformationRecorder::describe_scope(int, methodHandle const&, ciMethod*, int, bool, bool, bool, bool, bool, bool, DebugToken*, DebugToken*, DebugToken*)` | `<unknown>` |
| 33.3% |       4 | `DebugInformationRecorder::serialize_scope_values(GrowableArray<ScopeValue*>*)`                                                                                 | `<unknown>` |

##### `_platform_memset` (`<unknown>`)

|     % | Samples | Caller                                                                 | Location    |
| ----: | ------: | ---------------------------------------------------------------------- | ----------- |
| 18.2% |       2 | `MarkBitMap::do_clear(MemRegion, bool)`                                | `<unknown>` |
| 18.2% |       2 | `ConstantPool::allocate(ClassLoaderData*, int, JavaThread*)`           | `<unknown>` |
|  9.1% |       1 | `Unique_Node_List::push(Node*)`                                        | `<unknown>` |
|  9.1% |       1 | `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)` | `<unknown>` |
|  9.1% |       1 | `Optimizer::eliminate_null_checks()`                                   | `<unknown>` |

##### `pthread_jit_write_protect_np` (`<unknown>`)

|     % | Samples | Caller                                                   | Location    |
| ----: | ------: | -------------------------------------------------------- | ----------- |
| 20.0% |       2 | `jni_GetPrimitiveArrayCritical`                          | `<unknown>` |
| 10.0% |       1 | `JVM_IHashCode`                                          | `<unknown>` |
| 10.0% |       1 | `jni_GetStringLength`                                    | `<unknown>` |
| 10.0% |       1 | `Unsafe_AllocateInstance(JNIEnv_*, _jobject*, _jclass*)` | `<unknown>` |
| 10.0% |       1 | `jni_ReleasePrimitiveArrayCritical`                      | `<unknown>` |

##### `ciObjectFactory::get_metadata(Metadata*)` (`<unknown>`)

|     % | Samples | Caller                                                                                    | Location    |
| ----: | ------: | ----------------------------------------------------------------------------------------- | ----------- |
| 30.0% |       3 | `ciBytecodeStream::get_method(bool&, ciSignature**)`                                      | `<unknown>` |
| 30.0% |       3 | `ciEnv::get_klass_by_index_impl(constantPoolHandle const&, int, bool&, ciInstanceKlass*)` | `<unknown>` |
| 10.0% |       1 | `ciField::initialize_from(fieldDescriptor*)`                                              | `<unknown>` |
| 10.0% |       1 | `ciMethod::resolve_invoke(ciKlass*, ciKlass*, bool, bool)`                                | `<unknown>` |
| 10.0% |       1 | `ciBytecodeStream::get_declared_method_holder()`                                          | `<unknown>` |

##### `PhaseAggressiveCoalesce::insert_copies(Matcher&)` (`<unknown>`)

|      % | Samples | Caller                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |      10 | `PhaseChaitin::Register_Allocate()` | `<unknown>` |

##### `__psynch_mutexwait` (`<unknown>`)

|      % | Samples | Caller                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |      10 | `_pthread_mutex_firstfit_lock_slow` | `<unknown>` |

##### `IndexSetIterator::advance_and_next()` (`<unknown>`)

|     % | Samples | Caller                                                               | Location    |
| ----: | ------: | -------------------------------------------------------------------- | ----------- |
| 70.0% |       7 | `PhaseChaitin::build_ifg_physical(ResourceArea*)`                    | `<unknown>` |
| 10.0% |       1 | `PhaseLive::add_liveout(Block_List&, Block*, IndexSet*, VectorSet&)` | `<unknown>` |
| 10.0% |       1 | `PhaseChaitin::Simplify()`                                           | `<unknown>` |
| 10.0% |       1 | `PhaseIFG::effective_degree(unsigned int) const`                     | `<unknown>` |

##### `PhaseIdealLoop::build_loop_early(VectorSet&, Node_List&, Node_Stack&)` (`<unknown>`)

|      % | Samples | Caller                                 | Location    |
| -----: | ------: | -------------------------------------- | ----------- |
| 100.0% |       9 | `PhaseIdealLoop::build_and_optimize()` | `<unknown>` |

##### `G1ParScanThreadState::do_copy_to_survivor_space(G1HeapRegionAttr, oopDesc*, markWord)` (`<unknown>`)

|     % | Samples | Caller                                                                                                                                | Location    |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 88.9% |       8 | `G1ParScanThreadState::trim_queue_to_threshold(unsigned int)`                                                                         | `<unknown>` |
| 11.1% |       1 | `G1ParScanThreadState::steal_and_trim_queue(GenericTaskQueueSet<OverflowTaskQueue<ScannerTask, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>*)` | `<unknown>` |

##### `PhaseLive::compute(unsigned int)` (`<unknown>`)

|      % | Samples | Caller                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |       9 | `PhaseChaitin::Register_Allocate()` | `<unknown>` |

##### `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)` (`<unknown>`)

|      % | Samples | Caller                                 | Location    |
| -----: | ------: | -------------------------------------- | ----------- |
| 100.0% |       8 | `PhaseIdealLoop::build_and_optimize()` | `<unknown>` |

##### `inflate_table` (`<unknown>`)

|      % | Samples | Caller    | Location    |
| -----: | ------: | --------- | ----------- |
| 100.0% |       8 | `inflate` | `<unknown>` |

##### `inflate` (`<unknown>`)

|      % | Samples | Caller                                          | Location    |
| -----: | ------: | ----------------------------------------------- | ----------- |
| 100.0% |       8 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `<unknown>` |

##### `G1CardSet::add_to_howl(void*, unsigned int, unsigned int, bool)` (`<unknown>`)

|      % | Samples | Caller                                                  | Location    |
| -----: | ------: | ------------------------------------------------------- | ----------- |
| 100.0% |       8 | `G1CardSet::add_card(unsigned int, unsigned int, bool)` | `<unknown>` |

##### `PhaseChaitin::gather_lrg_masks(bool)` (`<unknown>`)

|      % | Samples | Caller                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |       7 | `PhaseChaitin::Register_Allocate()` | `<unknown>` |

##### `PhaseChaitin::post_allocate_copy_removal()` (`<unknown>`)

|      % | Samples | Caller                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |       7 | `PhaseChaitin::Register_Allocate()` | `<unknown>` |

##### `LinearScanWalker::free_collect_inactive_fixed(Interval*)` (`<unknown>`)

|      % | Samples | Caller                                        | Location    |
| -----: | ------: | --------------------------------------------- | ----------- |
| 100.0% |       7 | `LinearScanWalker::alloc_free_reg(Interval*)` | `<unknown>` |

##### `Type::cmp(Type const*, Type const*)` (`<unknown>`)

|      % | Samples | Caller                             | Location    |
| -----: | ------: | ---------------------------------- | ----------- |
| 100.0% |       7 | `Dict::Insert(void*, void*, bool)` | `<unknown>` |

##### `IntervalWalker::walk_to(IntervalState, int)` (`<unknown>`)

|      % | Samples | Caller                         | Location    |
| -----: | ------: | ------------------------------ | ----------- |
| 100.0% |       7 | `IntervalWalker::walk_to(int)` | `<unknown>` |

##### `SymbolTable::lookup_only(char const*, int, unsigned int&)` (`<unknown>`)

|      % | Samples | Caller                                                                                                  | Location    |
| -----: | ------: | ------------------------------------------------------------------------------------------------------- | ----------- |
| 100.0% |       7 | `ClassFileParser::parse_constant_pool_entries(ClassFileStream const*, ConstantPool*, int, JavaThread*)` | `<unknown>` |

##### `sys_icache_invalidate` (`<unknown>`)

|     % | Samples | Caller                                                                                                                                                                                                                                                            | Location    |
| ----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 42.9% |       3 | `nmethod::nmethod(Method*, CompilerType, int, int, int, CodeOffsets*, int, DebugInformationRecorder*, Dependencies*, CodeBuffer*, int, OopMapSet*, ExceptionHandlerTable*, ImplicitExceptionTable*, AbstractCompiler*, CompLevel, char*, int, JVMCINMethodData*)` | `<unknown>` |
| 28.6% |       2 | `CompiledDirectStaticCall::set_to_interpreted(methodHandle const&, unsigned char*)`                                                                                                                                                                               | `<unknown>` |
| 14.3% |       1 | `ICStub::finalize()`                                                                                                                                                                                                                                              | `<unknown>` |
| 14.3% |       1 | `CompiledIC::set_to_monomorphic(CompiledICInfo&)`                                                                                                                                                                                                                 | `<unknown>` |

##### `__psynch_cvwait` (`<unknown>`)

|      % | Samples | Caller                                      | Location    |
| -----: | ------: | ------------------------------------------- | ----------- |
| 100.0% |       7 | `PlatformMonitor::wait(unsigned long long)` | `<unknown>` |

##### `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>(G1CMOopClosure*, oopDesc*, Klass*)` (`<unknown>`)

|      % | Samples | Caller                                                           | Location    |
| -----: | ------: | ---------------------------------------------------------------- | ----------- |
| 100.0% |       7 | `void G1CMTask::process_grey_task_entry<true>(G1TaskQueueEntry)` | `<unknown>` |

##### `LinearScan::assign_reg_num(GrowableArray<LIR_Op*>*, IntervalWalker*)` (`<unknown>`)

|      % | Samples | Caller                         | Location    |
| -----: | ------: | ------------------------------ | ----------- |
| 100.0% |       6 | `LinearScan::do_linear_scan()` | `<unknown>` |

##### `LIR_OpVisitState::visit(LIR_Op*)` (`<unknown>`)

|     % | Samples | Caller                                                                 | Location    |
| ----: | ------: | ---------------------------------------------------------------------- | ----------- |
| 33.3% |       2 | `LinearScan::compute_local_live_sets()`                                | `<unknown>` |
| 33.3% |       2 | `LinearScan::build_intervals()`                                        | `<unknown>` |
| 16.7% |       1 | `LinearScan::assign_reg_num(GrowableArray<LIR_Op*>*, IntervalWalker*)` | `<unknown>` |
| 16.7% |       1 | `LinearScan::do_linear_scan()`                                         | `<unknown>` |

##### `fwd_copy_again` (`<unknown>`)

|      % | Samples | Caller                                                        | Location    |
| -----: | ------: | ------------------------------------------------------------- | ----------- |
| 100.0% |       6 | `G1ParScanThreadState::trim_queue_to_threshold(unsigned int)` | `<unknown>` |

##### `_platform_memmove` (`<unknown>`)

|     % | Samples | Caller                                                                                                                                                                                                                                                            | Location    |
| ----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 33.3% |       2 | `nmethod::nmethod(Method*, CompilerType, int, int, int, CodeOffsets*, int, DebugInformationRecorder*, Dependencies*, CodeBuffer*, int, OopMapSet*, ExceptionHandlerTable*, ImplicitExceptionTable*, AbstractCompiler*, CompLevel, char*, int, JVMCINMethodData*)` | `<unknown>` |
| 16.7% |       1 | `Java_java_lang_ClassLoader_defineClass1`                                                                                                                                                                                                                         | `<unknown>` |
| 16.7% |       1 | `SymbolTable::do_add_if_needed(char const*, int, unsigned long, bool)`                                                                                                                                                                                            | `<unknown>` |
| 16.7% |       1 | `Node::Node(Node*, Node*, Node*)`                                                                                                                                                                                                                                 | `<unknown>` |
| 16.7% |       1 | `Node_Array::grow(unsigned int)`                                                                                                                                                                                                                                  | `<unknown>` |

##### `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>(G1RebuildRemSetClosure*, oopDesc*, Klass*)` (`<unknown>`)

|     % | Samples | Caller                                                                                                                         | Location    |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------------------ | ----------- |
| 83.3% |       5 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object(HeapRegion*, HeapWordImpl**)`                          | `<unknown>` |
| 16.7% |       1 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_to_pb(HeapRegion*, HeapWordImpl**, HeapWordImpl**)` | `<unknown>` |

##### `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>(G1ScanEvacuatedObjClosure*, oopDesc*, Klass*)` (`<unknown>`)

|      % | Samples | Caller                                                                                  | Location    |
| -----: | ------: | --------------------------------------------------------------------------------------- | ----------- |
| 100.0% |       6 | `G1ParScanThreadState::do_copy_to_survivor_space(G1HeapRegionAttr, oopDesc*, markWord)` | `<unknown>` |

##### `LinearScanWalker::alloc_free_reg(Interval*)` (`<unknown>`)

|      % | Samples | Caller                                 | Location    |
| -----: | ------: | -------------------------------------- | ----------- |
| 100.0% |       5 | `LinearScanWalker::activate_current()` | `<unknown>` |

##### `PhaseIdealLoop::build_loop_tree()` (`<unknown>`)

|      % | Samples | Caller                                 | Location    |
| -----: | ------: | -------------------------------------- | ----------- |
| 100.0% |       5 | `PhaseIdealLoop::build_and_optimize()` | `<unknown>` |

##### `ValueStack::values_do(ValueVisitor*)` (`<unknown>`)

|     % | Samples | Caller                                        | Location    |
| ----: | ------: | --------------------------------------------- | ----------- |
| 40.0% |       2 | `BlockBegin::state_values_do(ValueVisitor*)`  | `<unknown>` |
| 40.0% |       2 | `SubstitutionResolver::block_do(BlockBegin*)` | `<unknown>` |
| 20.0% |       1 | `UseCountComputer::block_do(BlockBegin*)`     | `<unknown>` |

##### `PhaseIFG::effective_degree(unsigned int) const` (`<unknown>`)

|      % | Samples | Caller                                 | Location    |
| -----: | ------: | -------------------------------------- | ----------- |
| 100.0% |       5 | `PhaseIFG::Compute_Effective_Degree()` | `<unknown>` |

##### `checkNotNullParameter(Object, String)` (`kotlin.jvm.internal.Intrinsics`)

|     % | Samples | Caller                                                          | Location                                                                       |
| ----: | ------: | --------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| 20.0% |       1 | `mapType(IrType, TypeMappingMode, JvmSignatureWriter, boolean)` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$typeMapper$1`           |
| 20.0% |       1 | `sortedWith(Iterable, Comparator)`                              | `kotlin.collections.CollectionsKt___CollectionsKt`                             |
| 20.0% |       1 | `supportsFeature(LanguageFeature)`                              | `org.jetbrains.kotlin.config.LanguageVersionSettings`                          |
| 20.0% |       1 | `hasExactAnnotation(KotlinTypeMarker)`                          | `org.jetbrains.kotlin.resolve.calls.inference.model.NewConstraintSystemImpl`   |
| 20.0% |       1 | `check(CheckerContext, DiagnosticReporter, FirResolvedTypeRef)` | `org.jetbrains.kotlin.fir.analysis.checkers.type.FirDynamicUnsupportedChecker` |

##### `sanitizeStackTrace(Throwable)` (`kotlin.jvm.internal.Intrinsics`)

|      % | Samples | Caller                            | Location                         |
| -----: | ------: | --------------------------------- | -------------------------------- |
| 100.0% |       4 | `throwParameterIsNullNPE(String)` | `kotlin.jvm.internal.Intrinsics` |

##### `transform(String, MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.ApiVersionCallsPreprocessingMethodTransformer`)

|      % | Samples | Caller                                        | Location                                            |
| -----: | ------: | --------------------------------------------- | --------------------------------------------------- |
| 100.0% |       2 | `preprocessNodeBeforeInline(MethodNode, Map)` | `org.jetbrains.kotlin.codegen.inline.MethodInliner` |

##### `hashCode()` (`org.jetbrains.kotlin.fir.symbols.impl.ConeClassLikeLookupTagImpl`)

|     % | Samples | Caller         | Location                                                |
| ----: | ------: | -------------- | ------------------------------------------------------- |
| 50.0% |       1 | `hash(Object)` | `java.util.HashMap`                                     |
| 50.0% |       1 | `hashCode()`   | `org.jetbrains.kotlin.fir.types.ConeLookupTagBasedType` |

##### `equals(Object)` (`java.lang.String`)

|     % | Samples | Caller                     | Location                         |
| ----: | ------: | -------------------------- | -------------------------------- |
| 50.0% |       1 | `areEqual(Object, Object)` | `kotlin.jvm.internal.Intrinsics` |
| 50.0% |       1 | `lookup(String)`           | `java.nio.charset.Charset`       |

##### `generateConstructor()` (`java.lang.invoke.InnerClassLambdaMetafactory`)

|      % | Samples | Caller                 | Location                                       |
| -----: | ------: | ---------------------- | ---------------------------------------------- |
| 100.0% |       2 | `generateInnerClass()` | `java.lang.invoke.InnerClassLambdaMetafactory` |

##### `insertEntryAtIndex(Object[], int, Object, Object)` (`kotlinx.collections.immutable.implementations.immutableMap.TrieNodeKt`)

|      % | Samples | Caller                                                     | Location                                                                |
| -----: | ------: | ---------------------------------------------------------- | ----------------------------------------------------------------------- |
| 100.0% |       2 | `access$insertEntryAtIndex(Object[], int, Object, Object)` | `kotlinx.collections.immutable.implementations.immutableMap.TrieNodeKt` |

##### `sortAdaptableInstructionsForBoxedValues(MethodNode, RedundantBoxedValuesCollection)` (`org.jetbrains.kotlin.codegen.optimization.boxing.RedundantBoxingMethodTransformer`)

|      % | Samples | Caller                          | Location                                                                            |
| -----: | ------: | ------------------------------- | ----------------------------------------------------------------------------------- |
| 100.0% |       1 | `transform(String, MethodNode)` | `org.jetbrains.kotlin.codegen.optimization.boxing.RedundantBoxingMethodTransformer` |

##### `transformInplace(List, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`)

|      % | Samples | Caller                                                   | Location                                                 |
| -----: | ------: | -------------------------------------------------------- | -------------------------------------------------------- |
| 100.0% |       1 | `transformInplace-aLnlfrU(List, FirTransformer, Object)` | `org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt` |

##### `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.FirFile`)

|      % | Samples | Caller                        | Location                                                                                                        |
| -----: | ------: | ----------------------------- | --------------------------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `resolveAnnotations(FirFile)` | `org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirCompilerRequiredAnnotationsResolveTransformer` |

##### `<init>(KtSourceElement, FirResolvePhase, FirModuleData, FirDeclarationOrigin, FirDeclarationAttributes, FirDeclarationStatus, FirTypeRef, DeprecationsProvider, ConeSimpleKotlinType, List, FirBlock, FirContractDescription, FirPropertyAccessorSymbol, FirPropertySymbol, boolean, List)` (`org.jetbrains.kotlin.fir.declarations.impl.FirPropertyAccessorImpl`)

|      % | Samples | Caller                                                                                                                                                                                                                                                                                                                 | Location                                                             |
| -----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| 100.0% |       1 | `<init>(KtSourceElement, FirResolvePhase, FirModuleData, FirDeclarationOrigin, FirDeclarationAttributes, FirDeclarationStatus, FirTypeRef, DeprecationsProvider, ConeSimpleKotlinType, List, FirBlock, FirContractDescription, FirPropertyAccessorSymbol, FirPropertySymbol, boolean, List, DefaultConstructorMarker)` | `org.jetbrains.kotlin.fir.declarations.impl.FirPropertyAccessorImpl` |

##### `getSymbol()` (`org.jetbrains.kotlin.fir.declarations.builder.FirReceiverParameterBuilder`)

|      % | Samples | Caller    | Location                                                                    |
| -----: | ------: | --------- | --------------------------------------------------------------------------- |
| 100.0% |       1 | `build()` | `org.jetbrains.kotlin.fir.declarations.builder.FirReceiverParameterBuilder` |

##### `convertQualifiedExpression(LighterASTNode)` (`org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirExpressionBuilder`)

|      % | Samples | Caller                                      | Location                                                                        |
| -----: | ------: | ------------------------------------------- | ------------------------------------------------------------------------------- |
| 100.0% |       1 | `getAsFirStatement(LighterASTNode, String)` | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirExpressionBuilder` |

##### `unwrapElement(FirExpression)` (`org.jetbrains.kotlin.fir.resolve.dfa.VariableStorage`)

|      % | Samples | Caller                                              | Location                                               |
| -----: | ------: | --------------------------------------------------- | ------------------------------------------------------ |
| 100.0% |       1 | `get(FirExpression, boolean, Function1, Function1)` | `org.jetbrains.kotlin.fir.resolve.dfa.VariableStorage` |

##### `get(FirExpression, boolean, Function1, Function1)` (`org.jetbrains.kotlin.fir.resolve.dfa.VariableStorage`)

|      % | Samples | Caller                                                            | Location                                                   |
| -----: | ------: | ----------------------------------------------------------------- | ---------------------------------------------------------- |
| 100.0% |       1 | `getVariableWithoutUnwrappingAlias(Flow, FirExpression, boolean)` | `org.jetbrains.kotlin.fir.resolve.dfa.FirDataFlowAnalyzer` |

##### `isInsidePrivateClass(FirBasedSymbol)` (`org.jetbrains.kotlin.fir.analysis.checkers.declaration.FirInlineDeclarationChecker$InlineFunctionBodyContext`)

|      % | Samples | Caller                                                                                                                                      | Location                                                                                                       |
| -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `checkAccessedDeclaration$org_jetbrains_kotlin_checkers(CheckerContext, DiagnosticReporter, KtSourceElement, FirStatement, FirBasedSymbol)` | `org.jetbrains.kotlin.fir.analysis.checkers.declaration.FirInlineDeclarationChecker$InlineFunctionBodyContext` |

##### `visitWithCallOrAssignment(FirStatement)` (`org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor`)

|      % | Samples | Caller                                                               | Location                                                                          |
| -----: | ------: | -------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| 100.0% |       1 | `visitQualifiedAccessExpression(FirQualifiedAccessExpression, Void)` | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor` |

##### `visitCall(IrCall, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|      % | Samples | Caller                      | Location                                                     |
| -----: | ------: | --------------------------- | ------------------------------------------------------------ |
| 100.0% |       1 | `visitCall(IrCall, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|      % | Samples | Caller                          | Location                                                     |
| -----: | ------: | ------------------------------- | ------------------------------------------------------------ |
| 100.0% |       1 | `visitReturn(IrReturn, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`)

|      % | Samples | Caller                             | Location                                           |
| -----: | ------: | ---------------------------------- | -------------------------------------------------- |
| 100.0% |       1 | `transform(IrTransformer, Object)` | `org.jetbrains.kotlin.ir.expressions.IrExpression` |

##### `toSymbol(ConeClassLikeLookupTag, FirSession)` (`org.jetbrains.kotlin.fir.resolve.ToSymbolUtilsKt`)

|      % | Samples | Caller                                    | Location                                           |
| -----: | ------: | ----------------------------------------- | -------------------------------------------------- |
| 100.0% |       1 | `toSymbol(ConeClassLikeType, FirSession)` | `org.jetbrains.kotlin.fir.resolve.ToSymbolUtilsKt` |

##### `<init>(KtSourceElement, FirResolvePhase, FirModuleData, FirDeclarationOrigin, FirDeclarationAttributes, FirDeclarationStatus, boolean, FirTypeRef, FirReceiverParameter, DeprecationsProvider, DeserializedContainerSource, ConeSimpleKotlinType, List, List, FirBlock, FirContractDescription, Name, FirNamedFunctionSymbol, List, List)` (`org.jetbrains.kotlin.fir.declarations.impl.FirNamedFunctionImpl`)

|      % | Samples | Caller                                                                                                                                                                                                                                                                                                                                                                | Location                                                          |
| -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| 100.0% |       1 | `<init>(KtSourceElement, FirResolvePhase, FirModuleData, FirDeclarationOrigin, FirDeclarationAttributes, FirDeclarationStatus, boolean, FirTypeRef, FirReceiverParameter, DeprecationsProvider, DeserializedContainerSource, ConeSimpleKotlinType, List, List, FirBlock, FirContractDescription, Name, FirNamedFunctionSymbol, List, List, DefaultConstructorMarker)` | `org.jetbrains.kotlin.fir.declarations.impl.FirNamedFunctionImpl` |

##### `<init>(KtSourceElement, FirResolvePhase, FirModuleData, FirDeclarationOrigin, FirDeclarationAttributes, FirDeclarationStatus, boolean, FirTypeRef, FirReceiverParameter, DeprecationsProvider, DeserializedContainerSource, ConeSimpleKotlinType, List, List, FirBlock, FirContractDescription, Name, FirNamedFunctionSymbol, List, List, DefaultConstructorMarker)` (`org.jetbrains.kotlin.fir.declarations.impl.FirNamedFunctionImpl`)

|      % | Samples | Caller    | Location                                                                |
| -----: | ------: | --------- | ----------------------------------------------------------------------- |
| 100.0% |       1 | `build()` | `org.jetbrains.kotlin.fir.declarations.builder.FirNamedFunctionBuilder` |

##### `isProperTypeForFixation(ResultTypeResolver$Context, KotlinTypeMarker)` (`org.jetbrains.kotlin.resolve.calls.inference.components.ResultTypeResolver`)

|      % | Samples | Caller                                                       | Location                                                                     |
| -----: | ------: | ------------------------------------------------------------ | ---------------------------------------------------------------------------- |
| 100.0% |       1 | `isProperConstraint(ResultTypeResolver$Context, Constraint)` | `org.jetbrains.kotlin.resolve.calls.inference.components.ResultTypeResolver` |

##### `isSubtypeOfForSingleClassifierType(TypeCheckerState, TypeSystemContext, RigidTypeMarker, RigidTypeMarker)` (`org.jetbrains.kotlin.types.AbstractTypeChecker`)

|      % | Samples | Caller                                                                                                  | Location                                         |
| -----: | ------: | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| 100.0% |       1 | `completeIsSubTypeOf(TypeCheckerState, TypeSystemContext, KotlinTypeMarker, KotlinTypeMarker, boolean)` | `org.jetbrains.kotlin.types.AbstractTypeChecker` |

##### `hash(Object)` (`java.util.HashMap`)

|      % | Samples | Caller                | Location            |
| -----: | ------: | --------------------- | ------------------- |
| 100.0% |       1 | `put(Object, Object)` | `java.util.HashMap` |

##### `hasNext()` (`java.util.ArrayList$Itr`)

|      % | Samples | Caller                                                        | Location                                                                                    |
| -----: | ------: | ------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `createSyntheticFunctionInterface(ClassId, FunctionTypeKind)` | `org.jetbrains.kotlin.fir.resolve.providers.impl.FirSyntheticFunctionInterfaceProviderBase` |

##### `put(ByteVector, int, boolean)` (`jdk.internal.org.objectweb.asm.Label`)

|      % | Samples | Caller                      | Location                                      |
| -----: | ------: | --------------------------- | --------------------------------------------- |
| 100.0% |       1 | `visitJumpInsn(int, Label)` | `jdk.internal.org.objectweb.asm.MethodWriter` |

##### `isEmpty()` (`kotlin.collections.AbstractCollection`)

|      % | Samples | Caller             | Location                                           |
| -----: | ------: | ------------------ | -------------------------------------------------- |
| 100.0% |       1 | `lastOrNull(List)` | `kotlin.collections.CollectionsKt___CollectionsKt` |

##### `makeDirectories(String)` (`jdk.internal.jimage.ImageReader$SharedImageReader`)

|      % | Samples | Caller                                                                | Location                                            |
| -----: | ------: | --------------------------------------------------------------------- | --------------------------------------------------- |
| 100.0% |       1 | `lambda$handleModulesSubTree$1(ImageReader$Directory, ImageLocation)` | `jdk.internal.jimage.ImageReader$SharedImageReader` |

##### `makeIdentity(Class)` (`java.lang.invoke.MethodHandles`)

|      % | Samples | Caller            | Location                         |
| -----: | ------: | ----------------- | -------------------------------- |
| 100.0% |       1 | `identity(Class)` | `java.lang.invoke.MethodHandles` |

##### `newChannel(InputStream)` (`java.nio.channels.Channels`)

|      % | Samples | Caller                                          | Location                           |
| -----: | ------: | ----------------------------------------------- | ---------------------------------- |
| 100.0% |       1 | `newByteChannel(JrtPath, Set, FileAttribute[])` | `jdk.internal.jrtfs.JrtFileSystem` |

##### `get(int)` (`java.util.ArrayList`)

|      % | Samples | Caller                    | Location                                                                  |
| -----: | ------: | ------------------------- | ------------------------------------------------------------------------- |
| 100.0% |       1 | `invoke(FirResolvePhase)` | `org.jetbrains.kotlin.fir.declarations.FirResolvedToPhaseState$Companion` |

##### `grow(int)` (`java.util.ArrayList`)

|      % | Samples | Caller   | Location              |
| -----: | ------: | -------- | --------------------- |
| 100.0% |       1 | `grow()` | `java.util.ArrayList` |

##### `<init>()` (`jdk.internal.org.objectweb.asm.ByteVector`)

|      % | Samples | Caller                                                            | Location                                      |
| -----: | ------: | ----------------------------------------------------------------- | --------------------------------------------- |
| 100.0% |       1 | `<init>(SymbolTable, int, String, String, String, String[], int)` | `jdk.internal.org.objectweb.asm.MethodWriter` |

##### `getArgumentTypes(String)` (`jdk.internal.org.objectweb.asm.Type`)

|      % | Samples | Caller                                                       | Location                               |
| -----: | ------: | ------------------------------------------------------------ | -------------------------------------- |
| 100.0% |       1 | `setInputFrameFromDescriptor(SymbolTable, int, String, int)` | `jdk.internal.org.objectweb.asm.Frame` |

##### `iterator()` (`java.util.ArrayList`)

|      % | Samples | Caller                               | Location                                                 |
| -----: | ------: | ------------------------------------ | -------------------------------------------------------- |
| 100.0% |       1 | `acceptChildren(FirVisitor, Object)` | `org.jetbrains.kotlin.fir.types.impl.FirUserTypeRefImpl` |

##### `reversePositionIndex$CollectionsKt__ReversedViewsKt(List, int)` (`kotlin.collections.CollectionsKt__ReversedViewsKt`)

|      % | Samples | Caller                                   | Location                                            |
| -----: | ------: | ---------------------------------------- | --------------------------------------------------- |
| 100.0% |       1 | `access$reversePositionIndex(List, int)` | `kotlin.collections.CollectionsKt__ReversedViewsKt` |

##### `next()` (`kotlinx.collections.immutable.implementations.persistentOrderedMap.PersistentOrderedMapValuesIterator`)

|      % | Samples | Caller                           | Location                                                   |
| -----: | ------: | -------------------------------- | ---------------------------------------------------------- |
| 100.0% |       1 | `resetSmartCastPositionTo(Flow)` | `org.jetbrains.kotlin.fir.resolve.dfa.FirDataFlowAnalyzer` |

##### `asSequence(Iterable)` (`kotlin.collections.CollectionsKt___CollectionsKt`)

|      % | Samples | Caller                                 | Location                                                                 |
| -----: | ------: | -------------------------------------- | ------------------------------------------------------------------------ |
| 100.0% |       1 | `findClasses(ClassId, Set, Function2)` | `org.jetbrains.kotlin.cli.jvm.index.JvmDependenciesDynamicCompoundIndex` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                                                                                           | Location                                                |
| ----: | ------: | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 66.2% |     845 | `_pthread_start`                                                                                   | `<unknown>`                                             |
| 66.2% |     845 | `thread_start`                                                                                     | `<unknown>`                                             |
| 66.1% |     843 | `Thread::call_run()`                                                                               | `<unknown>`                                             |
| 66.1% |     843 | `thread_native_entry(Thread*)`                                                                     | `<unknown>`                                             |
| 59.9% |     764 | `CompileBroker::compiler_thread_loop()`                                                            | `<unknown>`                                             |
| 59.9% |     764 | `JavaThread::thread_main_inner()`                                                                  | `<unknown>`                                             |
| 59.2% |     756 | `CompileBroker::invoke_compiler_on_method(CompileTask*)`                                           | `<unknown>`                                             |
| 41.1% |     524 | `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)`                                 | `<unknown>`                                             |
| 41.1% |     524 | `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)`                          | `<unknown>`                                             |
| 33.2% |     424 | `run(String[])`                                                                                    | `org.jetbrains.kotlin.preloading.Preloader`             |
| 33.2% |     424 | `main(String[])`                                                                                   | `org.jetbrains.kotlin.preloading.Preloader`             |
| 27.5% |     351 | `invoke(Object, Object[])`                                                                         | `java.lang.reflect.Method`                              |
| 27.4% |     350 | `main(String[])`                                                                                   | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`  |
| 27.4% |     350 | `main(String[])`                                                                                   | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 27.4% |     350 | `invokeStatic(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$DMH.0x0000000301008000`    |
| 27.4% |     350 | `invoke(Object, Object, Object)`                                                                   | `java.lang.invoke.LambdaForm$MH.0x0000000301009400`     |
| 27.4% |     350 | `invokeExact_MT(Object, Object, Object, Object)`                                                   | `java.lang.invoke.Invokers$Holder`                      |
| 27.4% |     350 | `invokeImpl(Object, Object[])`                                                                     | `jdk.internal.reflect.DirectMethodHandleAccessor`       |
| 27.4% |     350 | `invoke(Object, Object[])`                                                                         | `jdk.internal.reflect.DirectMethodHandleAccessor`       |
| 27.4% |     349 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

#### Categories

##### Compiler

|     % | Samples | Function                                                                                                | Location    |
| ----: | ------: | ------------------------------------------------------------------------------------------------------- | ----------- |
| 59.9% |     764 | `CompileBroker::compiler_thread_loop()`                                                                 | `<unknown>` |
| 59.2% |     756 | `CompileBroker::invoke_compiler_on_method(CompileTask*)`                                                | `<unknown>` |
| 41.1% |     524 | `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)`                                      | `<unknown>` |
| 41.1% |     524 | `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)`                               | `<unknown>` |
| 20.8% |     266 | `Compile::Code_Gen()`                                                                                   | `<unknown>` |
| 17.6% |     225 | `Compilation::compile_method()`                                                                         | `<unknown>` |
| 17.6% |     225 | `Compilation::Compilation(AbstractCompiler*, ciEnv*, ciMethod*, int, BufferBlob*, bool, DirectiveSet*)` | `<unknown>` |
| 16.3% |     208 | `Compilation::compile_java_method()`                                                                    | `<unknown>` |
| 14.5% |     185 | `Compile::Optimize()`                                                                                   | `<unknown>` |
| 12.4% |     158 | `PhaseChaitin::Register_Allocate()`                                                                     | `<unknown>` |
|  8.7% |     111 | `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)`                                                 | `<unknown>` |
|  7.8% |      99 | `PhaseIdealLoop::build_and_optimize()`                                                                  | `<unknown>` |
|  7.8% |      99 | `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)`                                           | `<unknown>` |
|  7.0% |      89 | `Compilation::emit_lir()`                                                                               | `<unknown>` |
|  5.8% |      74 | `LinearScan::do_linear_scan()`                                                                          | `<unknown>` |
|  5.3% |      68 | `Compilation::build_hir()`                                                                              | `<unknown>` |
|  4.2% |      54 | `Compile::optimize_loops(PhaseIterGVN&, LoopOptsMode)`                                                  | `<unknown>` |
|  4.2% |      53 | `GraphBuilder::GraphBuilder(Compilation*, IRScope*)`                                                    | `<unknown>` |
|  3.9% |      50 | `GraphBuilder::iterate_bytecodes_for_block(int)`                                                        | `<unknown>` |
|  3.9% |      50 | `GraphBuilder::iterate_all_blocks(bool)`                                                                | `<unknown>` |

##### Native

|     % | Samples | Function                                                                                                                                       | Location    |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 66.2% |     845 | `_pthread_start`                                                                                                                               | `<unknown>` |
| 66.2% |     845 | `thread_start`                                                                                                                                 | `<unknown>` |
| 66.1% |     843 | `Thread::call_run()`                                                                                                                           | `<unknown>` |
| 66.1% |     843 | `thread_native_entry(Thread*)`                                                                                                                 | `<unknown>` |
| 59.9% |     764 | `JavaThread::thread_main_inner()`                                                                                                              | `<unknown>` |
| 17.6% |     225 | `Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)`                                                                        | `<unknown>` |
|  5.6% |      71 | `WorkerThread::run()`                                                                                                                          | `<unknown>` |
|  4.9% |      63 | `Parse::Parse(JVMState*, ciMethod*, float)`                                                                                                    | `<unknown>` |
|  4.9% |      63 | `ParseGenerator::generate(JVMState*)`                                                                                                          | `<unknown>` |
|  4.9% |      62 | `Java_java_util_zip_Inflater_inflateBytesBytes`                                                                                                | `<unknown>` |
|  4.7% |      60 | `KlassFactory::create_from_stream(ClassFileStream*, Symbol*, ClassLoaderData*, ClassLoadInfo const&, JavaThread*)`                             | `<unknown>` |
|  4.7% |      60 | `Parse::do_one_block()`                                                                                                                        | `<unknown>` |
|  4.7% |      60 | `Parse::do_all_blocks()`                                                                                                                       | `<unknown>` |
|  4.6% |      59 | `SystemDictionary::resolve_class_from_stream(ClassFileStream*, Symbol*, Handle, ClassLoadInfo const&, JavaThread*)`                            | `<unknown>` |
|  4.6% |      59 | `jvm_define_class_common(char const*, _jobject*, signed char const*, int, _jobject*, char const*, JavaThread*)`                                | `<unknown>` |
|  4.6% |      59 | `JVM_DefineClassWithSource`                                                                                                                    | `<unknown>` |
|  4.6% |      59 | `Java_java_lang_ClassLoader_defineClass1`                                                                                                      | `<unknown>` |
|  4.4% |      56 | `ClassFileParser::ClassFileParser(ClassFileStream*, Symbol*, ClassLoaderData*, ClassLoadInfo const*, ClassFileParser::Publicity, JavaThread*)` | `<unknown>` |
|  4.3% |      55 | `Parse::do_call()`                                                                                                                             | `<unknown>` |
|  4.2% |      53 | `ClassFileParser::parse_stream(ClassFileStream const*, JavaThread*)`                                                                           | `<unknown>` |

##### Ours

|     % | Samples | Function                                                                                                                                      | Location                                                |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 33.2% |     424 | `run(String[])`                                                                                                                               | `org.jetbrains.kotlin.preloading.Preloader`             |
| 33.2% |     424 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.preloading.Preloader`             |
| 27.4% |     350 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`  |
| 27.4% |     350 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 27.4% |     349 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)`                                            | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 27.4% |     349 | `doMain(CLICompiler, String[])`                                                                                                               | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 27.3% |     348 | `exec(PrintStream, Services, MessageRenderer, String[])`                                                                                      | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 27.3% |     348 | `exec(PrintStream, MessageRenderer, String[])`                                                                                                | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 27.3% |     348 | `doMainNoExit(CLICompiler, String[], MessageRenderer)`                                                                                        | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 26.8% |     342 | `exec(MessageCollector, Services, CommonCompilerArguments)`                                                                                   | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 26.2% |     334 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)`                                                                         | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 26.2% |     334 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)`                                                                        | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 26.2% |     334 | `execImpl(MessageCollector, Services, CommonCompilerArguments)`                                                                               | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 26.1% |     333 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)`                                           | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 26.1% |     333 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 26.1% |     333 | `execute(CommonCompilerArguments, Services, MessageCollector)`                                                                                | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 26.0% |     332 | `runPhasedPipeline(ArgumentsPipelineArtifact)`                                                                                                | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 25.9% |     330 | `phaseBody(PipelineContext, PipelineArtifact)`                                                                                                | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`       |
| 25.9% |     330 | `phaseBody(LoggingContext, Object)`                                                                                                           | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`       |
| 25.9% |     330 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)`                                                                                    | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase` |

##### Standard library

|     % | Samples | Function                                                                        | Location                                              |
| ----: | ------: | ------------------------------------------------------------------------------- | ----------------------------------------------------- |
| 27.5% |     351 | `invoke(Object, Object[])`                                                      | `java.lang.reflect.Method`                            |
| 27.4% |     350 | `invokeStatic(Object, Object)`                                                  | `java.lang.invoke.LambdaForm$DMH.0x0000000301008000`  |
| 27.4% |     350 | `invoke(Object, Object, Object)`                                                | `java.lang.invoke.LambdaForm$MH.0x0000000301009400`   |
| 27.4% |     350 | `invokeExact_MT(Object, Object, Object, Object)`                                | `java.lang.invoke.Invokers$Holder`                    |
| 27.4% |     350 | `invokeImpl(Object, Object[])`                                                  | `jdk.internal.reflect.DirectMethodHandleAccessor`     |
| 27.4% |     350 | `invoke(Object, Object[])`                                                      | `jdk.internal.reflect.DirectMethodHandleAccessor`     |
|  5.5% |      70 | `loadClass(String, boolean)`                                                    | `java.lang.ClassLoader`                               |
|  5.4% |      69 | `read(byte[], int, int)`                                                        | `java.util.zip.ZipInputStream`                        |
|  5.4% |      69 | `read(byte[])`                                                                  | `java.io.FilterInputStream`                           |
|  5.1% |      65 | `defineClass(String, byte[], int, int, ProtectionDomain)`                       | `java.lang.ClassLoader`                               |
|  5.1% |      65 | `read(byte[], int, int)`                                                        | `java.util.zip.InflaterInputStream`                   |
|  5.0% |      64 | `defineClass(String, byte[], int, int)`                                         | `java.lang.ClassLoader`                               |
|  4.9% |      63 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`                               |
|  4.9% |      62 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)`                   | `java.util.zip.Inflater`                              |
|  4.9% |      62 | `inflate(byte[], int, int)`                                                     | `java.util.zip.Inflater`                              |
|  3.9% |      50 | `resumeWith(Object)`                                                            | `kotlin.coroutines.jvm.internal.BaseContinuationImpl` |
|  1.1% |      14 | `getValue()`                                                                    | `kotlin.SafePublicationLazyImpl`                      |
|  1.1% |      14 | `getValue()`                                                                    | `kotlin.SynchronizedLazyImpl`                         |
|  0.9% |      12 | `getValue()`                                                                    | `kotlin.UnsafeLazyImpl`                               |
|  0.9% |      11 | `linkCallSiteImpl(Class, MethodHandle, String, MethodType, Object, Object[])`   | `java.lang.invoke.MethodHandleNatives`                |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `_pthread_start` (`<unknown>`)

|     % | Samples | Callee                         | Location    |
| ----: | ------: | ------------------------------ | ----------- |
| 99.8% |     843 | `thread_native_entry(Thread*)` | `<unknown>` |
|  0.2% |       2 | `ThreadJavaMain`               | `<unknown>` |

##### `thread_start` (`<unknown>`)

|      % | Samples | Callee           | Location    |
| -----: | ------: | ---------------- | ----------- |
| 100.0% |     845 | `_pthread_start` | `<unknown>` |

##### `Thread::call_run()` (`<unknown>`)

|     % | Samples | Callee                            | Location    |
| ----: | ------: | --------------------------------- | ----------- |
| 90.6% |     764 | `JavaThread::thread_main_inner()` | `<unknown>` |
|  8.4% |      71 | `WorkerThread::run()`             | `<unknown>` |
|  0.5% |       4 | `VMThread::run()`                 | `<unknown>` |
|  0.5% |       4 | `WatcherThread::run()`            | `<unknown>` |

##### `thread_native_entry(Thread*)` (`<unknown>`)

|      % | Samples | Callee               | Location    |
| -----: | ------: | -------------------- | ----------- |
| 100.0% |     843 | `Thread::call_run()` | `<unknown>` |

##### `CompileBroker::compiler_thread_loop()` (`<unknown>`)

|     % | Samples | Callee                                                   | Location    |
| ----: | ------: | -------------------------------------------------------- | ----------- |
| 99.0% |     756 | `CompileBroker::invoke_compiler_on_method(CompileTask*)` | `<unknown>` |
|  0.9% |       7 | `CompileQueue::get(CompilerThread*)`                     | `<unknown>` |
|  0.1% |       1 | `CompileTaskWrapper::~CompileTaskWrapper()`              | `<unknown>` |

##### `JavaThread::thread_main_inner()` (`<unknown>`)

|      % | Samples | Callee                                  | Location    |
| -----: | ------: | --------------------------------------- | ----------- |
| 100.0% |     764 | `CompileBroker::compiler_thread_loop()` | `<unknown>` |

##### `CompileBroker::invoke_compiler_on_method(CompileTask*)` (`<unknown>`)

|     % | Samples | Callee                                                                    | Location    |
| ----: | ------: | ------------------------------------------------------------------------- | ----------- |
| 69.3% |     524 | `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` | `<unknown>` |
| 29.8% |     225 | `Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)`   | `<unknown>` |
|  0.4% |       3 | `ciEnv::get_method_from_handle(Method*)`                                  | `<unknown>` |
|  0.1% |       1 | `PerfString::set_string(char const*)`                                     | `<unknown>` |
|  0.1% |       1 | `TraceTime::~TraceTime()`                                                 | `<unknown>` |

##### `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` (`<unknown>`)

|     % | Samples | Callee                                                                                     | Location    |
| ----: | ------: | ------------------------------------------------------------------------------------------ | ----------- |
| 50.8% |     266 | `Compile::Code_Gen()`                                                                      | `<unknown>` |
| 35.3% |     185 | `Compile::Optimize()`                                                                      | `<unknown>` |
| 11.8% |      62 | `ParseGenerator::generate(JVMState*)`                                                      | `<unknown>` |
|  1.3% |       7 | `PhaseRemoveUseless::PhaseRemoveUseless(PhaseGVN*, Unique_Node_List&, Phase::PhaseNumber)` | `<unknown>` |
|  0.6% |       3 | `CallGenerator::for_inline(ciMethod*, float)`                                              | `<unknown>` |

##### `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` (`<unknown>`)

|      % | Samples | Callee                                                             | Location    |
| -----: | ------: | ------------------------------------------------------------------ | ----------- |
| 100.0% |     524 | `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` | `<unknown>` |

##### `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

|     % | Samples | Callee                                                                       | Location                                               |
| ----: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------------ |
| 82.8% |     351 | `invoke(Object, Object[])`                                                   | `java.lang.reflect.Method`                             |
| 17.2% |      73 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `main(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

|      % | Samples | Callee          | Location                                    |
| -----: | ------: | --------------- | ------------------------------------------- |
| 100.0% |     424 | `run(String[])` | `org.jetbrains.kotlin.preloading.Preloader` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

|     % | Samples | Callee                     | Location                                          |
| ----: | ------: | -------------------------- | ------------------------------------------------- |
| 99.7% |     350 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |
|  0.9% |       3 | `acquireMethodAccessor()`  | `java.lang.reflect.Method`                        |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`)

|     % | Samples | Callee                          | Location                                                |
| ----: | ------: | ------------------------------- | ------------------------------------------------------- |
| 99.7% |     349 | `doMain(CLICompiler, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
|  0.3% |       1 | `<init>()`                      | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % | Samples | Callee           | Location                                               |
| -----: | ------: | ---------------- | ------------------------------------------------------ |
| 100.0% |     350 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000000301008000`)

|      % | Samples | Callee           | Location                                     |
| -----: | ------: | ---------------- | -------------------------------------------- |
| 100.0% |     350 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000301009400`)

|      % | Samples | Callee                         | Location                                             |
| -----: | ------: | ------------------------------ | ---------------------------------------------------- |
| 100.0% |     350 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000000301008000` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Callee                           | Location                                            |
| -----: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% |     350 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000301009400` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % | Samples | Callee                                           | Location                           |
| -----: | ------: | ------------------------------------------------ | ---------------------------------- |
| 100.0% |     350 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % | Samples | Callee                         | Location                                          |
| -----: | ------: | ------------------------------ | ------------------------------------------------- |
| 100.0% |     350 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|     % | Samples | Callee                                                 | Location                                                |
| ----: | ------: | ------------------------------------------------------ | ------------------------------------------------------- |
| 99.7% |     348 | `doMainNoExit(CLICompiler, String[], MessageRenderer)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
|  0.3% |       1 | `defaultMessageRenderer()`                             | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `doMain(CLICompiler, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % | Samples | Callee                                                                                             | Location                                                |
| -----: | ------: | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |     349 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `exec(PrintStream, Services, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|     % | Samples | Callee                                                                               | Location                                                                |
| ----: | ------: | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------- |
| 98.3% |     342 | `exec(MessageCollector, Services, CommonCompilerArguments)`                          | `org.jetbrains.kotlin.cli.common.CLICompiler`                           |
|  1.7% |       6 | `parseCommandLineArguments$default(List, CommonToolArguments, boolean, int, Object)` | `org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt` |

##### `exec(PrintStream, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Callee                                                   | Location                                      |
| -----: | ------: | -------------------------------------------------------- | --------------------------------------------- |
| 100.0% |     348 | `exec(PrintStream, Services, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % | Samples | Callee                                         | Location                                      |
| -----: | ------: | ---------------------------------------------- | --------------------------------------------- |
| 100.0% |     348 | `exec(PrintStream, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

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

|     % | Samples | Callee                                         | Location                                                |
| ----: | ------: | ---------------------------------------------- | ------------------------------------------------------- |
| 99.7% |     332 | `runPhasedPipeline(ArgumentsPipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
|  0.3% |       1 | `<clinit>()`                                   | `com.intellij.openapi.util.Disposer`                    |

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
|  0.3% |       1 | `reportToMessageCollector(BaseDiagnosticsCollector, MessageCollector, boolean)` | `org.jetbrains.kotlin.cli.common.fir.FirDiagnosticsCompilerResultsReporter` |
|  0.3% |       1 | `createCompoundPhase(CommonCompilerArguments)`                                  | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmCliPipeline`                      |

##### `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

|     % | Samples | Callee                           | Location                                                              |
| ----: | ------: | -------------------------------- | --------------------------------------------------------------------- |
| 66.7% |     220 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`      |
| 23.9% |      79 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`       |
|  8.2% |      27 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFir2IrPipelinePhase`        |
|  0.9% |       3 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmConfigurationPipelinePhase` |
|  0.3% |       1 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmWriteOutputsPhase`          |

##### `phaseBody(LoggingContext, Object)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

|      % | Samples | Callee                                         | Location                                          |
| -----: | ------: | ---------------------------------------------- | ------------------------------------------------- |
| 100.0% |     330 | `phaseBody(PipelineContext, PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase` |

##### `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`)

|      % | Samples | Callee                              | Location                                                         |
| -----: | ------: | ----------------------------------- | ---------------------------------------------------------------- |
| 100.0% |     330 | `phaseBody(LoggingContext, Object)` | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`                |
|   5.5% |      18 | `phaseBody(LoggingContext, Object)` | `org.jetbrains.kotlin.backend.common.phaser.FileLoweringPhase`   |
|   1.5% |       5 | `phaseBody(LoggingContext, Object)` | `org.jetbrains.kotlin.backend.common.phaser.ModuleLoweringPhase` |

##### `Compile::Code_Gen()` (`<unknown>`)

|     % | Samples | Callee                                                                               | Location    |
| ----: | ------: | ------------------------------------------------------------------------------------ | ----------- |
| 59.4% |     158 | `PhaseChaitin::Register_Allocate()`                                                  | `<unknown>` |
| 16.2% |      43 | `Matcher::match()`                                                                   | `<unknown>` |
| 11.7% |      31 | `PhaseOutput::Output()`                                                              | `<unknown>` |
| 10.2% |      27 | `PhaseCFG::do_global_code_motion()`                                                  | `<unknown>` |
|  1.1% |       3 | `PhaseOutput::install_code(ciMethod*, int, AbstractCompiler*, bool, bool, RTMState)` | `<unknown>` |

##### `Compilation::compile_method()` (`<unknown>`)

|     % | Samples | Callee                                                                                                                                                                                                                                                         | Location    |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 92.4% |     208 | `Compilation::compile_java_method()`                                                                                                                                                                                                                           | `<unknown>` |
|  6.2% |      14 | `ciEnv::register_method(ciMethod*, int, CodeOffsets*, int, CodeBuffer*, int, OopMapSet*, ExceptionHandlerTable*, ImplicitExceptionTable*, AbstractCompiler*, bool, bool, bool, int, RTMState)`                                                                 | `<unknown>` |
|  0.4% |       1 | `nmethod::new_nmethod(methodHandle const&, int, int, CodeOffsets*, int, DebugInformationRecorder*, Dependencies*, CodeBuffer*, int, OopMapSet*, ExceptionHandlerTable*, ImplicitExceptionTable*, AbstractCompiler*, CompLevel, char*, int, JVMCINMethodData*)` | `<unknown>` |
|  0.4% |       1 | `Dependencies::assert_common_1(Dependencies::DepType, ciBaseObject*)`                                                                                                                                                                                          | `<unknown>` |

##### `Compilation::Compilation(AbstractCompiler*, ciEnv*, ciMethod*, int, BufferBlob*, bool, DirectiveSet*)` (`<unknown>`)

|      % | Samples | Callee                          | Location    |
| -----: | ------: | ------------------------------- | ----------- |
| 100.0% |     225 | `Compilation::compile_method()` | `<unknown>` |

##### `Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` (`<unknown>`)

|      % | Samples | Callee                                                                                                  | Location    |
| -----: | ------: | ------------------------------------------------------------------------------------------------------- | ----------- |
| 100.0% |     225 | `Compilation::Compilation(AbstractCompiler*, ciEnv*, ciMethod*, int, BufferBlob*, bool, DirectiveSet*)` | `<unknown>` |

##### `Compilation::compile_java_method()` (`<unknown>`)

|     % | Samples | Callee                                    | Location    |
| ----: | ------: | ----------------------------------------- | ----------- |
| 42.8% |      89 | `Compilation::emit_lir()`                 | `<unknown>` |
| 32.7% |      68 | `Compilation::build_hir()`                | `<unknown>` |
| 22.6% |      47 | `Compilation::emit_code_body()`           | `<unknown>` |
|  1.0% |       2 | `ciMethod::ensure_method_data()`          | `<unknown>` |
|  0.5% |       1 | `FrameMap::FrameMap(ciMethod*, int, int)` | `<unknown>` |

##### `Compile::Optimize()` (`<unknown>`)

|     % | Samples | Callee                                                  | Location    |
| ----: | ------: | ------------------------------------------------------- | ----------- |
| 30.8% |      57 | `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` | `<unknown>` |
| 29.2% |      54 | `Compile::optimize_loops(PhaseIterGVN&, LoopOptsMode)`  | `<unknown>` |
| 15.1% |      28 | `PhaseIterGVN::optimize()`                              | `<unknown>` |
|  4.9% |       9 | `ConnectionGraph::do_analysis(Compile*, PhaseIterGVN*)` | `<unknown>` |
|  3.8% |       7 | `PhaseCCP::PhaseCCP(PhaseIterGVN*)`                     | `<unknown>` |

##### `PhaseChaitin::Register_Allocate()` (`<unknown>`)

|     % | Samples | Callee                                             | Location    |
| ----: | ------: | -------------------------------------------------- | ----------- |
| 16.5% |      26 | `PhaseChaitin::build_ifg_physical(ResourceArea*)`  | `<unknown>` |
| 13.9% |      22 | `PhaseChaitin::post_allocate_copy_removal()`       | `<unknown>` |
| 11.4% |      18 | `PhaseChaitin::Split(unsigned int, ResourceArea*)` | `<unknown>` |
|  9.5% |      15 | `PhaseLive::compute(unsigned int)`                 | `<unknown>` |
|  8.2% |      13 | `PhaseChaitin::gather_lrg_masks(bool)`             | `<unknown>` |

##### `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` (`<unknown>`)

|     % | Samples | Callee                                                        | Location    |
| ----: | ------: | ------------------------------------------------------------- | ----------- |
| 89.2% |      99 | `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` | `<unknown>` |
| 10.8% |      12 | `PhaseIterGVN::optimize()`                                    | `<unknown>` |

##### `PhaseIdealLoop::build_and_optimize()` (`<unknown>`)

|     % | Samples | Callee                                                                  | Location    |
| ----: | ------: | ----------------------------------------------------------------------- | ----------- |
| 28.3% |      28 | `PhaseIdealLoop::split_if_with_blocks(VectorSet&, Node_Stack&)`         | `<unknown>` |
| 28.3% |      28 | `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)`  | `<unknown>` |
| 14.1% |      14 | `PhaseIdealLoop::build_loop_early(VectorSet&, Node_List&, Node_Stack&)` | `<unknown>` |
|  6.1% |       6 | `PhaseIdealLoop::build_loop_tree()`                                     | `<unknown>` |
|  4.0% |       4 | `PhaseIdealLoop::Dominators()`                                          | `<unknown>` |

##### `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` (`<unknown>`)

|      % | Samples | Callee                                 | Location    |
| -----: | ------: | -------------------------------------- | ----------- |
| 100.0% |      99 | `PhaseIdealLoop::build_and_optimize()` | `<unknown>` |

##### `Compilation::emit_lir()` (`<unknown>`)

|     % | Samples | Callee                                       | Location    |
| ----: | ------: | -------------------------------------------- | ----------- |
| 83.1% |      74 | `LinearScan::do_linear_scan()`               | `<unknown>` |
| 15.7% |      14 | `BlockList::iterate_forward(BlockClosure*)`  | `<unknown>` |
|  1.1% |       1 | `ControlFlowOptimizer::optimize(BlockList*)` | `<unknown>` |

##### `LinearScan::do_linear_scan()` (`<unknown>`)

|     % | Samples | Callee                                                                 | Location    |
| ----: | ------: | ---------------------------------------------------------------------- | ----------- |
| 44.6% |      33 | `LinearScan::allocate_registers()`                                     | `<unknown>` |
| 17.6% |      13 | `LinearScan::assign_reg_num(GrowableArray<LIR_Op*>*, IntervalWalker*)` | `<unknown>` |
| 12.2% |       9 | `LinearScan::build_intervals()`                                        | `<unknown>` |
|  6.8% |       5 | `LinearScan::resolve_data_flow()`                                      | `<unknown>` |
|  6.8% |       5 | `LinearScan::compute_global_live_sets()`                               | `<unknown>` |

##### `WorkerThread::run()` (`<unknown>`)

|     % | Samples | Callee                                          | Location    |
| ----: | ------: | ----------------------------------------------- | ----------- |
| 47.9% |      34 | `G1EvacuateRegionsBaseTask::work(unsigned int)` | `<unknown>` |
| 28.2% |      20 | `G1RebuildRSAndScrubTask::work(unsigned int)`   | `<unknown>` |
| 16.9% |      12 | `G1CMConcurrentMarkingTask::work(unsigned int)` | `<unknown>` |
|  4.2% |       3 | `G1CMRootRegionScanTask::work(unsigned int)`    | `<unknown>` |
|  2.8% |       2 | `G1ClearBitMapTask::work(unsigned int)`         | `<unknown>` |

##### `loadClass(String, boolean)` (`java.lang.ClassLoader`)

|     % | Samples | Callee                             | Location                                                 |
| ----: | ------: | ---------------------------------- | -------------------------------------------------------- |
| 91.4% |      64 | `findClass(String)`                | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |
|  4.3% |       3 | `findBootstrapClassOrNull(String)` | `java.lang.ClassLoader`                                  |
|  4.3% |       3 | `findClass(String)`                | `java.net.URLClassLoader`                                |
|  1.4% |       1 | `findLoadedClass(String)`          | `java.lang.ClassLoader`                                  |
|  1.4% |       1 | `loadClass(String, boolean)`       | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |

##### `read(byte[], int, int)` (`java.util.zip.ZipInputStream`)

|     % | Samples | Callee                     | Location                            |
| ----: | ------: | -------------------------- | ----------------------------------- |
| 94.2% |      65 | `read(byte[], int, int)`   | `java.util.zip.InflaterInputStream` |
|  5.8% |       4 | `update(byte[], int, int)` | `java.util.zip.CRC32`               |

##### `read(byte[])` (`java.io.FilterInputStream`)

|      % | Samples | Callee                   | Location                       |
| -----: | ------: | ------------------------ | ------------------------------ |
| 100.0% |      69 | `read(byte[], int, int)` | `java.util.zip.ZipInputStream` |

##### `Compilation::build_hir()` (`<unknown>`)

|     % | Samples | Callee                                            | Location    |
| ----: | ------: | ------------------------------------------------- | ----------- |
| 77.9% |      53 | `IR::IR(Compilation*, ciMethod*, int)`            | `<unknown>` |
|  8.8% |       6 | `GlobalValueNumbering::GlobalValueNumbering(IR*)` | `<unknown>` |
|  5.9% |       4 | `IR::compute_use_counts()`                        | `<unknown>` |
|  5.9% |       4 | `IR::eliminate_null_checks()`                     | `<unknown>` |
|  1.5% |       1 | `IR::compute_code()`                              | `<unknown>` |

##### `defineClass(String, byte[], int, int, ProtectionDomain)` (`java.lang.ClassLoader`)

|     % | Samples | Callee                                                                          | Location                |
| ----: | ------: | ------------------------------------------------------------------------------- | ----------------------- |
| 96.9% |      63 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader` |
|  3.1% |       2 | `postDefineClass(Class, ProtectionDomain)`                                      | `java.lang.ClassLoader` |
|  1.5% |       1 | `preDefineClass(String, ProtectionDomain)`                                      | `java.lang.ClassLoader` |

##### `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`)

|     % | Samples | Callee                      | Location                            |
| ----: | ------: | --------------------------- | ----------------------------------- |
| 92.3% |      60 | `inflate(byte[], int, int)` | `java.util.zip.Inflater`            |
|  7.7% |       5 | `fill()`                    | `java.util.zip.InflaterInputStream` |

##### `defineClass(String, byte[], int, int)` (`java.lang.ClassLoader`)

|      % | Samples | Callee                                                    | Location                |
| -----: | ------: | --------------------------------------------------------- | ----------------------- |
| 100.0% |      64 | `defineClass(String, byte[], int, int, ProtectionDomain)` | `java.lang.ClassLoader` |

##### `Parse::Parse(JVMState*, ciMethod*, float)` (`<unknown>`)

|     % | Samples | Callee                                    | Location    |
| ----: | ------: | ----------------------------------------- | ----------- |
| 95.2% |      60 | `Parse::do_all_blocks()`                  | `<unknown>` |
|  3.2% |       2 | `Parse::init_blocks()`                    | `<unknown>` |
|  3.2% |       2 | `GraphKit::set_map_clone(SafePointNode*)` | `<unknown>` |
|  3.2% |       2 | `Parse::do_exits()`                       | `<unknown>` |
|  3.2% |       2 | `Parse::create_entry_map()`               | `<unknown>` |

##### `ParseGenerator::generate(JVMState*)` (`<unknown>`)

|      % | Samples | Callee                                      | Location    |
| -----: | ------: | ------------------------------------------- | ----------- |
| 100.0% |      63 | `Parse::Parse(JVMState*, ciMethod*, float)` | `<unknown>` |

##### `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` (`java.lang.ClassLoader`)

|     % | Samples | Callee                                    | Location                                                 |
| ----: | ------: | ----------------------------------------- | -------------------------------------------------------- |
| 93.7% |      59 | `Java_java_lang_ClassLoader_defineClass1` | `<unknown>`                                              |
| 23.8% |      15 | `loadClass(String)`                       | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |
|  1.6% |       1 | `loadClass(String)`                       | `java.lang.ClassLoader`                                  |

##### `Java_java_util_zip_Inflater_inflateBytesBytes` (`<unknown>`)

|     % | Samples | Callee                              | Location    |
| ----: | ------: | ----------------------------------- | ----------- |
| 67.7% |      42 | `inflate_fast`                      | `<unknown>` |
| 25.8% |      16 | `inflate`                           | `<unknown>` |
|  3.2% |       2 | `jni_GetPrimitiveArrayCritical`     | `<unknown>` |
|  1.6% |       1 | `jni_ReleasePrimitiveArrayCritical` | `<unknown>` |
|  1.6% |       1 | `pthread_jit_write_protect_np`      | `<unknown>` |

##### `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`)

|      % | Samples | Callee                                          | Location    |
| -----: | ------: | ----------------------------------------------- | ----------- |
| 100.0% |      62 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `<unknown>` |

##### `inflate(byte[], int, int)` (`java.util.zip.Inflater`)

|      % | Samples | Callee                                                        | Location                 |
| -----: | ------: | ------------------------------------------------------------- | ------------------------ |
| 100.0% |      62 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` | `java.util.zip.Inflater` |

##### `KlassFactory::create_from_stream(ClassFileStream*, Symbol*, ClassLoaderData*, ClassLoadInfo const&, JavaThread*)` (`<unknown>`)

|     % | Samples | Callee                                                                                                                                         | Location    |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 93.3% |      56 | `ClassFileParser::ClassFileParser(ClassFileStream*, Symbol*, ClassLoaderData*, ClassLoadInfo const*, ClassFileParser::Publicity, JavaThread*)` | `<unknown>` |
|  6.7% |       4 | `ClassFileParser::create_instance_klass(bool, ClassInstanceInfo const&, JavaThread*)`                                                          | `<unknown>` |

##### `Parse::do_one_block()` (`<unknown>`)

|     % | Samples | Callee                               | Location    |
| ----: | ------: | ------------------------------------ | ----------- |
| 91.7% |      55 | `Parse::do_call()`                   | `<unknown>` |
| 16.7% |      10 | `Parse::do_field_access(bool, bool)` | `<unknown>` |
| 10.0% |       6 | `Parse::do_one_bytecode()`           | `<unknown>` |
|  6.7% |       4 | `Parse::do_checkcast()`              | `<unknown>` |
|  6.7% |       4 | `Parse::array_load(BasicType)`       | `<unknown>` |

##### `Parse::do_all_blocks()` (`<unknown>`)

|      % | Samples | Callee                  | Location    |
| -----: | ------: | ----------------------- | ----------- |
| 100.0% |      60 | `Parse::do_one_block()` | `<unknown>` |

##### `SystemDictionary::resolve_class_from_stream(ClassFileStream*, Symbol*, Handle, ClassLoadInfo const&, JavaThread*)` (`<unknown>`)

|     % | Samples | Callee                                                                                                             | Location    |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------ | ----------- |
| 93.2% |      55 | `KlassFactory::create_from_stream(ClassFileStream*, Symbol*, ClassLoaderData*, ClassLoadInfo const&, JavaThread*)` | `<unknown>` |
|  6.8% |       4 | `SystemDictionary::define_instance_class(InstanceKlass*, Handle, JavaThread*)`                                     | `<unknown>` |

##### `jvm_define_class_common(char const*, _jobject*, signed char const*, int, _jobject*, char const*, JavaThread*)` (`<unknown>`)

|      % | Samples | Callee                                                                                                              | Location    |
| -----: | ------: | ------------------------------------------------------------------------------------------------------------------- | ----------- |
| 100.0% |      59 | `SystemDictionary::resolve_class_from_stream(ClassFileStream*, Symbol*, Handle, ClassLoadInfo const&, JavaThread*)` | `<unknown>` |

##### `JVM_DefineClassWithSource` (`<unknown>`)

|      % | Samples | Callee                                                                                                          | Location    |
| -----: | ------: | --------------------------------------------------------------------------------------------------------------- | ----------- |
| 100.0% |      59 | `jvm_define_class_common(char const*, _jobject*, signed char const*, int, _jobject*, char const*, JavaThread*)` | `<unknown>` |

##### `Java_java_lang_ClassLoader_defineClass1` (`<unknown>`)

|     % | Samples | Callee                      | Location    |
| ----: | ------: | --------------------------- | ----------- |
| 98.3% |      58 | `JVM_DefineClassWithSource` | `<unknown>` |
|  1.7% |       1 | `_platform_memmove`         | `<unknown>` |

##### `ClassFileParser::ClassFileParser(ClassFileStream*, Symbol*, ClassLoaderData*, ClassLoadInfo const*, ClassFileParser::Publicity, JavaThread*)` (`<unknown>`)

|     % | Samples | Callee                                                                                            | Location    |
| ----: | ------: | ------------------------------------------------------------------------------------------------- | ----------- |
| 94.6% |      53 | `ClassFileParser::parse_stream(ClassFileStream const*, JavaThread*)`                              | `<unknown>` |
|  5.4% |       3 | `ClassFileParser::post_process_parsed_stream(ClassFileStream const*, ConstantPool*, JavaThread*)` | `<unknown>` |

##### `Parse::do_call()` (`<unknown>`)

|     % | Samples | Callee                                                                                  | Location    |
| ----: | ------: | --------------------------------------------------------------------------------------- | ----------- |
| 65.5% |      36 | `PredictedCallGenerator::generate(JVMState*)`                                           | `<unknown>` |
| 61.8% |      34 | `ParseGenerator::generate(JVMState*)`                                                   | `<unknown>` |
| 20.0% |      11 | `Compile::call_generator(ciMethod*, int, bool, JVMState*, bool, float, ciKlass*, bool)` | `<unknown>` |
|  3.6% |       2 | `LibraryIntrinsic::generate(JVMState*)`                                                 | `<unknown>` |
|  1.8% |       1 | `GraphKit::kill_dead_locals()`                                                          | `<unknown>` |

##### `Compile::optimize_loops(PhaseIterGVN&, LoopOptsMode)` (`<unknown>`)

|      % | Samples | Callee                                                  | Location    |
| -----: | ------: | ------------------------------------------------------- | ----------- |
| 100.0% |      54 | `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` | `<unknown>` |

##### `GraphBuilder::GraphBuilder(Compilation*, IRScope*)` (`<unknown>`)

|     % | Samples | Callee                                                            | Location    |
| ----: | ------: | ----------------------------------------------------------------- | ----------- |
| 94.3% |      50 | `GraphBuilder::iterate_all_blocks(bool)`                          | `<unknown>` |
|  3.8% |       2 | `BlockBegin::iterate_preorder(BlockClosure*)`                     | `<unknown>` |
|  1.9% |       1 | `BlockListBuilder::BlockListBuilder(Compilation*, IRScope*, int)` | `<unknown>` |

##### `ClassFileParser::parse_stream(ClassFileStream const*, JavaThread*)` (`<unknown>`)

|     % | Samples | Callee                                                                                              | Location    |
| ----: | ------: | --------------------------------------------------------------------------------------------------- | ----------- |
| 75.5% |      40 | `ClassFileParser::parse_constant_pool(ClassFileStream const*, ConstantPool*, int, JavaThread*)`     | `<unknown>` |
| 18.9% |      10 | `ClassFileParser::parse_methods(ClassFileStream const*, bool, bool*, bool*, bool*, JavaThread*)`    | `<unknown>` |
|  3.8% |       2 | `ConstantPool::allocate(ClassLoaderData*, int, JavaThread*)`                                        | `<unknown>` |
|  1.9% |       1 | `ClassFileParser::parse_interfaces(ClassFileStream const*, int, ConstantPool*, bool*, JavaThread*)` | `<unknown>` |

##### `GraphBuilder::iterate_bytecodes_for_block(int)` (`<unknown>`)

|     % | Samples | Callee                                        | Location    |
| ----: | ------: | --------------------------------------------- | ----------- |
| 80.0% |      40 | `GraphBuilder::invoke(Bytecodes::Code)`       | `<unknown>` |
| 18.0% |       9 | `GraphBuilder::access_field(Bytecodes::Code)` | `<unknown>` |
|  4.0% |       2 | `BlockBegin::try_merge(ValueStack*, bool)`    | `<unknown>` |
|  2.0% |       1 | `GraphBuilder::load_constant()`               | `<unknown>` |
|  2.0% |       1 | `GraphBuilder::check_cast(int)`               | `<unknown>` |

##### `GraphBuilder::iterate_all_blocks(bool)` (`<unknown>`)

|      % | Samples | Callee                                                       | Location    |
| -----: | ------: | ------------------------------------------------------------ | ----------- |
| 100.0% |      50 | `GraphBuilder::iterate_bytecodes_for_block(int)`             | `<unknown>` |
|   4.0% |       2 | `ValueStack::ValueStack(ValueStack*, ValueStack::Kind, int)` | `<unknown>` |

##### `resumeWith(Object)` (`kotlin.coroutines.jvm.internal.BaseContinuationImpl`)

|     % | Samples | Callee                  | Location                                                                                                               |
| ----: | ------: | ----------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| 70.0% |      35 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask$processLevel$6`                                  |
| 46.0% |      23 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner$processCandidate$1`                               |
| 12.0% |       6 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver$enqueueResolutionTasks$2`                               |
|  4.0% |       2 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirInvokeResolveTowerExtension$enqueueResolverTasksForInvoke$3`          |
|  4.0% |       2 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolveTask$processCandidatesWithGivenImplicitReceiverAsValue$1` |

##### `getValue()` (`kotlin.SafePublicationLazyImpl`)

|     % | Samples | Callee     | Location                                                                                                   |
| ----: | ------: | ---------- | ---------------------------------------------------------------------------------------------------------- |
| 57.1% |       8 | `invoke()` | `kotlin.reflect.jvm.internal.DescriptorKProperty$$Lambda$0`                                                |
| 14.3% |       2 | `invoke()` | `org.jetbrains.kotlin.fir.java.deserialization.JvmBinaryAnnotationDeserializer$$Lambda.0x00000003015d6d10` |
| 14.3% |       2 | `invoke()` | `org.jetbrains.kotlin.fir.scopes.impl.FirClassDeclaredMemberScopeImpl$$Lambda.0x0000000301627338`          |
|  7.1% |       1 | `invoke()` | `org.jetbrains.kotlin.fir.resolve.calls.ImplicitReceiverValue$$Lambda.0x00000003016559e8`                  |
|  7.1% |       1 | `invoke()` | `org.jetbrains.kotlin.fir.resolve.substitution.ConeSubstitutorByMap$$Lambda.0x0000000301635038`            |

##### `getValue()` (`kotlin.SynchronizedLazyImpl`)

|     % | Samples | Callee     | Location                                                                                    |
| ----: | ------: | ---------- | ------------------------------------------------------------------------------------------- |
| 21.4% |       3 | `invoke()` | `org.jetbrains.kotlin.cli.jvm.modules.CoreJrtVirtualFile$$Lambda.0x0000000301390000`        |
| 21.4% |       3 | `invoke()` | `org.jetbrains.kotlin.builtins.DefaultBuiltIns$$Lambda.0x00000003017539f8`                  |
|  7.1% |       1 | `invoke()` | `org.jetbrains.kotlin.fir.deserialization.PackagePartsCacheData$$Lambda.0x00000003015d8ae0` |
|  7.1% |       1 | `invoke()` | `org.jetbrains.kotlin.fir.scopes.impl.FirEnumEntriesSupport$$Lambda.0x0000000301453280`     |
|  7.1% |       1 | `invoke()` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x00000003018196d0`           |

##### `getValue()` (`kotlin.UnsafeLazyImpl`)

|     % | Samples | Callee     | Location                                                                                                                                                   |
| ----: | ------: | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 66.7% |       8 | `invoke()` | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver$$Lambda.0x0000000301688d28`                                                                        |
| 16.7% |       2 | `invoke()` | `org.jetbrains.kotlin.fir.resolve.calls.candidate.Candidate$$Lambda.0x000000030166fc50`                                                                    |
|  8.3% |       1 | `invoke()` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformer$BodyResolveTransformerComponents$$Lambda.0x0000000301594cf8` |
|  8.3% |       1 | `invoke()` | `org.jetbrains.kotlin.types.AbstractTypeApproximator$$Lambda.0x000000030169b9f0`                                                                           |
|  8.3% |       1 | `invoke()` | `org.jetbrains.kotlin.load.java.structure.impl.classFiles.BinaryJavaClass$$Lambda.0x0000000301608000`                                                      |

##### `linkCallSiteImpl(Class, MethodHandle, String, MethodType, Object, Object[])` (`java.lang.invoke.MethodHandleNatives`)

|     % | Samples | Callee                                                      | Location                    |
| ----: | ------: | ----------------------------------------------------------- | --------------------------- |
| 90.9% |      10 | `makeSite(MethodHandle, String, MethodType, Object, Class)` | `java.lang.invoke.CallSite` |
|  9.1% |       1 | `linkToTargetMethod(MethodType)`                            | `java.lang.invoke.Invokers` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ---: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2.9% |      37 | `inflate_fast` ← `Java_java_util_zip_Inflater_inflateBytesBytes` ← `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`) ← `inflate(byte[], int, int)` ← `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`) ← `read(byte[], int, int)` (`java.util.zip.ZipInputStream`) ← `read(byte[])` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                                                                                                                                                                                                                                            |
| 1.3% |      16 | `PhaseChaitin::Split(unsigned int, ResourceArea*)` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 1.2% |      15 | `PhaseChaitin::build_ifg_physical(ResourceArea*)` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 1.1% |      14 | `PhaseChaitin::elide_copy(Node*, int, Block*, Node_List*, Node_List*, bool)` ← `PhaseChaitin::post_allocate_copy_removal()` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                       |
| 0.8% |      10 | `PhaseAggressiveCoalesce::insert_copies(Matcher&)` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 0.7% |       9 | `PhaseLive::compute(unsigned int)` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 0.5% |       7 | `LinearScanWalker::free_collect_inactive_fixed(Interval*)` ← `LinearScanWalker::alloc_free_reg(Interval*)` ← `LinearScanWalker::activate_current()` ← `IntervalWalker::walk_to(int)` ← `LinearScan::allocate_registers()` ← `LinearScan::do_linear_scan()` ← `Compilation::emit_lir()` ← `Compilation::compile_java_method()` ← `Compilation::compile_method()` ← `Compilation::Compilation(AbstractCompiler*, ciEnv*, ciMethod*, int, BufferBlob*, bool, DirectiveSet*)` ← `Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                              |
| 0.5% |       7 | `PhaseChaitin::post_allocate_copy_removal()` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 0.5% |       7 | `PhaseChaitin::gather_lrg_masks(bool)` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.5% |       7 | `IndexSetIterator::advance_and_next()` ← `PhaseChaitin::build_ifg_physical(ResourceArea*)` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                        |
| 0.5% |       7 | `G1CardSet::add_to_howl(void*, unsigned int, unsigned int, bool)` ← `G1CardSet::add_card(unsigned int, unsigned int, bool)` ← `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>(G1RebuildRemSetClosure*, oopDesc*, Klass*)` ← `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object(HeapRegion*, HeapWordImpl**)` ← `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_to_pb(HeapRegion*, HeapWordImpl**, HeapWordImpl**)` ← `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_region(HeapRegion*, HeapWordImpl**)` ← `HeapRegionManager::par_iterate(HeapRegionClosure*, HeapRegionClaimer*, unsigned int) const` ← `G1RebuildRSAndScrubTask::work(unsigned int)` ← `WorkerThread::run()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                         |
| 0.5% |       6 | `inflate` ← `Java_java_util_zip_Inflater_inflateBytesBytes` ← `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`) ← `inflate(byte[], int, int)` ← `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`) ← `read(byte[], int, int)` (`java.util.zip.ZipInputStream`) ← `read(byte[])` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                                                                                                                                                                                                                                                 |
| 0.5% |       6 | `inflate_table` ← `inflate` ← `Java_java_util_zip_Inflater_inflateBytesBytes` ← `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`) ← `inflate(byte[], int, int)` ← `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`) ← `read(byte[], int, int)` (`java.util.zip.ZipInputStream`) ← `read(byte[])` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                                                                                                                                                                                                                               |
| 0.5% |       6 | `IntervalWalker::walk_to(IntervalState, int)` ← `IntervalWalker::walk_to(int)` ← `LinearScan::allocate_registers()` ← `LinearScan::do_linear_scan()` ← `Compilation::emit_lir()` ← `Compilation::compile_java_method()` ← `Compilation::compile_method()` ← `Compilation::Compilation(AbstractCompiler*, ciEnv*, ciMethod*, int, BufferBlob*, bool, DirectiveSet*)` ← `Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                    |
| 0.5% |       6 | `LinearScan::assign_reg_num(GrowableArray<LIR_Op*>*, IntervalWalker*)` ← `LinearScan::do_linear_scan()` ← `Compilation::emit_lir()` ← `Compilation::compile_java_method()` ← `Compilation::compile_method()` ← `Compilation::Compilation(AbstractCompiler*, ciEnv*, ciMethod*, int, BufferBlob*, bool, DirectiveSet*)` ← `Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                 |
| 0.4% |       5 | `fwd_copy_again` ← `G1ParScanThreadState::trim_queue_to_threshold(unsigned int)` ← `G1ScanHRForRegionClosure::scan_memregion(unsigned int, MemRegion)` ← `void G1ScanHRForRegionClosure::ChunkScanner::on_dirty_cards<G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)>(G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)&&)` ← `G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)` ← `G1ScanHRForRegionClosure::do_heap_region(HeapRegion*)` ← `G1RemSet::scan_heap_roots(G1ParScanThreadState*, unsigned int, G1GCPhaseTimes::GCParPhases, G1GCPhaseTimes::GCParPhases, bool)` ← `G1EvacuateRegionsTask::scan_roots(G1ParScanThreadState*, unsigned int)` ← `G1EvacuateRegionsBaseTask::work(unsigned int)` ← `WorkerThread::run()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start` |
| 0.4% |       5 | `PhaseIdealLoop::build_loop_early(VectorSet&, Node_List&, Node_Stack&)` ← `PhaseIdealLoop::build_and_optimize()` ← `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` ← `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` ← `Compile::optimize_loops(PhaseIterGVN&, LoopOptsMode)` ← `Compile::Optimize()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                     |
| 0.4% |       5 | `LinearScanWalker::alloc_free_reg(Interval*)` ← `LinearScanWalker::activate_current()` ← `IntervalWalker::walk_to(int)` ← `LinearScan::allocate_registers()` ← `LinearScan::do_linear_scan()` ← `Compilation::emit_lir()` ← `Compilation::compile_java_method()` ← `Compilation::compile_method()` ← `Compilation::Compilation(AbstractCompiler*, ciEnv*, ciMethod*, int, BufferBlob*, bool, DirectiveSet*)` ← `Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                           |
| 0.4% |       5 | `PhaseIFG::effective_degree(unsigned int) const` ← `PhaseIFG::Compute_Effective_Degree()` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                         |
| 0.4% |       5 | `Arena::contains(void const*) const` ← `Matcher::xform(Node*, int)` ← `Matcher::match()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                |

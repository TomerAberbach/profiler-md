# Sampling profile diff

Collected 1,366 samples → 1,335 samples (-31 samples, -2.3%).

| Category          |  Change | Delta |             % |   Samples |
| ----------------- | ------: | ----: | ------------: | --------: |
| Compiler          |   -0.2% |    -1 | 45.5% → 46.5% | 622 → 621 |
| Native            |   -3.8% |   -20 | 38.9% → 38.3% | 531 → 511 |
| Ours              |   -3.8% |    -5 |   9.7% → 9.5% | 132 → 127 |
| Standard library  |   +5.2% |    +3 |   4.2% → 4.6% |   58 → 61 |
| JIT               |  -28.6% |    -6 |   1.5% → 1.1% |   21 → 15 |
| Garbage collector | removed |    -1 |   0.1% → 0.0% |     1 → 0 |
| Unknown           | removed |    -1 |   0.1% → 0.0% |     1 → 0 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples collected within the function body, excluding callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |           % | Samples | Function                                                                                                                                                                    | Location                         |
| ------: | ----: | ----------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
|  +58.8% |   +10 | 1.2% → 2.0% | 17 → 27 | `SymbolTable::do_lookup(char const*, int, unsigned long)`                                                                                                                   | `<unknown>`                      |
|  +87.5% |    +7 | 0.6% → 1.1% |  8 → 15 | `__psynch_cvwait`                                                                                                                                                           | `<unknown>`                      |
|     new |    +6 | 0.0% → 0.4% |   0 → 6 | `GraphBuilder::iterate_bytecodes_for_block(int)`                                                                                                                            | `<unknown>`                      |
|  +27.8% |    +5 | 1.3% → 1.7% | 18 → 23 | `InstanceKlass::find_method_index(Array<Method*> const*, Symbol const*, Symbol const*, Klass::OverpassLookupMode, Klass::StaticLookupMode, Klass::PrivateLookupMode)`       | `<unknown>`                      |
|  +45.5% |    +5 | 0.8% → 1.2% | 11 → 16 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>(DIR_Chunk* const&)` | `<unknown>`                      |
| +250.0% |    +5 | 0.1% → 0.5% |   2 → 7 | `PhaseChaitin::Select()`                                                                                                                                                    | `<unknown>`                      |
|  +83.3% |    +5 | 0.4% → 0.8% |  6 → 11 | `PhaseChaitin::elide_copy(Node*, int, Block*, Node_List*, Node_List*, bool)`                                                                                                | `<unknown>`                      |
| +166.7% |    +5 | 0.2% → 0.6% |   3 → 8 | `PhaseIterGVN::add_users_to_worklist(Node*)`                                                                                                                                | `<unknown>`                      |
|     new |    +5 | 0.0% → 0.4% |   0 → 5 | `OopMapSort::sort()`                                                                                                                                                        | `<unknown>`                      |
| +400.0% |    +4 | 0.1% → 0.4% |   1 → 5 | `PhaseIterGVN::subsume_node(Node*, Node*)`                                                                                                                                  | `<unknown>`                      |
|     new |    +4 | 0.0% → 0.3% |   0 → 4 | `ValueStack::pin_stack_for_linear_scan()`                                                                                                                                   | `<unknown>`                      |
|     new |    +4 | 0.0% → 0.3% |   0 → 4 | `areEqual(Object, Object)`                                                                                                                                                  | `kotlin.jvm.internal.Intrinsics` |
| +133.3% |    +4 | 0.2% → 0.5% |   3 → 7 | `MachNode::rematerialize() const`                                                                                                                                           | `<unknown>`                      |
| +200.0% |    +4 | 0.1% → 0.4% |   2 → 6 | `PhaseCFG::partial_latency_of_defs(Node*)`                                                                                                                                  | `<unknown>`                      |
| +400.0% |    +4 | 0.1% → 0.4% |   1 → 5 | `updateBytesCRC32`                                                                                                                                                          | `<unknown>`                      |
|     new |    +4 | 0.0% → 0.3% |   0 → 4 | `SignatureStream::next()`                                                                                                                                                   | `<unknown>`                      |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `PhaseIterGVN::optimize()`                                                                                                                                                  | `<unknown>`                      |
| +100.0% |    +3 | 0.2% → 0.4% |   3 → 6 | `Matcher::match_tree(Node const*)`                                                                                                                                          | `<unknown>`                      |
| +300.0% |    +3 | 0.1% → 0.3% |   1 → 4 | `PhaseCCP::transform(Node*)`                                                                                                                                                | `<unknown>`                      |
| +300.0% |    +3 | 0.1% → 0.3% |   1 → 4 | `_platform_memchr`                                                                                                                                                          | `<unknown>`                      |

##### Compiler

|  Change | Delta |           % | Samples | Function                                                                     | Location    |
| ------: | ----: | ----------: | ------: | ---------------------------------------------------------------------------- | ----------- |
|     new |    +6 | 0.0% → 0.4% |   0 → 6 | `GraphBuilder::iterate_bytecodes_for_block(int)`                             | `<unknown>` |
| +250.0% |    +5 | 0.1% → 0.5% |   2 → 7 | `PhaseChaitin::Select()`                                                     | `<unknown>` |
|  +83.3% |    +5 | 0.4% → 0.8% |  6 → 11 | `PhaseChaitin::elide_copy(Node*, int, Block*, Node_List*, Node_List*, bool)` | `<unknown>` |
| +166.7% |    +5 | 0.2% → 0.6% |   3 → 8 | `PhaseIterGVN::add_users_to_worklist(Node*)`                                 | `<unknown>` |
|     new |    +5 | 0.0% → 0.4% |   0 → 5 | `OopMapSort::sort()`                                                         | `<unknown>` |
| +400.0% |    +4 | 0.1% → 0.4% |   1 → 5 | `PhaseIterGVN::subsume_node(Node*, Node*)`                                   | `<unknown>` |
|     new |    +4 | 0.0% → 0.3% |   0 → 4 | `ValueStack::pin_stack_for_linear_scan()`                                    | `<unknown>` |
| +133.3% |    +4 | 0.2% → 0.5% |   3 → 7 | `MachNode::rematerialize() const`                                            | `<unknown>` |
| +200.0% |    +4 | 0.1% → 0.4% |   2 → 6 | `PhaseCFG::partial_latency_of_defs(Node*)`                                   | `<unknown>` |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `PhaseIterGVN::optimize()`                                                   | `<unknown>` |
| +100.0% |    +3 | 0.2% → 0.4% |   3 → 6 | `Matcher::match_tree(Node const*)`                                           | `<unknown>` |
| +300.0% |    +3 | 0.1% → 0.3% |   1 → 4 | `PhaseCCP::transform(Node*)`                                                 | `<unknown>` |
| +300.0% |    +3 | 0.1% → 0.3% |   1 → 4 | `Compile::disconnect_useless_nodes(Unique_Node_List&, Unique_Node_List&)`    | `<unknown>` |
| +100.0% |    +3 | 0.2% → 0.4% |   3 → 6 | `LinearScan::assign_reg_num(GrowableArray<LIR_Op*>*, IntervalWalker*)`       | `<unknown>` |
| +300.0% |    +3 | 0.1% → 0.3% |   1 → 4 | `RegMask::is_aligned_pairs() const`                                          | `<unknown>` |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `PhaseCCP::push_more_uses(Unique_Node_List&, Node*, Node const*) const`      | `<unknown>` |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `TypeInterfaces::eq(Type const*) const`                                      | `<unknown>` |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `JVMState::clone_shallow(Compile*) const`                                    | `<unknown>` |
|  +66.7% |    +2 | 0.2% → 0.4% |   3 → 5 | `Node::dominates(Node*, Node_List&)`                                         | `<unknown>` |
|     new |    +2 | 0.0% → 0.1% |   0 → 2 | `Matcher::find_shared(Node*)`                                                | `<unknown>` |

##### Native

|  Change | Delta |           % | Samples | Function                                                                                                                                                                             | Location    |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- |
|  +58.8% |   +10 | 1.2% → 2.0% | 17 → 27 | `SymbolTable::do_lookup(char const*, int, unsigned long)`                                                                                                                            | `<unknown>` |
|  +87.5% |    +7 | 0.6% → 1.1% |  8 → 15 | `__psynch_cvwait`                                                                                                                                                                    | `<unknown>` |
|  +27.8% |    +5 | 1.3% → 1.7% | 18 → 23 | `InstanceKlass::find_method_index(Array<Method*> const*, Symbol const*, Symbol const*, Klass::OverpassLookupMode, Klass::StaticLookupMode, Klass::PrivateLookupMode)`                | `<unknown>` |
|  +45.5% |    +5 | 0.8% → 1.2% | 11 → 16 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>(DIR_Chunk* const&)`          | `<unknown>` |
| +400.0% |    +4 | 0.1% → 0.4% |   1 → 5 | `updateBytesCRC32`                                                                                                                                                                   | `<unknown>` |
|     new |    +4 | 0.0% → 0.3% |   0 → 4 | `SignatureStream::next()`                                                                                                                                                            | `<unknown>` |
| +300.0% |    +3 | 0.1% → 0.3% |   1 → 4 | `_platform_memchr`                                                                                                                                                                   | `<unknown>` |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `InstanceKlass::find_local_field(Symbol*, Symbol*, fieldDescriptor*) const`                                                                                                          | `<unknown>` |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `semaphore_wait_trap`                                                                                                                                                                | `<unknown>` |
|  +40.0% |    +2 | 0.4% → 0.5% |   5 → 7 | `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>(G1CMOopClosure*, oopDesc*, Klass*)`                                                    | `<unknown>` |
|     new |    +2 | 0.0% → 0.1% |   0 → 2 | `nmethod::finalize_relocations()`                                                                                                                                                    | `<unknown>` |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `pthread_mutex_lock`                                                                                                                                                                 | `<unknown>` |
| +100.0% |    +2 | 0.1% → 0.3% |   2 → 4 | `NullCheckEliminator::iterate_one(BlockBegin*)`                                                                                                                                      | `<unknown>` |
|     new |    +2 | 0.0% → 0.1% |   0 → 2 | `GlobalValueNumbering::GlobalValueNumbering(IR*)`                                                                                                                                    | `<unknown>` |
|     new |    +2 | 0.0% → 0.1% |   0 → 2 | `State::DFA(int, Node const*)`                                                                                                                                                       | `<unknown>` |
|  +50.0% |    +2 | 0.3% → 0.4% |   4 → 6 | `UTF8::is_legal_utf8(unsigned char const*, int, bool)`                                                                                                                               | `<unknown>` |
|     new |    +2 | 0.0% → 0.1% |   0 → 2 | `G1ConcurrentMark::mark_in_bitmap(unsigned int, oopDesc*)`                                                                                                                           | `<unknown>` |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `pthread_mutex_unlock`                                                                                                                                                               | `<unknown>` |
|     new |    +2 | 0.0% → 0.1% |   0 → 2 | `ClassVerifier::verify_invoke_instructions(RawBytecodeStream*, unsigned int, StackMapFrame*, bool, bool*, VerificationType, constantPoolHandle const&, StackMapTable*, JavaThread*)` | `<unknown>` |
|     new |    +2 | 0.0% → 0.1% |   0 → 2 | `State::MachOperGenerator(int)`                                                                                                                                                      | `<unknown>` |

##### Ours

| Change | Delta |           % | Samples | Function                                                                                                                                                                               | Location                                                                    |
| -----: | ----: | ----------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
|    new |    +2 | 0.0% → 0.1% |   0 → 2 | `resolveVariableAccessAndSelectCandidateImpl(FirQualifiedAccessExpression, boolean, ResolutionMode, boolean, FirElement, Function1)`                                                   | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`                    |
|    new |    +2 | 0.0% → 0.1% |   0 → 2 | `fullyExpandedTypeWithSource(ConeClassLikeType, FirTypeRef, FirSession)`                                                                                                               | `org.jetbrains.kotlin.fir.analysis.checkers.FirUpperBoundViolatedHelpersKt` |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `processCandidate(Candidate, ResolutionContext, boolean, boolean)`                                                                                                                     | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner`       |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `acceptChildren(IrVisitor, Object)`                                                                                                                                                    | `org.jetbrains.kotlin.ir.expressions.IrMemberAccessExpression`              |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `visitCall(IrCall, Object)`                                                                                                                                                            | `org.jetbrains.kotlin.ir.visitors.IrVisitorVoid`                            |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `classScope(ConeClassLikeType, FirSession, ScopeSession, FirResolvePhase, ConeClassLikeLookupTag, FirClassSymbol)`                                                                     | `org.jetbrains.kotlin.fir.resolve.ScopeUtilsKt`                             |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `scope(ConeKotlinType, FirSession, ScopeSession, FirResolvePhase)`                                                                                                                     | `org.jetbrains.kotlin.fir.resolve.ScopeUtilsKt`                             |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `reportErrors(LighterASTNode, FlyweightCapableTreeStructure, KotlinLightParser$LightTreeParsingErrorListener, Ref)`                                                                    | `org.jetbrains.kotlin.parsing.KotlinLightParser`                            |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `getFileTypeByFile(VirtualFile)`                                                                                                                                                       | `com.intellij.core.CoreFileTypeRegistry`                                    |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `acceptChildren(FirVisitor, Object)`                                                                                                                                                   | `org.jetbrains.kotlin.fir.declarations.impl.FirReceiverParameterImpl`       |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `loadFunction$default(FirMemberDeserializer, ProtoBuf$Function, ProtoBuf$Class, FirClassSymbol, FirDeclarationOrigin, int, Object)`                                                    | `org.jetbrains.kotlin.fir.deserialization.FirMemberDeserializer`            |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `contains(KotlinTypeMarker, Function1)`                                                                                                                                                | `org.jetbrains.kotlin.fir.types.ConeInferenceContext`                       |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `toIrSymbolForCall(Fir2IrComponents, FirCallableSymbol, FirExpression, FirExpression)`                                                                                                 | `org.jetbrains.kotlin.fir.backend.utils.SymbolConversionUtilsKt`            |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `completeIsSubTypeOf(TypeCheckerState, TypeSystemContext, KotlinTypeMarker, KotlinTypeMarker, boolean)`                                                                                | `org.jetbrains.kotlin.types.AbstractTypeChecker`                            |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `transform(IrTransformer, Object)`                                                                                                                                                     | `org.jetbrains.kotlin.ir.expressions.IrExpression`                          |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `getSession()`                                                                                                                                                                         | `org.jetbrains.kotlin.fir.analysis.checkers.context.CheckerContext`         |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `analyzeInstruction(AbstractInsnNode, int, Frame, Frame, Frame)`                                                                                                                       | `org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer`             |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `visitSimpleFunction(IrSimpleFunction)`                                                                                                                                                | `org.jetbrains.kotlin.ir.visitors.IrElementTransformerVoid`                 |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `processCandidatesWithGivenImplicitReceiverAsValue(ImplicitReceiverValue, CallInfo, TowerGroup, Set, Set, Set, boolean, Continuation)`                                                 | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolveTask`          |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `loadAnnotationsFromProtocol$default(GeneratedMessageLite$ExtendableMessage, FirSession, GeneratedMessageLite$GeneratedExtension, NameResolver, AnnotationUseSiteTarget, int, Object)` | `org.jetbrains.kotlin.fir.deserialization.AnnotationDeserializationUtilKt`  |

##### Standard library

|  Change | Delta |           % | Samples | Function                                                   | Location                                               |
| ------: | ----: | ----------: | ------: | ---------------------------------------------------------- | ------------------------------------------------------ |
|     new |    +4 | 0.0% → 0.3% |   0 → 4 | `areEqual(Object, Object)`                                 | `kotlin.jvm.internal.Intrinsics`                       |
| +100.0% |    +2 | 0.1% → 0.3% |   2 → 4 | `sanitizeStackTrace(Throwable)`                            | `kotlin.jvm.internal.Intrinsics`                       |
|  +25.0% |    +1 | 0.3% → 0.4% |   4 → 5 | `checkNotNullParameter(Object, String)`                    | `kotlin.jvm.internal.Intrinsics`                       |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `newInvokeSpecial(Object, Object)`                         | `java.lang.invoke.DirectMethodHandle$Holder`           |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `defineClass(String, Resource)`                            | `java.net.URLClassLoader`                              |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `findBootstrapClass(String)`                               | `java.lang.ClassLoader`                                |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `get(Object)`                                              | `java.util.HashMap`                                    |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `verifyLocation(String, String)`                           | `jdk.internal.jimage.BasicImageReader`                 |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `isMemberAccessible(Class, Class, int, Class, Class, int)` | `sun.invoke.util.VerifyAccess`                         |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `lazy(LazyThreadSafetyMode, Function0)`                    | `kotlin.LazyKt__LazyJVMKt`                             |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `boxingDescriptor(Wrapper)`                                | `java.lang.invoke.TypeConvertingMethodAdapter`         |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `get(Object)`                                              | `jdk.internal.util.ReferencedKeyMap`                   |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `hasNext()`                                                | `jdk.internal.jrtfs.JrtDirectoryStream$1`              |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `<init>(String, String, LambdaForm, MethodType)`           | `java.lang.invoke.InvokerBytecodeGenerator`            |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `add(Object)`                                              | `java.util.HashSet`                                    |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `initialTryLock()`                                         | `java.util.concurrent.locks.ReentrantLock$NonfairSync` |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `referencedTypes(ClassLoader, List)`                       | `java.lang.reflect.Proxy$ProxyBuilder`                 |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `put11(int, int)`                                          | `jdk.internal.org.objectweb.asm.ByteVector`            |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `<init>()`                                                 | `java.util.HashMap`                                    |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `getSecurityManager()`                                     | `java.lang.System`                                     |

##### JIT

|  Change | Delta |           % | Samples | Function      | Location    |
| ------: | ----: | ----------: | ------: | ------------- | ----------- |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `itable stub` | `<unknown>` |

#### Improvements

Functions with the largest decrease in samples collected within the function body, excluding callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |           % | Samples | Function                                                                                                                                                        | Location    |
| ------: | ----: | ----------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
|  -70.0% |    -7 | 0.7% → 0.2% |  10 → 3 | `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)`                                                                                          | `<unknown>` |
|  -66.7% |    -6 | 0.7% → 0.2% |   9 → 3 | `ClassVerifier::verify_method(methodHandle const&, JavaThread*)`                                                                                                | `<unknown>` |
|  -75.0% |    -6 | 0.6% → 0.1% |   8 → 2 | `Unique_Node_List::remove(Node*)`                                                                                                                               | `<unknown>` |
|  -83.3% |    -5 | 0.4% → 0.1% |   6 → 1 | `G1ParScanThreadState::trim_queue_to_threshold(unsigned int)`                                                                                                   | `<unknown>` |
|  -62.5% |    -5 | 0.6% → 0.2% |   8 → 3 | `PhaseChaitin::post_allocate_copy_removal()`                                                                                                                    | `<unknown>` |
|  -35.7% |    -5 | 1.0% → 0.7% |  14 → 9 | `_platform_memset`                                                                                                                                              | `<unknown>` |
|  -44.4% |    -4 | 0.7% → 0.4% |   9 → 5 | `PhaseIdealLoop::Dominators()`                                                                                                                                  | `<unknown>` |
| removed |    -4 | 0.3% → 0.0% |   4 → 0 | `compare_immediate_pair(void const*, void const*)`                                                                                                              | `<unknown>` |
| removed |    -4 | 0.3% → 0.0% |   4 → 0 | `_platform_bzero`                                                                                                                                               | `<unknown>` |
|  -80.0% |    -4 | 0.4% → 0.1% |   5 → 1 | `PhaseIdealLoop::is_dominator(Node*, Node*)`                                                                                                                    | `<unknown>` |
| removed |    -4 | 0.3% → 0.0% |   4 → 0 | `_platform_memmove`                                                                                                                                             | `<unknown>` |
|  -42.9% |    -3 | 0.5% → 0.3% |   7 → 4 | `PhaseAggressiveCoalesce::insert_copies(Matcher&)`                                                                                                              | `<unknown>` |
|  -42.9% |    -3 | 0.5% → 0.3% |   7 → 4 | `I2C/C2I adapters(0xbb)`                                                                                                                                        | `<unknown>` |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `CProjNode::is_block_proj() const`                                                                                                                              | `<unknown>` |
|  -42.9% |    -3 | 0.5% → 0.3% |   7 → 4 | `DebugInformationRecorder::describe_scope(int, methodHandle const&, ciMethod*, int, bool, bool, bool, bool, bool, bool, DebugToken*, DebugToken*, DebugToken*)` | `<unknown>` |
|  -33.3% |    -3 | 0.7% → 0.4% |   9 → 6 | `ciObjectFactory::get_metadata(Metadata*)`                                                                                                                      | `<unknown>` |
|  -60.0% |    -3 | 0.4% → 0.1% |   5 → 2 | `Node::pinned() const`                                                                                                                                          | `<unknown>` |
|   -5.6% |    -3 | 4.0% → 3.8% | 54 → 51 | `inflate_fast`                                                                                                                                                  | `<unknown>` |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `PhaseIdealLoop::try_move_store_after_loop(Node*)`                                                                                                              | `<unknown>` |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `PhaseCFG::schedule_pinned_nodes(VectorSet&)`                                                                                                                   | `<unknown>` |

##### Compiler

|  Change | Delta |           % | Samples | Function                                                                                                                                                        | Location    |
| ------: | ----: | ----------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
|  -70.0% |    -7 | 0.7% → 0.2% |  10 → 3 | `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)`                                                                                          | `<unknown>` |
|  -75.0% |    -6 | 0.6% → 0.1% |   8 → 2 | `Unique_Node_List::remove(Node*)`                                                                                                                               | `<unknown>` |
|  -62.5% |    -5 | 0.6% → 0.2% |   8 → 3 | `PhaseChaitin::post_allocate_copy_removal()`                                                                                                                    | `<unknown>` |
|  -44.4% |    -4 | 0.7% → 0.4% |   9 → 5 | `PhaseIdealLoop::Dominators()`                                                                                                                                  | `<unknown>` |
|  -80.0% |    -4 | 0.4% → 0.1% |   5 → 1 | `PhaseIdealLoop::is_dominator(Node*, Node*)`                                                                                                                    | `<unknown>` |
|  -42.9% |    -3 | 0.5% → 0.3% |   7 → 4 | `PhaseAggressiveCoalesce::insert_copies(Matcher&)`                                                                                                              | `<unknown>` |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `CProjNode::is_block_proj() const`                                                                                                                              | `<unknown>` |
|  -42.9% |    -3 | 0.5% → 0.3% |   7 → 4 | `DebugInformationRecorder::describe_scope(int, methodHandle const&, ciMethod*, int, bool, bool, bool, bool, bool, bool, DebugToken*, DebugToken*, DebugToken*)` | `<unknown>` |
|  -33.3% |    -3 | 0.7% → 0.4% |   9 → 6 | `ciObjectFactory::get_metadata(Metadata*)`                                                                                                                      | `<unknown>` |
|  -60.0% |    -3 | 0.4% → 0.1% |   5 → 2 | `Node::pinned() const`                                                                                                                                          | `<unknown>` |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `PhaseIdealLoop::try_move_store_after_loop(Node*)`                                                                                                              | `<unknown>` |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `PhaseCFG::schedule_pinned_nodes(VectorSet&)`                                                                                                                   | `<unknown>` |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `PhaseOutput::fill_buffer(CodeBuffer*, unsigned int*)`                                                                                                          | `<unknown>` |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `PhaseIdealLoop::has_local_phi_input(Node*)`                                                                                                                    | `<unknown>` |
|  -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `PhaseIFG::effective_degree(unsigned int) const`                                                                                                                | `<unknown>` |
|  -37.5% |    -3 | 0.6% → 0.4% |   8 → 5 | `LinearScan::build_intervals()`                                                                                                                                 | `<unknown>` |
|  -50.0% |    -2 | 0.3% → 0.1% |   4 → 2 | `PhaseIterGVN::transform_old(Node*)`                                                                                                                            | `<unknown>` |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `MemNode::can_see_stored_value(Node*, PhaseValues*) const`                                                                                                      | `<unknown>` |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `PhaseCCP::analyze()`                                                                                                                                           | `<unknown>` |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `PhaseCFG::move_to_end(Block*, unsigned int)`                                                                                                                   | `<unknown>` |

##### Native

|  Change | Delta |           % | Samples | Function                                                                                                                                                    | Location    |
| ------: | ----: | ----------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
|  -66.7% |    -6 | 0.7% → 0.2% |   9 → 3 | `ClassVerifier::verify_method(methodHandle const&, JavaThread*)`                                                                                            | `<unknown>` |
|  -83.3% |    -5 | 0.4% → 0.1% |   6 → 1 | `G1ParScanThreadState::trim_queue_to_threshold(unsigned int)`                                                                                               | `<unknown>` |
|  -35.7% |    -5 | 1.0% → 0.7% |  14 → 9 | `_platform_memset`                                                                                                                                          | `<unknown>` |
| removed |    -4 | 0.3% → 0.0% |   4 → 0 | `compare_immediate_pair(void const*, void const*)`                                                                                                          | `<unknown>` |
| removed |    -4 | 0.3% → 0.0% |   4 → 0 | `_platform_bzero`                                                                                                                                           | `<unknown>` |
| removed |    -4 | 0.3% → 0.0% |   4 → 0 | `_platform_memmove`                                                                                                                                         | `<unknown>` |
|   -5.6% |    -3 | 4.0% → 3.8% | 54 → 51 | `inflate_fast`                                                                                                                                              | `<unknown>` |
|  -60.0% |    -3 | 0.4% → 0.1% |   5 → 2 | `inflate`                                                                                                                                                   | `<unknown>` |
|  -11.5% |    -3 | 1.9% → 1.7% | 26 → 23 | `tlv_get_addr`                                                                                                                                              | `<unknown>` |
|  -60.0% |    -3 | 0.4% → 0.1% |   5 → 2 | `SymbolTable::lookup_shared(char const*, int, unsigned int)`                                                                                                | `<unknown>` |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `_platform_memcmp`                                                                                                                                          | `<unknown>` |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `InlineTree::try_to_inline(ciMethod*, ciMethod*, int, JVMState*, ciCallProfile&, bool&)`                                                                    | `<unknown>` |
|  -25.0% |    -2 | 0.6% → 0.4% |   8 → 6 | `G1ParScanThreadState::do_copy_to_survivor_space(G1HeapRegionAttr, oopDesc*, markWord)`                                                                     | `<unknown>` |
|  -25.0% |    -2 | 0.6% → 0.4% |   8 → 6 | `fwd_copy_again`                                                                                                                                            | `<unknown>` |
|  -50.0% |    -2 | 0.3% → 0.1% |   4 → 2 | `G1CardSet::add_card(unsigned int, unsigned int, bool)`                                                                                                     | `<unknown>` |
|  -66.7% |    -2 | 0.2% → 0.1% |   3 → 1 | `void OopOopIterateBoundedDispatch<G1CMOopClosure>::Table::oop_oop_iterate_bounded<ObjArrayKlass, narrowOop>(G1CMOopClosure*, oopDesc*, Klass*, MemRegion)` | `<unknown>` |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `MemAllocator::Allocation::notify_allocation(JavaThread*)`                                                                                                  | `<unknown>` |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `void G1ScanEvacuatedObjClosure::do_oop_work<narrowOop>(narrowOop*)`                                                                                        | `<unknown>` |
|  -66.7% |    -2 | 0.2% → 0.1% |   3 → 1 | `vmSymbols::find_sid(Symbol const*)`                                                                                                                        | `<unknown>` |
|  -66.7% |    -2 | 0.2% → 0.1% |   3 → 1 | `ImmutableOopMap::update_register_map(frame const*, RegisterMap*) const`                                                                                    | `<unknown>` |

##### Ours

|  Change | Delta |           % | Samples | Function                                                                                                                                                                                                                                                                                                                                                     | Location                                                                                                     |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `requiresEmptyStackOnEntry(MethodNode)`                                                                                                                                                                                                                                                                                                                      | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen$Companion`                                         |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `substitutionSupertypePolicy(RigidTypeMarker)`                                                                                                                                                                                                                                                                                                               | `org.jetbrains.kotlin.fir.types.ConeTypeContext`                                                             |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `getParentNode(Disposable)`                                                                                                                                                                                                                                                                                                                                  | `com.intellij.openapi.util.ObjectTree`                                                                       |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `hasExtensionKinds()`                                                                                                                                                                                                                                                                                                                                        | `org.jetbrains.kotlin.builtins.functions.FunctionTypeKindExtractor`                                          |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `transformFile(FirFile, Object)`                                                                                                                                                                                                                                                                                                                             | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`     |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `<init>(FirProperty, FirMemberDeclaration, FirSession, boolean)`                                                                                                                                                                                                                                                                                             | `org.jetbrains.kotlin.fir.resolve.transformers.PublishedApiEffectiveVisibilityKt$$Lambda.0x000000e0015f0430` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `deserializeClassToSymbol(ClassId, ProtoBuf$Class, FirRegularClassSymbol, NameResolver, FirSession, FirModuleData, AnnotationDeserializer, FirKDocDeserializer, FirTypeDeserializer$FlexibleTypeFactory, FirScopeProvider, SerializerExtensionProtocol, FirDeserializationContext, DeserializedContainerSource, FirDeclarationOrigin, Function2, Function2)` | `org.jetbrains.kotlin.fir.deserialization.ClassDeserializationKt`                                            |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `getValue(Object, Object)`                                                                                                                                                                                                                                                                                                                                   | `org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCacheWithPostCompute`                                        |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `transformPropertyAccessExpression(FirPropertyAccessExpression, ResolutionMode)`                                                                                                                                                                                                                                                                             | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`     |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `acceptChildren(IrVisitor, Object)`                                                                                                                                                                                                                                                                                                                          | `org.jetbrains.kotlin.ir.expressions.IrBlockBody`                                                            |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `visitBlock(FirBlock, Void)`                                                                                                                                                                                                                                                                                                                                 | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor`                            |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `mark(Label)`                                                                                                                                                                                                                                                                                                                                                | `org.jetbrains.org.objectweb.asm.commons.InstructionAdapter`                                                 |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `hasNext()`                                                                                                                                                                                                                                                                                                                                                  | `org.jetbrains.kotlin.utils.SmartSet$SingletonIterator`                                                      |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `check(CheckerContext, DiagnosticReporter, FirStatement)`                                                                                                                                                                                                                                                                                                    | `org.jetbrains.kotlin.fir.analysis.checkers.expression.FirOptInUsageAccessChecker`                           |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `visitWithCallOrAssignment(FirStatement)`                                                                                                                                                                                                                                                                                                                    | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor`                            |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `isInitialized(Map$Entry)`                                                                                                                                                                                                                                                                                                                                   | `org.jetbrains.kotlin.protobuf.FieldSet`                                                                     |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `getTopLevelClassifierNamesInPackage(FqName)`                                                                                                                                                                                                                                                                                                                | `org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider$symbolNamesProvider$1`    |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `writeUntil(int, CodedOutputStream)`                                                                                                                                                                                                                                                                                                                         | `org.jetbrains.kotlin.protobuf.GeneratedMessageLite$ExtendableMessage$ExtensionWriter`                       |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `loadAllClassesFromJars(Collection, int, ClassHandler)`                                                                                                                                                                                                                                                                                                      | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`                                                       |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `ensureNotFinalizedAndSameThread()`                                                                                                                                                                                                                                                                                                                          | `org.jetbrains.kotlin.util.PerformanceManager`                                                               |

##### Standard library

|  Change | Delta |           % | Samples | Function                                                         | Location                                                                            |
| ------: | ----: | ----------: | ------: | ---------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `allocateInstance(Object)`                                       | `java.lang.invoke.DirectMethodHandle`                                               |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `next()`                                                         | `java.util.ArrayList$Itr`                                                           |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `listIterator(int)`                                              | `kotlinx.collections.immutable.implementations.immutableList.SmallPersistentVector` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `bindArgumentL(BoundMethodHandle, int, Object)`                  | `java.lang.invoke.LambdaFormEditor`                                                 |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `spinInnerClass()`                                               | `java.lang.invoke.InnerClassLambdaMetafactory`                                      |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `readAllBytes(Path)`                                             | `java.nio.file.Files`                                                               |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)`    | `java.util.zip.Inflater`                                                            |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `<init>()`                                                       | `java.util.AbstractList`                                                            |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `assert(boolean)`                                                | `kotlinx.collections.immutable.internal.CommonFunctionsKt`                          |
|  -50.0% |    -1 |        0.1% |   2 → 1 | `getNode(Object)`                                                | `java.util.HashMap`                                                                 |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `makeImpl(Class, Class[], boolean)`                              | `java.lang.invoke.MethodType`                                                       |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `<init>(int, Object, Object, HashMap$Node)`                      | `java.util.HashMap$Node`                                                            |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `<init>(MessageDigestSpi, String, Provider)`                     | `java.security.MessageDigest$Delegate`                                              |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `<init>(WeakHashMap)`                                            | `java.util.WeakHashMap$KeyIterator`                                                 |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `getZipEntry(String, int)`                                       | `java.util.zip.ZipFile`                                                             |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `toMap(Pair[], Map)`                                             | `kotlin.collections.MapsKt__MapsKt`                                                 |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `reversePositionIndex$CollectionsKt__ReversedViewsKt(List, int)` | `kotlin.collections.CollectionsKt__ReversedViewsKt`                                 |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `addInitializedType(int)`                                        | `jdk.internal.org.objectweb.asm.Frame`                                              |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `put(SymbolTable$Entry)`                                         | `jdk.internal.org.objectweb.asm.SymbolTable`                                        |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `<init>(AbstractStringBuilder, Void)`                            | `java.lang.String`                                                                  |

##### JIT

|  Change | Delta |           % | Samples | Function                 | Location    |
| ------: | ----: | ----------: | ------: | ------------------------ | ----------- |
|  -42.9% |    -3 | 0.5% → 0.3% |   7 → 4 | `I2C/C2I adapters(0xbb)` | `<unknown>` |
|  -66.7% |    -2 | 0.2% → 0.1% |   3 → 1 | `I2C/C2I adapters`       | `<unknown>` |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `vtable stub`            | `<unknown>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `I2C/C2I adapters(0x)`   | `<unknown>` |

#### Callers

Callers with the largest change in contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `SymbolTable::do_lookup(char const*, int, unsigned long)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                                                                  | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------- | ----------- |
|  +81.8% |    +9 | 64.7% → 74.1% | 11 → 20 | `SymbolTable::lookup_only(char const*, int, unsigned int&)`                                             | `<unknown>` |
|  -75.0% |    -3 |  23.5% → 3.7% |   4 → 1 | `SymbolTable::new_symbol(char const*, int)`                                                             | `<unknown>` |
| +150.0% |    +3 | 11.8% → 18.5% |   2 → 5 | `ClassFileParser::parse_constant_pool_entries(ClassFileStream const*, ConstantPool*, int, JavaThread*)` | `<unknown>` |
|     new |    +1 |   0.0% → 3.7% |   0 → 1 | `SymbolTable::new_symbol(Symbol const*, int, int)`                                                      | `<unknown>` |

##### `__psynch_cvwait` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                      | Location    |
| -----: | ----: | -----: | ------: | ------------------------------------------- | ----------- |
| +87.5% |    +7 | 100.0% |  8 → 15 | `PlatformMonitor::wait(unsigned long long)` | `<unknown>` |

##### `GraphBuilder::iterate_bytecodes_for_block(int)` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                   | Location    |
| -----: | ----: | ------------: | ------: | ---------------------------------------- | ----------- |
|    new |    +6 | 0.0% → 100.0% |   0 → 6 | `GraphBuilder::iterate_all_blocks(bool)` | `<unknown>` |

##### `InstanceKlass::find_method_index(Array<Method*> const*, Symbol const*, Symbol const*, Klass::OverpassLookupMode, Klass::StaticLookupMode, Klass::PrivateLookupMode)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                                                                                                                                | Location    |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
|  +35.7% |    +5 | 77.8% → 82.6% | 14 → 19 | `InstanceKlass::uncached_lookup_method(Symbol const*, Symbol const*, Klass::OverpassLookupMode, Klass::PrivateLookupMode) const`                                      | `<unknown>` |
| removed |    -1 |   5.6% → 0.0% |   1 → 0 | `InstanceKlass::initialize_impl(JavaThread*)`                                                                                                                         | `<unknown>` |
|     new |    +1 |   0.0% → 4.3% |   0 → 1 | `InstanceKlass::find_local_method(Array<Method*> const*, Symbol const*, Symbol const*, Klass::OverpassLookupMode, Klass::StaticLookupMode, Klass::PrivateLookupMode)` | `<unknown>` |

##### `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>(DIR_Chunk* const&)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                                                                                                                          | Location    |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| +100.0% |    +6 | 54.5% → 75.0% |  6 → 12 | `DebugInformationRecorder::describe_scope(int, methodHandle const&, ciMethod*, int, bool, bool, bool, bool, bool, bool, DebugToken*, DebugToken*, DebugToken*)` | `<unknown>` |
|  -20.0% |    -1 | 45.5% → 25.0% |   5 → 4 | `DebugInformationRecorder::serialize_scope_values(GrowableArray<ScopeValue*>*)`                                                                                 | `<unknown>` |

##### `PhaseChaitin::Select()` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                              | Location    |
| ------: | ----: | -----: | ------: | ----------------------------------- | ----------- |
| +250.0% |    +5 | 100.0% |   2 → 7 | `PhaseChaitin::Register_Allocate()` | `<unknown>` |

##### `PhaseChaitin::elide_copy(Node*, int, Block*, Node_List*, Node_List*, bool)` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                       | Location    |
| -----: | ----: | -----: | ------: | -------------------------------------------- | ----------- |
| +83.3% |    +5 | 100.0% |  6 → 11 | `PhaseChaitin::post_allocate_copy_removal()` | `<unknown>` |

##### `PhaseIterGVN::add_users_to_worklist(Node*)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                                                                                                                                                           | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- |
|     new |    +3 |  0.0% → 37.5% |   0 → 3 | `PhaseIterGVN::PhaseIterGVN(PhaseGVN*)`                                                                                                                                                          | `<unknown>` |
|  +50.0% |    +1 | 66.7% → 37.5% |   2 → 3 | `PhaseIterGVN::transform_old(Node*)`                                                                                                                                                             | `<unknown>` |
| removed |    -1 |  33.3% → 0.0% |   1 → 0 | `PhaseIdealLoop::clone_loop_handle_data_uses(Node*, Node_List&, IdealLoopTree*, IdealLoopTree*, Node_List*&, Node_List*&, Node_List*&, Node_List&, unsigned int, PhaseIdealLoop::CloneLoopMode)` | `<unknown>` |
|     new |    +1 |  0.0% → 12.5% |   0 → 1 | `RegionNode::Ideal(PhaseGVN*, bool)`                                                                                                                                                             | `<unknown>` |
|     new |    +1 |  0.0% → 12.5% |   0 → 1 | `Node::set_req_X(unsigned int, Node*, PhaseIterGVN*)`                                                                                                                                            | `<unknown>` |

##### `OopMapSort::sort()` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                            | Location    |
| -----: | ----: | ------------: | ------: | ------------------------------------------------- | ----------- |
|    new |    +5 | 0.0% → 100.0% |   0 → 5 | `ImmutableOopMap::ImmutableOopMap(OopMap const*)` | `<unknown>` |

##### `PhaseIterGVN::subsume_node(Node*, Node*)` (`<unknown>`)

|  Change | Delta |              % | Samples | Caller                                            | Location    |
| ------: | ----: | -------------: | ------: | ------------------------------------------------- | ----------- |
| +300.0% |    +3 | 100.0% → 80.0% |   1 → 4 | `PhaseIterGVN::transform_old(Node*)`              | `<unknown>` |
|     new |    +1 |   0.0% → 20.0% |   0 → 1 | `PhaseIdealLoop::split_if_with_blocks_pre(Node*)` | `<unknown>` |

##### `ValueStack::pin_stack_for_linear_scan()` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                     | Location    |
| -----: | ----: | ------------: | ------: | -------------------------- | ----------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `IR::compute_use_counts()` | `<unknown>` |

##### `areEqual(Object, Object)` (`kotlin.jvm.internal.Intrinsics`)

| Change | Delta |            % | Samples | Caller                                                                               | Location                                                                         |
| -----: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `getValue(Object, Object)`                                                           | `org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache`                           |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `hiddenStatusOfCall(FirCallableSymbol, boolean, boolean)`                            | `org.jetbrains.kotlin.fir.declarations.DeprecationUtilsKt`                       |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `withNullability(ConeKotlinType, boolean, ConeTypeContext, ConeAttributes, boolean)` | `org.jetbrains.kotlin.fir.types.TypeUtilsKt`                                     |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `convertType(LighterASTNode)`                                                        | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirDeclarationBuilder` |

##### `MachNode::rematerialize() const` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                             | Location    |
| ------: | ----: | ------------: | ------: | -------------------------------------------------- | ----------- |
| +150.0% |    +3 | 66.7% → 71.4% |   2 → 5 | `PhaseChaitin::Split(unsigned int, ResourceArea*)` | `<unknown>` |
|     new |    +2 |  0.0% → 28.6% |   0 → 2 | `PhaseChaitin::build_ifg_physical(ResourceArea*)`  | `<unknown>` |
| removed |    -1 |  33.3% → 0.0% |   1 → 0 | `PhaseChaitin::Register_Allocate()`                | `<unknown>` |

##### `PhaseCFG::partial_latency_of_defs(Node*)` (`<unknown>`)

|  Change | Delta |              % | Samples | Caller                              | Location    |
| ------: | ----: | -------------: | ------: | ----------------------------------- | ----------- |
| +500.0% |    +5 | 50.0% → 100.0% |   1 → 6 | `PhaseCFG::global_code_motion()`    | `<unknown>` |
| removed |    -1 |   50.0% → 0.0% |   1 → 0 | `PhaseCFG::do_global_code_motion()` | `<unknown>` |

##### `updateBytesCRC32` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                               | Location              |
| ------: | ----: | -----: | ------: | ------------------------------------ | --------------------- |
| +400.0% |    +4 | 100.0% |   1 → 5 | `updateBytes(int, byte[], int, int)` | `java.util.zip.CRC32` |

##### `SignatureStream::next()` (`<unknown>`)

| Change | Delta |            % | Samples | Caller                                                                      | Location    |
| -----: | ----: | -----------: | ------: | --------------------------------------------------------------------------- | ----------- |
|    new |    +3 | 0.0% → 75.0% |   0 → 3 | `SignatureStream::SignatureStream(Symbol const*, bool)`                     | `<unknown>` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `StackMapFrame::set_locals_from_arg(methodHandle const&, VerificationType)` | `<unknown>` |

##### `PhaseIterGVN::optimize()` (`<unknown>`)

| Change | Delta |            % | Samples | Caller                                                  | Location    |
| -----: | ----: | -----------: | ------: | ------------------------------------------------------- | ----------- |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `Compile::Optimize()`                                   | `<unknown>` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `PhaseMacroExpand::expand_macro_nodes()`                | `<unknown>` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` | `<unknown>` |

##### `Matcher::match_tree(Node const*)` (`<unknown>`)

|  Change | Delta |              % | Samples | Caller                                | Location    |
| ------: | ----: | -------------: | ------: | ------------------------------------- | ----------- |
| +200.0% |    +4 | 66.7% → 100.0% |   2 → 6 | `Matcher::xform(Node*, int)`          | `<unknown>` |
| removed |    -1 |   33.3% → 0.0% |   1 → 0 | `Matcher::match_sfpt(SafePointNode*)` | `<unknown>` |

##### `PhaseCCP::transform(Node*)` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                     | Location    |
| ------: | ----: | -----: | ------: | -------------------------- | ----------- |
| +300.0% |    +3 | 100.0% |   1 → 4 | `PhaseCCP::do_transform()` | `<unknown>` |

##### `_platform_memchr` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                                                                                                               | Location    |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
|     new |    +3 |  0.0% → 75.0% |   0 → 3 | `SignatureStream::SignatureStream(Symbol const*, bool)`                                                                                              | `<unknown>` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `ClassFileParser::parse_localvariable_table(ClassFileStream const*, unsigned int, unsigned short, unsigned int, unsigned short*, bool, JavaThread*)` | `<unknown>` |
|     new |    +1 |  0.0% → 25.0% |   0 → 1 | `void SignatureIterator::do_parameters_on<ArgumentSizeComputer>(ArgumentSizeComputer*)`                                                              | `<unknown>` |

##### `Compile::disconnect_useless_nodes(Unique_Node_List&, Unique_Node_List&)` (`<unknown>`)

|  Change | Delta |              % | Samples | Caller                                                                                     | Location    |
| ------: | ----: | -------------: | ------: | ------------------------------------------------------------------------------------------ | ----------- |
| +200.0% |    +2 | 100.0% → 75.0% |   1 → 3 | `PhaseRemoveUseless::PhaseRemoveUseless(PhaseGVN*, Unique_Node_List&, Phase::PhaseNumber)` | `<unknown>` |
|     new |    +1 |   0.0% → 25.0% |   0 → 1 | `PhaseCCP::transform(Node*)`                                                               | `<unknown>` |

##### `LinearScan::assign_reg_num(GrowableArray<LIR_Op*>*, IntervalWalker*)` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                         | Location    |
| ------: | ----: | -----: | ------: | ------------------------------ | ----------- |
| +100.0% |    +3 | 100.0% |   3 → 6 | `LinearScan::do_linear_scan()` | `<unknown>` |

##### `RegMask::is_aligned_pairs() const` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                                                                                       | Location    |
| ------: | ----: | -----: | ------: | -------------------------------------------------------------------------------------------- | ----------- |
| +300.0% |    +3 | 100.0% |   1 → 4 | `PhaseChaitin::get_spillcopy_wide(MachSpillCopyNode::SpillType, Node*, Node*, unsigned int)` | `<unknown>` |

##### `PhaseCCP::push_more_uses(Unique_Node_List&, Node*, Node const*) const` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                                                   | Location    |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------ | ----------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `PhaseCCP::push_child_nodes_to_worklist(Unique_Node_List&, Node*) const` | `<unknown>` |

##### `TypeInterfaces::eq(Type const*) const` (`<unknown>`)

| Change | Delta |            % | Samples | Caller                                | Location    |
| -----: | ----: | -----------: | ------: | ------------------------------------- | ----------- |
|    new |    +2 | 0.0% → 66.7% |   0 → 2 | `TypeInstPtr::eq(Type const*) const`  | `<unknown>` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `Type::cmp(Type const*, Type const*)` | `<unknown>` |

##### `JVMState::clone_shallow(Compile*) const` (`<unknown>`)

| Change | Delta |            % | Samples | Caller                                                              | Location    |
| -----: | ----: | -----------: | ------: | ------------------------------------------------------------------- | ----------- |
|    new |    +2 | 0.0% → 66.7% |   0 → 2 | `Parse::do_one_block()`                                             | `<unknown>` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `CallJavaNode::copy_call_debug_info(PhaseIterGVN*, SafePointNode*)` | `<unknown>` |

##### `Node::dominates(Node*, Node_List&)` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                         | Location    |
| -----: | ----: | -----: | ------: | ---------------------------------------------- | ----------- |
| +66.7% |    +2 | 100.0% |   3 → 5 | `MemNode::all_controls_dominate(Node*, Node*)` | `<unknown>` |

##### `Matcher::find_shared(Node*)` (`<unknown>`)

| Change | Delta |             % | Samples | Caller             | Location    |
| -----: | ----: | ------------: | ------: | ------------------ | ----------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `Matcher::match()` | `<unknown>` |

##### `InstanceKlass::find_local_field(Symbol*, Symbol*, fieldDescriptor*) const` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                                                | Location    |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------------------- | ----------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `InstanceKlass::find_field(Symbol*, Symbol*, fieldDescriptor*) const` | `<unknown>` |

##### `semaphore_wait_trap` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                | Location    |
| -----: | ----: | ------------: | ------: | --------------------- | ----------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `WorkerThread::run()` | `<unknown>` |

##### `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>(G1CMOopClosure*, oopDesc*, Klass*)` (`<unknown>`)

| Change | Delta |              % | Samples | Caller                                                           | Location    |
| -----: | ----: | -------------: | ------: | ---------------------------------------------------------------- | ----------- |
| +20.0% |    +1 | 100.0% → 85.7% |   5 → 6 | `void G1CMTask::process_grey_task_entry<true>(G1TaskQueueEntry)` | `<unknown>` |
|    new |    +1 |   0.0% → 14.3% |   0 → 1 | `G1CMTask::drain_local_queue(bool)`                              | `<unknown>` |

##### `nmethod::finalize_relocations()` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                                                                                                                                                                                                                                            | Location    |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `nmethod::nmethod(Method*, CompilerType, int, int, int, CodeOffsets*, int, DebugInformationRecorder*, Dependencies*, CodeBuffer*, int, OopMapSet*, ExceptionHandlerTable*, ImplicitExceptionTable*, AbstractCompiler*, CompLevel, char*, int, JVMCINMethodData*)` | `<unknown>` |

##### `pthread_mutex_lock` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                  | Location    |
| ------: | ----: | ------------: | ------: | --------------------------------------- | ----------- |
|     new |    +2 |  0.0% → 66.7% |   0 → 2 | `ThreadCritical::ThreadCritical()`      | `<unknown>` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `_pthread_cond_wait`                    | `<unknown>` |
|     new |    +1 |  0.0% → 33.3% |   0 → 1 | `Mutex::lock_without_safepoint_check()` | `<unknown>` |

##### `NullCheckEliminator::iterate_one(BlockBegin*)` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                               | Location    |
| ------: | ----: | -----: | ------: | ------------------------------------ | ----------- |
| +100.0% |    +2 | 100.0% |   2 → 4 | `Optimizer::eliminate_null_checks()` | `<unknown>` |

##### `GlobalValueNumbering::GlobalValueNumbering(IR*)` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                     | Location    |
| -----: | ----: | ------------: | ------: | -------------------------- | ----------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `Compilation::build_hir()` | `<unknown>` |

##### `State::DFA(int, Node const*)` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                                    | Location    |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------- | ----------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `Matcher::Label_Root(Node const*, State*, Node*, Node*&)` | `<unknown>` |

##### `UTF8::is_legal_utf8(unsigned char const*, int, bool)` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                                                                                  | Location    |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------------------- | ----------- |
| +50.0% |    +2 | 100.0% |   4 → 6 | `ClassFileParser::parse_constant_pool_entries(ClassFileStream const*, ConstantPool*, int, JavaThread*)` | `<unknown>` |

##### `G1ConcurrentMark::mark_in_bitmap(unsigned int, oopDesc*)` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                             | Location    |
| -----: | ----: | ------------: | ------: | -------------------------------------------------- | ----------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `ClassLoaderData::oops_do(OopClosure*, int, bool)` | `<unknown>` |

##### `pthread_mutex_unlock` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                                                  | Location    |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------- | ----------- |
|     new |    +2 |  0.0% → 66.7% |   0 → 2 | `CodeCache::make_marked_nmethods_deoptimized()`                                         | `<unknown>` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `Chunk::chop()`                                                                         | `<unknown>` |
|     new |    +1 |  0.0% → 33.3% |   0 → 1 | `Metaspace::allocate(ClassLoaderData*, unsigned long, MetaspaceObj::Type, JavaThread*)` | `<unknown>` |

##### `ClassVerifier::verify_invoke_instructions(RawBytecodeStream*, unsigned int, StackMapFrame*, bool, bool*, VerificationType, constantPoolHandle const&, StackMapTable*, JavaThread*)` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                                           | Location    |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------------- | ----------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `ClassVerifier::verify_method(methodHandle const&, JavaThread*)` | `<unknown>` |

##### `State::MachOperGenerator(int)` (`<unknown>`)

| Change | Delta |            % | Samples | Caller                                                           | Location    |
| -----: | ----: | -----------: | ------: | ---------------------------------------------------------------- | ----------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `Matcher::ReduceInst(State*, int, Node*&)`                       | `<unknown>` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `Matcher::ReduceInst_Chain_Rule(State*, int, Node*&, MachNode*)` | `<unknown>` |

##### `resolveVariableAccessAndSelectCandidateImpl(FirQualifiedAccessExpression, boolean, ResolutionMode, boolean, FirElement, Function1)` (`org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`)

| Change | Delta |             % | Samples | Caller                                                                                                                | Location                                                 |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `resolveVariableAccessAndSelectCandidate(FirQualifiedAccessExpression, boolean, boolean, FirElement, ResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver` |

##### `fullyExpandedTypeWithSource(ConeClassLikeType, FirTypeRef, FirSession)` (`org.jetbrains.kotlin.fir.analysis.checkers.FirUpperBoundViolatedHelpersKt`)

| Change | Delta |             % | Samples | Caller                                                                                                                                   | Location                                                                    |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `checkUpperBoundViolated(CheckerContext, DiagnosticReporter, FirTypeRef, ConeClassLikeType, boolean, KtSourceElement, boolean, boolean)` | `org.jetbrains.kotlin.fir.analysis.checkers.FirUpperBoundViolatedHelpersKt` |

##### `processCandidate(Candidate, ResolutionContext, boolean, boolean)` (`org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner`)

| Change | Delta |             % | Samples | Caller                                                                                                         | Location                                                              |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `processCandidate$default(ResolutionStageRunner, Candidate, ResolutionContext, boolean, boolean, int, Object)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner` |

##### `acceptChildren(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrMemberAccessExpression`)

| Change | Delta |             % | Samples | Caller                                         | Location                                        |
| -----: | ----: | ------------: | ------: | ---------------------------------------------- | ----------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `acceptChildrenVoid(IrElement, IrVisitorVoid)` | `org.jetbrains.kotlin.ir.visitors.IrVisitorsKt` |

##### `visitCall(IrCall, Object)` (`org.jetbrains.kotlin.ir.visitors.IrVisitorVoid`)

| Change | Delta |             % | Samples | Caller                      | Location                                     |
| -----: | ----: | ------------: | ------: | --------------------------- | -------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrCall` |

##### `classScope(ConeClassLikeType, FirSession, ScopeSession, FirResolvePhase, ConeClassLikeLookupTag, FirClassSymbol)` (`org.jetbrains.kotlin.fir.resolve.ScopeUtilsKt`)

| Change | Delta |             % | Samples | Caller                                                             | Location                                        |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------ | ----------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `scope(ConeKotlinType, FirSession, ScopeSession, FirResolvePhase)` | `org.jetbrains.kotlin.fir.resolve.ScopeUtilsKt` |

##### `scope(ConeKotlinType, FirSession, ScopeSession, FirResolvePhase)` (`org.jetbrains.kotlin.fir.resolve.ScopeUtilsKt`)

| Change | Delta |             % | Samples | Caller                                                                                         | Location                                        |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------- | ----------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `scope(ConeKotlinType, FirSession, ScopeSession, CallableCopyTypeCalculator, FirResolvePhase)` | `org.jetbrains.kotlin.fir.resolve.ScopeUtilsKt` |

##### `reportErrors(LighterASTNode, FlyweightCapableTreeStructure, KotlinLightParser$LightTreeParsingErrorListener, Ref)` (`org.jetbrains.kotlin.parsing.KotlinLightParser`)

| Change | Delta |             % | Samples | Caller                                                                                                              | Location                                         |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `reportErrors(LighterASTNode, FlyweightCapableTreeStructure, KotlinLightParser$LightTreeParsingErrorListener, Ref)` | `org.jetbrains.kotlin.parsing.KotlinLightParser` |

##### `getFileTypeByFile(VirtualFile)` (`com.intellij.core.CoreFileTypeRegistry`)

| Change | Delta |             % | Samples | Caller          | Location                               |
| -----: | ----: | ------------: | ------: | --------------- | -------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `getFileType()` | `com.intellij.openapi.vfs.VirtualFile` |

##### `acceptChildren(FirVisitor, Object)` (`org.jetbrains.kotlin.fir.declarations.impl.FirReceiverParameterImpl`)

| Change | Delta |             % | Samples | Caller                            | Location                                                                          |
| -----: | ----: | ------------: | ------: | --------------------------------- | --------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `visitNestedElements(FirElement)` | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor` |

##### `loadFunction$default(FirMemberDeserializer, ProtoBuf$Function, ProtoBuf$Class, FirClassSymbol, FirDeclarationOrigin, int, Object)` (`org.jetbrains.kotlin.fir.deserialization.FirMemberDeserializer`)

| Change | Delta |             % | Samples | Caller                                                                                                                                                                                                                                                                                                                                                       | Location                                                          |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `deserializeClassToSymbol(ClassId, ProtoBuf$Class, FirRegularClassSymbol, NameResolver, FirSession, FirModuleData, AnnotationDeserializer, FirKDocDeserializer, FirTypeDeserializer$FlexibleTypeFactory, FirScopeProvider, SerializerExtensionProtocol, FirDeserializationContext, DeserializedContainerSource, FirDeclarationOrigin, Function2, Function2)` | `org.jetbrains.kotlin.fir.deserialization.ClassDeserializationKt` |

##### `contains(KotlinTypeMarker, Function1)` (`org.jetbrains.kotlin.fir.types.ConeInferenceContext`)

| Change | Delta |             % | Samples | Caller                                  | Location                                                                     |
| -----: | ----: | ------------: | ------: | --------------------------------------- | ---------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `contains(KotlinTypeMarker, Function1)` | `org.jetbrains.kotlin.resolve.calls.inference.model.NewConstraintSystemImpl` |

##### `toIrSymbolForCall(Fir2IrComponents, FirCallableSymbol, FirExpression, FirExpression)` (`org.jetbrains.kotlin.fir.backend.utils.SymbolConversionUtilsKt`)

| Change | Delta |             % | Samples | Caller                                                                                                                                                                         | Location                                                                |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `convertToIrCall$lambda$0$4(FirCallableSymbol, CallAndReferenceGenerator, FirExpression, FirQualifiedAccessExpression, IrType, FirReference, IrExpression, boolean, int, int)` | `org.jetbrains.kotlin.fir.backend.generators.CallAndReferenceGenerator` |

##### `completeIsSubTypeOf(TypeCheckerState, TypeSystemContext, KotlinTypeMarker, KotlinTypeMarker, boolean)` (`org.jetbrains.kotlin.types.AbstractTypeChecker`)

| Change | Delta |             % | Samples | Caller                                                                       | Location                                         |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `isSubtypeOf(TypeCheckerState, KotlinTypeMarker, KotlinTypeMarker, boolean)` | `org.jetbrains.kotlin.types.AbstractTypeChecker` |

##### `transform(IrTransformer, Object)` (`org.jetbrains.kotlin.ir.expressions.IrExpression`)

| Change | Delta |             % | Samples | Caller                                          | Location                                   |
| -----: | ----: | ------------: | ------: | ----------------------------------------------- | ------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `transformInPlace(List, IrTransformer, Object)` | `org.jetbrains.kotlin.ir.util.TransformKt` |

##### `getSession()` (`org.jetbrains.kotlin.fir.analysis.checkers.context.CheckerContext`)

| Change | Delta |             % | Samples | Caller                                         | Location                                                                          |
| -----: | ----: | ------------: | ------: | ---------------------------------------------- | --------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `visitValueParameter(FirValueParameter, Void)` | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor` |

##### `analyzeInstruction(AbstractInsnNode, int, Frame, Frame, Frame)` (`org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer`)

| Change | Delta |             % | Samples | Caller              | Location                                                        |
| -----: | ----: | ------------: | ------: | ------------------- | --------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `analyzeMainLoop()` | `org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer` |

##### `visitSimpleFunction(IrSimpleFunction)` (`org.jetbrains.kotlin.ir.visitors.IrElementTransformerVoid`)

| Change | Delta |             % | Samples | Caller                                        | Location                                                    |
| -----: | ----: | ------------: | ------: | --------------------------------------------- | ----------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `visitSimpleFunction(IrSimpleFunction, Void)` | `org.jetbrains.kotlin.ir.visitors.IrElementTransformerVoid` |

##### `processCandidatesWithGivenImplicitReceiverAsValue(ImplicitReceiverValue, CallInfo, TowerGroup, Set, Set, Set, boolean, Continuation)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolveTask`)

| Change | Delta |             % | Samples | Caller                                                      | Location                                                           |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------- | ------------------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `runResolverForNoReceiver(CallInfo, boolean, Continuation)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolveTask` |

##### `loadAnnotationsFromProtocol$default(GeneratedMessageLite$ExtendableMessage, FirSession, GeneratedMessageLite$GeneratedExtension, NameResolver, AnnotationUseSiteTarget, int, Object)` (`org.jetbrains.kotlin.fir.deserialization.AnnotationDeserializationUtilKt`)

| Change | Delta |             % | Samples | Caller                                                                                             | Location                                                                      |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `loadFunctionAnnotations(DeserializedContainerSource, ProtoBuf$Function, NameResolver, TypeTable)` | `org.jetbrains.kotlin.fir.deserialization.AnnotationDeserializerWithProtocol` |

##### `sanitizeStackTrace(Throwable)` (`kotlin.jvm.internal.Intrinsics`)

|  Change | Delta |      % | Samples | Caller                            | Location                         |
| ------: | ----: | -----: | ------: | --------------------------------- | -------------------------------- |
| +100.0% |    +2 | 100.0% |   2 → 4 | `throwParameterIsNullNPE(String)` | `kotlin.jvm.internal.Intrinsics` |

##### `checkNotNullParameter(Object, String)` (`kotlin.jvm.internal.Intrinsics`)

|  Change | Delta |            % | Samples | Caller                                                                   | Location                                                                   |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------------ | -------------------------------------------------------------------------- |
| removed |    -2 | 50.0% → 0.0% |   2 → 0 | `extractValue(AbstractArrayMapOwner)`                                    | `org.jetbrains.kotlin.util.AbstractArrayMapOwner$AbstractArrayMapAccessor` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `areEqualTypeConstructors(TypeConstructorMarker, TypeConstructorMarker)` | `org.jetbrains.kotlin.fir.types.ConeTypeContext`                           |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `isEnabled(SessionHolder, LanguageFeature)`                              | `org.jetbrains.kotlin.fir.LanguageVersionUtilsKt`                          |
|     new |    +1 | 0.0% → 20.0% |   0 → 1 | `<init>(int, int, Object[], MutabilityOwnership)`                        | `kotlinx.collections.immutable.implementations.immutableMap.TrieNode`      |
|     new |    +1 | 0.0% → 20.0% |   0 → 1 | `invoke(TowerGroup)`                                                     | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager$1`       |

##### `newInvokeSpecial(Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

| Change | Delta |             % | Samples | Caller                               | Location                           |
| -----: | ----: | ------------: | ------: | ------------------------------------ | ---------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `linkToTargetMethod(Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `defineClass(String, Resource)` (`java.net.URLClassLoader`)

| Change | Delta |             % | Samples | Caller  | Location                    |
| -----: | ----: | ------------: | ------: | ------- | --------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `run()` | `java.net.URLClassLoader$1` |

##### `findBootstrapClass(String)` (`java.lang.ClassLoader`)

| Change | Delta |             % | Samples | Caller                             | Location                |
| -----: | ----: | ------------: | ------: | ---------------------------------- | ----------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `findBootstrapClassOrNull(String)` | `java.lang.ClassLoader` |

##### `get(Object)` (`java.util.HashMap`)

| Change | Delta |             % | Samples | Caller              | Location                                                 |
| -----: | ----: | ------------: | ------: | ------------------- | -------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `findClass(String)` | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |

##### `verifyLocation(String, String)` (`jdk.internal.jimage.BasicImageReader`)

| Change | Delta |             % | Samples | Caller                           | Location                          |
| -----: | ----: | ------------: | ------: | -------------------------------- | --------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `verifyLocation(String, String)` | `jdk.internal.jimage.ImageReader` |

##### `isMemberAccessible(Class, Class, int, Class, Class, int)` (`sun.invoke.util.VerifyAccess`)

| Change | Delta |             % | Samples | Caller                                 | Location                                |
| -----: | ----: | ------------: | ------: | -------------------------------------- | --------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `checkAccess(byte, Class, MemberName)` | `java.lang.invoke.MethodHandles$Lookup` |

##### `lazy(LazyThreadSafetyMode, Function0)` (`kotlin.LazyKt__LazyJVMKt`)

| Change | Delta |             % | Samples | Caller                                                                                                                      | Location                                              |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `approximateParametrizedType(TypeApproximatorConfiguration, AbstractTypeApproximator$Cache, RigidTypeMarker, boolean, int)` | `org.jetbrains.kotlin.types.AbstractTypeApproximator` |

##### `boxingDescriptor(Wrapper)` (`java.lang.invoke.TypeConvertingMethodAdapter`)

| Change | Delta |             % | Samples | Caller         | Location                                       |
| -----: | ----: | ------------: | ------: | -------------- | ---------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `box(Wrapper)` | `java.lang.invoke.TypeConvertingMethodAdapter` |

##### `get(Object)` (`jdk.internal.util.ReferencedKeyMap`)

| Change | Delta |             % | Samples | Caller        | Location                             |
| -----: | ----: | ------------: | ------: | ------------- | ------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `get(Object)` | `jdk.internal.util.ReferencedKeySet` |

##### `hasNext()` (`jdk.internal.jrtfs.JrtDirectoryStream$1`)

| Change | Delta |             % | Samples | Caller                               | Location                                           |
| -----: | ----: | ------------: | ------: | ------------------------------------ | -------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `toCollection(Iterable, Collection)` | `kotlin.collections.CollectionsKt___CollectionsKt` |

##### `<init>(String, String, LambdaForm, MethodType)` (`java.lang.invoke.InvokerBytecodeGenerator`)

| Change | Delta |             % | Samples | Caller                                   | Location                                    |
| -----: | ----: | ------------: | ------: | ---------------------------------------- | ------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `<init>(String, LambdaForm, MethodType)` | `java.lang.invoke.InvokerBytecodeGenerator` |

##### `add(Object)` (`java.util.HashSet`)

| Change | Delta |             % | Samples | Caller                               | Location                                 |
| -----: | ----: | ------------: | ------: | ------------------------------------ | ---------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `toCollection(Object[], Collection)` | `kotlin.collections.ArraysKt___ArraysKt` |

##### `initialTryLock()` (`java.util.concurrent.locks.ReentrantLock$NonfairSync`)

| Change | Delta |             % | Samples | Caller   | Location                                        |
| -----: | ----: | ------------: | ------: | -------- | ----------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `lock()` | `java.util.concurrent.locks.ReentrantLock$Sync` |

##### `referencedTypes(ClassLoader, List)` (`java.lang.reflect.Proxy$ProxyBuilder`)

| Change | Delta |             % | Samples | Caller                      | Location                               |
| -----: | ----: | ------------: | ------: | --------------------------- | -------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `<init>(ClassLoader, List)` | `java.lang.reflect.Proxy$ProxyBuilder` |

##### `put11(int, int)` (`jdk.internal.org.objectweb.asm.ByteVector`)

| Change | Delta |             % | Samples | Caller                                                  | Location                                      |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------- | --------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `visitMethodInsn(int, String, String, String, boolean)` | `jdk.internal.org.objectweb.asm.MethodWriter` |

##### `<init>()` (`java.util.HashMap`)

| Change | Delta |             % | Samples | Caller        | Location                  |
| -----: | ----: | ------------: | ------: | ------------- | ------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `<init>(Map)` | `java.util.LinkedHashMap` |

##### `getSecurityManager()` (`java.lang.System`)

| Change | Delta |             % | Samples | Caller             | Location          |
| -----: | ----: | ------------: | ------: | ------------------ | ----------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `getClassLoader()` | `java.lang.Class` |

##### `itable stub` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                                                      | Location                                                         |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `getOwnTypeParameters()`                                                                    | `org.jetbrains.kotlin.fir.deserialization.FirTypeDeserializer`   |
|     new |    +1 |  0.0% → 33.3% |   0 → 1 | `lowerBoundIfFlexible(TypeSystemContext, KotlinTypeMarker)`                                 | `org.jetbrains.kotlin.types.model.TypeSystemContextContextualKt` |
|     new |    +1 |  0.0% → 33.3% |   0 → 1 | `unwrapStubTypeVariableConstructor(TypeSystemContext, TypeConstructorMarker)`               | `org.jetbrains.kotlin.types.model.TypeSystemContextContextualKt` |
|     new |    +1 |  0.0% → 33.3% |   0 → 1 | `hasNotNullSupertype(TypeCheckerState, RigidTypeMarker, TypeCheckerState$SupertypesPolicy)` | `org.jetbrains.kotlin.types.AbstractNullabilityChecker`          |

##### `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                 | Location    |
| -----: | ----: | -----: | ------: | -------------------------------------- | ----------- |
| -70.0% |    -7 | 100.0% |  10 → 3 | `PhaseIdealLoop::build_and_optimize()` | `<unknown>` |

##### `ClassVerifier::verify_method(methodHandle const&, JavaThread*)` (`<unknown>`)

|  Change | Delta |              % | Samples | Caller                                                | Location    |
| ------: | ----: | -------------: | ------: | ----------------------------------------------------- | ----------- |
|  -62.5% |    -5 | 88.9% → 100.0% |   8 → 3 | `ClassVerifier::verify_class(JavaThread*)`            | `<unknown>` |
| removed |    -1 |   11.1% → 0.0% |   1 → 0 | `Verifier::verify(InstanceKlass*, bool, JavaThread*)` | `<unknown>` |

##### `Unique_Node_List::remove(Node*)` (`<unknown>`)

|  Change | Delta |              % | Samples | Caller                                           | Location    |
| ------: | ----: | -------------: | ------: | ------------------------------------------------ | ----------- |
|  -71.4% |    -5 | 87.5% → 100.0% |   7 → 2 | `PhaseIterGVN::remove_globally_dead_node(Node*)` | `<unknown>` |
| removed |    -1 |   12.5% → 0.0% |   1 → 0 | `Node::remove_dead_region(PhaseGVN*, bool)`      | `<unknown>` |

##### `G1ParScanThreadState::trim_queue_to_threshold(unsigned int)` (`<unknown>`)

|  Change | Delta |              % | Samples | Caller                                                                                                                                | Location    |
| ------: | ----: | -------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
|  -66.7% |    -2 | 50.0% → 100.0% |   3 → 1 | `G1ScanHRForRegionClosure::scan_memregion(unsigned int, MemRegion)`                                                                   | `<unknown>` |
| removed |    -2 |   33.3% → 0.0% |   2 → 0 | `G1ParScanThreadState::steal_and_trim_queue(GenericTaskQueueSet<OverflowTaskQueue<ScannerTask, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>*)` | `<unknown>` |
| removed |    -1 |   16.7% → 0.0% |   1 → 0 | `G1ParEvacuateFollowersClosure::do_void()`                                                                                            | `<unknown>` |

##### `PhaseChaitin::post_allocate_copy_removal()` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                              | Location    |
| -----: | ----: | -----: | ------: | ----------------------------------- | ----------- |
| -62.5% |    -5 | 100.0% |   8 → 3 | `PhaseChaitin::Register_Allocate()` | `<unknown>` |

##### `_platform_memset` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                                                                                                  | Location    |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------------------------- | ----------- |
| removed |    -2 | 14.3% → 0.0% |   2 → 0 | `ConstMethod::allocate(ClassLoaderData*, int, InlineTableSizes*, ConstMethod::MethodType, JavaThread*)` | `<unknown>` |
| removed |    -2 | 14.3% → 0.0% |   2 → 0 | `PhaseIdealLoop::build_and_optimize()`                                                                  | `<unknown>` |
| removed |    -1 |  7.1% → 0.0% |   1 → 0 | `BlockListBuilder::make_block_at(int, BlockBegin*)`                                                     | `<unknown>` |
| removed |    -1 |  7.1% → 0.0% |   1 → 0 | `MethodData::allocate(ClassLoaderData*, methodHandle const&, JavaThread*)`                              | `<unknown>` |
| removed |    -1 |  7.1% → 0.0% |   1 → 0 | `PhaseIdealLoop::get_late_ctrl_with_anti_dep(LoadNode*, Node*, Node*)`                                  | `<unknown>` |

##### `PhaseIdealLoop::Dominators()` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                 | Location    |
| -----: | ----: | -----: | ------: | -------------------------------------- | ----------- |
| -44.4% |    -4 | 100.0% |   9 → 5 | `PhaseIdealLoop::build_and_optimize()` | `<unknown>` |

##### `compare_immediate_pair(void const*, void const*)` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                                               | Location    |
| ------: | ----: | -----------: | ------: | ---------------------------------------------------- | ----------- |
| removed |    -2 | 50.0% → 0.0% |   2 → 0 | `encoding_for_logical_immediate(unsigned long long)` | `<unknown>` |
| removed |    -2 | 50.0% → 0.0% |   2 → 0 | `bsearch`                                            | `<unknown>` |

##### `_platform_bzero` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                                                 | Location    |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------ | ----------- |
| removed |    -2 | 50.0% → 0.0% |   2 → 0 | `PhaseIdealLoop::build_and_optimize()`                 | `<unknown>` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `GraphBuilder::copy_state_for_exception_with_bci(int)` | `<unknown>` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `PhaseChaitin::Register_Allocate()`                    | `<unknown>` |

##### `PhaseIdealLoop::is_dominator(Node*, Node*)` (`<unknown>`)

|  Change | Delta |              % | Samples | Caller                                                                                                                                | Location    |
| ------: | ----: | -------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
|  -75.0% |    -3 | 80.0% → 100.0% |   4 → 1 | `PhaseIdealLoop::get_late_ctrl_with_anti_dep(LoadNode*, Node*, Node*)`                                                                | `<unknown>` |
| removed |    -1 |   20.0% → 0.0% |   1 → 0 | `PhaseIdealLoop::loop_predication_follow_branches(Node*, IdealLoopTree*, float, PathFrequency&, Node_Stack&, VectorSet&, Node_List&)` | `<unknown>` |

##### `_platform_memmove` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                                           | Location    |
| ------: | ----: | -----------: | ------: | ------------------------------------------------ | ----------- |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `Node::add_req(Node*)`                           | `<unknown>` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `SharedRuntime::find_callee_method(JavaThread*)` | `<unknown>` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `Java_java_lang_ClassLoader_defineClass1`        | `<unknown>` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `outputStream::print(char const*, ...)`          | `<unknown>` |

##### `PhaseAggressiveCoalesce::insert_copies(Matcher&)` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                              | Location    |
| -----: | ----: | -----: | ------: | ----------------------------------- | ----------- |
| -42.9% |    -3 | 100.0% |   7 → 4 | `PhaseChaitin::Register_Allocate()` | `<unknown>` |

##### `I2C/C2I adapters(0xbb)` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                                                                                                                                                                                                                                                                                                                                      | Location                                                          |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| removed |    -1 | 14.3% → 0.0% |   1 → 0 | `visitRichFunctionReference(IrRichFunctionReference)`                                                                                                                                                                                                                                                                                       | `org.jetbrains.kotlin.ir.visitors.IrVisitorVoid`                  |
| removed |    -1 | 14.3% → 0.0% |   1 → 0 | `<init>(KtSourceElement, FirResolvePhase, FirModuleData, FirDeclarationOrigin, FirDeclarationAttributes, FirDeclarationStatus, boolean, FirTypeRef, FirReceiverParameter, DeprecationsProvider, DeserializedContainerSource, ConeSimpleKotlinType, List, List, FirBlock, FirContractDescription, Name, FirNamedFunctionSymbol, List, List)` | `org.jetbrains.kotlin.fir.declarations.impl.FirNamedFunctionImpl` |
| removed |    -1 | 14.3% → 0.0% |   1 → 0 | `visitClass(IrClass, Void)`                                                                                                                                                                                                                                                                                                                 | `org.jetbrains.kotlin.ir.visitors.IrVisitorVoid`                  |
| removed |    -1 | 14.3% → 0.0% |   1 → 0 | `addValueParametersTo(List, FirBasedSymbol, FirRegularClassBuilder, MessageLite, AnnotationDeserializer$CallableKind, ProtoBuf$Class, FirValueParameterKind, boolean, List)`                                                                                                                                                                | `org.jetbrains.kotlin.fir.deserialization.FirMemberDeserializer`  |
| removed |    -1 | 14.3% → 0.0% |   1 → 0 | `resolveVariableAccessAndSelectCandidateImpl(FirQualifiedAccessExpression, boolean, ResolutionMode, boolean, FirElement, Function1)`                                                                                                                                                                                                        | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`          |

##### `CProjNode::is_block_proj() const` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                              | Location    |
| ------: | ----: | -----------: | ------: | ----------------------------------- | ----------- |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `PhaseBlockLayout::find_edges()`    | `<unknown>` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `PhaseChaitin::Register_Allocate()` | `<unknown>` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `Compile::Code_Gen()`               | `<unknown>` |

##### `DebugInformationRecorder::describe_scope(int, methodHandle const&, ciMethod*, int, bool, bool, bool, bool, bool, bool, DebugToken*, DebugToken*, DebugToken*)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                                            | Location    |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------------------- | ----------- |
|  -60.0% |    -3 | 71.4% → 50.0% |   5 → 2 | `LIR_Assembler::record_non_safepoint_debug_info()`                                | `<unknown>` |
|     new |    +2 |  0.0% → 50.0% |   0 → 2 | `IRScopeDebugInfo::record_debug_info(DebugInformationRecorder*, int, bool, bool)` | `<unknown>` |
| removed |    -2 |  28.6% → 0.0% |   2 → 0 | `NonSafepointEmitter::emit_non_safepoint()`                                       | `<unknown>` |

##### `ciObjectFactory::get_metadata(Metadata*)` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                                                                                    | Location    |
| ------: | ----: | -----------: | ------: | ----------------------------------------------------------------------------------------- | ----------- |
| removed |    -3 | 33.3% → 0.0% |   3 → 0 | `ciMethod::ensure_method_data(methodHandle const&)`                                       | `<unknown>` |
| removed |    -2 | 22.2% → 0.0% |   2 → 0 | `ciEnv::get_klass_by_index_impl(constantPoolHandle const&, int, bool&, ciInstanceKlass*)` | `<unknown>` |
|     new |    +2 | 0.0% → 33.3% |   0 → 2 | `ciObjectFactory::get(oopDesc*)`                                                          | `<unknown>` |
| removed |    -1 | 11.1% → 0.0% |   1 → 0 | `ciMethod::method_data()`                                                                 | `<unknown>` |
|     new |    +1 | 0.0% → 16.7% |   0 → 1 | `ciMethod::resolve_invoke(ciKlass*, ciKlass*, bool, bool)`                                | `<unknown>` |

##### `Node::pinned() const` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                                  | Location    |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------------- | ----------- |
| removed |    -5 | 100.0% → 0.0% |   5 → 0 | `PhaseIdealLoop::build_and_optimize()`                                  | `<unknown>` |
|     new |    +1 |  0.0% → 50.0% |   0 → 1 | `PhaseIdealLoop::build_loop_early(VectorSet&, Node_List&, Node_Stack&)` | `<unknown>` |
|     new |    +1 |  0.0% → 50.0% |   0 → 1 | `PhaseCFG::global_code_motion()`                                        | `<unknown>` |

##### `inflate_fast` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                          | Location    |
| -----: | ----: | -----: | ------: | ----------------------------------------------- | ----------- |
|  -5.6% |    -3 | 100.0% | 54 → 51 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `<unknown>` |

##### `PhaseIdealLoop::try_move_store_after_loop(Node*)` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                                                          | Location    |
| ------: | ----: | -----------: | ------: | --------------------------------------------------------------- | ----------- |
| removed |    -2 | 66.7% → 0.0% |   2 → 0 | `PhaseIdealLoop::split_if_with_blocks(VectorSet&, Node_Stack&)` | `<unknown>` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `PhaseIdealLoop::build_and_optimize()`                          | `<unknown>` |

##### `PhaseCFG::schedule_pinned_nodes(VectorSet&)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                           | Location    |
| ------: | ----: | ------------: | ------: | -------------------------------- | ----------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `PhaseCFG::global_code_motion()` | `<unknown>` |

##### `PhaseOutput::fill_buffer(CodeBuffer*, unsigned int*)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                  | Location    |
| ------: | ----: | ------------: | ------: | ----------------------- | ----------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `PhaseOutput::Output()` | `<unknown>` |

##### `PhaseIdealLoop::has_local_phi_input(Node*)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                            | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------------- | ----------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `PhaseIdealLoop::split_if_with_blocks_pre(Node*)` | `<unknown>` |

##### `PhaseIFG::effective_degree(unsigned int) const` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                 | Location    |
| -----: | ----: | -----: | ------: | -------------------------------------- | ----------- |
| -75.0% |    -3 | 100.0% |   4 → 1 | `PhaseIFG::Compute_Effective_Degree()` | `<unknown>` |

##### `LinearScan::build_intervals()` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                         | Location    |
| -----: | ----: | -----: | ------: | ------------------------------ | ----------- |
| -37.5% |    -3 | 100.0% |   8 → 5 | `LinearScan::do_linear_scan()` | `<unknown>` |

##### `PhaseIterGVN::transform_old(Node*)` (`<unknown>`)

| Change | Delta |              % | Samples | Caller                     | Location    |
| -----: | ----: | -------------: | ------: | -------------------------- | ----------- |
| -75.0% |    -3 | 100.0% → 50.0% |   4 → 1 | `PhaseIterGVN::optimize()` | `<unknown>` |
|    new |    +1 |   0.0% → 50.0% |   0 → 1 | `Compile::Optimize()`      | `<unknown>` |

##### `MemNode::can_see_stored_value(Node*, PhaseValues*) const` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                              | Location    |
| ------: | ----: | -----------: | ------: | ----------------------------------- | ----------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `LoadBNode::Value(PhaseGVN*) const` | `<unknown>` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `LoadNode::Value(PhaseGVN*) const`  | `<unknown>` |

##### `PhaseCCP::analyze()` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                              | Location    |
| ------: | ----: | ------------: | ------: | ----------------------------------- | ----------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `PhaseCCP::PhaseCCP(PhaseIterGVN*)` | `<unknown>` |

##### `PhaseCFG::move_to_end(Block*, unsigned int)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                            | Location    |
| ------: | ----: | ------------: | ------: | --------------------------------- | ----------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `PhaseCFG::remove_empty_blocks()` | `<unknown>` |

##### `inflate` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                          | Location    |
| -----: | ----: | -----: | ------: | ----------------------------------------------- | ----------- |
| -60.0% |    -3 | 100.0% |   5 → 2 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `<unknown>` |

##### `tlv_get_addr` (`<unknown>`)

|  Change | Delta |           % | Samples | Caller                                                                                       | Location    |
| ------: | ----: | ----------: | ------: | -------------------------------------------------------------------------------------------- | ----------- |
| removed |    -2 | 7.7% → 0.0% |   2 → 0 | `GraphBuilder::try_inline_full(ciMethod*, bool, bool, Bytecodes::Code, Instruction*)`        | `<unknown>` |
|     new |    +2 | 0.0% → 8.7% |   0 → 2 | `PhaseLive::compute(unsigned int)`                                                           | `<unknown>` |
|     new |    +2 | 0.0% → 8.7% |   0 → 2 | `ResourceBitMap::ResourceBitMap(unsigned long, bool)`                                        | `<unknown>` |
|     new |    +2 | 0.0% → 8.7% |   0 → 2 | `PhaseCFG::hoist_to_cheaper_block(Block*, Block*, Node*)`                                    | `<unknown>` |
| removed |    -1 | 3.8% → 0.0% |   1 → 0 | `PhaseMacroExpand::expand_initialize_membar(AllocateNode*, InitializeNode*, Node*&, Node*&)` | `<unknown>` |

##### `SymbolTable::lookup_shared(char const*, int, unsigned int)` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                                      | Location    |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------- | ----------- |
| -66.7% |    -2 | 60.0% → 50.0% |   3 → 1 | `SymbolTable::lookup_only(char const*, int, unsigned int&)` | `<unknown>` |
| -50.0% |    -1 | 40.0% → 50.0% |   2 → 1 | `SymbolTable::new_symbol(char const*, int)`                 | `<unknown>` |

##### `_platform_memcmp` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                                                                                                                | Location    |
| ------: | ----: | -----------: | ------: | --------------------------------------------------------------------------------------------------------------------- | ----------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `SymbolTable::new_symbols(ClassLoaderData*, constantPoolHandle const&, int, char const**, int*, int*, unsigned int*)` | `<unknown>` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `ClassFileParser::parse_constant_pool_entries(ClassFileStream const*, ConstantPool*, int, JavaThread*)`               | `<unknown>` |

##### `InlineTree::try_to_inline(ciMethod*, ciMethod*, int, JVMState*, ciCallProfile&, bool&)` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                                                                                  | Location    |
| ------: | ----: | -----------: | ------: | --------------------------------------------------------------------------------------- | ----------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `InlineTree::ok_to_inline(ciMethod*, JVMState*, ciCallProfile&, bool&)`                 | `<unknown>` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `Compile::call_generator(ciMethod*, int, bool, JVMState*, bool, float, ciKlass*, bool)` | `<unknown>` |

##### `G1ParScanThreadState::do_copy_to_survivor_space(G1HeapRegionAttr, oopDesc*, markWord)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                                                                                                | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
|  -28.6% |    -2 | 87.5% → 83.3% |   7 → 5 | `G1ParScanThreadState::trim_queue_to_threshold(unsigned int)`                                                                         | `<unknown>` |
| removed |    -1 |  12.5% → 0.0% |   1 → 0 | `G1ParScanThreadState::steal_and_trim_queue(GenericTaskQueueSet<OverflowTaskQueue<ScannerTask, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>*)` | `<unknown>` |
|     new |    +1 |  0.0% → 16.7% |   0 → 1 | `void G1ParCopyClosure<(G1Barrier)0, false>::do_oop_work<oopDesc*>(oopDesc**)`                                                        | `<unknown>` |

##### `fwd_copy_again` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                        | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------- | ----------- |
|  -20.0% |    -1 | 62.5% → 66.7% |   5 → 4 | `G1ParScanThreadState::trim_queue_to_threshold(unsigned int)` | `<unknown>` |
| removed |    -1 |  12.5% → 0.0% |   1 → 0 | `LinearScan::compute_global_live_sets()`                      | `<unknown>` |

##### `G1CardSet::add_card(unsigned int, unsigned int, bool)` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                                                                                                                            | Location    |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| -50.0% |    -2 | 100.0% |   4 → 2 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>(G1RebuildRemSetClosure*, oopDesc*, Klass*)` | `<unknown>` |

##### `void OopOopIterateBoundedDispatch<G1CMOopClosure>::Table::oop_oop_iterate_bounded<ObjArrayKlass, narrowOop>(G1CMOopClosure*, oopDesc*, Klass*, MemRegion)` (`<unknown>`)

|  Change | Delta |              % | Samples | Caller                                                 | Location    |
| ------: | ----: | -------------: | ------: | ------------------------------------------------------ | ----------- |
|  -50.0% |    -1 | 66.7% → 100.0% |   2 → 1 | `G1CMObjArrayProcessor::process_slice(HeapWordImpl**)` | `<unknown>` |
| removed |    -1 |   33.3% → 0.0% |   1 → 0 | `G1CMObjArrayProcessor::process_obj(oopDesc*)`         | `<unknown>` |

##### `MemAllocator::Allocation::notify_allocation(JavaThread*)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                           | Location    |
| ------: | ----: | ------------: | ------: | -------------------------------- | ----------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `MemAllocator::allocate() const` | `<unknown>` |

##### `void G1ScanEvacuatedObjClosure::do_oop_work<narrowOop>(narrowOop*)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                                               | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------ | ----------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `G1ParScanThreadState::start_partial_objarray(G1HeapRegionAttr, oopDesc*, oopDesc*)` | `<unknown>` |

##### `vmSymbols::find_sid(Symbol const*)` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                 | Location    |
| -----: | ----: | -----: | ------: | -------------------------------------- | ----------- |
| -66.7% |    -2 | 100.0% |   3 → 1 | `ciObjectFactory::get_symbol(Symbol*)` | `<unknown>` |

##### `ImmutableOopMap::update_register_map(frame const*, RegisterMap*) const` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                                 | Location    |
| -----: | ----: | -----: | ------: | ------------------------------------------------------ | ----------- |
| -66.7% |    -2 | 100.0% |   3 → 1 | `frame::sender_for_compiled_frame(RegisterMap*) const` | `<unknown>` |

##### `requiresEmptyStackOnEntry(MethodNode)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen$Companion`)

|  Change | Delta |             % | Samples | Caller                                                                    | Location                                                             |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `access$requiresEmptyStackOnEntry(IrInlineCodegen$Companion, MethodNode)` | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen$Companion` |

##### `substitutionSupertypePolicy(RigidTypeMarker)` (`org.jetbrains.kotlin.fir.types.ConeTypeContext`)

|  Change | Delta |             % | Samples | Caller                                                              | Location                                                         |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------- | ---------------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `getCorrespondingSupertypes(ConeKotlinType, TypeConstructorMarker)` | `org.jetbrains.kotlin.fir.types.FirCorrespondingSupertypesCache` |

##### `getParentNode(Disposable)` (`com.intellij.openapi.util.ObjectTree`)

|  Change | Delta |             % | Samples | Caller                             | Location                               |
| ------: | ----: | ------------: | ------: | ---------------------------------- | -------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `register(Disposable, Disposable)` | `com.intellij.openapi.util.ObjectTree` |

##### `hasExtensionKinds()` (`org.jetbrains.kotlin.builtins.functions.FunctionTypeKindExtractor`)

|  Change | Delta |             % | Samples | Caller                | Location                                                    |
| ------: | ----: | ------------: | ------: | --------------------- | ----------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `hasExtensionKinds()` | `org.jetbrains.kotlin.fir.types.FirFunctionTypeKindService` |

##### `transformFile(FirFile, Object)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`)

|  Change | Delta |             % | Samples | Caller                              | Location                                        |
| ------: | ----: | ------------: | ------: | ----------------------------------- | ----------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `transform(FirTransformer, Object)` | `org.jetbrains.kotlin.fir.declarations.FirFile` |

##### `<init>(FirProperty, FirMemberDeclaration, FirSession, boolean)` (`org.jetbrains.kotlin.fir.resolve.transformers.PublishedApiEffectiveVisibilityKt$$Lambda.0x000000e0015f0430`)

|  Change | Delta |             % | Samples | Caller                                                  | Location                                             |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------- | ---------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `newInvokeSpecial(Object, Object, Object, Object, int)` | `java.lang.invoke.LambdaForm$DMH.0x000000e0015f4000` |

##### `deserializeClassToSymbol(ClassId, ProtoBuf$Class, FirRegularClassSymbol, NameResolver, FirSession, FirModuleData, AnnotationDeserializer, FirKDocDeserializer, FirTypeDeserializer$FlexibleTypeFactory, FirScopeProvider, SerializerExtensionProtocol, FirDeserializationContext, DeserializedContainerSource, FirDeclarationOrigin, Function2, Function2)` (`org.jetbrains.kotlin.fir.deserialization.ClassDeserializationKt`)

|  Change | Delta |             % | Samples | Caller                                                                                                                                            | Location                                                                                                          |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `classCache$lambda$1(AbstractFirBuiltinSymbolProvider$BuiltInsPackageFragmentWrapper, ClassId, FirRegularClassSymbol, FirDeserializationContext)` | `org.jetbrains.kotlin.fir.resolve.providers.impl.AbstractFirBuiltinSymbolProvider$BuiltInsPackageFragmentWrapper` |

##### `getValue(Object, Object)` (`org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCacheWithPostCompute`)

|  Change | Delta |             % | Samples | Caller                                         | Location                                                                         |
| ------: | ----: | ------------: | ------: | ---------------------------------------------- | -------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `getClass(ClassId, FirDeserializationContext)` | `org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider` |

##### `transformPropertyAccessExpression(FirPropertyAccessExpression, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`)

|  Change | Delta |             % | Samples | Caller                                                                   | Location                                                                                                 |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `transformPropertyAccessExpression(FirPropertyAccessExpression, Object)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |

##### `acceptChildren(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`)

|  Change | Delta |             % | Samples | Caller                                         | Location                                        |
| ------: | ----: | ------------: | ------: | ---------------------------------------------- | ----------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `acceptChildrenVoid(IrElement, IrVisitorVoid)` | `org.jetbrains.kotlin.ir.visitors.IrVisitorsKt` |

##### `visitBlock(FirBlock, Void)` (`org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor`)

|  Change | Delta |             % | Samples | Caller                         | Location                                                                          |
| ------: | ----: | ------------: | ------: | ------------------------------ | --------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `visitBlock(FirBlock, Object)` | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor` |

##### `mark(Label)` (`org.jetbrains.org.objectweb.asm.commons.InstructionAdapter`)

|  Change | Delta |             % | Samples | Caller              | Location                                                     |
| ------: | ----: | ------------: | ------: | ------------------- | ------------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `visitLabel(Label)` | `org.jetbrains.org.objectweb.asm.commons.InstructionAdapter` |

##### `hasNext()` (`org.jetbrains.kotlin.utils.SmartSet$SingletonIterator`)

|  Change | Delta |             % | Samples | Caller               | Location                       |
| ------: | ----: | ------------: | ------: | -------------------- | ------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `addAll(Collection)` | `java.util.AbstractCollection` |

##### `check(CheckerContext, DiagnosticReporter, FirStatement)` (`org.jetbrains.kotlin.fir.analysis.checkers.expression.FirOptInUsageAccessChecker`)

|  Change | Delta |             % | Samples | Caller                                               | Location                                                                                      |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `visitFunctionCall(FirFunctionCall, CheckerContext)` | `org.jetbrains.kotlin.fir.analysis.checkers.expression.ExpressionCheckersDiagnosticComponent` |

##### `visitWithCallOrAssignment(FirStatement)` (`org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor`)

|  Change | Delta |             % | Samples | Caller                                     | Location                                                                          |
| ------: | ----: | ------------: | ------: | ------------------------------------------ | --------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `visitFunctionCall(FirFunctionCall, Void)` | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor` |

##### `isInitialized(Map$Entry)` (`org.jetbrains.kotlin.protobuf.FieldSet`)

|  Change | Delta |             % | Samples | Caller            | Location                                 |
| ------: | ----: | ------------: | ------: | ----------------- | ---------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `isInitialized()` | `org.jetbrains.kotlin.protobuf.FieldSet` |

##### `getTopLevelClassifierNamesInPackage(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider$symbolNamesProvider$1`)

|  Change | Delta |             % | Samples | Caller                               | Location                                                            |
| ------: | ----: | ------------: | ------: | ------------------------------------ | ------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `mayHaveTopLevelClassifier(ClassId)` | `org.jetbrains.kotlin.fir.resolve.providers.FirSymbolNamesProvider` |

##### `writeUntil(int, CodedOutputStream)` (`org.jetbrains.kotlin.protobuf.GeneratedMessageLite$ExtendableMessage$ExtensionWriter`)

|  Change | Delta |             % | Samples | Caller                       | Location                                      |
| ------: | ----: | ------------: | ------: | ---------------------------- | --------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `writeTo(CodedOutputStream)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Type` |

##### `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`)

|  Change | Delta |             % | Samples | Caller                                                                       | Location                                               |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `ensureNotFinalizedAndSameThread()` (`org.jetbrains.kotlin.util.PerformanceManager`)

|  Change | Delta |             % | Samples | Caller                                                                           | Location                                       |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------------------------- | ---------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `measureSideTime$org_jetbrains_kotlin_compiler_common(PhaseSideType, Function0)` | `org.jetbrains.kotlin.util.PerformanceManager` |

##### `allocateInstance(Object)` (`java.lang.invoke.DirectMethodHandle`)

|  Change | Delta |             % | Samples | Caller                                     | Location                                     |
| ------: | ----: | ------------: | ------: | ------------------------------------------ | -------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `newInvokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `next()` (`java.util.ArrayList$Itr`)

|  Change | Delta |            % | Samples | Caller                              | Location                                                       |
| ------: | ----: | -----------: | ------: | ----------------------------------- | -------------------------------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `acceptChildren(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrMemberAccessExpression` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `next()`                            | `kotlin.collections.IndexingIterator`                          |

##### `listIterator(int)` (`kotlinx.collections.immutable.implementations.immutableList.SmallPersistentVector`)

|  Change | Delta |             % | Samples | Caller                              | Location                                                 |
| ------: | ----: | ------------: | ------: | ----------------------------------- | -------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `<init>(ReversedListReadOnly, int)` | `kotlin.collections.ReversedListReadOnly$listIterator$1` |

##### `bindArgumentL(BoundMethodHandle, int, Object)` (`java.lang.invoke.LambdaFormEditor`)

|  Change | Delta |             % | Samples | Caller                       | Location                             |
| ------: | ----: | ------------: | ------: | ---------------------------- | ------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `bindArgumentL(int, Object)` | `java.lang.invoke.BoundMethodHandle` |

##### `spinInnerClass()` (`java.lang.invoke.InnerClassLambdaMetafactory`)

|  Change | Delta |             % | Samples | Caller            | Location                                       |
| ------: | ----: | ------------: | ------: | ----------------- | ---------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `buildCallSite()` | `java.lang.invoke.InnerClassLambdaMetafactory` |

##### `readAllBytes(Path)` (`java.nio.file.Files`)

|  Change | Delta |             % | Samples | Caller                  | Location                                                  |
| ------: | ----: | ------------: | ------: | ----------------------- | --------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `contentsToByteArray()` | `org.jetbrains.kotlin.cli.jvm.modules.CoreJrtVirtualFile` |

##### `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`)

|  Change | Delta |             % | Samples | Caller                      | Location                 |
| ------: | ----: | ------------: | ------: | --------------------------- | ------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `inflate(byte[], int, int)` | `java.util.zip.Inflater` |

##### `<init>()` (`java.util.AbstractList`)

|  Change | Delta |             % | Samples | Caller        | Location              |
| ------: | ----: | ------------: | ------: | ------------- | --------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `<init>(int)` | `java.util.ArrayList` |

##### `assert(boolean)` (`kotlinx.collections.immutable.internal.CommonFunctionsKt`)

|  Change | Delta |             % | Samples | Caller          | Location                                                                          |
| ------: | ----: | ------------: | ------: | --------------- | --------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `hasNextNode()` | `kotlinx.collections.immutable.implementations.immutableMap.TrieNodeBaseIterator` |

##### `getNode(Object)` (`java.util.HashMap`)

|  Change | Delta |            % | Samples | Caller                | Location            |
| ------: | ----: | -----------: | ------: | --------------------- | ------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `containsKey(Object)` | `java.util.HashMap` |

##### `makeImpl(Class, Class[], boolean)` (`java.lang.invoke.MethodType`)

|  Change | Delta |             % | Samples | Caller                                | Location                      |
| ------: | ----: | ------------: | ------: | ------------------------------------- | ----------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `methodType(Class, Class[], boolean)` | `java.lang.invoke.MethodType` |

##### `<init>(int, Object, Object, HashMap$Node)` (`java.util.HashMap$Node`)

|  Change | Delta |             % | Samples | Caller                                       | Location            |
| ------: | ----: | ------------: | ------: | -------------------------------------------- | ------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `newNode(int, Object, Object, HashMap$Node)` | `java.util.HashMap` |

##### `<init>(MessageDigestSpi, String, Provider)` (`java.security.MessageDigest$Delegate`)

|  Change | Delta |             % | Samples | Caller                                       | Location                                                 |
| ------: | ----: | ------------: | ------: | -------------------------------------------- | -------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `<init>(MessageDigestSpi, String, Provider)` | `java.security.MessageDigest$Delegate$CloneableDelegate` |

##### `<init>(WeakHashMap)` (`java.util.WeakHashMap$KeyIterator`)

|  Change | Delta |             % | Samples | Caller       | Location                       |
| ------: | ----: | ------------: | ------: | ------------ | ------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `iterator()` | `java.util.WeakHashMap$KeySet` |

##### `getZipEntry(String, int)` (`java.util.zip.ZipFile`)

|  Change | Delta |             % | Samples | Caller             | Location                |
| ------: | ----: | ------------: | ------: | ------------------ | ----------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `getEntry(String)` | `java.util.zip.ZipFile` |

##### `toMap(Pair[], Map)` (`kotlin.collections.MapsKt__MapsKt`)

|  Change | Delta |             % | Samples | Caller          | Location                            |
| ------: | ----: | ------------: | ------: | --------------- | ----------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `mapOf(Pair[])` | `kotlin.collections.MapsKt__MapsKt` |

##### `reversePositionIndex$CollectionsKt__ReversedViewsKt(List, int)` (`kotlin.collections.CollectionsKt__ReversedViewsKt`)

|  Change | Delta |             % | Samples | Caller                                   | Location                                            |
| ------: | ----: | ------------: | ------: | ---------------------------------------- | --------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `access$reversePositionIndex(List, int)` | `kotlin.collections.CollectionsKt__ReversedViewsKt` |

##### `addInitializedType(int)` (`jdk.internal.org.objectweb.asm.Frame`)

|  Change | Delta |             % | Samples | Caller                                   | Location                               |
| ------: | ----: | ------------: | ------: | ---------------------------------------- | -------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `execute(int, int, Symbol, SymbolTable)` | `jdk.internal.org.objectweb.asm.Frame` |

##### `put(SymbolTable$Entry)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

|  Change | Delta |             % | Samples | Caller                                  | Location                                     |
| ------: | ----: | ------------: | ------: | --------------------------------------- | -------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `addConstantUtf8Reference(int, String)` | `jdk.internal.org.objectweb.asm.SymbolTable` |

##### `<init>(AbstractStringBuilder, Void)` (`java.lang.String`)

|  Change | Delta |             % | Samples | Caller                  | Location           |
| ------: | ----: | ------------: | ------: | ----------------------- | ------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `<init>(StringBuilder)` | `java.lang.String` |

##### `I2C/C2I adapters` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                                                        | Location                                                      |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| removed |    -1 |  33.3% → 0.0% |   1 → 0 | `exitVariableInitialization(MutableFlow, FirExpression, FirProperty, FirExpression, boolean)` | `org.jetbrains.kotlin.fir.resolve.dfa.FirDataFlowAnalyzer`    |
| removed |    -1 |  33.3% → 0.0% |   1 → 0 | `isVisible(FirVisibilityChecker, FirMemberDeclaration, CallInfo, FirExpression, boolean)`     | `org.jetbrains.kotlin.fir.resolve.calls.VisibilityUtilsKt`    |
| removed |    -1 |  33.3% → 0.0% |   1 → 0 | `visitTypeOperator(IrTypeOperatorCall)`                                                       | `org.jetbrains.kotlin.backend.jvm.lower.TypeOperatorLowering` |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `setContainingClassForStaticMemberAttr(FirCallableDeclaration, ConeClassLikeLookupTag)`       | `org.jetbrains.kotlin.fir.ClassMembersKt`                     |

##### `vtable stub` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                      | Location                                                  |
| ------: | ----: | -----------: | ------: | --------------------------- | --------------------------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `hash(Object)`              | `kotlin.collections.builders.MapBuilder`                  |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `getDispatchReceiverType()` | `org.jetbrains.kotlin.fir.symbols.impl.FirCallableSymbol` |

##### `I2C/C2I adapters(0x)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                  | Location          |
| ------: | ----: | ------------: | ------: | --------------------------------------- | ----------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `forName(String, boolean, ClassLoader)` | `java.lang.Class` |

### Total samples

#### Regressions

Functions with the largest increase in samples collected within the function and its callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |           % | Samples | Function                                                                                                                                       | Location                                                               |
| ------: | ----: | ----------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|  +37.9% |   +11 | 2.1% → 3.0% | 29 → 40 | `ClassFileParser::parse_constant_pool_entries(ClassFileStream const*, ConstantPool*, int, JavaThread*)`                                        | `<unknown>`                                                            |
|  +37.9% |   +11 | 2.1% → 3.0% | 29 → 40 | `completeCall(FirExpression, ResolutionMode, boolean)`                                                                                         | `org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter`          |
|  +20.8% |   +10 | 3.5% → 4.3% | 48 → 58 | `ClassFileParser::ClassFileParser(ClassFileStream*, Symbol*, ClassLoaderData*, ClassLoadInfo const*, ClassFileParser::Publicity, JavaThread*)` | `<unknown>`                                                            |
|  +76.9% |   +10 | 1.0% → 1.7% | 13 → 23 | `accept(FirVisitor, Object)`                                                                                                                   | `org.jetbrains.kotlin.fir.expressions.FirFunctionCall`                 |
|  +26.5% |    +9 | 2.5% → 3.2% | 34 → 43 | `ClassFileParser::parse_constant_pool(ClassFileStream const*, ConstantPool*, int, JavaThread*)`                                                | `<unknown>`                                                            |
|  +50.0% |    +9 | 1.3% → 2.0% | 18 → 27 | `SymbolTable::do_lookup(char const*, int, unsigned long)`                                                                                      | `<unknown>`                                                            |
|  +36.0% |    +9 | 1.8% → 2.5% | 25 → 34 | `PhaseCFG::global_code_motion()`                                                                                                               | `<unknown>`                                                            |
|  +32.1% |    +9 | 2.0% → 2.8% | 28 → 37 | `PhaseCFG::do_global_code_motion()`                                                                                                            | `<unknown>`                                                            |
| +112.5% |    +9 | 0.6% → 1.3% |  8 → 17 | `PhaseCCP::push_child_nodes_to_worklist(Unique_Node_List&, Node*) const`                                                                       | `<unknown>`                                                            |
| +900.0% |    +9 | 0.1% → 0.7% |  1 → 10 | `PhaseCCP::push_more_uses(Unique_Node_List&, Node*, Node const*) const`                                                                        | `<unknown>`                                                            |
|  +14.8% |    +8 | 4.0% → 4.6% | 54 → 62 | `KlassFactory::create_from_stream(ClassFileStream*, Symbol*, ClassLoaderData*, ClassLoadInfo const&, JavaThread*)`                             | `<unknown>`                                                            |
| +100.0% |    +8 | 0.6% → 1.2% |  8 → 16 | `PhaseMacroExpand::expand_macro_nodes()`                                                                                                       | `<unknown>`                                                            |
|  +66.7% |    +8 | 0.9% → 1.5% | 12 → 20 | `PhaseCCP::analyze()`                                                                                                                          | `<unknown>`                                                            |
| +160.0% |    +8 | 0.4% → 1.0% |  5 → 13 | `acceptChildren(FirVisitor, Object)`                                                                                                           | `org.jetbrains.kotlin.fir.expressions.impl.FirResolvedArgumentList`    |
| +160.0% |    +8 | 0.4% → 1.0% |  5 → 13 | `visitArgumentList(FirArgumentList, Object)`                                                                                                   | `org.jetbrains.kotlin.fir.visitors.FirVisitor`                         |
| +160.0% |    +8 | 0.4% → 1.0% |  5 → 13 | `accept(FirVisitor, Object)`                                                                                                                   | `org.jetbrains.kotlin.fir.expressions.FirArgumentList`                 |
| +133.3% |    +8 | 0.4% → 1.0% |  6 → 14 | `completeIsSubTypeOf(TypeCheckerState, TypeSystemContext, KotlinTypeMarker, KotlinTypeMarker, boolean)`                                        | `org.jetbrains.kotlin.types.AbstractTypeChecker`                       |
| +133.3% |    +8 | 0.4% → 1.0% |  6 → 14 | `isSubtypeOf(TypeCheckerState, KotlinTypeMarker, KotlinTypeMarker, boolean)`                                                                   | `org.jetbrains.kotlin.types.AbstractTypeChecker`                       |
|     new |    +8 | 0.0% → 0.6% |   0 → 8 | `fixVariable(ConstraintSystemCompletionContext, VariableWithConstraints)`                                                                      | `org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter` |
|     new |    +8 | 0.0% → 0.6% |   0 → 8 | `fixVariableIfReady(ConstraintSystemCompletionContext, VariableFixationFinder$VariableForFixation)`                                            | `org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter` |

##### Compiler

|  Change | Delta |             % |   Samples | Function                                                                     | Location    |
| ------: | ----: | ------------: | --------: | ---------------------------------------------------------------------------- | ----------- |
|  +36.0% |    +9 |   1.8% → 2.5% |   25 → 34 | `PhaseCFG::global_code_motion()`                                             | `<unknown>` |
|  +32.1% |    +9 |   2.0% → 2.8% |   28 → 37 | `PhaseCFG::do_global_code_motion()`                                          | `<unknown>` |
| +112.5% |    +9 |   0.6% → 1.3% |    8 → 17 | `PhaseCCP::push_child_nodes_to_worklist(Unique_Node_List&, Node*) const`     | `<unknown>` |
| +900.0% |    +9 |   0.1% → 0.7% |    1 → 10 | `PhaseCCP::push_more_uses(Unique_Node_List&, Node*, Node const*) const`      | `<unknown>` |
| +100.0% |    +8 |   0.6% → 1.2% |    8 → 16 | `PhaseMacroExpand::expand_macro_nodes()`                                     | `<unknown>` |
|  +66.7% |    +8 |   0.9% → 1.5% |   12 → 20 | `PhaseCCP::analyze()`                                                        | `<unknown>` |
|  +63.6% |    +7 |   0.8% → 1.3% |   11 → 18 | `CompileQueue::get(CompilerThread*)`                                         | `<unknown>` |
|  +21.2% |    +7 |   2.4% → 3.0% |   33 → 40 | `Matcher::xform(Node*, int)`                                                 | `<unknown>` |
| +116.7% |    +7 |   0.4% → 1.0% |    6 → 13 | `PhaseChaitin::elide_copy(Node*, int, Block*, Node_List*, Node_List*, bool)` | `<unknown>` |
|   +8.5% |    +6 |   5.2% → 5.8% |   71 → 77 | `Compilation::build_hir()`                                                   | `<unknown>` |
|  +42.9% |    +6 |   1.0% → 1.5% |   14 → 20 | `PhaseCCP::PhaseCCP(PhaseIterGVN*)`                                          | `<unknown>` |
|  +37.5% |    +6 |   1.2% → 1.6% |   16 → 22 | `Matcher::match_tree(Node const*)`                                           | `<unknown>` |
| +150.0% |    +6 |   0.3% → 0.7% |    4 → 10 | `Matcher::Label_Root(Node const*, State*, Node*, Node*&)`                    | `<unknown>` |
|   +1.7% |    +5 | 20.9% → 21.8% | 286 → 291 | `Compile::Code_Gen()`                                                        | `<unknown>` |
| +166.7% |    +5 |   0.2% → 0.6% |     3 → 8 | `MachNode::rematerialize() const`                                            | `<unknown>` |
| +166.7% |    +5 |   0.2% → 0.6% |     3 → 8 | `Node_Backward_Iterator::next()`                                             | `<unknown>` |
| +166.7% |    +5 |   0.2% → 0.6% |     3 → 8 | `ciBytecodeStream::get_field(bool&)`                                         | `<unknown>` |
| +166.7% |    +5 |   0.2% → 0.6% |     3 → 8 | `PhaseIterGVN::add_users_to_worklist(Node*)`                                 | `<unknown>` |
| +125.0% |    +5 |   0.3% → 0.7% |     4 → 9 | `PhaseCFG::partial_latency_of_defs(Node*)`                                   | `<unknown>` |
| +500.0% |    +5 |   0.1% → 0.4% |     1 → 6 | `Compile::remove_speculative_types(PhaseIterGVN&)`                           | `<unknown>` |

##### Native

|  Change | Delta |           % | Samples | Function                                                                                                                                                                                                                                                       | Location    |
| ------: | ----: | ----------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
|  +37.9% |   +11 | 2.1% → 3.0% | 29 → 40 | `ClassFileParser::parse_constant_pool_entries(ClassFileStream const*, ConstantPool*, int, JavaThread*)`                                                                                                                                                        | `<unknown>` |
|  +20.8% |   +10 | 3.5% → 4.3% | 48 → 58 | `ClassFileParser::ClassFileParser(ClassFileStream*, Symbol*, ClassLoaderData*, ClassLoadInfo const*, ClassFileParser::Publicity, JavaThread*)`                                                                                                                 | `<unknown>` |
|  +26.5% |    +9 | 2.5% → 3.2% | 34 → 43 | `ClassFileParser::parse_constant_pool(ClassFileStream const*, ConstantPool*, int, JavaThread*)`                                                                                                                                                                | `<unknown>` |
|  +50.0% |    +9 | 1.3% → 2.0% | 18 → 27 | `SymbolTable::do_lookup(char const*, int, unsigned long)`                                                                                                                                                                                                      | `<unknown>` |
|  +14.8% |    +8 | 4.0% → 4.6% | 54 → 62 | `KlassFactory::create_from_stream(ClassFileStream*, Symbol*, ClassLoaderData*, ClassLoadInfo const&, JavaThread*)`                                                                                                                                             | `<unknown>` |
|  +15.2% |    +7 | 3.4% → 4.0% | 46 → 53 | `ClassFileParser::parse_stream(ClassFileStream const*, JavaThread*)`                                                                                                                                                                                           | `<unknown>` |
|  +87.5% |    +7 | 0.6% → 1.1% |  8 → 15 | `__psynch_cvwait`                                                                                                                                                                                                                                              | `<unknown>` |
|  +38.9% |    +7 | 1.3% → 1.9% | 18 → 25 | `SymbolTable::lookup_only(char const*, int, unsigned int&)`                                                                                                                                                                                                    | `<unknown>` |
|  +24.0% |    +6 | 1.8% → 2.3% | 25 → 31 | `InterpreterRuntime::resolve_from_cache(JavaThread*, Bytecodes::Code)`                                                                                                                                                                                         | `<unknown>` |
| +300.0% |    +6 | 0.1% → 0.6% |   2 → 8 | `CompiledIC::set_to_monomorphic(CompiledICInfo&)`                                                                                                                                                                                                              | `<unknown>` |
|     new |    +6 | 0.0% → 0.4% |   0 → 6 | `SignatureStream::SignatureStream(Symbol const*, bool)`                                                                                                                                                                                                        | `<unknown>` |
| +500.0% |    +5 | 0.1% → 0.4% |   1 → 6 | `ClassLoader::load_class(Symbol*, bool, JavaThread*)`                                                                                                                                                                                                          | `<unknown>` |
| +166.7% |    +5 | 0.2% → 0.6% |   3 → 8 | `SystemDictionary::load_instance_class_impl(Symbol*, Handle, JavaThread*)`                                                                                                                                                                                     | `<unknown>` |
| +166.7% |    +5 | 0.2% → 0.6% |   3 → 8 | `SystemDictionary::load_instance_class(Symbol*, Handle, JavaThread*)`                                                                                                                                                                                          | `<unknown>` |
|  +27.8% |    +5 | 1.3% → 1.7% | 18 → 23 | `InstanceKlass::find_method_index(Array<Method*> const*, Symbol const*, Symbol const*, Klass::OverpassLookupMode, Klass::StaticLookupMode, Klass::PrivateLookupMode)`                                                                                          | `<unknown>` |
|  +45.5% |    +5 | 0.8% → 1.2% | 11 → 16 | `Monitor::wait(unsigned long long)`                                                                                                                                                                                                                            | `<unknown>` |
|  +31.3% |    +5 | 1.2% → 1.6% | 16 → 21 | `nmethod::new_nmethod(methodHandle const&, int, int, CodeOffsets*, int, DebugInformationRecorder*, Dependencies*, CodeBuffer*, int, OopMapSet*, ExceptionHandlerTable*, ImplicitExceptionTable*, AbstractCompiler*, CompLevel, char*, int, JVMCINMethodData*)` | `<unknown>` |
|  +45.5% |    +5 | 0.8% → 1.2% | 11 → 16 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>(DIR_Chunk* const&)`                                                                                    | `<unknown>` |
| +125.0% |    +5 | 0.3% → 0.7% |   4 → 9 | `SharedRuntime::resolve_sub_helper_internal(methodHandle, frame const&, CompiledMethod*, bool, bool, Handle, CallInfo&, Bytecodes::Code, JavaThread*)`                                                                                                         | `<unknown>` |
| +500.0% |    +5 | 0.1% → 0.4% |   1 → 6 | `Parse::do_ifnull(BoolTest::mask, Node*)`                                                                                                                                                                                                                      | `<unknown>` |

##### Ours

|  Change | Delta |           % | Samples | Function                                                                                                                                                                     | Location                                                                                                           |
| ------: | ----: | ----------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
|  +37.9% |   +11 | 2.1% → 3.0% | 29 → 40 | `completeCall(FirExpression, ResolutionMode, boolean)`                                                                                                                       | `org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter`                                                      |
|  +76.9% |   +10 | 1.0% → 1.7% | 13 → 23 | `accept(FirVisitor, Object)`                                                                                                                                                 | `org.jetbrains.kotlin.fir.expressions.FirFunctionCall`                                                             |
| +160.0% |    +8 | 0.4% → 1.0% |  5 → 13 | `acceptChildren(FirVisitor, Object)`                                                                                                                                         | `org.jetbrains.kotlin.fir.expressions.impl.FirResolvedArgumentList`                                                |
| +160.0% |    +8 | 0.4% → 1.0% |  5 → 13 | `visitArgumentList(FirArgumentList, Object)`                                                                                                                                 | `org.jetbrains.kotlin.fir.visitors.FirVisitor`                                                                     |
| +160.0% |    +8 | 0.4% → 1.0% |  5 → 13 | `accept(FirVisitor, Object)`                                                                                                                                                 | `org.jetbrains.kotlin.fir.expressions.FirArgumentList`                                                             |
| +133.3% |    +8 | 0.4% → 1.0% |  6 → 14 | `completeIsSubTypeOf(TypeCheckerState, TypeSystemContext, KotlinTypeMarker, KotlinTypeMarker, boolean)`                                                                      | `org.jetbrains.kotlin.types.AbstractTypeChecker`                                                                   |
| +133.3% |    +8 | 0.4% → 1.0% |  6 → 14 | `isSubtypeOf(TypeCheckerState, KotlinTypeMarker, KotlinTypeMarker, boolean)`                                                                                                 | `org.jetbrains.kotlin.types.AbstractTypeChecker`                                                                   |
|     new |    +8 | 0.0% → 0.6% |   0 → 8 | `fixVariable(ConstraintSystemCompletionContext, VariableWithConstraints)`                                                                                                    | `org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter`                                             |
|     new |    +8 | 0.0% → 0.6% |   0 → 8 | `fixVariableIfReady(ConstraintSystemCompletionContext, VariableFixationFinder$VariableForFixation)`                                                                          | `org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter`                                             |
| +140.0% |    +7 | 0.4% → 0.9% |  5 → 12 | `acceptChildren(FirVisitor, Object)`                                                                                                                                         | `org.jetbrains.kotlin.fir.expressions.impl.FirFunctionCallImpl`                                                    |
|  +24.0% |    +6 | 1.8% → 2.3% | 25 → 31 | `runCompletion(ConstraintSystemCompletionContext, ConstraintSystemCompletionMode, List, ConeKotlinType, ResolutionContext, ConstraintSystemCompleter$PostponedAtomAnalyzer)` | `org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter`                                             |
|  +24.0% |    +6 | 1.8% → 2.3% | 25 → 31 | `complete(ConstraintSystemCompletionContext, ConstraintSystemCompletionMode, List, ConeKotlinType, ResolutionContext, ConstraintSystemCompleter$PostponedAtomAnalyzer)`      | `org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter`                                             |
|  +24.0% |    +6 | 1.8% → 2.3% | 25 → 31 | `runCompletionForCall(Candidate, ConstraintSystemCompletionMode, FirExpression, ConeKotlinType, PostponedArgumentsAnalyzer)`                                                 | `org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter`                                                      |
|  +60.0% |    +6 | 0.7% → 1.2% | 10 → 16 | `accept(FirVisitor, Object)`                                                                                                                                                 | `org.jetbrains.kotlin.fir.expressions.FirReturnExpression`                                                         |
|  +85.7% |    +6 | 0.5% → 1.0% |  7 → 13 | `addConstraintIfCompatible(ConstraintSystemBuilder, KotlinTypeMarker, KotlinTypeMarker, ConstraintPosition, ConstraintKind)`                                                 | `org.jetbrains.kotlin.resolve.calls.inference.ConstraintSystemBuilderKt`                                           |
|  +85.7% |    +6 | 0.5% → 1.0% |  7 → 13 | `addSubtypeConstraintIfCompatible(ConstraintSystemBuilder, KotlinTypeMarker, KotlinTypeMarker, ConstraintPosition)`                                                          | `org.jetbrains.kotlin.resolve.calls.inference.ConstraintSystemBuilderKt`                                           |
| +150.0% |    +6 | 0.3% → 0.7% |  4 → 10 | `runIsSubtypeOf$isSubtypeOf(ConstraintInjector$TypeCheckerStateForConstraintInjector, KotlinTypeMarker, boolean, KotlinTypeMarker)`                                          | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector$TypeCheckerStateForConstraintInjector` |
| +150.0% |    +6 | 0.3% → 0.7% |  4 → 10 | `runIsSubtypeOf(KotlinTypeMarker, KotlinTypeMarker, boolean, boolean)`                                                                                                       | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector$TypeCheckerStateForConstraintInjector` |
| +200.0% |    +6 | 0.2% → 0.7% |   3 → 9 | `runIsSubtypeOf$default(ConstraintInjector$TypeCheckerStateForConstraintInjector, KotlinTypeMarker, KotlinTypeMarker, boolean, boolean, int, Object)`                        | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector$TypeCheckerStateForConstraintInjector` |
| +150.0% |    +6 | 0.3% → 0.7% |  4 → 10 | `transformChildren(IrTransformer, Object)`                                                                                                                                   | `org.jetbrains.kotlin.ir.expressions.IrBlockBody`                                                                  |

##### Standard library

|  Change | Delta |           % | Samples | Function                                                            | Location                                                               |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| +250.0% |    +5 | 0.1% → 0.5% |   2 → 7 | `areEqual(Object, Object)`                                          | `kotlin.jvm.internal.Intrinsics`                                       |
| +133.3% |    +4 | 0.2% → 0.5% |   3 → 7 | `findBootstrapClass(String)`                                        | `java.lang.ClassLoader`                                                |
| +133.3% |    +4 | 0.2% → 0.5% |   3 → 7 | `findBootstrapClassOrNull(String)`                                  | `java.lang.ClassLoader`                                                |
| +400.0% |    +4 | 0.1% → 0.4% |   1 → 5 | `updateBytes(int, byte[], int, int)`                                | `java.util.zip.CRC32`                                                  |
| +400.0% |    +4 | 0.1% → 0.4% |   1 → 5 | `update(byte[], int, int)`                                          | `java.util.zip.CRC32`                                                  |
|  +50.0% |    +3 | 0.4% → 0.7% |   6 → 9 | `checkNotNullParameter(Object, String)`                             | `kotlin.jvm.internal.Intrinsics`                                       |
| +100.0% |    +2 | 0.1% → 0.3% |   2 → 4 | `sanitizeStackTrace(Throwable)`                                     | `kotlin.jvm.internal.Intrinsics`                                       |
| +100.0% |    +2 | 0.1% → 0.3% |   2 → 4 | `throwParameterIsNullNPE(String)`                                   | `kotlin.jvm.internal.Intrinsics`                                       |
| +100.0% |    +2 | 0.1% → 0.3% |   2 → 4 | `getContributedClassifier(Name, LookupLocation)`                    | `kotlin.reflect.jvm.internal.impl.resolve.scopes.AbstractScopeAdapter` |
| +100.0% |    +2 | 0.1% → 0.3% |   2 → 4 | `findClassifierAcrossModuleDependencies(ModuleDescriptor, ClassId)` | `kotlin.reflect.jvm.internal.impl.descriptors.FindClassInModuleKt`     |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `hasNext()`                                                         | `java.util.ServiceLoader$2`                                            |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `hasNext()`                                                         | `java.util.ServiceLoader$3`                                            |
|     new |    +2 | 0.0% → 0.1% |   0 → 2 | `get(Object)`                                                       | `jdk.internal.util.ReferencedKeyMap`                                   |
|     new |    +2 | 0.0% → 0.1% |   0 → 2 | `get(Object)`                                                       | `jdk.internal.util.ReferencedKeySet`                                   |
|     new |    +2 | 0.0% → 0.1% |   0 → 2 | `add(Object)`                                                       | `java.util.HashSet`                                                    |
|     new |    +2 | 0.0% → 0.1% |   0 → 2 | `isArray()`                                                         | `java.lang.Class`                                                      |
|     new |    +2 | 0.0% → 0.1% |   0 → 2 | `put(Object, Object)`                                               | `java.util.IdentityHashMap`                                            |
|     new |    +2 | 0.0% → 0.1% |   0 → 2 | `read(byte[], int, int)`                                            | `java.io.PushbackInputStream`                                          |
|     new |    +2 | 0.0% → 0.1% |   0 → 2 | `getNextEntry()`                                                    | `java.util.zip.ZipInputStream`                                         |
|     new |    +2 | 0.0% → 0.1% |   0 → 2 | `loadProvider(ServicesCatalog$ServiceProvider)`                     | `java.util.ServiceLoader`                                              |

##### JIT

|  Change | Delta |           % | Samples | Function                | Location    |
| ------: | ----: | ----------: | ------: | ----------------------- | ----------- |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `itable stub`           | `<unknown>` |
|  +20.0% |    +1 |        0.4% |   5 → 6 | `I2C/C2I adapters(0xb)` | `<unknown>` |

#### Improvements

Functions with the largest decrease in samples collected within the function and its callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |             % |   Samples | Function                                                                                                                              | Location                                                           |
| ------: | ----: | ------------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
|  -25.2% |   -32 |   9.3% → 7.1% |  127 → 95 | `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)`                                                                               | `<unknown>`                                                        |
|  -20.2% |   -22 |   8.0% → 6.5% |  109 → 87 | `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)`                                                                         | `<unknown>`                                                        |
|  -19.4% |   -21 |   7.9% → 6.5% |  108 → 87 | `PhaseIdealLoop::build_and_optimize()`                                                                                                | `<unknown>`                                                        |
|   -2.1% |   -19 | 67.2% → 67.3% | 918 → 899 | `Thread::call_run()`                                                                                                                  | `<unknown>`                                                        |
|   -2.1% |   -19 | 67.2% → 67.3% | 918 → 899 | `thread_native_entry(Thread*)`                                                                                                        | `<unknown>`                                                        |
|   -2.1% |   -19 | 67.3% → 67.4% | 919 → 900 | `_pthread_start`                                                                                                                      | `<unknown>`                                                        |
|   -2.1% |   -19 | 67.3% → 67.4% | 919 → 900 | `thread_start`                                                                                                                        | `<unknown>`                                                        |
|   -3.0% |   -13 | 32.1% → 31.9% | 439 → 426 | `run(String[])`                                                                                                                       | `org.jetbrains.kotlin.preloading.Preloader`                        |
|   -3.0% |   -13 | 32.1% → 31.9% | 439 → 426 | `main(String[])`                                                                                                                      | `org.jetbrains.kotlin.preloading.Preloader`                        |
|   -6.2% |   -13 | 15.3% → 14.7% | 209 → 196 | `Compile::Optimize()`                                                                                                                 | `<unknown>`                                                        |
|  -18.3% |   -13 |   5.2% → 4.3% |   71 → 58 | `WorkerThread::run()`                                                                                                                 | `<unknown>`                                                        |
|  -38.7% |   -12 |   2.3% → 1.4% |   31 → 19 | `G1EvacuateRegionsBaseTask::work(unsigned int)`                                                                                       | `<unknown>`                                                        |
| removed |   -12 |   0.9% → 0.0% |    12 → 0 | `G1ParScanThreadState::steal_and_trim_queue(GenericTaskQueueSet<OverflowTaskQueue<ScannerTask, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>*)` | `<unknown>`                                                        |
|  -80.0% |   -12 |   1.1% → 0.2% |    15 → 3 | `G1ParEvacuateFollowersClosure::do_void()`                                                                                            | `<unknown>`                                                        |
|  -80.0% |   -12 |   1.1% → 0.2% |    15 → 3 | `G1EvacuateRegionsTask::evacuate_live_objects(G1ParScanThreadState*, unsigned int)`                                                   | `<unknown>`                                                        |
|  -20.4% |   -11 |   4.0% → 3.2% |   54 → 43 | `resumeTask(TowerResolveManager$SuspendedResolverTask)`                                                                               | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager` |
|  -20.4% |   -11 |   4.0% → 3.2% |   54 → 43 | `runTasks()`                                                                                                                          | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager` |
|  -19.6% |   -11 |   4.1% → 3.4% |   56 → 45 | `runResolver(CallInfo, ResolutionContext, CandidateCollector, TowerResolveManager, CandidateFactory)`                                 | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver`    |
|  -19.6% |   -11 |   4.1% → 3.4% |   56 → 45 | `runResolver(CallInfo, ResolutionContext, CandidateCollector, CandidateFactory)`                                                      | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver`    |
|  -19.3% |   -11 |   4.2% → 3.4% |   57 → 46 | `runResolver$default(FirTowerResolver, CallInfo, ResolutionContext, CandidateCollector, CandidateFactory, int, Object)`               | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver`    |

##### Compiler

| Change | Delta |             % |   Samples | Function                                                                              | Location    |
| -----: | ----: | ------------: | --------: | ------------------------------------------------------------------------------------- | ----------- |
| -25.2% |   -32 |   9.3% → 7.1% |  127 → 95 | `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)`                               | `<unknown>` |
| -20.2% |   -22 |   8.0% → 6.5% |  109 → 87 | `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)`                         | `<unknown>` |
| -19.4% |   -21 |   7.9% → 6.5% |  108 → 87 | `PhaseIdealLoop::build_and_optimize()`                                                | `<unknown>` |
|  -6.2% |   -13 | 15.3% → 14.7% | 209 → 196 | `Compile::Optimize()`                                                                 | `<unknown>` |
| -45.8% |   -11 |   1.8% → 1.0% |   24 → 13 | `PhaseGVN::transform_no_reclaim(Node*)`                                               | `<unknown>` |
|  -1.7% |   -10 | 42.3% → 42.5% | 578 → 568 | `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)`             | `<unknown>` |
| -28.6% |   -10 |   2.6% → 1.9% |   35 → 25 | `IntervalWalker::walk_to(int)`                                                        | `<unknown>` |
| -10.1% |   -10 |   7.2% → 6.7% |   99 → 89 | `Compilation::emit_lir()`                                                             | `<unknown>` |
|  -1.6% |    -9 | 42.2% → 42.5% | 577 → 568 | `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)`                    | `<unknown>` |
|  -1.1% |    -9 | 60.2% → 60.9% | 822 → 813 | `CompileBroker::invoke_compiler_on_method(CompileTask*)`                              | `<unknown>` |
| -15.3% |    -9 |   4.3% → 3.7% |   59 → 50 | `Compile::optimize_loops(PhaseIterGVN&, LoopOptsMode)`                                | `<unknown>` |
| -32.1% |    -9 |   2.0% → 1.4% |   28 → 19 | `LinearScanWalker::activate_current()`                                                | `<unknown>` |
| -25.7% |    -9 |   2.6% → 1.9% |   35 → 26 | `LinearScan::allocate_registers()`                                                    | `<unknown>` |
| -27.3% |    -9 |   2.4% → 1.8% |   33 → 24 | `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)`                | `<unknown>` |
| -14.9% |    -7 |   3.4% → 3.0% |   47 → 40 | `GraphBuilder::invoke(Bytecodes::Code)`                                               | `<unknown>` |
|  -7.3% |    -6 |   6.0% → 5.7% |   82 → 76 | `LinearScan::do_linear_scan()`                                                        | `<unknown>` |
| -46.2% |    -6 |   1.0% → 0.5% |    13 → 7 | `LIR_Assembler::record_non_safepoint_debug_info()`                                    | `<unknown>` |
| -14.6% |    -6 |   3.0% → 2.6% |   41 → 35 | `GraphBuilder::try_inline_full(ciMethod*, bool, bool, Bytecodes::Code, Instruction*)` | `<unknown>` |
| -14.6% |    -6 |   3.0% → 2.6% |   41 → 35 | `GraphBuilder::try_inline(ciMethod*, bool, bool, Bytecodes::Code, Instruction*)`      | `<unknown>` |
| -26.1% |    -6 |   1.7% → 1.3% |   23 → 17 | `PhaseIdealLoop::split_if_with_blocks(VectorSet&, Node_Stack&)`                       | `<unknown>` |

##### Native

|  Change | Delta |             % |   Samples | Function                                                                                                                              | Location    |
| ------: | ----: | ------------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
|   -2.1% |   -19 | 67.2% → 67.3% | 918 → 899 | `Thread::call_run()`                                                                                                                  | `<unknown>` |
|   -2.1% |   -19 | 67.2% → 67.3% | 918 → 899 | `thread_native_entry(Thread*)`                                                                                                        | `<unknown>` |
|   -2.1% |   -19 | 67.3% → 67.4% | 919 → 900 | `_pthread_start`                                                                                                                      | `<unknown>` |
|   -2.1% |   -19 | 67.3% → 67.4% | 919 → 900 | `thread_start`                                                                                                                        | `<unknown>` |
|  -18.3% |   -13 |   5.2% → 4.3% |   71 → 58 | `WorkerThread::run()`                                                                                                                 | `<unknown>` |
|  -38.7% |   -12 |   2.3% → 1.4% |   31 → 19 | `G1EvacuateRegionsBaseTask::work(unsigned int)`                                                                                       | `<unknown>` |
| removed |   -12 |   0.9% → 0.0% |    12 → 0 | `G1ParScanThreadState::steal_and_trim_queue(GenericTaskQueueSet<OverflowTaskQueue<ScannerTask, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>*)` | `<unknown>` |
|  -80.0% |   -12 |   1.1% → 0.2% |    15 → 3 | `G1ParEvacuateFollowersClosure::do_void()`                                                                                            | `<unknown>` |
|  -80.0% |   -12 |   1.1% → 0.2% |    15 → 3 | `G1EvacuateRegionsTask::evacuate_live_objects(G1ParScanThreadState*, unsigned int)`                                                   | `<unknown>` |
|  -42.3% |   -11 |   1.9% → 1.1% |   26 → 15 | `G1ParScanThreadState::trim_queue_to_threshold(unsigned int)`                                                                         | `<unknown>` |
|  -29.4% |   -10 |   2.5% → 1.8% |   34 → 24 | `InstanceKlass::link_class_impl(JavaThread*)`                                                                                         | `<unknown>` |
|  -23.5% |    -8 |   2.5% → 1.9% |   34 → 26 | `InstanceKlass::initialize_impl(JavaThread*)`                                                                                         | `<unknown>` |
|  -42.1% |    -8 |   1.4% → 0.8% |   19 → 11 | `Parse::do_field_access(bool, bool)`                                                                                                  | `<unknown>` |
|  -31.8% |    -7 |   1.6% → 1.1% |   22 → 15 | `InterpreterRuntime::_new(JavaThread*, ConstantPool*, int)`                                                                           | `<unknown>` |
|  -37.5% |    -6 |   1.2% → 0.7% |   16 → 10 | `G1ParScanThreadState::do_copy_to_survivor_space(G1HeapRegionAttr, oopDesc*, markWord)`                                               | `<unknown>` |
|  -50.0% |    -5 |   0.7% → 0.4% |    10 → 5 | `SymbolTable::new_symbol(char const*, int)`                                                                                           | `<unknown>` |
|  -11.1% |    -5 |   3.3% → 3.0% |   45 → 40 | `PredictedCallGenerator::generate(JVMState*)`                                                                                         | `<unknown>` |
|  -22.7% |    -5 |   1.6% → 1.3% |   22 → 17 | `ClassVerifier::verify_method(methodHandle const&, JavaThread*)`                                                                      | `<unknown>` |
|  -21.7% |    -5 |   1.7% → 1.3% |   23 → 18 | `Verifier::verify(InstanceKlass*, bool, JavaThread*)`                                                                                 | `<unknown>` |
|  -29.4% |    -5 |   1.2% → 0.9% |   17 → 12 | `Dict::Insert(void*, void*, bool)`                                                                                                    | `<unknown>` |

##### Ours

| Change | Delta |             % |   Samples | Function                                                                                                                                                                                                                                                 | Location                                                               |
| -----: | ----: | ------------: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|  -3.0% |   -13 | 32.1% → 31.9% | 439 → 426 | `run(String[])`                                                                                                                                                                                                                                          | `org.jetbrains.kotlin.preloading.Preloader`                            |
|  -3.0% |   -13 | 32.1% → 31.9% | 439 → 426 | `main(String[])`                                                                                                                                                                                                                                         | `org.jetbrains.kotlin.preloading.Preloader`                            |
| -20.4% |   -11 |   4.0% → 3.2% |   54 → 43 | `resumeTask(TowerResolveManager$SuspendedResolverTask)`                                                                                                                                                                                                  | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager`     |
| -20.4% |   -11 |   4.0% → 3.2% |   54 → 43 | `runTasks()`                                                                                                                                                                                                                                             | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager`     |
| -19.6% |   -11 |   4.1% → 3.4% |   56 → 45 | `runResolver(CallInfo, ResolutionContext, CandidateCollector, TowerResolveManager, CandidateFactory)`                                                                                                                                                    | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver`        |
| -19.6% |   -11 |   4.1% → 3.4% |   56 → 45 | `runResolver(CallInfo, ResolutionContext, CandidateCollector, CandidateFactory)`                                                                                                                                                                         | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver`        |
| -19.3% |   -11 |   4.2% → 3.4% |   57 → 46 | `runResolver$default(FirTowerResolver, CallInfo, ResolutionContext, CandidateCollector, CandidateFactory, int, Object)`                                                                                                                                  | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver`        |
| -23.4% |   -11 |   3.4% → 2.7% |   47 → 36 | `resolveCallAndSelectCandidate(FirFunctionCall, ResolutionMode, CollectionLiteralOuterCandidateContext)`                                                                                                                                                 | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`               |
| -23.4% |   -11 |   3.4% → 2.7% |   47 → 36 | `resolveCallAndSelectCandidate$default(FirCallResolver, FirFunctionCall, ResolutionMode, CollectionLiteralOuterCandidateContext, int, Object)`                                                                                                           | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`               |
|  -2.8% |   -10 | 25.8% → 25.6% | 352 → 342 | `exec(MessageCollector, Services, CommonCompilerArguments)`                                                                                                                                                                                              | `org.jetbrains.kotlin.cli.common.CLICompiler`                          |
| -17.5% |   -10 |   4.2% → 3.5% |   57 → 47 | `collectCandidates(FirQualifiedAccessExpression, Name, CallKind, boolean, FirFunctionCallOrigin, List, ResolutionContext, CandidateCollector, FirElement, ResolutionMode, CollectionLiteralOuterCandidateContext)`                                       | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`               |
| -17.5% |   -10 |   4.2% → 3.5% |   57 → 47 | `collectCandidates$default(FirCallResolver, FirQualifiedAccessExpression, Name, CallKind, boolean, FirFunctionCallOrigin, List, ResolutionContext, CandidateCollector, FirElement, ResolutionMode, CollectionLiteralOuterCandidateContext, int, Object)` | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`               |
| -20.0% |   -10 |   3.7% → 3.0% |   50 → 40 | `processLevel(TowerLevel, CallInfo, TowerGroup, ExplicitReceiverKind, Continuation)`                                                                                                                                                                     | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask` |
| -20.0% |   -10 |   3.7% → 3.0% |   50 → 40 | `access$processLevel(FirBaseTowerResolveTask, TowerLevel, CallInfo, TowerGroup, ExplicitReceiverKind, Continuation)`                                                                                                                                     | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask` |
|  -2.6% |    -9 | 25.0% → 24.9% | 342 → 333 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)`                                                                                                                                                      | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`                |
|  -2.6% |    -9 | 25.0% → 24.9% | 342 → 333 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)`                                                                                                            | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`                |
|  -2.6% |    -9 | 25.0% → 24.9% | 342 → 333 | `execute(CommonCompilerArguments, Services, MessageCollector)`                                                                                                                                                                                           | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`                |
|  -2.6% |    -9 | 25.1% → 25.0% | 343 → 334 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)`                                                                                                                                                                                    | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                           |
|  -2.6% |    -9 | 25.1% → 25.0% | 343 → 334 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)`                                                                                                                                                                                   | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                           |
|  -2.6% |    -9 | 25.1% → 25.0% | 343 → 334 | `execImpl(MessageCollector, Services, CommonCompilerArguments)`                                                                                                                                                                                          | `org.jetbrains.kotlin.cli.common.CLICompiler`                          |

##### Standard library

|  Change | Delta |             % |   Samples | Function                                                                        | Location                                              |
| ------: | ----: | ------------: | --------: | ------------------------------------------------------------------------------- | ----------------------------------------------------- |
|  -17.5% |   -10 |   4.2% → 3.5% |   57 → 47 | `resumeWith(Object)`                                                            | `kotlin.coroutines.jvm.internal.BaseContinuationImpl` |
|   -2.5% |    -9 | 26.4% → 26.3% | 360 → 351 | `invokeStatic(Object, Object)`                                                  | `java.lang.invoke.LambdaForm$DMH.0x0000007001008000`  |
|   -2.5% |    -9 | 26.4% → 26.3% | 360 → 351 | `invoke(Object, Object, Object)`                                                | `java.lang.invoke.LambdaForm$MH.0x0000007001009400`   |
|   -2.5% |    -9 | 26.4% → 26.3% | 360 → 351 | `invokeExact_MT(Object, Object, Object, Object)`                                | `java.lang.invoke.Invokers$Holder`                    |
|   -2.5% |    -9 | 26.4% → 26.3% | 360 → 351 | `invokeImpl(Object, Object[])`                                                  | `jdk.internal.reflect.DirectMethodHandleAccessor`     |
|   -2.5% |    -9 | 26.4% → 26.3% | 360 → 351 | `invoke(Object, Object[])`                                                      | `jdk.internal.reflect.DirectMethodHandleAccessor`     |
|   -2.5% |    -9 | 26.4% → 26.3% | 360 → 351 | `invoke(Object, Object[])`                                                      | `java.lang.reflect.Method`                            |
| removed |    -6 |   0.4% → 0.0% |     6 → 0 | `allocateInstance(Object)`                                                      | `java.lang.invoke.DirectMethodHandle`                 |
|   -8.6% |    -6 |   5.1% → 4.8% |   70 → 64 | `read(byte[], int, int)`                                                        | `java.util.zip.InflaterInputStream`                   |
|   -7.4% |    -5 |   5.0% → 4.7% |   68 → 63 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)`                   | `java.util.zip.Inflater`                              |
|   -7.2% |    -5 |   5.1% → 4.8% |   69 → 64 | `inflate(byte[], int, int)`                                                     | `java.util.zip.Inflater`                              |
| removed |    -4 |   0.3% → 0.0% |     4 → 0 | `allocateInstance(Class)`                                                       | `jdk.internal.misc.Unsafe`                            |
| removed |    -4 |   0.3% → 0.0% |     4 → 0 | `newInvokeSpecial(Object, Object, Object)`                                      | `java.lang.invoke.DirectMethodHandle$Holder`          |
| removed |    -4 |   0.3% → 0.0% |     4 → 0 | `linkToTargetMethod(Object, Object, Object)`                                    | `java.lang.invoke.Invokers$Holder`                    |
|   -4.8% |    -3 |   4.5% → 4.4% |   62 → 59 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`                               |
|   -4.7% |    -3 |   4.7% → 4.6% |   64 → 61 | `defineClass(String, byte[], int, int)`                                         | `java.lang.ClassLoader`                               |
|  -75.0% |    -3 |   0.3% → 0.1% |     4 → 1 | `newInvokeSpecial(Object, Object)`                                              | `java.lang.invoke.DirectMethodHandle$Holder`          |
|  -75.0% |    -3 |   0.3% → 0.1% |     4 → 1 | `linkToTargetMethod(Object, Object)`                                            | `java.lang.invoke.Invokers$Holder`                    |
| removed |    -3 |   0.2% → 0.0% |     3 → 0 | `newInstanceWithCaller(Object[], boolean, Class)`                               | `java.lang.reflect.Constructor`                       |
| removed |    -3 |   0.2% → 0.0% |     3 → 0 | `newInstance(Object[])`                                                         | `java.lang.reflect.Constructor`                       |

##### JIT

|  Change | Delta |           % | Samples | Function                  | Location    |
| ------: | ----: | ----------: | ------: | ------------------------- | ----------- |
|  -42.9% |    -3 | 0.5% → 0.3% |   7 → 4 | `I2C/C2I adapters(0xbb)`  | `<unknown>` |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `vtable stub`             | `<unknown>` |
|  -33.3% |    -1 | 0.2% → 0.1% |   3 → 2 | `I2C/C2I adapters`        | `<unknown>` |
|  -50.0% |    -1 |        0.1% |   2 → 1 | `I2C/C2I adapters(0xbbb)` | `<unknown>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `I2C/C2I adapters(0x)`    | `<unknown>` |

#### Callers

Callers with the largest change in contribution to each function's total samples. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `ClassFileParser::parse_constant_pool_entries(ClassFileStream const*, ConstantPool*, int, JavaThread*)` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                                                                          | Location    |
| -----: | ----: | -----: | ------: | ----------------------------------------------------------------------------------------------- | ----------- |
| +37.9% |   +11 | 100.0% | 29 → 40 | `ClassFileParser::parse_constant_pool(ClassFileStream const*, ConstantPool*, int, JavaThread*)` | `<unknown>` |

##### `completeCall(FirExpression, ResolutionMode, boolean)` (`org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter`)

|  Change | Delta |             % | Samples | Caller                                                                                                                                             | Location                                                                                      |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
|  +28.6% |    +8 | 96.6% → 90.0% | 28 → 36 | `transformFunctionCallInternal$org_jetbrains_kotlin_resolve(FirFunctionCall, ResolutionMode, FirExpressionsResolveTransformer$CallResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer` |
| +300.0% |    +3 |  3.4% → 10.0% |   1 → 4 | `completeCall$default(FirCallCompleter, FirExpression, ResolutionMode, boolean, int, Object)`                                                      | `org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter`                                 |

##### `ClassFileParser::ClassFileParser(ClassFileStream*, Symbol*, ClassLoaderData*, ClassLoadInfo const*, ClassFileParser::Publicity, JavaThread*)` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                                                                                             | Location    |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------------------------------ | ----------- |
| +20.8% |   +10 | 100.0% | 48 → 58 | `KlassFactory::create_from_stream(ClassFileStream*, Symbol*, ClassLoaderData*, ClassLoadInfo const&, JavaThread*)` | `<unknown>` |

##### `accept(FirVisitor, Object)` (`org.jetbrains.kotlin.fir.expressions.FirFunctionCall`)

|  Change | Delta |             % | Samples | Caller                                                                                      | Location                                                                                |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| +100.0% |    +4 | 30.8% → 34.8% |   4 → 8 | `checkElement(FirElement)`                                                                  | `org.jetbrains.kotlin.fir.analysis.collectors.CheckerRunningDiagnosticCollectorVisitor` |
| +100.0% |    +3 | 23.1% → 26.1% |   3 → 6 | `convertToIrExpression$org_jetbrains_kotlin_fir2ir(FirExpression, boolean, ConeKotlinType)` | `org.jetbrains.kotlin.fir.backend.Fir2IrVisitor`                                        |
|     new |    +3 |  0.0% → 13.0% |   0 → 3 | `acceptChildren(FirVisitor, Object)`                                                        | `org.jetbrains.kotlin.fir.expressions.impl.FirResolvedArgumentList`                     |
|  +50.0% |    +2 | 30.8% → 26.1% |   4 → 6 | `acceptChildren(FirVisitor, Object)`                                                        | `org.jetbrains.kotlin.fir.expressions.impl.FirContractCallBlock`                        |
| +200.0% |    +2 |  7.7% → 13.0% |   1 → 3 | `acceptChildren(FirVisitor, Object)`                                                        | `org.jetbrains.kotlin.fir.declarations.impl.FirPropertyImpl`                            |

##### `ClassFileParser::parse_constant_pool(ClassFileStream const*, ConstantPool*, int, JavaThread*)` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                                               | Location    |
| -----: | ----: | -----: | ------: | -------------------------------------------------------------------- | ----------- |
| +26.5% |    +9 | 100.0% | 34 → 43 | `ClassFileParser::parse_stream(ClassFileStream const*, JavaThread*)` | `<unknown>` |

##### `SymbolTable::do_lookup(char const*, int, unsigned long)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                                                                  | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------- | ----------- |
|  +66.7% |    +8 | 66.7% → 74.1% | 12 → 20 | `SymbolTable::lookup_only(char const*, int, unsigned int&)`                                             | `<unknown>` |
|  -75.0% |    -3 |  22.2% → 3.7% |   4 → 1 | `SymbolTable::new_symbol(char const*, int)`                                                             | `<unknown>` |
| +150.0% |    +3 | 11.1% → 18.5% |   2 → 5 | `ClassFileParser::parse_constant_pool_entries(ClassFileStream const*, ConstantPool*, int, JavaThread*)` | `<unknown>` |
|     new |    +1 |   0.0% → 3.7% |   0 → 1 | `SymbolTable::new_symbol(Symbol const*, int, int)`                                                      | `<unknown>` |

##### `PhaseCFG::global_code_motion()` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                              | Location    |
| -----: | ----: | -----: | ------: | ----------------------------------- | ----------- |
| +36.0% |    +9 | 100.0% | 25 → 34 | `PhaseCFG::do_global_code_motion()` | `<unknown>` |

##### `PhaseCFG::do_global_code_motion()` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                | Location    |
| -----: | ----: | -----: | ------: | --------------------- | ----------- |
| +32.1% |    +9 | 100.0% | 28 → 37 | `Compile::Code_Gen()` | `<unknown>` |

##### `PhaseCCP::push_child_nodes_to_worklist(Unique_Node_List&, Node*) const` (`<unknown>`)

|  Change | Delta |              % | Samples | Caller                              | Location    |
| ------: | ----: | -------------: | ------: | ----------------------------------- | ----------- |
| +142.9% |   +10 | 87.5% → 100.0% |  7 → 17 | `PhaseCCP::analyze()`               | `<unknown>` |
| removed |    -1 |   12.5% → 0.0% |   1 → 0 | `PhaseCCP::PhaseCCP(PhaseIterGVN*)` | `<unknown>` |

##### `PhaseCCP::push_more_uses(Unique_Node_List&, Node*, Node const*) const` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                                                                   | Location    |
| ------: | ----: | -----: | ------: | ------------------------------------------------------------------------ | ----------- |
| +900.0% |    +9 | 100.0% |  1 → 10 | `PhaseCCP::push_child_nodes_to_worklist(Unique_Node_List&, Node*) const` | `<unknown>` |

##### `KlassFactory::create_from_stream(ClassFileStream*, Symbol*, ClassLoaderData*, ClassLoadInfo const&, JavaThread*)` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                                                                                                     | Location    |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------------------------------------- | ----------- |
|    new |    +5 |   0.0% → 8.1% |   0 → 5 | `ClassLoader::load_class(Symbol*, bool, JavaThread*)`                                                                      | `<unknown>` |
|  +7.8% |    +4 | 94.4% → 88.7% | 51 → 55 | `SystemDictionary::resolve_class_from_stream(ClassFileStream*, Symbol*, Handle, ClassLoadInfo const&, JavaThread*)`        | `<unknown>` |
| -33.3% |    -1 |   5.6% → 3.2% |   3 → 2 | `SystemDictionary::resolve_hidden_class_from_stream(ClassFileStream*, Symbol*, Handle, ClassLoadInfo const&, JavaThread*)` | `<unknown>` |

##### `PhaseMacroExpand::expand_macro_nodes()` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                | Location    |
| ------: | ----: | -----: | ------: | --------------------- | ----------- |
| +100.0% |    +8 | 100.0% |  8 → 16 | `Compile::Optimize()` | `<unknown>` |

##### `PhaseCCP::analyze()` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                              | Location    |
| -----: | ----: | -----: | ------: | ----------------------------------- | ----------- |
| +66.7% |    +8 | 100.0% | 12 → 20 | `PhaseCCP::PhaseCCP(PhaseIterGVN*)` | `<unknown>` |

##### `acceptChildren(FirVisitor, Object)` (`org.jetbrains.kotlin.fir.expressions.impl.FirResolvedArgumentList`)

|  Change | Delta |              % | Samples | Caller                            | Location                                                                                                                |
| ------: | ----: | -------------: | ------: | --------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| +120.0% |    +6 | 100.0% → 84.6% |  5 → 11 | `visitNestedElements(FirElement)` | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor`                                       |
|     new |    +2 |   0.0% → 15.4% |   0 → 2 | `visitElement(FirElement, Set)`   | `org.jetbrains.kotlin.fir.analysis.collectors.components.ControlFlowAnalysisDiagnosticComponent$LocalPropertyCollector` |

##### `visitArgumentList(FirArgumentList, Object)` (`org.jetbrains.kotlin.fir.visitors.FirVisitor`)

|  Change | Delta |      % | Samples | Caller                       | Location                                               |
| ------: | ----: | -----: | ------: | ---------------------------- | ------------------------------------------------------ |
| +160.0% |    +8 | 100.0% |  5 → 13 | `accept(FirVisitor, Object)` | `org.jetbrains.kotlin.fir.expressions.FirArgumentList` |

##### `accept(FirVisitor, Object)` (`org.jetbrains.kotlin.fir.expressions.FirArgumentList`)

|  Change | Delta |              % | Samples | Caller                               | Location                                                              |
| ------: | ----: | -------------: | ------: | ------------------------------------ | --------------------------------------------------------------------- |
| +140.0% |    +7 | 100.0% → 92.3% |  5 → 12 | `acceptChildren(FirVisitor, Object)` | `org.jetbrains.kotlin.fir.expressions.impl.FirFunctionCallImpl`       |
|     new |    +1 |    0.0% → 7.7% |   0 → 1 | `acceptChildren(FirVisitor, Object)` | `org.jetbrains.kotlin.fir.expressions.impl.FirAnnotationCallImpl`     |
|     new |    +1 |    0.0% → 7.7% |   0 → 1 | `acceptChildren(FirVisitor, Object)` | `org.jetbrains.kotlin.fir.expressions.impl.FirImplicitInvokeCallImpl` |

##### `completeIsSubTypeOf(TypeCheckerState, TypeSystemContext, KotlinTypeMarker, KotlinTypeMarker, boolean)` (`org.jetbrains.kotlin.types.AbstractTypeChecker`)

|  Change | Delta |      % | Samples | Caller                                                                       | Location                                         |
| ------: | ----: | -----: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------ |
| +133.3% |    +8 | 100.0% |  6 → 14 | `isSubtypeOf(TypeCheckerState, KotlinTypeMarker, KotlinTypeMarker, boolean)` | `org.jetbrains.kotlin.types.AbstractTypeChecker` |

##### `isSubtypeOf(TypeCheckerState, KotlinTypeMarker, KotlinTypeMarker, boolean)` (`org.jetbrains.kotlin.types.AbstractTypeChecker`)

|  Change | Delta |             % | Samples | Caller                                                                                                                              | Location                                                                                                           |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| +150.0% |    +6 | 66.7% → 71.4% |  4 → 10 | `runIsSubtypeOf$isSubtypeOf(ConstraintInjector$TypeCheckerStateForConstraintInjector, KotlinTypeMarker, boolean, KotlinTypeMarker)` | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector$TypeCheckerStateForConstraintInjector` |
| +300.0% |    +6 | 33.3% → 57.1% |   2 → 8 | `isSubtypeOf$default(AbstractTypeChecker, TypeCheckerState, KotlinTypeMarker, KotlinTypeMarker, boolean, int, Object)`              | `org.jetbrains.kotlin.types.AbstractTypeChecker`                                                                   |

##### `fixVariable(ConstraintSystemCompletionContext, VariableWithConstraints)` (`org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter`)

| Change | Delta |             % | Samples | Caller                                                                                              | Location                                                               |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|    new |    +8 | 0.0% → 100.0% |   0 → 8 | `fixVariableIfReady(ConstraintSystemCompletionContext, VariableFixationFinder$VariableForFixation)` | `org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter` |

##### `fixVariableIfReady(ConstraintSystemCompletionContext, VariableFixationFinder$VariableForFixation)` (`org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter`)

| Change | Delta |             % | Samples | Caller                                                                                                                                                                       | Location                                                               |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|    new |    +8 | 0.0% → 100.0% |   0 → 8 | `runCompletion(ConstraintSystemCompletionContext, ConstraintSystemCompletionMode, List, ConeKotlinType, ResolutionContext, ConstraintSystemCompleter$PostponedAtomAnalyzer)` | `org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter` |

##### `CompileQueue::get(CompilerThread*)` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                  | Location    |
| -----: | ----: | -----: | ------: | --------------------------------------- | ----------- |
| +63.6% |    +7 | 100.0% | 11 → 18 | `CompileBroker::compiler_thread_loop()` | `<unknown>` |

##### `Matcher::xform(Node*, int)` (`<unknown>`)

| Change | Delta |      % | Samples | Caller             | Location    |
| -----: | ----: | -----: | ------: | ------------------ | ----------- |
| +21.2% |    +7 | 100.0% | 33 → 40 | `Matcher::match()` | `<unknown>` |

##### `PhaseChaitin::elide_copy(Node*, int, Block*, Node_List*, Node_List*, bool)` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                                       | Location    |
| ------: | ----: | -----: | ------: | -------------------------------------------- | ----------- |
| +116.7% |    +7 | 100.0% |  6 → 13 | `PhaseChaitin::post_allocate_copy_removal()` | `<unknown>` |

##### `Compilation::build_hir()` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                               | Location    |
| -----: | ----: | -----: | ------: | ------------------------------------ | ----------- |
|  +8.5% |    +6 | 100.0% | 71 → 77 | `Compilation::compile_java_method()` | `<unknown>` |

##### `PhaseCCP::PhaseCCP(PhaseIterGVN*)` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                | Location    |
| -----: | ----: | -----: | ------: | --------------------- | ----------- |
| +42.9% |    +6 | 100.0% | 14 → 20 | `Compile::Optimize()` | `<unknown>` |

##### `Matcher::match_tree(Node const*)` (`<unknown>`)

|  Change | Delta |              % | Samples | Caller                                | Location    |
| ------: | ----: | -------------: | ------: | ------------------------------------- | ----------- |
|  +57.1% |    +8 | 87.5% → 100.0% | 14 → 22 | `Matcher::xform(Node*, int)`          | `<unknown>` |
| removed |    -2 |   12.5% → 0.0% |   2 → 0 | `Matcher::match_sfpt(SafePointNode*)` | `<unknown>` |

##### `Matcher::Label_Root(Node const*, State*, Node*, Node*&)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                    | Location    |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------- | ----------- |
| +150.0% |    +6 |        100.0% |  4 → 10 | `Matcher::match_tree(Node const*)`                        | `<unknown>` |
| +133.3% |    +4 | 75.0% → 70.0% |   3 → 7 | `Matcher::Label_Root(Node const*, State*, Node*, Node*&)` | `<unknown>` |

##### `Compile::Code_Gen()` (`<unknown>`)

| Change | Delta |      % |   Samples | Caller                                                             | Location    |
| -----: | ----: | -----: | --------: | ------------------------------------------------------------------ | ----------- |
|  +1.7% |    +5 | 100.0% | 286 → 291 | `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` | `<unknown>` |

##### `MachNode::rematerialize() const` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                             | Location    |
| ------: | ----: | ------------: | ------: | -------------------------------------------------- | ----------- |
| +200.0% |    +4 | 66.7% → 75.0% |   2 → 6 | `PhaseChaitin::Split(unsigned int, ResourceArea*)` | `<unknown>` |
|     new |    +2 |  0.0% → 25.0% |   0 → 2 | `PhaseChaitin::build_ifg_physical(ResourceArea*)`  | `<unknown>` |
| removed |    -1 |  33.3% → 0.0% |   1 → 0 | `PhaseChaitin::Register_Allocate()`                | `<unknown>` |

##### `Node_Backward_Iterator::next()` (`<unknown>`)

| Change | Delta |              % | Samples | Caller                                             | Location    |
| -----: | ----: | -------------: | ------: | -------------------------------------------------- | ----------- |
|    new |    +4 |   0.0% → 50.0% |   0 → 4 | `PhaseCFG::global_code_motion()`                   | `<unknown>` |
| +33.3% |    +1 | 100.0% → 50.0% |   3 → 4 | `PhaseCFG::schedule_late(VectorSet&, Node_Stack&)` | `<unknown>` |

##### `ciBytecodeStream::get_field(bool&)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                        | Location    |
| ------: | ----: | ------------: | ------: | --------------------------------------------- | ----------- |
| +150.0% |    +3 | 66.7% → 62.5% |   2 → 5 | `GraphBuilder::access_field(Bytecodes::Code)` | `<unknown>` |
|     new |    +2 |  0.0% → 25.0% |   0 → 2 | `Parse::do_field_access(bool, bool)`          | `<unknown>` |

##### `PhaseIterGVN::add_users_to_worklist(Node*)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                                                                                                                                                           | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- |
|     new |    +3 |  0.0% → 37.5% |   0 → 3 | `PhaseIterGVN::PhaseIterGVN(PhaseGVN*)`                                                                                                                                                          | `<unknown>` |
|  +50.0% |    +1 | 66.7% → 37.5% |   2 → 3 | `PhaseIterGVN::transform_old(Node*)`                                                                                                                                                             | `<unknown>` |
| removed |    -1 |  33.3% → 0.0% |   1 → 0 | `PhaseIdealLoop::clone_loop_handle_data_uses(Node*, Node_List&, IdealLoopTree*, IdealLoopTree*, Node_List*&, Node_List*&, Node_List*&, Node_List&, unsigned int, PhaseIdealLoop::CloneLoopMode)` | `<unknown>` |
|     new |    +1 |  0.0% → 12.5% |   0 → 1 | `RegionNode::Ideal(PhaseGVN*, bool)`                                                                                                                                                             | `<unknown>` |
|     new |    +1 |  0.0% → 12.5% |   0 → 1 | `Node::set_req_X(unsigned int, Node*, PhaseIterGVN*)`                                                                                                                                            | `<unknown>` |

##### `PhaseCFG::partial_latency_of_defs(Node*)` (`<unknown>`)

|  Change | Delta |              % | Samples | Caller                              | Location    |
| ------: | ----: | -------------: | ------: | ----------------------------------- | ----------- |
| +200.0% |    +6 | 75.0% → 100.0% |   3 → 9 | `PhaseCFG::global_code_motion()`    | `<unknown>` |
| removed |    -1 |   25.0% → 0.0% |   1 → 0 | `PhaseCFG::do_global_code_motion()` | `<unknown>` |

##### `Compile::remove_speculative_types(PhaseIterGVN&)` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                | Location    |
| ------: | ----: | -----: | ------: | --------------------- | ----------- |
| +500.0% |    +5 | 100.0% |   1 → 6 | `Compile::Optimize()` | `<unknown>` |

##### `ClassFileParser::parse_stream(ClassFileStream const*, JavaThread*)` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                                                                                                                         | Location    |
| -----: | ----: | -----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| +15.2% |    +7 | 100.0% | 46 → 53 | `ClassFileParser::ClassFileParser(ClassFileStream*, Symbol*, ClassLoaderData*, ClassLoadInfo const*, ClassFileParser::Publicity, JavaThread*)` | `<unknown>` |

##### `__psynch_cvwait` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                      | Location    |
| -----: | ----: | -----: | ------: | ------------------------------------------- | ----------- |
| +87.5% |    +7 | 100.0% |  8 → 15 | `PlatformMonitor::wait(unsigned long long)` | `<unknown>` |

##### `SymbolTable::lookup_only(char const*, int, unsigned int&)` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                                                                                  | Location    |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------------------- | ----------- |
| +38.9% |    +7 | 100.0% | 18 → 25 | `ClassFileParser::parse_constant_pool_entries(ClassFileStream const*, ConstantPool*, int, JavaThread*)` | `<unknown>` |

##### `InterpreterRuntime::resolve_from_cache(JavaThread*, Bytecodes::Code)` (`<unknown>`)

|  Change | Delta |           % | Samples | Caller                                                                       | Location                                                                        |
| ------: | ----: | ----------: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| removed |    -1 | 4.0% → 0.0% |   1 → 0 | `processPropertiesByName(Name, Function1)`                                   | `org.jetbrains.kotlin.fir.resolve.calls.FirSyntheticPropertiesScope`            |
| removed |    -1 | 4.0% → 0.0% |   1 → 0 | `check(CheckerContext, DiagnosticReporter, FirNamedFunction)`                | `org.jetbrains.kotlin.fir.analysis.checkers.declaration.FirFunctionNameChecker` |
| removed |    -1 | 4.0% → 0.0% |   1 → 0 | `declaresDefaultValue$lambda$0(int, Ref$BooleanRef, FirNamedFunctionSymbol)` | `org.jetbrains.kotlin.fir.resolve.FirDefaultParametersResolver`                 |
| removed |    -1 | 4.0% → 0.0% |   1 → 0 | `addShutdownHook(Thread)`                                                    | `java.lang.Runtime`                                                             |
| removed |    -1 | 4.0% → 0.0% |   1 → 0 | `newBuilder()`                                                               | `org.jetbrains.kotlin.metadata.jvm.JvmModuleProtoBuf$PackageParts`              |

##### `CompiledIC::set_to_monomorphic(CompiledICInfo&)` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                                                                                                                                                 | Location    |
| ------: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- |
| +300.0% |    +6 | 100.0% |   2 → 8 | `SharedRuntime::resolve_sub_helper_internal(methodHandle, frame const&, CompiledMethod*, bool, bool, Handle, CallInfo&, Bytecodes::Code, JavaThread*)` | `<unknown>` |

##### `SignatureStream::SignatureStream(Symbol const*, bool)` (`<unknown>`)

| Change | Delta |            % | Samples | Caller                                                                                                                       | Location    |
| -----: | ----: | -----------: | ------: | ---------------------------------------------------------------------------------------------------------------------------- | ----------- |
|    new |    +2 | 0.0% → 33.3% |   0 → 2 | `ciSignature::ciSignature(ciKlass*, constantPoolHandle const&, ciSymbol*)`                                                   | `<unknown>` |
|    new |    +1 | 0.0% → 16.7% |   0 → 1 | `ClassVerifier::translate_signature(Symbol*, sig_as_verification_types*)`                                                    | `<unknown>` |
|    new |    +1 | 0.0% → 16.7% |   0 → 1 | `ClassVerifier::verify_field_instructions(RawBytecodeStream*, StackMapFrame*, constantPoolHandle const&, bool, JavaThread*)` | `<unknown>` |
|    new |    +1 | 0.0% → 16.7% |   0 → 1 | `SystemDictionary::find_instance_or_array_klass(Thread*, Symbol*, Handle, Handle)`                                           | `<unknown>` |
|    new |    +1 | 0.0% → 16.7% |   0 → 1 | `SystemDictionary::find_method_handle_type(Symbol*, Klass*, JavaThread*)`                                                    | `<unknown>` |

##### `ClassLoader::load_class(Symbol*, bool, JavaThread*)` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                                                                     | Location    |
| ------: | ----: | -----: | ------: | -------------------------------------------------------------------------- | ----------- |
| +500.0% |    +5 | 100.0% |   1 → 6 | `SystemDictionary::load_instance_class_impl(Symbol*, Handle, JavaThread*)` | `<unknown>` |

##### `SystemDictionary::load_instance_class_impl(Symbol*, Handle, JavaThread*)` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                                                                | Location    |
| ------: | ----: | -----: | ------: | --------------------------------------------------------------------- | ----------- |
| +166.7% |    +5 | 100.0% |   3 → 8 | `SystemDictionary::load_instance_class(Symbol*, Handle, JavaThread*)` | `<unknown>` |

##### `SystemDictionary::load_instance_class(Symbol*, Handle, JavaThread*)` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                                                                                   | Location    |
| ------: | ----: | -----: | ------: | ---------------------------------------------------------------------------------------- | ----------- |
| +166.7% |    +5 | 100.0% |   3 → 8 | `SystemDictionary::resolve_instance_class_or_null(Symbol*, Handle, Handle, JavaThread*)` | `<unknown>` |

##### `InstanceKlass::find_method_index(Array<Method*> const*, Symbol const*, Symbol const*, Klass::OverpassLookupMode, Klass::StaticLookupMode, Klass::PrivateLookupMode)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                                                                                                                                | Location    |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
|  +35.7% |    +5 | 77.8% → 82.6% | 14 → 19 | `InstanceKlass::uncached_lookup_method(Symbol const*, Symbol const*, Klass::OverpassLookupMode, Klass::PrivateLookupMode) const`                                      | `<unknown>` |
| removed |    -1 |   5.6% → 0.0% |   1 → 0 | `InstanceKlass::initialize_impl(JavaThread*)`                                                                                                                         | `<unknown>` |
|     new |    +1 |   0.0% → 4.3% |   0 → 1 | `InstanceKlass::find_local_method(Array<Method*> const*, Symbol const*, Symbol const*, Klass::OverpassLookupMode, Klass::StaticLookupMode, Klass::PrivateLookupMode)` | `<unknown>` |

##### `Monitor::wait(unsigned long long)` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                               | Location    |
| -----: | ----: | -----: | ------: | ------------------------------------ | ----------- |
| +45.5% |    +5 | 100.0% | 11 → 16 | `CompileQueue::get(CompilerThread*)` | `<unknown>` |

##### `nmethod::new_nmethod(methodHandle const&, int, int, CodeOffsets*, int, DebugInformationRecorder*, Dependencies*, CodeBuffer*, int, OopMapSet*, ExceptionHandlerTable*, ImplicitExceptionTable*, AbstractCompiler*, CompLevel, char*, int, JVMCINMethodData*)` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                                                                                                                                                                         | Location    |
| -----: | ----: | -----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| +31.3% |    +5 | 100.0% | 16 → 21 | `ciEnv::register_method(ciMethod*, int, CodeOffsets*, int, CodeBuffer*, int, OopMapSet*, ExceptionHandlerTable*, ImplicitExceptionTable*, AbstractCompiler*, bool, bool, bool, int, RTMState)` | `<unknown>` |

##### `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>(DIR_Chunk* const&)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                                                                                                                          | Location    |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| +100.0% |    +6 | 54.5% → 75.0% |  6 → 12 | `DebugInformationRecorder::describe_scope(int, methodHandle const&, ciMethod*, int, bool, bool, bool, bool, bool, bool, DebugToken*, DebugToken*, DebugToken*)` | `<unknown>` |
|  -20.0% |    -1 | 45.5% → 25.0% |   5 → 4 | `DebugInformationRecorder::serialize_scope_values(GrowableArray<ScopeValue*>*)`                                                                                 | `<unknown>` |

##### `SharedRuntime::resolve_sub_helper_internal(methodHandle, frame const&, CompiledMethod*, bool, bool, Handle, CallInfo&, Bytecodes::Code, JavaThread*)` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                                                       | Location    |
| ------: | ----: | -----: | ------: | ------------------------------------------------------------ | ----------- |
| +125.0% |    +5 | 100.0% |   4 → 9 | `SharedRuntime::resolve_sub_helper(bool, bool, JavaThread*)` | `<unknown>` |

##### `Parse::do_ifnull(BoolTest::mask, Node*)` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                     | Location    |
| ------: | ----: | -----: | ------: | -------------------------- | ----------- |
| +500.0% |    +5 | 100.0% |   1 → 6 | `Parse::do_one_bytecode()` | `<unknown>` |

##### `acceptChildren(FirVisitor, Object)` (`org.jetbrains.kotlin.fir.expressions.impl.FirFunctionCallImpl`)

|  Change | Delta |              % | Samples | Caller                            | Location                                                                                                                |
| ------: | ----: | -------------: | ------: | --------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| +100.0% |    +5 | 100.0% → 83.3% |  5 → 10 | `visitNestedElements(FirElement)` | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor`                                       |
|     new |    +2 |   0.0% → 16.7% |   0 → 2 | `visitElement(FirElement, Set)`   | `org.jetbrains.kotlin.fir.analysis.collectors.components.ControlFlowAnalysisDiagnosticComponent$LocalPropertyCollector` |

##### `runCompletion(ConstraintSystemCompletionContext, ConstraintSystemCompletionMode, List, ConeKotlinType, ResolutionContext, ConstraintSystemCompleter$PostponedAtomAnalyzer)` (`org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter`)

| Change | Delta |      % | Samples | Caller                                                                                                                                                                  | Location                                                               |
| -----: | ----: | -----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| +24.0% |    +6 | 100.0% | 25 → 31 | `complete(ConstraintSystemCompletionContext, ConstraintSystemCompletionMode, List, ConeKotlinType, ResolutionContext, ConstraintSystemCompleter$PostponedAtomAnalyzer)` | `org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter` |

##### `complete(ConstraintSystemCompletionContext, ConstraintSystemCompletionMode, List, ConeKotlinType, ResolutionContext, ConstraintSystemCompleter$PostponedAtomAnalyzer)` (`org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter`)

| Change | Delta |      % | Samples | Caller                                                                                                                       | Location                                                      |
| -----: | ----: | -----: | ------: | ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| +24.0% |    +6 | 100.0% | 25 → 31 | `runCompletionForCall(Candidate, ConstraintSystemCompletionMode, FirExpression, ConeKotlinType, PostponedArgumentsAnalyzer)` | `org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter` |

##### `runCompletionForCall(Candidate, ConstraintSystemCompletionMode, FirExpression, ConeKotlinType, PostponedArgumentsAnalyzer)` (`org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter`)

| Change | Delta |      % | Samples | Caller                                                 | Location                                                      |
| -----: | ----: | -----: | ------: | ------------------------------------------------------ | ------------------------------------------------------------- |
| +24.0% |    +6 | 100.0% | 25 → 31 | `completeCall(FirExpression, ResolutionMode, boolean)` | `org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter` |

##### `accept(FirVisitor, Object)` (`org.jetbrains.kotlin.fir.expressions.FirReturnExpression`)

|  Change | Delta |             % | Samples | Caller                               | Location                                                                                |
| ------: | ----: | ------------: | ------: | ------------------------------------ | --------------------------------------------------------------------------------------- |
| +200.0% |    +4 | 20.0% → 37.5% |   2 → 6 | `toIrStatement(FirStatement)`        | `org.jetbrains.kotlin.fir.backend.Fir2IrVisitor`                                        |
|  +42.9% |    +3 | 70.0% → 62.5% |  7 → 10 | `acceptChildren(FirVisitor, Object)` | `org.jetbrains.kotlin.fir.expressions.impl.FirBlockImpl`                                |
|  -50.0% |    -1 |  20.0% → 6.3% |   2 → 1 | `checkElement(FirElement)`           | `org.jetbrains.kotlin.fir.analysis.collectors.CheckerRunningDiagnosticCollectorVisitor` |
| removed |    -1 |  10.0% → 0.0% |   1 → 0 | `acceptChildren(FirVisitor, Object)` | `org.jetbrains.kotlin.fir.expressions.impl.FirSingleExpressionBlock`                    |

##### `addConstraintIfCompatible(ConstraintSystemBuilder, KotlinTypeMarker, KotlinTypeMarker, ConstraintPosition, ConstraintKind)` (`org.jetbrains.kotlin.resolve.calls.inference.ConstraintSystemBuilderKt`)

| Change | Delta |      % | Samples | Caller                                                                                                              | Location                                                                 |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| +85.7% |    +6 | 100.0% |  7 → 13 | `addSubtypeConstraintIfCompatible(ConstraintSystemBuilder, KotlinTypeMarker, KotlinTypeMarker, ConstraintPosition)` | `org.jetbrains.kotlin.resolve.calls.inference.ConstraintSystemBuilderKt` |

##### `addSubtypeConstraintIfCompatible(ConstraintSystemBuilder, KotlinTypeMarker, KotlinTypeMarker, ConstraintPosition)` (`org.jetbrains.kotlin.resolve.calls.inference.ConstraintSystemBuilderKt`)

|  Change | Delta |             % | Samples | Caller                                                                                                                                 | Location                                                                  |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| +100.0% |    +5 | 71.4% → 76.9% |  5 → 10 | `checkApplicabilityForArgumentType(ArgumentCheckingProcessor$ArgumentContext, ConeResolutionAtom, ConeKotlinType, ConstraintPosition)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ArgumentCheckingProcessor` |
|  +50.0% |    +1 | 28.6% → 23.1% |   2 → 3 | `addConstraintFromExpectedType(Candidate, ConeKotlinType, ResolutionMode)`                                                             | `org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter`             |

##### `runIsSubtypeOf$isSubtypeOf(ConstraintInjector$TypeCheckerStateForConstraintInjector, KotlinTypeMarker, boolean, KotlinTypeMarker)` (`org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector$TypeCheckerStateForConstraintInjector`)

|  Change | Delta |      % | Samples | Caller                                                                 | Location                                                                                                           |
| ------: | ----: | -----: | ------: | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| +150.0% |    +6 | 100.0% |  4 → 10 | `runIsSubtypeOf(KotlinTypeMarker, KotlinTypeMarker, boolean, boolean)` | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector$TypeCheckerStateForConstraintInjector` |

##### `runIsSubtypeOf(KotlinTypeMarker, KotlinTypeMarker, boolean, boolean)` (`org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector$TypeCheckerStateForConstraintInjector`)

|  Change | Delta |             % | Samples | Caller                                                                                                                                                | Location                                                                                                           |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| +200.0% |    +6 | 75.0% → 90.0% |   3 → 9 | `runIsSubtypeOf$default(ConstraintInjector$TypeCheckerStateForConstraintInjector, KotlinTypeMarker, KotlinTypeMarker, boolean, boolean, int, Object)` | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector$TypeCheckerStateForConstraintInjector` |

##### `runIsSubtypeOf$default(ConstraintInjector$TypeCheckerStateForConstraintInjector, KotlinTypeMarker, KotlinTypeMarker, boolean, boolean, int, Object)` (`org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector$TypeCheckerStateForConstraintInjector`)

|  Change | Delta |      % | Samples | Caller                                                                                                                                                           | Location                                                                     |
| ------: | ----: | -----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| +200.0% |    +6 | 100.0% |   3 → 9 | `addSubTypeConstraintAndIncorporateIt(ConstraintInjector$Context, ConstraintInjector$TypeCheckerStateForConstraintInjector, KotlinTypeMarker, KotlinTypeMarker)` | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector` |

##### `transformChildren(IrTransformer, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`)

|  Change | Delta |             % | Samples | Caller                                                       | Location                                                      |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------ | ------------------------------------------------------------- |
| +200.0% |    +2 | 25.0% → 30.0% |   1 → 3 | `visitBody(IrBody, Object)`                                  | `org.jetbrains.kotlin.ir.visitors.IrTransformer`              |
|  +66.7% |    +2 | 75.0% → 50.0% |   3 → 5 | `visitBody(IrBody)`                                          | `org.jetbrains.kotlin.ir.visitors.IrElementTransformerVoid`   |
|     new |    +2 |  0.0% → 20.0% |   0 → 2 | `transformChildrenVoid(IrElement, IrElementTransformerVoid)` | `org.jetbrains.kotlin.ir.visitors.IrElementTransformerVoidKt` |

##### `areEqual(Object, Object)` (`kotlin.jvm.internal.Intrinsics`)

|  Change | Delta |            % | Samples | Caller                                                    | Location                                                                                    |
| ------: | ----: | -----------: | ------: | --------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `check(CheckerContext, DiagnosticReporter, FirProperty)`  | `org.jetbrains.kotlin.fir.analysis.checkers.declaration.FirDestructuringDeclarationChecker` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `configure(FirLoopBuilder, FirLoopTarget, Function0)`     | `org.jetbrains.kotlin.fir.builder.AbstractRawFirBuilder`                                    |
|     new |    +1 | 0.0% → 14.3% |   0 → 1 | `getValue(Object, Object)`                                | `org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache`                                      |
|     new |    +1 | 0.0% → 14.3% |   0 → 1 | `buildDefaultFlow(CFGNode, Function2)`                    | `org.jetbrains.kotlin.fir.resolve.dfa.FirDataFlowAnalyzer`                                  |
|     new |    +1 | 0.0% → 14.3% |   0 → 1 | `hiddenStatusOfCall(FirCallableSymbol, boolean, boolean)` | `org.jetbrains.kotlin.fir.declarations.DeprecationUtilsKt`                                  |

##### `findBootstrapClass(String)` (`java.lang.ClassLoader`)

|  Change | Delta |      % | Samples | Caller                             | Location                |
| ------: | ----: | -----: | ------: | ---------------------------------- | ----------------------- |
| +133.3% |    +4 | 100.0% |   3 → 7 | `findBootstrapClassOrNull(String)` | `java.lang.ClassLoader` |

##### `findBootstrapClassOrNull(String)` (`java.lang.ClassLoader`)

|  Change | Delta |              % | Samples | Caller                             | Location                |
| ------: | ----: | -------------: | ------: | ---------------------------------- | ----------------------- |
| +100.0% |    +3 | 100.0% → 85.7% |   3 → 6 | `loadClass(String, boolean)`       | `java.lang.ClassLoader` |
|     new |    +1 |   0.0% → 14.3% |   0 → 1 | `findBootstrapClassOrNull(String)` | `java.lang.System$2`    |

##### `updateBytes(int, byte[], int, int)` (`java.util.zip.CRC32`)

|  Change | Delta |      % | Samples | Caller                     | Location              |
| ------: | ----: | -----: | ------: | -------------------------- | --------------------- |
| +400.0% |    +4 | 100.0% |   1 → 5 | `update(byte[], int, int)` | `java.util.zip.CRC32` |

##### `update(byte[], int, int)` (`java.util.zip.CRC32`)

|  Change | Delta |      % | Samples | Caller                   | Location                       |
| ------: | ----: | -----: | ------: | ------------------------ | ------------------------------ |
| +400.0% |    +4 | 100.0% |   1 → 5 | `read(byte[], int, int)` | `java.util.zip.ZipInputStream` |

##### `checkNotNullParameter(Object, String)` (`kotlin.jvm.internal.Intrinsics`)

|  Change | Delta |            % | Samples | Caller                                                                   | Location                                                                   |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------------ | -------------------------------------------------------------------------- |
| removed |    -2 | 33.3% → 0.0% |   2 → 0 | `extractValue(AbstractArrayMapOwner)`                                    | `org.jetbrains.kotlin.util.AbstractArrayMapOwner$AbstractArrayMapAccessor` |
| removed |    -1 | 16.7% → 0.0% |   1 → 0 | `areEqualTypeConstructors(TypeConstructorMarker, TypeConstructorMarker)` | `org.jetbrains.kotlin.fir.types.ConeTypeContext`                           |
| removed |    -1 | 16.7% → 0.0% |   1 → 0 | `<init>(String, MethodNode, Interpreter, boolean, Function2)`            | `org.jetbrains.kotlin.codegen.optimization.common.FastMethodAnalyzer`      |
| removed |    -1 | 16.7% → 0.0% |   1 → 0 | `isEnabled(SessionHolder, LanguageFeature)`                              | `org.jetbrains.kotlin.fir.LanguageVersionUtilsKt`                          |
| removed |    -1 | 16.7% → 0.0% |   1 → 0 | `lazy(LazyThreadSafetyMode, Function0)`                                  | `kotlin.LazyKt__LazyJVMKt`                                                 |

##### `sanitizeStackTrace(Throwable)` (`kotlin.jvm.internal.Intrinsics`)

|  Change | Delta |      % | Samples | Caller                            | Location                         |
| ------: | ----: | -----: | ------: | --------------------------------- | -------------------------------- |
| +100.0% |    +2 | 100.0% |   2 → 4 | `throwParameterIsNullNPE(String)` | `kotlin.jvm.internal.Intrinsics` |

##### `throwParameterIsNullNPE(String)` (`kotlin.jvm.internal.Intrinsics`)

|  Change | Delta |      % | Samples | Caller                                  | Location                         |
| ------: | ----: | -----: | ------: | --------------------------------------- | -------------------------------- |
| +100.0% |    +2 | 100.0% |   2 → 4 | `checkNotNullParameter(Object, String)` | `kotlin.jvm.internal.Intrinsics` |

##### `getContributedClassifier(Name, LookupLocation)` (`kotlin.reflect.jvm.internal.impl.resolve.scopes.AbstractScopeAdapter`)

|  Change | Delta |      % | Samples | Caller                                                              | Location                                                           |
| ------: | ----: | -----: | ------: | ------------------------------------------------------------------- | ------------------------------------------------------------------ |
| +100.0% |    +2 | 100.0% |   2 → 4 | `findClassifierAcrossModuleDependencies(ModuleDescriptor, ClassId)` | `kotlin.reflect.jvm.internal.impl.descriptors.FindClassInModuleKt` |

##### `findClassifierAcrossModuleDependencies(ModuleDescriptor, ClassId)` (`kotlin.reflect.jvm.internal.impl.descriptors.FindClassInModuleKt`)

|  Change | Delta |     % | Samples | Caller                                                         | Location                                                                          |
| ------: | ----: | ----: | ------: | -------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| +100.0% |    +1 | 50.0% |   1 → 2 | `findClassAcrossModuleDependencies(ModuleDescriptor, ClassId)` | `kotlin.reflect.jvm.internal.impl.descriptors.FindClassInModuleKt`                |
| +100.0% |    +1 | 50.0% |   1 → 2 | `computeClassifierDescriptor(int)`                             | `kotlin.reflect.jvm.internal.impl.serialization.deserialization.TypeDeserializer` |

##### `hasNext()` (`java.util.ServiceLoader$2`)

|  Change | Delta |      % | Samples | Caller      | Location                    |
| ------: | ----: | -----: | ------: | ----------- | --------------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `hasNext()` | `java.util.ServiceLoader$3` |

##### `hasNext()` (`java.util.ServiceLoader$3`)

|  Change | Delta |             % | Samples | Caller                               | Location                                                       |
| ------: | ----: | ------------: | ------: | ------------------------------------ | -------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `toCollection(Iterable, Collection)` | `kotlin.collections.CollectionsKt___CollectionsKt`             |
|     new |    +1 |  0.0% → 33.3% |   0 → 1 | `loadInstalledProviders()`           | `java.nio.file.spi.FileSystemProvider`                         |
|     new |    +1 |  0.0% → 33.3% |   0 → 1 | `firstOrNull(Iterable)`              | `kotlin.collections.CollectionsKt___CollectionsKt`             |
|     new |    +1 |  0.0% → 33.3% |   0 → 1 | `run()`                              | `java.lang.management.ManagementFactory$PlatformMBeanFinder$1` |

##### `get(Object)` (`jdk.internal.util.ReferencedKeyMap`)

| Change | Delta |             % | Samples | Caller        | Location                             |
| -----: | ----: | ------------: | ------: | ------------- | ------------------------------------ |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `get(Object)` | `jdk.internal.util.ReferencedKeySet` |

##### `get(Object)` (`jdk.internal.util.ReferencedKeySet`)

| Change | Delta |             % | Samples | Caller                              | Location                      |
| -----: | ----: | ------------: | ------: | ----------------------------------- | ----------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `makeImpl(Class, Class[], boolean)` | `java.lang.invoke.MethodType` |

##### `add(Object)` (`java.util.HashSet`)

| Change | Delta |            % | Samples | Caller                                                                     | Location                                                                                           |
| -----: | ----: | -----------: | ------: | -------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `toCollection(Object[], Collection)`                                       | `kotlin.collections.ArraysKt___ArraysKt`                                                           |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `processLabels(TemporaryVariablesEliminationTransformer$ControlFlowGraph)` | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer` |

##### `isArray()` (`java.lang.Class`)

| Change | Delta |            % | Samples | Caller                        | Location                       |
| -----: | ----: | -----------: | ------: | ----------------------------- | ------------------------------ |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `isTypeVisible(Class, Class)` | `sun.invoke.util.VerifyAccess` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `getComponentType()`          | `java.lang.Class`              |

##### `put(Object, Object)` (`java.util.IdentityHashMap`)

| Change | Delta |            % | Samples | Caller                | Location                                        |
| -----: | ----: | -----------: | ------: | --------------------- | ----------------------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `convertToHashMap()`  | `org.jetbrains.kotlin.utils.SmartIdentityTable` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `set(Object, Object)` | `org.jetbrains.kotlin.utils.SmartIdentityTable` |

##### `read(byte[], int, int)` (`java.io.PushbackInputStream`)

| Change | Delta |            % | Samples | Caller                        | Location                            |
| -----: | ----: | -----------: | ------: | ----------------------------- | ----------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `fill()`                      | `java.util.zip.InflaterInputStream` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `readFully(byte[], int, int)` | `java.util.zip.ZipInputStream`      |

##### `getNextEntry()` (`java.util.zip.ZipInputStream`)

| Change | Delta |             % | Samples | Caller                                                  | Location                                               |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------- | ------------------------------------------------------ |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `loadAllClassesFromJars(Collection, int, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `loadProvider(ServicesCatalog$ServiceProvider)` (`java.util.ServiceLoader`)

| Change | Delta |             % | Samples | Caller      | Location                                               |
| -----: | ----: | ------------: | ------: | ----------- | ------------------------------------------------------ |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `hasNext()` | `java.util.ServiceLoader$ModuleServicesLookupIterator` |

##### `itable stub` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                                                      | Location                                                         |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `getOwnTypeParameters()`                                                                    | `org.jetbrains.kotlin.fir.deserialization.FirTypeDeserializer`   |
|     new |    +1 |  0.0% → 33.3% |   0 → 1 | `lowerBoundIfFlexible(TypeSystemContext, KotlinTypeMarker)`                                 | `org.jetbrains.kotlin.types.model.TypeSystemContextContextualKt` |
|     new |    +1 |  0.0% → 33.3% |   0 → 1 | `unwrapStubTypeVariableConstructor(TypeSystemContext, TypeConstructorMarker)`               | `org.jetbrains.kotlin.types.model.TypeSystemContextContextualKt` |
|     new |    +1 |  0.0% → 33.3% |   0 → 1 | `hasNotNullSupertype(TypeCheckerState, RigidTypeMarker, TypeCheckerState$SupertypesPolicy)` | `org.jetbrains.kotlin.types.AbstractNullabilityChecker`          |

##### `I2C/C2I adapters(0xb)` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                                                                                                              | Location                                                                                                      |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `getResolvePhase(FirElementWithResolveState)`                                                                       | `org.jetbrains.kotlin.fir.declarations.FirResolveStateKt`                                                     |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `writeGenericArguments(TypeSystemCommonBackendContext, JvmSignatureWriter, List, List, TypeMappingMode, Function3)` | `org.jetbrains.kotlin.codegen.state.KotlinTypeMapper$Companion`                                               |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `check(CheckerContext, DiagnosticReporter, FirQualifiedAccessExpression)`                                           | `org.jetbrains.kotlin.fir.analysis.checkers.expression.FirUpperBoundViolatedQualifiedAccessExpressionChecker` |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `check$findCycles(Set, List, List, FirTypeParameterSymbol)`                                                         | `org.jetbrains.kotlin.fir.analysis.checkers.declaration.FirCyclicTypeBoundsChecker`                           |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `isBoxedArray(IrType)`                                                                                              | `org.jetbrains.kotlin.ir.util.IrTypeUtilsKt`                                                                  |

##### `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                                 | Location    |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------ | ----------- |
| -33.8% |   -23 | 53.5% → 47.4% | 68 → 45 | `Compile::Optimize()`                                  | `<unknown>` |
| -15.3% |    -9 | 46.5% → 52.6% | 59 → 50 | `Compile::optimize_loops(PhaseIterGVN&, LoopOptsMode)` | `<unknown>` |

##### `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` (`<unknown>`)

| Change | Delta |      % |  Samples | Caller                                                  | Location    |
| -----: | ----: | -----: | -------: | ------------------------------------------------------- | ----------- |
| -20.2% |   -22 | 100.0% | 109 → 87 | `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` | `<unknown>` |

##### `PhaseIdealLoop::build_and_optimize()` (`<unknown>`)

| Change | Delta |      % |  Samples | Caller                                                        | Location    |
| -----: | ----: | -----: | -------: | ------------------------------------------------------------- | ----------- |
| -19.4% |   -21 | 100.0% | 108 → 87 | `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` | `<unknown>` |

##### `Thread::call_run()` (`<unknown>`)

| Change | Delta |      % |   Samples | Caller                         | Location    |
| -----: | ----: | -----: | --------: | ------------------------------ | ----------- |
|  -2.1% |   -19 | 100.0% | 918 → 899 | `thread_native_entry(Thread*)` | `<unknown>` |

##### `thread_native_entry(Thread*)` (`<unknown>`)

| Change | Delta |      % |   Samples | Caller           | Location    |
| -----: | ----: | -----: | --------: | ---------------- | ----------- |
|  -2.1% |   -19 | 100.0% | 918 → 899 | `_pthread_start` | `<unknown>` |

##### `_pthread_start` (`<unknown>`)

| Change | Delta |      % |   Samples | Caller         | Location    |
| -----: | ----: | -----: | --------: | -------------- | ----------- |
|  -2.1% |   -19 | 100.0% | 919 → 900 | `thread_start` | `<unknown>` |

##### `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

| Change | Delta |      % |   Samples | Caller           | Location                                    |
| -----: | ----: | -----: | --------: | ---------------- | ------------------------------------------- |
|  -3.0% |   -13 | 100.0% | 439 → 426 | `main(String[])` | `org.jetbrains.kotlin.preloading.Preloader` |

##### `Compile::Optimize()` (`<unknown>`)

| Change | Delta |      % |   Samples | Caller                                                             | Location    |
| -----: | ----: | -----: | --------: | ------------------------------------------------------------------ | ----------- |
|  -6.2% |   -13 | 100.0% | 209 → 196 | `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` | `<unknown>` |

##### `WorkerThread::run()` (`<unknown>`)

| Change | Delta |      % | Samples | Caller               | Location    |
| -----: | ----: | -----: | ------: | -------------------- | ----------- |
| -18.3% |   -13 | 100.0% | 71 → 58 | `Thread::call_run()` | `<unknown>` |

##### `G1EvacuateRegionsBaseTask::work(unsigned int)` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                | Location    |
| -----: | ----: | -----: | ------: | --------------------- | ----------- |
| -38.7% |   -12 | 100.0% | 31 → 19 | `WorkerThread::run()` | `<unknown>` |

##### `G1ParScanThreadState::steal_and_trim_queue(GenericTaskQueueSet<OverflowTaskQueue<ScannerTask, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>*)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                     | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------ | ----------- |
| removed |   -12 | 100.0% → 0.0% |  12 → 0 | `G1ParEvacuateFollowersClosure::do_void()` | `<unknown>` |

##### `G1ParEvacuateFollowersClosure::do_void()` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                                                              | Location    |
| -----: | ----: | -----: | ------: | ----------------------------------------------------------------------------------- | ----------- |
| -80.0% |   -12 | 100.0% |  15 → 3 | `G1EvacuateRegionsTask::evacuate_live_objects(G1ParScanThreadState*, unsigned int)` | `<unknown>` |

##### `G1EvacuateRegionsTask::evacuate_live_objects(G1ParScanThreadState*, unsigned int)` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                          | Location    |
| -----: | ----: | -----: | ------: | ----------------------------------------------- | ----------- |
| -80.0% |   -12 | 100.0% |  15 → 3 | `G1EvacuateRegionsBaseTask::work(unsigned int)` | `<unknown>` |

##### `resumeTask(TowerResolveManager$SuspendedResolverTask)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager`)

| Change | Delta |      % | Samples | Caller       | Location                                                           |
| -----: | ----: | -----: | ------: | ------------ | ------------------------------------------------------------------ |
| -20.4% |   -11 | 100.0% | 54 → 43 | `runTasks()` | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager` |

##### `runTasks()` (`org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager`)

| Change | Delta |      % | Samples | Caller                                                                                                | Location                                                        |
| -----: | ----: | -----: | ------: | ----------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| -20.4% |   -11 | 100.0% | 54 → 43 | `runResolver(CallInfo, ResolutionContext, CandidateCollector, TowerResolveManager, CandidateFactory)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver` |

##### `runResolver(CallInfo, ResolutionContext, CandidateCollector, TowerResolveManager, CandidateFactory)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver`)

| Change | Delta |      % | Samples | Caller                                                                           | Location                                                        |
| -----: | ----: | -----: | ------: | -------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| -19.6% |   -11 | 100.0% | 56 → 45 | `runResolver(CallInfo, ResolutionContext, CandidateCollector, CandidateFactory)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver` |

##### `runResolver(CallInfo, ResolutionContext, CandidateCollector, CandidateFactory)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver`)

| Change | Delta |      % | Samples | Caller                                                                                                                  | Location                                                        |
| -----: | ----: | -----: | ------: | ----------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| -19.6% |   -11 | 100.0% | 56 → 45 | `runResolver$default(FirTowerResolver, CallInfo, ResolutionContext, CandidateCollector, CandidateFactory, int, Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver` |

##### `runResolver$default(FirTowerResolver, CallInfo, ResolutionContext, CandidateCollector, CandidateFactory, int, Object)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver`)

| Change | Delta |      % | Samples | Caller                                                                                                                                                                                                             | Location                                                 |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------- |
| -19.3% |   -11 | 100.0% | 57 → 46 | `collectCandidates(FirQualifiedAccessExpression, Name, CallKind, boolean, FirFunctionCallOrigin, List, ResolutionContext, CandidateCollector, FirElement, ResolutionMode, CollectionLiteralOuterCandidateContext)` | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver` |

##### `PhaseGVN::transform_no_reclaim(Node*)` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                                                                                                                                                                        | Location    |
| ------: | ----: | -----------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| removed |    -3 | 12.5% → 0.0% |   3 → 0 | `Parse::do_get_xxx(Node*, ciField*, bool)`                                                                                                                                    | `<unknown>` |
| removed |    -3 | 12.5% → 0.0% |   3 → 0 | `Parse::do_one_bytecode()`                                                                                                                                                    | `<unknown>` |
|  -66.7% |    -2 | 12.5% → 7.7% |   3 → 1 | `GraphKit::cast_not_null(Node*, bool)`                                                                                                                                        | `<unknown>` |
| removed |    -2 |  8.3% → 0.0% |   2 → 0 | `LoadNode::make(PhaseGVN&, Node*, Node*, Node*, TypePtr const*, Type const*, BasicType, MemNode::MemOrd, LoadNode::ControlDependency, bool, bool, bool, bool, unsigned char)` | `<unknown>` |
|     new |    +2 | 0.0% → 15.4% |   0 → 2 | `Parse::do_put_xxx(Node*, ciField*, bool)`                                                                                                                                    | `<unknown>` |

##### `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` (`<unknown>`)

| Change | Delta |      % |   Samples | Caller                                                   | Location    |
| -----: | ----: | -----: | --------: | -------------------------------------------------------- | ----------- |
|  -1.7% |   -10 | 100.0% | 578 → 568 | `CompileBroker::invoke_compiler_on_method(CompileTask*)` | `<unknown>` |

##### `IntervalWalker::walk_to(int)` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                             | Location    |
| -----: | ----: | ------------: | ------: | ---------------------------------- | ----------- |
| -30.3% |   -10 | 94.3% → 92.0% | 33 → 23 | `LinearScan::allocate_registers()` | `<unknown>` |

##### `Compilation::emit_lir()` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                               | Location    |
| -----: | ----: | -----: | ------: | ------------------------------------ | ----------- |
| -10.1% |   -10 | 100.0% | 99 → 89 | `Compilation::compile_java_method()` | `<unknown>` |

##### `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` (`<unknown>`)

| Change | Delta |      % |   Samples | Caller                                                                    | Location    |
| -----: | ----: | -----: | --------: | ------------------------------------------------------------------------- | ----------- |
|  -1.6% |    -9 | 100.0% | 577 → 568 | `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` | `<unknown>` |

##### `CompileBroker::invoke_compiler_on_method(CompileTask*)` (`<unknown>`)

| Change | Delta |      % |   Samples | Caller                                  | Location    |
| -----: | ----: | -----: | --------: | --------------------------------------- | ----------- |
|  -1.1% |    -9 | 100.0% | 822 → 813 | `CompileBroker::compiler_thread_loop()` | `<unknown>` |

##### `Compile::optimize_loops(PhaseIterGVN&, LoopOptsMode)` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                | Location    |
| -----: | ----: | -----: | ------: | --------------------- | ----------- |
| -15.3% |    -9 | 100.0% | 59 → 50 | `Compile::Optimize()` | `<unknown>` |

##### `LinearScanWalker::activate_current()` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                         | Location    |
| -----: | ----: | -----: | ------: | ------------------------------ | ----------- |
| -32.1% |    -9 | 100.0% | 28 → 19 | `IntervalWalker::walk_to(int)` | `<unknown>` |

##### `LinearScan::allocate_registers()` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                         | Location    |
| -----: | ----: | -----: | ------: | ------------------------------ | ----------- |
| -25.7% |    -9 | 100.0% | 35 → 26 | `LinearScan::do_linear_scan()` | `<unknown>` |

##### `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                 | Location    |
| -----: | ----: | -----: | ------: | -------------------------------------- | ----------- |
| -27.3% |    -9 | 100.0% | 33 → 24 | `PhaseIdealLoop::build_and_optimize()` | `<unknown>` |

##### `GraphBuilder::invoke(Bytecodes::Code)` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                           | Location    |
| -----: | ----: | -----: | ------: | ------------------------------------------------ | ----------- |
| -14.9% |    -7 | 100.0% | 47 → 40 | `GraphBuilder::iterate_bytecodes_for_block(int)` | `<unknown>` |

##### `LinearScan::do_linear_scan()` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                    | Location    |
| -----: | ----: | -----: | ------: | ------------------------- | ----------- |
|  -7.3% |    -6 | 100.0% | 82 → 76 | `Compilation::emit_lir()` | `<unknown>` |

##### `LIR_Assembler::record_non_safepoint_debug_info()` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                             | Location    |
| -----: | ----: | ------------: | ------: | -------------------------------------------------- | ----------- |
| -50.0% |    -5 | 76.9% → 71.4% |  10 → 5 | `LIR_Assembler::process_debug_info(LIR_Op*)`       | `<unknown>` |
| -33.3% |    -1 | 23.1% → 28.6% |   3 → 2 | `LIR_Assembler::add_call_info(int, CodeEmitInfo*)` | `<unknown>` |

##### `GraphBuilder::try_inline_full(ciMethod*, bool, bool, Bytecodes::Code, Instruction*)` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                                                           | Location    |
| -----: | ----: | -----: | ------: | -------------------------------------------------------------------------------- | ----------- |
| -14.6% |    -6 | 100.0% | 41 → 35 | `GraphBuilder::try_inline(ciMethod*, bool, bool, Bytecodes::Code, Instruction*)` | `<unknown>` |

##### `GraphBuilder::try_inline(ciMethod*, bool, bool, Bytecodes::Code, Instruction*)` (`<unknown>`)

|  Change | Delta |           % | Samples | Caller                                                    | Location    |
| ------: | ----: | ----------: | ------: | --------------------------------------------------------- | ----------- |
|  -14.6% |    -6 |      100.0% | 41 → 35 | `GraphBuilder::invoke(Bytecodes::Code)`                   | `<unknown>` |
| removed |    -1 | 2.4% → 0.0% |   1 → 0 | `GraphBuilder::iterate_bytecodes_for_block(int)`          | `<unknown>` |
|     new |    +1 | 0.0% → 2.9% |   0 → 1 | `GraphBuilder::try_method_handle_inline(ciMethod*, bool)` | `<unknown>` |

##### `PhaseIdealLoop::split_if_with_blocks(VectorSet&, Node_Stack&)` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                 | Location    |
| -----: | ----: | -----: | ------: | -------------------------------------- | ----------- |
| -26.1% |    -6 | 100.0% | 23 → 17 | `PhaseIdealLoop::build_and_optimize()` | `<unknown>` |

##### `G1ParScanThreadState::trim_queue_to_threshold(unsigned int)` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                                                                                                                                | Location    |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| removed |   -10 | 38.5% → 0.0% |  10 → 0 | `G1ParScanThreadState::steal_and_trim_queue(GenericTaskQueueSet<OverflowTaskQueue<ScannerTask, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>*)` | `<unknown>` |
| removed |    -1 |  3.8% → 0.0% |   1 → 0 | `void G1ParCopyClosure<(G1Barrier)0, false>::do_oop_work<oopDesc*>(oopDesc**)`                                                        | `<unknown>` |

##### `InstanceKlass::link_class_impl(JavaThread*)` (`<unknown>`)

|  Change | Delta |              % | Samples | Caller                                                                                            | Location    |
| ------: | ----: | -------------: | ------: | ------------------------------------------------------------------------------------------------- | ----------- |
|  -27.3% |    -9 | 97.1% → 100.0% | 33 → 24 | `InstanceKlass::initialize_impl(JavaThread*)`                                                     | `<unknown>` |
| removed |    -1 |    2.9% → 0.0% |   1 → 0 | `get_class_declared_methods_helper(JNIEnv_*, _jclass*, unsigned char, bool, Klass*, JavaThread*)` | `<unknown>` |

##### `InstanceKlass::initialize_impl(JavaThread*)` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                                      | Location    |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------- | ----------- |
| -40.0% |    -8 | 58.8% → 46.2% | 20 → 12 | `InterpreterRuntime::_new(JavaThread*, ConstantPool*, int)` | `<unknown>` |

##### `Parse::do_field_access(bool, bool)` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                  | Location    |
| -----: | ----: | -----: | ------: | ----------------------- | ----------- |
| -42.1% |    -8 | 100.0% | 19 → 11 | `Parse::do_one_block()` | `<unknown>` |

##### `InterpreterRuntime::_new(JavaThread*, ConstantPool*, int)` (`<unknown>`)

|  Change | Delta |           % | Samples | Caller                                                                                                                                                                                                                                      | Location                                                                              |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| removed |    -1 | 4.5% → 0.0% |   1 → 0 | `<init>(Class, String, Class)`                                                                                                                                                                                                              | `java.util.concurrent.atomic.AtomicIntegerFieldUpdater$AtomicIntegerFieldUpdaterImpl` |
| removed |    -1 | 4.5% → 0.0% |   1 → 0 | `buildFirFile(FlyweightCapableTreeStructure, KtSourceFile, KtSourceFileLinesMapping)`                                                                                                                                                       | `org.jetbrains.kotlin.fir.lightTree.LightTree2Fir`                                    |
| removed |    -1 | 4.5% → 0.0% |   1 → 0 | `<init>(NameResolver, TypeTable, VersionRequirementTable, FirModuleData, FqName, FqName, FirTypeDeserializer, AnnotationDeserializer, FirConstDeserializer, FirKDocDeserializer, DeserializedContainerSource, FirRegularClassSymbol, List)` | `org.jetbrains.kotlin.fir.deserialization.FirDeserializationContext`                  |
| removed |    -1 | 4.5% → 0.0% |   1 → 0 | `<init>()`                                                                                                                                                                                                                                  | `org.jetbrains.kotlin.lexer.KotlinLexer`                                              |
| removed |    -1 | 4.5% → 0.0% |   1 → 0 | `iterator()`                                                                                                                                                                                                                                | `kotlin.sequences.TakeWhileSequence`                                                  |

##### `G1ParScanThreadState::do_copy_to_survivor_space(G1HeapRegionAttr, oopDesc*, markWord)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                                                                                                | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
|  -40.0% |    -6 | 93.8% → 90.0% |  15 → 9 | `G1ParScanThreadState::trim_queue_to_threshold(unsigned int)`                                                                         | `<unknown>` |
| removed |    -1 |   6.3% → 0.0% |   1 → 0 | `G1ParScanThreadState::steal_and_trim_queue(GenericTaskQueueSet<OverflowTaskQueue<ScannerTask, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>*)` | `<unknown>` |
|     new |    +1 |  0.0% → 10.0% |   0 → 1 | `void G1ParCopyClosure<(G1Barrier)0, false>::do_oop_work<oopDesc*>(oopDesc**)`                                                        | `<unknown>` |

##### `SymbolTable::new_symbol(char const*, int)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                                                    | Location    |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------------- | ----------- |
|  -55.6% |    -5 | 90.0% → 80.0% |   9 → 4 | `SignatureStream::find_symbol()`                                                          | `<unknown>` |
| removed |    -1 |  10.0% → 0.0% |   1 → 0 | `ClassPathImageEntry::open_stream_for_loader(JavaThread*, char const*, ClassLoaderData*)` | `<unknown>` |
|     new |    +1 |  0.0% → 20.0% |   0 → 1 | `ciEnv::get_klass_by_name_impl(ciKlass*, constantPoolHandle const&, ciSymbol*, bool)`     | `<unknown>` |

##### `PredictedCallGenerator::generate(JVMState*)` (`<unknown>`)

|  Change | Delta |              % | Samples | Caller                                        | Location    |
| ------: | ----: | -------------: | ------: | --------------------------------------------- | ----------- |
|  -24.0% |    -6 |  55.6% → 47.5% | 25 → 19 | `PredictedCallGenerator::generate(JVMState*)` | `<unknown>` |
|   -9.1% |    -4 | 97.8% → 100.0% | 44 → 40 | `Parse::do_call()`                            | `<unknown>` |
| removed |    -1 |    2.2% → 0.0% |   1 → 0 | `CallGenerator::do_late_inline_helper()`      | `<unknown>` |

##### `ClassVerifier::verify_method(methodHandle const&, JavaThread*)` (`<unknown>`)

|  Change | Delta |              % | Samples | Caller                                                | Location    |
| ------: | ----: | -------------: | ------: | ----------------------------------------------------- | ----------- |
|  -19.0% |    -4 | 95.5% → 100.0% | 21 → 17 | `ClassVerifier::verify_class(JavaThread*)`            | `<unknown>` |
| removed |    -1 |    4.5% → 0.0% |   1 → 0 | `Verifier::verify(InstanceKlass*, bool, JavaThread*)` | `<unknown>` |

##### `Verifier::verify(InstanceKlass*, bool, JavaThread*)` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                        | Location    |
| -----: | ----: | -----: | ------: | --------------------------------------------- | ----------- |
| -21.7% |    -5 | 100.0% | 23 → 18 | `InstanceKlass::link_class_impl(JavaThread*)` | `<unknown>` |

##### `Dict::Insert(void*, void*, bool)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                       | Location    |
| ------: | ----: | ------------: | ------: | -------------------------------------------- | ----------- |
|  -26.7% |    -4 | 88.2% → 91.7% | 15 → 11 | `Type::hashcons()`                           | `<unknown>` |
| removed |    -1 |   5.9% → 0.0% |   1 → 0 | `PhaseOutput::BuildOopMaps()`                | `<unknown>` |
| removed |    -1 |   5.9% → 0.0% |   1 → 0 | `TypeInstPtr::cast_to_exactness(bool) const` | `<unknown>` |
|     new |    +1 |   0.0% → 8.3% |   0 → 1 | `TypeFunc::make(ciMethod*)`                  | `<unknown>` |

##### `resolveCallAndSelectCandidate(FirFunctionCall, ResolutionMode, CollectionLiteralOuterCandidateContext)` (`org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`)

| Change | Delta |      % | Samples | Caller                                                                                                                                         | Location                                                 |
| -----: | ----: | -----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| -23.4% |   -11 | 100.0% | 47 → 36 | `resolveCallAndSelectCandidate$default(FirCallResolver, FirFunctionCall, ResolutionMode, CollectionLiteralOuterCandidateContext, int, Object)` | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver` |

##### `resolveCallAndSelectCandidate$default(FirCallResolver, FirFunctionCall, ResolutionMode, CollectionLiteralOuterCandidateContext, int, Object)` (`org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`)

| Change | Delta |      % | Samples | Caller                                                                                                                                             | Location                                                                                      |
| -----: | ----: | -----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| -23.4% |   -11 | 100.0% | 47 → 36 | `transformFunctionCallInternal$org_jetbrains_kotlin_resolve(FirFunctionCall, ResolutionMode, FirExpressionsResolveTransformer$CallResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer` |

##### `exec(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

| Change | Delta |      % |   Samples | Caller                                                   | Location                                      |
| -----: | ----: | -----: | --------: | -------------------------------------------------------- | --------------------------------------------- |
|  -2.8% |   -10 | 100.0% | 352 → 342 | `exec(PrintStream, Services, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `collectCandidates(FirQualifiedAccessExpression, Name, CallKind, boolean, FirFunctionCallOrigin, List, ResolutionContext, CandidateCollector, FirElement, ResolutionMode, CollectionLiteralOuterCandidateContext)` (`org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`)

| Change | Delta |      % | Samples | Caller                                                                                                                                                                                                                                                   | Location                                                 |
| -----: | ----: | -----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| -17.5% |   -10 | 100.0% | 57 → 47 | `collectCandidates$default(FirCallResolver, FirQualifiedAccessExpression, Name, CallKind, boolean, FirFunctionCallOrigin, List, ResolutionContext, CandidateCollector, FirElement, ResolutionMode, CollectionLiteralOuterCandidateContext, int, Object)` | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver` |

##### `collectCandidates$default(FirCallResolver, FirQualifiedAccessExpression, Name, CallKind, boolean, FirFunctionCallOrigin, List, ResolutionContext, CandidateCollector, FirElement, ResolutionMode, CollectionLiteralOuterCandidateContext, int, Object)` (`org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`)

| Change | Delta |             % | Samples | Caller                                                                                                   | Location                                                 |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| -21.7% |   -10 | 80.7% → 76.6% | 46 → 36 | `resolveCallAndSelectCandidate(FirFunctionCall, ResolutionMode, CollectionLiteralOuterCandidateContext)` | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver` |

##### `processLevel(TowerLevel, CallInfo, TowerGroup, ExplicitReceiverKind, Continuation)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask`)

| Change | Delta |      % | Samples | Caller                                                                                                               | Location                                                               |
| -----: | ----: | -----: | ------: | -------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| -20.0% |   -10 | 100.0% | 50 → 40 | `access$processLevel(FirBaseTowerResolveTask, TowerLevel, CallInfo, TowerGroup, ExplicitReceiverKind, Continuation)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask` |

##### `access$processLevel(FirBaseTowerResolveTask, TowerLevel, CallInfo, TowerGroup, ExplicitReceiverKind, Continuation)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask`)

|  Change | Delta |             % | Samples | Caller                                                                                                                                 | Location                                                                              |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
|  -18.9% |    -7 | 74.0% → 75.0% | 37 → 30 | `invokeSuspend(Object)`                                                                                                                | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask$processLevel$6` |
|  -60.0% |    -3 |  10.0% → 5.0% |   5 → 2 | `processLevelForRegularInvoke(TowerLevel, CallInfo, TowerGroup, ExplicitReceiverKind, Continuation)`                                   | `org.jetbrains.kotlin.fir.resolve.calls.tower.InvokeFunctionResolveTask`              |
|  -50.0% |    -1 |   4.0% → 2.5% |   2 → 1 | `runResolverForNoReceiver(CallInfo, boolean, Continuation)`                                                                            | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolveTask`                    |
|  -20.0% |    -1 |         10.0% |   5 → 4 | `processCandidatesWithGivenImplicitReceiverAsValue(ImplicitReceiverValue, CallInfo, TowerGroup, Set, Set, Set, boolean, Continuation)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolveTask`                    |
| +100.0% |    +1 |   2.0% → 5.0% |   1 → 2 | `processQualifierScopes(CallInfo, QualifierReceiver, Continuation)`                                                                    | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolveTask`                    |

##### `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

| Change | Delta |      % |   Samples | Caller                                                                                                                                        | Location                                                |
| -----: | ----: | -----: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
|  -2.6% |    -9 | 100.0% | 342 → 333 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

| Change | Delta |      % |   Samples | Caller                                                         | Location                                                |
| -----: | ----: | -----: | --------: | -------------------------------------------------------------- | ------------------------------------------------------- |
|  -2.6% |    -9 | 100.0% | 342 → 333 | `execute(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `execute(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

| Change | Delta |      % |   Samples | Caller                                                                | Location                                     |
| -----: | ----: | -----: | --------: | --------------------------------------------------------------------- | -------------------------------------------- |
|  -2.6% |    -9 | 100.0% | 342 → 333 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

| Change | Delta |      % |   Samples | Caller                                                                 | Location                                     |
| -----: | ----: | -----: | --------: | ---------------------------------------------------------------------- | -------------------------------------------- |
|  -2.6% |    -9 | 100.0% | 343 → 334 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

| Change | Delta |      % |   Samples | Caller                                                          | Location                                      |
| -----: | ----: | -----: | --------: | --------------------------------------------------------------- | --------------------------------------------- |
|  -2.6% |    -9 | 100.0% | 343 → 334 | `execImpl(MessageCollector, Services, CommonCompilerArguments)` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

| Change | Delta |      % |   Samples | Caller                                                      | Location                                      |
| -----: | ----: | -----: | --------: | ----------------------------------------------------------- | --------------------------------------------- |
|  -2.6% |    -9 | 100.0% | 343 → 334 | `exec(MessageCollector, Services, CommonCompilerArguments)` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `resumeWith(Object)` (`kotlin.coroutines.jvm.internal.BaseContinuationImpl`)

| Change | Delta |             % | Samples | Caller                                                             | Location                                                              |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------ | --------------------------------------------------------------------- |
| -20.4% |   -11 | 94.7% → 91.5% | 54 → 43 | `resumeTask(TowerResolveManager$SuspendedResolverTask)`            | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager`    |
| +15.0% |    +3 | 35.1% → 48.9% | 20 → 23 | `processCandidate(Candidate, ResolutionContext, boolean, boolean)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner` |
|    new |    +1 |   0.0% → 2.1% |   0 → 1 | `resumeCancellableWith(Continuation, Object, Function1)`           | `kotlinx.coroutines.internal.DispatchedContinuationKt`                |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001008000`)

| Change | Delta |      % |   Samples | Caller                           | Location                                            |
| -----: | ----: | -----: | --------: | -------------------------------- | --------------------------------------------------- |
|  -2.5% |    -9 | 100.0% | 360 → 351 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001009400` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001009400`)

| Change | Delta |      % |   Samples | Caller                                           | Location                           |
| -----: | ----: | -----: | --------: | ------------------------------------------------ | ---------------------------------- |
|  -2.5% |    -9 | 100.0% | 360 → 351 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

| Change | Delta |      % |   Samples | Caller                         | Location                                          |
| -----: | ----: | -----: | --------: | ------------------------------ | ------------------------------------------------- |
|  -2.5% |    -9 | 100.0% | 360 → 351 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change | Delta |      % |   Samples | Caller                     | Location                                          |
| -----: | ----: | -----: | --------: | -------------------------- | ------------------------------------------------- |
|  -2.5% |    -9 | 100.0% | 360 → 351 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change | Delta |      % |   Samples | Caller                     | Location                   |
| -----: | ----: | -----: | --------: | -------------------------- | -------------------------- |
|  -2.5% |    -9 | 100.0% | 360 → 351 | `invoke(Object, Object[])` | `java.lang.reflect.Method` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

|  Change | Delta |           % |   Samples | Caller          | Location                                    |
| ------: | ----: | ----------: | --------: | --------------- | ------------------------------------------- |
|   -2.5% |    -9 |      100.0% | 360 → 351 | `run(String[])` | `org.jetbrains.kotlin.preloading.Preloader` |
| removed |    -1 | 0.3% → 0.0% |     1 → 0 | `rtVersion()`   | `com.intellij.util.lang.JavaVersion`        |

##### `allocateInstance(Object)` (`java.lang.invoke.DirectMethodHandle`)

|  Change | Delta |            % | Samples | Caller                                     | Location                                     |
| ------: | ----: | -----------: | ------: | ------------------------------------------ | -------------------------------------------- |
| removed |    -3 | 50.0% → 0.0% |   3 → 0 | `newInvokeSpecial(Object, Object)`         | `java.lang.invoke.DirectMethodHandle$Holder` |
| removed |    -3 | 50.0% → 0.0% |   3 → 0 | `newInvokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`)

|  Change | Delta |              % | Samples | Caller                   | Location                       |
| ------: | ----: | -------------: | ------: | ------------------------ | ------------------------------ |
|   -5.9% |    -4 | 97.1% → 100.0% | 68 → 64 | `read(byte[], int, int)` | `java.util.zip.ZipInputStream` |
| removed |    -2 |    2.9% → 0.0% |   2 → 0 | `getBytes()`             | `jdk.internal.loader.Resource` |

##### `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`)

| Change | Delta |      % | Samples | Caller                      | Location                 |
| -----: | ----: | -----: | ------: | --------------------------- | ------------------------ |
|  -7.4% |    -5 | 100.0% | 68 → 63 | `inflate(byte[], int, int)` | `java.util.zip.Inflater` |

##### `inflate(byte[], int, int)` (`java.util.zip.Inflater`)

| Change | Delta |              % | Samples | Caller                   | Location                            |
| -----: | ----: | -------------: | ------: | ------------------------ | ----------------------------------- |
|  -8.7% |    -6 | 100.0% → 98.4% | 69 → 63 | `read(byte[], int, int)` | `java.util.zip.InflaterInputStream` |
|    new |    +1 |    0.0% → 1.6% |   0 → 1 | `inflate(byte[])`        | `java.util.zip.Inflater`            |

##### `allocateInstance(Class)` (`jdk.internal.misc.Unsafe`)

|  Change | Delta |             % | Samples | Caller                     | Location                              |
| ------: | ----: | ------------: | ------: | -------------------------- | ------------------------------------- |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | `allocateInstance(Object)` | `java.lang.invoke.DirectMethodHandle` |

##### `newInvokeSpecial(Object, Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|  Change | Delta |             % | Samples | Caller                                       | Location                           |
| ------: | ----: | ------------: | ------: | -------------------------------------------- | ---------------------------------- |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | `linkToTargetMethod(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `linkToTargetMethod(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|  Change | Delta |            % | Samples | Caller                                                                                                                       | Location                                                               |
| ------: | ----: | -----------: | ------: | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `processFunctionsByName(Name, Function1)`                                                                                    | `org.jetbrains.kotlin.fir.scopes.impl.FirClassSubstitutionScope`       |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `unfoldStringConcatenation(IrStringConcatenation, IrInterpreterEnvironment)`                                                 | `org.jetbrains.kotlin.ir.interpreter.InstructionsUnfolderKt`           |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `runCompletionForCall(Candidate, ConstraintSystemCompletionMode, FirExpression, ConeKotlinType, PostponedArgumentsAnalyzer)` | `org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter`          |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `getOrderedAllTypeVariables$collectAllTypeVariables(ConeResolutionAtom, LinkedHashSet, ConstraintSystemCompletionContext)`   | `org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter` |

##### `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` (`java.lang.ClassLoader`)

| Change | Delta |      % | Samples | Caller                                                    | Location                |
| -----: | ----: | -----: | ------: | --------------------------------------------------------- | ----------------------- |
|  -4.8% |    -3 | 100.0% | 62 → 59 | `defineClass(String, byte[], int, int, ProtectionDomain)` | `java.lang.ClassLoader` |

##### `defineClass(String, byte[], int, int)` (`java.lang.ClassLoader`)

| Change | Delta |      % | Samples | Caller              | Location                                                 |
| -----: | ----: | -----: | ------: | ------------------- | -------------------------------------------------------- |
|  -4.7% |    -3 | 100.0% | 64 → 61 | `findClass(String)` | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |

##### `newInvokeSpecial(Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

| Change | Delta |      % | Samples | Caller                               | Location                           |
| -----: | ----: | -----: | ------: | ------------------------------------ | ---------------------------------- |
| -75.0% |    -3 | 100.0% |   4 → 1 | `linkToTargetMethod(Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `linkToTargetMethod(Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|  Change | Delta |             % | Samples | Caller                                   | Location                                                                        |
| ------: | ----: | ------------: | ------: | ---------------------------------------- | ------------------------------------------------------------------------------- |
| removed |    -1 |  25.0% → 0.0% |   1 → 0 | `getReferenceApproximateToSuperType()`   | `org.jetbrains.kotlin.types.AbstractTypeApproximator`                           |
| removed |    -1 |  25.0% → 0.0% |   1 → 0 | `createLazyAnnotations()`                | `org.jetbrains.kotlin.fir.lazy.AbstractFir2IrLazyDeclaration`                   |
| removed |    -1 |  25.0% → 0.0% |   1 → 0 | `convertUnaryExpression(LighterASTNode)` | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirExpressionBuilder` |
| removed |    -1 |  25.0% → 0.0% |   1 → 0 | `generateSequence(Object, Function1)`    | `kotlin.sequences.SequencesKt__SequencesKt`                                     |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `<init>(Name, FirTowerDataContext)`      | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerDataElementsForName`         |

##### `newInstanceWithCaller(Object[], boolean, Class)` (`java.lang.reflect.Constructor`)

|  Change | Delta |             % | Samples | Caller                  | Location                        |
| ------: | ----: | ------------: | ------: | ----------------------- | ------------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `newInstance(Object[])` | `java.lang.reflect.Constructor` |

##### `newInstance(Object[])` (`java.lang.reflect.Constructor`)

|  Change | Delta |            % | Samples | Caller                                                               | Location                               |
| ------: | ----: | -----------: | ------: | -------------------------------------------------------------------- | -------------------------------------- |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `newMappedByteBufferR(int, long, FileDescriptor, Runnable, boolean)` | `sun.nio.ch.Util`                      |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `newInstance()`                                                      | `java.util.ServiceLoader$ProviderImpl` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `newProxyInstance(Class, Constructor, InvocationHandler)`            | `java.lang.reflect.Proxy`              |

##### `I2C/C2I adapters(0xbb)` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                                                                                                                                                                                                                                                                                                                                      | Location                                                          |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| removed |    -1 | 14.3% → 0.0% |   1 → 0 | `visitRichFunctionReference(IrRichFunctionReference)`                                                                                                                                                                                                                                                                                       | `org.jetbrains.kotlin.ir.visitors.IrVisitorVoid`                  |
| removed |    -1 | 14.3% → 0.0% |   1 → 0 | `<init>(KtSourceElement, FirResolvePhase, FirModuleData, FirDeclarationOrigin, FirDeclarationAttributes, FirDeclarationStatus, boolean, FirTypeRef, FirReceiverParameter, DeprecationsProvider, DeserializedContainerSource, ConeSimpleKotlinType, List, List, FirBlock, FirContractDescription, Name, FirNamedFunctionSymbol, List, List)` | `org.jetbrains.kotlin.fir.declarations.impl.FirNamedFunctionImpl` |
| removed |    -1 | 14.3% → 0.0% |   1 → 0 | `visitClass(IrClass, Void)`                                                                                                                                                                                                                                                                                                                 | `org.jetbrains.kotlin.ir.visitors.IrVisitorVoid`                  |
| removed |    -1 | 14.3% → 0.0% |   1 → 0 | `addValueParametersTo(List, FirBasedSymbol, FirRegularClassBuilder, MessageLite, AnnotationDeserializer$CallableKind, ProtoBuf$Class, FirValueParameterKind, boolean, List)`                                                                                                                                                                | `org.jetbrains.kotlin.fir.deserialization.FirMemberDeserializer`  |
| removed |    -1 | 14.3% → 0.0% |   1 → 0 | `resolveVariableAccessAndSelectCandidateImpl(FirQualifiedAccessExpression, boolean, ResolutionMode, boolean, FirElement, Function1)`                                                                                                                                                                                                        | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`          |

##### `vtable stub` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                      | Location                                                  |
| ------: | ----: | -----------: | ------: | --------------------------- | --------------------------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `hash(Object)`              | `kotlin.collections.builders.MapBuilder`                  |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `getDispatchReceiverType()` | `org.jetbrains.kotlin.fir.symbols.impl.FirCallableSymbol` |

##### `I2C/C2I adapters` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                                                                                                             | Location                                                                     |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------- |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `exitVariableInitialization(MutableFlow, FirExpression, FirProperty, FirExpression, boolean)`                      | `org.jetbrains.kotlin.fir.resolve.dfa.FirDataFlowAnalyzer`                   |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `isVisible(FirVisibilityChecker, FirMemberDeclaration, CallInfo, FirExpression, boolean)`                          | `org.jetbrains.kotlin.fir.resolve.calls.VisibilityUtilsKt`                   |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `visitTypeOperator(IrTypeOperatorCall)`                                                                            | `org.jetbrains.kotlin.backend.jvm.lower.TypeOperatorLowering`                |
|     new |    +1 | 0.0% → 50.0% |   0 → 1 | `setContainingClassForStaticMemberAttr(FirCallableDeclaration, ConeClassLikeLookupTag)`                            | `org.jetbrains.kotlin.fir.ClassMembersKt`                                    |
|     new |    +1 | 0.0% → 50.0% |   0 → 1 | `addInitialEqualityConstraint(ConstraintInjector$Context, KotlinTypeMarker, KotlinTypeMarker, ConstraintPosition)` | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector` |

##### `I2C/C2I adapters(0xbbb)` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                                                                                                           | Location                                                                                      |
| ------: | ----: | -----------: | ------: | ---------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `isLocal()`                                                                                                      | `org.jetbrains.kotlin.fir.declarations.builder.FirNamedFunctionBuilder`                       |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `isProperType$lambda$0$0(AbstractVariableReadinessCalculator, VariableFixationFinder$Context, KotlinTypeMarker)` | `org.jetbrains.kotlin.resolve.calls.inference.components.AbstractVariableReadinessCalculator` |

##### `I2C/C2I adapters(0x)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                  | Location          |
| ------: | ----: | ------------: | ------: | --------------------------------------- | ----------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `forName(String, boolean, ClassLoader)` | `java.lang.Class` |

#### Callees

Callees with the largest change in contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `ClassFileParser::parse_constant_pool_entries(ClassFileStream const*, ConstantPool*, int, JavaThread*)` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                                      | Location    |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------- | ----------- |
|  +38.9% |    +7 | 62.1% → 62.5% | 18 → 25 | `SymbolTable::lookup_only(char const*, int, unsigned int&)` | `<unknown>` |
| +150.0% |    +3 |  6.9% → 12.5% |   2 → 5 | `SymbolTable::do_lookup(char const*, int, unsigned long)`   | `<unknown>` |
|  +50.0% |    +2 | 13.8% → 15.0% |   4 → 6 | `UTF8::is_legal_utf8(unsigned char const*, int, bool)`      | `<unknown>` |
| removed |    -1 |   3.4% → 0.0% |   1 → 0 | `_platform_memcmp`                                          | `<unknown>` |

##### `completeCall(FirExpression, ResolutionMode, boolean)` (`org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter`)

|  Change | Delta |             % | Samples | Callee                                                                                                                                  | Location                                                      |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
|  +24.0% |    +6 | 86.2% → 77.5% | 25 → 31 | `runCompletionForCall(Candidate, ConstraintSystemCompletionMode, FirExpression, ConeKotlinType, PostponedArgumentsAnalyzer)`            | `org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter` |
|  +50.0% |    +1 |   6.9% → 7.5% |   2 → 3 | `addConstraintFromExpectedType(Candidate, ConeKotlinType, ResolutionMode)`                                                              | `org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter` |
|  +25.0% |    +1 | 13.8% → 12.5% |   4 → 5 | `transformSingle(FirElement, FirTransformer, Object)`                                                                                   | `org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`      |
| removed |    -1 |   3.4% → 0.0% |   1 → 0 | `initialTypeOfCandidate(ConeKotlinType, Candidate)`                                                                                     | `org.jetbrains.kotlin.fir.resolve.ResolveUtilsKt`             |
|     new |    +1 |   0.0% → 2.5% |   0 → 1 | `createCompletionResultsWriter$default(FirCallCompleter, ConeSubstitutor, FirCallCompletionResultsWriterTransformer$Mode, int, Object)` | `org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter` |

##### `ClassFileParser::ClassFileParser(ClassFileStream*, Symbol*, ClassLoaderData*, ClassLoadInfo const*, ClassFileParser::Publicity, JavaThread*)` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                                                                            | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------- | ----------- |
|  +15.2% |    +7 | 95.8% → 91.4% | 46 → 53 | `ClassFileParser::parse_stream(ClassFileStream const*, JavaThread*)`                              | `<unknown>` |
| +150.0% |    +3 |   4.2% → 8.6% |   2 → 5 | `ClassFileParser::post_process_parsed_stream(ClassFileStream const*, ConstantPool*, JavaThread*)` | `<unknown>` |

##### `accept(FirVisitor, Object)` (`org.jetbrains.kotlin.fir.expressions.FirFunctionCall`)

|  Change | Delta |             % | Samples | Callee                                       | Location                                                                                      |
| ------: | ----: | ------------: | ------: | -------------------------------------------- | --------------------------------------------------------------------------------------------- |
|  +55.6% |    +5 | 69.2% → 60.9% |  9 → 14 | `visitFunctionCall(FirFunctionCall, Object)` | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor`             |
| +100.0% |    +4 | 30.8% → 34.8% |   4 → 8 | `visitFunctionCall(FirFunctionCall, Object)` | `org.jetbrains.kotlin.fir.analysis.checkers.expression.ExpressionCheckersDiagnosticComponent` |
|  +75.0% |    +3 | 30.8% → 30.4% |   4 → 7 | `visitFunctionCall(FirFunctionCall, Object)` | `org.jetbrains.kotlin.fir.backend.Fir2IrVisitor`                                              |
|     new |    +2 |   0.0% → 8.7% |   0 → 2 | `visitFunctionCall(FirFunctionCall, Object)` | `org.jetbrains.kotlin.fir.visitors.FirVisitor`                                                |

##### `ClassFileParser::parse_constant_pool(ClassFileStream const*, ConstantPool*, int, JavaThread*)` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                                                                                  | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------- | ----------- |
|  +37.9% |   +11 | 85.3% → 93.0% | 29 → 40 | `ClassFileParser::parse_constant_pool_entries(ClassFileStream const*, ConstantPool*, int, JavaThread*)` | `<unknown>` |
| removed |    -1 |   2.9% → 0.0% |   1 → 0 | `ClassFileParser::verify_legal_field_signature(Symbol const*, Symbol const*, JavaThread*) const`        | `<unknown>` |
| removed |    -1 |   2.9% → 0.0% |   1 → 0 | `ConstantPool::allocate_resolved_klasses(ClassLoaderData*, int, JavaThread*)`                           | `<unknown>` |
| removed |    -1 |   2.9% → 0.0% |   1 → 0 | `ClassFileParser::skip_over_field_signature(char const*, bool, unsigned int, JavaThread*) const`        | `<unknown>` |

##### `SymbolTable::do_lookup(char const*, int, unsigned long)` (`<unknown>`)

|  Change | Delta |           % | Samples | Callee        | Location    |
| ------: | ----: | ----------: | ------: | ------------- | ----------- |
| removed |    -1 | 5.6% → 0.0% |   1 → 0 | `stub:memcmp` | `<unknown>` |

##### `PhaseCFG::global_code_motion()` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                                                     | Location    |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------------------- | ----------- |
| +200.0% |    +6 | 12.0% → 26.5% |   3 → 9 | `PhaseCFG::partial_latency_of_defs(Node*)`                                 | `<unknown>` |
|     new |    +4 |  0.0% → 11.8% |   0 → 4 | `Node_Backward_Iterator::next()`                                           | `<unknown>` |
| removed |    -3 |  12.0% → 0.0% |   3 → 0 | `PhaseCFG::schedule_pinned_nodes(VectorSet&)`                              | `<unknown>` |
|  +37.5% |    +3 | 32.0% → 32.4% |  8 → 11 | `PhaseCFG::schedule_late(VectorSet&, Node_Stack&)`                         | `<unknown>` |
|  -60.0% |    -3 |  20.0% → 5.9% |   5 → 2 | `PhaseCFG::schedule_local(Block*, GrowableArray<int>&, VectorSet&, long*)` | `<unknown>` |

##### `PhaseCFG::do_global_code_motion()` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                     | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------ | ----------- |
|  +36.0% |    +9 | 89.3% → 91.9% | 25 → 34 | `PhaseCFG::global_code_motion()`           | `<unknown>` |
|     new |    +2 |   0.0% → 5.4% |   0 → 2 | `PhaseCFG::build_dominator_tree()`         | `<unknown>` |
| removed |    -1 |   3.6% → 0.0% |   1 → 0 | `PhaseCFG::partial_latency_of_defs(Node*)` | `<unknown>` |
|  -50.0% |    -1 |   7.1% → 2.7% |   2 → 1 | `PhaseCFG::estimate_block_frequency()`     | `<unknown>` |

##### `PhaseCCP::push_child_nodes_to_worklist(Unique_Node_List&, Node*) const` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                                                      | Location    |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------------- | ----------- |
| +900.0% |    +9 | 12.5% → 58.8% |  1 → 10 | `PhaseCCP::push_more_uses(Unique_Node_List&, Node*, Node const*) const`     | `<unknown>` |
|  -50.0% |    -1 |  25.0% → 5.9% |   2 → 1 | `PhaseCCP::push_cast_ii(Unique_Node_List&, Node const*, Node const*) const` | `<unknown>` |
|     new |    +1 |   0.0% → 5.9% |   0 → 1 | `PhaseCCP::push_and(Unique_Node_List&, Node const*, Node const*) const`     | `<unknown>` |
|     new |    +1 |   0.0% → 5.9% |   0 → 1 | `CallNode::bottom_type() const`                                             | `<unknown>` |

##### `PhaseCCP::push_more_uses(Unique_Node_List&, Node*, Node const*) const` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                                                      | Location    |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------------- | ----------- |
|     new |    +3 |  0.0% → 30.0% |   0 → 3 | `PhaseCCP::push_loadp(Unique_Node_List&, Node const*) const`                | `<unknown>` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseCCP::push_cast_ii(Unique_Node_List&, Node const*, Node const*) const` | `<unknown>` |
|     new |    +1 |  0.0% → 10.0% |   0 → 1 | `TypeNode::bottom_type() const`                                             | `<unknown>` |
|     new |    +1 |  0.0% → 10.0% |   0 → 1 | `PhaseCCP::push_catch(Unique_Node_List&, Node const*)`                      | `<unknown>` |
|     new |    +1 |  0.0% → 10.0% |   0 → 1 | `PhaseCCP::push_and(Unique_Node_List&, Node const*, Node const*) const`     | `<unknown>` |

##### `KlassFactory::create_from_stream(ClassFileStream*, Symbol*, ClassLoaderData*, ClassLoadInfo const&, JavaThread*)` (`<unknown>`)

| Change | Delta |             % | Samples | Callee                                                                                                                                         | Location    |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| +20.8% |   +10 | 88.9% → 93.5% | 48 → 58 | `ClassFileParser::ClassFileParser(ClassFileStream*, Symbol*, ClassLoaderData*, ClassLoadInfo const*, ClassFileParser::Publicity, JavaThread*)` | `<unknown>` |
| -33.3% |    -2 |  11.1% → 6.5% |   6 → 4 | `ClassFileParser::create_instance_klass(bool, ClassInstanceInfo const&, JavaThread*)`                                                          | `<unknown>` |

##### `PhaseMacroExpand::expand_macro_nodes()` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                                          | Location    |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------- | ----------- |
| +160.0% |    +8 | 62.5% → 81.3% |  5 → 13 | `PhaseIterGVN::optimize()`                                      | `<unknown>` |
|     new |    +2 |  0.0% → 12.5% |   0 → 2 | `PhaseMacroExpand::expand_arraycopy_node(ArrayCopyNode*)`       | `<unknown>` |
| removed |    -1 |  12.5% → 0.0% |   1 → 0 | `PhaseIterGVN::subsume_node(Node*, Node*)`                      | `<unknown>` |
| removed |    -1 |  12.5% → 0.0% |   1 → 0 | `PhaseMacroExpand::expand_subtypecheck_node(SubTypeCheckNode*)` | `<unknown>` |

##### `PhaseCCP::analyze()` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                                                             | Location    |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------- | ----------- |
| +142.9% |   +10 | 58.3% → 85.0% |  7 → 17 | `PhaseCCP::push_child_nodes_to_worklist(Unique_Node_List&, Node*) const`           | `<unknown>` |
| removed |    -1 |   8.3% → 0.0% |   1 → 0 | `LoadBNode::Value(PhaseGVN*) const`                                                | `<unknown>` |
| removed |    -1 |   8.3% → 0.0% |   1 → 0 | `LShiftLNode::Value(PhaseGVN*) const`                                              | `<unknown>` |
| removed |    -1 |   8.3% → 0.0% |   1 → 0 | `PhaseCCP::saturate_and_maybe_push_to_igvn_worklist(TypeNode const*, Type const*)` | `<unknown>` |
|     new |    +1 |   0.0% → 5.0% |   0 → 1 | `SubNode::Value(PhaseGVN*) const`                                                  | `<unknown>` |

##### `acceptChildren(FirVisitor, Object)` (`org.jetbrains.kotlin.fir.expressions.impl.FirResolvedArgumentList`)

|  Change | Delta |              % | Samples | Callee                       | Location                                                              |
| ------: | ----: | -------------: | ------: | ---------------------------- | --------------------------------------------------------------------- |
|     new |    +3 |   0.0% → 23.1% |   0 → 3 | `accept(FirVisitor, Object)` | `org.jetbrains.kotlin.fir.expressions.FirFunctionCall`                |
| +100.0% |    +2 |  40.0% → 30.8% |   2 → 4 | `accept(FirVisitor, Object)` | `org.jetbrains.kotlin.fir.expressions.FirPropertyAccessExpression`    |
|  +40.0% |    +2 | 100.0% → 53.8% |   5 → 7 | `accept(FirVisitor, Object)` | `org.jetbrains.kotlin.fir.expressions.FirAnonymousFunctionExpression` |
|     new |    +1 |    0.0% → 7.7% |   0 → 1 | `accept(FirVisitor, Object)` | `org.jetbrains.kotlin.fir.expressions.FirImplicitInvokeCall`          |
|     new |    +1 |    0.0% → 7.7% |   0 → 1 | `accept(FirVisitor, Object)` | `org.jetbrains.kotlin.fir.expressions.FirCallableReferenceAccess`     |

##### `visitArgumentList(FirArgumentList, Object)` (`org.jetbrains.kotlin.fir.visitors.FirVisitor`)

|  Change | Delta |              % | Samples | Callee                             | Location                                                                                                                |
| ------: | ----: | -------------: | ------: | ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| +120.0% |    +6 | 100.0% → 84.6% |  5 → 11 | `visitElement(FirElement, Object)` | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor`                                       |
|     new |    +2 |   0.0% → 15.4% |   0 → 2 | `visitElement(FirElement, Object)` | `org.jetbrains.kotlin.fir.analysis.collectors.components.ControlFlowAnalysisDiagnosticComponent$LocalPropertyCollector` |

##### `accept(FirVisitor, Object)` (`org.jetbrains.kotlin.fir.expressions.FirArgumentList`)

|  Change | Delta |      % | Samples | Callee                                       | Location                                       |
| ------: | ----: | -----: | ------: | -------------------------------------------- | ---------------------------------------------- |
| +160.0% |    +8 | 100.0% |  5 → 13 | `visitArgumentList(FirArgumentList, Object)` | `org.jetbrains.kotlin.fir.visitors.FirVisitor` |

##### `completeIsSubTypeOf(TypeCheckerState, TypeSystemContext, KotlinTypeMarker, KotlinTypeMarker, boolean)` (`org.jetbrains.kotlin.types.AbstractTypeChecker`)

|  Change | Delta |             % | Samples | Callee                                                                                                      | Location                                                                                      |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| +125.0% |    +5 | 66.7% → 64.3% |   4 → 9 | `isSubtypeOfForSingleClassifierType(TypeCheckerState, TypeSystemContext, RigidTypeMarker, RigidTypeMarker)` | `org.jetbrains.kotlin.types.AbstractTypeChecker`                                              |
|     new |    +3 |  0.0% → 21.4% |   0 → 3 | `checkSubtypeForSpecialCases(TypeCheckerState, TypeSystemContext, RigidTypeMarker, RigidTypeMarker)`        | `org.jetbrains.kotlin.types.AbstractTypeChecker`                                              |
| +100.0% |    +1 | 16.7% → 14.3% |   1 → 2 | `addSubtypeConstraint(KotlinTypeMarker, KotlinTypeMarker, boolean)`                                         | `org.jetbrains.kotlin.resolve.calls.inference.components.TypeCheckerStateForConstraintSystem` |
| +100.0% |    +1 | 16.7% → 14.3% |   1 → 2 | `prepareType(KotlinTypeMarker)`                                                                             | `org.jetbrains.kotlin.types.TypeCheckerState`                                                 |
|     new |    +1 |   0.0% → 7.1% |   0 → 1 | `lowerBoundIfFlexible(TypeSystemContext, KotlinTypeMarker)`                                                 | `org.jetbrains.kotlin.types.model.TypeSystemContextContextualKt`                              |

##### `isSubtypeOf(TypeCheckerState, KotlinTypeMarker, KotlinTypeMarker, boolean)` (`org.jetbrains.kotlin.types.AbstractTypeChecker`)

|  Change | Delta |      % | Samples | Callee                                                                                                  | Location                                         |
| ------: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| +133.3% |    +8 | 100.0% |  6 → 14 | `completeIsSubTypeOf(TypeCheckerState, TypeSystemContext, KotlinTypeMarker, KotlinTypeMarker, boolean)` | `org.jetbrains.kotlin.types.AbstractTypeChecker` |

##### `fixVariable(ConstraintSystemCompletionContext, VariableWithConstraints)` (`org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter`)

| Change | Delta |            % | Samples | Callee                                                                                                                  | Location                                                                     |
| -----: | ----: | -----------: | ------: | ----------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
|    new |    +5 | 0.0% → 62.5% |   0 → 5 | `fixVariable(TypeVariableMarker, KotlinTypeMarker, FixVariableConstraintPosition)`                                      | `org.jetbrains.kotlin.resolve.calls.inference.model.NewConstraintSystemImpl` |
|    new |    +3 | 0.0% → 37.5% |   0 → 3 | `findResultType(ResultTypeResolver$Context, VariableWithConstraints, TypeVariableDirectionCalculator$ResolveDirection)` | `org.jetbrains.kotlin.resolve.calls.inference.components.ResultTypeResolver` |

##### `fixVariableIfReady(ConstraintSystemCompletionContext, VariableFixationFinder$VariableForFixation)` (`org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter`)

| Change | Delta |             % | Samples | Callee                                                                    | Location                                                               |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|    new |    +8 | 0.0% → 100.0% |   0 → 8 | `fixVariable(ConstraintSystemCompletionContext, VariableWithConstraints)` | `org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter` |

##### `CompileQueue::get(CompilerThread*)` (`<unknown>`)

| Change | Delta |              % | Samples | Callee                                          | Location    |
| -----: | ----: | -------------: | ------: | ----------------------------------------------- | ----------- |
| +45.5% |    +5 | 100.0% → 88.9% | 11 → 16 | `Monitor::wait(unsigned long long)`             | `<unknown>` |
|    new |    +2 |   0.0% → 11.1% |   0 → 2 | `CompilationPolicy::select_task(CompileQueue*)` | `<unknown>` |

##### `Matcher::xform(Node*, int)` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------- | ----------- |
|  +57.1% |    +8 | 42.4% → 55.0% | 14 → 22 | `Matcher::match_tree(Node const*)`    | `<unknown>` |
| removed |    -3 |   9.1% → 0.0% |   3 → 0 | `Matcher::match_sfpt(SafePointNode*)` | `<unknown>` |
| +200.0% |    +2 |   3.0% → 7.5% |   1 → 3 | `Node::clone() const`                 | `<unknown>` |
|  -16.7% |    -1 | 18.2% → 12.5% |   6 → 5 | `Arena::contains(void const*) const`  | `<unknown>` |

##### `PhaseChaitin::elide_copy(Node*, int, Block*, Node_List*, Node_List*, bool)` (`<unknown>`)

| Change | Delta |           % | Samples | Callee                                                                             | Location    |
| -----: | ----: | ----------: | ------: | ---------------------------------------------------------------------------------- | ----------- |
|    new |    +1 | 0.0% → 7.7% |   0 → 1 | `iRegINoSpOper::type() const`                                                      | `<unknown>` |
|    new |    +1 | 0.0% → 7.7% |   0 → 1 | `PhaseChaitin::yank_if_dead_recurse(Node*, Node*, Block*, Node_List*, Node_List*)` | `<unknown>` |

##### `Compilation::build_hir()` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                            | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------------- | ----------- |
| +133.3% |    +4 |   4.2% → 9.1% |   3 → 7 | `IR::compute_use_counts()`                        | `<unknown>` |
|  -33.3% |    -2 |   8.5% → 5.2% |   6 → 4 | `GlobalValueNumbering::GlobalValueNumbering(IR*)` | `<unknown>` |
|  +33.3% |    +1 |   4.2% → 5.2% |   3 → 4 | `IR::eliminate_null_checks()`                     | `<unknown>` |
|   +1.8% |    +1 | 78.9% → 74.0% | 56 → 57 | `IR::IR(Compilation*, ciMethod*, int)`            | `<unknown>` |
| removed |    -1 |   1.4% → 0.0% |   1 → 0 | `IR::optimize_blocks()`                           | `<unknown>` |

##### `PhaseCCP::PhaseCCP(PhaseIterGVN*)` (`<unknown>`)

|  Change | Delta |              % | Samples | Callee                                                                   | Location    |
| ------: | ----: | -------------: | ------: | ------------------------------------------------------------------------ | ----------- |
|  +66.7% |    +8 | 85.7% → 100.0% | 12 → 20 | `PhaseCCP::analyze()`                                                    | `<unknown>` |
| removed |    -1 |    7.1% → 0.0% |   1 → 0 | `PhaseCCP::push_child_nodes_to_worklist(Unique_Node_List&, Node*) const` | `<unknown>` |
| removed |    -1 |    7.1% → 0.0% |   1 → 0 | `TypeRawPtr::add_offset(long) const`                                     | `<unknown>` |

##### `Matcher::match_tree(Node const*)` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                                         | Location    |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------- | ----------- |
| +150.0% |    +6 | 25.0% → 45.5% |  4 → 10 | `Matcher::Label_Root(Node const*, State*, Node*, Node*&)`      | `<unknown>` |
|  -40.0% |    -2 | 31.3% → 13.6% |   5 → 3 | `Matcher::ReduceInst(State*, int, Node*&)`                     | `<unknown>` |
| removed |    -1 |   6.3% → 0.0% |   1 → 0 | `Arena::grow(unsigned long, AllocFailStrategy::AllocFailEnum)` | `<unknown>` |

##### `Matcher::Label_Root(Node const*, State*, Node*, Node*&)` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                                         | Location    |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------- | ----------- |
| +133.3% |    +4 | 75.0% → 70.0% |   3 → 7 | `Matcher::Label_Root(Node const*, State*, Node*, Node*&)`      | `<unknown>` |
|     new |    +2 |  0.0% → 20.0% |   0 → 2 | `Arena::grow(unsigned long, AllocFailStrategy::AllocFailEnum)` | `<unknown>` |
|  +33.3% |    +1 | 75.0% → 40.0% |   3 → 4 | `State::DFA(int, Node const*)`                                 | `<unknown>` |
|     new |    +1 |  0.0% → 10.0% |   0 → 1 | `AddPNode::match_edge(unsigned int) const`                     | `<unknown>` |
|     new |    +1 |  0.0% → 10.0% |   0 → 1 | `TypePtr::singleton() const`                                   | `<unknown>` |

##### `Compile::Code_Gen()` (`<unknown>`)

|  Change | Delta |             % |   Samples | Callee                                          | Location    |
| ------: | ----: | ------------: | --------: | ----------------------------------------------- | ----------- |
|  +32.1% |    +9 |  9.8% → 12.7% |   28 → 37 | `PhaseCFG::do_global_code_motion()`             | `<unknown>` |
|   -3.0% |    -5 | 58.4% → 55.7% | 167 → 162 | `PhaseChaitin::Register_Allocate()`             | `<unknown>` |
|   +8.2% |    +4 | 17.1% → 18.2% |   49 → 53 | `Matcher::match()`                              | `<unknown>` |
| removed |    -3 |   1.0% → 0.0% |     3 → 0 | `PhaseBlockLayout::PhaseBlockLayout(PhaseCFG&)` | `<unknown>` |
| removed |    -2 |   0.7% → 0.0% |     2 → 0 | `PhaseCFG::remove_empty_blocks()`               | `<unknown>` |

##### `MachNode::rematerialize() const` (`<unknown>`)

| Change | Delta |            % | Samples | Callee                        | Location    |
| -----: | ----: | -----------: | ------: | ----------------------------- | ----------- |
|    new |    +1 | 0.0% → 12.5% |   0 → 1 | `MachNode::ideal_reg() const` | `<unknown>` |

##### `Node_Backward_Iterator::next()` (`<unknown>`)

| Change | Delta |            % | Samples | Callee                                      | Location    |
| -----: | ----: | -----------: | ------: | ------------------------------------------- | ----------- |
|    new |    +2 | 0.0% → 25.0% |   0 → 2 | `Node::needs_anti_dependence_check() const` | `<unknown>` |
|    new |    +1 | 0.0% → 12.5% |   0 → 1 | `MachProjNode::bottom_type() const`         | `<unknown>` |

##### `ciBytecodeStream::get_field(bool&)` (`<unknown>`)

|  Change | Delta |              % | Samples | Callee                                                              | Location    |
| ------: | ----: | -------------: | ------: | ------------------------------------------------------------------- | ----------- |
| +133.3% |    +4 | 100.0% → 87.5% |   3 → 7 | `ciEnv::get_field_by_index(ciInstanceKlass*, int, Bytecodes::Code)` | `<unknown>` |
|     new |    +1 |   0.0% → 12.5% |   0 → 1 | `ciField::will_link(ciMethod*, Bytecodes::Code)`                    | `<unknown>` |

##### `PhaseCFG::partial_latency_of_defs(Node*)` (`<unknown>`)

|  Change | Delta |            % | Samples | Callee                                                                                  | Location    |
| ------: | ----: | -----------: | ------: | --------------------------------------------------------------------------------------- | ----------- |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `loadNNode::pipeline() const`                                                           | `<unknown>` |
|     new |    +1 | 0.0% → 11.1% |   0 → 1 | `GrowableArrayWithAllocator<unsigned int, GrowableArray<unsigned int>>::expand_to(int)` | `<unknown>` |
|     new |    +1 | 0.0% → 11.1% |   0 → 1 | `tlsLoadPNode::pipeline() const`                                                        | `<unknown>` |

##### `Compile::remove_speculative_types(PhaseIterGVN&)` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                     | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------ | ----------- |
|     new |    +3 |  0.0% → 50.0% |   0 → 3 | `PhaseIterGVN::optimize()`                 | `<unknown>` |
|     new |    +2 |  0.0% → 33.3% |   0 → 2 | `PhaseIterGVN::remove_speculative_types()` | `<unknown>` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `Type::remove_speculative() const`         | `<unknown>` |
|     new |    +1 |  0.0% → 16.7% |   0 → 1 | `TypePtr::remove_speculative() const`      | `<unknown>` |

##### `ClassFileParser::parse_stream(ClassFileStream const*, JavaThread*)` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                                                                                                                                  | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
|  +26.5% |    +9 | 73.9% → 81.1% | 34 → 43 | `ClassFileParser::parse_constant_pool(ClassFileStream const*, ConstantPool*, int, JavaThread*)`                                                         | `<unknown>` |
|  -44.4% |    -4 |  19.6% → 9.4% |   9 → 5 | `ClassFileParser::parse_methods(ClassFileStream const*, bool, bool*, bool*, bool*, JavaThread*)`                                                        | `<unknown>` |
|     new |    +2 |   0.0% → 3.8% |   0 → 2 | `ClassFileParser::parse_classfile_attributes(ClassFileStream const*, ConstantPool*, ClassFileParser::ClassAnnotationCollector*, JavaThread*)`           | `<unknown>` |
|  -50.0% |    -1 |   4.3% → 1.9% |   2 → 1 | `ClassFileParser::parse_interfaces(ClassFileStream const*, int, ConstantPool*, bool*, JavaThread*)`                                                     | `<unknown>` |
| +100.0% |    +1 |   2.2% → 3.8% |   1 → 2 | `ClassFileParser::parse_fields(ClassFileStream const*, bool, ClassFileParser::FieldAllocationCount*, ConstantPool*, int, unsigned short*, JavaThread*)` | `<unknown>` |

##### `SymbolTable::lookup_only(char const*, int, unsigned int&)` (`<unknown>`)

| Change | Delta |             % | Samples | Callee                                                       | Location    |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------ | ----------- |
| +66.7% |    +8 | 66.7% → 80.0% | 12 → 20 | `SymbolTable::do_lookup(char const*, int, unsigned long)`    | `<unknown>` |
| -66.7% |    -2 |  16.7% → 4.0% |   3 → 1 | `SymbolTable::lookup_shared(char const*, int, unsigned int)` | `<unknown>` |

##### `InterpreterRuntime::resolve_from_cache(JavaThread*, Bytecodes::Code)` (`<unknown>`)

| Change | Delta |             % | Samples | Callee                                                              | Location    |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------- | ----------- |
| +11.1% |    +2 | 72.0% → 64.5% | 18 → 20 | `InterpreterRuntime::resolve_invoke(JavaThread*, Bytecodes::Code)`  | `<unknown>` |
| +28.6% |    +2 | 28.0% → 29.0% |   7 → 9 | `InterpreterRuntime::resolve_get_put(JavaThread*, Bytecodes::Code)` | `<unknown>` |
|    new |    +2 |   0.0% → 6.5% |   0 → 2 | `InterpreterRuntime::resolve_invokedynamic(JavaThread*)`            | `<unknown>` |

##### `CompiledIC::set_to_monomorphic(CompiledICInfo&)` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                                                              | Location    |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------- | ----------- |
|     new |    +4 |  0.0% → 50.0% |   0 → 4 | `CompiledDirectStaticCall::set_to_interpreted(methodHandle const&, unsigned char*)` | `<unknown>` |
| +100.0% |    +1 | 50.0% → 25.0% |   1 → 2 | `sys_icache_invalidate`                                                             | `<unknown>` |
|     new |    +1 |  0.0% → 12.5% |   0 → 1 | `NativeMovConstReg::set_data(long)`                                                 | `<unknown>` |

##### `SignatureStream::SignatureStream(Symbol const*, bool)` (`<unknown>`)

| Change | Delta |            % | Samples | Callee                    | Location    |
| -----: | ----: | -----------: | ------: | ------------------------- | ----------- |
|    new |    +3 | 0.0% → 50.0% |   0 → 3 | `SignatureStream::next()` | `<unknown>` |
|    new |    +3 | 0.0% → 50.0% |   0 → 3 | `_platform_memchr`        | `<unknown>` |

##### `ClassLoader::load_class(Symbol*, bool, JavaThread*)` (`<unknown>`)

| Change | Delta |            % | Samples | Callee                                                                                                             | Location    |
| -----: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------------------------------------ | ----------- |
|    new |    +5 | 0.0% → 83.3% |   0 → 5 | `KlassFactory::create_from_stream(ClassFileStream*, Symbol*, ClassLoaderData*, ClassLoadInfo const&, JavaThread*)` | `<unknown>` |

##### `SystemDictionary::load_instance_class_impl(Symbol*, Handle, JavaThread*)` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                                                                       | Location    |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------- | ----------- |
| +500.0% |    +5 | 33.3% → 75.0% |   1 → 6 | `ClassLoader::load_class(Symbol*, bool, JavaThread*)`                                        | `<unknown>` |
| removed |    -1 |  33.3% → 0.0% |   1 → 0 | `PackageEntryTable::lookup_only(Symbol*)`                                                    | `<unknown>` |
|     new |    +1 |  0.0% → 12.5% |   0 → 1 | `JavaCalls::call_virtual(JavaValue*, Handle, Klass*, Symbol*, Symbol*, Handle, JavaThread*)` | `<unknown>` |
|     new |    +1 |  0.0% → 12.5% |   0 → 1 | `SymbolTable::new_symbol(Symbol const*, int, int)`                                           | `<unknown>` |

##### `SystemDictionary::load_instance_class(Symbol*, Handle, JavaThread*)` (`<unknown>`)

|  Change | Delta |      % | Samples | Callee                                                                     | Location    |
| ------: | ----: | -----: | ------: | -------------------------------------------------------------------------- | ----------- |
| +166.7% |    +5 | 100.0% |   3 → 8 | `SystemDictionary::load_instance_class_impl(Symbol*, Handle, JavaThread*)` | `<unknown>` |

##### `Monitor::wait(unsigned long long)` (`<unknown>`)

| Change | Delta |      % | Samples | Callee                                      | Location    |
| -----: | ----: | -----: | ------: | ------------------------------------------- | ----------- |
| +45.5% |    +5 | 100.0% | 11 → 16 | `PlatformMonitor::wait(unsigned long long)` | `<unknown>` |

##### `nmethod::new_nmethod(methodHandle const&, int, int, CodeOffsets*, int, DebugInformationRecorder*, Dependencies*, CodeBuffer*, int, OopMapSet*, ExceptionHandlerTable*, ImplicitExceptionTable*, AbstractCompiler*, CompLevel, char*, int, JVMCINMethodData*)` (`<unknown>`)

| Change | Delta |             % | Samples | Callee                                                                                                                                                                                                                                                            | Location    |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| +28.6% |    +4 | 87.5% → 85.7% | 14 → 18 | `nmethod::nmethod(Method*, CompilerType, int, int, int, CodeOffsets*, int, DebugInformationRecorder*, Dependencies*, CodeBuffer*, int, OopMapSet*, ExceptionHandlerTable*, ImplicitExceptionTable*, AbstractCompiler*, CompLevel, char*, int, JVMCINMethodData*)` | `<unknown>` |
|    new |    +2 |   0.0% → 9.5% |   0 → 2 | `CodeBuffer::finalize_oop_references(methodHandle const&)`                                                                                                                                                                                                        | `<unknown>` |
| -50.0% |    -1 |  12.5% → 4.8% |   2 → 1 | `InstanceKlass::add_dependent_nmethod(nmethod*)`                                                                                                                                                                                                                  | `<unknown>` |

##### `SharedRuntime::resolve_sub_helper_internal(methodHandle, frame const&, CompiledMethod*, bool, bool, Handle, CallInfo&, Bytecodes::Code, JavaThread*)` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                            | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------------- | ----------- |
| +300.0% |    +6 | 50.0% → 88.9% |   2 → 8 | `CompiledIC::set_to_monomorphic(CompiledICInfo&)` | `<unknown>` |
|  -50.0% |    -1 | 50.0% → 11.1% |   2 → 1 | `CompiledStaticCall::set(StaticCallInfo const&)`  | `<unknown>` |

##### `Parse::do_ifnull(BoolTest::mask, Node*)` (`<unknown>`)

| Change | Delta |            % | Samples | Callee                                                                    | Location    |
| -----: | ----: | -----------: | ------: | ------------------------------------------------------------------------- | ----------- |
|    new |    +2 | 0.0% → 33.3% |   0 → 2 | `PreserveJVMState::PreserveJVMState(GraphKit*, bool)`                     | `<unknown>` |
|    new |    +2 | 0.0% → 33.3% |   0 → 2 | `Parse::adjust_map_after_if(BoolTest::mask, Node*, float, Parse::Block*)` | `<unknown>` |
|    new |    +1 | 0.0% → 16.7% |   0 → 1 | `GraphKit::create_and_xform_if(Node*, Node*, float, float)`               | `<unknown>` |

##### `acceptChildren(FirVisitor, Object)` (`org.jetbrains.kotlin.fir.expressions.impl.FirFunctionCallImpl`)

|  Change | Delta |      % | Samples | Callee                       | Location                                               |
| ------: | ----: | -----: | ------: | ---------------------------- | ------------------------------------------------------ |
| +140.0% |    +7 | 100.0% |  5 → 12 | `accept(FirVisitor, Object)` | `org.jetbrains.kotlin.fir.expressions.FirArgumentList` |

##### `runCompletion(ConstraintSystemCompletionContext, ConstraintSystemCompletionMode, List, ConeKotlinType, ResolutionContext, ConstraintSystemCompleter$PostponedAtomAnalyzer)` (`org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter`)

|  Change | Delta |             % | Samples | Callee                                                                                                                                                                     | Location                                                                                            |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
|     new |    +8 |  0.0% → 25.8% |   0 → 8 | `fixVariableIfReady(ConstraintSystemCompletionContext, VariableFixationFinder$VariableForFixation)`                                                                        | `org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter`                              |
|   -4.3% |    -1 | 92.0% → 71.0% | 23 → 22 | `analyzeArgumentWithFixedParameterTypes(List, Function1)`                                                                                                                  | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintSystemCompletionContext`         |
| removed |    -1 |   4.0% → 0.0% |   1 → 0 | `getShouldForkPointConstraintsBeResolved()`                                                                                                                                | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintSystemCompletionMode`            |
|     new |    +1 |   0.0% → 3.2% |   0 → 1 | `findNextReadyVariableForParameterType(ConstraintSystemCompletionContext, PostponedResolvedAtomMarker, List, KotlinTypeMarker, TypeVariableDependencyInformationProvider)` | `org.jetbrains.kotlin.resolve.calls.inference.components.PostponedArgumentInputTypesResolver`       |
|     new |    +1 |   0.0% → 3.2% |   0 → 1 | `<init>(Map, List, KotlinTypeMarker, VariableFixationFinder$Context, LanguageVersionSettings)`                                                                             | `org.jetbrains.kotlin.resolve.calls.inference.components.TypeVariableDependencyInformationProvider` |

##### `complete(ConstraintSystemCompletionContext, ConstraintSystemCompletionMode, List, ConeKotlinType, ResolutionContext, ConstraintSystemCompleter$PostponedAtomAnalyzer)` (`org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter`)

| Change | Delta |      % | Samples | Callee                                                                                                                                                                       | Location                                                               |
| -----: | ----: | -----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| +24.0% |    +6 | 100.0% | 25 → 31 | `runCompletion(ConstraintSystemCompletionContext, ConstraintSystemCompletionMode, List, ConeKotlinType, ResolutionContext, ConstraintSystemCompleter$PostponedAtomAnalyzer)` | `org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter` |

##### `runCompletionForCall(Candidate, ConstraintSystemCompletionMode, FirExpression, ConeKotlinType, PostponedArgumentsAnalyzer)` (`org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter`)

|  Change | Delta |           % | Samples | Callee                                                                                                                                                                  | Location                                                               |
| ------: | ----: | ----------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|  +24.0% |    +6 |      100.0% | 25 → 31 | `complete(ConstraintSystemCompletionContext, ConstraintSystemCompletionMode, List, ConeKotlinType, ResolutionContext, ConstraintSystemCompleter$PostponedAtomAnalyzer)` | `org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter` |
| removed |    -1 | 4.0% → 0.0% |   1 → 0 | `linkToTargetMethod(Object, Object, Object)`                                                                                                                            | `java.lang.invoke.Invokers$Holder`                                     |

##### `accept(FirVisitor, Object)` (`org.jetbrains.kotlin.fir.expressions.FirReturnExpression`)

|  Change | Delta |             % | Samples | Callee                                               | Location                                                                                      |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| +200.0% |    +4 | 20.0% → 37.5% |   2 → 6 | `visitReturnExpression(FirReturnExpression, Object)` | `org.jetbrains.kotlin.fir.backend.Fir2IrVisitor`                                              |
|  +25.0% |    +2 | 80.0% → 62.5% |  8 → 10 | `visitReturnExpression(FirReturnExpression, Object)` | `org.jetbrains.kotlin.fir.visitors.FirDefaultVisitor`                                         |
|  -50.0% |    -1 |  20.0% → 6.3% |   2 → 1 | `visitReturnExpression(FirReturnExpression, Object)` | `org.jetbrains.kotlin.fir.analysis.checkers.expression.ExpressionCheckersDiagnosticComponent` |

##### `addConstraintIfCompatible(ConstraintSystemBuilder, KotlinTypeMarker, KotlinTypeMarker, ConstraintPosition, ConstraintKind)` (`org.jetbrains.kotlin.resolve.calls.inference.ConstraintSystemBuilderKt`)

| Change | Delta |              % | Samples | Callee                                                                         | Location                                                                                      |
| -----: | ----: | -------------: | ------: | ------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------- |
| +57.1% |    +4 | 100.0% → 84.6% |  7 → 11 | `addSubtypeConstraint(KotlinTypeMarker, KotlinTypeMarker, ConstraintPosition)` | `org.jetbrains.kotlin.resolve.calls.inference.model.NewConstraintSystemImpl`                  |
|    new |    +1 |    0.0% → 7.7% |   0 → 1 | `rollbackTransaction()`                                                        | `org.jetbrains.kotlin.resolve.calls.inference.model.NewConstraintSystemImpl$TransactionState` |
|    new |    +1 |    0.0% → 7.7% |   0 → 1 | `closeTransaction()`                                                           | `org.jetbrains.kotlin.resolve.calls.inference.model.NewConstraintSystemImpl$TransactionState` |

##### `addSubtypeConstraintIfCompatible(ConstraintSystemBuilder, KotlinTypeMarker, KotlinTypeMarker, ConstraintPosition)` (`org.jetbrains.kotlin.resolve.calls.inference.ConstraintSystemBuilderKt`)

| Change | Delta |      % | Samples | Callee                                                                                                                       | Location                                                                 |
| -----: | ----: | -----: | ------: | ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| +85.7% |    +6 | 100.0% |  7 → 13 | `addConstraintIfCompatible(ConstraintSystemBuilder, KotlinTypeMarker, KotlinTypeMarker, ConstraintPosition, ConstraintKind)` | `org.jetbrains.kotlin.resolve.calls.inference.ConstraintSystemBuilderKt` |

##### `runIsSubtypeOf$isSubtypeOf(ConstraintInjector$TypeCheckerStateForConstraintInjector, KotlinTypeMarker, boolean, KotlinTypeMarker)` (`org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector$TypeCheckerStateForConstraintInjector`)

|  Change | Delta |      % | Samples | Callee                                                                       | Location                                         |
| ------: | ----: | -----: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------ |
| +150.0% |    +6 | 100.0% |  4 → 10 | `isSubtypeOf(TypeCheckerState, KotlinTypeMarker, KotlinTypeMarker, boolean)` | `org.jetbrains.kotlin.types.AbstractTypeChecker` |

##### `runIsSubtypeOf(KotlinTypeMarker, KotlinTypeMarker, boolean, boolean)` (`org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector$TypeCheckerStateForConstraintInjector`)

|  Change | Delta |      % | Samples | Callee                                                                                                                              | Location                                                                                                           |
| ------: | ----: | -----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| +150.0% |    +6 | 100.0% |  4 → 10 | `runIsSubtypeOf$isSubtypeOf(ConstraintInjector$TypeCheckerStateForConstraintInjector, KotlinTypeMarker, boolean, KotlinTypeMarker)` | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector$TypeCheckerStateForConstraintInjector` |

##### `runIsSubtypeOf$default(ConstraintInjector$TypeCheckerStateForConstraintInjector, KotlinTypeMarker, KotlinTypeMarker, boolean, boolean, int, Object)` (`org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector$TypeCheckerStateForConstraintInjector`)

|  Change | Delta |      % | Samples | Callee                                                                 | Location                                                                                                           |
| ------: | ----: | -----: | ------: | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| +200.0% |    +6 | 100.0% |   3 → 9 | `runIsSubtypeOf(KotlinTypeMarker, KotlinTypeMarker, boolean, boolean)` | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector$TypeCheckerStateForConstraintInjector` |

##### `transformChildren(IrTransformer, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`)

|  Change | Delta |      % | Samples | Callee                                          | Location                                   |
| ------: | ----: | -----: | ------: | ----------------------------------------------- | ------------------------------------------ |
| +150.0% |    +6 | 100.0% |  4 → 10 | `transformInPlace(List, IrTransformer, Object)` | `org.jetbrains.kotlin.ir.util.TransformKt` |

##### `areEqual(Object, Object)` (`kotlin.jvm.internal.Intrinsics`)

|  Change | Delta |            % | Samples | Callee           | Location                                 |
| ------: | ----: | -----------: | ------: | ---------------- | ---------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `equals(Object)` | `org.jetbrains.kotlin.name.Name`         |
|     new |    +1 | 0.0% → 14.3% |   0 → 1 | `equals(Object)` | `java.lang.String`                       |
|     new |    +1 | 0.0% → 14.3% |   0 → 1 | `equals(Object)` | `org.jetbrains.kotlin.name.FqNameUnsafe` |
|     new |    +1 | 0.0% → 14.3% |   0 → 1 | `equals(Object)` | `org.jetbrains.kotlin.name.FqName`       |
|     new |    +1 | 0.0% → 14.3% |   0 → 1 | `equals(Object)` | `org.jetbrains.kotlin.name.ClassId`      |

##### `findBootstrapClass(String)` (`java.lang.ClassLoader`)

| Change | Delta |              % | Samples | Callee                                          | Location    |
| -----: | ----: | -------------: | ------: | ----------------------------------------------- | ----------- |
| +66.7% |    +2 | 100.0% → 71.4% |   3 → 5 | `Java_java_lang_ClassLoader_findBootstrapClass` | `<unknown>` |
|    new |    +1 |   0.0% → 14.3% |   0 → 1 | `JVM_FindClassFromBootLoader`                   | `<unknown>` |

##### `findBootstrapClassOrNull(String)` (`java.lang.ClassLoader`)

|  Change | Delta |      % | Samples | Callee                       | Location                |
| ------: | ----: | -----: | ------: | ---------------------------- | ----------------------- |
| +133.3% |    +4 | 100.0% |   3 → 7 | `findBootstrapClass(String)` | `java.lang.ClassLoader` |

##### `updateBytes(int, byte[], int, int)` (`java.util.zip.CRC32`)

|  Change | Delta |      % | Samples | Callee             | Location    |
| ------: | ----: | -----: | ------: | ------------------ | ----------- |
| +400.0% |    +4 | 100.0% |   1 → 5 | `updateBytesCRC32` | `<unknown>` |

##### `update(byte[], int, int)` (`java.util.zip.CRC32`)

|  Change | Delta |      % | Samples | Callee                               | Location              |
| ------: | ----: | -----: | ------: | ------------------------------------ | --------------------- |
| +400.0% |    +4 | 100.0% |   1 → 5 | `updateBytes(int, byte[], int, int)` | `java.util.zip.CRC32` |

##### `checkNotNullParameter(Object, String)` (`kotlin.jvm.internal.Intrinsics`)

|  Change | Delta |             % | Samples | Callee                            | Location                         |
| ------: | ----: | ------------: | ------: | --------------------------------- | -------------------------------- |
| +100.0% |    +2 | 33.3% → 44.4% |   2 → 4 | `throwParameterIsNullNPE(String)` | `kotlin.jvm.internal.Intrinsics` |

##### `throwParameterIsNullNPE(String)` (`kotlin.jvm.internal.Intrinsics`)

|  Change | Delta |      % | Samples | Callee                          | Location                         |
| ------: | ----: | -----: | ------: | ------------------------------- | -------------------------------- |
| +100.0% |    +2 | 100.0% |   2 → 4 | `sanitizeStackTrace(Throwable)` | `kotlin.jvm.internal.Intrinsics` |

##### `getContributedClassifier(Name, LookupLocation)` (`kotlin.reflect.jvm.internal.impl.resolve.scopes.AbstractScopeAdapter`)

|  Change | Delta |     % | Samples | Callee                                           | Location                                                             |
| ------: | ----: | ----: | ------: | ------------------------------------------------ | -------------------------------------------------------------------- |
| +100.0% |    +1 | 50.0% |   1 → 2 | `getContributedClassifier(Name, LookupLocation)` | `kotlin.reflect.jvm.internal.impl.resolve.scopes.ChainedMemberScope` |
| +100.0% |    +1 | 50.0% |   1 → 2 | `getWorkerScope()`                               | `kotlin.reflect.jvm.internal.impl.resolve.scopes.LazyScopeAdapter`   |

##### `findClassifierAcrossModuleDependencies(ModuleDescriptor, ClassId)` (`kotlin.reflect.jvm.internal.impl.descriptors.FindClassInModuleKt`)

|  Change | Delta |      % | Samples | Callee                                           | Location                                                               |
| ------: | ----: | -----: | ------: | ------------------------------------------------ | ---------------------------------------------------------------------- |
| +100.0% |    +2 | 100.0% |   2 → 4 | `getContributedClassifier(Name, LookupLocation)` | `kotlin.reflect.jvm.internal.impl.resolve.scopes.AbstractScopeAdapter` |

##### `hasNext()` (`java.util.ServiceLoader$2`)

| Change | Delta |            % | Samples | Callee      | Location                                               |
| -----: | ----: | -----------: | ------: | ----------- | ------------------------------------------------------ |
|    new |    +2 | 0.0% → 66.7% |   0 → 2 | `hasNext()` | `java.util.ServiceLoader$ModuleServicesLookupIterator` |

##### `hasNext()` (`java.util.ServiceLoader$3`)

|  Change | Delta |      % | Samples | Callee      | Location                    |
| ------: | ----: | -----: | ------: | ----------- | --------------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `hasNext()` | `java.util.ServiceLoader$2` |

##### `get(Object)` (`jdk.internal.util.ReferencedKeyMap`)

| Change | Delta |            % | Samples | Callee                    | Location                             |
| -----: | ----: | -----------: | ------: | ------------------------- | ------------------------------------ |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `getNoCheckStale(Object)` | `jdk.internal.util.ReferencedKeyMap` |

##### `get(Object)` (`jdk.internal.util.ReferencedKeySet`)

| Change | Delta |             % | Samples | Callee        | Location                             |
| -----: | ----: | ------------: | ------: | ------------- | ------------------------------------ |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `get(Object)` | `jdk.internal.util.ReferencedKeyMap` |

##### `add(Object)` (`java.util.HashSet`)

| Change | Delta |            % | Samples | Callee                | Location            |
| -----: | ----: | -----------: | ------: | --------------------- | ------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `put(Object, Object)` | `java.util.HashMap` |

##### `isArray()` (`java.lang.Class`)

| Change | Delta |             % | Samples | Callee             | Location    |
| -----: | ----: | ------------: | ------: | ------------------ | ----------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `JVM_IsArrayClass` | `<unknown>` |

##### `put(Object, Object)` (`java.util.IdentityHashMap`)

| Change | Delta |            % | Samples | Callee              | Location                    |
| -----: | ----: | -----------: | ------: | ------------------- | --------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `hash(Object, int)` | `java.util.IdentityHashMap` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `resize(int)`       | `java.util.IdentityHashMap` |

##### `read(byte[], int, int)` (`java.io.PushbackInputStream`)

| Change | Delta |            % | Samples | Callee                     | Location                    |
| -----: | ----: | -----------: | ------: | -------------------------- | --------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `read(byte[], int, int)`   | `java.io.FilterInputStream` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `jbyte_disjoint_arraycopy` | `<unknown>`                 |

##### `getNextEntry()` (`java.util.zip.ZipInputStream`)

| Change | Delta |            % | Samples | Callee         | Location                       |
| -----: | ----: | -----------: | ------: | -------------- | ------------------------------ |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `closeEntry()` | `java.util.zip.ZipInputStream` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `readLOC()`    | `java.util.zip.ZipInputStream` |

##### `loadProvider(ServicesCatalog$ServiceProvider)` (`java.util.ServiceLoader`)

| Change | Delta |            % | Samples | Callee                            | Location                  |
| -----: | ----: | -----------: | ------: | --------------------------------- | ------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `findStaticProviderMethod(Class)` | `java.util.ServiceLoader` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `forName(Module, String)`         | `java.lang.Class`         |

##### `I2C/C2I adapters(0xb)` (`<unknown>`)

| Change | Delta |            % | Samples | Callee                                                           | Location    |
| -----: | ----: | -----------: | ------: | ---------------------------------------------------------------- | ----------- |
|    new |    +1 | 0.0% → 16.7% |   0 → 1 | `SharedRuntime::fixup_callers_callsite(Method*, unsigned char*)` | `<unknown>` |

##### `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` (`<unknown>`)

|  Change | Delta |             % |  Samples | Callee                                                        | Location    |
| ------: | ----: | ------------: | -------: | ------------------------------------------------------------- | ----------- |
|  -20.2% |   -22 | 85.8% → 91.6% | 109 → 87 | `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` | `<unknown>` |
|  -52.9% |    -9 |  13.4% → 8.4% |   17 → 8 | `PhaseIterGVN::optimize()`                                    | `<unknown>` |
| removed |    -1 |   0.8% → 0.0% |    1 → 0 | `_platform_memset`                                            | `<unknown>` |

##### `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` (`<unknown>`)

|  Change | Delta |              % |  Samples | Callee                                 | Location    |
| ------: | ----: | -------------: | -------: | -------------------------------------- | ----------- |
|  -19.4% |   -21 | 99.1% → 100.0% | 108 → 87 | `PhaseIdealLoop::build_and_optimize()` | `<unknown>` |
| removed |    -1 |    0.9% → 0.0% |    1 → 0 | `_platform_memset`                     | `<unknown>` |

##### `PhaseIdealLoop::build_and_optimize()` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                                                  | Location    |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------------- | ----------- |
|  -27.3% |    -9 | 30.6% → 27.6% | 33 → 24 | `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)`  | `<unknown>` |
|  -26.1% |    -6 | 21.3% → 19.5% | 23 → 17 | `PhaseIdealLoop::split_if_with_blocks(VectorSet&, Node_Stack&)`         | `<unknown>` |
| removed |    -5 |   4.6% → 0.0% |   5 → 0 | `Node::pinned() const`                                                  | `<unknown>` |
|  +50.0% |    +5 |  9.3% → 17.2% | 10 → 15 | `PhaseIdealLoop::build_loop_early(VectorSet&, Node_List&, Node_Stack&)` | `<unknown>` |
|  -33.3% |    -3 |   8.3% → 6.9% |   9 → 6 | `PhaseIdealLoop::build_loop_tree()`                                     | `<unknown>` |

##### `Thread::call_run()` (`<unknown>`)

| Change | Delta |             % |   Samples | Callee                            | Location    |
| -----: | ----: | ------------: | --------: | --------------------------------- | ----------- |
| -18.3% |   -13 |   7.7% → 6.5% |   71 → 58 | `WorkerThread::run()`             | `<unknown>` |
| -55.6% |    -5 |   1.0% → 0.4% |     9 → 4 | `VMThread::run()`                 | `<unknown>` |
|  -0.1% |    -1 | 91.1% → 92.9% | 836 → 835 | `JavaThread::thread_main_inner()` | `<unknown>` |

##### `thread_native_entry(Thread*)` (`<unknown>`)

| Change | Delta |      % |   Samples | Callee               | Location    |
| -----: | ----: | -----: | --------: | -------------------- | ----------- |
|  -2.1% |   -19 | 100.0% | 918 → 899 | `Thread::call_run()` | `<unknown>` |

##### `_pthread_start` (`<unknown>`)

| Change | Delta |     % |   Samples | Callee                         | Location    |
| -----: | ----: | ----: | --------: | ------------------------------ | ----------- |
|  -2.1% |   -19 | 99.9% | 918 → 899 | `thread_native_entry(Thread*)` | `<unknown>` |

##### `thread_start` (`<unknown>`)

| Change | Delta |      % |   Samples | Callee           | Location    |
| -----: | ----: | -----: | --------: | ---------------- | ----------- |
|  -2.1% |   -19 | 100.0% | 919 → 900 | `_pthread_start` | `<unknown>` |

##### `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

|  Change | Delta |             % |   Samples | Callee                                                                       | Location                                               |
| ------: | ----: | ------------: | --------: | ---------------------------------------------------------------------------- | ------------------------------------------------------ |
|   -2.5% |    -9 | 82.0% → 82.4% | 360 → 351 | `invoke(Object, Object[])`                                                   | `java.lang.reflect.Method`                             |
|   -5.1% |    -4 | 17.8% → 17.4% |   78 → 74 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |
| removed |    -1 |   0.2% → 0.0% |     1 → 0 | `addShutdownHook(Thread)`                                                    | `java.lang.Runtime`                                    |
|     new |    +1 |   0.0% → 0.2% |     0 → 1 | `joining(CharSequence)`                                                      | `java.util.stream.Collectors`                          |

##### `main(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

| Change | Delta |      % |   Samples | Callee          | Location                                    |
| -----: | ----: | -----: | --------: | --------------- | ------------------------------------------- |
|  -3.0% |   -13 | 100.0% | 439 → 426 | `run(String[])` | `org.jetbrains.kotlin.preloading.Preloader` |

##### `Compile::Optimize()` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                                  | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------- | ----------- |
|  -33.8% |   -23 | 32.5% → 23.0% | 68 → 45 | `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` | `<unknown>` |
|  -15.3% |    -9 | 28.2% → 25.5% | 59 → 50 | `Compile::optimize_loops(PhaseIterGVN&, LoopOptsMode)`  | `<unknown>` |
| +100.0% |    +8 |   3.8% → 8.2% |  8 → 16 | `PhaseMacroExpand::expand_macro_nodes()`                | `<unknown>` |
|  +42.9% |    +6 |  6.7% → 10.2% | 14 → 20 | `PhaseCCP::PhaseCCP(PhaseIterGVN*)`                     | `<unknown>` |
| +500.0% |    +5 |   0.5% → 3.1% |   1 → 6 | `Compile::remove_speculative_types(PhaseIterGVN&)`      | `<unknown>` |

##### `WorkerThread::run()` (`<unknown>`)

| Change | Delta |             % | Samples | Callee                                          | Location    |
| -----: | ----: | ------------: | ------: | ----------------------------------------------- | ----------- |
| -38.7% |   -12 | 43.7% → 32.8% | 31 → 19 | `G1EvacuateRegionsBaseTask::work(unsigned int)` | `<unknown>` |
| -66.7% |    -4 |   8.5% → 3.4% |   6 → 2 | `G1ParallelCleaningTask::work(unsigned int)`    | `<unknown>` |
|    new |    +3 |   0.0% → 5.2% |   0 → 3 | `semaphore_wait_trap`                           | `<unknown>` |
| -11.1% |    -2 | 25.4% → 27.6% | 18 → 16 | `G1CMConcurrentMarkingTask::work(unsigned int)` | `<unknown>` |
| -12.5% |    -2 | 22.5% → 24.1% | 16 → 14 | `G1RebuildRSAndScrubTask::work(unsigned int)`   | `<unknown>` |

##### `G1EvacuateRegionsBaseTask::work(unsigned int)` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                                                                                                                    | Location    |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
|  -80.0% |   -12 | 48.4% → 15.8% |  15 → 3 | `G1EvacuateRegionsTask::evacuate_live_objects(G1ParScanThreadState*, unsigned int)`                                                       | `<unknown>` |
|  -13.3% |    -2 | 48.4% → 68.4% | 15 → 13 | `G1EvacuateRegionsTask::scan_roots(G1ParScanThreadState*, unsigned int)`                                                                  | `<unknown>` |
| +200.0% |    +2 |  3.2% → 15.8% |   1 → 3 | `G1RemSet::scan_collection_set_code_roots(G1ParScanThreadState*, unsigned int, G1GCPhaseTimes::GCParPhases, G1GCPhaseTimes::GCParPhases)` | `<unknown>` |

##### `G1ParScanThreadState::steal_and_trim_queue(GenericTaskQueueSet<OverflowTaskQueue<ScannerTask, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>*)` (`<unknown>`)

|  Change | Delta |            % | Samples | Callee                                                                                  | Location    |
| ------: | ----: | -----------: | ------: | --------------------------------------------------------------------------------------- | ----------- |
| removed |   -10 | 83.3% → 0.0% |  10 → 0 | `G1ParScanThreadState::trim_queue_to_threshold(unsigned int)`                           | `<unknown>` |
| removed |    -1 |  8.3% → 0.0% |   1 → 0 | `G1ParScanThreadState::do_copy_to_survivor_space(G1HeapRegionAttr, oopDesc*, markWord)` | `<unknown>` |

##### `G1ParEvacuateFollowersClosure::do_void()` (`<unknown>`)

|  Change | Delta |            % | Samples | Callee                                                                                                                                | Location    |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| removed |   -12 | 80.0% → 0.0% |  12 → 0 | `G1ParScanThreadState::steal_and_trim_queue(GenericTaskQueueSet<OverflowTaskQueue<ScannerTask, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>*)` | `<unknown>` |

##### `G1EvacuateRegionsTask::evacuate_live_objects(G1ParScanThreadState*, unsigned int)` (`<unknown>`)

| Change | Delta |      % | Samples | Callee                                     | Location    |
| -----: | ----: | -----: | ------: | ------------------------------------------ | ----------- |
| -80.0% |   -12 | 100.0% |  15 → 3 | `G1ParEvacuateFollowersClosure::do_void()` | `<unknown>` |

##### `resumeTask(TowerResolveManager$SuspendedResolverTask)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager`)

| Change | Delta |      % | Samples | Callee               | Location                                              |
| -----: | ----: | -----: | ------: | -------------------- | ----------------------------------------------------- |
| -20.4% |   -11 | 100.0% | 54 → 43 | `resumeWith(Object)` | `kotlin.coroutines.jvm.internal.BaseContinuationImpl` |

##### `runTasks()` (`org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager`)

| Change | Delta |      % | Samples | Callee                                                  | Location                                                           |
| -----: | ----: | -----: | ------: | ------------------------------------------------------- | ------------------------------------------------------------------ |
| -20.4% |   -11 | 100.0% | 54 → 43 | `resumeTask(TowerResolveManager$SuspendedResolverTask)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager` |

##### `runResolver(CallInfo, ResolutionContext, CandidateCollector, TowerResolveManager, CandidateFactory)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver`)

| Change | Delta |             % | Samples | Callee       | Location                                                           |
| -----: | ----: | ------------: | ------: | ------------ | ------------------------------------------------------------------ |
| -20.4% |   -11 | 96.4% → 95.6% | 54 → 43 | `runTasks()` | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager` |

##### `runResolver(CallInfo, ResolutionContext, CandidateCollector, CandidateFactory)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver`)

| Change | Delta |      % | Samples | Callee                                                                                                | Location                                                        |
| -----: | ----: | -----: | ------: | ----------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| -19.6% |   -11 | 100.0% | 56 → 45 | `runResolver(CallInfo, ResolutionContext, CandidateCollector, TowerResolveManager, CandidateFactory)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver` |

##### `runResolver$default(FirTowerResolver, CallInfo, ResolutionContext, CandidateCollector, CandidateFactory, int, Object)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver`)

| Change | Delta |             % | Samples | Callee                                                                           | Location                                                        |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| -19.6% |   -11 | 98.2% → 97.8% | 56 → 45 | `runResolver(CallInfo, ResolutionContext, CandidateCollector, CandidateFactory)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver` |

##### `PhaseGVN::transform_no_reclaim(Node*)` (`<unknown>`)

|  Change | Delta |            % | Samples | Callee                                         | Location    |
| ------: | ----: | -----------: | ------: | ---------------------------------------------- | ----------- |
| removed |    -3 | 12.5% → 0.0% |   3 → 0 | `AddPNode::Identity(PhaseGVN*)`                | `<unknown>` |
| removed |    -2 |  8.3% → 0.0% |   2 → 0 | `ConstraintCastNode::Identity(PhaseGVN*)`      | `<unknown>` |
| removed |    -2 |  8.3% → 0.0% |   2 → 0 | `LoadNode::Value(PhaseGVN*) const`             | `<unknown>` |
| removed |    -2 |  8.3% → 0.0% |   2 → 0 | `TypeInstPtr::add_offset(long) const`          | `<unknown>` |
| removed |    -1 |  4.2% → 0.0% |   1 → 0 | `Type::filter_helper(Type const*, bool) const` | `<unknown>` |

##### `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` (`<unknown>`)

|  Change | Delta |              % |   Samples | Callee                                                             | Location    |
| ------: | ----: | -------------: | --------: | ------------------------------------------------------------------ | ----------- |
|   -1.6% |    -9 | 99.8% → 100.0% | 577 → 568 | `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` | `<unknown>` |
| removed |    -1 |    0.2% → 0.0% |     1 → 0 | `stringStream::~stringStream()`                                    | `<unknown>` |

##### `IntervalWalker::walk_to(int)` (`<unknown>`)

| Change | Delta |             % | Samples | Callee                                 | Location    |
| -----: | ----: | ------------: | ------: | -------------------------------------- | ----------- |
| -32.1% |    -9 | 80.0% → 76.0% | 28 → 19 | `LinearScanWalker::activate_current()` | `<unknown>` |

##### `Compilation::emit_lir()` (`<unknown>`)

| Change | Delta |             % | Samples | Callee                                      | Location    |
| -----: | ----: | ------------: | ------: | ------------------------------------------- | ----------- |
|  -7.3% |    -6 | 82.8% → 85.4% | 82 → 76 | `LinearScan::do_linear_scan()`              | `<unknown>` |
| -23.5% |    -4 | 17.2% → 14.6% | 17 → 13 | `BlockList::iterate_forward(BlockClosure*)` | `<unknown>` |

##### `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` (`<unknown>`)

| Change | Delta |             % |   Samples | Callee                                                                                     | Location    |
| -----: | ----: | ------------: | --------: | ------------------------------------------------------------------------------------------ | ----------- |
|  -6.2% |   -13 | 36.2% → 34.5% | 209 → 196 | `Compile::Optimize()`                                                                      | `<unknown>` |
|  +1.7% |    +5 | 49.6% → 51.2% | 286 → 291 | `Compile::Code_Gen()`                                                                      | `<unknown>` |
| -75.0% |    -3 |   0.7% → 0.2% |     4 → 1 | `CallGenerator::for_inline(ciMethod*, float)`                                              | `<unknown>` |
|  -2.9% |    -2 | 12.1% → 12.0% |   70 → 68 | `ParseGenerator::generate(JVMState*)`                                                      | `<unknown>` |
| +40.0% |    +2 |   0.9% → 1.2% |     5 → 7 | `PhaseRemoveUseless::PhaseRemoveUseless(PhaseGVN*, Unique_Node_List&, Phase::PhaseNumber)` | `<unknown>` |

##### `CompileBroker::invoke_compiler_on_method(CompileTask*)` (`<unknown>`)

|  Change | Delta |             % |   Samples | Callee                                                                                | Location    |
| ------: | ----: | ------------: | --------: | ------------------------------------------------------------------------------------- | ----------- |
|   -1.7% |   -10 | 70.3% → 69.9% | 578 → 568 | `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)`             | `<unknown>` |
| +100.0% |    +2 |   0.2% → 0.5% |     2 → 4 | `ciEnv::get_method_from_handle(Method*)`                                              | `<unknown>` |
| +100.0% |    +2 |   0.2% → 0.5% |     2 → 4 | `CompilationLog::log_compile(JavaThread*, CompileTask*)`                              | `<unknown>` |
|   -0.4% |    -1 | 28.7% → 28.9% | 236 → 235 | `Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)`               | `<unknown>` |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `CompileBroker::update_compile_perf_data(CompilerThread*, methodHandle const&, bool)` | `<unknown>` |

##### `Compile::optimize_loops(PhaseIterGVN&, LoopOptsMode)` (`<unknown>`)

| Change | Delta |      % | Samples | Callee                                                  | Location    |
| -----: | ----: | -----: | ------: | ------------------------------------------------------- | ----------- |
| -15.3% |    -9 | 100.0% | 59 → 50 | `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` | `<unknown>` |

##### `LinearScanWalker::activate_current()` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                                   | Location    |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------- | ----------- |
|  -21.1% |    -4 | 67.9% → 78.9% | 19 → 15 | `LinearScanWalker::alloc_free_reg(Interval*)`            | `<unknown>` |
|  -66.7% |    -4 | 21.4% → 10.5% |   6 → 2 | `LinearScanWalker::split_and_spill_interval(Interval*)`  | `<unknown>` |
| removed |    -1 |   3.6% → 0.0% |   1 → 0 | `LinearScanWalker::split_for_spilling(Interval*)`        | `<unknown>` |
| removed |    -1 |   3.6% → 0.0% |   1 → 0 | `LinearScanWalker::alloc_locked_reg(Interval*)`          | `<unknown>` |
|     new |    +1 |   0.0% → 5.3% |   0 → 1 | `LinearScanWalker::combine_spilled_intervals(Interval*)` | `<unknown>` |

##### `LinearScan::allocate_registers()` (`<unknown>`)

| Change | Delta |             % | Samples | Callee                         | Location    |
| -----: | ----: | ------------: | ------: | ------------------------------ | ----------- |
| -30.3% |   -10 | 94.3% → 88.5% | 33 → 23 | `IntervalWalker::walk_to(int)` | `<unknown>` |

##### `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)` (`<unknown>`)

| Change | Delta |             % | Samples | Callee                                                   | Location    |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------- | ----------- |
| -21.7% |    -5 | 69.7% → 75.0% | 23 → 18 | `PhaseIdealLoop::build_loop_late_post_work(Node*, bool)` | `<unknown>` |
|    new |    +1 |   0.0% → 4.2% |   0 → 1 | `ProjNode::is_CFG() const`                               | `<unknown>` |
|    new |    +1 |   0.0% → 4.2% |   0 → 1 | `DecodeNKlassNode::Opcode() const`                       | `<unknown>` |
|    new |    +1 |   0.0% → 4.2% |   0 → 1 | `CatchNode::Opcode() const`                              | `<unknown>` |

##### `GraphBuilder::invoke(Bytecodes::Code)` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                                                           | Location    |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------------------------- | ----------- |
|  -14.6% |    -6 | 87.2% → 87.5% | 41 → 35 | `GraphBuilder::try_inline(ciMethod*, bool, bool, Bytecodes::Code, Instruction*)` | `<unknown>` |
|  +22.2% |    +2 | 19.1% → 27.5% |  9 → 11 | `ciBytecodeStream::get_method(bool&, ciSignature**)`                             | `<unknown>` |
|  -50.0% |    -1 |   4.3% → 2.5% |   2 → 1 | `GraphBuilder::append_with_bci(Instruction*, int)`                               | `<unknown>` |
| removed |    -1 |   2.1% → 0.0% |   1 → 0 | `ciMethod::resolve_invoke(ciKlass*, ciKlass*, bool, bool)`                       | `<unknown>` |
| removed |    -1 |   2.1% → 0.0% |   1 → 0 | `GraphBuilder::null_check(Instruction*)`                                         | `<unknown>` |

##### `LinearScan::do_linear_scan()` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                                                 | Location    |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------- | ----------- |
|  -25.7% |    -9 | 42.7% → 34.2% | 35 → 26 | `LinearScan::allocate_registers()`                                     | `<unknown>` |
|  +14.3% |    +2 | 17.1% → 21.1% | 14 → 16 | `LinearScan::assign_reg_num(GrowableArray<LIR_Op*>*, IntervalWalker*)` | `<unknown>` |
| removed |    -2 |   2.4% → 0.0% |   2 → 0 | `LinearScan::number_instructions()`                                    | `<unknown>` |
| removed |    -2 |   2.4% → 0.0% |   2 → 0 | `LIR_OpVisitState::visit(LIR_Op*)`                                     | `<unknown>` |
| +200.0% |    +2 |   1.2% → 3.9% |   1 → 3 | `LinearScan::eliminate_spill_moves()`                                  | `<unknown>` |

##### `LIR_Assembler::record_non_safepoint_debug_info()` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                                                                                                                                          | Location    |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
|  -40.0% |    -4 | 76.9% → 85.7% |  10 → 6 | `DebugInformationRecorder::describe_scope(int, methodHandle const&, ciMethod*, int, bool, bool, bool, bool, bool, bool, DebugToken*, DebugToken*, DebugToken*)` | `<unknown>` |
| removed |    -1 |   7.7% → 0.0% |   1 → 0 | `methodHandle::~methodHandle()`                                                                                                                                 | `<unknown>` |
| removed |    -1 |   7.7% → 0.0% |   1 → 0 | `OopRecorder::find_index(Metadata*)`                                                                                                                            | `<unknown>` |

##### `GraphBuilder::try_inline_full(ciMethod*, bool, bool, Bytecodes::Code, Instruction*)` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                                    | Location    |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------- | ----------- |
|  -50.0% |    -5 | 24.4% → 14.3% |  10 → 5 | `ciMethod::ensure_method_data()`                          | `<unknown>` |
| removed |    -2 |   4.9% → 0.0% |   2 → 0 | `CompilationPolicy::should_not_inline(ciEnv*, ciMethod*)` | `<unknown>` |
|  -40.0% |    -2 |  12.2% → 8.6% |   5 → 3 | `GraphBuilder::push_scope(ciMethod*, BlockBegin*)`        | `<unknown>` |
| removed |    -2 |   4.9% → 0.0% |   2 → 0 | `tlv_get_addr`                                            | `<unknown>` |
| +100.0% |    +1 |   2.4% → 5.7% |   1 → 2 | `GraphBuilder::append_with_bci(Instruction*, int)`        | `<unknown>` |

##### `GraphBuilder::try_inline(ciMethod*, bool, bool, Bytecodes::Code, Instruction*)` (`<unknown>`)

| Change | Delta |           % | Samples | Callee                                                                                | Location    |
| -----: | ----: | ----------: | ------: | ------------------------------------------------------------------------------------- | ----------- |
| -14.6% |    -6 |      100.0% | 41 → 35 | `GraphBuilder::try_inline_full(ciMethod*, bool, bool, Bytecodes::Code, Instruction*)` | `<unknown>` |
|    new |    +1 | 0.0% → 2.9% |   0 → 1 | `GraphBuilder::try_method_handle_inline(ciMethod*, bool)`                             | `<unknown>` |

##### `PhaseIdealLoop::split_if_with_blocks(VectorSet&, Node_Stack&)` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                                           | Location    |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------- | ----------- |
|  -50.0% |    -4 | 34.8% → 23.5% |   8 → 4 | `PhaseIdealLoop::split_if_with_blocks_post(Node*)`               | `<unknown>` |
| removed |    -2 |   8.7% → 0.0% |   2 → 0 | `PhaseIdealLoop::try_move_store_after_loop(Node*)`               | `<unknown>` |
|  -33.3% |    -2 | 26.1% → 23.5% |   6 → 4 | `PhaseIdealLoop::split_if_with_blocks_pre(Node*)`                | `<unknown>` |
|  -50.0% |    -2 | 17.4% → 11.8% |   4 → 2 | `PhaseIdealLoop::do_split_if(Node*, RegionNode**, RegionNode**)` | `<unknown>` |
| removed |    -1 |   4.3% → 0.0% |   1 → 0 | `Node::is_CFG() const`                                           | `<unknown>` |

##### `G1ParScanThreadState::trim_queue_to_threshold(unsigned int)` (`<unknown>`)

| Change | Delta |             % | Samples | Callee                                                                                                                                                                     | Location    |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| -40.0% |    -6 | 57.7% → 60.0% |  15 → 9 | `G1ParScanThreadState::do_copy_to_survivor_space(G1HeapRegionAttr, oopDesc*, markWord)`                                                                                    | `<unknown>` |
| -20.0% |    -1 | 19.2% → 26.7% |   5 → 4 | `fwd_copy_again`                                                                                                                                                           | `<unknown>` |
|    new |    +1 |   0.0% → 6.7% |   0 → 1 | `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>(G1ScanEvacuatedObjClosure*, oopDesc*, Klass*)` | `<unknown>` |

##### `InstanceKlass::link_class_impl(JavaThread*)` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                                 | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------ | ----------- |
|  -21.7% |    -5 | 67.6% → 75.0% | 23 → 18 | `Verifier::verify(InstanceKlass*, bool, JavaThread*)`  | `<unknown>` |
|  -75.0% |    -3 |  11.8% → 4.2% |   4 → 1 | `InstanceKlass::rewrite_class(JavaThread*)`            | `<unknown>` |
| removed |    -1 |   2.9% → 0.0% |   1 → 0 | `JvmtiExport::post_class_prepare(JavaThread*, Klass*)` | `<unknown>` |
| +100.0% |    +1 |   2.9% → 8.3% |   1 → 2 | `InstanceKlass::link_methods(JavaThread*)`             | `<unknown>` |
| removed |    -1 |   2.9% → 0.0% |   1 → 0 | `ObjectLocker::ObjectLocker(Handle, JavaThread*)`      | `<unknown>` |

##### `InstanceKlass::initialize_impl(JavaThread*)` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                                                                                                                                                | Location    |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
|  -27.3% |    -9 | 97.1% → 92.3% | 33 → 24 | `InstanceKlass::link_class_impl(JavaThread*)`                                                                                                                         | `<unknown>` |
| removed |    -1 |   2.9% → 0.0% |   1 → 0 | `InstanceKlass::find_method_index(Array<Method*> const*, Symbol const*, Symbol const*, Klass::OverpassLookupMode, Klass::StaticLookupMode, Klass::PrivateLookupMode)` | `<unknown>` |
|     new |    +1 |   0.0% → 3.8% |   0 → 1 | `ObjectSynchronizer::notifyall(Handle, JavaThread*)`                                                                                                                  | `<unknown>` |
|     new |    +1 |   0.0% → 3.8% |   0 → 1 | `PerfClassTraceTime::~PerfClassTraceTime()`                                                                                                                           | `<unknown>` |

##### `Parse::do_field_access(bool, bool)` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                       | Location    |
| ------: | ----: | ------------: | ------: | -------------------------------------------- | ----------- |
|  -55.6% |    -5 | 47.4% → 36.4% |   9 → 4 | `Parse::do_get_xxx(Node*, ciField*, bool)`   | `<unknown>` |
| removed |    -2 |  10.5% → 0.0% |   2 → 0 | `PhaseValues::uncached_makecon(Type const*)` | `<unknown>` |
|     new |    +2 |  0.0% → 18.2% |   0 → 2 | `ciBytecodeStream::get_field(bool&)`         | `<unknown>` |
|  -16.7% |    -1 | 31.6% → 45.5% |   6 → 5 | `Parse::do_put_xxx(Node*, ciField*, bool)`   | `<unknown>` |
| removed |    -1 |   5.3% → 0.0% |   1 → 0 | `Type::hashcons()`                           | `<unknown>` |

##### `InterpreterRuntime::_new(JavaThread*, ConstantPool*, int)` (`<unknown>`)

| Change | Delta |             % | Samples | Callee                                                                     | Location    |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------------------- | ----------- |
| -40.0% |    -8 | 90.9% → 80.0% | 20 → 12 | `InstanceKlass::initialize_impl(JavaThread*)`                              | `<unknown>` |
| +50.0% |    +1 |  9.1% → 20.0% |   2 → 3 | `ConstantPool::klass_at_impl(constantPoolHandle const&, int, JavaThread*)` | `<unknown>` |

##### `G1ParScanThreadState::do_copy_to_survivor_space(G1HeapRegionAttr, oopDesc*, markWord)` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                                                                                                                                                     | Location    |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
|  -33.3% |    -2 | 37.5% → 40.0% |   6 → 4 | `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>(G1ScanEvacuatedObjClosure*, oopDesc*, Klass*)` | `<unknown>` |
| removed |    -2 |  12.5% → 0.0% |   2 → 0 | `G1ParScanThreadState::start_partial_objarray(G1HeapRegionAttr, oopDesc*, oopDesc*)`                                                                                       | `<unknown>` |

##### `SymbolTable::new_symbol(char const*, int)` (`<unknown>`)

| Change | Delta |             % | Samples | Callee                                                       | Location    |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------ | ----------- |
| -75.0% |    -3 | 40.0% → 20.0% |   4 → 1 | `SymbolTable::do_lookup(char const*, int, unsigned long)`    | `<unknown>` |
| -50.0% |    -1 |         20.0% |   2 → 1 | `SymbolTable::lookup_shared(char const*, int, unsigned int)` | `<unknown>` |

##### `PredictedCallGenerator::generate(JVMState*)` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                                              | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------- | ----------- |
|  -24.0% |    -6 | 55.6% → 47.5% | 25 → 19 | `PredictedCallGenerator::generate(JVMState*)`                       | `<unknown>` |
|   -7.3% |    -3 | 91.1% → 95.0% | 41 → 38 | `ParseGenerator::generate(JVMState*)`                               | `<unknown>` |
| removed |    -3 |   6.7% → 0.0% |   3 → 0 | `GraphKit::null_check_common(Node*, BasicType, bool, Node**, bool)` | `<unknown>` |
| removed |    -1 |   2.2% → 0.0% |   1 → 0 | `ciMethod::get_method_at_bci(int, bool&, ciSignature**)`            | `<unknown>` |
| removed |    -1 |   2.2% → 0.0% |   1 → 0 | `LateInlineVirtualCallGenerator::generate(JVMState*)`               | `<unknown>` |

##### `ClassVerifier::verify_method(methodHandle const&, JavaThread*)` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                                                                                                       | Location    |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------------------------------------- | ----------- |
|     new |    +5 |  0.0% → 29.4% |   0 → 5 | `ClassVerifier::verify_field_instructions(RawBytecodeStream*, StackMapFrame*, constantPoolHandle const&, bool, JavaThread*)` | `<unknown>` |
|  -60.0% |    -3 | 22.7% → 11.8% |   5 → 2 | `StackMapFrame::set_locals_from_arg(methodHandle const&, VerificationType)`                                                  | `<unknown>` |
| removed |    -2 |   9.1% → 0.0% |   2 → 0 | `StackMapTable::StackMapTable(StackMapReader*, StackMapFrame*, unsigned short, unsigned short, char*, int, JavaThread*)`     | `<unknown>` |
|     new |    +2 |  0.0% → 11.8% |   0 → 2 | `ClassVerifier::generate_code_data(methodHandle const&, unsigned int, JavaThread*)`                                          | `<unknown>` |
| removed |    -1 |   4.5% → 0.0% |   1 → 0 | `ClassVerifier::verify_stackmap_table(unsigned short, unsigned short, StackMapFrame*, StackMapTable*, bool, JavaThread*)`    | `<unknown>` |

##### `Verifier::verify(InstanceKlass*, bool, JavaThread*)` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                                                          | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------- | ----------- |
|  -19.0% |    -4 | 91.3% → 94.4% | 21 → 17 | `ClassVerifier::verify_class(JavaThread*)`                                      | `<unknown>` |
| removed |    -1 |   4.3% → 0.0% |   1 → 0 | `Verifier::inference_verify(InstanceKlass*, char*, unsigned long, JavaThread*)` | `<unknown>` |
| removed |    -1 |   4.3% → 0.0% |   1 → 0 | `ClassVerifier::verify_method(methodHandle const&, JavaThread*)`                | `<unknown>` |

##### `Dict::Insert(void*, void*, bool)` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------- | ----------- |
|  -22.2% |    -2 | 52.9% → 58.3% |   9 → 7 | `Type::cmp(Type const*, Type const*)` | `<unknown>` |
| removed |    -2 |  11.8% → 0.0% |   2 → 0 | `Dict::doubhash()`                    | `<unknown>` |
| removed |    -2 |  11.8% → 0.0% |   2 → 0 | `TypeInstPtr::hash() const`           | `<unknown>` |
| removed |    -1 |   5.9% → 0.0% |   1 → 0 | `cmpkey(void const*, void const*)`    | `<unknown>` |
|     new |    +1 |   0.0% → 8.3% |   0 → 1 | `TypeNarrowPtr::hash() const`         | `<unknown>` |

##### `resolveCallAndSelectCandidate(FirFunctionCall, ResolutionMode, CollectionLiteralOuterCandidateContext)` (`org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`)

|  Change | Delta |              % | Samples | Callee                                                                                                                                                                                                                                                   | Location                                                        |
| ------: | ----: | -------------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
|  -21.7% |   -10 | 97.9% → 100.0% | 46 → 36 | `collectCandidates$default(FirCallResolver, FirQualifiedAccessExpression, Name, CallKind, boolean, FirFunctionCallOrigin, List, ResolutionContext, CandidateCollector, FirElement, ResolutionMode, CollectionLiteralOuterCandidateContext, int, Object)` | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`        |
| removed |    -1 |    2.1% → 0.0% |   1 → 0 | `getExplicitReceiver()`                                                                                                                                                                                                                                  | `org.jetbrains.kotlin.fir.expressions.impl.FirFunctionCallImpl` |

##### `resolveCallAndSelectCandidate$default(FirCallResolver, FirFunctionCall, ResolutionMode, CollectionLiteralOuterCandidateContext, int, Object)` (`org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`)

| Change | Delta |      % | Samples | Callee                                                                                                   | Location                                                 |
| -----: | ----: | -----: | ------: | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| -23.4% |   -11 | 100.0% | 47 → 36 | `resolveCallAndSelectCandidate(FirFunctionCall, ResolutionMode, CollectionLiteralOuterCandidateContext)` | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver` |

##### `exec(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

| Change | Delta |             % |   Samples | Callee                                                          | Location                                      |
| -----: | ----: | ------------: | --------: | --------------------------------------------------------------- | --------------------------------------------- |
|  -2.6% |    -9 | 97.4% → 97.7% | 343 → 334 | `execImpl(MessageCollector, Services, CommonCompilerArguments)` | `org.jetbrains.kotlin.cli.common.CLICompiler` |
| -11.1% |    -1 |   2.6% → 2.3% |     9 → 8 | `<clinit>()`                                                    | `org.jetbrains.kotlin.cli.common.ArgumentsKt` |

##### `collectCandidates(FirQualifiedAccessExpression, Name, CallKind, boolean, FirFunctionCallOrigin, List, ResolutionContext, CandidateCollector, FirElement, ResolutionMode, CollectionLiteralOuterCandidateContext)` (`org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`)

| Change | Delta |              % | Samples | Callee                                                                                                                  | Location                                                        |
| -----: | ----: | -------------: | ------: | ----------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| -19.3% |   -11 | 100.0% → 97.9% | 57 → 46 | `runResolver$default(FirTowerResolver, CallInfo, ResolutionContext, CandidateCollector, CandidateFactory, int, Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver` |
|    new |    +1 |    0.0% → 2.1% |   0 → 1 | `reduceCandidates(CandidateCollector, ResolutionContext)`                                                               | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`        |

##### `collectCandidates$default(FirCallResolver, FirQualifiedAccessExpression, Name, CallKind, boolean, FirFunctionCallOrigin, List, ResolutionContext, CandidateCollector, FirElement, ResolutionMode, CollectionLiteralOuterCandidateContext, int, Object)` (`org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`)

| Change | Delta |      % | Samples | Callee                                                                                                                                                                                                             | Location                                                 |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------- |
| -17.5% |   -10 | 100.0% | 57 → 47 | `collectCandidates(FirQualifiedAccessExpression, Name, CallKind, boolean, FirFunctionCallOrigin, List, ResolutionContext, CandidateCollector, FirElement, ResolutionMode, CollectionLiteralOuterCandidateContext)` | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver` |

##### `processLevel(TowerLevel, CallInfo, TowerGroup, ExplicitReceiverKind, Continuation)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask`)

|  Change | Delta |             % | Samples | Callee                                                                                                      | Location                                                                 |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
|  -18.8% |    -9 | 96.0% → 97.5% | 48 → 39 | `handleLevel(CandidateCollector, CandidateFactory, CallInfo, ExplicitReceiverKind, TowerGroup, TowerLevel)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerLevelHandler`         |
| removed |    -2 |   4.0% → 0.0% |   2 → 0 | `onSuccessfulLevel(TowerGroup)`                                                                             | `org.jetbrains.kotlin.fir.resolve.calls.tower.InvokeReceiverResolveTask` |
|     new |    +1 |   0.0% → 2.5% |   0 → 1 | `requestGroup(TowerGroup, Continuation)`                                                                    | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager`       |

##### `access$processLevel(FirBaseTowerResolveTask, TowerLevel, CallInfo, TowerGroup, ExplicitReceiverKind, Continuation)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask`)

| Change | Delta |      % | Samples | Callee                                                                               | Location                                                               |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------------------------ | ---------------------------------------------------------------------- |
| -20.0% |   -10 | 100.0% | 50 → 40 | `processLevel(TowerLevel, CallInfo, TowerGroup, ExplicitReceiverKind, Continuation)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask` |

##### `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|  Change | Delta |             % |   Samples | Callee                                         | Location                                                |
| ------: | ----: | ------------: | --------: | ---------------------------------------------- | ------------------------------------------------------- |
|   -2.4% |    -8 | 99.4% → 99.7% | 340 → 332 | `runPhasedPipeline(ArgumentsPipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| removed |    -1 |   0.3% → 0.0% |     1 → 0 | `disposeRootInWriteAction(Disposable)`         | `org.jetbrains.kotlin.cli.common.UtilsKt`               |

##### `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

| Change | Delta |      % |   Samples | Callee                                                                                              | Location                                                |
| -----: | ----: | -----: | --------: | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
|  -2.6% |    -9 | 100.0% | 342 → 333 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `execute(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

| Change | Delta |      % |   Samples | Callee                                                                                                                                        | Location                                                |
| -----: | ----: | -----: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
|  -2.6% |    -9 | 100.0% | 342 → 333 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

| Change | Delta |     % |   Samples | Callee                                                         | Location                                                |
| -----: | ----: | ----: | --------: | -------------------------------------------------------------- | ------------------------------------------------------- |
|  -2.6% |    -9 | 99.7% | 342 → 333 | `execute(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

| Change | Delta |      % |   Samples | Callee                                                                | Location                                     |
| -----: | ----: | -----: | --------: | --------------------------------------------------------------------- | -------------------------------------------- |
|  -2.6% |    -9 | 100.0% | 343 → 334 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

| Change | Delta |      % |   Samples | Callee                                                                 | Location                                     |
| -----: | ----: | -----: | --------: | ---------------------------------------------------------------------- | -------------------------------------------- |
|  -2.6% |    -9 | 100.0% | 343 → 334 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `resumeWith(Object)` (`kotlin.coroutines.jvm.internal.BaseContinuationImpl`)

|  Change | Delta |             % | Samples | Callee                  | Location                                                                                                      |
| ------: | ----: | ------------: | ------: | ----------------------- | ------------------------------------------------------------------------------------------------------------- |
|  -18.9% |    -7 | 64.9% → 63.8% | 37 → 30 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask$processLevel$6`                         |
|  +15.0% |    +3 | 35.1% → 48.9% | 20 → 23 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner$processCandidate$1`                      |
|  -60.0% |    -3 |   8.8% → 4.3% |   5 → 2 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirInvokeResolveTowerExtension$enqueueResolverTasksForInvoke$3` |
|  -22.2% |    -2 | 15.8% → 14.9% |   9 → 7 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver$enqueueResolutionTasks$2`                      |
| removed |    -1 |   1.8% → 0.0% |   1 → 0 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolveTask$runResolverForNoReceiver$1`                 |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001008000`)

| Change | Delta |      % |   Samples | Callee           | Location                                     |
| -----: | ----: | -----: | --------: | ---------------- | -------------------------------------------- |
|  -2.5% |    -9 | 100.0% | 360 → 351 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001009400`)

| Change | Delta |      % |   Samples | Callee                         | Location                                             |
| -----: | ----: | -----: | --------: | ------------------------------ | ---------------------------------------------------- |
|  -2.5% |    -9 | 100.0% | 360 → 351 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001008000` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

| Change | Delta |      % |   Samples | Callee                           | Location                                            |
| -----: | ----: | -----: | --------: | -------------------------------- | --------------------------------------------------- |
|  -2.5% |    -9 | 100.0% | 360 → 351 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001009400` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change | Delta |      % |   Samples | Callee                                           | Location                           |
| -----: | ----: | -----: | --------: | ------------------------------------------------ | ---------------------------------- |
|  -2.5% |    -9 | 100.0% | 360 → 351 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change | Delta |      % |   Samples | Callee                         | Location                                          |
| -----: | ----: | -----: | --------: | ------------------------------ | ------------------------------------------------- |
|  -2.5% |    -9 | 100.0% | 360 → 351 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

|  Change | Delta |           % |   Samples | Callee                     | Location                                          |
| ------: | ----: | ----------: | --------: | -------------------------- | ------------------------------------------------- |
|   -2.5% |    -9 |      100.0% | 360 → 351 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |
| removed |    -1 | 0.3% → 0.0% |     1 → 0 | `isCallerSensitive()`      | `java.lang.reflect.Method`                        |

##### `allocateInstance(Object)` (`java.lang.invoke.DirectMethodHandle`)

|  Change | Delta |            % | Samples | Callee                    | Location                   |
| ------: | ----: | -----------: | ------: | ------------------------- | -------------------------- |
| removed |    -4 | 66.7% → 0.0% |   4 → 0 | `allocateInstance(Class)` | `jdk.internal.misc.Unsafe` |

##### `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`)

|  Change | Delta |             % | Samples | Callee                      | Location                                           |
| ------: | ----: | ------------: | ------: | --------------------------- | -------------------------------------------------- |
|   -8.7% |    -6 | 98.6% → 98.4% | 69 → 63 | `inflate(byte[], int, int)` | `java.util.zip.Inflater`                           |
| removed |    -1 |   1.4% → 0.0% |   1 → 0 | `fill()`                    | `java.util.zip.ZipFile$ZipFileInflaterInputStream` |
|     new |    +1 |   0.0% → 1.6% |   0 → 1 | `fill()`                    | `java.util.zip.InflaterInputStream`                |

##### `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`)

|  Change | Delta |              % | Samples | Callee                                                                        | Location    |
| ------: | ----: | -------------: | ------: | ----------------------------------------------------------------------------- | ----------- |
|   -4.5% |    -3 | 97.1% → 100.0% | 66 → 63 | `Java_java_util_zip_Inflater_inflateBytesBytes`                               | `<unknown>` |
| removed |    -1 |    1.5% → 0.0% |   1 → 0 | `InterpreterRuntime::frequency_counter_overflow(JavaThread*, unsigned char*)` | `<unknown>` |

##### `inflate(byte[], int, int)` (`java.util.zip.Inflater`)

|  Change | Delta |             % | Samples | Callee                                                        | Location                 |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------- | ------------------------ |
|   -7.4% |    -5 | 98.6% → 98.4% | 68 → 63 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` | `java.util.zip.Inflater` |
| removed |    -1 |   1.4% → 0.0% |   1 → 0 | `monitorenter_nofpu Runtime1 stub`                            | `<unknown>`              |
|     new |    +1 |   0.0% → 1.6% |   0 → 1 | `monitorexit_nofpu Runtime1 stub`                             | `<unknown>`              |

##### `allocateInstance(Class)` (`jdk.internal.misc.Unsafe`)

|  Change | Delta |             % | Samples | Callee                                                   | Location    |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------- | ----------- |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | `Unsafe_AllocateInstance(JNIEnv_*, _jobject*, _jclass*)` | `<unknown>` |

##### `newInvokeSpecial(Object, Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|  Change | Delta |            % | Samples | Callee                                                     | Location                                                                                          |
| ------: | ----: | -----------: | ------: | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| removed |    -3 | 75.0% → 0.0% |   3 → 0 | `allocateInstance(Object)`                                 | `java.lang.invoke.DirectMethodHandle`                                                             |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `<init>(LinkedHashSet, ConstraintSystemCompletionContext)` | `org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter$$Lambda.0x000000e001699138` |

##### `linkToTargetMethod(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|  Change | Delta |             % | Samples | Callee                                     | Location                                     |
| ------: | ----: | ------------: | ------: | ------------------------------------------ | -------------------------------------------- |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | `newInvokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` (`java.lang.ClassLoader`)

| Change | Delta |             % | Samples | Callee                                    | Location                                                 |
| -----: | ----: | ------------: | ------: | ----------------------------------------- | -------------------------------------------------------- |
|  -3.4% |    -2 | 95.2% → 96.6% | 59 → 57 | `Java_java_lang_ClassLoader_defineClass1` | `<unknown>`                                              |
| +16.7% |    +2 | 19.4% → 23.7% | 12 → 14 | `loadClass(String)`                       | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |

##### `defineClass(String, byte[], int, int)` (`java.lang.ClassLoader`)

| Change | Delta |      % | Samples | Callee                                                    | Location                |
| -----: | ----: | -----: | ------: | --------------------------------------------------------- | ----------------------- |
|  -4.7% |    -3 | 100.0% | 64 → 61 | `defineClass(String, byte[], int, int, ProtectionDomain)` | `java.lang.ClassLoader` |

##### `newInvokeSpecial(Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|  Change | Delta |            % | Samples | Callee                                  | Location                                                                                 |
| ------: | ----: | -----------: | ------: | --------------------------------------- | ---------------------------------------------------------------------------------------- |
| removed |    -3 | 75.0% → 0.0% |   3 → 0 | `allocateInstance(Object)`              | `java.lang.invoke.DirectMethodHandle`                                                    |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `<init>(AbstractFir2IrLazyDeclaration)` | `org.jetbrains.kotlin.fir.lazy.AbstractFir2IrLazyDeclaration$$Lambda.0x000000e001795668` |

##### `linkToTargetMethod(Object, Object)` (`java.lang.invoke.Invokers$Holder`)

| Change | Delta |      % | Samples | Callee                             | Location                                     |
| -----: | ----: | -----: | ------: | ---------------------------------- | -------------------------------------------- |
| -75.0% |    -3 | 100.0% |   4 → 1 | `newInvokeSpecial(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `newInstanceWithCaller(Object[], boolean, Class)` (`java.lang.reflect.Constructor`)

|  Change | Delta |            % | Samples | Callee                         | Location                                               |
| ------: | ----: | -----------: | ------: | ------------------------------ | ------------------------------------------------------ |
| removed |    -2 | 66.7% → 0.0% |   2 → 0 | `acquireConstructorAccessor()` | `java.lang.reflect.Constructor`                        |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `newInstance(Object[])`        | `jdk.internal.reflect.DirectConstructorHandleAccessor` |

##### `newInstance(Object[])` (`java.lang.reflect.Constructor`)

|  Change | Delta |             % | Samples | Callee                                            | Location                        |
| ------: | ----: | ------------: | ------: | ------------------------------------------------- | ------------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `newInstanceWithCaller(Object[], boolean, Class)` | `java.lang.reflect.Constructor` |

##### `I2C/C2I adapters` (`<unknown>`)

| Change | Delta |            % | Samples | Callee                                                           | Location    |
| -----: | ----: | -----------: | ------: | ---------------------------------------------------------------- | ----------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `SharedRuntime::fixup_callers_callsite(Method*, unsigned char*)` | `<unknown>` |

##### `I2C/C2I adapters(0xbbb)` (`<unknown>`)

|  Change | Delta |            % | Samples | Callee                  | Location    |
| ------: | ----: | -----------: | ------: | ----------------------- | ----------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `sys_icache_invalidate` | `<unknown>` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in samples collected in their leaf frame.

|  Change | Delta |           % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ------: | ----: | ----------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +116.7% |    +7 | 0.4% → 1.0% |  6 → 13 | `__psynch_cvwait` ← `PlatformMonitor::wait(unsigned long long)` ← `Monitor::wait(unsigned long long)` ← `CompileQueue::get(CompilerThread*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  +83.3% |    +5 | 0.4% → 0.8% |  6 → 11 | `PhaseChaitin::elide_copy(Node*, int, Block*, Node_List*, Node_List*, bool)` ← `PhaseChaitin::post_allocate_copy_removal()` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| +250.0% |    +5 | 0.1% → 0.5% |   2 → 7 | `PhaseChaitin::Select()` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| +500.0% |    +5 | 0.1% → 0.4% |   1 → 6 | `PhaseCFG::partial_latency_of_defs(Node*)` ← `PhaseCFG::global_code_motion()` ← `PhaseCFG::do_global_code_motion()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|     new |    +5 | 0.0% → 0.4% |   0 → 5 | `OopMapSort::sort()` ← `ImmutableOopMap::ImmutableOopMap(OopMap const*)` ← `ImmutableOopMapBuilder::build()` ← `ImmutableOopMapSet::build_from(OopMapSet const*)` ← `CodeBlob::CodeBlob(char const*, CompilerType, CodeBlobLayout const&, CodeBuffer*, int, int, OopMapSet*, bool, bool)` ← `CompiledMethod::CompiledMethod(Method*, char const*, CompilerType, int, int, CodeBuffer*, int, int, OopMapSet*, bool, bool)` ← `nmethod::nmethod(Method*, CompilerType, int, int, int, CodeOffsets*, int, DebugInformationRecorder*, Dependencies*, CodeBuffer*, int, OopMapSet*, ExceptionHandlerTable*, ImplicitExceptionTable*, AbstractCompiler*, CompLevel, char*, int, JVMCINMethodData*)` ← `nmethod::new_nmethod(methodHandle const&, int, int, CodeOffsets*, int, DebugInformationRecorder*, Dependencies*, CodeBuffer*, int, OopMapSet*, ExceptionHandlerTable*, ImplicitExceptionTable*, AbstractCompiler*, CompLevel, char*, int, JVMCINMethodData*)` ← `ciEnv::register_method(ciMethod*, int, CodeOffsets*, int, CodeBuffer*, int, OopMapSet*, ExceptionHandlerTable*, ImplicitExceptionTable*, AbstractCompiler*, bool, bool, bool, int, RTMState)` ← `Compilation::compile_method()` ← `Compilation::Compilation(AbstractCompiler*, ciEnv*, ciMethod*, int, BufferBlob*, bool, DirectiveSet*)` ← `Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start` |
|     new |    +5 | 0.0% → 0.4% |   0 → 5 | `GraphBuilder::iterate_bytecodes_for_block(int)` ← `GraphBuilder::iterate_all_blocks(bool)` ← `GraphBuilder::GraphBuilder(Compilation*, IRScope*)` ← `IRScope::IRScope(Compilation*, IRScope*, int, ciMethod*, int, bool)` ← `IR::IR(Compilation*, ciMethod*, int)` ← `Compilation::build_hir()` ← `Compilation::compile_java_method()` ← `Compilation::compile_method()` ← `Compilation::Compilation(AbstractCompiler*, ciEnv*, ciMethod*, int, BufferBlob*, bool, DirectiveSet*)` ← `Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| +200.0% |    +4 | 0.1% → 0.4% |   2 → 6 | `Matcher::match_tree(Node const*)` ← `Matcher::xform(Node*, int)` ← `Matcher::match()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| +400.0% |    +4 | 0.1% → 0.4% |   1 → 5 | `updateBytesCRC32` ← `updateBytes(int, byte[], int, int)` (`java.util.zip.CRC32`) ← `update(byte[], int, int)` ← `read(byte[], int, int)` (`java.util.zip.ZipInputStream`) ← `read(byte[])` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|     new |    +4 | 0.0% → 0.3% |   0 → 4 | `IndexSetIterator::advance_and_next()` ← `PhaseChaitin::build_ifg_physical(ResourceArea*)` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|     new |    +4 | 0.0% → 0.3% |   0 → 4 | `LIR_OpVisitState::visit(LIR_Op*)` ← `LinearScan::build_intervals()` ← `LinearScan::do_linear_scan()` ← `Compilation::emit_lir()` ← `Compilation::compile_java_method()` ← `Compilation::compile_method()` ← `Compilation::Compilation(AbstractCompiler*, ciEnv*, ciMethod*, int, BufferBlob*, bool, DirectiveSet*)` ← `Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|     new |    +4 | 0.0% → 0.3% |   0 → 4 | `ValueStack::pin_stack_for_linear_scan()` ← `IR::compute_use_counts()` ← `Compilation::build_hir()` ← `Compilation::compile_java_method()` ← `Compilation::compile_method()` ← `Compilation::Compilation(AbstractCompiler*, ciEnv*, ciMethod*, int, BufferBlob*, bool, DirectiveSet*)` ← `Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| +300.0% |    +3 | 0.1% → 0.3% |   1 → 4 | `PhaseCCP::transform(Node*)` ← `PhaseCCP::do_transform()` ← `Compile::Optimize()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| +150.0% |    +3 | 0.1% → 0.4% |   2 → 5 | `MachNode::rematerialize() const` ← `PhaseChaitin::Split(unsigned int, ResourceArea*)` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| +300.0% |    +3 | 0.1% → 0.3% |   1 → 4 | `RegMask::is_aligned_pairs() const` ← `PhaseChaitin::get_spillcopy_wide(MachSpillCopyNode::SpillType, Node*, Node*, unsigned int)` ← `PhaseChaitin::split_DEF(Node*, Block*, int, unsigned int, Node**, Node**, GrowableArray<unsigned int>, int)` ← `PhaseChaitin::Split(unsigned int, ResourceArea*)` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| +300.0% |    +3 | 0.1% → 0.3% |   1 → 4 | `Compile::identify_useful_nodes(Unique_Node_List&)` ← `PhaseRemoveUseless::PhaseRemoveUseless(PhaseGVN*, Unique_Node_List&, Phase::PhaseNumber)` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| +100.0% |    +3 | 0.2% → 0.4% |   3 → 6 | `LinearScan::assign_reg_num(GrowableArray<LIR_Op*>*, IntervalWalker*)` ← `LinearScan::do_linear_scan()` ← `Compilation::emit_lir()` ← `Compilation::compile_java_method()` ← `Compilation::compile_method()` ← `Compilation::Compilation(AbstractCompiler*, ciEnv*, ciMethod*, int, BufferBlob*, bool, DirectiveSet*)` ← `Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `semaphore_wait_trap` ← `WorkerThread::run()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `PhaseCCP::push_more_uses(Unique_Node_List&, Node*, Node const*) const` ← `PhaseCCP::push_child_nodes_to_worklist(Unique_Node_List&, Node*) const` ← `PhaseCCP::analyze()` ← `PhaseCCP::PhaseCCP(PhaseIterGVN*)` ← `Compile::Optimize()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `Node_Backward_Iterator::next()` ← `PhaseCFG::global_code_motion()` ← `PhaseCFG::do_global_code_motion()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `PhaseIterGVN::add_users_to_worklist(Node*)` ← `PhaseIterGVN::PhaseIterGVN(PhaseGVN*)` ← `Compile::Optimize()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

### Improvements

Call stacks with the largest decrease in samples collected in their leaf frame.

|  Change | Delta |           % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|  -83.3% |    -5 | 0.4% → 0.1% |   6 → 1 | `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)` ← `PhaseIdealLoop::build_and_optimize()` ← `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` ← `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` ← `Compile::Optimize()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  -62.5% |    -5 | 0.6% → 0.2% |   8 → 3 | `PhaseChaitin::post_allocate_copy_removal()` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| removed |    -4 | 0.3% → 0.0% |   4 → 0 | `G1ParScanThreadState::do_copy_to_survivor_space(G1HeapRegionAttr, oopDesc*, markWord)` ← `G1ParScanThreadState::trim_queue_to_threshold(unsigned int)` ← `G1ParScanThreadState::steal_and_trim_queue(GenericTaskQueueSet<OverflowTaskQueue<ScannerTask, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>*)` ← `G1ParEvacuateFollowersClosure::do_void()` ← `G1EvacuateRegionsTask::evacuate_live_objects(G1ParScanThreadState*, unsigned int)` ← `G1EvacuateRegionsBaseTask::work(unsigned int)` ← `WorkerThread::run()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  -42.9% |    -3 | 0.5% → 0.3% |   7 → 4 | `PhaseAggressiveCoalesce::insert_copies(Matcher&)` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  -60.0% |    -3 | 0.4% → 0.1% |   5 → 2 | `PhaseIdealLoop::Dominators()` ← `PhaseIdealLoop::build_and_optimize()` ← `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` ← `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` ← `Compile::Optimize()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  -60.0% |    -3 | 0.4% → 0.1% |   5 → 2 | `DebugInformationRecorder::describe_scope(int, methodHandle const&, ciMethod*, int, bool, bool, bool, bool, bool, bool, DebugToken*, DebugToken*, DebugToken*)` ← `LIR_Assembler::record_non_safepoint_debug_info()` ← `LIR_Assembler::process_debug_info(LIR_Op*)` ← `LIR_Assembler::emit_lir_list(LIR_List*)` ← `LIR_Assembler::emit_code(BlockList*)` ← `Compilation::emit_code_body()` ← `Compilation::compile_java_method()` ← `Compilation::compile_method()` ← `Compilation::Compilation(AbstractCompiler*, ciEnv*, ciMethod*, int, BufferBlob*, bool, DirectiveSet*)` ← `Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `G1CardSet::add_card(unsigned int, unsigned int, bool)` ← `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>(G1RebuildRemSetClosure*, oopDesc*, Klass*)` ← `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object(HeapRegion*, HeapWordImpl**)` ← `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_to_pb(HeapRegion*, HeapWordImpl**, HeapWordImpl**)` ← `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_region(HeapRegion*, HeapWordImpl**)` ← `HeapRegionManager::par_iterate(HeapRegionClosure*, HeapRegionClaimer*, unsigned int) const` ← `G1RebuildRSAndScrubTask::work(unsigned int)` ← `WorkerThread::run()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `Node::pinned() const` ← `PhaseIdealLoop::build_and_optimize()` ← `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` ← `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` ← `Compile::Optimize()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `PhaseCFG::schedule_pinned_nodes(VectorSet&)` ← `PhaseCFG::global_code_motion()` ← `PhaseCFG::do_global_code_motion()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  -60.0% |    -3 | 0.4% → 0.1% |   5 → 2 | `inflate` ← `Java_java_util_zip_Inflater_inflateBytesBytes` ← `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`) ← `inflate(byte[], int, int)` ← `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`) ← `read(byte[], int, int)` (`java.util.zip.ZipInputStream`) ← `read(byte[])` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `PhaseOutput::fill_buffer(CodeBuffer*, unsigned int*)` ← `PhaseOutput::Output()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `PhaseIFG::effective_degree(unsigned int) const` ← `PhaseIFG::Compute_Effective_Degree()` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  -37.5% |    -3 | 0.6% → 0.4% |   8 → 5 | `LinearScan::build_intervals()` ← `LinearScan::do_linear_scan()` ← `Compilation::emit_lir()` ← `Compilation::compile_java_method()` ← `Compilation::compile_method()` ← `Compilation::Compilation(AbstractCompiler*, ciEnv*, ciMethod*, int, BufferBlob*, bool, DirectiveSet*)` ← `Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  -66.7% |    -2 | 0.2% → 0.1% |   3 → 1 | `Node::dominates(Node*, Node_List&)` ← `MemNode::all_controls_dominate(Node*, Node*)` ← `InitializeNode::detect_init_independence(Node*, PhaseGVN*)` ← `InitializeNode::can_capture_store(StoreNode*, PhaseGVN*, bool)` ← `StoreNode::Ideal(PhaseGVN*, bool)` ← `PhaseIterGVN::transform_old(Node*)` ← `PhaseIterGVN::optimize()` ← `Compile::Optimize()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  -66.7% |    -2 | 0.2% → 0.1% |   3 → 1 | `IndexSetIterator::advance_and_next()` ← `PhaseLive::add_liveout(Block_List&, Block*, IndexSet*, VectorSet&)` ← `PhaseLive::compute(unsigned int)` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `PhaseCFG::move_to_end(Block*, unsigned int)` ← `PhaseCFG::remove_empty_blocks()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `PhaseChaitin::compute_initial_block_pressure(Block*, IndexSet*, PhaseChaitin::Pressure&, PhaseChaitin::Pressure&, double)` ← `PhaseChaitin::build_ifg_physical(ResourceArea*)` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `RegionNode::is_unreachable_from_root(PhaseGVN const*) const` ← `RegionNode::is_unreachable_region(PhaseGVN const*)` ← `RegionNode::Ideal(PhaseGVN*, bool)` ← `PhaseIterGVN::transform_old(Node*)` ← `PhaseIterGVN::optimize()` ← `Compile::Optimize()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  -50.0% |    -2 | 0.3% → 0.1% |   4 → 2 | `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)` ← `PhaseIdealLoop::build_and_optimize()` ← `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` ← `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` ← `Compile::optimize_loops(PhaseIterGVN&, LoopOptsMode)` ← `Compile::Optimize()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `requiresEmptyStackOnEntry(MethodNode)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen$Companion`) ← `access$requiresEmptyStackOnEntry(IrInlineCodegen$Companion, MethodNode)` ← `inlineCall(SMAPAndMethodNode, boolean, IrFunctionAccessExpression)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`) ← `genInlineCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` ← `genCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCallGenerator`) ← `visitCall(IrCall, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitCall(IrCall, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen(JvmIrCodegenFactory$CodegenInput)` ← `runCodegen$org_jetbrains_kotlin_cli_jvm(JvmIrCodegenFactory$CodegenInput, GenerationState, JvmIrCodegenFactory, BaseDiagnosticsCollector, CompilerConfiguration, boolean)` (`org.jetbrains.kotlin.cli.jvm.compiler.KotlinToJVMBytecodeCompiler`) ← `executePhase(JvmFir2IrPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`) ← `executePhase(PipelineArtifact)` ← `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`) ← `phaseBody(LoggingContext, Object)` ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`) ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.backend.common.phaser.CompositePhase`) ← `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`) ← `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`) ← `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` ← `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` ← `execute(CommonCompilerArguments, Services, MessageCollector)` ← `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` ← `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`) ← `exec(MessageCollector, Services, CommonCompilerArguments)` ← `exec(PrintStream, Services, MessageRenderer, String[])` ← `exec(PrintStream, MessageRenderer, String[])` ← `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`) ← `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` ← `doMain(CLICompiler, String[])` ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`) ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000e001008400`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000e001009800`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])` |

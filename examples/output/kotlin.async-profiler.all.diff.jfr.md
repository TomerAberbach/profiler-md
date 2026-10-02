# Sampling profile diff

Collected 3,332 samples → 1,343 samples (-1,989 samples, -59.7%).

| Category          |  Change |  Delta |             % |     Samples |
| ----------------- | ------: | -----: | ------------: | ----------: |
| Compiler          |  -38.0% |   -387 | 30.6% → 47.1% | 1,019 → 632 |
| Native            |  -71.4% | -1,238 | 52.1% → 37.0% | 1,735 → 497 |
| Ours              |  -61.4% |   -224 | 11.0% → 10.5% |   365 → 141 |
| Standard library  |  -61.0% |   -100 |   4.9% → 4.8% |    164 → 64 |
| JIT               |  -81.3% |    -39 |   1.4% → 0.7% |      48 → 9 |
| Garbage collector | removed |     -1 |  <0.1% → 0.0% |       1 → 0 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |            % | Samples | Function                                                                           | Location                  |
| ------: | ----: | -----------: | ------: | ---------------------------------------------------------------------------------- | ------------------------- |
|     new |    +5 |  0.0% → 0.4% |   0 → 5 | `UseCountComputer::visit`                                                          | `libjvm.dylib`            |
|     new |    +4 |  0.0% → 0.3% |   0 → 4 | `CodeHeap::block_start`                                                            | `libjvm.dylib`            |
| +300.0% |    +3 | <0.1% → 0.3% |   1 → 4 | `PhaseIterGVN::subsume_node`                                                       | `libjvm.dylib`            |
| +100.0% |    +3 |  0.1% → 0.4% |   3 → 6 | `PhaseIdealLoop::build_loop_tree`                                                  | `libjvm.dylib`            |
|  +75.0% |    +3 |  0.1% → 0.5% |   4 → 7 | `Arena::contains`                                                                  | `libjvm.dylib`            |
| +300.0% |    +3 | <0.1% → 0.3% |   1 → 4 | `OopMapValue::write_on`                                                            | `libjvm.dylib`            |
|     new |    +3 |  0.0% → 0.2% |   0 → 3 | `GrowableArrayWithAllocator<Instruction*, GrowableArray<Instruction*>>::expand_to` | `libjvm.dylib`            |
| +300.0% |    +3 | <0.1% → 0.3% |   1 → 4 | `ValueRecorder<Metadata*>::maybe_find_index`                                       | `libjvm.dylib`            |
| +300.0% |    +3 | <0.1% → 0.3% |   1 → 4 | `PhaseCCP::transform`                                                              | `libjvm.dylib`            |
| +150.0% |    +3 |  0.1% → 0.4% |   2 → 5 | `Node::set_req_X`                                                                  | `libjvm.dylib`            |
| +300.0% |    +3 | <0.1% → 0.3% |   1 → 4 | `PhaseIdealLoop::build_loop_tree_impl`                                             | `libjvm.dylib`            |
|     new |    +3 |  0.0% → 0.2% |   0 → 3 | `IfFalseNode::Opcode`                                                              | `libjvm.dylib`            |
| +100.0% |    +2 |  0.1% → 0.3% |   2 → 4 | `ConnectionGraph::compute_escape`                                                  | `libjvm.dylib`            |
| +100.0% |    +2 |  0.1% → 0.3% |   2 → 4 | `PhaseChaitin::Select`                                                             | `libjvm.dylib`            |
| +100.0% |    +2 |  0.1% → 0.3% |   2 → 4 | `Compile::disconnect_useless_nodes`                                                | `libjvm.dylib`            |
| +200.0% |    +2 | <0.1% → 0.2% |   1 → 3 | `Node::unique_ctrl_out_or_null`                                                    | `libjvm.dylib`            |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `ClassFileParser::parse_constant_pool`                                             | `libjvm.dylib`            |
| +200.0% |    +2 | <0.1% → 0.2% |   1 → 3 | `ClassVerifier::verify_method`                                                     | `libjvm.dylib`            |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `LinkResolver::resolve_field`                                                      | `libjvm.dylib`            |
|  +50.0% |    +2 |  0.1% → 0.4% |   4 → 6 | `pthread_mutex_lock`                                                               | `libsystem_pthread.dylib` |

##### Native

|  Change | Delta |            % | Samples | Function                                                                                               | Location                  |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------------------------ | ------------------------- |
|     new |    +5 |  0.0% → 0.4% |   0 → 5 | `UseCountComputer::visit`                                                                              | `libjvm.dylib`            |
|     new |    +4 |  0.0% → 0.3% |   0 → 4 | `CodeHeap::block_start`                                                                                | `libjvm.dylib`            |
|  +75.0% |    +3 |  0.1% → 0.5% |   4 → 7 | `Arena::contains`                                                                                      | `libjvm.dylib`            |
|     new |    +3 |  0.0% → 0.2% |   0 → 3 | `GrowableArrayWithAllocator<Instruction*, GrowableArray<Instruction*>>::expand_to`                     | `libjvm.dylib`            |
| +300.0% |    +3 | <0.1% → 0.3% |   1 → 4 | `ValueRecorder<Metadata*>::maybe_find_index`                                                           | `libjvm.dylib`            |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `ClassFileParser::parse_constant_pool`                                                                 | `libjvm.dylib`            |
| +200.0% |    +2 | <0.1% → 0.2% |   1 → 3 | `ClassVerifier::verify_method`                                                                         | `libjvm.dylib`            |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `LinkResolver::resolve_field`                                                                          | `libjvm.dylib`            |
|  +50.0% |    +2 |  0.1% → 0.4% |   4 → 6 | `pthread_mutex_lock`                                                                                   | `libsystem_pthread.dylib` |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `HierarchyVisitor<FindMethodsByErasedSig>::run`                                                        | `libjvm.dylib`            |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `arrayof_oop_disjoint_arraycopy`                                                                       | `<unknown>`               |
| +100.0% |    +2 |  0.1% → 0.3% |   2 → 4 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` | `libjvm.dylib`            |
| +200.0% |    +2 | <0.1% → 0.2% |   1 → 3 | `CodeHeap::search_freelist`                                                                            | `libjvm.dylib`            |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `void OopOopIterateDispatch<G1ScanCardClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>`      | `libjvm.dylib`            |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `HeapWordImpl** HeapRegion::oops_on_memregion_iterate<G1ScanCardClosure, true>`                        | `libjvm.dylib`            |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `GrowableArrayWithAllocator<LIR_Op*, GrowableArray<LIR_Op*>>::expand_to`                               | `libjvm.dylib`            |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `klassVtable::update_inherited_vtable`                                                                 | `libjvm.dylib`            |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `StackMapReader::parse_verification_type`                                                              | `libjvm.dylib`            |
|     new |    +1 |  0.0% → 0.1% |   0 → 1 | `Parse::do_all_blocks`                                                                                 | `libjvm.dylib`            |
|     new |    +1 |  0.0% → 0.1% |   0 → 1 | `ThreadCritical::ThreadCritical`                                                                       | `libjvm.dylib`            |

##### Compiler

|  Change | Delta |            % | Samples | Function                                       | Location       |
| ------: | ----: | -----------: | ------: | ---------------------------------------------- | -------------- |
| +300.0% |    +3 | <0.1% → 0.3% |   1 → 4 | `PhaseIterGVN::subsume_node`                   | `libjvm.dylib` |
| +100.0% |    +3 |  0.1% → 0.4% |   3 → 6 | `PhaseIdealLoop::build_loop_tree`              | `libjvm.dylib` |
| +300.0% |    +3 | <0.1% → 0.3% |   1 → 4 | `OopMapValue::write_on`                        | `libjvm.dylib` |
| +300.0% |    +3 | <0.1% → 0.3% |   1 → 4 | `PhaseCCP::transform`                          | `libjvm.dylib` |
| +150.0% |    +3 |  0.1% → 0.4% |   2 → 5 | `Node::set_req_X`                              | `libjvm.dylib` |
| +300.0% |    +3 | <0.1% → 0.3% |   1 → 4 | `PhaseIdealLoop::build_loop_tree_impl`         | `libjvm.dylib` |
|     new |    +3 |  0.0% → 0.2% |   0 → 3 | `IfFalseNode::Opcode`                          | `libjvm.dylib` |
| +100.0% |    +2 |  0.1% → 0.3% |   2 → 4 | `ConnectionGraph::compute_escape`              | `libjvm.dylib` |
| +100.0% |    +2 |  0.1% → 0.3% |   2 → 4 | `PhaseChaitin::Select`                         | `libjvm.dylib` |
| +100.0% |    +2 |  0.1% → 0.3% |   2 → 4 | `Compile::disconnect_useless_nodes`            | `libjvm.dylib` |
| +200.0% |    +2 | <0.1% → 0.2% |   1 → 3 | `Node::unique_ctrl_out_or_null`                | `libjvm.dylib` |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `Matcher::pd_clone_node`                       | `libjvm.dylib` |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `TypeInstPtr::add_offset`                      | `libjvm.dylib` |
| +200.0% |    +2 | <0.1% → 0.2% |   1 → 3 | `PhaseChaitin::compute_initial_block_pressure` | `libjvm.dylib` |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `TypeAryPtr::add_offset`                       | `libjvm.dylib` |
|  +66.7% |    +2 |  0.1% → 0.4% |   3 → 5 | `PhaseChaitin::merge_multidefs`                | `libjvm.dylib` |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `PhaseIFG::init`                               | `libjvm.dylib` |
| +200.0% |    +2 | <0.1% → 0.2% |   1 → 3 | `PhaseChaitin::Simplify`                       | `libjvm.dylib` |
| +200.0% |    +2 | <0.1% → 0.2% |   1 → 3 | `OopMapSort::sort`                             | `libjvm.dylib` |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `MachNode::rematerialize`                      | `libjvm.dylib` |

##### Ours

| Change | Delta |           % | Samples | Function                                                                                                                                                        | Location                                                                                                                                                                                          |
| -----: | ----: | ----------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    new |    +2 | 0.0% → 0.1% |   0 → 2 | `dispatchReceiverClassTypeOrNull(FirCallableDeclaration)`                                                                                                       | `org.jetbrains.kotlin.fir.ClassMembersKt`                                                                                                                                                         |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `readMessage(Parser, ExtensionRegistryLite)`                                                                                                                    | `org.jetbrains.kotlin.protobuf.CodedInputStream`                                                                                                                                                  |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `parsePostfixExpression()`                                                                                                                                      | `org.jetbrains.kotlin.parsing.KotlinExpressionParsing`                                                                                                                                            |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `convertCallExpression(LighterASTNode)`                                                                                                                         | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirExpressionBuilder`                                                                                                                   |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `transformTypeRef(FirTypeRef, Object)`                                                                                                                          | `org.jetbrains.kotlin.fir.resolve.transformers.FirSpecificTypeResolverTransformer`                                                                                                                |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `loadProperty(ProtoBuf$Property, ProtoBuf$Class, FirClassSymbol)`                                                                                               | `org.jetbrains.kotlin.fir.deserialization.FirMemberDeserializer`                                                                                                                                  |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `directExpansionType(ConeClassLikeType, FirSession, Function1)`                                                                                                 | `org.jetbrains.kotlin.fir.resolve.TypeExpansionUtilsKt`                                                                                                                                           |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `asRigidType(KotlinTypeMarker)`                                                                                                                                 | `org.jetbrains.kotlin.fir.types.ConeTypeContext`                                                                                                                                                  |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `transformChildren(FirTransformer, Object)`                                                                                                                     | `org.jetbrains.kotlin.fir.types.impl.FirUserTypeRefImpl`                                                                                                                                          |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `invoke(Object, Object)`                                                                                                                                        | `org.jetbrains.kotlin.fir.resolve.providers.impl.FirTypeResolverImpl$$Lambda.0x00000070015c5490 → org.jetbrains.kotlin.fir.resolve.providers.impl.FirTypeResolverImpl$$Lambda.0x000000f0015ca850` |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `resolveStatus(FirDeclaration, FirDeclarationStatus, FirClass, FirProperty, boolean, List)`                                                                     | `org.jetbrains.kotlin.fir.resolve.transformers.FirStatusResolver`                                                                                                                                 |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `parseParameterizedClassRefSignature(CharacterIterator, ClassifierResolutionContext)`                                                                           | `org.jetbrains.kotlin.load.java.structure.impl.classFiles.BinaryClassSignatureParser`                                                                                                             |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `invokeSuspend(Object)`                                                                                                                                         | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner$processCandidate$1`                                                                                                          |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `runCompletionForCall(Candidate, ConstraintSystemCompletionMode, FirExpression, ConeKotlinType, PostponedArgumentsAnalyzer)`                                    | `org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter`                                                                                                                                     |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `transformBlock(FirBlock, ResolutionMode)`                                                                                                                      | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`                                                                                          |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `_get_referenceApproximateToSuperType_$lambda$0(AbstractTypeApproximator, TypeApproximatorConfiguration, AbstractTypeApproximator$Cache, RigidTypeMarker, int)` | `org.jetbrains.kotlin.types.AbstractTypeApproximator`                                                                                                                                             |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `approximateToSuperType(KotlinTypeMarker, TypeApproximatorConfiguration, Map)`                                                                                  | `org.jetbrains.kotlin.types.AbstractTypeApproximator`                                                                                                                                             |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `addInitialEqualityConstraint(ConstraintInjector$Context, KotlinTypeMarker, KotlinTypeMarker, ConstraintPosition)`                                              | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector`                                                                                                                      |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `transformNamedFunction(FirNamedFunction, ResolutionMode)`                                                                                                      | `org.jetbrains.kotlin.fir.resolve.transformers.plugin.FirDeclarationsResolveTransformerForAnnotationArguments`                                                                                    |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `extractValue(AbstractArrayMapOwner)`                                                                                                                           | `org.jetbrains.kotlin.util.AbstractArrayMapOwner$AbstractArrayMapAccessor`                                                                                                                        |

##### Standard library

| Change | Delta |           % | Samples | Function                                                                      | Location                                                                            |
| -----: | ----: | ----------: | ------: | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `forName(String, boolean, ClassLoader, Class)`                                | `java.lang.Class`                                                                   |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `linkMethodHandleConstant(byte, Class, String, Object)`                       | `java.lang.invoke.MethodHandles$Lookup`                                             |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `linkCallSiteImpl(Class, MethodHandle, String, MethodType, Object, Object[])` | `java.lang.invoke.MethodHandleNatives`                                              |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `compileToBytecode()`                                                         | `java.lang.invoke.LambdaForm`                                                       |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `addMethod()`                                                                 | `java.lang.invoke.InvokerBytecodeGenerator`                                         |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `spinInnerClass()`                                                            | `java.lang.invoke.InnerClassLambdaMetafactory`                                      |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `getBytes()`                                                                  | `jdk.internal.loader.Resource`                                                      |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `parseURL(URL, String, int, int)`                                             | `sun.net.www.protocol.jar.Handler`                                                  |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `newDirectoryStream(Path, DirectoryStream$Filter)`                            | `jdk.internal.jrtfs.JrtFileSystemProvider`                                          |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `<init>(String, int)`                                                         | `java.math.BigInteger`                                                              |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `allocateInstance(Object)`                                                    | `java.lang.invoke.DirectMethodHandle`                                               |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `mapCapacity(int)`                                                            | `kotlin.collections.MapsKt__MapsJVMKt`                                              |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `put(Object, Object)`                                                         | `java.util.HashMap`                                                                 |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `resize()`                                                                    | `java.util.HashMap`                                                                 |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `filterInPlace$CollectionsKt__MutableCollectionsKt(List, Function1, boolean)` | `kotlin.collections.CollectionsKt__MutableCollectionsKt`                            |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `next()`                                                                      | `java.util.HashMap$ValueIterator`                                                   |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `isMetaName(byte[], int, int)`                                                | `java.util.zip.ZipFile$Source`                                                      |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `sub(Object)`                                                                 | `jdk.internal.loader.AbstractClassLoaderValue`                                      |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `<init>(String[], Set, List)`                                                 | `kotlin.reflect.jvm.internal.impl.metadata.jvm.deserialization.JvmNameResolverBase` |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `<init>(CodedInputStream, ExtensionRegistryLite)`                             | `kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Type$Argument`                  |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |            % |  Samples | Function                                    | Location                         |
| ------: | ----: | -----------: | -------: | ------------------------------------------- | -------------------------------- |
|  -95.4% |  -432 | 13.6% → 1.6% | 453 → 21 | `__psynch_cvwait`                           | `libsystem_kernel.dylib`         |
|  -94.7% |  -251 |  8.0% → 1.0% | 265 → 14 | `__psynch_mutexwait`                        | `libsystem_kernel.dylib`         |
|  -81.4% |   -35 |  1.3% → 0.6% |   43 → 8 | `InstanceKlass::find_method_index`          | `libjvm.dylib`                   |
|  -91.4% |   -32 |  1.1% → 0.2% |   35 → 3 | `semaphore_wait_trap`                       | `libsystem_kernel.dylib`         |
|  -58.5% |   -31 |         1.6% |  53 → 22 | `SymbolTable::do_lookup`                    | `libjvm.dylib`                   |
| removed |   -19 |  0.6% → 0.0% |   19 → 0 | `swtch_pri`                                 | `libsystem_kernel.dylib`         |
|  -57.1% |   -16 |  0.8% → 0.9% |  28 → 12 | `ciObjectFactory::get_metadata`             | `libjvm.dylib`                   |
|  -55.6% |   -15 |  0.8% → 0.9% |  27 → 12 | `PhaseChaitin::Split`                       | `libjvm.dylib`                   |
|  -92.9% |   -13 |  0.4% → 0.1% |   14 → 1 | `resource_allocate_bytes`                   | `libjvm.dylib`                   |
|  -76.5% |   -13 |  0.5% → 0.3% |   17 → 4 | `sanitizeStackTrace(Throwable)`             | `kotlin.jvm.internal.Intrinsics` |
|  -60.0% |   -12 |         0.6% |   20 → 8 | `pthread_jit_write_protect_np`              | `libsystem_pthread.dylib`        |
|  -78.6% |   -11 |  0.4% → 0.2% |   14 → 3 | `PhaseIdealLoop::build_loop_late_post_work` | `libjvm.dylib`                   |
|  -78.6% |   -11 |  0.4% → 0.2% |   14 → 3 | `__psynch_cvbroad`                          | `libsystem_kernel.dylib`         |
|  -84.6% |   -11 |  0.4% → 0.1% |   13 → 2 | `I2C/C2I adapters(0xb)`                     | `<unknown>`                      |
|  -84.6% |   -11 |  0.4% → 0.1% |   13 → 2 | `__psynch_mutexdrop`                        | `libsystem_kernel.dylib`         |
|  -45.5% |   -10 |  0.7% → 0.9% |  22 → 12 | `PhaseChaitin::build_ifg_physical`          | `libjvm.dylib`                   |
|  -31.3% |   -10 |  1.0% → 1.6% |  32 → 22 | `tlv_get_addr`                              | `libdyld.dylib`                  |
|  -52.6% |   -10 |  0.6% → 0.7% |   19 → 9 | `_platform_memset`                          | `libsystem_platform.dylib`       |
|  -15.2% |   -10 |  2.0% → 4.2% |  66 → 56 | `inflate_fast`                              | `libzip.dylib`                   |
|  -90.0% |    -9 |  0.3% → 0.1% |   10 → 1 | `SymbolTable::lookup_shared`                | `libjvm.dylib`                   |

##### Native

|  Change | Delta |            % |  Samples | Function                                                                                                                                                 | Location                   |
| ------: | ----: | -----------: | -------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
|  -95.4% |  -432 | 13.6% → 1.6% | 453 → 21 | `__psynch_cvwait`                                                                                                                                        | `libsystem_kernel.dylib`   |
|  -94.7% |  -251 |  8.0% → 1.0% | 265 → 14 | `__psynch_mutexwait`                                                                                                                                     | `libsystem_kernel.dylib`   |
|  -81.4% |   -35 |  1.3% → 0.6% |   43 → 8 | `InstanceKlass::find_method_index`                                                                                                                       | `libjvm.dylib`             |
|  -91.4% |   -32 |  1.1% → 0.2% |   35 → 3 | `semaphore_wait_trap`                                                                                                                                    | `libsystem_kernel.dylib`   |
|  -58.5% |   -31 |         1.6% |  53 → 22 | `SymbolTable::do_lookup`                                                                                                                                 | `libjvm.dylib`             |
| removed |   -19 |  0.6% → 0.0% |   19 → 0 | `swtch_pri`                                                                                                                                              | `libsystem_kernel.dylib`   |
|  -92.9% |   -13 |  0.4% → 0.1% |   14 → 1 | `resource_allocate_bytes`                                                                                                                                | `libjvm.dylib`             |
|  -60.0% |   -12 |         0.6% |   20 → 8 | `pthread_jit_write_protect_np`                                                                                                                           | `libsystem_pthread.dylib`  |
|  -78.6% |   -11 |  0.4% → 0.2% |   14 → 3 | `__psynch_cvbroad`                                                                                                                                       | `libsystem_kernel.dylib`   |
|  -84.6% |   -11 |  0.4% → 0.1% |   13 → 2 | `__psynch_mutexdrop`                                                                                                                                     | `libsystem_kernel.dylib`   |
|  -31.3% |   -10 |  1.0% → 1.6% |  32 → 22 | `tlv_get_addr`                                                                                                                                           | `libdyld.dylib`            |
|  -52.6% |   -10 |  0.6% → 0.7% |   19 → 9 | `_platform_memset`                                                                                                                                       | `libsystem_platform.dylib` |
|  -15.2% |   -10 |  2.0% → 4.2% |  66 → 56 | `inflate_fast`                                                                                                                                           | `libzip.dylib`             |
|  -90.0% |    -9 |  0.3% → 0.1% |   10 → 1 | `SymbolTable::lookup_shared`                                                                                                                             | `libjvm.dylib`             |
|  -72.7% |    -8 |  0.3% → 0.2% |   11 → 3 | `inflate`                                                                                                                                                | `libzip.dylib`             |
|  -61.5% |    -8 |         0.4% |   13 → 5 | `bsearch`                                                                                                                                                | `libsystem_c.dylib`        |
|  -57.1% |    -8 |         0.4% |   14 → 6 | `Dictionary::find`                                                                                                                                       | `libjvm.dylib`             |
|  -80.0% |    -8 |  0.3% → 0.1% |   10 → 2 | `trampoline_stub_Relocation::get_trampoline_for`                                                                                                         | `libjvm.dylib`             |
|  -38.1% |    -8 |  0.6% → 1.0% |  21 → 13 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `libjvm.dylib`             |
| removed |    -6 |  0.2% → 0.0% |    6 → 0 | `Dict::Insert`                                                                                                                                           | `libjvm.dylib`             |

##### Compiler

|  Change | Delta |           % | Samples | Function                                        | Location       |
| ------: | ----: | ----------: | ------: | ----------------------------------------------- | -------------- |
|  -57.1% |   -16 | 0.8% → 0.9% | 28 → 12 | `ciObjectFactory::get_metadata`                 | `libjvm.dylib` |
|  -55.6% |   -15 | 0.8% → 0.9% | 27 → 12 | `PhaseChaitin::Split`                           | `libjvm.dylib` |
|  -78.6% |   -11 | 0.4% → 0.2% |  14 → 3 | `PhaseIdealLoop::build_loop_late_post_work`     | `libjvm.dylib` |
|  -45.5% |   -10 | 0.7% → 0.9% | 22 → 12 | `PhaseChaitin::build_ifg_physical`              | `libjvm.dylib` |
|  -60.0% |    -9 | 0.5% → 0.4% |  15 → 6 | `LinearScanWalker::alloc_free_reg`              | `libjvm.dylib` |
|  -77.8% |    -7 | 0.3% → 0.1% |   9 → 2 | `PhaseIdealLoop::is_dominator`                  | `libjvm.dylib` |
|  -77.8% |    -7 | 0.3% → 0.1% |   9 → 2 | `PhaseLive::add_liveout`                        | `libjvm.dylib` |
|  -43.8% |    -7 | 0.5% → 0.7% |  16 → 9 | `PhaseChaitin::elide_copy`                      | `libjvm.dylib` |
| removed |    -7 | 0.2% → 0.0% |   7 → 0 | `PhaseIterGVN::remove_globally_dead_node`       | `libjvm.dylib` |
|  -43.8% |    -7 | 0.5% → 0.7% |  16 → 9 | `LinearScanWalker::free_collect_inactive_fixed` | `libjvm.dylib` |
|  -50.0% |    -7 | 0.4% → 0.5% |  14 → 7 | `IntervalWalker::walk_to`                       | `libjvm.dylib` |
|  -63.6% |    -7 |        0.3% |  11 → 4 | `LIR_OpVisitState::visit`                       | `libjvm.dylib` |
| removed |    -6 | 0.2% → 0.0% |   6 → 0 | `PhaseIterGVN::transform_old`                   | `libjvm.dylib` |
|  -75.0% |    -6 | 0.2% → 0.1% |   8 → 2 | `RelocIterator::set_limits`                     | `libjvm.dylib` |
|  -66.7% |    -6 | 0.3% → 0.2% |   9 → 3 | `LinearScan::assign_reg_num`                    | `libjvm.dylib` |
|  -83.3% |    -5 | 0.2% → 0.1% |   6 → 1 | `Compile::final_graph_reshaping_walk`           | `libjvm.dylib` |
|  -83.3% |    -5 | 0.2% → 0.1% |   6 → 1 | `PhaseCFG::schedule_early`                      | `libjvm.dylib` |
|  -83.3% |    -5 | 0.2% → 0.1% |   6 → 1 | `Scheduling::ComputeUseCount`                   | `libjvm.dylib` |
|  -71.4% |    -5 | 0.2% → 0.1% |   7 → 2 | `Unique_Node_List::remove`                      | `libjvm.dylib` |
|  -62.5% |    -5 |        0.2% |   8 → 3 | `Node::dominates`                               | `libjvm.dylib` |

##### Ours

|  Change | Delta |           % | Samples | Function                                                                                                                               | Location                                                                                  |
| ------: | ----: | ----------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| removed |    -4 | 0.1% → 0.0% |   4 → 0 | `<init>(byte[], int, boolean)`                                                                                                         | `org.jetbrains.org.objectweb.asm.ClassReader`                                             |
| removed |    -4 | 0.1% → 0.0% |   4 → 0 | `withNullability(ConeKotlinType, boolean, ConeTypeContext, ConeAttributes, boolean)`                                                   | `org.jetbrains.kotlin.fir.types.TypeUtilsKt`                                              |
| removed |    -3 | 0.1% → 0.0% |   3 → 0 | `loadFunction(ProtoBuf$Function, ProtoBuf$Class, FirClassSymbol, FirDeclarationOrigin)`                                                | `org.jetbrains.kotlin.fir.deserialization.FirMemberDeserializer`                          |
| removed |    -3 | 0.1% → 0.0% |   3 → 0 | `check(CheckerSink, ResolutionContext, Candidate, Continuation)`                                                                       | `org.jetbrains.kotlin.fir.resolve.calls.stages.CheckArguments`                            |
| removed |    -3 | 0.1% → 0.0% |   3 → 0 | `processDefaultsAndRunChecks()`                                                                                                        | `org.jetbrains.kotlin.fir.resolve.calls.stages.FirCallArgumentsProcessor`                 |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `readSourceFileWithMapping(InputStreamReader)`                                                                                         | `org.jetbrains.kotlin.KtSourceFileLinesMappingKt`                                         |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `put(Comparable, Object)`                                                                                                              | `org.jetbrains.kotlin.protobuf.SmallSortedMap`                                            |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `<init>(FirMemberDeclaration)`                                                                                                         | `org.jetbrains.kotlin.fir.scopes.impl.FirMemberTypeParameterScope`                        |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `processGivenConstraints(ConstraintInjector$Context, ConstraintInjector$TypeCheckerStateForConstraintInjector, Collection)`            | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector`              |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `prepareQualifiedTransform(FirQualifiedAccessExpression, FirNamedReferenceWithCandidate)`                                              | `org.jetbrains.kotlin.fir.resolve.transformers.FirCallCompletionResultsWriterTransformer` |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `processCandidatesWithGivenImplicitReceiverAsValue(ImplicitReceiverValue, CallInfo, TowerGroup, Set, Set, Set, boolean, Continuation)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolveTask`                        |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `substituteArguments(ConeSimpleKotlinType)`                                                                                            | `org.jetbrains.kotlin.fir.resolve.substitution.AbstractConeSubstitutor`                   |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `convertJavaMethodToFir(JavaClass, JavaMethod, ClassId, ConeClassLikeType, FirModuleData, FirRegularClassSymbol, JavaPackage)`         | `org.jetbrains.kotlin.fir.java.FirJavaFacadeKt`                                           |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `tryToSetSourceForImplicitReceiver$tryToSetSourceForImplicitReceiver(FirExpression, Candidate)`                                        | `org.jetbrains.kotlin.fir.resolve.calls.candidate.Candidate`                              |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `equals(Object)`                                                                                                                       | `org.jetbrains.kotlin.name.CallableId`                                                    |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `acceptChildren(FirVisitorVoid)`                                                                                                       | `org.jetbrains.kotlin.fir.FirElement`                                                     |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `<init>(FirBasedSymbol, boolean, RealVariable, RealVariable, ConeKotlinType)`                                                          | `org.jetbrains.kotlin.fir.resolve.dfa.RealVariable`                                       |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `getTypeStatement(DataFlowVariable)`                                                                                                   | `org.jetbrains.kotlin.fir.resolve.dfa.PersistentFlow`                                     |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `getType()`                                                                                                                            | `org.jetbrains.kotlin.cli.jvm.index.JavaRoot`                                             |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `hasNext()`                                                                                                                            | `org.jetbrains.kotlin.utils.SmartList$EmptyIterator`                                      |

##### Standard library

|  Change | Delta |            % | Samples | Function                                                       | Location                                                                                  |
| ------: | ----: | -----------: | ------: | -------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
|  -76.5% |   -13 |  0.5% → 0.3% |  17 → 4 | `sanitizeStackTrace(Throwable)`                                | `kotlin.jvm.internal.Intrinsics`                                                          |
|  -72.7% |    -8 |  0.3% → 0.2% |  11 → 3 | `checkNotNullParameter(Object, String)`                        | `kotlin.jvm.internal.Intrinsics`                                                          |
| removed |    -6 |  0.2% → 0.0% |   6 → 0 | `equals(Object)`                                               | `java.lang.String`                                                                        |
| removed |    -3 |  0.1% → 0.0% |   3 → 0 | `charAt(int)`                                                  | `java.lang.String`                                                                        |
| removed |    -3 |  0.1% → 0.0% |   3 → 0 | `invokeBasic(Object[])`                                        | `java.lang.invoke.MethodHandle`                                                           |
| removed |    -3 |  0.1% → 0.0% |   3 → 0 | `iterator()`                                                   | `java.util.ArrayList`                                                                     |
| removed |    -2 |  0.1% → 0.0% |   2 → 0 | `put(SymbolTable$Entry)`                                       | `jdk.internal.org.objectweb.asm.SymbolTable`                                              |
| removed |    -2 |  0.1% → 0.0% |   2 → 0 | `transfer(ConcurrentHashMap$Node[], ConcurrentHashMap$Node[])` | `java.util.concurrent.ConcurrentHashMap`                                                  |
| removed |    -2 |  0.1% → 0.0% |   2 → 0 | `iteratorOf(JrtPath, DirectoryStream$Filter)`                  | `jdk.internal.jrtfs.JrtFileSystem`                                                        |
| removed |    -2 |  0.1% → 0.0% |   2 → 0 | `toList(Iterable)`                                             | `kotlin.collections.CollectionsKt___CollectionsKt`                                        |
| removed |    -2 |  0.1% → 0.0% |   2 → 0 | `toByteArray()`                                                | `jdk.internal.org.objectweb.asm.ClassWriter`                                              |
|  -66.7% |    -2 |         0.1% |   3 → 1 | `areEqual(Object, Object)`                                     | `kotlin.jvm.internal.Intrinsics`                                                          |
| removed |    -2 |  0.1% → 0.0% |   2 → 0 | `accessCheck(Object)`                                          | `java.util.concurrent.atomic.AtomicReferenceFieldUpdater$AtomicReferenceFieldUpdaterImpl` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `checkFromIndexSize(int, int, int, BiFunction)`                | `jdk.internal.util.Preconditions`                                                         |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `read(byte[], int, int)`                                       | `java.io.PushbackInputStream`                                                             |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `needsDictionary()`                                            | `java.util.zip.Inflater`                                                                  |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `vectorizedMismatch(Object, long, Object, long, int, int)`     | `jdk.internal.util.ArraysSupport`                                                         |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `lookupKey(Object)`                                            | `jdk.internal.util.ReferencedKeyMap`                                                      |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `loadClass(String, boolean)`                                   | `java.lang.ClassLoader`                                                                   |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `toMethodDescriptorString()`                                   | `java.lang.invoke.MethodType`                                                             |

##### JIT

|  Change | Delta |            % | Samples | Function                           | Location    |
| ------: | ----: | -----------: | ------: | ---------------------------------- | ----------- |
|  -84.6% |   -11 |  0.4% → 0.1% |  13 → 2 | `I2C/C2I adapters(0xb)`            | `<unknown>` |
|  -90.0% |    -9 |  0.3% → 0.1% |  10 → 1 | `I2C/C2I adapters(0xbb)`           | `<unknown>` |
|  -71.4% |    -5 |  0.2% → 0.1% |   7 → 2 | `itable stub`                      | `<unknown>` |
|  -50.0% |    -2 |         0.1% |   4 → 2 | `zero_blocks`                      | `<unknown>` |
| removed |    -2 |  0.1% → 0.0% |   2 → 0 | `vtable stub`                      | `<unknown>` |
| removed |    -2 |  0.1% → 0.0% |   2 → 0 | `I2C/C2I adapters(0xbbbbbbababab)` | `<unknown>` |
| removed |    -2 |  0.1% → 0.0% |   2 → 0 | `I2C/C2I adapters(0xbbb)`          | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `I2C/C2I adapters(0xbbab)`         | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `I2C/C2I adapters(0xbbbbb)`        | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `I2C/C2I adapters(0xbbbb)`         | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `I2C/C2I adapters(0xba)`           | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `I2C/C2I adapters(0xbaaaab)`       | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `I2C/C2I adapters(0xaa)`           | `<unknown>` |

#### Lines

Lines with the largest change in contribution to each function's self samples.

##### `dispatchReceiverClassTypeOrNull(FirCallableDeclaration)` (`org.jetbrains.kotlin.fir.ClassMembersKt`)

| Change | Delta |            % | Samples | Location                                     |
| -----: | ----: | -----------: | ------: | -------------------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `org.jetbrains.kotlin.fir.ClassMembersKt:21` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `org.jetbrains.kotlin.fir.ClassMembersKt:24` |

##### `readMessage(Parser, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.CodedInputStream`)

| Change | Delta |             % | Samples | Location                                             |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.protobuf.CodedInputStream:507` |

##### `parsePostfixExpression()` (`org.jetbrains.kotlin.parsing.KotlinExpressionParsing`)

| Change | Delta |             % | Samples | Location                                                   |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.parsing.KotlinExpressionParsing:349` |

##### `convertCallExpression(LighterASTNode)` (`org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirExpressionBuilder`)

| Change | Delta |             % | Samples | Location                                                                             |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirExpressionBuilder:2470` |

##### `transformTypeRef(FirTypeRef, Object)` (`org.jetbrains.kotlin.fir.resolve.transformers.FirSpecificTypeResolverTransformer`)

| Change | Delta |             % | Samples | Location                                                                              |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.resolve.transformers.FirSpecificTypeResolverTransformer:35` |

##### `loadProperty(ProtoBuf$Property, ProtoBuf$Class, FirClassSymbol)` (`org.jetbrains.kotlin.fir.deserialization.FirMemberDeserializer`)

| Change | Delta |             % | Samples | Location                                                             |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.deserialization.FirMemberDeserializer:523` |

##### `directExpansionType(ConeClassLikeType, FirSession, Function1)` (`org.jetbrains.kotlin.fir.resolve.TypeExpansionUtilsKt`)

| Change | Delta |             % | Samples | Location                                                    |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.resolve.TypeExpansionUtilsKt:176` |

##### `asRigidType(KotlinTypeMarker)` (`org.jetbrains.kotlin.fir.types.ConeTypeContext`)

| Change | Delta |             % | Samples | Location                                            |
| -----: | ----: | ------------: | ------: | --------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.types.ConeTypeContext:83` |

##### `transformChildren(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.types.impl.FirUserTypeRefImpl`)

| Change | Delta |             % | Samples | Location                                                    |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.types.impl.FirUserTypeRefImpl:37` |

##### `resolveStatus(FirDeclaration, FirDeclarationStatus, FirClass, FirProperty, boolean, List)` (`org.jetbrains.kotlin.fir.resolve.transformers.FirStatusResolver`)

| Change | Delta |             % | Samples | Location                                                              |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.resolve.transformers.FirStatusResolver:286` |

##### `parseParameterizedClassRefSignature(CharacterIterator, ClassifierResolutionContext)` (`org.jetbrains.kotlin.load.java.structure.impl.classFiles.BinaryClassSignatureParser`)

| Change | Delta |             % | Samples | Location                                                                                  |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.load.java.structure.impl.classFiles.BinaryClassSignatureParser:122` |

##### `invokeSuspend(Object)` (`org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner$processCandidate$1`)

| Change | Delta |             % | Samples | Location                                                                                    |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner$processCandidate$1:42` |

##### `runCompletionForCall(Candidate, ConstraintSystemCompletionMode, FirExpression, ConeKotlinType, PostponedArgumentsAnalyzer)` (`org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter`)

| Change | Delta |             % | Samples | Location                                                          |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter:326` |

##### `transformBlock(FirBlock, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`)

| Change | Delta |             % | Samples | Location                                                                                                     |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher:227` |

##### `_get_referenceApproximateToSuperType_$lambda$0(AbstractTypeApproximator, TypeApproximatorConfiguration, AbstractTypeApproximator$Cache, RigidTypeMarker, int)` (`org.jetbrains.kotlin.types.AbstractTypeApproximator`)

| Change | Delta |             % | Samples | Location                                                 |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.types.AbstractTypeApproximator:44` |

##### `approximateToSuperType(KotlinTypeMarker, TypeApproximatorConfiguration, Map)` (`org.jetbrains.kotlin.types.AbstractTypeApproximator`)

| Change | Delta |             % | Samples | Location                                                 |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.types.AbstractTypeApproximator:85` |

##### `addInitialEqualityConstraint(ConstraintInjector$Context, KotlinTypeMarker, KotlinTypeMarker, ConstraintPosition)` (`org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector`)

| Change | Delta |             % | Samples | Location                                                                         |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector:120` |

##### `transformNamedFunction(FirNamedFunction, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.FirDeclarationsResolveTransformerForAnnotationArguments`)

| Change | Delta |             % | Samples | Location                                                                                                           |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.resolve.transformers.plugin.FirDeclarationsResolveTransformerForAnnotationArguments:485` |

##### `extractValue(AbstractArrayMapOwner)` (`org.jetbrains.kotlin.util.AbstractArrayMapOwner$AbstractArrayMapAccessor`)

| Change | Delta |             % | Samples | Location                                                                      |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.util.AbstractArrayMapOwner$AbstractArrayMapAccessor:26` |

##### `forName(String, boolean, ClassLoader, Class)` (`java.lang.Class`)

| Change | Delta |             % | Samples | Location              |
| -----: | ----: | ------------: | ------: | --------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.lang.Class:536` |

##### `linkMethodHandleConstant(byte, Class, String, Object)` (`java.lang.invoke.MethodHandles$Lookup`)

| Change | Delta |             % | Samples | Location                                     |
| -----: | ----: | ------------: | ------: | -------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.lang.invoke.MethodHandles$Lookup:4242` |

##### `linkCallSiteImpl(Class, MethodHandle, String, MethodType, Object, Object[])` (`java.lang.invoke.MethodHandleNatives`)

| Change | Delta |             % | Samples | Location                                   |
| -----: | ----: | ------------: | ------: | ------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.lang.invoke.MethodHandleNatives:260` |

##### `compileToBytecode()` (`java.lang.invoke.LambdaForm`)

| Change | Delta |             % | Samples | Location                          |
| -----: | ----: | ------------: | ------: | --------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.lang.invoke.LambdaForm:846` |

##### `addMethod()` (`java.lang.invoke.InvokerBytecodeGenerator`)

| Change | Delta |             % | Samples | Location                                        |
| -----: | ----: | ------------: | ------: | ----------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.lang.invoke.InvokerBytecodeGenerator:774` |

##### `spinInnerClass()` (`java.lang.invoke.InnerClassLambdaMetafactory`)

| Change | Delta |             % | Samples | Location                                           |
| -----: | ----: | ------------: | ------: | -------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.lang.invoke.InnerClassLambdaMetafactory:286` |

##### `getBytes()` (`jdk.internal.loader.Resource`)

| Change | Delta |             % | Samples | Location                           |
| -----: | ----: | ------------: | ------: | ---------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `jdk.internal.loader.Resource:115` |

##### `parseURL(URL, String, int, int)` (`sun.net.www.protocol.jar.Handler`)

| Change | Delta |             % | Samples | Location                               |
| -----: | ----: | ------------: | ------: | -------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `sun.net.www.protocol.jar.Handler:150` |

##### `newDirectoryStream(Path, DirectoryStream$Filter)` (`jdk.internal.jrtfs.JrtFileSystemProvider`)

| Change | Delta |             % | Samples | Location                                       |
| -----: | ----: | ------------: | ------: | ---------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `jdk.internal.jrtfs.JrtFileSystemProvider:311` |

##### `<init>(String, int)` (`java.math.BigInteger`)

| Change | Delta |             % | Samples | Location                   |
| -----: | ----: | ------------: | ------: | -------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.math.BigInteger:502` |

##### `allocateInstance(Object)` (`java.lang.invoke.DirectMethodHandle`)

| Change | Delta |             % | Samples | Location                                  |
| -----: | ----: | ------------: | ------: | ----------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.lang.invoke.DirectMethodHandle:501` |

##### `mapCapacity(int)` (`kotlin.collections.MapsKt__MapsJVMKt`)

| Change | Delta |             % | Samples | Location                                   |
| -----: | ----: | ------------: | ------: | ------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `kotlin.collections.MapsKt__MapsJVMKt:304` |

##### `put(Object, Object)` (`java.util.HashMap`)

| Change | Delta |             % | Samples | Location                |
| -----: | ----: | ------------: | ------: | ----------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.HashMap:618` |

##### `resize()` (`java.util.HashMap`)

| Change | Delta |             % | Samples | Location                |
| -----: | ----: | ------------: | ------: | ----------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.HashMap:713` |

##### `filterInPlace$CollectionsKt__MutableCollectionsKt(List, Function1, boolean)` (`kotlin.collections.CollectionsKt__MutableCollectionsKt`)

| Change | Delta |             % | Samples | Location                                                     |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `kotlin.collections.CollectionsKt__MutableCollectionsKt:311` |

##### `next()` (`java.util.HashMap$ValueIterator`)

| Change | Delta |             % | Samples | Location                               |
| -----: | ----: | ------------: | ------: | -------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.HashMap$ValueIterator:1633` |

##### `isMetaName(byte[], int, int)` (`java.util.zip.ZipFile$Source`)

| Change | Delta |             % | Samples | Location                            |
| -----: | ----: | ------------: | ------: | ----------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.zip.ZipFile$Source:1898` |

##### `sub(Object)` (`jdk.internal.loader.AbstractClassLoaderValue`)

| Change | Delta |             % | Samples | Location                                          |
| -----: | ----: | ------------: | ------: | ------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `jdk.internal.loader.AbstractClassLoaderValue:71` |

##### `<init>(String[], Set, List)` (`kotlin.reflect.jvm.internal.impl.metadata.jvm.deserialization.JvmNameResolverBase`)

| Change | Delta |             % | Samples | Location                                                                               |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `kotlin.reflect.jvm.internal.impl.metadata.jvm.deserialization.JvmNameResolverBase:14` |

##### `<init>(CodedInputStream, ExtensionRegistryLite)` (`kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Type$Argument`)

| Change | Delta |             % | Samples | Location                                                                |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Type$Argument:5165` |

##### `sanitizeStackTrace(Throwable)` (`kotlin.jvm.internal.Intrinsics`)

| Change | Delta |      % | Samples | Location                             |
| -----: | ----: | -----: | ------: | ------------------------------------ |
| -76.5% |   -13 | 100.0% |  17 → 4 | `kotlin.jvm.internal.Intrinsics:253` |

##### `<init>(byte[], int, boolean)` (`org.jetbrains.org.objectweb.asm.ClassReader`)

|  Change | Delta |            % | Samples | Location                                          |
| ------: | ----: | -----------: | ------: | ------------------------------------------------- |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `org.jetbrains.org.objectweb.asm.ClassReader:227` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `org.jetbrains.org.objectweb.asm.ClassReader:229` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `org.jetbrains.org.objectweb.asm.ClassReader:253` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `org.jetbrains.org.objectweb.asm.ClassReader:269` |

##### `withNullability(ConeKotlinType, boolean, ConeTypeContext, ConeAttributes, boolean)` (`org.jetbrains.kotlin.fir.types.TypeUtilsKt`)

|  Change | Delta |            % | Samples | Location                                         |
| ------: | ----: | -----------: | ------: | ------------------------------------------------ |
| removed |    -3 | 75.0% → 0.0% |   3 → 0 | `org.jetbrains.kotlin.fir.types.TypeUtilsKt:253` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.types.TypeUtilsKt:309` |

##### `loadFunction(ProtoBuf$Function, ProtoBuf$Class, FirClassSymbol, FirDeclarationOrigin)` (`org.jetbrains.kotlin.fir.deserialization.FirMemberDeserializer`)

|  Change | Delta |            % | Samples | Location                                                              |
| ------: | ----: | -----------: | ------: | --------------------------------------------------------------------- |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.deserialization.FirMemberDeserializer:663`  |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.deserialization.FirMemberDeserializer:682`  |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.deserialization.FirMemberDeserializer:1000` |

##### `check(CheckerSink, ResolutionContext, Candidate, Continuation)` (`org.jetbrains.kotlin.fir.resolve.calls.stages.CheckArguments`)

|  Change | Delta |            % | Samples | Location                                                          |
| ------: | ----: | -----------: | ------: | ----------------------------------------------------------------- |
| removed |    -2 | 66.7% → 0.0% |   2 → 0 | `org.jetbrains.kotlin.fir.resolve.calls.stages.CheckArguments:36` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.resolve.calls.stages.CheckArguments:59` |

##### `processDefaultsAndRunChecks()` (`org.jetbrains.kotlin.fir.resolve.calls.stages.FirCallArgumentsProcessor`)

|  Change | Delta |            % | Samples | Location                                                                      |
| ------: | ----: | -----------: | ------: | ----------------------------------------------------------------------------- |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.resolve.calls.stages.FirCallArgumentsProcessor:285` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.resolve.calls.stages.FirCallArgumentsProcessor:302` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.resolve.calls.stages.FirCallArgumentsProcessor:303` |

##### `readSourceFileWithMapping(InputStreamReader)` (`org.jetbrains.kotlin.KtSourceFileLinesMappingKt`)

|  Change | Delta |            % | Samples | Location                                              |
| ------: | ----: | -----------: | ------: | ----------------------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.KtSourceFileLinesMappingKt:79`  |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.KtSourceFileLinesMappingKt:103` |

##### `put(Comparable, Object)` (`org.jetbrains.kotlin.protobuf.SmallSortedMap`)

|  Change | Delta |            % | Samples | Location                                           |
| ------: | ----: | -----------: | ------: | -------------------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.protobuf.SmallSortedMap:237` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.protobuf.SmallSortedMap:256` |

##### `<init>(FirMemberDeclaration)` (`org.jetbrains.kotlin.fir.scopes.impl.FirMemberTypeParameterScope`)

|  Change | Delta |            % | Samples | Location                                                              |
| ------: | ----: | -----------: | ------: | --------------------------------------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.scopes.impl.FirMemberTypeParameterScope:37` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.scopes.impl.FirMemberTypeParameterScope:50` |

##### `processGivenConstraints(ConstraintInjector$Context, ConstraintInjector$TypeCheckerStateForConstraintInjector, Collection)` (`org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector`)

|  Change | Delta |             % | Samples | Location                                                                         |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector:188` |

##### `prepareQualifiedTransform(FirQualifiedAccessExpression, FirNamedReferenceWithCandidate)` (`org.jetbrains.kotlin.fir.resolve.transformers.FirCallCompletionResultsWriterTransformer`)

|  Change | Delta |            % | Samples | Location                                                                                      |
| ------: | ----: | -----------: | ------: | --------------------------------------------------------------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.resolve.transformers.FirCallCompletionResultsWriterTransformer:200` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.resolve.transformers.FirCallCompletionResultsWriterTransformer:231` |

##### `processCandidatesWithGivenImplicitReceiverAsValue(ImplicitReceiverValue, CallInfo, TowerGroup, Set, Set, Set, boolean, Continuation)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolveTask`)

|  Change | Delta |             % | Samples | Location                                                               |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolveTask:495` |

##### `substituteArguments(ConeSimpleKotlinType)` (`org.jetbrains.kotlin.fir.resolve.substitution.AbstractConeSubstitutor`)

|  Change | Delta |            % | Samples | Location                                                                    |
| ------: | ----: | -----------: | ------: | --------------------------------------------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.resolve.substitution.AbstractConeSubstitutor:119` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.resolve.substitution.AbstractConeSubstitutor:128` |

##### `convertJavaMethodToFir(JavaClass, JavaMethod, ClassId, ConeClassLikeType, FirModuleData, FirRegularClassSymbol, JavaPackage)` (`org.jetbrains.kotlin.fir.java.FirJavaFacadeKt`)

|  Change | Delta |            % | Samples | Location                                            |
| ------: | ----: | -----------: | ------: | --------------------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.java.FirJavaFacadeKt:586` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.java.FirJavaFacadeKt:620` |

##### `tryToSetSourceForImplicitReceiver$tryToSetSourceForImplicitReceiver(FirExpression, Candidate)` (`org.jetbrains.kotlin.fir.resolve.calls.candidate.Candidate`)

|  Change | Delta |             % | Samples | Location                                                         |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `org.jetbrains.kotlin.fir.resolve.calls.candidate.Candidate:358` |

##### `equals(Object)` (`org.jetbrains.kotlin.name.CallableId`)

|  Change | Delta |             % | Samples | Location                                   |
| ------: | ----: | ------------: | ------: | ------------------------------------------ |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `org.jetbrains.kotlin.name.CallableId:105` |

##### `acceptChildren(FirVisitorVoid)` (`org.jetbrains.kotlin.fir.FirElement`)

|  Change | Delta |             % | Samples | Location                                 |
| ------: | ----: | ------------: | ------: | ---------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `org.jetbrains.kotlin.fir.FirElement:74` |

##### `<init>(FirBasedSymbol, boolean, RealVariable, RealVariable, ConeKotlinType)` (`org.jetbrains.kotlin.fir.resolve.dfa.RealVariable`)

|  Change | Delta |            % | Samples | Location                                               |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------ |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.resolve.dfa.RealVariable:59` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.resolve.dfa.RealVariable:60` |

##### `getTypeStatement(DataFlowVariable)` (`org.jetbrains.kotlin.fir.resolve.dfa.PersistentFlow`)

|  Change | Delta |             % | Samples | Location                                                 |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `org.jetbrains.kotlin.fir.resolve.dfa.PersistentFlow:49` |

##### `getType()` (`org.jetbrains.kotlin.cli.jvm.index.JavaRoot`)

|  Change | Delta |             % | Samples | Location                                         |
| ------: | ----: | ------------: | ------: | ------------------------------------------------ |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `org.jetbrains.kotlin.cli.jvm.index.JavaRoot:55` |

##### `hasNext()` (`org.jetbrains.kotlin.utils.SmartList$EmptyIterator`)

|  Change | Delta |             % | Samples | Location                                                 |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `org.jetbrains.kotlin.utils.SmartList$EmptyIterator:210` |

##### `checkNotNullParameter(Object, String)` (`kotlin.jvm.internal.Intrinsics`)

| Change | Delta |      % | Samples | Location                             |
| -----: | ----: | -----: | ------: | ------------------------------------ |
| -72.7% |    -8 | 100.0% |  11 → 3 | `kotlin.jvm.internal.Intrinsics:130` |

##### `equals(Object)` (`java.lang.String`)

|  Change | Delta |            % | Samples | Location                |
| ------: | ----: | -----------: | ------: | ----------------------- |
| removed |    -4 | 66.7% → 0.0% |   4 → 0 | `java.lang.String:1852` |
| removed |    -2 | 33.3% → 0.0% |   2 → 0 | `java.lang.String:1847` |

##### `charAt(int)` (`java.lang.String`)

|  Change | Delta |             % | Samples | Location                |
| ------: | ----: | ------------: | ------: | ----------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `java.lang.String:1543` |

##### `iterator()` (`java.util.ArrayList`)

|  Change | Delta |             % | Samples | Location                   |
| ------: | ----: | ------------: | ------: | -------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `java.util.ArrayList:1029` |

##### `put(SymbolTable$Entry)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

|  Change | Delta |            % | Samples | Location                                         |
| ------: | ----: | -----------: | ------: | ------------------------------------------------ |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `jdk.internal.org.objectweb.asm.SymbolTable:439` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `jdk.internal.org.objectweb.asm.SymbolTable:458` |

##### `transfer(ConcurrentHashMap$Node[], ConcurrentHashMap$Node[])` (`java.util.concurrent.ConcurrentHashMap`)

|  Change | Delta |             % | Samples | Location                                      |
| ------: | ----: | ------------: | ------: | --------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `java.util.concurrent.ConcurrentHashMap:2484` |

##### `iteratorOf(JrtPath, DirectoryStream$Filter)` (`jdk.internal.jrtfs.JrtFileSystem`)

|  Change | Delta |             % | Samples | Location                               |
| ------: | ----: | ------------: | ------: | -------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `jdk.internal.jrtfs.JrtFileSystem:234` |

##### `toList(Iterable)` (`kotlin.collections.CollectionsKt___CollectionsKt`)

|  Change | Delta |            % | Samples | Location                                                |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `kotlin.collections.CollectionsKt___CollectionsKt:1496` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `kotlin.collections.CollectionsKt___CollectionsKt:1497` |

##### `toByteArray()` (`jdk.internal.org.objectweb.asm.ClassWriter`)

|  Change | Delta |            % | Samples | Location                                         |
| ------: | ----: | -----------: | ------: | ------------------------------------------------ |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `jdk.internal.org.objectweb.asm.ClassWriter:534` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `jdk.internal.org.objectweb.asm.ClassWriter:671` |

##### `areEqual(Object, Object)` (`kotlin.jvm.internal.Intrinsics`)

| Change | Delta |      % | Samples | Location                             |
| -----: | ----: | -----: | ------: | ------------------------------------ |
| -66.7% |    -2 | 100.0% |   3 → 1 | `kotlin.jvm.internal.Intrinsics:169` |

##### `accessCheck(Object)` (`java.util.concurrent.atomic.AtomicReferenceFieldUpdater$AtomicReferenceFieldUpdaterImpl`)

|  Change | Delta |             % | Samples | Location                                                                                      |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `java.util.concurrent.atomic.AtomicReferenceFieldUpdater$AtomicReferenceFieldUpdaterImpl:408` |

##### `checkFromIndexSize(int, int, int, BiFunction)` (`jdk.internal.util.Preconditions`)

|  Change | Delta |             % | Samples | Location                              |
| ------: | ----: | ------------: | ------: | ------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `jdk.internal.util.Preconditions:396` |

##### `read(byte[], int, int)` (`java.io.PushbackInputStream`)

|  Change | Delta |             % | Samples | Location                          |
| ------: | ----: | ------------: | ------: | --------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.io.PushbackInputStream:177` |

##### `needsDictionary()` (`java.util.zip.Inflater`)

|  Change | Delta |             % | Samples | Location                     |
| ------: | ----: | ------------: | ------: | ---------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.zip.Inflater:313` |

##### `vectorizedMismatch(Object, long, Object, long, int, int)` (`jdk.internal.util.ArraysSupport`)

|  Change | Delta |             % | Samples | Location                              |
| ------: | ----: | ------------: | ------: | ------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `jdk.internal.util.ArraysSupport:130` |

##### `lookupKey(Object)` (`jdk.internal.util.ReferencedKeyMap`)

|  Change | Delta |             % | Samples | Location                                 |
| ------: | ----: | ------------: | ------: | ---------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `jdk.internal.util.ReferencedKeyMap:176` |

##### `loadClass(String, boolean)` (`java.lang.ClassLoader`)

|  Change | Delta |             % | Samples | Location                    |
| ------: | ----: | ------------: | ------: | --------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.lang.ClassLoader:598` |

##### `toMethodDescriptorString()` (`java.lang.invoke.MethodType`)

|  Change | Delta |             % | Samples | Location                           |
| ------: | ----: | ------------: | ------: | ---------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.lang.invoke.MethodType:1244` |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|  Change | Delta |            % | Samples | Function                                                                                                                                                        | Location                                                                                                                                                                                                                                            |
| ------: | ----: | -----------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +527.3% |   +58 |  0.3% → 5.1% | 11 → 69 | `invoke()`                                                                                                                                                      | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x00000070016ad870 → org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x000000f0016b5c80` |
| +100.0% |    +6 |  0.2% → 0.9% |  6 → 12 | `G1EvacuateRegionsTask::scan_roots`                                                                                                                             | `libjvm.dylib`                                                                                                                                                                                                                                      |
| +100.0% |    +5 |  0.2% → 0.7% |  5 → 10 | `G1ScanHRForRegionClosure::scan_memregion`                                                                                                                      | `libjvm.dylib`                                                                                                                                                                                                                                      |
| +100.0% |    +5 |  0.2% → 0.7% |  5 → 10 | `void G1ScanHRForRegionClosure::ChunkScanner::on_dirty_cards<G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)>` | `libjvm.dylib`                                                                                                                                                                                                                                      |
| +100.0% |    +5 |  0.2% → 0.7% |  5 → 10 | `G1ScanHRForRegionClosure::scan_heap_roots`                                                                                                                     | `libjvm.dylib`                                                                                                                                                                                                                                      |
| +100.0% |    +5 |  0.2% → 0.7% |  5 → 10 | `G1ScanHRForRegionClosure::do_heap_region`                                                                                                                      | `libjvm.dylib`                                                                                                                                                                                                                                      |
| +100.0% |    +5 |  0.2% → 0.7% |  5 → 10 | `G1RemSet::scan_heap_roots`                                                                                                                                     | `libjvm.dylib`                                                                                                                                                                                                                                      |
|  +71.4% |    +5 |  0.2% → 0.9% |  7 → 12 | `PhaseIdealLoop::build_loop_tree`                                                                                                                               | `libjvm.dylib`                                                                                                                                                                                                                                      |
|  +83.3% |    +5 |  0.2% → 0.8% |  6 → 11 | `PhaseCCP::transform`                                                                                                                                           | `libjvm.dylib`                                                                                                                                                                                                                                      |
| +166.7% |    +5 |  0.1% → 0.6% |   3 → 8 | `Node::set_req_X`                                                                                                                                               | `libjvm.dylib`                                                                                                                                                                                                                                      |
|     new |    +5 |  0.0% → 0.4% |   0 → 5 | `HeapWordImpl** HeapRegion::oops_on_memregion_iterate<G1ScanCardClosure, true>`                                                                                 | `libjvm.dylib`                                                                                                                                                                                                                                      |
|     new |    +5 |  0.0% → 0.4% |   0 → 5 | `UseCountComputer::visit`                                                                                                                                       | `libjvm.dylib`                                                                                                                                                                                                                                      |
| +400.0% |    +4 | <0.1% → 0.4% |   1 → 5 | `invoke()`                                                                                                                                                      | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase$$Lambda.0x00000070013acc70 → org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase$$Lambda.0x000000f0014240f8`                                                             |
| +400.0% |    +4 | <0.1% → 0.4% |   1 → 5 | `invoke(Object)`                                                                                                                                                | `org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel$$Lambda.0x000000700166f200 → org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel$$Lambda.0x000000f001672fd0`                                                       |
| +400.0% |    +4 | <0.1% → 0.4% |   1 → 5 | `processPropertiesByName$lambda$0(FirLookupTrackerComponent, CallInfo, Ref$BooleanRef, ScopeBasedTowerLevel, TowerLevelProcessor, FirVariableSymbol)`           | `org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel`                                                                                                                                                                                 |
| +400.0% |    +4 | <0.1% → 0.4% |   1 → 5 | `UseCountComputer::block_do`                                                                                                                                    | `libjvm.dylib`                                                                                                                                                                                                                                      |
| +400.0% |    +4 | <0.1% → 0.4% |   1 → 5 | `BlockList::iterate_backward`                                                                                                                                   | `libjvm.dylib`                                                                                                                                                                                                                                      |
| +133.3% |    +4 |  0.1% → 0.5% |   3 → 7 | `LIRGenerator::do_Invoke`                                                                                                                                       | `libjvm.dylib`                                                                                                                                                                                                                                      |
|  +57.1% |    +4 |  0.2% → 0.8% |  7 → 11 | `PhaseCCP::do_transform`                                                                                                                                        | `libjvm.dylib`                                                                                                                                                                                                                                      |
| +200.0% |    +4 |  0.1% → 0.4% |   2 → 6 | `LibraryIntrinsic::generate`                                                                                                                                    | `libjvm.dylib`                                                                                                                                                                                                                                      |

##### Native

|  Change | Delta |            % | Samples | Function                                                                                                                                                        | Location       |
| ------: | ----: | -----------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| +100.0% |    +6 |  0.2% → 0.9% |  6 → 12 | `G1EvacuateRegionsTask::scan_roots`                                                                                                                             | `libjvm.dylib` |
| +100.0% |    +5 |  0.2% → 0.7% |  5 → 10 | `G1ScanHRForRegionClosure::scan_memregion`                                                                                                                      | `libjvm.dylib` |
| +100.0% |    +5 |  0.2% → 0.7% |  5 → 10 | `void G1ScanHRForRegionClosure::ChunkScanner::on_dirty_cards<G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)>` | `libjvm.dylib` |
| +100.0% |    +5 |  0.2% → 0.7% |  5 → 10 | `G1ScanHRForRegionClosure::scan_heap_roots`                                                                                                                     | `libjvm.dylib` |
| +100.0% |    +5 |  0.2% → 0.7% |  5 → 10 | `G1ScanHRForRegionClosure::do_heap_region`                                                                                                                      | `libjvm.dylib` |
| +100.0% |    +5 |  0.2% → 0.7% |  5 → 10 | `G1RemSet::scan_heap_roots`                                                                                                                                     | `libjvm.dylib` |
|     new |    +5 |  0.0% → 0.4% |   0 → 5 | `HeapWordImpl** HeapRegion::oops_on_memregion_iterate<G1ScanCardClosure, true>`                                                                                 | `libjvm.dylib` |
|     new |    +5 |  0.0% → 0.4% |   0 → 5 | `UseCountComputer::visit`                                                                                                                                       | `libjvm.dylib` |
| +400.0% |    +4 | <0.1% → 0.4% |   1 → 5 | `UseCountComputer::block_do`                                                                                                                                    | `libjvm.dylib` |
| +200.0% |    +4 |  0.1% → 0.4% |   2 → 6 | `LibraryIntrinsic::generate`                                                                                                                                    | `libjvm.dylib` |
|     new |    +4 |  0.0% → 0.3% |   0 → 4 | `LibraryCallKit::try_to_inline`                                                                                                                                 | `libjvm.dylib` |
|     new |    +4 |  0.0% → 0.3% |   0 → 4 | `CodeHeap::block_start`                                                                                                                                         | `libjvm.dylib` |
|     new |    +4 |  0.0% → 0.3% |   0 → 4 | `CodeCache::next_blob`                                                                                                                                          | `libjvm.dylib` |
|     new |    +4 |  0.0% → 0.3% |   0 → 4 | `CodeCacheUnloadingTask::claim_nmethods`                                                                                                                        | `libjvm.dylib` |
|     new |    +4 |  0.0% → 0.3% |   0 → 4 | `ClassLoader::load_class`                                                                                                                                       | `libjvm.dylib` |
| +150.0% |    +3 |  0.1% → 0.4% |   2 → 5 | `NonSafepointEmitter::emit_non_safepoint`                                                                                                                       | `libjvm.dylib` |
|  +75.0% |    +3 |  0.1% → 0.5% |   4 → 7 | `Arena::contains`                                                                                                                                               | `libjvm.dylib` |
| +150.0% |    +3 |  0.1% → 0.4% |   2 → 5 | `IR::compute_use_counts`                                                                                                                                        | `libjvm.dylib` |
| +150.0% |    +3 |  0.1% → 0.4% |   2 → 5 | `OopRecorder::find_index`                                                                                                                                       | `libjvm.dylib` |
| +300.0% |    +3 | <0.1% → 0.3% |   1 → 4 | `CodeHeap::allocate`                                                                                                                                            | `libjvm.dylib` |

##### Compiler

|  Change | Delta |            % | Samples | Function                                      | Location       |
| ------: | ----: | -----------: | ------: | --------------------------------------------- | -------------- |
|  +71.4% |    +5 |  0.2% → 0.9% |  7 → 12 | `PhaseIdealLoop::build_loop_tree`             | `libjvm.dylib` |
|  +83.3% |    +5 |  0.2% → 0.8% |  6 → 11 | `PhaseCCP::transform`                         | `libjvm.dylib` |
| +166.7% |    +5 |  0.1% → 0.6% |   3 → 8 | `Node::set_req_X`                             | `libjvm.dylib` |
| +400.0% |    +4 | <0.1% → 0.4% |   1 → 5 | `BlockList::iterate_backward`                 | `libjvm.dylib` |
| +133.3% |    +4 |  0.1% → 0.5% |   3 → 7 | `LIRGenerator::do_Invoke`                     | `libjvm.dylib` |
|  +57.1% |    +4 |  0.2% → 0.8% |  7 → 11 | `PhaseCCP::do_transform`                      | `libjvm.dylib` |
|     new |    +4 |  0.0% → 0.3% |   0 → 4 | `PhaseChaitin::yank_if_dead_recurse`          | `libjvm.dylib` |
|     new |    +4 |  0.0% → 0.3% |   0 → 4 | `Matcher::specialize_generic_vector_operands` | `libjvm.dylib` |
| +100.0% |    +3 |  0.1% → 0.4% |   3 → 6 | `TypeInstPtr::xmeet_helper`                   | `libjvm.dylib` |
|  +75.0% |    +3 |  0.1% → 0.5% |   4 → 7 | `PhaseIdealLoop::split_if_with_blocks_post`   | `libjvm.dylib` |
| +100.0% |    +3 |  0.1% → 0.4% |   3 → 6 | `PhaseIterGVN::add_users_to_worklist`         | `libjvm.dylib` |
| +300.0% |    +3 | <0.1% → 0.3% |   1 → 4 | `OopMapValue::write_on`                       | `libjvm.dylib` |
|  +75.0% |    +3 |  0.1% → 0.5% |   4 → 7 | `Node::replace_edge`                          | `libjvm.dylib` |
|     new |    +3 |  0.0% → 0.2% |   0 → 3 | `IfFalseNode::Opcode`                         | `libjvm.dylib` |
|  +40.0% |    +2 |  0.2% → 0.5% |   5 → 7 | `PhaseChaitin::Select`                        | `libjvm.dylib` |
| +200.0% |    +2 | <0.1% → 0.2% |   1 → 3 | `Node::unique_ctrl_out_or_null`               | `libjvm.dylib` |
|  +66.7% |    +2 |  0.1% → 0.4% |   3 → 5 | `PhaseIFG::SquareUp`                          | `libjvm.dylib` |
|  +50.0% |    +2 |  0.1% → 0.4% |   4 → 6 | `PhiNode::Value`                              | `libjvm.dylib` |
|  +50.0% |    +2 |  0.1% → 0.4% |   4 → 6 | `PhaseChaitin::merge_multidefs`               | `libjvm.dylib` |
| +100.0% |    +2 |  0.1% → 0.3% |   2 → 4 | `PhaseIdealLoop::try_sink_out_of_loop`        | `libjvm.dylib` |

##### Ours

|  Change | Delta |            % | Samples | Function                                                                                                                                              | Location                                                                                                                                                                                                                                            |
| ------: | ----: | -----------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +527.3% |   +58 |  0.3% → 5.1% | 11 → 69 | `invoke()`                                                                                                                                            | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x00000070016ad870 → org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x000000f0016b5c80` |
| +400.0% |    +4 | <0.1% → 0.4% |   1 → 5 | `invoke()`                                                                                                                                            | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase$$Lambda.0x00000070013acc70 → org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase$$Lambda.0x000000f0014240f8`                                                             |
| +400.0% |    +4 | <0.1% → 0.4% |   1 → 5 | `invoke(Object)`                                                                                                                                      | `org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel$$Lambda.0x000000700166f200 → org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel$$Lambda.0x000000f001672fd0`                                                       |
| +400.0% |    +4 | <0.1% → 0.4% |   1 → 5 | `processPropertiesByName$lambda$0(FirLookupTrackerComponent, CallInfo, Ref$BooleanRef, ScopeBasedTowerLevel, TowerLevelProcessor, FirVariableSymbol)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel`                                                                                                                                                                                 |
|     new |    +4 |  0.0% → 0.3% |   0 → 4 | `collectDslMarkerAnnotations(ResolutionContext, Set, ConeKotlinType)`                                                                                 | `org.jetbrains.kotlin.fir.resolve.calls.stages.CheckDslScopeViolation`                                                                                                                                                                              |
|     new |    +4 |  0.0% → 0.3% |   0 → 4 | `getDslMarkersOfImplicitValue(ResolutionContext, FirBasedSymbol, ConeKotlinType)`                                                                     | `org.jetbrains.kotlin.fir.resolve.calls.stages.CheckDslScopeViolation`                                                                                                                                                                              |
|     new |    +4 |  0.0% → 0.3% |   0 → 4 | `check(CheckerSink, ResolutionContext, FirExpression, Candidate, FirBasedSymbol, List)`                                                               | `org.jetbrains.kotlin.fir.resolve.calls.stages.CheckDslScopeViolation`                                                                                                                                                                              |
|     new |    +4 |  0.0% → 0.3% |   0 → 4 | `checkImpl(CheckerSink, ResolutionContext, ConeResolutionAtom, Candidate, ImplicitKind)`                                                              | `org.jetbrains.kotlin.fir.resolve.calls.stages.CheckShadowedImplicits`                                                                                                                                                                              |
|     new |    +4 |  0.0% → 0.3% |   0 → 4 | `check(CheckerSink, ResolutionContext, Candidate, Continuation)`                                                                                      | `org.jetbrains.kotlin.fir.resolve.calls.stages.CheckShadowedImplicits`                                                                                                                                                                              |
| +300.0% |    +3 | <0.1% → 0.3% |   1 → 4 | `acceptChildren(FirVisitor, Object)`                                                                                                                  | `org.jetbrains.kotlin.fir.expressions.impl.FirImplicitInvokeCallImpl`                                                                                                                                                                               |
| +300.0% |    +3 | <0.1% → 0.3% |   1 → 4 | `functionTypeKind(ConeKotlinType, FirSession, boolean)`                                                                                               | `org.jetbrains.kotlin.fir.types.FunctionalTypeUtilsKt`                                                                                                                                                                                              |
| +300.0% |    +3 | <0.1% → 0.3% |   1 → 4 | `functionTypeKind$default(ConeKotlinType, FirSession, boolean, int, Object)`                                                                          | `org.jetbrains.kotlin.fir.types.FunctionalTypeUtilsKt`                                                                                                                                                                                              |
| +100.0% |    +3 |  0.1% → 0.4% |   3 → 6 | `visitClass(IrClass, Void)`                                                                                                                           | `org.jetbrains.kotlin.ir.visitors.IrVisitorVoid`                                                                                                                                                                                                    |
| +100.0% |    +3 |  0.1% → 0.4% |   3 → 6 | `visitClass(IrClass, Object)`                                                                                                                         | `org.jetbrains.kotlin.ir.visitors.IrVisitorVoid`                                                                                                                                                                                                    |
| +150.0% |    +3 |  0.1% → 0.4% |   2 → 5 | `visitReturn(IrReturn, Object)`                                                                                                                       | `org.jetbrains.kotlin.ir.visitors.IrTransformer`                                                                                                                                                                                                    |
|  +60.0% |    +3 |  0.2% → 0.6% |   5 → 8 | `transformChildren(IrTransformer, Object)`                                                                                                            | `org.jetbrains.kotlin.ir.expressions.IrBranch`                                                                                                                                                                                                      |
|  +60.0% |    +3 |  0.2% → 0.6% |   5 → 8 | `transformChildren(IrTransformer, Object)`                                                                                                            | `org.jetbrains.kotlin.ir.expressions.IrWhen`                                                                                                                                                                                                        |
| +300.0% |    +3 | <0.1% → 0.3% |   1 → 4 | `visitWhen(IrWhen, Object)`                                                                                                                           | `org.jetbrains.kotlin.ir.visitors.IrTransformer`                                                                                                                                                                                                    |
|     new |    +3 |  0.0% → 0.2% |   0 → 3 | `processPropertiesByName(Name, Function1)`                                                                                                            | `org.jetbrains.kotlin.fir.scopes.impl.FirNameAwareOnlyCallablesScope`                                                                                                                                                                               |
|     new |    +3 |  0.0% → 0.2% |   0 → 3 | `toAnnotationClassLikeType(FirAnnotation, FirSession)`                                                                                                | `org.jetbrains.kotlin.fir.declarations.FirAnnotationUtilsKt`                                                                                                                                                                                        |

##### Standard library

|  Change | Delta |            % | Samples | Function                                                      | Location                                                          |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------- | ----------------------------------------------------------------- |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `<init>(int, Object, Class, String, String, int)`             | `kotlin.jvm.internal.FunctionReference`                           |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `doAdvance()`                                                 | `java.util.stream.StreamSpliterators$AbstractWrappingSpliterator` |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `tryAdvance(Consumer)`                                        | `java.util.stream.StreamSpliterators$WrappingSpliterator`         |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `hasNext()`                                                   | `java.util.Spliterators$1Adapter`                                 |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `hasNext()`                                                   | `jdk.internal.jrtfs.JrtDirectoryStream$1`                         |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `getQualifiedName()`                                          | `kotlin.reflect.jvm.internal.KClassImpl$Data`                     |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `<init>(int)`                                                 | `jdk.internal.org.objectweb.asm.ByteVector`                       |
| +100.0% |    +1 | <0.1% → 0.1% |   1 → 2 | `makeSpecializedTarget(MethodHandle, boolean, boolean)`       | `jdk.internal.reflect.MethodHandleAccessorFactory`                |
| +100.0% |    +1 | <0.1% → 0.1% |   1 → 2 | `readMessage(Parser, ExtensionRegistryLite)`                  | `kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream`      |
| +100.0% |    +1 | <0.1% → 0.1% |   1 → 2 | `<init>(CodedInputStream, ExtensionRegistryLite)`             | `kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Class`        |
| +100.0% |    +1 | <0.1% → 0.1% |   1 → 2 | `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` | `kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Class`        |
| +100.0% |    +1 | <0.1% → 0.1% |   1 → 2 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)`   | `kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Class$1`      |
| +100.0% |    +1 | <0.1% → 0.1% |   1 → 2 | `parsePartialFrom(InputStream, ExtensionRegistryLite)`        | `kotlin.reflect.jvm.internal.impl.protobuf.AbstractParser`        |
| +100.0% |    +1 | <0.1% → 0.1% |   1 → 2 | `forName(String, Class)`                                      | `java.lang.Class`                                                 |
| +100.0% |    +1 | <0.1% → 0.1% |   1 → 2 | `forName(String)`                                             | `java.lang.Class`                                                 |
| +100.0% |    +1 | <0.1% → 0.1% |   1 → 2 | `getBytes()`                                                  | `jdk.internal.loader.Resource`                                    |
| +100.0% |    +1 | <0.1% → 0.1% |   1 → 2 | `getBytes()`                                                  | `jdk.internal.loader.URLClassPath$JarLoader$2`                    |
| +100.0% |    +1 | <0.1% → 0.1% |   1 → 2 | `readAllBytes(Path)`                                          | `java.nio.file.Files`                                             |
| +100.0% |    +1 | <0.1% → 0.1% |   1 → 2 | `getQualifiedName()`                                          | `kotlin.reflect.jvm.internal.KClassImpl`                          |
| +100.0% |    +1 | <0.1% → 0.1% |   1 → 2 | `makeAllocator(MemberName)`                                   | `java.lang.invoke.DirectMethodHandle`                             |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

| Change |  Delta |             % |     Samples | Function                                                                                           | Location                                                                                                  |
| -----: | -----: | ------------: | ----------: | -------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| -58.5% | -1,271 | 65.2% → 67.2% | 2,173 → 902 | `thread_native_entry`                                                                              | `libjvm.dylib`                                                                                            |
| -58.5% | -1,271 | 65.2% → 67.2% | 2,174 → 903 | `_pthread_start`                                                                                   | `libsystem_pthread.dylib`                                                                                 |
| -58.5% | -1,271 | 65.2% → 67.2% | 2,174 → 903 | `thread_start`                                                                                     | `libsystem_pthread.dylib`                                                                                 |
| -58.5% | -1,270 | 65.2% → 67.2% | 2,172 → 902 | `Thread::call_run`                                                                                 | `libjvm.dylib`                                                                                            |
| -58.0% | -1,150 | 59.5% → 62.0% | 1,983 → 833 | `JavaThread::thread_main_inner`                                                                    | `libjvm.dylib`                                                                                            |
| -57.6% | -1,131 | 58.9% → 62.0% | 1,963 → 832 | `CompileBroker::compiler_thread_loop`                                                              | `libjvm.dylib`                                                                                            |
| -48.7% |   -773 | 47.7% → 60.7% | 1,588 → 815 | `CompileBroker::invoke_compiler_on_method`                                                         | `libjvm.dylib`                                                                                            |
| -61.7% |   -698 | 33.9% → 32.2% | 1,131 → 433 | `run(String[])`                                                                                    | `org.jetbrains.kotlin.preloading.Preloader`                                                               |
| -61.7% |   -698 | 33.9% → 32.2% | 1,131 → 433 | `main(String[])`                                                                                   | `org.jetbrains.kotlin.preloading.Preloader`                                                               |
| -64.7% |   -653 | 30.3% → 26.6% | 1,010 → 357 | `main(String[])`                                                                                   | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`                                                    |
| -64.7% |   -653 | 30.3% → 26.6% | 1,010 → 357 | `main(String[])`                                                                                   | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                                                              |
| -64.7% |   -653 | 30.3% → 26.6% | 1,010 → 357 | `invokeStatic(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$DMH.0x0000007001008000 → java.lang.invoke.LambdaForm$DMH.0x000000f001008400` |
| -64.7% |   -653 | 30.3% → 26.6% | 1,010 → 357 | `invoke(Object, Object, Object)`                                                                   | `java.lang.invoke.LambdaForm$MH.0x0000007001009400 → java.lang.invoke.LambdaForm$MH.0x000000f001009800`   |
| -64.7% |   -653 | 30.3% → 26.6% | 1,010 → 357 | `invokeExact_MT(Object, Object, Object, Object)`                                                   | `java.lang.invoke.Invokers$Holder`                                                                        |
| -64.7% |   -653 | 30.3% → 26.6% | 1,010 → 357 | `invokeImpl(Object, Object[])`                                                                     | `jdk.internal.reflect.DirectMethodHandleAccessor`                                                         |
| -64.7% |   -653 | 30.3% → 26.6% | 1,010 → 357 | `invoke(Object, Object[])`                                                                         | `jdk.internal.reflect.DirectMethodHandleAccessor`                                                         |
| -64.6% |   -652 | 30.3% → 26.7% | 1,010 → 358 | `invoke(Object, Object[])`                                                                         | `java.lang.reflect.Method`                                                                                |
| -64.6% |   -651 | 30.3% → 26.6% | 1,008 → 357 | `doMain(CLICompiler, String[])`                                                                    | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`                                                   |
| -64.6% |   -651 | 30.2% → 26.5% | 1,007 → 356 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`                                                   |
| -64.6% |   -650 | 30.2% → 26.5% | 1,006 → 356 | `exec(PrintStream, Services, MessageRenderer, String[])`                                           | `org.jetbrains.kotlin.cli.common.CLICompiler`                                                             |

##### Native

| Change |  Delta |             % |     Samples | Function                                  | Location                  |
| -----: | -----: | ------------: | ----------: | ----------------------------------------- | ------------------------- |
| -58.5% | -1,271 | 65.2% → 67.2% | 2,173 → 902 | `thread_native_entry`                     | `libjvm.dylib`            |
| -58.5% | -1,271 | 65.2% → 67.2% | 2,174 → 903 | `_pthread_start`                          | `libsystem_pthread.dylib` |
| -58.5% | -1,271 | 65.2% → 67.2% | 2,174 → 903 | `thread_start`                            | `libsystem_pthread.dylib` |
| -58.5% | -1,270 | 65.2% → 67.2% | 2,172 → 902 | `Thread::call_run`                        | `libjvm.dylib`            |
| -58.0% | -1,150 | 59.5% → 62.0% | 1,983 → 833 | `JavaThread::thread_main_inner`           | `libjvm.dylib`            |
| -94.8% |   -437 |  13.8% → 1.8% |    461 → 24 | `PlatformMonitor::wait`                   | `libjvm.dylib`            |
| -95.4% |   -432 |  13.6% → 1.6% |    453 → 21 | `__psynch_cvwait`                         | `libsystem_kernel.dylib`  |
| -95.4% |   -373 |  11.7% → 1.3% |    391 → 18 | `Monitor::wait`                           | `libjvm.dylib`            |
| -94.7% |   -251 |   8.0% → 1.0% |    265 → 14 | `__psynch_mutexwait`                      | `libsystem_kernel.dylib`  |
| -94.7% |   -251 |   8.0% → 1.0% |    265 → 14 | `_pthread_mutex_firstfit_lock_slow`       | `libsystem_pthread.dylib` |
| -49.9% |   -244 | 14.7% → 18.2% |   489 → 245 | `Compiler::compile_method`                | `libjvm.dylib`            |
| -93.5% |   -115 |   3.7% → 0.6% |     123 → 8 | `Mutex::lock`                             | `libjvm.dylib`            |
| -95.7% |   -110 |   3.5% → 0.4% |     115 → 5 | `ThreadCritical::ThreadCritical`          | `libjvm.dylib`            |
| -55.6% |    -85 |   4.6% → 5.1% |    153 → 68 | `IRScope::IRScope`                        | `libjvm.dylib`            |
| -55.6% |    -85 |   4.6% → 5.1% |    153 → 68 | `IR::IR`                                  | `libjvm.dylib`            |
| -54.7% |    -82 |   4.5% → 5.1% |    150 → 68 | `Parse::Parse`                            | `libjvm.dylib`            |
| -54.7% |    -82 |   4.5% → 5.1% |    150 → 68 | `ParseGenerator::generate`                | `libjvm.dylib`            |
| -59.9% |    -82 |          4.1% |    137 → 55 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib`           |
| -60.2% |    -80 |   4.0% → 3.9% |    133 → 53 | `jvm_define_class_common`                 | `libjvm.dylib`            |
| -59.4% |    -79 |          4.0% |    133 → 54 | `JVM_DefineClassWithSource`               | `libjvm.dylib`            |

##### Compiler

| Change |  Delta |             % |     Samples | Function                                    | Location       |
| -----: | -----: | ------------: | ----------: | ------------------------------------------- | -------------- |
| -57.6% | -1,131 | 58.9% → 62.0% | 1,963 → 832 | `CompileBroker::compiler_thread_loop`       | `libjvm.dylib` |
| -48.7% |   -773 | 47.7% → 60.7% | 1,588 → 815 | `CompileBroker::invoke_compiler_on_method`  | `libjvm.dylib` |
| -46.3% |   -482 | 31.3% → 41.7% | 1,042 → 560 | `C2Compiler::compile_method`                | `libjvm.dylib` |
| -46.2% |   -479 | 31.1% → 41.5% | 1,036 → 557 | `Compile::Compile`                          | `libjvm.dylib` |
| -95.4% |   -350 |  11.0% → 1.3% |    367 → 17 | `CompileQueue::get`                         | `libjvm.dylib` |
| -49.4% |   -239 | 14.5% → 18.2% |   484 → 245 | `Compilation::compile_method`               | `libjvm.dylib` |
| -49.4% |   -239 | 14.5% → 18.2% |   484 → 245 | `Compilation::Compilation`                  | `libjvm.dylib` |
| -43.8% |   -213 | 14.6% → 20.3% |   486 → 273 | `Compile::Code_Gen`                         | `libjvm.dylib` |
| -48.5% |   -209 | 12.9% → 16.5% |   431 → 222 | `Compilation::compile_java_method`          | `libjvm.dylib` |
| -41.6% |   -146 | 10.5% → 15.3% |   351 → 205 | `Compile::Optimize`                         | `libjvm.dylib` |
| -52.2% |    -94 |   5.4% → 6.4% |    180 → 86 | `Compilation::build_hir`                    | `libjvm.dylib` |
| -55.3% |    -84 |   4.6% → 5.1% |    152 → 68 | `GraphBuilder::GraphBuilder`                | `libjvm.dylib` |
| -43.5% |    -81 |   5.6% → 7.8% |   186 → 105 | `PhaseIdealLoop::optimize`                  | `libjvm.dylib` |
| -78.8% |    -78 |   3.0% → 1.6% |     99 → 21 | `ciObjectFactory::get_metadata`             | `libjvm.dylib` |
| -32.2% |    -74 |  6.9% → 11.6% |   230 → 156 | `PhaseChaitin::Register_Allocate`           | `libjvm.dylib` |
| -73.2% |    -71 |   2.9% → 1.9% |     97 → 26 | `ciBytecodeStream::get_method`              | `libjvm.dylib` |
| -51.9% |    -70 |   4.1% → 4.8% |    135 → 65 | `GraphBuilder::iterate_all_blocks`          | `libjvm.dylib` |
| -44.2% |    -69 |   4.7% → 6.5% |    156 → 87 | `Compilation::emit_lir`                     | `libjvm.dylib` |
| -51.9% |    -69 |   4.0% → 4.8% |    133 → 64 | `GraphBuilder::iterate_bytecodes_for_block` | `libjvm.dylib` |
| -58.3% |    -67 |   3.5% → 3.6% |    115 → 48 | `PhaseIterGVN::optimize`                    | `libjvm.dylib` |

##### Ours

| Change | Delta |             % |     Samples | Function                                                                                                                                      | Location                                                |
| -----: | ----: | ------------: | ----------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| -61.7% |  -698 | 33.9% → 32.2% | 1,131 → 433 | `run(String[])`                                                                                                                               | `org.jetbrains.kotlin.preloading.Preloader`             |
| -61.7% |  -698 | 33.9% → 32.2% | 1,131 → 433 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.preloading.Preloader`             |
| -64.7% |  -653 | 30.3% → 26.6% | 1,010 → 357 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`  |
| -64.7% |  -653 | 30.3% → 26.6% | 1,010 → 357 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| -64.6% |  -651 | 30.3% → 26.6% | 1,008 → 357 | `doMain(CLICompiler, String[])`                                                                                                               | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| -64.6% |  -651 | 30.2% → 26.5% | 1,007 → 356 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)`                                            | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| -64.6% |  -650 | 30.2% → 26.5% | 1,006 → 356 | `exec(PrintStream, Services, MessageRenderer, String[])`                                                                                      | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| -64.6% |  -650 | 30.2% → 26.5% | 1,006 → 356 | `exec(PrintStream, MessageRenderer, String[])`                                                                                                | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| -64.6% |  -650 | 30.2% → 26.5% | 1,006 → 356 | `doMainNoExit(CLICompiler, String[], MessageRenderer)`                                                                                        | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| -64.9% |  -647 | 29.9% → 26.1% |   997 → 350 | `exec(MessageCollector, Services, CommonCompilerArguments)`                                                                                   | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| -65.1% |  -638 | 29.4% → 25.5% |   980 → 342 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)`                                                                         | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| -65.1% |  -638 | 29.4% → 25.5% |   980 → 342 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)`                                                                        | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| -65.1% |  -638 | 29.4% → 25.5% |   980 → 342 | `execImpl(MessageCollector, Services, CommonCompilerArguments)`                                                                               | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| -65.2% |  -638 | 29.4% → 25.4% |   979 → 341 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)`                                           | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| -65.2% |  -638 | 29.4% → 25.4% |   979 → 341 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| -65.2% |  -638 | 29.4% → 25.4% |   979 → 341 | `execute(CommonCompilerArguments, Services, MessageCollector)`                                                                                | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| -65.3% |  -637 | 29.3% → 25.2% |   976 → 339 | `runPhasedPipeline(ArgumentsPipelineArtifact)`                                                                                                | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| -65.3% |  -635 | 29.2% → 25.2% |   973 → 338 | `phaseBody(PipelineContext, PipelineArtifact)`                                                                                                | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`       |
| -65.3% |  -635 | 29.2% → 25.2% |   973 → 338 | `phaseBody(LoggingContext, Object)`                                                                                                           | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`       |
| -65.3% |  -635 | 29.2% → 25.2% |   973 → 338 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)`                                                                                    | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase` |

##### Standard library

| Change | Delta |             % |     Samples | Function                                                                        | Location                                                                                                  |
| -----: | ----: | ------------: | ----------: | ------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| -64.7% |  -653 | 30.3% → 26.6% | 1,010 → 357 | `invokeStatic(Object, Object)`                                                  | `java.lang.invoke.LambdaForm$DMH.0x0000007001008000 → java.lang.invoke.LambdaForm$DMH.0x000000f001008400` |
| -64.7% |  -653 | 30.3% → 26.6% | 1,010 → 357 | `invoke(Object, Object, Object)`                                                | `java.lang.invoke.LambdaForm$MH.0x0000007001009400 → java.lang.invoke.LambdaForm$MH.0x000000f001009800`   |
| -64.7% |  -653 | 30.3% → 26.6% | 1,010 → 357 | `invokeExact_MT(Object, Object, Object, Object)`                                | `java.lang.invoke.Invokers$Holder`                                                                        |
| -64.7% |  -653 | 30.3% → 26.6% | 1,010 → 357 | `invokeImpl(Object, Object[])`                                                  | `jdk.internal.reflect.DirectMethodHandleAccessor`                                                         |
| -64.7% |  -653 | 30.3% → 26.6% | 1,010 → 357 | `invoke(Object, Object[])`                                                      | `jdk.internal.reflect.DirectMethodHandleAccessor`                                                         |
| -64.6% |  -652 | 30.3% → 26.7% | 1,010 → 358 | `invoke(Object, Object[])`                                                      | `java.lang.reflect.Method`                                                                                |
| -75.0% |  -153 |   6.1% → 3.8% |    204 → 51 | `resumeWith(Object)`                                                            | `kotlin.coroutines.jvm.internal.BaseContinuationImpl`                                                     |
| -56.6% |   -86 |   4.6% → 4.9% |    152 → 66 | `loadClass(String, boolean)`                                                    | `java.lang.ClassLoader`                                                                                   |
| -59.6% |   -84 |          4.2% |    141 → 57 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`                                                                                   |
| -58.0% |   -83 |   4.3% → 4.5% |    143 → 60 | `defineClass(String, byte[], int, int, ProtectionDomain)`                       | `java.lang.ClassLoader`                                                                                   |
| -58.6% |   -82 |   4.2% → 4.3% |    140 → 58 | `defineClass(String, byte[], int, int)`                                         | `java.lang.ClassLoader`                                                                                   |
| -34.0% |   -35 |   3.1% → 5.1% |    103 → 68 | `read(byte[])`                                                                  | `java.io.FilterInputStream`                                                                               |
| -33.3% |   -34 |   3.1% → 5.1% |    102 → 68 | `read(byte[], int, int)`                                                        | `java.util.zip.InflaterInputStream`                                                                       |
| -33.0% |   -34 |   3.1% → 5.1% |    103 → 69 | `read(byte[], int, int)`                                                        | `java.util.zip.ZipInputStream`                                                                            |
| -71.1% |   -32 |   1.4% → 1.0% |     45 → 13 | `getValue()`                                                                    | `kotlin.UnsafeLazyImpl`                                                                                   |
| -62.5% |   -30 |   1.4% → 1.3% |     48 → 18 | `getValue()`                                                                    | `kotlin.SafePublicationLazyImpl`                                                                          |
| -65.2% |   -30 |   1.4% → 1.2% |     46 → 16 | `getValue()`                                                                    | `kotlin.SynchronizedLazyImpl`                                                                             |
| -28.9% |   -28 |   2.9% → 5.1% |     97 → 69 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)`                   | `java.util.zip.Inflater`                                                                                  |
| -28.9% |   -28 |   2.9% → 5.1% |     97 → 69 | `inflate(byte[], int, int)`                                                     | `java.util.zip.Inflater`                                                                                  |
| -73.1% |   -19 |   0.8% → 0.5% |      26 → 7 | `checkNotNullParameter(Object, String)`                                         | `kotlin.jvm.internal.Intrinsics`                                                                          |

##### JIT

|  Change | Delta |            % | Samples | Function                           | Location    |
| ------: | ----: | -----------: | ------: | ---------------------------------- | ----------- |
|  -84.6% |   -11 |  0.4% → 0.1% |  13 → 2 | `I2C/C2I adapters(0xb)`            | `<unknown>` |
|  -90.9% |   -10 |  0.3% → 0.1% |  11 → 1 | `I2C/C2I adapters(0xbb)`           | `<unknown>` |
|  -71.4% |    -5 |  0.2% → 0.1% |   7 → 2 | `itable stub`                      | `<unknown>` |
|  -50.0% |    -2 |         0.1% |   4 → 2 | `zero_blocks`                      | `<unknown>` |
| removed |    -2 |  0.1% → 0.0% |   2 → 0 | `vtable stub`                      | `<unknown>` |
| removed |    -2 |  0.1% → 0.0% |   2 → 0 | `I2C/C2I adapters(0xbbbbbbababab)` | `<unknown>` |
| removed |    -2 |  0.1% → 0.0% |   2 → 0 | `I2C/C2I adapters(0xbbb)`          | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `I2C/C2I adapters(0xbbab)`         | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `I2C/C2I adapters(0xbbbbb)`        | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `I2C/C2I adapters(0xbbbb)`         | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `I2C/C2I adapters(0xba)`           | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `I2C/C2I adapters(0xbaaaab)`       | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `I2C/C2I adapters(0xaa)`           | `<unknown>` |

# Allocated heap profile diff

Allocated 667 MiB → 700 MiB (+32.372 MiB, +4.9%) over 1,329 samples → 1,393 samples (514 KiB per sample).

| Category         | Change |       Delta |             % |              Size |     Samples |
| ---------------- | -----: | ----------: | ------------: | ----------------: | ----------: |
| Standard library |  +9.9% | +48.872 MiB | 73.8% → 77.4% | 493 MiB → 542 MiB | 980 → 1,077 |
| Ours             |  -9.4% | -16.499 MiB | 26.2% → 22.6% | 175 MiB → 158 MiB |   349 → 316 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

|  Change |       Delta |             % |              Size |   Samples | Function                                                                                                                 | Location                                                                  |
| ------: | ----------: | ------------: | ----------------: | --------: | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------- |
|  +15.3% | +24.186 MiB | 23.7% → 26.0% | 158 MiB → 182 MiB | 316 → 364 | `<init>(int)`                                                                                                            | `java.io.ByteArrayOutputStream`                                           |
|   +8.2% | +10.999 MiB | 20.2% → 20.8% | 134 MiB → 145 MiB | 269 → 291 | `copyOf(byte[], int)`                                                                                                    | `java.util.Arrays`                                                        |
| +325.0% |  +6.499 MiB |   0.3% → 1.2% |   2 MiB → 8.5 MiB |    4 → 17 | `newInstance(OutputStream, int)`                                                                                         | `org.jetbrains.kotlin.protobuf.CodedOutputStream`                         |
| +233.3% |  +3.499 MiB |   0.2% → 0.7% |   1.5 MiB → 5 MiB |    3 → 10 | `copyOfRange(byte[], int, int)`                                                                                          | `java.util.Arrays`                                                        |
| +233.3% |  +3.499 MiB |   0.2% → 0.7% |   1.5 MiB → 5 MiB |    3 → 10 | `allocateUninitializedArray(Class, int)`                                                                                 | `jdk.internal.misc.Unsafe`                                                |
|     new |  +2.999 MiB |   0.0% → 0.4% |       0 B → 3 MiB |     0 → 6 | `unmodifiableList(List)`                                                                                                 | `java.util.Collections`                                                   |
| +500.0% |  +2.499 MiB |   0.1% → 0.4% |   512 KiB → 3 MiB |     1 → 6 | `readUtf(int, int, char[])`                                                                                              | `org.jetbrains.org.objectweb.asm.ClassReader`                             |
|     new |  +2.499 MiB |   0.0% → 0.4% |     0 B → 2.5 MiB |     0 → 5 | `newFieldSet()`                                                                                                          | `org.jetbrains.kotlin.protobuf.FieldSet`                                  |
|  +71.4% |  +2.499 MiB |   0.5% → 0.9% |   3.5 MiB → 6 MiB |    7 → 12 | `<init>(int, float, boolean)`                                                                                            | `java.util.HashSet`                                                       |
|  +83.3% |  +2.499 MiB |   0.4% → 0.8% |   3 MiB → 5.5 MiB |    6 → 11 | `resize()`                                                                                                               | `java.util.HashMap`                                                       |
|     new |  +1.999 MiB |   0.0% → 0.3% |       0 B → 2 MiB |     0 → 4 | `newStringUTF8NoRepl(byte[], int, int, boolean)`                                                                         | `java.lang.String`                                                        |
| +133.3% |  +1.999 MiB |   0.2% → 0.5% | 1.5 MiB → 3.5 MiB |     3 → 7 | `replace(byte[], char, char)`                                                                                            | `java.lang.StringLatin1`                                                  |
|  +33.3% |  +1.999 MiB |   0.9% → 1.1% |     6 MiB → 8 MiB |   12 → 16 | `grow(int)`                                                                                                              | `java.util.ArrayList`                                                     |
| +150.0% |  +1.499 MiB |   0.1% → 0.4% |   1 MiB → 2.5 MiB |     2 → 5 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)`                                          | `java.lang.ClassLoader`                                                   |
|     new |  +1.499 MiB |   0.0% → 0.2% |     0 B → 1.5 MiB |     0 → 3 | `<init>(MethodHandles$Lookup, MethodType, String, MethodType, MethodHandle, MethodType, boolean, Class[], MethodType[])` | `java.lang.invoke.InnerClassLambdaMetafactory`                            |
|     new |  +1.499 MiB |   0.0% → 0.2% |     0 B → 1.5 MiB |     0 → 3 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)`                                                              | `org.jetbrains.kotlin.metadata.ProtoBuf$Function$1`                       |
| +100.0% |  +1.499 MiB |   0.2% → 0.4% |   1.5 MiB → 3 MiB |     3 → 6 | `<init>(int)`                                                                                                            | `kotlin.collections.builders.MapBuilder`                                  |
|  +42.9% |  +1.499 MiB |   0.5% → 0.7% |   3.5 MiB → 5 MiB |    7 → 10 | `box-impl(List)`                                                                                                         | `org.jetbrains.kotlin.fir.MutableOrEmptyList`                             |
|     new |  +1.499 MiB |   0.0% → 0.2% |     0 B → 1.5 MiB |     0 → 3 | `read(InputStream, int)`                                                                                                 | `java.nio.file.Files`                                                     |
| +300.0% |  +1.499 MiB |   0.1% → 0.3% |   512 KiB → 2 MiB |     1 → 4 | `createScope(IrSymbolOwner)`                                                                                             | `org.jetbrains.kotlin.backend.common.IrElementTransformerVoidWithContext` |

##### Standard library

|  Change |          Delta |             % |                Size |   Samples | Function                                                                                                                 | Location                                                                              |
| ------: | -------------: | ------------: | ------------------: | --------: | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------- |
|  +15.3% |    +24.186 MiB | 23.7% → 26.0% |   158 MiB → 182 MiB | 316 → 364 | `<init>(int)`                                                                                                            | `java.io.ByteArrayOutputStream`                                                       |
|   +8.2% |    +10.999 MiB | 20.2% → 20.8% |   134 MiB → 145 MiB | 269 → 291 | `copyOf(byte[], int)`                                                                                                    | `java.util.Arrays`                                                                    |
| +233.3% |     +3.499 MiB |   0.2% → 0.7% |     1.5 MiB → 5 MiB |    3 → 10 | `copyOfRange(byte[], int, int)`                                                                                          | `java.util.Arrays`                                                                    |
| +233.3% |     +3.499 MiB |   0.2% → 0.7% |     1.5 MiB → 5 MiB |    3 → 10 | `allocateUninitializedArray(Class, int)`                                                                                 | `jdk.internal.misc.Unsafe`                                                            |
|     new |     +2.999 MiB |   0.0% → 0.4% |         0 B → 3 MiB |     0 → 6 | `unmodifiableList(List)`                                                                                                 | `java.util.Collections`                                                               |
|  +71.4% |     +2.499 MiB |   0.5% → 0.9% |     3.5 MiB → 6 MiB |    7 → 12 | `<init>(int, float, boolean)`                                                                                            | `java.util.HashSet`                                                                   |
|  +83.3% |     +2.499 MiB |   0.4% → 0.8% |     3 MiB → 5.5 MiB |    6 → 11 | `resize()`                                                                                                               | `java.util.HashMap`                                                                   |
|     new |     +1.999 MiB |   0.0% → 0.3% |         0 B → 2 MiB |     0 → 4 | `newStringUTF8NoRepl(byte[], int, int, boolean)`                                                                         | `java.lang.String`                                                                    |
| +133.3% |     +1.999 MiB |   0.2% → 0.5% |   1.5 MiB → 3.5 MiB |     3 → 7 | `replace(byte[], char, char)`                                                                                            | `java.lang.StringLatin1`                                                              |
|  +33.3% |     +1.999 MiB |   0.9% → 1.1% |       6 MiB → 8 MiB |   12 → 16 | `grow(int)`                                                                                                              | `java.util.ArrayList`                                                                 |
| +150.0% |     +1.499 MiB |   0.1% → 0.4% |     1 MiB → 2.5 MiB |     2 → 5 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)`                                          | `java.lang.ClassLoader`                                                               |
|     new |     +1.499 MiB |   0.0% → 0.2% |       0 B → 1.5 MiB |     0 → 3 | `<init>(MethodHandles$Lookup, MethodType, String, MethodType, MethodHandle, MethodType, boolean, Class[], MethodType[])` | `java.lang.invoke.InnerClassLambdaMetafactory`                                        |
| +100.0% |     +1.499 MiB |   0.2% → 0.4% |     1.5 MiB → 3 MiB |     3 → 6 | `<init>(int)`                                                                                                            | `kotlin.collections.builders.MapBuilder`                                              |
|     new |     +1.499 MiB |   0.0% → 0.2% |       0 B → 1.5 MiB |     0 → 3 | `read(InputStream, int)`                                                                                                 | `java.nio.file.Files`                                                                 |
|  +27.0% | +1,023.998 KiB |   0.6% → 0.7% | 3.71 MiB → 4.71 MiB |     2 → 4 | `initCEN(int, ZipCoder)`                                                                                                 | `java.util.zip.ZipFile$Source`                                                        |
| +200.0% | +1,023.998 KiB |   0.1% → 0.2% |   512 KiB → 1.5 MiB |     1 → 3 | `toString()`                                                                                                             | `java.lang.StringBuilder`                                                             |
| +200.0% | +1,023.998 KiB |   0.1% → 0.2% |   512 KiB → 1.5 MiB |     1 → 3 | `addConstantUtf8(String)`                                                                                                | `jdk.internal.org.objectweb.asm.SymbolTable`                                          |
|     new | +1,023.998 KiB |   0.0% → 0.1% |         0 B → 1 MiB |     0 → 2 | `addConstantMemberReference(int, String, String, String)`                                                                | `jdk.internal.org.objectweb.asm.SymbolTable`                                          |
| +200.0% | +1,023.998 KiB |   0.1% → 0.2% |   512 KiB → 1.5 MiB |     1 → 3 | `<init>(PersistentHashMap)`                                                                                              | `kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMapBuilder` |
|     new | +1,023.998 KiB |   0.0% → 0.1% |         0 B → 1 MiB |     0 → 2 | `addConstantUtf8Reference(int, String)`                                                                                  | `jdk.internal.org.objectweb.asm.SymbolTable`                                          |

##### Ours

|  Change |          Delta |           % |              Size | Samples | Function                                                                                                                    | Location                                                                  |
| ------: | -------------: | ----------: | ----------------: | ------: | --------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| +325.0% |     +6.499 MiB | 0.3% → 1.2% |   2 MiB → 8.5 MiB |  4 → 17 | `newInstance(OutputStream, int)`                                                                                            | `org.jetbrains.kotlin.protobuf.CodedOutputStream`                         |
| +500.0% |     +2.499 MiB | 0.1% → 0.4% |   512 KiB → 3 MiB |   1 → 6 | `readUtf(int, int, char[])`                                                                                                 | `org.jetbrains.org.objectweb.asm.ClassReader`                             |
|     new |     +2.499 MiB | 0.0% → 0.4% |     0 B → 2.5 MiB |   0 → 5 | `newFieldSet()`                                                                                                             | `org.jetbrains.kotlin.protobuf.FieldSet`                                  |
|     new |     +1.499 MiB | 0.0% → 0.2% |     0 B → 1.5 MiB |   0 → 3 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)`                                                                 | `org.jetbrains.kotlin.metadata.ProtoBuf$Function$1`                       |
|  +42.9% |     +1.499 MiB | 0.5% → 0.7% |   3.5 MiB → 5 MiB |  7 → 10 | `box-impl(List)`                                                                                                            | `org.jetbrains.kotlin.fir.MutableOrEmptyList`                             |
| +300.0% |     +1.499 MiB | 0.1% → 0.3% |   512 KiB → 2 MiB |   1 → 4 | `createScope(IrSymbolOwner)`                                                                                                | `org.jetbrains.kotlin.backend.common.IrElementTransformerVoidWithContext` |
|     new |     +1.499 MiB | 0.0% → 0.2% |     0 B → 1.5 MiB |   0 → 3 | `visitLineNumber(int, Label)`                                                                                               | `org.jetbrains.org.objectweb.asm.tree.MethodNode`                         |
|  +50.0% | +1,023.998 KiB | 0.3% → 0.4% |     2 MiB → 3 MiB |   4 → 6 | `accept(ClassVisitor, Attribute[], int)`                                                                                    | `org.jetbrains.org.objectweb.asm.ClassReader`                             |
| +100.0% | +1,023.998 KiB | 0.1% → 0.3% |     1 MiB → 2 MiB |   2 → 4 | `<init>(InputStream)`                                                                                                       | `org.jetbrains.kotlin.protobuf.CodedInputStream`                          |
|     new | +1,023.998 KiB | 0.0% → 0.1% |       0 B → 1 MiB |   0 → 2 | `visitMethod(int, String, String, String, String[])`                                                                        | `org.jetbrains.kotlin.load.kotlin.FileBasedKotlinClass$4`                 |
| +200.0% | +1,023.998 KiB | 0.1% → 0.2% | 512 KiB → 1.5 MiB |   1 → 3 | `getAnnotationsByClassId(List, ClassId, FirSession)`                                                                        | `org.jetbrains.kotlin.fir.declarations.FirAnnotationUtilsKt`              |
| +200.0% | +1,023.998 KiB | 0.1% → 0.2% | 512 KiB → 1.5 MiB |   1 → 3 | `newTypeCheckerState(TypeSystemContext, boolean, boolean, boolean)`                                                         | `org.jetbrains.kotlin.fir.types.ConeInferenceContext`                     |
| +200.0% | +1,023.998 KiB | 0.1% → 0.2% | 512 KiB → 1.5 MiB |   1 → 3 | `approximateParametrizedType(TypeApproximatorConfiguration, AbstractTypeApproximator$Cache, RigidTypeMarker, boolean, int)` | `org.jetbrains.kotlin.types.AbstractTypeApproximator`                     |
|     new | +1,023.998 KiB | 0.0% → 0.1% |       0 B → 1 MiB |   0 → 2 | `<init>()`                                                                                                                  | `org.jetbrains.kotlin.load.java.structure.impl.classFiles.JavaPlainType`  |
|     new | +1,023.998 KiB | 0.0% → 0.1% |       0 B → 1 MiB |   0 → 2 | `freeze()`                                                                                                                  | `org.jetbrains.kotlin.fir.resolve.dfa.MutableFlow`                        |
|     new | +1,023.998 KiB | 0.0% → 0.1% |       0 B → 1 MiB |   0 → 2 | `prepareForEmitting(MethodNode)`                                                                                            | `org.jetbrains.kotlin.codegen.optimization.common.UtilKt`                 |
|     new |   +511.999 KiB | 0.0% → 0.1% |     0 B → 512 KiB |   0 → 1 | `parseCentralDirectory$lambda$0(Ref$LongRef, List, long, LargeDynamicMappedBuffer$Mapping)`                                 | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt`         |
|     new |   +511.999 KiB | 0.0% → 0.1% |     0 B → 512 KiB |   0 → 1 | `withMappedRangeFrom(long, Function1)`                                                                                      | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.LargeDynamicMappedBuffer`    |
|     new |   +511.999 KiB | 0.0% → 0.1% |     0 B → 512 KiB |   0 → 1 | `<init>(CodedInputStream, ExtensionRegistryLite)`                                                                           | `org.jetbrains.kotlin.metadata.ProtoBuf$Function`                         |
|     new |   +511.999 KiB | 0.0% → 0.1% |     0 B → 512 KiB |   0 → 1 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)`                                                                 | `org.jetbrains.kotlin.metadata.ProtoBuf$TypeTable$1`                      |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

|  Change |      Delta |           % |              Size | Samples | Function                                                    | Location                                                                                           |
| ------: | ---------: | ----------: | ----------------: | ------: | ----------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
|  -12.1% | -5.813 MiB | 7.2% → 6.0% | 48 MiB → 42.2 MiB | 96 → 84 | `clone()`                                                   | `java.lang.Object`                                                                                 |
|  -23.9% | -5.499 MiB | 3.4% → 2.5% | 23 MiB → 17.5 MiB | 46 → 35 | `copyOfRangeByte(byte[], int, int)`                         | `java.util.Arrays`                                                                                 |
|  -41.2% | -3.499 MiB | 1.3% → 0.7% |   8.5 MiB → 5 MiB | 17 → 10 | `<init>(int, int)`                                          | `org.jetbrains.org.objectweb.asm.tree.analysis.Frame`                                              |
|  -54.5% | -2.999 MiB | 0.8% → 0.4% | 5.5 MiB → 2.5 MiB |  11 → 5 | `newOutput()`                                               | `org.jetbrains.kotlin.protobuf.ByteString`                                                         |
|  -50.0% | -2.499 MiB | 0.7% → 0.4% |   5 MiB → 2.5 MiB |  10 → 5 | `<init>(int)`                                               | `java.lang.AbstractStringBuilder`                                                                  |
|  -83.3% | -2.499 MiB | 0.4% → 0.1% |   3 MiB → 512 KiB |   6 → 1 | `simplifyTrivialInstructions(MethodNode)`                   | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer` |
|  -25.0% | -1.999 MiB | 1.2% → 0.9% |     8 MiB → 6 MiB | 16 → 12 | `newNode(int, Object, Object, HashMap$Node)`                | `java.util.LinkedHashMap`                                                                          |
|  -80.0% | -1.999 MiB | 0.4% → 0.1% | 2.5 MiB → 512 KiB |   5 → 1 | `stringFromByteBuffer(ByteBuffer, int)`                     | `jdk.internal.jimage.ImageStringsReader`                                                           |
| removed | -1.999 MiB | 0.3% → 0.0% |       2 MiB → 0 B |   4 → 0 | `<init>(MethodNode, boolean)`                               | `org.jetbrains.kotlin.codegen.optimization.common.InstructionLivenessAnalyzer`                     |
|  -42.9% | -1.499 MiB | 0.5% → 0.3% |   3.5 MiB → 2 MiB |   7 → 4 | `loadAllClassesFromJars(Collection, int, ClassHandler)`     | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`                                             |
|  -60.0% | -1.499 MiB | 0.4% → 0.1% |   2.5 MiB → 1 MiB |   5 → 2 | `<init>(ClassWriter)`                                       | `jdk.internal.org.objectweb.asm.SymbolTable`                                                       |
|  -75.0% | -1.499 MiB | 0.3% → 0.1% |   2 MiB → 512 KiB |   4 → 1 | `<init>(byte[], int, boolean)`                              | `org.jetbrains.org.objectweb.asm.ClassReader`                                                      |
|   -8.8% | -1.499 MiB | 2.5% → 2.2% | 17 MiB → 15.5 MiB | 34 → 31 | `<init>(int)`                                               | `org.jetbrains.kotlin.protobuf.ByteString$Output`                                                  |
|  -75.0% | -1.499 MiB | 0.3% → 0.1% |   2 MiB → 512 KiB |   4 → 1 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$ValueParameter$1`                                          |
|  -50.0% | -1.499 MiB | 0.4% → 0.2% |   3 MiB → 1.5 MiB |   6 → 3 | `create()`                                                  | `com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure$2`                                          |
| removed | -1.499 MiB | 0.2% → 0.0% |     1.5 MiB → 0 B |   3 → 0 | `newFieldMap(int)`                                          | `org.jetbrains.kotlin.protobuf.SmallSortedMap`                                                     |
| removed | -1.499 MiB | 0.2% → 0.0% |     1.5 MiB → 0 B |   3 → 0 | `traverseIds(int)`                                          | `org.jetbrains.kotlin.metadata.deserialization.NameResolverImpl`                                   |
| removed | -1.499 MiB | 0.2% → 0.0% |     1.5 MiB → 0 B |   3 → 0 | `buildDefaultFlow(CFGNode, Function2)`                      | `org.jetbrains.kotlin.fir.resolve.dfa.FirDataFlowAnalyzer`                                         |
|  -60.0% | -1.499 MiB | 0.4% → 0.1% |   2.5 MiB → 1 MiB |   5 → 2 | `<init>()`                                                  | `org.jetbrains.kotlin.resolve.calls.inference.model.MutableConstraintStorage`                      |
| removed | -1.499 MiB | 0.2% → 0.0% |     1.5 MiB → 0 B |   3 → 0 | `sequencedKeySet()`                                         | `java.util.LinkedHashMap`                                                                          |

##### Standard library

|  Change |          Delta |           % |              Size | Samples | Function                                     | Location                                                                            |
| ------: | -------------: | ----------: | ----------------: | ------: | -------------------------------------------- | ----------------------------------------------------------------------------------- |
|  -12.1% |     -5.813 MiB | 7.2% → 6.0% | 48 MiB → 42.2 MiB | 96 → 84 | `clone()`                                    | `java.lang.Object`                                                                  |
|  -23.9% |     -5.499 MiB | 3.4% → 2.5% | 23 MiB → 17.5 MiB | 46 → 35 | `copyOfRangeByte(byte[], int, int)`          | `java.util.Arrays`                                                                  |
|  -50.0% |     -2.499 MiB | 0.7% → 0.4% |   5 MiB → 2.5 MiB |  10 → 5 | `<init>(int)`                                | `java.lang.AbstractStringBuilder`                                                   |
|  -25.0% |     -1.999 MiB | 1.2% → 0.9% |     8 MiB → 6 MiB | 16 → 12 | `newNode(int, Object, Object, HashMap$Node)` | `java.util.LinkedHashMap`                                                           |
|  -80.0% |     -1.999 MiB | 0.4% → 0.1% | 2.5 MiB → 512 KiB |   5 → 1 | `stringFromByteBuffer(ByteBuffer, int)`      | `jdk.internal.jimage.ImageStringsReader`                                            |
|  -60.0% |     -1.499 MiB | 0.4% → 0.1% |   2.5 MiB → 1 MiB |   5 → 2 | `<init>(ClassWriter)`                        | `jdk.internal.org.objectweb.asm.SymbolTable`                                        |
| removed |     -1.499 MiB | 0.2% → 0.0% |     1.5 MiB → 0 B |   3 → 0 | `sequencedKeySet()`                          | `java.util.LinkedHashMap`                                                           |
| removed | -1,023.998 KiB | 0.1% → 0.0% |       1 MiB → 0 B |   2 → 0 | `newOutput()`                                | `kotlin.reflect.jvm.internal.impl.protobuf.ByteString`                              |
|  -33.3% | -1,023.998 KiB | 0.4% → 0.3% |     3 MiB → 2 MiB |   6 → 4 | `enlarge(int)`                               | `jdk.internal.org.objectweb.asm.ByteVector`                                         |
|  -33.3% | -1,023.998 KiB | 0.4% → 0.3% |     3 MiB → 2 MiB |   6 → 4 | `<init>(int)`                                | `java.util.ArrayList`                                                               |
|  -66.7% | -1,023.998 KiB | 0.2% → 0.1% | 1.5 MiB → 512 KiB |   3 → 1 | `copyOf(Object[], int, Class)`               | `java.util.Arrays`                                                                  |
| removed | -1,023.998 KiB | 0.1% → 0.0% |       1 MiB → 0 B |   2 → 0 | `getFileName()`                              | `jdk.internal.jrtfs.JrtPath`                                                        |
| removed |   -511.999 KiB | 0.1% → 0.0% |     512 KiB → 0 B |   1 → 0 | `<init>(InputStream, int)`                   | `java.util.jar.Manifest$FastInputStream`                                            |
| removed |   -511.999 KiB | 0.1% → 0.0% |     512 KiB → 0 B |   1 → 0 | `copy()`                                     | `java.lang.reflect.Method`                                                          |
| removed |   -511.999 KiB | 0.1% → 0.0% |     512 KiB → 0 B |   1 → 0 | `setLocal(int, int)`                         | `jdk.internal.org.objectweb.asm.Frame`                                              |
| removed |   -511.999 KiB | 0.1% → 0.0% |     512 KiB → 0 B |   1 → 0 | `<clinit>()`                                 | `kotlin.reflect.jvm.internal.impl.builtins.jvm.JvmBuiltInsCustomizer`               |
| removed |   -511.999 KiB | 0.1% → 0.0% |     512 KiB → 0 B |   1 → 0 | `<clinit>()`                                 | `kotlin.reflect.jvm.internal.impl.metadata.jvm.deserialization.JvmNameResolverBase` |
| removed |   -511.999 KiB | 0.1% → 0.0% |     512 KiB → 0 B |   1 → 0 | `<clinit>()`                                 | `kotlin.reflect.jvm.internal.impl.builtins.jvm.JvmBuiltInsSignatures`               |
| removed |   -511.999 KiB | 0.1% → 0.0% |     512 KiB → 0 B |   1 → 0 | `descriptorString()`                         | `java.lang.Class`                                                                   |
| removed |   -511.999 KiB | 0.1% → 0.0% |     512 KiB → 0 B |   1 → 0 | `newTable(int)`                              | `java.util.WeakHashMap`                                                             |

##### Ours

|  Change |          Delta |           % |              Size | Samples | Function                                                    | Location                                                                                           |
| ------: | -------------: | ----------: | ----------------: | ------: | ----------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
|  -41.2% |     -3.499 MiB | 1.3% → 0.7% |   8.5 MiB → 5 MiB | 17 → 10 | `<init>(int, int)`                                          | `org.jetbrains.org.objectweb.asm.tree.analysis.Frame`                                              |
|  -54.5% |     -2.999 MiB | 0.8% → 0.4% | 5.5 MiB → 2.5 MiB |  11 → 5 | `newOutput()`                                               | `org.jetbrains.kotlin.protobuf.ByteString`                                                         |
|  -83.3% |     -2.499 MiB | 0.4% → 0.1% |   3 MiB → 512 KiB |   6 → 1 | `simplifyTrivialInstructions(MethodNode)`                   | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer` |
| removed |     -1.999 MiB | 0.3% → 0.0% |       2 MiB → 0 B |   4 → 0 | `<init>(MethodNode, boolean)`                               | `org.jetbrains.kotlin.codegen.optimization.common.InstructionLivenessAnalyzer`                     |
|  -42.9% |     -1.499 MiB | 0.5% → 0.3% |   3.5 MiB → 2 MiB |   7 → 4 | `loadAllClassesFromJars(Collection, int, ClassHandler)`     | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`                                             |
|  -75.0% |     -1.499 MiB | 0.3% → 0.1% |   2 MiB → 512 KiB |   4 → 1 | `<init>(byte[], int, boolean)`                              | `org.jetbrains.org.objectweb.asm.ClassReader`                                                      |
|   -8.8% |     -1.499 MiB | 2.5% → 2.2% | 17 MiB → 15.5 MiB | 34 → 31 | `<init>(int)`                                               | `org.jetbrains.kotlin.protobuf.ByteString$Output`                                                  |
|  -75.0% |     -1.499 MiB | 0.3% → 0.1% |   2 MiB → 512 KiB |   4 → 1 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$ValueParameter$1`                                          |
|  -50.0% |     -1.499 MiB | 0.4% → 0.2% |   3 MiB → 1.5 MiB |   6 → 3 | `create()`                                                  | `com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure$2`                                          |
| removed |     -1.499 MiB | 0.2% → 0.0% |     1.5 MiB → 0 B |   3 → 0 | `newFieldMap(int)`                                          | `org.jetbrains.kotlin.protobuf.SmallSortedMap`                                                     |
| removed |     -1.499 MiB | 0.2% → 0.0% |     1.5 MiB → 0 B |   3 → 0 | `traverseIds(int)`                                          | `org.jetbrains.kotlin.metadata.deserialization.NameResolverImpl`                                   |
| removed |     -1.499 MiB | 0.2% → 0.0% |     1.5 MiB → 0 B |   3 → 0 | `buildDefaultFlow(CFGNode, Function2)`                      | `org.jetbrains.kotlin.fir.resolve.dfa.FirDataFlowAnalyzer`                                         |
|  -60.0% |     -1.499 MiB | 0.4% → 0.1% |   2.5 MiB → 1 MiB |   5 → 2 | `<init>()`                                                  | `org.jetbrains.kotlin.resolve.calls.inference.model.MutableConstraintStorage`                      |
| removed |     -1.499 MiB | 0.2% → 0.0% |     1.5 MiB → 0 B |   3 → 0 | `<init>(FixStackAnalyzer, int, int)`                        | `org.jetbrains.kotlin.codegen.optimization.fixStack.FixStackAnalyzer$FixStackFrame`                |
| removed |     -1.499 MiB | 0.2% → 0.0% |     1.5 MiB → 0 B |   3 → 0 | `_init_$lambda$0(int, int)`                                 | `org.jetbrains.kotlin.codegen.optimization.common.FastMethodAnalyzer`                              |
|  -60.0% |     -1.499 MiB | 0.4% → 0.1% |   2.5 MiB → 1 MiB |   5 → 2 | `visitVarInsn(int, int)`                                    | `org.jetbrains.org.objectweb.asm.tree.MethodNode`                                                  |
|  -50.0% | -1,023.998 KiB | 0.3% → 0.1% |     2 MiB → 1 MiB |   4 → 2 | `toString()`                                                | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ByteArrayCharSequence`                                |
| removed | -1,023.998 KiB | 0.1% → 0.0% |       1 MiB → 0 B |   2 → 0 | `subSequence(int, int)`                                     | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ByteArrayCharSequence`                                |
| removed | -1,023.998 KiB | 0.1% → 0.0% |       1 MiB → 0 B |   2 → 0 | `<init>(CodedInputStream, ExtensionRegistryLite)`           | `org.jetbrains.kotlin.metadata.ProtoBuf$Type`                                                      |
|  -22.2% | -1,023.998 KiB | 0.7% → 0.5% | 4.5 MiB → 3.5 MiB |   9 → 7 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$1`                                                    |

#### Lines

Lines with the largest change in contribution to each function's self size.

##### `<init>(int)` (`java.io.ByteArrayOutputStream`)

| Change |       Delta |      % |              Size |   Samples | Location                           |
| -----: | ----------: | -----: | ----------------: | --------: | ---------------------------------- |
| +15.3% | +24.186 MiB | 100.0% | 158 MiB → 182 MiB | 316 → 364 | `java.io.ByteArrayOutputStream:81` |

##### `copyOf(byte[], int)` (`java.util.Arrays`)

| Change |        Delta |             % |              Size |   Samples | Location                |
| -----: | -----------: | ------------: | ----------------: | --------: | ----------------------- |
|  +8.4% |  +10.499 MiB | 93.3% → 93.5% | 125 MiB → 136 MiB | 251 → 272 | `java.util.Arrays:3539` |
|  +5.6% | +511.999 KiB |   6.7% → 6.5% |   9 MiB → 9.5 MiB |   18 → 19 | `java.util.Arrays:3541` |

##### `newInstance(OutputStream, int)` (`org.jetbrains.kotlin.protobuf.CodedOutputStream`)

|  Change |      Delta |      % |            Size | Samples | Location                                              |
| ------: | ---------: | -----: | --------------: | ------: | ----------------------------------------------------- |
| +325.0% | +6.499 MiB | 100.0% | 2 MiB → 8.5 MiB |  4 → 17 | `org.jetbrains.kotlin.protobuf.CodedOutputStream:106` |

##### `copyOfRange(byte[], int, int)` (`java.util.Arrays`)

|  Change |      Delta |      % |            Size | Samples | Location                |
| ------: | ---------: | -----: | --------------: | ------: | ----------------------- |
| +233.3% | +3.499 MiB | 100.0% | 1.5 MiB → 5 MiB |  3 → 10 | `java.util.Arrays:3856` |

##### `allocateUninitializedArray(Class, int)` (`jdk.internal.misc.Unsafe`)

|  Change |      Delta |      % |            Size | Samples | Location                        |
| ------: | ---------: | -----: | --------------: | ------: | ------------------------------- |
| +233.3% | +3.499 MiB | 100.0% | 1.5 MiB → 5 MiB |  3 → 10 | `jdk.internal.misc.Unsafe:1380` |

##### `unmodifiableList(List)` (`java.util.Collections`)

| Change |      Delta |             % |        Size | Samples | Location                     |
| -----: | ---------: | ------------: | ----------: | ------: | ---------------------------- |
|    new | +2.999 MiB | 0.0% → 100.0% | 0 B → 3 MiB |   0 → 6 | `java.util.Collections:1479` |

##### `readUtf(int, int, char[])` (`org.jetbrains.org.objectweb.asm.ClassReader`)

|  Change |      Delta |      % |            Size | Samples | Location                                           |
| ------: | ---------: | -----: | --------------: | ------: | -------------------------------------------------- |
| +500.0% | +2.499 MiB | 100.0% | 512 KiB → 3 MiB |   1 → 6 | `org.jetbrains.org.objectweb.asm.ClassReader:3886` |

##### `newFieldSet()` (`org.jetbrains.kotlin.protobuf.FieldSet`)

| Change |      Delta |             % |          Size | Samples | Location                                    |
| -----: | ---------: | ------------: | ------------: | ------: | ------------------------------------------- |
|    new | +2.499 MiB | 0.0% → 100.0% | 0 B → 2.5 MiB |   0 → 5 | `org.jetbrains.kotlin.protobuf.FieldSet:92` |

##### `<init>(int, float, boolean)` (`java.util.HashSet`)

| Change |      Delta |      % |            Size | Samples | Location                |
| -----: | ---------: | -----: | --------------: | ------: | ----------------------- |
| +71.4% | +2.499 MiB | 100.0% | 3.5 MiB → 6 MiB |  7 → 12 | `java.util.HashSet:171` |

##### `resize()` (`java.util.HashMap`)

| Change |      Delta |      % |            Size | Samples | Location                |
| -----: | ---------: | -----: | --------------: | ------: | ----------------------- |
| +83.3% | +2.499 MiB | 100.0% | 3 MiB → 5.5 MiB |  6 → 11 | `java.util.HashMap:710` |

##### `newStringUTF8NoRepl(byte[], int, int, boolean)` (`java.lang.String`)

| Change |      Delta |             % |        Size | Samples | Location               |
| -----: | ---------: | ------------: | ----------: | ------: | ---------------------- |
|    new | +1.999 MiB | 0.0% → 100.0% | 0 B → 2 MiB |   0 → 4 | `java.lang.String:709` |

##### `replace(byte[], char, char)` (`java.lang.StringLatin1`)

|  Change |      Delta |      % |              Size | Samples | Location                     |
| ------: | ---------: | -----: | ----------------: | ------: | ---------------------------- |
| +133.3% | +1.999 MiB | 100.0% | 1.5 MiB → 3.5 MiB |   3 → 7 | `java.lang.StringLatin1:317` |

##### `grow(int)` (`java.util.ArrayList`)

| Change |      Delta |      % |          Size | Samples | Location                  |
| -----: | ---------: | -----: | ------------: | ------: | ------------------------- |
| +33.3% | +1.999 MiB | 100.0% | 6 MiB → 8 MiB | 12 → 16 | `java.util.ArrayList:239` |

##### `<init>(MethodHandles$Lookup, MethodType, String, MethodType, MethodHandle, MethodType, boolean, Class[], MethodType[])` (`java.lang.invoke.InnerClassLambdaMetafactory`)

| Change |          Delta |            % |          Size | Samples | Location                                           |
| -----: | -------------: | -----------: | ------------: | ------: | -------------------------------------------------- |
|    new | +1,023.998 KiB | 0.0% → 66.7% |   0 B → 1 MiB |   0 → 2 | `java.lang.invoke.InnerClassLambdaMetafactory:185` |
|    new |   +511.999 KiB | 0.0% → 33.3% | 0 B → 512 KiB |   0 → 1 | `java.lang.invoke.InnerClassLambdaMetafactory:191` |

##### `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Function$1`)

| Change |      Delta |             % |          Size | Samples | Location                                                  |
| -----: | ---------: | ------------: | ------------: | ------: | --------------------------------------------------------- |
|    new | +1.499 MiB | 0.0% → 100.0% | 0 B → 1.5 MiB |   0 → 3 | `org.jetbrains.kotlin.metadata.ProtoBuf$Function$1:16780` |

##### `<init>(int)` (`kotlin.collections.builders.MapBuilder`)

| Change |          Delta |              % |            Size | Samples | Location                                    |
| -----: | -------------: | -------------: | --------------: | ------: | ------------------------------------------- |
|    new | +1,023.998 KiB |   0.0% → 33.3% |     0 B → 1 MiB |   0 → 2 | `kotlin.collections.builders.MapBuilder:59` |
| +33.3% |   +511.999 KiB | 100.0% → 66.7% | 1.5 MiB → 2 MiB |   3 → 4 | `kotlin.collections.builders.MapBuilder:60` |

##### `read(InputStream, int)` (`java.nio.file.Files`)

| Change |      Delta |             % |          Size | Samples | Location                   |
| -----: | ---------: | ------------: | ------------: | ------: | -------------------------- |
|    new | +1.499 MiB | 0.0% → 100.0% | 0 B → 1.5 MiB |   0 → 3 | `java.nio.file.Files:3231` |

##### `createScope(IrSymbolOwner)` (`org.jetbrains.kotlin.backend.common.IrElementTransformerVoidWithContext`)

|  Change |      Delta |      % |            Size | Samples | Location                                                                     |
| ------: | ---------: | -----: | --------------: | ------: | ---------------------------------------------------------------------------- |
| +300.0% | +1.499 MiB | 100.0% | 512 KiB → 2 MiB |   1 → 4 | `org.jetbrains.kotlin.backend.common.IrElementTransformerVoidWithContext:36` |

##### `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

|  Change |          Delta |             % |                Size | Samples | Location                            |
| ------: | -------------: | ------------: | ------------------: | ------: | ----------------------------------- |
|  +31.2% | +1,023.998 KiB | 86.5% → 89.4% | 3.21 MiB → 4.21 MiB |   1 → 3 | `java.util.zip.ZipFile$Source:1733` |
| removed |   -511.999 KiB |  13.5% → 0.0% |       512 KiB → 0 B |   1 → 0 | `java.util.zip.ZipFile$Source:1749` |
|     new |   +511.999 KiB |  0.0% → 10.6% |       0 B → 512 KiB |   0 → 1 | `java.util.zip.ZipFile$Source:1744` |

##### `toString()` (`java.lang.StringBuilder`)

|  Change |          Delta |      % |              Size | Samples | Location                      |
| ------: | -------------: | -----: | ----------------: | ------: | ----------------------------- |
| +200.0% | +1,023.998 KiB | 100.0% | 512 KiB → 1.5 MiB |   1 → 3 | `java.lang.StringBuilder:475` |

##### `addConstantUtf8(String)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

|  Change |          Delta |      % |              Size | Samples | Location                                         |
| ------: | -------------: | -----: | ----------------: | ------: | ------------------------------------------------ |
| +200.0% | +1,023.998 KiB | 100.0% | 512 KiB → 1.5 MiB |   1 → 3 | `jdk.internal.org.objectweb.asm.SymbolTable:807` |

##### `addConstantMemberReference(int, String, String, String)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

| Change |          Delta |             % |        Size | Samples | Location                                         |
| -----: | -------------: | ------------: | ----------: | ------: | ------------------------------------------------ |
|    new | +1,023.998 KiB | 0.0% → 100.0% | 0 B → 1 MiB |   0 → 2 | `jdk.internal.org.objectweb.asm.SymbolTable:605` |

##### `<init>(PersistentHashMap)` (`kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMapBuilder`)

|  Change |          Delta |      % |              Size | Samples | Location                                                                                 |
| ------: | -------------: | -----: | ----------------: | ------: | ---------------------------------------------------------------------------------------- |
| +200.0% | +1,023.998 KiB | 100.0% | 512 KiB → 1.5 MiB |   1 → 3 | `kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMapBuilder:16` |

##### `addConstantUtf8Reference(int, String)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

| Change |          Delta |             % |        Size | Samples | Location                                          |
| -----: | -------------: | ------------: | ----------: | ------: | ------------------------------------------------- |
|    new | +1,023.998 KiB | 0.0% → 100.0% | 0 B → 1 MiB |   0 → 2 | `jdk.internal.org.objectweb.asm.SymbolTable:1040` |

##### `visitLineNumber(int, Label)` (`org.jetbrains.org.objectweb.asm.tree.MethodNode`)

| Change |      Delta |             % |          Size | Samples | Location                                              |
| -----: | ---------: | ------------: | ------------: | ------: | ----------------------------------------------------- |
|    new | +1.499 MiB | 0.0% → 100.0% | 0 B → 1.5 MiB |   0 → 3 | `org.jetbrains.org.objectweb.asm.tree.MethodNode:510` |

##### `accept(ClassVisitor, Attribute[], int)` (`org.jetbrains.org.objectweb.asm.ClassReader`)

|  Change |        Delta |              % |          Size | Samples | Location                                          |
| ------: | -----------: | -------------: | ------------: | ------: | ------------------------------------------------- |
| +200.0% |   +1.999 MiB | 50.0% → 100.0% | 1 MiB → 3 MiB |   2 → 6 | `org.jetbrains.org.objectweb.asm.ClassReader:458` |
| removed | -511.999 KiB |   25.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `org.jetbrains.org.objectweb.asm.ClassReader:455` |
| removed | -511.999 KiB |   25.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `org.jetbrains.org.objectweb.asm.ClassReader:545` |

##### `<init>(InputStream)` (`org.jetbrains.kotlin.protobuf.CodedInputStream`)

|  Change |          Delta |      % |          Size | Samples | Location                                             |
| ------: | -------------: | -----: | ------------: | ------: | ---------------------------------------------------- |
| +100.0% | +1,023.998 KiB | 100.0% | 1 MiB → 2 MiB |   2 → 4 | `org.jetbrains.kotlin.protobuf.CodedInputStream:911` |

##### `visitMethod(int, String, String, String, String[])` (`org.jetbrains.kotlin.load.kotlin.FileBasedKotlinClass$4`)

| Change |          Delta |             % |        Size | Samples | Location                                                      |
| -----: | -------------: | ------------: | ----------: | ------: | ------------------------------------------------------------- |
|    new | +1,023.998 KiB | 0.0% → 100.0% | 0 B → 1 MiB |   0 → 2 | `org.jetbrains.kotlin.load.kotlin.FileBasedKotlinClass$4:255` |

##### `getAnnotationsByClassId(List, ClassId, FirSession)` (`org.jetbrains.kotlin.fir.declarations.FirAnnotationUtilsKt`)

|  Change |          Delta |      % |              Size | Samples | Location                                                         |
| ------: | -------------: | -----: | ----------------: | ------: | ---------------------------------------------------------------- |
| +200.0% | +1,023.998 KiB | 100.0% | 512 KiB → 1.5 MiB |   1 → 3 | `org.jetbrains.kotlin.fir.declarations.FirAnnotationUtilsKt:287` |

##### `newTypeCheckerState(TypeSystemContext, boolean, boolean, boolean)` (`org.jetbrains.kotlin.fir.types.ConeInferenceContext`)

|  Change |        Delta |              % |            Size | Samples | Location                                                  |
| ------: | -----------: | -------------: | --------------: | ------: | --------------------------------------------------------- |
| +100.0% | +511.999 KiB | 100.0% → 66.7% | 512 KiB → 1 MiB |   1 → 2 | `org.jetbrains.kotlin.fir.types.ConeInferenceContext:169` |
|     new | +511.999 KiB |   0.0% → 33.3% |   0 B → 512 KiB |   0 → 1 | `org.jetbrains.kotlin.fir.types.ConeInferenceContext:175` |

##### `approximateParametrizedType(TypeApproximatorConfiguration, AbstractTypeApproximator$Cache, RigidTypeMarker, boolean, int)` (`org.jetbrains.kotlin.types.AbstractTypeApproximator`)

|  Change |          Delta |      % |              Size | Samples | Location                                                  |
| ------: | -------------: | -----: | ----------------: | ------: | --------------------------------------------------------- |
| +200.0% | +1,023.998 KiB | 100.0% | 512 KiB → 1.5 MiB |   1 → 3 | `org.jetbrains.kotlin.types.AbstractTypeApproximator:729` |

##### `<init>()` (`org.jetbrains.kotlin.load.java.structure.impl.classFiles.JavaPlainType`)

| Change |          Delta |             % |        Size | Samples | Location                                                                    |
| -----: | -------------: | ------------: | ----------: | ------: | --------------------------------------------------------------------------- |
|    new | +1,023.998 KiB | 0.0% → 100.0% | 0 B → 1 MiB |   0 → 2 | `org.jetbrains.kotlin.load.java.structure.impl.classFiles.JavaPlainType:24` |

##### `freeze()` (`org.jetbrains.kotlin.fir.resolve.dfa.MutableFlow`)

| Change |          Delta |             % |        Size | Samples | Location                                               |
| -----: | -------------: | ------------: | ----------: | ------: | ------------------------------------------------------ |
|    new | +1,023.998 KiB | 0.0% → 100.0% | 0 B → 1 MiB |   0 → 2 | `org.jetbrains.kotlin.fir.resolve.dfa.MutableFlow:109` |

##### `prepareForEmitting(MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.common.UtilKt`)

| Change |        Delta |            % |          Size | Samples | Location                                                      |
| -----: | -----------: | -----------: | ------------: | ------: | ------------------------------------------------------------- |
|    new | +511.999 KiB | 0.0% → 50.0% | 0 B → 512 KiB |   0 → 1 | `org.jetbrains.kotlin.codegen.optimization.common.UtilKt:87`  |
|    new | +511.999 KiB | 0.0% → 50.0% | 0 B → 512 KiB |   0 → 1 | `org.jetbrains.kotlin.codegen.optimization.common.UtilKt:269` |

##### `parseCentralDirectory$lambda$0(Ref$LongRef, List, long, LargeDynamicMappedBuffer$Mapping)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt`)

| Change |        Delta |             % |          Size | Samples | Location                                                              |
| -----: | -----------: | ------------: | ------------: | ------: | --------------------------------------------------------------------- |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt:130` |

##### `withMappedRangeFrom(long, Function1)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.LargeDynamicMappedBuffer`)

| Change |        Delta |             % |          Size | Samples | Location                                                                  |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------------------------------------------------------- |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.LargeDynamicMappedBuffer:65` |

##### `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Function`)

| Change |        Delta |             % |          Size | Samples | Location                                                |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------------------------------------- |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `org.jetbrains.kotlin.metadata.ProtoBuf$Function:16600` |

##### `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$TypeTable$1`)

| Change |        Delta |             % |          Size | Samples | Location                                                   |
| -----: | -----------: | ------------: | ------------: | ------: | ---------------------------------------------------------- |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `org.jetbrains.kotlin.metadata.ProtoBuf$TypeTable$1:14468` |

##### `copyOfRangeByte(byte[], int, int)` (`java.util.Arrays`)

| Change |      Delta |      % |              Size | Samples | Location                |
| -----: | ---------: | -----: | ----------------: | ------: | ----------------------- |
| -23.9% | -5.499 MiB | 100.0% | 23 MiB → 17.5 MiB | 46 → 35 | `java.util.Arrays:3863` |

##### `<init>(int, int)` (`org.jetbrains.org.objectweb.asm.tree.analysis.Frame`)

| Change |      Delta |      % |            Size | Samples | Location                                                 |
| -----: | ---------: | -----: | --------------: | ------: | -------------------------------------------------------- |
| -41.2% | -3.499 MiB | 100.0% | 8.5 MiB → 5 MiB | 17 → 10 | `org.jetbrains.org.objectweb.asm.tree.analysis.Frame:96` |

##### `newOutput()` (`org.jetbrains.kotlin.protobuf.ByteString`)

| Change |      Delta |      % |              Size | Samples | Location                                       |
| -----: | ---------: | -----: | ----------------: | ------: | ---------------------------------------------- |
| -54.5% | -2.999 MiB | 100.0% | 5.5 MiB → 2.5 MiB |  11 → 5 | `org.jetbrains.kotlin.protobuf.ByteString:751` |

##### `<init>(int)` (`java.lang.AbstractStringBuilder`)

| Change |      Delta |      % |            Size | Samples | Location                              |
| -----: | ---------: | -----: | --------------: | ------: | ------------------------------------- |
| -50.0% | -2.499 MiB | 100.0% | 5 MiB → 2.5 MiB |  10 → 5 | `java.lang.AbstractStringBuilder:101` |

##### `simplifyTrivialInstructions(MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer`)

|  Change |          Delta |             % |          Size | Samples | Location                                                                                              |
| ------: | -------------: | ------------: | ------------: | ------: | ----------------------------------------------------------------------------------------------------- |
| removed | -1,023.998 KiB |  33.3% → 0.0% |   1 MiB → 0 B |   2 → 0 | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer:49` |
| removed | -1,023.998 KiB |  33.3% → 0.0% |   1 MiB → 0 B |   2 → 0 | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer:58` |
| removed |   -511.999 KiB |  16.7% → 0.0% | 512 KiB → 0 B |   1 → 0 | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer:48` |
| removed |   -511.999 KiB |  16.7% → 0.0% | 512 KiB → 0 B |   1 → 0 | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer:57` |
|     new |   +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer:50` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.LinkedHashMap`)

| Change |      Delta |      % |          Size | Samples | Location                      |
| -----: | ---------: | -----: | ------------: | ------: | ----------------------------- |
| -25.0% | -1.999 MiB | 100.0% | 8 MiB → 6 MiB | 16 → 12 | `java.util.LinkedHashMap:281` |

##### `stringFromByteBuffer(ByteBuffer, int)` (`jdk.internal.jimage.ImageStringsReader`)

|  Change |          Delta |              % |              Size | Samples | Location                                     |
| ------: | -------------: | -------------: | ----------------: | ------: | -------------------------------------------- |
|  -66.7% | -1,023.998 KiB | 60.0% → 100.0% | 1.5 MiB → 512 KiB |   3 → 1 | `jdk.internal.jimage.ImageStringsReader:266` |
| removed | -1,023.998 KiB |   40.0% → 0.0% |       1 MiB → 0 B |   2 → 0 | `jdk.internal.jimage.ImageStringsReader:272` |

##### `<init>(MethodNode, boolean)` (`org.jetbrains.kotlin.codegen.optimization.common.InstructionLivenessAnalyzer`)

|  Change |          Delta |            % |          Size | Samples | Location                                                                          |
| ------: | -------------: | -----------: | ------------: | ------: | --------------------------------------------------------------------------------- |
| removed | -1,023.998 KiB | 50.0% → 0.0% |   1 MiB → 0 B |   2 → 0 | `org.jetbrains.kotlin.codegen.optimization.common.InstructionLivenessAnalyzer:49` |
| removed |   -511.999 KiB | 25.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `org.jetbrains.kotlin.codegen.optimization.common.InstructionLivenessAnalyzer:50` |
| removed |   -511.999 KiB | 25.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `org.jetbrains.kotlin.codegen.optimization.common.InstructionLivenessAnalyzer:51` |

##### `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`)

| Change |          Delta |             % |              Size | Samples | Location                                                   |
| -----: | -------------: | ------------: | ----------------: | ------: | ---------------------------------------------------------- |
| -66.7% | -1,023.998 KiB | 42.9% → 25.0% | 1.5 MiB → 512 KiB |   3 → 1 | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils:139` |
| -25.0% |   -511.999 KiB | 57.1% → 75.0% |   2 MiB → 1.5 MiB |   4 → 3 | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils:151` |

##### `<init>(ClassWriter)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

| Change |      Delta |      % |            Size | Samples | Location                                         |
| -----: | ---------: | -----: | --------------: | ------: | ------------------------------------------------ |
| -60.0% | -1.499 MiB | 100.0% | 2.5 MiB → 1 MiB |   5 → 2 | `jdk.internal.org.objectweb.asm.SymbolTable:156` |

##### `<init>(byte[], int, boolean)` (`org.jetbrains.org.objectweb.asm.ClassReader`)

|  Change |          Delta |              % |              Size | Samples | Location                                          |
| ------: | -------------: | -------------: | ----------------: | ------: | ------------------------------------------------- |
|  -66.7% | -1,023.998 KiB | 75.0% → 100.0% | 1.5 MiB → 512 KiB |   3 → 1 | `org.jetbrains.org.objectweb.asm.ClassReader:215` |
| removed |   -511.999 KiB |   25.0% → 0.0% |     512 KiB → 0 B |   1 → 0 | `org.jetbrains.org.objectweb.asm.ClassReader:214` |

##### `<init>(int)` (`org.jetbrains.kotlin.protobuf.ByteString$Output`)

| Change |          Delta |             % |              Size | Samples | Location                                              |
| -----: | -------------: | ------------: | ----------------: | ------: | ----------------------------------------------------- |
| -66.7% | -1,023.998 KiB |   8.8% → 3.2% | 1.5 MiB → 512 KiB |   3 → 1 | `org.jetbrains.kotlin.protobuf.ByteString$Output:788` |
|  -3.2% |   -511.999 KiB | 91.2% → 96.8% | 15.5 MiB → 15 MiB | 31 → 30 | `org.jetbrains.kotlin.protobuf.ByteString$Output:789` |

##### `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$ValueParameter$1`)

| Change |      Delta |      % |            Size | Samples | Location                                                        |
| -----: | ---------: | -----: | --------------: | ------: | --------------------------------------------------------------- |
| -75.0% | -1.499 MiB | 100.0% | 2 MiB → 512 KiB |   4 → 1 | `org.jetbrains.kotlin.metadata.ProtoBuf$ValueParameter$1:24018` |

##### `create()` (`com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure$2`)

| Change |      Delta |      % |            Size | Samples | Location                                                       |
| -----: | ---------: | -----: | --------------: | ------: | -------------------------------------------------------------- |
| -50.0% | -1.499 MiB | 100.0% | 3 MiB → 1.5 MiB |   6 → 3 | `com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure$2:1568` |

##### `newFieldMap(int)` (`org.jetbrains.kotlin.protobuf.SmallSortedMap`)

|  Change |      Delta |             % |          Size | Samples | Location                                           |
| ------: | ---------: | ------------: | ------------: | ------: | -------------------------------------------------- |
| removed | -1.499 MiB | 100.0% → 0.0% | 1.5 MiB → 0 B |   3 → 0 | `org.jetbrains.kotlin.protobuf.SmallSortedMap:100` |

##### `traverseIds(int)` (`org.jetbrains.kotlin.metadata.deserialization.NameResolverImpl`)

|  Change |          Delta |            % |          Size | Samples | Location                                                            |
| ------: | -------------: | -----------: | ------------: | ------: | ------------------------------------------------------------------- |
| removed | -1,023.998 KiB | 66.7% → 0.0% |   1 MiB → 0 B |   2 → 0 | `org.jetbrains.kotlin.metadata.deserialization.NameResolverImpl:34` |
| removed |   -511.999 KiB | 33.3% → 0.0% | 512 KiB → 0 B |   1 → 0 | `org.jetbrains.kotlin.metadata.deserialization.NameResolverImpl:33` |

##### `buildDefaultFlow(CFGNode, Function2)` (`org.jetbrains.kotlin.fir.resolve.dfa.FirDataFlowAnalyzer`)

|  Change |          Delta |            % |          Size | Samples | Location                                                        |
| ------: | -------------: | -----------: | ------------: | ------: | --------------------------------------------------------------- |
| removed | -1,023.998 KiB | 66.7% → 0.0% |   1 MiB → 0 B |   2 → 0 | `org.jetbrains.kotlin.fir.resolve.dfa.FirDataFlowAnalyzer:1643` |
| removed |   -511.999 KiB | 33.3% → 0.0% | 512 KiB → 0 B |   1 → 0 | `org.jetbrains.kotlin.fir.resolve.dfa.FirDataFlowAnalyzer:1644` |

##### `<init>()` (`org.jetbrains.kotlin.resolve.calls.inference.model.MutableConstraintStorage`)

|  Change |          Delta |            % |          Size | Samples | Location                                                                          |
| ------: | -------------: | -----------: | ------------: | ------: | --------------------------------------------------------------------------------- |
| removed | -1,023.998 KiB | 40.0% → 0.0% |   1 MiB → 0 B |   2 → 0 | `org.jetbrains.kotlin.resolve.calls.inference.model.MutableConstraintStorage:332` |
| removed |   -511.999 KiB | 20.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `org.jetbrains.kotlin.resolve.calls.inference.model.MutableConstraintStorage:319` |
| removed |   -511.999 KiB | 20.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `org.jetbrains.kotlin.resolve.calls.inference.model.MutableConstraintStorage:330` |
|     new |   +511.999 KiB | 0.0% → 50.0% | 0 B → 512 KiB |   0 → 1 | `org.jetbrains.kotlin.resolve.calls.inference.model.MutableConstraintStorage:327` |

##### `sequencedKeySet()` (`java.util.LinkedHashMap`)

|  Change |      Delta |             % |          Size | Samples | Location                      |
| ------: | ---------: | ------------: | ------------: | ------: | ----------------------------- |
| removed | -1.499 MiB | 100.0% → 0.0% | 1.5 MiB → 0 B |   3 → 0 | `java.util.LinkedHashMap:643` |

##### `newOutput()` (`kotlin.reflect.jvm.internal.impl.protobuf.ByteString`)

|  Change |          Delta |             % |        Size | Samples | Location                                                   |
| ------: | -------------: | ------------: | ----------: | ------: | ---------------------------------------------------------- |
| removed | -1,023.998 KiB | 100.0% → 0.0% | 1 MiB → 0 B |   2 → 0 | `kotlin.reflect.jvm.internal.impl.protobuf.ByteString:751` |

##### `enlarge(int)` (`jdk.internal.org.objectweb.asm.ByteVector`)

| Change |          Delta |      % |          Size | Samples | Location                                        |
| -----: | -------------: | -----: | ------------: | ------: | ----------------------------------------------- |
| -33.3% | -1,023.998 KiB | 100.0% | 3 MiB → 2 MiB |   6 → 4 | `jdk.internal.org.objectweb.asm.ByteVector:401` |

##### `<init>(int)` (`java.util.ArrayList`)

| Change |          Delta |      % |          Size | Samples | Location                  |
| -----: | -------------: | -----: | ------------: | ------: | ------------------------- |
| -33.3% | -1,023.998 KiB | 100.0% | 3 MiB → 2 MiB |   6 → 4 | `java.util.ArrayList:156` |

##### `copyOf(Object[], int, Class)` (`java.util.Arrays`)

| Change |          Delta |      % |              Size | Samples | Location                |
| -----: | -------------: | -----: | ----------------: | ------: | ----------------------- |
| -66.7% | -1,023.998 KiB | 100.0% | 1.5 MiB → 512 KiB |   3 → 1 | `java.util.Arrays:3513` |

##### `getFileName()` (`jdk.internal.jrtfs.JrtPath`)

|  Change |          Delta |             % |        Size | Samples | Location                        |
| ------: | -------------: | ------------: | ----------: | ------: | ------------------------------- |
| removed | -1,023.998 KiB | 100.0% → 0.0% | 1 MiB → 0 B |   2 → 0 | `jdk.internal.jrtfs.JrtPath:99` |

##### `<init>(InputStream, int)` (`java.util.jar.Manifest$FastInputStream`)

|  Change |        Delta |             % |          Size | Samples | Location                                     |
| ------: | -----------: | ------------: | ------------: | ------: | -------------------------------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `java.util.jar.Manifest$FastInputStream:421` |

##### `copy()` (`java.lang.reflect.Method`)

|  Change |        Delta |             % |          Size | Samples | Location                       |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------------ |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `java.lang.reflect.Method:165` |

##### `setLocal(int, int)` (`jdk.internal.org.objectweb.asm.Frame`)

|  Change |        Delta |             % |          Size | Samples | Location                                   |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------------------------ |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `jdk.internal.org.objectweb.asm.Frame:537` |

##### `<clinit>()` (`kotlin.reflect.jvm.internal.impl.metadata.jvm.deserialization.JvmNameResolverBase`)

|  Change |        Delta |             % |          Size | Samples | Location                                                                               |
| ------: | -----------: | ------------: | ------------: | ------: | -------------------------------------------------------------------------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `kotlin.reflect.jvm.internal.impl.metadata.jvm.deserialization.JvmNameResolverBase:90` |

##### `<clinit>()` (`kotlin.reflect.jvm.internal.impl.builtins.jvm.JvmBuiltInsSignatures`)

|  Change |        Delta |             % |          Size | Samples | Location                                                                 |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------------------------------------------------------ |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `kotlin.reflect.jvm.internal.impl.builtins.jvm.JvmBuiltInsSignatures:40` |

##### `descriptorString()` (`java.lang.Class`)

|  Change |        Delta |             % |          Size | Samples | Location               |
| ------: | -----------: | ------------: | ------------: | ------: | ---------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `java.lang.Class:4585` |

##### `newTable(int)` (`java.util.WeakHashMap`)

|  Change |        Delta |             % |          Size | Samples | Location                    |
| ------: | -----------: | ------------: | ------------: | ------: | --------------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `java.util.WeakHashMap:194` |

##### `<init>(FixStackAnalyzer, int, int)` (`org.jetbrains.kotlin.codegen.optimization.fixStack.FixStackAnalyzer$FixStackFrame`)

|  Change |      Delta |             % |          Size | Samples | Location                                                                               |
| ------: | ---------: | ------------: | ------------: | ------: | -------------------------------------------------------------------------------------- |
| removed | -1.499 MiB | 100.0% → 0.0% | 1.5 MiB → 0 B |   3 → 0 | `org.jetbrains.kotlin.codegen.optimization.fixStack.FixStackAnalyzer$FixStackFrame:99` |

##### `_init_$lambda$0(int, int)` (`org.jetbrains.kotlin.codegen.optimization.common.FastMethodAnalyzer`)

|  Change |      Delta |             % |          Size | Samples | Location                                                                 |
| ------: | ---------: | ------------: | ------------: | ------: | ------------------------------------------------------------------------ |
| removed | -1.499 MiB | 100.0% → 0.0% | 1.5 MiB → 0 B |   3 → 0 | `org.jetbrains.kotlin.codegen.optimization.common.FastMethodAnalyzer:47` |

##### `visitVarInsn(int, int)` (`org.jetbrains.org.objectweb.asm.tree.MethodNode`)

| Change |      Delta |      % |            Size | Samples | Location                                              |
| -----: | ---------: | -----: | --------------: | ------: | ----------------------------------------------------- |
| -60.0% | -1.499 MiB | 100.0% | 2.5 MiB → 1 MiB |   5 → 2 | `org.jetbrains.org.objectweb.asm.tree.MethodNode:351` |

##### `toString()` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ByteArrayCharSequence`)

|  Change |        Delta |              % |            Size | Samples | Location                                                               |
| ------: | -----------: | -------------: | --------------: | ------: | ---------------------------------------------------------------------- |
|  -33.3% | -511.999 KiB | 75.0% → 100.0% | 1.5 MiB → 1 MiB |   3 → 2 | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ByteArrayCharSequence:31` |
| removed | -511.999 KiB |   25.0% → 0.0% |   512 KiB → 0 B |   1 → 0 | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ByteArrayCharSequence:37` |

##### `subSequence(int, int)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ByteArrayCharSequence`)

|  Change |          Delta |             % |        Size | Samples | Location                                                               |
| ------: | -------------: | ------------: | ----------: | ------: | ---------------------------------------------------------------------- |
| removed | -1,023.998 KiB | 100.0% → 0.0% | 1 MiB → 0 B |   2 → 0 | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ByteArrayCharSequence:27` |

##### `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type`)

|  Change |          Delta |             % |        Size | Samples | Location                                           |
| ------: | -------------: | ------------: | ----------: | ------: | -------------------------------------------------- |
| removed | -1,023.998 KiB | 100.0% → 0.0% | 1 MiB → 0 B |   2 → 0 | `org.jetbrains.kotlin.metadata.ProtoBuf$Type:4951` |

##### `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type$1`)

| Change |          Delta |      % |              Size | Samples | Location                                             |
| -----: | -------------: | -----: | ----------------: | ------: | ---------------------------------------------------- |
| -22.2% | -1,023.998 KiB | 100.0% | 4.5 MiB → 3.5 MiB |   9 → 7 | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$1:5079` |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

|  Change |       Delta |             % |                Size |       Samples | Function                                                                                                                                                                            | Location                                                                                                                                                                                      |
| ------: | ----------: | ------------: | ------------------: | ------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   +4.9% | +32.872 MiB |         99.9% |   666 MiB → 699 MiB | 1,327 → 1,392 | `run(String[])`                                                                                                                                                                     | `org.jetbrains.kotlin.preloading.Preloader`                                                                                                                                                   |
|   +4.9% | +32.872 MiB |         99.9% |   666 MiB → 699 MiB | 1,327 → 1,392 | `main(String[])`                                                                                                                                                                    | `org.jetbrains.kotlin.preloading.Preloader`                                                                                                                                                   |
|   +9.3% | +31.872 MiB | 51.2% → 53.4% |   341 MiB → 373 MiB |     683 → 746 | `loadAllClassesFromJars(Collection, int, ClassHandler)`                                                                                                                             | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`                                                                                                                                        |
|   +9.3% | +31.872 MiB | 51.2% → 53.4% |   341 MiB → 373 MiB |     683 → 746 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)`                                                                                                        | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`                                                                                                                                        |
|  +15.3% | +24.186 MiB | 23.7% → 26.0% |   158 MiB → 182 MiB |     316 → 364 | `<init>(int)`                                                                                                                                                                       | `java.io.ByteArrayOutputStream`                                                                                                                                                               |
|   +6.3% |  +9.999 MiB | 23.9% → 24.2% |   159 MiB → 169 MiB |     318 → 338 | `resolveAndCheckFir(FirSession, List, BaseDiagnosticsCollector)`                                                                                                                    | `org.jetbrains.kotlin.fir.pipeline.FirUtilsKt`                                                                                                                                                |
| +163.6% |  +8.999 MiB |   0.8% → 2.1% |  5.5 MiB → 14.5 MiB |       11 → 29 | `resolvePlainArgumentType(ArgumentCheckingProcessor$ArgumentContext, ConeResolutionAtom, ConeKotlinType, boolean, KtSourceElement)`                                                 | `org.jetbrains.kotlin.fir.resolve.calls.stages.ArgumentCheckingProcessor`                                                                                                                     |
| +163.6% |  +8.999 MiB |   0.8% → 2.1% |  5.5 MiB → 14.5 MiB |       11 → 29 | `resolvePlainArgumentType$default(ArgumentCheckingProcessor, ArgumentCheckingProcessor$ArgumentContext, ConeResolutionAtom, ConeKotlinType, boolean, KtSourceElement, int, Object)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ArgumentCheckingProcessor`                                                                                                                     |
| +257.1% |  +8.999 MiB |   0.5% → 1.8% |  3.5 MiB → 12.5 MiB |        7 → 25 | `fullyExpandedType$default(ConeClassLikeType, FirSession, Function1, int, Object)`                                                                                                  | `org.jetbrains.kotlin.fir.resolve.TypeExpansionUtilsKt`                                                                                                                                       |
| +188.9% |  +8.499 MiB |   0.7% → 1.9% |    4.5 MiB → 13 MiB |        9 → 26 | `processSymbolsByName$lambda$0(Ref$BooleanRef, Function1, FirCallableSymbol)`                                                                                                       | `org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope`                                                                                                                           |
| +188.9% |  +8.499 MiB |   0.7% → 1.9% |    4.5 MiB → 13 MiB |        9 → 26 | `invoke(Object)`                                                                                                                                                                    | `org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope$$Lambda.0x00000070015fc228 → org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope$$Lambda.0x000000f0016015f0` |
|  +80.0% |  +7.999 MiB |   1.5% → 2.6% |     10 MiB → 18 MiB |       20 → 36 | `processFunctionsByName$lambda$0(FirLookupTrackerComponent, CallInfo, Ref$BooleanRef, ScopeBasedTowerLevel, TowerLevelProcessor, FirCallableSymbol)`                                | `org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel`                                                                                                                           |
|  +80.0% |  +7.999 MiB |   1.5% → 2.6% |     10 MiB → 18 MiB |       20 → 36 | `invoke(Object)`                                                                                                                                                                    | `org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel$$Lambda.0x000000700166dc20 → org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel$$Lambda.0x000000f001672d98` |
|  +88.2% |  +7.499 MiB |   1.3% → 2.3% |    8.5 MiB → 16 MiB |       17 → 32 | `toSymbol(ConeClassLikeLookupTag, FirSession)`                                                                                                                                      | `org.jetbrains.kotlin.fir.resolve.ToSymbolUtilsKt`                                                                                                                                            |
|  +13.3% |  +6.999 MiB |   7.9% → 8.5% | 52.7 MiB → 59.7 MiB |     105 → 119 | `processSymbolsByName(Name, Function3, Function1)`                                                                                                                                  | `org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope`                                                                                                                           |
|  +58.3% |  +6.999 MiB |   1.8% → 2.7% |     12 MiB → 19 MiB |       24 → 38 | `consumeCallableCandidate(FirCallableSymbol, CallInfo, TowerLevelProcessor)`                                                                                                        | `org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel`                                                                                                                           |
| +233.3% |  +6.999 MiB |   0.4% → 1.4% |      3 MiB → 10 MiB |        6 → 20 | `resolvePlainArgumentType(Candidate, ConeResolutionAtom, ConeKotlinType, ConeKotlinType, CheckerSink, ResolutionContext, boolean, boolean, KtSourceElement)`                        | `org.jetbrains.kotlin.fir.resolve.calls.stages.ArgumentCheckingProcessor`                                                                                                                     |
| +233.3% |  +6.999 MiB |   0.4% → 1.4% |      3 MiB → 10 MiB |        6 → 20 | `resolveExtensionReceiver(CheckerSink, ResolutionContext, ImplicitArgumentDescription, Candidate, ConeKotlinType, Continuation)`                                                    | `org.jetbrains.kotlin.fir.resolve.calls.stages.CheckExtensionReceiver`                                                                                                                        |
|  +21.5% |  +6.999 MiB |   4.9% → 5.6% | 32.5 MiB → 39.5 MiB |       65 → 79 | `visitNestedElements(FirElement)`                                                                                                                                                   | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor`                                                                                                             |
|  +70.0% |  +6.999 MiB |   1.5% → 2.4% |     10 MiB → 17 MiB |       20 → 34 | `invoke(PhaseConfig, PhaserState, LoweringContext, IrModuleFragment)`                                                                                                               | `org.jetbrains.kotlin.backend.common.phaser.PerformByIrFilePhase`                                                                                                                             |

##### Standard library

|  Change |       Delta |             % |              Size |   Samples | Function                                                                        | Location                                     |
| ------: | ----------: | ------------: | ----------------: | --------: | ------------------------------------------------------------------------------- | -------------------------------------------- |
|  +15.3% | +24.186 MiB | 23.7% → 26.0% | 158 MiB → 182 MiB | 316 → 364 | `<init>(int)`                                                                   | `java.io.ByteArrayOutputStream`              |
|   +3.1% |  +5.686 MiB | 27.1% → 26.7% | 181 MiB → 187 MiB | 362 → 373 | `copyOf(byte[], int)`                                                           | `java.util.Arrays`                           |
|   +3.0% |  +5.186 MiB | 25.8% → 25.3% | 172 MiB → 177 MiB | 344 → 354 | `toByteArray()`                                                                 | `java.io.ByteArrayOutputStream`              |
| +200.0% |  +4.999 MiB |   0.4% → 1.1% | 2.5 MiB → 7.5 MiB |    5 → 15 | `replace(byte[], char, char)`                                                   | `java.lang.StringLatin1`                     |
| +200.0% |  +4.999 MiB |   0.4% → 1.1% | 2.5 MiB → 7.5 MiB |    5 → 15 | `replace(char, char)`                                                           | `java.lang.String`                           |
|  +25.7% |  +4.499 MiB |   2.6% → 3.1% | 17.5 MiB → 22 MiB |   35 → 44 | `getValue()`                                                                    | `kotlin.SynchronizedLazyImpl`                |
| +266.7% |  +3.999 MiB |   0.2% → 0.8% | 1.5 MiB → 5.5 MiB |    3 → 11 | `allocateUninitializedArray(Class, int)`                                        | `jdk.internal.misc.Unsafe`                   |
| +266.7% |  +3.999 MiB |   0.2% → 0.8% | 1.5 MiB → 5.5 MiB |    3 → 11 | `newArray(long)`                                                                | `java.lang.StringConcatHelper`               |
|  +57.1% |  +3.999 MiB |   1.0% → 1.6% |    7 MiB → 11 MiB |   14 → 22 | `grow(int)`                                                                     | `java.util.ArrayList`                        |
|  +38.9% |  +3.499 MiB |   1.3% → 1.8% |  9 MiB → 12.5 MiB |   18 → 25 | `loadClass(String, boolean)`                                                    | `java.lang.ClassLoader`                      |
| +233.3% |  +3.499 MiB |   0.2% → 0.7% |   1.5 MiB → 5 MiB |    3 → 10 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`                      |
|  +41.2% |  +3.499 MiB |   1.3% → 1.7% |  8.5 MiB → 12 MiB |   17 → 24 | `toString()`                                                                    | `java.lang.StringBuilder`                    |
|  +50.0% |  +3.499 MiB |   1.0% → 1.5% |  7 MiB → 10.5 MiB |   14 → 21 | `grow()`                                                                        | `java.util.ArrayList`                        |
|  +42.9% |      +3 MiB |   1.0% → 1.4% |    7 MiB → 10 MiB |   14 → 20 | `readLOC()`                                                                     | `java.util.zip.ZipInputStream`               |
|  +42.9% |      +3 MiB |   1.0% → 1.4% |    7 MiB → 10 MiB |   14 → 20 | `getNextEntry()`                                                                | `java.util.zip.ZipInputStream`               |
|  +60.0% |  +2.999 MiB |   0.7% → 1.1% |     5 MiB → 8 MiB |   10 → 16 | `defineClass(String, byte[], int, int, ProtectionDomain)`                       | `java.lang.ClassLoader`                      |
| +300.0% |  +2.999 MiB |   0.1% → 0.6% |     1 MiB → 4 MiB |     2 → 8 | `addConstantMemberReference(int, String, String, String)`                       | `jdk.internal.org.objectweb.asm.SymbolTable` |
| +600.0% |  +2.999 MiB |   0.1% → 0.5% | 512 KiB → 3.5 MiB |     1 → 7 | `addConstantMethodref(String, String, String, boolean)`                         | `jdk.internal.org.objectweb.asm.SymbolTable` |
|  +54.5% |  +2.999 MiB |   0.8% → 1.2% | 5.5 MiB → 8.5 MiB |   11 → 17 | `add(Object)`                                                                   | `java.util.HashSet`                          |
|     new |  +2.999 MiB |   0.0% → 0.4% |       0 B → 3 MiB |     0 → 6 | `unmodifiableList(List)`                                                        | `java.util.Collections`                      |

##### Ours

|  Change |       Delta |             % |                Size |       Samples | Function                                                                                                                                                                            | Location                                                                                                                                                                                      |
| ------: | ----------: | ------------: | ------------------: | ------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   +4.9% | +32.872 MiB |         99.9% |   666 MiB → 699 MiB | 1,327 → 1,392 | `run(String[])`                                                                                                                                                                     | `org.jetbrains.kotlin.preloading.Preloader`                                                                                                                                                   |
|   +4.9% | +32.872 MiB |         99.9% |   666 MiB → 699 MiB | 1,327 → 1,392 | `main(String[])`                                                                                                                                                                    | `org.jetbrains.kotlin.preloading.Preloader`                                                                                                                                                   |
|   +9.3% | +31.872 MiB | 51.2% → 53.4% |   341 MiB → 373 MiB |     683 → 746 | `loadAllClassesFromJars(Collection, int, ClassHandler)`                                                                                                                             | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`                                                                                                                                        |
|   +9.3% | +31.872 MiB | 51.2% → 53.4% |   341 MiB → 373 MiB |     683 → 746 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)`                                                                                                        | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`                                                                                                                                        |
|   +6.3% |  +9.999 MiB | 23.9% → 24.2% |   159 MiB → 169 MiB |     318 → 338 | `resolveAndCheckFir(FirSession, List, BaseDiagnosticsCollector)`                                                                                                                    | `org.jetbrains.kotlin.fir.pipeline.FirUtilsKt`                                                                                                                                                |
| +163.6% |  +8.999 MiB |   0.8% → 2.1% |  5.5 MiB → 14.5 MiB |       11 → 29 | `resolvePlainArgumentType(ArgumentCheckingProcessor$ArgumentContext, ConeResolutionAtom, ConeKotlinType, boolean, KtSourceElement)`                                                 | `org.jetbrains.kotlin.fir.resolve.calls.stages.ArgumentCheckingProcessor`                                                                                                                     |
| +163.6% |  +8.999 MiB |   0.8% → 2.1% |  5.5 MiB → 14.5 MiB |       11 → 29 | `resolvePlainArgumentType$default(ArgumentCheckingProcessor, ArgumentCheckingProcessor$ArgumentContext, ConeResolutionAtom, ConeKotlinType, boolean, KtSourceElement, int, Object)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ArgumentCheckingProcessor`                                                                                                                     |
| +257.1% |  +8.999 MiB |   0.5% → 1.8% |  3.5 MiB → 12.5 MiB |        7 → 25 | `fullyExpandedType$default(ConeClassLikeType, FirSession, Function1, int, Object)`                                                                                                  | `org.jetbrains.kotlin.fir.resolve.TypeExpansionUtilsKt`                                                                                                                                       |
| +188.9% |  +8.499 MiB |   0.7% → 1.9% |    4.5 MiB → 13 MiB |        9 → 26 | `processSymbolsByName$lambda$0(Ref$BooleanRef, Function1, FirCallableSymbol)`                                                                                                       | `org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope`                                                                                                                           |
| +188.9% |  +8.499 MiB |   0.7% → 1.9% |    4.5 MiB → 13 MiB |        9 → 26 | `invoke(Object)`                                                                                                                                                                    | `org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope$$Lambda.0x00000070015fc228 → org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope$$Lambda.0x000000f0016015f0` |
|  +80.0% |  +7.999 MiB |   1.5% → 2.6% |     10 MiB → 18 MiB |       20 → 36 | `processFunctionsByName$lambda$0(FirLookupTrackerComponent, CallInfo, Ref$BooleanRef, ScopeBasedTowerLevel, TowerLevelProcessor, FirCallableSymbol)`                                | `org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel`                                                                                                                           |
|  +80.0% |  +7.999 MiB |   1.5% → 2.6% |     10 MiB → 18 MiB |       20 → 36 | `invoke(Object)`                                                                                                                                                                    | `org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel$$Lambda.0x000000700166dc20 → org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel$$Lambda.0x000000f001672d98` |
|  +88.2% |  +7.499 MiB |   1.3% → 2.3% |    8.5 MiB → 16 MiB |       17 → 32 | `toSymbol(ConeClassLikeLookupTag, FirSession)`                                                                                                                                      | `org.jetbrains.kotlin.fir.resolve.ToSymbolUtilsKt`                                                                                                                                            |
|  +13.3% |  +6.999 MiB |   7.9% → 8.5% | 52.7 MiB → 59.7 MiB |     105 → 119 | `processSymbolsByName(Name, Function3, Function1)`                                                                                                                                  | `org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope`                                                                                                                           |
|  +58.3% |  +6.999 MiB |   1.8% → 2.7% |     12 MiB → 19 MiB |       24 → 38 | `consumeCallableCandidate(FirCallableSymbol, CallInfo, TowerLevelProcessor)`                                                                                                        | `org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel`                                                                                                                           |
| +233.3% |  +6.999 MiB |   0.4% → 1.4% |      3 MiB → 10 MiB |        6 → 20 | `resolvePlainArgumentType(Candidate, ConeResolutionAtom, ConeKotlinType, ConeKotlinType, CheckerSink, ResolutionContext, boolean, boolean, KtSourceElement)`                        | `org.jetbrains.kotlin.fir.resolve.calls.stages.ArgumentCheckingProcessor`                                                                                                                     |
| +233.3% |  +6.999 MiB |   0.4% → 1.4% |      3 MiB → 10 MiB |        6 → 20 | `resolveExtensionReceiver(CheckerSink, ResolutionContext, ImplicitArgumentDescription, Candidate, ConeKotlinType, Continuation)`                                                    | `org.jetbrains.kotlin.fir.resolve.calls.stages.CheckExtensionReceiver`                                                                                                                        |
|  +21.5% |  +6.999 MiB |   4.9% → 5.6% | 32.5 MiB → 39.5 MiB |       65 → 79 | `visitNestedElements(FirElement)`                                                                                                                                                   | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor`                                                                                                             |
|  +70.0% |  +6.999 MiB |   1.5% → 2.4% |     10 MiB → 17 MiB |       20 → 34 | `invoke(PhaseConfig, PhaserState, LoweringContext, IrModuleFragment)`                                                                                                               | `org.jetbrains.kotlin.backend.common.phaser.PerformByIrFilePhase`                                                                                                                             |
|  +70.0% |  +6.999 MiB |   1.5% → 2.4% |     10 MiB → 17 MiB |       20 → 34 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)`                                                                                                                          | `org.jetbrains.kotlin.backend.common.phaser.PerformByIrFilePhase`                                                                                                                             |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

##### Standard library

|  Change |      Delta |           % |                Size | Samples | Function                                                              | Location                                                                 |
| ------: | ---------: | ----------: | ------------------: | ------: | --------------------------------------------------------------------- | ------------------------------------------------------------------------ |
|  -45.2% | -6.999 MiB | 2.3% → 1.2% |  15.5 MiB → 8.5 MiB | 31 → 17 | `getValue()`                                                          | `kotlin.UnsafeLazyImpl`                                                  |
|  -12.1% | -5.813 MiB | 7.2% → 6.0% |   48 MiB → 42.2 MiB | 96 → 84 | `clone()`                                                             | `java.lang.Object`                                                       |
|  -23.9% | -5.499 MiB | 3.4% → 2.5% |   23 MiB → 17.5 MiB | 46 → 35 | `copyOfRangeByte(byte[], int, int)`                                   | `java.util.Arrays`                                                       |
|  -61.5% | -3.999 MiB | 1.0% → 0.4% |   6.5 MiB → 2.5 MiB |  13 → 5 | `<init>(byte[], int, int, Charset)`                                   | `java.lang.String`                                                       |
|  -71.4% | -2.499 MiB | 0.5% → 0.1% |     3.5 MiB → 1 MiB |   7 → 2 | `next()`                                                              | `kotlin.sequences.TransformingSequence$iterator$1`                       |
|  -71.4% | -2.499 MiB | 0.5% → 0.1% |     3.5 MiB → 1 MiB |   7 → 2 | `calcNext()`                                                          | `kotlin.sequences.FilteringSequence$iterator$1`                          |
|  -71.4% | -2.499 MiB | 0.5% → 0.1% |     3.5 MiB → 1 MiB |   7 → 2 | `hasNext()`                                                           | `kotlin.sequences.FilteringSequence$iterator$1`                          |
|  -35.7% | -2.499 MiB | 1.0% → 0.6% |     7 MiB → 4.5 MiB |  14 → 9 | `<init>(Charset, byte[], int, int)`                                   | `java.lang.String`                                                       |
|  -50.0% | -2.499 MiB | 0.7% → 0.4% |     5 MiB → 2.5 MiB |  10 → 5 | `<init>(int)`                                                         | `java.lang.AbstractStringBuilder`                                        |
|   -8.0% | -1.999 MiB | 3.7% → 3.3% |     25 MiB → 23 MiB | 50 → 46 | `copyOfRange(byte[], int, int)`                                       | `java.util.Arrays`                                                       |
|   -8.9% | -1.999 MiB | 3.4% → 2.9% | 22.5 MiB → 20.5 MiB | 45 → 41 | `getValue()`                                                          | `kotlin.SafePublicationLazyImpl`                                         |
|  -25.0% | -1.999 MiB | 1.2% → 0.9% |       8 MiB → 6 MiB | 16 → 12 | `newNode(int, Object, Object, HashMap$Node)`                          | `java.util.LinkedHashMap`                                                |
|  -80.0% | -1.999 MiB | 0.4% → 0.1% |   2.5 MiB → 512 KiB |   5 → 1 | `convertArgumentTypes(MethodType)`                                    | `java.lang.invoke.InnerClassLambdaMetafactory$ForwardingMethodGenerator` |
| removed | -1.999 MiB | 0.3% → 0.0% |         2 MiB → 0 B |   4 → 0 | `toArray()`                                                           | `java.util.ArrayList`                                                    |
|  -60.0% | -1.499 MiB | 0.4% → 0.1% |     2.5 MiB → 1 MiB |   5 → 2 | `make(MemberName)`                                                    | `java.lang.invoke.DirectMethodHandle`                                    |
|  -60.0% | -1.499 MiB | 0.4% → 0.1% |     2.5 MiB → 1 MiB |   5 → 2 | `findConstructor(Class, MethodType)`                                  | `java.lang.invoke.MethodHandles$Lookup`                                  |
|  -13.0% | -1.499 MiB | 1.7% → 1.4% |   11.5 MiB → 10 MiB | 23 → 20 | `buildCallSite()`                                                     | `java.lang.invoke.InnerClassLambdaMetafactory`                           |
|  -75.0% | -1.499 MiB | 0.3% → 0.1% |     2 MiB → 512 KiB |   4 → 1 | `parseAnnotation2(ByteBuffer, ConstantPool, Class, boolean, Class[])` | `sun.reflect.annotation.AnnotationParser`                                |
|  -75.0% | -1.499 MiB | 0.3% → 0.1% |     2 MiB → 512 KiB |   4 → 1 | `parseAnnotations2(byte[], ConstantPool, Class, Class[])`             | `sun.reflect.annotation.AnnotationParser`                                |
|  -75.0% | -1.499 MiB | 0.3% → 0.1% |     2 MiB → 512 KiB |   4 → 1 | `parseAnnotations(byte[], ConstantPool, Class)`                       | `sun.reflect.annotation.AnnotationParser`                                |

##### Ours

| Change |       Delta |             % |                Size |   Samples | Function                                                                                                                                                                    | Location                                                                                                 |
| -----: | ----------: | ------------: | ------------------: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| -22.7% | -14.999 MiB |   9.9% → 7.3% |     66 MiB → 51 MiB | 132 → 102 | `generateFile(JvmBackendContext, IrFile, List, boolean)`                                                                                                                    | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`                                                   |
| -22.7% | -14.999 MiB |   9.9% → 7.3% |     66 MiB → 51 MiB | 132 → 102 | `invokeCodegen(JvmIrCodegenFactory$CodegenInput)`                                                                                                                           | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`                                                   |
| -22.7% | -14.999 MiB |   9.9% → 7.3% |     66 MiB → 51 MiB | 132 → 102 | `runCodegen$org_jetbrains_kotlin_cli_jvm(JvmIrCodegenFactory$CodegenInput, GenerationState, JvmIrCodegenFactory, BaseDiagnosticsCollector, CompilerConfiguration, boolean)` | `org.jetbrains.kotlin.cli.jvm.compiler.KotlinToJVMBytecodeCompiler`                                      |
| -22.9% | -14.999 MiB |   9.8% → 7.2% | 65.5 MiB → 50.5 MiB | 131 → 101 | `generate()`                                                                                                                                                                | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                                                  |
| -19.5% | -11.499 MiB |   8.8% → 6.8% |   59 MiB → 47.5 MiB |  118 → 95 | `generateMethod(IrFunction, SourceMapper)`                                                                                                                                  | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                                                  |
| -11.9% |  -9.999 MiB | 12.6% → 10.6% |     84 MiB → 74 MiB | 168 → 148 | `executePhase(JvmFir2IrPipelineArtifact)`                                                                                                                                   | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`                                          |
| -11.9% |  -9.999 MiB | 12.6% → 10.6% |     84 MiB → 74 MiB | 168 → 148 | `executePhase(PipelineArtifact)`                                                                                                                                            | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`                                          |
| -19.8% |  -9.499 MiB |   7.2% → 5.5% |   48 MiB → 38.5 MiB |   96 → 77 | `transformResult(FirTransformer, Object)`                                                                                                                                   | `org.jetbrains.kotlin.fir.expressions.impl.FirReturnExpressionImpl`                                      |
| -19.8% |  -9.499 MiB |   7.2% → 5.5% |   48 MiB → 38.5 MiB |   96 → 77 | `transformChildren(FirTransformer, Object)`                                                                                                                                 | `org.jetbrains.kotlin.fir.expressions.impl.FirReturnExpressionImpl`                                      |
| -19.8% |  -9.499 MiB |   7.2% → 5.5% |   48 MiB → 38.5 MiB |   96 → 77 | `transformExpression(FirExpression, ResolutionMode)`                                                                                                                        | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`            |
| -19.8% |  -9.499 MiB |   7.2% → 5.5% |   48 MiB → 38.5 MiB |   96 → 77 | `transformExpression(FirExpression, ResolutionMode)`                                                                                                                        | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |
| -19.6% |  -9.499 MiB |   7.3% → 5.6% |   48.5 MiB → 39 MiB |   97 → 78 | `transformJump(FirJump, ResolutionMode)`                                                                                                                                    | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirControlFlowStatementsResolveTransformer`  |
| -19.6% |  -9.499 MiB |   7.3% → 5.6% |   48.5 MiB → 39 MiB |   97 → 78 | `transformReturnExpression(FirReturnExpression, ResolutionMode)`                                                                                                            | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirControlFlowStatementsResolveTransformer`  |
| -19.6% |  -9.499 MiB |   7.3% → 5.6% |   48.5 MiB → 39 MiB |   97 → 78 | `transformReturnExpression(FirReturnExpression, ResolutionMode)`                                                                                                            | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |
| -19.6% |  -9.499 MiB |   7.3% → 5.6% |   48.5 MiB → 39 MiB |   97 → 78 | `transformReturnExpression(FirReturnExpression, Object)`                                                                                                                    | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |
| -19.6% |  -9.499 MiB |   7.3% → 5.6% |   48.5 MiB → 39 MiB |   97 → 78 | `transform(FirTransformer, Object)`                                                                                                                                         | `org.jetbrains.kotlin.fir.expressions.FirReturnExpression`                                               |
| -38.8% |  -9.499 MiB |   3.7% → 2.1% |   24.5 MiB → 15 MiB |   49 → 30 | `transform(String, MethodNode)`                                                                                                                                             | `org.jetbrains.kotlin.codegen.optimization.transformer.CompositeMethodTransformer`                       |
| -60.7% |  -8.499 MiB |   2.1% → 0.8% |    14 MiB → 5.5 MiB |   28 → 11 | `mergeControlFlowEdge(int, Frame, boolean)`                                                                                                                                 | `org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer`                                          |
| -60.7% |  -8.499 MiB |   2.1% → 0.8% |    14 MiB → 5.5 MiB |   28 → 11 | `processControlFlowEdge(Frame, AbstractInsnNode, int, boolean)`                                                                                                             | `org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer`                                          |
| -60.7% |  -8.499 MiB |   2.1% → 0.8% |    14 MiB → 5.5 MiB |   28 → 11 | `processControlFlowEdge$default(FastAnalyzer, Frame, AbstractInsnNode, int, boolean, int, Object)`                                                                          | `org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer`                                          |

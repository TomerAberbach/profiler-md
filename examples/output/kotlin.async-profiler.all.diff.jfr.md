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

Functions with the largest increase in samples collected within the function body, excluding callees. Categories account for at least 1.0% of self samples on the base or the current side.

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

| Change | Delta |           % | Samples | Function                                                                                                                                                        | Location                                                                                                       |
| -----: | ----: | ----------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
|    new |    +2 | 0.0% → 0.1% |   0 → 2 | `dispatchReceiverClassTypeOrNull(FirCallableDeclaration)`                                                                                                       | `org.jetbrains.kotlin.fir.ClassMembersKt`                                                                      |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `readMessage(Parser, ExtensionRegistryLite)`                                                                                                                    | `org.jetbrains.kotlin.protobuf.CodedInputStream`                                                               |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `parsePostfixExpression()`                                                                                                                                      | `org.jetbrains.kotlin.parsing.KotlinExpressionParsing`                                                         |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `convertCallExpression(LighterASTNode)`                                                                                                                         | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirExpressionBuilder`                                |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `transformTypeRef(FirTypeRef, Object)`                                                                                                                          | `org.jetbrains.kotlin.fir.resolve.transformers.FirSpecificTypeResolverTransformer`                             |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `loadProperty(ProtoBuf$Property, ProtoBuf$Class, FirClassSymbol)`                                                                                               | `org.jetbrains.kotlin.fir.deserialization.FirMemberDeserializer`                                               |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `directExpansionType(ConeClassLikeType, FirSession, Function1)`                                                                                                 | `org.jetbrains.kotlin.fir.resolve.TypeExpansionUtilsKt`                                                        |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `asRigidType(KotlinTypeMarker)`                                                                                                                                 | `org.jetbrains.kotlin.fir.types.ConeTypeContext`                                                               |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `transformChildren(FirTransformer, Object)`                                                                                                                     | `org.jetbrains.kotlin.fir.types.impl.FirUserTypeRefImpl`                                                       |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `invoke(Object, Object)`                                                                                                                                        | `org.jetbrains.kotlin.fir.resolve.providers.impl.FirTypeResolverImpl$$Lambda.0x000000f0015ca850`               |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `resolveStatus(FirDeclaration, FirDeclarationStatus, FirClass, FirProperty, boolean, List)`                                                                     | `org.jetbrains.kotlin.fir.resolve.transformers.FirStatusResolver`                                              |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `parseParameterizedClassRefSignature(CharacterIterator, ClassifierResolutionContext)`                                                                           | `org.jetbrains.kotlin.load.java.structure.impl.classFiles.BinaryClassSignatureParser`                          |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `invokeSuspend(Object)`                                                                                                                                         | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner$processCandidate$1`                       |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `runCompletionForCall(Candidate, ConstraintSystemCompletionMode, FirExpression, ConeKotlinType, PostponedArgumentsAnalyzer)`                                    | `org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter`                                                  |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `transformBlock(FirBlock, ResolutionMode)`                                                                                                                      | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`       |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `_get_referenceApproximateToSuperType_$lambda$0(AbstractTypeApproximator, TypeApproximatorConfiguration, AbstractTypeApproximator$Cache, RigidTypeMarker, int)` | `org.jetbrains.kotlin.types.AbstractTypeApproximator`                                                          |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `approximateToSuperType(KotlinTypeMarker, TypeApproximatorConfiguration, Map)`                                                                                  | `org.jetbrains.kotlin.types.AbstractTypeApproximator`                                                          |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `addInitialEqualityConstraint(ConstraintInjector$Context, KotlinTypeMarker, KotlinTypeMarker, ConstraintPosition)`                                              | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector`                                   |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `transformNamedFunction(FirNamedFunction, ResolutionMode)`                                                                                                      | `org.jetbrains.kotlin.fir.resolve.transformers.plugin.FirDeclarationsResolveTransformerForAnnotationArguments` |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `extractValue(AbstractArrayMapOwner)`                                                                                                                           | `org.jetbrains.kotlin.util.AbstractArrayMapOwner$AbstractArrayMapAccessor`                                     |

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

Functions with the largest decrease in samples collected within the function body, excluding callees. Categories account for at least 1.0% of self samples on the base or the current side.

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

#### Callers

Callers with the largest change in contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `UseCountComputer::visit` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                         | Location       |
| -----: | ----: | -----------: | ------: | ------------------------------ | -------------- |
|    new |    +2 | 0.0% → 40.0% |   0 → 2 | `UseCountComputer::block_do`   | `libjvm.dylib` |
|    new |    +1 | 0.0% → 20.0% |   0 → 1 | `Invoke::input_values_do`      | `libjvm.dylib` |
|    new |    +1 | 0.0% → 20.0% |   0 → 1 | `ProfileCall::input_values_do` | `libjvm.dylib` |
|    new |    +1 | 0.0% → 20.0% |   0 → 1 | `ValueStack::values_do`        | `libjvm.dylib` |

##### `CodeHeap::block_start` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                 | Location       |
| -----: | ----: | ------------: | ------: | ---------------------- | -------------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `CodeCache::next_blob` | `libjvm.dylib` |

##### `PhaseIterGVN::subsume_node` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                        | Location       |
| -----: | ----: | -----------: | ------: | ----------------------------- | -------------- |
|    new |    +3 | 0.0% → 75.0% |   0 → 3 | `PhaseIterGVN::transform_old` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_tree` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                               | Location       |
| ------: | ----: | -----: | ------: | ------------------------------------ | -------------- |
| +100.0% |    +3 | 100.0% |   3 → 6 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Arena::contains` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller           | Location       |
| -----: | ----: | -----: | ------: | ---------------- | -------------- |
| +75.0% |    +3 | 100.0% |   4 → 7 | `Matcher::xform` | `libjvm.dylib` |

##### `OopMapValue::write_on` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                             | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------- | -------------- |
|     new |    +2 |  0.0% → 50.0% |   0 → 2 | `OopMap::OopMap`                   | `libjvm.dylib` |
|     new |    +2 |  0.0% → 50.0% |   0 → 2 | `OopMap::set_oop`                  | `libjvm.dylib` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `ImmutableOopMap::ImmutableOopMap` | `libjvm.dylib` |

##### `GrowableArrayWithAllocator<Instruction*, GrowableArray<Instruction*>>::expand_to` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                       | Location       |
| -----: | ----: | -----------: | ------: | ---------------------------- | -------------- |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `MemoryBuffer::load`         | `libjvm.dylib` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `LIRGenerator::rlock_result` | `libjvm.dylib` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `LIRGenerator::do_Constant`  | `libjvm.dylib` |

##### `ValueRecorder<Metadata*>::maybe_find_index` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                    | Location       |
| ------: | ----: | -----: | ------: | ------------------------- | -------------- |
| +300.0% |    +3 | 100.0% |   1 → 4 | `OopRecorder::find_index` | `libjvm.dylib` |

##### `PhaseCCP::transform` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                   | Location       |
| ------: | ----: | -----: | ------: | ------------------------ | -------------- |
| +300.0% |    +3 | 100.0% |   1 → 4 | `PhaseCCP::do_transform` | `libjvm.dylib` |

##### `Node::set_req_X` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                        | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------- | -------------- |
| +300.0% |    +3 | 50.0% → 80.0% |   1 → 4 | `Node::replace_edge`          | `libjvm.dylib` |
| removed |    -1 |  50.0% → 0.0% |   1 → 0 | `PhaseIdealLoop::do_split_if` | `libjvm.dylib` |
|     new |    +1 |  0.0% → 20.0% |   0 → 1 | `PhaseIterGVN::transform_old` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_tree_impl` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                               | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------ | -------------- |
|     new |    +4 | 0.0% → 100.0% |   0 → 4 | `PhaseIdealLoop::build_loop_tree`    | `libjvm.dylib` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `IfFalseNode::Opcode` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                                      | Location       |
| -----: | ----: | -----------: | ------: | ------------------------------------------- | -------------- |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `Compile::disconnect_useless_nodes`         | `libjvm.dylib` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `PhaseIdealLoop::split_if_with_blocks`      | `libjvm.dylib` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `PhaseIdealLoop::split_if_with_blocks_post` | `libjvm.dylib` |

##### `ConnectionGraph::compute_escape` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                         | Location       |
| ------: | ----: | -----: | ------: | ------------------------------ | -------------- |
| +100.0% |    +2 | 100.0% |   2 → 4 | `ConnectionGraph::do_analysis` | `libjvm.dylib` |

##### `PhaseChaitin::Select` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                            | Location       |
| ------: | ----: | -----: | ------: | --------------------------------- | -------------- |
| +100.0% |    +2 | 100.0% |   2 → 4 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `Compile::disconnect_useless_nodes` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                | Location       |
| -----: | ----: | -----------: | ------: | --------------------- | -------------- |
|    new |    +2 | 0.0% → 50.0% |   0 → 2 | `PhaseCCP::transform` | `libjvm.dylib` |

##### `Node::unique_ctrl_out_or_null` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                      | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------- | -------------- |
|     new |    +3 | 0.0% → 100.0% |   0 → 3 | `ProjNode::is_uncommon_trap_proj`           | `libjvm.dylib` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseIdealLoop::build_loop_late_post_work` | `libjvm.dylib` |

##### `ClassFileParser::parse_constant_pool` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                          | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------- | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `ClassFileParser::parse_stream` | `libjvm.dylib` |

##### `ClassVerifier::verify_method` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                        | Location       |
| ------: | ----: | -----: | ------: | ----------------------------- | -------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `ClassVerifier::verify_class` | `libjvm.dylib` |

##### `LinkResolver::resolve_field` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                        | Location       |
| -----: | ----: | -----------: | ------: | ----------------------------- | -------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `ciField::will_link`          | `libjvm.dylib` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `ciBytecodeStream::get_field` | `libjvm.dylib` |

##### `pthread_mutex_lock` (`libsystem_pthread.dylib`)

| Change | Delta |             % | Samples | Caller                                | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------- | -------------- |
| +33.3% |    +1 | 75.0% → 66.7% |   3 → 4 | `Mutex::lock_without_safepoint_check` | `libjvm.dylib` |
|    new |    +1 |  0.0% → 16.7% |   0 → 1 | `Chunk::operator new`                 | `libjvm.dylib` |

##### `HierarchyVisitor<FindMethodsByErasedSig>::run` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                     | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------------ | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `DefaultMethods::generate_default_methods` | `libjvm.dylib` |

##### `arrayof_oop_disjoint_arraycopy` (`<unknown>`)

| Change | Delta |            % | Samples | Caller                         | Location              |
| -----: | ----: | -----------: | ------: | ------------------------------ | --------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `copyOf(Object[], int, Class)` | `java.util.Arrays`    |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `addAll(Collection)`           | `java.util.ArrayList` |

##### `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                                                                   | Location       |
| ------: | ----: | -----: | ------: | ------------------------------------------------------------------------ | -------------- |
| +100.0% |    +2 | 100.0% |   2 → 4 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object` | `libjvm.dylib` |

##### `CodeHeap::search_freelist` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller               | Location       |
| ------: | ----: | -----: | ------: | -------------------- | -------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `CodeHeap::allocate` | `libjvm.dylib` |

##### `void OopOopIterateDispatch<G1ScanCardClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                                                          | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------------- | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `HeapWordImpl** HeapRegion::oops_on_memregion_iterate<G1ScanCardClosure, true>` | `libjvm.dylib` |

##### `HeapWordImpl** HeapRegion::oops_on_memregion_iterate<G1ScanCardClosure, true>` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                     | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------------ | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `G1ScanHRForRegionClosure::scan_memregion` | `libjvm.dylib` |

##### `GrowableArrayWithAllocator<LIR_Op*, GrowableArray<LIR_Op*>>::expand_to` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                   | Location       |
| -----: | ----: | -----------: | ------: | ------------------------ | -------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `LIR_List::branch`       | `libjvm.dylib` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `LIR_List::metadata2reg` | `libjvm.dylib` |

##### `klassVtable::update_inherited_vtable` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                           | Location       |
| -----: | ----: | ------------: | ------: | -------------------------------- | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `klassVtable::initialize_vtable` | `libjvm.dylib` |

##### `StackMapReader::parse_verification_type` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                 | Location       |
| -----: | ----: | ------------: | ------: | ---------------------- | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `StackMapReader::next` | `libjvm.dylib` |

##### `Parse::do_all_blocks` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller         | Location       |
| -----: | ----: | ------------: | ------: | -------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `Parse::Parse` | `libjvm.dylib` |

##### `ThreadCritical::ThreadCritical` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                | Location       |
| -----: | ----: | ------------: | ------: | --------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `Chunk::operator new` | `libjvm.dylib` |

##### `Matcher::pd_clone_node` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                 | Location       |
| -----: | ----: | -----------: | ------: | ---------------------- | -------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `Matcher::find_shared` | `libjvm.dylib` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `Matcher::match`       | `libjvm.dylib` |

##### `TypeInstPtr::add_offset` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                                        | Location       |
| -----: | ----: | -----------: | ------: | --------------------------------------------- | -------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `PhaseIdealLoop::get_late_ctrl_with_anti_dep` | `libjvm.dylib` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `ConnectionGraph::add_field`                  | `libjvm.dylib` |

##### `PhaseChaitin::compute_initial_block_pressure` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                             | Location       |
| ------: | ----: | -----: | ------: | ---------------------------------- | -------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `PhaseChaitin::build_ifg_physical` | `libjvm.dylib` |

##### `TypeAryPtr::add_offset` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                     | Location       |
| -----: | ----: | -----------: | ------: | -------------------------- | -------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `PhaseCCP::analyze`        | `libjvm.dylib` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `PhaseCCP::transform_once` | `libjvm.dylib` |

##### `PhaseChaitin::merge_multidefs` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                            | Location       |
| -----: | ----: | -----: | ------: | --------------------------------- | -------------- |
| +66.7% |    +2 | 100.0% |   3 → 5 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseIFG::init` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                            | Location       |
| -----: | ----: | ------------: | ------: | --------------------------------- | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseChaitin::Simplify` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                            | Location       |
| ------: | ----: | -----: | ------: | --------------------------------- | -------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `OopMapSort::sort` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                             | Location       |
| ------: | ----: | -----: | ------: | ---------------------------------- | -------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `ImmutableOopMap::ImmutableOopMap` | `libjvm.dylib` |

##### `MachNode::rematerialize` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                | Location       |
| -----: | ----: | ------------: | ------: | --------------------- | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `PhaseChaitin::Split` | `libjvm.dylib` |

##### `dispatchReceiverClassTypeOrNull(FirCallableDeclaration)` (`org.jetbrains.kotlin.fir.ClassMembersKt`)

| Change | Delta |             % | Samples | Caller                                                         | Location                                  |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------- | ----------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `dispatchReceiverClassLookupTagOrNull(FirCallableDeclaration)` | `org.jetbrains.kotlin.fir.ClassMembersKt` |

##### `readMessage(Parser, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.CodedInputStream`)

| Change | Delta |             % | Samples | Caller                                            | Location                                           |
| -----: | ----: | ------------: | ------: | ------------------------------------------------- | -------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$TypeTable` |

##### `parsePostfixExpression()` (`org.jetbrains.kotlin.parsing.KotlinExpressionParsing`)

| Change | Delta |             % | Samples | Caller                    | Location                                               |
| -----: | ----: | ------------: | ------: | ------------------------- | ------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `parsePrefixExpression()` | `org.jetbrains.kotlin.parsing.KotlinExpressionParsing` |

##### `convertCallExpression(LighterASTNode)` (`org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirExpressionBuilder`)

| Change | Delta |             % | Samples | Caller                                      | Location                                                                        |
| -----: | ----: | ------------: | ------: | ------------------------------------------- | ------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `getAsFirStatement(LighterASTNode, String)` | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirExpressionBuilder` |

##### `transformTypeRef(FirTypeRef, Object)` (`org.jetbrains.kotlin.fir.resolve.transformers.FirSpecificTypeResolverTransformer`)

| Change | Delta |             % | Samples | Caller                                                     | Location                                                  |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------- | --------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `transformUnresolvedTypeRef(FirUnresolvedTypeRef, Object)` | `org.jetbrains.kotlin.fir.visitors.FirDefaultTransformer` |

##### `loadProperty(ProtoBuf$Property, ProtoBuf$Class, FirClassSymbol)` (`org.jetbrains.kotlin.fir.deserialization.FirMemberDeserializer`)

| Change | Delta |             % | Samples | Caller                                                                                                                                                                                                                                                                                                                                                       | Location                                                          |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `deserializeClassToSymbol(ClassId, ProtoBuf$Class, FirRegularClassSymbol, NameResolver, FirSession, FirModuleData, AnnotationDeserializer, FirKDocDeserializer, FirTypeDeserializer$FlexibleTypeFactory, FirScopeProvider, SerializerExtensionProtocol, FirDeserializationContext, DeserializedContainerSource, FirDeclarationOrigin, Function2, Function2)` | `org.jetbrains.kotlin.fir.deserialization.ClassDeserializationKt` |

##### `directExpansionType(ConeClassLikeType, FirSession, Function1)` (`org.jetbrains.kotlin.fir.resolve.TypeExpansionUtilsKt`)

| Change | Delta |             % | Samples | Caller                                                               | Location                                                |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------------- | ------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `fullyExpandedTypeNoCache(ConeClassLikeType, FirSession, Function1)` | `org.jetbrains.kotlin.fir.resolve.TypeExpansionUtilsKt` |

##### `asRigidType(KotlinTypeMarker)` (`org.jetbrains.kotlin.fir.types.ConeTypeContext`)

| Change | Delta |             % | Samples | Caller                          | Location                                         |
| -----: | ----: | ------------: | ------: | ------------------------------- | ------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `asRigidType(KotlinTypeMarker)` | `org.jetbrains.kotlin.fir.types.ConeTypeContext` |

##### `transformChildren(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.types.impl.FirUserTypeRefImpl`)

| Change | Delta |             % | Samples | Caller                                      | Location                                                 |
| -----: | ----: | ------------: | ------: | ------------------------------------------- | -------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `transformChildren(FirTransformer, Object)` | `org.jetbrains.kotlin.fir.types.impl.FirUserTypeRefImpl` |

##### `invoke(Object, Object)` (`org.jetbrains.kotlin.fir.resolve.providers.impl.FirTypeResolverImpl$$Lambda.0x000000f0015ca850`)

| Change | Delta |             % | Samples | Caller                                                      | Location                                                |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------- | ------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `processClassifiersByNameWithSubstitution(Name, Function2)` | `org.jetbrains.kotlin.fir.scopes.FirTypeParameterScope` |

##### `resolveStatus(FirDeclaration, FirDeclarationStatus, FirClass, FirProperty, boolean, List)` (`org.jetbrains.kotlin.fir.resolve.transformers.FirStatusResolver`)

| Change | Delta |             % | Samples | Caller                                                     | Location                                                          |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------- | ----------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `resolveStatus(FirNamedFunction, FirClass, boolean, List)` | `org.jetbrains.kotlin.fir.resolve.transformers.FirStatusResolver` |

##### `parseParameterizedClassRefSignature(CharacterIterator, ClassifierResolutionContext)` (`org.jetbrains.kotlin.load.java.structure.impl.classFiles.BinaryClassSignatureParser`)

| Change | Delta |             % | Samples | Caller                                                                             | Location                                                                              |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `parseTypeWithoutVarianceAndArray(CharacterIterator, ClassifierResolutionContext)` | `org.jetbrains.kotlin.load.java.structure.impl.classFiles.BinaryClassSignatureParser` |

##### `invokeSuspend(Object)` (`org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner$processCandidate$1`)

| Change | Delta |             % | Samples | Caller               | Location                                              |
| -----: | ----: | ------------: | ------: | -------------------- | ----------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `resumeWith(Object)` | `kotlin.coroutines.jvm.internal.BaseContinuationImpl` |

##### `runCompletionForCall(Candidate, ConstraintSystemCompletionMode, FirExpression, ConeKotlinType, PostponedArgumentsAnalyzer)` (`org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter`)

| Change | Delta |             % | Samples | Caller                                                 | Location                                                      |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------ | ------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `completeCall(FirExpression, ResolutionMode, boolean)` | `org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter` |

##### `transformBlock(FirBlock, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`)

| Change | Delta |             % | Samples | Caller                             | Location                                                                                                 |
| -----: | ----: | ------------: | ------: | ---------------------------------- | -------------------------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `transformBlock(FirBlock, Object)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |

##### `_get_referenceApproximateToSuperType_$lambda$0(AbstractTypeApproximator, TypeApproximatorConfiguration, AbstractTypeApproximator$Cache, RigidTypeMarker, int)` (`org.jetbrains.kotlin.types.AbstractTypeApproximator`)

| Change | Delta |             % | Samples | Caller                                   | Location                                                                         |
| -----: | ----: | ------------: | ------: | ---------------------------------------- | -------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `invoke(Object, Object, Object, Object)` | `org.jetbrains.kotlin.types.AbstractTypeApproximator$$Lambda.0x000000f00169e958` |

##### `approximateToSuperType(KotlinTypeMarker, TypeApproximatorConfiguration, Map)` (`org.jetbrains.kotlin.types.AbstractTypeApproximator`)

| Change | Delta |             % | Samples | Caller                                                                  | Location                                              |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------------------- | ----------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `approximateToSuperType(ConeKotlinType, TypeApproximatorConfiguration)` | `org.jetbrains.kotlin.fir.types.ConeTypeApproximator` |

##### `addInitialEqualityConstraint(ConstraintInjector$Context, KotlinTypeMarker, KotlinTypeMarker, ConstraintPosition)` (`org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector`)

| Change | Delta |             % | Samples | Caller                                                                             | Location                                                                     |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `fixVariable(TypeVariableMarker, KotlinTypeMarker, FixVariableConstraintPosition)` | `org.jetbrains.kotlin.resolve.calls.inference.model.NewConstraintSystemImpl` |

##### `transformNamedFunction(FirNamedFunction, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.FirDeclarationsResolveTransformerForAnnotationArguments`)

| Change | Delta |             % | Samples | Caller                                                     | Location                                                                                                 |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `transformNamedFunction(FirNamedFunction, ResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |

##### `extractValue(AbstractArrayMapOwner)` (`org.jetbrains.kotlin.util.AbstractArrayMapOwner$AbstractArrayMapAccessor`)

| Change | Delta |             % | Samples | Caller                                       | Location                                             |
| -----: | ----: | ------------: | ------: | -------------------------------------------- | ---------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `getValue(AbstractArrayMapOwner, KProperty)` | `org.jetbrains.kotlin.util.NullableArrayMapAccessor` |

##### `forName(String, boolean, ClassLoader, Class)` (`java.lang.Class`)

| Change | Delta |             % | Samples | Caller                                  | Location          |
| -----: | ----: | ------------: | ------: | --------------------------------------- | ----------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `forName(String, boolean, ClassLoader)` | `java.lang.Class` |

##### `linkMethodHandleConstant(byte, Class, String, Object)` (`java.lang.invoke.MethodHandles$Lookup`)

| Change | Delta |             % | Samples | Caller                                                        | Location                               |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------- | -------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `linkMethodHandleConstant(Class, int, Class, String, Object)` | `java.lang.invoke.MethodHandleNatives` |

##### `linkCallSiteImpl(Class, MethodHandle, String, MethodType, Object, Object[])` (`java.lang.invoke.MethodHandleNatives`)

| Change | Delta |             % | Samples | Caller                                                           | Location                               |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------------- | -------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `linkCallSite(Object, Object, Object, Object, Object, Object[])` | `java.lang.invoke.MethodHandleNatives` |

##### `compileToBytecode()` (`java.lang.invoke.LambdaForm`)

| Change | Delta |             % | Samples | Caller                                    | Location                              |
| -----: | ----: | ------------: | ------: | ----------------------------------------- | ------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `makePreparedLambdaForm(MethodType, int)` | `java.lang.invoke.DirectMethodHandle` |

##### `addMethod()` (`java.lang.invoke.InvokerBytecodeGenerator`)

| Change | Delta |             % | Samples | Caller                          | Location                                    |
| -----: | ----: | ------------: | ------: | ------------------------------- | ------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `generateCustomizedCodeBytes()` | `java.lang.invoke.InvokerBytecodeGenerator` |

##### `spinInnerClass()` (`java.lang.invoke.InnerClassLambdaMetafactory`)

| Change | Delta |             % | Samples | Caller            | Location                                       |
| -----: | ----: | ------------: | ------: | ----------------- | ---------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `buildCallSite()` | `java.lang.invoke.InnerClassLambdaMetafactory` |

##### `getBytes()` (`jdk.internal.loader.Resource`)

| Change | Delta |             % | Samples | Caller       | Location                                       |
| -----: | ----: | ------------: | ------: | ------------ | ---------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `getBytes()` | `jdk.internal.loader.URLClassPath$JarLoader$2` |

##### `parseURL(URL, String, int, int)` (`sun.net.www.protocol.jar.Handler`)

| Change | Delta |             % | Samples | Caller                                  | Location       |
| -----: | ----: | ------------: | ------: | --------------------------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `<init>(URL, String, URLStreamHandler)` | `java.net.URL` |

##### `newDirectoryStream(Path, DirectoryStream$Filter)` (`jdk.internal.jrtfs.JrtFileSystemProvider`)

| Change | Delta |             % | Samples | Caller                     | Location              |
| -----: | ----: | ------------: | ------: | -------------------------- | --------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `newDirectoryStream(Path)` | `java.nio.file.Files` |

##### `<init>(String, int)` (`java.math.BigInteger`)

| Change | Delta |             % | Samples | Caller           | Location               |
| -----: | ----: | ------------: | ------: | ---------------- | ---------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `<init>(String)` | `java.math.BigInteger` |

##### `allocateInstance(Object)` (`java.lang.invoke.DirectMethodHandle`)

| Change | Delta |             % | Samples | Caller                             | Location                                     |
| -----: | ----: | ------------: | ------: | ---------------------------------- | -------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `newInvokeSpecial(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `mapCapacity(int)` (`kotlin.collections.MapsKt__MapsJVMKt`)

| Change | Delta |             % | Samples | Caller                                                                                | Location                                                     |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `getOrCreateCallGenerator(IrFunctionAccessExpression, BlockInfo, JvmMethodSignature)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `put(Object, Object)` (`java.util.HashMap`)

| Change | Delta |             % | Samples | Caller                                                  | Location                                               |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------- | ------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `loadAllClassesFromJars(Collection, int, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `resize()` (`java.util.HashMap`)

| Change | Delta |             % | Samples | Caller                                          | Location            |
| -----: | ----: | ------------: | ------: | ----------------------------------------------- | ------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `filterInPlace$CollectionsKt__MutableCollectionsKt(List, Function1, boolean)` (`kotlin.collections.CollectionsKt__MutableCollectionsKt`)

| Change | Delta |             % | Samples | Caller                       | Location                                                 |
| -----: | ----: | ------------: | ------: | ---------------------------- | -------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `removeAll(List, Function1)` | `kotlin.collections.CollectionsKt__MutableCollectionsKt` |

##### `next()` (`java.util.HashMap$ValueIterator`)

| Change | Delta |             % | Samples | Caller                                                  | Location                                               |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------- | ------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `loadAllClassesFromJars(Collection, int, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `isMetaName(byte[], int, int)` (`java.util.zip.ZipFile$Source`)

| Change | Delta |             % | Samples | Caller              | Location    |
| -----: | ----: | ------------: | ------: | ------------------- | ----------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `break_stack_range` | `<unknown>` |

##### `sub(Object)` (`jdk.internal.loader.AbstractClassLoaderValue`)

| Change | Delta |             % | Samples | Caller                                             | Location                  |
| -----: | ----: | ------------: | ------: | -------------------------------------------------- | ------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `getProxyConstructor(Class, ClassLoader, Class[])` | `java.lang.reflect.Proxy` |

##### `<init>(String[], Set, List)` (`kotlin.reflect.jvm.internal.impl.metadata.jvm.deserialization.JvmNameResolverBase`)

| Change | Delta |             % | Samples | Caller                                           | Location                                                                        |
| -----: | ----: | ------------: | ------: | ------------------------------------------------ | ------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `<init>(JvmProtoBuf$StringTableTypes, String[])` | `kotlin.reflect.jvm.internal.impl.metadata.jvm.deserialization.JvmNameResolver` |

##### `<init>(CodedInputStream, ExtensionRegistryLite)` (`kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Type$Argument`)

| Change | Delta |             % | Samples | Caller                                                        | Location                                                           |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------- | ------------------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` | `kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Type$Argument` |

##### `__psynch_cvwait` (`libsystem_kernel.dylib`)

|  Change | Delta |              % |  Samples | Caller                  | Location                 |
| ------: | ----: | -------------: | -------: | ----------------------- | ------------------------ |
|  -95.3% |  -427 | 98.9% → 100.0% | 448 → 21 | `PlatformMonitor::wait` | `libjvm.dylib`           |
| removed |    -4 |    0.9% → 0.0% |    4 → 0 | `Profiler::timerLoop`   | `libasyncProfiler.dylib` |
| removed |    -1 |    0.2% → 0.0% |    1 → 0 | `Parker::park`          | `libjvm.dylib`           |

##### `__psynch_mutexwait` (`libsystem_kernel.dylib`)

| Change | Delta |      % |  Samples | Caller                              | Location                  |
| -----: | ----: | -----: | -------: | ----------------------------------- | ------------------------- |
| -94.7% |  -251 | 100.0% | 265 → 14 | `_pthread_mutex_firstfit_lock_slow` | `libsystem_pthread.dylib` |

##### `InstanceKlass::find_method_index` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                  | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------------- | -------------- |
|  -83.8% |   -31 | 86.0% → 75.0% |  37 → 6 | `InstanceKlass::uncached_lookup_method` | `libjvm.dylib` |
| removed |    -3 |   7.0% → 0.0% |   3 → 0 | `InstanceKlass::find_local_method`      | `libjvm.dylib` |
|  -33.3% |    -1 |  7.0% → 25.0% |   3 → 2 | `InstanceKlass::find_method`            | `libjvm.dylib` |

##### `semaphore_wait_trap` (`libsystem_kernel.dylib`)

|  Change | Delta |             % | Samples | Caller                           | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------- | -------------- |
| removed |   -20 |  57.1% → 0.0% |  20 → 0 | `GenericWaitBarrier::Cell::wait` | `libjvm.dylib` |
|  -83.3% |   -10 | 34.3% → 66.7% |  12 → 2 | `WorkerThread::run`              | `libjvm.dylib` |
|  -66.7% |    -2 |  8.6% → 33.3% |   3 → 1 | `WorkerThreads::run_task`        | `libjvm.dylib` |

##### `SymbolTable::do_lookup` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                         | Location       |
| -----: | ----: | ------------: | ------: | ---------------------------------------------- | -------------- |
| -81.3% |   -13 | 30.2% → 13.6% |  16 → 3 | `SymbolTable::new_symbol`                      | `libjvm.dylib` |
| -44.0% |   -11 | 47.2% → 63.6% | 25 → 14 | `SymbolTable::lookup_only`                     | `libjvm.dylib` |
| -58.3% |    -7 | 22.6% → 22.7% |  12 → 5 | `ClassFileParser::parse_constant_pool_entries` | `libjvm.dylib` |

##### `swtch_pri` (`libsystem_kernel.dylib`)

|  Change | Delta |            % | Samples | Caller                                                                                                                                                                                                                                                                                                                                           | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------- |
| removed |   -12 | 63.2% → 0.0% |  12 → 0 | `TaskTerminator::offer_termination`                                                                                                                                                                                                                                                                                                              | `libjvm.dylib` |
| removed |    -3 | 15.8% → 0.0% |   3 → 0 | `GlobalCounter::write_synchronize`                                                                                                                                                                                                                                                                                                               | `libjvm.dylib` |
| removed |    -3 | 15.8% → 0.0% |   3 → 0 | `bool ConcurrentHashTable<G1CodeRootSetHashTableConfig, (MEMFLAGS)5>::internal_insert_get<G1CodeRootSetHashTable::HashTableLookUp, bool ConcurrentHashTable<G1CodeRootSetHashTableConfig, (MEMFLAGS)5>::insert<G1CodeRootSetHashTable::HashTableLookUp>(Thread*, G1CodeRootSetHashTable::HashTableLookUp&, nmethod* const&, bool*, bool*)::NOP>` | `libjvm.dylib` |
| removed |    -1 |  5.3% → 0.0% |   1 → 0 | `bool ConcurrentHashTable<G1CardSetHashTableConfig, (MEMFLAGS)6>::internal_insert_get<G1CardSetHashTable::G1CardSetHashTableLookUp, G1CardSetHashTable::G1CardSetHashTableFound>`                                                                                                                                                                | `libjvm.dylib` |

##### `ciObjectFactory::get_metadata` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                          | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------- | -------------- |
|  -55.6% |    -5 | 32.1% → 33.3% |   9 → 4 | `ciBytecodeStream::get_method`  | `libjvm.dylib` |
| removed |    -3 |  10.7% → 0.0% |   3 → 0 | `ciObjectFactory::get`          | `libjvm.dylib` |
|  -75.0% |    -3 |  14.3% → 8.3% |   4 → 1 | `ciEnv::get_method_from_handle` | `libjvm.dylib` |
|  -66.7% |    -2 |  10.7% → 8.3% |   3 → 1 | `ciEnv::get_klass_by_name_impl` | `libjvm.dylib` |
| removed |    -1 |   3.6% → 0.0% |   1 → 0 | `ciMethodData::load_data`       | `libjvm.dylib` |

##### `PhaseChaitin::Split` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                            | Location       |
| -----: | ----: | -----: | ------: | --------------------------------- | -------------- |
| -55.6% |   -15 | 100.0% | 27 → 12 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `resource_allocate_bytes` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                                     | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------------------ | -------------- |
| removed |    -2 | 14.3% → 0.0% |   2 → 0 | `LinearScan::compute_debug_info_for_scope` | `libjvm.dylib` |
| removed |    -1 |  7.1% → 0.0% |   1 → 0 | `FieldLayoutBuilder::prologue`             | `libjvm.dylib` |
| removed |    -1 |  7.1% → 0.0% |   1 → 0 | `SignatureStream::find_symbol`             | `libjvm.dylib` |
| removed |    -1 |  7.1% → 0.0% |   1 → 0 | `MemoryBuffer::load`                       | `libjvm.dylib` |
| removed |    -1 |  7.1% → 0.0% |   1 → 0 | `GraphBuilder::push_scope`                 | `libjvm.dylib` |

##### `sanitizeStackTrace(Throwable)` (`kotlin.jvm.internal.Intrinsics`)

|  Change | Delta |              % | Samples | Caller                               | Location                         |
| ------: | ----: | -------------: | ------: | ------------------------------------ | -------------------------------- |
|  -73.3% |   -11 | 88.2% → 100.0% |  15 → 4 | `throwParameterIsNullNPE(String)`    | `kotlin.jvm.internal.Intrinsics` |
| removed |    -1 |    5.9% → 0.0% |   1 → 0 | `throwJavaNpe()`                     | `kotlin.jvm.internal.Intrinsics` |
| removed |    -1 |    5.9% → 0.0% |   1 → 0 | `throwUninitializedProperty(String)` | `kotlin.jvm.internal.Intrinsics` |

##### `pthread_jit_write_protect_np` (`libsystem_pthread.dylib`)

|  Change | Delta |             % | Samples | Caller                                          | Location                   |
| ------: | ----: | ------------: | ------: | ----------------------------------------------- | -------------------------- |
|  -75.0% |    -3 | 20.0% → 12.5% |   4 → 1 | `jni_ReleasePrimitiveArrayCritical`             | `libjvm.dylib`             |
| removed |    -2 |  10.0% → 0.0% |   2 → 0 | `JVM_IHashCode`                                 | `libjvm.dylib`             |
| removed |    -1 |   5.0% → 0.0% |   1 → 0 | `copyMemory0(Object, long, Object, long, long)` | `jdk.internal.misc.Unsafe` |
| removed |    -1 |   5.0% → 0.0% |   1 → 0 | `Unsafe_CopyMemory0`                            | `libjvm.dylib`             |
|  -50.0% |    -1 | 10.0% → 12.5% |   2 → 1 | `InterpreterRuntime::build_method_counters`     | `libjvm.dylib`             |

##### `PhaseIdealLoop::build_loop_late_post_work` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                            | Location       |
| -----: | ----: | -----: | ------: | --------------------------------- | -------------- |
| -78.6% |   -11 | 100.0% |  14 → 3 | `PhaseIdealLoop::build_loop_late` | `libjvm.dylib` |

##### `__psynch_cvbroad` (`libsystem_kernel.dylib`)

|  Change | Delta |              % | Samples | Caller                                  | Location       |
| ------: | ----: | -------------: | ------: | --------------------------------------- | -------------- |
| removed |    -4 |   28.6% → 0.0% |   4 → 0 | `VMThread::wait_until_executed`         | `libjvm.dylib` |
| removed |    -4 |   28.6% → 0.0% |   4 → 0 | `ServiceThread::enqueue_deferred_event` | `libjvm.dylib` |
|  -40.0% |    -2 | 35.7% → 100.0% |   5 → 3 | `CompileBroker::create_compile_task`    | `libjvm.dylib` |
| removed |    -1 |    7.1% → 0.0% |   1 → 0 | `VM_GC_Operation::doit_epilogue`        | `libjvm.dylib` |

##### `I2C/C2I adapters(0xb)` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                                                           | Location                                                                           |
| ------: | ----: | -----------: | ------: | ---------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| removed |    -2 | 15.4% → 0.0% |   2 → 0 | `replaceLambdaArgumentEffects(FirFunctionCall, FirSession)`      | `org.jetbrains.kotlin.fir.resolve.transformers.LambdaArgumentEffectsTransformerKt` |
| removed |    -1 |  7.7% → 0.0% |   1 → 0 | `<init>(KtSourceElement, Name)`                                  | `org.jetbrains.kotlin.fir.references.impl.FirSimpleNamedReference`                 |
| removed |    -1 |  7.7% → 0.0% |   1 → 0 | `<init>(CodedInputStream, ExtensionRegistryLite, JvmProtoBuf$1)` | `org.jetbrains.kotlin.metadata.jvm.JvmProtoBuf$JvmMethodSignature`                 |
| removed |    -1 |  7.7% → 0.0% |   1 → 0 | `processClassifiersByNameWithSubstitution(Name, Function2)`      | `org.jetbrains.kotlin.fir.scopes.FirTypeParameterScope`                            |
| removed |    -1 |  7.7% → 0.0% |   1 → 0 | `contextReceiverTypes(ProtoBuf$Function, TypeTable)`             | `org.jetbrains.kotlin.metadata.deserialization.ProtoTypeTableUtilKt`               |

##### `__psynch_mutexdrop` (`libsystem_kernel.dylib`)

| Change | Delta |      % | Samples | Caller                                | Location                  |
| -----: | ----: | -----: | ------: | ------------------------------------- | ------------------------- |
| -84.6% |   -11 | 100.0% |  13 → 2 | `_pthread_mutex_firstfit_unlock_slow` | `libsystem_pthread.dylib` |

##### `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                            | Location       |
| -----: | ----: | -----: | ------: | --------------------------------- | -------------- |
| -45.5% |   -10 | 100.0% | 22 → 12 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `tlv_get_addr` (`libdyld.dylib`)

|  Change | Delta |           % | Samples | Caller                                    | Location       |
| ------: | ----: | ----------: | ------: | ----------------------------------------- | -------------- |
| removed |    -2 | 6.3% → 0.0% |   2 → 0 | `BlockBegin::BlockBegin`                  | `libjvm.dylib` |
| removed |    -2 | 6.3% → 0.0% |   2 → 0 | `PhaseLive::compute`                      | `libjvm.dylib` |
| removed |    -2 | 6.3% → 0.0% |   2 → 0 | `SystemDictionary::add_loader_constraint` | `libjvm.dylib` |
|     new |    +2 | 0.0% → 9.1% |   0 → 2 | `TypeInstPtr::add_offset`                 | `libjvm.dylib` |
|     new |    +2 | 0.0% → 9.1% |   0 → 2 | `State::MachNodeGenerator`                | `libjvm.dylib` |

##### `_platform_memset` (`libsystem_platform.dylib`)

|  Change | Delta |            % | Samples | Caller                               | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------------ | -------------- |
| removed |    -2 | 10.5% → 0.0% |   2 → 0 | `MethodData::allocate`               | `libjvm.dylib` |
|     new |    +2 | 0.0% → 22.2% |   0 → 2 | `PhaseChaitin::Register_Allocate`    | `libjvm.dylib` |
| removed |    -1 |  5.3% → 0.0% |   1 → 0 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |
| removed |    -1 |  5.3% → 0.0% |   1 → 0 | `Method::allocate`                   | `libjvm.dylib` |
| removed |    -1 |  5.3% → 0.0% |   1 → 0 | `ClassFileParser::parse_stream`      | `libjvm.dylib` |

##### `inflate_fast` (`libzip.dylib`)

| Change | Delta |      % | Samples | Caller                                          | Location       |
| -----: | ----: | -----: | ------: | ----------------------------------------------- | -------------- |
| -15.2% |   -10 | 100.0% | 66 → 56 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `libzip.dylib` |

##### `SymbolTable::lookup_shared` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                     | Location       |
| -----: | ----: | -----: | ------: | -------------------------- | -------------- |
| -90.0% |    -9 | 100.0% |  10 → 1 | `SymbolTable::lookup_only` | `libjvm.dylib` |

##### `inflate` (`libzip.dylib`)

| Change | Delta |      % | Samples | Caller                                          | Location       |
| -----: | ----: | -----: | ------: | ----------------------------------------------- | -------------- |
| -72.7% |    -8 | 100.0% |  11 → 3 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `libzip.dylib` |

##### `bsearch` (`libsystem_c.dylib`)

| Change | Delta |      % | Samples | Caller                           | Location       |
| -----: | ----: | -----: | ------: | -------------------------------- | -------------- |
| -61.5% |    -8 | 100.0% |  13 → 5 | `encoding_for_logical_immediate` | `libjvm.dylib` |

##### `Dictionary::find` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                                       | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------ | -------------- |
|  -87.5% |    -7 | 57.1% → 16.7% |   8 → 1 | `SystemDictionary::find_constrained_instance_or_array_klass` | `libjvm.dylib` |
|  -40.0% |    -2 | 35.7% → 50.0% |   5 → 3 | `SystemDictionary::resolve_instance_class_or_null`           | `libjvm.dylib` |
| +100.0% |    +1 |  7.1% → 33.3% |   1 → 2 | `ConstantPool::klass_at_if_loaded`                           | `libjvm.dylib` |

##### `trampoline_stub_Relocation::get_trampoline_for` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                                | Location       |
| -----: | ----: | -----: | ------: | ------------------------------------- | -------------- |
| -80.0% |    -8 | 100.0% |  10 → 2 | `NativeCall::set_destination_mt_safe` | `libjvm.dylib` |

##### `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                             | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------------------------- | -------------- |
|  -33.3% |    -4 | 57.1% → 61.5% |  12 → 8 | `DebugInformationRecorder::describe_scope`         | `libjvm.dylib` |
|  -50.0% |    -4 | 38.1% → 30.8% |   8 → 4 | `DebugInformationRecorder::serialize_scope_values` | `libjvm.dylib` |
| removed |    -1 |   4.8% → 0.0% |   1 → 0 | `LIR_Assembler::record_non_safepoint_debug_info`   | `libjvm.dylib` |
|     new |    +1 |   0.0% → 7.7% |   0 → 1 | `DebugInformationRecorder::create_scope_values`    | `libjvm.dylib` |

##### `Dict::Insert` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller           | Location       |
| ------: | ----: | ------------: | ------: | ---------------- | -------------- |
| removed |    -6 | 100.0% → 0.0% |   6 → 0 | `Type::hashcons` | `libjvm.dylib` |

##### `LinearScanWalker::alloc_free_reg` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                               | Location       |
| -----: | ----: | -----: | ------: | ------------------------------------ | -------------- |
| -60.0% |    -9 | 100.0% |  15 → 6 | `LinearScanWalker::activate_current` | `libjvm.dylib` |

##### `PhaseIdealLoop::is_dominator` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller                                        | Location       |
| ------: | ----: | -------------: | ------: | --------------------------------------------- | -------------- |
|  -75.0% |    -6 | 88.9% → 100.0% |   8 → 2 | `PhaseIdealLoop::get_late_ctrl_with_anti_dep` | `libjvm.dylib` |
| removed |    -1 |   11.1% → 0.0% |   1 → 0 | `PhaseIdealLoop::compute_early_ctrl`          | `libjvm.dylib` |

##### `PhaseLive::add_liveout` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                            | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------- | -------------- |
| removed |    -9 | 100.0% → 0.0% |   9 → 0 | `PhaseLive::compute`              | `libjvm.dylib` |
|     new |    +2 | 0.0% → 100.0% |   0 → 2 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseChaitin::elide_copy` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                                     | Location       |
| -----: | ----: | -----: | ------: | ------------------------------------------ | -------------- |
| -43.8% |    -7 | 100.0% |  16 → 9 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |

##### `PhaseIterGVN::remove_globally_dead_node` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                       | Location       |
| ------: | ----: | -----------: | ------: | ---------------------------- | -------------- |
| removed |    -4 | 57.1% → 0.0% |   4 → 0 | `PhaseIterGVN::subsume_node` | `libjvm.dylib` |
| removed |    -2 | 28.6% → 0.0% |   2 → 0 | `split_if`                   | `libjvm.dylib` |
| removed |    -1 | 14.3% → 0.0% |   1 → 0 | `PhaseIterGVN::optimize`     | `libjvm.dylib` |

##### `LinearScanWalker::free_collect_inactive_fixed` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                             | Location       |
| -----: | ----: | -----: | ------: | ---------------------------------- | -------------- |
| -43.8% |    -7 | 100.0% |  16 → 9 | `LinearScanWalker::alloc_free_reg` | `libjvm.dylib` |

##### `IntervalWalker::walk_to` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                           | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------- | -------------- |
| removed |    -3 |  21.4% → 0.0% |   3 → 0 | `LinearScan::compute_oop_map`    | `libjvm.dylib` |
|  -37.5% |    -3 | 57.1% → 71.4% |   8 → 5 | `IntervalWalker::walk_to`        | `libjvm.dylib` |
|  -33.3% |    -1 | 21.4% → 28.6% |   3 → 2 | `LinearScan::allocate_registers` | `libjvm.dylib` |

##### `LIR_OpVisitState::visit` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------- | -------------- |
| -75.0% |    -3 | 36.4% → 25.0% |   4 → 1 | `LinearScan::compute_local_live_sets` | `libjvm.dylib` |
| -66.7% |    -2 | 27.3% → 25.0% |   3 → 1 | `LinearScan::assign_reg_num`          | `libjvm.dylib` |
| -66.7% |    -2 | 27.3% → 25.0% |   3 → 1 | `LinearScan::build_intervals`         | `libjvm.dylib` |

##### `PhaseIterGVN::transform_old` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                   | Location       |
| ------: | ----: | ------------: | ------: | ------------------------ | -------------- |
| removed |    -6 | 100.0% → 0.0% |   6 → 0 | `PhaseIterGVN::optimize` | `libjvm.dylib` |

##### `RelocIterator::set_limits` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                               | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------------ | -------------- |
| removed |    -4 | 50.0% → 0.0% |   4 → 0 | `NativeMovConstReg::set_data`        | `libjvm.dylib` |
| removed |    -2 | 25.0% → 0.0% |   2 → 0 | `CompiledMethod::attached_method`    | `libjvm.dylib` |
| removed |    -1 | 12.5% → 0.0% |   1 → 0 | `SharedRuntime::reresolve_call_site` | `libjvm.dylib` |
|     new |    +1 | 0.0% → 50.0% |   0 → 1 | `CompiledIC::CompiledIC`             | `libjvm.dylib` |

##### `LinearScan::assign_reg_num` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                       | Location       |
| -----: | ----: | -----: | ------: | ---------------------------- | -------------- |
| -66.7% |    -6 | 100.0% |   9 → 3 | `LinearScan::do_linear_scan` | `libjvm.dylib` |

##### `Compile::final_graph_reshaping_walk` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                           | Location       |
| -----: | ----: | -----: | ------: | -------------------------------- | -------------- |
| -83.3% |    -5 | 100.0% |   6 → 1 | `Compile::final_graph_reshaping` | `libjvm.dylib` |

##### `PhaseCFG::schedule_early` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                         | Location       |
| -----: | ----: | -----: | ------: | ------------------------------ | -------------- |
| -83.3% |    -5 | 100.0% |   6 → 1 | `PhaseCFG::global_code_motion` | `libjvm.dylib` |

##### `Scheduling::ComputeUseCount` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                     | Location       |
| -----: | ----: | -----: | ------: | -------------------------- | -------------- |
| -83.3% |    -5 | 100.0% |   6 → 1 | `Scheduling::DoScheduling` | `libjvm.dylib` |

##### `Unique_Node_List::remove` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                                    | Location       |
| -----: | ----: | -----: | ------: | ----------------------------------------- | -------------- |
| -71.4% |    -5 | 100.0% |   7 → 2 | `PhaseIterGVN::remove_globally_dead_node` | `libjvm.dylib` |

##### `Node::dominates` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                           | Location       |
| -----: | ----: | -----: | ------: | -------------------------------- | -------------- |
| -62.5% |    -5 | 100.0% |   8 → 3 | `MemNode::all_controls_dominate` | `libjvm.dylib` |

##### `<init>(byte[], int, boolean)` (`org.jetbrains.org.objectweb.asm.ClassReader`)

|  Change | Delta |             % | Samples | Caller                     | Location                                      |
| ------: | ----: | ------------: | ------: | -------------------------- | --------------------------------------------- |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | `<init>(byte[], int, int)` | `org.jetbrains.org.objectweb.asm.ClassReader` |

##### `withNullability(ConeKotlinType, boolean, ConeTypeContext, ConeAttributes, boolean)` (`org.jetbrains.kotlin.fir.types.TypeUtilsKt`)

|  Change | Delta |             % | Samples | Caller                                                                                                    | Location                                     |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | `withNullability$default(ConeKotlinType, boolean, ConeTypeContext, ConeAttributes, boolean, int, Object)` | `org.jetbrains.kotlin.fir.types.TypeUtilsKt` |

##### `loadFunction(ProtoBuf$Function, ProtoBuf$Class, FirClassSymbol, FirDeclarationOrigin)` (`org.jetbrains.kotlin.fir.deserialization.FirMemberDeserializer`)

|  Change | Delta |             % | Samples | Caller                                                                                                                              | Location                                                         |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `loadFunction$default(FirMemberDeserializer, ProtoBuf$Function, ProtoBuf$Class, FirClassSymbol, FirDeclarationOrigin, int, Object)` | `org.jetbrains.kotlin.fir.deserialization.FirMemberDeserializer` |

##### `check(CheckerSink, ResolutionContext, Candidate, Continuation)` (`org.jetbrains.kotlin.fir.resolve.calls.stages.CheckArguments`)

|  Change | Delta |             % | Samples | Caller                  | Location                                                                                 |
| ------: | ----: | ------------: | ------: | ----------------------- | ---------------------------------------------------------------------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner$processCandidate$1` |

##### `processDefaultsAndRunChecks()` (`org.jetbrains.kotlin.fir.resolve.calls.stages.FirCallArgumentsProcessor`)

|  Change | Delta |             % | Samples | Caller                                                                               | Location                                                                         |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `mapArguments(BodyResolveComponents, List, FirFunction, FirScope, boolean, boolean)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.FirArgumentsToParametersMapperKt` |

##### `readSourceFileWithMapping(InputStreamReader)` (`org.jetbrains.kotlin.KtSourceFileLinesMappingKt`)

|  Change | Delta |             % | Samples | Caller                                                                        | Location                                       |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------------------- | ---------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `buildFirViaLightTree(FirSession, Collection, DiagnosticReporter, Function2)` | `org.jetbrains.kotlin.fir.pipeline.FirUtilsKt` |

##### `put(Comparable, Object)` (`org.jetbrains.kotlin.protobuf.SmallSortedMap`)

|  Change | Delta |             % | Samples | Caller                                           | Location                                 |
| ------: | ----: | ------------: | ------: | ------------------------------------------------ | ---------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `setField(FieldSet$FieldDescriptorLite, Object)` | `org.jetbrains.kotlin.protobuf.FieldSet` |

##### `<init>(FirMemberDeclaration)` (`org.jetbrains.kotlin.fir.scopes.impl.FirMemberTypeParameterScope`)

|  Change | Delta |            % | Samples | Caller                                                     | Location                                                                                       |
| ------: | ----: | -----------: | ------: | ---------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `addTypeParametersScope(FirMemberDeclaration)`             | `org.jetbrains.kotlin.fir.resolve.transformers.FirTypeResolveTransformer`                      |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `transformNamedFunction(FirNamedFunction, ResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer` |

##### `processGivenConstraints(ConstraintInjector$Context, ConstraintInjector$TypeCheckerStateForConstraintInjector, Collection)` (`org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector`)

|  Change | Delta |             % | Samples | Caller                                                                                                                      | Location                                                                     |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `processConstraintsIgnoringForksData(ConstraintInjector$Context, ConstraintInjector$TypeCheckerStateForConstraintInjector)` | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector` |

##### `prepareQualifiedTransform(FirQualifiedAccessExpression, FirNamedReferenceWithCandidate)` (`org.jetbrains.kotlin.fir.resolve.transformers.FirCallCompletionResultsWriterTransformer`)

|  Change | Delta |             % | Samples | Caller                                                         | Location                                                                                  |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `transformFunctionCall(FirFunctionCall, ExpectedArgumentType)` | `org.jetbrains.kotlin.fir.resolve.transformers.FirCallCompletionResultsWriterTransformer` |

##### `processCandidatesWithGivenImplicitReceiverAsValue(ImplicitReceiverValue, CallInfo, TowerGroup, Set, Set, Set, boolean, Continuation)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolveTask`)

|  Change | Delta |            % | Samples | Caller                                                                                                                                                             | Location                                                           |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------ |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `access$processCandidatesWithGivenImplicitReceiverAsValue(FirTowerResolveTask, ImplicitReceiverValue, CallInfo, TowerGroup, Set, Set, Set, boolean, Continuation)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolveTask` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `runResolverForNoReceiver(CallInfo, boolean, Continuation)`                                                                                                        | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolveTask` |

##### `substituteArguments(ConeSimpleKotlinType)` (`org.jetbrains.kotlin.fir.resolve.substitution.AbstractConeSubstitutor`)

|  Change | Delta |             % | Samples | Caller                                | Location                                                                |
| ------: | ----: | ------------: | ------: | ------------------------------------- | ----------------------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `substituteRecursive(ConeKotlinType)` | `org.jetbrains.kotlin.fir.resolve.substitution.AbstractConeSubstitutor` |

##### `convertJavaMethodToFir(JavaClass, JavaMethod, ClassId, ConeClassLikeType, FirModuleData, FirRegularClassSymbol, JavaPackage)` (`org.jetbrains.kotlin.fir.java.FirJavaFacadeKt`)

|  Change | Delta |             % | Samples | Caller                                                                                                                                | Location                                        |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `access$convertJavaMethodToFir(JavaClass, JavaMethod, ClassId, ConeClassLikeType, FirModuleData, FirRegularClassSymbol, JavaPackage)` | `org.jetbrains.kotlin.fir.java.FirJavaFacadeKt` |

##### `tryToSetSourceForImplicitReceiver$tryToSetSourceForImplicitReceiver(FirExpression, Candidate)` (`org.jetbrains.kotlin.fir.resolve.calls.candidate.Candidate`)

|  Change | Delta |             % | Samples | Caller                                                  | Location                                                     |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------- | ------------------------------------------------------------ |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `tryToSetSourceForImplicitReceiver(ConeResolutionAtom)` | `org.jetbrains.kotlin.fir.resolve.calls.candidate.Candidate` |

##### `equals(Object)` (`org.jetbrains.kotlin.name.CallableId`)

|  Change | Delta |             % | Samples | Caller                     | Location                         |
| ------: | ----: | ------------: | ------: | -------------------------- | -------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `areEqual(Object, Object)` | `kotlin.jvm.internal.Intrinsics` |

##### `acceptChildren(FirVisitorVoid)` (`org.jetbrains.kotlin.fir.FirElement`)

|  Change | Delta |             % | Samples | Caller                     | Location                                                                                                                     |
| ------: | ----: | ------------: | ------: | -------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `visitElement(FirElement)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer$transformBlockInCurrentScope$2` |

##### `<init>(FirBasedSymbol, boolean, RealVariable, RealVariable, ConeKotlinType)` (`org.jetbrains.kotlin.fir.resolve.dfa.RealVariable`)

|  Change | Delta |            % | Samples | Caller                                     | Location                                                      |
| ------: | ----: | -----------: | ------: | ------------------------------------------ | ------------------------------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `implicit(FirBasedSymbol, ConeKotlinType)` | `org.jetbrains.kotlin.fir.resolve.dfa.RealVariable$Companion` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `getLocal(FirPropertySymbol, boolean)`     | `org.jetbrains.kotlin.fir.resolve.dfa.FirDataFlowAnalyzer`    |

##### `getTypeStatement(DataFlowVariable)` (`org.jetbrains.kotlin.fir.resolve.dfa.PersistentFlow`)

|  Change | Delta |            % | Samples | Caller                                                             | Location                                                   |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------ | ---------------------------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `copyStatements(MutableFlow, Collection, PersistentFlow, boolean)` | `org.jetbrains.kotlin.fir.resolve.dfa.LogicSystem`         |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `extractTypeStatementFrom(Flow, DataFlowVariable)`                 | `org.jetbrains.kotlin.fir.resolve.dfa.FirDataFlowAnalyzer` |

##### `getType()` (`org.jetbrains.kotlin.cli.jvm.index.JavaRoot`)

|  Change | Delta |             % | Samples | Caller                                 | Location                                                      |
| ------: | ----: | ------------: | ------: | -------------------------------------- | ------------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `findClasses(ClassId, Set, Function2)` | `org.jetbrains.kotlin.cli.jvm.index.JvmDependenciesIndexImpl` |

##### `hasNext()` (`org.jetbrains.kotlin.utils.SmartList$EmptyIterator`)

|  Change | Delta |            % | Samples | Caller                | Location                                                                   |
| ------: | ----: | -----------: | ------: | --------------------- | -------------------------------------------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `addAll(Collection)`  | `java.util.AbstractCollection`                                             |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `visitMaxs(int, int)` | `org.jetbrains.kotlin.codegen.inline.MaxStackFrameSizeAndLocalsCalculator` |

##### `checkNotNullParameter(Object, String)` (`kotlin.jvm.internal.Intrinsics`)

|  Change | Delta |            % | Samples | Caller                                                                             | Location                                                                              |
| ------: | ----: | -----------: | ------: | ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| removed |    -2 | 18.2% → 0.0% |   2 → 0 | `fastCorrespondingSupertypes(RigidTypeMarker, TypeConstructorMarker)`              | `org.jetbrains.kotlin.fir.types.ConeTypeContext`                                      |
| removed |    -1 |  9.1% → 0.0% |   1 → 0 | `joinFlow(Collection, Collection, boolean)`                                        | `org.jetbrains.kotlin.fir.resolve.dfa.LogicSystem`                                    |
| removed |    -1 |  9.1% → 0.0% |   1 → 0 | `getDeprecationForCallSite(FirBasedSymbol, FirSession, AnnotationUseSiteTarget[])` | `org.jetbrains.kotlin.fir.declarations.DeprecationUtilsKt`                            |
| removed |    -1 |  9.1% → 0.0% |   1 → 0 | `getValue(AbstractArrayMapOwner, KProperty)`                                       | `org.jetbrains.kotlin.util.NullableArrayMapAccessor`                                  |
| removed |    -1 |  9.1% → 0.0% |   1 → 0 | `<init>(PersistentHashMap)`                                                        | `kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMapEntries` |

##### `equals(Object)` (`java.lang.String`)

|  Change | Delta |            % | Samples | Caller                                   | Location                                      |
| ------: | ----: | -----------: | ------: | ---------------------------------------- | --------------------------------------------- |
| removed |    -1 | 16.7% → 0.0% |   1 → 0 | `matches(Method, String, Class[])`       | `java.lang.PublicMethods$Key`                 |
| removed |    -1 | 16.7% → 0.0% |   1 → 0 | `get(Object)`                            | `java.util.concurrent.ConcurrentHashMap`      |
| removed |    -1 | 16.7% → 0.0% |   1 → 0 | `areEqual(Object, Object)`               | `kotlin.jvm.internal.Intrinsics`              |
| removed |    -1 | 16.7% → 0.0% |   1 → 0 | `equals(Object)`                         | `jdk.internal.jrtfs.JrtPath`                  |
| removed |    -1 | 16.7% → 0.0% |   1 → 0 | `readMethod(ClassVisitor, Context, int)` | `org.jetbrains.org.objectweb.asm.ClassReader` |

##### `charAt(int)` (`java.lang.String`)

|  Change | Delta |            % | Samples | Caller                     | Location                               |
| ------: | ----: | -----------: | ------: | -------------------------- | -------------------------------------- |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `firstEncodeIndex(String)` | `sun.net.www.ParseUtil`                |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `current()`                | `java.text.StringCharacterIterator`    |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `getObjectType(String)`    | `org.jetbrains.org.objectweb.asm.Type` |

##### `invokeBasic(Object[])` (`java.lang.invoke.MethodHandle`)

|  Change | Delta |            % | Samples | Caller                                                                  | Location                                             |
| ------: | ----: | -----------: | ------: | ----------------------------------------------------------------------- | ---------------------------------------------------- |
| removed |    -2 | 66.7% → 0.0% |   2 → 0 | `newInvokeSpecial(Object, Object, Object, Object, int, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001684c00` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `linkToTargetMethod(Object, Object)`                                    | `java.lang.invoke.Invokers$Holder`                   |

##### `iterator()` (`java.util.ArrayList`)

|  Change | Delta |            % | Samples | Caller                                                                                                                                                                                          | Location                                                                         |
| ------: | ----: | -----------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| removed |    -2 | 66.7% → 0.0% |   2 → 0 | `<init>(FirElement, CallKind, Name, FirExpression, FirArgumentList, boolean, List, FirSession, FirFile, List, Candidate, ResolutionMode, FirFunctionCallOrigin, ImplicitInvokeMode, Candidate)` | `org.jetbrains.kotlin.fir.resolve.calls.candidate.CallInfo`                      |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `loadExperimentalitiesFromConeArguments(CheckerContext, List)`                                                                                                                                  | `org.jetbrains.kotlin.fir.analysis.checkers.expression.FirOptInUsageBaseChecker` |

##### `put(SymbolTable$Entry)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

|  Change | Delta |             % | Samples | Caller                    | Location                                     |
| ------: | ----: | ------------: | ------: | ------------------------- | -------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `addConstantUtf8(String)` | `jdk.internal.org.objectweb.asm.SymbolTable` |

##### `transfer(ConcurrentHashMap$Node[], ConcurrentHashMap$Node[])` (`java.util.concurrent.ConcurrentHashMap`)

|  Change | Delta |             % | Samples | Caller                | Location                                 |
| ------: | ----: | ------------: | ------: | --------------------- | ---------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `addCount(long, int)` | `java.util.concurrent.ConcurrentHashMap` |

##### `iteratorOf(JrtPath, DirectoryStream$Filter)` (`jdk.internal.jrtfs.JrtFileSystem`)

|  Change | Delta |             % | Samples | Caller       | Location                                |
| ------: | ----: | ------------: | ------: | ------------ | --------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `iterator()` | `jdk.internal.jrtfs.JrtDirectoryStream` |

##### `toList(Iterable)` (`kotlin.collections.CollectionsKt___CollectionsKt`)

|  Change | Delta |             % | Samples | Caller           | Location                                                            |
| ------: | ----: | ------------: | ------: | ---------------- | ------------------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `getArguments()` | `org.jetbrains.kotlin.fir.expressions.impl.FirResolvedArgumentList` |

##### `toByteArray()` (`jdk.internal.org.objectweb.asm.ClassWriter`)

|  Change | Delta |             % | Samples | Caller                 | Location                                       |
| ------: | ----: | ------------: | ------: | ---------------------- | ---------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `generateInnerClass()` | `java.lang.invoke.InnerClassLambdaMetafactory` |

##### `areEqual(Object, Object)` (`kotlin.jvm.internal.Intrinsics`)

|  Change | Delta |             % | Samples | Caller                                                          | Location                                                                                                  |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| removed |    -1 |  33.3% → 0.0% |   1 → 0 | `toConeType(ConstantValueKind)`                                 | `org.jetbrains.kotlin.fir.expressions.builder.FirConstExpressionBuilderKt`                                |
| removed |    -1 |  33.3% → 0.0% |   1 → 0 | `getActualTargetList(FirAnnotationContainer, FirSession)`       | `org.jetbrains.kotlin.fir.analysis.checkers.FirHelpersKt`                                                 |
| removed |    -1 |  33.3% → 0.0% |   1 → 0 | `findField(FieldInsnNode, Collection)`                          | `org.jetbrains.kotlin.codegen.inline.FieldRemapper`                                                       |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `check(CheckerContext, DiagnosticReporter, FirResolvedTypeRef)` | `org.jetbrains.kotlin.fir.analysis.checkers.type.FirKotlinActualAnnotationHasNoEffectInKotlinTypeChecker` |

##### `accessCheck(Object)` (`java.util.concurrent.atomic.AtomicReferenceFieldUpdater$AtomicReferenceFieldUpdaterImpl`)

|  Change | Delta |             % | Samples | Caller                                  | Location                                                                                  |
| ------: | ----: | ------------: | ------: | --------------------------------------- | ----------------------------------------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `compareAndSet(Object, Object, Object)` | `java.util.concurrent.atomic.AtomicReferenceFieldUpdater$AtomicReferenceFieldUpdaterImpl` |

##### `checkFromIndexSize(int, int, int, BiFunction)` (`jdk.internal.util.Preconditions`)

|  Change | Delta |             % | Samples | Caller                              | Location            |
| ------: | ----: | ------------: | ------: | ----------------------------------- | ------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `checkFromIndexSize(int, int, int)` | `java.util.Objects` |

##### `read(byte[], int, int)` (`java.io.PushbackInputStream`)

|  Change | Delta |             % | Samples | Caller   | Location                            |
| ------: | ----: | ------------: | ------: | -------- | ----------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `fill()` | `java.util.zip.InflaterInputStream` |

##### `needsDictionary()` (`java.util.zip.Inflater`)

|  Change | Delta |             % | Samples | Caller                   | Location                            |
| ------: | ----: | ------------: | ------: | ------------------------ | ----------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `read(byte[], int, int)` | `java.util.zip.InflaterInputStream` |

##### `vectorizedMismatch(Object, long, Object, long, int, int)` (`jdk.internal.util.ArraysSupport`)

|  Change | Delta |             % | Samples | Caller                                    | Location                          |
| ------: | ----: | ------------: | ------: | ----------------------------------------- | --------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `mismatch(byte[], int, byte[], int, int)` | `jdk.internal.util.ArraysSupport` |

##### `lookupKey(Object)` (`jdk.internal.util.ReferencedKeyMap`)

|  Change | Delta |             % | Samples | Caller                    | Location                             |
| ------: | ----: | ------------: | ------: | ------------------------- | ------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `getNoCheckStale(Object)` | `jdk.internal.util.ReferencedKeyMap` |

##### `loadClass(String, boolean)` (`java.lang.ClassLoader`)

|  Change | Delta |             % | Samples | Caller                       | Location                                                 |
| ------: | ----: | ------------: | ------: | ---------------------------- | -------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `loadClass(String, boolean)` | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |

##### `toMethodDescriptorString()` (`java.lang.invoke.MethodType`)

|  Change | Delta |             % | Samples | Caller                                                                                                                   | Location                                       |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `<init>(MethodHandles$Lookup, MethodType, String, MethodType, MethodHandle, MethodType, boolean, Class[], MethodType[])` | `java.lang.invoke.InnerClassLambdaMetafactory` |

##### `I2C/C2I adapters(0xbb)` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                                                                                                         | Location                                                                                       |
| ------: | ----: | -----------: | ------: | -------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| removed |    -1 | 10.0% → 0.0% |   1 → 0 | `isRigidType(KotlinTypeMarker)`                                                                                | `org.jetbrains.kotlin.types.model.TypeSystemContext`                                           |
| removed |    -1 | 10.0% → 0.0% |   1 → 0 | `processCandidate$default(ResolutionStageRunner, Candidate, ResolutionContext, boolean, boolean, int, Object)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner`                          |
| removed |    -1 | 10.0% → 0.0% |   1 → 0 | `loadAnnotationsFromMetadataGuarded(FirSession, List, NameResolver, LanguageFeature, AnnotationUseSiteTarget)` | `org.jetbrains.kotlin.fir.deserialization.AnnotationDeserializationUtilKt`                     |
| removed |    -1 | 10.0% → 0.0% |   1 → 0 | `processFunctionsByName(Name, Function1)`                                                                      | `org.jetbrains.kotlin.fir.scopes.impl.FirPackageMemberScope`                                   |
| removed |    -1 | 10.0% → 0.0% |   1 → 0 | `transformProperty(FirProperty, ResolutionMode)`                                                               | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer` |

##### `itable stub` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                                                                               | Location                                                                         |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------- |
| removed |    -4 | 57.1% → 0.0% |   4 → 0 | `collectionSizeOrDefault(Iterable, int)`                                             | `kotlin.collections.CollectionsKt__IterablesKt`                                  |
| removed |    -1 | 14.3% → 0.0% |   1 → 0 | `getArgumentCount()`                                                                 | `org.jetbrains.kotlin.metadata.ProtoBuf$Annotation`                              |
| removed |    -1 | 14.3% → 0.0% |   1 → 0 | `addAll(Collection)`                                                                 | `java.util.AbstractCollection`                                                   |
| removed |    -1 | 14.3% → 0.0% |   1 → 0 | `mapArguments(BodyResolveComponents, List, FirFunction, FirScope, boolean, boolean)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.FirArgumentsToParametersMapperKt` |
|     new |    +1 | 0.0% → 50.0% |   0 → 1 | `readMessage(Parser, ExtensionRegistryLite)`                                         | `org.jetbrains.kotlin.protobuf.CodedInputStream`                                 |

##### `zero_blocks` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller        | Location                                                            |
| ------: | ----: | -----------: | ------: | ------------- | ------------------------------------------------------------------- |
|  -50.0% |    -1 |        50.0% |   2 → 1 | `<init>(int)` | `java.io.ByteArrayOutputStream`                                     |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `toString()`  | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ByteArrayCharSequence` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `resize()`    | `java.util.HashMap`                                                 |
|     new |    +1 | 0.0% → 50.0% |   0 → 1 | `<init>(int)` | `jdk.internal.org.objectweb.asm.ByteVector`                         |

##### `vtable stub` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                                | Location                                                                   |
| ------: | ----: | -----------: | ------: | ------------------------------------- | -------------------------------------------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `extractValue(AbstractArrayMapOwner)` | `org.jetbrains.kotlin.util.AbstractArrayMapOwner$AbstractArrayMapAccessor` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `areEqual(Object, Object)`            | `kotlin.jvm.internal.Intrinsics`                                           |

##### `I2C/C2I adapters(0xbbbbbbababab)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                                                    | Location                                                   |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `isVisible(FirVisibilityChecker, FirMemberDeclaration, CallInfo, FirExpression, boolean)` | `org.jetbrains.kotlin.fir.resolve.calls.VisibilityUtilsKt` |

##### `I2C/C2I adapters(0xbbb)` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                                                                          | Location                                                                                      |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `simplifyLowerConstraint(KotlinTypeMarker, KotlinTypeMarker, boolean, boolean)` | `org.jetbrains.kotlin.resolve.calls.inference.components.TypeCheckerStateForConstraintSystem` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `transformChildren(FirTransformer, Object)`                                     | `org.jetbrains.kotlin.fir.declarations.impl.FirFileImpl`                                      |

##### `I2C/C2I adapters(0xbbab)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                     | Location                                                                                 |
| ------: | ----: | ------------: | ------: | -------------------------- | ---------------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `createConstraintSystem()` | `org.jetbrains.kotlin.fir.resolve.inference.InferenceComponents$ConstraintSystemFactory` |

##### `I2C/C2I adapters(0xbbbb)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                       | Location                                                 |
| ------: | ----: | ------------: | ------: | ---------------------------- | -------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `accept(FirVisitor, Object)` | `org.jetbrains.kotlin.fir.declarations.FirTypeParameter` |

##### `I2C/C2I adapters(0xba)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                    | Location                                                   |
| ------: | ----: | ------------: | ------: | ----------------------------------------- | ---------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `doGenerate(ReifiedTypeParametersUsages)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `I2C/C2I adapters(0xbaaaab)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                      | Location                           |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------- | ---------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `substringAfter$default(String, char, String, int, Object)` | `kotlin.text.StringsKt__StringsKt` |

##### `I2C/C2I adapters(0xaa)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                | Location                                                   |
| ------: | ----: | ------------: | ------: | ------------------------------------- | ---------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `getIndexAfterLastMarker(MethodNode)` | `org.jetbrains.kotlin.codegen.inline.InlineCodegenUtilsKt` |

### Total samples

#### Regressions

Functions with the largest increase in samples collected within the function and its callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |            % | Samples | Function                                                                                                                                                        | Location                                                                                                                  |
| ------: | ----: | -----------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| +527.3% |   +58 |  0.3% → 5.1% | 11 → 69 | `invoke()`                                                                                                                                                      | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x000000f0016b5c80` |
| +100.0% |    +6 |  0.2% → 0.9% |  6 → 12 | `G1EvacuateRegionsTask::scan_roots`                                                                                                                             | `libjvm.dylib`                                                                                                            |
| +100.0% |    +5 |  0.2% → 0.7% |  5 → 10 | `G1ScanHRForRegionClosure::scan_memregion`                                                                                                                      | `libjvm.dylib`                                                                                                            |
| +100.0% |    +5 |  0.2% → 0.7% |  5 → 10 | `void G1ScanHRForRegionClosure::ChunkScanner::on_dirty_cards<G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)>` | `libjvm.dylib`                                                                                                            |
| +100.0% |    +5 |  0.2% → 0.7% |  5 → 10 | `G1ScanHRForRegionClosure::scan_heap_roots`                                                                                                                     | `libjvm.dylib`                                                                                                            |
| +100.0% |    +5 |  0.2% → 0.7% |  5 → 10 | `G1ScanHRForRegionClosure::do_heap_region`                                                                                                                      | `libjvm.dylib`                                                                                                            |
| +100.0% |    +5 |  0.2% → 0.7% |  5 → 10 | `G1RemSet::scan_heap_roots`                                                                                                                                     | `libjvm.dylib`                                                                                                            |
|  +71.4% |    +5 |  0.2% → 0.9% |  7 → 12 | `PhaseIdealLoop::build_loop_tree`                                                                                                                               | `libjvm.dylib`                                                                                                            |
|  +83.3% |    +5 |  0.2% → 0.8% |  6 → 11 | `PhaseCCP::transform`                                                                                                                                           | `libjvm.dylib`                                                                                                            |
| +166.7% |    +5 |  0.1% → 0.6% |   3 → 8 | `Node::set_req_X`                                                                                                                                               | `libjvm.dylib`                                                                                                            |
|     new |    +5 |  0.0% → 0.4% |   0 → 5 | `HeapWordImpl** HeapRegion::oops_on_memregion_iterate<G1ScanCardClosure, true>`                                                                                 | `libjvm.dylib`                                                                                                            |
|     new |    +5 |  0.0% → 0.4% |   0 → 5 | `UseCountComputer::visit`                                                                                                                                       | `libjvm.dylib`                                                                                                            |
| +400.0% |    +4 | <0.1% → 0.4% |   1 → 5 | `invoke()`                                                                                                                                                      | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase$$Lambda.0x000000f0014240f8`                               |
| +400.0% |    +4 | <0.1% → 0.4% |   1 → 5 | `invoke(Object)`                                                                                                                                                | `org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel$$Lambda.0x000000f001672fd0`                            |
| +400.0% |    +4 | <0.1% → 0.4% |   1 → 5 | `processPropertiesByName$lambda$0(FirLookupTrackerComponent, CallInfo, Ref$BooleanRef, ScopeBasedTowerLevel, TowerLevelProcessor, FirVariableSymbol)`           | `org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel`                                                       |
| +400.0% |    +4 | <0.1% → 0.4% |   1 → 5 | `UseCountComputer::block_do`                                                                                                                                    | `libjvm.dylib`                                                                                                            |
| +400.0% |    +4 | <0.1% → 0.4% |   1 → 5 | `BlockList::iterate_backward`                                                                                                                                   | `libjvm.dylib`                                                                                                            |
| +133.3% |    +4 |  0.1% → 0.5% |   3 → 7 | `LIRGenerator::do_Invoke`                                                                                                                                       | `libjvm.dylib`                                                                                                            |
|  +57.1% |    +4 |  0.2% → 0.8% |  7 → 11 | `PhaseCCP::do_transform`                                                                                                                                        | `libjvm.dylib`                                                                                                            |
| +200.0% |    +4 |  0.1% → 0.4% |   2 → 6 | `LibraryIntrinsic::generate`                                                                                                                                    | `libjvm.dylib`                                                                                                            |

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

|  Change | Delta |            % | Samples | Function                                                                                                                                              | Location                                                                                                                  |
| ------: | ----: | -----------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| +527.3% |   +58 |  0.3% → 5.1% | 11 → 69 | `invoke()`                                                                                                                                            | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x000000f0016b5c80` |
| +400.0% |    +4 | <0.1% → 0.4% |   1 → 5 | `invoke()`                                                                                                                                            | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase$$Lambda.0x000000f0014240f8`                               |
| +400.0% |    +4 | <0.1% → 0.4% |   1 → 5 | `invoke(Object)`                                                                                                                                      | `org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel$$Lambda.0x000000f001672fd0`                            |
| +400.0% |    +4 | <0.1% → 0.4% |   1 → 5 | `processPropertiesByName$lambda$0(FirLookupTrackerComponent, CallInfo, Ref$BooleanRef, ScopeBasedTowerLevel, TowerLevelProcessor, FirVariableSymbol)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel`                                                       |
|     new |    +4 |  0.0% → 0.3% |   0 → 4 | `collectDslMarkerAnnotations(ResolutionContext, Set, ConeKotlinType)`                                                                                 | `org.jetbrains.kotlin.fir.resolve.calls.stages.CheckDslScopeViolation`                                                    |
|     new |    +4 |  0.0% → 0.3% |   0 → 4 | `getDslMarkersOfImplicitValue(ResolutionContext, FirBasedSymbol, ConeKotlinType)`                                                                     | `org.jetbrains.kotlin.fir.resolve.calls.stages.CheckDslScopeViolation`                                                    |
|     new |    +4 |  0.0% → 0.3% |   0 → 4 | `check(CheckerSink, ResolutionContext, FirExpression, Candidate, FirBasedSymbol, List)`                                                               | `org.jetbrains.kotlin.fir.resolve.calls.stages.CheckDslScopeViolation`                                                    |
|     new |    +4 |  0.0% → 0.3% |   0 → 4 | `checkImpl(CheckerSink, ResolutionContext, ConeResolutionAtom, Candidate, ImplicitKind)`                                                              | `org.jetbrains.kotlin.fir.resolve.calls.stages.CheckShadowedImplicits`                                                    |
|     new |    +4 |  0.0% → 0.3% |   0 → 4 | `check(CheckerSink, ResolutionContext, Candidate, Continuation)`                                                                                      | `org.jetbrains.kotlin.fir.resolve.calls.stages.CheckShadowedImplicits`                                                    |
| +300.0% |    +3 | <0.1% → 0.3% |   1 → 4 | `acceptChildren(FirVisitor, Object)`                                                                                                                  | `org.jetbrains.kotlin.fir.expressions.impl.FirImplicitInvokeCallImpl`                                                     |
| +300.0% |    +3 | <0.1% → 0.3% |   1 → 4 | `functionTypeKind(ConeKotlinType, FirSession, boolean)`                                                                                               | `org.jetbrains.kotlin.fir.types.FunctionalTypeUtilsKt`                                                                    |
| +300.0% |    +3 | <0.1% → 0.3% |   1 → 4 | `functionTypeKind$default(ConeKotlinType, FirSession, boolean, int, Object)`                                                                          | `org.jetbrains.kotlin.fir.types.FunctionalTypeUtilsKt`                                                                    |
| +100.0% |    +3 |  0.1% → 0.4% |   3 → 6 | `visitClass(IrClass, Void)`                                                                                                                           | `org.jetbrains.kotlin.ir.visitors.IrVisitorVoid`                                                                          |
| +100.0% |    +3 |  0.1% → 0.4% |   3 → 6 | `visitClass(IrClass, Object)`                                                                                                                         | `org.jetbrains.kotlin.ir.visitors.IrVisitorVoid`                                                                          |
| +150.0% |    +3 |  0.1% → 0.4% |   2 → 5 | `visitReturn(IrReturn, Object)`                                                                                                                       | `org.jetbrains.kotlin.ir.visitors.IrTransformer`                                                                          |
|  +60.0% |    +3 |  0.2% → 0.6% |   5 → 8 | `transformChildren(IrTransformer, Object)`                                                                                                            | `org.jetbrains.kotlin.ir.expressions.IrBranch`                                                                            |
|  +60.0% |    +3 |  0.2% → 0.6% |   5 → 8 | `transformChildren(IrTransformer, Object)`                                                                                                            | `org.jetbrains.kotlin.ir.expressions.IrWhen`                                                                              |
| +300.0% |    +3 | <0.1% → 0.3% |   1 → 4 | `visitWhen(IrWhen, Object)`                                                                                                                           | `org.jetbrains.kotlin.ir.visitors.IrTransformer`                                                                          |
|     new |    +3 |  0.0% → 0.2% |   0 → 3 | `processPropertiesByName(Name, Function1)`                                                                                                            | `org.jetbrains.kotlin.fir.scopes.impl.FirNameAwareOnlyCallablesScope`                                                     |
|     new |    +3 |  0.0% → 0.2% |   0 → 3 | `toAnnotationClassLikeType(FirAnnotation, FirSession)`                                                                                                | `org.jetbrains.kotlin.fir.declarations.FirAnnotationUtilsKt`                                                              |

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

Functions with the largest decrease in samples collected within the function and its callees. Categories account for at least 1.0% of self samples on the base or the current side.

| Change |  Delta |             % |     Samples | Function                                                                                           | Location                                                |
| -----: | -----: | ------------: | ----------: | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| -58.5% | -1,271 | 65.2% → 67.2% | 2,173 → 902 | `thread_native_entry`                                                                              | `libjvm.dylib`                                          |
| -58.5% | -1,271 | 65.2% → 67.2% | 2,174 → 903 | `_pthread_start`                                                                                   | `libsystem_pthread.dylib`                               |
| -58.5% | -1,271 | 65.2% → 67.2% | 2,174 → 903 | `thread_start`                                                                                     | `libsystem_pthread.dylib`                               |
| -58.5% | -1,270 | 65.2% → 67.2% | 2,172 → 902 | `Thread::call_run`                                                                                 | `libjvm.dylib`                                          |
| -58.0% | -1,150 | 59.5% → 62.0% | 1,983 → 833 | `JavaThread::thread_main_inner`                                                                    | `libjvm.dylib`                                          |
| -57.6% | -1,131 | 58.9% → 62.0% | 1,963 → 832 | `CompileBroker::compiler_thread_loop`                                                              | `libjvm.dylib`                                          |
| -48.7% |   -773 | 47.7% → 60.7% | 1,588 → 815 | `CompileBroker::invoke_compiler_on_method`                                                         | `libjvm.dylib`                                          |
| -61.7% |   -698 | 33.9% → 32.2% | 1,131 → 433 | `run(String[])`                                                                                    | `org.jetbrains.kotlin.preloading.Preloader`             |
| -61.7% |   -698 | 33.9% → 32.2% | 1,131 → 433 | `main(String[])`                                                                                   | `org.jetbrains.kotlin.preloading.Preloader`             |
| -64.7% |   -653 | 30.3% → 26.6% | 1,010 → 357 | `main(String[])`                                                                                   | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`  |
| -64.7% |   -653 | 30.3% → 26.6% | 1,010 → 357 | `main(String[])`                                                                                   | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| -64.7% |   -653 | 30.3% → 26.6% | 1,010 → 357 | `invokeStatic(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$DMH.0x000000f001008400`    |
| -64.7% |   -653 | 30.3% → 26.6% | 1,010 → 357 | `invoke(Object, Object, Object)`                                                                   | `java.lang.invoke.LambdaForm$MH.0x000000f001009800`     |
| -64.7% |   -653 | 30.3% → 26.6% | 1,010 → 357 | `invokeExact_MT(Object, Object, Object, Object)`                                                   | `java.lang.invoke.Invokers$Holder`                      |
| -64.7% |   -653 | 30.3% → 26.6% | 1,010 → 357 | `invokeImpl(Object, Object[])`                                                                     | `jdk.internal.reflect.DirectMethodHandleAccessor`       |
| -64.7% |   -653 | 30.3% → 26.6% | 1,010 → 357 | `invoke(Object, Object[])`                                                                         | `jdk.internal.reflect.DirectMethodHandleAccessor`       |
| -64.6% |   -652 | 30.3% → 26.7% | 1,010 → 358 | `invoke(Object, Object[])`                                                                         | `java.lang.reflect.Method`                              |
| -64.6% |   -651 | 30.3% → 26.6% | 1,008 → 357 | `doMain(CLICompiler, String[])`                                                                    | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| -64.6% |   -651 | 30.2% → 26.5% | 1,007 → 356 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| -64.6% |   -650 | 30.2% → 26.5% | 1,006 → 356 | `exec(PrintStream, Services, MessageRenderer, String[])`                                           | `org.jetbrains.kotlin.cli.common.CLICompiler`           |

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

| Change | Delta |             % |     Samples | Function                                                                        | Location                                              |
| -----: | ----: | ------------: | ----------: | ------------------------------------------------------------------------------- | ----------------------------------------------------- |
| -64.7% |  -653 | 30.3% → 26.6% | 1,010 → 357 | `invokeStatic(Object, Object)`                                                  | `java.lang.invoke.LambdaForm$DMH.0x000000f001008400`  |
| -64.7% |  -653 | 30.3% → 26.6% | 1,010 → 357 | `invoke(Object, Object, Object)`                                                | `java.lang.invoke.LambdaForm$MH.0x000000f001009800`   |
| -64.7% |  -653 | 30.3% → 26.6% | 1,010 → 357 | `invokeExact_MT(Object, Object, Object, Object)`                                | `java.lang.invoke.Invokers$Holder`                    |
| -64.7% |  -653 | 30.3% → 26.6% | 1,010 → 357 | `invokeImpl(Object, Object[])`                                                  | `jdk.internal.reflect.DirectMethodHandleAccessor`     |
| -64.7% |  -653 | 30.3% → 26.6% | 1,010 → 357 | `invoke(Object, Object[])`                                                      | `jdk.internal.reflect.DirectMethodHandleAccessor`     |
| -64.6% |  -652 | 30.3% → 26.7% | 1,010 → 358 | `invoke(Object, Object[])`                                                      | `java.lang.reflect.Method`                            |
| -75.0% |  -153 |   6.1% → 3.8% |    204 → 51 | `resumeWith(Object)`                                                            | `kotlin.coroutines.jvm.internal.BaseContinuationImpl` |
| -56.6% |   -86 |   4.6% → 4.9% |    152 → 66 | `loadClass(String, boolean)`                                                    | `java.lang.ClassLoader`                               |
| -59.6% |   -84 |          4.2% |    141 → 57 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`                               |
| -58.0% |   -83 |   4.3% → 4.5% |    143 → 60 | `defineClass(String, byte[], int, int, ProtectionDomain)`                       | `java.lang.ClassLoader`                               |
| -58.6% |   -82 |   4.2% → 4.3% |    140 → 58 | `defineClass(String, byte[], int, int)`                                         | `java.lang.ClassLoader`                               |
| -34.0% |   -35 |   3.1% → 5.1% |    103 → 68 | `read(byte[])`                                                                  | `java.io.FilterInputStream`                           |
| -33.3% |   -34 |   3.1% → 5.1% |    102 → 68 | `read(byte[], int, int)`                                                        | `java.util.zip.InflaterInputStream`                   |
| -33.0% |   -34 |   3.1% → 5.1% |    103 → 69 | `read(byte[], int, int)`                                                        | `java.util.zip.ZipInputStream`                        |
| -71.1% |   -32 |   1.4% → 1.0% |     45 → 13 | `getValue()`                                                                    | `kotlin.UnsafeLazyImpl`                               |
| -62.5% |   -30 |   1.4% → 1.3% |     48 → 18 | `getValue()`                                                                    | `kotlin.SafePublicationLazyImpl`                      |
| -65.2% |   -30 |   1.4% → 1.2% |     46 → 16 | `getValue()`                                                                    | `kotlin.SynchronizedLazyImpl`                         |
| -28.9% |   -28 |   2.9% → 5.1% |     97 → 69 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)`                   | `java.util.zip.Inflater`                              |
| -28.9% |   -28 |   2.9% → 5.1% |     97 → 69 | `inflate(byte[], int, int)`                                                     | `java.util.zip.Inflater`                              |
| -73.1% |   -19 |   0.8% → 0.5% |      26 → 7 | `checkNotNullParameter(Object, String)`                                         | `kotlin.jvm.internal.Intrinsics`                      |

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

#### Callees

Callees with the largest change in contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `invoke()` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x000000f0016b5c80`)

|  Change | Delta |             % | Samples | Callee                                                                                                        | Location                                                                                       |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
|     new |   +69 | 0.0% → 100.0% |  0 → 69 | `transformNamedFunction$lambda$0$0$0(FirDeclarationsResolveTransformer, FirNamedFunction, boolean)`           | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer` |
| removed |   -11 | 100.0% → 0.0% |  11 → 0 | `doTransformRegularClassContent$lambda$0(FirDeclarationsResolveTransformer, FirRegularClass, ResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer` |

##### `G1EvacuateRegionsTask::scan_roots` (`libjvm.dylib`)

|  Change | Delta |     % | Samples | Callee                            | Location       |
| ------: | ----: | ----: | ------: | --------------------------------- | -------------- |
| +100.0% |    +5 | 83.3% |  5 → 10 | `G1RemSet::scan_heap_roots`       | `libjvm.dylib` |
| +100.0% |    +1 | 16.7% |   1 → 2 | `G1RootProcessor::evacuate_roots` | `libjvm.dylib` |

##### `G1ScanHRForRegionClosure::scan_memregion` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Callee                                                                          | Location       |
| -----: | ----: | -----------: | ------: | ------------------------------------------------------------------------------- | -------------- |
|    new |    +5 | 0.0% → 50.0% |   0 → 5 | `HeapWordImpl** HeapRegion::oops_on_memregion_iterate<G1ScanCardClosure, true>` | `libjvm.dylib` |

##### `void G1ScanHRForRegionClosure::ChunkScanner::on_dirty_cards<G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)>` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Callee                                     | Location       |
| ------: | ----: | -----: | ------: | ------------------------------------------ | -------------- |
| +100.0% |    +5 | 100.0% |  5 → 10 | `G1ScanHRForRegionClosure::scan_memregion` | `libjvm.dylib` |

##### `G1ScanHRForRegionClosure::scan_heap_roots` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Callee                                                                                                                                                          | Location       |
| ------: | ----: | -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| +100.0% |    +5 | 100.0% |  5 → 10 | `void G1ScanHRForRegionClosure::ChunkScanner::on_dirty_cards<G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)>` | `libjvm.dylib` |

##### `G1ScanHRForRegionClosure::do_heap_region` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Callee                                      | Location       |
| ------: | ----: | -----: | ------: | ------------------------------------------- | -------------- |
| +100.0% |    +5 | 100.0% |  5 → 10 | `G1ScanHRForRegionClosure::scan_heap_roots` | `libjvm.dylib` |

##### `G1RemSet::scan_heap_roots` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Callee                                     | Location       |
| ------: | ----: | -----: | ------: | ------------------------------------------ | -------------- |
| +100.0% |    +5 | 100.0% |  5 → 10 | `G1ScanHRForRegionClosure::do_heap_region` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_tree` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                 | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------------- | -------------- |
| +300.0% |    +3 | 14.3% → 33.3% |   1 → 4 | `PhaseIdealLoop::build_loop_tree_impl` | `libjvm.dylib` |
| removed |    -1 |  14.3% → 0.0% |   1 → 0 | `CProjNode::is_CFG`                    | `libjvm.dylib` |
| removed |    -1 |  14.3% → 0.0% |   1 → 0 | `RegionNode::Opcode`                   | `libjvm.dylib` |
| removed |    -1 |  14.3% → 0.0% |   1 → 0 | `IfTrueNode::Opcode`                   | `libjvm.dylib` |
|     new |    +1 |   0.0% → 8.3% |   0 → 1 | `Node::is_CFG`                         | `libjvm.dylib` |

##### `PhaseCCP::transform` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                              | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------------- | -------------- |
|  -50.0% |    -1 |  33.3% → 9.1% |   2 → 1 | `PhaseCCP::transform_once`          | `libjvm.dylib` |
|  +50.0% |    +1 | 33.3% → 27.3% |   2 → 3 | `Compile::disconnect_useless_nodes` | `libjvm.dylib` |
| removed |    -1 |  16.7% → 0.0% |   1 → 0 | `Compile::update_dead_node_list`    | `libjvm.dylib` |
|     new |    +1 |   0.0% → 9.1% |   0 → 1 | `ProjNode::bottom_type`             | `libjvm.dylib` |
|     new |    +1 |   0.0% → 9.1% |   0 → 1 | `Type::singleton`                   | `libjvm.dylib` |

##### `Node::set_req_X` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Callee               | Location       |
| -----: | ----: | -----------: | ------: | -------------------- | -------------- |
|    new |    +1 | 0.0% → 12.5% |   0 → 1 | `RegionNode::Opcode` | `libjvm.dylib` |
|    new |    +1 | 0.0% → 12.5% |   0 → 1 | `LoadNNode::Opcode`  | `libjvm.dylib` |

##### `HeapWordImpl** HeapRegion::oops_on_memregion_iterate<G1ScanCardClosure, true>` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Callee                                                                                            | Location       |
| -----: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------------------- | -------------- |
|    new |    +2 | 0.0% → 40.0% |   0 → 2 | `void OopOopIterateDispatch<G1ScanCardClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` | `libjvm.dylib` |
|    new |    +1 | 0.0% → 20.0% |   0 → 1 | `void OopOopIterateDispatch<G1ScanCardClosure>::Table::oop_oop_iterate<ObjArrayKlass, narrowOop>` | `libjvm.dylib` |

##### `invoke()` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase$$Lambda.0x000000f0014240f8`)

|  Change | Delta |             % | Samples | Callee                                                                                         | Location                                                         |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
|     new |    +5 | 0.0% → 100.0% |   0 → 5 | `prepareJvmSessions$lambda$1(Name, List, CompilerConfiguration, FirJvmSessionFactory$Context)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `createEnvironmentAndSources$lambda$0(CompilerConfiguration, VfsBasedProjectEnvironment)`      | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase` |

##### `invoke(Object)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel$$Lambda.0x000000f001672fd0`)

|  Change | Delta |             % | Samples | Callee                                                                                                                                                | Location                                                            |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
|     new |    +5 | 0.0% → 100.0% |   0 → 5 | `processPropertiesByName$lambda$0(FirLookupTrackerComponent, CallInfo, Ref$BooleanRef, ScopeBasedTowerLevel, TowerLevelProcessor, FirVariableSymbol)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `processObjectsByName$lambda$0(Ref$BooleanRef, TowerLevelProcessor, ScopeBasedTowerLevel, FirClassifierSymbol)`                                       | `org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel` |

##### `processPropertiesByName$lambda$0(FirLookupTrackerComponent, CallInfo, Ref$BooleanRef, ScopeBasedTowerLevel, TowerLevelProcessor, FirVariableSymbol)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel`)

|  Change | Delta |      % | Samples | Callee                                                                       | Location                                                            |
| ------: | ----: | -----: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| +400.0% |    +4 | 100.0% |   1 → 5 | `consumeCallableCandidate(FirCallableSymbol, CallInfo, TowerLevelProcessor)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel` |

##### `UseCountComputer::block_do` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Callee                         | Location       |
| -----: | ----: | -----------: | ------: | ------------------------------ | -------------- |
|    new |    +2 | 0.0% → 40.0% |   0 → 2 | `UseCountComputer::visit`      | `libjvm.dylib` |
|    new |    +1 | 0.0% → 20.0% |   0 → 1 | `Invoke::input_values_do`      | `libjvm.dylib` |
|    new |    +1 | 0.0% → 20.0% |   0 → 1 | `ProfileCall::input_values_do` | `libjvm.dylib` |
|    new |    +1 | 0.0% → 20.0% |   0 → 1 | `ValueStack::values_do`        | `libjvm.dylib` |

##### `BlockList::iterate_backward` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Callee                       | Location       |
| ------: | ----: | -----: | ------: | ---------------------------- | -------------- |
| +400.0% |    +4 | 100.0% |   1 → 5 | `UseCountComputer::block_do` | `libjvm.dylib` |

##### `LIRGenerator::do_Invoke` (`libjvm.dylib`)

| Change | Delta |              % | Samples | Callee                                 | Location       |
| -----: | ----: | -------------: | ------: | -------------------------------------- | -------------- |
|    new |    +2 |   0.0% → 28.6% |   0 → 2 | `LIRGenerator::invoke_visit_arguments` | `libjvm.dylib` |
| -33.3% |    -1 | 100.0% → 28.6% |   3 → 2 | `LIRGenerator::state_for`              | `libjvm.dylib` |
|    new |    +1 |   0.0% → 14.3% |   0 → 1 | `LIRGenerator::rlock_result`           | `libjvm.dylib` |
|    new |    +1 |   0.0% → 14.3% |   0 → 1 | `FrameMap::java_calling_convention`    | `libjvm.dylib` |

##### `PhaseCCP::do_transform` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                     | Location       |
| ------: | ----: | -------------: | ------: | -------------------------- | -------------- |
|  +83.3% |    +5 | 85.7% → 100.0% |  6 → 11 | `PhaseCCP::transform`      | `libjvm.dylib` |
| removed |    -1 |   14.3% → 0.0% |   1 → 0 | `PhaseCCP::transform_once` | `libjvm.dylib` |

##### `LibraryIntrinsic::generate` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                            | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------------- | -------------- |
|     new |    +4 |  0.0% → 66.7% |   0 → 4 | `LibraryCallKit::try_to_inline`                   | `libjvm.dylib` |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `LibraryCallKit::inline_array_copyOf`             | `libjvm.dylib` |
|     new |    +1 |  0.0% → 16.7% |   0 → 1 | `LibraryCallKit::inline_preconditions_checkIndex` | `libjvm.dylib` |
|     new |    +1 |  0.0% → 16.7% |   0 → 1 | `LibraryCallKit::inline_string_indexOfChar`       | `libjvm.dylib` |

##### `LibraryCallKit::try_to_inline` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Callee                                   | Location       |
| -----: | ----: | -----------: | ------: | ---------------------------------------- | -------------- |
|    new |    +2 | 0.0% → 50.0% |   0 → 2 | `LibraryCallKit::inline_native_clone`    | `libjvm.dylib` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `LibraryCallKit::inline_string_equals`   | `libjvm.dylib` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `LibraryCallKit::inline_native_getClass` | `libjvm.dylib` |

##### `CodeCache::next_blob` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                  | Location       |
| -----: | ----: | ------------: | ------: | ----------------------- | -------------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `CodeHeap::block_start` | `libjvm.dylib` |

##### `CodeCacheUnloadingTask::claim_nmethods` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                 | Location       |
| -----: | ----: | ------------: | ------: | ---------------------- | -------------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `CodeCache::next_blob` | `libjvm.dylib` |

##### `ClassLoader::load_class` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Callee                                        | Location       |
| -----: | ----: | -----------: | ------: | --------------------------------------------- | -------------- |
|    new |    +3 | 0.0% → 75.0% |   0 → 3 | `ClassPathImageEntry::open_stream_for_loader` | `libjvm.dylib` |
|    new |    +2 | 0.0% → 50.0% |   0 → 2 | `KlassFactory::create_from_stream`            | `libjvm.dylib` |

##### `NonSafepointEmitter::emit_non_safepoint` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                                     | Location       |
| ------: | ----: | -------------: | ------: | ------------------------------------------ | -------------- |
| +100.0% |    +2 | 100.0% → 80.0% |   2 → 4 | `DebugInformationRecorder::describe_scope` | `libjvm.dylib` |
|     new |    +1 |   0.0% → 20.0% |   0 → 1 | `JVMState::of_depth`                       | `libjvm.dylib` |

##### `IR::compute_use_counts` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                                  | Location       |
| ------: | ----: | -------------: | ------: | --------------------------------------- | -------------- |
| +400.0% |    +4 | 50.0% → 100.0% |   1 → 5 | `BlockList::iterate_backward`           | `libjvm.dylib` |
| removed |    -1 |   50.0% → 0.0% |   1 → 0 | `ValueStack::pin_stack_for_linear_scan` | `libjvm.dylib` |

##### `OopRecorder::find_index` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                                       | Location       |
| ------: | ----: | -------------: | ------: | -------------------------------------------- | -------------- |
| +100.0% |    +2 | 100.0% → 80.0% |   2 → 4 | `ValueRecorder<Metadata*>::maybe_find_index` | `libjvm.dylib` |

##### `CodeHeap::allocate` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                      | Location       |
| ------: | ----: | -------------: | ------: | --------------------------- | -------------- |
| +200.0% |    +2 | 100.0% → 75.0% |   1 → 3 | `CodeHeap::search_freelist` | `libjvm.dylib` |

##### `PhaseChaitin::yank_if_dead_recurse` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Callee                               | Location       |
| -----: | ----: | -----------: | ------: | ------------------------------------ | -------------- |
|    new |    +2 | 0.0% → 50.0% |   0 → 2 | `PhaseChaitin::yank`                 | `libjvm.dylib` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `PhaseChaitin::yank_if_dead_recurse` | `libjvm.dylib` |

##### `Matcher::specialize_generic_vector_operands` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Callee                           | Location       |
| -----: | ----: | -----------: | ------: | -------------------------------- | -------------- |
|    new |    +2 | 0.0% → 50.0% |   0 → 2 | `Compile::identify_useful_nodes` | `libjvm.dylib` |

##### `TypeInstPtr::xmeet_helper` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                                   | Location        |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------- | --------------- |
|     new |    +2 |  0.0% → 33.3% |   0 → 2 | `TypeInterfaces::union_with`                             | `libjvm.dylib`  |
| removed |    -1 |  33.3% → 0.0% |   1 → 0 | `GrowableArrayResourceAllocator::allocate`               | `libjvm.dylib`  |
|  -50.0% |    -1 | 66.7% → 16.7% |   2 → 1 | `TypePtr::MeetResult TypePtr::meet_instptr<TypeInstPtr>` | `libjvm.dylib`  |
|     new |    +1 |  0.0% → 16.7% |   0 → 1 | `TypeInterfaces::intersection_with`                      | `libjvm.dylib`  |
|     new |    +1 |  0.0% → 16.7% |   0 → 1 | `tlv_get_addr`                                           | `libdyld.dylib` |

##### `PhaseIdealLoop::split_if_with_blocks_post` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                    | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------------------- | -------------- |
| +100.0% |    +2 | 50.0% → 57.1% |   2 → 4 | `PhaseIdealLoop::try_sink_out_of_loop`    | `libjvm.dylib` |
|     new |    +1 |  0.0% → 14.3% |   0 → 1 | `PhaseIdealLoop::try_merge_identical_ifs` | `libjvm.dylib` |
|     new |    +1 |  0.0% → 14.3% |   0 → 1 | `IfFalseNode::Opcode`                     | `libjvm.dylib` |

##### `PhaseIterGVN::add_users_to_worklist` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Callee                                 | Location       |
| -----: | ----: | -----------: | ------: | -------------------------------------- | -------------- |
|    new |    +1 | 0.0% → 16.7% |   0 → 1 | `AllocateNode::initialization`         | `libjvm.dylib` |
|    new |    +1 | 0.0% → 16.7% |   0 → 1 | `BarrierSetC2::has_load_barrier_nodes` | `libjvm.dylib` |

##### `Node::replace_edge` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee            | Location       |
| ------: | ----: | -------------: | ------: | ----------------- | -------------- |
| +250.0% |    +5 | 50.0% → 100.0% |   2 → 7 | `Node::set_req_X` | `libjvm.dylib` |

##### `PhaseChaitin::Select` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                               | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------ | -------------- |
| +100.0% |    +1 | 20.0% → 28.6% |   1 → 2 | `IndexSetIterator::advance_and_next` | `libjvm.dylib` |
|  -50.0% |    -1 | 40.0% → 14.3% |   2 → 1 | `PhaseIFG::re_insert`                | `libjvm.dylib` |

##### `PhaseIFG::SquareUp` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                               | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------ | -------------- |
| +100.0% |    +1 | 33.3% → 40.0% |   1 → 2 | `IndexSetIterator::advance_and_next` | `libjvm.dylib` |

##### `PhiNode::Value` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                      | Location        |
| ------: | ----: | ------------: | ------: | --------------------------- | --------------- |
| removed |    -1 |  25.0% → 0.0% |   1 → 0 | `tlv_get_addr`              | `libdyld.dylib` |
| +100.0% |    +1 | 25.0% → 33.3% |   1 → 2 | `Type::meet_helper`         | `libjvm.dylib`  |
| removed |    -1 |  25.0% → 0.0% |   1 → 0 | `Type::cleanup_speculative` | `libjvm.dylib`  |
|     new |    +1 |  0.0% → 16.7% |   0 → 1 | `TypeInt::filter_helper`    | `libjvm.dylib`  |
|     new |    +1 |  0.0% → 16.7% |   0 → 1 | `Type::hashcons`            | `libjvm.dylib`  |

##### `PhaseIdealLoop::try_sink_out_of_loop` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Callee                                         | Location       |
| -----: | ----: | -----------: | ------: | ---------------------------------------------- | -------------- |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `PhaseIdealLoop::ctrl_of_all_uses_out_of_loop` | `libjvm.dylib` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `PhaseIdealLoop::get_loop`                     | `libjvm.dylib` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `PhaseIdealLoop::get_ctrl`                     | `libjvm.dylib` |

##### `collectDslMarkerAnnotations(ResolutionContext, Set, ConeKotlinType)` (`org.jetbrains.kotlin.fir.resolve.calls.stages.CheckDslScopeViolation`)

| Change | Delta |            % | Samples | Callee                                                            | Location                                                               |
| -----: | ----: | -----------: | ------: | ----------------------------------------------------------------- | ---------------------------------------------------------------------- |
|    new |    +3 | 0.0% → 75.0% |   0 → 3 | `collectDslMarkerAnnotations(ResolutionContext, Set, Collection)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.CheckDslScopeViolation` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `getAbbreviatedTypeOrSelf(ConeKotlinType)`                        | `org.jetbrains.kotlin.fir.types.AbbreviatedTypeAttributeKt`            |

##### `getDslMarkersOfImplicitValue(ResolutionContext, FirBasedSymbol, ConeKotlinType)` (`org.jetbrains.kotlin.fir.resolve.calls.stages.CheckDslScopeViolation`)

| Change | Delta |             % | Samples | Callee                                                                | Location                                                               |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `collectDslMarkerAnnotations(ResolutionContext, Set, ConeKotlinType)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.CheckDslScopeViolation` |

##### `check(CheckerSink, ResolutionContext, FirExpression, Candidate, FirBasedSymbol, List)` (`org.jetbrains.kotlin.fir.resolve.calls.stages.CheckDslScopeViolation`)

| Change | Delta |             % | Samples | Callee                                                                            | Location                                                               |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `getDslMarkersOfImplicitValue(ResolutionContext, FirBasedSymbol, ConeKotlinType)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.CheckDslScopeViolation` |

##### `checkImpl(CheckerSink, ResolutionContext, ConeResolutionAtom, Candidate, ImplicitKind)` (`org.jetbrains.kotlin.fir.resolve.calls.stages.CheckShadowedImplicits`)

| Change | Delta |             % | Samples | Callee                                                                                  | Location                                                               |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `check(CheckerSink, ResolutionContext, FirExpression, Candidate, FirBasedSymbol, List)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.CheckDslScopeViolation` |

##### `check(CheckerSink, ResolutionContext, Candidate, Continuation)` (`org.jetbrains.kotlin.fir.resolve.calls.stages.CheckShadowedImplicits`)

| Change | Delta |             % | Samples | Callee                                                                                   | Location                                                               |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `checkImpl(CheckerSink, ResolutionContext, ConeResolutionAtom, Candidate, ImplicitKind)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.CheckShadowedImplicits` |

##### `acceptChildren(FirVisitor, Object)` (`org.jetbrains.kotlin.fir.expressions.impl.FirImplicitInvokeCallImpl`)

|  Change | Delta |              % | Samples | Callee                       | Location                                                           |
| ------: | ----: | -------------: | ------: | ---------------------------- | ------------------------------------------------------------------ |
|     new |    +2 |   0.0% → 50.0% |   0 → 2 | `accept(FirVisitor, Object)` | `org.jetbrains.kotlin.fir.expressions.FirArgumentList`             |
| +100.0% |    +1 | 100.0% → 50.0% |   1 → 2 | `accept(FirVisitor, Object)` | `org.jetbrains.kotlin.fir.expressions.FirPropertyAccessExpression` |

##### `functionTypeKind(ConeKotlinType, FirSession, boolean)` (`org.jetbrains.kotlin.fir.types.FunctionalTypeUtilsKt`)

|  Change | Delta |              % | Samples | Callee                                                 | Location                                               |
| ------: | ----: | -------------: | ------: | ------------------------------------------------------ | ------------------------------------------------------ |
| +200.0% |    +2 | 100.0% → 75.0% |   1 → 3 | `functionTypeKind(ConeRigidType, FirSession, boolean)` | `org.jetbrains.kotlin.fir.types.FunctionalTypeUtilsKt` |
|     new |    +1 |   0.0% → 25.0% |   0 → 1 | `checkNotNullParameter(Object, String)`                | `kotlin.jvm.internal.Intrinsics`                       |

##### `functionTypeKind$default(ConeKotlinType, FirSession, boolean, int, Object)` (`org.jetbrains.kotlin.fir.types.FunctionalTypeUtilsKt`)

|  Change | Delta |      % | Samples | Callee                                                  | Location                                               |
| ------: | ----: | -----: | ------: | ------------------------------------------------------- | ------------------------------------------------------ |
| +300.0% |    +3 | 100.0% |   1 → 4 | `functionTypeKind(ConeKotlinType, FirSession, boolean)` | `org.jetbrains.kotlin.fir.types.FunctionalTypeUtilsKt` |

##### `visitClass(IrClass, Void)` (`org.jetbrains.kotlin.ir.visitors.IrVisitorVoid`)

|  Change | Delta |             % | Samples | Callee                | Location                                                            |
| ------: | ----: | ------------: | ------: | --------------------- | ------------------------------------------------------------------- |
| +200.0% |    +2 | 33.3% → 50.0% |   1 → 3 | `visitClass(IrClass)` | `org.jetbrains.kotlin.backend.common.ClassLoweringVisitor`          |
|     new |    +1 |  0.0% → 16.7% |   0 → 1 | `visitClass(IrClass)` | `org.jetbrains.kotlin.backend.jvm.lower.RepeatedAnnotationLowering` |

##### `visitClass(IrClass, Object)` (`org.jetbrains.kotlin.ir.visitors.IrVisitorVoid`)

|  Change | Delta |      % | Samples | Callee                      | Location                                         |
| ------: | ----: | -----: | ------: | --------------------------- | ------------------------------------------------ |
| +100.0% |    +3 | 100.0% |   3 → 6 | `visitClass(IrClass, Void)` | `org.jetbrains.kotlin.ir.visitors.IrVisitorVoid` |

##### `visitReturn(IrReturn, Object)` (`org.jetbrains.kotlin.ir.visitors.IrTransformer`)

|  Change | Delta |      % | Samples | Callee                                  | Location                                         |
| ------: | ----: | -----: | ------: | --------------------------------------- | ------------------------------------------------ |
| +150.0% |    +3 | 100.0% |   2 → 5 | `visitExpression(IrExpression, Object)` | `org.jetbrains.kotlin.ir.visitors.IrTransformer` |
| +150.0% |    +3 | 100.0% |   2 → 5 | `visitReturn(IrReturn, Object)`         | `org.jetbrains.kotlin.ir.visitors.IrTransformer` |

##### `transformChildren(IrTransformer, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBranch`)

| Change | Delta |      % | Samples | Callee                             | Location                                           |
| -----: | ----: | -----: | ------: | ---------------------------------- | -------------------------------------------------- |
| +60.0% |    +3 | 100.0% |   5 → 8 | `transform(IrTransformer, Object)` | `org.jetbrains.kotlin.ir.expressions.IrExpression` |

##### `transformChildren(IrTransformer, Object)` (`org.jetbrains.kotlin.ir.expressions.IrWhen`)

| Change | Delta |      % | Samples | Callee                                          | Location                                   |
| -----: | ----: | -----: | ------: | ----------------------------------------------- | ------------------------------------------ |
| +60.0% |    +3 | 100.0% |   5 → 8 | `transformInPlace(List, IrTransformer, Object)` | `org.jetbrains.kotlin.ir.util.TransformKt` |

##### `visitWhen(IrWhen, Object)` (`org.jetbrains.kotlin.ir.visitors.IrTransformer`)

|  Change | Delta |      % | Samples | Callee                                  | Location                                         |
| ------: | ----: | -----: | ------: | --------------------------------------- | ------------------------------------------------ |
| +300.0% |    +3 | 100.0% |   1 → 4 | `visitExpression(IrExpression, Object)` | `org.jetbrains.kotlin.ir.visitors.IrTransformer` |
| +300.0% |    +3 | 100.0% |   1 → 4 | `visitWhen(IrWhen, Object)`             | `org.jetbrains.kotlin.ir.visitors.IrTransformer` |

##### `processPropertiesByName(Name, Function1)` (`org.jetbrains.kotlin.fir.scopes.impl.FirNameAwareOnlyCallablesScope`)

| Change | Delta |            % | Samples | Callee                                     | Location                                                               |
| -----: | ----: | -----------: | ------: | ------------------------------------------ | ---------------------------------------------------------------------- |
|    new |    +2 | 0.0% → 66.7% |   0 → 2 | `processPropertiesByName(Name, Function1)` | `org.jetbrains.kotlin.fir.scopes.impl.FirStaticScope`                  |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `processPropertiesByName(Name, Function1)` | `org.jetbrains.kotlin.fir.java.scopes.JavaClassStaticEnhancementScope` |

##### `toAnnotationClassLikeType(FirAnnotation, FirSession)` (`org.jetbrains.kotlin.fir.declarations.FirAnnotationUtilsKt`)

| Change | Delta |            % | Samples | Callee                                                                             | Location                                                |
| -----: | ----: | -----------: | ------: | ---------------------------------------------------------------------------------- | ------------------------------------------------------- |
|    new |    +2 | 0.0% → 66.7% |   0 → 2 | `fullyExpandedType$default(ConeClassLikeType, FirSession, Function1, int, Object)` | `org.jetbrains.kotlin.fir.resolve.TypeExpansionUtilsKt` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `getConeType(FirTypeRef)`                                                          | `org.jetbrains.kotlin.fir.types.FirTypeUtilsKt`         |

##### `<init>(int, Object, Class, String, String, int)` (`kotlin.jvm.internal.FunctionReference`)

| Change | Delta |            % | Samples | Callee                                           | Location                                |
| -----: | ----: | -----------: | ------: | ------------------------------------------------ | --------------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `<init>(Object, Class, String, String, boolean)` | `kotlin.jvm.internal.CallableReference` |

##### `doAdvance()` (`java.util.stream.StreamSpliterators$AbstractWrappingSpliterator`)

| Change | Delta |            % | Samples | Callee                        | Location                                                          |
| -----: | ----: | -----------: | ------: | ----------------------------- | ----------------------------------------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `initPartialTraversalState()` | `java.util.stream.StreamSpliterators$WrappingSpliterator`         |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `fillBuffer()`                | `java.util.stream.StreamSpliterators$AbstractWrappingSpliterator` |

##### `tryAdvance(Consumer)` (`java.util.stream.StreamSpliterators$WrappingSpliterator`)

| Change | Delta |             % | Samples | Callee        | Location                                                          |
| -----: | ----: | ------------: | ------: | ------------- | ----------------------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `doAdvance()` | `java.util.stream.StreamSpliterators$AbstractWrappingSpliterator` |

##### `hasNext()` (`java.util.Spliterators$1Adapter`)

| Change | Delta |             % | Samples | Callee                 | Location                                                  |
| -----: | ----: | ------------: | ------: | ---------------------- | --------------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `tryAdvance(Consumer)` | `java.util.stream.StreamSpliterators$WrappingSpliterator` |

##### `hasNext()` (`jdk.internal.jrtfs.JrtDirectoryStream$1`)

| Change | Delta |             % | Samples | Callee      | Location                          |
| -----: | ----: | ------------: | ------: | ----------- | --------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `hasNext()` | `java.util.Spliterators$1Adapter` |

##### `getQualifiedName()` (`kotlin.reflect.jvm.internal.KClassImpl$Data`)

| Change | Delta |            % | Samples | Callee                     | Location                                            |
| -----: | ----: | -----------: | ------: | -------------------------- | --------------------------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `getValue(Object, Object)` | `kotlin.reflect.jvm.internal.ReflectProperties$Val` |

##### `<init>(int)` (`jdk.internal.org.objectweb.asm.ByteVector`)

| Change | Delta |            % | Samples | Callee        | Location    |
| -----: | ----: | -----------: | ------: | ------------- | ----------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `zero_blocks` | `<unknown>` |

##### `makeSpecializedTarget(MethodHandle, boolean, boolean)` (`jdk.internal.reflect.MethodHandleAccessorFactory`)

| Change | Delta |            % | Samples | Callee                                      | Location                         |
| -----: | ----: | -----------: | ------: | ------------------------------------------- | -------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `dropArguments(MethodHandle, int, Class[])` | `java.lang.invoke.MethodHandles` |

##### `readMessage(Parser, ExtensionRegistryLite)` (`kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream`)

| Change | Delta |            % | Samples | Callee                                                      | Location                                                              |
| -----: | ----: | -----------: | ------: | ----------------------------------------------------------- | --------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` | `kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$ValueParameter$1` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` | `kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Property$1`       |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` | `kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Type$Argument$1`  |

##### `<init>(CodedInputStream, ExtensionRegistryLite)` (`kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Class`)

|  Change | Delta |      % | Samples | Callee                                       | Location                                                     |
| ------: | ----: | -----: | ------: | -------------------------------------------- | ------------------------------------------------------------ |
| +100.0% |    +1 | 100.0% |   1 → 2 | `readMessage(Parser, ExtensionRegistryLite)` | `kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream` |

##### `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` (`kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Class`)

|  Change | Delta |      % | Samples | Callee                                            | Location                                                   |
| ------: | ----: | -----: | ------: | ------------------------------------------------- | ---------------------------------------------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Class` |

##### `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Class$1`)

|  Change | Delta |      % | Samples | Callee                                                        | Location                                                     |
| ------: | ----: | -----: | ------: | ------------------------------------------------------------- | ------------------------------------------------------------ |
| +100.0% |    +1 | 100.0% |   1 → 2 | `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` | `kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Class`   |
| +100.0% |    +1 | 100.0% |   1 → 2 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)`   | `kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Class$1` |

##### `parsePartialFrom(InputStream, ExtensionRegistryLite)` (`kotlin.reflect.jvm.internal.impl.protobuf.AbstractParser`)

| Change | Delta |            % | Samples | Callee                                                      | Location                                                     |
| -----: | ----: | -----------: | ------: | ----------------------------------------------------------- | ------------------------------------------------------------ |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` | `kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Class$1` |

##### `forName(String, Class)` (`java.lang.Class`)

|  Change | Delta |      % | Samples | Callee                                          | Location          |
| ------: | ----: | -----: | ------: | ----------------------------------------------- | ----------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `forName0(String, boolean, ClassLoader, Class)` | `java.lang.Class` |

##### `forName(String)` (`java.lang.Class`)

|  Change | Delta |      % | Samples | Callee                   | Location          |
| ------: | ----: | -----: | ------: | ------------------------ | ----------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `forName(String, Class)` | `java.lang.Class` |

##### `getBytes()` (`jdk.internal.loader.URLClassPath$JarLoader$2`)

|  Change | Delta |      % | Samples | Callee       | Location                       |
| ------: | ----: | -----: | ------: | ------------ | ------------------------------ |
| +100.0% |    +1 | 100.0% |   1 → 2 | `getBytes()` | `jdk.internal.loader.Resource` |

##### `readAllBytes(Path)` (`java.nio.file.Files`)

| Change | Delta |            % | Samples | Callee                                | Location                     |
| -----: | ----: | -----------: | ------: | ------------------------------------- | ---------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `newInputStream(ReadableByteChannel)` | `java.nio.channels.Channels` |

##### `getQualifiedName()` (`kotlin.reflect.jvm.internal.KClassImpl`)

|  Change | Delta |             % | Samples | Callee               | Location                                      |
| ------: | ----: | ------------: | ------: | -------------------- | --------------------------------------------- |
|     new |    +2 | 0.0% → 100.0% |   0 → 2 | `getQualifiedName()` | `kotlin.reflect.jvm.internal.KClassImpl$Data` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `getValue()`         | `kotlin.SafePublicationLazyImpl`              |

##### `makeAllocator(MemberName)` (`java.lang.invoke.DirectMethodHandle`)

| Change | Delta |            % | Samples | Callee                    | Location                      |
| -----: | ----: | -----------: | ------: | ------------------------- | ----------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `changeReturnType(Class)` | `java.lang.invoke.MethodType` |

##### `thread_native_entry` (`libjvm.dylib`)

|  Change |  Delta |            % |     Samples | Callee                                  | Location       |
| ------: | -----: | -----------: | ----------: | --------------------------------------- | -------------- |
|  -58.5% | -1,270 |       100.0% | 2,172 → 902 | `Thread::call_run`                      | `libjvm.dylib` |
| removed |     -1 | <0.1% → 0.0% |       1 → 0 | `Monitor::wait_without_safepoint_check` | `libjvm.dylib` |

##### `_pthread_start` (`libsystem_pthread.dylib`)

| Change |  Delta |              % |     Samples | Callee                | Location       |
| -----: | -----: | -------------: | ----------: | --------------------- | -------------- |
| -58.5% | -1,271 | 100.0% → 99.9% | 2,173 → 902 | `thread_native_entry` | `libjvm.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

| Change |  Delta |      % |     Samples | Callee           | Location                  |
| -----: | -----: | -----: | ----------: | ---------------- | ------------------------- |
| -58.5% | -1,271 | 100.0% | 2,174 → 903 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

| Change |  Delta |             % |     Samples | Callee                          | Location       |
| -----: | -----: | ------------: | ----------: | ------------------------------- | -------------- |
| -58.0% | -1,150 | 91.3% → 92.4% | 1,983 → 833 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
| -52.9% |    -64 |   5.6% → 6.3% |    121 → 57 | `WorkerThread::run`             | `libjvm.dylib` |
| -87.5% |    -21 |   1.1% → 0.3% |      24 → 3 | `ConcurrentGCThread::run`       | `libjvm.dylib` |
| -78.3% |    -18 |   1.1% → 0.6% |      23 → 5 | `WatcherThread::run`            | `libjvm.dylib` |
| -81.0% |    -17 |   1.0% → 0.4% |      21 → 4 | `VMThread::run`                 | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|  Change |  Delta |             % |     Samples | Callee                                                   | Location       |
| ------: | -----: | ------------: | ----------: | -------------------------------------------------------- | -------------- |
|  -57.6% | -1,131 | 99.0% → 99.9% | 1,963 → 832 | `CompileBroker::compiler_thread_loop`                    | `libjvm.dylib` |
|  -90.9% |    -10 |   0.6% → 0.1% |      11 → 1 | `ServiceThread::service_thread_entry`                    | `libjvm.dylib` |
| removed |     -5 |   0.3% → 0.0% |       5 → 0 | `MonitorDeflationThread::monitor_deflation_thread_entry` | `libjvm.dylib` |
| removed |     -4 |   0.2% → 0.0% |       4 → 0 | `JvmtiAgentThread::start_function_wrapper`               | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|  Change | Delta |             % |     Samples | Callee                                         | Location       |
| ------: | ----: | ------------: | ----------: | ---------------------------------------------- | -------------- |
|  -48.7% |  -773 | 80.9% → 98.0% | 1,588 → 815 | `CompileBroker::invoke_compiler_on_method`     | `libjvm.dylib` |
|  -95.4% |  -350 |  18.7% → 2.0% |    367 → 17 | `CompileQueue::get`                            | `libjvm.dylib` |
| removed |    -3 |   0.2% → 0.0% |       3 → 0 | `CompileBroker::possibly_add_compiler_threads` | `libjvm.dylib` |
| removed |    -1 |   0.1% → 0.0% |       1 → 0 | `ciEnv::cache_dtrace_flags`                    | `libjvm.dylib` |
| removed |    -1 |   0.1% → 0.0% |       1 → 0 | `ciEnv::ciEnv`                                 | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

| Change | Delta |             % |     Samples | Callee                          | Location       |
| -----: | ----: | ------------: | ----------: | ------------------------------- | -------------- |
| -46.3% |  -482 | 65.6% → 68.7% | 1,042 → 560 | `C2Compiler::compile_method`    | `libjvm.dylib` |
| -49.9% |  -244 | 30.8% → 30.1% |   489 → 245 | `Compiler::compile_method`      | `libjvm.dylib` |
| -90.0% |   -18 |   1.3% → 0.2% |      20 → 2 | `ciEnv::get_method_from_handle` | `libjvm.dylib` |
| -78.9% |   -15 |   1.2% → 0.5% |      19 → 4 | `ciEnv::ciEnv`                  | `libjvm.dylib` |
| -75.0% |    -6 |   0.5% → 0.2% |       8 → 2 | `CompilationLog::log_compile`   | `libjvm.dylib` |

##### `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

|  Change | Delta |             % |     Samples | Callee                                                                       | Location                                               |
| ------: | ----: | ------------: | ----------: | ---------------------------------------------------------------------------- | ------------------------------------------------------ |
|  -64.7% |  -653 | 89.3% → 82.4% | 1,010 → 357 | `invoke(Object, Object[])`                                                   | `java.lang.reflect.Method`                             |
|  -37.5% |   -45 | 10.6% → 17.3% |    120 → 75 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |
| removed |    -1 |   0.1% → 0.0% |       1 → 0 | `linkMethodHandleConstant(Class, int, Class, String, Object)`                | `java.lang.invoke.MethodHandleNatives`                 |
|     new |    +1 |   0.0% → 0.2% |       0 → 1 | `stream()`                                                                   | `java.util.Collection`                                 |

##### `main(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

| Change | Delta |      % |     Samples | Callee          | Location                                    |
| -----: | ----: | -----: | ----------: | --------------- | ------------------------------------------- |
| -61.7% |  -698 | 100.0% | 1,131 → 433 | `run(String[])` | `org.jetbrains.kotlin.preloading.Preloader` |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`)

|  Change | Delta |              % |     Samples | Callee                          | Location                                                |
| ------: | ----: | -------------: | ----------: | ------------------------------- | ------------------------------------------------------- |
|  -64.6% |  -651 | 99.8% → 100.0% | 1,008 → 357 | `doMain(CLICompiler, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| removed |    -2 |    0.2% → 0.0% |       2 → 0 | `<init>()`                      | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

| Change | Delta |      % |     Samples | Callee           | Location                                               |
| -----: | ----: | -----: | ----------: | ---------------- | ------------------------------------------------------ |
| -64.7% |  -653 | 100.0% | 1,010 → 357 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000f001008400`)

| Change | Delta |      % |     Samples | Callee           | Location                                     |
| -----: | ----: | -----: | ----------: | ---------------- | -------------------------------------------- |
| -64.7% |  -653 | 100.0% | 1,010 → 357 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f001009800`)

| Change | Delta |      % |     Samples | Callee                         | Location                                             |
| -----: | ----: | -----: | ----------: | ------------------------------ | ---------------------------------------------------- |
| -64.7% |  -653 | 100.0% | 1,010 → 357 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000f001008400` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|  Change | Delta |           % |     Samples | Callee                           | Location                                            |
| ------: | ----: | ----------: | ----------: | -------------------------------- | --------------------------------------------------- |
|  -64.7% |  -653 |      100.0% | 1,010 → 357 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f001009800` |
| removed |    -1 | 0.1% → 0.0% |       1 → 0 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000700103b800` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change | Delta |      % |     Samples | Callee                                           | Location                           |
| -----: | ----: | -----: | ----------: | ------------------------------------------------ | ---------------------------------- |
| -64.7% |  -653 | 100.0% | 1,010 → 357 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change | Delta |      % |     Samples | Callee                         | Location                                          |
| -----: | ----: | -----: | ----------: | ------------------------------ | ------------------------------------------------- |
| -64.7% |  -653 | 100.0% | 1,010 → 357 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

| Change | Delta |              % |     Samples | Callee                     | Location                                          |
| -----: | ----: | -------------: | ----------: | -------------------------- | ------------------------------------------------- |
| -64.7% |  -653 | 100.0% → 99.7% | 1,010 → 357 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `doMain(CLICompiler, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

| Change | Delta |             % |     Samples | Callee                                                                                             | Location                                                |
| -----: | ----: | ------------: | ----------: | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| -64.6% |  -651 | 99.9% → 99.7% | 1,007 → 356 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|  Change | Delta |              % |     Samples | Callee                                                 | Location                                                |
| ------: | ----: | -------------: | ----------: | ------------------------------------------------------ | ------------------------------------------------------- |
|  -64.6% |  -650 | 99.9% → 100.0% | 1,006 → 356 | `doMainNoExit(CLICompiler, String[], MessageRenderer)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| removed |    -1 |    0.1% → 0.0% |       1 → 0 | `defaultMessageRenderer()`                             | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `exec(PrintStream, Services, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

| Change | Delta |             % |   Samples | Callee                                                                               | Location                                                                |
| -----: | ----: | ------------: | --------: | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------- |
| -64.9% |  -647 | 99.1% → 98.3% | 997 → 350 | `exec(MessageCollector, Services, CommonCompilerArguments)`                          | `org.jetbrains.kotlin.cli.common.CLICompiler`                           |
| -37.5% |    -3 |   0.8% → 1.4% |     8 → 5 | `parseCommandLineArguments$default(List, CommonToolArguments, boolean, int, Object)` | `org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt` |

##### `PlatformMonitor::wait` (`libjvm.dylib`)

|  Change | Delta |             % |  Samples | Callee                    | Location                  |
| ------: | ----: | ------------: | -------: | ------------------------- | ------------------------- |
|  -95.3% |  -427 | 97.2% → 87.5% | 448 → 21 | `__psynch_cvwait`         | `libsystem_kernel.dylib`  |
|  -81.8% |    -9 |   2.4% → 8.3% |   11 → 2 | `_pthread_cond_wait`      | `libsystem_pthread.dylib` |
| removed |    -1 |   0.2% → 0.0% |    1 → 0 | `_pthread_cond_updateval` | `libsystem_pthread.dylib` |

##### `Monitor::wait` (`libjvm.dylib`)

|  Change | Delta |              % |  Samples | Callee                                                                        | Location            |
| ------: | ----: | -------------: | -------: | ----------------------------------------------------------------------------- | ------------------- |
|  -95.4% |  -370 | 99.2% → 100.0% | 388 → 18 | `PlatformMonitor::wait`                                                       | `libjvm.dylib`      |
| removed |    -2 |    0.5% → 0.0% |    2 → 0 | `ThreadBlockInVMPreprocess<InFlightMutexRelease>::~ThreadBlockInVMPreprocess` | `libjvm.dylib`      |
| removed |    -1 |    0.3% → 0.0% |    1 → 0 | `clock_gettime`                                                               | `libsystem_c.dylib` |

##### `_pthread_mutex_firstfit_lock_slow` (`libsystem_pthread.dylib`)

| Change | Delta |      % |  Samples | Callee               | Location                 |
| -----: | ----: | -----: | -------: | -------------------- | ------------------------ |
| -94.7% |  -251 | 100.0% | 265 → 14 | `__psynch_mutexwait` | `libsystem_kernel.dylib` |

##### `Compiler::compile_method` (`libjvm.dylib`)

|  Change | Delta |              % |   Samples | Callee                      | Location       |
| ------: | ----: | -------------: | --------: | --------------------------- | -------------- |
|  -49.4% |  -239 | 99.0% → 100.0% | 484 → 245 | `Compilation::Compilation`  | `libjvm.dylib` |
| removed |    -4 |    0.8% → 0.0% |     4 → 0 | `Compilation::~Compilation` | `libjvm.dylib` |
| removed |    -1 |    0.2% → 0.0% |     1 → 0 | `Chunk::next_chop`          | `libjvm.dylib` |

##### `Mutex::lock` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee                              | Location                  |
| -----: | ----: | -----: | ------: | ----------------------------------- | ------------------------- |
| -93.5% |  -115 | 100.0% | 123 → 8 | `_pthread_mutex_firstfit_lock_slow` | `libsystem_pthread.dylib` |

##### `ThreadCritical::ThreadCritical` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                              | Location                  |
| ------: | ----: | ------------: | ------: | ----------------------------------- | ------------------------- |
|  -97.3% |  -110 | 98.3% → 60.0% | 113 → 3 | `_pthread_mutex_firstfit_lock_slow` | `libsystem_pthread.dylib` |
| removed |    -1 |   0.9% → 0.0% |   1 → 0 | `pthread_self`                      | `libsystem_pthread.dylib` |

##### `IRScope::IRScope` (`libjvm.dylib`)

| Change | Delta |              % |  Samples | Callee                       | Location       |
| -----: | ----: | -------------: | -------: | ---------------------------- | -------------- |
| -55.3% |   -84 | 99.3% → 100.0% | 152 → 68 | `GraphBuilder::GraphBuilder` | `libjvm.dylib` |

##### `IR::IR` (`libjvm.dylib`)

| Change | Delta |      % |  Samples | Callee             | Location       |
| -----: | ----: | -----: | -------: | ------------------ | -------------- |
| -55.6% |   -85 | 100.0% | 153 → 68 | `IRScope::IRScope` | `libjvm.dylib` |

##### `Parse::Parse` (`libjvm.dylib`)

|  Change | Delta |              % |  Samples | Callee                          | Location       |
| ------: | ----: | -------------: | -------: | ------------------------------- | -------------- |
|  -52.4% |   -75 | 95.3% → 100.0% | 143 → 68 | `Parse::do_all_blocks`          | `libjvm.dylib` |
| removed |    -3 |    2.0% → 0.0% |    3 → 0 | `Dependencies::assert_common_1` | `libjvm.dylib` |
|  -33.3% |    -1 |    2.0% → 2.9% |    3 → 2 | `Parse::create_entry_map`       | `libjvm.dylib` |
|  +50.0% |    +1 |    1.3% → 4.4% |    2 → 3 | `Parse::do_exits`               | `libjvm.dylib` |
| removed |    -1 |    0.7% → 0.0% |    1 → 0 | `TypeFunc::make`                | `libjvm.dylib` |

##### `ParseGenerator::generate` (`libjvm.dylib`)

| Change | Delta |      % |  Samples | Callee         | Location       |
| -----: | ----: | -----: | -------: | -------------- | -------------- |
| -54.7% |   -82 | 100.0% | 150 → 68 | `Parse::Parse` | `libjvm.dylib` |

##### `Java_java_lang_ClassLoader_defineClass1` (`libjava.dylib`)

|  Change | Delta |             % |  Samples | Callee                      | Location                   |
| ------: | ----: | ------------: | -------: | --------------------------- | -------------------------- |
|  -59.4% |   -79 | 97.1% → 98.2% | 133 → 54 | `JVM_DefineClassWithSource` | `libjvm.dylib`             |
| removed |    -1 |   0.7% → 0.0% |    1 → 0 | `_platform_memmove`         | `libsystem_platform.dylib` |
| removed |    -1 |   0.7% → 0.0% |    1 → 0 | `szone_malloc_should_clear` | `libsystem_malloc.dylib`   |
| removed |    -1 |   0.7% → 0.0% |    1 → 0 | `jni_GetStringUTFLength`    | `libjvm.dylib`             |
|     new |    +1 |   0.0% → 1.8% |    0 → 1 | `jni_GetByteArrayRegion`    | `libjvm.dylib`             |

##### `jvm_define_class_common` (`libjvm.dylib`)

|  Change | Delta |              % |  Samples | Callee                                        | Location       |
| ------: | ----: | -------------: | -------: | --------------------------------------------- | -------------- |
|  -59.5% |   -78 | 98.5% → 100.0% | 131 → 53 | `SystemDictionary::resolve_class_from_stream` | `libjvm.dylib` |
| removed |    -1 |    0.8% → 0.0% |    1 → 0 | `SymbolTable::new_symbol`                     | `libjvm.dylib` |

##### `JVM_DefineClassWithSource` (`libjvm.dylib`)

| Change | Delta |              % |  Samples | Callee                                  | Location       |
| -----: | ----: | -------------: | -------: | --------------------------------------- | -------------- |
| -60.2% |   -80 | 100.0% → 98.1% | 133 → 53 | `jvm_define_class_common`               | `libjvm.dylib` |
|    new |    +1 |    0.0% → 1.9% |    0 → 1 | `SystemDictionary::resolve_from_stream` | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|  Change | Delta |             % |     Samples | Callee                                   | Location       |
| ------: | ----: | ------------: | ----------: | ---------------------------------------- | -------------- |
|  -46.2% |  -479 | 99.4% → 99.5% | 1,036 → 557 | `Compile::Compile`                       | `libjvm.dylib` |
|  -60.0% |    -3 |   0.5% → 0.4% |       5 → 2 | `Compile::~Compile`                      | `libjvm.dylib` |
| removed |    -1 |   0.1% → 0.0% |       1 → 0 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |
|     new |    +1 |   0.0% → 0.2% |       0 → 1 | `Chunk::next_chop`                       | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

| Change | Delta |             % |   Samples | Callee                                   | Location       |
| -----: | ----: | ------------: | --------: | ---------------------------------------- | -------------- |
| -43.8% |  -213 | 46.9% → 49.0% | 486 → 273 | `Compile::Code_Gen`                      | `libjvm.dylib` |
| -41.6% |  -146 | 33.9% → 36.8% | 351 → 205 | `Compile::Optimize`                      | `libjvm.dylib` |
| -54.4% |   -80 | 14.2% → 12.0% |  147 → 67 | `ParseGenerator::generate`               | `libjvm.dylib` |
| -95.2% |   -20 |   2.0% → 0.2% |    21 → 1 | `CallGenerator::for_inline`              | `libjvm.dylib` |
| -41.7% |    -5 |   1.2% → 1.3% |    12 → 7 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |

##### `CompileQueue::get` (`libjvm.dylib`)

|  Change | Delta |             % |  Samples | Callee                                | Location       |
| ------: | ----: | ------------: | -------: | ------------------------------------- | -------------- |
|  -95.8% |  -342 | 97.3% → 88.2% | 357 → 15 | `Monitor::wait`                       | `libjvm.dylib` |
| removed |    -2 |   0.5% → 0.0% |    2 → 0 | `Mutex::lock`                         | `libjvm.dylib` |
|  -50.0% |    -2 |  1.1% → 11.8% |    4 → 2 | `CompilationPolicy::select_task`      | `libjvm.dylib` |
| removed |    -1 |   0.3% → 0.0% |    1 → 0 | `CompileTask::select_for_compilation` | `libjvm.dylib` |

##### `Compilation::compile_method` (`libjvm.dylib`)

|  Change | Delta |             % |   Samples | Callee                                               | Location        |
| ------: | ----: | ------------: | --------: | ---------------------------------------------------- | --------------- |
|  -48.5% |  -209 | 89.0% → 90.6% | 431 → 222 | `Compilation::compile_java_method`                   | `libjvm.dylib`  |
|  -56.3% |   -27 |   9.9% → 8.6% |   48 → 21 | `ciEnv::register_method`                             | `libjvm.dylib`  |
|  -66.7% |    -2 |   0.6% → 0.4% |     3 → 1 | `DebugInformationRecorder::DebugInformationRecorder` | `libjvm.dylib`  |
| removed |    -1 |   0.2% → 0.0% |     1 → 0 | `tlv_get_addr`                                       | `libdyld.dylib` |

##### `Compilation::Compilation` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Callee                        | Location       |
| -----: | ----: | -----: | --------: | ----------------------------- | -------------- |
| -49.4% |  -239 | 100.0% | 484 → 245 | `Compilation::compile_method` | `libjvm.dylib` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

| Change | Delta |             % |   Samples | Callee                            | Location       |
| -----: | ----: | ------------: | --------: | --------------------------------- | -------------- |
| -32.2% |   -74 | 47.3% → 57.1% | 230 → 156 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
| -44.8% |   -47 | 21.6% → 21.2% |  105 → 58 | `Matcher::match`                  | `libjvm.dylib` |
| -64.1% |   -41 |  13.2% → 8.4% |   64 → 23 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |
| -54.1% |   -33 | 12.6% → 10.3% |   61 → 28 | `PhaseOutput::Output`             | `libjvm.dylib` |
| -85.0% |   -17 |   4.1% → 1.1% |    20 → 3 | `PhaseOutput::install_code`       | `libjvm.dylib` |

##### `Compilation::compile_java_method` (`libjvm.dylib`)

|  Change | Delta |             % |  Samples | Callee                                | Location       |
| ------: | ----: | ------------: | -------: | ------------------------------------- | -------------- |
|  -52.2% |   -94 | 41.8% → 38.7% | 180 → 86 | `Compilation::build_hir`              | `libjvm.dylib` |
|  -44.2% |   -69 | 36.2% → 39.2% | 156 → 87 | `Compilation::emit_lir`               | `libjvm.dylib` |
|  -36.4% |   -28 | 17.9% → 22.1% |  77 → 49 | `Compilation::emit_code_body`         | `libjvm.dylib` |
| removed |   -17 |   3.9% → 0.0% |   17 → 0 | `ciMethod::ensure_method_data`        | `libjvm.dylib` |
| removed |    -1 |   0.2% → 0.0% |    1 → 0 | `CodeBuffer::initialize_section_size` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

| Change | Delta |             % |  Samples | Callee                           | Location       |
| -----: | ----: | ------------: | -------: | -------------------------------- | -------------- |
| -45.1% |   -51 | 32.2% → 30.2% | 113 → 62 | `PhaseIdealLoop::optimize`       | `libjvm.dylib` |
| -53.6% |   -37 | 19.7% → 15.6% |  69 → 32 | `PhaseIterGVN::optimize`         | `libjvm.dylib` |
| -41.1% |   -30 | 20.8% → 21.0% |  73 → 43 | `Compile::optimize_loops`        | `libjvm.dylib` |
| -33.3% |    -8 |   6.8% → 7.8% |  24 → 16 | `PhaseCCP::PhaseCCP`             | `libjvm.dylib` |
| -70.0% |    -7 |   2.8% → 1.5% |   10 → 3 | `Compile::final_graph_reshaping` | `libjvm.dylib` |

##### `Compilation::build_hir` (`libjvm.dylib`)

|  Change | Delta |             % |  Samples | Callee                                       | Location       |
| ------: | ----: | ------------: | -------: | -------------------------------------------- | -------------- |
|  -55.6% |   -85 | 85.0% → 79.1% | 153 → 68 | `IR::IR`                                     | `libjvm.dylib` |
|  -57.1% |    -8 |   7.8% → 7.0% |   14 → 6 | `GlobalValueNumbering::GlobalValueNumbering` | `libjvm.dylib` |
| +150.0% |    +3 |   1.1% → 5.8% |    2 → 5 | `IR::compute_use_counts`                     | `libjvm.dylib` |
|  -50.0% |    -2 |   2.2% → 2.3% |    4 → 2 | `IR::eliminate_null_checks`                  | `libjvm.dylib` |
|  -66.7% |    -2 |   1.7% → 1.2% |    3 → 1 | `RangeCheckElimination::eliminate`           | `libjvm.dylib` |

##### `GraphBuilder::GraphBuilder` (`libjvm.dylib`)

|  Change | Delta |             % |  Samples | Callee                               | Location       |
| ------: | ----: | ------------: | -------: | ------------------------------------ | -------------- |
|  -51.9% |   -70 | 88.8% → 95.6% | 135 → 65 | `GraphBuilder::iterate_all_blocks`   | `libjvm.dylib` |
|  -90.0% |    -9 |   6.6% → 1.5% |   10 → 1 | `BlockListBuilder::BlockListBuilder` | `libjvm.dylib` |
|  -60.0% |    -3 |   3.3% → 2.9% |    5 → 2 | `BlockBegin::iterate_preorder`       | `libjvm.dylib` |
| removed |    -1 |   0.7% → 0.0% |    1 → 0 | `GraphBuilder::setup_start_block`    | `libjvm.dylib` |
| removed |    -1 |   0.7% → 0.0% |    1 → 0 | `resource_allocate_bytes`            | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

| Change | Delta |             % |  Samples | Callee                           | Location       |
| -----: | ----: | ------------: | -------: | -------------------------------- | -------------- |
| -35.8% |   -54 | 81.2% → 92.4% | 151 → 97 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |
| -79.4% |   -27 |  18.3% → 6.7% |   34 → 7 | `PhaseIterGVN::optimize`         | `libjvm.dylib` |

##### `ciObjectFactory::get_metadata` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                 | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------------- | -------------- |
|  -87.7% |   -64 | 73.7% → 42.9% |  73 → 9 | `ciObjectFactory::create_new_metadata` | `libjvm.dylib` |
| removed |    -1 |   1.0% → 0.0% |   1 → 0 | `Klass::is_klass`                      | `libjvm.dylib` |
| removed |    -1 |   1.0% → 0.0% |   1 → 0 | `Metadata::is_klass`                   | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                                     | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------------ | -------------- |
| -63.3% |   -19 |  13.0% → 7.1% | 30 → 11 | `PhaseLive::compute`                       | `libjvm.dylib` |
| -35.0% |   -14 | 17.4% → 16.7% | 40 → 26 | `PhaseChaitin::build_ifg_physical`         | `libjvm.dylib` |
| -36.1% |   -13 | 15.7% → 14.7% | 36 → 23 | `PhaseChaitin::Split`                      | `libjvm.dylib` |
| -20.0% |    -5 | 10.9% → 12.8% | 25 → 20 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |
| -83.3% |    -5 |   2.6% → 0.6% |   6 → 1 | `Chunk::next_chop`                         | `libjvm.dylib` |

##### `ciBytecodeStream::get_method` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                            | Location        |
| ------: | ----: | ------------: | ------: | --------------------------------- | --------------- |
|  -81.8% |   -45 | 56.7% → 38.5% | 55 → 10 | `ciObjectFactory::get_metadata`   | `libjvm.dylib`  |
|  -62.2% |   -23 | 38.1% → 53.8% | 37 → 14 | `ciEnv::get_method_by_index_impl` | `libjvm.dylib`  |
| removed |    -3 |   3.1% → 0.0% |   3 → 0 | `SafepointMechanism::process`     | `libjvm.dylib`  |
| removed |    -1 |   1.0% → 0.0% |   1 → 0 | `ciEnv::get_klass_by_index_impl`  | `libjvm.dylib`  |
|     new |    +1 |   0.0% → 3.8% |   0 → 1 | `tlv_get_addr`                    | `libdyld.dylib` |

##### `GraphBuilder::iterate_all_blocks` (`libjvm.dylib`)

|  Change | Delta |           % |  Samples | Callee                                      | Location       |
| ------: | ----: | ----------: | -------: | ------------------------------------------- | -------------- |
|  -51.9% |   -69 |       98.5% | 133 → 64 | `GraphBuilder::iterate_bytecodes_for_block` | `libjvm.dylib` |
| removed |    -2 | 1.5% → 0.0% |    2 → 0 | `ValueMap::kill_all`                        | `libjvm.dylib` |
|     new |    +1 | 0.0% → 1.5% |    0 → 1 | `ValueStack::ValueStack`                    | `libjvm.dylib` |

##### `Compilation::emit_lir` (`libjvm.dylib`)

|  Change | Delta |             % |  Samples | Callee                           | Location       |
| ------: | ----: | ------------: | -------: | -------------------------------- | -------------- |
|  -49.6% |   -64 | 82.7% → 74.7% | 129 → 65 | `LinearScan::do_linear_scan`     | `libjvm.dylib` |
|  -15.4% |    -4 | 16.7% → 25.3% |  26 → 22 | `BlockList::iterate_forward`     | `libjvm.dylib` |
| removed |    -1 |   0.6% → 0.0% |    1 → 0 | `ControlFlowOptimizer::optimize` | `libjvm.dylib` |

##### `GraphBuilder::iterate_bytecodes_for_block` (`libjvm.dylib`)

|  Change | Delta |             % |  Samples | Callee                        | Location       |
| ------: | ----: | ------------: | -------: | ----------------------------- | -------------- |
|  -50.0% |   -57 | 85.7% → 89.1% | 114 → 57 | `GraphBuilder::invoke`        | `libjvm.dylib` |
|  -28.6% |    -4 | 10.5% → 15.6% |  14 → 10 | `GraphBuilder::access_field`  | `libjvm.dylib` |
|  -42.9% |    -3 |   5.3% → 6.3% |    7 → 4 | `GraphBuilder::check_cast`    | `libjvm.dylib` |
| removed |    -2 |   1.5% → 0.0% |    2 → 0 | `GraphBuilder::load_constant` | `libjvm.dylib` |
|     new |    +2 |   0.0% → 3.1% |    0 → 2 | `GraphBuilder::new_instance`  | `libjvm.dylib` |

##### `PhaseIterGVN::optimize` (`libjvm.dylib`)

|  Change | Delta |             % |  Samples | Callee                                    | Location       |
| ------: | ----: | ------------: | -------: | ----------------------------------------- | -------------- |
|  -56.6% |   -60 | 92.2% → 95.8% | 106 → 46 | `PhaseIterGVN::transform_old`             | `libjvm.dylib` |
| removed |    -4 |   3.5% → 0.0% |    4 → 0 | `PhaseIterGVN::remove_globally_dead_node` | `libjvm.dylib` |
| removed |    -1 |   0.9% → 0.0% |    1 → 0 | `OuterStripMinedLoopEndNode::Value`       | `libjvm.dylib` |
| removed |    -1 |   0.9% → 0.0% |    1 → 0 | `RootNode::Ideal`                         | `libjvm.dylib` |
| removed |    -1 |   0.9% → 0.0% |    1 → 0 | `RegionNode::hash`                        | `libjvm.dylib` |

##### `exec(PrintStream, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

| Change | Delta |      % |     Samples | Callee                                                   | Location                                      |
| -----: | ----: | -----: | ----------: | -------------------------------------------------------- | --------------------------------------------- |
| -64.6% |  -650 | 100.0% | 1,006 → 356 | `exec(PrintStream, Services, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

| Change | Delta |      % |     Samples | Callee                                         | Location                                      |
| -----: | ----: | -----: | ----------: | ---------------------------------------------- | --------------------------------------------- |
| -64.6% |  -650 | 100.0% | 1,006 → 356 | `exec(PrintStream, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `exec(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

| Change | Delta |             % |   Samples | Callee                                                          | Location                                      |
| -----: | ----: | ------------: | --------: | --------------------------------------------------------------- | --------------------------------------------- |
| -65.1% |  -638 | 98.3% → 97.7% | 980 → 342 | `execImpl(MessageCollector, Services, CommonCompilerArguments)` | `org.jetbrains.kotlin.cli.common.CLICompiler` |
| -52.9% |    -9 |   1.7% → 2.3% |    17 → 8 | `<clinit>()`                                                    | `org.jetbrains.kotlin.cli.common.ArgumentsKt` |

##### `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

| Change | Delta |             % |   Samples | Callee                                                         | Location                                                |
| -----: | ----: | ------------: | --------: | -------------------------------------------------------------- | ------------------------------------------------------- |
| -65.2% |  -638 | 99.9% → 99.7% | 979 → 341 | `execute(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

| Change | Delta |      % |   Samples | Callee                                                                | Location                                     |
| -----: | ----: | -----: | --------: | --------------------------------------------------------------------- | -------------------------------------------- |
| -65.1% |  -638 | 100.0% | 980 → 342 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

| Change | Delta |      % |   Samples | Callee                                                                 | Location                                     |
| -----: | ----: | -----: | --------: | ---------------------------------------------------------------------- | -------------------------------------------- |
| -65.1% |  -638 | 100.0% | 980 → 342 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|  Change | Delta |             % |   Samples | Callee                                         | Location                                                |
| ------: | ----: | ------------: | --------: | ---------------------------------------------- | ------------------------------------------------------- |
|  -65.3% |  -637 | 99.7% → 99.4% | 976 → 339 | `runPhasedPipeline(ArgumentsPipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `<clinit>()`                                   | `com.intellij.openapi.util.Disposer`                    |

##### `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

| Change | Delta |      % |   Samples | Callee                                                                                              | Location                                                |
| -----: | ----: | -----: | --------: | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| -65.2% |  -638 | 100.0% | 979 → 341 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `execute(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

| Change | Delta |      % |   Samples | Callee                                                                                                                                        | Location                                                |
| -----: | ----: | -----: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| -65.2% |  -638 | 100.0% | 979 → 341 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|  Change | Delta |           % |   Samples | Callee                                                                          | Location                                                                    |
| ------: | ----: | ----------: | --------: | ------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
|  -65.3% |  -635 |       99.7% | 973 → 338 | `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)`            | `org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`                        |
| removed |    -1 | 0.1% → 0.0% |     1 → 0 | `createCompoundPhase(CommonCompilerArguments)`                                  | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmCliPipeline`                      |
|  -50.0% |    -1 | 0.2% → 0.3% |     2 → 1 | `reportToMessageCollector(BaseDiagnosticsCollector, MessageCollector, boolean)` | `org.jetbrains.kotlin.cli.common.fir.FirDiagnosticsCompilerResultsReporter` |

##### `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

| Change | Delta |             % |   Samples | Callee                           | Location                                                              |
| -----: | ----: | ------------: | --------: | -------------------------------- | --------------------------------------------------------------------- |
| -68.6% |  -496 | 74.3% → 67.2% | 723 → 227 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`      |
| -58.9% |  -112 | 19.5% → 23.1% |  190 → 78 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`       |
| -45.1% |   -23 |   5.2% → 8.3% |   51 → 28 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFir2IrPipelinePhase`        |
| -55.6% |    -5 |   0.9% → 1.2% |     9 → 4 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmConfigurationPipelinePhase` |
|    new |    +1 |   0.0% → 0.3% |     0 → 1 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmWriteOutputsPhase`          |

##### `phaseBody(LoggingContext, Object)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

| Change | Delta |      % |   Samples | Callee                                         | Location                                          |
| -----: | ----: | -----: | --------: | ---------------------------------------------- | ------------------------------------------------- |
| -65.3% |  -635 | 100.0% | 973 → 338 | `phaseBody(PipelineContext, PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase` |

##### `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`)

| Change | Delta |           % |   Samples | Callee                              | Location                                                         |
| -----: | ----: | ----------: | --------: | ----------------------------------- | ---------------------------------------------------------------- |
| -65.3% |  -635 |      100.0% | 973 → 338 | `phaseBody(LoggingContext, Object)` | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`                |
| -57.1% |   -24 | 4.3% → 5.3% |   42 → 18 | `phaseBody(LoggingContext, Object)` | `org.jetbrains.kotlin.backend.common.phaser.FileLoweringPhase`   |
| -40.0% |    -4 | 1.0% → 1.8% |    10 → 6 | `phaseBody(LoggingContext, Object)` | `org.jetbrains.kotlin.backend.common.phaser.ModuleLoweringPhase` |

##### `resumeWith(Object)` (`kotlin.coroutines.jvm.internal.BaseContinuationImpl`)

|  Change | Delta |             % |  Samples | Callee                  | Location                                                                                                               |
| ------: | ----: | ------------: | -------: | ----------------------- | ---------------------------------------------------------------------------------------------------------------------- |
|  -72.7% |  -104 | 70.1% → 76.5% | 143 → 39 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask$processLevel$6`                                  |
|  -69.9% |   -58 | 40.7% → 49.0% |  83 → 25 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner$processCandidate$1`                               |
|  -73.9% |   -17 | 11.3% → 11.8% |   23 → 6 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver$enqueueResolutionTasks$2`                               |
| removed |   -16 |   7.8% → 0.0% |   16 → 0 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirInvokeResolveTowerExtension$enqueueResolverTasksForInvoke$3`          |
|  -80.0% |    -4 |   2.5% → 2.0% |    5 → 1 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolveTask$processCandidatesWithGivenImplicitReceiverAsValue$1` |

##### `loadClass(String, boolean)` (`java.lang.ClassLoader`)

|  Change | Delta |             % |  Samples | Callee                    | Location                                                 |
| ------: | ----: | ------------: | -------: | ------------------------- | -------------------------------------------------------- |
|  -57.1% |   -80 | 92.1% → 90.9% | 140 → 60 | `findClass(String)`       | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |
| removed |    -2 |   1.3% → 0.0% |    2 → 0 | `findLoadedClass(String)` | `java.lang.ClassLoader`                                  |
|  -33.3% |    -2 |   3.9% → 6.1% |    6 → 4 | `findClass(String)`       | `java.net.URLClassLoader`                                |
| removed |    -1 |   0.7% → 0.0% |    1 → 0 | `addTime(long)`           | `jdk.internal.perf.PerfCounter`                          |

##### `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` (`java.lang.ClassLoader`)

|  Change | Delta |             % |  Samples | Callee                                    | Location                                                 |
| ------: | ----: | ------------: | -------: | ----------------------------------------- | -------------------------------------------------------- |
|  -59.9% |   -82 | 97.2% → 96.5% | 137 → 55 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib`                                          |
|  -45.8% |   -11 | 17.0% → 22.8% |  24 → 13 | `loadClass(String)`                       | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |
| removed |    -1 |   0.7% → 0.0% |    1 → 0 | `fixClassname`                            | `libjava.dylib`                                          |
|     new |    +1 |   0.0% → 1.8% |    0 → 1 | `szone_try_free_default`                  | `libsystem_malloc.dylib`                                 |

##### `defineClass(String, byte[], int, int, ProtectionDomain)` (`java.lang.ClassLoader`)

|  Change | Delta |             % |  Samples | Callee                                                                          | Location                |
| ------: | ----: | ------------: | -------: | ------------------------------------------------------------------------------- | ----------------------- |
|  -59.6% |   -84 | 98.6% → 95.0% | 141 → 57 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader` |
| removed |    -1 |   0.7% → 0.0% |    1 → 0 | `preDefineClass(String, ProtectionDomain)`                                      | `java.lang.ClassLoader` |

##### `defineClass(String, byte[], int, int)` (`java.lang.ClassLoader`)

| Change | Delta |      % |  Samples | Callee                                                    | Location                |
| -----: | ----: | -----: | -------: | --------------------------------------------------------- | ----------------------- |
| -58.6% |   -82 | 100.0% | 140 → 58 | `defineClass(String, byte[], int, int, ProtectionDomain)` | `java.lang.ClassLoader` |

##### `read(byte[])` (`java.io.FilterInputStream`)

| Change | Delta |      % |  Samples | Callee                   | Location                       |
| -----: | ----: | -----: | -------: | ------------------------ | ------------------------------ |
| -34.0% |   -35 | 100.0% | 103 → 68 | `read(byte[], int, int)` | `java.util.zip.ZipInputStream` |

##### `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`)

|  Change | Delta |              % | Samples | Callee                              | Location                            |
| ------: | ----: | -------------: | ------: | ----------------------------------- | ----------------------------------- |
|  -29.9% |   -29 | 95.1% → 100.0% | 97 → 68 | `inflate(byte[], int, int)`         | `java.util.zip.Inflater`            |
| removed |    -3 |    2.9% → 0.0% |   3 → 0 | `fill()`                            | `java.util.zip.InflaterInputStream` |
| removed |    -1 |    1.0% → 0.0% |   1 → 0 | `checkFromIndexSize(int, int, int)` | `java.util.Objects`                 |
| removed |    -1 |    1.0% → 0.0% |   1 → 0 | `needsDictionary()`                 | `java.util.zip.Inflater`            |

##### `read(byte[], int, int)` (`java.util.zip.ZipInputStream`)

| Change | Delta |             % |  Samples | Callee                   | Location                            |
| -----: | ----: | ------------: | -------: | ------------------------ | ----------------------------------- |
| -33.7% |   -34 | 98.1% → 97.1% | 101 → 67 | `read(byte[], int, int)` | `java.util.zip.InflaterInputStream` |

##### `getValue()` (`kotlin.UnsafeLazyImpl`)

|  Change | Delta |             % | Samples | Callee     | Location                                                                                                                                                   |
| ------: | ----: | ------------: | ------: | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  -67.7% |   -21 | 68.9% → 76.9% | 31 → 10 | `invoke()` | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver$$Lambda.0x000000f00168dcf8`                                                                        |
| removed |    -4 |   8.9% → 0.0% |   4 → 0 | `invoke()` | `org.jetbrains.kotlin.fir.resolve.calls.candidate.Candidate$$Lambda.0x0000007001670720`                                                                    |
| removed |    -4 |   8.9% → 0.0% |   4 → 0 | `invoke()` | `org.jetbrains.kotlin.fir.java.enhancement.FirSignatureEnhancement$$Lambda.0x00000070016121e0`                                                             |
| removed |    -1 |   2.2% → 0.0% |   1 → 0 | `invoke()` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformer$BodyResolveTransformerComponents$$Lambda.0x00000070015953e0` |
|  -50.0% |    -1 |   4.4% → 7.7% |   2 → 1 | `invoke()` | `org.jetbrains.kotlin.load.java.structure.impl.classFiles.BinaryJavaClass$$Lambda.0x000000f00160b1e8`                                                      |

##### `getValue()` (`kotlin.SafePublicationLazyImpl`)

|  Change | Delta |             % | Samples | Callee                                  | Location                                                                                                   |
| ------: | ----: | ------------: | ------: | --------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
|  -56.3% |    -9 | 33.3% → 38.9% |  16 → 7 | `invoke()`                              | `kotlin.reflect.jvm.internal.DescriptorKProperty$$Lambda$0`                                                |
|  -55.6% |    -5 | 18.8% → 22.2% |   9 → 4 | `invoke()`                              | `org.jetbrains.kotlin.fir.java.deserialization.JvmBinaryAnnotationDeserializer$$Lambda.0x000000f0015dc9b0` |
| removed |    -5 |  10.4% → 0.0% |   5 → 0 | `invoke()`                              | `org.jetbrains.kotlin.fir.java.declarations.FirJavaClass$$Lambda.0x0000007001610000`                       |
|  -80.0% |    -4 |  10.4% → 5.6% |   5 → 1 | `invoke()`                              | `org.jetbrains.kotlin.fir.resolve.calls.ImplicitReceiverValue$$Lambda.0x000000f0016d1390`                  |
| removed |    -3 |   6.3% → 0.0% |   3 → 0 | `compareAndSet(Object, Object, Object)` | `java.util.concurrent.atomic.AtomicReferenceFieldUpdater$AtomicReferenceFieldUpdaterImpl`                  |

##### `getValue()` (`kotlin.SynchronizedLazyImpl`)

|  Change | Delta |             % | Samples | Callee     | Location                                                                                |
| ------: | ----: | ------------: | ------: | ---------- | --------------------------------------------------------------------------------------- |
|  -94.4% |   -17 |  39.1% → 6.3% |  18 → 1 | `invoke()` | `org.jetbrains.kotlin.fir.java.declarations.FirJavaClass$$Lambda.0x000000f001614db0`    |
|  -75.0% |    -3 |   8.7% → 6.3% |   4 → 1 | `invoke()` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$$Lambda.0x000000f001892e98`      |
|  -40.0% |    -2 | 10.9% → 18.8% |   5 → 3 | `invoke()` | `org.jetbrains.kotlin.cli.jvm.modules.CoreJrtVirtualFile$$Lambda.0x000000f001388ad0`    |
| removed |    -2 |   4.3% → 0.0% |   2 → 0 | `invoke()` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x0000007001820000`       |
|  -66.7% |    -2 |   6.5% → 6.3% |   3 → 1 | `invoke()` | `org.jetbrains.kotlin.ir.descriptors.IrBasedClassDescriptor$$Lambda.0x000000f001817c50` |

##### `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`)

|  Change | Delta |              % | Samples | Callee                                          | Location       |
| ------: | ----: | -------------: | ------: | ----------------------------------------------- | -------------- |
|  -28.1% |   -27 | 99.0% → 100.0% | 96 → 69 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `libzip.dylib` |
| removed |    -1 |    1.0% → 0.0% |   1 → 0 | `jni_GetPrimitiveArrayCritical`                 | `libjvm.dylib` |

##### `inflate(byte[], int, int)` (`java.util.zip.Inflater`)

| Change | Delta |      % | Samples | Callee                                                        | Location                 |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------- | ------------------------ |
| -28.9% |   -28 | 100.0% | 97 → 69 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` | `java.util.zip.Inflater` |

##### `checkNotNullParameter(Object, String)` (`kotlin.jvm.internal.Intrinsics`)

| Change | Delta |             % | Samples | Callee                            | Location                         |
| -----: | ----: | ------------: | ------: | --------------------------------- | -------------------------------- |
| -73.3% |   -11 | 57.7% → 57.1% |  15 → 4 | `throwParameterIsNullNPE(String)` | `kotlin.jvm.internal.Intrinsics` |

##### `I2C/C2I adapters(0xbb)` (`<unknown>`)

|  Change | Delta |           % | Samples | Callee                                  | Location       |
| ------: | ----: | ----------: | ------: | --------------------------------------- | -------------- |
| removed |    -1 | 9.1% → 0.0% |   1 → 0 | `SharedRuntime::fixup_callers_callsite` | `libjvm.dylib` |

# Allocated heap profile diff

Allocated 667 MiB → 700 MiB (+32.372 MiB, +4.9%) over 1,329 samples → 1,393 samples (514 KiB per sample).

| Category         | Change |       Delta |             % |              Size |     Samples |
| ---------------- | -----: | ----------: | ------------: | ----------------: | ----------: |
| Standard library |  +9.9% | +48.872 MiB | 73.8% → 77.4% | 493 MiB → 542 MiB | 980 → 1,077 |
| Ours             |  -9.4% | -16.499 MiB | 26.2% → 22.6% | 175 MiB → 158 MiB |   349 → 316 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

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

Functions with the largest decrease in bytes allocated within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

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

#### Callers

Callers with the largest change in contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `<init>(int)` (`java.io.ByteArrayOutputStream`)

| Change |       Delta |      % |              Size |   Samples | Caller                                                  | Location                                               |
| -----: | ----------: | -----: | ----------------: | --------: | ------------------------------------------------------- | ------------------------------------------------------ |
| +15.3% | +24.186 MiB | 100.0% | 158 MiB → 182 MiB | 316 → 364 | `loadAllClassesFromJars(Collection, int, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `copyOf(byte[], int)` (`java.util.Arrays`)

| Change |          Delta |             % |              Size |   Samples | Caller                        | Location                          |
| -----: | -------------: | ------------: | ----------------: | --------: | ----------------------------- | --------------------------------- |
|  +8.4% |    +10.499 MiB | 93.3% → 93.5% | 125 MiB → 136 MiB | 251 → 272 | `toByteArray()`               | `java.io.ByteArrayOutputStream`   |
| +14.3% | +1,023.998 KiB |   5.2% → 5.5% |     7 MiB → 8 MiB |   14 → 16 | `ensureCapacityInternal(int)` | `java.lang.AbstractStringBuilder` |
| -25.0% |   -511.999 KiB |   1.5% → 1.0% |   2 MiB → 1.5 MiB |     4 → 3 | `getBytes()`                  | `jdk.internal.loader.Resource`    |

##### `newInstance(OutputStream, int)` (`org.jetbrains.kotlin.protobuf.CodedOutputStream`)

|  Change |        Delta |             % |            Size | Samples | Caller                                            | Location                                                |
| ------: | -----------: | ------------: | --------------: | ------: | ------------------------------------------------- | ------------------------------------------------------- |
|     new |   +1.999 MiB |  0.0% → 23.5% |     0 B → 2 MiB |   0 → 4 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$Argument`  |
| +150.0% |   +1.499 MiB | 50.0% → 29.4% | 1 MiB → 2.5 MiB |   2 → 5 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Type`           |
|     new | +511.999 KiB |   0.0% → 5.9% |   0 B → 512 KiB |   0 → 1 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$ValueParameter` |
|     new | +511.999 KiB |   0.0% → 5.9% |   0 B → 512 KiB |   0 → 1 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$TypeTable`      |
|     new | +511.999 KiB |   0.0% → 5.9% |   0 B → 512 KiB |   0 → 1 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Annotation`     |

##### `copyOfRange(byte[], int, int)` (`java.util.Arrays`)

|  Change |      Delta |             % |            Size | Samples | Caller                                | Location           |
| ------: | ---------: | ------------: | --------------: | ------: | ------------------------------------- | ------------------ |
| +200.0% | +1.999 MiB | 66.7% → 60.0% |   1 MiB → 3 MiB |   2 → 6 | `<init>(AbstractStringBuilder, Void)` | `java.lang.String` |
| +300.0% | +1.499 MiB | 33.3% → 40.0% | 512 KiB → 2 MiB |   1 → 4 | `<init>(Charset, byte[], int, int)`   | `java.lang.String` |

##### `allocateUninitializedArray(Class, int)` (`jdk.internal.misc.Unsafe`)

|  Change |      Delta |      % |            Size | Samples | Caller           | Location                       |
| ------: | ---------: | -----: | --------------: | ------: | ---------------- | ------------------------------ |
| +233.3% | +3.499 MiB | 100.0% | 1.5 MiB → 5 MiB |  3 → 10 | `newArray(long)` | `java.lang.StringConcatHelper` |

##### `unmodifiableList(List)` (`java.util.Collections`)

| Change |        Delta |            % |          Size | Samples | Caller                                            | Location                                                           |
| -----: | -----------: | -----------: | ------------: | ------: | ------------------------------------------------- | ------------------------------------------------------------------ |
|    new | +511.999 KiB | 0.0% → 16.7% | 0 B → 512 KiB |   0 → 1 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$TypeParameter` |
|    new | +511.999 KiB | 0.0% → 16.7% | 0 B → 512 KiB |   0 → 1 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Function`      |
|    new | +511.999 KiB | 0.0% → 16.7% | 0 B → 512 KiB |   0 → 1 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Type`                      |
|    new | +511.999 KiB | 0.0% → 16.7% | 0 B → 512 KiB |   0 → 1 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Annotation`                |
|    new | +511.999 KiB | 0.0% → 16.7% | 0 B → 512 KiB |   0 → 1 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Constructor`               |

##### `readUtf(int, int, char[])` (`org.jetbrains.org.objectweb.asm.ClassReader`)

|  Change |      Delta |      % |            Size | Samples | Caller                 | Location                                      |
| ------: | ---------: | -----: | --------------: | ------: | ---------------------- | --------------------------------------------- |
| +500.0% | +2.499 MiB | 100.0% | 512 KiB → 3 MiB |   1 → 6 | `readUtf(int, char[])` | `org.jetbrains.org.objectweb.asm.ClassReader` |

##### `newFieldSet()` (`org.jetbrains.kotlin.protobuf.FieldSet`)

| Change |      Delta |             % |          Size | Samples | Caller     | Location                                                               |
| -----: | ---------: | ------------: | ------------: | ------: | ---------- | ---------------------------------------------------------------------- |
|    new | +2.499 MiB | 0.0% → 100.0% | 0 B → 2.5 MiB |   0 → 5 | `<init>()` | `org.jetbrains.kotlin.protobuf.GeneratedMessageLite$ExtendableMessage` |

##### `<init>(int, float, boolean)` (`java.util.HashSet`)

| Change |      Delta |             % |            Size | Samples | Caller     | Location                  |
| -----: | ---------: | ------------: | --------------: | ------: | ---------- | ------------------------- |
| +83.3% | +2.499 MiB | 85.7% → 91.7% | 3 MiB → 5.5 MiB |  6 → 11 | `<init>()` | `java.util.LinkedHashSet` |

##### `resize()` (`java.util.HashMap`)

| Change |        Delta |              % |          Size | Samples | Caller                                          | Location            |
| -----: | -----------: | -------------: | ------------: | ------: | ----------------------------------------------- | ------------------- |
| +66.7% |   +1.999 MiB | 100.0% → 90.9% | 3 MiB → 5 MiB |  6 → 10 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |
|    new | +511.999 KiB |    0.0% → 9.1% | 0 B → 512 KiB |   0 → 1 | `computeIfAbsent(Object, Function)`             | `java.util.HashMap` |

##### `newStringUTF8NoRepl(byte[], int, int, boolean)` (`java.lang.String`)

| Change |      Delta |             % |        Size | Samples | Caller                                  | Location             |
| -----: | ---------: | ------------: | ----------: | ------: | --------------------------------------- | -------------------- |
|    new | +1.999 MiB | 0.0% → 100.0% | 0 B → 2 MiB |   0 → 4 | `newStringUTF8NoRepl(byte[], int, int)` | `java.lang.System$2` |

##### `replace(byte[], char, char)` (`java.lang.StringLatin1`)

|  Change |      Delta |      % |              Size | Samples | Caller                | Location           |
| ------: | ---------: | -----: | ----------------: | ------: | --------------------- | ------------------ |
| +133.3% | +1.999 MiB | 100.0% | 1.5 MiB → 3.5 MiB |   3 → 7 | `replace(char, char)` | `java.lang.String` |

##### `grow(int)` (`java.util.ArrayList`)

| Change |        Delta |              % |            Size | Samples | Caller               | Location              |
| -----: | -----------: | -------------: | --------------: | ------: | -------------------- | --------------------- |
| +25.0% |   +1.499 MiB | 100.0% → 93.8% | 6 MiB → 7.5 MiB | 12 → 15 | `grow()`             | `java.util.ArrayList` |
|    new | +511.999 KiB |    0.0% → 6.3% |   0 B → 512 KiB |   0 → 1 | `addAll(Collection)` | `java.util.ArrayList` |

##### `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` (`java.lang.ClassLoader`)

|  Change |      Delta |      % |            Size | Samples | Caller                                                    | Location                |
| ------: | ---------: | -----: | --------------: | ------: | --------------------------------------------------------- | ----------------------- |
| +150.0% | +1.499 MiB | 100.0% | 1 MiB → 2.5 MiB |   2 → 5 | `defineClass(String, byte[], int, int, ProtectionDomain)` | `java.lang.ClassLoader` |

##### `<init>(MethodHandles$Lookup, MethodType, String, MethodType, MethodHandle, MethodType, boolean, Class[], MethodType[])` (`java.lang.invoke.InnerClassLambdaMetafactory`)

| Change |      Delta |             % |          Size | Samples | Caller                                                                                        | Location                             |
| -----: | ---------: | ------------: | ------------: | ------: | --------------------------------------------------------------------------------------------- | ------------------------------------ |
|    new | +1.499 MiB | 0.0% → 100.0% | 0 B → 1.5 MiB |   0 → 3 | `metafactory(MethodHandles$Lookup, String, MethodType, MethodType, MethodHandle, MethodType)` | `java.lang.invoke.LambdaMetafactory` |

##### `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Function$1`)

| Change |      Delta |             % |          Size | Samples | Caller                                                      | Location                                            |
| -----: | ---------: | ------------: | ------------: | ------: | ----------------------------------------------------------- | --------------------------------------------------- |
|    new | +1.499 MiB | 0.0% → 100.0% | 0 B → 1.5 MiB |   0 → 3 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Function$1` |

##### `<init>(int)` (`kotlin.collections.builders.MapBuilder`)

|  Change |      Delta |      % |            Size | Samples | Caller     | Location                                 |
| ------: | ---------: | -----: | --------------: | ------: | ---------- | ---------------------------------------- |
| +100.0% | +1.499 MiB | 100.0% | 1.5 MiB → 3 MiB |   3 → 6 | `<init>()` | `kotlin.collections.builders.MapBuilder` |

##### `box-impl(List)` (`org.jetbrains.kotlin.fir.MutableOrEmptyList`)

|  Change |          Delta |             % |            Size | Samples | Caller                               | Location                                                                    |
| ------: | -------------: | ------------: | --------------: | ------: | ------------------------------------ | --------------------------------------------------------------------------- |
| removed | -1,023.998 KiB |  28.6% → 0.0% |     1 MiB → 0 B |   2 → 0 | `getAnnotations()`                   | `org.jetbrains.kotlin.fir.declarations.impl.FirNamedFunctionImpl`           |
|  -50.0% |   -511.999 KiB | 28.6% → 10.0% | 1 MiB → 512 KiB |   2 → 1 | `getBounds()`                        | `org.jetbrains.kotlin.fir.declarations.impl.FirTypeParameterImpl`           |
| +100.0% |   +511.999 KiB | 14.3% → 20.0% | 512 KiB → 1 MiB |   1 → 2 | `acceptChildren(FirVisitor, Object)` | `org.jetbrains.kotlin.fir.expressions.impl.FirPropertyAccessExpressionImpl` |
|     new |   +511.999 KiB |  0.0% → 10.0% |   0 B → 512 KiB |   0 → 1 | `getAnnotations()`                   | `org.jetbrains.kotlin.fir.expressions.impl.FirThisReceiverExpressionImpl`   |
|     new |   +511.999 KiB |  0.0% → 10.0% |   0 B → 512 KiB |   0 → 1 | `getAnnotations()`                   | `org.jetbrains.kotlin.fir.declarations.impl.FirTypeParameterImpl`           |

##### `read(InputStream, int)` (`java.nio.file.Files`)

| Change |      Delta |             % |          Size | Samples | Caller               | Location              |
| -----: | ---------: | ------------: | ------------: | ------: | -------------------- | --------------------- |
|    new | +1.499 MiB | 0.0% → 100.0% | 0 B → 1.5 MiB |   0 → 3 | `readAllBytes(Path)` | `java.nio.file.Files` |

##### `createScope(IrSymbolOwner)` (`org.jetbrains.kotlin.backend.common.IrElementTransformerVoidWithContext`)

|  Change |          Delta |              % |              Size | Samples | Caller                                  | Location                                                                  |
| ------: | -------------: | -------------: | ----------------: | ------: | --------------------------------------- | ------------------------------------------------------------------------- |
| +200.0% | +1,023.998 KiB | 100.0% → 75.0% | 512 KiB → 1.5 MiB |   1 → 3 | `visitValueParameter(IrValueParameter)` | `org.jetbrains.kotlin.backend.common.IrElementTransformerVoidWithContext` |
|     new |   +511.999 KiB |   0.0% → 25.0% |     0 B → 512 KiB |   0 → 1 | `visitFunction(IrFunction)`             | `org.jetbrains.kotlin.backend.common.IrElementTransformerVoidWithContext` |

##### `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

| Change |          Delta |      % |                Size | Samples | Caller                                          | Location                       |
| -----: | -------------: | -----: | ------------------: | ------: | ----------------------------------------------- | ------------------------------ |
| +27.0% | +1,023.998 KiB | 100.0% | 3.71 MiB → 4.71 MiB |   2 → 4 | `<init>(ZipFile$Source$Key, boolean, ZipCoder)` | `java.util.zip.ZipFile$Source` |

##### `toString()` (`java.lang.StringBuilder`)

|  Change |          Delta |             % |          Size | Samples | Caller                           | Location                                                                    |
| ------: | -------------: | ------------: | ------------: | ------: | -------------------------------- | --------------------------------------------------------------------------- |
|     new | +1,023.998 KiB |  0.0% → 66.7% |   0 B → 1 MiB |   0 → 2 | `internalNameByClassId(ClassId)` | `org.jetbrains.kotlin.resolve.jvm.JvmClassName`                             |
| removed |   -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `getFullName(boolean)`           | `jdk.internal.jimage.ImageLocation`                                         |
|     new |   +511.999 KiB |  0.0% → 33.3% | 0 B → 512 KiB |   0 → 1 | `toLowerCaseAsciiOnly(String)`   | `org.jetbrains.kotlin.util.capitalizeDecapitalize.CapitalizeDecapitalizeKt` |

##### `addConstantUtf8(String)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

|  Change |          Delta |             % |          Size | Samples | Caller                                                            | Location                                      |
| ------: | -------------: | ------------: | ------------: | ------: | ----------------------------------------------------------------- | --------------------------------------------- |
|     new | +1,023.998 KiB |  0.0% → 66.7% |   0 B → 1 MiB |   0 → 2 | `addConstantNameAndType(String, String)`                          | `jdk.internal.org.objectweb.asm.SymbolTable`  |
| removed |   -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `<init>(SymbolTable, int, String, String, String, String[], int)` | `jdk.internal.org.objectweb.asm.MethodWriter` |
|     new |   +511.999 KiB |  0.0% → 33.3% | 0 B → 512 KiB |   0 → 1 | `addConstantUtf8Reference(int, String)`                           | `jdk.internal.org.objectweb.asm.SymbolTable`  |

##### `addConstantMemberReference(int, String, String, String)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

| Change |        Delta |            % |          Size | Samples | Caller                                                  | Location                                     |
| -----: | -----------: | -----------: | ------------: | ------: | ------------------------------------------------------- | -------------------------------------------- |
|    new | +511.999 KiB | 0.0% → 50.0% | 0 B → 512 KiB |   0 → 1 | `addConstantFieldref(String, String, String)`           | `jdk.internal.org.objectweb.asm.SymbolTable` |
|    new | +511.999 KiB | 0.0% → 50.0% | 0 B → 512 KiB |   0 → 1 | `addConstantMethodref(String, String, String, boolean)` | `jdk.internal.org.objectweb.asm.SymbolTable` |

##### `<init>(PersistentHashMap)` (`kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMapBuilder`)

|  Change |          Delta |      % |              Size | Samples | Caller      | Location                                                                       |
| ------: | -------------: | -----: | ----------------: | ------: | ----------- | ------------------------------------------------------------------------------ |
| +200.0% | +1,023.998 KiB | 100.0% | 512 KiB → 1.5 MiB |   1 → 3 | `builder()` | `kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMap` |

##### `addConstantUtf8Reference(int, String)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

| Change |          Delta |             % |        Size | Samples | Caller                     | Location                                     |
| -----: | -------------: | ------------: | ----------: | ------: | -------------------------- | -------------------------------------------- |
|    new | +1,023.998 KiB | 0.0% → 100.0% | 0 B → 1 MiB |   0 → 2 | `addConstantClass(String)` | `jdk.internal.org.objectweb.asm.SymbolTable` |

##### `visitLineNumber(int, Label)` (`org.jetbrains.org.objectweb.asm.tree.MethodNode`)

| Change |      Delta |             % |          Size | Samples | Caller                        | Location                                        |
| -----: | ---------: | ------------: | ------------: | ------: | ----------------------------- | ----------------------------------------------- |
|    new | +1.499 MiB | 0.0% → 100.0% | 0 B → 1.5 MiB |   0 → 3 | `visitLineNumber(int, Label)` | `org.jetbrains.org.objectweb.asm.MethodVisitor` |

##### `accept(ClassVisitor, Attribute[], int)` (`org.jetbrains.org.objectweb.asm.ClassReader`)

| Change |          Delta |      % |          Size | Samples | Caller                      | Location                                      |
| -----: | -------------: | -----: | ------------: | ------: | --------------------------- | --------------------------------------------- |
| +50.0% | +1,023.998 KiB | 100.0% | 2 MiB → 3 MiB |   4 → 6 | `accept(ClassVisitor, int)` | `org.jetbrains.org.objectweb.asm.ClassReader` |

##### `<init>(InputStream)` (`org.jetbrains.kotlin.protobuf.CodedInputStream`)

|  Change |          Delta |      % |          Size | Samples | Caller                     | Location                                         |
| ------: | -------------: | -----: | ------------: | ------: | -------------------------- | ------------------------------------------------ |
| +100.0% | +1,023.998 KiB | 100.0% | 1 MiB → 2 MiB |   2 → 4 | `newInstance(InputStream)` | `org.jetbrains.kotlin.protobuf.CodedInputStream` |

##### `visitMethod(int, String, String, String, String[])` (`org.jetbrains.kotlin.load.kotlin.FileBasedKotlinClass$4`)

| Change |          Delta |             % |        Size | Samples | Caller                                   | Location                                      |
| -----: | -------------: | ------------: | ----------: | ------: | ---------------------------------------- | --------------------------------------------- |
|    new | +1,023.998 KiB | 0.0% → 100.0% | 0 B → 1 MiB |   0 → 2 | `readMethod(ClassVisitor, Context, int)` | `org.jetbrains.org.objectweb.asm.ClassReader` |

##### `getAnnotationsByClassId(List, ClassId, FirSession)` (`org.jetbrains.kotlin.fir.declarations.FirAnnotationUtilsKt`)

|  Change |          Delta |      % |              Size | Samples | Caller                                              | Location                                                     |
| ------: | -------------: | -----: | ----------------: | ------: | --------------------------------------------------- | ------------------------------------------------------------ |
| +200.0% | +1,023.998 KiB | 100.0% | 512 KiB → 1.5 MiB |   1 → 3 | `getAnnotationByClassId(List, ClassId, FirSession)` | `org.jetbrains.kotlin.fir.declarations.FirAnnotationUtilsKt` |

##### `newTypeCheckerState(TypeSystemContext, boolean, boolean, boolean)` (`org.jetbrains.kotlin.fir.types.ConeInferenceContext`)

|  Change |          Delta |      % |              Size | Samples | Caller                                           | Location                                                      |
| ------: | -------------: | -----: | ----------------: | ------: | ------------------------------------------------ | ------------------------------------------------------------- |
| +200.0% | +1,023.998 KiB | 100.0% | 512 KiB → 1.5 MiB |   1 → 3 | `newTypeCheckerState(boolean, boolean, boolean)` | `org.jetbrains.kotlin.types.model.TypeCheckerProviderContext` |

##### `approximateParametrizedType(TypeApproximatorConfiguration, AbstractTypeApproximator$Cache, RigidTypeMarker, boolean, int)` (`org.jetbrains.kotlin.types.AbstractTypeApproximator`)

|  Change |          Delta |      % |              Size | Samples | Caller                                                                                                        | Location                                              |
| ------: | -------------: | -----: | ----------------: | ------: | ------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| +200.0% | +1,023.998 KiB | 100.0% | 512 KiB → 1.5 MiB |   1 → 3 | `approximateTo(TypeApproximatorConfiguration, AbstractTypeApproximator$Cache, RigidTypeMarker, boolean, int)` | `org.jetbrains.kotlin.types.AbstractTypeApproximator` |

##### `<init>()` (`org.jetbrains.kotlin.load.java.structure.impl.classFiles.JavaPlainType`)

| Change |        Delta |            % |          Size | Samples | Caller                    | Location                                                                           |
| -----: | -----------: | -----------: | ------------: | ------: | ------------------------- | ---------------------------------------------------------------------------------- |
|    new | +511.999 KiB | 0.0% → 50.0% | 0 B → 512 KiB |   0 → 1 | `<init>(Function0, List)` | `org.jetbrains.kotlin.load.java.structure.impl.classFiles.PlainJavaClassifierType` |
|    new | +511.999 KiB | 0.0% → 50.0% | 0 B → 512 KiB |   0 → 1 | `<init>(PrimitiveType)`   | `org.jetbrains.kotlin.load.java.structure.impl.classFiles.PlainJavaPrimitiveType`  |

##### `freeze()` (`org.jetbrains.kotlin.fir.resolve.dfa.MutableFlow`)

| Change |          Delta |             % |        Size | Samples | Caller                                  | Location                                                   |
| -----: | -------------: | ------------: | ----------: | ------: | --------------------------------------- | ---------------------------------------------------------- |
|    new | +1,023.998 KiB | 0.0% → 100.0% | 0 B → 1 MiB |   0 → 2 | `mergeIncomingFlow(CFGNode, Function2)` | `org.jetbrains.kotlin.fir.resolve.dfa.FirDataFlowAnalyzer` |

##### `prepareForEmitting(MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.common.UtilKt`)

| Change |          Delta |             % |        Size | Samples | Caller                               | Location                                                              |
| -----: | -------------: | ------------: | ----------: | ------: | ------------------------------------ | --------------------------------------------------------------------- |
|    new | +1,023.998 KiB | 0.0% → 100.0% | 0 B → 1 MiB |   0 → 2 | `performTransformations(MethodNode)` | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor` |

##### `parseCentralDirectory$lambda$0(Ref$LongRef, List, long, LargeDynamicMappedBuffer$Mapping)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt`)

| Change |        Delta |             % |          Size | Samples | Caller           | Location                                                                                     |
| -----: | -----------: | ------------: | ------------: | ------: | ---------------- | -------------------------------------------------------------------------------------------- |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `invoke(Object)` | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt$$Lambda.0x000000f001396448` |

##### `withMappedRangeFrom(long, Function1)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.LargeDynamicMappedBuffer`)

| Change |        Delta |             % |          Size | Samples | Caller                                            | Location                                                          |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------------------------------- | ----------------------------------------------------------------- |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `parseCentralDirectory(LargeDynamicMappedBuffer)` | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt` |

##### `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Function`)

| Change |        Delta |             % |          Size | Samples | Caller                                                        | Location                                          |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------------------------------------------- | ------------------------------------------------- |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Function` |

##### `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$TypeTable$1`)

| Change |        Delta |             % |          Size | Samples | Caller                                                      | Location                                             |
| -----: | -----------: | ------------: | ------------: | ------: | ----------------------------------------------------------- | ---------------------------------------------------- |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$TypeTable$1` |

##### `clone()` (`java.lang.Object`)

| Change |        Delta |             % |                Size | Samples | Caller                | Location                      |
| -----: | -----------: | ------------: | ------------------: | ------: | --------------------- | ----------------------------- |
| -11.4% |   -5.313 MiB | 96.9% → 97.6% | 46.5 MiB → 41.2 MiB | 93 → 82 | `copyOf(byte[], int)` | `java.util.Arrays`            |
| -50.0% | -511.999 KiB |   2.1% → 1.2% |     1 MiB → 512 KiB |   2 → 1 | `clone()`             | `java.lang.invoke.MemberName` |

##### `copyOfRangeByte(byte[], int, int)` (`java.util.Arrays`)

| Change |      Delta |      % |              Size | Samples | Caller                          | Location           |
| -----: | ---------: | -----: | ----------------: | ------: | ------------------------------- | ------------------ |
| -23.9% | -5.499 MiB | 100.0% | 23 MiB → 17.5 MiB | 46 → 35 | `copyOfRange(byte[], int, int)` | `java.util.Arrays` |

##### `<init>(int, int)` (`org.jetbrains.org.objectweb.asm.tree.analysis.Frame`)

|  Change |          Delta |             % |            Size | Samples | Caller                                           | Location                                                                                          |
| ------: | -------------: | ------------: | --------------: | ------: | ------------------------------------------------ | ------------------------------------------------------------------------------------------------- |
|  -75.0% |     -1.499 MiB | 23.5% → 10.0% | 2 MiB → 512 KiB |   4 → 1 | `<init>(FixStackAnalyzer, int, int)`             | `org.jetbrains.kotlin.codegen.optimization.fixStack.FixStackAnalyzer$FixStackFrame`               |
|  -37.5% |     -1.499 MiB | 47.1% → 50.0% | 4 MiB → 2.5 MiB |   8 → 5 | `_init_$lambda$0(int, int)`                      | `org.jetbrains.kotlin.codegen.optimization.common.FastMethodAnalyzer`                             |
| removed | -1,023.998 KiB |  11.8% → 0.0% |     1 MiB → 0 B |   2 → 0 | `<init>(int, int)`                               | `org.jetbrains.kotlin.codegen.optimization.boxing.BoxingFrame`                                    |
|     new | +1,023.998 KiB |  0.0% → 20.0% |     0 B → 1 MiB |   0 → 2 | `<init>(int)`                                    | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.StoreLoadFrame`                          |
| removed |   -511.999 KiB |   5.9% → 0.0% |   512 KiB → 0 B |   1 → 0 | `<init>(UninitializedStoresProcessor, int, int)` | `org.jetbrains.kotlin.codegen.coroutines.UninitializedStoresProcessor$UninitializedNewValueFrame` |

##### `newOutput()` (`org.jetbrains.kotlin.protobuf.ByteString`)

|  Change |        Delta |             % |              Size | Samples | Caller                                            | Location                                                           |
| ------: | -----------: | ------------: | ----------------: | ------: | ------------------------------------------------- | ------------------------------------------------------------------ |
|  -85.7% |   -2.999 MiB | 63.6% → 20.0% | 3.5 MiB → 512 KiB |   7 → 1 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Type`                      |
|     new | +511.999 KiB |  0.0% → 20.0% |     0 B → 512 KiB |   0 → 1 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Annotation$Argument$Value` |
| removed | -511.999 KiB |   9.1% → 0.0% |     512 KiB → 0 B |   1 → 0 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$TypeParameter`             |

##### `<init>(int)` (`java.lang.AbstractStringBuilder`)

| Change |          Delta |             % |              Size | Samples | Caller        | Location                  |
| -----: | -------------: | ------------: | ----------------: | ------: | ------------- | ------------------------- |
| -42.9% |     -1.499 MiB | 70.0% → 80.0% |   3.5 MiB → 2 MiB |   7 → 4 | `<init>()`    | `java.lang.StringBuilder` |
| -66.7% | -1,023.998 KiB | 30.0% → 20.0% | 1.5 MiB → 512 KiB |   3 → 1 | `<init>(int)` | `java.lang.StringBuilder` |

##### `simplifyTrivialInstructions(MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer`)

| Change |      Delta |      % |            Size | Samples | Caller                          | Location                                                                                           |
| -----: | ---------: | -----: | --------------: | ------: | ------------------------------- | -------------------------------------------------------------------------------------------------- |
| -83.3% | -2.499 MiB | 100.0% | 3 MiB → 512 KiB |   6 → 1 | `transform(String, MethodNode)` | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.LinkedHashMap`)

| Change |      Delta |      % |          Size | Samples | Caller                                          | Location            |
| -----: | ---------: | -----: | ------------: | ------: | ----------------------------------------------- | ------------------- |
| -25.0% | -1.999 MiB | 100.0% | 8 MiB → 6 MiB | 16 → 12 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `stringFromByteBuffer(ByteBuffer, int)` (`jdk.internal.jimage.ImageStringsReader`)

| Change |      Delta |      % |              Size | Samples | Caller           | Location                               |
| -----: | ---------: | -----: | ----------------: | ------: | ---------------- | -------------------------------------- |
| -80.0% | -1.999 MiB | 100.0% | 2.5 MiB → 512 KiB |   5 → 1 | `getString(int)` | `jdk.internal.jimage.BasicImageReader` |

##### `<init>(MethodNode, boolean)` (`org.jetbrains.kotlin.codegen.optimization.common.InstructionLivenessAnalyzer`)

|  Change |        Delta |            % |          Size | Samples | Caller                                                                  | Location                                                                                   |
| ------: | -----------: | -----------: | ------------: | ------: | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| removed |   -1.499 MiB | 75.0% → 0.0% | 1.5 MiB → 0 B |   3 → 0 | `getTypeAdjustmentForALoadInstructions(AbstractInsnNode[], MethodNode)` | `org.jetbrains.kotlin.codegen.optimization.RedundantCheckCastEliminationMethodTransformer` |
| removed | -511.999 KiB | 25.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `<init>(MethodNode, boolean, int, DefaultConstructorMarker)`            | `org.jetbrains.kotlin.codegen.optimization.common.InstructionLivenessAnalyzer`             |

##### `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`)

| Change |      Delta |      % |            Size | Samples | Caller                                                                       | Location                                               |
| -----: | ---------: | -----: | --------------: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------------ |
| -42.9% | -1.499 MiB | 100.0% | 3.5 MiB → 2 MiB |   7 → 4 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `<init>(ClassWriter)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

| Change |      Delta |      % |            Size | Samples | Caller                     | Location                                     |
| -----: | ---------: | -----: | --------------: | ------: | -------------------------- | -------------------------------------------- |
| -60.0% | -1.499 MiB | 100.0% | 2.5 MiB → 1 MiB |   5 → 2 | `<init>(ClassReader, int)` | `jdk.internal.org.objectweb.asm.ClassWriter` |

##### `<init>(byte[], int, boolean)` (`org.jetbrains.org.objectweb.asm.ClassReader`)

| Change |      Delta |      % |            Size | Samples | Caller                     | Location                                      |
| -----: | ---------: | -----: | --------------: | ------: | -------------------------- | --------------------------------------------- |
| -75.0% | -1.499 MiB | 100.0% | 2 MiB → 512 KiB |   4 → 1 | `<init>(byte[], int, int)` | `org.jetbrains.org.objectweb.asm.ClassReader` |

##### `<init>(int)` (`org.jetbrains.kotlin.protobuf.ByteString$Output`)

| Change |      Delta |      % |              Size | Samples | Caller        | Location                                   |
| -----: | ---------: | -----: | ----------------: | ------: | ------------- | ------------------------------------------ |
|  -8.8% | -1.499 MiB | 100.0% | 17 MiB → 15.5 MiB | 34 → 31 | `newOutput()` | `org.jetbrains.kotlin.protobuf.ByteString` |

##### `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$ValueParameter$1`)

| Change |      Delta |      % |            Size | Samples | Caller                                                      | Location                                                  |
| -----: | ---------: | -----: | --------------: | ------: | ----------------------------------------------------------- | --------------------------------------------------------- |
| -75.0% | -1.499 MiB | 100.0% | 2 MiB → 512 KiB |   4 → 1 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$ValueParameter$1` |

##### `create()` (`com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure$2`)

| Change |      Delta |      % |            Size | Samples | Caller     | Location                                                  |
| -----: | ---------: | -----: | --------------: | ------: | ---------- | --------------------------------------------------------- |
| -50.0% | -1.499 MiB | 100.0% | 3 MiB → 1.5 MiB |   6 → 3 | `create()` | `com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure$2` |

##### `newFieldMap(int)` (`org.jetbrains.kotlin.protobuf.SmallSortedMap`)

|  Change |      Delta |             % |          Size | Samples | Caller     | Location                                 |
| ------: | ---------: | ------------: | ------------: | ------: | ---------- | ---------------------------------------- |
| removed | -1.499 MiB | 100.0% → 0.0% | 1.5 MiB → 0 B |   3 → 0 | `<init>()` | `org.jetbrains.kotlin.protobuf.FieldSet` |

##### `traverseIds(int)` (`org.jetbrains.kotlin.metadata.deserialization.NameResolverImpl`)

|  Change |          Delta |            % |          Size | Samples | Caller                       | Location                                                         |
| ------: | -------------: | -----------: | ------------: | ------: | ---------------------------- | ---------------------------------------------------------------- |
| removed | -1,023.998 KiB | 66.7% → 0.0% |   1 MiB → 0 B |   2 → 0 | `getQualifiedClassName(int)` | `org.jetbrains.kotlin.metadata.deserialization.NameResolverImpl` |
| removed |   -511.999 KiB | 33.3% → 0.0% | 512 KiB → 0 B |   1 → 0 | `isLocalClassName(int)`      | `org.jetbrains.kotlin.metadata.deserialization.NameResolverImpl` |

##### `buildDefaultFlow(CFGNode, Function2)` (`org.jetbrains.kotlin.fir.resolve.dfa.FirDataFlowAnalyzer`)

|  Change |      Delta |             % |          Size | Samples | Caller                                  | Location                                                   |
| ------: | ---------: | ------------: | ------------: | ------: | --------------------------------------- | ---------------------------------------------------------- |
| removed | -1.499 MiB | 100.0% → 0.0% | 1.5 MiB → 0 B |   3 → 0 | `mergeIncomingFlow(CFGNode, Function2)` | `org.jetbrains.kotlin.fir.resolve.dfa.FirDataFlowAnalyzer` |

##### `<init>()` (`org.jetbrains.kotlin.resolve.calls.inference.model.MutableConstraintStorage`)

| Change |      Delta |      % |            Size | Samples | Caller                                                                                                | Location                                                                     |
| -----: | ---------: | -----: | --------------: | ------: | ----------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| -60.0% | -1.499 MiB | 100.0% | 2.5 MiB → 1 MiB |   5 → 2 | `<init>(ConstraintInjector, TypeSystemInferenceExtensionContext, LanguageVersionSettings, Function2)` | `org.jetbrains.kotlin.resolve.calls.inference.model.NewConstraintSystemImpl` |

##### `sequencedKeySet()` (`java.util.LinkedHashMap`)

|  Change |      Delta |             % |          Size | Samples | Caller     | Location                  |
| ------: | ---------: | ------------: | ------------: | ------: | ---------- | ------------------------- |
| removed | -1.499 MiB | 100.0% → 0.0% | 1.5 MiB → 0 B |   3 → 0 | `keySet()` | `java.util.LinkedHashMap` |

##### `newOutput()` (`kotlin.reflect.jvm.internal.impl.protobuf.ByteString`)

|  Change |        Delta |            % |          Size | Samples | Caller                                            | Location                                                           |
| ------: | -----------: | -----------: | ------------: | ------: | ------------------------------------------------- | ------------------------------------------------------------------ |
| removed | -511.999 KiB | 50.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Type`          |
| removed | -511.999 KiB | 50.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Type$Argument` |

##### `enlarge(int)` (`jdk.internal.org.objectweb.asm.ByteVector`)

| Change |          Delta |             % |              Size | Samples | Caller            | Location                                    |
| -----: | -------------: | ------------: | ----------------: | ------: | ----------------- | ------------------------------------------- |
| -40.0% | -1,023.998 KiB | 83.3% → 75.0% | 2.5 MiB → 1.5 MiB |   5 → 3 | `putUTF8(String)` | `jdk.internal.org.objectweb.asm.ByteVector` |

##### `<init>(int)` (`java.util.ArrayList`)

|  Change |          Delta |             % |            Size | Samples | Caller                                                                                    | Location                                                                                  |
| ------: | -------------: | ------------: | --------------: | ------: | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
|     new | +1,023.998 KiB |  0.0% → 50.0% |     0 B → 1 MiB |   0 → 2 | `parseMethodDescription(String, ClassifierResolutionContext, BinaryClassSignatureParser)` | `org.jetbrains.kotlin.load.java.structure.impl.classFiles.BinaryJavaMethodBase$Companion` |
|  -50.0% |   -511.999 KiB | 33.3% → 25.0% | 1 MiB → 512 KiB |   2 → 1 | `ensureEntryArrayMutable()`                                                               | `org.jetbrains.kotlin.protobuf.SmallSortedMap`                                            |
| removed |   -511.999 KiB |  16.7% → 0.0% |   512 KiB → 0 B |   1 → 0 | `fullyExpandedTypeWithSource(ConeClassLikeType, FirTypeRef, FirSession)`                  | `org.jetbrains.kotlin.fir.analysis.checkers.FirUpperBoundViolatedHelpersKt`               |
| removed |   -511.999 KiB |  16.7% → 0.0% |   512 KiB → 0 B |   1 → 0 | `getModifiers()`                                                                          | `org.jetbrains.kotlin.fir.analysis.checkers.FirModifierList$FirLightModifierList`         |
| removed |   -511.999 KiB |  16.7% → 0.0% |   512 KiB → 0 B |   1 → 0 | `getNonDispatchParameters(IrFunction)`                                                    | `org.jetbrains.kotlin.ir.util.IrUtilsKt`                                                  |

##### `copyOf(Object[], int, Class)` (`java.util.Arrays`)

|  Change |        Delta |              % |            Size | Samples | Caller                                | Location                                             |
| ------: | -----------: | -------------: | --------------: | ------: | ------------------------------------- | ---------------------------------------------------- |
| removed | -511.999 KiB |   33.3% → 0.0% |   512 KiB → 0 B |   1 → 0 | `copyOf(Object[], int)`               | `java.util.Arrays`                                   |
|  -50.0% | -511.999 KiB | 66.7% → 100.0% | 1 MiB → 512 KiB |   2 → 1 | `copyToArrayOfAny(Object[], boolean)` | `kotlin.collections.CollectionsKt__CollectionsJVMKt` |

##### `getFileName()` (`jdk.internal.jrtfs.JrtPath`)

|  Change |          Delta |             % |        Size | Samples | Caller          | Location                     |
| ------: | -------------: | ------------: | ----------: | ------: | --------------- | ---------------------------- |
| removed | -1,023.998 KiB | 100.0% → 0.0% | 1 MiB → 0 B |   2 → 0 | `getFileName()` | `jdk.internal.jrtfs.JrtPath` |

##### `<init>(InputStream, int)` (`java.util.jar.Manifest$FastInputStream`)

|  Change |        Delta |             % |          Size | Samples | Caller                | Location                                 |
| ------: | -----------: | ------------: | ------------: | ------: | --------------------- | ---------------------------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `<init>(InputStream)` | `java.util.jar.Manifest$FastInputStream` |

##### `copy()` (`java.lang.reflect.Method`)

|  Change |        Delta |             % |          Size | Samples | Caller               | Location                          |
| ------: | -----------: | ------------: | ------------: | ------: | -------------------- | --------------------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `copyMethod(Method)` | `java.lang.reflect.ReflectAccess` |

##### `setLocal(int, int)` (`jdk.internal.org.objectweb.asm.Frame`)

|  Change |        Delta |             % |          Size | Samples | Caller                                   | Location                               |
| ------: | -----------: | ------------: | ------------: | ------: | ---------------------------------------- | -------------------------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `execute(int, int, Symbol, SymbolTable)` | `jdk.internal.org.objectweb.asm.Frame` |

##### `<clinit>()` (`kotlin.reflect.jvm.internal.impl.builtins.jvm.JvmBuiltInsCustomizer`)

|  Change |        Delta |             % |          Size | Samples | Caller                                                      | Location                                                    |
| ------: | -----------: | ------------: | ------------: | ------: | ----------------------------------------------------------- | ----------------------------------------------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `customizer_delegate$lambda$0(JvmBuiltIns, StorageManager)` | `kotlin.reflect.jvm.internal.impl.builtins.jvm.JvmBuiltIns` |

##### `<clinit>()` (`kotlin.reflect.jvm.internal.impl.metadata.jvm.deserialization.JvmNameResolverBase`)

|  Change |        Delta |             % |          Size | Samples | Caller                                    | Location                                                                        |
| ------: | -----------: | ------------: | ------------: | ------: | ----------------------------------------- | ------------------------------------------------------------------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `readNameResolver(InputStream, String[])` | `kotlin.reflect.jvm.internal.impl.metadata.jvm.deserialization.JvmProtoBufUtil` |

##### `<clinit>()` (`kotlin.reflect.jvm.internal.impl.builtins.jvm.JvmBuiltInsSignatures`)

|  Change |        Delta |             % |          Size | Samples | Caller                           | Location                                                              |
| ------: | -----------: | ------------: | ------------: | ------: | -------------------------------- | --------------------------------------------------------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `getSupertypes(ClassDescriptor)` | `kotlin.reflect.jvm.internal.impl.builtins.jvm.JvmBuiltInsCustomizer` |

##### `descriptorString()` (`java.lang.Class`)

|  Change |        Delta |             % |          Size | Samples | Caller                             | Location                             |
| ------: | -----------: | ------------: | ------------: | ------: | ---------------------------------- | ------------------------------------ |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `unparseSig(Class, StringBuilder)` | `sun.invoke.util.BytecodeDescriptor` |

##### `newTable(int)` (`java.util.WeakHashMap`)

|  Change |        Delta |             % |          Size | Samples | Caller               | Location                |
| ------: | -----------: | ------------: | ------------: | ------: | -------------------- | ----------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `<init>(int, float)` | `java.util.WeakHashMap` |

##### `<init>(FixStackAnalyzer, int, int)` (`org.jetbrains.kotlin.codegen.optimization.fixStack.FixStackAnalyzer$FixStackFrame`)

|  Change |      Delta |             % |          Size | Samples | Caller                                          | Location                                                              |
| ------: | ---------: | ------------: | ------------: | ------: | ----------------------------------------------- | --------------------------------------------------------------------- |
| removed | -1.499 MiB | 100.0% → 0.0% | 1.5 MiB → 0 B |   3 → 0 | `analyzer$lambda$0(FixStackAnalyzer, int, int)` | `org.jetbrains.kotlin.codegen.optimization.fixStack.FixStackAnalyzer` |

##### `_init_$lambda$0(int, int)` (`org.jetbrains.kotlin.codegen.optimization.common.FastMethodAnalyzer`)

|  Change |      Delta |             % |          Size | Samples | Caller                   | Location                                                                                         |
| ------: | ---------: | ------------: | ------------: | ------: | ------------------------ | ------------------------------------------------------------------------------------------------ |
| removed | -1.499 MiB | 100.0% → 0.0% | 1.5 MiB → 0 B |   3 → 0 | `invoke(Object, Object)` | `org.jetbrains.kotlin.codegen.optimization.common.FastMethodAnalyzer$$Lambda.0x000000f0018caca0` |

##### `visitVarInsn(int, int)` (`org.jetbrains.org.objectweb.asm.tree.MethodNode`)

|  Change |          Delta |             % |          Size | Samples | Caller                   | Location                                                     |
| ------: | -------------: | ------------: | ------------: | ------: | ------------------------ | ------------------------------------------------------------ |
| removed |     -1.499 MiB |  60.0% → 0.0% | 1.5 MiB → 0 B |   3 → 0 | `visitVarInsn(int, int)` | `org.jetbrains.org.objectweb.asm.MethodVisitor`              |
| removed | -1,023.998 KiB |  40.0% → 0.0% |   1 MiB → 0 B |   2 → 0 | `store(int, Type)`       | `org.jetbrains.org.objectweb.asm.commons.InstructionAdapter` |
|     new | +1,023.998 KiB | 0.0% → 100.0% |   0 B → 1 MiB |   0 → 2 | `accept(MethodVisitor)`  | `org.jetbrains.org.objectweb.asm.tree.VarInsnNode`           |

##### `toString()` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ByteArrayCharSequence`)

|  Change |          Delta |             % |              Size | Samples | Caller                                    | Location                                                     |
| ------: | -------------: | ------------: | ----------------: | ------: | ----------------------------------------- | ------------------------------------------------------------ |
|  -66.7% | -1,023.998 KiB | 75.0% → 50.0% | 1.5 MiB → 512 KiB |   3 → 1 | `getOrCreateDirectory(CharSequence, Map)` | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.FastJarHandler` |
|     new |   +511.999 KiB |  0.0% → 50.0% |     0 B → 512 KiB |   0 → 1 | `getExtension()`                          | `com.intellij.openapi.vfs.VirtualFile`                       |
| removed |   -511.999 KiB |  25.0% → 0.0% |     512 KiB → 0 B |   1 → 0 | `getFileTypeByFileName(CharSequence)`     | `com.intellij.openapi.fileTypes.FileTypeRegistry`            |

##### `subSequence(int, int)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ByteArrayCharSequence`)

|  Change |        Delta |            % |          Size | Samples | Caller                               | Location                                                     |
| ------: | -----------: | -----------: | ------------: | ------: | ------------------------------------ | ------------------------------------------------------------ |
| removed | -511.999 KiB | 50.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `splitPath(CharSequence)`            | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.FastJarHandler` |
| removed | -511.999 KiB | 50.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `getExtension(CharSequence, String)` | `com.intellij.openapi.util.io.FileUtilRt`                    |

##### `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type`)

|  Change |          Delta |             % |        Size | Samples | Caller                                                        | Location                                      |
| ------: | -------------: | ------------: | ----------: | ------: | ------------------------------------------------------------- | --------------------------------------------- |
| removed | -1,023.998 KiB | 100.0% → 0.0% | 1 MiB → 0 B |   2 → 0 | `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Type` |

##### `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type$1`)

| Change |          Delta |      % |              Size | Samples | Caller                                                      | Location                                        |
| -----: | -------------: | -----: | ----------------: | ------: | ----------------------------------------------------------- | ----------------------------------------------- |
| -22.2% | -1,023.998 KiB | 100.0% | 4.5 MiB → 3.5 MiB |   9 → 7 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$1` |

### Total size

#### Regressions

Functions with the largest increase in bytes allocated within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

|  Change |       Delta |             % |                Size |       Samples | Function                                                                                                                                                                            | Location                                                                                       |
| ------: | ----------: | ------------: | ------------------: | ------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
|   +4.9% | +32.872 MiB |         99.9% |   666 MiB → 699 MiB | 1,327 → 1,392 | `run(String[])`                                                                                                                                                                     | `org.jetbrains.kotlin.preloading.Preloader`                                                    |
|   +4.9% | +32.872 MiB |         99.9% |   666 MiB → 699 MiB | 1,327 → 1,392 | `main(String[])`                                                                                                                                                                    | `org.jetbrains.kotlin.preloading.Preloader`                                                    |
|   +9.3% | +31.872 MiB | 51.2% → 53.4% |   341 MiB → 373 MiB |     683 → 746 | `loadAllClassesFromJars(Collection, int, ClassHandler)`                                                                                                                             | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`                                         |
|   +9.3% | +31.872 MiB | 51.2% → 53.4% |   341 MiB → 373 MiB |     683 → 746 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)`                                                                                                        | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`                                         |
|  +15.3% | +24.186 MiB | 23.7% → 26.0% |   158 MiB → 182 MiB |     316 → 364 | `<init>(int)`                                                                                                                                                                       | `java.io.ByteArrayOutputStream`                                                                |
|   +6.3% |  +9.999 MiB | 23.9% → 24.2% |   159 MiB → 169 MiB |     318 → 338 | `resolveAndCheckFir(FirSession, List, BaseDiagnosticsCollector)`                                                                                                                    | `org.jetbrains.kotlin.fir.pipeline.FirUtilsKt`                                                 |
| +163.6% |  +8.999 MiB |   0.8% → 2.1% |  5.5 MiB → 14.5 MiB |       11 → 29 | `resolvePlainArgumentType(ArgumentCheckingProcessor$ArgumentContext, ConeResolutionAtom, ConeKotlinType, boolean, KtSourceElement)`                                                 | `org.jetbrains.kotlin.fir.resolve.calls.stages.ArgumentCheckingProcessor`                      |
| +163.6% |  +8.999 MiB |   0.8% → 2.1% |  5.5 MiB → 14.5 MiB |       11 → 29 | `resolvePlainArgumentType$default(ArgumentCheckingProcessor, ArgumentCheckingProcessor$ArgumentContext, ConeResolutionAtom, ConeKotlinType, boolean, KtSourceElement, int, Object)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ArgumentCheckingProcessor`                      |
| +257.1% |  +8.999 MiB |   0.5% → 1.8% |  3.5 MiB → 12.5 MiB |        7 → 25 | `fullyExpandedType$default(ConeClassLikeType, FirSession, Function1, int, Object)`                                                                                                  | `org.jetbrains.kotlin.fir.resolve.TypeExpansionUtilsKt`                                        |
| +188.9% |  +8.499 MiB |   0.7% → 1.9% |    4.5 MiB → 13 MiB |        9 → 26 | `processSymbolsByName$lambda$0(Ref$BooleanRef, Function1, FirCallableSymbol)`                                                                                                       | `org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope`                            |
| +188.9% |  +8.499 MiB |   0.7% → 1.9% |    4.5 MiB → 13 MiB |        9 → 26 | `invoke(Object)`                                                                                                                                                                    | `org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope$$Lambda.0x000000f0016015f0` |
|  +80.0% |  +7.999 MiB |   1.5% → 2.6% |     10 MiB → 18 MiB |       20 → 36 | `processFunctionsByName$lambda$0(FirLookupTrackerComponent, CallInfo, Ref$BooleanRef, ScopeBasedTowerLevel, TowerLevelProcessor, FirCallableSymbol)`                                | `org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel`                            |
|  +80.0% |  +7.999 MiB |   1.5% → 2.6% |     10 MiB → 18 MiB |       20 → 36 | `invoke(Object)`                                                                                                                                                                    | `org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel$$Lambda.0x000000f001672d98` |
|  +88.2% |  +7.499 MiB |   1.3% → 2.3% |    8.5 MiB → 16 MiB |       17 → 32 | `toSymbol(ConeClassLikeLookupTag, FirSession)`                                                                                                                                      | `org.jetbrains.kotlin.fir.resolve.ToSymbolUtilsKt`                                             |
|  +13.3% |  +6.999 MiB |   7.9% → 8.5% | 52.7 MiB → 59.7 MiB |     105 → 119 | `processSymbolsByName(Name, Function3, Function1)`                                                                                                                                  | `org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope`                            |
|  +58.3% |  +6.999 MiB |   1.8% → 2.7% |     12 MiB → 19 MiB |       24 → 38 | `consumeCallableCandidate(FirCallableSymbol, CallInfo, TowerLevelProcessor)`                                                                                                        | `org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel`                            |
| +233.3% |  +6.999 MiB |   0.4% → 1.4% |      3 MiB → 10 MiB |        6 → 20 | `resolvePlainArgumentType(Candidate, ConeResolutionAtom, ConeKotlinType, ConeKotlinType, CheckerSink, ResolutionContext, boolean, boolean, KtSourceElement)`                        | `org.jetbrains.kotlin.fir.resolve.calls.stages.ArgumentCheckingProcessor`                      |
| +233.3% |  +6.999 MiB |   0.4% → 1.4% |      3 MiB → 10 MiB |        6 → 20 | `resolveExtensionReceiver(CheckerSink, ResolutionContext, ImplicitArgumentDescription, Candidate, ConeKotlinType, Continuation)`                                                    | `org.jetbrains.kotlin.fir.resolve.calls.stages.CheckExtensionReceiver`                         |
|  +21.5% |  +6.999 MiB |   4.9% → 5.6% | 32.5 MiB → 39.5 MiB |       65 → 79 | `visitNestedElements(FirElement)`                                                                                                                                                   | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor`              |
|  +70.0% |  +6.999 MiB |   1.5% → 2.4% |     10 MiB → 17 MiB |       20 → 34 | `invoke(PhaseConfig, PhaserState, LoweringContext, IrModuleFragment)`                                                                                                               | `org.jetbrains.kotlin.backend.common.phaser.PerformByIrFilePhase`                              |

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

|  Change |       Delta |             % |                Size |       Samples | Function                                                                                                                                                                            | Location                                                                                       |
| ------: | ----------: | ------------: | ------------------: | ------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
|   +4.9% | +32.872 MiB |         99.9% |   666 MiB → 699 MiB | 1,327 → 1,392 | `run(String[])`                                                                                                                                                                     | `org.jetbrains.kotlin.preloading.Preloader`                                                    |
|   +4.9% | +32.872 MiB |         99.9% |   666 MiB → 699 MiB | 1,327 → 1,392 | `main(String[])`                                                                                                                                                                    | `org.jetbrains.kotlin.preloading.Preloader`                                                    |
|   +9.3% | +31.872 MiB | 51.2% → 53.4% |   341 MiB → 373 MiB |     683 → 746 | `loadAllClassesFromJars(Collection, int, ClassHandler)`                                                                                                                             | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`                                         |
|   +9.3% | +31.872 MiB | 51.2% → 53.4% |   341 MiB → 373 MiB |     683 → 746 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)`                                                                                                        | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`                                         |
|   +6.3% |  +9.999 MiB | 23.9% → 24.2% |   159 MiB → 169 MiB |     318 → 338 | `resolveAndCheckFir(FirSession, List, BaseDiagnosticsCollector)`                                                                                                                    | `org.jetbrains.kotlin.fir.pipeline.FirUtilsKt`                                                 |
| +163.6% |  +8.999 MiB |   0.8% → 2.1% |  5.5 MiB → 14.5 MiB |       11 → 29 | `resolvePlainArgumentType(ArgumentCheckingProcessor$ArgumentContext, ConeResolutionAtom, ConeKotlinType, boolean, KtSourceElement)`                                                 | `org.jetbrains.kotlin.fir.resolve.calls.stages.ArgumentCheckingProcessor`                      |
| +163.6% |  +8.999 MiB |   0.8% → 2.1% |  5.5 MiB → 14.5 MiB |       11 → 29 | `resolvePlainArgumentType$default(ArgumentCheckingProcessor, ArgumentCheckingProcessor$ArgumentContext, ConeResolutionAtom, ConeKotlinType, boolean, KtSourceElement, int, Object)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ArgumentCheckingProcessor`                      |
| +257.1% |  +8.999 MiB |   0.5% → 1.8% |  3.5 MiB → 12.5 MiB |        7 → 25 | `fullyExpandedType$default(ConeClassLikeType, FirSession, Function1, int, Object)`                                                                                                  | `org.jetbrains.kotlin.fir.resolve.TypeExpansionUtilsKt`                                        |
| +188.9% |  +8.499 MiB |   0.7% → 1.9% |    4.5 MiB → 13 MiB |        9 → 26 | `processSymbolsByName$lambda$0(Ref$BooleanRef, Function1, FirCallableSymbol)`                                                                                                       | `org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope`                            |
| +188.9% |  +8.499 MiB |   0.7% → 1.9% |    4.5 MiB → 13 MiB |        9 → 26 | `invoke(Object)`                                                                                                                                                                    | `org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope$$Lambda.0x000000f0016015f0` |
|  +80.0% |  +7.999 MiB |   1.5% → 2.6% |     10 MiB → 18 MiB |       20 → 36 | `processFunctionsByName$lambda$0(FirLookupTrackerComponent, CallInfo, Ref$BooleanRef, ScopeBasedTowerLevel, TowerLevelProcessor, FirCallableSymbol)`                                | `org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel`                            |
|  +80.0% |  +7.999 MiB |   1.5% → 2.6% |     10 MiB → 18 MiB |       20 → 36 | `invoke(Object)`                                                                                                                                                                    | `org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel$$Lambda.0x000000f001672d98` |
|  +88.2% |  +7.499 MiB |   1.3% → 2.3% |    8.5 MiB → 16 MiB |       17 → 32 | `toSymbol(ConeClassLikeLookupTag, FirSession)`                                                                                                                                      | `org.jetbrains.kotlin.fir.resolve.ToSymbolUtilsKt`                                             |
|  +13.3% |  +6.999 MiB |   7.9% → 8.5% | 52.7 MiB → 59.7 MiB |     105 → 119 | `processSymbolsByName(Name, Function3, Function1)`                                                                                                                                  | `org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope`                            |
|  +58.3% |  +6.999 MiB |   1.8% → 2.7% |     12 MiB → 19 MiB |       24 → 38 | `consumeCallableCandidate(FirCallableSymbol, CallInfo, TowerLevelProcessor)`                                                                                                        | `org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel`                            |
| +233.3% |  +6.999 MiB |   0.4% → 1.4% |      3 MiB → 10 MiB |        6 → 20 | `resolvePlainArgumentType(Candidate, ConeResolutionAtom, ConeKotlinType, ConeKotlinType, CheckerSink, ResolutionContext, boolean, boolean, KtSourceElement)`                        | `org.jetbrains.kotlin.fir.resolve.calls.stages.ArgumentCheckingProcessor`                      |
| +233.3% |  +6.999 MiB |   0.4% → 1.4% |      3 MiB → 10 MiB |        6 → 20 | `resolveExtensionReceiver(CheckerSink, ResolutionContext, ImplicitArgumentDescription, Candidate, ConeKotlinType, Continuation)`                                                    | `org.jetbrains.kotlin.fir.resolve.calls.stages.CheckExtensionReceiver`                         |
|  +21.5% |  +6.999 MiB |   4.9% → 5.6% | 32.5 MiB → 39.5 MiB |       65 → 79 | `visitNestedElements(FirElement)`                                                                                                                                                   | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor`              |
|  +70.0% |  +6.999 MiB |   1.5% → 2.4% |     10 MiB → 17 MiB |       20 → 34 | `invoke(PhaseConfig, PhaserState, LoweringContext, IrModuleFragment)`                                                                                                               | `org.jetbrains.kotlin.backend.common.phaser.PerformByIrFilePhase`                              |
|  +70.0% |  +6.999 MiB |   1.5% → 2.4% |     10 MiB → 17 MiB |       20 → 34 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)`                                                                                                                          | `org.jetbrains.kotlin.backend.common.phaser.PerformByIrFilePhase`                              |

#### Improvements

Functions with the largest decrease in bytes allocated within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

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

#### Callees

Callees with the largest change in contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

| Change |          Delta |             % |              Size |   Samples | Callee                                                                       | Location                                               |
| -----: | -------------: | ------------: | ----------------: | --------: | ---------------------------------------------------------------------------- | ------------------------------------------------------ |
|  +9.3% |    +31.872 MiB | 51.2% → 53.4% | 341 MiB → 373 MiB | 683 → 746 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |
|  +0.3% | +1,023.998 KiB | 48.8% → 46.6% | 325 MiB → 326 MiB | 644 → 646 | `invoke(Object, Object[])`                                                   | `java.lang.reflect.Method`                             |

##### `main(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

| Change |       Delta |      % |              Size |       Samples | Callee          | Location                                    |
| -----: | ----------: | -----: | ----------------: | ------------: | --------------- | ------------------------------------------- |
|  +4.9% | +32.872 MiB | 100.0% | 666 MiB → 699 MiB | 1,327 → 1,392 | `run(String[])` | `org.jetbrains.kotlin.preloading.Preloader` |

##### `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`)

|  Change |          Delta |             % |              Size |   Samples | Callee                | Location                        |
| ------: | -------------: | ------------: | ----------------: | --------: | --------------------- | ------------------------------- |
|  +15.3% |    +24.186 MiB | 46.3% → 48.8% | 158 MiB → 182 MiB | 316 → 364 | `<init>(int)`         | `java.io.ByteArrayOutputStream` |
|   +3.0% |     +5.186 MiB | 50.4% → 47.5% | 172 MiB → 177 MiB | 344 → 354 | `toByteArray()`       | `java.io.ByteArrayOutputStream` |
|  +42.9% |         +3 MiB |   2.0% → 2.7% |    7 MiB → 10 MiB |   14 → 20 | `getNextEntry()`      | `java.util.zip.ZipInputStream`  |
| +100.0% | +1,023.998 KiB |   0.3% → 0.5% |     1 MiB → 2 MiB |     2 → 4 | `put(Object, Object)` | `java.util.HashMap`             |

##### `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`)

| Change |       Delta |            % |              Size |   Samples | Callee                                                                       | Location                                               |
| -----: | ----------: | -----------: | ----------------: | --------: | ---------------------------------------------------------------------------- | ------------------------------------------------------ |
|  +9.3% | +31.872 MiB |       100.0% | 341 MiB → 373 MiB | 683 → 746 | `loadAllClassesFromJars(Collection, int, ClassHandler)`                      | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |
| +20.8% |  +6.872 MiB | 9.7% → 10.7% | 33 MiB → 39.9 MiB |   66 → 79 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `resolveAndCheckFir(FirSession, List, BaseDiagnosticsCollector)` (`org.jetbrains.kotlin.fir.pipeline.FirUtilsKt`)

| Change |      Delta |             % |              Size |   Samples | Callee                                                                                        | Location                                      |
| -----: | ---------: | ------------: | ----------------: | --------: | --------------------------------------------------------------------------------------------- | --------------------------------------------- |
|  +4.9% | +6.499 MiB | 82.7% → 81.7% | 132 MiB → 138 MiB | 263 → 276 | `runResolution(FirSession, List)`                                                             | `org.jetbrains.kotlin.fir.pipeline.AnalyseKt` |
| +12.7% | +3.499 MiB | 17.3% → 18.3% | 27.5 MiB → 31 MiB |   55 → 62 | `runCheckers(FirSession, ScopeSession, Collection, BaseDiagnosticsCollector, MppCheckerKind)` | `org.jetbrains.kotlin.fir.pipeline.AnalyseKt` |

##### `resolvePlainArgumentType(ArgumentCheckingProcessor$ArgumentContext, ConeResolutionAtom, ConeKotlinType, boolean, KtSourceElement)` (`org.jetbrains.kotlin.fir.resolve.calls.stages.ArgumentCheckingProcessor`)

|  Change |      Delta |             % |            Size | Samples | Callee                                                                                                                                 | Location                                                                  |
| ------: | ---------: | ------------: | --------------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| +650.0% | +6.499 MiB | 18.2% → 51.7% | 1 MiB → 7.5 MiB |  2 → 15 | `argumentTypeWithCustomConversion(ConeInferenceContext, FirSession, ConeKotlinType, ConeKotlinType)`                                   | `org.jetbrains.kotlin.fir.resolve.calls.stages.ArgumentCheckingProcessor` |
|  +55.6% | +2.499 MiB | 81.8% → 48.3% | 4.5 MiB → 7 MiB |  9 → 14 | `checkApplicabilityForArgumentType(ArgumentCheckingProcessor$ArgumentContext, ConeResolutionAtom, ConeKotlinType, ConstraintPosition)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ArgumentCheckingProcessor` |

##### `resolvePlainArgumentType$default(ArgumentCheckingProcessor, ArgumentCheckingProcessor$ArgumentContext, ConeResolutionAtom, ConeKotlinType, boolean, KtSourceElement, int, Object)` (`org.jetbrains.kotlin.fir.resolve.calls.stages.ArgumentCheckingProcessor`)

|  Change |      Delta |      % |               Size | Samples | Callee                                                                                                                              | Location                                                                  |
| ------: | ---------: | -----: | -----------------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| +163.6% | +8.999 MiB | 100.0% | 5.5 MiB → 14.5 MiB | 11 → 29 | `resolvePlainArgumentType(ArgumentCheckingProcessor$ArgumentContext, ConeResolutionAtom, ConeKotlinType, boolean, KtSourceElement)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ArgumentCheckingProcessor` |

##### `fullyExpandedType$default(ConeClassLikeType, FirSession, Function1, int, Object)` (`org.jetbrains.kotlin.fir.resolve.TypeExpansionUtilsKt`)

|  Change |      Delta |      % |               Size | Samples | Callee                                                        | Location                                                |
| ------: | ---------: | -----: | -----------------: | ------: | ------------------------------------------------------------- | ------------------------------------------------------- |
| +257.1% | +8.999 MiB | 100.0% | 3.5 MiB → 12.5 MiB |  7 → 25 | `fullyExpandedType(ConeClassLikeType, FirSession, Function1)` | `org.jetbrains.kotlin.fir.resolve.TypeExpansionUtilsKt` |

##### `processSymbolsByName$lambda$0(Ref$BooleanRef, Function1, FirCallableSymbol)` (`org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope`)

|  Change |      Delta |      % |             Size | Samples | Callee           | Location                                                                                       |
| ------: | ---------: | -----: | ---------------: | ------: | ---------------- | ---------------------------------------------------------------------------------------------- |
| +188.9% | +8.499 MiB | 100.0% | 4.5 MiB → 13 MiB |  9 → 26 | `invoke(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel$$Lambda.0x000000f001672d98` |

##### `invoke(Object)` (`org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope$$Lambda.0x000000f0016015f0`)

|  Change |      Delta |      % |             Size | Samples | Callee                                                                        | Location                                                            |
| ------: | ---------: | -----: | ---------------: | ------: | ----------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| +188.9% | +8.499 MiB | 100.0% | 4.5 MiB → 13 MiB |  9 → 26 | `processSymbolsByName$lambda$0(Ref$BooleanRef, Function1, FirCallableSymbol)` | `org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope` |

##### `processFunctionsByName$lambda$0(FirLookupTrackerComponent, CallInfo, Ref$BooleanRef, ScopeBasedTowerLevel, TowerLevelProcessor, FirCallableSymbol)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel`)

| Change |      Delta |      % |            Size | Samples | Callee                                                                       | Location                                                            |
| -----: | ---------: | -----: | --------------: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| +80.0% | +7.999 MiB | 100.0% | 10 MiB → 18 MiB | 20 → 36 | `consumeCallableCandidate(FirCallableSymbol, CallInfo, TowerLevelProcessor)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel` |

##### `invoke(Object)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel$$Lambda.0x000000f001672d98`)

| Change |      Delta |      % |            Size | Samples | Callee                                                                                                                                               | Location                                                            |
| -----: | ---------: | -----: | --------------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| +80.0% | +7.999 MiB | 100.0% | 10 MiB → 18 MiB | 20 → 36 | `processFunctionsByName$lambda$0(FirLookupTrackerComponent, CallInfo, Ref$BooleanRef, ScopeBasedTowerLevel, TowerLevelProcessor, FirCallableSymbol)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel` |

##### `toSymbol(ConeClassLikeLookupTag, FirSession)` (`org.jetbrains.kotlin.fir.resolve.ToSymbolUtilsKt`)

| Change |      Delta |             % |             Size | Samples | Callee                                 | Location                                                                            |
| -----: | ---------: | ------------: | ---------------: | ------: | -------------------------------------- | ----------------------------------------------------------------------------------- |
| +93.8% | +7.499 MiB | 94.1% → 96.9% | 8 MiB → 15.5 MiB | 16 → 31 | `getClassLikeSymbolByClassId(ClassId)` | `org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider` |

##### `processSymbolsByName(Name, Function3, Function1)` (`org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope`)

| Change |        Delta |             % |                Size | Samples | Callee                                                           | Location                                                                                      |
| -----: | -----------: | ------------: | ------------------: | ------: | ---------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| +18.6% |   +3.999 MiB | 40.8% → 42.7% | 21.5 MiB → 25.5 MiB | 43 → 51 | `invoke(Object, Object, Object)`                                 | `org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope$processFunctionsByName$1`  |
|  +8.0% |   +2.499 MiB | 59.2% → 56.4% | 31.2 MiB → 33.7 MiB | 62 → 67 | `invoke(Object, Object, Object)`                                 | `org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope$processPropertiesByName$1` |
|    new | +511.999 KiB |   0.0% → 0.8% |       0 B → 512 KiB |   0 → 1 | `linkCallSite(Object, Object, Object, Object, Object, Object[])` | `java.lang.invoke.MethodHandleNatives`                                                        |

##### `consumeCallableCandidate(FirCallableSymbol, CallInfo, TowerLevelProcessor)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel`)

| Change |      Delta |             % |            Size | Samples | Callee                                                                                                                                 | Location                                                           |
| -----: | ---------: | ------------: | --------------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| +63.6% | +6.999 MiB | 91.7% → 94.7% | 11 MiB → 18 MiB | 22 → 36 | `consumeCandidate$default(TowerLevelProcessor, FirBasedSymbol, FirExpression, FirExpression, FirScope, boolean, boolean, int, Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerLevelProcessor` |

##### `resolvePlainArgumentType(Candidate, ConeResolutionAtom, ConeKotlinType, ConeKotlinType, CheckerSink, ResolutionContext, boolean, boolean, KtSourceElement)` (`org.jetbrains.kotlin.fir.resolve.calls.stages.ArgumentCheckingProcessor`)

|  Change |      Delta |      % |           Size | Samples | Callee                                                                                                                                                                              | Location                                                                  |
| ------: | ---------: | -----: | -------------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| +233.3% | +6.999 MiB | 100.0% | 3 MiB → 10 MiB |  6 → 20 | `resolvePlainArgumentType$default(ArgumentCheckingProcessor, ArgumentCheckingProcessor$ArgumentContext, ConeResolutionAtom, ConeKotlinType, boolean, KtSourceElement, int, Object)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ArgumentCheckingProcessor` |

##### `resolveExtensionReceiver(CheckerSink, ResolutionContext, ImplicitArgumentDescription, Candidate, ConeKotlinType, Continuation)` (`org.jetbrains.kotlin.fir.resolve.calls.stages.CheckExtensionReceiver`)

|  Change |      Delta |      % |           Size | Samples | Callee                                                                                                                                                       | Location                                                                  |
| ------: | ---------: | -----: | -------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------- |
| +233.3% | +6.999 MiB | 100.0% | 3 MiB → 10 MiB |  6 → 20 | `resolvePlainArgumentType(Candidate, ConeResolutionAtom, ConeKotlinType, ConeKotlinType, CheckerSink, ResolutionContext, boolean, boolean, KtSourceElement)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ArgumentCheckingProcessor` |

##### `visitNestedElements(FirElement)` (`org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor`)

|  Change |      Delta |             % |                Size | Samples | Callee                               | Location                                                                    |
| ------: | ---------: | ------------: | ------------------: | ------: | ------------------------------------ | --------------------------------------------------------------------------- |
|  +21.5% | +6.999 MiB |        100.0% | 32.5 MiB → 39.5 MiB | 65 → 79 | `acceptChildren(FirVisitor, Object)` | `org.jetbrains.kotlin.fir.declarations.impl.FirFileImpl`                    |
| +100.0% | +4.499 MiB | 13.8% → 22.8% |     4.5 MiB → 9 MiB |  9 → 18 | `acceptChildren(FirVisitor, Object)` | `org.jetbrains.kotlin.fir.expressions.impl.FirReturnExpressionImpl`         |
|  +17.8% | +3.999 MiB | 69.2% → 67.1% | 22.5 MiB → 26.5 MiB | 45 → 53 | `acceptChildren(FirVisitor, Object)` | `org.jetbrains.kotlin.fir.declarations.impl.FirNamedFunctionImpl`           |
|  +70.0% | +3.499 MiB | 15.4% → 21.5% |     5 MiB → 8.5 MiB | 10 → 17 | `acceptChildren(FirVisitor, Object)` | `org.jetbrains.kotlin.fir.expressions.impl.FirFunctionCallImpl`             |
|  -83.3% | -2.499 MiB |   9.2% → 1.3% |     3 MiB → 512 KiB |   6 → 1 | `acceptChildren(FirVisitor, Object)` | `org.jetbrains.kotlin.fir.expressions.impl.FirPropertyAccessExpressionImpl` |

##### `invoke(PhaseConfig, PhaserState, LoweringContext, IrModuleFragment)` (`org.jetbrains.kotlin.backend.common.phaser.PerformByIrFilePhase`)

| Change |      Delta |      % |            Size | Samples | Callee                                                     | Location                                                |
| -----: | ---------: | -----: | --------------: | ------: | ---------------------------------------------------------- | ------------------------------------------------------- |
| +70.0% | +6.999 MiB | 100.0% | 10 MiB → 17 MiB | 20 → 34 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase` |

##### `copyOf(byte[], int)` (`java.util.Arrays`)

| Change |      Delta |             % |                Size | Samples | Callee    | Location           |
| -----: | ---------: | ------------: | ------------------: | ------: | --------- | ------------------ |
| -11.4% | -5.313 MiB | 25.7% → 22.1% | 46.5 MiB → 41.2 MiB | 93 → 82 | `clone()` | `java.lang.Object` |

##### `toByteArray()` (`java.io.ByteArrayOutputStream`)

| Change |      Delta |      % |              Size |   Samples | Callee                | Location           |
| -----: | ---------: | -----: | ----------------: | --------: | --------------------- | ------------------ |
|  +3.0% | +5.186 MiB | 100.0% | 172 MiB → 177 MiB | 344 → 354 | `copyOf(byte[], int)` | `java.util.Arrays` |

##### `replace(byte[], char, char)` (`java.lang.StringLatin1`)

|  Change |      Delta |             % |          Size | Samples | Callee           | Location                       |
| ------: | ---------: | ------------: | ------------: | ------: | ---------------- | ------------------------------ |
| +300.0% | +2.999 MiB | 40.0% → 53.3% | 1 MiB → 4 MiB |   2 → 8 | `newArray(long)` | `java.lang.StringConcatHelper` |

##### `replace(char, char)` (`java.lang.String`)

|  Change |      Delta |      % |              Size | Samples | Callee                        | Location                 |
| ------: | ---------: | -----: | ----------------: | ------: | ----------------------------- | ------------------------ |
| +200.0% | +4.999 MiB | 100.0% | 2.5 MiB → 7.5 MiB |  5 → 15 | `replace(byte[], char, char)` | `java.lang.StringLatin1` |

##### `getValue()` (`kotlin.SynchronizedLazyImpl`)

|  Change |          Delta |             % |              Size | Samples | Callee     | Location                                                                                    |
| ------: | -------------: | ------------: | ----------------: | ------: | ---------- | ------------------------------------------------------------------------------------------- |
| +100.0% |     +2.499 MiB | 14.3% → 22.7% |   2.5 MiB → 5 MiB |  5 → 10 | `invoke()` | `org.jetbrains.kotlin.builtins.DefaultBuiltIns$$Lambda.0x000000f001758000`                  |
| +133.3% |     +1.999 MiB |  8.6% → 15.9% | 1.5 MiB → 3.5 MiB |   3 → 7 | `invoke()` | `org.jetbrains.kotlin.fir.java.declarations.FirJavaClass$$Lambda.0x000000f001614db0`        |
| +200.0% | +1,023.998 KiB |   2.9% → 6.8% | 512 KiB → 1.5 MiB |   1 → 3 | `invoke()` | `org.jetbrains.kotlin.fir.deserialization.PackagePartsCacheData$$Lambda.0x000000f0015de5d8` |
| removed | -1,023.998 KiB |   5.7% → 0.0% |       1 MiB → 0 B |   2 → 0 | `invoke()` | `org.jetbrains.kotlin.fir.backend.Fir2IrTypeConverter$$Lambda.0x0000007001786ec8`           |
|     new | +1,023.998 KiB |   0.0% → 4.5% |       0 B → 1 MiB |   0 → 2 | `invoke()` | `org.jetbrains.kotlin.fir.scopes.impl.FirEnumEntriesSupport$$Lambda.0x000000f001454470`     |

##### `allocateUninitializedArray(Class, int)` (`jdk.internal.misc.Unsafe`)

| Change |        Delta |           % |          Size | Samples | Callee                                    | Location                   |
| -----: | -----------: | ----------: | ------------: | ------: | ----------------------------------------- | -------------------------- |
|    new | +511.999 KiB | 0.0% → 9.1% | 0 B → 512 KiB |   0 → 1 | `allocateUninitializedArray0(Class, int)` | `jdk.internal.misc.Unsafe` |

##### `newArray(long)` (`java.lang.StringConcatHelper`)

|  Change |      Delta |      % |              Size | Samples | Callee                                   | Location                   |
| ------: | ---------: | -----: | ----------------: | ------: | ---------------------------------------- | -------------------------- |
| +266.7% | +3.999 MiB | 100.0% | 1.5 MiB → 5.5 MiB |  3 → 11 | `allocateUninitializedArray(Class, int)` | `jdk.internal.misc.Unsafe` |

##### `grow(int)` (`java.util.ArrayList`)

|  Change |      Delta |             % |          Size | Samples | Callee                  | Location           |
| ------: | ---------: | ------------: | ------------: | ------: | ----------------------- | ------------------ |
| +200.0% | +1.999 MiB | 14.3% → 27.3% | 1 MiB → 3 MiB |   2 → 6 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `loadClass(String, boolean)` (`java.lang.ClassLoader`)

|  Change |        Delta |             % |            Size | Samples | Callee                       | Location                                                 |
| ------: | -----------: | ------------: | --------------: | ------: | ---------------------------- | -------------------------------------------------------- |
|  +58.3% |   +3.499 MiB | 66.7% → 76.0% | 6 MiB → 9.5 MiB | 12 → 19 | `findClass(String)`          | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |
| removed | -511.999 KiB |   5.6% → 0.0% |   512 KiB → 0 B |   1 → 0 | `loadClass(String, boolean)` | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |
|  +20.0% | +511.999 KiB | 27.8% → 24.0% | 2.5 MiB → 3 MiB |   5 → 6 | `findClass(String)`          | `java.net.URLClassLoader`                                |

##### `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` (`java.lang.ClassLoader`)

|  Change |        Delta |             % |            Size | Samples | Callee              | Location                                                 |
| ------: | -----------: | ------------: | --------------: | ------: | ------------------- | -------------------------------------------------------- |
| +150.0% |   +1.499 MiB | 66.7% → 50.0% | 1 MiB → 2.5 MiB |   2 → 5 | `loadClass(String)` | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |
|     new | +511.999 KiB |  0.0% → 10.0% |   0 B → 512 KiB |   0 → 1 | `loadClass(String)` | `java.lang.ClassLoader`                                  |

##### `toString()` (`java.lang.StringBuilder`)

| Change |      Delta |             % |             Size | Samples | Callee                  | Location           |
| -----: | ---------: | ------------: | ---------------: | ------: | ----------------------- | ------------------ |
| +31.3% | +2.499 MiB | 94.1% → 87.5% | 8 MiB → 10.5 MiB | 16 → 21 | `<init>(StringBuilder)` | `java.lang.String` |

##### `grow()` (`java.util.ArrayList`)

| Change |      Delta |      % |             Size | Samples | Callee      | Location              |
| -----: | ---------: | -----: | ---------------: | ------: | ----------- | --------------------- |
| +50.0% | +3.499 MiB | 100.0% | 7 MiB → 10.5 MiB | 14 → 21 | `grow(int)` | `java.util.ArrayList` |

##### `readLOC()` (`java.util.zip.ZipInputStream`)

|  Change |        Delta |             % |            Size | Samples | Callee                        | Location                       |
| ------: | -----------: | ------------: | --------------: | ------: | ----------------------------- | ------------------------------ |
|  +66.7% |   +1.999 MiB | 42.9% → 50.0% |   3 MiB → 5 MiB |  6 → 10 | `toStringUTF8(byte[], int)`   | `java.util.zip.ZipCoder`       |
| +100.0% | +512.015 KiB |  7.1% → 10.0% | 512 KiB → 1 MiB |   1 → 2 | `readFully(byte[], int, int)` | `java.util.zip.ZipInputStream` |
|  +14.3% | +511.999 KiB | 50.0% → 40.0% | 3.5 MiB → 4 MiB |   7 → 8 | `createZipEntry(String)`      | `java.util.zip.ZipInputStream` |

##### `getNextEntry()` (`java.util.zip.ZipInputStream`)

| Change |  Delta |      % |           Size | Samples | Callee      | Location                       |
| -----: | -----: | -----: | -------------: | ------: | ----------- | ------------------------------ |
| +42.9% | +3 MiB | 100.0% | 7 MiB → 10 MiB | 14 → 20 | `readLOC()` | `java.util.zip.ZipInputStream` |

##### `defineClass(String, byte[], int, int, ProtectionDomain)` (`java.lang.ClassLoader`)

|  Change |        Delta |             % |            Size | Samples | Callee                                                                          | Location                |
| ------: | -----------: | ------------: | --------------: | ------: | ------------------------------------------------------------------------------- | ----------------------- |
| +233.3% |   +3.499 MiB | 30.0% → 62.5% | 1.5 MiB → 5 MiB |  3 → 10 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader` |
|  -33.3% | -511.999 KiB | 30.0% → 12.5% | 1.5 MiB → 1 MiB |   3 → 2 | `preDefineClass(String, ProtectionDomain)`                                      | `java.lang.ClassLoader` |
|     new | +511.999 KiB |   0.0% → 6.3% |   0 B → 512 KiB |   0 → 1 | `defineClassSourceLocation(ProtectionDomain)`                                   | `java.lang.ClassLoader` |

##### `addConstantMemberReference(int, String, String, String)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

| Change |        Delta |              % |            Size | Samples | Callee                                   | Location                                     |
| -----: | -----------: | -------------: | --------------: | ------: | ---------------------------------------- | -------------------------------------------- |
|    new |   +1.499 MiB |   0.0% → 37.5% |   0 B → 1.5 MiB |   0 → 3 | `addConstantClass(String)`               | `jdk.internal.org.objectweb.asm.SymbolTable` |
| +50.0% | +511.999 KiB | 100.0% → 37.5% | 1 MiB → 1.5 MiB |   2 → 3 | `addConstantNameAndType(String, String)` | `jdk.internal.org.objectweb.asm.SymbolTable` |

##### `addConstantMethodref(String, String, String, boolean)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

|  Change |      Delta |      % |              Size | Samples | Callee                                                    | Location                                     |
| ------: | ---------: | -----: | ----------------: | ------: | --------------------------------------------------------- | -------------------------------------------- |
| +600.0% | +2.999 MiB | 100.0% | 512 KiB → 3.5 MiB |   1 → 7 | `addConstantMemberReference(int, String, String, String)` | `jdk.internal.org.objectweb.asm.SymbolTable` |

##### `add(Object)` (`java.util.HashSet`)

| Change |      Delta |      % |              Size | Samples | Callee                | Location            |
| -----: | ---------: | -----: | ----------------: | ------: | --------------------- | ------------------- |
| +54.5% | +2.999 MiB | 100.0% | 5.5 MiB → 8.5 MiB | 11 → 17 | `put(Object, Object)` | `java.util.HashMap` |

##### `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.backend.common.phaser.PerformByIrFilePhase`)

| Change |      Delta |      % |            Size | Samples | Callee                                                                | Location                                                          |
| -----: | ---------: | -----: | --------------: | ------: | --------------------------------------------------------------------- | ----------------------------------------------------------------- |
| +70.0% | +6.999 MiB | 100.0% | 10 MiB → 17 MiB | 20 → 34 | `invoke(PhaseConfig, PhaserState, LoweringContext, IrModuleFragment)` | `org.jetbrains.kotlin.backend.common.phaser.PerformByIrFilePhase` |

##### `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)

| Change |       Delta |             % |                Size |   Samples | Callee       | Location                                                |
| -----: | ----------: | ------------: | ------------------: | --------: | ------------ | ------------------------------------------------------- |
| -22.9% | -14.999 MiB | 99.2% → 99.0% | 65.5 MiB → 50.5 MiB | 131 → 101 | `generate()` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |

##### `invokeCodegen(JvmIrCodegenFactory$CodegenInput)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)

| Change |       Delta |      % |            Size |   Samples | Callee                                                   | Location                                               |
| -----: | ----------: | -----: | --------------: | --------: | -------------------------------------------------------- | ------------------------------------------------------ |
| -22.7% | -14.999 MiB | 100.0% | 66 MiB → 51 MiB | 132 → 102 | `generateFile(JvmBackendContext, IrFile, List, boolean)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory` |

##### `runCodegen$org_jetbrains_kotlin_cli_jvm(JvmIrCodegenFactory$CodegenInput, GenerationState, JvmIrCodegenFactory, BaseDiagnosticsCollector, CompilerConfiguration, boolean)` (`org.jetbrains.kotlin.cli.jvm.compiler.KotlinToJVMBytecodeCompiler`)

| Change |       Delta |      % |            Size |   Samples | Callee                                            | Location                                               |
| -----: | ----------: | -----: | --------------: | --------: | ------------------------------------------------- | ------------------------------------------------------ |
| -22.7% | -14.999 MiB | 100.0% | 66 MiB → 51 MiB | 132 → 102 | `invokeCodegen(JvmIrCodegenFactory$CodegenInput)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory` |

##### `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

| Change |       Delta |             % |              Size |  Samples | Callee                                     | Location                                                |
| -----: | ----------: | ------------: | ----------------: | -------: | ------------------------------------------ | ------------------------------------------------------- |
| -19.5% | -11.499 MiB | 90.1% → 94.1% | 59 MiB → 47.5 MiB | 118 → 95 | `generateMethod(IrFunction, SourceMapper)` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |
| -58.3% |  -3.499 MiB |   9.2% → 5.0% |   6 MiB → 2.5 MiB |   12 → 5 | `generateAnnotations()`                    | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |

##### `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|  Change |      Delta |             % |              Size | Samples | Callee                                                                   | Location                                                |
| ------: | ---------: | ------------: | ----------------: | ------: | ------------------------------------------------------------------------ | ------------------------------------------------------- |
|  -27.1% | -6.499 MiB | 40.7% → 36.8% | 24 MiB → 17.5 MiB | 48 → 35 | `accept(MethodVisitor)`                                                  | `org.jetbrains.org.objectweb.asm.tree.MethodNode`       |
|  -10.4% | -3.499 MiB | 56.8% → 63.2% | 33.5 MiB → 30 MiB | 67 → 60 | `generateMethodNode(IrFunction)`                                         | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |
| removed | -1.499 MiB |   2.5% → 0.0% |     1.5 MiB → 0 B |   3 → 0 | `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` | `org.jetbrains.kotlin.codegen.DelegatingClassBuilder`   |

##### `executePhase(JvmFir2IrPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`)

| Change |       Delta |             % |            Size |   Samples | Callee                                                                                                                                                                                                             | Location                                                            |
| -----: | ----------: | ------------: | --------------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------- |
| -22.7% | -14.999 MiB | 78.6% → 68.9% | 66 MiB → 51 MiB | 132 → 102 | `runCodegen$org_jetbrains_kotlin_cli_jvm(JvmIrCodegenFactory$CodegenInput, GenerationState, JvmIrCodegenFactory, BaseDiagnosticsCollector, CompilerConfiguration, boolean)`                                        | `org.jetbrains.kotlin.cli.jvm.compiler.KotlinToJVMBytecodeCompiler` |
| +27.8% |  +4.999 MiB | 21.4% → 31.1% | 18 MiB → 23 MiB |   36 → 46 | `runLowerings$org_jetbrains_kotlin_cli_jvm(Project, CompilerConfiguration, ModuleDescriptor, Module, JvmIrCodegenFactory, JvmIrCodegenFactory$BackendInput, BaseDiagnosticsCollector, FirJvmBackendClassResolver)` | `org.jetbrains.kotlin.cli.jvm.compiler.KotlinToJVMBytecodeCompiler` |

##### `executePhase(PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`)

| Change |      Delta |      % |            Size |   Samples | Callee                                    | Location                                                        |
| -----: | ---------: | -----: | --------------: | --------: | ----------------------------------------- | --------------------------------------------------------------- |
| -11.9% | -9.999 MiB | 100.0% | 84 MiB → 74 MiB | 168 → 148 | `executePhase(JvmFir2IrPipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase` |

##### `transformResult(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.impl.FirReturnExpressionImpl`)

| Change |        Delta |             % |            Size | Samples | Callee                              | Location                                                 |
| -----: | -----------: | ------------: | --------------: | ------: | ----------------------------------- | -------------------------------------------------------- |
| -19.4% |   -6.999 MiB | 75.0% → 75.3% | 36 MiB → 29 MiB | 72 → 58 | `transform(FirTransformer, Object)` | `org.jetbrains.kotlin.fir.expressions.FirFunctionCall`   |
| -25.0% |   -2.999 MiB | 25.0% → 23.4% |  12 MiB → 9 MiB | 24 → 18 | `transform(FirTransformer, Object)` | `org.jetbrains.kotlin.fir.expressions.FirWhenExpression` |
|    new | +511.999 KiB |   0.0% → 1.3% |   0 B → 512 KiB |   0 → 1 | `transform(FirTransformer, Object)` | `org.jetbrains.kotlin.fir.expressions.FirTryExpression`  |

##### `transformChildren(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.impl.FirReturnExpressionImpl`)

| Change |      Delta |      % |              Size | Samples | Callee                                      | Location                                                            |
| -----: | ---------: | -----: | ----------------: | ------: | ------------------------------------------- | ------------------------------------------------------------------- |
| -19.8% | -9.499 MiB | 100.0% | 48 MiB → 38.5 MiB | 96 → 77 | `transformResult(FirTransformer, Object)`   | `org.jetbrains.kotlin.fir.expressions.impl.FirReturnExpressionImpl` |
| -19.8% | -9.499 MiB | 100.0% | 48 MiB → 38.5 MiB | 96 → 77 | `transformChildren(FirTransformer, Object)` | `org.jetbrains.kotlin.fir.expressions.impl.FirReturnExpressionImpl` |

##### `transformExpression(FirExpression, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`)

| Change |      Delta |      % |              Size | Samples | Callee                                      | Location                                                            |
| -----: | ---------: | -----: | ----------------: | ------: | ------------------------------------------- | ------------------------------------------------------------------- |
| -19.8% | -9.499 MiB | 100.0% | 48 MiB → 38.5 MiB | 96 → 77 | `transformChildren(FirTransformer, Object)` | `org.jetbrains.kotlin.fir.expressions.impl.FirReturnExpressionImpl` |

##### `transformExpression(FirExpression, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`)

| Change |      Delta |      % |              Size | Samples | Callee                                               | Location                                                                                      |
| -----: | ---------: | -----: | ----------------: | ------: | ---------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| -19.8% | -9.499 MiB | 100.0% | 48 MiB → 38.5 MiB | 96 → 77 | `transformExpression(FirExpression, ResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer` |

##### `transformJump(FirJump, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirControlFlowStatementsResolveTransformer`)

| Change |      Delta |             % |              Size | Samples | Callee                                               | Location                                                                                                 |
| -----: | ---------: | ------------: | ----------------: | ------: | ---------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| -19.8% | -9.499 MiB | 99.0% → 98.7% | 48 MiB → 38.5 MiB | 96 → 77 | `transformExpression(FirExpression, ResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |

##### `transformReturnExpression(FirReturnExpression, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirControlFlowStatementsResolveTransformer`)

| Change |      Delta |      % |              Size | Samples | Callee                                   | Location                                                                                                |
| -----: | ---------: | -----: | ----------------: | ------: | ---------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| -19.6% | -9.499 MiB | 100.0% | 48.5 MiB → 39 MiB | 97 → 78 | `transformJump(FirJump, ResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirControlFlowStatementsResolveTransformer` |

##### `transformReturnExpression(FirReturnExpression, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`)

| Change |      Delta |      % |              Size | Samples | Callee                                                           | Location                                                                                                |
| -----: | ---------: | -----: | ----------------: | ------: | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| -19.6% | -9.499 MiB | 100.0% | 48.5 MiB → 39 MiB | 97 → 78 | `transformReturnExpression(FirReturnExpression, ResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirControlFlowStatementsResolveTransformer` |

##### `transformReturnExpression(FirReturnExpression, Object)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`)

| Change |      Delta |      % |              Size | Samples | Callee                                                           | Location                                                                                                 |
| -----: | ---------: | -----: | ----------------: | ------: | ---------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| -19.6% | -9.499 MiB | 100.0% | 48.5 MiB → 39 MiB | 97 → 78 | `transformReturnExpression(FirReturnExpression, ResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |

##### `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.FirReturnExpression`)

| Change |      Delta |      % |              Size | Samples | Callee                                                   | Location                                                                                                 |
| -----: | ---------: | -----: | ----------------: | ------: | -------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| -19.6% | -9.499 MiB | 100.0% | 48.5 MiB → 39 MiB | 97 → 78 | `transformReturnExpression(FirReturnExpression, Object)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |

##### `transform(String, MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.transformer.CompositeMethodTransformer`)

|  Change |      Delta |             % |            Size | Samples | Callee                          | Location                                                                                           |
| ------: | ---------: | ------------: | --------------: | ------: | ------------------------------- | -------------------------------------------------------------------------------------------------- |
| removed | -3.499 MiB |  14.3% → 0.0% |   3.5 MiB → 0 B |   7 → 0 | `transform(String, MethodNode)` | `org.jetbrains.kotlin.codegen.optimization.RedundantCheckCastEliminationMethodTransformer`         |
|  -33.3% | -1.499 MiB | 18.4% → 20.0% | 4.5 MiB → 3 MiB |   9 → 6 | `transform(String, MethodNode)` | `org.jetbrains.kotlin.codegen.optimization.fixStack.FixStackMethodTransformer`                     |
|  -33.3% | -1.499 MiB | 18.4% → 20.0% | 4.5 MiB → 3 MiB |   9 → 6 | `transform(String, MethodNode)` | `org.jetbrains.kotlin.codegen.optimization.boxing.PopBackwardPropagationTransformer`               |
|  -42.9% | -1.499 MiB | 14.3% → 13.3% | 3.5 MiB → 2 MiB |   7 → 4 | `transform(String, MethodNode)` | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer` |
|  -37.5% | -1.499 MiB | 16.3% → 16.7% | 4 MiB → 2.5 MiB |   8 → 5 | `transform(String, MethodNode)` | `org.jetbrains.kotlin.codegen.optimization.ConstantConditionEliminationMethodTransformer`          |

##### `mergeControlFlowEdge(int, Frame, boolean)` (`org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer`)

| Change |      Delta |             % |            Size | Samples | Callee                                          | Location                                                        |
| -----: | ---------: | ------------: | --------------: | ------: | ----------------------------------------------- | --------------------------------------------------------------- |
| -50.0% | -4.999 MiB | 71.4% → 90.9% |  10 MiB → 5 MiB | 20 → 10 | `fullMergeControlFlowEdge(int, Frame, boolean)` | `org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer` |
| -87.5% | -3.499 MiB |  28.6% → 9.1% | 4 MiB → 512 KiB |   8 → 1 | `fastMergeControlFlowEdge(int, Frame, boolean)` | `org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer` |

##### `processControlFlowEdge(Frame, AbstractInsnNode, int, boolean)` (`org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer`)

| Change |      Delta |      % |             Size | Samples | Callee                                      | Location                                                        |
| -----: | ---------: | -----: | ---------------: | ------: | ------------------------------------------- | --------------------------------------------------------------- |
| -60.7% | -8.499 MiB | 100.0% | 14 MiB → 5.5 MiB | 28 → 11 | `mergeControlFlowEdge(int, Frame, boolean)` | `org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer` |

##### `processControlFlowEdge$default(FastAnalyzer, Frame, AbstractInsnNode, int, boolean, int, Object)` (`org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer`)

| Change |      Delta |      % |             Size | Samples | Callee                                                          | Location                                                        |
| -----: | ---------: | -----: | ---------------: | ------: | --------------------------------------------------------------- | --------------------------------------------------------------- |
| -60.7% | -8.499 MiB | 100.0% | 14 MiB → 5.5 MiB | 28 → 11 | `processControlFlowEdge(Frame, AbstractInsnNode, int, boolean)` | `org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer` |

##### `getValue()` (`kotlin.UnsafeLazyImpl`)

|  Change |          Delta |             % |               Size | Samples | Callee     | Location                                                                                                         |
| ------: | -------------: | ------------: | -----------------: | ------: | ---------- | ---------------------------------------------------------------------------------------------------------------- |
|  -57.1% |     -5.999 MiB | 67.7% → 52.9% | 10.5 MiB → 4.5 MiB |  21 → 9 | `invoke()` | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver$$Lambda.0x000000f00168dcf8`                              |
|  -66.7% | -1,023.998 KiB |   9.7% → 5.9% |  1.5 MiB → 512 KiB |   3 → 1 | `invoke()` | `org.jetbrains.kotlin.fir.resolve.calls.candidate.Candidate$$Lambda.0x000000f001675768`                          |
|  -28.6% | -1,023.998 KiB | 22.6% → 29.4% |  3.5 MiB → 2.5 MiB |   7 → 5 | `invoke()` | `org.jetbrains.kotlin.load.java.structure.impl.classFiles.BinaryClassSignatureParser$$Lambda.0x000000f001610928` |
| removed |   -511.999 KiB |   3.2% → 0.0% |      512 KiB → 0 B |   1 → 0 | `invoke()` | `org.jetbrains.kotlin.fir.lightTree.fir.ValueParameter$$Lambda.0x000000700152ba98`                               |
| removed |   -511.999 KiB |   3.2% → 0.0% |      512 KiB → 0 B |   1 → 0 | `invoke()` | `org.jetbrains.kotlin.load.java.structure.impl.classFiles.BinaryJavaAnnotation$$Lambda.0x00000070013a6d38`       |

##### `<init>(byte[], int, int, Charset)` (`java.lang.String`)

| Change |      Delta |      % |              Size | Samples | Callee                              | Location           |
| -----: | ---------: | -----: | ----------------: | ------: | ----------------------------------- | ------------------ |
| -61.5% | -3.999 MiB | 100.0% | 6.5 MiB → 2.5 MiB |  13 → 5 | `<init>(Charset, byte[], int, int)` | `java.lang.String` |

##### `next()` (`kotlin.sequences.TransformingSequence$iterator$1`)

|  Change |        Delta |             % |              Size | Samples | Callee           | Location                                                                                              |
| ------: | -----------: | ------------: | ----------------: | ------: | ---------------- | ----------------------------------------------------------------------------------------------------- |
|  -80.0% |   -1.999 MiB | 71.4% → 50.0% | 2.5 MiB → 512 KiB |   5 → 1 | `invoke(Object)` | `org.jetbrains.kotlin.cli.jvm.modules.CliJavaModuleFinder$systemModules$1`                            |
| removed | -511.999 KiB |  14.3% → 0.0% |     512 KiB → 0 B |   1 → 0 | `invoke(Object)` | `org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper$Companion$$Lambda.0x0000007001899770` |

##### `calcNext()` (`kotlin.sequences.FilteringSequence$iterator$1`)

| Change |      Delta |      % |            Size | Samples | Callee   | Location                                           |
| -----: | ---------: | -----: | --------------: | ------: | -------- | -------------------------------------------------- |
| -71.4% | -2.499 MiB | 100.0% | 3.5 MiB → 1 MiB |   7 → 2 | `next()` | `kotlin.sequences.TransformingSequence$iterator$1` |

##### `hasNext()` (`kotlin.sequences.FilteringSequence$iterator$1`)

| Change |      Delta |      % |            Size | Samples | Callee       | Location                                        |
| -----: | ---------: | -----: | --------------: | ------: | ------------ | ----------------------------------------------- |
| -71.4% | -2.499 MiB | 100.0% | 3.5 MiB → 1 MiB |   7 → 2 | `calcNext()` | `kotlin.sequences.FilteringSequence$iterator$1` |

##### `<init>(Charset, byte[], int, int)` (`java.lang.String`)

| Change |      Delta |      % |            Size | Samples | Callee                          | Location           |
| -----: | ---------: | -----: | --------------: | ------: | ------------------------------- | ------------------ |
| -35.7% | -2.499 MiB | 100.0% | 7 MiB → 4.5 MiB |  14 → 9 | `copyOfRange(byte[], int, int)` | `java.util.Arrays` |

##### `copyOfRange(byte[], int, int)` (`java.util.Arrays`)

| Change |      Delta |             % |              Size | Samples | Callee                              | Location           |
| -----: | ---------: | ------------: | ----------------: | ------: | ----------------------------------- | ------------------ |
| -23.9% | -5.499 MiB | 92.0% → 76.1% | 23 MiB → 17.5 MiB | 46 → 35 | `copyOfRangeByte(byte[], int, int)` | `java.util.Arrays` |

##### `getValue()` (`kotlin.SafePublicationLazyImpl`)

|  Change |          Delta |             % |                Size | Samples | Callee     | Location                                                                                                   |
| ------: | -------------: | ------------: | ------------------: | ------: | ---------- | ---------------------------------------------------------------------------------------------------------- |
|  -30.3% |     -4.999 MiB | 73.3% → 56.1% | 16.5 MiB → 11.5 MiB | 33 → 23 | `invoke()` | `org.jetbrains.kotlin.fir.java.deserialization.JvmBinaryAnnotationDeserializer$$Lambda.0x000000f0015dc9b0` |
| +150.0% |     +1.499 MiB |  4.4% → 12.2% |     1 MiB → 2.5 MiB |   2 → 5 | `invoke()` | `org.jetbrains.kotlin.fir.scopes.impl.FirClassDeclaredMemberScopeImpl$$Lambda.0x000000f00162ce28`          |
|     new | +1,023.998 KiB |   0.0% → 4.9% |         0 B → 1 MiB |   0 → 2 | `invoke()` | `org.jetbrains.kotlin.fir.java.declarations.FirJavaClass$$Lambda.0x000000f001615220`                       |
|  -11.1% |   -511.999 KiB | 20.0% → 19.5% |     4.5 MiB → 4 MiB |   9 → 8 | `invoke()` | `kotlin.reflect.jvm.internal.DescriptorKProperty$$Lambda$0`                                                |
| +100.0% |   +511.999 KiB |   2.2% → 4.9% |     512 KiB → 1 MiB |   1 → 2 | `invoke()` | `org.jetbrains.kotlin.fir.resolve.calls.ImplicitReceiverValue$$Lambda.0x000000f00165b428`                  |

##### `convertArgumentTypes(MethodType)` (`java.lang.invoke.InnerClassLambdaMetafactory$ForwardingMethodGenerator`)

| Change |      Delta |      % |              Size | Samples | Callee                             | Location                                       |
| -----: | ---------: | -----: | ----------------: | ------: | ---------------------------------- | ---------------------------------------------- |
| -80.0% | -1.999 MiB | 100.0% | 2.5 MiB → 512 KiB |   5 → 1 | `convertType(Class, Class, Class)` | `java.lang.invoke.TypeConvertingMethodAdapter` |

##### `toArray()` (`java.util.ArrayList`)

|  Change |      Delta |             % |        Size | Samples | Callee                  | Location           |
| ------: | ---------: | ------------: | ----------: | ------: | ----------------------- | ------------------ |
| removed | -1.999 MiB | 100.0% → 0.0% | 2 MiB → 0 B |   4 → 0 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `make(MemberName)` (`java.lang.invoke.DirectMethodHandle`)

|  Change |          Delta |              % |          Size | Samples | Callee                      | Location                              |
| ------: | -------------: | -------------: | ------------: | ------: | --------------------------- | ------------------------------------- |
|  -50.0% | -1,023.998 KiB | 80.0% → 100.0% | 2 MiB → 1 MiB |   4 → 2 | `makeAllocator(MemberName)` | `java.lang.invoke.DirectMethodHandle` |
| removed |   -511.999 KiB |   20.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `make(Class, MemberName)`   | `java.lang.invoke.DirectMethodHandle` |

##### `findConstructor(Class, MethodType)` (`java.lang.invoke.MethodHandles$Lookup`)

|  Change |          Delta |              % |          Size | Samples | Callee                                           | Location                                |
| ------: | -------------: | -------------: | ------------: | ------: | ------------------------------------------------ | --------------------------------------- |
|  -50.0% | -1,023.998 KiB | 80.0% → 100.0% | 2 MiB → 1 MiB |   4 → 2 | `getDirectConstructor(Class, MemberName)`        | `java.lang.invoke.MethodHandles$Lookup` |
| removed |   -511.999 KiB |   20.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `resolveOrFail(byte, Class, String, MethodType)` | `java.lang.invoke.MethodHandles$Lookup` |

##### `buildCallSite()` (`java.lang.invoke.InnerClassLambdaMetafactory`)

| Change |      Delta |             % |            Size | Samples | Callee                               | Location                                |
| -----: | ---------: | ------------: | --------------: | ------: | ------------------------------------ | --------------------------------------- |
| -60.0% | -1.499 MiB | 21.7% → 10.0% | 2.5 MiB → 1 MiB |   5 → 2 | `findConstructor(Class, MethodType)` | `java.lang.invoke.MethodHandles$Lookup` |

##### `parseAnnotation2(ByteBuffer, ConstantPool, Class, boolean, Class[])` (`sun.reflect.annotation.AnnotationParser`)

|  Change |          Delta |              % |              Size | Samples | Callee                                                     | Location                                  |
| ------: | -------------: | -------------: | ----------------: | ------: | ---------------------------------------------------------- | ----------------------------------------- |
|  -66.7% | -1,023.998 KiB | 75.0% → 100.0% | 1.5 MiB → 512 KiB |   3 → 1 | `annotationForMap(Class, Map)`                             | `sun.reflect.annotation.AnnotationParser` |
| removed |   -511.999 KiB |   25.0% → 0.0% |     512 KiB → 0 B |   1 → 0 | `parseMemberValue(Class, ByteBuffer, ConstantPool, Class)` | `sun.reflect.annotation.AnnotationParser` |

##### `parseAnnotations2(byte[], ConstantPool, Class, Class[])` (`sun.reflect.annotation.AnnotationParser`)

| Change |      Delta |      % |            Size | Samples | Callee                                                                | Location                                  |
| -----: | ---------: | -----: | --------------: | ------: | --------------------------------------------------------------------- | ----------------------------------------- |
| -75.0% | -1.499 MiB | 100.0% | 2 MiB → 512 KiB |   4 → 1 | `parseAnnotation2(ByteBuffer, ConstantPool, Class, boolean, Class[])` | `sun.reflect.annotation.AnnotationParser` |

##### `parseAnnotations(byte[], ConstantPool, Class)` (`sun.reflect.annotation.AnnotationParser`)

| Change |      Delta |      % |            Size | Samples | Callee                                                    | Location                                  |
| -----: | ---------: | -----: | --------------: | ------: | --------------------------------------------------------- | ----------------------------------------- |
| -75.0% | -1.499 MiB | 100.0% | 2 MiB → 512 KiB |   4 → 1 | `parseAnnotations2(byte[], ConstantPool, Class, Class[])` | `sun.reflect.annotation.AnnotationParser` |

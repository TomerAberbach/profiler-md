# Sampling profile diff

Collected 1,307 samples → 1,331 samples (+24 samples, +1.8%).

| Category          |  Change | Delta |             % |   Samples |
| ----------------- | ------: | ----: | ------------: | --------: |
| Compiler          |   +1.5% |    +9 | 46.1% → 45.9% | 602 → 611 |
| Native            |   -0.4% |    -2 | 38.7% → 37.9% | 506 → 504 |
| Ours              |   +0.7% |    +1 | 10.4% → 10.3% | 136 → 137 |
| Standard library  |  +25.5% |   +13 |   3.9% → 4.8% |   51 → 64 |
| JIT               |  +36.4% |    +4 |   0.8% → 1.1% |   11 → 15 |
| Garbage collector | removed |    -1 |   0.1% → 0.0% |     1 → 0 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |           % | Samples | Function                                                                                                                                                 | Location                         |
| ------: | ----: | ----------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| +157.1% |   +11 | 0.5% → 1.4% |  7 → 18 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `libjvm.dylib`                   |
|  +38.1% |    +8 | 1.6% → 2.2% | 21 → 29 | `SymbolTable::do_lookup`                                                                                                                                 | `libjvm.dylib`                   |
| +116.7% |    +7 | 0.5% → 1.0% |  6 → 13 | `LinearScanWalker::free_collect_inactive_fixed`                                                                                                          | `libjvm.dylib`                   |
|  +58.3% |    +7 | 0.9% → 1.4% | 12 → 19 | `PhaseChaitin::build_ifg_physical`                                                                                                                       | `libjvm.dylib`                   |
| +233.3% |    +7 | 0.2% → 0.8% |  3 → 10 | `trampoline_stub_Relocation::get_trampoline_for`                                                                                                         | `libjvm.dylib`                   |
| +200.0% |    +6 | 0.2% → 0.7% |   3 → 9 | `PhaseIdealLoop::Dominators`                                                                                                                             | `libjvm.dylib`                   |
|  +23.8% |    +5 | 1.6% → 2.0% | 21 → 26 | `tlv_get_addr`                                                                                                                                           | `libdyld.dylib`                  |
|  +83.3% |    +5 | 0.5% → 0.8% |  6 → 11 | `PhaseChaitin::elide_copy`                                                                                                                               | `libjvm.dylib`                   |
| +500.0% |    +5 | 0.1% → 0.5% |   1 → 6 | `I2C/C2I adapters(0xb)`                                                                                                                                  | `<unknown>`                      |
| +500.0% |    +5 | 0.1% → 0.5% |   1 → 6 | `ClassFileParser::skip_over_field_signature`                                                                                                             | `libjvm.dylib`                   |
| +133.3% |    +4 | 0.2% → 0.5% |   3 → 7 | `Matcher::xform`                                                                                                                                         | `libjvm.dylib`                   |
|  +25.0% |    +4 | 1.2% → 1.5% | 16 → 20 | `PhaseChaitin::Split`                                                                                                                                    | `libjvm.dylib`                   |
| +133.3% |    +4 | 0.2% → 0.5% |   3 → 7 | `sys_icache_invalidate`                                                                                                                                  | `libsystem_platform.dylib`       |
| +200.0% |    +4 | 0.2% → 0.5% |   2 → 6 | `fwd_copy_again`                                                                                                                                         | `libjvm.dylib`                   |
|     new |    +4 | 0.0% → 0.3% |   0 → 4 | `sanitizeStackTrace(Throwable)`                                                                                                                          | `kotlin.jvm.internal.Intrinsics` |
|     new |    +4 | 0.0% → 0.3% |   0 → 4 | `MachSpillCopyNode::ideal_reg`                                                                                                                           | `libjvm.dylib`                   |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `GraphBuilder::invoke`                                                                                                                                   | `libjvm.dylib`                   |
|  +37.5% |    +3 | 0.6% → 0.8% |  8 → 11 | `PhaseLive::add_liveout`                                                                                                                                 | `libjvm.dylib`                   |
| +300.0% |    +3 | 0.1% → 0.3% |   1 → 4 | `Type::cmp`                                                                                                                                              | `libjvm.dylib`                   |
|  +60.0% |    +3 | 0.4% → 0.6% |   5 → 8 | `_platform_memmove`                                                                                                                                      | `libsystem_platform.dylib`       |

##### Compiler

|  Change | Delta |           % | Samples | Function                                        | Location       |
| ------: | ----: | ----------: | ------: | ----------------------------------------------- | -------------- |
| +116.7% |    +7 | 0.5% → 1.0% |  6 → 13 | `LinearScanWalker::free_collect_inactive_fixed` | `libjvm.dylib` |
|  +58.3% |    +7 | 0.9% → 1.4% | 12 → 19 | `PhaseChaitin::build_ifg_physical`              | `libjvm.dylib` |
| +200.0% |    +6 | 0.2% → 0.7% |   3 → 9 | `PhaseIdealLoop::Dominators`                    | `libjvm.dylib` |
|  +83.3% |    +5 | 0.5% → 0.8% |  6 → 11 | `PhaseChaitin::elide_copy`                      | `libjvm.dylib` |
| +133.3% |    +4 | 0.2% → 0.5% |   3 → 7 | `Matcher::xform`                                | `libjvm.dylib` |
|  +25.0% |    +4 | 1.2% → 1.5% | 16 → 20 | `PhaseChaitin::Split`                           | `libjvm.dylib` |
|     new |    +4 | 0.0% → 0.3% |   0 → 4 | `MachSpillCopyNode::ideal_reg`                  | `libjvm.dylib` |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `GraphBuilder::invoke`                          | `libjvm.dylib` |
|  +37.5% |    +3 | 0.6% → 0.8% |  8 → 11 | `PhaseLive::add_liveout`                        | `libjvm.dylib` |
| +300.0% |    +3 | 0.1% → 0.3% |   1 → 4 | `Type::cmp`                                     | `libjvm.dylib` |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `PhaseIdealLoop::compute_lca_of_uses`           | `libjvm.dylib` |
| +300.0% |    +3 | 0.1% → 0.3% |   1 → 4 | `Node::disconnect_inputs`                       | `libjvm.dylib` |
| +300.0% |    +3 | 0.1% → 0.3% |   1 → 4 | `PhaseChaitin::build_ifg_virtual`               | `libjvm.dylib` |
| +150.0% |    +3 | 0.2% → 0.4% |   2 → 5 | `IndexSet::initialize`                          | `libjvm.dylib` |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `LinearScan::init_compute_oop_maps`             | `libjvm.dylib` |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `PhaseCFG::insert_anti_dependences`             | `libjvm.dylib` |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `TypeOopPtr::eq`                                | `libjvm.dylib` |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `PhiNode::pinned`                               | `libjvm.dylib` |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `Scheduling::AddNodeToBundle`                   | `libjvm.dylib` |
|  +66.7% |    +2 | 0.2% → 0.4% |   3 → 5 | `NodeHash::hash_find_insert`                    | `libjvm.dylib` |

##### Native

|  Change | Delta |           % | Samples | Function                                                                                                                                                 | Location                   |
| ------: | ----: | ----------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| +157.1% |   +11 | 0.5% → 1.4% |  7 → 18 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `libjvm.dylib`             |
|  +38.1% |    +8 | 1.6% → 2.2% | 21 → 29 | `SymbolTable::do_lookup`                                                                                                                                 | `libjvm.dylib`             |
| +233.3% |    +7 | 0.2% → 0.8% |  3 → 10 | `trampoline_stub_Relocation::get_trampoline_for`                                                                                                         | `libjvm.dylib`             |
|  +23.8% |    +5 | 1.6% → 2.0% | 21 → 26 | `tlv_get_addr`                                                                                                                                           | `libdyld.dylib`            |
| +500.0% |    +5 | 0.1% → 0.5% |   1 → 6 | `ClassFileParser::skip_over_field_signature`                                                                                                             | `libjvm.dylib`             |
| +133.3% |    +4 | 0.2% → 0.5% |   3 → 7 | `sys_icache_invalidate`                                                                                                                                  | `libsystem_platform.dylib` |
| +200.0% |    +4 | 0.2% → 0.5% |   2 → 6 | `fwd_copy_again`                                                                                                                                         | `libjvm.dylib`             |
|  +60.0% |    +3 | 0.4% → 0.6% |   5 → 8 | `_platform_memmove`                                                                                                                                      | `libsystem_platform.dylib` |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `constantPoolHandle::~constantPoolHandle`                                                                                                                | `libjvm.dylib`             |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `PhiResolver::create_node`                                                                                                                               | `libjvm.dylib`             |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `Interval::add_use_pos`                                                                                                                                  | `libjvm.dylib`             |
|  +28.6% |    +2 | 0.5% → 0.7% |   7 → 9 | `InstanceKlass::find_method_index`                                                                                                                       | `libjvm.dylib`             |
|  +66.7% |    +2 | 0.2% → 0.4% |   3 → 5 | `Arena::contains`                                                                                                                                        | `libjvm.dylib`             |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `Dependencies::encode_content_bytes`                                                                                                                     | `libjvm.dylib`             |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `resource_allocate_bytes`                                                                                                                                | `libjvm.dylib`             |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `nmethod::fix_oop_relocations`                                                                                                                           | `libjvm.dylib`             |
| +100.0% |    +2 | 0.2% → 0.3% |   2 → 4 | `G1ParScanThreadState::do_copy_to_survivor_space`                                                                                                        | `libjvm.dylib`             |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>`                                                   | `libjvm.dylib`             |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_region`                                                                       | `libjvm.dylib`             |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `G1CMTask::drain_local_queue`                                                                                                                            | `libjvm.dylib`             |

##### Ours

| Change | Delta |           % | Samples | Function                                                                                                                                                                     | Location                                                                                                        |
| -----: | ----: | ----------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
|    new |    +2 | 0.0% → 0.2% |   0 → 2 | `prepareLightTree()`                                                                                                                                                         | `com.intellij.lang.impl.PsiBuilderImpl`                                                                         |
|    new |    +2 | 0.0% → 0.2% |   0 → 2 | `performLexing()`                                                                                                                                                            | `com.intellij.lang.impl.TokenSequence$Builder`                                                                  |
|    new |    +2 | 0.0% → 0.2% |   0 → 2 | `visitProperty(FirProperty, Void)`                                                                                                                                           | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor`                               |
|    new |    +2 | 0.0% → 0.2% |   0 → 2 | `execute(AbstractInsnNode, Interpreter)`                                                                                                                                     | `org.jetbrains.org.objectweb.asm.tree.analysis.Frame`                                                           |
|    new |    +2 | 0.0% → 0.2% |   0 → 2 | `parametersCount(TypeConstructorMarker)`                                                                                                                                     | `org.jetbrains.kotlin.fir.types.ConeTypeContext`                                                                |
|    new |    +2 | 0.0% → 0.2% |   0 → 2 | `check(CheckerContext, DiagnosticReporter, FirDeclaration)`                                                                                                                  | `org.jetbrains.kotlin.fir.analysis.checkers.declaration.FirExpectConsistencyChecker`                            |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `convertLoopOrIfBody(LighterASTNode)`                                                                                                                                        | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirExpressionBuilder`                                 |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `hasPackage(FqName)`                                                                                                                                                         | `org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider`                             |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `measureSideTime$org_jetbrains_kotlin_compiler_common(PhaseSideType, Function0)`                                                                                             | `org.jetbrains.kotlin.util.PerformanceManager`                                                                  |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `getTopLevelCallableNamesInPackage(FqName)`                                                                                                                                  | `org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider`                                       |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `transformQualifiedAccessExpression(FirQualifiedAccessExpression, ResolutionMode)`                                                                                           | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`                   |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `invoke(Object, Object)`                                                                                                                                                     | `org.jetbrains.kotlin.fir.resolve.calls.tower.DispatchReceiverMemberScopeTowerLevel$$Lambda.0x000000a80166bec0` |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `findPostponedArgumentWithFixedInputTypes(List)`                                                                                                                             | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintSystemCompletionContext`                     |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `runCompletion(ConstraintSystemCompletionContext, ConstraintSystemCompletionMode, List, ConeKotlinType, ResolutionContext, ConstraintSystemCompleter$PostponedAtomAnalyzer)` | `org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter`                                          |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `transformFunctionContent(FirFunction, ResolutionMode, boolean)`                                                                                                             | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer`                  |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `completeIsSubTypeOf(TypeCheckerState, TypeSystemContext, KotlinTypeMarker, KotlinTypeMarker, boolean)`                                                                      | `org.jetbrains.kotlin.types.AbstractTypeChecker`                                                                |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `transformResult(FirTransformer, Object)`                                                                                                                                    | `org.jetbrains.kotlin.fir.expressions.impl.FirReturnExpressionImpl`                                             |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `processFunctionsByName(Name, Function1)`                                                                                                                                    | `org.jetbrains.kotlin.fir.scopes.impl.FirPackageMemberScope`                                                    |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `findClass(JavaClassFinder$Request, GlobalSearchScope)`                                                                                                                      | `org.jetbrains.kotlin.resolve.jvm.KotlinJavaPsiFacade$CliFinder`                                                |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `transformTypeRef(FirTypeRef, ResolutionMode)`                                                                                                                               | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`        |

##### Standard library

|  Change | Delta |           % | Samples | Function                                                                                                    | Location                                                         |
| ------: | ----: | ----------: | ------: | ----------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
|     new |    +4 | 0.0% → 0.3% |   0 → 4 | `sanitizeStackTrace(Throwable)`                                                                             | `kotlin.jvm.internal.Intrinsics`                                 |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `indexOf(int, int)`                                                                                         | `java.lang.String`                                               |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `copyOf(byte[], int)`                                                                                       | `java.util.Arrays`                                               |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `defineClass(boolean, Object)`                                                                              | `java.lang.invoke.MethodHandles$Lookup$ClassDefiner`             |
| +100.0% |    +1 | 0.1% → 0.2% |   1 → 2 | `checkIndex(int, int)`                                                                                      | `java.lang.String`                                               |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `newInvokeSpecial(Object, Object)`                                                                          | `java.lang.invoke.DirectMethodHandle$Holder`                     |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `linkToTargetMethod(Object, Object)`                                                                        | `java.lang.invoke.Invokers$Holder`                               |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `putVal(Object, Object, boolean)`                                                                           | `java.util.concurrent.ConcurrentHashMap`                         |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `getValue()`                                                                                                | `kotlin.UnsafeLazyImpl`                                          |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `areEqual(Object, Object)`                                                                                  | `kotlin.jvm.internal.Intrinsics`                                 |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `toMap(Iterable)`                                                                                           | `kotlin.collections.MapsKt__MapsKt`                              |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `getNode(Object)`                                                                                           | `java.util.HashMap`                                              |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `checkFromIndexSize(int, int, int, BiFunction)`                                                             | `jdk.internal.util.Preconditions`                                |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `getNextEntry()`                                                                                            | `java.util.zip.ZipInputStream`                                   |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `checkAndAddEntry(int, int, ZipCoder)`                                                                      | `java.util.zip.ZipFile$Source`                                   |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `<init>(int, int, String, String, int)`                                                                     | `jdk.internal.org.objectweb.asm.SymbolTable$Entry`               |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `equals(MethodType)`                                                                                        | `java.lang.invoke.MethodType`                                    |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `parseUnknownField(FieldSet, MessageLite, CodedInputStream, CodedOutputStream, ExtensionRegistryLite, int)` | `kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite` |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `hashCode()`                                                                                                | `java.lang.String`                                               |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `getInputStream(ZipEntry)`                                                                                  | `java.util.jar.JarFile`                                          |

##### JIT

|  Change | Delta |           % | Samples | Function                | Location    |
| ------: | ----: | ----------: | ------: | ----------------------- | ----------- |
| +500.0% |    +5 | 0.1% → 0.5% |   1 → 6 | `I2C/C2I adapters(0xb)` | `<unknown>` |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `itable stub`           | `<unknown>` |
| +100.0% |    +1 | 0.1% → 0.2% |   1 → 2 | `vtable stub`           | `<unknown>` |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `zero_blocks`           | `<unknown>` |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |           % | Samples | Function                                                                              | Location                   |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------------------------------- | -------------------------- |
|  -42.9% |    -9 | 1.6% → 0.9% | 21 → 12 | `__psynch_cvwait`                                                                     | `libsystem_kernel.dylib`   |
|  -66.7% |    -6 | 0.7% → 0.2% |   9 → 3 | `MultiNode::is_CFG`                                                                   | `libjvm.dylib`             |
|  -27.3% |    -6 | 1.7% → 1.2% | 22 → 16 | `IndexSetIterator::advance_and_next`                                                  | `libjvm.dylib`             |
| removed |    -5 | 0.4% → 0.0% |   5 → 0 | `GraphBuilder::iterate_bytecodes_for_block`                                           | `libjvm.dylib`             |
|  -33.3% |    -4 | 0.9% → 0.6% |  12 → 8 | `_platform_memset`                                                                    | `libsystem_platform.dylib` |
|  -66.7% |    -4 | 0.5% → 0.2% |   6 → 2 | `LinearScan::build_intervals`                                                         | `libjvm.dylib`             |
|  -80.0% |    -4 | 0.4% → 0.1% |   5 → 1 | `Node_Array::insert`                                                                  | `libjvm.dylib`             |
|  -66.7% |    -4 | 0.5% → 0.2% |   6 → 2 | `Unique_Node_List::remove`                                                            | `libjvm.dylib`             |
|  -57.1% |    -4 | 0.5% → 0.2% |   7 → 3 | `semaphore_wait_trap`                                                                 | `libsystem_kernel.dylib`   |
|   -7.4% |    -4 | 4.1% → 3.8% | 54 → 50 | `inflate_fast`                                                                        | `libzip.dylib`             |
|  -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `_platform_memcmp`                                                                    | `libsystem_platform.dylib` |
|  -60.0% |    -3 | 0.4% → 0.2% |   5 → 2 | `PhaseIterGVN::transform_old`                                                         | `libjvm.dylib`             |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `_platform_memchr`                                                                    | `libsystem_platform.dylib` |
|  -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `PhaseCFG::partial_latency_of_defs`                                                   | `libjvm.dylib`             |
|  -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `RegMask::is_aligned_pairs`                                                           | `libjvm.dylib`             |
|  -60.0% |    -3 | 0.4% → 0.2% |   5 → 2 | `DebugInformationRecorder::describe_scope`                                            | `libjvm.dylib`             |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `NullCheckEliminator::iterate_one`                                                    | `libjvm.dylib`             |
|  -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `Dictionary::find`                                                                    | `libjvm.dylib`             |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `ConcurrentHashTable<G1CodeRootSetHashTableConfig, (MEMFLAGS)5>::internal_grow_range` | `libjvm.dylib`             |
|  -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `OopMapSort::sort`                                                                    | `libjvm.dylib`             |

##### Compiler

|  Change | Delta |           % | Samples | Function                                           | Location       |
| ------: | ----: | ----------: | ------: | -------------------------------------------------- | -------------- |
|  -66.7% |    -6 | 0.7% → 0.2% |   9 → 3 | `MultiNode::is_CFG`                                | `libjvm.dylib` |
|  -27.3% |    -6 | 1.7% → 1.2% | 22 → 16 | `IndexSetIterator::advance_and_next`               | `libjvm.dylib` |
| removed |    -5 | 0.4% → 0.0% |   5 → 0 | `GraphBuilder::iterate_bytecodes_for_block`        | `libjvm.dylib` |
|  -66.7% |    -4 | 0.5% → 0.2% |   6 → 2 | `LinearScan::build_intervals`                      | `libjvm.dylib` |
|  -80.0% |    -4 | 0.4% → 0.1% |   5 → 1 | `Node_Array::insert`                               | `libjvm.dylib` |
|  -66.7% |    -4 | 0.5% → 0.2% |   6 → 2 | `Unique_Node_List::remove`                         | `libjvm.dylib` |
|  -60.0% |    -3 | 0.4% → 0.2% |   5 → 2 | `PhaseIterGVN::transform_old`                      | `libjvm.dylib` |
|  -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `PhaseCFG::partial_latency_of_defs`                | `libjvm.dylib` |
|  -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `RegMask::is_aligned_pairs`                        | `libjvm.dylib` |
|  -60.0% |    -3 | 0.4% → 0.2% |   5 → 2 | `DebugInformationRecorder::describe_scope`         | `libjvm.dylib` |
|  -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `OopMapSort::sort`                                 | `libjvm.dylib` |
|  -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `Node_Backward_Iterator::next`                     | `libjvm.dylib` |
|  -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `IndexSet::IndexSet`                               | `libjvm.dylib` |
|  -66.7% |    -2 | 0.2% → 0.1% |   3 → 1 | `DebugInformationRecorder::serialize_scope_values` | `libjvm.dylib` |
|  -40.0% |    -2 | 0.4% → 0.2% |   5 → 3 | `LIR_OpVisitState::visit`                          | `libjvm.dylib` |
|  -66.7% |    -2 | 0.2% → 0.1% |   3 → 1 | `PhaseCCP::push_child_nodes_to_worklist`           | `libjvm.dylib` |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `PhaseIdealLoop::get_late_ctrl_with_anti_dep`      | `libjvm.dylib` |
|  -20.0% |    -2 | 0.8% → 0.6% |  10 → 8 | `PhaseAggressiveCoalesce::insert_copies`           | `libjvm.dylib` |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `BlockBegin::iterate_preorder`                     | `libjvm.dylib` |
|  -66.7% |    -2 | 0.2% → 0.1% |   3 → 1 | `Assembler::ld_st2`                                | `libjvm.dylib` |

##### Native

|  Change | Delta |           % | Samples | Function                                                                              | Location                   |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------------------------------- | -------------------------- |
|  -42.9% |    -9 | 1.6% → 0.9% | 21 → 12 | `__psynch_cvwait`                                                                     | `libsystem_kernel.dylib`   |
|  -33.3% |    -4 | 0.9% → 0.6% |  12 → 8 | `_platform_memset`                                                                    | `libsystem_platform.dylib` |
|  -57.1% |    -4 | 0.5% → 0.2% |   7 → 3 | `semaphore_wait_trap`                                                                 | `libsystem_kernel.dylib`   |
|   -7.4% |    -4 | 4.1% → 3.8% | 54 → 50 | `inflate_fast`                                                                        | `libzip.dylib`             |
|  -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `_platform_memcmp`                                                                    | `libsystem_platform.dylib` |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `_platform_memchr`                                                                    | `libsystem_platform.dylib` |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `NullCheckEliminator::iterate_one`                                                    | `libjvm.dylib`             |
|  -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `Dictionary::find`                                                                    | `libjvm.dylib`             |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `ConcurrentHashTable<G1CodeRootSetHashTableConfig, (MEMFLAGS)5>::internal_grow_range` | `libjvm.dylib`             |
|  -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `LinkResolver::check_method_loader_constraints`                                       | `libjvm.dylib`             |
|  -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `G1ParScanThreadState::trim_queue_to_threshold`                                       | `libjvm.dylib`             |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `CompiledMethod::cleanup_inline_caches_impl`                                          | `libjvm.dylib`             |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `ClassVerifier::verify_invoke_instructions`                                           | `libjvm.dylib`             |
|  -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `SignatureStream::next`                                                               | `libjvm.dylib`             |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `semaphore_signal_trap`                                                               | `libsystem_kernel.dylib`   |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `pthread_mutex_unlock`                                                                | `libsystem_pthread.dylib`  |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `GrowableArrayWithAllocator<int, GrowableArray<int>>::expand_to`                      | `libjvm.dylib`             |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `Dependencies::assert_common_1`                                                       | `libjvm.dylib`             |
|  -50.0% |    -2 | 0.3% → 0.2% |   4 → 2 | `SymbolTable::lookup_shared`                                                          | `libjvm.dylib`             |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `BitMap::set_difference`                                                              | `libjvm.dylib`             |

##### Ours

|  Change | Delta |           % | Samples | Function                                                                                                                                                                                                                                                                                                                                                     | Location                                                                           |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------- |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `toArgumentToParameterMapping()`                                                                                                                                                                                                                                                                                                                             | `org.jetbrains.kotlin.fir.resolve.calls.stages.ArgumentMapping`                    |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `prepareType(KotlinTypeMarker)`                                                                                                                                                                                                                                                                                                                              | `org.jetbrains.kotlin.fir.types.ConeTypePreparator`                                |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `isDataClassCopy(FirCallableSymbol, FirClassSymbol, FirSession)`                                                                                                                                                                                                                                                                                             | `org.jetbrains.kotlin.fir.PrivateToThisUtilsKt`                                    |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)`                                                                                                                                                                                                                                                                                                  | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$1`                                    |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `balanceWhiteSpaces()`                                                                                                                                                                                                                                                                                                                                       | `com.intellij.lang.impl.PsiBuilderImpl`                                            |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `mark()`                                                                                                                                                                                                                                                                                                                                                     | `com.intellij.lang.impl.PsiBuilderAdapter`                                         |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `<init>(Project, PsiFile, ParserDefinition, Lexer, CharTable, CharSequence, ASTNode, CharSequence, PsiBuilderImpl$MyTreeStructure, Object)`                                                                                                                                                                                                                  | `com.intellij.lang.impl.PsiBuilderImpl`                                            |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `collectSegments(List, LighterASTNode)`                                                                                                                                                                                                                                                                                                                      | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirDeclarationBuilder`   |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `convertCallExpression(LighterASTNode)`                                                                                                                                                                                                                                                                                                                      | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirExpressionBuilder`    |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `convertPropertyDeclaration$lambda$1(LightTreeRawFirDeclarationBuilder, LighterASTNode)`                                                                                                                                                                                                                                                                     | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirDeclarationBuilder`   |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `get(int)`                                                                                                                                                                                                                                                                                                                                                   | `com.intellij.util.containers.IntArrayList`                                        |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `transformTypeRef(FirTypeRef, TypeResolutionConfiguration)`                                                                                                                                                                                                                                                                                                  | `org.jetbrains.kotlin.fir.resolve.transformers.FirSpecificTypeResolverTransformer` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `toByteString()`                                                                                                                                                                                                                                                                                                                                             | `org.jetbrains.kotlin.protobuf.ByteString$Output`                                  |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `<init>(CodedInputStream, ExtensionRegistryLite)`                                                                                                                                                                                                                                                                                                            | `org.jetbrains.kotlin.metadata.ProtoBuf$TypeAlias`                                 |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `readMethod(ClassVisitor, Context, int)`                                                                                                                                                                                                                                                                                                                     | `org.jetbrains.org.objectweb.asm.ClassReader`                                      |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `deserializeClassToSymbol(ClassId, ProtoBuf$Class, FirRegularClassSymbol, NameResolver, FirSession, FirModuleData, AnnotationDeserializer, FirKDocDeserializer, FirTypeDeserializer$FlexibleTypeFactory, FirScopeProvider, SerializerExtensionProtocol, FirDeserializationContext, DeserializedContainerSource, FirDeclarationOrigin, Function2, Function2)` | `org.jetbrains.kotlin.fir.deserialization.ClassDeserializationKt`                  |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `findAndDeserializeClass(ClassId, FirDeserializationContext)`                                                                                                                                                                                                                                                                                                | `org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider`   |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `getValue(Object, Object)`                                                                                                                                                                                                                                                                                                                                   | `org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCacheWithPostCompute`              |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `getOrigin()`                                                                                                                                                                                                                                                                                                                                                | `org.jetbrains.kotlin.fir.declarations.impl.FirDefaultSetterValueParameter`        |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `initFields()`                                                                                                                                                                                                                                                                                                                                               | `org.jetbrains.kotlin.metadata.ProtoBuf$Annotation$Argument$Value`                 |

##### Standard library

|  Change | Delta |           % | Samples | Function                                                                                                                 | Location                                               |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------ |
|  -33.3% |    -2 | 0.5% → 0.3% |   6 → 4 | `checkNotNullParameter(Object, String)`                                                                                  | `kotlin.jvm.internal.Intrinsics`                       |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `inflate(byte[], int, int)`                                                                                              | `java.util.zip.Inflater`                               |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `putVal(int, Object, Object, boolean, boolean)`                                                                          | `java.util.HashMap`                                    |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `nextNode()`                                                                                                             | `java.util.HashMap$HashIterator`                       |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `fill(int[], int)`                                                                                                       | `java.util.Arrays`                                     |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `initCEN(int, ZipCoder)`                                                                                                 | `java.util.zip.ZipFile$Source`                         |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `preparedLambdaForm(MemberName, boolean)`                                                                                | `java.lang.invoke.DirectMethodHandle`                  |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `hasNext()`                                                                                                              | `java.util.Collections$1`                              |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `get(int)`                                                                                                               | `java.util.ImmutableCollections$List12`                |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `putExceptionTable(Handler, ByteVector)`                                                                                 | `jdk.internal.org.objectweb.asm.Handler`               |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `getProtectionDomain(CodeSource)`                                                                                        | `java.security.SecureClassLoader`                      |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `toSet(Iterable)`                                                                                                        | `kotlin.collections.CollectionsKt___CollectionsKt`     |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `removeNode(int, Object, Object, boolean, boolean)`                                                                      | `java.util.HashMap`                                    |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `addProxyMethod(Method, Class)`                                                                                          | `java.lang.reflect.ProxyGenerator`                     |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `isNullConversion(Class, Class, boolean)`                                                                                | `sun.invoke.util.VerifyType`                           |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `<init>(MethodHandles$Lookup, MethodType, String, MethodType, MethodHandle, MethodType, boolean, Class[], MethodType[])` | `java.lang.invoke.AbstractValidatingLambdaMetafactory` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `isSafeToCache(MethodType)`                                                                                              | `java.lang.invoke.MethodHandle`                        |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `copy()`                                                                                                                 | `java.lang.reflect.Method`                             |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `makeDirectories(String)`                                                                                                | `jdk.internal.jimage.ImageReader$SharedImageReader`    |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `allocateInstance(Class)`                                                                                                | `jdk.internal.misc.Unsafe`                             |

##### JIT

|  Change | Delta |           % | Samples | Function                   | Location    |
| ------: | ----: | ----------: | ------: | -------------------------- | ----------- |
|  -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `I2C/C2I adapters(0xbba)`  | `<unknown>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `I2C/C2I adapters(0xbbbb)` | `<unknown>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `I2C/C2I adapters(0x)`     | `<unknown>` |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|   Change | Delta |             % |   Samples | Function                                                                                           | Location                                                                                                                  |
| -------: | ----: | ------------: | --------: | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
|      new |  +360 |  0.0% → 27.0% |   0 → 360 | `invokeStatic(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$DMH.0x000000a801008000`                                                                      |
|      new |  +360 |  0.0% → 27.0% |   0 → 360 | `invoke(Object, Object, Object)`                                                                   | `java.lang.invoke.LambdaForm$MH.0x000000a801009400`                                                                       |
| +3300.0% |   +66 |   0.2% → 5.1% |    2 → 68 | `invoke()`                                                                                         | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x000000a8016b3090` |
|    +9.1% |   +25 | 21.0% → 22.5% | 275 → 300 | `Compile::Code_Gen`                                                                                | `libjvm.dylib`                                                                                                            |
|    +2.7% |   +21 | 60.6% → 61.1% | 792 → 813 | `CompileBroker::invoke_compiler_on_method`                                                         | `libjvm.dylib`                                                                                                            |
|    +5.9% |   +20 | 25.9% → 27.0% | 339 → 359 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`                                                                   |
|    +5.9% |   +20 | 25.9% → 27.0% | 339 → 359 | `doMain(CLICompiler, String[])`                                                                    | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`                                                                   |
|    +5.6% |   +19 | 26.1% → 27.0% | 341 → 360 | `main(String[])`                                                                                   | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`                                                                    |
|    +5.6% |   +19 | 26.1% → 27.0% | 341 → 360 | `main(String[])`                                                                                   | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                                                                              |
|    +5.6% |   +19 | 26.1% → 27.0% | 341 → 360 | `invokeExact_MT(Object, Object, Object, Object)`                                                   | `java.lang.invoke.Invokers$Holder`                                                                                        |
|    +5.6% |   +19 | 26.1% → 27.0% | 341 → 360 | `invokeImpl(Object, Object[])`                                                                     | `jdk.internal.reflect.DirectMethodHandleAccessor`                                                                         |
|    +5.6% |   +19 | 26.1% → 27.0% | 341 → 360 | `invoke(Object, Object[])`                                                                         | `jdk.internal.reflect.DirectMethodHandleAccessor`                                                                         |
|    +5.6% |   +19 | 26.1% → 27.0% | 341 → 360 | `invoke(Object, Object[])`                                                                         | `java.lang.reflect.Method`                                                                                                |
|    +5.7% |   +19 | 25.5% → 26.4% | 333 → 352 | `exec(MessageCollector, Services, CommonCompilerArguments)`                                        | `org.jetbrains.kotlin.cli.common.CLICompiler`                                                                             |
|    +5.3% |   +18 | 25.9% → 26.8% | 339 → 357 | `exec(PrintStream, Services, MessageRenderer, String[])`                                           | `org.jetbrains.kotlin.cli.common.CLICompiler`                                                                             |
|    +5.3% |   +18 | 25.9% → 26.8% | 339 → 357 | `exec(PrintStream, MessageRenderer, String[])`                                                     | `org.jetbrains.kotlin.cli.common.CLICompiler`                                                                             |
|    +5.3% |   +18 | 25.9% → 26.8% | 339 → 357 | `doMainNoExit(CLICompiler, String[], MessageRenderer)`                                             | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`                                                                   |
|    +5.6% |   +18 | 24.8% → 25.7% | 324 → 342 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)`                              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                                                                              |
|    +5.6% |   +18 | 24.8% → 25.7% | 324 → 342 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)`                             | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                                                                              |
|    +5.6% |   +18 | 24.8% → 25.7% | 324 → 342 | `execImpl(MessageCollector, Services, CommonCompilerArguments)`                                    | `org.jetbrains.kotlin.cli.common.CLICompiler`                                                                             |

##### Compiler

|  Change | Delta |             % |   Samples | Function                                        | Location       |
| ------: | ----: | ------------: | --------: | ----------------------------------------------- | -------------- |
|   +9.1% |   +25 | 21.0% → 22.5% | 275 → 300 | `Compile::Code_Gen`                             | `libjvm.dylib` |
|   +2.7% |   +21 | 60.6% → 61.1% | 792 → 813 | `CompileBroker::invoke_compiler_on_method`      | `libjvm.dylib` |
|  +10.2% |   +17 | 12.7% → 13.7% | 166 → 183 | `PhaseChaitin::Register_Allocate`               | `libjvm.dylib` |
|   +3.1% |   +17 | 42.0% → 42.5% | 549 → 566 | `Compile::Compile`                              | `libjvm.dylib` |
|   +2.0% |   +16 | 62.0% → 62.1% | 810 → 826 | `CompileBroker::compiler_thread_loop`           | `libjvm.dylib` |
|   +2.5% |   +14 | 42.2% → 42.5% | 552 → 566 | `C2Compiler::compile_method`                    | `libjvm.dylib` |
|  +66.7% |   +10 |   1.1% → 1.9% |   15 → 25 | `LIR_Assembler::add_call_info`                  | `libjvm.dylib` |
|  +56.3% |    +9 |   1.2% → 1.9% |   16 → 25 | `LinearScanWalker::alloc_free_reg`              | `libjvm.dylib` |
|  +18.6% |    +8 |   3.3% → 3.8% |   43 → 51 | `Compilation::emit_code_body`                   | `libjvm.dylib` |
|  +41.2% |    +7 |   1.3% → 1.8% |   17 → 24 | `PhaseLive::compute`                            | `libjvm.dylib` |
| +116.7% |    +7 |   0.5% → 1.0% |    6 → 13 | `LinearScanWalker::free_collect_inactive_fixed` | `libjvm.dylib` |
|  +29.2% |    +7 |   1.8% → 2.3% |   24 → 31 | `LinearScanWalker::activate_current`            | `libjvm.dylib` |
|  +29.2% |    +7 |   1.8% → 2.3% |   24 → 31 | `PhaseOutput::Output`                           | `libjvm.dylib` |
| +233.3% |    +7 |   0.2% → 0.8% |    3 → 10 | `Type::cmp`                                     | `libjvm.dylib` |
|   +2.9% |    +6 | 16.0% → 16.2% | 209 → 215 | `Compilation::compile_java_method`              | `libjvm.dylib` |
|   +9.1% |    +6 |   5.0% → 5.4% |   66 → 72 | `LinearScan::do_linear_scan`                    | `libjvm.dylib` |
|  +19.4% |    +6 |   2.4% → 2.8% |   31 → 37 | `IntervalWalker::walk_to`                       | `libjvm.dylib` |
|   +9.4% |    +6 |   4.9% → 5.3% |   64 → 70 | `PhaseIterGVN::optimize`                        | `libjvm.dylib` |
|  +10.3% |    +6 |   4.4% → 4.8% |   58 → 64 | `PhaseIterGVN::transform_old`                   | `libjvm.dylib` |
|  +50.0% |    +6 |   0.9% → 1.4% |   12 → 18 | `DebugInformationRecorder::describe_scope`      | `libjvm.dylib` |

##### Native

|  Change | Delta |             % |   Samples | Function                                                                                                                                                 | Location                  |
| ------: | ----: | ------------: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
|   +1.7% |   +14 |         62.1% | 812 → 826 | `JavaThread::thread_main_inner`                                                                                                                          | `libjvm.dylib`            |
| +157.1% |   +11 |   0.5% → 1.4% |    7 → 18 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `libjvm.dylib`            |
|   +1.1% |   +10 | 67.2% → 66.7% | 878 → 888 | `Thread::call_run`                                                                                                                                       | `libjvm.dylib`            |
|   +1.1% |   +10 | 67.2% → 66.7% | 878 → 888 | `thread_native_entry`                                                                                                                                    | `libjvm.dylib`            |
|   +1.1% |   +10 | 67.3% → 66.8% | 879 → 889 | `_pthread_start`                                                                                                                                         | `libsystem_pthread.dylib` |
|   +1.1% |   +10 | 67.3% → 66.8% | 879 → 889 | `thread_start`                                                                                                                                           | `libsystem_pthread.dylib` |
| +333.3% |   +10 |   0.2% → 1.0% |    3 → 13 | `trampoline_stub_Relocation::get_trampoline_for`                                                                                                         | `libjvm.dylib`            |
| +333.3% |   +10 |   0.2% → 1.0% |    3 → 13 | `NativeCall::set_destination_mt_safe`                                                                                                                    | `libjvm.dylib`            |
|  +57.1% |    +8 |   1.1% → 1.7% |   14 → 22 | `CodeEmitInfo::record_debug_info`                                                                                                                        | `libjvm.dylib`            |
|  +38.1% |    +8 |   1.6% → 2.2% |   21 → 29 | `SymbolTable::do_lookup`                                                                                                                                 | `libjvm.dylib`            |
|  +58.3% |    +7 |   0.9% → 1.4% |   12 → 19 | `IRScopeDebugInfo::record_debug_info`                                                                                                                    | `libjvm.dylib`            |
|  +33.3% |    +7 |   1.6% → 2.1% |   21 → 28 | `G1EvacuateRegionsBaseTask::work`                                                                                                                        | `libjvm.dylib`            |
|  +60.0% |    +6 |   0.8% → 1.2% |   10 → 16 | `HeapRegionManager::par_iterate`                                                                                                                         | `libjvm.dylib`            |
|  +60.0% |    +6 |   0.8% → 1.2% |   10 → 16 | `G1RebuildRSAndScrubTask::work`                                                                                                                          | `libjvm.dylib`            |
|  +75.0% |    +6 |   0.6% → 1.1% |    8 → 14 | `SharedRuntime::resolve_sub_helper`                                                                                                                      | `libjvm.dylib`            |
|  +75.0% |    +6 |   0.6% → 1.1% |    8 → 14 | `SharedRuntime::resolve_helper`                                                                                                                          | `libjvm.dylib`            |
| +200.0% |    +6 |   0.2% → 0.7% |     3 → 9 | `CompiledIC::internal_set_ic_destination`                                                                                                                | `libjvm.dylib`            |
|     new |    +6 |   0.0% → 0.5% |     0 → 6 | `TaskTerminator::offer_termination`                                                                                                                      | `libjvm.dylib`            |
|     new |    +6 |   0.0% → 0.5% |     0 → 6 | `G1ParEvacuateFollowersClosure::offer_termination`                                                                                                       | `libjvm.dylib`            |
|  +23.8% |    +5 |   1.6% → 2.0% |   21 → 26 | `tlv_get_addr`                                                                                                                                           | `libdyld.dylib`           |

##### Ours

|   Change | Delta |             % |   Samples | Function                                                                                                                                      | Location                                                                                                                  |
| -------: | ----: | ------------: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| +3300.0% |   +66 |   0.2% → 5.1% |    2 → 68 | `invoke()`                                                                                                                                    | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x000000a8016b3090` |
|    +5.9% |   +20 | 25.9% → 27.0% | 339 → 359 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)`                                            | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`                                                                   |
|    +5.9% |   +20 | 25.9% → 27.0% | 339 → 359 | `doMain(CLICompiler, String[])`                                                                                                               | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`                                                                   |
|    +5.6% |   +19 | 26.1% → 27.0% | 341 → 360 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`                                                                    |
|    +5.6% |   +19 | 26.1% → 27.0% | 341 → 360 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                                                                              |
|    +5.7% |   +19 | 25.5% → 26.4% | 333 → 352 | `exec(MessageCollector, Services, CommonCompilerArguments)`                                                                                   | `org.jetbrains.kotlin.cli.common.CLICompiler`                                                                             |
|    +5.3% |   +18 | 25.9% → 26.8% | 339 → 357 | `exec(PrintStream, Services, MessageRenderer, String[])`                                                                                      | `org.jetbrains.kotlin.cli.common.CLICompiler`                                                                             |
|    +5.3% |   +18 | 25.9% → 26.8% | 339 → 357 | `exec(PrintStream, MessageRenderer, String[])`                                                                                                | `org.jetbrains.kotlin.cli.common.CLICompiler`                                                                             |
|    +5.3% |   +18 | 25.9% → 26.8% | 339 → 357 | `doMainNoExit(CLICompiler, String[], MessageRenderer)`                                                                                        | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`                                                                   |
|    +5.6% |   +18 | 24.8% → 25.7% | 324 → 342 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)`                                                                         | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                                                                              |
|    +5.6% |   +18 | 24.8% → 25.7% | 324 → 342 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)`                                                                        | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                                                                              |
|    +5.6% |   +18 | 24.8% → 25.7% | 324 → 342 | `execImpl(MessageCollector, Services, CommonCompilerArguments)`                                                                               | `org.jetbrains.kotlin.cli.common.CLICompiler`                                                                             |
|    +5.2% |   +17 | 24.8% → 25.6% | 324 → 341 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)`                                           | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`                                                                   |
|    +5.2% |   +17 | 24.8% → 25.6% | 324 → 341 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`                                                                   |
|    +5.2% |   +17 | 24.8% → 25.6% | 324 → 341 | `execute(CommonCompilerArguments, Services, MessageCollector)`                                                                                | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`                                                                   |
|    +5.3% |   +17 | 24.6% → 25.4% | 321 → 338 | `phaseBody(PipelineContext, PipelineArtifact)`                                                                                                | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`                                                                         |
|    +5.3% |   +17 | 24.6% → 25.4% | 321 → 338 | `phaseBody(LoggingContext, Object)`                                                                                                           | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`                                                                         |
|    +5.3% |   +17 | 24.6% → 25.4% | 321 → 338 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)`                                                                                    | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`                                                                   |
|    +5.3% |   +17 | 24.6% → 25.4% | 321 → 338 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)`                                                                                    | `org.jetbrains.kotlin.backend.common.phaser.CompositePhase`                                                               |
|    +5.3% |   +17 | 24.6% → 25.4% | 321 → 338 | `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)`                                                                          | `org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`                                                                      |

##### Standard library

|  Change | Delta |             % |   Samples | Function                                                                      | Location                                              |
| ------: | ----: | ------------: | --------: | ----------------------------------------------------------------------------- | ----------------------------------------------------- |
|     new |  +360 |  0.0% → 27.0% |   0 → 360 | `invokeStatic(Object, Object)`                                                | `java.lang.invoke.LambdaForm$DMH.0x000000a801008000`  |
|     new |  +360 |  0.0% → 27.0% |   0 → 360 | `invoke(Object, Object, Object)`                                              | `java.lang.invoke.LambdaForm$MH.0x000000a801009400`   |
|   +5.6% |   +19 | 26.1% → 27.0% | 341 → 360 | `invokeExact_MT(Object, Object, Object, Object)`                              | `java.lang.invoke.Invokers$Holder`                    |
|   +5.6% |   +19 | 26.1% → 27.0% | 341 → 360 | `invokeImpl(Object, Object[])`                                                | `jdk.internal.reflect.DirectMethodHandleAccessor`     |
|   +5.6% |   +19 | 26.1% → 27.0% | 341 → 360 | `invoke(Object, Object[])`                                                    | `jdk.internal.reflect.DirectMethodHandleAccessor`     |
|   +5.6% |   +19 | 26.1% → 27.0% | 341 → 360 | `invoke(Object, Object[])`                                                    | `java.lang.reflect.Method`                            |
|     new |   +10 |   0.0% → 0.8% |    0 → 10 | `invokeStatic(Object, Object, Object, Object, Object, Object, Object)`        | `java.lang.invoke.LambdaForm$DMH.0x000000a801230000`  |
|  +18.6% |    +8 |   3.3% → 3.8% |   43 → 51 | `resumeWith(Object)`                                                          | `kotlin.coroutines.jvm.internal.BaseContinuationImpl` |
|  +36.4% |    +4 |   0.8% → 1.1% |   11 → 15 | `linkCallSiteImpl(Class, MethodHandle, String, MethodType, Object, Object[])` | `java.lang.invoke.MethodHandleNatives`                |
|  +36.4% |    +4 |   0.8% → 1.1% |   11 → 15 | `linkCallSite(Object, Object, Object, Object, Object, Object[])`              | `java.lang.invoke.MethodHandleNatives`                |
|     new |    +4 |   0.0% → 0.3% |     0 → 4 | `callSiteForm(MethodType, boolean)`                                           | `java.lang.invoke.Invokers`                           |
|     new |    +4 |   0.0% → 0.3% |     0 → 4 | `linkToTargetMethod(MethodType)`                                              | `java.lang.invoke.Invokers`                           |
|     new |    +4 |   0.0% → 0.3% |     0 → 4 | `sanitizeStackTrace(Throwable)`                                               | `kotlin.jvm.internal.Intrinsics`                      |
|     new |    +4 |   0.0% → 0.3% |     0 → 4 | `throwParameterIsNullNPE(String)`                                             | `kotlin.jvm.internal.Intrinsics`                      |
| +100.0% |    +3 |   0.2% → 0.5% |     3 → 6 | `make(byte, Class, MemberName, Class)`                                        | `java.lang.invoke.DirectMethodHandle`                 |
|  +60.0% |    +3 |   0.4% → 0.6% |     5 → 8 | `generateInnerClass()`                                                        | `java.lang.invoke.InnerClassLambdaMetafactory`        |
|  +60.0% |    +3 |   0.4% → 0.6% |     5 → 8 | `spinInnerClass()`                                                            | `java.lang.invoke.InnerClassLambdaMetafactory`        |
|     new |    +3 |   0.0% → 0.2% |     0 → 3 | `update(byte[], int, int)`                                                    | `java.util.zip.CRC32`                                 |
|     new |    +3 |   0.0% → 0.2% |     0 → 3 | `toList(Iterable)`                                                            | `kotlin.collections.CollectionsKt___CollectionsKt`    |
|     new |    +3 |   0.0% → 0.2% |     0 → 3 | `make(Class, MemberName)`                                                     | `java.lang.invoke.DirectMethodHandle`                 |

##### JIT

|  Change | Delta |           % | Samples | Function                | Location    |
| ------: | ----: | ----------: | ------: | ----------------------- | ----------- |
| +500.0% |    +5 | 0.1% → 0.5% |   1 → 6 | `I2C/C2I adapters(0xb)` | `<unknown>` |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `itable stub`           | `<unknown>` |
| +100.0% |    +1 | 0.1% → 0.2% |   1 → 2 | `vtable stub`           | `<unknown>` |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `zero_blocks`           | `<unknown>` |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

|  Change | Delta |            % | Samples | Function                                                               | Location                                                                                                                  |
| ------: | ----: | -----------: | ------: | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| removed |  -341 | 26.1% → 0.0% | 341 → 0 | `invokeStatic(Object, Object)`                                         | `java.lang.invoke.LambdaForm$DMH.0x000000e801008000`                                                                      |
| removed |  -341 | 26.1% → 0.0% | 341 → 0 | `invoke(Object, Object, Object)`                                       | `java.lang.invoke.LambdaForm$MH.0x000000e801009400`                                                                       |
|  -95.2% |   -59 |  4.7% → 0.2% |  62 → 3 | `invoke()`                                                             | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x000000a8016ab9b8` |
|  -21.9% |   -14 |  4.9% → 3.8% | 64 → 50 | `Parse::Parse`                                                         | `libjvm.dylib`                                                                                                            |
|  -21.9% |   -14 |  4.9% → 3.8% | 64 → 50 | `ParseGenerator::generate`                                             | `libjvm.dylib`                                                                                                            |
|  -19.7% |   -12 |  4.7% → 3.7% | 61 → 49 | `Parse::do_one_block`                                                  | `libjvm.dylib`                                                                                                            |
|  -18.0% |   -11 |  4.7% → 3.8% | 61 → 50 | `Parse::do_all_blocks`                                                 | `libjvm.dylib`                                                                                                            |
|  -62.5% |   -10 |  1.2% → 0.5% |  16 → 6 | `LinkResolver::resolve_static_call`                                    | `libjvm.dylib`                                                                                                            |
|  -47.6% |   -10 |  1.6% → 0.8% | 21 → 11 | `ciBytecodeStream::get_method`                                         | `libjvm.dylib`                                                                                                            |
|  -58.8% |   -10 |  1.3% → 0.5% |  17 → 7 | `PhaseGVN::transform_no_reclaim`                                       | `libjvm.dylib`                                                                                                            |
| removed |   -10 |  0.8% → 0.0% |  10 → 0 | `invokeStatic(Object, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000e801230000`                                                                      |
|  -42.9% |    -9 |  1.6% → 0.9% | 21 → 12 | `__psynch_cvwait`                                                      | `libsystem_kernel.dylib`                                                                                                  |
|  -40.9% |    -9 |  1.7% → 1.0% | 22 → 13 | `ciObjectFactory::get_metadata`                                        | `libjvm.dylib`                                                                                                            |
|  -22.0% |    -9 |  3.1% → 2.4% | 41 → 32 | `PredictedCallGenerator::generate`                                     | `libjvm.dylib`                                                                                                            |
|  -16.4% |    -9 |  4.2% → 3.5% | 55 → 46 | `Parse::do_call`                                                       | `libjvm.dylib`                                                                                                            |
|  -50.0% |    -8 |  1.2% → 0.6% |  16 → 8 | `ciObjectFactory::create_new_metadata`                                 | `libjvm.dylib`                                                                                                            |
|  -32.0% |    -8 |  1.9% → 1.3% | 25 → 17 | `ClassVerifier::verify_method`                                         | `libjvm.dylib`                                                                                                            |
|  -32.0% |    -8 |  1.9% → 1.3% | 25 → 17 | `ClassVerifier::verify_class`                                          | `libjvm.dylib`                                                                                                            |
|  -30.8% |    -8 |  2.0% → 1.4% | 26 → 18 | `Verifier::verify`                                                     | `libjvm.dylib`                                                                                                            |
|  -72.7% |    -8 |  0.8% → 0.2% |  11 → 3 | `accept(ClassVisitor, Attribute[], int)`                               | `org.jetbrains.org.objectweb.asm.ClassReader`                                                                             |

##### Compiler

| Change | Delta |           % | Samples | Function                                   | Location       |
| -----: | ----: | ----------: | ------: | ------------------------------------------ | -------------- |
| -47.6% |   -10 | 1.6% → 0.8% | 21 → 11 | `ciBytecodeStream::get_method`             | `libjvm.dylib` |
| -58.8% |   -10 | 1.3% → 0.5% |  17 → 7 | `PhaseGVN::transform_no_reclaim`           | `libjvm.dylib` |
| -40.9% |    -9 | 1.7% → 1.0% | 22 → 13 | `ciObjectFactory::get_metadata`            | `libjvm.dylib` |
| -50.0% |    -8 | 1.2% → 0.6% |  16 → 8 | `ciObjectFactory::create_new_metadata`     | `libjvm.dylib` |
| -87.5% |    -7 | 0.6% → 0.1% |   8 → 1 | `LIRGenerator::state_for`                  | `libjvm.dylib` |
| -53.8% |    -7 | 1.0% → 0.5% |  13 → 6 | `ciMethod::ciMethod`                       | `libjvm.dylib` |
| -66.7% |    -6 | 0.7% → 0.2% |   9 → 3 | `MultiNode::is_CFG`                        | `libjvm.dylib` |
| -35.3% |    -6 | 1.3% → 0.8% | 17 → 11 | `PhaseCCP::analyze`                        | `libjvm.dylib` |
| -27.3% |    -6 | 1.7% → 1.2% | 22 → 16 | `IndexSetIterator::advance_and_next`       | `libjvm.dylib` |
| -33.3% |    -6 | 1.4% → 0.9% | 18 → 12 | `PhaseChaitin::Select`                     | `libjvm.dylib` |
| -26.3% |    -5 | 1.5% → 1.1% | 19 → 14 | `LIRGenerator::block_do`                   | `libjvm.dylib` |
| -26.3% |    -5 | 1.5% → 1.1% | 19 → 14 | `BlockList::iterate_forward`               | `libjvm.dylib` |
| -29.4% |    -5 | 1.3% → 0.9% | 17 → 12 | `CompileQueue::get`                        | `libjvm.dylib` |
| -83.3% |    -5 | 0.5% → 0.1% |   6 → 1 | `MethodLiveness::get_liveness_at`          | `libjvm.dylib` |
| -71.4% |    -5 | 0.5% → 0.2% |   7 → 2 | `LinearScan::compute_debug_info_for_scope` | `libjvm.dylib` |
| -45.5% |    -5 | 0.8% → 0.5% |  11 → 6 | `Compile::call_generator`                  | `libjvm.dylib` |
| -16.1% |    -5 | 2.4% → 2.0% | 31 → 26 | `PhaseIdealLoop::build_loop_late`          | `libjvm.dylib` |
| -62.5% |    -5 | 0.6% → 0.2% |   8 → 3 | `LoadNode::Ideal`                          | `libjvm.dylib` |
| -36.4% |    -4 | 0.8% → 0.5% |  11 → 7 | `PhaseCCP::push_child_nodes_to_worklist`   | `libjvm.dylib` |
| -23.5% |    -4 | 1.3% → 1.0% | 17 → 13 | `PhaseCCP::PhaseCCP`                       | `libjvm.dylib` |

##### Native

| Change | Delta |           % | Samples | Function                                                                        | Location                 |
| -----: | ----: | ----------: | ------: | ------------------------------------------------------------------------------- | ------------------------ |
| -21.9% |   -14 | 4.9% → 3.8% | 64 → 50 | `Parse::Parse`                                                                  | `libjvm.dylib`           |
| -21.9% |   -14 | 4.9% → 3.8% | 64 → 50 | `ParseGenerator::generate`                                                      | `libjvm.dylib`           |
| -19.7% |   -12 | 4.7% → 3.7% | 61 → 49 | `Parse::do_one_block`                                                           | `libjvm.dylib`           |
| -18.0% |   -11 | 4.7% → 3.8% | 61 → 50 | `Parse::do_all_blocks`                                                          | `libjvm.dylib`           |
| -62.5% |   -10 | 1.2% → 0.5% |  16 → 6 | `LinkResolver::resolve_static_call`                                             | `libjvm.dylib`           |
| -42.9% |    -9 | 1.6% → 0.9% | 21 → 12 | `__psynch_cvwait`                                                               | `libsystem_kernel.dylib` |
| -22.0% |    -9 | 3.1% → 2.4% | 41 → 32 | `PredictedCallGenerator::generate`                                              | `libjvm.dylib`           |
| -16.4% |    -9 | 4.2% → 3.5% | 55 → 46 | `Parse::do_call`                                                                | `libjvm.dylib`           |
| -32.0% |    -8 | 1.9% → 1.3% | 25 → 17 | `ClassVerifier::verify_method`                                                  | `libjvm.dylib`           |
| -32.0% |    -8 | 1.9% → 1.3% | 25 → 17 | `ClassVerifier::verify_class`                                                   | `libjvm.dylib`           |
| -30.8% |    -8 | 2.0% → 1.4% | 26 → 18 | `Verifier::verify`                                                              | `libjvm.dylib`           |
| -46.7% |    -7 | 1.1% → 0.6% |  15 → 8 | `nmethod::nmethod`                                                              | `libjvm.dylib`           |
| -46.7% |    -7 | 1.1% → 0.6% |  15 → 8 | `LinkResolver::resolve_invoke`                                                  | `libjvm.dylib`           |
| -43.8% |    -7 | 1.2% → 0.7% |  16 → 9 | `InterpreterRuntime::resolve_invoke`                                            | `libjvm.dylib`           |
| -28.6% |    -6 | 1.6% → 1.1% | 21 → 15 | `PlatformMonitor::wait`                                                         | `libjvm.dylib`           |
| -75.0% |    -6 | 0.6% → 0.2% |   8 → 2 | `Mutex::lock`                                                                   | `libjvm.dylib`           |
| -18.2% |    -6 | 2.5% → 2.0% | 33 → 27 | `InstanceKlass::initialize_impl`                                                | `libjvm.dylib`           |
| -29.4% |    -5 | 1.3% → 0.9% | 17 → 12 | `Monitor::wait`                                                                 | `libjvm.dylib`           |
| -71.4% |    -5 | 0.5% → 0.2% |   7 → 2 | `Arena::grow`                                                                   | `libjvm.dylib`           |
| -83.3% |    -5 | 0.5% → 0.1% |   6 → 1 | `HeapWordImpl** HeapRegion::oops_on_memregion_iterate<G1ScanCardClosure, true>` | `libjvm.dylib`           |

##### Ours

|  Change | Delta |           % | Samples | Function                                                                                                                                                                                     | Location                                                                                                                  |
| ------: | ----: | ----------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
|  -95.2% |   -59 | 4.7% → 0.2% |  62 → 3 | `invoke()`                                                                                                                                                                                   | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x000000a8016ab9b8` |
|  -72.7% |    -8 | 0.8% → 0.2% |  11 → 3 | `accept(ClassVisitor, Attribute[], int)`                                                                                                                                                     | `org.jetbrains.org.objectweb.asm.ClassReader`                                                                             |
|  -72.7% |    -8 | 0.8% → 0.2% |  11 → 3 | `accept(ClassVisitor, int)`                                                                                                                                                                  | `org.jetbrains.org.objectweb.asm.ClassReader`                                                                             |
|  -88.9% |    -8 | 0.7% → 0.1% |   9 → 1 | `processConstraintsIgnoringForksData(ConstraintInjector$Context, ConstraintInjector$TypeCheckerStateForConstraintInjector)`                                                                  | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector`                                              |
|  -88.9% |    -8 | 0.7% → 0.1% |   9 → 1 | `processConstraints(ConstraintInjector$Context, ConstraintInjector$TypeCheckerStateForConstraintInjector)`                                                                                   | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector`                                              |
|  -77.8% |    -7 | 0.7% → 0.2% |   9 → 2 | `readMethod(ClassVisitor, Context, int)`                                                                                                                                                     | `org.jetbrains.org.objectweb.asm.ClassReader`                                                                             |
| removed |    -7 | 0.5% → 0.0% |   7 → 0 | `findClass(JavaClassFinder$Request, GlobalSearchScope)`                                                                                                                                      | `org.jetbrains.kotlin.cli.jvm.compiler.KotlinCliJavaFileManagerImpl`                                                      |
|  -87.5% |    -7 | 0.6% → 0.1% |   8 → 1 | `incorporate(ConstraintIncorporator$Context, TypeVariableMarker, Constraint)`                                                                                                                | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintIncorporator`                                          |
|  -87.5% |    -7 | 0.6% → 0.1% |   8 → 1 | `processGivenConstraints(ConstraintInjector$Context, ConstraintInjector$TypeCheckerStateForConstraintInjector, Collection)`                                                                  | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector`                                              |
| removed |    -6 | 0.5% → 0.0% |   6 → 0 | `<init>(VirtualFile, FqName, ClassifierResolutionContext, BinaryClassSignatureParser, int, JavaClass, byte[])`                                                                               | `org.jetbrains.kotlin.load.java.structure.impl.classFiles.BinaryJavaClass`                                                |
| removed |    -6 | 0.5% → 0.0% |   6 → 0 | `<init>(VirtualFile, FqName, ClassifierResolutionContext, BinaryClassSignatureParser, int, JavaClass, byte[], int, DefaultConstructorMarker)`                                                | `org.jetbrains.kotlin.load.java.structure.impl.classFiles.BinaryJavaClass`                                                |
|  -28.6% |    -6 | 1.6% → 1.1% | 21 → 15 | `accept(FirVisitor, Object)`                                                                                                                                                                 | `org.jetbrains.kotlin.fir.expressions.FirFunctionCall`                                                                    |
|  -71.4% |    -5 | 0.5% → 0.2% |   7 → 2 | `transform(FirTransformer, Object)`                                                                                                                                                          | `org.jetbrains.kotlin.fir.declarations.FirValueParameter`                                                                 |
|  -62.5% |    -5 | 0.6% → 0.2% |   8 → 3 | `resolveArgumentExpression(ArgumentCheckingProcessor$ArgumentContext, ConeResolutionAtom)`                                                                                                   | `org.jetbrains.kotlin.fir.resolve.calls.stages.ArgumentCheckingProcessor`                                                 |
|  -62.5% |    -5 | 0.6% → 0.2% |   8 → 3 | `resolveArgumentExpression(Candidate, ConeResolutionAtom, ConeKotlinType, CheckerSink, ResolutionContext, boolean, boolean, FirAnonymousFunction)`                                           | `org.jetbrains.kotlin.fir.resolve.calls.stages.ArgumentCheckingProcessor`                                                 |
|  -27.8% |    -5 | 1.4% → 1.0% | 18 → 13 | `processFunctionsByName$lambda$0(FirLookupTrackerComponent, CallInfo, Ref$BooleanRef, ScopeBasedTowerLevel, TowerLevelProcessor, FirCallableSymbol)`                                         | `org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel`                                                       |
|  -27.8% |    -5 | 1.4% → 1.0% | 18 → 13 | `invoke(Object)`                                                                                                                                                                             | `org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel$$Lambda.0x000000a80166fc20`                            |
| removed |    -5 | 0.4% → 0.0% |   5 → 0 | `addEqualityConstraintAndIncorporateIt(ConstraintInjector$Context, ConstraintInjector$TypeCheckerStateForConstraintInjector, KotlinTypeMarker, KotlinTypeMarker)`                            | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector`                                              |
| removed |    -5 | 0.4% → 0.0% |   5 → 0 | `access$addEqualityConstraintAndIncorporateIt(ConstraintInjector, ConstraintInjector$Context, ConstraintInjector$TypeCheckerStateForConstraintInjector, KotlinTypeMarker, KotlinTypeMarker)` | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector`                                              |
| removed |    -5 | 0.4% → 0.0% |   5 → 0 | `addInitialEqualityConstraint(ConstraintInjector$Context, KotlinTypeMarker, KotlinTypeMarker, ConstraintPosition)`                                                                           | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector`                                              |

##### Standard library

|  Change | Delta |            % | Samples | Function                                                                  | Location                                                |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------------- | ------------------------------------------------------- |
| removed |  -341 | 26.1% → 0.0% | 341 → 0 | `invokeStatic(Object, Object)`                                            | `java.lang.invoke.LambdaForm$DMH.0x000000e801008000`    |
| removed |  -341 | 26.1% → 0.0% | 341 → 0 | `invoke(Object, Object, Object)`                                          | `java.lang.invoke.LambdaForm$MH.0x000000e801009400`     |
| removed |   -10 |  0.8% → 0.0% |  10 → 0 | `invokeStatic(Object, Object, Object, Object, Object, Object, Object)`    | `java.lang.invoke.LambdaForm$DMH.0x000000e801230000`    |
|   -9.7% |    -7 |  5.5% → 4.9% | 72 → 65 | `read(byte[], int, int)`                                                  | `java.util.zip.InflaterInputStream`                     |
|   -7.2% |    -5 |  5.3% → 4.8% | 69 → 64 | `inflate(byte[], int, int)`                                               | `java.util.zip.Inflater`                                |
|  -83.3% |    -5 |  0.5% → 0.1% |   6 → 1 | `allocateInstance(Object)`                                                | `java.lang.invoke.DirectMethodHandle`                   |
|   -5.9% |    -4 |  5.2% → 4.8% | 68 → 64 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)`             | `java.util.zip.Inflater`                                |
| removed |    -4 |  0.3% → 0.0% |   4 → 0 | `lambda$getProxyConstructor$0(ClassLoader, AbstractClassLoaderValue$Sub)` | `java.lang.reflect.Proxy`                               |
| removed |    -4 |  0.3% → 0.0% |   4 → 0 | `apply(Object, Object)`                                                   | `java.lang.reflect.Proxy$$Lambda.0x000000e8010528d0`    |
| removed |    -4 |  0.3% → 0.0% |   4 → 0 | `get()`                                                                   | `jdk.internal.loader.AbstractClassLoaderValue$Memoizer` |
| removed |    -4 |  0.3% → 0.0% |   4 → 0 | `computeIfAbsent(ClassLoader, BiFunction)`                                | `jdk.internal.loader.AbstractClassLoaderValue`          |
| removed |    -4 |  0.3% → 0.0% |   4 → 0 | `getProxyConstructor(Class, ClassLoader, Class[])`                        | `java.lang.reflect.Proxy`                               |
| removed |    -4 |  0.3% → 0.0% |   4 → 0 | `newProxyInstance(ClassLoader, Class[], InvocationHandler)`               | `java.lang.reflect.Proxy`                               |
| removed |    -4 |  0.3% → 0.0% |   4 → 0 | `asType(MethodType)`                                                      | `java.lang.invoke.MethodHandle`                         |
|  -80.0% |    -4 |  0.4% → 0.1% |   5 → 1 | `allocateInstance(Class)`                                                 | `jdk.internal.misc.Unsafe`                              |
|  -80.0% |    -4 |  0.4% → 0.1% |   5 → 1 | `linkToTargetMethod(Object, Object, Object)`                              | `java.lang.invoke.Invokers$Holder`                      |
|   -4.3% |    -3 |  5.4% → 5.0% | 70 → 67 | `read(byte[], int, int)`                                                  | `java.util.zip.ZipInputStream`                          |
|   -4.3% |    -3 |  5.4% → 5.0% | 70 → 67 | `read(byte[])`                                                            | `java.io.FilterInputStream`                             |
|  -75.0% |    -3 |  0.3% → 0.1% |   4 → 1 | `put(Object, Object)`                                                     | `java.util.HashMap`                                     |
| removed |    -3 |  0.2% → 0.0% |   3 → 0 | `defineProxyClass(Proxy$ProxyBuilder$ProxyClassContext, List)`            | `java.lang.reflect.Proxy$ProxyBuilder`                  |

##### JIT

|  Change | Delta |           % | Samples | Function                   | Location    |
| ------: | ----: | ----------: | ------: | -------------------------- | ----------- |
|  -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `I2C/C2I adapters(0xbba)`  | `<unknown>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `I2C/C2I adapters(0xbbbb)` | `<unknown>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `I2C/C2I adapters(0x)`     | `<unknown>` |

# Sampling profile diff

Collected 6,401 samples → 5,155 samples (-1,246 samples, -19.5%).

| Category          | Change | Delta |             % |       Samples |
| ----------------- | -----: | ----: | ------------: | ------------: |
| Compiler          | -28.5% |  -757 | 41.5% → 36.9% | 2,657 → 1,900 |
| Native            | -22.9% |  -473 | 32.2% → 30.8% | 2,062 → 1,589 |
| Standard library  |  -1.7% |   -27 | 24.3% → 29.7% | 1,556 → 1,529 |
| Ours              | +16.2% |   +11 |   1.1% → 1.5% |       68 → 79 |
| JIT               |  -1.8% |    -1 |   0.9% → 1.0% |       55 → 54 |
| Garbage collector | +33.3% |    +1 |  <0.1% → 0.1% |         3 → 4 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |            % |   Samples | Function                                        | Location                                                                                                |
| ------: | ----: | -----------: | --------: | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
|  +23.5% |   +20 |  1.3% → 2.0% |  85 → 105 | `RegisterMap::RegisterMap`                      | `libjvm.dylib`                                                                                          |
|  +13.3% |   +13 |  1.5% → 2.2% |  98 → 111 | `pthread_jit_write_protect_np`                  | `libsystem_pthread.dylib`                                                                               |
| +144.4% |   +13 |  0.1% → 0.4% |    9 → 22 | `LIR_OpVisitState::visit`                       | `libjvm.dylib`                                                                                          |
|  +46.2% |   +12 |  0.4% → 0.7% |   26 → 38 | `invokeBasic(Object[])`                         | `java.lang.invoke.MethodHandle`                                                                         |
| +100.0% |   +12 |  0.2% → 0.5% |   12 → 24 | `LinearScanWalker::free_collect_inactive_fixed` | `libjvm.dylib`                                                                                          |
| +166.7% |   +10 |  0.1% → 0.3% |    6 → 16 | `equals(Object[], Object[])`                    | `java.util.Arrays`                                                                                      |
|  +19.6% |   +10 |  0.8% → 1.2% |   51 → 61 | `java_lang_Throwable::fill_in_stack_trace`      | `libjvm.dylib`                                                                                          |
| +400.0% |    +8 | <0.1% → 0.2% |    2 → 10 | `<init>(Method, boolean)`                       | `java.lang.invoke.MemberName`                                                                           |
|     new |    +8 |  0.0% → 0.2% |     0 → 8 | `invoke(Object, Object)`                        | `java.lang.invoke.LambdaForm$MH.0x00000070013c4c00 → java.lang.invoke.LambdaForm$MH.0x000000f00102ac00` |
|   +7.9% |    +8 |  1.6% → 2.1% | 101 → 109 | `cast(Object)`                                  | `java.lang.Class`                                                                                       |
|  +36.8% |    +7 |  0.3% → 0.5% |   19 → 26 | `frame::sender_for_compiled_frame`              | `libjvm.dylib`                                                                                          |
| +700.0% |    +7 | <0.1% → 0.2% |     1 → 8 | `invoke(Object, Object)`                        | `java.lang.invoke.LambdaForm$MH.0x0000007001397c00 → java.lang.invoke.LambdaForm$MH.0x000000f00109a400` |
| +350.0% |    +7 | <0.1% → 0.2% |     2 → 9 | `internalMemberName(Object)`                    | `java.lang.invoke.DirectMethodHandle`                                                                   |
|  +70.0% |    +7 |  0.2% → 0.3% |   10 → 17 | `Compile::find_alias_type`                      | `libjvm.dylib`                                                                                          |
| +233.3% |    +7 | <0.1% → 0.2% |    3 → 10 | `Node::latency`                                 | `libjvm.dylib`                                                                                          |
|  +28.0% |    +7 |  0.4% → 0.6% |   25 → 32 | `vmSymbols::find_sid`                           | `libjvm.dylib`                                                                                          |
| +100.0% |    +6 |  0.1% → 0.2% |    6 → 12 | `get(Object)`                                   | `java.util.concurrent.ConcurrentHashMap`                                                                |
|  +60.0% |    +6 |  0.2% → 0.3% |   10 → 16 | `resize()`                                      | `java.util.HashMap`                                                                                     |
| +100.0% |    +6 |  0.1% → 0.2% |    6 → 12 | `DebugInformationRecorder::describe_scope`      | `libjvm.dylib`                                                                                          |
| +600.0% |    +6 | <0.1% → 0.1% |     1 → 7 | `JVMState::clone_shallow`                       | `libjvm.dylib`                                                                                          |

##### Compiler

|  Change | Delta |            % | Samples | Function                                        | Location       |
| ------: | ----: | -----------: | ------: | ----------------------------------------------- | -------------- |
| +144.4% |   +13 |  0.1% → 0.4% |  9 → 22 | `LIR_OpVisitState::visit`                       | `libjvm.dylib` |
| +100.0% |   +12 |  0.2% → 0.5% | 12 → 24 | `LinearScanWalker::free_collect_inactive_fixed` | `libjvm.dylib` |
|  +70.0% |    +7 |  0.2% → 0.3% | 10 → 17 | `Compile::find_alias_type`                      | `libjvm.dylib` |
| +233.3% |    +7 | <0.1% → 0.2% |  3 → 10 | `Node::latency`                                 | `libjvm.dylib` |
| +100.0% |    +6 |  0.1% → 0.2% |  6 → 12 | `DebugInformationRecorder::describe_scope`      | `libjvm.dylib` |
| +600.0% |    +6 | <0.1% → 0.1% |   1 → 7 | `JVMState::clone_shallow`                       | `libjvm.dylib` |
|  +83.3% |    +5 |  0.1% → 0.2% |  6 → 11 | `PhiNode::is_unsafe_data_reference`             | `libjvm.dylib` |
| +100.0% |    +5 |  0.1% → 0.2% |  5 → 10 | `LinearScan::assign_reg_num`                    | `libjvm.dylib` |
| +100.0% |    +4 |  0.1% → 0.2% |   4 → 8 | `PhaseIFG::re_insert`                           | `libjvm.dylib` |
| +400.0% |    +4 | <0.1% → 0.1% |   1 → 5 | `PhiNode::pinned`                               | `libjvm.dylib` |
|  +33.3% |    +4 |  0.2% → 0.3% | 12 → 16 | `IndexSet::initialize`                          | `libjvm.dylib` |
|     new |    +4 |  0.0% → 0.1% |   0 → 4 | `MethodLiveness::BasicBlock::get_liveness_at`   | `libjvm.dylib` |
| +200.0% |    +4 | <0.1% → 0.1% |   2 → 6 | `ConNode::Opcode`                               | `libjvm.dylib` |
| +400.0% |    +4 | <0.1% → 0.1% |   1 → 5 | `LinearScan::append_scope_value`                | `libjvm.dylib` |
|  +42.9% |    +3 |  0.1% → 0.2% |  7 → 10 | `RegionNode::is_unreachable_from_root`          | `libjvm.dylib` |
|  +75.0% |    +3 |         0.1% |   4 → 7 | `PhaseCFG::insert_anti_dependences`             | `libjvm.dylib` |
|  +75.0% |    +3 |         0.1% |   4 → 7 | `PhaseIterGVN::PhaseIterGVN`                    | `libjvm.dylib` |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `ciEnv::get_field_by_index`                     | `libjvm.dylib` |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `ConnectionGraph::add_node_to_connection_graph` | `libjvm.dylib` |
| +100.0% |    +3 | <0.1% → 0.1% |   3 → 6 | `PhaseIFG::remove_node`                         | `libjvm.dylib` |

##### Native

|  Change | Delta |            % |  Samples | Function                                                                                                                                                     | Location                  |
| ------: | ----: | -----------: | -------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------- |
|  +23.5% |   +20 |  1.3% → 2.0% | 85 → 105 | `RegisterMap::RegisterMap`                                                                                                                                   | `libjvm.dylib`            |
|  +13.3% |   +13 |  1.5% → 2.2% | 98 → 111 | `pthread_jit_write_protect_np`                                                                                                                               | `libsystem_pthread.dylib` |
|  +19.6% |   +10 |  0.8% → 1.2% |  51 → 61 | `java_lang_Throwable::fill_in_stack_trace`                                                                                                                   | `libjvm.dylib`            |
|  +36.8% |    +7 |  0.3% → 0.5% |  19 → 26 | `frame::sender_for_compiled_frame`                                                                                                                           | `libjvm.dylib`            |
|  +28.0% |    +7 |  0.4% → 0.6% |  25 → 32 | `vmSymbols::find_sid`                                                                                                                                        | `libjvm.dylib`            |
|  +33.3% |    +5 |  0.2% → 0.4% |  15 → 20 | `BacktraceBuilder::push`                                                                                                                                     | `libjvm.dylib`            |
|     new |    +5 |  0.0% → 0.1% |    0 → 5 | `CollectedHeap::array_allocate`                                                                                                                              | `libjvm.dylib`            |
| +500.0% |    +5 | <0.1% → 0.1% |    1 → 6 | `vframe::new_vframe`                                                                                                                                         | `libjvm.dylib`            |
| +166.7% |    +5 | <0.1% → 0.2% |    3 → 8 | `vframe::java_sender`                                                                                                                                        | `libjvm.dylib`            |
| +200.0% |    +4 | <0.1% → 0.1% |    2 → 6 | `inflate_fast`                                                                                                                                               | `libzip.dylib`            |
|  +80.0% |    +4 |  0.1% → 0.2% |    5 → 9 | `AccessInternal::PostRuntimeDispatch<G1BarrierSet::AccessBarrier<2383974ull, G1BarrierSet>, (AccessInternal::BarrierType)1, 2383974ull>::oop_access_barrier` | `libjvm.dylib`            |
| +400.0% |    +4 | <0.1% → 0.1% |    1 → 5 | `G1BarrierSetRuntime::write_ref_array_post_entry`                                                                                                            | `libjvm.dylib`            |
| +400.0% |    +4 | <0.1% → 0.1% |    1 → 5 | `InstanceKlass::array_klass`                                                                                                                                 | `libjvm.dylib`            |
| +200.0% |    +4 | <0.1% → 0.1% |    2 → 6 | `Continuation::is_continuation_enterSpecial`                                                                                                                 | `libjvm.dylib`            |
|  +28.6% |    +4 |  0.2% → 0.3% |  14 → 18 | `resource_allocate_bytes`                                                                                                                                    | `libjvm.dylib`            |
|  +66.7% |    +4 |  0.1% → 0.2% |   6 → 10 | `Dictionary::find`                                                                                                                                           | `libjvm.dylib`            |
|     new |    +4 |  0.0% → 0.1% |    0 → 4 | `arrayof_jbyte_disjoint_arraycopy`                                                                                                                           | `<unknown>`               |
|     new |    +4 |  0.0% → 0.1% |    0 → 4 | `pthread_mutex_unlock`                                                                                                                                       | `libsystem_pthread.dylib` |
| +300.0% |    +3 | <0.1% → 0.1% |    1 → 4 | `SymbolTable::new_symbol`                                                                                                                                    | `libjvm.dylib`            |
|  +37.5% |    +3 |  0.1% → 0.2% |   8 → 11 | `frame::sender_for_interpreter_frame`                                                                                                                        | `libjvm.dylib`            |

##### Standard library

|  Change | Delta |            % |   Samples | Function                                                                                      | Location                                                                                                  |
| ------: | ----: | -----------: | --------: | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
|  +46.2% |   +12 |  0.4% → 0.7% |   26 → 38 | `invokeBasic(Object[])`                                                                       | `java.lang.invoke.MethodHandle`                                                                           |
| +166.7% |   +10 |  0.1% → 0.3% |    6 → 16 | `equals(Object[], Object[])`                                                                  | `java.util.Arrays`                                                                                        |
| +400.0% |    +8 | <0.1% → 0.2% |    2 → 10 | `<init>(Method, boolean)`                                                                     | `java.lang.invoke.MemberName`                                                                             |
|     new |    +8 |  0.0% → 0.2% |     0 → 8 | `invoke(Object, Object)`                                                                      | `java.lang.invoke.LambdaForm$MH.0x00000070013c4c00 → java.lang.invoke.LambdaForm$MH.0x000000f00102ac00`   |
|   +7.9% |    +8 |  1.6% → 2.1% | 101 → 109 | `cast(Object)`                                                                                | `java.lang.Class`                                                                                         |
| +700.0% |    +7 | <0.1% → 0.2% |     1 → 8 | `invoke(Object, Object)`                                                                      | `java.lang.invoke.LambdaForm$MH.0x0000007001397c00 → java.lang.invoke.LambdaForm$MH.0x000000f00109a400`   |
| +350.0% |    +7 | <0.1% → 0.2% |     2 → 9 | `internalMemberName(Object)`                                                                  | `java.lang.invoke.DirectMethodHandle`                                                                     |
| +100.0% |    +6 |  0.1% → 0.2% |    6 → 12 | `get(Object)`                                                                                 | `java.util.concurrent.ConcurrentHashMap`                                                                  |
|  +60.0% |    +6 |  0.2% → 0.3% |   10 → 16 | `resize()`                                                                                    | `java.util.HashMap`                                                                                       |
| +125.0% |    +5 |  0.1% → 0.2% |     4 → 9 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`                                                           |
|  +26.7% |    +4 |  0.2% → 0.4% |   15 → 19 | `getNode(Object)`                                                                             | `java.util.HashMap`                                                                                       |
|  +40.0% |    +4 |  0.2% → 0.3% |   10 → 14 | `getAndPut(String, MemoizeCache$ValueProvider)`                                               | `org.codehaus.groovy.vmplugin.v8.CacheableCallSite`                                                       |
| +400.0% |    +4 | <0.1% → 0.1% |     1 → 5 | `invokeSpecial(Object, Object, Object)`                                                       | `java.lang.invoke.DirectMethodHandle$Holder`                                                              |
| +133.3% |    +4 | <0.1% → 0.1% |     3 → 7 | `init(MemberName, Object)`                                                                    | `java.lang.invoke.MethodHandleNatives`                                                                    |
|     new |    +4 |  0.0% → 0.1% |     0 → 4 | `catchException(MethodHandle, Class, MethodHandle)`                                           | `java.lang.invoke.MethodHandles`                                                                          |
|     new |    +4 |  0.0% → 0.1% |     0 → 4 | `chooseMeta(MetaClassImpl)`                                                                   | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector`                                                 |
| +400.0% |    +4 | <0.1% → 0.1% |     1 → 5 | `getOptimizedTransition(int)`                                                                 | `groovyjarjarantlr4.v4.runtime.atn.ATNState`                                                              |
|     new |    +3 |  0.0% → 0.1% |     0 → 3 | `getMethodsRecursive(String, Class[], boolean)`                                               | `java.lang.Class`                                                                                         |
| +150.0% |    +3 | <0.1% → 0.1% |     2 → 5 | `guard(Object, Object)`                                                                       | `java.lang.invoke.LambdaForm$MH.0x000000700109a000 → java.lang.invoke.LambdaForm$MH.0x000000f00109a000`   |
|     new |    +3 |  0.0% → 0.1% |     0 → 3 | `invokeVirtual(Object, Object, Object, Object)`                                               | `java.lang.invoke.LambdaForm$DMH.0x0000007001094400 → java.lang.invoke.LambdaForm$DMH.0x000000f001094400` |

##### Ours

| Change | Delta |            % | Samples | Function                                                             | Location                                                                   |
| -----: | ----: | -----------: | ------: | -------------------------------------------------------------------- | -------------------------------------------------------------------------- |
|    new |    +2 | 0.0% → <0.1% |   0 → 2 | `isFinalVariable(DeclarationExpression, SourceCode)`                 | `org.gmetrics.util.AstUtil`                                                |
|    new |    +2 | 0.0% → <0.1% |   0 → 2 | `getAt(String)`                                                      | `org.gmetrics.result.SingleNumberMetricResult`                             |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `isRuleSuppressed(Rule)`                                             | `org.codenarc.analyzer.SuppressionAnalyzer`                                |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `collectViolations(SourceCode, RuleSet)`                             | `org.codenarc.analyzer.AbstractSourceAnalyzer`                             |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `applyTo(SourceCode)`                                                | `org.codenarc.rule.AbstractRule`                                           |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `getAstVisitor()`                                                    | `org.codenarc.rule.AbstractAstVisitorRule`                                 |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `getLines()`                                                         | `org.codenarc.source.AbstractSourceCode`                                   |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `getRawLine(SourceCode, int)`                                        | `org.codenarc.util.AstUtil`                                                |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `visitMethod(MethodNode)`                                            | `org.codenarc.rule.AbstractAstVisitor`                                     |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `visitConstructorOrMethod(MethodNode, boolean)`                      | `org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor`                   |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `visitClassComplete(ClassNode)`                                      | `org.codenarc.rule.convention.StaticFieldsBeforeInstanceFieldsAstVisitor`  |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `visitConstantExpression(ConstantExpression)`                        | `org.codenarc.rule.unnecessary.UnnecessaryGStringAstVisitor`               |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `line(int)`                                                          | `org.codenarc.source.AbstractSourceCode`                                   |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `findLineWithDeclaration(ASTNode, String)`                           | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`        |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `checkForViolations(ASTNode)`                                        | `org.codenarc.rule.formatting.BlockStartsWithBlankLineAstVisitor`          |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `visitBlockStatement(BlockStatement)`                                | `org.codenarc.rule.formatting.SpaceBeforeClosingBraceAstVisitor`           |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `processParameters(Parameter[], String)`                             | `org.codenarc.rule.convention.NoFloatAstVisitor`                           |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `<init>(Object, Object, Reference, Reference, Reference, Reference)` | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `getAnnotation(AnnotatedNode, String)`                               | `org.codenarc.util.AstUtil`                                                |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `<init>(String)`                                                     | `org.codenarc.rule.groovyism.ExplicitCallToMethodAstVisitor`               |

##### JIT

|  Change | Delta |           % | Samples | Function                 | Location    |
| ------: | ----: | ----------: | ------: | ------------------------ | ----------- |
| +100.0% |    +5 | 0.1% → 0.2% |  5 → 10 | `vtable stub`            | `<unknown>` |
|  +60.0% |    +3 | 0.1% → 0.2% |   5 → 8 | `I2C/C2I adapters(0xbb)` | `<unknown>` |
|  +50.0% |    +2 |        0.1% |   4 → 6 | `I2C/C2I adapters(0xb)`  | `<unknown>` |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |           % |  Samples | Function                                                                                                                     | Location                   |
| ------: | ----: | ----------: | -------: | ---------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
|  -43.8% |   -46 | 1.6% → 1.1% | 105 → 59 | `Node::dominates`                                                                                                            | `libjvm.dylib`             |
|  -35.5% |   -43 | 1.9% → 1.5% | 121 → 78 | `PhaseChaitin::Split`                                                                                                        | `libjvm.dylib`             |
| removed |   -43 | 0.7% → 0.0% |   43 → 0 | `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>`                               | `libjvm.dylib`             |
| removed |   -37 | 0.6% → 0.0% |   37 → 0 | `G1ParScanThreadState::do_copy_to_survivor_space`                                                                            | `libjvm.dylib`             |
|  -43.2% |   -32 | 1.2% → 0.8% |  74 → 42 | `__psynch_cvwait`                                                                                                            | `libsystem_kernel.dylib`   |
| removed |   -31 | 0.5% → 0.0% |   31 → 0 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>`                       | `libjvm.dylib`             |
|  -52.6% |   -30 | 0.9% → 0.5% |  57 → 27 | `__psynch_mutexwait`                                                                                                         | `libsystem_kernel.dylib`   |
| removed |   -27 | 0.4% → 0.0% |   27 → 0 | `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>` | `libjvm.dylib`             |
|  -37.7% |   -26 | 1.1% → 0.8% |  69 → 43 | `_platform_memmove`                                                                                                          | `libsystem_platform.dylib` |
| removed |   -22 | 0.3% → 0.0% |   22 → 0 | `G1ParScanThreadState::trim_queue_to_threshold`                                                                              | `libjvm.dylib`             |
|  -63.3% |   -19 | 0.5% → 0.2% |  30 → 11 | `sys_icache_invalidate`                                                                                                      | `libsystem_platform.dylib` |
| removed |   -19 | 0.3% → 0.0% |   19 → 0 | `semaphore_wait_trap`                                                                                                        | `libsystem_kernel.dylib`   |
|  -58.1% |   -18 | 0.5% → 0.3% |  31 → 13 | `PhaseIdealLoop::build_loop_late_post_work`                                                                                  | `libjvm.dylib`             |
|  -78.3% |   -18 | 0.4% → 0.1% |   23 → 5 | `PhaseChaitin::build_ifg_virtual`                                                                                            | `libjvm.dylib`             |
|  -26.6% |   -17 | 1.0% → 0.9% |  64 → 47 | `IndexSetIterator::advance_and_next`                                                                                         | `libjvm.dylib`             |
|  -53.1% |   -17 | 0.5% → 0.3% |  32 → 15 | `Unique_Node_List::remove`                                                                                                   | `libjvm.dylib`             |
|  -53.3% |   -16 | 0.5% → 0.3% |  30 → 14 | `PhaseIdealLoop::Dominators`                                                                                                 | `libjvm.dylib`             |
|  -38.5% |   -15 | 0.6% → 0.5% |  39 → 24 | `PhaseChaitin::elide_copy`                                                                                                   | `libjvm.dylib`             |
|  -60.0% |   -15 | 0.4% → 0.2% |  25 → 10 | `NodeHash::hash_find_insert`                                                                                                 | `libjvm.dylib`             |
|  -18.8% |   -13 |        1.1% |  69 → 56 | `Arena::contains`                                                                                                            | `libjvm.dylib`             |

##### Compiler

| Change | Delta |           % |  Samples | Function                                    | Location       |
| -----: | ----: | ----------: | -------: | ------------------------------------------- | -------------- |
| -43.8% |   -46 | 1.6% → 1.1% | 105 → 59 | `Node::dominates`                           | `libjvm.dylib` |
| -35.5% |   -43 | 1.9% → 1.5% | 121 → 78 | `PhaseChaitin::Split`                       | `libjvm.dylib` |
| -58.1% |   -18 | 0.5% → 0.3% |  31 → 13 | `PhaseIdealLoop::build_loop_late_post_work` | `libjvm.dylib` |
| -78.3% |   -18 | 0.4% → 0.1% |   23 → 5 | `PhaseChaitin::build_ifg_virtual`           | `libjvm.dylib` |
| -26.6% |   -17 | 1.0% → 0.9% |  64 → 47 | `IndexSetIterator::advance_and_next`        | `libjvm.dylib` |
| -53.1% |   -17 | 0.5% → 0.3% |  32 → 15 | `Unique_Node_List::remove`                  | `libjvm.dylib` |
| -53.3% |   -16 | 0.5% → 0.3% |  30 → 14 | `PhaseIdealLoop::Dominators`                | `libjvm.dylib` |
| -38.5% |   -15 | 0.6% → 0.5% |  39 → 24 | `PhaseChaitin::elide_copy`                  | `libjvm.dylib` |
| -60.0% |   -15 | 0.4% → 0.2% |  25 → 10 | `NodeHash::hash_find_insert`                | `libjvm.dylib` |
| -36.1% |   -13 | 0.6% → 0.4% |  36 → 23 | `Compile::identify_useful_nodes`            | `libjvm.dylib` |
| -54.2% |   -13 | 0.4% → 0.2% |  24 → 11 | `Type::cmp`                                 | `libjvm.dylib` |
| -48.1% |   -13 | 0.4% → 0.3% |  27 → 14 | `PhaseIdealLoop::build_loop_early`          | `libjvm.dylib` |
| -35.5% |   -11 | 0.5% → 0.4% |  31 → 20 | `PhaseChaitin::gather_lrg_masks`            | `libjvm.dylib` |
| -40.7% |   -11 | 0.4% → 0.3% |  27 → 16 | `PhaseIdealLoop::build_loop_late`           | `libjvm.dylib` |
| -47.8% |   -11 | 0.4% → 0.2% |  23 → 12 | `Node_Backward_Iterator::next`              | `libjvm.dylib` |
| -45.8% |   -11 | 0.4% → 0.3% |  24 → 13 | `PhaseOutput::BuildOopMaps`                 | `libjvm.dylib` |
| -24.4% |   -10 |        0.6% |  41 → 31 | `ciObjectFactory::get_metadata`             | `libjvm.dylib` |
| -32.3% |   -10 | 0.5% → 0.4% |  31 → 21 | `PhaseIdealLoop::is_dominator`              | `libjvm.dylib` |
| -76.9% |   -10 | 0.2% → 0.1% |   13 → 3 | `PhaseIFG::effective_degree`                | `libjvm.dylib` |
| -62.5% |   -10 | 0.2% → 0.1% |   16 → 6 | `ValueStack::values_do`                     | `libjvm.dylib` |

##### Native

|  Change | Delta |           % | Samples | Function                                                                                                                     | Location                   |
| ------: | ----: | ----------: | ------: | ---------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| removed |   -43 | 0.7% → 0.0% |  43 → 0 | `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>`                               | `libjvm.dylib`             |
| removed |   -37 | 0.6% → 0.0% |  37 → 0 | `G1ParScanThreadState::do_copy_to_survivor_space`                                                                            | `libjvm.dylib`             |
|  -43.2% |   -32 | 1.2% → 0.8% | 74 → 42 | `__psynch_cvwait`                                                                                                            | `libsystem_kernel.dylib`   |
| removed |   -31 | 0.5% → 0.0% |  31 → 0 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>`                       | `libjvm.dylib`             |
|  -52.6% |   -30 | 0.9% → 0.5% | 57 → 27 | `__psynch_mutexwait`                                                                                                         | `libsystem_kernel.dylib`   |
| removed |   -27 | 0.4% → 0.0% |  27 → 0 | `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>` | `libjvm.dylib`             |
|  -37.7% |   -26 | 1.1% → 0.8% | 69 → 43 | `_platform_memmove`                                                                                                          | `libsystem_platform.dylib` |
| removed |   -22 | 0.3% → 0.0% |  22 → 0 | `G1ParScanThreadState::trim_queue_to_threshold`                                                                              | `libjvm.dylib`             |
|  -63.3% |   -19 | 0.5% → 0.2% | 30 → 11 | `sys_icache_invalidate`                                                                                                      | `libsystem_platform.dylib` |
| removed |   -19 | 0.3% → 0.0% |  19 → 0 | `semaphore_wait_trap`                                                                                                        | `libsystem_kernel.dylib`   |
|  -18.8% |   -13 |        1.1% | 69 → 56 | `Arena::contains`                                                                                                            | `libjvm.dylib`             |
| removed |   -11 | 0.2% → 0.0% |  11 → 0 | `void G1CMTask::process_grey_task_entry<true>`                                                                               | `libjvm.dylib`             |
|  -57.9% |   -11 | 0.3% → 0.2% |  19 → 8 | `Dict::Insert`                                                                                                               | `libjvm.dylib`             |
| removed |   -11 | 0.2% → 0.0% |  11 → 0 | `G1ConcurrentMark::mark_in_bitmap`                                                                                           | `libjvm.dylib`             |
|  -34.5% |   -10 | 0.5% → 0.4% | 29 → 19 | `_platform_memset`                                                                                                           | `libsystem_platform.dylib` |
| removed |   -10 | 0.2% → 0.0% |  10 → 0 | `G1CardSet::add_to_howl`                                                                                                     | `libjvm.dylib`             |
| removed |    -9 | 0.1% → 0.0% |   9 → 0 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object`                                                     | `libjvm.dylib`             |
| removed |    -8 | 0.1% → 0.0% |   8 → 0 | `ClassLoaderDataGraphKlassIteratorAtomic::next_klass`                                                                        | `libjvm.dylib`             |
|  -40.0% |    -6 |        0.2% |  15 → 9 | `frame::sender_raw`                                                                                                          | `libjvm.dylib`             |
|  -33.3% |    -6 | 0.3% → 0.2% | 18 → 12 | `bsearch`                                                                                                                    | `libsystem_c.dylib`        |

##### Standard library

|  Change | Delta |            % | Samples | Function                                                                                                    | Location                                                                                                |
| ------: | ----: | -----------: | ------: | ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
|  -35.5% |   -11 |  0.5% → 0.4% | 31 → 20 | `collector(Object, Object, Object)`                                                                         | `java.lang.invoke.LambdaForm$MH.0x00000070010a1000 → java.lang.invoke.LambdaForm$MH.0x000000f0010a1000` |
|  -72.7% |    -8 |  0.2% → 0.1% |  11 → 3 | `computeValueConversions(MethodType, MethodType, boolean, boolean)`                                         | `java.lang.invoke.MethodHandleImpl`                                                                     |
| removed |    -7 |  0.1% → 0.0% |   7 → 0 | `invoke(Object, Object)`                                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000700102ac00 → java.lang.invoke.LambdaForm$MH.0x000000f0011eb400` |
| removed |    -7 |  0.1% → 0.0% |   7 → 0 | `invoke(Object, Object)`                                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000700109a400 → java.lang.invoke.LambdaForm$MH.0x000000f0013b5800` |
|  -33.3% |    -6 |  0.3% → 0.2% | 18 → 12 | `equals(Object, Object)`                                                                                    | `java.util.Objects`                                                                                     |
|  -50.0% |    -6 |  0.2% → 0.1% |  12 → 6 | `type()`                                                                                                    | `java.lang.invoke.MethodHandle`                                                                         |
|  -55.6% |    -5 |         0.1% |   9 → 4 | `makeReinvokerForm(MethodHandle, int, Object, boolean, LambdaForm$NamedFunction, LambdaForm$NamedFunction)` | `java.lang.invoke.DelegatingMethodHandle`                                                               |
|  -21.1% |    -4 |         0.3% | 19 → 15 | `<init>(MethodType, LambdaForm)`                                                                            | `java.lang.invoke.MethodHandle`                                                                         |
|  -33.3% |    -4 |         0.2% |  12 → 8 | `get()`                                                                                                     | `java.lang.ref.SoftReference`                                                                           |
|  -80.0% |    -4 | 0.1% → <0.1% |   5 → 1 | `allocateInstance(Object)`                                                                                  | `java.lang.invoke.DirectMethodHandle`                                                                   |
|  -66.7% |    -4 | 0.1% → <0.1% |   6 → 2 | `sameClasses(Class[], Object[])`                                                                            | `org.codehaus.groovy.vmplugin.v8.IndyGuardsFiltersAndSignatures`                                        |
|  -80.0% |    -4 | 0.1% → <0.1% |   5 → 1 | `sequence(Pattern$Node)`                                                                                    | `java.util.regex.Pattern`                                                                               |
|  -66.7% |    -4 | 0.1% → <0.1% |   6 → 2 | `valueOf(boolean)`                                                                                          | `java.lang.Boolean`                                                                                     |
| removed |    -4 |  0.1% → 0.0% |   4 → 0 | `visitAnnotations(Iterable)`                                                                                | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                                                       |
| removed |    -3 | <0.1% → 0.0% |   3 → 0 | `isNullType(Class)`                                                                                         | `sun.invoke.util.VerifyType`                                                                            |
| removed |    -3 | <0.1% → 0.0% |   3 → 0 | `initialize()`                                                                                              | `groovy.lang.MetaClassImpl`                                                                             |
| removed |    -3 | <0.1% → 0.0% |   3 → 0 | `prepare()`                                                                                                 | `java.lang.invoke.LambdaForm`                                                                           |
|  -60.0% |    -3 | 0.1% → <0.1% |   5 → 2 | `makeImpl(Class, Class[], boolean)`                                                                         | `java.lang.invoke.MethodType`                                                                           |
|  -60.0% |    -3 | 0.1% → <0.1% |   5 → 2 | `getMetaClass()`                                                                                            | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector`                                               |
|  -75.0% |    -3 | 0.1% → <0.1% |   4 → 1 | `invokeExact_MT(Object, Object, Object)`                                                                    | `java.lang.invoke.Invokers$Holder`                                                                      |

##### Ours

|  Change | Delta |            % | Samples | Function                                          | Location                                                                     |
| ------: | ----: | -----------: | ------: | ------------------------------------------------- | ---------------------------------------------------------------------------- |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `getMetaClass()`                                  | `org.codenarc.rule.formatting.IndentationRule`                               |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `<init>(String, boolean)`                         | `org.codenarc.util.WildcardPattern`                                          |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `doCall(Object)`                                  | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`   |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `shouldApplyThisRuleTo(SourceCode)`               | `org.codenarc.rule.AbstractRule`                                             |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `isCollectMethodCall(Expression)`                 | `org.codenarc.rule.groovyism.UseCollectNestedAstVisitor`                     |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `matches(SourceCode)`                             | `org.codenarc.source.SourceCodeCriteria`                                     |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `<init>()`                                        | `org.codenarc.rule.AbstractAstVisitor`                                       |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `setSourceCode(SourceCode)`                       | `org.codenarc.rule.AbstractAstVisitor`                                       |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `visitMethodCallExpression(MethodCallExpression)` | `org.codenarc.rule.unused.UnusedVariableAstVisitor`                          |
|  -50.0% |    -1 |        <0.1% |   2 → 1 | `addViolationIfDuplicate(Expression, boolean)`    | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                           |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `<init>(String)`                                  | `org.codenarc.rule.exceptions.CommonCatchAstVisitor`                         |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `visitVariableExpression(VariableExpression)`     | `org.codenarc.rule.unused.UnusedPrivateMethodAstVisitor`                     |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `getMetaClass()`                                  | `org.codenarc.rule.formatting.SpaceAfterMethodDeclarationNameRuleAstVisitor` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `visitBinaryExpression(BinaryExpression)`         | `org.codenarc.rule.design.PrivateFieldCouldBeFinalAstVisitor`                |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `visitMethodCallExpression(MethodCallExpression)` | `org.codenarc.rule.unnecessary.UnnecessarySafeNavigationOperatorAstVisitor`  |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `getMetaClass()`                                  | `org.codenarc.rule.braces.ElseBlockBracesRule`                               |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `isMethodCallOnObject(Expression, String)`        | `org.codenarc.util.AstUtil`                                                  |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `applyTo(SourceCode, List)`                       | `org.codenarc.rule.formatting.ConsecutiveBlankLinesRule`                     |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `getMetaClass()`                                  | `org.codenarc.rule.formatting.TrailingWhitespaceRule`                        |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `visitConstantExpression(ConstantExpression)`     | `org.codenarc.rule.groovyism.GStringExpressionWithinStringAstVisitor`        |

##### JIT

|  Change | Delta |            % | Samples | Function                  | Location    |
| ------: | ----: | -----------: | ------: | ------------------------- | ----------- |
|  -20.8% |    -5 |         0.4% | 24 → 19 | `itable stub`             | `<unknown>` |
|  -80.0% |    -4 | 0.1% → <0.1% |   5 → 1 | `zero_blocks`             | `<unknown>` |
|  -20.0% |    -1 |         0.1% |   5 → 4 | `I2C/C2I adapters(0xbbb)` | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `I2C/C2I adapters(0xaa)`  | `<unknown>` |

#### Lines

Lines with the largest change in contribution to each function's self samples.

##### `equals(Object[], Object[])` (`java.util.Arrays`)

|  Change | Delta |             % | Samples | Location                |
| ------: | ----: | ------------: | ------: | ----------------------- |
| +266.7% |    +8 | 50.0% → 68.8% |  3 → 11 | `java.util.Arrays:2979` |
| +300.0% |    +3 | 16.7% → 25.0% |   1 → 4 | `java.util.Arrays:2980` |
| removed |    -2 |  33.3% → 0.0% |   2 → 0 | `java.util.Arrays:2970` |
|     new |    +1 |   0.0% → 6.3% |   0 → 1 | `java.util.Arrays:2976` |

##### `<init>(Method, boolean)` (`java.lang.invoke.MemberName`)

|  Change | Delta |             % | Samples | Location                          |
| ------: | ----: | ------------: | ------: | --------------------------------- |
|     new |    +7 |  0.0% → 70.0% |   0 → 7 | `java.lang.invoke.MemberName:533` |
| +200.0% |    +2 | 50.0% → 30.0% |   1 → 3 | `java.lang.invoke.MemberName:535` |
| removed |    -1 |  50.0% → 0.0% |   1 → 0 | `java.lang.invoke.MemberName:564` |

##### `cast(Object)` (`java.lang.Class`)

| Change | Delta |              % |   Samples | Location               |
| -----: | ----: | -------------: | --------: | ---------------------- |
|  +6.9% |    +7 | 100.0% → 99.1% | 101 → 108 | `java.lang.Class:4068` |
|    new |    +1 |    0.0% → 0.9% |     0 → 1 | `java.lang.Class:4069` |

##### `internalMemberName(Object)` (`java.lang.invoke.DirectMethodHandle`)

|  Change | Delta |      % | Samples | Location                                  |
| ------: | ----: | -----: | ------: | ----------------------------------------- |
| +350.0% |    +7 | 100.0% |   2 → 9 | `java.lang.invoke.DirectMethodHandle:327` |

##### `get(Object)` (`java.util.concurrent.ConcurrentHashMap`)

|  Change | Delta |            % | Samples | Location                                     |
| ------: | ----: | -----------: | ------: | -------------------------------------------- |
| +100.0% |    +2 |        33.3% |   2 → 4 | `java.util.concurrent.ConcurrentHashMap:940` |
|     new |    +2 | 0.0% → 16.7% |   0 → 2 | `java.util.concurrent.ConcurrentHashMap:939` |
| removed |    -1 | 16.7% → 0.0% |   1 → 0 | `java.util.concurrent.ConcurrentHashMap:941` |
| +100.0% |    +1 |        16.7% |   1 → 2 | `java.util.concurrent.ConcurrentHashMap:946` |
|     new |    +1 |  0.0% → 8.3% |   0 → 1 | `java.util.concurrent.ConcurrentHashMap:947` |

##### `resize()` (`java.util.HashMap`)

| Change | Delta |             % | Samples | Location                |
| -----: | ----: | ------------: | ------: | ----------------------- |
| -50.0% |    -3 | 60.0% → 18.8% |   6 → 3 | `java.util.HashMap:711` |
|    new |    +3 |  0.0% → 18.8% |   0 → 3 | `java.util.HashMap:720` |
|    new |    +3 |  0.0% → 18.8% |   0 → 3 | `java.util.HashMap:727` |
|    new |    +2 |  0.0% → 12.5% |   0 → 2 | `java.util.HashMap:715` |
|    new |    +2 |  0.0% → 12.5% |   0 → 2 | `java.util.HashMap:718` |

##### `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

|  Change | Delta |             % | Samples | Location                                            |
| ------: | ----: | ------------: | ------: | --------------------------------------------------- |
| +300.0% |    +3 | 25.0% → 44.4% |   1 → 4 | `org.codehaus.groovy.vmplugin.v8.IndyInterface:298` |
|     new |    +2 |  0.0% → 22.2% |   0 → 2 | `org.codehaus.groovy.vmplugin.v8.IndyInterface:314` |
|  -33.3% |    -1 | 75.0% → 22.2% |   3 → 2 | `org.codehaus.groovy.vmplugin.v8.IndyInterface:293` |
|     new |    +1 |  0.0% → 11.1% |   0 → 1 | `org.codehaus.groovy.vmplugin.v8.IndyInterface:315` |

##### `getNode(Object)` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Location                |
| ------: | ----: | ------------: | ------: | ----------------------- |
|     new |    +3 |  0.0% → 15.8% |   0 → 3 | `java.util.HashMap:587` |
|     new |    +2 |  0.0% → 10.5% |   0 → 2 | `java.util.HashMap:580` |
|  -20.0% |    -1 | 33.3% → 21.1% |   5 → 4 | `java.util.HashMap:577` |
| removed |    -1 |   6.7% → 0.0% |   1 → 0 | `java.util.HashMap:579` |
|  -50.0% |    -1 |  13.3% → 5.3% |   2 → 1 | `java.util.HashMap:582` |

##### `getAndPut(String, MemoizeCache$ValueProvider)` (`org.codehaus.groovy.vmplugin.v8.CacheableCallSite`)

|  Change | Delta |             % | Samples | Location                                               |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------ |
|     new |    +3 |  0.0% → 21.4% |   0 → 3 | `org.codehaus.groovy.vmplugin.v8.CacheableCallSite:63` |
|  -33.3% |    -1 | 30.0% → 14.3% |   3 → 2 | `org.codehaus.groovy.vmplugin.v8.CacheableCallSite:62` |
| +100.0% |    +1 | 10.0% → 14.3% |   1 → 2 | `org.codehaus.groovy.vmplugin.v8.CacheableCallSite:65` |
|  -33.3% |    -1 | 30.0% → 14.3% |   3 → 2 | `org.codehaus.groovy.vmplugin.v8.CacheableCallSite:74` |
|     new |    +1 |   0.0% → 7.1% |   0 → 1 | `org.codehaus.groovy.vmplugin.v8.CacheableCallSite:70` |

##### `catchException(MethodHandle, Class, MethodHandle)` (`java.lang.invoke.MethodHandles`)

| Change | Delta |             % | Samples | Location                              |
| -----: | ----: | ------------: | ------: | ------------------------------------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `java.lang.invoke.MethodHandles:6407` |

##### `chooseMeta(MetaClassImpl)` (`org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector`)

| Change | Delta |             % | Samples | Location                                                      |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector:592` |

##### `getOptimizedTransition(int)` (`groovyjarjarantlr4.v4.runtime.atn.ATNState`)

|  Change | Delta |      % | Samples | Location                                         |
| ------: | ----: | -----: | ------: | ------------------------------------------------ |
| +400.0% |    +4 | 100.0% |   1 → 5 | `groovyjarjarantlr4.v4.runtime.atn.ATNState:223` |

##### `getMethodsRecursive(String, Class[], boolean)` (`java.lang.Class`)

| Change | Delta |            % | Samples | Location               |
| -----: | ----: | -----------: | ------: | ---------------------- |
|    new |    +2 | 0.0% → 66.7% |   0 → 2 | `java.lang.Class:3721` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `java.lang.Class:3733` |

##### `isFinalVariable(DeclarationExpression, SourceCode)` (`org.gmetrics.util.AstUtil`)

| Change | Delta |            % | Samples | Location                        |
| -----: | ----: | -----------: | ------: | ------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `org.gmetrics.util.AstUtil:209` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `org.gmetrics.util.AstUtil:212` |

##### `getAt(String)` (`org.gmetrics.result.SingleNumberMetricResult`)

| Change | Delta |             % | Samples | Location                                          |
| -----: | ----: | ------------: | ------: | ------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `org.gmetrics.result.SingleNumberMetricResult:54` |

##### `isRuleSuppressed(Rule)` (`org.codenarc.analyzer.SuppressionAnalyzer`)

| Change | Delta |             % | Samples | Location                                       |
| -----: | ----: | ------------: | ------: | ---------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.codenarc.analyzer.SuppressionAnalyzer:37` |

##### `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

| Change | Delta |             % | Samples | Location                                          |
| -----: | ----: | ------------: | ------: | ------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.codenarc.analyzer.AbstractSourceAnalyzer:44` |

##### `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`)

| Change | Delta |             % | Samples | Location                             |
| -----: | ----: | ------------: | ------: | ------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.codenarc.rule.AbstractRule:139` |

##### `getAstVisitor()` (`org.codenarc.rule.AbstractAstVisitorRule`)

| Change | Delta |             % | Samples | Location                                      |
| -----: | ----: | ------------: | ------: | --------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.codenarc.rule.AbstractAstVisitorRule:79` |

##### `getLines()` (`org.codenarc.source.AbstractSourceCode`)

| Change | Delta |             % | Samples | Location                                    |
| -----: | ----: | ------------: | ------: | ------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.codenarc.source.AbstractSourceCode:62` |

##### `getRawLine(SourceCode, int)` (`org.codenarc.util.AstUtil`)

| Change | Delta |             % | Samples | Location                         |
| -----: | ----: | ------------: | ------: | -------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.codenarc.util.AstUtil:1142` |

##### `visitMethod(MethodNode)` (`org.codenarc.rule.AbstractAstVisitor`)

| Change | Delta |             % | Samples | Location                                   |
| -----: | ----: | ------------: | ------: | ------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.codenarc.rule.AbstractAstVisitor:146` |

##### `visitConstructorOrMethod(MethodNode, boolean)` (`org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor`)

| Change | Delta |             % | Samples | Location                                                    |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor:49` |

##### `visitClassComplete(ClassNode)` (`org.codenarc.rule.convention.StaticFieldsBeforeInstanceFieldsAstVisitor`)

| Change | Delta |             % | Samples | Location                                                                     |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.codenarc.rule.convention.StaticFieldsBeforeInstanceFieldsAstVisitor:51` |

##### `visitConstantExpression(ConstantExpression)` (`org.codenarc.rule.unnecessary.UnnecessaryGStringAstVisitor`)

| Change | Delta |             % | Samples | Location                                                        |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.codenarc.rule.unnecessary.UnnecessaryGStringAstVisitor:45` |

##### `line(int)` (`org.codenarc.source.AbstractSourceCode`)

| Change | Delta |             % | Samples | Location                                    |
| -----: | ----: | ------------: | ------: | ------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.codenarc.source.AbstractSourceCode:75` |

##### `findLineWithDeclaration(ASTNode, String)` (`org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`)

| Change | Delta |             % | Samples | Location                                                               |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor:91` |

##### `checkForViolations(ASTNode)` (`org.codenarc.rule.formatting.BlockStartsWithBlankLineAstVisitor`)

| Change | Delta |             % | Samples | Location                                                             |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.codenarc.rule.formatting.BlockStartsWithBlankLineAstVisitor:85` |

##### `visitBlockStatement(BlockStatement)` (`org.codenarc.rule.formatting.SpaceBeforeClosingBraceAstVisitor`)

| Change | Delta |             % | Samples | Location                                                            |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.codenarc.rule.formatting.SpaceBeforeClosingBraceAstVisitor:78` |

##### `processParameters(Parameter[], String)` (`org.codenarc.rule.convention.NoFloatAstVisitor`)

| Change | Delta |             % | Samples | Location                                            |
| -----: | ----: | ------------: | ------: | --------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.codenarc.rule.convention.NoFloatAstVisitor:78` |

##### `getAnnotation(AnnotatedNode, String)` (`org.codenarc.util.AstUtil`)

| Change | Delta |             % | Samples | Location                        |
| -----: | ----: | ------------: | ------: | ------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.codenarc.util.AstUtil:477` |

##### `<init>(String)` (`org.codenarc.rule.groovyism.ExplicitCallToMethodAstVisitor`)

| Change | Delta |             % | Samples | Location                                                        |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.codenarc.rule.groovyism.ExplicitCallToMethodAstVisitor:46` |

##### `computeValueConversions(MethodType, MethodType, boolean, boolean)` (`java.lang.invoke.MethodHandleImpl`)

|  Change | Delta |             % | Samples | Location                                |
| ------: | ----: | ------------: | ------: | --------------------------------------- |
|  -83.3% |    -5 | 54.5% → 33.3% |   6 → 1 | `java.lang.invoke.MethodHandleImpl:367` |
| removed |    -4 |  36.4% → 0.0% |   4 → 0 | `java.lang.invoke.MethodHandleImpl:368` |
| removed |    -1 |   9.1% → 0.0% |   1 → 0 | `java.lang.invoke.MethodHandleImpl:370` |
|     new |    +1 |  0.0% → 33.3% |   0 → 1 | `java.lang.invoke.MethodHandleImpl:372` |
|     new |    +1 |  0.0% → 33.3% |   0 → 1 | `java.lang.invoke.MethodHandleImpl:375` |

##### `equals(Object, Object)` (`java.util.Objects`)

| Change | Delta |      % | Samples | Location               |
| -----: | ----: | -----: | ------: | ---------------------- |
| -33.3% |    -6 | 100.0% | 18 → 12 | `java.util.Objects:64` |

##### `type()` (`java.lang.invoke.MethodHandle`)

| Change | Delta |      % | Samples | Location                            |
| -----: | ----: | -----: | ------: | ----------------------------------- |
| -50.0% |    -6 | 100.0% |  12 → 6 | `java.lang.invoke.MethodHandle:468` |

##### `makeReinvokerForm(MethodHandle, int, Object, boolean, LambdaForm$NamedFunction, LambdaForm$NamedFunction)` (`java.lang.invoke.DelegatingMethodHandle`)

| Change | Delta |             % | Samples | Location                                      |
| -----: | ----: | ------------: | ------: | --------------------------------------------- |
| -60.0% |    -3 | 55.6% → 50.0% |   5 → 2 | `java.lang.invoke.DelegatingMethodHandle:129` |
| -75.0% |    -3 | 44.4% → 25.0% |   4 → 1 | `java.lang.invoke.DelegatingMethodHandle:133` |
|    new |    +1 |  0.0% → 25.0% |   0 → 1 | `java.lang.invoke.DelegatingMethodHandle:132` |

##### `<init>(MethodType, LambdaForm)` (`java.lang.invoke.MethodHandle`)

| Change | Delta |             % | Samples | Location                            |
| -----: | ----: | ------------: | ------: | ----------------------------------- |
| -26.7% |    -4 | 78.9% → 73.3% | 15 → 11 | `java.lang.invoke.MethodHandle:479` |

##### `get()` (`java.lang.ref.SoftReference`)

|  Change | Delta |             % | Samples | Location                          |
| ------: | ----: | ------------: | ------: | --------------------------------- |
| removed |    -3 |  25.0% → 0.0% |   3 → 0 | `java.lang.ref.SoftReference:114` |
| +150.0% |    +3 | 16.7% → 62.5% |   2 → 5 | `java.lang.ref.SoftReference:115` |
|  -50.0% |    -2 | 33.3% → 25.0% |   4 → 2 | `java.lang.ref.SoftReference:113` |
|  -66.7% |    -2 | 25.0% → 12.5% |   3 → 1 | `java.lang.ref.SoftReference:116` |

##### `allocateInstance(Object)` (`java.lang.invoke.DirectMethodHandle`)

| Change | Delta |      % | Samples | Location                                  |
| -----: | ----: | -----: | ------: | ----------------------------------------- |
| -80.0% |    -4 | 100.0% |   5 → 1 | `java.lang.invoke.DirectMethodHandle:501` |

##### `sameClasses(Class[], Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyGuardsFiltersAndSignatures`)

| Change | Delta |             % | Samples | Location                                                             |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------------- |
| -75.0% |    -3 | 66.7% → 50.0% |   4 → 1 | `org.codehaus.groovy.vmplugin.v8.IndyGuardsFiltersAndSignatures:224` |
| -50.0% |    -1 | 33.3% → 50.0% |   2 → 1 | `org.codehaus.groovy.vmplugin.v8.IndyGuardsFiltersAndSignatures:229` |

##### `sequence(Pattern$Node)` (`java.util.regex.Pattern`)

|  Change | Delta |             % | Samples | Location                       |
| ------: | ----: | ------------: | ------: | ------------------------------ |
| removed |    -5 | 100.0% → 0.0% |   5 → 0 | `java.util.regex.Pattern:2296` |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.regex.Pattern:2397` |

##### `valueOf(boolean)` (`java.lang.Boolean`)

| Change | Delta |      % | Samples | Location                |
| -----: | ----: | -----: | ------: | ----------------------- |
| -66.7% |    -4 | 100.0% |   6 → 2 | `java.lang.Boolean:179` |

##### `visitAnnotations(Iterable)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|  Change | Delta |             % | Samples | Location                                             |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------- |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | `org.codehaus.groovy.ast.ClassCodeVisitorSupport:61` |

##### `isNullType(Class)` (`sun.invoke.util.VerifyType`)

|  Change | Delta |            % | Samples | Location                        |
| ------: | ----: | -----------: | ------: | ------------------------------- |
| removed |    -2 | 66.7% → 0.0% |   2 → 0 | `sun.invoke.util.VerifyType:95` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `sun.invoke.util.VerifyType:97` |

##### `initialize()` (`groovy.lang.MetaClassImpl`)

|  Change | Delta |             % | Samples | Location                         |
| ------: | ----: | ------------: | ------: | -------------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `groovy.lang.MetaClassImpl:3440` |

##### `prepare()` (`java.lang.invoke.LambdaForm`)

|  Change | Delta |             % | Samples | Location                          |
| ------: | ----: | ------------: | ------: | --------------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `java.lang.invoke.LambdaForm:809` |

##### `makeImpl(Class, Class[], boolean)` (`java.lang.invoke.MethodType`)

|  Change | Delta |              % | Samples | Location                          |
| ------: | ----: | -------------: | ------: | --------------------------------- |
|  -50.0% |    -2 | 80.0% → 100.0% |   4 → 2 | `java.lang.invoke.MethodType:397` |
| removed |    -1 |   20.0% → 0.0% |   1 → 0 | `java.lang.invoke.MethodType:400` |

##### `getMetaClass()` (`org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector`)

|  Change | Delta |            % | Samples | Location                                                      |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------- |
| removed |    -2 | 40.0% → 0.0% |   2 → 0 | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector:572` |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector:575` |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector:579` |
|     new |    +1 | 0.0% → 50.0% |   0 → 1 | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector:578` |

##### `<init>(String, boolean)` (`org.codenarc.util.WildcardPattern`)

|  Change | Delta |             % | Samples | Location                               |
| ------: | ----: | ------------: | ------: | -------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.codenarc.util.WildcardPattern:51` |

##### `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`)

|  Change | Delta |             % | Samples | Location                                                                      |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1:38` |

##### `shouldApplyThisRuleTo(SourceCode)` (`org.codenarc.rule.AbstractRule`)

|  Change | Delta |             % | Samples | Location                             |
| ------: | ----: | ------------: | ------: | ------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.codenarc.rule.AbstractRule:257` |

##### `isCollectMethodCall(Expression)` (`org.codenarc.rule.groovyism.UseCollectNestedAstVisitor`)

|  Change | Delta |             % | Samples | Location                                                     |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.codenarc.rule.groovyism.UseCollectNestedAstVisitor:106` |

##### `matches(SourceCode)` (`org.codenarc.source.SourceCodeCriteria`)

|  Change | Delta |             % | Samples | Location                                    |
| ------: | ----: | ------------: | ------: | ------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.codenarc.source.SourceCodeCriteria:68` |

##### `<init>()` (`org.codenarc.rule.AbstractAstVisitor`)

|  Change | Delta |             % | Samples | Location                                  |
| ------: | ----: | ------------: | ------: | ----------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.codenarc.rule.AbstractAstVisitor:34` |

##### `setSourceCode(SourceCode)` (`org.codenarc.rule.AbstractAstVisitor`)

|  Change | Delta |             % | Samples | Location                                   |
| ------: | ----: | ------------: | ------: | ------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.codenarc.rule.AbstractAstVisitor:177` |

##### `visitMethodCallExpression(MethodCallExpression)` (`org.codenarc.rule.unused.UnusedVariableAstVisitor`)

|  Change | Delta |             % | Samples | Location                                                |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.codenarc.rule.unused.UnusedVariableAstVisitor:150` |

##### `addViolationIfDuplicate(Expression, boolean)` (`org.codenarc.rule.dry.DuplicateLiteralAstVisitor`)

|  Change | Delta |             % | Samples | Location                                               |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------ |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor:148` |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor:132` |

##### `<init>(String)` (`org.codenarc.rule.exceptions.CommonCatchAstVisitor`)

|  Change | Delta |             % | Samples | Location                                                |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.codenarc.rule.exceptions.CommonCatchAstVisitor:36` |

##### `visitVariableExpression(VariableExpression)` (`org.codenarc.rule.unused.UnusedPrivateMethodAstVisitor`)

|  Change | Delta |             % | Samples | Location                                                     |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.codenarc.rule.unused.UnusedPrivateMethodAstVisitor:137` |

##### `visitBinaryExpression(BinaryExpression)` (`org.codenarc.rule.design.PrivateFieldCouldBeFinalAstVisitor`)

|  Change | Delta |             % | Samples | Location                                                         |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.codenarc.rule.design.PrivateFieldCouldBeFinalAstVisitor:97` |

##### `visitMethodCallExpression(MethodCallExpression)` (`org.codenarc.rule.unnecessary.UnnecessarySafeNavigationOperatorAstVisitor`)

|  Change | Delta |             % | Samples | Location                                                                       |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.codenarc.rule.unnecessary.UnnecessarySafeNavigationOperatorAstVisitor:51` |

##### `isMethodCallOnObject(Expression, String)` (`org.codenarc.util.AstUtil`)

|  Change | Delta |             % | Samples | Location                        |
| ------: | ----: | ------------: | ------: | ------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.codenarc.util.AstUtil:269` |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.formatting.ConsecutiveBlankLinesRule`)

|  Change | Delta |             % | Samples | Location                                                    |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.codenarc.rule.formatting.ConsecutiveBlankLinesRule:41` |

##### `visitConstantExpression(ConstantExpression)` (`org.codenarc.rule.groovyism.GStringExpressionWithinStringAstVisitor`)

|  Change | Delta |             % | Samples | Location                                                                 |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.codenarc.rule.groovyism.GStringExpressionWithinStringAstVisitor:44` |

#### Callers

Callers with the largest change in contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `RegisterMap::RegisterMap` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller               | Location       |
| -----: | ----: | ------------: | ------: | -------------------- | -------------- |
| +23.0% |   +17 | 87.1% → 86.7% | 74 → 91 | `vframe::vframe`     | `libjvm.dylib` |
| +27.3% |    +3 | 12.9% → 13.3% | 11 → 14 | `vframe::new_vframe` | `libjvm.dylib` |

##### `pthread_jit_write_protect_np` (`libsystem_pthread.dylib`)

|  Change | Delta |             % | Samples | Caller                                           | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------------ | -------------- |
|  +15.9% |   +10 | 64.3% → 65.8% | 63 → 73 | `JVM_NewArray`                                   | `libjvm.dylib` |
| +600.0% |    +6 |   1.0% → 6.3% |   1 → 7 | `Unsafe_AllocateInstance`                        | `libjvm.dylib` |
| +200.0% |    +4 |   2.0% → 5.4% |   2 → 6 | `InterpreterRuntime::ldc`                        | `libjvm.dylib` |
| removed |    -2 |   2.0% → 0.0% |   2 → 0 | `InterpreterRuntime::frequency_counter_overflow` | `libjvm.dylib` |
|  -66.7% |    -2 |   3.1% → 0.9% |   3 → 1 | `JavaCallWrapper::JavaCallWrapper`               | `libjvm.dylib` |

##### `LIR_OpVisitState::visit` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------- | -------------- |
| +300.0% |    +6 | 22.2% → 36.4% |   2 → 8 | `LinearScan::build_intervals`         | `libjvm.dylib` |
|  +60.0% |    +3 | 55.6% → 36.4% |   5 → 8 | `LinearScan::assign_reg_num`          | `libjvm.dylib` |
| +100.0% |    +2 | 22.2% → 18.2% |   2 → 4 | `LinearScan::compute_local_live_sets` | `libjvm.dylib` |
|     new |    +2 |   0.0% → 9.1% |   0 → 2 | `LinearScan::do_linear_scan`          | `libjvm.dylib` |

##### `invokeBasic(Object[])` (`java.lang.invoke.MethodHandle`)

|  Change | Delta |           % | Samples | Caller                                                                                      | Location                                                                                                  |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
|     new |    +3 | 0.0% → 7.9% |   0 → 3 | `invokeExact_MT(Object, Object, Object)`                                                    | `java.lang.invoke.Invokers$Holder`                                                                        |
| removed |    -2 | 7.7% → 0.0% |   2 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000700109a400`                                                       |
| removed |    -2 | 7.7% → 0.0% |   2 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000700102ac00`                                                       |
| +200.0% |    +2 | 3.8% → 7.9% |   1 → 3 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800 → java.lang.invoke.LambdaForm$DMH.0x000000f001088800` |
|     new |    +2 | 0.0% → 5.3% |   0 → 2 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000f00128c800`                                                       |

##### `LinearScanWalker::free_collect_inactive_fixed` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                             | Location       |
| ------: | ----: | -----: | ------: | ---------------------------------- | -------------- |
| +100.0% |   +12 | 100.0% | 12 → 24 | `LinearScanWalker::alloc_free_reg` | `libjvm.dylib` |

##### `equals(Object[], Object[])` (`java.util.Arrays`)

|  Change | Delta |      % | Samples | Caller               | Location                      |
| ------: | ----: | -----: | ------: | -------------------- | ----------------------------- |
| +166.7% |   +10 | 100.0% |  6 → 16 | `equals(MethodType)` | `java.lang.invoke.MethodType` |

##### `java_lang_Throwable::fill_in_stack_trace` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                                     | Location       |
| -----: | ----: | -----: | ------: | ------------------------------------------ | -------------- |
| +19.6% |   +10 | 100.0% | 51 → 61 | `java_lang_Throwable::fill_in_stack_trace` | `libjvm.dylib` |

##### `<init>(Method, boolean)` (`java.lang.invoke.MemberName`)

|  Change | Delta |      % | Samples | Caller           | Location                      |
| ------: | ----: | -----: | ------: | ---------------- | ----------------------------- |
| +400.0% |    +8 | 100.0% |  2 → 10 | `<init>(Method)` | `java.lang.invoke.MemberName` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f00102ac00`)

| Change | Delta |            % | Samples | Caller                   | Location                                            |
| -----: | ----: | -----------: | ------: | ------------------------ | --------------------------------------------------- |
|    new |    +5 | 0.0% → 62.5% |   0 → 5 | `invoke(Object, int)`    | `java.lang.invoke.LambdaForm$MH.0x000000f001031400` |
|    new |    +1 | 0.0% → 12.5% |   0 → 1 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f001337c00` |
|    new |    +1 | 0.0% → 12.5% |   0 → 1 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f001337400` |
|    new |    +1 | 0.0% → 12.5% |   0 → 1 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f001766800` |

##### `cast(Object)` (`java.lang.Class`)

|  Change | Delta |              % |   Samples | Caller                                                 | Location                                                      |
| ------: | ----: | -------------: | --------: | ------------------------------------------------------ | ------------------------------------------------------------- |
|   +9.0% |    +9 | 99.0% → 100.0% | 100 → 109 | `invokeSpecial(Object, Object, Object)`                | `java.lang.invoke.DirectMethodHandle$Holder`                  |
| removed |    -1 |    1.0% → 0.0% |     1 → 0 | `weakCompareAndSet(VarHandle, Object, Object, Object)` | `java.lang.invoke.VarHandleReferences$FieldInstanceReadWrite` |

##### `frame::sender_for_compiled_frame` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                     | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------ | -------------- |
|  +90.9% |   +10 | 57.9% → 80.8% | 11 → 21 | `java_lang_Throwable::fill_in_stack_trace` | `libjvm.dylib` |
|  -42.9% |    -3 | 36.8% → 15.4% |   7 → 4 | `frame::real_sender`                       | `libjvm.dylib` |
| removed |    -1 |   5.3% → 0.0% |   1 → 0 | `vframeStreamCommon::next`                 | `libjvm.dylib` |
|     new |    +1 |   0.0% → 3.8% |   0 → 1 | `vframe::sender`                           | `libjvm.dylib` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f00109a400`)

|  Change | Delta |             % | Samples | Caller                                   | Location                                            |
| ------: | ----: | ------------: | ------: | ---------------------------------------- | --------------------------------------------------- |
|     new |    +6 |  0.0% → 75.0% |   0 → 6 | `guard(Object, Object)`                  | `java.lang.invoke.LambdaForm$MH.0x000000f00109a000` |
|     new |    +2 |  0.0% → 25.0% |   0 → 2 | `guard(Object, Object)`                  | `java.lang.invoke.LambdaForm$MH.0x000000f0010cb000` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `invokeExact_MT(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |

##### `internalMemberName(Object)` (`java.lang.invoke.DirectMethodHandle`)

|  Change | Delta |             % | Samples | Caller                                                                 | Location                                             |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------- | ---------------------------------------------------- |
| +300.0% |    +3 | 50.0% → 44.4% |   1 → 4 | `invokeSpecial(Object, Object, Object)`                                | `java.lang.invoke.DirectMethodHandle$Holder`         |
|     new |    +2 |  0.0% → 22.2% |   0 → 2 | `invokeStatic(Object, Object, int)`                                    | `java.lang.invoke.LambdaForm$DMH.0x000000f00102b400` |
|     new |    +2 |  0.0% → 22.2% |   0 → 2 | `invokeStatic(Object, Object, Object)`                                 | `java.lang.invoke.DirectMethodHandle$Holder`         |
| removed |    -1 |  50.0% → 0.0% |   1 → 0 | `invokeStatic(Object, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |
|     new |    +1 |  0.0% → 11.1% |   0 → 1 | `invokeVirtual(Object, Object, Object, Object)`                        | `java.lang.invoke.LambdaForm$DMH.0x000000f001094400` |

##### `Compile::find_alias_type` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                              | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------------- | -------------- |
|  +37.5% |    +3 | 80.0% → 64.7% |  8 → 11 | `ConnectionGraph::create_split_phi` | `libjvm.dylib` |
|     new |    +2 |  0.0% → 11.8% |   0 → 2 | `ConnectionGraph::find_inst_mem`    | `libjvm.dylib` |
| removed |    -1 |  10.0% → 0.0% |   1 → 0 | `MemNode::can_see_stored_value`     | `libjvm.dylib` |
|     new |    +1 |   0.0% → 5.9% |   0 → 1 | `PhaseCFG::insert_anti_dependences` | `libjvm.dylib` |
|     new |    +1 |   0.0% → 5.9% |   0 → 1 | `LoadNode::Ideal`                   | `libjvm.dylib` |

##### `Node::latency` (`libjvm.dylib`)

| Change | Delta |              % | Samples | Caller                              | Location       |
| -----: | ----: | -------------: | ------: | ----------------------------------- | -------------- |
|    new |    +5 |   0.0% → 50.0% |   0 → 5 | `Scheduling::AddNodeToBundle`       | `libjvm.dylib` |
| +66.7% |    +2 | 100.0% → 50.0% |   3 → 5 | `PhaseCFG::partial_latency_of_defs` | `libjvm.dylib` |

##### `vmSymbols::find_sid` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                         | Location       |
| -----: | ----: | ------------: | ------: | ---------------------------------------------- | -------------- |
| +23.8% |    +5 | 84.0% → 81.3% | 21 → 26 | `ciObjectFactory::get_symbol`                  | `libjvm.dylib` |
| +25.0% |    +1 | 16.0% → 15.6% |   4 → 5 | `MethodHandles::signature_polymorphic_name_id` | `libjvm.dylib` |
|    new |    +1 |   0.0% → 3.1% |   0 → 1 | `AnnotationCollector::annotation_index`        | `libjvm.dylib` |

##### `get(Object)` (`java.util.concurrent.ConcurrentHashMap`)

|  Change | Delta |             % | Samples | Caller                         | Location                                           |
| ------: | ----: | ------------: | ------: | ------------------------------ | -------------------------------------------------- |
| +200.0% |    +4 | 33.3% → 50.0% |   2 → 6 | `getNoCheckStale(Object)`      | `jdk.internal.util.ReferencedKeyMap`               |
| removed |    -1 |  16.7% → 0.0% |   1 → 0 | `findLoadedModule(String)`     | `jdk.internal.loader.BuiltinClassLoader`           |
|     new |    +1 |   0.0% → 8.3% |   0 → 1 | `getOrDefault(Object, Object)` | `java.util.concurrent.ConcurrentHashMap`           |
|     new |    +1 |   0.0% → 8.3% |   0 → 1 | `getDefaultUseCaches(String)`  | `java.net.URLConnection`                           |
|     new |    +1 |   0.0% → 8.3% |   0 → 1 | `getAt(Map, Object)`           | `org.codehaus.groovy.runtime.DefaultGroovyMethods` |

##### `resize()` (`java.util.HashMap`)

| Change | Delta |      % | Samples | Caller                                          | Location            |
| -----: | ----: | -----: | ------: | ----------------------------------------------- | ------------------- |
| +60.0% |    +6 | 100.0% | 10 → 16 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `DebugInformationRecorder::describe_scope` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                           | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------------ | -------------- |
| +200.0% |    +4 | 33.3% → 50.0% |   2 → 6 | `NonSafepointEmitter::emit_non_safepoint`        | `libjvm.dylib` |
|     new |    +2 |  0.0% → 16.7% |   0 → 2 | `LIR_Assembler::record_non_safepoint_debug_info` | `libjvm.dylib` |
|  -33.3% |    -1 | 50.0% → 16.7% |   3 → 2 | `PhaseOutput::Process_OopMap_Node`               | `libjvm.dylib` |
| +100.0% |    +1 |         16.7% |   1 → 2 | `IRScopeDebugInfo::record_debug_info`            | `libjvm.dylib` |

##### `JVMState::clone_shallow` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                 | Location       |
| -----: | ----: | -----------: | ------: | ---------------------- | -------------- |
|    new |    +3 | 0.0% → 42.9% |   0 → 3 | `Parse::do_one_block`  | `libjvm.dylib` |
|    new |    +1 | 0.0% → 14.3% |   0 → 1 | `JVMState::clone_deep` | `libjvm.dylib` |
|    new |    +1 | 0.0% → 14.3% |   0 → 1 | `Parse::do_if`         | `libjvm.dylib` |
|    new |    +1 | 0.0% → 14.3% |   0 → 1 | `Node::clone`          | `libjvm.dylib` |

##### `PhiNode::is_unsafe_data_reference` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                  | Location       |
| ------: | ----: | ------------: | ------: | ----------------------- | -------------- |
| +200.0% |    +4 | 33.3% → 54.5% |   2 → 6 | `PhiNode::is_data_loop` | `libjvm.dylib` |
|  +25.0% |    +1 | 66.7% → 45.5% |   4 → 5 | `RegionNode::Ideal`     | `libjvm.dylib` |

##### `LinearScan::assign_reg_num` (`libjvm.dylib`)

| Change | Delta |              % | Samples | Caller                       | Location       |
| -----: | ----: | -------------: | ------: | ---------------------------- | -------------- |
| +80.0% |    +4 | 100.0% → 90.0% |   5 → 9 | `LinearScan::do_linear_scan` | `libjvm.dylib` |
|    new |    +1 |   0.0% → 10.0% |   0 → 1 | `Compilation::emit_lir`      | `libjvm.dylib` |

##### `PhaseIFG::re_insert` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                 | Location       |
| ------: | ----: | ------------: | ------: | ---------------------- | -------------- |
| +133.3% |    +4 | 75.0% → 87.5% |   3 → 7 | `PhaseChaitin::Select` | `libjvm.dylib` |

##### `PhiNode::pinned` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                             | Location       |
| -----: | ----: | -----------: | ------: | ---------------------------------- | -------------- |
|    new |    +2 | 0.0% → 40.0% |   0 → 2 | `PhaseIdealLoop::build_loop_early` | `libjvm.dylib` |
|    new |    +2 | 0.0% → 40.0% |   0 → 2 | `PhaseCFG::global_code_motion`     | `libjvm.dylib` |

##### `IndexSet::initialize` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller               | Location       |
| ------: | ----: | ------------: | ------: | -------------------- | -------------- |
| +150.0% |    +6 | 33.3% → 62.5% |  4 → 10 | `PhaseIFG::init`     | `libjvm.dylib` |
|  -28.6% |    -2 | 58.3% → 31.3% |   7 → 5 | `PhaseLive::compute` | `libjvm.dylib` |

##### `MethodLiveness::BasicBlock::get_liveness_at` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                            | Location       |
| -----: | ----: | -----------: | ------: | --------------------------------- | -------------- |
|    new |    +3 | 0.0% → 75.0% |   0 → 3 | `MethodLiveness::get_liveness_at` | `libjvm.dylib` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `BlockBegin::try_merge`           | `libjvm.dylib` |

##### `ConNode::Opcode` (`libjvm.dylib`)

| Change | Delta |              % | Samples | Caller                            | Location       |
| -----: | ----: | -------------: | ------: | --------------------------------- | -------------- |
| +50.0% |    +1 | 100.0% → 50.0% |   2 → 3 | `Matcher::match`                  | `libjvm.dylib` |
|    new |    +1 |   0.0% → 16.7% |   0 → 1 | `PhaseIdealLoop::build_loop_late` | `libjvm.dylib` |
|    new |    +1 |   0.0% → 16.7% |   0 → 1 | `Matcher::xform`                  | `libjvm.dylib` |
|    new |    +1 |   0.0% → 16.7% |   0 → 1 | `NodeHash::hash_find_insert`      | `libjvm.dylib` |

##### `LinearScan::append_scope_value` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                                     | Location       |
| ------: | ----: | -----: | ------: | ------------------------------------------ | -------------- |
| +400.0% |    +4 | 100.0% |   1 → 5 | `LinearScan::compute_debug_info_for_scope` | `libjvm.dylib` |

##### `RegionNode::is_unreachable_from_root` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                              | Location       |
| -----: | ----: | -----: | ------: | ----------------------------------- | -------------- |
| +42.9% |    +3 | 100.0% |  7 → 10 | `RegionNode::is_unreachable_region` | `libjvm.dylib` |

##### `PhaseCFG::insert_anti_dependences` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                    | Location       |
| -----: | ----: | -----: | ------: | ------------------------- | -------------- |
| +75.0% |    +3 | 100.0% |   4 → 7 | `PhaseCFG::schedule_late` | `libjvm.dylib` |

##### `PhaseIterGVN::PhaseIterGVN` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                  | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------------- | -------------- |
| +100.0% |    +2 | 50.0% → 57.1% |   2 → 4 | `Compile::Optimize`                     | `libjvm.dylib` |
|  +50.0% |    +1 | 50.0% → 42.9% |   2 → 3 | `Compile::inline_incrementally_cleanup` | `libjvm.dylib` |

##### `ciEnv::get_field_by_index` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                        | Location       |
| -----: | ----: | -----------: | ------: | ----------------------------- | -------------- |
|    new |    +2 | 0.0% → 66.7% |   0 → 2 | `ciBytecodeStream::get_field` | `libjvm.dylib` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `GraphBuilder::access_field`  | `libjvm.dylib` |

##### `ConnectionGraph::add_node_to_connection_graph` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                            | Location       |
| -----: | ----: | ------------: | ------: | --------------------------------- | -------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `ConnectionGraph::compute_escape` | `libjvm.dylib` |

##### `PhaseIFG::remove_node` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                   | Location       |
| ------: | ----: | -----: | ------: | ------------------------ | -------------- |
| +100.0% |    +3 | 100.0% |   3 → 6 | `PhaseChaitin::Simplify` | `libjvm.dylib` |

##### `BacktraceBuilder::push` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                                     | Location       |
| -----: | ----: | -----: | ------: | ------------------------------------------ | -------------- |
| +33.3% |    +5 | 100.0% | 15 → 20 | `java_lang_Throwable::fill_in_stack_trace` | `libjvm.dylib` |

##### `CollectedHeap::array_allocate` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                             | Location           |
| -----: | ----: | -----------: | ------: | ---------------------------------- | ------------------ |
|    new |    +2 | 0.0% → 40.0% |   0 → 2 | `InstanceKlass::allocate_objArray` | `libjvm.dylib`     |
|    new |    +1 | 0.0% → 20.0% |   0 → 1 | `Exceptions::new_exception`        | `libjvm.dylib`     |
|    new |    +1 | 0.0% → 20.0% |   0 → 1 | `clone()`                          | `java.lang.Object` |
|    new |    +1 | 0.0% → 20.0% |   0 → 1 | `JVM_NewArray`                     | `libjvm.dylib`     |

##### `vframe::new_vframe` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller                | Location       |
| ------: | ----: | -------------: | ------: | --------------------- | -------------- |
|     new |    +3 |   0.0% → 50.0% |   0 → 3 | `vframe::java_sender` | `libjvm.dylib` |
| +200.0% |    +2 | 100.0% → 50.0% |   1 → 3 | `vframe::sender`      | `libjvm.dylib` |

##### `vframe::java_sender` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                          | Location       |
| ------: | ----: | -----: | ------: | ------------------------------- | -------------- |
| +166.7% |    +5 | 100.0% |   3 → 8 | `JvmtiEnvBase::get_stack_trace` | `libjvm.dylib` |

##### `inflate_fast` (`libzip.dylib`)

|  Change | Delta |      % | Samples | Caller                                          | Location       |
| ------: | ----: | -----: | ------: | ----------------------------------------------- | -------------- |
| +200.0% |    +4 | 100.0% |   2 → 6 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `libzip.dylib` |

##### `AccessInternal::PostRuntimeDispatch<G1BarrierSet::AccessBarrier<2383974ull, G1BarrierSet>, (AccessInternal::BarrierType)1, 2383974ull>::oop_access_barrier` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                     | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------ | -------------- |
| +300.0% |    +3 | 20.0% → 44.4% |   1 → 4 | `java_lang_Throwable::fill_in_stack_trace` | `libjvm.dylib` |
|  +66.7% |    +2 | 60.0% → 55.6% |   3 → 5 | `BacktraceBuilder::push`                   | `libjvm.dylib` |
| removed |    -1 |  20.0% → 0.0% |   1 → 0 | `BacktraceBuilder::expand`                 | `libjvm.dylib` |

##### `G1BarrierSetRuntime::write_ref_array_post_entry` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller                                                                                                | Location                                                    |
| ------: | ----: | -------------: | ------: | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| +200.0% |    +2 | 100.0% → 60.0% |   1 → 3 | `arrayof_oop_disjoint_arraycopy`                                                                      | `<unknown>`                                                 |
|     new |    +1 |   0.0% → 20.0% |   0 → 1 | `insertParameterTypes(int, Class[])`                                                                  | `java.lang.invoke.MethodType`                               |
|     new |    +1 |   0.0% → 20.0% |   0 → 1 | `<init>(MutableCallSite, Class, String, IndyInterface$CallType, boolean, boolean, boolean, Object[])` | `org.codehaus.groovy.vmplugin.v8.Selector$PropertySelector` |

##### `InstanceKlass::array_klass` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                             | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------- | -------------- |
|     new |    +3 |  0.0% → 60.0% |   0 → 3 | `JVM_NewArray`                     | `libjvm.dylib` |
|     new |    +2 |  0.0% → 40.0% |   0 → 2 | `InstanceKlass::allocate_objArray` | `libjvm.dylib` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `InterpreterRuntime::anewarray`    | `libjvm.dylib` |

##### `Continuation::is_continuation_enterSpecial` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                     | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------ | -------------- |
| +400.0% |    +4 | 50.0% → 83.3% |   1 → 5 | `java_lang_Throwable::fill_in_stack_trace` | `libjvm.dylib` |

##### `resource_allocate_bytes` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                   | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------------- | -------------- |
|  +66.7% |    +2 | 21.4% → 27.8% |   3 → 5 | `vframe::new_vframe`                     | `libjvm.dylib` |
| removed |    -2 |  14.3% → 0.0% |   2 → 0 | `DataLayout::data_in`                    | `libjvm.dylib` |
|     new |    +2 |  0.0% → 11.1% |   0 → 2 | `BlockListBuilder::BlockListBuilder`     | `libjvm.dylib` |
| removed |    -1 |   7.1% → 0.0% |   1 → 0 | `FieldLayoutBuilder::FieldLayoutBuilder` | `libjvm.dylib` |
|  -33.3% |    -1 | 21.4% → 11.1% |   3 → 2 | `compiledVFrame::sender`                 | `libjvm.dylib` |

##### `Dictionary::find` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                                       | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------ | -------------- |
|     new |    +2 |  0.0% → 20.0% |   0 → 2 | `SystemDictionary::resolve_instance_class_or_null`           | `libjvm.dylib` |
|  +20.0% |    +1 | 83.3% → 60.0% |   5 → 6 | `SystemDictionary::find_constrained_instance_or_array_klass` | `libjvm.dylib` |
| removed |    -1 |  16.7% → 0.0% |   1 → 0 | `ConstantPool::klass_at_if_loaded`                           | `libjvm.dylib` |
|     new |    +1 |  0.0% → 10.0% |   0 → 1 | `SystemDictionary::resolve_or_fail`                          | `libjvm.dylib` |
|     new |    +1 |  0.0% → 10.0% |   0 → 1 | `ciEnv::get_klass_by_name_impl`                              | `libjvm.dylib` |

##### `arrayof_jbyte_disjoint_arraycopy` (`<unknown>`)

| Change | Delta |            % | Samples | Caller                              | Location                                        |
| -----: | ----: | -----------: | ------: | ----------------------------------- | ----------------------------------------------- |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `copyOfRangeByte(byte[], int, int)` | `java.util.Arrays`                              |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `isVargsMethod(Object[])`           | `org.codehaus.groovy.reflection.ParameterTypes` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `ensureCapacityInternal(int)`       | `java.lang.AbstractStringBuilder`               |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `getBytes(byte[], int, byte)`       | `java.lang.String`                              |

##### `pthread_mutex_unlock` (`libsystem_pthread.dylib`)

| Change | Delta |            % | Samples | Caller                                        | Location       |
| -----: | ----: | -----------: | ------: | --------------------------------------------- | -------------- |
|    new |    +3 | 0.0% → 75.0% |   0 → 3 | `ThreadCritical::~ThreadCritical`             | `libjvm.dylib` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `CodeCache::make_marked_nmethods_deoptimized` | `libjvm.dylib` |

##### `SymbolTable::new_symbol` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                                       | Location       |
| -----: | ----: | -----------: | ------: | -------------------------------------------- | -------------- |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `SignatureStream::find_symbol`               | `libjvm.dylib` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `MethodHandles::lookup_basic_type_signature` | `libjvm.dylib` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `ciEnv::get_klass_by_index_impl`             | `libjvm.dylib` |

##### `frame::sender_for_interpreter_frame` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                     | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------ | -------------- |
|  +66.7% |    +4 | 75.0% → 90.9% |  6 → 10 | `java_lang_Throwable::fill_in_stack_trace` | `libjvm.dylib` |
| removed |    -1 |  12.5% → 0.0% |   1 → 0 | `vframe::sender`                           | `libjvm.dylib` |

##### `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

|  Change | Delta |      % | Samples | Caller                                                                                      | Location                                                                                                  |
| ------: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| +125.0% |    +5 | 100.0% |   4 → 9 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800 → java.lang.invoke.LambdaForm$DMH.0x000000f001088800` |

##### `getNode(Object)` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Caller                | Location                  |
| ------: | ----: | ------------: | ------: | --------------------- | ------------------------- |
| +300.0% |    +3 |  6.7% → 21.1% |   1 → 4 | `containsKey(Object)` | `java.util.HashMap`       |
|  +25.0% |    +2 | 53.3% → 52.6% |  8 → 10 | `get(Object)`         | `java.util.LinkedHashMap` |
|  -16.7% |    -1 | 40.0% → 26.3% |   6 → 5 | `get(Object)`         | `java.util.HashMap`       |

##### `getAndPut(String, MemoizeCache$ValueProvider)` (`org.codehaus.groovy.vmplugin.v8.CacheableCallSite`)

| Change | Delta |      % | Samples | Caller                                                                          | Location                                        |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------------------- | ----------------------------------------------- |
| +40.0% |    +4 | 100.0% | 10 → 14 | `lambda$fromCache$2(IndyInterface$FallbackSupplier, CacheableCallSite, Object)` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |

##### `invokeSpecial(Object, Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|  Change | Delta |             % | Samples | Caller                                   | Location                                                                                                |
| ------: | ----: | ------------: | ------: | ---------------------------------------- | ------------------------------------------------------------------------------------------------------- |
|     new |    +3 |  0.0% → 60.0% |   0 → 3 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000f00102ac00`                                                     |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000700102ac00`                                                     |
|     new |    +1 |  0.0% → 20.0% |   0 → 1 | `guardWithCatch(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010aa000 → java.lang.invoke.LambdaForm$MH.0x000000f0010aa000` |
|     new |    +1 |  0.0% → 20.0% |   0 → 1 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000f00160c400`                                                     |

##### `init(MemberName, Object)` (`java.lang.invoke.MethodHandleNatives`)

|  Change | Delta |      % | Samples | Caller                    | Location                      |
| ------: | ----: | -----: | ------: | ------------------------- | ----------------------------- |
| +133.3% |    +4 | 100.0% |   3 → 7 | `<init>(Method, boolean)` | `java.lang.invoke.MemberName` |

##### `catchException(MethodHandle, Class, MethodHandle)` (`java.lang.invoke.MethodHandles`)

| Change | Delta |             % | Samples | Caller                  | Location                                                  |
| -----: | ----: | ------------: | ------: | ----------------------- | --------------------------------------------------------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `addExceptionHandler()` | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |

##### `chooseMeta(MetaClassImpl)` (`org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector`)

| Change | Delta |             % | Samples | Caller                | Location                                                  |
| -----: | ----: | ------------: | ------: | --------------------- | --------------------------------------------------------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `setCallSiteTarget()` | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |

##### `getOptimizedTransition(int)` (`groovyjarjarantlr4.v4.runtime.atn.ATNState`)

| Change | Delta |            % | Samples | Caller                                                                                                        | Location                                               |
| -----: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
|    new |    +2 | 0.0% → 40.0% |   0 → 2 | `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |
|    new |    +2 | 0.0% → 40.0% |   0 → 2 | `getReachableConfigSet(CharStream, ATNConfigSet, ATNConfigSet, int)`                                          | `groovyjarjarantlr4.v4.runtime.atn.LexerATNSimulator`  |

##### `getMethodsRecursive(String, Class[], boolean)` (`java.lang.Class`)

| Change | Delta |             % | Samples | Caller                                          | Location          |
| -----: | ----: | ------------: | ------: | ----------------------------------------------- | ----------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `getMethodsRecursive(String, Class[], boolean)` | `java.lang.Class` |

##### `guard(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f00109a000`)

|  Change | Delta |             % | Samples | Caller                     | Location                                                                                                |
| ------: | ----: | ------------: | ------: | -------------------------- | ------------------------------------------------------------------------------------------------------- |
| +200.0% |    +2 | 50.0% → 60.0% |   1 → 3 | `delegate(Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`                                                        |
| +100.0% |    +1 | 50.0% → 40.0% |   1 → 2 | `reinvoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001099c00 → java.lang.invoke.LambdaForm$MH.0x000000f001099c00` |

##### `invokeVirtual(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000f001094400`)

| Change | Delta |             % | Samples | Caller                           | Location                                                                                                |
| -----: | ----: | ------------: | ------: | -------------------------------- | ------------------------------------------------------------------------------------------------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010a9800 → java.lang.invoke.LambdaForm$MH.0x000000f0010a9800` |

##### `isFinalVariable(DeclarationExpression, SourceCode)` (`org.gmetrics.util.AstUtil`)

| Change | Delta |             % | Samples | Caller                         | Location                                      |
| -----: | ----: | ------------: | ------: | ------------------------------ | --------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `call(Object, Object, Object)` | `org.gmetrics.util.AstUtil$isFinalVariable$1` |

##### `getAt(String)` (`org.gmetrics.result.SingleNumberMetricResult`)

| Change | Delta |            % | Samples | Caller                                    | Location                                             |
| -----: | ----: | -----------: | ------: | ----------------------------------------- | ---------------------------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `call(Object, Object)`                    | `org.gmetrics.result.MetricResult$getAt`             |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `invokeInterface(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000f001094c00` |

##### `isRuleSuppressed(Rule)` (`org.codenarc.analyzer.SuppressionAnalyzer`)

| Change | Delta |             % | Samples | Caller                                  | Location                                             |
| -----: | ----: | ------------: | ------: | --------------------------------------- | ---------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `invokeVirtual(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000f001097c00` |

##### `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

| Change | Delta |             % | Samples | Caller                                          | Location                                                                                                  |
| -----: | ----: | ------------: | ------: | ----------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `invokeVirtual(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001094400 → java.lang.invoke.LambdaForm$DMH.0x000000f001094400` |

##### `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`)

| Change | Delta |             % | Samples | Caller                                    | Location                                                                                                  |
| -----: | ----: | ------------: | ------: | ----------------------------------------- | --------------------------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `invokeInterface(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001094c00 → java.lang.invoke.LambdaForm$DMH.0x000000f001094c00` |

##### `getAstVisitor()` (`org.codenarc.rule.AbstractAstVisitorRule`)

| Change | Delta |             % | Samples | Caller                      | Location                                   |
| -----: | ----: | ------------: | ------: | --------------------------- | ------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractAstVisitorRule` |

##### `getLines()` (`org.codenarc.source.AbstractSourceCode`)

| Change | Delta |             % | Samples | Caller                            | Location                                             |
| -----: | ----: | ------------: | ------: | --------------------------------- | ---------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `invokeInterface(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000f001029c00` |

##### `getRawLine(SourceCode, int)` (`org.codenarc.util.AstUtil`)

| Change | Delta |             % | Samples | Caller                                | Location                    |
| -----: | ----: | ------------: | ------: | ------------------------------------- | --------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `getDeclaration(ASTNode, SourceCode)` | `org.codenarc.util.AstUtil` |

##### `visitMethod(MethodNode)` (`org.codenarc.rule.AbstractAstVisitor`)

| Change | Delta |             % | Samples | Caller                             | Location                            |
| -----: | ----: | ------------: | ------: | ---------------------------------- | ----------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `visitMethods(GroovyClassVisitor)` | `org.codehaus.groovy.ast.ClassNode` |

##### `visitConstructorOrMethod(MethodNode, boolean)` (`org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor`)

| Change | Delta |             % | Samples | Caller                    | Location                                          |
| -----: | ----: | ------------: | ------: | ------------------------- | ------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `visitMethod(MethodNode)` | `org.codehaus.groovy.ast.ClassCodeVisitorSupport` |

##### `visitClassComplete(ClassNode)` (`org.codenarc.rule.convention.StaticFieldsBeforeInstanceFieldsAstVisitor`)

| Change | Delta |             % | Samples | Caller                  | Location                               |
| -----: | ----: | ------------: | ------: | ----------------------- | -------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractAstVisitor` |

##### `visitConstantExpression(ConstantExpression)` (`org.codenarc.rule.unnecessary.UnnecessaryGStringAstVisitor`)

| Change | Delta |             % | Samples | Caller                     | Location                                          |
| -----: | ----: | ------------: | ------: | -------------------------- | ------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `visit(GroovyCodeVisitor)` | `org.codehaus.groovy.ast.expr.ConstantExpression` |

##### `line(int)` (`org.codenarc.source.AbstractSourceCode`)

| Change | Delta |             % | Samples | Caller                                 | Location                                             |
| -----: | ----: | ------------: | ------: | -------------------------------------- | ---------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `invokeInterface(Object, Object, int)` | `java.lang.invoke.LambdaForm$DMH.0x000000f00136b800` |

##### `findLineWithDeclaration(ASTNode, String)` (`org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`)

| Change | Delta |             % | Samples | Caller                                          | Location                                     |
| -----: | ----: | ------------: | ------: | ----------------------------------------------- | -------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `invokeSpecial(Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `checkForViolations(ASTNode)` (`org.codenarc.rule.formatting.BlockStartsWithBlankLineAstVisitor`)

| Change | Delta |             % | Samples | Caller                                  | Location                                                                                                  |
| -----: | ----: | ------------: | ------: | --------------------------------------- | --------------------------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001084000 → java.lang.invoke.LambdaForm$DMH.0x000000f001084000` |

##### `visitBlockStatement(BlockStatement)` (`org.codenarc.rule.formatting.SpaceBeforeClosingBraceAstVisitor`)

| Change | Delta |             % | Samples | Caller                     | Location                                      |
| -----: | ----: | ------------: | ------: | -------------------------- | --------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `visit(GroovyCodeVisitor)` | `org.codehaus.groovy.ast.stmt.BlockStatement` |

##### `processParameters(Parameter[], String)` (`org.codenarc.rule.convention.NoFloatAstVisitor`)

| Change | Delta |             % | Samples | Caller                                          | Location                                     |
| -----: | ----: | ------------: | ------: | ----------------------------------------------- | -------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `invokeSpecial(Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `<init>(Object, Object, Reference, Reference, Reference, Reference)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)

| Change | Delta |             % | Samples | Caller                                   | Location                                       |
| -----: | ----: | ------------: | ------: | ---------------------------------------- | ---------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `collectViolations(SourceCode, RuleSet)` | `org.codenarc.analyzer.AbstractSourceAnalyzer` |

##### `getAnnotation(AnnotatedNode, String)` (`org.codenarc.util.AstUtil`)

| Change | Delta |             % | Samples | Caller                                 | Location                                     |
| -----: | ----: | ------------: | ------: | -------------------------------------- | -------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `invokeStatic(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `<init>(String)` (`org.codenarc.rule.groovyism.ExplicitCallToMethodAstVisitor`)

| Change | Delta |             % | Samples | Caller     | Location                                                              |
| -----: | ----: | ------------: | ------: | ---------- | --------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `<init>()` | `org.codenarc.rule.groovyism.ExplicitCallToCompareToMethodAstVisitor` |

##### `vtable stub` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                                    | Location                                                  |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------- | --------------------------------------------------------- |
|     new |    +2 |  0.0% → 20.0% |   0 → 2 | `coerceArgumentsToClasses(Object[])`                                      | `org.codehaus.groovy.reflection.ParameterTypes`           |
| removed |    -1 |  20.0% → 0.0% |   1 → 0 | `visitMethodCallExpression(MethodCallExpression)`                         | `org.codehaus.groovy.ast.CodeVisitorSupport`              |
|  -50.0% |    -1 | 40.0% → 10.0% |   2 → 1 | `setCallSiteTarget()`                                                     | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |
| removed |    -1 |  20.0% → 0.0% |   1 → 0 | `makePairwiseConvertByEditor(MethodHandle, MethodType, boolean, boolean)` | `java.lang.invoke.MethodHandleImpl`                       |
|     new |    +1 |  0.0% → 10.0% |   0 → 1 | `call(Object[])`                                                          | `groovy.lang.Closure`                                     |

##### `I2C/C2I adapters(0xbb)` (`<unknown>`)

| Change | Delta |            % | Samples | Caller                                   | Location                                            |
| -----: | ----: | -----------: | ------: | ---------------------------------------- | --------------------------------------------------- |
|    new |    +1 | 0.0% → 12.5% |   0 → 1 | `eachFile(File, FileType, Closure)`      | `org.codehaus.groovy.runtime.ResourceGroovyMethods` |
|    new |    +1 | 0.0% → 12.5% |   0 → 1 | `invokeExact_MT(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |

##### `I2C/C2I adapters(0xb)` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                                                                      | Location                                                           |
| ------: | ----: | -----------: | ------: | --------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `isStaticallyInvocable(MemberName)`                                         | `java.lang.invoke.InvokerBytecodeGenerator`                        |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `<init>(String, int)`                                                       | `java.util.regex.Pattern`                                          |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `collectViolations(SourceCode, RuleSet)`                                    | `org.codenarc.analyzer.AbstractSourceAnalyzer`                     |
|     new |    +1 | 0.0% → 16.7% |   0 → 1 | `<init>(Class[], MetaMethod)`                                               | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex$CacheEntry` |
|     new |    +1 | 0.0% → 16.7% |   0 → 1 | `addViolationIfBothAreConstantsOrLiterals(ASTNode, Expression, Expression)` | `org.codenarc.rule.basic.ComparisonOfTwoConstantsAstVisitor`       |

##### `Node::dominates` (`libjvm.dylib`)

| Change | Delta |      % |  Samples | Caller                           | Location       |
| -----: | ----: | -----: | -------: | -------------------------------- | -------------- |
| -43.8% |   -46 | 100.0% | 105 → 59 | `MemNode::all_controls_dominate` | `libjvm.dylib` |

##### `PhaseChaitin::Split` (`libjvm.dylib`)

| Change | Delta |      % |  Samples | Caller                            | Location       |
| -----: | ----: | -----: | -------: | --------------------------------- | -------------- |
| -35.5% |   -43 | 100.0% | 121 → 78 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                         | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------------------- | -------------- |
| removed |   -43 | 100.0% → 0.0% |  43 → 0 | `void G1CMTask::process_grey_task_entry<true>` | `libjvm.dylib` |

##### `G1ParScanThreadState::do_copy_to_survivor_space` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                                          | Location       |
| ------: | ----: | -----------: | ------: | ----------------------------------------------- | -------------- |
| removed |   -34 | 91.9% → 0.0% |  34 → 0 | `G1ParScanThreadState::trim_queue_to_threshold` | `libjvm.dylib` |
| removed |    -2 |  5.4% → 0.0% |   2 → 0 | `G1ParScanThreadState::steal_and_trim_queue`    | `libjvm.dylib` |
| removed |    -1 |  2.7% → 0.0% |   1 → 0 | `G1ScanHRForRegionClosure::scan_memregion`      | `libjvm.dylib` |

##### `__psynch_cvwait` (`libsystem_kernel.dylib`)

| Change | Delta |      % | Samples | Caller                  | Location       |
| -----: | ----: | -----: | ------: | ----------------------- | -------------- |
| -43.2% |   -32 | 100.0% | 74 → 42 | `PlatformMonitor::wait` | `libjvm.dylib` |

##### `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                                                   | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------ | -------------- |
| removed |   -31 | 100.0% → 0.0% |  31 → 0 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object` | `libjvm.dylib` |

##### `__psynch_mutexwait` (`libsystem_kernel.dylib`)

| Change | Delta |      % | Samples | Caller                              | Location                  |
| -----: | ----: | -----: | ------: | ----------------------------------- | ------------------------- |
| -52.6% |   -30 | 100.0% | 57 → 27 | `_pthread_mutex_firstfit_lock_slow` | `libsystem_pthread.dylib` |

##### `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                                            | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------------------------- | -------------- |
| removed |   -25 | 92.6% → 0.0% |  25 → 0 | `G1ParScanThreadState::do_copy_to_survivor_space` | `libjvm.dylib` |
| removed |    -2 |  7.4% → 0.0% |   2 → 0 | `G1ParScanThreadState::trim_queue_to_threshold`   | `libjvm.dylib` |

##### `_platform_memmove` (`libsystem_platform.dylib`)

|  Change | Delta |             % | Samples | Caller                      | Location            |
| ------: | ----: | ------------: | ------: | --------------------------- | ------------------- |
|  -30.2% |   -16 | 76.8% → 86.0% | 53 → 37 | `vframe::java_sender`       | `libjvm.dylib`      |
| removed |    -4 |   5.8% → 0.0% |   4 → 0 | `PhaseOutput::Output`       | `libjvm.dylib`      |
|  -50.0% |    -1 |   2.9% → 2.3% |   2 → 1 | `__vfprintf`                | `libsystem_c.dylib` |
| removed |    -1 |   1.4% → 0.0% |   1 → 0 | `outputStream::print`       | `libjvm.dylib`      |
| removed |    -1 |   1.4% → 0.0% |   1 → 0 | `Exceptions::new_exception` | `libjvm.dylib`      |

##### `G1ParScanThreadState::trim_queue_to_threshold` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                                                              | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------- | -------------- |
| removed |   -16 | 72.7% → 0.0% |  16 → 0 | `G1ScanHRForRegionClosure::scan_memregion`                          | `libjvm.dylib` |
| removed |    -5 | 22.7% → 0.0% |   5 → 0 | `G1ParScanThreadState::steal_and_trim_queue`                        | `libjvm.dylib` |
| removed |    -1 |  4.5% → 0.0% |   1 → 0 | `void G1ParCopyClosure<(G1Barrier)0, false>::do_oop_work<oopDesc*>` | `libjvm.dylib` |

##### `sys_icache_invalidate` (`libsystem_platform.dylib`)

|  Change | Delta |            % | Samples | Caller                                        | Location       |
| ------: | ----: | -----------: | ------: | --------------------------------------------- | -------------- |
| removed |   -17 | 56.7% → 0.0% |  17 → 0 | `nmethod::oops_do_process_weak`               | `libjvm.dylib` |
| removed |    -2 |  6.7% → 0.0% |   2 → 0 | `SharedRuntime::resolve_sub_helper`           | `libjvm.dylib` |
| removed |    -2 |  6.7% → 0.0% |   2 → 0 | `CodeCache::make_marked_nmethods_deoptimized` | `libjvm.dylib` |
| +100.0% |    +1 | 3.3% → 18.2% |   1 → 2 | `CompiledIC::set_to_monomorphic`              | `libjvm.dylib` |
|     new |    +1 |  0.0% → 9.1% |   0 → 1 | `CompiledIC::set_to_megamorphic`              | `libjvm.dylib` |

##### `semaphore_wait_trap` (`libsystem_kernel.dylib`)

|  Change | Delta |            % | Samples | Caller                    | Location       |
| ------: | ----: | -----------: | ------: | ------------------------- | -------------- |
| removed |   -17 | 89.5% → 0.0% |  17 → 0 | `WorkerThread::run`       | `libjvm.dylib` |
| removed |    -2 | 10.5% → 0.0% |   2 → 0 | `WorkerThreads::run_task` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late_post_work` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                               | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------ | -------------- |
| -60.7% |   -17 | 90.3% → 84.6% | 28 → 11 | `PhaseIdealLoop::build_loop_late`    | `libjvm.dylib` |
| -33.3% |    -1 |  9.7% → 15.4% |   3 → 2 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseChaitin::build_ifg_virtual` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                            | Location       |
| -----: | ----: | -----: | ------: | --------------------------------- | -------------- |
| -78.3% |   -18 | 100.0% |  23 → 5 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `IndexSetIterator::advance_and_next` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                             | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------- | -------------- |
|  -75.0% |    -6 |  12.5% → 4.3% |   8 → 2 | `PhaseChaitin::Simplify`           | `libjvm.dylib` |
|  -62.5% |    -5 |  12.5% → 6.4% |   8 → 3 | `PhaseIFG::SquareUp`               | `libjvm.dylib` |
|  -33.3% |    -3 | 14.1% → 12.8% |   9 → 6 | `PhaseIFG::effective_degree`       | `libjvm.dylib` |
|  -23.1% |    -3 | 20.3% → 21.3% | 13 → 10 | `PhaseChaitin::build_ifg_physical` | `libjvm.dylib` |
| +100.0% |    +3 |  4.7% → 12.8% |   3 → 6 | `PhaseLive::add_liveout`           | `libjvm.dylib` |

##### `Unique_Node_List::remove` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                    | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------------------- | -------------- |
|  -53.3% |   -16 | 93.8% → 93.3% | 30 → 14 | `PhaseIterGVN::remove_globally_dead_node` | `libjvm.dylib` |
| removed |    -2 |   6.3% → 0.0% |   2 → 0 | `Node::remove_dead_region`                | `libjvm.dylib` |
|     new |    +1 |   0.0% → 6.7% |   0 → 1 | `CallStaticJavaNode::Ideal`               | `libjvm.dylib` |

##### `PhaseIdealLoop::Dominators` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                               | Location       |
| -----: | ----: | -----: | ------: | ------------------------------------ | -------------- |
| -53.3% |   -16 | 100.0% | 30 → 14 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseChaitin::elide_copy` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                     | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------------ | -------------- |
| -39.5% |   -15 | 97.4% → 95.8% | 38 → 23 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |

##### `NodeHash::hash_find_insert` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller                           | Location       |
| ------: | ----: | -------------: | ------: | -------------------------------- | -------------- |
| removed |    -5 |   20.0% → 0.0% |   5 → 0 | `PhaseGVN::transform_no_reclaim` | `libjvm.dylib` |
|  -28.6% |    -4 | 56.0% → 100.0% | 14 → 10 | `PhaseIterGVN::transform_old`    | `libjvm.dylib` |
| removed |    -3 |   12.0% → 0.0% |   3 → 0 | `PhaseValues::uncached_makecon`  | `libjvm.dylib` |
| removed |    -2 |    8.0% → 0.0% |   2 → 0 | `PhaseIterGVN::optimize`         | `libjvm.dylib` |
| removed |    -1 |    4.0% → 0.0% |   1 → 0 | `Parse::do_ifnull`               | `libjvm.dylib` |

##### `Arena::contains` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller           | Location       |
| ------: | ----: | -------------: | ------: | ---------------- | -------------- |
|  -17.6% |   -12 | 98.6% → 100.0% | 68 → 56 | `Matcher::xform` | `libjvm.dylib` |
| removed |    -1 |    1.4% → 0.0% |   1 → 0 | `Matcher::match` | `libjvm.dylib` |

##### `Compile::identify_useful_nodes` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                        | Location       |
| -----: | ----: | ------------: | ------: | --------------------------------------------- | -------------- |
| -50.0% |   -14 | 77.8% → 60.9% | 28 → 14 | `PhaseRemoveUseless::PhaseRemoveUseless`      | `libjvm.dylib` |
| +12.5% |    +1 | 22.2% → 39.1% |   8 → 9 | `Matcher::specialize_generic_vector_operands` | `libjvm.dylib` |

##### `Type::cmp` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller              | Location       |
| ------: | ----: | -------------: | ------: | ------------------- | -------------- |
|  -52.2% |   -12 | 95.8% → 100.0% | 23 → 11 | `Dict::Insert`      | `libjvm.dylib` |
| removed |    -1 |    4.2% → 0.0% |   1 → 0 | `AddNode::Identity` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_early` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                               | Location       |
| -----: | ----: | -----: | ------: | ------------------------------------ | -------------- |
| -48.1% |   -13 | 100.0% | 27 → 14 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseChaitin::gather_lrg_masks` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                            | Location       |
| -----: | ----: | -----: | ------: | --------------------------------- | -------------- |
| -35.5% |   -11 | 100.0% | 31 → 20 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                               | Location       |
| -----: | ----: | -----: | ------: | ------------------------------------ | -------------- |
| -40.7% |   -11 | 100.0% | 27 → 16 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Node_Backward_Iterator::next` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                         | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------ | -------------- |
| -46.2% |    -6 | 56.5% → 58.3% |  13 → 7 | `PhaseCFG::schedule_late`      | `libjvm.dylib` |
| -50.0% |    -5 | 43.5% → 41.7% |  10 → 5 | `PhaseCFG::global_code_motion` | `libjvm.dylib` |

##### `PhaseOutput::BuildOopMaps` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                | Location       |
| -----: | ----: | -----: | ------: | --------------------- | -------------- |
| -45.8% |   -11 | 100.0% | 24 → 13 | `PhaseOutput::Output` | `libjvm.dylib` |

##### `ciObjectFactory::get_metadata` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                 | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------------- | -------------- |
|  -80.0% |    -4 |  12.2% → 3.2% |   5 → 1 | `ciObjectFactory::create_new_metadata` | `libjvm.dylib` |
|  -66.7% |    -4 |  14.6% → 6.5% |   6 → 2 | `ciObjectFactory::get`                 | `libjvm.dylib` |
|  -33.3% |    -3 | 22.0% → 19.4% |   9 → 6 | `ciBytecodeStream::get_method`         | `libjvm.dylib` |
| +100.0% |    +3 |  7.3% → 19.4% |   3 → 6 | `ciEnv::get_klass_by_name_impl`        | `libjvm.dylib` |
|  -33.3% |    -2 | 14.6% → 12.9% |   6 → 4 | `ciEnv::get_klass_by_index_impl`       | `libjvm.dylib` |

##### `PhaseIdealLoop::is_dominator` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                        | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------------------- | -------------- |
|  -36.7% |   -11 | 96.8% → 90.5% | 30 → 19 | `PhaseIdealLoop::get_late_ctrl_with_anti_dep` | `libjvm.dylib` |
| +100.0% |    +1 |   3.2% → 9.5% |   1 → 2 | `PhaseIdealLoop::compute_early_ctrl`          | `libjvm.dylib` |

##### `PhaseIFG::effective_degree` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller                               | Location       |
| ------: | ----: | -------------: | ------: | ------------------------------------ | -------------- |
|  -75.0% |    -9 | 92.3% → 100.0% |  12 → 3 | `PhaseIFG::Compute_Effective_Degree` | `libjvm.dylib` |
| removed |    -1 |    7.7% → 0.0% |   1 → 0 | `PhaseChaitin::Register_Allocate`    | `libjvm.dylib` |

##### `ValueStack::values_do` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                           | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------- | -------------- |
|  -66.7% |    -6 | 56.3% → 50.0% |   9 → 3 | `SubstitutionResolver::block_do` | `libjvm.dylib` |
| removed |    -2 |  12.5% → 0.0% |   2 → 0 | `Invoke::state_values_do`        | `libjvm.dylib` |
|  -50.0% |    -1 | 12.5% → 16.7% |   2 → 1 | `BlockBegin::state_values_do`    | `libjvm.dylib` |
| removed |    -1 |   6.3% → 0.0% |   1 → 0 | `UseCountComputer::block_do`     | `libjvm.dylib` |
| removed |    -1 |   6.3% → 0.0% |   1 → 0 | `BlockBegin::iterate_preorder`   | `libjvm.dylib` |

##### `void G1CMTask::process_grey_task_entry<true>` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                        | Location       |
| ------: | ----: | -----------: | ------: | ----------------------------- | -------------- |
| removed |    -6 | 54.5% → 0.0% |   6 → 0 | `G1CMBitMap::iterate`         | `libjvm.dylib` |
| removed |    -4 | 36.4% → 0.0% |   4 → 0 | `G1CMTask::drain_local_queue` | `libjvm.dylib` |
| removed |    -1 |  9.1% → 0.0% |   1 → 0 | `G1CMTask::do_marking_step`   | `libjvm.dylib` |

##### `Dict::Insert` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                         | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------ | -------------- |
|  -61.5% |    -8 | 68.4% → 62.5% |  13 → 5 | `Type::hashcons`               | `libjvm.dylib` |
| removed |    -2 |  10.5% → 0.0% |   2 → 0 | `PhaseOutput::BuildOopMaps`    | `libjvm.dylib` |
| removed |    -1 |   5.3% → 0.0% |   1 → 0 | `TypePtr::cleanup_speculative` | `libjvm.dylib` |
| removed |    -1 |   5.3% → 0.0% |   1 → 0 | `TypeInterfaces::union_with`   | `libjvm.dylib` |
| removed |    -1 |   5.3% → 0.0% |   1 → 0 | `TypeInt::filter_helper`       | `libjvm.dylib` |

##### `G1ConcurrentMark::mark_in_bitmap` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                                                                                                  | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------------------------- | -------------- |
| removed |    -8 | 72.7% → 0.0% |   8 → 0 | `G1CMTask::make_reference_grey`                                                                         | `libjvm.dylib` |
| removed |    -2 | 18.2% → 0.0% |   2 → 0 | `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<ObjArrayKlass, narrowOop>`          | `libjvm.dylib` |
| removed |    -1 |  9.1% → 0.0% |   1 → 0 | `void OopOopIterateDispatch<G1RootRegionScanClosure>::Table::oop_oop_iterate<ObjArrayKlass, narrowOop>` | `libjvm.dylib` |

##### `_platform_memset` (`libsystem_platform.dylib`)

|  Change | Delta |             % | Samples | Caller                             | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------- | -------------- |
| removed |    -3 |  10.3% → 0.0% |   3 → 0 | `Matcher::Label_Root`              | `libjvm.dylib` |
|     new |    +2 |  0.0% → 10.5% |   0 → 2 | `GraphBuilder::method_return`      | `libjvm.dylib` |
|     new |    +2 |  0.0% → 10.5% |   0 → 2 | `GraphBuilder::iterate_all_blocks` | `libjvm.dylib` |
|     new |    +2 |  0.0% → 10.5% |   0 → 2 | `PhaseChaitin::Register_Allocate`  | `libjvm.dylib` |
|  -25.0% |    -1 | 13.8% → 15.8% |   4 → 3 | `MemAllocator::allocate`           | `libjvm.dylib` |

##### `G1CardSet::add_to_howl` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                | Location       |
| ------: | ----: | ------------: | ------: | --------------------- | -------------- |
| removed |   -10 | 100.0% → 0.0% |  10 → 0 | `G1CardSet::add_card` | `libjvm.dylib` |

##### `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                                                                             | Location       |
| ------: | ----: | -----------: | ------: | ---------------------------------------------------------------------------------- | -------------- |
| removed |    -7 | 77.8% → 0.0% |   7 → 0 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_to_pb`  | `libjvm.dylib` |
| removed |    -2 | 22.2% → 0.0% |   2 → 0 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_region` | `libjvm.dylib` |

##### `ClassLoaderDataGraphKlassIteratorAtomic::next_klass` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                    | Location       |
| ------: | ----: | ------------: | ------: | ------------------------- | -------------- |
| removed |    -8 | 100.0% → 0.0% |   8 → 0 | `KlassCleaningTask::work` | `libjvm.dylib` |

##### `frame::sender_raw` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                     | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------ | -------------- |
|  -36.4% |    -4 | 73.3% → 77.8% |  11 → 7 | `java_lang_Throwable::fill_in_stack_trace` | `libjvm.dylib` |
| removed |    -1 |   6.7% → 0.0% |   1 → 0 | `JVM_GetCallerClass`                       | `libjvm.dylib` |
| removed |    -1 |   6.7% → 0.0% |   1 → 0 | `vframe::sender`                           | `libjvm.dylib` |
|  -50.0% |    -1 | 13.3% → 11.1% |   2 → 1 | `frame::real_sender`                       | `libjvm.dylib` |
|     new |    +1 |  0.0% → 11.1% |   0 → 1 | `vframeStreamCommon::next`                 | `libjvm.dylib` |

##### `bsearch` (`libsystem_c.dylib`)

| Change | Delta |      % | Samples | Caller                           | Location       |
| -----: | ----: | -----: | ------: | -------------------------------- | -------------- |
| -33.3% |    -6 | 100.0% | 18 → 12 | `encoding_for_logical_immediate` | `libjvm.dylib` |

##### `collector(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f0010a1000`)

|  Change | Delta |            % | Samples | Caller                                   | Location                                            |
| ------: | ----: | -----------: | ------: | ---------------------------------------- | --------------------------------------------------- |
| removed |   -16 | 51.6% → 0.0% |  16 → 0 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000070010ab000` |
|     new |    +6 | 0.0% → 30.0% |   0 → 6 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000f0010ab000` |
| removed |    -3 |  9.7% → 0.0% |   3 → 0 | `invoke(Object, Object, int)`            | `java.lang.invoke.LambdaForm$MH.0x00000070010d0800` |
|     new |    +2 | 0.0% → 10.0% |   0 → 2 | `invoke(Object, Object, int)`            | `java.lang.invoke.LambdaForm$MH.0x000000f0010d0400` |
|     new |    +2 | 0.0% → 10.0% |   0 → 2 | `invoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f001337800` |

##### `computeValueConversions(MethodType, MethodType, boolean, boolean)` (`java.lang.invoke.MethodHandleImpl`)

| Change | Delta |      % | Samples | Caller                                                                    | Location                            |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------------- | ----------------------------------- |
| -72.7% |    -8 | 100.0% |  11 → 3 | `makePairwiseConvertByEditor(MethodHandle, MethodType, boolean, boolean)` | `java.lang.invoke.MethodHandleImpl` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f0011eb400`)

|  Change | Delta |            % | Samples | Caller                                   | Location                                            |
| ------: | ----: | -----------: | ------: | ---------------------------------------- | --------------------------------------------------- |
| removed |    -2 | 28.6% → 0.0% |   2 → 0 | `invoke(Object, int)`                    | `java.lang.invoke.LambdaForm$MH.0x0000007001031400` |
| removed |    -1 | 14.3% → 0.0% |   1 → 0 | `invoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001365400` |
| removed |    -1 | 14.3% → 0.0% |   1 → 0 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000007001591800` |
| removed |    -1 | 14.3% → 0.0% |   1 → 0 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000700102b000` |
| removed |    -1 | 14.3% → 0.0% |   1 → 0 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000070016d0800` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f0013b5800`)

|  Change | Delta |            % | Samples | Caller                   | Location                                            |
| ------: | ----: | -----------: | ------: | ------------------------ | --------------------------------------------------- |
| removed |    -6 | 85.7% → 0.0% |   6 → 0 | `guard(Object, Object)`  | `java.lang.invoke.LambdaForm$MH.0x000000700109a000` |
| removed |    -1 | 14.3% → 0.0% |   1 → 0 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070014a4000` |

##### `equals(Object, Object)` (`java.util.Objects`)

|  Change | Delta |              % | Samples | Caller                                            | Location                                                |
| ------: | ----: | -------------: | ------: | ------------------------------------------------- | ------------------------------------------------------- |
|  -29.4% |    -5 | 94.4% → 100.0% | 17 → 12 | `equals(Object)`                                  | `jdk.internal.util.StrongReferenceKey`                  |
| removed |    -1 |    5.6% → 0.0% |   1 → 0 | `getOrPutMethods(String, MetaMethodIndex$Header)` | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex` |

##### `type()` (`java.lang.invoke.MethodHandle`)

|  Change | Delta |             % | Samples | Caller                                                           | Location                                           |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------- | -------------------------------------------------- |
|  -37.5% |    -3 | 66.7% → 83.3% |   8 → 5 | `checkExactType(MethodHandle, MethodType)`                       | `java.lang.invoke.Invokers`                        |
| removed |    -3 |  25.0% → 0.0% |   3 → 0 | `dropArgumentsToMatch(MethodHandle, int, Class[], int, boolean)` | `java.lang.invoke.MethodHandles`                   |
| removed |    -1 |   8.3% → 0.0% |   1 → 0 | `applyUnsharpFilter(MethodHandle, int, MethodHandle)`            | `org.codehaus.groovy.vmplugin.v8.TypeTransformers` |
|     new |    +1 |  0.0% → 16.7% |   0 → 1 | `explicitCastArgumentsChecks(MethodHandle, MethodType)`          | `java.lang.invoke.MethodHandles`                   |

##### `makeReinvokerForm(MethodHandle, int, Object, boolean, LambdaForm$NamedFunction, LambdaForm$NamedFunction)` (`java.lang.invoke.DelegatingMethodHandle`)

| Change | Delta |             % | Samples | Caller                                                                   | Location                                     |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------ | -------------------------------------------- |
| -80.0% |    -4 | 55.6% → 25.0% |   5 → 1 | `apply(MethodHandle)`                                                    | `java.lang.invoke.MethodHandleImpl$Makers$1` |
| -25.0% |    -1 | 44.4% → 75.0% |   4 → 3 | `makeReinvokerForm(MethodHandle, int, Object, LambdaForm$NamedFunction)` | `java.lang.invoke.DelegatingMethodHandle`    |

##### `<init>(MethodType, LambdaForm)` (`java.lang.invoke.MethodHandle`)

|  Change | Delta |             % | Samples | Caller                                                | Location                                  |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------- | ----------------------------------------- |
|  -17.6% |    -3 | 89.5% → 93.3% | 17 → 14 | `<init>(MethodType, LambdaForm)`                      | `java.lang.invoke.BoundMethodHandle`      |
| removed |    -2 |  10.5% → 0.0% |   2 → 0 | `<init>(MethodType, LambdaForm, MemberName, boolean)` | `java.lang.invoke.DirectMethodHandle`     |
|     new |    +1 |   0.0% → 6.7% |   0 → 1 | `<init>(MethodType, LambdaForm)`                      | `java.lang.invoke.DelegatingMethodHandle` |

##### `get()` (`java.lang.ref.SoftReference`)

| Change | Delta |             % | Samples | Caller                                      | Location                                    |
| -----: | ----: | ------------: | ------: | ------------------------------------------- | ------------------------------------------- |
| -50.0% |    -1 | 16.7% → 12.5% |   2 → 1 | `get()`                                     | `org.codehaus.groovy.util.ManagedReference` |
| -50.0% |    -1 | 16.7% → 12.5% |   2 → 1 | `getInCache(LambdaFormEditor$TransformKey)` | `java.lang.invoke.LambdaFormEditor`         |
| -25.0% |    -1 | 33.3% → 37.5% |   4 → 3 | `cachedLambdaForm(int)`                     | `java.lang.invoke.MethodTypeForm`           |
| -50.0% |    -1 | 16.7% → 12.5% |   2 → 1 | `reflectionData()`                          | `java.lang.Class`                           |

##### `allocateInstance(Object)` (`java.lang.invoke.DirectMethodHandle`)

|  Change | Delta |            % | Samples | Caller                             | Location                                             |
| ------: | ----: | -----------: | ------: | ---------------------------------- | ---------------------------------------------------- |
| removed |    -3 | 60.0% → 0.0% |   3 → 0 | `newInvokeSpecial(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `newInvokeSpecial(Object)`         | `java.lang.invoke.LambdaForm$DMH.0x0000007001727400` |

##### `sameClasses(Class[], Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyGuardsFiltersAndSignatures`)

| Change | Delta |      % | Samples | Caller                                 | Location                                     |
| -----: | ----: | -----: | ------: | -------------------------------------- | -------------------------------------------- |
| -66.7% |    -4 | 100.0% |   6 → 2 | `invokeStatic(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `sequence(Pattern$Node)` (`java.util.regex.Pattern`)

| Change | Delta |      % | Samples | Caller               | Location                  |
| -----: | ----: | -----: | ------: | -------------------- | ------------------------- |
| -80.0% |    -4 | 100.0% |   5 → 1 | `expr(Pattern$Node)` | `java.util.regex.Pattern` |

##### `valueOf(boolean)` (`java.lang.Boolean`)

|  Change | Delta |              % | Samples | Caller                                                                                  | Location                                   |
| ------: | ----: | -------------: | ------: | --------------------------------------------------------------------------------------- | ------------------------------------------ |
|  -60.0% |    -3 | 83.3% → 100.0% |   5 → 2 | `boxBoolean(boolean)`                                                                   | `sun.invoke.util.ValueConversions`         |
| removed |    -1 |   16.7% → 0.0% |   1 → 0 | `getSelector(MutableCallSite, Class, String, int, boolean, boolean, boolean, Object[])` | `org.codehaus.groovy.vmplugin.v8.Selector` |

##### `visitAnnotations(Iterable)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|  Change | Delta |             % | Samples | Caller                            | Location                                          |
| ------: | ----: | ------------: | ------: | --------------------------------- | ------------------------------------------------- |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | `visitAnnotations(AnnotatedNode)` | `org.codehaus.groovy.ast.ClassCodeVisitorSupport` |

##### `isNullType(Class)` (`sun.invoke.util.VerifyType`)

|  Change | Delta |             % | Samples | Caller                                    | Location                     |
| ------: | ----: | ------------: | ------: | ----------------------------------------- | ---------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `isNullConversion(Class, Class, boolean)` | `sun.invoke.util.VerifyType` |

##### `initialize()` (`groovy.lang.MetaClassImpl`)

|  Change | Delta |             % | Samples | Caller           | Location                                                  |
| ------: | ----: | ------------: | ------: | ---------------- | --------------------------------------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `getMetaClass()` | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |

##### `prepare()` (`java.lang.invoke.LambdaForm`)

|  Change | Delta |             % | Samples | Caller                           | Location                        |
| ------: | ----: | ------------: | ------: | -------------------------------- | ------------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `<init>(MethodType, LambdaForm)` | `java.lang.invoke.MethodHandle` |

##### `makeImpl(Class, Class[], boolean)` (`java.lang.invoke.MethodType`)

| Change | Delta |             % | Samples | Caller                                | Location                      |
| -----: | ----: | ------------: | ------: | ------------------------------------- | ----------------------------- |
| -75.0% |    -3 | 80.0% → 50.0% |   4 → 1 | `methodType(Class, Class[], boolean)` | `java.lang.invoke.MethodType` |

##### `getMetaClass()` (`org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector`)

| Change | Delta |      % | Samples | Caller                | Location                                                  |
| -----: | ----: | -----: | ------: | --------------------- | --------------------------------------------------------- |
| -60.0% |    -3 | 100.0% |   5 → 2 | `setCallSiteTarget()` | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |

##### `invokeExact_MT(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

| Change | Delta |      % | Samples | Caller                                                                                        | Location                                        |
| -----: | ----: | -----: | ------: | --------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| -75.0% |    -3 | 100.0% |   4 → 1 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |

##### `getMetaClass()` (`org.codenarc.rule.formatting.IndentationRule`)

|  Change | Delta |            % | Samples | Caller                               | Location                                                         |
| ------: | ----: | -----------: | ------: | ------------------------------------ | ---------------------------------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `setGuards(Object)`                  | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector`        |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `isSameMetaClass(MetaClass, Object)` | `org.codehaus.groovy.vmplugin.v8.IndyGuardsFiltersAndSignatures` |

##### `<init>(String, boolean)` (`org.codenarc.util.WildcardPattern`)

|  Change | Delta |             % | Samples | Caller                                  | Location                                                                                                  |
| ------: | ----: | ------------: | ------: | --------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `newInvokeSpecial(Object, Object, int)` | `java.lang.invoke.LambdaForm$DMH.0x00000070012af400 → java.lang.invoke.LambdaForm$DMH.0x000000f00128f800` |

##### `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`)

|  Change | Delta |             % | Samples | Caller                                  | Location                                     |
| ------: | ----: | ------------: | ------: | --------------------------------------- | -------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `shouldApplyThisRuleTo(SourceCode)` (`org.codenarc.rule.AbstractRule`)

|  Change | Delta |             % | Samples | Caller                | Location                         |
| ------: | ----: | ------------: | ------: | --------------------- | -------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `applyTo(SourceCode)` | `org.codenarc.rule.AbstractRule` |

##### `isCollectMethodCall(Expression)` (`org.codenarc.rule.groovyism.UseCollectNestedAstVisitor`)

|  Change | Delta |             % | Samples | Caller                                  | Location                                                                                                  |
| ------: | ----: | ------------: | ------: | --------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001030400 → java.lang.invoke.LambdaForm$DMH.0x000000f001030400` |

##### `matches(SourceCode)` (`org.codenarc.source.SourceCodeCriteria`)

|  Change | Delta |             % | Samples | Caller                              | Location                         |
| ------: | ----: | ------------: | ------: | ----------------------------------- | -------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `shouldApplyThisRuleTo(SourceCode)` | `org.codenarc.rule.AbstractRule` |

##### `<init>()` (`org.codenarc.rule.AbstractAstVisitor`)

|  Change | Delta |             % | Samples | Caller     | Location                                                               |
| ------: | ----: | ------------: | ------: | ---------- | ---------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `<init>()` | `org.codenarc.rule.unnecessary.UnnecessaryTernaryExpressionAstVisitor` |

##### `setSourceCode(SourceCode)` (`org.codenarc.rule.AbstractAstVisitor`)

|  Change | Delta |             % | Samples | Caller                      | Location                                   |
| ------: | ----: | ------------: | ------: | --------------------------- | ------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractAstVisitorRule` |

##### `visitMethodCallExpression(MethodCallExpression)` (`org.codenarc.rule.unused.UnusedVariableAstVisitor`)

|  Change | Delta |             % | Samples | Caller                     | Location                                            |
| ------: | ----: | ------------: | ------: | -------------------------- | --------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `visit(GroovyCodeVisitor)` | `org.codehaus.groovy.ast.expr.MethodCallExpression` |

##### `addViolationIfDuplicate(Expression, boolean)` (`org.codenarc.rule.dry.DuplicateLiteralAstVisitor`)

| Change | Delta |      % | Samples | Caller                                | Location                                           |
| -----: | ----: | -----: | ------: | ------------------------------------- | -------------------------------------------------- |
| -50.0% |    -1 | 100.0% |   2 → 1 | `addViolationIfDuplicate(Expression)` | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor` |

##### `<init>(String)` (`org.codenarc.rule.exceptions.CommonCatchAstVisitor`)

|  Change | Delta |             % | Samples | Caller                             | Location                                     |
| ------: | ----: | ------------: | ------: | ---------------------------------- | -------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `newInvokeSpecial(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `visitVariableExpression(VariableExpression)` (`org.codenarc.rule.unused.UnusedPrivateMethodAstVisitor`)

|  Change | Delta |             % | Samples | Caller                     | Location                                          |
| ------: | ----: | ------------: | ------: | -------------------------- | ------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `visit(GroovyCodeVisitor)` | `org.codehaus.groovy.ast.expr.VariableExpression` |

##### `getMetaClass()` (`org.codenarc.rule.formatting.SpaceAfterMethodDeclarationNameRuleAstVisitor`)

|  Change | Delta |             % | Samples | Caller              | Location    |
| ------: | ----: | ------------: | ------: | ------------------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `break_stack_range` | `<unknown>` |

##### `visitBinaryExpression(BinaryExpression)` (`org.codenarc.rule.design.PrivateFieldCouldBeFinalAstVisitor`)

|  Change | Delta |             % | Samples | Caller                                              | Location                                     |
| ------: | ----: | ------------: | ------: | --------------------------------------------------- | -------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `visitDeclarationExpression(DeclarationExpression)` | `org.codehaus.groovy.ast.CodeVisitorSupport` |

##### `visitMethodCallExpression(MethodCallExpression)` (`org.codenarc.rule.unnecessary.UnnecessarySafeNavigationOperatorAstVisitor`)

|  Change | Delta |             % | Samples | Caller                     | Location                                            |
| ------: | ----: | ------------: | ------: | -------------------------- | --------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `visit(GroovyCodeVisitor)` | `org.codehaus.groovy.ast.expr.MethodCallExpression` |

##### `getMetaClass()` (`org.codenarc.rule.braces.ElseBlockBracesRule`)

|  Change | Delta |             % | Samples | Caller              | Location                                                  |
| ------: | ----: | ------------: | ------: | ------------------- | --------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `setGuards(Object)` | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |

##### `isMethodCallOnObject(Expression, String)` (`org.codenarc.util.AstUtil`)

|  Change | Delta |             % | Samples | Caller                                 | Location                                     |
| ------: | ----: | ------------: | ------: | -------------------------------------- | -------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `invokeStatic(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.formatting.ConsecutiveBlankLinesRule`)

|  Change | Delta |             % | Samples | Caller                | Location                         |
| ------: | ----: | ------------: | ------: | --------------------- | -------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `applyTo(SourceCode)` | `org.codenarc.rule.AbstractRule` |

##### `getMetaClass()` (`org.codenarc.rule.formatting.TrailingWhitespaceRule`)

|  Change | Delta |             % | Samples | Caller              | Location                                                  |
| ------: | ----: | ------------: | ------: | ------------------- | --------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `setGuards(Object)` | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |

##### `visitConstantExpression(ConstantExpression)` (`org.codenarc.rule.groovyism.GStringExpressionWithinStringAstVisitor`)

|  Change | Delta |             % | Samples | Caller                     | Location                                          |
| ------: | ----: | ------------: | ------: | -------------------------- | ------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `visit(GroovyCodeVisitor)` | `org.codehaus.groovy.ast.expr.ConstantExpression` |

##### `itable stub` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                            | Location                                 |
| ------: | ----: | ------------: | ------: | ------------------------------------------------- | ---------------------------------------- |
| removed |    -3 |  12.5% → 0.0% |   3 → 0 | `copyIntoWithCancel(Sink, Spliterator)`           | `java.util.stream.AbstractPipeline`      |
|  -60.0% |    -3 | 20.8% → 10.5% |   5 → 2 | `accept(Object)`                                  | `java.util.stream.ReferencePipeline$3$1` |
| removed |    -2 |   8.3% → 0.0% |   2 → 0 | `getExactSizeIfKnown()`                           | `java.util.Spliterator`                  |
|     new |    +2 |  0.0% → 10.5% |   0 → 2 | `accept(Object)`                                  | `java.util.stream.MatchOps$1MatchSink`   |
| removed |    -1 |   4.2% → 0.0% |   1 → 0 | `binarySort(Object[], int, int, int, Comparator)` | `java.util.TimSort`                      |

##### `zero_blocks` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                        | Location                              |
| ------: | ----: | ------------: | ------: | ----------------------------- | ------------------------------------- |
| removed |    -2 |  40.0% → 0.0% |   2 → 0 | `copyOf(byte[], int)`         | `java.util.Arrays`                    |
| removed |    -2 |  40.0% → 0.0% |   2 → 0 | `optimize(Pattern$Node)`      | `java.util.regex.Pattern$BnM`         |
| removed |    -1 |  20.0% → 0.0% |   1 → 0 | `allocateInstance(Object)`    | `java.lang.invoke.DirectMethodHandle` |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `ensureCapacityInternal(int)` | `java.lang.AbstractStringBuilder`     |

##### `I2C/C2I adapters(0xbbb)` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                                                   | Location                                                                    |
| ------: | ----: | -----------: | ------: | -------------------------------------------------------- | --------------------------------------------------------------------------- |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `minimum(Collection, Map)`                               | `org.gmetrics.result.MetricResultBuilder`                                   |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `<init>(Object, Object)`                                 | `org.codenarc.source.AbstractSourceCode$_removeGrabTransformation_closure1` |
|     new |    +1 | 0.0% → 25.0% |   0 → 1 | `invoke(Object, Object, int, int)`                       | `java.lang.invoke.LambdaForm$MH.0x000000f001406c00`                         |
|     new |    +1 | 0.0% → 25.0% |   0 → 1 | `mergeAt(int)`                                           | `java.util.TimSort`                                                         |
|     new |    +1 | 0.0% → 25.0% |   0 → 1 | `invokeExact_MT(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f001120c00`                         |

##### `I2C/C2I adapters(0xaa)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                  | Location                |
| ------: | ----: | ------------: | ------: | --------------------------------------- | ----------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `match(byte[], byte[], byte[], byte[])` | `java.util.jar.JarFile` |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

##### Compiler

| Change | Delta |            % |   Samples | Function                                    | Location       |
| -----: | ----: | -----------: | --------: | ------------------------------------------- | -------------- |
|  +5.4% |   +29 | 8.4% → 10.9% | 535 → 564 | `Compilation::compile_java_method`          | `libjvm.dylib` |
|  +4.7% |   +28 | 9.4% → 12.2% | 601 → 629 | `Compilation::compile_method`               | `libjvm.dylib` |
|  +4.7% |   +28 | 9.4% → 12.2% | 601 → 629 | `Compilation::Compilation`                  | `libjvm.dylib` |
| +27.7% |   +28 |  1.6% → 2.5% | 101 → 129 | `Compilation::emit_code_body`               | `libjvm.dylib` |
| +70.6% |   +24 |  0.5% → 1.1% |   34 → 58 | `LIR_Assembler::add_call_info`              | `libjvm.dylib` |
| +15.3% |   +22 |  2.2% → 3.2% | 144 → 166 | `LinearScan::do_linear_scan`                | `libjvm.dylib` |
| +15.4% |   +19 |  1.9% → 2.8% | 123 → 142 | `GraphBuilder::try_inline_full`             | `libjvm.dylib` |
| +15.2% |   +19 |  2.0% → 2.8% | 125 → 144 | `GraphBuilder::try_inline`                  | `libjvm.dylib` |
| +33.3% |   +19 |  0.9% → 1.5% |   57 → 76 | `IntervalWalker::walk_to`                   | `libjvm.dylib` |
| +12.0% |   +18 |  2.3% → 3.3% | 150 → 168 | `GraphBuilder::iterate_all_blocks`          | `libjvm.dylib` |
| +32.7% |   +18 |  0.9% → 1.4% |   55 → 73 | `LinearScan::allocate_registers`            | `libjvm.dylib` |
| +56.3% |   +18 |  0.5% → 1.0% |   32 → 50 | `LIR_Assembler::emit_slow_case_stubs`       | `libjvm.dylib` |
| +11.3% |   +17 |  2.3% → 3.2% | 150 → 167 | `GraphBuilder::iterate_bytecodes_for_block` | `libjvm.dylib` |
| +50.0% |   +17 |  0.5% → 1.0% |   34 → 51 | `Compilation::emit_code_epilog`             | `libjvm.dylib` |
| +34.9% |   +15 |  0.7% → 1.1% |   43 → 58 | `LinearScanWalker::activate_current`        | `libjvm.dylib` |
|  +8.9% |   +14 |  2.5% → 3.3% | 157 → 171 | `GraphBuilder::GraphBuilder`                | `libjvm.dylib` |
| +15.1% |   +14 |  1.5% → 2.1% |  93 → 107 | `GraphBuilder::try_method_handle_inline`    | `libjvm.dylib` |
| +87.5% |   +14 |  0.2% → 0.6% |   16 → 30 | `GraphBuilder::access_field`                | `libjvm.dylib` |
| +27.7% |   +13 |  0.7% → 1.2% |   47 → 60 | `DebugInformationRecorder::describe_scope`  | `libjvm.dylib` |
| +20.3% |   +13 |  1.0% → 1.5% |   64 → 77 | `LIR_Assembler::emit_lir_list`              | `libjvm.dylib` |

##### Native

| Change | Delta |            % |   Samples | Function                                                                        | Location       |
| -----: | ----: | -----------: | --------: | ------------------------------------------------------------------------------- | -------------- |
| +32.4% |   +33 |  1.6% → 2.6% | 102 → 135 | `JVM_NewArray`                                                                  | `libjvm.dylib` |
|  +4.6% |   +28 | 9.4% → 12.2% | 603 → 631 | `Compiler::compile_method`                                                      | `libjvm.dylib` |
| +12.5% |   +22 |  2.7% → 3.8% | 176 → 198 | `InstanceKlass::allocate_instance`                                              | `libjvm.dylib` |
| +73.3% |   +22 |  0.5% → 1.0% |   30 → 52 | `CodeEmitInfo::record_debug_info`                                               | `libjvm.dylib` |
|  +6.9% |   +21 |  4.7% → 6.3% | 303 → 324 | `MemAllocator::allocate`                                                        | `libjvm.dylib` |
| +20.0% |   +21 |  1.6% → 2.4% | 105 → 126 | `vframe::new_vframe`                                                            | `libjvm.dylib` |
|  +8.0% |   +21 |  4.1% → 5.5% | 264 → 285 | `JvmtiEnvBase::get_stack_trace`                                                 | `libjvm.dylib` |
|  +8.0% |   +21 |  4.1% → 5.5% | 264 → 285 | `JvmtiEnv::GetStackTrace`                                                       | `libjvm.dylib` |
| +27.0% |   +20 |  1.2% → 1.8% |   74 → 94 | `InstanceKlass::allocate_objArray`                                              | `libjvm.dylib` |
| +11.8% |   +20 |  2.7% → 3.7% | 170 → 190 | `_new_instance_Java`                                                            | `<unknown>`    |
|  +8.5% |   +20 |  3.7% → 4.9% | 234 → 254 | `vframe::java_sender`                                                           | `libjvm.dylib` |
|  +7.5% |   +20 |  4.1% → 5.5% | 265 → 285 | `jvmti_GetStackTrace`                                                           | `libjvm.dylib` |
| +23.5% |   +20 |  1.3% → 2.0% |  85 → 105 | `RegisterMap::RegisterMap`                                                      | `libjvm.dylib` |
| +11.2% |   +19 |  2.7% → 3.7% | 170 → 189 | `OptoRuntime::new_instance_C`                                                   | `libjvm.dylib` |
| +15.8% |   +19 |  1.9% → 2.7% | 120 → 139 | `vframe::sender`                                                                | `libjvm.dylib` |
| +65.5% |   +19 |  0.5% → 0.9% |   29 → 48 | `IRScopeDebugInfo::record_debug_info`                                           | `libjvm.dylib` |
| +24.0% |   +18 |  1.2% → 1.8% |   75 → 93 | `vframe::vframe`                                                                | `libjvm.dylib` |
|  +6.1% |   +17 |  4.4% → 5.7% | 279 → 296 | `JvmtiExport::post_sampled_object_alloc`                                        | `libjvm.dylib` |
|  +6.1% |   +17 |  4.4% → 5.7% | 279 → 296 | `JvmtiObjectAllocEventCollector::generate_call_for_allocated`                   | `libjvm.dylib` |
|  +6.1% |   +17 |  4.4% → 5.7% | 279 → 296 | `JvmtiSampledObjectAllocEventCollector::~JvmtiSampledObjectAllocEventCollector` | `libjvm.dylib` |

##### Standard library

|     Change |  Delta |             % |     Samples | Function                                         | Location                                                                                                  |
| ---------: | -----: | ------------: | ----------: | ------------------------------------------------ | --------------------------------------------------------------------------------------------------------- |
| +250600.0% | +2,506 | <0.1% → 48.6% |   1 → 2,507 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001133800 → java.lang.invoke.LambdaForm$MH.0x000000f00109bc00`   |
|   +1517.3% | +2,367 |  2.4% → 48.9% | 156 → 2,523 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070010c7400 → java.lang.invoke.LambdaForm$MH.0x000000f0010c6400`   |
|    +713.3% | +2,197 |  4.8% → 48.6% | 308 → 2,505 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001105400 → java.lang.invoke.LambdaForm$MH.0x000000f00102b000`   |
|    +632.2% | +2,118 |  5.2% → 47.6% | 335 → 2,453 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070010dc800 → java.lang.invoke.LambdaForm$MH.0x000000f0010d3400`   |
| +204800.0% | +2,048 | <0.1% → 39.7% |   1 → 2,049 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001511400 → java.lang.invoke.LambdaForm$MH.0x000000f0015a9c00`   |
| +102350.0% | +2,047 | <0.1% → 39.7% |   2 → 2,049 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001616800 → java.lang.invoke.LambdaForm$MH.0x000000f0015aa000`   |
|  +18600.0% | +2,046 |  0.2% → 39.9% |  11 → 2,057 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000700147a800 → java.lang.invoke.LambdaForm$MH.0x000000f0015a7000`   |
|   +4093.5% | +1,883 |  0.7% → 37.4% |  46 → 1,929 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000007001399800 → java.lang.invoke.LambdaForm$MH.0x000000f00137c000`   |
|  +62433.3% | +1,873 | <0.1% → 36.4% |   3 → 1,876 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000700144b000 → java.lang.invoke.LambdaForm$MH.0x000000f00163f000`   |
|  +37420.0% | +1,871 |  0.1% → 36.4% |   5 → 1,876 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000700164d800 → java.lang.invoke.LambdaForm$MH.0x000000f00163e400`   |
|  +37420.0% | +1,871 |  0.1% → 36.4% |   5 → 1,876 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001653000 → java.lang.invoke.LambdaForm$MH.0x000000f00163ec00`   |
|    +265.7% | +1,751 | 10.3% → 46.8% | 659 → 2,410 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000070012bdc00 → java.lang.invoke.LambdaForm$MH.0x000000f0010d8400`   |
|    +595.4% | +1,673 |  4.4% → 37.9% | 281 → 1,954 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001354400 → java.lang.invoke.LambdaForm$MH.0x000000f001329000`   |
|    +220.9% | +1,604 | 11.3% → 45.2% | 726 → 2,330 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070012bd400 → java.lang.invoke.LambdaForm$MH.0x000000f001292400`   |
|  +21971.4% | +1,538 |  0.1% → 30.0% |   7 → 1,545 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070017ee400 → java.lang.invoke.LambdaForm$MH.0x000000f0017c7c00`   |
|  +12800.0% |   +768 |  0.1% → 15.0% |     6 → 774 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070012cc800 → java.lang.invoke.LambdaForm$MH.0x000000f00129dc00`   |
|   +1025.9% |   +277 |   0.4% → 5.9% |    27 → 304 | `invokeVirtual(Object, Object, Object)`          | `java.lang.invoke.LambdaForm$DMH.0x0000007001095800 → java.lang.invoke.LambdaForm$DMH.0x000000f001097c00` |
|   +1360.0% |   +272 |   0.3% → 5.7% |    20 → 292 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001181400 → java.lang.invoke.LambdaForm$MH.0x000000f001328400`   |
|   +1044.0% |   +261 |   0.4% → 5.5% |    25 → 286 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070010c9c00 → java.lang.invoke.LambdaForm$MH.0x000000f001105400`   |
|   +1050.0% |   +252 |   0.4% → 5.4% |    24 → 276 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000700112dc00 → java.lang.invoke.LambdaForm$MH.0x000000f0012a1000`   |

##### Ours

|  Change | Delta |             % |       Samples | Function                                                | Location                                                                       |
| ------: | ----: | ------------: | ------------: | ------------------------------------------------------- | ------------------------------------------------------------------------------ |
|   +9.4% |   +70 | 11.6% → 15.8% |     742 → 812 | `visitMethod(MethodNode)`                               | `org.codenarc.rule.AbstractAstVisitor`                                         |
|   +4.2% |   +59 | 22.2% → 28.7% | 1,421 → 1,480 | `doCall(Object)`                                        | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`     |
|   +5.1% |   +51 | 15.5% → 20.2% |   991 → 1,042 | `visitClass(ClassNode)`                                 | `org.codenarc.rule.AbstractAstVisitor`                                         |
|   +4.5% |   +48 | 16.5% → 21.4% | 1,057 → 1,105 | `applyTo(SourceCode, List)`                             | `org.codenarc.rule.AbstractAstVisitorRule`                                     |
|   +3.8% |   +47 | 19.6% → 25.2% | 1,252 → 1,299 | `applyTo(SourceCode)`                                   | `org.codenarc.rule.AbstractRule`                                               |
|   +2.5% |   +47 | 28.9% → 36.8% | 1,849 → 1,896 | `measureRuleProcessingTime(Rule, Closure)`              | `org.codenarc.analyzer.AbstractSourceAnalyzer`                                 |
|   +1.6% |   +39 | 39.0% → 49.2% | 2,499 → 2,538 | `main(String[])`                                        | `org.codenarc.CodeNarc`                                                        |
|   +1.6% |   +39 | 38.8% → 48.9% | 2,484 → 2,523 | `execute(String[])`                                     | `org.codenarc.CodeNarc`                                                        |
|   +1.5% |   +38 | 38.5% → 48.6% | 2,466 → 2,504 | `execute()`                                             | `org.codenarc.CodeNarcRunner`                                                  |
|   +0.9% |   +21 | 36.1% → 45.2% | 2,310 → 2,331 | `analyze(RuleSet)`                                      | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                               |
|   +0.9% |   +21 | 36.1% → 45.2% | 2,309 → 2,330 | `doCall(Object)`                                        | `org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`    |
|   +0.9% |   +21 | 36.1% → 45.2% | 2,309 → 2,330 | `processDirectory(String, RuleSet)`                     | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                               |
|   +0.8% |   +19 | 36.0% → 45.0% | 2,302 → 2,321 | `processFile(String, DirectoryResults, RuleSet)`        | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                               |
| +112.5% |   +18 |   0.2% → 0.7% |       16 → 34 | `doCall(Object)`                                        | `org.gmetrics.metric.AbstractMethodMetric$_addMethodsToMetricResults_closure4` |
| +105.9% |   +18 |   0.3% → 0.7% |       17 → 35 | `addMethodsToMetricResults(SourceCode, ClassNode, Map)` | `org.gmetrics.metric.AbstractMethodMetric`                                     |
|  +25.8% |   +17 |   1.0% → 1.6% |       66 → 83 | `super$3$applyTo(SourceCode, List)`                     | `org.codenarc.rule.formatting.IndentationRule`                                 |
|   +0.7% |   +16 | 35.8% → 44.8% | 2,291 → 2,307 | `collectViolations(SourceCode, RuleSet)`                | `org.codenarc.analyzer.AbstractSourceAnalyzer`                                 |
|  +23.9% |   +16 |   1.0% → 1.6% |       67 → 83 | `applyTo(SourceCode, List)`                             | `org.codenarc.rule.formatting.IndentationRule`                                 |
|  +48.1% |   +13 |   0.4% → 0.8% |       27 → 40 | `visitMethodCallExpression(MethodCallExpression)`       | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                             |
| +109.1% |   +12 |   0.2% → 0.4% |       11 → 23 | `checkForCorrectColumn(ASTNode, String)`                | `org.codenarc.rule.formatting.IndentationAstVisitor`                           |

##### JIT

|  Change | Delta |            % | Samples | Function                   | Location    |
| ------: | ----: | -----------: | ------: | -------------------------- | ----------- |
| +100.0% |    +5 |  0.1% → 0.2% |  5 → 10 | `vtable stub`              | `<unknown>` |
|  +50.0% |    +2 |         0.1% |   4 → 6 | `I2C/C2I adapters(0xb)`    | `<unknown>` |
|  +33.3% |    +2 |  0.1% → 0.2% |   6 → 8 | `I2C/C2I adapters(0xbb)`   | `<unknown>` |
|  +50.0% |    +1 | <0.1% → 0.1% |   2 → 3 | `I2C/C2I adapters(0xbbbb)` | `<unknown>` |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

|  Change |  Delta |             % |       Samples | Function                                         | Location                                                                                                |
| ------: | -----: | ------------: | ------------: | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------- |
|  -99.8% | -2,462 |  38.5% → 0.1% |     2,466 → 4 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000700102b000 → java.lang.invoke.LambdaForm$MH.0x000000f001115800` |
| -100.0% | -2,364 | 36.9% → <0.1% |     2,365 → 1 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000007001188000 → java.lang.invoke.LambdaForm$MH.0x000000f0011ea400` |
|  -99.7% | -2,303 |  36.1% → 0.1% |     2,309 → 6 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070012b1800 → java.lang.invoke.LambdaForm$MH.0x000000f00128e400` |
|  -86.1% | -2,126 |  38.6% → 6.7% |   2,469 → 343 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000700109bc00 → java.lang.invoke.LambdaForm$MH.0x000000f0010dc400` |
|  -99.9% | -2,031 | 31.8% → <0.1% |     2,033 → 2 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070015c8400 → java.lang.invoke.LambdaForm$MH.0x000000f001428400` |
|  -99.4% | -2,029 |  31.9% → 0.2% |    2,041 → 12 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070015c5400 → java.lang.invoke.LambdaForm$MH.0x000000f0014c0800` |
|  -99.5% | -2,024 |  31.8% → 0.2% |    2,034 → 10 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070015c8000 → java.lang.invoke.LambdaForm$MH.0x000000f001087400` |
|  -76.9% | -1,911 | 38.8% → 11.1% |   2,484 → 573 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070010c6800 → java.lang.invoke.LambdaForm$MH.0x000000f0010c8000` |
|  -99.9% | -1,857 | 29.0% → <0.1% |     1,859 → 2 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001661800 → java.lang.invoke.LambdaForm$MH.0x000000f001628400` |
|  -99.7% | -1,854 |  29.0% → 0.1% |     1,859 → 5 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001662000 → java.lang.invoke.LambdaForm$MH.0x000000f0014d9c00` |
|  -98.9% | -1,838 |  29.0% → 0.4% |    1,859 → 21 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000007001662400 → java.lang.invoke.LambdaForm$MH.0x000000f00153a800` |
|  -99.9% | -1,527 | 23.9% → <0.1% |     1,528 → 1 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070017e9800 → java.lang.invoke.LambdaForm$MH.0x000000f001440800` |
|  -85.3% | -1,324 |  24.2% → 4.4% |   1,552 → 228 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070010c8000 → java.lang.invoke.LambdaForm$MH.0x000000f0010c7c00` |
|  -33.4% | -1,288 | 60.3% → 49.9% | 3,862 → 2,574 | `Thread::call_run`                               | `libjvm.dylib`                                                                                          |
|  -33.4% | -1,288 | 60.3% → 49.9% | 3,862 → 2,574 | `thread_native_entry`                            | `libjvm.dylib`                                                                                          |
|  -33.3% | -1,287 | 60.3% → 50.0% | 3,862 → 2,575 | `_pthread_start`                                 | `libsystem_pthread.dylib`                                                                               |
|  -33.3% | -1,287 | 60.3% → 50.0% | 3,862 → 2,575 | `thread_start`                                   | `libsystem_pthread.dylib`                                                                               |
|  -64.9% | -1,228 | 29.6% → 12.9% |   1,892 → 664 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000007001398c00 → java.lang.invoke.LambdaForm$MH.0x000000f0012a0800` |
|  -25.7% |   -889 | 54.0% → 49.9% | 3,459 → 2,570 | `JavaThread::thread_main_inner`                  | `libjvm.dylib`                                                                                          |
|  -32.1% |   -888 | 43.2% → 36.4% | 2,766 → 1,878 | `C2Compiler::compile_method`                     | `libjvm.dylib`                                                                                          |

##### Compiler

| Change | Delta |             % |       Samples | Function                                   | Location       |
| -----: | ----: | ------------: | ------------: | ------------------------------------------ | -------------- |
| -32.1% |  -888 | 43.2% → 36.4% | 2,766 → 1,878 | `C2Compiler::compile_method`               | `libjvm.dylib` |
| -32.1% |  -887 | 43.2% → 36.4% | 2,764 → 1,877 | `Compile::Compile`                         | `libjvm.dylib` |
| -25.5% |  -881 | 53.9% → 49.9% | 3,451 → 2,570 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib` |
| -25.6% |  -867 | 53.0% → 49.0% | 3,391 → 2,524 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |
| -29.8% |  -386 | 20.3% → 17.7% |   1,297 → 911 | `Compile::Code_Gen`                        | `libjvm.dylib` |
| -35.3% |  -386 | 17.1% → 13.8% |   1,095 → 709 | `Compile::Optimize`                        | `libjvm.dylib` |
| -29.5% |  -211 |  11.2% → 9.8% |     716 → 505 | `PhaseChaitin::Register_Allocate`          | `libjvm.dylib` |
| -38.5% |  -197 |   8.0% → 6.1% |     512 → 315 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib` |
| -39.4% |  -169 |   6.7% → 5.0% |     429 → 260 | `PhaseIdealLoop::PhaseIdealLoop`           | `libjvm.dylib` |
| -39.3% |  -168 |   6.7% → 5.0% |     428 → 260 | `PhaseIdealLoop::build_and_optimize`       | `libjvm.dylib` |
| -36.1% |  -137 |   5.9% → 4.7% |     379 → 242 | `PhaseIterGVN::optimize`                   | `libjvm.dylib` |
| -35.5% |  -128 |   5.6% → 4.5% |     361 → 233 | `PhaseIterGVN::transform_old`              | `libjvm.dylib` |
| -44.2% |  -102 |   3.6% → 2.5% |     231 → 129 | `Compile::optimize_loops`                  | `libjvm.dylib` |
| -31.7% |   -60 |   3.0% → 2.5% |     189 → 129 | `PhaseChaitin::Split`                      | `libjvm.dylib` |
| -24.6% |   -58 |   3.7% → 3.5% |     236 → 178 | `Matcher::match`                           | `libjvm.dylib` |
| -41.9% |   -57 |   2.1% → 1.5% |      136 → 79 | `PhaseIdealLoop::build_loop_late`          | `libjvm.dylib` |
| -31.8% |   -50 |   2.5% → 2.1% |     157 → 107 | `PhaseOutput::Output`                      | `libjvm.dylib` |
| -27.8% |   -49 |   2.7% → 2.5% |     176 → 127 | `Matcher::xform`                           | `libjvm.dylib` |
| -32.4% |   -47 |   2.3% → 1.9% |      145 → 98 | `PhaseCFG::do_global_code_motion`          | `libjvm.dylib` |
| -42.6% |   -46 |   1.7% → 1.2% |      108 → 62 | `MemNode::all_controls_dominate`           | `libjvm.dylib` |

##### Native

|  Change |  Delta |             % |       Samples | Function                                                                           | Location                  |
| ------: | -----: | ------------: | ------------: | ---------------------------------------------------------------------------------- | ------------------------- |
|  -33.4% | -1,288 | 60.3% → 49.9% | 3,862 → 2,574 | `Thread::call_run`                                                                 | `libjvm.dylib`            |
|  -33.4% | -1,288 | 60.3% → 49.9% | 3,862 → 2,574 | `thread_native_entry`                                                              | `libjvm.dylib`            |
|  -33.3% | -1,287 | 60.3% → 50.0% | 3,862 → 2,575 | `_pthread_start`                                                                   | `libsystem_pthread.dylib` |
|  -33.3% | -1,287 | 60.3% → 50.0% | 3,862 → 2,575 | `thread_start`                                                                     | `libsystem_pthread.dylib` |
|  -25.7% |   -889 | 54.0% → 49.9% | 3,459 → 2,570 | `JavaThread::thread_main_inner`                                                    | `libjvm.dylib`            |
| removed |   -377 |   5.9% → 0.0% |       377 → 0 | `WorkerThread::run`                                                                | `libjvm.dylib`            |
| removed |   -151 |   2.4% → 0.0% |       151 → 0 | `G1EvacuateRegionsBaseTask::work`                                                  | `libjvm.dylib`            |
| removed |    -97 |   1.5% → 0.0% |        97 → 0 | `G1ParScanThreadState::trim_queue_to_threshold`                                    | `libjvm.dylib`            |
| removed |    -95 |   1.5% → 0.0% |        95 → 0 | `G1CMTask::do_marking_step`                                                        | `libjvm.dylib`            |
|  -25.8% |    -94 |   5.7% → 5.3% |     365 → 271 | `Parse::do_one_block`                                                              | `libjvm.dylib`            |
|  -25.4% |    -93 |   5.7% → 5.3% |     366 → 273 | `Parse::do_all_blocks`                                                             | `libjvm.dylib`            |
|  -26.4% |    -92 |   5.4% → 5.0% |     348 → 256 | `Parse::do_call`                                                                   | `libjvm.dylib`            |
|  -24.9% |    -92 |   5.8% → 5.4% |     369 → 277 | `Parse::Parse`                                                                     | `libjvm.dylib`            |
|  -24.9% |    -92 |   5.8% → 5.4% |     369 → 277 | `ParseGenerator::generate`                                                         | `libjvm.dylib`            |
| removed |    -89 |   1.4% → 0.0% |        89 → 0 | `G1CMConcurrentMarkingTask::work`                                                  | `libjvm.dylib`            |
| removed |    -82 |   1.3% → 0.0% |        82 → 0 | `void G1CMTask::process_grey_task_entry<true>`                                     | `libjvm.dylib`            |
| removed |    -73 |   1.1% → 0.0% |        73 → 0 | `G1CMBitMap::iterate`                                                              | `libjvm.dylib`            |
| removed |    -72 |   1.1% → 0.0% |        72 → 0 | `G1EvacuateRegionsTask::scan_roots`                                                | `libjvm.dylib`            |
| removed |    -70 |   1.1% → 0.0% |        70 → 0 | `HeapRegionManager::par_iterate`                                                   | `libjvm.dylib`            |
| removed |    -68 |   1.1% → 0.0% |        68 → 0 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_region` | `libjvm.dylib`            |

##### Standard library

|  Change |  Delta |             % |       Samples | Function                                         | Location                                                                                                  |
| ------: | -----: | ------------: | ------------: | ------------------------------------------------ | --------------------------------------------------------------------------------------------------------- |
|  -99.8% | -2,462 |  38.5% → 0.1% |     2,466 → 4 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000700102b000 → java.lang.invoke.LambdaForm$MH.0x000000f001115800`   |
| -100.0% | -2,364 | 36.9% → <0.1% |     2,365 → 1 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000007001188000 → java.lang.invoke.LambdaForm$MH.0x000000f0011ea400`   |
|  -99.7% | -2,303 |  36.1% → 0.1% |     2,309 → 6 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070012b1800 → java.lang.invoke.LambdaForm$MH.0x000000f00128e400`   |
|  -86.1% | -2,126 |  38.6% → 6.7% |   2,469 → 343 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000700109bc00 → java.lang.invoke.LambdaForm$MH.0x000000f0010dc400`   |
|  -99.9% | -2,031 | 31.8% → <0.1% |     2,033 → 2 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070015c8400 → java.lang.invoke.LambdaForm$MH.0x000000f001428400`   |
|  -99.4% | -2,029 |  31.9% → 0.2% |    2,041 → 12 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070015c5400 → java.lang.invoke.LambdaForm$MH.0x000000f0014c0800`   |
|  -99.5% | -2,024 |  31.8% → 0.2% |    2,034 → 10 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070015c8000 → java.lang.invoke.LambdaForm$MH.0x000000f001087400`   |
|  -76.9% | -1,911 | 38.8% → 11.1% |   2,484 → 573 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070010c6800 → java.lang.invoke.LambdaForm$MH.0x000000f0010c8000`   |
|  -99.9% | -1,857 | 29.0% → <0.1% |     1,859 → 2 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001661800 → java.lang.invoke.LambdaForm$MH.0x000000f001628400`   |
|  -99.7% | -1,854 |  29.0% → 0.1% |     1,859 → 5 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001662000 → java.lang.invoke.LambdaForm$MH.0x000000f0014d9c00`   |
|  -98.9% | -1,838 |  29.0% → 0.4% |    1,859 → 21 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000007001662400 → java.lang.invoke.LambdaForm$MH.0x000000f00153a800`   |
|  -99.9% | -1,527 | 23.9% → <0.1% |     1,528 → 1 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070017e9800 → java.lang.invoke.LambdaForm$MH.0x000000f001440800`   |
|  -85.3% | -1,324 |  24.2% → 4.4% |   1,552 → 228 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070010c8000 → java.lang.invoke.LambdaForm$MH.0x000000f0010c7c00`   |
|  -64.9% | -1,228 | 29.6% → 12.9% |   1,892 → 664 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000007001398c00 → java.lang.invoke.LambdaForm$MH.0x000000f0012a0800`   |
|  -34.7% |   -861 | 38.8% → 31.5% | 2,484 → 1,623 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070010c7000 → java.lang.invoke.LambdaForm$MH.0x000000f0010abc00`   |
|  -64.4% |   -493 |  12.0% → 5.3% |     765 → 272 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070012c0000 → java.lang.invoke.LambdaForm$MH.0x000000f00129b400`   |
|  -66.1% |   -363 |   8.6% → 3.6% |     549 → 186 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070010c8400 → java.lang.invoke.LambdaForm$MH.0x000000f0010c7000`   |
|  -93.9% |   -275 |   4.6% → 0.3% |      293 → 18 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070012c0800 → java.lang.invoke.LambdaForm$MH.0x000000f0011e1000`   |
|  -86.3% |   -272 |   4.9% → 0.8% |      315 → 43 | `invokeVirtual(Object, Object, Object)`          | `java.lang.invoke.LambdaForm$DMH.0x0000007001097c00 → java.lang.invoke.LambdaForm$DMH.0x000000f001095800` |
|  -89.1% |   -269 |   4.7% → 0.6% |      302 → 33 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001344400 → java.lang.invoke.LambdaForm$MH.0x000000f001181400`   |

##### Ours

| Change | Delta |            % |   Samples | Function                                           | Location                                                                                     |
| -----: | ----: | -----------: | --------: | -------------------------------------------------- | -------------------------------------------------------------------------------------------- |
|  -8.1% |   -23 |  4.4% → 5.1% | 284 → 261 | `init()`                                           | `org.codenarc.source.AbstractSourceCode`                                                     |
|  -8.0% |   -23 |  4.5% → 5.1% | 286 → 263 | `getAst()`                                         | `org.codenarc.source.AbstractSourceCode`                                                     |
|  -6.4% |   -18 |  4.4% → 5.1% | 282 → 264 | `init()`                                           | `org.codenarc.analyzer.SuppressionAnalyzer`                                                  |
| -28.1% |   -18 |  1.0% → 0.9% |   64 → 46 | `applyVisitor(AstVisitor, SourceCode)`             | `org.codenarc.rule.AbstractSharedAstVisitorRule`                                             |
|  -5.6% |   -16 |  4.5% → 5.3% | 288 → 272 | `isRuleSuppressed(Rule)`                           | `org.codenarc.analyzer.SuppressionAnalyzer`                                                  |
| -41.4% |   -12 |  0.5% → 0.3% |   29 → 17 | `visitMethodCallExpression(MethodCallExpression)`  | `org.codenarc.rule.unused.UnusedPrivateMethodAstVisitor`                                     |
| -15.1% |   -11 |  1.1% → 1.2% |   73 → 62 | `applyTo(SourceCode, List)`                        | `org.codenarc.rule.AbstractSharedAstVisitorRule`                                             |
| -37.0% |   -10 |  0.4% → 0.3% |   27 → 17 | `visitConstantExpression(ConstantExpression)`      | `org.codenarc.rule.unnecessary.UnnecessaryGStringAstVisitor`                                 |
| -76.9% |   -10 |  0.2% → 0.1% |    13 → 3 | `doCall(Object)`                                   | `org.codenarc.rule.unused.UnusedPrivateMethodAstVisitor$_visitMethodCallExpression_closure2` |
| -81.8% |    -9 | 0.2% → <0.1% |    11 → 2 | `shouldApplyThisRuleTo(SourceCode)`                | `org.codenarc.rule.AbstractRule`                                                             |
| -25.7% |    -9 |         0.5% |   35 → 26 | `doCall(Object)`                                   | `org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor$_visitClassComplete_closure1` |
| -25.7% |    -9 |         0.5% |   35 → 26 | `visitClassComplete(ClassNode)`                    | `org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor`                              |
| -60.0% |    -9 |  0.2% → 0.1% |    15 → 6 | `isMethodCallOnObject(Expression, String)`         | `org.codenarc.util.AstUtil`                                                                  |
| -33.3% |    -8 |  0.4% → 0.3% |   24 → 16 | `visitVariableExpression(VariableExpression)`      | `org.codenarc.rule.unused.UnusedPrivateMethodAstVisitor`                                     |
| -70.0% |    -7 |  0.2% → 0.1% |    10 → 3 | `calculateFunctions(Collection)`                   | `org.gmetrics.metric.abc.result.AggregateAbcMetricResult`                                    |
| -70.0% |    -7 |  0.2% → 0.1% |    10 → 3 | `<init>(Metric, MetricLevel, Collection, Integer)` | `org.gmetrics.metric.abc.result.AggregateAbcMetricResult`                                    |
| -33.3% |    -7 |         0.3% |   21 → 14 | `visitExpressionStatement(ExpressionStatement)`    | `org.codenarc.rule.groovyism.UseCollectNestedAstVisitor`                                     |
| -77.8% |    -7 | 0.1% → <0.1% |     9 → 2 | `isMethodCall(MethodCallExpression, String)`       | `org.codenarc.rule.unused.UnusedPrivateMethodAstVisitor`                                     |
| -40.0% |    -6 |         0.2% |    15 → 9 | `doCall(List)`                                     | `org.codenarc.source.AbstractSourceCode$_removeGrabTransformation_closure1`                  |
| -37.5% |    -6 |         0.2% |   16 → 10 | `removeGrabTransformation(CompilationUnit)`        | `org.codenarc.source.AbstractSourceCode`                                                     |

##### JIT

|  Change | Delta |            % | Samples | Function                  | Location    |
| ------: | ----: | -----------: | ------: | ------------------------- | ----------- |
|  -20.8% |    -5 |         0.4% | 24 → 19 | `itable stub`             | `<unknown>` |
|  -80.0% |    -4 | 0.1% → <0.1% |   5 → 1 | `zero_blocks`             | `<unknown>` |
|  -20.0% |    -1 |         0.1% |   5 → 4 | `I2C/C2I adapters(0xbbb)` | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `I2C/C2I adapters(0xaa)`  | `<unknown>` |

#### Callees

Callees with the largest change in contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f00109bc00`)

|  Change |  Delta |             % |   Samples | Callee                             | Location                                            |
| ------: | -----: | ------------: | --------: | ---------------------------------- | --------------------------------------------------- |
|     new | +2,505 |  0.0% → 99.9% | 0 → 2,505 | `reinvoke(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000f001099c00` |
|     new |     +7 |   0.0% → 0.3% |     0 → 7 | `invoke(Object, Object)`           | `java.lang.invoke.LambdaForm$MH.0x000000f00109b800` |
|     new |     +3 |   0.0% → 0.1% |     0 → 3 | `delegate(Object, Object)`         | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
| removed |     -1 | 100.0% → 0.0% |     1 → 0 | `invokeStaticInit(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`        |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f0010c6400`)

|    Change |  Delta |             % |    Samples | Callee                                    | Location                                                                                                  |
| --------: | -----: | ------------: | ---------: | ----------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| +20925.0% | +2,511 | 7.7% → 100.0% | 12 → 2,523 | `invokeVirtual(Object, Object, Object)`   | `java.lang.invoke.DirectMethodHandle$Holder`                                                              |
|    -99.3% |   -136 | 87.8% → <0.1% |    137 → 1 | `invokeSpecial(Object, Object, Object)`   | `java.lang.invoke.LambdaForm$DMH.0x0000007001084000 → java.lang.invoke.LambdaForm$DMH.0x000000f001084000` |
|   removed |    -34 |  21.8% → 0.0% |     34 → 0 | `invokeInterface(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001124800`                                                      |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f00102b000`)

|  Change |  Delta |             % |   Samples | Callee                          | Location                                             |
| ------: | -----: | ------------: | --------: | ------------------------------- | ---------------------------------------------------- |
|     new | +2,504 | 0.0% → 100.0% | 0 → 2,504 | `invokeVirtual(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |
|  -98.7% |   -303 |  99.7% → 0.2% |   307 → 4 | `invokeSpecial(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |
|     new |     +4 |   0.0% → 0.2% |     0 → 4 | `invoke(Object, Object)`        | `java.lang.invoke.LambdaForm$MH.0x000000f00102ac00`  |
| removed |     -1 |   0.3% → 0.0% |     1 → 0 | `invokeVirtual(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001105000` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f0010d3400`)

|   Change |  Delta |              % |     Samples | Callee                             | Location                                                                                                |
| -------: | -----: | -------------: | ----------: | ---------------------------------- | ------------------------------------------------------------------------------------------------------- |
|  +641.1% | +2,122 | 98.8% → 100.0% | 331 → 2,453 | `reinvoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010aa800 → java.lang.invoke.LambdaForm$MH.0x000000f0010aa800` |
| +2766.7% |    +83 |    0.9% → 3.5% |      3 → 86 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`                                                        |
|  removed |     -1 |    0.3% → 0.0% |       1 → 0 | `invoke(Object, Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x00000070010ab000`                                                     |
|      new |     +1 |   0.0% → <0.1% |       0 → 1 | `invoke(Object, Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x000000f0010ab000`                                                     |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f0015a9c00`)

| Change |  Delta |             % |   Samples | Callee                                             | Location                                         |
| -----: | -----: | ------------: | --------: | -------------------------------------------------- | ------------------------------------------------ |
|    new | +2,049 | 0.0% → 100.0% | 0 → 2,049 | `delegate(Object, Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |

##### `invoke(Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f0015aa000`)

|  Change |  Delta |             % |   Samples | Callee                                                  | Location                                             |
| ------: | -----: | ------------: | --------: | ------------------------------------------------------- | ---------------------------------------------------- |
|     new | +2,049 | 0.0% → 100.0% | 0 → 2,049 | `invokeSpecial(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000f00118a800` |
| removed |     -2 | 100.0% → 0.0% |     2 → 0 | `invokeVirtual(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000070013c5000` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f0015a7000`)

|    Change |  Delta |      % |    Samples | Callee                                  | Location                                     |
| --------: | -----: | -----: | ---------: | --------------------------------------- | -------------------------------------------- |
| +18600.0% | +2,046 | 100.0% | 11 → 2,057 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `invoke(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f00137c000`)

|   Change |  Delta |             % |    Samples | Callee                                                                                      | Location                                                                                                  |
| -------: | -----: | ------------: | ---------: | ------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| +4182.2% | +1,882 | 97.8% → 99.9% | 45 → 1,927 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800 → java.lang.invoke.LambdaForm$DMH.0x000000f001088800` |
|      new |     +2 |   0.0% → 0.1% |      0 → 2 | `collector(Object, Object, Object, Object)`                                                 | `java.lang.invoke.LambdaForm$MH.0x000000f0010d2400`                                                       |

##### `invoke(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f00163f000`)

|  Change |  Delta |             % |   Samples | Callee                                          | Location                                             |
| ------: | -----: | ------------: | --------: | ----------------------------------------------- | ---------------------------------------------------- |
|     new | +1,876 | 0.0% → 100.0% | 0 → 1,876 | `invokeSpecial(Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |
| removed |     -3 | 100.0% → 0.0% |     3 → 0 | `invokeSpecial(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001098800` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f00163e400`)

|    Change |  Delta |      % |   Samples | Callee                             | Location                                         |
| --------: | -----: | -----: | --------: | ---------------------------------- | ------------------------------------------------ |
| +37420.0% | +1,871 | 100.0% | 5 → 1,876 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f00163ec00`)

|  Change |  Delta |             % |   Samples | Callee                                             | Location                                         |
| ------: | -----: | ------------: | --------: | -------------------------------------------------- | ------------------------------------------------ |
|     new | +1,876 | 0.0% → 100.0% | 0 → 1,876 | `delegate(Object, Object, Object, Object)`         | `java.lang.invoke.DelegatingMethodHandle$Holder` |
| removed |     -5 | 100.0% → 0.0% |     5 → 0 | `delegate(Object, Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |

##### `invoke(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f0010d8400`)

|  Change |  Delta |             % |   Samples | Callee                                                                                      | Location                                             |
| ------: | -----: | ------------: | --------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|     new | +2,408 |  0.0% → 99.9% | 0 → 2,408 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000f001088800` |
| removed |   -659 | 100.0% → 0.0% |   659 → 0 | `invokeSpecial(Object, Object, Object, Object)`                                             | `java.lang.invoke.DirectMethodHandle$Holder`         |
|     new |    +19 |   0.0% → 0.8% |    0 → 19 | `collector(Object, Object, Object, Object)`                                                 | `java.lang.invoke.LambdaForm$MH.0x000000f0010d2400`  |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f001329000`)

|  Change |  Delta |            % |   Samples | Callee                                     | Location                                            |
| ------: | -----: | -----------: | --------: | ------------------------------------------ | --------------------------------------------------- |
|     new | +1,952 | 0.0% → 99.9% | 0 → 1,952 | `reinvoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f001189000` |
| removed |   -276 | 98.2% → 0.0% |   276 → 0 | `reinvoke(Object, Object, Object, long)`   | `java.lang.invoke.LambdaForm$MH.0x0000007001352c00` |
|     new |     +4 |  0.0% → 0.2% |     0 → 4 | `delegate(Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
| removed |     -3 |  1.1% → 0.0% |     3 → 0 | `invoke(Object, Object, Object, long)`     | `java.lang.invoke.LambdaForm$MH.0x0000007001353400` |
| removed |     -1 |  0.4% → 0.0% |     1 → 0 | `invoke(Object, Object)`                   | `java.lang.invoke.LambdaForm$MH.0x0000007001123c00` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f001292400`)

|  Change |  Delta |              % |     Samples | Callee                                     | Location                                                                                                |
| ------: | -----: | -------------: | ----------: | ------------------------------------------ | ------------------------------------------------------------------------------------------------------- |
| +595.5% | +1,995 | 46.1% → 100.0% | 335 → 2,330 | `reinvoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001189000 → java.lang.invoke.LambdaForm$MH.0x000000f001189000` |
| removed |   -449 |   61.8% → 0.0% |     449 → 0 | `delegate(Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`                                                        |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f0017c7c00`)

|  Change |  Delta |             % |   Samples | Callee                                     | Location                                         |
| ------: | -----: | ------------: | --------: | ------------------------------------------ | ------------------------------------------------ |
|     new | +1,545 | 0.0% → 100.0% | 0 → 1,545 | `delegate(Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |
| removed |     -7 | 100.0% → 0.0% |     7 → 0 | `delegate(Object, Object, Object)`         | `java.lang.invoke.DelegatingMethodHandle$Holder` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f00129dc00`)

|  Change | Delta |            % | Samples | Callee                                                     | Location                                            |
| ------: | ----: | -----------: | ------: | ---------------------------------------------------------- | --------------------------------------------------- |
|     new |  +556 | 0.0% → 71.8% | 0 → 556 | `delegate(Object, Object, Object, Object)`                 | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|     new |  +271 | 0.0% → 35.0% | 0 → 271 | `reinvoke(Object, Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000f001189000` |
| removed |    -4 | 66.7% → 0.0% |   4 → 0 | `delegate(Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
| removed |    -2 | 33.3% → 0.0% |   2 → 0 | `reinvoke(Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070012ca000` |

##### `invokeVirtual(Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000f001097c00`)

|  Change | Delta |            % | Samples | Callee                             | Location                                                          |
| ------: | ----: | -----------: | ------: | ---------------------------------- | ----------------------------------------------------------------- |
|     new |  +272 | 0.0% → 89.5% | 0 → 272 | `isRuleSuppressed(Rule)`           | `org.codenarc.analyzer.SuppressionAnalyzer`                       |
| removed |    -7 | 25.9% → 0.0% |   7 → 0 | `sourceLineOrEmpty(ASTNode)`       | `org.codenarc.rule.formatting.AbstractSpaceAroundBraceAstVisitor` |
|     new |    +7 |  0.0% → 2.3% |   0 → 7 | `matches(String)`                  | `org.codenarc.util.WildcardPattern`                               |
|     new |    +6 |  0.0% → 2.0% |   0 → 6 | `shouldApplyThisRuleTo(ClassNode)` | `org.codenarc.rule.unused.UnusedPrivateFieldRule`                 |
| removed |    -5 | 18.5% → 0.0% |   5 → 0 | `lastSourceLineOrEmpty(ASTNode)`   | `org.codenarc.rule.formatting.AbstractSpaceAroundBraceAstVisitor` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f001328400`)

|  Change | Delta |             % | Samples | Callee                                                                                      | Location                                             |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|     new |  +292 | 0.0% → 100.0% | 0 → 292 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000f001088800` |
| removed |   -14 |  70.0% → 0.0% |  14 → 0 | `invokeSpecial(Object, Object, Object)`                                                     | `java.lang.invoke.DirectMethodHandle$Holder`         |
| removed |    -5 |  25.0% → 0.0% |   5 → 0 | `invokeVirtual(Object, Object, Object)`                                                     | `java.lang.invoke.LambdaForm$DMH.0x0000007001095800` |
| removed |    -1 |   5.0% → 0.0% |   1 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000700102ac00`  |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f001105400`)

|  Change | Delta |            % | Samples | Callee                                          | Location                                             |
| ------: | ----: | -----------: | ------: | ----------------------------------------------- | ---------------------------------------------------- |
|     new |  +285 | 0.0% → 99.7% | 0 → 285 | `invokeSpecial(Object, Object)`                 | `java.lang.invoke.DirectMethodHandle$Holder`         |
| removed |   -24 | 96.0% → 0.0% |  24 → 0 | `invokeVirtual(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001094400` |
| removed |    -1 |  4.0% → 0.0% |   1 → 0 | `collector(Object)`                             | `java.lang.invoke.LambdaForm$MH.0x00000070010c9800`  |
|     new |    +1 |  0.0% → 0.3% |   0 → 1 | `invokeVirtual(Object, Object)`                 | `java.lang.invoke.LambdaForm$DMH.0x000000f001105000` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f0012a1000`)

|  Change | Delta |             % | Samples | Callee                                  | Location                                             |
| ------: | ----: | ------------: | ------: | --------------------------------------- | ---------------------------------------------------- |
|     new |  +275 |  0.0% → 99.6% | 0 → 275 | `invokeVirtual(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000f001097c00` |
| removed |   -24 | 100.0% → 0.0% |  24 → 0 | `invokeStatic(Object, Object)`          | `java.lang.invoke.DirectMethodHandle$Holder`         |
|     new |    +1 |   0.0% → 0.4% |   0 → 1 | `invoke(Object, Object)`                | `java.lang.invoke.LambdaForm$MH.0x000000f00102ac00`  |

##### `Compilation::compile_java_method` (`libjvm.dylib`)

|  Change | Delta |             % |   Samples | Callee                        | Location       |
| ------: | ----: | ------------: | --------: | ----------------------------- | -------------- |
|  +27.7% |   +28 | 18.9% → 22.9% | 101 → 129 | `Compilation::emit_code_body` | `libjvm.dylib` |
|   +4.8% |   +10 | 38.7% → 38.5% | 207 → 217 | `Compilation::emit_lir`       | `libjvm.dylib` |
|   -2.8% |    -6 | 40.7% → 37.6% | 218 → 212 | `Compilation::build_hir`      | `libjvm.dylib` |
| removed |    -2 |   0.4% → 0.0% |     2 → 0 | `FrameMap::FrameMap`          | `libjvm.dylib` |
| removed |    -1 |   0.2% → 0.0% |     1 → 0 | `LinearScan::do_linear_scan`  | `libjvm.dylib` |

##### `Compilation::compile_method` (`libjvm.dylib`)

|  Change | Delta |             % |   Samples | Callee                                      | Location       |
| ------: | ----: | ------------: | --------: | ------------------------------------------- | -------------- |
|   +5.4% |   +29 | 89.0% → 89.7% | 535 → 564 | `Compilation::compile_java_method`          | `libjvm.dylib` |
| removed |    -2 |   0.3% → 0.0% |     2 → 0 | `Dependencies::assert_common_1`             | `libjvm.dylib` |
|     new |    +1 |   0.0% → 0.2% |     0 → 1 | `ciEnv::validate_compile_task_dependencies` | `libjvm.dylib` |

##### `Compilation::Compilation` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Callee                        | Location       |
| -----: | ----: | -----: | --------: | ----------------------------- | -------------- |
|  +4.7% |   +28 | 100.0% | 601 → 629 | `Compilation::compile_method` | `libjvm.dylib` |

##### `Compilation::emit_code_body` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                              | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------------- | -------------- |
|  +50.0% |   +17 | 33.7% → 39.5% | 34 → 51 | `Compilation::emit_code_epilog`     | `libjvm.dylib` |
|  +18.2% |   +12 | 65.3% → 60.5% | 66 → 78 | `LIR_Assembler::emit_code`          | `libjvm.dylib` |
| removed |    -1 |   1.0% → 0.0% |   1 → 0 | `LIR_Assembler::emit_deopt_handler` | `libjvm.dylib` |

##### `LIR_Assembler::add_call_info` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                           | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------------ | -------------- |
|  +73.3% |   +22 | 88.2% → 89.7% | 30 → 52 | `CodeEmitInfo::record_debug_info`                | `libjvm.dylib` |
|  +66.7% |    +2 |   8.8% → 8.6% |   3 → 5 | `LIR_Assembler::record_non_safepoint_debug_info` | `libjvm.dylib` |
| removed |    -1 |   2.9% → 0.0% |   1 → 0 | `Compilation::debug_info_recorder`               | `libjvm.dylib` |

##### `LinearScan::do_linear_scan` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------- | -------------- |
|  +32.7% |   +18 | 38.2% → 44.0% | 55 → 73 | `LinearScan::allocate_registers`      | `libjvm.dylib` |
|  +23.1% |    +6 | 18.1% → 19.3% | 26 → 32 | `LinearScan::assign_reg_num`          | `libjvm.dylib` |
|  -33.3% |    -5 |  10.4% → 6.0% | 15 → 10 | `LinearScan::compute_local_live_sets` | `libjvm.dylib` |
|  +15.0% |    +3 |         13.9% | 20 → 23 | `LinearScan::build_intervals`         | `libjvm.dylib` |
| +150.0% |    +3 |   1.4% → 3.0% |   2 → 5 | `LinearScan::eliminate_spill_moves`   | `libjvm.dylib` |

##### `GraphBuilder::try_inline_full` (`libjvm.dylib`)

|  Change | Delta |             % |   Samples | Callee                                  | Location       |
| ------: | ----: | ------------: | --------: | --------------------------------------- | -------------- |
|  +12.2% |   +14 | 93.5% → 90.8% | 115 → 129 | `GraphBuilder::iterate_all_blocks`      | `libjvm.dylib` |
|  +66.7% |    +8 |  9.8% → 14.1% |   12 → 20 | `GraphBuilder::push_scope`              | `libjvm.dylib` |
|   -6.3% |    -1 | 13.0% → 10.6% |   16 → 15 | `ciMethod::ensure_method_data`          | `libjvm.dylib` |
| removed |    -1 |   0.8% → 0.0% |     1 → 0 | `DirectiveSet::should_inline`           | `libjvm.dylib` |
| +100.0% |    +1 |   0.8% → 1.4% |     1 → 2 | `GraphBuilder::args_list_for_profiling` | `libjvm.dylib` |

##### `GraphBuilder::try_inline` (`libjvm.dylib`)

|  Change | Delta |             % |   Samples | Callee                                                                        | Location       |
| ------: | ----: | ------------: | --------: | ----------------------------------------------------------------------------- | -------------- |
|  +15.4% |   +19 | 98.4% → 98.6% | 123 → 142 | `GraphBuilder::try_inline_full`                                               | `libjvm.dylib` |
|  +15.1% |   +14 | 74.4% → 74.3% |  93 → 107 | `GraphBuilder::try_method_handle_inline`                                      | `libjvm.dylib` |
| +100.0% |    +1 |   0.8% → 1.4% |     1 → 2 | `GraphBuilder::try_inline_intrinsics`                                         | `libjvm.dylib` |
|     new |    +1 |   0.0% → 0.7% |     0 → 1 | `GrowableArrayWithAllocator<Instruction*, GrowableArray<Instruction*>>::push` | `libjvm.dylib` |
|     new |    +1 |   0.0% → 0.7% |     0 → 1 | `GraphBuilder::ScopeData::block_at`                                           | `libjvm.dylib` |

##### `IntervalWalker::walk_to` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                               | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------ | -------------- |
| +34.9% |   +15 | 75.4% → 76.3% | 43 → 58 | `LinearScanWalker::activate_current` | `libjvm.dylib` |
|  +8.3% |    +1 | 21.1% → 17.1% | 12 → 13 | `IntervalWalker::walk_to`            | `libjvm.dylib` |
|    new |    +1 |   0.0% → 1.3% |   0 → 1 | `LinearScanWalker::alloc_free_reg`   | `libjvm.dylib` |

##### `GraphBuilder::iterate_all_blocks` (`libjvm.dylib`)

|  Change | Delta |              % |   Samples | Callee                                      | Location                   |
| ------: | ----: | -------------: | --------: | ------------------------------------------- | -------------------------- |
|  +11.3% |   +17 | 100.0% → 99.4% | 150 → 167 | `GraphBuilder::iterate_bytecodes_for_block` | `libjvm.dylib`             |
|     new |    +2 |    0.0% → 1.2% |     0 → 2 | `_platform_memset`                          | `libsystem_platform.dylib` |
| removed |    -1 |    0.7% → 0.0% |     1 → 0 | `ValueStack::ValueStack`                    | `libjvm.dylib`             |
| removed |    -1 |    0.7% → 0.0% |     1 → 0 | `GraphBuilder::throw_op`                    | `libjvm.dylib`             |
|     new |    +1 |    0.0% → 0.6% |     0 → 1 | `GraphBuilder::if_node`                     | `libjvm.dylib`             |

##### `LinearScan::allocate_registers` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                    | Location       |
| -----: | ----: | ------------: | ------: | ------------------------- | -------------- |
| +33.3% |   +18 | 98.2% → 98.6% | 54 → 72 | `IntervalWalker::walk_to` | `libjvm.dylib` |

##### `LIR_Assembler::emit_slow_case_stubs` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                           | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------- | -------------- |
|  +66.7% |   +14 | 65.6% → 70.0% | 21 → 35 | `CounterOverflowStub::emit_code` | `libjvm.dylib` |
| +200.0% |    +2 |   3.1% → 6.0% |   1 → 3 | `RangeCheckStub::emit_code`      | `libjvm.dylib` |
| removed |    -1 |   3.1% → 0.0% |   1 → 0 | `C1SafepointPollStub::emit_code` | `libjvm.dylib` |
|  +50.0% |    +1 |   6.3% → 6.0% |   2 → 3 | `NewInstanceStub::emit_code`     | `libjvm.dylib` |
| +100.0% |    +1 |   3.1% → 4.0% |   1 → 2 | `SimpleExceptionStub::emit_code` | `libjvm.dylib` |

##### `GraphBuilder::iterate_bytecodes_for_block` (`libjvm.dylib`)

|  Change | Delta |             % |   Samples | Callee                        | Location       |
| ------: | ----: | ------------: | --------: | ----------------------------- | -------------- |
|  +87.5% |   +14 | 10.7% → 18.0% |   16 → 30 | `GraphBuilder::access_field`  | `libjvm.dylib` |
|   +6.2% |    +9 | 96.7% → 92.2% | 145 → 154 | `GraphBuilder::invoke`        | `libjvm.dylib` |
|  +66.7% |    +6 |   6.0% → 9.0% |    9 → 15 | `GraphBuilder::method_return` | `libjvm.dylib` |
| removed |    -2 |   1.3% → 0.0% |     2 → 0 | `GraphBuilder::new_instance`  | `libjvm.dylib` |
| removed |    -1 |   0.7% → 0.0% |     1 → 0 | `BlockBegin::set_end`         | `libjvm.dylib` |

##### `Compilation::emit_code_epilog` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                  | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------------- | -------------- |
|  +56.3% |   +18 | 94.1% → 98.0% | 32 → 50 | `LIR_Assembler::emit_slow_case_stubs`   | `libjvm.dylib` |
| removed |    -1 |   2.9% → 0.0% |   1 → 0 | `LIR_Assembler::emit_deopt_handler`     | `libjvm.dylib` |
| removed |    -1 |   2.9% → 0.0% |   1 → 0 | `G1PreBarrierStub::emit_code`           | `libjvm.dylib` |
|     new |    +1 |   0.0% → 2.0% |   0 → 1 | `LIR_Assembler::emit_exception_entries` | `libjvm.dylib` |

##### `LinearScanWalker::activate_current` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                        | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------------------- | -------------- |
|  +27.8% |   +10 | 83.7% → 79.3% | 36 → 46 | `LinearScanWalker::alloc_free_reg`            | `libjvm.dylib` |
|  +66.7% |    +2 |   7.0% → 8.6% |   3 → 5 | `LinearScanWalker::split_and_spill_interval`  | `libjvm.dylib` |
|     new |    +2 |   0.0% → 3.4% |   0 → 2 | `LinearScanWalker::alloc_locked_reg`          | `libjvm.dylib` |
|     new |    +2 |   0.0% → 3.4% |   0 → 2 | `LinearScanWalker::insert_move`               | `libjvm.dylib` |
| removed |    -1 |   2.3% → 0.0% |   1 → 0 | `LinearScanWalker::combine_spilled_intervals` | `libjvm.dylib` |

##### `GraphBuilder::GraphBuilder` (`libjvm.dylib`)

|  Change | Delta |             % |   Samples | Callee                               | Location       |
| ------: | ----: | ------------: | --------: | ------------------------------------ | -------------- |
|  +12.0% |   +18 | 95.5% → 98.2% | 150 → 168 | `GraphBuilder::iterate_all_blocks`   | `libjvm.dylib` |
|  -50.0% |    -2 |   2.5% → 1.2% |     4 → 2 | `BlockListBuilder::BlockListBuilder` | `libjvm.dylib` |
| removed |    -1 |   0.6% → 0.0% |     1 → 0 | `BlockBegin::try_merge`              | `libjvm.dylib` |
| removed |    -1 |   0.6% → 0.0% |     1 → 0 | `BlockBegin::iterate_preorder`       | `libjvm.dylib` |
|     new |    +1 |   0.0% → 0.6% |     0 → 1 | `BlockListBuilder::make_block_at`    | `libjvm.dylib` |

##### `GraphBuilder::try_method_handle_inline` (`libjvm.dylib`)

|  Change | Delta |             % |  Samples | Callee                          | Location       |
| ------: | ----: | ------------: | -------: | ------------------------------- | -------------- |
|  +16.5% |   +15 | 97.8% → 99.1% | 91 → 106 | `GraphBuilder::try_inline`      | `libjvm.dylib` |
|  -28.6% |    -2 |   7.5% → 4.7% |    7 → 5 | `ciMethodHandle::get_vmtarget`  | `libjvm.dylib` |
|     new |    +2 |   0.0% → 1.9% |    0 → 2 | `ciMethod::is_consistent_info`  | `libjvm.dylib` |
|  +20.0% |    +1 |   5.4% → 5.6% |    5 → 6 | `ciMemberName::get_vmtarget`    | `libjvm.dylib` |
| removed |    -1 |   1.1% → 0.0% |    1 → 0 | `ciObjectFactory::get_metadata` | `libjvm.dylib` |

##### `GraphBuilder::access_field` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                          | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------- | -------------- |
|  +58.3% |    +7 | 75.0% → 63.3% | 12 → 19 | `ciBytecodeStream::get_field`   | `libjvm.dylib` |
|  -66.7% |    -2 |  18.8% → 3.3% |   3 → 1 | `ciField::constant_value_of`    | `libjvm.dylib` |
|     new |    +2 |   0.0% → 6.7% |   0 → 2 | `GraphBuilder::append_with_bci` | `libjvm.dylib` |
| removed |    -1 |   6.3% → 0.0% |   1 → 0 | `ciField::is_call_site_target`  | `libjvm.dylib` |
|     new |    +1 |   0.0% → 3.3% |   0 → 1 | `ciField::constant_value`       | `libjvm.dylib` |

##### `DebugInformationRecorder::describe_scope` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                                                                                                                                                   | Location       |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| +16.7% |    +6 | 76.6% → 70.0% | 36 → 42 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `libjvm.dylib` |
|    new |    +1 |   0.0% → 1.7% |   0 → 1 | `ValueRecorder<Metadata*>::maybe_find_index`                                                                                                             | `libjvm.dylib` |

##### `LIR_Assembler::emit_lir_list` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                              | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------------- | -------------- |
| +125.0% |   +10 | 12.5% → 23.4% |  8 → 18 | `LIR_Assembler::emit_call`          | `libjvm.dylib` |
|  -71.4% |    -5 |  10.9% → 2.6% |   7 → 2 | `LIR_OpTypeCheck::emit_code`        | `libjvm.dylib` |
| removed |    -4 |   6.3% → 0.0% |   4 → 0 | `LIR_Assembler::append_code_stub`   | `libjvm.dylib` |
|  +75.0% |    +3 |   6.3% → 9.1% |   4 → 7 | `LIR_Assembler::const2reg`          | `libjvm.dylib` |
|  +25.0% |    +3 | 18.8% → 19.5% | 12 → 15 | `LIR_Assembler::process_debug_info` | `libjvm.dylib` |

##### `JVM_NewArray` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                             | Location                  |
| ------: | ----: | ------------: | ------: | ---------------------------------- | ------------------------- |
|  +54.5% |   +12 | 21.6% → 25.2% | 22 → 34 | `InstanceKlass::allocate_objArray` | `libjvm.dylib`            |
|  +15.9% |   +10 | 61.8% → 54.1% | 63 → 73 | `pthread_jit_write_protect_np`     | `libsystem_pthread.dylib` |
| +300.0% |    +3 |   1.0% → 3.0% |   1 → 4 | `ObjArrayKlass::array_klass`       | `libjvm.dylib`            |
|     new |    +3 |   0.0% → 2.2% |   0 → 3 | `InstanceKlass::array_klass`       | `libjvm.dylib`            |
| +200.0% |    +2 |   1.0% → 2.2% |   1 → 3 | `JNIHandleBlock::allocate_handle`  | `libjvm.dylib`            |

##### `Compiler::compile_method` (`libjvm.dylib`)

|  Change | Delta |           % |   Samples | Callee                     | Location       |
| ------: | ----: | ----------: | --------: | -------------------------- | -------------- |
|   +4.7% |   +28 |       99.7% | 601 → 629 | `Compilation::Compilation` | `libjvm.dylib` |
| removed |    -1 | 0.2% → 0.0% |     1 → 0 | `Chunk::next_chop`         | `libjvm.dylib` |
|     new |    +1 | 0.0% → 0.2% |     0 → 1 | `ciEnv::comp_level`        | `libjvm.dylib` |

##### `InstanceKlass::allocate_instance` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Callee                   | Location       |
| -----: | ----: | -----: | --------: | ------------------------ | -------------- |
| +12.5% |   +22 | 100.0% | 176 → 198 | `MemAllocator::allocate` | `libjvm.dylib` |

##### `CodeEmitInfo::record_debug_info` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                           | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------------ | -------------- |
|  +65.5% |   +19 | 96.7% → 92.3% | 29 → 48 | `IRScopeDebugInfo::record_debug_info`            | `libjvm.dylib` |
|     new |    +3 |   0.0% → 5.8% |   0 → 3 | `OopMap::OopMap`                                 | `libjvm.dylib` |
| removed |    -1 |   3.3% → 0.0% |   1 → 0 | `DebugInformationRecorder::add_safepoint`        | `libjvm.dylib` |
|     new |    +1 |   0.0% → 1.9% |   0 → 1 | `AbstractInterpreter::bytecode_should_reexecute` | `libjvm.dylib` |

##### `MemAllocator::allocate` (`libjvm.dylib`)

|  Change | Delta |             % |   Samples | Callee                                                      | Location                   |
| ------: | ----: | ------------: | --------: | ----------------------------------------------------------- | -------------------------- |
|   +5.3% |   +15 | 93.1% → 91.7% | 282 → 297 | `MemAllocator::Allocation::notify_allocation_jvmti_sampler` | `libjvm.dylib`             |
| +100.0% |    +3 |   1.0% → 1.9% |     3 → 6 | `ObjArrayAllocator::initialize`                             | `libjvm.dylib`             |
|  +66.7% |    +2 |   1.0% → 1.5% |     3 → 5 | `MemAllocator::mem_allocate_inside_tlab_slow`               | `libjvm.dylib`             |
|  -50.0% |    -1 |   0.7% → 0.3% |     2 → 1 | `ObjAllocator::initialize`                                  | `libjvm.dylib`             |
|  -25.0% |    -1 |   1.3% → 0.9% |     4 → 3 | `_platform_memset`                                          | `libsystem_platform.dylib` |

##### `vframe::new_vframe` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                           | Location        |
| -----: | ----: | ------------: | ------: | -------------------------------- | --------------- |
| +12.2% |   +10 | 78.1% → 73.0% | 82 → 92 | `compiledVFrame::compiledVFrame` | `libjvm.dylib`  |
| +27.3% |    +3 | 10.5% → 11.1% | 11 → 14 | `RegisterMap::RegisterMap`       | `libjvm.dylib`  |
|    new |    +3 |   0.0% → 2.4% |   0 → 3 | `tlv_get_addr`                   | `libdyld.dylib` |
| +66.7% |    +2 |   2.9% → 4.0% |   3 → 5 | `resource_allocate_bytes`        | `libjvm.dylib`  |
| -16.7% |    -1 |   5.7% → 4.0% |   6 → 5 | `Arena::grow`                    | `libjvm.dylib`  |

##### `JvmtiEnvBase::get_stack_trace` (`libjvm.dylib`)

|  Change | Delta |             % |   Samples | Callee                          | Location       |
| ------: | ----: | ------------: | --------: | ------------------------------- | -------------- |
|   +8.5% |   +20 | 88.6% → 89.1% | 234 → 254 | `vframe::java_sender`           | `libjvm.dylib` |
|   +6.5% |   +17 | 98.9% → 97.5% | 261 → 278 | `JvmtiEnvBase::get_stack_trace` | `libjvm.dylib` |
| +133.3% |    +4 |   1.1% → 2.5% |     3 → 7 | `Method::jmethod_id`            | `libjvm.dylib` |
|     new |    +3 |   0.0% → 1.1% |     0 → 3 | `vframe::sender`                | `libjvm.dylib` |
| +100.0% |    +2 |   0.8% → 1.4% |     2 → 4 | `InstanceKlass::get_jmethod_id` | `libjvm.dylib` |

##### `JvmtiEnv::GetStackTrace` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Callee                          | Location       |
| -----: | ----: | -----: | --------: | ------------------------------- | -------------- |
|  +8.0% |   +21 | 100.0% | 264 → 285 | `JvmtiEnvBase::get_stack_trace` | `libjvm.dylib` |

##### `InstanceKlass::allocate_objArray` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                                 | Location       |
| -----: | ----: | ------------: | ------: | -------------------------------------- | -------------- |
| +25.0% |   +17 | 91.9% → 90.4% | 68 → 85 | `CollectedHeap::array_allocate`        | `libjvm.dylib` |
|    new |    +3 |   0.0% → 3.2% |   0 → 3 | `InstanceKlass::array_klass`           | `libjvm.dylib` |
|    new |    +2 |   0.0% → 2.1% |   0 → 2 | `Klass::check_array_allocation_length` | `libjvm.dylib` |

##### `_new_instance_Java` (`<unknown>`)

| Change | Delta |              % |   Samples | Callee                        | Location       |
| -----: | ----: | -------------: | --------: | ----------------------------- | -------------- |
| +11.2% |   +19 | 100.0% → 99.5% | 170 → 189 | `OptoRuntime::new_instance_C` | `libjvm.dylib` |
|    new |    +1 |    0.0% → 0.5% |     0 → 1 | `ClassLoaderData::holder`     | `libjvm.dylib` |

##### `vframe::java_sender` (`libjvm.dylib`)

|  Change | Delta |             % |   Samples | Callee                   | Location                   |
| ------: | ----: | ------------: | --------: | ------------------------ | -------------------------- |
|  -30.2% |   -16 | 22.6% → 14.6% |   53 → 37 | `_platform_memmove`      | `libsystem_platform.dylib` |
|  +13.3% |   +16 | 51.3% → 53.5% | 120 → 136 | `vframe::sender`         | `libjvm.dylib`             |
|  +23.6% |   +13 | 23.5% → 26.8% |   55 → 68 | `compiledVFrame::sender` | `libjvm.dylib`             |
|     new |    +3 |   0.0% → 1.2% |     0 → 3 | `vframe::new_vframe`     | `libjvm.dylib`             |
| removed |    -1 |   0.4% → 0.0% |     1 → 0 | `ScopeDesc::sender`      | `libjvm.dylib`             |

##### `jvmti_GetStackTrace` (`libjvm.dylib`)

| Change | Delta |              % |   Samples | Callee                    | Location       |
| -----: | ----: | -------------: | --------: | ------------------------- | -------------- |
|  +8.0% |   +21 | 99.6% → 100.0% | 264 → 285 | `JvmtiEnv::GetStackTrace` | `libjvm.dylib` |

##### `OptoRuntime::new_instance_C` (`libjvm.dylib`)

|  Change | Delta |              % |   Samples | Callee                             | Location                  |
| ------: | ----: | -------------: | --------: | ---------------------------------- | ------------------------- |
|  +11.8% |   +20 | 99.4% → 100.0% | 169 → 189 | `InstanceKlass::allocate_instance` | `libjvm.dylib`            |
| removed |    -1 |    0.6% → 0.0% |     1 → 0 | `pthread_jit_write_protect_np`     | `libsystem_pthread.dylib` |

##### `vframe::sender` (`libjvm.dylib`)

|  Change | Delta |             % |   Samples | Callee                                | Location       |
| ------: | ----: | ------------: | --------: | ------------------------------------- | -------------- |
|  +18.8% |   +19 | 84.2% → 86.3% | 101 → 120 | `vframe::new_vframe`                  | `libjvm.dylib` |
|  -25.0% |    -3 |  10.0% → 6.5% |    12 → 9 | `frame::real_sender`                  | `libjvm.dylib` |
| removed |    -1 |   0.8% → 0.0% |     1 → 0 | `frame::sender_raw`                   | `libjvm.dylib` |
| removed |    -1 |   0.8% → 0.0% |     1 → 0 | `frame::sender_for_interpreter_frame` | `libjvm.dylib` |
|     new |    +1 |   0.0% → 0.7% |     0 → 1 | `frame::sender_for_compiled_frame`    | `libjvm.dylib` |

##### `IRScopeDebugInfo::record_debug_info` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                             | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------------------------- | -------------- |
| +140.0% |   +14 | 34.5% → 50.0% | 10 → 24 | `DebugInformationRecorder::describe_scope`         | `libjvm.dylib` |
|  +45.0% |    +9 | 69.0% → 60.4% | 20 → 29 | `IRScopeDebugInfo::record_debug_info`              | `libjvm.dylib` |
|  +11.1% |    +2 | 62.1% → 41.7% | 18 → 20 | `DebugInformationRecorder::create_scope_values`    | `libjvm.dylib` |
|     new |    +1 |   0.0% → 2.1% |   0 → 1 | `DebugInformationRecorder::create_monitor_values`  | `libjvm.dylib` |
|     new |    +1 |   0.0% → 2.1% |   0 → 1 | `DebugInformationRecorder::serialize_scope_values` | `libjvm.dylib` |

##### `vframe::vframe` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                     | Location       |
| -----: | ----: | ------------: | ------: | -------------------------- | -------------- |
| +23.0% |   +17 | 98.7% → 97.8% | 74 → 91 | `RegisterMap::RegisterMap` | `libjvm.dylib` |

##### `JvmtiExport::post_sampled_object_alloc` (`libjvm.dylib`)

| Change | Delta |             % |   Samples | Callee                            | Location                 |
| -----: | ----: | ------------: | --------: | --------------------------------- | ------------------------ |
|  +6.1% |   +17 | 99.6% → 99.7% | 278 → 295 | `ObjectSampler::recordAllocation` | `libasyncProfiler.dylib` |

##### `JvmtiObjectAllocEventCollector::generate_call_for_allocated` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Callee                                   | Location       |
| -----: | ----: | -----: | --------: | ---------------------------------------- | -------------- |
|  +6.1% |   +17 | 100.0% | 279 → 296 | `JvmtiExport::post_sampled_object_alloc` | `libjvm.dylib` |

##### `JvmtiSampledObjectAllocEventCollector::~JvmtiSampledObjectAllocEventCollector` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Callee                                                        | Location       |
| -----: | ----: | -----: | --------: | ------------------------------------------------------------- | -------------- |
|  +6.1% |   +17 | 100.0% | 279 → 296 | `JvmtiObjectAllocEventCollector::generate_call_for_allocated` | `libjvm.dylib` |

##### `visitMethod(MethodNode)` (`org.codenarc.rule.AbstractAstVisitor`)

|  Change | Delta |             % |   Samples | Callee                      | Location                                                                     |
| ------: | ----: | ------------: | --------: | --------------------------- | ---------------------------------------------------------------------------- |
|   +9.3% |   +59 | 85.7% → 85.6% | 636 → 695 | `visitMethod(MethodNode)`   | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                            |
| +275.0% |   +11 |   0.5% → 1.8% |    4 → 15 | `visitMethodEx(MethodNode)` | `org.codenarc.rule.naming.ScopedConfusingMethodNameAstVisitor`               |
|  -54.5% |    -6 |   1.5% → 0.6% |    11 → 5 | `visitMethodEx(MethodNode)` | `org.codenarc.rule.design.BooleanMethodReturnsNullAstVisitor`                |
|  +44.4% |    +4 |   1.2% → 1.6% |    9 → 13 | `visitMethodEx(MethodNode)` | `org.codenarc.rule.design.ReturnsNullInsteadOfEmptyCollectionRuleAstVisitor` |
| removed |    -3 |   0.4% → 0.0% |     3 → 0 | `visitMethodEx(MethodNode)` | `org.codenarc.rule.unnecessary.UnnecessaryPackageReferenceAstVisitor`        |

##### `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)

| Change | Delta |             % |       Samples | Callee                                   | Location                           |
| -----: | ----: | ------------: | ------------: | ---------------------------------------- | ---------------------------------- |
|  +2.4% |   +32 | 93.1% → 91.6% | 1,323 → 1,355 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
| +26.5% |   +26 |   6.9% → 8.4% |      98 → 124 | `linkToCallSite(Object, Object)`         | `java.lang.invoke.Invokers$Holder` |
|    new |    +1 |   0.0% → 0.1% |         0 → 1 | `_new_instance_Java`                     | `<unknown>`                        |

##### `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`)

|  Change | Delta |             % |   Samples | Callee                          | Location                                                              |
| ------: | ----: | ------------: | --------: | ------------------------------- | --------------------------------------------------------------------- |
|   +4.4% |   +36 | 82.3% → 81.8% | 816 → 852 | `visitClass(ClassNode)`         | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                     |
|  -25.7% |    -9 |   3.5% → 2.5% |   35 → 26 | `visitClassComplete(ClassNode)` | `org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor`       |
|  +16.7% |    +8 |   4.8% → 5.4% |   48 → 56 | `visitClassEx(ClassNode)`       | `org.codenarc.rule.size.AbstractMethodMetricAstVisitor`               |
| +300.0% |    +6 |   0.2% → 0.8% |     2 → 8 | `visitClassEx(ClassNode)`       | `org.codenarc.rule.unnecessary.UnnecessaryPackageReferenceAstVisitor` |
|  +45.5% |    +5 |   1.1% → 1.5% |   11 → 16 | `visitClassEx(ClassNode)`       | `org.codenarc.rule.naming.ConfusingMethodNameAstVisitor`              |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`)

|  Change | Delta |             % |   Samples | Callee                  | Location                                                |
| ------: | ----: | ------------: | --------: | ----------------------- | ------------------------------------------------------- |
|   +6.2% |   +57 | 86.5% → 87.9% | 914 → 971 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractAstVisitor`                  |
|  -11.8% |    -4 |   3.2% → 2.7% |   34 → 30 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractMethodCallExpressionVisitor` |
|   -4.8% |    -3 |   6.0% → 5.4% |   63 → 60 | `getAstVisitor()`       | `org.codenarc.rule.AbstractAstVisitorRule`              |
| +300.0% |    +3 |   0.1% → 0.4% |     1 → 4 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractFieldVisitor`                |
|  -50.0% |    -2 |   0.4% → 0.2% |     4 → 2 | `getAst()`              | `org.codenarc.source.AbstractSourceCode`                |

##### `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`)

| Change | Delta |             % |   Samples | Callee                              | Location                                         |
| -----: | ----: | ------------: | --------: | ----------------------------------- | ------------------------------------------------ |
|  +3.6% |   +34 | 76.4% → 76.3% | 957 → 991 | `applyTo(SourceCode, List)`         | `org.codenarc.rule.AbstractAstVisitorRule`       |
| +23.9% |   +16 |   5.4% → 6.4% |   67 → 83 | `applyTo(SourceCode, List)`         | `org.codenarc.rule.formatting.IndentationRule`   |
| -15.1% |   -11 |   5.8% → 4.8% |   73 → 62 | `applyTo(SourceCode, List)`         | `org.codenarc.rule.AbstractSharedAstVisitorRule` |
| +55.6% |   +10 |   1.4% → 2.2% |   18 → 28 | `applyTo(SourceCode, List)`         | `org.codenarc.rule.unused.UnusedVariableRule`    |
| -81.8% |    -9 |   0.9% → 0.2% |    11 → 2 | `shouldApplyThisRuleTo(SourceCode)` | `org.codenarc.rule.AbstractRule`                 |

##### `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|  Change | Delta |             % |       Samples | Callee                                           | Location                                                                                                |
| ------: | ----: | ------------: | ------------: | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------- |
|   +3.0% |   +45 | 80.0% → 80.4% | 1,480 → 1,525 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                                                                      |
|   +2.1% |    +6 | 15.3% → 15.2% |     282 → 288 | `linkToCallSite(Object, Object, long, Object)`   | `java.lang.invoke.LambdaForm$MH.0x0000007001350c00 → java.lang.invoke.LambdaForm$MH.0x000000f001333c00` |
| removed |    -4 |   0.2% → 0.0% |         4 → 0 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.Invokers$Holder`                                                                      |
|   -2.1% |    -1 |   2.5% → 2.4% |       47 → 46 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                                                                      |
| +100.0% |    +1 |          0.1% |         1 → 2 | `linkToCallSite(long, long, Object)`             | `java.lang.invoke.Invokers$Holder`                                                                      |

##### `main(String[])` (`org.codenarc.CodeNarc`)

| Change | Delta |            % |       Samples | Callee                                                           | Location                               |
| -----: | ----: | -----------: | ------------: | ---------------------------------------------------------------- | -------------------------------------- |
|  +1.6% |   +39 |        99.8% | 2,495 → 2,534 | `linkToCallSite(Object, Object, Object)`                         | `java.lang.invoke.Invokers$Holder`     |
| -50.0% |    -1 | 0.1% → <0.1% |         2 → 1 | `linkCallSite(Object, Object, Object, Object, Object, Object[])` | `java.lang.invoke.MethodHandleNatives` |
| +50.0% |    +1 |         0.1% |         2 → 3 | `linkToCallSite(Object, Object)`                                 | `java.lang.invoke.Invokers$Holder`     |

##### `execute(String[])` (`org.codenarc.CodeNarc`)

| Change | Delta |            % |       Samples | Callee                                             | Location                                                                                                |
| -----: | ----: | -----------: | ------------: | -------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
|  +1.5% |   +38 |        99.3% | 2,467 → 2,505 | `linkToCallSite(Object, Object)`                   | `java.lang.invoke.Invokers$Holder`                                                                      |
| -20.0% |    -1 |         0.2% |         5 → 4 | `linkToCallSite(Object, Object, Object)`           | `java.lang.invoke.Invokers$Holder`                                                                      |
|  +8.3% |    +1 |         0.5% |       12 → 13 | `linkToCallSite(Object, Object, int, int, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001955c00 → java.lang.invoke.LambdaForm$MH.0x000000f001924400` |
|    new |    +1 | 0.0% → <0.1% |         0 → 1 | `invokeClosure(Object, Object[])`                  | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter`                                                     |

##### `execute()` (`org.codenarc.CodeNarcRunner`)

| Change | Delta |             % |       Samples | Callee                                           | Location                           |
| -----: | ----: | ------------: | ------------: | ------------------------------------------------ | ---------------------------------- |
|  +1.2% |   +28 | 95.4% → 95.1% | 2,353 → 2,381 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder` |
| +11.8% |    +6 |   2.1% → 2.3% |       51 → 57 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.Invokers$Holder` |
|  +6.5% |    +4 |   2.5% → 2.6% |       62 → 66 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `analyze(RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)

| Change | Delta |      % |       Samples | Callee                                           | Location                           |
| -----: | ----: | -----: | ------------: | ------------------------------------------------ | ---------------------------------- |
|  +0.9% |   +21 | 100.0% | 2,309 → 2,330 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`)

|  Change | Delta |             % |       Samples | Callee                                                   | Location                                            |
| ------: | ----: | ------------: | ------------: | -------------------------------------------------------- | --------------------------------------------------- |
|   +0.9% |   +21 |         99.9% | 2,307 → 2,328 | `linkToCallSite(Object, Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                  |
|   +0.8% |   +18 | 99.7% → 99.6% | 2,303 → 2,321 | `linkToCallSite(Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
|     new |    +3 |   0.0% → 0.1% |         0 → 3 | `linkToCallSite(Object, int, Object)`                    | `java.lang.invoke.Invokers$Holder`                  |
| removed |    -1 |  <0.1% → 0.0% |         1 → 0 | `getField(Class, Object, String)`                        | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |
| removed |    -1 |  <0.1% → 0.0% |         1 → 0 | `linkToCallSite(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070010c9000` |

##### `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)

| Change | Delta |      % |       Samples | Callee                                   | Location                           |
| -----: | ----: | -----: | ------------: | ---------------------------------------- | ---------------------------------- |
|  +0.9% |   +21 | 100.0% | 2,309 → 2,330 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)

| Change | Delta |             % |       Samples | Callee                                           | Location                           |
| -----: | ----: | ------------: | ------------: | ------------------------------------------------ | ---------------------------------- |
|  +0.7% |   +17 | 99.5% → 99.4% | 2,291 → 2,308 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|  +9.1% |    +1 |          0.5% |       11 → 12 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder` |
|    new |    +1 |  0.0% → <0.1% |         0 → 1 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.Invokers$Holder` |

##### `doCall(Object)` (`org.gmetrics.metric.AbstractMethodMetric$_addMethodsToMetricResults_closure4`)

| Change | Delta |              % | Samples | Callee                                      | Location                                                             |
| -----: | ----: | -------------: | ------: | ------------------------------------------- | -------------------------------------------------------------------- |
| +87.5% |   +14 | 100.0% → 88.2% | 16 → 30 | `callCurrent(GroovyObject, Object, Object)` | `org.codehaus.groovy.runtime.callsite.AbstractCallSite`              |
|    new |    +2 |    0.0% → 5.9% |   0 → 2 | `callConstructor(Object, Object)`           | `org.codehaus.groovy.runtime.callsite.AbstractCallSite`              |
|    new |    +2 |    0.0% → 5.9% |   0 → 2 | `booleanUnbox(Object)`                      | `org.codehaus.groovy.runtime.typehandling.DefaultTypeTransformation` |

##### `addMethodsToMetricResults(SourceCode, ClassNode, Map)` (`org.gmetrics.metric.AbstractMethodMetric`)

|  Change | Delta |      % | Samples | Callee                 | Location                                                |
| ------: | ----: | -----: | ------: | ---------------------- | ------------------------------------------------------- |
| +105.9% |   +18 | 100.0% | 17 → 35 | `call(Object, Object)` | `org.codehaus.groovy.runtime.callsite.AbstractCallSite` |

##### `super$3$applyTo(SourceCode, List)` (`org.codenarc.rule.formatting.IndentationRule`)

| Change | Delta |      % | Samples | Callee                      | Location                                   |
| -----: | ----: | -----: | ------: | --------------------------- | ------------------------------------------ |
| +25.8% |   +17 | 100.0% | 66 → 83 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractAstVisitorRule` |

##### `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|  Change | Delta |             % |       Samples | Callee                                                               | Location                                                                   |
| ------: | ----: | ------------: | ------------: | -------------------------------------------------------------------- | -------------------------------------------------------------------------- |
|   +1.8% |   +34 | 83.8% → 84.7% | 1,920 → 1,954 | `linkToCallSite(Object, Object, Object, Object)`                     | `java.lang.invoke.Invokers$Holder`                                         |
|  -25.5% |   -12 |   2.1% → 1.5% |       47 → 35 | `linkToCallSite(Object, Object)`                                     | `java.lang.invoke.Invokers$Holder`                                         |
|   -1.3% |    -4 | 13.9% → 13.7% |     319 → 315 | `linkToCallSite(Object, Object, Object)`                             | `java.lang.invoke.Invokers$Holder`                                         |
|  -66.7% |    -2 |  0.1% → <0.1% |         3 → 1 | `<init>(Object, Object, Reference, Reference, Reference, Reference)` | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3` |
| removed |    -1 |  <0.1% → 0.0% |         1 → 0 | `createMap(Object[])`                                                | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter`                        |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.formatting.IndentationRule`)

|  Change | Delta |              % | Samples | Callee                                                        | Location                                            |
| ------: | ----: | -------------: | ------: | ------------------------------------------------------------- | --------------------------------------------------- |
|  +25.8% |   +17 | 98.5% → 100.0% | 66 → 83 | `invokeMethodOnSuperN(Class, GroovyObject, String, Object[])` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |
| removed |    -1 |    1.5% → 0.0% |   1 → 0 | `linkToCallSite(Object, Object, Object)`                      | `java.lang.invoke.Invokers$Holder`                  |

##### `visitMethodCallExpression(MethodCallExpression)` (`org.codenarc.rule.dry.DuplicateLiteralAstVisitor`)

|  Change | Delta |             % | Samples | Callee                                                        | Location                                            |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------- | --------------------------------------------------- |
| +450.0% |    +9 |  7.4% → 27.5% |  2 → 11 | `linkToCallSite(Object, Object, Object)`                      | `java.lang.invoke.Invokers$Holder`                  |
|  +24.0% |    +6 | 92.6% → 77.5% | 25 → 31 | `invokeMethodOnSuperN(Class, GroovyObject, String, Object[])` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |
|     new |    +1 |   0.0% → 2.5% |   0 → 1 | `linkToCallSite(Object, Object)`                              | `java.lang.invoke.Invokers$Holder`                  |

##### `checkForCorrectColumn(ASTNode, String)` (`org.codenarc.rule.formatting.IndentationAstVisitor`)

|  Change | Delta |              % | Samples | Callee                                                   | Location                           |
| ------: | ----: | -------------: | ------: | -------------------------------------------------------- | ---------------------------------- |
| +100.0% |   +11 | 100.0% → 95.7% | 11 → 22 | `linkToCallSite(Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|     new |    +1 |    0.0% → 4.3% |   0 → 1 | `linkToCallSite(Object, Object)`                         | `java.lang.invoke.Invokers$Holder` |

##### `I2C/C2I adapters(0xbb)` (`<unknown>`)

|  Change | Delta |            % | Samples | Callee                                  | Location       |
| ------: | ----: | -----------: | ------: | --------------------------------------- | -------------- |
| removed |    -1 | 16.7% → 0.0% |   1 → 0 | `SharedRuntime::fixup_callers_callsite` | `libjvm.dylib` |

##### `I2C/C2I adapters(0xbbbb)` (`<unknown>`)

| Change | Delta |            % | Samples | Callee                                  | Location       |
| -----: | ----: | -----------: | ------: | --------------------------------------- | -------------- |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `SharedRuntime::fixup_callers_callsite` | `libjvm.dylib` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f001115800`)

|  Change |  Delta |             % |   Samples | Callee                          | Location                                             |
| ------: | -----: | ------------: | --------: | ------------------------------- | ---------------------------------------------------- |
| removed | -2,466 | 100.0% → 0.0% | 2,466 → 0 | `invokeVirtual(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |
| removed |     -5 |   0.2% → 0.0% |     5 → 0 | `invokeSpecial(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |
|     new |     +4 | 0.0% → 100.0% |     0 → 4 | `invokeVirtual(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000f001105000` |
| removed |     -2 |   0.1% → 0.0% |     2 → 0 | `invoke(Object, Object)`        | `java.lang.invoke.LambdaForm$MH.0x000000700102ac00`  |
| removed |     -1 |  <0.1% → 0.0% |     1 → 0 | `invoke(Object, Object)`        | `java.lang.invoke.LambdaForm$MH.0x00000070010d1400`  |

##### `invoke(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f0011ea400`)

|  Change |  Delta |             % |   Samples | Callee                                          | Location                                            |
| ------: | -----: | ------------: | --------: | ----------------------------------------------- | --------------------------------------------------- |
| removed | -2,365 | 100.0% → 0.0% | 2,365 → 0 | `invoke(Object, Object, Object, Object)`        | `java.lang.invoke.LambdaForm$MH.0x00000070010d2400` |
|     new |     +1 | 0.0% → 100.0% |     0 → 1 | `invokeSpecial(Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`        |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f00128e400`)

|  Change |  Delta |              % |   Samples | Callee                                     | Location                                                                                                |
| ------: | -----: | -------------: | --------: | ------------------------------------------ | ------------------------------------------------------------------------------------------------------- |
|  -99.9% | -2,307 | 100.0% → 33.3% | 2,309 → 2 | `reinvoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001189000 → java.lang.invoke.LambdaForm$MH.0x000000f001189000` |
| +300.0% |     +3 |  <0.1% → 66.7% |     1 → 4 | `delegate(Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`                                                        |
| removed |     -3 |    0.1% → 0.0% |     3 → 0 | `invoke(Object, Object, Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x0000007001189c00`                                                     |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f0010dc400`)

|  Change |  Delta |             % |   Samples | Callee                             | Location                                            |
| ------: | -----: | ------------: | --------: | ---------------------------------- | --------------------------------------------------- |
| removed | -2,468 | 100.0% → 0.0% | 2,468 → 0 | `reinvoke(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000007001099c00` |
|     new |   +341 |  0.0% → 99.4% |   0 → 341 | `reinvoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f0010aa800` |
| removed |     -4 |   0.2% → 0.0% |     4 → 0 | `delegate(Object, Object)`         | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
| removed |     -3 |   0.1% → 0.0% |     3 → 0 | `invoke(Object, Object)`           | `java.lang.invoke.LambdaForm$MH.0x000000700109b800` |
|     new |     +2 |   0.0% → 0.6% |     0 → 2 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `invoke(Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f001428400`)

|  Change |  Delta |             % |   Samples | Callee                                                  | Location                                             |
| ------: | -----: | ------------: | --------: | ------------------------------------------------------- | ---------------------------------------------------- |
| removed | -2,033 | 100.0% → 0.0% | 2,033 → 0 | `invokeSpecial(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000700118a800` |
|     new |     +2 | 0.0% → 100.0% |     0 → 2 | `invokeStatic(Object, Object, Object)`                  | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f0014c0800`)

| Change |  Delta |      % |    Samples | Callee                                  | Location                                     |
| -----: | -----: | -----: | ---------: | --------------------------------------- | -------------------------------------------- |
| -99.4% | -2,029 | 100.0% | 2,041 → 12 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f001087400`)

|  Change |  Delta |             % |   Samples | Callee                                             | Location                                         |
| ------: | -----: | ------------: | --------: | -------------------------------------------------- | ------------------------------------------------ |
| removed | -2,034 | 100.0% → 0.0% | 2,034 → 0 | `delegate(Object, Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |
|     new |    +10 | 0.0% → 100.0% |    0 → 10 | `invokeStatic(Object, Object, int)`                | `java.lang.invoke.DirectMethodHandle$Holder`     |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f0010c8000`)

|  Change |  Delta |             % |   Samples | Callee                                  | Location                                             |
| ------: | -----: | ------------: | --------: | --------------------------------------- | ---------------------------------------------------- |
| removed | -2,484 | 100.0% → 0.0% | 2,484 → 0 | `invokeVirtual(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |
|     new |   +572 |  0.0% → 99.8% |   0 → 572 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |
|     new |     +8 |   0.0% → 1.4% |     0 → 8 | `invokeVirtual(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000f001095800` |
| removed |     -3 |   0.1% → 0.0% |     3 → 0 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001084000` |
| removed |     -1 |  <0.1% → 0.0% |     1 → 0 | `invoke(Object, Object)`                | `java.lang.invoke.LambdaForm$MH.0x000000700102ac00`  |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f001628400`)

| Change |  Delta |      % |   Samples | Callee                             | Location                                         |
| -----: | -----: | -----: | --------: | ---------------------------------- | ------------------------------------------------ |
| -99.9% | -1,857 | 100.0% | 1,859 → 2 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f0014d9c00`)

|  Change |  Delta |             % |   Samples | Callee                                     | Location                                         |
| ------: | -----: | ------------: | --------: | ------------------------------------------ | ------------------------------------------------ |
| removed | -1,859 | 100.0% → 0.0% | 1,859 → 0 | `delegate(Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |
|     new |     +4 |  0.0% → 80.0% |     0 → 4 | `delegate(Object, Object, Object)`         | `java.lang.invoke.DelegatingMethodHandle$Holder` |

##### `invoke(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f00153a800`)

|  Change |  Delta |             % |   Samples | Callee                                          | Location                                             |
| ------: | -----: | ------------: | --------: | ----------------------------------------------- | ---------------------------------------------------- |
| removed | -1,859 | 100.0% → 0.0% | 1,859 → 0 | `invokeSpecial(Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |
|     new |    +21 | 0.0% → 100.0% |    0 → 21 | `invokeVirtual(Object, Object, Object, int)`    | `java.lang.invoke.LambdaForm$DMH.0x000000f001344c00` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f001440800`)

|  Change |  Delta |             % |   Samples | Callee                                     | Location                                            |
| ------: | -----: | ------------: | --------: | ------------------------------------------ | --------------------------------------------------- |
| removed | -1,528 | 100.0% → 0.0% | 1,528 → 0 | `delegate(Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|     new |     +1 | 0.0% → 100.0% |     0 → 1 | `invoke(Object, Object)`                   | `java.lang.invoke.LambdaForm$MH.0x000000f00109b800` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f0010c7c00`)

|  Change |  Delta |             % |     Samples | Callee                             | Location                                                                                                |
| ------: | -----: | ------------: | ----------: | ---------------------------------- | ------------------------------------------------------------------------------------------------------- |
|  -88.1% | -1,361 | 99.5% → 80.7% | 1,545 → 184 | `reinvoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010aa800 → java.lang.invoke.LambdaForm$MH.0x000000f0010aa800` |
|  +29.0% |     +9 |  2.0% → 17.5% |     31 → 40 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`                                                        |
| removed |     -2 |   0.1% → 0.0% |       2 → 0 | `invoke(Object, Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x00000070010ab000`                                                     |
|     new |     +2 |   0.0% → 0.9% |       0 → 2 | `invoke(Object, Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x000000f0010ab000`                                                     |
| removed |     -1 |   0.1% → 0.0% |       1 → 0 | `invoke(Object, Object)`           | `java.lang.invoke.LambdaForm$MH.0x000000700102ac00`                                                     |

##### `Thread::call_run` (`libjvm.dylib`)

|  Change | Delta |             % |       Samples | Callee                          | Location       |
| ------: | ----: | ------------: | ------------: | ------------------------------- | -------------- |
|  -25.7% |  -889 | 89.6% → 99.8% | 3,459 → 2,570 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
| removed |  -377 |   9.8% → 0.0% |       377 → 0 | `WorkerThread::run`             | `libjvm.dylib` |
|  -90.0% |    -9 |  0.3% → <0.1% |        10 → 1 | `VMThread::run`                 | `libjvm.dylib` |
| removed |    -8 |   0.2% → 0.0% |         8 → 0 | `WatcherThread::run`            | `libjvm.dylib` |
|  -87.5% |    -7 |  0.2% → <0.1% |         8 → 1 | `ConcurrentGCThread::run`       | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

| Change |  Delta |      % |       Samples | Callee             | Location       |
| -----: | -----: | -----: | ------------: | ------------------ | -------------- |
| -33.4% | -1,288 | 100.0% | 3,862 → 2,574 | `Thread::call_run` | `libjvm.dylib` |

##### `_pthread_start` (`libsystem_pthread.dylib`)

| Change |  Delta |            % |       Samples | Callee                | Location       |
| -----: | -----: | -----------: | ------------: | --------------------- | -------------- |
| -33.4% | -1,288 |       100.0% | 3,862 → 2,574 | `thread_native_entry` | `libjvm.dylib` |
|    new |     +1 | 0.0% → <0.1% |         0 → 1 | `ThreadJavaMain`      | `libjli.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

| Change |  Delta |      % |       Samples | Callee           | Location                  |
| -----: | -----: | -----: | ------------: | ---------------- | ------------------------- |
| -33.3% | -1,287 | 100.0% | 3,862 → 2,575 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `invoke(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f0012a0800`)

|  Change |  Delta |             % |   Samples | Callee                                                                                      | Location                                             |
| ------: | -----: | ------------: | --------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed | -1,892 | 100.0% → 0.0% | 1,892 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |
|     new |   +664 | 0.0% → 100.0% |   0 → 664 | `invokeSpecial(Object, Object, Object, Object)`                                             | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|  Change | Delta |              % |       Samples | Callee                                                   | Location       |
| ------: | ----: | -------------: | ------------: | -------------------------------------------------------- | -------------- |
|  -25.5% |  -881 | 99.8% → 100.0% | 3,451 → 2,570 | `CompileBroker::compiler_thread_loop`                    | `libjvm.dylib` |
| removed |    -4 |    0.1% → 0.0% |         4 → 0 | `ServiceThread::service_thread_entry`                    | `libjvm.dylib` |
| removed |    -2 |    0.1% → 0.0% |         2 → 0 | `MonitorDeflationThread::monitor_deflation_thread_entry` | `libjvm.dylib` |
| removed |    -2 |    0.1% → 0.0% |         2 → 0 | `JvmtiAgentThread::start_function_wrapper`               | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|  Change | Delta |           % |       Samples | Callee              | Location       |
| ------: | ----: | ----------: | ------------: | ------------------- | -------------- |
|  -32.1% |  -887 |       99.9% | 2,764 → 1,877 | `Compile::Compile`  | `libjvm.dylib` |
| removed |    -2 | 0.1% → 0.0% |         2 → 0 | `Compile::~Compile` | `libjvm.dylib` |
|     new |    +1 | 0.0% → 0.1% |         0 → 1 | `Chunk::next_chop`  | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

| Change | Delta |             % |     Samples | Callee                                   | Location       |
| -----: | ----: | ------------: | ----------: | ---------------------------------------- | -------------- |
| -29.8% |  -386 | 46.9% → 48.5% | 1,297 → 911 | `Compile::Code_Gen`                      | `libjvm.dylib` |
| -35.3% |  -386 | 39.6% → 37.8% | 1,095 → 709 | `Compile::Optimize`                      | `libjvm.dylib` |
| -28.0% |   -91 | 11.8% → 12.5% |   325 → 234 | `ParseGenerator::generate`               | `libjvm.dylib` |
| -59.4% |   -19 |   1.2% → 0.7% |     32 → 13 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |
| -80.0% |    -4 |   0.2% → 0.1% |       5 → 1 | `Compile::inline_string_calls`           | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|  Change | Delta |             % |       Samples | Callee                                     | Location       |
| ------: | ----: | ------------: | ------------: | ------------------------------------------ | -------------- |
|  -25.6% |  -867 | 98.3% → 98.2% | 3,391 → 2,524 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |
|  -25.4% |   -15 |          1.7% |       59 → 44 | `CompileQueue::get`                        | `libjvm.dylib` |
| removed |    -1 |  <0.1% → 0.0% |         1 → 0 | `TraceTime::TraceTime`                     | `libjvm.dylib` |
|     new |    +1 |  0.0% → <0.1% |         0 → 1 | `CompileTask::check_break_at_flags`        | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

| Change | Delta |             % |       Samples | Callee                          | Location       |
| -----: | ----: | ------------: | ------------: | ------------------------------- | -------------- |
| -32.1% |  -888 | 81.6% → 74.4% | 2,766 → 1,878 | `C2Compiler::compile_method`    | `libjvm.dylib` |
|  +4.6% |   +28 | 17.8% → 25.0% |     603 → 631 | `Compiler::compile_method`      | `libjvm.dylib` |
| -62.5% |    -5 |   0.2% → 0.1% |         8 → 3 | `ciEnv::ciEnv`                  | `libjvm.dylib` |
| -75.0% |    -3 |  0.1% → <0.1% |         4 → 1 | `ciEnv::~ciEnv`                 | `libjvm.dylib` |
| -33.3% |    -2 |          0.2% |         6 → 4 | `ciEnv::get_method_from_handle` | `libjvm.dylib` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

| Change | Delta |             % |   Samples | Callee                            | Location       |
| -----: | ----: | ------------: | --------: | --------------------------------- | -------------- |
| -29.5% |  -211 | 55.2% → 55.4% | 716 → 505 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
| -24.6% |   -58 | 18.2% → 19.5% | 236 → 178 | `Matcher::match`                  | `libjvm.dylib` |
| -31.8% |   -50 | 12.1% → 11.7% | 157 → 107 | `PhaseOutput::Output`             | `libjvm.dylib` |
| -32.4% |   -47 | 11.2% → 10.8% |  145 → 98 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |
| -55.6% |   -15 |   2.1% → 1.3% |   27 → 12 | `PhaseOutput::install_code`       | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

| Change | Delta |             % |   Samples | Callee                                 | Location       |
| -----: | ----: | ------------: | --------: | -------------------------------------- | -------------- |
| -44.2% |  -102 | 21.1% → 18.2% | 231 → 129 | `Compile::optimize_loops`              | `libjvm.dylib` |
| -33.8% |   -95 | 25.7% → 26.2% | 281 → 186 | `PhaseIdealLoop::optimize`             | `libjvm.dylib` |
| -37.0% |   -78 | 19.3% → 18.8% | 211 → 133 | `PhaseIterGVN::optimize`               | `libjvm.dylib` |
| -44.4% |   -24 |   4.9% → 4.2% |   54 → 30 | `PhaseCCP::PhaseCCP`                   | `libjvm.dylib` |
| -44.4% |   -20 |   4.1% → 3.5% |   45 → 25 | `PhaseMacroExpand::expand_macro_nodes` | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

| Change | Delta |             % |   Samples | Callee                                     | Location       |
| -----: | ----: | ------------: | --------: | ------------------------------------------ | -------------- |
| -31.7% |   -60 | 26.4% → 25.5% | 189 → 129 | `PhaseChaitin::Split`                      | `libjvm.dylib` |
| -38.6% |   -22 |   8.0% → 6.9% |   57 → 35 | `PhaseChaitin::gather_lrg_masks`           | `libjvm.dylib` |
| -33.3% |   -22 |   9.2% → 8.7% |   66 → 44 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |
| -74.1% |   -20 |   3.8% → 1.4% |    27 → 7 | `PhaseChaitin::build_ifg_virtual`          | `libjvm.dylib` |
| -57.1% |   -12 |   2.9% → 1.8% |    21 → 9 | `PhaseIFG::Compute_Effective_Degree`       | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

| Change | Delta |             % |   Samples | Callee                           | Location       |
| -----: | ----: | ------------: | --------: | -------------------------------- | -------------- |
| -39.4% |  -169 | 83.8% → 82.5% | 429 → 260 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |
| -34.1% |   -28 | 16.0% → 17.1% |   82 → 54 | `PhaseIterGVN::optimize`         | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|  Change | Delta |              % |   Samples | Callee                               | Location       |
| ------: | ----: | -------------: | --------: | ------------------------------------ | -------------- |
|  -39.3% |  -168 | 99.8% → 100.0% | 428 → 260 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |
| removed |    -1 |    0.2% → 0.0% |     1 → 0 | `BarrierSetC2::optimize_loops`       | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

| Change | Delta |             % |  Samples | Callee                                 | Location       |
| -----: | ----: | ------------: | -------: | -------------------------------------- | -------------- |
| -41.9% |   -57 | 31.8% → 30.4% | 136 → 79 | `PhaseIdealLoop::build_loop_late`      | `libjvm.dylib` |
| -41.3% |   -38 | 21.5% → 20.8% |  92 → 54 | `PhaseIdealLoop::split_if_with_blocks` | `libjvm.dylib` |
| -41.2% |   -21 | 11.9% → 11.5% |  51 → 30 | `PhaseIdealLoop::Dominators`           | `libjvm.dylib` |
| -26.8% |   -11 |  9.6% → 11.5% |  41 → 30 | `PhaseIdealLoop::build_loop_early`     | `libjvm.dylib` |
| -30.3% |   -10 |   7.7% → 8.8% |  33 → 23 | `PhaseIdealLoop::build_loop_tree`      | `libjvm.dylib` |

##### `PhaseIterGVN::optimize` (`libjvm.dylib`)

|  Change | Delta |           % |   Samples | Callee                                    | Location       |
| ------: | ----: | ----------: | --------: | ----------------------------------------- | -------------- |
|  -36.1% |  -130 |       95.0% | 360 → 230 | `PhaseIterGVN::transform_old`             | `libjvm.dylib` |
|  +75.0% |    +3 | 1.1% → 2.9% |     4 → 7 | `PhaseIterGVN::remove_globally_dead_node` | `libjvm.dylib` |
| removed |    -2 | 0.5% → 0.0% |     2 → 0 | `LoadNode::hash`                          | `libjvm.dylib` |
| removed |    -2 | 0.5% → 0.0% |     2 → 0 | `NodeHash::hash_find_insert`              | `libjvm.dylib` |
| removed |    -1 | 0.3% → 0.0% |     1 → 0 | `TypeTuple::singleton`                    | `libjvm.dylib` |

##### `PhaseIterGVN::transform_old` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                       | Location       |
| -----: | ----: | ------------: | ------: | ---------------------------- | -------------- |
| -32.4% |   -22 | 18.8% → 19.7% | 68 → 46 | `StoreNode::Ideal`           | `libjvm.dylib` |
| -56.3% |   -18 |   8.9% → 6.0% | 32 → 14 | `IfNode::Ideal`              | `libjvm.dylib` |
| -40.6% |   -13 |   8.9% → 8.2% | 32 → 19 | `PhiNode::Ideal`             | `libjvm.dylib` |
| -45.5% |   -10 |   6.1% → 5.2% | 22 → 12 | `LoadNode::Ideal`            | `libjvm.dylib` |
| -20.4% |   -10 | 13.6% → 16.7% | 49 → 39 | `PhaseIterGVN::subsume_node` | `libjvm.dylib` |

##### `Compile::optimize_loops` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Callee                     | Location       |
| -----: | ----: | -----: | --------: | -------------------------- | -------------- |
| -44.2% |  -102 | 100.0% | 231 → 129 | `PhaseIdealLoop::optimize` | `libjvm.dylib` |

##### `PhaseChaitin::Split` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                     | Location       |
| -----: | ----: | ------------: | ------: | -------------------------- | -------------- |
| -21.1% |    -8 | 20.1% → 23.3% | 38 → 30 | `MachNode::rematerialize`  | `libjvm.dylib` |
| -71.4% |    -5 |   3.7% → 1.6% |   7 → 2 | `Node::rematerialize`      | `libjvm.dylib` |
| -50.0% |    -3 |   3.2% → 2.3% |   6 → 3 | `PhaseChaitin::split_DEF`  | `libjvm.dylib` |
| -75.0% |    -3 |   2.1% → 0.8% |   4 → 1 | `PhaseChaitin::split_USE`  | `libjvm.dylib` |
| -66.7% |    -2 |   1.6% → 0.8% |   3 → 1 | `CProjNode::is_block_proj` | `libjvm.dylib` |

##### `Matcher::match` (`libjvm.dylib`)

|  Change | Delta |             % |   Samples | Callee                                        | Location       |
| ------: | ----: | ------------: | --------: | --------------------------------------------- | -------------- |
|  -27.8% |   -49 | 74.6% → 71.3% | 176 → 127 | `Matcher::xform`                              | `libjvm.dylib` |
|  -33.3% |   -10 | 12.7% → 11.2% |   30 → 20 | `Matcher::find_shared`                        | `libjvm.dylib` |
| removed |    -2 |   0.8% → 0.0% |     2 → 0 | `Matcher::match_tree`                         | `libjvm.dylib` |
|     new |    +2 |   0.0% → 1.1% |     0 → 2 | `Arena::destruct_contents`                    | `libjvm.dylib` |
|   -7.7% |    -1 |   5.5% → 6.7% |   13 → 12 | `Matcher::specialize_generic_vector_operands` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late` (`libjvm.dylib`)

|  Change | Delta |             % |  Samples | Callee                                      | Location       |
| ------: | ----: | ------------: | -------: | ------------------------------------------- | -------------- |
|  -44.0% |   -44 | 73.5% → 70.9% | 100 → 56 | `PhaseIdealLoop::build_loop_late_post_work` | `libjvm.dylib` |
| removed |    -2 |   1.5% → 0.0% |    2 → 0 | `BoolNode::Opcode`                          | `libjvm.dylib` |
| removed |    -2 |   1.5% → 0.0% |    2 → 0 | `RangeCheckNode::Opcode`                    | `libjvm.dylib` |
| removed |    -1 |   0.7% → 0.0% |    1 → 0 | `CallStaticJavaNode::uncommon_trap_request` | `libjvm.dylib` |
| removed |    -1 |   0.7% → 0.0% |    1 → 0 | `Node_Array::grow`                          | `libjvm.dylib` |

##### `PhaseOutput::Output` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                          | Location                   |
| ------: | ----: | ------------: | ------: | ------------------------------- | -------------------------- |
|  -45.7% |   -16 | 22.3% → 17.8% | 35 → 19 | `PhaseOutput::BuildOopMaps`     | `libjvm.dylib`             |
|  -37.8% |   -14 | 23.6% → 21.5% | 37 → 23 | `Scheduling::DoScheduling`      | `libjvm.dylib`             |
|  -17.5% |   -10 | 36.3% → 43.9% | 57 → 47 | `PhaseOutput::fill_buffer`      | `libjvm.dylib`             |
| removed |    -4 |   2.5% → 0.0% |   4 → 0 | `_platform_memmove`             | `libsystem_platform.dylib` |
|  -14.3% |    -2 |  8.9% → 11.2% | 14 → 12 | `PhaseOutput::shorten_branches` | `libjvm.dylib`             |

##### `Matcher::xform` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                | Location       |
| ------: | ----: | ------------: | ------: | --------------------- | -------------- |
|  -43.5% |   -30 | 39.2% → 30.7% | 69 → 39 | `Matcher::match_tree` | `libjvm.dylib` |
|  -17.6% |   -12 | 38.6% → 44.1% | 68 → 56 | `Arena::contains`     | `libjvm.dylib` |
| removed |    -5 |   2.8% → 0.0% |   5 → 0 | `Node::clone`         | `libjvm.dylib` |
|  -42.9% |    -3 |   4.0% → 3.1% |   7 → 4 | `Matcher::match_sfpt` | `libjvm.dylib` |
| removed |    -1 |   0.6% → 0.0% |   1 → 0 | `Matcher::Label_Root` | `libjvm.dylib` |

##### `PhaseCFG::do_global_code_motion` (`libjvm.dylib`)

|  Change | Delta |             % |  Samples | Callee                               | Location                   |
| ------: | ----: | ------------: | -------: | ------------------------------------ | -------------------------- |
|  -29.6% |   -40 | 93.1% → 96.9% | 135 → 95 | `PhaseCFG::global_code_motion`       | `libjvm.dylib`             |
|  -83.3% |    -5 |   4.1% → 1.0% |    6 → 1 | `PhaseCFG::build_dominator_tree`     | `libjvm.dylib`             |
|  -66.7% |    -2 |   2.1% → 1.0% |    3 → 1 | `PhaseCFG::estimate_block_frequency` | `libjvm.dylib`             |
| removed |    -1 |   0.7% → 0.0% |    1 → 0 | `tlv_get_addr`                       | `libdyld.dylib`            |
|     new |    +1 |   0.0% → 1.0% |    0 → 1 | `_platform_memset`                   | `libsystem_platform.dylib` |

##### `MemNode::all_controls_dominate` (`libjvm.dylib`)

|  Change | Delta |             % |  Samples | Callee                   | Location       |
| ------: | ----: | ------------: | -------: | ------------------------ | -------------- |
|  -42.9% |   -45 | 97.2% → 96.8% | 105 → 60 | `Node::dominates`        | `libjvm.dylib` |
|     new |    +2 |   0.0% → 3.2% |    0 → 2 | `Node_List::Node_List`   | `libjvm.dylib` |
| removed |    -1 |   0.9% → 0.0% |    1 → 0 | `MultiNode::is_CFG`      | `libjvm.dylib` |
| removed |    -1 |   0.9% → 0.0% |    1 → 0 | `Unique_Node_List::push` | `libjvm.dylib` |

##### `WorkerThread::run` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee                            | Location                 |
| ------: | ----: | -----------: | ------: | --------------------------------- | ------------------------ |
| removed |  -151 | 40.1% → 0.0% | 151 → 0 | `G1EvacuateRegionsBaseTask::work` | `libjvm.dylib`           |
| removed |   -89 | 23.6% → 0.0% |  89 → 0 | `G1CMConcurrentMarkingTask::work` | `libjvm.dylib`           |
| removed |   -68 | 18.0% → 0.0% |  68 → 0 | `G1RebuildRSAndScrubTask::work`   | `libjvm.dylib`           |
| removed |   -18 |  4.8% → 0.0% |  18 → 0 | `KlassCleaningTask::work`         | `libjvm.dylib`           |
| removed |   -17 |  4.5% → 0.0% |  17 → 0 | `semaphore_wait_trap`             | `libsystem_kernel.dylib` |

##### `G1EvacuateRegionsBaseTask::work` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee                                         | Location       |
| ------: | ----: | -----------: | ------: | ---------------------------------------------- | -------------- |
| removed |   -72 | 47.7% → 0.0% |  72 → 0 | `G1EvacuateRegionsTask::scan_roots`            | `libjvm.dylib` |
| removed |   -55 | 36.4% → 0.0% |  55 → 0 | `G1EvacuateRegionsTask::evacuate_live_objects` | `libjvm.dylib` |
| removed |   -24 | 15.9% → 0.0% |  24 → 0 | `G1RemSet::scan_collection_set_code_roots`     | `libjvm.dylib` |

##### `G1ParScanThreadState::trim_queue_to_threshold` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee                                            | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------------------------- | -------------- |
| removed |   -64 | 66.0% → 0.0% |  64 → 0 | `G1ParScanThreadState::do_copy_to_survivor_space` | `libjvm.dylib` |
| removed |    -3 |  3.1% → 0.0% |   3 → 0 | `fwd_copy_drain`                                  | `libjvm.dylib` |
| removed |    -2 |  2.1% → 0.0% |   2 → 0 | `_Copy_disjoint_words`                            | `libjvm.dylib` |
| removed |    -2 |  2.1% → 0.0% |   2 → 0 | `G1ParScanThreadState::do_partial_array`          | `libjvm.dylib` |
| removed |    -2 |  2.1% → 0.0% |   2 → 0 | `fwd_copy_aligned`                                | `libjvm.dylib` |

##### `G1CMTask::do_marking_step` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee                                         | Location       |
| ------: | ----: | -----------: | ------: | ---------------------------------------------- | -------------- |
| removed |   -73 | 76.8% → 0.0% |  73 → 0 | `G1CMBitMap::iterate`                          | `libjvm.dylib` |
| removed |   -15 | 15.8% → 0.0% |  15 → 0 | `G1CMTask::drain_local_queue`                  | `libjvm.dylib` |
| removed |    -6 |  6.3% → 0.0% |   6 → 0 | `TaskTerminator::offer_termination`            | `libjvm.dylib` |
| removed |    -1 |  1.1% → 0.0% |   1 → 0 | `void G1CMTask::process_grey_task_entry<true>` | `libjvm.dylib` |

##### `Parse::do_one_block` (`libjvm.dylib`)

| Change | Delta |             % |   Samples | Callee                      | Location       |
| -----: | ----: | ------------: | --------: | --------------------------- | -------------- |
| -26.4% |   -92 | 95.3% → 94.5% | 348 → 256 | `Parse::do_call`            | `libjvm.dylib` |
| -36.4% |   -20 | 15.1% → 12.9% |   55 → 35 | `Parse::do_field_access`    | `libjvm.dylib` |
| -47.8% |   -11 |   6.3% → 4.4% |   23 → 12 | `Parse::do_one_bytecode`    | `libjvm.dylib` |
| -40.9% |    -9 |   6.0% → 4.8% |   22 → 13 | `Parse::do_checkcast`       | `libjvm.dylib` |
| -61.5% |    -8 |   3.6% → 1.8% |    13 → 5 | `GraphKit::access_store_at` | `libjvm.dylib` |

##### `Parse::do_all_blocks` (`libjvm.dylib`)

|  Change | Delta |             % |   Samples | Callee                           | Location       |
| ------: | ----: | ------------: | --------: | -------------------------------- | -------------- |
|  -25.8% |   -94 | 99.7% → 99.3% | 365 → 271 | `Parse::do_one_block`            | `libjvm.dylib` |
|  -66.7% |    -4 |   1.6% → 0.7% |     6 → 2 | `Parse::merge_common`            | `libjvm.dylib` |
| removed |    -1 |   0.3% → 0.0% |     1 → 0 | `GraphKit::add_parse_predicates` | `libjvm.dylib` |
| removed |    -1 |   0.3% → 0.0% |     1 → 0 | `GraphKit::clone_map`            | `libjvm.dylib` |
| removed |    -1 |   0.3% → 0.0% |     1 → 0 | `Parse::do_call`                 | `libjvm.dylib` |

##### `Parse::do_call` (`libjvm.dylib`)

|  Change | Delta |             % |   Samples | Callee                                             | Location       |
| ------: | ----: | ------------: | --------: | -------------------------------------------------- | -------------- |
|  -26.0% |   -75 | 83.0% → 83.6% | 289 → 214 | `ParseGenerator::generate`                         | `libjvm.dylib` |
|  -25.0% |   -36 | 41.4% → 42.2% | 144 → 108 | `PredictedCallGenerator::generate`                 | `libjvm.dylib` |
|  -26.8% |   -15 | 16.1% → 16.0% |   56 → 41 | `Compile::call_generator`                          | `libjvm.dylib` |
| removed |    -6 |   1.7% → 0.0% |     6 → 0 | `GraphKit::record_profiled_return_for_speculation` | `libjvm.dylib` |
|  +35.7% |    +5 |   4.0% → 7.4% |   14 → 19 | `LibraryIntrinsic::generate`                       | `libjvm.dylib` |

##### `Parse::Parse` (`libjvm.dylib`)

| Change | Delta |             % |   Samples | Callee                    | Location       |
| -----: | ----: | ------------: | --------: | ------------------------- | -------------- |
| -25.4% |   -93 | 99.2% → 98.6% | 366 → 273 | `Parse::do_all_blocks`    | `libjvm.dylib` |
| -46.2% |    -6 |   3.5% → 2.5% |    13 → 7 | `Parse::do_exits`         | `libjvm.dylib` |
| -44.4% |    -4 |   2.4% → 1.8% |     9 → 5 | `Parse::build_exits`      | `libjvm.dylib` |
| -75.0% |    -3 |   1.1% → 0.4% |     4 → 1 | `GraphKit::set_map_clone` | `libjvm.dylib` |
| +75.0% |    +3 |   1.1% → 2.5% |     4 → 7 | `ciMethod::method_data`   | `libjvm.dylib` |

##### `ParseGenerator::generate` (`libjvm.dylib`)

|  Change | Delta |           % |   Samples | Callee                                    | Location       |
| ------: | ----: | ----------: | --------: | ----------------------------------------- | -------------- |
|  -24.9% |   -92 |      100.0% | 369 → 277 | `Parse::Parse`                            | `libjvm.dylib` |
| removed |    -1 | 0.3% → 0.0% |     1 → 0 | `PhaseGVN::transform_no_reclaim`          | `libjvm.dylib` |
|     new |    +1 | 0.0% → 0.4% |     0 → 1 | `Dependencies::assert_evol_method`        | `libjvm.dylib` |
|     new |    +1 | 0.0% → 0.4% |     0 → 1 | `GraphKit::transfer_exceptions_into_jvms` | `libjvm.dylib` |

##### `G1CMConcurrentMarkingTask::work` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                      | Location       |
| ------: | ----: | ------------: | ------: | --------------------------- | -------------- |
| removed |   -89 | 100.0% → 0.0% |  89 → 0 | `G1CMTask::do_marking_step` | `libjvm.dylib` |

##### `void G1CMTask::process_grey_task_entry<true>` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee                                                                                         | Location       |
| ------: | ----: | -----------: | ------: | ---------------------------------------------------------------------------------------------- | -------------- |
| removed |   -46 | 56.1% → 0.0% |  46 → 0 | `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` | `libjvm.dylib` |
| removed |   -13 | 15.9% → 0.0% |  13 → 0 | `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<ObjArrayKlass, narrowOop>` | `libjvm.dylib` |
| removed |    -6 |  7.3% → 0.0% |   6 → 0 | `void InstanceRefKlass::oop_oop_iterate<narrowOop, G1CMOopClosure>`                            | `libjvm.dylib` |
| removed |    -3 |  3.7% → 0.0% |   3 → 0 | `void InstanceMirrorKlass::oop_oop_iterate<narrowOop, G1CMOopClosure>`                         | `libjvm.dylib` |
| removed |    -2 |  2.4% → 0.0% |   2 → 0 | `G1CMTask::make_reference_grey`                                                                | `libjvm.dylib` |

##### `G1CMBitMap::iterate` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee                                         | Location                  |
| ------: | ----: | -----------: | ------: | ---------------------------------------------- | ------------------------- |
| removed |   -44 | 60.3% → 0.0% |  44 → 0 | `void G1CMTask::process_grey_task_entry<true>` | `libjvm.dylib`            |
| removed |   -26 | 35.6% → 0.0% |  26 → 0 | `G1CMTask::drain_local_queue`                  | `libjvm.dylib`            |
| removed |    -1 |  1.4% → 0.0% |   1 → 0 | `G1CMTask::drain_global_stack`                 | `libjvm.dylib`            |
| removed |    -1 |  1.4% → 0.0% |   1 → 0 | `thread_chkstk_darwin`                         | `libsystem_pthread.dylib` |

##### `G1EvacuateRegionsTask::scan_roots` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee                            | Location       |
| ------: | ----: | -----------: | ------: | --------------------------------- | -------------- |
| removed |   -60 | 83.3% → 0.0% |  60 → 0 | `G1RemSet::scan_heap_roots`       | `libjvm.dylib` |
| removed |   -12 | 16.7% → 0.0% |  12 → 0 | `G1RootProcessor::evacuate_roots` | `libjvm.dylib` |

##### `HeapRegionManager::par_iterate` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee                                                                             | Location       |
| ------: | ----: | -----------: | ------: | ---------------------------------------------------------------------------------- | -------------- |
| removed |   -68 | 97.1% → 0.0% |  68 → 0 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_region` | `libjvm.dylib` |
| removed |    -2 |  2.9% → 0.0% |   2 → 0 | `G1BulkUnregisterNMethodTask::UnregisterNMethodsHeapRegionClosure::do_heap_region` | `libjvm.dylib` |

##### `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_region` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee                                                                            | Location       |
| ------: | ----: | -----------: | ------: | --------------------------------------------------------------------------------- | -------------- |
| removed |   -65 | 95.6% → 0.0% |  65 → 0 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_to_pb` | `libjvm.dylib` |
| removed |    -3 |  4.4% → 0.0% |   3 → 0 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object`          | `libjvm.dylib` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f0010abc00`)

|  Change | Delta |              % |       Samples | Callee                             | Location                                                                                                |
| ------: | ----: | -------------: | ------------: | ---------------------------------- | ------------------------------------------------------------------------------------------------------- |
|  -35.1% |  -873 | 100.0% → 99.3% | 2,484 → 1,611 | `reinvoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010aa800 → java.lang.invoke.LambdaForm$MH.0x000000f0010aa800` |
|  -94.5% |  -519 |   22.1% → 1.8% |      549 → 30 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`                                                        |
|     new |    +2 |    0.0% → 0.1% |         0 → 2 | `invoke(Object, Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x000000f0010ab000`                                                     |
| removed |    -1 |   <0.1% → 0.0% |         1 → 0 | `invoke(Object, Object)`           | `java.lang.invoke.LambdaForm$MH.0x000000700102ac00`                                                     |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f00129b400`)

|  Change | Delta |            % | Samples | Callee                                             | Location                                            |
| ------: | ----: | -----------: | ------: | -------------------------------------------------- | --------------------------------------------------- |
| removed |  -513 | 67.1% → 0.0% | 513 → 0 | `delegate(Object, Object, Object, Object)`         | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
| removed |  -254 | 33.2% → 0.0% | 254 → 0 | `reinvoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000007001189000` |
|     new |  +218 | 0.0% → 80.1% | 0 → 218 | `reinvoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f001299c00` |
|     new |   +54 | 0.0% → 19.9% |  0 → 54 | `delegate(Object, Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
| removed |    -1 |  0.1% → 0.0% |   1 → 0 | `invoke(Object, Object, Object, Object)`           | `java.lang.invoke.LambdaForm$MH.0x0000007001189c00` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f0010c7000`)

|  Change | Delta |            % | Samples | Callee                                    | Location                                             |
| ------: | ----: | -----------: | ------: | ----------------------------------------- | ---------------------------------------------------- |
| removed |  -548 | 99.8% → 0.0% | 548 → 0 | `invokeSpecial(Object, Object, Object)`   | `java.lang.invoke.DirectMethodHandle$Holder`         |
|     new |  +161 | 0.0% → 86.6% | 0 → 161 | `invokeSpecial(Object, Object, Object)`   | `java.lang.invoke.LambdaForm$DMH.0x000000f001084000` |
|     new |   +37 | 0.0% → 19.9% |  0 → 37 | `invokeInterface(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000f001124800` |
|     new |   +21 | 0.0% → 11.3% |  0 → 21 | `invokeVirtual(Object, Object, Object)`   | `java.lang.invoke.DirectMethodHandle$Holder`         |
| removed |    -2 |  0.4% → 0.0% |   2 → 0 | `invokeVirtual(Object, Object, Object)`   | `java.lang.invoke.LambdaForm$DMH.0x0000007001095800` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f0011e1000`)

|  Change | Delta |             % | Samples | Callee                                    | Location                                             |
| ------: | ----: | ------------: | ------: | ----------------------------------------- | ---------------------------------------------------- |
| removed |  -292 |  99.7% → 0.0% | 292 → 0 | `invokeVirtual(Object, Object, Object)`   | `java.lang.invoke.LambdaForm$DMH.0x0000007001097c00` |
|     new |   +18 | 0.0% → 100.0% |  0 → 18 | `invokeSpecial(Object, Object, Object)`   | `java.lang.invoke.DirectMethodHandle$Holder`         |
| removed |    -1 |   0.3% → 0.0% |   1 → 0 | `invokeInterface(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### `invokeVirtual(Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000f001095800`)

|  Change | Delta |            % | Samples | Callee                           | Location                                                          |
| ------: | ----: | -----------: | ------: | -------------------------------- | ----------------------------------------------------------------- |
| removed |  -288 | 91.4% → 0.0% | 288 → 0 | `isRuleSuppressed(Rule)`         | `org.codenarc.analyzer.SuppressionAnalyzer`                       |
|     new |    +9 | 0.0% → 20.9% |   0 → 9 | `sourceLineOrEmpty(ASTNode)`     | `org.codenarc.rule.formatting.AbstractSpaceAroundBraceAstVisitor` |
| removed |    -6 |  1.9% → 0.0% |   6 → 0 | `matches(String)`                | `org.codenarc.util.WildcardPattern`                               |
|     new |    +6 | 0.0% → 14.0% |   0 → 6 | `newSchema(Source)`              | `javax.xml.validation.SchemaFactory`                              |
|     new |    +6 | 0.0% → 14.0% |   0 → 6 | `lastSourceLineOrEmpty(ASTNode)` | `org.codenarc.rule.formatting.AbstractSpaceAroundBraceAstVisitor` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f001181400`)

|  Change | Delta |             % |  Samples | Callee                                  | Location                                             |
| ------: | ----: | ------------: | -------: | --------------------------------------- | ---------------------------------------------------- |
|  -94.7% |  -285 | 99.7% → 48.5% | 301 → 16 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |
|     new |   +17 |  0.0% → 51.5% |   0 → 17 | `invokeVirtual(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000f001095800` |
| removed |    -1 |   0.3% → 0.0% |    1 → 0 | `invoke(Object, Object)`                | `java.lang.invoke.LambdaForm$MH.0x000000700102ac00`  |

##### `init()` (`org.codenarc.source.AbstractSourceCode`)

|  Change | Delta |             % |   Samples | Callee                                                           | Location                                 |
| ------: | ----: | ------------: | --------: | ---------------------------------------------------------------- | ---------------------------------------- |
|   -6.5% |   -16 | 86.3% → 87.7% | 245 → 229 | `linkToCallSite(Object, Object, Object)`                         | `java.lang.invoke.Invokers$Holder`       |
|  -35.7% |    -5 |   4.9% → 3.4% |    14 → 9 | `linkToCallSite(Object, Object)`                                 | `java.lang.invoke.Invokers$Holder`       |
|  -15.0% |    -3 |   7.0% → 6.5% |   20 → 17 | `linkToCallSite(Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`       |
| +100.0% |    +2 |   0.7% → 1.5% |     2 → 4 | `linkToCallSite(Object, Object, Object, Object)`                 | `java.lang.invoke.Invokers$Holder`       |
| removed |    -1 |   0.4% → 0.0% |     1 → 0 | `$get$$class$org$codenarc$source$ExpressionCollector()`          | `org.codenarc.source.AbstractSourceCode` |

##### `getAst()` (`org.codenarc.source.AbstractSourceCode`)

| Change | Delta |      % |   Samples | Callee                           | Location                           |
| -----: | ----: | -----: | --------: | -------------------------------- | ---------------------------------- |
|  -8.0% |   -23 | 100.0% | 286 → 263 | `linkToCallSite(Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`)

| Change | Delta |              % |   Samples | Callee                                    | Location                                    |
| -----: | ----: | -------------: | --------: | ----------------------------------------- | ------------------------------------------- |
|  -7.4% |   -21 | 100.0% → 98.9% | 282 → 261 | `getAst()`                                | `org.codenarc.source.AbstractSourceCode`    |
|    new |    +2 |    0.0% → 0.8% |     0 → 2 | `getSuppressionsByLineNumber(ModuleNode)` | `org.codenarc.analyzer.SuppressionAnalyzer` |
|    new |    +1 |    0.0% → 0.4% |     0 → 1 | `getSuppressedRuleNames(Collection)`      | `org.codenarc.analyzer.SuppressionAnalyzer` |

##### `applyVisitor(AstVisitor, SourceCode)` (`org.codenarc.rule.AbstractSharedAstVisitorRule`)

| Change | Delta |             % | Samples | Callee                             | Location                                          |
| -----: | ----: | ------------: | ------: | ---------------------------------- | ------------------------------------------------- |
| -27.4% |   -17 | 96.9% → 97.8% | 62 → 45 | `visitClass(ClassNode)`            | `org.codenarc.rule.AbstractAstVisitor`            |
| -50.0% |    -1 |   3.1% → 2.2% |   2 → 1 | `shouldApplyThisRuleTo(ClassNode)` | `org.codenarc.rule.unused.UnusedPrivateFieldRule` |

##### `isRuleSuppressed(Rule)` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|  Change | Delta |             % |   Samples | Callee             | Location                                                   |
| ------: | ----: | ------------: | --------: | ------------------ | ---------------------------------------------------------- |
|   -6.4% |   -18 | 97.9% → 97.1% | 282 → 264 | `init()`           | `org.codenarc.analyzer.SuppressionAnalyzer`                |
| removed |    -1 |   0.3% → 0.0% |     1 → 0 | `getName()`        | `org.codenarc.rule.convention.MethodParameterTypeRequired` |
| removed |    -1 |   0.3% → 0.0% |     1 → 0 | `getName()`        | `org.codenarc.rule.formatting.SpaceAfterCatchRule`         |
| +100.0% |    +1 |   0.3% → 0.7% |     1 → 2 | `contains(Object)` | `java.util.Collections$SynchronizedCollection`             |
| removed |    -1 |   0.3% → 0.0% |     1 → 0 | `getName()`        | `org.codenarc.rule.basic.MultipleUnaryOperatorsRule`       |

##### `visitMethodCallExpression(MethodCallExpression)` (`org.codenarc.rule.unused.UnusedPrivateMethodAstVisitor`)

|  Change | Delta |             % | Samples | Callee                                                        | Location                                            |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------- | --------------------------------------------------- |
|  -78.6% |   -11 | 48.3% → 17.6% |  14 → 3 | `linkToCallSite(Object, Object, Object)`                      | `java.lang.invoke.Invokers$Holder`                  |
|  -33.3% |    -6 | 62.1% → 70.6% | 18 → 12 | `invokeMethodOnSuperN(Class, GroovyObject, String, Object[])` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |
|  -50.0% |    -1 |   6.9% → 5.9% |   2 → 1 | `linkToCallSite(Object, Object)`                              | `java.lang.invoke.Invokers$Holder`                  |
| removed |    -1 |   3.4% → 0.0% |   1 → 0 | `<init>(Object)`                                              | `groovy.lang.Reference`                             |
|     new |    +1 |   0.0% → 5.9% |   0 → 1 | `linkToCallSite(Object, Object, Object, Object)`              | `java.lang.invoke.Invokers$Holder`                  |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractSharedAstVisitorRule`)

|  Change | Delta |             % | Samples | Callee                                  | Location                                           |
| ------: | ----: | ------------: | ------: | --------------------------------------- | -------------------------------------------------- |
|  -28.1% |   -18 | 87.7% → 74.2% | 64 → 46 | `applyVisitor(AstVisitor, SourceCode)`  | `org.codenarc.rule.AbstractSharedAstVisitorRule`   |
| +300.0% |    +3 |   1.4% → 6.5% |   1 → 4 | `getAstVisitor(SourceCode)`             | `org.codenarc.rule.unused.UnusedPrivateMethodRule` |
|  +28.6% |    +2 |  9.6% → 14.5% |   7 → 9 | `getAstVisitor(SourceCode)`             | `org.codenarc.rule.unused.UnusedPrivateFieldRule`  |
| +100.0% |    +1 |   1.4% → 3.2% |   1 → 2 | `getViolations(AstVisitor, SourceCode)` | `org.codenarc.rule.unused.UnusedPrivateMethodRule` |
|     new |    +1 |   0.0% → 1.6% |   0 → 1 | `isValid()`                             | `org.codenarc.source.AbstractSourceCode`           |

##### `visitConstantExpression(ConstantExpression)` (`org.codenarc.rule.unnecessary.UnnecessaryGStringAstVisitor`)

|  Change | Delta |             % | Samples | Callee                                           | Location                                            |
| ------: | ----: | ------------: | ------: | ------------------------------------------------ | --------------------------------------------------- |
|  -38.9% |    -7 | 66.7% → 64.7% | 18 → 11 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
|  -33.3% |    -2 | 22.2% → 23.5% |   6 → 4 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                  |
|  -50.0% |    -1 |   7.4% → 5.9% |   2 → 1 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.Invokers$Holder`                  |
| removed |    -1 |   3.7% → 0.0% |   1 → 0 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070010c9000` |

##### `doCall(Object)` (`org.codenarc.rule.unused.UnusedPrivateMethodAstVisitor$_visitMethodCallExpression_closure2`)

|  Change | Delta |              % | Samples | Callee                                           | Location                           |
| ------: | ----: | -------------: | ------: | ------------------------------------------------ | ---------------------------------- |
|  -66.7% |    -6 | 69.2% → 100.0% |   9 → 3 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
| removed |    -4 |   30.8% → 0.0% |   4 → 0 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.Invokers$Holder` |

##### `shouldApplyThisRuleTo(SourceCode)` (`org.codenarc.rule.AbstractRule`)

|  Change | Delta |             % | Samples | Callee                | Location                                 |
| ------: | ----: | ------------: | ------: | --------------------- | ---------------------------------------- |
|  -85.7% |    -6 | 63.6% → 50.0% |   7 → 1 | `matches(SourceCode)` | `org.codenarc.source.SourceCodeCriteria` |
|  -50.0% |    -1 | 18.2% → 50.0% |   2 → 1 | `<init>()`            | `org.codenarc.source.SourceCodeCriteria` |
| removed |    -1 |   9.1% → 0.0% |   1 → 0 | `_new_instance_Java`  | `<unknown>`                              |

##### `doCall(Object)` (`org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor$_visitClassComplete_closure1`)

| Change | Delta |             % | Samples | Callee                                           | Location                           |
| -----: | ----: | ------------: | ------: | ------------------------------------------------ | ---------------------------------- |
| -25.8% |    -8 | 88.6% → 88.5% | 31 → 23 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
| -33.3% |    -1 |   8.6% → 7.7% |   3 → 2 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.Invokers$Holder` |

##### `visitClassComplete(ClassNode)` (`org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor`)

| Change | Delta |      % | Samples | Callee                                   | Location                           |
| -----: | ----: | -----: | ------: | ---------------------------------------- | ---------------------------------- |
| -25.7% |    -9 | 100.0% | 35 → 26 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `isMethodCallOnObject(Expression, String)` (`org.codenarc.util.AstUtil`)

|  Change | Delta |             % | Samples | Callee                     | Location           |
| ------: | ----: | ------------: | ------: | -------------------------- | ------------------ |
|  -58.3% |    -7 | 80.0% → 83.3% |  12 → 5 | `matches(String)`          | `java.lang.String` |
| removed |    -1 |   6.7% → 0.0% |   1 → 0 | `resolve_opt_virtual_call` | `<unknown>`        |

##### `visitVariableExpression(VariableExpression)` (`org.codenarc.rule.unused.UnusedPrivateMethodAstVisitor`)

| Change | Delta |             % | Samples | Callee                                          | Location                                            |
| -----: | ----: | ------------: | ------: | ----------------------------------------------- | --------------------------------------------------- |
| -45.5% |    -5 | 45.8% → 37.5% |  11 → 6 | `linkToCallSite(Object, Object, Object)`        | `java.lang.invoke.Invokers$Holder`                  |
| -66.7% |    -2 |  12.5% → 6.3% |   3 → 1 | `linkToCallSite(Object, int, Object)`           | `java.lang.invoke.Invokers$Holder`                  |
| -11.1% |    -1 | 37.5% → 50.0% |   9 → 8 | `linkToCallSite(Object, Object)`                | `java.lang.invoke.Invokers$Holder`                  |
|    new |    +1 |   0.0% → 6.3% |   0 → 1 | `createRange(Object, Object, boolean, boolean)` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |

##### `calculateFunctions(Collection)` (`org.gmetrics.metric.abc.result.AggregateAbcMetricResult`)

|  Change | Delta |             % | Samples | Callee                              | Location                                                  |
| ------: | ----: | ------------: | ------: | ----------------------------------- | --------------------------------------------------------- |
|  -80.0% |    -4 | 50.0% → 33.3% |   5 → 1 | `callCurrent(GroovyObject, Object)` | `org.codehaus.groovy.runtime.callsite.AbstractCallSite`   |
|  -50.0% |    -2 | 40.0% → 66.7% |   4 → 2 | `getAverageAbcVector()`             | `org.gmetrics.metric.abc.result.AggregateAbcMetricResult` |
| removed |    -1 |  10.0% → 0.0% |   1 → 0 | `call(Object)`                      | `org.gmetrics.metric.abc.AbcVector$getMagnitude`          |

##### `<init>(Metric, MetricLevel, Collection, Integer)` (`org.gmetrics.metric.abc.result.AggregateAbcMetricResult`)

| Change | Delta |      % | Samples | Callee                              | Location                                                |
| -----: | ----: | -----: | ------: | ----------------------------------- | ------------------------------------------------------- |
| -70.0% |    -7 | 100.0% |  10 → 3 | `callCurrent(GroovyObject, Object)` | `org.codehaus.groovy.runtime.callsite.AbstractCallSite` |

##### `visitExpressionStatement(ExpressionStatement)` (`org.codenarc.rule.groovyism.UseCollectNestedAstVisitor`)

| Change | Delta |             % | Samples | Callee                                                        | Location                                            |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------- | --------------------------------------------------- |
| -45.5% |    -5 | 52.4% → 42.9% |  11 → 6 | `linkToCallSite(Object, Object, Object)`                      | `java.lang.invoke.Invokers$Holder`                  |
| -30.0% |    -3 | 47.6% → 50.0% |  10 → 7 | `invokeMethodOnSuperN(Class, GroovyObject, String, Object[])` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |
|    new |    +1 |   0.0% → 7.1% |   0 → 1 | `linkToCallSite(Object, Object)`                              | `java.lang.invoke.Invokers$Holder`                  |

##### `isMethodCall(MethodCallExpression, String)` (`org.codenarc.rule.unused.UnusedPrivateMethodAstVisitor`)

| Change | Delta |              % | Samples | Callee                                           | Location                           |
| -----: | ----: | -------------: | ------: | ------------------------------------------------ | ---------------------------------- |
| -88.9% |    -8 | 100.0% → 50.0% |   9 → 1 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|    new |    +1 |   0.0% → 50.0% |   0 → 1 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.Invokers$Holder` |

##### `doCall(List)` (`org.codenarc.source.AbstractSourceCode$_removeGrabTransformation_closure1`)

| Change | Delta |      % | Samples | Callee                                   | Location                           |
| -----: | ----: | -----: | ------: | ---------------------------------------- | ---------------------------------- |
| -40.0% |    -6 | 100.0% |  15 → 9 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `removeGrabTransformation(CompilationUnit)` (`org.codenarc.source.AbstractSourceCode`)

|  Change | Delta |              % | Samples | Callee                                   | Location                                                                    |
| ------: | ----: | -------------: | ------: | ---------------------------------------- | --------------------------------------------------------------------------- |
|  -33.3% |    -5 | 93.8% → 100.0% | 15 → 10 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                                          |
| removed |    -1 |    6.3% → 0.0% |   1 → 0 | `<init>(Object, Object)`                 | `org.codenarc.source.AbstractSourceCode$_removeGrabTransformation_closure1` |

# Allocated heap profile diff

Allocated 11.8 GiB → 11.9 GiB (+156.284 MiB, +1.3%) over 24,098 samples → 24,409 samples (512 KiB per sample).

| Category         | Change |        Delta |     % |                Size |         Samples |
| ---------------- | -----: | -----------: | ----: | ------------------: | --------------: |
| Standard library |  +1.3% | +155.784 MiB | 99.1% | 11.7 GiB → 11.8 GiB | 23,870 → 24,180 |
| Ours             |  +0.4% | +511.999 KiB |  0.9% |             114 MiB |       228 → 229 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

##### Standard library

| Change |       Delta |           % |                Size |       Samples | Function                                                       | Location                                          |
| -----: | ----------: | ----------: | ------------------: | ------------: | -------------------------------------------------------------- | ------------------------------------------------- |
|  +6.7% | +51.499 MiB | 6.4% → 6.7% |   768 MiB → 820 MiB | 1,537 → 1,640 | `makeImpl(Class, Class[], boolean)`                            | `java.lang.invoke.MethodType`                     |
| +15.6% | +47.499 MiB | 2.5% → 2.9% |   304 MiB → 351 MiB |     608 → 703 | `newArray(Class, int)`                                         | `java.lang.reflect.Array`                         |
|  +7.1% | +39.499 MiB | 4.6% → 4.9% |   554 MiB → 593 MiB | 1,108 → 1,187 | `fillInStackTrace(int)`                                        | `java.lang.Throwable`                             |
|  +8.3% | +28.999 MiB | 2.9% → 3.1% |   349 MiB → 378 MiB |     698 → 756 | `newInstance(Class, int)`                                      | `java.lang.reflect.Array`                         |
| +23.8% | +25.499 MiB | 0.9% → 1.1% |   107 MiB → 132 MiB |     214 → 265 | `resize()`                                                     | `java.util.HashMap`                               |
| +32.1% | +25.499 MiB | 0.7% → 0.9% |  79.5 MiB → 105 MiB |     159 → 210 | `newHashMap(int)`                                              | `java.util.HashMap`                               |
|  +7.5% | +20.499 MiB | 2.3% → 2.4% |   273 MiB → 293 MiB |     546 → 587 | `make(MethodType, LambdaForm, Object, Object, Object, Object)` | `java.lang.invoke.BoundMethodHandle$Species_LLLL` |
|  +5.4% | +14.499 MiB | 2.2% → 2.3% |   270 MiB → 285 MiB |     541 → 570 | `stream(Spliterator, boolean)`                                 | `java.util.stream.StreamSupport`                  |
|  +6.2% | +12.999 MiB | 1.7% → 1.8% |   210 MiB → 223 MiB |     420 → 446 | `insertParameterTypes(int, Class[])`                           | `java.lang.invoke.MethodType`                     |
|  +9.3% | +10.999 MiB | 1.0% → 1.1% |   118 MiB → 129 MiB |     237 → 259 | `of(byte, int)`                                                | `java.lang.invoke.LambdaFormEditor$TransformKey`  |
|  +2.5% | +10.499 MiB |        3.5% |   418 MiB → 429 MiB |     837 → 858 | `makeBlockInliningWrapper(MethodHandle)`                       | `java.lang.invoke.MethodHandleImpl`               |
| +25.0% | +10.499 MiB | 0.3% → 0.4% |   42 MiB → 52.5 MiB |      84 → 105 | `unreflect(Method)`                                            | `java.lang.invoke.MethodHandles$Lookup`           |
|  +7.1% | +10.499 MiB | 1.2% → 1.3% |   148 MiB → 158 MiB |     296 → 317 | `parameterArray()`                                             | `java.lang.invoke.MethodType`                     |
|  +3.6% |  +9.999 MiB | 2.3% → 2.4% |   278 MiB → 288 MiB |     556 → 576 | `copyOfRange(Object[], int, int)`                              | `java.util.Arrays`                                |
| +21.3% |  +9.499 MiB |        0.4% |   44.5 MiB → 54 MiB |      89 → 108 | `newNode(int, Object, Object, HashMap$Node)`                   | `java.util.LinkedHashMap`                         |
| +18.1% |  +9.499 MiB | 0.4% → 0.5% |   52.5 MiB → 62 MiB |     105 → 124 | `matcher(CharSequence)`                                        | `java.util.regex.Pattern`                         |
| +20.0% |  +8.999 MiB |        0.4% |     45 MiB → 54 MiB |      90 → 108 | `compile(String)`                                              | `java.util.regex.Pattern`                         |
| +20.7% |  +8.999 MiB |        0.4% | 43.5 MiB → 52.5 MiB |      87 → 105 | `RemoveQEQuoting()`                                            | `java.util.regex.Pattern`                         |
| +26.1% |  +8.999 MiB | 0.3% → 0.4% | 34.5 MiB → 43.5 MiB |       69 → 87 | `getParameterTypes()`                                          | `java.lang.reflect.Method`                        |
| +40.0% |  +8.999 MiB | 0.2% → 0.3% | 22.5 MiB → 31.5 MiB |       45 → 63 | `<init>()`                                                     | `java.util.ArrayDeque`                            |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

##### Standard library

| Change |       Delta |           % |                Size |   Samples | Function                                                                                     | Location                                              |
| -----: | ----------: | ----------: | ------------------: | --------: | -------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| -18.3% | -34.999 MiB | 1.6% → 1.3% |   191 MiB → 156 MiB | 382 → 312 | `valueOf(long)`                                                                              | `java.lang.Long`                                      |
| -77.4% | -23.999 MiB | 0.3% → 0.1% |      31 MiB → 7 MiB |   62 → 14 | `tuple(Object, Object)`                                                                      | `groovy.lang.Tuple`                                   |
| -15.4% | -21.999 MiB | 1.2% → 1.0% |   142 MiB → 120 MiB | 285 → 241 | `make(MethodType, LambdaForm, Object, Object, Object)`                                       | `java.lang.invoke.BoundMethodHandle$Species_LLL`      |
| -16.2% | -17.999 MiB | 0.9% → 0.8% |    111 MiB → 93 MiB | 222 → 186 | `map(Function)`                                                                              | `java.util.stream.ReferencePipeline`                  |
| -22.3% | -17.499 MiB | 0.7% → 0.5% |   78.5 MiB → 61 MiB | 157 → 122 | `copyOfRangeByte(byte[], int, int)`                                                          | `java.util.Arrays`                                    |
|  -6.1% | -15.999 MiB | 2.2% → 2.0% |   262 MiB → 246 MiB | 524 → 492 | `of(byte, int, int)`                                                                         | `java.lang.invoke.LambdaFormEditor$TransformKey`      |
| -65.9% | -13.499 MiB | 0.2% → 0.1% |    20.5 MiB → 7 MiB |   41 → 14 | `<init>(Object, Object)`                                                                     | `groovy.lang.Tuple2`                                  |
| -17.3% | -11.999 MiB | 0.6% → 0.5% | 69.5 MiB → 57.5 MiB | 139 → 115 | `make(byte, Class, MemberName, Class)`                                                       | `java.lang.invoke.DirectMethodHandle`                 |
| -16.7% |  -9.999 MiB | 0.5% → 0.4% |     60 MiB → 50 MiB | 120 → 100 | `fallback(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`       |
|  -6.4% |  -9.499 MiB | 1.2% → 1.1% |   149 MiB → 139 MiB | 298 → 279 | `join(PredictionContext, PredictionContext, PredictionContextCache)`                         | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext` |
| -27.4% |  -8.499 MiB | 0.3% → 0.2% |   31 MiB → 22.5 MiB |   62 → 45 | `basicTypesOrd(Class[])`                                                                     | `java.lang.invoke.LambdaForm$BasicType`               |
| -18.3% |  -8.499 MiB | 0.4% → 0.3% |   46.5 MiB → 38 MiB |   93 → 76 | `builder(long, IntFunction)`                                                                 | `java.util.stream.Nodes`                              |
| -15.4% |  -7.999 MiB |        0.4% |     52 MiB → 44 MiB |  104 → 88 | `make(MethodType, LambdaForm, Object, Object, Object, Object, Object, Object, Object)`       | `java.lang.invoke.BoundMethodHandle$Species_LLLLLLL`  |
| -21.3% |  -7.999 MiB | 0.3% → 0.2% | 37.5 MiB → 29.5 MiB |   75 → 59 | `put(String, MethodHandleWrapper)`                                                           | `org.codehaus.groovy.vmplugin.v8.CacheableCallSite`   |
| -15.3% |  -6.499 MiB | 0.4% → 0.3% |   42.5 MiB → 36 MiB |   85 → 72 | `opWrapSink(int, Sink)`                                                                      | `java.util.stream.ReferencePipeline$3`                |
|  -2.5% |  -6.499 MiB |        2.1% |   259 MiB → 252 MiB | 518 → 505 | `transform(ATNState, PredictionContext, SemanticContext, boolean, LexerActionExecutor)`      | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig`         |
| -31.0% |  -6.499 MiB | 0.2% → 0.1% |   21 MiB → 14.5 MiB |   42 → 29 | `resolve(MemberName, Class, int, boolean)`                                                   | `java.lang.invoke.MethodHandleNatives`                |
| -31.4% |  -5.499 MiB |        0.1% |   17.5 MiB → 12 MiB |   35 → 24 | `call(Object)`                                                                               | `groovy.lang.Closure`                                 |
|  -7.9% |  -5.499 MiB | 0.6% → 0.5% |   69.5 MiB → 64 MiB | 139 → 128 | `make(MethodType, LambdaForm, Object, Object, Object, Object, Object, Object)`               | `java.lang.invoke.BoundMethodHandle$Species_LLLLLL`   |
|  -8.9% |  -5.499 MiB |        0.5% |   61.5 MiB → 56 MiB | 123 → 112 | `computeValueConversions(MethodType, MethodType, boolean, boolean)`                          | `java.lang.invoke.MethodHandleImpl`                   |

#### Lines

Lines with the largest change in contribution to each function's self size.

##### `makeImpl(Class, Class[], boolean)` (`java.lang.invoke.MethodType`)

| Change |       Delta |      % |              Size |       Samples | Location                          |
| -----: | ----------: | -----: | ----------------: | ------------: | --------------------------------- |
|  +6.7% | +51.499 MiB | 100.0% | 768 MiB → 820 MiB | 1,537 → 1,640 | `java.lang.invoke.MethodType:400` |

##### `newInstance(Class, int)` (`java.lang.reflect.Array`)

| Change |       Delta |      % |              Size |   Samples | Location                     |
| -----: | ----------: | -----: | ----------------: | --------: | ---------------------------- |
|  +8.3% | +28.999 MiB | 100.0% | 349 MiB → 378 MiB | 698 → 756 | `java.lang.reflect.Array:78` |

##### `resize()` (`java.util.HashMap`)

| Change |       Delta |      % |              Size |   Samples | Location                |
| -----: | ----------: | -----: | ----------------: | --------: | ----------------------- |
| +23.8% | +25.499 MiB | 100.0% | 107 MiB → 132 MiB | 214 → 265 | `java.util.HashMap:710` |

##### `newHashMap(int)` (`java.util.HashMap`)

| Change |       Delta |      % |               Size |   Samples | Location                 |
| -----: | ----------: | -----: | -----------------: | --------: | ------------------------ |
| +32.1% | +25.499 MiB | 100.0% | 79.5 MiB → 105 MiB | 159 → 210 | `java.util.HashMap:2584` |

##### `stream(Spliterator, boolean)` (`java.util.stream.StreamSupport`)

| Change |       Delta |      % |              Size |   Samples | Location                            |
| -----: | ----------: | -----: | ----------------: | --------: | ----------------------------------- |
|  +5.4% | +14.499 MiB | 100.0% | 270 MiB → 285 MiB | 541 → 570 | `java.util.stream.StreamSupport:69` |

##### `insertParameterTypes(int, Class[])` (`java.lang.invoke.MethodType`)

| Change |       Delta |      % |              Size |   Samples | Location                          |
| -----: | ----------: | -----: | ----------------: | --------: | --------------------------------- |
|  +6.2% | +12.999 MiB | 100.0% | 210 MiB → 223 MiB | 420 → 446 | `java.lang.invoke.MethodType:500` |

##### `of(byte, int)` (`java.lang.invoke.LambdaFormEditor$TransformKey`)

| Change |       Delta |      % |              Size |   Samples | Location                                             |
| -----: | ----------: | -----: | ----------------: | --------: | ---------------------------------------------------- |
|  +9.3% | +10.999 MiB | 100.0% | 118 MiB → 129 MiB | 237 → 259 | `java.lang.invoke.LambdaFormEditor$TransformKey:177` |

##### `makeBlockInliningWrapper(MethodHandle)` (`java.lang.invoke.MethodHandleImpl`)

| Change |       Delta |      % |              Size |   Samples | Location                                |
| -----: | ----------: | -----: | ----------------: | --------: | --------------------------------------- |
|  +2.5% | +10.499 MiB | 100.0% | 418 MiB → 429 MiB | 837 → 858 | `java.lang.invoke.MethodHandleImpl:667` |

##### `unreflect(Method)` (`java.lang.invoke.MethodHandles$Lookup`)

| Change |       Delta |      % |              Size |  Samples | Location                                     |
| -----: | ----------: | -----: | ----------------: | -------: | -------------------------------------------- |
| +25.0% | +10.499 MiB | 100.0% | 42 MiB → 52.5 MiB | 84 → 105 | `java.lang.invoke.MethodHandles$Lookup:3444` |

##### `parameterArray()` (`java.lang.invoke.MethodType`)

| Change |       Delta |      % |              Size |   Samples | Location                          |
| -----: | ----------: | -----: | ----------------: | --------: | --------------------------------- |
|  +7.1% | +10.499 MiB | 100.0% | 148 MiB → 158 MiB | 296 → 317 | `java.lang.invoke.MethodType:885` |

##### `copyOfRange(Object[], int, int)` (`java.util.Arrays`)

| Change |      Delta |      % |              Size |   Samples | Location                |
| -----: | ---------: | -----: | ----------------: | --------: | ----------------------- |
|  +3.6% | +9.999 MiB | 100.0% | 278 MiB → 288 MiB | 556 → 576 | `java.util.Arrays:3768` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.LinkedHashMap`)

| Change |      Delta |      % |              Size |  Samples | Location                      |
| -----: | ---------: | -----: | ----------------: | -------: | ----------------------------- |
| +21.3% | +9.499 MiB | 100.0% | 44.5 MiB → 54 MiB | 89 → 108 | `java.util.LinkedHashMap:281` |

##### `matcher(CharSequence)` (`java.util.regex.Pattern`)

| Change |      Delta |      % |              Size |   Samples | Location                       |
| -----: | ---------: | -----: | ----------------: | --------: | ------------------------------ |
| +18.1% | +9.499 MiB | 100.0% | 52.5 MiB → 62 MiB | 105 → 124 | `java.util.regex.Pattern:1180` |

##### `compile(String)` (`java.util.regex.Pattern`)

| Change |      Delta |      % |            Size |  Samples | Location                       |
| -----: | ---------: | -----: | --------------: | -------: | ------------------------------ |
| +20.0% | +8.999 MiB | 100.0% | 45 MiB → 54 MiB | 90 → 108 | `java.util.regex.Pattern:1101` |

##### `RemoveQEQuoting()` (`java.util.regex.Pattern`)

| Change |      Delta |      % |                Size |  Samples | Location                       |
| -----: | ---------: | -----: | ------------------: | -------: | ------------------------------ |
| +20.7% | +8.999 MiB | 100.0% | 43.5 MiB → 52.5 MiB | 87 → 105 | `java.util.regex.Pattern:1848` |

##### `getParameterTypes()` (`java.lang.reflect.Method`)

| Change |      Delta |      % |                Size | Samples | Location                       |
| -----: | ---------: | -----: | ------------------: | ------: | ------------------------------ |
| +26.1% | +8.999 MiB | 100.0% | 34.5 MiB → 43.5 MiB | 69 → 87 | `java.lang.reflect.Method:318` |

##### `<init>()` (`java.util.ArrayDeque`)

| Change |      Delta |      % |                Size | Samples | Location                   |
| -----: | ---------: | -----: | ------------------: | ------: | -------------------------- |
| +40.0% | +8.999 MiB | 100.0% | 22.5 MiB → 31.5 MiB | 45 → 63 | `java.util.ArrayDeque:181` |

##### `valueOf(long)` (`java.lang.Long`)

| Change |       Delta |      % |              Size |   Samples | Location              |
| -----: | ----------: | -----: | ----------------: | --------: | --------------------- |
| -18.3% | -34.999 MiB | 100.0% | 191 MiB → 156 MiB | 382 → 312 | `java.lang.Long:1207` |

##### `tuple(Object, Object)` (`groovy.lang.Tuple`)

| Change |       Delta |      % |           Size | Samples | Location                |
| -----: | ----------: | -----: | -------------: | ------: | ----------------------- |
| -77.4% | -23.999 MiB | 100.0% | 31 MiB → 7 MiB | 62 → 14 | `groovy.lang.Tuple:142` |

##### `map(Function)` (`java.util.stream.ReferencePipeline`)

| Change |       Delta |      % |             Size |   Samples | Location                                 |
| -----: | ----------: | -----: | ---------------: | --------: | ---------------------------------------- |
| -16.2% | -17.999 MiB | 100.0% | 111 MiB → 93 MiB | 222 → 186 | `java.util.stream.ReferencePipeline:190` |

##### `copyOfRangeByte(byte[], int, int)` (`java.util.Arrays`)

| Change |       Delta |      % |              Size |   Samples | Location                |
| -----: | ----------: | -----: | ----------------: | --------: | ----------------------- |
| -22.3% | -17.499 MiB | 100.0% | 78.5 MiB → 61 MiB | 157 → 122 | `java.util.Arrays:3863` |

##### `of(byte, int, int)` (`java.lang.invoke.LambdaFormEditor$TransformKey`)

| Change |       Delta |      % |              Size |   Samples | Location                                             |
| -----: | ----------: | -----: | ----------------: | --------: | ---------------------------------------------------- |
|  -6.1% | -15.999 MiB | 100.0% | 262 MiB → 246 MiB | 524 → 492 | `java.lang.invoke.LambdaFormEditor$TransformKey:183` |

##### `<init>(Object, Object)` (`groovy.lang.Tuple2`)

| Change |       Delta |      % |             Size | Samples | Location                |
| -----: | ----------: | -----: | ---------------: | ------: | ----------------------- |
| -65.9% | -13.499 MiB | 100.0% | 20.5 MiB → 7 MiB | 41 → 14 | `groovy.lang.Tuple2:30` |

##### `make(byte, Class, MemberName, Class)` (`java.lang.invoke.DirectMethodHandle`)

| Change |      Delta |             % |                Size | Samples | Location                                  |
| -----: | ---------: | ------------: | ------------------: | ------: | ----------------------------------------- |
| -25.0% | -6.499 MiB | 37.4% → 33.9% |   26 MiB → 19.5 MiB | 52 → 39 | `java.lang.invoke.DirectMethodHandle:82`  |
| -17.8% | -3.999 MiB | 32.4% → 32.2% | 22.5 MiB → 18.5 MiB | 45 → 37 | `java.lang.invoke.DirectMethodHandle:103` |
|  -7.1% | -1.499 MiB | 30.2% → 33.9% |   21 MiB → 19.5 MiB | 42 → 39 | `java.lang.invoke.DirectMethodHandle:107` |

##### `fallback(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

| Change |      Delta |      % |            Size |   Samples | Location                                            |
| -----: | ---------: | -----: | --------------: | --------: | --------------------------------------------------- |
| -16.7% | -9.999 MiB | 100.0% | 60 MiB → 50 MiB | 120 → 100 | `org.codehaus.groovy.vmplugin.v8.IndyInterface:362` |

##### `join(PredictionContext, PredictionContext, PredictionContextCache)` (`groovyjarjarantlr4.v4.runtime.atn.PredictionContext`)

| Change |      Delta |             % |              Size |   Samples | Location                                                  |
| -----: | ---------: | ------------: | ----------------: | --------: | --------------------------------------------------------- |
| -12.9% | -8.499 MiB | 44.3% → 41.2% | 66 MiB → 57.5 MiB | 132 → 115 | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext:159` |
| -28.6% | -3.999 MiB |   9.4% → 7.2% |   14 MiB → 10 MiB |   28 → 20 | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext:227` |
|  +4.3% | +2.999 MiB | 46.3% → 51.6% |   69 MiB → 72 MiB | 138 → 144 | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext:160` |

##### `basicTypesOrd(Class[])` (`java.lang.invoke.LambdaForm$BasicType`)

| Change |      Delta |      % |              Size | Samples | Location                                    |
| -----: | ---------: | -----: | ----------------: | ------: | ------------------------------------------- |
| -27.4% | -8.499 MiB | 100.0% | 31 MiB → 22.5 MiB | 62 → 45 | `java.lang.invoke.LambdaForm$BasicType:211` |

##### `builder(long, IntFunction)` (`java.util.stream.Nodes`)

| Change |      Delta |      % |              Size | Samples | Location                     |
| -----: | ---------: | -----: | ----------------: | ------: | ---------------------------- |
| -18.3% | -8.499 MiB | 100.0% | 46.5 MiB → 38 MiB | 93 → 76 | `java.util.stream.Nodes:168` |

##### `put(String, MethodHandleWrapper)` (`org.codehaus.groovy.vmplugin.v8.CacheableCallSite`)

| Change |      Delta |      % |                Size | Samples | Location                                               |
| -----: | ---------: | -----: | ------------------: | ------: | ------------------------------------------------------ |
| -21.3% | -7.999 MiB | 100.0% | 37.5 MiB → 29.5 MiB | 75 → 59 | `org.codehaus.groovy.vmplugin.v8.CacheableCallSite:92` |

##### `opWrapSink(int, Sink)` (`java.util.stream.ReferencePipeline$3`)

| Change |      Delta |      % |              Size | Samples | Location                                   |
| -----: | ---------: | -----: | ----------------: | ------: | ------------------------------------------ |
| -15.3% | -6.499 MiB | 100.0% | 42.5 MiB → 36 MiB | 85 → 72 | `java.util.stream.ReferencePipeline$3:194` |

##### `transform(ATNState, PredictionContext, SemanticContext, boolean, LexerActionExecutor)` (`groovyjarjarantlr4.v4.runtime.atn.ATNConfig`)

| Change |       Delta |             % |              Size |   Samples | Location                                          |
| -----: | ----------: | ------------: | ----------------: | --------: | ------------------------------------------------- |
|  -5.0% | -11.999 MiB | 91.9% → 89.5% | 238 MiB → 226 MiB | 476 → 452 | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig:232` |
| +21.1% |  +3.999 MiB |   7.3% → 9.1% |   19 MiB → 23 MiB |   38 → 46 | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig:225` |
| +75.0% |  +1.499 MiB |   0.8% → 1.4% |   2 MiB → 3.5 MiB |     4 → 7 | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig:229` |

##### `call(Object)` (`groovy.lang.Closure`)

| Change |      Delta |      % |              Size | Samples | Location                  |
| -----: | ---------: | -----: | ----------------: | ------: | ------------------------- |
| -31.4% | -5.499 MiB | 100.0% | 17.5 MiB → 12 MiB | 35 → 24 | `groovy.lang.Closure:422` |

##### `computeValueConversions(MethodType, MethodType, boolean, boolean)` (`java.lang.invoke.MethodHandleImpl`)

| Change |      Delta |      % |              Size |   Samples | Location                                |
| -----: | ---------: | -----: | ----------------: | --------: | --------------------------------------- |
|  -8.9% | -5.499 MiB | 100.0% | 61.5 MiB → 56 MiB | 123 → 112 | `java.lang.invoke.MethodHandleImpl:373` |

#### Callers

Callers with the largest change in contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `makeImpl(Class, Class[], boolean)` (`java.lang.invoke.MethodType`)

| Change |        Delta |             % |                Size |   Samples | Caller                                | Location                      |
| -----: | -----------: | ------------: | ------------------: | --------: | ------------------------------------- | ----------------------------- |
|  +5.9% |  +21.999 MiB | 48.8% → 48.4% |   375 MiB → 397 MiB | 750 → 794 | `methodType(Class, Class[], boolean)` | `java.lang.invoke.MethodType` |
|  +6.0% |  +20.999 MiB | 45.3% → 45.0% |   348 MiB → 369 MiB | 696 → 738 | `insertParameterTypes(int, Class[])`  | `java.lang.invoke.MethodType` |
| +17.6% |   +7.999 MiB |   5.9% → 6.5% | 45.5 MiB → 53.5 MiB |  91 → 107 | `methodType(Class, Class)`            | `java.lang.invoke.MethodType` |
|    new | +511.999 KiB |   0.0% → 0.1% |       0 B → 512 KiB |     0 → 1 | `changeParameterType(int, Class)`     | `java.lang.invoke.MethodType` |

##### `newArray(Class, int)` (`java.lang.reflect.Array`)

| Change |       Delta |      % |              Size |   Samples | Caller                    | Location                  |
| -----: | ----------: | -----: | ----------------: | --------: | ------------------------- | ------------------------- |
| +15.6% | +47.499 MiB | 100.0% | 304 MiB → 351 MiB | 608 → 703 | `newInstance(Class, int)` | `java.lang.reflect.Array` |

##### `fillInStackTrace(int)` (`java.lang.Throwable`)

| Change |       Delta |      % |              Size |       Samples | Caller               | Location              |
| -----: | ----------: | -----: | ----------------: | ------------: | -------------------- | --------------------- |
|  +7.1% | +39.499 MiB | 100.0% | 554 MiB → 593 MiB | 1,108 → 1,187 | `fillInStackTrace()` | `java.lang.Throwable` |

##### `newInstance(Class, int)` (`java.lang.reflect.Array`)

|  Change |          Delta |             % |              Size |   Samples | Caller                                             | Location                                                                                                  |
| ------: | -------------: | ------------: | ----------------: | --------: | -------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
|   +9.0% |    +30.999 MiB | 98.9% → 99.5% | 345 MiB → 376 MiB | 690 → 752 | `invokeStatic(Object, Object, int)`                | `java.lang.invoke.LambdaForm$DMH.0x000000700102b400 → java.lang.invoke.LambdaForm$DMH.0x000000f00102b400` |
| removed | -1,023.998 KiB |   0.3% → 0.0% |       1 MiB → 0 B |     2 → 0 | `copyOfRange(Object[], int, int, Class)`           | `java.util.Arrays`                                                                                        |
|  -33.3% | -1,023.998 KiB |   0.9% → 0.5% |     3 MiB → 2 MiB |     6 → 4 | `<init>(Object[], Comparator, Object[], int, int)` | `java.util.TimSort`                                                                                       |

##### `resize()` (`java.util.HashMap`)

| Change |        Delta |             % |              Size |   Samples | Caller                                          | Location            |
| -----: | -----------: | ------------: | ----------------: | --------: | ----------------------------------------------- | ------------------- |
| +23.1% |  +24.499 MiB | 99.1% → 98.5% | 106 MiB → 130 MiB | 212 → 261 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |
| +50.0% | +511.999 KiB |   0.9% → 1.1% |   1 MiB → 1.5 MiB |     2 → 3 | `treeifyBin(HashMap$Node[], int)`               | `java.util.HashMap` |
|    new | +511.999 KiB |   0.0% → 0.4% |     0 B → 512 KiB |     0 → 1 | `computeIfAbsent(Object, Function)`             | `java.util.HashMap` |

##### `newHashMap(int)` (`java.util.HashMap`)

| Change |       Delta |      % |               Size |   Samples | Caller                                                                    | Location                            |
| -----: | ----------: | -----: | -----------------: | --------: | ------------------------------------------------------------------------- | ----------------------------------- |
| +32.1% | +25.499 MiB | 100.0% | 79.5 MiB → 105 MiB | 159 → 210 | `makePairwiseConvertByEditor(MethodHandle, MethodType, boolean, boolean)` | `java.lang.invoke.MethodHandleImpl` |

##### `make(MethodType, LambdaForm, Object, Object, Object, Object)` (`java.lang.invoke.BoundMethodHandle$Species_LLLL`)

| Change |       Delta |      % |              Size |   Samples | Caller                                                                 | Location                                     |
| -----: | ----------: | -----: | ----------------: | --------: | ---------------------------------------------------------------------- | -------------------------------------------- |
|  +7.5% | +20.499 MiB | 100.0% | 273 MiB → 293 MiB | 546 → 587 | `invokeStatic(Object, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `stream(Spliterator, boolean)` (`java.util.stream.StreamSupport`)

| Change |          Delta |             % |              Size |   Samples | Caller                       | Location               |
| -----: | -------------: | ------------: | ----------------: | --------: | ---------------------------- | ---------------------- |
|  +5.1% |    +13.499 MiB | 98.3% → 98.1% | 266 MiB → 279 MiB | 532 → 559 | `stream(Object[], int, int)` | `java.util.Arrays`     |
| +22.2% | +1,023.998 KiB |   1.7% → 1.9% | 4.5 MiB → 5.5 MiB |    9 → 11 | `stream()`                   | `java.util.Collection` |

##### `insertParameterTypes(int, Class[])` (`java.lang.invoke.MethodType`)

| Change |          Delta |             % |                Size |   Samples | Caller                                             | Location                              |
| -----: | -------------: | ------------: | ------------------: | --------: | -------------------------------------------------- | ------------------------------------- |
| +12.0% |     +9.999 MiB | 39.5% → 41.7% |     83 MiB → 93 MiB | 166 → 186 | `dropArgumentsTrusted(MethodHandle, int, Class[])` | `java.lang.invoke.MethodHandles`      |
| +60.6% |     +9.999 MiB |  7.9% → 11.9% | 16.5 MiB → 26.5 MiB |   33 → 53 | `make(byte, Class, MemberName, Class)`             | `java.lang.invoke.DirectMethodHandle` |
| -11.4% |     -4.999 MiB | 21.0% → 17.5% |     44 MiB → 39 MiB |   88 → 78 | `invokerType()`                                    | `java.lang.invoke.MethodType`         |
| -10.0% |     -2.499 MiB | 11.9% → 10.1% |   25 MiB → 22.5 MiB |   50 → 45 | `getInvocationType()`                              | `java.lang.invoke.MemberName`         |
| +18.2% | +1,023.998 KiB |   2.6% → 2.9% |   5.5 MiB → 6.5 MiB |   11 → 13 | `asCollectorType(Class, int, int)`                 | `java.lang.invoke.MethodType`         |

##### `of(byte, int)` (`java.lang.invoke.LambdaFormEditor$TransformKey`)

| Change |       Delta |      % |              Size |   Samples | Caller                  | Location                            |
| -----: | ----------: | -----: | ----------------: | --------: | ----------------------- | ----------------------------------- |
|  +9.3% | +10.999 MiB | 100.0% | 118 MiB → 129 MiB | 237 → 259 | `bindArgumentForm(int)` | `java.lang.invoke.LambdaFormEditor` |

##### `makeBlockInliningWrapper(MethodHandle)` (`java.lang.invoke.MethodHandleImpl`)

| Change |       Delta |      % |              Size |   Samples | Caller                  | Location                            |
| -----: | ----------: | -----: | ----------------: | --------: | ----------------------- | ----------------------------------- |
|  +2.5% | +10.499 MiB | 100.0% | 418 MiB → 429 MiB | 837 → 858 | `profile(MethodHandle)` | `java.lang.invoke.MethodHandleImpl` |

##### `unreflect(Method)` (`java.lang.invoke.MethodHandles$Lookup`)

| Change |        Delta |              % |            Size |  Samples | Caller                                             | Location                                                  |
| -----: | -----------: | -------------: | --------------: | -------: | -------------------------------------------------- | --------------------------------------------------------- |
| +23.8% |   +9.999 MiB | 100.0% → 99.0% | 42 MiB → 52 MiB | 84 → 104 | `correctClassForNameAndUnReflectOtherwise(Method)` | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |
|    new | +511.999 KiB |    0.0% → 1.0% |   0 B → 512 KiB |    0 → 1 | `cloneObject(Object)`                              | `org.apache.groovy.runtime.ObjectUtil`                    |

##### `parameterArray()` (`java.lang.invoke.MethodType`)

| Change |          Delta |             % |                Size | Samples | Caller                      | Location                                                  |
| -----: | -------------: | ------------: | ------------------: | ------: | --------------------------- | --------------------------------------------------------- |
| +29.2% |     +9.499 MiB | 22.0% → 26.5% |   32.5 MiB → 42 MiB | 65 → 84 | `setGuards(Object)`         | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |
|  +8.2% |     +2.999 MiB | 24.7% → 24.9% | 36.5 MiB → 39.5 MiB | 73 → 79 | `correctWrapping()`         | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |
|  -3.0% | -1,023.998 KiB | 22.3% → 20.2% |     33 MiB → 32 MiB | 66 → 64 | `correctCoerce()`           | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |
| -25.0% | -1,023.998 KiB |   2.7% → 1.9% |       4 MiB → 3 MiB |   8 → 6 | `removeWrapper(MethodType)` | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |

##### `copyOfRange(Object[], int, int)` (`java.util.Arrays`)

| Change |       Delta |             % |              Size |   Samples | Caller                                                           | Location                         |
| -----: | ----------: | ------------: | ----------------: | --------: | ---------------------------------------------------------------- | -------------------------------- |
| +22.2% | +25.999 MiB | 42.1% → 49.7% | 117 MiB → 143 MiB | 234 → 286 | `dropParameterTypes(int, int)`                                   | `java.lang.invoke.MethodType`    |
|  -9.9% | -15.999 MiB | 57.9% → 50.3% | 161 MiB → 145 MiB | 322 → 290 | `dropArgumentsToMatch(MethodHandle, int, Class[], int, boolean)` | `java.lang.invoke.MethodHandles` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.LinkedHashMap`)

| Change |          Delta |              % |              Size |  Samples | Caller                                          | Location            |
| -----: | -------------: | -------------: | ----------------: | -------: | ----------------------------------------------- | ------------------- |
| +19.1% |     +8.499 MiB | 100.0% → 98.1% | 44.5 MiB → 53 MiB | 89 → 106 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |
|    new | +1,023.998 KiB |    0.0% → 1.9% |       0 B → 1 MiB |    0 → 2 | `computeIfAbsent(Object, Function)`             | `java.util.HashMap` |

##### `matcher(CharSequence)` (`java.util.regex.Pattern`)

|  Change |          Delta |             % |                Size | Samples | Caller                              | Location                                    |
| ------: | -------------: | ------------: | ------------------: | ------: | ----------------------------------- | ------------------------------------------- |
|  +20.3% |     +5.999 MiB | 56.2% → 57.3% | 29.5 MiB → 35.5 MiB | 59 → 71 | `matches(String, CharSequence)`     | `java.util.regex.Pattern`                   |
|  +17.1% |     +2.999 MiB | 33.3% → 33.1% | 17.5 MiB → 20.5 MiB | 35 → 41 | `findRegex(Object, Object)`         | `org.codehaus.groovy.runtime.InvokerHelper` |
|  -55.6% |     -2.499 MiB |   8.6% → 3.2% |     4.5 MiB → 2 MiB |   9 → 4 | `matchRegex(Object, Object)`        | `org.codehaus.groovy.runtime.InvokerHelper` |
|     new |     +1.499 MiB |   0.0% → 2.4% |       0 B → 1.5 MiB |   0 → 3 | `replaceAll(String, String)`        | `java.lang.String`                          |
| +200.0% | +1,023.998 KiB |   1.0% → 2.4% |   512 KiB → 1.5 MiB |   1 → 3 | `split(CharSequence, int, boolean)` | `java.util.regex.Pattern`                   |

##### `compile(String)` (`java.util.regex.Pattern`)

|  Change |          Delta |             % |              Size | Samples | Caller                          | Location                                          |
| ------: | -------------: | ------------: | ----------------: | ------: | ------------------------------- | ------------------------------------------------- |
|  +40.0% |     +5.999 MiB | 33.3% → 38.9% |   15 MiB → 21 MiB | 30 → 42 | `findRegex(Object, Object)`     | `org.codehaus.groovy.runtime.InvokerHelper`       |
|   +9.6% |     +2.499 MiB | 57.8% → 52.8% | 26 MiB → 28.5 MiB | 52 → 57 | `matches(String, CharSequence)` | `java.util.regex.Pattern`                         |
| +200.0% | +1,023.998 KiB |   1.1% → 2.8% | 512 KiB → 1.5 MiB |   1 → 3 | `bitwiseNegate(CharSequence)`   | `org.codehaus.groovy.runtime.StringGroovyMethods` |
| removed |   -511.999 KiB |   1.1% → 0.0% |     512 KiB → 0 B |   1 → 0 | `split(String, int, boolean)`   | `java.lang.String`                                |

##### `RemoveQEQuoting()` (`java.util.regex.Pattern`)

| Change |      Delta |      % |                Size |  Samples | Caller      | Location                  |
| -----: | ---------: | -----: | ------------------: | -------: | ----------- | ------------------------- |
| +20.7% | +8.999 MiB | 100.0% | 43.5 MiB → 52.5 MiB | 87 → 105 | `compile()` | `java.util.regex.Pattern` |

##### `getParameterTypes()` (`java.lang.reflect.Method`)

| Change |        Delta |             % |              Size | Samples | Caller                                             | Location                                                  |
| -----: | -----------: | ------------: | ----------------: | ------: | -------------------------------------------------- | --------------------------------------------------------- |
| +47.1% |   +7.999 MiB | 49.3% → 57.5% |   17 MiB → 25 MiB | 34 → 50 | `correctClassForNameAndUnReflectOtherwise(Method)` | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |
|    new | +511.999 KiB |   0.0% → 1.1% |     0 B → 512 KiB |   0 → 1 | `getGenericParameterTypes()`                       | `java.lang.reflect.Executable`                            |
|  -2.9% | -511.999 KiB | 50.7% → 39.1% | 17.5 MiB → 17 MiB | 35 → 34 | `<init>(Method, boolean)`                          | `java.lang.invoke.MemberName`                             |
|    new | +511.999 KiB |   0.0% → 1.1% |     0 B → 512 KiB |   0 → 1 | `inheritInterfaceNewMetaMethods(Set)`              | `groovy.lang.MetaClassImpl`                               |
|    new | +511.999 KiB |   0.0% → 1.1% |     0 B → 512 KiB |   0 → 1 | `getPT()`                                          | `org.codehaus.groovy.reflection.CachedMethod`             |

##### `<init>()` (`java.util.ArrayDeque`)

|  Change |          Delta |             % |              Size | Samples | Caller                                       | Location                                                   |
| ------: | -------------: | ------------: | ----------------: | ------: | -------------------------------------------- | ---------------------------------------------------------- |
|  +38.6% |     +8.499 MiB | 97.8% → 96.8% | 22 MiB → 30.5 MiB | 44 → 61 | `equals(ArrayPredictionContext, Set)`        | `groovyjarjarantlr4.v4.runtime.atn.ArrayPredictionContext` |
|     new | +1,023.998 KiB |   0.0% → 3.2% |       0 B → 1 MiB |   0 → 2 | `<init>(SourceUnit, boolean, boolean)`       | `org.apache.groovy.parser.antlr4.AstBuilder`               |
| removed |   -511.999 KiB |   2.2% → 0.0% |     512 KiB → 0 B |   1 → 0 | `testTailCall(ATN, RuleTransition, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ATNDeserializer`        |

##### `valueOf(long)` (`java.lang.Long`)

| Change |          Delta |             % |              Size |   Samples | Caller                                   | Location                                         |
| -----: | -------------: | ------------: | ----------------: | --------: | ---------------------------------------- | ------------------------------------------------ |
| -18.7% |    -33.999 MiB | 95.3% → 94.9% | 182 MiB → 148 MiB | 364 → 296 | `add(ATNConfig, PredictionContextCache)` | `groovyjarjarantlr4.v4.runtime.atn.ATNConfigSet` |
| -11.1% | -1,023.998 KiB |   4.7% → 5.1% |     9 MiB → 8 MiB |   18 → 16 | `boxLong(long)`                          | `sun.invoke.util.ValueConversions`               |

##### `tuple(Object, Object)` (`groovy.lang.Tuple`)

| Change |        Delta |             % |               Size | Samples | Caller                                                                         | Location                                                      |
| -----: | -----------: | ------------: | -----------------: | ------: | ------------------------------------------------------------------------------ | ------------------------------------------------------------- |
| -93.3% |  -20.999 MiB | 72.6% → 21.4% | 22.5 MiB → 1.5 MiB |  45 → 3 | `createMetaMethodAndMetaProperty(Class, Class, String, boolean, boolean)`      | `groovy.lang.MetaClassImpl`                                   |
| -35.7% |   -2.499 MiB | 22.6% → 64.3% |    7 MiB → 4.5 MiB |  14 → 9 | `endPosition(Token)`                                                           | `org.apache.groovy.parser.antlr4.util.PositionConfigureUtils` |
| -33.3% | -511.999 KiB |  4.8% → 14.3% |    1.5 MiB → 1 MiB |   3 → 2 | `invokeMethod(MetaMethod, Object, Closure, String, Class[], Object[], Object)` | `groovy.lang.MetaClassImpl`                                   |

##### `make(MethodType, LambdaForm, Object, Object, Object)` (`java.lang.invoke.BoundMethodHandle$Species_LLL`)

| Change |       Delta |      % |              Size |   Samples | Caller                                                         | Location                                     |
| -----: | ----------: | -----: | ----------------: | --------: | -------------------------------------------------------------- | -------------------------------------------- |
| -15.4% | -21.999 MiB | 100.0% | 142 MiB → 120 MiB | 285 → 241 | `invokeStatic(Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `map(Function)` (`java.util.stream.ReferencePipeline`)

|  Change |          Delta |             % |               Size |   Samples | Caller                                                          | Location                                                              |
| ------: | -------------: | ------------: | -----------------: | --------: | --------------------------------------------------------------- | --------------------------------------------------------------------- |
|  -18.4% |    -19.999 MiB | 97.7% → 95.2% | 108 MiB → 88.5 MiB | 217 → 177 | `setGuards(Object)`                                             | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector`             |
| +200.0% | +1,023.998 KiB |   0.5% → 1.6% |  512 KiB → 1.5 MiB |     1 → 3 | `createPathExpression(Expression, List)`                        | `org.apache.groovy.parser.antlr4.AstBuilder`                          |
| +200.0% | +1,023.998 KiB |   0.5% → 1.6% |  512 KiB → 1.5 MiB |     1 → 3 | `visitCommandExpression(GroovyParser$CommandExpressionContext)` | `org.apache.groovy.parser.antlr4.AstBuilder`                          |
| removed |   -511.999 KiB |   0.5% → 0.0% |      512 KiB → 0 B |     1 → 0 | `lambda$initValue$4()`                                          | `org.codehaus.groovy.reflection.CachedClass$2`                        |
| removed |   -511.999 KiB |   0.5% → 0.0% |      512 KiB → 0 B |     1 → 0 | `<init>(List)`                                                  | `org.apache.groovy.parser.antlr4.AstBuilder$DeclarationListStatement` |

##### `copyOfRangeByte(byte[], int, int)` (`java.util.Arrays`)

| Change |       Delta |      % |              Size |   Samples | Caller                          | Location           |
| -----: | ----------: | -----: | ----------------: | --------: | ------------------------------- | ------------------ |
| -22.3% | -17.499 MiB | 100.0% | 78.5 MiB → 61 MiB | 157 → 122 | `copyOfRange(byte[], int, int)` | `java.util.Arrays` |

##### `of(byte, int, int)` (`java.lang.invoke.LambdaFormEditor$TransformKey`)

| Change |        Delta |             % |              Size |   Samples | Caller                                            | Location                            |
| -----: | -----------: | ------------: | ----------------: | --------: | ------------------------------------------------- | ----------------------------------- |
|  -5.2% |   -8.499 MiB | 61.8% → 62.4% | 162 MiB → 153 MiB | 324 → 307 | `addArgumentForm(int, LambdaForm$BasicType)`      | `java.lang.invoke.LambdaFormEditor` |
|  -9.9% |   -7.999 MiB | 30.9% → 29.7% |   81 MiB → 73 MiB | 162 → 146 | `filterArgumentForm(int, LambdaForm$BasicType)`   | `java.lang.invoke.LambdaFormEditor` |
|  +2.6% | +511.999 KiB |   7.3% → 7.9% | 19 MiB → 19.5 MiB |   38 → 39 | `filterReturnForm(LambdaForm$BasicType, boolean)` | `java.lang.invoke.LambdaFormEditor` |

##### `<init>(Object, Object)` (`groovy.lang.Tuple2`)

| Change |       Delta |      % |             Size | Samples | Caller                  | Location            |
| -----: | ----------: | -----: | ---------------: | ------: | ----------------------- | ------------------- |
| -65.9% | -13.499 MiB | 100.0% | 20.5 MiB → 7 MiB | 41 → 14 | `tuple(Object, Object)` | `groovy.lang.Tuple` |

##### `make(byte, Class, MemberName, Class)` (`java.lang.invoke.DirectMethodHandle`)

| Change |       Delta |      % |                Size |   Samples | Caller                                                                                   | Location                                |
| -----: | ----------: | -----: | ------------------: | --------: | ---------------------------------------------------------------------------------------- | --------------------------------------- |
| -17.3% | -11.999 MiB | 100.0% | 69.5 MiB → 57.5 MiB | 139 → 115 | `getDirectMethodCommon(byte, Class, MemberName, boolean, boolean, MethodHandles$Lookup)` | `java.lang.invoke.MethodHandles$Lookup` |

##### `fallback(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

| Change |      Delta |             % |              Size | Samples | Caller                                                                                           | Location                                        |
| -----: | ---------: | ------------: | ----------------: | ------: | ------------------------------------------------------------------------------------------------ | ----------------------------------------------- |
| -22.8% | -6.499 MiB | 47.5% → 44.0% | 28.5 MiB → 22 MiB | 57 → 44 | `access$000(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])`   | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |
| -11.1% | -3.499 MiB | 52.5% → 56.0% | 31.5 MiB → 28 MiB | 63 → 56 | `selectMethod(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |

##### `join(PredictionContext, PredictionContext, PredictionContextCache)` (`groovyjarjarantlr4.v4.runtime.atn.PredictionContext`)

| Change |          Delta |             % |              Size |   Samples | Caller                                       | Location                                                   |
| -----: | -------------: | ------------: | ----------------: | --------: | -------------------------------------------- | ---------------------------------------------------------- |
|  -5.8% |     -8.499 MiB | 98.0% → 98.6% | 146 MiB → 137 MiB | 292 → 275 | `add(ATNConfig, PredictionContextCache)`     | `groovyjarjarantlr4.v4.runtime.atn.ATNConfigSet`           |
| -33.3% | -1,023.998 KiB |   2.0% → 1.4% |     3 MiB → 2 MiB |     6 → 4 | `join(PredictionContext, PredictionContext)` | `groovyjarjarantlr4.v4.runtime.atn.PredictionContextCache` |

##### `basicTypesOrd(Class[])` (`java.lang.invoke.LambdaForm$BasicType`)

| Change |      Delta |      % |              Size | Samples | Caller                                  | Location                            |
| -----: | ---------: | -----: | ----------------: | ------: | --------------------------------------- | ----------------------------------- |
| -27.4% | -8.499 MiB | 100.0% | 31 MiB → 22.5 MiB | 62 → 45 | `collectArgumentsForm(int, MethodType)` | `java.lang.invoke.LambdaFormEditor` |

##### `builder(long, IntFunction)` (`java.util.stream.Nodes`)

| Change |      Delta |      % |              Size | Samples | Caller                               | Location                             |
| -----: | ---------: | -----: | ----------------: | ------: | ------------------------------------ | ------------------------------------ |
| -18.3% | -8.499 MiB | 100.0% | 46.5 MiB → 38 MiB | 93 → 76 | `makeNodeBuilder(long, IntFunction)` | `java.util.stream.ReferencePipeline` |

##### `make(MethodType, LambdaForm, Object, Object, Object, Object, Object, Object, Object)` (`java.lang.invoke.BoundMethodHandle$Species_LLLLLLL`)

| Change |      Delta |      % |            Size |  Samples | Caller                                                                                         | Location                                     |
| -----: | ---------: | -----: | --------------: | -------: | ---------------------------------------------------------------------------------------------- | -------------------------------------------- |
| -15.4% | -7.999 MiB | 100.0% | 52 MiB → 44 MiB | 104 → 88 | `invokeStatic(Object, Object, Object, Object, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `put(String, MethodHandleWrapper)` (`org.codehaus.groovy.vmplugin.v8.CacheableCallSite`)

| Change |      Delta |      % |                Size | Samples | Caller                                                                  | Location                                        |
| -----: | ---------: | -----: | ------------------: | ------: | ----------------------------------------------------------------------- | ----------------------------------------------- |
| -21.3% | -7.999 MiB | 100.0% | 37.5 MiB → 29.5 MiB | 75 → 59 | `lambda$selectMethod$3(MethodHandleWrapper, CacheableCallSite, Object)` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |

##### `opWrapSink(int, Sink)` (`java.util.stream.ReferencePipeline$3`)

| Change |      Delta |      % |              Size | Samples | Caller           | Location                            |
| -----: | ---------: | -----: | ----------------: | ------: | ---------------- | ----------------------------------- |
| -15.3% | -6.499 MiB | 100.0% | 42.5 MiB → 36 MiB | 85 → 72 | `wrapSink(Sink)` | `java.util.stream.AbstractPipeline` |

##### `transform(ATNState, PredictionContext, SemanticContext, boolean, LexerActionExecutor)` (`groovyjarjarantlr4.v4.runtime.atn.ATNConfig`)

| Change |          Delta |             % |              Size |   Samples | Caller                                              | Location                                      |
| -----: | -------------: | ------------: | ----------------: | --------: | --------------------------------------------------- | --------------------------------------------- |
|  -2.9% |     -5.999 MiB | 78.8% → 78.4% | 204 MiB → 198 MiB | 408 → 396 | `transform(ATNState, boolean)`                      | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig` |
| -10.0% | -1,023.998 KiB |   3.9% → 3.6% |    10 MiB → 9 MiB |   20 → 18 | `transform(ATNState, LexerActionExecutor, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig` |
|  +1.1% |   +511.999 KiB | 17.4% → 18.0% | 45 MiB → 45.5 MiB |   90 → 91 | `transform(ATNState, PredictionContext, boolean)`   | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig` |

##### `resolve(MemberName, Class, int, boolean)` (`java.lang.invoke.MethodHandleNatives`)

| Change |      Delta |      % |              Size | Samples | Caller                                           | Location                              |
| -----: | ---------: | -----: | ----------------: | ------: | ------------------------------------------------ | ------------------------------------- |
| -31.0% | -6.499 MiB | 100.0% | 21 MiB → 14.5 MiB | 42 → 29 | `resolve(byte, MemberName, Class, int, boolean)` | `java.lang.invoke.MemberName$Factory` |

##### `call(Object)` (`groovy.lang.Closure`)

|  Change |          Delta |             % |            Size | Samples | Caller                                     | Location                                           |
| ------: | -------------: | ------------: | --------------: | ------: | ------------------------------------------ | -------------------------------------------------- |
|  -64.7% |     -5.499 MiB | 48.6% → 25.0% | 8.5 MiB → 3 MiB |  17 → 6 | `each(Iterator, Closure)`                  | `org.codehaus.groovy.runtime.DefaultGroovyMethods` |
|  +23.1% |     +1.499 MiB | 37.1% → 66.7% | 6.5 MiB → 8 MiB | 13 → 16 | `compare(Object, Object)`                  | `groovy.util.OrderBy`                              |
| removed | -1,023.998 KiB |   5.7% → 0.0% |     1 MiB → 0 B |   2 → 0 | `collect(Iterator, Collection, Closure)`   | `org.codehaus.groovy.runtime.DefaultGroovyMethods` |
|  -33.3% |   -511.999 KiB |   8.6% → 8.3% | 1.5 MiB → 1 MiB |   3 → 2 | `callClosureForLine(Closure, String, int)` | `org.codehaus.groovy.runtime.DefaultGroovyMethods` |

##### `make(MethodType, LambdaForm, Object, Object, Object, Object, Object, Object)` (`java.lang.invoke.BoundMethodHandle$Species_LLLLLL`)

| Change |      Delta |      % |              Size |   Samples | Caller                                                                                 | Location                                     |
| -----: | ---------: | -----: | ----------------: | --------: | -------------------------------------------------------------------------------------- | -------------------------------------------- |
|  -7.9% | -5.499 MiB | 100.0% | 69.5 MiB → 64 MiB | 139 → 128 | `invokeStatic(Object, Object, Object, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `computeValueConversions(MethodType, MethodType, boolean, boolean)` (`java.lang.invoke.MethodHandleImpl`)

| Change |      Delta |      % |              Size |   Samples | Caller                                                                    | Location                            |
| -----: | ---------: | -----: | ----------------: | --------: | ------------------------------------------------------------------------- | ----------------------------------- |
|  -8.9% | -5.499 MiB | 100.0% | 61.5 MiB → 56 MiB | 123 → 112 | `makePairwiseConvertByEditor(MethodHandle, MethodType, boolean, boolean)` | `java.lang.invoke.MethodHandleImpl` |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

##### Standard library

|      Change |        Delta |             % |                Size |         Samples | Function                                         | Location                                                                                                |
| ----------: | -----------: | ------------: | ------------------: | --------------: | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------- |
|   +39765.7% |  +11.844 GiB |  0.3% → 99.6% | 30.5 MiB → 11.9 GiB |     61 → 24,316 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070010d3c00 → java.lang.invoke.LambdaForm$MH.0x000000f0010c6400` |
|   +88929.9% |  +11.724 GiB |  0.1% → 98.5% | 13.5 MiB → 11.7 GiB |     27 → 24,036 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070010a0800 → java.lang.invoke.LambdaForm$MH.0x000000f00109bc00` |
| +2319008.6% |  +11.323 GiB | <0.1% → 95.0% |  512 KiB → 11.3 GiB |      1 → 23,189 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000070011f0000 → java.lang.invoke.LambdaForm$MH.0x000000f001188000` |
|    +1231.5% |  +10.535 GiB |  7.3% → 95.6% |  876 MiB → 11.4 GiB |  1,750 → 23,327 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070012bc000 → java.lang.invoke.LambdaForm$MH.0x000000f001298400` |
| +2063600.0% |  +10.076 GiB | <0.1% → 84.5% |  512 KiB → 10.1 GiB |      1 → 20,637 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001616800 → java.lang.invoke.LambdaForm$MH.0x000000f0015aa000` |
| +1031750.0% |  +10.075 GiB | <0.1% → 84.5% |    1 MiB → 10.1 GiB |      2 → 20,637 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070015c7800 → java.lang.invoke.LambdaForm$MH.0x000000f0015a9c00` |
|    +1177.7% |  +10.075 GiB |  7.3% → 91.7% |  876 MiB → 10.9 GiB |  1,750 → 22,384 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070012ba800 → java.lang.invoke.LambdaForm$MH.0x000000f001292400` |
|    +5049.6% |   +9.887 GiB |  1.7% → 84.6% |  200 MiB → 10.1 GiB |    401 → 20,650 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070014d9400 → java.lang.invoke.LambdaForm$MH.0x000000f0015a7000` |
|     +442.8% |   +9.295 GiB | 17.8% → 95.6% |  2.1 GiB → 11.4 GiB |  4,299 → 23,335 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070010dc800 → java.lang.invoke.LambdaForm$MH.0x000000f0010d3400` |
|  +950850.0% |   +9.285 GiB | <0.1% → 77.9% |    1 MiB → 9.29 GiB |      2 → 19,019 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001627c00 → java.lang.invoke.LambdaForm$MH.0x000000f00163e400` |
|  +633866.7% |   +9.285 GiB | <0.1% → 77.9% |  1.5 MiB → 9.29 GiB |      3 → 19,019 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070015c0400 → java.lang.invoke.LambdaForm$MH.0x000000f00163ec00` |
|  +475375.0% |   +9.284 GiB | <0.1% → 77.9% |    2 MiB → 9.29 GiB |      4 → 19,019 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000007001680c00 → java.lang.invoke.LambdaForm$MH.0x000000f00163f000` |
|  +885604.3% |   +8.648 GiB | <0.1% → 72.6% |    1 MiB → 8.65 GiB |      2 → 17,712 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001350000 → java.lang.invoke.LambdaForm$MH.0x000000f001329000` |
| +1586300.0% |   +7.745 GiB | <0.1% → 65.0% |  512 KiB → 7.75 GiB |      1 → 15,864 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070015e1400 → java.lang.invoke.LambdaForm$MH.0x000000f0017c7c00` |
|     +222.9% |   +5.922 GiB | 22.6% → 72.0% | 2.66 GiB → 8.58 GiB |  5,441 → 17,571 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000070012bdc00 → java.lang.invoke.LambdaForm$MH.0x000000f00128c800` |
|     +621.9% |   +5.578 GiB |  7.6% → 54.3% |  918 MiB → 6.48 GiB |  1,837 → 13,258 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070010abc00 → java.lang.invoke.LambdaForm$MH.0x000000f0010abc00` |
|  +288700.0% |   +1.409 GiB | <0.1% → 11.8% |  512 KiB → 1.41 GiB |       1 → 2,888 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070015d1400 → java.lang.invoke.LambdaForm$MH.0x000000f0017c8800` |
|   +15650.0% |   +1.069 GiB |   0.1% → 9.0% |    7 MiB → 1.08 GiB |      14 → 2,205 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001559400 → java.lang.invoke.LambdaForm$MH.0x000000f0017cd000` |
|   +14540.0% |   +1.064 GiB |   0.1% → 9.0% |  7.5 MiB → 1.07 GiB |      15 → 2,196 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001394400 → java.lang.invoke.LambdaForm$MH.0x000000f001337400` |
|       +5.4% | +620.998 MiB | 95.7% → 99.6% | 11.3 GiB → 11.9 GiB | 23,074 → 24,316 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070010d3800 → java.lang.invoke.LambdaForm$MH.0x000000f0010c6c00` |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

##### Standard library

|  Change |       Delta |             % |                Size |         Samples | Function                                         | Location                                                                                                |
| ------: | ----------: | ------------: | ------------------: | --------------: | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------- |
|  -92.6% | -10.856 GiB |  99.6% → 7.3% |  11.7 GiB → 890 MiB |  24,012 → 1,780 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070010c7000 → java.lang.invoke.LambdaForm$MH.0x000000f0010c7c00` |
| -100.0% | -10.828 GiB | 92.0% → <0.1% |  10.8 GiB → 512 KiB |      22,175 → 1 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070012b1800 → java.lang.invoke.LambdaForm$MH.0x000000f001282400` |
|  -92.3% | -10.103 GiB |  93.0% → 7.1% |  10.9 GiB → 867 MiB |  22,422 → 1,731 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070012b3c00 → java.lang.invoke.LambdaForm$MH.0x000000f00129cc00` |
| -100.0% |  -9.967 GiB | 84.7% → <0.1% |  9.97 GiB → 4.5 MiB |      20,422 → 9 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070015c5400 → java.lang.invoke.LambdaForm$MH.0x000000f0014ec800` |
| -100.0% |  -9.967 GiB | 84.7% → <0.1% |    9.97 GiB → 1 MiB |      20,415 → 2 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070015c8400 → java.lang.invoke.LambdaForm$MH.0x000000f0013f4c00` |
| -100.0% |  -9.967 GiB | 84.7% → <0.1% |    9.97 GiB → 1 MiB |      20,415 → 2 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070015c8000 → java.lang.invoke.LambdaForm$MH.0x000000f0015aa800` |
|  -82.6% |  -9.584 GiB | 98.6% → 16.9% | 11.6 GiB → 2.02 GiB |  23,754 → 4,128 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000700102b000 → java.lang.invoke.LambdaForm$MH.0x000000f0010dc400` |
| -100.0% |  -9.173 GiB | 78.0% → <0.1% |    9.17 GiB → 1 MiB |      18,789 → 2 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001661800 → java.lang.invoke.LambdaForm$MH.0x000000f0015a4800` |
|  -99.9% |  -9.168 GiB | 78.0% → <0.1% |    9.17 GiB → 6 MiB |     18,789 → 12 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001662000 → java.lang.invoke.LambdaForm$MH.0x000000f001536800` |
|  -99.9% |  -9.165 GiB |  78.0% → 0.1% |  9.17 GiB → 8.5 MiB |     18,789 → 17 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000007001662400 → java.lang.invoke.LambdaForm$MH.0x000000f001431c00` |
|  -76.3% |  -8.545 GiB | 95.2% → 22.3% | 11.2 GiB → 2.66 GiB |  22,940 → 5,439 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000007001188000 → java.lang.invoke.LambdaForm$MH.0x000000f0012a0800` |
|  -99.4% |  -8.376 GiB |  71.6% → 0.4% |   8.43 GiB → 54 MiB |    17,262 → 108 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000007001398c00 → java.lang.invoke.LambdaForm$MH.0x000000f001389000` |
| -100.0% |  -7.623 GiB | 64.8% → <0.1% |  7.63 GiB → 3.5 MiB |      15,619 → 7 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070017e9800 → java.lang.invoke.LambdaForm$MH.0x000000f0017bc800` |
|  -52.7% |  -6.176 GiB | 99.6% → 46.5% | 11.7 GiB → 5.55 GiB | 24,012 → 11,362 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070010c6800 → java.lang.invoke.LambdaForm$MH.0x000000f0010d3000` |
|  -96.6% |  -5.833 GiB |  51.3% → 1.7% |  6.04 GiB → 207 MiB |    12,359 → 415 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070010c8000 → java.lang.invoke.LambdaForm$MH.0x000000f0010c8800` |
|  -60.5% |  -3.274 GiB | 46.0% → 17.9% | 5.41 GiB → 2.13 GiB |  11,076 → 4,370 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070010d3400 → java.lang.invoke.LambdaForm$MH.0x000000f0010c8000` |
|  -73.3% |  -2.318 GiB |  26.9% → 7.1% |  3.17 GiB → 867 MiB |   6,481 → 1,732 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070012bd400 → java.lang.invoke.LambdaForm$MH.0x000000f00129b400` |
|  -71.6% |  -1.519 GiB |  18.0% → 5.1% |  2.12 GiB → 616 MiB |   4,342 → 1,233 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070010c8400 → java.lang.invoke.LambdaForm$MH.0x000000f0010c7000` |
|  -99.9% |   -1.48 GiB | 12.6% → <0.1% |    1.48 GiB → 1 MiB |       3,035 → 2 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070017ea400 → java.lang.invoke.LambdaForm$MH.0x000000f0014cf000` |
|  -98.5% |  -1.113 GiB |   9.6% → 0.1% | 1.13 GiB → 17.5 MiB |      2,316 → 35 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070017eec00 → java.lang.invoke.LambdaForm$MH.0x000000f0017c8c00` |

#### Callees

Callees with the largest change in contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f0010c6400`)

|    Change |       Delta |              % |                Size |     Samples | Callee                                  | Location                                             |
| --------: | ----------: | -------------: | ------------------: | ----------: | --------------------------------------- | ---------------------------------------------------- |
| +47582.5% | +11.849 GiB | 83.6% → 100.0% | 25.5 MiB → 11.9 GiB | 51 → 24,316 | `invokeVirtual(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |
|   removed |  -8.999 MiB |   29.5% → 0.0% |         9 MiB → 0 B |      18 → 0 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001084000` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f00109bc00`)

|  Change |       Delta |             % |           Size |    Samples | Callee                                            | Location                                             |
| ------: | ----------: | ------------: | -------------: | ---------: | ------------------------------------------------- | ---------------------------------------------------- |
|     new | +11.736 GiB | 0.0% → 100.0% | 0 B → 11.7 GiB | 0 → 24,034 | `reinvoke(Object, Object)`                        | `java.lang.invoke.LambdaForm$MH.0x000000f001099c00`  |
|     new | +21.999 MiB |   0.0% → 0.2% |   0 B → 22 MiB |     0 → 44 | `invoke(Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x000000f00109b800`  |
| removed | -13.499 MiB | 100.0% → 0.0% | 13.5 MiB → 0 B |     27 → 0 | `invokeInterface(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001095c00` |
|     new |  +4.499 MiB |  0.0% → <0.1% |  0 B → 4.5 MiB |      0 → 9 | `delegate(Object, Object)`                        | `java.lang.invoke.DelegatingMethodHandle$Holder`     |

##### `invoke(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f001188000`)

|  Change |        Delta |             % |           Size |    Samples | Callee                                                                                      | Location                                             |
| ------: | -----------: | ------------: | -------------: | ---------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|     new |  +11.323 GiB | 0.0% → 100.0% | 0 B → 11.3 GiB | 0 → 23,188 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000f0010d2000`  |
|     new |   +5.499 MiB |  0.0% → <0.1% |  0 B → 5.5 MiB |     0 → 11 | `collector(Object, Object, Object)`                                                         | `java.lang.invoke.LambdaForm$MH.0x000000f0010a1000`  |
| removed | -511.999 KiB | 100.0% → 0.0% |  512 KiB → 0 B |      1 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |

##### `invoke(Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f001298400`)

|  Change |        Delta |             % |           Size |    Samples | Callee                                                                                      | Location                                             |
| ------: | -----------: | ------------: | -------------: | ---------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|     new |  +11.391 GiB | 0.0% → 100.0% | 0 B → 11.4 GiB | 0 → 23,327 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000f001088800` |
| removed | -876.041 MiB | 100.0% → 0.0% |  876 MiB → 0 B |  1,750 → 0 | `invokeSpecial(Object, Object, Object, Object, Object)`                                     | `java.lang.invoke.LambdaForm$DMH.0x000000700118a800` |
|     new |   +2.999 MiB |  0.0% → <0.1% |    0 B → 3 MiB |      0 → 6 | `collector(Object, Object, Object, Object, Object)`                                         | `java.lang.invoke.LambdaForm$MH.0x000000f001293c00`  |

##### `invoke(Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f0015aa000`)

|  Change |        Delta |             % |           Size |    Samples | Callee                                                  | Location                                             |
| ------: | -----------: | ------------: | -------------: | ---------: | ------------------------------------------------------- | ---------------------------------------------------- |
|     new |  +10.076 GiB | 0.0% → 100.0% | 0 B → 10.1 GiB | 0 → 20,637 | `invokeSpecial(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000f00118a800` |
| removed | -511.999 KiB | 100.0% → 0.0% |  512 KiB → 0 B |      1 → 0 | `invokeVirtual(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000070013c5000` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f0015a9c00`)

|  Change |          Delta |             % |           Size |    Samples | Callee                                             | Location                                         |
| ------: | -------------: | ------------: | -------------: | ---------: | -------------------------------------------------- | ------------------------------------------------ |
|     new |    +10.076 GiB | 0.0% → 100.0% | 0 B → 10.1 GiB | 0 → 20,637 | `delegate(Object, Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |
| removed | -1,023.998 KiB | 100.0% → 0.0% |    1 MiB → 0 B |      2 → 0 | `delegate(Object, Object, Object)`                 | `java.lang.invoke.DelegatingMethodHandle$Holder` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f001292400`)

|  Change |        Delta |             % |           Size |    Samples | Callee                                             | Location                                            |
| ------: | -----------: | ------------: | -------------: | ---------: | -------------------------------------------------- | --------------------------------------------------- |
|     new |   +10.93 GiB | 0.0% → 100.0% | 0 B → 10.9 GiB | 0 → 22,384 | `reinvoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000f001189000` |
| removed | -593.541 MiB |  67.8% → 0.0% |  594 MiB → 0 B |  1,185 → 0 | `reinvoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070012b9000` |
| removed | -282.499 MiB |  32.2% → 0.0% |  282 MiB → 0 B |    565 → 0 | `delegate(Object, Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|     new |   +9.499 MiB |   0.0% → 0.1% |  0 B → 9.5 MiB |     0 → 19 | `delegate(Object, Object, Object, Object)`         | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|     new | +511.999 KiB |  0.0% → <0.1% |  0 B → 512 KiB |      0 → 1 | `invoke(Object, Object, Object, Object)`           | `java.lang.invoke.LambdaForm$MH.0x000000f001189c00` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f0015a7000`)

|  Change |        Delta |             % |           Size |    Samples | Callee                                  | Location                                     |
| ------: | -----------: | ------------: | -------------: | ---------: | --------------------------------------- | -------------------------------------------- |
|     new |  +10.082 GiB | 0.0% → 100.0% | 0 B → 10.1 GiB | 0 → 20,650 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |
| removed | -200.499 MiB | 100.0% → 0.0% |  200 MiB → 0 B |    401 → 0 | `invokeVirtual(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f0010d3400`)

|    Change |        Delta |              % |                Size |        Samples | Callee                             | Location                                                                                                |
| --------: | -----------: | -------------: | ------------------: | -------------: | ---------------------------------- | ------------------------------------------------------------------------------------------------------- |
|   +444.4% |   +9.301 GiB | 99.7% → 100.0% | 2.09 GiB → 11.4 GiB | 4,287 → 23,335 | `reinvoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010aa800 → java.lang.invoke.LambdaForm$MH.0x000000f0010aa800` |
| +15533.3% | +465.999 MiB |    0.1% → 4.0% |     3 MiB → 469 MiB |        6 → 938 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`                                                        |
|       new |  +12.499 MiB |    0.0% → 0.1% |      0 B → 12.5 MiB |         0 → 25 | `invoke(Object, Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x000000f0010ab000`                                                     |
|   removed |   -4.499 MiB |    0.2% → 0.0% |       4.5 MiB → 0 B |          9 → 0 | `invoke(Object, Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x00000070010ab000`                                                     |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f00163e400`)

|  Change |          Delta |             % |           Size |    Samples | Callee                                     | Location                                         |
| ------: | -------------: | ------------: | -------------: | ---------: | ------------------------------------------ | ------------------------------------------------ |
|     new |     +9.286 GiB | 0.0% → 100.0% | 0 B → 9.29 GiB | 0 → 19,019 | `delegate(Object, Object, Object)`         | `java.lang.invoke.DelegatingMethodHandle$Holder` |
| removed | -1,023.998 KiB | 100.0% → 0.0% |    1 MiB → 0 B |      2 → 0 | `delegate(Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f00163ec00`)

|  Change |      Delta |             % |           Size |    Samples | Callee                                     | Location                                         |
| ------: | ---------: | ------------: | -------------: | ---------: | ------------------------------------------ | ------------------------------------------------ |
|     new | +9.286 GiB | 0.0% → 100.0% | 0 B → 9.29 GiB | 0 → 19,019 | `delegate(Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |
| removed | -1.499 MiB | 100.0% → 0.0% |  1.5 MiB → 0 B |      3 → 0 | `delegate(Object, Object)`                 | `java.lang.invoke.DelegatingMethodHandle$Holder` |

##### `invoke(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f00163f000`)

|     Change |      Delta |      % |             Size |    Samples | Callee                                          | Location                                     |
| ---------: | ---------: | -----: | ---------------: | ---------: | ----------------------------------------------- | -------------------------------------------- |
| +475375.0% | +9.284 GiB | 100.0% | 2 MiB → 9.29 GiB | 4 → 19,019 | `invokeSpecial(Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f001329000`)

|  Change |        Delta |             % |           Size |    Samples | Callee                                     | Location                                            |
| ------: | -----------: | ------------: | -------------: | ---------: | ------------------------------------------ | --------------------------------------------------- |
|     new |   +8.646 GiB | 0.0% → 100.0% | 0 B → 8.65 GiB | 0 → 17,706 | `reinvoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f001189000` |
|     new |  +27.999 MiB |   0.0% → 0.3% |   0 B → 28 MiB |     0 → 56 | `delegate(Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|     new |   +7.999 MiB |   0.0% → 0.1% |    0 B → 8 MiB |     0 → 16 | `invoke(Object, Object, Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x000000f001189c00` |
| removed | -511.999 KiB |  50.0% → 0.0% |  512 KiB → 0 B |      1 → 0 | `reinvoke(Object, Object, long)`           | `java.lang.invoke.LambdaForm$MH.0x000000700134b000` |
| removed | -511.999 KiB |  50.0% → 0.0% |  512 KiB → 0 B |      1 → 0 | `delegate(Object, Object, long)`           | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f0017c7c00`)

|  Change |        Delta |             % |           Size |    Samples | Callee                                     | Location                                            |
| ------: | -----------: | ------------: | -------------: | ---------: | ------------------------------------------ | --------------------------------------------------- |
|     new |   +7.746 GiB | 0.0% → 100.0% | 0 B → 7.75 GiB | 0 → 15,864 | `delegate(Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
| removed | -511.999 KiB | 100.0% → 0.0% |  512 KiB → 0 B |      1 → 0 | `invoke(Object, Object, Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x0000007001189c00` |

##### `invoke(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f00128c800`)

| Change |        Delta |             % |               Size |       Samples | Callee                                            | Location                                             |
| -----: | -----------: | ------------: | -----------------: | ------------: | ------------------------------------------------- | ---------------------------------------------------- |
|    new |   +8.112 GiB |  0.0% → 94.5% |     0 B → 8.11 GiB |    0 → 16,613 | `invokeVirtual(Object, Object, Object, Object)`   | `java.lang.invoke.LambdaForm$DMH.0x000000f001328800` |
| -78.3% |   -2.081 GiB | 100.0% → 6.7% | 2.66 GiB → 590 MiB | 5,441 → 1,181 | `invokeSpecial(Object, Object, Object, Object)`   | `java.lang.invoke.DirectMethodHandle$Holder`         |
|    new | +478.999 MiB |   0.0% → 5.5% |      0 B → 479 MiB |       0 → 958 | `invokeInterface(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000f00128c400` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f0010abc00`)

|  Change |      Delta |             % |               Size |        Samples | Callee                             | Location                                                                                                |
| ------: | ---------: | ------------: | -----------------: | -------------: | ---------------------------------- | ------------------------------------------------------------------------------------------------------- |
| +676.1% | +5.601 GiB | 92.4% → 99.3% | 848 MiB → 6.43 GiB | 1,697 → 13,167 | `reinvoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010aa800 → java.lang.invoke.LambdaForm$MH.0x000000f0010aa800` |
|     new | +6.999 MiB |   0.0% → 0.1% |        0 B → 7 MiB |         0 → 14 | `invoke(Object, Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x000000f0010ab000`                                                     |
| removed | -4.499 MiB |   0.5% → 0.0% |      4.5 MiB → 0 B |          9 → 0 | `invoke(Object, Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x00000070010ab000`                                                     |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f0017c8800`)

|  Change |        Delta |             % |           Size |   Samples | Callee                             | Location                                            |
| ------: | -----------: | ------------: | -------------: | --------: | ---------------------------------- | --------------------------------------------------- |
|     new |    +1.41 GiB | 0.0% → 100.0% | 0 B → 1.41 GiB | 0 → 2,888 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
| removed | -511.999 KiB | 100.0% → 0.0% |  512 KiB → 0 B |     1 → 0 | `invoke(Object, Object)`           | `java.lang.invoke.LambdaForm$MH.0x000000700109b800` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f0017cd000`)

|    Change |      Delta |      % |             Size |    Samples | Callee                             | Location                                         |
| --------: | ---------: | -----: | ---------------: | ---------: | ---------------------------------- | ------------------------------------------------ |
| +15650.0% | +1.069 GiB | 100.0% | 7 MiB → 1.08 GiB | 14 → 2,205 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f001337400`)

|  Change |      Delta |            % |           Size |   Samples | Callee                                                     | Location                                            |
| ------: | ---------: | -----------: | -------------: | --------: | ---------------------------------------------------------- | --------------------------------------------------- |
|     new | +1.069 GiB | 0.0% → 99.7% | 0 B → 1.07 GiB | 0 → 2,190 | `reinvoke(Object, Object, Object, long)`                   | `java.lang.invoke.LambdaForm$MH.0x000000f001335c00` |
|     new | +6.499 MiB |  0.0% → 0.6% |  0 B → 6.5 MiB |    0 → 13 | `invoke(Object, Object, Object, long)`                     | `java.lang.invoke.LambdaForm$MH.0x000000f001336400` |
| removed | -4.499 MiB | 60.0% → 0.0% |  4.5 MiB → 0 B |     9 → 0 | `delegate(Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
| removed | -2.999 MiB | 40.0% → 0.0% |    3 MiB → 0 B |     6 → 0 | `reinvoke(Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070012ca000` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f0010c6c00`)

|  Change |          Delta |            % |                Size |         Samples | Callee                             | Location                                                                                                |
| ------: | -------------: | -----------: | ------------------: | --------------: | ---------------------------------- | ------------------------------------------------------------------------------------------------------- |
| +480.0% |     +2.214 GiB | 4.1% → 22.5% |  472 MiB → 2.68 GiB |     945 → 5,481 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`                                                        |
|   +5.4% |   +620.998 MiB |       100.0% | 11.3 GiB → 11.9 GiB | 23,074 → 24,316 | `reinvoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010aa800 → java.lang.invoke.LambdaForm$MH.0x000000f0010aa800` |
| removed |     -8.499 MiB |  0.1% → 0.0% |       8.5 MiB → 0 B |          17 → 0 | `invoke(Object, Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x00000070010ab000`                                                     |
|     new | +1,023.998 KiB | 0.0% → <0.1% |         0 B → 1 MiB |           0 → 2 | `invoke(Object, Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x000000f0010ab000`                                                     |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f0010c7c00`)

|  Change |          Delta |              % |               Size |        Samples | Callee                             | Location                                                                                                |
| ------: | -------------: | -------------: | -----------------: | -------------: | ---------------------------------- | ------------------------------------------------------------------------------------------------------- |
|  -93.6% |    -10.969 GiB | 100.0% → 87.0% | 11.7 GiB → 774 MiB | 24,012 → 1,548 | `reinvoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010aa800 → java.lang.invoke.LambdaForm$MH.0x000000f0010aa800` |
|  -95.8% |     -2.544 GiB |  22.7% → 12.9% | 2.66 GiB → 114 MiB |    5,441 → 229 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`                                                        |
|     new |     +6.999 MiB |    0.0% → 0.8% |        0 B → 7 MiB |         0 → 14 | `invoke(Object, Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x000000f0010ab000`                                                     |
| removed | -1,023.998 KiB |   <0.1% → 0.0% |        1 MiB → 0 B |          2 → 0 | `invoke(Object, Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x00000070010ab000`                                                     |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f001282400`)

|  Change |          Delta |             % |           Size |    Samples | Callee                                     | Location                                            |
| ------: | -------------: | ------------: | -------------: | ---------: | ------------------------------------------ | --------------------------------------------------- |
| removed |    -10.828 GiB | 100.0% → 0.0% | 10.8 GiB → 0 B | 22,175 → 0 | `reinvoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001189000` |
| removed |     -5.999 MiB |   0.1% → 0.0% |    6 MiB → 0 B |     12 → 0 | `invoke(Object, Object, Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x0000007001189c00` |
| removed | -1,023.998 KiB |  <0.1% → 0.0% |    1 MiB → 0 B |      2 → 0 | `delegate(Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|     new |   +511.999 KiB | 0.0% → 100.0% |  0 B → 512 KiB |      0 → 1 | `delegate(Object, Object, Object)`         | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `invoke(Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f00129cc00`)

|  Change |        Delta |             % |           Size |    Samples | Callee                                                  | Location                                             |
| ------: | -----------: | ------------: | -------------: | ---------: | ------------------------------------------------------- | ---------------------------------------------------- |
| removed |  -10.948 GiB | 100.0% → 0.0% | 10.9 GiB → 0 B | 22,421 → 0 | `invoke(Object, Object, Object, Object)`                | `java.lang.invoke.LambdaForm$MH.0x00000070010d2400`  |
|     new | +866.541 MiB | 0.0% → 100.0% |  0 B → 867 MiB |  0 → 1,731 | `invokeSpecial(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000f00118a800` |
| removed | -511.999 KiB |  <0.1% → 0.0% |  512 KiB → 0 B |      1 → 0 | `collector(Object, Object, Object, Object)`             | `java.lang.invoke.LambdaForm$MH.0x00000070010d2800`  |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f0014ec800`)

|  Change |      Delta |             % |           Size |    Samples | Callee                                  | Location                                     |
| ------: | ---------: | ------------: | -------------: | ---------: | --------------------------------------- | -------------------------------------------- |
| removed | -9.971 GiB | 100.0% → 0.0% | 9.97 GiB → 0 B | 20,422 → 0 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |
|     new | +4.499 MiB | 0.0% → 100.0% |  0 B → 4.5 MiB |      0 → 9 | `invokeVirtual(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `invoke(Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f0013f4c00`)

|  Change |      Delta |      % |             Size |    Samples | Callee                                                  | Location                                                                                                  |
| ------: | ---------: | -----: | ---------------: | ---------: | ------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| -100.0% | -9.967 GiB | 100.0% | 9.97 GiB → 1 MiB | 20,415 → 2 | `invokeSpecial(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000700118a800 → java.lang.invoke.LambdaForm$DMH.0x000000f00118a800` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f0015aa800`)

|  Change |          Delta |             % |           Size |    Samples | Callee                                             | Location                                         |
| ------: | -------------: | ------------: | -------------: | ---------: | -------------------------------------------------- | ------------------------------------------------ |
| removed |     -9.968 GiB | 100.0% → 0.0% | 9.97 GiB → 0 B | 20,415 → 0 | `delegate(Object, Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |
|     new | +1,023.998 KiB | 0.0% → 100.0% |    0 B → 1 MiB |      0 → 2 | `delegate(Object, Object, Object)`                 | `java.lang.invoke.DelegatingMethodHandle$Holder` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f0010dc400`)

|  Change |       Delta |             % |           Size |    Samples | Callee                             | Location                                            |
| ------: | ----------: | ------------: | -------------: | ---------: | ---------------------------------- | --------------------------------------------------- |
| removed | -11.599 GiB | 100.0% → 0.0% | 11.6 GiB → 0 B | 23,753 → 0 | `invokeVirtual(Object, Object)`    | `java.lang.invoke.DirectMethodHandle$Holder`        |
|     new |  +2.011 GiB |  0.0% → 99.8% | 0 B → 2.01 GiB |  0 → 4,119 | `reinvoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f0010aa800` |
| removed | -12.999 MiB |   0.1% → 0.0% |   13 MiB → 0 B |     26 → 0 | `invokeSpecial(Object, Object)`    | `java.lang.invoke.DirectMethodHandle$Holder`        |
|     new |  +4.999 MiB |   0.0% → 0.2% |    0 B → 5 MiB |     0 → 10 | `invoke(Object, Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x000000f0010ab000` |
|     new |  +3.499 MiB |   0.0% → 0.2% |  0 B → 3.5 MiB |      0 → 7 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f0015a4800`)

|  Change |      Delta |      % |             Size |    Samples | Callee                             | Location                                         |
| ------: | ---------: | -----: | ---------------: | ---------: | ---------------------------------- | ------------------------------------------------ |
| -100.0% | -9.173 GiB | 100.0% | 9.17 GiB → 1 MiB | 18,789 → 2 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f001536800`)

|  Change |      Delta |             % |           Size |    Samples | Callee                                     | Location                                         |
| ------: | ---------: | ------------: | -------------: | ---------: | ------------------------------------------ | ------------------------------------------------ |
| removed | -9.174 GiB | 100.0% → 0.0% | 9.17 GiB → 0 B | 18,789 → 0 | `delegate(Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |
|     new | +5.999 MiB | 0.0% → 100.0% |    0 B → 6 MiB |     0 → 12 | `delegate(Object, Object, Object)`         | `java.lang.invoke.DelegatingMethodHandle$Holder` |

##### `invoke(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f001431c00`)

|  Change |      Delta |             % |           Size |    Samples | Callee                                          | Location                                             |
| ------: | ---------: | ------------: | -------------: | ---------: | ----------------------------------------------- | ---------------------------------------------------- |
| removed | -9.174 GiB | 100.0% → 0.0% | 9.17 GiB → 0 B | 18,789 → 0 | `invokeSpecial(Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |
|     new | +8.499 MiB | 0.0% → 100.0% |  0 B → 8.5 MiB |     0 → 17 | `invokeSpecial(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000f001098800` |

##### `invoke(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f0012a0800`)

|  Change |       Delta |             % |           Size |    Samples | Callee                                          | Location                                            |
| ------: | ----------: | ------------: | -------------: | ---------: | ----------------------------------------------- | --------------------------------------------------- |
| removed | -11.201 GiB | 100.0% → 0.0% | 11.2 GiB → 0 B | 22,938 → 0 | `invoke(Object, Object, Object, Object)`        | `java.lang.invoke.LambdaForm$MH.0x00000070010d2400` |
|     new |  +2.656 GiB | 0.0% → 100.0% | 0 B → 2.66 GiB |  0 → 5,439 | `invokeSpecial(Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`        |
| removed |  -4.999 MiB |  <0.1% → 0.0% |    5 MiB → 0 B |     10 → 0 | `collector(Object, Object, Object)`             | `java.lang.invoke.LambdaForm$MH.0x00000070010a1000` |

##### `invoke(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f001389000`)

|  Change |       Delta |             % |           Size |    Samples | Callee                                                                                      | Location                                             |
| ------: | ----------: | ------------: | -------------: | ---------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed |  -8.426 GiB | 100.0% → 0.0% | 8.43 GiB → 0 B | 17,255 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |
|     new | +53.999 MiB | 0.0% → 100.0% |   0 B → 54 MiB |    0 → 108 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x000000f001328800` |
| removed |  -3.499 MiB |  <0.1% → 0.0% |  3.5 MiB → 0 B |      7 → 0 | `collector(Object, Object, Object, Object)`                                                 | `java.lang.invoke.LambdaForm$MH.0x00000070010d2800`  |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f0017bc800`)

|  Change |      Delta |             % |           Size |    Samples | Callee                                     | Location                                         |
| ------: | ---------: | ------------: | -------------: | ---------: | ------------------------------------------ | ------------------------------------------------ |
| removed | -7.626 GiB | 100.0% → 0.0% | 7.63 GiB → 0 B | 15,619 → 0 | `delegate(Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |
|     new | +3.499 MiB | 0.0% → 100.0% |  0 B → 3.5 MiB |      0 → 7 | `delegate(Object, Object, Object)`         | `java.lang.invoke.DelegatingMethodHandle$Holder` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f0010d3000`)

|  Change |       Delta |             % |           Size |    Samples | Callee                                   | Location                                            |
| ------: | ----------: | ------------: | -------------: | ---------: | ---------------------------------------- | --------------------------------------------------- |
| removed | -11.725 GiB | 100.0% → 0.0% | 11.7 GiB → 0 B | 24,012 → 0 | `invokeVirtual(Object, Object, Object)`  | `java.lang.invoke.DirectMethodHandle$Holder`        |
|     new |  +5.544 GiB |  0.0% → 99.9% | 0 B → 5.54 GiB | 0 → 11,354 | `invoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f0010d2000` |
|     new |  +7.499 MiB |   0.0% → 0.1% |  0 B → 7.5 MiB |     0 → 15 | `collector(Object, Object)`              | `java.lang.invoke.LambdaForm$MH.0x000000f001031800` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f0010c8800`)

|  Change |        Delta |            % |           Size |    Samples | Callee                                                                                      | Location                                             |
| ------: | -----------: | -----------: | -------------: | ---------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed |   -6.013 GiB | 99.6% → 0.0% | 6.01 GiB → 0 B | 12,314 → 0 | `reinvoke(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$MH.0x00000070010aa800`  |
|     new | +174.499 MiB | 0.0% → 84.1% |  0 B → 174 MiB |    0 → 349 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000f001088800` |
| removed |  -86.499 MiB |  1.4% → 0.0% | 86.5 MiB → 0 B |    173 → 0 | `delegate(Object, Object, Object)`                                                          | `java.lang.invoke.DelegatingMethodHandle$Holder`     |
|     new |  +32.999 MiB | 0.0% → 15.9% |   0 B → 33 MiB |     0 → 66 | `collector(Object, Object)`                                                                 | `java.lang.invoke.LambdaForm$MH.0x000000f001031800`  |
| removed |  -11.499 MiB |  0.2% → 0.0% | 11.5 MiB → 0 B |     23 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000070010ab000`  |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f0010c8000`)

|  Change |      Delta |             % |           Size |    Samples | Callee                                   | Location                                             |
| ------: | ---------: | ------------: | -------------: | ---------: | ---------------------------------------- | ---------------------------------------------------- |
| removed | -5.407 GiB | 100.0% → 0.0% | 5.41 GiB → 0 B | 11,073 → 0 | `invoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010d2400`  |
|     new | +2.132 GiB |  0.0% → 99.9% | 0 B → 2.13 GiB |  0 → 4,365 | `invokeSpecial(Object, Object, Object)`  | `java.lang.invoke.DirectMethodHandle$Holder`         |
| removed | -6.499 MiB |   0.1% → 0.0% |  6.5 MiB → 0 B |     13 → 0 | `collector(Object, Object)`              | `java.lang.invoke.LambdaForm$MH.0x0000007001031800`  |
|     new | +4.499 MiB |   0.0% → 0.2% |  0 B → 4.5 MiB |      0 → 9 | `invokeVirtual(Object, Object, Object)`  | `java.lang.invoke.LambdaForm$DMH.0x000000f001095800` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f00129b400`)

|  Change |        Delta |            % |           Size |   Samples | Callee                                             | Location                                            |
| ------: | -----------: | -----------: | -------------: | --------: | -------------------------------------------------- | --------------------------------------------------- |
| removed |    -2.09 GiB | 66.0% → 0.0% | 2.09 GiB → 0 B | 4,282 → 0 | `delegate(Object, Object, Object, Object)`         | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
| removed |   -1.348 GiB | 42.6% → 0.0% | 1.35 GiB → 0 B | 2,760 → 0 | `reinvoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000007001189000` |
|     new | +613.041 MiB | 0.0% → 70.7% |  0 B → 613 MiB | 0 → 1,224 | `reinvoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f001299c00` |
|     new | +253.999 MiB | 0.0% → 29.3% |  0 B → 254 MiB |   0 → 508 | `delegate(Object, Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f0010c7000`)

|  Change |        Delta |             % |           Size |   Samples | Callee                                    | Location                                             |
| ------: | -----------: | ------------: | -------------: | --------: | ----------------------------------------- | ---------------------------------------------------- |
| removed |    -2.12 GiB | 100.0% → 0.0% | 2.12 GiB → 0 B | 4,341 → 0 | `invokeSpecial(Object, Object, Object)`   | `java.lang.invoke.DirectMethodHandle$Holder`         |
|     new | +575.498 MiB |  0.0% → 93.3% |  0 B → 575 MiB | 0 → 1,151 | `invokeSpecial(Object, Object, Object)`   | `java.lang.invoke.LambdaForm$DMH.0x000000f001084000` |
|     new | +142.999 MiB |  0.0% → 23.2% |  0 B → 143 MiB |   0 → 286 | `invokeInterface(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000f001124800` |
|     new |  +23.499 MiB |   0.0% → 3.8% | 0 B → 23.5 MiB |    0 → 47 | `invokeVirtual(Object, Object, Object)`   | `java.lang.invoke.DirectMethodHandle$Holder`         |
| removed |   -2.999 MiB |   0.1% → 0.0% |    3 MiB → 0 B |     6 → 0 | `invokeVirtual(Object, Object, Object)`   | `java.lang.invoke.LambdaForm$DMH.0x0000007001095800` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f0014cf000`)

|  Change |          Delta |             % |           Size |   Samples | Callee                                     | Location                                         |
| ------: | -------------: | ------------: | -------------: | --------: | ------------------------------------------ | ------------------------------------------------ |
| removed |     -1.481 GiB | 100.0% → 0.0% | 1.48 GiB → 0 B | 3,035 → 0 | `delegate(Object, Object, Object)`         | `java.lang.invoke.DelegatingMethodHandle$Holder` |
|     new | +1,023.998 KiB | 0.0% → 100.0% |    0 B → 1 MiB |     0 → 2 | `delegate(Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f0017c8c00`)

|  Change |       Delta |             % |           Size |   Samples | Callee                             | Location                                         |
| ------: | ----------: | ------------: | -------------: | --------: | ---------------------------------- | ------------------------------------------------ |
| removed |   -1.13 GiB | 100.0% → 0.0% | 1.13 GiB → 0 B | 2,316 → 0 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |
|     new | +17.499 MiB | 0.0% → 100.0% | 0 B → 17.5 MiB |    0 → 35 | `delegate(Object, Object)`         | `java.lang.invoke.DelegatingMethodHandle$Holder` |

# Lock contention profile diff

Blocked 3.1ms (+0.03ms, +1.0%) over 46 contentions → 43 contentions (67.3µs → 72.7µs per contention).

| Category         | Change |   Delta |      % |  Time | Contentions |
| ---------------- | -----: | ------: | -----: | ----: | ----------: |
| Standard library |  +1.0% | +0.03ms | 100.0% | 3.1ms |     46 → 43 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time blocked directly in the function body, excluding callees.

##### Standard library

|  Change |   Delta |             % |          Time | Contentions | Function | Location                             |
| ------: | ------: | ------------: | ------------: | ----------: | -------- | ------------------------------------ |
| +158.1% | +0.62ms | 12.6% → 32.2% | 0.4ms → 1.0ms |     22 → 25 | `poll()` | `java.lang.ref.NativeReferenceQueue` |

#### Improvements

Functions with the largest decrease in time blocked directly in the function body, excluding callees.

##### Standard library

| Change |   Delta |             % |          Time | Contentions | Function             | Location                             |
| -----: | ------: | ------------: | ------------: | ----------: | -------------------- | ------------------------------------ |
| -21.6% | -0.59ms | 87.4% → 67.8% | 2.7ms → 2.1ms |     24 → 18 | `enqueue(Reference)` | `java.lang.ref.NativeReferenceQueue` |

#### Lines

Lines with the largest change in contribution to each function's self time.

##### `poll()` (`java.lang.ref.NativeReferenceQueue`)

|  Change |   Delta |      % |          Time | Contentions | Location                                |
| ------: | ------: | -----: | ------------: | ----------: | --------------------------------------- |
| +158.1% | +0.62ms | 100.0% | 0.4ms → 1.0ms |     22 → 25 | `java.lang.ref.NativeReferenceQueue:68` |

##### `enqueue(Reference)` (`java.lang.ref.NativeReferenceQueue`)

| Change |   Delta |      % |          Time | Contentions | Location                                |
| -----: | ------: | -----: | ------------: | ----------: | --------------------------------------- |
| -21.6% | -0.59ms | 100.0% | 2.7ms → 2.1ms |     24 → 18 | `java.lang.ref.NativeReferenceQueue:58` |

#### Callers

Callers with the largest change in contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `poll()` (`java.lang.ref.NativeReferenceQueue`)

|  Change |   Delta |      % |          Time | Contentions | Caller                    | Location                             |
| ------: | ------: | -----: | ------------: | ----------: | ------------------------- | ------------------------------------ |
| +158.1% | +0.62ms | 100.0% | 0.4ms → 1.0ms |     22 → 25 | `removeStaleReferences()` | `jdk.internal.util.ReferencedKeyMap` |

##### `enqueue(Reference)` (`java.lang.ref.NativeReferenceQueue`)

| Change |   Delta |      % |          Time | Contentions | Caller                 | Location                  |
| -----: | ------: | -----: | ------------: | ----------: | ---------------------- | ------------------------- |
| -21.6% | -0.59ms | 100.0% | 2.7ms → 2.1ms |     24 → 18 | `enqueueFromPending()` | `java.lang.ref.Reference` |

### Total time

#### Regressions

Functions with the largest increase in total time blocked in the function and all its callees.

##### Standard library

|  Change |   Delta |             % |          Time | Contentions | Function                                                                                         | Location                                                                                                  |
| ------: | ------: | ------------: | ------------: | ----------: | ------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------- |
| +623.1% | +0.87ms |  4.5% → 32.2% | 0.1ms → 1.0ms |      9 → 25 | `invoke(Object, Object)`                                                                         | `java.lang.invoke.LambdaForm$MH.0x00000070012bd400 → java.lang.invoke.LambdaForm$MH.0x000000f0010d3400`   |
| +417.6% | +0.81ms |  6.3% → 32.2% | 0.2ms → 1.0ms |     10 → 25 | `invoke(Object, Object, Object)`                                                                 | `java.lang.invoke.LambdaForm$MH.0x00000070010d3400 → java.lang.invoke.LambdaForm$MH.0x000000f0010c6400`   |
| +258.6% | +0.68ms |  8.5% → 30.3% | 0.3ms → 0.9ms |     14 → 20 | `setCallSiteTarget()`                                                                            | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector`                                                 |
| +206.8% | +0.68ms | 10.6% → 32.2% | 0.3ms → 1.0ms |     18 → 25 | `invokeVirtual(Object, Object, Object, Object)`                                                  | `java.lang.invoke.LambdaForm$DMH.0x00000070011eb000 → java.lang.invoke.LambdaForm$DMH.0x000000f001094400` |
| +204.3% | +0.67ms | 10.6% → 31.9% | 0.3ms → 1.0ms |     18 → 24 | `invoke(Object, Object, Object, Object)`                                                         | `java.lang.invoke.LambdaForm$MH.0x0000007001398c00 → java.lang.invoke.LambdaForm$MH.0x000000f0010d2000`   |
| +167.8% | +0.62ms | 11.9% → 31.7% | 0.4ms → 1.0ms |     21 → 23 | `selectMethod(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`                                                           |
| +158.1% | +0.62ms | 12.6% → 32.2% | 0.4ms → 1.0ms |     22 → 25 | `poll()`                                                                                         | `java.lang.ref.NativeReferenceQueue`                                                                      |
| +158.1% | +0.62ms | 12.6% → 32.2% | 0.4ms → 1.0ms |     22 → 25 | `removeStaleReferences()`                                                                        | `jdk.internal.util.ReferencedKeyMap`                                                                      |
| +158.1% | +0.62ms | 12.6% → 32.2% | 0.4ms → 1.0ms |     22 → 25 | `makeImpl(Class, Class[], boolean)`                                                              | `java.lang.invoke.MethodType`                                                                             |
| +158.1% | +0.62ms | 12.6% → 32.2% | 0.4ms → 1.0ms |     22 → 25 | `fallback(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])`     | `org.codehaus.groovy.vmplugin.v8.IndyInterface`                                                           |
| +158.1% | +0.62ms | 12.6% → 32.2% | 0.4ms → 1.0ms |     22 → 25 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`      | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800 → java.lang.invoke.LambdaForm$DMH.0x000000f001088800` |
| +158.1% | +0.62ms | 12.6% → 32.2% | 0.4ms → 1.0ms |     22 → 25 | `invokeExact_MT(Object, Object, Object)`                                                         | `java.lang.invoke.Invokers$Holder`                                                                        |
| +158.1% | +0.62ms | 12.6% → 32.2% | 0.4ms → 1.0ms |     22 → 25 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])`    | `org.codehaus.groovy.vmplugin.v8.IndyInterface`                                                           |
| +158.1% | +0.62ms | 12.6% → 32.2% | 0.4ms → 1.0ms |     22 → 25 | `guardWithCatch(Object, Object, Object, Object)`                                                 | `java.lang.invoke.LambdaForm$MH.0x00000070010d2c00 → java.lang.invoke.LambdaForm$MH.0x000000f0010d2800`   |
| +158.1% | +0.62ms | 12.6% → 32.2% | 0.4ms → 1.0ms |     22 → 25 | `guard(Object, Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$MH.0x0000007001189400 → java.lang.invoke.LambdaForm$MH.0x000000f001189400`   |
| +158.1% | +0.62ms | 12.6% → 32.2% | 0.4ms → 1.0ms |     22 → 25 | `invoke(Object, Object)`                                                                         | `java.lang.invoke.LambdaForm$MH.0x00000070012b1800 → java.lang.invoke.LambdaForm$MH.0x000000f0010c6c00`   |
| +158.1% | +0.62ms | 12.6% → 32.2% | 0.4ms → 1.0ms |     22 → 25 | `linkToCallSite(Object, Object, Object, Object)`                                                 | `java.lang.invoke.Invokers$Holder`                                                                        |
| +158.1% | +0.62ms | 12.6% → 32.2% | 0.4ms → 1.0ms |     22 → 25 | `invokeImpl(Object, Object[])`                                                                   | `jdk.internal.reflect.DirectMethodHandleAccessor`                                                         |
| +158.1% | +0.62ms | 12.6% → 32.2% | 0.4ms → 1.0ms |     22 → 25 | `invoke(Object, Object[])`                                                                       | `jdk.internal.reflect.DirectMethodHandleAccessor`                                                         |
| +158.1% | +0.62ms | 12.6% → 32.2% | 0.4ms → 1.0ms |     22 → 25 | `invoke(Object, Object[])`                                                                       | `java.lang.reflect.Method`                                                                                |

#### Improvements

Functions with the largest decrease in total time blocked in the function and all its callees.

|  Change |   Delta |             % |           Time | Contentions | Function                                            | Location                                                                                                |
| ------: | ------: | ------------: | -------------: | ----------: | --------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
|  -21.6% | -0.59ms | 87.4% → 67.8% |  2.7ms → 2.1ms |     24 → 18 | `enqueue(Reference)`                                | `java.lang.ref.NativeReferenceQueue`                                                                    |
|  -21.6% | -0.59ms | 87.4% → 67.8% |  2.7ms → 2.1ms |     24 → 18 | `enqueueFromPending()`                              | `java.lang.ref.Reference`                                                                               |
|  -21.6% | -0.59ms | 87.4% → 67.8% |  2.7ms → 2.1ms |     24 → 18 | `processPendingReferences()`                        | `java.lang.ref.Reference`                                                                               |
|  -21.6% | -0.59ms | 87.4% → 67.8% |  2.7ms → 2.1ms |     24 → 18 | `run()`                                             | `java.lang.ref.Reference$ReferenceHandler`                                                              |
|  -97.9% | -0.38ms |  12.6% → 0.3% |  0.4ms → 8.0µs |      22 → 1 | `invoke(Object, Object)`                            | `java.lang.invoke.LambdaForm$MH.0x000000700108e000 → java.lang.invoke.LambdaForm$MH.0x000000f001518800` |
|  -97.4% | -0.30ms |   9.9% → 0.3% |  0.3ms → 8.0µs |      16 → 1 | `invoke(Object, Object, Object)`                    | `java.lang.invoke.LambdaForm$MH.0x00000070015c5400 → java.lang.invoke.LambdaForm$MH.0x000000f001499c00` |
|  -79.1% | -0.22ms |   9.2% → 1.9% |  0.3ms → 0.1ms |      14 → 5 | `invoke(Object, Object)`                            | `java.lang.invoke.LambdaForm$MH.0x0000007001661800 → java.lang.invoke.LambdaForm$MH.0x000000f00109b400` |
|  -95.9% | -0.19ms |   6.3% → 0.3% |  0.2ms → 8.0µs |      10 → 1 | `invoke(Object, Object, Object)`                    | `java.lang.invoke.LambdaForm$MH.0x0000007001399000 → java.lang.invoke.LambdaForm$MH.0x000000f00144c000` |
|  -68.5% | -0.17ms |   8.1% → 2.5% |  0.2ms → 0.1ms |      11 → 2 | `invoke(Object, Object)`                            | `java.lang.invoke.LambdaForm$MH.0x00000070017e9800 → java.lang.invoke.LambdaForm$MH.0x000000f001338c00` |
|  -40.1% | -0.16ms |  12.6% → 7.5% |  0.4ms → 0.2ms |      22 → 5 | `invoke(Object, Object, Object)`                    | `java.lang.invoke.LambdaForm$MH.0x00000070010a1800 → java.lang.invoke.LambdaForm$MH.0x000000f001324400` |
| removed | -0.10ms |   3.1% → 0.0% |    0.1ms → 0ms |       3 → 0 | `visitBinaryExpression(BinaryExpression)`           | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                                                      |
|  -84.9% | -0.08ms |   3.2% → 0.5% | 0.1ms → 15.1µs |       7 → 1 | `invoke(Object, Object, Object, long)`              | `java.lang.invoke.LambdaForm$MH.0x0000007001399400 → java.lang.invoke.LambdaForm$MH.0x000000f00137c800` |
|  -84.9% | -0.08ms |   3.2% → 0.5% | 0.1ms → 15.1µs |       7 → 1 | `reinvoke(Object, Object, Object, long)`            | `java.lang.invoke.LambdaForm$MH.0x0000007001352c00 → java.lang.invoke.LambdaForm$MH.0x000000f001335c00` |
|  -84.9% | -0.08ms |   3.2% → 0.5% | 0.1ms → 15.1µs |       7 → 1 | `invoke(Object, Object, Object, long)`              | `java.lang.invoke.LambdaForm$MH.0x0000007001350800 → java.lang.invoke.LambdaForm$MH.0x000000f001333800` |
|  -84.9% | -0.08ms |   3.2% → 0.5% | 0.1ms → 15.1µs |       7 → 1 | `linkToCallSite(Object, Object, long, Object)`      | `java.lang.invoke.LambdaForm$MH.0x0000007001350c00 → java.lang.invoke.LambdaForm$MH.0x000000f001333c00` |
|  -15.3% | -0.06ms | 12.6% → 10.6% |  0.4ms → 0.3ms |     22 → 10 | `invoke(Object, Object, Object, Object)`            | `java.lang.invoke.LambdaForm$MH.0x00000070010d8800 → java.lang.invoke.LambdaForm$MH.0x000000f0012a0800` |
|  -71.8% | -0.05ms |   2.1% → 0.6% | 0.1ms → 18.8µs |       3 → 2 | `asSpreader(int, Class, int)`                       | `java.lang.invoke.MethodHandle`                                                                         |
|  -71.8% | -0.05ms |   2.1% → 0.6% | 0.1ms → 18.8µs |       3 → 2 | `asSpreader(Class, int)`                            | `java.lang.invoke.MethodHandle`                                                                         |
| removed | -0.05ms |   1.5% → 0.0% |   46.5µs → 0ms |       1 → 0 | `visitDeclarationExpression(DeclarationExpression)` | `org.codehaus.groovy.ast.CodeVisitorSupport`                                                            |
| removed | -0.05ms |   1.5% → 0.0% |   46.5µs → 0ms |       1 → 0 | `visitDeclarationExpression(DeclarationExpression)` | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                                                       |

##### Standard library

|  Change |   Delta |             % |           Time | Contentions | Function                                            | Location                                                                                                |
| ------: | ------: | ------------: | -------------: | ----------: | --------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
|  -21.6% | -0.59ms | 87.4% → 67.8% |  2.7ms → 2.1ms |     24 → 18 | `enqueue(Reference)`                                | `java.lang.ref.NativeReferenceQueue`                                                                    |
|  -21.6% | -0.59ms | 87.4% → 67.8% |  2.7ms → 2.1ms |     24 → 18 | `enqueueFromPending()`                              | `java.lang.ref.Reference`                                                                               |
|  -21.6% | -0.59ms | 87.4% → 67.8% |  2.7ms → 2.1ms |     24 → 18 | `processPendingReferences()`                        | `java.lang.ref.Reference`                                                                               |
|  -21.6% | -0.59ms | 87.4% → 67.8% |  2.7ms → 2.1ms |     24 → 18 | `run()`                                             | `java.lang.ref.Reference$ReferenceHandler`                                                              |
|  -97.9% | -0.38ms |  12.6% → 0.3% |  0.4ms → 8.0µs |      22 → 1 | `invoke(Object, Object)`                            | `java.lang.invoke.LambdaForm$MH.0x000000700108e000 → java.lang.invoke.LambdaForm$MH.0x000000f001518800` |
|  -97.4% | -0.30ms |   9.9% → 0.3% |  0.3ms → 8.0µs |      16 → 1 | `invoke(Object, Object, Object)`                    | `java.lang.invoke.LambdaForm$MH.0x00000070015c5400 → java.lang.invoke.LambdaForm$MH.0x000000f001499c00` |
|  -79.1% | -0.22ms |   9.2% → 1.9% |  0.3ms → 0.1ms |      14 → 5 | `invoke(Object, Object)`                            | `java.lang.invoke.LambdaForm$MH.0x0000007001661800 → java.lang.invoke.LambdaForm$MH.0x000000f00109b400` |
|  -95.9% | -0.19ms |   6.3% → 0.3% |  0.2ms → 8.0µs |      10 → 1 | `invoke(Object, Object, Object)`                    | `java.lang.invoke.LambdaForm$MH.0x0000007001399000 → java.lang.invoke.LambdaForm$MH.0x000000f00144c000` |
|  -68.5% | -0.17ms |   8.1% → 2.5% |  0.2ms → 0.1ms |      11 → 2 | `invoke(Object, Object)`                            | `java.lang.invoke.LambdaForm$MH.0x00000070017e9800 → java.lang.invoke.LambdaForm$MH.0x000000f001338c00` |
|  -40.1% | -0.16ms |  12.6% → 7.5% |  0.4ms → 0.2ms |      22 → 5 | `invoke(Object, Object, Object)`                    | `java.lang.invoke.LambdaForm$MH.0x00000070010a1800 → java.lang.invoke.LambdaForm$MH.0x000000f001324400` |
|  -84.9% | -0.08ms |   3.2% → 0.5% | 0.1ms → 15.1µs |       7 → 1 | `invoke(Object, Object, Object, long)`              | `java.lang.invoke.LambdaForm$MH.0x0000007001399400 → java.lang.invoke.LambdaForm$MH.0x000000f00137c800` |
|  -84.9% | -0.08ms |   3.2% → 0.5% | 0.1ms → 15.1µs |       7 → 1 | `reinvoke(Object, Object, Object, long)`            | `java.lang.invoke.LambdaForm$MH.0x0000007001352c00 → java.lang.invoke.LambdaForm$MH.0x000000f001335c00` |
|  -84.9% | -0.08ms |   3.2% → 0.5% | 0.1ms → 15.1µs |       7 → 1 | `invoke(Object, Object, Object, long)`              | `java.lang.invoke.LambdaForm$MH.0x0000007001350800 → java.lang.invoke.LambdaForm$MH.0x000000f001333800` |
|  -84.9% | -0.08ms |   3.2% → 0.5% | 0.1ms → 15.1µs |       7 → 1 | `linkToCallSite(Object, Object, long, Object)`      | `java.lang.invoke.LambdaForm$MH.0x0000007001350c00 → java.lang.invoke.LambdaForm$MH.0x000000f001333c00` |
|  -15.3% | -0.06ms | 12.6% → 10.6% |  0.4ms → 0.3ms |     22 → 10 | `invoke(Object, Object, Object, Object)`            | `java.lang.invoke.LambdaForm$MH.0x00000070010d8800 → java.lang.invoke.LambdaForm$MH.0x000000f0012a0800` |
|  -71.8% | -0.05ms |   2.1% → 0.6% | 0.1ms → 18.8µs |       3 → 2 | `asSpreader(int, Class, int)`                       | `java.lang.invoke.MethodHandle`                                                                         |
|  -71.8% | -0.05ms |   2.1% → 0.6% | 0.1ms → 18.8µs |       3 → 2 | `asSpreader(Class, int)`                            | `java.lang.invoke.MethodHandle`                                                                         |
| removed | -0.05ms |   1.5% → 0.0% |   46.5µs → 0ms |       1 → 0 | `visitDeclarationExpression(DeclarationExpression)` | `org.codehaus.groovy.ast.CodeVisitorSupport`                                                            |
| removed | -0.05ms |   1.5% → 0.0% |   46.5µs → 0ms |       1 → 0 | `visitDeclarationExpression(DeclarationExpression)` | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                                                       |
| removed | -0.05ms |   1.5% → 0.0% |   46.5µs → 0ms |       1 → 0 | `visit(GroovyCodeVisitor)`                          | `org.codehaus.groovy.ast.expr.DeclarationExpression`                                                    |

#### Callees

Callees with the largest change in contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f0010d3400`)

|  Change |   Delta |             % |        Time | Contentions | Callee                                     | Location                                            |
| ------: | ------: | ------------: | ----------: | ----------: | ------------------------------------------ | --------------------------------------------------- |
|     new | +1.01ms | 0.0% → 100.0% | 0ms → 1.0ms |      0 → 25 | `reinvoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000f0010aa800` |
| removed | -0.08ms |  59.0% → 0.0% | 0.1ms → 0ms |       6 → 0 | `reinvoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001189000` |
| removed | -0.06ms |  41.0% → 0.0% | 0.1ms → 0ms |       3 → 0 | `delegate(Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f0010c6400`)

|  Change |   Delta |             % |        Time | Contentions | Callee                                   | Location                                            |
| ------: | ------: | ------------: | ----------: | ----------: | ---------------------------------------- | --------------------------------------------------- |
|     new | +1.01ms | 0.0% → 100.0% | 0ms → 1.0ms |      0 → 25 | `invokeVirtual(Object, Object, Object)`  | `java.lang.invoke.DirectMethodHandle$Holder`        |
| removed | -0.19ms | 100.0% → 0.0% | 0.2ms → 0ms |      10 → 0 | `invoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010d2400` |

##### `setCallSiteTarget()` (`org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector`)

|   Change |   Delta |             % |            Time | Contentions | Callee                                    | Location                                                    |
| -------: | ------: | ------------: | --------------: | ----------: | ----------------------------------------- | ----------------------------------------------------------- |
|  +272.9% | +0.35ms | 48.7% → 50.6% |   0.1ms → 0.5ms |      7 → 13 | `setGuards(Object)`                       | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector`   |
| +2246.1% | +0.34ms |  5.7% → 37.6% |  15.2µs → 0.4ms |       1 → 3 | `setHandleForMetaMethod()`                | `org.codehaus.groovy.vmplugin.v8.Selector$PropertySelector` |
|   -85.0% | -0.09ms |  38.1% → 1.6% |  0.1ms → 15.1µs |       5 → 1 | `setHandleForMetaMethod()`                | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector`   |
|      new | +0.05ms |   0.0% → 5.3% |    0ms → 49.7µs |       0 → 1 | `setMetaClassCallHandleIfNeeded(boolean)` | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector`   |
|  +137.5% | +0.03ms |   7.4% → 4.9% | 19.5µs → 46.4µs |       1 → 2 | `addExceptionHandler()`                   | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector`   |

##### `invokeVirtual(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000f001094400`)

|  Change |   Delta |             % |        Time | Contentions | Callee                                     | Location                                       |
| ------: | ------: | ------------: | ----------: | ----------: | ------------------------------------------ | ---------------------------------------------- |
|     new | +0.66ms |  0.0% → 65.3% | 0ms → 0.7ms |      0 → 22 | `collectViolations(SourceCode, RuleSet)`   | `org.codenarc.analyzer.AbstractSourceAnalyzer` |
|     new | +0.66ms |  0.0% → 65.3% | 0ms → 0.7ms |      0 → 22 | `doMethodInvoke(Object, Object[])`         | `org.codehaus.groovy.runtime.dgm$1076`         |
|     new | +0.57ms |  0.0% → 57.1% | 0ms → 0.6ms |       0 → 7 | `doMethodInvoke(Object, Object[])`         | `org.codehaus.groovy.runtime.dgm$251`          |
|     new | +0.39ms |  0.0% → 38.8% | 0ms → 0.4ms |       0 → 5 | `doMethodInvoke(Object, Object[])`         | `org.codehaus.groovy.runtime.dgm$207`          |
| removed | -0.33ms | 100.0% → 0.0% | 0.3ms → 0ms |      18 → 0 | `measureRuleProcessingTime(Rule, Closure)` | `org.codenarc.analyzer.AbstractSourceAnalyzer` |

##### `invoke(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f0010d2000`)

|  Change |   Delta |             % |        Time | Contentions | Callee                                                                                      | Location                                             |
| ------: | ------: | ------------: | ----------: | ----------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|     new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |      0 → 24 | `invokeInterface(Object, Object, Object, Object, Object)`                                   | `java.lang.invoke.LambdaForm$DMH.0x000000f001095000` |
| removed | -0.33ms | 100.0% → 0.0% | 0.3ms → 0ms |      18 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |

##### `selectMethod(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

|  Change |   Delta |             % |          Time | Contentions | Callee                                                                                       | Location                                        |
| ------: | ------: | ------------: | ------------: | ----------: | -------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| +118.0% | +0.41ms | 93.9% → 76.4% | 0.3ms → 0.8ms |     19 → 18 | `invokeExact_MT(Object, Object, Object)`                                                     | `java.lang.invoke.Invokers$Holder`              |
|  +68.2% | +0.19ms | 76.7% → 48.2% | 0.3ms → 0.5ms |     16 → 13 | `fallback(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |

##### `removeStaleReferences()` (`jdk.internal.util.ReferencedKeyMap`)

|  Change |   Delta |      % |          Time | Contentions | Callee   | Location                             |
| ------: | ------: | -----: | ------------: | ----------: | -------- | ------------------------------------ |
| +158.1% | +0.62ms | 100.0% | 0.4ms → 1.0ms |     22 → 25 | `poll()` | `java.lang.ref.NativeReferenceQueue` |

##### `makeImpl(Class, Class[], boolean)` (`java.lang.invoke.MethodType`)

|  Change |   Delta |             % |           Time | Contentions | Callee                 | Location                             |
| ------: | ------: | ------------: | -------------: | ----------: | ---------------------- | ------------------------------------ |
| +148.1% | +0.56ms | 97.1% → 93.4% |  0.4ms → 0.9ms |     21 → 22 | `get(Object)`          | `jdk.internal.util.ReferencedKeySet` |
| +498.1% | +0.06ms |   2.9% → 6.6% | 11.2µs → 0.1ms |       1 → 3 | `intern(Object)`       | `jdk.internal.util.ReferencedKeySet` |
| removed | -0.02ms |   4.1% → 0.0% |   15.8µs → 0ms |       1 → 0 | `findForm(MethodType)` | `java.lang.invoke.MethodTypeForm`    |

##### `fallback(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

|  Change |   Delta |             % |           Time | Contentions | Callee                   | Location                                                  |
| ------: | ------: | ------------: | -------------: | ----------: | ------------------------ | --------------------------------------------------------- |
| +258.6% | +0.68ms | 67.7% → 94.1% |  0.3ms → 0.9ms |     14 → 20 | `setCallSiteTarget()`    | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |
|  -71.8% | -0.05ms |  17.1% → 1.9% | 0.1ms → 18.8µs |       3 → 2 | `asSpreader(Class, int)` | `java.lang.invoke.MethodHandle`                           |
|  -31.4% | -0.02ms |  15.2% → 4.0% | 0.1ms → 40.6µs |       5 → 3 | `setCallSiteTarget()`    | `org.codehaus.groovy.vmplugin.v8.Selector$CastSelector`   |

##### `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000f001088800`)

|  Change |   Delta |             % |          Time | Contentions | Callee                                                                                           | Location                                        |
| ------: | ------: | ------------: | ------------: | ----------: | ------------------------------------------------------------------------------------------------ | ----------------------------------------------- |
| +167.8% | +0.62ms | 94.9% → 98.5% | 0.4ms → 1.0ms |     21 → 23 | `selectMethod(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |
| +158.1% | +0.62ms |        100.0% | 0.4ms → 1.0ms |     22 → 25 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])`    | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |

##### `invokeExact_MT(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|  Change |   Delta |              % |          Time | Contentions | Callee                   | Location                                                                                                |
| ------: | ------: | -------------: | ------------: | ----------: | ------------------------ | ------------------------------------------------------------------------------------------------------- |
|     new | +1.01ms |  0.0% → 100.0% |   0ms → 1.0ms |      0 → 25 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f00109bc00`                                                     |
| +623.1% | +0.87ms | 35.7% → 100.0% | 0.1ms → 1.0ms |      9 → 25 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070012bd400 → java.lang.invoke.LambdaForm$MH.0x000000f0010d3400` |
| +158.1% | +0.62ms |         100.0% | 0.4ms → 1.0ms |     22 → 25 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070012b1800 → java.lang.invoke.LambdaForm$MH.0x000000f0010c6c00` |
| removed | -0.39ms |  100.0% → 0.0% |   0.4ms → 0ms |      22 → 0 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010d3800`                                                     |
| removed | -0.39ms |  100.0% → 0.0% |   0.4ms → 0ms |      22 → 0 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000700109bc00`                                                     |

##### `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

|  Change |   Delta |             % |          Time | Contentions | Callee                                                  | Location                                        |
| ------: | ------: | ------------: | ------------: | ----------: | ------------------------------------------------------- | ----------------------------------------------- |
| +158.1% | +0.62ms |        100.0% | 0.4ms → 1.0ms |     22 → 25 | `invokeExact_MT(Object, Object, Object)`                | `java.lang.invoke.Invokers$Holder`              |
| +399.1% | +0.42ms | 27.2% → 52.5% | 0.1ms → 0.5ms |      6 → 12 | `doWithCallSite(MutableCallSite, Object[], BiFunction)` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |

##### `guardWithCatch(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f0010d2800`)

|  Change |   Delta |             % |        Time | Contentions | Callee                                          | Location                                             |
| ------: | ------: | ------------: | ----------: | ----------: | ----------------------------------------------- | ---------------------------------------------------- |
|     new | +1.00ms |  0.0% → 99.2% | 0ms → 1.0ms |      0 → 24 | `invoke(Object, Object, Object, Object)`        | `java.lang.invoke.LambdaForm$MH.0x000000f001188000`  |
|     new | +0.66ms |  0.0% → 65.3% | 0ms → 0.7ms |      0 → 22 | `invokeVirtual(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000f001094400` |
|     new | +0.42ms |  0.0% → 42.2% | 0ms → 0.4ms |      0 → 17 | `invoke(Object, Object, Object, Object)`        | `java.lang.invoke.LambdaForm$MH.0x000000f00128c800`  |
| removed | -0.39ms | 100.0% → 0.0% | 0.4ms → 0ms |      22 → 0 | `invokeVirtual(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001094400` |
| removed | -0.39ms | 100.0% → 0.0% | 0.4ms → 0ms |      22 → 0 | `invoke(Object, Object, Object, Object)`        | `java.lang.invoke.LambdaForm$MH.0x0000007001188000`  |

##### `guard(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f001189400`)

|  Change |   Delta |              % |          Time | Contentions | Callee                                     | Location                                                                                                |
| ------: | ------: | -------------: | ------------: | ----------: | ------------------------------------------ | ------------------------------------------------------------------------------------------------------- |
| +148.3% | +0.46ms |  79.0% → 76.0% | 0.3ms → 0.8ms |     16 → 19 | `delegate(Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`                                                        |
|  +70.6% | +0.28ms | 100.0% → 66.1% | 0.4ms → 0.7ms |     22 → 23 | `reinvoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001189000 → java.lang.invoke.LambdaForm$MH.0x000000f001189000` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f0010c6c00`)

|  Change |   Delta |             % |        Time | Contentions | Callee                                     | Location                                            |
| ------: | ------: | ------------: | ----------: | ----------: | ------------------------------------------ | --------------------------------------------------- |
|     new | +1.01ms | 0.0% → 100.0% | 0ms → 1.0ms |      0 → 25 | `reinvoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000f0010aa800` |
|     new | +0.44ms |  0.0% → 43.5% | 0ms → 0.4ms |       0 → 7 | `delegate(Object, Object, Object)`         | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
| removed | -0.39ms | 100.0% → 0.0% | 0.4ms → 0ms |      22 → 0 | `reinvoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001189000` |

##### `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|  Change |   Delta |             % |        Time | Contentions | Callee                                   | Location                                            |
| ------: | ------: | ------------: | ----------: | ----------: | ---------------------------------------- | --------------------------------------------------- |
|     new | +0.66ms |  0.0% → 66.1% | 0ms → 0.7ms |      0 → 23 | `invoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f0010d8400` |
| removed | -0.39ms | 100.0% → 0.0% | 0.4ms → 0ms |      22 → 0 | `invoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010d8800` |
|     new | +0.34ms |  0.0% → 33.9% | 0ms → 0.3ms |       0 → 2 | `guard(Object, Object, Object, Object)`  | `java.lang.invoke.LambdaForm$MH.0x000000f001189400` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|  Change |   Delta |              % |          Time | Contentions | Callee                                                           | Location                                                                                                |
| ------: | ------: | -------------: | ------------: | ----------: | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| +158.1% | +0.62ms |         100.0% | 0.4ms → 1.0ms |     22 → 25 | `invokeExact_MT(Object, Object, Object, Object)`                 | `java.lang.invoke.Invokers$Holder`                                                                      |
| +155.9% | +0.61ms | 100.0% → 99.2% | 0.4ms → 1.0ms |     22 → 24 | `invokeExact_MT(Object, Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000007001120c00 → java.lang.invoke.LambdaForm$MH.0x000000f001120c00` |
|  +68.5% | +0.27ms | 100.0% → 65.3% | 0.4ms → 0.7ms |          22 | `invokeExact_MT(Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000700103c000 → java.lang.invoke.LambdaForm$MH.0x000000f00103c000` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|  Change |   Delta |      % |          Time | Contentions | Callee                         | Location                                          |
| ------: | ------: | -----: | ------------: | ----------: | ------------------------------ | ------------------------------------------------- |
| +158.1% | +0.62ms | 100.0% | 0.4ms → 1.0ms |     22 → 25 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

|  Change |   Delta |      % |          Time | Contentions | Callee                     | Location                                          |
| ------: | ------: | -----: | ------------: | ----------: | -------------------------- | ------------------------------------------------- |
| +158.1% | +0.62ms | 100.0% | 0.4ms → 1.0ms |     22 → 25 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `enqueueFromPending()` (`java.lang.ref.Reference`)

| Change |   Delta |      % |          Time | Contentions | Callee               | Location                             |
| -----: | ------: | -----: | ------------: | ----------: | -------------------- | ------------------------------------ |
| -21.6% | -0.59ms | 100.0% | 2.7ms → 2.1ms |     24 → 18 | `enqueue(Reference)` | `java.lang.ref.NativeReferenceQueue` |

##### `processPendingReferences()` (`java.lang.ref.Reference`)

| Change |   Delta |      % |          Time | Contentions | Callee                 | Location                  |
| -----: | ------: | -----: | ------------: | ----------: | ---------------------- | ------------------------- |
| -21.6% | -0.59ms | 100.0% | 2.7ms → 2.1ms |     24 → 18 | `enqueueFromPending()` | `java.lang.ref.Reference` |

##### `run()` (`java.lang.ref.Reference$ReferenceHandler`)

| Change |   Delta |      % |          Time | Contentions | Callee                       | Location                  |
| -----: | ------: | -----: | ------------: | ----------: | ---------------------------- | ------------------------- |
| -21.6% | -0.59ms | 100.0% | 2.7ms → 2.1ms |     24 → 18 | `processPendingReferences()` | `java.lang.ref.Reference` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f001518800`)

|  Change |   Delta |             % |        Time | Contentions | Callee                                                                                      | Location                                             |
| ------: | ------: | ------------: | ----------: | ----------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed | -0.39ms | 100.0% → 0.0% | 0.4ms → 0ms |      22 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |
|     new | +0.01ms | 0.0% → 100.0% | 0ms → 8.0µs |       0 → 1 | `delegate(Object, Object, Object)`                                                          | `java.lang.invoke.DelegatingMethodHandle$Holder`     |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f001499c00`)

|  Change |   Delta |             % |        Time | Contentions | Callee                                  | Location                                             |
| ------: | ------: | ------------: | ----------: | ----------: | --------------------------------------- | ---------------------------------------------------- |
| removed | -0.31ms | 100.0% → 0.0% | 0.3ms → 0ms |      16 → 0 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |
|     new | +0.01ms | 0.0% → 100.0% | 0ms → 8.0µs |       0 → 1 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000f001084000` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f00109b400`)

|  Change |   Delta |             % |        Time | Contentions | Callee                                                                                      | Location                                             |
| ------: | ------: | ------------: | ----------: | ----------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed | -0.28ms | 100.0% → 0.0% | 0.3ms → 0ms |      14 → 0 | `delegate(Object, Object, Object)`                                                          | `java.lang.invoke.DelegatingMethodHandle$Holder`     |
|     new | +0.06ms | 0.0% → 100.0% | 0ms → 0.1ms |       0 → 5 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000f001088800` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f00144c000`)

| Change |   Delta |      % |          Time | Contentions | Callee                                                                                      | Location                                                                                                  |
| -----: | ------: | -----: | ------------: | ----------: | ------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| -95.9% | -0.19ms | 100.0% | 0.2ms → 8.0µs |      10 → 1 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800 → java.lang.invoke.LambdaForm$DMH.0x000000f001088800` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f001338c00`)

|  Change |   Delta |             % |        Time | Contentions | Callee                                     | Location                                            |
| ------: | ------: | ------------: | ----------: | ----------: | ------------------------------------------ | --------------------------------------------------- |
| removed | -0.25ms | 100.0% → 0.0% | 0.2ms → 0ms |      11 → 0 | `delegate(Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|     new | +0.08ms | 0.0% → 100.0% | 0ms → 0.1ms |       0 → 2 | `reinvoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f001189000` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f001324400`)

|  Change |   Delta |             % |        Time | Contentions | Callee                                                                                      | Location                                             |
| ------: | ------: | ------------: | ----------: | ----------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed | -0.39ms | 100.0% → 0.0% | 0.4ms → 0ms |      22 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |
|     new | +0.23ms | 0.0% → 100.0% | 0ms → 0.2ms |       0 → 5 | `invokeSpecial(Object, Object, Object)`                                                     | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### `visitBinaryExpression(BinaryExpression)` (`org.codenarc.rule.dry.DuplicateLiteralAstVisitor`)

|  Change |   Delta |             % |        Time | Contentions | Callee                                   | Location                           |
| ------: | ------: | ------------: | ----------: | ----------: | ---------------------------------------- | ---------------------------------- |
| removed | -0.10ms | 100.0% → 0.0% | 0.1ms → 0ms |       3 → 0 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invoke(Object, Object, Object, long)` (`java.lang.invoke.LambdaForm$MH.0x000000f00137c800`)

| Change |   Delta |      % |           Time | Contentions | Callee                                                                                      | Location                                                                                                  |
| -----: | ------: | -----: | -------------: | ----------: | ------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| -84.9% | -0.08ms | 100.0% | 0.1ms → 15.1µs |       7 → 1 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800 → java.lang.invoke.LambdaForm$DMH.0x000000f001088800` |

##### `reinvoke(Object, Object, Object, long)` (`java.lang.invoke.LambdaForm$MH.0x000000f001335c00`)

| Change |   Delta |      % |           Time | Contentions | Callee                                 | Location                                                                                                |
| -----: | ------: | -----: | -------------: | ----------: | -------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| -84.9% | -0.08ms | 100.0% | 0.1ms → 15.1µs |       7 → 1 | `invoke(Object, Object, Object, long)` | `java.lang.invoke.LambdaForm$MH.0x0000007001399400 → java.lang.invoke.LambdaForm$MH.0x000000f00137c800` |

##### `invoke(Object, Object, Object, long)` (`java.lang.invoke.LambdaForm$MH.0x000000f001333800`)

| Change |   Delta |      % |           Time | Contentions | Callee                                                                                      | Location                                                                                                  |
| -----: | ------: | -----: | -------------: | ----------: | ------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| -84.9% | -0.08ms | 100.0% | 0.1ms → 15.1µs |       7 → 1 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800 → java.lang.invoke.LambdaForm$DMH.0x000000f001088800` |

##### `linkToCallSite(Object, Object, long, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f001333c00`)

| Change |   Delta |      % |           Time | Contentions | Callee                                 | Location                                                                                                |
| -----: | ------: | -----: | -------------: | ----------: | -------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| -84.9% | -0.08ms | 100.0% | 0.1ms → 15.1µs |       7 → 1 | `invoke(Object, Object, Object, long)` | `java.lang.invoke.LambdaForm$MH.0x0000007001350800 → java.lang.invoke.LambdaForm$MH.0x000000f001333800` |

##### `invoke(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f0012a0800`)

|  Change |   Delta |             % |        Time | Contentions | Callee                                                                                      | Location                                             |
| ------: | ------: | ------------: | ----------: | ----------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed | -0.39ms | 100.0% → 0.0% | 0.4ms → 0ms |      22 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |
|     new | +0.33ms | 0.0% → 100.0% | 0ms → 0.3ms |      0 → 10 | `invokeSpecial(Object, Object, Object, Object)`                                             | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### `asSpreader(int, Class, int)` (`java.lang.invoke.MethodHandle`)

|  Change |   Delta |              % |           Time | Contentions | Callee                                     | Location                        |
| ------: | ------: | -------------: | -------------: | ----------: | ------------------------------------------ | ------------------------------- |
|  -69.1% | -0.04ms | 91.2% → 100.0% | 0.1ms → 18.8µs |           2 | `replaceParameterTypes(int, int, Class[])` | `java.lang.invoke.MethodType`   |
| removed | -0.01ms |    8.8% → 0.0% |    5.8µs → 0ms |       1 → 0 | `asType(MethodType)`                       | `java.lang.invoke.MethodHandle` |

##### `asSpreader(Class, int)` (`java.lang.invoke.MethodHandle`)

| Change |   Delta |      % |           Time | Contentions | Callee                        | Location                        |
| -----: | ------: | -----: | -------------: | ----------: | ----------------------------- | ------------------------------- |
| -71.8% | -0.05ms | 100.0% | 0.1ms → 18.8µs |       3 → 2 | `asSpreader(int, Class, int)` | `java.lang.invoke.MethodHandle` |

##### `visitDeclarationExpression(DeclarationExpression)` (`org.codehaus.groovy.ast.CodeVisitorSupport`)

|  Change |   Delta |             % |         Time | Contentions | Callee                                    | Location                                           |
| ------: | ------: | ------------: | -----------: | ----------: | ----------------------------------------- | -------------------------------------------------- |
| removed | -0.05ms | 100.0% → 0.0% | 46.5µs → 0ms |       1 → 0 | `visitBinaryExpression(BinaryExpression)` | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor` |

##### `visitDeclarationExpression(DeclarationExpression)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|  Change |   Delta |             % |         Time | Contentions | Callee                                              | Location                                     |
| ------: | ------: | ------------: | -----------: | ----------: | --------------------------------------------------- | -------------------------------------------- |
| removed | -0.05ms | 100.0% → 0.0% | 46.5µs → 0ms |       1 → 0 | `visitDeclarationExpression(DeclarationExpression)` | `org.codehaus.groovy.ast.CodeVisitorSupport` |

##### `visit(GroovyCodeVisitor)` (`org.codehaus.groovy.ast.expr.DeclarationExpression`)

|  Change |   Delta |             % |         Time | Contentions | Callee                                              | Location                                          |
| ------: | ------: | ------------: | -----------: | ----------: | --------------------------------------------------- | ------------------------------------------------- |
| removed | -0.05ms | 100.0% → 0.0% | 46.5µs → 0ms |       1 → 0 | `visitDeclarationExpression(DeclarationExpression)` | `org.codehaus.groovy.ast.ClassCodeVisitorSupport` |

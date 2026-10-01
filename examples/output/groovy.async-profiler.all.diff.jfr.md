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

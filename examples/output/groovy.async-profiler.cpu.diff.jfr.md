# Sampling profile diff

Collected 6,107 samples → 5,853 samples (-254 samples, -4.2%).

| Category          | Change | Delta |             % |       Samples |
| ----------------- | -----: | ----: | ------------: | ------------: |
| Compiler          |  -4.7% |  -125 | 43.7% → 43.4% | 2,666 → 2,541 |
| Native            |  -7.3% |  -130 | 29.0% → 28.1% | 1,772 → 1,642 |
| Standard library  |  +0.3% |    +4 | 25.3% → 26.4% | 1,544 → 1,548 |
| Ours              |  +1.3% |    +1 |          1.3% |       77 → 78 |
| JIT               |  -4.7% |    -2 |          0.7% |       43 → 41 |
| Garbage collector | -40.0% |    -2 |          0.1% |         5 → 3 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |            % | Samples | Function                                                                                              | Location                                                    |
| ------: | ----: | -----------: | ------: | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
|     new |   +37 |  0.0% → 0.6% |  0 → 37 | `collector(Object, Object)`                                                                           | `java.lang.invoke.LambdaForm$MH.0x0000007001031800`         |
|     new |   +31 |  0.0% → 0.5% |  0 → 31 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`           | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800`        |
|     new |   +23 |  0.0% → 0.4% |  0 → 23 | `collector(Object, Object, Object)`                                                                   | `java.lang.invoke.LambdaForm$MH.0x00000070010a1000`         |
|  +70.8% |   +17 |  0.4% → 0.7% | 24 → 41 | `__psynch_cvwait`                                                                                     | `libsystem_kernel.dylib`                                    |
| +115.4% |   +15 |  0.2% → 0.5% | 13 → 28 | `PhaseLive::add_liveout`                                                                              | `libjvm.dylib`                                              |
|  +65.2% |   +15 |  0.4% → 0.6% | 23 → 38 | `invokeVirtual(Object, Object)`                                                                       | `java.lang.invoke.DirectMethodHandle$Holder`                |
| +107.7% |   +14 |  0.2% → 0.5% | 13 → 27 | `Compile::disconnect_useless_nodes`                                                                   | `libjvm.dylib`                                              |
|  +18.2% |   +12 |  1.1% → 1.3% | 66 → 78 | `Arena::contains`                                                                                     | `libjvm.dylib`                                              |
| +550.0% |   +11 | <0.1% → 0.2% |  2 → 13 | `IfFalseNode::Opcode`                                                                                 | `libjvm.dylib`                                              |
| +110.0% |   +11 |  0.2% → 0.4% | 10 → 21 | `LinearScanWalker::alloc_free_reg`                                                                    | `libjvm.dylib`                                              |
|     new |   +10 |  0.0% → 0.2% |  0 → 10 | `collector(Object, Object, Object, Object)`                                                           | `java.lang.invoke.LambdaForm$MH.0x00000070010d3c00`         |
|  +47.4% |    +9 |  0.3% → 0.5% | 19 → 28 | `invokeStatic(Object, Object, Object)`                                                                | `java.lang.invoke.DirectMethodHandle$Holder`                |
| +112.5% |    +9 |  0.1% → 0.3% |  8 → 17 | `LIR_OpVisitState::visit`                                                                             | `libjvm.dylib`                                              |
|  +36.4% |    +8 |  0.4% → 0.5% | 22 → 30 | `sys_icache_invalidate`                                                                               | `libsystem_platform.dylib`                                  |
| +800.0% |    +8 | <0.1% → 0.2% |   1 → 9 | `<init>(MutableCallSite, Class, String, IndyInterface$CallType, boolean, boolean, boolean, Object[])` | `org.codehaus.groovy.vmplugin.v8.Selector$PropertySelector` |
|  +23.3% |    +7 |  0.5% → 0.6% | 30 → 37 | `__psynch_mutexwait`                                                                                  | `libsystem_kernel.dylib`                                    |
| +100.0% |    +7 |  0.1% → 0.2% |  7 → 14 | `PhaseIFG::effective_degree`                                                                          | `libjvm.dylib`                                              |
| +116.7% |    +7 |  0.1% → 0.2% |  6 → 13 | `Node::Node`                                                                                          | `libjvm.dylib`                                              |
| +175.0% |    +7 |  0.1% → 0.2% |  4 → 11 | `Node::clone`                                                                                         | `libjvm.dylib`                                              |
|  +63.6% |    +7 |  0.2% → 0.3% | 11 → 18 | `equals(Object)`                                                                                      | `java.lang.String`                                          |

##### Compiler

|  Change | Delta |            % | Samples | Function                                              | Location       |
| ------: | ----: | -----------: | ------: | ----------------------------------------------------- | -------------- |
| +115.4% |   +15 |  0.2% → 0.5% | 13 → 28 | `PhaseLive::add_liveout`                              | `libjvm.dylib` |
| +107.7% |   +14 |  0.2% → 0.5% | 13 → 27 | `Compile::disconnect_useless_nodes`                   | `libjvm.dylib` |
| +550.0% |   +11 | <0.1% → 0.2% |  2 → 13 | `IfFalseNode::Opcode`                                 | `libjvm.dylib` |
| +110.0% |   +11 |  0.2% → 0.4% | 10 → 21 | `LinearScanWalker::alloc_free_reg`                    | `libjvm.dylib` |
| +112.5% |    +9 |  0.1% → 0.3% |  8 → 17 | `LIR_OpVisitState::visit`                             | `libjvm.dylib` |
| +100.0% |    +7 |  0.1% → 0.2% |  7 → 14 | `PhaseIFG::effective_degree`                          | `libjvm.dylib` |
| +116.7% |    +7 |  0.1% → 0.2% |  6 → 13 | `Node::Node`                                          | `libjvm.dylib` |
| +175.0% |    +7 |  0.1% → 0.2% |  4 → 11 | `Node::clone`                                         | `libjvm.dylib` |
|  +54.5% |    +6 |  0.2% → 0.3% | 11 → 17 | `Node::is_CFG`                                        | `libjvm.dylib` |
| +100.0% |    +6 |  0.1% → 0.2% |  6 → 12 | `Type::hashcons`                                      | `libjvm.dylib` |
| +150.0% |    +6 |  0.1% → 0.2% |  4 → 10 | `RegMask::is_aligned_pairs`                           | `libjvm.dylib` |
| +120.0% |    +6 |  0.1% → 0.2% |  5 → 11 | `ProjNode::is_CFG`                                    | `libjvm.dylib` |
| +120.0% |    +6 |  0.1% → 0.2% |  5 → 11 | `MethodLiveness::BasicBlock::compute_gen_kill_single` | `libjvm.dylib` |
| +100.0% |    +5 |  0.1% → 0.2% |  5 → 10 | `PhaseIterGVN::remove_globally_dead_node`             | `libjvm.dylib` |
| +166.7% |    +5 | <0.1% → 0.1% |   3 → 8 | `PhaseIdealLoop::split_if_with_blocks_pre`            | `libjvm.dylib` |
| +250.0% |    +5 | <0.1% → 0.1% |   2 → 7 | `TypeInstPtr::hash`                                   | `libjvm.dylib` |
| +125.0% |    +5 |  0.1% → 0.2% |   4 → 9 | `TypeOopPtr::eq`                                      | `libjvm.dylib` |
| +500.0% |    +5 | <0.1% → 0.1% |   1 → 6 | `CatchNode::Opcode`                                   | `libjvm.dylib` |
| +500.0% |    +5 | <0.1% → 0.1% |   1 → 6 | `PhaseCCP::fetch_next_node`                           | `libjvm.dylib` |
|  +11.4% |    +4 |  0.6% → 0.7% | 35 → 39 | `ciObjectFactory::get_metadata`                       | `libjvm.dylib` |

##### Native

|  Change | Delta |            % |   Samples | Function                                                             | Location                   |
| ------: | ----: | -----------: | --------: | -------------------------------------------------------------------- | -------------------------- |
|  +70.8% |   +17 |  0.4% → 0.7% |   24 → 41 | `__psynch_cvwait`                                                    | `libsystem_kernel.dylib`   |
|  +18.2% |   +12 |  1.1% → 1.3% |   66 → 78 | `Arena::contains`                                                    | `libjvm.dylib`             |
|  +36.4% |    +8 |  0.4% → 0.5% |   22 → 30 | `sys_icache_invalidate`                                              | `libsystem_platform.dylib` |
|  +23.3% |    +7 |  0.5% → 0.6% |   30 → 37 | `__psynch_mutexwait`                                                 | `libsystem_kernel.dylib`   |
|  +75.0% |    +6 |  0.1% → 0.2% |    8 → 14 | `CodeHeap::search_freelist`                                          | `libjvm.dylib`             |
| +100.0% |    +6 |  0.1% → 0.2% |    6 → 12 | `CodeCache::make_marked_nmethods_deoptimized`                        | `libjvm.dylib`             |
| +200.0% |    +6 | <0.1% → 0.2% |     3 → 9 | `CodeHeap::find_blob`                                                | `libjvm.dylib`             |
|   +4.6% |    +5 |  1.8% → 1.9% | 109 → 114 | `pthread_jit_write_protect_np`                                       | `libsystem_pthread.dylib`  |
| +500.0% |    +5 | <0.1% → 0.1% |     1 → 6 | `fwd_copy_again`                                                     | `libjvm.dylib`             |
|  +66.7% |    +4 |  0.1% → 0.2% |    6 → 10 | `semaphore_wait_trap`                                                | `libsystem_kernel.dylib`   |
| +200.0% |    +4 | <0.1% → 0.1% |     2 → 6 | `Symbol::increment_refcount`                                         | `libjvm.dylib`             |
| +100.0% |    +4 |         0.1% |     4 → 8 | `trampoline_stub_Relocation::get_trampoline_for`                     | `libjvm.dylib`             |
| +100.0% |    +4 |         0.1% |     4 → 8 | `JavaFrameAnchor::make_walkable`                                     | `libjvm.dylib`             |
| +400.0% |    +4 | <0.1% → 0.1% |     1 → 5 | `stat64`                                                             | `libsystem_kernel.dylib`   |
| +400.0% |    +4 | <0.1% → 0.1% |     1 → 5 | `JvmtiVMObjectAllocEventCollector::JvmtiVMObjectAllocEventCollector` | `libjvm.dylib`             |
| +133.3% |    +4 | <0.1% → 0.1% |     3 → 7 | `CompiledMethod::cleanup_inline_caches_impl`                         | `libjvm.dylib`             |
|     new |    +4 |  0.0% → 0.1% |     0 → 4 | `pthread_mutex_lock`                                                 | `libsystem_pthread.dylib`  |
|     new |    +4 |  0.0% → 0.1% |     0 → 4 | `java_lang_ClassLoader::non_reflection_class_loader`                 | `libjvm.dylib`             |
|     new |    +4 |  0.0% → 0.1% |     0 → 4 | `LocationValue::write_on`                                            | `libjvm.dylib`             |
|     new |    +4 |  0.0% → 0.1% |     0 → 4 | `inflate_fast`                                                       | `libzip.dylib`             |

##### Standard library

|  Change | Delta |            % | Samples | Function                                                                                              | Location                                                    |
| ------: | ----: | -----------: | ------: | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
|     new |   +37 |  0.0% → 0.6% |  0 → 37 | `collector(Object, Object)`                                                                           | `java.lang.invoke.LambdaForm$MH.0x0000007001031800`         |
|     new |   +31 |  0.0% → 0.5% |  0 → 31 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`           | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800`        |
|     new |   +23 |  0.0% → 0.4% |  0 → 23 | `collector(Object, Object, Object)`                                                                   | `java.lang.invoke.LambdaForm$MH.0x00000070010a1000`         |
|  +65.2% |   +15 |  0.4% → 0.6% | 23 → 38 | `invokeVirtual(Object, Object)`                                                                       | `java.lang.invoke.DirectMethodHandle$Holder`                |
|     new |   +10 |  0.0% → 0.2% |  0 → 10 | `collector(Object, Object, Object, Object)`                                                           | `java.lang.invoke.LambdaForm$MH.0x00000070010d3c00`         |
|  +47.4% |    +9 |  0.3% → 0.5% | 19 → 28 | `invokeStatic(Object, Object, Object)`                                                                | `java.lang.invoke.DirectMethodHandle$Holder`                |
| +800.0% |    +8 | <0.1% → 0.2% |   1 → 9 | `<init>(MutableCallSite, Class, String, IndyInterface$CallType, boolean, boolean, boolean, Object[])` | `org.codehaus.groovy.vmplugin.v8.Selector$PropertySelector` |
|  +63.6% |    +7 |  0.2% → 0.3% | 11 → 18 | `equals(Object)`                                                                                      | `java.lang.String`                                          |
|  +87.5% |    +7 |  0.1% → 0.3% |  8 → 15 | `resize()`                                                                                            | `java.util.HashMap`                                         |
|  +54.5% |    +6 |  0.2% → 0.3% | 11 → 17 | `putVal(int, Object, Object, boolean, boolean)`                                                       | `java.util.HashMap`                                         |
| +300.0% |    +6 | <0.1% → 0.1% |   2 → 8 | `type()`                                                                                              | `java.lang.invoke.MethodHandle`                             |
|     new |    +6 |  0.0% → 0.1% |   0 → 6 | `invoke(Object, Object)`                                                                              | `java.lang.invoke.LambdaForm$MH.0x000000700102ac00`         |
| +125.0% |    +5 |  0.1% → 0.2% |   4 → 9 | `getMethods(Class, String)`                                                                           | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex`     |
|     new |    +5 |  0.0% → 0.1% |   0 → 5 | `guard(Object, Object)`                                                                               | `java.lang.invoke.LambdaForm$MH.0x000000700109a000`         |
|     new |    +4 |  0.0% → 0.1% |   0 → 4 | `asCollector(Class, int)`                                                                             | `java.lang.invoke.MethodHandle`                             |
|     new |    +4 |  0.0% → 0.1% |   0 → 4 | `getEpsilonTarget(ATNConfig, Transition, boolean, boolean, PredictionContextCache, boolean)`          | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`      |
|  +26.7% |    +4 |  0.2% → 0.3% | 15 → 19 | `getNode(Object)`                                                                                     | `java.util.HashMap`                                         |
|     new |    +4 |  0.0% → 0.1% |   0 → 4 | `makeImpl(Class, Class[], boolean)`                                                                   | `java.lang.invoke.MethodType`                               |
|  +66.7% |    +4 |  0.1% → 0.2% |  6 → 10 | `add(ATNConfig, PredictionContextCache)`                                                              | `groovyjarjarantlr4.v4.runtime.atn.ATNConfigSet`            |
| +200.0% |    +4 | <0.1% → 0.1% |   2 → 6 | `coerceArgumentsToClasses(Object[])`                                                                  | `org.codehaus.groovy.reflection.ParameterTypes`             |

##### Ours

|  Change | Delta |            % | Samples | Function                                                    | Location                                                                           |
| ------: | ----: | -----------: | ------: | ----------------------------------------------------------- | ---------------------------------------------------------------------------------- |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `isNotWhitespace(String, int)`                              | `org.codenarc.rule.formatting.AbstractSpaceAroundBraceAstVisitor`                  |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `init()`                                                    | `org.codenarc.analyzer.SuppressionAnalyzer`                                        |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `isRuleSuppressed(Rule)`                                    | `org.codenarc.analyzer.SuppressionAnalyzer`                                        |
| +100.0% |    +1 |        <0.1% |   1 → 2 | `visitMethod(MethodNode)`                                   | `org.codenarc.rule.AbstractAstVisitor`                                             |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `applyTo(SourceCode)`                                       | `org.codenarc.rule.AbstractRule`                                                   |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `processLine(String)`                                       | `org.codenarc.util.MultilineCommentChecker`                                        |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `visitBlockStatement(BlockStatement)`                       | `org.codenarc.rule.formatting.SpaceAfterClosingBraceAstVisitor`                    |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `checkForCorrectColumn(ASTNode, String, int)`               | `org.codenarc.rule.formatting.IndentationAstVisitor`                               |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `doCall(Object)`                                            | `org.codenarc.rule.formatting.IndentationAstVisitor$_visitBlockStatement_closure7` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `extractVariableOrFieldName(BinaryExpression)`              | `org.codenarc.rule.design.PrivateFieldCouldBeFinalAstVisitor`                      |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `addViolation(ASTNode, String)`                             | `org.codenarc.rule.AbstractAstVisitor`                                             |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `visitBinaryExpression(BinaryExpression)`                   | `org.codenarc.rule.basic.BrokenOddnessCheckAstVisitor`                             |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `visitClassEx(ClassNode)`                                   | `org.codenarc.rule.naming.AbstractTypeNameAstVisitor`                              |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `super$3$visitBlockStatement(BlockStatement)`               | `org.codenarc.rule.formatting.SpaceAfterSemicolonAstVisitor`                       |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `visitMethod(MethodNode)`                                   | `org.codenarc.rule.naming.MethodNameAstVisitor`                                    |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `visitClassEx(ClassNode)`                                   | `org.codenarc.rule.formatting.SpaceBeforeClosingBraceAstVisitor`                   |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `visitConstructorCallExpression(ConstructorCallExpression)` | `org.codenarc.rule.groovyism.ExplicitTypeInstantiationAstVisitor`                  |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `super$2$visitBinaryExpression(BinaryExpression)`           | `org.codenarc.rule.unnecessary.UnnecessaryToStringAstVisitor`                      |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `visitMethodEx(MethodNode)`                                 | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`                |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `visitBinaryExpression(BinaryExpression)`                   | `org.codenarc.rule.convention.InvertedConditionAstVisitor`                         |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |            % |  Samples | Function                                                                                               | Location                                             |
| ------: | ----: | -----------: | -------: | ------------------------------------------------------------------------------------------------------ | ---------------------------------------------------- |
| removed |   -40 |  0.7% → 0.0% |   40 → 0 | `collector(Object, Object)`                                                                            | `java.lang.invoke.LambdaForm$MH.0x0000009801031800`  |
|  -21.9% |   -25 |  1.9% → 1.5% | 114 → 89 | `tlv_get_addr`                                                                                         | `libdyld.dylib`                                      |
| removed |   -25 |  0.4% → 0.0% |   25 → 0 | `collector(Object, Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x00000098010a1000`  |
| removed |   -20 |  0.3% → 0.0% |   20 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`            | `java.lang.invoke.LambdaForm$DMH.0x0000009801088800` |
|  -16.7% |   -19 |  1.9% → 1.6% | 114 → 95 | `cast(Object)`                                                                                         | `java.lang.Class`                                    |
|  -45.9% |   -17 |  0.6% → 0.3% |  37 → 20 | `PhaseChaitin::gather_lrg_masks`                                                                       | `libjvm.dylib`                                       |
|  -14.9% |   -15 |  1.7% → 1.5% | 101 → 86 | `Node::dominates`                                                                                      | `libjvm.dylib`                                       |
|  -48.4% |   -15 |  0.5% → 0.3% |  31 → 16 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` | `libjvm.dylib`                                       |
|  -36.8% |   -14 |  0.6% → 0.4% |  38 → 24 | `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>`         | `libjvm.dylib`                                       |
|  -21.1% |   -12 |  0.9% → 0.8% |  57 → 45 | `PhaseChaitin::build_ifg_physical`                                                                     | `libjvm.dylib`                                       |
|  -30.8% |   -12 |  0.6% → 0.5% |  39 → 27 | `Compile::identify_useful_nodes`                                                                       | `libjvm.dylib`                                       |
|  -41.4% |   -12 |  0.5% → 0.3% |  29 → 17 | `MachNode::rematerialize`                                                                              | `libjvm.dylib`                                       |
|  -26.1% |   -12 |  0.8% → 0.6% |  46 → 34 | `G1ParScanThreadState::do_copy_to_survivor_space`                                                      | `libjvm.dylib`                                       |
|  -17.4% |   -12 |  1.1% → 1.0% |  69 → 57 | `java_lang_Throwable::fill_in_stack_trace`                                                             | `libjvm.dylib`                                       |
|  -91.7% |   -11 | 0.2% → <0.1% |   12 → 1 | `PhaseCFG::sched_call`                                                                                 | `libjvm.dylib`                                       |
|  -31.4% |   -11 |  0.6% → 0.4% |  35 → 24 | `G1ParScanThreadState::trim_queue_to_threshold`                                                        | `libjvm.dylib`                                       |
| removed |   -11 |  0.2% → 0.0% |   11 → 0 | `ClassLoaderDataGraphKlassIteratorAtomic::next_klass`                                                  | `libjvm.dylib`                                       |
|  -47.6% |   -10 |  0.3% → 0.2% |  21 → 11 | `PhaseIdealLoop::dom_lca_for_get_late_ctrl_internal`                                                   | `libjvm.dylib`                                       |
|  -29.0% |    -9 |  0.5% → 0.4% |  31 → 22 | `_platform_memset`                                                                                     | `libsystem_platform.dylib`                           |
|  -64.3% |    -9 |  0.2% → 0.1% |   14 → 5 | `_platform_memmove`                                                                                    | `libsystem_platform.dylib`                           |

##### Compiler

|  Change | Delta |            % |  Samples | Function                                             | Location       |
| ------: | ----: | -----------: | -------: | ---------------------------------------------------- | -------------- |
|  -45.9% |   -17 |  0.6% → 0.3% |  37 → 20 | `PhaseChaitin::gather_lrg_masks`                     | `libjvm.dylib` |
|  -14.9% |   -15 |  1.7% → 1.5% | 101 → 86 | `Node::dominates`                                    | `libjvm.dylib` |
|  -21.1% |   -12 |  0.9% → 0.8% |  57 → 45 | `PhaseChaitin::build_ifg_physical`                   | `libjvm.dylib` |
|  -30.8% |   -12 |  0.6% → 0.5% |  39 → 27 | `Compile::identify_useful_nodes`                     | `libjvm.dylib` |
|  -41.4% |   -12 |  0.5% → 0.3% |  29 → 17 | `MachNode::rematerialize`                            | `libjvm.dylib` |
|  -91.7% |   -11 | 0.2% → <0.1% |   12 → 1 | `PhaseCFG::sched_call`                               | `libjvm.dylib` |
|  -47.6% |   -10 |  0.3% → 0.2% |  21 → 11 | `PhaseIdealLoop::dom_lca_for_get_late_ctrl_internal` | `libjvm.dylib` |
|  -33.3% |    -9 |  0.4% → 0.3% |  27 → 18 | `IntervalWalker::walk_to`                            | `libjvm.dylib` |
|  -27.6% |    -8 |  0.5% → 0.4% |  29 → 21 | `Node_Backward_Iterator::next`                       | `libjvm.dylib` |
|  -72.7% |    -8 |  0.2% → 0.1% |   11 → 3 | `LinearScan::compute_local_live_sets`                | `libjvm.dylib` |
|  -30.4% |    -7 |  0.4% → 0.3% |  23 → 16 | `Matcher::xform`                                     | `libjvm.dylib` |
| removed |    -7 |  0.1% → 0.0% |    7 → 0 | `ciInstanceKlass::get_field_by_offset`               | `libjvm.dylib` |
|  -70.0% |    -7 |  0.2% → 0.1% |   10 → 3 | `MergeMemNode::Opcode`                               | `libjvm.dylib` |
|  -40.0% |    -6 |         0.2% |   15 → 9 | `PhaseIterGVN::subsume_node`                         | `libjvm.dylib` |
|  -24.0% |    -6 |  0.4% → 0.3% |  25 → 19 | `PhaseChaitin::post_allocate_copy_removal`           | `libjvm.dylib` |
|  -54.5% |    -6 |  0.2% → 0.1% |   11 → 5 | `IndexSet::alloc_block_containing`                   | `libjvm.dylib` |
|  -28.6% |    -6 |         0.3% |  21 → 15 | `Type::cmp`                                          | `libjvm.dylib` |
|  -50.0% |    -6 |  0.2% → 0.1% |   12 → 6 | `Compile::find_alias_type`                           | `libjvm.dylib` |
|  -50.0% |    -5 |  0.2% → 0.1% |   10 → 5 | `RegMask::is_misaligned_pair`                        | `libjvm.dylib` |
|  -55.6% |    -5 |         0.1% |    9 → 4 | `Compile::final_graph_reshaping_walk`                | `libjvm.dylib` |

##### Native

|  Change | Delta |            % |  Samples | Function                                                                                               | Location                   |
| ------: | ----: | -----------: | -------: | ------------------------------------------------------------------------------------------------------ | -------------------------- |
|  -21.9% |   -25 |  1.9% → 1.5% | 114 → 89 | `tlv_get_addr`                                                                                         | `libdyld.dylib`            |
|  -48.4% |   -15 |  0.5% → 0.3% |  31 → 16 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` | `libjvm.dylib`             |
|  -36.8% |   -14 |  0.6% → 0.4% |  38 → 24 | `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>`         | `libjvm.dylib`             |
|  -26.1% |   -12 |  0.8% → 0.6% |  46 → 34 | `G1ParScanThreadState::do_copy_to_survivor_space`                                                      | `libjvm.dylib`             |
|  -17.4% |   -12 |  1.1% → 1.0% |  69 → 57 | `java_lang_Throwable::fill_in_stack_trace`                                                             | `libjvm.dylib`             |
|  -31.4% |   -11 |  0.6% → 0.4% |  35 → 24 | `G1ParScanThreadState::trim_queue_to_threshold`                                                        | `libjvm.dylib`             |
| removed |   -11 |  0.2% → 0.0% |   11 → 0 | `ClassLoaderDataGraphKlassIteratorAtomic::next_klass`                                                  | `libjvm.dylib`             |
|  -29.0% |    -9 |  0.5% → 0.4% |  31 → 22 | `_platform_memset`                                                                                     | `libsystem_platform.dylib` |
|  -64.3% |    -9 |  0.2% → 0.1% |   14 → 5 | `_platform_memmove`                                                                                    | `libsystem_platform.dylib` |
|  -63.6% |    -7 |  0.2% → 0.1% |   11 → 4 | `void OopOopIterateDispatch<G1ScanCardClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>`      | `libjvm.dylib`             |
|  -54.5% |    -6 |  0.2% → 0.1% |   11 → 5 | `G1CardSet::add_card`                                                                                  | `libjvm.dylib`             |
|  -66.7% |    -6 |         0.1% |    9 → 3 | `arrayof_oop_disjoint_arraycopy`                                                                       | `<unknown>`                |
|  -83.3% |    -5 | 0.1% → <0.1% |    6 → 1 | `DataLayout::cell_count`                                                                               | `libjvm.dylib`             |
| removed |    -5 |  0.1% → 0.0% |    5 → 0 | `stub:bzero`                                                                                           | `libjvm.dylib`             |
|  -55.6% |    -5 |         0.1% |    9 → 4 | `void G1CMTask::process_grey_task_entry<true>`                                                         | `libjvm.dylib`             |
|  -50.0% |    -5 |  0.2% → 0.1% |   10 → 5 | `JVM_NewArray`                                                                                         | `libjvm.dylib`             |
| removed |    -4 |  0.1% → 0.0% |    4 → 0 | `BitMap::set_union`                                                                                    | `libjvm.dylib`             |
|  -80.0% |    -4 | 0.1% → <0.1% |    5 → 1 | `methodHandle::~methodHandle`                                                                          | `libjvm.dylib`             |
| removed |    -4 |  0.1% → 0.0% |    4 → 0 | `Pipeline_Use::full_latency`                                                                           | `libjvm.dylib`             |
|  -40.0% |    -4 |  0.2% → 0.1% |   10 → 6 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object`                               | `libjvm.dylib`             |

##### Standard library

|  Change | Delta |            % |  Samples | Function                                                                                                      | Location                                                         |
| ------: | ----: | -----------: | -------: | ------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| removed |   -40 |  0.7% → 0.0% |   40 → 0 | `collector(Object, Object)`                                                                                   | `java.lang.invoke.LambdaForm$MH.0x0000009801031800`              |
| removed |   -25 |  0.4% → 0.0% |   25 → 0 | `collector(Object, Object, Object)`                                                                           | `java.lang.invoke.LambdaForm$MH.0x00000098010a1000`              |
| removed |   -20 |  0.3% → 0.0% |   20 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`                   | `java.lang.invoke.LambdaForm$DMH.0x0000009801088800`             |
|  -16.7% |   -19 |  1.9% → 1.6% | 114 → 95 | `cast(Object)`                                                                                                | `java.lang.Class`                                                |
| removed |    -8 |  0.1% → 0.0% |    8 → 0 | `invoke(Object, Object)`                                                                                      | `java.lang.invoke.LambdaForm$MH.0x000000980102ac00`              |
|  -63.6% |    -7 |  0.2% → 0.1% |   11 → 4 | `equals(Object[], Object[])`                                                                                  | `java.util.Arrays`                                               |
|  -50.0% |    -6 |  0.2% → 0.1% |   12 → 6 | `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`           |
|  -40.0% |    -6 |         0.2% |   15 → 9 | `checkCustomized(MethodHandle)`                                                                               | `java.lang.invoke.Invokers`                                      |
| removed |    -6 |  0.1% → 0.0% |    6 → 0 | `collector(Object, Object, Object, Object)`                                                                   | `java.lang.invoke.LambdaForm$MH.0x00000098010d3c00`              |
|  -71.4% |    -5 | 0.1% → <0.1% |    7 → 2 | `equals(LambdaFormEditor$TransformKey)`                                                                       | `java.lang.invoke.LambdaFormEditor$Transform`                    |
|  -83.3% |    -5 | 0.1% → <0.1% |    6 → 1 | `copyWith(MethodType, LambdaForm)`                                                                            | `java.lang.invoke.BoundMethodHandle$Species_L`                   |
|  -55.6% |    -5 |         0.1% |    9 → 4 | `get()`                                                                                                       | `java.lang.ref.SoftReference`                                    |
| removed |    -5 |  0.1% → 0.0% |    5 → 0 | `linkToTargetMethod(Object)`                                                                                  | `java.lang.invoke.Invokers$Holder`                               |
|  -55.6% |    -5 |         0.1% |    9 → 4 | `sameClasses(Class[], Object[])`                                                                              | `org.codehaus.groovy.vmplugin.v8.IndyGuardsFiltersAndSignatures` |
|  -50.0% |    -5 |  0.2% → 0.1% |   10 → 5 | `isNullConversion(Class, Class, boolean)`                                                                     | `sun.invoke.util.VerifyType`                                     |
| removed |    -4 |  0.1% → 0.0% |    4 → 0 | `guard(Object, Object, Object)`                                                                               | `java.lang.invoke.LambdaForm$MH.0x00000098010aac00`              |
| removed |    -4 |  0.1% → 0.0% |    4 → 0 | `invokeVirtual(Object, Object, Object)`                                                                       | `java.lang.invoke.LambdaForm$DMH.0x0000009801097c00`             |
|  -50.0% |    -4 |         0.1% |    8 → 4 | `insertParameterTypes(int, Class[])`                                                                          | `java.lang.invoke.MethodType`                                    |
| removed |    -4 |  0.1% → 0.0% |    4 → 0 | `visitListOfExpressions(List)`                                                                                | `org.codehaus.groovy.ast.GroovyCodeVisitor`                      |
| removed |    -4 |  0.1% → 0.0% |    4 → 0 | `invoke(Object, int)`                                                                                         | `java.lang.invoke.LambdaForm$MH.0x0000009801031400`              |

##### Ours

|  Change | Delta |            % | Samples | Function                                                 | Location                                                                              |
| ------: | ----: | -----------: | ------: | -------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| removed |    -3 | <0.1% → 0.0% |   3 → 0 | `addViolationIfDuplicate(Expression, boolean)`           | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                                    |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `visitMethodComplete(MethodNode)`                        | `org.codenarc.rule.convention.StaticMethodsBeforeInstanceMethodsAstVisitor`           |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `applyTo(SourceCode, List)`                              | `org.codenarc.rule.unused.UnusedVariableRule`                                         |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `init()`                                                 | `org.codenarc.source.AbstractSourceCode`                                              |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `getAst()`                                               | `org.codenarc.source.AbstractSourceCode`                                              |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `doCall(Object)`                                         | `org.codenarc.source.AbstractSourceCode$_removeGrabTransformation_closure1$_closure3` |
|  -50.0% |    -1 |        <0.1% |   2 → 1 | `getAstVisitor()`                                        | `org.codenarc.rule.AbstractAstVisitorRule`                                            |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `<init>()`                                               | `org.codenarc.rule.formatting.IndentationAstVisitor`                                  |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `getMetaClass()`                                         | `org.codenarc.rule.groovyism.ExplicitLinkedHashMapInstantiationRule`                  |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `visitBinaryExpression(BinaryExpression)`                | `org.codenarc.rule.unnecessary.UnnecessaryInstanceOfCheckAstVisitor`                  |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `<init>(ExplicitLinkedHashMapInstantiationRule, Object)` | `org.codenarc.rule.groovyism.ExplicitLinkedHashMapInstantiationRule$1`                |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `validateAstCompilerPhase(SourceCode)`                   | `org.codenarc.rule.AbstractRule`                                                      |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `<init>(Metric, MetricLevel, AbcVector, Integer)`        | `org.gmetrics.metric.abc.result.AbcMetricResult`                                      |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `checkIfThereIsBlankLineAfterOpeningBrace(ClassNode)`    | `org.codenarc.rule.formatting.ClassStartsWithBlankLineAstVisitor`                     |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `visitPropertyExpression(PropertyExpression)`            | `org.codenarc.rule.ClassReferenceAstVisitor`                                          |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `visitBinaryExpression(BinaryExpression)`                | `org.codenarc.rule.unnecessary.ConsecutiveStringConcatenationAstVisitor`              |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `isViolationSuppressed(Violation)`                       | `org.codenarc.analyzer.SuppressionAnalyzer`                                           |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `checkExpression(Expression, Expression)`                | `org.codenarc.rule.unnecessary.UnnecessarySafeNavigationOperatorAstVisitor`           |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `createUsagePattern(String)`                             | `org.codenarc.rule.imports.UnusedImportRule`                                          |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `processMethodNode(MethodNode)`                          | `org.codenarc.rule.formatting.SpaceBeforeClosingBraceAstVisitor`                      |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

##### Compiler

|  Change | Delta |            % |   Samples | Function                                    | Location       |
| ------: | ----: | -----------: | --------: | ------------------------------------------- | -------------- |
|  +37.5% |   +30 |  1.3% → 1.9% |  80 → 110 | `PhaseGVN::transform_no_reclaim`            | `libjvm.dylib` |
|   +4.1% |   +24 | 9.7% → 10.5% | 592 → 616 | `Compilation::compile_method`               | `libjvm.dylib` |
|   +4.1% |   +24 | 9.7% → 10.5% | 592 → 616 | `Compilation::Compilation`                  | `libjvm.dylib` |
|  +11.6% |   +22 |  3.1% → 3.6% | 190 → 212 | `Compilation::build_hir`                    | `libjvm.dylib` |
|  +11.7% |   +18 |  2.5% → 2.9% | 154 → 172 | `Matcher::xform`                            | `libjvm.dylib` |
|   +8.5% |   +18 |  3.5% → 3.9% | 211 → 229 | `Matcher::match`                            | `libjvm.dylib` |
|  +14.4% |   +18 |  2.0% → 2.4% | 125 → 143 | `GraphBuilder::invoke`                      | `libjvm.dylib` |
|  +14.0% |   +16 |  1.9% → 2.2% | 114 → 130 | `GraphBuilder::try_inline_full`             | `libjvm.dylib` |
|  +13.9% |   +16 |  1.9% → 2.2% | 115 → 131 | `GraphBuilder::try_inline`                  | `libjvm.dylib` |
|  +10.7% |   +15 |  2.3% → 2.6% | 140 → 155 | `GraphBuilder::iterate_bytecodes_for_block` | `libjvm.dylib` |
|  +10.6% |   +15 |  2.3% → 2.7% | 141 → 156 | `GraphBuilder::iterate_all_blocks`          | `libjvm.dylib` |
|  +10.1% |   +15 |  2.4% → 2.8% | 149 → 164 | `GraphBuilder::GraphBuilder`                | `libjvm.dylib` |
|  +54.5% |   +12 |  0.4% → 0.6% |   22 → 34 | `CompileQueue::get`                         | `libjvm.dylib` |
| +133.3% |   +12 |  0.1% → 0.4% |    9 → 21 | `BlockBegin::iterate_preorder`              | `libjvm.dylib` |
|  +16.9% |   +11 |  1.1% → 1.3% |   65 → 76 | `Type::hashcons`                            | `libjvm.dylib` |
| +550.0% |   +11 | <0.1% → 0.2% |    2 → 13 | `IfFalseNode::Opcode`                       | `libjvm.dylib` |
|   +2.1% |   +11 |  8.7% → 9.3% | 533 → 544 | `Compilation::compile_java_method`          | `libjvm.dylib` |
|  +21.7% |   +10 |  0.8% → 1.0% |   46 → 56 | `PhaseIterGVN::remove_globally_dead_node`   | `libjvm.dylib` |
|  +12.5% |   +10 |  1.3% → 1.5% |   80 → 90 | `ciEnv::register_method`                    | `libjvm.dylib` |
| +100.0% |   +10 |  0.2% → 0.3% |   10 → 20 | `Compile::flatten_alias_type`               | `libjvm.dylib` |

##### Native

|  Change | Delta |            % |   Samples | Function                                           | Location                 |
| ------: | ----: | -----------: | --------: | -------------------------------------------------- | ------------------------ |
| +600.0% |   +24 |  0.1% → 0.5% |    4 → 28 | `TaskTerminator::offer_termination`                | `libjvm.dylib`           |
| +600.0% |   +24 |  0.1% → 0.5% |    4 → 28 | `G1ParEvacuateFollowersClosure::offer_termination` | `libjvm.dylib`           |
|   +4.0% |   +24 | 9.7% → 10.6% | 594 → 618 | `Compiler::compile_method`                         | `libjvm.dylib`           |
|  +75.0% |   +21 |  0.5% → 0.8% |   28 → 49 | `PlatformMonitor::wait`                            | `libjvm.dylib`           |
|  +31.6% |   +18 |  0.9% → 1.3% |   57 → 75 | `G1ParEvacuateFollowersClosure::do_void`           | `libjvm.dylib`           |
|  +31.6% |   +18 |  0.9% → 1.3% |   57 → 75 | `G1EvacuateRegionsTask::evacuate_live_objects`     | `libjvm.dylib`           |
|  +70.8% |   +17 |  0.4% → 0.7% |   24 → 41 | `__psynch_cvwait`                                  | `libsystem_kernel.dylib` |
|  +24.2% |   +16 |  1.1% → 1.4% |   66 → 82 | `nmethod::new_nmethod`                             | `libjvm.dylib`           |
| +214.3% |   +15 |  0.1% → 0.4% |    7 → 22 | `InstanceKlass::link_class_impl`                   | `libjvm.dylib`           |
| +350.0% |   +14 |  0.1% → 0.3% |    4 → 18 | `Mutex::lock_without_safepoint_check`              | `libjvm.dylib`           |
|   +9.3% |   +14 |  2.5% → 2.8% | 151 → 165 | `IRScope::IRScope`                                 | `libjvm.dylib`           |
|   +9.3% |   +14 |  2.5% → 2.8% | 151 → 165 | `IR::IR`                                           | `libjvm.dylib`           |
| +162.5% |   +13 |  0.1% → 0.4% |    8 → 21 | `CodeCacheUnloadingTask::work`                     | `libjvm.dylib`           |
| +162.5% |   +13 |  0.1% → 0.4% |    8 → 21 | `G1ParallelCleaningTask::work`                     | `libjvm.dylib`           |
|  +18.2% |   +12 |  1.1% → 1.3% |   66 → 78 | `Arena::contains`                                  | `libjvm.dylib`           |
|  +60.0% |   +12 |  0.3% → 0.5% |   20 → 32 | `Monitor::wait`                                    | `libjvm.dylib`           |
|  +16.1% |   +10 |  1.0% → 1.2% |   62 → 72 | `Parse::do_field_access`                           | `libjvm.dylib`           |
|  +76.9% |   +10 |  0.2% → 0.4% |   13 → 23 | `GlobalValueNumbering::GlobalValueNumbering`       | `libjvm.dylib`           |
| +300.0% |    +9 | <0.1% → 0.2% |    3 → 12 | `InstanceKlass::initialize_impl`                   | `libjvm.dylib`           |
| +150.0% |    +9 |  0.1% → 0.3% |    6 → 15 | `Exceptions::_throw_msg`                           | `libjvm.dylib`           |

##### Standard library

| Change |  Delta |            % |   Samples | Function                                                                                    | Location                                             |
| -----: | -----: | -----------: | --------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|    new | +2,235 | 0.0% → 38.2% | 0 → 2,235 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |
|    new | +2,233 | 0.0% → 38.2% | 0 → 2,233 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000070010a1800`  |
|    new | +2,232 | 0.0% → 38.1% | 0 → 2,232 | `guardWithCatch(Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x00000070010aa000`  |
|    new | +2,232 | 0.0% → 38.1% | 0 → 2,232 | `reinvoke(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$MH.0x00000070010aa800`  |
|    new | +2,232 | 0.0% → 38.1% | 0 → 2,232 | `guard(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x00000070010aac00`  |
|    new | +2,224 | 0.0% → 38.0% | 0 → 2,224 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000070010c6400`  |
|    new | +2,224 | 0.0% → 38.0% | 0 → 2,224 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x00000070010c7000`  |
|    new | +2,222 | 0.0% → 38.0% | 0 → 2,222 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000700108e000`  |
|    new | +2,221 | 0.0% → 37.9% | 0 → 2,221 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x0000007001094400` |
|    new | +2,212 | 0.0% → 37.8% | 0 → 2,212 | `guardWithCatch(Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x0000007001098400`  |
|    new | +2,212 | 0.0% → 37.8% | 0 → 2,212 | `reinvoke(Object, Object)`                                                                  | `java.lang.invoke.LambdaForm$MH.0x0000007001099c00`  |
|    new | +2,212 | 0.0% → 37.8% | 0 → 2,212 | `guard(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$MH.0x000000700109a000`  |
|    new | +2,209 | 0.0% → 37.7% | 0 → 2,209 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000700102b000`  |
|    new | +2,209 | 0.0% → 37.7% | 0 → 2,209 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000700109bc00`  |
|    new | +2,198 | 0.0% → 37.6% | 0 → 2,198 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000070010a9800`  |
|    new | +2,162 | 0.0% → 36.9% | 0 → 2,162 | `invokeInterface(Object, Object, Object, Object, Object)`                                   | `java.lang.invoke.LambdaForm$DMH.0x0000007001095000` |
|    new | +2,160 | 0.0% → 36.9% | 0 → 2,160 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x00000070010d4c00`  |
|    new | +2,137 | 0.0% → 36.5% | 0 → 2,137 | `guardWithCatch(Object, Object, Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x00000070010d4000`  |
|    new | +2,137 | 0.0% → 36.5% | 0 → 2,137 | `guard(Object, Object, Object, Object)`                                                     | `java.lang.invoke.LambdaForm$MH.0x0000007001188c00`  |
|    new | +2,135 | 0.0% → 36.5% | 0 → 2,135 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x00000070010d3800`  |

##### Ours

|  Change | Delta |             % |       Samples | Function                                                                | Location                                                                       |
| ------: | ----: | ------------: | ------------: | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
|   +3.3% |   +33 | 16.5% → 17.8% | 1,010 → 1,043 | `applyTo(SourceCode, List)`                                             | `org.codenarc.rule.AbstractAstVisitorRule`                                     |
|   +2.3% |   +27 | 19.6% → 20.9% | 1,199 → 1,226 | `applyTo(SourceCode)`                                                   | `org.codenarc.rule.AbstractRule`                                               |
| +100.0% |   +10 |   0.2% → 0.3% |       10 → 20 | `doCall(Object)`                                                        | `org.codenarc.util.WildcardPattern$_closure1`                                  |
|   +0.8% |   +10 | 21.7% → 22.8% | 1,325 → 1,335 | `doCall(Object)`                                                        | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`     |
|  +14.5% |    +9 |   1.0% → 1.2% |       62 → 71 | `super$3$applyTo(SourceCode, List)`                                     | `org.codenarc.rule.formatting.IndentationRule`                                 |
|  +14.5% |    +9 |   1.0% → 1.2% |       62 → 71 | `applyTo(SourceCode, List)`                                             | `org.codenarc.rule.formatting.IndentationRule`                                 |
| +128.6% |    +9 |   0.1% → 0.3% |        7 → 16 | `recordMethodColumnAndSourceLineForClosureBlocks(MethodCallExpression)` | `org.codenarc.rule.formatting.IndentationAstVisitor`                           |
|  +40.9% |    +9 |   0.4% → 0.5% |       22 → 31 | `visitConstructorOrMethod(MethodNode, boolean)`                         | `org.codenarc.rule.formatting.SpaceAroundOperatorAstVisitor`                   |
|  +53.3% |    +8 |   0.2% → 0.4% |       15 → 23 | `<init>(String, boolean)`                                               | `org.codenarc.util.WildcardPattern`                                            |
|  +57.1% |    +8 |   0.2% → 0.4% |       14 → 22 | `addMethodsToMetricResults(SourceCode, ClassNode, Map)`                 | `org.gmetrics.metric.AbstractMethodMetric`                                     |
|  +66.7% |    +8 |   0.2% → 0.3% |       12 → 20 | `doCall(Object)`                                                        | `org.gmetrics.metric.AbstractMethodMetric$_addMethodsToMetricResults_closure4` |
|  +57.1% |    +8 |   0.2% → 0.4% |       14 → 22 | `super$2$visitMethodCallExpression(MethodCallExpression)`               | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                             |
|  +24.2% |    +8 |   0.5% → 0.7% |       33 → 41 | `visitBinaryExpression(BinaryExpression)`                               | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                             |
|  +29.6% |    +8 |   0.4% → 0.6% |       27 → 35 | `visitMethodCallExpression(MethodCallExpression)`                       | `org.codenarc.rule.formatting.IndentationAstVisitor`                           |
|  +36.4% |    +8 |   0.4% → 0.5% |       22 → 30 | `visitClass(ClassNode)`                                                 | `org.codenarc.rule.AbstractMethodVisitor`                                      |
|  +77.8% |    +7 |   0.1% → 0.3% |        9 → 16 | `calculate(MethodNode, SourceCode)`                                     | `org.gmetrics.metric.abc.AbcMetric`                                            |
|  +46.7% |    +7 |   0.2% → 0.4% |       15 → 22 | `checkDeclaration(ASTNode, String, String)`                             | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`            |
| +350.0% |    +7 |  <0.1% → 0.2% |         2 → 9 | `visitMethodEx(MethodNode)`                                             | `org.codenarc.rule.formatting.IndentationAstVisitor`                           |
| +150.0% |    +6 |   0.1% → 0.2% |        4 → 10 | `visitVariableExpression(VariableExpression)`                           | `org.codenarc.rule.unnecessary.UnnecessaryPackageReferenceAstVisitor`          |
|  +33.3% |    +6 |   0.3% → 0.4% |       18 → 24 | `visitMethodCallExpression(MethodCallExpression)`                       | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                             |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

##### Compiler

| Change | Delta |             % |       Samples | Function                                   | Location       |
| -----: | ----: | ------------: | ------------: | ------------------------------------------ | -------------- |
|  -6.7% |  -186 | 45.6% → 44.4% | 2,785 → 2,599 | `Compile::Compile`                         | `libjvm.dylib` |
|  -6.7% |  -186 | 45.7% → 44.5% | 2,789 → 2,603 | `C2Compiler::compile_method`               | `libjvm.dylib` |
|  -4.7% |  -161 | 55.6% → 55.3% | 3,397 → 3,236 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |
|  -4.4% |  -149 | 56.0% → 55.9% | 3,419 → 3,270 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib` |
|  -7.7% |  -104 | 22.1% → 21.3% | 1,352 → 1,248 | `Compile::Code_Gen`                        | `libjvm.dylib` |
|  -7.9% |   -84 | 17.4% → 16.8% |   1,065 → 981 | `Compile::Optimize`                        | `libjvm.dylib` |
|  -7.2% |   -55 | 12.4% → 12.0% |     759 → 704 | `PhaseChaitin::Register_Allocate`          | `libjvm.dylib` |
| -19.6% |   -33 |   2.8% → 2.3% |     168 → 135 | `PhaseOutput::Output`                      | `libjvm.dylib` |
| -43.8% |   -32 |   1.2% → 0.7% |       73 → 41 | `PhaseChaitin::gather_lrg_masks`           | `libjvm.dylib` |
| -16.3% |   -29 |   2.9% → 2.5% |     178 → 149 | `LinearScan::do_linear_scan`               | `libjvm.dylib` |
| -17.3% |   -28 |   2.7% → 2.3% |     162 → 134 | `PhaseCFG::global_code_motion`             | `libjvm.dylib` |
| -16.9% |   -28 |   2.7% → 2.4% |     166 → 138 | `PhaseCFG::do_global_code_motion`          | `libjvm.dylib` |
| -32.2% |   -28 |   1.4% → 1.0% |       87 → 59 | `ConnectionGraph::do_analysis`             | `libjvm.dylib` |
|  -7.4% |   -27 |   6.0% → 5.8% |     364 → 337 | `PhaseIterGVN::optimize`                   | `libjvm.dylib` |
| -30.6% |   -26 |   1.4% → 1.0% |       85 → 59 | `ConnectionGraph::compute_escape`          | `libjvm.dylib` |
|  -5.0% |   -24 |   7.9% → 7.8% |     483 → 459 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib` |
| -29.6% |   -24 |   1.3% → 1.0% |       81 → 57 | `PhaseOutput::fill_buffer`                 | `libjvm.dylib` |
| -10.0% |   -23 |   3.7% → 3.5% |     229 → 206 | `Compilation::emit_lir`                    | `libjvm.dylib` |
| -25.9% |   -21 |   1.3% → 1.0% |       81 → 60 | `Compile::call_generator`                  | `libjvm.dylib` |
|  -4.5% |   -18 |          6.5% |     399 → 381 | `PhaseIdealLoop::build_and_optimize`       | `libjvm.dylib` |

##### Native

| Change | Delta |             % |       Samples | Function                                                                                                                                                        | Location                  |
| -----: | ----: | ------------: | ------------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
|  -6.2% |  -238 | 62.6% → 61.2% | 3,820 → 3,582 | `Thread::call_run`                                                                                                                                              | `libjvm.dylib`            |
|  -6.2% |  -238 | 62.6% → 61.2% | 3,820 → 3,582 | `thread_native_entry`                                                                                                                                           | `libjvm.dylib`            |
|  -6.2% |  -237 | 62.6% → 61.2% | 3,820 → 3,583 | `_pthread_start`                                                                                                                                                | `libsystem_pthread.dylib` |
|  -6.2% |  -237 | 62.6% → 61.2% | 3,820 → 3,583 | `thread_start`                                                                                                                                                  | `libsystem_pthread.dylib` |
|  -4.5% |  -153 | 56.1% → 55.9% | 3,424 → 3,271 | `JavaThread::thread_main_inner`                                                                                                                                 | `libjvm.dylib`            |
| -24.5% |   -95 |   6.4% → 5.0% |     388 → 293 | `WorkerThread::run`                                                                                                                                             | `libjvm.dylib`            |
| -39.2% |   -40 |   1.7% → 1.1% |      102 → 62 | `G1EvacuateRegionsTask::scan_roots`                                                                                                                             | `libjvm.dylib`            |
| -47.5% |   -38 |   1.3% → 0.7% |       80 → 42 | `HeapRegionManager::par_iterate`                                                                                                                                | `libjvm.dylib`            |
| -41.4% |   -36 |   1.4% → 0.9% |       87 → 51 | `void G1ScanHRForRegionClosure::ChunkScanner::on_dirty_cards<G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)>` | `libjvm.dylib`            |
| -41.4% |   -36 |   1.4% → 0.9% |       87 → 51 | `G1ScanHRForRegionClosure::scan_heap_roots`                                                                                                                     | `libjvm.dylib`            |
| -41.4% |   -36 |   1.4% → 0.9% |       87 → 51 | `G1ScanHRForRegionClosure::do_heap_region`                                                                                                                      | `libjvm.dylib`            |
| -41.4% |   -36 |   1.4% → 0.9% |       87 → 51 | `G1RemSet::scan_heap_roots`                                                                                                                                     | `libjvm.dylib`            |
| -40.7% |   -35 |   1.4% → 0.9% |       86 → 51 | `G1ScanHRForRegionClosure::scan_memregion`                                                                                                                      | `libjvm.dylib`            |
| -44.7% |   -34 |   1.2% → 0.7% |       76 → 42 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_region`                                                                              | `libjvm.dylib`            |
| -44.7% |   -34 |   1.2% → 0.7% |       76 → 42 | `G1RebuildRSAndScrubTask::work`                                                                                                                                 | `libjvm.dylib`            |
| -42.9% |   -30 |   1.1% → 0.7% |       70 → 40 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object`                                                                                        | `libjvm.dylib`            |
| -36.1% |   -30 |   1.4% → 0.9% |       83 → 53 | `G1CMConcurrentMarkingTask::work`                                                                                                                               | `libjvm.dylib`            |
| -42.3% |   -30 |   1.2% → 0.7% |       71 → 41 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_to_pb`                                                                               | `libjvm.dylib`            |
| -35.4% |   -29 |   1.3% → 0.9% |       82 → 53 | `G1CMTask::do_marking_step`                                                                                                                                     | `libjvm.dylib`            |
| -20.8% |   -26 |   2.0% → 1.7% |      125 → 99 | `G1ParScanThreadState::trim_queue_to_threshold`                                                                                                                 | `libjvm.dylib`            |

##### Standard library

|  Change |  Delta |            % |   Samples | Function                                                                                    | Location                                             |
| ------: | -----: | -----------: | --------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed | -2,248 | 36.8% → 0.0% | 2,248 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000009801088800` |
| removed | -2,247 | 36.8% → 0.0% | 2,247 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000098010a1800`  |
| removed | -2,246 | 36.8% → 0.0% | 2,246 → 0 | `guardWithCatch(Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x00000098010aa000`  |
| removed | -2,246 | 36.8% → 0.0% | 2,246 → 0 | `reinvoke(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$MH.0x00000098010aa800`  |
| removed | -2,246 | 36.8% → 0.0% | 2,246 → 0 | `guard(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x00000098010aac00`  |
| removed | -2,239 | 36.7% → 0.0% | 2,239 → 0 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x0000009801094400` |
| removed | -2,238 | 36.6% → 0.0% | 2,238 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000098010c6400`  |
| removed | -2,238 | 36.6% → 0.0% | 2,238 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x00000098010c7000`  |
| removed | -2,237 | 36.6% → 0.0% | 2,237 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000980108e000`  |
| removed | -2,224 | 36.4% → 0.0% | 2,224 → 0 | `guardWithCatch(Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x0000009801098400`  |
| removed | -2,224 | 36.4% → 0.0% | 2,224 → 0 | `reinvoke(Object, Object)`                                                                  | `java.lang.invoke.LambdaForm$MH.0x0000009801099c00`  |
| removed | -2,224 | 36.4% → 0.0% | 2,224 → 0 | `guard(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$MH.0x000000980109a000`  |
| removed | -2,224 | 36.4% → 0.0% | 2,224 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000980109bc00`  |
| removed | -2,222 | 36.4% → 0.0% | 2,222 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000980102b000`  |
| removed | -2,215 | 36.3% → 0.0% | 2,215 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000098010a9800`  |
| removed | -2,179 | 35.7% → 0.0% | 2,179 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x00000098010d4c00`  |
| removed | -2,177 | 35.6% → 0.0% | 2,177 → 0 | `invokeInterface(Object, Object, Object, Object, Object)`                                   | `java.lang.invoke.LambdaForm$DMH.0x0000009801095000` |
| removed | -2,147 | 35.2% → 0.0% | 2,147 → 0 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x00000098010d3800`  |
| removed | -2,147 | 35.2% → 0.0% | 2,147 → 0 | `guardWithCatch(Object, Object, Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x00000098010d4000`  |
| removed | -2,147 | 35.2% → 0.0% | 2,147 → 0 | `guard(Object, Object, Object, Object)`                                                     | `java.lang.invoke.LambdaForm$MH.0x0000009801188c00`  |

##### Ours

| Change | Delta |             % |       Samples | Function                                         | Location                                                                     |
| -----: | ----: | ------------: | ------------: | ------------------------------------------------ | ---------------------------------------------------------------------------- |
|  -1.1% |   -23 | 33.8% → 34.8% | 2,062 → 2,039 | `collectViolations(SourceCode, RuleSet)`         | `org.codenarc.analyzer.AbstractSourceAnalyzer`                               |
|  -1.1% |   -22 | 33.9% → 35.0% | 2,073 → 2,051 | `processFile(String, DirectoryResults, RuleSet)` | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                             |
|  -0.7% |   -15 | 34.1% → 35.3% | 2,082 → 2,067 | `analyze(RuleSet)`                               | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                             |
|  -0.7% |   -15 | 34.1% → 35.3% | 2,081 → 2,066 | `doCall(Object)`                                 | `org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`  |
|  -0.7% |   -15 | 34.1% → 35.3% | 2,081 → 2,066 | `processDirectory(String, RuleSet)`              | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                             |
|  -0.6% |   -14 | 36.9% → 38.2% | 2,251 → 2,237 | `main(String[])`                                 | `org.codenarc.CodeNarc`                                                      |
|  -0.6% |   -14 | 36.6% → 38.0% | 2,238 → 2,224 | `execute(String[])`                              | `org.codenarc.CodeNarc`                                                      |
|  -0.6% |   -13 | 36.4% → 37.7% | 2,221 → 2,208 | `execute()`                                      | `org.codenarc.CodeNarcRunner`                                                |
| -25.5% |   -12 |   0.8% → 0.6% |       47 → 35 | `applyVisitor(AstVisitor, SourceCode)`           | `org.codenarc.rule.AbstractSharedAstVisitorRule`                             |
|  -4.1% |   -11 |          4.4% |     269 → 258 | `doCall(Object)`                                 | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`   |
|  -0.6% |   -11 | 27.9% → 29.0% | 1,706 → 1,695 | `measureRuleProcessingTime(Rule, Closure)`       | `org.codenarc.analyzer.AbstractSourceAnalyzer`                               |
| -17.5% |   -10 |   0.9% → 0.8% |       57 → 47 | `applyTo(SourceCode, List)`                      | `org.codenarc.rule.AbstractSharedAstVisitorRule`                             |
| -66.7% |   -10 |   0.2% → 0.1% |        15 → 5 | `visitMethodEx(MethodNode)`                      | `org.codenarc.rule.design.ReturnsNullInsteadOfEmptyCollectionRuleAstVisitor` |
|  -3.8% |    -9 |          3.9% |     238 → 229 | `init()`                                         | `org.codenarc.source.AbstractSourceCode`                                     |
|  -3.8% |    -9 |          3.9% |     239 → 230 | `getAst()`                                       | `org.codenarc.source.AbstractSourceCode`                                     |
|  -3.4% |    -8 |          3.9% |     237 → 229 | `init()`                                         | `org.codenarc.analyzer.SuppressionAnalyzer`                                  |
|  -3.3% |    -8 |          4.0% |     242 → 234 | `isRuleSuppressed(Rule)`                         | `org.codenarc.analyzer.SuppressionAnalyzer`                                  |
| -53.3% |    -8 |   0.2% → 0.1% |        15 → 7 | `doCall(List)`                                   | `org.codenarc.source.AbstractSourceCode$_removeGrabTransformation_closure1`  |
| -53.3% |    -8 |   0.2% → 0.1% |        15 → 7 | `removeGrabTransformation(CompilationUnit)`      | `org.codenarc.source.AbstractSourceCode`                                     |
|  -1.1% |    -8 | 12.1% → 12.5% |     742 → 734 | `visitMethod(MethodNode)`                        | `org.codenarc.rule.AbstractAstVisitor`                                       |

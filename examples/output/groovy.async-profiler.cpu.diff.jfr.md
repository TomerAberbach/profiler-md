# Sampling profile diff

Collected 6,001 samples → 5,827 samples (-174 samples, -2.9%).

| Category          | Change | Delta |             % |       Samples |
| ----------------- | -----: | ----: | ------------: | ------------: |
| Compiler          |  -2.8% |   -75 | 44.3% → 44.4% | 2,661 → 2,586 |
| Native            |  -2.3% |   -39 | 28.1% → 28.2% | 1,685 → 1,646 |
| Standard library  |  -5.0% |   -76 | 25.6% → 25.0% | 1,535 → 1,459 |
| Ours              | +22.0% |   +13 |   1.0% → 1.2% |       59 → 72 |
| JIT               |  +1.7% |    +1 |          1.0% |       58 → 59 |
| Garbage collector | +66.7% |    +2 |  <0.1% → 0.1% |         3 → 5 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |           % |  Samples | Function                                                                                    | Location                                              |
| ------: | ----: | ----------: | -------: | ------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
|     new |   +32 | 0.0% → 0.5% |   0 → 32 | `collector(Object, Object)`                                                                 | `java.lang.invoke.LambdaForm$MH.0x000000b801031800`   |
|     new |   +25 | 0.0% → 0.4% |   0 → 25 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000b801088800`  |
| +240.0% |   +24 | 0.2% → 0.6% |  10 → 34 | `sys_icache_invalidate`                                                                     | `libsystem_platform.dylib`                            |
|     new |   +19 | 0.0% → 0.3% |   0 → 19 | `collector(Object, Object, Object)`                                                         | `java.lang.invoke.LambdaForm$MH.0x000000b8010a8c00`   |
|  +19.8% |   +18 | 1.5% → 1.9% | 91 → 109 | `pthread_jit_write_protect_np`                                                              | `libsystem_pthread.dylib`                             |
|  +48.3% |   +14 | 0.5% → 0.7% |  29 → 43 | `PhaseChaitin::gather_lrg_masks`                                                            | `libjvm.dylib`                                        |
| +118.2% |   +13 | 0.2% → 0.4% |  11 → 24 | `G1ParScanThreadState::trim_queue_to_threshold`                                             | `libjvm.dylib`                                        |
|  +48.1% |   +13 | 0.4% → 0.7% |  27 → 40 | `PhaseIdealLoop::build_loop_early`                                                          | `libjvm.dylib`                                        |
|  +20.6% |   +13 | 1.0% → 1.3% |  63 → 76 | `java_lang_Throwable::fill_in_stack_trace`                                                  | `libjvm.dylib`                                        |
|  +80.0% |   +12 | 0.2% → 0.5% |  15 → 27 | `getNode(Object)`                                                                           | `java.util.HashMap`                                   |
|  +52.4% |   +11 | 0.3% → 0.5% |  21 → 32 | `PhaseChaitin::post_allocate_copy_removal`                                                  | `libjvm.dylib`                                        |
|  +61.1% |   +11 | 0.3% → 0.5% |  18 → 29 | `Node::set_req_X`                                                                           | `libjvm.dylib`                                        |
|     new |   +11 | 0.0% → 0.2% |   0 → 11 | `I2C/C2I adapters(0xbb)`                                                                    | `<unknown>`                                           |
| +100.0% |   +10 | 0.2% → 0.3% |  10 → 20 | `PhaseOutput::BuildOopMaps`                                                                 | `libjvm.dylib`                                        |
|  +62.5% |   +10 | 0.3% → 0.4% |  16 → 26 | `G1ParScanThreadState::do_copy_to_survivor_space`                                           | `libjvm.dylib`                                        |
|  +56.3% |    +9 | 0.3% → 0.4% |  16 → 25 | `_platform_memmove`                                                                         | `libsystem_platform.dylib`                            |
| +225.0% |    +9 | 0.1% → 0.2% |   4 → 13 | `join(PredictionContext, PredictionContext, PredictionContextCache)`                        | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext` |
|  +80.0% |    +8 | 0.2% → 0.3% |  10 → 18 | `IndexSet::initialize`                                                                      | `libjvm.dylib`                                        |
|  +57.1% |    +8 | 0.2% → 0.4% |  14 → 22 | `Compile::disconnect_useless_nodes`                                                         | `libjvm.dylib`                                        |
| +160.0% |    +8 | 0.1% → 0.2% |   5 → 13 | `ValueStack::values_do`                                                                     | `libjvm.dylib`                                        |

##### Compiler

|  Change | Delta |            % | Samples | Function                                   | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------------------ | -------------- |
|  +48.3% |   +14 |  0.5% → 0.7% | 29 → 43 | `PhaseChaitin::gather_lrg_masks`           | `libjvm.dylib` |
|  +48.1% |   +13 |  0.4% → 0.7% | 27 → 40 | `PhaseIdealLoop::build_loop_early`         | `libjvm.dylib` |
|  +52.4% |   +11 |  0.3% → 0.5% | 21 → 32 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |
|  +61.1% |   +11 |  0.3% → 0.5% | 18 → 29 | `Node::set_req_X`                          | `libjvm.dylib` |
| +100.0% |   +10 |  0.2% → 0.3% | 10 → 20 | `PhaseOutput::BuildOopMaps`                | `libjvm.dylib` |
|  +80.0% |    +8 |  0.2% → 0.3% | 10 → 18 | `IndexSet::initialize`                     | `libjvm.dylib` |
|  +57.1% |    +8 |  0.2% → 0.4% | 14 → 22 | `Compile::disconnect_useless_nodes`        | `libjvm.dylib` |
| +160.0% |    +8 |  0.1% → 0.2% |  5 → 13 | `ValueStack::values_do`                    | `libjvm.dylib` |
| +140.0% |    +7 |  0.1% → 0.2% |  5 → 12 | `RegionNode::is_unreachable_from_root`     | `libjvm.dylib` |
|  +50.0% |    +7 |  0.2% → 0.4% | 14 → 21 | `LIR_OpVisitState::visit`                  | `libjvm.dylib` |
| +233.3% |    +7 | <0.1% → 0.2% |  3 → 10 | `CallStaticJavaNode::Opcode`               | `libjvm.dylib` |
| +700.0% |    +7 | <0.1% → 0.1% |   1 → 8 | `TypeNode::bottom_type`                    | `libjvm.dylib` |
|  +60.0% |    +6 |  0.2% → 0.3% | 10 → 16 | `PhaseIFG::effective_degree`               | `libjvm.dylib` |
|  +75.0% |    +6 |  0.1% → 0.2% |  8 → 14 | `PhaseCFG::partial_latency_of_defs`        | `libjvm.dylib` |
|     new |    +6 |  0.0% → 0.1% |   0 → 6 | `LIRGenerator::state_for`                  | `libjvm.dylib` |
| +600.0% |    +6 | <0.1% → 0.1% |   1 → 7 | `MergeMemNode::iteration_setup`            | `libjvm.dylib` |
| +125.0% |    +5 |  0.1% → 0.2% |   4 → 9 | `Node::add_req`                            | `libjvm.dylib` |
| +125.0% |    +5 |  0.1% → 0.2% |   4 → 9 | `ciInstanceKlass::get_field_by_offset`     | `libjvm.dylib` |
| +250.0% |    +5 | <0.1% → 0.1% |   2 → 7 | `PhaseCFG::select`                         | `libjvm.dylib` |
|  +50.0% |    +5 |  0.2% → 0.3% | 10 → 15 | `PhaseCFG::schedule_pinned_nodes`          | `libjvm.dylib` |

##### Native

|  Change | Delta |            % |  Samples | Function                                                                                                                     | Location                   |
| ------: | ----: | -----------: | -------: | ---------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| +240.0% |   +24 |  0.2% → 0.6% |  10 → 34 | `sys_icache_invalidate`                                                                                                      | `libsystem_platform.dylib` |
|  +19.8% |   +18 |  1.5% → 1.9% | 91 → 109 | `pthread_jit_write_protect_np`                                                                                               | `libsystem_pthread.dylib`  |
| +118.2% |   +13 |  0.2% → 0.4% |  11 → 24 | `G1ParScanThreadState::trim_queue_to_threshold`                                                                              | `libjvm.dylib`             |
|  +20.6% |   +13 |  1.0% → 1.3% |  63 → 76 | `java_lang_Throwable::fill_in_stack_trace`                                                                                   | `libjvm.dylib`             |
|  +62.5% |   +10 |  0.3% → 0.4% |  16 → 26 | `G1ParScanThreadState::do_copy_to_survivor_space`                                                                            | `libjvm.dylib`             |
|  +56.3% |    +9 |  0.3% → 0.4% |  16 → 25 | `_platform_memmove`                                                                                                          | `libsystem_platform.dylib` |
|  +42.9% |    +6 |  0.2% → 0.3% |  14 → 20 | `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>` | `libjvm.dylib`             |
|     new |    +6 |  0.0% → 0.1% |    0 → 6 | `void G1CMTask::process_grey_task_entry<true>`                                                                               | `libjvm.dylib`             |
|     new |    +6 |  0.0% → 0.1% |    0 → 6 | `G1CodeRootSet::add`                                                                                                         | `libjvm.dylib`             |
|  +16.1% |    +5 |  0.5% → 0.6% |  31 → 36 | `_platform_memset`                                                                                                           | `libsystem_platform.dylib` |
| +125.0% |    +5 |  0.1% → 0.2% |    4 → 9 | `void OopOopIterateDispatch<G1ScanCardClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>`                            | `libjvm.dylib`             |
| +250.0% |    +5 | <0.1% → 0.1% |    2 → 7 | `fwd_copy_again`                                                                                                             | `libjvm.dylib`             |
|     new |    +4 |  0.0% → 0.1% |    0 → 4 | `NonSafepointEmitter::observe_instruction`                                                                                   | `libjvm.dylib`             |
| +200.0% |    +4 | <0.1% → 0.1% |    2 → 6 | `State::_sub_Op_AddP`                                                                                                        | `libjvm.dylib`             |
| +100.0% |    +4 |         0.1% |    4 → 8 | `CodeCache::find_blob`                                                                                                       | `libjvm.dylib`             |
| +133.3% |    +4 | <0.1% → 0.1% |    3 → 7 | `SignatureStream::next`                                                                                                      | `libjvm.dylib`             |
| +400.0% |    +4 | <0.1% → 0.1% |    1 → 5 | `CollectedHeap::array_allocate`                                                                                              | `libjvm.dylib`             |
| +400.0% |    +4 | <0.1% → 0.1% |    1 → 5 | `ClassLoaderDataGraphKlassIteratorAtomic::next_klass`                                                                        | `libjvm.dylib`             |
|     new |    +4 |  0.0% → 0.1% |    0 → 4 | `stringStream::write`                                                                                                        | `libjvm.dylib`             |
| +300.0% |    +3 | <0.1% → 0.1% |    1 → 4 | `State::MachNodeGenerator`                                                                                                   | `libjvm.dylib`             |

##### Standard library

|  Change | Delta |            % | Samples | Function                                                                                    | Location                                              |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
|     new |   +32 |  0.0% → 0.5% |  0 → 32 | `collector(Object, Object)`                                                                 | `java.lang.invoke.LambdaForm$MH.0x000000b801031800`   |
|     new |   +25 |  0.0% → 0.4% |  0 → 25 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000b801088800`  |
|     new |   +19 |  0.0% → 0.3% |  0 → 19 | `collector(Object, Object, Object)`                                                         | `java.lang.invoke.LambdaForm$MH.0x000000b8010a8c00`   |
|  +80.0% |   +12 |  0.2% → 0.5% | 15 → 27 | `getNode(Object)`                                                                           | `java.util.HashMap`                                   |
| +225.0% |    +9 |  0.1% → 0.2% |  4 → 13 | `join(PredictionContext, PredictionContext, PredictionContextCache)`                        | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext` |
|  +34.8% |    +8 |  0.4% → 0.5% | 23 → 31 | `invokeBasic(Object[])`                                                                     | `java.lang.invoke.MethodHandle`                       |
|     new |    +8 |  0.0% → 0.1% |   0 → 8 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000b801098800`   |
| +300.0% |    +6 | <0.1% → 0.1% |   2 → 8 | `afterNodeAccess(HashMap$Node)`                                                             | `java.util.LinkedHashMap`                             |
|  +33.3% |    +5 |  0.2% → 0.3% | 15 → 20 | `<init>(MethodType, LambdaForm)`                                                            | `java.lang.invoke.MethodHandle`                       |
|     new |    +5 |  0.0% → 0.1% |   0 → 5 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000b80102ac00`   |
| +400.0% |    +4 | <0.1% → 0.1% |   1 → 5 | `forEachWithCancel(Spliterator, Sink)`                                                      | `java.util.stream.ReferencePipeline`                  |
| +100.0% |    +4 |         0.1% |   4 → 8 | `newArray(Class, int)`                                                                      | `java.lang.reflect.Array`                             |
| +400.0% |    +4 | <0.1% → 0.1% |   1 → 5 | `doInvokeMethod(Class, Object, String, Object[], boolean, boolean)`                         | `groovy.lang.MetaClassImpl`                           |
|     new |    +4 |  0.0% → 0.1% |   0 → 4 | `sequence(Pattern$Node)`                                                                    | `java.util.regex.Pattern`                             |
| +100.0% |    +4 |         0.1% |   4 → 8 | `getInCache(LambdaFormEditor$TransformKey)`                                                 | `java.lang.invoke.LambdaFormEditor`                   |
| +133.3% |    +4 | <0.1% → 0.1% |   3 → 7 | `removeStaleReferences()`                                                                   | `jdk.internal.util.ReferencedKeyMap`                  |
| +133.3% |    +4 | <0.1% → 0.1% |   3 → 7 | `get()`                                                                                     | `java.lang.ref.SoftReference`                         |
| +400.0% |    +4 | <0.1% → 0.1% |   1 → 5 | `checkIndex(int, int)`                                                                      | `java.util.Objects`                                   |
|     new |    +4 |  0.0% → 0.1% |   0 → 4 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x000000b801092800`  |
|     new |    +4 |  0.0% → 0.1% |   0 → 4 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000b8010ac000`   |

##### Ours

|  Change | Delta |            % | Samples | Function                                                    | Location                                                                                                       |
| ------: | ----: | -----------: | ------: | ----------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `doCall(Object)`                                            | `org.codenarc.util.WildcardPattern$_closure1`                                                                  |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `isRuleSuppressed(Rule)`                                    | `org.codenarc.analyzer.SuppressionAnalyzer`                                                                    |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `collectViolations(SourceCode, RuleSet)`                    | `org.codenarc.analyzer.AbstractSourceAnalyzer`                                                                 |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `getAstVisitor()`                                           | `org.codenarc.rule.AbstractAstVisitorRule`                                                                     |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `eachImportLine(SourceCode, Closure)`                       | `org.codenarc.rule.imports.AbstractImportRule`                                                                 |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `applyTo(SourceCode, List)`                                 | `org.codenarc.rule.unnecessary.UnnecessarySemicolonRule`                                                       |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `super$3$visitBlockStatement(BlockStatement)`               | `org.codenarc.rule.convention.IfStatementCouldBeTernaryAstVisitor`                                             |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `<init>(Collection)`                                        | `org.codenarc.rule.FieldReferenceAstVisitor`                                                                   |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `visitVariableExpression(VariableExpression)`               | `org.codenarc.rule.FieldReferenceAstVisitor`                                                                   |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `visitConstructorOrMethod(MethodNode, boolean)`             | `org.codenarc.rule.unused.UnusedMethodParameterAstVisitor`                                                     |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `codeReturnsBoolean(Statement)`                             | `org.codenarc.rule.design.BooleanMethodReturnsNullAstVisitor`                                                  |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `visitConstructorCallExpression(ConstructorCallExpression)` | `org.codenarc.rule.unnecessary.UnnecessaryInstantiationAstVisitor`                                             |
| +100.0% |    +1 |        <0.1% |   1 → 2 | `isMethodCallOnObject(Expression, String)`                  | `org.codenarc.util.AstUtil`                                                                                    |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `visitClassEx(ClassNode)`                                   | `org.codenarc.rule.unnecessary.UnnecessaryPackageReferenceAstVisitor`                                          |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `collectAllPrivateMethods(ModuleNode)`                      | `org.codenarc.rule.unused.UnusedPrivateMethodRule`                                                             |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `isChainedMethodCallOnDifferentLine(MethodCallExpression)`  | `org.codenarc.rule.formatting.IndentationAstVisitor`                                                           |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `visitMethodCallExpression(MethodCallExpression)`           | `org.codenarc.rule.unnecessary.UnnecessaryGetterAstVisitor`                                                    |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `doCall(Object)`                                            | `org.codenarc.rule.formatting.IndentationAstVisitor$_recordMethodColumnAndSourceLineForClosureBlocks_closure6` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `visitMethod(MethodNode)`                                   | `org.gmetrics.metric.cyclomatic.CyclomaticComplexityAstVisitor`                                                |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `processMethodNode(MethodNode, String)`                     | `org.codenarc.rule.formatting.SpaceBeforeOpeningBraceAstVisitor`                                               |

##### JIT

|  Change | Delta |            % | Samples | Function                  | Location    |
| ------: | ----: | -----------: | ------: | ------------------------- | ----------- |
|     new |   +11 |  0.0% → 0.2% |  0 → 11 | `I2C/C2I adapters(0xbb)`  | `<unknown>` |
| +150.0% |    +6 |  0.1% → 0.2% |  4 → 10 | `I2C/C2I adapters(0xb)`   | `<unknown>` |
|  +26.7% |    +4 |  0.2% → 0.3% | 15 → 19 | `itable stub`             | `<unknown>` |
| +200.0% |    +2 | <0.1% → 0.1% |   1 → 3 | `I2C/C2I adapters(0xbbb)` | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `call_stub`               | `<unknown>` |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |            % |  Samples | Function                                                                                    | Location                                             |
| ------: | ----: | -----------: | -------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|  -33.1% |   -39 |  2.0% → 1.4% | 118 → 79 | `cast(Object)`                                                                              | `java.lang.Class`                                    |
|  -33.9% |   -38 |  1.9% → 1.3% | 112 → 74 | `tlv_get_addr`                                                                              | `libdyld.dylib`                                      |
| removed |   -29 |  0.5% → 0.0% |   29 → 0 | `collector(Object, Object)`                                                                 | `java.lang.invoke.LambdaForm$MH.0x000000f001031800`  |
| removed |   -25 |  0.4% → 0.0% |   25 → 0 | `collector(Object, Object, Object)`                                                         | `java.lang.invoke.LambdaForm$MH.0x000000f0010a8c00`  |
|  -19.2% |   -23 |  2.0% → 1.7% | 120 → 97 | `PhaseChaitin::Split`                                                                       | `libjvm.dylib`                                       |
| removed |   -23 |  0.4% → 0.0% |   23 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000f001088800` |
|  -22.2% |   -22 |  1.6% → 1.3% |  99 → 77 | `Node::dominates`                                                                           | `libjvm.dylib`                                       |
|  -35.8% |   -19 |  0.9% → 0.6% |  53 → 34 | `__psynch_cvwait`                                                                           | `libsystem_kernel.dylib`                             |
|  -32.7% |   -16 |  0.8% → 0.6% |  49 → 33 | `__psynch_mutexwait`                                                                        | `libsystem_kernel.dylib`                             |
|  -34.1% |   -14 |  0.7% → 0.5% |  41 → 27 | `PhaseChaitin::elide_copy`                                                                  | `libjvm.dylib`                                       |
|  -44.8% |   -13 |  0.5% → 0.3% |  29 → 16 | `Type::cmp`                                                                                 | `libjvm.dylib`                                       |
|  -31.0% |   -13 |  0.7% → 0.5% |  42 → 29 | `ciObjectFactory::get_metadata`                                                             | `libjvm.dylib`                                       |
|  -31.7% |   -13 |  0.7% → 0.5% |  41 → 28 | `invokeVirtual(Object, Object)`                                                             | `java.lang.invoke.DirectMethodHandle$Holder`         |
|  -18.8% |   -12 |  1.1% → 0.9% |  64 → 52 | `IndexSetIterator::advance_and_next`                                                        | `libjvm.dylib`                                       |
|  -92.3% |   -12 | 0.2% → <0.1% |   13 → 1 | `I2C/C2I adapters(0xbaa)`                                                                   | `<unknown>`                                          |
|  -41.7% |   -10 |  0.4% → 0.2% |  24 → 14 | `PhaseLive::add_liveout`                                                                    | `libjvm.dylib`                                       |
|  -35.7% |   -10 |  0.5% → 0.3% |  28 → 18 | `NodeHash::hash_find_insert`                                                                | `libjvm.dylib`                                       |
|  -38.5% |   -10 |  0.4% → 0.3% |  26 → 16 | `PhaseIterGVN::add_users_to_worklist`                                                       | `libjvm.dylib`                                       |
|  -14.5% |   -10 |  1.1% → 1.0% |  69 → 59 | `Arena::contains`                                                                           | `libjvm.dylib`                                       |
|  -43.5% |   -10 |  0.4% → 0.2% |  23 → 13 | `InstanceKlass::find_method_index`                                                          | `libjvm.dylib`                                       |

##### Compiler

|  Change | Delta |            % |  Samples | Function                                  | Location       |
| ------: | ----: | -----------: | -------: | ----------------------------------------- | -------------- |
|  -19.2% |   -23 |  2.0% → 1.7% | 120 → 97 | `PhaseChaitin::Split`                     | `libjvm.dylib` |
|  -22.2% |   -22 |  1.6% → 1.3% |  99 → 77 | `Node::dominates`                         | `libjvm.dylib` |
|  -34.1% |   -14 |  0.7% → 0.5% |  41 → 27 | `PhaseChaitin::elide_copy`                | `libjvm.dylib` |
|  -44.8% |   -13 |  0.5% → 0.3% |  29 → 16 | `Type::cmp`                               | `libjvm.dylib` |
|  -31.0% |   -13 |  0.7% → 0.5% |  42 → 29 | `ciObjectFactory::get_metadata`           | `libjvm.dylib` |
|  -18.8% |   -12 |  1.1% → 0.9% |  64 → 52 | `IndexSetIterator::advance_and_next`      | `libjvm.dylib` |
|  -41.7% |   -10 |  0.4% → 0.2% |  24 → 14 | `PhaseLive::add_liveout`                  | `libjvm.dylib` |
|  -35.7% |   -10 |  0.5% → 0.3% |  28 → 18 | `NodeHash::hash_find_insert`              | `libjvm.dylib` |
|  -38.5% |   -10 |  0.4% → 0.3% |  26 → 16 | `PhaseIterGVN::add_users_to_worklist`     | `libjvm.dylib` |
|  -26.7% |    -8 |  0.5% → 0.4% |  30 → 22 | `PhaseIdealLoop::Dominators`              | `libjvm.dylib` |
|  -21.2% |    -7 |  0.5% → 0.4% |  33 → 26 | `Matcher::xform`                          | `libjvm.dylib` |
|  -77.8% |    -7 | 0.1% → <0.1% |    9 → 2 | `LinearScanWalker::split_before_usage`    | `libjvm.dylib` |
|  -33.3% |    -6 |  0.3% → 0.2% |  18 → 12 | `PhaseIterGVN::transform_old`             | `libjvm.dylib` |
|   -9.5% |    -6 |         1.0% |  63 → 57 | `PhaseChaitin::build_ifg_physical`        | `libjvm.dylib` |
|  -54.5% |    -6 |  0.2% → 0.1% |   11 → 5 | `Matcher::Label_Root`                     | `libjvm.dylib` |
|  -33.3% |    -6 |  0.3% → 0.2% |  18 → 12 | `Node::is_CFG`                            | `libjvm.dylib` |
| removed |    -6 |  0.1% → 0.0% |    6 → 0 | `Scheduling::ComputeUseCount`             | `libjvm.dylib` |
|  -33.3% |    -6 |  0.3% → 0.2% |  18 → 12 | `LinearScan::assign_reg_num`              | `libjvm.dylib` |
|  -20.8% |    -5 |  0.4% → 0.3% |  24 → 19 | `Unique_Node_List::remove`                | `libjvm.dylib` |
|  -83.3% |    -5 | 0.1% → <0.1% |    6 → 1 | `PhaseIterGVN::remove_globally_dead_node` | `libjvm.dylib` |

##### Native

|  Change | Delta |            % |  Samples | Function                                                                                                | Location                   |
| ------: | ----: | -----------: | -------: | ------------------------------------------------------------------------------------------------------- | -------------------------- |
|  -33.9% |   -38 |  1.9% → 1.3% | 112 → 74 | `tlv_get_addr`                                                                                          | `libdyld.dylib`            |
|  -35.8% |   -19 |  0.9% → 0.6% |  53 → 34 | `__psynch_cvwait`                                                                                       | `libsystem_kernel.dylib`   |
|  -32.7% |   -16 |  0.8% → 0.6% |  49 → 33 | `__psynch_mutexwait`                                                                                    | `libsystem_kernel.dylib`   |
|  -14.5% |   -10 |  1.1% → 1.0% |  69 → 59 | `Arena::contains`                                                                                       | `libjvm.dylib`             |
|  -43.5% |   -10 |  0.4% → 0.2% |  23 → 13 | `InstanceKlass::find_method_index`                                                                      | `libjvm.dylib`             |
|  -66.7% |   -10 |  0.2% → 0.1% |   15 → 5 | `frame::sender_raw`                                                                                     | `libjvm.dylib`             |
|  -70.0% |    -7 |  0.2% → 0.1% |   10 → 3 | `_qsort`                                                                                                | `libsystem_c.dylib`        |
|  -87.5% |    -7 | 0.1% → <0.1% |    8 → 1 | `PcDescContainer::find_pc_desc_internal`                                                                | `libjvm.dylib`             |
|  -50.0% |    -6 |  0.2% → 0.1% |   12 → 6 | `__psynch_mutexdrop`                                                                                    | `libsystem_kernel.dylib`   |
|  -75.0% |    -6 | 0.1% → <0.1% |    8 → 2 | `DependencyContext::add_dependent_nmethod`                                                              | `libjvm.dylib`             |
|  -22.2% |    -6 |         0.4% |  27 → 21 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>`  | `libjvm.dylib`             |
|  -71.4% |    -5 | 0.1% → <0.1% |    7 → 2 | `LinkedConcreteMethodFinder::is_witness`                                                                | `libjvm.dylib`             |
|  -38.5% |    -5 |  0.2% → 0.1% |   13 → 8 | `semaphore_wait_trap`                                                                                   | `libsystem_kernel.dylib`   |
|  -71.4% |    -5 | 0.1% → <0.1% |    7 → 2 | `void OopOopIterateDispatch<G1RootRegionScanClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` | `libjvm.dylib`             |
|  -50.0% |    -5 |  0.2% → 0.1% |   10 → 5 | `nmethod::metadata_at`                                                                                  | `libjvm.dylib`             |
|  -26.7% |    -4 |         0.2% |  15 → 11 | `nmethodBucket::next_not_unloading`                                                                     | `libjvm.dylib`             |
| removed |    -4 |  0.1% → 0.0% |    4 → 0 | `ConstantPool::klass_at_if_loaded`                                                                      | `libjvm.dylib`             |
|  -30.8% |    -4 |         0.2% |   13 → 9 | `posix_madvise`                                                                                         | `libsystem_kernel.dylib`   |
|  -80.0% |    -4 | 0.1% → <0.1% |    5 → 1 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_to_pb`                       | `libjvm.dylib`             |
|  -80.0% |    -4 | 0.1% → <0.1% |    5 → 1 | `_platform_memcmp`                                                                                      | `libsystem_platform.dylib` |

##### Standard library

|  Change | Delta |            % |  Samples | Function                                                                                    | Location                                             |
| ------: | ----: | -----------: | -------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|  -33.1% |   -39 |  2.0% → 1.4% | 118 → 79 | `cast(Object)`                                                                              | `java.lang.Class`                                    |
| removed |   -29 |  0.5% → 0.0% |   29 → 0 | `collector(Object, Object)`                                                                 | `java.lang.invoke.LambdaForm$MH.0x000000f001031800`  |
| removed |   -25 |  0.4% → 0.0% |   25 → 0 | `collector(Object, Object, Object)`                                                         | `java.lang.invoke.LambdaForm$MH.0x000000f0010a8c00`  |
| removed |   -23 |  0.4% → 0.0% |   23 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000f001088800` |
|  -31.7% |   -13 |  0.7% → 0.5% |  41 → 28 | `invokeVirtual(Object, Object)`                                                             | `java.lang.invoke.DirectMethodHandle$Holder`         |
| removed |    -9 |  0.1% → 0.0% |    9 → 0 | `collector(Object, Object, Object, Object)`                                                 | `java.lang.invoke.LambdaForm$MH.0x000000f0010d3c00`  |
| removed |    -7 |  0.1% → 0.0% |    7 → 0 | `guard(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x000000f0010ac800`  |
| removed |    -7 |  0.1% → 0.0% |    7 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000f00102ac00`  |
|  -60.0% |    -6 |  0.2% → 0.1% |   10 → 4 | `getAndPut(String, MemoizeCache$ValueProvider)`                                             | `org.codehaus.groovy.vmplugin.v8.CacheableCallSite`  |
|   -7.9% |    -5 |         1.0% |  63 → 58 | `newInstance(Class, int)`                                                                   | `java.lang.reflect.Array`                            |
| removed |    -5 |  0.1% → 0.0% |    5 → 0 | `invokeSpecial(Object, Object, Object)`                                                     | `java.lang.invoke.DirectMethodHandle$Holder`         |
|  -83.3% |    -5 | 0.1% → <0.1% |    6 → 1 | `lambdaFormEditor(LambdaForm)`                                                              | `java.lang.invoke.LambdaFormEditor`                  |
| removed |    -5 |  0.1% → 0.0% |    5 → 0 | `finish(int, int)`                                                                          | `groovyjarjarantlr4.v4.runtime.misc.MurmurHash`      |
|  -66.7% |    -4 | 0.1% → <0.1% |    6 → 2 | `hashCode()`                                                                                | `java.lang.String`                                   |
|  -50.0% |    -4 |         0.1% |    8 → 4 | `computeIfAbsent(Object, Function)`                                                         | `java.util.concurrent.ConcurrentHashMap`             |
|  -66.7% |    -4 | 0.1% → <0.1% |    6 → 2 | `doWithCallSite(MutableCallSite, Object[], BiFunction)`                                     | `org.codehaus.groovy.vmplugin.v8.IndyInterface`      |
| removed |    -4 |  0.1% → 0.0% |    4 → 0 | `guard(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$MH.0x000000f001098400`  |
| removed |    -4 |  0.1% → 0.0% |    4 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000f0010ad800`  |
| removed |    -4 |  0.1% → 0.0% |    4 → 0 | `guardWithTest(MethodHandle, MethodHandle, MethodHandle)`                                   | `java.lang.invoke.MethodHandles`                     |
| removed |    -4 |  0.1% → 0.0% |    4 → 0 | `getWeakMetaClass()`                                                                        | `org.codehaus.groovy.reflection.ClassInfo`           |

##### Ours

|  Change | Delta |            % | Samples | Function                                          | Location                                                                                    |
| ------: | ----: | -----------: | ------: | ------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| removed |    -3 | <0.1% → 0.0% |   3 → 0 | `<init>()`                                        | `org.codenarc.rule.AbstractAstVisitor`                                                      |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `getMetaClass()`                                  | `org.codenarc.rule.unnecessary.UnnecessarySemicolonRule`                                    |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `getAst()`                                        | `org.codenarc.source.AbstractSourceCode`                                                    |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `applyTo(SourceCode)`                             | `org.codenarc.rule.AbstractRule`                                                            |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `measureRuleProcessingTime(Rule, Closure)`        | `org.codenarc.analyzer.AbstractSourceAnalyzer`                                              |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `visitMethod(MethodNode)`                         | `org.codenarc.rule.AbstractAstVisitor`                                                      |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `matches(String)`                                 | `org.codenarc.util.WildcardPattern`                                                         |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `visitClosureExpression(ClosureExpression)`       | `org.codenarc.rule.formatting.ClosureStatementOnOpeningLineOfMultipleLineClosureAstVisitor` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `<init>(String, String)`                          | `org.codenarc.rule.ClassReferenceAstVisitor`                                                |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `processSourceLine(String, int)`                  | `org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor`                             |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `addViolationIfDuplicate(Expression, boolean)`    | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                                          |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `visitVariableExpression(VariableExpression)`     | `org.codenarc.rule.unused.UnusedPrivateMethodAstVisitor`                                    |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `getViolations()`                                 | `org.codenarc.rule.AbstractAstVisitor`                                                      |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `visitMethodCallExpression(MethodCallExpression)` | `org.codenarc.rule.groovyism.UseCollectManyAstVisitor`                                      |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `<init>(SourceCode)`                              | `org.codenarc.analyzer.SuppressionAnalyzer`                                                 |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `visitIfElse(IfStatement)`                        | `org.codenarc.rule.formatting.SpaceAfterIfAstVisitor`                                       |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `doCall(ImportNode)`                              | `org.codenarc.rule.convention.NoJavaUtilDateAstVisitor$_visitImports_closure1`              |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `isReady()`                                       | `org.codenarc.rule.AbstractRule`                                                            |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `visitExpressionStatement(ExpressionStatement)`   | `org.codenarc.rule.groovyism.UseCollectNestedAstVisitor`                                    |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `getMetaClass()`                                  | `org.codenarc.rule.convention.CouldBeElvisRule`                                             |

##### JIT

|  Change | Delta |            % | Samples | Function                         | Location    |
| ------: | ----: | -----------: | ------: | -------------------------------- | ----------- |
|  -92.3% |   -12 | 0.2% → <0.1% |  13 → 1 | `I2C/C2I adapters(0xbaa)`        | `<unknown>` |
|  -66.7% |    -4 | 0.1% → <0.1% |   6 → 2 | `I2C/C2I adapters(0xba)`         | `<unknown>` |
|  -33.3% |    -4 |  0.2% → 0.1% |  12 → 8 | `vtable stub`                    | `<unknown>` |
|  -50.0% |    -1 |        <0.1% |   2 → 1 | `I2C/C2I adapters(0xab)`         | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `I2C/C2I adapters(0xbbbbab)`     | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `I2C/C2I adapters(0xbbbbabbbbb)` | `<unknown>` |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

##### Compiler

|  Change | Delta |           % |   Samples | Function                                      | Location       |
| ------: | ----: | ----------: | --------: | --------------------------------------------- | -------------- |
|  +16.1% |   +22 | 2.3% → 2.7% | 137 → 159 | `PhaseCFG::do_global_code_motion`             | `libjvm.dylib` |
|  +29.3% |   +17 | 1.0% → 1.3% |   58 → 75 | `Compile::call_generator`                     | `libjvm.dylib` |
|  +31.3% |   +15 | 0.8% → 1.1% |   48 → 63 | `LIR_Assembler::emit_lir_list`                | `libjvm.dylib` |
|  +10.7% |   +14 | 2.2% → 2.5% | 131 → 145 | `PhaseCFG::global_code_motion`                | `libjvm.dylib` |
|  +38.9% |   +14 | 0.6% → 0.9% |   36 → 50 | `PhaseIdealLoop::build_loop_early`            | `libjvm.dylib` |
|  +28.0% |   +14 | 0.8% → 1.1% |   50 → 64 | `LIR_Assembler::emit_code`                    | `libjvm.dylib` |
|  +92.9% |   +13 | 0.2% → 0.5% |   14 → 27 | `PhaseIFG::effective_degree`                  | `libjvm.dylib` |
|   +8.1% |   +12 | 2.5% → 2.7% | 148 → 160 | `PhaseOutput::Output`                         | `libjvm.dylib` |
|  +21.4% |   +12 | 0.9% → 1.2% |   56 → 68 | `PhaseOutput::fill_buffer`                    | `libjvm.dylib` |
|  +80.0% |   +12 | 0.2% → 0.5% |   15 → 27 | `PhaseIdealLoop::split_if_with_blocks_pre`    | `libjvm.dylib` |
| +109.1% |   +12 | 0.2% → 0.4% |   11 → 23 | `BlockBegin::iterate_preorder`                | `libjvm.dylib` |
|  +33.3% |   +11 | 0.5% → 0.8% |   33 → 44 | `Matcher::Label_Root`                         | `libjvm.dylib` |
|  +30.6% |   +11 | 0.6% → 0.8% |   36 → 47 | `ciObjectFactory::create_new_metadata`        | `libjvm.dylib` |
|  +78.6% |   +11 | 0.2% → 0.4% |   14 → 25 | `LIR_OpVisitState::visit`                     | `libjvm.dylib` |
|  +71.4% |   +10 | 0.2% → 0.4% |   14 → 24 | `PhaseIFG::Compute_Effective_Degree`          | `libjvm.dylib` |
|  +14.1% |   +10 | 1.2% → 1.4% |   71 → 81 | `Matcher::match_tree`                         | `libjvm.dylib` |
|  +11.8% |   +10 | 1.4% → 1.6% |   85 → 95 | `Compilation::emit_code_body`                 | `libjvm.dylib` |
| +166.7% |   +10 | 0.1% → 0.3% |    6 → 16 | `MethodLiveness::BasicBlock::get_liveness_at` | `libjvm.dylib` |
|   +6.7% |    +9 | 2.2% → 2.5% | 135 → 144 | `PhaseIdealLoop::build_loop_late`             | `libjvm.dylib` |
|   +2.2% |    +9 | 6.8% → 7.2% | 409 → 418 | `PhaseIdealLoop::build_and_optimize`          | `libjvm.dylib` |

##### Native

|  Change | Delta |           % |   Samples | Function                                                                                                                                                                                | Location                   |
| ------: | ----: | ----------: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
|  +32.1% |   +34 | 1.8% → 2.4% | 106 → 140 | `G1EvacuateRegionsBaseTask::work`                                                                                                                                                       | `libjvm.dylib`             |
|  +64.2% |   +34 | 0.9% → 1.5% |   53 → 87 | `G1ParScanThreadState::trim_queue_to_threshold`                                                                                                                                         | `libjvm.dylib`             |
|  +54.2% |   +26 | 0.8% → 1.3% |   48 → 74 | `G1EvacuateRegionsTask::scan_roots`                                                                                                                                                     | `libjvm.dylib`             |
|  +67.6% |   +25 | 0.6% → 1.1% |   37 → 62 | `G1ScanHRForRegionClosure::scan_memregion`                                                                                                                                              | `libjvm.dylib`             |
|  +63.2% |   +24 | 0.6% → 1.1% |   38 → 62 | `void G1ScanHRForRegionClosure::ChunkScanner::on_dirty_cards<G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)>`                         | `libjvm.dylib`             |
|  +63.2% |   +24 | 0.6% → 1.1% |   38 → 62 | `G1ScanHRForRegionClosure::scan_heap_roots`                                                                                                                                             | `libjvm.dylib`             |
|  +63.2% |   +24 | 0.6% → 1.1% |   38 → 62 | `G1ScanHRForRegionClosure::do_heap_region`                                                                                                                                              | `libjvm.dylib`             |
|  +63.2% |   +24 | 0.6% → 1.1% |   38 → 62 | `G1RemSet::scan_heap_roots`                                                                                                                                                             | `libjvm.dylib`             |
| +240.0% |   +24 | 0.2% → 0.6% |   10 → 34 | `sys_icache_invalidate`                                                                                                                                                                 | `libsystem_platform.dylib` |
|  +52.8% |   +19 | 0.6% → 0.9% |   36 → 55 | `G1ParScanThreadState::do_copy_to_survivor_space`                                                                                                                                       | `libjvm.dylib`             |
| +158.3% |   +19 | 0.2% → 0.5% |   12 → 31 | `G1ParScanThreadState::steal_and_trim_queue`                                                                                                                                            | `libjvm.dylib`             |
|  +69.2% |   +18 | 0.4% → 0.8% |   26 → 44 | `nmethod::nmethod`                                                                                                                                                                      | `libjvm.dylib`             |
|  +19.8% |   +18 | 1.5% → 1.9% |  91 → 109 | `pthread_jit_write_protect_np`                                                                                                                                                          | `libsystem_pthread.dylib`  |
| +121.4% |   +17 | 0.2% → 0.5% |   14 → 31 | `CallGenerator::for_method_handle_inline`                                                                                                                                               | `libjvm.dylib`             |
| +121.4% |   +17 | 0.2% → 0.5% |   14 → 31 | `CallGenerator::for_method_handle_call`                                                                                                                                                 | `libjvm.dylib`             |
|   +4.0% |   +14 | 5.9% → 6.3% | 353 → 367 | `Parse::do_all_blocks`                                                                                                                                                                  | `libjvm.dylib`             |
| +116.7% |   +14 | 0.2% → 0.4% |   12 → 26 | `nmethod::oops_do_process_weak`                                                                                                                                                         | `libjvm.dylib`             |
| +116.7% |   +14 | 0.2% → 0.4% |   12 → 26 | `G1CodeBlobClosure::do_code_blob`                                                                                                                                                       | `libjvm.dylib`             |
| +116.7% |   +14 | 0.2% → 0.4% |   12 → 26 | `G1ScanAndCountCodeBlobClosure::do_code_blob`                                                                                                                                           | `libjvm.dylib`             |
| +116.7% |   +14 | 0.2% → 0.4% |   12 → 26 | `void ConcurrentHashTable<G1CodeRootSetHashTableConfig, (MEMFLAGS)5>::ScanTask::do_safepoint_scan<G1CodeRootSetHashTable::iterate_at_safepoint(CodeBlobClosure*)::'lambda'(nmethod**)>` | `libjvm.dylib`             |

##### Standard library

| Change |  Delta |            % |   Samples | Function                                                                                    | Location                                             |
| -----: | -----: | -----------: | --------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|    new | +2,136 | 0.0% → 36.7% | 0 → 2,136 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000b801088800` |
|    new | +2,135 | 0.0% → 36.6% | 0 → 2,135 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000b8010a9400`  |
|    new | +2,133 | 0.0% → 36.6% | 0 → 2,133 | `guardWithCatch(Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000b8010abc00`  |
|    new | +2,133 | 0.0% → 36.6% | 0 → 2,133 | `reinvoke(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$MH.0x000000b8010ac400`  |
|    new | +2,133 | 0.0% → 36.6% | 0 → 2,133 | `guard(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x000000b8010ac800`  |
|    new | +2,126 | 0.0% → 36.5% | 0 → 2,126 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x000000b801092800` |
|    new | +2,125 | 0.0% → 36.5% | 0 → 2,125 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000b8010c6400`  |
|    new | +2,125 | 0.0% → 36.5% | 0 → 2,125 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000b8010c7000`  |
|    new | +2,123 | 0.0% → 36.4% | 0 → 2,123 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000b801092000`  |
|    new | +2,115 | 0.0% → 36.3% | 0 → 2,115 | `guardWithCatch(Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000b801096800`  |
|    new | +2,115 | 0.0% → 36.3% | 0 → 2,115 | `reinvoke(Object, Object)`                                                                  | `java.lang.invoke.LambdaForm$MH.0x000000b801098000`  |
|    new | +2,115 | 0.0% → 36.3% | 0 → 2,115 | `guard(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$MH.0x000000b801098400`  |
|    new | +2,111 | 0.0% → 36.2% | 0 → 2,111 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000b80109a000`  |
|    new | +2,111 | 0.0% → 36.2% | 0 → 2,111 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000b80102b000`  |
|    new | +2,106 | 0.0% → 36.1% | 0 → 2,106 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000b8010ab400`  |
|    new | +2,070 | 0.0% → 35.5% | 0 → 2,070 | `invokeInterface(Object, Object, Object, Object, Object)`                                   | `java.lang.invoke.LambdaForm$DMH.0x000000b801093400` |
|    new | +2,069 | 0.0% → 35.5% | 0 → 2,069 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000b8010d4c00`  |
|    new | +2,037 | 0.0% → 35.0% | 0 → 2,037 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000b8010d3800`  |
|    new | +2,033 | 0.0% → 34.9% | 0 → 2,033 | `guardWithCatch(Object, Object, Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x000000b8010d4000`  |
|    new | +2,033 | 0.0% → 34.9% | 0 → 2,033 | `guard(Object, Object, Object, Object)`                                                     | `java.lang.invoke.LambdaForm$MH.0x000000b801188c00`  |

##### Ours

|  Change | Delta |            % |   Samples | Function                                          | Location                                                                                     |
| ------: | ----: | -----------: | --------: | ------------------------------------------------- | -------------------------------------------------------------------------------------------- |
|  +29.4% |   +15 |  0.8% → 1.1% |   51 → 66 | `getAstVisitor()`                                 | `org.codenarc.rule.AbstractAstVisitorRule`                                                   |
|   +5.9% |   +14 |  3.9% → 4.3% | 236 → 250 | `isRuleSuppressed(Rule)`                          | `org.codenarc.analyzer.SuppressionAnalyzer`                                                  |
|  +73.7% |   +14 |  0.3% → 0.6% |   19 → 33 | `visitClassComplete(ClassNode)`                   | `org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor`                              |
|   +5.2% |   +12 |  3.9% → 4.2% | 232 → 244 | `init()`                                          | `org.codenarc.source.AbstractSourceCode`                                                     |
|   +5.2% |   +12 |  3.9% → 4.2% | 232 → 244 | `init()`                                          | `org.codenarc.analyzer.SuppressionAnalyzer`                                                  |
|  +63.2% |   +12 |  0.3% → 0.5% |   19 → 31 | `doCall(Object)`                                  | `org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor$_visitClassComplete_closure1` |
|   +4.3% |   +10 |  3.9% → 4.2% | 235 → 245 | `getAst()`                                        | `org.codenarc.source.AbstractSourceCode`                                                     |
|  +16.1% |   +10 |  1.0% → 1.2% |   62 → 72 | `super$3$applyTo(SourceCode, List)`               | `org.codenarc.rule.formatting.IndentationRule`                                               |
| +200.0% |   +10 |  0.1% → 0.3% |    5 → 15 | `calculate(MethodNode, SourceCode)`               | `org.gmetrics.metric.abc.AbcMetric`                                                          |
| +500.0% |   +10 | <0.1% → 0.2% |    2 → 12 | `visitClassComplete(ClassNode)`                   | `org.codenarc.rule.formatting.ClassEndsWithBlankLineAstVisitor`                              |
|   +3.5% |    +9 |  4.3% → 4.6% | 260 → 269 | `doCall(Object)`                                  | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`                   |
|  +14.3% |    +9 |  1.0% → 1.2% |   63 → 72 | `applyTo(SourceCode, List)`                       | `org.codenarc.rule.formatting.IndentationRule`                                               |
| +100.0% |    +9 |  0.1% → 0.3% |    9 → 18 | `visitConstructorOrMethod(MethodNode, boolean)`   | `org.codenarc.rule.unnecessary.UnnecessaryDefInMethodDeclarationAstVisitor`                  |
|  +32.1% |    +9 |  0.5% → 0.6% |   28 → 37 | `visitBinaryExpression(BinaryExpression)`         | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                                           |
|  +90.0% |    +9 |  0.2% → 0.3% |   10 → 19 | `super$2$visitBinaryExpression(BinaryExpression)` | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                                           |
|  +29.6% |    +8 |  0.4% → 0.6% |   27 → 35 | `visitMethodCallExpression(MethodCallExpression)` | `org.codenarc.rule.formatting.IndentationAstVisitor`                                         |
|  +38.9% |    +7 |  0.3% → 0.4% |   18 → 25 | `processSourceLine(String, int)`                  | `org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor`                              |
|  +28.6% |    +6 |  0.3% → 0.5% |   21 → 27 | `visitStatement(Statement)`                       | `org.codenarc.rule.unnecessary.UnnecessarySemicolonAstVisitor`                               |
|  +50.0% |    +6 |  0.2% → 0.3% |   12 → 18 | `checkNode(ASTNode)`                              | `org.codenarc.rule.unnecessary.UnnecessarySemicolonAstVisitor`                               |
| +200.0% |    +6 | <0.1% → 0.2% |     3 → 9 | `checkImport(String, int, Set, List)`             | `org.codenarc.rule.imports.DuplicateImportRule`                                              |

##### JIT

|   Change | Delta |            % | Samples | Function                  | Location    |
| -------: | ----: | -----------: | ------: | ------------------------- | ----------- |
| +1000.0% |   +10 | <0.1% → 0.2% |  1 → 11 | `I2C/C2I adapters(0xbb)`  | `<unknown>` |
|  +150.0% |    +6 |  0.1% → 0.2% |  4 → 10 | `I2C/C2I adapters(0xb)`   | `<unknown>` |
|   +26.7% |    +4 |  0.2% → 0.3% | 15 → 19 | `itable stub`             | `<unknown>` |
|  +200.0% |    +2 | <0.1% → 0.1% |   1 → 3 | `I2C/C2I adapters(0xbbb)` | `<unknown>` |
|      new |    +1 | 0.0% → <0.1% |   0 → 1 | `call_stub`               | `<unknown>` |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

##### Compiler

| Change | Delta |             % |       Samples | Function                                    | Location       |
| -----: | ----: | ------------: | ------------: | ------------------------------------------- | -------------- |
|  -4.0% |  -139 | 58.0% → 57.3% | 3,479 → 3,340 | `CompileBroker::compiler_thread_loop`       | `libjvm.dylib` |
|  -3.6% |  -122 | 57.2% → 56.8% | 3,430 → 3,308 | `CompileBroker::invoke_compiler_on_method`  | `libjvm.dylib` |
|  -4.0% |  -112 | 46.4% → 45.9% | 2,785 → 2,673 | `Compile::Compile`                          | `libjvm.dylib` |
|  -4.0% |  -111 | 46.4% → 45.9% | 2,787 → 2,676 | `C2Compiler::compile_method`                | `libjvm.dylib` |
|  -7.8% |   -84 | 18.0% → 17.1% |   1,082 → 998 | `Compile::Optimize`                         | `libjvm.dylib` |
|  -7.6% |   -57 | 12.5% → 11.9% |     753 → 696 | `PhaseChaitin::Register_Allocate`           | `libjvm.dylib` |
| -14.6% |   -55 |   6.3% → 5.5% |     377 → 322 | `PhaseIterGVN::transform_old`               | `libjvm.dylib` |
| -13.7% |   -54 |   6.6% → 5.9% |     395 → 341 | `PhaseIterGVN::optimize`                    | `libjvm.dylib` |
|  -3.1% |   -41 |         22.3% | 1,339 → 1,298 | `Compile::Code_Gen`                         | `libjvm.dylib` |
| -16.8% |   -30 |   3.0% → 2.6% |     179 → 149 | `GraphBuilder::iterate_bytecodes_for_block` | `libjvm.dylib` |
| -16.7% |   -30 |   3.0% → 2.6% |     180 → 150 | `GraphBuilder::iterate_all_blocks`          | `libjvm.dylib` |
| -14.4% |   -27 |   3.1% → 2.8% |     188 → 161 | `GraphBuilder::GraphBuilder`                | `libjvm.dylib` |
| -15.3% |   -25 |   2.7% → 2.4% |     163 → 138 | `GraphBuilder::invoke`                      | `libjvm.dylib` |
| -23.5% |   -24 |   1.7% → 1.3% |      102 → 78 | `MemNode::all_controls_dominate`            | `libjvm.dylib` |
| -24.2% |   -24 |   1.6% → 1.3% |       99 → 75 | `InitializeNode::detect_init_independence`  | `libjvm.dylib` |
| -24.0% |   -24 |   1.7% → 1.3% |      100 → 76 | `InitializeNode::can_capture_store`         | `libjvm.dylib` |
| -15.7% |   -24 |   2.5% → 2.2% |     153 → 129 | `GraphBuilder::try_inline`                  | `libjvm.dylib` |
| -22.1% |   -23 |   1.7% → 1.4% |      104 → 81 | `StoreNode::Ideal`                          | `libjvm.dylib` |
| -22.2% |   -22 |   1.6% → 1.3% |       99 → 77 | `Node::dominates`                           | `libjvm.dylib` |
| -15.0% |   -22 |   2.4% → 2.1% |     147 → 125 | `GraphBuilder::try_inline_full`             | `libjvm.dylib` |

##### Native

| Change | Delta |             % |       Samples | Function                                           | Location                  |
| -----: | ----: | ------------: | ------------: | -------------------------------------------------- | ------------------------- |
|  -4.0% |  -138 | 58.0% → 57.4% | 3,480 → 3,342 | `JavaThread::thread_main_inner`                    | `libjvm.dylib`            |
|  -3.3% |  -126 | 62.7% → 62.5% | 3,765 → 3,639 | `Thread::call_run`                                 | `libjvm.dylib`            |
|  -3.3% |  -126 | 62.7% → 62.5% | 3,765 → 3,639 | `thread_native_entry`                              | `libjvm.dylib`            |
|  -3.3% |  -126 | 62.8% → 62.5% | 3,766 → 3,640 | `_pthread_start`                                   | `libsystem_pthread.dylib` |
|  -3.3% |  -126 | 62.8% → 62.5% | 3,766 → 3,640 | `thread_start`                                     | `libsystem_pthread.dylib` |
| -33.9% |   -38 |   1.9% → 1.3% |      112 → 74 | `tlv_get_addr`                                     | `libdyld.dylib`           |
| -14.4% |   -27 |   3.1% → 2.8% |     188 → 161 | `IRScope::IRScope`                                 | `libjvm.dylib`            |
| -14.4% |   -27 |   3.1% → 2.8% |     188 → 161 | `IR::IR`                                           | `libjvm.dylib`            |
| -74.2% |   -23 |   0.5% → 0.1% |        31 → 8 | `TaskTerminator::offer_termination`                | `libjvm.dylib`            |
| -36.7% |   -22 |   1.0% → 0.7% |       60 → 38 | `PlatformMonitor::wait`                            | `libjvm.dylib`            |
| -73.3% |   -22 |   0.5% → 0.1% |        30 → 8 | `G1ParEvacuateFollowersClosure::offer_termination` | `libjvm.dylib`            |
| -35.8% |   -19 |   0.9% → 0.6% |       53 → 34 | `__psynch_cvwait`                                  | `libsystem_kernel.dylib`  |
| -32.7% |   -16 |   0.8% → 0.6% |       49 → 33 | `__psynch_mutexwait`                               | `libsystem_kernel.dylib`  |
| -32.7% |   -16 |   0.8% → 0.6% |       49 → 33 | `_pthread_mutex_firstfit_lock_slow`                | `libsystem_pthread.dylib` |
| -60.0% |   -15 |   0.4% → 0.2% |       25 → 10 | `ThreadCritical::ThreadCritical`                   | `libjvm.dylib`            |
| -34.9% |   -15 |   0.7% → 0.5% |       43 → 28 | `MethodHandles::resolve_MemberName`                | `libjvm.dylib`            |
| -35.0% |   -14 |   0.7% → 0.4% |       40 → 26 | `InstanceKlass::add_dependent_nmethod`             | `libjvm.dylib`            |
| -32.6% |   -14 |   0.7% → 0.5% |       43 → 29 | `MHN_resolve_Mem`                                  | `libjvm.dylib`            |
| -18.3% |   -13 |   1.2% → 1.0% |       71 → 58 | `Dict::Insert`                                     | `libjvm.dylib`            |
| -27.3% |   -12 |   0.7% → 0.5% |       44 → 32 | `Monitor::wait`                                    | `libjvm.dylib`            |

##### Standard library

|  Change |  Delta |            % |   Samples | Function                                                                                    | Location                                             |
| ------: | -----: | -----------: | --------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed | -2,188 | 36.5% → 0.0% | 2,188 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000f001088800` |
| removed | -2,187 | 36.4% → 0.0% | 2,187 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000f0010a9400`  |
| removed | -2,185 | 36.4% → 0.0% | 2,185 → 0 | `guardWithCatch(Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000f0010abc00`  |
| removed | -2,185 | 36.4% → 0.0% | 2,185 → 0 | `reinvoke(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$MH.0x000000f0010ac400`  |
| removed | -2,185 | 36.4% → 0.0% | 2,185 → 0 | `guard(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x000000f0010ac800`  |
| removed | -2,178 | 36.3% → 0.0% | 2,178 → 0 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x000000f001092800` |
| removed | -2,177 | 36.3% → 0.0% | 2,177 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000f0010c6400`  |
| removed | -2,177 | 36.3% → 0.0% | 2,177 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000f0010c7000`  |
| removed | -2,176 | 36.3% → 0.0% | 2,176 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000f001092000`  |
| removed | -2,168 | 36.1% → 0.0% | 2,168 → 0 | `guardWithCatch(Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000f001096800`  |
| removed | -2,168 | 36.1% → 0.0% | 2,168 → 0 | `guard(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$MH.0x000000f001098400`  |
| removed | -2,167 | 36.1% → 0.0% | 2,167 → 0 | `reinvoke(Object, Object)`                                                                  | `java.lang.invoke.LambdaForm$MH.0x000000f001098000`  |
| removed | -2,162 | 36.0% → 0.0% | 2,162 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000f00102b000`  |
| removed | -2,162 | 36.0% → 0.0% | 2,162 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000f00109a000`  |
| removed | -2,155 | 35.9% → 0.0% | 2,155 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000f0010ab400`  |
| removed | -2,122 | 35.4% → 0.0% | 2,122 → 0 | `invokeInterface(Object, Object, Object, Object, Object)`                                   | `java.lang.invoke.LambdaForm$DMH.0x000000f001093400` |
| removed | -2,116 | 35.3% → 0.0% | 2,116 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000f0010d4c00`  |
| removed | -2,090 | 34.8% → 0.0% | 2,090 → 0 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000f0010d3800`  |
| removed | -2,081 | 34.7% → 0.0% | 2,081 → 0 | `guardWithCatch(Object, Object, Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x000000f0010d4000`  |
| removed | -2,081 | 34.7% → 0.0% | 2,081 → 0 | `guard(Object, Object, Object, Object)`                                                     | `java.lang.invoke.LambdaForm$MH.0x000000f001188c00`  |

##### Ours

| Change | Delta |             % |       Samples | Function                                                    | Location                                                                                          |
| -----: | ----: | ------------: | ------------: | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
|  -2.4% |   -52 | 36.5% → 36.7% | 2,191 → 2,139 | `main(String[])`                                            | `org.codenarc.CodeNarc`                                                                           |
|  -2.4% |   -52 | 36.3% → 36.5% | 2,177 → 2,125 | `execute(String[])`                                         | `org.codenarc.CodeNarc`                                                                           |
|  -2.4% |   -51 | 36.0% → 36.2% | 2,162 → 2,111 | `execute()`                                                 | `org.codenarc.CodeNarcRunner`                                                                     |
|  -3.1% |   -51 | 27.7% → 27.6% | 1,662 → 1,611 | `measureRuleProcessingTime(Rule, Closure)`                  | `org.codenarc.analyzer.AbstractSourceAnalyzer`                                                    |
|  -2.2% |   -45 | 33.6% → 33.8% | 2,017 → 1,972 | `analyze(RuleSet)`                                          | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                                                  |
|  -2.2% |   -45 | 33.4% → 33.7% | 2,007 → 1,962 | `processFile(String, DirectoryResults, RuleSet)`            | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                                                  |
|  -2.2% |   -45 | 33.6% → 33.8% | 2,016 → 1,971 | `doCall(Object)`                                            | `org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`                       |
|  -2.2% |   -45 | 33.6% → 33.8% | 2,016 → 1,971 | `processDirectory(String, RuleSet)`                         | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                                                  |
|  -1.9% |   -37 | 33.2% → 33.6% | 1,994 → 1,957 | `collectViolations(SourceCode, RuleSet)`                    | `org.codenarc.analyzer.AbstractSourceAnalyzer`                                                    |
| -40.0% |   -12 |   0.5% → 0.3% |       30 → 18 | `visitConstantExpression(ConstantExpression)`               | `org.codenarc.rule.unnecessary.UnnecessaryGStringAstVisitor`                                      |
| -32.4% |   -11 |   0.6% → 0.4% |       34 → 23 | `visitClass(ClassNode)`                                     | `org.codenarc.rule.AbstractMethodVisitor`                                                         |
|  -1.5% |   -10 | 11.2% → 11.4% |     674 → 664 | `visitMethod(MethodNode)`                                   | `org.codenarc.rule.AbstractAstVisitor`                                                            |
| -60.0% |    -9 |   0.2% → 0.1% |        15 → 6 | `suppressException(Class, Closure)`                         | `org.codenarc.rule.unnecessary.UnnecessaryGStringAstVisitor`                                      |
| -66.7% |    -8 |   0.2% → 0.1% |        12 → 4 | `applyTo(SourceCode, List)`                                 | `org.codenarc.rule.imports.MisorderedStaticImportsRule`                                           |
| -50.0% |    -8 |   0.3% → 0.1% |        16 → 8 | `doCall(Object)`                                            | `org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor$_processMethodOrConstructorCall_closure3` |
| -88.9% |    -8 |  0.1% → <0.1% |         9 → 1 | `visitClassEx(ClassNode)`                                   | `org.codenarc.rule.unnecessary.UnnecessaryPackageReferenceAstVisitor`                             |
| -32.0% |    -8 |   0.4% → 0.3% |       25 → 17 | `doCall(Object)`                                            | `org.codenarc.report.TextReportWriter$_writeFileViolations_closure6`                              |
| -70.0% |    -7 |   0.2% → 0.1% |        10 → 3 | `addOrderingViolations(SourceCode, String, String, String)` | `org.codenarc.rule.imports.MisorderedStaticImportsRule`                                           |
| -43.8% |    -7 |   0.3% → 0.2% |        16 → 9 | `visitClassEx(ClassNode)`                                   | `org.codenarc.rule.naming.ConfusingMethodNameAstVisitor`                                          |
| -53.8% |    -7 |   0.2% → 0.1% |        13 → 6 | `doCall(Object)`                                            | `org.codenarc.rule.unnecessary.UnnecessaryGStringAstVisitor$_visitConstantExpression_closure1`    |

##### JIT

|  Change | Delta |            % | Samples | Function                         | Location    |
| ------: | ----: | -----------: | ------: | -------------------------------- | ----------- |
|  -92.3% |   -12 | 0.2% → <0.1% |  13 → 1 | `I2C/C2I adapters(0xbaa)`        | `<unknown>` |
|  -66.7% |    -4 | 0.1% → <0.1% |   6 → 2 | `I2C/C2I adapters(0xba)`         | `<unknown>` |
|  -33.3% |    -4 |  0.2% → 0.1% |  12 → 8 | `vtable stub`                    | `<unknown>` |
|  -50.0% |    -1 |        <0.1% |   2 → 1 | `I2C/C2I adapters(0xab)`         | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `I2C/C2I adapters(0xbbbbab)`     | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `I2C/C2I adapters(0xbbbbabbbbb)` | `<unknown>` |

# Sampling profile diff

Collected 5,809 samples → 6,132 samples (+323 samples, +5.6%).

| Category          | Change | Delta |             % |       Samples |
| ----------------- | -----: | ----: | ------------: | ------------: |
| Compiler          |  +6.9% |  +174 | 43.4% → 43.9% | 2,520 → 2,694 |
| Native            |  +8.9% |  +145 | 27.9% → 28.8% | 1,621 → 1,766 |
| Standard library  |  +2.0% |   +31 | 26.0% → 25.2% | 1,513 → 1,544 |
| Ours              | -16.7% |   -15 |   1.5% → 1.2% |       90 → 75 |
| JIT               | -19.7% |   -12 |   1.1% → 0.8% |       61 → 49 |
| Garbage collector |   0.0% |     0 |          0.1% |             4 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |           % |   Samples | Function                                                                                                                     | Location                                            |
| ------: | ----: | ----------: | --------: | ---------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
|  +59.0% |   +36 | 1.1% → 1.6% |   61 → 97 | `Node::dominates`                                                                                                            | `libjvm.dylib`                                      |
|  +30.4% |   +31 | 1.8% → 2.2% | 102 → 133 | `PhaseChaitin::Split`                                                                                                        | `libjvm.dylib`                                      |
|  +45.6% |   +26 | 1.0% → 1.4% |   57 → 83 | `Arena::contains`                                                                                                            | `libjvm.dylib`                                      |
|  +25.8% |   +25 | 1.7% → 2.0% |  97 → 122 | `pthread_jit_write_protect_np`                                                                                               | `libsystem_pthread.dylib`                           |
|  +30.3% |   +23 | 1.3% → 1.6% |   76 → 99 | `tlv_get_addr`                                                                                                               | `libdyld.dylib`                                     |
| +135.3% |   +23 | 0.3% → 0.7% |   17 → 40 | `G1ParScanThreadState::trim_queue_to_threshold`                                                                              | `libjvm.dylib`                                      |
|  +71.0% |   +22 | 0.5% → 0.9% |   31 → 53 | `G1ParScanThreadState::do_copy_to_survivor_space`                                                                            | `libjvm.dylib`                                      |
| +136.4% |   +15 | 0.2% → 0.4% |   11 → 26 | `LinearScanWalker::alloc_free_reg`                                                                                           | `libjvm.dylib`                                      |
|  +61.9% |   +13 | 0.4% → 0.6% |   21 → 34 | `collector(Object, Object, Object)`                                                                                          | `java.lang.invoke.LambdaForm$MH.0x00000070010a1000` |
| +100.0% |   +12 | 0.2% → 0.4% |   12 → 24 | `sys_icache_invalidate`                                                                                                      | `libsystem_platform.dylib`                          |
|  +91.7% |   +11 | 0.2% → 0.4% |   12 → 23 | `Dict::Insert`                                                                                                               | `libjvm.dylib`                                      |
| +220.0% |   +11 | 0.1% → 0.3% |    5 → 16 | `Node::clone`                                                                                                                | `libjvm.dylib`                                      |
|  +45.8% |   +11 | 0.4% → 0.6% |   24 → 35 | `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>` | `libjvm.dylib`                                      |
|  +76.9% |   +10 | 0.2% → 0.4% |   13 → 23 | `Matcher::match_tree`                                                                                                        | `libjvm.dylib`                                      |
|  +71.4% |   +10 | 0.2% → 0.4% |   14 → 24 | `Type::cmp`                                                                                                                  | `libjvm.dylib`                                      |
| +125.0% |   +10 | 0.1% → 0.3% |    8 → 18 | `LinearScan::build_intervals`                                                                                                | `libjvm.dylib`                                      |
| +125.0% |   +10 | 0.1% → 0.3% |    8 → 18 | `ValueStack::values_do`                                                                                                      | `libjvm.dylib`                                      |
|  +42.9% |    +9 | 0.4% → 0.5% |   21 → 30 | `PhaseLive::add_liveout`                                                                                                     | `libjvm.dylib`                                      |
|  +23.1% |    +9 | 0.7% → 0.8% |   39 → 48 | `PhaseAggressiveCoalesce::insert_copies`                                                                                     | `libjvm.dylib`                                      |
|  +75.0% |    +9 | 0.2% → 0.3% |   12 → 21 | `_platform_memmove`                                                                                                          | `libsystem_platform.dylib`                          |

##### Compiler

|  Change | Delta |            % |   Samples | Function                                             | Location       |
| ------: | ----: | -----------: | --------: | ---------------------------------------------------- | -------------- |
|  +59.0% |   +36 |  1.1% → 1.6% |   61 → 97 | `Node::dominates`                                    | `libjvm.dylib` |
|  +30.4% |   +31 |  1.8% → 2.2% | 102 → 133 | `PhaseChaitin::Split`                                | `libjvm.dylib` |
| +136.4% |   +15 |  0.2% → 0.4% |   11 → 26 | `LinearScanWalker::alloc_free_reg`                   | `libjvm.dylib` |
| +220.0% |   +11 |  0.1% → 0.3% |    5 → 16 | `Node::clone`                                        | `libjvm.dylib` |
|  +76.9% |   +10 |  0.2% → 0.4% |   13 → 23 | `Matcher::match_tree`                                | `libjvm.dylib` |
|  +71.4% |   +10 |  0.2% → 0.4% |   14 → 24 | `Type::cmp`                                          | `libjvm.dylib` |
| +125.0% |   +10 |  0.1% → 0.3% |    8 → 18 | `LinearScan::build_intervals`                        | `libjvm.dylib` |
| +125.0% |   +10 |  0.1% → 0.3% |    8 → 18 | `ValueStack::values_do`                              | `libjvm.dylib` |
|  +42.9% |    +9 |  0.4% → 0.5% |   21 → 30 | `PhaseLive::add_liveout`                             | `libjvm.dylib` |
|  +23.1% |    +9 |  0.7% → 0.8% |   39 → 48 | `PhaseAggressiveCoalesce::insert_copies`             | `libjvm.dylib` |
|  +80.0% |    +8 |  0.2% → 0.3% |   10 → 18 | `PhaseIdealLoop::dom_lca_for_get_late_ctrl_internal` | `libjvm.dylib` |
|  +25.0% |    +7 |  0.5% → 0.6% |   28 → 35 | `PhaseChaitin::gather_lrg_masks`                     | `libjvm.dylib` |
| +140.0% |    +7 |  0.1% → 0.2% |    5 → 12 | `MachNode::ideal_reg`                                | `libjvm.dylib` |
| +233.3% |    +7 |  0.1% → 0.2% |    3 → 10 | `LinearScan::assign_reg_num`                         | `libjvm.dylib` |
| +700.0% |    +7 | <0.1% → 0.1% |     1 → 8 | `Node::has_special_unique_user`                      | `libjvm.dylib` |
|  +26.1% |    +6 |  0.4% → 0.5% |   23 → 29 | `PhaseChaitin::post_allocate_copy_removal`           | `libjvm.dylib` |
| +300.0% |    +6 | <0.1% → 0.1% |     2 → 8 | `PhaseChaitin::raise_pressure`                       | `libjvm.dylib` |
|  +54.5% |    +6 |  0.2% → 0.3% |   11 → 17 | `Node::is_CFG`                                       | `libjvm.dylib` |
| +300.0% |    +6 | <0.1% → 0.1% |     2 → 8 | `Node::rematerialize`                                | `libjvm.dylib` |
| +600.0% |    +6 | <0.1% → 0.1% |     1 → 7 | `BoolNode::Opcode`                                   | `libjvm.dylib` |

##### Native

|  Change | Delta |            % |  Samples | Function                                                                                                                     | Location                   |
| ------: | ----: | -----------: | -------: | ---------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
|  +45.6% |   +26 |  1.0% → 1.4% |  57 → 83 | `Arena::contains`                                                                                                            | `libjvm.dylib`             |
|  +25.8% |   +25 |  1.7% → 2.0% | 97 → 122 | `pthread_jit_write_protect_np`                                                                                               | `libsystem_pthread.dylib`  |
|  +30.3% |   +23 |  1.3% → 1.6% |  76 → 99 | `tlv_get_addr`                                                                                                               | `libdyld.dylib`            |
| +135.3% |   +23 |  0.3% → 0.7% |  17 → 40 | `G1ParScanThreadState::trim_queue_to_threshold`                                                                              | `libjvm.dylib`             |
|  +71.0% |   +22 |  0.5% → 0.9% |  31 → 53 | `G1ParScanThreadState::do_copy_to_survivor_space`                                                                            | `libjvm.dylib`             |
| +100.0% |   +12 |  0.2% → 0.4% |  12 → 24 | `sys_icache_invalidate`                                                                                                      | `libsystem_platform.dylib` |
|  +91.7% |   +11 |  0.2% → 0.4% |  12 → 23 | `Dict::Insert`                                                                                                               | `libjvm.dylib`             |
|  +45.8% |   +11 |  0.4% → 0.6% |  24 → 35 | `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>` | `libjvm.dylib`             |
|  +75.0% |    +9 |  0.2% → 0.3% |  12 → 21 | `_platform_memmove`                                                                                                          | `libsystem_platform.dylib` |
|  +23.7% |    +9 |  0.7% → 0.8% |  38 → 47 | `__psynch_mutexwait`                                                                                                         | `libsystem_kernel.dylib`   |
|  +72.7% |    +8 |  0.2% → 0.3% |  11 → 19 | `posix_madvise`                                                                                                              | `libsystem_kernel.dylib`   |
| +266.7% |    +8 |  0.1% → 0.2% |   3 → 11 | `__psynch_mutexdrop`                                                                                                         | `libsystem_kernel.dylib`   |
|  +40.0% |    +6 |         0.3% |  15 → 21 | `InstanceKlass::find_method_index`                                                                                           | `libjvm.dylib`             |
| +600.0% |    +6 | <0.1% → 0.1% |    1 → 7 | `CompiledMethod::cleanup_inline_caches_impl`                                                                                 | `libjvm.dylib`             |
|  +42.9% |    +6 |  0.2% → 0.3% |  14 → 20 | `BacktraceBuilder::push`                                                                                                     | `libjvm.dylib`             |
| +125.0% |    +5 |         0.1% |    4 → 9 | `SignatureStream::next`                                                                                                      | `libjvm.dylib`             |
|   +7.8% |    +5 |         1.1% |  64 → 69 | `java_lang_Throwable::fill_in_stack_trace`                                                                                   | `libjvm.dylib`             |
| +250.0% |    +5 | <0.1% → 0.1% |    2 → 7 | `ResolvedMethodTable::find_method`                                                                                           | `libjvm.dylib`             |
| +500.0% |    +5 | <0.1% → 0.1% |    1 → 6 | `pthread_mutex_lock`                                                                                                         | `libsystem_pthread.dylib`  |
| +133.3% |    +4 |         0.1% |    3 → 7 | `void OopOopIterateDispatch<G1RootRegionScanClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>`                      | `libjvm.dylib`             |

##### Standard library

|  Change | Delta |            % | Samples | Function                                                                                                    | Location                                                                   |
| ------: | ----: | -----------: | ------: | ----------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
|  +61.9% |   +13 |  0.4% → 0.6% | 21 → 34 | `collector(Object, Object, Object)`                                                                         | `java.lang.invoke.LambdaForm$MH.0x00000070010a1000`                        |
|     new |    +9 |  0.0% → 0.1% |   0 → 9 | `copyWithExtendL(MethodType, LambdaForm, Object)`                                                           | `java.lang.invoke.BoundMethodHandle$Species_LL`                            |
|  +42.1% |    +8 |  0.3% → 0.4% | 19 → 27 | `invokeStatic(Object, Object, Object)`                                                                      | `java.lang.invoke.DirectMethodHandle$Holder`                               |
| +350.0% |    +7 | <0.1% → 0.1% |   2 → 9 | `tryAdvance(Consumer)`                                                                                      | `java.util.Spliterators$ArraySpliterator`                                  |
|  +87.5% |    +7 |  0.1% → 0.2% |  8 → 15 | `equals(Object, Object)`                                                                                    | `java.util.Objects`                                                        |
| +100.0% |    +6 |  0.1% → 0.2% |  6 → 12 | `getAndPut(String, MemoizeCache$ValueProvider)`                                                             | `org.codehaus.groovy.vmplugin.v8.CacheableCallSite`                        |
|     new |    +6 |  0.0% → 0.1% |   0 → 6 | `unreflect(Method)`                                                                                         | `java.lang.invoke.MethodHandles$Lookup`                                    |
| +100.0% |    +5 |  0.1% → 0.2% |  5 → 10 | `invoke(Object, Object)`                                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000700102ac00`                        |
|  +71.4% |    +5 |  0.1% → 0.2% |  7 → 12 | `join(PredictionContext, PredictionContext, PredictionContextCache)`                                        | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext`                      |
|     new |    +4 |  0.0% → 0.1% |   0 → 4 | `provide(Object)`                                                                                           | `org.codehaus.groovy.vmplugin.v8.IndyInterface$$Lambda.0x000000700108f680` |
| +400.0% |    +4 | <0.1% → 0.1% |   1 → 5 | `invoke(Object, int)`                                                                                       | `java.lang.invoke.LambdaForm$MH.0x0000007001031400`                        |
|  +80.0% |    +4 |         0.1% |   5 → 9 | `getInCache(LambdaFormEditor$TransformKey)`                                                                 | `java.lang.invoke.LambdaFormEditor`                                        |
|  +80.0% |    +4 |         0.1% |   5 → 9 | `sameClasses(Class[], Object[])`                                                                            | `org.codehaus.groovy.vmplugin.v8.IndyGuardsFiltersAndSignatures`           |
| +400.0% |    +4 | <0.1% → 0.1% |   1 → 5 | `getNoCheckStale(Object)`                                                                                   | `jdk.internal.util.ReferencedKeyMap`                                       |
| +400.0% |    +4 | <0.1% → 0.1% |   1 → 5 | `next()`                                                                                                    | `java.util.ArrayList$Itr`                                                  |
| +400.0% |    +4 | <0.1% → 0.1% |   1 → 5 | `getReturnState(int)`                                                                                       | `groovyjarjarantlr4.v4.runtime.atn.ArrayPredictionContext`                 |
| +200.0% |    +4 | <0.1% → 0.1% |   2 → 6 | `makeReinvokerForm(MethodHandle, int, Object, boolean, LambdaForm$NamedFunction, LambdaForm$NamedFunction)` | `java.lang.invoke.DelegatingMethodHandle`                                  |
|     new |    +4 |  0.0% → 0.1% |   0 → 4 | `<init>(MutableCallSite, Class, String, IndyInterface$CallType, Boolean, Boolean, Boolean, Object[])`       | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector`                  |
|     new |    +4 |  0.0% → 0.1% |   0 → 4 | `boxBoolean(boolean)`                                                                                       | `sun.invoke.util.ValueConversions`                                         |
|     new |    +3 | 0.0% → <0.1% |   0 → 3 | `setCallSiteTarget()`                                                                                       | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector`                  |

##### Ours

| Change | Delta |            % | Samples | Function                                          | Location                                                                                          |
| -----: | ----: | -----------: | ------: | ------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
|    new |    +3 | 0.0% → <0.1% |   0 → 3 | `getAstVisitor()`                                 | `org.codenarc.rule.AbstractAstVisitorRule`                                                        |
|    new |    +2 | 0.0% → <0.1% |   0 → 2 | `<init>()`                                        | `org.codenarc.rule.AbstractAstVisitor`                                                            |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `init()`                                          | `org.codenarc.source.AbstractSourceCode`                                                          |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `doCall(Object)`                                  | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`                        |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `doCall(Object)`                                  | `org.codenarc.source.AbstractSourceCode$_removeGrabTransformation_closure1$_closure3`             |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `doCall(Object)`                                  | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`                        |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `getLines()`                                      | `org.codenarc.source.AbstractSourceCode`                                                          |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `visitMethodComplete(MethodNode)`                 | `org.codenarc.rule.convention.StaticMethodsBeforeInstanceMethodsAstVisitor`                       |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `isNotAnInterface(ClassNode)`                     | `org.gmetrics.metric.AbstractMetric`                                                              |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `calculateForClass(ClassNode, SourceCode)`        | `org.gmetrics.metric.AbstractMethodMetric`                                                        |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `doCall(Object)`                                  | `org.codenarc.rule.formatting.IndentationAstVisitor$_visitBlockStatement_closure7`                |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `visitMethodCallExpression(MethodCallExpression)` | `org.codenarc.rule.formatting.IndentationAstVisitor`                                              |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `processSourceLine(String, int)`                  | `org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor`                                   |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `doCall(Object, Object)`                          | `org.codenarc.rule.unused.UnusedVariableAstVisitor$_afterBlock_closure2`                          |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `applyTo(SourceCode, List)`                       | `org.codenarc.rule.formatting.ConsecutiveBlankLinesRule`                                          |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `getMagnitude()`                                  | `org.gmetrics.metric.abc.AbcVector`                                                               |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `doCall(Object)`                                  | `org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor$_processMethodOrConstructorCall_closure3` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `visitClosureExpression(ClosureExpression)`       | `org.codenarc.rule.formatting.SpaceBeforeClosingBraceAstVisitor`                                  |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `isValid()`                                       | `org.codenarc.source.AbstractSourceCode`                                                          |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `doCall(Object, Object)`                          | `org.codenarc.rule.formatting.TrailingWhitespaceRule$_applyTo_closure1`                           |

##### JIT

|  Change | Delta |            % | Samples | Function                  | Location    |
| ------: | ----: | -----------: | ------: | ------------------------- | ----------- |
| +600.0% |    +6 | <0.1% → 0.1% |   1 → 7 | `zero_blocks`             | `<unknown>` |
| +250.0% |    +5 | <0.1% → 0.1% |   2 → 7 | `I2C/C2I adapters(0xbbb)` | `<unknown>` |
|  +12.5% |    +1 |         0.1% |   8 → 9 | `vtable stub`             | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `I2C/C2I adapters(0x)`    | `<unknown>` |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |            % | Samples | Function                                              | Location                  |
| ------: | ----: | -----------: | ------: | ----------------------------------------------------- | ------------------------- |
|  -23.6% |   -17 |  1.2% → 0.9% | 72 → 55 | `IndexSetIterator::advance_and_next`                  | `libjvm.dylib`            |
|  -60.0% |   -15 |  0.4% → 0.2% | 25 → 10 | `frame::sender_for_compiled_frame`                    | `libjvm.dylib`            |
|  -36.8% |   -14 |  0.7% → 0.4% | 38 → 24 | `PhaseIdealLoop::build_loop_late`                     | `libjvm.dylib`            |
|  -29.5% |   -13 |  0.8% → 0.5% | 44 → 31 | `ciObjectFactory::get_metadata`                       | `libjvm.dylib`            |
|  -56.5% |   -13 |  0.4% → 0.2% | 23 → 10 | `itable stub`                                         | `<unknown>`               |
|  -34.4% |   -11 |  0.6% → 0.3% | 32 → 21 | `Node::set_req_X`                                     | `libjvm.dylib`            |
|  -64.7% |   -11 |  0.3% → 0.1% |  17 → 6 | `LinearScanWalker::free_collect_inactive_fixed`       | `libjvm.dylib`            |
|  -27.8% |   -10 |  0.6% → 0.4% | 36 → 26 | `PhaseIdealLoop::build_loop_late_post_work`           | `libjvm.dylib`            |
|  -33.3% |   -10 |  0.5% → 0.3% | 30 → 20 | `IntervalWalker::walk_to`                             | `libjvm.dylib`            |
|  -38.5% |   -10 |  0.4% → 0.3% | 26 → 16 | `getNode(Object)`                                     | `java.util.HashMap`       |
| removed |    -9 |  0.2% → 0.0% |   9 → 0 | `ClassLoaderDataGraphKlassIteratorAtomic::next_klass` | `libjvm.dylib`            |
|  -81.8% |    -9 | 0.2% → <0.1% |  11 → 2 | `JNIHandleBlock::allocate_handle`                     | `libjvm.dylib`            |
|  -13.8% |    -9 |  1.1% → 0.9% | 65 → 56 | `newInstance(Class, int)`                             | `java.lang.reflect.Array` |
|  -64.3% |    -9 |  0.2% → 0.1% |  14 → 5 | `frame::sender_raw`                                   | `libjvm.dylib`            |
|  -30.8% |    -8 |  0.4% → 0.3% | 26 → 18 | `vmSymbols::find_sid`                                 | `libjvm.dylib`            |
|  -61.5% |    -8 |  0.2% → 0.1% |  13 → 5 | `Node::disconnect_inputs`                             | `libjvm.dylib`            |
| removed |    -7 |  0.1% → 0.0% |   7 → 0 | `PhaseCCP::push_cmpu`                                 | `libjvm.dylib`            |
|  -77.8% |    -7 | 0.2% → <0.1% |   9 → 2 | `PhiNode::Ideal`                                      | `libjvm.dylib`            |
|  -46.7% |    -7 |  0.3% → 0.1% |  15 → 8 | `G1CardSet::add_to_howl`                              | `libjvm.dylib`            |
| removed |    -7 |  0.1% → 0.0% |   7 → 0 | `inflate_fast`                                        | `libzip.dylib`            |

##### Compiler

|  Change | Delta |            % | Samples | Function                                        | Location       |
| ------: | ----: | -----------: | ------: | ----------------------------------------------- | -------------- |
|  -23.6% |   -17 |  1.2% → 0.9% | 72 → 55 | `IndexSetIterator::advance_and_next`            | `libjvm.dylib` |
|  -36.8% |   -14 |  0.7% → 0.4% | 38 → 24 | `PhaseIdealLoop::build_loop_late`               | `libjvm.dylib` |
|  -29.5% |   -13 |  0.8% → 0.5% | 44 → 31 | `ciObjectFactory::get_metadata`                 | `libjvm.dylib` |
|  -34.4% |   -11 |  0.6% → 0.3% | 32 → 21 | `Node::set_req_X`                               | `libjvm.dylib` |
|  -64.7% |   -11 |  0.3% → 0.1% |  17 → 6 | `LinearScanWalker::free_collect_inactive_fixed` | `libjvm.dylib` |
|  -27.8% |   -10 |  0.6% → 0.4% | 36 → 26 | `PhaseIdealLoop::build_loop_late_post_work`     | `libjvm.dylib` |
|  -33.3% |   -10 |  0.5% → 0.3% | 30 → 20 | `IntervalWalker::walk_to`                       | `libjvm.dylib` |
|  -61.5% |    -8 |  0.2% → 0.1% |  13 → 5 | `Node::disconnect_inputs`                       | `libjvm.dylib` |
| removed |    -7 |  0.1% → 0.0% |   7 → 0 | `PhaseCCP::push_cmpu`                           | `libjvm.dylib` |
|  -77.8% |    -7 | 0.2% → <0.1% |   9 → 2 | `PhiNode::Ideal`                                | `libjvm.dylib` |
|  -75.0% |    -6 | 0.1% → <0.1% |   8 → 2 | `TypeInstPtr::hash`                             | `libjvm.dylib` |
|  -40.0% |    -6 |  0.3% → 0.1% |  15 → 9 | `Node::add_req`                                 | `libjvm.dylib` |
|  -50.0% |    -5 |  0.2% → 0.1% |  10 → 5 | `Matcher::find_shared`                          | `libjvm.dylib` |
|  -27.8% |    -5 |  0.3% → 0.2% | 18 → 13 | `PhaseIterGVN::subsume_node`                    | `libjvm.dylib` |
|  -20.8% |    -5 |  0.4% → 0.3% | 24 → 19 | `NodeHash::hash_find_insert`                    | `libjvm.dylib` |
|  -62.5% |    -5 | 0.1% → <0.1% |   8 → 3 | `PhaseIterGVN::remove_globally_dead_node`       | `libjvm.dylib` |
| removed |    -5 |  0.1% → 0.0% |   5 → 0 | `ProjNode::Value`                               | `libjvm.dylib` |
|  -50.0% |    -5 |  0.2% → 0.1% |  10 → 5 | `Node::Node`                                    | `libjvm.dylib` |
|  -71.4% |    -5 | 0.1% → <0.1% |   7 → 2 | `TypeInstPtr::eq`                               | `libjvm.dylib` |
|  -55.6% |    -5 |  0.2% → 0.1% |   9 → 4 | `LinearScanWalker::split_before_usage`          | `libjvm.dylib` |

##### Native

|  Change | Delta |            % | Samples | Function                                                                                                                                                     | Location                   |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------- |
|  -60.0% |   -15 |  0.4% → 0.2% | 25 → 10 | `frame::sender_for_compiled_frame`                                                                                                                           | `libjvm.dylib`             |
| removed |    -9 |  0.2% → 0.0% |   9 → 0 | `ClassLoaderDataGraphKlassIteratorAtomic::next_klass`                                                                                                        | `libjvm.dylib`             |
|  -81.8% |    -9 | 0.2% → <0.1% |  11 → 2 | `JNIHandleBlock::allocate_handle`                                                                                                                            | `libjvm.dylib`             |
|  -64.3% |    -9 |  0.2% → 0.1% |  14 → 5 | `frame::sender_raw`                                                                                                                                          | `libjvm.dylib`             |
|  -30.8% |    -8 |  0.4% → 0.3% | 26 → 18 | `vmSymbols::find_sid`                                                                                                                                        | `libjvm.dylib`             |
|  -46.7% |    -7 |  0.3% → 0.1% |  15 → 8 | `G1CardSet::add_to_howl`                                                                                                                                     | `libjvm.dylib`             |
| removed |    -7 |  0.1% → 0.0% |   7 → 0 | `inflate_fast`                                                                                                                                               | `libzip.dylib`             |
|  -66.7% |    -6 | 0.2% → <0.1% |   9 → 3 | `AccessInternal::PostRuntimeDispatch<G1BarrierSet::AccessBarrier<2383974ull, G1BarrierSet>, (AccessInternal::BarrierType)1, 2383974ull>::oop_access_barrier` | `libjvm.dylib`             |
|   -9.4% |    -5 |  0.9% → 0.8% | 53 → 48 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>`     | `libjvm.dylib`             |
|  -13.9% |    -5 |  0.6% → 0.5% | 36 → 31 | `_platform_memset`                                                                                                                                           | `libsystem_platform.dylib` |
|  -83.3% |    -5 | 0.1% → <0.1% |   6 → 1 | `Dict::doubhash`                                                                                                                                             | `libjvm.dylib`             |
|  -38.5% |    -5 |  0.2% → 0.1% |  13 → 8 | `resource_allocate_bytes`                                                                                                                                    | `libjvm.dylib`             |
|  -45.5% |    -5 |  0.2% → 0.1% |  11 → 6 | `Dictionary::find`                                                                                                                                           | `libjvm.dylib`             |
|  -83.3% |    -5 | 0.1% → <0.1% |   6 → 1 | `G1CodeRootSet::add`                                                                                                                                         | `libjvm.dylib`             |
|  -62.5% |    -5 | 0.1% → <0.1% |   8 → 3 | `semaphore_wait_trap`                                                                                                                                        | `libsystem_kernel.dylib`   |
|  -83.3% |    -5 | 0.1% → <0.1% |   6 → 1 | `PcDescContainer::find_pc_desc_internal`                                                                                                                     | `libjvm.dylib`             |
|  -20.0% |    -4 |         0.3% | 20 → 16 | `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>`                                                               | `libjvm.dylib`             |
|  -44.4% |    -4 |  0.2% → 0.1% |   9 → 5 | `nmethod::is_unloading`                                                                                                                                      | `libjvm.dylib`             |
|  -66.7% |    -4 | 0.1% → <0.1% |   6 → 2 | `pthread_mutex_unlock`                                                                                                                                       | `libsystem_pthread.dylib`  |
|  -80.0% |    -4 | 0.1% → <0.1% |   5 → 1 | `read`                                                                                                                                                       | `libsystem_kernel.dylib`   |

##### Standard library

|  Change | Delta |            % |   Samples | Function                                                                                                      | Location                                                                                                |
| ------: | ----: | -----------: | --------: | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
|  -38.5% |   -10 |  0.4% → 0.3% |   26 → 16 | `getNode(Object)`                                                                                             | `java.util.HashMap`                                                                                     |
|  -13.8% |    -9 |  1.1% → 0.9% |   65 → 56 | `newInstance(Class, int)`                                                                                     | `java.lang.reflect.Array`                                                                               |
|  -77.8% |    -7 | 0.2% → <0.1% |     9 → 2 | `invokeSpecial(Object, Object, Object)`                                                                       | `java.lang.invoke.DirectMethodHandle$Holder`                                                            |
|  -63.6% |    -7 |  0.2% → 0.1% |    11 → 4 | `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`                                                  |
|  -85.7% |    -6 | 0.1% → <0.1% |     7 → 1 | `getExactSizeIfKnown()`                                                                                       | `java.util.Spliterator`                                                                                 |
|  -60.0% |    -6 |  0.2% → 0.1% |    10 → 4 | `collector(Object, Object, Object, Object)`                                                                   | `java.lang.invoke.LambdaForm$MH.0x00000070010d4000 → java.lang.invoke.LambdaForm$MH.0x00000070010d3c00` |
|   -4.6% |    -5 |  1.9% → 1.7% | 108 → 103 | `cast(Object)`                                                                                                | `java.lang.Class`                                                                                       |
|  -45.5% |    -5 |  0.2% → 0.1% |    11 → 6 | `checkCustomized(MethodHandle)`                                                                               | `java.lang.invoke.Invokers`                                                                             |
|  -83.3% |    -5 | 0.1% → <0.1% |     6 → 1 | `newArray(Class, int)`                                                                                        | `java.lang.reflect.Array`                                                                               |
|  -62.5% |    -5 | 0.1% → <0.1% |     8 → 3 | `invoke(Object, Object)`                                                                                      | `java.lang.invoke.LambdaForm$MH.0x000000700109a400`                                                     |
|  -15.4% |    -4 |         0.4% |   26 → 22 | `<init>(MethodType, LambdaForm)`                                                                              | `java.lang.invoke.MethodHandle`                                                                         |
| removed |    -4 |  0.1% → 0.0% |     4 → 0 | `visit(GroovyCodeVisitor)`                                                                                    | `org.codehaus.groovy.ast.expr.VariableExpression`                                                       |
|  -57.1% |    -4 | 0.1% → <0.1% |     7 → 3 | `getWeakMetaClass()`                                                                                          | `org.codehaus.groovy.reflection.ClassInfo`                                                              |
|  -57.1% |    -4 | 0.1% → <0.1% |     7 → 3 | `resize()`                                                                                                    | `java.util.HashMap`                                                                                     |
| removed |    -4 |  0.1% → 0.0% |     4 → 0 | `map(Function)`                                                                                               | `java.util.stream.ReferencePipeline`                                                                    |
|  -50.0% |    -4 |         0.1% |     8 → 4 | `getMethods(Class, String)`                                                                                   | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex`                                                 |
|  -75.0% |    -3 | 0.1% → <0.1% |     4 → 1 | `forEachRemaining(Consumer)`                                                                                  | `java.util.Spliterators$ArraySpliterator`                                                               |
|  -33.3% |    -3 |  0.2% → 0.1% |     9 → 6 | `makePairwiseConvertByEditor(MethodHandle, MethodType, boolean, boolean)`                                     | `java.lang.invoke.MethodHandleImpl`                                                                     |
| removed |    -3 |  0.1% → 0.0% |     3 → 0 | `getReachableConfigSet(CharStream, ATNConfigSet, ATNConfigSet, int)`                                          | `groovyjarjarantlr4.v4.runtime.atn.LexerATNSimulator`                                                   |
| removed |    -3 |  0.1% → 0.0% |     3 → 0 | `getSemanticContext()`                                                                                        | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig`                                                           |

##### Ours

|  Change | Delta |            % | Samples | Function                                        | Location                                                                           |
| ------: | ----: | -----------: | ------: | ----------------------------------------------- | ---------------------------------------------------------------------------------- |
| removed |    -3 |  0.1% → 0.0% |   3 → 0 | `applyTo(SourceCode, List)`                     | `org.codenarc.rule.AbstractAstVisitorRule`                                         |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `collectViolations(SourceCode, RuleSet)`        | `org.codenarc.analyzer.AbstractSourceAnalyzer`                                     |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `getRule()`                                     | `org.codenarc.rule.Violation`                                                      |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `assertClassImplementsRuleInterface(Class)`     | `org.codenarc.ruleset.RuleSetUtil`                                                 |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `getMetaClass()`                                | `org.codenarc.ruleset.XmlReaderRuleSet`                                            |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `applyTo(SourceCode)`                           | `org.codenarc.rule.AbstractRule`                                                   |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.ClassReferenceAstVisitor`                                       |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `$getStaticMetaClass()`                         | `org.codenarc.rule.unused.UnusedArrayAstVisitor`                                   |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `line(int)`                                     | `org.codenarc.source.AbstractSourceCode`                                           |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `isMatchingUniqueCall(Expression)`              | `org.codenarc.rule.groovyism.AssignCollectionUniqueAstVisitor`                     |
|  -50.0% |    -1 |        <0.1% |   2 → 1 | `addViolationIfDuplicate(Expression, boolean)`  | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                                 |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `visitField(FieldNode)`                         | `org.codenarc.rule.design.OptionalFieldAstVisitor`                                 |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `getRule()`                                     | `org.codenarc.rule.AbstractAstVisitor`                                             |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `lastSourceLine(ASTNode)`                       | `org.codenarc.rule.AbstractAstVisitor`                                             |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `doCall(Object)`                                | `org.codenarc.rule.groovyism.GroovyLangImmutableAstVisitor$_visitImports_closure2` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `getMetaClass()`                                | `org.codenarc.rule.design.EmptyMethodInAbstractClassRule`                          |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `getMethodArguments(ASTNode)`                   | `org.codenarc.util.AstUtil`                                                        |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `isMethodCallOnObject(Expression, String)`      | `org.codenarc.util.AstUtil`                                                        |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `getMetaClass()`                                | `org.codenarc.rule.convention.StaticMethodsBeforeInstanceMethodsRule`              |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor`                           |

##### JIT

|  Change | Delta |            % | Samples | Function                   | Location    |
| ------: | ----: | -----------: | ------: | -------------------------- | ----------- |
|  -56.5% |   -13 |  0.4% → 0.2% | 23 → 10 | `itable stub`              | `<unknown>` |
|  -46.7% |    -7 |  0.3% → 0.1% |  15 → 8 | `I2C/C2I adapters(0xbb)`   | `<unknown>` |
|  -66.7% |    -2 | 0.1% → <0.1% |   3 → 1 | `I2C/C2I adapters(0xbab)`  | `<unknown>` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `I2C/C2I adapters(0xbbaa)` | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `I2C/C2I adapters(0xbaa)`  | `<unknown>` |

#### Lines

Lines with the largest change in contribution to each function's self samples.

##### `tryAdvance(Consumer)` (`java.util.Spliterators$ArraySpliterator`)

|  Change | Delta |              % | Samples | Location                                       |
| ------: | ----: | -------------: | ------: | ---------------------------------------------- |
| +250.0% |    +5 | 100.0% → 77.8% |   2 → 7 | `java.util.Spliterators$ArraySpliterator:1030` |
|     new |    +1 |   0.0% → 11.1% |   0 → 1 | `java.util.Spliterators$ArraySpliterator:1033` |
|     new |    +1 |   0.0% → 11.1% |   0 → 1 | `java.util.Spliterators$ArraySpliterator:1034` |

##### `equals(Object, Object)` (`java.util.Objects`)

| Change | Delta |      % | Samples | Location               |
| -----: | ----: | -----: | ------: | ---------------------- |
| +87.5% |    +7 | 100.0% |  8 → 15 | `java.util.Objects:64` |

##### `getAndPut(String, MemoizeCache$ValueProvider)` (`org.codehaus.groovy.vmplugin.v8.CacheableCallSite`)

|  Change | Delta |             % | Samples | Location                                               |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------ |
| +400.0% |    +4 | 16.7% → 41.7% |   1 → 5 | `org.codehaus.groovy.vmplugin.v8.CacheableCallSite:74` |
| removed |    -1 |  16.7% → 0.0% |   1 → 0 | `org.codehaus.groovy.vmplugin.v8.CacheableCallSite:76` |
|     new |    +1 |   0.0% → 8.3% |   0 → 1 | `org.codehaus.groovy.vmplugin.v8.CacheableCallSite:65` |
|     new |    +1 |   0.0% → 8.3% |   0 → 1 | `org.codehaus.groovy.vmplugin.v8.CacheableCallSite:71` |
|     new |    +1 |   0.0% → 8.3% |   0 → 1 | `org.codehaus.groovy.vmplugin.v8.CacheableCallSite:82` |

##### `unreflect(Method)` (`java.lang.invoke.MethodHandles$Lookup`)

| Change | Delta |             % | Samples | Location                                     |
| -----: | ----: | ------------: | ------: | -------------------------------------------- |
|    new |    +6 | 0.0% → 100.0% |   0 → 6 | `java.lang.invoke.MethodHandles$Lookup:3436` |

##### `join(PredictionContext, PredictionContext, PredictionContextCache)` (`groovyjarjarantlr4.v4.runtime.atn.PredictionContext`)

|  Change | Delta |             % | Samples | Location                                                  |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------- |
|     new |    +3 |  0.0% → 25.0% |   0 → 3 | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext:166` |
| removed |    -1 |  14.3% → 0.0% |   1 → 0 | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext:159` |
| +100.0% |    +1 | 14.3% → 16.7% |   1 → 2 | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext:165` |
|  -50.0% |    -1 |  28.6% → 8.3% |   2 → 1 | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext:167` |
| +100.0% |    +1 | 14.3% → 16.7% |   1 → 2 | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext:175` |

##### `getInCache(LambdaFormEditor$TransformKey)` (`java.lang.invoke.LambdaFormEditor`)

|  Change | Delta |             % | Samples | Location                                |
| ------: | ----: | ------------: | ------: | --------------------------------------- |
|     new |    +2 |  0.0% → 22.2% |   0 → 2 | `java.lang.invoke.LambdaFormEditor:403` |
| removed |    -1 |  20.0% → 0.0% |   1 → 0 | `java.lang.invoke.LambdaFormEditor:383` |
|  +33.3% |    +1 | 60.0% → 44.4% |   3 → 4 | `java.lang.invoke.LambdaFormEditor:396` |
| +100.0% |    +1 | 20.0% → 22.2% |   1 → 2 | `java.lang.invoke.LambdaFormEditor:397` |
|     new |    +1 |  0.0% → 11.1% |   0 → 1 | `java.lang.invoke.LambdaFormEditor:395` |

##### `sameClasses(Class[], Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyGuardsFiltersAndSignatures`)

|  Change | Delta |             % | Samples | Location                                                             |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------------- |
| +500.0% |    +5 | 20.0% → 66.7% |   1 → 6 | `org.codehaus.groovy.vmplugin.v8.IndyGuardsFiltersAndSignatures:224` |
|  -75.0% |    -3 | 80.0% → 11.1% |   4 → 1 | `org.codehaus.groovy.vmplugin.v8.IndyGuardsFiltersAndSignatures:225` |
|     new |    +2 |  0.0% → 22.2% |   0 → 2 | `org.codehaus.groovy.vmplugin.v8.IndyGuardsFiltersAndSignatures:226` |

##### `getNoCheckStale(Object)` (`jdk.internal.util.ReferencedKeyMap`)

|  Change | Delta |      % | Samples | Location                                 |
| ------: | ----: | -----: | ------: | ---------------------------------------- |
| +400.0% |    +4 | 100.0% |   1 → 5 | `jdk.internal.util.ReferencedKeyMap:215` |

##### `next()` (`java.util.ArrayList$Itr`)

|  Change | Delta |              % | Samples | Location                       |
| ------: | ----: | -------------: | ------: | ------------------------------ |
| +200.0% |    +2 | 100.0% → 60.0% |   1 → 3 | `java.util.ArrayList$Itr:1053` |
|     new |    +1 |   0.0% → 20.0% |   0 → 1 | `java.util.ArrayList$Itr:1049` |
|     new |    +1 |   0.0% → 20.0% |   0 → 1 | `java.util.ArrayList$Itr:1051` |

##### `getReturnState(int)` (`groovyjarjarantlr4.v4.runtime.atn.ArrayPredictionContext`)

|  Change | Delta |      % | Samples | Location                                                      |
| ------: | ----: | -----: | ------: | ------------------------------------------------------------- |
| +400.0% |    +4 | 100.0% |   1 → 5 | `groovyjarjarantlr4.v4.runtime.atn.ArrayPredictionContext:50` |

##### `makeReinvokerForm(MethodHandle, int, Object, boolean, LambdaForm$NamedFunction, LambdaForm$NamedFunction)` (`java.lang.invoke.DelegatingMethodHandle`)

|  Change | Delta |             % | Samples | Location                                      |
| ------: | ----: | ------------: | ------: | --------------------------------------------- |
|     new |    +3 |  0.0% → 50.0% |   0 → 3 | `java.lang.invoke.DelegatingMethodHandle:132` |
|     new |    +3 |  0.0% → 50.0% |   0 → 3 | `java.lang.invoke.DelegatingMethodHandle:133` |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `java.lang.invoke.DelegatingMethodHandle:129` |

##### `<init>(MutableCallSite, Class, String, IndyInterface$CallType, Boolean, Boolean, Boolean, Object[])` (`org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector`)

| Change | Delta |            % | Samples | Location                                                      |
| -----: | ----: | -----------: | ------: | ------------------------------------------------------------- |
|    new |    +2 | 0.0% → 50.0% |   0 → 2 | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector:515` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector:514` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector:521` |

##### `boxBoolean(boolean)` (`sun.invoke.util.ValueConversions`)

| Change | Delta |             % | Samples | Location                               |
| -----: | ----: | ------------: | ------: | -------------------------------------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `sun.invoke.util.ValueConversions:292` |

##### `setCallSiteTarget()` (`org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector`)

| Change | Delta |            % | Samples | Location                                                       |
| -----: | ----: | -----------: | ------: | -------------------------------------------------------------- |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector:1024` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector:1026` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector:1037` |

##### `getAstVisitor()` (`org.codenarc.rule.AbstractAstVisitorRule`)

| Change | Delta |            % | Samples | Location                                      |
| -----: | ----: | -----------: | ------: | --------------------------------------------- |
|    new |    +2 | 0.0% → 66.7% |   0 → 2 | `org.codenarc.rule.AbstractAstVisitorRule:77` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `org.codenarc.rule.AbstractAstVisitorRule:79` |

##### `<init>()` (`org.codenarc.rule.AbstractAstVisitor`)

| Change | Delta |            % | Samples | Location                                  |
| -----: | ----: | -----------: | ------: | ----------------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `org.codenarc.rule.AbstractAstVisitor:34` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `org.codenarc.rule.AbstractAstVisitor:39` |

##### `init()` (`org.codenarc.source.AbstractSourceCode`)

| Change | Delta |             % | Samples | Location                                    |
| -----: | ----: | ------------: | ------: | ------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.codenarc.source.AbstractSourceCode:91` |

##### `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`)

| Change | Delta |             % | Samples | Location                                                                      |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1:38` |

##### `doCall(Object)` (`org.codenarc.source.AbstractSourceCode$_removeGrabTransformation_closure1$_closure3`)

| Change | Delta |             % | Samples | Location                                                                                  |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.codenarc.source.AbstractSourceCode$_removeGrabTransformation_closure1$_closure3:145` |

##### `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)

| Change | Delta |             % | Samples | Location                                                                      |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3:45` |

##### `getLines()` (`org.codenarc.source.AbstractSourceCode`)

| Change | Delta |             % | Samples | Location                                    |
| -----: | ----: | ------------: | ------: | ------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.codenarc.source.AbstractSourceCode:62` |

##### `visitMethodComplete(MethodNode)` (`org.codenarc.rule.convention.StaticMethodsBeforeInstanceMethodsAstVisitor`)

| Change | Delta |             % | Samples | Location                                                                       |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.codenarc.rule.convention.StaticMethodsBeforeInstanceMethodsAstVisitor:64` |

##### `isNotAnInterface(ClassNode)` (`org.gmetrics.metric.AbstractMetric`)

| Change | Delta |             % | Samples | Location                                |
| -----: | ----: | ------------: | ------: | --------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.gmetrics.metric.AbstractMetric:60` |

##### `calculateForClass(ClassNode, SourceCode)` (`org.gmetrics.metric.AbstractMethodMetric`)

| Change | Delta |             % | Samples | Location                                      |
| -----: | ----: | ------------: | ------: | --------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.gmetrics.metric.AbstractMethodMetric:71` |

##### `doCall(Object)` (`org.codenarc.rule.formatting.IndentationAstVisitor$_visitBlockStatement_closure7`)

| Change | Delta |             % | Samples | Location                                                                               |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.codenarc.rule.formatting.IndentationAstVisitor$_visitBlockStatement_closure7:260` |

##### `visitMethodCallExpression(MethodCallExpression)` (`org.codenarc.rule.formatting.IndentationAstVisitor`)

| Change | Delta |             % | Samples | Location                                                 |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.codenarc.rule.formatting.IndentationAstVisitor:205` |

##### `processSourceLine(String, int)` (`org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor`)

| Change | Delta |             % | Samples | Location                                                           |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor:66` |

##### `doCall(Object, Object)` (`org.codenarc.rule.unused.UnusedVariableAstVisitor$_afterBlock_closure2`)

| Change | Delta |             % | Samples | Location                                                                     |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.codenarc.rule.unused.UnusedVariableAstVisitor$_afterBlock_closure2:127` |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.formatting.ConsecutiveBlankLinesRule`)

| Change | Delta |             % | Samples | Location                                                    |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.codenarc.rule.formatting.ConsecutiveBlankLinesRule:42` |

##### `getMagnitude()` (`org.gmetrics.metric.abc.AbcVector`)

| Change | Delta |             % | Samples | Location                               |
| -----: | ----: | ------------: | ------: | -------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.gmetrics.metric.abc.AbcVector:44` |

##### `doCall(Object)` (`org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor$_processMethodOrConstructorCall_closure3`)

| Change | Delta |             % | Samples | Location                                                                                             |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor$_processMethodOrConstructorCall_closure3:91` |

##### `visitClosureExpression(ClosureExpression)` (`org.codenarc.rule.formatting.SpaceBeforeClosingBraceAstVisitor`)

| Change | Delta |             % | Samples | Location                                                            |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.codenarc.rule.formatting.SpaceBeforeClosingBraceAstVisitor:88` |

##### `isValid()` (`org.codenarc.source.AbstractSourceCode`)

| Change | Delta |             % | Samples | Location                                     |
| -----: | ----: | ------------: | ------: | -------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.codenarc.source.AbstractSourceCode:179` |

##### `doCall(Object, Object)` (`org.codenarc.rule.formatting.TrailingWhitespaceRule$_applyTo_closure1`)

| Change | Delta |             % | Samples | Location                                                                   |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.codenarc.rule.formatting.TrailingWhitespaceRule$_applyTo_closure1:36` |

##### `getNode(Object)` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Location                |
| ------: | ----: | ------------: | ------: | ----------------------- |
|  -60.0% |    -3 | 19.2% → 12.5% |   5 → 2 | `java.util.HashMap:577` |
|  -60.0% |    -3 | 19.2% → 12.5% |   5 → 2 | `java.util.HashMap:580` |
| +150.0% |    +3 |  7.7% → 31.3% |   2 → 5 | `java.util.HashMap:585` |
|  -33.3% |    -2 | 23.1% → 25.0% |   6 → 4 | `java.util.HashMap:576` |
| removed |    -2 |   7.7% → 0.0% |   2 → 0 | `java.util.HashMap:579` |

##### `newInstance(Class, int)` (`java.lang.reflect.Array`)

| Change | Delta |      % | Samples | Location                     |
| -----: | ----: | -----: | ------: | ---------------------------- |
| -13.8% |    -9 | 100.0% | 65 → 56 | `java.lang.reflect.Array:78` |

##### `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` (`groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`)

|  Change | Delta |            % | Samples | Location                                                    |
| ------: | ----: | -----------: | ------: | ----------------------------------------------------------- |
| removed |    -4 | 36.4% → 0.0% |   4 → 0 | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator:1759` |
| removed |    -3 | 27.3% → 0.0% |   3 → 0 | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator:1788` |
| removed |    -1 |  9.1% → 0.0% |   1 → 0 | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator:1700` |
| removed |    -1 |  9.1% → 0.0% |   1 → 0 | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator:1748` |
| removed |    -1 |  9.1% → 0.0% |   1 → 0 | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator:1754` |

##### `getExactSizeIfKnown()` (`java.util.Spliterator`)

| Change | Delta |      % | Samples | Location                    |
| -----: | ----: | -----: | ------: | --------------------------- |
| -85.7% |    -6 | 100.0% |   7 → 1 | `java.util.Spliterator:414` |

##### `cast(Object)` (`java.lang.Class`)

| Change | Delta |      % |   Samples | Location               |
| -----: | ----: | -----: | --------: | ---------------------- |
|  -4.6% |    -5 | 100.0% | 108 → 103 | `java.lang.Class:4068` |

##### `checkCustomized(MethodHandle)` (`java.lang.invoke.Invokers`)

| Change | Delta |             % | Samples | Location                        |
| -----: | ----: | ------------: | ------: | ------------------------------- |
| -66.7% |    -2 | 27.3% → 16.7% |   3 → 1 | `java.lang.invoke.Invokers:626` |
| -66.7% |    -2 | 27.3% → 16.7% |   3 → 1 | `java.lang.invoke.Invokers:627` |
| -50.0% |    -1 | 18.2% → 16.7% |   2 → 1 | `java.lang.invoke.Invokers:629` |

##### `<init>(MethodType, LambdaForm)` (`java.lang.invoke.MethodHandle`)

| Change | Delta |             % | Samples | Location                            |
| -----: | ----: | ------------: | ------: | ----------------------------------- |
| -50.0% |    -5 | 38.5% → 22.7% |  10 → 5 | `java.lang.invoke.MethodHandle:480` |
|  +6.3% |    +1 | 61.5% → 77.3% | 16 → 17 | `java.lang.invoke.MethodHandle:479` |

##### `visit(GroovyCodeVisitor)` (`org.codehaus.groovy.ast.expr.VariableExpression`)

|  Change | Delta |             % | Samples | Location                                             |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------- |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | `org.codehaus.groovy.ast.expr.VariableExpression:71` |

##### `getWeakMetaClass()` (`org.codehaus.groovy.reflection.ClassInfo`)

| Change | Delta |      % | Samples | Location                                       |
| -----: | ----: | -----: | ------: | ---------------------------------------------- |
| -57.1% |    -4 | 100.0% |   7 → 3 | `org.codehaus.groovy.reflection.ClassInfo:223` |

##### `resize()` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Location                |
| ------: | ----: | ------------: | ------: | ----------------------- |
| removed |    -1 |  14.3% → 0.0% |   1 → 0 | `java.util.HashMap:684` |
| removed |    -1 |  14.3% → 0.0% |   1 → 0 | `java.util.HashMap:711` |
|  -50.0% |    -1 | 28.6% → 33.3% |   2 → 1 | `java.util.HashMap:713` |
| removed |    -1 |  14.3% → 0.0% |   1 → 0 | `java.util.HashMap:718` |

##### `map(Function)` (`java.util.stream.ReferencePipeline`)

|  Change | Delta |             % | Samples | Location                                 |
| ------: | ----: | ------------: | ------: | ---------------------------------------- |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | `java.util.stream.ReferencePipeline:190` |

##### `getMethods(Class, String)` (`org.codehaus.groovy.runtime.metaclass.MetaMethodIndex`)

|  Change | Delta |             % | Samples | Location                                                    |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------- |
| removed |    -3 |  37.5% → 0.0% |   3 → 0 | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex:201` |
|  -40.0% |    -2 | 62.5% → 75.0% |   5 → 3 | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex:202` |
|     new |    +1 |  0.0% → 25.0% |   0 → 1 | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex:200` |

##### `forEachRemaining(Consumer)` (`java.util.Spliterators$ArraySpliterator`)

|  Change | Delta |             % | Samples | Location                                       |
| ------: | ----: | ------------: | ------: | ---------------------------------------------- |
| removed |    -3 |  75.0% → 0.0% |   3 → 0 | `java.util.Spliterators$ArraySpliterator:1024` |
| removed |    -1 |  25.0% → 0.0% |   1 → 0 | `java.util.Spliterators$ArraySpliterator:1020` |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.Spliterators$ArraySpliterator:1022` |

##### `makePairwiseConvertByEditor(MethodHandle, MethodType, boolean, boolean)` (`java.lang.invoke.MethodHandleImpl`)

|  Change | Delta |             % | Samples | Location                                |
| ------: | ----: | ------------: | ------: | --------------------------------------- |
| removed |    -3 |  33.3% → 0.0% |   3 → 0 | `java.lang.invoke.MethodHandleImpl:321` |
|     new |    +2 |  0.0% → 33.3% |   0 → 2 | `java.lang.invoke.MethodHandleImpl:282` |
| removed |    -1 |  11.1% → 0.0% |   1 → 0 | `java.lang.invoke.MethodHandleImpl:289` |
|  -50.0% |    -1 | 22.2% → 16.7% |   2 → 1 | `java.lang.invoke.MethodHandleImpl:315` |
| removed |    -1 |  11.1% → 0.0% |   1 → 0 | `java.lang.invoke.MethodHandleImpl:318` |

##### `getReachableConfigSet(CharStream, ATNConfigSet, ATNConfigSet, int)` (`groovyjarjarantlr4.v4.runtime.atn.LexerATNSimulator`)

|  Change | Delta |            % | Samples | Location                                                  |
| ------: | ----: | -----------: | ------: | --------------------------------------------------------- |
| removed |    -2 | 66.7% → 0.0% |   2 → 0 | `groovyjarjarantlr4.v4.runtime.atn.LexerATNSimulator:327` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `groovyjarjarantlr4.v4.runtime.atn.LexerATNSimulator:328` |

##### `getSemanticContext()` (`groovyjarjarantlr4.v4.runtime.atn.ATNConfig`)

|  Change | Delta |             % | Samples | Location                                          |
| ------: | ----: | ------------: | ------: | ------------------------------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig:190` |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`)

|  Change | Delta |            % | Samples | Location                                      |
| ------: | ----: | -----------: | ------: | --------------------------------------------- |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `org.codenarc.rule.AbstractAstVisitorRule:90` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `org.codenarc.rule.AbstractAstVisitorRule:94` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `org.codenarc.rule.AbstractAstVisitorRule:97` |

##### `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|  Change | Delta |            % | Samples | Location                                          |
| ------: | ----: | -----------: | ------: | ------------------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `org.codenarc.analyzer.AbstractSourceAnalyzer:43` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `org.codenarc.analyzer.AbstractSourceAnalyzer:53` |

##### `assertClassImplementsRuleInterface(Class)` (`org.codenarc.ruleset.RuleSetUtil`)

|  Change | Delta |             % | Samples | Location                              |
| ------: | ----: | ------------: | ------: | ------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.codenarc.ruleset.RuleSetUtil:46` |

##### `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`)

|  Change | Delta |             % | Samples | Location                             |
| ------: | ----: | ------------: | ------: | ------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.codenarc.rule.AbstractRule:139` |

##### `visitConstructorOrMethod(MethodNode, boolean)` (`org.codenarc.rule.ClassReferenceAstVisitor`)

|  Change | Delta |             % | Samples | Location                                         |
| ------: | ----: | ------------: | ------: | ------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.codenarc.rule.ClassReferenceAstVisitor:105` |

##### `line(int)` (`org.codenarc.source.AbstractSourceCode`)

|  Change | Delta |             % | Samples | Location                                    |
| ------: | ----: | ------------: | ------: | ------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.codenarc.source.AbstractSourceCode:76` |

##### `isMatchingUniqueCall(Expression)` (`org.codenarc.rule.groovyism.AssignCollectionUniqueAstVisitor`)

|  Change | Delta |             % | Samples | Location                                                          |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.codenarc.rule.groovyism.AssignCollectionUniqueAstVisitor:68` |

##### `addViolationIfDuplicate(Expression, boolean)` (`org.codenarc.rule.dry.DuplicateLiteralAstVisitor`)

|  Change | Delta |             % | Samples | Location                                               |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------ |
| removed |    -1 |  50.0% → 0.0% |   1 → 0 | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor:132` |
| removed |    -1 |  50.0% → 0.0% |   1 → 0 | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor:140` |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor:141` |

##### `visitField(FieldNode)` (`org.codenarc.rule.design.OptionalFieldAstVisitor`)

|  Change | Delta |             % | Samples | Location                                              |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.codenarc.rule.design.OptionalFieldAstVisitor:38` |

##### `getRule()` (`org.codenarc.rule.AbstractAstVisitor`)

|  Change | Delta |             % | Samples | Location                                   |
| ------: | ----: | ------------: | ------: | ------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.codenarc.rule.AbstractAstVisitor:189` |

##### `lastSourceLine(ASTNode)` (`org.codenarc.rule.AbstractAstVisitor`)

|  Change | Delta |             % | Samples | Location                                  |
| ------: | ----: | ------------: | ------: | ----------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.codenarc.rule.AbstractAstVisitor:81` |

##### `doCall(Object)` (`org.codenarc.rule.groovyism.GroovyLangImmutableAstVisitor$_visitImports_closure2`)

|  Change | Delta |             % | Samples | Location                                                                              |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.codenarc.rule.groovyism.GroovyLangImmutableAstVisitor$_visitImports_closure2:45` |

##### `getMethodArguments(ASTNode)` (`org.codenarc.util.AstUtil`)

|  Change | Delta |             % | Samples | Location                        |
| ------: | ----: | ------------: | ------: | ------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.codenarc.util.AstUtil:231` |

##### `isMethodCallOnObject(Expression, String)` (`org.codenarc.util.AstUtil`)

|  Change | Delta |             % | Samples | Location                        |
| ------: | ----: | ------------: | ------: | ------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.codenarc.util.AstUtil:271` |

##### `visitConstructorOrMethod(MethodNode, boolean)` (`org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor`)

|  Change | Delta |             % | Samples | Location                                                    |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor:49` |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|     Change |  Delta |             % |       Samples | Function                                 | Location                                                                                                |
| ---------: | -----: | ------------: | ------------: | ---------------------------------------- | ------------------------------------------------------------------------------------------------------- |
|  +17491.7% | +2,099 |  0.2% → 34.4% |    12 → 2,111 | `invoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070012c0400 → java.lang.invoke.LambdaForm$MH.0x0000007001182800` |
|  +60800.0% | +1,824 |  0.1% → 29.8% |     3 → 1,827 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000070014c4400 → java.lang.invoke.LambdaForm$MH.0x000000700159fc00` |
|  +36180.0% | +1,809 |  0.1% → 29.6% |     5 → 1,814 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070015a2800`                                                     |
|  +87800.0% | +1,756 | <0.1% → 28.7% |     2 → 1,758 | `invoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000700122b400 → java.lang.invoke.LambdaForm$MH.0x0000007001268800` |
|    +369.8% | +1,749 |  8.1% → 36.2% |   473 → 2,222 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000070010c7c00 → java.lang.invoke.LambdaForm$MH.0x00000070010c6400` |
|  +21812.5% | +1,745 |  0.1% → 28.6% |     8 → 1,753 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000700122c400 → java.lang.invoke.LambdaForm$MH.0x000000700126a400` |
| +167600.0% | +1,676 | <0.1% → 27.3% |     1 → 1,677 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001688800 → java.lang.invoke.LambdaForm$MH.0x0000007001638800` |
| +167600.0% | +1,676 | <0.1% → 27.3% |     1 → 1,677 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070013a8000 → java.lang.invoke.LambdaForm$MH.0x0000007001639000` |
|   +9814.3% | +1,374 |  0.2% → 22.6% |    14 → 1,388 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000070010d5400 → java.lang.invoke.LambdaForm$MH.0x00000070010d4800` |
| +137200.0% | +1,372 | <0.1% → 22.4% |     1 → 1,373 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000070013c8800 → java.lang.invoke.LambdaForm$MH.0x0000007001365800` |
|  +13640.0% | +1,364 |  0.2% → 22.4% |    10 → 1,374 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070017c2400`                                                     |
|  +44533.3% | +1,336 |  0.1% → 21.8% |     3 → 1,339 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000007001391400 → java.lang.invoke.LambdaForm$MH.0x000000700135b400` |
|   +1465.2% |   +674 |  0.8% → 11.7% |      46 → 720 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070012c0c00 → java.lang.invoke.LambdaForm$MH.0x0000007001291000` |
|  +28700.0% |   +574 |  <0.1% → 9.4% |       2 → 576 | `invoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000700122d000 → java.lang.invoke.LambdaForm$MH.0x0000007001290c00` |
|    +225.0% |   +333 |   2.5% → 7.8% |     148 → 481 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000070010c7800`                                                     |
|      +8.5% |   +302 | 61.0% → 62.8% | 3,546 → 3,848 | `Thread::call_run`                       | `libjvm.dylib`                                                                                          |
|      +8.5% |   +302 | 61.0% → 62.8% | 3,546 → 3,848 | `thread_native_entry`                    | `libjvm.dylib`                                                                                          |
|      +8.5% |   +302 | 61.1% → 62.8% | 3,547 → 3,849 | `_pthread_start`                         | `libsystem_pthread.dylib`                                                                               |
|      +8.5% |   +302 | 61.1% → 62.8% | 3,547 → 3,849 | `thread_start`                           | `libsystem_pthread.dylib`                                                                               |
|  +25100.0% |   +251 |  <0.1% → 4.1% |       1 → 252 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070013c7000 → java.lang.invoke.LambdaForm$MH.0x0000007001325400` |

##### Compiler

| Change | Delta |             % |       Samples | Function                                   | Location       |
| -----: | ----: | ------------: | ------------: | ------------------------------------------ | -------------- |
|  +7.6% |  +244 | 55.1% → 56.2% | 3,201 → 3,445 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |
|  +7.5% |  +243 | 55.6% → 56.7% | 3,231 → 3,474 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib` |
|  +8.0% |  +208 | 44.5% → 45.6% | 2,587 → 2,795 | `Compile::Compile`                         | `libjvm.dylib` |
|  +8.0% |  +208 | 44.6% → 45.6% | 2,591 → 2,799 | `C2Compiler::compile_method`               | `libjvm.dylib` |
| +14.7% |  +177 | 20.7% → 22.5% | 1,203 → 1,380 | `Compile::Code_Gen`                        | `libjvm.dylib` |
| +16.2% |  +112 | 11.9% → 13.1% |     690 → 802 | `PhaseChaitin::Register_Allocate`          | `libjvm.dylib` |
| +25.1% |   +50 |   3.4% → 4.1% |     199 → 249 | `Matcher::match`                           | `libjvm.dylib` |
| +29.1% |   +46 |   2.7% → 3.3% |     158 → 204 | `PhaseChaitin::Split`                      | `libjvm.dylib` |
| +25.2% |   +39 |   2.7% → 3.2% |     155 → 194 | `Matcher::xform`                           | `libjvm.dylib` |
|  +7.7% |   +37 |   8.3% → 8.4% |     480 → 517 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib` |
| +60.7% |   +37 |   1.1% → 1.6% |       61 → 98 | `Node::dominates`                          | `libjvm.dylib` |
|  +6.3% |   +37 |         10.2% |     591 → 628 | `Compilation::compile_method`              | `libjvm.dylib` |
|  +6.3% |   +37 |         10.2% |     591 → 628 | `Compilation::Compilation`                 | `libjvm.dylib` |
| +55.4% |   +36 |   1.1% → 1.6% |      65 → 101 | `MemNode::all_controls_dominate`           | `libjvm.dylib` |
| +64.3% |   +36 |   1.0% → 1.5% |       56 → 92 | `InitializeNode::detect_init_independence` | `libjvm.dylib` |
|  +3.4% |   +35 | 17.8% → 17.4% | 1,033 → 1,068 | `Compile::Optimize`                        | `libjvm.dylib` |
| +60.3% |   +35 |   1.0% → 1.5% |       58 → 93 | `InitializeNode::can_capture_store`        | `libjvm.dylib` |
| +50.8% |   +32 |   1.1% → 1.5% |       63 → 95 | `StoreNode::Ideal`                         | `libjvm.dylib` |
| +62.5% |   +25 |   0.7% → 1.1% |       40 → 65 | `BlockList::iterate_forward`               | `libjvm.dylib` |
| +61.5% |   +24 |   0.7% → 1.0% |       39 → 63 | `LIRGenerator::block_do`                   | `libjvm.dylib` |

##### Native

| Change | Delta |             % |       Samples | Function                                                                                                                                                        | Location                  |
| -----: | ----: | ------------: | ------------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
|  +8.5% |  +302 | 61.0% → 62.8% | 3,546 → 3,848 | `Thread::call_run`                                                                                                                                              | `libjvm.dylib`            |
|  +8.5% |  +302 | 61.0% → 62.8% | 3,546 → 3,848 | `thread_native_entry`                                                                                                                                           | `libjvm.dylib`            |
|  +8.5% |  +302 | 61.1% → 62.8% | 3,547 → 3,849 | `_pthread_start`                                                                                                                                                | `libsystem_pthread.dylib` |
|  +8.5% |  +302 | 61.1% → 62.8% | 3,547 → 3,849 | `thread_start`                                                                                                                                                  | `libsystem_pthread.dylib` |
|  +7.6% |  +245 | 55.7% → 56.8% | 3,235 → 3,480 | `JavaThread::thread_main_inner`                                                                                                                                 | `libjvm.dylib`            |
| +58.6% |   +75 |   2.2% → 3.3% |     128 → 203 | `G1EvacuateRegionsBaseTask::work`                                                                                                                               | `libjvm.dylib`            |
| +77.2% |   +61 |   1.4% → 2.3% |      79 → 140 | `G1ParScanThreadState::trim_queue_to_threshold`                                                                                                                 | `libjvm.dylib`            |
| +20.6% |   +59 |   4.9% → 5.6% |     287 → 346 | `WorkerThread::run`                                                                                                                                             | `libjvm.dylib`            |
| +71.4% |   +45 |   1.1% → 1.8% |      63 → 108 | `G1EvacuateRegionsTask::scan_roots`                                                                                                                             | `libjvm.dylib`            |
| +80.0% |   +40 |   0.9% → 1.5% |       50 → 90 | `void G1ScanHRForRegionClosure::ChunkScanner::on_dirty_cards<G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)>` | `libjvm.dylib`            |
| +80.0% |   +40 |   0.9% → 1.5% |       50 → 90 | `G1ScanHRForRegionClosure::scan_heap_roots`                                                                                                                     | `libjvm.dylib`            |
| +80.0% |   +40 |   0.9% → 1.5% |       50 → 90 | `G1ScanHRForRegionClosure::do_heap_region`                                                                                                                      | `libjvm.dylib`            |
| +80.0% |   +40 |   0.9% → 1.5% |       50 → 90 | `G1RemSet::scan_heap_roots`                                                                                                                                     | `libjvm.dylib`            |
|  +6.4% |   +38 | 10.2% → 10.3% |     593 → 631 | `Compiler::compile_method`                                                                                                                                      | `libjvm.dylib`            |
| +76.0% |   +38 |   0.9% → 1.4% |       50 → 88 | `G1ScanHRForRegionClosure::scan_memregion`                                                                                                                      | `libjvm.dylib`            |
| +53.2% |   +33 |   1.1% → 1.5% |       62 → 95 | `G1ParScanThreadState::do_copy_to_survivor_space`                                                                                                               | `libjvm.dylib`            |
| +28.3% |   +28 |   1.7% → 2.1% |      99 → 127 | `JVM_NewArray`                                                                                                                                                  | `libjvm.dylib`            |
| +45.6% |   +26 |   1.0% → 1.4% |       57 → 83 | `Arena::contains`                                                                                                                                               | `libjvm.dylib`            |
| +25.8% |   +25 |   1.7% → 2.0% |      97 → 122 | `pthread_jit_write_protect_np`                                                                                                                                  | `libsystem_pthread.dylib` |
| +30.3% |   +23 |   1.3% → 1.6% |       76 → 99 | `tlv_get_addr`                                                                                                                                                  | `libdyld.dylib`           |

##### Standard library

|     Change |  Delta |             % |     Samples | Function                                 | Location                                                                                                |
| ---------: | -----: | ------------: | ----------: | ---------------------------------------- | ------------------------------------------------------------------------------------------------------- |
|  +17491.7% | +2,099 |  0.2% → 34.4% |  12 → 2,111 | `invoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070012c0400 → java.lang.invoke.LambdaForm$MH.0x0000007001182800` |
|  +60800.0% | +1,824 |  0.1% → 29.8% |   3 → 1,827 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000070014c4400 → java.lang.invoke.LambdaForm$MH.0x000000700159fc00` |
|  +36180.0% | +1,809 |  0.1% → 29.6% |   5 → 1,814 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070015a2800`                                                     |
|  +87800.0% | +1,756 | <0.1% → 28.7% |   2 → 1,758 | `invoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000700122b400 → java.lang.invoke.LambdaForm$MH.0x0000007001268800` |
|    +369.8% | +1,749 |  8.1% → 36.2% | 473 → 2,222 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000070010c7c00 → java.lang.invoke.LambdaForm$MH.0x00000070010c6400` |
|  +21812.5% | +1,745 |  0.1% → 28.6% |   8 → 1,753 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000700122c400 → java.lang.invoke.LambdaForm$MH.0x000000700126a400` |
| +167600.0% | +1,676 | <0.1% → 27.3% |   1 → 1,677 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001688800 → java.lang.invoke.LambdaForm$MH.0x0000007001638800` |
| +167600.0% | +1,676 | <0.1% → 27.3% |   1 → 1,677 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070013a8000 → java.lang.invoke.LambdaForm$MH.0x0000007001639000` |
|   +9814.3% | +1,374 |  0.2% → 22.6% |  14 → 1,388 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000070010d5400 → java.lang.invoke.LambdaForm$MH.0x00000070010d4800` |
| +137200.0% | +1,372 | <0.1% → 22.4% |   1 → 1,373 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000070013c8800 → java.lang.invoke.LambdaForm$MH.0x0000007001365800` |
|  +13640.0% | +1,364 |  0.2% → 22.4% |  10 → 1,374 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070017c2400`                                                     |
|  +44533.3% | +1,336 |  0.1% → 21.8% |   3 → 1,339 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000007001391400 → java.lang.invoke.LambdaForm$MH.0x000000700135b400` |
|   +1465.2% |   +674 |  0.8% → 11.7% |    46 → 720 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070012c0c00 → java.lang.invoke.LambdaForm$MH.0x0000007001291000` |
|  +28700.0% |   +574 |  <0.1% → 9.4% |     2 → 576 | `invoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000700122d000 → java.lang.invoke.LambdaForm$MH.0x0000007001290c00` |
|    +225.0% |   +333 |   2.5% → 7.8% |   148 → 481 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000070010c7800`                                                     |
|  +25100.0% |   +251 |  <0.1% → 4.1% |     1 → 252 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070013c7000 → java.lang.invoke.LambdaForm$MH.0x0000007001325400` |
|   +2960.0% |   +148 |   0.1% → 2.5% |     5 → 153 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070017fe800 → java.lang.invoke.LambdaForm$MH.0x00000070017c3000` |
|  +12200.0% |   +122 |  <0.1% → 2.0% |     1 → 123 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001139400 → java.lang.invoke.LambdaForm$MH.0x0000007001120400` |
|  +11900.0% |   +119 |  <0.1% → 2.0% |     1 → 120 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070015cc400 → java.lang.invoke.LambdaForm$MH.0x00000070017c7800` |
|    +600.0% |   +114 |   0.3% → 2.2% |    19 → 133 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000700112ac00 → java.lang.invoke.LambdaForm$MH.0x0000007001121800` |

##### Ours

|  Change | Delta |             % |       Samples | Function                                                | Location                                                                    |
| ------: | ----: | ------------: | ------------: | ------------------------------------------------------- | --------------------------------------------------------------------------- |
|   +3.1% |   +51 | 28.5% → 27.8% | 1,654 → 1,705 | `measureRuleProcessingTime(Rule, Closure)`              | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
|   +3.4% |   +44 | 22.6% → 22.1% | 1,313 → 1,357 | `doCall(Object)`                                        | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`  |
|   +3.6% |   +43 | 20.5% → 20.1% | 1,191 → 1,234 | `applyTo(SourceCode)`                                   | `org.codenarc.rule.AbstractRule`                                            |
|   +2.2% |   +22 | 16.9% → 16.4% |   981 → 1,003 | `applyTo(SourceCode, List)`                             | `org.codenarc.rule.AbstractAstVisitorRule`                                  |
|   +0.9% |   +19 | 38.2% → 36.5% | 2,218 → 2,237 | `main(String[])`                                        | `org.codenarc.CodeNarc`                                                     |
|   +2.0% |   +19 | 16.0% → 15.4% |     927 → 946 | `visitClass(ClassNode)`                                 | `org.codenarc.rule.AbstractAstVisitor`                                      |
|   +0.8% |   +17 | 34.8% → 33.3% | 2,022 → 2,039 | `collectViolations(SourceCode, RuleSet)`                | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
|  +66.7% |   +16 |   0.4% → 0.7% |       24 → 40 | `applyTo(SourceCode, List)`                             | `org.codenarc.rule.unnecessary.UnnecessarySemicolonRule`                    |
|   +0.7% |   +15 | 38.0% → 36.2% | 2,207 → 2,222 | `execute(String[])`                                     | `org.codenarc.CodeNarc`                                                     |
|   +0.7% |   +15 | 37.7% → 36.0% | 2,192 → 2,207 | `execute()`                                             | `org.codenarc.CodeNarcRunner`                                               |
|   +0.7% |   +15 | 35.1% → 33.5% | 2,038 → 2,053 | `processFile(String, DirectoryResults, RuleSet)`        | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
|   +0.6% |   +12 | 35.4% → 33.7% | 2,056 → 2,068 | `analyze(RuleSet)`                                      | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
|   +0.6% |   +12 | 35.4% → 33.7% | 2,055 → 2,067 | `doCall(Object)`                                        | `org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1` |
|   +0.6% |   +12 | 35.4% → 33.7% | 2,055 → 2,067 | `processDirectory(String, RuleSet)`                     | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
|  +37.5% |    +9 |   0.4% → 0.5% |       24 → 33 | `visitClass(ClassNode)`                                 | `org.codenarc.rule.AbstractMethodVisitor`                                   |
| +225.0% |    +9 |   0.1% → 0.2% |        4 → 13 | `applyTo(SourceCode, List)`                             | `org.codenarc.rule.formatting.BlankLineBeforePackageRule`                   |
| +300.0% |    +9 |   0.1% → 0.2% |        3 → 12 | `visitClassEx(ClassNode)`                               | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`         |
|  +53.3% |    +8 |   0.3% → 0.4% |       15 → 23 | `visitArgumentlistExpression(ArgumentListExpression)`   | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                          |
| +100.0% |    +8 |   0.1% → 0.3% |        8 → 16 | `checkDeclaration(ASTNode, String, String)`             | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`         |
|  +66.7% |    +8 |   0.2% → 0.3% |       12 → 20 | `super$3$visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor`                    |

##### JIT

|  Change | Delta |            % | Samples | Function                  | Location    |
| ------: | ----: | -----------: | ------: | ------------------------- | ----------- |
| +600.0% |    +6 | <0.1% → 0.1% |   1 → 7 | `zero_blocks`             | `<unknown>` |
| +250.0% |    +5 | <0.1% → 0.1% |   2 → 7 | `I2C/C2I adapters(0xbbb)` | `<unknown>` |
|  +12.5% |    +1 |         0.1% |   8 → 9 | `vtable stub`             | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `I2C/C2I adapters(0x)`    | `<unknown>` |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

##### Compiler

| Change | Delta |            % |   Samples | Function                                           | Location       |
| -----: | ----: | -----------: | --------: | -------------------------------------------------- | -------------- |
| -23.6% |   -17 |  1.2% → 0.9% |   72 → 55 | `IndexSetIterator::advance_and_next`               | `libjvm.dylib` |
| -22.2% |   -16 |  1.2% → 0.9% |   72 → 56 | `PhaseIterGVN::remove_globally_dead_node`          | `libjvm.dylib` |
|  -8.7% |   -15 |  3.0% → 2.6% | 172 → 157 | `GraphBuilder::iterate_all_blocks`                 | `libjvm.dylib` |
|  -8.2% |   -14 |  2.9% → 2.6% | 171 → 157 | `GraphBuilder::iterate_bytecodes_for_block`        | `libjvm.dylib` |
|  -9.8% |   -14 |  2.5% → 2.1% | 143 → 129 | `GraphBuilder::try_inline_full`                    | `libjvm.dylib` |
|  -6.3% |   -14 |  3.9% → 3.4% | 224 → 210 | `Compilation::build_hir`                           | `libjvm.dylib` |
| -70.0% |   -14 |  0.3% → 0.1% |    20 → 6 | `GraphBuilder::method_return`                      | `libjvm.dylib` |
| -15.3% |   -13 |  1.5% → 1.2% |   85 → 72 | `PhaseIterGVN::subsume_node`                       | `libjvm.dylib` |
| -54.2% |   -13 |  0.4% → 0.2% |   24 → 11 | `ciMethod::find_monomorphic_target`                | `libjvm.dylib` |
|  -7.1% |   -13 |  3.2% → 2.8% | 183 → 170 | `GraphBuilder::GraphBuilder`                       | `libjvm.dylib` |
|  -8.4% |   -12 |  2.5% → 2.1% | 143 → 131 | `GraphBuilder::try_inline`                         | `libjvm.dylib` |
|  -7.5% |   -12 |  2.8% → 2.4% | 160 → 148 | `GraphBuilder::invoke`                             | `libjvm.dylib` |
| -33.3% |   -11 |  0.6% → 0.4% |   33 → 22 | `ciEnv::get_klass_by_index_impl`                   | `libjvm.dylib` |
| -23.4% |   -11 |  0.8% → 0.6% |   47 → 36 | `ciTypeFlow::flow_types`                           | `libjvm.dylib` |
| -23.4% |   -11 |  0.8% → 0.6% |   47 → 36 | `ciTypeFlow::do_flow`                              | `libjvm.dylib` |
| -39.3% |   -11 |  0.5% → 0.3% |   28 → 17 | `DebugInformationRecorder::serialize_scope_values` | `libjvm.dylib` |
| -64.7% |   -11 |  0.3% → 0.1% |    17 → 6 | `LinearScanWalker::free_collect_inactive_fixed`    | `libjvm.dylib` |
| -45.8% |   -11 |  0.4% → 0.2% |   24 → 13 | `CompilationPolicy::event`                         | `libjvm.dylib` |
| -20.4% |   -10 |  0.8% → 0.6% |   49 → 39 | `ciMethod::get_flow_analysis`                      | `libjvm.dylib` |
| -76.9% |   -10 | 0.2% → <0.1% |    13 → 3 | `GraphKit::kill_dead_locals`                       | `libjvm.dylib` |

##### Native

|  Change | Delta |            % |   Samples | Function                                                                                               | Location        |
| ------: | ----: | -----------: | --------: | ------------------------------------------------------------------------------------------------------ | --------------- |
|  -11.9% |   -22 |  3.2% → 2.7% | 185 → 163 | `java_lang_Throwable::fill_in_stack_trace`                                                             | `libjvm.dylib`  |
|  -10.8% |   -20 |  3.2% → 2.7% | 186 → 166 | `JVM_FillInStackTrace`                                                                                 | `libjvm.dylib`  |
|  -10.8% |   -20 |  3.2% → 2.7% | 186 → 166 | `Java_java_lang_Throwable_fillInStackTrace`                                                            | `libjava.dylib` |
| removed |   -16 |  0.3% → 0.0% |    16 → 0 | `KlassCleaningTask::work`                                                                              | `libjvm.dylib`  |
|  -38.9% |   -14 |  0.6% → 0.4% |   36 → 22 | `stale_jmethodID`                                                                                      | `<unknown>`     |
|  -22.8% |   -13 |  1.0% → 0.7% |   57 → 44 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object`                               | `libjvm.dylib`  |
|   -7.1% |   -13 |  3.2% → 2.8% | 183 → 170 | `IRScope::IRScope`                                                                                     | `libjvm.dylib`  |
|   -7.1% |   -13 |  3.2% → 2.8% | 183 → 170 | `IR::IR`                                                                                               | `libjvm.dylib`  |
|  -25.6% |   -11 |  0.7% → 0.5% |   43 → 32 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` | `libjvm.dylib`  |
|  -18.3% |   -11 |  1.0% → 0.8% |   60 → 49 | `HeapRegionManager::par_iterate`                                                                       | `libjvm.dylib`  |
|  -37.9% |   -11 |  0.5% → 0.3% |   29 → 18 | `frame::sender_for_compiled_frame`                                                                     | `libjvm.dylib`  |
|  -66.7% |   -10 |  0.3% → 0.1% |    15 → 5 | `Parse::do_exits`                                                                                      | `libjvm.dylib`  |
|  -17.2% |   -10 |  1.0% → 0.8% |   58 → 48 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_to_pb`                      | `libjvm.dylib`  |
|  -16.9% |   -10 |  1.0% → 0.8% |   59 → 49 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_region`                     | `libjvm.dylib`  |
|  -16.9% |   -10 |  1.0% → 0.8% |   59 → 49 | `G1RebuildRSAndScrubTask::work`                                                                        | `libjvm.dylib`  |
|  -47.6% |   -10 |  0.4% → 0.2% |   21 → 11 | `G1CardSet::add_card`                                                                                  | `libjvm.dylib`  |
|  -62.5% |   -10 |  0.3% → 0.1% |    16 → 6 | `frame::sender_raw`                                                                                    | `libjvm.dylib`  |
| removed |    -9 |  0.2% → 0.0% |     9 → 0 | `ClassLoaderDataGraphKlassIteratorAtomic::next_klass`                                                  | `libjvm.dylib`  |
|  -81.8% |    -9 | 0.2% → <0.1% |    11 → 2 | `JNIHandleBlock::allocate_handle`                                                                      | `libjvm.dylib`  |
|  -30.8% |    -8 |  0.4% → 0.3% |   26 → 18 | `vmSymbols::find_sid`                                                                                  | `libjvm.dylib`  |

##### Standard library

|  Change |  Delta |             % |     Samples | Function                                 | Location                                                                                                |
| ------: | -----: | ------------: | ----------: | ---------------------------------------- | ------------------------------------------------------------------------------------------------------- |
|  -99.6% | -2,198 |  38.0% → 0.1% |   2,207 → 9 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000070010c6800`                                                     |
| -100.0% | -2,101 | 36.2% → <0.1% |   2,102 → 1 | `invoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070011c4c00 → java.lang.invoke.LambdaForm$MH.0x00000070011ebc00` |
|  -99.8% | -1,818 | 31.3% → <0.1% |   1,821 → 3 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000070015c9000 → java.lang.invoke.LambdaForm$MH.0x0000007001451000` |
|  -99.1% | -1,788 |  31.1% → 0.3% |  1,804 → 16 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070015cbc00 → java.lang.invoke.LambdaForm$MH.0x00000070014f1c00` |
|  -99.9% | -1,693 | 29.2% → <0.1% |   1,694 → 1 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070012a9400 → java.lang.invoke.LambdaForm$MH.0x0000007001319400` |
|  -99.9% | -1,669 | 28.7% → <0.1% |   1,670 → 1 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001667400 → java.lang.invoke.LambdaForm$MH.0x0000007001480c00` |
|  -99.5% | -1,661 |  28.7% → 0.1% |   1,670 → 9 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001667c00 → java.lang.invoke.LambdaForm$MH.0x0000007001625800` |
|  -96.9% | -1,623 |  28.8% → 0.8% |  1,675 → 52 | `invoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000700139a400 → java.lang.invoke.LambdaForm$MH.0x000000700118b000` |
|  -99.9% | -1,361 | 23.5% → <0.1% |   1,363 → 2 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070017eb000 → java.lang.invoke.LambdaForm$MH.0x0000007001615400` |
|  -88.0% | -1,182 |  23.1% → 2.6% | 1,343 → 161 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000070010d4c00 → java.lang.invoke.LambdaForm$MH.0x00000070010c7400` |
|  -85.7% | -1,134 |  22.8% → 3.1% | 1,323 → 189 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000700139a800 → java.lang.invoke.LambdaForm$MH.0x00000070012a4c00` |
|  -82.0% | -1,064 |  22.3% → 3.8% | 1,297 → 233 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000007001390800 → java.lang.invoke.LambdaForm$MH.0x0000007001291800` |
|  -97.7% |   -559 |   9.8% → 0.2% |    572 → 13 | `invoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070012bd800 → java.lang.invoke.LambdaForm$MH.0x0000007001326000` |
|  -86.4% |   -216 |   4.3% → 0.6% |    250 → 34 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001354400 → java.lang.invoke.LambdaForm$MH.0x0000007001378800` |
|  -87.2% |   -211 |   4.2% → 0.5% |    242 → 31 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000070012c0000 → java.lang.invoke.LambdaForm$MH.0x0000007001181800` |
|  -96.8% |   -184 |   3.3% → 0.1% |     190 → 6 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000070012d4c00 → java.lang.invoke.LambdaForm$MH.0x0000007001182400` |
|  -99.4% |   -167 |  2.9% → <0.1% |     168 → 1 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070017ebc00`                                                     |
|  -18.9% |   -136 |  12.4% → 9.5% |   719 → 583 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070012bcc00 → java.lang.invoke.LambdaForm$MH.0x0000007001290000` |
|  -95.3% |   -123 |   2.2% → 0.1% |     129 → 6 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000007001121c00 → java.lang.invoke.LambdaForm$MH.0x00000070010d9800` |
|  -98.3% |   -117 |  2.0% → <0.1% |     119 → 2 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070017f0400 → java.lang.invoke.LambdaForm$MH.0x0000007001534c00` |

##### Ours

|  Change | Delta |            % |   Samples | Function                                                | Location                                                                       |
| ------: | ----: | -----------: | --------: | ------------------------------------------------------- | ------------------------------------------------------------------------------ |
|   -8.5% |   -23 |  4.7% → 4.0% | 271 → 248 | `doCall(Object)`                                        | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`     |
|   -5.1% |   -12 |  4.1% → 3.7% | 236 → 224 | `isRuleSuppressed(Rule)`                                | `org.codenarc.analyzer.SuppressionAnalyzer`                                    |
|  -78.6% |   -11 | 0.2% → <0.1% |    14 → 3 | `getText()`                                             | `org.codenarc.source.SourceFile`                                               |
|  -40.0% |   -10 |  0.4% → 0.2% |   25 → 15 | `doCall(Object)`                                        | `org.gmetrics.metric.AbstractMethodMetric$_addMethodsToMetricResults_closure4` |
|  -40.0% |   -10 |  0.4% → 0.2% |   25 → 15 | `addMethodsToMetricResults(SourceCode, ClassNode, Map)` | `org.gmetrics.metric.AbstractMethodMetric`                                     |
|   -3.5% |    -8 |  3.9% → 3.6% | 228 → 220 | `init()`                                                | `org.codenarc.source.AbstractSourceCode`                                       |
|   -3.5% |    -8 |  3.9% → 3.6% | 229 → 221 | `init()`                                                | `org.codenarc.analyzer.SuppressionAnalyzer`                                    |
|  -42.1% |    -8 |  0.3% → 0.2% |   19 → 11 | `calculate(MethodNode, SourceCode)`                     | `org.gmetrics.metric.abc.AbcMetric`                                            |
|   -3.1% |    -7 |  3.9% → 3.6% | 229 → 222 | `getAst()`                                              | `org.codenarc.source.AbstractSourceCode`                                       |
|  -23.3% |    -7 |  0.5% → 0.4% |   30 → 23 | `visitClass(ClassNode)`                                 | `org.codenarc.rule.AbstractMethodCallExpressionVisitor`                        |
|  -77.8% |    -7 | 0.2% → <0.1% |     9 → 2 | `visitBinaryExpression(BinaryExpression)`               | `org.gmetrics.metric.abc.AbcAstVisitor`                                        |
|  -70.0% |    -7 | 0.2% → <0.1% |    10 → 3 | `visitDeclarationExpression(DeclarationExpression)`     | `org.codenarc.rule.groovyism.AssignCollectionUniqueAstVisitor`                 |
|  -41.2% |    -7 |  0.3% → 0.2% |   17 → 10 | `getNonStaticImportsSortedByLineNumber(SourceCode)`     | `org.codenarc.util.ImportUtil`                                                 |
|  -66.7% |    -6 | 0.2% → <0.1% |     9 → 3 | `super$3$visitMethod(MethodNode)`                       | `org.gmetrics.metric.abc.AbcAstVisitor`                                        |
|  -66.7% |    -6 | 0.2% → <0.1% |     9 → 3 | `visitMethod(MethodNode)`                               | `org.gmetrics.metric.abc.AbcAstVisitor`                                        |
|  -85.7% |    -6 | 0.1% → <0.1% |     7 → 1 | `isMatchingUniqueCall(Expression)`                      | `org.codenarc.rule.groovyism.AssignCollectionUniqueAstVisitor`                 |
|  -66.7% |    -6 | 0.2% → <0.1% |     9 → 3 | `isChainedUnique(Expression)`                           | `org.codenarc.rule.groovyism.AssignCollectionUniqueAstVisitor`                 |
| removed |    -6 |  0.1% → 0.0% |     6 → 0 | `visitClosureExpression(ClosureExpression)`             | `org.codenarc.rule.naming.ParameterNameAstVisitor`                             |
|  -54.5% |    -6 |  0.2% → 0.1% |    11 → 5 | `applyTo(SourceCode, List)`                             | `org.codenarc.rule.imports.UnnecessaryGroovyImportRule`                        |
|  -54.5% |    -6 |  0.2% → 0.1% |    11 → 5 | `visitBlockStatement(BlockStatement)`                   | `org.codenarc.rule.unnecessary.UnnecessaryObjectReferencesAstVisitor`          |

##### JIT

|  Change | Delta |            % | Samples | Function                   | Location    |
| ------: | ----: | -----------: | ------: | -------------------------- | ----------- |
|  -56.5% |   -13 |  0.4% → 0.2% | 23 → 10 | `itable stub`              | `<unknown>` |
|  -40.0% |    -6 |  0.3% → 0.1% |  15 → 9 | `I2C/C2I adapters(0xbb)`   | `<unknown>` |
|  -75.0% |    -3 | 0.1% → <0.1% |   4 → 1 | `I2C/C2I adapters(0xbab)`  | `<unknown>` |
|  -50.0% |    -1 |        <0.1% |   2 → 1 | `I2C/C2I adapters(0xbbaa)` | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `I2C/C2I adapters(0xbaa)`  | `<unknown>` |

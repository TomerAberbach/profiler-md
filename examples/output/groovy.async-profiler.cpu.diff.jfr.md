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

|  Change | Delta |            % |   Samples | Function                                                                                                      | Location                                                |
| ------: | ----: | -----------: | --------: | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
|  -38.5% |   -10 |  0.4% → 0.3% |   26 → 16 | `getNode(Object)`                                                                                             | `java.util.HashMap`                                     |
|  -13.8% |    -9 |  1.1% → 0.9% |   65 → 56 | `newInstance(Class, int)`                                                                                     | `java.lang.reflect.Array`                               |
|  -77.8% |    -7 | 0.2% → <0.1% |     9 → 2 | `invokeSpecial(Object, Object, Object)`                                                                       | `java.lang.invoke.DirectMethodHandle$Holder`            |
|  -63.6% |    -7 |  0.2% → 0.1% |    11 → 4 | `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`  |
|  -85.7% |    -6 | 0.1% → <0.1% |     7 → 1 | `getExactSizeIfKnown()`                                                                                       | `java.util.Spliterator`                                 |
|  -60.0% |    -6 |  0.2% → 0.1% |    10 → 4 | `collector(Object, Object, Object, Object)`                                                                   | `java.lang.invoke.LambdaForm$MH.0x00000070010d3c00`     |
|   -4.6% |    -5 |  1.9% → 1.7% | 108 → 103 | `cast(Object)`                                                                                                | `java.lang.Class`                                       |
|  -45.5% |    -5 |  0.2% → 0.1% |    11 → 6 | `checkCustomized(MethodHandle)`                                                                               | `java.lang.invoke.Invokers`                             |
|  -83.3% |    -5 | 0.1% → <0.1% |     6 → 1 | `newArray(Class, int)`                                                                                        | `java.lang.reflect.Array`                               |
|  -62.5% |    -5 | 0.1% → <0.1% |     8 → 3 | `invoke(Object, Object)`                                                                                      | `java.lang.invoke.LambdaForm$MH.0x000000700109a400`     |
|  -15.4% |    -4 |         0.4% |   26 → 22 | `<init>(MethodType, LambdaForm)`                                                                              | `java.lang.invoke.MethodHandle`                         |
| removed |    -4 |  0.1% → 0.0% |     4 → 0 | `visit(GroovyCodeVisitor)`                                                                                    | `org.codehaus.groovy.ast.expr.VariableExpression`       |
|  -57.1% |    -4 | 0.1% → <0.1% |     7 → 3 | `getWeakMetaClass()`                                                                                          | `org.codehaus.groovy.reflection.ClassInfo`              |
|  -57.1% |    -4 | 0.1% → <0.1% |     7 → 3 | `resize()`                                                                                                    | `java.util.HashMap`                                     |
| removed |    -4 |  0.1% → 0.0% |     4 → 0 | `map(Function)`                                                                                               | `java.util.stream.ReferencePipeline`                    |
|  -50.0% |    -4 |         0.1% |     8 → 4 | `getMethods(Class, String)`                                                                                   | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex` |
|  -75.0% |    -3 | 0.1% → <0.1% |     4 → 1 | `forEachRemaining(Consumer)`                                                                                  | `java.util.Spliterators$ArraySpliterator`               |
|  -33.3% |    -3 |  0.2% → 0.1% |     9 → 6 | `makePairwiseConvertByEditor(MethodHandle, MethodType, boolean, boolean)`                                     | `java.lang.invoke.MethodHandleImpl`                     |
| removed |    -3 |  0.1% → 0.0% |     3 → 0 | `getReachableConfigSet(CharStream, ATNConfigSet, ATNConfigSet, int)`                                          | `groovyjarjarantlr4.v4.runtime.atn.LexerATNSimulator`   |
| removed |    -3 |  0.1% → 0.0% |     3 → 0 | `getSemanticContext()`                                                                                        | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig`           |

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

#### Callers

Callers with the largest change in contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `Node::dominates` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                           | Location       |
| -----: | ----: | -----: | ------: | -------------------------------- | -------------- |
| +59.0% |   +36 | 100.0% | 61 → 97 | `MemNode::all_controls_dominate` | `libjvm.dylib` |

##### `PhaseChaitin::Split` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Caller                            | Location       |
| -----: | ----: | -----: | --------: | --------------------------------- | -------------- |
| +30.4% |   +31 | 100.0% | 102 → 133 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `Arena::contains` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller           | Location       |
| ------: | ----: | ------------: | ------: | ---------------- | -------------- |
|  +41.1% |   +23 | 98.2% → 95.2% | 56 → 79 | `Matcher::xform` | `libjvm.dylib` |
| +300.0% |    +3 |   1.8% → 4.8% |   1 → 4 | `Matcher::match` | `libjvm.dylib` |

##### `pthread_jit_write_protect_np` (`libsystem_pthread.dylib`)

|  Change | Delta |             % | Samples | Caller                          | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------- | -------------- |
|  +42.1% |   +24 | 58.8% → 66.4% | 57 → 81 | `JVM_NewArray`                  | `libjvm.dylib` |
| removed |    -4 |   4.1% → 0.0% |   4 → 0 | `jni_IsAssignableFrom`          | `libjvm.dylib` |
| +100.0% |    +3 |   3.1% → 4.9% |   3 → 6 | `InterpreterRuntime::ldc`       | `libjvm.dylib` |
|     new |    +2 |   0.0% → 1.6% |   0 → 2 | `JVM_Clone`                     | `libjvm.dylib` |
|  -25.0% |    -1 |   4.1% → 2.5% |   4 → 3 | `InterpreterRuntime::anewarray` | `libjvm.dylib` |

##### `tlv_get_addr` (`libdyld.dylib`)

|  Change | Delta |           % | Samples | Caller                               | Location       |
| ------: | ----: | ----------: | ------: | ------------------------------------ | -------------- |
| +500.0% |    +5 | 1.3% → 6.1% |   1 → 6 | `arrayof_oop_disjoint_arraycopy`     | `<unknown>`    |
|     new |    +3 | 0.0% → 3.0% |   0 → 3 | `TypeInstPtr::add_offset`            | `libjvm.dylib` |
| removed |    -2 | 2.6% → 0.0% |   2 → 0 | `Type::hashcons`                     | `libjvm.dylib` |
|  -66.7% |    -2 | 3.9% → 1.0% |   3 → 1 | `BlockListBuilder::BlockListBuilder` | `libjvm.dylib` |
| removed |    -2 | 2.6% → 0.0% |   2 → 0 | `Compilation::build_hir`             | `libjvm.dylib` |

##### `G1ParScanThreadState::trim_queue_to_threshold` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                                              | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------- | -------------- |
| +155.6% |   +14 | 52.9% → 57.5% |  9 → 23 | `G1ScanHRForRegionClosure::scan_memregion`                          | `libjvm.dylib` |
| +100.0% |    +6 | 35.3% → 30.0% |  6 → 12 | `G1ParScanThreadState::steal_and_trim_queue`                        | `libjvm.dylib` |
|     new |    +2 |   0.0% → 5.0% |   0 → 2 | `void G1ParCopyClosure<(G1Barrier)1, false>::do_oop_work<oopDesc*>` | `libjvm.dylib` |
|     new |    +1 |   0.0% → 2.5% |   0 → 1 | `void G1ParCopyClosure<(G1Barrier)0, true>::do_oop_work<oopDesc*>`  | `libjvm.dylib` |

##### `G1ParScanThreadState::do_copy_to_survivor_space` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                                              | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------- | -------------- |
|  +73.1% |   +19 | 83.9% → 84.9% | 26 → 45 | `G1ParScanThreadState::trim_queue_to_threshold`                     | `libjvm.dylib` |
|     new |    +3 |   0.0% → 5.7% |   0 → 3 | `G1ParEvacuateFollowersClosure::do_void`                            | `libjvm.dylib` |
| removed |    -1 |   3.2% → 0.0% |   1 → 0 | `void G1ParCopyClosure<(G1Barrier)1, false>::do_oop_work<oopDesc*>` | `libjvm.dylib` |
| +100.0% |    +1 |   3.2% → 3.8% |   1 → 2 | `G1ScanHRForRegionClosure::scan_memregion`                          | `libjvm.dylib` |

##### `LinearScanWalker::alloc_free_reg` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller                               | Location       |
| ------: | ----: | -------------: | ------: | ------------------------------------ | -------------- |
| +160.0% |   +16 | 90.9% → 100.0% | 10 → 26 | `LinearScanWalker::activate_current` | `libjvm.dylib` |
| removed |    -1 |    9.1% → 0.0% |   1 → 0 | `IntervalWalker::walk_to`            | `libjvm.dylib` |

##### `collector(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010a1000`)

|  Change | Delta |             % | Samples | Caller                                | Location                                            |
| ------: | ----: | ------------: | ------: | ------------------------------------- | --------------------------------------------------- |
|  +66.7% |    +8 | 57.1% → 58.8% | 12 → 20 | `invoke(Object, Object, Object)`      | `java.lang.invoke.LambdaForm$MH.0x00000070010a1800` |
|     new |    +3 |   0.0% → 8.8% |   0 → 3 | `invoke(Object, Object, int)`         | `java.lang.invoke.LambdaForm$MH.0x00000070010d1c00` |
| removed |    -1 |   4.8% → 0.0% |   1 → 0 | `invoke(Object, Object, int)`         | `java.lang.invoke.LambdaForm$MH.0x00000070010d2000` |
|     new |    +1 |   0.0% → 2.9% |   0 → 1 | `invoke(Object, Object, int, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070013f3400` |
|     new |    +1 |   0.0% → 2.9% |   0 → 1 | `invoke(Object, Object, int)`         | `java.lang.invoke.LambdaForm$MH.0x00000070010cb800` |

##### `sys_icache_invalidate` (`libsystem_platform.dylib`)

|  Change | Delta |             % | Samples | Caller                              | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------------- | -------------- |
| +200.0% |    +6 | 25.0% → 37.5% |   3 → 9 | `nmethod::oops_do_process_weak`     | `libjvm.dylib` |
|  +80.0% |    +4 | 41.7% → 37.5% |   5 → 9 | `nmethod::nmethod`                  | `libjvm.dylib` |
| removed |    -1 |   8.3% → 0.0% |   1 → 0 | `CodeBuffer::copy_code_to`          | `libjvm.dylib` |
| +100.0% |    +1 |          8.3% |   1 → 2 | `CompiledIC::set_to_monomorphic`    | `libjvm.dylib` |
| +100.0% |    +1 |          8.3% |   1 → 2 | `SharedRuntime::resolve_sub_helper` | `libjvm.dylib` |

##### `Dict::Insert` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                               | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------ | -------------- |
|  +50.0% |    +5 | 83.3% → 65.2% | 10 → 15 | `Type::hashcons`                     | `libjvm.dylib` |
|     new |    +3 |  0.0% → 13.0% |   0 → 3 | `TypeInstPtr::xmeet_helper`          | `libjvm.dylib` |
| removed |    -1 |   8.3% → 0.0% |   1 → 0 | `TypeFunc::make`                     | `libjvm.dylib` |
|     new |    +1 |   0.0% → 4.3% |   0 → 1 | `TypeOopPtr::make_from_klass_common` | `libjvm.dylib` |
|     new |    +1 |   0.0% → 4.3% |   0 → 1 | `TypePtr::interfaces`                | `libjvm.dylib` |

##### `Node::clone` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                              | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------------- | -------------- |
| +125.0% |    +5 | 80.0% → 56.3% |   4 → 9 | `GraphKit::clone_map`               | `libjvm.dylib` |
|     new |    +4 |  0.0% → 25.0% |   0 → 4 | `Matcher::xform`                    | `libjvm.dylib` |
|     new |    +2 |  0.0% → 12.5% |   0 → 2 | `PhaseChaitin::split_Rematerialize` | `libjvm.dylib` |
| removed |    -1 |  20.0% → 0.0% |   1 → 0 | `PhaseIdealLoop::clone_loop`        | `libjvm.dylib` |
|     new |    +1 |   0.0% → 6.3% |   0 → 1 | `PhaseCFG::build_cfg`               | `libjvm.dylib` |

##### `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>` (`libjvm.dylib`)

| Change | Delta |              % | Samples | Caller                                            | Location       |
| -----: | ----: | -------------: | ------: | ------------------------------------------------- | -------------- |
| +33.3% |    +8 | 100.0% → 91.4% | 24 → 32 | `G1ParScanThreadState::do_copy_to_survivor_space` | `libjvm.dylib` |
|    new |    +3 |    0.0% → 8.6% |   0 → 3 | `G1ParScanThreadState::trim_queue_to_threshold`   | `libjvm.dylib` |

##### `Matcher::match_tree` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                | Location       |
| ------: | ----: | ------------: | ------: | --------------------- | -------------- |
| +122.2% |   +11 | 69.2% → 87.0% |  9 → 20 | `Matcher::xform`      | `libjvm.dylib` |
|  -25.0% |    -1 | 30.8% → 13.0% |   4 → 3 | `Matcher::match_sfpt` | `libjvm.dylib` |

##### `Type::cmp` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                   | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------------- | -------------- |
|  +76.9% |   +10 | 92.9% → 95.8% | 13 → 23 | `Dict::Insert`                           | `libjvm.dylib` |
| removed |    -1 |   7.1% → 0.0% |   1 → 0 | `MulNode::Value`                         | `libjvm.dylib` |
|     new |    +1 |   0.0% → 4.2% |   0 → 1 | `ConstraintCastNode::higher_equal_types` | `libjvm.dylib` |

##### `LinearScan::build_intervals` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                       | Location       |
| ------: | ----: | -----: | ------: | ---------------------------- | -------------- |
| +125.0% |   +10 | 100.0% |  8 → 18 | `LinearScan::do_linear_scan` | `libjvm.dylib` |

##### `ValueStack::values_do` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                           | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------- | -------------- |
| +266.7% |    +8 | 37.5% → 61.1% |  3 → 11 | `SubstitutionResolver::block_do` | `libjvm.dylib` |
|  -50.0% |    -2 | 50.0% → 11.1% |   4 → 2 | `BlockBegin::state_values_do`    | `libjvm.dylib` |
| +200.0% |    +2 | 12.5% → 16.7% |   1 → 3 | `UseCountComputer::block_do`     | `libjvm.dylib` |
|     new |    +1 |   0.0% → 5.6% |   0 → 1 | `StateSplit::state_values_do`    | `libjvm.dylib` |
|     new |    +1 |   0.0% → 5.6% |   0 → 1 | `Invoke::state_values_do`        | `libjvm.dylib` |

##### `PhaseLive::add_liveout` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                            | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------- | -------------- |
| +500.0% |    +5 |  4.8% → 20.0% |   1 → 6 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
|  +20.0% |    +4 | 95.2% → 80.0% | 20 → 24 | `PhaseLive::compute`              | `libjvm.dylib` |

##### `PhaseAggressiveCoalesce::insert_copies` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                            | Location       |
| -----: | ----: | -----: | ------: | --------------------------------- | -------------- |
| +23.1% |    +9 | 100.0% | 39 → 48 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `_platform_memmove` (`libsystem_platform.dylib`)

|  Change | Delta |            % | Samples | Caller                 | Location       |
| ------: | ----: | -----------: | ------: | ---------------------- | -------------- |
|     new |    +4 | 0.0% → 19.0% |   0 → 4 | `XHandlers::XHandlers` | `libjvm.dylib` |
|     new |    +3 | 0.0% → 14.3% |   0 → 3 | `nmethod::nmethod`     | `libjvm.dylib` |
| removed |    -2 | 16.7% → 0.0% |   2 → 0 | `Node::add_req`        | `libjvm.dylib` |
| removed |    -2 | 16.7% → 0.0% |   2 → 0 | `JVM_GetCallerClass`   | `libjvm.dylib` |
|     new |    +2 |  0.0% → 9.5% |   0 → 2 | `Node::out_grow`       | `libjvm.dylib` |

##### `PhaseIdealLoop::dom_lca_for_get_late_ctrl_internal` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------- | -------------- |
| +100.0% |    +8 | 80.0% → 88.9% |  8 → 16 | `PhaseIdealLoop::compute_lca_of_uses` | `libjvm.dylib` |

##### `PhaseChaitin::gather_lrg_masks` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                            | Location       |
| -----: | ----: | -----: | ------: | --------------------------------- | -------------- |
| +25.0% |    +7 | 100.0% | 28 → 35 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `MachNode::ideal_reg` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                            | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------- | -------------- |
| +125.0% |    +5 | 80.0% → 75.0% |   4 → 9 | `MachNode::rematerialize`         | `libjvm.dylib` |
| +100.0% |    +1 | 20.0% → 16.7% |   1 → 2 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
|     new |    +1 |   0.0% → 8.3% |   0 → 1 | `PhaseChaitin::gather_lrg_masks`  | `libjvm.dylib` |

##### `LinearScan::assign_reg_num` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                       | Location       |
| ------: | ----: | -----: | ------: | ---------------------------- | -------------- |
| +233.3% |    +7 | 100.0% |  3 → 10 | `LinearScan::do_linear_scan` | `libjvm.dylib` |

##### `Node::has_special_unique_user` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller                                   | Location       |
| ------: | ----: | -------------: | ------: | ---------------------------------------- | -------------- |
| +300.0% |    +3 | 100.0% → 50.0% |   1 → 4 | `Compile::disconnect_useless_nodes`      | `libjvm.dylib` |
|     new |    +3 |   0.0% → 37.5% |   0 → 3 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |
|     new |    +1 |   0.0% → 12.5% |   0 → 1 | `PhaseCCP::transform`                    | `libjvm.dylib` |

##### `PhaseChaitin::post_allocate_copy_removal` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                            | Location       |
| -----: | ----: | -----: | ------: | --------------------------------- | -------------- |
| +26.1% |    +6 | 100.0% | 23 → 29 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseChaitin::raise_pressure` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller                                         | Location       |
| ------: | ----: | -------------: | ------: | ---------------------------------------------- | -------------- |
| +200.0% |    +4 | 100.0% → 75.0% |   2 → 6 | `PhaseChaitin::compute_initial_block_pressure` | `libjvm.dylib` |
|     new |    +2 |   0.0% → 25.0% |   0 → 2 | `PhaseChaitin::build_ifg_physical`             | `libjvm.dylib` |

##### `Node::is_CFG` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                 | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------------- | -------------- |
| +500.0% |    +5 |  9.1% → 35.3% |   1 → 6 | `PhaseIdealLoop::Dominators`           | `libjvm.dylib` |
|  -50.0% |    -3 | 54.5% → 17.6% |   6 → 3 | `PhaseIdealLoop::build_and_optimize`   | `libjvm.dylib` |
|     new |    +3 |  0.0% → 17.6% |   0 → 3 | `PhaseIdealLoop::build_loop_tree`      | `libjvm.dylib` |
| removed |    -1 |   9.1% → 0.0% |   1 → 0 | `Node::unique_ctrl_out_or_null`        | `libjvm.dylib` |
| removed |    -1 |   9.1% → 0.0% |   1 → 0 | `PhaseIdealLoop::try_sink_out_of_loop` | `libjvm.dylib` |

##### `Node::rematerialize` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                | Location       |
| -----: | ----: | -----------: | ------: | --------------------- | -------------- |
|    new |    +6 | 0.0% → 75.0% |   0 → 6 | `PhaseChaitin::Split` | `libjvm.dylib` |

##### `BoolNode::Opcode` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                               | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------ | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseIterGVN::subsume_node`         | `libjvm.dylib` |
|     new |    +1 |  0.0% → 14.3% |   0 → 1 | `Node::hash`                         | `libjvm.dylib` |
|     new |    +1 |  0.0% → 14.3% |   0 → 1 | `Matcher::find_shared`               | `libjvm.dylib` |
|     new |    +1 |  0.0% → 14.3% |   0 → 1 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |
|     new |    +1 |  0.0% → 14.3% |   0 → 1 | `Node::set_req_X`                    | `libjvm.dylib` |

##### `__psynch_mutexwait` (`libsystem_kernel.dylib`)

| Change | Delta |      % | Samples | Caller                              | Location                  |
| -----: | ----: | -----: | ------: | ----------------------------------- | ------------------------- |
| +23.7% |    +9 | 100.0% | 38 → 47 | `_pthread_mutex_firstfit_lock_slow` | `libsystem_pthread.dylib` |

##### `posix_madvise` (`libsystem_kernel.dylib`)

| Change | Delta |      % | Samples | Caller        | Location                 |
| -----: | ----: | -----: | ------: | ------------- | ------------------------ |
| +72.7% |    +8 | 100.0% | 11 → 19 | `free_medium` | `libsystem_malloc.dylib` |

##### `__psynch_mutexdrop` (`libsystem_kernel.dylib`)

|  Change | Delta |      % | Samples | Caller                                | Location                  |
| ------: | ----: | -----: | ------: | ------------------------------------- | ------------------------- |
| +266.7% |    +8 | 100.0% |  3 → 11 | `_pthread_mutex_firstfit_unlock_slow` | `libsystem_pthread.dylib` |

##### `InstanceKlass::find_method_index` (`libjvm.dylib`)

| Change | Delta |              % | Samples | Caller                                  | Location       |
| -----: | ----: | -------------: | ------: | --------------------------------------- | -------------- |
| +33.3% |    +5 | 100.0% → 95.2% | 15 → 20 | `InstanceKlass::uncached_lookup_method` | `libjvm.dylib` |
|    new |    +1 |    0.0% → 4.8% |   0 → 1 | `InstanceKlass::find_method`            | `libjvm.dylib` |

##### `CompiledMethod::cleanup_inline_caches_impl` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                                  | Location       |
| ------: | ----: | -----: | ------: | --------------------------------------- | -------------- |
| +600.0% |    +6 | 100.0% |   1 → 7 | `CompiledMethod::unload_nmethod_caches` | `libjvm.dylib` |

##### `BacktraceBuilder::push` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                                     | Location       |
| -----: | ----: | -----: | ------: | ------------------------------------------ | -------------- |
| +42.9% |    +6 | 100.0% | 14 → 20 | `java_lang_Throwable::fill_in_stack_trace` | `libjvm.dylib` |

##### `SignatureStream::next` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                                             | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------ | -------------- |
| +50.0% |    +1 | 50.0% → 33.3% |   2 → 3 | `SignatureStream::SignatureStream`                                 | `libjvm.dylib` |
|    new |    +1 |  0.0% → 11.1% |   0 → 1 | `ciMethod::ciMethod`                                               | `libjvm.dylib` |
|    new |    +1 |  0.0% → 11.1% |   0 → 1 | `void SignatureIterator::do_parameters_on<ArgumentSizeComputer>`   | `libjvm.dylib` |
|    new |    +1 |  0.0% → 11.1% |   0 → 1 | `void SignatureIterator::do_parameters_on<ReferenceArgumentCount>` | `libjvm.dylib` |
|    new |    +1 |  0.0% → 11.1% |   0 → 1 | `MethodHandles::lookup_basic_type_signature`                       | `libjvm.dylib` |

##### `java_lang_Throwable::fill_in_stack_trace` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                                     | Location       |
| -----: | ----: | -----: | ------: | ------------------------------------------ | -------------- |
|  +7.8% |    +5 | 100.0% | 64 → 69 | `java_lang_Throwable::fill_in_stack_trace` | `libjvm.dylib` |

##### `ResolvedMethodTable::find_method` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller                                                      | Location       |
| ------: | ----: | -------------: | ------: | ----------------------------------------------------------- | -------------- |
| +200.0% |    +4 | 100.0% → 85.7% |   2 → 6 | `java_lang_invoke_ResolvedMethodName::find_resolved_method` | `libjvm.dylib` |
|     new |    +1 |   0.0% → 14.3% |   0 → 1 | `CallInfo::CallInfo`                                        | `libjvm.dylib` |

##### `pthread_mutex_lock` (`libsystem_pthread.dylib`)

|  Change | Delta |              % | Samples | Caller                                | Location                  |
| ------: | ----: | -------------: | ------: | ------------------------------------- | ------------------------- |
|     new |    +2 |   0.0% → 33.3% |   0 → 2 | `Mutex::lock_without_safepoint_check` | `libjvm.dylib`            |
| +100.0% |    +1 | 100.0% → 33.3% |   1 → 2 | `ThreadCritical::ThreadCritical`      | `libjvm.dylib`            |
|     new |    +1 |   0.0% → 16.7% |   0 → 1 | `ciMethod::ciMethod`                  | `libjvm.dylib`            |
|     new |    +1 |   0.0% → 16.7% |   0 → 1 | `_pthread_cond_wait`                  | `libsystem_pthread.dylib` |

##### `void OopOopIterateDispatch<G1RootRegionScanClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                               | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------ | -------------- |
| +200.0% |    +4 | 66.7% → 85.7% |   2 → 6 | `G1ConcurrentMark::scan_root_region` | `libjvm.dylib` |

##### `copyWithExtendL(MethodType, LambdaForm, Object)` (`java.lang.invoke.BoundMethodHandle$Species_LL`)

| Change | Delta |             % | Samples | Caller                         | Location                        |
| -----: | ----: | ------------: | ------: | ------------------------------ | ------------------------------- |
|    new |    +9 | 0.0% → 100.0% |   0 → 9 | `asCollector(int, Class, int)` | `java.lang.invoke.MethodHandle` |

##### `invokeStatic(Object, Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|  Change | Delta |             % | Samples | Caller                                   | Location                                            |
| ------: | ----: | ------------: | ------: | ---------------------------------------- | --------------------------------------------------- |
|     new |    +3 |  0.0% → 11.1% |   0 → 3 | `invoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001189400` |
|     new |    +3 |  0.0% → 11.1% |   0 → 3 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000070010c6800` |
| removed |    -2 |  10.5% → 0.0% |   2 → 0 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000070010c6c00` |
|  +12.5% |    +1 | 42.1% → 33.3% |   8 → 9 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000700109b800` |
|  +16.7% |    +1 | 31.6% → 25.9% |   6 → 7 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000070010ab000` |

##### `tryAdvance(Consumer)` (`java.util.Spliterators$ArraySpliterator`)

|  Change | Delta |      % | Samples | Caller                                 | Location                             |
| ------: | ----: | -----: | ------: | -------------------------------------- | ------------------------------------ |
| +350.0% |    +7 | 100.0% |   2 → 9 | `forEachWithCancel(Spliterator, Sink)` | `java.util.stream.ReferencePipeline` |

##### `equals(Object, Object)` (`java.util.Objects`)

| Change | Delta |              % | Samples | Caller                      | Location                                                |
| -----: | ----: | -------------: | ------: | --------------------------- | ------------------------------------------------------- |
| +62.5% |    +5 | 100.0% → 86.7% |  8 → 13 | `equals(Object)`            | `jdk.internal.util.StrongReferenceKey`                  |
|    new |    +2 |   0.0% → 13.3% |   0 → 2 | `getMethods(Class, String)` | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex` |

##### `getAndPut(String, MemoizeCache$ValueProvider)` (`org.codehaus.groovy.vmplugin.v8.CacheableCallSite`)

|  Change | Delta |      % | Samples | Caller                                                                          | Location                                        |
| ------: | ----: | -----: | ------: | ------------------------------------------------------------------------------- | ----------------------------------------------- |
| +100.0% |    +6 | 100.0% |  6 → 12 | `lambda$fromCache$2(IndyInterface$FallbackSupplier, CacheableCallSite, Object)` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |

##### `unreflect(Method)` (`java.lang.invoke.MethodHandles$Lookup`)

| Change | Delta |             % | Samples | Caller                                             | Location                                                  |
| -----: | ----: | ------------: | ------: | -------------------------------------------------- | --------------------------------------------------------- |
|    new |    +6 | 0.0% → 100.0% |   0 → 6 | `correctClassForNameAndUnReflectOtherwise(Method)` | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700102ac00`)

|  Change | Delta |             % | Samples | Caller                   | Location                                            |
| ------: | ----: | ------------: | ------: | ------------------------ | --------------------------------------------------- |
| +200.0% |    +2 | 20.0% → 30.0% |   1 → 3 | `invoke(Object, int)`    | `java.lang.invoke.LambdaForm$MH.0x0000007001031400` |
| removed |    -1 |  20.0% → 0.0% |   1 → 0 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010d5000` |
|     new |    +1 |  0.0% → 10.0% |   0 → 1 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000700109b400` |
| removed |    -1 |  20.0% → 0.0% |   1 → 0 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000700155fc00` |
|     new |    +1 |  0.0% → 10.0% |   0 → 1 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000700109ac00` |

##### `join(PredictionContext, PredictionContext, PredictionContextCache)` (`groovyjarjarantlr4.v4.runtime.atn.PredictionContext`)

| Change | Delta |      % | Samples | Caller                                   | Location                                         |
| -----: | ----: | -----: | ------: | ---------------------------------------- | ------------------------------------------------ |
| +71.4% |    +5 | 100.0% |  7 → 12 | `add(ATNConfig, PredictionContextCache)` | `groovyjarjarantlr4.v4.runtime.atn.ATNConfigSet` |

##### `provide(Object)` (`org.codehaus.groovy.vmplugin.v8.IndyInterface$$Lambda.0x000000700108f680`)

| Change | Delta |             % | Samples | Caller                                          | Location                                            |
| -----: | ----: | ------------: | ------: | ----------------------------------------------- | --------------------------------------------------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `getAndPut(String, MemoizeCache$ValueProvider)` | `org.codehaus.groovy.vmplugin.v8.CacheableCallSite` |

##### `invoke(Object, int)` (`java.lang.invoke.LambdaForm$MH.0x0000007001031400`)

|  Change | Delta |              % | Samples | Caller                                      | Location                                            |
| ------: | ----: | -------------: | ------: | ------------------------------------------- | --------------------------------------------------- |
| +100.0% |    +1 | 100.0% → 40.0% |   1 → 2 | `collector(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001031800` |
|     new |    +1 |   0.0% → 20.0% |   0 → 1 | `collector(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000070010a1000` |
|     new |    +1 |   0.0% → 20.0% |   0 → 1 | `collector(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010d3c00` |
|     new |    +1 |   0.0% → 20.0% |   0 → 1 | `collector(Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070010c8c00` |

##### `getInCache(LambdaFormEditor$TransformKey)` (`java.lang.invoke.LambdaFormEditor`)

|  Change | Delta |            % | Samples | Caller                                       | Location                            |
| ------: | ----: | -----------: | ------: | -------------------------------------------- | ----------------------------------- |
|     new |    +6 | 0.0% → 66.7% |   0 → 6 | `addArgumentForm(int, LambdaForm$BasicType)` | `java.lang.invoke.LambdaFormEditor` |
| removed |    -3 | 60.0% → 0.0% |   3 → 0 | `collectArgumentsForm(int, MethodType)`      | `java.lang.invoke.LambdaFormEditor` |
|     new |    +1 | 0.0% → 11.1% |   0 → 1 | `bindArgumentForm(int)`                      | `java.lang.invoke.LambdaFormEditor` |

##### `sameClasses(Class[], Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyGuardsFiltersAndSignatures`)

| Change | Delta |      % | Samples | Caller                                 | Location                                     |
| -----: | ----: | -----: | ------: | -------------------------------------- | -------------------------------------------- |
| +80.0% |    +4 | 100.0% |   5 → 9 | `invokeStatic(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `getNoCheckStale(Object)` (`jdk.internal.util.ReferencedKeyMap`)

|  Change | Delta |      % | Samples | Caller        | Location                             |
| ------: | ----: | -----: | ------: | ------------- | ------------------------------------ |
| +400.0% |    +4 | 100.0% |   1 → 5 | `get(Object)` | `jdk.internal.util.ReferencedKeyMap` |

##### `next()` (`java.util.ArrayList$Itr`)

| Change | Delta |            % | Samples | Caller                          | Location                                         |
| -----: | ----: | -----------: | ------: | ------------------------------- | ------------------------------------------------ |
|    new |    +2 | 0.0% → 40.0% |   0 → 2 | `optimizeConfigs(ATNSimulator)` | `groovyjarjarantlr4.v4.runtime.atn.ATNConfigSet` |
|    new |    +1 | 0.0% → 20.0% |   0 → 1 | `next()`                        | `java.util.Collections$UnmodifiableCollection$1` |
|    new |    +1 | 0.0% → 20.0% |   0 → 1 | `applyTo(SourceCode, List)`     | `org.codenarc.rule.formatting.LineLengthRule`    |

##### `getReturnState(int)` (`groovyjarjarantlr4.v4.runtime.atn.ArrayPredictionContext`)

|  Change | Delta |      % | Samples | Caller                                                               | Location                                              |
| ------: | ----: | -----: | ------: | -------------------------------------------------------------------- | ----------------------------------------------------- |
| +400.0% |    +4 | 100.0% |   1 → 5 | `join(PredictionContext, PredictionContext, PredictionContextCache)` | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext` |

##### `makeReinvokerForm(MethodHandle, int, Object, boolean, LambdaForm$NamedFunction, LambdaForm$NamedFunction)` (`java.lang.invoke.DelegatingMethodHandle`)

|  Change | Delta |             % | Samples | Caller                                                                   | Location                                     |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------ | -------------------------------------------- |
| +300.0% |    +3 | 50.0% → 66.7% |   1 → 4 | `apply(MethodHandle)`                                                    | `java.lang.invoke.MethodHandleImpl$Makers$1` |
| +100.0% |    +1 | 50.0% → 33.3% |   1 → 2 | `makeReinvokerForm(MethodHandle, int, Object, LambdaForm$NamedFunction)` | `java.lang.invoke.DelegatingMethodHandle`    |

##### `<init>(MutableCallSite, Class, String, IndyInterface$CallType, Boolean, Boolean, Boolean, Object[])` (`org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector`)

| Change | Delta |            % | Samples | Caller                                                                                  | Location                                                |
| -----: | ----: | -----------: | ------: | --------------------------------------------------------------------------------------- | ------------------------------------------------------- |
|    new |    +3 | 0.0% → 75.0% |   0 → 3 | `getSelector(MutableCallSite, Class, String, int, boolean, boolean, boolean, Object[])` | `org.codehaus.groovy.vmplugin.v8.Selector`              |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `<init>(MutableCallSite, Object[])`                                                     | `org.codehaus.groovy.vmplugin.v8.Selector$CastSelector` |

##### `boxBoolean(boolean)` (`sun.invoke.util.ValueConversions`)

| Change | Delta |             % | Samples | Caller                      | Location                                     |
| -----: | ----: | ------------: | ------: | --------------------------- | -------------------------------------------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `invokeStatic(Object, int)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `setCallSiteTarget()` (`org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector`)

| Change | Delta |             % | Samples | Caller                                                                                       | Location                                        |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------- | ----------------------------------------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `fallback(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |

##### `getAstVisitor()` (`org.codenarc.rule.AbstractAstVisitorRule`)

| Change | Delta |             % | Samples | Caller                      | Location                                   |
| -----: | ----: | ------------: | ------: | --------------------------- | ------------------------------------------ |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractAstVisitorRule` |

##### `<init>()` (`org.codenarc.rule.AbstractAstVisitor`)

| Change | Delta |            % | Samples | Caller     | Location                                                                     |
| -----: | ----: | -----------: | ------: | ---------- | ---------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `<init>()` | `org.codenarc.rule.unnecessary.UnnecessaryObjectReferencesAstVisitor`        |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `<init>()` | `org.codenarc.rule.design.ReturnsNullInsteadOfEmptyCollectionRuleAstVisitor` |

##### `init()` (`org.codenarc.source.AbstractSourceCode`)

| Change | Delta |             % | Samples | Caller                          | Location                                     |
| -----: | ----: | ------------: | ------: | ------------------------------- | -------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `invokeSpecial(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`)

| Change | Delta |             % | Samples | Caller                                  | Location                                     |
| -----: | ----: | ------------: | ------: | --------------------------------------- | -------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `doCall(Object)` (`org.codenarc.source.AbstractSourceCode$_removeGrabTransformation_closure1$_closure3`)

| Change | Delta |             % | Samples | Caller                                  | Location                                     |
| -----: | ----: | ------------: | ------: | --------------------------------------- | -------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)

| Change | Delta |             % | Samples | Caller                                  | Location                                     |
| -----: | ----: | ------------: | ------: | --------------------------------------- | -------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `getLines()` (`org.codenarc.source.AbstractSourceCode`)

| Change | Delta |             % | Samples | Caller                          | Location                                     |
| -----: | ----: | ------------: | ------: | ------------------------------- | -------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `invokeVirtual(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `visitMethodComplete(MethodNode)` (`org.codenarc.rule.convention.StaticMethodsBeforeInstanceMethodsAstVisitor`)

| Change | Delta |             % | Samples | Caller                    | Location                               |
| -----: | ----: | ------------: | ------: | ------------------------- | -------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `visitMethod(MethodNode)` | `org.codenarc.rule.AbstractAstVisitor` |

##### `isNotAnInterface(ClassNode)` (`org.gmetrics.metric.AbstractMetric`)

| Change | Delta |             % | Samples | Caller                                  | Location                                             |
| -----: | ----: | ------------: | ------: | --------------------------------------- | ---------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `invokeVirtual(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001097c00` |

##### `calculateForClass(ClassNode, SourceCode)` (`org.gmetrics.metric.AbstractMethodMetric`)

| Change | Delta |             % | Samples | Caller                                          | Location                                             |
| -----: | ----: | ------------: | ------: | ----------------------------------------------- | ---------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `invokeVirtual(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001094400` |

##### `doCall(Object)` (`org.codenarc.rule.formatting.IndentationAstVisitor$_visitBlockStatement_closure7`)

| Change | Delta |             % | Samples | Caller                                  | Location                                     |
| -----: | ----: | ------------: | ------: | --------------------------------------- | -------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `visitMethodCallExpression(MethodCallExpression)` (`org.codenarc.rule.formatting.IndentationAstVisitor`)

| Change | Delta |             % | Samples | Caller                     | Location                                            |
| -----: | ----: | ------------: | ------: | -------------------------- | --------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `visit(GroovyCodeVisitor)` | `org.codehaus.groovy.ast.expr.MethodCallExpression` |

##### `processSourceLine(String, int)` (`org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor`)

| Change | Delta |             % | Samples | Caller                                       | Location                                             |
| -----: | ----: | ------------: | ------: | -------------------------------------------- | ---------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `invokeSpecial(Object, Object, Object, int)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001109800` |

##### `doCall(Object, Object)` (`org.codenarc.rule.unused.UnusedVariableAstVisitor$_afterBlock_closure2`)

| Change | Delta |             % | Samples | Caller                                          | Location                                     |
| -----: | ----: | ------------: | ------: | ----------------------------------------------- | -------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `invokeSpecial(Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.formatting.ConsecutiveBlankLinesRule`)

| Change | Delta |             % | Samples | Caller                | Location                         |
| -----: | ----: | ------------: | ------: | --------------------- | -------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `applyTo(SourceCode)` | `org.codenarc.rule.AbstractRule` |

##### `getMagnitude()` (`org.gmetrics.metric.abc.AbcVector`)

| Change | Delta |             % | Samples | Caller                          | Location                                     |
| -----: | ----: | ------------: | ------: | ------------------------------- | -------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `invokeVirtual(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `doCall(Object)` (`org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor$_processMethodOrConstructorCall_closure3`)

| Change | Delta |             % | Samples | Caller                                  | Location                                     |
| -----: | ----: | ------------: | ------: | --------------------------------------- | -------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `visitClosureExpression(ClosureExpression)` (`org.codenarc.rule.formatting.SpaceBeforeClosingBraceAstVisitor`)

| Change | Delta |             % | Samples | Caller                     | Location                                         |
| -----: | ----: | ------------: | ------: | -------------------------- | ------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `visit(GroovyCodeVisitor)` | `org.codehaus.groovy.ast.expr.ClosureExpression` |

##### `isValid()` (`org.codenarc.source.AbstractSourceCode`)

| Change | Delta |             % | Samples | Caller                      | Location                                         |
| -----: | ----: | ------------: | ------: | --------------------------- | ------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractSharedAstVisitorRule` |

##### `doCall(Object, Object)` (`org.codenarc.rule.formatting.TrailingWhitespaceRule$_applyTo_closure1`)

| Change | Delta |             % | Samples | Caller                                          | Location                                     |
| -----: | ----: | ------------: | ------: | ----------------------------------------------- | -------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `invokeSpecial(Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `zero_blocks` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                          | Location                          |
| ------: | ----: | ------------: | ------: | ------------------------------- | --------------------------------- |
|     new |    +2 |  0.0% → 28.6% |   0 → 2 | `resize()`                      | `java.util.HashMap`               |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `write(String, int, int)`       | `sun.nio.cs.StreamEncoder`        |
|     new |    +1 |  0.0% → 14.3% |   0 → 1 | `ensureCapacityInternal(int)`   | `java.lang.AbstractStringBuilder` |
|     new |    +1 |  0.0% → 14.3% |   0 → 1 | `newSlice(int[], int, boolean)` | `java.util.regex.Pattern`         |
|     new |    +1 |  0.0% → 14.3% |   0 → 1 | `<init>(Pattern, CharSequence)` | `java.util.regex.Matcher`         |

##### `I2C/C2I adapters(0xbbb)` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                                   | Location                                            |
| ------: | ----: | -----------: | ------: | ---------------------------------------- | --------------------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `invokeExact_MT(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
|     new |    +1 | 0.0% → 14.3% |   0 → 1 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000007001783400` |

##### `vtable stub` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                                            | Location                                          |
| ------: | ----: | -----------: | ------: | ------------------------------------------------- | ------------------------------------------------- |
| removed |    -1 | 12.5% → 0.0% |   1 → 0 | `getAnnotation(AnnotatedNode, String)`            | `org.codenarc.util.AstUtil`                       |
| removed |    -1 | 12.5% → 0.0% |   1 → 0 | `visitClass(ClassNode)`                           | `org.codehaus.groovy.ast.ClassCodeVisitorSupport` |
| removed |    -1 | 12.5% → 0.0% |   1 → 0 | `bindArgumentL(BoundMethodHandle, int, Object)`   | `java.lang.invoke.LambdaFormEditor`               |
| removed |    -1 | 12.5% → 0.0% |   1 → 0 | `visitConstructorOrMethod(MethodNode, boolean)`   | `org.codehaus.groovy.ast.ClassCodeVisitorSupport` |
| removed |    -1 | 12.5% → 0.0% |   1 → 0 | `visitMethodCallExpression(MethodCallExpression)` | `org.codehaus.groovy.ast.CodeVisitorSupport`      |

##### `I2C/C2I adapters(0x)` (`<unknown>`)

| Change | Delta |             % | Samples | Caller     | Location                                  |
| -----: | ----: | ------------: | ------: | ---------- | ----------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `<init>()` | `org.gmetrics.result.MetricResultBuilder` |

##### `IndexSetIterator::advance_and_next` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                             | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------- | -------------- |
|  -66.7% |    -6 |  12.5% → 5.5% |   9 → 3 | `PhaseChaitin::Select`             | `libjvm.dylib` |
|  -54.5% |    -6 |  15.3% → 9.1% |  11 → 5 | `PhaseIFG::effective_degree`       | `libjvm.dylib` |
|  -35.7% |    -5 | 19.4% → 16.4% |  14 → 9 | `PhaseChaitin::build_ifg_physical` | `libjvm.dylib` |
| removed |    -3 |   4.2% → 0.0% |   3 → 0 | `PhaseChaitin::build_ifg_virtual`  | `libjvm.dylib` |
|  +50.0% |    +3 |  8.3% → 16.4% |   6 → 9 | `PhaseLive::add_liveout`           | `libjvm.dylib` |

##### `frame::sender_for_compiled_frame` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller                                     | Location       |
| ------: | ----: | -------------: | ------: | ------------------------------------------ | -------------- |
|  -58.3% |   -14 | 96.0% → 100.0% | 24 → 10 | `java_lang_Throwable::fill_in_stack_trace` | `libjvm.dylib` |
| removed |    -1 |    4.0% → 0.0% |   1 → 0 | `JVM_GetCallerClass`                       | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                               | Location       |
| -----: | ----: | -----: | ------: | ------------------------------------ | -------------- |
| -36.8% |   -14 | 100.0% | 38 → 24 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `ciObjectFactory::get_metadata` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                           | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------- | -------------- |
| +100.0% |    +5 | 11.4% → 32.3% |  5 → 10 | `ciBytecodeStream::get_method`   | `libjvm.dylib` |
|  -44.4% |    -4 | 20.5% → 16.1% |   9 → 5 | `ciEnv::get_klass_by_index_impl` | `libjvm.dylib` |
|  -75.0% |    -3 |   9.1% → 3.2% |   4 → 1 | `ciMethodHandle::get_vmtarget`   | `libjvm.dylib` |
|  -60.0% |    -3 |  11.4% → 6.5% |   5 → 2 | `ciObjectFactory::get`           | `libjvm.dylib` |
|  -40.0% |    -2 |  11.4% → 9.7% |   5 → 3 | `ciMethod::method_data`          | `libjvm.dylib` |

##### `itable stub` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                             | Location                                              |
| ------: | ----: | ------------: | ------: | ---------------------------------- | ----------------------------------------------------- |
|  -66.7% |    -4 | 26.1% → 20.0% |   6 → 2 | `copyInto(Sink, Spliterator)`      | `java.util.stream.AbstractPipeline`                   |
| removed |    -2 |   8.7% → 0.0% |   2 → 0 | `accept(Object)`                   | `java.util.stream.ReferencePipeline$3$1`              |
| removed |    -2 |   8.7% → 0.0% |   2 → 0 | `visit(GroovyCodeVisitor)`         | `org.codehaus.groovy.ast.expr.ArgumentListExpression` |
| removed |    -2 |   8.7% → 0.0% |   2 → 0 | `<init>(long, IntFunction)`        | `java.util.stream.Nodes$ArrayNode`                    |
| removed |    -1 |   4.3% → 0.0% |   1 → 0 | `visitMethods(GroovyClassVisitor)` | `org.codehaus.groovy.ast.ClassNode`                   |

##### `Node::set_req_X` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                | Location       |
| ------: | ----: | ------------: | ------: | --------------------- | -------------- |
|  -32.1% |    -9 | 87.5% → 90.5% | 28 → 19 | `Node::replace_edge`  | `libjvm.dylib` |
| removed |    -2 |   6.3% → 0.0% |   2 → 0 | `MergeMemNode::Ideal` | `libjvm.dylib` |
| removed |    -1 |   3.1% → 0.0% |   1 → 0 | `AddNode::Ideal`      | `libjvm.dylib` |
|     new |    +1 |   0.0% → 4.8% |   0 → 1 | `PhiNode::Ideal`      | `libjvm.dylib` |

##### `LinearScanWalker::free_collect_inactive_fixed` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                             | Location       |
| -----: | ----: | -----: | ------: | ---------------------------------- | -------------- |
| -64.7% |   -11 | 100.0% |  17 → 6 | `LinearScanWalker::alloc_free_reg` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late_post_work` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                               | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------ | -------------- |
| -24.2% |    -8 | 91.7% → 96.2% | 33 → 25 | `PhaseIdealLoop::build_loop_late`    | `libjvm.dylib` |
| -66.7% |    -2 |   8.3% → 3.8% |   3 → 1 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `IntervalWalker::walk_to` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                        | Location       |
| -----: | ----: | ------------: | ------: | ----------------------------- | -------------- |
| -34.6% |    -9 | 86.7% → 85.0% | 26 → 17 | `IntervalWalker::walk_to`     | `libjvm.dylib` |
| -50.0% |    -1 |   6.7% → 5.0% |   2 → 1 | `LinearScan::compute_oop_map` | `libjvm.dylib` |

##### `getNode(Object)` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Caller                | Location                  |
| ------: | ----: | ------------: | ------: | --------------------- | ------------------------- |
|  -35.0% |    -7 | 76.9% → 81.3% | 20 → 13 | `get(Object)`         | `java.util.LinkedHashMap` |
|  -40.0% |    -2 | 19.2% → 18.8% |   5 → 3 | `get(Object)`         | `java.util.HashMap`       |
| removed |    -1 |   3.8% → 0.0% |   1 → 0 | `containsKey(Object)` | `java.util.HashMap`       |

##### `ClassLoaderDataGraphKlassIteratorAtomic::next_klass` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                    | Location       |
| ------: | ----: | ------------: | ------: | ------------------------- | -------------- |
| removed |    -9 | 100.0% → 0.0% |   9 → 0 | `KlassCleaningTask::work` | `libjvm.dylib` |

##### `JNIHandleBlock::allocate_handle` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller                 | Location                  |
| ------: | ----: | -------------: | ------: | ---------------------- | ------------------------- |
| removed |    -6 |   54.5% → 0.0% |   6 → 0 | `newArray(Class, int)` | `java.lang.reflect.Array` |
|  -50.0% |    -2 | 36.4% → 100.0% |   4 → 2 | `JVM_NewArray`         | `libjvm.dylib`            |
| removed |    -1 |    9.1% → 0.0% |   1 → 0 | `initClassName()`      | `java.lang.Class`         |

##### `newInstance(Class, int)` (`java.lang.reflect.Array`)

| Change | Delta |      % | Samples | Caller                              | Location                                             |
| -----: | ----: | -----: | ------: | ----------------------------------- | ---------------------------------------------------- |
| -13.8% |    -9 | 100.0% | 65 → 56 | `invokeStatic(Object, Object, int)` | `java.lang.invoke.LambdaForm$DMH.0x000000700102b400` |

##### `frame::sender_raw` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                                     | Location       |
| -----: | ----: | -----: | ------: | ------------------------------------------ | -------------- |
| -64.3% |    -9 | 100.0% |  14 → 5 | `java_lang_Throwable::fill_in_stack_trace` | `libjvm.dylib` |

##### `vmSymbols::find_sid` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                        | Location       |
| -----: | ----: | ------------: | ------: | ----------------------------- | -------------- |
| -32.0% |    -8 | 96.2% → 94.4% | 25 → 17 | `ciObjectFactory::get_symbol` | `libjvm.dylib` |

##### `Node::disconnect_inputs` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                       | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------------------- | -------------- |
|  -71.4% |    -5 | 53.8% → 40.0% |   7 → 2 | `Parse::do_one_block`                        | `libjvm.dylib` |
|  -50.0% |    -2 | 30.8% → 40.0% |   4 → 2 | `PhaseChaitin::build_ifg_physical`           | `libjvm.dylib` |
| removed |    -1 |   7.7% → 0.0% |   1 → 0 | `Compile::final_graph_reshaping_main_switch` | `libjvm.dylib` |

##### `PhaseCCP::push_cmpu` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                                   | Location       |
| ------: | ----: | -----------: | ------: | ---------------------------------------- | -------------- |
| removed |    -4 | 57.1% → 0.0% |   4 → 0 | `PhaseCCP::push_more_uses`               | `libjvm.dylib` |
| removed |    -3 | 42.9% → 0.0% |   3 → 0 | `PhaseCCP::push_child_nodes_to_worklist` | `libjvm.dylib` |

##### `PhiNode::Ideal` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                           | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------- | -------------- |
|  -87.5% |    -7 | 88.9% → 50.0% |   8 → 1 | `PhaseIterGVN::transform_old`    | `libjvm.dylib` |
| removed |    -1 |  11.1% → 0.0% |   1 → 0 | `PhaseGVN::transform_no_reclaim` | `libjvm.dylib` |
|     new |    +1 |  0.0% → 50.0% |   0 → 1 | `PhaseIterGVN::optimize`         | `libjvm.dylib` |

##### `G1CardSet::add_to_howl` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                | Location       |
| -----: | ----: | -----: | ------: | --------------------- | -------------- |
| -46.7% |    -7 | 100.0% |  15 → 8 | `G1CardSet::add_card` | `libjvm.dylib` |

##### `inflate_fast` (`libzip.dylib`)

|  Change | Delta |             % | Samples | Caller                                          | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------------------------- | -------------- |
| removed |    -7 | 100.0% → 0.0% |   7 → 0 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `libzip.dylib` |

##### `TypeInstPtr::hash` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                        | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------- | -------------- |
| removed |    -3 |  37.5% → 0.0% |   3 → 0 | `Type::hashcons`              | `libjvm.dylib` |
| removed |    -2 |  25.0% → 0.0% |   2 → 0 | `Dict::doubhash`              | `libjvm.dylib` |
|  -50.0% |    -1 | 25.0% → 50.0% |   2 → 1 | `Dict::Insert`                | `libjvm.dylib` |
| removed |    -1 |  12.5% → 0.0% |   1 → 0 | `TypeNode::hash`              | `libjvm.dylib` |
|     new |    +1 |  0.0% → 50.0% |   0 → 1 | `PhaseIterGVN::transform_old` | `libjvm.dylib` |

##### `Node::add_req` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                               | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------ | -------------- |
|     new |    +2 |  0.0% → 22.2% |   0 → 2 | `PhaseChaitin::get_spillcopy_wide`   | `libjvm.dylib` |
| removed |    -1 |   6.7% → 0.0% |   1 → 0 | `Node::ins_req`                      | `libjvm.dylib` |
|  -33.3% |    -1 | 20.0% → 22.2% |   3 → 2 | `MergeMemNode::iteration_setup`      | `libjvm.dylib` |
| removed |    -1 |   6.7% → 0.0% |   1 → 0 | `Parse::return_current`              | `libjvm.dylib` |
| removed |    -1 |   6.7% → 0.0% |   1 → 0 | `CallJavaNode::copy_call_debug_info` | `libjvm.dylib` |

##### `Matcher::find_shared` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller           | Location       |
| -----: | ----: | -----: | ------: | ---------------- | -------------- |
| -50.0% |    -5 | 100.0% |  10 → 5 | `Matcher::match` | `libjvm.dylib` |

##### `PhaseIterGVN::subsume_node` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                          | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------------------------- | -------------- |
|  -35.3% |    -6 | 94.4% → 84.6% | 17 → 11 | `PhaseIterGVN::transform_old`                   | `libjvm.dylib` |
| removed |    -1 |   5.6% → 0.0% |   1 → 0 | `PhaseIdealLoop::do_split_if`                   | `libjvm.dylib` |
|     new |    +1 |   0.0% → 7.7% |   0 → 1 | `PhaseMacroExpand::process_users_of_allocation` | `libjvm.dylib` |
|     new |    +1 |   0.0% → 7.7% |   0 → 1 | `PhaseMacroExpand::expand_subtypecheck_node`    | `libjvm.dylib` |

##### `NodeHash::hash_find_insert` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                           | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------- | -------------- |
|  -42.9% |    -3 | 29.2% → 21.1% |   7 → 4 | `PhaseGVN::transform_no_reclaim` | `libjvm.dylib` |
|  -13.3% |    -2 | 62.5% → 68.4% | 15 → 13 | `PhaseIterGVN::transform_old`    | `libjvm.dylib` |
| removed |    -1 |   4.2% → 0.0% |   1 → 0 | `find_or_make_convI2L`           | `libjvm.dylib` |
|     new |    +1 |   0.0% → 5.3% |   0 → 1 | `PhaseValues::uncached_makecon`  | `libjvm.dylib` |
| removed |    -1 |   4.2% → 0.0% |   1 → 0 | `PhaseIterGVN::optimize`         | `libjvm.dylib` |

##### `PhaseIterGVN::remove_globally_dead_node` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                           | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------- | -------------- |
|  -83.3% |    -5 | 75.0% → 33.3% |   6 → 1 | `PhaseIterGVN::subsume_node`     | `libjvm.dylib` |
| removed |    -2 |  25.0% → 0.0% |   2 → 0 | `PhaseIterGVN::optimize`         | `libjvm.dylib` |
|     new |    +2 |  0.0% → 66.7% |   0 → 2 | `PhaseIdealLoop::split_thru_phi` | `libjvm.dylib` |

##### `ProjNode::Value` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                           | Location       |
| ------: | ----: | -----------: | ------: | -------------------------------- | -------------- |
| removed |    -2 | 40.0% → 0.0% |   2 → 0 | `PhaseIterGVN::transform_old`    | `libjvm.dylib` |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `PhaseCCP::analyze`              | `libjvm.dylib` |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `PhaseGVN::transform_no_reclaim` | `libjvm.dylib` |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `PhaseCCP::PhaseCCP`             | `libjvm.dylib` |

##### `Node::Node` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                       | Location       |
| ------: | ----: | -----------: | ------: | ---------------------------- | -------------- |
| removed |    -2 | 20.0% → 0.0% |   2 → 0 | `MergeMemNode::MergeMemNode` | `libjvm.dylib` |
| removed |    -1 | 10.0% → 0.0% |   1 → 0 | `IdealKit::CmpL`             | `libjvm.dylib` |
| removed |    -1 | 10.0% → 0.0% |   1 → 0 | `PhaseChaitin::split_USE`    | `libjvm.dylib` |
| removed |    -1 | 10.0% → 0.0% |   1 → 0 | `Parse::do_exits`            | `libjvm.dylib` |
| removed |    -1 | 10.0% → 0.0% |   1 → 0 | `CmpINode::Ideal`            | `libjvm.dylib` |

##### `TypeInstPtr::eq` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller      | Location       |
| -----: | ----: | ------------: | ------: | ----------- | -------------- |
| -83.3% |    -5 | 85.7% → 50.0% |   6 → 1 | `Type::cmp` | `libjvm.dylib` |

##### `LinearScanWalker::split_before_usage` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                       | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------------------- | -------------- |
|  -75.0% |    -3 | 44.4% → 25.0% |   4 → 1 | `LinearScanWalker::alloc_free_reg`           | `libjvm.dylib` |
|  -25.0% |    -1 | 44.4% → 75.0% |   4 → 3 | `LinearScanWalker::split_and_spill_interval` | `libjvm.dylib` |
| removed |    -1 |  11.1% → 0.0% |   1 → 0 | `LinearScanWalker::activate_current`         | `libjvm.dylib` |

##### `AccessInternal::PostRuntimeDispatch<G1BarrierSet::AccessBarrier<2383974ull, G1BarrierSet>, (AccessInternal::BarrierType)1, 2383974ull>::oop_access_barrier` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                     | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------------ | -------------- |
| -71.4% |    -5 | 77.8% → 66.7% |   7 → 2 | `BacktraceBuilder::push`                   | `libjvm.dylib` |
| -50.0% |    -1 | 22.2% → 33.3% |   2 → 1 | `java_lang_Throwable::fill_in_stack_trace` | `libjvm.dylib` |

##### `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                             | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------------------------- | -------------- |
|  -28.6% |    -4 | 26.4% → 20.8% | 14 → 10 | `DebugInformationRecorder::serialize_scope_values` | `libjvm.dylib` |
| removed |    -1 |   1.9% → 0.0% |   1 → 0 | `NonSafepointEmitter::emit_non_safepoint`          | `libjvm.dylib` |

##### `_platform_memset` (`libsystem_platform.dylib`)

|  Change | Delta |            % | Samples | Caller                             | Location       |
| ------: | ----: | -----------: | ------: | ---------------------------------- | -------------- |
| removed |    -3 |  8.3% → 0.0% |   3 → 0 | `Matcher::match_tree`              | `libjvm.dylib` |
|  +66.7% |    +2 | 8.3% → 16.1% |   3 → 5 | `MemAllocator::allocate`           | `libjvm.dylib` |
|     new |    +2 |  0.0% → 6.5% |   0 → 2 | `GraphBuilder::iterate_all_blocks` | `libjvm.dylib` |
|     new |    +2 |  0.0% → 6.5% |   0 → 2 | `PhaseIdealLoop::PhaseIdealLoop`   | `libjvm.dylib` |
|     new |    +2 |  0.0% → 6.5% |   0 → 2 | `Compile::Optimize`                | `libjvm.dylib` |

##### `Dict::doubhash` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller         | Location       |
| -----: | ----: | -----: | ------: | -------------- | -------------- |
| -83.3% |    -5 | 100.0% |   6 → 1 | `Dict::Insert` | `libjvm.dylib` |

##### `resource_allocate_bytes` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                     | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------ | -------------- |
| removed |    -2 |  15.4% → 0.0% |   2 → 0 | `BlockListBuilder::make_block_at`          | `libjvm.dylib` |
| removed |    -1 |   7.7% → 0.0% |   1 → 0 | `PhaseBlockLayout::find_edges`             | `libjvm.dylib` |
|  -50.0% |    -1 | 15.4% → 12.5% |   2 → 1 | `PhaseOutput::Process_OopMap_Node`         | `libjvm.dylib` |
| removed |    -1 |   7.7% → 0.0% |   1 → 0 | `BlockListBuilder::set_leaders`            | `libjvm.dylib` |
| removed |    -1 |   7.7% → 0.0% |   1 → 0 | `LinearScan::compute_debug_info_for_scope` | `libjvm.dylib` |

##### `Dictionary::find` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                                       | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------ | -------------- |
|  -50.0% |    -3 | 54.5% → 50.0% |   6 → 3 | `SystemDictionary::find_constrained_instance_or_array_klass` | `libjvm.dylib` |
| removed |    -1 |   9.1% → 0.0% |   1 → 0 | `ConstantPool::klass_at_if_loaded`                           | `libjvm.dylib` |
|  -33.3% |    -1 | 27.3% → 33.3% |   3 → 2 | `SystemDictionary::resolve_instance_class_or_null`           | `libjvm.dylib` |
| removed |    -1 |   9.1% → 0.0% |   1 → 0 | `SystemDictionary::resolve_or_fail`                          | `libjvm.dylib` |
|     new |    +1 |  0.0% → 16.7% |   0 → 1 | `SystemDictionary::find_instance_or_array_klass`             | `libjvm.dylib` |

##### `G1CodeRootSet::add` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller             | Location       |
| -----: | ----: | -----: | ------: | ------------------ | -------------- |
| -83.3% |    -5 | 100.0% |   6 → 1 | `nmethod::oops_do` | `libjvm.dylib` |

##### `semaphore_wait_trap` (`libsystem_kernel.dylib`)

| Change | Delta |      % | Samples | Caller              | Location       |
| -----: | ----: | -----: | ------: | ------------------- | -------------- |
| -62.5% |    -5 | 100.0% |   8 → 3 | `WorkerThread::run` | `libjvm.dylib` |

##### `PcDescContainer::find_pc_desc_internal` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller                                     | Location       |
| ------: | ----: | -------------: | ------: | ------------------------------------------ | -------------- |
|  -75.0% |    -3 | 66.7% → 100.0% |   4 → 1 | `java_lang_Throwable::fill_in_stack_trace` | `libjvm.dylib` |
| removed |    -2 |   33.3% → 0.0% |   2 → 0 | `vframeStreamCommon::fill_from_frame`      | `libjvm.dylib` |

##### `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller                                         | Location       |
| ------: | ----: | -------------: | ------: | ---------------------------------------------- | -------------- |
|  -15.8% |    -3 | 95.0% → 100.0% | 19 → 16 | `void G1CMTask::process_grey_task_entry<true>` | `libjvm.dylib` |
| removed |    -1 |    5.0% → 0.0% |   1 → 0 | `G1CMBitMap::iterate`                          | `libjvm.dylib` |

##### `nmethod::is_unloading` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                       | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------------------- | -------------- |
|  -50.0% |    -2 | 44.4% → 40.0% |   4 → 2 | `DependencyContext::add_dependent_nmethod`   | `libjvm.dylib` |
| removed |    -2 |  22.2% → 0.0% |   2 → 0 | `CompiledMethod::cleanup_inline_caches_impl` | `libjvm.dylib` |

##### `pthread_mutex_unlock` (`libsystem_pthread.dylib`)

|  Change | Delta |             % | Samples | Caller                                        | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------------------- | -------------- |
|  -66.7% |    -2 |         50.0% |   3 → 1 | `CodeCache::make_marked_nmethods_deoptimized` | `libjvm.dylib` |
|  -50.0% |    -1 | 33.3% → 50.0% |   2 → 1 | `ThreadCritical::~ThreadCritical`             | `libjvm.dylib` |
| removed |    -1 |  16.7% → 0.0% |   1 → 0 | `ciMethod::ciMethod`                          | `libjvm.dylib` |

##### `read` (`libsystem_kernel.dylib`)

| Change | Delta |      % | Samples | Caller      | Location        |
| -----: | ----: | -----: | ------: | ----------- | --------------- |
| -80.0% |    -4 | 100.0% |   5 → 1 | `readBytes` | `libjava.dylib` |

##### `invokeSpecial(Object, Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|  Change | Delta |             % | Samples | Caller                           | Location                                            |
| ------: | ----: | ------------: | ------: | -------------------------------- | --------------------------------------------------- |
|  -83.3% |    -5 | 66.7% → 50.0% |   6 → 1 | `invoke(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000700102ac00` |
| removed |    -1 |  11.1% → 0.0% |   1 → 0 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001390800` |
| removed |    -1 |  11.1% → 0.0% |   1 → 0 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001501000` |
|     new |    +1 |  0.0% → 50.0% |   0 → 1 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070018a1c00` |
| removed |    -1 |  11.1% → 0.0% |   1 → 0 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000700190f800` |

##### `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` (`groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`)

| Change | Delta |             % | Samples | Caller                                                                                                        | Location                                               |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| -66.7% |    -6 | 81.8% → 75.0% |   9 → 3 | `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |
| -50.0% |    -1 | 18.2% → 25.0% |   2 → 1 | `closure(ATNConfigSet, ATNConfigSet, boolean, boolean, PredictionContextCache, boolean)`                      | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |

##### `getExactSizeIfKnown()` (`java.util.Spliterator`)

|  Change | Delta |             % | Samples | Caller                                  | Location                            |
| ------: | ----: | ------------: | ------: | --------------------------------------- | ----------------------------------- |
| removed |    -7 | 100.0% → 0.0% |   7 → 0 | `copyIntoWithCancel(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `copyInto(Sink, Spliterator)`           | `java.util.stream.AbstractPipeline` |

##### `collector(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010d3c00`)

|  Change | Delta |            % | Samples | Caller                                   | Location                                            |
| ------: | ----: | -----------: | ------: | ---------------------------------------- | --------------------------------------------------- |
| removed |    -6 | 60.0% → 0.0% |   6 → 0 | `invoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010d5c00` |
| removed |    -3 | 30.0% → 0.0% |   3 → 0 | `invoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070011c8800` |
|     new |    +2 | 0.0% → 50.0% |   0 → 2 | `invoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001189400` |
| removed |    -1 | 10.0% → 0.0% |   1 → 0 | `invoke(Object, Object, Object, long)`   | `java.lang.invoke.LambdaForm$MH.0x0000007001353400` |
|     new |    +1 | 0.0% → 25.0% |   0 → 1 | `invoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001630800` |

##### `cast(Object)` (`java.lang.Class`)

|  Change | Delta |              % |   Samples | Caller                                                 | Location                                                      |
| ------: | ----: | -------------: | --------: | ------------------------------------------------------ | ------------------------------------------------------------- |
|   -3.7% |    -4 | 99.1% → 100.0% | 107 → 103 | `invokeSpecial(Object, Object, Object)`                | `java.lang.invoke.DirectMethodHandle$Holder`                  |
| removed |    -1 |    0.9% → 0.0% |     1 → 0 | `weakCompareAndSet(VarHandle, Object, Object, Object)` | `java.lang.invoke.VarHandleReferences$FieldInstanceReadWrite` |

##### `checkCustomized(MethodHandle)` (`java.lang.invoke.Invokers`)

|  Change | Delta |             % | Samples | Caller                                        | Location                                            |
| ------: | ----: | ------------: | ------: | --------------------------------------------- | --------------------------------------------------- |
|  -80.0% |    -4 | 45.5% → 16.7% |   5 → 1 | `invokeExact_MT(Object, Object, Object)`      | `java.lang.invoke.Invokers$Holder`                  |
| removed |    -1 |   9.1% → 0.0% |   1 → 0 | `invoke(Object, Object, Object, Object, int)` | `java.lang.invoke.LambdaForm$MH.0x000000700137fc00` |
| removed |    -1 |   9.1% → 0.0% |   1 → 0 | `invoke(Object, Object, Object, Object)`      | `java.lang.invoke.LambdaForm$MH.0x00000070011c8400` |
|     new |    +1 |  0.0% → 16.7% |   0 → 1 | `invoke(Object, Object, int)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070010d1000` |

##### `newArray(Class, int)` (`java.lang.reflect.Array`)

| Change | Delta |      % | Samples | Caller                    | Location                  |
| -----: | ----: | -----: | ------: | ------------------------- | ------------------------- |
| -83.3% |    -5 | 100.0% |   6 → 1 | `newInstance(Class, int)` | `java.lang.reflect.Array` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700109a400`)

|  Change | Delta |              % | Samples | Caller                   | Location                                            |
| ------: | ----: | -------------: | ------: | ------------------------ | --------------------------------------------------- |
|  -50.0% |    -3 | 75.0% → 100.0% |   6 → 3 | `guard(Object, Object)`  | `java.lang.invoke.LambdaForm$MH.0x000000700109a000` |
| removed |    -1 |   12.5% → 0.0% |   1 → 0 | `guard(Object, Object)`  | `java.lang.invoke.LambdaForm$MH.0x00000070010ca800` |
| removed |    -1 |   12.5% → 0.0% |   1 → 0 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000700109ac00` |

##### `<init>(MethodType, LambdaForm)` (`java.lang.invoke.MethodHandle`)

|  Change | Delta |              % | Samples | Caller                                                | Location                                  |
| ------: | ----: | -------------: | ------: | ----------------------------------------------------- | ----------------------------------------- |
| removed |    -2 |    7.7% → 0.0% |   2 → 0 | `<init>(MethodType, LambdaForm)`                      | `java.lang.invoke.DelegatingMethodHandle` |
|   -4.3% |    -1 | 88.5% → 100.0% | 23 → 22 | `<init>(MethodType, LambdaForm)`                      | `java.lang.invoke.BoundMethodHandle`      |
| removed |    -1 |    3.8% → 0.0% |   1 → 0 | `<init>(MethodType, LambdaForm, MemberName, boolean)` | `java.lang.invoke.DirectMethodHandle`     |

##### `visit(GroovyCodeVisitor)` (`org.codehaus.groovy.ast.expr.VariableExpression`)

|  Change | Delta |            % | Samples | Caller                                            | Location                                     |
| ------: | ----: | -----------: | ------: | ------------------------------------------------- | -------------------------------------------- |
| removed |    -2 | 50.0% → 0.0% |   2 → 0 | `visitBinaryExpression(BinaryExpression)`         | `org.codehaus.groovy.ast.CodeVisitorSupport` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `visitListOfExpressions(List)`                    | `org.codehaus.groovy.ast.GroovyCodeVisitor`  |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `visitMethodCallExpression(MethodCallExpression)` | `org.codehaus.groovy.ast.CodeVisitorSupport` |

##### `getWeakMetaClass()` (`org.codehaus.groovy.reflection.ClassInfo`)

| Change | Delta |      % | Samples | Caller                   | Location                                   |
| -----: | ----: | -----: | ------: | ------------------------ | ------------------------------------------ |
| -57.1% |    -4 | 100.0% |   7 → 3 | `getMetaClassForClass()` | `org.codehaus.groovy.reflection.ClassInfo` |

##### `resize()` (`java.util.HashMap`)

| Change | Delta |      % | Samples | Caller                                          | Location            |
| -----: | ----: | -----: | ------: | ----------------------------------------------- | ------------------- |
| -57.1% |    -4 | 100.0% |   7 → 3 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `map(Function)` (`java.util.stream.ReferencePipeline`)

|  Change | Delta |             % | Samples | Caller              | Location                                                  |
| ------: | ----: | ------------: | ------: | ------------------- | --------------------------------------------------------- |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | `setGuards(Object)` | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |

##### `getMethods(Class, String)` (`org.codehaus.groovy.runtime.metaclass.MetaMethodIndex`)

|  Change | Delta |              % | Samples | Caller                                                   | Location                    |
| ------: | ----: | -------------: | ------: | -------------------------------------------------------- | --------------------------- |
|  -42.9% |    -3 | 87.5% → 100.0% |   7 → 4 | `getMethodWithCaching(Class, String, Object[], boolean)` | `groovy.lang.MetaClassImpl` |
| removed |    -1 |   12.5% → 0.0% |   1 → 0 | `getStaticMethods(Class, String)`                        | `groovy.lang.MetaClassImpl` |

##### `forEachRemaining(Consumer)` (`java.util.Spliterators$ArraySpliterator`)

| Change | Delta |      % | Samples | Caller                        | Location                            |
| -----: | ----: | -----: | ------: | ----------------------------- | ----------------------------------- |
| -75.0% |    -3 | 100.0% |   4 → 1 | `copyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |

##### `makePairwiseConvertByEditor(MethodHandle, MethodType, boolean, boolean)` (`java.lang.invoke.MethodHandleImpl`)

| Change | Delta |      % | Samples | Caller                                                            | Location                            |
| -----: | ----: | -----: | ------: | ----------------------------------------------------------------- | ----------------------------------- |
| -33.3% |    -3 | 100.0% |   9 → 6 | `makePairwiseConvert(MethodHandle, MethodType, boolean, boolean)` | `java.lang.invoke.MethodHandleImpl` |

##### `getReachableConfigSet(CharStream, ATNConfigSet, ATNConfigSet, int)` (`groovyjarjarantlr4.v4.runtime.atn.LexerATNSimulator`)

|  Change | Delta |             % | Samples | Caller                                          | Location                                              |
| ------: | ----: | ------------: | ------: | ----------------------------------------------- | ----------------------------------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `computeTargetState(CharStream, DFAState, int)` | `groovyjarjarantlr4.v4.runtime.atn.LexerATNSimulator` |

##### `getSemanticContext()` (`groovyjarjarantlr4.v4.runtime.atn.ATNConfig`)

|  Change | Delta |            % | Samples | Caller                                            | Location                                      |
| ------: | ----: | -----------: | ------: | ------------------------------------------------- | --------------------------------------------- |
| removed |    -2 | 66.7% → 0.0% |   2 → 0 | `transform(ATNState, boolean)`                    | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `transform(ATNState, PredictionContext, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig` |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`)

|  Change | Delta |             % | Samples | Caller                | Location                         |
| ------: | ----: | ------------: | ------: | --------------------- | -------------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `applyTo(SourceCode)` | `org.codenarc.rule.AbstractRule` |

##### `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|  Change | Delta |             % | Samples | Caller                                          | Location                                             |
| ------: | ----: | ------------: | ------: | ----------------------------------------------- | ---------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `invokeVirtual(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001094400` |

##### `getRule()` (`org.codenarc.rule.Violation`)

|  Change | Delta |             % | Samples | Caller                          | Location                                     |
| ------: | ----: | ------------: | ------: | ------------------------------- | -------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `invokeVirtual(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `assertClassImplementsRuleInterface(Class)` (`org.codenarc.ruleset.RuleSetUtil`)

|  Change | Delta |             % | Samples | Caller                         | Location                                             |
| ------: | ----: | ------------: | ------: | ------------------------------ | ---------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000700102a000` |

##### `getMetaClass()` (`org.codenarc.ruleset.XmlReaderRuleSet`)

|  Change | Delta |             % | Samples | Caller                          | Location                                                 |
| ------: | ----: | ------------: | ------: | ------------------------------- | -------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `lookupObjectMetaClass(Object)` | `org.codehaus.groovy.runtime.metaclass.ClosureMetaClass` |

##### `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`)

|  Change | Delta |             % | Samples | Caller                                    | Location                                             |
| ------: | ----: | ------------: | ------: | ----------------------------------------- | ---------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `invokeInterface(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001094c00` |

##### `visitConstructorOrMethod(MethodNode, boolean)` (`org.codenarc.rule.ClassReferenceAstVisitor`)

|  Change | Delta |             % | Samples | Caller                    | Location                                          |
| ------: | ----: | ------------: | ------: | ------------------------- | ------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `visitMethod(MethodNode)` | `org.codehaus.groovy.ast.ClassCodeVisitorSupport` |

##### `$getStaticMetaClass()` (`org.codenarc.rule.unused.UnusedArrayAstVisitor`)

|  Change | Delta |             % | Samples | Caller     | Location                                                          |
| ------: | ----: | ------------: | ------: | ---------- | ----------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `<init>()` | `org.codenarc.rule.unused.AbstractLastStatementInBlockAstVisitor` |

##### `line(int)` (`org.codenarc.source.AbstractSourceCode`)

|  Change | Delta |             % | Samples | Caller                                 | Location                                             |
| ------: | ----: | ------------: | ------: | -------------------------------------- | ---------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `invokeInterface(Object, Object, int)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001355800` |

##### `isMatchingUniqueCall(Expression)` (`org.codenarc.rule.groovyism.AssignCollectionUniqueAstVisitor`)

|  Change | Delta |             % | Samples | Caller                                  | Location                                             |
| ------: | ----: | ------------: | ------: | --------------------------------------- | ---------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001030400` |

##### `addViolationIfDuplicate(Expression, boolean)` (`org.codenarc.rule.dry.DuplicateLiteralAstVisitor`)

| Change | Delta |      % | Samples | Caller                                | Location                                           |
| -----: | ----: | -----: | ------: | ------------------------------------- | -------------------------------------------------- |
| -50.0% |    -1 | 100.0% |   2 → 1 | `addViolationIfDuplicate(Expression)` | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor` |

##### `visitField(FieldNode)` (`org.codenarc.rule.design.OptionalFieldAstVisitor`)

|  Change | Delta |             % | Samples | Caller    | Location    |
| ------: | ----: | ------------: | ------: | --------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `unknown` | `<unknown>` |

##### `getRule()` (`org.codenarc.rule.AbstractAstVisitor`)

|  Change | Delta |             % | Samples | Caller                          | Location                                     |
| ------: | ----: | ------------: | ------: | ------------------------------- | -------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `invokeVirtual(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `lastSourceLine(ASTNode)` (`org.codenarc.rule.AbstractAstVisitor`)

|  Change | Delta |             % | Samples | Caller                                  | Location                                             |
| ------: | ----: | ------------: | ------: | --------------------------------------- | ---------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `invokeVirtual(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001095800` |

##### `doCall(Object)` (`org.codenarc.rule.groovyism.GroovyLangImmutableAstVisitor$_visitImports_closure2`)

|  Change | Delta |             % | Samples | Caller                                  | Location                                     |
| ------: | ----: | ------------: | ------: | --------------------------------------- | -------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `getMetaClass()` (`org.codenarc.rule.design.EmptyMethodInAbstractClassRule`)

|  Change | Delta |             % | Samples | Caller              | Location                                                  |
| ------: | ----: | ------------: | ------: | ------------------- | --------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `setGuards(Object)` | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |

##### `getMethodArguments(ASTNode)` (`org.codenarc.util.AstUtil`)

|  Change | Delta |             % | Samples | Caller                         | Location                                     |
| ------: | ----: | ------------: | ------: | ------------------------------ | -------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `invokeStatic(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `isMethodCallOnObject(Expression, String)` (`org.codenarc.util.AstUtil`)

|  Change | Delta |             % | Samples | Caller                                 | Location                                     |
| ------: | ----: | ------------: | ------: | -------------------------------------- | -------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `invokeStatic(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `getMetaClass()` (`org.codenarc.rule.convention.StaticMethodsBeforeInstanceMethodsRule`)

|  Change | Delta |             % | Samples | Caller                               | Location                                                         |
| ------: | ----: | ------------: | ------: | ------------------------------------ | ---------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `isSameMetaClass(MetaClass, Object)` | `org.codehaus.groovy.vmplugin.v8.IndyGuardsFiltersAndSignatures` |

##### `visitConstructorOrMethod(MethodNode, boolean)` (`org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor`)

|  Change | Delta |             % | Samples | Caller                    | Location                                          |
| ------: | ----: | ------------: | ------: | ------------------------- | ------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `visitMethod(MethodNode)` | `org.codehaus.groovy.ast.ClassCodeVisitorSupport` |

##### `I2C/C2I adapters(0xbb)` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                                                  | Location                                                         |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------- | ---------------------------------------------------------------- |
| removed |    -2 | 13.3% → 0.0% |   2 → 0 | `invokeExact_MT(Object, Object, Object)`                | `java.lang.invoke.Invokers$Holder`                               |
| removed |    -1 |  6.7% → 0.0% |   1 → 0 | `visitClassEx(ClassNode)`                               | `org.codenarc.rule.design.CloneableWithoutCloneAstVisitor`       |
| removed |    -1 |  6.7% → 0.0% |   1 → 0 | `isRegistered(Class)`                                   | `java.lang.ClassLoader$ParallelLoaders`                          |
| removed |    -1 |  6.7% → 0.0% |   1 → 0 | `<init>()`                                              | `org.codenarc.rule.groovyism.ExplicitCallToPlusMethodAstVisitor` |
| removed |    -1 |  6.7% → 0.0% |   1 → 0 | `invokeSpecial(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000070011c9400`             |

##### `I2C/C2I adapters(0xbab)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                 | Location                                         |
| ------: | ----: | ------------: | ------: | ---------------------- | ------------------------------------------------ |
| removed |    -1 |  33.3% → 0.0% |   1 → 0 | `createList(Object[])` | `org.codehaus.groovy.runtime.InvokerHelper`      |
| removed |    -1 |  33.3% → 0.0% |   1 → 0 | `<init>(TokenStream)`  | `org.apache.groovy.parser.antlr4.AbstractParser` |
| removed |    -1 |  33.3% → 0.0% |   1 → 0 | `stale_jmethodID`      | `<unknown>`                                      |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `applyTo(SourceCode)`  | `org.codenarc.rule.AbstractRule`                 |

##### `I2C/C2I adapters(0xbbaa)` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                                   | Location                                            |
| ------: | ----: | -----------: | ------: | ---------------------------------------- | --------------------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `collectViolations(SourceCode, RuleSet)` | `org.codenarc.analyzer.AbstractSourceAnalyzer`      |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070016fe000` |

##### `I2C/C2I adapters(0xbaa)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                           | Location           |
| ------: | ----: | ------------: | ------: | ------------------------------------------------ | ------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `newStringUTF8NoRepl(byte[], int, int, boolean)` | `java.lang.String` |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|     Change |  Delta |             % |       Samples | Function                                 | Location                                            |
| ---------: | -----: | ------------: | ------------: | ---------------------------------------- | --------------------------------------------------- |
|  +17491.7% | +2,099 |  0.2% → 34.4% |    12 → 2,111 | `invoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001182800` |
|  +60800.0% | +1,824 |  0.1% → 29.8% |     3 → 1,827 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000700159fc00` |
|  +36180.0% | +1,809 |  0.1% → 29.6% |     5 → 1,814 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070015a2800` |
|  +87800.0% | +1,756 | <0.1% → 28.7% |     2 → 1,758 | `invoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001268800` |
|    +369.8% | +1,749 |  8.1% → 36.2% |   473 → 2,222 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000070010c6400` |
|  +21812.5% | +1,745 |  0.1% → 28.6% |     8 → 1,753 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000700126a400` |
| +167600.0% | +1,676 | <0.1% → 27.3% |     1 → 1,677 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001638800` |
| +167600.0% | +1,676 | <0.1% → 27.3% |     1 → 1,677 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001639000` |
|   +9814.3% | +1,374 |  0.2% → 22.6% |    14 → 1,388 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000070010d4800` |
| +137200.0% | +1,372 | <0.1% → 22.4% |     1 → 1,373 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000007001365800` |
|  +13640.0% | +1,364 |  0.2% → 22.4% |    10 → 1,374 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070017c2400` |
|  +44533.3% | +1,336 |  0.1% → 21.8% |     3 → 1,339 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000700135b400` |
|   +1465.2% |   +674 |  0.8% → 11.7% |      46 → 720 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001291000` |
|  +28700.0% |   +574 |  <0.1% → 9.4% |       2 → 576 | `invoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001290c00` |
|    +225.0% |   +333 |   2.5% → 7.8% |     148 → 481 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000070010c7800` |
|      +8.5% |   +302 | 61.0% → 62.8% | 3,546 → 3,848 | `Thread::call_run`                       | `libjvm.dylib`                                      |
|      +8.5% |   +302 | 61.0% → 62.8% | 3,546 → 3,848 | `thread_native_entry`                    | `libjvm.dylib`                                      |
|      +8.5% |   +302 | 61.1% → 62.8% | 3,547 → 3,849 | `_pthread_start`                         | `libsystem_pthread.dylib`                           |
|      +8.5% |   +302 | 61.1% → 62.8% | 3,547 → 3,849 | `thread_start`                           | `libsystem_pthread.dylib`                           |
|  +25100.0% |   +251 |  <0.1% → 4.1% |       1 → 252 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001325400` |

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

|     Change |  Delta |             % |     Samples | Function                                 | Location                                            |
| ---------: | -----: | ------------: | ----------: | ---------------------------------------- | --------------------------------------------------- |
|  +17491.7% | +2,099 |  0.2% → 34.4% |  12 → 2,111 | `invoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001182800` |
|  +60800.0% | +1,824 |  0.1% → 29.8% |   3 → 1,827 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000700159fc00` |
|  +36180.0% | +1,809 |  0.1% → 29.6% |   5 → 1,814 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070015a2800` |
|  +87800.0% | +1,756 | <0.1% → 28.7% |   2 → 1,758 | `invoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001268800` |
|    +369.8% | +1,749 |  8.1% → 36.2% | 473 → 2,222 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000070010c6400` |
|  +21812.5% | +1,745 |  0.1% → 28.6% |   8 → 1,753 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000700126a400` |
| +167600.0% | +1,676 | <0.1% → 27.3% |   1 → 1,677 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001638800` |
| +167600.0% | +1,676 | <0.1% → 27.3% |   1 → 1,677 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001639000` |
|   +9814.3% | +1,374 |  0.2% → 22.6% |  14 → 1,388 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000070010d4800` |
| +137200.0% | +1,372 | <0.1% → 22.4% |   1 → 1,373 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000007001365800` |
|  +13640.0% | +1,364 |  0.2% → 22.4% |  10 → 1,374 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070017c2400` |
|  +44533.3% | +1,336 |  0.1% → 21.8% |   3 → 1,339 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000700135b400` |
|   +1465.2% |   +674 |  0.8% → 11.7% |    46 → 720 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001291000` |
|  +28700.0% |   +574 |  <0.1% → 9.4% |     2 → 576 | `invoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001290c00` |
|    +225.0% |   +333 |   2.5% → 7.8% |   148 → 481 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000070010c7800` |
|  +25100.0% |   +251 |  <0.1% → 4.1% |     1 → 252 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001325400` |
|   +2960.0% |   +148 |   0.1% → 2.5% |     5 → 153 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070017c3000` |
|  +12200.0% |   +122 |  <0.1% → 2.0% |     1 → 123 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001120400` |
|  +11900.0% |   +119 |  <0.1% → 2.0% |     1 → 120 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070017c7800` |
|    +600.0% |   +114 |   0.3% → 2.2% |    19 → 133 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000007001121800` |

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

|  Change |  Delta |             % |     Samples | Function                                 | Location                                            |
| ------: | -----: | ------------: | ----------: | ---------------------------------------- | --------------------------------------------------- |
|  -99.6% | -2,198 |  38.0% → 0.1% |   2,207 → 9 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000070010c6800` |
| -100.0% | -2,101 | 36.2% → <0.1% |   2,102 → 1 | `invoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070011ebc00` |
|  -99.8% | -1,818 | 31.3% → <0.1% |   1,821 → 3 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000007001451000` |
|  -99.1% | -1,788 |  31.1% → 0.3% |  1,804 → 16 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070014f1c00` |
|  -99.9% | -1,693 | 29.2% → <0.1% |   1,694 → 1 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001319400` |
|  -99.9% | -1,669 | 28.7% → <0.1% |   1,670 → 1 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001480c00` |
|  -99.5% | -1,661 |  28.7% → 0.1% |   1,670 → 9 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001625800` |
|  -96.9% | -1,623 |  28.8% → 0.8% |  1,675 → 52 | `invoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000700118b000` |
|  -99.9% | -1,361 | 23.5% → <0.1% |   1,363 → 2 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001615400` |
|  -88.0% | -1,182 |  23.1% → 2.6% | 1,343 → 161 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000070010c7400` |
|  -85.7% | -1,134 |  22.8% → 3.1% | 1,323 → 189 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000070012a4c00` |
|  -82.0% | -1,064 |  22.3% → 3.8% | 1,297 → 233 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000007001291800` |
|  -97.7% |   -559 |   9.8% → 0.2% |    572 → 13 | `invoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001326000` |
|  -86.4% |   -216 |   4.3% → 0.6% |    250 → 34 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001378800` |
|  -87.2% |   -211 |   4.2% → 0.5% |    242 → 31 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000007001181800` |
|  -96.8% |   -184 |   3.3% → 0.1% |     190 → 6 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000007001182400` |
|  -99.4% |   -167 |  2.9% → <0.1% |     168 → 1 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070017ebc00` |
|  -18.9% |   -136 |  12.4% → 9.5% |   719 → 583 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001290000` |
|  -95.3% |   -123 |   2.2% → 0.1% |     129 → 6 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000070010d9800` |
|  -98.3% |   -117 |  2.0% → <0.1% |     119 → 2 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001534c00` |

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

#### Callees

Callees with the largest change in contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `invoke(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001182800`)

|  Change |  Delta |             % |   Samples | Callee                                     | Location                                             |
| ------: | -----: | ------------: | --------: | ------------------------------------------ | ---------------------------------------------------- |
|     new | +2,111 | 0.0% → 100.0% | 0 → 2,111 | `invoke(Object, Object, Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x00000070010d3800`  |
| removed |    -11 |  91.7% → 0.0% |    11 → 0 | `invokeStatic(Object, Object, Object)`     | `java.lang.invoke.DirectMethodHandle$Holder`         |
| removed |     -1 |   8.3% → 0.0% |     1 → 0 | `invokeStaticInit(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001097800` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700159fc00`)

|    Change |  Delta |      % |   Samples | Callee                                  | Location                                     |
| --------: | -----: | -----: | --------: | --------------------------------------- | -------------------------------------------- |
| +60800.0% | +1,824 | 100.0% | 3 → 1,827 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070015a2800`)

|  Change |  Delta |             % |   Samples | Callee                                             | Location                                         |
| ------: | -----: | ------------: | --------: | -------------------------------------------------- | ------------------------------------------------ |
|     new | +1,814 | 0.0% → 100.0% | 0 → 1,814 | `delegate(Object, Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |
| removed |     -5 | 100.0% → 0.0% |     5 → 0 | `delegate(Object, Object, Object)`                 | `java.lang.invoke.DelegatingMethodHandle$Holder` |

##### `invoke(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001268800`)

|   Change |  Delta |             % |   Samples | Callee                                            | Location                                             |
| -------: | -----: | ------------: | --------: | ------------------------------------------------- | ---------------------------------------------------- |
|      new | +1,707 |  0.0% → 97.1% | 0 → 1,707 | `invokeVirtual(Object, Object, Object, Object)`   | `java.lang.invoke.LambdaForm$DMH.0x00000070011e1000` |
| +4500.0% |    +90 | 100.0% → 5.2% |    2 → 92 | `invokeSpecial(Object, Object, Object, Object)`   | `java.lang.invoke.DirectMethodHandle$Holder`         |
|      new |    +51 |   0.0% → 2.9% |    0 → 51 | `invokeInterface(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001268400` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010c6400`)

|  Change |  Delta |             % |   Samples | Callee                                  | Location                                             |
| ------: | -----: | ------------: | --------: | --------------------------------------- | ---------------------------------------------------- |
|     new | +2,222 | 0.0% → 100.0% | 0 → 2,222 | `invokeVirtual(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |
| removed |   -473 | 100.0% → 0.0% |   473 → 0 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |
| removed |     -4 |   0.8% → 0.0% |     4 → 0 | `invokeVirtual(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001095800` |
|     new |     +1 |  0.0% → <0.1% |     0 → 1 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001084000` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700126a400`)

|  Change |  Delta |             % |   Samples | Callee                                                                                      | Location                                             |
| ------: | -----: | ------------: | --------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|     new | +1,753 | 0.0% → 100.0% | 0 → 1,753 | `reinvoke(Object, Object, Object, Object)`                                                  | `java.lang.invoke.LambdaForm$MH.0x0000007001188800`  |
| removed |     -8 | 100.0% → 0.0% |     8 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |
|     new |     +4 |   0.0% → 0.2% |     0 → 4 | `delegate(Object, Object, Object, Object)`                                                  | `java.lang.invoke.DelegatingMethodHandle$Holder`     |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001638800`)

|  Change |  Delta |             % |   Samples | Callee                                     | Location                                         |
| ------: | -----: | ------------: | --------: | ------------------------------------------ | ------------------------------------------------ |
|     new | +1,677 | 0.0% → 100.0% | 0 → 1,677 | `delegate(Object, Object, Object)`         | `java.lang.invoke.DelegatingMethodHandle$Holder` |
| removed |     -1 | 100.0% → 0.0% |     1 → 0 | `delegate(Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001639000`)

|     Change |  Delta |      % |   Samples | Callee                                     | Location                                         |
| ---------: | -----: | -----: | --------: | ------------------------------------------ | ------------------------------------------------ |
| +167600.0% | +1,676 | 100.0% | 1 → 1,677 | `delegate(Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010d4800`)

|  Change |  Delta |            % |   Samples | Callee                                   | Location                                             |
| ------: | -----: | -----------: | --------: | ---------------------------------------- | ---------------------------------------------------- |
|     new | +1,387 | 0.0% → 99.9% | 0 → 1,387 | `invoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010d3800`  |
| removed |    -11 | 78.6% → 0.0% |    11 → 0 | `invokeVirtual(Object, Object, Object)`  | `java.lang.invoke.DirectMethodHandle$Holder`         |
| removed |     -2 | 14.3% → 0.0% |     2 → 0 | `invokeSpecial(Object, Object, Object)`  | `java.lang.invoke.LambdaForm$DMH.0x0000007001084000` |
|     new |     +1 |  0.0% → 0.1% |     0 → 1 | `collector(Object, Object)`              | `java.lang.invoke.LambdaForm$MH.0x0000007001031800`  |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001365800`)

|  Change |  Delta |             % |   Samples | Callee                                                                                      | Location                                             |
| ------: | -----: | ------------: | --------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|     new | +1,371 |  0.0% → 99.9% | 0 → 1,371 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |
| removed |     -1 | 100.0% → 0.0% |     1 → 0 | `invokeSpecial(Object, Object, Object, int, Object, Object)`                                | `java.lang.invoke.LambdaForm$DMH.0x0000007001396000` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070017c2400`)

|  Change |  Delta |             % |   Samples | Callee                                     | Location                                         |
| ------: | -----: | ------------: | --------: | ------------------------------------------ | ------------------------------------------------ |
|     new | +1,374 | 0.0% → 100.0% | 0 → 1,374 | `delegate(Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |
| removed |    -10 | 100.0% → 0.0% |    10 → 0 | `delegate(Object, Object, Object)`         | `java.lang.invoke.DelegatingMethodHandle$Holder` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700135b400`)

|    Change |  Delta |            % |   Samples | Callee                                  | Location                                             |
| --------: | -----: | -----------: | --------: | --------------------------------------- | ---------------------------------------------------- |
| +44533.3% | +1,336 |       100.0% | 3 → 1,339 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |
|   removed |     -1 | 33.3% → 0.0% |     1 → 0 | `invokeVirtual(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001095800` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001291000`)

|    Change | Delta |             % |  Samples | Callee                                     | Location                                            |
| --------: | ----: | ------------: | -------: | ------------------------------------------ | --------------------------------------------------- |
| +43700.0% |  +437 |  2.2% → 60.8% |  1 → 438 | `delegate(Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|   +592.7% |  +243 | 89.1% → 39.4% | 41 → 284 | `reinvoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001188800` |
|   removed |    -2 |   4.3% → 0.0% |    2 → 0 | `invoke(Object, Object, Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x00000070011c8800` |
|   removed |    -1 |   2.2% → 0.0% |    1 → 0 | `invokeBasic(Object[])`                    | `java.lang.invoke.MethodHandle`                     |

##### `invoke(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001290c00`)

|  Change | Delta |             % | Samples | Callee                                                                                      | Location                                             |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|     new |  +576 | 0.0% → 100.0% | 0 → 576 | `invokeSpecial(Object, Object, Object, Object)`                                             | `java.lang.invoke.DirectMethodHandle$Holder`         |
|     new |    +8 |   0.0% → 1.4% |   0 → 8 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x0000007001094400` |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010c7800`)

|  Change | Delta |             % | Samples | Callee                                    | Location                                             |
| ------: | ----: | ------------: | ------: | ----------------------------------------- | ---------------------------------------------------- |
|     new |  +481 | 0.0% → 100.0% | 0 → 481 | `invokeSpecial(Object, Object, Object)`   | `java.lang.invoke.DirectMethodHandle$Holder`         |
| removed |  -130 |  87.8% → 0.0% | 130 → 0 | `invokeSpecial(Object, Object, Object)`   | `java.lang.invoke.LambdaForm$DMH.0x0000007001084000` |
| removed |   -24 |  16.2% → 0.0% |  24 → 0 | `invokeInterface(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001125400` |
| removed |   -16 |  10.8% → 0.0% |  16 → 0 | `invokeVirtual(Object, Object, Object)`   | `java.lang.invoke.DirectMethodHandle$Holder`         |
|     new |    +4 |   0.0% → 0.8% |   0 → 4 | `invokeVirtual(Object, Object, Object)`   | `java.lang.invoke.LambdaForm$DMH.0x0000007001095800` |

##### `Thread::call_run` (`libjvm.dylib`)

|  Change | Delta |             % |       Samples | Callee                              | Location       |
| ------: | ----: | ------------: | ------------: | ----------------------------------- | -------------- |
|   +7.6% |  +245 | 91.2% → 90.4% | 3,235 → 3,480 | `JavaThread::thread_main_inner`     | `libjvm.dylib` |
|  +20.6% |   +59 |   8.1% → 9.0% |     287 → 346 | `WorkerThread::run`                 | `libjvm.dylib` |
|  -20.0% |    -2 |   0.3% → 0.2% |        10 → 8 | `VMThread::run`                     | `libjvm.dylib` |
| removed |    -1 |  <0.1% → 0.0% |         1 → 0 | `G1BatchedTask::work`               | `libjvm.dylib` |
|     new |    +1 |  0.0% → <0.1% |         0 → 1 | `G1BuildCandidateRegionsTask::work` | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

| Change | Delta |      % |       Samples | Callee             | Location       |
| -----: | ----: | -----: | ------------: | ------------------ | -------------- |
|  +8.5% |  +302 | 100.0% | 3,546 → 3,848 | `Thread::call_run` | `libjvm.dylib` |

##### `_pthread_start` (`libsystem_pthread.dylib`)

| Change | Delta |      % |       Samples | Callee                | Location       |
| -----: | ----: | -----: | ------------: | --------------------- | -------------- |
|  +8.5% |  +302 | 100.0% | 3,546 → 3,848 | `thread_native_entry` | `libjvm.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

| Change | Delta |      % |       Samples | Callee           | Location                  |
| -----: | ----: | -----: | ------------: | ---------------- | ------------------------- |
|  +8.5% |  +302 | 100.0% | 3,547 → 3,849 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001325400`)

|  Change | Delta |             % | Samples | Callee                                                  | Location                                            |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------- | --------------------------------------------------- |
|     new |  +250 |  0.0% → 99.2% | 0 → 250 | `reinvoke(Object, Object, Object, long)`                | `java.lang.invoke.LambdaForm$MH.0x0000007001323c00` |
|     new |    +3 |   0.0% → 1.2% |   0 → 3 | `invoke(Object, Object, Object, long)`                  | `java.lang.invoke.LambdaForm$MH.0x0000007001324400` |
|     new |    +2 |   0.0% → 0.8% |   0 → 2 | `invoke(Object, Object)`                                | `java.lang.invoke.LambdaForm$MH.0x000000700102ac00` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `reinvoke(Object, Object, Object, int, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070013c5000` |
|     new |    +1 |   0.0% → 0.4% |   0 → 1 | `invoke(Object, Object)`                                | `java.lang.invoke.LambdaForm$MH.0x0000007001124400` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|  Change | Delta |             % |       Samples | Callee                          | Location       |
| ------: | ----: | ------------: | ------------: | ------------------------------- | -------------- |
|   +8.0% |  +208 | 80.9% → 81.2% | 2,591 → 2,799 | `C2Compiler::compile_method`    | `libjvm.dylib` |
|   +6.4% |   +38 | 18.5% → 18.3% |     593 → 631 | `Compiler::compile_method`      | `libjvm.dylib` |
|  -60.0% |    -3 |   0.2% → 0.1% |         5 → 2 | `CompilationLog::log_compile`   | `libjvm.dylib` |
| +100.0% |    +2 |          0.1% |         2 → 4 | `ciEnv::get_method_from_handle` | `libjvm.dylib` |
|  -50.0% |    -2 |          0.1% |         4 → 2 | `ciEnv::ciEnv`                  | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|  Change | Delta |             % |       Samples | Callee                                     | Location       |
| ------: | ----: | ------------: | ------------: | ------------------------------------------ | -------------- |
|   +7.6% |  +244 | 99.1% → 99.2% | 3,201 → 3,445 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |
|   -3.4% |    -1 |   0.9% → 0.8% |       29 → 28 | `CompileQueue::get`                        | `libjvm.dylib` |
| removed |    -1 |  <0.1% → 0.0% |         1 → 0 | `TimeStamp::update`                        | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

| Change | Delta |             % |       Samples | Callee                                   | Location       |
| -----: | ----: | ------------: | ------------: | ---------------------------------------- | -------------- |
| +14.7% |  +177 | 46.5% → 49.4% | 1,203 → 1,380 | `Compile::Code_Gen`                      | `libjvm.dylib` |
|  +3.4% |   +35 | 39.9% → 38.2% | 1,033 → 1,068 | `Compile::Optimize`                      | `libjvm.dylib` |
|  -2.3% |    -7 | 12.0% → 10.9% |     311 → 304 | `ParseGenerator::generate`               | `libjvm.dylib` |
| +20.8% |    +5 |   0.9% → 1.0% |       24 → 29 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |
| -50.0% |    -4 |   0.3% → 0.1% |         8 → 4 | `CallGenerator::for_inline`              | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|  Change | Delta |             % |       Samples | Callee              | Location       |
| ------: | ----: | ------------: | ------------: | ------------------- | -------------- |
|   +8.0% |  +208 | 99.8% → 99.9% | 2,587 → 2,795 | `Compile::Compile`  | `libjvm.dylib` |
|  -66.7% |    -2 |  0.1% → <0.1% |         3 → 1 | `Compile::~Compile` | `libjvm.dylib` |
| +200.0% |    +2 |  <0.1% → 0.1% |         1 → 3 | `Chunk::next_chop`  | `libjvm.dylib` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|  Change | Delta |             % |   Samples | Callee                            | Location       |
| ------: | ----: | ------------: | --------: | --------------------------------- | -------------- |
|  +16.2% |  +112 | 57.4% → 58.1% | 690 → 802 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
|  +25.1% |   +50 | 16.5% → 18.0% | 199 → 249 | `Matcher::match`                  | `libjvm.dylib` |
|   +8.2% |   +12 | 12.1% → 11.4% | 146 → 158 | `PhaseOutput::Output`             | `libjvm.dylib` |
|     new |    +3 |   0.0% → 0.2% |     0 → 3 | `PhaseCFG::remove_empty_blocks`   | `libjvm.dylib` |
| +200.0% |    +2 |   0.1% → 0.2% |     1 → 3 | `PhaseCFG::fixup_flow`            | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

| Change | Delta |             % |   Samples | Callee                                     | Location       |
| -----: | ----: | ------------: | --------: | ------------------------------------------ | -------------- |
| +29.1% |   +46 | 22.9% → 25.4% | 158 → 204 | `PhaseChaitin::Split`                      | `libjvm.dylib` |
| +21.6% |   +16 | 10.7% → 11.2% |   74 → 90 | `PhaseLive::compute`                       | `libjvm.dylib` |
| +24.1% |   +13 |   7.8% → 8.4% |   54 → 67 | `PhaseChaitin::gather_lrg_masks`           | `libjvm.dylib` |
| -45.5% |   -10 |   3.2% → 1.5% |   22 → 12 | `PhaseIFG::Compute_Effective_Degree`       | `libjvm.dylib` |
| +14.8% |    +8 |   7.8% → 7.7% |   54 → 62 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |

##### `Matcher::match` (`libjvm.dylib`)

|  Change | Delta |            % |   Samples | Callee                                        | Location       |
| ------: | ----: | -----------: | --------: | --------------------------------------------- | -------------- |
|  +25.2% |   +39 |        77.9% | 155 → 194 | `Matcher::xform`                              | `libjvm.dylib` |
| +112.5% |    +9 |  4.0% → 6.8% |    8 → 17 | `Matcher::specialize_generic_vector_operands` | `libjvm.dylib` |
| +300.0% |    +3 |  0.5% → 1.6% |     1 → 4 | `Arena::contains`                             | `libjvm.dylib` |
|   -8.7% |    -2 | 11.6% → 8.4% |   23 → 21 | `Matcher::find_shared`                        | `libjvm.dylib` |
|     new |    +2 |  0.0% → 0.8% |     0 → 2 | `ParmNode::Opcode`                            | `libjvm.dylib` |

##### `PhaseChaitin::Split` (`libjvm.dylib`)

|  Change | Delta |           % | Samples | Callee                              | Location       |
| ------: | ----: | ----------: | ------: | ----------------------------------- | -------------- |
|     new |    +6 | 0.0% → 2.9% |   0 → 6 | `Node::rematerialize`               | `libjvm.dylib` |
|     new |    +5 | 0.0% → 2.5% |   0 → 5 | `PhaseChaitin::split_Rematerialize` | `libjvm.dylib` |
|  -50.0% |    -3 | 3.8% → 1.5% |   6 → 3 | `CProjNode::is_block_proj`          | `libjvm.dylib` |
| +100.0% |    +3 | 1.9% → 2.9% |   3 → 6 | `PhaseChaitin::split_USE`           | `libjvm.dylib` |
|  +33.3% |    +2 | 3.8% → 3.9% |   6 → 8 | `PhaseChaitin::split_DEF`           | `libjvm.dylib` |

##### `Matcher::xform` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                | Location                   |
| ------: | ----: | ------------: | ------: | --------------------- | -------------------------- |
|  +41.1% |   +23 | 36.1% → 40.7% | 56 → 79 | `Arena::contains`     | `libjvm.dylib`             |
|  +20.6% |   +13 | 40.6% → 39.2% | 63 → 76 | `Matcher::match_tree` | `libjvm.dylib`             |
| +300.0% |    +3 |   0.6% → 2.1% |   1 → 4 | `Node::clone`         | `libjvm.dylib`             |
|  -20.0% |    -2 |   6.5% → 4.1% |  10 → 8 | `Matcher::match_sfpt` | `libjvm.dylib`             |
| removed |    -1 |   0.6% → 0.0% |   1 → 0 | `_platform_memset`    | `libsystem_platform.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

| Change | Delta |             % |   Samples | Callee                           | Location       |
| -----: | ----: | ------------: | --------: | -------------------------------- | -------------- |
|  +5.4% |   +22 | 84.8% → 83.0% | 407 → 429 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |
| +24.6% |   +17 | 14.4% → 16.6% |   69 → 86 | `PhaseIterGVN::optimize`         | `libjvm.dylib` |
| -50.0% |    -2 |   0.8% → 0.4% |     4 → 2 | `Chunk::next_chop`               | `libjvm.dylib` |

##### `Node::dominates` (`libjvm.dylib`)

| Change | Delta |           % | Samples | Callee              | Location       |
| -----: | ----: | ----------: | ------: | ------------------- | -------------- |
|    new |    +1 | 0.0% → 1.0% |   0 → 1 | `Node::nonnull_req` | `libjvm.dylib` |

##### `Compilation::compile_method` (`libjvm.dylib`)

|  Change | Delta |             % |   Samples | Callee                             | Location                   |
| ------: | ----: | ------------: | --------: | ---------------------------------- | -------------------------- |
|  +32.1% |   +18 |  9.5% → 11.8% |   56 → 74 | `ciEnv::register_method`           | `libjvm.dylib`             |
|   +3.0% |   +16 | 90.4% → 87.6% | 534 → 550 | `Compilation::compile_java_method` | `libjvm.dylib`             |
|     new |    +3 |   0.0% → 0.5% |     0 → 3 | `Dependencies::assert_common_1`    | `libjvm.dylib`             |
| removed |    -1 |   0.2% → 0.0% |     1 → 0 | `_platform_memset`                 | `libsystem_platform.dylib` |
|     new |    +1 |   0.0% → 0.2% |     0 → 1 | `tlv_get_addr`                     | `libdyld.dylib`            |

##### `Compilation::Compilation` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Callee                        | Location       |
| -----: | ----: | -----: | --------: | ----------------------------- | -------------- |
|  +6.3% |   +37 | 100.0% | 591 → 628 | `Compilation::compile_method` | `libjvm.dylib` |

##### `MemNode::all_controls_dominate` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                     | Location       |
| ------: | ----: | ------------: | ------: | -------------------------- | -------------- |
|  +60.7% |   +37 | 93.8% → 97.0% | 61 → 98 | `Node::dominates`          | `libjvm.dylib` |
| removed |    -1 |   1.5% → 0.0% |   1 → 0 | `Node_List::Node_List`     | `libjvm.dylib` |
| removed |    -1 |   1.5% → 0.0% |   1 → 0 | `Node::find_exact_control` | `libjvm.dylib` |
|     new |    +1 |   0.0% → 1.0% |   0 → 1 | `VectorSet::VectorSet`     | `libjvm.dylib` |

##### `InitializeNode::detect_init_independence` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                               | Location       |
| ------: | ----: | -------------: | ------: | ------------------------------------ | -------------- |
|  +70.4% |   +38 | 96.4% → 100.0% | 54 → 92 | `MemNode::all_controls_dominate`     | `libjvm.dylib` |
| removed |    -1 |    1.8% → 0.0% |   1 → 0 | `MultiNode::is_CFG`                  | `libjvm.dylib` |
| removed |    -1 |    1.8% → 0.0% |   1 → 0 | `Unique_Node_List::Unique_Node_List` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

| Change | Delta |             % |   Samples | Callee                           | Location       |
| -----: | ----: | ------------: | --------: | -------------------------------- | -------------- |
| +14.2% |   +38 | 25.9% → 28.7% | 268 → 306 | `PhaseIdealLoop::optimize`       | `libjvm.dylib` |
|  -9.1% |   -19 | 20.2% → 17.8% | 209 → 190 | `PhaseIterGVN::optimize`         | `libjvm.dylib` |
| +24.2% |   +15 |   6.0% → 7.2% |   62 → 77 | `Compile::inline_incrementally`  | `libjvm.dylib` |
| +18.3% |   +11 |   5.8% → 6.6% |   60 → 71 | `ConnectionGraph::do_analysis`   | `libjvm.dylib` |
| -58.8% |   -10 |   1.6% → 0.7% |    17 → 7 | `Compile::final_graph_reshaping` | `libjvm.dylib` |

##### `InitializeNode::can_capture_store` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                     | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------ | -------------- |
|  +64.3% |   +36 | 96.6% → 98.9% | 56 → 92 | `InitializeNode::detect_init_independence` | `libjvm.dylib` |
| removed |    -1 |   1.7% → 0.0% |   1 → 0 | `Unique_Node_List::push`                   | `libjvm.dylib` |

##### `StoreNode::Ideal` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                              | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------------- | -------------- |
|  +60.3% |   +35 | 92.1% → 97.9% | 58 → 93 | `InitializeNode::can_capture_store` | `libjvm.dylib` |
| removed |    -2 |   3.2% → 0.0% |   2 → 0 | `InitializeNode::capture_store`     | `libjvm.dylib` |
|  -66.7% |    -2 |   4.8% → 1.1% |   3 → 1 | `MemNode::Ideal_common`             | `libjvm.dylib` |

##### `BlockList::iterate_forward` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                           | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------- | -------------- |
|  +61.5% |   +24 | 97.5% → 96.9% | 39 → 63 | `LIRGenerator::block_do`         | `libjvm.dylib` |
| removed |    -1 |   2.5% → 0.0% |   1 → 0 | `Invoke::visit`                  | `libjvm.dylib` |
|     new |    +1 |   0.0% → 1.5% |   0 → 1 | `Return::visit`                  | `libjvm.dylib` |
|     new |    +1 |   0.0% → 1.5% |   0 → 1 | `LIRGenerator::do_ProfileInvoke` | `libjvm.dylib` |

##### `LIRGenerator::block_do` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                               | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------ | -------------- |
| +266.7% |    +8 |  7.7% → 17.5% |  3 → 11 | `LIRGenerator::do_ProfileReturnType` | `libjvm.dylib` |
|  +50.0% |    +5 | 25.6% → 23.8% | 10 → 15 | `LIRGenerator::do_ProfileCall`       | `libjvm.dylib` |
| +100.0% |    +4 | 10.3% → 12.7% |   4 → 8 | `LIRGenerator::do_Invoke`            | `libjvm.dylib` |
| +200.0% |    +2 |   2.6% → 4.8% |   1 → 3 | `LIRGenerator::do_Base`              | `libjvm.dylib` |
|     new |    +2 |   0.0% → 3.2% |   0 → 2 | `LIRGenerator::do_StoreIndexed`      | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|  Change | Delta |             % |       Samples | Callee                                                   | Location       |
| ------: | ----: | ------------: | ------------: | -------------------------------------------------------- | -------------- |
|   +7.5% |  +243 | 99.9% → 99.8% | 3,231 → 3,474 | `CompileBroker::compiler_thread_loop`                    | `libjvm.dylib` |
|     new |    +3 |   0.0% → 0.1% |         0 → 3 | `MonitorDeflationThread::monitor_deflation_thread_entry` | `libjvm.dylib` |
|  -66.7% |    -2 |  0.1% → <0.1% |         3 → 1 | `ServiceThread::service_thread_entry`                    | `libjvm.dylib` |
| +100.0% |    +1 |  <0.1% → 0.1% |         1 → 2 | `JvmtiAgentThread::start_function_wrapper`               | `libjvm.dylib` |

##### `G1EvacuateRegionsBaseTask::work` (`libjvm.dylib`)

|  Change | Delta |             % |  Samples | Callee                                         | Location       |
| ------: | ----: | ------------: | -------: | ---------------------------------------------- | -------------- |
|  +71.4% |   +45 | 49.2% → 53.2% | 63 → 108 | `G1EvacuateRegionsTask::scan_roots`            | `libjvm.dylib` |
|  +35.7% |   +20 | 43.8% → 37.4% |  56 → 76 | `G1EvacuateRegionsTask::evacuate_live_objects` | `libjvm.dylib` |
| +111.1% |   +10 |   7.0% → 9.4% |   9 → 19 | `G1RemSet::scan_collection_set_code_roots`     | `libjvm.dylib` |

##### `G1ParScanThreadState::trim_queue_to_threshold` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                                                                                                       | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------------------------------------- | -------------- |
|  +55.4% |   +31 | 70.9% → 62.1% | 56 → 87 | `G1ParScanThreadState::do_copy_to_survivor_space`                                                                            | `libjvm.dylib` |
|     new |    +3 |   0.0% → 2.1% |   0 → 3 | `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>` | `libjvm.dylib` |
|     new |    +2 |   0.0% → 1.4% |   0 → 2 | `fwd_copy_again`                                                                                                             | `libjvm.dylib` |
| removed |    -1 |   1.3% → 0.0% |   1 → 0 | `fwd_copy_aligned`                                                                                                           | `libjvm.dylib` |
|  +50.0% |    +1 |   2.5% → 2.1% |   2 → 3 | `G1ParScanThreadState::do_partial_array`                                                                                     | `libjvm.dylib` |

##### `WorkerThread::run` (`libjvm.dylib`)

|  Change | Delta |             % |   Samples | Callee                            | Location                 |
| ------: | ----: | ------------: | --------: | --------------------------------- | ------------------------ |
|  +58.6% |   +75 | 44.6% → 58.7% | 128 → 203 | `G1EvacuateRegionsBaseTask::work` | `libjvm.dylib`           |
| +314.3% |   +22 |   2.4% → 8.4% |    7 → 29 | `G1ParallelCleaningTask::work`    | `libjvm.dylib`           |
| removed |   -16 |   5.6% → 0.0% |    16 → 0 | `KlassCleaningTask::work`         | `libjvm.dylib`           |
|  -16.9% |   -10 | 20.6% → 14.2% |   59 → 49 | `G1RebuildRSAndScrubTask::work`   | `libjvm.dylib`           |
|  -62.5% |    -5 |   2.8% → 0.9% |     8 → 3 | `semaphore_wait_trap`             | `libsystem_kernel.dylib` |

##### `G1EvacuateRegionsTask::scan_roots` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                            | Location       |
| -----: | ----: | ------------: | ------: | --------------------------------- | -------------- |
| +80.0% |   +40 | 79.4% → 83.3% | 50 → 90 | `G1RemSet::scan_heap_roots`       | `libjvm.dylib` |
| +38.5% |    +5 | 20.6% → 16.7% | 13 → 18 | `G1RootProcessor::evacuate_roots` | `libjvm.dylib` |

##### `void G1ScanHRForRegionClosure::ChunkScanner::on_dirty_cards<G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)>` (`libjvm.dylib`)

| Change | Delta |              % | Samples | Callee                                     | Location       |
| -----: | ----: | -------------: | ------: | ------------------------------------------ | -------------- |
| +76.0% |   +38 | 100.0% → 97.8% | 50 → 88 | `G1ScanHRForRegionClosure::scan_memregion` | `libjvm.dylib` |

##### `G1ScanHRForRegionClosure::scan_heap_roots` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee                                                                                                                                                          | Location       |
| -----: | ----: | -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| +80.0% |   +40 | 100.0% | 50 → 90 | `void G1ScanHRForRegionClosure::ChunkScanner::on_dirty_cards<G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)>` | `libjvm.dylib` |

##### `G1ScanHRForRegionClosure::do_heap_region` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee                                      | Location       |
| -----: | ----: | -----: | ------: | ------------------------------------------- | -------------- |
| +80.0% |   +40 | 100.0% | 50 → 90 | `G1ScanHRForRegionClosure::scan_heap_roots` | `libjvm.dylib` |

##### `G1RemSet::scan_heap_roots` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee                                     | Location       |
| -----: | ----: | -----: | ------: | ------------------------------------------ | -------------- |
| +80.0% |   +40 | 100.0% | 50 → 90 | `G1ScanHRForRegionClosure::do_heap_region` | `libjvm.dylib` |

##### `Compiler::compile_method` (`libjvm.dylib`)

| Change | Delta |             % |   Samples | Callee                      | Location       |
| -----: | ----: | ------------: | --------: | --------------------------- | -------------- |
|  +6.3% |   +37 | 99.7% → 99.5% | 591 → 628 | `Compilation::Compilation`  | `libjvm.dylib` |
|    new |    +2 |   0.0% → 0.3% |     0 → 2 | `Compilation::~Compilation` | `libjvm.dylib` |
| -50.0% |    -1 |   0.3% → 0.2% |     2 → 1 | `Chunk::next_chop`          | `libjvm.dylib` |

##### `G1ScanHRForRegionClosure::scan_memregion` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                                                          | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------- | -------------- |
| +111.4% |   +39 | 70.0% → 84.1% | 35 → 74 | `G1ParScanThreadState::trim_queue_to_threshold`                                 | `libjvm.dylib` |
|  -14.3% |    -2 | 28.0% → 13.6% | 14 → 12 | `HeapWordImpl** HeapRegion::oops_on_memregion_iterate<G1ScanCardClosure, true>` | `libjvm.dylib` |
| +100.0% |    +1 |   2.0% → 2.3% |   1 → 2 | `G1ParScanThreadState::do_copy_to_survivor_space`                               | `libjvm.dylib` |

##### `G1ParScanThreadState::do_copy_to_survivor_space` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                                                                                                       | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------------------------------------- | -------------- |
|  +33.3% |    +8 | 38.7% → 33.7% | 24 → 32 | `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>` | `libjvm.dylib` |
|  +40.0% |    +2 |   8.1% → 7.4% |   5 → 7 | `G1ParScanThreadState::start_partial_objarray`                                                                               | `libjvm.dylib` |
| +100.0% |    +1 |   1.6% → 2.1% |   1 → 2 | `void InstanceRefKlass::oop_oop_iterate_reverse<narrowOop, G1ScanEvacuatedObjClosure>`                                       | `libjvm.dylib` |

##### `JVM_NewArray` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                                                | Location                  |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------- | ------------------------- |
|  +42.1% |   +24 | 57.6% → 63.8% | 57 → 81 | `pthread_jit_write_protect_np`                                        | `libsystem_pthread.dylib` |
|  +13.6% |    +3 | 22.2% → 19.7% | 22 → 25 | `InstanceKlass::allocate_objArray`                                    | `libjvm.dylib`            |
|  -50.0% |    -2 |   4.0% → 1.6% |   4 → 2 | `JNIHandleBlock::allocate_handle`                                     | `libjvm.dylib`            |
| removed |    -2 |   2.0% → 0.0% |   2 → 0 | `JvmtiVMObjectAllocEventCollector::~JvmtiVMObjectAllocEventCollector` | `libjvm.dylib`            |
|     new |    +2 |   0.0% → 1.6% |   0 → 2 | `Klass::check_array_allocation_length`                                | `libjvm.dylib`            |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070017c3000`)

|  Change | Delta |             % | Samples | Callee                                     | Location                                         |
| ------: | ----: | ------------: | ------: | ------------------------------------------ | ------------------------------------------------ |
|     new |  +153 | 0.0% → 100.0% | 0 → 153 | `delegate(Object, Object, Object)`         | `java.lang.invoke.DelegatingMethodHandle$Holder` |
| removed |    -5 | 100.0% → 0.0% |   5 → 0 | `delegate(Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001120400`)

|  Change | Delta |             % | Samples | Callee                             | Location                                            |
| ------: | ----: | ------------: | ------: | ---------------------------------- | --------------------------------------------------- |
|     new |   +84 |  0.0% → 68.3% |  0 → 84 | `reinvoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010aa800` |
|     new |   +38 |  0.0% → 30.9% |  0 → 38 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|     new |    +2 |   0.0% → 1.6% |   0 → 2 | `invokeBasic(Object[])`            | `java.lang.invoke.MethodHandle`                     |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `invoke(Object, Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x0000007001138800` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070017c7800`)

| Change | Delta |             % | Samples | Callee                             | Location                                         |
| -----: | ----: | ------------: | ------: | ---------------------------------- | ------------------------------------------------ |
|    new |  +120 | 0.0% → 100.0% | 0 → 120 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001121800`)

|  Change | Delta |             % | Samples | Callee                                    | Location                                             |
| ------: | ----: | ------------: | ------: | ----------------------------------------- | ---------------------------------------------------- |
|     new |   +93 |  0.0% → 69.9% |  0 → 93 | `invokeSpecial(Object, Object, Object)`   | `java.lang.invoke.LambdaForm$DMH.0x0000007001084000` |
|     new |   +28 |  0.0% → 21.1% |  0 → 28 | `invokeInterface(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001125000` |
| removed |   -19 | 100.0% → 0.0% |  19 → 0 | `invokeStatic(Object, Object)`            | `java.lang.invoke.LambdaForm$DMH.0x000000700102a000` |
|     new |   +10 |   0.0% → 7.5% |  0 → 10 | `invokeVirtual(Object, Object, Object)`   | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

| Change | Delta |             % |       Samples | Callee                                           | Location                                            |
| -----: | ----: | ------------: | ------------: | ------------------------------------------------ | --------------------------------------------------- |
|  +3.7% |   +50 | 81.3% → 81.8% | 1,345 → 1,395 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                  |
| -28.9% |   -11 |   2.3% → 1.6% |       38 → 27 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
|    new |    +6 |   0.0% → 0.4% |         0 → 6 | `linkToCallSite(long, long, Object)`             | `java.lang.invoke.Invokers$Holder`                  |
|    new |    +4 |   0.0% → 0.2% |         0 → 4 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.Invokers$Holder`                  |
|  +1.2% |    +3 | 15.1% → 14.8% |     250 → 253 | `linkToCallSite(Object, Object, long, Object)`   | `java.lang.invoke.LambdaForm$MH.0x0000007001321c00` |

##### `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)

| Change | Delta |             % |       Samples | Callee                                   | Location                                                                             |
| -----: | ----: | ------------: | ------------: | ---------------------------------------- | ------------------------------------------------------------------------------------ |
|  +4.8% |   +59 | 93.8% → 95.1% | 1,231 → 1,290 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                                                   |
| -22.0% |   -18 |   6.2% → 4.7% |       82 → 64 | `linkToCallSite(Object, Object)`         | `java.lang.invoke.Invokers$Holder`                                                   |
|    new |    +2 |   0.0% → 0.1% |         0 → 2 | `<init>(Object, Object, Reference)`      | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3$_closure7` |

##### `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`)

|  Change | Delta |             % |   Samples | Callee                      | Location                                                  |
| ------: | ----: | ------------: | --------: | --------------------------- | --------------------------------------------------------- |
|  +66.7% |   +16 |   2.0% → 3.2% |   24 → 40 | `applyTo(SourceCode, List)` | `org.codenarc.rule.unnecessary.UnnecessarySemicolonRule`  |
|   +1.3% |   +12 | 75.5% → 73.8% | 899 → 911 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractAstVisitorRule`                |
| +225.0% |    +9 |   0.3% → 1.1% |    4 → 13 | `applyTo(SourceCode, List)` | `org.codenarc.rule.formatting.BlankLineBeforePackageRule` |
|  +40.0% |    +6 |   1.3% → 1.7% |   15 → 21 | `applyTo(SourceCode, List)` | `org.codenarc.rule.imports.UnusedImportRule`              |
|  -54.5% |    -6 |   0.9% → 0.4% |    11 → 5 | `applyTo(SourceCode, List)` | `org.codenarc.rule.imports.UnnecessaryGroovyImportRule`   |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`)

|  Change | Delta |             % |   Samples | Callee                  | Location                                                |
| ------: | ----: | ------------: | --------: | ----------------------- | ------------------------------------------------------- |
|   +1.9% |   +16 | 86.3% → 86.0% | 847 → 863 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractAstVisitor`                  |
|  +37.5% |    +9 |   2.4% → 3.3% |   24 → 33 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractMethodVisitor`               |
|  -23.3% |    -7 |   3.1% → 2.3% |   30 → 23 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractMethodCallExpressionVisitor` |
|   +8.8% |    +5 |   5.8% → 6.2% |   57 → 62 | `getAstVisitor()`       | `org.codenarc.rule.AbstractAstVisitorRule`              |
| +200.0% |    +2 |   0.1% → 0.3% |     1 → 3 | `getAst()`              | `org.codenarc.source.AbstractSourceCode`                |

##### `main(String[])` (`org.codenarc.CodeNarc`)

|  Change | Delta |             % |       Samples | Callee                                   | Location                           |
| ------: | ----: | ------------: | ------------: | ---------------------------------------- | ---------------------------------- |
|   +0.8% |   +17 | 99.9% → 99.8% | 2,216 → 2,233 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
| +200.0% |    +2 |  <0.1% → 0.1% |         1 → 3 | `linkToCallSite(Object, Object)`         | `java.lang.invoke.Invokers$Holder` |

##### `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`)

|  Change | Delta |             % |   Samples | Callee                          | Location                                                            |
| ------: | ----: | ------------: | --------: | ------------------------------- | ------------------------------------------------------------------- |
| +300.0% |    +9 |   0.3% → 1.3% |    3 → 12 | `visitClassEx(ClassNode)`       | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor` |
|  +21.7% |    +5 |   2.5% → 3.0% |   23 → 28 | `visitClassComplete(ClassNode)` | `org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor`     |
|  +71.4% |    +5 |   0.8% → 1.3% |    7 → 12 | `visitClassEx(ClassNode)`       | `org.codenarc.rule.formatting.IndentationAstVisitor`                |
|   -0.4% |    -3 | 83.4% → 81.4% | 773 → 770 | `visitClass(ClassNode)`         | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                   |
|   +6.5% |    +3 |   5.0% → 5.2% |   46 → 49 | `visitClassEx(ClassNode)`       | `org.codenarc.rule.size.AbstractMethodMetricAstVisitor`             |

##### `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|  Change | Delta |             % |       Samples | Callee                                           | Location                           |
| ------: | ----: | ------------: | ------------: | ------------------------------------------------ | ---------------------------------- |
|   +3.5% |   +59 | 83.8% → 86.0% | 1,695 → 1,754 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|   -9.7% |   -27 | 13.7% → 12.3% |     278 → 251 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder` |
|  -24.4% |   -11 |   2.2% → 1.7% |       45 → 34 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.Invokers$Holder` |
| removed |    -1 |  <0.1% → 0.0% |         1 → 0 | `I2C/C2I adapters(0xbbbb)`                       | `<unknown>`                        |
| removed |    -1 |  <0.1% → 0.0% |         1 → 0 | `hasNext()`                                      | `java.util.ArrayList$Itr`          |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.unnecessary.UnnecessarySemicolonRule`)

|  Change | Delta |             % | Samples | Callee                                                        | Location                                            |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------- | --------------------------------------------------- |
|  +38.1% |    +8 | 87.5% → 72.5% | 21 → 29 | `invokeMethodOnSuperN(Class, GroovyObject, String, Object[])` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |
| +266.7% |    +8 | 12.5% → 27.5% |  3 → 11 | `linkToCallSite(Object, Object, Object, Object)`              | `java.lang.invoke.Invokers$Holder`                  |

##### `execute(String[])` (`org.codenarc.CodeNarc`)

| Change | Delta |           % |       Samples | Callee                                             | Location                                            |
| -----: | ----: | ----------: | ------------: | -------------------------------------------------- | --------------------------------------------------- |
|  +0.7% |   +16 |       99.4% | 2,193 → 2,209 | `linkToCallSite(Object, Object)`                   | `java.lang.invoke.Invokers$Holder`                  |
| -18.2% |    -2 | 0.5% → 0.4% |        11 → 9 | `linkToCallSite(Object, Object, int, int, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000700192c400` |
| +50.0% |    +1 |        0.1% |         2 → 3 | `linkToCallSite(Object, Object, Object)`           | `java.lang.invoke.Invokers$Holder`                  |

##### `execute()` (`org.codenarc.CodeNarcRunner`)

| Change | Delta |             % |       Samples | Callee                                           | Location                           |
| -----: | ----: | ------------: | ------------: | ------------------------------------------------ | ---------------------------------- |
|  +0.8% |   +16 | 95.5% → 95.6% | 2,093 → 2,109 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder` |
|  -5.7% |    -3 |   2.4% → 2.3% |       53 → 50 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|  +4.3% |    +2 |   2.1% → 2.2% |       46 → 48 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.Invokers$Holder` |

##### `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)

| Change | Delta |             % |       Samples | Callee                                           | Location                           |
| -----: | ----: | ------------: | ------------: | ------------------------------------------------ | ---------------------------------- |
|  +0.8% |   +17 | 99.3% → 99.4% | 2,023 → 2,040 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
| -13.3% |    -2 |   0.7% → 0.6% |       15 → 13 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder` |

##### `analyze(RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)

| Change | Delta |      % |       Samples | Callee                                           | Location                           |
| -----: | ----: | -----: | ------------: | ------------------------------------------------ | ---------------------------------- |
|  +0.6% |   +12 | 100.0% | 2,055 → 2,067 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`)

|  Change | Delta |              % |       Samples | Callee                                                   | Location                                            |
| ------: | ----: | -------------: | ------------: | -------------------------------------------------------- | --------------------------------------------------- |
|   +0.7% |   +15 |  99.2% → 99.3% | 2,038 → 2,053 | `linkToCallSite(Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
|   +0.6% |   +13 | 99.9% → 100.0% | 2,053 → 2,066 | `linkToCallSite(Object, Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                  |
| removed |    -2 |    0.1% → 0.0% |         2 → 0 | `linkToCallSite(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070010c8800` |
| +100.0% |    +1 |   <0.1% → 0.1% |         1 → 2 | `linkToCallSite(Object, int, Object)`                    | `java.lang.invoke.Invokers$Holder`                  |
| removed |    -1 |   <0.1% → 0.0% |         1 → 0 | `getField(Class, Object, String)`                        | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |

##### `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)

| Change | Delta |      % |       Samples | Callee                                   | Location                           |
| -----: | ----: | -----: | ------------: | ---------------------------------------- | ---------------------------------- |
|  +0.6% |   +12 | 100.0% | 2,055 → 2,067 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `visitClass(ClassNode)` (`org.codenarc.rule.AbstractMethodVisitor`)

|  Change | Delta |             % | Samples | Callee                    | Location                                                                |
| ------: | ----: | ------------: | ------: | ------------------------- | ----------------------------------------------------------------------- |
|  -80.0% |    -4 |  20.8% → 3.0% |   5 → 1 | `visitMethod(MethodNode)` | `org.codenarc.rule.design.EmptyMethodInAbstractClassAstVisitor`         |
| +200.0% |    +4 |  8.3% → 18.2% |   2 → 6 | `visitMethod(MethodNode)` | `org.codenarc.rule.unnecessary.UnnecessaryOverridingMethodAstVisitor`   |
| +100.0% |    +3 | 12.5% → 18.2% |   3 → 6 | `visitMethod(MethodNode)` | `org.codenarc.rule.naming.ObjectOverrideMisspelledMethodNameAstVisitor` |
|  +33.3% |    +2 | 25.0% → 24.2% |   6 → 8 | `visitMethod(MethodNode)` | `org.codenarc.rule.naming.MethodNameAstVisitor`                         |
|     new |    +2 |   0.0% → 6.1% |   0 → 2 | `visitMethod(MethodNode)` | `org.codenarc.rule.design.CompareToWithoutComparableAstVisitor`         |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.formatting.BlankLineBeforePackageRule`)

|  Change | Delta |             % | Samples | Callee                                                | Location                                            |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------- | --------------------------------------------------- |
| +133.3% |    +4 | 75.0% → 53.8% |   3 → 7 | `linkToCallSite(Object, Object, Object)`              | `java.lang.invoke.Invokers$Holder`                  |
|     new |    +3 |  0.0% → 23.1% |   0 → 3 | `linkToCallSite(Object, Object)`                      | `java.lang.invoke.Invokers$Holder`                  |
|     new |    +1 |   0.0% → 7.7% |   0 → 1 | `linkToCallSite(Object, int, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070013e8400` |
|     new |    +1 |   0.0% → 7.7% |   0 → 1 | `linkToCallSite(Object, Object)`                      | `java.lang.invoke.LambdaForm$MH.0x00000070010c8400` |

##### `visitClassEx(ClassNode)` (`org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`)

|  Change | Delta |              % | Samples | Callee                                                   | Location                           |
| ------: | ----: | -------------: | ------: | -------------------------------------------------------- | ---------------------------------- |
| +266.7% |    +8 | 100.0% → 91.7% |  3 → 11 | `linkToCallSite(Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|     new |    +1 |    0.0% → 8.3% |   0 → 1 | `linkToCallSite(Object, Object)`                         | `java.lang.invoke.Invokers$Holder` |

##### `visitArgumentlistExpression(ArgumentListExpression)` (`org.codenarc.rule.dry.DuplicateLiteralAstVisitor`)

| Change | Delta |             % | Samples | Callee                                                        | Location                                            |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------- | --------------------------------------------------- |
| +66.7% |    +6 | 60.0% → 65.2% |  9 → 15 | `linkToCallSite(Object, Object, Object)`                      | `java.lang.invoke.Invokers$Holder`                  |
| +66.7% |    +4 | 40.0% → 43.5% |  6 → 10 | `invokeMethodOnSuperN(Class, GroovyObject, String, Object[])` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |

##### `checkDeclaration(ASTNode, String, String)` (`org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`)

| Change | Delta |              % | Samples | Callee                                           | Location                           |
| -----: | ----: | -------------: | ------: | ------------------------------------------------ | ---------------------------------- |
| +75.0% |    +6 | 100.0% → 87.5% |  8 → 14 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|    new |    +2 |   0.0% → 12.5% |   0 → 2 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.Invokers$Holder` |

##### `super$3$visitConstructorOrMethod(MethodNode, boolean)` (`org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor`)

| Change | Delta |      % | Samples | Callee                                          | Location                                          |
| -----: | ----: | -----: | ------: | ----------------------------------------------- | ------------------------------------------------- |
| +66.7% |    +8 | 100.0% | 12 → 20 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codehaus.groovy.ast.ClassCodeVisitorSupport` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010c6800`)

|  Change |  Delta |             % |   Samples | Callee                                  | Location                                             |
| ------: | -----: | ------------: | --------: | --------------------------------------- | ---------------------------------------------------- |
| removed | -2,207 | 100.0% → 0.0% | 2,207 → 0 | `invokeVirtual(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |
|     new |     +6 |  0.0% → 66.7% |     0 → 6 | `invokeStatic(Object, Object, Object)`  | `java.lang.invoke.DirectMethodHandle$Holder`         |
| removed |     -1 |  <0.1% → 0.0% |     1 → 0 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001084000` |
|     new |     +1 |  0.0% → 11.1% |     0 → 1 | `invokeVirtual(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001097c00` |

##### `invoke(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070011ebc00`)

|  Change |  Delta |             % |   Samples | Callee                                                                                      | Location                                             |
| ------: | -----: | ------------: | --------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed | -2,102 | 100.0% → 0.0% | 2,102 → 0 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x00000070010d3c00`  |
|     new |     +1 | 0.0% → 100.0% |     0 → 1 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001451000`)

| Change |  Delta |      % |   Samples | Callee                                  | Location                                     |
| -----: | -----: | -----: | --------: | --------------------------------------- | -------------------------------------------- |
| -99.8% | -1,818 | 100.0% | 1,821 → 3 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070014f1c00`)

|  Change |  Delta |             % |   Samples | Callee                                             | Location                                         |
| ------: | -----: | ------------: | --------: | -------------------------------------------------- | ------------------------------------------------ |
| removed | -1,804 | 100.0% → 0.0% | 1,804 → 0 | `delegate(Object, Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |
|     new |    +16 | 0.0% → 100.0% |    0 → 16 | `delegate(Object, Object, Object)`                 | `java.lang.invoke.DelegatingMethodHandle$Holder` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001319400`)

|  Change |  Delta |             % |   Samples | Callee                                     | Location                                            |
| ------: | -----: | ------------: | --------: | ------------------------------------------ | --------------------------------------------------- |
| removed | -1,693 |  99.9% → 0.0% | 1,693 → 0 | `reinvoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070011c5c00` |
| removed |     -1 |   0.1% → 0.0% |     1 → 0 | `delegate(Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
| removed |     -1 |   0.1% → 0.0% |     1 → 0 | `invoke(Object, Object)`                   | `java.lang.invoke.LambdaForm$MH.0x000000700102ac00` |
|     new |     +1 | 0.0% → 100.0% |     0 → 1 | `reinvoke(Object, long, long)`             | `java.lang.invoke.LambdaForm$MH.0x0000007001318800` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001480c00`)

|  Change |  Delta |             % |   Samples | Callee                             | Location                                            |
| ------: | -----: | ------------: | --------: | ---------------------------------- | --------------------------------------------------- |
| removed | -1,670 | 100.0% → 0.0% | 1,670 → 0 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|     new |     +1 | 0.0% → 100.0% |     0 → 1 | `invoke(Object, Object)`           | `java.lang.invoke.LambdaForm$MH.0x000000700109b800` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001625800`)

|  Change |  Delta |             % |   Samples | Callee                                     | Location                                         |
| ------: | -----: | ------------: | --------: | ------------------------------------------ | ------------------------------------------------ |
| removed | -1,670 | 100.0% → 0.0% | 1,670 → 0 | `delegate(Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |
|     new |     +9 | 0.0% → 100.0% |     0 → 9 | `delegate(Object, Object, Object)`         | `java.lang.invoke.DelegatingMethodHandle$Holder` |

##### `invoke(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700118b000`)

|  Change |  Delta |             % |   Samples | Callee                                                                                      | Location                                             |
| ------: | -----: | ------------: | --------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed | -1,674 |  99.9% → 0.0% | 1,674 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |
|     new |    +52 | 0.0% → 100.0% |    0 → 52 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x00000070011e1000` |
| removed |     -1 |   0.1% → 0.0% |     1 → 0 | `collector(Object, Object, Object, Object)`                                                 | `java.lang.invoke.LambdaForm$MH.0x00000070010d4000`  |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001615400`)

| Change |  Delta |              % |   Samples | Callee                                     | Location                                         |
| -----: | -----: | -------------: | --------: | ------------------------------------------ | ------------------------------------------------ |
| -99.9% | -1,362 | 100.0% → 50.0% | 1,363 → 1 | `delegate(Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010c7400`)

|  Change |  Delta |             % |   Samples | Callee                                    | Location                                             |
| ------: | -----: | ------------: | --------: | ----------------------------------------- | ---------------------------------------------------- |
| removed | -1,343 | 100.0% → 0.0% | 1,343 → 0 | `invoke(Object, Object, Object, Object)`  | `java.lang.invoke.LambdaForm$MH.0x00000070010d3c00`  |
|     new |   +137 |  0.0% → 85.1% |   0 → 137 | `invokeSpecial(Object, Object, Object)`   | `java.lang.invoke.LambdaForm$DMH.0x0000007001084000` |
|     new |    +26 |  0.0% → 16.1% |    0 → 26 | `invokeInterface(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001125000` |
|     new |    +21 |  0.0% → 13.0% |    0 → 21 | `invokeVirtual(Object, Object, Object)`   | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070012a4c00`)

|  Change |  Delta |             % |   Samples | Callee                                                                                      | Location                                             |
| ------: | -----: | ------------: | --------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed | -1,323 | 100.0% → 0.0% | 1,323 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |
|     new |   +186 |  0.0% → 98.4% |   0 → 186 | `invokeVirtual(Object, Object, int)`                                                        | `java.lang.invoke.LambdaForm$DMH.0x0000007001109400` |
|     new |     +3 |   0.0% → 1.6% |     0 → 3 | `invokeSpecial(Object, Object, int)`                                                        | `java.lang.invoke.LambdaForm$DMH.0x0000007001377400` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001291800`)

|  Change |  Delta |             % |   Samples | Callee                                  | Location                                             |
| ------: | -----: | ------------: | --------: | --------------------------------------- | ---------------------------------------------------- |
| removed | -1,297 | 100.0% → 0.0% | 1,297 → 0 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |
|     new |   +227 |  0.0% → 97.4% |   0 → 227 | `invokeVirtual(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001097c00` |
|     new |     +3 |   0.0% → 1.3% |     0 → 3 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001030400` |
|     new |     +2 |   0.0% → 0.9% |     0 → 2 | `invokeStatic(Object, int)`             | `java.lang.invoke.DirectMethodHandle$Holder`         |
|     new |     +1 |   0.0% → 0.4% |     0 → 1 | `invoke(Object, Object)`                | `java.lang.invoke.LambdaForm$MH.0x000000700102ac00`  |

##### `invoke(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001326000`)

|  Change | Delta |             % | Samples | Callee                                          | Location                                     |
| ------: | ----: | ------------: | ------: | ----------------------------------------------- | -------------------------------------------- |
| removed |  -572 | 100.0% → 0.0% | 572 → 0 | `invokeSpecial(Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |
|     new |   +12 |  0.0% → 92.3% |  0 → 12 | `invokeStatic(Object, Object, Object)`          | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001378800`)

|  Change | Delta |            % | Samples | Callee                                     | Location                                            |
| ------: | ----: | -----------: | ------: | ------------------------------------------ | --------------------------------------------------- |
| removed |  -245 | 98.0% → 0.0% | 245 → 0 | `reinvoke(Object, Object, Object, long)`   | `java.lang.invoke.LambdaForm$MH.0x0000007001352c00` |
|     new |   +32 | 0.0% → 94.1% |  0 → 32 | `reinvoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001188800` |
| removed |    -3 |  1.2% → 0.0% |   3 → 0 | `invoke(Object, Object, Object, long)`     | `java.lang.invoke.LambdaForm$MH.0x0000007001353400` |
|     new |    +2 |  0.0% → 5.9% |   0 → 2 | `delegate(Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
| removed |    -1 |  0.4% → 0.0% |   1 → 0 | `invoke(Object, Object)`                   | `java.lang.invoke.LambdaForm$MH.0x0000007001124800` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001181800`)

|  Change | Delta |             % | Samples | Callee                                                    | Location                                             |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------- | ---------------------------------------------------- |
| removed |  -238 |  98.3% → 0.0% | 238 → 0 | `invokeVirtual(Object, Object, Object)`                   | `java.lang.invoke.LambdaForm$DMH.0x0000007001097c00` |
|     new |   +31 | 0.0% → 100.0% |  0 → 31 | `invokeInterface(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001095000` |
| removed |    -2 |   0.8% → 0.0% |   2 → 0 | `invoke(Object, Object)`                                  | `java.lang.invoke.LambdaForm$MH.0x000000700102ac00`  |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001182400`)

|  Change | Delta |            % | Samples | Callee                                  | Location                                             |
| ------: | ----: | -----------: | ------: | --------------------------------------- | ---------------------------------------------------- |
| removed |  -187 | 98.4% → 0.0% | 187 → 0 | `invokeVirtual(Object, Object, int)`    | `java.lang.invoke.LambdaForm$DMH.0x0000007001109400` |
| removed |    -3 |  1.6% → 0.0% |   3 → 0 | `invokeSpecial(Object, Object, int)`    | `java.lang.invoke.LambdaForm$DMH.0x00000070013aa400` |
|     new |    +3 | 0.0% → 50.0% |   0 → 3 | `invokeVirtual(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001095800` |
|     new |    +3 | 0.0% → 50.0% |   0 → 3 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070017ebc00`)

|  Change | Delta |             % | Samples | Callee                             | Location                                         |
| ------: | ----: | ------------: | ------: | ---------------------------------- | ------------------------------------------------ |
| removed |  -168 | 100.0% → 0.0% | 168 → 0 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `delegate(Object, Object)`         | `java.lang.invoke.DelegatingMethodHandle$Holder` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001290000`)

| Change | Delta |             % |   Samples | Callee                                     | Location                                            |
| -----: | ----: | ------------: | --------: | ------------------------------------------ | --------------------------------------------------- |
| -20.2% |   -97 | 66.9% → 65.9% | 481 → 384 | `delegate(Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
| -12.8% |   -36 | 39.2% → 42.2% | 282 → 246 | `reinvoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001188800` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010d9800`)

|  Change | Delta |            % | Samples | Callee                                    | Location                                             |
| ------: | ----: | -----------: | ------: | ----------------------------------------- | ---------------------------------------------------- |
| removed |   -96 | 74.4% → 0.0% |  96 → 0 | `invokeSpecial(Object, Object, Object)`   | `java.lang.invoke.LambdaForm$DMH.0x0000007001084000` |
| removed |   -27 | 20.9% → 0.0% |  27 → 0 | `invokeInterface(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001125400` |
| removed |    -6 |  4.7% → 0.0% |   6 → 0 | `invokeVirtual(Object, Object, Object)`   | `java.lang.invoke.DirectMethodHandle$Holder`         |
|     new |    +5 | 0.0% → 83.3% |   0 → 5 | `invokeSpecial(Object, Object, Object)`   | `java.lang.invoke.DirectMethodHandle$Holder`         |
|     new |    +1 | 0.0% → 16.7% |   0 → 1 | `invokeVirtual(Object, Object, Object)`   | `java.lang.invoke.LambdaForm$DMH.0x0000007001095800` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001534c00`)

|  Change | Delta |             % | Samples | Callee                                  | Location                                         |
| ------: | ----: | ------------: | ------: | --------------------------------------- | ------------------------------------------------ |
| removed |  -119 | 100.0% → 0.0% | 119 → 0 | `delegate(Object, Object, Object)`      | `java.lang.invoke.DelegatingMethodHandle$Holder` |
|     new |    +2 | 0.0% → 100.0% |   0 → 2 | `delegate(Object, Object, Object, int)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |

##### `PhaseIterGVN::remove_globally_dead_node` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                     | Location       |
| ------: | ----: | ------------: | ------: | -------------------------- | -------------- |
|  -22.6% |    -7 | 43.1% → 42.9% | 31 → 24 | `Node::replace_edge`       | `libjvm.dylib` |
|   -4.0% |    -1 | 34.7% → 42.9% | 25 → 24 | `Unique_Node_List::remove` | `libjvm.dylib` |
| removed |    -1 |   1.4% → 0.0% |   1 → 0 | `PhiNode::hash`            | `libjvm.dylib` |
| removed |    -1 |   1.4% → 0.0% |   1 → 0 | `Chunk::next_chop`         | `libjvm.dylib` |
| removed |    -1 |   1.4% → 0.0% |   1 → 0 | `DecodeNKlassNode::Opcode` | `libjvm.dylib` |

##### `GraphBuilder::iterate_all_blocks` (`libjvm.dylib`)

|  Change | Delta |              % |   Samples | Callee                                      | Location                   |
| ------: | ----: | -------------: | --------: | ------------------------------------------- | -------------------------- |
|   -7.6% |   -13 | 98.8% → 100.0% | 170 → 157 | `GraphBuilder::iterate_bytecodes_for_block` | `libjvm.dylib`             |
| removed |    -2 |    1.2% → 0.0% |     2 → 0 | `ValueStack::ValueStack`                    | `libjvm.dylib`             |
|     new |    +2 |    0.0% → 1.3% |     0 → 2 | `_platform_memset`                          | `libsystem_platform.dylib` |
| removed |    -1 |    0.6% → 0.0% |     1 → 0 | `GraphBuilder::setup_osr_entry_block`       | `libjvm.dylib`             |
|     new |    +1 |    0.0% → 0.6% |     0 → 1 | `ValueMap::kill_all`                        | `libjvm.dylib`             |

##### `GraphBuilder::iterate_bytecodes_for_block` (`libjvm.dylib`)

|  Change | Delta |             % |   Samples | Callee                        | Location       |
| ------: | ----: | ------------: | --------: | ----------------------------- | -------------- |
|  -70.0% |   -14 |  11.7% → 3.8% |    20 → 6 | `GraphBuilder::method_return` | `libjvm.dylib` |
|   -7.5% |   -12 | 93.6% → 94.3% | 160 → 148 | `GraphBuilder::invoke`        | `libjvm.dylib` |
|  -50.0% |    -5 |   5.8% → 3.2% |    10 → 5 | `GraphBuilder::check_cast`    | `libjvm.dylib` |
|  +16.7% |    +3 | 10.5% → 13.4% |   18 → 21 | `GraphBuilder::access_field`  | `libjvm.dylib` |
| +100.0% |    +3 |   1.8% → 3.8% |     3 → 6 | `BlockBegin::try_merge`       | `libjvm.dylib` |

##### `GraphBuilder::try_inline_full` (`libjvm.dylib`)

|  Change | Delta |             % |   Samples | Callee                             | Location        |
| ------: | ----: | ------------: | --------: | ---------------------------------- | --------------- |
|   -3.9% |    -5 | 88.8% → 94.6% | 127 → 122 | `GraphBuilder::iterate_all_blocks` | `libjvm.dylib`  |
|  -19.0% |    -4 | 14.7% → 13.2% |   21 → 17 | `GraphBuilder::push_scope`         | `libjvm.dylib`  |
|   +6.3% |    +1 | 11.2% → 13.2% |   16 → 17 | `ciMethod::ensure_method_data`     | `libjvm.dylib`  |
| removed |    -1 |   0.7% → 0.0% |     1 → 0 | `BlockBegin::operator new`         | `libjvm.dylib`  |
|  -33.3% |    -1 |   2.1% → 1.6% |     3 → 2 | `tlv_get_addr`                     | `libdyld.dylib` |

##### `Compilation::build_hir` (`libjvm.dylib`)

|  Change | Delta |             % |   Samples | Callee                                       | Location        |
| ------: | ----: | ------------: | --------: | -------------------------------------------- | --------------- |
|   -7.1% |   -13 | 81.7% → 81.0% | 183 → 170 | `IR::IR`                                     | `libjvm.dylib`  |
|  +22.2% |    +4 |  8.0% → 10.5% |   18 → 22 | `GlobalValueNumbering::GlobalValueNumbering` | `libjvm.dylib`  |
|  -66.7% |    -2 |   1.3% → 0.5% |     3 → 1 | `IR::split_critical_edges`                   | `libjvm.dylib`  |
|  -28.6% |    -2 |   3.1% → 2.4% |     7 → 5 | `IR::eliminate_null_checks`                  | `libjvm.dylib`  |
| removed |    -2 |   0.9% → 0.0% |     2 → 0 | `tlv_get_addr`                               | `libdyld.dylib` |

##### `GraphBuilder::method_return` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                          | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------- | -------------- |
| removed |    -3 |  15.0% → 0.0% |   3 → 0 | `GraphBuilder::append_with_bci` | `libjvm.dylib` |
|  -33.3% |    -2 | 30.0% → 66.7% |   6 → 4 | `ciMethod::get_method_at_bci`   | `libjvm.dylib` |
| removed |    -2 |  10.0% → 0.0% |   2 → 0 | `Goto::Goto`                    | `libjvm.dylib` |
| removed |    -2 |  10.0% → 0.0% |   2 → 0 | `ValueStack::ValueStack`        | `libjvm.dylib` |
| removed |    -1 |   5.0% → 0.0% |   1 → 0 | `ObjectType::base`              | `libjvm.dylib` |

##### `PhaseIterGVN::subsume_node` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                    | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------------------- | -------------- |
|  -27.0% |   -17 | 74.1% → 63.9% | 63 → 46 | `PhaseIterGVN::remove_globally_dead_node` | `libjvm.dylib` |
|     new |    +6 |   0.0% → 8.3% |   0 → 6 | `PhaseIterGVN::rehash_node_delayed`       | `libjvm.dylib` |
|     new |    +2 |   0.0% → 2.8% |   0 → 2 | `Node::out_grow`                          | `libjvm.dylib` |
|     new |    +2 |   0.0% → 2.8% |   0 → 2 | `Node::del_req`                           | `libjvm.dylib` |
| removed |    -1 |   1.2% → 0.0% |   1 → 0 | `AddNode::hash`                           | `libjvm.dylib` |

##### `ciMethod::find_monomorphic_target` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                      | Location                  |
| ------: | ----: | ------------: | ------: | ------------------------------------------- | ------------------------- |
|  -44.4% |    -8 | 75.0% → 90.9% | 18 → 10 | `Dependencies::find_unique_concrete_method` | `libjvm.dylib`            |
| removed |    -2 |   8.3% → 0.0% |   2 → 0 | `Mutex::lock`                               | `libjvm.dylib`            |
| removed |    -1 |   4.2% → 0.0% |   1 → 0 | `ciInstanceKlass::is_leaf_type`             | `libjvm.dylib`            |
| removed |    -1 |   4.2% → 0.0% |   1 → 0 | `_pthread_mutex_firstfit_unlock_slow`       | `libsystem_pthread.dylib` |

##### `GraphBuilder::GraphBuilder` (`libjvm.dylib`)

|  Change | Delta |             % |   Samples | Callee                                      | Location       |
| ------: | ----: | ------------: | --------: | ------------------------------------------- | -------------- |
|   -8.7% |   -15 | 94.0% → 92.4% | 172 → 157 | `GraphBuilder::iterate_all_blocks`          | `libjvm.dylib` |
|  +14.3% |    +1 |   3.8% → 4.7% |     7 → 8 | `BlockListBuilder::BlockListBuilder`        | `libjvm.dylib` |
|  +50.0% |    +1 |   1.1% → 1.8% |     2 → 3 | `BlockBegin::iterate_preorder`              | `libjvm.dylib` |
| removed |    -1 |   0.5% → 0.0% |     1 → 0 | `GraphBuilder::iterate_bytecodes_for_block` | `libjvm.dylib` |
|     new |    +1 |   0.0% → 0.6% |     0 → 1 | `GraphBuilder::state_at_entry`              | `libjvm.dylib` |

##### `GraphBuilder::try_inline` (`libjvm.dylib`)

|  Change | Delta |              % |   Samples | Callee                                   | Location       |
| ------: | ----: | -------------: | --------: | ---------------------------------------- | -------------- |
|   -9.8% |   -14 | 100.0% → 98.5% | 143 → 129 | `GraphBuilder::try_inline_full`          | `libjvm.dylib` |
|   -5.8% |    -6 |  72.0% → 74.0% |  103 → 97 | `GraphBuilder::try_method_handle_inline` | `libjvm.dylib` |
| removed |    -1 |    0.7% → 0.0% |     1 → 0 | `DirectiveSet::should_not_inline`        | `libjvm.dylib` |
|     new |    +1 |    0.0% → 0.8% |     0 → 1 | `ciMethod::has_jsrs`                     | `libjvm.dylib` |
|     new |    +1 |    0.0% → 0.8% |     0 → 1 | `Instruction::exact_type`                | `libjvm.dylib` |

##### `GraphBuilder::invoke` (`libjvm.dylib`)

|  Change | Delta |             % |   Samples | Callee                              | Location       |
| ------: | ----: | ------------: | --------: | ----------------------------------- | -------------- |
|   -8.4% |   -12 | 89.4% → 88.5% | 143 → 131 | `GraphBuilder::try_inline`          | `libjvm.dylib` |
|  +32.0% |    +8 | 15.6% → 22.3% |   25 → 33 | `ciBytecodeStream::get_method`      | `libjvm.dylib` |
|  -50.0% |    -3 |   3.8% → 2.0% |     6 → 3 | `ciMethod::find_monomorphic_target` | `libjvm.dylib` |
| removed |    -3 |   1.9% → 0.0% |     3 → 0 | `GraphBuilder::append_with_bci`     | `libjvm.dylib` |
|     new |    +2 |   0.0% → 1.4% |     0 → 2 | `ciMethod::resolve_invoke`          | `libjvm.dylib` |

##### `ciEnv::get_klass_by_index_impl` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                | Location        |
| ------: | ----: | ------------: | ------: | ------------------------------------- | --------------- |
|  -46.7% |    -7 | 45.5% → 36.4% |  15 → 8 | `ciObjectFactory::get_symbol`         | `libjvm.dylib`  |
|  -44.4% |    -4 | 27.3% → 22.7% |   9 → 5 | `ciObjectFactory::get_metadata`       | `libjvm.dylib`  |
|  -50.0% |    -1 |   6.1% → 4.5% |   2 → 1 | `tlv_get_addr`                        | `libdyld.dylib` |
|  +20.0% |    +1 | 15.2% → 27.3% |   5 → 6 | `ciEnv::get_klass_by_name_impl`       | `libjvm.dylib`  |
| removed |    -1 |   3.0% → 0.0% |   1 → 0 | `ciObjectFactory::get_unloaded_klass` | `libjvm.dylib`  |

##### `ciTypeFlow::flow_types` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                         | Location                   |
| ------: | ----: | ------------: | ------: | ------------------------------ | -------------------------- |
|  -15.4% |    -6 | 83.0% → 91.7% | 39 → 33 | `ciTypeFlow::df_flow_types`    | `libjvm.dylib`             |
|  -66.7% |    -2 |   6.4% → 2.8% |   3 → 1 | `ciTypeFlow::clone_loop_heads` | `libjvm.dylib`             |
| removed |    -2 |   4.3% → 0.0% |   2 → 0 | `ciTypeFlow::get_start_state`  | `libjvm.dylib`             |
| removed |    -1 |   2.1% → 0.0% |   1 → 0 | `_platform_bzero`              | `libsystem_platform.dylib` |
| removed |    -1 |   2.1% → 0.0% |   1 → 0 | `_platform_memset`             | `libsystem_platform.dylib` |

##### `ciTypeFlow::do_flow` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee                   | Location       |
| -----: | ----: | -----: | ------: | ------------------------ | -------------- |
| -23.4% |   -11 | 100.0% | 47 → 36 | `ciTypeFlow::flow_types` | `libjvm.dylib` |

##### `DebugInformationRecorder::serialize_scope_values` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                                                                                                                                                   | Location                   |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| -28.6% |    -4 | 50.0% → 58.8% | 14 → 10 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `libjvm.dylib`             |
| -75.0% |    -3 |  14.3% → 5.9% |   4 → 1 | `LocationValue::write_on`                                                                                                                                | `libjvm.dylib`             |
| -50.0% |    -1 |   7.1% → 5.9% |   2 → 1 | `ConstantOopWriteValue::write_on`                                                                                                                        | `libjvm.dylib`             |
| -33.3% |    -1 | 10.7% → 11.8% |   3 → 2 | `_platform_memcmp`                                                                                                                                       | `libsystem_platform.dylib` |
|    new |    +1 |   0.0% → 5.9% |   0 → 1 | `Arena::grow`                                                                                                                                            | `libjvm.dylib`             |

##### `CompilationPolicy::event` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                     | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------ | -------------- |
|  -55.6% |   -10 | 75.0% → 61.5% |  18 → 8 | `CompileBroker::compile_method`            | `libjvm.dylib` |
|  -33.3% |    -1 | 12.5% → 15.4% |   3 → 2 | `CompilationPolicy::call_event`            | `libjvm.dylib` |
| removed |    -1 |   4.2% → 0.0% |   1 → 0 | `DirectivesStack::release`                 | `libjvm.dylib` |
| removed |    -1 |   4.2% → 0.0% |   1 → 0 | `InvocationCounter::set_carry_on_overflow` | `libjvm.dylib` |
|     new |    +1 |   0.0% → 7.7% |   0 → 1 | `CompilationPolicy::create_mdo`            | `libjvm.dylib` |

##### `ciMethod::get_flow_analysis` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                   | Location       |
| -----: | ----: | ------------: | ------: | ------------------------ | -------------- |
| -23.4% |   -11 | 95.9% → 92.3% | 47 → 36 | `ciTypeFlow::do_flow`    | `libjvm.dylib` |
| +50.0% |    +1 |   4.1% → 7.7% |   2 → 3 | `ciTypeFlow::ciTypeFlow` | `libjvm.dylib` |

##### `GraphKit::kill_dead_locals` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                            | Location       |
| -----: | ----: | ------------: | ------: | --------------------------------- | -------------- |
| -71.4% |    -5 | 53.8% → 66.7% |   7 → 2 | `ciMethod::liveness_at_bci`       | `libjvm.dylib` |
| -83.3% |    -5 | 46.2% → 33.3% |   6 → 1 | `MethodLiveness::get_liveness_at` | `libjvm.dylib` |

##### `java_lang_Throwable::fill_in_stack_trace` (`libjvm.dylib`)

| Change | Delta |             % |   Samples | Callee                                       | Location       |
| -----: | ----: | ------------: | --------: | -------------------------------------------- | -------------- |
| -14.0% |   -25 | 96.2% → 93.9% | 178 → 153 | `java_lang_Throwable::fill_in_stack_trace`   | `libjvm.dylib` |
| -51.9% |   -14 |  14.6% → 8.0% |   27 → 13 | `frame::sender_for_compiled_frame`           | `libjvm.dylib` |
| -62.5% |   -10 |   8.6% → 3.7% |    16 → 6 | `frame::sender_raw`                          | `libjvm.dylib` |
| -50.0% |    -3 |   3.2% → 1.8% |     6 → 3 | `frame::sender_for_interpreter_frame`        | `libjvm.dylib` |
| +60.0% |    +3 |   2.7% → 4.9% |     5 → 8 | `Continuation::is_continuation_enterSpecial` | `libjvm.dylib` |

##### `JVM_FillInStackTrace` (`libjvm.dylib`)

| Change | Delta |             % |   Samples | Callee                                     | Location       |
| -----: | ----: | ------------: | --------: | ------------------------------------------ | -------------- |
| -11.9% |   -22 | 99.5% → 98.2% | 185 → 163 | `java_lang_Throwable::fill_in_stack_trace` | `libjvm.dylib` |
|    new |    +1 |   0.0% → 0.6% |     0 → 1 | `Universe::should_fill_in_stack_trace`     | `libjvm.dylib` |
|    new |    +1 |   0.0% → 0.6% |     0 → 1 | `Chunk::next_chop`                         | `libjvm.dylib` |

##### `Java_java_lang_Throwable_fillInStackTrace` (`libjava.dylib`)

| Change | Delta |      % |   Samples | Callee                 | Location       |
| -----: | ----: | -----: | --------: | ---------------------- | -------------- |
| -10.8% |   -20 | 100.0% | 186 → 166 | `JVM_FillInStackTrace` | `libjvm.dylib` |

##### `KlassCleaningTask::work` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee                                                | Location       |
| ------: | ----: | -----------: | ------: | ----------------------------------------------------- | -------------- |
| removed |    -9 | 56.3% → 0.0% |   9 → 0 | `ClassLoaderDataGraphKlassIteratorAtomic::next_klass` | `libjvm.dylib` |
| removed |    -7 | 43.8% → 0.0% |   7 → 0 | `InstanceKlass::clean_weak_instanceklass_links`       | `libjvm.dylib` |

##### `stale_jmethodID` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                             | Location                                         |
| ------: | ----: | ------------: | ------: | -------------------------------------------------- | ------------------------------------------------ |
|  -42.1% |    -8 | 52.8% → 50.0% | 19 → 11 | `delegate(Object, Object, Object)`                 | `java.lang.invoke.DelegatingMethodHandle$Holder` |
|  -40.0% |    -2 | 13.9% → 13.6% |   5 → 3 | `delegate(Object, Object, Object, Object)`         | `java.lang.invoke.DelegatingMethodHandle$Holder` |
| removed |    -1 |   2.8% → 0.0% |   1 → 0 | `I2C/C2I adapters(0xba)`                           | `<unknown>`                                      |
| +100.0% |    +1 |   2.8% → 9.1% |   1 → 2 | `delegate(Object, Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |
| removed |    -1 |   2.8% → 0.0% |   1 → 0 | `counter_overflow Runtime1 stub`                   | `<unknown>`                                      |

##### `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                                                                                                 | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------ | -------------- |
| -26.2% |   -11 | 73.7% → 70.5% | 42 → 31 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` | `libjvm.dylib` |
| -33.3% |    -3 | 15.8% → 13.6% |   9 → 6 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<ObjArrayKlass, narrowOop>` | `libjvm.dylib` |
| -50.0% |    -1 |   3.5% → 2.3% |   2 → 1 | `void InstanceRefKlass::oop_oop_iterate<narrowOop, G1RebuildRemSetClosure>`                            | `libjvm.dylib` |
|    new |    +1 |   0.0% → 2.3% |   0 → 1 | `void InstanceMirrorKlass::oop_oop_iterate<narrowOop, G1RebuildRemSetClosure>`                         | `libjvm.dylib` |

##### `IRScope::IRScope` (`libjvm.dylib`)

|  Change | Delta |           % |   Samples | Callee                       | Location        |
| ------: | ----: | ----------: | --------: | ---------------------------- | --------------- |
|   -7.1% |   -13 |      100.0% | 183 → 170 | `GraphBuilder::GraphBuilder` | `libjvm.dylib`  |
|     new |    +5 | 0.0% → 2.9% |     0 → 5 | `XHandlers::XHandlers`       | `libjvm.dylib`  |
| removed |    -1 | 0.5% → 0.0% |     1 → 0 | `tlv_get_addr`               | `libdyld.dylib` |

##### `IR::IR` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Callee             | Location       |
| -----: | ----: | -----: | --------: | ------------------ | -------------- |
|  -7.1% |   -13 | 100.0% | 183 → 170 | `IRScope::IRScope` | `libjvm.dylib` |

##### `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                           | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------- | -------------- |
|  -50.0% |    -9 | 41.9% → 28.1% |  18 → 9 | `G1CardSet::add_card`            | `libjvm.dylib` |
| removed |    -1 |   2.3% → 0.0% |   1 → 0 | `G1CardSetHashTable::get_or_add` | `libjvm.dylib` |

##### `HeapRegionManager::par_iterate` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                                                                             | Location       |
| ------: | ----: | -------------: | ------: | ---------------------------------------------------------------------------------- | -------------- |
|  -16.9% |   -10 | 98.3% → 100.0% | 59 → 49 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_region` | `libjvm.dylib` |
| removed |    -1 |    1.7% → 0.0% |   1 → 0 | `G1BulkUnregisterNMethodTask::UnregisterNMethodsHeapRegionClosure::do_heap_region` | `libjvm.dylib` |

##### `frame::sender_for_compiled_frame` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee                                   | Location       |
| ------: | ----: | -----------: | ------: | ---------------------------------------- | -------------- |
| +300.0% |    +3 | 3.4% → 22.2% |   1 → 4 | `ImmutableOopMap::update_register_map`   | `libjvm.dylib` |
|     new |    +1 |  0.0% → 5.6% |   0 → 1 | `ImmutableOopMapSet::find_map_at_offset` | `libjvm.dylib` |

##### `Parse::do_exits` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                           | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------- | -------------- |
|  -71.4% |    -5 | 46.7% → 40.0% |   7 → 2 | `PhaseGVN::transform_no_reclaim` | `libjvm.dylib` |
| removed |    -2 |  13.3% → 0.0% |   2 → 0 | `GraphKit::clone_map`            | `libjvm.dylib` |
| removed |    -2 |  13.3% → 0.0% |   2 → 0 | `GraphKit::use_exception_state`  | `libjvm.dylib` |
| removed |    -1 |   6.7% → 0.0% |   1 → 0 | `ciMethod::is_initializer`       | `libjvm.dylib` |
| removed |    -1 |   6.7% → 0.0% |   1 → 0 | `Node::Node`                     | `libjvm.dylib` |

##### `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_to_pb` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                                                                                                 | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------ | -------------- |
| -23.2% |   -13 | 96.6% → 89.6% | 56 → 43 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object`                               | `libjvm.dylib` |
|    new |    +1 |   0.0% → 2.1% |   0 → 1 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<ObjArrayKlass, narrowOop>` | `libjvm.dylib` |

##### `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_region` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                                                                            | Location       |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------------------------------- | -------------- |
| -17.2% |   -10 | 98.3% → 98.0% | 58 → 48 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_to_pb` | `libjvm.dylib` |

##### `G1RebuildRSAndScrubTask::work` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee                           | Location       |
| -----: | ----: | -----: | ------: | -------------------------------- | -------------- |
| -16.9% |   -10 | 100.0% | 59 → 49 | `HeapRegionManager::par_iterate` | `libjvm.dylib` |

##### `G1CardSet::add_card` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                           | Location        |
| ------: | ----: | ------------: | ------: | -------------------------------- | --------------- |
|  -43.8% |    -7 | 76.2% → 81.8% |  16 → 9 | `G1CardSet::add_to_howl`         | `libjvm.dylib`  |
| removed |    -1 |   4.8% → 0.0% |   1 → 0 | `tlv_get_addr`                   | `libdyld.dylib` |
| removed |    -1 |   4.8% → 0.0% |   1 → 0 | `G1CardSetHashTable::get_or_add` | `libjvm.dylib`  |
|     new |    +1 |   0.0% → 9.1% |   0 → 1 | `G1CardSet::add_to_array`        | `libjvm.dylib`  |

##### `frame::sender_raw` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                     | Location       |
| -----: | ----: | ------------: | ------: | -------------------------- | -------------- |
| -50.0% |    -1 | 12.5% → 16.7% |   2 → 1 | `CodeBlob::is_upcall_stub` | `libjvm.dylib` |

##### `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`)

|  Change | Delta |           % |   Samples | Callee                                   | Location                                            |
| ------: | ----: | ----------: | --------: | ---------------------------------------- | --------------------------------------------------- |
|   -8.5% |   -23 |       99.6% | 270 → 247 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
| removed |    -1 | 0.4% → 0.0% |     1 → 0 | `linkToCallSite(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000070010c8800` |

##### `isRuleSuppressed(Rule)` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|  Change | Delta |             % |   Samples | Callee      | Location                                          |
| ------: | ----: | ------------: | --------: | ----------- | ------------------------------------------------- |
|   -3.5% |    -8 | 97.0% → 98.7% | 229 → 221 | `init()`    | `org.codenarc.analyzer.SuppressionAnalyzer`       |
| removed |    -1 |   0.4% → 0.0% |     1 → 0 | `getName()` | `org.codenarc.rule.basic.DuplicateMapKeyRule`     |
| removed |    -1 |   0.4% → 0.0% |     1 → 0 | `getName()` | `org.codenarc.rule.naming.InterfaceNameRule`      |
| removed |    -1 |   0.4% → 0.0% |     1 → 0 | `getName()` | `org.codenarc.rule.groovyism.GStringAsMapKeyRule` |
| removed |    -1 |   0.4% → 0.0% |     1 → 0 | `getName()` | `org.codenarc.rule.design.StatelessSingletonRule` |

##### `getText()` (`org.codenarc.source.SourceFile`)

| Change | Delta |      % | Samples | Callee                           | Location                           |
| -----: | ----: | -----: | ------: | -------------------------------- | ---------------------------------- |
| -78.6% |   -11 | 100.0% |  14 → 3 | `linkToCallSite(Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `doCall(Object)` (`org.gmetrics.metric.AbstractMethodMetric$_addMethodsToMetricResults_closure4`)

| Change | Delta |              % | Samples | Callee                                      | Location                                                |
| -----: | ----: | -------------: | ------: | ------------------------------------------- | ------------------------------------------------------- |
| -52.0% |   -13 | 100.0% → 80.0% | 25 → 12 | `callCurrent(GroovyObject, Object, Object)` | `org.codehaus.groovy.runtime.callsite.AbstractCallSite` |
|    new |    +2 |   0.0% → 13.3% |   0 → 2 | `callConstructor(Object, Object)`           | `org.codehaus.groovy.runtime.callsite.AbstractCallSite` |
|    new |    +1 |    0.0% → 6.7% |   0 → 1 | `call(Object, Object, Object)`              | `org.codehaus.groovy.runtime.callsite.AbstractCallSite` |

##### `addMethodsToMetricResults(SourceCode, ClassNode, Map)` (`org.gmetrics.metric.AbstractMethodMetric`)

| Change | Delta |      % | Samples | Callee                 | Location                                                |
| -----: | ----: | -----: | ------: | ---------------------- | ------------------------------------------------------- |
| -40.0% |   -10 | 100.0% | 25 → 15 | `call(Object, Object)` | `org.codehaus.groovy.runtime.callsite.AbstractCallSite` |

##### `init()` (`org.codenarc.source.AbstractSourceCode`)

| Change | Delta |             % |   Samples | Callee                                                           | Location                           |
| -----: | ----: | ------------: | --------: | ---------------------------------------------------------------- | ---------------------------------- |
| -46.7% |    -7 |   6.6% → 3.6% |    15 → 8 | `linkToCallSite(Object, Object)`                                 | `java.lang.invoke.Invokers$Holder` |
|  -1.0% |    -2 | 86.8% → 89.1% | 198 → 196 | `linkToCallSite(Object, Object, Object)`                         | `java.lang.invoke.Invokers$Holder` |
| +33.3% |    +1 |   1.3% → 1.8% |     3 → 4 | `linkToCallSite(Object, Object, Object, Object)`                 | `java.lang.invoke.Invokers$Holder` |
|  -8.3% |    -1 |   5.3% → 5.0% |   12 → 11 | `linkToCallSite(Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|  Change | Delta |             % |   Samples | Callee                                    | Location                                    |
| ------: | ----: | ------------: | --------: | ----------------------------------------- | ------------------------------------------- |
|   -3.9% |    -9 | 99.6% → 99.1% | 228 → 219 | `getAst()`                                | `org.codenarc.source.AbstractSourceCode`    |
| +100.0% |    +1 |   0.4% → 0.9% |     1 → 2 | `getSuppressionsByLineNumber(ModuleNode)` | `org.codenarc.analyzer.SuppressionAnalyzer` |

##### `calculate(MethodNode, SourceCode)` (`org.gmetrics.metric.abc.AbcMetric`)

|  Change | Delta |             % | Samples | Callee                                                    | Location                                                 |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------- | -------------------------------------------------------- |
|  -62.5% |    -5 | 42.1% → 27.3% |   8 → 3 | `call(Object, Object)`                                    | `org.codehaus.groovy.ast.GroovyClassVisitor$visitMethod` |
|  -66.7% |    -4 | 31.6% → 18.2% |   6 → 2 | `callConstructor(Object, Object, Object, Object, Object)` | `org.codehaus.groovy.runtime.callsite.AbstractCallSite`  |
|     new |    +2 |  0.0% → 18.2% |   0 → 2 | `callConstructor(Object, Object)`                         | `org.codehaus.groovy.runtime.callsite.AbstractCallSite`  |
| removed |    -1 |   5.3% → 0.0% |   1 → 0 | `call(Object, Object)`                                    | `org.codehaus.groovy.runtime.callsite.AbstractCallSite`  |
| removed |    -1 |   5.3% → 0.0% |   1 → 0 | `castToType(Object, Class)`                               | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter`      |

##### `getAst()` (`org.codenarc.source.AbstractSourceCode`)

| Change | Delta |      % |   Samples | Callee                           | Location                           |
| -----: | ----: | -----: | --------: | -------------------------------- | ---------------------------------- |
|  -3.1% |    -7 | 100.0% | 229 → 222 | `linkToCallSite(Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `visitClass(ClassNode)` (`org.codenarc.rule.AbstractMethodCallExpressionVisitor`)

|  Change | Delta |            % | Samples | Callee                                            | Location                                                             |
| ------: | ----: | -----------: | ------: | ------------------------------------------------- | -------------------------------------------------------------------- |
|  -66.7% |    -4 | 20.0% → 8.7% |   6 → 2 | `visitMethodCallExpression(MethodCallExpression)` | `org.codenarc.rule.groovyism.ExplicitCallToMethodAstVisitor`         |
| +300.0% |    +3 | 3.3% → 17.4% |   1 → 4 | `visitMethodCallExpression(MethodCallExpression)` | `org.codenarc.rule.basic.ClassForNameAstVisitor`                     |
|  -66.7% |    -2 | 10.0% → 4.3% |   3 → 1 | `getMethodCallExpressions()`                      | `org.codenarc.source.AbstractSourceCode`                             |
| +200.0% |    +2 | 3.3% → 13.0% |   1 → 3 | `visitMethodCallExpression(MethodCallExpression)` | `org.codenarc.rule.basic.BooleanGetBooleanAstVisitor`                |
|  -66.7% |    -2 | 10.0% → 4.3% |   3 → 1 | `visitMethodCallExpression(MethodCallExpression)` | `org.codenarc.rule.groovyism.ClosureAsLastMethodParameterAstVisitor` |

##### `visitBinaryExpression(BinaryExpression)` (`org.gmetrics.metric.abc.AbcAstVisitor`)

|  Change | Delta |              % | Samples | Callee                                                        | Location                                                |
| ------: | ----: | -------------: | ------: | ------------------------------------------------------------- | ------------------------------------------------------- |
| removed |    -5 |   55.6% → 0.0% |   5 → 0 | `invokeMethodOnSuperN(Class, GroovyObject, String, Object[])` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter`     |
|  -66.7% |    -4 | 66.7% → 100.0% |   6 → 2 | `callCurrent(GroovyObject, Object)`                           | `org.codehaus.groovy.runtime.callsite.AbstractCallSite` |

##### `visitDeclarationExpression(DeclarationExpression)` (`org.codenarc.rule.groovyism.AssignCollectionUniqueAstVisitor`)

| Change | Delta |      % | Samples | Callee                                   | Location                           |
| -----: | ----: | -----: | ------: | ---------------------------------------- | ---------------------------------- |
| -70.0% |    -7 | 100.0% |  10 → 3 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `getNonStaticImportsSortedByLineNumber(SourceCode)` (`org.codenarc.util.ImportUtil`)

|  Change | Delta |              % | Samples | Callee                                           | Location                           |
| ------: | ----: | -------------: | ------: | ------------------------------------------------ | ---------------------------------- |
|  -23.1% |    -3 | 76.5% → 100.0% | 13 → 10 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
| removed |    -2 |   11.8% → 0.0% |   2 → 0 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder` |
| removed |    -2 |   11.8% → 0.0% |   2 → 0 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.Invokers$Holder` |

##### `super$3$visitMethod(MethodNode)` (`org.gmetrics.metric.abc.AbcAstVisitor`)

| Change | Delta |      % | Samples | Callee                    | Location                                          |
| -----: | ----: | -----: | ------: | ------------------------- | ------------------------------------------------- |
| -66.7% |    -6 | 100.0% |   9 → 3 | `visitMethod(MethodNode)` | `org.codehaus.groovy.ast.ClassCodeVisitorSupport` |

##### `visitMethod(MethodNode)` (`org.gmetrics.metric.abc.AbcAstVisitor`)

| Change | Delta |      % | Samples | Callee                                                        | Location                                            |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------- | --------------------------------------------------- |
| -66.7% |    -6 | 100.0% |   9 → 3 | `invokeMethodOnSuperN(Class, GroovyObject, String, Object[])` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |

##### `isMatchingUniqueCall(Expression)` (`org.codenarc.rule.groovyism.AssignCollectionUniqueAstVisitor`)

| Change | Delta |              % | Samples | Callee                                                | Location                                            |
| -----: | ----: | -------------: | ------: | ----------------------------------------------------- | --------------------------------------------------- |
| -83.3% |    -5 | 85.7% → 100.0% |   6 → 1 | `linkToCallSite(Object, Object, Object, int, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001348400` |

##### `isChainedUnique(Expression)` (`org.codenarc.rule.groovyism.AssignCollectionUniqueAstVisitor`)

|  Change | Delta |              % | Samples | Callee                                   | Location                                            |
| ------: | ----: | -------------: | ------: | ---------------------------------------- | --------------------------------------------------- |
|  -62.5% |    -5 | 88.9% → 100.0% |   8 → 3 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
| removed |    -1 |   11.1% → 0.0% |   1 → 0 | `linkToCallSite(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000070010c8800` |

##### `visitClosureExpression(ClosureExpression)` (`org.codenarc.rule.naming.ParameterNameAstVisitor`)

|  Change | Delta |            % | Samples | Callee                                                        | Location                                            |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------- | --------------------------------------------------- |
| removed |    -2 | 33.3% → 0.0% |   2 → 0 | `linkToCallSite(Object, Object, Object, Object)`              | `java.lang.invoke.Invokers$Holder`                  |
| removed |    -1 | 16.7% → 0.0% |   1 → 0 | `InterpreterRuntime::resolve_from_cache`                      | `libjvm.dylib`                                      |
| removed |    -1 | 16.7% → 0.0% |   1 → 0 | `invokeMethodOnSuperN(Class, GroovyObject, String, Object[])` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |
| removed |    -1 | 16.7% → 0.0% |   1 → 0 | `linkToCallSite(Object, Object)`                              | `java.lang.invoke.LambdaForm$MH.0x00000070010c8800` |
| removed |    -1 | 16.7% → 0.0% |   1 → 0 | `linkToCallSite(Object, Object, Object)`                      | `java.lang.invoke.Invokers$Holder`                  |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.imports.UnnecessaryGroovyImportRule`)

| Change | Delta |              % | Samples | Callee                                   | Location                           |
| -----: | ----: | -------------: | ------: | ---------------------------------------- | ---------------------------------- |
| -63.6% |    -7 | 100.0% → 80.0% |  11 → 4 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|    new |    +1 |   0.0% → 20.0% |   0 → 1 | `linkToCallSite(Object, Object)`         | `java.lang.invoke.Invokers$Holder` |

##### `visitBlockStatement(BlockStatement)` (`org.codenarc.rule.unnecessary.UnnecessaryObjectReferencesAstVisitor`)

|  Change | Delta |             % | Samples | Callee                                                        | Location                                            |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------- | --------------------------------------------------- |
|  -42.9% |    -3 | 63.6% → 80.0% |   7 → 4 | `linkToCallSite(Object, Object, Object)`                      | `java.lang.invoke.Invokers$Holder`                  |
|  -75.0% |    -3 | 36.4% → 20.0% |   4 → 1 | `linkToCallSite(Object, Object)`                              | `java.lang.invoke.Invokers$Holder`                  |
| removed |    -1 |   9.1% → 0.0% |   1 → 0 | `invokeMethodOnSuperN(Class, GroovyObject, String, Object[])` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |

##### `I2C/C2I adapters(0xbb)` (`<unknown>`)

| Change | Delta |            % | Samples | Callee                                  | Location       |
| -----: | ----: | -----------: | ------: | --------------------------------------- | -------------- |
|    new |    +1 | 0.0% → 11.1% |   0 → 1 | `SharedRuntime::fixup_callers_callsite` | `libjvm.dylib` |

##### `I2C/C2I adapters(0xbab)` (`<unknown>`)

|  Change | Delta |            % | Samples | Callee                                  | Location       |
| ------: | ----: | -----------: | ------: | --------------------------------------- | -------------- |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `SharedRuntime::fixup_callers_callsite` | `libjvm.dylib` |

##### `I2C/C2I adapters(0xbbaa)` (`<unknown>`)

| Change | Delta |             % | Samples | Callee                                  | Location       |
| -----: | ----: | ------------: | ------: | --------------------------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `SharedRuntime::fixup_callers_callsite` | `libjvm.dylib` |

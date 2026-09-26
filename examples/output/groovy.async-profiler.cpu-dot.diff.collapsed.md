# Sampling profile diff

Collected 5,942 samples → 5,727 samples (-215 samples, -3.6%).

| Category          | Change | Delta |             % |       Samples |
| ----------------- | -----: | ----: | ------------: | ------------: |
| Compiler          |  -4.5% |  -116 | 43.5% → 43.1% | 2,587 → 2,471 |
| Native            |  -2.7% |   -45 | 28.0% → 28.2% | 1,662 → 1,617 |
| Standard library  |  -2.5% |   -38 | 25.8% → 26.1% | 1,532 → 1,494 |
| Ours              | -29.6% |   -29 |   1.6% → 1.2% |       98 → 69 |
| JIT               | +23.6% |   +13 |   0.9% → 1.2% |       55 → 68 |
| Garbage collector | +25.0% |    +1 |          0.1% |         4 → 5 |
| Unknown           | -25.0% |    -1 |          0.1% |         4 → 3 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |            % |   Samples | Function                                                                 | Location                                               |
| ------: | ----: | -----------: | --------: | ------------------------------------------------------------------------ | ------------------------------------------------------ |
|     new |   +32 |  0.0% → 0.6% |    0 → 32 | `collector`                                                              | `java.lang.invoke.LambdaForm$MH.0x000000a001031800`    |
|     new |   +27 |  0.0% → 0.5% |    0 → 27 | `invokeStatic`                                                           | `java.lang.invoke.LambdaForm$DMH.0x000000a001088800`   |
|  +20.0% |   +20 |  1.7% → 2.1% | 100 → 120 | `PhaseChaitin::Split`                                                    | `<unknown>`                                            |
|  +73.9% |   +17 |  0.4% → 0.7% |   23 → 40 | `__psynch_mutexwait`                                                     | `<unknown>`                                            |
|     new |   +15 |  0.0% → 0.3% |    0 → 15 | `collector`                                                              | `java.lang.invoke.LambdaForm$MH.0x000000a0010a1000`    |
|  +23.2% |   +13 |  0.9% → 1.2% |   56 → 69 | `newInstance`                                                            | `java.lang.reflect.Array`                              |
|  +76.5% |   +13 |  0.3% → 0.5% |   17 → 30 | `itable stub`                                                            | `<unknown>`                                            |
|  +48.0% |   +12 |  0.4% → 0.6% |   25 → 37 | `PhaseIdealLoop::build_loop_early`                                       | `<unknown>`                                            |
| +100.0% |   +12 |  0.2% → 0.4% |   12 → 24 | `PhaseIdealLoop::dom_lca_for_get_late_ctrl_internal`                     | `<unknown>`                                            |
|     new |   +12 |  0.0% → 0.2% |    0 → 12 | `collector`                                                              | `java.lang.invoke.LambdaForm$MH.0x000000a0010d2800`    |
|  +18.0% |   +11 |  1.0% → 1.3% |   61 → 72 | `Arena::contains`                                                        | `<unknown>`                                            |
| +100.0% |    +9 |  0.2% → 0.3% |    9 → 18 | `equals`                                                                 | `java.lang.String`                                     |
| +450.0% |    +9 | <0.1% → 0.2% |    2 → 11 | `makeReinvokerForm`                                                      | `java.lang.invoke.DelegatingMethodHandle`              |
|     new |    +9 |  0.0% → 0.2% |     0 → 9 | `invoke`                                                                 | `java.lang.invoke.LambdaForm$MH.0x000000a00102ac00`    |
|  +80.0% |    +8 |  0.2% → 0.3% |   10 → 18 | `closure`                                                                | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |
|  +88.9% |    +8 |  0.2% → 0.3% |    9 → 17 | `bsearch`                                                                | `<unknown>`                                            |
|  +88.9% |    +8 |  0.2% → 0.3% |    9 → 17 | `PhaseChaitin::build_ifg_virtual`                                        | `<unknown>`                                            |
| +233.3% |    +7 |  0.1% → 0.2% |    3 → 10 | `PhiNode::Ideal`                                                         | `<unknown>`                                            |
| +233.3% |    +7 |  0.1% → 0.2% |    3 → 10 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object` | `<unknown>`                                            |
| +116.7% |    +7 |  0.1% → 0.2% |    6 → 13 | `ProjNode::is_CFG`                                                       | `<unknown>`                                            |

##### Compiler

|  Change | Delta |            % |   Samples | Function                                             | Location    |
| ------: | ----: | -----------: | --------: | ---------------------------------------------------- | ----------- |
|  +20.0% |   +20 |  1.7% → 2.1% | 100 → 120 | `PhaseChaitin::Split`                                | `<unknown>` |
|  +48.0% |   +12 |  0.4% → 0.6% |   25 → 37 | `PhaseIdealLoop::build_loop_early`                   | `<unknown>` |
| +100.0% |   +12 |  0.2% → 0.4% |   12 → 24 | `PhaseIdealLoop::dom_lca_for_get_late_ctrl_internal` | `<unknown>` |
|  +88.9% |    +8 |  0.2% → 0.3% |    9 → 17 | `PhaseChaitin::build_ifg_virtual`                    | `<unknown>` |
| +233.3% |    +7 |  0.1% → 0.2% |    3 → 10 | `PhiNode::Ideal`                                     | `<unknown>` |
| +116.7% |    +7 |  0.1% → 0.2% |    6 → 13 | `ProjNode::is_CFG`                                   | `<unknown>` |
|  +11.8% |    +6 |  0.9% → 1.0% |   51 → 57 | `PhaseChaitin::build_ifg_physical`                   | `<unknown>` |
|  +60.0% |    +6 |  0.2% → 0.3% |   10 → 16 | `PhaseIdealLoop::get_early_ctrl`                     | `<unknown>` |
|  +66.7% |    +6 |  0.2% → 0.3% |    9 → 15 | `PhaseIFG::effective_degree`                         | `<unknown>` |
|  +62.5% |    +5 |  0.1% → 0.2% |    8 → 13 | `PhaseCCP::transform`                                | `<unknown>` |
| +500.0% |    +5 | <0.1% → 0.1% |     1 → 6 | `Matcher::pd_clone_node`                             | `<unknown>` |
|  +83.3% |    +5 |  0.1% → 0.2% |    6 → 11 | `PhaseIFG::re_insert`                                | `<unknown>` |
|     new |    +5 |  0.0% → 0.1% |     0 → 5 | `MemNode::Ideal_common`                              | `<unknown>` |
| +100.0% |    +5 |  0.1% → 0.2% |    5 → 10 | `Node::set_req`                                      | `<unknown>` |
|     new |    +5 |  0.0% → 0.1% |     0 → 5 | `ciMethodData::bci_to_data`                          | `<unknown>` |
| +125.0% |    +5 |  0.1% → 0.2% |     4 → 9 | `PhaseIFG::remove_node`                              | `<unknown>` |
| +500.0% |    +5 | <0.1% → 0.1% |     1 → 6 | `TypeOopPtr::klass`                                  | `<unknown>` |
|  +25.0% |    +4 |         0.3% |   16 → 20 | `Type::cmp`                                          | `<unknown>` |
|  +44.4% |    +4 |         0.2% |    9 → 13 | `Node::clone`                                        | `<unknown>` |
| +400.0% |    +4 | <0.1% → 0.1% |     1 → 5 | `LinearScanWalker::activate_current`                 | `<unknown>` |

##### Native

|  Change | Delta |            % |   Samples | Function                                                                                                                                                   | Location    |
| ------: | ----: | -----------: | --------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
|  +73.9% |   +17 |  0.4% → 0.7% |   23 → 40 | `__psynch_mutexwait`                                                                                                                                       | `<unknown>` |
|  +18.0% |   +11 |  1.0% → 1.3% |   61 → 72 | `Arena::contains`                                                                                                                                          | `<unknown>` |
|  +88.9% |    +8 |  0.2% → 0.3% |    9 → 17 | `bsearch`                                                                                                                                                  | `<unknown>` |
| +233.3% |    +7 |  0.1% → 0.2% |    3 → 10 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object`                                                                                   | `<unknown>` |
| +233.3% |    +7 |  0.1% → 0.2% |    3 → 10 | `frame::sender_for_interpreter_frame`                                                                                                                      | `<unknown>` |
|     new |    +7 |  0.0% → 0.1% |     0 → 7 | `LinkResolver::check_method_accessability`                                                                                                                 | `<unknown>` |
| +700.0% |    +7 | <0.1% → 0.1% |     1 → 8 | `SymbolTable::lookup_shared`                                                                                                                               | `<unknown>` |
| +600.0% |    +6 | <0.1% → 0.1% |     1 → 7 | `AccessInternal::PostRuntimeDispatch<G1BarrierSet::AccessBarrier<548964ull, G1BarrierSet>, (AccessInternal::BarrierType)2, 548964ull>::oop_access_barrier` | `<unknown>` |
| +200.0% |    +6 |  0.1% → 0.2% |     3 → 9 | `_qsort`                                                                                                                                                   | `<unknown>` |
|  +26.3% |    +5 |  0.3% → 0.4% |   19 → 24 | `sys_icache_invalidate`                                                                                                                                    | `<unknown>` |
|   +4.8% |    +5 |  1.8% → 1.9% | 104 → 109 | `pthread_jit_write_protect_np`                                                                                                                             | `<unknown>` |
| +166.7% |    +5 |         0.1% |     3 → 8 | `Continuation::is_continuation_enterSpecial`                                                                                                               | `<unknown>` |
| +500.0% |    +5 | <0.1% → 0.1% |     1 → 6 | `ResourceBitMap::ResourceBitMap`                                                                                                                           | `<unknown>` |
| +250.0% |    +5 | <0.1% → 0.1% |     2 → 7 | `ResolvedMethodTable::find_method`                                                                                                                         | `<unknown>` |
|  +66.7% |    +4 |  0.1% → 0.2% |    6 → 10 | `_platform_memcmp`                                                                                                                                         | `<unknown>` |
|  +66.7% |    +4 |  0.1% → 0.2% |    6 → 10 | `resource_allocate_bytes`                                                                                                                                  | `<unknown>` |
|  +16.0% |    +4 |  0.4% → 0.5% |   25 → 29 | `_platform_memset`                                                                                                                                         | `<unknown>` |
| +400.0% |    +4 | <0.1% → 0.1% |     1 → 5 | `MHN_init_Mem`                                                                                                                                             | `<unknown>` |
| +400.0% |    +4 | <0.1% → 0.1% |     1 → 5 | `__vfprintf`                                                                                                                                               | `<unknown>` |
| +400.0% |    +4 | <0.1% → 0.1% |     1 → 5 | `pthread_mutex_lock`                                                                                                                                       | `<unknown>` |

##### Standard library

|  Change | Delta |            % | Samples | Function            | Location                                                |
| ------: | ----: | -----------: | ------: | ------------------- | ------------------------------------------------------- |
|     new |   +32 |  0.0% → 0.6% |  0 → 32 | `collector`         | `java.lang.invoke.LambdaForm$MH.0x000000a001031800`     |
|     new |   +27 |  0.0% → 0.5% |  0 → 27 | `invokeStatic`      | `java.lang.invoke.LambdaForm$DMH.0x000000a001088800`    |
|     new |   +15 |  0.0% → 0.3% |  0 → 15 | `collector`         | `java.lang.invoke.LambdaForm$MH.0x000000a0010a1000`     |
|  +23.2% |   +13 |  0.9% → 1.2% | 56 → 69 | `newInstance`       | `java.lang.reflect.Array`                               |
|     new |   +12 |  0.0% → 0.2% |  0 → 12 | `collector`         | `java.lang.invoke.LambdaForm$MH.0x000000a0010d2800`     |
| +100.0% |    +9 |  0.2% → 0.3% |  9 → 18 | `equals`            | `java.lang.String`                                      |
| +450.0% |    +9 | <0.1% → 0.2% |  2 → 11 | `makeReinvokerForm` | `java.lang.invoke.DelegatingMethodHandle`               |
|     new |    +9 |  0.0% → 0.2% |   0 → 9 | `invoke`            | `java.lang.invoke.LambdaForm$MH.0x000000a00102ac00`     |
|  +80.0% |    +8 |  0.2% → 0.3% | 10 → 18 | `closure`           | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`  |
|  +54.5% |    +6 |  0.2% → 0.3% | 11 → 17 | `equals`            | `java.util.Objects`                                     |
|  +46.2% |    +6 |  0.2% → 0.3% | 13 → 19 | `getNode`           | `java.util.HashMap`                                     |
| +150.0% |    +6 |  0.1% → 0.2% |  4 → 10 | `get`               | `java.lang.ref.SoftReference`                           |
| +200.0% |    +6 |  0.1% → 0.2% |   3 → 9 | `getMethods`        | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex` |
|     new |    +6 |  0.0% → 0.1% |   0 → 6 | `guardWithCatch`    | `java.lang.invoke.LambdaForm$MH.0x000000a001098400`     |
|     new |    +6 |  0.0% → 0.1% |   0 → 6 | `invoke`            | `java.lang.invoke.LambdaForm$MH.0x000000a00109a400`     |
| +125.0% |    +5 |  0.1% → 0.2% |   4 → 9 | `getAndPut`         | `org.codehaus.groovy.vmplugin.v8.CacheableCallSite`     |
| +250.0% |    +5 | <0.1% → 0.1% |   2 → 7 | `filter`            | `java.lang.PublicMethods$MethodList`                    |
|  +83.3% |    +5 |  0.1% → 0.2% |  6 → 11 | `boxInteger`        | `sun.invoke.util.ValueConversions`                      |
| +250.0% |    +5 | <0.1% → 0.1% |   2 → 7 | `type`              | `java.lang.invoke.MethodHandle`                         |
|     new |    +5 |  0.0% → 0.1% |   0 → 5 | `guard`             | `java.lang.invoke.LambdaForm$MH.0x000000a0010aac00`     |

##### Ours

| Change | Delta |            % | Samples | Function                            | Location                                                                                   |
| -----: | ----: | -----------: | ------: | ----------------------------------- | ------------------------------------------------------------------------------------------ |
|    new |    +3 |  0.0% → 0.1% |   0 → 3 | `addViolationIfDuplicate`           | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                                         |
|    new |    +2 | 0.0% → <0.1% |   0 → 2 | `<init>`                            | `org.codenarc.rule.naming.ScopedConfusingMethodNameAstVisitor`                             |
|    new |    +2 | 0.0% → <0.1% |   0 → 2 | `shouldVisitMethod`                 | `org.codenarc.rule.AbstractAstVisitor`                                                     |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `applyTo`                           | `org.codenarc.rule.AbstractAstVisitorRule`                                                 |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `visitMethod`                       | `org.codenarc.rule.AbstractAstVisitor`                                                     |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `init`                              | `org.codenarc.source.AbstractSourceCode`                                                   |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `visitBlockStatement`               | `org.codenarc.rule.formatting.SpaceAfterOpeningBraceAstVisitor`                            |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `$getCallSiteArray`                 | `org.gmetrics.metric.abc.result.AggregateAbcMetricResult$_addChildrenToAbcVector_closure2` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `super$2$visitMethodCallExpression` | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                                         |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `getText`                           | `org.codenarc.source.SourceFile`                                                           |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `visitMethodCallExpression`         | `org.codenarc.rule.unused.UnusedVariableAstVisitor`                                        |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `doCall`                            | `org.codenarc.results.FileResults$_getNumberOfViolationsWithPriority_closure1`             |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `visitBinaryExpression`             | `org.codenarc.rule.convention.ParameterReassignmentAstVisitor`                             |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `visitMapEntryExpression`           | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                                         |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `visitMethodComplete`               | `org.codenarc.rule.convention.NoFloatAstVisitor`                                           |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `visitMethodEx`                     | `org.codenarc.rule.basic.RandomDoubleCoercedToZeroAstVisitor`                              |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `removeAnyViolationsForSameLine`    | `org.codenarc.rule.unnecessary.UnnecessarySemicolonAstVisitor`                             |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `hasOpeningBraceOnSameLine`         | `org.codenarc.rule.formatting.BracesForMethodAstVisitor`                                   |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `<init>`                            | `org.codenarc.rule.groovyism.ExplicitCallToMethodAstVisitor`                               |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `visitMethodCallExpression`         | `org.codenarc.rule.design.LocaleSetDefaultAstVisitor`                                      |

##### JIT

|  Change | Delta |            % | Samples | Function                   | Location    |
| ------: | ----: | -----------: | ------: | -------------------------- | ----------- |
|  +76.5% |   +13 |  0.3% → 0.5% | 17 → 30 | `itable stub`              | `<unknown>` |
| +500.0% |    +5 | <0.1% → 0.1% |   1 → 6 | `I2C/C2I adapters(0xbbb)`  | `<unknown>` |
| +300.0% |    +3 | <0.1% → 0.1% |   1 → 4 | `I2C/C2I adapters(0xbb)`   | `<unknown>` |
| +200.0% |    +2 | <0.1% → 0.1% |   1 → 3 | `I2C/C2I adapters(0xba)`   | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `I2C/C2I adapters(0xbbab)` | `<unknown>` |
|  +10.0% |    +1 |         0.2% | 10 → 11 | `vtable stub`              | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `I2C/C2I adapters(0x)`     | `<unknown>` |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |            % |  Samples | Function                                                                                                                                                 | Location                                             |
| ------: | ----: | -----------: | -------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|  -36.3% |   -37 |  1.7% → 1.1% | 102 → 65 | `Node::dominates`                                                                                                                                        | `<unknown>`                                          |
| removed |   -36 |  0.6% → 0.0% |   36 → 0 | `collector`                                                                                                                                              | `java.lang.invoke.LambdaForm$MH.0x0000007001031800`  |
| removed |   -25 |  0.4% → 0.0% |   25 → 0 | `collector`                                                                                                                                              | `java.lang.invoke.LambdaForm$MH.0x00000070010a1000`  |
| removed |   -21 |  0.4% → 0.0% |   21 → 0 | `invokeStatic`                                                                                                                                           | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |
|  -22.3% |   -21 |  1.6% → 1.3% |  94 → 73 | `tlv_get_addr`                                                                                                                                           | `<unknown>`                                          |
|  -61.3% |   -19 |  0.5% → 0.2% |  31 → 12 | `PhaseIdealLoop::build_loop_late_post_work`                                                                                                              | `<unknown>`                                          |
|  -40.6% |   -13 |  0.5% → 0.3% |  32 → 19 | `NodeHash::hash_find_insert`                                                                                                                             | `<unknown>`                                          |
|  -92.3% |   -12 | 0.2% → <0.1% |   13 → 1 | `I2C/C2I adapters(0xbbbb)`                                                                                                                               | `<unknown>`                                          |
|  -41.4% |   -12 |  0.5% → 0.3% |  29 → 17 | `PhaseLive::add_liveout`                                                                                                                                 | `<unknown>`                                          |
|  -32.4% |   -12 |  0.6% → 0.4% |  37 → 25 | `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>`                             | `<unknown>`                                          |
|  -30.6% |   -11 |  0.6% → 0.4% |  36 → 25 | `PhaseIdealLoop::Dominators`                                                                                                                             | `<unknown>`                                          |
|  -31.4% |   -11 |  0.6% → 0.4% |  35 → 24 | `PhaseIdealLoop::build_loop_late`                                                                                                                        | `<unknown>`                                          |
|  -52.6% |   -10 |  0.3% → 0.2% |   19 → 9 | `nmethodBucket::next_not_unloading`                                                                                                                      | `<unknown>`                                          |
|  -58.8% |   -10 |  0.3% → 0.1% |   17 → 7 | `PhaseIdealLoop::build_loop_tree`                                                                                                                        | `<unknown>`                                          |
|  -58.8% |   -10 |  0.3% → 0.1% |   17 → 7 | `PhaseChaitin::merge_multidefs`                                                                                                                          | `<unknown>`                                          |
|  -18.0% |    -9 |  0.8% → 0.7% |  50 → 41 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `<unknown>`                                          |
| removed |    -9 |  0.2% → 0.0% |    9 → 0 | `collector`                                                                                                                                              | `java.lang.invoke.LambdaForm$MH.0x00000070010d2800`  |
|  -23.7% |    -9 |  0.6% → 0.5% |  38 → 29 | `PhaseLive::compute`                                                                                                                                     | `<unknown>`                                          |
|  -40.9% |    -9 |  0.4% → 0.2% |  22 → 13 | `frame::sender_for_compiled_frame`                                                                                                                       | `<unknown>`                                          |
|  -29.0% |    -9 |  0.5% → 0.4% |  31 → 22 | `MachNode::rematerialize`                                                                                                                                | `<unknown>`                                          |

##### Compiler

| Change | Delta |            % |  Samples | Function                                    | Location    |
| -----: | ----: | -----------: | -------: | ------------------------------------------- | ----------- |
| -36.3% |   -37 |  1.7% → 1.1% | 102 → 65 | `Node::dominates`                           | `<unknown>` |
| -61.3% |   -19 |  0.5% → 0.2% |  31 → 12 | `PhaseIdealLoop::build_loop_late_post_work` | `<unknown>` |
| -40.6% |   -13 |  0.5% → 0.3% |  32 → 19 | `NodeHash::hash_find_insert`                | `<unknown>` |
| -41.4% |   -12 |  0.5% → 0.3% |  29 → 17 | `PhaseLive::add_liveout`                    | `<unknown>` |
| -30.6% |   -11 |  0.6% → 0.4% |  36 → 25 | `PhaseIdealLoop::Dominators`                | `<unknown>` |
| -31.4% |   -11 |  0.6% → 0.4% |  35 → 24 | `PhaseIdealLoop::build_loop_late`           | `<unknown>` |
| -58.8% |   -10 |  0.3% → 0.1% |   17 → 7 | `PhaseIdealLoop::build_loop_tree`           | `<unknown>` |
| -58.8% |   -10 |  0.3% → 0.1% |   17 → 7 | `PhaseChaitin::merge_multidefs`             | `<unknown>` |
| -23.7% |    -9 |  0.6% → 0.5% |  38 → 29 | `PhaseLive::compute`                        | `<unknown>` |
| -29.0% |    -9 |  0.5% → 0.4% |  31 → 22 | `MachNode::rematerialize`                   | `<unknown>` |
| -50.0% |    -7 |  0.2% → 0.1% |   14 → 7 | `LIR_OpVisitState::visit`                   | `<unknown>` |
| -15.2% |    -7 |  0.8% → 0.7% |  46 → 39 | `PhaseChaitin::elide_copy`                  | `<unknown>` |
| -26.1% |    -6 |  0.4% → 0.3% |  23 → 17 | `Matcher::xform`                            | `<unknown>` |
| -25.0% |    -6 |  0.4% → 0.3% |  24 → 18 | `PhaseOutput::BuildOopMaps`                 | `<unknown>` |
| -21.7% |    -5 |  0.4% → 0.3% |  23 → 18 | `Node_Backward_Iterator::next`              | `<unknown>` |
| -31.3% |    -5 |  0.3% → 0.2% |  16 → 11 | `IntervalWalker::walk_to`                   | `<unknown>` |
| -41.7% |    -5 |  0.2% → 0.1% |   12 → 7 | `RegionNode::is_unreachable_from_root`      | `<unknown>` |
|  -8.5% |    -5 |  1.0% → 0.9% |  59 → 54 | `IndexSetIterator::advance_and_next`        | `<unknown>` |
| -83.3% |    -5 | 0.1% → <0.1% |    6 → 1 | `Node::unique_ctrl_out_or_null`             | `<unknown>` |
| -45.5% |    -5 |  0.2% → 0.1% |   11 → 6 | `Node::rematerialize`                       | `<unknown>` |

##### Native

| Change | Delta |            % | Samples | Function                                                                                                                                                 | Location    |
| -----: | ----: | -----------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| -22.3% |   -21 |  1.6% → 1.3% | 94 → 73 | `tlv_get_addr`                                                                                                                                           | `<unknown>` |
| -32.4% |   -12 |  0.6% → 0.4% | 37 → 25 | `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>`                             | `<unknown>` |
| -52.6% |   -10 |  0.3% → 0.2% |  19 → 9 | `nmethodBucket::next_not_unloading`                                                                                                                      | `<unknown>` |
| -18.0% |    -9 |  0.8% → 0.7% | 50 → 41 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `<unknown>` |
| -40.9% |    -9 |  0.4% → 0.2% | 22 → 13 | `frame::sender_for_compiled_frame`                                                                                                                       | `<unknown>` |
| -75.0% |    -9 |  0.2% → 0.1% |  12 → 3 | `CompiledMethod::cleanup_inline_caches_impl`                                                                                                             | `<unknown>` |
| -50.0% |    -8 |  0.3% → 0.1% |  16 → 8 | `void OopOopIterateDispatch<G1ScanCardClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>`                                                        | `<unknown>` |
| -80.0% |    -8 | 0.2% → <0.1% |  10 → 2 | `void G1ScanEvacuatedObjClosure::do_oop_work<narrowOop>`                                                                                                 | `<unknown>` |
| -11.7% |    -7 |  1.0% → 0.9% | 60 → 53 | `java_lang_Throwable::fill_in_stack_trace`                                                                                                               | `<unknown>` |
| -58.3% |    -7 |  0.2% → 0.1% |  12 → 5 | `G1CardSet::add_to_howl`                                                                                                                                 | `<unknown>` |
| -66.7% |    -6 |  0.2% → 0.1% |   9 → 3 | `G1ConcurrentMark::mark_in_bitmap`                                                                                                                       | `<unknown>` |
| -75.0% |    -6 | 0.1% → <0.1% |   8 → 2 | `nmethod::metadata_addr_at`                                                                                                                              | `<unknown>` |
| -46.2% |    -6 |  0.2% → 0.1% |  13 → 7 | `trampoline_stub_Relocation::get_trampoline_for`                                                                                                         | `<unknown>` |
| -85.7% |    -6 | 0.1% → <0.1% |   7 → 1 | `CodeHeap::find_blob`                                                                                                                                    | `<unknown>` |
| -71.4% |    -5 | 0.1% → <0.1% |   7 → 2 | `LocationValue::write_on`                                                                                                                                | `<unknown>` |
| -71.4% |    -5 | 0.1% → <0.1% |   7 → 2 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<ObjArrayKlass, narrowOop>`                                                   | `<unknown>` |
| -80.0% |    -4 | 0.1% → <0.1% |   5 → 1 | `Chunk::chop`                                                                                                                                            | `<unknown>` |
| -80.0% |    -4 | 0.1% → <0.1% |   5 → 1 | `BarrierSetNMethod::nmethod_stub_entry_barrier`                                                                                                          | `<unknown>` |
| -44.4% |    -4 |  0.2% → 0.1% |   9 → 5 | `semaphore_wait_trap`                                                                                                                                    | `<unknown>` |
| -57.1% |    -4 |         0.1% |   7 → 3 | `G1CardSet::add_card`                                                                                                                                    | `<unknown>` |

##### Standard library

|  Change | Delta |            % | Samples | Function                   | Location                                              |
| ------: | ----: | -----------: | ------: | -------------------------- | ----------------------------------------------------- |
| removed |   -36 |  0.6% → 0.0% |  36 → 0 | `collector`                | `java.lang.invoke.LambdaForm$MH.0x0000007001031800`   |
| removed |   -25 |  0.4% → 0.0% |  25 → 0 | `collector`                | `java.lang.invoke.LambdaForm$MH.0x00000070010a1000`   |
| removed |   -21 |  0.4% → 0.0% |  21 → 0 | `invokeStatic`             | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800`  |
| removed |    -9 |  0.2% → 0.0% |   9 → 0 | `collector`                | `java.lang.invoke.LambdaForm$MH.0x00000070010d2800`   |
| removed |    -8 |  0.1% → 0.0% |   8 → 0 | `invoke`                   | `java.lang.invoke.LambdaForm$MH.0x000000700109a400`   |
|  -75.0% |    -6 | 0.1% → <0.1% |   8 → 2 | `hashCode`                 | `java.lang.invoke.MethodType`                         |
| removed |    -5 |  0.1% → 0.0% |   5 → 0 | `guard`                    | `java.lang.invoke.LambdaForm$MH.0x000000700109a000`   |
| removed |    -5 |  0.1% → 0.0% |   5 → 0 | `invoke`                   | `java.lang.invoke.LambdaForm$MH.0x000000700102ac00`   |
|  -38.5% |    -5 |  0.2% → 0.1% |  13 → 8 | `join`                     | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext` |
|  -55.6% |    -5 |  0.2% → 0.1% |   9 → 4 | `resize`                   | `java.util.HashMap`                                   |
|  -71.4% |    -5 | 0.1% → <0.1% |   7 → 2 | `internalMemberName`       | `java.lang.invoke.DirectMethodHandle`                 |
| removed |    -4 |  0.1% → 0.0% |   4 → 0 | `invokeVirtual`            | `java.lang.invoke.LambdaForm$DMH.0x0000007001094400`  |
| removed |    -4 |  0.1% → 0.0% |   4 → 0 | `guardWithCatch`           | `java.lang.invoke.LambdaForm$MH.0x00000070010aa000`   |
| removed |    -4 |  0.1% → 0.0% |   4 → 0 | `guardWithCatch`           | `java.lang.invoke.LambdaForm$MH.0x0000007001098400`   |
|  -11.8% |    -4 |  0.6% → 0.5% | 34 → 30 | `invokeStatic`             | `java.lang.invoke.DirectMethodHandle$Holder`          |
| removed |    -4 |  0.1% → 0.0% |   4 → 0 | `visit`                    | `org.codehaus.groovy.ast.expr.VariableExpression`     |
|  -18.2% |    -4 |  0.4% → 0.3% | 22 → 18 | `<init>`                   | `java.lang.invoke.MethodHandle`                       |
|  -80.0% |    -4 | 0.1% → <0.1% |   5 → 1 | `copyWith`                 | `java.lang.invoke.BoundMethodHandle$Species_L`        |
|  -66.7% |    -4 | 0.1% → <0.1% |   6 → 2 | `coerceArgumentsToClasses` | `org.codehaus.groovy.reflection.ParameterTypes`       |
| removed |    -3 |  0.1% → 0.0% |   3 → 0 | `invoke`                   | `java.lang.invoke.LambdaForm$MH.0x00000070010abc00`   |

##### Ours

|  Change | Delta |            % | Samples | Function                 | Location                                                                                           |
| ------: | ----: | -----------: | ------: | ------------------------ | -------------------------------------------------------------------------------------------------- |
|  -83.3% |    -5 | 0.1% → <0.1% |   6 → 1 | `collectViolations`      | `org.codenarc.analyzer.AbstractSourceAnalyzer`                                                     |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `visitClass`             | `org.codenarc.rule.AbstractMethodVisitor`                                                          |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `getMetaClass`           | `org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor`                                    |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `getMetaClass`           | `org.codenarc.rule.formatting.BlankLineBeforePackageRule`                                          |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `getMetaClass`           | `org.codenarc.rule.design.PrivateFieldCouldBeFinalRule`                                            |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `doCall`                 | `org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`                        |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `applyTo`                | `org.codenarc.rule.AbstractRule`                                                                   |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `doCall`                 | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`                         |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `getAst`                 | `org.codenarc.source.AbstractSourceCode`                                                           |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `getMetaClass`           | `org.codenarc.rule.formatting.SpaceInsideParenthesesRule`                                          |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `calculateFunctions`     | `org.gmetrics.metric.abc.result.AggregateAbcMetricResult`                                          |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `doCall`                 | `org.codenarc.rule.convention.VariableTypeRequiredAstVisitor$_visitDeclarationExpression_closure1` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `applyTo`                | `org.codenarc.rule.naming.ClassNameSameAsFilenameRule`                                             |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `visitClass`             | `org.codenarc.rule.AbstractMethodCallExpressionVisitor`                                            |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `visitBlockStatement`    | `org.codenarc.rule.formatting.IndentationAstVisitor`                                               |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `$getCallSiteArray`      | `org.gmetrics.metric.AbstractMethodMetric$_lineNumberForMethod_closure1`                           |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `isBinaryExpressionType` | `org.codenarc.util.AstUtil`                                                                        |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `getSourceCode`          | `org.codenarc.rule.AbstractAstVisitor`                                                             |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `sourceLineOrEmpty`      | `org.codenarc.rule.formatting.AbstractSpaceAroundBraceAstVisitor`                                  |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `getName`                | `org.codenarc.rule.naming.FieldNameRule`                                                           |

##### JIT

|  Change | Delta |            % | Samples | Function                   | Location    |
| ------: | ----: | -----------: | ------: | -------------------------- | ----------- |
|  -92.3% |   -12 | 0.2% → <0.1% |  13 → 1 | `I2C/C2I adapters(0xbbbb)` | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `call_stub`                | `<unknown>` |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

##### Compiler

|   Change | Delta |            % |   Samples | Function                                             | Location    |
| -------: | ----: | -----------: | --------: | ---------------------------------------------------- | ----------- |
|   +16.2% |   +32 |  3.3% → 4.0% | 197 → 229 | `Compilation::emit_lir`                              | `<unknown>` |
|   +59.1% |   +26 |  0.7% → 1.2% |   44 → 70 | `BlockList::iterate_forward`                         | `<unknown>` |
|   +58.1% |   +25 |  0.7% → 1.2% |   43 → 68 | `LIRGenerator::block_do`                             | `<unknown>` |
|   +42.6% |   +20 |  0.8% → 1.2% |   47 → 67 | `ciEnv::get_method_by_index_impl`                    | `<unknown>` |
|   +22.4% |   +19 |  1.4% → 1.8% |  85 → 104 | `ciBytecodeStream::get_method`                       | `<unknown>` |
|   +64.0% |   +16 |  0.4% → 0.7% |   25 → 41 | `ciEnv::get_klass_by_index_impl`                     | `<unknown>` |
|   +38.1% |   +16 |  0.7% → 1.0% |   42 → 58 | `PhaseIdealLoop::build_loop_early`                   | `<unknown>` |
|   +34.1% |   +14 |  0.7% → 1.0% |   41 → 55 | `PhaseCFG::schedule_late`                            | `<unknown>` |
|   +43.8% |   +14 |  0.5% → 0.8% |   32 → 46 | `ciTypeFlow::df_flow_types`                          | `<unknown>` |
|  +107.7% |   +14 |  0.2% → 0.5% |   13 → 27 | `PhaseIFG::effective_degree`                         | `<unknown>` |
|    +2.5% |   +13 |  8.8% → 9.4% | 523 → 536 | `Compilation::compile_java_method`                   | `<unknown>` |
|   +50.0% |   +13 |  0.4% → 0.7% |   26 → 39 | `ciTypeFlow::StateVector::apply_one_bytecode`        | `<unknown>` |
|  +100.0% |   +13 |  0.2% → 0.5% |   13 → 26 | `PhaseIFG::Compute_Effective_Degree`                 | `<unknown>` |
|   +30.0% |   +12 |  0.7% → 0.9% |   40 → 52 | `LinearScanWalker::activate_current`                 | `<unknown>` |
|  +100.0% |   +12 |  0.2% → 0.4% |   12 → 24 | `PhaseIdealLoop::dom_lca_for_get_late_ctrl_internal` | `<unknown>` |
|   +92.3% |   +12 |  0.2% → 0.4% |   13 → 25 | `PhaseIdealLoop::compute_lca_of_uses`                | `<unknown>` |
|   +28.9% |   +11 |  0.6% → 0.9% |   38 → 49 | `ciTypeFlow::do_flow`                                | `<unknown>` |
|  +122.2% |   +11 |  0.2% → 0.3% |    9 → 20 | `LIRGenerator::do_ProfileCall`                       | `<unknown>` |
| +1100.0% |   +11 | <0.1% → 0.2% |    1 → 12 | `LIRGenerator::profile_type`                         | `<unknown>` |
|  +100.0% |   +10 |  0.2% → 0.3% |   10 → 20 | `ciEnv::get_klass_by_name_impl`                      | `<unknown>` |

##### Native

|  Change | Delta |            % |   Samples | Function                                                    | Location    |
| ------: | ----: | -----------: | --------: | ----------------------------------------------------------- | ----------- |
|  +73.9% |   +17 |  0.4% → 0.7% |   23 → 40 | `__psynch_mutexwait`                                        | `<unknown>` |
|  +73.9% |   +17 |  0.4% → 0.7% |   23 → 40 | `_pthread_mutex_firstfit_lock_slow`                         | `<unknown>` |
|  +42.4% |   +14 |  0.6% → 0.8% |   33 → 47 | `G1EvacuateRegionsTask::evacuate_live_objects`              | `<unknown>` |
|  +38.2% |   +13 |  0.6% → 0.8% |   34 → 47 | `G1ParEvacuateFollowersClosure::do_void`                    | `<unknown>` |
|  +65.0% |   +13 |  0.3% → 0.6% |   20 → 33 | `G1ParScanThreadState::steal_and_trim_queue`                | `<unknown>` |
| +122.2% |   +11 |  0.2% → 0.3% |    9 → 20 | `ThreadCritical::ThreadCritical`                            | `<unknown>` |
|  +18.0% |   +11 |  1.0% → 1.3% |   61 → 72 | `Arena::contains`                                           | `<unknown>` |
|  +31.0% |    +9 |  0.5% → 0.7% |   29 → 38 | `LinkResolver::resolve_method`                              | `<unknown>` |
| +112.5% |    +9 |  0.1% → 0.3% |    8 → 17 | `LinkResolver::linktime_resolve_static_method`              | `<unknown>` |
|  +50.0% |    +9 |  0.3% → 0.5% |   18 → 27 | `Parse::do_checkcast`                                       | `<unknown>` |
|  +50.0% |    +9 |  0.3% → 0.5% |   18 → 27 | `MHN_init_Mem`                                              | `<unknown>` |
|  +19.0% |    +8 |  0.7% → 0.9% |   42 → 50 | `InlineTree::ok_to_inline`                                  | `<unknown>` |
|  +53.3% |    +8 |  0.3% → 0.4% |   15 → 23 | `NonSafepointEmitter::observe_instruction`                  | `<unknown>` |
| +266.7% |    +8 |  0.1% → 0.2% |    3 → 11 | `SymbolTable::new_symbol`                                   | `<unknown>` |
|  +88.9% |    +8 |  0.2% → 0.3% |    9 → 17 | `MethodHandles::init_MemberName`                            | `<unknown>` |
| +400.0% |    +8 | <0.1% → 0.2% |    2 → 10 | `LinkResolver::check_method_accessability`                  | `<unknown>` |
|   +1.2% |    +7 | 9.9% → 10.4% | 586 → 593 | `Compiler::compile_method`                                  | `<unknown>` |
|  +43.8% |    +7 |  0.3% → 0.4% |   16 → 23 | `G1CMTask::drain_local_queue`                               | `<unknown>` |
|  +43.8% |    +7 |  0.3% → 0.4% |   16 → 23 | `KlassCleaningTask::work`                                   | `<unknown>` |
| +350.0% |    +7 | <0.1% → 0.2% |     2 → 9 | `java_lang_invoke_ResolvedMethodName::find_resolved_method` | `<unknown>` |

##### Standard library

| Change |  Delta |            % |   Samples | Function          | Location                                             |
| -----: | -----: | -----------: | --------: | ----------------- | ---------------------------------------------------- |
|    new | +2,159 | 0.0% → 37.7% | 0 → 2,159 | `invokeStatic`    | `java.lang.invoke.LambdaForm$DMH.0x000000a001088800` |
|    new | +2,158 | 0.0% → 37.7% | 0 → 2,158 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x000000a0010a1800`  |
|    new | +2,157 | 0.0% → 37.7% | 0 → 2,157 | `guardWithCatch`  | `java.lang.invoke.LambdaForm$MH.0x000000a0010aa000`  |
|    new | +2,157 | 0.0% → 37.7% | 0 → 2,157 | `reinvoke`        | `java.lang.invoke.LambdaForm$MH.0x000000a0010aa800`  |
|    new | +2,157 | 0.0% → 37.7% | 0 → 2,157 | `guard`           | `java.lang.invoke.LambdaForm$MH.0x000000a0010aac00`  |
|    new | +2,150 | 0.0% → 37.5% | 0 → 2,150 | `invokeVirtual`   | `java.lang.invoke.LambdaForm$DMH.0x000000a001094400` |
|    new | +2,149 | 0.0% → 37.5% | 0 → 2,149 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x000000a0010c7000`  |
|    new | +2,149 | 0.0% → 37.5% | 0 → 2,149 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x000000a0010c6400`  |
|    new | +2,146 | 0.0% → 37.5% | 0 → 2,146 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x000000a00108e000`  |
|    new | +2,137 | 0.0% → 37.3% | 0 → 2,137 | `guardWithCatch`  | `java.lang.invoke.LambdaForm$MH.0x000000a001098400`  |
|    new | +2,137 | 0.0% → 37.3% | 0 → 2,137 | `reinvoke`        | `java.lang.invoke.LambdaForm$MH.0x000000a001099c00`  |
|    new | +2,137 | 0.0% → 37.3% | 0 → 2,137 | `guard`           | `java.lang.invoke.LambdaForm$MH.0x000000a00109a000`  |
|    new | +2,135 | 0.0% → 37.3% | 0 → 2,135 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x000000a00102b000`  |
|    new | +2,134 | 0.0% → 37.3% | 0 → 2,134 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x000000a00109bc00`  |
|    new | +2,131 | 0.0% → 37.2% | 0 → 2,131 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x000000a0010a9800`  |
|    new | +2,098 | 0.0% → 36.6% | 0 → 2,098 | `invokeInterface` | `java.lang.invoke.LambdaForm$DMH.0x000000a001095000` |
|    new | +2,095 | 0.0% → 36.6% | 0 → 2,095 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x000000a0010d3800`  |
|    new | +2,064 | 0.0% → 36.0% | 0 → 2,064 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x000000a0010d2400`  |
|    new | +2,064 | 0.0% → 36.0% | 0 → 2,064 | `guardWithCatch`  | `java.lang.invoke.LambdaForm$MH.0x000000a0010d2c00`  |
|    new | +2,063 | 0.0% → 36.0% | 0 → 2,063 | `guard`           | `java.lang.invoke.LambdaForm$MH.0x000000a001189000`  |

##### Ours

|  Change | Delta |           % |   Samples | Function                           | Location                                                                       |
| ------: | ----: | ----------: | --------: | ---------------------------------- | ------------------------------------------------------------------------------ |
| +100.0% |   +14 | 0.2% → 0.5% |   14 → 28 | `visitConstructorOrMethod`         | `org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor`                       |
|   +5.5% |   +12 | 3.7% → 4.1% | 220 → 232 | `getAst`                           | `org.codenarc.source.AbstractSourceCode`                                       |
|  +85.7% |   +12 | 0.2% → 0.5% |   14 → 26 | `super$3$visitConstructorOrMethod` | `org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor`                       |
|  +91.7% |   +11 | 0.2% → 0.4% |   12 → 23 | `processMethodOrConstructorCall`   | `org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor`                       |
| +122.2% |   +11 | 0.2% → 0.3% |    9 → 20 | `calculate`                        | `org.gmetrics.metric.abc.AbcMetric`                                            |
|  +84.6% |   +11 | 0.2% → 0.4% |   13 → 24 | `visitMethodCallExpression`        | `org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor`                       |
|   +4.1% |   +10 | 4.1% → 4.5% | 245 → 255 | `doCall`                           | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`     |
| +250.0% |   +10 | 0.1% → 0.2% |    4 → 14 | `checkForViolations`               | `org.codenarc.rule.formatting.BlockStartsWithBlankLineAstVisitor`              |
|   +4.1% |    +9 | 3.7% → 4.0% | 219 → 228 | `init`                             | `org.codenarc.source.AbstractSourceCode`                                       |
|   +4.1% |    +9 | 3.7% → 4.0% | 219 → 228 | `init`                             | `org.codenarc.analyzer.SuppressionAnalyzer`                                    |
|  +14.5% |    +8 | 0.9% → 1.1% |   55 → 63 | `getAstVisitor`                    | `org.codenarc.rule.AbstractAstVisitorRule`                                     |
|  +88.9% |    +8 | 0.2% → 0.3% |    9 → 17 | `visitConstructorOrMethod`         | `org.codenarc.rule.formatting.BlockStartsWithBlankLineAstVisitor`              |
|  +20.6% |    +7 | 0.6% → 0.7% |   34 → 41 | `applyTo`                          | `org.codenarc.rule.unnecessary.UnnecessarySemicolonRule`                       |
|  +46.7% |    +7 | 0.3% → 0.4% |   15 → 22 | `doCall`                           | `org.gmetrics.metric.AbstractMethodMetric$_addMethodsToMetricResults_closure4` |
|  +43.8% |    +7 | 0.3% → 0.4% |   16 → 23 | `addMethodsToMetricResults`        | `org.gmetrics.metric.AbstractMethodMetric`                                     |
|  +58.3% |    +7 | 0.2% → 0.3% |   12 → 19 | `super$2$visitBinaryExpression`    | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                             |
|   +2.6% |    +6 | 3.8% → 4.1% | 228 → 234 | `isRuleSuppressed`                 | `org.codenarc.analyzer.SuppressionAnalyzer`                                    |
|  +30.0% |    +6 | 0.3% → 0.5% |   20 → 26 | `checkNode`                        | `org.codenarc.rule.unnecessary.UnnecessarySemicolonAstVisitor`                 |
|  +23.1% |    +6 | 0.4% → 0.6% |   26 → 32 | `super$3$applyTo`                  | `org.codenarc.rule.unnecessary.UnnecessarySemicolonRule`                       |
| +120.0% |    +6 | 0.1% → 0.2% |    5 → 11 | `doCall`                           | `org.codenarc.source.AbstractSourceCode$_removeGrabTransformation_closure1`    |

##### JIT

|  Change | Delta |            % | Samples | Function                   | Location    |
| ------: | ----: | -----------: | ------: | -------------------------- | ----------- |
|  +76.5% |   +13 |  0.3% → 0.5% | 17 → 30 | `itable stub`              | `<unknown>` |
| +500.0% |    +5 | <0.1% → 0.1% |   1 → 6 | `I2C/C2I adapters(0xbbb)`  | `<unknown>` |
| +300.0% |    +3 | <0.1% → 0.1% |   1 → 4 | `I2C/C2I adapters(0xbb)`   | `<unknown>` |
| +200.0% |    +2 | <0.1% → 0.1% |   1 → 3 | `I2C/C2I adapters(0xba)`   | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `I2C/C2I adapters(0xbbab)` | `<unknown>` |
|  +10.0% |    +1 |         0.2% | 10 → 11 | `vtable stub`              | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `I2C/C2I adapters(0x)`     | `<unknown>` |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

##### Compiler

| Change | Delta |             % |       Samples | Function                                   | Location    |
| -----: | ----: | ------------: | ------------: | ------------------------------------------ | ----------- |
|  -3.7% |   -98 |         45.1% | 2,682 → 2,584 | `Compile::Compile`                         | `<unknown>` |
|  -3.4% |   -91 | 45.2% → 45.3% | 2,684 → 2,593 | `C2Compiler::compile_method`               | `<unknown>` |
|  -2.7% |   -89 | 56.0% → 56.5% | 3,325 → 3,236 | `CompileBroker::compiler_thread_loop`      | `<unknown>` |
|  -2.6% |   -87 | 55.4% → 55.9% | 3,290 → 3,203 | `CompileBroker::invoke_compiler_on_method` | `<unknown>` |
|  -3.1% |   -40 | 21.6% → 21.7% | 1,285 → 1,245 | `Compile::Code_Gen`                        | `<unknown>` |
|  -3.7% |   -38 |         17.4% |   1,034 → 996 | `Compile::Optimize`                        | `<unknown>` |
| -34.0% |   -35 |   1.7% → 1.2% |      103 → 68 | `Node::dominates`                          | `<unknown>` |
| -33.0% |   -35 |   1.8% → 1.2% |      106 → 71 | `MemNode::all_controls_dominate`           | `<unknown>` |
| -34.3% |   -35 |   1.7% → 1.2% |      102 → 67 | `StoreNode::Ideal`                         | `<unknown>` |
|  -6.9% |   -34 |   8.3% → 8.1% |     496 → 462 | `PhaseIdealLoop::optimize`                 | `<unknown>` |
| -34.3% |   -34 |   1.7% → 1.1% |       99 → 65 | `InitializeNode::can_capture_store`        | `<unknown>` |
|  -8.8% |   -33 |   6.3% → 5.9% |     373 → 340 | `PhaseIterGVN::optimize`                   | `<unknown>` |
| -33.7% |   -33 |   1.6% → 1.1% |       98 → 65 | `InitializeNode::detect_init_independence` | `<unknown>` |
|  -9.1% |   -32 |   5.9% → 5.6% |     353 → 321 | `PhaseIterGVN::transform_old`              | `<unknown>` |
| -19.5% |   -29 |   2.5% → 2.1% |     149 → 120 | `PhaseIdealLoop::build_loop_late`          | `<unknown>` |
|  -5.7% |   -24 |   7.0% → 6.9% |     418 → 394 | `PhaseIdealLoop::build_and_optimize`       | `<unknown>` |
| -26.1% |   -24 |   1.5% → 1.2% |       92 → 68 | `PhaseLive::compute`                       | `<unknown>` |
|  -5.5% |   -23 |   7.1% → 6.9% |     419 → 396 | `PhaseIdealLoop::PhaseIdealLoop`           | `<unknown>` |
| -20.2% |   -20 |   1.7% → 1.4% |       99 → 79 | `PhaseGVN::transform_no_reclaim`           | `<unknown>` |
| -44.4% |   -20 |   0.8% → 0.4% |       45 → 25 | `GraphKit::access_store_at`                | `<unknown>` |

##### Native

| Change | Delta |             % |       Samples | Function                                                                                                                                                        | Location    |
| -----: | ----: | ------------: | ------------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
|  -4.1% |  -150 | 61.9% → 61.6% | 3,676 → 3,526 | `Thread::call_run`                                                                                                                                              | `<unknown>` |
|  -4.1% |  -150 | 61.9% → 61.6% | 3,676 → 3,526 | `thread_native_entry`                                                                                                                                           | `<unknown>` |
|  -4.1% |  -149 | 61.9% → 61.6% | 3,677 → 3,528 | `_pthread_start`                                                                                                                                                | `<unknown>` |
|  -4.1% |  -149 | 61.9% → 61.6% | 3,677 → 3,528 | `thread_start`                                                                                                                                                  | `<unknown>` |
|  -2.8% |   -93 | 56.0% → 56.5% | 3,329 → 3,236 | `JavaThread::thread_main_inner`                                                                                                                                 | `<unknown>` |
| -16.4% |   -54 |   5.5% → 4.8% |     329 → 275 | `WorkerThread::run`                                                                                                                                             | `<unknown>` |
| -35.8% |   -39 |   1.8% → 1.2% |      109 → 70 | `G1EvacuateRegionsTask::scan_roots`                                                                                                                             | `<unknown>` |
| -41.9% |   -39 |   1.6% → 0.9% |       93 → 54 | `void G1ScanHRForRegionClosure::ChunkScanner::on_dirty_cards<G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)>` | `<unknown>` |
| -41.3% |   -38 |   1.5% → 0.9% |       92 → 54 | `G1ScanHRForRegionClosure::scan_memregion`                                                                                                                      | `<unknown>` |
| -40.9% |   -38 |   1.6% → 1.0% |       93 → 55 | `G1ScanHRForRegionClosure::scan_heap_roots`                                                                                                                     | `<unknown>` |
| -40.9% |   -38 |   1.6% → 1.0% |       93 → 55 | `G1ScanHRForRegionClosure::do_heap_region`                                                                                                                      | `<unknown>` |
| -40.9% |   -38 |   1.6% → 1.0% |       93 → 55 | `G1RemSet::scan_heap_roots`                                                                                                                                     | `<unknown>` |
| -17.1% |   -26 |   2.6% → 2.2% |     152 → 126 | `G1EvacuateRegionsBaseTask::work`                                                                                                                               | `<unknown>` |
| -22.6% |   -24 |   1.8% → 1.4% |      106 → 82 | `G1ParScanThreadState::trim_queue_to_threshold`                                                                                                                 | `<unknown>` |
| -22.3% |   -21 |   1.6% → 1.3% |       94 → 73 | `tlv_get_addr`                                                                                                                                                  | `<unknown>` |
| -46.7% |   -21 |   0.8% → 0.4% |       45 → 24 | `BarrierSetC2::store_at`                                                                                                                                        | `<unknown>` |
| -45.2% |   -19 |   0.7% → 0.4% |       42 → 23 | `ModRefBarrierSetC2::store_at_resolved`                                                                                                                         | `<unknown>` |
| -24.7% |   -19 |   1.3% → 1.0% |       77 → 58 | `G1ParScanThreadState::do_copy_to_survivor_space`                                                                                                               | `<unknown>` |
| -45.0% |   -18 |   0.7% → 0.4% |       40 → 22 | `BarrierSetC2::store_at_resolved`                                                                                                                               | `<unknown>` |
|  -9.4% |   -17 |   3.0% → 2.9% |     181 → 164 | `java_lang_Throwable::fill_in_stack_trace`                                                                                                                      | `<unknown>` |

##### Standard library

|  Change |  Delta |            % |   Samples | Function          | Location                                             |
| ------: | -----: | -----------: | --------: | ----------------- | ---------------------------------------------------- |
| removed | -2,220 | 37.4% → 0.0% | 2,220 → 0 | `invokeStatic`    | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |
| removed | -2,220 | 37.4% → 0.0% | 2,220 → 0 | `guardWithCatch`  | `java.lang.invoke.LambdaForm$MH.0x00000070010aa000`  |
| removed | -2,220 | 37.4% → 0.0% | 2,220 → 0 | `guard`           | `java.lang.invoke.LambdaForm$MH.0x00000070010aac00`  |
| removed | -2,220 | 37.4% → 0.0% | 2,220 → 0 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x00000070010a1800`  |
| removed | -2,220 | 37.4% → 0.0% | 2,220 → 0 | `reinvoke`        | `java.lang.invoke.LambdaForm$MH.0x00000070010aa800`  |
| removed | -2,213 | 37.2% → 0.0% | 2,213 → 0 | `invokeVirtual`   | `java.lang.invoke.LambdaForm$DMH.0x0000007001094400` |
| removed | -2,211 | 37.2% → 0.0% | 2,211 → 0 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x00000070010c7000`  |
| removed | -2,211 | 37.2% → 0.0% | 2,211 → 0 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x000000700108e000`  |
| removed | -2,211 | 37.2% → 0.0% | 2,211 → 0 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x00000070010c6400`  |
| removed | -2,198 | 37.0% → 0.0% | 2,198 → 0 | `guardWithCatch`  | `java.lang.invoke.LambdaForm$MH.0x0000007001098400`  |
| removed | -2,198 | 37.0% → 0.0% | 2,198 → 0 | `reinvoke`        | `java.lang.invoke.LambdaForm$MH.0x0000007001099c00`  |
| removed | -2,198 | 37.0% → 0.0% | 2,198 → 0 | `guard`           | `java.lang.invoke.LambdaForm$MH.0x000000700109a000`  |
| removed | -2,195 | 36.9% → 0.0% | 2,195 → 0 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x000000700102b000`  |
| removed | -2,194 | 36.9% → 0.0% | 2,194 → 0 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x000000700109bc00`  |
| removed | -2,188 | 36.8% → 0.0% | 2,188 → 0 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x00000070010a9800`  |
| removed | -2,155 | 36.3% → 0.0% | 2,155 → 0 | `invokeInterface` | `java.lang.invoke.LambdaForm$DMH.0x0000007001095000` |
| removed | -2,152 | 36.2% → 0.0% | 2,152 → 0 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x00000070010d3800`  |
| removed | -2,124 | 35.7% → 0.0% | 2,124 → 0 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x00000070010d2400`  |
| removed | -2,119 | 35.7% → 0.0% | 2,119 → 0 | `guardWithCatch`  | `java.lang.invoke.LambdaForm$MH.0x00000070010d2c00`  |
| removed | -2,119 | 35.7% → 0.0% | 2,119 → 0 | `guard`           | `java.lang.invoke.LambdaForm$MH.0x0000007001189000`  |

##### Ours

| Change | Delta |             % |       Samples | Function                      | Location                                                                    |
| -----: | ----: | ------------: | ------------: | ----------------------------- | --------------------------------------------------------------------------- |
|  -2.8% |   -62 | 37.2% → 37.5% | 2,211 → 2,149 | `execute`                     | `org.codenarc.CodeNarc`                                                     |
|  -2.8% |   -62 | 37.4% → 37.8% | 2,224 → 2,162 | `main`                        | `org.codenarc.CodeNarc`                                                     |
|  -2.7% |   -60 | 36.9% → 37.3% | 2,194 → 2,134 | `execute`                     | `org.codenarc.CodeNarcRunner`                                               |
|  -2.5% |   -52 | 34.6% → 34.9% | 2,053 → 2,001 | `processDirectory`            | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
|  -2.5% |   -52 | 34.6% → 35.0% | 2,054 → 2,002 | `analyze`                     | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
|  -2.5% |   -51 | 34.5% → 34.9% | 2,052 → 2,001 | `doCall`                      | `org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1` |
|  -2.9% |   -49 | 28.5% → 28.7% | 1,692 → 1,643 | `measureRuleProcessingTime`   | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
|  -2.3% |   -46 | 34.1% → 34.6% | 2,029 → 1,983 | `collectViolations`           | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
|  -2.1% |   -42 | 34.3% → 34.8% | 2,036 → 1,994 | `processFile`                 | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
|  -2.7% |   -36 | 22.3% → 22.5% | 1,325 → 1,289 | `doCall`                      | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`  |
|  -2.0% |   -24 | 20.2% → 20.5% | 1,199 → 1,175 | `applyTo`                     | `org.codenarc.rule.AbstractRule`                                            |
|  -2.4% |   -23 | 16.1% → 16.3% |     959 → 936 | `visitClass`                  | `org.codenarc.rule.AbstractAstVisitor`                                      |
|  -2.5% |   -18 | 12.3% → 12.4% |     730 → 712 | `visitMethod`                 | `org.codenarc.rule.AbstractAstVisitor`                                      |
| -59.1% |   -13 |   0.4% → 0.2% |        22 → 9 | `visitBinaryExpression`       | `org.codenarc.rule.design.InstanceofAstVisitor`                             |
| -17.6% |   -13 |   1.2% → 1.1% |       74 → 61 | `applyTo`                     | `org.codenarc.rule.AbstractSharedAstVisitorRule`                            |
| -19.0% |   -11 |   1.0% → 0.8% |       58 → 47 | `applyVisitor`                | `org.codenarc.rule.AbstractSharedAstVisitorRule`                            |
| -62.5% |   -10 |   0.3% → 0.1% |        16 → 6 | `visitMethodEx`               | `org.codenarc.rule.formatting.SpaceAfterClosingBraceAstVisitor`             |
| -64.3% |    -9 |   0.2% → 0.1% |        14 → 5 | `processMethodNode`           | `org.codenarc.rule.formatting.SpaceAfterClosingBraceAstVisitor`             |
| -66.7% |    -8 |   0.2% → 0.1% |        12 → 4 | `<init>`                      | `org.gmetrics.metric.abc.result.AggregateAbcMetricResult`                   |
| -66.7% |    -8 |   0.2% → 0.1% |        12 → 4 | `createAggregateMetricResult` | `org.gmetrics.metric.abc.AbcMetric`                                         |

##### JIT

|  Change | Delta |            % | Samples | Function                   | Location    |
| ------: | ----: | -----------: | ------: | -------------------------- | ----------- |
|  -92.3% |   -12 | 0.2% → <0.1% |  13 → 1 | `I2C/C2I adapters(0xbbbb)` | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `call_stub`                | `<unknown>` |

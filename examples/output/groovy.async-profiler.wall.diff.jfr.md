# Sampling profile diff

14,309 samples → 26,323 samples (+12,014 samples, +84.0%).

| Category          |  Change |   Delta |             % |         Samples |
| ----------------- | ------: | ------: | ------------: | --------------: |
| Native            |  +85.6% | +11,498 | 93.9% → 94.7% | 13,436 → 24,934 |
| Compiler          |  +38.4% |    +207 |   3.8% → 2.8% |       539 → 746 |
| Standard library  |  +89.3% |    +267 |   2.1% → 2.2% |       299 → 566 |
| Ours              |  +65.0% |     +13 |          0.1% |         20 → 33 |
| JIT               |  +50.0% |      +7 |          0.1% |         14 → 21 |
| Unknown           |     new |     +21 |   0.0% → 0.1% |          0 → 21 |
| Garbage collector | +100.0% |      +1 |         <0.1% |           1 → 2 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |            % | Samples | Function                             | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------------ | -------------- |
| +400.0% |   +12 | <0.1% → 0.1% |  3 → 15 | `Node::set_req_X`                    | `libjvm.dylib` |
|  +43.5% |   +10 |  0.2% → 0.1% | 23 → 33 | `PhaseChaitin::Split`                | `libjvm.dylib` |
| +250.0% |   +10 | <0.1% → 0.1% |  4 → 14 | `PhaseChaitin::gather_lrg_masks`     | `libjvm.dylib` |
|     new |    +8 | 0.0% → <0.1% |   0 → 8 | `IntervalWalker::walk_to`            | `libjvm.dylib` |
| +700.0% |    +7 |        <0.1% |   1 → 8 | `ConnectionGraph::compute_escape`    | `libjvm.dylib` |
| +600.0% |    +6 |        <0.1% |   1 → 7 | `PhiNode::Ideal`                     | `libjvm.dylib` |
| +120.0% |    +6 |        <0.1% |  5 → 11 | `ciObjectFactory::get_metadata`      | `libjvm.dylib` |
| +200.0% |    +6 |        <0.1% |   3 → 9 | `PhaseIterGVN::subsume_node`         | `libjvm.dylib` |
|     new |    +6 | 0.0% → <0.1% |   0 → 6 | `LinearScan::assign_reg_num`         | `libjvm.dylib` |
|  +55.6% |    +5 |         0.1% |  9 → 14 | `IndexSetIterator::advance_and_next` | `libjvm.dylib` |
| +125.0% |    +5 |        <0.1% |   4 → 9 | `PhaseIdealLoop::build_loop_late`    | `libjvm.dylib` |
| +125.0% |    +5 |        <0.1% |   4 → 9 | `Type::cmp`                          | `libjvm.dylib` |
| +500.0% |    +5 |        <0.1% |   1 → 6 | `Compile::find_alias_type`           | `libjvm.dylib` |
|  +66.7% |    +4 |        <0.1% |  6 → 10 | `PhaseOutput::BuildOopMaps`          | `libjvm.dylib` |
|  +80.0% |    +4 |        <0.1% |   5 → 9 | `PhaseLive::compute`                 | `libjvm.dylib` |
| +200.0% |    +4 |        <0.1% |   2 → 6 | `PhaseChaitin::build_ifg_virtual`    | `libjvm.dylib` |
| +133.3% |    +4 |        <0.1% |   3 → 7 | `PhaseIdealLoop::build_loop_early`   | `libjvm.dylib` |
|  +80.0% |    +4 |        <0.1% |   5 → 9 | `PhaseIdealLoop::is_dominator`       | `libjvm.dylib` |
|     new |    +4 | 0.0% → <0.1% |   0 → 4 | `PhiNode::Value`                     | `libjvm.dylib` |
|     new |    +4 | 0.0% → <0.1% |   0 → 4 | `PhaseCFG::hoist_to_cheaper_block`   | `libjvm.dylib` |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |            % | Samples | Function                                      | Location       |
| ------: | ----: | -----------: | ------: | --------------------------------------------- | -------------- |
|  -51.6% |   -16 |  0.2% → 0.1% | 31 → 15 | `Node::dominates`                             | `libjvm.dylib` |
|  -35.7% |    -5 | 0.1% → <0.1% |  14 → 9 | `PhaseChaitin::build_ifg_physical`            | `libjvm.dylib` |
|  -62.5% |    -5 | 0.1% → <0.1% |   8 → 3 | `PhaseLive::add_liveout`                      | `libjvm.dylib` |
|  -50.0% |    -3 |        <0.1% |   6 → 3 | `NodeHash::hash_find_insert`                  | `libjvm.dylib` |
|  -37.5% |    -3 | 0.1% → <0.1% |   8 → 5 | `PhaseIdealLoop::build_loop_late_post_work`   | `libjvm.dylib` |
| removed |    -3 | <0.1% → 0.0% |   3 → 0 | `PhaseIterGVN::remove_globally_dead_node`     | `libjvm.dylib` |
| removed |    -3 | <0.1% → 0.0% |   3 → 0 | `RegionNode::is_unreachable_from_root`        | `libjvm.dylib` |
|  -75.0% |    -3 |        <0.1% |   4 → 1 | `decodeHeapOopNode::rule`                     | `libjvm.dylib` |
|  -75.0% |    -3 |        <0.1% |   4 → 1 | `Node::set_req`                               | `libjvm.dylib` |
| removed |    -3 | <0.1% → 0.0% |   3 → 0 | `Matcher::pd_clone_node`                      | `libjvm.dylib` |
| removed |    -3 | <0.1% → 0.0% |   3 → 0 | `ValueStack::ValueStack`                      | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `TypeInterfaces::union_with`                  | `libjvm.dylib` |
|  -66.7% |    -2 |        <0.1% |   3 → 1 | `RegMask::is_misaligned_pair`                 | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `Scheduling::DoScheduling`                    | `libjvm.dylib` |
|  -66.7% |    -2 |        <0.1% |   3 → 1 | `CallStaticJavaNode::Opcode`                  | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `Scheduling::AddNodeToAvailableList`          | `libjvm.dylib` |
|  -50.0% |    -2 |        <0.1% |   4 → 2 | `PhaseChaitin::post_allocate_copy_removal`    | `libjvm.dylib` |
|  -28.6% |    -2 |        <0.1% |   7 → 5 | `PhaseIdealLoop::Dominators`                  | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `Scheduling::ComputeRegisterAntidependencies` | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `RegMask::Size`                               | `libjvm.dylib` |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|  Change | Delta |            % |       Samples | Function                                                 | Location                                                                    |
| ------: | ----: | -----------: | ------------: | -------------------------------------------------------- | --------------------------------------------------------------------------- |
|  +50.8% |  +830 | 11.4% → 9.4% | 1,633 → 2,463 | `CompileBroker::compiler_thread_loop`                    | `libjvm.dylib`                                                              |
|  +54.7% |  +490 |  6.3% → 5.3% |   896 → 1,386 | `CompileQueue::get`                                      | `libjvm.dylib`                                                              |
|  +87.2% |  +407 |         3.3% |     467 → 874 | `main(String[])`                                         | `org.codenarc.CodeNarc`                                                     |
|  +87.3% |  +407 |         3.3% |     466 → 873 | `linkToCallSite(Object, Object, Object)`                 | `java.lang.invoke.Invokers$Holder`                                          |
|  +87.7% |  +407 |  3.2% → 3.3% |     464 → 871 | `execute(String[])`                                      | `org.codenarc.CodeNarc`                                                     |
|  +88.1% |  +407 |  3.2% → 3.3% |     462 → 869 | `linkToCallSite(Object, Object)`                         | `java.lang.invoke.Invokers$Holder`                                          |
|  +88.0% |  +405 |  3.2% → 3.3% |     460 → 865 | `execute()`                                              | `org.codenarc.CodeNarcRunner`                                               |
|  +92.0% |  +401 |  3.0% → 3.2% |     436 → 837 | `linkToCallSite(Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                                          |
|  +89.8% |  +398 |  3.1% → 3.2% |     443 → 841 | `linkToCallSite(Object, Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                                          |
|  +92.0% |  +390 |  3.0% → 3.1% |     424 → 814 | `collectViolations(SourceCode, RuleSet)`                 | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
|  +91.5% |  +389 |  3.0% → 3.1% |     425 → 814 | `processFile(String, DirectoryResults, RuleSet)`         | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
|  +90.2% |  +387 |  3.0% → 3.1% |     429 → 816 | `doCall(Object)`                                         | `org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1` |
|  +90.2% |  +387 |  3.0% → 3.1% |     429 → 816 | `processDirectory(String, RuleSet)`                      | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
|  +89.8% |  +386 |  3.0% → 3.1% |     430 → 816 | `analyze(RuleSet)`                                       | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
| +105.8% |  +362 |  2.4% → 2.7% |     342 → 704 | `measureRuleProcessingTime(Rule, Closure)`               | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
|  +45.7% |  +336 |  5.1% → 4.1% |   736 → 1,072 | `CompileBroker::invoke_compiler_on_method`               | `libjvm.dylib`                                                              |
| +107.0% |  +276 |  1.8% → 2.0% |     258 → 534 | `doCall(Object)`                                         | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`  |
| +104.2% |  +247 |  1.7% → 1.8% |     237 → 484 | `applyTo(SourceCode)`                                    | `org.codenarc.rule.AbstractRule`                                            |
|  +39.4% |  +238 |  4.2% → 3.2% |     604 → 842 | `C2Compiler::compile_method`                             | `libjvm.dylib`                                                              |
|  +38.9% |  +235 |  4.2% → 3.2% |     604 → 839 | `Compile::Compile`                                       | `libjvm.dylib`                                                              |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

|  Change | Delta |            % | Samples | Function                                              | Location                                            |
| ------: | ----: | -----------: | ------: | ----------------------------------------------------- | --------------------------------------------------- |
| removed |   -65 |  0.5% → 0.0% |  65 → 0 | `linkToCallSite(Object, Object, long, Object)`        | `java.lang.invoke.LambdaForm$MH.0x000000a001320400` |
| removed |   -21 |  0.1% → 0.0% |  21 → 0 | `linkToCallSite(Object, Object)`                      | `java.lang.invoke.LambdaForm$MH.0x000000a0010c8400` |
|  -53.1% |   -17 |  0.2% → 0.1% | 32 → 15 | `Node::dominates`                                     | `libjvm.dylib`                                      |
|  -51.5% |   -17 |  0.2% → 0.1% | 33 → 16 | `MemNode::all_controls_dominate`                      | `libjvm.dylib`                                      |
|  -53.6% |   -15 | 0.2% → <0.1% | 28 → 13 | `InitializeNode::detect_init_independence`            | `libjvm.dylib`                                      |
|  -53.6% |   -15 | 0.2% → <0.1% | 28 → 13 | `InitializeNode::can_capture_store`                   | `libjvm.dylib`                                      |
|  -51.7% |   -15 |  0.2% → 0.1% | 29 → 14 | `StoreNode::Ideal`                                    | `libjvm.dylib`                                      |
| removed |    -8 |  0.1% → 0.0% |   8 → 0 | `linkToCallSite(Object, int, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000a0013d9800` |
|  -25.9% |    -7 |  0.2% → 0.1% | 27 → 20 | `PhaseGVN::transform_no_reclaim`                      | `libjvm.dylib`                                      |
|  -63.6% |    -7 | 0.1% → <0.1% |  11 → 4 | `linkToCallSite(Object, int, Object)`                 | `java.lang.invoke.Invokers$Holder`                  |
|  -50.0% |    -5 | 0.1% → <0.1% |  10 → 5 | `GraphKit::store_to_memory`                           | `libjvm.dylib`                                      |
|  -55.6% |    -5 | 0.1% → <0.1% |   9 → 4 | `Compile::remove_speculative_types`                   | `libjvm.dylib`                                      |
| removed |    -5 | <0.1% → 0.0% |   5 → 0 | `linkToCallSite(Object, int, int, Object)`            | `java.lang.invoke.LambdaForm$MH.0x000000a0013f5000` |
|  -57.1% |    -4 |        <0.1% |   7 → 3 | `MemNode::find_previous_store`                        | `libjvm.dylib`                                      |
|  -44.4% |    -4 | 0.1% → <0.1% |   9 → 5 | `PhaseOutput::Process_OopMap_Node`                    | `libjvm.dylib`                                      |
|  -40.0% |    -4 | 0.1% → <0.1% |  10 → 6 | `RegionNode::Ideal`                                   | `libjvm.dylib`                                      |
|  -33.3% |    -4 | 0.1% → <0.1% |  12 → 8 | `PhaseLive::add_liveout`                              | `libjvm.dylib`                                      |
|  -80.0% |    -4 |        <0.1% |   5 → 1 | `MethodLiveness::BasicBlock::get_liveness_at`         | `libjvm.dylib`                                      |
| removed |    -4 | <0.1% → 0.0% |   4 → 0 | `Matcher::pd_clone_node`                              | `libjvm.dylib`                                      |
| removed |    -4 | <0.1% → 0.0% |   4 → 0 | `linkToCallSite(Object, Object, Object, int, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000a00134c800` |

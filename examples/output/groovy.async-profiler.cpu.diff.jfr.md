# Sampling profile diff

6,001 samples → 5,827 samples (-174 samples, -2.9%).

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

|  Change | Delta |            % | Samples | Function                                   | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------------------ | -------------- |
|  +48.3% |   +14 |  0.5% → 0.7% | 29 → 43 | `PhaseChaitin::gather_lrg_masks`           | `libjvm.dylib` |
|  +48.1% |   +13 |  0.4% → 0.7% | 27 → 40 | `PhaseIdealLoop::build_loop_early`         | `libjvm.dylib` |
|  +52.4% |   +11 |  0.3% → 0.5% | 21 → 32 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |
|  +61.1% |   +11 |  0.3% → 0.5% | 18 → 29 | `Node::set_req_X`                          | `libjvm.dylib` |
|     new |   +11 |  0.0% → 0.2% |  0 → 11 | `I2C/C2I adapters(0xbb)`                   | `<unknown>`    |
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
| +150.0% |    +6 |  0.1% → 0.2% |  4 → 10 | `I2C/C2I adapters(0xb)`                    | `<unknown>`    |
| +125.0% |    +5 |  0.1% → 0.2% |   4 → 9 | `Node::add_req`                            | `libjvm.dylib` |
| +125.0% |    +5 |  0.1% → 0.2% |   4 → 9 | `ciInstanceKlass::get_field_by_offset`     | `libjvm.dylib` |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |            % |  Samples | Function                               | Location       |
| ------: | ----: | -----------: | -------: | -------------------------------------- | -------------- |
|  -19.2% |   -23 |  2.0% → 1.7% | 120 → 97 | `PhaseChaitin::Split`                  | `libjvm.dylib` |
|  -22.2% |   -22 |  1.6% → 1.3% |  99 → 77 | `Node::dominates`                      | `libjvm.dylib` |
|  -34.1% |   -14 |  0.7% → 0.5% |  41 → 27 | `PhaseChaitin::elide_copy`             | `libjvm.dylib` |
|  -44.8% |   -13 |  0.5% → 0.3% |  29 → 16 | `Type::cmp`                            | `libjvm.dylib` |
|  -31.0% |   -13 |  0.7% → 0.5% |  42 → 29 | `ciObjectFactory::get_metadata`        | `libjvm.dylib` |
|  -18.8% |   -12 |  1.1% → 0.9% |  64 → 52 | `IndexSetIterator::advance_and_next`   | `libjvm.dylib` |
|  -92.3% |   -12 | 0.2% → <0.1% |   13 → 1 | `I2C/C2I adapters(0xbaa)`              | `<unknown>`    |
|  -41.7% |   -10 |  0.4% → 0.2% |  24 → 14 | `PhaseLive::add_liveout`               | `libjvm.dylib` |
|  -35.7% |   -10 |  0.5% → 0.3% |  28 → 18 | `NodeHash::hash_find_insert`           | `libjvm.dylib` |
|  -38.5% |   -10 |  0.4% → 0.3% |  26 → 16 | `PhaseIterGVN::add_users_to_worklist`  | `libjvm.dylib` |
|  -26.7% |    -8 |  0.5% → 0.4% |  30 → 22 | `PhaseIdealLoop::Dominators`           | `libjvm.dylib` |
|  -21.2% |    -7 |  0.5% → 0.4% |  33 → 26 | `Matcher::xform`                       | `libjvm.dylib` |
|  -77.8% |    -7 | 0.1% → <0.1% |    9 → 2 | `LinearScanWalker::split_before_usage` | `libjvm.dylib` |
|  -33.3% |    -6 |  0.3% → 0.2% |  18 → 12 | `PhaseIterGVN::transform_old`          | `libjvm.dylib` |
|   -9.5% |    -6 |         1.0% |  63 → 57 | `PhaseChaitin::build_ifg_physical`     | `libjvm.dylib` |
|  -54.5% |    -6 |  0.2% → 0.1% |   11 → 5 | `Matcher::Label_Root`                  | `libjvm.dylib` |
|  -33.3% |    -6 |  0.3% → 0.2% |  18 → 12 | `Node::is_CFG`                         | `libjvm.dylib` |
| removed |    -6 |  0.1% → 0.0% |    6 → 0 | `Scheduling::ComputeUseCount`          | `libjvm.dylib` |
|  -33.3% |    -6 |  0.3% → 0.2% |  18 → 12 | `LinearScan::assign_reg_num`           | `libjvm.dylib` |
|  -20.8% |    -5 |  0.4% → 0.3% |  24 → 19 | `Unique_Node_List::remove`             | `libjvm.dylib` |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

| Change | Delta |           % |   Samples | Function                                              | Location                                                        |
| -----: | ----: | ----------: | --------: | ----------------------------------------------------- | --------------------------------------------------------------- |
|    new |  +260 | 0.0% → 4.5% |   0 → 260 | `linkToCallSite(Object, Object, long, Object)`        | `java.lang.invoke.LambdaForm$MH.0x000000b801320400`             |
|    new |  +115 | 0.0% → 2.0% |   0 → 115 | `linkToCallSite(Object, Object)`                      | `java.lang.invoke.LambdaForm$MH.0x000000b8010c8400`             |
|    new |   +36 | 0.0% → 0.6% |    0 → 36 | `linkToCallSite(Object, int, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000b8013d6800`             |
|    new |   +26 | 0.0% → 0.4% |    0 → 26 | `linkToCallSite(Object, Object, int, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000b8010d6400`             |
| +16.1% |   +22 | 2.3% → 2.7% | 137 → 159 | `PhaseCFG::do_global_code_motion`                     | `libjvm.dylib`                                                  |
|    new |   +21 | 0.0% → 0.4% |    0 → 21 | `linkToCallSite(Object, int, int, Object)`            | `java.lang.invoke.LambdaForm$MH.0x000000b8013f0c00`             |
|    new |   +19 | 0.0% → 0.3% |    0 → 19 | `linkToCallSite(Object, long, Object)`                | `java.lang.invoke.LambdaForm$MH.0x000000b80131c800`             |
|    new |   +19 | 0.0% → 0.3% |    0 → 19 | `linkToCallSite(Object, Object, Object, int, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000b80134c800`             |
| +29.3% |   +17 | 1.0% → 1.3% |   58 → 75 | `Compile::call_generator`                             | `libjvm.dylib`                                                  |
| +31.3% |   +15 | 0.8% → 1.1% |   48 → 63 | `LIR_Assembler::emit_lir_list`                        | `libjvm.dylib`                                                  |
| +29.4% |   +15 | 0.8% → 1.1% |   51 → 66 | `getAstVisitor()`                                     | `org.codenarc.rule.AbstractAstVisitorRule`                      |
| +10.7% |   +14 | 2.2% → 2.5% | 131 → 145 | `PhaseCFG::global_code_motion`                        | `libjvm.dylib`                                                  |
| +38.9% |   +14 | 0.6% → 0.9% |   36 → 50 | `PhaseIdealLoop::build_loop_early`                    | `libjvm.dylib`                                                  |
| +28.0% |   +14 | 0.8% → 1.1% |   50 → 64 | `LIR_Assembler::emit_code`                            | `libjvm.dylib`                                                  |
|  +5.9% |   +14 | 3.9% → 4.3% | 236 → 250 | `isRuleSuppressed(Rule)`                              | `org.codenarc.analyzer.SuppressionAnalyzer`                     |
| +73.7% |   +14 | 0.3% → 0.6% |   19 → 33 | `visitClassComplete(ClassNode)`                       | `org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor` |
| +92.9% |   +13 | 0.2% → 0.5% |   14 → 27 | `PhaseIFG::effective_degree`                          | `libjvm.dylib`                                                  |
|  +8.1% |   +12 | 2.5% → 2.7% | 148 → 160 | `PhaseOutput::Output`                                 | `libjvm.dylib`                                                  |
| +21.4% |   +12 | 0.9% → 1.2% |   56 → 68 | `PhaseOutput::fill_buffer`                            | `libjvm.dylib`                                                  |
| +80.0% |   +12 | 0.2% → 0.5% |   15 → 27 | `PhaseIdealLoop::split_if_with_blocks_pre`            | `libjvm.dylib`                                                  |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

|  Change | Delta |             % |       Samples | Function                                                 | Location                                            |
| ------: | ----: | ------------: | ------------: | -------------------------------------------------------- | --------------------------------------------------- |
| removed |  -285 |   4.7% → 0.0% |       285 → 0 | `linkToCallSite(Object, Object, long, Object)`           | `java.lang.invoke.LambdaForm$MH.0x000000f001320400` |
|   -4.0% |  -139 | 58.0% → 57.3% | 3,479 → 3,340 | `CompileBroker::compiler_thread_loop`                    | `libjvm.dylib`                                      |
|   -3.6% |  -122 | 57.2% → 56.8% | 3,430 → 3,308 | `CompileBroker::invoke_compiler_on_method`               | `libjvm.dylib`                                      |
|   -4.0% |  -112 | 46.4% → 45.9% | 2,785 → 2,673 | `Compile::Compile`                                       | `libjvm.dylib`                                      |
|   -4.0% |  -111 | 46.4% → 45.9% | 2,787 → 2,676 | `C2Compiler::compile_method`                             | `libjvm.dylib`                                      |
| removed |  -106 |   1.8% → 0.0% |       106 → 0 | `linkToCallSite(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000f0010c8400` |
|   -7.8% |   -84 | 18.0% → 17.1% |   1,082 → 998 | `Compile::Optimize`                                      | `libjvm.dylib`                                      |
|   -7.6% |   -57 | 12.5% → 11.9% |     753 → 696 | `PhaseChaitin::Register_Allocate`                        | `libjvm.dylib`                                      |
|  -14.6% |   -55 |   6.3% → 5.5% |     377 → 322 | `PhaseIterGVN::transform_old`                            | `libjvm.dylib`                                      |
|   -2.5% |   -55 | 36.3% → 36.4% | 2,178 → 2,123 | `linkToCallSite(Object, Object)`                         | `java.lang.invoke.Invokers$Holder`                  |
|  -13.7% |   -54 |   6.6% → 5.9% |     395 → 341 | `PhaseIterGVN::optimize`                                 | `libjvm.dylib`                                      |
|   -2.4% |   -52 | 36.5% → 36.7% | 2,191 → 2,139 | `main(String[])`                                         | `org.codenarc.CodeNarc`                             |
|   -2.4% |   -52 | 36.4% → 36.6% | 2,187 → 2,135 | `linkToCallSite(Object, Object, Object)`                 | `java.lang.invoke.Invokers$Holder`                  |
|   -2.4% |   -52 | 36.3% → 36.5% | 2,177 → 2,125 | `execute(String[])`                                      | `org.codenarc.CodeNarc`                             |
|   -2.4% |   -51 | 36.0% → 36.2% | 2,162 → 2,111 | `execute()`                                              | `org.codenarc.CodeNarcRunner`                       |
|   -3.1% |   -51 | 27.7% → 27.6% | 1,662 → 1,611 | `measureRuleProcessingTime(Rule, Closure)`               | `org.codenarc.analyzer.AbstractSourceAnalyzer`      |
|   -2.4% |   -50 | 34.4% → 34.5% | 2,063 → 2,013 | `linkToCallSite(Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
|   -2.2% |   -45 | 34.7% → 35.0% | 2,082 → 2,037 | `linkToCallSite(Object, Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                  |
|   -2.2% |   -45 | 33.6% → 33.8% | 2,017 → 1,972 | `analyze(RuleSet)`                                       | `org.codenarc.analyzer.FilesystemSourceAnalyzer`    |
|   -2.2% |   -45 | 33.4% → 33.7% | 2,007 → 1,962 | `processFile(String, DirectoryResults, RuleSet)`         | `org.codenarc.analyzer.FilesystemSourceAnalyzer`    |

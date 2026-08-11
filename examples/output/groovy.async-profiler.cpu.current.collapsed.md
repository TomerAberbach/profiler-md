# Sampling profile

Collected 6,382 samples.

| Category          |     % | Samples |
| ----------------- | ----: | ------: |
| Compiler          | 41.9% |   2,675 |
| Native            | 31.4% |   2,001 |
| Standard library  | 24.3% |   1,552 |
| Ours              |  1.3% |      81 |
| JIT               |  1.0% |      67 |
| Garbage collector |  0.1% |       5 |
| Unknown           | <0.1% |       1 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|    % | Samples | Function                                    | Location    |
| ---: | ------: | ------------------------------------------- | ----------- |
| 1.9% |     122 | `PhaseChaitin::Split`                       | `<unknown>` |
| 1.9% |     119 | `pthread_jit_write_protect_np`              | `<unknown>` |
| 1.7% |     111 | `tlv_get_addr`                              | `<unknown>` |
| 1.1% |      69 | `Node::dominates`                           | `<unknown>` |
| 1.0% |      62 | `PhaseChaitin::build_ifg_physical`          | `<unknown>` |
| 0.9% |      60 | `IndexSetIterator::advance_and_next`        | `<unknown>` |
| 0.7% |      44 | `PhaseAggressiveCoalesce::insert_copies`    | `<unknown>` |
| 0.7% |      44 | `PhaseIdealLoop::build_loop_late`           | `<unknown>` |
| 0.6% |      41 | `PhaseLive::add_liveout`                    | `<unknown>` |
| 0.6% |      39 | `PhaseLive::compute`                        | `<unknown>` |
| 0.6% |      37 | `ciObjectFactory::get_metadata`             | `<unknown>` |
| 0.6% |      37 | `PhaseIdealLoop::build_loop_early`          | `<unknown>` |
| 0.6% |      36 | `Node::set_req_X`                           | `<unknown>` |
| 0.5% |      31 | `PhaseChaitin::post_allocate_copy_removal`  | `<unknown>` |
| 0.5% |      30 | `PhaseChaitin::elide_copy`                  | `<unknown>` |
| 0.5% |      29 | `Compile::disconnect_useless_nodes`         | `<unknown>` |
| 0.4% |      28 | `PhaseIdealLoop::is_dominator`              | `<unknown>` |
| 0.4% |      28 | `Compile::identify_useful_nodes`            | `<unknown>` |
| 0.4% |      26 | `itable stub`                               | `<unknown>` |
| 0.4% |      26 | `PhaseIdealLoop::build_loop_late_post_work` | `<unknown>` |

#### Categories

##### Compiler

|    % | Samples | Function                                    | Location    |
| ---: | ------: | ------------------------------------------- | ----------- |
| 1.9% |     122 | `PhaseChaitin::Split`                       | `<unknown>` |
| 1.1% |      69 | `Node::dominates`                           | `<unknown>` |
| 1.0% |      62 | `PhaseChaitin::build_ifg_physical`          | `<unknown>` |
| 0.9% |      60 | `IndexSetIterator::advance_and_next`        | `<unknown>` |
| 0.7% |      44 | `PhaseAggressiveCoalesce::insert_copies`    | `<unknown>` |
| 0.7% |      44 | `PhaseIdealLoop::build_loop_late`           | `<unknown>` |
| 0.6% |      41 | `PhaseLive::add_liveout`                    | `<unknown>` |
| 0.6% |      39 | `PhaseLive::compute`                        | `<unknown>` |
| 0.6% |      37 | `ciObjectFactory::get_metadata`             | `<unknown>` |
| 0.6% |      37 | `PhaseIdealLoop::build_loop_early`          | `<unknown>` |
| 0.6% |      36 | `Node::set_req_X`                           | `<unknown>` |
| 0.5% |      31 | `PhaseChaitin::post_allocate_copy_removal`  | `<unknown>` |
| 0.5% |      30 | `PhaseChaitin::elide_copy`                  | `<unknown>` |
| 0.5% |      29 | `Compile::disconnect_useless_nodes`         | `<unknown>` |
| 0.4% |      28 | `PhaseIdealLoop::is_dominator`              | `<unknown>` |
| 0.4% |      28 | `Compile::identify_useful_nodes`            | `<unknown>` |
| 0.4% |      26 | `PhaseIdealLoop::build_loop_late_post_work` | `<unknown>` |
| 0.4% |      26 | `IndexSet::initialize`                      | `<unknown>` |
| 0.4% |      24 | `Node_Backward_Iterator::next`              | `<unknown>` |
| 0.4% |      23 | `MachNode::rematerialize`                   | `<unknown>` |

##### Native

|     % | Samples | Function                                    | Location    |
| ----: | ------: | ------------------------------------------- | ----------- |
|  1.9% |     119 | `pthread_jit_write_protect_np`              | `<unknown>` |
|  1.7% |     111 | `tlv_get_addr`                              | `<unknown>` |
| <0.1% |       2 | `InterpreterRuntime::ldc`                   | `<unknown>` |
| <0.1% |       2 | `constantPoolHandle::~constantPoolHandle`   | `<unknown>` |
| <0.1% |       1 | `InterpreterRuntime::resolve_invokedynamic` | `<unknown>` |
| <0.1% |       1 | `InterpreterRuntime::anewarray`             | `<unknown>` |
| <0.1% |       1 | `ConstantPool::klass_at_impl`               | `<unknown>` |

##### Ours

|     % | Samples | Function                      | Location                                                                   |
| ----: | ------: | ----------------------------- | -------------------------------------------------------------------------- |
| <0.1% |       2 | `applyTo`                     | `org.codenarc.rule.AbstractAstVisitorRule`                                 |
| <0.1% |       2 | `writeViolation`              | `org.codenarc.report.TextReportWriter`                                     |
| <0.1% |       2 | `getName`                     | `org.codenarc.rule.size.CrapMetricRule`                                    |
| <0.1% |       2 | `$getStaticMetaClass`         | `org.codenarc.rule.unused.ReferenceCollector`                              |
| <0.1% |       1 | `visitMethod`                 | `org.codenarc.rule.AbstractAstVisitor`                                     |
| <0.1% |       1 | `doCall`                      | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3` |
| <0.1% |       1 | `super$3$visitBlockStatement` | `org.codenarc.rule.formatting.IndentationAstVisitor`                       |
| <0.1% |       1 | `visitBlockStatement`         | `org.codenarc.rule.formatting.IndentationAstVisitor`                       |
| <0.1% |       1 | `addViolationIfDuplicate`     | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                         |
| <0.1% |       1 | `calculateForClass`           | `org.gmetrics.metric.AbstractMethodMetric`                                 |
| <0.1% |       1 | `getAstVisitor`               | `org.codenarc.rule.AbstractAstVisitorRule`                                 |
| <0.1% |       1 | `hasSingleLambdaArgument`     | `org.codenarc.rule.formatting.SpaceAfterMethodCallNameRuleAstVisitor`      |
| <0.1% |       1 | `getAstVisitor`               | `org.codenarc.rule.groovyism.ExplicitArrayListInstantiationRule`           |
| <0.1% |       1 | `visitMethod`                 | `org.codenarc.rule.naming.MethodNameAstVisitor`                            |
| <0.1% |       1 | `line`                        | `org.codenarc.source.AbstractSourceCode`                                   |
| <0.1% |       1 | `<init>`                      | `org.codenarc.rule.naming.PropertyNameAstVisitor`                          |
| <0.1% |       1 | `visitMethodCallExpression`   | `org.codenarc.rule.groovyism.ExplicitCallToMethodAstVisitor`               |
| <0.1% |       1 | `visitClass`                  | `org.codenarc.rule.AbstractMethodCallExpressionVisitor`                    |
| <0.1% |       1 | `hasOpeningBraceOnSameLine`   | `org.codenarc.rule.formatting.BracesForMethodAstVisitor`                   |
| <0.1% |       1 | `checkParametersCount`        | `org.codenarc.rule.size.ParameterCountAstVisitor`                          |

##### JIT

|     % | Samples | Function                   | Location    |
| ----: | ------: | -------------------------- | ----------- |
|  0.4% |      26 | `itable stub`              | `<unknown>` |
|  0.2% |      11 | `vtable stub`              | `<unknown>` |
|  0.1% |       6 | `I2C/C2I adapters(0xbbb)`  | `<unknown>` |
|  0.1% |       6 | `I2C/C2I adapters(0xb)`    | `<unknown>` |
|  0.1% |       5 | `I2C/C2I adapters(0xbb)`   | `<unknown>` |
|  0.1% |       5 | `zero_blocks`              | `<unknown>` |
| <0.1% |       2 | `I2C/C2I adapters(0xbbbb)` | `<unknown>` |
| <0.1% |       2 | `I2C/C2I adapters(0xba)`   | `<unknown>` |
| <0.1% |       2 | `call_stub`                | `<unknown>` |
| <0.1% |       1 | `I2C/C2I adapters(0xa)`    | `<unknown>` |
| <0.1% |       1 | `I2C/C2I adapters(0xbba)`  | `<unknown>` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `PhaseChaitin::Split` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |     122 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `pthread_jit_write_protect_np` (`<unknown>`)

|    % | Samples | Caller                                           | Location    |
| ---: | ------: | ------------------------------------------------ | ----------- |
| 3.4% |       4 | `InterpreterRuntime::ldc`                        | `<unknown>` |
| 1.7% |       2 | `InterpreterRuntime::anewarray`                  | `<unknown>` |
| 1.7% |       2 | `InterpreterRuntime::resolve_from_cache`         | `<unknown>` |
| 0.8% |       1 | `InterpreterRuntime::frequency_counter_overflow` | `<unknown>` |
| 0.8% |       1 | `BarrierSetNMethod::nmethod_stub_entry_barrier`  | `<unknown>` |

##### `tlv_get_addr` (`<unknown>`)

|    % | Samples | Caller                        | Location    |
| ---: | ------: | ----------------------------- | ----------- |
| 3.6% |       4 | `PhaseLive::add_liveout`      | `<unknown>` |
| 2.7% |       3 | `TypePtr::interfaces`         | `<unknown>` |
| 2.7% |       3 | `PhaseLive::compute`          | `<unknown>` |
| 1.8% |       2 | `LIRGenerator::load_constant` | `<unknown>` |
| 1.8% |       2 | `TypeInstPtr::make`           | `<unknown>` |

##### `Node::dominates` (`<unknown>`)

|     % | Samples | Caller                                     | Location    |
| ----: | ------: | ------------------------------------------ | ----------- |
| 98.6% |      68 | `MemNode::all_controls_dominate`           | `<unknown>` |
|  1.4% |       1 | `InitializeNode::detect_init_independence` | `<unknown>` |

##### `PhaseChaitin::build_ifg_physical` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |      62 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `IndexSetIterator::advance_and_next` (`<unknown>`)

|     % | Samples | Caller                                                             | Location    |
| ----: | ------: | ------------------------------------------------------------------ | ----------- |
| 18.3% |      11 | `PhaseIFG::effective_degree`                                       | `<unknown>` |
| 16.7% |      10 | `PhaseChaitin::build_ifg_physical`                                 | `<unknown>` |
| 11.7% |       7 | `PhaseLive::add_liveout`                                           | `<unknown>` |
| 10.0% |       6 | `PhaseChaitin::Select`                                             | `<unknown>` |
|  8.3% |       5 | `PhaseChaitin::remove_bound_register_from_interfering_live_ranges` | `<unknown>` |

##### `PhaseAggressiveCoalesce::insert_copies` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |      44 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `PhaseIdealLoop::build_loop_late` (`<unknown>`)

|      % | Samples | Caller                               | Location    |
| -----: | ------: | ------------------------------------ | ----------- |
| 100.0% |      44 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |

##### `PhaseLive::add_liveout` (`<unknown>`)

|     % | Samples | Caller                            | Location    |
| ----: | ------: | --------------------------------- | ----------- |
| 97.6% |      40 | `PhaseLive::compute`              | `<unknown>` |
|  2.4% |       1 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `PhaseLive::compute` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |      39 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `ciObjectFactory::get_metadata` (`<unknown>`)

|     % | Samples | Caller                                             | Location    |
| ----: | ------: | -------------------------------------------------- | ----------- |
| 27.0% |      10 | `ciBytecodeStream::get_method`                     | `<unknown>` |
| 16.2% |       6 | `ciEnv::get_klass_by_index_impl`                   | `<unknown>` |
|  8.1% |       3 | `ciMethodHandle::get_vmtarget`                     | `<unknown>` |
|  8.1% |       3 | `ciEnv::get_klass_by_name_impl`                    | `<unknown>` |
|  5.4% |       2 | `ciReceiverTypeData::translate_receiver_data_from` | `<unknown>` |

##### `PhaseIdealLoop::build_loop_early` (`<unknown>`)

|      % | Samples | Caller                               | Location    |
| -----: | ------: | ------------------------------------ | ----------- |
| 100.0% |      37 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |

##### `Node::set_req_X` (`<unknown>`)

|     % | Samples | Caller                        | Location    |
| ----: | ------: | ----------------------------- | ----------- |
| 77.8% |      28 | `Node::replace_edge`          | `<unknown>` |
| 13.9% |       5 | `MergeMemNode::Ideal`         | `<unknown>` |
|  2.8% |       1 | `PhaseIterGVN::transform_old` | `<unknown>` |
|  2.8% |       1 | `AddPNode::Ideal`             | `<unknown>` |
|  2.8% |       1 | `RegionNode::Ideal`           | `<unknown>` |

##### `PhaseChaitin::post_allocate_copy_removal` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |      31 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `PhaseChaitin::elide_copy` (`<unknown>`)

|     % | Samples | Caller                                     | Location    |
| ----: | ------: | ------------------------------------------ | ----------- |
| 96.7% |      29 | `PhaseChaitin::post_allocate_copy_removal` | `<unknown>` |
|  3.3% |       1 | `PhaseChaitin::Register_Allocate`          | `<unknown>` |

##### `Compile::disconnect_useless_nodes` (`<unknown>`)

|     % | Samples | Caller                                   | Location    |
| ----: | ------: | ---------------------------------------- | ----------- |
| 79.3% |      23 | `PhaseRemoveUseless::PhaseRemoveUseless` | `<unknown>` |
| 20.7% |       6 | `PhaseCCP::transform`                    | `<unknown>` |

##### `PhaseIdealLoop::is_dominator` (`<unknown>`)

|     % | Samples | Caller                                             | Location    |
| ----: | ------: | -------------------------------------------------- | ----------- |
| 96.4% |      27 | `PhaseIdealLoop::get_late_ctrl_with_anti_dep`      | `<unknown>` |
|  3.6% |       1 | `PhaseIdealLoop::loop_predication_follow_branches` | `<unknown>` |

##### `Compile::identify_useful_nodes` (`<unknown>`)

|     % | Samples | Caller                                        | Location    |
| ----: | ------: | --------------------------------------------- | ----------- |
| 71.4% |      20 | `PhaseRemoveUseless::PhaseRemoveUseless`      | `<unknown>` |
| 28.6% |       8 | `Matcher::specialize_generic_vector_operands` | `<unknown>` |

##### `itable stub` (`<unknown>`)

|    % | Samples | Caller                 | Location                                            |
| ---: | ------: | ---------------------- | --------------------------------------------------- |
| 3.8% |       1 | `invokeMethodOnSuperN` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |
| 3.8% |       1 | `applyTo`              | `org.codenarc.rule.AbstractAstVisitorRule`          |

##### `PhaseIdealLoop::build_loop_late_post_work` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |      26 | `PhaseIdealLoop::build_loop_late` | `<unknown>` |

##### `IndexSet::initialize` (`<unknown>`)

|     % | Samples | Caller                            | Location    |
| ----: | ------: | --------------------------------- | ----------- |
| 57.7% |      15 | `PhaseIFG::init`                  | `<unknown>` |
| 34.6% |       9 | `PhaseLive::compute`              | `<unknown>` |
|  3.8% |       1 | `PhaseChaitin::Register_Allocate` | `<unknown>` |
|  3.8% |       1 | `PhaseLive::add_liveout`          | `<unknown>` |

##### `Node_Backward_Iterator::next` (`<unknown>`)

|     % | Samples | Caller                         | Location    |
| ----: | ------: | ------------------------------ | ----------- |
| 58.3% |      14 | `PhaseCFG::global_code_motion` | `<unknown>` |
| 41.7% |      10 | `PhaseCFG::schedule_late`      | `<unknown>` |

##### `MachNode::rematerialize` (`<unknown>`)

|     % | Samples | Caller                             | Location    |
| ----: | ------: | ---------------------------------- | ----------- |
| 73.9% |      17 | `PhaseChaitin::Split`              | `<unknown>` |
| 13.0% |       3 | `PhaseChaitin::build_ifg_physical` | `<unknown>` |
| 13.0% |       3 | `PhaseChaitin::Register_Allocate`  | `<unknown>` |

##### `I2C/C2I adapters(0xbbb)` (`<unknown>`)

|     % | Samples | Caller   | Location                                                                 |
| ----: | ------: | -------- | ------------------------------------------------------------------------ |
| 16.7% |       1 | `<init>` | `org.gmetrics.metric.AbstractMethodMetric$_lineNumberForMethod_closure1` |

##### `I2C/C2I adapters(0xbb)` (`<unknown>`)

|     % | Samples | Caller                 | Location                                                |
| ----: | ------: | ---------------------- | ------------------------------------------------------- |
| 20.0% |       1 | `super$4$visitClassEx` | `org.codenarc.rule.size.AbstractMethodMetricAstVisitor` |

##### `InterpreterRuntime::ldc` (`<unknown>`)

|     % | Samples | Caller                | Location                                                               |
| ----: | ------: | --------------------- | ---------------------------------------------------------------------- |
| 50.0% |       1 | `$getStaticMetaClass` | `org.codenarc.rule.unnecessary.UnnecessaryBooleanExpressionAstVisitor` |

##### `constantPoolHandle::~constantPoolHandle` (`<unknown>`)

|     % | Samples | Caller                            | Location                        |
| ----: | ------: | --------------------------------- | ------------------------------- |
| 50.0% |       1 | `areTheSameConstantOrLiteralMaps` | `org.codenarc.rule.dry.DryUtil` |

##### `applyTo` (`org.codenarc.rule.AbstractAstVisitorRule`)

|      % | Samples | Caller    | Location                         |
| -----: | ------: | --------- | -------------------------------- |
| 100.0% |       2 | `applyTo` | `org.codenarc.rule.AbstractRule` |

##### `getName` (`org.codenarc.rule.size.CrapMetricRule`)

|      % | Samples | Caller             | Location                                    |
| -----: | ------: | ------------------ | ------------------------------------------- |
| 100.0% |       2 | `isRuleSuppressed` | `org.codenarc.analyzer.SuppressionAnalyzer` |

##### `$getStaticMetaClass` (`org.codenarc.rule.unused.ReferenceCollector`)

|      % | Samples | Caller   | Location                                      |
| -----: | ------: | -------- | --------------------------------------------- |
| 100.0% |       2 | `<init>` | `org.codenarc.rule.unused.ReferenceCollector` |

##### `I2C/C2I adapters(0xbbbb)` (`<unknown>`)

|     % | Samples | Caller    | Location                                     |
| ----: | ------: | --------- | -------------------------------------------- |
| 50.0% |       1 | `applyTo` | `org.codenarc.rule.imports.UnusedImportRule` |

##### `InterpreterRuntime::resolve_invokedynamic` (`<unknown>`)

|      % | Samples | Caller               | Location                                                            |
| -----: | ------: | -------------------- | ------------------------------------------------------------------- |
| 100.0% |       1 | `visitClassComplete` | `org.codenarc.rule.groovyism.GetterMethodCouldBePropertyAstVisitor` |

##### `ConstantPool::klass_at_impl` (`<unknown>`)

|      % | Samples | Caller                              | Location                                                                          |
| -----: | ------: | ----------------------------------- | --------------------------------------------------------------------------------- |
| 100.0% |       1 | `annotationIsNotOnFirstLineOfClass` | `org.codenarc.rule.formatting.MissingBlankLineBeforeAnnotatedFieldRuleAstVisitor` |

##### `addViolationIfDuplicate` (`org.codenarc.rule.dry.DuplicateLiteralAstVisitor`)

|      % | Samples | Caller                    | Location                                           |
| -----: | ------: | ------------------------- | -------------------------------------------------- |
| 100.0% |       1 | `addViolationIfDuplicate` | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor` |

##### `getAstVisitor` (`org.codenarc.rule.AbstractAstVisitorRule`)

|      % | Samples | Caller    | Location                                   |
| -----: | ------: | --------- | ------------------------------------------ |
| 100.0% |       1 | `applyTo` | `org.codenarc.rule.AbstractAstVisitorRule` |

##### `getAstVisitor` (`org.codenarc.rule.groovyism.ExplicitArrayListInstantiationRule`)

|      % | Samples | Caller    | Location                                   |
| -----: | ------: | --------- | ------------------------------------------ |
| 100.0% |       1 | `applyTo` | `org.codenarc.rule.AbstractAstVisitorRule` |

##### `visitMethod` (`org.codenarc.rule.naming.MethodNameAstVisitor`)

|      % | Samples | Caller       | Location                                  |
| -----: | ------: | ------------ | ----------------------------------------- |
| 100.0% |       1 | `visitClass` | `org.codenarc.rule.AbstractMethodVisitor` |

##### `visitMethodCallExpression` (`org.codenarc.rule.groovyism.ExplicitCallToMethodAstVisitor`)

|      % | Samples | Caller       | Location                                                |
| -----: | ------: | ------------ | ------------------------------------------------------- |
| 100.0% |       1 | `visitClass` | `org.codenarc.rule.AbstractMethodCallExpressionVisitor` |

##### `visitClass` (`org.codenarc.rule.AbstractMethodCallExpressionVisitor`)

|      % | Samples | Caller    | Location                                   |
| -----: | ------: | --------- | ------------------------------------------ |
| 100.0% |       1 | `applyTo` | `org.codenarc.rule.AbstractAstVisitorRule` |

##### `I2C/C2I adapters(0xa)` (`<unknown>`)

|      % | Samples | Caller   | Location                                                        |
| -----: | ------: | -------- | --------------------------------------------------------------- |
| 100.0% |       1 | `<init>` | `org.codenarc.rule.convention.CouldBeSwitchStatementAstVisitor` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                                   | Location                                                                    |
| ----: | ------: | ------------------------------------------ | --------------------------------------------------------------------------- |
| 57.0% |   3,638 | `CompileBroker::compiler_thread_loop`      | `<unknown>`                                                                 |
| 55.4% |   3,534 | `CompileBroker::invoke_compiler_on_method` | `<unknown>`                                                                 |
| 44.4% |   2,836 | `C2Compiler::compile_method`               | `<unknown>`                                                                 |
| 44.3% |   2,829 | `Compile::Compile`                         | `<unknown>`                                                                 |
| 36.6% |   2,333 | `main`                                     | `org.codenarc.CodeNarc`                                                     |
| 36.5% |   2,332 | `linkToCallSite`                           | `java.lang.invoke.Invokers$Holder`                                          |
| 36.3% |   2,318 | `execute`                                  | `org.codenarc.CodeNarc`                                                     |
| 36.0% |   2,300 | `execute`                                  | `org.codenarc.CodeNarcRunner`                                               |
| 33.7% |   2,152 | `analyze`                                  | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
| 33.7% |   2,151 | `processDirectory`                         | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
| 33.7% |   2,150 | `doCall`                                   | `org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1` |
| 33.5% |   2,141 | `processFile`                              | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
| 33.4% |   2,133 | `collectViolations`                        | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
| 27.7% |   1,769 | `measureRuleProcessingTime`                | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
| 21.5% |   1,375 | `doCall`                                   | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`  |
| 21.4% |   1,367 | `Compile::Code_Gen`                        | `<unknown>`                                                                 |
| 19.5% |   1,244 | `applyTo`                                  | `org.codenarc.rule.AbstractRule`                                            |
| 17.1% |   1,089 | `Compile::Optimize`                        | `<unknown>`                                                                 |
| 16.3% |   1,039 | `applyTo`                                  | `org.codenarc.rule.AbstractAstVisitorRule`                                  |
| 15.1% |     966 | `visitClass`                               | `org.codenarc.rule.AbstractAstVisitor`                                      |

#### Categories

##### Compiler

|     % | Samples | Function                                   | Location    |
| ----: | ------: | ------------------------------------------ | ----------- |
| 57.0% |   3,638 | `CompileBroker::compiler_thread_loop`      | `<unknown>` |
| 55.4% |   3,534 | `CompileBroker::invoke_compiler_on_method` | `<unknown>` |
| 44.4% |   2,836 | `C2Compiler::compile_method`               | `<unknown>` |
| 44.3% |   2,829 | `Compile::Compile`                         | `<unknown>` |
| 21.4% |   1,367 | `Compile::Code_Gen`                        | `<unknown>` |
| 17.1% |   1,089 | `Compile::Optimize`                        | `<unknown>` |
| 11.8% |     754 | `PhaseChaitin::Register_Allocate`          | `<unknown>` |
| 10.6% |     679 | `Compilation::compile_method`              | `<unknown>` |
| 10.6% |     679 | `Compilation::Compilation`                 | `<unknown>` |
|  9.1% |     578 | `Compilation::compile_java_method`         | `<unknown>` |
|  8.3% |     527 | `PhaseIdealLoop::optimize`                 | `<unknown>` |
|  7.0% |     447 | `PhaseIdealLoop::PhaseIdealLoop`           | `<unknown>` |
|  7.0% |     445 | `PhaseIdealLoop::build_and_optimize`       | `<unknown>` |
|  5.7% |     361 | `PhaseIterGVN::optimize`                   | `<unknown>` |
|  5.3% |     339 | `PhaseIterGVN::transform_old`              | `<unknown>` |
|  3.8% |     241 | `Matcher::match`                           | `<unknown>` |
|  3.6% |     228 | `Compilation::build_hir`                   | `<unknown>` |
|  3.5% |     224 | `Compilation::emit_lir`                    | `<unknown>` |
|  3.4% |     218 | `Compile::optimize_loops`                  | `<unknown>` |
|  2.9% |     185 | `PhaseChaitin::Split`                      | `<unknown>` |

##### Native

|     % | Samples | Function                                         | Location    |
| ----: | ------: | ------------------------------------------------ | ----------- |
|  1.9% |     119 | `pthread_jit_write_protect_np`                   | `<unknown>` |
|  1.7% |     111 | `tlv_get_addr`                                   | `<unknown>` |
|  0.3% |      19 | `resolve_static_call`                            | `<unknown>` |
|  0.2% |      15 | `InterpreterRuntime::resolve_from_cache`         | `<unknown>` |
|  0.2% |      13 | `InterpreterRuntime::frequency_counter_overflow` | `<unknown>` |
|  0.2% |      10 | `BarrierSetNMethod::nmethod_stub_entry_barrier`  | `<unknown>` |
|  0.1% |       9 | `InterpreterRuntime::ldc`                        | `<unknown>` |
|  0.1% |       9 | `resolve_opt_virtual_call`                       | `<unknown>` |
|  0.1% |       7 | `InterpreterRuntime::_new`                       | `<unknown>` |
|  0.1% |       7 | `InterpreterRuntime::resolve_invokedynamic`      | `<unknown>` |
|  0.1% |       7 | `counter_overflow Runtime1 stub`                 | `<unknown>` |
|  0.1% |       5 | `resolve_virtual_call`                           | `<unknown>` |
|  0.1% |       5 | `InterpreterRuntime::anewarray`                  | `<unknown>` |
|  0.1% |       5 | `ConstantPool::klass_at_impl`                    | `<unknown>` |
| <0.1% |       3 | `ic_miss_stub`                                   | `<unknown>` |
| <0.1% |       2 | `constantPoolHandle::~constantPoolHandle`        | `<unknown>` |
| <0.1% |       1 | `InterpreterRuntime::resolve_ldc`                | `<unknown>` |
| <0.1% |       1 | `_new_array_Java`                                | `<unknown>` |

##### Ours

|     % | Samples | Function                    | Location                                                                    |
| ----: | ------: | --------------------------- | --------------------------------------------------------------------------- |
| 36.6% |   2,333 | `main`                      | `org.codenarc.CodeNarc`                                                     |
| 36.3% |   2,318 | `execute`                   | `org.codenarc.CodeNarc`                                                     |
| 36.0% |   2,300 | `execute`                   | `org.codenarc.CodeNarcRunner`                                               |
| 33.7% |   2,152 | `analyze`                   | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
| 33.7% |   2,151 | `processDirectory`          | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
| 33.7% |   2,150 | `doCall`                    | `org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1` |
| 33.5% |   2,141 | `processFile`               | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
| 33.4% |   2,133 | `collectViolations`         | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
| 27.7% |   1,769 | `measureRuleProcessingTime` | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
| 21.5% |   1,375 | `doCall`                    | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`  |
| 19.5% |   1,244 | `applyTo`                   | `org.codenarc.rule.AbstractRule`                                            |
| 16.3% |   1,039 | `applyTo`                   | `org.codenarc.rule.AbstractAstVisitorRule`                                  |
| 15.1% |     966 | `visitClass`                | `org.codenarc.rule.AbstractAstVisitor`                                      |
| 11.5% |     732 | `visitMethod`               | `org.codenarc.rule.AbstractAstVisitor`                                      |
|  4.3% |     277 | `doCall`                    | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`  |
|  4.0% |     255 | `isRuleSuppressed`          | `org.codenarc.analyzer.SuppressionAnalyzer`                                 |
|  3.9% |     249 | `init`                      | `org.codenarc.source.AbstractSourceCode`                                    |
|  3.9% |     249 | `getAst`                    | `org.codenarc.source.AbstractSourceCode`                                    |
|  3.9% |     249 | `init`                      | `org.codenarc.analyzer.SuppressionAnalyzer`                                 |
|  1.2% |      75 | `super$3$applyTo`           | `org.codenarc.rule.formatting.IndentationRule`                              |

##### JIT

|     % | Samples | Function                   | Location    |
| ----: | ------: | -------------------------- | ----------- |
|  0.4% |      26 | `itable stub`              | `<unknown>` |
|  0.2% |      11 | `vtable stub`              | `<unknown>` |
|  0.1% |       6 | `I2C/C2I adapters(0xbbb)`  | `<unknown>` |
|  0.1% |       6 | `I2C/C2I adapters(0xb)`    | `<unknown>` |
|  0.1% |       5 | `I2C/C2I adapters(0xbb)`   | `<unknown>` |
|  0.1% |       5 | `zero_blocks`              | `<unknown>` |
| <0.1% |       2 | `I2C/C2I adapters(0xbbbb)` | `<unknown>` |
| <0.1% |       2 | `I2C/C2I adapters(0xba)`   | `<unknown>` |
| <0.1% |       2 | `call_stub`                | `<unknown>` |
| <0.1% |       1 | `I2C/C2I adapters(0xa)`    | `<unknown>` |
| <0.1% |       1 | `I2C/C2I adapters(0xbba)`  | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `CompileBroker::compiler_thread_loop` (`<unknown>`)

|     % | Samples | Callee                                     | Location    |
| ----: | ------: | ------------------------------------------ | ----------- |
| 97.1% |   3,534 | `CompileBroker::invoke_compiler_on_method` | `<unknown>` |
|  2.8% |     102 | `CompileQueue::get`                        | `<unknown>` |
| <0.1% |       1 | `tlv_get_addr`                             | `<unknown>` |

##### `CompileBroker::invoke_compiler_on_method` (`<unknown>`)

|     % | Samples | Callee                                    | Location    |
| ----: | ------: | ----------------------------------------- | ----------- |
| 80.2% |   2,836 | `C2Compiler::compile_method`              | `<unknown>` |
|  0.2% |       8 | `ciEnv::get_method_from_handle`           | `<unknown>` |
|  0.1% |       5 | `ciEnv::ciEnv`                            | `<unknown>` |
|  0.1% |       2 | `CompileBroker::update_compile_perf_data` | `<unknown>` |
|  0.1% |       2 | `ciEnv::~ciEnv`                           | `<unknown>` |

##### `C2Compiler::compile_method` (`<unknown>`)

|     % | Samples | Callee              | Location    |
| ----: | ------: | ------------------- | ----------- |
| 99.8% |   2,829 | `Compile::Compile`  | `<unknown>` |
|  0.2% |       5 | `Compile::~Compile` | `<unknown>` |

##### `Compile::Compile` (`<unknown>`)

|     % | Samples | Callee                                   | Location    |
| ----: | ------: | ---------------------------------------- | ----------- |
| 48.3% |   1,367 | `Compile::Code_Gen`                      | `<unknown>` |
| 38.5% |   1,089 | `Compile::Optimize`                      | `<unknown>` |
|  1.1% |      30 | `PhaseRemoveUseless::PhaseRemoveUseless` | `<unknown>` |
|  0.1% |       3 | `ciMethod::ensure_method_data`           | `<unknown>` |
|  0.1% |       2 | `TypeFunc::make`                         | `<unknown>` |

##### `main` (`org.codenarc.CodeNarc`)

|      % | Samples | Callee           | Location                               |
| -----: | ------: | ---------------- | -------------------------------------- |
| 100.0% |   2,332 | `linkToCallSite` | `java.lang.invoke.Invokers$Holder`     |
|  <0.1% |       1 | `linkCallSite`   | `java.lang.invoke.MethodHandleNatives` |

##### `execute` (`org.codenarc.CodeNarc`)

|     % | Samples | Callee           | Location                                            |
| ----: | ------: | ---------------- | --------------------------------------------------- |
| 99.4% |   2,305 | `linkToCallSite` | `java.lang.invoke.Invokers$Holder`                  |
|  0.5% |      12 | `linkToCallSite` | `java.lang.invoke.LambdaForm$MH.0x000000a801972c00` |
| <0.1% |       1 | `invokeClosure`  | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |

##### `execute` (`org.codenarc.CodeNarcRunner`)

|      % | Samples | Callee           | Location                           |
| -----: | ------: | ---------------- | ---------------------------------- |
| 100.0% |   2,300 | `linkToCallSite` | `java.lang.invoke.Invokers$Holder` |

##### `analyze` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)

|      % | Samples | Callee           | Location                           |
| -----: | ------: | ---------------- | ---------------------------------- |
| 100.0% |   2,152 | `linkToCallSite` | `java.lang.invoke.Invokers$Holder` |

##### `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)

|      % | Samples | Callee           | Location                           |
| -----: | ------: | ---------------- | ---------------------------------- |
| 100.0% |   2,151 | `linkToCallSite` | `java.lang.invoke.Invokers$Holder` |

##### `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`)

|      % | Samples | Callee           | Location                           |
| -----: | ------: | ---------------- | ---------------------------------- |
| 100.0% |   2,150 | `linkToCallSite` | `java.lang.invoke.Invokers$Holder` |

##### `processFile` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)

|      % | Samples | Callee                                           | Location                           |
| -----: | ------: | ------------------------------------------------ | ---------------------------------- |
| 100.0% |   2,140 | `linkToCallSite`                                 | `java.lang.invoke.Invokers$Holder` |
|  <0.1% |       1 | `InterpreterRuntime::frequency_counter_overflow` | `<unknown>`                        |

##### `collectViolations` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|     % | Samples | Callee           | Location                                                                   |
| ----: | ------: | ---------------- | -------------------------------------------------------------------------- |
| 99.9% |   2,131 | `linkToCallSite` | `java.lang.invoke.Invokers$Holder`                                         |
| <0.1% |       1 | `next`           | `java.util.ArrayList$Itr`                                                  |
| <0.1% |       1 | `<init>`         | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3` |

##### `measureRuleProcessingTime` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|     % | Samples | Callee           | Location                                                             |
| ----: | ------: | ---------------- | -------------------------------------------------------------------- |
| 82.1% |   1,453 | `linkToCallSite` | `java.lang.invoke.Invokers$Holder`                                   |
| 16.4% |     290 | `linkToCallSite` | `java.lang.invoke.LambdaForm$MH.0x000000a801323800`                  |
|  1.4% |      25 | `linkToCallSite` | `java.lang.invoke.LambdaForm$MH.0x000000a80131fc00`                  |
|  0.1% |       1 | `longUnbox`      | `org.codehaus.groovy.runtime.typehandling.DefaultTypeTransformation` |

##### `doCall` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)

|     % | Samples | Callee           | Location                           |
| ----: | ------: | ---------------- | ---------------------------------- |
| 99.9% |   1,374 | `linkToCallSite` | `java.lang.invoke.Invokers$Holder` |

##### `Compile::Code_Gen` (`<unknown>`)

|     % | Samples | Callee                            | Location    |
| ----: | ------: | --------------------------------- | ----------- |
| 55.2% |     754 | `PhaseChaitin::Register_Allocate` | `<unknown>` |
| 17.6% |     241 | `Matcher::match`                  | `<unknown>` |
| 12.4% |     170 | `PhaseOutput::Output`             | `<unknown>` |
| 10.9% |     149 | `PhaseCFG::do_global_code_motion` | `<unknown>` |
|  2.0% |      28 | `PhaseOutput::install_code`       | `<unknown>` |

##### `applyTo` (`org.codenarc.rule.AbstractRule`)

|     % | Samples | Callee    | Location                                                 |
| ----: | ------: | --------- | -------------------------------------------------------- |
| 75.2% |     936 | `applyTo` | `org.codenarc.rule.AbstractAstVisitorRule`               |
|  6.0% |      75 | `applyTo` | `org.codenarc.rule.formatting.IndentationRule`           |
|  5.4% |      67 | `applyTo` | `org.codenarc.rule.AbstractSharedAstVisitorRule`         |
|  3.1% |      39 | `applyTo` | `org.codenarc.rule.unnecessary.UnnecessarySemicolonRule` |
|  2.7% |      34 | `applyTo` | `org.codenarc.rule.unused.UnusedVariableRule`            |

##### `Compile::Optimize` (`<unknown>`)

|     % | Samples | Callee                          | Location    |
| ----: | ------: | ------------------------------- | ----------- |
| 28.4% |     309 | `PhaseIdealLoop::optimize`      | `<unknown>` |
| 20.0% |     218 | `Compile::optimize_loops`       | `<unknown>` |
| 19.2% |     209 | `PhaseIterGVN::optimize`        | `<unknown>` |
|  6.5% |      71 | `ConnectionGraph::do_analysis`  | `<unknown>` |
|  6.4% |      70 | `Compile::inline_incrementally` | `<unknown>` |

##### `applyTo` (`org.codenarc.rule.AbstractAstVisitorRule`)

|     % | Samples | Callee          | Location                                                |
| ----: | ------: | --------------- | ------------------------------------------------------- |
| 85.0% |     883 | `visitClass`    | `org.codenarc.rule.AbstractAstVisitor`                  |
|  6.6% |      69 | `getAstVisitor` | `org.codenarc.rule.AbstractAstVisitorRule`              |
|  3.5% |      36 | `visitClass`    | `org.codenarc.rule.AbstractMethodCallExpressionVisitor` |
|  2.8% |      29 | `visitClass`    | `org.codenarc.rule.AbstractMethodVisitor`               |
|  0.6% |       6 | `getAstVisitor` | `org.codenarc.rule.convention.HashtableIsObsoleteRule`  |

##### `visitClass` (`org.codenarc.rule.AbstractAstVisitor`)

|     % | Samples | Callee               | Location                                                            |
| ----: | ------: | -------------------- | ------------------------------------------------------------------- |
| 82.0% |     792 | `visitClass`         | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                   |
|  6.0% |      58 | `visitClassEx`       | `org.codenarc.rule.size.AbstractMethodMetricAstVisitor`             |
|  2.2% |      21 | `visitClassComplete` | `org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor`     |
|  1.4% |      14 | `visitClassEx`       | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor` |
|  1.1% |      11 | `visitClassEx`       | `org.codenarc.rule.naming.ConfusingMethodNameAstVisitor`            |

##### `PhaseChaitin::Register_Allocate` (`<unknown>`)

|     % | Samples | Callee                                     | Location    |
| ----: | ------: | ------------------------------------------ | ----------- |
| 24.5% |     185 | `PhaseChaitin::Split`                      | `<unknown>` |
| 15.3% |     115 | `PhaseChaitin::build_ifg_physical`         | `<unknown>` |
| 14.7% |     111 | `PhaseLive::compute`                       | `<unknown>` |
|  9.8% |      74 | `PhaseChaitin::post_allocate_copy_removal` | `<unknown>` |
|  6.5% |      49 | `PhaseAggressiveCoalesce::insert_copies`   | `<unknown>` |

##### `visitMethod` (`org.codenarc.rule.AbstractAstVisitor`)

|     % | Samples | Callee          | Location                                                                     |
| ----: | ------: | --------------- | ---------------------------------------------------------------------------- |
| 83.7% |     613 | `visitMethod`   | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                            |
|  1.9% |      14 | `visitMethodEx` | `org.codenarc.rule.design.ReturnsNullInsteadOfEmptyCollectionRuleAstVisitor` |
|  1.5% |      11 | `visitMethodEx` | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`          |
|  1.5% |      11 | `visitMethodEx` | `org.codenarc.rule.formatting.SpaceAfterOpeningBraceAstVisitor`              |
|  1.2% |       9 | `visitMethodEx` | `org.codenarc.rule.naming.ScopedConfusingMethodNameAstVisitor`               |

##### `Compilation::compile_method` (`<unknown>`)

|     % | Samples | Callee                                               | Location    |
| ----: | ------: | ---------------------------------------------------- | ----------- |
| 85.1% |     578 | `Compilation::compile_java_method`                   | `<unknown>` |
| 14.3% |      97 | `ciEnv::register_method`                             | `<unknown>` |
|  0.3% |       2 | `DebugInformationRecorder::DebugInformationRecorder` | `<unknown>` |

##### `Compilation::Compilation` (`<unknown>`)

|      % | Samples | Callee                        | Location    |
| -----: | ------: | ----------------------------- | ----------- |
| 100.0% |     679 | `Compilation::compile_method` | `<unknown>` |

##### `Compilation::compile_java_method` (`<unknown>`)

|     % | Samples | Callee                         | Location    |
| ----: | ------: | ------------------------------ | ----------- |
| 39.4% |     228 | `Compilation::build_hir`       | `<unknown>` |
| 38.8% |     224 | `Compilation::emit_lir`        | `<unknown>` |
| 20.9% |     121 | `Compilation::emit_code_body`  | `<unknown>` |
|  0.9% |       5 | `ciMethod::ensure_method_data` | `<unknown>` |

##### `PhaseIdealLoop::optimize` (`<unknown>`)

|     % | Samples | Callee                           | Location    |
| ----: | ------: | -------------------------------- | ----------- |
| 84.8% |     447 | `PhaseIdealLoop::PhaseIdealLoop` | `<unknown>` |
| 13.5% |      71 | `PhaseIterGVN::optimize`         | `<unknown>` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`<unknown>`)

|     % | Samples | Callee                               | Location    |
| ----: | ------: | ------------------------------------ | ----------- |
| 99.6% |     445 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |

##### `PhaseIdealLoop::build_and_optimize` (`<unknown>`)

|     % | Samples | Callee                                 | Location    |
| ----: | ------: | -------------------------------------- | ----------- |
| 36.2% |     161 | `PhaseIdealLoop::build_loop_late`      | `<unknown>` |
| 19.3% |      86 | `PhaseIdealLoop::split_if_with_blocks` | `<unknown>` |
| 12.1% |      54 | `PhaseIdealLoop::build_loop_early`     | `<unknown>` |
|  8.5% |      38 | `PhaseIdealLoop::Dominators`           | `<unknown>` |
|  5.6% |      25 | `PhaseIdealLoop::build_loop_tree`      | `<unknown>` |

##### `PhaseIterGVN::optimize` (`<unknown>`)

|     % | Samples | Callee                                    | Location    |
| ----: | ------: | ----------------------------------------- | ----------- |
| 93.9% |     339 | `PhaseIterGVN::transform_old`             | `<unknown>` |
|  0.8% |       3 | `PhaseIterGVN::remove_globally_dead_node` | `<unknown>` |
|  0.6% |       2 | `ProjNode::hash`                          | `<unknown>` |
|  0.6% |       2 | `PhiNode::hash`                           | `<unknown>` |
|  0.3% |       1 | `BoolNode::hash`                          | `<unknown>` |

##### `PhaseIterGVN::transform_old` (`<unknown>`)

|     % | Samples | Callee                       | Location    |
| ----: | ------: | ---------------------------- | ----------- |
| 14.2% |      48 | `PhaseIterGVN::subsume_node` | `<unknown>` |
| 13.3% |      45 | `StoreNode::Ideal`           | `<unknown>` |
| 10.9% |      37 | `RegionNode::Ideal`          | `<unknown>` |
| 10.0% |      34 | `PhiNode::Ideal`             | `<unknown>` |
|  6.8% |      23 | `IfNode::Ideal`              | `<unknown>` |

##### `doCall` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`)

|      % | Samples | Callee           | Location                           |
| -----: | ------: | ---------------- | ---------------------------------- |
| 100.0% |     277 | `linkToCallSite` | `java.lang.invoke.Invokers$Holder` |

##### `isRuleSuppressed` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|     % | Samples | Callee    | Location                                                               |
| ----: | ------: | --------- | ---------------------------------------------------------------------- |
| 97.6% |     249 | `init`    | `org.codenarc.analyzer.SuppressionAnalyzer`                            |
|  0.8% |       2 | `getName` | `org.codenarc.rule.size.CrapMetricRule`                                |
|  0.4% |       1 | `getName` | `org.codenarc.rule.formatting.MissingBlankLineAfterPackageRule`        |
|  0.4% |       1 | `getName` | `org.codenarc.rule.unnecessary.UnnecessaryBigIntegerInstantiationRule` |
|  0.4% |       1 | `getName` | `org.codenarc.rule.groovyism.ExplicitCallToPutAtMethodRule`            |

##### `init` (`org.codenarc.source.AbstractSourceCode`)

|      % | Samples | Callee           | Location                           |
| -----: | ------: | ---------------- | ---------------------------------- |
| 100.0% |     249 | `linkToCallSite` | `java.lang.invoke.Invokers$Holder` |

##### `getAst` (`org.codenarc.source.AbstractSourceCode`)

|      % | Samples | Callee           | Location                           |
| -----: | ------: | ---------------- | ---------------------------------- |
| 100.0% |     249 | `linkToCallSite` | `java.lang.invoke.Invokers$Holder` |

##### `init` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|      % | Samples | Callee   | Location                                 |
| -----: | ------: | -------- | ---------------------------------------- |
| 100.0% |     249 | `getAst` | `org.codenarc.source.AbstractSourceCode` |

##### `Matcher::match` (`<unknown>`)

|     % | Samples | Callee                                        | Location    |
| ----: | ------: | --------------------------------------------- | ----------- |
| 74.3% |     179 | `Matcher::xform`                              | `<unknown>` |
| 14.1% |      34 | `Matcher::find_shared`                        | `<unknown>` |
|  4.6% |      11 | `Matcher::specialize_generic_vector_operands` | `<unknown>` |
|  0.8% |       2 | `PhiNode::Opcode`                             | `<unknown>` |
|  0.8% |       2 | `ConNode::Opcode`                             | `<unknown>` |

##### `Compilation::emit_lir` (`<unknown>`)

|     % | Samples | Callee                       | Location    |
| ----: | ------: | ---------------------------- | ----------- |
| 73.7% |     165 | `LinearScan::do_linear_scan` | `<unknown>` |
| 26.3% |      59 | `BlockList::iterate_forward` | `<unknown>` |

##### `Compile::optimize_loops` (`<unknown>`)

|      % | Samples | Callee                     | Location    |
| -----: | ------: | -------------------------- | ----------- |
| 100.0% |     218 | `PhaseIdealLoop::optimize` | `<unknown>` |

##### `PhaseChaitin::Split` (`<unknown>`)

|     % | Samples | Callee                     | Location    |
| ----: | ------: | -------------------------- | ----------- |
| 18.4% |      34 | `MachNode::rematerialize`  | `<unknown>` |
|  3.8% |       7 | `PhaseChaitin::split_DEF`  | `<unknown>` |
|  2.7% |       5 | `Node::rematerialize`      | `<unknown>` |
|  1.6% |       3 | `CProjNode::is_block_proj` | `<unknown>` |
|  1.1% |       2 | `PhaseChaitin::new_lrg`    | `<unknown>` |

##### `super$3$applyTo` (`org.codenarc.rule.formatting.IndentationRule`)

|      % | Samples | Callee    | Location                                   |
| -----: | ------: | --------- | ------------------------------------------ |
| 100.0% |      75 | `applyTo` | `org.codenarc.rule.AbstractAstVisitorRule` |

##### `InterpreterRuntime::resolve_from_cache` (`<unknown>`)

|     % | Samples | Callee                                      | Location    |
| ----: | ------: | ------------------------------------------- | ----------- |
| 40.0% |       6 | `InterpreterRuntime::resolve_invokedynamic` | `<unknown>` |
| 13.3% |       2 | `pthread_jit_write_protect_np`              | `<unknown>` |

##### `InterpreterRuntime::frequency_counter_overflow` (`<unknown>`)

|    % | Samples | Callee                         | Location    |
| ---: | ------: | ------------------------------ | ----------- |
| 7.7% |       1 | `pthread_jit_write_protect_np` | `<unknown>` |

##### `BarrierSetNMethod::nmethod_stub_entry_barrier` (`<unknown>`)

|     % | Samples | Callee                         | Location    |
| ----: | ------: | ------------------------------ | ----------- |
| 10.0% |       1 | `pthread_jit_write_protect_np` | `<unknown>` |

##### `InterpreterRuntime::ldc` (`<unknown>`)

|     % | Samples | Callee                         | Location    |
| ----: | ------: | ------------------------------ | ----------- |
| 44.4% |       4 | `pthread_jit_write_protect_np` | `<unknown>` |
| 11.1% |       1 | `ConstantPool::klass_at_impl`  | `<unknown>` |

##### `InterpreterRuntime::anewarray` (`<unknown>`)

|     % | Samples | Callee                         | Location    |
| ----: | ------: | ------------------------------ | ----------- |
| 40.0% |       2 | `pthread_jit_write_protect_np` | `<unknown>` |
| 20.0% |       1 | `ConstantPool::klass_at_impl`  | `<unknown>` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame. `…` stands for frames the entry filter hides.

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ---: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2.5% |     159 | `linkToCallSite` (`java.lang.invoke.LambdaForm$MH.0x000000a801323800`) ← `measureRuleProcessingTime` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processFile` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `analyze` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `execute` (`org.codenarc.CodeNarcRunner`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `execute` (`org.codenarc.CodeNarc`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `main` (`org.codenarc.CodeNarc`)                                                                                                                                                                                                                                                                                                                                                                              |
| 1.9% |     122 | `PhaseChaitin::Split` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 1.6% |     102 | `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `init` (`org.codenarc.source.AbstractSourceCode`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `getAst` (`org.codenarc.source.AbstractSourceCode`) ← `init` (`org.codenarc.analyzer.SuppressionAnalyzer`) ← `isRuleSuppressed` ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`) ← … ← `call` (`org.codehaus.groovy.runtime.callsite.AbstractCallSite`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processFile` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `analyze` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `execute` (`org.codenarc.CodeNarcRunner`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `execute` (`org.codenarc.CodeNarc`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `main` (`org.codenarc.CodeNarc`) |
| 1.6% |     102 | `CompileQueue::get` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 1.5% |      98 | `linkToCallSite` (`java.lang.invoke.LambdaForm$MH.0x000000a801323800`) ← `measureRuleProcessingTime` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processFile` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `analyze` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `execute` (`org.codenarc.CodeNarcRunner`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `execute` (`org.codenarc.CodeNarc`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `main` (`org.codenarc.CodeNarc`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 1.3% |      86 | `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 1.1% |      73 | `ciEnv::register_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← … ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 1.0% |      62 | `PhaseChaitin::build_ifg_physical` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 0.9% |      60 | `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processFile` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `analyze` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `execute` (`org.codenarc.CodeNarcRunner`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `execute` (`org.codenarc.CodeNarc`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `main` (`org.codenarc.CodeNarc`)                                                                                                                                                                                                                                           |
| 0.9% |      56 | `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `init` (`org.codenarc.source.AbstractSourceCode`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `getAst` (`org.codenarc.source.AbstractSourceCode`) ← `init` (`org.codenarc.analyzer.SuppressionAnalyzer`) ← `isRuleSuppressed` ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`) ← … ← `call` (`org.codehaus.groovy.runtime.callsite.AbstractCallSite`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processFile` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `analyze` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `execute` (`org.codenarc.CodeNarcRunner`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `execute` (`org.codenarc.CodeNarc`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `main` (`org.codenarc.CodeNarc`)                                                                                                                                                                                                                                                                                          |
| 0.8% |      49 | `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processFile` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `analyze` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `execute` (`org.codenarc.CodeNarcRunner`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `execute` (`org.codenarc.CodeNarc`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `main` (`org.codenarc.CodeNarc`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 0.7% |      47 | `PhaseAggressiveCoalesce::insert_copies` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 0.7% |      42 | `PhaseLive::compute` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 0.6% |      41 | `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processFile` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `analyze` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `execute` (`org.codenarc.CodeNarcRunner`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `execute` (`org.codenarc.CodeNarc`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `main` (`org.codenarc.CodeNarc`)                                                                                                                                                                                                                                                                                                                                                                                               |
| 0.6% |      40 | `PhaseLive::add_liveout` ← `PhaseLive::compute` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 0.5% |      35 | `PhaseChaitin::post_allocate_copy_removal` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 0.5% |      33 | `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processFile` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `analyze` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `execute` (`org.codenarc.CodeNarcRunner`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `execute` (`org.codenarc.CodeNarc`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `main` (`org.codenarc.CodeNarc`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 0.5% |      31 | `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processFile` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `analyze` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `execute` (`org.codenarc.CodeNarcRunner`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `execute` (`org.codenarc.CodeNarc`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `main` (`org.codenarc.CodeNarc`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 0.5% |      31 | `PhaseIdealLoop::build_loop_late` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 0.5% |      29 | `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processFile` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `analyze` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `execute` (`org.codenarc.CodeNarcRunner`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `execute` (`org.codenarc.CodeNarc`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `main` (`org.codenarc.CodeNarc`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |

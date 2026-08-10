# Profile

Collected 1,353 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Compiler         | 45.6% |     617 |
| Native           | 39.0% |     528 |
| Ours             |  9.9% |     134 |
| Standard library |  4.4% |      60 |
| JIT              |  1.0% |      13 |
| Unknown          |  0.1% |       1 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|    % | Samples | Function                                    | Location    |
| ---: | ------: | ------------------------------------------- | ----------- |
| 1.6% |      21 | `PhaseChaitin::Split`                       | `<unknown>` |
| 1.2% |      16 | `PhaseChaitin::build_ifg_physical`          | `<unknown>` |
| 1.0% |      13 | `ciObjectFactory::get_metadata`             | `<unknown>` |
| 1.0% |      13 | `IndexSetIterator::advance_and_next`        | `<unknown>` |
| 0.9% |      12 | `PhaseIdealLoop::build_loop_late`           | `<unknown>` |
| 0.8% |      11 | `IntervalWalker::walk_to`                   | `<unknown>` |
| 0.8% |      11 | `PhaseChaitin::gather_lrg_masks`            | `<unknown>` |
| 0.7% |      10 | `Compile::identify_useful_nodes`            | `<unknown>` |
| 0.7% |       9 | `LIR_OpVisitState::visit`                   | `<unknown>` |
| 0.7% |       9 | `PhaseLive::compute`                        | `<unknown>` |
| 0.7% |       9 | `PhaseAggressiveCoalesce::insert_copies`    | `<unknown>` |
| 0.7% |       9 | `PhaseIdealLoop::build_loop_early`          | `<unknown>` |
| 0.6% |       8 | `PhaseChaitin::elide_copy`                  | `<unknown>` |
| 0.5% |       7 | `Node_Backward_Iterator::next`              | `<unknown>` |
| 0.5% |       7 | `Node::dominates`                           | `<unknown>` |
| 0.5% |       7 | `PhaseChaitin::post_allocate_copy_removal`  | `<unknown>` |
| 0.4% |       6 | `Unique_Node_List::remove`                  | `<unknown>` |
| 0.4% |       6 | `RelocIterator::set_limits`                 | `<unknown>` |
| 0.4% |       6 | `PhaseIdealLoop::build_loop_late_post_work` | `<unknown>` |
| 0.4% |       6 | `I2C/C2I adapters(0xb)`                     | `<unknown>` |

#### Categories

##### Compiler

|    % | Samples | Function                                    | Location    |
| ---: | ------: | ------------------------------------------- | ----------- |
| 1.6% |      21 | `PhaseChaitin::Split`                       | `<unknown>` |
| 1.2% |      16 | `PhaseChaitin::build_ifg_physical`          | `<unknown>` |
| 1.0% |      13 | `ciObjectFactory::get_metadata`             | `<unknown>` |
| 1.0% |      13 | `IndexSetIterator::advance_and_next`        | `<unknown>` |
| 0.9% |      12 | `PhaseIdealLoop::build_loop_late`           | `<unknown>` |
| 0.8% |      11 | `IntervalWalker::walk_to`                   | `<unknown>` |
| 0.8% |      11 | `PhaseChaitin::gather_lrg_masks`            | `<unknown>` |
| 0.7% |      10 | `Compile::identify_useful_nodes`            | `<unknown>` |
| 0.7% |       9 | `LIR_OpVisitState::visit`                   | `<unknown>` |
| 0.7% |       9 | `PhaseLive::compute`                        | `<unknown>` |
| 0.7% |       9 | `PhaseAggressiveCoalesce::insert_copies`    | `<unknown>` |
| 0.7% |       9 | `PhaseIdealLoop::build_loop_early`          | `<unknown>` |
| 0.6% |       8 | `PhaseChaitin::elide_copy`                  | `<unknown>` |
| 0.5% |       7 | `Node_Backward_Iterator::next`              | `<unknown>` |
| 0.5% |       7 | `Node::dominates`                           | `<unknown>` |
| 0.5% |       7 | `PhaseChaitin::post_allocate_copy_removal`  | `<unknown>` |
| 0.4% |       6 | `Unique_Node_List::remove`                  | `<unknown>` |
| 0.4% |       6 | `RelocIterator::set_limits`                 | `<unknown>` |
| 0.4% |       6 | `PhaseIdealLoop::build_loop_late_post_work` | `<unknown>` |
| 0.4% |       6 | `PhaseIdealLoop::is_dominator`              | `<unknown>` |

##### Ours

|    % | Samples | Function                                                         | Location                                                                                                                            |
| ---: | ------: | ---------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| 0.1% |       2 | `applyArgumentsWithReorderingIfNeeded`                           | `org.jetbrains.kotlin.fir.backend.generators.CallAndReferenceGenerator`                                                             |
| 0.1% |       2 | `asReadOnlyStorage`                                              | `org.jetbrains.kotlin.resolve.calls.inference.model.NewConstraintSystemImpl`                                                        |
| 0.1% |       2 | `transform`                                                      | `org.jetbrains.kotlin.codegen.optimization.RedundantGotoMethodTransformer`                                                          |
| 0.1% |       1 | `visitNamedFunction`                                             | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor`                                                   |
| 0.1% |       1 | `visitJumpInsn`                                                  | `org.jetbrains.org.objectweb.asm.MethodVisitor`                                                                                     |
| 0.1% |       1 | `<init>`                                                         | `org.jetbrains.kotlin.utils.ThreadLocalDelegate`                                                                                    |
| 0.1% |       1 | `buildSimpleArray`                                               | `org.jetbrains.kotlin.backend.jvm.ir.IrArrayBuilder`                                                                                |
| 0.1% |       1 | `isContainedInInvariantOrContravariantPositionsWithDependencies` | `org.jetbrains.kotlin.fir.resolve.calls.stages.CollectTypeVariableUsagesInfo`                                                       |
| 0.1% |       1 | `check`                                                          | `org.jetbrains.kotlin.fir.resolve.calls.stages.CollectTypeVariableUsagesInfo`                                                       |
| 0.1% |       1 | `processCandidate`                                               | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner`                                                               |
| 0.1% |       1 | `incorporate`                                                    | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintIncorporator`                                                    |
| 0.1% |       1 | `processGivenConstraints`                                        | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector`                                                        |
| 0.1% |       1 | `addConstraintIfCompatible`                                      | `org.jetbrains.kotlin.resolve.calls.inference.ConstraintSystemBuilderKt`                                                            |
| 0.1% |       1 | `resolveExtensionReceiver`                                       | `org.jetbrains.kotlin.fir.resolve.calls.stages.CheckExtensionReceiver`                                                              |
| 0.1% |       1 | `transformElement`                                               | `org.jetbrains.kotlin.fir.resolve.transformers.FirCallCompletionResultsWriterTransformer$transformArgumentList$ArgumentTransformer` |
| 0.1% |       1 | `createLibrarySession$lambda$0`                                  | `org.jetbrains.kotlin.fir.session.FirJvmSessionFactory`                                                                             |
| 0.1% |       1 | `acceptChildren`                                                 | `org.jetbrains.kotlin.fir.expressions.impl.FirFunctionCallImpl`                                                                     |
| 0.1% |       1 | `getUseSiteMemberScope`                                          | `org.jetbrains.kotlin.fir.scopes.FirKotlinScopeProvider`                                                                            |
| 0.1% |       1 | `<init>`                                                         | `org.jetbrains.kotlin.resolve.calls.inference.model.Constraint`                                                                     |
| 0.1% |       1 | `visitNamedFunction`                                             | `org.jetbrains.kotlin.fir.analysis.checkers.declaration.DeclarationCheckersDiagnosticComponent`                                     |

##### Standard library

|    % | Samples | Function                | Location                                              |
| ---: | ------: | ----------------------- | ----------------------------------------------------- |
| 0.1% |       2 | `getKey`                | `java.util.HashMap$Node`                              |
| 0.1% |       2 | `checkNotNullParameter` | `kotlin.jvm.internal.Intrinsics`                      |
| 0.1% |       2 | `hasNext`               | `kotlin.collections.EmptyIterator`                    |
| 0.1% |       1 | `get`                   | `java.util.HashMap`                                   |
| 0.1% |       1 | `copyOf`                | `java.util.Arrays`                                    |
| 0.1% |       1 | `contains$default`      | `kotlin.text.StringsKt__StringsKt`                    |
| 0.1% |       1 | `isEmpty`               | `kotlin.collections.EmptyList`                        |
| 0.1% |       1 | `<init>`                | `java.util.ArrayDeque`                                |
| 0.1% |       1 | `mapOf`                 | `kotlin.collections.MapsKt__MapsJVMKt`                |
| 0.1% |       1 | `charAt`                | `java.lang.String`                                    |
| 0.1% |       1 | `reverse`               | `kotlin.collections.CollectionsKt___CollectionsJvmKt` |
| 0.1% |       1 | `add`                   | `java.util.ArrayList`                                 |

##### JIT

|    % | Samples | Function                    | Location    |
| ---: | ------: | --------------------------- | ----------- |
| 0.4% |       6 | `I2C/C2I adapters(0xb)`     | `<unknown>` |
| 0.2% |       3 | `I2C/C2I adapters(0xbbb)`   | `<unknown>` |
| 0.1% |       2 | `zero_blocks`               | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xbb)`    | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xbabaa)` | `<unknown>` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `PhaseChaitin::Split` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |      21 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `PhaseChaitin::build_ifg_physical` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |      16 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `ciObjectFactory::get_metadata` (`<unknown>`)

|     % | Samples | Caller                                             | Location    |
| ----: | ------: | -------------------------------------------------- | ----------- |
| 15.4% |       2 | `ciBytecodeStream::get_method`                     | `<unknown>` |
| 15.4% |       2 | `ciEnv::get_klass_by_index_impl`                   | `<unknown>` |
| 15.4% |       2 | `ciObjectFactory::create_new_metadata`             | `<unknown>` |
| 15.4% |       2 | `ciEnv::get_klass_by_name_impl`                    | `<unknown>` |
|  7.7% |       1 | `ciReceiverTypeData::translate_receiver_data_from` | `<unknown>` |

##### `IndexSetIterator::advance_and_next` (`<unknown>`)

|     % | Samples | Caller                                           | Location    |
| ----: | ------: | ------------------------------------------------ | ----------- |
| 23.1% |       3 | `PhaseChaitin::build_ifg_physical`               | `<unknown>` |
| 23.1% |       3 | `PhaseLive::add_liveout`                         | `<unknown>` |
|  7.7% |       1 | `PhaseChaitin::stretch_base_pointer_live_ranges` | `<unknown>` |
|  7.7% |       1 | `PhaseIFG::remove_node`                          | `<unknown>` |
|  7.7% |       1 | `PhaseChaitin::compute_initial_block_pressure`   | `<unknown>` |

##### `PhaseIdealLoop::build_loop_late` (`<unknown>`)

|      % | Samples | Caller                               | Location    |
| -----: | ------: | ------------------------------------ | ----------- |
| 100.0% |      12 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |

##### `IntervalWalker::walk_to` (`<unknown>`)

|     % | Samples | Caller                        | Location    |
| ----: | ------: | ----------------------------- | ----------- |
| 90.9% |      10 | `IntervalWalker::walk_to`     | `<unknown>` |
|  9.1% |       1 | `LinearScan::compute_oop_map` | `<unknown>` |

##### `PhaseChaitin::gather_lrg_masks` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |      11 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `Compile::identify_useful_nodes` (`<unknown>`)

|     % | Samples | Caller                                        | Location    |
| ----: | ------: | --------------------------------------------- | ----------- |
| 80.0% |       8 | `PhaseRemoveUseless::PhaseRemoveUseless`      | `<unknown>` |
| 20.0% |       2 | `Matcher::specialize_generic_vector_operands` | `<unknown>` |

##### `LIR_OpVisitState::visit` (`<unknown>`)

|     % | Samples | Caller                                | Location    |
| ----: | ------: | ------------------------------------- | ----------- |
| 33.3% |       3 | `LinearScan::build_intervals`         | `<unknown>` |
| 22.2% |       2 | `LinearScan::compute_local_live_sets` | `<unknown>` |
| 22.2% |       2 | `LinearScan::assign_reg_num`          | `<unknown>` |
| 22.2% |       2 | `LinearScan::do_linear_scan`          | `<unknown>` |

##### `PhaseLive::compute` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |       9 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `PhaseAggressiveCoalesce::insert_copies` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |       9 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `PhaseIdealLoop::build_loop_early` (`<unknown>`)

|      % | Samples | Caller                               | Location    |
| -----: | ------: | ------------------------------------ | ----------- |
| 100.0% |       9 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |

##### `PhaseChaitin::elide_copy` (`<unknown>`)

|     % | Samples | Caller                                     | Location    |
| ----: | ------: | ------------------------------------------ | ----------- |
| 87.5% |       7 | `PhaseChaitin::post_allocate_copy_removal` | `<unknown>` |
| 12.5% |       1 | `PhaseChaitin::Register_Allocate`          | `<unknown>` |

##### `Node_Backward_Iterator::next` (`<unknown>`)

|     % | Samples | Caller                         | Location    |
| ----: | ------: | ------------------------------ | ----------- |
| 85.7% |       6 | `PhaseCFG::schedule_late`      | `<unknown>` |
| 14.3% |       1 | `PhaseCFG::global_code_motion` | `<unknown>` |

##### `Node::dominates` (`<unknown>`)

|      % | Samples | Caller                           | Location    |
| -----: | ------: | -------------------------------- | ----------- |
| 100.0% |       7 | `MemNode::all_controls_dominate` | `<unknown>` |

##### `PhaseChaitin::post_allocate_copy_removal` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |       7 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `Unique_Node_List::remove` (`<unknown>`)

|      % | Samples | Caller                                    | Location    |
| -----: | ------: | ----------------------------------------- | ----------- |
| 100.0% |       6 | `PhaseIterGVN::remove_globally_dead_node` | `<unknown>` |

##### `PhaseIdealLoop::build_loop_late_post_work` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |       6 | `PhaseIdealLoop::build_loop_late` | `<unknown>` |

##### `I2C/C2I adapters(0xb)` (`<unknown>`)

|     % | Samples | Caller                             | Location                                                                           |
| ----: | ------: | ---------------------------------- | ---------------------------------------------------------------------------------- |
| 16.7% |       1 | `<init>`                           | `org.jetbrains.kotlin.codegen.InsnSequence$iterator$1`                             |
| 16.7% |       1 | `computeTopLevelClassifierNames`   | `org.jetbrains.kotlin.fir.resolve.providers.FirCompositeCachedSymbolNamesProvider` |
| 16.7% |       1 | `deserializeClassToSymbol`         | `org.jetbrains.kotlin.fir.deserialization.ClassDeserializationKt`                  |
| 16.7% |       1 | `getResolvedAnnotationClassIds`    | `org.jetbrains.kotlin.fir.symbols.FirBasedSymbol`                                  |
| 16.7% |       1 | `getCapturedParametersSizeOnStack` | `org.jetbrains.kotlin.codegen.inline.Parameters`                                   |

##### `PhaseIdealLoop::is_dominator` (`<unknown>`)

|      % | Samples | Caller                                        | Location    |
| -----: | ------: | --------------------------------------------- | ----------- |
| 100.0% |       6 | `PhaseIdealLoop::get_late_ctrl_with_anti_dep` | `<unknown>` |

##### `I2C/C2I adapters(0xbbb)` (`<unknown>`)

|     % | Samples | Caller                                       | Location                                                                                           |
| ----: | ------: | -------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| 33.3% |       1 | `transform`                                  | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer` |
| 33.3% |       1 | `getPropertiesAndFieldsFromSupertypesByName` | `org.jetbrains.kotlin.fir.scopes.impl.FirClassUseSiteMemberScope`                                  |

##### `applyArgumentsWithReorderingIfNeeded` (`org.jetbrains.kotlin.fir.backend.generators.CallAndReferenceGenerator`)

|      % | Samples | Caller               | Location                                                                |
| -----: | ------: | -------------------- | ----------------------------------------------------------------------- |
| 100.0% |       2 | `applyCallArguments` | `org.jetbrains.kotlin.fir.backend.generators.CallAndReferenceGenerator` |

##### `asReadOnlyStorage` (`org.jetbrains.kotlin.resolve.calls.inference.model.NewConstraintSystemImpl`)

|     % | Samples | Caller            | Location                                                                      |
| ----: | ------: | ----------------- | ----------------------------------------------------------------------------- |
| 50.0% |       1 | `completeCall`    | `org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter`                 |
| 50.0% |       1 | `buildBaseSystem` | `org.jetbrains.kotlin.fir.resolve.calls.candidate.CandidateFactory$Companion` |

##### `transform` (`org.jetbrains.kotlin.codegen.optimization.RedundantGotoMethodTransformer`)

|      % | Samples | Caller      | Location                                                                           |
| -----: | ------: | ----------- | ---------------------------------------------------------------------------------- |
| 100.0% |       2 | `transform` | `org.jetbrains.kotlin.codegen.optimization.transformer.CompositeMethodTransformer` |

##### `getKey` (`java.util.HashMap$Node`)

|     % | Samples | Caller               | Location                                                                     |
| ----: | ------: | -------------------- | ---------------------------------------------------------------------------- |
| 50.0% |       1 | `prepareTransaction` | `org.jetbrains.kotlin.resolve.calls.inference.model.NewConstraintSystemImpl` |
| 50.0% |       1 | `getModuleData`      | `org.jetbrains.kotlin.fir.deserialization.MultipleModuleDataProvider`        |

##### `checkNotNullParameter` (`kotlin.jvm.internal.Intrinsics`)

|     % | Samples | Caller                       | Location                                                                                       |
| ----: | ------: | ---------------------------- | ---------------------------------------------------------------------------------------------- |
| 50.0% |       1 | `check`                      | `org.jetbrains.kotlin.fir.analysis.checkers.expression.FirIncompatibleClassExpressionChecker`  |
| 50.0% |       1 | `transformReceiverParameter` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer` |

##### `hasNext` (`kotlin.collections.EmptyIterator`)

|     % | Samples | Caller                                      | Location                                                                                                         |
| ----: | ------: | ------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| 50.0% |       1 | `refineTypeArgumentsOfTypeAliasConstructor` | `org.jetbrains.kotlin.fir.backend.generators.CallAndReferenceGenerator`                                          |
| 50.0% |       1 | `check`                                     | `org.jetbrains.kotlin.fir.analysis.checkers.declaration.FirCoroutineContextAsContextParameterDeclarationChecker` |

##### `zero_blocks` (`<unknown>`)

|      % | Samples | Caller   | Location                        |
| -----: | ------: | -------- | ------------------------------- |
| 100.0% |       2 | `<init>` | `java.io.ByteArrayOutputStream` |

##### `visitNamedFunction` (`org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor`)

|      % | Samples | Caller               | Location                                                                          |
| -----: | ------: | -------------------- | --------------------------------------------------------------------------------- |
| 100.0% |       1 | `visitNamedFunction` | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor` |

##### `visitJumpInsn` (`org.jetbrains.org.objectweb.asm.MethodVisitor`)

|      % | Samples | Caller | Location                                                     |
| -----: | ------: | ------ | ------------------------------------------------------------ |
| 100.0% |       1 | `ifeq` | `org.jetbrains.org.objectweb.asm.commons.InstructionAdapter` |

##### `<init>` (`org.jetbrains.kotlin.utils.ThreadLocalDelegate`)

|      % | Samples | Caller        | Location                                   |
| -----: | ------: | ------------- | ------------------------------------------ |
| 100.0% |       1 | `threadLocal` | `org.jetbrains.kotlin.utils.ThreadLocalKt` |

##### `buildSimpleArray` (`org.jetbrains.kotlin.backend.jvm.ir.IrArrayBuilder`)

|      % | Samples | Caller  | Location                                             |
| -----: | ------: | ------- | ---------------------------------------------------- |
| 100.0% |       1 | `build` | `org.jetbrains.kotlin.backend.jvm.ir.IrArrayBuilder` |

##### `isContainedInInvariantOrContravariantPositionsWithDependencies` (`org.jetbrains.kotlin.fir.resolve.calls.stages.CollectTypeVariableUsagesInfo`)

|      % | Samples | Caller  | Location                                                                      |
| -----: | ------: | ------- | ----------------------------------------------------------------------------- |
| 100.0% |       1 | `check` | `org.jetbrains.kotlin.fir.resolve.calls.stages.CollectTypeVariableUsagesInfo` |

##### `check` (`org.jetbrains.kotlin.fir.resolve.calls.stages.CollectTypeVariableUsagesInfo`)

|      % | Samples | Caller          | Location                                                                                 |
| -----: | ------: | --------------- | ---------------------------------------------------------------------------------------- |
| 100.0% |       1 | `invokeSuspend` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner$processCandidate$1` |

##### `processCandidate` (`org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner`)

|      % | Samples | Caller                     | Location                                                              |
| -----: | ------: | -------------------------- | --------------------------------------------------------------------- |
| 100.0% |       1 | `processCandidate$default` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner` |

##### `incorporate` (`org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintIncorporator`)

|      % | Samples | Caller                    | Location                                                                     |
| -----: | ------: | ------------------------- | ---------------------------------------------------------------------------- |
| 100.0% |       1 | `processGivenConstraints` | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector` |

##### `processGivenConstraints` (`org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector`)

|      % | Samples | Caller                                | Location                                                                     |
| -----: | ------: | ------------------------------------- | ---------------------------------------------------------------------------- |
| 100.0% |       1 | `processConstraintsIgnoringForksData` | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector` |

##### `addConstraintIfCompatible` (`org.jetbrains.kotlin.resolve.calls.inference.ConstraintSystemBuilderKt`)

|      % | Samples | Caller                             | Location                                                                 |
| -----: | ------: | ---------------------------------- | ------------------------------------------------------------------------ |
| 100.0% |       1 | `addSubtypeConstraintIfCompatible` | `org.jetbrains.kotlin.resolve.calls.inference.ConstraintSystemBuilderKt` |

##### `resolveExtensionReceiver` (`org.jetbrains.kotlin.fir.resolve.calls.stages.CheckExtensionReceiver`)

|      % | Samples | Caller  | Location                                                               |
| -----: | ------: | ------- | ---------------------------------------------------------------------- |
| 100.0% |       1 | `check` | `org.jetbrains.kotlin.fir.resolve.calls.stages.CheckExtensionReceiver` |

##### `transformElement` (`org.jetbrains.kotlin.fir.resolve.transformers.FirCallCompletionResultsWriterTransformer$transformArgumentList$ArgumentTransformer`)

|      % | Samples | Caller                               | Location                                           |
| -----: | ------: | ------------------------------------ | -------------------------------------------------- |
| 100.0% |       1 | `transformVarargArgumentsExpression` | `org.jetbrains.kotlin.fir.visitors.FirTransformer` |

##### `createLibrarySession$lambda$0` (`org.jetbrains.kotlin.fir.session.FirJvmSessionFactory`)

|      % | Samples | Caller   | Location                                                                           |
| -----: | ------: | -------- | ---------------------------------------------------------------------------------- |
| 100.0% |       1 | `invoke` | `org.jetbrains.kotlin.fir.session.FirJvmSessionFactory$$Lambda.0x0000007001477c50` |

##### `acceptChildren` (`org.jetbrains.kotlin.fir.expressions.impl.FirFunctionCallImpl`)

|      % | Samples | Caller         | Location                                                                                                                |
| -----: | ------: | -------------- | ----------------------------------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `visitElement` | `org.jetbrains.kotlin.fir.analysis.collectors.components.ControlFlowAnalysisDiagnosticComponent$LocalPropertyCollector` |

##### `getUseSiteMemberScope` (`org.jetbrains.kotlin.fir.scopes.FirKotlinScopeProvider`)

|      % | Samples | Caller               | Location                                                   |
| -----: | ------: | -------------------- | ---------------------------------------------------------- |
| 100.0% |       1 | `unsubstitutedScope` | `org.jetbrains.kotlin.fir.scopes.FirKotlinScopeProviderKt` |

##### `<init>` (`org.jetbrains.kotlin.resolve.calls.inference.model.Constraint`)

|      % | Samples | Caller                         | Location                                                                                                           |
| -----: | ------: | ------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| 100.0% |       1 | `addNewIncorporatedConstraint` | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector$TypeCheckerStateForConstraintInjector` |

##### `visitNamedFunction` (`org.jetbrains.kotlin.fir.analysis.checkers.declaration.DeclarationCheckersDiagnosticComponent`)

|      % | Samples | Caller               | Location                                                                                        |
| -----: | ------: | -------------------- | ----------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `visitNamedFunction` | `org.jetbrains.kotlin.fir.analysis.checkers.declaration.DeclarationCheckersDiagnosticComponent` |

##### `get` (`java.util.HashMap`)

|      % | Samples | Caller | Location                                                            |
| -----: | ------: | ------ | ------------------------------------------------------------------- |
| 100.0% |       1 | `get`  | `org.jetbrains.kotlin.cli.jvm.index.JvmDependenciesIndexImpl$Cache` |

##### `copyOf` (`java.util.Arrays`)

|      % | Samples | Caller   | Location           |
| -----: | ------: | -------- | ------------------ |
| 100.0% |       1 | `copyOf` | `java.util.Arrays` |

##### `contains$default` (`kotlin.text.StringsKt__StringsKt`)

|      % | Samples | Caller                                                              | Location                                                                               |
| -----: | ------: | ------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| 100.0% |       1 | `mapInternalNameToClassId$org_jetbrains_kotlin_frontend_common_jvm` | `org.jetbrains.kotlin.load.java.structure.impl.classFiles.ClassifierResolutionContext` |

##### `isEmpty` (`kotlin.collections.EmptyList`)

|      % | Samples | Caller                            | Location                                            |
| -----: | ------: | --------------------------------- | --------------------------------------------------- |
| 100.0% |       1 | `resolveAnnotationsWithArguments` | `org.jetbrains.kotlin.fir.symbols.FirBasedSymbolKt` |

##### `<init>` (`java.util.ArrayDeque`)

|      % | Samples | Caller       | Location                                      |
| -----: | ------: | ------------ | --------------------------------------------- |
| 100.0% |       1 | `initialize` | `org.jetbrains.kotlin.types.TypeCheckerState` |

##### `mapOf` (`kotlin.collections.MapsKt__MapsJVMKt`)

|      % | Samples | Caller               | Location                                                 |
| -----: | ------: | -------------------- | -------------------------------------------------------- |
| 100.0% |       1 | `buildFirAnnotation` | `org.jetbrains.kotlin.fir.java.JavaAnnotationsMappingKt` |

##### `charAt` (`java.lang.String`)

|      % | Samples | Caller                 | Location                                                                    |
| -----: | ------: | ---------------------- | --------------------------------------------------------------------------- |
| 100.0% |       1 | `toLowerCaseAsciiOnly` | `org.jetbrains.kotlin.util.capitalizeDecapitalize.CapitalizeDecapitalizeKt` |

##### `reverse` (`kotlin.collections.CollectionsKt___CollectionsJvmKt`)

|      % | Samples | Caller      | Location                                                                   |
| -----: | ------: | ----------- | -------------------------------------------------------------------------- |
| 100.0% |       1 | `visitMaxs` | `org.jetbrains.kotlin.codegen.inline.MaxStackFrameSizeAndLocalsCalculator` |

##### `add` (`java.util.ArrayList`)

|      % | Samples | Caller                             | Location                                                  |
| -----: | ------: | ---------------------------------- | --------------------------------------------------------- |
| 100.0% |       1 | `extractArgumentsTypeRefAndSource` | `org.jetbrains.kotlin.fir.analysis.checkers.FirHelpersKt` |

##### `I2C/C2I adapters(0xbb)` (`<unknown>`)

|      % | Samples | Caller     | Location                                                                         |
| -----: | ------: | ---------- | -------------------------------------------------------------------------------- |
| 100.0% |       1 | `getClass` | `org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                                   | Location                                                |
| ----: | ------: | ------------------------------------------ | ------------------------------------------------------- |
| 61.0% |     825 | `CompileBroker::compiler_thread_loop`      | `<unknown>`                                             |
| 60.2% |     815 | `CompileBroker::invoke_compiler_on_method` | `<unknown>`                                             |
| 41.5% |     561 | `Compile::Compile`                         | `<unknown>`                                             |
| 41.5% |     561 | `C2Compiler::compile_method`               | `<unknown>`                                             |
| 32.2% |     435 | `run`                                      | `org.jetbrains.kotlin.preloading.Preloader`             |
| 32.2% |     435 | `main`                                     | `org.jetbrains.kotlin.preloading.Preloader`             |
| 26.5% |     359 | `main`                                     | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`  |
| 26.5% |     359 | `main`                                     | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 26.5% |     359 | `invoke`                                   | `java.lang.reflect.Method`                              |
| 26.4% |     357 | `doMainNoExit$default`                     | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 26.4% |     357 | `doMain`                                   | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 26.3% |     356 | `exec`                                     | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 26.3% |     356 | `doMainNoExit`                             | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 25.2% |     341 | `doExecutePhased`                          | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 25.2% |     341 | `execImpl`                                 | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 25.1% |     340 | `executeAndReturnPipeLineArtifact`         | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 25.1% |     340 | `executeAndReturnPipeLineArtifact$default` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 25.1% |     340 | `execute`                                  | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 25.0% |     338 | `runPhasedPipeline`                        | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 24.9% |     337 | `phaseBody`                                | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`       |

#### Categories

##### Compiler

|     % | Samples | Function                                    | Location    |
| ----: | ------: | ------------------------------------------- | ----------- |
| 61.0% |     825 | `CompileBroker::compiler_thread_loop`       | `<unknown>` |
| 60.2% |     815 | `CompileBroker::invoke_compiler_on_method`  | `<unknown>` |
| 41.5% |     561 | `Compile::Compile`                          | `<unknown>` |
| 41.5% |     561 | `C2Compiler::compile_method`                | `<unknown>` |
| 20.8% |     281 | `Compile::Code_Gen`                         | `<unknown>` |
| 17.8% |     241 | `Compilation::compile_method`               | `<unknown>` |
| 17.8% |     241 | `Compilation::Compilation`                  | `<unknown>` |
| 15.6% |     211 | `Compilation::compile_java_method`          | `<unknown>` |
| 14.6% |     198 | `Compile::Optimize`                         | `<unknown>` |
| 11.5% |     155 | `PhaseChaitin::Register_Allocate`           | `<unknown>` |
|  7.9% |     107 | `PhaseIdealLoop::optimize`                  | `<unknown>` |
|  6.7% |      90 | `PhaseIdealLoop::build_and_optimize`        | `<unknown>` |
|  6.7% |      90 | `PhaseIdealLoop::PhaseIdealLoop`            | `<unknown>` |
|  6.6% |      89 | `Compilation::build_hir`                    | `<unknown>` |
|  6.1% |      83 | `Compilation::emit_lir`                     | `<unknown>` |
|  5.2% |      71 | `GraphBuilder::GraphBuilder`                | `<unknown>` |
|  4.9% |      66 | `LinearScan::do_linear_scan`                | `<unknown>` |
|  4.4% |      60 | `GraphBuilder::iterate_bytecodes_for_block` | `<unknown>` |
|  4.4% |      59 | `GraphBuilder::iterate_all_blocks`          | `<unknown>` |
|  4.3% |      58 | `PhaseIterGVN::optimize`                    | `<unknown>` |

##### Ours

|     % | Samples | Function                                   | Location                                                         |
| ----: | ------: | ------------------------------------------ | ---------------------------------------------------------------- |
| 32.2% |     435 | `run`                                      | `org.jetbrains.kotlin.preloading.Preloader`                      |
| 32.2% |     435 | `main`                                     | `org.jetbrains.kotlin.preloading.Preloader`                      |
| 26.5% |     359 | `main`                                     | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`           |
| 26.5% |     359 | `main`                                     | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                     |
| 26.4% |     357 | `doMainNoExit$default`                     | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`          |
| 26.4% |     357 | `doMain`                                   | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`          |
| 26.3% |     356 | `exec`                                     | `org.jetbrains.kotlin.cli.common.CLICompiler`                    |
| 26.3% |     356 | `doMainNoExit`                             | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`          |
| 25.2% |     341 | `doExecutePhased`                          | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                     |
| 25.2% |     341 | `execImpl`                                 | `org.jetbrains.kotlin.cli.common.CLICompiler`                    |
| 25.1% |     340 | `executeAndReturnPipeLineArtifact`         | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`          |
| 25.1% |     340 | `executeAndReturnPipeLineArtifact$default` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`          |
| 25.1% |     340 | `execute`                                  | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`          |
| 25.0% |     338 | `runPhasedPipeline`                        | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`          |
| 24.9% |     337 | `phaseBody`                                | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`                |
| 24.9% |     337 | `invoke`                                   | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`          |
| 24.9% |     337 | `invoke`                                   | `org.jetbrains.kotlin.backend.common.phaser.CompositePhase`      |
| 24.9% |     337 | `invokeToplevel`                           | `org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`             |
| 16.7% |     226 | `executePhase`                             | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase` |
| 12.2% |     165 | `resolveAndCheckFir`                       | `org.jetbrains.kotlin.fir.pipeline.FirUtilsKt`                   |

##### Standard library

|     % | Samples | Function                   | Location                                              |
| ----: | ------: | -------------------------- | ----------------------------------------------------- |
| 26.5% |     359 | `invoke`                   | `java.lang.reflect.Method`                            |
|  5.5% |      74 | `loadClass`                | `java.lang.ClassLoader`                               |
|  5.2% |      70 | `read`                     | `java.io.FilterInputStream`                           |
|  5.1% |      69 | `defineClass`              | `java.lang.ClassLoader`                               |
|  5.1% |      69 | `inflate`                  | `java.util.zip.Inflater`                              |
|  4.1% |      55 | `resumeWith`               | `kotlin.coroutines.jvm.internal.BaseContinuationImpl` |
|  1.3% |      18 | `getValue`                 | `kotlin.SafePublicationLazyImpl`                      |
|  1.0% |      14 | `getValue`                 | `kotlin.UnsafeLazyImpl`                               |
|  1.0% |      13 | `getValue`                 | `kotlin.SynchronizedLazyImpl`                         |
|  0.7% |       9 | `getJavaField`             | `kotlin.reflect.jvm.ReflectJvmMapping`                |
|  0.5% |       7 | `linkCallSite`             | `java.lang.invoke.MethodHandleNatives`                |
|  0.4% |       5 | `checkNotNullParameter`    | `kotlin.jvm.internal.Intrinsics`                      |
|  0.3% |       4 | `put`                      | `java.util.HashMap`                                   |
|  0.3% |       4 | `linkMethodHandleConstant` | `java.lang.invoke.MethodHandleNatives`                |
|  0.3% |       4 | `get`                      | `java.util.HashMap`                                   |
|  0.2% |       3 | `linkToTargetMethod`       | `java.lang.invoke.Invokers$Holder`                    |
|  0.2% |       3 | `copyOf`                   | `java.util.Arrays`                                    |
|  0.2% |       3 | `toByteArray`              | `java.io.ByteArrayOutputStream`                       |
|  0.2% |       3 | `areEqual`                 | `kotlin.jvm.internal.Intrinsics`                      |
|  0.2% |       3 | `append`                   | `java.lang.StringBuilder`                             |

##### JIT

|    % | Samples | Function                    | Location    |
| ---: | ------: | --------------------------- | ----------- |
| 0.4% |       6 | `I2C/C2I adapters(0xb)`     | `<unknown>` |
| 0.2% |       3 | `I2C/C2I adapters(0xbbb)`   | `<unknown>` |
| 0.1% |       2 | `zero_blocks`               | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xbb)`    | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xbabaa)` | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `CompileBroker::compiler_thread_loop` (`<unknown>`)

|     % | Samples | Callee                                     | Location    |
| ----: | ------: | ------------------------------------------ | ----------- |
| 98.8% |     815 | `CompileBroker::invoke_compiler_on_method` | `<unknown>` |
|  1.2% |      10 | `CompileQueue::get`                        | `<unknown>` |

##### `CompileBroker::invoke_compiler_on_method` (`<unknown>`)

|     % | Samples | Callee                          | Location    |
| ----: | ------: | ------------------------------- | ----------- |
| 68.8% |     561 | `C2Compiler::compile_method`    | `<unknown>` |
|  0.5% |       4 | `ciEnv::~ciEnv`                 | `<unknown>` |
|  0.4% |       3 | `ciEnv::get_method_from_handle` | `<unknown>` |
|  0.2% |       2 | `CompilationLog::log_compile`   | `<unknown>` |
|  0.1% |       1 | `ciEnv::ciEnv`                  | `<unknown>` |

##### `Compile::Compile` (`<unknown>`)

|     % | Samples | Callee                                   | Location    |
| ----: | ------: | ---------------------------------------- | ----------- |
| 50.1% |     281 | `Compile::Code_Gen`                      | `<unknown>` |
| 35.3% |     198 | `Compile::Optimize`                      | `<unknown>` |
|  1.4% |       8 | `PhaseRemoveUseless::PhaseRemoveUseless` | `<unknown>` |
|  0.4% |       2 | `Type::Initialize`                       | `<unknown>` |
|  0.2% |       1 | `TypeFunc::make`                         | `<unknown>` |

##### `C2Compiler::compile_method` (`<unknown>`)

|      % | Samples | Callee             | Location    |
| -----: | ------: | ------------------ | ----------- |
| 100.0% |     561 | `Compile::Compile` | `<unknown>` |

##### `run` (`org.jetbrains.kotlin.preloading.Preloader`)

|     % | Samples | Callee           | Location                                               |
| ----: | ------: | ---------------- | ------------------------------------------------------ |
| 82.5% |     359 | `invoke`         | `java.lang.reflect.Method`                             |
| 17.2% |      75 | `preloadClasses` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |
|  0.2% |       1 | `getMethod`      | `java.lang.Class`                                      |

##### `main` (`org.jetbrains.kotlin.preloading.Preloader`)

|      % | Samples | Callee | Location                                    |
| -----: | ------: | ------ | ------------------------------------------- |
| 100.0% |     435 | `run`  | `org.jetbrains.kotlin.preloading.Preloader` |

##### `main` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`)

|     % | Samples | Callee   | Location                                                |
| ----: | ------: | -------- | ------------------------------------------------------- |
| 99.4% |     357 | `doMain` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
|  0.6% |       2 | `<init>` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |

##### `main` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % | Samples | Callee | Location                                               |
| -----: | ------: | ------ | ------------------------------------------------------ |
| 100.0% |     359 | `main` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion` |

##### `doMainNoExit$default` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|     % | Samples | Callee                   | Location                                                |
| ----: | ------: | ------------------------ | ------------------------------------------------------- |
| 99.7% |     356 | `doMainNoExit`           | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
|  0.3% |       1 | `defaultMessageRenderer` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `doMain` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % | Samples | Callee                 | Location                                                |
| -----: | ------: | ---------------------- | ------------------------------------------------------- |
| 100.0% |     357 | `doMainNoExit$default` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `exec` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Callee                              | Location                                                                |
| -----: | ------: | ----------------------------------- | ----------------------------------------------------------------------- |
| 100.0% |     356 | `exec`                              | `org.jetbrains.kotlin.cli.common.CLICompiler`                           |
|  95.8% |     341 | `execImpl`                          | `org.jetbrains.kotlin.cli.common.CLICompiler`                           |
|   2.5% |       9 | `<clinit>`                          | `org.jetbrains.kotlin.cli.common.ArgumentsKt`                           |
|   1.4% |       5 | `parseCommandLineArguments$default` | `org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt` |
|   0.3% |       1 | `createArguments`                   | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                            |

##### `doMainNoExit` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % | Samples | Callee | Location                                      |
| -----: | ------: | ------ | --------------------------------------------- |
| 100.0% |     356 | `exec` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `doExecutePhased` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % | Samples | Callee                         | Location                                                |
| -----: | ------: | ------------------------------ | ------------------------------------------------------- |
| 100.0% |     341 | `doExecutePhased`              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
|  99.7% |     340 | `execute`                      | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
|   0.3% |       1 | `getDefaultPerformanceManager` | `org.jetbrains.kotlin.cli.common.CLICompiler`           |

##### `execImpl` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Callee            | Location                                     |
| -----: | ------: | ----------------- | -------------------------------------------- |
| 100.0% |     341 | `doExecutePhased` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `executeAndReturnPipeLineArtifact` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|     % | Samples | Callee                     | Location                                                            |
| ----: | ------: | -------------------------- | ------------------------------------------------------------------- |
| 99.4% |     338 | `runPhasedPipeline`        | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`             |
|  0.3% |       1 | `disposeRootInWriteAction` | `org.jetbrains.kotlin.cli.common.UtilsKt`                           |
|  0.3% |       1 | `<init>`                   | `org.jetbrains.kotlin.cli.common.messages.GroupingMessageCollector` |

##### `executeAndReturnPipeLineArtifact$default` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Callee                             | Location                                                |
| -----: | ------: | ---------------------------------- | ------------------------------------------------------- |
| 100.0% |     340 | `executeAndReturnPipeLineArtifact` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `execute` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Callee                                     | Location                                                |
| -----: | ------: | ------------------------------------------ | ------------------------------------------------------- |
| 100.0% |     340 | `executeAndReturnPipeLineArtifact$default` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `runPhasedPipeline` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|     % | Samples | Callee                     | Location                                                                    |
| ----: | ------: | -------------------------- | --------------------------------------------------------------------------- |
| 99.7% |     337 | `invokeToplevel`           | `org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`                        |
|  0.3% |       1 | `reportToMessageCollector` | `org.jetbrains.kotlin.cli.common.fir.FirDiagnosticsCompilerResultsReporter` |

##### `phaseBody` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

|      % | Samples | Callee         | Location                                                              |
| -----: | ------: | -------------- | --------------------------------------------------------------------- |
| 100.0% |     337 | `phaseBody`    | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`                     |
|  67.1% |     226 | `executePhase` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`      |
|  22.8% |      77 | `executePhase` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`       |
|   8.9% |      30 | `executePhase` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFir2IrPipelinePhase`        |
|   1.2% |       4 | `executePhase` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmConfigurationPipelinePhase` |

##### `invoke` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`)

|      % | Samples | Callee      | Location                                                         |
| -----: | ------: | ----------- | ---------------------------------------------------------------- |
| 100.0% |     337 | `phaseBody` | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`                |
|   5.0% |      17 | `phaseBody` | `org.jetbrains.kotlin.backend.common.phaser.FileLoweringPhase`   |
|   1.2% |       4 | `phaseBody` | `org.jetbrains.kotlin.backend.common.phaser.ModuleLoweringPhase` |
|   0.3% |       1 | `runBefore` | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`          |
|   0.3% |       1 | `isEnabled` | `org.jetbrains.kotlin.config.phaser.PhaseConfig`                 |

##### `invoke` (`org.jetbrains.kotlin.backend.common.phaser.CompositePhase`)

|      % | Samples | Callee   | Location                                                |
| -----: | ------: | -------- | ------------------------------------------------------- |
| 100.0% |     337 | `invoke` | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase` |

##### `invokeToplevel` (`org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`)

|      % | Samples | Callee   | Location                                                    |
| -----: | ------: | -------- | ----------------------------------------------------------- |
| 100.0% |     337 | `invoke` | `org.jetbrains.kotlin.backend.common.phaser.CompositePhase` |

##### `Compile::Code_Gen` (`<unknown>`)

|     % | Samples | Callee                               | Location    |
| ----: | ------: | ------------------------------------ | ----------- |
| 55.2% |     155 | `PhaseChaitin::Register_Allocate`    | `<unknown>` |
| 16.0% |      45 | `Matcher::match`                     | `<unknown>` |
| 13.9% |      39 | `PhaseCFG::do_global_code_motion`    | `<unknown>` |
| 11.0% |      31 | `PhaseOutput::Output`                | `<unknown>` |
|  1.8% |       5 | `PhaseBlockLayout::PhaseBlockLayout` | `<unknown>` |

##### `Compilation::compile_method` (`<unknown>`)

|     % | Samples | Callee                             | Location    |
| ----: | ------: | ---------------------------------- | ----------- |
| 87.6% |     211 | `Compilation::compile_java_method` | `<unknown>` |
| 11.2% |      27 | `ciEnv::register_method`           | `<unknown>` |

##### `Compilation::Compilation` (`<unknown>`)

|      % | Samples | Callee                        | Location    |
| -----: | ------: | ----------------------------- | ----------- |
| 100.0% |     241 | `Compilation::compile_method` | `<unknown>` |

##### `executePhase` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`)

|      % | Samples | Callee                        | Location                                                         |
| -----: | ------: | ----------------------------- | ---------------------------------------------------------------- |
| 100.0% |     226 | `executePhase`                | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase` |
|  73.0% |     165 | `resolveAndCheckFir`          | `org.jetbrains.kotlin.fir.pipeline.FirUtilsKt`                   |
|  10.2% |      23 | `createEnvironmentAndSources` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase` |
|   7.5% |      17 | `prepareJvmSessions`          | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase` |
|   6.6% |      15 | `buildFirViaLightTree`        | `org.jetbrains.kotlin.fir.pipeline.FirUtilsKt`                   |

##### `Compilation::compile_java_method` (`<unknown>`)

|     % | Samples | Callee                        | Location    |
| ----: | ------: | ----------------------------- | ----------- |
| 42.2% |      89 | `Compilation::build_hir`      | `<unknown>` |
| 39.3% |      83 | `Compilation::emit_lir`       | `<unknown>` |
| 18.5% |      39 | `Compilation::emit_code_body` | `<unknown>` |

##### `Compile::Optimize` (`<unknown>`)

|     % | Samples | Callee                                 | Location    |
| ----: | ------: | -------------------------------------- | ----------- |
| 32.3% |      64 | `PhaseIdealLoop::optimize`             | `<unknown>` |
| 21.7% |      43 | `Compile::optimize_loops`              | `<unknown>` |
| 17.7% |      35 | `PhaseIterGVN::optimize`               | `<unknown>` |
|  7.6% |      15 | `PhaseCCP::PhaseCCP`                   | `<unknown>` |
|  5.6% |      11 | `PhaseMacroExpand::expand_macro_nodes` | `<unknown>` |

##### `resolveAndCheckFir` (`org.jetbrains.kotlin.fir.pipeline.FirUtilsKt`)

|     % | Samples | Callee          | Location                                      |
| ----: | ------: | --------------- | --------------------------------------------- |
| 74.5% |     123 | `runResolution` | `org.jetbrains.kotlin.fir.pipeline.AnalyseKt` |
| 25.5% |      42 | `runCheckers`   | `org.jetbrains.kotlin.fir.pipeline.AnalyseKt` |

##### `PhaseChaitin::Register_Allocate` (`<unknown>`)

|     % | Samples | Callee                                     | Location    |
| ----: | ------: | ------------------------------------------ | ----------- |
| 22.6% |      35 | `PhaseChaitin::build_ifg_physical`         | `<unknown>` |
| 18.1% |      28 | `PhaseChaitin::Split`                      | `<unknown>` |
| 11.0% |      17 | `PhaseLive::compute`                       | `<unknown>` |
| 10.3% |      16 | `PhaseChaitin::post_allocate_copy_removal` | `<unknown>` |
|  8.4% |      13 | `PhaseChaitin::gather_lrg_masks`           | `<unknown>` |

##### `PhaseIdealLoop::optimize` (`<unknown>`)

|     % | Samples | Callee                           | Location    |
| ----: | ------: | -------------------------------- | ----------- |
| 84.1% |      90 | `PhaseIdealLoop::PhaseIdealLoop` | `<unknown>` |
| 15.0% |      16 | `PhaseIterGVN::optimize`         | `<unknown>` |

##### `PhaseIdealLoop::build_and_optimize` (`<unknown>`)

|     % | Samples | Callee                                 | Location    |
| ----: | ------: | -------------------------------------- | ----------- |
| 40.0% |      36 | `PhaseIdealLoop::build_loop_late`      | `<unknown>` |
| 15.6% |      14 | `PhaseIdealLoop::split_if_with_blocks` | `<unknown>` |
| 10.0% |       9 | `PhaseIdealLoop::build_loop_early`     | `<unknown>` |
|  8.9% |       8 | `PhaseIdealLoop::build_loop_tree`      | `<unknown>` |
|  7.8% |       7 | `PhaseIdealLoop::Dominators`           | `<unknown>` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`<unknown>`)

|      % | Samples | Callee                               | Location    |
| -----: | ------: | ------------------------------------ | ----------- |
| 100.0% |      90 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |

##### `Compilation::emit_lir` (`<unknown>`)

|     % | Samples | Callee                       | Location    |
| ----: | ------: | ---------------------------- | ----------- |
| 79.5% |      66 | `LinearScan::do_linear_scan` | `<unknown>` |
| 19.3% |      16 | `BlockList::iterate_forward` | `<unknown>` |

##### `loadClass` (`java.lang.ClassLoader`)

|     % | Samples | Callee      | Location                                                 |
| ----: | ------: | ----------- | -------------------------------------------------------- |
| 93.2% |      69 | `findClass` | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |
|  2.7% |       2 | `loadClass` | `java.lang.ClassLoader`                                  |

##### `GraphBuilder::GraphBuilder` (`<unknown>`)

|     % | Samples | Callee                                      | Location    |
| ----: | ------: | ------------------------------------------- | ----------- |
| 83.1% |      59 | `GraphBuilder::iterate_all_blocks`          | `<unknown>` |
|  7.0% |       5 | `BlockListBuilder::BlockListBuilder`        | `<unknown>` |
|  5.6% |       4 | `BlockBegin::iterate_preorder`              | `<unknown>` |
|  1.4% |       1 | `GraphBuilder::state_at_entry`              | `<unknown>` |
|  1.4% |       1 | `GraphBuilder::iterate_bytecodes_for_block` | `<unknown>` |

##### `defineClass` (`java.lang.ClassLoader`)

|     % | Samples | Callee        | Location                |
| ----: | ------: | ------------- | ----------------------- |
| 98.6% |      68 | `defineClass` | `java.lang.ClassLoader` |

##### `inflate` (`java.util.zip.Inflater`)

|    % | Samples | Callee    | Location                 |
| ---: | ------: | --------- | ------------------------ |
| 1.4% |       1 | `inflate` | `java.util.zip.Inflater` |

##### `LinearScan::do_linear_scan` (`<unknown>`)

|     % | Samples | Callee                                 | Location    |
| ----: | ------: | -------------------------------------- | ----------- |
| 28.8% |      19 | `LinearScan::allocate_registers`       | `<unknown>` |
| 25.8% |      17 | `LinearScan::assign_reg_num`           | `<unknown>` |
| 19.7% |      13 | `LinearScan::build_intervals`          | `<unknown>` |
|  7.6% |       5 | `LinearScan::compute_local_live_sets`  | `<unknown>` |
|  4.5% |       3 | `LinearScan::compute_global_live_sets` | `<unknown>` |

##### `GraphBuilder::iterate_bytecodes_for_block` (`<unknown>`)

|     % | Samples | Callee                        | Location    |
| ----: | ------: | ----------------------------- | ----------- |
| 83.3% |      50 | `GraphBuilder::invoke`        | `<unknown>` |
| 25.0% |      15 | `GraphBuilder::access_field`  | `<unknown>` |
|  5.0% |       3 | `GraphBuilder::new_instance`  | `<unknown>` |
|  1.7% |       1 | `GraphBuilder::method_return` | `<unknown>` |
|  1.7% |       1 | `ValueStack::push`            | `<unknown>` |

##### `GraphBuilder::iterate_all_blocks` (`<unknown>`)

|      % | Samples | Callee                                      | Location    |
| -----: | ------: | ------------------------------------------- | ----------- |
| 100.0% |      59 | `GraphBuilder::iterate_bytecodes_for_block` | `<unknown>` |

##### `PhaseIterGVN::optimize` (`<unknown>`)

|     % | Samples | Callee                        | Location    |
| ----: | ------: | ----------------------------- | ----------- |
| 94.8% |      55 | `PhaseIterGVN::transform_old` | `<unknown>` |
|  1.7% |       1 | `ProjNode::hash`              | `<unknown>` |
|  1.7% |       1 | `ConNode::hash`               | `<unknown>` |

##### `resumeWith` (`kotlin.coroutines.jvm.internal.BaseContinuationImpl`)

|     % | Samples | Callee          | Location                                                                                 |
| ----: | ------: | --------------- | ---------------------------------------------------------------------------------------- |
| 69.1% |      38 | `invokeSuspend` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask$processLevel$6`    |
| 52.7% |      29 | `invokeSuspend` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner$processCandidate$1` |
| 12.7% |       7 | `invokeSuspend` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver$enqueueResolutionTasks$2` |
|  5.5% |       3 | `invokeSuspend` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver$enqueueResolutionTasks$4` |
|  3.6% |       2 | `invokeSuspend` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver$enqueueResolutionTasks$1` |

##### `getValue` (`kotlin.SafePublicationLazyImpl`)

|     % | Samples | Callee   | Location                                                                                                   |
| ----: | ------: | -------- | ---------------------------------------------------------------------------------------------------------- |
| 16.7% |       3 | `invoke` | `org.jetbrains.kotlin.fir.java.deserialization.JvmBinaryAnnotationDeserializer$$Lambda.0x00000070015d74a0` |
| 16.7% |       3 | `invoke` | `org.jetbrains.kotlin.fir.resolve.calls.ImplicitReceiverValue$$Lambda.0x0000007001655c20`                  |
|  5.6% |       1 | `invoke` | `org.jetbrains.kotlin.fir.resolve.calls.ImplicitReceiverValue$$Lambda.0x00000070016d06c0`                  |
|  5.6% |       1 | `invoke` | `org.jetbrains.kotlin.fir.java.enhancement.FirLazyJavaAnnotationList$$Lambda.0x000000700160df88`           |
|  5.6% |       1 | `invoke` | `org.jetbrains.kotlin.fir.java.FirLazyJavaDeclarationList$$Lambda.0x000000700160f098`                      |

##### `getValue` (`kotlin.UnsafeLazyImpl`)

|     % | Samples | Callee   | Location                                                                                                                                                   |
| ----: | ------: | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 78.6% |      11 | `invoke` | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver$$Lambda.0x0000007001688d28`                                                                        |
| 14.3% |       2 | `invoke` | `org.jetbrains.kotlin.fir.resolve.calls.candidate.Candidate$$Lambda.0x0000007001674000`                                                                    |
|  7.1% |       1 | `invoke` | `org.jetbrains.kotlin.load.java.structure.impl.classFiles.BinaryClassSignatureParser$$Lambda.0x000000700160b4b8`                                           |
|  7.1% |       1 | `invoke` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformer$BodyResolveTransformerComponents$$Lambda.0x0000007001595f20` |

##### `getValue` (`kotlin.SynchronizedLazyImpl`)

|     % | Samples | Callee   | Location                                                                                         |
| ----: | ------: | -------- | ------------------------------------------------------------------------------------------------ |
| 30.8% |       4 | `invoke` | `org.jetbrains.kotlin.fir.java.declarations.FirJavaClass$$Lambda.0x000000700160f940`             |
| 23.1% |       3 | `invoke` | `org.jetbrains.kotlin.builtins.DefaultBuiltIns$$Lambda.0x00000070017539f8`                       |
|  7.7% |       1 | `invoke` | `org.jetbrains.kotlin.diagnostics.KtDiagnosticFactoryToRendererMapKt$$Lambda.0x0000007001141e48` |
|  7.7% |       1 | `invoke` | `org.jetbrains.kotlin.backend.jvm.JvmSymbols$$Lambda.0x000000700180bb68`                         |
|  7.7% |       1 | `invoke` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x0000007001819420`                |

##### `copyOf` (`java.util.Arrays`)

|     % | Samples | Callee   | Location           |
| ----: | ------: | -------- | ------------------ |
| 33.3% |       1 | `copyOf` | `java.util.Arrays` |

##### `toByteArray` (`java.io.ByteArrayOutputStream`)

|     % | Samples | Callee   | Location           |
| ----: | ------: | -------- | ------------------ |
| 66.7% |       2 | `copyOf` | `java.util.Arrays` |

##### `areEqual` (`kotlin.jvm.internal.Intrinsics`)

|     % | Samples | Callee   | Location                                 |
| ----: | ------: | -------- | ---------------------------------------- |
| 33.3% |       1 | `equals` | `org.jetbrains.kotlin.name.FqNameUnsafe` |

##### `append` (`java.lang.StringBuilder`)

|     % | Samples | Callee   | Location                  |
| ----: | ------: | -------- | ------------------------- |
| 33.3% |       1 | `append` | `java.lang.StringBuilder` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame. `…` stands for frames the entry filter hides.

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ---: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 4.4% |      60 | `inflate` (`java.util.zip.Inflater`) ← … ← `read` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses` ← `run` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main`                                                                                                                                                                        |
| 1.6% |      22 | `PhaseChaitin::Split` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                     |
| 1.2% |      16 | `PhaseChaitin::build_ifg_physical` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                        |
| 1.1% |      15 | `ciEnv::register_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← … ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                               |
| 0.8% |      11 | `PhaseChaitin::gather_lrg_masks` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                          |
| 0.7% |      10 | `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                           |
| 0.7% |       9 | `PhaseLive::compute` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                      |
| 0.7% |       9 | `PhaseAggressiveCoalesce::insert_copies` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                  |
| 0.6% |       8 | `Compilation::build_hir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← … ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                          |
| 0.5% |       7 | `PhaseChaitin::post_allocate_copy_removal` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                |
| 0.5% |       7 | `CompileQueue::get` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                  |
| 0.5% |       7 | `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                             |
| 0.5% |       7 | `Compile::identify_useful_nodes` ← `PhaseRemoveUseless::PhaseRemoveUseless` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                         |
| 0.5% |       7 | `PhaseChaitin::elide_copy` ← `PhaseChaitin::post_allocate_copy_removal` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                   |
| 0.4% |       6 | `PhaseIdealLoop::build_loop_late` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                      |
| 0.4% |       6 | `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                       |
| 0.4% |       6 | `inflate` (`java.util.zip.Inflater`) ← … ← `read` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses` ← `preloadClasses` ← `run` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main`                                                                                                                                                     |
| 0.4% |       6 | `PhaseIdealLoop::build_loop_early` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                     |
| 0.4% |       6 | `DebugInformationRecorder::describe_scope` ← `LIR_Assembler::record_non_safepoint_debug_info` ← `LIR_Assembler::process_debug_info` ← `LIR_Assembler::emit_lir_list` ← `LIR_Assembler::emit_code` ← `Compilation::emit_code_body` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← … ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` |
| 0.4% |       6 | `Node_Backward_Iterator::next` ← `PhaseCFG::schedule_late` ← `PhaseCFG::global_code_motion` ← `PhaseCFG::do_global_code_motion` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                               |

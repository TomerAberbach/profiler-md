# Sampling profile

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

# Allocated native memory profile

Allocated 1.57 GiB over 625,321 samples (2.64 KiB per sample).

| Category |      % |     Size | Samples |
| -------- | -----: | -------: | ------: |
| native   | 100.0% | 1.57 GiB | 625,321 |

## Hottest functions

### Total size

Functions ranked by total native bytes allocated in the function and all its callees.

|     % |     Size | Samples | Function                                   | Location                                                |
| ----: | -------: | ------: | ------------------------------------------ | ------------------------------------------------------- |
| 87.0% | 1.37 GiB | 107,917 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib`                                          |
| 87.0% | 1.37 GiB | 107,661 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib`                                          |
| 85.7% | 1.35 GiB |  26,868 | `Compile::Compile`                         | `libjvm.dylib`                                          |
| 85.7% | 1.35 GiB |  26,868 | `C2Compiler::compile_method`               | `libjvm.dylib`                                          |
| 45.1% |  727 MiB |   8,863 | `Compile::Optimize`                        | `libjvm.dylib`                                          |
| 40.9% |  659 MiB |   7,461 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib`                                          |
| 40.5% |  653 MiB |   7,350 | `PhaseIdealLoop::PhaseIdealLoop`           | `libjvm.dylib`                                          |
| 40.5% |  653 MiB |   7,349 | `PhaseIdealLoop::build_and_optimize`       | `libjvm.dylib`                                          |
| 37.6% |  607 MiB |  15,069 | `Compile::Code_Gen`                        | `libjvm.dylib`                                          |
| 29.0% |  468 MiB |   4,789 | `PhaseChaitin::Register_Allocate`          | `libjvm.dylib`                                          |
| 28.6% |  461 MiB |   3,079 | `PhaseIdealLoop::Dominators`               | `libjvm.dylib`                                          |
| 20.7% |  333 MiB |   2,877 | `PhaseIFG::init`                           | `libjvm.dylib`                                          |
| 18.0% |  291 MiB |   3,038 | `Compile::optimize_loops`                  | `libjvm.dylib`                                          |
| 12.5% |  201 MiB | 478,530 | `main(String[])`                           | `org.jetbrains.kotlin.preloading.Preloader`             |
| 12.5% |  201 MiB | 478,528 | `run(String[])`                            | `org.jetbrains.kotlin.preloading.Preloader`             |
|  8.7% |  139 MiB |   3,071 | `Node_Array::grow`                         | `libjvm.dylib`                                          |
|  8.5% |  136 MiB | 474,117 | `invoke(Object, Object[])`                 | `java.lang.reflect.Method`                              |
|  8.5% |  136 MiB | 473,238 | `main(String[])`                           | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`  |
|  8.5% |  136 MiB | 473,238 | `main(String[])`                           | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
|  8.4% |  136 MiB | 472,270 | `doMain(CLICompiler, String[])`            | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                                         | Location       |
| -----: | -------: | ------: | ---------------------------------------------- | -------------- |
| 100.0% | 1.37 GiB | 107,661 | `CompileBroker::invoke_compiler_on_method`     | `libjvm.dylib` |
|  <0.1% |  129 KiB |     254 | `CompileBroker::possibly_add_compiler_threads` | `libjvm.dylib` |
|  <0.1% |   16 KiB |       2 | `CompileQueue::get`                            | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                          | Location       |
| ----: | -------: | ------: | ------------------------------- | -------------- |
| 98.5% | 1.35 GiB |  26,868 | `C2Compiler::compile_method`    | `libjvm.dylib` |
| <0.1% |  184 KiB |  12,589 | `CompilationLog::log_compile`   | `libjvm.dylib` |
| <0.1% | 33.9 KiB |       3 | `ciEnv::ciEnv`                  | `libjvm.dylib` |
| <0.1% |    544 B |       4 | `ciEnv::get_method_from_handle` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                   | Location       |
| ----: | -------: | ------: | ---------------------------------------- | -------------- |
| 52.7% |  727 MiB |   8,863 | `Compile::Optimize`                      | `libjvm.dylib` |
| 43.9% |  607 MiB |  15,069 | `Compile::Code_Gen`                      | `libjvm.dylib` |
|  0.8% | 11.4 MiB |     187 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |
|  0.2% | 2.88 MiB |      51 | `NodeHash::NodeHash`                     | `libjvm.dylib` |
|  0.1% | 1.09 MiB |      18 | `Compile::inline_string_calls`           | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|      % |     Size | Samples | Callee             | Location       |
| -----: | -------: | ------: | ------------------ | -------------- |
| 100.0% | 1.35 GiB |  26,868 | `Compile::Compile` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                 | Location       |
| ----: | -------: | ------: | -------------------------------------- | -------------- |
| 50.6% |  368 MiB |   4,423 | `PhaseIdealLoop::optimize`             | `libjvm.dylib` |
| 40.0% |  291 MiB |   3,038 | `Compile::optimize_loops`              | `libjvm.dylib` |
|  2.1% |   15 MiB |     356 | `PhaseCCP::do_transform`               | `libjvm.dylib` |
|  1.7% | 12.3 MiB |     218 | `PhaseIterGVN::optimize`               | `libjvm.dylib` |
|  1.6% |   12 MiB |     250 | `PhaseRenumberLive::PhaseRenumberLive` | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % |    Size | Samples | Callee                           | Location       |
| ----: | ------: | ------: | -------------------------------- | -------------- |
| 99.1% | 653 MiB |   7,350 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |
|  0.9% | 6.1 MiB |     111 | `PhaseIterGVN::optimize`         | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                               | Location       |
| -----: | ------: | ------: | ------------------------------------ | -------------- |
| 100.0% | 653 MiB |   7,349 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                 | Location       |
| ----: | -------: | ------: | -------------------------------------- | -------------- |
| 70.6% |  461 MiB |   3,079 | `PhaseIdealLoop::Dominators`           | `libjvm.dylib` |
|  6.9% | 45.4 MiB |   1,028 | `Node_Array::grow`                     | `libjvm.dylib` |
|  2.3% | 14.8 MiB |     321 | `PhaseIdealLoop::split_if_with_blocks` | `libjvm.dylib` |
|  1.0% | 6.75 MiB |     203 | `PhaseIdealLoop::build_loop_late`      | `libjvm.dylib` |
|  0.3% | 1.66 MiB |      48 | `PhaseIdealLoop::build_loop_tree`      | `libjvm.dylib` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                            | Location       |
| ----: | -------: | ------: | --------------------------------- | -------------- |
| 77.1% |  468 MiB |   4,789 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
| 18.4% |  112 MiB |   1,761 | `Matcher::match`                  | `libjvm.dylib` |
|  1.9% | 11.5 MiB |     227 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |
|  1.1% |  6.8 MiB |     481 | `PhaseOutput::Output`             | `libjvm.dylib` |
|  1.1% | 6.45 MiB |     131 | `PhaseCFG::PhaseCFG`              | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                     | Location       |
| ----: | -------: | ------: | ------------------------------------------ | -------------- |
| 71.2% |  333 MiB |   2,877 | `PhaseIFG::init`                           | `libjvm.dylib` |
| 24.6% |  115 MiB |   1,502 | `PhaseLive::compute`                       | `libjvm.dylib` |
|  2.1% | 9.61 MiB |     182 | `PhaseChaitin::Split`                      | `libjvm.dylib` |
|  0.6% | 2.87 MiB |      92 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |
|  0.5% | 2.53 MiB |      55 | `PhaseAggressiveCoalesce::insert_copies`   | `libjvm.dylib` |

##### `Compile::optimize_loops` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                     | Location       |
| -----: | ------: | ------: | -------------------------- | -------------- |
| 100.0% | 291 MiB |   3,038 | `PhaseIdealLoop::optimize` | `libjvm.dylib` |

##### `main(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

|      % |    Size | Samples | Callee                            | Location                                    |
| -----: | ------: | ------: | --------------------------------- | ------------------------------------------- |
| 100.0% | 201 MiB | 478,528 | `run(String[])`                   | `org.jetbrains.kotlin.preloading.Preloader` |
|  <0.1% |    32 B |       2 | `InterpreterRuntime::resolve_ldc` | `libjvm.dylib`                              |

##### `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

|     % |     Size | Samples | Callee                                                                       | Location                                                 |
| ----: | -------: | ------: | ---------------------------------------------------------------------------- | -------------------------------------------------------- |
| 67.7% |  136 MiB | 473,504 | `invoke(Object, Object[])`                                                   | `java.lang.reflect.Method`                               |
| 32.0% | 64.4 MiB |     695 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`   |
|  0.2% |  386 KiB |   2,008 | `getMethod(String, Class[])`                                                 | `java.lang.Class`                                        |
|  0.1% |  136 KiB |     651 | `loadClass(String)`                                                          | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |
| <0.1% | 52.3 KiB |     751 | `stream()`                                                                   | `java.util.Collection`                                   |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

|     % | Size | Samples | Callee                 | Location    |
| ----: | ---: | ------: | ---------------------- | ----------- |
| <0.1% | 32 B |       1 | `resolve_virtual_call` | `<unknown>` |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`)

|     % |     Size | Samples | Callee                                   | Location                                                 |
| ----: | -------: | ------: | ---------------------------------------- | -------------------------------------------------------- |
| 99.6% |  136 MiB | 472,270 | `doMain(CLICompiler, String[])`          | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`  |
|  0.4% |  502 KiB |     818 | `<init>()`                               | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`             |
| <0.1% | 17.8 KiB |     103 | `loadClass(String)`                      | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |
| <0.1% |  2.6 KiB |      46 | `InterpreterRuntime::resolve_from_cache` | `libjvm.dylib`                                           |
| <0.1% |     16 B |       1 | `InterpreterRuntime::resolve_ldc`        | `libjvm.dylib`                                           |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % |    Size | Samples | Callee           | Location                                               |
| -----: | ------: | ------: | ---------------- | ------------------------------------------------------ |
| 100.0% | 136 MiB | 473,238 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion` |

##### `doMain(CLICompiler, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|     % |     Size | Samples | Callee                                                                                             | Location                                                   |
| ----: | -------: | ------: | -------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| 99.8% |  135 MiB | 470,215 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`    |
|  0.2% |  222 KiB |   1,167 | `setupIdeaStandaloneExecution()`                                                                   | `org.jetbrains.kotlin.cli.jvm.compiler.CompatKt`           |
| <0.1% | 56.8 KiB |     398 | `<clinit>()`                                                                                       | `org.jetbrains.kotlin.cli.common.CompilerSystemProperties` |
| <0.1% | 39.3 KiB |     312 | `getValue()`                                                                                       | `org.jetbrains.kotlin.cli.common.CompilerSystemProperties` |
| <0.1% | 19.1 KiB |     109 | `loadClass(String)`                                                                                | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader`   |

## Hottest call stacks

Call stacks ranked by native bytes allocated in their leaf frame. `…` stands for frames the entry filter hides.

|     % |     Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ----: | -------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 20.7% |  333 MiB |   2,877 | `PhaseIFG::init` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                             |
| 15.8% |  255 MiB |   1,786 | `PhaseIdealLoop::Dominators` (`libjvm.dylib`) ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                              |
| 12.8% |  206 MiB |   1,293 | `PhaseIdealLoop::Dominators` (`libjvm.dylib`) ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                  |
|  7.1% |  115 MiB |   1,496 | `PhaseLive::compute` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                         |
|  3.4% |   55 MiB |     111 | `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`) ← … ← `read(byte[])` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                           |
|  2.4% | 39.1 MiB |     413 | `Matcher::xform` (`libjvm.dylib`) ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                              |
|  2.4% |   38 MiB |     846 | `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`) ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                             |
|  2.3% | 37.3 MiB |     745 | `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`) ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                 |
|  1.9% | 30.1 MiB |     407 | `Matcher::find_shared` (`libjvm.dylib`) ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                        |
|  1.5% |   25 MiB |     605 | `Node_Array::grow` (`libjvm.dylib`) ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                        |
|  1.3% | 20.4 MiB |     423 | `Node_Array::grow` (`libjvm.dylib`) ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                            |
|  0.9% | 14.7 MiB |     348 | `Node_Array::grow` (`libjvm.dylib`) ← `PhaseCCP::transform` ← `PhaseCCP::do_transform` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                            |
|  0.7% | 11.8 MiB |     266 | `Node_Array::grow` (`libjvm.dylib`) ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                            |
|  0.7% | 11.3 MiB |     185 | `Node_Array::grow` (`libjvm.dylib`) ← `Compile::identify_useful_nodes` ← `PhaseRemoveUseless::PhaseRemoveUseless` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                       |
|  0.6% | 9.94 MiB |     233 | `Node_Array::grow` (`libjvm.dylib`) ← `Matcher::ReduceInst` ← `Matcher::match_tree` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                         |
|  0.6% | 9.38 MiB |     157 | `NodeHash::hash_find_insert` (`libjvm.dylib`) ← `PhaseIterGVN::transform_old` ← `PhaseIterGVN::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                          |
|  0.6% | 9.16 MiB |     142 | `Node::out_grow` (`libjvm.dylib`) ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                           |
|  0.5% | 7.31 MiB |     168 | `PhaseIdealLoop::set_idom` (`libjvm.dylib`) ← `PhaseIdealLoop::split_thru_region` ← `PhaseIdealLoop::do_split_if` ← `PhaseIdealLoop::split_if_with_blocks` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` |
|  0.4% | 7.08 MiB |  40,540 | `ciEnv::register_method` (`libjvm.dylib`) ← `Compilation::compile_method` ← `Compilation::Compilation` ← … ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                  |
|  0.4% | 6.81 MiB |     144 | `PhaseRenumberLive::PhaseRenumberLive` (`libjvm.dylib`) ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                           |

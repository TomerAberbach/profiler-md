# Allocated native memory profile

Allocated 1.56 GiB over 617,888 samples (2.64 KiB per sample).

| Category |      % |     Size | Samples |
| -------- | -----: | -------: | ------: |
| native   | 100.0% | 1.56 GiB | 617,888 |

## Hottest functions

### Total size

Functions ranked by total native bytes allocated in the function and all its callees.

|     % |     Size | Samples | Function                                   | Location                                                |
| ----: | -------: | ------: | ------------------------------------------ | ------------------------------------------------------- |
| 86.8% | 1.35 GiB | 107,222 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib`                                          |
| 86.8% | 1.35 GiB | 106,942 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib`                                          |
| 85.1% | 1.32 GiB |  26,681 | `Compile::Compile`                         | `libjvm.dylib`                                          |
| 85.1% | 1.32 GiB |  26,681 | `C2Compiler::compile_method`               | `libjvm.dylib`                                          |
| 44.6% |  710 MiB |   8,774 | `Compile::Optimize`                        | `libjvm.dylib`                                          |
| 40.4% |  644 MiB |   7,367 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib`                                          |
| 40.0% |  638 MiB |   7,256 | `PhaseIdealLoop::build_and_optimize`       | `libjvm.dylib`                                          |
| 40.0% |  638 MiB |   7,256 | `PhaseIdealLoop::PhaseIdealLoop`           | `libjvm.dylib`                                          |
| 37.5% |  597 MiB |  14,961 | `Compile::Code_Gen`                        | `libjvm.dylib`                                          |
| 28.8% |  459 MiB |   4,736 | `PhaseChaitin::Register_Allocate`          | `libjvm.dylib`                                          |
| 28.4% |  452 MiB |   3,016 | `PhaseIdealLoop::Dominators`               | `libjvm.dylib`                                          |
| 20.5% |  327 MiB |   2,837 | `PhaseIFG::init`                           | `libjvm.dylib`                                          |
| 18.2% |  290 MiB |   3,082 | `Compile::optimize_loops`                  | `libjvm.dylib`                                          |
| 12.7% |  202 MiB | 478,686 | `main(String[])`                           | `org.jetbrains.kotlin.preloading.Preloader`             |
| 12.7% |  202 MiB | 478,684 | `run(String[])`                            | `org.jetbrains.kotlin.preloading.Preloader`             |
|  8.6% |  137 MiB | 474,272 | `invoke(Object, Object[])`                 | `java.lang.reflect.Method`                              |
|  8.6% |  137 MiB |   3,056 | `Node_Array::grow`                         | `libjvm.dylib`                                          |
|  8.6% |  137 MiB | 473,397 | `main(String[])`                           | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`  |
|  8.6% |  137 MiB | 473,397 | `main(String[])`                           | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
|  8.6% |  136 MiB | 472,440 | `doMain(CLICompiler, String[])`            | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                                         | Location       |
| -----: | -------: | ------: | ---------------------------------------------- | -------------- |
| 100.0% | 1.35 GiB | 106,942 | `CompileBroker::invoke_compiler_on_method`     | `libjvm.dylib` |
|  <0.1% |  141 KiB |     278 | `CompileBroker::possibly_add_compiler_threads` | `libjvm.dylib` |
|  <0.1% |   16 KiB |       2 | `CompileQueue::get`                            | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                          | Location       |
| ----: | -------: | ------: | ------------------------------- | -------------- |
| 98.0% | 1.32 GiB |  26,681 | `C2Compiler::compile_method`    | `libjvm.dylib` |
| <0.1% |  227 KiB |      10 | `ciEnv::ciEnv`                  | `libjvm.dylib` |
| <0.1% |  182 KiB |  12,499 | `CompilationLog::log_compile`   | `libjvm.dylib` |
| <0.1% |    408 B |       3 | `ciEnv::get_method_from_handle` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                   | Location       |
| ----: | -------: | ------: | ---------------------------------------- | -------------- |
| 52.4% |  710 MiB |   8,774 | `Compile::Optimize`                      | `libjvm.dylib` |
| 44.1% |  597 MiB |  14,961 | `Compile::Code_Gen`                      | `libjvm.dylib` |
|  0.8% | 10.9 MiB |     182 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |
|  0.2% | 2.81 MiB |      50 | `NodeHash::NodeHash`                     | `libjvm.dylib` |
|  0.1% | 1.09 MiB |      18 | `Compile::inline_string_calls`           | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|      % |     Size | Samples | Callee             | Location       |
| -----: | -------: | ------: | ------------------ | -------------- |
| 100.0% | 1.32 GiB |  26,681 | `Compile::Compile` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                 | Location       |
| ----: | -------: | ------: | -------------------------------------- | -------------- |
| 49.9% |  354 MiB |   4,285 | `PhaseIdealLoop::optimize`             | `libjvm.dylib` |
| 40.8% |  290 MiB |   3,082 | `Compile::optimize_loops`              | `libjvm.dylib` |
|  2.0% | 14.5 MiB |     352 | `PhaseCCP::do_transform`               | `libjvm.dylib` |
|  1.6% | 11.7 MiB |     247 | `PhaseRenumberLive::PhaseRenumberLive` | `libjvm.dylib` |
|  1.6% | 11.1 MiB |     208 | `PhaseIterGVN::optimize`               | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                           | Location       |
| ----: | -------: | ------: | -------------------------------- | -------------- |
| 99.1% |  638 MiB |   7,256 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |
|  0.9% | 6.11 MiB |     111 | `PhaseIterGVN::optimize`         | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                 | Location       |
| ----: | -------: | ------: | -------------------------------------- | -------------- |
| 70.8% |  452 MiB |   3,016 | `PhaseIdealLoop::Dominators`           | `libjvm.dylib` |
|  7.1% | 45.4 MiB |   1,059 | `Node_Array::grow`                     | `libjvm.dylib` |
|  2.4% |   15 MiB |     320 | `PhaseIdealLoop::split_if_with_blocks` | `libjvm.dylib` |
|  1.1% | 7.06 MiB |     209 | `PhaseIdealLoop::build_loop_late`      | `libjvm.dylib` |
|  0.2% | 1.19 MiB |      34 | `PhaseIdealLoop::build_loop_tree`      | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                               | Location       |
| -----: | ------: | ------: | ------------------------------------ | -------------- |
| 100.0% | 638 MiB |   7,256 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                            | Location       |
| ----: | -------: | ------: | --------------------------------- | -------------- |
| 76.8% |  459 MiB |   4,736 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
| 18.5% |  110 MiB |   1,802 | `Matcher::match`                  | `libjvm.dylib` |
|  1.8% |   11 MiB |     219 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |
|  1.4% | 8.32 MiB |     524 | `PhaseOutput::Output`             | `libjvm.dylib` |
|  1.1% | 6.32 MiB |     128 | `PhaseCFG::PhaseCFG`              | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                     | Location       |
| ----: | -------: | ------: | ------------------------------------------ | -------------- |
| 71.3% |  327 MiB |   2,837 | `PhaseIFG::init`                           | `libjvm.dylib` |
| 24.8% |  114 MiB |   1,507 | `PhaseLive::compute`                       | `libjvm.dylib` |
|  1.7% | 7.94 MiB |     173 | `PhaseChaitin::Split`                      | `libjvm.dylib` |
|  0.6% | 2.69 MiB |      57 | `PhaseAggressiveCoalesce::insert_copies`   | `libjvm.dylib` |
|  0.5% | 2.31 MiB |      74 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |

##### `PhaseIdealLoop::Dominators` (`libjvm.dylib`)

|     % |   Size | Samples | Callee         | Location       |
| ----: | -----: | ------: | -------------- | -------------- |
| <0.1% | 64 KiB |       2 | `NTarjan::DFS` | `libjvm.dylib` |

##### `Compile::optimize_loops` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                     | Location       |
| -----: | ------: | ------: | -------------------------- | -------------- |
| 100.0% | 290 MiB |   3,082 | `PhaseIdealLoop::optimize` | `libjvm.dylib` |

##### `main(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

|      % |    Size | Samples | Callee                            | Location                                    |
| -----: | ------: | ------: | --------------------------------- | ------------------------------------------- |
| 100.0% | 202 MiB | 478,684 | `run(String[])`                   | `org.jetbrains.kotlin.preloading.Preloader` |
|  <0.1% |    32 B |       2 | `InterpreterRuntime::resolve_ldc` | `libjvm.dylib`                              |

##### `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

|     % |     Size | Samples | Callee                                                                       | Location                                                 |
| ----: | -------: | ------: | ---------------------------------------------------------------------------- | -------------------------------------------------------- |
| 67.8% |  137 MiB | 473,661 | `invoke(Object, Object[])`                                                   | `java.lang.reflect.Method`                               |
| 31.9% | 64.4 MiB |     695 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`   |
|  0.2% |  386 KiB |   2,008 | `getMethod(String, Class[])`                                                 | `java.lang.Class`                                        |
|  0.1% |  136 KiB |     651 | `loadClass(String)`                                                          | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |
| <0.1% | 50.2 KiB |     749 | `stream()`                                                                   | `java.util.Collection`                                   |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

|     % | Size | Samples | Callee                 | Location    |
| ----: | ---: | ------: | ---------------------- | ----------- |
| <0.1% | 32 B |       1 | `resolve_virtual_call` | `<unknown>` |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`)

|     % |     Size | Samples | Callee                                   | Location                                                 |
| ----: | -------: | ------: | ---------------------------------------- | -------------------------------------------------------- |
| 99.6% |  136 MiB | 472,440 | `doMain(CLICompiler, String[])`          | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`  |
|  0.4% |  498 KiB |     807 | `<init>()`                               | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`             |
| <0.1% | 17.8 KiB |     103 | `loadClass(String)`                      | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |
| <0.1% |  2.6 KiB |      46 | `InterpreterRuntime::resolve_from_cache` | `libjvm.dylib`                                           |
| <0.1% |     16 B |       1 | `InterpreterRuntime::resolve_ldc`        | `libjvm.dylib`                                           |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % |    Size | Samples | Callee           | Location                                               |
| -----: | ------: | ------: | ---------------- | ------------------------------------------------------ |
| 100.0% | 137 MiB | 473,397 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion` |

##### `doMain(CLICompiler, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|     % |     Size | Samples | Callee                                                                                             | Location                                                   |
| ----: | -------: | ------: | -------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| 99.8% |  136 MiB | 470,385 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`    |
|  0.2% |  222 KiB |   1,167 | `setupIdeaStandaloneExecution()`                                                                   | `org.jetbrains.kotlin.cli.jvm.compiler.CompatKt`           |
| <0.1% | 56.8 KiB |     398 | `<clinit>()`                                                                                       | `org.jetbrains.kotlin.cli.common.CompilerSystemProperties` |
| <0.1% | 39.3 KiB |     312 | `getValue()`                                                                                       | `org.jetbrains.kotlin.cli.common.CompilerSystemProperties` |
| <0.1% | 19.1 KiB |     109 | `loadClass(String)`                                                                                | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader`   |

## Hottest call stacks

Call stacks ranked by native bytes allocated in their leaf frame. `…` stands for frames the entry filter hides.

|     % |     Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ----: | -------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 20.5% |  327 MiB |   2,837 | `PhaseIFG::init` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                             |
| 15.5% |  247 MiB |   1,730 | `PhaseIdealLoop::Dominators` (`libjvm.dylib`) ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                              |
| 12.9% |  205 MiB |   1,284 | `PhaseIdealLoop::Dominators` (`libjvm.dylib`) ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                  |
|  7.1% |  113 MiB |   1,482 | `PhaseLive::compute` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                         |
|  3.5% |   55 MiB |     111 | `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`) ← … ← `read(byte[])` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                           |
|  2.4% | 37.9 MiB |     400 | `Matcher::xform` (`libjvm.dylib`) ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                              |
|  2.3% | 36.7 MiB |     762 | `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`) ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                 |
|  2.3% | 36.6 MiB |     845 | `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`) ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                             |
|  1.8% | 29.4 MiB |     405 | `Matcher::find_shared` (`libjvm.dylib`) ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                        |
|  1.5% | 24.7 MiB |     614 | `Node_Array::grow` (`libjvm.dylib`) ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                        |
|  1.3% | 20.8 MiB |     445 | `Node_Array::grow` (`libjvm.dylib`) ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                            |
|  0.9% | 14.3 MiB |     344 | `Node_Array::grow` (`libjvm.dylib`) ← `PhaseCCP::transform` ← `PhaseCCP::do_transform` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                            |
|  0.7% | 11.5 MiB |     258 | `Node_Array::grow` (`libjvm.dylib`) ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                            |
|  0.7% | 10.8 MiB |     180 | `Node_Array::grow` (`libjvm.dylib`) ← `Compile::identify_useful_nodes` ← `PhaseRemoveUseless::PhaseRemoveUseless` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                       |
|  0.6% | 9.69 MiB |     228 | `Node_Array::grow` (`libjvm.dylib`) ← `Matcher::ReduceInst` ← `Matcher::match_tree` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                         |
|  0.5% | 8.69 MiB |     154 | `NodeHash::hash_find_insert` (`libjvm.dylib`) ← `PhaseIterGVN::transform_old` ← `PhaseIterGVN::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                          |
|  0.5% | 7.75 MiB |     127 | `Node::out_grow` (`libjvm.dylib`) ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                           |
|  0.5% | 7.24 MiB |  40,409 | `ciEnv::register_method` (`libjvm.dylib`) ← `Compilation::compile_method` ← `Compilation::Compilation` ← … ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                  |
|  0.4% | 6.56 MiB |     157 | `PhaseIdealLoop::set_idom` (`libjvm.dylib`) ← `PhaseIdealLoop::split_thru_region` ← `PhaseIdealLoop::do_split_if` ← `PhaseIdealLoop::split_if_with_blocks` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` |
|  0.4% | 6.56 MiB |     140 | `PhaseRenumberLive::PhaseRenumberLive` (`libjvm.dylib`) ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                           |

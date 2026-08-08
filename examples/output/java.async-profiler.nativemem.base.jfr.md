# Allocated native memory profile

Allocated 243 MiB over 84,474 samples (2.95 KiB per sample).

| Category |      % |    Size | Samples |
| -------- | -----: | ------: | ------: |
| native   | 100.0% | 243 MiB |  84,474 |

## Hottest functions

### Total size

Functions ranked by total native bytes allocated in the function and all its callees.

|     % |     Size | Samples | Function                                                    | Location                                    |
| ----: | -------: | ------: | ----------------------------------------------------------- | ------------------------------------------- |
| 47.0% |  114 MiB |  10,139 | `CompileBroker::compiler_thread_loop`                       | `libjvm.dylib`                              |
| 46.9% |  114 MiB |  10,091 | `CompileBroker::invoke_compiler_on_method`                  | `libjvm.dylib`                              |
| 46.1% |  112 MiB |   2,563 | `Compile::Compile`                                          | `libjvm.dylib`                              |
| 46.1% |  112 MiB |   2,563 | `C2Compiler::compile_method`                                | `libjvm.dylib`                              |
| 27.0% | 65.8 MiB |     957 | `Compile::Optimize`                                         | `libjvm.dylib`                              |
| 26.0% | 63.2 MiB |     870 | `PhaseIdealLoop::optimize`                                  | `libjvm.dylib`                              |
| 25.8% | 62.8 MiB |     855 | `PhaseIdealLoop::build_and_optimize`                        | `libjvm.dylib`                              |
| 25.8% | 62.8 MiB |     855 | `PhaseIdealLoop::PhaseIdealLoop`                            | `libjvm.dylib`                              |
| 21.0% | 51.1 MiB |     482 | `PhaseIdealLoop::Dominators`                                | `libjvm.dylib`                              |
| 17.2% | 41.9 MiB |   1,198 | `Compile::Code_Gen`                                         | `libjvm.dylib`                              |
| 13.6% | 33.2 MiB |     480 | `PhaseChaitin::Register_Allocate`                           | `libjvm.dylib`                              |
| 11.4% | 27.7 MiB |     354 | `Compile::optimize_loops`                                   | `libjvm.dylib`                              |
| 10.9% | 26.6 MiB |     321 | `PhaseIFG::init`                                            | `libjvm.dylib`                              |
|  4.5% |   11 MiB |  37,403 | `launchHarnessClass(String, String[])`                      | `org.renaissance.core.Launcher`             |
|  4.5% |   11 MiB |  37,403 | `main(String[])`                                            | `org.renaissance.core.Launcher`             |
|  4.4% | 10.7 MiB |  34,080 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher`             |
|  4.3% | 10.5 MiB |  32,957 | `invoke(Object, Object[])`                                  | `java.lang.reflect.Method`                  |
|  4.3% | 10.5 MiB |  32,792 | `main(String[])`                                            | `org.renaissance.harness.RenaissanceSuite`  |
|  4.0% | 9.68 MiB |  25,523 | `loadClass(String)`                                         | `java.lang.ClassLoader`                     |
|  3.9% |  9.4 MiB |  29,499 | `main(String[])`                                            | `org.renaissance.harness.RenaissanceSuite$` |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                                         | Location       |
| -----: | -------: | ------: | ---------------------------------------------- | -------------- |
| 100.0% |  114 MiB |  10,091 | `CompileBroker::invoke_compiler_on_method`     | `libjvm.dylib` |
|  <0.1% | 24.6 KiB |      48 | `CompileBroker::possibly_add_compiler_threads` | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                        | Location       |
| ----: | -------: | ------: | ----------------------------- | -------------- |
| 98.2% |  112 MiB |   2,563 | `C2Compiler::compile_method`  | `libjvm.dylib` |
| <0.1% | 14.8 KiB |   1,382 | `CompilationLog::log_compile` | `libjvm.dylib` |
| <0.1% | 1.95 KiB |       2 | `ciEnv::ciEnv`                | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                   | Location       |
| ----: | -------: | ------: | ---------------------------------------- | -------------- |
| 58.6% | 65.8 MiB |     957 | `Compile::Optimize`                      | `libjvm.dylib` |
| 37.3% | 41.9 MiB |   1,198 | `Compile::Code_Gen`                      | `libjvm.dylib` |
|  0.5% |  544 KiB |      14 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |
|  0.3% |  320 KiB |      10 | `NodeHash::NodeHash`                     | `libjvm.dylib` |
|  0.1% |   64 KiB |       2 | `Compile::Init`                          | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|      % |    Size | Samples | Callee             | Location       |
| -----: | ------: | ------: | ------------------ | -------------- |
| 100.0% | 112 MiB |   2,563 | `Compile::Compile` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                 | Location       |
| ----: | -------: | ------: | -------------------------------------- | -------------- |
| 54.0% | 35.5 MiB |     516 | `PhaseIdealLoop::optimize`             | `libjvm.dylib` |
| 42.1% | 27.7 MiB |     354 | `Compile::optimize_loops`              | `libjvm.dylib` |
|  1.0% |  640 KiB |      20 | `PhaseCCP::do_transform`               | `libjvm.dylib` |
|  0.9% |  576 KiB |      15 | `PhaseIterGVN::optimize`               | `libjvm.dylib` |
|  0.8% |  512 KiB |      14 | `PhaseMacroExpand::expand_macro_nodes` | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                           | Location       |
| ----: | -------: | ------: | -------------------------------- | -------------- |
| 99.3% | 62.8 MiB |     855 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |
|  0.7% |  480 KiB |      15 | `PhaseIterGVN::optimize`         | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                    | Location       |
| ----: | -------: | ------: | ----------------------------------------- | -------------- |
| 81.4% | 51.1 MiB |     482 | `PhaseIdealLoop::Dominators`              | `libjvm.dylib` |
|  5.6% | 3.53 MiB |     113 | `Node_Array::grow`                        | `libjvm.dylib` |
|  1.4% |  896 KiB |      28 | `PhaseIdealLoop::split_if_with_blocks`    | `libjvm.dylib` |
|  0.9% |  608 KiB |      19 | `PhaseIdealLoop::build_loop_late`         | `libjvm.dylib` |
| <0.1% |   32 KiB |       1 | `PhaseIterGVN::remove_globally_dead_node` | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                               | Location       |
| -----: | -------: | ------: | ------------------------------------ | -------------- |
| 100.0% | 62.8 MiB |     855 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                            | Location       |
| ----: | -------: | ------: | --------------------------------- | -------------- |
| 79.2% | 33.2 MiB |     480 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
| 20.0% | 8.36 MiB |     198 | `Matcher::match`                  | `libjvm.dylib` |
|  0.3% |  128 KiB |       4 | `PhaseCFG::PhaseCFG`              | `libjvm.dylib` |
|  0.2% | 75.1 KiB |       2 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |
|  0.2% |   66 KiB |      45 | `PhaseOutput::Output`             | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                           | Location       |
| ----: | -------: | ------: | ------------------------------------------------ | -------------- |
| 80.1% | 26.6 MiB |     321 | `PhaseIFG::init`                                 | `libjvm.dylib` |
| 17.2% | 5.71 MiB |     132 | `PhaseLive::compute`                             | `libjvm.dylib` |
|  2.3% |  768 KiB |      22 | `PhaseChaitin::Split`                            | `libjvm.dylib` |
|  0.2% |   64 KiB |       2 | `PhaseChaitin::post_allocate_copy_removal`       | `libjvm.dylib` |
|  0.1% |   32 KiB |       1 | `PhaseChaitin::stretch_base_pointer_live_ranges` | `libjvm.dylib` |

##### `Compile::optimize_loops` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                     | Location       |
| -----: | -------: | ------: | -------------------------- | -------------- |
| 100.0% | 27.7 MiB |     354 | `PhaseIdealLoop::optimize` | `libjvm.dylib` |

##### `launchHarnessClass(String, String[])` (`org.renaissance.core.Launcher`)

|     % |     Size | Samples | Callee                                                      | Location                            |
| ----: | -------: | ------: | ----------------------------------------------------------- | ----------------------------------- |
| 98.0% | 10.7 MiB |  34,080 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher`     |
|  1.0% |  112 KiB |   2,488 | `createScratchRoot(Path, boolean)`                          | `org.renaissance.core.Launcher`     |
|  0.8% | 87.9 KiB |     588 | `create(Path, URI)`                                         | `org.renaissance.core.ModuleLoader` |
|  0.2% | 17.1 KiB |      96 | `loadClass(String)`                                         | `java.lang.ClassLoader`             |
| <0.1% | 5.42 KiB |      83 | `getScratchBase(String[])`                                  | `org.renaissance.core.Launcher`     |

##### `main(String[])` (`org.renaissance.core.Launcher`)

|      % |   Size | Samples | Callee                                 | Location                        |
| -----: | -----: | ------: | -------------------------------------- | ------------------------------- |
| 100.0% | 11 MiB |  37,403 | `launchHarnessClass(String, String[])` | `org.renaissance.core.Launcher` |

##### `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`)

|     % |     Size | Samples | Callee                                   | Location                            |
| ----: | -------: | ------: | ---------------------------------------- | ----------------------------------- |
| 97.6% | 10.5 MiB |  32,876 | `invoke(Object, Object[])`               | `java.lang.reflect.Method`          |
|  1.9% |  211 KiB |   1,059 | `createClassLoaderForModule(String)`     | `org.renaissance.core.ModuleLoader` |
|  0.4% | 47.9 KiB |     131 | `loadClass(String)`                      | `java.lang.ClassLoader`             |
| <0.1% |    248 B |       8 | `InterpreterRuntime::resolve_from_cache` | `libjvm.dylib`                      |
| <0.1% |    160 B |       6 | `getMethod(String, Class[])`             | `java.lang.Class`                   |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite`)

|     % |     Size | Samples | Callee                                   | Location                                    |
| ----: | -------: | ------: | ---------------------------------------- | ------------------------------------------- |
| 89.8% |  9.4 MiB |  29,499 | `main(String[])`                         | `org.renaissance.harness.RenaissanceSuite$` |
| 10.2% | 1.07 MiB |   3,259 | `loadClass(String)`                      | `java.lang.ClassLoader`                     |
| <0.1% |  2.3 KiB |      34 | `InterpreterRuntime::resolve_from_cache` | `libjvm.dylib`                              |

##### `loadClass(String)` (`java.lang.ClassLoader`)

|     % |  Size | Samples | Callee                 | Location    |
| ----: | ----: | ------: | ---------------------- | ----------- |
| <0.1% | 164 B |       5 | `ic_miss_stub`         | `<unknown>` |
| <0.1% |  32 B |       1 | `resolve_virtual_call` | `<unknown>` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

|     % |     Size | Samples | Callee                                                                        | Location                                    |
| ----: | -------: | ------: | ----------------------------------------------------------------------------- | ------------------------------------------- |
| 31.8% | 2.99 MiB |   6,645 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` | `org.renaissance.harness.RenaissanceSuite$` |
| 20.5% | 1.93 MiB |   6,131 | `<clinit>()`                                                                  | `scala.Predef$`                             |
| 11.0% | 1.03 MiB |   3,337 | `loadClass(String)`                                                           | `java.lang.ClassLoader`                     |
| 10.6% | 1022 KiB |   3,663 | `parse(String[])`                                                             | `org.renaissance.harness.ConfigParser`      |
|  9.8% |  944 KiB |   4,186 | `<init>(Map)`                                                                 | `org.renaissance.harness.ConfigParser`      |

## Hottest call stacks

Call stacks ranked by native bytes allocated in their leaf frame. `…` stands for frames the entry filter hides.

|     % |     Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ----: | -------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 11.3% | 27.5 MiB |     260 | `PhaseIdealLoop::Dominators` (`libjvm.dylib`) ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 10.9% | 26.6 MiB |     321 | `PhaseIFG::init` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  9.7% | 23.6 MiB |     222 | `PhaseIdealLoop::Dominators` (`libjvm.dylib`) ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  2.3% | 5.68 MiB |     131 | `PhaseLive::compute` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  1.3% | 3.08 MiB |      51 | `Matcher::xform` (`libjvm.dylib`) ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  1.0% | 2.38 MiB |      76 | `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`) ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  0.8% | 2.06 MiB |      66 | `Node_Array::grow` (`libjvm.dylib`) ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  0.7% | 1.72 MiB |      37 | `Matcher::find_shared` (`libjvm.dylib`) ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  0.7% | 1.59 MiB |      51 | `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`) ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  0.6% | 1.47 MiB |      47 | `Node_Array::grow` (`libjvm.dylib`) ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  0.5% | 1.28 MiB |   3,425 | `loadClass(String)` (`java.lang.ClassLoader`) ← … ← `<clinit>()` (`scala.Predef$`) ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← … ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  0.4% | 1.04 MiB |   1,589 | `loadClass(String)` (`java.lang.ClassLoader`) ← … ← `<clinit>()` (`scala.Predef$`) ← `run(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeOperation(int)` (`org.renaissance.harness.ExecutionDriver`) ← `executeBenchmark()` ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000b80111efe0`) ← … ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← … ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])` |
|  0.4% |  896 KiB |      27 | `Node_Array::grow` (`libjvm.dylib`) ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  0.3% |  745 KiB |   2,385 | `loadClass(String)` (`java.lang.ClassLoader`) ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← … ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  0.3% |  736 KiB |      22 | `Node_Array::grow` (`libjvm.dylib`) ← `Matcher::ReduceInst` ← `Matcher::match_tree` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  0.3% |  727 KiB |   1,122 | `loadClass(String)` (`java.lang.ClassLoader`) ← … ← `apply(Seq)` (`scala.collection.immutable.Map$`) ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← … ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  0.3% |  672 KiB |      21 | `Matcher::Label_Root` (`libjvm.dylib`) ← `Matcher::Label_Root` ← `Matcher::match_tree` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  0.3% |  640 KiB |      20 | `Node_Array::grow` (`libjvm.dylib`) ← `PhaseCCP::transform` ← `PhaseCCP::do_transform` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  0.2% |  504 KiB |   1,292 | `loadClass(String)` (`java.lang.ClassLoader`) ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← … ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  0.2% |  480 KiB |      12 | `Node_Array::grow` (`libjvm.dylib`) ← `Compile::identify_useful_nodes` ← `PhaseRemoveUseless::PhaseRemoveUseless` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

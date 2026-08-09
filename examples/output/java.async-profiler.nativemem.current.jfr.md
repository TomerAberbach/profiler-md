# Allocated native memory profile

Allocated 246 MiB over 82,688 samples (3.04 KiB per sample).

| Category |      % |    Size | Samples |
| -------- | -----: | ------: | ------: |
| Native   | 100.0% | 246 MiB |  82,688 |

## Hottest functions

### Total size

Functions ranked by total native bytes allocated in the function and all its callees.

|     % |     Size | Samples | Function                                                    | Location                                    |
| ----: | -------: | ------: | ----------------------------------------------------------- | ------------------------------------------- |
| 47.3% |  116 MiB |  10,128 | `CompileBroker::compiler_thread_loop`                       | `libjvm.dylib`                              |
| 47.3% |  116 MiB |  10,080 | `CompileBroker::invoke_compiler_on_method`                  | `libjvm.dylib`                              |
| 46.6% |  115 MiB |   2,569 | `Compile::Compile`                                          | `libjvm.dylib`                              |
| 46.6% |  115 MiB |   2,569 | `C2Compiler::compile_method`                                | `libjvm.dylib`                              |
| 27.0% | 66.4 MiB |     940 | `Compile::Optimize`                                         | `libjvm.dylib`                              |
| 26.0% | 63.9 MiB |     860 | `PhaseIdealLoop::optimize`                                  | `libjvm.dylib`                              |
| 25.8% | 63.4 MiB |     844 | `PhaseIdealLoop::build_and_optimize`                        | `libjvm.dylib`                              |
| 25.8% | 63.4 MiB |     844 | `PhaseIdealLoop::PhaseIdealLoop`                            | `libjvm.dylib`                              |
| 21.3% | 52.3 MiB |     506 | `PhaseIdealLoop::Dominators`                                | `libjvm.dylib`                              |
| 17.6% | 43.2 MiB |   1,210 | `Compile::Code_Gen`                                         | `libjvm.dylib`                              |
| 14.0% | 34.5 MiB |     504 | `PhaseChaitin::Register_Allocate`                           | `libjvm.dylib`                              |
| 11.6% | 28.6 MiB |     365 | `Compile::optimize_loops`                                   | `libjvm.dylib`                              |
| 11.2% | 27.6 MiB |     333 | `PhaseIFG::init`                                            | `libjvm.dylib`                              |
|  4.5% |   11 MiB |  37,426 | `launchHarnessClass(String, String[])`                      | `org.renaissance.core.Launcher`             |
|  4.5% |   11 MiB |  37,426 | `main(String[])`                                            | `org.renaissance.core.Launcher`             |
|  4.4% | 10.8 MiB |  34,102 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher`             |
|  4.3% | 10.5 MiB |  32,954 | `invoke(Object, Object[])`                                  | `java.lang.reflect.Method`                  |
|  4.3% | 10.5 MiB |  32,791 | `main(String[])`                                            | `org.renaissance.harness.RenaissanceSuite`  |
|  3.9% | 9.68 MiB |  25,503 | `loadClass(String)`                                         | `java.lang.ClassLoader`                     |
|  3.8% | 9.44 MiB |  29,499 | `main(String[])`                                            | `org.renaissance.harness.RenaissanceSuite$` |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                                         | Location       |
| -----: | -------: | ------: | ---------------------------------------------- | -------------- |
| 100.0% |  116 MiB |  10,080 | `CompileBroker::invoke_compiler_on_method`     | `libjvm.dylib` |
|  <0.1% | 24.6 KiB |      48 | `CompileBroker::possibly_add_compiler_threads` | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                        | Location       |
| ----: | -------: | ------: | ----------------------------- | -------------- |
| 98.5% |  115 MiB |   2,569 | `C2Compiler::compile_method`  | `libjvm.dylib` |
| <0.1% | 14.9 KiB |   1,383 | `CompilationLog::log_compile` | `libjvm.dylib` |
| <0.1% | 4.88 KiB |       5 | `ciEnv::ciEnv`                | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                   | Location       |
| ----: | -------: | ------: | ---------------------------------------- | -------------- |
| 57.9% | 66.4 MiB |     940 | `Compile::Optimize`                      | `libjvm.dylib` |
| 37.7% | 43.2 MiB |   1,210 | `Compile::Code_Gen`                      | `libjvm.dylib` |
|  0.5% |  576 KiB |      15 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |
|  0.3% |  352 KiB |      11 | `NodeHash::NodeHash`                     | `libjvm.dylib` |
|  0.1% |   64 KiB |       2 | `Compile::Init`                          | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|      % |    Size | Samples | Callee             | Location       |
| -----: | ------: | ------: | ------------------ | -------------- |
| 100.0% | 115 MiB |   2,569 | `Compile::Compile` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                 | Location       |
| ----: | -------: | ------: | -------------------------------------- | -------------- |
| 53.2% | 35.3 MiB |     495 | `PhaseIdealLoop::optimize`             | `libjvm.dylib` |
| 43.0% | 28.6 MiB |     365 | `Compile::optimize_loops`              | `libjvm.dylib` |
|  1.0% |  704 KiB |      21 | `PhaseCCP::do_transform`               | `libjvm.dylib` |
|  0.8% |  576 KiB |      15 | `PhaseIterGVN::optimize`               | `libjvm.dylib` |
|  0.6% |  384 KiB |      11 | `PhaseMacroExpand::expand_macro_nodes` | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                           | Location       |
| ----: | -------: | ------: | -------------------------------- | -------------- |
| 99.2% | 63.4 MiB |     844 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |
|  0.8% |  512 KiB |      16 | `PhaseIterGVN::optimize`         | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                         | Location       |
| ----: | -------: | ------: | ---------------------------------------------- | -------------- |
| 82.5% | 52.3 MiB |     506 | `PhaseIdealLoop::Dominators`                   | `libjvm.dylib` |
|  5.8% | 3.66 MiB |     111 | `Node_Array::grow`                             | `libjvm.dylib` |
|  1.1% |  704 KiB |      22 | `PhaseIdealLoop::split_if_with_blocks`         | `libjvm.dylib` |
|  0.9% |  576 KiB |      18 | `PhaseIdealLoop::build_loop_late`              | `libjvm.dylib` |
| <0.1% |   32 KiB |       1 | `PhaseIdealLoop::eliminate_useless_predicates` | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                               | Location       |
| -----: | -------: | ------: | ------------------------------------ | -------------- |
| 100.0% | 63.4 MiB |     844 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                            | Location       |
| ----: | -------: | ------: | --------------------------------- | -------------- |
| 79.9% | 34.5 MiB |     504 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
| 19.4% | 8.38 MiB |     199 | `Matcher::match`                  | `libjvm.dylib` |
|  0.2% |   96 KiB |       3 | `PhaseCFG::PhaseCFG`              | `libjvm.dylib` |
|  0.2% | 75.1 KiB |       2 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |
|  0.2% | 67.3 KiB |     454 | `PhaseOutput::install_code`       | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                     | Location       |
| ----: | -------: | ------: | ------------------------------------------ | -------------- |
| 80.1% | 27.6 MiB |     333 | `PhaseIFG::init`                           | `libjvm.dylib` |
| 17.0% | 5.88 MiB |     141 | `PhaseLive::compute`                       | `libjvm.dylib` |
|  2.4% |  832 KiB |      24 | `PhaseChaitin::Split`                      | `libjvm.dylib` |
|  0.5% |  160 KiB |       5 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |
|  0.1% |   32 KiB |       1 | `PhaseAggressiveCoalesce::insert_copies`   | `libjvm.dylib` |

##### `Compile::optimize_loops` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                     | Location       |
| -----: | -------: | ------: | -------------------------- | -------------- |
| 100.0% | 28.6 MiB |     365 | `PhaseIdealLoop::optimize` | `libjvm.dylib` |

##### `launchHarnessClass(String, String[])` (`org.renaissance.core.Launcher`)

|     % |     Size | Samples | Callee                                                      | Location                            |
| ----: | -------: | ------: | ----------------------------------------------------------- | ----------------------------------- |
| 98.0% | 10.8 MiB |  34,102 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher`     |
|  1.0% |  112 KiB |   2,489 | `createScratchRoot(Path, boolean)`                          | `org.renaissance.core.Launcher`     |
|  0.8% | 87.9 KiB |     588 | `create(Path, URI)`                                         | `org.renaissance.core.ModuleLoader` |
|  0.2% | 17.1 KiB |      96 | `loadClass(String)`                                         | `java.lang.ClassLoader`             |
| <0.1% | 5.42 KiB |      83 | `getScratchBase(String[])`                                  | `org.renaissance.core.Launcher`     |

##### `main(String[])` (`org.renaissance.core.Launcher`)

|      % |   Size | Samples | Callee                                 | Location                        |
| -----: | -----: | ------: | -------------------------------------- | ------------------------------- |
| 100.0% | 11 MiB |  37,426 | `launchHarnessClass(String, String[])` | `org.renaissance.core.Launcher` |

##### `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`)

|     % |     Size | Samples | Callee                                   | Location                            |
| ----: | -------: | ------: | ---------------------------------------- | ----------------------------------- |
| 97.6% | 10.5 MiB |  32,875 | `invoke(Object, Object[])`               | `java.lang.reflect.Method`          |
|  1.9% |  212 KiB |   1,082 | `createClassLoaderForModule(String)`     | `org.renaissance.core.ModuleLoader` |
|  0.4% | 47.9 KiB |     131 | `loadClass(String)`                      | `java.lang.ClassLoader`             |
| <0.1% |    248 B |       8 | `InterpreterRuntime::resolve_from_cache` | `libjvm.dylib`                      |
| <0.1% |    160 B |       6 | `getMethod(String, Class[])`             | `java.lang.Class`                   |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite`)

|     % |     Size | Samples | Callee                                   | Location                                    |
| ----: | -------: | ------: | ---------------------------------------- | ------------------------------------------- |
| 89.8% | 9.44 MiB |  29,499 | `main(String[])`                         | `org.renaissance.harness.RenaissanceSuite$` |
| 10.2% | 1.07 MiB |   3,258 | `loadClass(String)`                      | `java.lang.ClassLoader`                     |
| <0.1% |  2.3 KiB |      34 | `InterpreterRuntime::resolve_from_cache` | `libjvm.dylib`                              |

##### `loadClass(String)` (`java.lang.ClassLoader`)

|     % |  Size | Samples | Callee                 | Location    |
| ----: | ----: | ------: | ---------------------- | ----------- |
| <0.1% | 164 B |       5 | `ic_miss_stub`         | `<unknown>` |
| <0.1% |  32 B |       1 | `resolve_virtual_call` | `<unknown>` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

|     % |     Size | Samples | Callee                                                                        | Location                                    |
| ----: | -------: | ------: | ----------------------------------------------------------------------------- | ------------------------------------------- |
| 32.1% | 3.03 MiB |   6,644 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` | `org.renaissance.harness.RenaissanceSuite$` |
| 20.4% | 1.93 MiB |   6,130 | `<clinit>()`                                                                  | `scala.Predef$`                             |
| 10.9% | 1.03 MiB |   3,337 | `loadClass(String)`                                                           | `java.lang.ClassLoader`                     |
| 10.6% | 1021 KiB |   3,661 | `parse(String[])`                                                             | `org.renaissance.harness.ConfigParser`      |
|  9.8% |  943 KiB |   4,176 | `<init>(Map)`                                                                 | `org.renaissance.harness.ConfigParser`      |

## Hottest call stacks

Call stacks ranked by native bytes allocated in their leaf frame. `…` stands for frames the entry filter hides.

|     % |     Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ----: | -------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 11.3% | 27.9 MiB |     267 | `PhaseIdealLoop::Dominators` (`libjvm.dylib`) ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 11.2% | 27.6 MiB |     333 | `PhaseIFG::init` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  9.9% | 24.4 MiB |     239 | `PhaseIdealLoop::Dominators` (`libjvm.dylib`) ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  2.4% | 5.85 MiB |     140 | `PhaseLive::compute` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  1.3% | 3.11 MiB |      52 | `Matcher::xform` (`libjvm.dylib`) ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  1.0% | 2.42 MiB |      74 | `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`) ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  0.9% | 2.16 MiB |      66 | `Node_Array::grow` (`libjvm.dylib`) ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  0.7% | 1.83 MiB |      41 | `Matcher::find_shared` (`libjvm.dylib`) ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  0.7% | 1.68 MiB |      50 | `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`) ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  0.6% |  1.5 MiB |      45 | `Node_Array::grow` (`libjvm.dylib`) ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  0.5% | 1.28 MiB |   3,425 | `loadClass(String)` (`java.lang.ClassLoader`) ← … ← `<clinit>()` (`scala.Predef$`) ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← … ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  0.4% | 1.04 MiB |   1,589 | `loadClass(String)` (`java.lang.ClassLoader`) ← … ← `<clinit>()` (`scala.Predef$`) ← `run(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeOperation(int)` (`org.renaissance.harness.ExecutionDriver`) ← `executeBenchmark()` ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700111efe0`) ← … ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← … ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])` |
|  0.4% |  896 KiB |      27 | `Node_Array::grow` (`libjvm.dylib`) ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  0.3% |  863 KiB |      27 | `Matcher::Label_Root` (`libjvm.dylib`) ← `Matcher::Label_Root` ← `Matcher::match_tree` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  0.3% |  745 KiB |   2,385 | `loadClass(String)` (`java.lang.ClassLoader`) ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← … ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  0.3% |  727 KiB |   1,122 | `loadClass(String)` (`java.lang.ClassLoader`) ← … ← `apply(Seq)` (`scala.collection.immutable.Map$`) ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← … ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  0.3% |  704 KiB |      21 | `Node_Array::grow` (`libjvm.dylib`) ← `PhaseCCP::transform` ← `PhaseCCP::do_transform` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  0.3% |  672 KiB |      20 | `Node_Array::grow` (`libjvm.dylib`) ← `Matcher::ReduceInst` ← `Matcher::match_tree` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  0.2% |  512 KiB |      13 | `Node_Array::grow` (`libjvm.dylib`) ← `Compile::identify_useful_nodes` ← `PhaseRemoveUseless::PhaseRemoveUseless` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  0.2% |  504 KiB |   1,292 | `loadClass(String)` (`java.lang.ClassLoader`) ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← … ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |

# Allocated native memory profile

Allocated 1.11 GiB over 169,916 samples (6.87 KiB per sample).

| Category |      % |     Size | Samples |
| -------- | -----: | -------: | ------: |
| native   | 100.0% | 1.11 GiB | 169,916 |

## Hottest functions

### Total size

Functions ranked by total native bytes allocated in the function and all its callees.

|     % |     Size | Samples | Function                                   | Location       |
| ----: | -------: | ------: | ------------------------------------------ | -------------- |
| 98.1% | 1.09 GiB |  52,015 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib` |
| 98.1% | 1.09 GiB |  51,962 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |
| 97.4% | 1.08 GiB |  17,791 | `Compile::Compile`                         | `libjvm.dylib` |
| 97.4% | 1.08 GiB |  17,791 | `C2Compiler::compile_method`               | `libjvm.dylib` |
| 55.8% |  636 MiB |   7,792 | `Compile::Optimize`                        | `libjvm.dylib` |
| 51.6% |  588 MiB |   6,786 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib` |
| 51.1% |  582 MiB |   6,687 | `PhaseIdealLoop::PhaseIdealLoop`           | `libjvm.dylib` |
| 51.1% |  582 MiB |   6,686 | `PhaseIdealLoop::build_and_optimize`       | `libjvm.dylib` |
| 38.9% |  443 MiB |   8,141 | `Compile::Code_Gen`                        | `libjvm.dylib` |
| 35.4% |  404 MiB |   2,727 | `PhaseIdealLoop::Dominators`               | `libjvm.dylib` |
| 30.3% |  346 MiB |   3,232 | `PhaseChaitin::Register_Allocate`          | `libjvm.dylib` |
| 26.4% |  301 MiB |   3,224 | `Compile::optimize_loops`                  | `libjvm.dylib` |
| 21.5% |  245 MiB |   1,844 | `PhaseIFG::init`                           | `libjvm.dylib` |
|  9.6% |  110 MiB |   2,401 | `Node_Array::grow`                         | `libjvm.dylib` |
|  7.2% | 82.1 MiB |     937 | `PhaseLive::compute`                       | `libjvm.dylib` |
|  6.6% | 75.2 MiB |   1,141 | `Matcher::match`                           | `libjvm.dylib` |
|  3.9% | 44.3 MiB |     666 | `Matcher::xform`                           | `libjvm.dylib` |
|  2.7% | 31.1 MiB |     760 | `PhaseIdealLoop::loop_predication_impl`    | `libjvm.dylib` |
|  2.4% |   27 MiB |     582 | `PhaseIdealLoop::set_idom`                 | `libjvm.dylib` |
|  1.8% | 20.7 MiB |     254 | `Matcher::find_shared`                     | `libjvm.dylib` |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                                         | Location       |
| -----: | -------: | ------: | ---------------------------------------------- | -------------- |
| 100.0% | 1.09 GiB |  51,962 | `CompileBroker::invoke_compiler_on_method`     | `libjvm.dylib` |
|  <0.1% | 24.8 KiB |      50 | `CompileBroker::possibly_add_compiler_threads` | `libjvm.dylib` |
|  <0.1% |   24 KiB |       3 | `CompileQueue::get`                            | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                        | Location       |
| ----: | -------: | ------: | ----------------------------- | -------------- |
| 99.2% | 1.08 GiB |  17,791 | `C2Compiler::compile_method`  | `libjvm.dylib` |
| <0.1% | 65.4 KiB |   5,819 | `CompilationLog::log_compile` | `libjvm.dylib` |
| <0.1% | 64.9 KiB |       3 | `ciEnv::ciEnv`                | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                   | Location       |
| ----: | -------: | ------: | ---------------------------------------- | -------------- |
| 57.3% |  636 MiB |   7,792 | `Compile::Optimize`                      | `libjvm.dylib` |
| 39.9% |  443 MiB |   8,141 | `Compile::Code_Gen`                      | `libjvm.dylib` |
|  0.6% |  7.1 MiB |     120 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |
|  0.2% | 1.72 MiB |      43 | `NodeHash::NodeHash`                     | `libjvm.dylib` |
|  0.1% |  672 KiB |      14 | `Compile::inline_string_calls`           | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|      % |     Size | Samples | Callee             | Location       |
| -----: | -------: | ------: | ------------------ | -------------- |
| 100.0% | 1.08 GiB |  17,791 | `Compile::Compile` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                         | Location       |
| ----: | -------: | ------: | ------------------------------ | -------------- |
| 47.3% |  301 MiB |   3,224 | `Compile::optimize_loops`      | `libjvm.dylib` |
| 45.2% |  288 MiB |   3,562 | `PhaseIdealLoop::optimize`     | `libjvm.dylib` |
|  1.7% | 10.5 MiB |     252 | `PhaseCCP::do_transform`       | `libjvm.dylib` |
|  1.5% | 9.81 MiB |     173 | `PhaseIterGVN::optimize`       | `libjvm.dylib` |
|  1.4% | 8.58 MiB |     176 | `ConnectionGraph::do_analysis` | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                           | Location       |
| ----: | -------: | ------: | -------------------------------- | -------------- |
| 99.0% |  582 MiB |   6,687 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |
|  1.0% | 5.95 MiB |      99 | `PhaseIterGVN::optimize`         | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                               | Location       |
| -----: | ------: | ------: | ------------------------------------ | -------------- |
| 100.0% | 582 MiB |   6,686 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                 | Location       |
| ----: | -------: | ------: | -------------------------------------- | -------------- |
| 69.3% |  404 MiB |   2,727 | `PhaseIdealLoop::Dominators`           | `libjvm.dylib` |
|  6.8% | 39.7 MiB |     878 | `Node_Array::grow`                     | `libjvm.dylib` |
|  1.8% | 10.4 MiB |     253 | `PhaseIdealLoop::split_if_with_blocks` | `libjvm.dylib` |
|  0.7% | 4.31 MiB |     125 | `PhaseIdealLoop::build_loop_late`      | `libjvm.dylib` |
|  0.2% |  1.3 MiB |      35 | `PhaseIdealLoop::build_loop_tree`      | `libjvm.dylib` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                            | Location       |
| ----: | -------: | ------: | --------------------------------- | -------------- |
| 78.0% |  346 MiB |   3,232 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
| 17.0% | 75.2 MiB |   1,141 | `Matcher::match`                  | `libjvm.dylib` |
|  2.1% | 9.26 MiB |     194 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |
|  1.4% | 6.04 MiB |     354 | `PhaseOutput::Output`             | `libjvm.dylib` |
|  1.2% | 5.21 MiB |     108 | `PhaseCFG::PhaseCFG`              | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                   | Location       |
| ----: | -------: | ------: | ---------------------------------------- | -------------- |
| 71.0% |  245 MiB |   1,844 | `PhaseIFG::init`                         | `libjvm.dylib` |
| 23.7% | 82.1 MiB |     937 | `PhaseLive::compute`                     | `libjvm.dylib` |
|  3.0% | 10.5 MiB |     265 | `PhaseChaitin::Split`                    | `libjvm.dylib` |
|  0.7% | 2.25 MiB |      57 | `PhaseAggressiveCoalesce::insert_copies` | `libjvm.dylib` |
|  0.6% | 1.91 MiB |      35 | `PhaseRegAlloc::alloc_node_regs`         | `libjvm.dylib` |

##### `Compile::optimize_loops` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                     | Location       |
| -----: | ------: | ------: | -------------------------- | -------------- |
| 100.0% | 301 MiB |   3,224 | `PhaseIdealLoop::optimize` | `libjvm.dylib` |

##### `PhaseLive::compute` (`libjvm.dylib`)

|    % |    Size | Samples | Callee                             | Location       |
| ---: | ------: | ------: | ---------------------------------- | -------------- |
| 0.3% | 256 KiB |       8 | `PhaseLive::add_liveout`           | `libjvm.dylib` |
| 0.3% | 224 KiB |       7 | `IndexSet::alloc_block_containing` | `libjvm.dylib` |

##### `Matcher::match` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                        | Location       |
| ----: | -------: | ------: | --------------------------------------------- | -------------- |
| 58.9% | 44.3 MiB |     666 | `Matcher::xform`                              | `libjvm.dylib` |
| 27.5% | 20.7 MiB |     254 | `Matcher::find_shared`                        | `libjvm.dylib` |
| 10.5% | 7.91 MiB |     169 | `Node_Array::grow`                            | `libjvm.dylib` |
|  3.0% | 2.25 MiB |      50 | `Matcher::specialize_generic_vector_operands` | `libjvm.dylib` |
|  0.1% |   64 KiB |       2 | `Matcher::match_tree`                         | `libjvm.dylib` |

##### `Matcher::xform` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                     | Location       |
| ----: | -------: | ------: | -------------------------- | -------------- |
| 26.0% | 11.5 MiB |     282 | `Matcher::match_tree`      | `libjvm.dylib` |
| 11.6% | 5.16 MiB |      92 | `Node::out_grow`           | `libjvm.dylib` |
|  0.9% |  416 KiB |      11 | `Compile::grow_node_notes` | `libjvm.dylib` |
|  0.8% |  384 KiB |      11 | `Node::clone`              | `libjvm.dylib` |
|  0.7% |  320 KiB |      10 | `Matcher::match_sfpt`      | `libjvm.dylib` |

##### `PhaseIdealLoop::loop_predication_impl` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                             | Location       |
| ----: | -------: | ------: | -------------------------------------------------- | -------------- |
| 42.7% | 13.3 MiB |     313 | `PhaseIdealLoop::loop_predication_impl_helper`     | `libjvm.dylib` |
| 24.7% | 7.69 MiB |     202 | `PhaseIdealLoop::loop_predication_follow_branches` | `libjvm.dylib` |

## Hottest call stacks

Call stacks ranked by native bytes allocated in their leaf frame. `…` stands for frames the entry filter hides.

Common call stack: `Compile::Compile` (`libjvm.dylib`) ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`

|     % |     Size | Samples | Call stack                                                                                                                                                                                                                                                                 |
| ----: | -------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 21.5% |  245 MiB |   1,844 | `PhaseIFG::init` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen`                                                                                                                                                                                |
| 18.2% |  207 MiB |   1,322 | `PhaseIdealLoop::Dominators` (`libjvm.dylib`) ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize`                                                                     |
| 17.2% |  196 MiB |   1,405 | `PhaseIdealLoop::Dominators` (`libjvm.dylib`) ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize`                                                                                                 |
|  7.2% | 81.6 MiB |     922 | `PhaseLive::compute` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen`                                                                                                                                                                            |
|  3.4% |   39 MiB |     781 | `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`) ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize`                                                                                                    |
|  2.6% | 29.2 MiB |     678 | `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`) ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize`                                                                                                                                |
|  2.3% | 26.5 MiB |     259 | `Matcher::xform` (`libjvm.dylib`) ← `Matcher::match` ← `Compile::Code_Gen`                                                                                                                                                                                                 |
|  1.8% | 20.7 MiB |     254 | `Matcher::find_shared` (`libjvm.dylib`) ← `Matcher::match` ← `Compile::Code_Gen`                                                                                                                                                                                           |
|  1.8% | 20.6 MiB |     411 | `Node_Array::grow` (`libjvm.dylib`) ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize`                                                                               |
|  1.7% | 19.1 MiB |     467 | `Node_Array::grow` (`libjvm.dylib`) ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize`                                                                                                           |
|  0.9% | 10.3 MiB |     247 | `Node_Array::grow` (`libjvm.dylib`) ← `PhaseCCP::transform` ← `PhaseCCP::do_transform` ← `Compile::Optimize`                                                                                                                                                               |
|  0.7% | 7.91 MiB |     169 | `Node_Array::grow` (`libjvm.dylib`) ← `Matcher::match` ← `Compile::Code_Gen`                                                                                                                                                                                               |
|  0.7% | 7.75 MiB |     125 | `NodeHash::hash_find_insert` (`libjvm.dylib`) ← `PhaseIterGVN::transform_old` ← `PhaseIterGVN::optimize` ← `Compile::Optimize`                                                                                                                                             |
|  0.6% | 7.22 MiB |     147 | `Node_Array::grow` (`libjvm.dylib`) ← `Matcher::ReduceInst` ← `Matcher::match_tree` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen`                                                                                                                            |
|  0.6% |    7 MiB |     117 | `Node_Array::grow` (`libjvm.dylib`) ← `Compile::identify_useful_nodes` ← `PhaseRemoveUseless::PhaseRemoveUseless`                                                                                                                                                          |
|  0.5% | 5.35 MiB |     124 | `PhaseIdealLoop::loop_predication_impl` (`libjvm.dylib`) ← … ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize`                                                                                  |
|  0.5% | 5.16 MiB |      92 | `Node::out_grow` (`libjvm.dylib`) ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen`                                                                                                                                                                              |
|  0.4% | 5.11 MiB |     105 | `PhaseCFG::build_cfg` (`libjvm.dylib`) ← `PhaseCFG::PhaseCFG` ← `Compile::Code_Gen`                                                                                                                                                                                        |
|  0.4% | 5.03 MiB |     132 | `PhaseIdealLoop::loop_predication_follow_branches` (`libjvm.dylib`) ← `PhaseIdealLoop::loop_predication_impl` ← … ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` |
|  0.4% | 4.78 MiB |     121 | `PhaseIdealLoop::loop_predication_impl` (`libjvm.dylib`) ← … ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize`                                                      |

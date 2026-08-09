# Allocated native memory profile

Allocated 1.15 GiB over 170,620 samples (7.05 KiB per sample).

| Category |      % |     Size | Samples |
| -------- | -----: | -------: | ------: |
| Native   | 100.0% | 1.15 GiB | 170,620 |

## Hottest functions

### Total size

Functions ranked by total native bytes allocated in the function and all its callees.

|     % |     Size | Samples | Function                                   | Location       |
| ----: | -------: | ------: | ------------------------------------------ | -------------- |
| 98.2% | 1.13 GiB |  52,648 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib` |
| 98.2% | 1.13 GiB |  52,575 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |
| 97.4% | 1.12 GiB |  18,187 | `Compile::Compile`                         | `libjvm.dylib` |
| 97.4% | 1.12 GiB |  18,187 | `C2Compiler::compile_method`               | `libjvm.dylib` |
| 56.0% |  657 MiB |   8,050 | `Compile::Optimize`                        | `libjvm.dylib` |
| 51.7% |  607 MiB |   6,981 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib` |
| 51.2% |  601 MiB |   6,886 | `PhaseIdealLoop::build_and_optimize`       | `libjvm.dylib` |
| 51.2% |  601 MiB |   6,886 | `PhaseIdealLoop::PhaseIdealLoop`           | `libjvm.dylib` |
| 38.7% |  454 MiB |   8,288 | `Compile::Code_Gen`                        | `libjvm.dylib` |
| 35.2% |  413 MiB |   2,716 | `PhaseIdealLoop::Dominators`               | `libjvm.dylib` |
| 29.9% |  351 MiB |   3,234 | `PhaseChaitin::Register_Allocate`          | `libjvm.dylib` |
| 26.2% |  307 MiB |   3,261 | `Compile::optimize_loops`                  | `libjvm.dylib` |
| 21.3% |  250 MiB |   1,889 | `PhaseIFG::init`                           | `libjvm.dylib` |
|  9.8% |  115 MiB |   2,518 | `Node_Array::grow`                         | `libjvm.dylib` |
|  7.3% |   86 MiB |     984 | `PhaseLive::compute`                       | `libjvm.dylib` |
|  6.8% | 79.9 MiB |   1,214 | `Matcher::match`                           | `libjvm.dylib` |
|  4.0% | 47.2 MiB |     718 | `Matcher::xform`                           | `libjvm.dylib` |
|  2.8% | 33.4 MiB |     828 | `PhaseIdealLoop::loop_predication_impl`    | `libjvm.dylib` |
|  2.4% | 28.4 MiB |     610 | `PhaseIdealLoop::set_idom`                 | `libjvm.dylib` |
|  1.9% | 21.8 MiB |     264 | `Matcher::find_shared`                     | `libjvm.dylib` |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                                         | Location       |
| -----: | -------: | ------: | ---------------------------------------------- | -------------- |
| 100.0% | 1.13 GiB |  52,575 | `CompileBroker::invoke_compiler_on_method`     | `libjvm.dylib` |
|  <0.1% |   36 KiB |      72 | `CompileBroker::possibly_add_compiler_threads` | `libjvm.dylib` |
|  <0.1% | 8.02 KiB |       1 | `CompileQueue::get`                            | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                        | Location       |
| ----: | -------: | ------: | ----------------------------- | -------------- |
| 99.2% | 1.12 GiB |  18,187 | `C2Compiler::compile_method`  | `libjvm.dylib` |
| <0.1% |  194 KiB |       8 | `ciEnv::ciEnv`                | `libjvm.dylib` |
| <0.1% | 66.1 KiB |   5,859 | `CompilationLog::log_compile` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                   | Location       |
| ----: | -------: | ------: | ---------------------------------------- | -------------- |
| 57.5% |  657 MiB |   8,050 | `Compile::Optimize`                      | `libjvm.dylib` |
| 39.7% |  454 MiB |   8,288 | `Compile::Code_Gen`                      | `libjvm.dylib` |
|  0.7% | 7.47 MiB |     126 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |
|  0.2% | 1.81 MiB |      46 | `NodeHash::NodeHash`                     | `libjvm.dylib` |
|  0.1% |  832 KiB |      13 | `Compile::inline_string_calls`           | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|      % |     Size | Samples | Callee             | Location       |
| -----: | -------: | ------: | ------------------ | -------------- |
| 100.0% | 1.12 GiB |  18,187 | `Compile::Compile` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                         | Location       |
| ----: | -------: | ------: | ------------------------------ | -------------- |
| 46.7% |  307 MiB |   3,261 | `Compile::optimize_loops`      | `libjvm.dylib` |
| 45.6% |  300 MiB |   3,720 | `PhaseIdealLoop::optimize`     | `libjvm.dylib` |
|  1.7% |   11 MiB |     264 | `PhaseCCP::do_transform`       | `libjvm.dylib` |
|  1.6% | 10.8 MiB |     185 | `PhaseIterGVN::optimize`       | `libjvm.dylib` |
|  1.4% | 8.96 MiB |     191 | `ConnectionGraph::do_analysis` | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                           | Location       |
| ----: | -------: | ------: | -------------------------------- | -------------- |
| 99.0% |  601 MiB |   6,886 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |
|  1.0% | 6.14 MiB |      95 | `PhaseIterGVN::optimize`         | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                 | Location       |
| ----: | -------: | ------: | -------------------------------------- | -------------- |
| 68.8% |  413 MiB |   2,716 | `PhaseIdealLoop::Dominators`           | `libjvm.dylib` |
|  6.9% | 41.6 MiB |     924 | `Node_Array::grow`                     | `libjvm.dylib` |
|  1.9% | 11.2 MiB |     260 | `PhaseIdealLoop::split_if_with_blocks` | `libjvm.dylib` |
|  0.7% | 4.31 MiB |     126 | `PhaseIdealLoop::build_loop_late`      | `libjvm.dylib` |
|  0.2% | 1.29 MiB |      35 | `PhaseIdealLoop::build_loop_tree`      | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                               | Location       |
| -----: | ------: | ------: | ------------------------------------ | -------------- |
| 100.0% | 601 MiB |   6,886 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                            | Location       |
| ----: | -------: | ------: | --------------------------------- | -------------- |
| 77.4% |  351 MiB |   3,234 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
| 17.6% | 79.9 MiB |   1,214 | `Matcher::match`                  | `libjvm.dylib` |
|  2.1% | 9.41 MiB |     190 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |
|  1.4% | 6.39 MiB |     366 | `PhaseOutput::Output`             | `libjvm.dylib` |
|  1.2% | 5.46 MiB |     113 | `PhaseCFG::PhaseCFG`              | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                   | Location       |
| ----: | -------: | ------: | ---------------------------------------- | -------------- |
| 71.2% |  250 MiB |   1,889 | `PhaseIFG::init`                         | `libjvm.dylib` |
| 24.5% |   86 MiB |     984 | `PhaseLive::compute`                     | `libjvm.dylib` |
|  2.6% | 9.07 MiB |     220 | `PhaseChaitin::Split`                    | `libjvm.dylib` |
|  0.6% | 2.04 MiB |      38 | `PhaseRegAlloc::alloc_node_regs`         | `libjvm.dylib` |
|  0.5% | 1.78 MiB |      43 | `PhaseAggressiveCoalesce::insert_copies` | `libjvm.dylib` |

##### `Compile::optimize_loops` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                     | Location       |
| -----: | ------: | ------: | -------------------------- | -------------- |
| 100.0% | 307 MiB |   3,261 | `PhaseIdealLoop::optimize` | `libjvm.dylib` |

##### `PhaseLive::compute` (`libjvm.dylib`)

|    % |     Size | Samples | Callee                             | Location       |
| ---: | -------: | ------: | ---------------------------------- | -------------- |
| 0.1% | 95.9 KiB |       3 | `IndexSet::alloc_block_containing` | `libjvm.dylib` |
| 0.1% |   64 KiB |       2 | `PhaseLive::add_liveout`           | `libjvm.dylib` |

##### `Matcher::match` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                        | Location       |
| ----: | -------: | ------: | --------------------------------------------- | -------------- |
| 59.1% | 47.2 MiB |     718 | `Matcher::xform`                              | `libjvm.dylib` |
| 27.3% | 21.8 MiB |     264 | `Matcher::find_shared`                        | `libjvm.dylib` |
| 10.5% | 8.38 MiB |     179 | `Node_Array::grow`                            | `libjvm.dylib` |
|  3.1% | 2.47 MiB |      52 | `Matcher::specialize_generic_vector_operands` | `libjvm.dylib` |
| <0.1% |   32 KiB |       1 | `Matcher::match_tree`                         | `libjvm.dylib` |

##### `Matcher::xform` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                     | Location       |
| ----: | -------: | ------: | -------------------------- | -------------- |
| 26.5% | 12.5 MiB |     309 | `Matcher::match_tree`      | `libjvm.dylib` |
| 12.0% | 5.66 MiB |     103 | `Node::out_grow`           | `libjvm.dylib` |
|  1.1% |  544 KiB |      14 | `Node::clone`              | `libjvm.dylib` |
|  1.0% |  480 KiB |      14 | `Compile::grow_node_notes` | `libjvm.dylib` |
|  0.6% |  288 KiB |       9 | `Matcher::match_sfpt`      | `libjvm.dylib` |

##### `PhaseIdealLoop::loop_predication_impl` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                                    | Location       |
| ----: | -------: | ------: | --------------------------------------------------------- | -------------- |
| 40.1% | 13.4 MiB |     320 | `PhaseIdealLoop::loop_predication_impl_helper`            | `libjvm.dylib` |
| 23.7% | 7.94 MiB |     210 | `PhaseIdealLoop::loop_predication_follow_branches`        | `libjvm.dylib` |
|  0.7% |  224 KiB |       7 | `Node_Stack::Node_Stack`                                  | `libjvm.dylib` |
|  0.2% |   64 KiB |       2 | `PhaseIdealLoop::loop_predication_should_follow_branches` | `libjvm.dylib` |

## Hottest call stacks

Call stacks ranked by native bytes allocated in their leaf frame. `…` stands for frames the entry filter hides.

Common call stack: `Compile::Compile` (`libjvm.dylib`) ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`

|     % |     Size | Samples | Call stack                                                                                                                                                                                                                                                                 |
| ----: | -------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 21.3% |  250 MiB |   1,889 | `PhaseIFG::init` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen`                                                                                                                                                                                |
| 18.0% |  211 MiB |   1,311 | `PhaseIdealLoop::Dominators` (`libjvm.dylib`) ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize`                                                                     |
| 17.2% |  202 MiB |   1,405 | `PhaseIdealLoop::Dominators` (`libjvm.dylib`) ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize`                                                                                                 |
|  7.3% | 85.8 MiB |     979 | `PhaseLive::compute` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen`                                                                                                                                                                            |
|  3.4% | 40.5 MiB |     811 | `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`) ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize`                                                                                                    |
|  2.6% | 30.8 MiB |     718 | `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`) ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize`                                                                                                                                |
|  2.4% | 27.8 MiB |     268 | `Matcher::xform` (`libjvm.dylib`) ← `Matcher::match` ← `Compile::Code_Gen`                                                                                                                                                                                                 |
|  1.9% | 21.8 MiB |     264 | `Matcher::find_shared` (`libjvm.dylib`) ← `Matcher::match` ← `Compile::Code_Gen`                                                                                                                                                                                           |
|  1.8% | 21.5 MiB |     433 | `Node_Array::grow` (`libjvm.dylib`) ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize`                                                                               |
|  1.7% | 20.1 MiB |     491 | `Node_Array::grow` (`libjvm.dylib`) ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize`                                                                                                           |
|  0.9% | 10.8 MiB |     260 | `Node_Array::grow` (`libjvm.dylib`) ← `PhaseCCP::transform` ← `PhaseCCP::do_transform` ← `Compile::Optimize`                                                                                                                                                               |
|  0.7% | 8.38 MiB |     179 | `Node_Array::grow` (`libjvm.dylib`) ← `Matcher::match` ← `Compile::Code_Gen`                                                                                                                                                                                               |
|  0.7% | 8.03 MiB |     129 | `NodeHash::hash_find_insert` (`libjvm.dylib`) ← `PhaseIterGVN::transform_old` ← `PhaseIterGVN::optimize` ← `Compile::Optimize`                                                                                                                                             |
|  0.6% |  7.6 MiB |     156 | `Node_Array::grow` (`libjvm.dylib`) ← `Matcher::ReduceInst` ← `Matcher::match_tree` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen`                                                                                                                            |
|  0.6% | 7.41 MiB |     124 | `Node_Array::grow` (`libjvm.dylib`) ← `Compile::identify_useful_nodes` ← `PhaseRemoveUseless::PhaseRemoveUseless`                                                                                                                                                          |
|  0.5% | 6.16 MiB |     144 | `PhaseIdealLoop::loop_predication_impl` (`libjvm.dylib`) ← … ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize`                                                                                  |
|  0.5% | 5.66 MiB |     103 | `Node::out_grow` (`libjvm.dylib`) ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen`                                                                                                                                                                              |
|  0.5% | 5.41 MiB |     137 | `PhaseIdealLoop::loop_predication_impl` (`libjvm.dylib`) ← … ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize`                                                      |
|  0.5% | 5.37 MiB |     110 | `PhaseCFG::build_cfg` (`libjvm.dylib`) ← `PhaseCFG::PhaseCFG` ← `Compile::Code_Gen`                                                                                                                                                                                        |
|  0.4% | 5.13 MiB |     135 | `PhaseIdealLoop::loop_predication_follow_branches` (`libjvm.dylib`) ← `PhaseIdealLoop::loop_predication_impl` ← … ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` |

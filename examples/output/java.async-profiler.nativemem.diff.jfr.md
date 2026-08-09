# Allocated native memory profile diff

Allocated 243 MiB → 246 MiB (+2.365 MiB, +1.0%) over 84,474 samples → 82,688 samples (2.95 KiB → 3.04 KiB per sample).

| Category | Change |      Delta |      % |              Size |         Samples |
| -------- | -----: | ---------: | -----: | ----------------: | --------------: |
| Native   |  +1.0% | +2.365 MiB | 100.0% | 243 MiB → 246 MiB | 84,474 → 82,688 |

## Hottest functions

### Total size

#### Regressions

Functions with the largest increase in total native bytes allocated in the function and all its callees.

|  Change |        Delta |             % |                Size |         Samples | Function                                   | Location       |
| ------: | -----------: | ------------: | ------------------: | --------------: | ------------------------------------------ | -------------- |
|   +2.1% |   +2.358 MiB | 46.1% → 46.6% |   112 MiB → 115 MiB |   2,563 → 2,569 | `Compile::Compile`                         | `libjvm.dylib` |
|   +2.1% |   +2.358 MiB | 46.1% → 46.6% |   112 MiB → 115 MiB |   2,563 → 2,569 | `C2Compiler::compile_method`               | `libjvm.dylib` |
|   +1.8% |   +2.053 MiB | 46.9% → 47.3% |   114 MiB → 116 MiB | 10,091 → 10,080 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |
|   +1.8% |   +2.053 MiB | 47.0% → 47.3% |   114 MiB → 116 MiB | 10,139 → 10,128 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib` |
|   +4.1% |   +1.354 MiB | 13.6% → 14.0% | 33.2 MiB → 34.5 MiB |       480 → 504 | `PhaseChaitin::Register_Allocate`          | `libjvm.dylib` |
|   +3.1% |   +1.307 MiB | 17.2% → 17.6% | 41.9 MiB → 43.2 MiB |   1,198 → 1,210 | `Compile::Code_Gen`                        | `libjvm.dylib` |
|   +2.4% |   +1.207 MiB | 21.0% → 21.3% | 51.1 MiB → 52.3 MiB |       482 → 506 | `PhaseIdealLoop::Dominators`               | `libjvm.dylib` |
|   +4.0% |   +1.058 MiB | 10.9% → 11.2% | 26.6 MiB → 27.6 MiB |       321 → 333 | `PhaseIFG::init`                           | `libjvm.dylib` |
|   +3.1% |  +873.89 KiB | 11.4% → 11.6% | 27.7 MiB → 28.6 MiB |       354 → 365 | `Compile::optimize_loops`                  | `libjvm.dylib` |
|   +1.0% | +662.914 KiB |         26.0% | 63.2 MiB → 63.9 MiB |       870 → 860 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib` |
|   +1.0% | +630.898 KiB |         25.8% | 62.8 MiB → 63.4 MiB |       855 → 844 | `PhaseIdealLoop::build_and_optimize`       | `libjvm.dylib` |
|   +1.0% | +630.898 KiB |         25.8% | 62.8 MiB → 63.4 MiB |       855 → 844 | `PhaseIdealLoop::PhaseIdealLoop`           | `libjvm.dylib` |
|   +0.9% | +597.664 KiB |         27.0% | 65.8 MiB → 66.4 MiB |       957 → 940 | `Compile::Optimize`                        | `libjvm.dylib` |
|   +3.0% | +175.679 KiB |   2.3% → 2.4% | 5.71 MiB → 5.88 MiB |       132 → 141 | `PhaseLive::compute`                       | `libjvm.dylib` |
| +133.3% | +127.984 KiB |  <0.1% → 0.1% |    96 KiB → 224 KiB |           3 → 7 | `GraphKit::make_load`                      | `libjvm.dylib` |
| +100.0% | +127.984 KiB |          0.1% |   128 KiB → 256 KiB |           4 → 8 | `GraphKit::access_load_at`                 | `libjvm.dylib` |
|   +6.5% |  +114.14 KiB |          0.7% | 1.72 MiB → 1.83 MiB |         37 → 41 | `Matcher::find_shared`                     | `libjvm.dylib` |
|  +77.1% |  +98.695 KiB |          0.1% |   128 KiB → 227 KiB |           4 → 6 | `ConnectionGraph::do_analysis`             | `libjvm.dylib` |
| +300.0% |  +96.031 KiB |  <0.1% → 0.1% |    32 KiB → 128 KiB |           1 → 3 | `ConnectionGraph::create_split_phi`        | `libjvm.dylib` |
| +300.0% |  +96.031 KiB |  <0.1% → 0.1% |    32 KiB → 128 KiB |           1 → 3 | `ConnectionGraph::split_memory_phi`        | `libjvm.dylib` |

#### Improvements

Functions with the largest decrease in total native bytes allocated in the function and all its callees.

|  Change |        Delta |            % |                Size |       Samples | Function                                       | Location       |
| ------: | -----------: | -----------: | ------------------: | ------------: | ---------------------------------------------- | -------------- |
|  -20.1% | -351.685 KiB |  0.7% → 0.6% | 1.71 MiB → 1.37 MiB | 4,084 → 4,042 | `Compilation::compile_java_method`             | `libjvm.dylib` |
|  -15.4% | -315.638 KiB |  0.8% → 0.7% |    2 MiB → 1.69 MiB | 6,142 → 6,121 | `Compilation::compile_method`                  | `libjvm.dylib` |
|  -15.4% | -315.638 KiB |  0.8% → 0.7% |    2 MiB → 1.69 MiB | 6,142 → 6,121 | `Compilation::Compilation`                     | `libjvm.dylib` |
|  -23.7% | -287.804 KiB |  0.5% → 0.4% |  1.19 MiB → 928 KiB |       38 → 28 | `PhaseIdealLoop::loop_predication_impl`        | `libjvm.dylib` |
|  -23.7% | -287.789 KiB |  0.5% → 0.4% |  1.19 MiB → 927 KiB |       39 → 30 | `Compilation::emit_lir`                        | `libjvm.dylib` |
|  -25.0% | -223.835 KiB |  0.4% → 0.3% |   895 KiB → 672 KiB |       28 → 21 | `LinearScan::do_linear_scan`                   | `libjvm.dylib` |
|  -21.4% | -191.859 KiB |  0.4% → 0.3% |   896 KiB → 704 KiB |       28 → 22 | `PhaseIdealLoop::split_if_with_blocks`         | `libjvm.dylib` |
|  -26.3% | -159.976 KiB |         0.2% |   608 KiB → 448 KiB |       18 → 12 | `PhaseIdealLoop::clone_loop`                   | `libjvm.dylib` |
|  -55.5% | -159.945 KiB |         0.1% |   288 KiB → 128 KiB |         8 → 4 | `PhaseIdealLoop::do_unroll`                    | `libjvm.dylib` |
|   -6.9% | -159.921 KiB |         0.9% | 2.25 MiB → 2.09 MiB |       71 → 66 | `Matcher::match_tree`                          | `libjvm.dylib` |
|  -25.0% | -128.046 KiB |         0.2% |   512 KiB → 384 KiB |       14 → 11 | `PhaseMacroExpand::expand_macro_nodes`         | `libjvm.dylib` |
|  -14.3% | -128.039 KiB |  0.4% → 0.3% |   896 KiB → 768 KiB |       28 → 23 | `PhaseIdealLoop::loop_predication_impl_helper` | `libjvm.dylib` |
|   -7.5% | -127.992 KiB |  0.7% → 0.6% | 1.66 MiB → 1.53 MiB |       53 → 46 | `PhaseIdealLoop::set_idom`                     | `libjvm.dylib` |
| removed | -127.968 KiB |  0.1% → 0.0% |       128 KiB → 0 B |         3 → 0 | `PhaseIdealLoop::clone_loop_handle_data_uses`  | `libjvm.dylib` |
|  -21.0% |  -127.96 KiB |         0.2% |   608 KiB → 480 KiB |       19 → 14 | `PhaseIdealLoop::is_counted_loop`              | `libjvm.dylib` |
|  -12.1% | -127.945 KiB |         0.4% |  1.03 MiB → 928 KiB |       32 → 28 | `Matcher::ReduceInst`                          | `libjvm.dylib` |
|  -44.4% | -127.906 KiB |         0.1% |   288 KiB → 160 KiB |         9 → 5 | `Compile::call_generator`                      | `libjvm.dylib` |
|   -1.7% | -102.031 KiB |         2.3% | 5.71 MiB → 5.61 MiB |     132 → 129 | `Matcher::xform`                               | `libjvm.dylib` |
|  -60.0% |  -96.031 KiB | 0.1% → <0.1% |    160 KiB → 64 KiB |         4 → 2 | `PhaseMacroExpand::expand_allocate_common`     | `libjvm.dylib` |
|  -42.9% |  -96.031 KiB |         0.1% |   224 KiB → 128 KiB |         6 → 4 | `PhaseIterGVN::transform`                      | `libjvm.dylib` |

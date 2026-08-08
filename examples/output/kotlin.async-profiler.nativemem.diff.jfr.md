# Allocated native memory profile diff

Allocated 1.57 GiB → 1.56 GiB (-19.464 MiB, -1.2%) over 625,321 samples → 617,888 samples (2.64 KiB per sample).

| Category | Change |       Delta |      % |                Size |           Samples |
| -------- | -----: | ----------: | -----: | ------------------: | ----------------: |
| native   |  -1.2% | -19.464 MiB | 100.0% | 1.57 GiB → 1.56 GiB | 625,321 → 617,888 |

## Hottest functions

### Total size

#### Regressions

Functions with the largest increase in total native bytes allocated in the function and all its callees.

|  Change |      Delta |            % |                Size |         Samples | Function                                    | Location       |
| ------: | ---------: | -----------: | ------------------: | --------------: | ------------------------------------------- | -------------- |
|  +33.1% | +6.862 MiB |  1.3% → 1.7% | 20.7 MiB → 27.6 MiB | 68,186 → 67,737 | `Compilation::compile_method`               | `libjvm.dylib` |
|  +33.1% | +6.862 MiB |  1.3% → 1.7% | 20.7 MiB → 27.6 MiB | 68,186 → 67,737 | `Compilation::Compilation`                  | `libjvm.dylib` |
|  +49.3% | +6.677 MiB |  0.8% → 1.3% | 13.5 MiB → 20.2 MiB | 27,642 → 27,324 | `Compilation::compile_java_method`          | `libjvm.dylib` |
|  +48.0% | +4.042 MiB |  0.5% → 0.8% | 8.42 MiB → 12.5 MiB |       553 → 683 | `Compilation::emit_lir`                     | `libjvm.dylib` |
|  +49.2% | +2.949 MiB |  0.4% → 0.6% |    6 MiB → 8.95 MiB |       175 → 270 | `LinearScan::do_linear_scan`                | `libjvm.dylib` |
|  +14.9% | +2.466 MiB |  1.0% → 1.2% |   16.5 MiB → 19 MiB |       412 → 495 | `Matcher::match_tree`                       | `libjvm.dylib` |
|  +98.4% | +1.967 MiB |  0.1% → 0.2% |    2 MiB → 3.97 MiB |        63 → 127 | `Matcher::Label_Root`                       | `libjvm.dylib` |
|  +22.4% |  +1.52 MiB |  0.4% → 0.5% |  6.8 MiB → 8.32 MiB |       481 → 524 | `PhaseOutput::Output`                       | `libjvm.dylib` |
|  +38.8% | +1.381 MiB |  0.2% → 0.3% | 3.56 MiB → 4.94 MiB | 16,470 → 16,325 | `Compilation::build_hir`                    | `libjvm.dylib` |
|  +70.5% | +1.302 MiB |  0.1% → 0.2% | 1.85 MiB → 3.15 MiB | 16,427 → 16,279 | `GraphBuilder::iterate_all_blocks`          | `libjvm.dylib` |
|  +68.8% | +1.271 MiB |  0.1% → 0.2% | 1.85 MiB → 3.12 MiB | 16,417 → 16,270 | `GraphBuilder::iterate_bytecodes_for_block` | `libjvm.dylib` |
|  +97.9% | +1.258 MiB |  0.1% → 0.2% | 1.29 MiB → 2.54 MiB |           4,633 | `Compilation::emit_code_body`               | `libjvm.dylib` |
|  +37.0% | +1.224 MiB |  0.2% → 0.3% | 3.31 MiB → 4.53 MiB | 16,462 → 16,312 | `GraphBuilder::GraphBuilder`                | `libjvm.dylib` |
|  +20.7% | +1.218 MiB |         0.4% |  5.88 MiB → 7.1 MiB |       118 → 139 | `GraphKit::access_store_at`                 | `libjvm.dylib` |
|  +55.9% | +1.187 MiB |  0.1% → 0.2% | 2.13 MiB → 3.31 MiB |         38 → 56 | `IdealKit::if_then`                         | `libjvm.dylib` |
|  +94.5% | +1.137 MiB |         0.1% |  1.2 MiB → 2.34 MiB |         29 → 66 | `PhaseOutput::BuildOopMaps`                 | `libjvm.dylib` |
|  +65.3% | +1.115 MiB |  0.1% → 0.2% | 1.71 MiB → 2.82 MiB | 15,973 → 15,815 | `GraphBuilder::invoke`                      | `libjvm.dylib` |
|  +43.8% | +1.061 MiB |         0.2% | 2.42 MiB → 3.49 MiB |       378 → 412 | `LIRGenerator::block_do`                    | `libjvm.dylib` |
|  +43.8% | +1.061 MiB |         0.2% | 2.42 MiB → 3.49 MiB |       378 → 412 | `BlockList::iterate_forward`                | `libjvm.dylib` |
| +238.9% | +1.032 MiB | <0.1% → 0.1% |  442 KiB → 1.46 MiB |   4,610 → 4,603 | `LIR_Assembler::emit_lir_list`              | `libjvm.dylib` |

#### Improvements

Functions with the largest decrease in total native bytes allocated in the function and all its callees.

| Change |       Delta |             % |                Size |           Samples | Function                                   | Location       |
| -----: | ----------: | ------------: | ------------------: | ----------------: | ------------------------------------------ | -------------- |
|  -1.9% | -26.407 MiB | 85.7% → 85.1% | 1.35 GiB → 1.32 GiB |   26,868 → 26,681 | `Compile::Compile`                         | `libjvm.dylib` |
|  -1.9% | -26.407 MiB | 85.7% → 85.1% | 1.35 GiB → 1.32 GiB |   26,868 → 26,681 | `C2Compiler::compile_method`               | `libjvm.dylib` |
|  -1.4% | -19.357 MiB | 87.0% → 86.8% | 1.37 GiB → 1.35 GiB | 107,661 → 106,942 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |
|  -1.4% | -19.346 MiB | 87.0% → 86.8% | 1.37 GiB → 1.35 GiB | 107,917 → 107,222 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib` |
|  -2.4% | -17.257 MiB | 45.1% → 44.6% |   727 MiB → 710 MiB |     8,863 → 8,774 | `Compile::Optimize`                        | `libjvm.dylib` |
|  -2.3% |  -15.21 MiB | 40.5% → 40.0% |   653 MiB → 638 MiB |     7,350 → 7,256 | `PhaseIdealLoop::PhaseIdealLoop`           | `libjvm.dylib` |
|  -2.3% |   -15.2 MiB | 40.9% → 40.4% |   659 MiB → 644 MiB |     7,461 → 7,367 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib` |
|  -2.3% | -15.178 MiB | 40.5% → 40.0% |   653 MiB → 638 MiB |     7,349 → 7,256 | `PhaseIdealLoop::build_and_optimize`       | `libjvm.dylib` |
|  -1.6% |  -9.608 MiB | 37.6% → 37.5% |   607 MiB → 597 MiB |   15,069 → 14,961 | `Compile::Code_Gen`                        | `libjvm.dylib` |
|  -2.0% |  -9.232 MiB | 29.0% → 28.8% |   468 MiB → 459 MiB |     4,789 → 4,736 | `PhaseChaitin::Register_Allocate`          | `libjvm.dylib` |
|  -2.0% |  -9.225 MiB | 28.6% → 28.4% |   461 MiB → 452 MiB |     3,079 → 3,016 | `PhaseIdealLoop::Dominators`               | `libjvm.dylib` |
|  -1.8% |  -6.029 MiB | 20.7% → 20.5% |   333 MiB → 327 MiB |     2,877 → 2,837 | `PhaseIFG::init`                           | `libjvm.dylib` |
| -18.9% |  -5.531 MiB |   1.8% → 1.5% | 29.3 MiB → 23.7 MiB |         685 → 580 | `PhaseIdealLoop::loop_predication_impl`    | `libjvm.dylib` |
|  -2.0% |  -2.719 MiB |   8.7% → 8.6% |   139 MiB → 137 MiB |     3,071 → 3,056 | `Node_Array::grow`                         | `libjvm.dylib` |
| -17.4% |  -1.673 MiB |   0.6% → 0.5% | 9.61 MiB → 7.94 MiB |         182 → 173 | `PhaseChaitin::Split`                      | `libjvm.dylib` |
| -23.7% |  -1.656 MiB |   0.4% → 0.3% |    7 MiB → 5.34 MiB |         124 → 112 | `GraphKit::clone_map`                      | `libjvm.dylib` |
| -20.4% |  -1.343 MiB |   0.4% → 0.3% |  6.6 MiB → 5.25 MiB |          101 → 89 | `Block_Array::grow`                        | `libjvm.dylib` |
|  -1.1% |  -1.263 MiB |   7.1% → 7.2% |   115 MiB → 114 MiB |     1,502 → 1,507 | `PhaseLive::compute`                       | `libjvm.dylib` |
|  -1.1% |  -1.251 MiB |          6.9% |   112 MiB → 110 MiB |     1,761 → 1,802 | `Matcher::match`                           | `libjvm.dylib` |
|  -0.3% | -932.96 KiB | 18.0% → 18.2% |   291 MiB → 290 MiB |     3,038 → 3,082 | `Compile::optimize_loops`                  | `libjvm.dylib` |

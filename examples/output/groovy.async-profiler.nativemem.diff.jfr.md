# Allocated native memory profile diff

Allocated 1.11 GiB → 1.15 GiB (+34.571 MiB, +3.0%) over 169,916 samples → 170,620 samples (6.87 KiB → 7.05 KiB per sample).

| Category | Change |       Delta |      % |                Size |           Samples |
| -------- | -----: | ----------: | -----: | ------------------: | ----------------: |
| Native   |  +3.0% | +34.571 MiB | 100.0% | 1.11 GiB → 1.15 GiB | 169,916 → 170,620 |

## Hottest functions

### Total size

#### Regressions

Functions with the largest increase in total native bytes allocated in the function and all its callees.

| Change |       Delta |             % |                Size |         Samples | Function                                   | Location       |
| -----: | ----------: | ------------: | ------------------: | --------------: | ------------------------------------------ | -------------- |
|  +3.1% | +34.467 MiB |         97.4% | 1.08 GiB → 1.12 GiB | 17,791 → 18,187 | `Compile::Compile`                         | `libjvm.dylib` |
|  +3.1% | +34.467 MiB |         97.4% | 1.08 GiB → 1.12 GiB | 17,791 → 18,187 | `C2Compiler::compile_method`               | `libjvm.dylib` |
|  +3.1% | +34.298 MiB | 98.1% → 98.2% | 1.09 GiB → 1.13 GiB | 51,962 → 52,575 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |
|  +3.1% | +34.293 MiB | 98.1% → 98.2% | 1.09 GiB → 1.13 GiB | 52,015 → 52,648 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib` |
|  +3.4% | +21.673 MiB | 55.8% → 56.0% |   636 MiB → 657 MiB |   7,792 → 8,050 | `Compile::Optimize`                        | `libjvm.dylib` |
|  +3.2% | +18.768 MiB | 51.6% → 51.7% |   588 MiB → 607 MiB |   6,786 → 6,981 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib` |
|  +3.2% | +18.612 MiB | 51.1% → 51.2% |   582 MiB → 601 MiB |   6,686 → 6,886 | `PhaseIdealLoop::build_and_optimize`       | `libjvm.dylib` |
|  +3.2% |  +18.58 MiB | 51.1% → 51.2% |   582 MiB → 601 MiB |   6,687 → 6,886 | `PhaseIdealLoop::PhaseIdealLoop`           | `libjvm.dylib` |
|  +2.6% | +11.357 MiB | 38.9% → 38.7% |   443 MiB → 454 MiB |   8,141 → 8,288 | `Compile::Code_Gen`                        | `libjvm.dylib` |
|  +2.3% |  +9.358 MiB | 35.4% → 35.2% |   404 MiB → 413 MiB |   2,727 → 2,716 | `PhaseIdealLoop::Dominators`               | `libjvm.dylib` |
|  +2.2% |  +6.578 MiB | 26.4% → 26.2% |   301 MiB → 307 MiB |   3,224 → 3,261 | `Compile::optimize_loops`                  | `libjvm.dylib` |
|  +1.7% |  +5.832 MiB | 30.3% → 29.9% |   346 MiB → 351 MiB |   3,232 → 3,234 | `PhaseChaitin::Register_Allocate`          | `libjvm.dylib` |
|  +4.8% |  +5.221 MiB |   9.6% → 9.8% |   110 MiB → 115 MiB |   2,401 → 2,518 | `Node_Array::grow`                         | `libjvm.dylib` |
|  +1.9% |  +4.754 MiB | 21.5% → 21.3% |   245 MiB → 250 MiB |   1,844 → 1,889 | `PhaseIFG::init`                           | `libjvm.dylib` |
|  +6.2% |  +4.687 MiB |   6.6% → 6.8% | 75.2 MiB → 79.9 MiB |   1,141 → 1,214 | `Matcher::match`                           | `libjvm.dylib` |
|  +4.7% |  +3.889 MiB |   7.2% → 7.3% |   82.1 MiB → 86 MiB |       937 → 984 | `PhaseLive::compute`                       | `libjvm.dylib` |
|  +6.6% |  +2.935 MiB |   3.9% → 4.0% | 44.3 MiB → 47.2 MiB |       666 → 718 | `Matcher::xform`                           | `libjvm.dylib` |
|  +7.6% |  +2.375 MiB |   2.7% → 2.8% | 31.1 MiB → 33.4 MiB |       760 → 828 | `PhaseIdealLoop::loop_predication_impl`    | `libjvm.dylib` |
|  +9.0% |  +1.617 MiB |   1.6% → 1.7% |   18 MiB → 19.6 MiB |       318 → 334 | `PhaseIterGVN::optimize`                   | `libjvm.dylib` |
|  +8.6% |  +1.554 MiB |   1.6% → 1.7% |   18 MiB → 19.6 MiB |       319 → 334 | `PhaseIterGVN::transform_old`              | `libjvm.dylib` |

#### Improvements

Functions with the largest decrease in total native bytes allocated in the function and all its callees.

|  Change |        Delta |            % |                Size |         Samples | Function                                    | Location                                            |
| ------: | -----------: | -----------: | ------------------: | --------------: | ------------------------------------------- | --------------------------------------------------- |
|  -13.9% |   -1.467 MiB |  0.9% → 0.8% | 10.5 MiB → 9.07 MiB |       265 → 220 | `PhaseChaitin::Split`                       | `libjvm.dylib`                                      |
|  -30.8% |   -1.124 MiB |  0.3% → 0.2% | 3.66 MiB → 2.53 MiB |         81 → 61 | `GraphKit::clone_map`                       | `libjvm.dylib`                                      |
|  -67.4% | -991.273 KiB | 0.1% → <0.1% |  1.44 MiB → 480 KiB |         46 → 15 | `PhaseChaitin::post_allocate_copy_removal`  | `libjvm.dylib`                                      |
|  -63.0% | -927.992 KiB | 0.1% → <0.1% |  1.44 MiB → 544 KiB |         26 → 14 | `PhaseChaitin::split_USE`                   | `libjvm.dylib`                                      |
|  -56.4% | -704.039 KiB | 0.1% → <0.1% |  1.22 MiB → 544 KiB |         23 → 13 | `GraphKit::set_map_clone`                   | `libjvm.dylib`                                      |
|  -54.5% | -575.578 KiB | 0.1% → <0.1% |  1.03 MiB → 480 KiB |         33 → 15 | `IndexSet::populate_free_list`              | `libjvm.dylib`                                      |
|  -20.8% | -479.789 KiB |         0.2% | 2.25 MiB → 1.78 MiB |         57 → 43 | `PhaseAggressiveCoalesce::insert_copies`    | `libjvm.dylib`                                      |
|  -16.0% | -414.031 KiB |         0.2% | 2.53 MiB → 2.13 MiB |         60 → 48 | `PhaseIdealLoop::split_if_with_blocks_post` | `libjvm.dylib`                                      |
|  -20.0% | -384.156 KiB |  0.2% → 0.1% |  1.88 MiB → 1.5 MiB |         44 → 34 | `PhaseIdealLoop::try_merge_identical_ifs`   | `libjvm.dylib`                                      |
|  -85.7% | -384.031 KiB |        <0.1% |    448 KiB → 64 KiB |           4 → 2 | `LoadKlassNode::make`                       | `libjvm.dylib`                                      |
|  -50.0% | -351.742 KiB | 0.1% → <0.1% |   703 KiB → 352 KiB |         22 → 11 | `Node::add_req`                             | `libjvm.dylib`                                      |
|  -43.5% | -319.765 KiB | 0.1% → <0.1% |   735 KiB → 416 KiB |         23 → 13 | `IndexSet::alloc_block_containing`          | `libjvm.dylib`                                      |
| removed | -317.047 KiB | <0.1% → 0.0% |       317 KiB → 0 B |       2,756 → 0 | `linkToCallSite(Object, Object)`            | `java.lang.invoke.LambdaForm$MH.0x000000f8010c8400` |
|   -3.4% | -302.767 KiB |  0.8% → 0.7% |   8.7 MiB → 8.4 MiB | 28,347 → 28,517 | `Compilation::compile_method`               | `libjvm.dylib`                                      |
|   -3.4% | -302.767 KiB |  0.8% → 0.7% |   8.7 MiB → 8.4 MiB | 28,347 → 28,517 | `Compilation::Compilation`                  | `libjvm.dylib`                                      |
|   -4.2% | -293.189 KiB |         0.6% | 6.76 MiB → 6.47 MiB | 16,598 → 16,482 | `Compilation::compile_java_method`          | `libjvm.dylib`                                      |
|  -11.0% |     -288 KiB |         0.2% | 2.56 MiB → 2.28 MiB |         40 → 35 | `PhaseChaitin::insert_proj`                 | `libjvm.dylib`                                      |
|  -31.0% | -255.625 KiB | 0.1% → <0.1% |   824 KiB → 569 KiB |   1,486 → 1,482 | `Compilation::emit_code_body`               | `libjvm.dylib`                                      |
|  -31.8% | -224.078 KiB | 0.1% → <0.1% |   704 KiB → 480 KiB |         15 → 10 | `GraphKit::subtype_check_receiver`          | `libjvm.dylib`                                      |
| removed | -224.046 KiB | <0.1% → 0.0% |       224 KiB → 0 B |           3 → 0 | `IdealKit::storeCM`                         | `libjvm.dylib`                                      |

# Allocated native memory profile diff

Allocated 1.3 GiB → 1.34 GiB (+40.081 MiB, +3.0%) over 8,454 → 8,540 samples (161 KiB → 165 KiB per sample).

| Category | Change |       Delta |      % |               Size |       Samples |
| -------- | -----: | ----------: | -----: | -----------------: | ------------: |
| Native   |  +3.0% | +40.081 MiB | 100.0% | 1.3 GiB → 1.34 GiB | 8,454 → 8,540 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest and most changed functions.

```
└── … 1.29 GiB → 1.33 GiB (99.4% → 99.5%) Compile::Compile at libjvm.dylib
    ├── 714 MiB → 739 MiB (53.6% → 53.9%) Compile::Optimize
    │   ├── … 344 MiB → 349 MiB (25.8% → 25.4%) PhaseIdealLoop::build_and_optimize at libjvm.dylib
    │   │   ├── … 301 MiB → 304 MiB (22.6% → 22.1%) malloc_hook at libasyncProfiler.dylib
    │   │   ├── … 9.5 MiB → 9.07 MiB (0.7%) malloc_hook at libasyncProfiler.dylib
    │   │   ├── … 9.03 MiB → 9.41 MiB (0.7%) malloc_hook at libasyncProfiler.dylib
    │   │   ├── … 5.82 MiB → 7.3 MiB (0.4% → 0.5%) malloc_hook at libasyncProfiler.dylib
    │   │   ├── … 5.31 MiB → 6 MiB (0.4%) PhaseIdealLoop::loop_predication_impl_helper at libjvm.dylib
    │   │   ├── 3.84 MiB → 3.76 MiB (0.3%) PhaseIdealLoop::split_if_with_blocks
    │   │   └── 7.25 MiB → 6.98 MiB (0.5%) 5 more callees, led by (0.2%) IdealLoopTree::counted_loop
    │   ├── … 334 MiB → 352 MiB (25.1% → 25.7%) PhaseIdealLoop::build_and_optimize at libjvm.dylib
    │   │   ├── … 296 MiB → 310 MiB (22.2% → 22.6%) malloc_hook at libasyncProfiler.dylib
    │   │   ├── … 9.91 MiB → 11.9 MiB (0.7% → 0.9%) malloc_hook at libasyncProfiler.dylib
    │   │   ├── … 9.38 MiB → 9.81 MiB (0.7%) malloc_hook at libasyncProfiler.dylib
    │   │   ├── … 7.74 MiB → 9.15 MiB (0.6% → 0.7%) malloc_hook at libasyncProfiler.dylib
    │   │   ├── 4.06 MiB → 3.63 MiB (0.3%) IdealLoopTree::iteration_split
    │   │   └── 2.94 MiB → 3.47 MiB (0.2% → 0.3%) IdealLoopTree::loop_predication
    │   ├── … 8.13 MiB → 8.19 MiB (0.6%) malloc_hook at libasyncProfiler.dylib
    │   ├── 5.31 MiB → 5.48 MiB (0.4%) ConnectionGraph::do_analysis
    │   ├── 4.72 MiB → 5.67 MiB (0.4%) PhaseCCP::do_transform
    │   ├── 4.31 MiB → 5.75 MiB (0.3% → 0.4%) PhaseRenumberLive::PhaseRenumberLive
    │   └── 3.68 MiB → 4.14 MiB (0.3%) PhaseMacroExpand::expand_macro_nodes
    ├── 583 MiB → 596 MiB (43.7% → 43.4%) Compile::Code_Gen
    │   ├── 487 MiB → 495 MiB (36.6% → 36.1%) PhaseChaitin::Register_Allocate
    │   │   ├── … 383 MiB → 381 MiB (28.7% → 27.8%, self 100.0% globally) malloc_hook at libasyncProfiler.dylib
    │   │   ├── … 96.6 MiB → 103 MiB (7.2% → 7.5%) malloc_hook at libasyncProfiler.dylib
    │   │   └── 4.94 MiB → 6.16 MiB (0.4%) PhaseChaitin::Split
    │   ├── 83.6 MiB → 88.2 MiB (6.3% → 6.4%) Matcher::match
    │   │   ├── 53 MiB → 54.9 MiB (4.0%) Matcher::xform
    │   │   │   ├── … 39.2 MiB → 39.7 MiB (2.9%) malloc_hook at libasyncProfiler.dylib
    │   │   │   ├── … 8.25 MiB → 7.78 MiB (0.6%) malloc_hook at libasyncProfiler.dylib
    │   │   │   └── 5.19 MiB → 6.91 MiB (0.4% → 0.5%) Matcher::match_tree
    │   │   │       └── 5.06 MiB → 6.22 MiB (0.4% → 0.5%) Matcher::ReduceInst
    │   │   └── … 24.4 MiB → 26.6 MiB (1.8% → 1.9%) malloc_hook at libasyncProfiler.dylib
    │   ├── 5.7 MiB → 4.99 MiB (0.4%) PhaseCFG::do_global_code_motion
    │   └── 2.71 MiB → 4.33 MiB (0.2% → 0.3%) PhaseCFG::PhaseCFG
    ├── … 14 MiB → 14.1 MiB (1.1% → 1.0%) Parse::do_one_block at libjvm.dylib
    │   ├── 3.63 MiB → 4.81 MiB (0.3% → 0.4%) Parse::do_field_access
    │   └── 3.97 MiB (0.3%) Parse::do_call
    └── … 7.03 MiB → 8.22 MiB (0.5% → 0.6%) malloc_hook at libasyncProfiler.dylib
```

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in native bytes allocated within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

##### Native

| Change |       Delta |      % |               Size |       Samples | Function      | Location                 |
| -----: | ----------: | -----: | -----------------: | ------------: | ------------- | ------------------------ |
|  +3.0% | +40.096 MiB | 100.0% | 1.3 GiB → 1.34 GiB | 8,449 → 8,539 | `malloc_hook` | `libasyncProfiler.dylib` |

#### Improvements

Functions with the largest decrease in native bytes allocated within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

##### Native

|  Change |   Delta |            % |           Size | Samples | Function       | Location                 |
| ------: | ------: | -----------: | -------------: | ------: | -------------- | ------------------------ |
|  -87.5% | -14 KiB |        <0.1% | 16 KiB → 2 KiB |   2 → 1 | `calloc_hook`  | `libasyncProfiler.dylib` |
| removed |  -704 B | <0.1% → 0.0% |    704 B → 0 B |   3 → 0 | `realloc_hook` | `libasyncProfiler.dylib` |

#### Callers

Callers with the largest change in contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `malloc_hook` (`libasyncProfiler.dylib`)

|  Change |       Delta |     % |                Size |       Samples | Caller                                    | Location          |
| ------: | ----------: | ----: | ------------------: | ------------: | ----------------------------------------- | ----------------- |
|   +3.0% | +40.054 MiB | 99.8% |  1.3 GiB → 1.34 GiB | 8,366 → 8,475 | `os::malloc`                              | `libjvm.dylib`    |
| +142.5% | +41.617 KiB | <0.1% | 29.2 KiB → 70.8 KiB |             6 | `CCalloc`                                 | `libverify.dylib` |
|  +12.5% |     +32 KiB | <0.1% |   256 KiB → 288 KiB |         8 → 9 | `updatewindow`                            | `libzip.dylib`    |
|  -58.4% | -20.501 KiB | <0.1% | 35.1 KiB → 14.6 KiB |       25 → 11 | `Java_java_lang_ClassLoader_defineClass0` | `libjava.dylib`   |
|   -0.7% | -17.482 KiB |  0.2% |  2.42 MiB → 2.4 MiB |       38 → 32 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib`   |

##### `calloc_hook` (`libasyncProfiler.dylib`)

|  Change |   Delta |             % |         Size | Samples | Caller                       | Location          |
| ------: | ------: | ------------: | -----------: | ------: | ---------------------------- | ----------------- |
| removed | -16 KiB | 100.0% → 0.0% | 16 KiB → 0 B |   2 → 0 | `make_class_info_from_name`  | `libverify.dylib` |
|     new |  +2 KiB | 0.0% → 100.0% |  0 B → 2 KiB |   0 → 1 | `VerifyClassForMajorVersion` | `libverify.dylib` |

##### `realloc_hook` (`libasyncProfiler.dylib`)

|  Change |  Delta |             % |        Size | Samples | Caller        | Location       |
| ------: | -----: | ------------: | ----------: | ------: | ------------- | -------------- |
| removed | -704 B | 100.0% → 0.0% | 704 B → 0 B |   3 → 0 | `os::realloc` | `libjvm.dylib` |

### Total size

#### Regressions

Functions with the largest increase in native bytes allocated within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

| Change |       Delta |             % |                Size |       Samples | Function                                   | Location                  |
| -----: | ----------: | ------------: | ------------------: | ------------: | ------------------------------------------ | ------------------------- |
|  +3.0% | +40.337 MiB | 99.4% → 99.5% | 1.29 GiB → 1.33 GiB | 8,166 → 8,265 | `Compile::Compile`                         | `libjvm.dylib`            |
|  +3.0% | +40.337 MiB | 99.4% → 99.5% | 1.29 GiB → 1.33 GiB | 8,166 → 8,265 | `C2Compiler::compile_method`               | `libjvm.dylib`            |
|  +3.0% | +40.162 MiB |         99.7% |  1.3 GiB → 1.34 GiB | 8,257 → 8,349 | `JavaThread::thread_main_inner`            | `libjvm.dylib`            |
|  +3.0% | +40.146 MiB |         99.7% |  1.3 GiB → 1.34 GiB | 8,268 → 8,361 | `Thread::call_run`                         | `libjvm.dylib`            |
|  +3.0% | +40.146 MiB |         99.7% |  1.3 GiB → 1.34 GiB | 8,268 → 8,361 | `thread_native_entry`                      | `libjvm.dylib`            |
|  +3.0% | +40.146 MiB |         99.7% |  1.3 GiB → 1.34 GiB | 8,268 → 8,361 | `_pthread_start`                           | `libsystem_pthread.dylib` |
|  +3.0% | +40.146 MiB |         99.7% |  1.3 GiB → 1.34 GiB | 8,268 → 8,361 | `thread_start`                             | `libsystem_pthread.dylib` |
|  +3.0% | +40.142 MiB |         99.7% |  1.3 GiB → 1.34 GiB | 8,246 → 8,342 | `Chunk::operator new`                      | `libjvm.dylib`            |
|  +3.0% | +40.142 MiB |         99.7% |  1.3 GiB → 1.34 GiB | 8,246 → 8,342 | `Arena::grow`                              | `libjvm.dylib`            |
|  +3.0% | +40.132 MiB |         99.7% |  1.3 GiB → 1.34 GiB | 8,256 → 8,348 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib`            |
|  +3.0% |  +40.13 MiB |         99.7% |  1.3 GiB → 1.34 GiB | 8,257 → 8,348 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib`            |
|  +3.0% | +40.096 MiB |        100.0% |  1.3 GiB → 1.34 GiB | 8,449 → 8,539 | `malloc_hook`                              | `libasyncProfiler.dylib`  |
|  +3.0% | +40.054 MiB |         99.8% |  1.3 GiB → 1.34 GiB | 8,366 → 8,475 | `os::malloc`                               | `libjvm.dylib`            |
|  +3.5% | +24.943 MiB | 53.6% → 53.9% |   714 MiB → 739 MiB | 4,358 → 4,435 | `Compile::Optimize`                        | `libjvm.dylib`            |
|  +3.3% | +22.361 MiB | 50.9% → 51.1% |   678 MiB → 701 MiB | 3,855 → 3,926 | `PhaseIdealLoop::build_and_optimize`       | `libjvm.dylib`            |
|  +3.3% | +22.361 MiB | 50.9% → 51.1% |   678 MiB → 701 MiB | 3,855 → 3,926 | `PhaseIdealLoop::PhaseIdealLoop`           | `libjvm.dylib`            |
|  +3.2% | +21.839 MiB | 51.3% → 51.4% |   683 MiB → 705 MiB | 3,899 → 3,960 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib`            |
|  +5.3% |  +17.64 MiB | 25.2% → 25.7% |   335 MiB → 353 MiB | 1,767 → 1,818 | `Compile::optimize_loops`                  | `libjvm.dylib`            |
|  +2.8% | +16.563 MiB | 44.8% → 44.7% |   597 MiB → 613 MiB | 2,438 → 2,435 | `PhaseIdealLoop::Dominators`               | `libjvm.dylib`            |
|  +2.3% | +13.392 MiB | 43.7% → 43.4% |   583 MiB → 596 MiB | 3,454 → 3,483 | `Compile::Code_Gen`                        | `libjvm.dylib`            |

##### Native

|  Change |        Delta |            % |                Size |       Samples | Function                                                           | Location                  |
| ------: | -----------: | -----------: | ------------------: | ------------: | ------------------------------------------------------------------ | ------------------------- |
|   +3.0% |  +40.162 MiB |        99.7% |  1.3 GiB → 1.34 GiB | 8,257 → 8,349 | `JavaThread::thread_main_inner`                                    | `libjvm.dylib`            |
|   +3.0% |  +40.146 MiB |        99.7% |  1.3 GiB → 1.34 GiB | 8,268 → 8,361 | `Thread::call_run`                                                 | `libjvm.dylib`            |
|   +3.0% |  +40.146 MiB |        99.7% |  1.3 GiB → 1.34 GiB | 8,268 → 8,361 | `thread_native_entry`                                              | `libjvm.dylib`            |
|   +3.0% |  +40.146 MiB |        99.7% |  1.3 GiB → 1.34 GiB | 8,268 → 8,361 | `_pthread_start`                                                   | `libsystem_pthread.dylib` |
|   +3.0% |  +40.146 MiB |        99.7% |  1.3 GiB → 1.34 GiB | 8,268 → 8,361 | `thread_start`                                                     | `libsystem_pthread.dylib` |
|   +3.0% |  +40.142 MiB |        99.7% |  1.3 GiB → 1.34 GiB | 8,246 → 8,342 | `Chunk::operator new`                                              | `libjvm.dylib`            |
|   +3.0% |  +40.142 MiB |        99.7% |  1.3 GiB → 1.34 GiB | 8,246 → 8,342 | `Arena::grow`                                                      | `libjvm.dylib`            |
|   +3.0% |  +40.096 MiB |       100.0% |  1.3 GiB → 1.34 GiB | 8,449 → 8,539 | `malloc_hook`                                                      | `libasyncProfiler.dylib`  |
|   +3.0% |  +40.054 MiB |        99.8% |  1.3 GiB → 1.34 GiB | 8,366 → 8,475 | `os::malloc`                                                       | `libjvm.dylib`            |
|   +8.9% |   +9.595 MiB |  8.1% → 8.5% |   107 MiB → 117 MiB | 1,568 → 1,639 | `Arena::Arealloc`                                                  | `libjvm.dylib`            |
|  +29.1% |   +2.406 MiB |  0.6% → 0.8% | 8.28 MiB → 10.7 MiB |      97 → 110 | `Type_Array::grow`                                                 | `libjvm.dylib`            |
|  +11.8% |   +2.249 MiB |  1.4% → 1.6% | 19.1 MiB → 21.3 MiB |     328 → 326 | `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` | `libjvm.dylib`            |
|   +8.5% |   +1.375 MiB |  1.2% → 1.3% | 16.2 MiB → 17.5 MiB |     231 → 227 | `Parse::do_call`                                                   | `libjvm.dylib`            |
|   +6.6% |   +1.157 MiB |  1.3% → 1.4% | 17.5 MiB → 18.7 MiB |     253 → 242 | `Parse::do_one_block`                                              | `libjvm.dylib`            |
|  +31.6% |   +1.156 MiB |  0.3% → 0.4% | 3.66 MiB → 4.81 MiB |       55 → 68 | `Parse::do_field_access`                                           | `libjvm.dylib`            |
|   +6.2% |   +1.094 MiB |  1.3% → 1.4% | 17.6 MiB → 18.7 MiB |     254 → 242 | `Parse::do_all_blocks`                                             | `libjvm.dylib`            |
|   +6.2% |   +1.094 MiB |  1.3% → 1.4% | 17.6 MiB → 18.7 MiB |     254 → 242 | `Parse::Parse`                                                     | `libjvm.dylib`            |
|   +6.2% |   +1.094 MiB |  1.3% → 1.4% | 17.6 MiB → 18.7 MiB |     254 → 242 | `ParseGenerator::generate`                                         | `libjvm.dylib`            |
|   +9.5% |   +1.031 MiB |  0.8% → 0.9% | 10.8 MiB → 11.9 MiB |     210 → 238 | `IdealLoopTree::loop_predication`                                  | `libjvm.dylib`            |
| +152.9% | +832.125 KiB | <0.1% → 0.1% |  544 KiB → 1.34 MiB |       10 → 18 | `Parse::do_get_xxx`                                                | `libjvm.dylib`            |

#### Improvements

Functions with the largest decrease in native bytes allocated within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

| Change |        Delta |             % |                Size |       Samples | Function                                      | Location       |
| -----: | -----------: | ------------: | ------------------: | ------------: | --------------------------------------------- | -------------- |
|  -0.5% |   -2.037 MiB | 28.7% → 27.8% |   383 MiB → 381 MiB | 1,687 → 1,632 | `PhaseIFG::init`                              | `libjvm.dylib` |
|  -8.4% |   -1.344 MiB |   1.2% → 1.1% | 16.1 MiB → 14.7 MiB |     163 → 138 | `NodeHash::hash_find_insert`                  | `libjvm.dylib` |
|  -7.4% |   -1.271 MiB |   1.3% → 1.2% |   17.3 MiB → 16 MiB |     182 → 149 | `PhaseIterGVN::transform_old`                 | `libjvm.dylib` |
|  -7.4% |   -1.271 MiB |   1.3% → 1.2% |   17.3 MiB → 16 MiB |     182 → 149 | `PhaseIterGVN::optimize`                      | `libjvm.dylib` |
| -26.9% | -864.953 KiB |          0.2% |  3.14 MiB → 2.3 MiB |       39 → 27 | `PhaseCFG::build_dominator_tree`              | `libjvm.dylib` |
| -12.5% | -730.976 KiB |          0.4% |  5.7 MiB → 4.99 MiB |       92 → 82 | `PhaseCFG::do_global_code_motion`             | `libjvm.dylib` |
| -39.2% | -639.976 KiB |          0.1% |  1.59 MiB → 992 KiB |       19 → 13 | `Parse::do_if`                                | `libjvm.dylib` |
|  -8.8% | -635.062 KiB |          0.5% | 7.03 MiB → 6.41 MiB |     108 → 102 | `IdealLoopTree::iteration_split`              | `libjvm.dylib` |
| -50.0% | -576.007 KiB |  0.1% → <0.1% |  1.13 MiB → 576 KiB |        12 → 9 | `Parse::return_current`                       | `libjvm.dylib` |
| -27.4% | -544.335 KiB |          0.1% | 1.94 MiB → 1.41 MiB |       50 → 36 | `PhaseIdealLoop::build_loop_late`             | `libjvm.dylib` |
| -80.9% | -544.062 KiB |         <0.1% |   672 KiB → 128 KiB |         7 → 3 | `Parse::adjust_map_after_if`                  | `libjvm.dylib` |
| -48.5% | -512.031 KiB |  0.1% → <0.1% |  1.03 MiB → 544 KiB |        12 → 5 | `GraphKit::make_runtime_call`                 | `libjvm.dylib` |
| -39.0% | -511.984 KiB |          0.1% |  1.28 MiB → 800 KiB |        17 → 8 | `GraphKit::uncommon_trap`                     | `libjvm.dylib` |
|  -5.9% | -511.945 KiB |          0.6% |     8.5 MiB → 8 MiB |       82 → 78 | `Node::out_grow`                              | `libjvm.dylib` |
| -37.5% | -480.093 KiB |          0.1% |  1.25 MiB → 800 KiB |       22 → 16 | `PhaseIdealLoop::create_slow_version_of_loop` | `libjvm.dylib` |
| -37.5% | -480.093 KiB |          0.1% |  1.25 MiB → 800 KiB |       22 → 16 | `PhaseIdealLoop::do_unswitching`              | `libjvm.dylib` |
| -52.0% | -416.023 KiB |  0.1% → <0.1% |   800 KiB → 384 KiB |        12 → 8 | `GraphKit::set_map_clone`                     | `libjvm.dylib` |
| -48.0% | -384.062 KiB |  0.1% → <0.1% |   800 KiB → 416 KiB |         7 → 3 | `Compile::inline_incrementally`               | `libjvm.dylib` |
| -70.6% | -384.046 KiB |         <0.1% |   544 KiB → 160 KiB |         5 → 2 | `AddPNode::Ideal`                             | `libjvm.dylib` |
| -28.2% | -352.023 KiB |          0.1% |  1.22 MiB → 896 KiB |        13 → 9 | `GraphKit::set_results_for_java_call`         | `libjvm.dylib` |

##### Native

| Change |        Delta |            % |                Size |   Samples | Function                                                                 | Location       |
| -----: | -----------: | -----------: | ------------------: | --------: | ------------------------------------------------------------------------ | -------------- |
| -39.2% | -639.976 KiB |         0.1% |  1.59 MiB → 992 KiB |   19 → 13 | `Parse::do_if`                                                           | `libjvm.dylib` |
|  -8.8% | -635.062 KiB |         0.5% | 7.03 MiB → 6.41 MiB | 108 → 102 | `IdealLoopTree::iteration_split`                                         | `libjvm.dylib` |
| -50.0% | -576.007 KiB | 0.1% → <0.1% |  1.13 MiB → 576 KiB |    12 → 9 | `Parse::return_current`                                                  | `libjvm.dylib` |
| -80.9% | -544.062 KiB |        <0.1% |   672 KiB → 128 KiB |     7 → 3 | `Parse::adjust_map_after_if`                                             | `libjvm.dylib` |
|  -4.6% |     -283 KiB |  0.5% → 0.4% | 6.06 MiB → 5.78 MiB |   91 → 89 | `IdealLoopTree::iteration_split_impl`                                    | `libjvm.dylib` |
| -34.8% | -256.031 KiB | 0.1% → <0.1% |   736 KiB → 480 KiB |     8 → 6 | `SuperWord::transform_loop`                                              | `libjvm.dylib` |
| -40.0% | -256.015 KiB |        <0.1% |   640 KiB → 384 KiB |     7 → 6 | `Parse::array_addressing`                                                | `libjvm.dylib` |
| -40.0% | -256.007 KiB |        <0.1% |   640 KiB → 384 KiB |     8 → 5 | `BarrierSetC2::store_at_resolved`                                        | `libjvm.dylib` |
| -77.8% | -224.046 KiB |        <0.1% |    288 KiB → 64 KiB |     4 → 1 | `split_if`                                                               | `libjvm.dylib` |
| -70.0% | -224.015 KiB |        <0.1% |    320 KiB → 96 KiB |     3 → 2 | `GrowableArrayWithAllocator<DepMem*, GrowableArray<DepMem*>>::expand_to` | `libjvm.dylib` |
| -70.0% | -224.015 KiB |        <0.1% |    320 KiB → 96 KiB |     3 → 2 | `SuperWord::dependence_graph`                                            | `libjvm.dylib` |
| -70.0% | -224.015 KiB |        <0.1% |    320 KiB → 96 KiB |     3 → 2 | `SuperWord::SLP_extract`                                                 | `libjvm.dylib` |
| -87.5% |     -224 KiB |        <0.1% |    256 KiB → 32 KiB |         1 | `Parse::catch_inline_exceptions`                                         | `libjvm.dylib` |
| -21.2% | -223.976 KiB |         0.1% |  1.03 MiB → 832 KiB |   11 → 10 | `DirectCallGenerator::generate`                                          | `libjvm.dylib` |
| -25.0% | -191.921 KiB | 0.1% → <0.1% |   768 KiB → 576 KiB |         9 | `Parse::throw_to_exit`                                                   | `libjvm.dylib` |
| -55.6% | -160.046 KiB |        <0.1% |   288 KiB → 128 KiB |     4 → 1 | `Parse::array_store`                                                     | `libjvm.dylib` |
| -50.0% | -160.031 KiB |        <0.1% |   320 KiB → 160 KiB |     4 → 2 | `VirtualCallGenerator::generate`                                         | `libjvm.dylib` |
| -50.0% | -160.031 KiB |        <0.1% |   320 KiB → 160 KiB |     4 → 2 | `LateInlineVirtualCallGenerator::generate`                               | `libjvm.dylib` |
| -83.3% | -160.007 KiB |        <0.1% |    192 KiB → 32 KiB |     4 → 1 | `Parse::ensure_phi`                                                      | `libjvm.dylib` |
| -29.4% | -159.984 KiB |        <0.1% |   544 KiB → 384 KiB |     5 → 6 | `Parse::array_load`                                                      | `libjvm.dylib` |

#### Callers

Callers with the largest change in contribution to each function's total size. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `Compile::Compile` (`libjvm.dylib`)

| Change |       Delta |      % |                Size |       Samples | Caller                       | Location       |
| -----: | ----------: | -----: | ------------------: | ------------: | ---------------------------- | -------------- |
|  +3.0% | +40.337 MiB | 100.0% | 1.29 GiB → 1.33 GiB | 8,166 → 8,265 | `C2Compiler::compile_method` | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

| Change |       Delta |      % |                Size |       Samples | Caller                                     | Location       |
| -----: | ----------: | -----: | ------------------: | ------------: | ------------------------------------------ | -------------- |
|  +3.0% | +40.337 MiB | 100.0% | 1.29 GiB → 1.33 GiB | 8,166 → 8,265 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

| Change |       Delta |      % |               Size |       Samples | Caller             | Location       |
| -----: | ----------: | -----: | -----------------: | ------------: | ------------------ | -------------- |
|  +3.0% | +40.162 MiB | 100.0% | 1.3 GiB → 1.34 GiB | 8,257 → 8,349 | `Thread::call_run` | `libjvm.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

| Change |       Delta |      % |               Size |       Samples | Caller                | Location       |
| -----: | ----------: | -----: | -----------------: | ------------: | --------------------- | -------------- |
|  +3.0% | +40.146 MiB | 100.0% | 1.3 GiB → 1.34 GiB | 8,268 → 8,361 | `thread_native_entry` | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

| Change |       Delta |      % |               Size |       Samples | Caller           | Location                  |
| -----: | ----------: | -----: | -----------------: | ------------: | ---------------- | ------------------------- |
|  +3.0% | +40.146 MiB | 100.0% | 1.3 GiB → 1.34 GiB | 8,268 → 8,361 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `_pthread_start` (`libsystem_pthread.dylib`)

| Change |       Delta |      % |               Size |       Samples | Caller         | Location                  |
| -----: | ----------: | -----: | -----------------: | ------------: | -------------- | ------------------------- |
|  +3.0% | +40.146 MiB | 100.0% | 1.3 GiB → 1.34 GiB | 8,268 → 8,361 | `thread_start` | `libsystem_pthread.dylib` |

##### `Chunk::operator new` (`libjvm.dylib`)

| Change |       Delta |      % |               Size |       Samples | Caller        | Location       |
| -----: | ----------: | -----: | -----------------: | ------------: | ------------- | -------------- |
|  +3.0% | +40.142 MiB | 100.0% | 1.3 GiB → 1.34 GiB | 8,246 → 8,342 | `Arena::grow` | `libjvm.dylib` |

##### `Arena::grow` (`libjvm.dylib`)

| Change |       Delta |             % |                Size |       Samples | Caller                                                             | Location       |
| -----: | ----------: | ------------: | ------------------: | ------------: | ------------------------------------------------------------------ | -------------- |
|  +2.8% | +16.532 MiB | 44.9% → 44.8% |   597 MiB → 613 MiB | 2,438 → 2,434 | `PhaseIdealLoop::Dominators`                                       | `libjvm.dylib` |
|  +8.9% |  +9.595 MiB |   8.1% → 8.5% |   107 MiB → 117 MiB | 1,568 → 1,639 | `Arena::Arealloc`                                                  | `libjvm.dylib` |
|  +7.0% |  +6.777 MiB |   7.3% → 7.6% |  96.6 MiB → 103 MiB |     772 → 778 | `PhaseLive::compute`                                               | `libjvm.dylib` |
| +21.4% |  +2.895 MiB |   1.0% → 1.2% | 13.6 MiB → 16.5 MiB |     238 → 280 | `PhaseIdealLoop::build_and_optimize`                               | `libjvm.dylib` |
| +11.8% |  +2.249 MiB |   1.4% → 1.6% | 19.1 MiB → 21.3 MiB |     328 → 326 | `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

| Change |       Delta |      % |               Size |       Samples | Caller                                | Location       |
| -----: | ----------: | -----: | -----------------: | ------------: | ------------------------------------- | -------------- |
|  +3.0% | +40.132 MiB | 100.0% | 1.3 GiB → 1.34 GiB | 8,256 → 8,348 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

| Change |      Delta |      % |               Size |       Samples | Caller                          | Location       |
| -----: | ---------: | -----: | -----------------: | ------------: | ------------------------------- | -------------- |
|  +3.0% | +40.13 MiB | 100.0% | 1.3 GiB → 1.34 GiB | 8,257 → 8,348 | `JavaThread::thread_main_inner` | `libjvm.dylib` |

##### `malloc_hook` (`libasyncProfiler.dylib`)

|  Change |       Delta |     % |                Size |       Samples | Caller                                    | Location          |
| ------: | ----------: | ----: | ------------------: | ------------: | ----------------------------------------- | ----------------- |
|   +3.0% | +40.054 MiB | 99.8% |  1.3 GiB → 1.34 GiB | 8,366 → 8,475 | `os::malloc`                              | `libjvm.dylib`    |
| +142.5% | +41.617 KiB | <0.1% | 29.2 KiB → 70.8 KiB |             6 | `CCalloc`                                 | `libverify.dylib` |
|  +12.5% |     +32 KiB | <0.1% |   256 KiB → 288 KiB |         8 → 9 | `updatewindow`                            | `libzip.dylib`    |
|  -58.4% | -20.501 KiB | <0.1% | 35.1 KiB → 14.6 KiB |       25 → 11 | `Java_java_lang_ClassLoader_defineClass0` | `libjava.dylib`   |
|   -0.7% | -17.482 KiB |  0.2% |  2.42 MiB → 2.4 MiB |       38 → 32 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib`   |

##### `os::malloc` (`libjvm.dylib`)

|  Change |       Delta |     % |               Size |       Samples | Caller                      | Location       |
| ------: | ----------: | ----: | -----------------: | ------------: | --------------------------- | -------------- |
|   +3.0% | +40.142 MiB | 99.9% | 1.3 GiB → 1.34 GiB | 8,246 → 8,342 | `Chunk::operator new`       | `libjvm.dylib` |
|  -28.7% | -90.814 KiB | <0.1% |  316 KiB → 225 KiB |     104 → 116 | `AllocateHeap`              | `libjvm.dylib` |
|   +0.1% |  +1.031 KiB |  0.1% |  914 KiB → 915 KiB |         3 → 7 | `os::malloc`                | `libjvm.dylib` |
| +280.9% |  +1.031 KiB | <0.1% |    376 B → 1.4 KiB |         2 → 6 | `JvmtiEnv::GetClassMethods` | `libjvm.dylib` |
|  -25.0% |      -240 B | <0.1% |      960 B → 720 B |        12 → 9 | `AnyObj::operator new`      | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

| Change |       Delta |      % |              Size |       Samples | Caller             | Location       |
| -----: | ----------: | -----: | ----------------: | ------------: | ------------------ | -------------- |
|  +3.5% | +24.943 MiB | 100.0% | 714 MiB → 739 MiB | 4,358 → 4,435 | `Compile::Compile` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

| Change |       Delta |      % |              Size |       Samples | Caller                           | Location       |
| -----: | ----------: | -----: | ----------------: | ------------: | -------------------------------- | -------------- |
|  +3.3% | +22.361 MiB | 100.0% | 678 MiB → 701 MiB | 3,855 → 3,926 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

| Change |       Delta |      % |              Size |       Samples | Caller                     | Location       |
| -----: | ----------: | -----: | ----------------: | ------------: | -------------------------- | -------------- |
|  +3.3% | +22.361 MiB | 100.0% | 678 MiB → 701 MiB | 3,855 → 3,926 | `PhaseIdealLoop::optimize` | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

| Change |      Delta |             % |              Size |       Samples | Caller                    | Location       |
| -----: | ---------: | ------------: | ----------------: | ------------: | ------------------------- | -------------- |
|  +5.3% | +17.64 MiB | 49.1% → 50.1% | 335 MiB → 353 MiB | 1,767 → 1,818 | `Compile::optimize_loops` | `libjvm.dylib` |
|  +1.2% | +4.198 MiB | 50.9% → 49.9% | 347 MiB → 351 MiB | 2,132 → 2,142 | `Compile::Optimize`       | `libjvm.dylib` |

##### `Compile::optimize_loops` (`libjvm.dylib`)

| Change |      Delta |      % |              Size |       Samples | Caller              | Location       |
| -----: | ---------: | -----: | ----------------: | ------------: | ------------------- | -------------- |
|  +5.3% | +17.64 MiB | 100.0% | 335 MiB → 353 MiB | 1,767 → 1,818 | `Compile::Optimize` | `libjvm.dylib` |

##### `PhaseIdealLoop::Dominators` (`libjvm.dylib`)

| Change |       Delta |      % |              Size |       Samples | Caller                               | Location       |
| -----: | ----------: | -----: | ----------------: | ------------: | ------------------------------------ | -------------- |
|  +2.8% | +16.563 MiB | 100.0% | 597 MiB → 613 MiB | 2,438 → 2,435 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

| Change |       Delta |      % |              Size |       Samples | Caller             | Location       |
| -----: | ----------: | -----: | ----------------: | ------------: | ------------------ | -------------- |
|  +2.3% | +13.392 MiB | 100.0% | 583 MiB → 596 MiB | 3,454 → 3,483 | `Compile::Compile` | `libjvm.dylib` |

##### `Arena::Arealloc` (`libjvm.dylib`)

| Change |        Delta |             % |                Size |   Samples | Caller                                 | Location       |
| -----: | -----------: | ------------: | ------------------: | --------: | -------------------------------------- | -------------- |
|  +7.2% |   +4.406 MiB | 57.1% → 56.2% | 61.2 MiB → 65.6 MiB | 951 → 991 | `Node_Array::grow`                     | `libjvm.dylib` |
| +29.1% |   +2.406 MiB |   7.7% → 9.1% | 8.28 MiB → 10.7 MiB |  97 → 110 | `Type_Array::grow`                     | `libjvm.dylib` |
| +88.0% |   +1.844 MiB |   2.0% → 3.4% | 2.09 MiB → 3.94 MiB |   36 → 54 | `PhaseCFG::build_cfg`                  | `libjvm.dylib` |
| +36.0% | +576.093 KiB |   1.5% → 1.8% | 1.56 MiB → 2.13 MiB |   29 → 35 | `PhaseRenumberLive::PhaseRenumberLive` | `libjvm.dylib` |
|  +8.3% | +480.101 KiB |   5.3% → 5.2% | 5.66 MiB → 6.13 MiB |   58 → 62 | `PhaseGVN::transform_no_reclaim`       | `libjvm.dylib` |

##### `Type_Array::grow` (`libjvm.dylib`)

| Change |        Delta |             % |                Size | Samples | Caller                         | Location       |
| -----: | -----------: | ------------: | ------------------: | ------: | ------------------------------ | -------------- |
| +86.5% |       +1 MiB | 14.0% → 20.2% | 1.16 MiB → 2.16 MiB | 13 → 21 | `IdealKit::delay_transform`    | `libjvm.dylib` |
| +50.0% | +928.062 KiB | 21.9% → 25.4% | 1.81 MiB → 2.72 MiB | 26 → 30 | `PhaseValues::set_type_bottom` | `libjvm.dylib` |
| +85.7% | +768.031 KiB | 10.6% → 15.2% |  896 KiB → 1.63 MiB | 10 → 12 | `Parse::build_exits`           | `libjvm.dylib` |
| +30.0% | +479.968 KiB | 18.9% → 19.0% | 1.56 MiB → 2.03 MiB | 21 → 19 | `GraphKit::clone_map`          | `libjvm.dylib` |
| -52.4% |     -352 KiB |   7.9% → 2.9% |   672 KiB → 320 KiB |       5 | `Parse::return_current`        | `libjvm.dylib` |

##### `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` (`libjvm.dylib`)

| Change |       Delta |             % |                Size |   Samples | Caller                                               | Location       |
| -----: | ----------: | ------------: | ------------------: | --------: | ---------------------------------------------------- | -------------- |
| +12.4% |  +2.343 MiB | 99.3% → 99.9% | 18.9 MiB → 21.3 MiB | 326 → 325 | `PhaseIdealLoop::build_and_optimize`                 | `libjvm.dylib` |
| -75.0% | -96.015 KiB |   0.7% → 0.1% |    128 KiB → 32 KiB |     2 → 1 | `PhaseIdealLoop::dom_lca_for_get_late_ctrl_internal` | `libjvm.dylib` |

##### `Parse::do_call` (`libjvm.dylib`)

| Change |      Delta |      % |                Size |   Samples | Caller                | Location       |
| -----: | ---------: | -----: | ------------------: | --------: | --------------------- | -------------- |
|  +8.5% | +1.375 MiB | 100.0% | 16.2 MiB → 17.5 MiB | 231 → 227 | `Parse::do_one_block` | `libjvm.dylib` |

##### `Parse::do_one_block` (`libjvm.dylib`)

| Change |      Delta |      % |                Size |   Samples | Caller                 | Location       |
| -----: | ---------: | -----: | ------------------: | --------: | ---------------------- | -------------- |
|  +6.6% | +1.157 MiB | 100.0% | 17.5 MiB → 18.7 MiB | 253 → 242 | `Parse::do_all_blocks` | `libjvm.dylib` |

##### `Parse::do_field_access` (`libjvm.dylib`)

| Change |      Delta |      % |                Size | Samples | Caller                | Location       |
| -----: | ---------: | -----: | ------------------: | ------: | --------------------- | -------------- |
| +31.6% | +1.156 MiB | 100.0% | 3.66 MiB → 4.81 MiB | 55 → 68 | `Parse::do_one_block` | `libjvm.dylib` |

##### `Parse::do_all_blocks` (`libjvm.dylib`)

| Change |      Delta |      % |                Size |   Samples | Caller         | Location       |
| -----: | ---------: | -----: | ------------------: | --------: | -------------- | -------------- |
|  +6.2% | +1.094 MiB | 100.0% | 17.6 MiB → 18.7 MiB | 254 → 242 | `Parse::Parse` | `libjvm.dylib` |

##### `Parse::Parse` (`libjvm.dylib`)

| Change |      Delta |      % |                Size |   Samples | Caller                     | Location       |
| -----: | ---------: | -----: | ------------------: | --------: | -------------------------- | -------------- |
|  +6.2% | +1.094 MiB | 100.0% | 17.6 MiB → 18.7 MiB | 254 → 242 | `ParseGenerator::generate` | `libjvm.dylib` |

##### `ParseGenerator::generate` (`libjvm.dylib`)

|  Change |        Delta |             % |                Size |   Samples | Caller                                 | Location       |
| ------: | -----------: | ------------: | ------------------: | --------: | -------------------------------------- | -------------- |
|   +6.9% |   +1.188 MiB | 98.4% → 99.0% | 17.3 MiB → 18.5 MiB | 249 → 240 | `Compile::Compile`                     | `libjvm.dylib` |
|   +7.0% | +896.445 KiB | 71.5% → 72.0% | 12.6 MiB → 13.4 MiB | 160 → 161 | `Parse::do_call`                       | `libjvm.dylib` |
|   +3.5% | +448.703 KiB | 70.6% → 68.8% | 12.4 MiB → 12.8 MiB | 179 → 164 | `PredictedCallGenerator::generate`     | `libjvm.dylib` |
| removed |  -32.015 KiB |   0.2% → 0.0% |        32 KiB → 0 B |     1 → 0 | `CallGenerator::do_late_inline_helper` | `libjvm.dylib` |

##### `IdealLoopTree::loop_predication` (`libjvm.dylib`)

| Change |        Delta |             % |                Size |   Samples | Caller                               | Location       |
| -----: | -----------: | ------------: | ------------------: | --------: | ------------------------------------ | -------------- |
|  +9.5% |   +1.031 MiB |        100.0% | 10.8 MiB → 11.9 MiB | 210 → 238 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |
|  -4.7% | -255.984 KiB | 49.3% → 42.9% |  5.35 MiB → 5.1 MiB |   91 → 97 | `IdealLoopTree::loop_predication`    | `libjvm.dylib` |

##### `Parse::do_get_xxx` (`libjvm.dylib`)

|  Change |        Delta |      % |               Size | Samples | Caller                   | Location       |
| ------: | -----------: | -----: | -----------------: | ------: | ------------------------ | -------------- |
| +152.9% | +832.125 KiB | 100.0% | 544 KiB → 1.34 MiB | 10 → 18 | `Parse::do_field_access` | `libjvm.dylib` |

##### `PhaseIFG::init` (`libjvm.dylib`)

| Change |      Delta |      % |              Size |       Samples | Caller                            | Location       |
| -----: | ---------: | -----: | ----------------: | ------------: | --------------------------------- | -------------- |
|  -0.5% | -2.037 MiB | 100.0% | 383 MiB → 381 MiB | 1,687 → 1,632 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `NodeHash::hash_find_insert` (`libjvm.dylib`)

|  Change |       Delta |             % |                Size |   Samples | Caller                                        | Location       |
| ------: | ----------: | ------------: | ------------------: | --------: | --------------------------------------------- | -------------- |
|   -7.7% |  -1.156 MiB | 94.0% → 94.7% | 15.1 MiB → 13.9 MiB | 147 → 124 | `PhaseIterGVN::transform_old`                 | `libjvm.dylib` |
|  -33.3% | -64.015 KiB |   1.2% → 0.8% |   192 KiB → 128 KiB |     2 → 1 | `PhaseIdealLoop::fix_body_edges`              | `libjvm.dylib` |
| removed | -64.015 KiB |   0.4% → 0.0% |        64 KiB → 0 B |     1 → 0 | `find_or_make_integer_cast`                   | `libjvm.dylib` |
|  -50.0% |     -64 KiB |   0.8% → 0.4% |    128 KiB → 64 KiB |         1 | `PhaseIdealLoop::clone_loop_handle_data_uses` | `libjvm.dylib` |
|  +33.3% | +31.984 KiB |   0.6% → 0.8% |    96 KiB → 128 KiB |     2 → 1 | `PhaseValues::uncached_makecon`               | `libjvm.dylib` |

##### `PhaseIterGVN::transform_old` (`libjvm.dylib`)

|  Change |        Delta |           % |              Size |   Samples | Caller                         | Location       |
| ------: | -----------: | ----------: | ----------------: | --------: | ------------------------------ | -------------- |
|   -7.4% |   -1.271 MiB |      100.0% | 17.3 MiB → 16 MiB | 182 → 149 | `PhaseIterGVN::optimize`       | `libjvm.dylib` |
| removed | -288.031 KiB | 1.6% → 0.0% |     288 KiB → 0 B |     2 → 0 | `AddPNode::Ideal`              | `libjvm.dylib` |
| removed | -256.015 KiB | 1.4% → 0.0% |     256 KiB → 0 B |     1 → 0 | `Conv2BNode::Ideal`            | `libjvm.dylib` |
| removed | -128.015 KiB | 0.7% → 0.0% |     128 KiB → 0 B |     1 → 0 | `IfNode::fold_compares_helper` | `libjvm.dylib` |
| +200.0% | +128.015 KiB | 0.4% → 1.2% |  64 KiB → 192 KiB |     1 → 2 | `IfNode::Ideal_common`         | `libjvm.dylib` |

##### `PhaseIterGVN::optimize` (`libjvm.dylib`)

| Change |        Delta |             % |                Size | Samples | Caller                                  | Location       |
| -----: | -----------: | ------------: | ------------------: | ------: | --------------------------------------- | -------------- |
| -22.0% | -576.093 KiB | 14.8% → 12.5% |    2.56 MiB → 2 MiB | 29 → 23 | `PhaseMacroExpand::expand_macro_nodes`  | `libjvm.dylib` |
| -12.0% | -534.156 KiB | 25.0% → 23.8% | 4.33 MiB → 3.81 MiB | 44 → 34 | `PhaseIdealLoop::optimize`              | `libjvm.dylib` |
| -84.6% | -352.031 KiB |   2.3% → 0.4% |    416 KiB → 64 KiB |   3 → 1 | `Compile::remove_speculative_types`     | `libjvm.dylib` |
|  +1.7% | +159.765 KiB | 52.2% → 57.3% | 9.03 MiB → 9.19 MiB | 99 → 84 | `Compile::Optimize`                     | `libjvm.dylib` |
| -11.1% |  -32.015 KiB |          1.6% |   288 KiB → 256 KiB |   2 → 1 | `Compile::inline_incrementally_cleanup` | `libjvm.dylib` |

##### `PhaseCFG::build_dominator_tree` (`libjvm.dylib`)

| Change |        Delta |      % |               Size | Samples | Caller                            | Location       |
| -----: | -----------: | -----: | -----------------: | ------: | --------------------------------- | -------------- |
| -26.9% | -864.953 KiB | 100.0% | 3.14 MiB → 2.3 MiB | 39 → 27 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |

##### `PhaseCFG::do_global_code_motion` (`libjvm.dylib`)

| Change |        Delta |      % |               Size | Samples | Caller              | Location       |
| -----: | -----------: | -----: | -----------------: | ------: | ------------------- | -------------- |
| -12.5% | -730.976 KiB | 100.0% | 5.7 MiB → 4.99 MiB | 92 → 82 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `Parse::do_if` (`libjvm.dylib`)

| Change |        Delta |      % |               Size | Samples | Caller                | Location       |
| -----: | -----------: | -----: | -----------------: | ------: | --------------------- | -------------- |
| -39.2% | -639.976 KiB | 100.0% | 1.59 MiB → 992 KiB | 19 → 13 | `Parse::do_one_block` | `libjvm.dylib` |

##### `IdealLoopTree::iteration_split` (`libjvm.dylib`)

| Change |        Delta |             % |                Size |   Samples | Caller                               | Location       |
| -----: | -----------: | ------------: | ------------------: | --------: | ------------------------------------ | -------------- |
|  -8.8% | -635.062 KiB |        100.0% | 7.03 MiB → 6.41 MiB | 108 → 102 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |
|  -5.3% |     -347 KiB | 90.2% → 93.7% |    6.34 MiB → 6 MiB |   96 → 94 | `IdealLoopTree::iteration_split`     | `libjvm.dylib` |

##### `Parse::return_current` (`libjvm.dylib`)

| Change |        Delta |      % |               Size | Samples | Caller                | Location       |
| -----: | -----------: | -----: | -----------------: | ------: | --------------------- | -------------- |
| -50.0% | -576.007 KiB | 100.0% | 1.13 MiB → 576 KiB |  12 → 9 | `Parse::do_one_block` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late` (`libjvm.dylib`)

| Change |        Delta |      % |                Size | Samples | Caller                               | Location       |
| -----: | -----------: | -----: | ------------------: | ------: | ------------------------------------ | -------------- |
| -27.4% | -544.335 KiB | 100.0% | 1.94 MiB → 1.41 MiB | 50 → 36 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Parse::adjust_map_after_if` (`libjvm.dylib`)

|  Change |        Delta |             % |          Size | Samples | Caller             | Location       |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------ | -------------- |
| removed | -672.109 KiB | 100.0% → 0.0% | 672 KiB → 0 B |   7 → 0 | `Parse::do_if`     | `libjvm.dylib` |
|     new | +128.046 KiB | 0.0% → 100.0% | 0 B → 128 KiB |   0 → 3 | `Parse::do_ifnull` | `libjvm.dylib` |

##### `GraphKit::make_runtime_call` (`libjvm.dylib`)

| Change |        Delta |      % |               Size | Samples | Caller                    | Location       |
| -----: | -----------: | -----: | -----------------: | ------: | ------------------------- | -------------- |
| -48.5% | -512.031 KiB | 100.0% | 1.03 MiB → 544 KiB |  12 → 5 | `GraphKit::uncommon_trap` | `libjvm.dylib` |

##### `GraphKit::uncommon_trap` (`libjvm.dylib`)

|  Change |        Delta |            % |             Size | Samples | Caller                                   | Location       |
| ------: | -----------: | -----------: | ---------------: | ------: | ---------------------------------------- | -------------- |
| removed | -512.062 KiB | 39.0% → 0.0% |    512 KiB → 0 B |   4 → 0 | `Parse::adjust_map_after_if`             | `libjvm.dylib` |
| +550.2% | +352.054 KiB | 4.9% → 52.0% | 64 KiB → 416 KiB |   2 → 3 | `GraphKit::maybe_cast_profiled_receiver` | `libjvm.dylib` |
| removed | -128.015 KiB |  9.8% → 0.0% |    128 KiB → 0 B |   1 → 0 | `PhaseStringOpts::replace_string_concat` | `libjvm.dylib` |
| removed | -128.015 KiB |  9.8% → 0.0% |    128 KiB → 0 B |   1 → 0 | `Parse::array_addressing`                | `libjvm.dylib` |
| removed |  -95.992 KiB |  7.3% → 0.0% |     96 KiB → 0 B |   2 → 0 | `GraphKit::add_parse_predicate`          | `libjvm.dylib` |

##### `Node::out_grow` (`libjvm.dylib`)

|  Change |        Delta |             % |                Size | Samples | Caller                                | Location       |
| ------: | -----------: | ------------: | ------------------: | ------: | ------------------------------------- | -------------- |
|   -5.7% | -480.031 KiB | 97.1% → 97.3% | 8.25 MiB → 7.78 MiB | 74 → 72 | `Matcher::xform`                      | `libjvm.dylib` |
|     new |  +96.007 KiB |   0.0% → 1.2% |        0 B → 96 KiB |   0 → 3 | `Node::set_req_X`                     | `libjvm.dylib` |
| removed |  -63.953 KiB |   0.7% → 0.0% |        64 KiB → 0 B |   2 → 0 | `MergeMemNode::set_base_memory`       | `libjvm.dylib` |
| removed |  -31.976 KiB |   0.4% → 0.0% |        32 KiB → 0 B |   1 → 0 | `Parse::throw_to_exit`                | `libjvm.dylib` |
| removed |  -31.976 KiB |   0.4% → 0.0% |        32 KiB → 0 B |   1 → 0 | `GraphKit::set_output_for_allocation` | `libjvm.dylib` |

##### `PhaseIdealLoop::create_slow_version_of_loop` (`libjvm.dylib`)

| Change |        Delta |      % |               Size | Samples | Caller                           | Location       |
| -----: | -----------: | -----: | -----------------: | ------: | -------------------------------- | -------------- |
| -37.5% | -480.093 KiB | 100.0% | 1.25 MiB → 800 KiB | 22 → 16 | `PhaseIdealLoop::do_unswitching` | `libjvm.dylib` |

##### `PhaseIdealLoop::do_unswitching` (`libjvm.dylib`)

| Change |        Delta |             % |              Size | Samples | Caller                                | Location       |
| -----: | -----------: | ------------: | ----------------: | ------: | ------------------------------------- | -------------- |
| -35.5% | -352.062 KiB | 77.5% → 80.0% | 992 KiB → 640 KiB | 17 → 13 | `IdealLoopTree::iteration_split`      | `libjvm.dylib` |
| -44.4% | -128.031 KiB | 22.5% → 20.0% | 288 KiB → 160 KiB |   5 → 3 | `IdealLoopTree::iteration_split_impl` | `libjvm.dylib` |

##### `GraphKit::set_map_clone` (`libjvm.dylib`)

| Change |        Delta |             % |              Size | Samples | Caller                 | Location       |
| -----: | -----------: | ------------: | ----------------: | ------: | ---------------------- | -------------- |
| -76.5% | -416.078 KiB | 68.0% → 33.3% | 544 KiB → 128 KiB |   8 → 3 | `Parse::Parse`         | `libjvm.dylib` |
|    ~0% |        +56 B | 32.0% → 66.7% |           256 KiB |   4 → 5 | `Parse::throw_to_exit` | `libjvm.dylib` |

##### `Compile::inline_incrementally` (`libjvm.dylib`)

| Change |        Delta |      % |              Size | Samples | Caller              | Location       |
| -----: | -----------: | -----: | ----------------: | ------: | ------------------- | -------------- |
| -48.0% | -384.062 KiB | 100.0% | 800 KiB → 416 KiB |   7 → 3 | `Compile::Optimize` | `libjvm.dylib` |

##### `AddPNode::Ideal` (`libjvm.dylib`)

|  Change |        Delta |              % |              Size | Samples | Caller                           | Location       |
| ------: | -----------: | -------------: | ----------------: | ------: | -------------------------------- | -------------- |
| removed | -352.046 KiB |   64.7% → 0.0% |     352 KiB → 0 B |   3 → 0 | `PhaseIterGVN::transform_old`    | `libjvm.dylib` |
|  -16.7% |      -32 KiB | 35.3% → 100.0% | 192 KiB → 160 KiB |       2 | `PhaseGVN::transform_no_reclaim` | `libjvm.dylib` |

##### `GraphKit::set_results_for_java_call` (`libjvm.dylib`)

| Change |        Delta |             % |              Size | Samples | Caller                           | Location       |
| -----: | -----------: | ------------: | ----------------: | ------: | -------------------------------- | -------------- |
| -22.6% | -223.992 KiB | 79.5% → 85.7% | 992 KiB → 768 KiB |  10 → 8 | `DirectCallGenerator::generate`  | `libjvm.dylib` |
| -50.0% | -128.031 KiB | 20.5% → 14.3% | 256 KiB → 128 KiB |   3 → 1 | `VirtualCallGenerator::generate` | `libjvm.dylib` |

##### `IdealLoopTree::iteration_split_impl` (`libjvm.dylib`)

| Change |    Delta |      % |                Size | Samples | Caller                           | Location       |
| -----: | -------: | -----: | ------------------: | ------: | -------------------------------- | -------------- |
|  -4.6% | -283 KiB | 100.0% | 6.06 MiB → 5.78 MiB | 91 → 89 | `IdealLoopTree::iteration_split` | `libjvm.dylib` |

##### `SuperWord::transform_loop` (`libjvm.dylib`)

| Change |        Delta |      % |              Size | Samples | Caller                               | Location       |
| -----: | -----------: | -----: | ----------------: | ------: | ------------------------------------ | -------------- |
| -34.8% | -256.031 KiB | 100.0% | 736 KiB → 480 KiB |   8 → 6 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Parse::array_addressing` (`libjvm.dylib`)

|  Change |        Delta |              % |              Size | Samples | Caller               | Location       |
| ------: | -----------: | -------------: | ----------------: | ------: | -------------------- | -------------- |
| removed | -224.046 KiB |   35.0% → 0.0% |     224 KiB → 0 B |   3 → 0 | `Parse::array_store` | `libjvm.dylib` |
|   -7.7% |  -31.968 KiB | 65.0% → 100.0% | 416 KiB → 384 KiB |   4 → 6 | `Parse::array_load`  | `libjvm.dylib` |

##### `BarrierSetC2::store_at_resolved` (`libjvm.dylib`)

|  Change |        Delta |              % |              Size | Samples | Caller                                  | Location       |
| ------: | -----------: | -------------: | ----------------: | ------: | --------------------------------------- | -------------- |
| removed | -416.046 KiB |   65.0% → 0.0% |     416 KiB → 0 B |   3 → 0 | `BarrierSetC2::store_at`                | `libjvm.dylib` |
|  +71.4% | +160.039 KiB | 35.0% → 100.0% | 224 KiB → 384 KiB |       5 | `ModRefBarrierSetC2::store_at_resolved` | `libjvm.dylib` |

##### `split_if` (`libjvm.dylib`)

| Change |        Delta |      % |             Size | Samples | Caller                 | Location       |
| -----: | -----------: | -----: | ---------------: | ------: | ---------------------- | -------------- |
| -77.8% | -224.046 KiB | 100.0% | 288 KiB → 64 KiB |   4 → 1 | `IfNode::Ideal_common` | `libjvm.dylib` |

##### `GrowableArrayWithAllocator<DepMem*, GrowableArray<DepMem*>>::expand_to` (`libjvm.dylib`)

| Change |        Delta |      % |             Size | Samples | Caller                        | Location       |
| -----: | -----------: | -----: | ---------------: | ------: | ----------------------------- | -------------- |
| -70.0% | -224.015 KiB | 100.0% | 320 KiB → 96 KiB |   3 → 2 | `SuperWord::dependence_graph` | `libjvm.dylib` |

##### `SuperWord::dependence_graph` (`libjvm.dylib`)

| Change |        Delta |      % |             Size | Samples | Caller                   | Location       |
| -----: | -----------: | -----: | ---------------: | ------: | ------------------------ | -------------- |
| -70.0% | -224.015 KiB | 100.0% | 320 KiB → 96 KiB |   3 → 2 | `SuperWord::SLP_extract` | `libjvm.dylib` |

##### `SuperWord::SLP_extract` (`libjvm.dylib`)

| Change |        Delta |      % |             Size | Samples | Caller                      | Location       |
| -----: | -----------: | -----: | ---------------: | ------: | --------------------------- | -------------- |
| -70.0% | -224.015 KiB | 100.0% | 320 KiB → 96 KiB |   3 → 2 | `SuperWord::transform_loop` | `libjvm.dylib` |

##### `Parse::catch_inline_exceptions` (`libjvm.dylib`)

| Change |    Delta |      % |             Size | Samples | Caller                 | Location       |
| -----: | -------: | -----: | ---------------: | ------: | ---------------------- | -------------- |
| -87.5% | -224 KiB | 100.0% | 256 KiB → 32 KiB |       1 | `Parse::do_exceptions` | `libjvm.dylib` |

##### `DirectCallGenerator::generate` (`libjvm.dylib`)

| Change |        Delta |             % |              Size | Samples | Caller                                | Location       |
| -----: | -----------: | ------------: | ----------------: | ------: | ------------------------------------- | -------------- |
| -34.5% | -320.015 KiB | 87.9% → 73.1% | 928 KiB → 608 KiB |   8 → 7 | `PredictedCallGenerator::generate`    | `libjvm.dylib` |
|    new |  +64.015 KiB |   0.0% → 7.7% |      0 B → 64 KiB |   0 → 1 | `LateInlineMHCallGenerator::generate` | `libjvm.dylib` |
| +25.0% |  +32.023 KiB | 12.1% → 19.2% | 128 KiB → 160 KiB |   3 → 2 | `Parse::do_call`                      | `libjvm.dylib` |

##### `Parse::throw_to_exit` (`libjvm.dylib`)

|  Change |        Delta |              % |              Size | Samples | Caller                           | Location       |
| ------: | -----------: | -------------: | ----------------: | ------: | -------------------------------- | -------------- |
| removed | -256.015 KiB |   33.3% → 0.0% |     256 KiB → 0 B |   1 → 0 | `Parse::catch_inline_exceptions` | `libjvm.dylib` |
|  +12.5% |  +64.093 KiB | 66.7% → 100.0% | 512 KiB → 576 KiB |   8 → 9 | `Parse::do_exceptions`           | `libjvm.dylib` |

##### `Parse::array_store` (`libjvm.dylib`)

| Change |        Delta |      % |              Size | Samples | Caller                | Location       |
| -----: | -----------: | -----: | ----------------: | ------: | --------------------- | -------------- |
| -55.6% | -160.046 KiB | 100.0% | 288 KiB → 128 KiB |   4 → 1 | `Parse::do_one_block` | `libjvm.dylib` |

##### `VirtualCallGenerator::generate` (`libjvm.dylib`)

| Change |        Delta |      % |              Size | Samples | Caller                                     | Location       |
| -----: | -----------: | -----: | ----------------: | ------: | ------------------------------------------ | -------------- |
| -50.0% | -160.031 KiB | 100.0% | 320 KiB → 160 KiB |   4 → 2 | `LateInlineVirtualCallGenerator::generate` | `libjvm.dylib` |

##### `LateInlineVirtualCallGenerator::generate` (`libjvm.dylib`)

|  Change |       Delta |              % |              Size | Samples | Caller                             | Location       |
| ------: | ----------: | -------------: | ----------------: | ------: | ---------------------------------- | -------------- |
|  -37.5% | -96.015 KiB | 80.0% → 100.0% | 256 KiB → 160 KiB |   3 → 2 | `Parse::do_call`                   | `libjvm.dylib` |
| removed | -64.015 KiB |   20.0% → 0.0% |      64 KiB → 0 B |   1 → 0 | `PredictedCallGenerator::generate` | `libjvm.dylib` |

##### `Parse::ensure_phi` (`libjvm.dylib`)

|  Change |       Delta |              % |             Size | Samples | Caller                          | Location       |
| ------: | ----------: | -------------: | ---------------: | ------: | ------------------------------- | -------------- |
|  -75.0% | -95.992 KiB | 66.7% → 100.0% | 128 KiB → 32 KiB |   3 → 1 | `Parse::merge_common`           | `libjvm.dylib` |
| removed | -64.015 KiB |   33.3% → 0.0% |     64 KiB → 0 B |   1 → 0 | `Parse::ensure_phis_everywhere` | `libjvm.dylib` |

##### `Parse::array_load` (`libjvm.dylib`)

| Change |        Delta |      % |              Size | Samples | Caller                | Location       |
| -----: | -----------: | -----: | ----------------: | ------: | --------------------- | -------------- |
| -29.4% | -159.984 KiB | 100.0% | 544 KiB → 384 KiB |   5 → 6 | `Parse::do_one_block` | `libjvm.dylib` |

#### Callees

Callees with the largest change in contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `Compile::Compile` (`libjvm.dylib`)

|  Change |        Delta |             % |                Size |       Samples | Callee                                   | Location       |
| ------: | -----------: | ------------: | ------------------: | ------------: | ---------------------------------------- | -------------- |
|   +3.5% |  +24.943 MiB | 53.9% → 54.2% |   714 MiB → 739 MiB | 4,358 → 4,435 | `Compile::Optimize`                      | `libjvm.dylib` |
|   +2.3% |  +13.392 MiB | 44.0% → 43.7% |   583 MiB → 596 MiB | 3,454 → 3,483 | `Compile::Code_Gen`                      | `libjvm.dylib` |
|   +6.9% |   +1.188 MiB |   1.3% → 1.4% | 17.3 MiB → 18.5 MiB |     249 → 240 | `ParseGenerator::generate`               | `libjvm.dylib` |
|  +16.4% |   +1.156 MiB |   0.5% → 0.6% | 7.06 MiB → 8.22 MiB |       70 → 76 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |
| removed | -128.015 KiB |  <0.1% → 0.0% |       128 KiB → 0 B |         1 → 0 | `Compile::return_values`                 | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

| Change |       Delta |      % |                Size |       Samples | Callee             | Location       |
| -----: | ----------: | -----: | ------------------: | ------------: | ------------------ | -------------- |
|  +3.0% | +40.337 MiB | 100.0% | 1.29 GiB → 1.33 GiB | 8,166 → 8,265 | `Compile::Compile` | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

| Change |      Delta |            % |               Size |       Samples | Callee                                | Location       |
| -----: | ---------: | -----------: | -----------------: | ------------: | ------------------------------------- | -------------- |
|  +3.0% | +40.13 MiB |       100.0% | 1.3 GiB → 1.34 GiB | 8,257 → 8,348 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |
|    new |    +32 KiB | 0.0% → <0.1% |       0 B → 32 KiB |         0 → 1 | `ServiceThread::service_thread_entry` | `libjvm.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

| Change |       Delta |            % |                Size |       Samples | Callee                          | Location       |
| -----: | ----------: | -----------: | ------------------: | ------------: | ------------------------------- | -------------- |
|  +3.0% | +40.162 MiB |       100.0% |  1.3 GiB → 1.34 GiB | 8,257 → 8,349 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
| -91.7% | -32.632 KiB |        <0.1% | 35.6 KiB → 2.95 KiB |         6 → 4 | `WorkerThread::run`             | `libjvm.dylib` |
| +21.1% |  +8.445 KiB |        <0.1% |   40 KiB → 48.4 KiB |         5 → 7 | `VMThread::run`                 | `libjvm.dylib` |
|    new |      +8 KiB | 0.0% → <0.1% |         0 B → 8 KiB |         0 → 1 | `ConcurrentGCThread::run`       | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

| Change |       Delta |      % |               Size |       Samples | Callee             | Location       |
| -----: | ----------: | -----: | -----------------: | ------------: | ------------------ | -------------- |
|  +3.0% | +40.146 MiB | 100.0% | 1.3 GiB → 1.34 GiB | 8,268 → 8,361 | `Thread::call_run` | `libjvm.dylib` |

##### `_pthread_start` (`libsystem_pthread.dylib`)

| Change |       Delta |      % |               Size |       Samples | Callee                | Location       |
| -----: | ----------: | -----: | -----------------: | ------------: | --------------------- | -------------- |
|  +3.0% | +40.146 MiB | 100.0% | 1.3 GiB → 1.34 GiB | 8,268 → 8,361 | `thread_native_entry` | `libjvm.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

| Change |       Delta |      % |               Size |       Samples | Callee           | Location                  |
| -----: | ----------: | -----: | -----------------: | ------------: | ---------------- | ------------------------- |
|  +3.0% | +40.146 MiB | 100.0% | 1.3 GiB → 1.34 GiB | 8,268 → 8,361 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `Chunk::operator new` (`libjvm.dylib`)

| Change |       Delta |      % |               Size |       Samples | Callee       | Location       |
| -----: | ----------: | -----: | -----------------: | ------------: | ------------ | -------------- |
|  +3.0% | +40.142 MiB | 100.0% | 1.3 GiB → 1.34 GiB | 8,246 → 8,342 | `os::malloc` | `libjvm.dylib` |

##### `Arena::grow` (`libjvm.dylib`)

| Change |       Delta |      % |               Size |       Samples | Callee                | Location       |
| -----: | ----------: | -----: | -----------------: | ------------: | --------------------- | -------------- |
|  +3.0% | +40.142 MiB | 100.0% | 1.3 GiB → 1.34 GiB | 8,246 → 8,342 | `Chunk::operator new` | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|  Change |        Delta |            % |                Size |       Samples | Callee                        | Location       |
| ------: | -----------: | -----------: | ------------------: | ------------: | ----------------------------- | -------------- |
|   +3.0% |  +40.337 MiB |        99.8% | 1.29 GiB → 1.33 GiB | 8,166 → 8,265 | `C2Compiler::compile_method`  | `libjvm.dylib` |
|   -4.5% | -145.507 KiB |         0.2% |    3.14 MiB → 3 MiB |       87 → 83 | `Compiler::compile_method`    | `libjvm.dylib` |
| removed |  -63.953 KiB | <0.1% → 0.0% |        64 KiB → 0 B |         2 → 0 | `ciEnv::ciEnv`                | `libjvm.dylib` |
| removed |         -7 B | <0.1% → 0.0% |           7 B → 0 B |         1 → 0 | `CompilationLog::log_compile` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|  Change |       Delta |            % |               Size |       Samples | Callee                                         | Location       |
| ------: | ----------: | -----------: | -----------------: | ------------: | ---------------------------------------------- | -------------- |
|   +3.0% | +40.132 MiB |       100.0% | 1.3 GiB → 1.34 GiB | 8,256 → 8,348 | `CompileBroker::invoke_compiler_on_method`     | `libjvm.dylib` |
| removed |  -1.773 KiB | <0.1% → 0.0% |     1.77 KiB → 0 B |         1 → 0 | `CompileBroker::possibly_add_compiler_threads` | `libjvm.dylib` |

##### `os::malloc` (`libjvm.dylib`)

| Change |       Delta |      % |               Size |       Samples | Callee        | Location                 |
| -----: | ----------: | -----: | -----------------: | ------------: | ------------- | ------------------------ |
|  +3.0% | +40.054 MiB | 100.0% | 1.3 GiB → 1.34 GiB | 8,366 → 8,475 | `malloc_hook` | `libasyncProfiler.dylib` |
|  +0.1% |  +1.031 KiB |   0.1% |  914 KiB → 915 KiB |         3 → 7 | `os::malloc`  | `libjvm.dylib`           |

##### `Compile::Optimize` (`libjvm.dylib`)

| Change |        Delta |             % |                Size |       Samples | Callee                                 | Location       |
| -----: | -----------: | ------------: | ------------------: | ------------: | -------------------------------------- | -------------- |
|  +5.3% |   +17.64 MiB | 47.0% → 47.8% |   335 MiB → 353 MiB | 1,767 → 1,818 | `Compile::optimize_loops`              | `libjvm.dylib` |
|  +1.2% |   +4.198 MiB | 48.6% → 47.5% |   347 MiB → 351 MiB | 2,132 → 2,142 | `PhaseIdealLoop::optimize`             | `libjvm.dylib` |
| +33.2% |   +1.433 MiB |   0.6% → 0.8% | 4.31 MiB → 5.75 MiB |       80 → 92 | `PhaseRenumberLive::PhaseRenumberLive` | `libjvm.dylib` |
| +20.1% |  +970.82 KiB |   0.7% → 0.8% | 4.72 MiB → 5.67 MiB |      81 → 100 | `PhaseCCP::do_transform`               | `libjvm.dylib` |
| +12.6% | +476.007 KiB |   0.5% → 0.6% | 3.68 MiB → 4.14 MiB |       45 → 48 | `PhaseMacroExpand::expand_macro_nodes` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

| Change |        Delta |             % |                Size |       Samples | Callee                                                             | Location       |
| -----: | -----------: | ------------: | ------------------: | ------------: | ------------------------------------------------------------------ | -------------- |
|  +2.8% |  +16.563 MiB | 88.0% → 87.5% |   597 MiB → 613 MiB | 2,438 → 2,435 | `PhaseIdealLoop::Dominators`                                       | `libjvm.dylib` |
| +21.4% |   +2.895 MiB |   2.0% → 2.3% | 13.6 MiB → 16.5 MiB |     238 → 280 | `Arena::grow`                                                      | `libjvm.dylib` |
| +12.4% |   +2.343 MiB |   2.8% → 3.0% | 18.9 MiB → 21.3 MiB |     326 → 325 | `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` | `libjvm.dylib` |
|  +9.5% |   +1.031 MiB |   1.6% → 1.7% | 10.8 MiB → 11.9 MiB |     210 → 238 | `IdealLoopTree::loop_predication`                                  | `libjvm.dylib` |
| +23.9% | +768.226 KiB |   0.5% → 0.6% | 3.14 MiB → 3.89 MiB |       50 → 62 | `IdealLoopTree::counted_loop`                                      | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

| Change |       Delta |      % |              Size |       Samples | Callee                               | Location       |
| -----: | ----------: | -----: | ----------------: | ------------: | ------------------------------------ | -------------- |
|  +3.3% | +22.361 MiB | 100.0% | 678 MiB → 701 MiB | 3,855 → 3,926 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

| Change |        Delta |             % |                Size |       Samples | Callee                           | Location       |
| -----: | -----------: | ------------: | ------------------: | ------------: | -------------------------------- | -------------- |
|  +3.3% |  +22.361 MiB | 99.4% → 99.5% |   678 MiB → 701 MiB | 3,855 → 3,926 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |
| -12.0% | -534.156 KiB |   0.6% → 0.5% | 4.33 MiB → 3.81 MiB |       44 → 34 | `PhaseIterGVN::optimize`         | `libjvm.dylib` |

##### `Compile::optimize_loops` (`libjvm.dylib`)

| Change |      Delta |      % |              Size |       Samples | Callee                     | Location       |
| -----: | ---------: | -----: | ----------------: | ------------: | -------------------------- | -------------- |
|  +5.3% | +17.64 MiB | 100.0% | 335 MiB → 353 MiB | 1,767 → 1,818 | `PhaseIdealLoop::optimize` | `libjvm.dylib` |

##### `PhaseIdealLoop::Dominators` (`libjvm.dylib`)

| Change |       Delta |            % |              Size |       Samples | Callee         | Location       |
| -----: | ----------: | -----------: | ----------------: | ------------: | -------------- | -------------- |
|  +2.8% | +16.532 MiB |       100.0% | 597 MiB → 613 MiB | 2,438 → 2,434 | `Arena::grow`  | `libjvm.dylib` |
|    new | +31.976 KiB | 0.0% → <0.1% |      0 B → 32 KiB |         0 → 1 | `NTarjan::DFS` | `libjvm.dylib` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

| Change |        Delta |             % |                Size |       Samples | Callee                            | Location       |
| -----: | -----------: | ------------: | ------------------: | ------------: | --------------------------------- | -------------- |
|  +1.5% |   +7.268 MiB | 83.7% → 83.0% |   487 MiB → 495 MiB | 2,581 → 2,573 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
|  +5.5% |   +4.585 MiB | 14.4% → 14.8% | 83.6 MiB → 88.2 MiB |     669 → 695 | `Matcher::match`                  | `libjvm.dylib` |
| +59.7% |   +1.618 MiB |   0.5% → 0.7% | 2.71 MiB → 4.33 MiB |       47 → 61 | `PhaseCFG::PhaseCFG`              | `libjvm.dylib` |
| -12.5% | -730.976 KiB |   1.0% → 0.8% |  5.7 MiB → 4.99 MiB |       92 → 82 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |
| +13.3% | +389.328 KiB |          0.5% | 2.85 MiB → 3.23 MiB |       53 → 56 | `PhaseOutput::Output`             | `libjvm.dylib` |

##### `Arena::Arealloc` (`libjvm.dylib`)

| Change |      Delta |      % |              Size |       Samples | Callee        | Location       |
| -----: | ---------: | -----: | ----------------: | ------------: | ------------- | -------------- |
|  +8.9% | +9.595 MiB | 100.0% | 107 MiB → 117 MiB | 1,568 → 1,639 | `Arena::grow` | `libjvm.dylib` |

##### `Type_Array::grow` (`libjvm.dylib`)

| Change |      Delta |      % |                Size |  Samples | Callee            | Location       |
| -----: | ---------: | -----: | ------------------: | -------: | ----------------- | -------------- |
| +29.1% | +2.406 MiB | 100.0% | 8.28 MiB → 10.7 MiB | 97 → 110 | `Arena::Arealloc` | `libjvm.dylib` |

##### `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` (`libjvm.dylib`)

| Change |      Delta |      % |                Size |   Samples | Callee        | Location       |
| -----: | ---------: | -----: | ------------------: | --------: | ------------- | -------------- |
| +11.8% | +2.249 MiB | 100.0% | 19.1 MiB → 21.3 MiB | 328 → 326 | `Arena::grow` | `libjvm.dylib` |

##### `Parse::do_call` (`libjvm.dylib`)

| Change |        Delta |             % |                Size |   Samples | Callee                                     | Location       |
| -----: | -----------: | ------------: | ------------------: | --------: | ------------------------------------------ | -------------- |
|  +7.0% | +896.445 KiB | 77.8% → 76.6% | 12.6 MiB → 13.4 MiB | 160 → 161 | `ParseGenerator::generate`                 | `libjvm.dylib` |
|  +6.5% | +864.828 KiB | 79.9% → 78.4% | 12.9 MiB → 13.8 MiB | 185 → 178 | `PredictedCallGenerator::generate`         | `libjvm.dylib` |
| +16.2% | +191.937 KiB |   7.2% → 7.7% | 1.16 MiB → 1.34 MiB |   14 → 10 | `LibraryIntrinsic::generate`               | `libjvm.dylib` |
|    new | +128.015 KiB |   0.0% → 0.7% |       0 B → 128 KiB |     0 → 1 | `GraphKit::cast_not_null`                  | `libjvm.dylib` |
| -37.5% |  -96.015 KiB |   1.5% → 0.9% |   256 KiB → 160 KiB |     3 → 2 | `LateInlineVirtualCallGenerator::generate` | `libjvm.dylib` |

##### `Parse::do_one_block` (`libjvm.dylib`)

|   Change |        Delta |             % |                Size |   Samples | Callee                   | Location       |
| -------: | -----------: | ------------: | ------------------: | --------: | ------------------------ | -------------- |
|    +8.5% |   +1.375 MiB | 92.3% → 94.0% | 16.2 MiB → 17.5 MiB | 231 → 227 | `Parse::do_call`         | `libjvm.dylib` |
|   +31.6% |   +1.156 MiB | 20.9% → 25.8% | 3.66 MiB → 4.81 MiB |   55 → 68 | `Parse::do_field_access` | `libjvm.dylib` |
| +1251.1% |  +800.14 KiB |   0.4% → 4.5% |    64 KiB → 864 KiB |     2 → 6 | `Parse::do_instanceof`   | `libjvm.dylib` |
|   -39.2% | -639.976 KiB |   9.1% → 5.2% |  1.59 MiB → 992 KiB |   19 → 13 | `Parse::do_if`           | `libjvm.dylib` |
|   -50.0% | -576.007 KiB |   6.4% → 3.0% |  1.13 MiB → 576 KiB |    12 → 9 | `Parse::return_current`  | `libjvm.dylib` |

##### `Parse::do_field_access` (`libjvm.dylib`)

|  Change |        Delta |             % |                Size | Samples | Callee                        | Location       |
| ------: | -----------: | ------------: | ------------------: | ------: | ----------------------------- | -------------- |
| +152.9% | +832.125 KiB | 14.5% → 27.9% |  544 KiB → 1.34 MiB | 10 → 18 | `Parse::do_get_xxx`           | `libjvm.dylib` |
|  +11.6% |  +352.14 KiB | 81.2% → 68.8% | 2.97 MiB → 3.31 MiB | 42 → 46 | `Parse::do_put_xxx`           | `libjvm.dylib` |
|     new |  +32.015 KiB |   0.0% → 0.6% |        0 B → 32 KiB |   0 → 1 | `Type::hashcons`              | `libjvm.dylib` |
|  -20.0% |      -32 KiB |   4.3% → 2.6% |   160 KiB → 128 KiB |       3 | `GraphKit::null_check_common` | `libjvm.dylib` |

##### `Parse::do_all_blocks` (`libjvm.dylib`)

|  Change |        Delta |              % |                Size |   Samples | Callee                          | Location       |
| ------: | -----------: | -------------: | ------------------: | --------: | ------------------------------- | -------------- |
|   +6.6% |   +1.157 MiB | 99.6% → 100.0% | 17.5 MiB → 18.7 MiB | 253 → 242 | `Parse::do_one_block`           | `libjvm.dylib` |
| +179.9% |     +288 KiB |    0.9% → 2.3% |   160 KiB → 448 KiB |         3 | `GraphKit::clone_map`           | `libjvm.dylib` |
|  -27.8% | -159.984 KiB |    3.2% → 2.2% |   576 KiB → 416 KiB |    10 → 6 | `Parse::merge_common`           | `libjvm.dylib` |
| +100.0% |      +64 KiB |    0.4% → 0.7% |    64 KiB → 128 KiB |         1 | `Parse::ensure_phis_everywhere` | `libjvm.dylib` |
|     new |  +32.015 KiB |    0.0% → 0.2% |        0 B → 32 KiB |     0 → 1 | `Node_Array::grow`              | `libjvm.dylib` |

##### `Parse::Parse` (`libjvm.dylib`)

| Change |        Delta |             % |                Size |   Samples | Callee                    | Location       |
| -----: | -----------: | ------------: | ------------------: | --------: | ------------------------- | -------------- |
|  +6.2% |   +1.094 MiB |        100.0% | 17.6 MiB → 18.7 MiB | 254 → 242 | `Parse::do_all_blocks`    | `libjvm.dylib` |
| +42.6% | +832.117 KiB | 10.9% → 14.6% | 1.91 MiB → 2.72 MiB |        24 | `Parse::build_exits`      | `libjvm.dylib` |
| -76.5% | -416.078 KiB |   3.0% → 0.7% |   544 KiB → 128 KiB |     8 → 3 | `GraphKit::set_map_clone` | `libjvm.dylib` |
|    new | +352.046 KiB |   0.0% → 1.8% |       0 B → 352 KiB |     0 → 3 | `Parse::do_exits`         | `libjvm.dylib` |
|    new |  +64.015 KiB |   0.0% → 0.3% |        0 B → 64 KiB |     0 → 1 | `TypeFunc::make`          | `libjvm.dylib` |

##### `ParseGenerator::generate` (`libjvm.dylib`)

| Change |      Delta |      % |                Size |   Samples | Callee         | Location       |
| -----: | ---------: | -----: | ------------------: | --------: | -------------- | -------------- |
|  +6.2% | +1.094 MiB | 100.0% | 17.6 MiB → 18.7 MiB | 254 → 242 | `Parse::Parse` | `libjvm.dylib` |

##### `IdealLoopTree::loop_predication` (`libjvm.dylib`)

| Change |        Delta |             % |                Size |   Samples | Callee                                  | Location       |
| -----: | -----------: | ------------: | ------------------: | --------: | --------------------------------------- | -------------- |
|  +9.5% |   +1.031 MiB |        100.0% | 10.8 MiB → 11.9 MiB | 210 → 238 | `PhaseIdealLoop::loop_predication_impl` | `libjvm.dylib` |
|  -4.7% | -255.984 KiB | 49.3% → 42.9% |  5.35 MiB → 5.1 MiB |   91 → 97 | `IdealLoopTree::loop_predication`       | `libjvm.dylib` |

##### `Parse::do_get_xxx` (`libjvm.dylib`)

|  Change |        Delta |             % |              Size | Samples | Callee                           | Location       |
| ------: | -----------: | ------------: | ----------------: | ------: | -------------------------------- | -------------- |
| +262.4% | +672.109 KiB | 47.1% → 67.4% | 256 KiB → 928 KiB |  6 → 13 | `GraphKit::access_load_at`       | `libjvm.dylib` |
| +300.0% | +192.031 KiB | 11.8% → 18.6% |  64 KiB → 256 KiB |   1 → 3 | `PhaseGVN::transform_no_reclaim` | `libjvm.dylib` |
| removed |  -64.015 KiB |  11.8% → 0.0% |      64 KiB → 0 B |   1 → 0 | `GraphKit::basic_plus_adr`       | `libjvm.dylib` |
|     new |  +64.015 KiB |   0.0% → 4.7% |      0 B → 64 KiB |   0 → 1 | `Compile::alias_type`            | `libjvm.dylib` |
| removed |  -32.015 KiB |   5.9% → 0.0% |      32 KiB → 0 B |   1 → 0 | `PhaseValues::makecon`           | `libjvm.dylib` |

##### `PhaseIFG::init` (`libjvm.dylib`)

| Change |       Delta |            % |              Size |       Samples | Callee                 | Location       |
| -----: | ----------: | -----------: | ----------------: | ------------: | ---------------------- | -------------- |
|  -0.5% |    -2.1 MiB |       100.0% | 383 MiB → 381 MiB | 1,687 → 1,630 | `Arena::grow`          | `libjvm.dylib` |
|    new | +63.953 KiB | 0.0% → <0.1% |      0 B → 64 KiB |         0 → 2 | `IndexSet::initialize` | `libjvm.dylib` |

##### `NodeHash::hash_find_insert` (`libjvm.dylib`)

| Change |      Delta |      % |                Size |   Samples | Callee        | Location       |
| -----: | ---------: | -----: | ------------------: | --------: | ------------- | -------------- |
|  -8.4% | -1.344 MiB | 100.0% | 16.1 MiB → 14.7 MiB | 163 → 138 | `Arena::grow` | `libjvm.dylib` |

##### `PhaseIterGVN::transform_old` (`libjvm.dylib`)

|  Change |        Delta |             % |                Size |   Samples | Callee                       | Location       |
| ------: | -----------: | ------------: | ------------------: | --------: | ---------------------------- | -------------- |
|   -7.7% |   -1.156 MiB | 87.2% → 86.9% | 15.1 MiB → 13.9 MiB | 147 → 124 | `NodeHash::hash_find_insert` | `libjvm.dylib` |
| removed | -352.046 KiB |   2.0% → 0.0% |       352 KiB → 0 B |     3 → 0 | `AddPNode::Ideal`            | `libjvm.dylib` |
|  +40.0% |     +320 KiB |   4.5% → 6.8% |  800 KiB → 1.09 MiB |         9 | `IfNode::Ideal`              | `libjvm.dylib` |
| removed | -256.015 KiB |   1.4% → 0.0% |       256 KiB → 0 B |     1 → 0 | `Conv2BNode::Ideal`          | `libjvm.dylib` |
|  +83.3% | +160.015 KiB |   1.1% → 2.1% |   192 KiB → 352 KiB |     2 → 3 | `Arena::Arealloc`            | `libjvm.dylib` |

##### `PhaseIterGVN::optimize` (`libjvm.dylib`)

| Change |      Delta |      % |              Size |   Samples | Callee                        | Location       |
| -----: | ---------: | -----: | ----------------: | --------: | ----------------------------- | -------------- |
|  -7.4% | -1.271 MiB | 100.0% | 17.3 MiB → 16 MiB | 182 → 149 | `PhaseIterGVN::transform_old` | `libjvm.dylib` |

##### `PhaseCFG::build_dominator_tree` (`libjvm.dylib`)

| Change |        Delta |      % |               Size | Samples | Callee        | Location       |
| -----: | -----------: | -----: | -----------------: | ------: | ------------- | -------------- |
| -26.9% | -864.953 KiB | 100.0% | 3.14 MiB → 2.3 MiB | 39 → 27 | `Arena::grow` | `libjvm.dylib` |

##### `PhaseCFG::do_global_code_motion` (`libjvm.dylib`)

| Change |        Delta |             % |                Size | Samples | Callee                           | Location       |
| -----: | -----------: | ------------: | ------------------: | ------: | -------------------------------- | -------------- |
| -26.9% | -864.953 KiB | 55.1% → 46.0% |  3.14 MiB → 2.3 MiB | 39 → 27 | `PhaseCFG::build_dominator_tree` | `libjvm.dylib` |
|  +5.1% | +133.976 KiB | 44.9% → 54.0% | 2.56 MiB → 2.69 MiB | 53 → 55 | `PhaseCFG::global_code_motion`   | `libjvm.dylib` |

##### `Parse::do_if` (`libjvm.dylib`)

|  Change |        Delta |             % |              Size | Samples | Callee                               | Location       |
| ------: | -----------: | ------------: | ----------------: | ------: | ------------------------------------ | -------------- |
| removed | -672.109 KiB |  41.2% → 0.0% |     672 KiB → 0 B |   7 → 0 | `Parse::adjust_map_after_if`         | `libjvm.dylib` |
|  +37.5% |  +96.062 KiB | 15.7% → 35.5% | 256 KiB → 352 KiB |   5 → 4 | `PreserveJVMState::PreserveJVMState` | `libjvm.dylib` |
|  -60.0% |  -95.976 KiB |   9.8% → 6.5% |  160 KiB → 64 KiB |   2 → 1 | `GraphKit::create_and_map_if`        | `libjvm.dylib` |
|  +40.0% |  +64.031 KiB |  9.8% → 22.6% | 160 KiB → 224 KiB |   2 → 4 | `Node::Node`                         | `libjvm.dylib` |
|  -10.0% |      -32 KiB | 19.6% → 29.0% | 320 KiB → 288 KiB |       2 | `PhaseGVN::transform_no_reclaim`     | `libjvm.dylib` |

##### `IdealLoopTree::iteration_split` (`libjvm.dylib`)

| Change |        Delta |             % |                Size | Samples | Callee                                | Location       |
| -----: | -----------: | ------------: | ------------------: | ------: | ------------------------------------- | -------------- |
| -35.5% | -352.062 KiB |  13.8% → 9.8% |   992 KiB → 640 KiB | 17 → 13 | `PhaseIdealLoop::do_unswitching`      | `libjvm.dylib` |
|  -5.3% |     -347 KiB | 90.2% → 93.7% |    6.34 MiB → 6 MiB | 96 → 94 | `IdealLoopTree::iteration_split`      | `libjvm.dylib` |
|  -4.6% |     -283 KiB | 86.2% → 90.2% | 6.06 MiB → 5.78 MiB | 91 → 89 | `IdealLoopTree::iteration_split_impl` | `libjvm.dylib` |

##### `Parse::return_current` (`libjvm.dylib`)

|  Change |        Delta |             % |              Size | Samples | Callee                           | Location       |
| ------: | -----------: | ------------: | ----------------: | ------: | -------------------------------- | -------------- |
|  -52.4% |     -352 KiB | 58.3% → 55.6% | 672 KiB → 320 KiB |       5 | `Type_Array::grow`               | `libjvm.dylib` |
|  -44.4% | -127.992 KiB | 25.0% → 27.8% | 288 KiB → 160 KiB |   4 → 2 | `Parse::call_register_finalizer` | `libjvm.dylib` |
|  -40.0% |  -64.039 KiB | 13.9% → 16.7% |  160 KiB → 96 KiB |       2 | `PhiNode::slice_memory`          | `libjvm.dylib` |
| removed |  -31.976 KiB |   2.8% → 0.0% |      32 KiB → 0 B |   1 → 0 | `Node::add_req`                  | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late` (`libjvm.dylib`)

| Change |        Delta |             % |                Size | Samples | Callee                                      | Location       |
| -----: | -----------: | ------------: | ------------------: | ------: | ------------------------------------------- | -------------- |
| -32.0% | -512.257 KiB | 80.7% → 75.6% | 1.56 MiB → 1.06 MiB | 41 → 27 | `Node_Array::grow`                          | `libjvm.dylib` |
|  -8.4% |  -32.078 KiB | 19.3% → 24.4% |   384 KiB → 352 KiB |       9 | `PhaseIdealLoop::build_loop_late_post_work` | `libjvm.dylib` |

##### `Parse::adjust_map_after_if` (`libjvm.dylib`)

|  Change |        Delta |             % |             Size | Samples | Callee                           | Location       |
| ------: | -----------: | ------------: | ---------------: | ------: | -------------------------------- | -------------- |
| removed | -512.062 KiB |  76.2% → 0.0% |    512 KiB → 0 B |   4 → 0 | `GraphKit::uncommon_trap`        | `libjvm.dylib` |
|  -80.0% | -128.031 KiB | 23.8% → 25.0% | 160 KiB → 32 KiB |   3 → 1 | `GraphKit::add_parse_predicates` | `libjvm.dylib` |
|     new |  +64.015 KiB |  0.0% → 50.0% |     0 B → 64 KiB |   0 → 1 | `GraphKit::add_parse_predicate`  | `libjvm.dylib` |
|     new |  +32.015 KiB |  0.0% → 25.0% |     0 B → 32 KiB |   0 → 1 | `Parse::sharpen_type_after_if`   | `libjvm.dylib` |

##### `GraphKit::make_runtime_call` (`libjvm.dylib`)

|  Change |        Delta |             % |              Size | Samples | Callee                                             | Location       |
| ------: | -----------: | ------------: | ----------------: | ------: | -------------------------------------------------- | -------------- |
|  -47.4% | -288.062 KiB | 57.6% → 58.8% | 608 KiB → 320 KiB |   6 → 2 | `PhaseGVN::transform_no_reclaim`                   | `libjvm.dylib` |
| removed | -128.015 KiB |  12.1% → 0.0% |     128 KiB → 0 B |   1 → 0 | `Node::Node`                                       | `libjvm.dylib` |
|  -22.2% |  -63.976 KiB | 27.3% → 41.2% | 288 KiB → 224 KiB |   4 → 3 | `GraphKit::set_predefined_output_for_runtime_call` | `libjvm.dylib` |
| removed |  -31.976 KiB |   3.0% → 0.0% |      32 KiB → 0 B |   1 → 0 | `GraphKit::add_safepoint_edges`                    | `libjvm.dylib` |

##### `GraphKit::uncommon_trap` (`libjvm.dylib`)

|  Change |        Delta |             % |               Size | Samples | Callee                        | Location       |
| ------: | -----------: | ------------: | -----------------: | ------: | ----------------------------- | -------------- |
|  -48.5% | -512.031 KiB | 80.5% → 68.0% | 1.03 MiB → 544 KiB |  12 → 5 | `GraphKit::make_runtime_call` | `libjvm.dylib` |
| +100.0% |  +64.023 KiB |  4.9% → 16.0% |   64 KiB → 128 KiB |   2 → 1 | `PhaseValues::intcon`         | `libjvm.dylib` |
| removed |  -63.992 KiB |   4.9% → 0.0% |       64 KiB → 0 B |   2 → 0 | `HaltNode::HaltNode`          | `libjvm.dylib` |
|     ~0% |        +16 B |  9.8% → 16.0% |            128 KiB |   1 → 2 | `Type_Array::grow`            | `libjvm.dylib` |

##### `Node::out_grow` (`libjvm.dylib`)

| Change |        Delta |             % |                Size | Samples | Callee            | Location       |
| -----: | -----------: | ------------: | ------------------: | ------: | ----------------- | -------------- |
|  -5.6% | -479.968 KiB | 98.9% → 99.2% | 8.41 MiB → 7.94 MiB | 79 → 76 | `Arena::Arealloc` | `libjvm.dylib` |
| -33.3% |  -31.976 KiB |   1.1% → 0.8% |   95.9 KiB → 64 KiB |   3 → 2 | `Arena::grow`     | `libjvm.dylib` |

##### `PhaseIdealLoop::create_slow_version_of_loop` (`libjvm.dylib`)

|  Change |        Delta |             % |              Size | Samples | Callee                                                                    | Location       |
| ------: | -----------: | ------------: | ----------------: | ------: | ------------------------------------------------------------------------- | -------------- |
|  -44.8% | -416.062 KiB | 72.5% → 64.0% | 928 KiB → 512 KiB | 14 → 10 | `PhaseIdealLoop::clone_loop`                                              | `libjvm.dylib` |
|  -30.0% |  -96.031 KiB | 25.0% → 28.0% | 320 KiB → 224 KiB |   7 → 5 | `PhaseIdealLoop::set_idom`                                                | `libjvm.dylib` |
| +100.0% |      +32 KiB |   2.5% → 8.0% |   32 KiB → 64 KiB |       1 | `PhaseIdealLoop::clone_parse_and_assertion_predicates_to_unswitched_loop` | `libjvm.dylib` |

##### `PhaseIdealLoop::do_unswitching` (`libjvm.dylib`)

| Change |        Delta |      % |               Size | Samples | Callee                                        | Location       |
| -----: | -----------: | -----: | -----------------: | ------: | --------------------------------------------- | -------------- |
| -37.5% | -480.093 KiB | 100.0% | 1.25 MiB → 800 KiB | 22 → 16 | `PhaseIdealLoop::create_slow_version_of_loop` | `libjvm.dylib` |

##### `GraphKit::set_map_clone` (`libjvm.dylib`)

| Change |        Delta |      % |              Size | Samples | Callee                | Location       |
| -----: | -----------: | -----: | ----------------: | ------: | --------------------- | -------------- |
| -52.0% | -416.023 KiB | 100.0% | 800 KiB → 384 KiB |  12 → 8 | `GraphKit::clone_map` | `libjvm.dylib` |

##### `Compile::inline_incrementally` (`libjvm.dylib`)

|  Change |        Delta |              % |              Size | Samples | Callee                                  | Location       |
| ------: | -----------: | -------------: | ----------------: | ------: | --------------------------------------- | -------------- |
|  -40.9% | -288.031 KiB | 88.0% → 100.0% | 704 KiB → 416 KiB |   5 → 3 | `Compile::inline_incrementally_cleanup` | `libjvm.dylib` |
| removed |  -96.031 KiB |   12.0% → 0.0% |      96 KiB → 0 B |   2 → 0 | `Compile::inline_string_calls`          | `libjvm.dylib` |

##### `AddPNode::Ideal` (`libjvm.dylib`)

|  Change |        Delta |              % |              Size | Samples | Callee                           | Location       |
| ------: | -----------: | -------------: | ----------------: | ------: | -------------------------------- | -------------- |
| removed | -288.031 KiB |   52.9% → 0.0% |     288 KiB → 0 B |   2 → 0 | `PhaseIterGVN::transform_old`    | `libjvm.dylib` |
| removed |  -64.015 KiB |   11.8% → 0.0% |      64 KiB → 0 B |   1 → 0 | `PhaseValues::longcon`           | `libjvm.dylib` |
|  -16.7% |      -32 KiB | 35.3% → 100.0% | 192 KiB → 160 KiB |       2 | `PhaseGVN::transform_no_reclaim` | `libjvm.dylib` |

##### `GraphKit::set_results_for_java_call` (`libjvm.dylib`)

|  Change |        Delta |              % |              Size | Samples | Callee                           | Location       |
| ------: | -----------: | -------------: | ----------------: | ------: | -------------------------------- | -------------- |
| removed | -320.031 KiB |   25.6% → 0.0% |     320 KiB → 0 B |   2 → 0 | `PhaseGVN::transform_no_reclaim` | `libjvm.dylib` |
| removed | -128.015 KiB |   10.3% → 0.0% |     128 KiB → 0 B |   1 → 0 | `Node::Node`                     | `libjvm.dylib` |
|  +12.0% |  +96.023 KiB | 64.1% → 100.0% | 800 KiB → 896 KiB |  10 → 9 | `GraphKit::make_slow_call_ex`    | `libjvm.dylib` |

##### `IdealLoopTree::iteration_split_impl` (`libjvm.dylib`)

|  Change |        Delta |             % |                Size | Samples | Callee                                  | Location       |
| ------: | -----------: | ------------: | ------------------: | ------: | --------------------------------------- | -------------- |
|  -33.3% | -288.031 KiB |  13.9% → 9.7% |   864 KiB → 576 KiB |   9 → 7 | `PhaseIdealLoop::do_maximally_unroll`   | `libjvm.dylib` |
|   -9.4% |  -159.96 KiB | 27.3% → 25.9% |  1.66 MiB → 1.5 MiB |      27 | `PhaseIdealLoop::do_unroll`             | `libjvm.dylib` |
|  -44.4% | -128.031 KiB |   4.6% → 2.7% |   288 KiB → 160 KiB |   5 → 3 | `PhaseIdealLoop::do_unswitching`        | `libjvm.dylib` |
|   +3.8% | +119.984 KiB | 50.5% → 55.0% | 3.06 MiB → 3.18 MiB | 44 → 43 | `PhaseIdealLoop::insert_pre_post_loops` | `libjvm.dylib` |
| +200.3% |  +64.054 KiB |   0.5% → 1.6% |     32 KiB → 96 KiB |   1 → 2 | `PhaseIdealLoop::partial_peel`          | `libjvm.dylib` |

##### `SuperWord::transform_loop` (`libjvm.dylib`)

| Change |        Delta |             % |              Size | Samples | Callee                   | Location       |
| -----: | -----------: | ------------: | ----------------: | ------: | ------------------------ | -------------- |
| -70.0% | -224.015 KiB | 43.5% → 20.0% |  320 KiB → 96 KiB |   3 → 2 | `SuperWord::SLP_extract` | `libjvm.dylib` |
|  -7.7% |  -32.015 KiB | 56.5% → 80.0% | 416 KiB → 384 KiB |   5 → 4 | `SuperWord::output`      | `libjvm.dylib` |

##### `Parse::array_addressing` (`libjvm.dylib`)

|  Change |        Delta |             % |              Size | Samples | Callee                            | Location       |
| ------: | -----------: | ------------: | ----------------: | ------: | --------------------------------- | -------------- |
| removed | -128.015 KiB |  20.0% → 0.0% |     128 KiB → 0 B |   1 → 0 | `GraphKit::uncommon_trap`         | `libjvm.dylib` |
| removed | -128.015 KiB |  20.0% → 0.0% |     128 KiB → 0 B |   1 → 0 | `Type_Array::grow`                | `libjvm.dylib` |
|  +28.6% |  +64.015 KiB | 35.0% → 75.0% | 224 KiB → 288 KiB |   3 → 4 | `PhaseGVN::transform_no_reclaim`  | `libjvm.dylib` |
| removed |  -32.015 KiB |   5.0% → 0.0% |      32 KiB → 0 B |   1 → 0 | `GraphKit::array_element_address` | `libjvm.dylib` |
|  -25.0% |  -31.984 KiB | 20.0% → 25.0% |  128 KiB → 96 KiB |   1 → 2 | `GraphKit::null_check_common`     | `libjvm.dylib` |

##### `BarrierSetC2::store_at_resolved` (`libjvm.dylib`)

| Change |        Delta |      % |              Size | Samples | Callee                      | Location       |
| -----: | -----------: | -----: | ----------------: | ------: | --------------------------- | -------------- |
| -40.0% | -256.007 KiB | 100.0% | 640 KiB → 384 KiB |   8 → 5 | `GraphKit::store_to_memory` | `libjvm.dylib` |

##### `split_if` (`libjvm.dylib`)

|  Change |        Delta |             % |          Size | Samples | Callee                                           | Location       |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------------------------------ | -------------- |
| removed | -128.015 KiB |  44.4% → 0.0% | 128 KiB → 0 B |   1 → 0 | `PhaseIterGVN::transform`                        | `libjvm.dylib` |
| removed |  -96.031 KiB |  33.3% → 0.0% |  96 KiB → 0 B |   2 → 0 | `Node::clone`                                    | `libjvm.dylib` |
| removed |  -64.015 KiB |  22.2% → 0.0% |  64 KiB → 0 B |   1 → 0 | `PhaseIterGVN::register_new_node_with_optimizer` | `libjvm.dylib` |
|     new |  +64.015 KiB | 0.0% → 100.0% |  0 B → 64 KiB |   0 → 1 | `PhaseIterGVN::transform_old`                    | `libjvm.dylib` |

##### `GrowableArrayWithAllocator<DepMem*, GrowableArray<DepMem*>>::expand_to` (`libjvm.dylib`)

| Change |        Delta |      % |             Size | Samples | Callee        | Location       |
| -----: | -----------: | -----: | ---------------: | ------: | ------------- | -------------- |
| -70.0% | -224.015 KiB | 100.0% | 320 KiB → 96 KiB |   3 → 2 | `Arena::grow` | `libjvm.dylib` |

##### `SuperWord::dependence_graph` (`libjvm.dylib`)

| Change |        Delta |      % |             Size | Samples | Callee                                                                   | Location       |
| -----: | -----------: | -----: | ---------------: | ------: | ------------------------------------------------------------------------ | -------------- |
| -70.0% | -224.015 KiB | 100.0% | 320 KiB → 96 KiB |   3 → 2 | `GrowableArrayWithAllocator<DepMem*, GrowableArray<DepMem*>>::expand_to` | `libjvm.dylib` |

##### `SuperWord::SLP_extract` (`libjvm.dylib`)

| Change |        Delta |      % |             Size | Samples | Callee                        | Location       |
| -----: | -----------: | -----: | ---------------: | ------: | ----------------------------- | -------------- |
| -70.0% | -224.015 KiB | 100.0% | 320 KiB → 96 KiB |   3 → 2 | `SuperWord::dependence_graph` | `libjvm.dylib` |

##### `Parse::catch_inline_exceptions` (`libjvm.dylib`)

|  Change |        Delta |             % |          Size | Samples | Callee                           | Location       |
| ------: | -----------: | ------------: | ------------: | ------: | -------------------------------- | -------------- |
| removed | -256.015 KiB | 100.0% → 0.0% | 256 KiB → 0 B |   1 → 0 | `Parse::throw_to_exit`           | `libjvm.dylib` |
|     new |  +32.015 KiB | 0.0% → 100.0% |  0 B → 32 KiB |   0 → 1 | `PhaseGVN::transform_no_reclaim` | `libjvm.dylib` |

##### `DirectCallGenerator::generate` (`libjvm.dylib`)

| Change |        Delta |             % |              Size | Samples | Callee                                | Location       |
| -----: | -----------: | ------------: | ----------------: | ------: | ------------------------------------- | -------------- |
| -22.6% | -223.992 KiB | 93.9% → 92.3% | 992 KiB → 768 KiB |  10 → 8 | `GraphKit::set_results_for_java_call` | `libjvm.dylib` |
|    ~0% |        +16 B |   6.1% → 7.7% |            64 KiB |   1 → 2 | `GraphKit::set_edges_for_java_call`   | `libjvm.dylib` |

##### `Parse::throw_to_exit` (`libjvm.dylib`)

|  Change |       Delta |             % |              Size | Samples | Callee                               | Location       |
| ------: | ----------: | ------------: | ----------------: | ------: | ------------------------------------ | -------------- |
|  -33.3% |    -160 KiB | 62.5% → 55.6% | 480 KiB → 320 KiB |       4 | `GraphKit::combine_exception_states` | `libjvm.dylib` |
| removed | -31.976 KiB |   4.2% → 0.0% |      32 KiB → 0 B |   1 → 0 | `Node::out_grow`                     | `libjvm.dylib` |
|     ~0% |       +56 B | 33.3% → 44.4% |           256 KiB |   4 → 5 | `GraphKit::set_map_clone`            | `libjvm.dylib` |

##### `Parse::array_store` (`libjvm.dylib`)

|  Change |        Delta |              % |             Size | Samples | Callee                     | Location       |
| ------: | -----------: | -------------: | ---------------: | ------: | -------------------------- | -------------- |
| removed | -224.046 KiB |   77.8% → 0.0% |    224 KiB → 0 B |   3 → 0 | `Parse::array_addressing`  | `libjvm.dylib` |
| +100.0% |      +64 KiB | 22.2% → 100.0% | 64 KiB → 128 KiB |       1 | `Parse::array_store_check` | `libjvm.dylib` |

##### `VirtualCallGenerator::generate` (`libjvm.dylib`)

| Change |        Delta |     % |              Size | Samples | Callee                                | Location       |
| -----: | -----------: | ----: | ----------------: | ------: | ------------------------------------- | -------------- |
| -50.0% | -128.031 KiB | 80.0% | 256 KiB → 128 KiB |   3 → 1 | `GraphKit::set_results_for_java_call` | `libjvm.dylib` |
| -50.0% |      -32 KiB | 20.0% |   64 KiB → 32 KiB |       1 | `GraphKit::set_edges_for_java_call`   | `libjvm.dylib` |

##### `LateInlineVirtualCallGenerator::generate` (`libjvm.dylib`)

| Change |        Delta |      % |              Size | Samples | Callee                           | Location       |
| -----: | -----------: | -----: | ----------------: | ------: | -------------------------------- | -------------- |
| -50.0% | -160.031 KiB | 100.0% | 320 KiB → 160 KiB |   4 → 2 | `VirtualCallGenerator::generate` | `libjvm.dylib` |

##### `Parse::ensure_phi` (`libjvm.dylib`)

|  Change |       Delta |            % |         Size | Samples | Callee             | Location       |
| ------: | ----------: | -----------: | -----------: | ------: | ------------------ | -------------- |
| removed | -64.015 KiB | 33.3% → 0.0% | 64 KiB → 0 B |   1 → 0 | `PhiNode::make`    | `libjvm.dylib` |
| removed | -64.015 KiB | 33.3% → 0.0% | 64 KiB → 0 B |   1 → 0 | `Node_Array::grow` | `libjvm.dylib` |
| removed | -31.976 KiB | 16.7% → 0.0% | 32 KiB → 0 B |   1 → 0 | `Node::out_grow`   | `libjvm.dylib` |

##### `Parse::array_load` (`libjvm.dylib`)

|  Change |        Delta |              % |              Size | Samples | Callee                     | Location       |
| ------: | -----------: | -------------: | ----------------: | ------: | -------------------------- | -------------- |
| removed | -128.015 KiB |   23.5% → 0.0% |     128 KiB → 0 B |   1 → 0 | `GraphKit::access_load_at` | `libjvm.dylib` |
|   -7.7% |  -31.968 KiB | 76.5% → 100.0% | 416 KiB → 384 KiB |   4 → 6 | `Parse::array_addressing`  | `libjvm.dylib` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in native bytes allocated in their leaf frame.

Common call stack: `Compile::Compile` (`libjvm.dylib`) ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`

|  Change |        Delta |             % |                Size |       Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ------: | -----------: | ------------: | ------------------: | ------------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   +4.6% |  +13.666 MiB | 22.2% → 22.6% |   296 MiB → 310 MiB | 1,134 → 1,119 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::Dominators` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize`                                                                                                                                                                                                  |
|   +7.0% |   +6.777 MiB |   7.2% → 7.5% |  96.6 MiB → 103 MiB |     772 → 778 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseLive::compute` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen`                                                                                                                                                                                                                                                                                                         |
|   +1.0% |   +2.865 MiB | 22.6% → 22.1% |   301 MiB → 304 MiB | 1,304 → 1,315 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::Dominators` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize`                                                                                                                                                                                                                              |
|   +8.8% |   +2.155 MiB |   1.8% → 1.9% | 24.4 MiB → 26.6 MiB |     194 → 208 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Matcher::find_shared` ← `Matcher::match` ← `Compile::Code_Gen`                                                                                                                                                                                                                                                                                                                        |
|  +19.9% |   +1.968 MiB |   0.7% → 0.9% | 9.91 MiB → 11.9 MiB |     160 → 169 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize`                                                                                                                                                            |
|  +88.0% |   +1.844 MiB |   0.2% → 0.3% | 2.09 MiB → 3.94 MiB |       36 → 54 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `PhaseCFG::build_cfg` ← `PhaseCFG::PhaseCFG` ← `Compile::Code_Gen`                                                                                                                                                                                                                                                                                                 |
|  +25.5% |   +1.481 MiB |   0.4% → 0.5% |  5.82 MiB → 7.3 MiB |      99 → 127 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize`                                                                                                                                                                                                                                                             |
|  +18.3% |   +1.413 MiB |   0.6% → 0.7% | 7.74 MiB → 9.15 MiB |     139 → 153 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize`                                                                                                                                                                                                                                 |
|  +16.9% |   +1.187 MiB |   0.5% → 0.6% | 7.03 MiB → 8.22 MiB |       69 → 76 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Compile::identify_useful_nodes` ← `PhaseRemoveUseless::PhaseRemoveUseless`                                                                                                                                                                                                                                                                   |
|  +32.5% |   +1.187 MiB |   0.3% → 0.4% | 3.66 MiB → 4.84 MiB |            62 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Matcher::ReduceInst` ← `Matcher::match_tree` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen`                                                                                                                                                                                                                                     |
|  +18.5% | +896.265 KiB |          0.4% |  4.72 MiB → 5.6 MiB |       81 → 98 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseCCP::transform` ← `PhaseCCP::do_transform` ← `Compile::Optimize`                                                                                                                                                                                                                                                                        |
| +164.9% | +746.531 KiB |  <0.1% → 0.1% |  453 KiB → 1.17 MiB |        8 → 19 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseChaitin::stretch_base_pointer_live_ranges` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen`                                                                                                                                                                                                                                                                             |
|  +95.4% | +672.171 KiB |          0.1% |  704 KiB → 1.34 MiB |       18 → 29 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `GrowableArrayWithAllocator<float, GrowableArray<float>>::expand_to` ← `PathFrequency::to` ← `PhaseIdealLoop::loop_predication_follow_branches` ← `PhaseIdealLoop::loop_predication_impl` ← `IdealLoopTree::loop_predication` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` |
|  +30.0% | +672.117 KiB |          0.2% | 2.19 MiB → 2.84 MiB |       36 → 41 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `ConnectionGraph::compute_escape` ← `ConnectionGraph::do_analysis` ← `Compile::Optimize`                                                                                                                                                                                                                                                      |
|  +13.5% | +672.031 KiB |          0.4% |  4.84 MiB → 5.5 MiB |       67 → 69 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Matcher::match` ← `Compile::Code_Gen`                                                                                                                                                                                                                                                                                                        |
|  +36.0% | +576.093 KiB |   0.1% → 0.2% | 1.56 MiB → 2.13 MiB |       29 → 35 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `PhaseRenumberLive::PhaseRenumberLive` ← `Compile::Optimize`                                                                                                                                                                                                                                                                                                       |
|  +38.6% | +544.046 KiB |          0.1% | 1.38 MiB → 1.91 MiB |       26 → 29 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Compile::identify_useful_nodes` ← `PhaseRemoveUseless::PhaseRemoveUseless` ← `PhaseRenumberLive::PhaseRenumberLive` ← `Compile::Optimize`                                                                                                                                                                                                    |
|   +1.3% | +536.718 KiB |          2.9% | 39.2 MiB → 39.7 MiB |     215 → 213 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen`                                                                                                                                                                                                                                                                                                                              |
|  +48.4% | +535.257 KiB |          0.1% |  1.08 MiB → 1.6 MiB |       19 → 26 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseRegAlloc::alloc_node_regs` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen`                                                                                                                                                                                                                                                                                             |
| +200.0% | +512.046 KiB |  <0.1% → 0.1% |   256 KiB → 768 KiB |         1 → 4 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Block_Array::grow` ← `PhaseChaitin::insert_proj` ← `PhaseChaitin::Split` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen`                                                                                                                                                                                                                                |

### Improvements

Call stacks with the largest decrease in native bytes allocated in their leaf frame.

Common call stack: `Compile::Compile` (`libjvm.dylib`) ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`

|  Change |        Delta |             % |                Size |       Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ------: | -----------: | ------------: | ------------------: | ------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   -0.5% |     -2.1 MiB | 28.7% → 27.8% |   383 MiB → 381 MiB | 1,687 → 1,630 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIFG::init` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  -26.9% | -864.953 KiB |          0.2% |  3.14 MiB → 2.3 MiB |       39 → 27 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseCFG::build_dominator_tree` ← `PhaseCFG::do_global_code_motion` ← `Compile::Code_Gen`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  -25.8% | -512.015 KiB |          0.1% | 1.94 MiB → 1.44 MiB |       18 → 17 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `NodeHash::hash_find_insert` ← `PhaseIterGVN::transform_old` ← `PhaseIterGVN::optimize` ← `PhaseMacroExpand::expand_macro_nodes` ← `Compile::Optimize`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  -17.7% | -480.281 KiB |          0.2% | 2.66 MiB → 2.19 MiB |       59 → 41 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `PhaseIdealLoop::set_idom` ← `PhaseIdealLoop::split_thru_region` ← `PhaseIdealLoop::do_split_if` ← `PhaseIdealLoop::split_if_with_blocks` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|   -5.7% | -480.031 KiB |          0.6% | 8.25 MiB → 7.78 MiB |       74 → 72 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node::out_grow` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|   -4.6% |  -448.14 KiB |          0.7% |  9.5 MiB → 9.07 MiB |     175 → 166 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  -85.7% | -384.031 KiB |         <0.1% |    448 KiB → 64 KiB |         3 → 1 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseIdealLoop::register_new_node` ← `PhaseIdealLoop::split_thru_phi` ← `PhaseIdealLoop::split_if_with_blocks_pre` ← `PhaseIdealLoop::split_if_with_blocks` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  -84.6% | -352.031 KiB |         <0.1% |    416 KiB → 64 KiB |         3 → 1 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `NodeHash::hash_find_insert` ← `PhaseIterGVN::transform_old` ← `PhaseIterGVN::optimize` ← `Compile::remove_speculative_types` ← `Compile::Optimize`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  -37.0% | -320.132 KiB |  0.1% → <0.1% |   864 KiB → 544 KiB |       21 → 15 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseIdealLoop::build_loop_late` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  -32.3% | -320.125 KiB |  0.1% → <0.1% |   992 KiB → 672 KiB |       21 → 13 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `GrowableArrayWithAllocator<unsigned int, GrowableArray<unsigned int>>::expand_to` ← `PhaseCFG::partial_latency_of_defs` ← `PhaseCFG::global_code_motion` ← `PhaseCFG::do_global_code_motion` ← `Compile::Code_Gen`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  -64.3% | -288.031 KiB |         <0.1% |   448 KiB → 160 KiB |         4 → 2 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Compile::identify_useful_nodes` ← `PhaseRemoveUseless::PhaseRemoveUseless` ← `Compile::inline_incrementally_cleanup` ← `Compile::inline_incrementally` ← `Compile::Optimize`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| removed | -288.031 KiB |  <0.1% → 0.0% |       288 KiB → 0 B |         2 → 0 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `NodeHash::hash_find_insert` ← `PhaseIterGVN::transform_old` ← `AddPNode::Ideal` ← `PhaseIterGVN::transform_old` ← `PhaseIterGVN::optimize` ← `Compile::process_for_post_loop_opts_igvn` ← `Compile::Optimize`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| removed | -256.062 KiB |  <0.1% → 0.0% |       256 KiB → 0 B |         4 → 0 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `GrowableArrayWithAllocator<unsigned int, GrowableArray<unsigned int>>::expand_to` ← `PhaseChaitin::new_lrg` ← `PhaseChaitin::Split` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| removed | -256.015 KiB |  <0.1% → 0.0% |       256 KiB → 0 B |         1 → 0 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `PhaseGVN::transform_no_reclaim` ← `GraphKit::make_runtime_call` ← `GraphKit::uncommon_trap` ← `Parse::adjust_map_after_if` ← `Parse::do_if` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `PredictedCallGenerator::generate` ← `PredictedCallGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `PredictedCallGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `PredictedCallGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `PredictedCallGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate`                                                                                                                                                                             |
| removed | -256.015 KiB |  <0.1% → 0.0% |       256 KiB → 0 B |         1 → 0 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Type_Array::grow` ← `Parse::return_current` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `PredictedCallGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `PredictedCallGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `PredictedCallGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` |
| removed | -256.015 KiB |  <0.1% → 0.0% |       256 KiB → 0 B |         1 → 0 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `PhaseGVN::transform_no_reclaim` ← `Parse::do_one_bytecode` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `PredictedCallGenerator::generate` ← `PredictedCallGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `PredictedCallGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `PredictedCallGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `PredictedCallGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate`                          |
| removed | -256.015 KiB |  <0.1% → 0.0% |       256 KiB → 0 B |         1 → 0 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `PhaseGVN::transform_no_reclaim` ← `GraphKit::set_results_for_java_call` ← `DirectCallGenerator::generate` ← `PredictedCallGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `PredictedCallGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `PredictedCallGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `PredictedCallGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `PredictedCallGenerator::generate` ← `PredictedCallGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate`                                     |
| removed | -256.015 KiB |  <0.1% → 0.0% |       256 KiB → 0 B |         1 → 0 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `NodeHash::hash_find_insert` ← `PhaseIterGVN::transform_old` ← `Conv2BNode::Ideal` ← `PhaseIterGVN::transform_old` ← `PhaseIterGVN::optimize` ← `Compile::process_for_post_loop_opts_igvn` ← `Compile::Optimize`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| removed | -256.015 KiB |  <0.1% → 0.0% |       256 KiB → 0 B |         1 → 0 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `PhaseGVN::transform_no_reclaim` ← `GraphKit::store_to_memory` ← `BarrierSetC2::store_at_resolved` ← `BarrierSetC2::store_at` ← `GraphKit::access_store_at` ← `Parse::do_put_xxx` ← `Parse::do_field_access` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `PredictedCallGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `PredictedCallGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `PredictedCallGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate`                                                                                                                                                                                                                                                                                                                                                                                                                           |
| removed | -256.015 KiB |  <0.1% → 0.0% |       256 KiB → 0 B |         1 → 0 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Type_Array::grow` ← `GraphKit::set_all_memory` ← `Parse::build_exits` ← `Parse::Parse` ← `ParseGenerator::generate` ← `PredictedCallGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

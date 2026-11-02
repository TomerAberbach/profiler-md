# Allocated native memory profile diff

Allocated 1.33 GiB (-4.958 MiB, -0.4%) over 8,665 → 8,502 samples (161 KiB → 164 KiB per sample).

| Category | Change |      Delta |      % |     Size |       Samples |
| -------- | -----: | ---------: | -----: | -------: | ------------: |
| Native   |  -0.4% | -4.958 MiB | 100.0% | 1.33 GiB | 8,665 → 8,502 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest and most changed functions.

```
└── … 1.32 GiB (99.4% → 99.5%) Compile::Compile at libjvm.dylib
    ├── 747 MiB → 734 MiB (54.8% → 54.1%) Compile::Optimize
    │   ├── … 359 MiB → 355 MiB (26.3% → 26.1%) PhaseIdealLoop::build_and_optimize at libjvm.dylib
    │   │   ├── … 314 MiB → 309 MiB (23.0% → 22.7%) malloc_hook at libasyncProfiler.dylib
    │   │   ├── … 10.1 MiB → 11 MiB (0.7% → 0.8%) malloc_hook at libasyncProfiler.dylib
    │   │   ├── … 8.72 MiB → 9.63 MiB (0.6% → 0.7%) malloc_hook at libasyncProfiler.dylib
    │   │   ├── 6.12 MiB → 6.37 MiB (0.4% → 0.5%) Arena::grow
    │   │   ├── … 4.97 MiB → 5.53 MiB (0.4%) PhaseIdealLoop::loop_predication_impl_helper at libjvm.dylib
    │   │   ├── 4.54 MiB → 4.03 MiB (0.3%) PhaseIdealLoop::split_if_with_blocks
    │   │   └── 3.25 MiB → 2.84 MiB (0.2%) IdealLoopTree::iteration_split
    │   ├── … 350 MiB → 339 MiB (25.7% → 25.0%) PhaseIdealLoop::build_and_optimize at libjvm.dylib
    │   │   ├── … 309 MiB → 300 MiB (22.7% → 22.1%) malloc_hook at libasyncProfiler.dylib
    │   │   ├── … 11.3 MiB → 10.8 MiB (0.8%) malloc_hook at libasyncProfiler.dylib
    │   │   ├── … 11.7 MiB → 9.94 MiB (0.9% → 0.7%) malloc_hook at libasyncProfiler.dylib
    │   │   ├── … 7.79 MiB → 8.08 MiB (0.6%) malloc_hook at libasyncProfiler.dylib
    │   │   ├── 3.73 MiB → 4.13 MiB (0.3%) IdealLoopTree::iteration_split
    │   │   └── 2.38 MiB → 2.47 MiB (0.2%) PhaseIdealLoop::split_if_with_blocks
    │   ├── … 8.19 MiB → 8.44 MiB (0.6%) malloc_hook at libasyncProfiler.dylib
    │   ├── 6.48 MiB → 6.21 MiB (0.5%) ConnectionGraph::do_analysis
    │   ├── 5.16 MiB → 5.63 MiB (0.4%) PhaseCCP::do_transform
    │   ├── 5.25 MiB → 5.3 MiB (0.4%) PhaseRenumberLive::PhaseRenumberLive
    │   └── 3.79 MiB → 3.34 MiB (0.3% → 0.2%) PhaseMacroExpand::expand_macro_nodes
    ├── 577 MiB → 586 MiB (42.3% → 43.2%) Compile::Code_Gen
    │   ├── 480 MiB → 487 MiB (35.2% → 35.8%) PhaseChaitin::Register_Allocate
    │   │   ├── … 376 MiB → 378 MiB (27.6% → 27.8%, self 100.0% globally) malloc_hook at libasyncProfiler.dylib
    │   │   ├── … 95.6 MiB → 101 MiB (7.0% → 7.4%) malloc_hook at libasyncProfiler.dylib
    │   │   └── 5.34 MiB → 4.94 MiB (0.4%) PhaseChaitin::Split
    │   ├── 85.5 MiB → 86.7 MiB (6.3% → 6.4%) Matcher::match
    │   │   ├── 53.2 MiB → 54.2 MiB (3.9% → 4.0%) Matcher::xform
    │   │   │   ├── … 38.8 MiB → 39.5 MiB (2.8% → 2.9%) malloc_hook at libasyncProfiler.dylib
    │   │   │   └── … 8.38 MiB → 8.88 MiB (0.6% → 0.7%) malloc_hook at libasyncProfiler.dylib
    │   │   ├── … 25.3 MiB → 25.8 MiB (1.9%) malloc_hook at libasyncProfiler.dylib
    │   │   └── 5.22 MiB → 5.44 MiB (0.4%) Node_Array::grow
    │   ├── 4.79 MiB → 5.23 MiB (0.4%) PhaseCFG::do_global_code_motion
    │   └── 3.43 MiB → 3.36 MiB (0.3% → 0.2%) PhaseCFG::PhaseCFG
    ├── … 15.3 MiB → 15.2 MiB (1.1%) Parse::do_one_block at libjvm.dylib
    │   ├── 4.06 MiB → 4.25 MiB (0.3%) Parse::do_field_access
    │   ├── 2.97 MiB → 3.63 MiB (0.2% → 0.3%) Parse::do_call
    │   └── 1.97 MiB → 1.66 MiB (0.1%) Parse::do_if
    └── … 8.56 MiB → 8.91 MiB (0.6% → 0.7%) malloc_hook at libasyncProfiler.dylib
```

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in native bytes allocated within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

##### Native

|  Change |  Delta |     % |          Size | Samples | Function       | Location                 |
| ------: | -----: | ----: | ------------: | ------: | -------------- | ------------------------ |
| +175.0% | +448 B | <0.1% | 256 B → 704 B |   1 → 3 | `realloc_hook` | `libasyncProfiler.dylib` |

#### Improvements

Functions with the largest decrease in native bytes allocated within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

##### Native

| Change |      Delta |      % |     Size |       Samples | Function      | Location                 |
| -----: | ---------: | -----: | -------: | ------------: | ------------- | ------------------------ |
|  -0.4% | -4.958 MiB | 100.0% | 1.33 GiB | 8,663 → 8,498 | `malloc_hook` | `libasyncProfiler.dylib` |

#### Callers

Callers with the largest change in contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `realloc_hook` (`libasyncProfiler.dylib`)

|  Change |  Delta |      % |          Size | Samples | Caller        | Location       |
| ------: | -----: | -----: | ------------: | ------: | ------------- | -------------- |
| +175.0% | +448 B | 100.0% | 256 B → 704 B |   1 → 3 | `os::realloc` | `libjvm.dylib` |

##### `malloc_hook` (`libasyncProfiler.dylib`)

| Change |       Delta |     % |                Size |       Samples | Caller                                    | Location          |
| -----: | ----------: | ----: | ------------------: | ------------: | ----------------------------------------- | ----------------- |
|  -0.4% |  -5.036 MiB | 99.8% | 1.33 GiB → 1.32 GiB | 8,587 → 8,423 | `os::malloc`                              | `libjvm.dylib`    |
| +60.0% |     +96 KiB | <0.1% |   160 KiB → 256 KiB |         5 → 8 | `updatewindow`                            | `libzip.dylib`    |
| +54.1% | +59.414 KiB | <0.1% |   110 KiB → 169 KiB |         6 → 8 | `CCalloc`                                 | `libverify.dylib` |
|  -2.2% | -59.012 KiB |  0.2% | 2.62 MiB → 2.57 MiB |       38 → 33 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib`   |
| -55.6% | -14.042 KiB | <0.1% | 25.3 KiB → 11.2 KiB |         2 → 1 | `readBytes`                               | `libjava.dylib`   |

### Total size

#### Regressions

Functions with the largest increase in native bytes allocated within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

|  Change |          Delta |             % |                Size |       Samples | Function                                                             | Location       |
| ------: | -------------: | ------------: | ------------------: | ------------: | -------------------------------------------------------------------- | -------------- |
|   +1.6% |     +9.248 MiB | 42.3% → 43.2% |   577 MiB → 586 MiB | 3,443 → 3,450 | `Compile::Code_Gen`                                                  | `libjvm.dylib` |
|   +1.4% |     +6.589 MiB | 35.2% → 35.8% |   480 MiB → 487 MiB | 2,568 → 2,564 | `PhaseChaitin::Register_Allocate`                                    | `libjvm.dylib` |
|   +5.2% |     +5.001 MiB |   7.0% → 7.4% |  95.8 MiB → 101 MiB |     769 → 788 | `PhaseLive::compute`                                                 | `libjvm.dylib` |
|   +0.5% |     +1.997 MiB | 27.6% → 27.8% |   376 MiB → 378 MiB | 1,657 → 1,656 | `PhaseIFG::init`                                                     | `libjvm.dylib` |
|   +1.2% |     +1.375 MiB |   8.6% → 8.8% |   117 MiB → 119 MiB | 1,701 → 1,670 | `Arena::Arealloc`                                                    | `libjvm.dylib` |
|   +8.3% |     +1.289 MiB |   1.1% → 1.2% | 15.6 MiB → 16.9 MiB |     151 → 164 | `PhaseIterGVN::transform_old`                                        | `libjvm.dylib` |
|   +7.9% |     +1.226 MiB |   1.1% → 1.2% | 15.6 MiB → 16.9 MiB |     151 → 163 | `PhaseIterGVN::optimize`                                             | `libjvm.dylib` |
|   +1.4% |     +1.221 MiB |   6.3% → 6.4% | 85.5 MiB → 86.7 MiB |     678 → 671 | `Matcher::match`                                                     | `libjvm.dylib` |
|  +12.2% |     +1.219 MiB |   0.7% → 0.8% | 9.97 MiB → 11.2 MiB |     208 → 217 | `PhaseIdealLoop::loop_predication_impl`                              | `libjvm.dylib` |
|  +12.2% |     +1.219 MiB |   0.7% → 0.8% | 9.97 MiB → 11.2 MiB |     208 → 217 | `IdealLoopTree::loop_predication`                                    | `libjvm.dylib` |
| +235.7% |     +1.031 MiB |  <0.1% → 0.1% |  448 KiB → 1.47 MiB |        5 → 15 | `LibraryIntrinsic::generate`                                         | `libjvm.dylib` |
|   +1.9% | +1,009.226 KiB |   3.9% → 4.0% | 53.2 MiB → 54.2 MiB |           379 | `Matcher::xform`                                                     | `libjvm.dylib` |
|  +22.3% |   +992.242 KiB |   0.3% → 0.4% | 4.35 MiB → 5.31 MiB |      93 → 111 | `PathFrequency::to`                                                  | `libjvm.dylib` |
|  +32.7% |    +964.21 KiB |   0.2% → 0.3% | 2.88 MiB → 3.82 MiB |       50 → 51 | `Node::Node`                                                         | `libjvm.dylib` |
|  +21.6% |   +960.265 KiB |   0.3% → 0.4% | 4.35 MiB → 5.28 MiB |      93 → 110 | `GrowableArrayWithAllocator<float, GrowableArray<float>>::expand_to` | `libjvm.dylib` |
|  +32.8% |   +943.531 KiB |   0.2% → 0.3% | 2.81 MiB → 3.73 MiB |       51 → 65 | `PhaseOutput::Output`                                                | `libjvm.dylib` |
| +124.4% |   +836.101 KiB |  <0.1% → 0.1% |  672 KiB → 1.47 MiB |       10 → 14 | `PhaseIdealLoop::split_if_with_blocks_pre`                           | `libjvm.dylib` |
| +650.3% |    +832.14 KiB |  <0.1% → 0.1% |   128 KiB → 960 KiB |         3 → 7 | `GraphKit::set_predefined_output_for_runtime_call`                   | `libjvm.dylib` |
| +113.6% |   +800.226 KiB |          0.1% |  704 KiB → 1.47 MiB |       16 → 28 | `PhaseAggressiveCoalesce::insert_copies`                             | `libjvm.dylib` |
|   +6.5% |   +800.203 KiB |          0.9% | 12.1 MiB → 12.9 MiB |     114 → 127 | `PhaseRemoveUseless::PhaseRemoveUseless`                             | `libjvm.dylib` |

##### Native

|   Change |        Delta |            % |                Size |       Samples | Function                                                                     | Location       |
| -------: | -----------: | -----------: | ------------------: | ------------: | ---------------------------------------------------------------------------- | -------------- |
|    +1.2% |   +1.375 MiB |  8.6% → 8.8% |   117 MiB → 119 MiB | 1,701 → 1,670 | `Arena::Arealloc`                                                            | `libjvm.dylib` |
|   +12.2% |   +1.219 MiB |  0.7% → 0.8% | 9.97 MiB → 11.2 MiB |     208 → 217 | `IdealLoopTree::loop_predication`                                            | `libjvm.dylib` |
|  +235.7% |   +1.031 MiB | <0.1% → 0.1% |  448 KiB → 1.47 MiB |        5 → 15 | `LibraryIntrinsic::generate`                                                 | `libjvm.dylib` |
|   +22.3% | +992.242 KiB |  0.3% → 0.4% | 4.35 MiB → 5.31 MiB |      93 → 111 | `PathFrequency::to`                                                          | `libjvm.dylib` |
|   +21.6% | +960.265 KiB |  0.3% → 0.4% | 4.35 MiB → 5.28 MiB |      93 → 110 | `GrowableArrayWithAllocator<float, GrowableArray<float>>::expand_to`         | `libjvm.dylib` |
| +1899.3% | +608.062 KiB |        <0.1% |    32 KiB → 640 KiB |         1 → 5 | `LibraryCallKit::try_to_inline`                                              | `libjvm.dylib` |
|  +799.7% | +512.046 KiB |        <0.1% |    64 KiB → 576 KiB |         2 → 5 | `BarrierSetC2::store_at_resolved`                                            | `libjvm.dylib` |
|    +1.7% | +352.351 KiB |         1.5% | 20.1 MiB → 20.4 MiB |     302 → 327 | `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to`           | `libjvm.dylib` |
| +1099.5% | +352.015 KiB |        <0.1% |    32 KiB → 384 KiB |         1 → 2 | `LibraryCallKit::inline_unsafe_newArray`                                     | `libjvm.dylib` |
|      new | +320.031 KiB | 0.0% → <0.1% |       0 B → 320 KiB |         0 → 2 | `LibraryCallKit::load_klass_from_mirror_common`                              | `libjvm.dylib` |
|  +112.5% | +288.046 KiB |        <0.1% |   256 KiB → 544 KiB |         3 → 6 | `BarrierSetC2::obj_allocate`                                                 | `libjvm.dylib` |
|  +299.9% | +288.031 KiB |        <0.1% |    96 KiB → 384 KiB |         2 → 4 | `Parse::do_instanceof`                                                       | `libjvm.dylib` |
|      new | +256.046 KiB | 0.0% → <0.1% |       0 B → 256 KiB |         0 → 3 | `LibraryCallKit::inline_native_Class_query`                                  | `libjvm.dylib` |
|  +399.8% | +256.015 KiB |        <0.1% |    64 KiB → 320 KiB |         2 → 3 | `Parse::catch_inline_exceptions`                                             | `libjvm.dylib` |
|   +15.7% | +255.984 KiB |         0.1% | 1.59 MiB → 1.84 MiB |       17 → 16 | `Parse::build_exits`                                                         | `libjvm.dylib` |
|    +1.7% | +224.148 KiB |  0.9% → 1.0% | 12.9 MiB → 13.2 MiB |     132 → 144 | `Type_Array::grow`                                                           | `libjvm.dylib` |
|  +140.1% | +224.132 KiB |        <0.1% |   160 KiB → 384 KiB |         5 → 6 | `Parse::do_exits`                                                            | `libjvm.dylib` |
|    +5.3% | +223.867 KiB |         0.3% | 4.09 MiB → 4.31 MiB |       63 → 52 | `Parse::do_field_access`                                                     | `libjvm.dylib` |
|   +50.0% | +160.101 KiB |        <0.1% |   320 KiB → 480 KiB |        6 → 10 | `GrowableArrayWithAllocator<Interval*, GrowableArray<Interval*>>::expand_to` | `libjvm.dylib` |
|      new | +150.046 KiB | 0.0% → <0.1% |       0 B → 150 KiB |         0 → 3 | `NonSafepointEmitter::emit_non_safepoint`                                    | `libjvm.dylib` |

#### Improvements

Functions with the largest decrease in native bytes allocated within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

| Change |       Delta |             % |                Size |       Samples | Function                                   | Location                  |
| -----: | ----------: | ------------: | ------------------: | ------------: | ------------------------------------------ | ------------------------- |
|  -2.3% | -14.595 MiB | 45.7% → 44.8% |   623 MiB → 608 MiB | 2,538 → 2,453 | `PhaseIdealLoop::Dominators`               | `libjvm.dylib`            |
|  -2.0% | -14.471 MiB | 52.0% → 51.1% |   709 MiB → 695 MiB | 4,001 → 3,910 | `PhaseIdealLoop::PhaseIdealLoop`           | `libjvm.dylib`            |
|  -2.0% | -14.439 MiB | 52.0% → 51.1% |   709 MiB → 695 MiB | 4,000 → 3,910 | `PhaseIdealLoop::build_and_optimize`       | `libjvm.dylib`            |
|  -2.0% | -14.213 MiB | 52.3% → 51.5% |   713 MiB → 699 MiB | 4,041 → 3,949 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib`            |
|  -1.7% |  -12.54 MiB | 54.8% → 54.1% |   747 MiB → 734 MiB | 4,528 → 4,435 | `Compile::Optimize`                        | `libjvm.dylib`            |
|  -3.1% | -10.794 MiB | 25.8% → 25.1% |   351 MiB → 341 MiB | 1,821 → 1,786 | `Compile::optimize_loops`                  | `libjvm.dylib`            |
|  -0.4% |  -5.138 MiB |         99.7% | 1.33 GiB → 1.32 GiB | 8,465 → 8,303 | `Chunk::operator new`                      | `libjvm.dylib`            |
|  -0.4% |  -5.137 MiB |         99.7% | 1.33 GiB → 1.32 GiB | 8,464 → 8,303 | `Arena::grow`                              | `libjvm.dylib`            |
|  -0.4% |  -5.036 MiB |         99.8% | 1.33 GiB → 1.32 GiB | 8,587 → 8,423 | `os::malloc`                               | `libjvm.dylib`            |
|  -0.4% |  -4.958 MiB |        100.0% |            1.33 GiB | 8,663 → 8,498 | `malloc_hook`                              | `libasyncProfiler.dylib`  |
|  -0.4% |  -4.825 MiB |         99.7% | 1.33 GiB → 1.32 GiB | 8,477 → 8,309 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib`            |
|  -0.4% |  -4.824 MiB |         99.7% | 1.33 GiB → 1.32 GiB | 8,476 → 8,309 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib`            |
|  -0.4% |  -4.794 MiB |         99.7% | 1.33 GiB → 1.32 GiB | 8,477 → 8,310 | `JavaThread::thread_main_inner`            | `libjvm.dylib`            |
|  -0.3% |  -4.737 MiB |         99.7% | 1.33 GiB → 1.32 GiB | 8,486 → 8,320 | `Thread::call_run`                         | `libjvm.dylib`            |
|  -0.3% |  -4.737 MiB |         99.7% | 1.33 GiB → 1.32 GiB | 8,486 → 8,320 | `thread_native_entry`                      | `libjvm.dylib`            |
|  -0.3% |  -4.737 MiB |         99.7% | 1.33 GiB → 1.32 GiB | 8,486 → 8,320 | `_pthread_start`                           | `libsystem_pthread.dylib` |
|  -0.3% |  -4.737 MiB |         99.7% | 1.33 GiB → 1.32 GiB | 8,486 → 8,320 | `thread_start`                             | `libsystem_pthread.dylib` |
|  -0.3% |  -3.916 MiB | 99.4% → 99.5% |            1.32 GiB | 8,356 → 8,228 | `Compile::Compile`                         | `libjvm.dylib`            |
|  -0.3% |  -3.916 MiB | 99.4% → 99.5% |            1.32 GiB | 8,356 → 8,228 | `C2Compiler::compile_method`               | `libjvm.dylib`            |
| -82.5% |  -1.031 MiB |  0.1% → <0.1% |  1.25 MiB → 224 KiB |        10 → 7 | `Parse::do_ifnull`                         | `libjvm.dylib`            |

##### Native

| Change |        Delta |            % |                Size |       Samples | Function                                                                           | Location                  |
| -----: | -----------: | -----------: | ------------------: | ------------: | ---------------------------------------------------------------------------------- | ------------------------- |
|  -0.4% |   -5.138 MiB |        99.7% | 1.33 GiB → 1.32 GiB | 8,465 → 8,303 | `Chunk::operator new`                                                              | `libjvm.dylib`            |
|  -0.4% |   -5.137 MiB |        99.7% | 1.33 GiB → 1.32 GiB | 8,464 → 8,303 | `Arena::grow`                                                                      | `libjvm.dylib`            |
|  -0.4% |   -5.036 MiB |        99.8% | 1.33 GiB → 1.32 GiB | 8,587 → 8,423 | `os::malloc`                                                                       | `libjvm.dylib`            |
|  -0.4% |   -4.958 MiB |       100.0% |            1.33 GiB | 8,663 → 8,498 | `malloc_hook`                                                                      | `libasyncProfiler.dylib`  |
|  -0.4% |   -4.794 MiB |        99.7% | 1.33 GiB → 1.32 GiB | 8,477 → 8,310 | `JavaThread::thread_main_inner`                                                    | `libjvm.dylib`            |
|  -0.3% |   -4.737 MiB |        99.7% | 1.33 GiB → 1.32 GiB | 8,486 → 8,320 | `Thread::call_run`                                                                 | `libjvm.dylib`            |
|  -0.3% |   -4.737 MiB |        99.7% | 1.33 GiB → 1.32 GiB | 8,486 → 8,320 | `thread_native_entry`                                                              | `libjvm.dylib`            |
|  -0.3% |   -4.737 MiB |        99.7% | 1.33 GiB → 1.32 GiB | 8,486 → 8,320 | `_pthread_start`                                                                   | `libsystem_pthread.dylib` |
|  -0.3% |   -4.737 MiB |        99.7% | 1.33 GiB → 1.32 GiB | 8,486 → 8,320 | `thread_start`                                                                     | `libsystem_pthread.dylib` |
| -82.5% |   -1.031 MiB | 0.1% → <0.1% |  1.25 MiB → 224 KiB |        10 → 7 | `Parse::do_ifnull`                                                                 | `libjvm.dylib`            |
| -23.8% | -929.835 KiB |  0.3% → 0.2% | 3.82 MiB → 2.91 MiB |      120 → 80 | `Compiler::compile_method`                                                         | `libjvm.dylib`            |
|  -3.6% | -735.593 KiB |         1.4% |   19.7 MiB → 19 MiB |     278 → 239 | `Parse::do_one_block`                                                              | `libjvm.dylib`            |
| -30.4% | -671.976 KiB |  0.2% → 0.1% |  2.16 MiB → 1.5 MiB |       21 → 20 | `Parse::do_one_bytecode`                                                           | `libjvm.dylib`            |
|  -3.3% | -671.578 KiB |         1.4% |   19.7 MiB → 19 MiB |     278 → 240 | `Parse::do_all_blocks`                                                             | `libjvm.dylib`            |
|  -3.3% | -671.578 KiB |         1.4% |   19.7 MiB → 19 MiB |     278 → 240 | `Parse::Parse`                                                                     | `libjvm.dylib`            |
|  -3.3% | -671.578 KiB |         1.4% |   19.7 MiB → 19 MiB |     278 → 240 | `ParseGenerator::generate`                                                         | `libjvm.dylib`            |
| -51.4% | -608.109 KiB | 0.1% → <0.1% |  1.16 MiB → 576 KiB |        14 → 7 | `Parse::merge_common`                                                              | `libjvm.dylib`            |
| -24.3% | -544.093 KiB |  0.2% → 0.1% | 2.19 MiB → 1.66 MiB |       32 → 26 | `G1BarrierSetC2::post_barrier`                                                     | `libjvm.dylib`            |
| -17.4% | -520.171 KiB |         0.2% | 2.92 MiB → 2.42 MiB |       54 → 43 | `IdealLoopTree::counted_loop`                                                      | `libjvm.dylib`            |
| -21.1% | -480.101 KiB |  0.2% → 0.1% | 2.22 MiB → 1.75 MiB |       47 → 38 | `GrowableArrayWithAllocator<unsigned int, GrowableArray<unsigned int>>::expand_to` | `libjvm.dylib`            |

#### Callers

Callers with the largest change in contribution to each function's total size. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `Compile::Code_Gen` (`libjvm.dylib`)

| Change |      Delta |      % |              Size |       Samples | Caller             | Location       |
| -----: | ---------: | -----: | ----------------: | ------------: | ------------------ | -------------- |
|  +1.6% | +9.248 MiB | 100.0% | 577 MiB → 586 MiB | 3,443 → 3,450 | `Compile::Compile` | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

| Change |      Delta |      % |              Size |       Samples | Caller              | Location       |
| -----: | ---------: | -----: | ----------------: | ------------: | ------------------- | -------------- |
|  +1.4% | +6.589 MiB | 100.0% | 480 MiB → 487 MiB | 2,568 → 2,564 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `PhaseLive::compute` (`libjvm.dylib`)

| Change |      Delta |      % |               Size |   Samples | Caller                            | Location       |
| -----: | ---------: | -----: | -----------------: | --------: | --------------------------------- | -------------- |
|  +5.2% | +5.001 MiB | 100.0% | 95.8 MiB → 101 MiB | 769 → 788 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseIFG::init` (`libjvm.dylib`)

| Change |      Delta |      % |              Size |       Samples | Caller                            | Location       |
| -----: | ---------: | -----: | ----------------: | ------------: | --------------------------------- | -------------- |
|  +0.5% | +1.997 MiB | 100.0% | 376 MiB → 378 MiB | 1,657 → 1,656 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `Arena::Arealloc` (`libjvm.dylib`)

|  Change |        Delta |             % |                Size |       Samples | Caller                           | Location       |
| ------: | -----------: | ------------: | ------------------: | ------------: | -------------------------------- | -------------- |
|  +23.2% | +928.093 KiB |   3.3% → 4.1% | 3.91 MiB → 4.81 MiB |       47 → 53 | `PhaseGVN::transform_no_reclaim` | `libjvm.dylib` |
|   -1.1% | -736.398 KiB | 58.2% → 56.9% | 68.4 MiB → 67.7 MiB | 1,053 → 1,010 | `Node_Array::grow`               | `libjvm.dylib` |
|  +18.0% | +640.062 KiB |   3.0% → 3.4% | 3.47 MiB → 4.09 MiB |       38 → 42 | `Block_Array::grow`              | `libjvm.dylib` |
|   +5.8% | +512.164 KiB |   7.3% → 7.7% | 8.63 MiB → 9.13 MiB |       80 → 83 | `Node::out_grow`                 | `libjvm.dylib` |
| +300.0% | +480.046 KiB |   0.1% → 0.5% |   160 KiB → 640 KiB |         2 → 5 | `PhaseIterGVN::transform`        | `libjvm.dylib` |

##### `PhaseIterGVN::transform_old` (`libjvm.dylib`)

|  Change |        Delta |              % |                Size |   Samples | Caller                                            | Location       |
| ------: | -----------: | -------------: | ------------------: | --------: | ------------------------------------------------- | -------------- |
|   +7.9% |   +1.226 MiB | 100.0% → 99.6% | 15.6 MiB → 16.9 MiB | 151 → 163 | `PhaseIterGVN::optimize`                          | `libjvm.dylib` |
|     new | +128.031 KiB |    0.0% → 0.7% |       0 B → 128 KiB |     0 → 2 | `IfNode::Ideal_common`                            | `libjvm.dylib` |
| removed |  -64.031 KiB |    0.4% → 0.0% |        64 KiB → 0 B |     2 → 0 | `PhiNode::Ideal`                                  | `libjvm.dylib` |
|     new |  +64.015 KiB |    0.0% → 0.4% |        0 B → 64 KiB |     0 → 1 | `PhaseIdealLoop::has_dominating_loop_limit_check` | `libjvm.dylib` |
|  -11.1% |  -32.015 KiB |    1.8% → 1.5% |   288 KiB → 256 KiB |     2 → 1 | `AddPNode::Ideal`                                 | `libjvm.dylib` |

##### `PhaseIterGVN::optimize` (`libjvm.dylib`)

|  Change |        Delta |             % |                Size | Samples | Caller                                     | Location       |
| ------: | -----------: | ------------: | ------------------: | ------: | ------------------------------------------ | -------------- |
| +136.4% | +480.031 KiB |   2.2% → 4.8% |   352 KiB → 832 KiB |   3 → 5 | `Compile::process_for_post_loop_opts_igvn` | `libjvm.dylib` |
|   +3.1% | +288.179 KiB | 57.4% → 54.9% | 8.97 MiB → 9.25 MiB | 92 → 96 | `Compile::Optimize`                        | `libjvm.dylib` |
|   +6.2% | +264.023 KiB | 26.4% → 26.0% | 4.13 MiB → 4.38 MiB | 40 → 39 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib` |
| removed | -256.031 KiB |   1.6% → 0.0% |       256 KiB → 0 B |   2 → 0 | `Compile::remove_speculative_types`        | `libjvm.dylib` |
|     new | +256.015 KiB |   0.0% → 1.5% |       0 B → 256 KiB |   0 → 1 | `Compile::inline_incrementally_cleanup`    | `libjvm.dylib` |

##### `Matcher::match` (`libjvm.dylib`)

| Change |      Delta |      % |                Size |   Samples | Caller              | Location       |
| -----: | ---------: | -----: | ------------------: | --------: | ------------------- | -------------- |
|  +1.4% | +1.221 MiB | 100.0% | 85.5 MiB → 86.7 MiB | 678 → 671 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `PhaseIdealLoop::loop_predication_impl` (`libjvm.dylib`)

| Change |      Delta |      % |                Size |   Samples | Caller                            | Location       |
| -----: | ---------: | -----: | ------------------: | --------: | --------------------------------- | -------------- |
| +12.2% | +1.219 MiB | 100.0% | 9.97 MiB → 11.2 MiB | 208 → 217 | `IdealLoopTree::loop_predication` | `libjvm.dylib` |

##### `IdealLoopTree::loop_predication` (`libjvm.dylib`)

| Change |        Delta |             % |                Size |   Samples | Caller                               | Location       |
| -----: | -----------: | ------------: | ------------------: | --------: | ------------------------------------ | -------------- |
| +12.2% |   +1.219 MiB |        100.0% | 9.97 MiB → 11.2 MiB | 208 → 217 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |
|  +4.5% | +223.968 KiB | 48.9% → 45.5% |  4.88 MiB → 5.1 MiB |  103 → 96 | `IdealLoopTree::loop_predication`    | `libjvm.dylib` |

##### `LibraryIntrinsic::generate` (`libjvm.dylib`)

|  Change |      Delta |      % |               Size | Samples | Caller           | Location       |
| ------: | ---------: | -----: | -----------------: | ------: | ---------------- | -------------- |
| +235.7% | +1.031 MiB | 100.0% | 448 KiB → 1.47 MiB |  5 → 15 | `Parse::do_call` | `libjvm.dylib` |

##### `Matcher::xform` (`libjvm.dylib`)

| Change |          Delta |      % |                Size | Samples | Caller           | Location       |
| -----: | -------------: | -----: | ------------------: | ------: | ---------------- | -------------- |
|  +1.9% | +1,009.226 KiB | 100.0% | 53.2 MiB → 54.2 MiB |     379 | `Matcher::match` | `libjvm.dylib` |

##### `PathFrequency::to` (`libjvm.dylib`)

| Change |        Delta |             % |                Size | Samples | Caller                                             | Location       |
| -----: | -----------: | ------------: | ------------------: | ------: | -------------------------------------------------- | -------------- |
| +26.7% | +512.218 KiB | 43.2% → 44.7% | 1.88 MiB → 2.38 MiB | 41 → 55 | `PhaseIdealLoop::loop_predication_follow_branches` | `libjvm.dylib` |
| +19.0% | +480.023 KiB | 56.8% → 55.3% | 2.47 MiB → 2.94 MiB | 52 → 56 | `PhaseIdealLoop::loop_predication_impl`            | `libjvm.dylib` |

##### `Node::Node` (`libjvm.dylib`)

|  Change |        Delta |             % |              Size | Samples | Caller                             | Location       |
| ------: | -----------: | ------------: | ----------------: | ------: | ---------------------------------- | -------------- |
| +399.9% | +384.007 KiB |  3.3% → 12.3% |  96 KiB → 480 KiB |   2 → 5 | `Parse::build_exits`               | `libjvm.dylib` |
|  +63.6% | +224.062 KiB | 12.0% → 14.7% | 352 KiB → 576 KiB |   4 → 8 | `MergeMemNode::MergeMemNode`       | `libjvm.dylib` |
|  +75.0% | +192.031 KiB |  8.7% → 11.5% | 256 KiB → 448 KiB |   2 → 4 | `PhaseChaitin::get_spillcopy_wide` | `libjvm.dylib` |
| removed | -192.031 KiB |   6.5% → 0.0% |     192 KiB → 0 B |   2 → 0 | `ConNode::make`                    | `libjvm.dylib` |
|     new | +192.031 KiB |   0.0% → 4.9% |     0 B → 192 KiB |   0 → 2 | `StoreNode::make`                  | `libjvm.dylib` |

##### `GrowableArrayWithAllocator<float, GrowableArray<float>>::expand_to` (`libjvm.dylib`)

| Change |        Delta |      % |                Size |  Samples | Caller              | Location       |
| -----: | -----------: | -----: | ------------------: | -------: | ------------------- | -------------- |
| +21.6% | +960.265 KiB | 100.0% | 4.35 MiB → 5.28 MiB | 93 → 110 | `PathFrequency::to` | `libjvm.dylib` |

##### `PhaseOutput::Output` (`libjvm.dylib`)

| Change |        Delta |      % |                Size | Samples | Caller              | Location       |
| -----: | -----------: | -----: | ------------------: | ------: | ------------------- | -------------- |
| +32.8% | +943.531 KiB | 100.0% | 2.81 MiB → 3.73 MiB | 51 → 65 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `PhaseIdealLoop::split_if_with_blocks_pre` (`libjvm.dylib`)

|  Change |        Delta |      % |               Size | Samples | Caller                                 | Location       |
| ------: | -----------: | -----: | -----------------: | ------: | -------------------------------------- | -------------- |
| +124.4% | +836.101 KiB | 100.0% | 672 KiB → 1.47 MiB | 10 → 14 | `PhaseIdealLoop::split_if_with_blocks` | `libjvm.dylib` |

##### `GraphKit::set_predefined_output_for_runtime_call` (`libjvm.dylib`)

|  Change |       Delta |      % |              Size | Samples | Caller                        | Location       |
| ------: | ----------: | -----: | ----------------: | ------: | ----------------------------- | -------------- |
| +650.3% | +832.14 KiB | 100.0% | 128 KiB → 960 KiB |   3 → 7 | `GraphKit::make_runtime_call` | `libjvm.dylib` |

##### `PhaseAggressiveCoalesce::insert_copies` (`libjvm.dylib`)

|  Change |        Delta |      % |               Size | Samples | Caller                            | Location       |
| ------: | -----------: | -----: | -----------------: | ------: | --------------------------------- | -------------- |
| +113.6% | +800.226 KiB | 100.0% | 704 KiB → 1.47 MiB | 16 → 28 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseRemoveUseless::PhaseRemoveUseless` (`libjvm.dylib`)

| Change |        Delta |             % |                Size | Samples | Caller                                  | Location       |
| -----: | -----------: | ------------: | ------------------: | ------: | --------------------------------------- | -------------- |
| +87.5% | +448.078 KiB |   4.1% → 7.3% |   512 KiB → 960 KiB |  6 → 11 | `Compile::inline_incrementally_cleanup` | `libjvm.dylib` |
|  +4.0% | +352.046 KiB | 70.8% → 69.2% | 8.56 MiB → 8.91 MiB | 78 → 81 | `Compile::Compile`                      | `libjvm.dylib` |
|  +5.4% |  +96.062 KiB | 14.5% → 14.3% | 1.75 MiB → 1.84 MiB | 23 → 27 | `PhaseRenumberLive::PhaseRenumberLive`  | `libjvm.dylib` |
|  -7.3% |  -95.984 KiB |  10.6% → 9.2% | 1.28 MiB → 1.19 MiB |   7 → 8 | `Compile::inline_string_calls`          | `libjvm.dylib` |

##### `LibraryCallKit::try_to_inline` (`libjvm.dylib`)

|   Change |        Delta |      % |             Size | Samples | Caller                       | Location       |
| -------: | -----------: | -----: | ---------------: | ------: | ---------------------------- | -------------- |
| +1899.3% | +608.062 KiB | 100.0% | 32 KiB → 640 KiB |   1 → 5 | `LibraryIntrinsic::generate` | `libjvm.dylib` |

##### `BarrierSetC2::store_at_resolved` (`libjvm.dylib`)

|  Change |        Delta |      % |             Size | Samples | Caller                                  | Location       |
| ------: | -----------: | -----: | ---------------: | ------: | --------------------------------------- | -------------- |
| +799.7% | +512.046 KiB | 100.0% | 64 KiB → 576 KiB |   2 → 5 | `ModRefBarrierSetC2::store_at_resolved` | `libjvm.dylib` |

##### `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` (`libjvm.dylib`)

|  Change |        Delta |              % |              Size |   Samples | Caller                                               | Location       |
| ------: | -----------: | -------------: | ----------------: | --------: | ---------------------------------------------------- | -------------- |
|   +2.3% | +480.367 KiB | 99.4% → 100.0% | 20 MiB → 20.4 MiB | 301 → 327 | `PhaseIdealLoop::build_and_optimize`                 | `libjvm.dylib` |
| removed | -128.015 KiB |    0.6% → 0.0% |     128 KiB → 0 B |     1 → 0 | `PhaseIdealLoop::dom_lca_for_get_late_ctrl_internal` | `libjvm.dylib` |

##### `LibraryCallKit::inline_unsafe_newArray` (`libjvm.dylib`)

|   Change |        Delta |      % |             Size | Samples | Caller                          | Location       |
| -------: | -----------: | -----: | ---------------: | ------: | ------------------------------- | -------------- |
| +1099.5% | +352.015 KiB | 100.0% | 32 KiB → 384 KiB |   1 → 2 | `LibraryCallKit::try_to_inline` | `libjvm.dylib` |

##### `LibraryCallKit::load_klass_from_mirror_common` (`libjvm.dylib`)

| Change |        Delta |            % |          Size | Samples | Caller                                      | Location       |
| -----: | -----------: | -----------: | ------------: | ------: | ------------------------------------------- | -------------- |
|    new | +256.015 KiB | 0.0% → 80.0% | 0 B → 256 KiB |   0 → 1 | `LibraryCallKit::inline_unsafe_newArray`    | `libjvm.dylib` |
|    new |  +64.015 KiB | 0.0% → 20.0% |  0 B → 64 KiB |   0 → 1 | `LibraryCallKit::inline_native_Class_query` | `libjvm.dylib` |

##### `BarrierSetC2::obj_allocate` (`libjvm.dylib`)

|  Change |        Delta |      % |              Size | Samples | Caller                                     | Location       |
| ------: | -----------: | -----: | ----------------: | ------: | ------------------------------------------ | -------------- |
| +112.5% | +288.046 KiB | 100.0% | 256 KiB → 544 KiB |   3 → 6 | `PhaseMacroExpand::expand_allocate_common` | `libjvm.dylib` |

##### `Parse::do_instanceof` (`libjvm.dylib`)

|  Change |        Delta |      % |             Size | Samples | Caller                | Location       |
| ------: | -----------: | -----: | ---------------: | ------: | --------------------- | -------------- |
| +299.9% | +288.031 KiB | 100.0% | 96 KiB → 384 KiB |   2 → 4 | `Parse::do_one_block` | `libjvm.dylib` |

##### `LibraryCallKit::inline_native_Class_query` (`libjvm.dylib`)

| Change |        Delta |             % |          Size | Samples | Caller                       | Location       |
| -----: | -----------: | ------------: | ------------: | ------: | ---------------------------- | -------------- |
|    new | +256.046 KiB | 0.0% → 100.0% | 0 B → 256 KiB |   0 → 3 | `LibraryIntrinsic::generate` | `libjvm.dylib` |

##### `Parse::catch_inline_exceptions` (`libjvm.dylib`)

|  Change |        Delta |      % |             Size | Samples | Caller                 | Location       |
| ------: | -----------: | -----: | ---------------: | ------: | ---------------------- | -------------- |
| +399.8% | +256.015 KiB | 100.0% | 64 KiB → 320 KiB |   2 → 3 | `Parse::do_exceptions` | `libjvm.dylib` |

##### `Parse::build_exits` (`libjvm.dylib`)

| Change |        Delta |      % |                Size | Samples | Caller         | Location       |
| -----: | -----------: | -----: | ------------------: | ------: | -------------- | -------------- |
| +15.7% | +255.984 KiB | 100.0% | 1.59 MiB → 1.84 MiB | 17 → 16 | `Parse::Parse` | `libjvm.dylib` |

##### `Type_Array::grow` (`libjvm.dylib`)

|  Change |        Delta |             % |                Size | Samples | Caller                         | Location       |
| ------: | -----------: | ------------: | ------------------: | ------: | ------------------------------ | -------------- |
|  -20.6% | -672.039 KiB | 24.6% → 19.2% | 3.19 MiB → 2.53 MiB |      32 | `GraphKit::clone_map`          | `libjvm.dylib` |
| +106.7% | +512.015 KiB |   3.6% → 7.4% |   480 KiB → 992 KiB |   5 → 6 | `Parse::build_exits`           | `libjvm.dylib` |
|  +36.7% | +352.093 KiB |   7.2% → 9.7% |  960 KiB → 1.28 MiB |  8 → 14 | `Parse::return_current`        | `libjvm.dylib` |
|  -12.7% | -320.031 KiB | 19.1% → 16.4% | 2.47 MiB → 2.16 MiB | 24 → 22 | `IdealKit::delay_transform`    | `libjvm.dylib` |
|     new | +256.015 KiB |   0.0% → 1.9% |       0 B → 256 KiB |   0 → 1 | `GraphKit::array_ideal_length` | `libjvm.dylib` |

##### `Parse::do_exits` (`libjvm.dylib`)

|  Change |        Delta |      % |              Size | Samples | Caller         | Location       |
| ------: | -----------: | -----: | ----------------: | ------: | -------------- | -------------- |
| +140.1% | +224.132 KiB | 100.0% | 160 KiB → 384 KiB |   5 → 6 | `Parse::Parse` | `libjvm.dylib` |

##### `Parse::do_field_access` (`libjvm.dylib`)

| Change |        Delta |      % |                Size | Samples | Caller                | Location       |
| -----: | -----------: | -----: | ------------------: | ------: | --------------------- | -------------- |
|  +5.3% | +223.867 KiB | 100.0% | 4.09 MiB → 4.31 MiB | 63 → 52 | `Parse::do_one_block` | `libjvm.dylib` |

##### `GrowableArrayWithAllocator<Interval*, GrowableArray<Interval*>>::expand_to` (`libjvm.dylib`)

| Change |        Delta |      % |              Size | Samples | Caller                        | Location       |
| -----: | -----------: | -----: | ----------------: | ------: | ----------------------------- | -------------- |
| +50.0% | +160.101 KiB | 100.0% | 320 KiB → 480 KiB |  6 → 10 | `LinearScan::append_interval` | `libjvm.dylib` |

##### `NonSafepointEmitter::emit_non_safepoint` (`libjvm.dylib`)

| Change |        Delta |             % |          Size | Samples | Caller                                     | Location       |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------------------------ | -------------- |
|    new | +150.046 KiB | 0.0% → 100.0% | 0 B → 150 KiB |   0 → 3 | `NonSafepointEmitter::observe_instruction` | `libjvm.dylib` |

##### `PhaseIdealLoop::Dominators` (`libjvm.dylib`)

| Change |       Delta |      % |              Size |       Samples | Caller                               | Location       |
| -----: | ----------: | -----: | ----------------: | ------------: | ------------------------------------ | -------------- |
|  -2.3% | -14.595 MiB | 100.0% | 623 MiB → 608 MiB | 2,538 → 2,453 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

| Change |       Delta |      % |              Size |       Samples | Caller                     | Location       |
| -----: | ----------: | -----: | ----------------: | ------------: | -------------------------- | -------------- |
|  -2.0% | -14.471 MiB | 100.0% | 709 MiB → 695 MiB | 4,001 → 3,910 | `PhaseIdealLoop::optimize` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

| Change |       Delta |      % |              Size |       Samples | Caller                           | Location       |
| -----: | ----------: | -----: | ----------------: | ------------: | -------------------------------- | -------------- |
|  -2.0% | -14.439 MiB | 100.0% | 709 MiB → 695 MiB | 4,000 → 3,910 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

| Change |       Delta |             % |              Size |       Samples | Caller                    | Location       |
| -----: | ----------: | ------------: | ----------------: | ------------: | ------------------------- | -------------- |
|  -3.1% | -10.794 MiB | 49.3% → 48.7% | 351 MiB → 341 MiB | 1,821 → 1,786 | `Compile::optimize_loops` | `libjvm.dylib` |
|  -0.9% |  -3.418 MiB | 50.7% → 51.3% | 362 MiB → 358 MiB | 2,220 → 2,163 | `Compile::Optimize`       | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

| Change |      Delta |      % |              Size |       Samples | Caller             | Location       |
| -----: | ---------: | -----: | ----------------: | ------------: | ------------------ | -------------- |
|  -1.7% | -12.54 MiB | 100.0% | 747 MiB → 734 MiB | 4,528 → 4,435 | `Compile::Compile` | `libjvm.dylib` |

##### `Compile::optimize_loops` (`libjvm.dylib`)

| Change |       Delta |      % |              Size |       Samples | Caller              | Location       |
| -----: | ----------: | -----: | ----------------: | ------------: | ------------------- | -------------- |
|  -3.1% | -10.794 MiB | 100.0% | 351 MiB → 341 MiB | 1,821 → 1,786 | `Compile::Optimize` | `libjvm.dylib` |

##### `Chunk::operator new` (`libjvm.dylib`)

|  Change |      Delta |            % |                Size |       Samples | Caller         | Location       |
| ------: | ---------: | -----------: | ------------------: | ------------: | -------------- | -------------- |
|   -0.4% | -5.137 MiB |       100.0% | 1.33 GiB → 1.32 GiB | 8,464 → 8,303 | `Arena::grow`  | `libjvm.dylib` |
| removed |   -1,000 B | <0.1% → 0.0% |       1,000 B → 0 B |         1 → 0 | `Arena::Arena` | `libjvm.dylib` |

##### `Arena::grow` (`libjvm.dylib`)

| Change |        Delta |             % |                Size |       Samples | Caller                                                               | Location       |
| -----: | -----------: | ------------: | ------------------: | ------------: | -------------------------------------------------------------------- | -------------- |
|  -2.3% |  -14.564 MiB | 45.8% → 44.9% |   623 MiB → 608 MiB | 2,537 → 2,453 | `PhaseIdealLoop::Dominators`                                         | `libjvm.dylib` |
|  +5.4% |   +5.157 MiB |   7.0% → 7.4% |  95.6 MiB → 101 MiB |     763 → 787 | `PhaseLive::compute`                                                 | `libjvm.dylib` |
|  +0.5% |   +2.029 MiB | 27.7% → 27.9% |   376 MiB → 378 MiB |         1,656 | `PhaseIFG::init`                                                     | `libjvm.dylib` |
|  +1.2% |   +1.375 MiB |   8.6% → 8.8% |   117 MiB → 119 MiB | 1,701 → 1,670 | `Arena::Arealloc`                                                    | `libjvm.dylib` |
| +21.6% | +960.265 KiB |   0.3% → 0.4% | 4.35 MiB → 5.28 MiB |      93 → 110 | `GrowableArrayWithAllocator<float, GrowableArray<float>>::expand_to` | `libjvm.dylib` |

##### `os::malloc` (`libjvm.dylib`)

|  Change |        Delta |            % |                Size |       Samples | Caller                      | Location       |
| ------: | -----------: | -----------: | ------------------: | ------------: | --------------------------- | -------------- |
|   -0.4% |   -5.138 MiB |        99.9% | 1.33 GiB → 1.32 GiB | 8,465 → 8,303 | `Chunk::operator new`       | `libjvm.dylib` |
|  +44.1% | +104.833 KiB |        <0.1% |   238 KiB → 342 KiB |     110 → 109 | `AllocateHeap`              | `libjvm.dylib` |
|     ~0% |        -72 B |         0.1% |             914 KiB |         2 → 1 | `os::malloc`                | `libjvm.dylib` |
| removed |        -72 B | <0.1% → 0.0% |          72 B → 0 B |         1 → 0 | `JvmtiEnv::GetClassMethods` | `libjvm.dylib` |
|  -20.0% |         -5 B |        <0.1% |         25 B → 20 B |             1 | `os::strdup`                | `libjvm.dylib` |

##### `malloc_hook` (`libasyncProfiler.dylib`)

| Change |       Delta |     % |                Size |       Samples | Caller                                    | Location          |
| -----: | ----------: | ----: | ------------------: | ------------: | ----------------------------------------- | ----------------- |
|  -0.4% |  -5.036 MiB | 99.8% | 1.33 GiB → 1.32 GiB | 8,587 → 8,423 | `os::malloc`                              | `libjvm.dylib`    |
| +60.0% |     +96 KiB | <0.1% |   160 KiB → 256 KiB |         5 → 8 | `updatewindow`                            | `libzip.dylib`    |
| +54.1% | +59.414 KiB | <0.1% |   110 KiB → 169 KiB |         6 → 8 | `CCalloc`                                 | `libverify.dylib` |
|  -2.2% | -59.012 KiB |  0.2% | 2.62 MiB → 2.57 MiB |       38 → 33 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib`   |
| -55.6% | -14.042 KiB | <0.1% | 25.3 KiB → 11.2 KiB |         2 → 1 | `readBytes`                               | `libjava.dylib`   |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

| Change |      Delta |      % |                Size |       Samples | Caller                          | Location       |
| -----: | ---------: | -----: | ------------------: | ------------: | ------------------------------- | -------------- |
|  -0.4% | -4.825 MiB | 100.0% | 1.33 GiB → 1.32 GiB | 8,477 → 8,309 | `JavaThread::thread_main_inner` | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

| Change |      Delta |      % |                Size |       Samples | Caller                                | Location       |
| -----: | ---------: | -----: | ------------------: | ------------: | ------------------------------------- | -------------- |
|  -0.4% | -4.824 MiB | 100.0% | 1.33 GiB → 1.32 GiB | 8,476 → 8,309 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

| Change |      Delta |      % |                Size |       Samples | Caller             | Location       |
| -----: | ---------: | -----: | ------------------: | ------------: | ------------------ | -------------- |
|  -0.4% | -4.794 MiB | 100.0% | 1.33 GiB → 1.32 GiB | 8,477 → 8,310 | `Thread::call_run` | `libjvm.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

| Change |      Delta |      % |                Size |       Samples | Caller                | Location       |
| -----: | ---------: | -----: | ------------------: | ------------: | --------------------- | -------------- |
|  -0.3% | -4.737 MiB | 100.0% | 1.33 GiB → 1.32 GiB | 8,486 → 8,320 | `thread_native_entry` | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

| Change |      Delta |      % |                Size |       Samples | Caller           | Location                  |
| -----: | ---------: | -----: | ------------------: | ------------: | ---------------- | ------------------------- |
|  -0.3% | -4.737 MiB | 100.0% | 1.33 GiB → 1.32 GiB | 8,486 → 8,320 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `_pthread_start` (`libsystem_pthread.dylib`)

| Change |      Delta |      % |                Size |       Samples | Caller         | Location                  |
| -----: | ---------: | -----: | ------------------: | ------------: | -------------- | ------------------------- |
|  -0.3% | -4.737 MiB | 100.0% | 1.33 GiB → 1.32 GiB | 8,486 → 8,320 | `thread_start` | `libsystem_pthread.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

| Change |      Delta |      % |     Size |       Samples | Caller                       | Location       |
| -----: | ---------: | -----: | -------: | ------------: | ---------------------------- | -------------- |
|  -0.3% | -3.916 MiB | 100.0% | 1.32 GiB | 8,356 → 8,228 | `C2Compiler::compile_method` | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

| Change |      Delta |      % |     Size |       Samples | Caller                                     | Location       |
| -----: | ---------: | -----: | -------: | ------------: | ------------------------------------------ | -------------- |
|  -0.3% | -3.916 MiB | 100.0% | 1.32 GiB | 8,356 → 8,228 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `Parse::do_ifnull` (`libjvm.dylib`)

| Change |      Delta |      % |               Size | Samples | Caller                   | Location       |
| -----: | ---------: | -----: | -----------------: | ------: | ------------------------ | -------------- |
| -82.5% | -1.031 MiB | 100.0% | 1.25 MiB → 224 KiB |  10 → 7 | `Parse::do_one_bytecode` | `libjvm.dylib` |

##### `Compiler::compile_method` (`libjvm.dylib`)

| Change |        Delta |      % |                Size |  Samples | Caller                                     | Location       |
| -----: | -----------: | -----: | ------------------: | -------: | ------------------------------------------ | -------------- |
| -23.8% | -929.835 KiB | 100.0% | 3.82 MiB → 2.91 MiB | 120 → 80 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `Parse::do_one_block` (`libjvm.dylib`)

| Change |        Delta |      % |              Size |   Samples | Caller                 | Location       |
| -----: | -----------: | -----: | ----------------: | --------: | ---------------------- | -------------- |
|  -3.6% | -735.593 KiB | 100.0% | 19.7 MiB → 19 MiB | 278 → 239 | `Parse::do_all_blocks` | `libjvm.dylib` |

##### `Parse::do_one_bytecode` (`libjvm.dylib`)

| Change |        Delta |      % |               Size | Samples | Caller                | Location       |
| -----: | -----------: | -----: | -----------------: | ------: | --------------------- | -------------- |
| -30.4% | -671.976 KiB | 100.0% | 2.16 MiB → 1.5 MiB | 21 → 20 | `Parse::do_one_block` | `libjvm.dylib` |

##### `Parse::do_all_blocks` (`libjvm.dylib`)

| Change |        Delta |      % |              Size |   Samples | Caller         | Location       |
| -----: | -----------: | -----: | ----------------: | --------: | -------------- | -------------- |
|  -3.3% | -671.578 KiB | 100.0% | 19.7 MiB → 19 MiB | 278 → 240 | `Parse::Parse` | `libjvm.dylib` |

##### `Parse::Parse` (`libjvm.dylib`)

| Change |        Delta |      % |              Size |   Samples | Caller                     | Location       |
| -----: | -----------: | -----: | ----------------: | --------: | -------------------------- | -------------- |
|  -3.3% | -671.578 KiB | 100.0% | 19.7 MiB → 19 MiB | 278 → 240 | `ParseGenerator::generate` | `libjvm.dylib` |

##### `ParseGenerator::generate` (`libjvm.dylib`)

| Change |        Delta |             % |                Size |   Samples | Caller                             | Location       |
| -----: | -----------: | ------------: | ------------------: | --------: | ---------------------------------- | -------------- |
|  -7.3% |   -1.062 MiB | 74.1% → 71.1% | 14.6 MiB → 13.5 MiB | 183 → 158 | `Parse::do_call`                   | `libjvm.dylib` |
|  -3.7% | -735.578 KiB | 99.2% → 98.9% | 19.5 MiB → 18.8 MiB | 275 → 237 | `Compile::Compile`                 | `libjvm.dylib` |
|  +3.0% | +416.617 KiB | 69.7% → 74.2% | 13.7 MiB → 14.1 MiB | 196 → 173 | `PredictedCallGenerator::generate` | `libjvm.dylib` |

##### `Parse::merge_common` (`libjvm.dylib`)

|  Change |        Delta |             % |              Size | Samples | Caller                   | Location       |
| ------: | -----------: | ------------: | ----------------: | ------: | ------------------------ | -------------- |
|  -65.2% | -480.085 KiB | 62.2% → 44.4% | 736 KiB → 256 KiB |   7 → 4 | `Parse::do_all_blocks`   | `libjvm.dylib` |
|  -33.3% | -128.023 KiB | 32.4% → 44.4% | 384 KiB → 256 KiB |   6 → 2 | `Parse::do_if`           | `libjvm.dylib` |
| removed |  -64.015 KiB |   5.4% → 0.0% |      64 KiB → 0 B |   1 → 0 | `Parse::Parse`           | `libjvm.dylib` |
|     new |  +64.015 KiB |  0.0% → 11.1% |      0 B → 64 KiB |   0 → 1 | `Parse::do_one_bytecode` | `libjvm.dylib` |

##### `G1BarrierSetC2::post_barrier` (`libjvm.dylib`)

| Change |        Delta |      % |                Size | Samples | Caller                                  | Location       |
| -----: | -----------: | -----: | ------------------: | ------: | --------------------------------------- | -------------- |
| -24.3% | -544.093 KiB | 100.0% | 2.19 MiB → 1.66 MiB | 32 → 26 | `ModRefBarrierSetC2::store_at_resolved` | `libjvm.dylib` |

##### `IdealLoopTree::counted_loop` (`libjvm.dylib`)

| Change |        Delta |      % |                Size | Samples | Caller                               | Location       |
| -----: | -----------: | -----: | ------------------: | ------: | ------------------------------------ | -------------- |
| -17.4% | -520.171 KiB | 100.0% | 2.92 MiB → 2.42 MiB | 54 → 43 | `IdealLoopTree::counted_loop`        | `libjvm.dylib` |
| -17.4% | -520.171 KiB | 100.0% | 2.92 MiB → 2.42 MiB | 54 → 43 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `GrowableArrayWithAllocator<unsigned int, GrowableArray<unsigned int>>::expand_to` (`libjvm.dylib`)

| Change |        Delta |             % |               Size | Samples | Caller                                   | Location       |
| -----: | -----------: | ------------: | -----------------: | ------: | ---------------------------------------- | -------------- |
| -44.7% |  -544.14 KiB | 53.5% → 37.5% | 1.19 MiB → 672 KiB | 24 → 15 | `PhaseChaitin::new_lrg`                  | `libjvm.dylib` |
| +43.8% | +224.078 KiB | 22.5% → 41.1% |  512 KiB → 736 KiB | 10 → 15 | `PhaseAggressiveCoalesce::insert_copies` | `libjvm.dylib` |
| -29.4% | -160.039 KiB | 23.9% → 21.4% |  544 KiB → 384 KiB |  13 → 8 | `PhaseCFG::partial_latency_of_defs`      | `libjvm.dylib` |

#### Callees

Callees with the largest change in contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `Compile::Code_Gen` (`libjvm.dylib`)

| Change |        Delta |             % |                Size |       Samples | Callee                            | Location       |
| -----: | -----------: | ------------: | ------------------: | ------------: | --------------------------------- | -------------- |
|  +1.4% |   +6.589 MiB | 83.2% → 83.0% |   480 MiB → 487 MiB | 2,568 → 2,564 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
|  +1.4% |   +1.221 MiB |         14.8% | 85.5 MiB → 86.7 MiB |     678 → 671 | `Matcher::match`                  | `libjvm.dylib` |
| +32.8% | +943.531 KiB |   0.5% → 0.6% | 2.81 MiB → 3.73 MiB |       51 → 65 | `PhaseOutput::Output`             | `libjvm.dylib` |
|  +9.0% | +442.312 KiB |   0.8% → 0.9% | 4.79 MiB → 5.23 MiB |       81 → 84 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |
| +68.5% | +175.742 KiB |  <0.1% → 0.1% |   256 KiB → 432 KiB |        7 → 11 | `PhaseChaitin::PhaseChaitin`      | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|  Change |        Delta |             % |                Size |       Samples | Callee                                   | Location       |
| ------: | -----------: | ------------: | ------------------: | ------------: | ---------------------------------------- | -------------- |
|   +5.2% |   +5.001 MiB | 19.9% → 20.7% |  95.8 MiB → 101 MiB |     769 → 788 | `PhaseLive::compute`                     | `libjvm.dylib` |
|   +0.5% |   +1.997 MiB | 78.3% → 77.7% |   376 MiB → 378 MiB | 1,657 → 1,656 | `PhaseIFG::init`                         | `libjvm.dylib` |
| +113.6% | +800.226 KiB |   0.1% → 0.3% |  704 KiB → 1.47 MiB |       16 → 28 | `PhaseAggressiveCoalesce::insert_copies` | `libjvm.dylib` |
|  -44.7% | -547.156 KiB |   0.2% → 0.1% |  1.19 MiB → 676 KiB |       17 → 13 | `PhaseRegAlloc::alloc_node_regs`         | `libjvm.dylib` |
|   -7.6% | -413.859 KiB |   1.1% → 1.0% | 5.34 MiB → 4.94 MiB |       85 → 63 | `PhaseChaitin::Split`                    | `libjvm.dylib` |

##### `PhaseLive::compute` (`libjvm.dylib`)

|  Change |       Delta |              % |               Size |   Samples | Callee                             | Location       |
| ------: | ----------: | -------------: | -----------------: | --------: | ---------------------------------- | -------------- |
|   +5.4% |  +5.157 MiB | 99.8% → 100.0% | 95.6 MiB → 101 MiB | 763 → 787 | `Arena::grow`                      | `libjvm.dylib` |
| removed | -63.953 KiB |    0.1% → 0.0% |       64 KiB → 0 B |     2 → 0 | `IndexSet::alloc_block_containing` | `libjvm.dylib` |
|  -66.7% | -63.953 KiB |   0.1% → <0.1% |  95.9 KiB → 32 KiB |     3 → 1 | `PhaseLive::add_liveout`           | `libjvm.dylib` |
| removed | -31.976 KiB |   <0.1% → 0.0% |       32 KiB → 0 B |     1 → 0 | `IndexSet::initialize`             | `libjvm.dylib` |

##### `PhaseIFG::init` (`libjvm.dylib`)

|  Change |       Delta |            % |              Size | Samples | Callee                 | Location       |
| ------: | ----------: | -----------: | ----------------: | ------: | ---------------------- | -------------- |
|   +0.5% |  +2.029 MiB |       100.0% | 376 MiB → 378 MiB |   1,656 | `Arena::grow`          | `libjvm.dylib` |
| removed | -31.976 KiB | <0.1% → 0.0% |      32 KiB → 0 B |   1 → 0 | `IndexSet::initialize` | `libjvm.dylib` |

##### `Arena::Arealloc` (`libjvm.dylib`)

| Change |      Delta |      % |              Size |       Samples | Callee        | Location       |
| -----: | ---------: | -----: | ----------------: | ------------: | ------------- | -------------- |
|  +1.2% | +1.375 MiB | 100.0% | 117 MiB → 119 MiB | 1,701 → 1,670 | `Arena::grow` | `libjvm.dylib` |

##### `PhaseIterGVN::transform_old` (`libjvm.dylib`)

|  Change |        Delta |             % |                Size |   Samples | Callee                       | Location       |
| ------: | -----------: | ------------: | ------------------: | --------: | ---------------------------- | -------------- |
|   +4.4% | +640.015 KiB | 90.6% → 87.4% | 14.2 MiB → 14.8 MiB | 127 → 128 | `NodeHash::hash_find_insert` | `libjvm.dylib` |
|  +37.1% | +320.187 KiB |   5.4% → 6.8% |  864 KiB → 1.16 MiB |    9 → 21 | `IfNode::Ideal`              | `libjvm.dylib` |
|     new | +256.015 KiB |   0.0% → 1.5% |       0 B → 256 KiB |     0 → 1 | `URShiftLNode::Ideal`        | `libjvm.dylib` |
| +350.0% | +224.046 KiB |   0.4% → 1.7% |    64 KiB → 288 KiB |     1 → 4 | `Arena::Arealloc`            | `libjvm.dylib` |
|  +81.4% | +104.117 KiB |   0.8% → 1.3% |   128 KiB → 232 KiB |         4 | `PhaseIterGVN::subsume_node` | `libjvm.dylib` |

##### `PhaseIterGVN::optimize` (`libjvm.dylib`)

| Change |      Delta |      % |                Size |   Samples | Callee                        | Location       |
| -----: | ---------: | -----: | ------------------: | --------: | ----------------------------- | -------------- |
|  +7.9% | +1.226 MiB | 100.0% | 15.6 MiB → 16.9 MiB | 151 → 163 | `PhaseIterGVN::transform_old` | `libjvm.dylib` |

##### `Matcher::match` (`libjvm.dylib`)

| Change |          Delta |             % |                Size |   Samples | Callee                                        | Location       |
| -----: | -------------: | ------------: | ------------------: | --------: | --------------------------------------------- | -------------- |
|  +1.9% | +1,009.226 KiB | 62.3% → 62.5% | 53.2 MiB → 54.2 MiB |       379 | `Matcher::xform`                              | `libjvm.dylib` |
| -25.9% |   -448.078 KiB |   2.0% → 1.4% | 1.69 MiB → 1.25 MiB |   25 → 20 | `Matcher::specialize_generic_vector_operands` | `libjvm.dylib` |
|  +1.7% |   +433.281 KiB | 29.6% → 29.7% | 25.3 MiB → 25.8 MiB | 205 → 193 | `Matcher::find_shared`                        | `libjvm.dylib` |
|  +4.2% |   +224.101 KiB |   6.1% → 6.3% | 5.22 MiB → 5.44 MiB |   69 → 78 | `Node_Array::grow`                            | `libjvm.dylib` |
|    new |    +32.015 KiB |  0.0% → <0.1% |        0 B → 32 KiB |     0 → 1 | `Matcher::match_tree`                         | `libjvm.dylib` |

##### `PhaseIdealLoop::loop_predication_impl` (`libjvm.dylib`)

|  Change |        Delta |             % |                Size |   Samples | Callee                                             | Location       |
| ------: | -----------: | ------------: | ------------------: | --------: | -------------------------------------------------- | -------------- |
|  +24.6% | +480.242 KiB | 19.1% → 21.2% | 1.91 MiB → 2.38 MiB |   42 → 55 | `PhaseIdealLoop::loop_predication_follow_branches` | `libjvm.dylib` |
|  +19.0% | +480.023 KiB | 24.8% → 26.3% | 2.47 MiB → 2.94 MiB |   52 → 56 | `PathFrequency::to`                                | `libjvm.dylib` |
|   +6.8% |     +384 KiB | 55.2% → 52.5% |  5.5 MiB → 5.88 MiB | 111 → 106 | `PhaseIdealLoop::loop_predication_impl_helper`     | `libjvm.dylib` |
| removed |  -95.929 KiB |   0.9% → 0.0% |      95.9 KiB → 0 B |     3 → 0 | `Node_Stack::Node_Stack`                           | `libjvm.dylib` |

##### `IdealLoopTree::loop_predication` (`libjvm.dylib`)

| Change |        Delta |             % |                Size |   Samples | Callee                                  | Location       |
| -----: | -----------: | ------------: | ------------------: | --------: | --------------------------------------- | -------------- |
| +12.2% |   +1.219 MiB |        100.0% | 9.97 MiB → 11.2 MiB | 208 → 217 | `PhaseIdealLoop::loop_predication_impl` | `libjvm.dylib` |
|  +4.5% | +223.968 KiB | 48.9% → 45.5% |  4.88 MiB → 5.1 MiB |  103 → 96 | `IdealLoopTree::loop_predication`       | `libjvm.dylib` |

##### `LibraryIntrinsic::generate` (`libjvm.dylib`)

|   Change |        Delta |            % |             Size | Samples | Callee                                            | Location       |
| -------: | -----------: | -----------: | ---------------: | ------: | ------------------------------------------------- | -------------- |
| +1899.3% | +608.062 KiB | 7.1% → 42.6% | 32 KiB → 640 KiB |   1 → 5 | `LibraryCallKit::try_to_inline`                   | `libjvm.dylib` |
|      new | +256.046 KiB | 0.0% → 17.0% |    0 B → 256 KiB |   0 → 3 | `LibraryCallKit::inline_native_Class_query`       | `libjvm.dylib` |
|      new | +128.031 KiB |  0.0% → 8.5% |    0 B → 128 KiB |   0 → 2 | `LibraryCallKit::inline_array_copyOf`             | `libjvm.dylib` |
|      new |  +64.015 KiB |  0.0% → 4.3% |     0 B → 64 KiB |   0 → 1 | `LibraryCallKit::inline_profileBoolean`           | `libjvm.dylib` |
|  removed |  -32.015 KiB |  7.1% → 0.0% |     32 KiB → 0 B |   1 → 0 | `LibraryCallKit::inline_preconditions_checkIndex` | `libjvm.dylib` |

##### `Matcher::xform` (`libjvm.dylib`)

| Change |        Delta |             % |                Size |   Samples | Callee                | Location       |
| -----: | -----------: | ------------: | ------------------: | --------: | --------------------- | -------------- |
|  +1.7% | +657.429 KiB | 72.9% → 72.8% | 38.8 MiB → 39.5 MiB | 207 → 205 | `Arena::grow`         | `libjvm.dylib` |
|  +6.0% | +512.078 KiB | 15.7% → 16.4% | 8.38 MiB → 8.88 MiB |   72 → 77 | `Node::out_grow`      | `libjvm.dylib` |
|  -5.4% | -320.304 KiB | 10.8% → 10.0% | 5.75 MiB → 5.44 MiB |   91 → 84 | `Matcher::match_tree` | `libjvm.dylib` |
|    new | +128.007 KiB |   0.0% → 0.2% |       0 B → 128 KiB |     0 → 3 | `CallNode::match`     | `libjvm.dylib` |
| +25.1% |  +32.054 KiB |   0.2% → 0.3% |   128 KiB → 160 KiB |     4 → 5 | `Node::clone`         | `libjvm.dylib` |

##### `PathFrequency::to` (`libjvm.dylib`)

| Change |        Delta |              % |                Size |  Samples | Callee                                                               | Location       |
| -----: | -----------: | -------------: | ------------------: | -------: | -------------------------------------------------------------------- | -------------- |
| +21.6% | +960.265 KiB | 100.0% → 99.4% | 4.35 MiB → 5.28 MiB | 93 → 110 | `GrowableArrayWithAllocator<float, GrowableArray<float>>::expand_to` | `libjvm.dylib` |
|    new |  +31.976 KiB |    0.0% → 0.6% |        0 B → 32 KiB |    0 → 1 | `Node_Stack::grow`                                                   | `libjvm.dylib` |

##### `Node::Node` (`libjvm.dylib`)

| Change |        Delta |             % |                Size | Samples | Callee                     | Location       |
| -----: | -----------: | ------------: | ------------------: | ------: | -------------------------- | -------------- |
| +39.2% |   +1.066 MiB | 94.6% → 99.2% | 2.72 MiB → 3.79 MiB | 45 → 50 | `Compile::grow_node_notes` | `libjvm.dylib` |
| -80.0% | -127.906 KiB |   5.4% → 0.8% |    160 KiB → 32 KiB |   5 → 1 | `Arena::grow`              | `libjvm.dylib` |

##### `GrowableArrayWithAllocator<float, GrowableArray<float>>::expand_to` (`libjvm.dylib`)

| Change |        Delta |      % |                Size |  Samples | Callee        | Location       |
| -----: | -----------: | -----: | ------------------: | -------: | ------------- | -------------- |
| +21.6% | +960.265 KiB | 100.0% | 4.35 MiB → 5.28 MiB | 93 → 110 | `Arena::grow` | `libjvm.dylib` |

##### `PhaseOutput::Output` (`libjvm.dylib`)

|  Change |        Delta |             % |              Size | Samples | Callee                      | Location       |
| ------: | -----------: | ------------: | ----------------: | ------: | --------------------------- | -------------- |
|  +26.9% | +412.882 KiB | 53.4% → 51.0% | 1.5 MiB → 1.9 MiB | 27 → 33 | `Scheduling::Scheduling`    | `libjvm.dylib` |
| +119.0% | +364.726 KiB | 10.7% → 17.6% | 306 KiB → 671 KiB |  8 → 15 | `PhaseOutput::BuildOopMaps` | `libjvm.dylib` |
|  +47.4% | +261.953 KiB | 19.2% → 21.3% | 553 KiB → 815 KiB | 12 → 15 | `PhaseOutput::fill_buffer`  | `libjvm.dylib` |
|  -14.3% |  -64.015 KiB | 15.6% → 10.1% | 448 KiB → 384 KiB |   3 → 2 | `Scheduling::DoScheduling`  | `libjvm.dylib` |
| removed |  -32.015 KiB |   1.1% → 0.0% |      32 KiB → 0 B |   1 → 0 | `Block_Array::grow`         | `libjvm.dylib` |

##### `PhaseIdealLoop::split_if_with_blocks_pre` (`libjvm.dylib`)

|  Change |        Delta |             % |               Size | Samples | Callee                                      | Location       |
| ------: | -----------: | ------------: | -----------------: | ------: | ------------------------------------------- | -------------- |
| +125.0% | +800.062 KiB | 95.2% → 95.5% | 640 KiB → 1.41 MiB |  9 → 13 | `PhaseIdealLoop::split_thru_phi`            | `libjvm.dylib` |
|     new |  +68.015 KiB |   0.0% → 4.5% |       0 B → 68 KiB |   0 → 1 | `PhaseIterGVN::subsume_node`                | `libjvm.dylib` |
| removed |  -31.976 KiB |   4.8% → 0.0% |       32 KiB → 0 B |   1 → 0 | `PhaseIdealLoop::remix_address_expressions` | `libjvm.dylib` |

##### `GraphKit::set_predefined_output_for_runtime_call` (`libjvm.dylib`)

|  Change |        Delta |             % |             Size | Samples | Callee                           | Location       |
| ------: | -----------: | ------------: | ---------------: | ------: | -------------------------------- | -------------- |
|     new | +416.046 KiB |  0.0% → 43.3% |    0 B → 416 KiB |   0 → 3 | `GraphKit::set_all_memory`       | `libjvm.dylib` |
| +549.9% | +352.031 KiB | 50.0% → 43.3% | 64 KiB → 416 KiB |   1 → 3 | `PhaseGVN::transform_no_reclaim` | `libjvm.dylib` |
| +300.3% |  +96.039 KiB | 25.0% → 13.3% | 32 KiB → 128 KiB |       1 | `Node::Node`                     | `libjvm.dylib` |
| removed |  -31.976 KiB |  25.0% → 0.0% |     32 KiB → 0 B |   1 → 0 | `Arena::grow`                    | `libjvm.dylib` |

##### `PhaseAggressiveCoalesce::insert_copies` (`libjvm.dylib`)

|  Change |        Delta |             % |              Size | Samples | Callee                                                                             | Location       |
| ------: | -----------: | ------------: | ----------------: | ------: | ---------------------------------------------------------------------------------- | -------------- |
| +749.8% | +480.093 KiB |  9.1% → 36.2% |  64 KiB → 544 KiB |   2 → 8 | `Block_Array::grow`                                                                | `libjvm.dylib` |
|  +43.8% | +224.078 KiB | 72.7% → 48.9% | 512 KiB → 736 KiB | 10 → 15 | `GrowableArrayWithAllocator<unsigned int, GrowableArray<unsigned int>>::expand_to` | `libjvm.dylib` |
| +250.0% | +160.046 KiB |  9.1% → 14.9% |  64 KiB → 224 KiB |   2 → 5 | `PhaseChaitin::new_lrg`                                                            | `libjvm.dylib` |
| removed |  -32.015 KiB |   4.5% → 0.0% |      32 KiB → 0 B |   1 → 0 | `Node::Node`                                                                       | `libjvm.dylib` |
| removed |  -31.976 KiB |   4.5% → 0.0% |      32 KiB → 0 B |   1 → 0 | `Arena::grow`                                                                      | `libjvm.dylib` |

##### `PhaseRemoveUseless::PhaseRemoveUseless` (`libjvm.dylib`)

| Change |        Delta |      % |                Size |   Samples | Callee                           | Location       |
| -----: | -----------: | -----: | ------------------: | --------: | -------------------------------- | -------------- |
|  +6.5% | +800.203 KiB | 100.0% | 12.1 MiB → 12.9 MiB | 114 → 127 | `Compile::identify_useful_nodes` | `libjvm.dylib` |

##### `LibraryCallKit::try_to_inline` (`libjvm.dylib`)

|   Change |        Delta |              % |             Size | Samples | Callee                                   | Location       |
| -------: | -----------: | -------------: | ---------------: | ------: | ---------------------------------------- | -------------- |
| +1099.5% | +352.015 KiB | 100.0% → 60.0% | 32 KiB → 384 KiB |   1 → 2 | `LibraryCallKit::inline_unsafe_newArray` | `libjvm.dylib` |
|      new | +128.031 KiB |   0.0% → 20.0% |    0 B → 128 KiB |   0 → 2 | `LibraryCallKit::inline_native_clone`    | `libjvm.dylib` |
|      new | +128.015 KiB |   0.0% → 20.0% |    0 B → 128 KiB |   0 → 1 | `LibraryCallKit::inline_native_hashcode` | `libjvm.dylib` |

##### `BarrierSetC2::store_at_resolved` (`libjvm.dylib`)

|  Change |        Delta |      % |             Size | Samples | Callee                      | Location       |
| ------: | -----------: | -----: | ---------------: | ------: | --------------------------- | -------------- |
| +799.7% | +512.046 KiB | 100.0% | 64 KiB → 576 KiB |   2 → 5 | `GraphKit::store_to_memory` | `libjvm.dylib` |

##### `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` (`libjvm.dylib`)

| Change |        Delta |      % |                Size |   Samples | Callee        | Location       |
| -----: | -----------: | -----: | ------------------: | --------: | ------------- | -------------- |
|  +1.7% | +352.351 KiB | 100.0% | 20.1 MiB → 20.4 MiB | 302 → 327 | `Arena::grow` | `libjvm.dylib` |

##### `LibraryCallKit::inline_unsafe_newArray` (`libjvm.dylib`)

|  Change |        Delta |             % |          Size | Samples | Callee                                          | Location       |
| ------: | -----------: | ------------: | ------------: | ------: | ----------------------------------------------- | -------------- |
|     new | +256.015 KiB |  0.0% → 66.7% | 0 B → 256 KiB |   0 → 1 | `LibraryCallKit::load_klass_from_mirror_common` | `libjvm.dylib` |
|     new | +128.015 KiB |  0.0% → 33.3% | 0 B → 128 KiB |   0 → 1 | `Node::Node`                                    | `libjvm.dylib` |
| removed |  -32.015 KiB | 100.0% → 0.0% |  32 KiB → 0 B |   1 → 0 | `GraphKit::new_array`                           | `libjvm.dylib` |

##### `LibraryCallKit::load_klass_from_mirror_common` (`libjvm.dylib`)

| Change |        Delta |            % |          Size | Samples | Callee                           | Location       |
| -----: | -----------: | -----------: | ------------: | ------: | -------------------------------- | -------------- |
|    new | +256.015 KiB | 0.0% → 80.0% | 0 B → 256 KiB |   0 → 1 | `PhaseGVN::transform_no_reclaim` | `libjvm.dylib` |
|    new |  +64.015 KiB | 0.0% → 20.0% |  0 B → 64 KiB |   0 → 1 | `GraphKit::null_check_oop`       | `libjvm.dylib` |

##### `BarrierSetC2::obj_allocate` (`libjvm.dylib`)

|  Change |        Delta |             % |              Size | Samples | Callee                                           | Location       |
| ------: | -----------: | ------------: | ----------------: | ------: | ------------------------------------------------ | -------------- |
| +349.9% | +224.015 KiB | 25.0% → 52.9% |  64 KiB → 288 KiB |   1 → 2 | `PhaseMacroExpand::prefetch_allocation`          | `libjvm.dylib` |
|  +16.7% |  +32.015 KiB | 75.0% → 41.2% | 192 KiB → 224 KiB |   2 → 3 | `PhaseIterGVN::register_new_node_with_optimizer` | `libjvm.dylib` |
|     new |  +32.015 KiB |   0.0% → 5.9% |      0 B → 32 KiB |   0 → 1 | `PhaseValues::longcon`                           | `libjvm.dylib` |

##### `Parse::do_instanceof` (`libjvm.dylib`)

|  Change |        Delta |             % |          Size | Samples | Callee                          | Location       |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------------- | -------------- |
|     new | +384.062 KiB | 0.0% → 100.0% | 0 B → 384 KiB |   0 → 4 | `GraphKit::gen_instanceof`      | `libjvm.dylib` |
| removed |  -64.015 KiB |  66.7% → 0.0% |  64 KiB → 0 B |   1 → 0 | `PhaseValues::uncached_makecon` | `libjvm.dylib` |
| removed |  -32.015 KiB |  33.3% → 0.0% |  32 KiB → 0 B |   1 → 0 | `Type::hashcons`                | `libjvm.dylib` |

##### `LibraryCallKit::inline_native_Class_query` (`libjvm.dylib`)

| Change |        Delta |            % |          Size | Samples | Callee                                          | Location       |
| -----: | -----------: | -----------: | ------------: | ------: | ----------------------------------------------- | -------------- |
|    new | +128.015 KiB | 0.0% → 50.0% | 0 B → 128 KiB |   0 → 1 | `LibraryCallKit::generate_access_flags_guard`   | `libjvm.dylib` |
|    new |  +64.015 KiB | 0.0% → 25.0% |  0 B → 64 KiB |   0 → 1 | `GraphKit::null_check_common`                   | `libjvm.dylib` |
|    new |  +64.015 KiB | 0.0% → 25.0% |  0 B → 64 KiB |   0 → 1 | `LibraryCallKit::load_klass_from_mirror_common` | `libjvm.dylib` |

##### `Parse::catch_inline_exceptions` (`libjvm.dylib`)

|  Change |        Delta |            % |          Size | Samples | Callee                               | Location       |
| ------: | -----------: | -----------: | ------------: | ------: | ------------------------------------ | -------------- |
|     new | +288.031 KiB | 0.0% → 90.0% | 0 B → 288 KiB |   0 → 2 | `Parse::throw_to_exit`               | `libjvm.dylib` |
| removed |  -32.015 KiB | 50.0% → 0.0% |  32 KiB → 0 B |   1 → 0 | `PhaseGVN::transform_no_reclaim`     | `libjvm.dylib` |
| removed |  -32.015 KiB | 50.0% → 0.0% |  32 KiB → 0 B |   1 → 0 | `PreserveJVMState::PreserveJVMState` | `libjvm.dylib` |
|     new |  +32.015 KiB | 0.0% → 10.0% |  0 B → 32 KiB |   0 → 1 | `LoadKlassNode::make`                | `libjvm.dylib` |

##### `Parse::build_exits` (`libjvm.dylib`)

|  Change |        Delta |             % |              Size | Samples | Callee                     | Location       |
| ------: | -----------: | ------------: | ----------------: | ------: | -------------------------- | -------------- |
| +106.7% | +512.015 KiB | 29.4% → 52.5% | 480 KiB → 992 KiB |   5 → 6 | `Type_Array::grow`         | `libjvm.dylib` |
| +399.9% | +384.007 KiB |  5.9% → 25.4% |  96 KiB → 480 KiB |   2 → 5 | `Node::Node`               | `libjvm.dylib` |
|  -83.3% | -320.015 KiB |  23.5% → 3.4% |  384 KiB → 64 KiB |   2 → 1 | `GraphKit::set_all_memory` | `libjvm.dylib` |
|  -42.1% | -256.007 KiB | 37.3% → 18.6% | 608 KiB → 352 KiB |   7 → 4 | `GraphKit::clone_map`      | `libjvm.dylib` |
| removed |  -64.015 KiB |   3.9% → 0.0% |      64 KiB → 0 B |   1 → 0 | `Node_Array::grow`         | `libjvm.dylib` |

##### `Type_Array::grow` (`libjvm.dylib`)

| Change |        Delta |      % |                Size |   Samples | Callee            | Location       |
| -----: | -----------: | -----: | ------------------: | --------: | ----------------- | -------------- |
|  +1.7% | +224.148 KiB | 100.0% | 12.9 MiB → 13.2 MiB | 132 → 144 | `Arena::Arealloc` | `libjvm.dylib` |

##### `Parse::do_exits` (`libjvm.dylib`)

|  Change |        Delta |             % |             Size | Samples | Callee                          | Location       |
| ------: | -----------: | ------------: | ---------------: | ------: | ------------------------------- | -------------- |
|     new | +192.046 KiB |  0.0% → 50.0% |    0 B → 192 KiB |   0 → 3 | `GraphKit::use_exception_state` | `libjvm.dylib` |
| +400.5% | +128.054 KiB | 20.0% → 41.7% | 32 KiB → 160 KiB |   1 → 2 | `GraphKit::clone_map`           | `libjvm.dylib` |
| removed |  -63.992 KiB |  40.0% → 0.0% |     64 KiB → 0 B |   2 → 0 | `GraphKit::insert_mem_bar`      | `libjvm.dylib` |
| removed |  -31.976 KiB |  20.0% → 0.0% |     32 KiB → 0 B |   1 → 0 | `JVMState::clone_shallow`       | `libjvm.dylib` |

##### `Parse::do_field_access` (`libjvm.dylib`)

|  Change |        Delta |             % |                Size | Samples | Callee                          | Location       |
| ------: | -----------: | ------------: | ------------------: | ------: | ------------------------------- | -------------- |
| +300.0% | +288.023 KiB |   2.3% → 8.7% |    96 KiB → 384 KiB |   3 → 2 | `GraphKit::null_check_common`   | `libjvm.dylib` |
|   -1.0% |  -32.085 KiB | 78.6% → 73.9% | 3.22 MiB → 3.19 MiB | 44 → 41 | `Parse::do_put_xxx`             | `libjvm.dylib` |
| removed |  -32.015 KiB |   0.8% → 0.0% |        32 KiB → 0 B |   1 → 0 | `ciBytecodeStream::get_field`   | `libjvm.dylib` |
| removed |  -32.015 KiB |   0.8% → 0.0% |        32 KiB → 0 B |   1 → 0 | `PhaseValues::uncached_makecon` | `libjvm.dylib` |
|   +4.3% |   +31.96 KiB | 17.6% → 17.4% |   736 KiB → 768 KiB |  14 → 9 | `Parse::do_get_xxx`             | `libjvm.dylib` |

##### `GrowableArrayWithAllocator<Interval*, GrowableArray<Interval*>>::expand_to` (`libjvm.dylib`)

| Change |        Delta |      % |              Size | Samples | Callee        | Location       |
| -----: | -----------: | -----: | ----------------: | ------: | ------------- | -------------- |
| +50.0% | +160.101 KiB | 100.0% | 320 KiB → 480 KiB |  6 → 10 | `Arena::grow` | `libjvm.dylib` |

##### `NonSafepointEmitter::emit_non_safepoint` (`libjvm.dylib`)

| Change |        Delta |             % |          Size | Samples | Callee                                        | Location       |
| -----: | -----------: | ------------: | ------------: | ------: | --------------------------------------------- | -------------- |
|    new | +150.046 KiB | 0.0% → 100.0% | 0 B → 150 KiB |   0 → 3 | `DebugInformationRecorder::add_non_safepoint` | `libjvm.dylib` |

##### `PhaseIdealLoop::Dominators` (`libjvm.dylib`)

|  Change |       Delta |            % |              Size |       Samples | Callee         | Location       |
| ------: | ----------: | -----------: | ----------------: | ------------: | -------------- | -------------- |
|   -2.3% | -14.564 MiB |       100.0% | 623 MiB → 608 MiB | 2,537 → 2,453 | `Arena::grow`  | `libjvm.dylib` |
| removed | -31.976 KiB | <0.1% → 0.0% |      32 KiB → 0 B |         1 → 0 | `NTarjan::DFS` | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|  Change |       Delta |            % |              Size |       Samples | Callee                               | Location       |
| ------: | ----------: | -----------: | ----------------: | ------------: | ------------------------------------ | -------------- |
|   -2.0% | -14.439 MiB |       100.0% | 709 MiB → 695 MiB | 4,000 → 3,910 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |
| removed | -31.976 KiB | <0.1% → 0.0% |      32 KiB → 0 B |         1 → 0 | `Arena::grow`                        | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

| Change |        Delta |             % |                Size |       Samples | Callee                            | Location       |
| -----: | -----------: | ------------: | ------------------: | ------------: | --------------------------------- | -------------- |
|  -2.3% |  -14.595 MiB | 87.9% → 87.6% |   623 MiB → 608 MiB | 2,538 → 2,453 | `PhaseIdealLoop::Dominators`      | `libjvm.dylib` |
| +12.2% |   +1.219 MiB |   1.4% → 1.6% | 9.97 MiB → 11.2 MiB |     208 → 217 | `IdealLoopTree::loop_predication` | `libjvm.dylib` |
|  -3.9% | -864.281 KiB |   3.1% → 3.0% | 21.8 MiB → 20.9 MiB |     353 → 335 | `Node_Array::grow`                | `libjvm.dylib` |
|  +3.9% | +556.023 KiB |   2.0% → 2.1% | 13.9 MiB → 14.5 MiB |     248 → 245 | `Arena::grow`                     | `libjvm.dylib` |
| -17.4% | -520.171 KiB |   0.4% → 0.3% | 2.92 MiB → 2.42 MiB |       54 → 43 | `IdealLoopTree::counted_loop`     | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

| Change |        Delta |     % |                Size |       Samples | Callee                           | Location       |
| -----: | -----------: | ----: | ------------------: | ------------: | -------------------------------- | -------------- |
|  -2.0% |  -14.471 MiB | 99.4% |   709 MiB → 695 MiB | 4,001 → 3,910 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |
|  +6.2% | +264.023 KiB |  0.6% | 4.13 MiB → 4.38 MiB |       40 → 39 | `PhaseIterGVN::optimize`         | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|  Change |        Delta |             % |                Size |       Samples | Callee                                     | Location       |
| ------: | -----------: | ------------: | ------------------: | ------------: | ------------------------------------------ | -------------- |
|   -3.1% |  -10.794 MiB | 47.0% → 46.4% |   351 MiB → 341 MiB | 1,821 → 1,786 | `Compile::optimize_loops`                  | `libjvm.dylib` |
|   -0.9% |   -3.418 MiB | 48.4% → 48.8% |   362 MiB → 358 MiB | 2,220 → 2,163 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib` |
|   +9.2% | +484.906 KiB |   0.7% → 0.8% | 5.16 MiB → 5.63 MiB |           101 | `PhaseCCP::do_transform`                   | `libjvm.dylib` |
| +136.4% | +480.031 KiB |  <0.1% → 0.1% |   352 KiB → 832 KiB |         3 → 5 | `Compile::process_for_post_loop_opts_igvn` | `libjvm.dylib` |
|  -11.8% | -455.953 KiB |          0.5% | 3.79 MiB → 3.34 MiB |       39 → 37 | `PhaseMacroExpand::expand_macro_nodes`     | `libjvm.dylib` |

##### `Compile::optimize_loops` (`libjvm.dylib`)

| Change |       Delta |      % |              Size |       Samples | Callee                     | Location       |
| -----: | ----------: | -----: | ----------------: | ------------: | -------------------------- | -------------- |
|  -3.1% | -10.794 MiB | 100.0% | 351 MiB → 341 MiB | 1,821 → 1,786 | `PhaseIdealLoop::optimize` | `libjvm.dylib` |

##### `Chunk::operator new` (`libjvm.dylib`)

| Change |      Delta |      % |                Size |       Samples | Callee       | Location       |
| -----: | ---------: | -----: | ------------------: | ------------: | ------------ | -------------- |
|  -0.4% | -5.138 MiB | 100.0% | 1.33 GiB → 1.32 GiB | 8,465 → 8,303 | `os::malloc` | `libjvm.dylib` |

##### `Arena::grow` (`libjvm.dylib`)

| Change |      Delta |      % |                Size |       Samples | Callee                | Location       |
| -----: | ---------: | -----: | ------------------: | ------------: | --------------------- | -------------- |
|  -0.4% | -5.137 MiB | 100.0% | 1.33 GiB → 1.32 GiB | 8,464 → 8,303 | `Chunk::operator new` | `libjvm.dylib` |

##### `os::malloc` (`libjvm.dylib`)

| Change |      Delta |      % |                Size |       Samples | Callee        | Location                 |
| -----: | ---------: | -----: | ------------------: | ------------: | ------------- | ------------------------ |
|  -0.4% | -5.036 MiB | 100.0% | 1.33 GiB → 1.32 GiB | 8,587 → 8,423 | `malloc_hook` | `libasyncProfiler.dylib` |
|    ~0% |      -72 B |   0.1% |             914 KiB |         2 → 1 | `os::malloc`  | `libjvm.dylib`           |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|  Change |      Delta |            % |                Size |       Samples | Callee                                         | Location       |
| ------: | ---------: | -----------: | ------------------: | ------------: | ---------------------------------------------- | -------------- |
|   -0.4% | -4.824 MiB |       100.0% | 1.33 GiB → 1.32 GiB | 8,476 → 8,309 | `CompileBroker::invoke_compiler_on_method`     | `libjvm.dylib` |
| removed |     -456 B | <0.1% → 0.0% |         456 B → 0 B |         1 → 0 | `CompileBroker::possibly_add_compiler_threads` | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

| Change |        Delta |             % |                Size |       Samples | Callee                        | Location       |
| -----: | -----------: | ------------: | ------------------: | ------------: | ----------------------------- | -------------- |
|  -0.3% |   -3.916 MiB | 99.7% → 99.8% |            1.32 GiB | 8,356 → 8,228 | `C2Compiler::compile_method`  | `libjvm.dylib` |
| -23.8% | -929.835 KiB |   0.3% → 0.2% | 3.82 MiB → 2.91 MiB |      120 → 80 | `Compiler::compile_method`    | `libjvm.dylib` |
|    new |        +20 B |  0.0% → <0.1% |          0 B → 20 B |         0 → 1 | `CompilationLog::log_compile` | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

| Change |      Delta |            % |                Size |       Samples | Callee                                | Location       |
| -----: | ---------: | -----------: | ------------------: | ------------: | ------------------------------------- | -------------- |
|  -0.4% | -4.825 MiB |       100.0% | 1.33 GiB → 1.32 GiB | 8,477 → 8,309 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |
|    new |    +32 KiB | 0.0% → <0.1% |        0 B → 32 KiB |         0 → 1 | `ServiceThread::service_thread_entry` | `libjvm.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|   Change |       Delta |            % |                Size |       Samples | Callee                          | Location       |
| -------: | ----------: | -----------: | ------------------: | ------------: | ------------------------------- | -------------- |
|    -0.4% |  -4.794 MiB |       100.0% | 1.33 GiB → 1.32 GiB | 8,477 → 8,310 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
| +2814.5% | +63.765 KiB |        <0.1% |   2.27 KiB → 66 KiB |         2 → 3 | `WorkerThread::run`             | `libjvm.dylib` |
|  removed |      -8 KiB | <0.1% → 0.0% |         8 KiB → 0 B |         1 → 0 | `ConcurrentGCThread::run`       | `libjvm.dylib` |
|    +4.2% |      +2 KiB |        <0.1% |     48 KiB → 50 KiB |         6 → 7 | `VMThread::run`                 | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

| Change |      Delta |      % |                Size |       Samples | Callee             | Location       |
| -----: | ---------: | -----: | ------------------: | ------------: | ------------------ | -------------- |
|  -0.3% | -4.737 MiB | 100.0% | 1.33 GiB → 1.32 GiB | 8,486 → 8,320 | `Thread::call_run` | `libjvm.dylib` |

##### `_pthread_start` (`libsystem_pthread.dylib`)

| Change |      Delta |      % |                Size |       Samples | Callee                | Location       |
| -----: | ---------: | -----: | ------------------: | ------------: | --------------------- | -------------- |
|  -0.3% | -4.737 MiB | 100.0% | 1.33 GiB → 1.32 GiB | 8,486 → 8,320 | `thread_native_entry` | `libjvm.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

| Change |      Delta |      % |                Size |       Samples | Callee           | Location                  |
| -----: | ---------: | -----: | ------------------: | ------------: | ---------------- | ------------------------- |
|  -0.3% | -4.737 MiB | 100.0% | 1.33 GiB → 1.32 GiB | 8,486 → 8,320 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

| Change |        Delta |             % |                Size |       Samples | Callee                                   | Location       |
| -----: | -----------: | ------------: | ------------------: | ------------: | ---------------------------------------- | -------------- |
|  -1.7% |   -12.54 MiB | 55.1% → 54.4% |   747 MiB → 734 MiB | 4,528 → 4,435 | `Compile::Optimize`                      | `libjvm.dylib` |
|  +1.6% |   +9.248 MiB | 42.6% → 43.4% |   577 MiB → 586 MiB | 3,443 → 3,450 | `Compile::Code_Gen`                      | `libjvm.dylib` |
|  -3.7% | -735.578 KiB |          1.4% | 19.5 MiB → 18.8 MiB |     275 → 237 | `ParseGenerator::generate`               | `libjvm.dylib` |
| -44.4% | -384.093 KiB |  0.1% → <0.1% |   864 KiB → 480 KiB |       16 → 10 | `NodeHash::NodeHash`                     | `libjvm.dylib` |
|  +4.0% | +352.046 KiB |   0.6% → 0.7% | 8.56 MiB → 8.91 MiB |       78 → 81 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

| Change |      Delta |      % |     Size |       Samples | Callee             | Location       |
| -----: | ---------: | -----: | -------: | ------------: | ------------------ | -------------- |
|  -0.3% | -3.916 MiB | 100.0% | 1.32 GiB | 8,356 → 8,228 | `Compile::Compile` | `libjvm.dylib` |

##### `Parse::do_ifnull` (`libjvm.dylib`)

|  Change |        Delta |             % |             Size | Samples | Callee                               | Location       |
| ------: | -----------: | ------------: | ---------------: | ------: | ------------------------------------ | -------------- |
|  -76.9% |     -320 KiB | 32.5% → 42.9% | 416 KiB → 96 KiB |       3 | `PreserveJVMState::PreserveJVMState` | `libjvm.dylib` |
| removed | -256.015 KiB |  20.0% → 0.0% |    256 KiB → 0 B |   1 → 0 | `PhaseGVN::transform_no_reclaim`     | `libjvm.dylib` |
|  -80.0% |     -256 KiB | 25.0% → 28.6% | 320 KiB → 64 KiB |       2 | `GraphKit::create_and_xform_if`      | `libjvm.dylib` |
| removed | -128.015 KiB |  10.0% → 0.0% |    128 KiB → 0 B |   1 → 0 | `Node::Node`                         | `libjvm.dylib` |
|  -60.0% |  -96.015 KiB | 12.5% → 28.6% | 160 KiB → 64 KiB |   3 → 2 | `Parse::adjust_map_after_if`         | `libjvm.dylib` |

##### `Compiler::compile_method` (`libjvm.dylib`)

| Change |        Delta |      % |                Size |  Samples | Callee                     | Location       |
| -----: | -----------: | -----: | ------------------: | -------: | -------------------------- | -------------- |
| -23.8% | -929.835 KiB | 100.0% | 3.82 MiB → 2.91 MiB | 120 → 80 | `Compilation::Compilation` | `libjvm.dylib` |

##### `Parse::do_one_block` (`libjvm.dylib`)

|  Change |        Delta |             % |                Size |   Samples | Callee                   | Location       |
| ------: | -----------: | ------------: | ------------------: | --------: | ------------------------ | -------------- |
|  -30.4% | -671.976 KiB |  11.0% → 7.9% |  2.16 MiB → 1.5 MiB |   21 → 20 | `Parse::do_one_bytecode` | `libjvm.dylib` |
|  -15.9% | -319.906 KiB |  10.0% → 8.7% | 1.97 MiB → 1.66 MiB |   31 → 22 | `Parse::do_if`           | `libjvm.dylib` |
|   -1.7% | -319.539 KiB | 93.3% → 95.2% | 18.4 MiB → 18.1 MiB | 256 → 223 | `Parse::do_call`         | `libjvm.dylib` |
| +299.9% | +288.031 KiB |   0.5% → 2.0% |    96 KiB → 384 KiB |     2 → 4 | `Parse::do_instanceof`   | `libjvm.dylib` |
|   +5.3% | +223.867 KiB | 20.8% → 22.7% | 4.09 MiB → 4.31 MiB |   63 → 52 | `Parse::do_field_access` | `libjvm.dylib` |

##### `Parse::do_one_bytecode` (`libjvm.dylib`)

|  Change |        Delta |             % |               Size | Samples | Callee                           | Location       |
| ------: | -----------: | ------------: | -----------------: | ------: | -------------------------------- | -------------- |
|  -82.5% |   -1.031 MiB | 58.0% → 14.6% | 1.25 MiB → 224 KiB |  10 → 7 | `Parse::do_ifnull`               | `libjvm.dylib` |
|     new | +256.015 KiB |  0.0% → 16.7% |      0 B → 256 KiB |   0 → 1 | `GraphKit::array_ideal_length`   | `libjvm.dylib` |
| +300.4% |   +96.07 KiB |   1.4% → 8.3% |   32 KiB → 128 KiB |   1 → 3 | `GraphKit::null_check_common`    | `libjvm.dylib` |
|   -8.7% |  -64.015 KiB | 33.3% → 43.7% |  736 KiB → 672 KiB |   7 → 6 | `PhaseGVN::transform_no_reclaim` | `libjvm.dylib` |
| removed |  -64.015 KiB |   2.9% → 0.0% |       64 KiB → 0 B |   1 → 0 | `Type::make_from_constant`       | `libjvm.dylib` |

##### `Parse::do_all_blocks` (`libjvm.dylib`)

|  Change |        Delta |              % |              Size |   Samples | Callee                          | Location       |
| ------: | -----------: | -------------: | ----------------: | --------: | ------------------------------- | -------------- |
|   -3.6% | -735.593 KiB | 100.0% → 99.7% | 19.7 MiB → 19 MiB | 278 → 239 | `Parse::do_one_block`           | `libjvm.dylib` |
|  -65.2% | -480.085 KiB |    3.7% → 1.3% | 736 KiB → 256 KiB |     7 → 4 | `Parse::merge_common`           | `libjvm.dylib` |
|  -60.0% |  -96.015 KiB |    0.8% → 0.3% |  160 KiB → 64 KiB |     2 → 1 | `Parse::ensure_phis_everywhere` | `libjvm.dylib` |
| +100.0% |  +64.015 KiB |    0.3% → 0.7% |  64 KiB → 128 KiB |     1 → 2 | `GraphKit::clone_map`           | `libjvm.dylib` |
|     new |  +32.015 KiB |    0.0% → 0.2% |      0 B → 32 KiB |     0 → 1 | `GraphKit::uncommon_trap`       | `libjvm.dylib` |

##### `Parse::Parse` (`libjvm.dylib`)

|  Change |        Delta |           % |                Size |   Samples | Callee                    | Location       |
| ------: | -----------: | ----------: | ------------------: | --------: | ------------------------- | -------------- |
|  -51.2% | -672.062 KiB | 6.5% → 3.3% |  1.28 MiB → 640 KiB |    16 → 7 | `GraphKit::set_map_clone` | `libjvm.dylib` |
|   -3.3% | -671.578 KiB |      100.0% |   19.7 MiB → 19 MiB | 278 → 240 | `Parse::do_all_blocks`    | `libjvm.dylib` |
|  +15.7% | +255.984 KiB | 8.1% → 9.7% | 1.59 MiB → 1.84 MiB |   17 → 16 | `Parse::build_exits`      | `libjvm.dylib` |
| +140.1% | +224.132 KiB | 0.8% → 2.0% |   160 KiB → 384 KiB |     5 → 6 | `Parse::do_exits`         | `libjvm.dylib` |
|  +60.0% |  +96.054 KiB | 0.8% → 1.3% |   160 KiB → 256 KiB |     2 → 3 | `Parse::create_entry_map` | `libjvm.dylib` |

##### `ParseGenerator::generate` (`libjvm.dylib`)

| Change |        Delta |      % |              Size |   Samples | Callee         | Location       |
| -----: | -----------: | -----: | ----------------: | --------: | -------------- | -------------- |
|  -3.3% | -671.578 KiB | 100.0% | 19.7 MiB → 19 MiB | 278 → 240 | `Parse::Parse` | `libjvm.dylib` |

##### `Parse::merge_common` (`libjvm.dylib`)

|  Change |        Delta |             % |              Size | Samples | Callee                           | Location       |
| ------: | -----------: | ------------: | ----------------: | ------: | -------------------------------- | -------------- |
|  -46.7% | -224.031 KiB | 40.5% → 44.4% | 480 KiB → 256 KiB |   4 → 2 | `Type_Array::grow`               | `libjvm.dylib` |
| removed | -159.992 KiB |  13.5% → 0.0% |     160 KiB → 0 B |   2 → 0 | `Parse::ensure_phi`              | `libjvm.dylib` |
|  -60.0% |  -96.015 KiB | 13.5% → 11.1% |  160 KiB → 64 KiB |   2 → 1 | `Node::Node`                     | `libjvm.dylib` |
|  -20.0% |  -64.039 KiB | 27.0% → 44.4% | 320 KiB → 256 KiB |       4 | `Parse::merge_memory_edges`      | `libjvm.dylib` |
| removed |  -64.031 KiB |   5.4% → 0.0% |      64 KiB → 0 B |   2 → 0 | `PhaseGVN::transform_no_reclaim` | `libjvm.dylib` |

##### `G1BarrierSetC2::post_barrier` (`libjvm.dylib`)

|  Change |        Delta |             % |              Size | Samples | Callee                         | Location       |
| ------: | -----------: | ------------: | ----------------: | ------: | ------------------------------ | -------------- |
|  -54.8% | -544.093 KiB | 44.3% → 26.4% | 992 KiB → 448 KiB |  12 → 6 | `IdealKit::end_if`             | `libjvm.dylib` |
|  +38.5% | +160.039 KiB | 18.6% → 34.0% | 416 KiB → 576 KiB |       6 | `IdealKit::if_then`            | `libjvm.dylib` |
|  -21.0% | -128.007 KiB | 27.1% → 28.3% | 608 KiB → 480 KiB |  8 → 10 | `G1BarrierSetC2::g1_mark_card` | `libjvm.dylib` |
| removed |  -64.031 KiB |   2.9% → 0.0% |      64 KiB → 0 B |   2 → 0 | `GraphKit::sync_kit`           | `libjvm.dylib` |
| removed |  -32.015 KiB |   1.4% → 0.0% |      32 KiB → 0 B |   1 → 0 | `IdealKit::transform`          | `libjvm.dylib` |

##### `IdealLoopTree::counted_loop` (`libjvm.dylib`)

| Change |        Delta |      % |                Size | Samples | Callee                            | Location       |
| -----: | -----------: | -----: | ------------------: | ------: | --------------------------------- | -------------- |
| -17.4% | -520.171 KiB | 100.0% | 2.92 MiB → 2.42 MiB | 54 → 43 | `PhaseIdealLoop::is_counted_loop` | `libjvm.dylib` |
| -17.4% | -520.171 KiB | 100.0% | 2.92 MiB → 2.42 MiB | 54 → 43 | `IdealLoopTree::counted_loop`     | `libjvm.dylib` |

##### `GrowableArrayWithAllocator<unsigned int, GrowableArray<unsigned int>>::expand_to` (`libjvm.dylib`)

| Change |        Delta |      % |                Size | Samples | Callee        | Location       |
| -----: | -----------: | -----: | ------------------: | ------: | ------------- | -------------- |
| -21.1% | -480.101 KiB | 100.0% | 2.22 MiB → 1.75 MiB | 47 → 38 | `Arena::grow` | `libjvm.dylib` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in native bytes allocated in their leaf frame.

Common call stack: `Compile::Compile` (`libjvm.dylib`) ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`

|  Change |        Delta |             % |                Size |   Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ------: | -----------: | ------------: | ------------------: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   +5.4% |   +5.157 MiB |   7.0% → 7.4% |  95.6 MiB → 101 MiB | 763 → 787 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseLive::compute` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen`                                                                                                                                                                                                                                                                                                         |
|   +0.5% |   +2.029 MiB | 27.6% → 27.8% |   376 MiB → 378 MiB |     1,656 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIFG::init` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen`                                                                                                                                                                                                                                                                                                             |
|  +10.4% |  +928.32 KiB |   0.6% → 0.7% | 8.72 MiB → 9.63 MiB | 139 → 162 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize`                                                                                                                                                                                        |
|   +8.7% | +895.859 KiB |   0.7% → 0.8% |   10.1 MiB → 11 MiB | 184 → 175 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize`                                                                                                                                                                                                                    |
|   +1.7% | +657.429 KiB |   2.8% → 2.9% | 38.8 MiB → 39.5 MiB | 207 → 205 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen`                                                                                                                                                                                                                                                                                                                              |
|  +27.0% |     +646 KiB |          0.2% | 2.34 MiB → 2.97 MiB |   28 → 37 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseCFG::build_dominator_tree` ← `PhaseCFG::do_global_code_motion` ← `Compile::Code_Gen`                                                                                                                                                                                                                                                                                             |
|  +27.1% |     +608 KiB |          0.2% | 2.19 MiB → 2.78 MiB |        42 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Compile::remove_speculative_types` ← `Compile::Optimize`                                                                                                                                                                                                                                                                                     |
| +138.4% | +576.156 KiB |  <0.1% → 0.1% |   416 KiB → 992 KiB |   10 → 20 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `GrowableArrayWithAllocator<float, GrowableArray<float>>::expand_to` ← `PathFrequency::to` ← `PhaseIdealLoop::loop_predication_follow_branches` ← `PhaseIdealLoop::loop_predication_impl` ← `IdealLoopTree::loop_predication` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` |
|  +45.0% |  +576.14 KiB |          0.1% | 1.25 MiB → 1.81 MiB |   24 → 33 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `GrowableArrayWithAllocator<float, GrowableArray<float>>::expand_to` ← `PathFrequency::to` ← `PhaseIdealLoop::loop_predication_impl` ← `IdealLoopTree::loop_predication` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize`                                                                                  |
|  +67.9% | +520.554 KiB |          0.1% |  767 KiB → 1.26 MiB |   14 → 21 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `ConnectionGraph::ConnectionGraph` ← `ConnectionGraph::do_analysis` ← `Compile::Optimize`                                                                                                                                                                                                                                                                                              |
|   +6.0% | +512.078 KiB |   0.6% → 0.7% | 8.38 MiB → 8.88 MiB |   72 → 77 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node::out_grow` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen`                                                                                                                                                                                                                                                                                       |
| +749.8% | +480.093 KiB |         <0.1% |    64 KiB → 544 KiB |     2 → 8 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Block_Array::grow` ← `PhaseAggressiveCoalesce::insert_copies` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen`                                                                                                                                                                                                                                           |
|  +57.7% | +480.031 KiB |          0.1% |  832 KiB → 1.28 MiB |   12 → 14 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Block_Array::grow` ← `PhaseChaitin::insert_proj` ← `PhaseChaitin::split_DEF` ← `PhaseChaitin::Split` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen`                                                                                                                                                                                                    |
| +749.9% | +480.031 KiB |         <0.1% |    64 KiB → 544 KiB |     1 → 3 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `NodeHash::hash_find_insert` ← `PhaseIterGVN::transform_old` ← `PhaseIterGVN::optimize` ← `Compile::process_for_post_loop_opts_igvn` ← `Compile::Optimize`                                                                                                                                                                                                                             |
|   +9.1% |     +480 KiB |          0.4% |  5.13 MiB → 5.6 MiB |       100 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseCCP::transform` ← `PhaseCCP::do_transform` ← `Compile::Optimize`                                                                                                                                                                                                                                                                        |
| +233.3% | +448.046 KiB |         <0.1% |   192 KiB → 640 KiB |     2 → 5 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseIdealLoop::register_new_node` ← `PhaseIdealLoop::split_thru_phi` ← `PhaseIdealLoop::split_if_with_blocks_pre` ← `PhaseIdealLoop::split_if_with_blocks` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize`                         |
|   +1.7% | +433.281 KiB |          1.9% | 25.3 MiB → 25.8 MiB | 205 → 193 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Matcher::find_shared` ← `Matcher::match` ← `Compile::Code_Gen`                                                                                                                                                                                                                                                                                                                        |
|  +26.9% | +412.882 KiB |          0.1% |   1.5 MiB → 1.9 MiB |   27 → 33 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Scheduling::Scheduling` ← `PhaseOutput::Output` ← `Compile::Code_Gen`                                                                                                                                                                                                                                                                                                                 |
| +300.0% | +384.046 KiB |         <0.1% |   128 KiB → 512 KiB |     1 → 4 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Compile::identify_useful_nodes` ← `PhaseRemoveUseless::PhaseRemoveUseless` ← `Compile::inline_incrementally_cleanup` ← `Compile::process_late_inline_calls_no_inline` ← `Compile::Optimize`                                                                                                                                                  |
|   +4.0% | +352.046 KiB |   0.6% → 0.7% | 8.56 MiB → 8.91 MiB |   78 → 81 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Compile::identify_useful_nodes` ← `PhaseRemoveUseless::PhaseRemoveUseless`                                                                                                                                                                                                                                                                   |

### Improvements

Call stacks with the largest decrease in native bytes allocated in their leaf frame.

Common call stack: `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`) ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`

|  Change |        Delta |             % |                Size |       Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ------: | -----------: | ------------: | ------------------: | ------------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   -3.1% |   -9.651 MiB | 22.7% → 22.1% |   309 MiB → 300 MiB | 1,156 → 1,125 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::Dominators` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method`                                                                                                                                               |
|   -1.6% |   -4.912 MiB | 23.0% → 22.7% |   314 MiB → 309 MiB | 1,381 → 1,328 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::Dominators` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method`                                                                                                                                                                           |
|  -14.7% |   -1.718 MiB |   0.9% → 0.7% | 11.7 MiB → 9.94 MiB |     169 → 160 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method`                                                                                                                                     |
|  -51.2% | -672.156 KiB |  0.1% → <0.1% |  1.28 MiB → 640 KiB |        18 → 8 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `PhaseIdealLoop::set_idom` ← `PhaseIdealLoop::split_thru_region` ← `PhaseIdealLoop::do_split_if` ← `PhaseIdealLoop::split_if_with_blocks` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method`              |
|  -44.7% | -547.156 KiB |  0.1% → <0.1% |  1.19 MiB → 676 KiB |       17 → 13 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseRegAlloc::alloc_node_regs` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method`                                                                                                                                                                                                                                          |
|  -75.9% | -509.804 KiB |         <0.1% |   672 KiB → 162 KiB |        21 → 5 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseChaitin::Split` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method`                                                                                                                                                                                                                                                     |
|  -25.9% | -448.078 KiB |          0.1% | 1.69 MiB → 1.25 MiB |       25 → 20 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Compile::identify_useful_nodes` ← `Matcher::specialize_generic_vector_operands` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method`                                                                                                                                                                  |
| removed | -448.046 KiB |  <0.1% → 0.0% |       448 KiB → 0 B |         3 → 0 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `NodeHash::hash_insert` ← `ConnectionGraph::split_unique_types` ← `ConnectionGraph::compute_escape` ← `ConnectionGraph::do_analysis` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method`                                                                                                                                                                          |
|  -77.8% | -448.031 KiB |         <0.1% |   576 KiB → 128 KiB |         5 → 3 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Type_Array::grow` ← `PhaseValues::set_type_bottom` ← `PhaseIterGVN::transform` ← `gen_subtype_check_compare` ← `Phase::gen_subtype_check` ← `PhaseMacroExpand::expand_subtypecheck_node` ← `PhaseMacroExpand::expand_macro_nodes` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method`                                                        |
|   -3.9% | -447.953 KiB |          0.8% | 11.3 MiB → 10.8 MiB |     162 → 165 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method`                                                                                                         |
| removed | -416.093 KiB |  <0.1% → 0.0% |       416 KiB → 0 B |         6 → 0 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Block_Array::grow` ← `PhaseChaitin::insert_proj` ← `PhaseChaitin::split_Rematerialize` ← `PhaseChaitin::Split` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method`                                                                                                                                       |
|  -28.3% | -416.023 KiB |          0.1% | 1.44 MiB → 1.03 MiB |       16 → 12 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Matcher::ReduceInst` ← `Matcher::ReduceInst_Interior` ← `Matcher::ReduceInst` ← `Matcher::ReduceInst_Interior` ← `Matcher::ReduceInst` ← `Matcher::match_tree` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method`                                                                |
|  -44.4% | -384.093 KiB |  0.1% → <0.1% |   864 KiB → 480 KiB |       16 → 10 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `NodeHash::NodeHash` ← `Compile::Compile` ← `C2Compiler::compile_method`                                                                                                                                                                                                                                                                                                                |
|  -38.7% | -384.085 KiB |  0.1% → <0.1% |   992 KiB → 608 KiB |       25 → 17 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseIdealLoop::build_loop_late` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method`                                                                                                 |
|  -44.7% | -322.148 KiB |  0.1% → <0.1% |   721 KiB → 399 KiB |        14 → 9 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `LinearScan::number_instructions` ← `LinearScan::do_linear_scan` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method`                                                                                                                                                               |
|  -47.6% | -320.109 KiB |         <0.1% |   672 KiB → 352 KiB |        14 → 7 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `ConnectionGraph::split_AddP` ← `ConnectionGraph::split_unique_types` ← `ConnectionGraph::compute_escape` ← `ConnectionGraph::do_analysis` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method`                                                                                                                           |
|  -22.2% | -320.046 KiB |          0.1% | 1.41 MiB → 1.09 MiB |        10 → 7 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Block_Array::grow` ← `PhaseChaitin::insert_proj` ← `PhaseChaitin::split_USE` ← `PhaseChaitin::Split` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method`                                                                                                                                                 |
|  -81.8% | -288.093 KiB |         <0.1% |    352 KiB → 64 KiB |         7 → 1 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Compile::grow_node_notes` ← `Compile::copy_node_notes_to` ← `Node::clone` ← `PhaseCFG::call_catch_cleanup` ← `PhaseCFG::global_code_motion` ← `PhaseCFG::do_global_code_motion` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method`                                                                                                                              |
| removed | -288.062 KiB |  <0.1% → 0.0% |       288 KiB → 0 B |         4 → 0 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseIdealLoop::register_new_node` ← `PhaseIdealLoop::split_thru_phi` ← `PhaseIdealLoop::split_if_with_blocks_post` ← `PhaseIdealLoop::split_if_with_blocks` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` |
| removed | -256.031 KiB |  <0.1% → 0.0% |       256 KiB → 0 B |         2 → 0 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `NodeHash::hash_find_insert` ← `PhaseIterGVN::transform_old` ← `PhaseIterGVN::optimize` ← `Compile::remove_speculative_types` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method`                                                                                                                                                                                 |
